/* Biohacking Supplement Check – App-Logik
 * 3 Kategorien: Supplement-Check · Symptom · Erfahrungsberichte
 * Hash-Router + lokale DB + Gemini-Fallback.
 */

(function () {
  'use strict';

  const AI_MODEL = 'gemini-2.5-flash';

  // Spotify-Embeds erst auf Klick laden (verhindert, dass viele DRM/HDCP-
  // Player gleichzeitig aktiv sind – das ließ bei manchen Monitoren den
  // Bildschirm periodisch schwarz werden). Facade-Button lädt genau einen.
  window.loadSpotifyEmbed = function (btn, id) {
    const wrap = btn && btn.closest ? btn.closest('.exp-podcast-spotify-facade') : null;
    if (!wrap) return;
    const f = document.createElement('iframe');
    f.className = 'exp-podcast-spotify';
    f.style.cssText = 'border-radius:12px;width:100%;height:152px;border:0;margin:8px 0';
    f.setAttribute('allow', 'clipboard-write; encrypted-media; fullscreen; picture-in-picture');
    f.src = 'https://open.spotify.com/embed/episode/' + id + '?utm_source=generator';
    wrap.innerHTML = '';
    wrap.appendChild(f);
  };

  // Podcast-Block. Eine Quelle für alle Bereiche (Supplements, Peptide,
  // Khavinson, Anwendungen, Blutwerte) – vorher lag der Code doppelt vor.
  function podcastsHtml(list) {
    if (!list || !list.length) return '';
    return `<div class="exp-podcasts"><div class="exp-podcasts-label">🎧 Podcast-Folgen (${list.length})</div>${list.map(p => `<div class="exp-podcast">
            <div class="exp-podcast-head"><span class="exp-podcast-icon">🎧</span><div class="exp-podcast-titles"><div class="exp-podcast-title">${escapeHtml(p.title)}</div>${p.lengthLabel ? `<div class="exp-podcast-meta">${escapeHtml(p.lengthLabel)}</div>` : ''}</div></div>
            ${p.spotify ? `<div class="exp-podcast-spotify-facade"><button type="button" class="exp-spotify-load" onclick="loadSpotifyEmbed(this,'${escapeHtml(p.spotify)}')" style="width:100%;min-height:56px;margin:8px 0;border:0;border-radius:12px;background:#1db954;color:#fff;font-weight:600;font-size:15px;cursor:pointer">▶ Spotify-Player laden</button></div><div class="exp-podcast-links"><a href="https://open.spotify.com/episode/${escapeHtml(p.spotify)}" target="_blank" rel="noopener">▶ Auf Spotify anhören</a></div>` : `<audio class="exp-podcast-audio" controls preload="none" src="${escapeHtml(p.audio)}"></audio>`}
            ${p.note ? `<div class="exp-podcast-note">${escapeHtml(p.note)}</div>` : ''}
            ${(p.sources && p.sources.length) ? `<details class="exp-podcast-src"><summary>Quellen der Folge (${p.sources.length})</summary><ul>${p.sources.map(q => `<li><a href="${escapeHtml(q.url)}" target="_blank" rel="noopener">${escapeHtml(q.title)}</a></li>`).join('')}</ul></details>` : ''}
          </div>`).join('')}</div>`;
  }

  // ---- BK-Score ---------------------------------------------------------
  // Vier Achsen, die den WISSENSSTAND bewerten, nicht die Substanz.
  // Regelwerk und Ankerpunkte stehen im Kopf von js/data/scores.js.

  const SCORE_ACHSEN = [
    { key: 'evidenz',     label: 'Human-Evidenz',        hilfe: 'Wie viel und wie gute Daten am Menschen?' },
    { key: 'mechanismus', label: 'Mechanismus',          hilfe: 'Wie gut ist die Wirkkette verstanden?' },
    { key: 'sicherheit',  label: 'Sicherheits-Datenlage', hilfe: 'Wie gut ist die Sicherheit untersucht? Nicht: wie sicher es ist.' },
    { key: 'hype',        label: 'Hype-Abstand',         hilfe: '10 heißt: die Werbung bleibt auf Höhe der Daten.' },
    { key: 'anwendung',   label: 'Anwendungserfahrung',  hilfe: 'Wie viel dokumentierte Anwendung am Menschen vorliegt – seit wann, wie breit, in welchem Rahmen. Misst nicht, ob es wirkt.' }
  ];

  function scoreFuer(view, id) {
    if (typeof BK_SCORES === 'undefined') return null;
    return BK_SCORES.find(s => s.id === id && s.view === view) || null;
  }

  function balken(wert) {
    const breite = Math.max(0, Math.min(10, wert)) * 10;
    return `<span class="sc-bar"><span class="sc-bar-fill" style="width:${breite}%"></span></span>`;
  }

  function scoreHtml(view, id) {
    const s = scoreFuer(view, id);
    if (!s) return '';
    return `<div class="sc-block">
      <div class="sc-kopf">
        <span class="sc-titel">BK-Score</span>
        <span class="sc-label">${escapeHtml(bkLabel(s))}</span>
      </div>
      <div class="sc-achsen">${SCORE_ACHSEN.map(a => `<div class="sc-achse" title="${escapeHtml(a.hilfe)}">
        <span class="sc-name">${escapeHtml(a.label)}</span>
        ${balken(s[a.key])}
        <span class="sc-wert">${s[a.key]}</span>
      </div>`).join('')}</div>
      <p class="sc-beleg">${escapeHtml(s.beleg)}</p>
      <p class="sc-fuss">Bewertet wird der Wissensstand, nicht die Substanz. Subjektive Einschätzung von Biohacking Kompakt nach offengelegten Regeln – keine wissenschaftliche Bewertung und keine medizinische Empfehlung. <a href="#score">Alle Bewertungen und die Vergaberegeln</a></p>
    </div>`;
  }

  let scoreSortierung = 'evidenz';

  function renderScoreListe() {
    const box = $('#sc-liste');
    if (!box || typeof BK_SCORES === 'undefined') return;
    const chips = $('#sc-chips');
    if (chips && !chips.dataset.fertig) {
      chips.innerHTML = SCORE_ACHSEN.map((a, i) =>
        `<button type="button" class="chip ${i === 0 ? 'chip--active' : ''}" data-sc="${a.key}">${escapeHtml(a.label)}</button>`).join('');
      chips.addEventListener('click', e => {
        const b = e.target.closest('[data-sc]');
        if (!b) return;
        $$('.chip', chips).forEach(x => x.classList.toggle('chip--active', x === b));
        scoreSortierung = b.dataset.sc;
        renderScoreListe();
      });
      chips.dataset.fertig = '1';
    }
    // Hype-Abstand aufsteigend: die kleinste Zahl ist die interessanteste.
    const auf = scoreSortierung === 'hype';
    const liste = BK_SCORES.slice().sort((a, b) =>
      auf ? a[scoreSortierung] - b[scoreSortierung] : b[scoreSortierung] - a[scoreSortierung]);
    box.innerHTML = liste.map((s, i) => {
      const name = nameFuerScore(s);
      return `<a class="sc-zeile" href="#${escapeHtml(s.view)}/${escapeHtml(s.id)}">
        <span class="sc-rang">${i + 1}</span>
        <span class="sc-zeile-name">${escapeHtml(name)}<span class="sc-zeile-label">${escapeHtml(bkLabel(s))}</span></span>
        <span class="sc-zeile-wert">${balken(s[scoreSortierung])}<b>${s[scoreSortierung]}</b></span>
      </a>`;
    }).join('');
    const hinweis = $('#sc-hinweis');
    if (hinweis) hinweis.textContent = auf
      ? 'Aufsteigend sortiert: oben steht, wo die Vermarktung am weitesten vor den Daten liegt.'
      : 'Absteigend sortiert: oben steht der beste Wert.';
  }

  function nameFuerScore(s) {
    const quellen = {
      supplement: typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : [],
      experimental: typeof EXPERIMENTAL !== 'undefined' ? EXPERIMENTAL : [],
      behandlungen: typeof THERAPIES !== 'undefined' ? THERAPIES : [],
      khavinson: typeof KHAVINSON !== 'undefined' ? KHAVINSON : []
    };
    const t = (quellen[s.view] || []).find(x => x.id === s.id);
    return t ? (t.name || s.id) : s.id;
  }

  // ---- Änderungsprotokoll ----------------------------------------------
  // Eine Quelle (js/data/aenderungen.js), zwei Darstellungen: die vollständige
  // Liste unter #aenderungen und ein kurzer Kasten in der betroffenen Karte.

  function aenderungenFuer(view, id) {
    if (typeof AENDERUNGEN === 'undefined') return [];
    return AENDERUNGEN.filter(a => a.ziel && a.ziel.id === id && a.ziel.view === view);
  }

  function chgDatum(iso) {
    const t = String(iso).split('-');
    return t.length === 3 ? (t[2] + '.' + t[1] + '.' + t[0]) : iso;
  }

  function aenderungenHtml(view, id) {
    const liste = aenderungenFuer(view, id);
    if (!liste.length) return '';
    return `<div class="chg-inline">
      <div class="chg-inline-label">🔄 Was sich geändert hat</div>
      ${liste.map(a => `<div class="chg-inline-item">
        <span class="chg-datum">${escapeHtml(chgDatum(a.datum))}</span>
        <strong>${escapeHtml(a.titel)}</strong>
        <p>${escapeHtml(a.text)}</p>
        ${a.quelle ? `<a class="chg-quelle" href="${escapeHtml(a.quelle.url)}" target="_blank" rel="noopener">${escapeHtml(a.quelle.titel)}</a>` : ''}
      </div>`).join('')}
    </div>`;
  }

  function renderAenderungen() {
    const box = $('#chg-liste');
    if (!box || typeof AENDERUNGEN === 'undefined') return;
    const sortiert = AENDERUNGEN.slice().sort((a, b) => (a.datum < b.datum ? 1 : a.datum > b.datum ? -1 : 0));
    box.innerHTML = sortiert.map(a => {
      const ziel = (a.ziel && a.ziel.id) ? ('#' + a.ziel.view + '/' + a.ziel.id) : null;
      return `<article class="chg-card chg-card--${escapeHtml((a.typ || '').toLowerCase())}">
        <div class="chg-kopf">
          <span class="chg-datum">${escapeHtml(chgDatum(a.datum))}</span>
          <span class="chg-typ">${escapeHtml(a.typ || '')}</span>
        </div>
        <h3>${escapeHtml(a.titel)}</h3>
        <p>${escapeHtml(a.text)}</p>
        <div class="chg-fuesse">
          ${ziel ? `<a class="chg-ziel" href="${escapeHtml(ziel)}">Zum Eintrag →</a>` : ''}
          ${a.quelle ? `<a class="chg-quelle" href="${escapeHtml(a.quelle.url)}" target="_blank" rel="noopener">${escapeHtml(a.quelle.titel)}</a>` : ''}
        </div>
      </article>`;
    }).join('');
  }

  // Peptide-Bezugsquellen (immer unter "Praxis & Community" gelistet).
  // ►►► HIER PFLEGEN: sobald Affiliate-/Partner-Zugang da ist, 'ref' (Ref-Link) und
  // 'code' (Rabattcode) eintragen. Solange 'ref' leer ist, wird die normale Shop-URL
  // verlinkt; solange 'code' leer ist, wird kein Code angezeigt.
  const PEPTIDE_SHOPS = [
    { name: 'Particle Peptides (EU · unabhängig laborgeprüft)', url: 'https://particlepeptides.com/en/', ref: '', code: '' },
    { name: 'primalpeptides.nl',                                url: 'https://primalpeptides.nl/en',      ref: '', code: '' },
    { name: 'biolabshop.de',                                    url: 'https://biolabshop.de',             ref: '', code: '' }
  ];
  const PEPTIDE_BEZUG_LIS = PEPTIDE_SHOPS.map(function (s) {
    var href = s.ref || s.url;
    var code = s.code ? ' · Code: <strong>' + s.code + '</strong>' : '';
    return '<li><a href="' + href + '" target="_blank" rel="noopener sponsored">' + s.name + '</a>' + code + '</li>';
  }).join('');
  const PEPTIDE_BEZUG_NOTE = '<div class="exp-community-note exp-bezug-note">⚠ Bezugsquellen sind <strong>keine Empfehlung</strong> und keine Garantie für Zuverlässigkeit oder Qualität. Anbieter wechseln häufig und bewegen sich meist in einer rechtlichen Grauzone. Teils Partner-/Affiliate-Links (Werbung).</div>';
  // Proxy via Cloudflare Worker — versteckt den Gemini-Key vor dem Browser.
  // Worker-Code siehe cloudflare-worker.js, Secret GEMINI_API_KEY liegt in Cloudflare.
  const AI_PROXY_BASE = 'https://bhc-proxy.phoeser.workers.dev';
  const AI_ENDPOINT = (model) =>
    `${AI_PROXY_BASE}/v1beta/models/${model}:generateContent`;
  const URL_CHECK_ENDPOINT = `${AI_PROXY_BASE}/check`;
  // TTL nur für "muss ich im Hintergrund neu laden?" – die Anzeige bleibt
  // IMMER sichtbar, auch wenn der Cache älter ist.

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  function escapeHtml(text) {
    if (text == null) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Erlaubt nur http/https-Links. Alles andere (javascript:, data:, …) wird
  // auf einen harmlosen Anker umgebogen – KI-generierte URLs sind nicht vertrauenswürdig.
  function safeHttpUrl(url, fallback) {
    return (url && /^https?:\/\//i.test(String(url).trim())) ? String(url).trim() : (fallback || '#erfahrungen');
  }

  // Holt das JSON-Objekt aus einer KI-Antwort.
  //
  // Der Prompt bittet um reines JSON ohne Markdown - Modelle halten sich nur
  // meistens daran. Deshalb drei Stufen: direkt parsen, Codeblock abschaelen,
  // und zur Not die aeusserste geschweifte Klammer herausschneiden. Gibt null
  // zurueck, wenn nichts Brauchbares drinsteht; der Aufrufer unterscheidet
  // dann anhand von finishReason, woran es lag.
  function extractJson(text) {
    if (!text) return null;
    let roh = String(text).trim();

    const versuch = (str) => {
      try { const o = JSON.parse(str); return (o && typeof o === 'object') ? o : null; }
      catch (e) { return null; }
    };

    let out = versuch(roh);
    if (out) return out;

    // ```json ... ``` oder ``` ... ```
    const block = roh.match(/```(?:json)?\s*([\s\S]*?)```/i);
    if (block) {
      out = versuch(block[1].trim());
      if (out) return out;
      roh = block[1].trim();
    }

    // Von der ersten { bis zur letzten } - faengt vorangestellte Prosa ab.
    const a = roh.indexOf('{'), b = roh.lastIndexOf('}');
    if (a !== -1 && b > a) {
      const kern = roh.slice(a, b + 1);
      out = versuch(kern);
      if (out) return out;
      // Letzter Versuch: nachgestellte Kommas entfernen.
      out = versuch(kern.replace(/,\s*([}\]])/g, '$1'));
      if (out) return out;
    }
    return null;
  }

  function normalizeStr(s) {
    return (s || '')
      .toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function mdToHtml(md) {
    if (!md) return '';
    let html = escapeHtml(md);
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^# (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    const lines = html.split('\n');
    let out = [];
    let inList = false;
    for (const line of lines) {
      const m = line.match(/^\s*[-*]\s+(.+)$/);
      if (m) {
        if (!inList) { out.push('<ul>'); inList = true; }
        out.push('<li>' + m[1] + '</li>');
      } else {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push(line);
      }
    }
    if (inList) out.push('</ul>');
    html = out.join('\n');
    html = html
      .split(/\n{2,}/)
      .map(p => {
        if (/^\s*<(h\d|ul|ol|li|p|div|blockquote)/.test(p)) return p;
        return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
      })
      .join('\n');
    return html;
  }

  // Stub: Wir nutzen jetzt den Cloudflare-Proxy, der den Key intern setzt.
  // Funktion bleibt truthy, damit bestehende `if (!loadApiKey())`-Checks weiterlaufen.
  function loadApiKey() {
    return 'proxy';
  }

  async function callGemini(prompt, opts = {}) {
    const body = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: opts.temperature ?? 0.4,
        maxOutputTokens: opts.maxOutputTokens ?? 2048,
        // 2.5-Modelle haben "Thinking" an – ohne das Deaktivieren fressen die
        // internen Reasoning-Tokens das Output-Budget und die Antwort ist leer.
        thinkingConfig: { thinkingBudget: 0 }
      }
    };

    if (opts.systemInstruction) {
      body.systemInstruction = { parts: [{ text: opts.systemInstruction }] };
    }
    if (opts.grounding) {
      body.tools = [{ google_search: {} }];
    }

    const res = await fetch(AI_ENDPOINT(AI_MODEL), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      let detail = '';
      try {
        const j = await res.json();
        detail = j?.error?.message ? ' · ' + j.error.message : '';
      } catch (_) {}
      throw new Error('HTTP ' + res.status + detail);
    }

    const data = await res.json();
    const cand = data?.candidates?.[0];
    const parts = cand?.content?.parts || [];
    const text = parts.map(p => p.text || '').join('').trim();

    const sources = [];
    const chunks = cand?.groundingMetadata?.groundingChunks || [];
    for (const c of chunks) {
      if (c.web && c.web.uri) {
        sources.push({ title: c.web.title || c.web.uri, uri: c.web.uri });
      }
    }
    return { text, sources };
  }

  // Für MyData nutzbar machen (KI-Empfehlungen über denselben Proxy).
  window.BHKGemini = callGemini;

  const VALID_VIEWS = ['home', 'supplement', 'symptom', 'tagescheck', 'experimental', 'behandlungen', 'signalwege', 'blutwerte', 'erfahrungen', 'bezugsquellen', 'mydata', 'score', 'aenderungen', 'about'];

  // Khavinson-Eintraege leben in der Experimentelles-Ansicht.
  const VIEW_ALIAS = { khavinson: 'experimental' };

  // Tiefe Links: #experimental/retatrutide, #behandlungen/hbot, #supplement/kreatin
  // und #folge/59 (springt auf den Eintrag, der zu dieser Podcast-Folge gehoert).
  // Wird beim Routen gesetzt und direkt nach dem Rendern der Ansicht abgearbeitet.
  let offenerSprung = null;

  function currentView() {
    const roh = (location.hash || '').replace(/^#/, '').split(/[?&]/)[0];
    const teile = roh.split('/').filter(Boolean);
    const kopf = teile[0] || '';
    const rest = teile.slice(1).join('/');
    offenerSprung = null;

    if (kopf === 'folge' && rest) {
      const f = (typeof PODCAST_FOLGEN !== 'undefined' ? PODCAST_FOLGEN : [])
        .find(x => String(x.nr) === rest);
      if (f && f.ziel && f.ziel.id) {
        offenerSprung = f.ziel;
        return VIEW_ALIAS[f.ziel.view] || f.ziel.view;
      }
      if (f && f.ziel) return VIEW_ALIAS[f.ziel.view] || f.ziel.view;
      return 'home';
    }

    const view = VIEW_ALIAS[kopf] || kopf;
    if (!VALID_VIEWS.includes(view)) return 'home';
    if (rest) offenerSprung = { view: kopf, id: rest };
    return view;
  }

  function springeZuEintrag(view, id) {
    if (!id) return;
    if (view === 'supplement') {
      const s = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : []).find(x => x.id === id);
      const inp = document.getElementById('supplement-search');
      if (s && inp) { inp.value = s.name; inp.dispatchEvent(new Event('input', { bubbles: true })); }
      return;
    }
    if (view === 'experimental' || view === 'khavinson') {
      currentExpCat = 'all';
      const chips = document.getElementById('exp-chips');
      if (chips) $$('.chip', chips).forEach(x => x.classList.toggle('chip--active', x.dataset.ecat === 'all'));
      renderExperimental();
      highlightExpCard((view === 'khavinson' ? 'khcard-' : 'expcard-') + id);
      return;
    }
    if (view === 'behandlungen') {
      currentThCat = 'all';
      const chips = document.getElementById('th-chips');
      if (chips) $$('.chip', chips).forEach(x => x.classList.toggle('chip--active', x.dataset.tcat === 'all'));
      renderBehandlungen();
      highlightExpCard('thcard-' + id);
    }
  }

  function showView(name) {
    if (!VALID_VIEWS.includes(name)) name = 'home';
    $$('.view').forEach(v => {
      v.classList.toggle('hidden', v.dataset.view !== name);
    });
    $$('.main-nav a').forEach(a => {
      a.classList.toggle('active', a.dataset.nav === name);
    });
    window.scrollTo({ top: 0 });
    document.body.dataset.view = name;

    if (name === 'erfahrungen') onEnterErfahrungen();
    if (name === 'bezugsquellen') renderShopSection();
    if (name === 'blutwerte') onEnterBlutwerte();
    if (name === 'home') onEnterHome();
    if (name === 'experimental') onEnterExperimental();
    if (name === 'behandlungen') onEnterBehandlungen();
    if (name === 'tagescheck') onEnterTagescheck();
    if (name === 'aenderungen') renderAenderungen();
    if (name === 'score') renderScoreListe();

    if (offenerSprung) {
      const ziel = offenerSprung;
      offenerSprung = null;
      setTimeout(() => springeZuEintrag(ziel.view, ziel.id), 180);
    }
  }

  function initRouter() {
    window.addEventListener('hashchange', () => showView(currentView()));
    showView(currentView());
  }

  // "Heute bei Paul & Paula" – die zuletzt veroeffentlichte Folge auf der Startseite.
  // Quelle ist js/data/podcast.js; terminierte Folgen mit Datum in der Zukunft
  // werden ausgeblendet, bis sie wirklich draussen sind.
  function renderPodHeute() {
    const box = $('#pod-heute');
    if (!box || typeof PODCAST_FOLGEN === 'undefined') return;
    // Die Folgen erscheinen um 10:00 Ortszeit. Ein reiner Datumsvergleich wuerde
    // sie ab Mitternacht anzeigen – acht Stunden lang mit totem Spotify-Link.
    const jetzt = Date.now();
    const raus = PODCAST_FOLGEN
      .filter(f => new Date(f.ab || (f.datum + 'T00:00:00Z')).getTime() <= jetzt)
      .sort((a, b) => (a.datum === b.datum ? b.nr - a.nr : (a.datum < b.datum ? 1 : -1)));
    if (!raus.length) return;

    const f = raus[0];
    const datum = f.datum.split('-').reverse().join('.');
    const setzen = (id, wert) => { const el = document.getElementById(id); if (el) el.textContent = wert; };
    setzen('pod-heute-nr', 'Folge ' + f.nr);
    setzen('pod-heute-titel', f.titel);
    setzen('pod-heute-meta', datum + ' \u00b7 rund 12 Minuten \u00b7 Faktencheck');

    const spot = document.getElementById('pod-heute-spotify');
    if (spot) spot.href = 'https://open.spotify.com/episode/' + f.spotify;
    const show = document.getElementById('pod-heute-show');
    if (show && typeof PODCAST_SHOW !== 'undefined') show.href = PODCAST_SHOW.spotify;
    const apple = document.getElementById('pod-heute-apple');
    if (apple && typeof PODCAST_SHOW !== 'undefined' && PODCAST_SHOW.apple) apple.href = PODCAST_SHOW.apple;

    const haupt = document.getElementById('pod-heute-link');
    const thema = document.getElementById('pod-heute-thema');
    if (f.ziel && f.ziel.id) {
      const ziel = '#' + f.ziel.view + '/' + f.ziel.id;
      if (haupt) haupt.href = ziel;
      if (thema) { thema.href = ziel; thema.hidden = false; }
    } else if (f.ziel) {
      if (haupt) haupt.href = '#' + f.ziel.view;
      if (thema) { thema.href = '#' + f.ziel.view; thema.hidden = false; }
    } else {
      if (haupt) haupt.href = 'https://open.spotify.com/episode/' + f.spotify;
      if (thema) thema.hidden = true;
    }

    const liste = document.getElementById('pod-heute-liste');
    if (liste) {
      liste.innerHTML = raus.slice(1, 4).map(x => {
        const ziel = (x.ziel && x.ziel.id) ? ('#' + x.ziel.view + '/' + x.ziel.id) : ('#folge/' + x.nr);
        return '<li><a href="' + escapeHtml(ziel) + '"><span class="pod-liste-nr">' + x.nr +
               '</span>' + escapeHtml(x.titel) + '</a></li>';
      }).join('');
    }
    box.hidden = false;
  }

  function onEnterHome() {
    renderPodHeute();
    const sSup = $('#stat-supplements');
    const sTip = $('#stat-tips');
    const sGoal = $('#stat-goals');
    if (sSup) sSup.textContent = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS.length : '–');
    if (sTip) sTip.textContent = (typeof TIPS !== 'undefined' ? TIPS.length : '–');
    if (sGoal) sGoal.textContent = (typeof GOALS !== 'undefined' ? GOALS.length : '–');
    renderHomeErfahrungen();
  }

  // ============ STARTSEITE: ERFAHRUNGSBERICHTE-VORSCHAU ============
  // Ersetzt seit v118 die frühere KI-News-Vorschau. Rein lokale Daten,
  // deshalb kein Laden, kein Cache, kein API-Key nötig.
  function renderHomeErfahrungen() {
    const statusEl = $('#home-erfahrungen-status');
    const listEl = $('#home-erfahrungen-list');
    if (!listEl) return;
    if (typeof ERFAHRUNGEN === 'undefined') {
      listEl.innerHTML = '';
      if (statusEl) statusEl.innerHTML = '';
      return;
    }

    const items = allErfahrungen()
      .slice()
      .sort((a, b) => String(b.datum || '').localeCompare(String(a.datum || '')))
      .slice(0, 3);

    if (statusEl) {
      const n = allErfahrungen().length;
      statusEl.innerHTML = `<span class="ok">${n} ${n === 1 ? 'Bericht' : 'Berichte'} · ${SHOPS.length} ${SHOPS.length === 1 ? 'Shop' : 'Shops'}</span>`;
    }

    if (!items.length) {
      listEl.innerHTML = `<div class="home-erf-empty">Noch keine Berichte veröffentlicht.</div>`;
      return;
    }

    listEl.innerHTML = items.map(e => {
      const a = ERFAHRUNG_AUTOREN[e.autor] || ERFAHRUNG_AUTOREN.recherche;
      return `
        <a class="home-erf-card" href="#erfahrungen" data-nav="erfahrungen" data-erf-id="${escapeHtml(e.id)}">
          <div class="home-erf-top">
            <span class="erf-badge ${escapeHtml(a.klasse)}">${escapeHtml(a.label)}</span>
            ${e.demo ? '<span class="erf-badge is-demo">Beispiel</span>' : ''}
            ${e.anzeige ? '<span class="erf-badge is-ad">Anzeige</span>' : ''}
          </div>
          <h4>${escapeHtml(e.emoji ? e.emoji + ' ' : '')}${escapeHtml(e.substanz || '')}</h4>
          <p>${escapeHtml(e.fazit || '')}</p>
          ${rabattKurz(e)}
          ${renderSterne(e.bewertung)}
        </a>
      `;
    }).join('');
  }

  function renderSterne(n) {
    if (!n || typeof n !== 'number') return '';
    const full = Math.max(0, Math.min(5, Math.round(n)));
    return `<div class="erf-sterne" aria-label="Bewertung ${full} von 5">${'★'.repeat(full)}${'☆'.repeat(5 - full)}</div>`;
  }
  function initSupplementView() {
    const input = $('#supplement-search');
    const grid = $('#supplement-grid');
    const detail = $('#supplement-detail');
    const aiBox = $('#supplement-ai');
    const noRes = $('#supplement-no-results');
    const askBtn = $('#supplement-ask-ai');
    const filterBar = $('#category-filters');
    const datalist = $('#supplement-datalist');
    const listHead = $('#supplement-list-title');
    const listCount = $('#supplement-list-count');

    if (!input || typeof SUPPLEMENTS === 'undefined') return;

    datalist.innerHTML = SUPPLEMENTS
      .map(s => `<option value="${escapeHtml(s.name)}"></option>`)
      .join('');

    const categories = Array.from(new Set(SUPPLEMENTS.map(s => s.category))).sort();
    filterBar.innerHTML =
      `<button class="chip chip--active" data-cat="all">Alle</button>` +
      categories.map(c => `<button class="chip" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');

    let activeCat = 'all';
    let currentQuery = '';

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      activeCat = btn.dataset.cat;
      $$('.chip', filterBar).forEach(c => c.classList.toggle('chip--active', c === btn));
      render();
    });

    input.addEventListener('input', () => {
      currentQuery = input.value;
      render();
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = normalizeStr(input.value);
        const exact = SUPPLEMENTS.find(s => normalizeStr(s.name) === q);
        if (!exact) askSupplementAi(input.value);
      }
    });

    askBtn?.addEventListener('click', () => askSupplementAi(currentQuery));

    function setCount(n, label) {
      if (listCount) listCount.textContent = n > 0 ? `${n} ${n === 1 ? 'Eintrag' : 'Einträge'}` : '';
      if (listHead && label) listHead.textContent = label;
    }

    function render() {
      const q = normalizeStr(currentQuery);
      const catFilter = activeCat === 'all' ? null : activeCat;

      if (q.length >= 2) {
        const exact = SUPPLEMENTS.find(s =>
          normalizeStr(s.name) === q || normalizeStr(s.altNames || '') === q
        );
        if (exact) {
          showDetail(exact);
          grid.innerHTML = '';
          noRes.classList.add('hidden');
          aiBox.classList.add('hidden');
          setCount(0, '');
          return;
        }
        const filtered = SUPPLEMENTS.filter(s => {
          if (catFilter && s.category !== catFilter) return false;
          const blob = normalizeStr([s.name, s.altNames, s.short, s.description, (s.tags||[]).join(' ')].join(' '));
          return blob.includes(q);
        });
        detail.classList.add('hidden');
        aiBox.classList.add('hidden');
        if (filtered.length === 0) {
          grid.innerHTML = '';
          noRes.classList.remove('hidden');
          setCount(0, 'Keine Treffer');
          return;
        }
        noRes.classList.add('hidden');
        grid.innerHTML = filtered.map(cardHtml).join('');
        setCount(filtered.length, `Suchtreffer für „${currentQuery.trim()}"`);
        return;
      }

      detail.classList.add('hidden');
      aiBox.classList.add('hidden');
      noRes.classList.add('hidden');
      const filtered = catFilter ? SUPPLEMENTS.filter(s => s.category === catFilter) : SUPPLEMENTS;
      grid.innerHTML = filtered.map(cardHtml).join('');
      setCount(filtered.length, catFilter ? `Kategorie: ${catFilter}` : 'Alle Supplements');
    }

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-sid]');
      if (!card) return;
      const s = SUPPLEMENTS.find(x => x.id === card.dataset.sid);
      if (s) {
        // Suchfeld NICHT füllen — so bleibt die Liste beim Zurück gehen intakt
        showDetail(s);
        grid.innerHTML = '';
        setCount(0, '');
        window.scrollTo({ top: detail.offsetTop - 80, behavior: 'smooth' });
      }
    });

    // Zurück-Button im Detail: Suche leeren, Liste wieder anzeigen
    detail.addEventListener('click', (e) => {
      if (!e.target.closest('[data-supp-back]')) return;
      input.value = '';
      currentQuery = '';
      detail.classList.add('hidden');
      aiBox.classList.add('hidden');
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      input.focus();
    });

    function cardHtml(s) {
      const ev = s.evidence ? `<span class="ev ev-${s.evidence}">${s.evidence}</span>` : '';
      return `
        <button class="supp-card" data-sid="${escapeHtml(s.id)}">
          <div class="supp-head">
            <span class="supp-cat">${escapeHtml(s.category)}</span>
            ${ev}
          </div>
          <h3>${escapeHtml(s.name)}</h3>
          ${s.altNames ? `<div class="supp-alt">${escapeHtml(s.altNames)}</div>` : ''}
          <p>${escapeHtml(s.short || '')}</p>
        </button>`;
    }

    function showDetail(s) {
      const syn = (s.synergies || []).map(id => {
        const m = SUPPLEMENTS.find(x => x.id === id);
        return m ? m.name : id;
      });
      const avoid = (s.avoid || []);
      detail.innerHTML = `
        <article class="supp-detail">
          <button class="supp-detail-back" type="button" data-supp-back>← Alle Supplements</button>
          <header class="supp-detail-head">
            <div>
              <span class="supp-cat">${escapeHtml(s.category)}</span>
              ${s.evidence ? `<span class="ev ev-${s.evidence}">Evidenz: ${s.evidence}</span>` : ''}
            </div>
            <h2>${escapeHtml(s.name)}</h2>
            ${s.altNames ? `<div class="supp-alt">${escapeHtml(s.altNames)}</div>` : ''}
            <p class="supp-short">${escapeHtml(s.short || '')}</p>
          </header>

          ${s.description ? `<section><h3>Überblick</h3><p>${escapeHtml(s.description)}</p></section>` : ''}
          ${s.benefits?.length ? `<section><h3>✅ Nutzen</h3><ul>${s.benefits.map(b=>`<li>${escapeHtml(b)}</li>`).join('')}</ul></section>` : ''}
          ${s.risks?.length ? `<section><h3>⚠️ Risiken / Beachten</h3><ul>${s.risks.map(b=>`<li>${escapeHtml(b)}</li>`).join('')}</ul></section>` : ''}
          ${s.dosage ? `<section><h3>💊 Dosierung</h3><p>${escapeHtml(s.dosage)}</p></section>` : ''}
          ${s.intake ? `<section><h3>🕐 Optimale Einnahme</h3><p>${escapeHtml(s.intake)}</p></section>` : ''}
          ${syn.length ? `<section><h3>🤝 Synergien</h3><p>${syn.map(n=>`<span class="tag">${escapeHtml(n)}</span>`).join(' ')}</p></section>` : ''}
          ${avoid.length ? `<section><h3>🚫 Nicht kombinieren mit</h3><p>${avoid.map(n=>`<span class="tag tag--warn">${escapeHtml(n)}</span>`).join(' ')}</p></section>` : ''}
          ${s.sources ? `<section><h3>🥗 Natürliche Quellen</h3><p>${escapeHtml(s.sources)}</p></section>` : ''}
          ${podcastsHtml(s.podcasts)}
          ${scoreHtml('supplement', s.id)}
          ${aenderungenHtml('supplement', s.id)}
        </article>
      `;
      detail.classList.remove('hidden');
      noRes.classList.add('hidden');
    }

    async function askSupplementAi(query) {
      const q = (query || input.value || '').trim();
      if (!q) return;
      aiBox.classList.remove('hidden');
      noRes.classList.add('hidden');
      aiBox.innerHTML = `<div class="supp-ai-loading">🤖 KI recherchiert zu <strong>${escapeHtml(q)}</strong>…</div>`;

      const sys = `Du bist ein Biohacking- & Ernährungsexperte. Antworte auf Deutsch, strukturiert, prägnant, mit klaren Markdown-Abschnitten:
## Überblick
## Nutzen (Liste)
## Risiken / Kontraindikationen (Liste)
## Dosierung
## Optimale Einnahme
## Synergien & Wechselwirkungen
Kein medizinischer Rat – erwähne am Ende, dass bei Beschwerden eine Fachperson konsultiert werden soll.`;
      const prompt = `Bitte gib eine strukturierte Infokarte zum Supplement "${q}" – wie in einer Biohacking-Datenbank.`;
      try {
        const { text } = await callGemini(prompt, { systemInstruction: sys, temperature: 0.3, maxOutputTokens: 2048 });
        aiBox.innerHTML = `<div class="supp-ai">
          <div class="supp-ai-head"><span class="eyebrow">🤖 KI-Antwort (nicht in DB)</span><h3>${escapeHtml(q)}</h3></div>
          <div class="supp-ai-body">${mdToHtml(text)}</div>
        </div>`;
      } catch (err) {
        aiBox.innerHTML = `<div class="supp-ai-error">❌ KI-Fehler: ${escapeHtml(err.message)}</div>`;
      }
    }

    // Initial-Render: zeige alle Supplements direkt beim Laden der Seite
    render();
  }

  function initSymptomView() {
    const select = $('#symptom-select');
    const btn = $('#symptom-btn');
    const results = $('#symptom-results');
    if (!select) return;

    if (typeof GOALS !== 'undefined' && Array.isArray(GOALS)) {
      const featured = GOALS.filter(g => g.featured);
      const rest = GOALS.filter(g => !g.featured);

      const makeOpt = (g) => `<option value="${escapeHtml(g.label)}">${escapeHtml(g.label)}</option>`;

      let html = '<option value="">– Symptom oder Ziel wählen –</option>';
      if (featured.length) {
        html += '<optgroup label="★ Häufige Anliegen">' + featured.map(makeOpt).join('') + '</optgroup>';
      }
      if (rest.length) {
        html += '<optgroup label="Weitere Ziele & Symptome">' + rest.map(makeOpt).join('') + '</optgroup>';
      }
      select.innerHTML = html;
    }

    btn.addEventListener('click', runRecommendation);
    select.addEventListener('change', () => {
      if (select.value) runRecommendation();
    });

    async function runRecommendation() {
      const q = (select.value || '').trim();
      if (!q) { select.focus(); return; }

      const local = localRecommend(q);

      let html = '';
      html += `<div class="results-head"><h3>Empfehlung für: „${escapeHtml(q)}"</h3></div>`;
      html += `<div class="results-section"><h4>💊 Passende Supplements (aus der DB)</h4>`;
      if (local.supplements.length) {
        html += `<div class="supplement-grid">` + local.supplements.map(s => `
          <article class="supp-card">
            <div class="supp-head">
              <span class="supp-cat">${escapeHtml(s.category)}</span>
              ${s.evidence ? `<span class="ev ev-${s.evidence}">${s.evidence}</span>` : ''}
            </div>
            <h3>${escapeHtml(s.name)}</h3>
            <p>${escapeHtml(s.short || '')}</p>
            ${s.dosage ? `<p class="small"><strong>Dosis:</strong> ${escapeHtml(s.dosage)}</p>` : ''}
          </article>
        `).join('') + `</div>`;
      } else {
        html += `<p class="muted">Keine direkten DB-Treffer – dafür die KI-Antwort unten.</p>`;
      }
      html += `</div>`;

      if (local.tips.length) {
        html += `<div class="results-section"><h4>🧠 Passende Biohacking-Tipps</h4><div class="tips-grid">` +
          local.tips.map(t => `
            <article class="tip-card">
              <div class="tip-icon">${escapeHtml(t.icon || '💡')}</div>
              <div class="tip-cat">${escapeHtml(t.category)}</div>
              <h3>${escapeHtml(t.title)}</h3>
              <p>${escapeHtml(t.short)}</p>
              <p class="tip-how"><strong>Wie:</strong> ${escapeHtml(t.how)}</p>
            </article>
          `).join('') + `</div></div>`;
      }

      html += `<div class="results-section ai-section">
        <div class="ai-section-head">
          <h4>🤖 KI-Einschätzung</h4>
          <button type="button" class="ai-refresh-btn" id="symptom-ai-refresh" title="Neue KI-Antwort anfordern">↻ neu</button>
        </div>
        <div id="symptom-ai-output" class="ai-output"><em>KI tippt…</em></div>
        <div id="symptom-ai-meta" class="ai-meta"></div>
      </div>`;

      results.innerHTML = html;

      const refreshBtn = $('#symptom-ai-refresh');
      refreshBtn?.addEventListener('click', () => runSymptomAI(q, { force: true }));
      await runSymptomAI(q, { force: false });
    }

    // KI-Antwort für eine Symptomfrage laden – mit localStorage-Cache.
    // Cache: { ts, text } je normalisierter Frage.
    async function runSymptomAI(q, { force = false } = {}) {
      const out = $('#symptom-ai-output');
      const meta = $('#symptom-ai-meta');
      if (!out) return;
      const key = 'bhc_symptom_ai_' + normalizeStr(q);

      // 1) Cache zeigen, wenn vorhanden und nicht forciert.
      if (!force) {
        try {
          const raw = localStorage.getItem(key);
          if (raw) {
            const obj = JSON.parse(raw);
            if (obj?.text) {
              out.innerHTML = mdToHtml(obj.text);
              const when = obj.ts ? new Date(obj.ts).toLocaleString('de-DE') : '';
              if (meta) meta.innerHTML = `<span class="ai-cached">💾 Gespeicherte Antwort vom ${escapeHtml(when)} · „↻ neu" für frische KI-Antwort</span>`;
              return;
            }
          }
        } catch (_) {}
      }

      if (!loadApiKey()) {
        out.innerHTML = `<p class="err">Kein Gemini-Key verfügbar. Siehe <a href="#about">Über</a>.</p>`;
        return;
      }

      out.innerHTML = '<em>KI tippt…</em>';
      if (meta) meta.innerHTML = '';

      const sys = `Du bist ein Biohacking-Coach. Der Nutzer beschreibt ein Symptom oder Ziel auf Deutsch. Antworte strukturiert auf Deutsch mit Markdown:
## Mögliche Ursachen
## Lifestyle-Empfehlungen (Schlaf, Licht, Bewegung, Ernährung)
## Supplement-Empfehlungen (konkret mit Dosis & Einnahme)
## Wann zum Arzt

Halte dich kurz, fokussiert auf Biohacking-Prinzipien. Keine Heilversprechen. Schließe mit dem Hinweis, dass bei anhaltenden oder schweren Beschwerden eine ärztliche Abklärung nötig ist.`;

      try {
        const { text } = await callGemini(q, { systemInstruction: sys, temperature: 0.4, maxOutputTokens: 2048 });
        out.innerHTML = mdToHtml(text);
        try { localStorage.setItem(key, JSON.stringify({ ts: Date.now(), text })); } catch (_) {}
        if (meta) meta.innerHTML = `<span class="ai-fresh">✓ Frisch generiert · bleibt gespeichert</span>`;
      } catch (err) {
        out.innerHTML = `<p class="err">KI-Fehler: ${escapeHtml(err.message)}</p>`;
      }
    }

    function localRecommend(query) {
      const norm = normalizeStr(query);
      const words = norm.split(' ').filter(Boolean);

      const tagHits = {};
      if (typeof GOALS !== 'undefined') {
        GOALS.forEach(g => {
          let matches = 0;
          for (const kw of g.keywords) {
            if (norm.includes(normalizeStr(kw))) matches += 2;
          }
          for (const w of words) {
            for (const kw of g.keywords) {
              if (normalizeStr(kw).includes(w) && w.length > 3) matches++;
            }
          }
          if (matches > 0) {
            for (const t of g.tags) tagHits[t] = (tagHits[t] || 0) + matches;
          }
        });
      }
      for (const w of words) if (w.length > 2) tagHits[w] = (tagHits[w] || 0) + 1;

      const scoreSupp = (s) => (s.tags || []).reduce((sum, t) => sum + (tagHits[t] || 0), 0);
      const scoreTip = (t) => (t.tags || []).reduce((sum, x) => sum + (tagHits[x] || 0), 0);

      const sortedSupps = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : [])
        .map(s => ({ s, sc: scoreSupp(s) }))
        .filter(o => o.sc > 0)
        .sort((a, b) => b.sc - a.sc)
        .slice(0, 6)
        .map(o => o.s);

      const sortedTips = (typeof TIPS !== 'undefined' ? TIPS : [])
        .map(t => ({ t, sc: scoreTip(t) }))
        .filter(o => o.sc > 0)
        .sort((a, b) => b.sc - a.sc)
        .slice(0, 6)
        .map(o => o.t);

      return { supplements: sortedSupps, tips: sortedTips };
    }
  }

  // ============ ERFAHRUNGSBERICHTE ============
  // Ersetzt seit v118 den News-Bereich. Inhalte kommen aus js/data/erfahrungen.js
  // (fest gepflegt) plus freigegebene Community-Berichte aus Firestore.

  let erfCurrentCat = 'all';
  let erfCommunity = [];        // freigegebene Berichte aus Firestore
  let erfPending = [];          // wartende Berichte (nur für Admin sichtbar)
  let erfDb = null;
  let erfAuth = null;
  let erfUser = null;

  // Alle sichtbaren Berichte: fest gepflegte + freigegebene Community-Berichte.
  function allErfahrungen() {
    const base = (typeof ERFAHRUNGEN !== 'undefined') ? ERFAHRUNGEN : [];
    return base.concat(erfCommunity);
  }

  function istErfAdmin() {
    if (!erfUser) return false;
    const list = (typeof ERFAHRUNG_ADMIN_EMAILS !== 'undefined') ? ERFAHRUNG_ADMIN_EMAILS : [];
    return list.map(s => String(s).toLowerCase()).includes(String(erfUser.email || '').toLowerCase());
  }

  function initErfahrungenView() {
    const chipsBar = $('#erfahrungen-chips');
    if (chipsBar && typeof ERFAHRUNG_KATEGORIEN !== 'undefined') {
      chipsBar.innerHTML = ERFAHRUNG_KATEGORIEN.map((c, i) =>
        `<button type="button" class="chip ${i === 0 ? 'chip--active' : ''}" data-erfcat="${escapeHtml(c.id)}">${escapeHtml(c.label)}</button>`
      ).join('');
      chipsBar.addEventListener('click', (e) => {
        const b = e.target.closest('[data-erfcat]');
        if (!b) return;
        $$('.chip', chipsBar).forEach(x => x.classList.toggle('chip--active', x === b));
        erfCurrentCat = b.dataset.erfcat;
        renderErfahrungen();
      });
    }

    // Klick auf eine Karte öffnet die Detailansicht.
    $('#erfahrungen-list')?.addEventListener('click', (e) => {
      const card = e.target.closest('[data-erf-open]');
      if (!card) return;
      // Links im Karteninneren (z.B. Shop-Link) nicht abfangen.
      if (e.target.closest('a[href^="http"]')) return;
      e.preventDefault();
      oeffneErfahrungDetail(card.dataset.erfOpen);
    });

    $('#erf-detail-close')?.addEventListener('click', () => {
      $('#erf-detail')?.classList.add('hidden');
    });

    initErfFirestore();
    initErfFormular();
  }

  function onEnterErfahrungen() {
    renderErfahrungen();
    // Falls von der Startseite aus eine bestimmte Karte angeklickt wurde.
    if (pendingErfId) {
      const id = pendingErfId;
      pendingErfId = null;
      setTimeout(() => oeffneErfahrungDetail(id), 60);
    }
  }

  let pendingErfId = null;

  // ---------- Rendern ----------
  function renderErfahrungen() {
    const listEl = $('#erfahrungen-list');
    const countEl = $('#erfahrungen-count');
    if (!listEl) return;

    const items = allErfahrungen()
      .filter(e => erfCurrentCat === 'all' || e.kategorie === erfCurrentCat)
      .sort((a, b) => String(b.datum || '').localeCompare(String(a.datum || '')));

    if (countEl) countEl.textContent = `${items.length} ${items.length === 1 ? 'Bericht' : 'Berichte'}`;
    listEl.innerHTML = items.length
      ? items.map(renderErfCard).join('')
      : `<div class="erf-empty">Für diese Kategorie gibt es noch keine Berichte.</div>`;
  }

  // Bezugsquellen haben seit v128 eine eigene Ansicht (#bezugsquellen). Vorher
  // hingen sie unten an den Erfahrungsberichten und gingen dort unter – dabei
  // sind die Warnungen der Teil, der Geld spart, und die Rabatte der Teil, den
  // Leser suchen. Beides gehoert nicht hinter einen Filter und nicht ans Ende.
  function renderShopSection() {
    const listEl = $('#erf-shops-list');
    const warnEl = $('#erf-shops-warncount');
    if (!listEl) return;
    const shops = (typeof SHOPS !== 'undefined') ? SHOPS : [];
    const warnungen = shops.filter(s => s.warnung).length;

    if (warnEl) {
      warnEl.innerHTML = warnungen
        ? `<span class="erf-badge is-warn">⚠ ${warnungen} ${warnungen === 1 ? 'Warnung' : 'Warnungen'}</span>`
        : '';
    }
    listEl.innerHTML = shops.length
      ? shops.slice().sort((a, b) => (a.warnung === b.warnung) ? 0 : (a.warnung ? 1 : -1)).map(renderShopCard).join('')
      : `<div class="erf-empty">Noch keine Bezugsquellen erfasst.</div>`;
  }

  // Pflicht: Besteht zu einem Anbieter eine bezahlte Partnerschaft, muss der
  // Bericht als Werbung erkennbar sein (§ 5a Abs. 4 UWG, § 6 TMG) – und zwar
  // rueckwirkend, sobald die Gegenleistung fliesst. Schalter: anzeige: true.
  // Kurzform des Rabatts fuer Karten und Teaser: sichtbar, bevor jemand klickt.
  function rabattKurz(e) {
    if (!e || !e.shopId || typeof SHOPS === 'undefined') return '';
    const s = SHOPS.find(x => x.id === e.shopId);
    const aff = s && s.affiliate;
    if (!aff || !aff.aktiv) return '';
    const codes = affCodes(aff);
    const werte = codes.map(c => c.prozent).filter(Boolean);
    if (!werte.length && aff.prozent) werte.push(aff.prozent);
    if (!werte.length) return '';
    const text = werte.length > 1
      ? `${escapeHtml(werte.join(' / '))} Rabattcode`
      : `${escapeHtml(werte[0])} Rabatt${codes.length === 1 ? ' · Code ' + escapeHtml(codes[0].code) : ''}`;
    return `<span class="erf-rabatt-chip">${text}</span>`;
  }

  function renderErfCard(e) {
    const a = ERFAHRUNG_AUTOREN[e.autor] || ERFAHRUNG_AUTOREN.recherche;
    const meta = [
      e.dauer ? `⏱ ${escapeHtml(e.dauer)}` : '',
      e.dosis ? `⚖️ ${escapeHtml(e.dosis)}` : '',
      e.datum ? `📅 ${escapeHtml(formatDatum(e.datum))}` : ''
    ].filter(Boolean).join(' · ');

    return `
      <article class="erf-card" data-erf-open="${escapeHtml(e.id)}" tabindex="0" role="button">
        <div class="erf-card-top">
          <span class="erf-badge ${escapeHtml(a.klasse)}">${escapeHtml(a.label)}</span>
          <span class="erf-kat">${escapeHtml(e.kategorie || '')}</span>
          ${e.demo ? '<span class="erf-badge is-demo">Beispiel</span>' : ''}
          ${e.anzeige ? '<span class="erf-badge is-ad">Anzeige</span>' : ''}
        </div>
        <h3>${escapeHtml(e.emoji ? e.emoji + ' ' : '')}${escapeHtml(e.substanz || '')}</h3>
        ${renderSterne(e.bewertung)}
        <p class="erf-fazit">${escapeHtml(e.fazit || '')}</p>
        ${rabattKurz(e)}
        ${meta ? `<div class="erf-meta">${meta}</div>` : ''}
        <span class="erf-more">Bericht lesen →</span>
      </article>
    `;
  }

  // Codes eines Partners in einheitlicher Form – akzeptiert die Liste `codes`
  // und faellt auf die alten Einzelfelder zurueck, falls noch vorhanden.
  function affCodes(aff) {
    if (!aff) return [];
    if (Array.isArray(aff.codes)) return aff.codes.filter(c => c && c.code);
    if (aff.code) return [{ code: aff.code, prozent: aff.prozent || '', fuer: aff.rabatt || '' }];
    return [];
  }

  // Einheitlicher Pflichthinweis fuer Affiliate-Links (§ 5a Abs. 4 UWG).
  //
  // Der Satz „Fuer dich aendert sich der Preis nicht" stimmt nur dort, wo es
  // keinen Code gibt. Wo einer hinterlegt ist, wird der Einkauf guenstiger –
  // das ist fuer den Leser die wichtigere Information und stand vorher an zwei
  // von drei Stellen nicht drin. Der Text richtet sich deshalb nach den Daten.
  function affHinweis(aff) {
    const codes = affCodes(aff);
    if (!codes.length) {
      return 'Anzeige: Affiliate-Link. Kaufst du darüber, erhalte ich eine Provision. '
           + 'Für dich ändert sich der Preis dadurch nicht.';
    }
    const proz = [...new Set(codes.map(c => (c.prozent || '').trim()).filter(Boolean))];
    const vorteil = proz.length === 1
      ? 'Mit dem Code sparst du ' + proz[0] + '.'
      : (proz.length > 1
          ? 'Mit den Codes sparst du ' + proz.join(' beziehungsweise ') + '.'
          : 'Der hinterlegte Code senkt deinen Preis.');
    return 'Anzeige: Affiliate-Partnerschaft. ' + vorteil
         + ' Kaufst du über den Link oder mit dem Code, erhalte ich eine Provision – '
         + 'dein Rabatt wird dadurch nicht kleiner.';
  }

  // Der Rabatt ist fuer Leser die wichtigste Information an einer Bezugsquelle –
  // deshalb steht je Code die Prozentzahl vorn und der Code direkt daneben zum
  // Antippen. Mehrere Codes (Neukunde/Bestandskunde) stehen gleichwertig.
  function renderRabattBlock(aff) {
    if (!aff || !aff.aktiv) return '';
    const codes = affCodes(aff);
    if (!codes.length) {
      const p = aff.prozent || '';
      if (!p) return '';
      return `
        <div class="erf-rabatt">
          <div class="erf-rabatt-kopf">
            <span class="erf-rabatt-prozent">${escapeHtml(p)}</span>
            <span class="erf-rabatt-wort">Rabatt für dich</span>
          </div>
          <p class="erf-rabatt-ohnecode">Kein Code nötig – der Rabatt wird über den Link unten angewendet.</p>
          ${aff.rabatt ? `<p class="erf-rabatt-bedingung">${escapeHtml(aff.rabatt)}</p>` : ''}
        </div>`;
    }
    return `
      <div class="erf-rabatt">
        <p class="erf-rabatt-titel">${codes.length > 1 ? 'Rabattcodes für dich' : 'Rabattcode für dich'}</p>
        ${codes.map(c => `
          <div class="erf-rabatt-zeile">
            <span class="erf-rabatt-prozent">${escapeHtml(c.prozent || '')}</span>
            <span class="erf-rabatt-fuer">${escapeHtml(c.fuer || '')}</span>
            <span class="erf-rabatt-codewrap">
              <code data-copy-code="${escapeHtml(c.code)}" title="Zum Kopieren antippen">${escapeHtml(c.code)}</code>
              <button type="button" class="erf-copy-btn" data-copy-code="${escapeHtml(c.code)}">Kopieren</button>
            </span>
          </div>`).join('')}
      </div>
    `;
  }

  function renderShopCard(s) {
    const aff = s.affiliate || {};
    // Pflicht: Sobald eine Gegenleistung im Spiel ist, wird gekennzeichnet – auch
    // wenn nur ein Rabattcode kommuniziert wird und gar kein Link existiert.
    // Ein Code ist ebenso eine Gegenleistung wie ein Link (§ 5a Abs. 4 UWG).
    const istWerbung = !!(aff.aktiv && (aff.url || affCodes(aff).length));
    // Warn-Eintraege bekommen nie einen Link – wir schicken niemanden dorthin.
    const istWarnung = !!s.warnung;
    const ziel = istWarnung ? '' : (istWerbung ? aff.url : s.url);
    const zeilen = [
      s.versand   ? ['Versand', s.versand] : null,
      s.zahlung   ? ['Zahlung', s.zahlung] : null,
      s.qualitaet ? ['Qualität & Nachweise', s.qualitaet] : null,
      s.preis     ? ['Preis', s.preis] : null,
      s.zoll      ? ['Zoll & Einfuhr', s.zoll] : null
    ].filter(Boolean);

    return `
      <article class="erf-card erf-shop${istWarnung ? ' is-warn' : ''}">
        <div class="erf-card-top">
          <span class="erf-badge ${istWarnung ? 'is-warn' : 'is-shop'}">${istWarnung ? '⚠ Warnung' : 'Shop'}</span>
          ${s.land ? `<span class="erf-kat">${escapeHtml(s.land)}</span>` : ''}
          ${s.demo ? '<span class="erf-badge is-demo">Beispiel</span>' : ''}
          ${istWerbung ? '<span class="erf-badge is-ad">Anzeige</span>' : ''}
        </div>
        <h3>${escapeHtml(s.name || '')}</h3>
        ${renderSterne(s.bewertung)}
        ${s.erfahrung ? `<p class="erf-fazit">${escapeHtml(s.erfahrung)}</p>` : ''}
        ${zeilen.length ? `<dl class="erf-shop-dl">${zeilen.map(([k, v]) =>
          `<dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd>`).join('')}</dl>` : ''}
        ${renderRabattBlock(aff)}
        ${ziel ? `<a class="btn btn-ghost erf-shop-link" href="${escapeHtml(safeHttpUrl(ziel, '#erfahrungen'))}" target="_blank" rel="noopener nofollow sponsored">Zum Shop →</a>` : ''}
        ${istWerbung ? `<p class="erf-ad-hint">${affHinweis(aff)}</p>` : ''}
        ${istWarnung ? `<p class="erf-warn-hinweis">Bewusst ohne Link. Diese Einordnung gibt wieder, was uns berichtet wurde – sie ist keine eigene Feststellung. Betreiber, die das anders sehen, erreichen uns über die Adresse im Impressum.</p>` : ''}
      </article>
    `;
  }

  function oeffneErfahrungDetail(id) {
    const e = allErfahrungen().find(x => x.id === id);
    const box = $('#erf-detail');
    const body = $('#erf-detail-body');
    if (!e || !box || !body) return;
    const a = ERFAHRUNG_AUTOREN[e.autor] || ERFAHRUNG_AUTOREN.recherche;

    body.innerHTML = `
      <div class="erf-card-top">
        <span class="erf-badge ${escapeHtml(a.klasse)}">${escapeHtml(a.label)}</span>
        <span class="erf-kat">${escapeHtml(e.kategorie || '')}</span>
        ${e.demo ? '<span class="erf-badge is-demo">Beispiel</span>' : ''}
        ${e.anzeige ? '<span class="erf-badge is-ad">Anzeige</span>' : ''}
      </div>
      <h3>${escapeHtml(e.emoji ? e.emoji + ' ' : '')}${escapeHtml(e.substanz || '')}</h3>
      ${renderSterne(e.bewertung)}
      <dl class="erf-detail-dl">
        ${e.dauer ? `<dt>Zeitraum</dt><dd>${escapeHtml(e.dauer)}</dd>` : ''}
        ${e.dosis ? `<dt>Einnahme</dt><dd>${escapeHtml(e.dosis)}</dd>` : ''}
        ${e.datum ? `<dt>Stand</dt><dd>${escapeHtml(formatDatum(e.datum))}</dd>` : ''}
      </dl>
      ${e.anzeige ? `<p class="erf-ad-hint">Anzeige: Zu diesem Anbieter besteht eine bezahlte Partnerschaft. Der Bericht gibt trotzdem meine eigene Erfahrung wieder.</p>` : ''}
      <p class="erf-text">${escapeHtml(e.text || '').replace(/\n/g, '<br>')}</p>
      ${(e.positiv && e.positiv.length) ? `<div class="erf-pn"><h4>Was gut war</h4><ul>${e.positiv.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul></div>` : ''}
      ${(e.negativ && e.negativ.length) ? `<div class="erf-pn erf-pn--neg"><h4>Was nicht so gut war</h4><ul>${e.negativ.map(p => `<li>${escapeHtml(p)}</li>`).join('')}</ul></div>` : ''}
      ${renderErfBezugsquelle(e)}
      ${(e.quelle && e.quelle.url) ? `<p class="erf-quelle">Quelle: <a href="${escapeHtml(safeHttpUrl(e.quelle.url, '#erfahrungen'))}" target="_blank" rel="noopener">${escapeHtml(e.quelle.label || e.quelle.url)}</a></p>`
        : (e.quelle && e.quelle.label) ? `<p class="erf-quelle">Quelle: ${escapeHtml(e.quelle.label)}</p>` : ''}
      <p class="erf-disclaimer-inline">Einzelfallbericht, kein Wirksamkeitsnachweis und keine medizinische Empfehlung.</p>
    `;
    box.classList.remove('hidden');
    box.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // Verweist ein Bericht ueber shopId auf eine erfasste Bezugsquelle, blenden wir
  // sie im Detail ein. Ist dort ein Affiliate-Verhaeltnis hinterlegt, gelten
  // dieselben Pflichten wie im Shop-Bereich: Kennzeichnung, rel-Attribute.
  function renderErfBezugsquelle(e) {
    if (!e || !e.shopId || typeof SHOPS === 'undefined') return '';
    const s = SHOPS.find(x => x.id === e.shopId);
    if (!s || s.warnung) return '';
    const aff = s.affiliate || {};
    const istWerbung = !!(aff.aktiv && (aff.url || affCodes(aff).length));
    const ziel = istWerbung ? (aff.url || '') : (s.url || '');
    if (!ziel && !(istWerbung && aff.code)) return '';
    return `
      <div class="erf-bezug">
        <h4>Bezugsquelle${istWerbung ? ' <span class="erf-badge is-ad">Anzeige</span>' : ''}</h4>
        <p class="erf-bezug-name">${escapeHtml(s.name || '')}</p>
        ${renderRabattBlock(aff)}
        ${ziel ? `<a class="btn btn-ghost erf-shop-link" href="${escapeHtml(safeHttpUrl(ziel, '#erfahrungen'))}" target="_blank" rel="noopener nofollow sponsored">Zum Shop →</a>` : ''}
        ${istWerbung ? `<p class="erf-ad-hint">${affHinweis(aff)}</p>` : ''}
      </div>
    `;
  }

  // Code antippen kopiert ihn – auf dem Handy der bequemste Weg.
  document.addEventListener('click', (ev) => {
    const el = ev.target.closest('[data-copy-code]');
    if (!el) return;
    const code = el.getAttribute('data-copy-code') || '';
    if (!code) return;
    const melden = () => {
      const btn = el.closest('.erf-rabatt-zeile')?.querySelector('.erf-copy-btn');
      if (!btn) return;
      const alt = btn.textContent;
      btn.textContent = 'Kopiert';
      btn.classList.add('is-done');
      setTimeout(() => { btn.textContent = alt; btn.classList.remove('is-done'); }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(melden).catch(() => {});
    }
  });

  function formatDatum(iso) {
    try {
      const d = new Date(iso);
      if (isNaN(d.getTime())) return String(iso);
      return d.toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' });
    } catch (_) { return String(iso); }
  }

  // ---------- Firestore: Community-Berichte ----------
  function initErfFirestore() {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
    try {
      erfDb = firebase.firestore();
      erfAuth = firebase.auth();
    } catch (_) { return; }

    // Freigegebene Berichte sind öffentlich lesbar.
    erfDb.collection('erfahrungen').where('status', '==', 'approved')
      .onSnapshot(snap => {
        erfCommunity = snap.docs.map(d => normalisiereCommunityBericht(d.id, d.data()));
        renderErfahrungen();
        renderHomeErfahrungen();
      }, err => console.warn('[Erfahrungen] Laden fehlgeschlagen:', err.message));

    erfAuth.onAuthStateChanged(user => {
      erfUser = user;
      aktualisiereErfFormularZustand();
      abonniereModeration();
    });
  }

  function normalisiereCommunityBericht(id, d) {
    return {
      id: 'fs-' + id,
      _fsId: id,
      substanz: d.substanz || '',
      kategorie: d.kategorie || 'Supplement',
      emoji: '🗣',
      autor: 'community',
      demo: false,
      datum: d.datum || (d.erstelltAm && d.erstelltAm.toDate ? d.erstelltAm.toDate().toISOString().slice(0, 10) : ''),
      dauer: d.dauer || null,
      dosis: d.dosis || null,
      bewertung: typeof d.bewertung === 'number' ? d.bewertung : null,
      fazit: d.fazit || '',
      text: d.text || '',
      positiv: [], negativ: [], shopId: null,
      quelle: { label: 'Nutzerbericht' + (d.autorName ? ' von ' + d.autorName : ''), url: '' }
    };
  }

  // ---------- Einreichformular ----------
  function initErfFormular() {
    const form = $('#erf-form');
    if (!form) return;

    const katSel = $('#erf-form-kategorie');
    if (katSel && typeof ERFAHRUNG_KATEGORIEN !== 'undefined') {
      katSel.innerHTML = ERFAHRUNG_KATEGORIEN
        .filter(c => c.id !== 'all' && c.id !== 'shops')
        .map(c => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.label)}</option>`).join('');
    }

    $('#erf-login')?.addEventListener('click', () => {
      if (!erfAuth) return;
      erfAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .catch(e => setErfFormStatus('Anmeldung fehlgeschlagen: ' + e.message, 'err'));
    });

    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      if (!erfUser || !erfDb) { setErfFormStatus('Bitte melde dich zuerst an.', 'err'); return; }

      const daten = {
        substanz:  $('#erf-form-substanz').value.trim().slice(0, 120),
        kategorie: $('#erf-form-kategorie').value,
        dauer:     $('#erf-form-dauer').value.trim().slice(0, 80),
        dosis:     $('#erf-form-dosis').value.trim().slice(0, 120),
        bewertung: parseInt($('#erf-form-bewertung').value, 10) || null,
        fazit:     $('#erf-form-fazit').value.trim().slice(0, 300),
        text:      $('#erf-form-text').value.trim().slice(0, 4000)
      };
      if (!daten.substanz || !daten.text) {
        setErfFormStatus('Bitte mindestens Substanz und Bericht ausfüllen.', 'err');
        return;
      }
      if (!$('#erf-form-einverstanden').checked) {
        setErfFormStatus('Bitte bestätige die Hinweise zur Veröffentlichung.', 'err');
        return;
      }

      setErfFormStatus('Wird übermittelt…', 'info');
      try {
        await erfDb.collection('erfahrungen').add(Object.assign({}, daten, {
          status: 'pending',
          uid: erfUser.uid,
          autorName: ($('#erf-form-name').value.trim().slice(0, 60)) || 'anonym',
          datum: new Date().toISOString().slice(0, 10),
          erstelltAm: firebase.firestore.FieldValue.serverTimestamp()
        }));
        form.reset();
        setErfFormStatus('Danke! Dein Bericht liegt jetzt zur Prüfung vor und erscheint nach der Freigabe.', 'ok');
      } catch (e) {
        setErfFormStatus('Konnte nicht gespeichert werden: ' + e.message, 'err');
      }
    });
  }

  function setErfFormStatus(msg, art) {
    const el = $('#erf-form-status');
    if (el) el.innerHTML = `<div class="${art === 'err' ? 'err' : art === 'ok' ? 'ok' : 'info'}">${escapeHtml(msg)}</div>`;
  }

  function aktualisiereErfFormularZustand() {
    const angemeldet = !!erfUser;
    $('#erf-login-hint')?.classList.toggle('hidden', angemeldet);
    $('#erf-form')?.classList.toggle('hidden', !angemeldet);
    const who = $('#erf-who');
    if (who) who.textContent = angemeldet ? (erfUser.displayName || erfUser.email || '') : '';
  }

  // ---------- Moderation (nur Admin) ----------
  let unsubErfPending = null;

  function abonniereModeration() {
    const box = $('#erf-moderation');
    if (unsubErfPending) { try { unsubErfPending(); } catch (_) {} unsubErfPending = null; }
    if (!box) return;

    if (!istErfAdmin() || !erfDb) {
      box.classList.add('hidden');
      erfPending = [];
      return;
    }
    box.classList.remove('hidden');
    unsubErfPending = erfDb.collection('erfahrungen').where('status', '==', 'pending')
      .onSnapshot(snap => {
        erfPending = snap.docs.map(d => Object.assign({ _id: d.id }, d.data()));
        renderModeration();
      }, err => console.warn('[Erfahrungen] Moderation:', err.message));

    $('#erf-moderation-list')?.addEventListener('click', async (ev) => {
      const btn = ev.target.closest('[data-mod-action]');
      if (!btn || !erfDb) return;
      const id = btn.dataset.modId;
      const aktion = btn.dataset.modAction;
      btn.disabled = true;
      try {
        if (aktion === 'approve') {
          await erfDb.collection('erfahrungen').doc(id).update({ status: 'approved' });
        } else if (aktion === 'reject') {
          await erfDb.collection('erfahrungen').doc(id).update({ status: 'rejected' });
        }
      } catch (e) {
        alert('Fehlgeschlagen: ' + e.message);
        btn.disabled = false;
      }
    }, { once: false });
  }

  function renderModeration() {
    const listEl = $('#erf-moderation-list');
    const countEl = $('#erf-moderation-count');
    if (!listEl) return;
    if (countEl) countEl.textContent = String(erfPending.length);
    listEl.innerHTML = erfPending.length
      ? erfPending.map(p => `
          <div class="erf-mod-item">
            <div class="erf-mod-head">
              <strong>${escapeHtml(p.substanz || '')}</strong>
              <span class="erf-kat">${escapeHtml(p.kategorie || '')}</span>
              <span class="erf-mod-autor">${escapeHtml(p.autorName || 'anonym')}</span>
            </div>
            ${p.fazit ? `<p class="erf-fazit">${escapeHtml(p.fazit)}</p>` : ''}
            <p class="erf-text">${escapeHtml(p.text || '').slice(0, 800).replace(/\n/g, '<br>')}</p>
            <div class="erf-mod-actions">
              <button class="btn btn-primary" data-mod-action="approve" data-mod-id="${escapeHtml(p._id)}">Freigeben</button>
              <button class="btn btn-ghost" data-mod-action="reject" data-mod-id="${escapeHtml(p._id)}">Ablehnen</button>
            </div>
          </div>`).join('')
      : `<div class="erf-empty">Nichts zu prüfen.</div>`;
  }

  // ============ WEARABLES / EMPFEHLUNGEN ============
  let currentProductCat = 'all';

  function initHomeProducts() {
    const chipsBar = $('#home-products-chips');
    if (!chipsBar || typeof PRODUCT_CATEGORIES === 'undefined') return;
    // Bei nur einer Kategorie: Chips ausblenden – unnötige UI-Elemente.
    if (PRODUCT_CATEGORIES.length <= 1) {
      chipsBar.style.display = 'none';
    } else {
      chipsBar.innerHTML = PRODUCT_CATEGORIES.map((c, i) =>
        `<button type="button" class="chip ${i === 0 ? 'chip--active' : ''}" data-pcat="${escapeHtml(c.id)}">${escapeHtml(c.label)}</button>`
      ).join('');
      chipsBar.addEventListener('click', (e) => {
        const b = e.target.closest('[data-pcat]');
        if (!b) return;
        $$('.chip', chipsBar).forEach(x => x.classList.toggle('chip--active', x === b));
        currentProductCat = b.dataset.pcat;
        renderHomeProducts();
      });
    }
    renderHomeProducts();
  }

  function renderHomeProducts() {
    const listEl = $('#home-products-list');
    if (!listEl || typeof PRODUCTS === 'undefined') return;
    const items = currentProductCat === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === currentProductCat);

    listEl.innerHTML = items.map(p => {
      const prosHtml = (p.pros || []).slice(0, 3).map(x => `<li>${escapeHtml(x)}</li>`).join('');
      const consHtml = (p.cons || []).slice(0, 2).map(x => `<li>${escapeHtml(x)}</li>`).join('');
      const hasLink = !!p.link;
      const ctaLabel = hasLink
        ? (p.affiliate ? 'Zum Rabatt-Link →' : 'Mehr erfahren →')
        : 'Link folgt';
      const ctaClass = hasLink ? 'product-cta' : 'product-cta product-cta--disabled';
      const ctaAttrs = hasLink
        ? `href="${escapeHtml(p.link)}" target="_blank" rel="noopener sponsored"`
        : 'href="#" aria-disabled="true" onclick="return false;"';
      const codeBadge = p.code ? `<span class="product-code">Code: <strong>${escapeHtml(p.code)}</strong></span>` : '';
      // Pflichtkennzeichnung: Affiliate-Links muessen als Werbung erkennbar sein
      // (§ 5a Abs. 4 UWG, § 6 TMG). Deshalb ein sichtbares Badge plus Fusstext.
      const affBadge = p.affiliate ? `<span class="product-aff" title="Mein persönlicher Tipp – Link enthält Rabatt-Code">⭐ Mein Tipp</span><span class="erf-badge is-ad">Anzeige</span>` : '';
      const affHint = p.affiliate
        ? `<p class="erf-ad-hint">${affHinweis(p.code ? { code: p.code, prozent: p.prozent || '' } : null)}</p>`
        : '';
      return `
        <article class="product-card">
          <div class="product-head">
            <div class="product-emoji">${escapeHtml(p.emoji || '🔧')}</div>
            <div class="product-title">
              <h4>${escapeHtml(p.name)} ${affBadge}</h4>
              <div class="product-tag">${escapeHtml(p.tagline || '')}</div>
            </div>
          </div>
          <p class="product-short">${escapeHtml(p.short || '')}</p>
          ${prosHtml ? `<div class="product-list"><strong>Pro</strong><ul>${prosHtml}</ul></div>` : ''}
          ${consHtml ? `<div class="product-list product-list--cons"><strong>Contra</strong><ul>${consHtml}</ul></div>` : ''}
          <div class="product-foot">
            <span class="product-price">${escapeHtml(p.priceRange || '')}</span>
            ${codeBadge}
          </div>
          <a class="${ctaClass}" ${ctaAttrs}>${ctaLabel}</a>
          ${affHint}
        </article>
      `;
    }).join('');
  }

  // ============ EXPERIMENTELLES ============
  let currentExpCat = 'all';

  function initExperimentalView() {
    const chipsBar = $('#exp-chips');
    if (!chipsBar || typeof EXPERIMENTAL_CATEGORIES === 'undefined') return;
    chipsBar.innerHTML = EXPERIMENTAL_CATEGORIES.map((c, i) =>
      `<button type="button" class="chip ${i === 0 ? 'chip--active' : ''}" data-ecat="${escapeHtml(c.id)}">${escapeHtml(c.label)}</button>`
    ).join('');
    chipsBar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-ecat]');
      if (!b) return;
      $$('.chip', chipsBar).forEach(x => x.classList.toggle('chip--active', x === b));
      currentExpCat = b.dataset.ecat;
      renderExperimental();
    });
  }

  function renderKhavinson() {
    const grid = document.getElementById('khavinson-grid');
    if (!grid || typeof KHAVINSON === 'undefined') return;
    grid.innerHTML = KHAVINSON.map(e => {
      const benefits = (e.benefits || []).map(b => `<li>${escapeHtml(b)}</li>`).join('');
      const risks = (e.risks || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
      const sources = (e.sources || []).map(s =>
        `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a></li>`
      ).join('');
      const community = (e.community || []).map(s =>
        `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a></li>`
      ).join('');
      return `
        <article class="exp-card exp-card--khavinson" id="khcard-${escapeHtml(e.id)}">
          <div class="exp-head">
            <div class="exp-emoji">${escapeHtml(e.emoji || '🧬')}</div>
            <div class="exp-title">
              <h3>${escapeHtml(e.name)}</h3>
              ${e.altNames ? `<div class="exp-alt">${escapeHtml(e.altNames)}</div>` : ''}
              <div class="exp-class">${escapeHtml(e.class || '')}</div>
            </div>
          </div>
          <p class="exp-short">${escapeHtml(e.short || '')}</p>
          <div class="exp-section"><strong>Wirkungsweise</strong><p>${escapeHtml(e.moa || '')}</p></div>
          ${benefits ? `<div class="exp-section exp-section--benefits"><strong>Beworbene Effekte</strong><ul>${benefits}</ul></div>` : ''}
          ${risks ? `<div class="exp-section exp-section--risks"><strong>Risiken & Limitationen</strong><ul>${risks}</ul></div>` : ''}
          <div class="exp-status"><strong>Status:</strong> ${escapeHtml(e.status || 'unbekannt')}</div>
          ${podcastsHtml(e.podcasts)}
          ${scoreHtml('khavinson', e.id)}
          ${aenderungenHtml('khavinson', e.id)}
          ${sources ? `<details class="exp-sources"><summary>Studien & Quellen (${(e.sources || []).length})</summary><ul>${sources}</ul></details>` : ''}
          ${`<details class="exp-community"><summary>Praxis & Community (${(e.community || []).length + 2})</summary><div class="exp-community-note">Anbieter-/Community-Quellen aus dem Bioregulator-Umfeld. <strong>Keine medizinischen Quellen.</strong></div><ul>${community}${PEPTIDE_BEZUG_LIS}</ul>${PEPTIDE_BEZUG_NOTE}</details>`}
          <div class="exp-disclaimer-mini">Keine Empfehlung – nur Information.</div>
        </article>
      `;
    }).join('');
  }

  function onEnterExperimental() {
    renderExperimental();
    renderKhavinson();
  }

  function renderExperimental() {
    const grid = $('#exp-grid');
    if (!grid || typeof EXPERIMENTAL === 'undefined') return;
    const items = currentExpCat === 'all'
      ? EXPERIMENTAL
      : EXPERIMENTAL.filter(e => e.filterCat === currentExpCat);

    if (!items.length) {
      grid.innerHTML = '<div class="empty">Keine Substanzen in dieser Kategorie.</div>';
      return;
    }

    grid.innerHTML = items.map(e => {
      const benefits = (e.benefits || []).map(b => `<li>${escapeHtml(b)}</li>`).join('');
      const risks = (e.risks || []).map(r => `<li>${escapeHtml(r)}</li>`).join('');
      const sources = (e.sources || []).map(s =>
        `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a></li>`
      ).join('');
      const community = (e.community || []).map(s =>
        `<li><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a></li>`
      ).join('');
      return `
        <article class="exp-card" id="expcard-${escapeHtml(e.id)}">
          <div class="exp-head">
            <div class="exp-emoji">${escapeHtml(e.emoji || '⚗️')}</div>
            <div class="exp-title">
              <h3>${escapeHtml(e.name)}</h3>
              ${e.altNames ? `<div class="exp-alt">${escapeHtml(e.altNames)}</div>` : ''}
              <div class="exp-class">${escapeHtml(e.class || '')}</div>
            </div>
          </div>
          <p class="exp-short">${escapeHtml(e.short || '')}</p>
          <div class="exp-section">
            <strong>Wirkungsweise</strong>
            <p>${escapeHtml(e.moa || '')}</p>
          </div>
          ${benefits ? `<div class="exp-section exp-section--benefits"><strong>Erwartete Vorteile</strong><ul>${benefits}</ul></div>` : ''}
          ${risks ? `<div class="exp-section exp-section--risks"><strong>Risiken & Nebenwirkungen</strong><ul>${risks}</ul></div>` : ''}
          <div class="exp-status">
            <strong>Status:</strong> ${escapeHtml(e.status || 'unbekannt')}
          </div>
          ${podcastsHtml(e.podcasts)}
          ${scoreHtml('experimental', e.id)}
          ${aenderungenHtml('experimental', e.id)}
          ${sources ? `<details class="exp-sources"><summary>Studien & Quellen (${(e.sources || []).length})</summary><ul>${sources}</ul></details>` : ''}
          ${`<details class="exp-community"><summary>Praxis & Community (${(e.community || []).length + 2})</summary><div class="exp-community-note">Erfahrungs- und Bezugsquellen aus dem deutschsprachigen Biohacking-Umfeld (z.B. biolabshop, Iron Mike). <strong>Kein Hinweis auf legale Erhältlichkeit oder pharmazeutische Qualität.</strong></div><ul>${community}${PEPTIDE_BEZUG_LIS}</ul>${PEPTIDE_BEZUG_NOTE}</details>`}
          <div class="exp-disclaimer-mini">Keine Empfehlung – nur Information.</div>
        </article>
      `;
    }).join('');
  }

  // ============ BEHANDLUNGEN ============
  let currentThCat = 'all';

  function initBehandlungenView() {
    const chipsBar = $('#th-chips');
    if (!chipsBar || typeof THERAPY_CATEGORIES === 'undefined') return;
    chipsBar.innerHTML = THERAPY_CATEGORIES.map((c, i) =>
      `<button type="button" class="chip ${i === 0 ? 'chip--active' : ''}" data-tcat="${escapeHtml(c.id)}">${escapeHtml(c.label)}</button>`
    ).join('');
    chipsBar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-tcat]');
      if (!b) return;
      $$('.chip', chipsBar).forEach(x => x.classList.toggle('chip--active', x === b));
      currentThCat = b.dataset.tcat;
      renderBehandlungen();
    });
  }

  function onEnterBehandlungen() {
    renderBehandlungen();
  }

  function renderBehandlungen() {
    const grid = $('#th-grid');
    if (!grid || typeof THERAPIES === 'undefined') return;
    const items = currentThCat === 'all'
      ? THERAPIES
      : THERAPIES.filter(t => t.category === currentThCat);

    if (!items.length) {
      grid.innerHTML = '<div class="empty">Keine Behandlungen in dieser Kategorie.</div>';
      return;
    }

    grid.innerHTML = items.map(t => {
      const benefits = (t.benefits || []).map(b => `<li>${escapeHtml(b)}</li>`).join('');
      const indication = (t.indication || []).map(i => escapeHtml(i)).join(' · ');
      return `
        <article class="exp-card" id="thcard-${escapeHtml(t.id)}">
          <div class="exp-head">
            <div class="exp-emoji">${escapeHtml(t.emoji || t.icon || '🧖')}</div>
            <div class="exp-title">
              <h3>${escapeHtml(t.name || t.title)}</h3>
              <div class="exp-class">${escapeHtml(t.category || '')}</div>
            </div>
          </div>
          <p class="exp-short">${escapeHtml(t.short || '')}</p>
          ${benefits ? `<div class="exp-section exp-section--benefits"><strong>Nutzen</strong><ul>${benefits}</ul></div>` : ''}
          ${indication ? `<div class="exp-section"><strong>Wofür</strong><p>${indication}</p></div>` : ''}
          ${t.note ? `<div class="exp-status"><strong>Hinweis:</strong> ${escapeHtml(t.note)}</div>` : ''}
          ${podcastsHtml(t.podcasts)}
          ${scoreHtml('behandlungen', t.id)}
          ${aenderungenHtml('behandlungen', t.id)}
          ${t.link ? `<details class="exp-sources"><summary>Mehr Infos & Quelle</summary><ul><li><a href="${escapeHtml(t.link)}" target="_blank" rel="noopener">${escapeHtml(t.link.replace(/^https?:\/\//, '').split('/')[0])}</a></li></ul></details>` : ''}
          <div class="exp-disclaimer-mini">Keine Empfehlung – nur Information. Anwendung ärztlich abklären.</div>
        </article>
      `;
    }).join('');
  }

  // ============ BLUTWERTE ============
  // Marker-Nachschlagewerk auf Basis von Podcast-Folge 58.
  // Referenzbereiche variieren je Labor — deshalb steht der Zielbereich
  // immer NEBEN dem Referenzbereich, nie an dessen Stelle.

  let bwCat = 'all';
  let bwNurEinsteiger = false;

  function initBlutwerteView() {
    const chipsBar = $('#bw-chips');
    if (!chipsBar || typeof BLUTWERT_BAUSTELLEN === 'undefined') return;

    chipsBar.innerHTML =
      `<button type="button" class="chip chip--active" data-bwcat="all">Alle Werte</button>` +
      BLUTWERT_BAUSTELLEN.map(b =>
        `<button type="button" class="chip" data-bwcat="${escapeHtml(b.id)}">${escapeHtml(b.emoji || '')} ${escapeHtml(b.label)}</button>`
      ).join('');

    chipsBar.addEventListener('click', (e) => {
      const b = e.target.closest('[data-bwcat]');
      if (!b) return;
      $$('.chip', chipsBar).forEach(x => x.classList.toggle('chip--active', x === b));
      bwCat = b.dataset.bwcat;
      renderBlutwerte();
    });

    $('#bw-einsteiger')?.addEventListener('change', (e) => {
      bwNurEinsteiger = !!e.target.checked;
      renderBlutwerte();
    });

    renderBlutwertRegeln();
    renderBlutwertPanels();
    renderBlutwertPodcast();
  }

  function renderBlutwertPodcast() {
    const box = $('#bw-podcast');
    if (!box || typeof BLUTWERT_PODCAST === 'undefined') return;
    box.innerHTML = podcastsHtml(BLUTWERT_PODCAST);
  }

  function renderBlutwertPanels() {
    const wrap = $('#bw-panels');
    if (!wrap || typeof BLUTWERT_PANELS === 'undefined') return;
    const marker = (typeof BLUTWERTE !== 'undefined') ? BLUTWERTE : [];
    wrap.innerHTML = BLUTWERT_PANELS.map(p => {
      const chips = (p.werte || []).map(id => {
        const m = marker.find(x => x.id === id);
        return m ? `<button type="button" class="bw-panel-chip" data-bwjump="${escapeHtml(id)}">${escapeHtml(m.kurz || m.name)}</button>` : '';
      }).join('');
      const zusatz = (p.zusatz || []).map(z => `<span class="bw-panel-chip is-plain">${escapeHtml(z)}</span>`).join('');
      return `
        <details class="bw-panel">
          <summary>
            <span class="bw-panel-emoji">${escapeHtml(p.emoji || '')}</span>
            <span class="bw-panel-label">${escapeHtml(p.label)}</span>
            <span class="bw-panel-anzahl">${(p.werte || []).length + (p.zusatz || []).length} Werte</span>
          </summary>
          <p class="bw-panel-wofuer">${escapeHtml(p.wofuer || '')}</p>
          ${chips || zusatz ? `<div class="bw-panel-werte">${chips}${zusatz}</div>` : ''}
          ${p.hinweis ? `<p class="bw-panel-hinweis">${escapeHtml(p.hinweis)}</p>` : ''}
          <dl class="bw-panel-meta">
            ${p.wann   ? `<dt>Wann</dt><dd>${escapeHtml(p.wann)}</dd>` : ''}
            ${p.kasse  ? `<dt>Kasse</dt><dd>${escapeHtml(p.kasse)}</dd>` : ''}
            ${p.kosten ? `<dt>Kosten</dt><dd>${escapeHtml(p.kosten)}</dd>` : ''}
          </dl>
        </details>`;
    }).join('');

    wrap.addEventListener('click', (e) => {
      const b = e.target.closest('[data-bwjump]');
      if (!b) return;
      const id = b.dataset.bwjump;
      bwCat = 'all';
      bwNurEinsteiger = false;
      const box = $('#bw-einsteiger'); if (box) box.checked = false;
      $$('.chip', $('#bw-chips')).forEach(x => x.classList.toggle('chip--active', x.dataset.bwcat === 'all'));
      renderBlutwerte();
      requestAnimationFrame(() => {
        const card = $(`#bw-grid [data-bwid="${CSS.escape(id)}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('is-highlight');
          setTimeout(() => card.classList.remove('is-highlight'), 2200);
        }
      });
    }, { once: false });
  }

  function onEnterBlutwerte() {
    renderBlutwerte();
  }

  function renderBlutwerte() {
    const grid = $('#bw-grid');
    const countEl = $('#bw-count');
    if (!grid || typeof BLUTWERTE === 'undefined') return;

    let items = BLUTWERTE.slice();
    if (bwCat !== 'all') items = items.filter(m => m.baustelle === bwCat);
    if (bwNurEinsteiger) items = items.filter(m => m.einsteiger);

    if (countEl) countEl.textContent = `${items.length} ${items.length === 1 ? 'Wert' : 'Werte'}`;

    const beschreibung = $('#bw-baustelle-text');
    if (beschreibung) {
      const b = (typeof BLUTWERT_BAUSTELLEN !== 'undefined') ? BLUTWERT_BAUSTELLEN.find(x => x.id === bwCat) : null;
      beschreibung.textContent = b ? (b.beschreibung || '') : '';
      beschreibung.classList.toggle('hidden', !b || !b.beschreibung);
    }

    if (!items.length) {
      grid.innerHTML = '<div class="erf-empty">Keine Werte in dieser Auswahl.</div>';
      return;
    }

    grid.innerHTML = items.map(m => {
      const hebel = (m.hebel || []).map(h => `<li>${escapeHtml(h)}</li>`).join('');
      const stoer = (m.stoerfaktoren || []).map(h => `<li>${escapeHtml(h)}</li>`).join('');
      return `
        <article class="bw-card${m.einsteiger ? ' is-einsteiger' : ''}" data-bwid="${escapeHtml(m.id)}">
          <div class="bw-head">
            <div class="bw-titel">
              <h3>${escapeHtml(m.name || '')}</h3>
              ${m.kurz && m.kurz !== m.name ? `<span class="bw-kurz">${escapeHtml(m.kurz)}</span>` : ''}
            </div>
            ${m.einsteiger ? '<span class="bw-badge">Einsteiger-Panel</span>' : ''}
          </div>

          <div class="bw-bereiche">
            <div class="bw-bereich">
              <span class="bw-label">Laborreferenz</span>
              <span class="bw-wert">${escapeHtml(m.referenz || '–')}</span>
            </div>
            ${m.optimal ? `
            <div class="bw-bereich bw-bereich--optimal">
              <span class="bw-label">Longevity-Ziel</span>
              <span class="bw-wert">${escapeHtml(m.optimal)}</span>
            </div>` : ''}
            ${m.einheit ? `<div class="bw-einheit">${escapeHtml(m.einheit)}</div>` : ''}
          </div>

          <p class="bw-bedeutung">${escapeHtml(m.bedeutung || '')}</p>

          <details class="bw-details">
            <summary>Was Abweichungen bedeuten können</summary>
            ${m.hoch ? `<p><strong>Erhöht:</strong> ${escapeHtml(m.hoch)}</p>` : ''}
            ${m.niedrig ? `<p><strong>Niedrig:</strong> ${escapeHtml(m.niedrig)}</p>` : ''}
            ${hebel ? `<div class="bw-liste"><strong>Stellschrauben</strong><ul>${hebel}</ul></div>` : ''}
            ${stoer ? `<div class="bw-liste bw-liste--warn"><strong>Verfälscht den Wert</strong><ul>${stoer}</ul></div>` : ''}
          </details>

          ${m.folge ? `<div class="bw-folge">Mehr dazu in Podcast-Folge ${escapeHtml(String(m.folge))}</div>` : ''}
        </article>
      `;
    }).join('');
  }

  function renderBlutwertRegeln() {
    const box = $('#bw-regeln');
    if (!box || typeof BLUTWERT_REGELN === 'undefined') return;
    const R = BLUTWERT_REGELN;

    const liste = (arr) => Array.isArray(arr) && arr.length
      ? `<ul>${arr.map(i => `<li>${escapeHtml(String(i))}</li>`).join('')}</ul>` : '';

    // einsteigerpanel.marker enthaelt IDs — fuer die Anzeige in Namen aufloesen.
    const namen = (ids) => (ids || []).map(id => {
      const m = BLUTWERTE.find(x => x.id === id);
      return m ? m.name : id;
    });

    const P = R.einsteigerpanel || {};

    box.innerHTML = `
      <div class="bw-regel-karte">
        <h4>Wie oft messen</h4>
        ${liste(R.messrhythmus)}
      </div>
      <div class="bw-regel-karte">
        <h4>Richtig vorbereiten</h4>
        ${liste(R.vorbereitung)}
      </div>
      <div class="bw-regel-karte bw-regel-karte--warn">
        <h4>Die großen Verfälscher</h4>
        ${liste(R.stoerfaktoren)}
      </div>
      <div class="bw-regel-karte bw-regel-karte--start">
        <h4>${escapeHtml(P.titel || 'Womit anfangen')}</h4>
        ${P.beschreibung ? `<p>${escapeHtml(P.beschreibung)}</p>` : ''}
        ${liste(namen(P.marker))}
        ${P.erweiterungHinweis ? `<p class="bw-regel-zusatz">${escapeHtml(P.erweiterungHinweis)}</p>` : ''}
      </div>
      <div class="bw-regel-karte">
        <h4>Wo messen lassen</h4>
        ${liste(P.wege)}
      </div>
    `;

    const regel = $('#bw-hauptregel');
    if (regel && R.wichtigsteRegel) regel.textContent = R.wichtigsteRegel;
  }

  // ============ MOBILE NAV TOGGLE (Hamburger) ============
  function initNavToggle() {
    const btn = $('#nav-toggle');
    const nav = $('#main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    // Beim Klick auf einen Menüpunkt automatisch schließen
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
    // Klick außerhalb schließt auch
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('open');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============ TAGESCHECK (SELFIE) ============
  let _selfieData = null; // {mime, base64}
  let _vitalsData = null; // Ergebnis der Live-Messung (Puls/Atmung/Blinzeln), oder null

  function initTagescheckView() {
    const inputCam = $('#selfie-camera-input');
    const inputFile = $('#selfie-file-input');
    const btnTake = $('#btn-take-selfie');
    const btnUpload = $('#btn-upload-selfie');
    const btnAnalyze = $('#btn-analyze-selfie');
    const btnRetake = $('#btn-retake-selfie');
    const upload = $('#tagescheck-upload');
    const preview = $('#tagescheck-preview');
    const result = $('#tagescheck-result');
    const img = $('#selfie-preview-img');
    if (!inputCam || !inputFile) return;

    btnTake?.addEventListener('click', () => inputCam.click());
    btnUpload?.addEventListener('click', () => inputFile.click());

    // Größe + Alter aus localStorage vorbefüllen + bei Änderung speichern
    const heightInp = $('#bmi-height');
    const ageInp = $('#bmi-age');
    try {
      const h = localStorage.getItem('bhc_body_height_cm');
      if (h && heightInp) heightInp.value = h;
      const a = localStorage.getItem('bhc_body_age');
      if (a && ageInp) ageInp.value = a;
    } catch (_) {}
    // Sofort bei jeder Eingabe speichern (nicht erst beim Verlassen des Feldes),
    // damit Größe & Alter dauerhaft erhalten bleiben, bis sie überschrieben werden.
    const saveHeight = () => { try { localStorage.setItem('bhc_body_height_cm', heightInp.value); } catch (_) {} };
    const saveAge = () => { try { localStorage.setItem('bhc_body_age', ageInp.value); } catch (_) {} };
    heightInp?.addEventListener('change', saveHeight);
    heightInp?.addEventListener('input', saveHeight);
    ageInp?.addEventListener('change', saveAge);
    ageInp?.addEventListener('input', saveAge);

    const handleFile = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const fromCam = (e.target.id === 'selfie-camera-input');
      try {
        const compressed = await compressImage(file, 1024, 0.85, fromCam);
        _selfieData = compressed;
        img.src = compressed.dataUrl;
        // Selfies (Frontkamera) spiegeln wir in der Vorschau wie im Spiegel-Sucher;
        // an die KI geht weiterhin das Original-Bild.
        img.classList.remove('selfie-mirror'); // Bild ist schon physisch gespiegelt
        upload.classList.add('hidden');
        preview.classList.remove('hidden');
        result.classList.add('hidden');
        result.innerHTML = '';
      } catch (err) {
        alert('Bild konnte nicht verarbeitet werden: ' + err.message);
      }
    };
    inputCam.addEventListener('change', handleFile);
    inputFile.addEventListener('change', handleFile);

    btnRetake?.addEventListener('click', () => {
      _selfieData = null;
      _vitalsData = null;
      inputCam.value = '';
      inputFile.value = '';
      img.src = '';
      img.classList.remove('selfie-mirror');
      preview.classList.add('hidden');
      upload.classList.remove('hidden');
      result.classList.add('hidden');
      result.innerHTML = '';
    });

    btnAnalyze?.addEventListener('click', () => analyzeSelfie());

    // ---- Live-Messung (Vitalwerte) ----
    initLiveMeasure();
  }

  let _liveMeasuring = false;

  function initLiveMeasure() {
    const btnLive   = $('#btn-live-measure');
    const camStage  = $('#tagescheck-camera');
    const upload    = $('#tagescheck-upload');
    const preview   = $('#tagescheck-preview');
    const result    = $('#tagescheck-result');
    const video     = $('#tc-cam-video');
    const btnStart  = $('#btn-start-measure');
    const btnCancel = $('#btn-cancel-measure');
    const status    = $('#tc-cam-status');
    const stage     = $('#tc-cam-stage');
    const countEl   = $('#tc-cam-count');
    const hintEl    = $('#tc-cam-hint');
    const fill      = $('#tc-cam-progress-fill');
    if (!btnLive || !camStage) return;

    const vitalsAvailable = !!(window.BHCVitals && window.BHCVitals.isSupported());
    if (!vitalsAvailable) {
      btnLive.disabled = true;
      btnLive.title = 'Live-Messung wird von diesem Browser nicht unterstützt.';
    }

    btnLive.addEventListener('click', async () => {
      upload.classList.add('hidden');
      preview.classList.add('hidden');
      result.classList.add('hidden');
      camStage.classList.remove('hidden');
      if (fill) fill.style.width = '0%';
      if (countEl) countEl.textContent = '20';
      btnStart.disabled = true;
      status.textContent = 'Kamera wird gestartet … bitte Zugriff erlauben.';
      const ok = await window.BHCVitals.openCamera(video);
      if (!ok) {
        status.textContent = 'Kamerazugriff nicht möglich. Bitte Berechtigung prüfen oder Selfie/Foto verwenden.';
        return;
      }
      status.textContent = 'Bereit. Gesicht ins Oval, dann „Messung starten".';
      btnStart.disabled = false;
    });

    btnCancel.addEventListener('click', () => {
      try { window.BHCVitals.close(); } catch (_) {}
      _liveMeasuring = false;
      camStage.classList.add('hidden');
      stage?.classList.remove('measuring');
      upload.classList.remove('hidden');
    });

    btnStart.addEventListener('click', async () => {
      if (_liveMeasuring) return;
      _liveMeasuring = true;
      btnStart.disabled = true;
      btnCancel.disabled = true;
      stage?.classList.add('measuring');
      if (hintEl) hintEl.textContent = 'Messung läuft · ruhig sitzen · gleichmäßig atmen';
      status.textContent = 'Messung läuft …';

      let vitals = null;
      try {
        vitals = await window.BHCVitals.measure({
          durationMs: 20000,
          onTick: (prog, secsLeft) => {
            if (fill) fill.style.width = Math.round(prog * 100) + '%';
            if (countEl) countEl.textContent = String(Math.max(0, secsLeft));
          }
        });
      } catch (err) {
        status.textContent = 'Messung fehlgeschlagen: ' + (err && err.message ? err.message : 'unbekannter Fehler');
        _liveMeasuring = false;
        btnStart.disabled = false; btnCancel.disabled = false;
        stage?.classList.remove('measuring');
        return;
      }

      try { window.BHCVitals.close(); } catch (_) {}
      _liveMeasuring = false;
      btnCancel.disabled = false;
      stage?.classList.remove('measuring');
      camStage.classList.add('hidden');

      if (!vitals || !vitals.frames || !vitals.frames.length) {
        upload.classList.remove('hidden');
        alert('Die Messung hat kein verwertbares Bild geliefert. ' + (vitals && vitals.note ? vitals.note : 'Bitte bei besserem Licht erneut versuchen.'));
        return;
      }

      _vitalsData = vitals;
      // Vorschau-Bild für den Verlauf-Reset/Retake-Pfad
      _selfieData = vitals.frames[0];
      analyzeTagescheck(vitals.frames, vitals);
    });
  }

  function onEnterTagescheck() {
    // Beim Neuöffnen: alten Status zurücksetzen falls vorhanden
    const result = $('#tagescheck-result');
    if (result && !result.classList.contains('hidden') && !_selfieData) {
      result.classList.add('hidden');
    }
    renderTagescheckHistory();
  }

  function bmiCategoryFor(bmi) {
    if (bmi == null) return null;
    if (bmi < 18.5) return 'Untergewicht';
    if (bmi < 25)   return 'Normal';
    if (bmi < 30)   return 'Übergewicht';
    return 'Adipositas';
  }

  // Feinere BMI-Bewertung mit nettem Spruch — altersgerecht ab 65 etwas verschoben
  // (geriatrische Norm: leichtes Mehrgewicht ist Reserve, Untergewicht riskanter).
  function bmiAssessmentFor(bmi, age) {
    if (bmi == null) return null;
    const senior = age && age >= 65;
    if (senior) {
      if (bmi < 18)   return { label: 'Starkes Untergewicht (Senior)',  color: '#c84a65', msg: 'Im Alter besonders riskant – Eiweißzufuhr und Muskelaufbau haben Priorität.' };
      if (bmi < 22)   return { label: 'Untere Komfortzone (Senior)',    color: '#d48a28', msg: 'Im Alter sind 23–28 oft besser als Reserve – ein paar Kilo dürften gerne dazu.' };
      if (bmi < 28)   return { label: 'Optimaler Senior-Bereich',       color: '#2f8b6a', msg: 'Genau richtig im Alter – gute Reserve, einfach halten.' };
      if (bmi < 30)   return { label: 'Leichtes Übergewicht',           color: '#d48a28', msg: 'Im Alter noch okay – leichte Bewegung würde gut tun.' };
      if (bmi < 35)   return { label: 'Adipositas Grad I',              color: '#c84a65', msg: 'Sukzessive abbauen, Bewegung priorisieren – ohne Crash-Diät.' };
      if (bmi < 40)   return { label: 'Adipositas Grad II',             color: '#c84a65', msg: 'Mit ärztlicher Begleitung angehen.' };
      return            { label: 'Adipositas Grad III',                 color: '#a63a52', msg: 'Bitte unbedingt ärztlich begleiten – langfristig dranbleiben lohnt sich.' };
    }
    if (bmi < 16)   return { label: 'Starkes Untergewicht',     color: '#c84a65', msg: 'Deutlich zu wenig – das belastet Stoffwechsel und Hormone. Aufbau hat hier Priorität.' };
    if (bmi < 18.5) return { label: 'Leichtes Untergewicht',    color: '#d48a28', msg: 'Etwas weniger als optimal – ein paar Kilo Muskelmasse würden gut tun.' };
    if (bmi < 22)   return { label: 'Optimaler Normalbereich',  color: '#2f8b6a', msg: 'Top im Optimalfenster – einfach halten.' };
    if (bmi < 25)   return { label: 'Komfortabler Normalbereich', color: '#2f8b6a', msg: 'Solide Mitte, alles im grünen Bereich.' };
    if (bmi < 27)   return { label: 'Leichtes Übergewicht',     color: '#d48a28', msg: 'Aktuell ein, zwei Kilo zu viel – noch entspannt zu drehen.' };
    if (bmi < 30)   return { label: 'Deutliches Übergewicht',   color: '#d48a28', msg: 'Ein paar Kilo zu viel – das spürt der Stoffwechsel schon.' };
    if (bmi < 35)   return { label: 'Adipositas Grad I',        color: '#c84a65', msg: 'Zeit für eine gezielte Strategie – realistische Schritte zahlen sich aus.' };
    if (bmi < 40)   return { label: 'Adipositas Grad II',       color: '#c84a65', msg: 'Spürbare Belastung – am besten mit ärztlicher Begleitung angehen.' };
    return            { label: 'Adipositas Grad III',           color: '#a63a52', msg: 'Bitte unbedingt ärztlich begleiten – langfristig dranbleiben lohnt sich.' };
  }

  // ---- Verlauf (Zeitreihe der letzten 30) ----
  const TAGESCHECK_HISTORY_KEY = 'bhc_tagescheck_history_v1';
  const TAGESCHECK_HISTORY_MAX = 60;

  function loadTagescheckHistory() {
    try {
      const raw = localStorage.getItem(TAGESCHECK_HISTORY_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr : [];
    } catch (_) { return []; }
  }

  function saveTagescheckEntry(d, vitals) {
    try {
      const hist = loadTagescheckHistory();
      const entry = {
        ts: Date.now(),
        score: Math.max(0, Math.min(100, Math.round(d.overallScore || 0))),
        sub: d.subScores || {},
        focus: (d.todayFocus || '').slice(0, 160),
        firstObs: (d.observations && d.observations[0] || '').slice(0, 160)
      };
      // Live-Vitalwerte mitführen, wenn vorhanden
      if (vitals) {
        if (vitals.pulseBpm) entry.pulse = vitals.pulseBpm;
        if (vitals.breathingRpm) entry.breath = vitals.breathingRpm;
        if (vitals.blinkAvailable && vitals.blinkRate != null) entry.blink = vitals.blinkRate;
      }
      // BMI mitführen, wenn vorhanden
      if (d.bmiEstimateAvailable && d.estimatedBMI) {
        entry.bmi = +Number(d.estimatedBMI).toFixed(1);
        entry.bmiCat = d.bmiCategory || bmiCategoryFor(entry.bmi);
        if (d.estimatedWeightKg) entry.kg = +Number(d.estimatedWeightKg).toFixed(1);
        if (d.bmiConfidence) entry.bmiConf = d.bmiConfidence;
      }
      hist.unshift(entry);
      while (hist.length > TAGESCHECK_HISTORY_MAX) hist.pop();
      localStorage.setItem(TAGESCHECK_HISTORY_KEY, JSON.stringify(hist));
    } catch (_) {}
  }

  function clearTagescheckHistory() {
    if (!confirm('Tagescheck-Verlauf löschen?')) return;
    localStorage.removeItem(TAGESCHECK_HISTORY_KEY);
    renderTagescheckHistory();
  }

  function renderTagescheckHistory() {
    const wrap = $('#tagescheck-history');
    if (!wrap) return;
    const hist = loadTagescheckHistory();
    if (!hist.length) {
      wrap.innerHTML = '';
      return;
    }
    // Balken-Diagramm (chronologisch, älteste links) + kleine BMI-Zahl unter jedem Balken
    const points = hist.slice().reverse();
    const bars = points.map((p) => {
      const h = Math.max(4, Math.round(p.score));
      const c = p.score >= 75 ? '#2f8b6a' : (p.score >= 50 ? '#d48a28' : '#c84a65');
      const dt = new Date(p.ts);
      const when = dt.toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
      const bmiTxt = p.bmi ? ` · BMI ${(+p.bmi).toFixed(1).replace('.', ',')}` : '';
      const title = `${when} · Score ${p.score}${bmiTxt}` + (p.focus ? ` · ${p.focus}` : '');
      const bmiLabel = p.bmi ? `<div class="tc-bar-bmi">${(+p.bmi).toFixed(1).replace('.', ',')}</div>` : '<div class="tc-bar-bmi tc-bar-bmi--empty">–</div>';
      return `<div class="tc-bar-col" title="${escapeHtml(title)}">
        <div class="tc-bar" style="height:${h}%; background:${c};"></div>
        ${bmiLabel}
      </div>`;
    }).join('');

    // Letzte 3 prominent, Rest scrollbar
    const top3 = hist.slice(0, 3);
    const rest = hist.slice(3);

    const itemHtml = (e) => {
      const dt = new Date(e.ts);
      const when = dt.toLocaleString('de-DE', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' });
      const c = e.score >= 75 ? '#2f8b6a' : (e.score >= 50 ? '#d48a28' : '#c84a65');
      const subTxt = Object.entries(e.sub || {}).map(([k, v]) => `${escapeHtml(k)} ${Math.round(v)}`).join(' · ');
      const bmiBadge = e.bmi ? `<span class="tc-hist-bmi">BMI ${(+e.bmi).toFixed(1).replace('.', ',')}${e.kg ? ` · ${(+e.kg).toFixed(1)} kg` : ''}${e.bmiCat ? ` (${escapeHtml(e.bmiCat)})` : ''}</span>` : '';
      const pulseBadge = e.pulse ? `<span class="tc-hist-bmi">🫀 ${e.pulse} bpm</span>` : '';
      return `<li class="tc-hist-item">
        <span class="tc-hist-score" style="background:${c}1A;color:${c}">${e.score}</span>
        <span class="tc-hist-meta">
          <span class="tc-hist-when">${escapeHtml(when)}${bmiBadge}${pulseBadge}</span>
          ${subTxt ? `<span class="tc-hist-sub">${subTxt}</span>` : ''}
          ${e.focus ? `<span class="tc-hist-focus">${escapeHtml(e.focus)}</span>` : ''}
        </span>
      </li>`;
    };

    // Alle Einträge im EINEN scrollbaren Bereich (max. 60)
    const allHtml = hist.map(itemHtml).join('');

    wrap.innerHTML = `
      <div class="tc-history-head">
        <h3>📈 Dein Verlauf <span class="tc-hist-count">${hist.length}/${TAGESCHECK_HISTORY_MAX}</span></h3>
        <button type="button" class="btn-link" onclick="(function(){ try { localStorage.removeItem('${TAGESCHECK_HISTORY_KEY}'); document.getElementById('tagescheck-history').innerHTML=''; } catch(e){} })()">Verlauf löschen</button>
      </div>
      <div class="tc-bars" role="img" aria-label="Wellness-Score Verlauf als Balkendiagramm">${bars}</div>
      <div class="tc-bars-legend">
        <span>älter</span>
        <span>jetzt →</span>
      </div>
      <h4 class="tc-hist-section-title">Letzte Ergebnisse</h4>
      <div class="tc-hist-scroll">
        <ol class="tc-hist-list">${allHtml}</ol>
      </div>
    `;
  }

  // EXIF-Orientation aus JPEG ArrayBuffer auslesen. Liefert 1..8 (1 = normal).
  // Smartphones speichern physisch oft im Landscape-Modus und vermerken im EXIF
  // die wahre Display-Rotation. Wir parsen das selbst, damit wir unabhängig vom
  // Browser-Verhalten (createImageBitmap mit imageOrientation kennt nicht jeder) sind.
  async function readExifOrientation(file) {
    try {
      const buf = await file.slice(0, 128 * 1024).arrayBuffer();
      const view = new DataView(buf);
      if (view.byteLength < 4 || view.getUint16(0, false) !== 0xFFD8) return 1; // kein JPEG
      let offset = 2;
      while (offset + 4 < view.byteLength) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if ((marker & 0xFF00) !== 0xFF00) return 1;
        if (marker === 0xFFE1) { // APP1 = EXIF
          if (view.getUint32(offset + 2, false) !== 0x45786966) return 1; // "Exif"
          const tiffStart = offset + 8;
          const little = view.getUint16(tiffStart, false) === 0x4949;
          const firstIFD = view.getUint32(tiffStart + 4, little);
          const ifdStart = tiffStart + firstIFD;
          if (ifdStart + 2 > view.byteLength) return 1;
          const tagCount = view.getUint16(ifdStart, little);
          for (let i = 0; i < tagCount; i++) {
            const entry = ifdStart + 2 + i * 12;
            if (entry + 12 > view.byteLength) break;
            if (view.getUint16(entry, little) === 0x0112) {
              const o = view.getUint16(entry + 8, little);
              return (o >= 1 && o <= 8) ? o : 1;
            }
          }
          return 1;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return 1;
    } catch (_) { return 1; }
  }

  // Bild komprimieren. Die EXIF-Orientierung überlassen wir bewusst dem Browser
  // (Spec-Default 'from-image'), statt sie selbst zu parsen und manuell zu drehen.
  // Grund: manche mobile Browser (v.a. iOS Safari) orientieren das Bitmap bereits
  // selbst und ignorieren 'imageOrientation: none' stillschweigend — dann drehte
  // unser manueller Code ein ZWEITES Mal und das Bild kippte. Mit Auto-Orientierung
  // gibt es nur eine Drehung, und die ist korrekt.
  // Bei mirrorHorizontal=true wird zusätzlich horizontal gespiegelt (Frontkamera-Look).
  async function compressImage(file, maxSize, quality, mirrorHorizontal) {
    // Quelle laden MIT browser-nativer EXIF-Orientierung.
    let source = null;
    try {
      if ('createImageBitmap' in window) {
        source = await createImageBitmap(file, { imageOrientation: 'from-image' });
      }
    } catch (_) { source = null; }

    if (!source) {
      // Fallback: <img> orientiert per CSS-Default 'image-orientation: from-image' selbst.
      source = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const im = new Image();
          im.onload = () => resolve(im);
          im.onerror = reject;
          im.src = e.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    }

    // Dimensionen sind bereits korrekt orientiert.
    let dispW = source.width, dispH = source.height;

    // Auf maxSize verkleinern (Long-Edge)
    if (dispW > maxSize || dispH > maxSize) {
      const scale = Math.min(maxSize / dispW, maxSize / dispH);
      dispW = Math.round(dispW * scale);
      dispH = Math.round(dispH * scale);
    }

    const c = document.createElement('canvas');
    c.width = dispW; c.height = dispH;
    const ctx = c.getContext('2d');

    ctx.drawImage(source, 0, 0, dispW, dispH);
    if (source.close) try { source.close(); } catch (_) {}

    // Mirror (Front-Kamera-Look) nach korrekter Darstellung: separates Canvas.
    let outCanvas = c;
    if (mirrorHorizontal) {
      const m = document.createElement('canvas');
      m.width = dispW; m.height = dispH;
      const mctx = m.getContext('2d');
      mctx.translate(dispW, 0);
      mctx.scale(-1, 1);
      mctx.drawImage(c, 0, 0);
      outCanvas = m;
    }

    const dataUrl = outCanvas.toDataURL('image/jpeg', quality);
    const base64 = dataUrl.split(',')[1];
    return { mime: 'image/jpeg', base64, dataUrl };
  }

  function analyzeSelfie() {
    if (!_selfieData) { alert('Bitte zuerst ein Selfie aufnehmen.'); return; }
    _vitalsData = null;
    analyzeTagescheck([_selfieData], null);
  }

  async function analyzeTagescheck(frames, vitals) {
    if (!frames || !frames.length) { alert('Kein Bild vorhanden.'); return; }
    const result = $('#tagescheck-result');
    const btn = $('#btn-analyze-selfie');
    if (btn) { btn.disabled = true; btn.textContent = 'Werte aus…'; }
    result.classList.remove('hidden');
    const isLive = !!vitals;
    result.innerHTML = '<div class="tagescheck-loading">🔎 KI wertet ' + (isLive ? (frames.length + ' Bilder + Vitalwerte') : 'dein Selfie') + ' aus …</div>';

    const sys = `Du bist ein erfahrener Wellness-Coach und analysierst ${isLive ? 'mehrere Standbilder aus einem kurzen Live-Video derselben Person' : 'ein Selbstporträt'} für einen Tageseindruck.${isLive ? '\nDie Bilder stammen aus derselben 20-Sekunden-Aufnahme – nutze sie gemeinsam (schärfstes Bild bevorzugen, verschiedene Momente abgleichen).' : ''}

SCHRITT 1 – Bildqualität prüfen (entscheidend!):
Bewerte zuerst ehrlich, ob das Bild für eine seriöse Wellness-Einschätzung GEEIGNET ist.
Nicht geeignet, wenn:
- Bild unscharf, verwackelt, verschwommen
- Zu dunkel, zu stark belichtet oder starkes Gegenlicht
- Kein Gesicht erkennbar oder Gesicht durch Maske/Brille/Hand/Haare verdeckt
- Gesicht zu klein (z.B. Ganzkörperaufnahme von weit weg)
- Bild zeigt etwas anderes (kein Selbstporträt, keine Person)
- Starke Filter, Schwarz-Weiß, künstliche Beleuchtung verfälscht den Eindruck

Wenn auch nur EINER dieser Punkte zutrifft → setze "imageQuality": "insufficient" und gib in "qualityReason" konkret an, was nicht passt. ALLES ANDERE (Score, Empfehlungen) darfst du dann WEGLASSEN.

SCHRITT 2 – Nur wenn Bildqualität OK: Wellness-Einschätzung
- KEINE medizinische Diagnose, KEINE Krankheits-Vermutung.
- BMI: Wenn eine Körpergröße angegeben ist, IMMER eine Gewichtsschätzung versuchen. Konfidenz ehrlich angeben:
  - "high"   = Ganzkörper oder Oberkörper deutlich sichtbar, Schätzung ±5 kg
  - "medium" = Brustkorb/Schulter sichtbar, Schätzung ±7 kg
  - "low"    = Nur Kopf/Hals sichtbar (Selfie) → Gesichtsfülle + Halsansatz als grobe Indikatoren, Schätzung ±10 kg
  In allen Fällen: setze "bmiEstimateAvailable": true, "estimatedWeightKg", "estimatedBMI" = Gewicht / (Größe_m)^2 (eine Nachkommastelle), "bmiCategory" gemäß WHO: <18.5 Untergewicht, 18.5–24.9 Normal, 25.0–29.9 Übergewicht, ≥30 Adipositas, "bmiConfidence": "high|medium|low" und "bmiNote" mit der ehrlichen Unschärfe.
- Wenn KEINE Größe angegeben ist: setze "bmiEstimateAvailable": false.
- Beurteile rein VISUELLE Vitalitäts-Marker: Augen (Müdigkeit, Ringe, Glanz), Hautqualität (Teint, Rötung, Trockenheit), Mimik (Mundwinkel, Stirnfalten), Kopfhaltung, Frische-Eindruck.
- "observations": 3–5 KONKRETE Details aus DIESEM Bild – keine Floskeln.
- Scores ehrlich nach dem was du siehst (frisch = 85+, müde = 50–65). Nicht alles ist „75".
- ALTERSKORREKTUR (sehr wichtig): Vergleiche die Marker IMMER mit dem altersgemäßen Normalzustand der Person.
  Faltige Haut, leichte Augenringe, weniger Frische-Glow sind bei 60+ NORMAL und KEIN Stress-/Erschöpfungs-Signal.
  Junge Haut ist KEIN Bonus für hohe Vitalitäts-Scores. Werte einen 65-Jährigen mit gepflegtem, wachen Eindruck genauso hoch (85+)
  wie einen 30-Jährigen mit frischer Haut. Erschöpfung erkennst du an: Mimik (abfallende Mundwinkel,
  gedrückter Ausdruck), Augen-Glanz (matt vs. wach), Kopfhaltung (gesenkt), Hautfarbe (fahl, ungewöhnlich blass/grau).
  Ohne diese spezifischen Marker → keine Stress-Abwertung wegen Alter.

Antworte AUSSCHLIESSLICH mit gültigem JSON (ohne Markdown-Codeblock) im Schema:
{
  "imageQuality": "ok",
  "qualityReason": "",
  "overallScore": 75,
  "subScores": { "Erholung": 70, "Stress": 65, "Vitalität": 80 },
  "observations": ["..."],
  "todayFocus": "1 Satz: worauf sollte sich der Fokus heute richten?",
  "recommendedSupplementIds": ["magnesium", "vitamin-d3"],
  "recommendedTipIds": ["meditation", "morgens-sonnenlicht"],
  "bmiEstimateAvailable": true,
  "estimatedWeightKg": 75.0,
  "estimatedBMI": 23.7,
  "bmiCategory": "Normal",
  "bmiConfidence": "low",
  "bmiNote": "Grobe Schätzung – ignoriert Muskelmasse.",
  "vitalsComment": "Nur wenn Vitalwerte mitgeliefert wurden: 1–2 Sätze, die Puls/Atmung/Blinzelrate im Kontext einordnen (Entspannung, Müdigkeit). Sonst leer.",
  "disclaimer": "Subjektiver Tageseindruck, keine medizinische Aussage."
}
Wenn imageQuality === "insufficient": die Bewertungs-Felder dürfen leer/0 sein.
Scores 0–100 (höher = besser). 3–5 observations. 2–4 supplement-IDs aus dieser Liste: ${(typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS.map(s => s.id).join(', ') : '')}. 2–4 tip-IDs aus dieser Liste: ${(typeof TIPS !== 'undefined' ? TIPS.map(t => t.id).join(', ') : '')}.`;

    const userPrompt = isLive
      ? `Analysiere diese ${frames.length} Standbilder aus einer 20-Sekunden-Live-Aufnahme derselben Person. Liefere JSON nach Schema. Kein medizinischer Rat.`
      : `Analysiere dieses Selfie. Liefere JSON nach Schema. Kein medizinischer Rat.`;

    // Vitalwerte aus der Live-Messung (lokal berechnet) als Kontext mitgeben
    let vitalsContext = '';
    if (vitals) {
      const parts = [];
      if (vitals.pulseBpm) parts.push(`Ruhepuls ca. ${vitals.pulseBpm} bpm (Konfidenz ${vitals.pulseConfidence || 'niedrig'})`);
      if (vitals.breathingRpm) parts.push(`Atemfrequenz ca. ${vitals.breathingRpm}/min (Konfidenz ${vitals.breathingConfidence || 'niedrig'})`);
      if (vitals.blinkAvailable && vitals.blinkRate != null) parts.push(`Blinzelrate ca. ${vitals.blinkRate}/min`);
      if (parts.length) {
        vitalsContext = `\n\nLOKAL GEMESSENE VITALWERTE (im Browser per rPPG/Gesichtserkennung geschätzt, KEINE Medizingeräte – nur grobe Richtwerte): ${parts.join('; ')}.
Ordne diese Werte in "vitalsComment" knapp ein (z.B. ruhiger Puls = Entspannung; hohe Blinzelrate = evtl. Müdigkeit/Bildschirm). Beziehe sie NICHT in eine medizinische Bewertung ein und stelle KEINE Diagnose. Bei niedriger Konfidenz entsprechend vorsichtig formulieren.`;
      }
    }

    try {
      // Random-Seed im Prompt + hohe Temperatur sorgen dafür, dass die Auswertung
      // sich auch bei ähnlichen Bildern nicht in eine Schablone einfräst.
      const seed = Math.floor(Math.random() * 1e9);

      // Körperdaten aus den Eingabefeldern
      const heightCm = parseFloat($('#bmi-height')?.value || '') || null;
      const ageYears = parseInt($('#bmi-age')?.value || '', 10) || null;
      let bodyContext = '';
      if (ageYears) {
        bodyContext += `\n\nALTER der Person: ${ageYears} Jahre. Bewerte ALLE Vitalitäts-Marker altersgemäß (siehe System-Prompt ALTERSKORREKTUR). Ein 65-Jähriger mit wachem, gepflegtem Eindruck verdient genauso 85+ Score wie ein 30-Jähriger mit frischer Haut.`;
      } else {
        bodyContext += `\n\nKein Alter angegeben – schätze grob (jung/mittel/alt) und werte alle Marker altersgemäß, sonst werden Junge automatisch zu fit und Ältere automatisch zu erschöpft eingestuft.`;
      }
      if (heightCm) {
        bodyContext += `\n\nKörperdaten (vom Nutzer): Größe ${heightCm} cm${ageYears ? `, Alter ${ageYears}` : ''}. IMMER eine Gewichtsschätzung machen (auch bei reinem Gesichts-Selfie aus Gesichtsfülle, Wangenkontur und Halsansatz, dann bmiConfidence:"low").
WICHTIG – konservative Gewichtsschätzung:
- KI-Modelle überschätzen visuell aus Selfies das Gewicht systematisch um 3–8 kg. Korrigiere das aktiv: schätze eher 5 kg WENIGER als dein erster Eindruck, vor allem wenn du dir unsicher bist.
- Typische Verteilung erwachsener Männer 170–185 cm: 65–85 kg (BMI 22–25). Bei Frauen 160–175 cm: 55–72 kg (BMI 21–24). Diese Bereiche als Baseline nutzen, NICHT pauschal höher schätzen.
- Berechne dann BMI = Gewicht_kg / (${heightCm}/100)^2 auf 1 Nachkommastelle. Setze bmiEstimateAvailable:true.`;
      } else {
        bodyContext += `\n\nKeine Körpergröße angegeben. Setze bmiEstimateAvailable:false.`;
      }
      const imageParts = frames.map(f => ({ inlineData: { mimeType: f.mime || 'image/jpeg', data: f.base64 } }));
      const body = {
        contents: [{
          role: 'user',
          parts: [
            { text: userPrompt + bodyContext + vitalsContext + '\n\n[Diversitäts-Seed: ' + seed + '] Bitte werte diese spezifischen Bilder eigenständig aus – nicht generisch.' },
            ...imageParts
          ]
        }],
        generationConfig: {
          temperature: 0.85,
          // Großzügiges Budget: bei mehreren Bildern (Live-Messung) frisst das
          // "Thinking" sonst das Limit auf und das JSON wird abgeschnitten.
          maxOutputTokens: 8192,
          thinkingConfig: { thinkingBudget: 2048 }
        },
        systemInstruction: { parts: [{ text: sys }] }
      };

      const res = await fetch(AI_ENDPOINT(AI_MODEL), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      const cand = data?.candidates?.[0];
      const finish = cand?.finishReason;
      const text = (cand?.content?.parts || []).map(p => p.text || '').join('').trim();
      const json = extractJson(text);
      if (!json) {
        console.warn('Tagescheck: Antwort nicht lesbar. finishReason=', finish, 'len=', text.length, 'raw=', text.slice(0, 400));
        if (finish === 'MAX_TOKENS') throw new Error('Antwort war zu lang und wurde abgeschnitten. Bitte erneut versuchen.');
        if (finish === 'SAFETY' || finish === 'PROHIBITED_CONTENT') throw new Error('Die KI hat die Auswertung aus Sicherheitsgründen abgelehnt. Bitte mit einem anderen Bild erneut versuchen.');
        if (!text) throw new Error('Die KI hat keine Antwort geliefert. Bitte erneut versuchen.');
        throw new Error('KI-Antwort konnte nicht gelesen werden.');
      }

      // Wenn die KI das Bild als nicht auswertbar markiert: Fehler anzeigen, NICHT speichern
      if (json.imageQuality === 'insufficient') {
        renderTagescheckQualityError(json.qualityReason || 'Bildqualität reicht für eine seriöse Auswertung nicht aus.');
        return;
      }

      saveTagescheckEntry(json, vitals);
      renderTagescheckResult(json, vitals);
      renderTagescheckHistory();
    } catch (err) {
      result.innerHTML = '<div class="err">Fehler bei der Auswertung: ' + escapeHtml(err.message) + '</div>';
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = '✨ Auswerten lassen'; }
    }
  }

  function renderTagescheckQualityError(reason) {
    const result = $('#tagescheck-result');
    if (!result) return;
    result.classList.remove('hidden');
    result.innerHTML = `
      <div class="tc-quality-error">
        <div class="tc-quality-icon">📸</div>
        <h3>Bild kann nicht ausgewertet werden</h3>
        <p class="tc-quality-reason">${escapeHtml(reason)}</p>
        <p class="muted small">Tipps für ein besseres Selfie:</p>
        <ul class="tc-quality-tips">
          <li>Gerades, gut beleuchtetes Tageslicht (Fenster vor dir, nicht im Rücken)</li>
          <li>Gesicht füllt etwa 60–80 % des Bildes</li>
          <li>Brille/Hand/Haare nicht im Weg, keine Maske</li>
          <li>Scharf stellen – kurz still halten</li>
          <li>Keine starken Filter / Schwarz-Weiß</li>
        </ul>
        <div class="tc-actions">
          <button type="button" class="btn btn-primary" onclick="document.getElementById('btn-retake-selfie').click();">↻ Neues Selfie</button>
        </div>
      </div>
    `;
  }

  function vitalsCardsHtml(vitals, vitalsComment) {
    if (!vitals) return '';
    const confColor = (c) => c === 'high' ? '#2f8b6a' : (c === 'medium' ? '#d48a28' : '#c84a65');
    const confLabel = (c) => c === 'high' ? 'hoch' : (c === 'medium' ? 'mittel' : (c === 'low' ? 'niedrig' : ''));
    const card = (icon, val, unit, label, conf, na) => {
      if (na) {
        return `<div class="tc-vital tc-vital--na"><div class="tc-vital-icon">${icon}</div><div class="tc-vital-val">–</div><div class="tc-vital-label">${escapeHtml(label)}</div></div>`;
      }
      const cc = conf ? `<span class="tc-vital-conf" style="background:${confColor(conf)}1A;color:${confColor(conf)};">${confLabel(conf)}</span>` : '';
      return `<div class="tc-vital"><div class="tc-vital-icon">${icon}</div><div class="tc-vital-val">${val}<small> ${escapeHtml(unit)}</small></div><div class="tc-vital-label">${escapeHtml(label)}</div>${cc}</div>`;
    };
    const pulse = vitals.pulseBpm
      ? card('🫀', vitals.pulseBpm, 'bpm', 'Puls', vitals.pulseConfidence)
      : card('🫀', null, '', 'Puls n. messbar', null, true);
    const breath = vitals.breathingRpm
      ? card('🌬️', vitals.breathingRpm, '/min', 'Atmung', vitals.breathingConfidence)
      : card('🌬️', null, '', 'Atmung n. messbar', null, true);
    const blink = (vitals.blinkAvailable && vitals.blinkRate != null)
      ? card('👁️', vitals.blinkRate, '/min', 'Blinzeln', null)
      : card('👁️', null, '', 'Blinzeln n. verfügbar', null, true);
    const note = vitalsComment
      ? `<div class="tc-vitals-note">${escapeHtml(vitalsComment)}</div>`
      : (vitals.note ? `<div class="tc-vitals-note">${escapeHtml(vitals.note)}</div>` : '');
    return `<div class="tc-vitals">${pulse}${breath}${blink}</div>${note}
      <p class="tc-disclaimer">Vitalwerte lokal aus Video geschätzt (rPPG) – keine Medizingeräte, nur grobe Richtwerte.</p>`;
  }

  function renderTagescheckResult(d, vitals) {
    const result = $('#tagescheck-result');
    if (!result) return;

    const score = Math.max(0, Math.min(100, Math.round(d.overallScore || 0)));
    const scoreColor = score >= 75 ? '#2f8b6a' : (score >= 50 ? '#d48a28' : '#c84a65');
    const subScores = d.subScores || {};
    const obs = (d.observations || []).slice(0, 6);

    const supps = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : []);
    const tips  = (typeof TIPS !== 'undefined' ? TIPS : []);
    const recSupp = (d.recommendedSupplementIds || []).map(id => supps.find(s => s.id === id)).filter(Boolean).slice(0, 3);
    const recTips = (d.recommendedTipIds || []).map(id => tips.find(t => t.id === id)).filter(Boolean).slice(0, 3);

    const subScoreHtml = Object.entries(subScores).map(([label, val]) => {
      const v = Math.max(0, Math.min(100, Math.round(val)));
      const c = v >= 75 ? '#2f8b6a' : (v >= 50 ? '#d48a28' : '#c84a65');
      return `<div class="tc-sub">
        <div class="tc-sub-label">${escapeHtml(label)}</div>
        <div class="tc-sub-bar"><div class="tc-sub-fill" style="width:${v}%; background:${c};"></div></div>
        <div class="tc-sub-val">${v}</div>
      </div>`;
    }).join('');

    const obsHtml = obs.length ? `<div class="tc-section"><h4>Beobachtungen</h4><ul>${obs.map(o => `<li>${escapeHtml(o)}</li>`).join('')}</ul></div>` : '';
    const focusHtml = d.todayFocus ? `<div class="tc-focus"><strong>🎯 Fokus heute:</strong> ${escapeHtml(d.todayFocus)}</div>` : '';

    const suppHtml = recSupp.length ? `<div class="tc-section"><h4>💊 Empfohlene Supplements heute</h4><div class="supplement-grid">${recSupp.map(s => `
      <article class="supp-card">
        <div class="supp-head"><span class="supp-cat">${escapeHtml(s.category)}</span>${s.evidence ? `<span class="ev ev-${s.evidence}">${s.evidence}</span>` : ''}</div>
        <h3>${escapeHtml(s.name)}</h3>
        <p>${escapeHtml(s.short || '')}</p>
        ${s.dosage ? `<p class="small"><strong>Dosis:</strong> ${escapeHtml(s.dosage)}</p>` : ''}
      </article>
    `).join('')}</div></div>` : '';

    const tipHtml = recTips.length ? `<div class="tc-section"><h4>🧠 Empfohlene Tipps heute</h4><div class="tips-grid">${recTips.map(t => `
      <article class="tip-card">
        <div class="tip-icon">${escapeHtml(t.icon || '💡')}</div>
        <div class="tip-cat">${escapeHtml(t.category)}</div>
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.short)}</p>
        <p class="tip-how"><strong>Wie:</strong> ${escapeHtml(t.how)}</p>
      </article>
    `).join('')}</div></div>` : '';

    // BMI-Block (kompakt, kommt UNTER den Wellness-Score) — altersgerecht via bhc_body_age
    let bmiHtml = '';
    if (d.bmiEstimateAvailable && d.estimatedBMI) {
      const bmi = +Number(d.estimatedBMI).toFixed(1);
      const ageForAssess = parseInt($('#bmi-age')?.value || localStorage.getItem('bhc_body_age') || '', 10) || null;
      const assess = bmiAssessmentFor(bmi, ageForAssess);
      const cat = (assess && assess.label) || d.bmiCategory || '';
      const catColor = (assess && assess.color) || '#5a6560';
      const msg = (assess && assess.msg) || '';
      const w = d.estimatedWeightKg ? `~${(+d.estimatedWeightKg).toFixed(1)} kg` : '';
      const conf = d.bmiConfidence || 'low';
      const confLabel = conf === 'high' ? 'hoch' : (conf === 'medium' ? 'mittel' : 'niedrig');
      const confColor = conf === 'high' ? '#2f8b6a' : (conf === 'medium' ? '#d48a28' : '#c84a65');
      bmiHtml = `<div class="tc-bmi tc-bmi--mini">
        <div class="tc-bmi-row">
          <span class="tc-bmi-num-mini">${bmi.toFixed(1).replace('.', ',')}</span>
          <span class="tc-bmi-label-mini">BMI ${w ? `· ${escapeHtml(w)}` : ''}</span>
          <span class="tc-bmi-cat-mini" style="color:${catColor};">${escapeHtml(cat)}</span>
          <span class="tc-bmi-conf-mini" style="background:${confColor}1A;color:${confColor};">Konfidenz: ${confLabel}</span>
        </div>
        ${msg ? `<div class="tc-bmi-msg">${escapeHtml(msg)}</div>` : ''}
      </div>`;
    } else {
      bmiHtml = `<div class="tc-bmi tc-bmi--mini tc-bmi--unavailable">
        <span class="tc-bmi-label-mini">BMI</span>
        <span class="tc-bmi-msg">Keine Schätzung möglich. Tipp: Größe oben eintragen.</span>
      </div>`;
    }

    result.innerHTML = `
      <div class="tc-score-wrap">
        <div class="tc-score-circle" style="--score-color:${scoreColor}; --score-deg:${score * 3.6}deg;">
          <div class="tc-score-num">${score}</div>
          <div class="tc-score-label">Wellness-Score</div>
        </div>
        <div class="tc-subscores">${subScoreHtml}</div>
      </div>
      ${vitalsCardsHtml(vitals, d.vitalsComment)}
      ${bmiHtml}
      ${focusHtml}
      ${obsHtml}
      ${suppHtml}
      ${tipHtml}
      ${d.disclaimer ? `<p class="tc-disclaimer">${escapeHtml(d.disclaimer)}</p>` : ''}
      <div class="tc-actions">
        ${vitals
          ? `<button type="button" class="btn btn-primary" onclick="document.getElementById('btn-retake-selfie').click(); document.getElementById('btn-live-measure').click();">🔁 Messung wiederholen</button>`
          : `<button type="button" class="btn btn-primary" onclick="document.getElementById('btn-retake-selfie').click();">🔁 Wiederholen</button>`}
        <button type="button" class="btn btn-ghost" onclick="document.getElementById('btn-retake-selfie').click();">📷 Neues Bild</button>
      </div>
    `;
  }

  // ============ GLOBALE SUCHE (Primärnavigation, über alle Inhalte) ============
  function buildSearchIndex() {
    const idx = [];
    const add = (type, label, emoji, id, name, short, extra) => {
      if (!name) return;
      idx.push({
        type, label, emoji: emoji || '•', id: id || '', name: name, short: short || '',
        hay: normalizeStr([name, short, extra].filter(Boolean).join(' '))
      });
    };
    (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : []).forEach(s =>
      add('supplement', 'Supplement', '💊', s.id, s.name, s.short, [s.altNames, s.category, (s.tags || []).join(' ')].join(' ')));
    (typeof EXPERIMENTAL !== 'undefined' ? EXPERIMENTAL : []).forEach(e =>
      add('experimental', 'Peptid / Substanz', e.emoji || '⚗️', e.id, e.name, e.short, [e.altNames, e.class].join(' ')));
    (typeof KHAVINSON !== 'undefined' ? KHAVINSON : []).forEach(e =>
      add('khavinson', 'Khavinson-Peptid', e.emoji || '🧬', e.id, e.name, e.short, [e.altNames, e.class].join(' ')));
    (typeof TIPS !== 'undefined' ? TIPS : []).forEach(t =>
      add('tip', 'Tipp', t.icon || '💡', t.id, t.title || t.name, t.short, [t.category, t.how].join(' ')));
    (typeof THERAPIES !== 'undefined' ? THERAPIES : []).forEach(t =>
      add('therapy', 'Therapie', t.emoji || t.icon || '🧖', t.id, t.name || t.title, t.short, t.category));
    (typeof GOALS !== 'undefined' ? GOALS : []).forEach(g =>
      add('goal', 'Ziel', g.icon || g.emoji || '🎯', g.id, g.name || g.title, g.short || g.description, ''));
    (typeof PRODUCTS !== 'undefined' ? PRODUCTS : []).forEach(p =>
      add('product', 'Gadget', p.emoji || '⌚', p.id, p.name, p.short || p.desc, ''));
    return idx;
  }

  function searchAll(index, query) {
    const q = normalizeStr(query).trim();
    if (q.length < 2) return [];
    const tokens = q.split(/\s+/);
    const scored = [];
    for (const it of index) {
      if (!tokens.every(t => it.hay.includes(t))) continue;
      const nn = normalizeStr(it.name);
      let score = 0;
      if (nn === q) score = 100;
      else if (nn.startsWith(q)) score = 80;
      else if (nn.includes(q)) score = 60;
      else score = 30;
      scored.push({ it, score });
    }
    scored.sort((a, b) => b.score - a.score || a.it.name.localeCompare(b.it.name));
    return scored.slice(0, 24).map(s => s.it);
  }

  function highlightExpCard(domId) {
    const el = document.getElementById(domId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    el.classList.add('search-hit');
    setTimeout(() => el.classList.remove('search-hit'), 2600);
  }

  function gotoSearchResult(type, id) {
    if (type === 'supplement') {
      location.hash = 'supplement';
      setTimeout(() => {
        const s = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : []).find(x => x.id === id);
        const inp = document.getElementById('supplement-search');
        if (s && inp) { inp.value = s.name; inp.dispatchEvent(new Event('input', { bubbles: true })); }
      }, 70);
    } else if (type === 'experimental' || type === 'khavinson') {
      // Kategorie auf "Alle" zurücksetzen, damit die Zielkarte sichtbar ist
      currentExpCat = 'all';
      const chips = document.getElementById('exp-chips');
      if (chips) $$('.chip', chips).forEach(x => x.classList.toggle('chip--active', x.dataset.ecat === 'all'));
      location.hash = 'experimental';
      setTimeout(() => highlightExpCard((type === 'khavinson' ? 'khcard-' : 'expcard-') + id), 160);
    } else if (type === 'therapy') {
      currentThCat = 'all';
      const chips = document.getElementById('th-chips');
      if (chips) $$('.chip', chips).forEach(x => x.classList.toggle('chip--active', x.dataset.tcat === 'all'));
      location.hash = 'behandlungen';
      setTimeout(() => highlightExpCard('thcard-' + id), 160);
    } else {
      // Tipp/Ziel/Gadget: auf die Startseite (dort verankert)
      location.hash = 'home';
    }
  }

  function initGlobalSearch() {
    const input = $('#global-search-input');
    const panel = $('#global-search-results');
    const clearBtn = $('#global-search-clear');
    if (!input || !panel) return;
    let index = null;
    let items = [];
    let activeIdx = -1;

    const ensureIndex = () => { if (!index) index = buildSearchIndex(); };
    const toggleClear = () => { if (clearBtn) clearBtn.classList.toggle('hidden', !input.value); };
    const close = () => { panel.classList.add('hidden'); panel.innerHTML = ''; activeIdx = -1; };
    if (clearBtn) clearBtn.addEventListener('click', () => { input.value = ''; toggleClear(); close(); input.focus(); });

    const render = (results, q) => {
      if (!results.length) {
        panel.innerHTML = '<div class="gsr-empty">Keine Treffer für „' + escapeHtml(q) + '"</div>';
        panel.classList.remove('hidden');
        return;
      }
      panel.innerHTML = results.map((r, i) =>
        '<button type="button" class="gsr-item" role="option" data-type="' + r.type + '" data-id="' + escapeHtml(r.id) + '" data-i="' + i + '">' +
          '<span class="gsr-emoji">' + escapeHtml(r.emoji) + '</span>' +
          '<span class="gsr-main"><span class="gsr-name">' + escapeHtml(r.name) + '</span>' +
          (r.short ? '<span class="gsr-short">' + escapeHtml(r.short) + '</span>' : '') + '</span>' +
          '<span class="gsr-badge">' + escapeHtml(r.label) + '</span>' +
        '</button>'
      ).join('');
      panel.classList.remove('hidden');
    };

    input.addEventListener('input', () => {
      const q = input.value;
      toggleClear();
      if (normalizeStr(q).trim().length < 2) { close(); return; }
      ensureIndex();
      items = searchAll(index, q);
      activeIdx = -1;
      render(items, q.trim());
    });
    input.addEventListener('focus', () => { if (items.length && normalizeStr(input.value).trim().length >= 2) panel.classList.remove('hidden'); });

    input.addEventListener('keydown', (e) => {
      const btns = $$('.gsr-item', panel);
      if (e.key === 'ArrowDown' && btns.length) { e.preventDefault(); activeIdx = Math.min(activeIdx + 1, btns.length - 1); btns.forEach((b, i) => b.classList.toggle('gsr-active', i === activeIdx)); btns[activeIdx].scrollIntoView({ block: 'nearest' }); }
      else if (e.key === 'ArrowUp' && btns.length) { e.preventDefault(); activeIdx = Math.max(activeIdx - 1, 0); btns.forEach((b, i) => b.classList.toggle('gsr-active', i === activeIdx)); btns[activeIdx].scrollIntoView({ block: 'nearest' }); }
      else if (e.key === 'Enter') { const pick = activeIdx >= 0 ? items[activeIdx] : items[0]; if (pick) { gotoSearchResult(pick.type, pick.id); input.blur(); close(); } }
      else if (e.key === 'Escape') { input.value = ''; close(); input.blur(); }
    });

    panel.addEventListener('click', (e) => {
      const btn = e.target.closest('.gsr-item');
      if (!btn) return;
      gotoSearchResult(btn.dataset.type, btn.dataset.id);
      input.value = '';
      input.blur();
      close();
    });

    // Klick außerhalb schließt das Ergebnis-Panel
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#global-search')) close();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initNavToggle();
    initGlobalSearch();
    initTagescheckView();
    initSupplementView();
    initSymptomView();
    initErfahrungenView();
    initHomeProducts();
    initExperimentalView();
    initBehandlungenView();
    initBlutwerteView();
    initRouter();
    onEnterHome();
  });

})();
