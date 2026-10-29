/* Newsletter-Anmeldung (seit 28.10.2026).
 *
 * Alle Formulare mit class="nl-form" schicken die Adresse per fetch an den Worker
 * nl.biohackingkompakt.de/anmelden und zeigen die Antwort direkt im Kasten an.
 * Ohne JavaScript funktioniert das Formular trotzdem: dann leitet der Worker auf
 * /newsletter/danke.html weiter. Double-Opt-in: erst der Link in der Mail aktiviert.
 */
(function () {
  'use strict';
  function init(form) {
    if (form.dataset.nlBereit) return;
    form.dataset.nlBereit = '1';
    var meldung = form.querySelector('.nl-meldung');
    var knopf = form.querySelector('button');
    form.addEventListener('submit', function (ev) {
      if (!window.fetch || !window.FormData) return;
      ev.preventDefault();
      var daten = {};
      new FormData(form).forEach(function (v, k) { daten[k] = v; });
      if (knopf) knopf.disabled = true;
      if (meldung) { meldung.textContent = 'Einen Moment …'; meldung.className = 'nl-meldung'; }
      fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(daten)
      }).then(function (r) { return r.json(); }).then(function (a) {
        if (meldung) {
          meldung.textContent = a.text || (a.ok ? 'Danke. Bitte bestätige die Anmeldung über den Link in der Mail.' : 'Das hat nicht geklappt.');
          meldung.className = 'nl-meldung ' + (a.ok ? 'nl-ok' : 'nl-fehler');
        }
        if (a.ok) { form.querySelector('input[type=email]').value = ''; }
        else if (knopf) { knopf.disabled = false; }
      }).catch(function () {
        if (meldung) { meldung.textContent = 'Keine Verbindung. Bitte versuch es gleich noch einmal.'; meldung.className = 'nl-meldung nl-fehler'; }
        if (knopf) knopf.disabled = false;
      });
    });
  }
  function alle() { [].forEach.call(document.querySelectorAll('form.nl-form'), init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', alle); else alle();
})();
