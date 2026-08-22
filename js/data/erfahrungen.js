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
 *   KEINE konkreten Dosierungsangaben zu nicht zugelassenen Wirkstoffen.
 *   Das faellt in Deutschland unter § 3a HWG (Werbung fuer nicht zugelassene
 *   Arzneimittel). Wirkung beschreiben ja, Handlungsanleitung nein.
 *
 * autor:
 *   'paul'          – eigener Bericht von Paul (Selbstversuch)
 *   'recherche'     – aus oeffentlichen Quellen zusammengefasst, Quelle Pflicht
 *   'weitergegeben' – aus zweiter Hand: von Bekannten berichtet oder mehrfach gehoert
 *   'community'     – von Nutzern eingereicht und von Paul freigegeben
 *
 * demo: true  → Beispieleintrag, wird in der App als solcher markiert.
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
  },
  {
    id: 'tesofensine-umfeld-2026-08',
    substanz: 'Tesofensine',
    slug: 'tesofensine',
    kategorie: 'Wirkstoff',
    emoji: '\u{1F48A}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-22',
    dauer: 'rund acht Wochen',
    dosis: null,
    bewertung: null,
    fazit: 'Wirkt sofort und ohne Spritze, dafür lässt der Effekt nach etwa acht Wochen spürbar nach.',
    text: 'Ein Bekannter von mir hat Tesofensine ausprobiert und war zunächst sehr angetan.\n\nWas ihm aufgefallen ist: deutlich weniger Hunger, und er war schneller satt. Bemerkenswert fand er, dass es unmittelbar wirkte – am Tag der Einnahme, ohne die wochenlange Eindosierung, die man von den Abnehmspritzen kennt. Nennenswerte Nebenwirkungen hatte er nicht, insbesondere keine Magen-Darm-Probleme. Und keine Nadel.\n\nDer Haken kam nach etwa acht Wochen: Der Effekt ließ merklich nach. Danach ist er auf Retatrutide in niedriger Dosierung umgestiegen.\n\nEinordnung von mir: Das ist ein einzelner Bericht aus zweiter Hand. Tesofensine ist nirgends als Arzneimittel zugelassen – die Entwicklung lief über Jahre, ohne dass es zur Zulassung kam. Was hier als Wirkung beschrieben wird, deckt sich mit dem, was der Wirkmechanismus erwarten lässt, aber ein Erfahrungsbericht ersetzt keine Studie.',
    positiv: [
      'Wirkung setzt sofort ein, keine wochenlange Eindosierung',
      'Weniger Hunger, schnelleres Sättigungsgefühl',
      'Keine Injektion nötig',
      'Keine Magen-Darm-Beschwerden berichtet'
    ],
    negativ: [
      'Effekt ließ nach rund acht Wochen deutlich nach',
      'Nirgends als Arzneimittel zugelassen',
      'Einzelbericht aus zweiter Hand, keine Messwerte'
    ],
    shopId: null,
    quelle: { label: 'Bericht eines Bekannten, weitergegeben von Paul · Einordnung in Podcast-Folge 34', url: '' }
  },
  {
    id: 'retatrutide-niedrig-umfeld-2026-08',
    substanz: 'Retatrutide, niedrig dosiert',
    slug: 'retatrutide',
    kategorie: 'Peptid',
    emoji: '\u{1F489}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-22',
    dauer: 'laufend',
    dosis: null,
    bewertung: null,
    fazit: 'In niedriger Dosierung gut verträglich und zufriedenstellend – aber mehrfach berichtet: wenig Power, man fühlt sich schlapp.',
    text: 'Derselbe Bekannte ist nach dem Nachlassen der Tesofensine-Wirkung auf Retatrutide umgestiegen, bewusst in niedriger Dosierung, und ist damit recht zufrieden.\n\nDas deckt sich mit dem, was ich inzwischen häufiger höre: Retatrutide niedrig dosiert und auf zwei Gaben pro Woche verteilt wird als angenehm beschrieben – weniger Nebenwirkungen als bei den üblichen Aufdosierungsschemata.\n\nEin Punkt taucht dabei aber immer wieder auf, und der gehört dazu: wenig Power, man ist schlapp. Das ist keine Randnotiz, sondern das, was mir am häufigsten als Kehrseite genannt wird.\n\nEinordnung von mir: Retatrutide befindet sich in klinischen Studien und ist nirgends zugelassen. Was hier zirkuliert, sind Anwendungsmuster aus der Community, keine geprüften Schemata. Konkrete Mengenangaben lasse ich hier bewusst weg.',
    positiv: [
      'In niedriger Dosierung gut verträglich',
      'Anhaltende Zufriedenheit nach dem Wechsel von Tesofensine',
      'Verteilung auf zwei Gaben pro Woche wird als angenehmer beschrieben'
    ],
    negativ: [
      'Wenig Power, Gefühl von Schlappheit – mehrfach unabhängig berichtet',
      'Nicht zugelassen, noch in klinischer Prüfung',
      'Community-Schemata sind keine geprüften Dosierungen'
    ],
    shopId: null,
    quelle: { label: 'Bericht eines Bekannten plus mehrfach gehörte Rückmeldungen, weitergegeben von Paul · Einordnung in Podcast-Folge 6', url: '' }
  },
  {
    id: 'mots-c-umfeld-2026-08',
    substanz: 'MOTS-c',
    slug: 'mots-c',
    kategorie: 'Peptid',
    emoji: '\u{26A1}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-22',
    dauer: null,
    dosis: null,
    bewertung: null,
    fazit: 'Durchweg positive Rückmeldungen: gibt direkt viel Energie – besonders in Kombination mit Retatrutide.',
    text: 'Zu MOTS-c habe ich bisher ausschließlich Gutes gehört. Der Punkt, der immer zuerst genannt wird: Es gibt unmittelbar spürbar Energie.\n\nBesonders interessant fand ich den Hinweis, dass es sich gut mit Retatrutide ergänzt. Das ergibt inhaltlich Sinn: Wenn beim Abnehmen unter Retatrutide vor allem die fehlende Power als Nachteil genannt wird, adressiert MOTS-c genau diese Lücke.\n\nEinordnung von mir: Das ist der schwächste Bericht auf dieser Seite, was die Belegbarkeit angeht – ich habe es gehört, nicht selbst erlebt und nicht von einer einzelnen benannten Person. Genau deshalb steht es hier unter „Weitergegeben“ und nicht unter „Selbstversuch“. MOTS-c ist ein Forschungspeptid ohne Zulassung; die Datenlage am Menschen ist dünn.',
    positiv: [
      'Direkt spürbarer Energie-Effekt, durchweg positive Rückmeldungen',
      'Ergänzt sich plausibel mit Retatrutide, wo Antriebslosigkeit das Hauptproblem ist'
    ],
    negativ: [
      'Reines Hörensagen, keine benannte Einzelperson, keine Messwerte',
      'Forschungspeptid ohne Zulassung, dünne Humandatenlage'
    ],
    shopId: null,
    quelle: { label: 'Mehrfach gehörte Rückmeldungen, weitergegeben von Paul · Einordnung in Podcast-Folge 4', url: '' }
  },
  {
    id: 'melanotan-1-2-umfeld-2026-08',
    substanz: 'Melanotan 1 und 2 im Vergleich',
    slug: 'melanotan',
    kategorie: 'Peptid',
    emoji: '\u{2600}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-22',
    dauer: null,
    dosis: null,
    bewertung: null,
    fazit: 'MT2 bräunt deutlich stärker, hat aber unangenehme Nebenwirkungen – vor allem am Anfang. MT1 wirkt schwächer, dafür kaum Nebenwirkungen.',
    text: 'Zu den beiden Bräunungspeptiden höre ich immer wieder dasselbe Muster, und es ist erstaunlich konsistent.\n\nMelanotan 2 wirkt beim Bräunen stark – deutlich stärker als MT1. Der Preis dafür sind unangenehme Nebenwirkungen, und die treten vor allem bei den ersten Malen auf. Der Rat, der dabei immer mitkommt: niedrig anfangen und langsam steigern, statt gleich einzusteigen.\n\nMelanotan 1 ist das ruhigere Gegenstück: schwächere Wirkung, dafür kaum bis keine Nebenwirkungen.\n\nEinordnung von mir: Das ist eine Abwägung zwischen Wirkstärke und Verträglichkeit, keine Empfehlung für eines von beidem. MT2 ist nirgends zugelassen. MT1 gibt es als Afamelanotid tatsächlich als zugelassenes Medikament – aber für eine seltene Lichtunverträglichkeit, nicht zum Bräunen. Was in der Szene zirkuliert, ist nicht dasselbe Produkt und stammt nicht aus derselben Qualitätskontrolle.',
    positiv: [
      'MT2: deutlich stärkere Bräunungswirkung',
      'MT1: kaum bis keine Nebenwirkungen berichtet',
      'Konsistentes Bild über mehrere Rückmeldungen hinweg'
    ],
    negativ: [
      'MT2: unangenehme Nebenwirkungen, besonders zu Beginn',
      'MT1: spürbar schwächere Wirkung',
      'Beide in dieser Verwendung nicht zugelassen, Produktqualität aus grauen Quellen unklar'
    ],
    shopId: null,
    quelle: { label: 'Mehrfach gehörte Rückmeldungen, weitergegeben von Paul · Einordnung in den Podcast-Folgen zu Melanotan 1 und 2', url: '' }
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
  { id: 'Wirkstoff',    label: 'Wirkstoffe' },
  { id: 'Behandlung',   label: 'Behandlungen' },
  { id: 'shops',        label: 'Shops' }
];

const ERFAHRUNG_AUTOREN = {
  paul:      { label: 'Selbstversuch',   kurz: 'Paul', klasse: 'is-paul' },
  recherche: { label: 'Recherchiert',    kurz: 'Recherche', klasse: 'is-recherche' },
  community: { label: 'Community',       kurz: 'Community', klasse: 'is-community' },
  // Aus zweiter Hand: von Bekannten berichtet oder mehrfach gehoert. Bewusst
  // sichtbar getrennt vom Selbstversuch – sonst entwertet Erzaehltes das Erlebte.
  weitergegeben: { label: 'Weitergegeben', kurz: 'Umfeld', klasse: 'is-community' }
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
