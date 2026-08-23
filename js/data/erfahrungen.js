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
  // Bewusst OHNE klickbare Links: nicht zugelassene Mittel sollen von dieser
  // Seite aus nicht aktiv bezogen werden koennen.
  // ---------------------------------------------------------------------------
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
  // 'deine-google-adresse@gmail.com'
];
