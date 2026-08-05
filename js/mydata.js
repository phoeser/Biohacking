/* ============================================================
   MyData – persönlicher Bereich (Login + WHOOP + Dashboard)
   Nutzt Firebase (compat SDK). Login nur in dieser Sektion.
   ============================================================ */
(function () {
  'use strict';

  // --- Firebase Web-Config (öffentlich, kein Secret) ---
  var firebaseConfig = {
    apiKey: 'AIzaSyB5iyW9Dc2nkAP23ehgwtIOq24fxTky0KA',
    authDomain: 'biohacking-kompakt.firebaseapp.com',
    projectId: 'biohacking-kompakt',
    storageBucket: 'biohacking-kompakt.firebasestorage.app',
    messagingSenderId: '638881356793',
    appId: '1:638881356793:web:700c0d83793436249efb28'
  };

  var FN = 'https://europe-west1-biohacking-kompakt.cloudfunctions.net';

  if (typeof firebase === 'undefined') {
    console.warn('[MyData] Firebase SDK nicht geladen');
    return;
  }
  firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var db = firebase.firestore();

  injectStyles();
  function injectStyles() {
    if (document.getElementById('mydata-styles')) return;
    var s = document.createElement('style');
    s.id = 'mydata-styles';
    s.textContent =
      '.mydata-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:16px;padding:20px;margin:16px 0}' +
      '.mydata-card h3{margin:0 0 6px}' +
      '.mydata-userbar{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:6px 0;font-size:.95rem}' +
      '.mydata-dash-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin:18px 0 10px}' +
      '.mydata-dash-actions{display:flex;gap:8px;flex-wrap:wrap}' +
      '.mydata-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px}' +
      '.mydata-tile{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:14px 16px;display:flex;flex-direction:column;gap:2px}' +
      '.mydata-tile-label{font-size:.8rem;opacity:.7}' +
      '.mydata-tile-value{font-size:1.6rem;font-weight:700;font-family:"Space Grotesk",sans-serif}' +
      '.mydata-tile-sub{font-size:.72rem;opacity:.55}' +
      '.mydata-log-input{display:flex;gap:8px;margin:10px 0;flex-wrap:wrap}' +
      '.mydata-log-input input{flex:1;min-width:160px;padding:10px 12px;border-radius:10px;border:1px solid rgba(255,255,255,.15);background:rgba(0,0,0,.22);color:inherit}' +
      '.mydata-log-items{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}' +
      '.mydata-chip{display:inline-flex;align-items:center;gap:6px;background:rgba(47,139,106,.18);border:1px solid rgba(47,139,106,.4);border-radius:999px;padding:5px 10px;font-size:.85rem}' +
      '.mydata-chip button{background:none;border:none;color:inherit;cursor:pointer;font-size:1rem;line-height:1;opacity:.7}' +
      '.btn-sm{padding:7px 12px;font-size:.85rem}' +
      '.mydata-summary{background:rgba(47,139,106,.12);border:1px solid rgba(47,139,106,.3);border-radius:12px;padding:12px 14px;margin:0 0 12px;font-size:.95rem;line-height:1.5}' +
      '.mydata-stack{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}' +
      '.mydata-supp{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:7px 12px;font-size:.9rem;color:inherit;cursor:pointer;transition:.15s}' +
      '.mydata-supp.on{background:rgba(47,139,106,.22);border-color:rgba(47,139,106,.6)}' +
      '.mydata-supp-check{display:inline-flex;width:18px;height:18px;align-items:center;justify-content:center;border-radius:50%;border:1px solid rgba(255,255,255,.3);font-size:.72rem;flex:0 0 auto}' +
      '.mydata-supp.on .mydata-supp-check{background:#2f8b6a;border-color:#2f8b6a;color:#fff}' +
      '.mydata-supp-x{opacity:.45;font-size:1.05rem;line-height:1;margin-left:2px}' +
      '.mydata-supp-x:hover{opacity:1}' +
      '.mydata-rec-item{display:flex;gap:10px;align-items:flex-start;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09);border-radius:12px;padding:12px 14px;margin:8px 0}' +
      '.mydata-rec-item .md-rec-dot{flex:0 0 auto;width:8px;height:8px;border-radius:50%;background:#2f8b6a;margin-top:7px}' +
      '.mydata-rec-item strong{display:block;margin-bottom:2px}' +
      '.mydata-rec-names{margin-top:4px;display:flex;flex-wrap:wrap;gap:6px}' +
      '.mydata-rec-names a{font-size:.82rem;background:rgba(47,139,106,.15);border:1px solid rgba(47,139,106,.35);border-radius:999px;padding:3px 9px;text-decoration:none;color:inherit}' +
      '.mydata-rec-names .mydata-rec-plain{font-size:.82rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:3px 9px}' +
      '.mydata-daypills{display:inline-flex;gap:6px}' +
      '.mydata-pill{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.15);color:inherit;border-radius:999px;padding:5px 12px;font-size:.82rem;cursor:pointer}' +
      '.mydata-pill.on{background:rgba(47,139,106,.22);border-color:rgba(47,139,106,.6)}' +
      '.mydata-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:#1c2b26;color:#fff;border:1px solid rgba(255,255,255,.15);padding:12px 18px;border-radius:12px;opacity:0;transition:.3s;z-index:9999;max-width:90%;text-align:center}' +
      '.mydata-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}' +
      '.mydata-toast.ok{border-color:rgba(47,139,106,.6)}' +
      '.mydata-toast.error{border-color:rgba(220,90,90,.6)}';
    document.head.appendChild(s);
  }

  var root = null;          // #mydata-app
  var currentUser = null;
  var unsubVitals = null;
  var recBox = null;        // #md-rec Container
  var lastVitals = null;    // zuletzt geladene Werte (für Empfehlungen)
  var myStack = [];         // persönliche Supplement-Liste (für Empfehlungen)

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function el(html) { var d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }

  // ---- kleine Toast-Meldung ----
  function toast(msg, type) {
    var t = el('<div class="mydata-toast ' + (type || '') + '">' + msg + '</div>');
    document.body.appendChild(t);
    setTimeout(function () { t.classList.add('show'); }, 10);
    setTimeout(function () { t.classList.remove('show'); setTimeout(function () { t.remove(); }, 300); }, 4000);
  }

  // ---- Aufruf einer Cloud Function mit Auth-Token ----
  async function callFn(name, method) {
    var token = await currentUser.getIdToken();
    var r = await fetch(FN + '/' + name, {
      method: method || 'POST',
      headers: { Authorization: 'Bearer ' + token }
    });
    var data = null;
    try { data = await r.json(); } catch (e) {}
    if (!r.ok) throw new Error((data && data.error) || ('Fehler ' + r.status));
    return data;
  }

  // ================= Rendering =================
  function render() {
    if (!root) return;
    if (!currentUser) { renderLoggedOut(); return; }
    renderLoggedIn();
  }

  function renderLoggedOut() {
    root.innerHTML = '';
    var card = el(
      '<div class="mydata-card">' +
        '<h3>Anmelden</h3>' +
        '<p class="muted">Melde dich an, um dein WHOOP zu verbinden und deine Werte zu sehen. Deine Daten liegen sicher in Europa und gehören nur dir.</p>' +
        '<button class="btn btn-primary" id="md-login">Mit Google anmelden</button>' +
        '<p class="small muted" style="margin-top:12px">Nur dieser Bereich braucht einen Login – der Rest der App bleibt frei zugänglich. Information, keine medizinische Beratung.</p>' +
      '</div>'
    );
    root.appendChild(card);
    $('#md-login').addEventListener('click', function () {
      var provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).catch(function (e) {
        console.error(e); toast('Anmeldung fehlgeschlagen: ' + e.message, 'error');
      });
    });
  }

  function renderLoggedIn() {
    root.innerHTML = '';

    // Kopf: angemeldet als … / abmelden
    var head = el(
      '<div class="mydata-userbar">' +
        '<span>Angemeldet als <strong>' + (currentUser.email || currentUser.displayName || 'Nutzer') + '</strong></span>' +
        '<button class="btn btn-ghost btn-sm" id="md-logout">Abmelden</button>' +
      '</div>'
    );
    root.appendChild(head);
    $('#md-logout').addEventListener('click', function () { auth.signOut(); });

    // Wearable-Bereich (async: prüfen ob verbunden)
    var wearBox = el('<div id="md-wear"></div>');
    root.appendChild(wearBox);
    loadWearable(wearBox);

    // Supplement-Log
    var logBox = el('<div id="md-log"></div>');
    root.appendChild(logBox);
    renderSupplementLog(logBox);

    // Empfehlungen (ganz unten)
    recBox = el('<div id="md-rec"></div>');
    root.appendChild(recBox);
    renderRecommendations(recBox);

    // Stack für die Empfehlungen mitführen
    db.collection('users').doc(currentUser.uid).onSnapshot(function (doc) {
      myStack = (doc.exists && doc.data().stack) || [];
      refreshRecommendations(lastVitals);
    });
  }

  // ---- Wearable / WHOOP ----
  async function loadWearable(box) {
    box.innerHTML = '<div class="mydata-card"><p class="muted">Lade …</p></div>';
    var connected = false;
    try {
      // Verbunden = es gibt schon mindestens ein Vitals-Dokument. Einfache Abfrage ohne Sortierung.
      var snap = await db.collection('users').doc(currentUser.uid).collection('vitals').limit(1).get();
      connected = !snap.empty;
    } catch (e) { console.warn('vitals check', e); }
    // Direkt nach dem Verbinden (Rückkehr von WHOOP) ggf. schon als verbunden behandeln
    if (!connected && (location.hash || '').indexOf('whoop=connected') !== -1) connected = true;

    if (!connected) {
      box.innerHTML = '';
      var card = el(
        '<div class="mydata-card">' +
          '<h3>WHOOP verbinden</h3>' +
          '<p class="muted">Verbinde dein WHOOP-Konto, damit deine täglichen Werte (Recovery, HRV, Ruhepuls, Schlaf) hier erscheinen.</p>' +
          '<button class="btn btn-primary" id="md-connect">Mit WHOOP verbinden</button>' +
        '</div>'
      );
      box.appendChild(card);
      $('#md-connect').addEventListener('click', connectWhoop);
      return;
    }

    // verbunden -> Dashboard live anzeigen
    renderDashboard(box);
  }

  async function connectWhoop() {
    try {
      var data = await callFn('whoopConnect', 'POST');
      if (data && data.url) { window.location.href = data.url; }
      else throw new Error('Keine Login-URL erhalten');
    } catch (e) { console.error(e); toast('WHOOP-Verbindung fehlgeschlagen: ' + e.message, 'error'); }
  }

  function fmt(v, unit) {
    if (v === null || v === undefined || v === '') return '–';
    return v + (unit ? ' ' + unit : '');
  }

  function renderDashboard(box) {
    box.innerHTML =
      '<div class="mydata-dash-head">' +
        '<h3>Deine Werte</h3>' +
        '<div class="mydata-dash-actions">' +
          '<button class="btn btn-ghost btn-sm" id="md-sync">🔄 Aktualisieren</button>' +
          '<button class="btn btn-ghost btn-sm" id="md-disconnect">Verbindung trennen</button>' +
        '</div>' +
      '</div>' +
      '<div class="mydata-summary" id="md-summary" style="display:none"></div>' +
      '<div class="mydata-grid" id="md-grid"><p class="muted">Lade Werte …</p></div>' +
      '<p class="small muted" id="md-updated"></p>';

    $('#md-sync', box).addEventListener('click', async function () {
      var btn = $('#md-sync', box); btn.disabled = true; btn.textContent = '… lädt';
      try { await callFn('whoopSync', 'POST'); toast('Werte aktualisiert ✓', 'ok'); }
      catch (e) { toast('Aktualisieren fehlgeschlagen: ' + e.message, 'error'); }
      btn.disabled = false; btn.textContent = '🔄 Aktualisieren';
    });
    $('#md-disconnect', box).addEventListener('click', async function () {
      if (!confirm('WHOOP-Verbindung wirklich trennen? Deine gespeicherten Tageswerte bleiben erhalten.')) return;
      try { await callFn('whoopDisconnect', 'POST'); toast('Verbindung getrennt.', 'ok'); render(); }
      catch (e) { toast('Trennen fehlgeschlagen: ' + e.message, 'error'); }
    });

    // Live: heutiges Dokument beobachten; falls (noch) keins, das neueste vorhandene zeigen.
    if (unsubVitals) { unsubVitals(); unsubVitals = null; }
    var col = db.collection('users').doc(currentUser.uid).collection('vitals');
    unsubVitals = col.doc(todayKey()).onSnapshot(function (doc) {
      if (doc.exists) { paintVitals(box, doc.data()); }
      else {
        col.get().then(function (qs) {
          if (qs.empty) { var g = $('#md-grid', box); if (g) g.innerHTML = '<p class="muted">Noch keine Werte – tippe auf „Aktualisieren".</p>'; return; }
          var docs = qs.docs.slice().sort(function (a, b) { return a.id < b.id ? 1 : -1; });
          paintVitals(box, docs[0].data());
        }).catch(function (e) { console.warn(e); });
      }
    }, function (err) { console.error(err); });
  }

  function paintVitals(box, v) {
    lastVitals = v;
    var grid = $('#md-grid', box);
    if (!grid) return;
    grid.innerHTML =
      tile('Recovery', fmt(v.recoveryScore, '%'), 'Erholung heute') +
      tile('HRV', fmt(v.hrv != null ? Math.round(v.hrv) : null, 'ms'), 'Herzratenvariabilität') +
      tile('Ruhepuls', fmt(v.restingHr, 'bpm'), 'in Ruhe') +
      tile('Schlaf', fmt(v.sleepPerformance, '%'), 'Schlaf-Leistung') +
      tile('Schlafdauer', v.totalSleepMin != null ? (Math.floor(v.totalSleepMin / 60) + ' h ' + (v.totalSleepMin % 60) + ' min') : '–', 'gesamt') +
      tile('Strain', fmt(v.strain != null ? Math.round(v.strain * 10) / 10 : null), 'Tagesbelastung');
    var sum = $('#md-summary', box);
    if (sum) {
      var parts = [];
      if (v.recoveryScore != null) parts.push('Erholung <strong>' + v.recoveryScore + '%</strong>');
      if (v.sleepPerformance != null) {
        var sl = v.sleepPerformance + '%';
        if (v.totalSleepMin != null) sl += ' (' + Math.floor(v.totalSleepMin / 60) + ' h ' + (v.totalSleepMin % 60) + ' min)';
        parts.push('Schlaf <strong>' + sl + '</strong>');
      }
      if (v.hrv != null) parts.push('HRV <strong>' + Math.round(v.hrv) + ' ms</strong>');
      if (v.restingHr != null) parts.push('Ruhepuls <strong>' + v.restingHr + '</strong>');
      if (v.strain != null) parts.push('Strain <strong>' + (Math.round(v.strain * 10) / 10) + '</strong>');
      sum.innerHTML = '📌 Heute im Überblick: ' + parts.join(' · ');
      sum.style.display = '';
    }
    var upd = $('#md-updated', box);
    if (upd) upd.textContent = 'Stand: ' + (v.date || '') + ' · Quelle: WHOOP';
    // Empfehlungen aktualisieren, wenn Werte neu sind
    if (typeof refreshRecommendations === 'function') refreshRecommendations(v);
  }

  function tile(label, value, sub) {
    return '<div class="mydata-tile"><span class="mydata-tile-label">' + label + '</span>' +
           '<strong class="mydata-tile-value">' + value + '</strong>' +
           '<span class="mydata-tile-sub">' + (sub || '') + '</span></div>';
  }

  // ---- Supplement-Log ----
  function supplementNames() {
    var names = [];
    try { if (typeof SUPPLEMENTS !== 'undefined') SUPPLEMENTS.forEach(function (s) { if (s && s.name) names.push(s.name); }); } catch (e) {}
    try { if (typeof EXPERIMENTAL !== 'undefined') EXPERIMENTAL.forEach(function (s) { if (s && s.name) names.push(s.name); }); } catch (e) {}
    return names;
  }
  function todayKey() {
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
  }
  function yesterdayKey() {
    var d = new Date(); d.setDate(d.getDate() - 1);
    return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Berlin', year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  }

  var logUnsubUser = null, logUnsubDay = null;

  function renderSupplementLog(box) {
    var opts = supplementNames().map(function (n) { return '<option value="' + n.replace(/"/g, '&quot;') + '">'; }).join('');
    var userRef = db.collection('users').doc(currentUser.uid);
    var selDay = todayKey();
    var stack = [], taken = [], submitted = false;

    box.innerHTML =
      '<div class="mydata-card">' +
        '<div class="mydata-dash-head" style="margin-top:0">' +
          '<h3>Supplement-Log</h3>' +
          '<div class="mydata-daypills">' +
            '<button type="button" class="mydata-pill on" data-day="today">Heute</button>' +
            '<button type="button" class="mydata-pill" data-day="yesterday">Gestern</button>' +
          '</div>' +
        '</div>' +
        '<p class="muted small" id="md-log-day"></p>' +
        '<div class="mydata-stack" id="md-stack"></div>' +
        '<div class="mydata-log-input">' +
          '<input type="text" id="md-log-in" list="md-log-list" placeholder="Neues Supplement hinzufügen …" />' +
          '<datalist id="md-log-list">' + opts + '</datalist>' +
          '<button class="btn btn-ghost btn-sm" id="md-log-add">+ Hinzufügen</button>' +
        '</div>' +
        '<div style="margin-top:12px;display:flex;align-items:center;gap:10px;flex-wrap:wrap">' +
          '<button class="btn btn-primary btn-sm" id="md-log-submit">✓ Abschicken</button>' +
          '<span class="small muted" id="md-log-status"></span>' +
        '</div>' +
      '</div>';

    function dayRef() { return userRef.collection('supplementLog').doc(selDay); }

    function paintStack() {
      var wrap = $('#md-stack', box); if (!wrap) return;
      if (!stack.length) { wrap.innerHTML = '<span class="muted small">Noch keine Supplements angelegt – füge unten deine hinzu.</span>'; return; }
      wrap.innerHTML = stack.map(function (name) {
        var on = taken.indexOf(name) !== -1; var esc = name.replace(/"/g, '&quot;');
        return '<button type="button" class="mydata-supp' + (on ? ' on' : '') + '" data-name="' + esc + '">' +
                 '<span class="mydata-supp-check">' + (on ? '✓' : '') + '</span>' +
                 '<span class="mydata-supp-name">' + name + '</span>' +
                 '<span class="mydata-supp-x" data-remove="' + esc + '" title="Aus Liste entfernen">&times;</span>' +
               '</button>';
      }).join('');
      wrap.querySelectorAll('.mydata-supp').forEach(function (b) {
        b.addEventListener('click', function (e) {
          if (e.target.hasAttribute('data-remove')) return;
          var name = b.dataset.name; var arr = taken.slice(); var i = arr.indexOf(name);
          if (i === -1) arr.push(name); else arr.splice(i, 1);
          dayRef().set({ taken: arr, submitted: false, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
        });
      });
      wrap.querySelectorAll('[data-remove]').forEach(function (x) {
        x.addEventListener('click', function (e) { e.stopPropagation(); userRef.set({ stack: stack.filter(function (n) { return n !== x.getAttribute('data-remove'); }) }, { merge: true }); });
      });
    }

    function status() {
      var st = $('#md-log-status', box); if (st) st.textContent = submitted ? '✓ abgeschickt' : '';
      var dl = $('#md-log-day', box); if (dl) dl.innerHTML = 'Tippe an, was du <strong>' + (selDay === todayKey() ? 'heute' : 'gestern (' + selDay + ')') + '</strong> genommen hast, dann „Abschicken". Neue Supplements einmal anlegen – danach nur noch antippen.';
    }

    function bindDay() {
      if (logUnsubDay) { logUnsubDay(); logUnsubDay = null; }
      logUnsubDay = dayRef().onSnapshot(function (doc) {
        taken = (doc.exists && doc.data().taken) || [];
        submitted = !!(doc.exists && doc.data().submitted);
        paintStack(); status();
      });
    }

    if (logUnsubUser) { logUnsubUser(); logUnsubUser = null; }
    logUnsubUser = userRef.onSnapshot(function (doc) { stack = (doc.exists && doc.data().stack) || []; paintStack(); });
    bindDay(); status();

    box.querySelectorAll('.mydata-pill').forEach(function (p) {
      p.addEventListener('click', function () {
        box.querySelectorAll('.mydata-pill').forEach(function (q) { q.classList.toggle('on', q === p); });
        selDay = p.dataset.day === 'yesterday' ? yesterdayKey() : todayKey();
        bindDay(); status();
      });
    });

    async function add() {
      var input = $('#md-log-in', box); var val = (input.value || '').trim(); if (!val) return;
      if (stack.indexOf(val) === -1) await userRef.set({ stack: stack.concat([val]) }, { merge: true });
      var t = taken.slice(); if (t.indexOf(val) === -1) t.push(val);
      await dayRef().set({ taken: t, submitted: false, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      input.value = '';
    }
    $('#md-log-add', box).addEventListener('click', add);
    $('#md-log-in', box).addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); add(); } });

    $('#md-log-submit', box).addEventListener('click', async function () {
      await dayRef().set({ taken: taken, submitted: true, submittedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      toast('Supplement-Log für ' + (selDay === todayKey() ? 'heute' : selDay) + ' gespeichert ✓', 'ok');
    });
  }

  // ---- Empfehlungen (regelbasiert, aus Werten abgeleitet) ----
  function catRef(name) {
    var lower = name.toLowerCase();
    try { if (typeof SUPPLEMENTS !== 'undefined') for (var i = 0; i < SUPPLEMENTS.length; i++) { if (SUPPLEMENTS[i].name && SUPPLEMENTS[i].name.toLowerCase() === lower) return { name: SUPPLEMENTS[i].name, view: 'supplement' }; } } catch (e) {}
    try { if (typeof EXPERIMENTAL !== 'undefined') for (var j = 0; j < EXPERIMENTAL.length; j++) { if (EXPERIMENTAL[j].name && EXPERIMENTAL[j].name.toLowerCase() === lower) return { name: EXPERIMENTAL[j].name, view: 'experimental' }; } } catch (e) {}
    return null;
  }

  function renderRecommendations(box) {
    box.innerHTML =
      '<div class="mydata-card">' +
        '<div class="mydata-dash-head" style="margin-top:0">' +
          '<h3>Empfehlungen für dich</h3>' +
          '<button class="btn btn-ghost btn-sm" id="md-rec-refresh">🔄 Neu berechnen</button>' +
        '</div>' +
        '<p class="muted small">Persönlich aus deinen heutigen Werten (KI) – konkrete Einträge aus dem App-Katalog, ohne was du schon nimmst. Information, keine medizinische Beratung, keine Dosierangaben.</p>' +
        '<div id="md-rec-list"><p class="muted small">Sobald deine Werte geladen sind, erscheinen hier passende Vorschläge.</p></div>' +
      '</div>';
    var rb = document.getElementById('md-rec-refresh');
    if (rb) rb.addEventListener('click', function () { generateRecommendations(lastVitals, true); });
    generateRecommendations(lastVitals, false);
  }

  // von paintVitals aufgerufen (nutzt Tages-Cache)
  function refreshRecommendations(v) { generateRecommendations(v, false); }

  function renderRecList(recs) {
    var list = document.getElementById('md-rec-list'); if (!list) return;
    list.innerHTML = recs.map(function (r) {
      var chips = (r.items || []).map(function (name) {
        var hit = catRef(name);
        return hit ? '<a href="#' + hit.view + '">' + hit.name + '</a>' : '<span class="mydata-rec-plain">' + name + '</span>';
      }).join('');
      return '<div class="mydata-rec-item"><span class="md-rec-dot"></span><div>' +
               '<strong>' + (r.title || '') + '</strong>' +
               '<span class="muted small">' + (r.why || '') + '</span>' +
               (chips ? '<div class="mydata-rec-names">' + chips + '</div>' : '') +
             '</div></div>';
    }).join('') + '<p class="small muted" style="margin-top:10px">⚕️ Allgemeine Information, kein medizinischer Rat, keine Dosierempfehlung. Peptide sind experimentell und überwiegend nicht als Arzneimittel zugelassen – nur zur Information.</p>';
  }

  function ruleBasedRecs(v) {
    var recs = [];
    function add(title, why, cands) {
      var items = [];
      cands.forEach(function (c) { var hit = catRef(c); if (hit && myStack.indexOf(hit.name) === -1 && items.indexOf(hit.name) === -1) items.push(hit.name); });
      recs.push({ title: title, why: why, items: items });
    }
    var lowRec = v.recoveryScore != null && v.recoveryScore <= 50;
    var lowSleep = (v.sleepPerformance != null && v.sleepPerformance < 70) || (v.totalSleepMin != null && v.totalSleepMin < 420);
    var highStrain = v.strain != null && v.strain >= 14;
    if (lowRec) add('Erholung unterstützen', 'Deine Recovery ist heute eher niedrig.', ['Magnesium', 'Ashwagandha', 'Glycin', 'Omega-3']);
    if (lowSleep) add('Besser schlafen', 'Deine Schlaf-Leistung lag unter deinem Optimum.', ['Glycin', 'Magnesium', 'L-Theanin', 'Melatonin', 'Apigenin']);
    if (highStrain) add('Regeneration', 'Hohe Tagesbelastung – Regeneration fördern.', ['Omega-3', 'Kreatin', 'Curcumin', 'BPC-157', 'TB-500']);
    if (!recs.length) add('Solide Basis halten', 'Deine Werte sehen heute rund aus.', ['Vitamin D3', 'Omega-3', 'Magnesium', 'Kreatin']);
    return recs;
  }

  var recGenBusy = false;
  async function generateRecommendations(v, force) {
    var list = document.getElementById('md-rec-list'); if (!list) return;
    if (!v) return;
    var day = todayKey();
    var key = 'bhk_rec2_' + (currentUser ? currentUser.uid : 'x') + '_' + day;
    if (!force) {
      try { var cached = localStorage.getItem(key); if (cached) { renderRecList(JSON.parse(cached)); return; } } catch (e) {}
    }
    if (typeof window.BHKGemini !== 'function') { renderRecList(ruleBasedRecs(v)); return; }
    if (recGenBusy) return; recGenBusy = true;
    list.innerHTML = '<p class="muted small">🤖 Empfehlungen werden berechnet …</p>';
    try {
      var supps = [];
      try { if (typeof SUPPLEMENTS !== 'undefined') SUPPLEMENTS.forEach(function (s) { if (s && s.name) supps.push(s.name); }); } catch (e) {}
      var peps = [];
      try { if (typeof EXPERIMENTAL !== 'undefined') EXPERIMENTAL.forEach(function (s) { if (s && s.name) peps.push(s.name); }); } catch (e) {}
      var sys = 'Du bist ein vorsichtiger Biohacking-Assistent für die App „Biohacking Kompakt". Empfiehl NUR Einträge aus den bereitgestellten Listen. Keine Dosierungen, keine Heilversprechen, kein medizinischer Rat, Deutsch. ' +
        'Du DARFST passende Peptide aus der Peptid-Liste aufnehmen, aber nur SEHR VORSICHTIG und rein INFORMATIV: Peptide sind experimentell, überwiegend nicht als Arzneimittel zugelassen und werden off-label verwendet. Kennzeichne solche Vorschläge im Begründungssatz klar als „experimentell, nur zur Information" und dränge nie dazu. Höchstens EIN Peptid-Block, nur wenn es wirklich zu den Werten passt; Supplements bevorzugen. ' +
        'Antworte AUSSCHLIESSLICH mit gültigem JSON ohne weiteren Text: [{"title":"kurzer Titel","why":"ein kurzer Satz (bei Peptiden mit Vorsicht-Hinweis)","items":["Name","Name"]}] – 2 bis 4 Objekte, items nur exakte Namen aus den Listen, die der Nutzer noch NICHT nimmt.';
      var prompt = 'Aktuelle WHOOP-Tageswerte: ' +
        'Recovery ' + (v.recoveryScore != null ? v.recoveryScore + '%' : 'k.A.') + ', ' +
        'HRV ' + (v.hrv != null ? Math.round(v.hrv) + 'ms' : 'k.A.') + ', ' +
        'Ruhepuls ' + (v.restingHr != null ? v.restingHr : 'k.A.') + ', ' +
        'Schlaf-Leistung ' + (v.sleepPerformance != null ? v.sleepPerformance + '%' : 'k.A.') + ', ' +
        'Schlafdauer ' + (v.totalSleepMin != null ? v.totalSleepMin + ' min' : 'k.A.') + ', ' +
        'Strain ' + (v.strain != null ? Math.round(v.strain * 10) / 10 : 'k.A.') + '. ' +
        'Nimmt bereits (bitte weglassen): ' + (myStack.length ? myStack.join(', ') : 'nichts') + '. ' +
        'Supplements (bevorzugt wählen): ' + supps.join(', ') + '. ' +
        'Peptide (nur vorsichtig/informativ, experimentell): ' + peps.join(', ') + '.';
      var res = await window.BHKGemini(prompt, { systemInstruction: sys, temperature: 0.4, maxOutputTokens: 900 });
      var txt = ((res && res.text) || '').trim().replace(/^```json/i, '').replace(/^```/, '').replace(/```$/, '').trim();
      var recs = JSON.parse(txt);
      if (!Array.isArray(recs) || !recs.length) throw new Error('leer');
      renderRecList(recs);
      try { localStorage.setItem(key, JSON.stringify(recs)); } catch (e) {}
    } catch (e) {
      console.warn('KI-Empfehlung fehlgeschlagen, nutze Regeln:', e);
      renderRecList(ruleBasedRecs(v));
    }
    recGenBusy = false;
  }

  // ================= Init =================
  function ensureRoot() {
    root = document.getElementById('mydata-app');
    return !!root;
  }

  // Rückkehr von WHOOP auswerten (#mydata?whoop=connected / &whoop=error)
  function handleReturn() {
    var hash = location.hash || '';
    if (hash.indexOf('whoop=connected') !== -1) { toast('WHOOP verbunden ✓', 'ok'); cleanHash(); }
    else if (hash.indexOf('whoop=error') !== -1) { toast('WHOOP-Verbindung nicht abgeschlossen.', 'error'); cleanHash(); }
  }
  function cleanHash() {
    try { history.replaceState(null, '', location.pathname + location.search + '#mydata'); } catch (e) {}
  }

  auth.onAuthStateChanged(function (user) {
    currentUser = user;
    if (ensureRoot()) render();
  });

  document.addEventListener('DOMContentLoaded', function () {
    if (ensureRoot()) render();
    handleReturn();
    // Falls per Hash direkt in MyData gelandet und SDK schon bereit
    window.addEventListener('hashchange', function () {
      if ((location.hash || '').indexOf('mydata') !== -1 && ensureRoot()) render();
    });
  });
})();
