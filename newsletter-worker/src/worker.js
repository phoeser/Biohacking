/* Newsletter von Biohacking Kompakt – Cloudflare Worker (seit 28.10.2026).
 *
 * Endpunkte (https://nl.biohackingkompakt.de):
 *   POST /anmelden            E-Mail eintragen (Double-Opt-in), Formular oder fetch
 *   GET  /bestaetigen?t=…      Anmeldung bestätigen → /newsletter/bestaetigt.html
 *   GET  /abmelden?t=…         Seite mit Abmelde-Knopf (Link-Scanner melden so niemanden ab)
 *   POST /abmelden?t=…         abmelden (auch One-Click nach RFC 8058) → /newsletter/abgemeldet.html
 *   POST /versand              nur mit ADMIN_KEY: Ausgabe an alle Aktiven (oder Testadressen) an Make übergeben
 *   GET  /statistik            nur mit ADMIN_KEY: Zahlen
 *   GET  /export               nur mit ADMIN_KEY: alle Einträge als CSV (z. B. für einen späteren Anbieterwechsel)
 *
 * Speicher: KV-Namespace ABOS. Schlüssel "s:<email>" → Datensatz (JSON), Metadaten {st, t} für schnelles Auflisten;
 *           "t:<token>" → email.
 * Mails verschickt Make über kontakt@biohackingkompakt.de: HOOK_DOI (Bestätigungsmail), HOOK_VERSAND (Ausgabe).
 * Secrets (nur per wrangler secret put): ADMIN_KEY, HOOK_DOI, HOOK_VERSAND.
 */

const SITE = 'https://biohackingkompakt.de';
const ERLAUBT = [SITE, 'https://www.biohackingkompakt.de', 'https://phoeser.github.io'];
const EMAIL_RE = /^[^\s@<>()",;:]{1,64}@[a-z0-9.-]{1,190}\.[a-z]{2,24}$/i;
const DOI_PAUSE_MS = 10 * 60 * 1000;   // höchstens eine Bestätigungsmail je Adresse in 10 Minuten

function jetzt() { return new Date().toISOString(); }

function token() {
  const b = new Uint8Array(18);
  crypto.getRandomValues(b);
  return btoa(String.fromCharCode(...b)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function cors(req) {
  const o = req.headers.get('Origin') || '';
  return ERLAUBT.includes(o) ? { 'Access-Control-Allow-Origin': o, 'Vary': 'Origin' } : {};
}

function json(req, obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', ...cors(req) }
  });
}

function weiter(ziel) {
  return new Response(null, { status: 303, headers: { Location: ziel, 'Cache-Control': 'no-store' } });
}

function seite(titel, inhalt, status = 200) {
  const h = `<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex"><title>${titel} · Biohacking Kompakt</title>
<style>body{font-family:Inter,system-ui,-apple-system,Segoe UI,sans-serif;background:#fbfcfa;color:#1d2420;margin:0;display:flex;min-height:100vh;align-items:center;justify-content:center;line-height:1.6}
main{max-width:30rem;padding:2rem 1.25rem}h1{font-size:1.4rem}a{color:#22684e}button{font:inherit;font-weight:600;background:#2f8b6a;color:#fff;border:0;border-radius:99px;padding:.7rem 1.3rem;cursor:pointer}</style>
</head><body><main><h1>${titel}</h1>${inhalt}</main></body></html>`;
  return new Response(h, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } });
}

async function lesen(env, email) {
  const v = await env.ABOS.get('s:' + email);
  return v ? JSON.parse(v) : null;
}

async function schreiben(env, d) {
  await env.ABOS.put('s:' + d.email, JSON.stringify(d), { metadata: { st: d.status, t: d.token } });
}

async function formular(req) {
  const typ = req.headers.get('Content-Type') || '';
  if (typ.includes('application/json')) return await req.json();
  const f = await req.formData();
  return Object.fromEntries(f.entries());
}

function istAdmin(req, env) {
  const a = req.headers.get('Authorization') || '';
  return env.ADMIN_KEY && a === 'Bearer ' + env.ADMIN_KEY;
}

async function anmelden(req, env) {
  const willJson = (req.headers.get('Accept') || '').includes('application/json');
  const fertig = (ok, text) => willJson ? json(req, { ok, text }, ok ? 200 : 400)
    : weiter(SITE + (ok ? '/newsletter/danke.html' : '/newsletter/?fehler=1'));

  if (env.RATE_LIMITER) {
    const ip = req.headers.get('CF-Connecting-IP') || 'x';
    const { success } = await env.RATE_LIMITER.limit({ key: 'anm:' + ip });
    if (!success) return willJson ? json(req, { ok: false, text: 'Zu viele Versuche. Bitte versuch es in einer Minute noch einmal.' }, 429) : fertig(false);
  }
  let f;
  try { f = await formular(req); } catch (e) { return fertig(false, 'Ungültige Anfrage.'); }
  // Honigtopf: Menschen sehen das Feld nicht. Bots bekommen „ok“, es passiert aber nichts.
  if (f.website) return fertig(true, 'Fast geschafft.');
  const email = String(f.email || '').trim().toLowerCase();
  if (!EMAIL_RE.test(email)) return fertig(false, 'Bitte gib eine gültige E-Mail-Adresse ein.');
  const quelle = String(f.quelle || '').slice(0, 80);

  let d = await lesen(env, email);
  const ok = 'Fast geschafft: Wir haben dir eine Mail geschickt. Bitte klick auf den Link darin, um die Anmeldung zu bestätigen.';
  if (d && d.status === 'aktiv') return fertig(true, ok);   // nicht verraten, ob jemand schon angemeldet ist
  if (d && d.status === 'ausstehend' && d.letzteMail && Date.now() - Date.parse(d.letzteMail) < DOI_PAUSE_MS) return fertig(true, ok);
  if (!d || d.status === 'abgemeldet') {
    const alt = d;
    d = { email, status: 'ausstehend', token: token(), angemeldet: jetzt(), bestaetigt: null, abgemeldet: null, quelle };
    if (alt) { d.frueher = (alt.frueher || 0) + 1; await env.ABOS.delete('t:' + alt.token); }
    await env.ABOS.put('t:' + d.token, email);
  }
  d.letzteMail = jetzt();
  await schreiben(env, d);
  const r = await fetch(env.HOOK_DOI, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ to: email, link: new URL(req.url).origin + '/bestaetigen?t=' + d.token })
  });
  if (!r.ok) return willJson ? json(req, { ok: false, text: 'Die Bestätigungsmail konnte gerade nicht verschickt werden. Bitte versuch es später noch einmal.' }, 502) : fertig(false);
  return fertig(true, ok);
}

async function perToken(env, url) {
  const t = url.searchParams.get('t') || '';
  if (!/^[A-Za-z0-9_-]{20,40}$/.test(t)) return null;
  const email = await env.ABOS.get('t:' + t);
  if (!email) return null;
  const d = await lesen(env, email);
  return d && d.token === t ? d : null;
}

async function bestaetigen(env, url) {
  const d = await perToken(env, url);
  if (!d) return seite('Link ungültig', '<p>Dieser Bestätigungslink ist ungültig oder abgelaufen. Du kannst dich auf <a href="' + SITE + '/newsletter/">biohackingkompakt.de/newsletter</a> neu anmelden.</p>', 404);
  if (d.status !== 'aktiv') {
    d.status = 'aktiv'; d.bestaetigt = jetzt(); d.abgemeldet = null;
    await schreiben(env, d);
  }
  return weiter(SITE + '/newsletter/bestaetigt.html');
}

async function abmeldenSeite(env, url) {
  const d = await perToken(env, url);
  if (!d) return seite('Link ungültig', '<p>Dieser Abmeldelink ist ungültig. Schreib uns an kontakt@biohackingkompakt.de, dann tragen wir dich von Hand aus.</p>', 404);
  if (d.status === 'abgemeldet') return weiter(SITE + '/newsletter/abgemeldet.html');
  const t = url.searchParams.get('t');
  return seite('Newsletter abbestellen', `<p>Möchtest du den Newsletter von Biohacking Kompakt für <strong>${d.email.replace(/[<>&"]/g, '')}</strong> abbestellen?</p>
<form method="post" action="/abmelden?t=${encodeURIComponent(t)}"><button type="submit">Ja, abmelden</button></form>`);
}

async function abmelden(req, env, url) {
  const d = await perToken(env, url);
  const oneClick = (req.headers.get('Content-Type') || '').includes('application/x-www-form-urlencoded') &&
                   (await req.clone().text()).includes('List-Unsubscribe=One-Click');
  if (d && d.status !== 'abgemeldet') {
    d.status = 'abgemeldet'; d.abgemeldet = jetzt();
    await schreiben(env, d);
  }
  if (oneClick) return new Response('ok', { status: 200 });
  if (!d) return seite('Link ungültig', '<p>Dieser Abmeldelink ist ungültig. Schreib uns an kontakt@biohackingkompakt.de, dann tragen wir dich von Hand aus.</p>', 404);
  return weiter(SITE + '/newsletter/abgemeldet.html');
}

async function alle(env) {
  const liste = [];
  let cursor;
  do {
    const r = await env.ABOS.list({ prefix: 's:', cursor });
    for (const k of r.keys) liste.push({ email: k.name.slice(2), st: k.metadata && k.metadata.st, t: k.metadata && k.metadata.t });
    cursor = r.list_complete ? null : r.cursor;
  } while (cursor);
  return liste;
}

async function versand(req, env, origin) {
  const b = await req.json();
  if (!b.betreff || !b.html || !b.text) return json(req, { ok: false, fehler: 'betreff, html und text nötig' }, 400);
  let empf = (await alle(env)).filter(x => x.st === 'aktiv');
  if (Array.isArray(b.nur_an)) {
    const nur = b.nur_an.map(x => String(x).toLowerCase());
    empf = empf.filter(x => nur.includes(x.email));
  }
  const liste = empf.map(x => ({ email: x.email, abmelden: origin + '/abmelden?t=' + x.t }));
  if (b.trocken) return json(req, { ok: true, empfaenger: liste.length });
  if (!liste.length) return json(req, { ok: false, fehler: 'keine Empfänger' }, 400);
  const r = await fetch(env.HOOK_VERSAND, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ betreff: b.betreff, html: b.html, text: b.text, empfaenger: liste })
  });
  return json(req, { ok: r.ok, empfaenger: liste.length, make: r.status });
}

async function statistik(req, env) {
  const l = await alle(env);
  const z = { aktiv: 0, ausstehend: 0, abgemeldet: 0 };
  l.forEach(x => { z[x.st] = (z[x.st] || 0) + 1; });
  return json(req, { ok: true, gesamt: l.length, ...z });
}

async function exportCsv(env) {
  const zeilen = ['email;status;angemeldet;bestaetigt;abgemeldet;quelle'];
  for (const x of await alle(env)) {
    const d = await lesen(env, x.email);
    if (d) zeilen.push([d.email, d.status, d.angemeldet, d.bestaetigt || '', d.abgemeldet || '', (d.quelle || '').replace(/;/g, ',')].join(';'));
  }
  return new Response(zeilen.join('\n') + '\n', { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Cache-Control': 'no-store' } });
}

export default {
  async fetch(req, env) {
    const url = new URL(req.url);
    const p = url.pathname.replace(/\/+$/, '') || '/';
    try {
      if (req.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: { ...cors(req), 'Access-Control-Allow-Methods': 'POST', 'Access-Control-Allow-Headers': 'Content-Type, Accept', 'Access-Control-Max-Age': '86400' } });
      }
      if (p === '/anmelden' && req.method === 'POST') return await anmelden(req, env);
      if (p === '/bestaetigen' && req.method === 'GET') return await bestaetigen(env, url);
      if (p === '/abmelden' && req.method === 'GET') return await abmeldenSeite(env, url);
      if (p === '/abmelden' && req.method === 'POST') return await abmelden(req, env, url);
      if (['/versand', '/statistik', '/export'].includes(p)) {
        if (!istAdmin(req, env)) return json(req, { ok: false }, 401);
        if (p === '/versand' && req.method === 'POST') return await versand(req, env, url.origin);
        if (p === '/statistik') return await statistik(req, env);
        if (p === '/export') return await exportCsv(env);
      }
      if (p === '/') return weiter(SITE + '/newsletter/');
      return json(req, { ok: false }, 404);
    } catch (e) {
      console.log('Fehler', p, e && e.message);
      return json(req, { ok: false, text: 'Da ist etwas schiefgelaufen. Bitte versuch es später noch einmal.' }, 500);
    }
  }
};
