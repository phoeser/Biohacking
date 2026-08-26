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
 *   Das faellt in Deutschland unter § 3a HWG (Werbung für nicht zugelassene
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

// affiliate-Objekt je Shop:
//   aktiv   – schaltet die Kennzeichnung und die Rabatt-Anzeige scharf
//   url     – Affiliate-Link (leer = nur Code kommunizieren)
//   codes   – Liste der Rabattcodes: { code, prozent, fuer }
//             Mehrere Eintraege werden gleichwertig untereinander angezeigt
//             (z.B. Neukunden- und Bestandskunden-Code).
//             Leere Liste = Rabatt laeuft allein ueber den Link.
const ERFAHRUNGEN = [
  {
    id: 'naturtreu-paul-2026-08',
    substanz: 'Naturtreu – Zink, Kreatin & Florazauber',
    slug: 'naturtreu',
    kategorie: 'Supplement',
    emoji: '\u{1F33F}',
    autor: 'paul',
    demo: false,
    // anzeige: sobald hier ein Affiliate-Verhaeltnis besteht, auf true setzen.
    // Die Kennzeichnungspflicht (§ 5a Abs. 4 UWG) gilt rueckwirkend fuer bereits
    // veroeffentlichte Beitraege, sobald eine Gegenleistung fliesst.
    anzeige: true,
    datum: '2026-08-24',
    dauer: 'laufend, seit mehreren Monaten',
    dosis: 'nach Herstellerangabe',
    bewertung: 5,
    fazit: 'Von den Marken, die ich regelmäßig nachkaufe, die verlässlichste. Beim Kreatin stimmt das Preis-Leistungs-Verhältnis besonders.',
    text: 'Von Naturtreu habe ich inzwischen viele Produkte durch und bin mit der Marke insgesamt sehr zufrieden. Drei stechen heraus.\n\nZink nehme ich dauerhaft. Das ist eines der wenigen Supplemente, bei denen die Rechtslage eindeutig ist und zugelassene Aussagen existieren – Zink trägt zu einer normalen Funktion des Immunsystems bei, das steht so in der EU-Liste. Genau deshalb halte ich es für eine sinnvolle Basis und nicht für ein Experiment.\n\nKreatin nehme ich seit einiger Zeit ebenfalls von Naturtreu, das Kreatinquelle-Pulver – aktuell ist das mein Standard. Preis-Leistung finde ich dort richtig gut, das ist der Punkt, an dem sich die Marke aus meiner Sicht am deutlichsten lohnt. Kreatin ist ein Commodity, da geht es nicht um Formulierungskunst, sondern um reines Monohydrat zu einem fairen Kilopreis. Zwischendurch wechsle ich auch gern mal auf das von MoleQlar, aber als Dauerlösung ist Naturtreu für mich die vernünftigere Rechnung. Meine allgemeine Einordnung zu Kreatin steht in einem eigenen Bericht hier auf der Seite.\n\nFlorazauber ist der Kulturen-Komplex, also ein Probiotikum mit mehreren Bakterienstämmen und Akazienfaser als Ballaststoff. Der Hersteller nennt eine magensaftresistente Kapsel, damit die Kulturen im Darm ankommen und nicht schon im Magen. Ich nehme es ohne feste Kur, einfach laufend. Was man dazu ehrlich sagen muss: Bei Probiotika ist der subjektive Eindruck schwer von Alltagseinflüssen zu trennen, und die Studienlage zu einzelnen Stämmen ist deutlich dünner als bei Zink.\n\nEinordnung von mir: Was ich an Naturtreu schätze, ist weniger ein einzelner Wow-Effekt als die Konstanz – transparente Zusammensetzung, keine Fantasie-Dosierungen, keine überzogenen Versprechen auf der Verpackung. Das ist bei Nahrungsergänzung mehr wert, als es klingt.',
    positiv: [
      'Zink mit klarer Rechtslage und zugelassenen Angaben – gute Basis',
      'Kreatin (Kreatinquelle) mit sehr gutem Preis-Leistungs-Verhältnis – mein Standard',
      'Transparente Zusammensetzung, keine überzogenen Versprechen',
      'Florazauber mit magensaftresistenter Kapsel und Ballaststoffanteil'
    ],
    negativ: [
      'Bei Probiotika ist der eigene Eindruck kaum von Alltagseinflüssen zu trennen',
      'Nicht der günstigste Anbieter'
    ],
    shopId: 'naturtreu',
    quelle: { label: 'Eigene Anwendung, Stand August 2026', url: '' }
  },
  {
    id: 'moleqlar-paul-2026-08',
    substanz: 'MoleQlar – TMG, Kreatin & Resveratrol',
    slug: 'moleqlar',
    kategorie: 'Supplement',
    emoji: '\u{1F9EC}',
    autor: 'paul',
    demo: false,
    // anzeige: bei bestehendem Affiliate-Verhaeltnis auf true setzen.
    anzeige: true,
    datum: '2026-08-24',
    dauer: 'laufend',
    dosis: 'nach Herstellerangabe',
    bewertung: 5,
    fazit: 'Höherpreisig, aber Qualität und Zuverlässigkeit stimmen. Alle drei Pulver nutze ich weiter.',
    text: 'Von MoleQlar nutze ich drei Produkte: das TMG-Pulver, das Resveratrol-Pulver und zwischendurch auch das Kreatin. Mit allen drei bin ich sehr zufrieden. Beim Kreatin ist MoleQlar für mich die Abwechslung und nicht die Dauerlösung – da liegt mein Standard preislich woanders, siehe den Naturtreu-Bericht.\n\nDie Marke ist preislich klar im oberen Bereich – das muss man wissen, bevor man bestellt. Was man dafür bekommt, ist aus meiner Sicht konstante Qualität und Zuverlässigkeit: Es kommt, was bestellt wurde, in der Beschaffenheit, die man erwartet. Bei Einzelstoff-Pulvern ist das mehr wert, als es klingt, weil man dort kaum eine Möglichkeit hat, die Reinheit selbst zu beurteilen.\n\nZu den drei Stoffen kurz die Einordnung, weil sie rechtlich unterschiedlich gelagert sind. TMG (Trimethylglycin, auch Betain) wird bei MoleQlar aus der Zuckerrübe gewonnen und als hochreines Pulver angeboten – ein unproblematischer Stoff. Kreatin ist der am besten untersuchte Wirkstoff in meiner ganzen Datenbank, mit zugelassener Angabe zur Muskelleistung. Bei Resveratrol lohnt der genaue Blick: trans-Resveratrol ist in der EU als neuartiges Lebensmittel zugelassen, aber mit Mengenobergrenze – 150 mg pro Tag für Erwachsene. Wer mehr nimmt, bewegt sich außerhalb dessen, was zugelassen ist. Das ist kein Vorwurf an den Hersteller, sondern eine Sache, die man als Anwender kennen sollte.\n\nEinordnung von mir: Wenn du bei Einzelstoffen sparen willst, ist MoleQlar nicht die richtige Adresse. Wenn dir Zuverlässigkeit bei Stoffen wichtig ist, deren Qualität du selbst nicht prüfen kannst, ist der Aufpreis für mich vertretbar.',
    positiv: [
      'Konstante Qualität und zuverlässige Lieferung über alle drei Produkte',
      'TMG als hochreines Pulver aus der Zuckerrübe',
      'Kreatin mit der besten Studienlage aller Einträge hier'
    ],
    negativ: [
      'Deutlich höherpreisig als der Marktdurchschnitt',
      'Bei Resveratrol die EU-Obergrenze von 150 mg pro Tag im Blick behalten'
    ],
    shopId: 'moleqlar',
    quelle: { label: 'Eigene Anwendung, Stand August 2026', url: '' }
  },
  {
    id: 'norsan-omega3-paul-2026-08',
    substanz: 'NORSAN Omega-3 (Öl & Kapseln)',
    slug: 'norsan-omega3',
    kategorie: 'Supplement',
    emoji: '\u{1F41F}',
    autor: 'paul',
    demo: false,
    // anzeige: siehe Hinweis oben – bei Affiliate-Verhaeltnis auf true setzen.
    anzeige: false,
    datum: '2026-08-24',
    dauer: 'laufend',
    dosis: 'nach Herstellerangabe',
    bewertung: 5,
    fazit: 'Qualität und Schwermetall-Nachweis überzeugen. Das Öl schmeckt deutlich nach Fisch – das ist der Preis dafür.',
    text: 'Omega-3 nehme ich von NORSAN, sowohl das Öl als auch die Kapseln. Beides funktioniert für mich gut.\n\nDer eigentliche Grund für diese Marke ist bei Fischöl aber nicht der Geschmack, sondern die Reinheit. Fischöl stammt aus Meerestieren, und genau dort reichern sich Schwermetalle an – Quecksilber vor allem. Bei einem Produkt, das man täglich und über Jahre nimmt, ist das die relevanteste Frage überhaupt. NORSAN veröffentlicht dazu Schwermetall-Zertifikate für die einzelnen Produktlinien und gibt an, verkaufsfertige Produkte regelmäßig durch ein unabhängiges Labor prüfen zu lassen sowie die TOTOX-Werte der Rohware chargenweise. TOTOX ist das Maß für Oxidation, also dafür, wie ranzig ein Öl bereits ist – auch das ist bei Fischöl ein echtes Thema.\n\nZum Geschmack, ohne Beschönigung: Das Öl schmeckt schon stark nach Fisch. Wer das nicht mag, ist mit den Kapseln besser bedient – die habe ich genau deshalb parallel im Einsatz.\n\nEinordnung von mir: Omega-3 ist einer der wenigen Werte, die man nicht schätzen muss, sondern messen kann. Der Omega-3-Index steht bei mir im Blutwerte-Bereich, und ich halte das für den sinnvolleren Weg als jede Bauchgefühl-Dosierung: erst messen, dann entscheiden, wie viel man überhaupt braucht.',
    positiv: [
      'Schwermetall-Zertifikate werden je Produktlinie veröffentlicht',
      'TOTOX-Werte der Rohware werden chargenweise geprüft (Oxidationsgrad)',
      'Öl und Kapseln parallel verfügbar – Kapseln umgehen das Geschmacksthema'
    ],
    negativ: [
      'Das Öl schmeckt deutlich nach Fisch',
      'Preislich im oberen Bereich',
      'Prüflabor und genaue Prüfintervalle werden nicht öffentlich benannt'
    ],
    shopId: null,
    quelle: { label: 'Eigene Anwendung; Herstellerangaben laut NORSAN Labor-Zertifikaten, abgerufen 24.08.2026', url: 'https://norsan.de/labor-zertifikate/' }
  },
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
    id: 'kreatin-paul-2026-08',
    substanz: 'Kreatin',
    slug: 'kreatin',
    kategorie: 'Supplement',
    emoji: '\u{1F4AA}',
    autor: 'paul',
    demo: false,
    datum: '2026-08-22',
    dauer: 'dauerhaft, täglich',
    dosis: 'mindestens 5 g pro Tag, an schlappen Tagen auch mal 15 g',
    bewertung: 5,
    fazit: 'Das unspektakulärste, was ich nehme – und das, bei dem ich am wenigsten zweifle. Regelmäßigkeit ist wichtiger als die Menge.',
    text: 'Kreatin nehme ich dauerhaft und täglich. Mindestens fünf Gramm, das ist die Basis. An Tagen, an denen ich mich schlapp fuehle, gehe ich auch mal auf fünfzehn Gramm hoch.\n\nWas mir dabei am wichtigsten ist: Es wirkt über die Regelmäßigkeit, nicht über die Einzeldosis. Kreatin fuellt die Speicher in der Muskulatur langsam auf – wer es unregelmäßig nimmt, merkt entsprechend wenig. Deshalb ist täglich hier tatsaechlich der entscheidende Teil und nicht bloß ein guter Vorsatz.\n\nEinordnung von mir: Das ist der Eintrag auf dieser Seite mit der mit Abstand besten Studienlage. Kreatin ist eines der am gründlichsten untersuchten Supplemente überhaupt, frei verkäuflich, und die Wirkung auf Kraft und Muskelleistung ist gut belegt. Genau deshalb steht es hier auch mit konkreten Mengen – anders als bei den nicht zugelassenen Wirkstoffen weiter unten.',
    positiv: [
      'Sehr gute Studienlage, frei verkäuflich und günstig',
      'Bei täglicher Einnahme spürbar – gerade an schwachen Tagen',
      'Keine Nebenwirkungen bei mir'
    ],
    negativ: [
      'Wirkt nur bei Regelmäßigkeit, einzelne Gaben bringen wenig',
      'Zu Beginn kann etwas Wasser eingelagert werden'
    ],
    shopId: null,
    quelle: { label: 'Einordnung der Studienlage in Podcast-Folge 32', url: '' }
  },
  {
    id: 'mitocare-paket-paul-2026-08',
    substanz: 'MiToCare-Paket (ärztlich zusammengestellt)',
    slug: 'mitocare',
    kategorie: 'Supplement',
    emoji: '\u{1F9EA}',
    autor: 'paul',
    demo: false,
    datum: '2026-08-22',
    dauer: 'laufend',
    dosis: 'individuelle Zusammenstellung durch den Arzt',
    bewertung: 5,
    fazit: 'Sehr teuer, aber klasse. Der eigentliche Unterschied ist für mich nicht die Marke, sondern dass ein Arzt es auf mich zugeschnitten hat.',
    text: 'Ich nehme ein Paket an MiToCare-Präparaten, das mir mein Arzt zusammengestellt hat – darunter Glutathion, Omega-3 und einiges mehr.\n\nEhrlich zum Preis: Das ist teuer. Deutlich teurer, als wenn man sich die Einzelstoffe selbst zusammensucht. Trotzdem bin ich sehr zufrieden.\n\nWas für mich den Unterschied macht, ist aber nicht das Etikett, sondern der Weg dorthin: Es ist auf mich zugeschnitten und nicht von einer Webseite abgeschrieben. Wer sich fragt, ob sich so ein Paket lohnt, sollte deshalb weniger auf die Marke schauen als darauf, ob jemand mit Sachverstand und Blick auf die eigenen Werte entschieden hat, was drin ist – und was eben nicht.\n\nEinordnung von mir: Zu den einzelnen Bestandteilen gibt es sehr unterschiedliche Datenlagen. Omega-3 ist gut untersucht, bei Glutathion zum Einnehmen ist die Bioverfügbarkeit seit Jahren umstritten. Ein Paket ist immer nur so gut wie seine schwächsten Bestandteile – auch wenn das Gesamtpaket sich gut anfühlt.',
    positiv: [
      'Individuell vom Arzt zusammengestellt statt Standard-Stack von der Stange',
      'Ich bin insgesamt sehr zufrieden',
      'Enthält gut untersuchte Bausteine wie Omega-3'
    ],
    negativ: [
      'Sehr hoher Preis im Vergleich zum Einzelkauf der Bestandteile',
      'Datenlage der Einzelstoffe ist sehr unterschiedlich – Glutathion oral etwa ist umstritten',
      'Ohne Blutwerte vorher und nachher schwer zu sagen, was genau wirkt'
    ],
    shopId: null,
    quelle: { label: 'Einordnung einzelner Bestandteile in den Podcast-Folgen zu Omega-3 und Glutathion', url: '' }
  },
  {
    id: 'trt-paul-2026-08',
    substanz: 'TRT (Testosteron-Ersatztherapie)',
    slug: 'testosteron',
    kategorie: 'Wirkstoff',
    emoji: '\u{1F4C8}',
    autor: 'paul',
    demo: false,
    datum: '2026-08-22',
    dauer: 'laufend, unter ärztlicher Aufsicht',
    dosis: 'ärztlich verordnet und anhand der Blutwerte eingestellt',
    bewertung: 5,
    fazit: 'Wirkt bei mir hervorragend – als Injektion. Das Gel davor hat bei mir dagegen kaum etwas gebracht.',
    text: 'Ich mache TRT unter ärztlicher Aufsicht, mit regelmäßiger Kontrolle der Blutwerte. Die Wirkung ist bei mir sehr gut.\n\nDer für mich lehrreichste Teil kam aber davor: Ich hatte es zuerst als Gel, und da hat sich kaum etwas getan. Erst mit der Injektion kam der Effekt.\n\nEinordnung von mir: Genau das ist ein bekanntes Muster und kein Einzelfall. Wie viel Testosteron aus einem Gel tatsächlich durch die Haut ankommt, schwankt zwischen Menschen erheblich – deutlich stärker als bei der Injektion, wo die Menge feststeht. Wer also mit Gel keine Wirkung sieht, hat nicht zwangsläufig ein Problem mit dem Wirkstoff, sondern womöglich mit dem Aufnahmeweg. Das gehört auf den Tisch, bevor man ganz aufgibt.\n\nWichtig, und deshalb steht hier auch keine Zahl von mir als Empfehlung: Die Dosis ist keine Geschmacksfrage, sondern wird anhand von Blutwerten eingestellt und ärztlich überwacht. Testosteron ist verschreibungspflichtig – zu Recht. Zur Entscheidung gehören Themen, die man vorher besprochen haben sollte: dass die körpereigene Produktion heruntergefahren wird, was das für die Fruchtbarkeit bedeutet, und dass das in aller Regel nichts ist, was man nach ein paar Monaten wieder beendet.',
    positiv: [
      'Deutlich spürbare Wirkung als Injektion',
      'Ärztliche Begleitung mit regelmäßigen Blutwertkontrollen',
      'Der Wechsel vom Gel zur Injektion war bei mir der entscheidende Punkt'
    ],
    negativ: [
      'Als Gel bei mir kaum Wirkung – die Aufnahme über die Haut schwankt stark',
      'Verschreibungspflichtig, nichts für den Eigenversuch',
      'Unterdrückt die körpereigene Produktion, mit Folgen für die Fruchtbarkeit',
      'In der Regel eine langfristige Entscheidung, kein kurzer Versuch'
    ],
    shopId: null,
    quelle: { label: 'Einordnung der Studienlage in Podcast-Folge 22', url: '' }
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
    datum: '2026-08-26',
    dauer: null,
    dosis: null,
    bewertung: 5,
    fazit: 'Von mehreren Bekannten uebereinstimmend gelobt: wirkt schon am selben Tag, mit deutlich spuerbarer Power und Energie.',
    text: 'MOTS-c ist der Eintrag, zu dem ich die einheitlichsten Rueckmeldungen bekomme – und zwar von mehreren Bekannten unabhaengig voneinander. Der Tenor ist immer derselbe: Es wirkt, und es wirkt schnell. Direkt am Tag der Anwendung sei die Power da, spuerbar mehr Energie. Niemand aus dem Kreis hat mir bisher etwas Negatives dazu berichtet.\n\nBesonders interessant fand ich den Hinweis, dass es sich gut mit Retatrutide ergaenzt. Das ergibt inhaltlich Sinn: Wenn beim Abnehmen unter Retatrutide vor allem die fehlende Power als Nachteil genannt wird, adressiert MOTS-c genau diese Luecke.\n\nEinordnung von mir, und die gehoert bei fuenf Sternen besonders dazu: Die Bewertung gibt wieder, wie zufrieden die Berichtenden sind – sie ist kein Wirksamkeitsnachweis. Ich habe MOTS-c nicht selbst angewendet, und es gibt keine Messwerte, nur Eindruecke. Ausserdem ist ein sofort spuerbarer Energieschub genau die Art von Effekt, bei der die Erwartung mitspielt.\n\nMOTS-c ist ein mitochondrial kodiertes Peptid, das den Energiestoffwechsel ueber die AMP-aktivierte Proteinkinase reguliert – denselben Signalweg, den auch Ausdauertraining und Metformin anstossen. Der Mechanismus passt also durchaus zu dem, was berichtet wird. Es ist ein Forschungspeptid ohne Zulassung, und die Datenlage am Menschen ist duenn.',
    positiv: [
      'Wirkung setzt schon am Tag der Anwendung ein',
      'Deutlich spuerbare Power und Energie – uebereinstimmend von mehreren Bekannten berichtet',
      'Bisher keine negativen Rueckmeldungen aus dem Kreis',
      'Ergaenzt sich plausibel mit Retatrutide, wo Antriebslosigkeit das Hauptproblem ist'
    ],
    negativ: [
      'Keine eigene Anwendung, keine Messwerte – die fuenf Sterne geben Zufriedenheit wieder, keinen Nachweis',
      'Ein sofort spuerbarer Energieschub ist besonders anfaellig fuer Erwartungseffekte',
      'Forschungspeptid ohne Zulassung, duenne Humandatenlage'
    ],
    shopId: null,
    quelle: { label: 'Uebereinstimmende Rueckmeldungen mehrerer Bekannter, weitergegeben von Paul · Einordnung in Podcast-Folge 4', url: '' }
  },
  {
    id: 'dsip-spray-umfeld-2026-08',
    substanz: 'DSIP als Nasenspray',
    slug: 'dsip',
    kategorie: 'Peptid',
    emoji: '\u{1F634}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-26',
    dauer: null,
    dosis: null,
    bewertung: 2,
    fazit: 'Als Spray keine wirklich spuerbare Veraenderung. Die Vermutung im Umfeld: Man muesste es wohl spritzen.',
    text: 'Zu DSIP als Nasenspray hoere ich das Gegenteil von MOTS-c: Es passiert wenig. Keine wirklich gute Veraenderung, so wurde es mir erzaehlt – kein deutlich besserer Schlaf, kein klarer Effekt, an dem man es festmachen koennte. Die Vermutung derer, die es probiert haben, ist, dass man es spritzen muesste, damit ueberhaupt etwas ankommt.\n\nEinordnung von mir: Diese Vermutung ist nicht aus der Luft gegriffen. Peptide ueber die Nasenschleimhaut aufzunehmen funktioniert grundsaetzlich schlecht – es sind vergleichsweise grosse Molekuele, und nur ein kleiner Teil schafft es durch die Schleimhaut, bevor der Rest abgebaut oder verschluckt wird. Ein ausbleibender Effekt beim Spray sagt deshalb wenig darueber, ob der Wirkstoff etwas kann; er sagt zuerst etwas ueber den Aufnahmeweg. Genau deshalb steht in dieser Bewertung ausdruecklich „als Nasenspray" und nicht „DSIP".\n\nWas man dazu wissen sollte: DSIP wurde in den siebziger Jahren aus dem Hirnblut von Kaninchen im Tiefschlaf isoliert. Die Humandatenlage ist ausgesprochen duenn und stammt ueberwiegend aus dieser alten Forschungsphase; kontrollierte moderne Studien zum Schlaf gibt es praktisch nicht. Zugelassen ist es nirgends. Dass ein Effekt ausbleibt, ist bei dieser Datenlage also auch nicht ueberraschend – die zwei Sterne stehen fuer die berichtete Erfahrung mit dieser Darreichungsform, nicht fuer ein Urteil ueber den Wirkstoff.',
    positiv: [
      'Keine unerwuenschten Wirkungen berichtet',
      'Nasenspray ist die niedrigschwelligste Darreichungsform'
    ],
    negativ: [
      'Keine spuerbare Veraenderung berichtet – auch nicht beim Schlaf',
      'Peptide werden ueber die Nasenschleimhaut generell schlecht aufgenommen',
      'Sehr duenne Humandatenlage, im Wesentlichen aus den Siebzigern',
      'Nirgends zugelassen, reine Forschungssubstanz'
    ],
    shopId: null,
    quelle: { label: 'Rueckmeldungen aus dem Umfeld, weitergegeben von Paul · Einordnung in Podcast-Folge 12', url: '' }
  },
  {
    id: 'slu-pp-332-umfeld-2026-08',
    substanz: 'SLU-PP-332',
    slug: 'slu-pp-332',
    kategorie: 'Wirkstoff',
    emoji: '\u{1F3C3}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-26',
    dauer: null,
    dosis: null,
    bewertung: null,
    fazit: 'Ein Bericht aus dem Umfeld: super Ausdauer, direkt spuerbar, keine Nebenwirkungen. Ein einzelner Bericht – und die Substanz hat keine einzige Humanstudie.',
    text: 'Mir hat einer aus dem Umfeld davon erzaehlt, bezogen ueber biolabshop. Sein Fazit war knapp und deutlich: mega. Die Ausdauer sei direkt spuerbar besser gewesen, Nebenwirkungen habe er keine gehabt.\n\nEinordnung von mir, und hier ist der Abstand zwischen Bericht und Beleglage groesser als bei fast allem anderen auf dieser Seite: SLU-PP-332 wird als „Sport in Tablettenform" gehandelt, weil es einen Rezeptor aktiviert, der auch beim Ausdauertraining hochgefahren wird. Die dazugehoerigen Daten stammen aber vollstaendig aus Mausversuchen. Es gibt keine einzige veroeffentlichte Studie am Menschen – weder zur Wirkung noch zur Sicherheit. Was also berichtet wird, laesst sich mit nichts abgleichen.\n\nDeshalb steht hier auch keine Sternebewertung. Ein einzelner Bericht ohne Messwerte, zu einer Substanz ohne Humandaten, ist nichts, was ich mit fuenf Sternen versehen wuerde – auch wenn er positiv ausfaellt. Gerade „direkt spuerbar mehr Ausdauer" ist die Art von Effekt, die man schlecht von Erwartung und Tagesform trennen kann, solange niemand vorher und nachher misst.\n\nSLU-PP-332 ist nirgends als Arzneimittel zugelassen und wird als Forschungschemikalie gehandelt. Fuer Wettkampfsportler kommt hinzu, dass Stoffwechsel-Modulatoren dieser Art in den Doping-Bestimmungen erfasst sind.',
    positiv: [
      'Direkt spuerbar bessere Ausdauer berichtet',
      'Keine Nebenwirkungen berichtet',
      'Der Wirkmechanismus passt grundsaetzlich zu dem, was beschrieben wird'
    ],
    negativ: [
      'Einzelner Bericht, keine Messwerte – deshalb bewusst ohne Sternebewertung',
      'Keine einzige Humanstudie, weder zur Wirkung noch zur Sicherheit',
      'Nicht zugelassen, wird als Forschungschemikalie gehandelt',
      'Fuer Wettkampfsportler dopingrelevant'
    ],
    shopId: 'biolabshop',
    quelle: { label: 'Bericht eines Bekannten, weitergegeben von Paul · Einordnung in Podcast-Folge 5', url: '' }
  },
  {
    id: 'melanotan-1-paul-2026-08',
    substanz: 'Melanotan 1 (Afamelanotid)',
    slug: 'melanotan-1',
    kategorie: 'Peptid',
    emoji: '\u{1F31E}',
    autor: 'paul',
    demo: false,
    datum: '2026-08-26',
    dauer: 'wiederholt angewendet',
    dosis: null,
    bewertung: 5,
    fazit: 'Schwaecher als MT2 – aber es wirkt, und es ist sehr angenehm. Fuer mich klare fuenf Sterne.',
    text: 'Melanotan 1 ist das ruhigere der beiden Braeunungspeptide, und genau deshalb ist es fuer mich das bessere.\n\nDie Wirkung ist schwaecher als bei Melanotan 2, das muss man klar sagen. Es geht langsamer, und der Effekt faellt geringer aus. Dafuer ist die Anwendung sehr angenehm – die unangenehmen Begleiterscheinungen, die ich von MT2 kenne, habe ich hier schlicht nicht. Wenn ich zwischen einem starken Effekt mit Nebenwirkungen und einem schwaecheren ohne waehlen kann, nehme ich das schwaechere.\n\nEinordnung von mir: Der Unterschied zwischen den beiden ist keine Frage der Dosis, sondern der Chemie. Melanotan 1 spricht im Wesentlichen den MC1-Rezeptor an, also den, der fuer die Pigmentierung zustaendig ist. Melanotan 2 aktiviert daneben auch MC4 – und da haengen Uebelkeit, Kreislauf und Libido mit dran. Die schwaechere Wirkung und die bessere Vertraeglichkeit sind also zwei Seiten derselben Sache.\n\nWichtig zur Rechtslage, und das ist bei MT1 besonders leicht misszuverstehen: Der Wirkstoff existiert tatsaechlich als zugelassenes Medikament – Afamelanotid, Handelsname Scenesse, als Implantat. Zugelassen ist es aber fuer eine seltene Lichtunvertraeglichkeit, nicht zum Braeunen. Was in der Szene zirkuliert, ist nicht dieses Praeparat und stammt nicht aus dessen Qualitaetskontrolle. Die Zulassung faerbt nicht auf das Graumarktprodukt ab.\n\nWas ich nicht beurteilen kann: die Langzeitsicherheit. Es gibt fuer die kosmetische Anwendung keine Studien, die ueber Jahre laufen. Wer regelmaessig braeunt, ohne dass UV im Spiel ist, sollte seine Muttermale trotzdem dermatologisch im Blick behalten – der pigmentierende Effekt ist derselbe Mechanismus, um den es bei MT2 in den Fallberichten geht.',
    positiv: [
      'Wirkt zuverlaessig, wenn auch langsamer und schwaecher als MT2',
      'Sehr angenehm in der Anwendung – bei mir keine der MT2-typischen Begleiterscheinungen',
      'Selektiver auf den Pigment-Rezeptor MC1, dadurch weniger Nebenwirkungen ueber MC4',
      'Der Wirkstoff ist als Afamelanotid grundsaetzlich pharmazeutisch charakterisiert'
    ],
    negativ: [
      'Deutlich schwaecherer Effekt als Melanotan 2',
      'Zum Braeunen nirgends zugelassen – die Scenesse-Zulassung gilt einer seltenen Lichtunvertraeglichkeit',
      'Graumarktware stammt nicht aus der Qualitaetskontrolle des zugelassenen Praeparats',
      'Keine Langzeitdaten zur kosmetischen Anwendung – Muttermale gehoeren trotzdem kontrolliert'
    ],
    shopId: null,
    quelle: { label: 'Eigene Anwendung, Stand August 2026 · Einordnung der Studienlage in Podcast-Folge 43', url: '' }
  },
  {
    id: 'melanotan-2-paul-2026-08',
    substanz: 'Melanotan 2',
    slug: 'melanotan-2',
    kategorie: 'Peptid',
    emoji: '\u{2600}',
    autor: 'paul',
    demo: false,
    datum: '2026-08-26',
    dauer: 'wiederholt angewendet',
    dosis: null,
    bewertung: 3,
    fazit: 'Braeunt deutlich staerker als MT1. Dafuer jedes Mal rund zwanzig Minuten unangenehme Nebenwirkungen zu Beginn – deshalb nur drei Sterne.',
    text: 'Melanotan 2 wirkt beim Braeunen klar staerker als Melanotan 1. Das ist der Grund, warum es das bekanntere der beiden ist.\n\nDer Haken ist bei mir konstant derselbe, und er ist der Grund fuer den Punktabzug: Es gibt jedes Mal am Anfang etwa zwanzig Minuten, in denen es unangenehm ist. Das ist bei mir nicht auf die ersten Anwendungen beschraenkt und hat sich auch mit der Zeit nicht gelegt – es gehoert einfach dazu. Danach ist es vorbei.\n\nEinordnung von mir: Das passt zum Wirkprinzip. Melanotan 2 aktiviert nicht nur den Pigment-Rezeptor MC1, sondern auch MC4 – und darueber laufen Uebelkeit, Hautroetung und Kreislaufreaktionen. Es ist also keine Verunreinigung und kein Anwendungsfehler, sondern die Substanz selbst. Wer das nicht will, ist mit Melanotan 1 besser bedient; das ist genau die Abwaegung zwischen den beiden.\n\nWorueber man vor der Entscheidung Bescheid wissen sollte, und das wiegt schwerer als die zwanzig Minuten: Es gibt eine dermatologische Fallserie zu Veraenderungen an Muttermalen unter Melanotan (Langan, Journal of the American Academy of Dermatology, 2010) und einen dokumentierten Melanomfall nach Anwendung (Hjuler und Lorentzen, JAMA Dermatology, 2014). Das sind Fallberichte und kein Kausalitaetsbeweis – aber bei einer Substanz, deren ganzer Zweck die Aktivierung pigmentbildender Zellen ist, ist das das Signal, das man ernst nimmt. Wer MT2 nutzt, sollte seine Muttermale regelmaessig dermatologisch kontrollieren lassen. Das ist die eine Sache, die ich hier nicht als Geschmacksfrage stehen lassen will.\n\nMelanotan 2 ist nirgends als Arzneimittel zugelassen, und Behoerden warnen ausdruecklich vor der Anwendung. Kontrollierte Langzeitstudien am Menschen gibt es nicht.',
    positiv: [
      'Deutlich staerkere Braeunungswirkung als Melanotan 1',
      'Der Effekt tritt zuverlaessig ein',
      'Nach den ersten zwanzig Minuten sind die Begleiterscheinungen vorbei'
    ],
    negativ: [
      'Jedes Mal rund zwanzig Minuten unangenehme Nebenwirkungen zu Beginn – bei mir dauerhaft, nicht nur anfangs',
      'Fallberichte zu Muttermalveraenderungen (Langan, JAAD 2010) und ein Melanomfall (JAMA Dermatology 2014)',
      'Nirgends als Arzneimittel zugelassen, Behoerden warnen ausdruecklich',
      'Keine kontrollierten Langzeitdaten am Menschen; Graumarktqualitaet nicht ueberpruefbar'
    ],
    shopId: null,
    quelle: { label: 'Eigene Anwendung, Stand August 2026 · Einordnung der Studienlage in Podcast-Folge 39', url: '' }
  },
  {
    id: 'pt-141-umfeld-2026-08',
    substanz: 'PT-141 (Bremelanotid)',
    slug: 'pt-141',
    kategorie: 'Peptid',
    emoji: '\u{1F525}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-22',
    dauer: null,
    dosis: null,
    bewertung: null,
    fazit: 'Wird als sehr wirksam beschrieben – zu Beginn aber begleitet von rund einer halben Stunde unangenehmer Nebenwirkungen.',
    text: 'Ich habe damit keine eigene Erfahrung. Aber es wird mir auffällig oft und auffällig ähnlich berichtet, deshalb steht es hier.\n\nDie Wirkung wird als sehr deutlich beschrieben – „krass gut“ ist die Formulierung, die ich am häufigsten höre. Der Haken kommt am Anfang: etwa dreißig Minuten lang unangenehme Nebenwirkungen, danach legt es sich.\n\nEinordnung von mir: Das passt zu dem, was aus den Zulassungsstudien bekannt ist. Übelkeit und Hautrötung sind dort die mit Abstand häufigsten Nebenwirkungen, und sie treten kurz nach der Anwendung auf und klingen wieder ab. Der Erfahrungsbericht und die Studienlage erzählen hier also dieselbe Geschichte.\n\nWichtig zur Einordnung: PT-141 ist als Bremelanotid in den USA tatsächlich zugelassen – unter dem Namen Vyleesi, für eine eng umrissene Indikation bei Frauen vor den Wechseljahren. In Europa ist es nicht auf dem Markt. Was in der Szene zirkuliert, stammt nicht aus dieser Zulassung.',
    positiv: [
      'Wirkung wird durchweg als sehr deutlich beschrieben',
      'Nebenwirkungen sind zeitlich begrenzt und klingen ab',
      'Berichte decken sich mit dem Nebenwirkungsprofil aus den Zulassungsstudien'
    ],
    negativ: [
      'Rund dreißig Minuten unangenehme Nebenwirkungen, vor allem anfangs',
      'In Europa nicht auf dem Markt – Bezugsquellen entsprechend unklar',
      'Reines Hörensagen, keine eigene Erfahrung'
    ],
    shopId: null,
    quelle: { label: 'Mehrfach gehörte Rückmeldungen, weitergegeben von Paul · Einordnung in Podcast-Folge 20', url: '' }
  },
  {
    id: 'bpc157-tb500-umfeld-2026-08',
    substanz: 'BPC-157 mit TB-500 (Blend)',
    slug: 'wolverine-stack',
    kategorie: 'Peptid',
    emoji: '\u{1F9BE}',
    autor: 'weitergegeben',
    demo: false,
    datum: '2026-08-22',
    dauer: null,
    dosis: null,
    bewertung: null,
    fazit: 'Mehrfach als sehr hilfreich bei Verletzungen berichtet – besonders bei Sportverletzungen und Tennisellenbogen.',
    text: 'Das ist die Rückmeldung, die mir bei Verletzungen mit Abstand am häufigsten begegnet: BPC-157 hilft, und in Kombination mit TB-500 als Blend noch deutlicher.\n\nZwei Anwendungsfälle werden dabei immer wieder genannt: Sportverletzungen allgemein und der Tennisellenbogen im Besonderen. Bei letzterem höre ich es so oft, dass es auffällt.\n\nEinordnung von mir: Hier ist der Abstand zwischen Erfahrungsbericht und Beleglage besonders groß, und das gehört dazugesagt. Die vielzitierten Sehnen- und Bandheilungsdaten zu BPC-157 stammen praktisch vollständig aus Rattenversuchen. Kontrollierte Studien am Menschen gibt es nicht. Bei Tennisellenbogen kommt hinzu, dass die Beschwerden häufig auch ohne Behandlung über Monate zurückgehen – das macht Einzelberichte schwer zu bewerten.\n\nDazu zwei praktische Punkte: BPC-157 steht seit 2022 auf der Verbotsliste der Welt-Anti-Doping-Agentur, für Wettkampfsportler ist das also keine Option. Und keiner der beiden Stoffe ist als Arzneimittel zugelassen.',
    positiv: [
      'Sehr konsistente Rückmeldungen bei Verletzungen',
      'Der Blend wird als wirksamer beschrieben als BPC-157 allein',
      'Besonders häufig genannt: Sportverletzungen und Tennisellenbogen'
    ],
    negativ: [
      'Belege stammen fast ausschließlich aus Tierversuchen, keine kontrollierten Humanstudien',
      'Tennisellenbogen heilt oft auch von selbst – Einzelberichte sind hier wenig aussagekräftig',
      'BPC-157 steht seit 2022 auf der WADA-Verbotsliste',
      'Beide Stoffe nicht als Arzneimittel zugelassen'
    ],
    shopId: null,
    quelle: { label: 'Mehrfach gehörte Rückmeldungen, weitergegeben von Paul · Einordnung in den Podcast-Folgen 2, 3 und 36', url: '' }
  }
];

const SHOPS = [
  // ---------------------------------------------------------------------------
  // Alle Angaben sind WEITERGEGEBENE Berichte Dritter, Stand August 2026 – keine
  // eigenen Feststellungen. In diesem Umfeld aendert sich das schnell.
  // Peptid- und Graumarkt-Anbieter bewusst OHNE klickbare Links: nicht zugelassene
  // Mittel sollen von dieser Seite aus nicht aktiv bezogen werden koennen.
  // Regulaere Shops mit Affiliate-Vereinbarung (aktiv: true) bekommen einen Link
  // samt Anzeige-Kennzeichnung. Warnungen bekommen nie einen Link.
  // ---------------------------------------------------------------------------
  {
    id: 'moleqlar',
    name: 'MoleQlar',
    demo: false,
    url: 'https://moleqlar.com/',
    land: 'DE/AT',
    kategorien: ['Supplements', 'Longevity'],
    bewertung: 5,
    versand: 'Zuverlässig, Versand innerhalb der EU.',
    zahlung: 'Übliche Zahlarten.',
    qualitaet: 'Einzelstoff-Pulver mit Reinheitsangaben; TMG aus der Zuckerrübe. Siehe eigener Erfahrungsbericht.',
    zoll: 'Kein Thema, Versand innerhalb der EU.',
    erfahrung: 'Eigene Erfahrung: Ich nutze das TMG-Pulver, das Resveratrol-Pulver und zwischendurch das Kreatin. Preislich klar im oberen Bereich, dafür konstante Qualität. Stand August 2026.',
    // Affiliate-Partnerschaft ab August 2026. Erst nach Unterzeichnung der
    // Kooperationsbedingungen auf aktiv: true setzen – vorher besteht keine
    // Vereinbarung, auf die man sich berufen koennte.
    // Der Eigenbedarfs-Code des Anbieters ist NICHT oeffentlich – der gehoert
    // Paul persoenlich und darf hier nirgends auftauchen.
    // Standardprovision laut Dashboard: 10 % netto pro Bestellung.
    affiliate: {
      aktiv: true,
      url: 'https://moleqlar.com/?sca_ref=12147369.HTahZdm566HChkU',
      codes: [
        { code: 'biohackingkompakt10', prozent: '10 %', fuer: 'auf die gesamte Bestellung, ohne Mindestbestellwert' }
      ]
    }
  },
  {
    id: 'naturtreu',
    name: 'Naturtreu',
    demo: false,
    url: 'https://naturtreu.de/',
    land: 'DE',
    kategorien: ['Supplements'],
    bewertung: 5,
    versand: 'Zuverlässig, Versand aus Deutschland.',
    zahlung: 'Übliche Zahlarten.',
    qualitaet: 'Transparente Zusammensetzung, laborgeprüfte Rohstoffe nach Herstellerangabe.',
    zoll: 'Kein Thema, Versand innerhalb Deutschlands.',
    erfahrung: 'Eigene Erfahrung: Ich nutze mehrere Produkte dauerhaft, vor allem Zink, das Kreatinquelle-Pulver und Florazauber. Siehe den ausführlichen Erfahrungsbericht weiter oben. Stand August 2026.',
    // Affiliate-Partnerschaft besteht seit August 2026 (Direktprogramm, nicht Awin).
    // url und code werden eingetragen, sobald beides vom Anbieter bestaetigt ist.
    // Sobald aktiv: true, kennzeichnet die App automatisch als Anzeige.
    // Zwei zugeteilte Codes (26.08.2026), gleichwertig dargestellt.
    affiliate: {
      aktiv: true,
      url: 'https://naturtreu.de/?sca_ref=12145206.MbLQiZOVbP',
      codes: [
        { code: 'NT15-KOMPAKT', prozent: '15 %', fuer: 'für Neukunden' },
        { code: 'NT10-KOMPAKT', prozent: '10 %', fuer: 'für Bestandskunden' }
      ]
    }
  },
  {
    id: 'shop-apotheke',
    name: 'Shop Apotheke',
    demo: false,
    url: 'https://www.shop-apotheke.com/',
    land: 'NL/DE',
    kategorien: ['Supplements', 'Apotheke'],
    bewertung: 5,
    versand: 'Zuverlässig, EU-Versandapotheke mit deutschem Kundenservice.',
    zahlung: 'Übliche Zahlarten inkl. Rechnung.',
    qualitaet: 'Apothekenpflichtige und frei verkäufliche Ware aus regulären Lieferketten – bei Nahrungsergänzung der Punkt, der die Bezugsquelle vom Graumarkt unterscheidet.',
    zoll: 'Kein Thema, Versand aus der EU.',
    erfahrung: 'Eigene Erfahrung: Ich bestelle dort regelmäßig und bin sehr zufrieden. Für manche Produkte sind sie preislich schlicht unschlagbar – gerade bei Standard-Nahrungsergänzung wie Vitaminen, Mineralstoffen und Omega-3. Für Wirkstoffe, für die es keinen spezialisierten Anbieter gibt, ist es ohnehin oft die einzige seriöse Adresse. Stand August 2026.',
    // Awin-Programm, zugelassen am 26.08.2026. Advertiser-ID 13808, Publisher-ID 3056483.
    // Cookielaufzeit 30 Tage, Autobestaetigung nach 90 Tagen.
    // Provision: Neukunden 12 %, mit Gutschein 8 %; Bestandskunden 3,5 %, mit Gutschein 2,5 %.
    // Ausdruecklich AUSGESCHLOSSEN sind rezeptpflichtige Medikamente, Buecher,
    // Versandkosten und Saeuglingsanfangsnahrung. Auf Rx also nie verlinken –
    // das waere ohnehin Publikumswerbung fuer verschreibungspflichtige
    // Arzneimittel (§ 10 HWG) und wuerde auch keine Provision ausloesen.
    // codes bleibt leer: Es gibt hier keinen Kundenrabatt. Die App zeigt dann
    // korrekt keinen Rabattblock an, aber Kennzeichnung und rel-Attribute.
    affiliate: {
      aktiv: true,
      url: 'https://www.awin1.com/cread.php?awinmid=13808&awinaffid=3056483&ued=https%3A%2F%2Fwww.shop-apotheke.com%2F',
      codes: []
    }
  },
  {
    id: 'biolabshop',
    name: 'biolabshop.de',
    demo: false,
    url: '',
    land: 'DE',
    kategorien: ['Peptide'],
    bewertung: 5,
    versand: 'Schnelle Lieferung, mehrfach übereinstimmend berichtet.',
    zahlung: null,
    qualitaet: 'Qualität wurde durchweg als gut beschrieben.',
    zoll: null,
    erfahrung: 'Von mehreren Leuten unabhaengig als seriös beschrieben – und mit der bisher besten Auswahl. Nicht ganz billig, dafür schnell und zuverlässig. Stand August 2026.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'europa-peptide',
    name: 'europa-peptide.de',
    demo: false,
    url: '',
    land: 'DE',
    kategorien: ['Peptide'],
    bewertung: 4,
    versand: 'Lieferung wurde als seriös und zuverlässig beschrieben.',
    zahlung: null,
    qualitaet: 'Qualität wurde als gut beschrieben.',
    zoll: null,
    erfahrung: 'Ebenfalls mehrfach als seriös berichtet, ebenfalls nicht ganz billig. Wichtig: Auf die genaue Schreibweise achten – es existiert eine fast identische Domain ohne das End-e, siehe Warnung weiter unten. Stand August 2026.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'synthagenlabs',
    name: 'synthagenlabs.com',
    demo: false,
    url: '',
    land: 'international',
    kategorien: ['Peptide'],
    bewertung: 4,
    versand: 'Schnelle Lieferung berichtet.',
    zahlung: null,
    qualitaet: null,
    zoll: 'Nicht-EU-Anbieter – Einfuhrabgaben möglich.',
    erfahrung: 'Kleine Auswahl an Vials, dafür sehr günstig und schnell geliefert. Wer etwas Bestimmtes sucht, wird hier nicht immer fündig. Stand August 2026.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'moleculon',
    name: 'moleculon.io (Moleculon Europe)',
    demo: false,
    url: '',
    land: 'EU',
    kategorien: ['Peptide'],
    bewertung: 4,
    versand: 'Ablauf und Lieferung wurden als reibungslos beschrieben.',
    zahlung: null,
    qualitaet: 'Zur tatsächlichen Wirksamkeit der Produkte liegen uns keine belastbaren Rückmeldungen vor – das ist die offene Frage bei diesem Anbieter.',
    zoll: null,
    erfahrung: 'Positiv berichtet: Bestellung, Abwicklung und Lieferung funktionieren zuverlässig. Die Preise schwanken allerdings spürbar, ein Vergleich vor der Bestellung lohnt sich. Was die Wirkung der gelieferten Produkte angeht, ist die Rückmeldungslage dünn – dazu würden wir gern mehr wissen. Stand August 2026.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'warnung-europa-peptid',
    name: 'europa-peptid.de',
    warnung: true,
    demo: false,
    url: '',
    land: 'Tippfehler-Domain',
    kategorien: [],
    bewertung: null,
    versand: null,
    zahlung: null,
    qualitaet: null,
    zoll: null,
    erfahrung: 'Uns wurde berichtet, dass es sich hierbei nicht um den seriösen Anbieter handelt, sondern um eine Nachahmung. Der Domainname unterscheidet sich nur durch das fehlende End-e von europa-peptide.de. Nachprüfbar ist: Beide Domains existieren, liegen aber auf unterschiedlichen Servern und werden nicht vom selben Betreiber geführt (geprüft am 22.08.2026). Wer bestellt, sollte die Adresse Zeichen für Zeichen kontrollieren, statt aus der Suchmaschine heraus zu klicken.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'warnung-chinesepeptidecompany',
    name: 'chinesepeptidecompany.net',
    warnung: true,
    demo: false,
    url: '',
    land: 'China / kein Firmensitz angegeben',
    kategorien: [],
    bewertung: null,
    versand: null,
    zahlung: null,
    qualitaet: null,
    // Basis dieser Einordnung ist ausdruecklich KEIN Fremdbericht, sondern eine
    // eigene Pruefung der oeffentlich abrufbaren Seiten am 26.08.2026. Alles,
    // was hier steht, stammt von der Seite selbst und ist nachpruefbar. Es wird
    // bewusst kein Betrug behauptet – nur beschrieben, was dort zu lesen ist.
    erfahrung: 'Hier haben wir selbst nachgesehen, statt Berichte weiterzugeben – und die Seite sagt genug ueber sich selbst. Was am 26.08.2026 nachpruefbar war: Es gibt keinen Firmensitz, keine Registernummer und kein Impressum, nur den Namen „Chinese Peptide Company Co., Ltd." und die Ortsangabe Hangzhou. Die Adressen /terms und /privacy liefern den Inhalt der Ueber-uns-Seite aus – es existieren also weder Geschaeftsbedingungen noch eine Datenschutzerklaerung. Der Kontakt laeuft ueber eine E-Mail-Adresse und Telegram; WhatsApp ist als „temporarily unavailable" ausgewiesen. Am wichtigsten ist der Zahlungsweg: Die Seite erklaert selbst, dass Kartenzahlungen im Hintergrund in Krypto umgewandelt werden – man zahle „in USD as normal", ohne selbst mit Krypto zu tun zu haben. Wer so zahlt, hat keinen Kartenzahlungs-Schutz und damit keine Rueckbuchungsmoeglichkeit, auch wenn es sich wie eine normale Kartenzahlung anfuehlt. Direkte Kryptozahlung wird mit 15 % Rabatt beworben. Dazu kommt eine „100% Delivery Guarantee", die ausdruecklich den Fall einer Beschlagnahme durch den Zoll einschliesst, und ein Versand, der laut eigener Angabe unbeschriftet und ohne Branding erfolgt. Uns liegen keine Berichte ueber nicht gelieferte Ware vor. Das hier ist deshalb keine Betrugsbehauptung, sondern eine Risikoeinordnung: Ohne Firmensitz, ohne Geschaeftsbedingungen und ohne Rueckbuchungsmoeglichkeit gibt es im Streitfall niemanden, an den man sich wenden koennte.',
    zoll: 'Der Anbieter wirbt selbst damit, bei Beschlagnahme durch den Zoll kostenlos nachzuliefern – die Einfuhr ist also einkalkuliert und nicht die Ausnahme.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'warnung-qingdaosigma',
    name: 'qingdaosigma.com',
    warnung: true,
    demo: false,
    url: '',
    land: 'international',
    kategorien: [],
    bewertung: null,
    versand: null,
    zahlung: null,
    qualitaet: null,
    zoll: null,
    erfahrung: 'Uns wurde von mehreren Seiten berichtet, dass hier nach Zahlung keine Ware ankam. Wir haben das nicht selbst geprüft und geben es als das wieder, was es ist: übereinstimmende Fremdberichte, Stand August 2026.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  },
  {
    id: 'warnung-driada-klone',
    name: 'Driada Medical – Klon-Shops',
    warnung: true,
    demo: false,
    url: '',
    land: 'diverse Domains',
    kategorien: [],
    bewertung: null,
    versand: null,
    zahlung: null,
    qualitaet: null,
    zoll: null,
    erfahrung: 'Hier geht es nicht um den Hersteller selbst, sondern um sein Umfeld: Uns wurde berichtet, dass unter verschiedenen Adressen Nachahmer-Shops auftreten und es entsprechend schwer ist, den echten Anbieter zu erkennen. Das ist das gefährlichste Muster in dieser Liste, weil es sich nicht an einer einzelnen Domain festmachen lässt. Wer hier bestellt, sollte die Bezugsquelle über den Hersteller selbst verifizieren und nicht über Suchergebnisse oder Forenlinks. Stand August 2026.',
    affiliate: { aktiv: false, url: '', code: '', rabatt: '' }
  }
];

const ERFAHRUNG_KATEGORIEN = [
  { id: 'all',          label: 'Alles' },
  { id: 'Supplement',   label: 'Supplements' },
  { id: 'Peptid',       label: 'Peptide' },
  { id: 'Wirkstoff',    label: 'Wirkstoffe' },
  { id: 'Behandlung',   label: 'Behandlungen' }
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
  'phoeser@web.de'
];
