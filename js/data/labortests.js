/* Laborberichte zu Peptiden — die eigene Liste geprüfter Chargen.
 *
 * REGEL FÜR JEDEN EINTRAG
 * Er darf nur hier stehen, wenn der Bericht beim Labor selbst aufgerufen und
 * gelesen wurde. Nicht, weil ein Shop einen Screenshot zeigt. Das Feld
 * `geprueft` hält fest, wann das war — wer die Liste liest, soll sehen, dass
 * jemand tatsächlich hingesehen hat.
 *
 * FELDER
 *   id         eindeutig, kleingeschrieben
 *   substanz   wie in der Datenbank, z. B. 'BPC-157'
 *   anbieter   wer den Test beauftragt hat (im Bericht: "Client")
 *   hersteller optional, falls im Bericht getrennt ausgewiesen
 *   charge     Chargennummer aus dem Bericht
 *   labor      'Janoshik' | anderes
 *   auftrag    Auftragsnummer, mit Raute
 *   schluessel Prüfschlüssel
 *   datum      Datum aus dem Bericht (Probeneingang), ISO
 *   etikett    was auf dem Fläschchen steht, in mg
 *   gemessen   was das Labor gefunden hat, in mg
 *   reinheit   Prozent oder null
 *   geprueft   wann WIR den Bericht geöffnet haben, ISO
 *   anmerkung  ein Satz, falls etwas auffällt
 *
 * Der Prüflink wird aus auftrag und schluessel gebaut, nicht gespeichert —
 * so kann er nicht veralten, wenn das Labor seine Adressen ändert.
 */
const LABORTESTS = [
  {
    id: 'bpc157-europa-96518',
    substanz: 'BPC-157',
    anbieter: 'Europa-Peptide',
    hersteller: 'europa-peptide.com',
    charge: 'EP/112025',
    labor: 'Janoshik',
    auftrag: '#96518',
    schluessel: 'Q6HV1KENIDQM',
    datum: '2025-12-31',
    etikett: 5,
    gemessen: 4.23,
    reinheit: 99.227,
    geprueft: '2026-09-06',
    anmerkung: 'Sauberes Peptid, zu wenig davon: 4,23 statt 5 mg. Der Bericht ' +
               'merkt an, dass ein früh laufender Peak als Arginin gewertet und ' +
               'für die Reinheit nicht mitgezählt wurde.'
  }
];

/* Was ein Laborbericht beweist und was nicht. Steht direkt neben dem
 * Eingabefeld, weil genau hier die Fehler passieren. */
const LABOR_FALLEN = [
  {
    titel: 'Der Bericht gehört zu einer anderen Charge',
    text: 'Ein Bericht gilt für das Fläschchen, das eingeschickt wurde — nicht für das, ' +
          'das bei dir ankommt. Prüfe das Datum: Liegt der Test ein Jahr zurück, sagt er ' +
          'über die heutige Produktion wenig.'
  },
  {
    titel: 'Der Bericht gehört zu einem anderen Anbieter',
    text: 'Laborberichte werden weitergereicht. Im echten Bericht steht unter „Client", ' +
          'wer den Auftrag erteilt hat. Steht dort ein anderer Name als der Shop, bei dem ' +
          'du kaufst, ist das kein Beleg für diesen Shop.'
  },
  {
    titel: 'Reinheit ist nicht Menge',
    text: 'Das sind zwei getrennte Zeilen im Bericht, und die zweite wird gern übersehen. ' +
          'Ein Peptid kann zu 99 Prozent rein sein und trotzdem nur vier von fünf ' +
          'Milligramm enthalten. Sterilität und Endotoxine stehen meist gar nicht drin.'
  },
  {
    titel: 'Der Screenshot ist kein Bericht',
    text: 'Ein Bild lässt sich in zwei Minuten fälschen. Nur der Aufruf beim Labor mit ' +
          'Auftragsnummer und Schlüssel zählt — genau dafür ist dieses Feld da.'
  }
];
