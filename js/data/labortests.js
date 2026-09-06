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
 *   charge     Chargennummer aus dem Bericht, oder null wenn der Bericht
 *              das Feld leer lässt — das ist selbst ein Befund
 *   labor      Schlüssel aus LABORE, z. B. 'janoshik'
 *   auftrag    Auftragsnummer, mit Raute
 *   schluessel Prüfschlüssel
 *   datum      Datum aus dem Bericht (Ende der Analyse), ISO
 *   etikett    was auf dem Fläschchen steht, in mg
 *   gemessen   was das Labor gefunden hat, in mg
 *   reinheit   Prozent oder null
 *   urteil     'ok' | 'teils' | 'nein'
 *   geprueft   wann WIR den Bericht geöffnet haben, ISO
 *   anmerkung  ein Satz, falls etwas auffällt
 *
 * Der Prüflink wird aus Labor, auftrag und schluessel gebaut, nicht
 * gespeichert — so kann er nicht veralten, wenn ein Labor seine Adressen
 * ändert.
 */

/* Die Labore, die der Prüfer kennt.
 *
 * Janoshik: Der Direktlink ist geprüft — Auftragsnummer und Schlüssel gehen
 * als Parameter in die Adresse, die Seite öffnet den Bericht.
 *
 * Analiza Białek: Der Direktlink ist NICHT geprüft. Ihre Ergebnisseite nimmt
 * die Werte über ein Formular entgegen; ob sie auch über die Adresse gehen,
 * war von hier aus nicht feststellbar. Deshalb wird die Seite geöffnet und
 * beide Werte werden zum Kopieren danebengelegt. Lieber ein Zwischenschritt,
 * den man sieht, als ein Link, der still ins Leere führt.
 *
 * Abgefragt wird bei keinem der beiden etwas. Beide sperren maschinelle
 * Zugriffe ausdrücklich aus (robots.txt mit ai-train=no und namentlich
 * gesperrten Bots, bei Analiza zusätzlich ein Rechtevorbehalt nach der
 * EU-Richtlinie 2019/790). Der Prüfer baut nur die offizielle Adresse.
 */
const LABORE = {
  janoshik: {
    name: 'Janoshik',
    land: 'Tschechien',
    felder: ['Task number', 'Unique key'],
    beschriftung: ['Auftragsnummer (Task number)', 'Prüfnummer (Unique key)'],
    platzhalter: ['#96518', 'Q6HV1KENIDQM'],
    auftragMuster: /^\d{3,9}$/,
    keyMuster: /^[A-Z0-9]{8,20}$/,
    direkt: true,
    seite: 'https://janoshik.com/verification/',
    gastgeber: /(^|\.)janoshik\.com$/i,
    wo: 'Auf dem Zertifikat steht oben die <b>Task number</b> mit Raute, '
      + 'darunter die <b>Unique key</b> — eine Folge aus Buchstaben und Ziffern.',
    danach: 'Beim Labor auf <b>Open report</b> klicken. Dort steht unter '
          + '<b>Client</b>, wer den Test beauftragt hat, und weiter unten '
          + 'stehen Menge und Reinheit getrennt.',
    link: function (w) {
      return this.seite + '?task=' + encodeURIComponent('#' + w.auftrag)
           + '&key=' + encodeURIComponent(w.schluessel);
    }
  },
  analiza: {
    name: 'Analiza Białek',
    land: 'Polen',
    felder: ['Order number', 'Password'],
    beschriftung: ['Auftragsnummer (Order number)', 'Passwort (Password)'],
    platzhalter: ['100007021', 'B287L3M5'],
    auftragMuster: /^\d{6,12}$/,
    keyMuster: /^[A-Z0-9]{6,20}$/,
    direkt: false,
    seite: 'https://analizabialek.com/wyniki/',
    gastgeber: /(^|\.)analizabialek\.com$/i,
    wo: 'Auf dem Zertifikat steht oben die <b>Order number</b> — eine '
      + 'neunstellige Zahl, die auch im Strichcode steckt. Das <b>Password</b> '
      + 'steht darunter im Kopf des Berichts.',
    danach: 'Die Ergebnisseite ist polnisch. <b>Numer zlecenia</b> ist die '
          + 'Auftragsnummer, <b>Hasło analizy</b> das Passwort — beide stehen '
          + 'hier zum Kopieren bereit. Achte im Bericht auf <b>Content</b> '
          + '(die Menge) und <b>Purity</b> (die Reinheit).',
    link: function () { return this.seite; }
  }
};
const LABOR_STANDARD = 'janoshik';

const LABORTESTS = [
  {
    id: 'bpc157-europa-96518',
    substanz: 'BPC-157',
    anbieter: 'Europa-Peptide',
    hersteller: 'europa-peptide.com',
    charge: 'EP/112025',
    labor: 'janoshik',
    auftrag: '#96518',
    schluessel: 'Q6HV1KENIDQM',
    datum: '2025-12-31',
    etikett: 5,
    gemessen: 4.23,
    reinheit: 99.227,
    urteil: 'teils',
    geprueft: '2026-09-06',
    anmerkung: 'Sauberes Peptid, zu wenig davon: 4,23 statt 5 mg. Der Bericht ' +
               'merkt an, dass ein früh laufender Peak als Arginin gewertet und ' +
               'für die Reinheit nicht mitgezählt wurde.'
  },
  {
    id: 'melanotan2-biolab-100007021',
    substanz: 'Melanotan II',
    anbieter: 'BIOLAB CENTER',
    hersteller: 'biolabshop.de',
    charge: null,
    labor: 'analiza',
    auftrag: '#100007021',
    schluessel: 'B287L3M5',
    datum: '2025-02-28',
    etikett: 10,
    gemessen: 10.41,
    reinheit: 98,
    urteil: 'ok',
    geprueft: '2026-09-06',
    anmerkung: 'Menge und Reinheit passen — 10,41 statt 10 mg, also leicht über ' +
               'Etikett. Auffällig ist etwas anderes: Das Feld Chargennummer ist ' +
               'leer. Ohne Charge lässt sich der Bericht keinem Produktionslos ' +
               'zuordnen, er gilt streng genommen nur für dieses eine Fläschchen.'
  },
  {
    id: 'cjc1295dac-biolab-100007016',
    substanz: 'CJC-1295 DAC',
    anbieter: 'BIOLAB CENTER',
    hersteller: 'biolabshop.de',
    charge: null,
    labor: 'analiza',
    auftrag: '#100007016',
    schluessel: 'S82MLD87',
    datum: '2025-02-28',
    etikett: 5,
    gemessen: 5.09,
    reinheit: 98,
    urteil: 'ok',
    geprueft: '2026-09-06',
    anmerkung: 'Unauffälliger Bericht: 5,09 statt 5 mg, Reinheit 98 Prozent. ' +
               'Auch hier ist die Chargennummer leer, und die Probe ging schon ' +
               'im Februar 2025 ins Labor — für das, was heute im Karton liegt, ' +
               'sagt sie deshalb nur begrenzt etwas.'
  },
  {
    id: 'hgh-europa-92426',
    substanz: 'Somatropin (HGH)',
    anbieter: 'Europa-Peptide',
    hersteller: 'europa-peptide.com',
    charge: 'ST10/112025',
    labor: 'janoshik',
    auftrag: '#92426',
    schluessel: 'F37T9BSLFE5M',
    datum: '2025-12-10',
    etikett: 3.33,
    gemessen: 3.33,
    reinheit: 95.383,
    urteil: 'ok',
    geprueft: '2026-09-06',
    anmerkung: 'Menge exakt auf dem Etikett: 3,33 mg entsprechen 9,99 von 10 IU. ' +
               'Die Reinheit liegt mit 95,4 Prozent unter der von Peptiden — ' +
               'das ist bei rekombinantem Wachstumshormon normal. Die Zeile, auf ' +
               'die es hier ankommt, ist eine andere: Dimere und verwandte ' +
               'Proteine wurden nicht gefunden. Genau die entstehen bei falscher ' +
               'Lagerung und machen HGH unwirksam bis reizend.'
  }
];

/* Was ein Laborbericht beweist und was nicht. Steht direkt neben dem
 * Eingabefeld, weil genau hier die Fehler passieren. */
const LABOR_FALLEN = [
  {
    titel: 'Der Bericht gehört zu einer anderen Charge',
    text: 'Ein Bericht gilt für das Fläschchen, das eingeschickt wurde — nicht für das, ' +
          'das bei dir ankommt. Prüfe das Datum: Liegt der Test ein Jahr zurück, sagt er ' +
          'über die heutige Produktion wenig. Und ist das Feld Chargennummer leer, lässt ' +
          'sich der Bericht überhaupt keinem Produktionslos zuordnen.'
  },
  {
    titel: 'Der Bericht gehört zu einem anderen Anbieter',
    text: 'Laborberichte werden weitergereicht. Im echten Bericht steht unter „Client“, ' +
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

/* Der Prüfer selbst liegt in js/laborcheck.js und wird hier nachgeladen.
 * Sauberer wäre ein eigener <script>-Eintrag in index.html; der kommt beim
 * nächsten Deploy vom Rechner aus dazu, dann fällt diese Zeile weg. */
document.head.appendChild(Object.assign(document.createElement('script'),
  { src: 'js/laborcheck.js?v=161' }));
