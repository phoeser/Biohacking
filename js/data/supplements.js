/* Supplement-Datenbank
 * Hinweis: Alle Angaben dienen der Information, ersetzen keine ärztliche Beratung.
 * Evidenzlevel: "hoch" = zahlreiche Humanstudien, "mittel" = einige Studien, "niedrig" = vorläufig/tierexperimentell.
 */
const SUPPLEMENTS = [
  {
    id: 'erythrit-xylit',
    name: 'Erythrit und Xylit',
    altNames: 'Erythritol, Xylitol, Zuckeralkohole, Zuckeraustauschstoffe',
    category: 'Kräuter',
    tags: ['blutzucker', 'herz-kreislauf', 'ernaehrung', 'zahn'],
    short: 'Die Zuckeralkohole hinter „zuckerfrei". Nach 30 Gramm Erythrit steigt der Blutspiegel um mehr als das Tausendfache – gemessen an zehn Menschen je Gruppe.',
    description: 'Erythrit und Xylit ersetzen Zucker in Riegeln, Getränken und Backmischungen, weil sie süß schmecken, kaum Kalorien liefern und den Blutzucker nicht anheben. Seit 2023 gibt es eine Debatte um die Gefäßwirkung. Der Stand ist unentschieden, nicht entlastend: Der Mechanismus ist gezeigt, der Zusammenhang mit tatsächlichen Ereignissen nicht bewiesen – und der Körper stellt beide Stoffe selbst her, was die Zuordnung von Ursache und Wirkung erschwert.',
    benefits: [
      'Hebt den Blutzucker praktisch nicht an – der Grund, warum die Stoffe in Diabetiker- und Low-Carb-Produkten stehen',
      'Xylit ist für die Zahngesundheit gut belegt und deshalb in Zahnpflegekaugummis',
      'Deutlich weniger Kalorien als Zucker bei ähnlicher Süßkraft'
    ],
    risks: [
      'Nach 30 Gramm Erythrit stieg der Plasmaspiegel von 3,75 auf 6.480 Mikromol je Liter – mehr als das Tausendfache (ATVB 2024, zehn Teilnehmer je Gruppe)',
      'In derselben Arbeit reagierten die Blutplättchen danach stärker – bei allen Probanden, bei jedem Reizstoff, bei jeder Stufe. Traubenzucker als Vergleich tat das nicht',
      'Der Zusammenhang mit Herzinfarkt und Schlaganfall stammt aus Beobachtung an über 4.000 Herzpatienten, bei denen niemand die Zufuhr gemessen hat – nur den Blutspiegel',
      'Der Körper bildet beide Stoffe selbst, bei gestörtem Zuckerstoffwechsel mehr. Derselbe Messwert kann Ursache oder bloß Anzeige einer Stoffwechsellage sein',
      'Größere Mengen wirken abführend – das ist die häufigste Alltagsnebenwirkung'
    ],
    dosage: 'Keine sinnvolle „Dosis" – es geht um die Menge im Lebensmittel. Die Interventionsstudie verwendete 30 Gramm auf einmal, das entspricht etwa einem großen gesüßten Getränk oder mehreren Riegeln.',
    intake: 'Wer die Debatte ernst nimmt, verteilt statt zu häufen: gelegentlich ein gesüßtes Produkt ist etwas anderes als täglich mehrere. Für Xylit in Kaugummi gilt die Diskussion praktisch nicht – dort sind die Mengen klein.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38864216/'
  },
  // ============ VITAMINE ============
  {
    id: 'vitamin-d3',
    name: 'Vitamin D3',
    altNames: 'Cholecalciferol',
    category: 'Vitamin',
    tags: ['immun', 'knochen', 'stimmung', 'hormone', 'schlaf', 'energie'],
    short: 'Das „Sonnenvitamin" – essenziell für Immunsystem, Knochen, Stimmung und über 1000 Gene.',
    description: 'Vitamin D3 ist streng genommen ein Hormon und reguliert hunderte Gene. Bei 90 % aller Deutschen ist der Spiegel im Winter suboptimal. Werte zwischen 40–60 ng/ml gelten als optimal für Biohacker.',
    benefits: [
      'Stärkt Immunsystem und senkt Infektanfälligkeit',
      'Unterstützt Knochenmineralisierung (mit K2 + Magnesium)',
      'Verbessert Stimmung und kann saisonale Depression lindern',
      'Wichtig für Hormonproduktion, v. a. Testosteron',
      'Reduziert Entzündungswerte (CRP)'
    ],
    risks: [
      'Überdosierung (>10.000 IE täglich dauerhaft) kann Hyperkalzämie verursachen',
      'Ohne K2 kann Kalzium fehlgeleitet werden (Arterienverkalkung)',
      'Vor Einnahme 25-OH-Vitamin-D-Spiegel testen lassen'
    ],
    dosage: 'Standard: 1.000–4.000 IE täglich. Biohacker: 5.000 IE/Tag im Winter (nach Blutspiegel).',
    intake: 'Morgens oder mittags mit einer fetthaltigen Mahlzeit (fettlöslich). Immer mit K2 (MK-7) und Magnesium kombinieren.',
    synergies: ['vitamin-k2', 'magnesium', 'omega-3'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Sonnenlicht, fetter Fisch (Lachs, Makrele), Eigelb',
    podcasts: [
      {
        title: 'Vitamin D & K2: Das Sonnen-Duo im Faktencheck',
        audio: 'audio/vitamin-d-k2-podcast.mp3',
        spotify: '21fForD7zoAfCgsKKTFHlO',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 61) \u00b7 mit Paul & Paula. Das Sonnenhormon im Faktencheck: VITAL-Studie ehrlich gelesen (u. a. \u221222 % Autoimmunerkrankungen), Badewannen-Logik, Risikogruppen, Messlogik 25-OH-D 40\u201360 ng/ml \u2013 und warum K2 und Magnesium dazugeh\u00f6ren. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 31.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'vitamin-k2',
    name: 'Vitamin K2 (MK-7 und MK-4)',
    altNames: 'Menachinon-7, MK-7, Menachinon-4, MK-4, Menatetrenon',
    category: 'Vitamin',
    tags: ['knochen', 'herz', 'kreislauf', 'anti-aging'],
    short: 'Aktiviert Osteocalcin und Matrix-Gla-Protein — das ist am Menschen messbar. Ob eine Ergänzung Brüche oder Gefäßverkalkung verhindert, zeigen die randomisierten Studien bisher nicht.',
    description: 'Vitamin K2 ist der Sammelname für die Menachinone; im Handel dominiert MK-7, in Japan wird MK-4 als Arzneimittel gegen Osteoporose eingesetzt. Als Cofaktor der Gamma-Carboxylierung aktiviert Vitamin K2 das Osteocalcin im Knochen und das Matrix-Gla-Protein in der Gefäßwand — diese Wirkkette ist am Menschen belegt, MK-7 senkt den Marker dp-ucMGP in einer Dreijahresstudie um 50 Prozent. Der Schritt zum harten Ergebnis gelingt bisher kaum: Mehrere randomisierte Studien zur Gefäßverkalkung blieben ohne Unterschied, eine 2026 veröffentlichte fand erstmals einen. Die EU erlaubt Angaben zu Knochen und Blutgerinnung, nicht zu Herz und Gefäßen.',
    benefits: [
      'Aktiviert Osteocalcin und Matrix-Gla-Protein, am Menschen messbar',
      'Senkt den Marker für inaktives Matrix-Gla-Protein um rund 50 Prozent',
      'Bremste über 3 Jahre den Knochendichteverlust an Lendenwirbelsäule und Schenkelhals',
      'EU-Angabe: trägt zur Erhaltung normaler Knochen und zu normaler Blutgerinnung bei'
    ],
    risks: [
      'Vitamin-K-Antagonisten (Phenprocoumon, Warfarin): schon 10 µg MK-7 täglich verschieben den INR – ärztlich abklären',
      'Das BfR schlägt für Nahrungsergänzungsmittel höchstens 25,0 µg Vitamin K2 je Tagesverzehrempfehlung vor',
      'Keine tolerierbare Obergrenze festgelegt, weil die Daten dafür nicht ausreichten',
      'Keine belastbaren Daten zu Schwangerschaft, Stillzeit und Kindern'
    ],
    dosage: 'Studien verwendeten 180, 360 oder 720 µg MK-7 täglich; MK-4 wird in Japan als Arzneimittel in Milligramm eingesetzt und ist in Mikrogramm-Mengen nicht bioverfügbar. Das BfR schlägt für Nahrungsergänzungsmittel höchstens 25,0 µg Vitamin K2 je Tagesverzehrempfehlung vor. Keine Anwendungsempfehlung.',
    intake: 'Fettlöslich, in den Studien zu einer Mahlzeit gegeben. MK-7 hat eine lange Halbwertszeit und reichert sich bei täglicher Einnahme auf das 7- bis 8-Fache an.',
    synergies: ['vitamin-d3', 'magnesium', 'kalzium'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Natto (fermentierte Sojabohnen, laut NIH 850 µg Vitamin K je Portion von 3 Unzen), Hartkäse, Eigelb',
    podcasts: [
      { title: 'Vitamin D & K2: Das Sonnen-Duo im Faktencheck', audio: 'audio/vitamin-d-k2-podcast.mp3', spotify: '21fForD7zoAfCgsKKTFHlO', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 61) · mit Paul & Paula. Der Verkehrspolizist fürs Calcium: Osteocalcin und Matrix-GLA-Protein, Rotterdam-Studie, Knapen-MK-7-Daten samt ehrlicher Grenzen, Natto und die MK-7-Form. ACHTUNG Wechselwirkung mit Vitamin-K-Antagonisten. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 31.08.2026, 10:00)' }
    ]
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C',
    altNames: 'Ascorbinsäure',
    category: 'Vitamin',
    tags: ['immun', 'haut', 'anti-oxidant', 'kollagen', 'eisen'],
    short: 'Starkes Antioxidans, essenziell für Kollagensynthese, Immunsystem und Eisenaufnahme.',
    description: 'Wasserlösliches Vitamin, das der Mensch nicht selbst herstellen kann und nicht speichert. Kofaktor der Kollagenhydroxylierung; der Mangel erzeugt Skorbut. Die Aufnahme sättigt sich früh: Immunzellen bei 100 mg am Tag, das Plasma bei 1.000 mg, ab einer Einzeldosis von 500 mg sinkt die Bioverfügbarkeit und das Aufgenommene geht in den Urin.',
    benefits: [
      'Verkürzt Erkältungen unter Dauereinnahme um rund 8 Prozent bei Erwachsenen und senkt ihre Schwere um rund 15 Prozent',
      'Halbiert das Erkältungsrisiko unter extremer körperlicher Belastung (Marathon, Skilauf, subarktischer Militäreinsatz)',
      'Essenziell für Kollagenaufbau (Haut, Gelenke, Gefäße, Zahnfleisch)',
      'Erhöht die Aufnahme von pflanzlichem Eisen aus derselben Mahlzeit (über die gesamte Kost gemessen deutlich schwächer)',
      'Schützt Zellen vor oxidativem Stress (EU-zugelassene Angabe) — hohe Dosen rund um das Training können Anpassungen aber dämpfen'
    ],
    risks: [
      'Obergrenze 2.000 mg/Tag (US-amerikanisches Institute of Medicine); die EFSA hat keinen Wert abgeleitet',
      'Ab 3–4 g/Tag vorübergehend Durchfall und Magenbeschwerden (DGE)',
      'Bei Männern war eine Gesamtzufuhr ab 1.000 mg/Tag mit erhöhtem Nierensteinrisiko verbunden (HR 1,43), bei Frauen nicht',
      'Bei Hämochromatose und Eisenverwertungsstörungen Vorsicht: Eisenüberladung kann verstärkt werden',
      'Kann den HDL-Anstieg unter Niacin plus Simvastatin abschwächen; bei Chemotherapie Rücksprache mit der Onkologie',
      'Saure Kaupräparate greifen Zahnschmelz an (bislang nur In-vitro-Daten)'
    ],
    dosage: 'DGE-Referenzwert: 110 mg/Tag (Männer), 95 mg/Tag (Frauen), 155 bzw. 135 mg/Tag für Rauchende. Das BfR schlägt für Nahrungsergänzungsmittel 250 mg je Tagesverzehrempfehlung als Höchstmenge vor. Studienlage: Der Cochrane-Review schloss Studien ab 0,2 g/Tag ein; die EU-Angabe zur intensiven körperlichen Betätigung setzt 200 mg zusätzlich voraus. Die Einnahme erst bei Symptombeginn zeigte über 7 Vergleiche und 3.249 Erkältungsepisoden keinen konsistenten Effekt.',
    intake: 'Verteilt über den Tag, weil eine Einzeldosis ab 500 mg schlechter aufgenommen und der Überschuss ausgeschieden wird. Mit eisenhaltigen pflanzlichen Mahlzeiten, dort wirkt der Effekt auf die Eisenaufnahme. Liposomales Vitamin C erreichte in 9 von 10 Studien höhere Plasmaspiegel, ein klinischer Vorteil ist damit nicht gezeigt.',
    synergies: ['eisen', 'vitamin-e', 'glutathion'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Acerola, Hagebutte, Paprika, Zitrusfrüchte, Brokkoli'
  },
  {
    id: 'vitamin-b12',
    name: 'Vitamin B12',
    altNames: 'Methylcobalamin / Cobalamin',
    category: 'Vitamin',
    tags: ['energie', 'nerven', 'gehirn', 'blut', 'vegan'],
    short: 'Unverzichtbar für Blutbildung, Nervensystem und den Abbau bestimmter Fett- und Aminosäuren. Bei Mangel hervorragend belegt, bei guter Versorgung nicht.',
    description: 'B12 kommt fast nur in tierischen Lebensmitteln vor, weil es allein von Mikroorganismen gebildet wird. Die Aufnahme über den Intrinsic Factor ist begrenzt und im Alter oft gestört. Stoffwechselaktiv sind zwei Formen, Methylcobalamin und 5-Desoxyadenosylcobalamin; ein Vorteil einer bestimmten Präparateform gegenüber den anderen ist nicht gezeigt.',
    benefits: [
      'Cofaktor der mitochondrialen Methylmalonyl-CoA-Mutase im Energiestoffwechsel',
      'Notwendig für Myelinscheiden und Nervenfunktion',
      'Notwendig für die Blutbildung, Mangel verursacht megaloblastäre Anämie',
      'Senkt Homocystein zuverlässig, ein kardiovaskulärer Nutzen daraus ist nicht belegt',
      'Bessert Kognition und Stimmung nur dort, wo ein Mangel vorliegt'
    ],
    risks: [
      'Keine tolerierbare Obergrenze festgelegt, das BfR schlägt für Nahrungsergänzungsmittel dennoch 25 µg pro Tagesdosis vor',
      'Beobachtungsdaten verknüpfen sehr hohe Dauerdosen aus Einzelpräparaten bei Männern mit mehr Lungenkrebs, kein Kausalnachweis',
      'Bei neurologischen Symptomen oder Verdacht auf gestörte Aufnahme gehört die Abklärung in ärztliche Hand',
      'Hohe Folsäuredosen können das Blutbild eines B12-Mangels verschleiern'
    ],
    dosage: 'Referenzwerte: 4 µg täglich für Erwachsene nach DGE und EFSA. Studien zur Korrektur eines nachgewiesenen Mangels verwendeten oral meist 1.000 bis 2.000 µg täglich, weil der aktive Aufnahmeweg gesättigt ist. Das BfR schlägt für Nahrungsergänzungsmittel 25 µg pro Tagesdosis als Höchstmenge vor.',
    intake: 'Oral, sublingual und intramuskulär schnitten in einer Meta-Analyse gleich ab. Die Injektion bleibt sinnvoll, wenn die Aufnahme über den Darm nicht gesichert ist.',
    synergies: ['vitamin-b-komplex', 'folsaeure'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Leber, Fisch, Fleisch, Eier, Milchprodukte; in rein pflanzlicher Kost praktisch null, dort angereicherte Lebensmittel oder Präparate'
  },
  {
    id: 'vitamin-b-komplex',
    name: 'Vitamin B-Komplex',
    altNames: 'B1, B2, B3, B5, B6, B7, B9, B12',
    category: 'Vitamin',
    tags: ['energie', 'nerven', 'gehirn', 'stress', 'stoffwechsel'],
    short: 'Alle B-Vitamine in bioaktiver Form – Grundlage für Energiestoffwechsel und Nerven.',
    description: 'B-Vitamine arbeiten zusammen. Einzelgabe einer Form kann andere ins Ungleichgewicht bringen. Bei Stress, Sport und Alkoholkonsum steigt der Bedarf deutlich. Zur B6-Obergrenze: Über das Essen erreicht sie niemand, betroffen sind hochdosierte Präparate – und die sind selten. In einer Auswertung von 2.210 Produkten lag die Hälfte bei ein bis zwei Milligramm, nur gut ein Prozent über 20 mg.',
    benefits: [
      'Energiestoffwechsel aus Kohlenhydraten, Fett und Eiweiß',
      'Unterstützt Nervensystem und Stressresistenz',
      'Wichtig für Neurotransmitter (Serotonin, Dopamin)',
      'Fördert Hautgesundheit und Haarwuchs',
      'Bei vielen Menschen mit MTHFR-Mutation kritisch'
    ],
    risks: [
      'Urin kann gelb werden (B2 – normal)',
      'Hochdosis B6 über Monate: Kribbeln in Händen/Füßen möglich. Die EFSA hat die als unbedenklich geltende Obergrenze 2023 von 25 auf 12 mg am Tag halbiert – nicht wegen neuer Messungen, sondern weil dieselbe Arbeit von 1987 vorsichtiger gerechnet wurde',
      'Ab 100 mg B3 kann Flush auftreten'
    ],
    dosage: 'Typische Dosis einmal täglich laut Produkt. Auf „methylierte Formen" achten.',
    intake: 'Morgens zum Frühstück. Abends kann das Einschlafen stören.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Vollkorn, Hefe, Leber, Eier, Hülsenfrüchte, grünes Blattgemüse'
  },

  // ============ MINERALE ============
  {
    id: 'magnesium',
    name: 'Magnesium',
    altNames: 'Glycinat / Citrat / Malat / Threonat',
    category: 'Mineral',
    tags: ['schlaf', 'muskel', 'nerven', 'stress', 'energie', 'herz'],
    short: 'An über 300 Enzymreaktionen beteiligt. 80 % der Deutschen haben zu wenig.',
    description: 'Form ist entscheidend: Glycinat = Schlaf/Beruhigung, Citrat = Verdauung, Malat = Energie, Threonat = Gehirn (überquert Blut-Hirn-Schranke). Oxid schlecht verfügbar.',
    benefits: [
      'Verbessert Schlafqualität und Tiefschlaf',
      'Reduziert Stress und entspannt Muskulatur',
      'Normalisiert Blutdruck und Herzrhythmus',
      'Verringert Muskelkrämpfe und Zuckungen',
      'Aktiviert Vitamin D3',
      'Wichtig für ATP-Produktion (Energie)'
    ],
    risks: [
      'Überdosierung: Durchfall, besonders mit Citrat/Oxid',
      'Bei schwerer Niereninsuffizienz Vorsicht',
      'Von billigen Oxid-Präparaten absehen'
    ],
    dosage: '300–600 mg elementares Magnesium täglich. Biohacker oft 400 mg Glycinat abends.',
    intake: 'Glycinat/Threonat: abends zur Entspannung. Citrat/Malat: morgens. Mit oder ohne Nahrung.',
    synergies: ['vitamin-d3', 'kalium', 'zink'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kürbiskerne, Mandeln, Spinat, dunkle Schokolade, Avocado',
    podcasts: [
      {
        title: 'Magnesium L-Threonat: Das Gehirn-Magnesium im Faktencheck',
        audio: 'audio/magnesium-l-threonat-podcast.mp3',
        spotify: '2CGRCRXb0Lcy3wS05DczPv',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 47) \u00b7 mit Paul & Paula. Die MIT-Entdeckung, die als einzige Magnesium-Form nachweislich ins Gehirn kommt: Slutsky (Neuron 2010), Liu (J Alzheimers Dis 2016: kognitives Alter ~9 Jahre j\u00fcnger), Schlafstudie 2024 (mehr Tief- und REM-Schlaf). Plus Zwei-Gleise-Strategie mit Basis-Magnesium und Kauf-Checkliste. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 18.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'zink',
    name: 'Zink',
    altNames: 'Zink-Bisglycinat / Zinkpicolinat',
    category: 'Mineral',
    tags: ['immun', 'hormone', 'testosteron', 'haut', 'wundheilung'],
    short: 'Essentiell für Immunsystem, Testosteron, Wundheilung und über 300 Enzyme.',
    description: 'Zink-Bisglycinat und -picolinat sind am besten verfügbar. Zink konkurriert mit Kupfer um Aufnahme – bei langfristiger Hochdosis Kupfer beachten.',
    benefits: [
      'Stärkt Immunsystem (verkürzt Erkältungen)',
      'Wichtig für Testosteronproduktion',
      'Verbessert Hautbild (Akne)',
      'Fördert Wundheilung',
      'Beteiligt an DNA-Synthese',
      'Wirkt antioxidativ'
    ],
    risks: [
      'Über 40 mg/Tag dauerhaft: Kupfermangel',
      'Auf nüchternen Magen: Übelkeit möglich',
      'Bei Langzeit-Hochdosis Kupfer 1–2 mg ergänzen'
    ],
    dosage: '15–25 mg täglich. Bei akuter Erkältung kurzfristig bis 50 mg.',
    intake: 'Nicht auf leeren Magen. Abends mit Snack. Nicht gleichzeitig mit Eisen oder Kalzium.',
    synergies: ['vitamin-c', 'vitamin-d3'],
    avoid: ['eisen', 'kalzium'],
    evidence: 'hoch',
    sources: 'Austern, Rindfleisch, Kürbiskerne, Linsen, Cashews'
  },
  {
    id: 'eisen',
    name: 'Eisen',
    altNames: 'Eisen-Bisglycinat',
    category: 'Mineral',
    tags: ['energie', 'blut', 'frauen', 'sport'],
    short: 'Essenziell für Sauerstofftransport und Blutbildung. Wirkt bei nachgewiesenem Mangel, häufig bei menstruierenden Frauen und Ausdauersportlern.',
    description: 'Nur bei nachgewiesenem Mangel supplementieren, und die Diagnose ist der schwierige Teil: Ferritin ist ein Akutphaseprotein und kann bei Entzündung einen leeren Speicher verdecken. Eisen-Bisglycinat ist in Studien besser verträglich, ersetzt aber keine Dosis – 18 mg Bisglycinat erreichten nicht dasselbe Ferritin wie 60 mg Eisensulfat. Der Körper kann überschüssiges Eisen nicht aktiv ausscheiden.',
    benefits: [
      'Verhindert Erschöpfung und Müdigkeit bei nachgewiesenem Mangel',
      'Transportiert Sauerstoff (Hämoglobin)',
      'Senkt in der Schwangerschaft Anämie und Eisenmangel (Cochrane, 57 Studien)',
      'Füllt bei Ausdauersportlern den Ferritinspeicher – ein Leistungseffekt ist nicht gesichert'
    ],
    risks: [
      'Nur bei nachgewiesenem Mangel einnehmen – der Körper scheidet Eisen nicht aktiv aus',
      'Verdauungsbeschwerden, Verstopfung, schwarzer Stuhl; häufigster Abbruchgrund',
      'Ferritin über 150 µg/l bei Frauen und über 200 µg/l bei Männern gilt der WHO als Überladungsrisiko',
      'Ferritin ist ein Akutphaseprotein – bei Entzündung liegt die Mangelschwelle laut WHO bei unter 70 µg/l statt unter 15',
      'Hämochromatose: in Deutschland 0,2 bis 0,6 % homozygote Anlageträger; Eisen beschleunigt die Überladung',
      'Gegenanzeigen der zugelassenen Präparate: Eisenüberladung, Eisenverwertungsstörungen, Anämien ohne Eisenmangel',
      'Akut toxisch ab 20 mg/kg Körpergewicht – außer Reichweite von Kindern aufbewahren'
    ],
    dosage: 'Studien bei Mangel verwendeten 60 bis 100 mg elementares Eisen; im Sport wirkten 16 bis 100 mg täglich. Alternierende Gabe erhöht die anteilige Aufnahme (21,8 statt 16,3 %) und verursacht weniger Magen-Darm-Beschwerden; beim Ferritin nach gleicher Gesamtdosis fand die verblindete Studie jedoch keinen Unterschied. Das BfR empfiehlt für Nahrungsergänzungsmittel höchstens 6 mg pro Tagesdosis.',
    intake: 'Morgens auf nüchternen Magen mit Vitamin C. 80 mg Ascorbinsäure erhöhten die Aufnahme um 30 %, mehr brachte nichts. Kaffee senkte sie um 54 %, ein Frühstück mit Kaffee um 66 %; nachmittags lag sie 37 % niedriger. 500 mg Calciumcarbonat senkten die Aufnahme aus einer Mahlzeit von 10,2 auf 4,8 %.',
    synergies: ['vitamin-c'],
    avoid: ['zink', 'kalzium', 'magnesium'],
    evidence: 'hoch',
    sources: 'Rindfleisch, Leber, Linsen, Spinat, Kürbiskerne'
  },
  {
    id: 'selen',
    name: 'Selen',
    altNames: 'Selenomethionin',
    category: 'Mineral',
    tags: ['schilddruese', 'anti-oxidant', 'immun'],
    short: 'Essenzielles Spurenelement für Schilddrüse, Glutathion-Produktion und Immunsystem.',
    description: 'Europäische Böden sind selenarm, das BfR schätzt die durchschnittliche Zufuhr in EU-Ländern auf 31 bis 66 µg pro Tag. Selen ist Kofaktor der Glutathionperoxidase und Bestandteil der Deiodasen, die T4 in T3 umwandeln. Der Abstand zwischen Bedarf und Obergrenze ist klein: DGE-Schätzwert 70 µg (Männer) und 60 µg (Frauen), EFSA-Obergrenze 255 µg pro Tag.',
    benefits: [
      'Bestandteil der Deiodasen, die T4 in T3 umwandeln',
      'Kofaktor der Glutathionperoxidase (verbraucht Glutathion, bildet es nicht)',
      'EU-Health-Claim: trägt zu normaler Funktion des Immunsystems bei',
      'Senkt in selenarmen Regionen das Risiko der Keshan-Kardiomyopathie um 86 %',
      'Bessert bei milder endokriner Orbitopathie Augenbefund und Lebensqualität (RCT, 159 Patienten)'
    ],
    risks: [
      'EFSA-Obergrenze 255 µg/Tag; Haarausfall ab 330 µg/Tag beobachtet',
      'BfR empfiehlt für Nahrungsergänzungsmittel höchstens 40 µg je Tagesverzehrempfehlung',
      '200 µg/Tag über Jahre: mehr Typ-2-Diabetes (HR 1,55), im obersten Terzil HR 2,70',
      'Bei gutem Selenstatus 91 % mehr hochgradige Prostatakarzinome (SELECT-Nachauswertung)',
      'Selenose: Haarausfall, brüchige Nägel, Knoblauchatem, metallischer Geschmack',
      'Paranusskonsum genau einplanen: 68 bis 91 µg je Nuss; DGE rät Schwangeren, Stillenden und Kindern wegen Radioaktivität ganz ab'
    ],
    dosage: 'Keine Empfehlung. DGE-Schätzwerte für eine angemessene Zufuhr: 70 µg/Tag (Männer), 60 µg/Tag (Frauen), 75 µg/Tag in der Stillzeit. Das BfR empfiehlt für Nahrungsergänzungsmittel höchstens 40 µg je Tagesverzehrempfehlung, die EFSA-Obergrenze liegt bei 255 µg/Tag. Die großen Studien SELECT und NPC verwendeten 200 µg/Tag - genau die Dosis, unter der das Diabetes-Signal und die Zunahme hochgradiger Prostatakarzinome auftraten.',
    intake: 'Morgens mit Mahlzeit.',
    synergies: ['jod', 'zink', 'vitamin-e'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Fisch, Eier, Fleisch, Paranüsse (68 bis 91 µg je Nuss, 103 µg je 100 g; für Schwangere, Stillende und Kinder rät die DGE wegen radioaktiver Anreicherung ab)'
  },
  {
    id: 'jod',
    name: 'Jod',
    altNames: 'Kaliumiodid / Kelp',
    category: 'Mineral',
    tags: ['schilddruese', 'hormone', 'energie', 'gehirn'],
    short: 'Baustein für Schilddrüsenhormone. Deutschland ist knapp versorgt, aber kein klassisches Mangelgebiet mehr.',
    description: 'Ohne Jod keine Schilddrüsenhormone. Etwa ein Drittel der Erwachsenen in Deutschland liegt unter dem geschätzten Bedarf, die Mehrheit nicht. Zu viel stört die Schilddrüse ebenso wie zu wenig. Bei Hashimoto, Knoten oder Autonomie vorher ärztlich klären.',
    benefits: [
      'Baustein für T3/T4',
      'Regelt Stoffwechsel',
      'Wichtig für Gehirnentwicklung in der Schwangerschaft'
    ],
    risks: [
      'Bei Hashimoto, Hyperthyreose, Knoten oder Autonomie nicht ohne Arzt',
      'Europäische Obergrenze 600 µg/Tag, früherer D-A-CH-Wert 500 µg/Tag',
      'Algen- und Kelppräparate liefern 5 bis 5.600 µg pro Tagesdosis, völlig unkalkulierbar'
    ],
    dosage: 'DGE/ÖGE 2025: 150 µg täglich für Erwachsene, 220 µg in der Schwangerschaft, 230 µg in der Stillzeit. Das BfR schlägt für Nahrungsergänzungsmittel höchstens 100 µg pro Tagesdosis vor. Jodsalz und Seefisch decken den Bedarf meist.',
    intake: 'Mit einer Mahlzeit.',
    synergies: ['selen'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Seefisch, Milch, jodiertes Speisesalz. Algen und Kelp nur mit Vorsicht, der Gehalt schwankt extrem.'
  },

  // ============ FETTSÄUREN ============
  {
    id: 'omega-3',
    name: 'Omega-3 (EPA/DHA)',
    altNames: 'Fischöl / Algenöl',
    category: 'Fettsäure',
    tags: ['gehirn', 'herz', 'entzuendung', 'stimmung', 'haut', 'augen'],
    short: 'Entzündungshemmende Fettsäuren für Gehirn, Herz und Stimmung. Qualität ist entscheidend.',
    description: 'EPA wirkt eher entzündungshemmend, DHA baut Gehirn/Nerven auf. Omega-3-Index (Bluttest) sollte > 8 % liegen. Auf TOTOX-Wert achten (Oxidation).',
    benefits: [
      'Senkt Entzündungen im Körper',
      'Unterstützt Gehirnfunktion und Stimmung',
      'Senkt Triglyceride und schützt Herz',
      'Verbessert Hautbild (Ekzem, Akne)',
      'Unterstützt Augengesundheit',
      'Wichtig in Schwangerschaft für Gehirnentwicklung'
    ],
    risks: [
      'Niedrig-qualitative Öle oxidieren (ranzig)',
      'Bei Blutverdünnern: Arzt fragen',
      'Vor OP 1 Woche absetzen'
    ],
    dosage: '1.000–3.000 mg EPA+DHA täglich (nicht Fischöl gesamt).',
    intake: 'Zu fetthaltiger Mahlzeit. Tiefgefrorene Kapseln reduzieren Aufstoßen. Mit Vitamin E zum Schutz.',
    synergies: ['vitamin-d3', 'vitamin-e', 'astaxanthin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Fetter Fisch (Lachs, Sardinen, Makrele), Algenöl (vegan)',
    podcasts: [
      {
        title: 'Omega-3: Die Fettsäuren fürs lange Leben im Faktencheck',
        audio: 'audio/omega-3-podcast.mp3',
        spotify: '06vNPC2aJxWzRg38tIHdSj',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 42) · mit Paul & Paula. Der ganze Wissenschafts-Krimi: von den Inuit-Beobachtungen über die Null-Studien-Jahre bis zum Comeback mit REDUCE-IT (Bhatt, NEJM 2019) und VITAL (Manson, NEJM 2019) – und der ersten randomisierten Anti-Aging-Evidenz überhaupt: 1 g Omega-3 täglich verlangsamte in der DO-HEALTH-Studie (Bischoff-Ferrari, Nature Aging 2025) die epigenetischen Uhren. Dazu Omega-3-Index (Ziel 8–11 %), EPA vs. DHA, Qualität (TOTOX, Algenöl) und die Vorhofflimmern-Debatte ehrlich eingeordnet. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.'
      }
    ]
  },
  {
    id: 'mct-oel',
    name: 'MCT-Öl',
    altNames: 'Mittelkettige Triglyceride',
    category: 'Fettsäure',
    tags: ['energie', 'keto', 'fokus', 'fettverbrennung', 'gehirn'],
    short: 'Mittelkettige Fette, die direkt zur Leber gehen und dort Ketone bilden. Positive Studien bei leichter kognitiver Störung, kleiner Gewichtseffekt, kein Vorteil für die Ausdauer.',
    description: 'MCT-Öl erhöht zuverlässig die Ketonkörper im Blut, reine Caprylsäure (C8) am stärksten; Kokosöl erreichte in einer Vergleichsstudie nur 25 % der C8-Ketonspitze. Bei leichter kognitiver Störung verbesserten sich in einer 6-monatigen RCT mehrere Gedächtnis- und Sprachtests, die Ketonaufnahme im Gehirn stieg messbar. Statt langkettiger Fette eingesetzt, senkt MCT das Gewicht leicht (-0,51 kg). Für Sportleistung und für die Kognition gesunder Erwachsener fehlt ein klarer Nutzen.',
    benefits: [
      'Erzeugt eine leichte Ketose, C8 am stärksten; in einem 8-Stunden-Test Insulin unverändert',
      'Verbesserte bei leichter kognitiver Störung über 6 Monate mehrere Gedächtnis- und Sprachtests (RCT, 39 vs. 44 Teilnehmer)',
      'Meta-Analysen bei MCI und Alzheimer: kleine Verbesserung der allgemeinen Kognition, stärker ohne APOE4',
      'Statt langkettiger Fette: -0,51 kg Gewicht und -1,46 cm Taillenumfang (Meta-Analyse, 13 RCTs)',
      'Weniger Energieaufnahme bei der nächsten Mahlzeit, ohne dass der Appetit sinkt',
      'Seit Jahrzehnten in der Ernährungstherapie bei Fettmalabsorption und Epilepsie eingesetzt'
    ],
    risks: [
      'Durchfall und Magen-Darm-Beschwerden, dosisabhängig: 75 % der Teilnehmer bei 30 g täglich',
      'Triglyceride steigen leicht (+0,14 mmol/L); gegenüber ungesättigten Ölen steigt LDL-Cholesterin',
      'Reines Fett und entsprechend energiereich',
      'Gegenanzeigen laut klinischer Literatur: Ketose, Azidose, Leberzirrhose',
      'Bei Diabetes mit Insulin oder Blutzuckersenkern vorher ärztlich abklären'
    ],
    dosage: 'In Studien verwendet: 15 g zweimal täglich über 6 Monate (leichte kognitive Störung), 12 bis 18 g täglich über 4 Wochen (junge Gesunde), 30 g täglich über 14 Tage (gesunde Ältere, 75 % Durchfall). Eine Sport-Übersicht nennt 30 g als praktische Obergrenze. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In der BENEFIC-Studie auf zwei Portionen als Getränk verteilt. Eine frühe Mahlzeit ohne anschließendes Mittagessen verstärkte die Ketonwirkung im 8-Stunden-Test.',
    synergies: ['omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Kokosöl (~15 % MCT), C8-MCT-Öl (konzentriert)'
  },

  // ============ AMINOSÄUREN ============
  {
    id: 'kreatin',
    name: 'Kreatin Monohydrat',
    altNames: 'Creapure',
    category: 'Aminosäure',
    tags: ['muskel', 'kraft', 'sport', 'gehirn', 'energie'],
    short: 'Eines der bestuntersuchten Supplements. Mehr Kraft, Muskel und mittlerweile auch Gehirn-Boost.',
    description: 'Kreatin ist nicht nur für Sportler – neue Studien zeigen Nutzen für Gehirn, Stimmung und gesundes Altern. Creapure (deutsch) ist Goldstandard.',
    benefits: [
      'Steigert Kraft und Muskelmasse um 5–15 %',
      'Verbessert Hochintensitäts-Leistung',
      'Verbessert Gedächtnis und Kognition',
      'Kann bei Depression helfen',
      'Schützt Gehirn bei Schlafmangel',
      'Unterstützt gesundes Altern'
    ],
    risks: [
      'Wassereinlagerung (Muskel, nicht subkutan)',
      'Sehr sicher – 30+ Jahre Forschung',
      'Bei Nierenerkrankung Arzt fragen'
    ],
    dosage: '3–5 g täglich. Ladephase (20 g/Tag für 5 Tage) optional.',
    intake: 'Jederzeit, aber täglich. In Wasser oder Shake. Zeitpunkt egal – wichtig ist Regelmäßigkeit.',
    synergies: ['beta-alanin', 'whey'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rindfleisch, Wild (aber sehr geringe Mengen)',
    podcasts: [
      {
        title: 'KI-Podcast: Kreatin – der ehrliche Faktencheck (Muskel, Gehirn, Mythen)',
        audio: 'audio/kreatin-podcast.mp3',
        spotify: '3A2IEPWCGTrgRaBzGLMNiq',
        lengthLabel: '≈ 13 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser (Folge 32). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.'
      }
    ]
  },
  {
    id: 'l-theanin',
    name: 'L-Theanin',
    altNames: 'Grüntee-Aminosäure',
    category: 'Aminosäure',
    tags: ['fokus', 'stress', 'schlaf', 'koffein', 'gaba'],
    short: 'Aminosäure aus der Teepflanze. Verbessert kurzfristig die Aufmerksamkeit, ohne müde zu machen.',
    description: 'L-Theanin ist eines der am besten untersuchten Nootropika: eine Meta-Analyse über 31 randomisierte Studien mit 1.168 Teilnehmern findet nach einer Einzeldosis von 200 Milligramm eine Verbesserung der Wahlreaktionszeit von SMD 0,51. Auf Stress wirkt es schwächer, auf Müdigkeit gar nicht. Die erhöhte Alpha-Aktivität im EEG ist ein Surrogatmarker, kein Ergebnis.',
    benefits: [
      'Verbessert die Aufmerksamkeit nach Einzeldosis (Meta-Analyse, SMD 0,51)',
      'Kleiner Effekt auf akuten Stress, überwiegend aus Studien mit hohem Bias-Risiko (SMD 0,31)',
      'Kleine Verbesserungen subjektiver Schlafwerte (Schlafqualität SMD 0,43)',
      'In Kombination mit Koffein additiv, nicht synergistisch',
      'Erhöht die Alpha-Aktivität im EEG in Ruhe (Surrogatmarker)'
    ],
    risks: [
      'Gut verträglich – in der Meta-Analyse über 31 Studien keine schwerwiegenden Ereignisse',
      'Bei alleiniger Gabe wurden mehr Kopfschmerzen und schlechtere Rechenleistung berichtet',
      'Laufender EU-Novel-Food-Antrag schließt unter 18-Jährige, Schwangere und Stillende aus',
      'Keine Daten zu Wechselwirkungen mit Psychopharmaka über wenige Wochen hinaus'
    ],
    dosage: 'In Studien eingesetzt: 200 Milligramm als Einzeldosis, 30 bis 60 Minuten vor der Aufgabe; 200 bis 400 Milligramm täglich über vier Wochen. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In den Kombinationsstudien mit Koffein wurde beides gleichzeitig eingenommen. Welches Mischungsverhältnis das beste ist, wurde nie geprüft.',
    synergies: ['koffein'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Grüner Tee, Matcha, Schwarztee (geringer)'
  },
  {
    id: 'glycin',
    name: 'Glycin',
    altNames: 'Aminosäure',
    category: 'Aminosäure',
    tags: ['schlaf', 'entspannung', 'kollagen', 'gehirn'],
    short: 'Aminosäure, Hauptbaustein des Kollagens. Drei kleine Schlafstudien mit 3 Gramm vor dem Zubettgehen zeigen kürzeres Einschlafen – mehr Humandaten zum Schlaf gibt es nicht.',
    description: 'Glycin ist die häufigste Aminosäure im Kollagen; der Körper stellt selbst deutlich mehr davon her, als eine Portion liefert. Zum Schlaf liegen genau drei kleine Studien mit 3 Gramm vor dem Zubettgehen vor, eine davon mit Polysomnographie: kürzere Einschlafzeit und kürzere Tiefschlaflatenz ohne Verschiebung der Schlafarchitektur. Der Weg über die Körperkerntemperatur ist an Ratten aufgeklärt und läuft dort über NMDA-Rezeptoren, nicht über den hemmenden Glycinrezeptor. Am Menschen ist der Temperaturabfall bisher nicht gezeigt.',
    benefits: [
      'Kürzere Einschlafzeit und kürzere Tiefschlaflatenz in der einzigen Polysomnographie-Studie (je 11 Teilnehmer, 2 Nächte)',
      'Bessere subjektive Schlafqualität in allen drei vorliegenden Humanstudien – kleine Stichproben, hohes Verzerrungsrisiko',
      'Weniger Müdigkeit und kürzere Reaktionszeit am Tag nach verkürztem Schlaf (7 ausgewertete Teilnehmer)',
      'Verstärkt am Menschen messbar den Glycin-Konjugationsweg zur Ausscheidung von Stoffwechselprodukten',
      'Hauptbaustein des Kollagens – dass mehr Glycin zu mehr Kollagen führt, ist nur in Zellkultur gezeigt',
      'Die beste Datenbasis liegt in einem ganz anderen Feld: als Zusatz zu Antipsychotika, Meta-Analyse über 40 Studien mit 4.937 Patienten'
    ],
    risks: [
      'Gut verträglich in den Studiendosen – süßer Geschmack, gut wasserlöslich',
      'Keine EFSA- oder BfR-Obergrenze; NOAEL beim Menschen 129,0 mg je kg Körpergewicht und Tag, nur das 2,8-Fache der üblichen Aufnahme',
      'Kontrollierte Daten an Gesunden reichen nur bis 14 Tage',
      'Hohe Einzeldosen verschlechtern bei Gesunden messbar die sensomotorische Filterleistung',
      'Nicht ohne ärztliche Rücksprache bei Clozapin'
    ],
    dosage: 'In den drei Schlafstudien verwendet: 3 Gramm, 30 bis 60 Minuten vor dem Zubettgehen. Eine Dosis von 5 Gramm kommt in keiner dieser Studien vor. Das ist eine Studienangabe, keine Verzehrempfehlung.',
    intake: 'In den Studien in Wasser gelöst und 30 bis 60 Minuten vor dem Zubettgehen eingenommen. Die Studien liefen über 2 bis 4 Nächte; zur längeren Einnahme gibt es bei Gesunden keine kontrollierten Schlafdaten.',
    synergies: ['magnesium', 'l-theanin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Knochenbrühe, Kollagen, Gelatine, Fleisch, bindegewebsreiche Teile',
    podcasts: [
      { title: 'Kollagenpeptide & Glycin: Das Struktur-Duo im Faktencheck', audio: 'audio/kollagen-glycin-podcast.mp3', spotify: '7sEemDFiWAx5G7MBP0kW0F', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 60) · mit Paul & Paula. Ein Drittel des Kollagens, 3 g für besseren Schlaf (Kerntemperatur-Trick), Glutathion-Baustein (GlyNAC) und Longevity-Signal im Tiermodell – für Centbeträge. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 30.08.2026, 10:00)' }
    ]
  },
  {
    id: 'acetyl-l-carnitin',
    name: 'Acetyl-L-Carnitin (ALCAR)',
    altNames: 'ALCAR',
    category: 'Aminosäure',
    tags: ['gehirn', 'energie', 'fokus', 'anti-aging', 'fettverbrennung'],
    short: 'Die Carnitin-Form, die das Gehirn erreicht. Am besten belegt bei depressiven Symptomen, bei Gesunden kaum untersucht.',
    description: 'ALCAR schleust Fettsäuren in die Mitochondrien, liefert Acetylgruppen für Acetylcholin und passiert die Blut-Hirn-Schranke. Eine Meta-Analyse über 12 randomisierte Studien mit 791 Teilnehmern fand eine deutliche Senkung depressiver Symptome (SMD -1,10), vergleichbar mit Antidepressiva. Kleinere positive Befunde gibt es bei diabetischen Nervenschmerzen und leichter kognitiver Störung. Für Fokus und Energie bei Gesunden fehlen Studien. In einer großen Studie verstärkte ALCAR die Nervenschäden durch Taxan-Chemotherapie.',
    benefits: [
      'Senkt depressive Symptome gegenüber Placebo (Meta-Analyse, 12 RCTs, 791 Teilnehmer, SMD -1,10), am stärksten bei Älteren',
      'Kleiner Vorteil bei leichter kognitiver Störung und früher Alzheimer-Demenz (Meta-Analyse, Effektstärke 0,201)',
      'Linderte diabetische Nervenschmerzen um 9,16 mm auf der 100-mm-Skala (Cochrane, sehr niedrige Evidenzsicherheit)',
      'Weniger Erschöpfung bei Älteren in einer Studie mit 96 Teilnehmern über 70 Jahren',
      'Passiert die Blut-Hirn-Schranke, liefert Acetylgruppen für Acetylcholin',
      'In Italien als Arzneimittel bei Schäden peripherer Nerven zugelassen'
    ],
    risks: [
      'Verstärkte in einer RCT mit 409 Frauen die Nervenschäden durch Taxan-Chemotherapie – nicht ohne onkologische Rücksprache',
      'Magen-Darm-Beschwerden, Kopfschmerz, Missempfindungen; ab etwa 3 g Carnitin täglich auch fischiger Körpergeruch',
      'L-Carnitin bremst die Wirkung von Schilddrüsenhormonen in den Zellen – bei Schilddrüsentherapie ärztlich abklären',
      'Fallberichte über verstärkte Wirkung von Cumarin-Gerinnungshemmern',
      'Bei Anfallsleiden sind Krampfanfälle unter Carnitin beschrieben',
      'Keine Daten zu Schwangerschaft und Stillzeit'
    ],
    dosage: 'In Studien verwendet: 1.500 bis 3.000 mg täglich über 6 bis 12 Monate (Nervenschmerzen), 1,5 bis 3,0 g täglich über 3 bis 12 Monate (Gedächtnisstörungen). Das italienische Arzneimittel sieht 0,5 bis 1,5 g täglich vor. Das sind Studien- und Fachinformationsangaben, keine Verzehrempfehlung.',
    intake: 'In Studien und Fachinformation meist auf 2 bis 3 Gaben über den Tag verteilt.',
    synergies: ['alpha-liponsaeure', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Rotes Fleisch (aber nur Carnitin, nicht ALCAR)'
  },
  {
    id: 'tyrosin',
    name: 'L-Tyrosin',
    altNames: 'Aminosäure',
    category: 'Aminosäure',
    tags: ['fokus', 'stress', 'stimmung', 'motivation', 'dopamin'],
    short: 'Vorstufe für Dopamin und Noradrenalin. Hilft bei Stress und mentaler Erschöpfung.',
    description: 'Tyrosin ist besonders nützlich in stressigen Situationen (Prüfung, Schlafmangel, Krisen), wenn Neurotransmitter-Reserven erschöpft sind.',
    benefits: [
      'Soll Dopamin und Fokus steigern – gezeigt vor allem unter Belastung wie Schlafmangel, nicht im Normalzustand',
      'Hilft bei akutem Stress',
      'Soll die Stimmung verbessern – Humandaten dünn',
      'Kognitive Performance unter Schlafmangel'
    ],
    risks: [
      'Bei Schilddrüsenproblemen (Hyper) nicht empfohlen',
      'Nicht mit MAO-Hemmern',
      'Nicht abends – stimulierend'
    ],
    dosage: '500–2.000 mg 30 min vor Stresssituation.',
    intake: 'Auf leeren Magen, morgens oder vor anspruchsvollen Tätigkeiten.',
    synergies: ['vitamin-b-komplex'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Käse, Mandeln, Avocado, Hülsenfrüchte'
  },
  {
    id: 'aminosaeuren',
    name: 'Aminosäuren (EAA & BCAA)',
    altNames: 'Essenzielle Aminosäuren · EAA · BCAA',
    category: 'Aminosäure',
    tags: ['muskeln', 'protein', 'anti-aging', 'sport', 'alter'],
    short: 'Neun der zwanzig Aminosäuren sind essenziell – Baumaterial für Muskeln, Enzyme und Hormone, mit steigendem Bedarf im Alter.',
    description: 'Von zwanzig Aminosäuren sind neun essenziell und müssen über die Nahrung kommen. Ab der Lebensmitte kommt zum Muskelverlust die anabole Resistenz: Derselbe Teller Protein löst im älteren Muskel eine schwächere Aufbau-Antwort aus. Isolierte BCAAs sind von der Forschung entzaubert – sie liefern nur drei der neun Bausteine; komplette EAA oder ganzes Protein sind überlegen.',
    benefits: [
      'Baumaterial für Muskeln, Knochenmatrix, Enzyme, Hormone und Antikörper',
      'Leucin aktiviert mTORC1 und stößt die Muskelproteinsynthese an – am Menschen mit Isotopenstudien belegt',
      'Zusätzliches Protein verstärkt den Muskelaufbau durch Krafttraining (Meta-Analyse, 49 Studien, 1.863 Teilnehmer)',
      'EAA-Pulver als Speziallösung bei wenig Appetit, im Alter oder bei pflanzlicher Kost',
      'Gleicht die geringere Leucin- und Lysin-Dichte pflanzlicher Ernährung aus'
    ],
    risks: [
      'Isolierte BCAAs sind ein Zündschlüssel ohne Baumaterial – wer genug Protein isst, braucht sie nicht',
      'Isolierte Aminosäure- und Proteinpräparate brachten Älteren ohne Training keinen signifikanten Muskelzuwachs (Meta-Analyse, 9 Studien)',
      'Bei Nierenerkrankungen gehört die Proteinmenge in ärztliche Abstimmung',
      'Dauerhaft hochgefahrenes mTOR ist kein Ziel – Protein-Mahlzeiten und echte Essenspausen im Wechsel'
    ],
    dosage: 'Referenzwerte und Studienangaben, keine Verzehrempfehlung: DGE 0,8 g Protein pro kg Körpergewicht für Erwachsene unter 65, 1,0 g ab 65; PROT-AGE-Gruppe für über 65-Jährige mindestens 1,0–1,2 g, bei Erkrankung 1,2–1,5 g. In einer Meta-Analyse zu Krafttraining brachte eine Gesamtzufuhr über 1,62 g/kg keinen weiteren Zuwachs an fettfreier Masse.',
    intake: 'Auf drei bis vier Mahlzeiten verteilt; bei Älteren gelten etwa 0,40 g Protein pro kg und Mahlzeit als Menge, die den Muskelaufbau maximal anregt. Die wichtigste Korrektur ist meist das Frühstück – Eier, Quark, Skyr oder Shake statt Marmeladenbrot.',
    synergies: ['whey', 'kreatin', 'glycin', 'taurin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Eier, Fisch, Fleisch, Milchprodukte, Hülsenfrüchte; Whey als konzentrierte Form',
    podcasts: [
      { title: 'Aminosäuren: Die Bausteine des Lebens im Faktencheck', spotify: '38NyHB17pe2eBUcTPFg8qk', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 69) · mit Paul & Paula. Die Hierarchie echtes Essen vor Whey vor EAA vor BCAA, die anabole Resistenz ab der Lebensmitte – und warum die eigentliche Stellschraube nicht das Pulver ist, sondern die Verteilung der Proteinmenge über den Tag. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 07.09.2026, 10:00)' }
    ]
  },
  {
    id: 'taurin',
    name: 'Taurin',
    altNames: 'Aminosulfonsäure',
    category: 'Aminosäure',
    tags: ['herz', 'energie', 'sport', 'gehirn', 'anti-aging'],
    short: 'Aminosulfonsäure mit belastbaren Humandaten zum Blutdruck. Die Longevity-Erzählung stammt aus dem Tiermodell und ist 2025 korrigiert worden.',
    description: 'Die Aufmerksamkeit stammt aus einer Science-Arbeit von 2023: Mäuse mittleren Alters lebten unter Taurin im Median rund 10 bis 12 Prozent länger, bei den mituntersuchten Rhesusaffen wurden über 6 Monate nur Gesundheitsmarker gemessen, und der Humanteil war reine Beobachtung. Zwei Arbeiten von 2025 fanden, dass zirkulierendes Taurin mit dem Alter steigt oder gleich bleibt. Am Menschen belegt sind Blutdruck- und kardiometabolische Effekte auf Surrogatmarkern.',
    benefits: [
      'Senkt den Ruheblutdruck – Meta-Analyse über 7 Studien mit 103 Teilnehmern: im Mittel rund 3 mmHg systolisch und diastolisch',
      'Doppelblinde Studie an 120 Menschen mit Prähypertonie über 12 Wochen: 7,2 gegenüber 2,6 mmHg systolisch',
      'Bessert kardiometabolische Laborwerte – Meta-Analyse über 34 randomisierte Studien, beste Effekte bei 1,5 bis 3,0 g pro Tag',
      'Herzinsuffizienz: zwei kleine kontrollierte Studien mit 29 und 17 Patienten positiv, eine dritte 2026 zurückgezogen',
      'Sportliche Leistung: Meta-Analyse über 23 Studien, kleiner Effekt (g = 0,25), Evidenzqualität nach GRADE niedrig bis sehr niedrig',
      'Lebensspanne verlängert bei Maus und Fadenwurm – am Menschen dazu keine Daten'
    ],
    risks: [
      'Breit untersucht: NOAEL 1.000 mg pro Kilogramm Körpergewicht und Tag im Tierversuch, in Humanstudien bei 1.000 bis 1.500 mg pro Tag keine unerwünschten Wirkungen',
      'Die norwegische Behörde VKM leitet für Erwachsene rund 1.470 mg pro Tag als Schwellenwert ab – das liegt unter dem oberen Ende gängiger Dosierungen',
      'Selten leichte Magenbeschwerden; bei 4.980 mg pro Tag über 7 Tage ein Fall von leichten Muskelkrämpfen',
      'Bei SSADH-Defizienz nicht geeignet: 16 g pro Tag führten zu Hypersomnie mit Krankenhausaufnahme',
      'Blutdrucksenkende Wirkung – Kombination mit Antihypertensiva ärztlich abklären'
    ],
    dosage: '1.000–3.000 mg täglich.',
    intake: 'Jederzeit, ideal mit Mahlzeit oder vor Training.',
    synergies: ['magnesium', 'kreatin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Fleisch, Fisch, Meeresfrüchte – in Pflanzen kommt Taurin nicht vor',
    podcasts: [
      { title: 'Taurin: Die unterschätzte Aminosäure im Faktencheck (Solo-Special)', audio: 'audio/taurin-podcast.mp3', spotify: '5aIzYuKiWVt3H1VX05a9fX', lengthLabel: '≈ 12 Min · KI-Podcast (Solo mit Paul)', note: 'Der Podcast von Paul Höser (Folge 67, Solo-Special) · nur mit Paul, ruhige Solo-Fassung. Die Taurin-Story mit Plot-Twist: Science 2023 (Mäuse +10–12 % Lebensspanne, Affen-Daten), die NIA-Gegen-Analyse 2025 zur Biomarker-These, belegte Blutdruck- und Sport-Effekte, die Veganer-Lücke und der Abend-Stack mit Magnesium und Glycin. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 16.08.2026, 08:00)' }
    ]
  },
  {
    id: '5-htp',
    name: '5-HTP',
    altNames: '5-Hydroxytryptophan',
    category: 'Aminosäure',
    tags: ['stimmung', 'schlaf', 'appetit', 'serotonin'],
    short: 'Direkte Serotonin-Vorstufe aus Griffonia-Samen. Hebt Serotonin im Blut messbar an; für Stimmung und Schlaf gibt es positive Signale aus kleinen Studien, das größte moderne Placebo-Experiment war negativ.',
    description: 'Wird aus den Samen von Griffonia simplicifolia gewonnen, überwindet die Blut-Hirn-Schranke und überspringt den langsamsten Schritt der Serotoninsynthese. Im Blut steigen 5-HTP und Serotonin unter Einnahme nachweislich an. Ob daraus bessere Stimmung, besserer Schlaf oder weniger Appetit folgt, ist nur in kleinen, oft alten Studien untersucht; placebokontrolliert und methodisch sauber sind bei Depression nach Cochrane nur 2 Studien mit 64 Patienten. In Deutschland kein zugelassenes Arzneimittel mehr (Levothym 1992 vom Markt).',
    benefits: [
      'Erhöht Serotonin im Blut messbar (RCT mit 166 Teilnehmern, Surrogatmarker)',
      'Soll die Stimmung verbessern – positive, aber kleine und überwiegend nicht placebokontrollierte Studien',
      'Soll den Schlaf fördern – eine kleine Studie mit 30 älteren Erwachsenen, Effekt nur bei schlechten Schläfern',
      'Kann den Appetit dämpfen – eine kleine doppelblinde Studie mit 20 Teilnehmern'
    ],
    risks: [
      'NICHT mit Antidepressiva oder anderen serotonergen Mitteln (Serotonin-Syndrom)',
      'Übelkeit, Erbrechen, Durchfall, Kopfschmerzen, Schlaflosigkeit, Herzrasen; in einer Studie 19,6 Prozent mit Müdigkeit, Übelkeit oder Erbrechen',
      'Verunreinigungen: ein Familienfallbericht mit Eosinophilie nach verunreinigtem 5-HTP; Zusammenhang mit dem Eosinophilie-Myalgie-Syndrom laut Cochrane ungeklärt',
      'Überdosis-Fallbericht mit reversibler Hippocampus-Schädigung nach der zehnfachen Dosis',
      'Keine Langzeit- und keine Schwangerschaftsdaten',
      'Für Haustiere giftig – Vergiftungen bei Hunden dokumentiert'
    ],
    dosage: 'Keine Dosierungsangabe. 5-HTP ist in Deutschland kein zugelassenes Arzneimittel, deshalb greift § 3a Heilmittelwerbegesetz; zudem gibt Biohacking Kompakt für 5-HTP keine Kaufempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer Medikamente nimmt, insbesondere Antidepressiva, klärt 5-HTP vorher ärztlich.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Griffonia simplicifolia (afrikanische Pflanze)'
  },

  // ============ ADAPTOGENE & KRÄUTER ============
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    altNames: 'Withania somnifera / KSM-66',
    category: 'Adaptogen',
    tags: ['stress', 'schlaf', 'hormone', 'testosteron', 'cortisol'],
    short: 'Das bekannteste Adaptogen. Kleine RCTs zeigen niedrigere Cortisolwerte und weniger Stresserleben – meist über acht Wochen und mit herstellernahen Extrakten.',
    description: 'Aus dem Ayurveda. KSM-66 und Sensoril sind die in Studien eingesetzten Extrakte – die meisten dieser Studien sind klein und wurden von den Herstellern finanziert. Untersucht wurden Zeiträume von vier bis acht Wochen; zur Daueranwendung gibt es keine Daten.',
    benefits: [
      'Senkte Cortisol in einer kleinen, herstellernahen Studie um knapp 30 % – Einzelbefund, nicht unabhängig bestätigt',
      'Verbessert Schlafqualität',
      'Erhöht Testosteron bei Männern',
      'Steigert Muskelkraft und VO2max',
      'Reduziert Angst',
      'Unterstützt Schilddrüse (v. a. Unterfunktion)'
    ],
    risks: [
      'Bei Hyperthyreose meiden',
      'Bei Autoimmunerkrankungen Vorsicht',
      'Nicht in Schwangerschaft',
      'Selten: leichte Magenbeschwerden'
    ],
    dosage: '300–600 mg KSM-66 täglich.',
    intake: 'Abends mit Mahlzeit für Schlafförderung, sonst morgens.',
    synergies: ['magnesium', 'rhodiola'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kein nennenswertes Vorkommen in Lebensmitteln',
    podcasts: [
      {
        title: 'Ashwagandha: Das Stress-Kraut im Faktencheck',
        audio: 'audio/ashwagandha-podcast.mp3',
        spotify: '6fZLYDZp18PqMw0YIWKCt0',
        lengthLabel: '≈ 13 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 41) · mit Paul & Paula. Dreitausend Jahre Ayurveda treffen auf über sechzig Humanstudien: fast 28 % weniger Cortisol (Chandrasekhar, Indian J Psychol Med 2012), besserer Schlaf (Langade, Cureus 2019), doppelter Kraftzuwachs beim Bankdrücken (Wankhede, JISSN 2015), Testosteron- und Libido-Daten, weniger Stress-Essen. Plus die ehrliche Seite: BfR-Leber-Warnung, Schilddrüsen-Vorsicht, sinnvolle Zyklen und Extrakt-Qualität (KSM-66, Sensoril). Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.'
      }
    ]
  },
  {
    id: 'rhodiola',
    name: 'Rhodiola Rosea',
    altNames: 'Rosenwurz',
    category: 'Adaptogen',
    tags: ['stress', 'energie', 'fokus', 'sport', 'ausdauer'],
    short: 'Adaptogen für Energie und mentale Belastbarkeit. In Europa als traditionelles Arzneimittel registriert, nicht als wirksamkeitsbelegtes.',
    description: 'Rosenwurz ist in Deutschland seit 2014 und 2016 als traditionelles pflanzliches Arzneimittel gegen Stresssymptome registriert – auf Basis der Anwendungstradition, nicht der Studien. Die EMA hat den Status „well-established use“ im März 2024 ausdrücklich abgelehnt. Am besten belegt ist die Ausdauer: eine Meta-Analyse über 26 RCTs mit 668 Teilnehmern findet kleine, konsistente Effekte. Bei Erschöpfung hängt fast alles an einem einzigen Extrakt. 3 % Rosavine und 1 % Salidrosid sind Marktkonvention, nicht die Spezifikation der Hauptstudien.',
    benefits: [
      'Steigert die Ausdauerleistung leicht – Meta-Analyse, 26 RCTs, 668 Teilnehmer, VO2max ES 0,32',
      'Senkt mentale Ermüdung nach Einzeldosis – größte kontrollierte Studie, 161 Kadetten, p < 0,001',
      'Reduziert Erschöpfung bei diagnostiziertem Erschöpfungssyndrom – 60 Teilnehmer, 28 Tage, p = 0,047',
      'Verbessert antioxidative Marker deutlicher als Leistungswerte – SOD ES 1,16, MDA ES -1,21',
      'Wirkt bei leichter Depression schwächer als Sertralin, aber mit weniger Nebenwirkungen – 30,0 % gegen 63,2 %',
      'Soll Fokus und Gedächtnis verbessern – Humandaten dünn und ohne Kontrollgruppe'
    ],
    risks: [
      'Kopfschmerz, Nervosität, Schlaflosigkeit, Schwindel, Übelkeit, Hautausschlag – Häufigkeit laut EMA unbekannt',
      'Wechselwirkungssignale mit SSRI und SNRI, publizierter Verdachtsfall eines serotonergen Syndroms unter Paroxetin',
      'Probandenversuch zeigte eine um 21 % veränderte CYP2C9-Aktivität nach 14 Tagen',
      'Unter 18 Jahren sowie in Schwangerschaft und Stillzeit nicht empfohlen – keine Daten',
      'Nicht spät am Abend, da eher anregend',
      'Bei manischen Tendenzen wird Vorsicht empfohlen – das ist nicht belegt, Rhodiola fehlt im systematischen Review über 35 Manie-Fallberichte',
      'Handelsware häufig nicht authentisch – etwa ein Fünftel von rund 40 europäischen Produkten ohne Rosavin',
      'Spuren von Arsen, Cobalt und Blei in allen sieben untersuchten US-Kapselprodukten'
    ],
    dosage: 'Die EU-Monografie nennt für Trockenextrakt (DER 1,5–5:1, Ethanol 67–70 %) eine Einzeldosis von 144 bis 200 Milligramm, ein- bis zweimal täglich, Tagesdosis 144 bis 400 Milligramm, Erwachsene ab 18 Jahren. In den Studien wurden 50 bis 660 Milligramm pro Kapsel und bis zu 1.500 Milligramm täglich eingesetzt. Das sind Monografie- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'In den registrierten Präparaten morgens und mittags, etwa 30 Minuten vor dem Essen. Bei Beschwerden über zwei Wochen sieht die Monografie eine ärztliche Abklärung vor.',
    synergies: ['ashwagandha', 'l-theanin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wildgesammelte und kultivierte Pflanze aus arktischen und hoch gelegenen Regionen. Seit Februar 2023 steht die gesamte Gattung Rhodiola in CITES-Anhang II; Rohware und Extrakte sind genehmigungspflichtig, fertig abgepackte Endprodukte nicht.'
  },
  {
    id: 'ginseng',
    name: 'Panax Ginseng',
    altNames: 'Koreanischer Ginseng',
    category: 'Adaptogen',
    tags: ['energie', 'fokus', 'immun', 'libido', 'anti-aging'],
    short: 'Klassische Heilpflanze aus Asien. Kleine, belegte Effekte auf Erschöpfung, Gedächtnis und Nüchternblutzucker; für sportliche Leistung kein Nutzen.',
    description: 'Panax ginseng enthält Ginsenoside. Rot und weiß bezeichnen zwei Verarbeitungsarten derselben Wurzel. Die EMA führt Ginseng als traditionelles pflanzliches Arzneimittel bei Erschöpfung und Schwäche; die meisten Studien sind klein und kürzer als 3 Monate.',
    benefits: [
      'Kann Erschöpfung lindern, vor allem die geistige (kleine Effekte)',
      'Kleiner Effekt auf das Gedächtnis (Meta-Analyse über 15 RCTs); kein Effekt auf Aufmerksamkeit und exekutive Funktionen',
      'Männer mit Erektionsstörungen berichten häufiger, Geschlechtsverkehr haben zu können (Cochrane); der Effekt auf die Erektionsfunktion ist geringfügig',
      'Senkt den Nüchternblutzucker leicht (−0,31 mmol/l über 16 Studien), ohne Effekt auf HbA1c',
      'Immunsystem: nur sehr vorläufige Daten'
    ],
    risks: [
      'Schlafstörungen sind die häufigste Nebenwirkung',
      'Wechselwirkung mit Warfarin möglich (Fallbericht; beschleunigter Warfarin-Abbau bei Gesunden)',
      'Kann den Blutzucker senken: bei Diabetesmedikamenten ärztlich abstimmen',
      'Nicht in Schwangerschaft und Stillzeit, nicht unter 18 Jahren (EMA)',
      'Blutdruck: Meta-Analyse über 17 RCTs ohne Blutdruckanstieg'
    ],
    dosage: 'EU-Monographie der EMA: für den auf 4 % Ginsenoside standardisierten Trockenextrakt 40–200 mg täglich (in den ersten 5 Tagen in besonderen Situationen bis 600 mg). In Studien zu geistiger Leistung wurden Einzeldosen von 200 und 400 mg verwendet, zu Erschöpfung 1–2 g Extrakt täglich.',
    intake: 'Morgens oder mittags. Anwendung laut EMA-Monographie bis 3 Monate.',
    synergies: ['rhodiola', 'ashwagandha'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Nur als Wurzel/Extrakt'
  },
  {
    id: 'loewenmaehne',
    name: 'Löwenmähne (Lion\'s Mane)',
    altNames: 'Hericium erinaceus',
    category: 'Pilz',
    tags: ['gehirn', 'fokus', 'nerven', 'gedaechtnis', 'nootropic'],
    short: 'Der „Nerven-Pilz" – NGF-Anregung stammt aus dem Zellversuch, nicht vom Menschen.',
    description: 'In Zellkultur regen Inhaltsstoffe die Bildung von Nerve Growth Factor an. Ob das beim Menschen passiert, ist nicht gezeigt – am Menschen liegen nur wenige kleine Studien vor.',
    benefits: [
      'Kleine Humanstudien zu Gedächtnis und Fokus, uneinheitlich',
      'NGF-Anregung im Zellversuch gezeigt',
      'Kann leichte kognitive Einschränkungen lindern',
      'Unterstützt Darmgesundheit',
      'Einzelne kleine Studien zu Stimmung und Ängstlichkeit'
    ],
    risks: [
      'Bei Pilzallergie meiden',
      'In Studien bis 49 Wochen meist gut vertragen (Magen-Darm, Hautausschlag); Wechselwirkungen nicht untersucht, Langzeitdaten fehlen'
    ],
    dosage: '500–3.000 mg Dual-Extrakt täglich.',
    intake: 'Morgens mit Mahlzeit. Dual-Extrakte (Wasser + Alkohol) bevorzugen.',
    synergies: ['acetyl-l-carnitin', 'omega-3'],
    avoid: [],
    evidence: 'gering',
    sources: 'Essbarer Pilz (sieht aus wie Löwenmähne)'
  },
  {
    id: 'reishi',
    name: 'Reishi',
    altNames: 'Ganoderma lucidum',
    category: 'Pilz',
    tags: ['immun', 'schlaf', 'stress', 'leber', 'anti-aging'],
    short: 'Traditioneller Vitalpilz der TCM. Hinweise gegen Erschöpfung und für die Lebensqualität bei Krebspatienten; kein Effekt auf Blutzucker, Blutfette und Entzündungswerte, für Schlaf keine Humanstudie.',
    description: 'Reishi (Ganoderma lucidum, chinesisch Lingzhi) enthält Polysaccharide wie Beta-Glucane, Triterpenoide und Nukleoside. In einer doppelblinden Studie mit 132 Patienten besserte ein Reishi-Extrakt Erschöpfungszustände deutlich stärker als Placebo; bei Krebspatienten stiegen laut Cochrane einige Immunzellwerte leicht, die Lebensqualität war besser. Für Blutzucker, Blutfette, Blutdruck und Entzündungsmarker zeigen Cochrane-Auswertungen und eine Meta-Analyse keinen Effekt, die Evidenzqualität ist durchweg niedrig. Einen schlaffördernden Effekt belegen bisher nur Mausversuche.',
    benefits: [
      'Weniger Erschöpfung – ein RCT mit 132 Patienten mit Neurasthenie, eine Pilotstudie bei Krebs-Fatigue',
      'Leicht erhöhte Immunzellwerte und bessere Lebensqualität bei Krebspatienten – Cochrane, Studien von unbefriedigender Qualität',
      'Bei Sportlern niedrigeres Laktat und höherer Hämatokrit – Meta-Analyse über 6 kleine Studien',
      'Soll den Schlaf verbessern – bisher nur Tierdaten, keine Humanstudie',
      'Leberschutz wird postuliert – am Menschen nicht gezeigt, kein Effekt auf Leberenzyme'
    ],
    risks: [
      'Selten Leberschäden, Einzelfälle bis hin zu einem tödlichen Verlauf (LiverTox)',
      'Unterzuckerung möglich, auch ohne Diabetes – Vorsicht mit Diabetes-Medikamenten',
      'Unter Gerinnungshemmern nicht untersucht – vorher ärztlich klären (bei Gesunden keine Gerinnungsveränderung)',
      'Beta-Glucan-Extrakte nicht zusammen mit Kortison oder entzündungshemmenden Schmerzmitteln',
      'Mundtrockenheit, Verstopfung, Schlaflosigkeit, Juckreiz, Schwindel (Patientenbefragung, 9,1 Prozent mit Nebenwirkungen)'
    ],
    dosage: 'Keine Dosierungsangabe. Nach Einschätzung von BVL und BfArM (2015) sind Ganoderma-Produkte als Arzneimittel anzusehen; zugelassen sind sie in Deutschland nicht, deshalb greift § 3a Heilmittelwerbegesetz.',
    intake: 'Keine Einnahmeempfehlung. Eine abendliche Einnahme für besseren Schlaf ist durch Humanstudien nicht gestützt.',
    synergies: ['ashwagandha', 'glycin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Pilz; verwendet werden Fruchtkörper, Extrakte und Sporen'
  },
  {
    id: 'cordyceps',
    name: 'Cordyceps',
    altNames: 'Cordyceps militaris / sinensis',
    category: 'Pilz',
    tags: ['energie', 'sport', 'ausdauer', 'immun', 'libido'],
    short: 'Ausdauer-Pilz der TCM. Kleine Studien und eine Meta-Analyse zeigen leichte Verbesserungen von Schwelle und Sauerstoffaufnahme, bei gut trainierten Radfahrern blieb der Effekt aus.',
    description: 'Sammelbegriff für mehrere Schlauchpilze: den seltenen Chinesischen Raupenpilz (Cordyceps sinensis), den gezüchteten Cordyceps militaris und Myzelien verwandter Pilze. Eine Meta-Analyse von 2025 fand für Cordyceps sinensis bei Sportlern kleine, signifikante Verbesserungen von Ausdauer, ventilatorischer Schwelle und VO2peak, allerdings aus je 2 bis 3 Studien; bei gut trainierten Radfahrern zeigte sich nichts. Die Rekorde chinesischer Läuferinnen von 1993, mit denen der Pilz berühmt wurde, sind ein Bericht, kein Beleg; 2016 wurde ein Brief über erzwungenes Doping bekannt. Ob gezüchteter militaris wie sinensis wirkt, ist am Menschen nicht verglichen.',
    benefits: [
      'Leicht bessere Ausdauer-Kennwerte (ventilatorische Schwelle, VO2peak) – Meta-Analyse aus je 2 bis 3 kleinen Studien',
      'Soll die ATP-Produktion steigern – nur an Mäusen gezeigt',
      'Höhere Aktivität natürlicher Killerzellen in zwei RCTs mit je 79 Gesunden – Blutwerte, keine Infekt-Endpunkte',
      'Bei chronischer Nierenerkrankung als Zusatztherapie bessere Kreatininwerte – Cochrane, Evidenz von niedriger Qualität'
    ],
    risks: [
      'In Studien meist gut vertragen, Nebenwirkungen aber kaum systematisch erfasst',
      'Qualität und Identität der Ware unsicher; Arsen in Cordyceps sinensis nachgewiesen',
      'Hebt Immunmarker an – bei Autoimmunerkrankungen oder unter Immunsuppressiva vorher ärztlich klären',
      'Keine Daten für Schwangerschaft und Stillzeit'
    ],
    dosage: 'Keine Dosierungsangabe. Nach Einschätzung von BVL und BfArM (2015) sind Cordyceps-sinensis-Produkte als Arzneimittel anzusehen; zugelassen sind sie in Deutschland nicht, deshalb greift § 3a Heilmittelwerbegesetz.',
    intake: 'Keine Einnahmeempfehlung. Die Studien liefen über 2 bis 12 Wochen; ein Effekt nach nur einer Woche zeigte sich in einer Studie nicht.',
    synergies: ['rhodiola', 'kreatin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Pilz (Wildform selten und gefährdet; gezüchtete Formen und Myzelien sind andere Präparate, ihre Gleichwertigkeit ist nicht belegt)'
  },
  {
    id: 'bacopa',
    name: 'Bacopa Monnieri',
    altNames: 'Brahmi',
    category: 'Adaptogen',
    tags: ['gehirn', 'gedaechtnis', 'fokus', 'stress', 'nootropic'],
    short: 'Ayurvedisches Kraut. Die belegte Wirkung sitzt fast nur im Gedächtnis und braucht rund zwölf Wochen.',
    description: 'Der Effekt zeigt sich in den Studien nach rund zwölf Wochen täglicher Einnahme, gemessen wird er beim verzögerten Abruf. Untersucht werden standardisierte Extrakte; der bestuntersuchte, CDRI 08, ist auf nicht weniger als 55 % Bacoside eingestellt.',
    benefits: [
      'Verbessert den verzögerten Abruf von Gelerntem (Gedächtnis)',
      'Verlangsamt das Vergessen neu gelernter Information',
      'Wirkung auf Angst uneinheitlich: positiv in zwei RCTs, kein Effekt in zwei weiteren',
      'Neuroprotektion und antioxidative Wirkung bisher nur in Zellkultur und Tiermodell'
    ],
    risks: [
      'Magen-Darm-Beschwerden sind die häufigste dokumentierte Nebenwirkung: vermehrter Stuhlgang, Bauchkrämpfe, Übelkeit',
      'Tierdaten zeigen einen Anstieg von T4; Vorsicht bei Schilddrüsenüberfunktion und unter Schilddrüsenmedikation, Humandaten fehlen',
      'Hemmt mehrere Cytochrom-Isoenzyme; Fallberichte zu Agomelatin und Moclobemid',
      'Cholinerge Wirkung: kritisch bei Acetylcholinesterase-Hemmern, langsamem Puls, Asthma, COPD, Magengeschwür',
      'Absetzen vor Operationen wird empfohlen, ist aber nur mechanistisch begründet',
      'Keine Daten für Schwangerschaft und Stillzeit'
    ],
    dosage: '300–600 mg standardisiert (50 % Bacoside).',
    intake: 'Mit fetthaltiger Mahlzeit (fettlöslich). Morgens oder mittags.',
    synergies: ['loewenmaehne', 'acetyl-l-carnitin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Nur als Pflanze/Extrakt'
  },
  {
    id: 'kurkuma',
    name: 'Kurkuma (Curcumin)',
    altNames: 'Curcumin C3 Complex',
    category: 'Kräuter',
    tags: ['entzuendung', 'gelenke', 'gehirn', 'anti-aging', 'anti-oxidant'],
    short: 'Bei Kniearthrose so wirksam wie Ibuprofen, mit weniger Magenbeschwerden. Die Bioverfügbarkeitstricks, die dafür nötig sind, fallen zugleich in den Fallserien zur Leberschädigung auf.',
    description: 'Curcumin wird schlecht aufgenommen: In einer Dosiseskalation war bis zu einer Einzeldosis von 8.000 mg kein Curcumin im Serum nachweisbar. Deshalb arbeiten Präparate mit Piperin, Mizellen oder Phospholipid-Komplexen. Diese Wege unterscheiden sich pharmakokinetisch stark, und eigene Wirksamkeitsdaten gibt es nicht für jede Form. Klinisch am besten belegt ist die Kniearthrose. Für Krebsprävention, Anti-Aging und Leber-Entgiftung fehlt Vergleichbares.',
    benefits: [
      'Lindert bei Kniearthrose Schmerz und Funktionseinschränkung: Netzwerk-Meta-Analyse über 23 Studien mit 2.175 Patienten, -1,63 auf der Schmerzskala und -18,85 im WOMAC-Gesamtscore',
      'War in einer Studie mit 367 Patienten über 4 Wochen gegenüber Ibuprofen nicht unterlegen, bei weniger Bauchbeschwerden',
      'Senkt bei Kniearthrose CRP und TNF-alpha (Meta-Analyse über 21 Studien mit 1.705 Patienten), nicht aber Interleukin-6 und Prostaglandin E2',
      'Als Zusatz zu Mesalazin bei aktiver Colitis ulcerosa: 53,8 % klinische Remission nach 4 Wochen gegenüber keinem Patienten unter Placebo',
      'Bessert bei Fettleber die Steatose (Odds Ratio 4,39); eine zweite Meta-Analyse findet für ALT keinen Effekt',
      'Verbessert in 18 doppelblinden Studien gedächtnisbezogene Endpunkte (standardisierte mittlere Differenz 0,57), andere kognitive Domänen nicht',
      'Kann depressive Symptome lindern, der Effekt ist aber heterogen und laut den Autoren fragil'
    ],
    risks: [
      'LiverTox führt Kurkuma mit dem Likelihood Score A als gut dokumentierte Ursache klinisch manifester Leberschädigung, Latenz typischerweise 1 bis 4 Monate',
      'DILIN-Fallserie: 10 Fälle, 5 Krankenhausaufenthalte, 1 Todesfall durch akutes Leberversagen',
      'HLA-B*35:01 bei 7 von 10 dieser Fälle – die Veranlagung ist vorher nicht erkennbar',
      'Betroffen waren vor allem hoch dosierte und bioverfügbarkeitsoptimierte Präparate, oft mit Piperin',
      'Laut EU-Monographie nicht empfohlen bei Verschluss der Gallenwege, Cholangitis, Lebererkrankung und Gallensteinen',
      'Nicht in Schwangerschaft und Stillzeit; für unter 18-Jährige mangels Daten nicht belegt',
      'Mögliche Wechselwirkungen mit NSAR, Thrombozytenaggregationshemmern, Lipidsenkern, Immunsuppressiva und Warfarin – klinische Belege laut EMA unzureichend',
      'Vom BfR geprüfte Nahrungsergänzungsmittel überschritten den ADI von 3 mg/kg Körpergewicht deutlich (8,3 und 6,1 mg/kg)'
    ],
    dosage: 'Die EFSA nennt für Curcumin einen ADI von 3 mg pro Kilogramm Körpergewicht und Tag, und zwar über alle Quellen zusammen. Studien lagen darüber: Die Vergleichsstudie gegen Ibuprofen verwendete 1.500 mg Curcuma-domestica-Extrakt pro Tag über 4 Wochen, die Colitis-Studie 3 g Curcumin pro Tag. Die EU-Monographie für das traditionelle Arzneimittel erlaubt höchstens 4 g Kurkuma pro Tag, das entspricht maximal 209 mg Curcuminoiden.',
    intake: 'Fettlöslich, daher zu einer Mahlzeit. Wichtiger als die Tageszeit ist die Dauer: Leberschäden traten typischerweise nach 1 bis 4 Monaten auf. Bauchschmerzen, dunkler Urin oder eine Gelbfärbung von Haut oder Augen sind ein Grund, das Präparat abzusetzen und ärztlichen Rat zu suchen.',
    synergies: ['omega-3', 'resveratrol'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Kurkuma-Wurzel (goldene Milch)'
  },

  // ============ ANTIOXIDANTIEN & LONGEVITY ============
  {
    id: 'coq10',
    name: 'Coenzym Q10 (Ubiquinol)',
    altNames: 'Ubiquinon (oxidiert) / Ubiquinol (reduziert)',
    category: 'Antioxidant',
    tags: ['herz', 'energie', 'anti-aging', 'mitochondrien', 'haut'],
    short: 'Träger der Atmungskette. Ubiquinol wird besser aufgenommen, die Studien mit harten Endpunkten nutzten aber Ubiquinon.',
    description: 'CoQ10 transportiert in der Atmungskette Elektronen und ist damit an der ATP-Produktion beteiligt. Das BfR stuft es nicht als essentiellen Nährstoff ein, weil der gesunde Körper es selbst bildet. Am besten belegt ist der Einsatz bei chronischer Herzinsuffizienz. Statine senken den CoQ10-Spiegel im Blut messbar – ob eine Zufuhr Muskelbeschwerden lindert, ist strittig.',
    benefits: [
      'Senkte bei chronischer Herzinsuffizienz kardiovaskuläre Ereignisse und Sterblichkeit (Q-SYMBIO, Cochrane: Evidenz moderater Qualität)',
      'Reduziert in Meta-Analysen die Migräne-Attackenfrequenz',
      'Verbessert bei idiopathischer männlicher Unfruchtbarkeit Spermienkonzentration und Motilität',
      'Erhöht die CoQ10-Blutspiegel zuverlässig – auch unter Statintherapie',
      'Senkt den systolischen Blutdruck leicht, der Befund ist jedoch nicht stabil',
      'Kleine Studie: weniger Falten und Mikrorelieflinien nach 12 Wochen'
    ],
    risks: [
      'Bis 300 mg täglich gelegentlich Übelkeit, Sodbrennen, Magenbeschwerden, Durchfall',
      'Ab 100 mg täglich wurde leichte Schlaflosigkeit berichtet – deshalb nicht abends',
      'Wechselwirkung mit Cumarin-Antikoagulanzien und Blutdrucksenkern laut BfR unzureichend untersucht',
      'Warfarin-Therapieversagen unter CoQ10 beschrieben (reversibel)',
      'Nicht bei laufender Chemotherapie, Gallenwegsverschluss oder bekannter Überempfindlichkeit',
      'Keine Daten für Schwangerschaft und Stillzeit'
    ],
    dosage: 'Das BfR empfiehlt für Nahrungsergänzungsmittel bis zu 100 mg pro Tag und rät darüber zu ärztlichem Rat. Studien verwendeten mehr: Q-SYMBIO dreimal täglich 100 mg, KiSel-10 200 mg mit Selen, Statin-Studien 100 bis 600 mg pro Tag.',
    intake: 'Fettlöslich, daher mit einer fetthaltigen Mahlzeit. Morgens oder mittags, weil ab 100 mg täglich leichte Schlaflosigkeit berichtet wurde.',
    synergies: ['omega-3', 'vitamin-e', 'pqq'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Innereien, fetter Fisch, Rindfleisch'
  },
  {
    id: 'resveratrol',
    name: 'Resveratrol',
    altNames: 'Trans-Resveratrol',
    category: 'Antioxidant',
    tags: ['anti-aging', 'herz', 'sirtuine', 'longevity', 'anti-oxidant'],
    short: 'Polyphenol aus Trauben. Gut untersucht – der Longevity-Nutzen ließ sich am Menschen nicht bestätigen.',
    description: 'Resveratrol aktiviert SIRT1 in Zellversuchen; die Übertragung auf den Menschen ist umstritten und die Sirtuin-Hypothese wurde mehrfach angezweifelt. Studien an Menschen fanden für die beworbenen Longevity-Effekte keine Bestätigung. Trans-Resveratrol ist die übliche Form.',
    benefits: [
      'Aktiviert Sirtuine im Zellversuch – Übertragung umstritten',
      'Effekte auf Gefäßmarker in kleinen Studien, uneinheitlich',
      'Antioxidative Wirkung',
      'Einzelne Studien zum Blutzucker, ohne konsistentes Bild',
      'Synergie mit NMN/NR'
    ],
    risks: [
      'Bei Blutverdünnern Vorsicht',
      'Östrogenische Wirkung: Vorsicht bei hormonsensitiven Erkrankungen'
    ],
    dosage: '250–500 mg täglich Trans-Resveratrol.',
    intake: 'Morgens mit fetthaltiger Mahlzeit (fettlöslich).',
    synergies: ['nmn', 'quercetin', 'pterostilben'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Rotwein, Trauben, Beeren (in sehr geringen Mengen)'
  },
  {
    id: 'nmn',
    name: 'NMN',
    altNames: 'Nicotinamid-Mononukleotid',
    category: 'Longevity',
    tags: ['anti-aging', 'energie', 'longevity', 'nad', 'mitochondrien'],
    short: 'NAD+-Vorstufe. Zentrales Longevity-Supplement laut David Sinclair.',
    description: 'NAD+-Spiegel sinken mit dem Alter drastisch. NMN wird zu NAD+ umgewandelt, das für Mitochondrienfunktion und DNA-Reparatur kritisch ist.',
    benefits: [
      'Steigert NAD+ im Blut – der Anstieg im Gewebe ist schwach belegt',
      'Soll die Mitochondrienfunktion verbessern – Tierdaten, am Menschen nur Surrogatmarker',
      'Potenziell Anti-Aging-Effekte',
      'Mehr Energie',
      'Unterstützt DNA-Reparatur'
    ],
    risks: [
      'Forschung noch in Entwicklung',
      'Hohe Kosten',
      'Teilweise regulatorische Unsicherheit (EU)'
    ],
    dosage: '250–1.000 mg täglich (umstritten).',
    intake: 'Morgens auf leeren Magen. Sublingual oder liposomal für Bioverfügbarkeit.',
    synergies: ['resveratrol', 'tmg'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Brokkoli, Avocado (sehr geringe Mengen)',
    podcasts: [
      {
        title: 'KI-Podcast: NAD+ & NMN – der Longevity-Star im Faktencheck',
        audio: 'audio/nad-nmn-podcast.mp3',
        spotify: '2cRowv4Y2uQOr3AZ48AuU3',
        lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser (Folge 31). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.'
      }
    ]
  },
  {
    id: 'astaxanthin',
    name: 'Astaxanthin',
    altNames: 'Haematococcus pluvialis',
    category: 'Antioxidant',
    tags: ['anti-oxidant', 'haut', 'augen', 'ausdauer', 'entzuendung'],
    short: 'Carotinoid aus Mikroalgen. Am Menschen belegt für Hautfeuchtigkeit, Hautelastizität und Regeneration nach harten Einheiten.',
    description: 'Astaxanthin gibt Lachs und Krill seine rote Farbe und wird für Nahrungsergänzungsmittel aus der Süßwasseralge Haematococcus pluvialis gewonnen. In der EU ist es ein zulassungspflichtiges neuartiges Lebensmittel mit altersgestaffelten Höchstmengen.',
    benefits: [
      'Verbessert Hautfeuchtigkeit und Hautelastizität (Meta-Analyse über 8 RCTs)',
      'Senkt die Kreatinkinase nach belastendem Training (Meta-Analyse über 24 RCTs)',
      'Bessert Nüchternblutzucker, HbA1c und LDL bei Prädiabetes und Typ-2-Diabetes',
      'Senkt oxidierte Plasmaproteine am Menschen messbar',
      'Senkt einzelne Entzündungsmarker, nicht alle',
      'UV-Schutz von innen: Einzelbefund aus einer Studie mit 23 Teilnehmern'
    ],
    risks: [
      'In der EU ab 14 Jahren auf 8 mg pro Tag begrenzt; für Kinder unter 3 Jahren nicht zugelassen',
      'Bei Kindern von 10 bis unter 14 Jahren überschreitet schon die zugelassene Menge den EFSA-Tagesrichtwert',
      'In Schwangerschaft und Stillzeit nicht ausreichend untersucht',
      'Während Chemo- oder Strahlentherapie abgeraten: Antioxidantien können die Behandlung schwächen',
      'Mögliche Beeinflussung von Cytochrom-P450-Enzymen und damit des Arzneimittelabbaus',
      'Krillprodukte bei Krebstierallergie problematisch'
    ],
    dosage: 'In der EU ab 14 Jahren bis 8 mg täglich zugelassen (Oleoresin aus Haematococcus pluvialis). Studien haben 2 bis 12 mg täglich eingesetzt.',
    intake: 'Mit fetthaltiger Mahlzeit (fettlöslich).',
    synergies: ['omega-3', 'vitamin-e', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wildlachs, Krill, Süßwasseralgen'
  },
  {
    id: 'glutathion',
    name: 'Glutathion',
    altNames: 'Liposomales Glutathion / GSH / S-Acetyl-Glutathion',
    category: 'Antioxidant',
    tags: ['entgiftung', 'anti-aging', 'immun', 'leber', 'anti-oxidant'],
    short: 'Das wichtigste körpereigene Antioxidans. Umstritten ist, ob geschlucktes Glutathion dort ankommt, wo es arbeitet.',
    description: 'Glutathion ist ein Tripeptid aus Cystein, Glutaminsäure und Glycin, das jede Zelle selbst bildet; N-Acetylcystein ist eine Vorstufe und ein eigener Stoff. Im Darm wird Glutathion durch die Gamma-Glutamyltransferase gespalten. Ob liposomale, sublinguale oder mizellare Formen das relevant ändern, ist am Blutspiegel gezeigt, nicht am klinischen Ergebnis.',
    benefits: [
      'Mengenmäßig wichtigstes körpereigenes Antioxidans',
      'Kofaktor der Phase-II-Konjugation und der Glutathionperoxidase – körpereigene Biochemie, kein gezeigter Effekt der Einnahme',
      'Hebt die messbaren Glutathionspeicher über Monate an – randomisiert über sechs Monate gezeigt, gegenüber dem Ausgangswert',
      'Senkt den Melanin-Index an sonnenexponierter Haut leicht – mehrere randomisierte Studien, kleine Effekte, eine größere Studie ohne Signifikanz',
      'Leberschutz, Entgiftung und Immunstärkung als Effekt der Einnahme – keine belastbaren Humandaten'
    ],
    risks: [
      'Selten: schwefeliger Geruch, Magen-Darm-Beschwerden',
      'Bei Asthma und Sulfitempfindlichkeit: vernebeltes Glutathion löste in einer kontrollierten Provokation eine deutliche Atemwegsverengung aus',
      'Intravenöse Anwendung zur Hautaufhellung ist von Arzneimittelbehörden beanstandet – berichtet wurden schwere Hautreaktionen, Schilddrüsen- und Nierenfunktionsstörungen, Luftembolie und Sepsis',
      'Wechselwirkungen mit Arzneimitteln sind für die orale Form nicht systematisch untersucht',
      'Keine Langzeitdaten über sechs Monate hinaus'
    ],
    dosage: 'In den Studien eingesetzt wurden 250 bis 1.000 mg Glutathion täglich über bis zu sechs Monate. Das BVL erlaubt seit 2017 für Importe aus dem EU- und EWR-Raum höchstens 200 mg je Kapsel bei zwei Kapseln als empfohlener Tagesverzehrsmenge; die EFSA hat für S-Acetyl-Glutathion 300 mg täglich für Erwachsene als sicher bewertet.',
    intake: 'In den Studien wurde die Einnahme unterschiedlich gehandhabt. Ein Vorteil einer bestimmten Tageszeit oder der Einnahme auf leeren Magen ist nicht untersucht.',
    synergies: ['vitamin-c', 'alpha-liponsaeure', 'selen'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Spargel, Avocado, Molke (Glutathion instabil in Nahrung)',
    podcasts: [
      { title: 'Glutathion: Das Master-Antioxidans im Faktencheck', audio: 'audio/glutathion-podcast.mp3', spotify: '0E6RA6fW9xUHQJ9iAY3k72', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 65) · mit Paul & Paula. Das Master-Antioxidans: GSH/GSSG, Leber-Phase-2, Altersabfall, orale Daten (Richie 2015), die Baustein-Strategie mit NAC + Glycin (GlyNAC), Schwefel-Küche, Selen, Tank-Leerer (Alkohol, Paracetamol) und die Hormesis-Falle beim Training. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 04.09.2026, 10:00)' }
    ]
  },
  {
    id: 'alpha-liponsaeure',
    name: 'Alpha-Liponsäure (ALA)',
    altNames: 'R-ALA',
    category: 'Antioxidant',
    tags: ['blutzucker', 'anti-oxidant', 'nerven', 'leber', 'mitochondrien'],
    short: 'Wasser- und fettlösliches Antioxidans und körpereigener Cofaktor im Energiestoffwechsel. Gut belegt gegen die Missempfindungen der diabetischen Polyneuropathie, in Deutschland dafür als Arzneimittel zugelassen.',
    description: 'Schwefelhaltige Fettsäure, die der Körper selbst bildet und die als fest gebundener Cofaktor in mitochondrialen Dehydrogenase-Komplexen sitzt. Die R-Form ist die natürlich vorkommende und wird besser aufgenommen als die S-Form, ist aber weniger stabil; die gesamte klinische Evidenz und das zugelassene Arzneimittel beruhen auf dem Racemat (DL-alpha-Liponsäure), nicht auf R-ALA.',
    benefits: [
      'Lindert die sensiblen Symptome der diabetischen Polyneuropathie (10 RCTs, 1.242 Patienten)',
      'Bessert den Defizitscore und die Patientenzufriedenheit in denselben Studien',
      'Senkt HbA1c geringfügig (0,35 Punkte über 41 Arbeiten) — ohne messbaren Effekt auf Insulin und HOMA-IR',
      'Kleiner Gewichtseffekt: 1,27 kg gegenüber Placebo über 10 doppelblinde Studien',
      'Wasser- und fettlöslich, wirkt als Cofaktor direkt in den Mitochondrien'
    ],
    risks: [
      'Insulin-Autoimmun-Syndrom mit schweren Unterzuckerungen bei bestimmten HLA-Varianten (EFSA 2021, 49 Fallberichte); seit 2015 Warnhinweis in der europäischen Produktinformation',
      'Verstärkt die Wirkung von Insulin und oralen Antidiabetika',
      'Übelkeit, Erbrechen und Schwindel nehmen mit der Dosis zu',
      'Wirkungsverlust von Cisplatin möglich',
      'Komplexbildung mit Eisen, Magnesium, calciumhaltigen Präparaten und Milchprodukten — zeitlicher Abstand nötig',
      'Biotin teilt sich mit Lipoat den Transporter SLC5A6; eine dadurch ausgelöste Biotin-Unterversorgung ist am Menschen nicht gezeigt',
      'Nicht geeignet für Kinder, Schwangere und Stillende'
    ],
    dosage: 'Das in Deutschland zugelassene Arzneimittel enthält 600 mg racemische (DL-)alpha-Liponsäure täglich; die Neuropathie-Studien haben 600 bis 1.800 mg geprüft und 600 mg als bestes Nutzen-Risiko-Verhältnis beschrieben.',
    intake: 'Nüchtern, etwa 30 Minuten vor der ersten Mahlzeit; Abstand zu Eisen, Magnesium, calciumhaltigen Präparaten und Milchprodukten.',
    synergies: ['acetyl-l-carnitin', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Spinat, Brokkoli, Innereien (Spurenmengen)'
  },
  {
    id: 'quercetin',
    name: 'Quercetin',
    altNames: 'Quercetin-Dihydrat',
    category: 'Antioxidant',
    tags: ['immun', 'allergie', 'anti-aging', 'senolytikum', 'entzuendung'],
    short: 'Pflanzliches Flavonol. Am besten belegt ist eine leichte Blutdrucksenkung ab 500 mg täglich; die senolytische Wirkung ist beim Menschen nur zusammen mit Dasatinib geprüft.',
    description: 'Quercetin ist das häufigste Flavonol der Ernährung. Das am besten untersuchte Feld ist der Blutdruck: Drei Meta-Analysen über 7, 10 und 17 randomisierte Studien finden eine Senkung um 2,38 bis 3,09 mmHg systolisch, deutlicher ab 500 mg täglich und deutlicher bei bereits erhöhtem Blutdruck. Nach harter Belastung beschleunigt Quercetin die Erholung; die Ausdauerleistung selbst verbessert es bei Trainierten nicht. Als Senolytikum ist es am Menschen nie allein geprüft worden – in allen fünf Humanstudien stand es neben dem verschreibungspflichtigen Dasatinib, und die einzige Phase-2-Studie hat ihren primären Endpunkt verfehlt. Die Aufnahme hängt stark von der chemischen Form ab: 52 % aus Zwiebel-Glucosiden, 24 % aus dem Aglykon, 17 % aus Rutinosid.',
    benefits: [
      'Senkt den Blutdruck leicht – 2,38 bis 3,09 mmHg systolisch in drei Meta-Analysen, ab 500 mg täglich deutlicher',
      'Wirkt vor allem bei bereits erhöhtem Blutdruck; bei Prähypertonie zeigte sich keine Änderung',
      'Beschleunigt die Erholung nach harter Belastung: weniger Muskelkater, niedrigere Kreatinkinase (13 RCTs, 249 Teilnehmer)',
      'Bessert Nasensymptome bei allergischer Rhinitis – Polyphenole gemeinsam ausgewertet, Vertrauen in die Evidenz niedrig bis sehr niedrig',
      'Senolytischer Effekt – am Menschen nur in Kombination mit Dasatinib geprüft, nie allein'
    ],
    risks: [
      'Aufnahme hängt stark von der chemischen Form ab: 52 % aus Zwiebel-Glucosiden, 24 % aus dem Aglykon, 17 % aus Rutinosid – mit Nahrungsfett oder als Phytosom verbessern',
      'BfR: keine ausreichenden Daten für die Anwendung über mehr als 12 Wochen bei Dosen ab 1.000 mg täglich',
      'BfR aus Tierdaten: könnte nierenschädigende Effekte an vorgeschädigter Niere verstärken',
      'BfR aus Tierdaten: könnte die Tumorentwicklung bei östrogenabhängigen Krebserkrankungen fördern',
      'Verändert die Bioverfügbarkeit bestimmter Arzneimittel – nicht neben eng dosierter Dauermedikation',
      'Sehr hohe Antioxidantiendosen können Trainingsanpassungen bremsen (ISSN Position Stand 2026)',
      'Selten: Kopfschmerzen'
    ],
    dosage: 'Studien verwendeten 500 mg täglich (Blutdruck) und 1.000 mg täglich (Sport und Regeneration); senolytisch 1.000 bis 1.250 mg an wenigen Tagen pro Woche, immer zusammen mit Dasatinib.',
    intake: 'Mit fetthaltiger Mahlzeit; Ballaststoffe verdoppeln die Aufnahme etwa. Belegte Formen mit besserer Aufnahme sind Glucoside, Oligoglucoside und Lecithin-Phytosom.',
    synergies: ['vitamin-c', 'fisetin', 'bromelain'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Zwiebeln, Äpfel, Beeren, Grüntee, Kapern'
  },
  {
    id: 'pqq',
    name: 'PQQ',
    altNames: 'Pyrrolochinolinchinon',
    category: 'Antioxidant',
    tags: ['mitochondrien', 'energie', 'gehirn', 'anti-aging'],
    short: 'Redox-Coenzym, das in Zellversuchen neue Mitochondrien anstößt. Drei kleine Humanstudien über 12 Wochen fanden Verbesserungen bei Gedächtnis und Aufmerksamkeit.',
    description: 'PQQ (Pyrrolochinolinchinon) aktiviert in Zellkultur über CREB und PGC-1α die Bildung neuer Mitochondrien. Am Menschen gibt es mehrere kleine placebokontrollierte Studien: Mit 20 bis 21,5 mg täglich über 12 Wochen verbesserten sich Teilbereiche von Gedächtnis und Aufmerksamkeit, unter Ausdauertraining stieg der Mitochondrienmarker PGC-1α, die Leistung nicht. Die Studien sind klein und teils vom Hersteller. In der EU ist PQQ-Dinatriumsalz seit 2018 als neuartiges Lebensmittel zugelassen, Höchstmenge 20 mg pro Tag. Wird oft mit CoQ10 kombiniert.',
    benefits: [
      'Verbesserte Teilbereiche von Gedächtnis und Aufmerksamkeit in drei kleinen RCTs über 12 Wochen',
      'Mitochondrien-Neubildung über PGC-1α in Zellkultur und Tier, am Menschen Anstieg des Markers unter Training',
      'Senkte in einer kleinen Crossover-Studie CRP und IL-6',
      'Von der EFSA bis 20 mg pro Tag als sicher bewertet'
    ],
    risks: [
      'Nicht für Schwangere und Stillende (EU-Zulassung nur für Erwachsene)',
      'EU-Höchstmenge 20 mg pro Tag',
      'Keine Leistungssteigerung im Sport gezeigt',
      'Studien klein und kurz, teils vom Hersteller; Langzeitdaten fehlen'
    ],
    dosage: 'Die Studien verwendeten 20 bis 21,5 mg täglich über bis zu 12 Wochen. EU-Höchstmenge in Nahrungsergänzungsmitteln: 20 mg pro Tag.',
    intake: 'Täglich über mehrere Wochen, die Studien liefen 8 bis 12 Wochen. Zum Einnahmezeitpunkt gibt es keine Daten.',
    synergies: ['coq10', 'nmn'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Natto, Petersilie, Grüntee (sehr geringe Mengen)'
  },

  // ============ SCHLAF & NEUROTRANSMITTER ============
  {
    id: 'melatonin',
    name: 'Melatonin',
    altNames: 'Schlafhormon',
    category: 'Hormon',
    tags: ['schlaf', 'jetlag', 'anti-oxidant', 'hormone'],
    short: 'Natürliches Schlafhormon. Niedrig dosieren – weniger ist mehr.',
    description: 'Studien zeigen: 0,3–0,5 mg sind oft wirksamer als die üblichen 3–10 mg. Auch ein potentes Antioxidans in den Mitochondrien.',
    benefits: [
      'Verkürzt Einschlafzeit',
      'Hilft bei Jetlag',
      'Starkes Antioxidans',
      'Unterstützt Immunsystem',
      'Reguliert zirkadianen Rhythmus'
    ],
    risks: [
      'Morgendliche Benommenheit bei Überdosis',
      'Kann Träume verstärken',
      'Bei hormonellen Erkrankungen Arzt fragen',
      'Nicht ideal für Kinder/Teenager'
    ],
    dosage: '0,3–1 mg etwa 30–60 min vor dem Schlafen. Bei Jetlag bis 3 mg.',
    intake: 'Abends bei gedämpftem Licht. Nicht bei heller Beleuchtung.',
    synergies: ['magnesium', 'glycin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kirschen, Pistazien (Spurenmengen)',
    podcasts: [
      {
        title: 'Melatonin: Das Dunkelheits-Hormon im Faktencheck',
        audio: 'audio/melatonin-podcast.mp3',
        spotify: '5zZ1Xwon7b0f2MyWWXZnlp',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 55) \u00b7 mit Paul & Paula. Das meistgekaufte Schlafmittel der Welt, richtig benutzt: Chronobiotikum statt Schlaftablette, die Weniger-ist-mehr-Dosis (Wurtman/MIT: 0,3\u20131 mg), ehrlich bezifferte Meta-Analysen, Jetlag (Cochrane-belegt), Schichtarbeit, das Eulen-Protokoll mit fr\u00fcher Mini-Dosis, die zweite Identit\u00e4t als Mitochondrien-Antioxidans und rotes Licht zwischen Physik und Marketing. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 25.08.2026, 10:00)'
      }
    ]
  },

  // ============ STOFFWECHSEL ============
  {
    id: 'berberin',
    name: 'Berberin',
    altNames: 'Berberis aristata, Berberis vulgaris, Coptis chinensis, Phellodendron amurense, Hydrastis canadensis',
    category: 'Kräuter',
    tags: ['blutzucker', 'stoffwechsel', 'darm', 'gewicht', 'cholesterin'],
    short: 'Senkt Blutzucker und Blutfette in mehreren Meta-Analysen, meist kleine Studien aus einer Region. Rechtlich hat sich die Lage 2026 gedreht: Die EFSA konnte für keine berberinhaltige Zubereitung eine sichere Aufnahmemenge ableiten.',
    description: 'Berberin ist ein Isochinolin-Alkaloid aus Berberitze, Goldfaden, Korkbaum und Goldwurzel. Bei Typ-2-Diabetes senkt es Blutzuckerwerte und Blutfette, gepoolt über mehr als 30 Studien aber nur um 0,19 Prozentpunkte HbA1c. Die AMPK-Erzählung hat ein Aufnahmeproblem: Die orale Bioverfügbarkeit liegt bei der Ratte bei 0,68 Prozent, beim Menschen werden nur Plasmaspiegel im niedrigen Nanogramm-pro-Milliliter-Bereich erreicht. Am 29. Januar 2026 billigte das EFSA-NDA-Panel einen Entwurf, wonach sich für keine der 13 geprüften berberinhaltigen Pflanzenzubereitungen eine sichere Aufnahmemenge ableiten lässt.',
    benefits: [
      'Senkt bei Typ-2-Diabetes Blutzuckerwerte: Meta-Analyse über 27 randomisierte Studien mit 2.569 Patienten, zusätzlich zur Lebensstilintervention stärker als diese allein',
      'Gepoolt über mehr als 30 Studien mit mehr als 2.000 Teilnehmern: Nüchternglukose −0,71 mmol/l, HbA1c −0,19 Prozentpunkte, von den Autoren selbst als klinisch bescheiden eingeordnet',
      'Senkt Blutfette: 16 randomisierte Studien mit 2.147 Teilnehmern, Gesamtcholesterin −0,47 mmol/l, LDL −0,38 mmol/l, Triglyzeride −0,28 mmol/l, HDL +0,08 mmol/l',
      'Eigener Lipidmechanismus, verschieden von dem der Statine: Stabilisierung der LDL-Rezeptor-mRNA über die 3-untranslatierte Region, im Hamster 3,5-facher mRNA-Anstieg',
      'Verringert das Wiederauftreten von Dickdarmadenomen: doppelblind, 1.108 randomisierte Teilnehmer, 36 Prozent gegenüber 47 Prozent, relatives Risiko 0,77',
      'Verändert die Zusammensetzung der Darmflora: 6 von 7 randomisierten Studien fanden signifikante Verschiebungen, die Richtung ist laut den Autoren aber nicht einheitlich günstig'
    ],
    risks: [
      'In Nahrungsergänzungsmitteln in der EU derzeit nicht verwendbar; die EFSA konnte am 29. Januar 2026 für keine der 13 geprüften Zubereitungen eine sichere Aufnahmemenge ableiten',
      'Hemmt und induziert CYP3A4, hemmt CYP2D6 und CYP2C9 quasi-irreversibel über einen Metabolit-Intermediat-Komplex',
      'Moduliert P-Glykoprotein sowie die Transporter OCT1, OCT2 und MATE1',
      'Belegter klinischer Fall: Bei Nierentransplantierten stieg die Ciclosporin-Exposition um 34,5 Prozent, der Talspiegel lag 29,3 Prozent über dem der Kontrolle',
      'Additive Effekte bei Unterzuckerung, Blutdruckabfall und QT-Verlängerung',
      'Hinweise auf Genotoxizität in Zellversuchen (Genmutation, Chromosomenschäden), im lebenden Organismus noch nicht bestätigt; Hydrastis-canadensis-Zubereitungen zeigten im Nagerversuch Leberadenome',
      'Magen-Darm-Beschwerden häufig: 20 von 58 Patienten (34,5 Prozent) in der Metformin-Vergleichsstudie',
      'Die ANSES rät ab bei Schwangeren und Stillenden, Kindern und Jugendlichen sowie bei Diabetes, Leber- und Herzerkrankungen',
      'Schwankende handelsübliche Wirkstärke; die nationalen Obergrenzen in Europa unterscheiden sich um mehr als eine Größenordnung',
      'Sehr geringe Aufnahme: 0,68 Prozent orale Bioverfügbarkeit bei der Ratte'
    ],
    dosage: 'Keine Empfehlung. Berberin ist in Deutschland kein zugelassenes Arzneimittel, weshalb § 3a Heilmittelwerbegesetz greift, und darf in Nahrungsergänzungsmitteln in der EU derzeit nicht verwendet werden. Zur Einordnung: Die französische ANSES leitete 2019 einen indikativen Toxizitätswert von 1,7 Mikrogramm je Kilogramm Körpergewicht und Tag ab und gibt selbst an, dass daraus für eine Person von 60 kg eine Tagesmenge von 0,1 mg folgt. Belegte pharmakologische Wirkungen sieht die ANSES ab 400 mg pro Tag, unerwünschte Wirkungen wurden ab 600 mg pro Tag beobachtet. Auf dem französischen Markt reichten die empfohlenen Tagesdosen zugleich von 250 bis 1.200 mg.',
    intake: 'Keine Einnahmeempfehlung. Wer bereits Medikamente einnimmt, sollte den Stoff wegen der Wechselwirkungen über CYP3A4, CYP2D6, CYP2C9 und P-Glykoprotein in jedem Fall ärztlich oder in der Apotheke ansprechen, statt ihn auf eigene Faust zu kombinieren.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Berberitze, chinesischer Goldfaden, Korkbaum, nordamerikanische Goldwurzel. Kein Lebensmittel im üblichen Sinn und in Deutschland kein zugelassenes Arzneimittel.',
    podcasts: [
      { title: 'Berberin: Das Natur-Metformin im Faktencheck', audio: 'audio/berberin-podcast.mp3', spotify: '7bSC4EYeFxIAgFjCAvkO8c', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 48) · mit Paul & Paula. Der gelbe Pflanzenstoff, der im Direktvergleich mit Metformin mithielt (Yin, Metabolism 2008), der AMPK-Fasten-Schalter, LDL −20 mg/dl über PCSK9, die Mikrobiom-Pointe (Dihydroberberin), PCOS-Daten und Wechselwirkungen (CYP3A4). Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 19.08.2026, 10:00)' }
    ]
  },
  {
    id: 'spermidin',
    name: 'Spermidin',
    altNames: 'Polyamin',
    category: 'Longevity',
    tags: ['anti-aging', 'autophagie', 'longevity', 'haare', 'herz'],
    short: 'Polyamin aus Weizenkeimen, das in Hefe, Fliegen und Mäusen Autophagie anschiebt – am Menschen bisher nur in einer Pilotstudie gemessen.',
    description: 'Spermidin ist ein körpereigenes Polyamin, das in Weizenkeimen und Pilzen besonders hoch konzentriert ist. Der Autophagie-Mechanismus ist im Tiermodell kausal belegt, die Kohortendaten zur Sterblichkeit sind stark – die grösste randomisierte Studie am Menschen hat ihren primären Endpunkt aber verfehlt.',
    benefits: [
      'Höhere Spermidinzufuhr aus dem Essen geht in zwei Kohorten mit niedrigerer Sterblichkeit einher – Bruneck mit 829 und UK Biobank mit 184.732 Teilnehmern',
      'Autophagie-Induktion in Hefe, Fliegen, Würmern und Mäusen kausal belegt; am Menschen einmal gemessen, in einer Pilotstudie mit 40 Teilnehmern und nur in B-Zellen',
      'Herzschutz und Lebensverlängerung bislang nur im Tiermodell – keine harten Endpunkte am Menschen',
      'Hinweis auf längere Wachstumsphase der Haare aus einer herstellerfinanzierten Studie zu einem Kombinationspräparat unbekannter Zusammensetzung',
      'Weniger Mundtrockenheit nach Kopf-Hals-Bestrahlung in einer randomisierten Proof-of-Concept-Studie mit 58 Patienten'
    ],
    risks: [
      'Gut verträglich in den untersuchten Mengen – kontrollierte Daten reichen bis 12 Monate, darüber hinaus fehlen sie',
      'In Schwangerschaft und Stillzeit meiden – die EU-Zulassung schliesst beide aus',
      'Bei Krebserkrankung oder immunsuppressiver Therapie nur nach ärztlicher Rücksprache',
      'Rohstoff ist Weizenkeim – bei Glutenunverträglichkeit ungeeignet'
    ],
    dosage: 'In der EU sind höchstens 6 mg Spermidin pro Tag als Lebensmittel zugelassen. Die Studien verwendeten 0,9 mg (SmartAge), 1 mg, 1,2 mg, 6 mg, 15 mg, 24 mg und 40 mg täglich.',
    intake: 'Morgens auf leeren Magen.',
    synergies: ['resveratrol', 'quercetin'],
    avoid: [],
    evidence: 'schwach',
    sources: 'Weizenkeime (höchster gemessener Polyamingehalt überhaupt), Pilze, grüne Paprika, Erbsen, Zitrusfrüchte, Soja und Tempeh; in gereiftem Käse dominiert Putrescin, nicht Spermidin',
    podcasts: [
      { title: 'Spermidin: Das Zellreinigungs-Molekül im Faktencheck', audio: 'audio/spermidin-podcast.mp3', spotify: '23hyzWDQbnBZy7LZkqL1SI', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 50, Jubiläum!) · mit Paul & Paula. Das Fasten-Imitat zum Schlucken: Eisenberg (Nature Medicine 2016: längeres Leben, elastischere Herzen), Bruneck-Kohorte (Kiechl, AJCN 2018: ~5 Jahre niedrigere Sterblichkeit), Autophagie-Mechanismus, die ehrliche SmartAge-Einordnung und die Spermidin-Speisekarte von Weizenkeimen bis Natto. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 21.08.2026, 10:00)' }
    ]
  },

  // ============ WEITERE ============
  {
    id: 'kollagen',
    name: 'Kollagen-Peptide',
    altNames: 'Hydrolysiertes Kollagen Typ I & III',
    category: 'Protein',
    tags: ['haut', 'gelenke', 'haare', 'anti-aging', 'darm'],
    short: 'Baustein für Haut, Haare, Nägel und Gelenke. Körpereigene Produktion sinkt ab 25.',
    description: 'Kollagen macht 30 % des Körperproteins aus. Mit Vitamin C eingenommen für bessere Synthese. Grass-fed oder Meeresfisch bevorzugen.',
    benefits: [
      'Verbessert Hautelastizität',
      'Stärkt Haare und Nägel',
      'Lindert Gelenkschmerzen',
      'Unterstützt Darmgesundheit',
      'Gute Glycin-Quelle'
    ],
    risks: [
      'Sehr sicher',
      'Bei Allergien auf Fisch/Rind beachten'
    ],
    dosage: '10–20 g täglich.',
    intake: 'Morgens mit Vitamin C im Kaffee/Smoothie. Oder nach dem Training.',
    synergies: ['vitamin-c', 'hyaluronsaeure'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Knochenbrühe, Haut/Bindegewebe von Tieren',
    podcasts: [
      {
        title: 'Kollagenpeptide & Glycin: Das Struktur-Duo im Faktencheck',
        audio: 'audio/kollagen-glycin-podcast.mp3',
        spotify: '7sEemDFiWAx5G7MBP0kW0F',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 60) \u00b7 mit Paul & Paula. Das Struktur-Duo: Haut-RCTs (Proksch, Bolke) ehrlich eingeordnet, die st\u00e4rkere Karte Sehnen/Gelenke/Knochen (Clark, Zdzieblik, K\u00f6nig), der Baar-Trick mit Vitamin C vorm Training \u2013 und Glycin als heimlicher Hauptdarsteller. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 30.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'probiotika',
    name: 'Probiotika',
    altNames: 'Lactobacillus / Bifidobakterien, Saccharomyces boulardii, Milchsäurebakterien',
    category: 'Probiotika',
    tags: ['darm', 'immun', 'verdauung'],
    short: 'Belege gelten für einen Stamm in einer Indikation, nicht für die Produktklasse. Am dichtesten sind sie bei Durchfall unter Antibiotika.',
    description: 'Probiotika sind lebende Mikroorganismen, meist Laktobazillen, Bifidobakterien oder die Hefe Saccharomyces boulardii. Entscheidend ist der Stamm, nicht die Gattung: Lactobacillus rhamnosus GG verhindert bei Kindern Durchfall unter Antibiotika, beim akuten Magen-Darm-Infekt derselben Altersgruppe wirkte er in einer Studie mit 971 Kindern nicht. Am besten belegt sind antibiotikabedingter Durchfall, die Clostridioides-difficile-Diarrhö bei hohem Ausgangsrisiko, Atemwegsinfekte und einzelne Stämme beim Reizdarm. Nach einer Antibiotikakur kann ein mehrstämmiges Präparat die Rückkehr der eigenen Darmflora sogar verzögern: Ohne Präparat war sie nach rund drei Wochen weitgehend zurück, mit Präparat blieb sie laut Übersichtsarbeiten bis zu fünf Monate unvollständig. In der EU ist keine gesundheitsbezogene Angabe für Probiotika zugelassen, der Begriff „probiotisch" selbst ist unzulässig.',
    benefits: [
      'Antibiotikadurchfall bei Kindern: 8 statt 19 Prozent in 33 randomisierten Studien',
      'Clostridioides-difficile-Diarrhö: 1,5 statt 4,0 Prozent, deutlich nur bei Ausgangsrisiko über 5 Prozent',
      'Akute Atemwegsinfekte: relatives Risiko 0,76, und weniger verschriebene Antibiotika',
      'Reizdarm: fünf Einzelstämme haben in Meta-Analysen Kernsymptome gebessert',
      'Nekrotisierende Enterokolitis bei sehr unreifen Frühgeborenen: relatives Risiko 0,54'
    ],
    risks: [
      'Anfangs Blähungen, weiche Stühle, Bauchkrämpfe und Übelkeit möglich',
      'Nicht bei Immunsuppression nach Organ- oder Knochenmarktransplantation und nicht bei Schwerkranken',
      'Nicht bei akuter Gastroenteritis; bei Schwangeren, Stillenden und Kindern ärztlich abklären',
      'Seltene Infektionen durch den zugeführten Keim: 93 gesammelte Fälle von 1976 bis 2018, Gesamtsterblichkeit dieser Sammlung 19,6 Prozent',
      '2023 FDA-Warnung nach dem Tod eines Frühgeborenen unter 1.000 Gramm an einer Sepsis mit dem Keim aus dem Präparat'
    ],
    dosage: 'Was die Studien verwendet haben: Die einzige glaubwürdige Dosisschwelle einer Cochrane-Übersicht liegt bei 5 Milliarden KBE täglich, darüber sank die Number needed to treat bei Kindern von 9 auf 6. Studien zu Atemwegsinfekten arbeiteten mit 10 hoch 9 bis 10 hoch 11 KBE täglich über mehr als drei Monate, PLACIDE mit 6 mal 10 hoch 10 Organismen täglich über 21 Tage. Mehr Stämme oder höhere Zahlen auf der Packung sind kein belegtes Qualitätsmerkmal. Keine Anwendungsempfehlung.',
    intake: 'Die Studien geben Stamm, Dosis und Dauer an, nicht den Zeitpunkt relativ zur Mahlzeit; für eine bestimmte Tageszeit gibt es keinen Beleg. Verabreicht wurde in den Studien mit Milchprodukten, als Pulver oder in Kapseln.',
    synergies: ['praebiotika'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Sauerkraut, Kefir, Kimchi, Joghurt (fermentierte Lebensmittel). In einer randomisierten Studie über 17 Wochen mit 18 Teilnehmern je Arm erhöhte eine Kost mit viel fermentierten Lebensmitteln die Vielfalt des Mikrobioms und senkte Entzündungsmarker.'
  },
  {
    id: 'elektrolyte',
    name: 'Elektrolyte',
    altNames: 'Natrium / Kalium / Magnesium',
    category: 'Mineral',
    tags: ['energie', 'sport', 'keto', 'fluessigkeit', 'muskel'],
    short: 'Natrium, Kalium, Magnesium. Essenziell bei Keto, Fasten, Sport und Hitze.',
    description: 'Bei Low-Carb/Keto verliert der Körper Natrium und Kalium schneller. Elektrolyte beugen Krämpfen, Müdigkeit und Kopfschmerzen vor.',
    benefits: [
      'Verhindert Muskelkrämpfe',
      'Mehr Energie und Fokus',
      'Wichtig bei Keto-Grippe',
      'Verbessert Sportleistung',
      'Hilft bei Dehydrierung'
    ],
    risks: [
      'Nicht übertreiben – Nieren regulieren',
      'Vorsicht bei Bluthochdruck (Natrium)'
    ],
    dosage: 'Natrium 1–3 g, Kalium 500–1.000 mg, Magnesium 200 mg täglich.',
    intake: 'Über den Tag verteilt in Wasser. Beim Sport wichtig.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Meersalz, Bananen, Avocado, Kokoswasser, grünes Blattgemüse'
  },
  {
    id: 'koffein',
    name: 'Koffein',
    altNames: 'Trimethylxanthin',
    category: 'Stimulans',
    tags: ['energie', 'fokus', 'sport', 'stimmung'],
    short: 'Weltweit meistkonsumiertes Nootropic. Richtig dosiert sehr effektiv.',
    description: 'Koffein blockiert Adenosin-Rezeptoren. Halbwertszeit 5–6 Stunden – deshalb nach 14 Uhr für besseren Schlaf meiden. Nicht nüchtern wegen Cortisol-Spike.',
    benefits: [
      'Steigert Wachheit und Fokus',
      'Verbessert sportliche Leistung',
      'Kann Stimmung heben',
      'Beschleunigt Fettverbrennung',
      'Antioxidative Wirkung (Kaffee)'
    ],
    risks: [
      'Toleranz bei täglicher Hochdosis',
      'Kann Schlaf stören (Halbwertszeit!)',
      'Herzrasen, Unruhe bei Empfindlichen',
      'Cortisol-Spike – nicht auf leeren Magen'
    ],
    dosage: '100–300 mg täglich, maximal 400 mg.',
    intake: '60–90 min nach Aufwachen, nicht nach 14 Uhr. Mit L-Theanin für ruhige Wachheit.',
    synergies: ['l-theanin', 'kreatin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Kaffee, Grüner Tee, Matcha, Guarana',
    podcasts: [
      {
        title: 'Kaffee & Koffein: Der Alltags-Booster im Faktencheck',
        audio: 'audio/kaffee-koffein-podcast.mp3',
        spotify: '6A5zsRVuRywSJvV34qhHbG',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 63) \u00b7 mit Paul & Paula. Adenosin-Mechanik, Halbwertszeit und die 8-Stunden-Deadline, die U-Kurve mit 15\u201330 % niedrigerer Sterblichkeit bei 2\u20134 Tassen, Morgen- vs. Ganztags-Trinker, CYP1A2-Genetik, Cafestol und Papierfilter, L-Theanin-Feintuning. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 02.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'whey',
    name: 'Whey Protein',
    altNames: 'Molkenprotein-Isolat',
    category: 'Protein',
    tags: ['muskel', 'sport', 'saettigung', 'immun'],
    short: 'Hochwertigstes Protein mit bestem Aminosäureprofil. Ideal post-Workout.',
    description: 'Isolat > 90 % Protein, sehr schnell verfügbar. Grass-fed bevorzugen. Enthält auch immunstärkende Peptide (Immunoglobuline).',
    benefits: [
      'Optimal für Muskelaufbau',
      'Hoher Leucin-Gehalt (mTOR-Aktivierung)',
      'Unterstützt Glutathion-Produktion',
      'Sättigt stark',
      'Gute Aminosäuren-Bilanz'
    ],
    risks: [
      'Bei Laktoseintoleranz: Isolat nehmen',
      'Bei Akne-Neigung bedenken (IGF-1)',
      'Hochwertige Qualität wählen (Schwermetalle)'
    ],
    dosage: '20–40 g nach Training oder als Mahlzeit-Ergänzung.',
    intake: 'Innerhalb 1h nach Workout. Auch als schnelle Eiweißquelle.',
    synergies: ['kreatin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Flüssigmolke (Käseherstellungs-Nebenprodukt)',
    podcasts: [
      {
        title: 'KI-Podcast: Whey Protein – Leucin, Timing-Mythos & für wen es wirklich lohnt',
        audio: 'audio/whey-podcast.mp3',
        spotify: '6R5g58StzAqk5E6nMrlQWX',
        lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser (Folge 33). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.'
      }
    ]
  },
  // ============ NEU: LONGEVITY & ANTIOXIDANTIEN ============
  {
    id: 'nac',
    name: 'NAC (N-Acetyl-Cystein)',
    altNames: 'N-Acetylcystein',
    category: 'Arzneistoff (Derivat der Aminosäure L-Cystein)',
    tags: ['atmung', 'leber', 'glutathion', 'anti-oxidant', 'arzneimittel'],
    short: 'Zugelassenes Arzneimittel, kein Nahrungsergänzungsmittel: Antidot bei Paracetamol-Vergiftung und Schleimlöser. Liefert Cystein für die Glutathion-Herstellung.',
    description: 'NAC ist das acetylierte Derivat der Aminosäure L-Cystein und liefert den Baustein, der bei der Glutathion-Herstellung limitiert. In Deutschland ist es ein zugelassenes Arzneimittel und kein Nahrungsergänzungsmittel: oral als Schleimlöser apothekenpflichtig und rezeptfrei, als Antidot bei Paracetamol-Vergiftung verschreibungspflichtig. Bei COPD senkt es die Exazerbationsrate (14 RCTs, 2.856 Patienten, RR 0,87), ohne Lungenfunktion, Lebensqualität oder Glutathionspiegel zu verändern.',
    benefits: [
      'Zugelassenes Antidot bei Paracetamol-Vergiftung: 6,1 % Leberschädigung bei Behandlungsbeginn innerhalb von 10 Stunden gegenüber 26,4 % bei Beginn nach 10 bis 24 Stunden (2.540 Patienten)',
      'Zugelassen zur Schleimlösung und zum erleichterten Abhusten bei Atemwegserkrankungen mit zähem Schleim',
      'Senkt bei COPD akute Exazerbationen (Meta-Analyse, 14 RCTs, 2.856 Patienten, RR 0,87); offene Empfehlung der Nationalen VersorgungsLeitlinie COPD für die Dauertherapie',
      'Kleiner Zusatzeffekt auf depressive Symptome (12 RCTs, 904 Patienten, SMD −0,24)',
      'Trichotillomanie bei Erwachsenen: 56 % gegenüber 16 % deutlich oder sehr deutlich gebessert (RCT, 50 Teilnehmer, 12 Wochen) — bei 39 Kindern nicht reproduzierbar',
      'Füllt Glutathion dort auf, wo ein Mangel vorliegt (Mukoviszidose, 18 Patienten) — nicht nachweisbar im Gehirn Gesunder'
    ],
    risks: [
      'Gegenanzeige bei Kindern unter 2 Jahren (Sekret kann die Atemwege verlegen); 200-mg-Tabletten zusätzlich unter 6 Jahren',
      'Bei Asthma Vorsicht: Bronchospasmus als seltene Nebenwirkung beschrieben',
      'Schwere Hautreaktionen berichtet: Stevens-Johnson-Syndrom und Lyell-Syndrom',
      'Mindestens 2 Stunden Abstand zu oralen Antibiotika',
      'Nicht mit Hustenstillern kombinieren: Gefahr eines gefährlichen Sekretstaus',
      'Kann die gefäßerweiternde Wirkung von Nitroglycerin verstärken',
      'Magen-Darm-Beschwerden häufigste Nebenwirkung (6 % gegenüber 5 % in Kontrollgruppen)',
      'Anaphylaktoide Reaktionen bei intravenöser Gabe im Krankenhaus'
    ],
    dosage: 'Keine Empfehlung — NAC ist in Deutschland ein Arzneimittel mit zugelassener Dosierung, kein Nahrungsergänzungsmittel. Die zugelassene orale Erwachsenendosis als Schleimlöser beträgt 400 bis 600 mg täglich. Studien verwendeten: 600 mg zweimal täglich bei COPD (PANTHEON und Zhou 2024), 1.000 bis 3.000 mg täglich bei Depression, 1.200 bis 2.400 mg täglich bei Trichotillomanie, 600 mg täglich in der Spermienstudie. Das Antidot-Schema bei Paracetamol-Vergiftung gibt 150 mg/kg in den ersten 60 Minuten und insgesamt 300 mg/kg über 21 Stunden, ausschließlich intravenös im Krankenhaus.',
    intake: 'Mindestens 2 Stunden Abstand zu oralen Antibiotika einhalten. Für den verbreiteten Rat, NAC nüchtern oder zusammen mit Vitamin C einzunehmen, wurden keine Humandaten gefunden.',
    synergies: ['glutathion', 'vitamin-c', 'glycin', 'alpha-liponsaeure'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Keine nennenswerten Nahrungsquellen. In Deutschland als Arzneimittel in der Apotheke, nicht als Nahrungsergänzungsmittel.'
  },
  {
    id: 'apigenin',
    name: 'Apigenin',
    altNames: 'Kamillen-Flavonoid',
    category: 'Longevity',
    tags: ['schlaf', 'longevity', 'entspannung', 'nad', 'cd38', 'entzuendung'],
    short: 'Flavonoid aus Kamille. Die CD38-Hemmung stammt aus dem Labor, nicht vom Menschen.',
    description: 'Apigenin wird von Longevity-Forschern wie David Sinclair empfohlen. Blockiert das Enzym CD38, das NAD+ abbaut – so steigt der Zellenergie-Level. Bindet zusätzlich an Benzodiazepin-Rezeptoren für entspannende Wirkung.',
    benefits: [
      'CD38-Hemmung im Laborversuch gezeigt',
      'Wird für Schlaf beworben – Humandaten fehlen weitgehend',
      'Entzündungshemmende Effekte in Zell- und Tierversuchen',
      'Anti-östrogene Eigenschaften (bei Männern positiv)',
      'Antioxidative und neuroprotektive Wirkung'
    ],
    risks: [
      'Bei hohen Dosen Blutverdünnung möglich',
      'Vorsicht bei östrogenabhängigen Erkrankungen – Rücksprache mit Arzt',
      'Kann Sedierung verstärken (Alkohol, Schlafmittel meiden)'
    ],
    dosage: '50 mg abends (Standard-Biohacker-Dosis nach Sinclair). Kamillentee liefert zu wenig.',
    intake: '30–60 min vor dem Schlafengehen. Mit etwas Fett für bessere Aufnahme.',
    synergies: ['nmn', 'resveratrol', 'magnesium', 'melatonin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Kamille, Petersilie, Sellerie, Artischocke (sehr niedrig dosiert)'
  },
  {
    id: 'fisetin',
    name: 'Fisetin',
    altNames: 'Flavonoid aus Erdbeeren',
    category: 'Longevity',
    tags: ['senolytisch', 'longevity', 'gehirn', 'anti-aging', 'entzuendung'],
    short: 'Senolytikum-Kandidat. Die viel zitierte Mausstudie von 2018 wurde im unabhängigen Testprogramm 2023 nicht bestätigt.',
    description: 'Fisetin baute in einer viel zitierten Studie von 2018 seneszente Zellen ab und verlängerte die Lebenszeit alter Mäuse. 2023 hat das unabhängige US-Interventions-Testprogramm (ITP) nachgeprüft – und weder eine Lebenszeitverlängerung noch eine Senkung der Seneszenzmarker in Leber, Niere und Gehirn gefunden. Die Humanstudie der Mayo Clinic (AFFIRM, 40 Frauen) läuft seit Februar 2018 und hat bis heute nichts berichtet; die dort geprüfte Dosis liegt mit 20 mg pro Kilogramm weit über üblichen Kapselstärken. Klassische Protokolle: hochdosiert über 2 Tage monatlich.',
    benefits: [
      'Senolytische Wirkung in einer Mausstudie gezeigt – in der unabhängigen Replikation nicht',
      'Neuroprotektive Effekte in Alzheimer-Modellen (Tier)',
      'Stark antioxidativ',
      'Sirtuin-Aktivierung im Zellversuch',
      'Wirkt anti-entzündlich'
    ],
    risks: [
      'Keine abgeschlossene Humanstudie – die Mayo-Studie läuft seit 2018 ohne Ergebnis',
      'Hoch dosiert sehr kurz anwenden (Hit-&-Run-Protokoll)',
      'Kann Medikamente (Blutverdünner) beeinflussen'
    ],
    dosage: 'Täglich: 100 mg. Senolytischer Puls: 20 mg/kg an 2 aufeinanderfolgenden Tagen pro Monat.',
    intake: 'Mit fettreicher Mahlzeit (fettlöslich). Schwarzpfeffer/Piperin verbessert Aufnahme.',
    synergies: ['quercetin', 'resveratrol', 'spermidin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Erdbeeren (höchste natürliche Konzentration), Äpfel, Kakis, Zwiebeln'
  },
  {
    id: 'sulforaphan',
    name: 'Sulforaphan',
    altNames: 'Broccoli-Sprossen-Extrakt',
    category: 'Antioxidant',
    tags: ['detox', 'anti-aging', 'krebs', 'nrf2', 'entzuendung', 'leber'],
    short: 'Aktiviert den Nrf2-Signalweg und damit körpereigene Entgiftungsenzyme, am Menschen über die Schadstoffausscheidung gemessen.',
    description: 'Sulforaphan entsteht aus Glucoraphanin in Brokkoli und Brokkolisprossen, wenn das Enzym Myrosinase beim Zerkauen freigesetzt wird. Es aktiviert den Transkriptionsfaktor Nrf2, der Schutz- und Entgiftungsgene einschaltet. Am Menschen belegt ist eine gesteigerte Ausscheidung von Luftschadstoffen wie Benzol; bei Autismus zeigen zwei Meta-Analysen Verbesserungen sozialer Symptome. Für Krebsvorbeugung gibt es am Menschen nur Biomarker, und die Qualität von Brokkoli-Präparaten schwankt stark.',
    benefits: [
      'Aktiviert die Phase-II-Entgiftung: Benzol-Ausscheidung +61 % in einer RCT mit 291 Teilnehmern',
      'Verbessert bei Autismus soziale Symptome nach 4 bis 10 Wochen (zwei Meta-Analysen über je 6 RCTs)',
      'Schutzwirkung gegen Krebs in Labor- und Tierversuchen, am Menschen nur Biomarker',
      'Senkte den Nüchternblutzucker bei Prädiabetes leicht, der primäre Endpunkt wurde verfehlt',
      'Unerwünschte Ereignisse in Studien nicht häufiger als unter Placebo'
    ],
    risks: [
      'Magen-Darm-Beschwerden möglich',
      'Einzelne Krampfanfälle in einer Autismus-Studie mit hoher Dosis, bei Epilepsie ärztlich abklären',
      'Schilddrüsenwerte blieben in einer Studie über 84 Tage unverändert, Langzeitdaten fehlen',
      'Gehalt in Brokkoli-Präparaten schwankt stark, teils kein Glucoraphanin nachweisbar'
    ],
    dosage: 'Die große Entgiftungsstudie verwendete täglich 600 µmol Glucoraphanin und 40 µmol Sulforaphan; Autismus-Studien 50 bis 150 µmol Sulforaphan je nach Körpergewicht.',
    intake: 'Frische Brokkolisprossen gut kauen. Zu gekochtem Brokkoli etwas Senfpulver geben, das Myrosinase liefert: In einer Studie mit 1 g Senfpulver war die Ausbeute mehr als 4-mal so hoch. Bei Präparaten auf aktive Myrosinase und belegten Gehalt achten.',
    synergies: ['kurkuma', 'omega-3', 'glutathion'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Broccoli-Sprossen (höchste Konzentration), Broccoli, Rosenkohl, Rucola'
  },
  {
    id: 'urolithin-a',
    name: 'Urolithin A',
    altNames: 'Mitopure',
    category: 'Longevity',
    tags: ['mitochondrien', 'muskel', 'longevity', 'energie', 'autophagie'],
    short: 'Regt die Mitophagie an – das Recycling verbrauchter Mitochondrien. Einer der wenigen Longevity-Stoffe mit randomisierten Studien am Menschen, wenn auch klein und herstellerfinanziert.',
    description: 'Urolithin A entsteht im Darm aus Ellagitanninen (Granatapfel, Walnüsse, Beeren) – nach Granatapfelsaft bildeten aber nur rund 40 % der Menschen nennenswerte Mengen. Als Reinsubstanz (Mitopure) ist es direkt verfügbar. Zwei randomisierte Studien über 4 Monate zeigten bessere Muskelausdauer bei Älteren und rund 12 % mehr Beinkraft bei Mittelalten; die Hauptzielgrößen beider Studien wurden verfehlt.',
    benefits: [
      'Stimuliert die Mitophagie (Recycling alter Mitochondrien); beim Menschen schaltet es Mitochondrien-Gene im Muskel an',
      'Bessere Muskelausdauer bei Älteren und rund 12 % mehr Beinkraft bei Mittelalten – kleine, herstellerfinanzierte Studien, Hauptzielgrößen verfehlt',
      'Senkt Entzündungsmarker wie CRP – Surrogatmarker, keine Endpunkte',
      'Immunschutz wird postuliert – dafür gibt es am Menschen keine belastbaren Daten',
      'Haut: erste kleine Studien, noch keine belastbare Aussage'
    ],
    risks: [
      'In Studien über bis zu 4 Monate so gut verträglich wie Placebo',
      'Teuer als Markensupplement (Mitopure)',
      'Langzeitdaten beim Menschen fehlen; kontrollierte Daten enden nach 4 Monaten',
      'Fast alle Humanstudien vom Hersteller finanziert, unabhängige Wiederholung fehlt'
    ],
    dosage: 'In Studien eingesetzt: 500 bis 1.000 mg täglich über bis zu 4 Monate; die Muskelstudien bei Älteren nutzten 1.000 mg. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Mit einer Mahlzeit, bevorzugt morgens.',
    synergies: ['coq10', 'pqq'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Indirekt über Ellagsäure: Granatapfel, Walnüsse, Himbeeren (nur bei passender Darmflora)',
    podcasts: [
      { title: 'Urolithin A: Der Mitochondrien-Erneuerer im Faktencheck', spotify: '1OqKr6DQlwmZyf8v7HQjw2', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 78) · mit Paul & Paula. Die Produktionskette vom Granatapfel bis in die Zelle – und warum sie bei vielen Menschen im Darm gar nicht erst zustande kommt. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 16.09.2026, 10:00)' }
    ]
  },
  {
    id: 'pterostilben',
    name: 'Pterostilben',
    altNames: 'Pterostilbene',
    category: 'Longevity',
    tags: ['anti-aging', 'nad', 'herz', 'gehirn', 'blutzucker'],
    short: 'Resveratrol-Verwandter mit besserer Aufnahme. Am Menschen kaum untersucht.',
    description: 'Pterostilben wird deutlich besser aufgenommen als Resveratrol – das ist der belegte Teil. Die Aktivierung von Sirtuinen und AMPK stammt aus Zell- und Tierversuchen; ob daraus beim Menschen ein Nutzen wird, ist offen. Beliebt als NMN-Partner.',
    benefits: [
      'Aktiviert Sirtuine und AMPK im Zellversuch',
      'Kleine Studien deuten auf Effekte bei LDL und Blutzucker',
      'Neuroprotektive Effekte im Tiermodell',
      'Antioxidativ und anti-entzündlich',
      'Stabile orale Bioverfügbarkeit'
    ],
    risks: [
      'Kann LDL leicht erhöhen (selten)',
      'Wechselwirkung mit Blutverdünnern möglich',
      'Langzeit-Humanstudien noch begrenzt'
    ],
    dosage: '50–150 mg täglich.',
    intake: 'Morgens mit fettreicher Mahlzeit. Ideal mit NMN oder NR.',
    synergies: ['nmn', 'resveratrol', 'coq10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Blaubeeren (höchste Quelle), Trauben, Mandeln'
  },

  // ============ NEU: NOOTROPIKA ============
  {
    id: 'alpha-gpc',
    name: 'Alpha-GPC',
    altNames: 'L-Alpha-Glycerylphosphorylcholin',
    category: 'Aminosäure',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic', 'acetylcholin'],
    short: 'Hochbioverfügbare Cholinquelle. Erhöht Acetylcholin im Gehirn – bei Gesunden ungeprüft, dazu ein Schlaganfallsignal aus einer großen Kohorte.',
    description: 'Alpha-GPC überquert die Blut-Hirn-Schranke und liefert Cholin direkt für die Acetylcholin-Synthese. Klinisch gegen Alzheimer erforscht, bei Sportlern für Kraft-Output beliebt.',
    benefits: [
      'Kleine Studien: Vorteile bei leichter kognitiver Beeinträchtigung; die Placebostudien in Korea verfehlten 2026 laut Presseberichten ihr Hauptziel',
      'Steigert Fokus und geistige Klarheit',
      'Als Hirnschutz im Alter beworben — dem steht eine Kohortenauswertung über 12 Mio. Menschen mit erhöhtem Schlaganfallrisiko gegenüber'
    ],
    risks: [
      'Selten: Kopfschmerzen, Reizbarkeit bei zu hoher Dosis',
      'Kann Depressionen bei dispositionierten Personen verstärken',
      'Schlaganfallsignal in einer Kohorte mit 12 Mio. Menschen (+46 %), in einer zweiten Kohorte (leichte kognitive Beeinträchtigung) nicht bestätigt; beides Beobachtung'
    ],
    dosage: 'Keine Dosierungsangabe: Wirkstoff ohne Zulassung als Arzneimittel.',
    intake: 'Morgens oder vor kognitiver/körperlicher Leistung. Mit Fett einnehmen.',
    synergies: ['l-theanin', 'koffein', 'loewenmaehne', 'omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Eier, Leber, Milch (geringe Mengen)'
  },
  {
    id: 'citicolin',
    name: 'Citicolin (CDP-Cholin)',
    altNames: 'Cytidin-5-Diphosphocholin',
    category: 'Aminosäure',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic', 'acetylcholin'],
    short: 'Cholin-Lieferant mit Zusatz-Baustein Cytidin. Gut verträglich, verändert messbar den Membranstoffwechsel im Gehirn – für Gedächtnis und Konzentration bei Gesunden gibt es aber nur einzelne kleine Studien.',
    description: 'Citicolin wird im Körper zu Cholin und Cytidin gespalten, das Cytidin zu Uridin umgewandelt – beides fließt in den Aufbau von Zellmembranen. In einigen Ländern ist es seit den 1970er-Jahren ein Arzneimittel, in der EU seit 2014 ein neuartiges Lebensmittel. Die größte Schlaganfallstudie (ICTUS, 2.298 Patienten) fand keinen Nutzen, die EFSA lehnte 2024 eine Gedächtnis-Angabe ab.',
    benefits: [
      'Verändert beim Menschen messbar den Energie- und Membranstoffwechsel im Stirnhirn (Spektroskopie, 16 Gesunde)',
      'Einzelne kleine Studien: bessere Aufmerksamkeit bei Jugendlichen, besseres episodisches Gedächtnis bei Älteren – herstellerfinanziert, Befunde aus Nebenzielen',
      'Sehr gut verträglich, auch in großen klinischen Studien',
      'Beliebte Cholinquelle in Nootropika-Stacks'
    ],
    risks: [
      'Gut verträglich; in der großen Schlaganfallstudie keine Häufung von Nebenwirkungen',
      'Für Gedächtnis und Konzentration bei Gesunden kein ausreichender Beleg (EFSA 2024)',
      'Teurer als Alpha-GPC'
    ],
    dosage: 'In Studien bei Gesunden eingesetzt: 250–500 mg täglich über 28 Tage bis 12 Wochen; in der Schlaganfallstudie deutlich mehr. EU-Höchstmenge in Nahrungsergänzungsmitteln: 500 mg pro Tag. Das sind Studien- und Rechtsangaben, keine Verzehrempfehlung.',
    intake: 'Morgens oder vor kognitiver Anforderung. Mit Mahlzeit.',
    synergies: ['l-theanin', 'koffein', 'omega-3', 'loewenmaehne'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rinderleber, Eier, Fisch (geringe Mengen)'
  },
  {
    id: 'phosphatidylserin',
    name: 'Phosphatidylserin (PS)',
    altNames: 'PS',
    category: 'Stress & Geist',
    tags: ['stress', 'cortisol', 'gedaechtnis', 'gehirn'],
    short: 'Membran-Phospholipid des Gehirns. Verbesserte in kontrollierten Studien das Gedächtnis älterer Menschen mit kognitivem Abbau – vor allem in der alten Form aus Rinderhirn – und dämpfte in kleinen Studien den Cortisolanstieg unter Belastung.',
    description: 'Phosphatidylserin ist ein Phospholipid der Zellmembran, besonders reichlich im Gehirn. Die stärksten Studien zum Gedächtnis älterer Menschen (494 Patienten über 6 Monate; 149 Patienten über 12 Wochen) nutzten PS aus Rinderhirn, das wegen Prionen-Bedenken ersetzt wurde; die heutige Soja-Form blieb in ihrer größten Prüfung (120 Personen, 12 Wochen) ohne Effekt. Eine Meta-Analyse von 9 Studien mit 961 Teilnehmern findet einen positiven Effekt auf das Gedächtnis bei kognitivem Abbau. Unter körperlicher Belastung dämpfte PS in zwei kleinen Studien den Anstieg von ACTH und Cortisol.',
    benefits: [
      'Gedächtnis bei älteren Menschen mit kognitivem Abbau: positiver Effekt in einer Meta-Analyse (9 Studien, davon 5 RCTs, 961 Teilnehmer)',
      'Größte Einzelstudie: 494 Patienten, 6 Monate, Verhalten und Gedächtnis verbessert – mit PS aus Rinderhirn',
      'Senkte das Spitzen-Cortisol nach Training um 39 % – die Zahl stammt aus einer Studie mit zehn Männern über zehn Tage',
      'Bei psychischem Stress normalisierte PS mit Phosphatidsäure die Stressreaktion nur bei stark chronisch Gestressten (75 Männer, 42 Tage)',
      'Aufmerksamkeit bei Kindern mit ADHS verbessert (3 RCTs, 216 Kinder); Gesamtsymptome nicht signifikant, Evidenz niedrig'
    ],
    risks: [
      'Gut verträglich: bis 600 mg Soja-PS über 12 Wochen ohne Unterschiede zu Placebo',
      'Selten: Magenbeschwerden bei hoher Dosis',
      'Soja-PS: bei Sojaallergie auf die Quelle achten',
      'Kontrollierte Daten reichen bis 6 Monate – Langzeitdaten fehlen'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: In den Gedächtnisstudien 100–300 mg täglich über 6 Wochen bis 6 Monate. In den Cortisol-Studien 600–800 mg täglich über 10 Tage.',
    intake: 'Mit einer fetthaltigen Mahlzeit.',
    synergies: ['ashwagandha', 'magnesium', 'omega-3', 'glycin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Innereien (v.a. Hirn – historisch), Lecithin, Sojabohnen'
  },
  {
    id: 'ginkgo',
    name: 'Ginkgo Biloba',
    altNames: 'Fächerblattbaum-Extrakt',
    category: 'Kräuter',
    tags: ['gehirn', 'durchblutung', 'gedaechtnis', 'nootropic', 'tinnitus'],
    short: 'Definierter Blatt-Extrakt, in Deutschland als Arzneimittel zugelassen. Wirkt in der Behandlung leichter Demenz, verhindert sie aber nicht.',
    description: 'Ginkgo-Blatt-Extrakt (EGb 761) gehört zu den am besten untersuchten Phytopharmaka überhaupt. Die entscheidende Trennlinie verläuft zwischen Vorbeugung und Behandlung: Zwei große Präventionsstudien, GEM mit 3.069 Teilnehmern über median 6,1 Jahre und GuidAge mit 2.854 Teilnehmern über 5 Jahre, verfehlten beide ihren primären Endpunkt. Bei bereits bestehender Demenz zeigt EGb 761 bei 240 Milligramm täglich dagegen messbare Effekte auf Kognition und Alltagsfunktionen, und die S3-Leitlinie Demenzen führt Ginkgo als schwache Empfehlung. Was in Studien geprüft wurde, ist der standardisierte Arzneimittel-Extrakt, nicht beliebige Nahrungsergänzung.',
    benefits: [
      'Verbessert Kognition und Alltagsfunktionen bei bestehender Demenz (Meta-Analyse, 2.561 Patienten, 240 mg täglich)',
      'In der S3-Leitlinie Demenzen als Therapieoption geführt (Empfehlung 69, schwach dafür)',
      'Senkt die Blutviskosität messbar (Meta-Analyse von 18 RCTs, 1.985 Erwachsene)',
      'Verhindert keine Demenz — in zwei großen Präventionsstudien kein Effekt',
      'Bei kognitiv Gesunden kein Effekt auf Gedächtnis, Aufmerksamkeit oder Exekutivfunktion'
    ],
    risks: [
      'Blutungsneigung: EMA empfiehlt 3 bis 4 Tage vor Operationen abzusetzen',
      'Kombination mit Gerinnungshemmern nur unter ärztlicher Überwachung',
      'Gegenanzeigen laut EU-Monographie: Überempfindlichkeit und Schwangerschaft',
      'Bei Epilepsie lassen sich weitere Anfälle nicht ausschließen',
      'IARC-Einstufung Gruppe 2B auf Basis von Lebertumoren in zweijährigen Mäusestudien',
      'Selten: Kopfschmerzen, Magenbeschwerden'
    ],
    dosage: 'In den Behandlungsstudien und in der EU-Monographie verwendet: 240 Milligramm standardisierter Trockenextrakt täglich, Behandlungsdauer mindestens 8 Wochen. Das sind Studien- und Monographieangaben, keine Empfehlung.',
    intake: 'In den großen Studien wurde zweimal täglich 120 Milligramm gegeben.',
    synergies: ['omega-3', 'vitamin-b-komplex'],
    avoid: ['Blutverdünner', 'Schwangerschaft'],
    evidence: 'hoch',
    sources: 'Ausschließlich als definierter Extrakt. Rohe Blätter und Ginkgo-Samen sind etwas anderes: Samen enthalten einen Vitamin-B6-Antagonisten, nach größeren Mengen sind Krampfanfälle dokumentiert. Zugelassene Arzneimittel sind in Deutschland an geprüfte Spezifikationen gebunden, Nahrungsergänzungsmittel nicht.'
  },

  // ============ NEU: AMINOSÄUREN & PERFORMANCE ============
  {
    id: 'beta-alanin',
    name: 'Beta-Alanin',
    altNames: 'β-Alanin',
    category: 'Aminosäure',
    tags: ['sport', 'ausdauer', 'muskel', 'carnosin', 'leistung'],
    short: 'Vorläufer von Carnosin, puffert Säure im Muskel. Kleiner, gut belegter Vorteil bei harten Belastungen von etwa 1 bis 4 Minuten, nicht bei kurzen Sprints.',
    description: 'Beta-Alanin wird im Muskel mit Histidin zu Carnosin verknüpft, das Wasserstoffionen bei intensiver Belastung puffert. Der Anstieg ist per Muskelbiopsie belegt und braucht Wochen. Das Kribbeln (Parästhesie) nach der Einnahme ist nach heutigem Wissen reversibel und hängt von der Einzeldosis ab.',
    benefits: [
      'Erhöht den Carnosingehalt im Muskel, per Biopsie belegt: +64,2 % nach 4 Wochen mit 6,4 g täglich, +80,1 % nach 10 Wochen',
      'Verlängert die Zeit bis zur Erschöpfung bei hochintensiver Belastung',
      'Größter Nutzen bei Belastungen von etwa 1 bis 4 Minuten, belegt bis 10 Minuten',
      'Kein Vorteil bei wiederholten kurzen Sprints (Meta-Analyse über 17 RCTs)',
      'Kognition und antioxidative Wirkung: bisher uneinheitliche beziehungsweise nur vorläufige Daten'
    ],
    risks: [
      'Kribbeln, Jucken, Hitzegefühl (Parästhesie) schon ab Einzeldosen um 10 mg/kg Körpergewicht; reversibel, klingt meist innerhalb von 60 bis 90 Minuten ab',
      'BfR 2026: nur Einzeldosen unter 400 mg und unter 1,2 g pro Tag als unbedenklich eingestuft, Einnahme unter 12 Wochen',
      'Keine Sicherheitsdaten über 24 Wochen hinaus',
      'Nicht für Kinder, Jugendliche, Schwangere, Stillende und Menschen ab 65 Jahren (BfR)',
      'Die EMA sieht Hinweise auf seltene anaphylaktische Reaktionen'
    ],
    dosage: 'In den Leistungsstudien 3,2–6,4 g täglich, aufgeteilt auf Einzeldosen von 400–800 mg (Retardform bis 1,6 g), über 4 bis 24 Wochen. Das BfR stuft 2026 nur Einzeldosen unter 400 mg und weniger als 1,2 g pro Tag über weniger als 12 Wochen als unbedenklich ein.',
    intake: 'Mit Mahlzeiten, über den Tag verteilt. Der Effekt entsteht über den Carnosinspeicher, der sich über Wochen füllt.',
    synergies: ['kreatin', 'taurin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Huhn, Rind, Fisch (indirekt über Carnosin)'
  },
  {
    id: 'citrullin',
    name: 'L-Citrullin (-Malat)',
    altNames: 'Citrullin Malat',
    category: 'Aminosäure',
    tags: ['sport', 'pump', 'stickoxid', 'durchblutung', 'ausdauer'],
    short: 'Vorstufe von Arginin, hebt den Arginin-Spiegel im Blut zuverlässiger als Arginin selbst. Im Training ein kleiner, in Meta-Analysen wiederholt gefundener Vorteil; beim Blutdruck und beim Pump sind die Daten uneinheitlich.',
    description: 'L-Citrullin wird in der Niere zu Arginin umgebaut und liefert so den Rohstoff für Stickoxid (NO). Dass dieser Umweg besser funktioniert als die direkte Arginin-Gabe, ist am Menschen gemessen. Die größte Meta-Analyse (30 RCTs, 644 Teilnehmer) findet einen kleinen Leistungseffekt von g = 0,16 bei niedriger bis sehr niedriger Evidenzsicherheit. Reines Citrullin und Citrullin-Malat unterschieden sich im direkten Vergleich (33 Männer, 6 Wochen) nicht. Eine Blutdruck-Meta-Analyse von 2019 wurde zurückgezogen.',
    benefits: [
      '6,4 % mehr Wiederholungen bis zur Erschöpfung (Meta-Analyse, 8 Studien, 137 Personen) – kleiner Effekt, für den Oberkörper allein nicht signifikant',
      'Kleiner Gesamteffekt auf die Trainingsleistung, g = 0,16 (Meta-Analyse, 30 RCTs, 644 Teilnehmer; Evidenzsicherheit niedrig bis sehr niedrig)',
      'Weniger Muskelkater 24 Stunden nach dem Training (Meta-Analyse, 13 Studien, 206 Teilnehmer); nach 48 und 72 Stunden kein signifikanter Unterschied',
      'Hebt Plasma-Arginin dosisabhängig stärker als Arginin selbst (20 Probanden, doppelblind)',
      'Blutdruck: systolisch minus 4,10 mmHg in einer Meta-Analyse, eine andere fand keinen Effekt',
      'Erektionshärte: in einer kleinen, einfach verblindeten Studie (24 Männer) verbesserten sich 50 % unter Citrullin gegenüber 8,3 % unter Placebo'
    ],
    risks: [
      'Gut verträglich: Einzeldosen bis 15 g blieben in einer Dosisstudie ohne Nebenwirkungen',
      'Magenbeschwerden bei 14,63 % nach 8 g Citrullin-Malat in einer Trainingsstudie',
      'Bei Blutdrucksenkern, Nieren- oder Lebererkrankung ärztlich abklären',
      'Kontrollierte Studien liefen höchstens 17 Wochen – Langzeitdaten fehlen'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: In den Kraftstudien meist 6–8 g Citrullin-Malat als Einzeldosis 40–60 Minuten vor dem Training. In den Blutdruckstudien 3–9 g L-Citrullin täglich über 1–17 Wochen.',
    intake: 'In den Studien mit Wasser, 40–60 Minuten vor dem Training.',
    synergies: ['kreatin', 'beta-alanin', 'elektrolyte'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wassermelone (höchste natürliche Quelle), Kürbis, Gurke'
  },

  // ============ NEU: ENTSPANNUNG & SCHLAF ============
  {
    id: 'gaba',
    name: 'GABA',
    altNames: 'Gamma-Aminobuttersäure',
    category: 'Aminosäure',
    tags: ['stress', 'entspannung', 'schlaf', 'angst', 'cortisol'],
    short: 'Wichtigster beruhigender Botenstoff im Gehirn. Als Supplement mit kleinen positiven Studien zu Stress, Blutdruck und Wachstumshormon – ob es das Gehirn erreicht, ist ungeklärt.',
    description: 'GABA wird nach Einnahme schnell ins Blut aufgenommen (Spitze nach 0,5 bis 1 Stunde) und ist kurzfristig gut verträglich. Ein Review über 14 placebokontrollierte Studien fand begrenzte Evidenz für weniger Stress und sehr begrenzte für besseren Schlaf. Kleine RCTs zeigen eine systolische Blutdrucksenkung und einen akuten Anstieg des Wachstumshormons. Ob orales GABA die Blut-Hirn-Schranke überwindet oder über das Nervensystem des Darms wirkt, ist offen.',
    benefits: [
      'Begrenzte Evidenz für weniger Stress, vor allem bei Markern wie Herzfrequenzvariabilität und Cortisol (Review, 14 Studien)',
      'Kleine Studie im Schlaflabor: kürzere Einschlafzeit nach 4 Wochen mit 300 mg täglich',
      'Senkte in zwei kleinen RCTs den systolischen Blutdruck bei leicht erhöhten Werten',
      '3 g erhöhten das Wachstumshormon akut deutlich (RCT, 11 Männer); mit Molkenprotein mehr fettfreie Masse in einer kleinen RCT',
      'Viele Anwender berichten von spürbarer Entspannung – die Ursache ist ungeklärt',
      'Kombination mit L-Theanin nur in einer kleinen Studie ohne Placebogruppe untersucht'
    ],
    risks: [
      'Leichte Nebenwirkungen: Bauchbeschwerden, Kopfschmerz, Schläfrigkeit',
      'Bei mehreren Gramm kurzes Brennen im Hals, teils mit Atemnot; Etiketten nennen Hautkribbeln und leichte Kurzatmigkeit',
      'Kann den Blutdruck senken – Vorsicht bei Blutdruckmedikamenten',
      'Kann Wachstumshormon und Prolaktin erhöhen; keine Daten zu Schwangerschaft und Stillzeit',
      'Keine Langzeitdaten über Monate'
    ],
    dosage: 'In Studien verwendet: 20 mg zweimal täglich in GABA-reicher Chlorella (Blutdruck, 12 Wochen), 300 mg täglich (Schlaf, 4 Wochen), 100 mg täglich mit Molkenprotein (12 Wochen), 3 g einmalig (Wachstumshormon). Die kanadische Monographie nennt höchstens 750 mg pro Einzeldosis. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'Blutspiegel nach 0,5 bis 1 Stunde am höchsten, Halbwertszeit etwa 5 Stunden. Subjektive Schlafeffekte zeigten sich in Studien erst nach mindestens einer Woche regelmäßiger Einnahme.',
    synergies: ['l-theanin', 'magnesium', 'glycin', 'ashwagandha'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Fermentierte Lebensmittel (Kimchi, Miso, Tempeh), grüner Tee'
  },
  {
    id: 'inositol',
    name: 'Myo-Inositol',
    altNames: 'Inositol (als Vitamin B8 vermarktet, aber kein Vitamin im engeren Sinn)',
    category: 'Vitamin',
    tags: ['angst', 'hormone', 'blutzucker', 'pcos', 'stimmung'],
    short: 'Körpereigener, zuckerähnlicher Signalstoff. Bei PCOS gut untersucht: normalisiert den Zyklus häufiger als Placebo und ist besser verträglich als Metformin, der klinische Nutzen bleibt laut Leitlinie begrenzt.',
    description: 'Myo-Inositol ist Baustein der Botenstoffe, die das Insulinsignal weitergeben, und wird im Körper aus Glukose gebildet. Bei PCOS zeigt eine Meta-Analyse über 26 RCTs mit 1.691 Patientinnen häufiger einen regelmäßigen Zyklus (RR 1,79) und leicht bessere Stoffwechsel- und Hormonwerte; die internationale PCOS-Leitlinie 2023 hält Inositol für eine Option, empfiehlt aber keine bestimmte Form, Dosis oder Mischung. Das beworbene Verhältnis Myo- zu D-Chiro-Inositol von 40:1 stützt sich auf Mausmodelle. In der Schwangerschaft senkte Myo-Inositol das Risiko für Schwangerschaftsdiabetes (Cochrane, Evidenz niedrig). Für Panikstörung gibt es zwei kleine positive Studien, eine Meta-Analyse zu Angst und Depression fand keinen signifikanten Effekt.',
    benefits: [
      'PCOS: häufiger regelmäßiger Zyklus als unter Placebo (26 RCTs, RR 1,79), gegenüber Metformin nicht unterlegen',
      'PCOS: leicht bessere Werte bei Nüchternglukose, Insulin, Testosteron und BMI',
      'Deutlich besser verträglich als Metformin (Nebenwirkungen 7 statt 53 Prozent)',
      'Schwangerschaft: weniger Schwangerschaftsdiabetes (Cochrane, 7 RCTs, Evidenz niedrig)',
      'Senkt Triglyzeride und LDL bei Stoffwechselerkrankungen (14 RCTs)',
      'Panikstörung: zwei kleine positive Studien mit sehr hohen Mengen – Meta-Analyse über Angststörungen ohne signifikanten Effekt'
    ],
    risks: [
      'Ab 12 g täglich leichte Magen-Darm-Beschwerden (Übelkeit, Blähungen, Durchfall)',
      'Senkt den Blutzucker leicht – mit Diabetes-Medikamenten ärztlich abstimmen',
      'Lithium und Valproat greifen in den Inositolstoffwechsel ein – nur nach Rücksprache',
      'Kinderwunsch: laut Leitlinie experimentell, Nutzen unsicher',
      'Langzeitfolgen einer Einnahme in der Schwangerschaft nicht untersucht'
    ],
    dosage: 'Die PCOS-Studien verwendeten 1.000 bis 4.000 mg Myo-Inositol täglich, am häufigsten 4.000 mg über 12 bis 24 Wochen; die Panikstudien 12 g bis 18 g täglich. Die internationale PCOS-Leitlinie 2023 empfiehlt keine bestimmte Form, Dosis oder Kombination. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien über 12 bis 24 Wochen eingenommen. Wer Diabetes-Medikamente, Lithium oder Valproat nimmt, stimmt Inositol vorher ärztlich ab.',
    synergies: ['magnesium', 'chrom', 'vitamin-b-komplex'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Obst (v.a. Zitrus), Bohnen, Getreide'
  },

  // ============ NEU: METHYLIERUNG & MITO ============
  {
    id: 'tmg',
    name: 'TMG (Trimethylglycin)',
    altNames: 'Betain',
    category: 'Aminosäure',
    tags: ['methylierung', 'herz', 'leber', 'homocystein', 'longevity'],
    short: 'Methylgruppen-Spender – essenziell beim NMN-Stack, senkt Homocystein.',
    description: 'TMG (Betain) liefert Methylgruppen für den Homocystein-Stoffwechsel. NMN und NR verbrauchen Methylgruppen – TMG füllt den Speicher auf. David Sinclair nimmt es täglich mit seinem NMN.',
    benefits: [
      'Senkt Homocystein (Herz-Kreislauf-Risikofaktor)',
      'Unterstützt Leber-Entgiftung',
      'Gleicht Methylgruppen-Verbrauch durch NMN/NR aus',
      'Kann Leistungsfähigkeit steigern',
      'Schützt vor Fettleber'
    ],
    risks: [
      'Kann „fischigen" Körpergeruch verursachen (TMA)',
      'Hohe Dosen (>15 g): Magenbeschwerden'
    ],
    dosage: '500 mg – 2 g täglich. Mit NMN: 1 g pro 500 mg NMN.',
    intake: 'Morgens mit NMN/NR. Alternativ zu Mahlzeiten.',
    synergies: ['nmn', 'vitamin-b-komplex', 'folat'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rote Beete, Spinat, Quinoa, Weizenkeime'
  },
  {
    id: 'methylfolat',
    name: 'Methylfolat',
    altNames: '5-MTHF, L-Methylfolat',
    category: 'Vitamin',
    tags: ['methylierung', 'stimmung', 'schwangerschaft', 'homocystein', 'mthfr'],
    short: 'Aktive Form von Folat. Hebt den Folatstatus mindestens so gut wie Folsäure; als hoch dosierter Zusatz bei Depression mit kleinem Effekt untersucht.',
    description: 'Methylfolat (L-5-Methyltetrahydrofolat) ist die Folatform, die direkt in den Stoffwechsel einfließt; Folsäure muss erst in mehreren Schritten umgewandelt werden. Die MTHFR-Variante C677T ist häufig, laut CDC können Träger aber auch Folsäure verarbeiten. Folat wird für die DNA-Synthese und den Homocystein-Stoffwechsel gebraucht.',
    benefits: [
      'Hebt Folatspiegel in Plasma und Erythrozyten mindestens so gut wie Folsäure',
      'Senkt Homocystein (−14,6 % gegenüber Placebo über 24 Wochen)',
      'Als Zusatz zu Antidepressiva bei unzureichendem Ansprechen: höhere Ansprechrate (RR 1,25), mit 15 mg täglich unter ärztlicher Begleitung',
      'Schwangerschaft: Folat senkt das Neuralrohrdefekt-Risiko; nachgewiesen ist das für Folsäure, das BfR empfiehlt Methylfolat in äquivalenter Menge als Alternative',
      'Weniger unverstoffwechselte Folsäure im Blut als unter Folsäure'
    ],
    risks: [
      'Hohe Folatmengen können einen Vitamin-B12-Mangel verdecken: B12-Status bei hoher Dosierung prüfen',
      'EFSA-Obergrenze 1.000 µg pro Tag für Folsäure und Methylfolat zusammen',
      'Depressionsdosen von 7,5–15 mg liegen weit über der Obergrenze; Langzeitdaten fehlen',
      'Kein Ersatz für ärztliche Behandlung einer Depression'
    ],
    dosage: 'Das BfR schlägt für Nahrungsergänzungsmittel 200 µg Folsäure oder eine äquivalente Menge Methylfolat pro Tagesdosis vor; zur Neuralrohrdefekt-Prävention 400 µg Folsäure oder eine äquivalente Menge. EFSA-Obergrenze 1.000 µg/Tag. In Depressionsstudien 7,5–15 mg als Zusatz zu Antidepressiva, unter ärztlicher Kontrolle.',
    intake: 'Bei hoch dosierter Einnahme den Vitamin-B12-Status ärztlich prüfen lassen.',
    synergies: ['vitamin-b12', 'vitamin-b-komplex', 'tmg'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Dunkelgrünes Blattgemüse, Linsen, Spargel, Leber'
  },

  // ============ NEU: MINERALIEN ============
  {
    id: 'bor',
    name: 'Bor (Boron)',
    altNames: 'Boron',
    category: 'Mineral',
    tags: ['hormone', 'testosteron', 'knochen', 'gelenke', 'longevity'],
    short: 'Spurenelement mit Rolle im Knochenstoffwechsel. Als Testo-Booster beworben, Humandaten sehr dünn.',
    description: 'Bor spielt im Knochen- und Mineralstoffwechsel eine Rolle. Die vielzitierte Testosteron-Studie stammt von 1987 und umfasste zwölf Frauen nach den Wechseljahren – untersucht wurde der Mineralstoffwechsel, nicht Testosteron bei Männern. Eine Studie an Bodybuildern fand keinen Testosteroneffekt gegenüber Placebo.',
    benefits: [
      'Wird als Testosteron-Booster beworben – am Menschen nicht belegt',
      'Diskutierter Einfluss auf SHBG',
      'Unterstützt Knochenmineralisierung',
      'Hinweise auf entzündungshemmende Effekte',
      'Einzelne kleine Studien zur kognitiven Leistung'
    ],
    risks: [
      'Sehr hohe Dosen (>20 mg/Tag) langfristig problematisch',
      'Niedriger Bedarf – nicht mehr ist besser'
    ],
    dosage: '3–10 mg täglich.',
    intake: 'Morgens mit einer Mahlzeit.',
    synergies: ['vitamin-d3', 'magnesium', 'zink'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Rosinen, Avocado, Aprikosen, Mandeln, Wein'
  },

  // ============ NEU: PILZE & ADAPTOGENE ============
  {
    id: 'chaga',
    name: 'Chaga (Schiefer Schillerporling)',
    altNames: 'Inonotus obliquus',
    category: 'Pilz',
    tags: ['immun', 'antioxidant', 'entzuendung', 'longevity', 'darm'],
    short: 'Einer der stärksten natürlichen Antioxidantien. „König der Heilpilze" in Sibirien.',
    description: 'Chaga wächst an Birken und enthält extrem viele Melanin, Beta-Glucane und Betulinsäure. ORAC-Wert (antioxidative Kapazität) ist einer der höchsten aller Naturstoffe. Traditionell als Tee getrunken.',
    benefits: [
      'Höchster ORAC-Wert aller Lebensmittel',
      'Moduliert das Immunsystem (Beta-Glucane)',
      'Antiviral und anti-entzündlich',
      'Unterstützt Darmschleimhaut',
      'Kann Blutzucker regulieren'
    ],
    risks: [
      'Enthält Oxalate – bei Nierensteinen vorsichtig',
      'Blutverdünnende Wirkung – vor OPs absetzen',
      'Bei Autoimmunerkrankungen mit Arzt absprechen'
    ],
    dosage: '500 mg – 2 g Extrakt (doppelt extrahiert) täglich.',
    intake: 'Morgens oder mittags als Pulver, Tee oder Tinktur.',
    synergies: ['reishi', 'cordyceps', 'vitamin-c'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wächst wild an Birken; meist als Extrakt erhältlich.'
  },

  // ============ NEU: GELENKE & HAUT ============
  {
    id: 'hyaluronsaeure',
    name: 'Hyaluronsäure',
    altNames: 'HA',
    category: 'Longevity',
    tags: ['haut', 'gelenke', 'augen', 'bindegewebe', 'anti-aging'],
    short: 'Wasserbindender Baustein von Haut und Gelenken. Als Kapsel verbessert sie in mehreren RCTs Hautfeuchtigkeit und Elastizität, gemessen mit kosmetischen Verfahren.',
    description: 'Hyaluronsäure ist ein natürlicher Bestandteil der extrazellulären Matrix in Haut, Gelenkflüssigkeit und Auge. Oral eingenommen verbesserte sie in einer Meta-Analyse über 7 RCTs Hautfeuchtigkeit, Elastizität und Faltentiefe; die größte Studie mit 150 Erwachsenen zeigte nach 12 Wochen eine Dosisabhängigkeit. Bei leichter Arthrose berichten 9 von 11 kleinen Studien weniger Beschwerden. Die Studien sind klein und oft von Rohstoffherstellern getragen, die Aufnahme über den Darm ist nur im Tiermodell gezeigt.',
    benefits: [
      'Verbessert Hautfeuchtigkeit, Elastizität und Faltentiefe (Meta-Analyse, 7 RCTs)',
      'In der größten Studie wirkten 120 mg täglich deutlicher als 60 mg',
      'Weniger Arthrose-Beschwerden in 9 von 11 kleinen Studien',
      'Als Augentropfen etabliert bei trockenen Augen; als Kapsel nur eine Pilotstudie'
    ],
    risks: [
      'Oral gut verträglich, Nebenwirkungen in Studien selten und mild',
      'Keine Daten zu Schwangerschaft und Stillzeit',
      'Viele Studien von Rohstoffherstellern, unabhängige Bestätigung fehlt',
      'Injizierbare Form nur vom Arzt'
    ],
    dosage: 'Hautstudien verwendeten 60 bis 120 mg täglich über 12 Wochen, Arthrose-Studien 30 bis 300 mg täglich.',
    intake: 'Täglich über mindestens 8 bis 12 Wochen, so lange liefen die Hautstudien. Zum Einnahmezeitpunkt gibt es keine Daten.',
    synergies: ['kollagen', 'vitamin-c', 'glucosamin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Knochenbrühe (wenig), nur als Extrakt in sinnvoller Dosis.'
  },
  {
    id: 'glucosamin',
    name: 'Glucosamin',
    altNames: 'Glucosamin-Sulfat',
    category: 'Longevity',
    tags: ['gelenke', 'knorpel', 'bewegung', 'anti-aging', 'arthrose'],
    short: 'Knorpel-Baustein, sehr gut verträglich und gründlich untersucht. Positiv waren vor allem die Studien mit einem als Arzneimittel vertriebenen Glucosaminsulfat; unabhängige hochwertige Studien fanden keinen klinisch relevanten Effekt auf den Arthroseschmerz.',
    description: 'Der Cochrane-Review wertet 25 Studien mit 4.963 Arthrose-Patienten aus: Das Präparat des Herstellers Rotta war dem Placebo überlegen, andere Präparate und die methodisch saubersten Studien zeigten keinen Unterschied. Die große unabhängige GAIT-Studie (1.583 Patienten, 24 Wochen) verfehlte ihr Hauptziel. Eine Gesamtschau von 19 Übersichtsarbeiten (2026) findet einen kleinen Schmerzeffekt und eine etwas langsamere Gelenkspaltverschmälerung, beides an oder unter der Schwelle klinischer Relevanz. Beobachtungsdaten verbinden regelmäßige Einnahme mit niedrigerer Sterblichkeit; eine methodische Analyse zeigt, dass Selektionsverzerrung diesen Befund erklären kann.',
    benefits: [
      'Kleiner Schmerzeffekt in der Gesamtschau von 19 Übersichtsarbeiten (SMD −0,36) – an oder unter der Schwelle, ab der Patienten einen Unterschied spüren',
      'Mit dem Rotta-Präparat in 10 placebokontrollierten Studien deutlich weniger Schmerz (Cochrane 2005); unabhängige Studien fanden das nicht',
      'Etwas langsamere Gelenkspaltverschmälerung in 2 Studien über 3 Jahre mit Glucosaminsulfat; GAIT fand nach 2 Jahren keinen Unterschied',
      'In Beobachtungsstudien mit niedrigerer Sterblichkeit verbunden – Assoziation, durch Selektionsverzerrung erklärbar, kein Beweis',
      'Nebenwirkungen auf Placeboniveau über viele Studien'
    ],
    risks: [
      'Bei Krebstierallergie: Glucosamin aus Getreidefermentation wählen',
      'Kann bei manchen Menschen den Blutzucker erhöhen – bei Diabetes überwachen',
      'Erhöhtes Blutungsrisiko unter Warfarin und anderen Cumarinen beschrieben',
      'Mögliche seltene Ursache von Leberschäden (LiverTox, Grad D)',
      'Für Schwangere, Stillende, Kinder und Jugendliche keine Bewertung möglich'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: 1.500 mg täglich, als Glucosaminsulfat einmal täglich oder aufgeteilt in 3 × 500 mg. Das deutsche Arzneimittel enthält 1.500 mg Glucosaminhemisulfat pro Beutel.',
    intake: 'Mit Mahlzeit. Die Studien liefen 24 Wochen bis 3 Jahre.',
    synergies: ['kollagen', 'hyaluronsaeure', 'omega-3', 'vitamin-c'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Schalen von Krustentieren (Extraktion), kleine Mengen in Knochenbrühe.'
  },
  // ============ NEU 2026 ============
  {
    id: 'tongkat-ali',
    name: 'Tongkat Ali',
    altNames: 'Eurycoma longifolia, Longjack',
    category: 'Kräuter',
    tags: ['hormone', 'testosteron', 'energie', 'libido', 'stress'],
    short: 'Wurzelextrakt aus Südostasien: Bei Männern mit niedrigem Testosteron zeigen mehrere Studien einen kleinen Anstieg, bei gesunden Männern nichts Signifikantes. In der EU nicht zugelassen.',
    description: 'Tongkat Ali (Eurycoma longifolia) ist die Wurzel eines langsam wachsenden Baums aus Südostasien, traditionell gegen Fieber und für die Manneskraft genutzt. Standardisiert wird meist auf Eurycomanon, ein Quassinoid. Eine Meta-Analyse von 5 randomisierten Studien mit 232 Männern findet einen signifikanten Testosteronanstieg, der jedoch aus der Gruppe mit niedrigem Ausgangswert stammt; in der Untergruppe gesunder Männer ist er nicht mehr signifikant. Der in Produkttexten beworbene SHBG-Mechanismus ist am Menschen geprüft und nicht bestätigt worden: In der Studie an 32 jungen Männern blieben SHBG, LH und FSH unverändert. Die Mechanismusdaten stammen aus Leydig-Zellen von Rattenhoden und deuten auf eine Aromatase-Hemmung. 7 der 9 gesichteten Humanstudien verwendeten denselben Extrakt einer malaysischen Firma.',
    benefits: [
      'Hebt bei Männern mit niedrigem Ausgangstestosteron den Wert messbar an: in der saubersten Doppelblindstudie über 12 Wochen von rund 200 auf 225 ng/dl',
      'Meta-Analyse über 5 randomisierte Studien mit 232 Männern findet insgesamt einen signifikanten Anstieg',
      'Traditionell in Südostasien für Vitalität und Libido genutzt'
    ],
    risks: [
      'Bei gesunden Männern kein belastbarer Effekt: die größte Studie mit 109 Teilnehmern über 12 Wochen zeigt keinen Unterschied gegen Placebo',
      'In der EU nicht zugelassen: Die europäische Lebensmittelbehörde stellte 2021 fest, die Sicherheit sei nicht belegt, nach Hinweisen auf DNA-Schäden in Magen und Zwölffingerdarm',
      'Leber: publizierter Fall von Gelbsucht 2024 bei einem 47-Jährigen, Erholung nach dem Absetzen; die US-Leberdatenbank führt Tongkat als möglichen seltenen Auslöser',
      'Produktqualität schlecht belegt: 2004 lagen 36 von 100 malaysischen Produkten über dem Quecksilber-Grenzwert, 2018 enthielten im DNA-Test nur 37 Prozent eindeutig die richtige Pflanze',
      'Wechselwirkung: Die Aufnahme des Betablockers Propranolol sinkt um fast ein Drittel',
      '7 der 9 Humanstudien nutzen denselben Firmenextrakt, mehrere sind herstellerfinanziert, die Heterogenität der Meta-Analyse liegt bei 87 Prozent',
      'Langzeitdaten fehlen: die Studien laufen 2 bis 12 Wochen, eine einzige über 6 Monate',
      'Bei hormonabhängigen Erkrankungen ärztlich abklären'
    ],
    dosage: 'Keine Dosierungsangabe: Tongkat Ali ist in der EU nicht als Lebensmittel zugelassen. In den Humanstudien kam ein standardisierter Wasserextrakt der Wurzel über 2 bis 12 Wochen zum Einsatz, in einem Fall über 6 Monate.',
    intake: 'Keine Einnahmeempfehlung. Ein niedriger Testosteronwert ist eine ärztliche Diagnose. Bei laufender Medikation, insbesondere mit Propranolol, und bei hormonabhängigen Erkrankungen ärztlich abklären.',
    synergies: ['zink', 'vitamin-d3', 'magnesium'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wurzel von Eurycoma longifolia (Extrakt/Kapsel)'
  },
  {
    id: 'fadogia-agrestis',
    name: 'Fadogia Agrestis',
    altNames: 'Fadogia-Agrestis-Stängelextrakt',
    category: 'Kräuter',
    tags: ['hormone', 'testosteron', 'libido', 'energie'],
    short: 'Strauch aus Nigeria, der als Testosteron-Booster gehandelt wird: Die gesamte Hormonbehauptung stützt sich auf eine Rattenstudie über 5 Tage. Humanstudien gibt es keine.',
    description: 'Fadogia agrestis ist ein Strauch aus der Kaffeeverwandtschaft, der in Nigeria und der Sahelzone wächst und traditionell gegen Malaria und als Aphrodisiakum genutzt wurde. Die Wirkbehauptung beruht auf einer Arbeit der Universität Ilorin aus dem Jahr 2005: Männliche Ratten bestiegen nach 5 Tagen wässrigem Stängelextrakt die Weibchen häufiger, der Testosteronspiegel stieg dosisabhängig, gemessen an Tag 1, 3 und 5. Der viel zitierte Mechanismus über das luteinisierende Hormon (LH) ist dort nicht gemessen worden und im Abstract nicht erwähnt. Studien am Menschen existieren nicht: Eine PubMed-Suche liefert 10 Treffer, davon 3 Rattenarbeiten aus demselben Labor, der Rest Pflanzenchemie und Marktstudien.',
    benefits: [
      'Testosteronanstieg bisher nur bei Ratten gemessen, dosisabhängig an Tag 1, 3 und 5',
      'Im selben Versuch bestiegen männliche Ratten die Weibchen häufiger',
      'Traditionell in Nigeria und der Sahelzone gegen Malaria und als Aphrodisiakum genutzt',
      'Am Menschen ist keine dieser Wirkungen geprüft worden'
    ],
    risks: [
      'Keine einzige Humanstudie: weder zu Wirkung noch zu Verträglichkeit liegen Daten am Menschen vor',
      'Bei Ratten verschoben sich nach 28 Tagen die Marker der Hodenfunktion in Richtung Schädigung; nur die niedrigste Dosisstufe erholte sich nach dem Absetzen',
      'Folgearbeit 2009: Enzyme aus dem Zellinneren im Blut und ein erhöhter Marker für Membranschäden in Leber und Niere',
      'Von 17 analysierten Produkten enthielten 5 keine nachweisbaren Pflanzenstoffe der Art',
      'Der LH-Mechanismus ist nicht gemessen, sondern nachträglich erzählt worden',
      'In der EU nicht zugelassen; ein Antrag als neuartiges Lebensmittel liegt nicht einmal vor',
      'Nicht bei Kinderwunsch ohne ärztliche Rücksprache'
    ],
    dosage: 'Keine Dosierungsangabe. Es gibt keine Humanstudie und damit keine geprüfte Anwendung; die Milligrammzahlen im Netz stammen aus reichweitenstarken Empfehlungen, nicht aus Studien.',
    intake: 'Keine Einnahmeempfehlung. Ein niedriger Testosteronwert ist eine ärztliche Diagnose.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Stängel von Fadogia agrestis (Extrakt/Kapsel)'
  },
  {
    id: 'ca-akg',
    name: 'Ca-AKG (Calcium-Alpha-Ketoglutarat)',
    altNames: 'Alpha-Ketoglutarat, AKG, Calcium-AKG',
    category: 'Longevity',
    tags: ['anti-aging', 'longevity', 'energie', 'knochen'],
    short: 'Longevity-Favorit: ein zentrales Stoffwechsel-Molekül (Citratzyklus). Die Mausdaten zeigen vor allem weniger Gebrechlichkeit; im unabhängigen Testprogramm blieb eine Lebenszeitverlängerung aus.',
    description: 'Alpha-Ketoglutarat (AKG) ist ein Schlüsselmolekül des Citratzyklus und ein wichtiger Cofaktor für Enzyme, die Epigenetik, Kollagenbildung und Energiestoffwechsel steuern. Die körpereigenen Spiegel sinken mit dem Alter deutlich. In der Calcium-Form (Ca-AKG) wird es supplementiert. Tierstudien zeigten längere Gesundheitsspanne und weniger Entzündung; eine vielbeachtete Humanstudie (Rejuvant) berichtete eine Senkung des biologischen Alters (DNA-Methylierungs-Uhr) – allerdings offen, ohne Placebogruppe, an 42 Personen, mit einem Vorstandsmitglied des Herstellers unter den Autoren. Das unabhängige US-Testprogramm (ITP) prüfte Alpha-Ketoglutarat zweimal, mit Beginn im Alter von 18 und von 7 Monaten, und fand beide Male keine Lebenszeitverlängerung. Beliebt in Longevity-Protokollen.',
    benefits: [
      'Senkte in einer unkontrollierten Studie an 42 Personen (Rejuvant) das biologische Alter (Methylierungs-Uhr)',
      'Verlängerte in Tierstudien die Gesundheitsspanne und reduzierte Entzündung',
      'Cofaktor für Epigenetik, Kollagen- und Energiestoffwechsel',
      'Kann Knochendichte unterstützen (präklinisch/erste Humandaten)'
    ],
    risks: [
      'Humanevidenz noch begrenzt (kleine, unkontrollierte Studien); im unabhängigen Mausprogramm ITP zweimal ohne Lebenszeiteffekt',
      'Gut verträglich; selten leichte Magen-Darm-Effekte',
      'Liefert nebenbei etwas Calcium – Gesamtzufuhr im Blick behalten',
      'Kein Ersatz für die Grundlagen (Schlaf, Bewegung, Ernährung)'
    ],
    dosage: 'Typisch 1.000–2.000 mg Ca-AKG täglich (Rejuvant-Protokoll: ~1.000 mg).',
    intake: 'Mit oder ohne Mahlzeit, oft morgens. Dauerhafte Einnahme üblich.',
    synergies: ['nmn', 'vitamin-d3', 'omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Körpereigenes Citratzyklus-Molekül; als Ca-AKG-Pulver/Kapsel'
  },
  {
    id: 'nicotinamid-ribosid',
    name: 'Nicotinamid-Ribosid (NR)',
    altNames: 'NR, Niagen, Nicotinamide Riboside',
    category: 'Longevity',
    tags: ['anti-aging', 'longevity', 'energie', 'nad'],
    short: 'NAD+-Vorstufe und Schwester von NMN: hebt den zellulären NAD+-Spiegel für Energie, Reparatur und gesundes Altern – die am besten untersuchte NAD-Marke (Niagen).',
    description: 'Nicotinamid-Ribosid (NR) ist eine Vorstufe von NAD+, einem Coenzym, das für Energiegewinnung, DNA-Reparatur und die Aktivität der „Longevity-Enzyme" (Sirtuine) zentral ist. NAD+ sinkt mit dem Alter. NR wird effizient in NAD+ umgewandelt und ist – neben NMN – die am besten untersuchte NAD-Vorstufe (als Markenrohstoff Niagen). Humanstudien belegen zuverlässig steigende NAD+-Spiegel; der klinische Nutzen für Leistung/Altern wird noch erforscht.',
    benefits: [
      'Hebt in Humanstudien zuverlässig den NAD+-Spiegel im Blut',
      'Unterstützt Energiestoffwechsel, DNA-Reparatur und Sirtuine',
      'Gut verträglich und stabil; oral gut bioverfügbar',
      'Alternative bzw. Ergänzung zu NMN'
    ],
    risks: [
      'Steigende NAD+-Spiegel sind belegt – der Alters-/Leistungsnutzen beim Menschen ist noch nicht eindeutig',
      'Sehr gut verträglich; selten leichte Übelkeit/Müdigkeit',
      'Hochwertige (Niagen-)Ware bevorzugen; Qualität schwankt',
      'Kein Ersatz für Schlaf, Bewegung und Ernährung'
    ],
    dosage: 'Typisch 250–500 mg NR täglich (Studien: 250–1.000 mg).',
    intake: 'Morgens mit oder ohne Mahlzeit. Dauerhafte Einnahme üblich.',
    synergies: ['nmn', 'resveratrol', 'pterostilben', 'tmg'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Spuren in Milch; als NR-/Niagen-Kapsel'
  },
  {
    id: 'shilajit',
    name: 'Shilajit',
    altNames: 'Mumijo, Fulvinsäure-Mineralharz',
    category: 'Mineral',
    tags: ['energie', 'hormone', 'testosteron', 'mitochondrien', 'anti-aging'],
    short: 'Mineralharz aus Gebirgsgestein, in der ayurvedischen Medizin ein Verjüngungsmittel. In einer placebokontrollierten Studie stieg das Testosteron nach 90 Tagen um 20,45 %; die wenigen kontrollierten Studien sind klein und herstellerfinanziert, die Produktqualität schwankt.',
    description: 'Shilajit (Mumijo) ist ein teerartiges Harz aus Gebirgsregionen, vor allem aus Humin- und Fulvinsäuren, weiteren organischen Verbindungen und Mineralstoffen; in Herkunft und Zusammensetzung ist es nicht eindeutig definiert. Traditionell gilt es in der ayurvedischen Medizin als Rasayana (Verjüngung). Am Menschen gibt es wenige kontrollierte Studien: Bei 75 ausgewerteten Männern zwischen 45 und 55 Jahren stieg das Gesamttestosteron nach 90 Tagen um 20,45 % und lag über Placebo; bei 500 mg täglich blieb in einer Untergruppe mehr Kraft nach Ermüdung erhalten. Beide Studien finanzierte der Hersteller des Extrakts. Für die beworbene Wirkung auf Mitochondrien und Coenzym Q10 gibt es keine Humandaten.',
    benefits: [
      'Gesamttestosteron nach 90 Tagen plus 20,45 % gegenüber Ausgangswert und signifikant über Placebo (Männer 45 bis 55 Jahre, 75 ausgewertet, herstellerfinanziert)',
      'Weniger Kraftverlust nach Ermüdung bei 500 mg täglich: 8,9 % gegenüber 16,0 % unter Placebo, nur in der stärkeren Hälfte von 63 Männern',
      'Bessere Spermienwerte bei Oligospermie: Gesamtspermienzahl plus 61,4 % nach 90 Tagen (28 Männer, ohne Placebogruppe)',
      'Bessere Hautdurchblutung nach 14 Wochen bei gesunden Frauen (placebokontrolliert)',
      'Traditionell in der ayurvedischen Medizin als Verjüngungsmittel genutzt'
    ],
    risks: [
      'Thallium in Rohshilajit und Präparaten nachgewiesen, teils mehr im Präparat als im Rohstoff – nur Ware mit unabhängiger Laborprüfung auf Schwermetalle kaufen',
      'Zusammensetzung nicht eindeutig definiert; Studien nutzten standardisierte Extrakte, der Handel nicht unbedingt',
      'Bei Gicht/hohem Harnsäurespiegel vorsichtig',
      'Verändert in Studien Hormonwerte – bei hormonabhängigen Erkrankungen ärztlich abklären',
      'Kontrollierte Daten nur bis 14 Wochen; keine Daten zu Schwangerschaft, Stillzeit, Kindern'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: In der Testosteronstudie 2 × 250 mg eines gereinigten Extrakts täglich über 90 Tage, in der Kraftstudie 250 oder 500 mg täglich über 8 Wochen.',
    intake: 'In den Studien als Kapsel eines standardisierten Extrakts. Zu Harz oder in Wasser gelöster Einnahme gibt es keine Studien.',
    synergies: ['tongkat-ali', 'coq10', 'vitamin-d3'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Mineralharz aus Gebirgsgestein (gereinigt, als Harz/Kapsel)'
  },
  {
    id: 'colostrum',
    name: 'Colostrum (bovin)',
    altNames: 'Erstmilch, Bovines Kolostrum',
    category: 'Protein',
    tags: ['immun', 'darm', 'regeneration', 'sport'],
    short: 'Die Erstmilch der Kuh: In Meta-Analysen weniger Atemwegsinfekte bei Trainierenden und eine stabilere Darmbarriere unter Belastung, der Mechanismus ist noch offen.',
    description: 'Bovines Kolostrum ist die gefriergetrocknete Erstmilch von Kühen und enthält Immunglobuline (IgG), Laktoferrin, antimikrobielle Peptide und Wachstumsfaktoren wie IGF-1. Am besten belegt ist es bei Menschen, die regelmäßig trainieren: weniger Tage mit Atemwegssymptomen und ein gedämpfter Anstieg der Darmdurchlässigkeit nach harter Belastung. Die Studien sind klein, und die gemessenen Immunmarker erklären den Effekt nicht. Das IGF-1 aus dem Pulver erhöht den Blutspiegel in Studien nicht.',
    benefits: [
      'Weniger Tage mit Atemwegssymptomen bei Trainierenden (Meta-Analyse, 5 RCTs, Rate Ratio 0,56)',
      'Dämpft den Anstieg der Darmdurchlässigkeit nach harter Belastung (Meta-Analyse, Surrogatmarker)',
      'Senkte in 15 von 20 Studienarmen die Durchfallhäufigkeit bei Magen-Darm-Erkrankungen',
      'Verändert messbar Teile der angeborenen Abwehr (Neutrophilenfunktion), klassische Immunmarker kaum',
      'Kein Anstieg des IGF-1 im Blut bei 20 bis 60 g täglich'
    ],
    risks: [
      'Bei Milcheiweißallergie ungeeignet, enthält Milchzucker',
      'WADA rät Athleten wegen IGF-1 ab, verboten ist es nicht',
      'Studien klein und überwiegend mit Verzerrungsrisiko, Leistungseffekte kaum belegt',
      'Bei hormonabhängigen Erkrankungen vorher ärztlich abklären'
    ],
    dosage: 'Die meisten Humanstudien verwendeten 10 bis 20 g Pulver täglich über 8 bis 12 Wochen, einzelne Studien mehr.',
    intake: 'Täglich über mehrere Wochen, wie in den Studien. Zum besten Einnahmezeitpunkt gibt es keine vergleichenden Daten.',
    synergies: ['probiotika', 'glutamin', 'zink'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Erstmilch von Kühen (gefriergetrocknetes Pulver)'
  },
  {
    id: 'cistanche',
    name: 'Cistanche',
    altNames: 'Cistanche tubulosa/deserticola, Wüsten-Ginseng',
    category: 'Kräuter',
    tags: ['hormone', 'testosteron', 'libido', 'energie', 'anti-aging'],
    short: 'Traditionelles „Wüsten-Ginseng"-Kraut: reich an Echinacosiden – genutzt für Libido, Testosteron-Unterstützung, Energie und (in Tierdaten) Immun- und Longevity-Effekte.',
    description: 'Cistanche ist eine parasitäre Wüstenpflanze der TCM, reich an Phenylethanoid-Glykosiden (Echinacosid, Verbascosid). Traditionell für „Nieren-Yang", Libido und Vitalität genutzt. In Tier-/Zellstudien zeigt sie antioxidative, immunmodulierende und potenziell testosteronunterstützende Effekte; teils mit Langlebigkeit assoziiert.',
    benefits: [
      'Traditionell für Libido, Potenz und Vitalität',
      'Reich an antioxidativen Echinacosiden',
      'Tierdaten zu immunmodulierenden und Longevity-Effekten',
      'Kann Energie und Ausdauer unterstützen'
    ],
    risks: [
      'Human-Evidenz begrenzt – vieles aus Tradition und Tierstudien',
      'Qualität/Standardisierung schwankt',
      'Bei hormonabhängigen Erkrankungen ärztlich abklären',
      'Als Ergänzung, kein Heilmittel'
    ],
    dosage: 'Üblich 300–1.000 mg Extrakt täglich (standardisiert auf Echinacoside).',
    intake: 'Mit Mahlzeit. Dauerhafte oder zyklische Einnahme.',
    synergies: ['tongkat-ali', 'ginseng'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Wüstenpflanze Cistanche (Stängel-Extrakt)'
  },
  {
    id: 'tribulus',
    name: 'Tribulus Terrestris',
    altNames: 'Erd-Burzeldorn, Puncture Vine',
    category: 'Kräuter',
    tags: ['libido', 'hormone', 'sport'],
    short: 'Klassisches Libido-Kraut: steigert in Studien vor allem das sexuelle Verlangen – der Testosteron-Effekt ist dagegen schwach belegt.',
    description: 'Tribulus Terrestris ist ein traditionelles Kraut mit Saponinen (Protodioscin), lange als Testo-Booster vermarktet. Die Studienlage zeigt: Für die Libido/sexuelle Funktion gibt es Belege, für eine echte Testosteronsteigerung beim Menschen jedoch kaum – der Ruf als Testo-Booster ist überzogen.',
    benefits: [
      'Kann Libido und sexuelle Funktion verbessern (Studien)',
      'Traditionell für Vitalität genutzt',
      'Gut verfügbar und günstig'
    ],
    risks: [
      'Kaum echter Testosteron-Effekt beim Menschen (entgegen dem Marketing)',
      'Qualität/Standardisierung (Protodioscin) sehr unterschiedlich',
      'Selten Magen-Darm-Beschwerden',
      'Als Libido-Support, nicht als Testo-Booster einordnen'
    ],
    dosage: 'Üblich 250–750 mg Extrakt täglich (standardisiert auf Saponine/Protodioscin).',
    intake: 'Mit Mahlzeit. Oft zyklisch.',
    synergies: ['tongkat-ali', 'zink'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Frucht/Kraut von Tribulus terrestris (Extrakt)'
  },
  {
    id: 'ergothionein',
    name: 'Ergothionein',
    altNames: 'L-Ergothionein, EGT, „Longevity-Vitamin"',
    category: 'Antioxidant',
    tags: ['anti-aging', 'longevity', 'antioxidans', 'zellschutz'],
    short: 'Zell-Antioxidans aus Pilzen mit eigenem Transporter. Als „Longevity-Vitamin" gehandelt, die Humanstudien sind klein, kurz und ohne harten Endpunkt.',
    description: 'Ergothionein ist eine schwefelhaltige Aminosäure, die der Körper nicht selbst bildet, sondern über die Nahrung (v. a. Pilze) aufnimmt. Ein spezieller Transporter (OCTN1) reichert es gezielt in Zellen an, die viel oxidativem Stress ausgesetzt sind. Niedrige Spiegel sind mit altersbedingten Erkrankungen assoziiert – daher die Bezeichnung „Longevity-Vitamin".',
    benefits: [
      'Antioxidative Wirkung und Anreicherung im Laborversuch gezeigt',
      'Niedrige Spiegel mit altersbedingten Erkrankungen assoziiert',
      'Schutz von Mitochondrien und DNA in Zellversuchen',
      'Sehr gut verträglich und stabil'
    ],
    risks: [
      'Human-Interventionsstudien noch begrenzt (viel Assoziations-/Grundlagenforschung)',
      'Als Ergänzung sinnvoll v. a. bei pilzarmer Ernährung',
      'Kein Ersatz für eine antioxidansreiche Ernährung'
    ],
    dosage: 'Typisch 5–25 mg täglich (Studien meist 5–30 mg).',
    intake: 'Mit oder ohne Mahlzeit. Dauerhafte Einnahme.',
    synergies: ['vitamin-c', 'astaxanthin', 'glutathion'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Pilze (v. a. Austernpilze, Shiitake, Steinpilze); als Kapsel'
  },
  {
    id: 'glynac',
    name: 'GlyNAC (Glycin + NAC)',
    altNames: 'Glycin + N-Acetyl-Cystein',
    category: 'Aminosäure',
    tags: ['anti-aging', 'longevity', 'glutathion', 'mitochondrien', 'entgiftung'],
    short: 'Die Longevity-Kombi aus Glycin und NAC: liefert die Bausteine für Glutathion – in einer kleinen Studie einer einzigen Arbeitsgruppe mit Verbesserungen bei Mitochondrien, Entzündung und Alterungsmarkern.',
    description: 'GlyNAC kombiniert die beiden Aminosäuren Glycin und N-Acetyl-Cystein (NAC) – zusammen die limitierenden Bausteine für das körpereigene Master-Antioxidans Glutathion. Im Alter sinkt Glutathion, während oxidativer Stress steigt. Kleine Humanstudien (v. a. Baylor College) zeigten unter GlyNAC verbesserte Glutathionspiegel, Mitochondrienfunktion, Insulinsensitivität, Entzündungs- und Alterungsmarker.',
    benefits: [
      'Liefert die Bausteine für Glutathion (körpereigenes Master-Antioxidans)',
      'Kleine Studien: bessere Mitochondrienfunktion und Insulinsensitivität',
      'Senkte in Studien oxidativen Stress und Entzündungsmarker',
      'Beide Komponenten gut verfügbar und günstig'
    ],
    risks: [
      'Die einzige Studie außerhalb der Baylor-Gruppe (Nestlé, 114 Personen, 2 Wochen) verfehlte ihren Hauptendpunkt – allerdings mit weniger als der halben Baylor-Dosis',
      'Mausstudie 2025: Herzvorteil nur bei Männchen, Weibchen mit schlechterer Laufleistung',
      'Human-Evidenz aus kleinen Studien (überwiegend eine Forschungsgruppe)',
      'NAC selten mit Magen-Darm-Effekten; bei Asthma vorsichtig',
      'Kein Ersatz für Schlaf, Bewegung, Ernährung',
      'Bei Medikamenten (z. B. Nitrate) Wechselwirkungen beachten'
    ],
    dosage: 'Studienprotokoll: Glycin + NAC je ~100 mg/kg/Tag; Alltag oft niedriger (z. B. 3–6 g Glycin + 1–1,8 g NAC).',
    intake: 'Aufgeteilt zu Mahlzeiten. Dauerhafte Einnahme.',
    synergies: ['glycin', 'nac', 'alpha-liponsaeure'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Aminosäuren (Glycin-Pulver + NAC-Kapsel/Pulver)',
    podcasts: [
      {
        title: 'Glutathion: Das Master-Antioxidans im Faktencheck',
        audio: 'audio/glutathion-podcast.mp3',
        spotify: '0E6RA6fW9xUHQJ9iAY3k72',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 65) \u00b7 mit Paul & Paula. Die GlyNAC-Studie im Detail: Glutathion bei \u00c4lteren zur\u00fcck auf Jung-Niveau, weniger oxidativer Stress, bessere Mitochondrien und Gehgeschwindigkeit (Sekhar, Baylor College). Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 04.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'lithium-orotat',
    name: 'Lithium-Orotat (niedrig dosiert)',
    altNames: 'Low-Dose Lithium, Lithiumorotat',
    category: 'Spurenelement – in der EU kein zulässiges Nahrungsergänzungsmittel',
    tags: ['stimmung', 'gehirn', 'neuroprotektion', 'longevity', 'schlaf'],
    short: 'Lithium als Spurenelement fürs Gehirn, in Mikrodosen weit unter der Medikamenten-Dosis: Eine Nature-Studie 2025 fand es bei beginnender Gedächtnisstörung im Gehirn vermindert, bei Mäusen verhinderte Lithiumorotat Alzheimer-Schäden. Humanstudien zur Mikrodosis fehlen; in der EU nicht als Nahrungsergänzung zulässig.',
    description: 'Lithium ist – jenseits der hochdosierten Psychiatrie-Anwendung als Lithiumcarbonat – ein natürliches Spurenelement in Wasser, Nahrung und Gehirn. Lithiumorotat wird in Mikrodosen für Neuroprotektion und Stimmung genutzt. Eine Nature-Studie (Aron 2025) fand Lithium als einziges von 27 Metallen im Gehirn bei leichter kognitiver Störung vermindert; bei Mäusen löste Lithiummangel Alzheimer-typische Veränderungen aus, niedrig dosiertes Lithiumorotat verhinderte sie. Bevölkerungsdaten verbinden mehr Lithium im Trinkwasser mit weniger Suiziden und – nichtlinear – weniger Demenz, aber nicht alle Studien. Kontrollierte Humanstudien zur Mikrodosis fehlen.',
    benefits: [
      'Lithium ist bei leichter kognitiver Störung als einziges von 27 Metallen im Gehirn vermindert (Nature 2025, Hirngewebe)',
      'Niedrig dosiertes Lithiumorotat verhinderte bei Mäusen Amyloid, Tau-Verklumpung, Synapsenverlust und Gedächtnisverlust – ohne veränderte Nieren- und TSH-Werte',
      'Wirkt über Hemmung von GSK3β, einem Schlüsselenzym der Tau-Pathologie',
      'Bevölkerungsdaten: mehr Lithium im Trinkwasser ↔ weniger Suizide (Meta-Analyse, 15 Studien) und oberhalb von 15,0 µg/L weniger Demenz (Dänemark)',
      'Mikrodosis liegt weit unter der psychiatrischen Dosis'
    ],
    risks: [
      'In der EU nicht als Nahrungsergänzungsmittel zulässig; zugelassen ist nur Lithiumcarbonat als verschreibungspflichtiges Arzneimittel',
      'Nicht mit hochdosierter Lithiumtherapie verwechseln – dort Nieren-, Schilddrüsen- und Nebenschilddrüsenschäden möglich',
      'Keine kontrollierten Humanstudien zur Mikrodosis; Trinkwasserdaten teils widersprüchlich',
      'Bei Nieren- oder Schilddrüsenerkrankung, Entwässerungstabletten, Schwangerschaft oder Medikamenten fürs Nervensystem ärztlich abklären'
    ],
    dosage: 'Keine Dosierangabe: Lithium ist in der EU nicht als Nahrungsergänzungsmittel zulässig, Lithiumorotat ist kein zugelassenes Arzneimittel.',
    intake: 'Keine Einnahmeempfehlung; bei Interesse ärztlich abklären.',
    synergies: ['omega-3', 'magnesium', 'vitamin-b12'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Spurenelement (Trinkwasser); als Lithiumorotat-Kapsel',
    podcasts: [
      { title: 'KI-Podcast: Lithium – das Spurenelement fürs Gehirn (Longevity & Neuroschutz)', audio: 'audio/lithium-podcast.mp3', spotify: '7w537EJ55GOs1xwuEbsylM', lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen', note: 'Der Podcast von Paul Höser (Folge 35). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche zur NIEDRIG dosierten Mikrodosis (Lithiumorotat), inkl. der Harvard-/Nature-Forschung 2025. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Nicht mit hochdosierter Lithiumtherapie verwechseln; bei Vorerkrankungen, Schwangerschaft oder Medikamenten ärztlich abklären.' }
    ]
  },
  {
    id: 'exogene-ketone',
    name: 'Exogene Ketone / Ketonester',
    altNames: 'BHB, Beta-Hydroxybutyrat, Ketone Ester/Salze',
    category: 'Longevity',
    tags: ['energie', 'gehirn', 'sport', 'stoffwechsel', 'fokus'],
    short: 'Ketone zum Trinken: liefern dem Körper direkt den „Fasten-Treibstoff" BHB – für schnelle mentale und körperliche Energie ohne Kohlenhydrate.',
    description: 'Exogene Ketone (v. a. Beta-Hydroxybutyrat, BHB) heben den Ketonspiegel im Blut an, ohne dass man fasten oder streng ketogen essen muss. Der Körper kann Ketone als alternativen Treibstoff für Gehirn und Muskeln nutzen. Ketonester wirken stärker (aber bitter/teuer), Ketonsalze milder. Genutzt für Fokus, Ausdauer und als Brücke in die Ketose.',
    benefits: [
      'Schnelle Energie für Gehirn und Muskeln – auch ohne ketogene Ernährung',
      'Kann Fokus und mentale Klarheit steigern',
      'Von Ausdauersportlern für Energie und Regeneration genutzt',
      'Kann Appetit dämpfen'
    ],
    risks: [
      'Ketonester schmecken unangenehm und sind teuer',
      'Magen-Darm-Beschwerden bei höherer Dosis möglich',
      'Ketonsalze liefern viel Natrium/Mineralstoffe (Menge beachten)',
      'Kein Ersatz für gute Ernährung; Effekte individuell'
    ],
    dosage: 'Ketonester: ~10–25 g pro Portion; Ketonsalze nach Herstellerangabe.',
    intake: 'Vor Sport oder mentaler Belastung; auf nüchternen Magen stärker wirksam.',
    synergies: ['mct-oel', 'elektrolyte', 'koffein'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Als BHB-Ester/-Salz-Getränk oder -Pulver'
  },
  {
    id: 'citrus-bergamot',
    name: 'Citrus Bergamot',
    altNames: 'Bergamotte-Extrakt, Citrus bergamia',
    category: 'Kräuter',
    tags: ['herz', 'cholesterin', 'stoffwechsel', 'anti-aging'],
    short: 'Extrakt der Bergamotte-Zitrusfrucht: in Studien mit günstigen Effekten auf Cholesterin und Blutfette – ob davon je ein Herz profitiert hat, wurde nie gemessen.',
    description: 'Citrus Bergamot ist reich an speziellen Polyphenolen (u. a. Brutieridin, Melitidin), die chemisch einem Teil der Statine ähneln; in Zellversuchen hemmen sie das Statin-Enzym aber nicht direkt (Huang 2021). Studien zeigen Senkungen von LDL-Cholesterin und Triglyzeriden sowie Hinweise auf niedrigeren Blutzucker. In kurzen Studien gut verträglich; Langzeitdaten fehlen.',
    benefits: [
      'Kann LDL-Cholesterin und Triglyzeride senken',
      'Kann HDL („gutes" Cholesterin) leicht anheben',
      'Hinweise auf niedrigeren Blutzucker (Evidenz sehr niedrig, Chambari 2026)',
      'Ergänzung bei leicht erhöhten Blutfetten – kein Ersatz für eine verordnete Therapie'
    ],
    risks: [
      'Kein Ersatz für verordnete Statine bei hohem Risiko – ärztlich abklären',
      'Qualität/Standardisierung (Polyphenolgehalt) beachten',
      'Selten Magen-Darm-Beschwerden',
      'Bergamottin hemmt das Leberenzym CYP3A4 – eine Wechselwirkung mit manchen Statinen ist denkbar, am Menschen aber nicht untersucht',
      'Bergamotte-Öl enthält phototoxische Furocumarine (Berloque-Dermatitis); für den patentierten Saftextrakt ist ihre weitgehende Entfernung beschrieben, für andere Produkte fehlen Daten – Angaben je Produkt prüfen'
    ],
    dosage: 'Typisch 500–1.000 mg standardisierter Extrakt täglich.',
    intake: 'Mit einer Mahlzeit, oft zum Abendessen.',
    synergies: ['omega-3'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Schale/Saft der Bergamotte (standardisierter Extrakt)'
  },
  {
    id: 'nattokinase',
    name: 'Nattokinase',
    altNames: 'Natto-Enzym',
    category: 'Enzym',
    tags: ['herz', 'kreislauf', 'blut', 'anti-aging'],
    short: 'Ein Enzym aus fermentierten Sojabohnen (Natto): baut im Reagenzglas Fibrin ab und senkt in Studien leicht den Blutdruck. In der EU als neuartiges Lebensmittel zugelassen; ob es Gerinnsel im Körper auflöst, ist nicht gezeigt.',
    description: 'Nattokinase ist ein fibrinolytisches Enzym aus dem japanischen Natto, 1987 beschrieben. Im Reagenzglas baut es Fibrin (den Baustein von Blutgerinnseln) ab; am Menschen ist eine leichte Blutdrucksenkung belegt (Meta-Analyse, 6 RCTs, 546 Teilnehmer), ein Schutz vor Thrombosen dagegen nicht untersucht. Ob aktives Enzym aufgenommen wird, ist laut EFSA (2016) offen. Beliebt in der Herz-Kreislauf-Prävention und bei Long Covid. In der EU ist fermentierter Sojabohnenextrakt (NSK-SD, um Vitamin K2 bereinigt) als neuartiges Lebensmittel zugelassen (Durchführungsbeschluss (EU) 2017/115).',
    benefits: [
      'Löst Fibrin im Reagenzglas; ob aktives Enzym aufgenommen wird, ist offen (EFSA 2016); in der dreijährigen Placebostudie keine Wirkung auf Gerinnungs- und Fibrinolysewerte',
      'In Studien mild blutdrucksenkend (6 RCTs, 546 Teilnehmer: −3,45/−2,32 mmHg)',
      'Aus einem traditionellen fermentierten Lebensmittel; EU-zugelassener Extrakt mit definierter Enzymaktivität',
      'Viele Long-Covid- und ME/CFS-Betroffene berichten Besserung (Selbstauskunft, keine kontrollierte Studie)'
    ],
    risks: [
      'Blutverdünnende Wirkung – nicht mit Gerinnungshemmern kombinieren (Blutungsrisiko), ärztlich abklären',
      'Vor Operationen absetzen',
      'Qualität/Aktivität (in FU) beachten',
      'Bei Blutungsneigung meiden',
      'Fallbericht: Ersatz von Warfarin durch Nattokinase nach mechanischem Herzklappenersatz führte zu einem Gerinnsel auf der Klappe (Elahi 2015) – kein Ersatz für verschriebene Gerinnungshemmer'
    ],
    dosage: 'In der placebokontrollierten Langzeitstudie 2.000 FU täglich. Die EFSA-Bewertung (2016) des zugelassenen Extrakts NSK-SD gilt für höchstens 100 mg pro Tag bei gesunden Erwachsenen über 35; höhere Mengen liegen außerhalb dieser Bewertung.',
    intake: 'Auf leeren Magen, oft abends.',
    synergies: ['omega-3', 'vitamin-k2'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Aus fermentierten Sojabohnen (Natto); als Kapsel'
  },
  {
    id: 'serrapeptase',
    name: 'Serrapeptase',
    altNames: 'Serrapeptidase, Serratiopeptidase',
    category: 'Enzym',
    tags: ['entzündung', 'regeneration', 'atemwege', 'schmerzen'],
    short: 'Ein proteolytisches Enzym: beworben zur Auflösung von entzündlichem Gewebe/Schleim und zur Entzündungslinderung – beim Schmerz fanden die Studien nichts.',
    description: 'Serrapeptase ist ein eiweißspaltendes Enzym (ursprünglich aus Seidenraupen-Bakterien), das entzündliches und abgestorbenes Gewebe sowie zähen Schleim abbauen kann. Traditionell in Japan/Europa bei Entzündungen, Schwellungen, Atemwegsschleim und postoperativer Heilung genutzt. Status: In der EU gilt Serrapeptase als neuartiges Lebensmittel ohne Zulassung (Sicherheitsbewertung nach VO 2015/2283 nötig); Food Standards Scotland verlangte 2022 die Marktrücknahme; in Japan zog der Originalhersteller Takeda das Präparat 2011 zurück; in Indien ist es ein Arzneiwirkstoff.',
    benefits: [
      'Kann entzündliches/abgestorbenes Gewebe und Schleim abbauen',
      'In kleinen, methodisch schwachen Studien teils weniger Schwellung nach Zahn-OP; Schmerz meist ohne Effekt; Neubewertung in Japan ohne Unterschied zu Placebo',
      'Kann zähen Atemwegsschleim verflüssigen',
      'Wird bei Schmerzen/Schwellungen unterstützend genutzt'
    ],
    risks: [
      'Studienlage gemischt und teils älter/klein',
      'Auf nüchternen Magen einnehmen (magensaftresistent), sonst inaktiviert',
      'Blutungsrisiko bei Gerinnungshemmern plausibel, aber kein dokumentierter Fall gefunden',
      'Selten Magen-Darm-/Hautreaktionen'
    ],
    dosage: 'Keine Dosierungsangabe: Serrapeptase ist in der EU nicht als Lebensmittel zugelassen. Als Arzneimittel wurde es in Studien über wenige Tage nach Operationen gegeben.',
    intake: 'Auf leeren Magen (min. 30 Min vor/2 h nach dem Essen), magensaftresistente Form.',
    synergies: ['nattokinase', 'kurkuma'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Mikrobiell hergestelltes Enzym; als magensaftresistente Kapsel'
  },
  {
    id: 'safran',
    name: 'Safran',
    altNames: 'Crocus sativus, Saffron-Extrakt',
    category: 'Kräuter',
    tags: ['stimmung', 'schlaf', 'augen', 'stress'],
    short: 'Das teuerste Gewürz der Welt als Stimmungsaufheller: Safran-Extrakt bessert in Dutzenden Studien depressive Beschwerden und schnitt in direkten Vergleichen etwa so gut ab wie SSRI.',
    description: 'Safran (aus den Narben des Krokus) enthält Crocine, Picrocrocin und Safranal. Randomisierte Studien zeigen bei leichter bis mittlerer Depression und depressiver Verstimmung eine Besserung, vor allem in Selbstauskunftsskalen; in Vergleichsstudien mit SSRI zeigte sich kein Wirkungsunterschied bei weniger Nebenwirkungen. Auch für PMS, Schlaf und Augen (Makula) untersucht.',
    benefits: [
      'Bessert depressive Symptome bei leichter bis mittlerer Depression und Verstimmung (Meta-Analyse über 34 RCTs, v. a. Selbstauskunft)',
      'In direkten Vergleichen mit SSRI kein Wirkungsunterschied, weniger Nebenwirkungen (8 Studien)',
      'Kann Angstsymptome und Schlafqualität verbessern (kleinere Studien)',
      'Linderung prämenstrueller Beschwerden (Meta-Analyse); Augen (Makula) in kleinen Studien untersucht',
      'Von der WFSBP-CANMAT-Taskforce bei Depression vorläufig empfohlen'
    ],
    risks: [
      'Kein Ersatz für ärztliche Behandlung bei Depression',
      'Nebenwirkungen meist mild, vor allem Magen-Darm; vereinzelt Unruhe und hypomane Symptome berichtet',
      'Höhere Dosen wie 200–400 mg nur in wenigen, kurzen Studien untersucht; in der Schwangerschaft werden höhere Dosen mit Wehenanregung und Fehlgeburtsrisiko verbunden',
      'Vorsicht mit Gerinnungshemmern: hemmt im Labor die Plättchenaggregation, Fallbericht einer Blutung unter Rivaroxaban',
      'Häufig gefälscht: weltweit schätzungsweise 20–30 % der Handelsware, auch Nahrungsergänzungsmittel betroffen'
    ],
    dosage: 'In den Studien häufig 28–30 mg standardisierter Extrakt täglich über 8 bis 12 Wochen, teils als 14 mg zweimal täglich.',
    intake: 'In Studien oft auf zwei Gaben à 14 mg verteilt.',
    synergies: ['omega-3', 'magnesium'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Narben des Safran-Krokus (standardisierter Extrakt)'
  },
  {
    id: 'magnesium-l-threonat',
    name: 'Magnesium-L-Threonat',
    altNames: 'Magtein, Mg-Threonat',
    category: 'Mineral',
    tags: ['gehirn', 'gedächtnis', 'schlaf', 'stimmung'],
    short: 'Magnesium gebunden an L-Threonsäure, vermarktet als „Gehirn-Form": Dass sie Magnesium besser ins Gehirn bringt, ist bislang nur an Ratten gemessen – am Menschen gibt es drei herstellerfinanzierte Studien zu Gedächtnis und Schlaf.',
    description: 'Magnesium-L-Threonat ist ein Salz aus Magnesium und L-Threonsäure, einem Abbauprodukt von Vitamin C. Laut EU-Spezifikation besteht es nur zu 7,2 % bis 8,3 % aus Magnesium; der Rest ist Threonat. Der Ruf als „Gehirn-Magnesium" beruht auf einer Rattenstudie von 2010, in der die Magnesiumkonzentration im Nervenwasser nach 24 Tagen rund 7 % über dem Ausgangswert und rund 16 % über der Kontrollgruppe lag. Am Menschen wurde Hirn- oder Nervenwassermagnesium in keiner Studie gemessen; es liegen drei randomisierte Studien mit 51, 80 und 100 Teilnehmern über 3 bis 12 Wochen vor, alle von Herstellern oder Rohstofflieferanten finanziert. Seit dem 7. November 2024 ist der Stoff in der EU als neuartiges Lebensmittel zugelassen.',
    benefits: [
      'Soll gezielt den Magnesiumspiegel im Gehirn erhöhen – am Menschen nicht gemessen, die Werte aus dem Nervenwasser stammen aus dem Rattenmodell',
      'Untersucht für Gedächtnis und kognitive Leistung: In zwei RCTs verbesserte sich der kognitive Kompositscore gegenüber Placebo (51 Ältere über 12 Wochen; 100 Erwachsene über 6 Wochen)',
      'Für Schlaf ist die Datenlage uneinheitlich: subjektive Verbesserungen ja, objektive Messwerte nur in einer der beiden Schlafstudien',
      'Sicherheitsbewertet und in der EU zugelassen – mit Spezifikation, Reinheitskriterien und einem Höchstgehalt von 250 mg je Tag'
    ],
    risks: [
      'Das Alleinstellungsmerkmal ist am Menschen unbelegt: Kein Direktvergleich gegen Citrat, Glycinat oder eine andere Magnesiumform existiert',
      'Alle drei randomisierten Studien sind herstellerfinanziert; zwei wurden erst nach der Datenerhebung registriert, eine musste ihre Interessenerklärung per Corrigendum nachreichen',
      'Enthält wenig elementares Magnesium pro Gramm (7,2 % bis 8,3 % laut EU-Spezifikation) und ist teurer als Standard-Magnesium',
      'Laut EU-Zulassung nur für Erwachsene, ausgenommen Schwangere und Stillende – ein entsprechender Etikettenhinweis ist Pflicht',
      'Bei Nierenschwäche Magnesium generell ärztlich abklären; Wechselwirkungen mit Bisphosphonaten, Tetrazyklinen und Chinolonen',
      'Bis zum 7. November 2029 darf die Verbindung in der EU nur vom Zulassungsinhaber AIDP Inc. in Verkehr gebracht werden'
    ],
    dosage: 'In den Studien wurden 1 g bis 2 g Magnesium-L-Threonat täglich eingesetzt; 2 g entsprachen dort 145 mg elementarem Magnesium. Die EU-Zulassung nennt für Nahrungsergänzungsmittel einen Höchstgehalt von 250 mg je Tag.',
    intake: 'In den Studien abends beziehungsweise auf morgens und abends verteilt eingenommen.',
    synergies: ['magnesium', 'glycin', 'vitamin-d3'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Magnesiumverbindung mit L-Threonsäure (Kapsel/Pulver)'
  },
  {
    id: 'rote-bete-nitrat',
    name: 'Rote-Bete / Nitrat',
    altNames: 'Beetroot, Nitrat, NO-Booster',
    category: 'Kräuter',
    tags: ['sport', 'ausdauer', 'herz', 'kreislauf', 'blutdruck'],
    short: 'Nitrat aus Roter Bete wird über Mundbakterien zu Nitrit und Stickstoffmonoxid. Kleiner, gut belegter Leistungsgewinn bei Freizeitsportlern und eine leichte Senkung des systolischen Blutdrucks.',
    description: 'Rote Bete ist reich an Nitrat, das Bakterien im Mund zu Nitrit umbauen; daraus entsteht im Körper Stickstoffmonoxid, das Gefäße weitet und die Muskelarbeit effizienter macht. Eine Meta-Analyse über 80 Studien zeigt einen kleinen, klaren Leistungsgewinn bei Freizeitsportlern, der IOC zählt Nitrat zu den wenigen gut belegten Supplements. Bei gut trainierten Ausdauerathleten ist kein Effekt nachweisbar. Bei Bluthochdruck sinkt der systolische Praxiswert um 5,31 mmHg, bei niedriger Evidenzsicherheit.',
    benefits: [
      'Verbessert die Ausdauerleistung bei Freizeitsportlern (Meta-Analyse, 80 Studien); Zeit bis zur Erschöpfung laut IOC +4 bis 25 %',
      'Zeitfahren unter 40 Minuten laut IOC +1 bis 3 %, intermittierender Mannschaftssport +3 bis 5 %',
      'Senkt den systolischen Praxisblutdruck bei Hypertonie um 5,31 mmHg (11 RCTs, niedrige Evidenzsicherheit)',
      'Verbesserte in einer 4-Wochen-Studie die Gefäßfunktion um etwa 20 %',
      'Nitrat-Nitrit-NO-Weg am Menschen direkt nachgewiesen'
    ],
    risks: [
      'Rötlicher Urin (Beeturie) bei 10 bis 14 % der Bevölkerung – harmlos',
      'Rote Bete ist sehr oxalatreich – bei Nierensteinen mit erhöhtem Urin-Oxalat ärztlich abklären',
      'Antiseptische Mundspülung blockiert die Umwandlung zu Nitrit',
      'Mögliche Magen-Darm-Beschwerden – vor Wettkämpfen im Training testen',
      'Wirkt zusätzlich zu Blutdruckmedikamenten – bei Therapie ärztlich besprechen',
      'Bei gut trainierten Ausdauerathleten kaum Effekt'
    ],
    dosage: 'Der IOC-Konsens nennt für akute Leistungseffekte 5 bis 9 mmol Nitrat (310 bis 560 mg). In einer Dosisstudie wirkte ein 70-mL-Shot mit 4,2 mmol nicht, 140 mL mit 8,4 mmol schon; 16,8 mmol brachten keinen Zusatznutzen. Blutdruckstudien verwendeten 200 bis 800 mg Nitrat täglich. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Akute Effekte in Studien meist 2 bis 3 Stunden nach der Einnahme; Nitritspitze im Blut nach 2 bis 3 Stunden. Einnahme über mehr als 3 Tage laut IOC ebenfalls vorteilhaft. Keine antiseptische Mundspülung.',
    synergies: ['citrullin', 'l-arginin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Rote-Bete-Saft/-Pulver; nitratreiches Gemüse (Rucola, Spinat)'
  },
  {
    id: 'kupfer',
    name: 'Kupfer',
    altNames: 'Copper, Cuprum',
    category: 'Mineral',
    tags: ['immun', 'bindegewebe', 'energie', 'antioxidans'],
    short: 'Ein essenzielles Spurenelement und wichtiger Zink-Partner: nötig für Bindegewebe, Eisenstoffwechsel, Nerven und antioxidative Enzyme.',
    description: 'Kupfer ist ein essenzielles Spurenelement und Cofaktor vieler Enzyme (u. a. für Kollagen-/Elastin-Vernetzung, Eisenverwertung, Energiegewinnung und die antioxidative SOD). Wichtig ist die Balance zu Zink: hohe Zink-Dosen über längere Zeit können einen Kupfermangel begünstigen – daher wird Kupfer oft ergänzend dazu genommen.',
    benefits: [
      'Essenziell für Bindegewebe (Kollagen/Elastin) und Gefäße',
      'Wichtig für Eisenverwertung und Blutbildung',
      'Cofaktor der antioxidativen Superoxiddismutase (SOD)',
      'Gleicht ein Zink-Kupfer-Ungleichgewicht bei hoher Zinkzufuhr aus'
    ],
    risks: [
      'Nur niedrig dosieren – zu viel Kupfer ist prooxidativ/toxisch',
      'Balance zu Zink beachten (typisch ~10–15:1 Zink:Kupfer)',
      'Nicht bei Morbus Wilson (Kupferspeicherkrankheit)',
      'Meist nur bei hoher/längerer Zink-Supplementierung nötig'
    ],
    dosage: 'Typisch 1–2 mg täglich (v. a. als Ausgleich zu höheren Zink-Dosen).',
    intake: 'Mit einer Mahlzeit; zeitlich etwas versetzt zu hohen Zink-Dosen.',
    synergies: ['zink'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Leber, Austern, Nüsse, Kakao; als Bisglycinat-Kapsel'
  },
  {
    id: 'mikronaehrstoff-konzentrate',
    name: 'Mikronährstoff-Konzentrate (LaVita & Co.)',
    altNames: 'Vitalstoffkonzentrat, Multivitamin-Konzentrat, LaVita, Cellagon aurum, Regulatpro, Rotbäckchen Vital, Kyäni Sunrise, Juice Plus',
    category: 'Vitamin',
    tags: ['immun', 'energie', 'longevity', 'stoffwechsel'],
    short: 'Flüssige Konzentrate aus Obst-, Gemüse- und Kräuterauszügen mit isoliert zugesetzten Vitaminen, verkauft für 21 bis über 125 Euro im Monat. Ein Nutzen für gesunde Erwachsene ist in großen randomisierten Studien nicht nachweisbar.',
    description: 'Der Markt für flüssige „Mikronährstoffkonzentrate" wird von LaVita angeführt, dazu kommen Cellagon aurum, Regulatpro von Dr. Niedermaier, Rotbäckchen Vital, Kyäni Sunrise und als Kapsel-Nachbar Juice Plus. Alle verkaufen dieselbe Grundidee: Die Ernährung habe Lücken, das Konzentrat schließe sie. Die Basis ist Fruchtsaftkonzentrat, ergänzt um Gemüse- und Kräuterauszüge — die eigentliche Vitaminmenge stammt aus isoliert zugesetzten Reinstoffen. Damit ist die entscheidende Frage nicht, wie viele Zutaten auf dem Etikett stehen, sondern ob ein Multivitamin einem gesunden Erwachsenen etwas bringt. Genau das ist außergewöhnlich gut untersucht — und die Antwort fällt ernüchternd aus.',
    benefits: [
      'Für Menschen mit nachgewiesenem Mangel oder erhöhtem Bedarf ist eine gezielte Supplementierung sinnvoll — dafür braucht es aber kein Breitband-Konzentrat',
      'Die einzeln beworbenen Wirkungen („trägt bei zu einem normalen Immunsystem", „verringert Müdigkeit") sind rechtlich zugelassene Aussagen; sie gelten allerdings für jedes Multivitamin',
      'COSMOS (drei Unterstudien, Meta-Analyse 2024): kleiner, aber statistisch robuster Vorteil bei der Denkleistung — 0,07 Standardabweichungen, sekundärer Endpunkt',
      'Die Darreichung als Saft erleichtert die Einnahme bei Schluckproblemen; ein Nutzennachweis folgt daraus nicht'
    ],
    risks: [
      'Vitamin K in mehreren dieser Produkte: Das BfR sieht ab 150 µg K1 bzw. 45 µg K2 täglich eine messbare Wirkung auf die Gerinnung — wer Marcumar oder Warfarin nimmt, sollte vorher ärztlich Rücksprache halten',
      'Einzelne Nährstoffe in Hochdosis sind belegt schädlich: Beta-Carotin erhöhte bei Rauchern die Lungenkrebsrate um 18 % (ATBC), Vitamin E das Prostatakrebsrisiko um 17 % (SELECT)',
      'Bei zwei Portionen täglich überschreiten in manchen Produkten über ein Dutzend Nährstoffe die Referenzmenge; Rotbäckchen Vital enthält 100 µg Vitamin B12 = das Vierfache der BfR-Höchstmenge',
      'Kosten von 21 bis über 125 Euro im Monat — Geld, das für Obst, Gemüse und eine gezielte Messung fehlt'
    ],
    dosage: 'Herstellerempfehlung meist 10–20 ml täglich. Eine sinnvolle Dosis lässt sich nicht angeben, solange kein Nutzen gezeigt ist.',
    intake: 'Wer supplementiert, tut es sinnvollerweise gezielt nach Messung: Folsäure bei Kinderwunsch, B12 bei veganer Ernährung, Vitamin D bei fehlender Sonne, Jod in Schwangerschaft und Stillzeit, Eisen bei nachgewiesenem Mangel.',
    synergies: [],
    avoid: ['vitamin-k2'],
    evidence: 'hoch',
    sources: 'Obst und Gemüse selbst — die Studienlage spricht durchgehend dafür, dass die Wirkung am Lebensmittel hängt und sich nicht in ein Konzentrat übertragen lässt'
  },
  {
    id: 'akkermansia',
    name: 'Akkermansia muciniphila',
    altNames: 'Akkermansia, pasteurisierte Akkermansia muciniphila, Longevity-Bakterium',
    category: 'Probiotika',
    tags: ['darm', 'mikrobiom', 'stoffwechsel', 'insulin', 'longevity', 'novel-food'],
    short: 'Darmbakterium, das von der Schleimschicht der Darmwand lebt. Schlanke, stoffwechselgesunde Menschen haben davon meist viel, Übergewichtige wenig. In der ersten Studie am Menschen wirkte die pasteurisierte, also abgetötete Form am deutlichsten; inzwischen gibt es vier kleine randomisierte Studien mit gemischten Ergebnissen.',
    description: 'Akkermansia muciniphila wurde 2004 an der Universität Wageningen aus einer Stuhlprobe isoliert. Es baut Mucin ab, den Schleim der Darmwand, und treibt damit dessen Neubildung an — im Tiermodell wird die Barriere dadurch dichter, die stille Entzündung geringer und die Insulinresistenz kleiner. Am Menschen ist die Umkehrbeziehung gut belegt: Wenig Akkermansia geht mit Übergewicht, Typ-2-Diabetes und Bluthochdruck einher. Geprüft wurde das Bakterium selbst in genau einer kontrollierten Studie: Depommier 2019 in Nature Medicine, 40 eingeschlossene Übergewichtige mit Insulinresistenz, 32 Teilnehmer über 3 Monate ausgewertet, 3 Arme. Dort verbesserte die pasteurisierte, also abgetötete Form die Insulinempfindlichkeit um fast 29 Prozent, senkte den Insulinspiegel um rund ein Drittel und das Gesamtcholesterin um knapp 9 Prozent; die lebende Form zeigte das nicht sauber. Im Tiermodell von 2013 war es genau umgekehrt. Der Gewichtsverlust von gut 2 Kilogramm verfehlte die Signifikanz gegen Placebo. In der EU ist nur die pasteurisierte Form als neuartiges Lebensmittel zugelassen.',
    benefits: [
      'Verbesserte die Insulinempfindlichkeit in der pasteurisierten Form um fast 29 Prozent (32 Teilnehmer, 3 Monate)',
      'Senkte Insulinspiegel um rund ein Drittel und Gesamtcholesterin um knapp 9 Prozent',
      'Verbesserte in derselben Studie einzelne Leber- und Entzündungsmarker',
      'Im Tiermodell dichtere Darmbarriere, weniger Fettmasse, geringere Insulinresistenz',
      'Umkehrbeziehung am Menschen gut belegt: viel Akkermansia geht mit besserem Stoffwechselprofil einher'
    ],
    risks: [
      'Keine Langzeitdaten: geprüft sind 3 Monate an wenigen Dutzend Menschen, nicht Jahre an Tausenden',
      'Der beworbene Gewichtsverlust von gut 2 Kilogramm war gegen Placebo statistisch nicht abgesichert',
      'Kein echter Widerspruch zwischen Tier und Mensch: Die unwirksame Tierform von 2013 war autoklaviert, pasteurisiert wirkte sie auch in der Maus. Unklar bleibt, für wen die Kapsel etwas bringt – in mehreren Studien profitierten vor allem Menschen mit wenig eigenem Akkermansia',
      'Lebende Akkermansia hat in der EU keinen Zulassungsstatus als Lebensmittel; die zentralen Forscher sind am Hersteller beteiligt'
    ],
    dosage: 'Berichtete Anwendung, keine Empfehlung: In der Humanstudie nahmen die Teilnehmer täglich 10 Milliarden pasteurisierte Bakterien über 3 Monate. Die EU-Zulassung deckelt die pasteurisierte Form bei höchstens 5 mal 10 hoch 10 Zellen pro Tag.',
    intake: 'Als Kapsel oder Pulver zum Einnehmen. In der Studie täglich über 3 Monate. Nicht vorgesehen für Schwangere und Stillende.',
    synergies: ['probiotika', 'metformin', 'urolithin-a'],
    avoid: 'Lebende Akkermansia-Präparate sind in der EU als Lebensmittel nicht zugelassen. Für Schwangere und Stillende ist die Zulassung der pasteurisierten Form nicht vorgesehen. Bei Immunsuppression oder schwerer Darmerkrankung ärztlich abklären.',
    evidence: 'niedrig',
    sources: [
      { title: 'Derrien et al., International Journal of Systematic and Evolutionary Microbiology 2004 — Erstbeschreibung von Akkermansia muciniphila, Universität Wageningen', url: 'https://pubmed.ncbi.nlm.nih.gov/15388697/' },
      { title: 'Everard et al. (Labor Cani), PNAS 2013 — Akkermansia bei übergewichtigen Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/23671105/' },
      { title: 'Depommier et al., Nature Medicine 2019 — randomisierte, doppelblinde Machbarkeitsstudie am Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/31263284/' },
      { title: 'Perraudeau et al., BMJ Open Diabetes Research & Care 2020 — Fünf-Stämme-Probiotikum bei Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/32675291/' },
      { title: 'de la Cuesta-Zuluaga et al., Diabetes Care 2017 — kolumbianische Querschnittsuntersuchung zu Metformin und Akkermansia-Bestand', url: 'https://pubmed.ncbi.nlm.nih.gov/27999002/' },
      { title: 'EFSA, 2021 — Bewertung der pasteurisierten Akkermansia muciniphila als neuartiges Lebensmittel', url: 'https://doi.org/10.2903/j.efsa.2021.6780' },
      { title: 'Durchführungsverordnung (EU) 2022/168 vom 8. Februar 2022 — Zulassung der pasteurisierten Form als neuartiges Lebensmittel', url: 'https://eur-lex.europa.eu/eli/reg_impl/2022/168/oj' }
    ]
  },
  {
    id: 'liposomales-kreatin',
    name: 'Liposomales Kreatin',
    altNames: 'Liposomal Creatine, Kreatin in Liposomen, Kreatin mit Sonnenblumenlecithin',
    category: 'Aminosäure',
    tags: ['kreatin', 'muskel', 'kraft', 'darreichungsform', 'aufnahme', 'marketing'],
    short: 'Kreatin-Monohydrat in einer Fetthülle oder mit Lecithin vermischt. Der Wirkstoff ist derselbe wie bei gewöhnlichem Monohydrat, das bereits zu 99 Prozent aufgenommen wird. Studien zur liposomalen Form am Menschen gibt es keine.',
    description: 'Liposomales Kreatin ist keine neue Substanz, sondern eine Darreichungsform: Kreatin-Monohydrat, verpackt in Phospholipid-Bläschen oder mit Sonnenblumenlecithin vermischt. Die Technik ist bei anderen Wirkstoffen ernstzunehmende Pharmazie, setzt aber voraus, dass bei der Aufnahme überhaupt etwas verloren geht. Bei Kreatin ist das nicht der Fall: Nach der Übersichtsarbeit von Kreider und Kollegen 2022 zerfällt weniger als 1 Prozent im Magen zu Kreatinin, 99 Prozent landen im Blut. Die Obergrenze für eine bessere Verpackung liegt damit bei 1 Prozentpunkt. Zu liposomalem Kreatin als Nahrungsergänzung am Menschen gibt es in PubMed keine einzige Veröffentlichung. Die Packungsangaben von 15 und 21 Prozent bei Cymbiotika stammen aus einer herstellerfinanzierten Studie von 2022 zum Rohstoff CreaBev: 37 trainierte Männer, eine Einzeldosis von 5 Gramm, 6 Stunden Blutabnahme, gemessen als Pulver in Wasser ohne Liposom. Deren Autoren schreiben selbst, dass unklar ist, ob solche Blutwerte physiologisch etwas bedeuten. Frühere Sonderformen sind gescheitert: Ethylester ist weniger verfügbar, gepuffertes Kreatin zeigte gegen Monohydrat bei 36 Kraftsportlern über 28 Tage keinen Vorteil, Nitrat war in niedriger Dosis nicht vom Placebo zu unterscheiden.',
    benefits: [
      'Enthält als Rohstoff echtes Kreatin-Monohydrat und bringt dessen belegte Effekte auf Kraft und Muskel',
      'Flüssige Beutel und Portionspulver sind bequem und unterwegs einfach zu dosieren',
      'Die zugesetzten Phospholipide und das Sonnenblumenlecithin sind übliche, gut verträgliche Lebensmittelzutaten'
    ],
    risks: [
      'Kein Wirksamkeitsvorteil gegenüber Monohydrat belegt: zu liposomalem Kreatin am Menschen existiert keine einzige Veröffentlichung',
      'Die Packungsangaben von 15 und 21 Prozent stammen aus einer herstellerfinanzierten Studie zum Rohstoff, gemessen als Pulver in Wasser ohne Liposom',
      'Preis beim 2- bis gut 10-Fachen von Monohydrat: rund 50 Cent pro Gramm bei Cymbiotika gegenüber 4 bis 5 Cent im deutschen Handel',
      'Trockenes Pulver mit Lecithin ist kein Liposom; ob sich im Glas überhaupt Bläschen bilden, die Kreatin einschließen, ist nie gemessen worden'
    ],
    dosage: 'Für liposomales Kreatin gibt es kein Studienprotokoll, weil es keine Studie gibt. Berichtete Anwendung aus den Monohydrat-Studien, keine Empfehlung: entweder ein Ladeprotokoll mit 4 mal 5 Gramm über 5 bis 7 Tage und danach 3 bis 5 Gramm täglich, oder von Anfang an 3 bis 5 Gramm ohne Ladephase. Beides führt zur gleichen Muskelsättigung.',
    intake: 'Flüssige Beutel oder Pulver in Wasser, täglich. Der Zeitpunkt spielt keine Rolle, die Regelmäßigkeit schon. Wer 5 Gramm auf einmal schlecht verträgt, kommt mit 3 Gramm täglich ohne Ladephase aus; der Muskel ist dann nach 3 bis 4 Wochen genauso voll.',
    synergies: ['kreatin', 'beta-alanin', 'whey'],
    avoid: 'Wer Nierenprobleme hat, spricht vor der Einnahme von Kreatin mit dem Arzt. Für den Aufnahmevorteil, mit dem diese Produkte beworben werden, gibt es keinen Beleg; wer allein deshalb den Aufpreis zahlt, kauft eine unbelegte Eigenschaft.',
    evidence: 'niedrig',
    sources: [
      { title: 'Kreider, Jäger und Purpura, Nutrients 2022 — Übersichtsarbeit zu Kreatinformen, Aufnahme und Sicherheit', url: 'https://pubmed.ncbi.nlm.nih.gov/35268011/' },
      { title: 'CreaBev-Bioverfügbarkeitsstudie — Antonio et al., Cureus 2022, 37 trainierte Männer, Einzeldosis 5 Gramm, 6 Stunden Blutabnahme, herstellerfinanziert', url: 'https://pubmed.ncbi.nlm.nih.gov/35619864/' },
      { title: 'Vergleichsstudie gepuffertes Kreatin gegen Monohydrat — Jagim et al., 2012, 36 Kraftsportler, 28 Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/22971354/' },
      { title: 'Durchsicht aus Split — Bučević Popović et al., Nutrients 2026, 343 randomisierte Kreatinstudien von 1994 bis 2023', url: 'https://pubmed.ncbi.nlm.nih.gov/42654277/' },
      { title: 'Produktangaben Cymbiotika, Liposomal Advanced Creatine', url: 'https://cymbiotika.com/products/creatine' },
      { title: 'Produktangaben Codeage, Liposomal Creatine', url: 'https://www.codeage.com/products/liposomal-creatine-monohydrate-powder' },
      { title: 'Produktangaben KRĒO, Creatine Plus', url: 'https://www.odezalifescience.com/products/kreo-creatine-plus' }
    ]
  }
];

// Kategorien für Filter
const CATEGORIES = [
  { id: 'all', label: 'Alle' },
  { id: 'Vitamin', label: 'Vitamine' },
  { id: 'Mineral', label: 'Minerale' },
  { id: 'Fettsäure', label: 'Fettsäuren' },
  { id: 'Aminosäure', label: 'Aminosäuren' },
  { id: 'Adaptogen', label: 'Adaptogene' },
  { id: 'Pilz', label: 'Vitalpilze' },
  { id: 'Antioxidant', label: 'Antioxidantien' },
  { id: 'Longevity', label: 'Longevity' },
  { id: 'Kräuter', label: 'Kräuter' },
  { id: 'Protein', label: 'Proteine' },
  { id: 'Hormon', label: 'Hormone' },
  { id: 'Enzym', label: 'Enzyme' },
  { id: 'Probiotika', label: 'Probiotika' },
  { id: 'Stimulans', label: 'Stimulanzien' }
];
