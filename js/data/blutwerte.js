/* Blutwerte – Longevity-Panel
 * Quelle: Biohacking Kompakt, Folge 58 „Blutwerte für Biohacker – das Longevity-Panel im Faktencheck"
 * Referenzbereiche zusätzlich abgeglichen mit gängigen deutschen Laborangaben
 * (u.a. Labor Dr. Fenner, Endokrinologikum/Aesculabor, Labor Düsseldorf, MVZ Dortmund, Labor 28).
 *
 * Gliederung nach „Baustellen" wie in der Folge:
 *   zucker       – Zuckerstoffwechsel
 *   herz         – Herz und Gefäße
 *   entzuendung  – Entzündung
 *   hormone      – Hormon-Achsen
 *   naehrstoffe  – Nährstoff-Tanks
 *   organe       – Organ-Basics
 *
 * Felder je Marker:
 *   id, name, kurz, baustelle, einheit, referenz, optimal (oder null),
 *   bedeutung, hoch, niedrig (oder null), hebel[], stoerfaktoren[],
 *   folge (Podcast-Folgennummer oder null), einsteiger (Fünf-Sterne-Minimum)
 *
 * WICHTIG: Reine Information, keine Diagnose und keine Therapieempfehlung.
 * Referenzbereiche sind labor- und methodenabhängig – es gilt immer der Bereich
 * auf dem eigenen Befund. Auffällige Werte gehören in ärztliche Interpretation.
 */
const BLUTWERTE = [

  // ============ ZUCKERSTOFFWECHSEL (4) ============
  {
    id: 'nuechternglukose',
    name: 'Nüchternglukose',
    kurz: 'Glukose',
    baustelle: 'zucker',
    einheit: 'mg/dl',
    referenz: '70–99 mg/dl (3,9–5,5 mmol/l); 100–125 mg/dl gilt als Graubereich',
    optimal: null,
    bedeutung: 'Der Blutzuckerwert nach mindestens acht Stunden ohne Nahrung. Er zeigt, wie gut der Körper den Zucker im nüchternen Zustand in Schach hält. In Folge 58 wird er als Basiswert des Zuckerstoffwechsels beschrieben – aussagekräftig aber vor allem zusammen mit Insulin und HbA1c, weil er erst spät reagiert.',
    hoch: 'Kann auf eine gestörte Zuckerverwertung hindeuten. Auch Stress, schlechter Schlaf oder Alkohol am Vorabend können den Wert kurzfristig anheben.',
    niedrig: 'Sehr niedrige Werte können auf Unterzuckerung hindeuten und werden meist im Zusammenhang mit Beschwerden eingeordnet.',
    hebel: [
      'Bewegung nach dem Essen – in der Folge als Sofort-Hebel genannt',
      'Krafttraining und allgemein mehr Muskelmasse',
      'Kohlenhydratmenge und -qualität, Reihenfolge der Mahlzeitbestandteile',
      'Schlafdauer und Schlafqualität',
      'Essensfenster / Zeitfenster-Essen',
      'Berberin als in der Szene diskutierte pflanzliche Option (Folge 48)'
    ],
    stoerfaktoren: [
      'Nicht wirklich nüchtern (auch Milch im Kaffee zählt)',
      'Alkohol am Vorabend',
      'Kurze oder schlechte Nacht',
      'Akuter Stress oder Infekt',
      'Hartes Training am Vortag'
    ],
    folge: 79,
    einsteiger: false
  },
  {
    id: 'hba1c',
    name: 'HbA1c (Langzeitzucker)',
    kurz: 'HbA1c',
    baustelle: 'zucker',
    einheit: '%',
    referenz: 'unter 5,7 %; 5,7–6,4 % gilt als Graubereich, ab 6,5 % als diabetischer Bereich',
    optimal: 'unter 5,4 % – in Folge 58 als „Longevity-grün" beschrieben',
    bedeutung: 'Der Anteil des Blutfarbstoffs, an den sich Zucker angelagert hat. Weil rote Blutkörperchen rund drei Monate leben, bildet HbA1c den durchschnittlichen Blutzucker der letzten acht bis zwölf Wochen ab. Er ist damit die Gedächtnis-Variante des Zuckerstoffwechsels und schwankt kaum tagesabhängig.',
    hoch: 'Kann auf eine über Wochen erhöhte Zuckerbelastung hindeuten. In der Folge wird ein Wert am oberen Rand als frühes Muster beschrieben, lange bevor daraus eine Diagnose würde.',
    niedrig: 'Niedrige Werte können auch durch verkürzte Lebensdauer der roten Blutkörperchen entstehen, etwa bei Blutarmut – dann bildet der Wert den Zucker nicht korrekt ab.',
    hebel: [
      'Bewegung nach dem Essen und regelmäßiges Krafttraining',
      'Kohlenhydratqualität und Ballaststoffe',
      'Essensfenster / Fastenintervalle (Folge 59)',
      'Gewichts- und Körperfettentwicklung',
      'Berberin als in der Szene diskutierte Option (Folge 48)'
    ],
    stoerfaktoren: [
      'Blutarmut, Eisenmangel oder Hämoglobin-Varianten verzerren den Wert',
      'Kürzliche Blutspende oder Bluttransfusion',
      'Starker Eisenmangel kann den Wert scheinbar anheben',
      'Nierenerkrankungen können ihn verfälschen'
    ],
    folge: 48,
    einsteiger: true
  },
  {
    id: 'insulin-nuechtern',
    name: 'Nüchtern-Insulin',
    kurz: 'Insulin',
    baustelle: 'zucker',
    einheit: 'µU/ml (mU/l)',
    referenz: 'etwa 2–25 µU/ml, laborabhängig (häufig 2,6–24,9 µU/ml)',
    optimal: null,
    bedeutung: 'Die Menge Insulin, die der Körper nüchtern aufwenden muss, um den Blutzucker normal zu halten. In Folge 58 wird das Nüchtern-Insulin als „unterschätzter Star" und Frühwarnsystem beschrieben: Der Blutzucker kann jahrelang normal bleiben, während die Bauchspeicheldrüse still immer mehr Insulin nachlegt.',
    hoch: 'Kann auf eine beginnende Insulinresistenz hindeuten – oft Jahre, bevor Glukose oder HbA1c auffällig werden.',
    niedrig: 'Sehr niedrige Werte kommen bei sehr schlanken, stoffwechselgesunden Menschen und in Fastenphasen vor; im Zusammenhang mit hohem Blutzucker sind sie anders zu bewerten.',
    hebel: [
      'Krafttraining und Muskelmasse als Zuckerspeicher',
      'Spaziergänge nach dem Essen',
      'Essensfenster und Fastenintervalle (Folge 59)',
      'Reduktion von viszeralem Fett',
      'Schlaf – Schlafmangel verschlechtert die Insulinwirkung',
      'Berberin als in der Szene diskutierte Option (Folge 48)'
    ],
    stoerfaktoren: [
      'Nicht wirklich nüchtern gemessen',
      'Mehrtägiges Fasten oder sehr kohlenhydratarme Kost senken den Wert vorübergehend',
      'Kohlenhydratreiche Mahlzeit am Vorabend',
      'Akuter Stress, Infekt, Schlafmangel'
    ],
    folge: 23,
    einsteiger: true
  },
  {
    id: 'homa-index',
    name: 'HOMA-Index',
    kurz: 'HOMA-IR',
    baustelle: 'zucker',
    einheit: 'Index (berechnet)',
    referenz: 'unter 2 gilt als unauffällig, 2–2,5 als Graubereich, über 2,5 als Hinweis auf Insulinresistenz',
    optimal: 'deutlich unter 2, ambitionierte Ziele in der Szene unter 1 (Folge 58)',
    bedeutung: 'Ein Rechenwert aus Nüchternglukose und Nüchtern-Insulin, der abschätzt, wie gut die Zellen auf Insulin ansprechen. Er kostet keine zusätzliche Blutabnahme, sondern fällt als Nebenprodukt der beiden Einzelwerte an. In Folge 58 ist er der Zusammenfassungswert der Baustelle Zuckerstoffwechsel.',
    hoch: 'Kann auf eine verminderte Insulinempfindlichkeit hindeuten. Im Fallbeispiel der Folge liegt der Wert bei drei, während alle Einzelwerte noch als „normal" gelten.',
    niedrig: 'Niedrige Werte sprechen in der Regel für eine gute Insulinempfindlichkeit.',
    hebel: [
      'Alles, was Glukose und Insulin einzeln beeinflusst',
      'Krafttraining und Alltagsbewegung',
      'Gewichts- und Bauchumfangsentwicklung',
      'Essensfenster (Folge 59)',
      'Schlafqualität'
    ],
    stoerfaktoren: [
      'Übernimmt alle Störfaktoren von Glukose und Insulin',
      'Nur sinnvoll, wenn beide Werte aus derselben nüchternen Blutabnahme stammen',
      'Fastenphasen oder Low Carb kurz vor der Messung'
    ],
    folge: 59,
    einsteiger: false
  },

  // ============ HERZ UND GEFÄSSE (4) ============
  {
    id: 'apob',
    name: 'Apolipoprotein B',
    kurz: 'ApoB',
    baustelle: 'herz',
    einheit: 'mg/dl',
    referenz: 'laborabhängig, häufig etwa 60–120 mg/dl',
    optimal: 'Zielwerte werden risikoabhängig angegeben: unter 100 mg/dl bei moderatem, unter 80 mg/dl bei hohem und unter 65 mg/dl bei sehr hohem Herz-Kreislauf-Risiko',
    bedeutung: 'ApoB zählt die Anzahl der potenziell gefäßschädigenden Transport-Partikel im Blut – jedes dieser Partikel trägt genau ein ApoB-Molekül. In Folge 58 wird beschrieben, dass die Szene das klassische LDL-Cholesterin zunehmend durch ApoB ablöst: Nicht die transportierte Ladung, sondern die Partikelzahl, die in der Gefäßwand steckenbleiben kann, gilt als das entscheidende Maß.',
    hoch: 'Kann auf ein erhöhtes Risiko für Gefäßablagerungen hindeuten, auch wenn das LDL-Cholesterin unauffällig aussieht.',
    niedrig: 'Niedrige Werte gelten aus Gefäßsicht als günstig.',
    hebel: [
      'Menge und Art der Nahrungsfette, besonders gesättigte Fette',
      'Ballaststoffe',
      'Körpergewicht und Bauchfett',
      'Ausdauertraining',
      'Bei Auffälligkeiten ärztliche Abklärung – medikamentöse Optionen gehören in ärztliche Hand'
    ],
    stoerfaktoren: [
      'Kann auch nicht nüchtern gemessen werden, schwankt aber mit dem Essverhalten der Vortage',
      'Akute Infekte verändern den Fettstoffwechsel vorübergehend',
      'Starke Gewichtsveränderung oder Fastenphasen kurz vor der Messung',
      'Schilddrüsenfunktion beeinflusst den Fettstoffwechsel'
    ],
    folge: null,
    einsteiger: true
  },
  {
    id: 'ldl',
    name: 'LDL-Cholesterin',
    kurz: 'LDL',
    baustelle: 'herz',
    einheit: 'mg/dl',
    referenz: 'klassisch unter 130–160 mg/dl je nach Labor; Leitlinien nennen risikoabhängige Zielwerte, bei niedrigem Risiko unter 116 mg/dl',
    optimal: null,
    bedeutung: 'Die Cholesterinmenge, die in den LDL-Partikeln transportiert wird – der klassische Gefäßmarker aus jedem Standard-Check. In Folge 58 wird er nicht abgeschafft, aber relativiert: Er misst die Ladung, nicht die Partikelzahl, und kann deshalb bei gleichem LDL-Wert sehr unterschiedliche Partikelzahlen verdecken.',
    hoch: 'Kann auf ein erhöhtes Risiko für Gefäßablagerungen hindeuten; die Einordnung erfolgt immer im Gesamtrisiko-Kontext.',
    niedrig: 'Sehr niedrige Werte kommen genetisch, bei bestimmten Erkrankungen oder unter cholesterinsenkender Therapie vor.',
    hebel: [
      'Gesättigte Fette in der Ernährung',
      'Ballaststoffe, besonders lösliche',
      'Körpergewicht',
      'Ausdauerbewegung',
      'Bei Auffälligkeiten ärztliche Abklärung'
    ],
    stoerfaktoren: [
      'Meist rechnerisch aus anderen Werten ermittelt – bei hohen Triglyceriden wird die Rechnung ungenau',
      'Akuter Infekt oder Entzündung',
      'Starke Gewichtsveränderung, Fasten oder Crash-Diät vor der Messung',
      'Schilddrüsenunterfunktion'
    ],
    folge: null,
    einsteiger: false
  },
  {
    id: 'lpa',
    name: 'Lipoprotein(a)',
    kurz: 'Lp(a)',
    baustelle: 'herz',
    einheit: 'mg/dl bzw. nmol/l',
    referenz: 'unauffällig meist unter 30 mg/dl bzw. unter 75 nmol/l; ab etwa 50 mg/dl bzw. 125 nmol/l wird von einem erhöhten Risiko gesprochen',
    optimal: null,
    bedeutung: 'Ein Lipoprotein, dessen Höhe fast vollständig genetisch festgelegt ist und sich über das Leben kaum verändert. In Folge 58 gilt deshalb die Regel: einmal im Leben messen. Es ist ein eigenständiger Risikofaktor, von dem laut Folge etwa die Hälfte der Betroffenen nichts weiß.',
    hoch: 'Kann auf ein erblich erhöhtes Herz-Kreislauf-Risiko hindeuten – ein Grund, die übrigen beeinflussbaren Faktoren umso genauer im Blick zu behalten.',
    niedrig: 'Niedrige Werte gelten als unauffällig und müssen nicht kontrolliert werden.',
    hebel: [
      'Durch Lebensstil praktisch nicht beeinflussbar – das ist der Kern der Aussage in Folge 58',
      'Bei erhöhtem Wert rücken die anderen Gefäßfaktoren in den Vordergrund: ApoB, Blutdruck, Rauchen, Blutzucker',
      'Familiengespräch: Der Wert ist erblich und betrifft oft Verwandte ersten Grades'
    ],
    stoerfaktoren: [
      'Angabe in mg/dl und nmol/l ist nicht direkt umrechenbar – Einheit auf dem Befund beachten',
      'Kann bei akuter Entzündung vorübergehend ansteigen',
      'Nierenerkrankungen können den Wert verändern'
    ],
    folge: null,
    einsteiger: false
  },
  {
    id: 'trig-hdl-ratio',
    name: 'Triglyceride/HDL-Ratio',
    kurz: 'TG/HDL',
    baustelle: 'herz',
    einheit: 'Quotient (mg/dl geteilt durch mg/dl)',
    referenz: 'kein offizieller Laborreferenzbereich – wird aus zwei Einzelwerten berechnet',
    optimal: 'unter 2 gilt in Folge 58 als gut, um 1 herum als stark',
    bedeutung: 'Das Verhältnis der Triglyceride zum HDL-Cholesterin, beide in mg/dl. Der Quotient ist ein Alltagsmarker, der sich aus dem normalen Lipidprofil ohne Zusatzkosten ergibt und eng mit der Insulinempfindlichkeit zusammenhängt. In Folge 58 taucht er sowohl in der Gefäß-Baustelle als auch im Fallbeispiel auf.',
    hoch: 'Kann auf ein ungünstiges Stoffwechselmuster hindeuten – im Fallbeispiel der Folge liegt der Wert über drei und passt zum Bild einer beginnenden Insulinresistenz.',
    niedrig: 'Niedrige Werte gelten als günstiges Zeichen für den Fett- und Zuckerstoffwechsel.',
    hebel: [
      'Zucker- und Alkoholmenge treiben die Triglyceride',
      'Bewegung und Ausdauertraining heben tendenziell das HDL',
      'Gewichts- und Bauchumfangsreduktion',
      'Omega-3-Fettsäuren senken Triglyceride (Folge 42)',
      'Essensfenster (Folge 59)'
    ],
    stoerfaktoren: [
      'Triglyceride reagieren stark auf die letzte Mahlzeit – nur nüchtern sinnvoll',
      'Alkohol am Vorabend hebt die Triglyceride zuverlässig an',
      'Achtung bei der Einheit: In mmol/l gerechnet ergibt sich ein völlig anderer Zahlenwert',
      'Akuter Infekt'
    ],
    folge: 42,
    einsteiger: false
  },

  // ============ ENTZÜNDUNG (2) ============
  {
    id: 'hscrp',
    name: 'hsCRP (hochsensitives CRP)',
    kurz: 'hsCRP',
    baustelle: 'entzuendung',
    einheit: 'mg/l',
    referenz: 'unter 1 mg/l gilt als niedriges, 1–3 mg/l als mittleres, über 3 mg/l als hohes Risiko-Cluster; Werte über 10 mg/l sprechen meist für eine akute Entzündung',
    optimal: 'unter 1 mg/l ist laut Folge 58 gut, die Longevity-Szene freut sich unter 0,5 mg/l',
    bedeutung: 'Das hochsensitive C-reaktive Protein misst niedrigschwellige Entzündungsaktivität – deutlich feiner als das normale CRP. In Folge 58 ist es das messbare Gesicht des „Inflammaging", also der stillen Dauerentzündung, die als Alterungstreiber diskutiert wird.',
    hoch: 'Kann auf eine akute Entzündung, einen Infekt oder – bei dauerhaft leicht erhöhten Werten – auf eine Schwelentzündung hindeuten. Auch Übergewicht, Zahnprobleme und Schlafmangel gehen häufig mit höheren Werten einher.',
    niedrig: 'Niedrige Werte gelten als günstig.',
    hebel: [
      'Körperfett, besonders Bauchfett',
      'Schlafmenge und -qualität (Folge 62)',
      'Omega-3-Fettsäuren (Folge 42)',
      'Regelmäßige Bewegung – langfristig senkend, kurzfristig anhebend',
      'Zahn- und Zahnfleischgesundheit',
      'Alkoholmenge (Folge 77)',
      'Rauchstopp'
    ],
    stoerfaktoren: [
      'Infekte – auch eine abklingende Erkältung vervielfacht den Wert; laut Folge 58 lieber vier Wochen warten',
      'Hartes Training in den Tagen davor',
      'Verletzungen, Operationen, Zahnbehandlungen',
      'Akuter Schlafmangel oder starker Stress'
    ],
    folge: 46,
    einsteiger: true
  },
  {
    id: 'homocystein',
    name: 'Homocystein',
    kurz: 'HCY',
    baustelle: 'entzuendung',
    einheit: 'µmol/l',
    referenz: '5–15 µmol/l; über 15 µmol/l gilt als moderat erhöht',
    optimal: 'unter 10 µmol/l wird in Folge 58 als Ziel genannt',
    bedeutung: 'Ein Zwischenprodukt des Eiweißstoffwechsels, das der Körper mit Hilfe von B-Vitaminen wieder abbaut. Fehlen B12, Folat oder B6, staut sich Homocystein an. In Folge 58 wird es als Marker beschrieben, der Gefäße und Gehirn belastet – und der über die B-Vitamine simple Steuerhebel hat.',
    hoch: 'Kann auf einen Mangel an B12, Folat oder B6 hindeuten, auf eine eingeschränkte Nierenfunktion oder auf genetische Varianten im Folatstoffwechsel.',
    niedrig: 'Niedrige Werte gelten als unauffällig.',
    hebel: [
      'Vitamin B12 – besonders bei pflanzenbetonter Ernährung',
      'Folat aus grünem Gemüse und Hülsenfrüchten',
      'Vitamin B6',
      'Alkoholmenge und Kaffeekonsum wirken in Studien ungünstig',
      'Nierenfunktion im Blick behalten'
    ],
    stoerfaktoren: [
      'Blutprobe muss zügig verarbeitet werden – langes Stehen der Probe hebt den Wert technisch an',
      'Eingeschränkte Nierenfunktion',
      'Bestimmte Medikamente greifen in den Folatstoffwechsel ein',
      'Nicht nüchtern gemessen'
    ],
    folge: null,
    einsteiger: false
  },

  // ============ HORMON-ACHSEN (6) ============
  {
    id: 'igf1',
    name: 'IGF-1',
    kurz: 'IGF-1',
    baustelle: 'hormone',
    einheit: 'ng/ml',
    referenz: 'stark altersabhängig – z.B. etwa 130–343 ng/ml mit Mitte zwanzig, 85–220 ng/ml Mitte vierzig, 60–190 ng/ml um die sechzig; immer den altersbezogenen Bereich des Labors verwenden',
    optimal: 'in Folge 58 als „im mittleren Alters-Referenzbereich halten, nicht am Anschlag" beschrieben',
    bedeutung: 'IGF-1 ist der Botenstoff, über den Wachstumshormon einen Großteil seiner Wirkung entfaltet – und damit das praktikable Fenster in die Wachstumshormon-Achse. In Folge 58 steht er für die Balance-Debatte der Longevity-Szene: Zu wenig gilt als ungünstig für Muskeln und Regeneration, dauerhaft sehr hohe Werte werden im Zusammenhang mit Zellwachstum diskutiert.',
    hoch: 'Kann auf eine hohe Aktivität der Wachstumshormon-Achse hindeuten; deutlich erhöhte Werte gehören ärztlich abgeklärt.',
    niedrig: 'Kann auf eine niedrige Wachstumshormon-Aktivität, auf Unterernährung, Leberprobleme oder eine längere Phase starker Kalorienrestriktion hindeuten.',
    hebel: [
      'Eiweißmenge in der Ernährung',
      'Gesamtkalorien und Fastenphasen senken IGF-1 tendenziell',
      'Krafttraining und Schlaf beeinflussen die Wachstumshormon-Ausschüttung',
      'Leberfunktion – IGF-1 entsteht überwiegend in der Leber'
    ],
    stoerfaktoren: [
      'Alter ist der größte Einflussfaktor – ohne altersbezogenen Referenzbereich nicht bewertbar',
      'Längeres Fasten oder Kalorienrestriktion vor der Messung',
      'Lebererkrankungen',
      'Schwere Erkrankungen und Mangelernährung'
    ],
    folge: 52,
    einsteiger: false
  },
  {
    id: 'testosteron-gesamt',
    name: 'Testosteron gesamt',
    kurz: 'Testo ges.',
    baustelle: 'hormone',
    einheit: 'ng/ml',
    referenz: 'Männer 20–49 Jahre etwa 2,49–8,36 ng/ml, ab 50 Jahren etwa 1,93–7,40 ng/ml; Frauen etwa 0,08–0,48 ng/ml (Angaben alters- und geschlechtsabhängig)',
    optimal: null,
    bedeutung: 'Die Gesamtmenge Testosteron im Blut, einschließlich des fest an Transportproteine gebundenen Anteils. In Folge 58 gehört der Wert bei Männern zur Hormon-Baustelle und wird bewusst zusammen mit dem freien Wert genannt, weil der Gesamtwert allein täuschen kann.',
    hoch: 'Kann auf eine hohe körpereigene Produktion oder auf eine Zufuhr von außen hindeuten und gehört dann ärztlich eingeordnet.',
    niedrig: 'Kann auf eine verminderte Produktion hindeuten; niedrige Werte werden auch bei Schlafmangel, starkem Übergewicht, chronischem Stress und akuten Erkrankungen gesehen.',
    hebel: [
      'Schlafdauer – der Großteil wird nachts produziert (Folge 62)',
      'Krafttraining und Körperfettanteil',
      'Chronischer Stress und Alkohol wirken ungünstig (Folge 77)',
      'Ausreichende Kalorien- und Fettzufuhr',
      'Zink- und Vitamin-D-Status'
    ],
    stoerfaktoren: [
      'Tagesrhythmus – laut Folge 58 gehört Testosteron in den Morgen, idealerweise vor 10 Uhr',
      'Akute Erkrankung oder Infekt senkt den Wert vorübergehend deutlich',
      'Hartes Training am Vortag',
      'Schlafmangel in den Nächten davor',
      'SHBG-Schwankungen verschieben den Gesamtwert, ohne dass sich der freie Anteil ändert'
    ],
    folge: 22,
    einsteiger: false
  },
  {
    id: 'testosteron-frei',
    name: 'Freies Testosteron',
    kurz: 'freies Testo',
    baustelle: 'hormone',
    einheit: 'pg/ml (oder % des Gesamtwerts)',
    referenz: 'stark methoden- und altersabhängig, bei Männern häufig etwa 8–30 pg/ml; oft wird stattdessen der rechnerisch freie Anteil aus Gesamttestosteron, SHBG und Albumin angegeben',
    optimal: null,
    bedeutung: 'Der Anteil Testosteron, der nicht fest an das Transportprotein SHBG gebunden ist und dadurch an den Zellen wirken kann. In Folge 58 wird er zusammen mit dem Gesamtwert genannt, weil ein hohes SHBG einen normalen Gesamtwert bei niedrigem wirksamem Anteil vortäuschen kann – und umgekehrt.',
    hoch: 'Kann auf ein niedriges SHBG hindeuten, das häufig mit Insulinresistenz und Übergewicht zusammen auftritt, oder auf eine hohe Gesamtproduktion.',
    niedrig: 'Kann auf eine niedrige Produktion oder auf ein hohes SHBG hindeuten, das viel Testosteron bindet.',
    hebel: [
      'Alles, was den Gesamtwert beeinflusst: Schlaf, Training, Körperfett, Stress',
      'SHBG reagiert auf Insulinempfindlichkeit, Schilddrüse und Leberstatus',
      'Alkoholkonsum (Folge 77)'
    ],
    stoerfaktoren: [
      'Rechnerische und direkt gemessene Werte sind nicht vergleichbar – Methode konstant halten',
      'Tageszeit wie beim Gesamtwert',
      'Schilddrüsen- und Leberstatus verschieben SHBG und damit den freien Anteil',
      'Akute Erkrankung'
    ],
    folge: 22,
    einsteiger: false
  },
  {
    id: 'tsh',
    name: 'TSH',
    kurz: 'TSH',
    baustelle: 'hormone',
    einheit: 'mU/l',
    referenz: 'etwa 0,4–4,0 mU/l, laborabhängig',
    optimal: null,
    bedeutung: 'Das Steuerhormon der Hirnanhangsdrüse, das die Schilddrüse antreibt. Es reagiert sehr empfindlich und ist deshalb der Einstiegswert der Schilddrüsendiagnostik. In Folge 58 wird es als Basiswert der Hormon-Baustelle genannt, gern ergänzt um fT3 und fT4.',
    hoch: 'Kann auf eine Schilddrüse hindeuten, die mehr Antrieb braucht – also auf eine mögliche Unterfunktion.',
    niedrig: 'Kann auf eine Schilddrüse hindeuten, die mehr Hormon produziert als nötig – also auf eine mögliche Überfunktion.',
    hebel: [
      'Jodversorgung über die Ernährung',
      'Selen- und Eisenstatus spielen im Schilddrüsenstoffwechsel eine Rolle',
      'Sehr strenge Diäten und Energiemangel können die Schilddrüsenachse dämpfen',
      'Auffällige Werte gehören in ärztliche Abklärung, inklusive Antikörper und Ultraschall'
    ],
    stoerfaktoren: [
      'Hochdosiertes Biotin stört viele Schilddrüsentests technisch – laut Folge 58 drei Tage vorher absetzen',
      'Tageszeit: TSH ist morgens höher als nachmittags',
      'Akute Erkrankungen verändern die Schilddrüsenwerte vorübergehend',
      'Schwangerschaft hat eigene Referenzbereiche'
    ],
    folge: null,
    einsteiger: false
  },
  {
    id: 'ft3',
    name: 'fT3 (freies Trijodthyronin)',
    kurz: 'fT3',
    baustelle: 'hormone',
    einheit: 'pg/ml',
    referenz: 'etwa 2,0–4,4 pg/ml, laborabhängig',
    optimal: null,
    bedeutung: 'Das aktive Schilddrüsenhormon, das den Stoffwechsel in den Zellen antreibt. Es entsteht überwiegend außerhalb der Schilddrüse aus fT4. In Folge 58 gehört es zur optionalen Vertiefung der Schilddrüsen-Baustelle, weil TSH allein nicht zeigt, wie gut die Umwandlung läuft.',
    hoch: 'Kann auf eine Überfunktion oder auf eine Zufuhr von Schilddrüsenhormon hindeuten.',
    niedrig: 'Kann auf eine Unterfunktion hindeuten oder darauf, dass der Körper in einer Belastungs- oder Energiemangelphase die Umwandlung drosselt.',
    hebel: [
      'Selen ist an der Umwandlung von fT4 zu fT3 beteiligt',
      'Ausreichende Kalorienzufuhr – starke Diäten senken fT3 typischerweise',
      'Eisen- und Zinkstatus',
      'Auffällige Werte gehören in ärztliche Abklärung'
    ],
    stoerfaktoren: [
      'Hochdosiertes Biotin kann den Test technisch verfälschen',
      'Strenge Diäten und Fastenphasen senken den Wert',
      'Akute Erkrankungen',
      'Tageszeitliche Schwankungen'
    ],
    folge: null,
    einsteiger: false
  },
  {
    id: 'ft4',
    name: 'fT4 (freies Thyroxin)',
    kurz: 'fT4',
    baustelle: 'hormone',
    einheit: 'ng/dl (bzw. ng/l)',
    referenz: 'etwa 0,9–1,7 ng/dl bzw. 9–17 ng/l, laborabhängig',
    optimal: null,
    bedeutung: 'Das Speicher- und Transporthormon der Schilddrüse, aus dem im Gewebe das aktive fT3 entsteht. Es schwankt weniger stark als fT3 und zeigt, wie viel Hormon die Schilddrüse überhaupt bereitstellt. In Folge 58 wird es zusammen mit TSH und fT3 als vollständiges Schilddrüsenbild genannt.',
    hoch: 'Kann auf eine Überfunktion oder eine Zufuhr von Schilddrüsenhormon hindeuten.',
    niedrig: 'Kann auf eine Unterfunktion hindeuten, besonders in Kombination mit erhöhtem TSH.',
    hebel: [
      'Jodversorgung',
      'Schilddrüsengesundheit insgesamt – Antikörperstatus ist ärztlich abzuklären',
      'Energie- und Nährstoffversorgung'
    ],
    stoerfaktoren: [
      'Hochdosiertes Biotin kann den Test technisch verfälschen',
      'Akute Erkrankungen',
      'Schwangerschaft und Östrogenpräparate verändern die Bindungsproteine',
      'Einnahmezeitpunkt von Schilddrüsenmedikamenten'
    ],
    folge: null,
    einsteiger: false
  },

  // ============ NÄHRSTOFF-TANKS (5) ============
  {
    id: 'vitamin-d',
    name: 'Vitamin D (25-OH-D)',
    kurz: '25-OH-D',
    baustelle: 'naehrstoffe',
    einheit: 'ng/ml',
    referenz: 'unter 20 ng/ml gilt als Mangel, 20–30 ng/ml als unzureichend, ab 30 ng/ml als ausreichend versorgt (50 ng/ml entsprechen 125 nmol/l)',
    optimal: '40–60 ng/ml – in Folge 58 als Zielbereich der Szene genannt',
    bedeutung: 'Die Speicherform von Vitamin D und der Standardwert für die Versorgung. Sie bildet ab, was aus Sonne und Zufuhr über Wochen zusammengekommen ist. In Folge 58 einer der vier Klassiker, bei denen laut Podcast „halb Deutschland" unterversorgt ist – und Teil des Fünf-Sterne-Minimums.',
    hoch: 'Sehr hohe Werte entstehen praktisch nur durch hochdosierte Zufuhr über längere Zeit und gehören ärztlich überprüft, weil sie den Kalziumhaushalt betreffen können.',
    niedrig: 'Kann auf zu wenig Sonnenexposition, dunkle Jahreszeit, Bedeckung, dunkle Haut, höheres Alter oder eine Aufnahmestörung hindeuten. Im Fallbeispiel der Folge liegt Vitamin D „im Keller".',
    hebel: [
      'Sonnenlicht auf der Haut – jahreszeitlich stark schwankend',
      'Vitamin-D-Zufuhr über die Ernährung oder Präparate, Dosierung individuell und am besten laborgestützt',
      'Vitamin K2 wird in der Szene häufig als Partner diskutiert (Folge 61)',
      'Magnesiumstatus – Magnesium ist am Vitamin-D-Stoffwechsel beteiligt',
      'Körperfettanteil: Vitamin D verteilt sich ins Fettgewebe'
    ],
    stoerfaktoren: [
      'Jahreszeit ist der größte Faktor – Werte im Sommer und Winter sind nicht vergleichbar',
      'Urlaub in der Sonne kurz vor der Messung',
      'Sehr unterschiedliche Testmethoden zwischen Laboren',
      'Angabe in ng/ml oder nmol/l verwechselbar (Faktor 2,5)'
    ],
    folge: 61,
    einsteiger: true
  },
  {
    id: 'ferritin',
    name: 'Ferritin',
    kurz: 'Ferritin',
    baustelle: 'naehrstoffe',
    einheit: 'ng/ml (µg/l)',
    referenz: 'Männer etwa 30–400 ng/ml; Frauen vor den Wechseljahren etwa 15–150 ng/ml, danach ähnlich wie Männer (geschlechts- und lebensphasenabhängig)',
    optimal: null,
    bedeutung: 'Das Speicherprotein für Eisen und damit der beste Einzelwert für den Eisenvorrat. In Folge 58 gilt hier ausdrücklich die goldene Mitte: zu niedrig macht müde, zu hoch wird als Entzündungs- und „Rostsignal" beschrieben.',
    hoch: 'Kann auf volle Eisenspeicher hindeuten, ist aber auch ein Akutphase-Protein: Entzündungen, Infekte, Alkohol und Lebererkrankungen heben den Wert an, ohne dass mehr Eisen vorhanden wäre.',
    niedrig: 'Kann auf entleerte Eisenspeicher hindeuten – häufig bei Menstruation, pflanzenbetonter Ernährung, Ausdauersport oder unbemerkten Blutverlusten.',
    hebel: [
      'Eisenreiche Lebensmittel, Kombination mit Vitamin C verbessert die Aufnahme',
      'Kaffee und Tee zur Mahlzeit hemmen die Eisenaufnahme',
      'Blutspenden senken die Speicher deutlich',
      'Bei niedrigen Werten ärztliche Ursachensuche vor jeder Supplementierung',
      'Entzündungsstatus mitbeurteilen – hsCRP daneben legen'
    ],
    stoerfaktoren: [
      'Jede Entzündung oder Infektion hebt den Wert an und kann einen Mangel verdecken',
      'Hartes Training in den Tagen davor',
      'Alkohol',
      'Blutspende oder Blutverlust kurz vorher',
      'Menstruationszyklus'
    ],
    folge: null,
    einsteiger: true
  },
  {
    id: 'magnesium-vollblut',
    name: 'Magnesium (Vollblut)',
    kurz: 'Mg Vollblut',
    baustelle: 'naehrstoffe',
    einheit: 'mg/l (bzw. mmol/l)',
    referenz: 'Vollblut etwa 28–44 mg/l bzw. rund 1,2–1,8 mmol/l; der Serumwert liegt mit etwa 0,75–1,0 mmol/l in einer anderen Größenordnung',
    optimal: null,
    bedeutung: 'Magnesium ist an hunderten Enzymreaktionen beteiligt, steckt aber überwiegend in den Zellen und Knochen. In Folge 58 wird ausdrücklich darauf hingewiesen, dass der Serumwert träge ist – der Körper hält ihn lange stabil – und die Vollblutmessung deshalb aussagekräftiger ist.',
    hoch: 'Hohe Werte sind selten und treten vor allem bei eingeschränkter Nierenfunktion oder sehr hoher Zufuhr auf.',
    niedrig: 'Kann auf eine niedrige Zufuhr, hohe Verluste über Schweiß, Niere oder Darm hindeuten; auch Alkohol und manche Medikamente erhöhen die Verluste.',
    hebel: [
      'Magnesiumreiche Lebensmittel: Nüsse, Samen, Hülsenfrüchte, Vollkorn, dunkle Schokolade',
      'Magnesiumpräparate in verschiedenen Verbindungen (Folge 47)',
      'Alkoholkonsum erhöht die Verluste (Folge 77)',
      'Starkes Schwitzen bei Sport und Sauna',
      'Bestimmte Medikamente wie Säureblocker und Entwässerungsmittel'
    ],
    stoerfaktoren: [
      'Serum- und Vollblutwert sind nicht vergleichbar – Material auf dem Befund prüfen',
      'Zeitpunkt der letzten Magnesiumeinnahme',
      'Hämolyse (beschädigte Blutzellen in der Probe) hebt den Wert an, weil Magnesium aus den Zellen austritt',
      'Starkes Schwitzen kurz vor der Abnahme'
    ],
    folge: 47,
    einsteiger: false
  },
  {
    id: 'omega3-index',
    name: 'Omega-3-Index',
    kurz: 'O3I',
    baustelle: 'naehrstoffe',
    einheit: '% (EPA + DHA in der Membran roter Blutkörperchen)',
    referenz: 'in westlichen Ländern liegen die meisten Menschen bei etwa 4–6 %; unter 4 % gilt als niedrig',
    optimal: '8–11 % – in Folge 58 als Zielbereich genannt',
    bedeutung: 'Der Anteil der langkettigen Omega-3-Fettsäuren EPA und DHA an den Fettsäuren der roten Blutkörperchen. Weil diese Zellen mehrere Monate leben, bildet der Index die Versorgung über Wochen bis Monate ab – nicht die letzte Fischmahlzeit. In Folge 58 einer der vier Nährstoff-Klassiker.',
    hoch: 'Sehr hohe Werte sind selten und werden vor allem bei sehr hoher Zufuhr gesehen.',
    niedrig: 'Kann auf eine geringe Zufuhr von fettem Seefisch oder entsprechenden Präparaten hindeuten.',
    hebel: [
      'Fetter Seefisch: Lachs, Hering, Makrele, Sardine',
      'EPA/DHA-Präparate aus Fisch- oder Algenöl (Folge 42)',
      'Pflanzliches ALA aus Lein und Walnuss wird nur in geringem Maß umgewandelt',
      'Aufnahme verbessert sich mit einer fetthaltigen Mahlzeit'
    ],
    stoerfaktoren: [
      'Als Heimtest per Trockenblut verfügbar – Methoden verschiedener Anbieter sind nur eingeschränkt vergleichbar',
      'Reagiert träge: Nach einer Umstellung dauert es etwa drei Monate bis zum neuen Plateau',
      'Einzelne Fischmahlzeiten kurz vorher verändern den Wert kaum'
    ],
    folge: 42,
    einsteiger: false
  },
  {
    id: 'b12',
    name: 'Vitamin B12',
    kurz: 'B12',
    baustelle: 'naehrstoffe',
    einheit: 'pg/ml (ng/l)',
    referenz: 'unter etwa 160 pg/ml spricht für einen Mangel, ab etwa 350–400 pg/ml gilt ein Mangel als weitgehend unwahrscheinlich; dazwischen liegt ein Graubereich. Aussagekräftiger ist Holo-Transcobalamin (unter 40 pmol/l spricht für einen Mangel)',
    optimal: null,
    bedeutung: 'Vitamin B12 wird für Blutbildung, Nervenfunktion und den Homocystein-Abbau gebraucht. Der Gesamtwert im Serum misst auch inaktive Anteile und ist deshalb unscharf – Holo-Transcobalamin bildet den tatsächlich verfügbaren Anteil besser ab. In Folge 58 gilt B12 als Pflichtwert für alle, die wenig tierisch essen oder Metformin-Verwandtes nehmen.',
    hoch: 'Hohe Werte entstehen meist durch Supplemente; unabhängig davon können sie bei Leber- oder Bluterkrankungen auftreten und gehören dann ärztlich eingeordnet.',
    niedrig: 'Kann auf eine geringe Zufuhr, auf eine gestörte Aufnahme im Magen-Darm-Trakt oder auf Medikamenteneinflüsse hindeuten.',
    hebel: [
      'Tierische Lebensmittel als natürliche Quelle',
      'B12-Präparate bei pflanzenbetonter Ernährung',
      'Magensäure und Intrinsic Factor bestimmen die Aufnahme – Säureblocker greifen hier ein',
      'Metformin kann die B12-Aufnahme beeinträchtigen (Folge 23)'
    ],
    stoerfaktoren: [
      'B12-Präparate heben den Serumwert schnell an und verdecken einen Gewebemangel',
      'Hochdosiertes Biotin kann den Test technisch stören',
      'Leber- und Bluterkrankungen verändern den Gesamtwert',
      'Serumwert und Holo-TC sind nicht ineinander umrechenbar'
    ],
    folge: 23,
    einsteiger: false
  },

  // ============ ORGAN-BASICS (6) ============
  {
    id: 'leberwerte',
    name: 'Leberwerte (ALT, AST, GGT)',
    kurz: 'ALT/AST/GGT',
    baustelle: 'organe',
    einheit: 'U/l',
    referenz: 'ALT (GPT): Männer bis etwa 50 U/l, Frauen bis etwa 35 U/l; AST (GOT): Männer bis etwa 50 U/l, Frauen bis etwa 35 U/l; GGT: Männer bis etwa 60 U/l, Frauen bis etwa 40 U/l (geschlechtsabhängig, laborabhängig)',
    optimal: null,
    bedeutung: 'Enzyme, die bei Belastung oder Schädigung von Leberzellen vermehrt ins Blut übertreten. In Folge 58 gehören sie zu den unspektakulären, aber wichtigen Sicherheitsnetz-Werten – gerade für alle, die mit Supplements oder Substanzen experimentieren: „Wer eingreift, überwacht."',
    hoch: 'Kann auf eine Belastung der Leber hindeuten – durch Fetteinlagerung, Alkohol, Medikamente, Infektionen. Häufig auch schlicht durch Muskelarbeit: AST und ALT stecken auch im Muskel, weshalb hartes Training die Werte tagelang anhebt. Genau das ist in Folge 58 der Klassiker des Kraftsportlers mit den jährlich „auffälligen Leberwerten".',
    niedrig: 'Niedrige Werte sind in der Regel unauffällig.',
    hebel: [
      'Alkoholmenge – besonders GGT reagiert deutlich (Folge 77)',
      'Leberfett: Gewicht, Zucker und Fruktosemenge',
      'Bewegung und Muskelmasse',
      'Kritischer Blick auf Supplements und Medikamente, die über die Leber verstoffwechselt werden'
    ],
    stoerfaktoren: [
      'Hartes Training – laut Folge 58 mindestens 48 Stunden Pause vor der Abnahme',
      'Alkohol in den Tagen davor',
      'Muskelkater, Massage, intensive Belastung der Muskulatur',
      'Manche Supplemente und Medikamente'
    ],
    folge: 77,
    einsteiger: false
  },
  {
    id: 'kreatinin',
    name: 'Kreatinin',
    kurz: 'Krea',
    baustelle: 'organe',
    einheit: 'mg/dl',
    referenz: 'Männer etwa 0,7–1,2 mg/dl, Frauen etwa 0,5–0,9 mg/dl (geschlechtsabhängig)',
    optimal: null,
    bedeutung: 'Ein Abbauprodukt des Muskelstoffwechsels, das über die Niere ausgeschieden wird. Es ist der klassische Nierenwert – hängt aber stark von der Muskelmasse ab und ist deshalb bei muskulösen Menschen systematisch höher, ohne dass die Niere schlechter arbeitet.',
    hoch: 'Kann auf eine verminderte Nierenleistung hindeuten – aber ebenso auf viel Muskelmasse, hohe Fleischzufuhr, Kreatin-Einnahme oder hartes Training kurz zuvor.',
    niedrig: 'Niedrige Werte kommen bei geringer Muskelmasse vor und sind für sich genommen meist unauffällig.',
    hebel: [
      'Trinkmenge und Flüssigkeitsstatus',
      'Muskelmasse und Trainingszustand',
      'Fleischmenge in den Tagen vor der Messung',
      'Kreatin-Einnahme hebt den Wert, ohne die Nierenfunktion zu verschlechtern (Folge 32)'
    ],
    stoerfaktoren: [
      'Kreatin-Supplementierung – laut Folge 58 genau dafür gibt es den Ausweichwert Cystatin C',
      'Hartes Training in den Tagen davor',
      'Große Fleischportion am Vorabend',
      'Dehydrierung'
    ],
    folge: 32,
    einsteiger: false
  },
  {
    id: 'cystatin-c',
    name: 'Cystatin C',
    kurz: 'CysC',
    baustelle: 'organe',
    einheit: 'mg/l',
    referenz: 'etwa 0,56–0,99 mg/l, laborabhängig',
    optimal: null,
    bedeutung: 'Ein kleines Protein, das von praktisch allen Zellen gleichmäßig gebildet und über die Niere gefiltert wird. Weil es – anders als Kreatinin – nicht von der Muskelmasse abhängt, gilt es als der präzisere Nierenwert. In Folge 58 wird es ausdrücklich als Ausweichwert für alle empfohlen, die Kreatin nehmen oder viel Muskelmasse haben.',
    hoch: 'Kann auf eine verminderte Filterleistung der Niere hindeuten.',
    niedrig: 'Niedrige Werte sind in der Regel unauffällig.',
    hebel: [
      'Trinkmenge und Blutdruck als allgemeine Nierenfaktoren',
      'Blutzucker- und Blutdruckkontrolle gelten als die wichtigsten Langzeit-Nierenschützer',
      'Vorsicht bei dauerhafter Einnahme nierenbelastender Schmerzmittel'
    ],
    stoerfaktoren: [
      'Von Muskelmasse und Kreatin unabhängig – das ist der Vorteil',
      'Schilddrüsenfunktion beeinflusst den Wert',
      'Hochdosierte Kortison-Einnahme',
      'Starkes Übergewicht und Rauchen können den Wert leicht verschieben'
    ],
    folge: 32,
    einsteiger: false
  },
  {
    id: 'egfr',
    name: 'eGFR (geschätzte Filtrationsrate)',
    kurz: 'eGFR',
    baustelle: 'organe',
    einheit: 'ml/min/1,73 m²',
    referenz: 'ab etwa 90 ml/min/1,73 m² gilt die Filtrationsleistung als normal; 60–89 als leicht vermindert, unter 60 über drei Monate als Hinweis auf eine chronische Nierenerkrankung',
    optimal: null,
    bedeutung: 'Kein gemessener, sondern ein berechneter Wert: Aus Kreatinin oder Cystatin C plus Alter und Geschlecht wird geschätzt, wie viel Blut die Nieren pro Minute filtern. In Folge 58 gehört er zu den Organ-Basics, die das Sicherheitsnetz bilden.',
    hoch: 'Sehr hohe Werte können in bestimmten Situationen auf eine Überfiltration hindeuten und werden ärztlich eingeordnet.',
    niedrig: 'Kann auf eine verminderte Nierenleistung hindeuten. Ein leichter Rückgang mit dem Alter ist normal und muss von einer Erkrankung unterschieden werden.',
    hebel: [
      'Blutdruck- und Blutzuckerkontrolle als die zentralen Langzeitfaktoren',
      'Trinkmenge',
      'Zurückhaltung bei dauerhafter Einnahme nierenbelastender Schmerzmittel',
      'Gewicht und Bewegung'
    ],
    stoerfaktoren: [
      'Basiert die Schätzung auf Kreatinin, gelten alle Kreatinin-Störfaktoren – Muskelmasse, Kreatin, Training, Fleisch',
      'Auf Cystatin C basierende Schätzungen sind hier robuster',
      'Dehydrierung senkt den Wert vorübergehend',
      'Verschiedene Berechnungsformeln liefern unterschiedliche Zahlen'
    ],
    folge: null,
    einsteiger: false
  },
  {
    id: 'harnsaeure',
    name: 'Harnsäure',
    kurz: 'HS',
    baustelle: 'organe',
    einheit: 'mg/dl',
    referenz: 'Männer etwa 3,4–7,0 mg/dl, Frauen etwa 2,4–5,7 mg/dl (geschlechtsabhängig)',
    optimal: null,
    bedeutung: 'Das Endprodukt des Purinabbaus, das über die Niere ausgeschieden wird. Bekannt ist der Wert vor allem als Gicht-Marker; in der Longevity-Diskussion wird er zusätzlich als Marker für Stoffwechsel- und Gefäßgesundheit betrachtet. In Folge 58 gehört er zu den Organ-Basics.',
    hoch: 'Kann auf eine hohe Purinzufuhr, hohen Fruktose- oder Alkoholkonsum, eine verminderte Ausscheidung über die Niere oder eine Phase mit starkem Gewichtsverlust hindeuten.',
    niedrig: 'Niedrige Werte sind meist unauffällig; sehr niedrige Werte treten unter bestimmten Medikamenten oder bei seltenen Nierenveränderungen auf.',
    hebel: [
      'Alkohol, besonders Bier (Folge 77)',
      'Fruktose- und Zuckermenge, vor allem aus Süßgetränken',
      'Purinreiche Lebensmittel wie Innereien und bestimmte Fischsorten',
      'Trinkmenge',
      'Körpergewicht – schnelles Abnehmen hebt den Wert vorübergehend an'
    ],
    stoerfaktoren: [
      'Fasten oder eine strenge Diät kurz vor der Messung hebt den Wert an',
      'Alkohol am Vorabend',
      'Sehr intensives Training',
      'Dehydrierung',
      'Entwässernde Medikamente'
    ],
    folge: null,
    einsteiger: false
  },
  {
    id: 'blutbild',
    name: 'Kleines Blutbild',
    kurz: 'Blutbild',
    baustelle: 'organe',
    einheit: 'verschiedene',
    referenz: 'Hämoglobin: Männer etwa 13,5–17,5 g/dl, Frauen etwa 12,0–16,0 g/dl; Leukozyten etwa 4,0–10,0 /nl; Thrombozyten etwa 150–400 /nl (geschlechts- und laborabhängig)',
    optimal: null,
    bedeutung: 'Die Zählung von roten Blutkörperchen, weißen Blutkörperchen und Blutplättchen samt Hämoglobin und Zellgrößen. Es ist der Basis-Check schlechthin: unspektakulär, günstig, aber in der Lage, Blutarmut, Infekte und Gerinnungsauffälligkeiten sichtbar zu machen. In Folge 58 Teil des Sicherheitsnetzes für alle, die aktiv in ihren Stoffwechsel eingreifen.',
    hoch: 'Erhöhte weiße Blutkörperchen können auf einen Infekt oder eine Entzündung hindeuten; erhöhtes Hämoglobin auf Flüssigkeitsmangel, Höhenaufenthalt, Rauchen oder eine vermehrte Blutbildung.',
    niedrig: 'Niedriges Hämoglobin kann auf Blutarmut hindeuten, etwa durch Eisen-, B12- oder Folatmangel oder durch Blutverluste. Niedrige weiße Blutkörperchen kommen bei manchen Infekten und Medikamenteneinflüssen vor.',
    hebel: [
      'Eisen-, B12- und Folatversorgung für die Blutbildung',
      'Trinkmenge – Flüssigkeitsmangel konzentriert das Blut scheinbar auf',
      'Ausdauertraining kann bei Sportlern zu einer Verdünnungs-„Anämie" führen, die keine echte ist',
      'Rauchstopp'
    ],
    stoerfaktoren: [
      'Flüssigkeitsstatus verschiebt alle Konzentrationswerte',
      'Akuter Infekt verändert die weißen Blutkörperchen deutlich',
      'Intensives Training kurz vorher',
      'Höhenaufenthalt in den Wochen davor',
      'Tageszeit und Körperlage bei der Abnahme'
    ],
    folge: null,
    einsteiger: false
  }
];

/* Die sechs „Baustellen" aus Folge 58 */
const BLUTWERT_BAUSTELLEN = [
  {
    id: 'zucker',
    label: 'Zuckerstoffwechsel',
    emoji: '🍬',
    beschreibung: 'Die wichtigste Baustelle laut Folge 58, weil Insulinresistenz als der leiseste und häufigste Alterungstreiber gilt. Glukose und HbA1c zeigen den Zustand, das Nüchtern-Insulin ist das Frühwarnsystem – es steigt oft jahrelang an, bevor der Blutzucker reagiert.'
  },
  {
    id: 'herz',
    label: 'Herz und Gefäße',
    emoji: '❤️',
    beschreibung: 'Hier hat sich das Denken modernisiert: Statt der Cholesterin-Ladung im LDL rückt mit ApoB die Anzahl der Transport-Partikel in den Vordergrund. Lp(a) wird einmal im Leben gemessen, weil es fast rein genetisch ist. Die Triglycerid/HDL-Ratio ist der Alltagsmarker ohne Zusatzkosten.'
  },
  {
    id: 'entzuendung',
    label: 'Entzündung',
    emoji: '🔥',
    beschreibung: 'Das „Inflammaging" messbar gemacht: hsCRP zeigt niedrigschwellige Dauerentzündung, Homocystein steigt bei B-Vitamin-Mangel an und belastet laut Folge Gefäße wie Gehirn. Beide Werte reagieren empfindlich auf Infekte und Training – Timing ist hier besonders wichtig.'
  },
  {
    id: 'hormone',
    label: 'Hormon-Achsen',
    emoji: '⚖️',
    beschreibung: 'IGF-1 als Fenster in die Wachstumshormon-Achse, Testosteron gesamt und frei bei Männern, dazu die Schilddrüse mit TSH, fT3 und fT4. Bei Frauen kommen je nach Lebensphase Östradiol und weitere Werte dazu – die Folge verweist hier ausdrücklich auf ärztliche Begleitung.'
  },
  {
    id: 'naehrstoffe',
    label: 'Nährstoff-Tanks',
    emoji: '🔋',
    beschreibung: 'Die Klassiker, bei denen laut Folge 58 „halb Deutschland" unterversorgt ist: Vitamin D, Ferritin als Eisenspeicher, Magnesium – sinnvollerweise im Vollblut statt im trägen Serum – und der Omega-3-Index. Dazu B12 für alle, die wenig tierisch essen.'
  },
  {
    id: 'organe',
    label: 'Organ-Basics',
    emoji: '🩺',
    beschreibung: 'Leberwerte, Nierenwerte samt Cystatin C, Harnsäure und kleines Blutbild. Unspektakulär, aber laut Folge 58 das Sicherheitsnetz – besonders für alle, die mit Supplements oder Substanzen experimentieren. Der Grundsatz der Folge: „Wer eingreift, überwacht."'
  }
];

/* Die praktischen Regeln aus Folge 58 */
const BLUTWERT_REGELN = {
  messrhythmus: [
    'Ein großes Panel ein- bis zweimal im Jahr als Standortbestimmung.',
    'Nach jeder größeren Intervention eine gezielte Kontrolle der betroffenen Werte nach acht bis zwölf Wochen.',
    'Lp(a) reicht einmal im Leben – der Wert ist fast rein genetisch und verändert sich kaum.',
    'Bei einem Ausreißer erst unter sauberen Bedingungen wiederholen, dann bewerten.',
    'Werte mit Datum in eine simple Tabelle eintragen, damit über die Jahre eine Kurve entsteht.'
  ],
  vorbereitung: [
    'Nüchtern messen: mindestens acht bis zwölf Stunden ohne Nahrung, Wasser ist erlaubt.',
    'Immer möglichst zur gleichen Tageszeit – viele Werte schwanken im Tagesverlauf.',
    'Testosteron gehört in den Morgen, idealerweise in den frühen Vormittag.',
    'Mindestens 48 Stunden Abstand zum letzten harten Training.',
    'Nach einem Infekt lieber vier Wochen warten, bevor gemessen wird.',
    'Am Vorabend kein Alkohol und möglichst normaler Schlaf.',
    'Eine ganz normale Woche wählen, keine Ausnahmesituation – nur so sind die Kurven über Jahre vergleichbar.',
    'Hochdosiertes Biotin drei Tage vorher absetzen, weil es viele Labortests technisch stören kann.',
    'Supplements: Wer prüfen will, ob das Protokoll wirkt, misst mittendrin. Wer den Grundzustand sehen will, pausiert vorher etwa zwei Wochen.'
  ],
  stoerfaktoren: [
    'Training: Ein hartes Workout kann Leberwerte, CRP und sogar das Kreatinin tagelang anheben. Faustregel der Folge: 48 Stunden Pause vor der Abnahme.',
    'Infekte: Schon eine abklingende Erkältung vervielfacht das hsCRP. Nach Krankheit lieber vier Wochen warten.',
    'Der Vorabend: Alkohol und schlechter Schlaf verzerren Nüchternglukose und Triglyceride zuverlässig.',
    'Zwei Sonderfälle, die jeder kennen sollte: Hochdosiertes Biotin aus Haut-und-Haare-Präparaten kann Labortests technisch stören, unter anderem die Schilddrüsenwerte. Und Kreatin hebt das Kreatinin an, ohne dass die Niere schlechter arbeitet – dafür gibt es den Ausweichwert Cystatin C.'
  ],
  einsteigerpanel: {
    titel: 'Das Fünf-Sterne-Minimum',
    beschreibung: 'Das Einsteiger-Paket aus Folge 58: Damit sind die drei großen Alterungstreiber – Zucker, Gefäße, Entzündung – plus die häufigsten Mängel abgedeckt.',
    marker: ['hba1c', 'insulin-nuechtern', 'apob', 'hscrp', 'vitamin-d', 'ferritin'],
    erweiterung: ['igf1', 'omega3-index', 'homocystein', 'tsh', 'ft3', 'ft4', 'lpa'],
    erweiterungHinweis: 'Wer tiefer will, ergänzt IGF-1, den Omega-3-Index, Homocystein, die Schilddrüse und einmalig Lp(a).',
    wege: [
      'Hausarzt: Wunschwerte sind oft Selbstzahler-Leistung, dafür gibt es die Beratung dazu.',
      'Direktlabore: Panels lassen sich selbst beauftragen.',
      'Heimtests: sinnvoll für Einzelwerte wie den Omega-3-Index.'
    ]
  },
  wichtigsteRegel: 'Trends schlagen Momentaufnahmen. Ein einzelner Wert ist ein Foto – oft verwackelt durch Infekt, Stress oder das Training am Vortag. Erst die Kurve über Jahre erzählt die Wahrheit. Und die zweite Regel dazu: Ein auffälliger Wert ist ein Gesprächsanlass mit dem Arzt, keine Diagnose zum Selberstellen.'
};
