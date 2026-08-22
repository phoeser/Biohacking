/* Erfahrungsberichte & Shop-Erfahrungen
 * ---------------------------------------------------------------------------
 * Ersetzt seit v118 den frueheren News-Bereich.
 *
 * Zwei Datensaetze:
 *   ERFAHRUNGEN  – Erfahrungsberichte zu Supplements, Peptiden, Behandlungen
 *   SHOPS        – Erfahrungen mit Bezugsquellen (inkl. Affiliate-Platzhaltern)
 *
 * WICHTIG – rechtlicher Rahmen:
 *   Erfahrungsberichte sind subjektive Einzelfaelle und KEIN Wirksamkeitsbeleg.
 *   Deshalb traegt jeder Bericht eine Quelle (autor) und die Oberflaeche einen
 *   festen Hinweistext. Sobald bei einem Shop `affiliate.aktiv` auf true steht,
 *   rendert die App zwingend eine "Anzeige"-Kennzeichnung – siehe app.js.
 *
 * autor:
 *   'paul'       – eigener Bericht von Paul (Selbstversuch)
 *   'recherche'  – aus oeffentlichen Quellen zusammengefasst, Quelle Pflicht
 *   'community'  – von Nutzern eingereicht und von Paul freigegeben
 *
 * demo: true  → Beispieleintrag, wird in der App als solcher markiert.
 *               Vor dem Livegang durch echte Berichte ersetzen oder loeschen.
 */

const ERFAHRUNGEN = [
  {
    id: 'inuspherese-paul-2026-08',
    substanz: 'INUSpherese (Blut-Apherese)',
    slug: 'inuspherese',
    kategorie: 'Behandlung',
    emoji: '\u{1FA78}',
    autor: 'paul',
    demo: false,
    datum: '2026-08-22',
    dauer: 'zwei Sitzungen im Abstand von zwei Wochen',
    dosis: 'München, stationär beim Anbieter',
    bewertung: null,
    fazit: 'Teuer und aufwändig – aber ich fühle mich seitdem spürbar besser. Die harte Probe kommt mit den nächsten Blutwerten.',
    text: 'Ich habe die INUSpherese zweimal machen lassen, mit zwei Wochen Abstand dazwischen, hier in München.\n\nEhrlich vorweg: Das ist nichts, was man mal eben nebenbei macht. Es kostet richtig Geld, und jede Sitzung frisst einen halben bis ganzen Tag. Wer damit liebäugelt, sollte beides einplanen – das Budget und die Zeit.\n\nWas ich sagen kann: Ich fühle mich seitdem spürbar besser. Das ist erst einmal genau das – ein Gefühl, mein eigenes, ohne Kontrollgruppe und ohne Vorher-Nachher-Messung, die diesen Namen verdient. Deshalb bin ich gespannt auf die nächsten Blutwerte. Erst die zeigen, ob sich etwas bewegt hat, das man auch messen kann.\n\nIch trage die Werte hier nach, sobald ich sie habe – auch wenn sie unspektakulär ausfallen sollten.',
    positiv: [
      'Spürbar besseres Allgemeinbefinden seit der ersten Sitzung',
      'Professioneller Ablauf, gute Betreuung vor Ort'
    ],
    negativ: [
      'Hohe Kosten – Selbstzahlerleistung, keine Kassenerstattung',
      'Zeitaufwand pro Sitzung erheblich',
      'Objektive Belege stehen noch aus – Blutwerte folgen'
    ],
    shopId: null,
    quelle: {
      label: 'Einordnung der Studienlage in Podcast-Folge 68 sowie unter Behandlungen',
      url: ''
    }
  }
];

const SHOPS = [
  {
    id: 'demo-shop',
    name: 'Beispiel-Shop',
    demo: true,
    url: '',
    land: 'DE',
    kategorien: ['Supplements'],
    bewertung: null,
    versand: 'Hier: Versanddauer und Verpackung aus eigener Bestellung.',
    zahlung: 'Hier: welche Zahlarten es gab und ob alles glatt lief.',
    qualitaet: 'Hier: gab es Analysezertifikate (CoA)? Waren Charge und Haltbarkeit angegeben?',
    zoll: 'Bei Bestellungen ausserhalb der EU: fielen Einfuhrumsatzsteuer oder Zoll an?',
    erfahrung: 'Beispieltext. Deine eigene Bestellerfahrung in ein paar Saetzen – neutral und nachpruefbar formuliert.',
    // Solange aktiv:false ist, rendert die App einen neutralen Link ohne Kennzeichnung.
    // Sobald aktiv:true gesetzt wird, erscheint zwingend die "Anzeige"-Kennzeichnung.
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  }
];

const ERFAHRUNG_KATEGORIEN = [
  { id: 'all',          label: 'Alles' },
  { id: 'Supplement',   label: 'Supplements' },
  { id: 'Peptid',       label: 'Peptide' },
  { id: 'Behandlung',   label: 'Behandlungen' },
  { id: 'shops',        label: 'Shops' }
];

const ERFAHRUNG_AUTOREN = {
  paul:      { label: 'Selbstversuch',   kurz: 'Paul', klasse: 'is-paul' },
  recherche: { label: 'Recherchiert',    kurz: 'Recherche', klasse: 'is-recherche' },
  community: { label: 'Community',       kurz: 'Community', klasse: 'is-community' }
};

/* Wer darf eingereichte Berichte freigeben?
 * Hier die Google-Konto-Adresse(n) eintragen, mit der/denen du dich in der App
 * anmeldest. Diese Liste steuert NUR, ob die Moderationsansicht sichtbar ist –
 * die eigentliche Absicherung passiert in den Firestore-Regeln (siehe
 * firestore-regeln-erfahrungen.txt). Beides muss übereinstimmen.
 */
const ERFAHRUNG_ADMIN_EMAILS = [
  // 'deine-google-adresse@gmail.com'
];
