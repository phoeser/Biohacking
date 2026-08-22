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
    id: 'demo-magnesium-threonat',
    substanz: 'Magnesium L-Threonat',
    slug: 'magnesium-l-threonat',
    kategorie: 'Supplement',
    emoji: '🧠',
    autor: 'paul',
    demo: true,
    datum: '2026-08-22',
    dauer: '8 Wochen',
    dosis: 'abends, Herstellerangabe',
    bewertung: 4,
    fazit: 'Beispieleintrag – hier kommt dein eigenes Fazit in ein bis zwei Saetzen hin.',
    text: 'Beispieltext. Hier beschreibst du in eigenen Worten, was du genommen hast, ueber welchen Zeitraum, was du gemerkt hast und was nicht. Am besten mit dem, was du objektiv messen konntest – Schlafphasen, HRV, Ruhepuls – und getrennt davon, wie es sich subjektiv angefuehlt hat.',
    positiv: ['Beispiel: Einschlafzeit kuerzer', 'Beispiel: ruhigere Naechte laut Wearable'],
    negativ: ['Beispiel: relativ teuer', 'Beispiel: grosse Kapselmenge'],
    shopId: null,
    quelle: null
  },
  {
    id: 'demo-kreatin',
    substanz: 'Kreatin',
    slug: 'kreatin',
    kategorie: 'Supplement',
    emoji: '💪',
    autor: 'recherche',
    demo: true,
    datum: '2026-08-22',
    dauer: null,
    dosis: null,
    bewertung: null,
    fazit: 'Beispieleintrag fuer einen recherchierten Bericht – Zusammenfassung dessen, was in einer benannten Quelle berichtet wird.',
    text: 'Bei recherchierten Eintraegen fasst du zusammen, was andere berichten – und benennst immer, woher es stammt. Keine anonymen Behauptungen. Die Quelle wird in der App unter dem Bericht verlinkt.',
    positiv: [],
    negativ: [],
    shopId: null,
    quelle: { label: 'Quelle hier eintragen', url: '' }
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
