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
      '.mydata-toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(20px);background:#1c2b26;color:#fff;border:1px solid rgba(255,255,255,.15);padding:12px 18px;border-radius:12px;opacity:0;transition:.3s;z-index:9999;max-width:90%;text-align:center}' +
      '.mydata-toast.show{opacity:1;transform:translateX(-50%) translateY(0)}' +
      '.mydata-toast.ok{border-color:rgba(47,139,106,.6)}' +
      '.mydata-toast.error{border-color:rgba(220,90,90,.6)}';
    document.head.appendChild(s);
  }

  var root = null;          // #mydata-app
  var currentUser = null;
  var unsubVitals = null;

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
  }

  // ---- Wearable / WHOOP ----
  async function loadWearable(box) {
    box.innerHTML = '<div class="mydata-card"><p class="muted">Lade …</p></div>';
    var connected = false;
    try {
      // Ob verbunden, erkennen wir daran, ob es schon Vitals gibt ODER wir fragen den Sync-Status.
      // Tokens selbst darf der Client nicht lesen – also nutzen wir die Vitals-Existenz + Sync.
      var snap = await db.collection('users').doc(currentUser.uid).collection('vitals')
        .orderBy(firebase.firestore.FieldPath.documentId(), 'desc').limit(1).get();
      connected = !snap.empty;
    } catch (e) { console.warn(e); }

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

    // Live-Listener auf das neueste Vitals-Dokument
    if (unsubVitals) { unsubVitals(); unsubVitals = null; }
    unsubVitals = db.collection('users').doc(currentUser.uid).collection('vitals')
      .orderBy(firebase.firestore.FieldPath.documentId(), 'desc').limit(1)
      .onSnapshot(function (snap) {
        var grid = $('#md-grid', box);
        if (snap.empty) { grid.innerHTML = '<p class="muted">Noch keine Werte – tippe auf „Aktualisieren".</p>'; return; }
        var v = snap.docs[0].data();
        grid.innerHTML =
          tile('Recovery', fmt(v.recoveryScore, '%'), 'Erholung heute') +
          tile('HRV', fmt(v.hrv != null ? Math.round(v.hrv) : null, 'ms'), 'Herzratenvariabilität') +
          tile('Ruhepuls', fmt(v.restingHr, 'bpm'), 'in Ruhe') +
          tile('Schlaf', fmt(v.sleepPerformance, '%'), 'Schlaf-Leistung') +
          tile('Schlafdauer', v.totalSleepMin != null ? (Math.floor(v.totalSleepMin/60)+' h '+(v.totalSleepMin%60)+' min') : '–', 'gesamt') +
          tile('Strain', fmt(v.strain != null ? Math.round(v.strain*10)/10 : null), 'Tagesbelastung');
        var upd = $('#md-updated', box);
        if (upd) upd.textContent = 'Stand: ' + (v.date || '') + ' · Quelle: WHOOP';
      }, function (err) { console.error(err); });
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

  async function renderSupplementLog(box) {
    var day = todayKey();
    var opts = supplementNames().map(function (n) { return '<option value="' + n.replace(/"/g, '&quot;') + '">'; }).join('');
    box.innerHTML =
      '<div class="mydata-card">' +
        '<h3>Supplement-Log <span class="muted small">(' + day + ')</span></h3>' +
        '<p class="muted small">Trag ein, was du heute genommen hast – das fließt später in die Empfehlungen ein.</p>' +
        '<div class="mydata-log-input">' +
          '<input type="text" id="md-log-in" list="md-log-list" placeholder="z. B. Magnesium, Kreatin …" />' +
          '<datalist id="md-log-list">' + opts + '</datalist>' +
          '<button class="btn btn-primary btn-sm" id="md-log-add">Hinzufügen</button>' +
        '</div>' +
        '<div class="mydata-log-items" id="md-log-items"></div>' +
      '</div>';

    var ref = db.collection('users').doc(currentUser.uid).collection('supplementLog').doc(day);

    function paint(items) {
      var wrap = $('#md-log-items', box);
      if (!items || !items.length) { wrap.innerHTML = '<span class="muted small">Heute noch nichts eingetragen.</span>'; return; }
      wrap.innerHTML = items.map(function (name, i) {
        return '<span class="mydata-chip">' + name + '<button data-i="' + i + '" aria-label="Entfernen">&times;</button></span>';
      }).join('');
      wrap.querySelectorAll('button[data-i]').forEach(function (b) {
        b.addEventListener('click', async function () {
          var arr = items.slice(); arr.splice(parseInt(b.dataset.i, 10), 1);
          await ref.set({ items: arr, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
        });
      });
    }

    ref.onSnapshot(function (snap) { paint(snap.exists ? (snap.data().items || []) : []); });

    async function add() {
      var input = $('#md-log-in', box); var val = (input.value || '').trim();
      if (!val) return;
      var snap = await ref.get();
      var items = snap.exists ? (snap.data().items || []) : [];
      if (items.indexOf(val) === -1) items.push(val);
      await ref.set({ items: items, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
      input.value = '';
    }
    $('#md-log-add', box).addEventListener('click', add);
    $('#md-log-in', box).addEventListener('keydown', function (e) { if (e.key === 'Enter') { e.preventDefault(); add(); } });
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
