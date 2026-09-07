/* Laborprüfer — eigenständiges Modul.
 *
 * Es baut seinen eigenen Abschnitt in #laborcheck auf, mit eigenen ids
 * (labor2-*). Der ältere Prüfer in app.js findet dadurch seine Elemente
 * nicht mehr und läuft ins Leere — kein Streit um dieselben Knoten.
 *
 * Drei Schritte: Labor wählen und die zwei Werte vom Zertifikat abtippen,
 * beim Labor den Bericht öffnen, dann festhalten, ob es passt. Schritt 3
 * erscheint erst nach Schritt 2 — vorher wäre er eine Frage ohne Grundlage.
 *
 * Abgefragt wird bei keinem Labor etwas. Beide sperren maschinelle Zugriffe
 * ausdrücklich aus. Das Modul baut nur die offizielle Prüfadresse.
 *
 * Beide Labore nehmen die Werte inzwischen über die Adresse entgegen — der
 * Bericht öffnet sich direkt. Bei Janoshik gehen Auftragsnummer und Schlüssel
 * in die Adresse, bei Analiza Białek reicht der Schlüssel (am 07.09.2026 an
 * drei Berichten nachgesehen). Der Kopierkasten für die Formulareingabe wird
 * dadurch für kein Labor mehr gebraucht; die Verdrahtung bleibt stehen, weil
 * sie an `direkt` haengt und ein Labor ohne Direktlink jederzeit dazukommen
 * kann.
 */
(function () {
  'use strict';
  if (typeof LABORE === 'undefined' || typeof LABORTESTS === 'undefined') return;

  var SICHTBAR = 20;
  var aktiv = (typeof LABOR_STANDARD !== 'undefined') ? LABOR_STANDARD : 'janoshik';
  var gemeldet = [];
  var offen = null, laeuft = false;

  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function def(k) { return LABORE[k] || LABORE[aktiv] || null; }

  var URTEIL = {
    ok:    { text: 'Alles passt', klasse: 'is-ok' },
    teils: { text: 'Teilweise',   klasse: 'is-teils' },
    nein:  { text: 'Passt nicht', klasse: 'is-nein' }
  };

  // ------------------------------------------------------------ Einlesen
  function ausAdresse(u) {
    for (var k in LABORE) {
      if (LABORE[k].gastgeber && LABORE[k].gastgeber.test(u.hostname)) return k;
    }
    return null;
  }

  function lesen(aRoh, kRoh) {
    var a = String(aRoh || '').trim(), s = String(kRoh || '').trim(), labor = aktiv;
    if (/^https?:\/\//i.test(a)) {
      var u;
      try { u = new URL(a); } catch (e) { return null; }
      var erkannt = ausAdresse(u);
      if (!erkannt) return null;
      labor = erkannt;
      var t = u.searchParams.get('task') || u.searchParams.get('order') || '';
      var k = u.searchParams.get('key') || u.searchParams.get('password') || '';
      if (t && k) { a = t; s = k; }
      else {
        // Die Berichtsadresse trägt beides im Pfad, dazwischen aber den
        // Substanznamen: /tests/96518-bpc_157_5mg_Q6HV1KENIDQM.
        var m = u.pathname.match(/\/tests\/(\d+)-(.+)$/);
        if (!m) return null;
        var st = m[2].split('_');
        a = m[1]; s = st[st.length - 1];
      }
    }
    var d = def(labor);
    if (!d) return null;
    a = a.replace(/^#/, '').replace(/\s+/g, '');
    s = s.replace(/\s+/g, '').toUpperCase();
    if (!d.auftragMuster.test(a)) return null;
    if (!d.keyMuster.test(s)) return null;
    return { auftrag: a, schluessel: s, labor: labor };
  }

  function link(w) { var d = def(w.labor); return d ? d.link(w) : '#'; }

  // ------------------------------------------------------------- Aufbau
  function markup() {
    return ''
    + '<div class="labor-head">'
    +   '<span class="eyebrow">Laborbericht prüfen</span>'
    +   '<h3>🔬 Ist da drin, was draufsteht?</h3>'
    +   '<p>Anbieter wie europa-peptide.de oder biolabshop.de legen ihren Chargen '
    +   'ein Analysezertifikat bei. Prüfe es nicht beim Shop, sondern beim Labor '
    +   'selbst. Janoshik und Analiza Białek sind hinterlegt.</p>'
    + '</div>'

    + '<div class="labor-schritt"><div class="labor-nr">1</div><div class="labor-inhalt">'
    +   '<h4>Labor wählen und die zwei Werte abschreiben</h4>'
    +   '<p class="labor-erklaer">Auf dem Zertifikat deines Anbieters — meist ein PDF '
    +   'oder ein Bild auf der Produktseite — steht ganz oben, welches Labor geprüft '
    +   'hat. Wähle es hier aus, dann passen die Feldnamen zu dem, was vor dir liegt. '
    +   'Hat dein Anbieter statt der Werte einen fertigen Prüflink geschickt, füge ihn '
    +   'einfach ins erste Feld ein — das Labor wird dann selbst erkannt.</p>'
    +   '<div class="labor-wahl" id="labor2-wahl" role="group" aria-label="Labor wählen"></div>'
    +   '<div class="labor-box card">'
    +     '<p class="labor-wo" id="labor2-wo"></p>'
    +     '<div class="labor-felder">'
    +       '<div class="labor-feld"><label for="labor2-auftrag" id="labor2-auftrag-label"></label>'
    +         '<input type="text" id="labor2-auftrag" class="labor-input" autocomplete="off" spellcheck="false"></div>'
    +       '<div class="labor-feld"><label for="labor2-key" id="labor2-key-label"></label>'
    +         '<input type="text" id="labor2-key" class="labor-input" autocomplete="off" spellcheck="false"></div>'
    +       '<button type="button" id="labor2-pruefen" class="labor-btn">Zertifikat öffnen</button>'
    +     '</div>'
    +     '<p class="labor-status" id="labor2-status">Die Laborseite öffnet sich in einem '
    +     'neuen Tab. Wir fragen dort nichts ab und speichern nichts.</p>'
    +   '</div>'
    + '</div></div>'

    + '<div class="labor-schritt"><div class="labor-nr">2</div><div class="labor-inhalt">'
    +   '<h4>Beim Labor den Bericht öffnen</h4>'
    +   '<p class="labor-erklaer">Die Laborseite zeigt zuerst oft nur, dass der Test in '
    +   'der Datenbank ist — bei <b>Janoshik</b> öffnet erst ein Klick auf '
    +   '<b>Open report</b> das echte Zertifikat. Bei <b>Analiza Białek</b> kommt '
    +   'das PDF sofort. Vergleiche im Bericht vier Dinge mit dem, was dein Anbieter '
    +   'zeigt: wer den Test beauftragt hat (<b>Client</b>), welche Probe '
    +   '(<b>Sample</b>), welche Charge (<b>Batch</b>) — und die Ergebniszeilen, denn '
    +   '<b>Menge und Reinheit stehen getrennt</b>. Steht in einer der beiden Zeilen '
    +   'nichts, ist sie nicht geprüft worden — das ist kein bestandener Test.</p>'
    +   '<div class="labor-kopieren" id="labor2-kopieren" hidden></div>'
    + '</div></div>'

    + '<div class="labor-schritt" id="labor2-schritt3" hidden><div class="labor-nr">3</div><div class="labor-inhalt">'
    +   '<h4>Ergebnis festhalten — fertig</h4>'
    +   '<p class="labor-erklaer">Passt das Zertifikat zu dem, was dein Anbieter '
    +   'behauptet? Ein Klick genügt; die Angaben darüber sind freiwillig und machen '
    +   'den Eintrag für andere brauchbarer.</p>'
    +   '<div class="labor-box card">'
    +     '<div class="labor-felder">'
    +       '<div class="labor-feld"><label for="labor2-substanz">Substanz <span>(freiwillig)</span></label>'
    +         '<input type="text" id="labor2-substanz" class="labor-input labor-input--text" placeholder="BPC-157" maxlength="80" autocomplete="off"></div>'
    +       '<div class="labor-feld"><label for="labor2-anbieter">Anbieter <span>(freiwillig)</span></label>'
    +         '<input type="text" id="labor2-anbieter" class="labor-input labor-input--text" placeholder="europa-peptide.de" maxlength="80" autocomplete="off"></div>'
    +     '</div>'
    +     '<div class="labor-feld labor-feld--breit"><label for="labor2-notiz">Was ist dir aufgefallen? '
    +       '<span>(nur für uns, wird nicht veröffentlicht)</span></label>'
    +       '<input type="text" id="labor2-notiz" class="labor-input labor-input--text" placeholder="z. B. Menge deutlich unter Etikett" maxlength="500" autocomplete="off"></div>'
    +     '<div class="labor-urteil" role="group" aria-label="Ergebnis wählen">'
    +       '<button type="button" class="labor-u2" data-urteil="ok">Alles passt</button>'
    +       '<button type="button" class="labor-u2" data-urteil="teils">Teilweise</button>'
    +       '<button type="button" class="labor-u2" data-urteil="nein">Passt nicht</button>'
    +     '</div>'
    +     '<p class="labor-danke" id="labor2-danke" hidden></p>'
    +   '</div>'
    + '</div></div>'

    + '<div class="labor-fallen" id="labor2-fallen"></div>'
    + '<div class="labor-liste-head"><div><span class="eyebrow">Selbst nachgesehen</span>'
    +   '<h4>Geprüfte Chargen</h4></div><span class="labor-zahl" id="labor2-zahl"></span></div>'
    // Eine kurze Liste sieht nach Panne aus, wenn niemand sagt, warum sie kurz
    // ist. Sie ist kurz, weil nur zaehlt, was jemand selbst geoeffnet hat.
    + '<p class="labor-erklaer">Wenige Einträge — und das mit Absicht. Hier steht nur, '
    + 'was wir selbst beim Labor aufgerufen haben, nicht was ein Shop zeigt. Dass es so '
    + 'wenige sind, liegt weniger an uns als daran, dass die meisten öffentlich '
    + 'geteilten Zertifikate keinen Prüfcode tragen (siehe oben). Hast du einen Bericht '
    + 'mit Auftragsnummer und Passwort, prüf ihn oben — deine Meldung landet in dieser '
    + 'Liste.</p>'
    + '<div id="labor2-liste" class="labor-liste"></div>'
    + '<p class="labor-fuss">Der Prüfer baut nur die offizielle Adresse des Labors und '
    + 'öffnet sie. Er ruft dort keine Daten ab — automatisierte Zugriffe sind bei beiden '
    + 'Laboren ausdrücklich untersagt, und das respektieren wir.</p>';
  }


  // ------------------------------------------------------------ Zeichnen
  function zeichneWahl() {
    var l = $('#labor2-wahl');
    if (!l) return;
    l.innerHTML = Object.keys(LABORE).map(function (k) {
      return '<button type="button" class="labor-w' + (k === aktiv ? ' is-aktiv' : '') + '"'
           + ' data-labor="' + esc(k) + '">' + esc(LABORE[k].name)
           + '<span>' + esc(LABORE[k].land) + '</span></button>';
    }).join('');
    $$('#labor2-wahl .labor-w').forEach(function (b) {
      b.addEventListener('click', function () {
        if (b.dataset.labor === aktiv) return;
        aktiv = b.dataset.labor;
        zeichneWahl(); felderSetzen();
      });
    });
  }

  function felderSetzen() {
    var d = def(aktiv);
    if (!d) return;
    var fA = $('#labor2-auftrag'), fK = $('#labor2-key');
    if (fA) { fA.placeholder = d.platzhalter[0]; fA.value = ''; }
    if (fK) { fK.placeholder = d.platzhalter[1]; fK.value = ''; }
    if ($('#labor2-auftrag-label')) $('#labor2-auftrag-label').textContent = d.beschriftung[0];
    if ($('#labor2-key-label')) $('#labor2-key-label').textContent = d.beschriftung[1];
    if ($('#labor2-wo')) $('#labor2-wo').innerHTML = d.wo;
    var i = $('#labor2-status');
    if (i) { i.className = 'labor-status'; i.textContent = ''; }
    if ($('#labor2-schritt3')) $('#labor2-schritt3').hidden = true;
    if ($('#labor2-kopieren')) $('#labor2-kopieren').hidden = true;
    offen = null;
  }

  function zeichneFallen() {
    var el = $('#labor2-fallen');
    if (!el || typeof LABOR_FALLEN === 'undefined') return;
    el.innerHTML = LABOR_FALLEN.map(function (f) {
      return '<div class="labor-falle"><strong>' + esc(f.titel) + '</strong><p>'
           + esc(f.text) + '</p></div>';
    }).join('');
  }

  function zeichneListe() {
    var el = $('#labor2-liste'), zEl = $('#labor2-zahl');
    if (!el) return;
    var t = LABORTESTS.slice().concat(gemeldet);
    var zText = t.length ? (t.length + (t.length === 1 ? ' Charge' : ' Chargen')
      + (gemeldet.length ? ' · ' + gemeldet.length + ' gemeldet' : '')) : '';
    if (zEl) zEl.textContent = zText;
    // Dieselbe Zahl in die zugeklappte Zusammenfassung, damit man von aussen
    // sieht, dass hinter dem Aufklapper etwas steht.
    var aEl = document.getElementById('labor-auf-zahl');
    if (aEl) aEl.textContent = t.length ? (t.length + ' geprüft') : '';
    if (!t.length) {
      el.classList.remove('is-scroll');
      el.innerHTML = '<div class="erf-empty">Noch kein Eintrag. Prüf ein Zertifikat und '
        + 'halte oben fest, ob es passt — dann steht es hier.</div>';
      return;
    }
    // Ab einundzwanzig Chargen wird die Liste zum Scrollfeld, sonst schiebt
    // sie die Substanzübersicht immer weiter nach unten.
    el.classList.toggle('is-scroll', t.length > SICHTBAR);
    el.innerHTML = t.sort(function (a, b) {
      return String(b.datum || '').localeCompare(String(a.datum || ''));
    }).map(function (e) {
      var d = def(e.labor);
      // Die Menge ist die Zahl, die übersehen wird — deshalb steht sie hier
      // ausgerechnet und nicht nur abgeschrieben.
      var menge = '';
      if (e.etikett && e.gemessen) {
        var an = Math.round(e.gemessen / e.etikett * 1000) / 10;
        menge = '<span class="labor-wert ' + (an < 95 ? 'is-knapp' : 'is-gut') + '">'
          + esc(String(e.gemessen).replace('.', ',')) + ' von '
          + esc(String(e.etikett).replace('.', ',')) + ' ' + esc(e.einheit || 'mg') + ' <b>('
          + esc(String(an).replace('.', ',')) + ' %)</b></span>';
      }
      var rein = (e.reinheit != null) ? '<span class="labor-wert is-gut">Reinheit '
        + esc(String(e.reinheit).replace('.', ',')) + ' %</span>' : '';
      var u = URTEIL[e.urteil];
      var urt = u ? '<span class="labor-urteil-chip ' + u.klasse + '">' + esc(u.text) + '</span>' : '';
      // Eine fehlende Charge ist ein Befund, kein Leerzeichen.
      var ch = e.gemeldet ? '' : (e.charge ? 'Charge ' + e.charge : 'ohne Chargennummer');
      var meta = [e.anbieter, ch, e.datum].filter(Boolean).map(esc).join(' · ');
      var href = link({ auftrag: String(e.auftrag || '').replace(/^#/, ''),
                        schluessel: e.schluessel, labor: e.labor });
      var lt = (d && d.direkt) ? 'selbst nachprüfen →' : 'beim Labor nachprüfen →';
      var fuss = e.gemeldet
        ? '<p class="labor-eintrag-fuss"><span class="labor-roh">Nutzermeldung — von uns '
          + 'noch nicht nachgesehen</span> · <a class="labor-eintrag-link" target="_blank" '
          + 'rel="noopener noreferrer" href="' + esc(href) + '">' + lt + '</a></p>'
        : '<p class="labor-eintrag-fuss">Von uns geöffnet am ' + esc(e.geprueft || '—')
          + ' · <a class="labor-eintrag-link" target="_blank" rel="noopener noreferrer" '
          + 'href="' + esc(href) + '">' + lt + '</a></p>';
      return '<div class="card labor-eintrag' + (e.gemeldet ? ' is-roh' : '') + '">'
        + '<div class="labor-eintrag-kopf"><h4>' + esc(e.substanz) + '</h4>'
        + '<span class="labor-chip">' + esc(d ? d.name : '') + ' ' + esc(e.auftrag || '') + '</span></div>'
        + (meta ? '<p class="labor-eintrag-meta">' + meta + '</p>' : '')
        + '<div class="labor-werte">' + urt + rein + menge + '</div>'
        + ((!e.gemeldet && e.anmerkung) ? '<p class="labor-eintrag-note">' + esc(e.anmerkung) + '</p>' : '')
        + fuss + '</div>';
    }).join('');
  }

  // ----------------------------------------------------------- Datenbank
  function firestore() {
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) return;
    var db;
    try { db = firebase.firestore(); } catch (e) { return; }
    db.collection('labortests').onSnapshot(function (snap) {
      gemeldet = snap.docs.map(function (doc) {
        var x = doc.data();
        return {
          id: 'fs-' + doc.id, gemeldet: true,
          substanz: x.substanz || 'ohne Angabe',
          anbieter: x.anbieter || '',
          // Ältere Meldungen tragen kein Laborfeld — die stammen alle von
          // Janoshik, damals war es das einzige.
          labor: LABORE[x.labor] ? x.labor : 'janoshik',
          auftrag: '#' + (x.auftrag || ''),
          schluessel: x.schluessel || '',
          urteil: x.urteil || null,
          datum: (x.erstelltAm && x.erstelltAm.toDate)
            ? x.erstelltAm.toDate().toISOString().slice(0, 10) : ''
        };
      });
      zeichneListe();
    }, function (e) { console.warn('[Labor] Laden fehlgeschlagen:', e.message); });
  }

  function melden(art, b) {
    var danke = $('#labor2-danke');
    if (!offen || laeuft) return;
    if (typeof firebase === 'undefined' || !firebase.apps || !firebase.apps.length) {
      if (danke) { danke.hidden = false; danke.className = 'labor-danke is-warn';
        danke.textContent = 'Die Datenbank ist gerade nicht erreichbar — bitte später noch einmal.'; }
      return;
    }
    laeuft = true;
    $$('.labor-u2').forEach(function (x) { x.classList.toggle('is-aktiv', x === b); x.disabled = true; });
    if (danke) { danke.hidden = false; danke.className = 'labor-danke'; danke.textContent = 'Wird gespeichert…'; }

    function wert(s) { var e = $(s); return e ? e.value.trim().slice(0, 500) : ''; }
    var satz = {
      auftrag: offen.auftrag, schluessel: offen.schluessel, urteil: art,
      substanz: wert('#labor2-substanz').slice(0, 80),
      anbieter: wert('#labor2-anbieter').slice(0, 80),
      notiz: wert('#labor2-notiz'),
      status: 'neu',
      erstelltAm: firebase.firestore.FieldValue.serverTimestamp()
    };
    function gut() {
      if (danke) {
        danke.className = 'labor-danke is-ok';
        danke.textContent = art === 'ok'
          ? 'Gespeichert. Die Charge steht jetzt unten in der Liste.'
          : 'Gespeichert — und das ist die wichtigere Sorte Meldung. Sie steht jetzt unten in der Liste.';
      }
      ['#labor2-substanz', '#labor2-anbieter', '#labor2-notiz'].forEach(function (s) {
        var e = $(s); if (e) e.value = '';
      });
    }
    function schlecht(e) {
      $$('.labor-u2').forEach(function (x) { x.disabled = false; x.classList.remove('is-aktiv'); });
      if (danke) { danke.className = 'labor-danke is-warn';
        danke.textContent = 'Konnte nicht gespeichert werden: ' + e.message; }
    }
    // Das Laborfeld ist neu. Solange die Datenbankregel es noch nicht kennt,
    // weist sie den Satz zurück — dann geht er ohne das Feld durch, und die
    // Meldung gilt als Janoshik, wie bisher.
    var db = firebase.firestore();
    var mitLabor = {};
    for (var k in satz) mitLabor[k] = satz[k];
    mitLabor.labor = offen.labor;
    db.collection('labortests').add(mitLabor).then(gut)
      .catch(function (e) {
        if (offen.labor === 'janoshik') { schlecht(e); return; }
        return db.collection('labortests').add(satz).then(gut).catch(schlecht);
      })
      .then(function () { laeuft = false; });
  }

  // -------------------------------------------------------------- Prüfen
  function pruefen() {
    var fA = $('#labor2-auftrag'), fK = $('#labor2-key'), info = $('#labor2-status');
    var s3 = $('#labor2-schritt3'), kop = $('#labor2-kopieren'), danke = $('#labor2-danke');
    var w = lesen(fA.value, fK.value);
    if (!w) {
      var dd = def(aktiv);
      info.className = 'labor-status is-warn';
      info.textContent = 'Das passt noch nicht zusammen. Bei ' + dd.name + ' besteht die '
        + dd.felder[0] + ' nur aus Ziffern, die ' + dd.felder[1] + ' aus Buchstaben und '
        + 'Ziffern. Einen fertigen Prüflink kannst du auch komplett ins erste Feld '
        + 'einfügen — das Labor wird dann automatisch erkannt.';
      if (s3) s3.hidden = true;
      if (kop) kop.hidden = true;
      return;
    }
    // Wurde ein Link eines anderen Labors eingefügt, springt der Umschalter mit.
    if (w.labor !== aktiv) { aktiv = w.labor; zeichneWahl(); }
    var d = def(w.labor);
    fA.value = '#' + w.auftrag;
    fK.value = w.schluessel;
    offen = w;
    info.className = 'labor-status is-ok';
    info.innerHTML = (d.direkt
      ? 'Auftrag <b>#' + esc(w.auftrag) + '</b> bei ' + esc(d.name) + ' geöffnet. '
      : 'Ergebnisseite von ' + esc(d.name) + ' geöffnet. ') + d.danach;
    window.open(link(w), '_blank', 'noopener');

    // Labore ohne geprüften Direktlink: beide Werte zum Kopieren hinlegen.
    if (kop) {
      if (d.direkt) { kop.hidden = true; kop.innerHTML = ''; }
      else {
        kop.hidden = false;
        kop.innerHTML = '<p class="labor-kopf-hinweis">Die Seite fragt beides einzeln ab '
          + '— hier zum Kopieren:</p>'
          + zeile('Numer zlecenia', w.auftrag) + zeile('Hasło analizy', w.schluessel);
        $$('#labor2-kopieren .labor-kopf').forEach(function (b) {
          b.addEventListener('click', function () { kopiere(b); });
        });
      }
    }
    if (s3) {
      s3.hidden = false;
      if (danke) { danke.hidden = true; danke.className = 'labor-danke'; }
      $$('.labor-u2').forEach(function (b) { b.classList.remove('is-aktiv'); b.disabled = false; });
      s3.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  }

  function zeile(name, wert) {
    return '<div class="labor-kopierzeile"><span class="labor-kopierfeld"><b>' + esc(name)
      + '</b><code>' + esc(wert) + '</code></span>'
      + '<button type="button" class="labor-kopf" data-wert="' + esc(wert) + '">kopieren</button></div>';
  }

  function kopiere(b) {
    var t = b.dataset.wert;
    function fertig() { b.textContent = 'kopiert'; setTimeout(function () { b.textContent = 'kopieren'; }, 1400); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(t).then(fertig, function () { b.textContent = 'ging nicht'; });
      return;
    }
    var h = document.createElement('textarea');
    h.value = t; document.body.appendChild(h); h.select();
    try { document.execCommand('copy'); fertig(); } catch (e) { b.textContent = 'ging nicht'; }
    document.body.removeChild(h);
  }

  // ------------------------------------------------------------ Aufbauen
  function aufbauen() {
    var wurzel = document.getElementById('laborcheck');
    if (!wurzel || wurzel.dataset.labor2 === 'ja') return;
    wurzel.dataset.labor2 = 'ja';
    wurzel.innerHTML = markup();
    zeichneWahl(); felderSetzen(); zeichneFallen(); zeichneListe(); firestore();
    $('#labor2-pruefen').addEventListener('click', pruefen);
    [$('#labor2-auftrag'), $('#labor2-key')].forEach(function (f) {
      f.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') { e.preventDefault(); pruefen(); }
      });
    });
    $$('.labor-u2').forEach(function (b) {
      b.addEventListener('click', function () { melden(b.dataset.urteil, b); });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aufbauen);
  } else { aufbauen(); }
})();
