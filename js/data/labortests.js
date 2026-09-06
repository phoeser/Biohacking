/* Laborberichte zu Peptiden — die eigene Liste geprüfter Chargen.
 *
 * WARUM DIESE DATEI LEER STARTET
 * Jeder Eintrag hier ist eine Behauptung über ein konkretes Produkt. Sie darf
 * nur drin stehen, wenn der zugehörige Bericht tatsächlich aufgerufen und
 * gelesen wurde — nicht, weil ein Shop einen Screenshot zeigt. Deshalb steht
 * hier nichts Vorbefülltes: ein erfundener Eintrag wäre schlimmer als keiner.
 *
 * FELDER
 *   id        eindeutig, kleingeschrieben, z. B. 'bpc157-xyz-85193'
 *   substanz  wie in der Datenbank, z. B. 'BPC-157'
 *   anbieter  Name des Shops oder Herstellers
 *   labor     'Janoshik' | 'Colmaric' | anderes
 *   auftrag   Auftragsnummer beim Labor, mit Raute, z. B. '#85193'
 *   schluessel  der Prüfschlüssel aus dem Bericht
 *   datum     ISO, z. B. '2026-08-14'
 *   reinheit  Zahl in Prozent oder null, wenn nicht ausgewiesen
 *   menge     ausgewiesene Menge je Fläschchen, z. B. '5,02 mg'
 *   geprueft  ISO-Datum, an dem WIR den Bericht selbst aufgerufen haben
 *   anmerkung  ein Satz, falls etwas auffällt
 *
 * Der Prüflink wird aus auftrag und schluessel gebaut, nicht gespeichert —
 * so kann er nicht veralten, wenn das Labor seine Adressen ändert.
 */
const LABORTESTS = [];

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
    text: 'Laborberichte werden weitergereicht. Im echten Bericht steht, wer den Auftrag ' +
          'erteilt hat. Steht dort ein anderer Name als der Shop, bei dem du kaufst, ist ' +
          'das kein Beleg für diesen Shop.'
  },
  {
    titel: 'Es wurde nur ein Teil geprüft',
    text: 'Reinheit und Menge sind zwei verschiedene Fragen. Ein Peptid kann zu 99 Prozent ' +
          'rein sein und trotzdem nur die halbe angegebene Menge enthalten. Sterilität und ' +
          'Endotoxine stehen in den meisten Berichten gar nicht.'
  },
  {
    titel: 'Der Screenshot ist kein Bericht',
    text: 'Ein Bild lässt sich in zwei Minuten fälschen. Nur der Aufruf beim Labor mit ' +
          'Auftragsnummer und Schlüssel zählt — genau dafür ist dieses Feld da.'
  }
];
