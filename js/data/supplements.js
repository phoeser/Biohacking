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
    link: 'https://pubmed.ncbi.nlm.nih.gov/39114916/'
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
    description: 'Vitamin K2 ist der Sammelname für die Menachinone; im Handel dominiert MK-7, in Japan wird MK-4 als Arzneimittel gegen Osteoporose eingesetzt. Als Cofaktor der Gamma-Carboxylierung aktiviert Vitamin K2 das Osteocalcin im Knochen und das Matrix-Gla-Protein in der Gefäßwand — diese Wirkkette ist am Menschen belegt, MK-7 senkt den Marker dp-ucMGP in einer Dreijahresstudie um 50 Prozent. Der Schritt zum harten Ergebnis gelingt bisher kaum: Mehrere randomisierte Studien zur Gefäßverkalkung blieben ohne Unterschied, eine 2026 veröffentlichte fand einen. Die EU erlaubt Angaben zu Knochen und Blutgerinnung, nicht zu Herz und Gefäßen.',
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
    synergies: ['vitamin-b-komplex', 'methylfolat'],
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
    short: 'Alle acht B-Vitamine in einem Präparat – unverzichtbar für Energiestoffwechsel, Nerven und Blutbildung. Klarer Nutzen bei Mangel; bei guter Versorgung senken sie Homocystein und leicht das Schlaganfallrisiko, nicht aber Herzinfarkte oder kognitives Altern.',
    description: 'B-Vitamine wirken als Coenzyme im Energie-, Eiweiß- und Homocystein-Stoffwechsel. Einzelgaben können einander verdecken: Viel Folsäure korrigiert die Blutarmut eines B12-Mangels, nicht aber die Nervenschäden. In großen Studien senken B6, B12 und Folsäure Homocystein um 26 bis 28 Prozent und Schlaganfälle leicht (4,3 gegenüber 5,1 Prozent), Herzinfarkte, Sterblichkeit und kognitives Altern ändern sich nicht. Bei älteren Menschen mit Gedächtnisproblemen bremsten sie in einer Studie den Hirnschwund, bei Stress zeigt eine Meta-Analyse einen kleinen Effekt. Zur B6-Obergrenze: Die EFSA hat sie 2023 von 25 auf 12 mg am Tag gesenkt, das BfR schlägt 0,9 mg pro Tagesdosis vor. Über das Essen erreicht die Grenze niemand, betroffen sind hochdosierte Präparate – und die sind selten. In einer Auswertung von 2.210 Produkten lag die Hälfte bei 1,01 bis 2,0 mg, nur 1,4 Prozent über 20 mg.',
    benefits: [
      'Energiestoffwechsel, Nervensystem, Blutbildung – als EU-Health-Claims zugelassen, u. a. Beitrag zur Verringerung von Müdigkeit (Riboflavin, Niacin, Pantothensäure, B6, Folat, B12)',
      'Senkt Homocystein um 26 bis 28 Prozent (11 Studien, 22.000 Teilnehmer, Clarke 2014) und Schlaganfälle leicht (RR 0,90; Cochrane 2017, 10 RCTs); kein Effekt auf Herzinfarkt und Sterblichkeit',
      'Bremste den Hirnschwund bei leichter kognitiver Beeinträchtigung (0,76 gegenüber 1,08 Prozent pro Jahr; VITACOG, RCT, 24 Monate) – kognitives Altern in großen Studien aber unverändert',
      'Kleiner Effekt auf Stress (SMD 0,23; Meta-Analyse, 2.015 Teilnehmer, Young 2019), nicht auf Depression oder Angst',
      'Klar sinnvoll bei Mangelrisiko: vegane Ernährung, höheres Alter, Metformin, Säureblocker; 400 µg Folsäure für alle, die schwanger werden könnten'
    ],
    risks: [
      'Hochdosis B6 über Monate: Kribbeln und Taubheit in Händen und Füßen möglich. Die EFSA hat die als unbedenklich geltende Obergrenze 2023 von 25 auf 12 mg am Tag halbiert; Grundlage ist weiterhin eine Studie von 1987, die vorsichtiger gerechnet wurde',
      'Folsäure über 1.000 µg pro Tag kann einen B12-Mangel verdecken, während Nervenschäden fortschreiten',
      'Niacin als Nicotinsäure: Flush typischerweise schon ab 30 bis 50 mg; Nicotinamid verursacht keinen Flush',
      'Biotin verfälscht Labortests (Schilddrüse, Troponin) – vor Blutabnahmen angeben'
    ],
    dosage: 'Studien verwendeten sehr unterschiedliche Mengen: In VITACOG waren es täglich 0,8 mg Folsäure, 0,5 mg B12 und 20 mg B6 über 24 Monate – die B6-Menge liegt über der heutigen EFSA-Obergrenze von 12 mg pro Tag. Für Nahrungsergänzungen schlägt das BfR höchstens 0,9 mg B6 pro Tagesdosis vor; für Folsäure gilt eine Obergrenze von 1.000 µg pro Tag, für B12 gibt es keine. Mehrere Präparate addieren sich.',
    intake: 'Mit einer Mahlzeit. Biotin vor Blutabnahmen angeben; bei Metformin, Säureblockern oder veganer Ernährung B12 gezielt im Blick behalten.',
    synergies: ['magnesium'],
    avoid: [],
    evidence: 'mittel',
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
    short: 'Essentiell für Immunsystem, Wundheilung und über 300 Enzyme.',
    description: 'Essentieller Mineralstoff in über 300 Enzymen. Welche Zinkverbindung besser wirkt, ist in den Erkältungsstudien nicht geklärt. Zink konkurriert mit Kupfer um die Aufnahme.',
    benefits: [
      'Kann die Erkältungsdauer verkürzen, die Größe des Effekts ist unsicher',
      'Fördert Wundheilung',
      'Beteiligt an DNA-Synthese'
    ],
    risks: [
      'Über 40 mg/Tag dauerhaft: Kupfermangel',
      'Auf nüchternen Magen: Übelkeit möglich',
      'Dauerhaft hohe Zufuhr kann einen Kupfermangel auslösen, das gehört ärztlich abgeklärt.'
    ],
    dosage: 'Keine Empfehlung. Das BfR schlägt für Nahrungsergänzungsmittel höchstens 6,5 mg pro Tagesdosis vor; die tolerierbare Obergrenze aus allen Quellen liegt bei 25 mg pro Tag. In den Erkältungsstudien wurden Lutschtabletten mit 45 bis 276 mg pro Tag über 4,5 bis 21 Tage eingesetzt, das sind Studienangaben.',
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
      'Senkt erhöhte Triglyceride (als Arzneimittel zugelassen); ein Herzschutz durch frei verkäufliche Präparate ist nicht konsistent gezeigt (VITAL, ASCEND, STRENGTH)',
      'Verbessert Hautbild (Ekzem, Akne)',
      'Unterstützt Augengesundheit',
      'Wichtig in Schwangerschaft für Gehirnentwicklung'
    ],
    risks: [
      'Niedrig-qualitative Öle oxidieren (ranzig)',
      'Bei hohen Dosen, unter Gerinnungshemmern und vor Operationen ärztlich Rücksprache halten',
      'Vorhofflimmern: erhöhtes Risiko bei kardiovaskulärem Hochrisiko und mehr als 1.500 mg täglich (Meta-Analyse 2026, 35 RCTs, PMID 42517224)'
    ],
    dosage: 'Ernährungsempfehlungen liegen deutlich unter 1–3 g: Die EFSA nennt für Erwachsene 250 mg EPA+DHA täglich als angemessene Zufuhr. Grammdosen wurden in klinischen Fragestellungen geprüft, etwa bei erhöhten Triglyceriden und in Herz-Kreislauf-Studien (VITAL und ASCEND 1 g, STRENGTH 4 g). Das sind Studienangaben, keine Verzehrempfehlung.',
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
      'Die beste Datenbasis liegt in einem ganz anderen Feld: als Zusatz zu Antipsychotika – Glycin ist eine von mehreren NMDA-Substanzen in einer Meta-Analyse über 40 Studien mit 4.937 Patienten'
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
    short: 'Vorstufe von Dopamin und Noradrenalin. Stützt Arbeitsgedächtnis und Wachsamkeit unter akuter Belastung wie Kälte, Schlafentzug oder Multitasking; für Ausdauersport und Stimmung ohne Nachweis.',
    description: 'Tyrosin ist eine nicht essenzielle Aminosäure aus Milchprodukten, Soja und Fleisch und der Rohstoff für Dopamin und Noradrenalin. In kleinen doppelblinden Studien schützte es das Arbeitsgedächtnis in kaltem Wasser (19 Personen), dämpfte den Leistungsabfall nach einer durchwachten Nacht für etwa 3 Stunden und verbesserte Gedächtnisleistung bei Kadetten im Kampftraining. Eine Bewertung für das US-Militär über 10 RCTs und 4 kontrollierte Studien gibt dafür eine schwache Empfehlung. Tyrosin füllt erschöpfte Reserven auf und wirkt deshalb unter Belastung, kaum im entspannten Alltag; wer schon gut ist, kann sogar schlechter werden. Für Ausdauerleistung zeigt eine Meta-Analyse über 8 Studien keinen Effekt, bei Depression wirkte es in einer RCT mit 65 Patienten nicht.',
    benefits: [
      'Schützt das Arbeitsgedächtnis unter Kälte (doppelblind, 19 Personen, Mahoney 2007)',
      'Weniger Leistungsabfall und Aussetzer nach einer durchwachten Nacht, etwa 3 Stunden lang (Neri 1995)',
      'Bessere Genauigkeit im Arbeitsgedächtnis beim Multitasking, nicht bei einfachen Aufgaben (Thomas 1999)',
      'Bessere Gedächtnis- und Trackingleistung im militärischen Kampftraining (21 Kadetten, Deijen 1999)',
      'Schwache Empfehlung bei kognitivem Stress: 10 RCTs und 4 kontrollierte Studien, alle positiv, aber klein (Attipoe 2015)'
    ],
    risks: [
      'Nicht mit MAO-Hemmern: Die US-Fachinformation von Phenelzin nennt L-Tyrosin wegen der Gefahr hypertensiver Krisen',
      'Schilddrüsenerkrankungen: in der Sicherheitsstudie ausgeschlossen, Schilddrüsenwerte nicht untersucht – ärztlich abklären',
      'Umgekehrte U-Kurve: Wer schon gut ist, kann schlechter werden (Jongkees 2020); bei Älteren eher Nachteile bei der Reaktionskontrolle (Bloemendaal 2018)',
      'Ausdauersport: kein Effekt (Meta-Analyse, 8 Studien, Solon-Júnior 2023); Depression: kein Effekt (Gelenberg 1990)',
      'Sicherheitsdaten nur bis 4 Wochen und 4 g pro Tag bei gesunden Männern (herstellerfinanziert, Matsumoto 2026)'
    ],
    dosage: 'Die Kognitionsstudien verwendeten meist 150 mg pro Kilogramm Körpergewicht als Einzelgabe vor der Belastung (Mahoney 2007, Neri 1995, Thomas 1999), eine Studie 2,0 g (Jongkees 2020). In einer vierwöchigen Sicherheitsstudie waren bis 4 g pro Tag ohne Auffälligkeiten. Eine amtliche Höchstmenge gibt es nicht. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien kurz vor einer fordernden Situation genommen, in einer Studie eine Stunde vorher. Als Dauerpräparat ohne Anlass nicht untersucht. Bei MAO-Hemmern nicht, bei Schilddrüsenerkrankung nur nach ärztlicher Rücksprache.',
    synergies: ['vitamin-b-komplex'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Milchprodukte, Sojaprodukte, Fleisch; übliche Zufuhr im Mittel etwa 2,79 g pro Tag bei 70 kg Körpergewicht'
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
    dosage: 'In den Studien verwendet: 1 bis 6 g pro Tag in der Blutdruck-Meta-Analyse, 1,6 g pro Tag über 12 Wochen in der Prähypertonie-Studie; die kardiometabolischen Effekte waren bei 1,5 bis 3,0 g pro Tag am deutlichsten. Die norwegische Behörde VKM nennt für einen 70 kg schweren Erwachsenen rund 1.470 mg pro Tag als Schwellenwert. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'Die Studien legen keinen bestimmten Einnahmezeitpunkt fest.',
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
    description: 'Rosenwurz ist in Deutschland seit 2014 und 2016 als traditionelles pflanzliches Arzneimittel gegen Stresssymptome registriert – auf Basis der Anwendungstradition, nicht der Studien. Die EMA hat den Status „well-established use“ im März 2024 ausdrücklich abgelehnt. Am besten belegt ist die Ausdauer: eine Meta-Analyse über 26 RCTs mit 668 Teilnehmern findet kleine, gleichgerichtete Effekte bei hoher Heterogenität. Bei Erschöpfung hängt fast alles an einem einzigen Extrakt. 3 % Rosavine und 1 % Salidrosid sind Marktkonvention, nicht die Spezifikation der Hauptstudien.',
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
      'Leichte kognitive Einschränkung: eine kleine Studie mit 30 Teilnehmern über 16 Wochen positiv, 4 Wochen nach dem Absetzen fielen die Werte wieder ab',
      'Darmgesundheit: am Menschen nicht untersucht',
      'Einzelne kleine Studien zu Stimmung und Ängstlichkeit'
    ],
    risks: [
      'Bei Pilzallergie meiden',
      'In Studien bis 49 Wochen meist gut vertragen (Magen-Darm, Hautausschlag); Wechselwirkungen nicht untersucht, Langzeitdaten fehlen'
    ],
    dosage: 'In den Studien verwendet: rund 3 Gramm Fruchtkörperpulver täglich (Japan, 16 Wochen), 3 Kapseln Myzel mit 5 Milligramm Erinacin A pro Gramm (Taiwan, 49 Wochen), 1,8 Gramm (Großbritannien). Sogenannte Dual-Extrakte wurden in keiner dieser Studien geprüft. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Die Studien legen keinen Einnahmezeitpunkt fest. Ob ein Produkt Fruchtkörper oder Myzel enthält, ist ohne Analysenzertifikat nicht erkennbar.',
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
    short: 'Lindert bei Kniearthrose den Schmerz gegenüber Placebo, in einer Vergleichsstudie Ibuprofen nicht unterlegen. Die Bioverfügbarkeitstricks fallen zugleich in den Fallserien zur Leberschädigung auf.',
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
    short: 'Polyphenol aus Trauben. Der beworbene Longevity-Nutzen ließ sich am Menschen nicht bestätigen; die vorliegenden Studien fielen überwiegend negativ aus.',
    description: 'Resveratrol aktiviert SIRT1 in Zellversuchen; die Übertragung auf den Menschen ist umstritten und die Sirtuin-Hypothese wurde mehrfach angezweifelt. Studien an Menschen fanden für die beworbenen Longevity-Effekte keine Bestätigung. Trans-Resveratrol ist die übliche Form.',
    benefits: [
      'Aktiviert Sirtuine im Zellversuch – Übertragung umstritten',
      'Effekte auf Gefäßmarker in kleinen Studien, uneinheitlich',
      'Antioxidative Wirkung',
      'Einzelne Studien zum Blutzucker, ohne konsistentes Bild'
    ],
    risks: [
      'Bei Blutverdünnern Vorsicht',
      'Östrogenische Wirkung: Vorsicht bei hormonsensitiven Erkrankungen',
      'Kombination mit NMN/NR wird beworben, ist aber nicht untersucht'
    ],
    dosage: 'Keine Dosierungsangabe. Trans-Resveratrol ist in der EU als neuartiges Lebensmittel für Nahrungsergänzungsmittel mit höchstens 150 mg pro Tag für Erwachsene zugelassen. In den geprüften Studien kamen 75 mg täglich über zwölf Wochen und 250 mg täglich über acht Wochen zum Einsatz.',
    intake: 'Keine Einnahmeempfehlung. Bei Blutverdünnern und hormonsensitiven Erkrankungen ärztlich abklären.',
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
      'EU: als neuartiges Lebensmittel eingestuft, EFSA-Gutachten 2026 liegt vor, die Zulassung steht aus'
    ],
    dosage: 'Keine Dosierungsangabe: NMN ist in der EU als neuartiges Lebensmittel eingestuft und noch nicht zugelassen.',
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
    short: 'Körpereigenes Dunkelheitssignal. Wirkt am stärksten bei Jetlag und verschobener Schlafphase, bei gewöhnlicher Insomnie nur wenige Minuten.',
    description: 'Körpereigenes Signal für Dunkelheit, das die innere Uhr verschiebt. Bei Jetlag wirkten 0,5 bis 5 mg ähnlich, 5 mg ließen schneller einschlafen als 0,5 mg, darüber zeigte sich kein Zusatznutzen. Bei gewöhnlicher Insomnie ist der Effekt klein.',
    benefits: [
      'Verkürzt Einschlafzeit',
      'Hilft bei Jetlag',
      'Reguliert zirkadianen Rhythmus'
    ],
    risks: [
      'Morgendliche Benommenheit bei Überdosis',
      'Kann Träume verstärken',
      'Bei hormonellen Erkrankungen Arzt fragen',
      'Nicht ideal für Kinder/Teenager'
    ],
    dosage: 'Keine Empfehlung. In Studien eingesetzt: 0,5 bis 5 mg nahe der Ziel-Schlafenszeit bei Jetlag; oberhalb von 5 mg kein Zusatznutzen. Als Arzneimittel ist eine retardierte 2-mg-Form verschreibungspflichtig zugelassen.',
    intake: 'Abends bei gedämpftem Licht. Nicht bei heller Beleuchtung.',
    synergies: ['magnesium', 'glycin'],
    avoid: [],
    evidence: 'mittel',
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
      'Isoliertes Berberin gilt nach Einschätzung der Verbraucherzentrale als nicht zugelassenes neuartiges Lebensmittel; die EFSA konnte am 29. Januar 2026 für keine der 13 geprüften Zubereitungen eine sichere Aufnahmemenge ableiten',
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
    dosage: 'Keine Empfehlung. Berberin ist in Deutschland kein zugelassenes Arzneimittel, weshalb § 3a Heilmittelwerbegesetz greift, und isoliertes Berberin darf nach Einschätzung der Verbraucherzentrale als nicht zugelassenes neuartiges Lebensmittel in Nahrungsergänzungsmitteln derzeit nicht verwendet werden. Zur Einordnung: Die französische ANSES leitete 2019 einen indikativen Toxizitätswert von 1,7 Mikrogramm je Kilogramm Körpergewicht und Tag ab und gibt selbst an, dass daraus für eine Person von 60 kg eine Tagesmenge von 0,1 mg folgt. Belegte pharmakologische Wirkungen sieht die ANSES ab 400 mg pro Tag, unerwünschte Wirkungen wurden ab 600 mg pro Tag beobachtet. Auf dem französischen Markt reichten die empfohlenen Tagesdosen zugleich von 250 bis 1.200 mg.',
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
    intake: 'Die Studien legen keinen bestimmten Einnahmezeitpunkt fest.',
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
    short: 'Hydrolysiertes Kollagen. Hauteffekte zeigen sich nur in herstellerfinanzierten Studien, bei Kniearthrose ein kleines Schmerzsignal.',
    description: 'Kollagen macht rund 30 % des Körperproteins aus. Als Nahrungsergänzung wird es wie jedes Protein verdaut; dass die Bruchstücke gezielt in der Haut wieder zu Kollagen werden, ist nicht gesichert. Zu Haaren, Nägeln und Darm liegen keine belastbaren Studien vor.',
    benefits: [
      'Hautfeuchtigkeit und Elastizität nur in herstellerfinanzierten Studien verbessert',
      'Kniearthrose: Schmerz SMD −0,58 in 4 Studien mit 507 Teilnehmenden, alle mit hohem Verzerrungsrisiko',
      'Gute Glycin-Quelle'
    ],
    risks: [
      'Sehr sicher',
      'Bei Allergien auf Fisch/Rind beachten'
    ],
    dosage: 'Keine Empfehlung.',
    intake: 'Keine Einnahmeempfehlung. Zum Nutzen von Vitamin C oder einem bestimmten Einnahmezeitpunkt liegen in den geprüften Belegen keine Daten vor.',
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
    short: 'Natrium, Kalium, Chlorid, Magnesium. Mit Zucker kombiniert halten sie Flüssigkeit besser als Wasser – sinnvoll bei starkem Schwitzen und Durchfall. Gegen Krämpfe im Wettkampf nicht belegt.',
    description: 'Natrium wird im Darm zusammen mit Glukose aufgenommen, Wasser folgt nach. Deshalb hielt eine Rehydrationslösung bei 72 Männern mehr Flüssigkeit im Körper als Wasser (Hydrationsindex 1,54), ein normales Sportgetränk dagegen nicht; für Kohlenhydrat-Elektrolyt-Lösungen bei langer Ausdauerbelastung sind zwei EU-Gesundheitsangaben zugelassen. Krämpfe im Wettkampf hingen in Studien mit 210 Ironman-Triathleten, 88 Marathonläufern und einem Ultramarathon nicht mit Elektrolytwerten oder der Natriumzufuhr zusammen. Bei Keto gibt es eine physiologische Begründung, aber keine klinischen Studien. Das BfR sieht keinen Grund für Natrium in Nahrungsergänzungsmitteln; das größte Risiko im Ausdauersport ist Hyponatriämie durch zu viel Trinken.',
    benefits: [
      'Rehydrationslösung (Natrium plus Glukose) hält Flüssigkeit besser als Wasser: Hydrationsindex 1,54 (72 Männer, Maughan 2016)',
      'Kohlenhydrat-Elektrolyt-Lösungen: zugelassene EU-Angaben zur Ausdauerleistung bei längerem Training und zur Wasseraufnahme (80 bis 350 kcal und 460 bis 1.150 mg Natrium pro Liter)',
      'Moderne Rehydrationslösungen senkten bei Kindern mit Durchfall ungeplante Infusionen gegenüber der älteren Standardlösung (Cochrane, 8 Studien, OR 0,59)',
      'Nach starkem Schwitzen senkte reines Wasser die Krampfschwelle, eine Elektrolytlösung hob sie (Labor, 10 Männer, Lau 2019)',
      'Keto-Einstieg: physiologisch plausibel, klinisch nicht untersucht (Skartun 2025)'
    ],
    risks: [
      'Hyponatriämie durch zu viel Trinken im Ausdauersport – Salzkapseln schützen nicht zuverlässig (Hoffman 2015; Hew-Butler 2017)',
      'Natrium: Aufnahme in Deutschland meist über dem Bedarf; bei Bluthochdruck zusätzliches Salz meiden',
      'Kalium: bei Nierenerkrankung und kaliumsparenden Medikamenten Gefahr der Hyperkaliämie; BfR-Höchstmenge 500 mg pro Tagesdosis',
      'Magnesium über 250 mg zusätzlich pro Tag: Durchfall (SCF/BfR)',
      'Krampfschutz im Wettkampf nicht belegt (Schwellnus 2011: 210 Triathleten; Martínez-Navarro 2022: 88 Marathonläufer)'
    ],
    dosage: 'Referenz- und Rechtswerte statt Verzehrempfehlung: EFSA hält 2,0 g Natrium pro Tag für Erwachsene für sicher und angemessen, D-A-CH schätzt 1.500 mg; Männer nehmen im Median 2.940 bis 3.415 mg auf. Das BfR sieht keinen Natriumzusatz in Nahrungsergänzungsmitteln vor und schlägt für Getränke zum Ausgleich erhöhter Natriumverluste 460 bis 1.150 mg pro Liter vor, was den Bedingungen der EU-Angabe für Kohlenhydrat-Elektrolyt-Lösungen entspricht. Höchstmengen pro Tagesdosis in Nahrungsergänzungsmitteln laut BfR: Kalium 500 mg, Magnesium 250 mg.',
    intake: 'Bei langen, schweißtreibenden Belastungen und bei Durchfall; zum Nachtrinken nach starkem Schwitzen besser als reines Wasser. Nach Durst trinken, nicht darüber hinaus. Schweißverlust über das Körpergewicht vor und nach der Einheit abschätzen.',
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
      'Füllt Glutathion dort auf, wo ein Mangel vorliegt (Mukoviszidose, 18 Patienten) — nicht nachweisbar im Gehirn (offene Studie, 8 Personen, 5 davon mit Parkinson)'
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
    short: 'Flavon aus Kamille und Petersilie. Bindet im Labor an die Benzodiazepin-Stelle und hemmt bei Mäusen das NAD+-abbauende Enzym CD38; am Menschen ist nur Kamillenextrakt untersucht, isoliertes Apigenin nicht.',
    description: 'Apigenin bindet an die zentrale Benzodiazepin-Bindungsstelle (Ki 4 µM) und wirkte bei Mäusen angstlösend. In Zellkultur und bei übergewichtigen Mäusen hemmt es CD38 und erhöht NAD+; beim Menschen wurde das nie gemessen. Aus Petersilie gelangt nur ein kleiner Teil ins Blut. Die Humandaten zu Angst und Schlaf stammen aus Kamillenextrakt: weniger Angstsymptome bei generalisierter Angststörung in einer Placebo-Studie mit 57 Patienten, bessere subjektive Schlafqualität in Meta-Analysen, aber keine längere Schlafdauer. Für isoliertes Apigenin gibt es keine veröffentlichte randomisierte Studie. Isoliertes Apigenin (≥ 98 %) ist in der EU ein nicht zugelassenes neuartiges Lebensmittel.',
    benefits: [
      'Bindet an die Benzodiazepin-Bindungsstelle und wirkte bei Mäusen angstlösend ohne Sedierung (Viola 1995, Rezeptorbindung und Tier)',
      'Hemmt CD38 und erhöht NAD+ in Zellkultur und bei übergewichtigen Mäusen (Escande 2013) – beim Menschen nicht gemessen',
      'Kamillenextrakt mit Apigenin senkte Angstsymptome bei generalisierter Angststörung (RCT, 57 Patienten, 8 Wochen, Amsterdam 2009); Rückfallschutz über 26 Wochen als Hauptziel nicht erreicht (Mao 2016)',
      'Kamille verbesserte die subjektive Schlafqualität (Meta-Analysen, 12 RCTs bzw. 10 Studien mit 772 Teilnehmern), nicht die Schlafdauer',
      'Für isoliertes Apigenin keine veröffentlichte randomisierte Humanstudie'
    ],
    risks: [
      'Sicherheit des hochdosierten Reinstoffs am Menschen nicht systematisch untersucht; keine Obergrenze von EFSA, BfR oder NIH',
      'Nicht bei Allergie gegen Kamille oder andere Korbblütler (EMA-Monografie Kamillenblüten)',
      'Hemmt im Labor das Leberenzym CYP2C9 (Abbau u. a. von Losartan, Warfarin) – bei Gerinnungshemmern und Dauermedikation ärztlich klären',
      'Mögliche Verstärkung von Beruhigungs- und Schlafmitteln oder Alkohol nicht untersucht',
      'Keine Daten für Schwangerschaft, Stillzeit und Kinder',
      'Isoliertes Apigenin ist in der EU ein nicht zugelassenes Novel Food'
    ],
    dosage: 'Keine Dosierungsangabe. Apigenin ist kein zugelassener Wirkstoff (§ 3a Heilmittelwerbegesetz), als Reinstoff in der EU ein nicht zugelassenes neuartiges Lebensmittel, und Biohacking Kompakt gibt für Apigenin keine Kaufempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer Gerinnungshemmer, Beruhigungs- oder Schlafmittel nimmt, klärt Apigenin vorher ärztlich.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Kamille, Petersilie, Sellerie, Artischocke (sehr niedrig dosiert)'
  },
  {
    id: 'fisetin',
    name: 'Fisetin',
    altNames: 'Flavonoid aus Erdbeeren',
    category: 'Longevity',
    tags: ['senolytisch', 'longevity', 'gehirn', 'anti-aging', 'entzuendung'],
    short: 'Senolytikum-Kandidat. Die viel zitierte Mausstudie von 2018 wurde im unabhängigen Testprogramm nicht bestätigt; beim Menschen senkt Fisetin in kleinen Studien einzelne Entzündungswerte, eine senolytische Wirkung ist nicht gezeigt.',
    description: 'Fisetin baute in einer viel zitierten Studie von 2018 seneszente Zellen ab und verlängerte die Lebenszeit alter Mäuse. Das unabhängige US-Interventions-Testprogramm (ITP) hat nachgeprüft – und weder eine Lebenszeitverlängerung noch eine Senkung des Seneszenzmarkers p16 in Leber, Niere und Gehirn gefunden. Beim Menschen gibt es kleine randomisierte Studien mit Surrogatmarkern: IL-8 sank bei 37 Darmkrebspatienten gegenüber Placebo, IL-6 und Insulinresistenz bei 44 Männern mit Adipositas. In einer Arthrose-Studie mit 75 Teilnehmern unterschieden sich Nebenwirkungen und Entzündungsmarker nicht von Placebo. Die Frailty-Studie der Mayo Clinic (AFFIRM, 40 Frauen) läuft seit Februar 2018 ohne Ergebnis. Unverändertes Fisetin wird schlecht aufgenommen. Isoliertes Fisetin (≥ 98 %) ist in der EU ein nicht zugelassenes neuartiges Lebensmittel.',
    benefits: [
      'Senolytische Wirkung in Zellkultur und Maus, Lebensverlängerung alter Mäuse (Yousefzadeh 2018) – im unabhängigen ITP nicht bestätigt (Harrison 2024)',
      'Senkte IL-8 gegenüber Placebo bei 37 Darmkrebspatienten unter Chemotherapie (RCT, 7 Wochen, Farsad-Naeimi 2018)',
      'Senkte IL-6, TNF-α und Insulinresistenz bei 44 Männern mit Adipositas, am stärksten mit Training (RCT, 12 Wochen, Alipour 2026)',
      'Eine senolytische Wirkung beim Menschen ist nicht gezeigt; Arthrose-RCT mit 75 Teilnehmern ohne Unterschied bei Entzündungsmarkern (NCT04210986)'
    ],
    risks: [
      'Nur Kurzzeitdaten aus kleinen Studien; Langzeitsicherheit unbekannt, die Mayo-Studie AFFIRM läuft seit 2018 ohne Ergebnis',
      'Wechselwirkungen mit Medikamenten (z. B. Gerinnungshemmern) am Menschen nicht untersucht',
      'Keine Daten für Schwangerschaft, Stillzeit und Kinder; bei Krebserkrankungen nur in Studien oder ärztlich begleitet',
      'Isoliertes Fisetin ist in der EU ein nicht zugelassenes Novel Food – keine europäische Sicherheitsprüfung'
    ],
    dosage: 'Keine Dosierungsangabe. Fisetin ist kein zugelassener Wirkstoff (§ 3a Heilmittelwerbegesetz) und als Reinstoff in der EU ein nicht zugelassenes neuartiges Lebensmittel.',
    intake: 'Keine Einnahmeempfehlung. Die Aufnahme von unverändertem Fisetin aus dem Darm ist gering und hängt stark von der Zubereitung ab (Herstellerstudie, 15 Gesunde).',
    synergies: ['quercetin', 'resveratrol', 'spermidin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Erdbeeren, Äpfel, Kakis, Zwiebeln (in kleinen Mengen)'
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
    intake: 'Die Studien legen keinen bestimmten Einnahmezeitpunkt fest.',
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
    short: 'Resveratrol-Verwandter, der bei Ratten besser aufgenommen wird. In der einzigen größeren Humanstudie sank der Blutdruck, aber das LDL stieg. In der EU nicht zugelassen, keine Kaufempfehlung.',
    description: 'Pterostilben ist ein methyliertes Resveratrol-Analogon. An Ratten lag die orale Bioverfügbarkeit bei etwa 80 % gegenüber 20 % für Resveratrol; am Menschen ist das nicht im Vergleich gemessen. In einer randomisierten, doppelblinden Studie mit 80 Erwachsenen mit erhöhtem Cholesterin (6 bis 8 Wochen) war es gut verträglich, senkte in der höheren Dosis den Blutdruck um 7,8/7,3 mmHg und erhöhte das LDL um 17,1 mg/dl. Sirtuin- und AMPK-Aktivierung stammen aus Zell- und Tierversuchen; neuere Humanstudien testen fast nur die Kombination mit Nicotinamid-Ribosid, deren Fettleberstudie ihren Hauptendpunkt verfehlte. Hochreines Pterostilben aus Sandelholz ist in der EU ein nicht zugelassenes neuartiges Lebensmittel. Biohacking Kompakt gibt keine Kaufempfehlung.',
    benefits: [
      'Bei Ratten etwa 80 % orale Bioverfügbarkeit gegenüber 20 % bei Resveratrol (Kapetanovic 2011) – am Menschen nicht verglichen',
      'Senkte in einer RCT mit 80 Patienten in der höheren Dosis den Blutdruck um 7,8/7,3 mmHg (Riche 2014)',
      'Kurzzeitig gut verträglich: keine Leber-, Nieren- oder Zuckerauffälligkeiten über 6 bis 8 Wochen (Riche 2013), keine Nebenwirkungen über 12 Wochen (Otsuka 2025)',
      'Sirtuin-, AMPK- und Nervenschutz-Effekte nur in Zell- und Tierversuchen'
    ],
    risks: [
      'LDL-Cholesterin stieg in der RCT um 17,1 mg/dl unter Pterostilben allein (Riche 2014)',
      'Hemmt Blutplättchen im Reagenzglas und verlängerte im Mausmodell die Verschlusszeit – Vorsicht mit Gerinnungshemmern',
      'Hemmt CYP2C9 in Lebermikrosomen – Wechselwirkungen mit über CYP2C9 abgebauten Medikamenten möglich, klinisch ungeprüft',
      'Keine Langzeitdaten, keine Daten zu Schwangerschaft und Stillzeit',
      'In der EU nicht zugelassenes neuartiges Lebensmittel (hochreines Pterostilben aus Sandelholz)'
    ],
    dosage: 'Keine Dosierungsangabe. Pterostilben ist kein zugelassener Wirkstoff und in der EU ein nicht zugelassenes neuartiges Lebensmittel, deshalb greift § 3a Heilmittelwerbegesetz; zudem gibt Biohacking Kompakt für Pterostilben keine Kaufempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer Gerinnungshemmer oder andere Dauermedikamente nimmt oder erhöhtes Cholesterin hat, klärt Pterostilben vorher ärztlich.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Nur in Spuren in wenigen Heidelbeersorten (99 bis 520 ng/g Trockenmasse, Rimando 2004); hochreines Pterostilben wird aus Sandelholz gewonnen'
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
      'Fokus und geistige Klarheit bei Gesunden: beworben, nicht untersucht',
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
      'PCOS: häufiger regelmäßiger Zyklus als unter Placebo (26 RCTs, RR 1,79); im Vergleich mit Metformin beim Zyklus kein klarer Unterschied, die Leitlinien-Meta-Analyse nennt die Evidenz begrenzt (Fitz 2024)',
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
    short: 'Methylgruppenspender, der Homocystein zuverlässig senkt (zugelassene EU-Gesundheitsangabe). Kleiner Kraftvorteil im Unterkörper; ab 4 g pro Tag steigt das Cholesterin.',
    description: 'TMG (Betain) gibt über die Betain-Homocystein-Methyltransferase eine Methylgruppe an Homocystein ab, daraus wird Methionin. Meta-Analysen randomisierter Studien zeigen bei mindestens 4 g pro Tag eine Senkung um 1,23 µmol/l (5 RCTs, McRae 2013); die EU erlaubt die Angabe, dass Betain zu einem normalen Homocystein-Stoffwechsel beiträgt (Wirkung bei 1,5 g täglich). Als Arzneimittel Cystadane ist Betain seit 2007 bei Homocystinurie zugelassen. Im Kraftsport zeigt eine Meta-Analyse über 17 Studien einen kleinen Vorteil (SMD 0,47), vor allem im Unterkörper; Körperzusammensetzung und Fettleber verbesserten sich nicht. Ab 4 g pro Tag steigen Gesamt- und LDL-Cholesterin. Dass TMG als Partner von NMN oder NR nötig ist, hat keine Humanstudie gezeigt.',
    benefits: [
      'Senkt Homocystein um 1,23 µmol/l (Meta-Analyse, 5 RCTs, mindestens 4 g pro Tag, McRae 2013); zugelassene EU-Gesundheitsangabe zum Homocystein-Stoffwechsel',
      'Kleiner Zuwachs an Maximalkraft, vor allem im Unterkörper (SMD 0,47; Meta-Analyse, 17 Studien, 317 Teilnehmende, Zawieja 2024)',
      'Zugelassenes Arzneimittel zur Zusatzbehandlung der Homocystinurie (Cystadane, EU seit 2007)',
      'Kein belegter Effekt auf Körperfett oder Gewicht (Meta-Analyse, Ashtary-Larky 2022)',
      'Fettleber: in einer 12-Monats-RCT mit 55 Patienten keine Verbesserung gegenüber Placebo (Abdelmalek 2009)'
    ],
    risks: [
      'Ab 4 g pro Tag steigt das Cholesterin: Gesamtcholesterin +0,34 mmol/l (6 RCTs), LDL +10,26 mg/dl; EU-Pflichthinweis bei Produkten mit Gesundheitsangabe',
      'Bei Homocystinurie-Patienten Anstieg des Methionins, Hirnödem möglich – nur mit ärztlicher Kontrolle (EMA)',
      'Homocystein-Senkung ist ein Laborwert: Mit B-Vitaminen senkte sie in 15 RCTs Herzinfarkte und Sterblichkeit nicht (Cochrane 2017)',
      'Kombination mit NMN oder NR am Menschen nicht untersucht'
    ],
    dosage: 'Die EU-Gesundheitsangabe setzt mindestens 500 mg je Portion voraus und bezieht sich auf 1,5 g täglich; mehr als 4 g täglich können laut Pflichthinweis den Cholesterinspiegel erheblich erhöhen. Die Meta-Analysen zur Homocystein-Senkung verwendeten mindestens 4 g pro Tag über 6 bis 24 Wochen, eine Fettleberstudie 20 g pro Tag über 12 Monate. Das sind Studien- und Rechtsangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien täglich über Wochen eingenommen, die Kraftwirkung nach mindestens 7 Tagen. Bei erhöhtem Cholesterin unter 4 g bleiben oder ärztlich abklären.',
    synergies: ['vitamin-b-komplex', 'methylfolat'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Weizenkleie (1.339 mg pro 100 g), Weizenkeime (1.241 mg), Spinat (645 mg), Garnelen, Weizenbrot'
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
    short: 'Spurenelement ohne bekannte essenzielle Funktion beim Menschen. Als Testo-Booster beworben, die einzige RCT an Männern war negativ. BfR schlägt für Nahrungsergänzungsmittel höchstens 0,5 mg pro Tag vor.',
    description: 'Bor beeinflusst in kleinen Studien den Calcium-, Magnesium- und Hormonstoffwechsel: Bei 12 Frauen nach der Menopause senkten 3 mg pro Tag nach borarmer Kost die Mineralverluste und hoben Östradiol und Testosteron (1987), eine Wiederholung fand das nicht. Die einzige randomisierte Studie an Männern (19 Bodybuilder, 2,5 mg, 7 Wochen) zeigte keinen Effekt auf Testosteron, Muskelmasse oder Kraft; positive Männerdaten stammen aus einer unkontrollierten Studie mit 8 Teilnehmern. Für Kniebeschwerden gibt es zwei kurze, herstellernahe Studien mit Calciumfructoborat. EFSA und NIH stufen Bor nicht als essenziell ein. Die EFSA-Obergrenze liegt bei 10 mg pro Tag, das BfR schlägt für Nahrungsergänzungsmittel 0,5 mg pro Tagesdosis und den Hinweis „Für Kinder und Jugendliche nicht geeignet“ vor.',
    benefits: [
      'Senkte bei 12 Frauen nach borarmer Kost die Calcium- und Magnesiumausscheidung (Nielsen 1987) – in einer Wiederholungsstudie nicht bestätigt (Beattie 1993)',
      'Testosteron-Booster für Männer: nicht belegt – RCT mit 19 Bodybuildern ohne Effekt (Ferrando 1993)',
      'Calciumfructoborat besserte Kniebeschwerden in einer 14-Tage-RCT mit 60 Personen (herstellernah, Pietrzkowski 2014)',
      'Borarme Kost verschlechterte bei Älteren EEG, Aufmerksamkeit und Kurzzeitgedächtnis gegenüber normaler Zufuhr (Penland 1994)'
    ],
    risks: [
      'EFSA-Obergrenze 10 mg pro Tag aus allen Quellen; borreiche Kost und Mineralwasser können schon etwa 9 mg liefern (BfR)',
      'Nicht für Kinder und Jugendliche: deren Aufnahme kann die Obergrenze schon ohne Supplemente erreichen (BfR)',
      'Tierversuche: geringeres Fötusgewicht und Schäden an männlichen Fortpflanzungsorganen – Vorsicht in Schwangerschaft, Stillzeit und bei Kinderwunsch',
      'Hob bei Frauen nach der Menopause das Östradiol – bei hormonabhängigen Erkrankungen ärztlich abklären',
      'Akute Vergiftung: Übelkeit, Erbrechen, Durchfall, Hautausschlag (NIH)'
    ],
    dosage: 'Studien verwendeten 2,5 mg (Bodybuilder, 7 Wochen), 3 mg (Frauen nach borarmer Kost) und 10 mg Bor pro Tag (8 Männer, 1 Woche). Grenzwerte: EFSA-Obergrenze 10 mg pro Tag für Erwachsene aus allen Quellen; das BfR schlägt für Nahrungsergänzungsmittel höchstens 0,5 mg pro Tagesdosis vor. Die übliche Zufuhr aus der Nahrung liegt bei US-Erwachsenen im Median bei 0,87 bis 1,35 mg. Das sind Studien- und Grenzwertangaben, keine Verzehrempfehlung.',
    intake: 'Bor kommt vor allem über Obst und Gemüse; als Supplement nur Erwachsene, nicht in Schwangerschaft und Stillzeit, und nicht mehrere borhaltige Produkte kombinieren.',
    synergies: ['vitamin-d3', 'magnesium', 'zink'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Pflaumensaft (1,43 mg pro Tasse), Avocado (1,07 mg pro halbe Tasse), Rosinen, Pfirsiche, Traubensaft; manche Mineralwässer'
  },

  // ============ NEU: PILZE & ADAPTOGENE ============
  {
    id: 'chaga',
    name: 'Chaga (Schiefer Schillerporling)',
    altNames: 'Inonotus obliquus',
    category: 'Pilz',
    tags: ['immun', 'antioxidant', 'entzuendung', 'longevity', 'darm'],
    short: 'Birkenpilz aus der russischen Volksmedizin. Im Labor antioxidativ und blutzuckersenkend, am Menschen praktisch nicht untersucht; sehr oxalatreich, drei Fälle schwerer Nierenschäden sind dokumentiert.',
    description: 'Chaga (Inonotus obliquus) wächst an Birken und wird als Tee, Pulver oder Extrakt verkauft. Zell- und Tierstudien zeigen antioxidative, blutzuckersenkende und entzündungshemmende Effekte; am Menschen gibt es nur zwei unkontrollierte sowjetische Studien (Psoriasis 1973, Magengeschwür 1981), keine kontrollierte Studie mit veröffentlichten Ergebnissen. Gemessen wurden 2,8 bis 14,2 g Oxalat pro 100 g Pulver; drei Fallberichte beschreiben Oxalat-Nephropathie bis zur Dialyse nach monate- bis jahrelanger Einnahme, ein Rattenversuch bestätigt den Mechanismus. Als Nahrungsergänzungsmittel in der EU nicht neuartig, in anderen Lebensmitteln neuartig.',
    benefits: [
      'Antioxidativ, blutzuckersenkend und entzündungshemmend in Zell- und Tierstudien – am Menschen nicht geprüft',
      'Im Reagenzglas weniger oxidative DNA-Schäden in Blutzellen (54,9 % bei Darmerkrankten, 34,9 % bei Gesunden, Najafzadeh 2007)',
      'Zwei unkontrollierte sowjetische Studien: Besserung bei 50 Psoriasis-Patienten (1973), vorübergehend weniger Schmerz bei 58 Patienten mit Magengeschwür (1981)',
      'Lange Tradition als Tee in Russland'
    ],
    risks: [
      'Sehr oxalatreich (2,8 bis 14,2 g pro 100 g Pulver): drei Fälle von Oxalat-Nephropathie, zwei mit dauerhafter Dialyse (Kikuchi 2014, Lee 2020, Kwon 2022)',
      'Nicht bei Nierensteinen, eingeschränkter Nierenfunktion oder zusammen mit hochdosiertem Vitamin C',
      'Hemmt im Mausmodell die Blutplättchen – Vorsicht mit Gerinnungshemmern und vor Operationen (MSKCC)',
      'Im Labor additive Blutzuckersenkung – bei Diabetesmedikamenten ärztlich abklären',
      'Keine systematischen Sicherheitsdaten am Menschen, keine Daten zu Schwangerschaft und Stillzeit'
    ],
    dosage: 'Keine Dosierungsangabe. Chaga ist kein zugelassener Wirkstoff, und es gibt keine Dosisstudien am Menschen. Dokumentierte Nierenschäden traten nach 3 g täglich über 4 Jahre und 9 g über 1 Jahr, nach 10 bis 15 g täglich über 3 Monate und nach 4 bis 5 Teelöffeln täglich über 6 Monate auf.',
    intake: 'Keine Einnahmeempfehlung. Wer Chaga dennoch nutzt, sollte bei Nierenproblemen, Vitamin-C-Hochdosis, Gerinnungshemmern oder Diabetesmedikamenten vorher ärztlich abklären.',
    synergies: ['reishi', 'cordyceps'],
    avoid: [],
    evidence: 'niedrig',
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
    short: 'NAD+-Vorstufe aus der Vitamin-B3-Familie: hebt den NAD+-Spiegel im Blut zuverlässig an und ist in der EU als neuartiges Lebensmittel zugelassen – klinische Effekte auf Stoffwechsel und Altern blieben in den meisten Studien aus.',
    description: 'Nicotinamid-Ribosid (NR) ist eine Vorstufe von NAD+, einem Coenzym, das unter anderem die Sirtuine benötigen, und eine Quelle für Niacin. In einer 8-wöchigen Placebo-Studie stieg NAD+ im Vollblut mit 100, 300 und 1000 mg um 22, 51 und 142 Prozent; auch im Gehirn ist ein Anstieg messbar. Eine kritische Übersicht über 25 Humanstudien (Science Advances 2023) findet aber nur wenige klinisch relevante Effekte: Insulinsensitivität, Blutzucker, Körperzusammensetzung und Blutdruck blieben meist unverändert, Hinweise gibt es auf weniger Entzündung. Bei Parkinson hob NR in einer Phase-I-Studie das NAD im Gehirn und senkte Entzündungsbotenstoffe; die Phase-III-Studie NOPARK mit 410 Teilnehmern ist abgeschlossen, aber nicht veröffentlicht. Die EFSA hält bis 300 mg am Tag für gesunde Erwachsene für sicher.',
    benefits: [
      'Hebt NAD+ im Blut dosisabhängig an (plus 22, 51 und 142 Prozent mit 100, 300 und 1000 mg; RCT, 8 Wochen, Conze 2019), auch im Gehirn messbar',
      'Gut verträglich, kein Flush wie bei Nicotinsäure; 3000 mg am Tag über 4 Wochen ohne schwere Nebenwirkungen (20 Parkinson-Patienten)',
      'Hinweise auf weniger Entzündung und Potenzial bei Parkinson (NADPARK, 30 Patienten, Phase I) – Phase-III-Ergebnisse stehen aus',
      'Keine Verbesserung der Insulinsensitivität (40 Männer mit Adipositas, 12 Wochen) und meist kein Effekt auf Blutdruck oder Körperzusammensetzung'
    ],
    risks: [
      'Der NAD+-Anstieg ist belegt – ein Nutzen für Stoffwechsel, Leistung oder Altern beim Menschen bisher nicht',
      'EFSA: bis 300 mg am Tag für gesunde Erwachsene sicher, für Schwangere und Stillende bis 230 mg; Obergrenze für Nicotinamid 900 mg am Tag',
      'Keine Langzeitdaten über 6 Monate hinaus; für Kinder und Menschen mit Krebserkrankung keine Daten',
      'Kein Ersatz für Schlaf, Bewegung und Ernährung'
    ],
    dosage: 'Studien verwendeten 100 bis 2000 mg am Tag über Wochen bis Monate, in Hochdosis-Studien bei Parkinson kurzzeitig 3000 mg. Die EFSA hat NR-Chlorid in Nahrungsergänzungen bis 300 mg am Tag für gesunde Erwachsene als sicher bewertet, für Schwangere und Stillende bis 230 mg. Der NAD-Spiegel erreichte in einer Studie nach etwa 2 Wochen ein Plateau.',
    intake: 'In den Studien meist einmal oder zweimal täglich; der Blutspiegel stieg über etwa 2 Wochen an und blieb dann stabil.',
    synergies: [],
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
    short: 'TCM-Tonikum aus der Wüste, reich an Echinacosid. Zwei kleine RCTs zeigen mehr Kraft beim Training und bessere Gehfähigkeit im Alter; für Libido und Potenz gibt es keine Humanstudie. In der EU nicht zugelassenes Novel Food.',
    description: 'Cistanche deserticola und Cistanche tubulosa sind Wüstenpflanzen der Traditionellen Chinesischen Medizin mit Phenylethanoid-Glykosiden wie Echinacosid und Acteosid. In einer herstellerfinanzierten RCT mit 48 Männern steigerte Cistanche deserticola zusammen mit Krafttraining über 8 Wochen die Kraft stärker als Placebo, vor allem bei Untrainierten, mit günstigeren Testosteron- und Cortisolwerten. In einer universitären RCT mit 26 Personen verbesserte Cistanche tubulosa über 12 Wochen die Gehgeschwindigkeit über 60-Jähriger, ohne die Muskelmasse zu verändern. Drei größere Studien (100, 190, 117 Teilnehmende) testeten nur eine Kombination mit Ginkgo, alle mit Herstellerbeteiligung. Für Libido, Potenz und Langlebigkeit gibt es keine Humanstudie. Beide Arten sind in der EU nicht zugelassene neuartige Lebensmittel.',
    benefits: [
      'Mehr Kraftzuwachs beim Krafttraining als unter Placebo, vor allem bei Untrainierten (RCT, 48 Männer, 8 Wochen, herstellerfinanziert, Tao 2025)',
      'Bessere Gehgeschwindigkeit und Schrittweite bei über 60-Jährigen, Muskelmasse unverändert (RCT, 26 Personen, 12 Wochen, Inada 2021)',
      'In Kombination mit Ginkgo bessere Gedächtnis- und Screeningwerte (RCT, 100 Personen, 90 Tage, Herstellerautoren, Chen 2024)',
      'Libido, Potenz und Langlebigkeit: nur Tradition und Tierversuche, keine Humanstudie'
    ],
    risks: [
      'In der EU nicht zugelassenes neuartiges Lebensmittel (C. deserticola und C. tubulosa) – keine EU-Sicherheitsbewertung',
      'Echinacosid hemmt im Labor CYP3A4, CYP2C19, CYP1A2 und CYP2E1 – Wechselwirkungen mit Medikamenten möglich, klinisch ungeprüft',
      'Veränderte Testosteron- und Cortisolwerte in einer Studie – bei hormonabhängigen Erkrankungen ärztlich abklären',
      'Keine Langzeitdaten über 90 Tage, keine Daten zu Schwangerschaft, Stillzeit und Kindern',
      'Studienlage überwiegend herstellernah, unabhängige Wiederholungen fehlen'
    ],
    dosage: 'Keine Dosierungsangabe. Cistanche ist kein zugelassener Wirkstoff und in der EU ein nicht zugelassenes neuartiges Lebensmittel, deshalb greift § 3a Heilmittelwerbegesetz.',
    intake: 'Keine Einnahmeempfehlung. Wer Dauermedikamente nimmt oder eine hormonabhängige Erkrankung hat, klärt Cistanche vorher ärztlich.',
    synergies: ['tongkat-ali', 'ginseng'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Getrockneter Stängel von Cistanche deserticola oder Cistanche tubulosa, vor allem aus der Inneren Mongolei, Gansu, Xinjiang und Qinghai'
  },
  {
    id: 'tribulus',
    name: 'Tribulus Terrestris',
    altNames: 'Erd-Burzeldorn, Puncture Vine',
    category: 'Kräuter',
    tags: ['libido', 'hormone', 'sport'],
    short: 'Klassisches Libido-Kraut: verbessert in Placebo-Studien die erektile Funktion, eine Meta-Analyse von 8 Studien bestätigt das – der Testosteron-Effekt bei normalen Werten ist dagegen nicht belegt.',
    description: 'Tribulus Terrestris ist ein traditionelles Kraut mit steroidalen Saponinen (Protodioscin), lange als Testo-Booster vermarktet. Die Studienlage ist zweigeteilt: Für die erektile Funktion zeigt eine Meta-Analyse von 8 Studien einen Vorteil gegenüber Placebo (IIEF-5 plus 3,23 Punkte), die größte RCT mit 180 Männern war positiv. Beim Testosteron fanden 8 von 10 Studien keine Veränderung, nur 2 Studien bei Hypogonadismus einen kleinen Anstieg um 60 bis 70 ng/dl – der Ruf als Testo-Booster ist überzogen. Der Saponingehalt schwankt zwischen Produkten stark.',
    benefits: [
      'Verbessert die erektile Funktion: IIEF-5 um 3,23 Punkte besser als Placebo (Meta-Analyse, 8 Studien, Suharyani 2026); größte RCT mit 180 Männern über 12 Wochen positiv (Kamenov 2017)',
      'Höhere Werte für sexuelle Funktion bei Frauen (5 RCTs, 279 Teilnehmerinnen) – sehr niedrige Gewissheit',
      'Kurzfristig gut verträglich, Nebenwirkungen nicht häufiger als Placebo'
    ],
    risks: [
      'Kein Testosteron-Effekt bei normalen Ausgangswerten (8 von 10 Studien ohne Änderung; Vilar Neto 2025) – als Libido- und Erektionsmittel einordnen, nicht als Testo-Booster',
      'Saponingehalt schwankt stark; Studienergebnisse gelten für standardisierte Extrakte',
      'Leichter Anstieg von AST und PSA in einer Studie mit 70 älteren Männern',
      'Seltene Fallberichte über akutes Nierenversagen und Gelbsucht – bei Nierenerkrankungen meiden'
    ],
    dosage: 'Studien verwendeten 400 bis 750 mg Extrakt pro Tag über 1 bis 3 Monate (Review, 10 Studien); die größte RCT gab 3 × 2 Tabletten eines Extrakts mit je 250 mg, standardisiert auf mindestens 112,5 mg Furostanol-Saponine, über 12 Wochen.',
    intake: 'In der größten Studie nach den Mahlzeiten. Effekte wurden nach 1 bis 3 Monaten gemessen.',
    synergies: ['tongkat-ali', 'zink'],
    avoid: [],
    evidence: 'mittel',
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
    short: 'Ketone zum Trinken: heben den Fasten-Treibstoff BHB im Blut zuverlässig an. Kleiner Vorteil für die geistige Leistung in einer Meta-Analyse, kein Leistungsgewinn im Sport; Ketonsalze sind in der EU nicht zugelassen.',
    description: 'Exogene Ketone (v. a. Beta-Hydroxybutyrat, BHB) heben den Ketonspiegel im Blut an, ohne dass man fasten oder streng ketogen essen muss. Ketonester wirken stärker (Spitzenwert 2,8 mM gegenüber 1,0 mM mit Salzen), Ketonsalze bestehen oft zur Hälfte aus L-BHB und liefern viel Natrium oder Kalium. Der Spiegel fällt nach 3 bis 4 Stunden wieder ab. Eine Meta-Analyse aus 29 Studienprotokollen fand einen kleinen Vorteil für die Kognition (SMD 0,29), bei Herzinsuffizienz stiegen in 4 kleinen RCTs Herzzeitvolumen und Auswurffraktion. Die sportliche Leistung verbesserte sich in zwei Meta-Analysen nicht. Die längste Sicherheitsstudie lief 28 Tage. BHB-Salze sind in der EU ein nicht zugelassenes Novel Food, die EFSA konnte ihre Sicherheit 2022 nicht feststellen.',
    benefits: [
      'Hebt den BHB-Spiegel zuverlässig an – Ester deutlich stärker als Salze (Stubbs 2017)',
      'Kleiner Vorteil für die geistige Leistung gegenüber Placebo (SMD 0,29; Meta-Analyse, 29 Protokolle, 1.117 Teilnehmer, Bonnechère 2026)',
      'Senkt kurzfristig Ghrelin und Hunger (15 Personen, Stubbs 2018)',
      'Herzinsuffizienz: Herzzeitvolumen plus 1,11 l/min in 4 kleinen RCTs (Siddiqi 2026) – nur Surrogatmarker',
      'Sportliche Leistung: kein Effekt in zwei Meta-Analysen (13 RCTs bzw. 8 Studien)'
    ],
    risks: [
      'Magen-Darm-Beschwerden bei großen Mengen; leichte Übelkeit nach 6 von 2.016 Drinks in 28 Tagen',
      'Ketonester senkt den Blut-pH leicht (um 0,10); Ketonsalze liefern viel Natrium oder Kalium und enthalten oft zur Hälfte L-BHB',
      'Senkt den Blutzucker – bei Diabetesmedikation ärztlich klären',
      'Keine Sicherheitsdaten über 28 Tage hinaus; EFSA konnte die Sicherheit der BHB-Salze 2022 nicht feststellen'
    ],
    dosage: 'Keine Dosierungsangabe. Exogene Ketone sind kein zugelassener Wirkstoff, BHB-Salze sind in der EU ein nicht zugelassenes neuartiges Lebensmittel.',
    intake: 'Nüchtern lag der Ketonspiegel in einer Studie um 33 Prozent höher als nach einer Mahlzeit; eine stärkere Wirkung ist damit nicht belegt. Der Spiegel fällt nach 3 bis 4 Stunden wieder ab.',
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
    short: 'Ein Enzym aus fermentierten Sojabohnen (Natto): baut im Reagenzglas Fibrin ab und senkt in Studien leicht den Blutdruck. In der EU ist ein spezifizierter fermentierter Sojabohnenextrakt als neuartiges Lebensmittel zugelassen; ob es Gerinnsel im Körper auflöst, ist nicht gezeigt.',
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
      'Bei Einnahme von Arzneimitteln nur unter ärztlicher Aufsicht (Pflichthinweis der EU-Zulassung)',
      'Qualität/Aktivität (in FU) beachten',
      'Bei Blutungsneigung meiden',
      'Fallbericht: Ersatz von Warfarin durch Nattokinase nach mechanischem Herzklappenersatz führte zu einem Gerinnsel auf der Klappe (Elahi 2015) – kein Ersatz für verschriebene Gerinnungshemmer'
    ],
    dosage: 'In der placebokontrollierten Langzeitstudie 2.000 FU täglich. Die EU-Zulassung (Durchführungsbeschluss (EU) 2017/115) erlaubt in Nahrungsergänzungsmitteln höchstens 100 mg Extrakt pro Tag für Erwachsene, ausgenommen Schwangere und Stillende. Die EFSA-Bewertung (2016) des Extrakts NSK-SD galt gesunden Erwachsenen über 35; höhere Mengen liegen außerhalb dieser Bewertung.',
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
    short: 'Essenzielles Spurenelement und wichtiger Zink-Gegenspieler: nötig für Bindegewebe, Eisenstoffwechsel, Nerven und antioxidative Enzyme. Die Nahrung deckt den Bedarf meist; Präparate vor allem bei hoher Zinkzufuhr oder Aufnahmestörungen.',
    description: 'Kupfer ist Kofaktor mehrerer Enzyme für Energiegewinnung, Eisenstoffwechsel, Bindegewebe, Botenstoffe im Nervensystem und die antioxidative Superoxiddismutase. In Deutschland liegt die Aufnahme über die Nahrung im Median bei 1,2 bis 1,5 mg (Frauen) und 1,5 bis 1,8 mg (Männer) am Tag, im Bereich des Schätzwerts von 1 bis 1,5 mg. Hohe Zinkmengen blockieren die Kupferaufnahme über Metallothionein im Darm; bei jahrelanger Zinkeinnahme oder zinkhaltiger Haftcreme sind schwere Nervenschäden durch Kupfermangel beschrieben. Für Menschen ohne Mangel ist ein Nutzen von Kupferpräparaten nicht gezeigt, bei Alzheimer änderten 8 mg täglich über 12 Monate die Kognition nicht. Die EU-Obergrenze liegt bei 5 mg am Tag, das BfR schlägt für Nahrungsergänzungen höchstens 1 mg vor.',
    benefits: [
      'Essenziell für Bindegewebe, Eisentransport, Nervensystem, Immunsystem und Pigmentierung – als EU-Health-Claims zugelassen',
      'Kofaktor der antioxidativen Superoxiddismutase und von Caeruloplasmin (Eisenstoffwechsel)',
      'Behebt einen Kupfermangel, etwa nach Magen-Darm-Operationen, bei Zöliakie oder durch hohe Zinkzufuhr – dokumentierte Erholung von Nervenschäden nach Kupfergabe',
      'Für Menschen ohne Mangel kein Nutzen gezeigt (Alzheimer-RCT mit 8 mg täglich ohne Effekt auf die Kognition)'
    ],
    risks: [
      'Enger Bereich: EU-Obergrenze 5 mg am Tag aus allen Quellen; bei 7 mg zusätzlich zur Nahrung reicherte sich Kupfer an und Immunwerte veränderten sich (9 Männer)',
      'Hohe Zinkdosen (etwa 60 mg am Tag) senken den Kupferstatus; jahrelange Zinkeinnahme kann schweren Kupfermangel mit Rückenmarksschäden auslösen',
      'Nicht bei Morbus Wilson (Kupferspeicherkrankheit)',
      'Laut BfR nicht für Kinder und Jugendliche in Nahrungsergänzungen'
    ],
    dosage: 'Die Nahrung liefert in Deutschland im Median 1,2 bis 1,8 mg am Tag; Schätzwert für Erwachsene 1 bis 1,5 mg (D-A-CH), EFSA 1,6 mg (Männer) und 1,3 mg (Frauen). Für Nahrungsergänzungen schlägt das BfR höchstens 1 mg pro Tagesdosis vor, mit dem Hinweis „nicht für Kinder und Jugendliche“. EU-Obergrenze für die Gesamtzufuhr 5 mg am Tag.',
    intake: 'Mit einer Mahlzeit. Wer dauerhaft hochdosiertes Zink nimmt, sollte den Kupferstatus ärztlich prüfen lassen, statt Kupfer auf Verdacht zu ergänzen.',
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
    description: 'Der Markt für flüssige „Mikronährstoffkonzentrate" wird von LaVita angeführt, dazu kommen Cellagon aurum, Regulatpro von Dr. Niedermaier, Rotbäckchen Vital, Kyäni Sunrise und als Kapsel-Nachbar Juice Plus. Alle verkaufen dieselbe Grundidee: Die Ernährung habe Lücken, das Konzentrat schließe sie. Die Basis ist Fruchtsaftkonzentrat, ergänzt um Gemüse- und Kräuterauszüge — die eigentliche Vitaminmenge stammt aus isoliert zugesetzten Reinstoffen. Damit ist die entscheidende Frage nicht, wie viele Zutaten auf dem Etikett stehen, sondern ob ein Multivitamin einem gesunden Erwachsenen etwas bringt. Genau das ist außergewöhnlich gut untersucht — und die Antwort fällt ernüchternd aus. Die großen Studien betreffen klassische Multivitamine; die Konzentrate selbst sind kaum untersucht: Zu LaVita gibt es eine Studie mit 159 Teilnehmern, eine randomisierte Studie der TU München zu Regulatpro fand bei Typ-2-Diabetes keinen Effekt auf den Blutzucker (PMID 27343205).',
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
  },
  {
    id: 'bromelain',
    name: 'Bromelain',
    altNames: 'Ananas-Enzym, Stamm-Bromelain, Bromelainum',
    category: 'Enzym',
    tags: ['entzuendung', 'regeneration', 'verdauung'],
    short: 'Eiweißspaltendes Enzymgemisch aus dem Ananasstamm, in Deutschland als Arzneimittel gegen Schwellungen nach Operationen zugelassen. Am besten belegt ist weniger Schmerz nach Zahn-Operationen; bei Arthrose und Muskelkater tragen die Daten nicht.',
    description: 'Bromelain ist ein Gemisch aus Cystein-Proteasen, gewonnen vor allem aus dem Stamm der Ananas; die Aktivität wird in F.I.P.-Einheiten angegeben. Nach dem Schlucken ist es im Serum mit erhaltener eiweißspaltender Aktivität nachweisbar, in pikomolaren Konzentrationen. Eine Meta-Analyse über 39 Arbeiten fand einen kleinen, signifikanten Schmerzvorteil gegenüber Kontrolle (9 Studien). Nach Weisheitszahn-Operationen finden mehrere Meta-Analysen weniger Schmerz, bei der Schwellung widersprechen sie sich. In Deutschland ist Bromelain als Arzneimittel zur Begleittherapie akuter Schwellungen nach Operationen und Verletzungen zugelassen, äußerlich als NexoBrid zur Behandlung schwerer Verbrennungen.',
    benefits: [
      'Weniger Schmerz nach Weisheitszahn-Operationen: in 4 Meta-Analysen übereinstimmend, z. B. nach 7 Tagen SMD −0,54 (6 RCTs) – moderater Effekt, Schwellung uneinheitlich',
      'Kleiner, signifikanter Schmerzvorteil über alle Einsatzgebiete (Meta-Analyse, 9 Studien, mittlere Differenz −0,27) – Studien mittlerer Qualität',
      'Bessere Lebensqualität in der ersten Woche nach Zahn-OP, etwa beim Schlaf (Meta-Analyse, 6 RCTs)',
      'In Deutschland als Arzneimittel zur Begleittherapie akuter Schwellungen nach Operationen und Verletzungen der Nase und Nebenhöhlen zugelassen',
      'Sinusitis: möglicher Nutzen laut Meta-Analyse, die US-Behörde NCCIH hält die Forschung aber für nicht ausreichend'
    ],
    risks: [
      'Kann die Blutungszeit verlängern: nicht bei Gerinnungsstörungen und nicht zusammen mit Blutverdünnern oder Thrombozytenhemmern; vor Operationen absetzen',
      'Allergische Reaktionen (Hautausschlag, asthmaähnliche Beschwerden) laut Fachinformation häufig – bei Ananasallergie meiden',
      'Magenbeschwerden und Durchfall gelegentlich',
      'Erhöht die Blutspiegel mancher Antibiotika',
      'In Schwangerschaft nicht empfohlen, in der Stillzeit nicht einnehmen; Studien liefen höchstens 16 Wochen'
    ],
    dosage: 'Studienangaben und Zulassung, keine persönliche Empfehlung: Das deutsche Arzneimittel enthält 500 F.I.P.-Einheiten je magensaftresistenter Tablette, 1- bis 2-mal täglich, ohne ärztlichen Rat nicht länger als 4 bis 5 Tage. Arthrosestudien verwendeten 500 bis 800 mg täglich über 12 bis 16 Wochen, eine Muskelkaterstudie 300 mg 3-mal täglich. Eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht.',
    intake: 'Laut Fachinformation etwa eine halbe Stunde vor einer Mahlzeit, unzerkaut mit reichlich Flüssigkeit.',
    synergies: ['quercetin', 'kurkuma'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Ananas, vor allem der Stamm; die Frucht enthält deutlich weniger',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37157782/'
  },
  {
    id: 'chrom',
    name: 'Chrom',
    altNames: 'Chrompicolinat, Chrom(III)-Picolinat, Chromchlorid, Chromhefe',
    category: 'Mineral',
    tags: ['blutzucker', 'stoffwechsel', 'appetit', 'fettverbrennung'],
    short: 'Spurenelement mit Ruf als Blutzucker-Mineral. Bei Typ-2-Diabetes senkt es das HbA1c in Meta-Analysen leicht, die Einzelstudien widersprechen sich; beim Abnehmen bringt es wenig.',
    description: 'Dreiwertiges Chrom soll die Wirkung von Insulin unterstützen; die EFSA sieht seine essenzielle Funktion aber nicht als belegt an und fand bei Gesunden keinen Nutzen. Bei Typ-2-Diabetes senkte Chrom das HbA1c in Meta-Analysen um 0,55 % (25 RCTs) bzw. 0,71 % (28 Studien, Heterogenität I² 99,8 %); in einer Studie aus China lag das HbA1c unter 1.000 µg bei 6,6 % statt 8,5 %, in einer westlichen Studie mit insulinpflichtigen Patienten gab es keinen Effekt. Am ehesten sprechen stark insulinresistente Menschen an. Beim Gewicht beträgt der Effekt 0,75 bis 1,1 kg bei niedriger Evidenzqualität. Das BfR schlägt für Nahrungsergänzungsmittel höchstens 60 µg pro Tag vor.',
    benefits: [
      'Typ-2-Diabetes: HbA1c −0,55 % (Meta-Analyse, 25 RCTs) bzw. −0,71 % (28 Studien) – Einzelstudien widersprüchlich, klinische Zielwerte selten erreicht',
      'Ansprechen am ehesten bei ausgeprägter Insulinresistenz und höherem HbA1c (RCT mit Clamp-Messung)',
      'Gewicht: −1,1 kg nach 12 bis 16 Wochen (Cochrane, niedrige Evidenzqualität) bzw. −0,75 kg (Meta-Analyse, 1.316 Teilnehmer)',
      'Kohlenhydrat-Heißhunger bei atypischer Depression: Ansprechen 65 % vs. 33 % – nur Untergruppe, Hauptendpunkt verfehlt',
      'Trägt zur Aufrechterhaltung eines normalen Blutzuckerspiegels bei (zugelassene EU-Gesundheitsangabe)'
    ],
    risks: [
      'Unterzuckerung zusammen mit Insulin oder anderen Blutzuckersenkern',
      'Fallberichte zu Nierenversagen, Leberschäden und Blutarmut bei 1.200 bis 2.400 µg täglich über Monate',
      'Gleichzeitige Einnahme senkt die Aufnahme von Levothyroxin',
      'Leichte Nebenwirkungen wie wässriger Stuhl, Schwindel, Kopfschmerzen, Nesselsucht',
      'Keine Langzeitdaten zu Nutzen und Sicherheit'
    ],
    dosage: 'D-A-CH-Schätzwert 30 bis 100 µg pro Tag; die EFSA konnte keinen Bedarf festlegen. Diabetesstudien verwendeten 200 bis 1.000 µg, Gewichtsstudien 200 bis 1.000 µg Chrompicolinat. EFSA: zusätzliche Aufnahme bis 250 µg pro Tag unbedenklich; BfR-Höchstmengenvorschlag für Nahrungsergänzungsmittel: 60 µg pro Tagesdosis. Das sind Referenz- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Nicht zeitgleich mit Levothyroxin oder Säurebindern. Bei Diabetesmedikation nur nach ärztlicher Rücksprache.',
    synergies: ['inositol', 'vitamin-b-komplex'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Vollkornprodukte, Fleisch, Bierhefe, Traubensaft; Milchprodukte und zuckerreiche Lebensmittel sind chromarm',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27261273/'
  },
  {
    id: 'glutamin',
    name: 'Glutamin',
    altNames: 'L-Glutamin, Glutamin-Dipeptid, Alanyl-Glutamin',
    category: 'Aminosäure',
    tags: ['darm', 'sport', 'immun', 'regeneration'],
    short: 'Häufigste Aminosäure im Körper und Treibstoff für Darm- und Immunzellen. Für Muskelaufbau und Abwehr im Sport ohne Effekt, beim Reizdarm nach Darminfektion dagegen mit einem großen Befund in einer randomisierten Studie.',
    description: 'Glutamin bildet der Körper selbst, vor allem im Skelettmuskel; in Stresssituationen kann es bedingt essenziell werden. Für Athleten fand eine Meta-Analyse aus 25 Studien keinen Effekt auf Leistung, Körperzusammensetzung und Immunsystem. Beim Reizdarm vom Durchfalltyp nach Infektion mit erhöhter Darmdurchlässigkeit sprachen in einer RCT 79,6 % auf 5 g 3-mal täglich an, gegenüber 5,8 % unter Placebo. In den USA ist L-Glutamin seit 2017 als Arzneimittel bei Sichelzellkrankheit zugelassen, in der EU nicht. Bei beatmeten Intensivpatienten mit Multiorganversagen war die Sterblichkeit mit Glutamin höher.',
    benefits: [
      'Reizdarm vom Durchfalltyp nach Darminfektion: 79,6 % Ansprechen gegenüber 5,8 % unter Placebo nach 8 Wochen (1 RCT, 54 und 52 Auswertbare) – großer Effekt, aber nur eine Studie in einer eng definierten Gruppe',
      'Verstärkt eine Low-FODMAP-Diät bei Reizdarm: 88 % gegenüber 60 % deutliche Besserung (RCT, 50 Patienten, 6 Wochen)',
      'Sichelzellkrankheit: weniger Schmerzkrisen, Median 3,0 gegenüber 4,0 über 48 Wochen (Phase 3, 230 Patienten) – in den USA zugelassen, EMA-Bewertung negativ',
      'Weniger Muskelkater nach exzentrischem Training in einer kleinen Crossover-Studie (16 Teilnehmer); systematische Übersicht hält die Daten für unzureichend',
      'Kein Effekt auf Leistung, Körperzusammensetzung und Immunsystem bei Athleten (Meta-Analyse, 25 Studien)'
    ],
    risks: [
      'Schwerkranke Intensivpatienten mit Multiorganversagen: höhere Sterblichkeit unter Glutamin (REDOXS, 1223 Patienten) – nur in ärztlicher Absprache',
      'In der Sichelzellstudie häufiger leichte Übelkeit, Müdigkeit, Brust- und Muskelschmerzen als unter Placebo',
      'Sicherheit für Gesunde bis 14 g täglich gut belegt; höhere Mengen für Langzeitaussagen zu dünn dokumentiert',
      'Keine amtliche Höchstmenge von EFSA oder BfR'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: Reizdarm 5 g 3-mal täglich über 8 Wochen oder 15 g täglich über 6 Wochen; Sportstudien häufig 0,3 g pro Kilogramm Körpergewicht. Eine Risikobewertung (Observed Safe Level) sieht die Sicherheit für gesunde Erwachsene bis 14 g täglich als gut belegt. Eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht.',
    intake: 'Pulver in den Studien in Wasser gelöst, über den Tag verteilt.',
    synergies: ['probiotika', 'colostrum', 'whey'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Alle eiweißreichen Lebensmittel: Fleisch, Fisch, Milchprodukte, Eier, Hülsenfrüchte',
    link: 'https://pubmed.ncbi.nlm.nih.gov/30108163/'
  },
  {
    id: 'kalium',
    name: 'Kalium',
    altNames: 'Kaliumchlorid, Kaliumcitrat, Kaliumgluconat, Kaliumbicarbonat',
    category: 'Mineral',
    tags: ['herz', 'kreislauf', 'muskel', 'nerven', 'blutdruck'],
    short: 'Gegenspieler des Natriums. Senkt bei Bluthochdruck den Blutdruck; kaliumhaltiger Salzersatz senkte in einer Großstudie Schlaganfälle und Todesfälle. Vorsicht bei Nierenerkrankungen und bestimmten Blutdruckmitteln.',
    description: 'Kalium trägt zu normaler Nerven- und Muskelfunktion und zur Aufrechterhaltung eines normalen Blutdrucks bei. Eine Meta-Analyse für die WHO (22 RCTs) fand bei Hypertonie −3,49/−1,96 mmHg, bei 90 bis 120 mmol pro Tag −7,16 mmHg systolisch; in Kohorten ging mehr Kalium mit 24 % weniger Schlaganfällen einher. In SSaSS (20.995 Teilnehmer, 4,74 Jahre) senkte ein Salzersatz mit 25 % Kaliumchlorid Schlaganfälle (Rate Ratio 0,86), Herz-Kreislauf-Ereignisse und Todesfälle. Die WHO empfiehlt mindestens 3.510 mg pro Tag, viele Menschen liegen darunter. Bei Nierenerkrankung, ACE-Hemmern, Sartanen oder kaliumsparenden Diuretika droht Hyperkaliämie.',
    benefits: [
      'Senkt bei Bluthochdruck den Blutdruck um 3,49/1,96 mmHg (Meta-Analyse, 22 RCTs, hohe Evidenzqualität); bei normalem Blutdruck kein signifikanter Effekt',
      'Kaliumhaltiger Salzersatz: weniger Schlaganfälle (Rate Ratio 0,86), Herz-Kreislauf-Ereignisse und Todesfälle (SSaSS, 20.995 Hochrisikoteilnehmer)',
      'Höhere Kaliumzufuhr in Kohorten mit 24 % weniger Schlaganfällen verbunden',
      'Kaliumcitrat senkt die Neubildung kalziumhaltiger Nierensteine (Cochrane, RR 0,26)',
      'Trägt zu normaler Muskel- und Nervenfunktion bei (zugelassene EU-Gesundheitsangabe)'
    ],
    risks: [
      'Hyperkaliämie bei chronischer Nierenerkrankung, unter ACE-Hemmern, Sartanen, kaliumsparenden Diuretika und bei Typ-1-Diabetes',
      'Kaliumchlorid-Tabletten können die Magen-Darm-Schleimhaut schädigen',
      'Fallberichte zu Herzwirkungen nach 5.000 bis 7.000 mg pro Tag aus Supplementen',
      'U-förmige Dosis-Wirkung: sehr hohe Zusatzmengen können den Blutdruck bei behandelten Hypertonikern wieder erhöhen',
      'Kalium-Salzersatz nur nach ärztlicher Rücksprache bei Nierenerkrankung oder kaliumsparenden Medikamenten'
    ],
    dosage: 'Referenzwerte: WHO mindestens 3.510 mg pro Tag, EFSA 3.500 mg, D-A-CH 4.000 mg – vorrangig über Lebensmittel. Blutdruckstudien gaben meist 30 bis 140 mmol pro Tag als Supplement; der Effekt flachte oberhalb von etwa 30 mmol Zusatzmenge ab. BfR-Höchstmengenvorschlag für Nahrungsergänzungsmittel: 500 mg pro Tagesdosis; EFSA konnte keine Obergrenze ableiten. Das sind Referenz- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Am besten über Gemüse, Hülsenfrüchte, Nüsse, Kartoffeln und Obst. Präparate zu einer Mahlzeit mit ausreichend Flüssigkeit; bei Medikamenten ärztlich abklären.',
    synergies: ['magnesium', 'elektrolyte'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Bohnen und Erbsen (etwa 1.300 mg pro 100 g), Nüsse (etwa 600 mg pro 100 g), Spinat und Kohl, Kartoffeln, getrocknete Aprikosen, Linsen, Bananen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23558164/'
  },
  {
    id: 'kalzium',
    name: 'Kalzium',
    altNames: 'Calcium, Calciumcarbonat, Calciumcitrat',
    category: 'Mineral',
    tags: ['knochen', 'zahn', 'muskel', 'schwangerschaft', 'herz'],
    short: 'Baustoff der Knochen. Mit Vitamin D bei Älteren gegen Hüftfrakturen belegt, in der Schwangerschaft bei kalziumarmer Ernährung gegen Präeklampsie; der Herz-Streit um hochdosierte Tabletten ist offen.',
    description: 'Kalzium wird für normale Knochen und Zähne, Muskelfunktion und Blutgerinnung benötigt; die DGE empfiehlt Erwachsenen 1.000 mg pro Tag, Männer erreichen im Median 1.052 mg, Frauen 964 mg. Zusammen mit Vitamin D senkt es bei Älteren Hüftfrakturen (Cochrane: RR 0,84, hohe Evidenzqualität), in einer Pflegeheim-Studie um 43 %. Bei Schwangeren mit kalziumarmer Ernährung sinkt das Präeklampsie-Risiko auf RR 0,36. Bei selbstständig lebenden, gut versorgten Menschen ist der Frakturschutz schwach. Ob Supplemente das Herzinfarktrisiko leicht erhöhen, ist umstritten (Meta-Analysen mit HR 1,31 bzw. ohne Zusammenhang); das BfR empfiehlt höchstens 500 mg pro Tag aus Nahrungsergänzungsmitteln.',
    benefits: [
      'Mit Vitamin D weniger Hüftfrakturen bei Älteren (Cochrane, 9 Studien, 49.853 Teilnehmer, RR 0,84, hohe Evidenzqualität)',
      'Pflegeheimbewohnerinnen: 43 % weniger Hüftfrakturen mit 1,2 g Kalzium plus 800 IE Vitamin D3 über 18 Monate (RCT, 3.270 Frauen)',
      'Schwangerschaft bei kalziumarmer Ernährung: Präeklampsie RR 0,36 (8 Studien, 10.678 Frauen; niedrige Evidenzqualität)',
      'Verlangsamt den Knochenverlust an Hüfte (0,54 %) und Wirbelsäule (1,19 %) (Meta-Analyse, 29 RCTs)',
      'Leichte Blutdrucksenkung (−1,43/−0,98 mmHg)'
    ],
    risks: [
      'Mehr Nierensteine (WHI: HR 1,17 unter 1.000 mg plus Vitamin D über 7 Jahre)',
      'Herz-Kreislauf umstritten: Herzinfarkt HR 1,31 in einer Meta-Analyse ohne Vitamin D, andere Auswertungen ohne Zusammenhang',
      'Blähungen und Verstopfung, vor allem mit Calciumcarbonat; Kalzium-Alkali-Syndrom bei sehr hohen Carbonatdosen',
      'Hemmt die Aufnahme von Levothyroxin (4 Stunden Abstand) und Chinolon-Antibiotika (2 Stunden Abstand)',
      'Vorsicht bei Nierenerkrankung und unter Lithium'
    ],
    dosage: 'DGE-Referenzwert: 1.000 mg pro Tag für Erwachsene (13 bis 18 Jahre: 1.200 mg), möglichst über Lebensmittel. Frakturstudien verwendeten 1.000 bis 1.200 mg plus 400 bis 800 IE Vitamin D; Schwangerschaftsstudien ab 1 g, die WHO empfiehlt Schwangeren mit kalziumarmer Ernährung 1,5 bis 2 g. BfR-Höchstmengenvorschlag für Nahrungsergänzungsmittel: 500 mg pro Tag; Obergrenze der Gesamtzufuhr 2.500 mg. Das sind Referenz- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Zu einer Mahlzeit, Einzeldosen bis 500 mg werden am besten aufgenommen. Abstand zu Schilddrüsenhormonen und bestimmten Antibiotika halten.',
    synergies: ['vitamin-d3', 'vitamin-k2', 'magnesium'],
    avoid: ['eisen', 'zink'],
    evidence: 'hoch',
    sources: 'Milch, Joghurt, Käse, kalziumreiches Mineralwasser, grünes Gemüse wie Grünkohl und Brokkoli',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24729336/'
  },
  {
    id: 'l-arginin',
    name: 'L-Arginin',
    altNames: 'Arginin, Arginin-HCl, Arginin-Base',
    category: 'Aminosäure',
    tags: ['herz', 'blutdruck', 'stickoxid', 'durchblutung', 'libido'],
    short: 'Direkter Rohstoff für Stickstoffmonoxid. Senkt den Blutdruck in Meta-Analysen stabil und hilft bei leichter Erektionsstörung; für die Sportleistung umstritten, nach Herzinfarkt nicht angezeigt.',
    description: 'L-Arginin ist Substrat der NO-Synthase, die Stickstoffmonoxid für die Gefäßerweiterung bildet. Oral wird nur etwa 20 % aufgenommen, weil Arginase im Darm viel abbaut; die Vorstufe Citrullin hebt den Arginin-Spiegel im Blut stärker. Trotzdem senkt Arginin den Blutdruck: 22 RCTs ergaben systolisch minus 6,40 mmHg und diastolisch minus 2,64 mmHg. Bei leichter bis mittelgradiger Erektionsstörung fand eine Meta-Analyse aus 10 RCTs eine Odds Ratio von 3,37. Nach akutem Herzinfarkt wurde eine Studie wegen 6 Todesfällen unter Arginin gestoppt.',
    benefits: [
      'Blutdruck: systolisch −6,40 mmHg, diastolisch −2,64 mmHg (Meta-Analyse, 22 RCTs), bestätigt in einer älteren Meta-Analyse (11 RCTs, 387 Teilnehmer) und in 24-Stunden-Messungen – stabiler, moderater Effekt ohne harte Endpunkte',
      'Leichte bis mittelgradige Erektionsstörung: Odds Ratio 3,37 für Verbesserung (Meta-Analyse, 10 RCTs, 540 Patienten); PDE5-Hemmer allein wirken stärker',
      'Sportleistung: großer Effekt auf Ausdauer, kleiner auf intensive Kurzbelastung in einer Meta-Analyse (15 Studien) – stark heterogen und methodisch kritisiert',
      'Wirksamer Bereich für den systolischen Blutdruck ab 4 g täglich (Dosis-Wirkungs-Analyse)'
    ],
    risks: [
      'Nicht nach akutem Herzinfarkt: in VINTAGE MI 6 Todesfälle unter Arginin, keiner unter Placebo, Studie gestoppt',
      'Durchfall und Magenbeschwerden vor allem bei Einzelmengen über 9 g; Aufteilen der Menge hilft',
      'Kann die Wirkung von Blutdrucksenkern verstärken – ärztliche Rücksprache, ebenso bei Nieren- oder Lebererkrankung',
      'Für Kinder, Schwangere und Stillende sieht die deutsche Allgemeinverfügung einen Ausschluss vor'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: Blutdruckstudien 4 bis 24 g täglich, wirksamer Bereich ab 4 g; Studien zur Erektionsstörung 1500 bis 5000 mg. Eine Risikobewertung (Observed Safe Level) sieht die Sicherheit für gesunde Erwachsene bis 20 g täglich als gut belegt. Eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht.',
    intake: 'Größere Mengen in den Studien über den Tag verteilt, da Einzelmengen über 9 g häufiger Magen-Darm-Beschwerden auslösen.',
    synergies: ['citrullin', 'rote-bete-nitrat'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Nüsse, Kürbiskerne, Fleisch, Fisch, Hülsenfrüchte',
    link: 'https://pubmed.ncbi.nlm.nih.gov/34967840/'
  },
  {
    id: 'praebiotika',
    name: 'Präbiotika',
    altNames: 'Inulin, FOS (Fructo-Oligosaccharide), GOS (Galacto-Oligosaccharide), Oligofructose',
    category: 'Probiotika',
    tags: ['darm', 'verdauung', 'blutzucker', 'immun'],
    short: 'Futter für die Darmbakterien als Pulver oder Kapsel: Inulin, FOS und GOS. Vermehren Bifidobakterien zuverlässig und verbessern den Stuhlgang bei Verstopfung; beim Reizdarm helfen sie im Schnitt nicht.',
    description: 'Präbiotika sind Substrate, die von Darmbakterien gezielt verwertet werden und einen gesundheitlichen Nutzen bringen. Als Supplement gibt es vor allem Inulin-Fructane (Inulin, FOS) und Galacto-Oligosaccharide (GOS). Eine Meta-Analyse aus 64 Studien mit 2099 gesunden Erwachsenen zeigt mehr Bifidobakterien, besonders mit Fructanen und GOS, ohne dass sich die Vielfalt der Darmflora ändert. Für Chicorée-Inulin gibt es eine zugelassene EU-Angabe zur normalen Darmfunktion bei 12 g täglich. Diese Seite behandelt isolierte Präbiotika; Ballaststoffe aus dem Essen stehen im Tipp zu Ballaststoffen.',
    benefits: [
      'Mehr Bifidobakterien im Stuhl: SMD 0,64 (Meta-Analyse, 64 Studien, 2099 Teilnehmer) – sehr konsistent, aber ein Surrogatmarker',
      'Verstopfung: Inulin verbessert Stuhlfrequenz, Konsistenz und Transitzeit (Meta-Analyse, 5 RCTs, 252 Teilnehmer); zugelassene EU-Angabe für 12 g Chicorée-Inulin täglich',
      'Prädiabetes und Typ-2-Diabetes: Nüchternblutzucker −0,60 mmol/l, HbA1c −0,58 % (Meta-Analyse, 33 RCTs, 1346 Teilnehmer); bei Gesunden kein Effekt',
      'Höhere Kalziumaufnahme und bessere Knochenmineralisierung bei Jugendlichen mit 8 g Inulin-Fructanen täglich (1 RCT)',
      'Reizdarm: kein Nutzen gegenüber Placebo (Meta-Analyse, 11 RCTs, 729 Patienten)'
    ],
    risks: [
      'Blähbauch, Flatulenz, Bauchschmerzen und Durchfall, stark dosisabhängig – langsam steigern',
      'Bei Reizdarm verschlechterten Inulin-Fructane die Flatulenz; Fructane und GOS zählen zu den FODMAPs',
      'Inulin bei gesunden Erwachsenen bis 40 g täglich als sicher beschrieben; keine amtliche Höchstmenge von EFSA oder BfR'
    ],
    dosage: 'Studienangaben, keine persönliche Empfehlung: Die EU-Angabe bezieht sich auf 12 g Chicorée-Inulin täglich; die Diabetes-Meta-Analyse leitet 10 g täglich über mindestens 6 Wochen ab; die Kalziumstudie nutzte 8 g Inulin-Fructane täglich, GOS-Studien 3,5 bis 15,0 g täglich. Eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht.',
    intake: 'Pulver in Wasser, Joghurt oder Müsli; zur besseren Verträglichkeit mit kleinen Mengen beginnen und langsam steigern.',
    synergies: ['probiotika'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Chicorée und Chicorée-Wurzel, Topinambur, Zwiebeln, Knoblauch, Lauch (Inulin, FOS); Hülsenfrüchte (GOS)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/29757343/'
  },
  {
    id: 'vitamin-e',
    name: 'Vitamin E',
    altNames: 'Alpha-Tocopherol, Tocopherole, RRR-Alpha-Tocopherol, all-rac-Alpha-Tocopherol, E306–E309',
    category: 'Vitamin',
    tags: ['anti-oxidant', 'leber', 'gehirn', 'immun', 'augen'],
    short: 'Fettlösliches Antioxidans der Zellmembranen. Gut belegt bei Fettleberentzündung und zur Bremsung des Funktionsverlusts bei Alzheimer, zur Herz- und Krebsvorbeugung bei Gesunden ohne Nutzen.',
    description: 'Vitamin E schützt die mehrfach ungesättigten Fettsäuren in den Zellmembranen vor Oxidation; der Bedarf steigt mit deren Zufuhr. In der PIVENS-Studie verbesserten 800 IE täglich über 96 Wochen die Leberhistologie bei nichtalkoholischer Steatohepatitis bei 43 % gegenüber 19 % unter Placebo. In TEAM-AD bremsten 2000 IE den Verlust der Alltagsfunktion bei Alzheimer um 19 % pro Jahr. Große Präventionsstudien (HOPE, Women\'s Health Study, Physicians\' Health Study II) fanden keinen Schutz vor Herz-Kreislauf-Ereignissen. In SELECT erhöhten 400 IE synthetisches Vitamin E das Prostatakrebsrisiko (HR 1,17); das BfR schlägt für Nahrungsergänzungsmittel höchstens 30 mg pro Tag vor.',
    benefits: [
      'Fettleberentzündung (NASH) ohne Diabetes: histologische Verbesserung bei 43 % vs. 19 % unter Placebo (RCT PIVENS, 247 Teilnehmer, 96 Wochen) – Fibrose unverändert',
      'Alzheimer: 19 % langsamerer Verlust der Alltagsfunktion pro Jahr (RCT TEAM-AD, 613 Patienten); Kognition nicht verbessert, Evidenz aus einer Studie',
      'Pflegeheimbewohner ab 65: weniger Infekte der oberen Atemwege (44 % vs. 52 %, RCT, 1 Jahr) – kein Effekt auf untere Atemwege',
      'Bestandteil der AREDS-Kombination, die fortgeschrittene Makuladegeneration bei Hochrisikopatienten um 25 % seltener machte (Einzelbeitrag nicht isoliert)',
      'Schützt Zellen vor oxidativem Stress (zugelassene EU-Gesundheitsangabe)'
    ],
    risks: [
      'Prostatakrebs: +17 % unter 400 IE synthetischem Vitamin E täglich (SELECT, 35.533 Männer); BfR rät, Männer ab 55 Jahren darauf hinzuweisen',
      'Hirnblutungen +22 %, ischämische Schlaganfälle −10 % (Meta-Analyse, 118.765 Teilnehmer)',
      'Mit Gerinnungshemmern wie Warfarin ab 400 IE täglich erhöhtes Blutungsrisiko',
      'Hochdosierte Antioxidantien können Chemo- und Strahlentherapie abschwächen',
      'Kein Schutz vor Herzinfarkt oder Schlaganfall in großen Präventionsstudien'
    ],
    dosage: 'Referenzwerte: D-A-CH 11–15 mg pro Tag für Erwachsene, EFSA 11 mg (Frauen) bzw. 13 mg (Männer). Studien verwendeten 200 IE (Infekte im Alter), 800 IE (Fettleber) und 2000 IE (Alzheimer) – ärztlich begleitet. Umrechnung: 1 IE natürliches Vitamin E = 0,67 mg, synthetisches = 0,45 mg. BfR-Höchstmengenvorschlag für Nahrungsergänzungsmittel: 30 mg pro Tag; tolerierbare Obergrenze der Gesamtzufuhr (SCF): 300 mg pro Tag. Das sind Referenz- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Fettlöslich, daher zu einer fetthaltigen Mahlzeit. Auf dem Etikett die Form beachten: natürliches RRR- oder synthetisches all-rac-Alpha-Tocopherol.',
    synergies: ['vitamin-c', 'selen', 'omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Weizenkeimöl (20,3 mg pro Esslöffel), Sonnenblumenkerne und -öl, Mandeln, Haselnüsse, Distelöl',
    link: 'https://pubmed.ncbi.nlm.nih.gov/20427778/'
  },
  {
    id: 'tudca',
    name: 'TUDCA',
    altNames: 'Tauroursodeoxycholsäure, Tauroursodesoxycholsäure, Taurursodiol, Ursodoxicoltaurin',
    category: 'Longevity',
    tags: ['leber', 'verdauung', 'blutzucker', 'nerven'],
    short: 'Gallensäure, die bei Gallenstau-Erkrankungen so gut wirkt wie das Standardmittel UDCA und in einer kleinen Studie die Insulinwirkung in Leber und Muskel verbesserte. Bei ALS hat die große Phase-III-Studie 2024 den erhofften Nutzen nicht bestätigt.',
    description: 'TUDCA ist die mit Taurin verbundene Form der Ursodeoxycholsäure (UDCA) und in Italien als verschreibungspflichtiges Gallenmittel zugelassen (Tauro, 250 bis 750 mg täglich). Oral eingenommen verschiebt es den Gallensäurepool beim Menschen hin zu schonenden, wasserlöslichen Gallensäuren; in Zellen wirkt es als chemisches Chaperon gegen ER-Stress. Bei primär biliärer Cholangitis war es in einer RCT mit 199 Patienten gleichwertig zu UDCA, bei 20 Adipösen stieg die Insulinsensitivität in Leber und Muskel nach 4 Wochen um etwa 30 Prozent. Die ALS-Hoffnung aus einer Pilotstudie mit 34 Patienten hielt in der Phase III mit 336 Teilnehmenden nicht. Zum Leberschutz bei Gesunden, bei Alkohol oder oralen Anabolika gibt es keine kontrollierten Studien.',
    benefits: [
      'Primär biliäre Cholangitis: ALP-Senkung über 25 % bei 75,97 % unter TUDCA vs. 80,88 % unter UDCA, gleichwertig, weniger Juckreiz (doppelblinde RCT, n = 199, 24 Wochen, Ma et al. 2016)',
      'Insulinsensitivität in Leber und Muskel etwa 30 % höher nach 4 Wochen 1.750 mg pro Tag, Fettgewebe unverändert (RCT, n = 20 Adipöse, Clamp-Messung, Kars et al. 2010) – klein und kurz',
      'Verschiebt den Gallensäurepool beim Menschen zu hydrophileren Gallensäuren: Ursodeoxycholat-Anteil in der Galle 34,4 bis 41,6 % (Setchell et al. 1996)',
      'ALS-Pilotstudie: 87 % vs. 43 % Responder (RCT, n = 34, 54 Wochen, Elia et al. 2016) – in der Phase III TUDCA-ALS (n = 336, 18 Monate) nicht bestätigt',
      'Gut verträglich über bis zu 18 Monate, überwiegend leichte Magen-Darm-Beschwerden in Verum- und Placeboarm (TUDCA-ALS 2024)'
    ],
    risks: [
      'Magen-Darm-Beschwerden (Übelkeit, weicher Stuhl); in einer Registerstudie 8,1 % Abbruch deswegen',
      'Gegenanzeigen laut italienischer Packungsbeilage: Schwangerschaft, aktives Magengeschwür, röntgendichte Gallensteine, entzündete Gallenblase oder Gallenwege, Gallengangsverschluss',
      'Wechselwirkungen: Colestyramin hemmt die Aufnahme; Östrogene, hormonelle Verhütungsmittel und manche Lipidsenker wirken gegenläufig auf die Galle',
      'Hochdosierte UDCA (28 bis 30 mg/kg) verschlechterte bei primär sklerosierender Cholangitis den Verlauf – kein TUDCA-Befund, aber Grund zur Vorsicht bei hohen Dosen',
      'Kein Beleg für Leberschutz bei Gesunden, bei Alkohol oder bei oralen Anabolika'
    ],
    dosage: 'Studien verwendeten 750 mg pro Tag (primär biliäre Cholangitis, Leberzirrhose, 24 Wochen bis 6 Monate), 1.750 mg pro Tag (Insulinstudie, 4 Wochen) und 1 g zweimal täglich (ALS, 54 Wochen bis 18 Monate). Das italienische Arzneimittel Tauro nennt 5 bis 10 mg/kg, also 250 bis 750 mg täglich. Referenzwerte oder Höchstmengen von EFSA, BfR oder DGE gibt es nicht, da TUDCA kein Nährstoff ist. Das sind Studien- und Zulassungsangaben, keine Verzehrempfehlung.',
    intake: 'Laut italienischer Packungsbeilage nach den Mahlzeiten, auf mehrere Gaben verteilt. Nicht zusammen mit Colestyramin; bei Leber- oder Gallenerkrankungen nur nach ärztlicher Rücksprache.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Keine nennenswerten Lebensmittelquellen; wird in der Leber aus Ursodeoxycholsäure und Taurin gebildet',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27893675/'
  },
  {
    id: 'boswellia',
    name: 'Weihrauch (Boswellia)',
    altNames: 'Boswellia serrata, Indischer Weihrauch, Frankincense, Boswelliasäuren, AKBA, 5-Loxin, Aflapin',
    category: 'Kräuter',
    tags: ['gelenke', 'entzuendung', 'darm'],
    short: 'Das Harz des Indischen Weihrauchs lindert bei Kniearthrose Schmerz und Steifigkeit, laut Cochrane mit hoher Evidenzqualität für einen angereicherten Extrakt. Die Studien sind aber klein und kurz, die Wirkung hängt am Spezialextrakt, und bei Morbus Crohn hielt der Nutzen in der Langzeitstudie nicht.',
    description: 'Weihrauch ist das Gummiharz des Baums Boswellia serrata und ein traditionelles Mittel der ayurvedischen Medizin. Als Wirkstoffe gelten die Boswelliasäuren, vor allem AKBA: Im Labor hemmen sie die 5-Lipoxygenase, das Schlüsselenzym der Leukotrienbildung, und die Prostaglandin-E2-Synthase mPGES-1. Klinisch am besten belegt ist die Kniearthrose: Der Cochrane-Review fand für 100 mg angereicherten Extrakt über 90 Tage 17 Punkte weniger Schmerz auf einer 100-Punkte-Skala. Beim strahlenbedingten Hirnödem zeigte eine Pilotstudie mit 44 Patienten ein deutliches Signal, beim Remissionserhalt von Morbus Crohn blieb der Effekt aus. Produkte unterscheiden sich stark in Gehalt und Qualität, und die Aufnahme steigt mit einer fettreichen Mahlzeit deutlich.',
    benefits: [
      'Kniearthrose: Schmerz -17 Punkte auf 100 gegenüber Placebo, Funktion +8 Punkte, NNTB 2 (Cochrane 2014, 2 RCTs, 85 Teilnehmende, 90 Tage, hohe Evidenzqualität für angereicherten Extrakt)',
      'Meta-Analysen bestätigen weniger Schmerz und Steifigkeit: 7 RCTs mit 545 Patienten (Yu 2020); Netzwerk-Meta-Analyse über 39 RCTs: Boswellia mit der höchsten Wahrscheinlichkeit am wirksamsten bei Schmerz und Steifigkeit (Zhang 2025)',
      'Strahlenbedingtes Hirnödem: über 75 % Rückgang bei 60 % unter Boswellia gegenüber 26 % unter Placebo (doppelblinde Pilot-RCT, 44 Patienten, Kirste 2011)',
      'Kollagene Kolitis: klinische Remission 63,6 % gegenüber 26,7 % per Protokoll, nach Intention-to-treat nicht signifikant (RCT, 31 Patienten, 6 Wochen, Madisch 2007)',
      'Gut verträglich bis 52 Wochen, keine Nachteile gegenüber Placebo (Holtmeier 2011); LiverTox: unwahrscheinliche Ursache von Leberschäden (Likelihood score E)'
    ],
    risks: [
      'Leichte Magen-Darm-Beschwerden wie Übelkeit, Durchfall oder Verstopfung, dazu Sodbrennen und allergische Reaktionen',
      'Verbraucherzentrale rät von der Kombination mit Gerinnungshemmern wie Warfarin ab; im Labor beeinflussen Boswelliasäuren die Blutplättchen in beide Richtungen',
      'Starke Qualitätsschwankungen: 41 % von 17 untersuchten Produkten entsprachen nicht der Deklaration, eines enthielt keine typische Boswelliasäure (Meins 2016)',
      'Morbus Crohn: Remissionserhalt über 52 Wochen nicht besser als Placebo, 59,9 % gegenüber 55,3 % (Holtmeier 2011)',
      'Für Schwangerschaft, Stillzeit und Kinder keine belastbaren Daten'
    ],
    dosage: 'Studien verwendeten bei Kniearthrose 100 mg angereicherten Extrakt (5-Loxin oder Aflapin) oder 250 mg 5-Loxin pro Tag über 90 Tage, bei kollagener Kolitis 400 mg dreimal täglich über 6 Wochen, bei Morbus Crohn 3-mal täglich 2 Kapseln à 400 mg über 52 Wochen und beim Hirnödem 4.200 mg pro Tag. LiverTox nennt als übliche Empfehlung 250 bis 500 mg zwei- oder dreimal täglich. Höchstmengen oder Referenzwerte von EFSA, BfR oder DGE gibt es nicht, da Weihrauch kein Nährstoff ist. Die Studienergebnisse gelten für die jeweiligen Spezialextrakte und lassen sich laut AkdÄ nicht auf beliebige Produkte übertragen.',
    intake: 'Zu einer fettreichen Mahlzeit: Mit Fett stiegen die Blutspiegel der Boswelliasäuren um ein Mehrfaches. Auf ein Produkt mit angegebenem Boswelliasäure-Gehalt achten; bei Gerinnungshemmern vorher ärztlich abklären.',
    synergies: ['kurkuma'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Keine Lebensmittelquellen; Gummiharz des Weihrauchbaums Boswellia serrata',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24848732/'
  },
  {
    id: 'maca',
    name: 'Maca',
    altNames: 'Lepidium meyenii, Lepidium peruvianum, Peruanischer Ginseng, Maca-Wurzel, gelatinisierte Maca',
    category: 'Adaptogen',
    tags: ['libido', 'energie', 'stimmung'],
    short: 'Andenknolle, die in kleinen Studien das sexuelle Verlangen und die Stimmung verbesserte, ohne Testosteron oder Östradiol zu verändern. Die Studien sind klein, bei Spermienqualität und Sportleistung ist die Datenlage uneinheitlich.',
    description: 'Maca ist die Knolle eines Kreuzblütlers aus den peruanischen Anden, die dort seit langem erhitzt als Lebensmittel gegessen wird. In einer doppelblinden Studie über 12 Wochen steigerten 1,5 oder 3,0 g gelatinisierte Maca das sexuelle Verlangen gesunder Männer ab Woche 8, während LH, FSH, Prolaktin, Testosteron und Östradiol unverändert blieben. Weitere kleine RCTs zeigen Vorteile bei leichter Erektionsstörung, bei sexuellen Nebenwirkungen von Antidepressiva und bei psychischen Beschwerden in den Wechseljahren, die größte Studie mit 175 Teilnehmenden bessere Stimmung und Energie. Diskutiert werden Macamide, die in Laborversuchen das Anandamid abbauende Enzym FAAH hemmen; am Menschen ist der Mechanismus unklar. Systematische Übersichten werten die Evidenz als begrenzt, und das BfR konnte mangels Sicherheitsdaten keine unbedenkliche Verzehrsmenge ableiten.',
    benefits: [
      'Mehr sexuelles Verlangen bei gesunden Männern ab Woche 8, ohne Änderung von Testosteron oder Östradiol (doppelblinde RCT, 12 Wochen, 1,5 oder 3,0 g pro Tag)',
      'Leicht bessere Erektionsfunktion bei leichter Erektionsstörung: IIEF-5 +1,6 vs. +0,5 Punkte unter Placebo (RCT, 50 Männer, 12 Wochen); Meta-Analyse 2026 wertet die Evidenz für Maca als unzureichend',
      'Sexuelle Nebenwirkungen von Antidepressiva: Remission bei 30,0 % vs. 20,0 % unter Placebo, vor allem nach der Menopause (RCT, 45 Frauen, 3,0 g, 12 Wochen)',
      'Weniger Angst- und Depressionssymptome in den Wechseljahren ohne Hormonwirkung (2 kleine Crossover-RCTs mit 14 und 29 Frauen; Übersicht: 4 RCTs günstig, Evidenz begrenzt)',
      'Bessere Stimmung und mehr Energie (RCT, 175 Teilnehmende, 3 g Extrakt aus roter oder schwarzer Maca, 12 Wochen)'
    ],
    risks: [
      'Keine systematischen Sicherheitsstudien; das BfR konnte keine unbedenkliche Verzehrsmenge ableiten',
      'Tierversuche mit Effekten an Geschlechtsorganen und Hinweisen auf Wechselwirkungen mit Hormonwirkungen; beim Menschen bisher nicht belegt',
      'In einer 90-Tage-Studie leichter Anstieg von AST und diastolischem Blutdruck in der Maca-Gruppe',
      'Alkaloidgehalt schwankt stark zwischen Produkten (56 bis 598 ppm in Fertigprodukten)',
      'Keine Daten zu Schwangerschaft und Stillzeit; bei hormonabhängigen Erkrankungen Zurückhaltung (schwache östrogenartige Wirkung in Zellversuchen)'
    ],
    dosage: 'Studien verwendeten meist 1,5 bis 3,5 g Maca-Pulver oder -Extrakt pro Tag über 6 bis 12 Wochen, in einer Studie zur Erektionsfunktion 2.400 mg Trockenextrakt; bei SSRI-bedingter Dysfunktion wirkten 3,0 g, 1,5 g nicht. Amtliche Referenzwerte oder Höchstmengen gibt es nicht; das BfR konnte 2007 keine unbedenkliche Verzehrsmenge ableiten, damals erfasste Produkte empfahlen 400 bis 5.000 mg, meist 600 bis 2.400 mg täglich. Das sind Studien- und Marktangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien täglich über mindestens 8 bis 12 Wochen, als Pulver oder Kapseln; traditionell wird Maca nur erhitzt verzehrt, gelatinisiertes Pulver ist vorbehandelt.',
    synergies: ['safran', 'ginseng', 'tongkat-ali'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Maca-Knolle (Hypokotyl), in Peru erhitzt, als Mehl, Brei oder Getränk',
    link: 'https://pubmed.ncbi.nlm.nih.gov/12472620/'
  },
  {
    id: 'tart-cherry',
    name: 'Sauerkirsche (Tart Cherry)',
    altNames: 'Prunus cerasus, Montmorency-Kirsche, Balaton, Sauerkirschsaft, Sauerkirschkonzentrat, Schattenmorelle',
    category: 'Antioxidant',
    tags: ['regeneration', 'sport', 'schlaf', 'entzuendung', 'muskel'],
    short: 'Anthocyanreiches Konzentrat, mit dem sich die Muskelkraft nach harter Belastung schneller erholt (Meta-Analyse, 19 Studien). Beim Schlaf gibt es nur kleine Studien, bei Gicht senkte es die Harnsäure in einer kontrollierten Studie nicht.',
    description: 'Sauerkirschen (Prunus cerasus, vor allem die Sorte Montmorency) liefern Anthocyane, die im Laborversuch COX-1 und COX-2 hemmen, sowie geringe Mengen Melatonin. Eine Meta-Analyse von 19 Studien mit Athleten zeigte eine schnellere Erholung der Maximalkraft und niedrigeres CRP bis 48 Stunden, aber keinen gesicherten Effekt auf Muskelkater; eine weitere Meta-Analyse aus 10 RCTs fand einen kleinen Vorteil bei der Ausdauerleistung. Bei 20 Gesunden stiegen nach 7 Tagen Konzentrat das Melatonin im Urin und die Schlafzeit; bei Insomnie gibt es nur Pilotstudien, eine Kapselstudie mit 500 mg blieb ohne Effekt. Bei Gicht fand eine RCT mit 50 Betroffenen keine Senkung der Harnsäure, eine Meta-Analyse aus 4 RCTs nur einen kleinen Effekt. Über 3 Monate wurde Konzentrat gut vertragen.',
    benefits: [
      'Schnellere Erholung der Maximalkraft nach muskelschädigender Belastung, nach 24 h Effektstärke 1,12 und nach 48 h 1,29 (Meta-Analyse, 19 Studien; Evidenzsicherheit sehr niedrig bis moderat)',
      'Niedrigeres CRP bis 48 h nach Belastung; bei 20 Marathonläufern auch IL-6 und Harnsäure niedriger',
      'Kleiner Vorteil bei der Ausdauerleistung, SMD 0,36 (Meta-Analyse, 10 RCTs, 147 Teilnehmende)',
      'Mehr Melatonin im Urin und längere Schlafzeit bei Gesunden (RCT, 20 Teilnehmende, 7 Tage); bei Insomnie nur Pilotstudien',
      'Leicht niedrigere Harnsäure in einer Meta-Analyse aus 4 RCTs (SMD -0,22), in der RCT mit 50 Gichtpatienten aber kein Effekt'
    ],
    risks: [
      'Saft und Konzentrat enthalten Fruchtzucker; in einer Studie ein Fall erhöhten Blutzuckers möglicherweise durch das Konzentrat',
      'Kein Ersatz für eine harnsäuresenkende Gichttherapie',
      'COX-Hemmung nur im Laborversuch gezeigt; Wechselwirkungen mit Gerinnungshemmern nicht untersucht',
      'Schlafeffekte uneinheitlich; Kapseln mit 500 mg blieben in einer Studie ohne Wirkung'
    ],
    dosage: 'Studien verwendeten meist 30 mL Konzentrat zweimal täglich (bis 3 Monate), 240 mL Saft zweimal täglich (Insomnie-Pilotstudie) oder 60 mL Konzentrat als Einzeldosis; zur Regeneration meist einige Tage vor bis 48 Stunden nach der Belastung. In der Gichtstudie wurden 7,5 bis 30 ml Konzentrat zweimal täglich über 28 Tage ohne Effekt getestet. Amtliche Referenzwerte oder Höchstmengen gibt es nicht. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Konzentrat mit Wasser verdünnt, in den Regenerationsstudien über einige Tage vor und bis 48 Stunden nach einer harten Belastung; in den Schlafstudien über 7 bis 14 Tage.',
    synergies: ['magnesium', 'glycin', 'kurkuma'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Sauerkirschen (Montmorency, Balaton, Schattenmorelle), Sauerkirschsaft, ungesüßtes Konzentrat',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41945263/'
  },
  {
    id: 'laktoferrin',
    name: 'Laktoferrin',
    altNames: 'Lactoferrin, bovines Lactoferrin, Lactoferrin aus Kuhmilch, bLF',
    category: 'Protein',
    tags: ['immun', 'blut', 'darm', 'entzuendung'],
    short: 'Eisenbindendes Milcheiweiß, das in Meta-Analysen vor allem bei Kindern Atemwegsinfekte und Durchfall seltener macht und besser vertragen wird als Eisentabletten. Bei Erwachsenen ist kein Infektschutz belegt, und beim Eisenmangel war es in der größten Studie Eisensulfat unterlegen.',
    description: 'Laktoferrin ist ein Glykoprotein aus Milch, das Eisen fest bindet und zur angeborenen Abwehr gehört; in reifer Muttermilch stecken im Mittel 2,10 g pro Liter. Präparate enthalten bovines Laktoferrin aus Kuhmilch, das in der EU seit 2012 als neuartiges Lebensmittel zugelassen ist und Säuglingsnahrung zugesetzt wird. Eine Meta-Analyse von 6 RCTs mit 1.194 Teilnehmenden fand weniger Atemwegsinfekte (Odds Ratio 0,57), der Effekt zeigte sich aber bei Kindern (0,78) und nicht bei Erwachsenen (1,00). Bei Schwangerschaftsanämie war es so wirksam wie Eisensulfat und magenfreundlicher, in der größten und neuesten RCT mit 555 Frauen jedoch klar unterlegen. Die Verträglichkeit ist sehr gut, bei Milcheiweißallergie ist es ungeeignet.',
    benefits: [
      'Weniger Atemwegsinfekte, Odds Ratio 0,57 (Meta-Analyse, 6 RCTs, 1.194 Teilnehmende, Ali 2021) – Effekt bei Kindern 0,78, bei Erwachsenen 1,00 (Berthon 2022)',
      'Weniger Durchfall bei Kindern, Odds Ratio 0,56 (Meta-Analyse, 25 RCTs, Mayorga 2025)',
      'Frühgeborene: weniger späte Sepsis, RR 0,82 (Cochrane 2020, 12 RCTs, 5425 Frühgeborene, niedrige Evidenzsicherheit) – in ELFIN mit 2203 Frühgeborenen kein Effekt',
      'Schwangerschaftsanämie: Hämoglobin mindestens so gut wie unter Eisensulfat, weniger Magen-Darm-Beschwerden (Meta-Analyse, 4 RCTs, 600 Frauen, 2017)',
      'Als Zusatz zur Helicobacter-Therapie höhere Eradikationsrate, Odds Ratio 2,22 (Meta-Analyse, 5 RCTs, 682 Teilnehmende, 2009)'
    ],
    risks: [
      'Aus Kuhmilch gewonnen, bei Milcheiweißallergie ungeeignet',
      'Bei Eisenmangelanämie kein gleichwertiger Ersatz für Eisen: in der RCT mit 555 Frauen Hb -0,2 und 0,0 g/dl gegenüber 1,1 g/dl unter Eisensulfat (Huda 2026)',
      'Kein Infektschutz bei Erwachsenen belegt; Long-COVID-RCT mit 72 Teilnehmenden ohne Nutzen',
      'Rechtsstatus als Nahrungsergänzung unklar: Die EU-Zulassung als neuartiges Lebensmittel nennt Nahrungsergänzungsmittel nicht als Kategorie',
      'Wird im Magen-Darm-Trakt teilweise verdaut; wie viel intakt wirkt, ist offen'
    ],
    dosage: 'Studien bei Erwachsenen verwendeten meist 200 bis 400 mg pro Tag über 4 bis 12 Wochen, die Long-COVID-Studie 1200 mg pro Tag über 6 Wochen; Säuglings- und Kinderformeln enthielten 35 bis 833 mg pro Tag. Die EU erlaubt in Lebensmitteln für besondere medizinische Zwecke bis 3 g pro Tag; die EFSA bewertete eine mittlere Aufnahme von etwa 1,4 g pro Tag bei Erwachsenen als sicher. Referenzwerte oder eine Höchstmenge für Nahrungsergänzungsmittel gibt es nicht. Das sind Studien- und Zulassungsangaben, keine Verzehrempfehlung.',
    intake: 'Täglich über mehrere Wochen, wie in den Studien. Vergleichende Daten zum besten Einnahmezeitpunkt gibt es nicht; eine Eisenmangelanämie gehört ärztlich abgeklärt.',
    synergies: ['probiotika'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Muttermilch (reife Milch im Mittel 2,10 g pro Liter), Kuhmilch und Molke; in Säuglingsnahrung zugesetzt',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35481594/'
  },
  {
    id: 'rotschimmelreis',
    name: 'Rotschimmelreis',
    altNames: 'Red Yeast Rice, Monascus purpureus, Hongqu, Beni-koji, Monacolin K, Xuezhikang',
    category: 'Pilz',
    tags: ['herz', 'cholesterin'],
    short: 'Mit Monascus-Pilz vergorener Reis, dessen Monacolin K chemisch identisch mit dem Statin Lovastatin ist – er senkt das LDL-Cholesterin nachweislich, in einer großen Studie auch Herzinfarkte. Die EU erlaubt seit 2022 nur weniger als 3 mg Monacoline pro Tag, EFSA fand keine sichere Menge, und ein vollständiges Verbot ist 2026 beschlossen, aber noch nicht veröffentlicht.',
    description: 'Rotschimmelreis entsteht durch Fermentation von Reis mit dem Schimmelpilz Monascus purpureus und wird in Ostasien seit mehr als tausend Jahren genutzt. Der Hauptwirkstoff Monacolin K ist in seiner Lacton-Form identisch mit Lovastatin und hemmt wie alle Statine die HMG-CoA-Reduktase der Leber. Meta-Analysen zeigen gegenüber Placebo 1,02 mmol/l weniger LDL, im direkten Vergleich so viel wie Statine; in der chinesischen CCSPS-Studie mit 4.870 Herzinfarkt-Patienten sanken schwere koronare Ereignisse über 4,5 Jahre von 10,4 auf 5,7 Prozent. Diese Daten stammen aus Dosen, die in der EU heute nicht mehr erlaubt sind; für weniger als 3 mg Monacoline pro Tag gibt es kaum Wirksamkeitsdaten. EFSA und BfR sehen erhebliche Sicherheitsbedenken, weil die Nebenwirkungen denen von Lovastatin entsprechen und schon ab 3 mg pro Tag Einzelfälle schwerer Nebenwirkungen gemeldet wurden.',
    benefits: [
      'LDL-Cholesterin gegenüber Placebo 1,02 mmol/l niedriger, kein Unterschied zu Statinen (Meta-Analyse, 20 randomisierte Studien, Gerards 2015)',
      'LDL -35,82 mg/dl in 14 doppelblinden Studien über 4 bis 24 Wochen (Meta-Analyse, Trogkanis 2024)',
      'Nach Herzinfarkt weniger schwere koronare Ereignisse, 5,7 gegenüber 10,4 Prozent, Gesamtsterblichkeit 33 Prozent niedriger (RCT, 4.870 Patienten, 4,5 Jahre, Xuezhikang, Lu 2008) – ein Präparat, Dosis entsprechend 10 mg Lovastatin',
      'Bei früherer Statin-Unverträglichkeit ähnlich vertragen wie Pravastatin, LDL -30 gegenüber -27 Prozent (kleine RCT, 43 Teilnehmende, 12 Wochen, Halbert 2010)'
    ],
    risks: [
      'Nebenwirkungen wie beim Statin Lovastatin: Muskelschäden bis Rhabdomyolyse, Leberschäden; laut EFSA Einzelfälle schwerer Nebenwirkungen schon ab 3 mg Monacolinen pro Tag, keine sichere Tagesmenge ableitbar (EFSA 2018 und 2025)',
      'Wechselwirkungen über CYP3A4 (bestimmte Pilzmittel, HIV-Proteasehemmer, Ciclosporin) sowie erhöhtes Myopathierisiko mit Fibraten und Niacin ab 1 g pro Tag (BVL/BfArM)',
      'Pflichtwarnhinweis: nicht in Schwangerschaft und Stillzeit, unter 18 und über 70 Jahren, nicht mit Cholesterinsenkern oder anderen Rotschimmelreisprodukten',
      'Verunreinigungen: nierentoxisches Citrinin (Höchstgehalt 100 µg/kg); in Japan 2024 verunreinigte Chargen eines Präparats mit 2.628 Behandelten und 76 möglicherweise zusammenhängenden Todesfällen',
      'Wirksamkeit der in der EU erlaubten Menge unter 3 mg kaum untersucht; Gehalt schwankt zwischen Produkten'
    ],
    dosage: 'Studien verwendeten 2-mal täglich 0,6 g Xuezhikang (laut BVL/BfArM entsprechend 10 mg Lovastatin) über 4,5 Jahre, 2,4 g Rotschimmelreis pro Tag über 12 Wochen, 2.400 mg zweimal täglich über 12 Wochen oder 1.800 mg zweimal täglich. In der EU müssen Einzelportionen für den täglichen Verzehr weniger als 3 mg Monacoline enthalten (VO 2022/860). Ab 5 mg Monacolin K pro Tag gilt ein Produkt laut BVL/BfArM als Arzneimittel. EFSA konnte keine unbedenkliche Aufnahmemenge festlegen, das BfR rät vom Verzehr ab oder nur nach ärztlicher Rücksprache. Referenzwerte der DGE gibt es nicht, da Rotschimmelreis kein Nährstoff ist.',
    intake: 'Wenn überhaupt, nur nach ärztlicher Rücksprache und mit Kontrolle der Blutfette, nie zusammen mit Cholesterinsenkern oder mehreren Rotschimmelreisprodukten. Bei Muskelschmerzen oder Beschwerden absetzen und ärztlich abklären.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Keine üblichen Lebensmittel in Europa; in Ostasien traditionell zum Färben und Würzen von Speisen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32626016/'
  },
  {
    id: 'saegepalme',
    name: 'Sägepalme (Saw Palmetto)',
    altNames: 'Serenoa repens, Sabal serrulata, Saw Palmetto, Sägepalmenfrüchte, Sabalfrüchte, Permixon (Hexan-Extrakt)',
    category: 'Kräuter',
    tags: ['prostata', 'hormone', 'haare'],
    short: 'Extrakt aus den Früchten einer amerikanischen Palme, sehr gut verträglich und bei Prostatabeschwerden weit verbreitet; ein französischer Hexan-Extrakt besserte die Beschwerden in einer großen Studie so stark wie Tamsulosin. Die unabhängigen Placebo-Studien und der Cochrane-Review 2023 fanden aber kaum einen spürbaren Unterschied zu Placebo.',
    description: 'Die Sägepalme (Serenoa repens) wächst in Florida und im Südosten der USA; ihr fettiger Fruchtextrakt besteht bis zu 90 Prozent aus freien Fettsäuren, denen eine Hemmung der 5-Alpha-Reduktase und antiandrogene sowie entzündungshemmende Effekte zugeschrieben werden – die EMA nennt den Wirkmechanismus unbekannt. Für den französischen Hexan-Extrakt zeigt eine Meta-Analyse gegenüber Placebo 0,64 weniger nächtliche Toilettengänge und 2,75 ml/s mehr Harnfluss, in der PERMAL-Studie mit 704 Männern sank der Symptomscore über 12 Monate so stark wie unter Tamsulosin. Der Cochrane-Review 2023 mit 27 Studien fand dagegen für Sägepalme allein kaum einen Unterschied zu Placebo, und die großen US-Studien STEP und CAMUS blieben ohne Effekt, auch mit dreifacher Dosis. Unbestritten ist die gute Verträglichkeit ohne Einfluss auf Sexualfunktion und PSA-Wert. Die meisten Produkte in Deutschland sind ethanolische Extrakte, der besser untersuchte Hexan-Extrakt wird hier laut Leitlinie nicht angeboten.',
    benefits: [
      'Hexan-Extrakt: 0,64 weniger nächtliche Toilettengänge und Harnfluss +2,75 ml/s gegenüber Placebo (Meta-Analyse, 27 Studien, 5.800 Patienten, Vela-Navarrete 2018, herstellernah)',
      'Hexan-Extrakt 320 mg so wirksam wie Tamsulosin 0,4 mg: Symptomscore in beiden Gruppen -4,4 Punkte, weniger Ejakulationsstörungen (RCT ohne Placebo, 704 Männer, 12 Monate, PERMAL 2002)',
      'Nebenwirkungen nicht häufiger als unter Placebo (Cochrane 2023: RR 1,01, 12 Studien, 2.399 Teilnehmer); PSA-Wert unverändert auch bei 960 mg pro Tag (CAMUS, Andriole 2013)',
      'Haarausfall: erste positive Hinweise aus 5 kleinen RCTs und 2 Kohortenstudien, oft Kombinationspräparate (Evron 2020); eine herstellernahe RCT mit 60 Teilnehmenden (Ablon 2026)'
    ],
    risks: [
      'Wirkung auf Prostatabeschwerden unsicher: Cochrane 2023 fand für Sägepalme allein kaum einen Unterschied zu Placebo (IPSS -0,90 Punkte, 9 Studien, 1.681 Teilnehmer, hohe Vertrauenswürdigkeit); STEP und CAMUS ohne Effekt',
      'Keine Wirkung auf Prostatavolumen und Abflussbehinderung; bei deutlich obstruktiven Befunden laut S2e-Leitlinie nicht einsetzen – Beschwerden vorher ärztlich abklären',
      'Häufig Bauch- und Kopfschmerzen, gelegentlich Übelkeit, erhöhte Leberwerte, Hautausschlag, reversible Gynäkomastie (EMA-Monografie); seltene Leberschäden laut LiverTox möglich, Rolle unsicher',
      'Einige Verdachtsfälle erhöhter INR-Werte mit Warfarin (EMA)',
      'Nur für erwachsene Männer vorgesehen; keine Daten zu Schwangerschaft und Fruchtbarkeit'
    ],
    dosage: 'Die EU-Monografie der EMA nennt für den Hexan-Extrakt 320 mg einmal täglich oder 160 mg zweimal täglich, für ethanolische Extrakte 320 mg einmal täglich; Langzeitanwendung ist möglich. Studien verwendeten 320 mg Hexan-Extrakt pro Tag über 12 Monate (PERMAL), 160 mg zweimal täglich über 1 Jahr (STEP) und 320 bis 960 mg pro Tag über 72 Wochen (CAMUS); in Studien zum Haarausfall 100 bis 320 mg. Höchstmengen oder Referenzwerte von EFSA, BfR oder DGE gibt es nicht, da Sägepalme kein Nährstoff ist. Studienergebnisse gelten für den jeweiligen Extrakt und sind laut Leitlinie nicht auf andere Produkte übertragbar.',
    intake: 'Mit einer Mahlzeit, da Magen-Darm-Beschwerden laut EMA besonders auf nüchternen Magen auftreten. Prostatabeschwerden vorher ärztlich abklären lassen; bei Blut im Urin, Fieber, Schmerzen beim Wasserlassen oder Harnverhalt zum Arzt.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Keine Lebensmittelquellen; Früchte der Sägepalme Serenoa repens',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37345871/'
  },
  {
    id: 'astragalus',
    name: 'Astragalus & Cycloastragenol (TA-65)',
    altNames: 'Astragalus membranaceus, Astragalus mongholicus, Tragant-Wurzel, Huang Qi, Radix Astragali, Cycloastragenol, TA-65, TA-65MD, Astragaloside',
    category: 'Adaptogen',
    tags: ['anti-aging', 'longevity', 'immun'],
    short: 'Wurzel aus der traditionellen chinesischen Medizin, deren Inhaltsstoff Cycloastragenol (als TA-65 vermarktet) die Telomerase aktiviert und in einer RCT die Telomere in Blutzellen verlängerte. Ob daraus mehr Gesundheit oder ein längeres Leben wird, ist offen; reines Cycloastragenol ist in der EU ein noch nicht zugelassenes neuartiges Lebensmittel.',
    description: 'Astragalus ist die getrocknete Wurzel von Astragalus membranaceus, laut Cochrane eines der meistverwendeten Kräuter der traditionellen chinesischen Medizin, mit Astragalosiden und Polysacchariden als Hauptinhaltsstoffen. Der Inhaltsstoff Cycloastragenol aktiviert in Zellen und bei Mäusen die Telomerase und verlängert kritisch kurze Telomere; weibliche Mäuse hatten danach bessere Zuckerwerte, Knochen und Haut, lebten aber nicht länger. In einer doppelblinden Studie mit 117 Menschen verlängerten sich die Telomere unter der niedrigen TA-65-Dosis über 12 Monate um 530 Basenpaare, unter Placebo verkürzten sie sich um 290. Eine Meta-Analyse von 8 RCTs bestätigt längere Telomere, findet aber keine Verbesserung bei Gebrechlichkeit oder Entzündung; die meisten Studien finanzierte der Hersteller. Die Wurzel selbst zeigt in überwiegend kleinen chinesischen Studien günstige Immun- und Nierenwerte bei niedriger Studienqualität.',
    benefits: [
      'Längere Telomere in Blutzellen: +530 bp unter der niedrigen TA-65-Dosis gegenüber -290 bp unter Placebo (doppelblinde RCT, 117 Teilnehmende, 12 Monate, 2016, herstellerfinanziert); Meta-Analyse 8 RCTs, 750 Teilnehmende: SMD 0,47 (2025)',
      'Nach Herzinfarkt mehr Lymphozyten (+285 Zellen/µl) und hsCRP 62 % niedriger; primärer Endpunkt (gealterte CD8-Zellen) allerdings verfehlt (RCT, 90 Patienten über 65, 12 Monate, 2023)',
      'Telomerase-Aktivierung telomeraseabhängig gezeigt: bessere Funktion menschlicher Abwehrzellen im Labor (2008), bei Mäusen längere kurze Telomere, bessere Glukosetoleranz, Knochen und Haut ohne mehr Krebs (2011)',
      'Wurzel: weniger entzündungsfördernde Zytokine, mehr CD3-Zellen (Meta-Analyse, 19 Studien, 1094 Teilnehmende, starke Heterogenität); bei Nierenerkrankung Proteinurie -0,53 g/24 h (Cochrane, 22 Studien, 1323 Teilnehmende, niedrige Qualität)',
      'Kleine RCTs mit günstigen Surrogatwerten: Makula-Empfindlichkeit +0,97 dB (38 Patienten, 1 Jahr), höheres HDL und niedrigeres TNF-alpha beim metabolischen Syndrom (40 Patienten, Crossover, 2 × 12 Wochen)'
    ],
    risks: [
      'Cycloastragenol (≥ 98 %) und damit TA-65 ist in der EU ein noch nicht zugelassenes neuartiges Lebensmittel (Novel-Food-Katalog, 2026); legal als NEM sind nur Wurzel und alkoholische Wurzelextrakte',
      'Theoretisches Krebsrisiko: Telomerase ist in den meisten Tumoren reaktiv; Langzeitdaten fehlen, Studien schlossen Menschen mit Krebs in der Vorgeschichte aus',
      'Längere Telomere ohne belegten Gesundheitsgewinn: keine Besserung von Gebrechlichkeit und Entzündung in der Meta-Analyse, keine Lebensverlängerung bei Mäusen; überwiegend herstellerfinanzierte Studien mit größeren Effekten',
      'Leichte Magen-Darm-Beschwerden bei 12,4 % unter TA-65 (Meta-Analyse, 12 Monate)',
      'Bei Autoimmunerkrankungen meiden, mögliche Wechselwirkung mit Immunsuppressiva; nicht in Schwangerschaft und Stillzeit (WHO, NCCIH)'
    ],
    dosage: 'Nur für die Wurzel: Die WHO-Monografie (1999) nennt nach dem chinesischen Arzneibuch 9 bis 30 g getrocknete Wurzel pro Tag oral; nach dem NCCIH scheinen bis zu 60 g pro Tag über bis zu 4 Monate keine Nebenwirkungen zu verursachen. Die klinischen Wurzelstudien verwendeten sehr unterschiedliche Zubereitungen, eine einheitliche Studiendosis gibt es nicht. Amtliche Referenzwerte oder Höchstmengen für Nahrungsergänzungsmittel existieren nicht. Für Cycloastragenol und TA-65 nennen wir keine Mengen, weil reines Cycloastragenol in der EU ein nicht zugelassenes neuartiges Lebensmittel ist. Das sind Monografie- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'Traditionell als Abkochung der getrockneten Wurzel, heute meist als Pulver oder Extrakt in Kapseln; die Studien liefen über Wochen bis 12 Monate.',
    synergies: ['ginseng', 'reishi'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Getrocknete Astragalus-Wurzel (Radix Astragali, Huang Qi); als Tee oder Abkochung, in üblichen Lebensmitteln sonst kaum enthalten',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26950204/'
  },
  {
    id: 'beta-glucan',
    name: 'Beta-Glucan',
    altNames: 'β-Glucan, Hafer-Beta-Glucan, Gersten-Beta-Glucan, Haferkleie, Hefe-Beta-Glucan, Beta-1,3/1,6-Glucan, Wellmune, Yestimun, Lentinan',
    category: 'Probiotika',
    tags: ['cholesterin', 'herz', 'blutzucker', 'immun', 'darm'],
    short: 'Beta-Glucan aus Hafer und Gerste senkt das LDL-Cholesterin, belegt in Dutzenden RCTs und von der EU als Gesundheitsangabe zugelassen. Hefe- und Pilz-Glucane werden fürs Immunsystem beworben, dort sind die Studien kleiner und uneinheitlich.',
    description: 'Beta-Glucane sind unverdauliche Zuckerketten aus Zellwänden von Getreide, Hefe und Pilzen, und die Quelle entscheidet über die Wirkung. Lösliches Beta-Glucan aus Hafer und Gerste macht den Speisebrei zähflüssig, bindet Gallensäuren und senkt so das LDL-Cholesterin: in Meta-Analysen um 0,19 bis 0,25 mmol/l bei mindestens 3 g pro Tag. Mit einer Mahlzeit gegessen, dämpft es außerdem den Blutzuckeranstieg; für beides gibt es zugelassene EU-Angaben. Die Wirkung hängt an langen Ketten: Niedermolekulares Beta-Glucan wirkte nur halb so stark, und isolierte Extrakte schnitten schlechter ab als ganzer Hafer. Hefe-Beta-Glucan zeigte in einer Meta-Analyse von 13 Studien weniger Atemwegsinfekte, die Studien sind aber klein und heterogen.',
    benefits: [
      'LDL-Cholesterin -0,25 mmol/l mit mindestens 3 g Hafer-Beta-Glucan pro Tag (Meta-Analyse, 28 RCTs, 2 bis 12 Wochen, Whitehead 2014); -0,19 mmol/l in der größten Auswertung (58 RCTs, 3.974 Teilnehmende, Ho 2016)',
      'Gersten-Beta-Glucan senkt LDL um 0,25 mmol/l (Meta-Analyse, 14 RCTs, 615 Teilnehmende, Ho 2016); EFSA bestätigt Ursache-Wirkungs-Beziehung ab 3 g pro Tag',
      'Dämpft den Blutzuckeranstieg nach Mahlzeiten (zugelassene EU-Angabe ab 4 g pro 30 g verfügbare Kohlenhydrate); bei Typ-2-Diabetes HbA1c -0,21 Prozentpunkte (Meta-Analyse, 4 Studien, 350 Patienten, Shen 2016)',
      'Hefe-Beta-Glucan: weniger Atemwegsinfekte, OR 0,345 (Meta-Analyse, 13 RCTs, Zhong 2021), aber hohe Heterogenität; größte Einzelstudie mit 299 Teilnehmenden nur mildere Symptome in der ersten Infektwoche (Dharsono 2019)',
      'Mechanismus am Menschen gezeigt: native Haferkleie steigerte die Gallensäureausscheidung um 144 % (Crossover, 9 Teilnehmende, Ellegård 2007)'
    ],
    risks: [
      'Blähungen und weicher Stuhl möglich, vor allem zu Beginn; in einer Studie mit 3,5 g pro Tag 3 Abbrüche wegen Durchfall (Mysonhimer 2022)',
      'Wirkung produktabhängig: niedermolekulares Beta-Glucan halb so wirksam (Wolever 2010), isolierte Extrakte ohne Effekt auf Blutzucker (He 2016)',
      'Immunwirkung nicht als EU-Angabe zugelassen; EFSA lehnte 2010 eine Immunangabe für ein Hefe-Glucan ab',
      'Nur Surrogatmarker (LDL) untersucht, keine Studien zu Herzinfarkt oder Sterblichkeit mit Beta-Glucan',
      'Belastbare Humandaten zu Wechselwirkungen mit Medikamenten fehlen; Cholesterinsenker nicht eigenmächtig ersetzen'
    ],
    dosage: 'Die EU-Angaben nennen 3 g Beta-Glucan aus Hafer oder Gerste pro Tag für den Cholesterinspiegel (mindestens 1 g pro Portion) und mindestens 4 g pro 30 g verfügbare Kohlenhydrate für den geringeren Blutzuckeranstieg nach einer Mahlzeit. Studien zu Hafer verwendeten 3,0 bis 12,4 g pro Tag über 2 bis 12 Wochen (Median 3,5 g), zu Gerste im Median 6,5 bis 6,9 g pro Tag. Hefe-Beta-Glucan wurde mit 250 mg pro Tag über 90 Tage und 900 mg pro Tag über 16 Wochen untersucht; die EFSA bewertete es für Nahrungsergänzungsmittel bis 375 mg pro Tag als sicher. Höchstmengen von BfR oder DGE gibt es nicht.',
    intake: 'Hafer-Beta-Glucan am besten mit den Mahlzeiten und über den Tag verteilt, bevorzugt als Haferkleie oder Hafer, da lange, lösliche Ketten entscheidend sind. Langsam steigern und ausreichend trinken.',
    synergies: ['omega-3', 'citrus-bergamot', 'praebiotika'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Haferkleie, Haferflocken, Gerste; Backhefe; Speisepilze wie Shiitake',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27724985/'
  },
  {
    id: 'egcg',
    name: 'Grüntee-Extrakt (EGCG)',
    altNames: 'Epigallocatechingallat, Epigallocatechin-3-gallat, EGCG, Grüntee-Catechine, Green Tea Extract, GTE, Camellia sinensis, Polyphenon E, Teavigo',
    category: 'Antioxidant',
    tags: ['anti-oxidant', 'herz', 'cholesterin', 'blutdruck', 'fettverbrennung'],
    short: 'Grüntee-Extrakt senkt LDL-Cholesterin und Blutdruck leicht und steigert den Energieverbrauch ein wenig, beim Abnehmen fand Cochrane außerhalb Japans aber keinen relevanten Effekt. Ab 800 mg EGCG pro Tag stiegen die Leberwerte, deshalb gilt in der EU seit 2022 eine Obergrenze mit Warnhinweisen.',
    description: 'EGCG ist das häufigste Catechin im grünen Tee; Extrakte konzentrieren es, oft entkoffeiniert, hochgereinigtes EGCG mit mindestens 90 % ist ein eigenes zugelassenes Novel Food. Meta-Analysen zeigen kleine Effekte auf Blutfette (31 RCTs, LDL -4,55 mg/dl) und Blutdruck (13 Studien, -2,08/-1,71 mmHg); in der Stoffwechselkammer stieg der Energieverbrauch mit EGCG plus Koffein um 4 %. Beim Gewicht bleibt der Effekt klein und hängt am Koffein, eine große Jahresstudie verfehlte ihren Krebsvorsorge-Endpunkt, und im Interventions Testing Program verlängerte Grüntee-Extrakt das Mäuseleben nicht. Die EFSA fand 2018 ab 800 mg EGCG pro Tag erhöhte Leberwerte und konnte für Extrakte keine sichere Dosis benennen. Die EU-Verordnung 2022/2340 begrenzt die Tagesportion daher auf unter 800 mg EGCG und schreibt Warnhinweise vor; die Extrakte stehen zusätzlich unter Unionsprüfung.',
    benefits: [
      'LDL-Cholesterin -4,55 mg/dl, Gesamtcholesterin -4,66 mg/dl (Meta-Analyse, 31 RCTs, 3.321 Teilnehmende, Xu 2020); HDL und Triglyceride unverändert',
      'Blutdruck -2,08 mmHg systolisch und -1,71 mmHg diastolisch, stärker bei Extrakt und erhöhtem Ausgangswert (Meta-Analyse, 13 Studien, Khalesi 2014)',
      '24-Stunden-Energieverbrauch +4 % mit EGCG plus Koffein, Koffein allein ohne Effekt (Stoffwechselkammer, 10 Männer, Dulloo 1999)',
      'Grüner Tee als Getränk: 5 oder mehr Tassen pro Tag mit geringerer Gesamtsterblichkeit verbunden, HR 0,77 bei Frauen, 0,88 bei Männern (Kohorte, 40.530 Teilnehmende, Kuriyama 2006; Tee, nicht Extrakt)',
      'Sicherheit gut untersucht: Jahres-RCT mit 1.075 Frauen und 843 mg EGCG pro Tag, Nebenwirkungen insgesamt nicht häufiger als unter Placebo (Dostal 2015)'
    ],
    risks: [
      'Leber: ALT-Anstieg bei 6,7 % gegenüber 0,7 % unter 843 mg EGCG pro Tag über 1 Jahr (Dostal 2015); LiverTox Likelihood score A, mehr als 100 Fälle, auch tödliches Leberversagen',
      'EFSA 2018: keine sichere Dosis für Extrakte bestimmbar; Fallberichte ab 140 mg EGCG pro Tag (USP 2020); nüchterne Einnahme als Einmalgabe erhöht die Blutspiegel deutlich',
      'Nicht für Schwangere, Stillende und unter 18-Jährige, nicht nüchtern, nicht zusammen mit anderen Grüntee-Produkten am selben Tag (EU-Pflichthinweise)',
      'Wechselwirkungen: Grüntee senkte die Blutspiegel des Betablockers Nadolol um 85 % (Misaka 2014)',
      'Abnehmen: Cochrane außerhalb Japans -0,04 kg, nicht signifikant (Jurgens 2012)'
    ],
    dosage: 'Studien verwendeten 843 mg EGCG pro Tag über 12 Monate (Minnesota Green Tea Trial), 800 mg einmal oder 400 mg zweimal täglich über 4 Wochen (Chow 2003) und 90 mg EGCG mit 50 mg Koffein zu jeder Mahlzeit (Dulloo 1999). Rechtlich gilt in der EU seit VO 2022/2340: Eine Tagesportion muss weniger als 800 mg EGCG aus Grüntee-Extrakt enthalten, der EGCG-Gehalt je Portion muss angegeben sein. Die EFSA konnte für Extrakte keine sichere Dosis bestimmen; unter 800 mg EGCG pro Tag fand sie in Studien bis 12 Monate keine Lebertoxizität, aber einen Einzelproduktfall bei 375 mg. Zum Vergleich: Grüner Tee als Getränk liefert im Schnitt 90 bis 300 mg EGCG pro Tag.',
    intake: 'Immer zu einer Mahlzeit und nicht als große Einzelgabe, nie auf nüchternen Magen. Am selben Tag keine weiteren Grüntee-Produkte; bei Lebererkrankungen, Schwangerschaft, Stillzeit und unter 18 Jahren nicht verwenden.',
    synergies: ['koffein', 'l-theanin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Grüner Tee (Camellia sinensis) als Aufguss, im Schnitt 90 bis 300 mg EGCG pro Tag bei üblichem Konsum in der EU',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32625874/'
  },
  {
    id: 'forskolin',
    name: 'Forskolin (Coleus forskohlii)',
    altNames: 'Coleus forskohlii, Plectranthus forskohlii, Plectranthus barbatus, Indische Buntnessel, Buntnessel, Colforsin, ForsLean, Forcslim',
    category: 'Kräuter',
    tags: ['fettverbrennung', 'stoffwechsel', 'blutzucker'],
    short: 'Wurzelextrakt der Indischen Buntnessel, dessen Wirkstoff Forskolin im Labor den Botenstoff cAMP anschaltet; in einer kleinen Studie sank bei übergewichtigen Männern die Fettmasse und das freie Testosteron stieg. Andere kleine Studien fanden keinen Gewichtsverlust, alle dauerten höchstens 12 Wochen.',
    description: 'Forskolin ist ein Diterpen aus der Wurzel von Coleus forskohlii, einer Pflanze der ayurvedischen Medizin; die Extrakte sind meist auf 10 Prozent Forskolin eingestellt. Im Labor aktiviert es die Adenylatcyclase direkt und erhöht den Botenstoff cAMP, der in Fettzellen den Fettabbau antreibt; ein wasserlösliches Derivat, Colforsin-Daropat, wird in Japan bei akuter Herzinsuffizienz eingesetzt. In einer RCT mit 30 übergewichtigen Männern sanken über 12 Wochen Fettmasse und Körperfettanteil stärker als unter Placebo, das Körpergewicht blieb gleich. Bei 23 Frauen gab es keinen Gewichtsverlust, bei 30 Erwachsenen unter Diät keinen Gewichtsunterschied, aber bessere Insulinwerte, und eine quasi-randomisierte Studie mit 60 Übergewichtigen fand 1,93 kg weniger als unter Placebo. Wie viel Forskolin nach oraler Einnahme im Körper ankommt, ist kaum untersucht; der Extrakt aktiviert in Tierversuchen Leberenzyme, die Medikamente abbauen.',
    benefits: [
      'Weniger Fettmasse und Körperfettanteil, mehr Knochenmasse und freies Testosteron, Körpergewicht unverändert (RCT, 30 übergewichtige Männer, 12 Wochen, 250 mg 10-%-Extrakt zweimal täglich, Godard 2005) – klein, nicht repliziert',
      'Gewicht −1,93 kg und Taille −1,83 cm gegenüber Placebo (quasi-randomisierte Doppelblindstudie, 60 Übergewichtige, 12 Wochen, Channangihalli Thimmegowda 2026) – Herstellerpräparat',
      'Nüchterninsulin 9,6 → 6,1 mU/l unter Extrakt vs. 6,8 → 8,5 mU/l unter Placebo, HOMA-IR verbessert, kein Gewichtsunterschied (RCT, 30 Erwachsene mit Diät, 12 Wochen, Loftus 2015)',
      'Weniger Hunger, Gewichtszunahme tendenziell gebremst, kein Gewichtsverlust (RCT, 23 Frauen, 12 Wochen, Henderson 2005, teilweise vom Hersteller finanziert)',
      'Wirkprinzip gut beschrieben: direkte Aktivierung der Adenylatcyclase (Seamon 1981); Derivat Colforsin-Daropat in Japan bei akuter Herzinsuffizienz im Einsatz'
    ],
    risks: [
      'Durchfall häufigste Nebenwirkung, dosisabhängig: 10,5 % der Nutzer in einer japanischen Befragung mit Nebenwirkungen, 81,3 % davon Durchfall (Nishijima 2019)',
      'Wechselwirkungen: Forskolin aktiviert PXR und induziert CYP3A (Ding 2005), CYP3A4-mRNA 3,9-fach in humanisierten Mäusen (Adachi 2024); in Mäusen abgeschwächte Warfarin-Wirkung (Yokotani 2012)',
      'Dosisabhängige Leberschäden durch den Extrakt in Mäusen, nicht durch reines Forskolin (Virgona 2013) – beim Menschen in Studien bis 12 Wochen keine auffälligen Leberwerte',
      'Studienlage klein und widersprüchlich: 4 RCTs mit 23 bis 60 Teilnehmenden, höchstens 12 Wochen, keine Meta-Analyse',
      'Keine Daten zu Schwangerschaft und Stillzeit'
    ],
    dosage: 'Die Studien zum Körpergewicht verwendeten 250 mg eines auf 10 % Forskolin standardisierten Extrakts zweimal täglich über 12 Wochen; die Asthma-Studien 10 mg Forskolin pro Tag über 2 bis 6 Monate. Eine japanische Befragung schätzte weniger als 250 mg Extrakt pro Tag als sicher bezüglich Durchfall, 500 mg pro Tag als vermutlich akzeptabel. Höchstmengen oder Referenzwerte von EFSA, BfR oder DGE gibt es nicht, da Forskolin kein Nährstoff ist. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In einer Studie 30 Minuten vor den Hauptmahlzeiten, zweimal täglich. Bei Einnahme von Medikamenten, besonders Gerinnungshemmern, vorher ärztlich abklären.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Keine Lebensmittelquellen; Wurzel der Indischen Buntnessel (Coleus forskohlii)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/16129715/'
  },
  {
    id: 'l-tryptophan',
    name: 'L-Tryptophan',
    altNames: 'Tryptophan, Trp, essenzielle Aminosäure, Serotonin-Vorstufe',
    category: 'Aminosäure',
    tags: ['schlaf', 'stimmung', 'entspannung'],
    short: 'Essenzielle Aminosäure und Rohstoff für Serotonin und Melatonin, in Deutschland als rezeptfreies Arzneimittel zur Erleichterung des Einschlafens zugelassen. Eine Meta-Analyse zeigt eine kürzere Wachzeit in der Nacht, doch die Schlafstudien sind meist klein und alt, und bei der Stimmung ist das Bild gemischt.',
    description: 'L-Tryptophan kommt in allen eiweißhaltigen Lebensmitteln vor; mit der normalen Ernährung nimmt man etwa 0,5 bis 2 g pro Tag auf, und aus 60 mg Tryptophan bildet der Körper etwa 1 mg Niacin. Ins Gehirn gelangt es über einen Transporter, den es sich mit anderen großen neutralen Aminosäuren teilt; steigt Tryptophan im Blut, steigen Aufnahme und Serotoninbildung. Eine Meta-Analyse aus 4 Studien fand eine kürzere Wachzeit nach dem Einschlafen, deutlicher ab 1 g, und bei der prämenstruellen dysphorischen Störung besserten 6 g pro Tag in der zweiten Zyklushälfte die Stimmung um 34,5 gegenüber 10,4 Prozent unter Placebo. Die übrigen Schlafstudien stammen überwiegend aus den Jahren 1979 bis 1987 und widersprechen sich teilweise, bei Gesunden fanden 4 von 11 Stimmungsstudien einen Effekt. Wichtigste Einschränkung ist das Risiko eines Serotonin-Syndroms zusammen mit Antidepressiva.',
    benefits: [
      'Kürzere Wachzeit nach dem Einschlafen, mit mindestens 1 g deutlicher als mit weniger (Meta-Analyse aus 4 Studien, Sutanto 2022); andere Schlafparameter unverändert',
      '1 g verkürzte die Einschlafzeit bei leichten Schlafstörungen (Laborstudie, 15 Personen, Hartmann 1979); in Deutschland als Arzneimittel zur Erleichterung des Einschlafens zugelassen',
      'Prämenstruelle dysphorische Störung: Stimmungsbeschwerden um 34,5 Prozent gebessert gegenüber 10,4 Prozent unter Placebo (RCT, 37 gegen 34 Frauen, 3 Zyklen, Steinberg 1999)',
      'Stimmung bei Gesunden: 4 von 11 RCTs mit weniger negativen und mehr positiven Gefühlen (systematische Übersicht, Kikuchi 2021) – uneinheitlich',
      'Kurzzeitig gut verträglich: bis 5 g pro Tag über je 21 Tage ohne Nebenwirkungen (Crossover-RCT, 17 gesunde Frauen, Hiratsuka 2013)'
    ],
    risks: [
      'Serotonin-Syndrom mit MAO-Hemmern, Serotonin-Wiederaufnahmehemmern und bestimmten Appetitzüglern; Vorsicht bei Lithium, trizyklischen Antidepressiva, Dextromethorphan; Levodopa-Wirkung kann nachlassen (Kalma-Gebrauchsinformation)',
      'Schwindel, Kopfschmerzen, Müdigkeit am nächsten Morgen, Lichtempfindlichkeit; Reaktionsvermögen und Fahrtüchtigkeit können eingeschränkt sein',
      'Nicht bei schweren Leber- oder Nierenerkrankungen, nicht in Schwangerschaft und Stillzeit, nicht für Kinder und Jugendliche',
      'Historisch: 1.531 Fälle von Eosinophilie-Myalgie-Syndrom mit 27 Todesfällen in den USA bis Juli 1990 durch verunreinigtes Tryptophan eines Herstellers (Swygert 1990; Kilbourne 1996) – daher Reinheit nach Europäischem Arzneibuch verlangt',
      'Keine kontrollierten Langzeitdaten; Schlafstudien klein, alt und teils widersprüchlich'
    ],
    dosage: 'Studien verwendeten beim Schlaf 1 g (Hartmann 1979) bis 2 g (Demisch 1987) am Abend; die Meta-Analyse fand ab 1 g deutlichere Effekte. In Stimmungsstudien mit Gesunden wurden 0,14 bis 3 g pro Tag genutzt, bei prämenstrueller Dysphorie 6 g pro Tag in der zweiten Zyklushälfte; bis 5 g pro Tag über 21 Tage blieben ohne Nebenwirkungen. Das zugelassene Arzneimittel sieht 1 g pro Tag vor, nach ärztlicher Rücksprache bis 2 g, 20 bis 30 Minuten vor dem Schlafengehen und mit ärztlicher Prüfung nach 3 bis 4 Wochen. Für Nahrungsergänzungen hat das BVL 2014 eine Tagesmenge von höchstens 500 mg festgelegt. Die normale Ernährung liefert etwa 0,5 bis 2 g pro Tag; eine Höchstmenge von EFSA oder BfR gibt es nicht.',
    intake: 'In den Schlafstudien und laut Gebrauchsinformation am Abend, kurz vor dem Schlafengehen. Wer Antidepressiva oder andere Psychopharmaka nimmt, klärt die Einnahme vorher ärztlich.',
    synergies: [],
    avoid: ['5-htp'],
    evidence: 'mittel',
    sources: 'Alle eiweißhaltigen Lebensmittel; besonders reich ist das Molkenprotein Alpha-Lactalbumin',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33942088/'
  },
  {
    id: 'moenchspfeffer',
    name: 'Mönchspfeffer (Vitex agnus-castus)',
    altNames: 'Vitex agnus-castus, Keuschlamm, Keuschlammfrüchte, Chasteberry, Agni casti fructus, Ze 440, BNO 1095',
    category: 'Kräuter',
    tags: ['hormone', 'frauen', 'stimmung'],
    short: 'Früchte eines Mittelmeerstrauchs, eines der am besten untersuchten Pflanzenmittel beim prämenstruellen Syndrom: In doppelblinden Studien halbierten sich die Beschwerden deutlich häufiger als unter Placebo, auch bei zyklischen Brustschmerzen zeigt sich ein Effekt. Viele Studien sind methodisch schwach, und die Ergebnisse gelten für bestimmte Extrakte.',
    description: 'Mönchspfeffer (Vitex agnus-castus) wird aus den getrockneten Früchten gewonnen; in Deutschland gibt es ihn als rezeptfreies pflanzliches Arzneimittel für Zyklusunregelmäßigkeiten, prämenstruelle Beschwerden und Brustspannen und als Nahrungsergänzung. Diterpene aus dem Extrakt aktivieren im Zellmodell Dopamin-D2-Rezeptoren und sollen so die Prolaktinausschüttung bremsen; die EMA nennt den Wirkmechanismus aber unbekannt. In einer BMJ-Studie mit 170 Frauen halbierten sich die PMS-Beschwerden bei 52 Prozent unter Mönchspfeffer und bei 24 Prozent unter Placebo, eine strenge Meta-Analyse mit 520 Frauen fand eine 2,57-fach höhere Chance auf Besserung. Die EMA erkennt einen Extrakt beim prämenstruellen Syndrom als anerkannte medizinische Verwendung an. Die breiteren Meta-Analysen zeigen aber sehr uneinheitliche Ergebnisse und Hinweise auf Publikationsbias, und Nahrungsergänzungen haben keine standardisierte Zusammensetzung.',
    benefits: [
      'Prämenstruelles Syndrom: Beschwerden halbiert bei 52 Prozent gegenüber 24 Prozent unter Placebo (doppelblinde RCT, 170 Frauen, 3 Zyklen, Schellenberg 2001); strenge Meta-Analyse aus 3 Studien mit 520 Frauen: RR 2,57 für Remission (Csupor 2019)',
      'Mittelschweres bis schweres PMS: Tagebuch-Score 29,23 auf 6,41 unter Mönchspfeffer gegenüber 28,14 auf 12,64 unter Placebo (RCT, 217 Frauen, China, He 2009)',
      'Zyklische Brustschmerzen: mittlerer Effekt gegenüber Placebo, SMD 0,67 (Meta-Analyse aus 6 Studien, 718 Frauen, Ooi 2020); in Deutschland zugelassenes Anwendungsgebiet',
      'Dosis-Wirkungs-Beziehung: 20 mg Ze 440 besser als Placebo und 8 mg, 30 mg ohne Zusatznutzen (RCT, 162 Frauen, Schellenberg 2012)',
      'Latent erhöhtes Prolaktin: geringere Prolaktinfreisetzung und normalisierte zweite Zyklushälfte in einer kleinen RCT (37 ausgewertete Frauen, Milewicz 1993)'
    ],
    risks: [
      'Datenqualität: breite Meta-Analyse mit sehr hoher Heterogenität (I² 91 %) und Hinweisen auf Publikationsbias (Verkaik 2017); von 21 Studien erfüllten nur 3 die Kriterien für sauber beschriebene Präparate (Csupor 2019)',
      'Nebenwirkungen meist mild: Übelkeit, Bauchschmerzen, Kopfschmerzen, Schwindel, Akne, Hautausschlag, Zyklusveränderungen; selten schwere allergische Reaktionen (EMA-Monografie, Daniele 2005)',
      'Ärztliche Rücksprache bei östrogenempfindlichen Krebserkrankungen, Hypophysenerkrankungen und bei Dopaminagonisten, Dopamin-Antagonisten, Östrogenen oder Antiöstrogenen; kann Symptome eines prolaktinbildenden Tumors verschleiern (EMA)',
      'Nicht in Schwangerschaft und Stillzeit, nicht unter 18 Jahren (EMA); kann durch Zyklusregulierung die Chance auf eine Schwangerschaft erhöhen',
      'Nahrungsergänzungen ohne standardisierte Zusammensetzung; Studienergebnisse gelten für Spezialextrakte wie Ze 440 und BNO 1095'
    ],
    dosage: 'Die EU-Monografie der EMA nennt für den als anerkannte medizinische Verwendung eingestuften Trockenextrakt 20 mg einmal täglich über 3 Monate, für traditionelle Trockenextrakte zum Beispiel 4 mg oder 2 bis 3 mg einmal täglich. Studien verwendeten 20 mg Ze 440 über 3 Zyklen (8 mg waren zu schwach, 30 mg brachten keinen Zusatznutzen) und BNO 1095 entsprechend 40 mg Droge; in Studien zu Brustschmerzen waren 20 bis 40 mg pro Tag über 3 Monate typisch. Als pharmakologisch wirksam gelten laut Kommission E 30 bis 40 mg Droge pro Tag (BVL-Stoffliste). Höchstmengen oder Referenzwerte von EFSA, BfR oder DGE gibt es nicht, da Mönchspfeffer kein Nährstoff ist.',
    intake: 'In den Studien einmal täglich, durchgehend über mindestens 3 Zyklen, auch während der Regel. Neue Brustschmerzen oder Zyklusstörungen vorher ärztlich abklären lassen.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Keine Lebensmittelquellen; getrocknete Früchte des Mönchspfeffers (Vitex agnus-castus)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31780016/'
  },
  {
    id: 'synephrin',
    name: 'Synephrin (Bitterorange)',
    altNames: 'p-Synephrin, Oxedrin, Sympatol, Bitterorange, Pomeranze, Citrus aurantium, Bitter Orange Extract, Advantra Z',
    category: 'Stimulans',
    tags: ['fettverbrennung', 'stoffwechsel', 'sport'],
    short: 'Wirkstoff der Bitterorange, der beim Ausdauersport in mehreren kleinen Studien die Fettverbrennung steigerte, ohne Puls oder Energieverbrauch zu erhöhen. Ein Gewichtsverlust über Wochen ist nicht belegt, und nach 8 Wochen stieg der Blutdruck, besonders zusammen mit Koffein ist Vorsicht geboten.',
    description: 'p-Synephrin ist ein Pflanzenstoff aus unreifen Früchten und Schalen der Bitterorange (Citrus aurantium), chemisch verwandt mit Adrenalin und Ephedrin; auch Orangen und Mandarinen enthalten es. Es wirkt vor allem über Alpha-1- und Beta-3-Adrenozeptoren und gelangt schlechter ins Gehirn als Ephedrin. In doppelblinden Crossover-Studien mit einer Einzeldosis von 3 mg/kg stieg die maximale Fettverbrennung beim Radfahren von 0,29 auf 0,40 g pro Minute, ohne mehr Energieverbrauch. Die Meta-Analyse von 2022 mit 18 Studien fand aber keinen Gewichtsverlust und nach 8 Wochen einen um 6,37 mmHg höheren systolischen Blutdruck. Das BfR warnt, dass sich Synephrin und Koffein in ihrer Herz-Kreislauf-Wirkung verstärken können; die Expertenkommission von BVL und BfArM empfiehlt höchstens etwa 21 mg pro Tag aus allen Lebensmitteln.',
    benefits: [
      'Mehr Fettverbrennung beim Ausdauersport: maximale Fettoxidation 0,29 → 0,40 g/min, Energieverbrauch unverändert (doppelblinde Crossover-RCT, 18 Gesunde, Einzeldosis 3 mg/kg, Gutiérrez-Hellín 2016)',
      'Bestätigt in weiteren kleinen RCTs derselben Arbeitsgruppe: 37,3 statt 33,6 g Fett in 1 Stunde Radfahren (14 Gesunde, 2020), auch bei 15 Elite-Radsportlern (2021) – Puls jeweils unverändert',
      'Einzeldosen ohne Koffein oft ohne messbaren Effekt auf Puls, EKG und Blutdruck (18 Gesunde, 49 mg, Shara 2016; 46,9 mg, Haller 2005) – industrienahe Studien, nicht alle Studien einheitlich',
      'Ruheumsatz 65 kcal höher als unter Placebo nach 50 mg (RCT, 10 Personen pro Gruppe, Stohs 2011, Autoren mit Herstellerbezug)',
      'Mehr Wiederholungen beim Kniebeugen, 6,0 % mehr als unter Placebo (Crossover, 12 Männer, 100 mg, Ratamess 2015) – Einzelbefund; Sprinter liefen nicht schneller'
    ],
    risks: [
      'Kein Gewichtsverlust belegt: Meta-Analyse, 3 Studien, 6 bis 8 Wochen, 0,60 kg Unterschied, nicht signifikant (Koncz 2022); kein Zusatznutzen in 8 Wochen Krafttraining mit 20 mg (80 Männer, Jung 2017)',
      'Blutdruck nach 8 Wochen systolisch +6,37 und diastolisch +4,33 mmHg (2 Studien, 75 Teilnehmende, 10 bis 49 mg pro Tag, Koncz 2022); nach 900 mg Extrakt einmalig bis 7,3 mmHg systolisch höher (15 Gesunde, Bui 2006)',
      'Synephrin und Koffein können sich in ihrer Wirkung auf Herzfrequenz, Rhythmus und Blutdruck verstärken (BfR 2012); 30 Fallberichte mit 35 Patienten, u. a. Herzinfarkt, Rhythmusstörungen, Schlaganfall, meist Mischprodukte mit Koffein (de Jonge 2023)',
      'Laut BfR nicht geeignet bei Bluthochdruck, Übergewicht oder Herz-Kreislauf-Erkrankungen, nicht für Schwangere, Stillende und Kinder; Vorsicht bei intensivem Sport',
      'Wechselwirkungen: Bitterorangenextrakt hemmt CYP3A4; mögliche Interaktion mit MAO-Hemmern; Warnhinweise in Kanada auch für Blutdruck- und Schilddrüsenmedikamente und Sympathomimetika'
    ],
    dosage: 'Studien verwendeten Einzeldosen von 3 mg/kg Körpergewicht (Fettoxidation beim Sport), 46,9 bis 100 mg p-Synephrin einmalig oder über wenige Tage und 10 bis 54 mg pro Tag über 6 bis 8 Wochen; die Meta-Analyse umfasst Tagesdosen von 6 bis 214 mg. Amtliche Richtwerte: Das BfR empfiehlt aus Nahrungsergänzungsmitteln höchstens etwa 6,7 mg Synephrin pro Tag, die Gemeinsame Expertenkommission von BVL und BfArM höchstens etwa 21 mg pro Tag aus allen Lebensmitteln einschließlich Nahrungsergänzungsmitteln; Frankreich (ANSES) 20 mg, Health Canada 50 mg ohne Koffein oder 40 mg mit höchstens 320 mg Koffein. Eine gesetzliche Höchstmenge gibt es in Deutschland nicht. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'Nicht mit Koffein oder anderen Stimulanzien kombinieren und nicht zusätzlich zu weiteren synephrinhaltigen Produkten nehmen (BfR, Expertenkommission). Bei Bluthochdruck, Herzerkrankung oder Medikamenteneinnahme vorher ärztlich abklären.',
    synergies: [],
    avoid: ['koffein'],
    evidence: 'niedrig',
    sources: 'Bitterorange (Pomeranze), in kleinen Mengen auch Orangen, Mandarinen, Clementinen und deren Saft; Orangensaft enthält 3 bis 85 mg pro Kilogramm',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36235672/'
  },
  {
    id: 'betain-hcl',
    name: 'Betain-HCl (Betainhydrochlorid)',
    altNames: 'Betainhydrochlorid, Betaine HCl, Betaine hydrochloride, BHCl, Betain-HCl mit Pepsin, Magensäure-Ergänzung',
    category: 'Aminosäure',
    tags: ['verdauung', 'darm'],
    short: 'Salz, das im Magen Salzsäure freisetzt: 1500 mg senkten den Magen-pH bei künstlichem Säuremangel innerhalb von Minuten von 5,2 auf 0,6, für gut eine Stunde. Ob das Verdauungsbeschwerden lindert, hat noch keine kontrollierte Studie geprüft; mit Mahlzeit wirkt die gleiche Menge deutlich schwächer.',
    description: 'Betain-HCl ist das Hydrochlorid von Betain und zerfällt im Magen in Betain und Salzsäure; 1500 mg liefern 9,7 mmol Säure. Es wird als Ergänzung bei zu wenig Magensäure genommen, etwa bei autoimmuner Gastritis oder gegen Völlegefühl nach eiweißreichem Essen, und ist klar von TMG zu unterscheiden, das Betain ohne Säure enthält. In einer Pilotstudie mit 6 Gesunden unter dem Säureblocker Rabeprazol sank der Magen-pH nach 1500 mg von 5,2 auf 0,6, unter 3 nach 6,3 Minuten, für 73 Minuten; nüchtern stellte Betain-HCl die durch den Säureblocker verlorene Aufnahme des Krebsmittels Dasatinib vollständig wieder her. Mit Mahlzeit reichte die gleiche Menge nicht: Bei Atazanavir kamen nur 12 % der verlorenen Aufnahme zurück, nach einem Frühstück verkürzten erst 4500 mg die Säuerungszeit. Randomisierte Studien zu Beschwerden, Eiweißverdauung oder Nährstoffaufnahme fehlen; Fachübersichten von 2022 und 2024 empfehlen einen Therapieversuch bei autoimmuner Gastritis.',
    benefits: [
      'Senkt den Magen-pH schnell und stark: 5,2 → 0,6, pH unter 3 nach 6,3 Minuten, anhaltend 73 Minuten (Pilotstudie ohne Kontrollgruppe, 6 Gesunde mit Säureblocker, 1500 mg einmalig, Yago 2013)',
      'Hebt nüchtern den Effekt eines Säureblockers auf die Aufnahme von Dasatinib vollständig auf: AUC 121 % der Kontrolle (randomisiertes Crossover, 10 Teilnehmende laut Register, Yago 2014)',
      'Plausibler Ersatz bei fehlender eigener Magensäure (autoimmune Gastritis); zwei Fachübersichten empfehlen einen Therapieversuch, kontrollierte Studien fehlen (Gomez Cifuentes 2022, Taylor 2024)',
      'Einzelfall: 76-jähriger Patient nach Speiseröhren-OP mit weniger Übelkeit und Gewichtszunahme unter 500 mg Betain-HCl mit Pepsin, Rückfall beim Absetzen (Fallbericht, Amidon 2024)'
    ],
    risks: [
      'Mit Mahlzeit deutlich schwächer: bei Atazanavir nur 12 % der verlorenen Aufnahme zurück (8 Personen, Faber 2017); nach Frühstück wirkten erst 4500 mg, nicht 1500 oder 3000 mg (9 Personen, Surofchy 2019)',
      'Nicht bei Magen- oder Zwölffingerdarmgeschwüren; vorher ausschließen, besonders bei H. pylori oder NSAR-Einnahme (Taylor 2024); in einer Beobachtung mit Säure-Pepsin-Präparat brachen 27 von 97 Patienten ab, meist wegen Magen-Darm-Beschwerden',
      'Verändert die Aufnahme von Medikamenten mit pH-abhängiger Löslichkeit und arbeitet gegen verordnete Säureblocker',
      'Liefert auch Betain: EFSA hält 400 mg Betain pro Tag zusätzlich zur Nahrung für sicher, bei 4 g pro Tag stieg bei metabolischem Syndrom das LDL; nicht mit TMG verwechseln',
      'Nur Einzeldosis-Studien mit 6 bis 10 Gesunden, keine Langzeitdaten, keine Daten zu Schwangerschaft und Stillzeit'
    ],
    dosage: 'Die Studien verwendeten Einzeldosen von 1500 mg nüchtern (Yago 2013, 2014) sowie 1500, 3000 und 4500 mg 15 Minuten nach einem Frühstück (Surofchy 2019); im Fallbericht 500 mg mit 23,5 mg Pepsin vor eiweißhaltigen Mahlzeiten. Kapseln im Handel enthalten 500 bis 750 mg. Amtliche Referenzwerte oder Höchstmengen für Betain-HCl von EFSA, BfR oder DGE gibt es nicht; für neuartiges Betain hält die EFSA 400 mg pro Tag zusätzlich zur Nahrung für sicher. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'Zu oder unmittelbar vor eiweißhaltigen Mahlzeiten, als Kapsel und nicht offen, weil die Säure sonst Zähne und Speiseröhre reizt. Bei Brennen oder Magenschmerzen absetzen; bei Säureblockern oder anderen Dauermedikamenten vorher ärztlich abklären.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Keine Lebensmittelquelle für Betain-HCl; Betain selbst steckt in Rüben, Spinat und Vollkorn',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23980906/'
  },
  {
    id: 'l-ornithin',
    name: 'L-Ornithin',
    altNames: 'Ornithin, L-Ornithin-Hydrochlorid, L-Ornithin-L-Aspartat, LOLA, Ornithinaspartat',
    category: 'Aminosäure',
    tags: ['leber', 'schlaf', 'stress', 'energie', 'sport'],
    short: 'Aminosäure des Harnstoffzyklus, mit dem die Leber Ammoniak entgiftet; kleine Placebo-Studien zeigen bei Gesunden weniger empfundene Müdigkeit und besseren Schlaf. Als L-Ornithin-L-Aspartat ist sie in Deutschland ein Arzneimittel bei Leberzirrhose – mit möglichem Nutzen, aber sehr niedriger Evidenzqualität.',
    description: 'L-Ornithin wird nicht in Eiweiß eingebaut, sondern dient in der Leber als Ausgangsstoff und Aktivator des Harnstoffzyklus; in Lebensmitteln kommt es nur in kleinen Mengen vor. Als Nahrungsergänzung verbesserten 400 mg pro Tag über 8 Wochen bei 52 gestressten Berufstätigen Cortisol, Ärger und Schlafgefühl, und 1.600 mg über 7 Tage milderten bei 65 Gesunden Müdigkeit nach einem Stresstest – dort ohne Cortisol-Effekt. Die Verbindung L-Ornithin-L-Aspartat (LOLA) ist in Deutschland als apothekenpflichtiges Arzneimittel gegen die hepatische Enzephalopathie zugelassen; die Cochrane-Auswertung von 29 Studien mit 1.891 Patienten sieht weniger Enzephalopathie und Sterblichkeit, aber nur bei sehr niedriger Evidenzqualität. Laut Fachinformation ist Ornithin bei gesunder Leber nicht der begrenzende Faktor der Harnstoffbildung, und beim Sport senkte es das Ammoniak in einer kontrollierten Studie nicht. Eine Sicherheitsübersicht über 22 Studien schätzt den NOAEL auf 12 g pro Tag.',
    benefits: [
      'Stress und Schlaf: 400 mg pro Tag über 8 Wochen senkten Cortisol und Ärger und verbesserten die empfundene Schlafqualität (RCT, 52 Gesunde, Miyake 2014)',
      'Weniger Müdigkeit und Ärger am Morgen nach einem sozialen Stresstest mit 1.600 mg über 7 Tage, Cortisol unverändert (RCT, 65 Gesunde, Moriyasu 2024)',
      'Weniger empfundene Erschöpfung nach zweistündiger Ergometerbelastung (Crossover-RCT, 17 Gesunde, Sugino 2008)',
      'L-Ornithin-L-Aspartat bei Leberzirrhose: seltener hepatische Enzephalopathie (RR 0,70; 22 Studien) und geringere Sterblichkeit (RR 0,42; 19 Studien) – Evidenz sehr niedriger Qualität (Cochrane 2018); als Arzneimittel zugelassen',
      'Gut verträglich: 22 Studien bis 156 Tage, vor allem Magen-Darm-Beschwerden, geschätzter NOAEL 12 g pro Tag (Yang 2025)'
    ],
    risks: [
      'Magen-Darm-Beschwerden wie Übelkeit, Blähungen und Durchfall; sehr selten Gliederschmerzen (Fachinformation Hepa-Merz)',
      'Arzneimittel LOLA nicht bei stärkeren Nierenfunktionsstörungen; in Schwangerschaft und Stillzeit vermeiden; für Kinder keine Daten',
      'Bei Leber- oder Nierenerkrankung nur nach ärztlicher Klärung – dort ist LOLA ein Arzneimittel mit Gegenanzeigen',
      'Nicht in Eigenregie bei Gyratatrophie, einer seltenen Erbkrankheit mit ohnehin hohen Ornithinspiegeln',
      'Studien bei Gesunden klein (17 bis 65 Teilnehmer), überwiegend subjektive Endpunkte; Ammoniak-Senkung beim Sport nicht bestätigt (Nagayama 2025)'
    ],
    dosage: 'Studien bei Gesunden verwendeten 400 mg pro Tag über 8 Wochen (Miyake 2014), 1.600 mg pro Tag über 7 Tage (Moriyasu 2024) und 2.000 mg pro Tag als Hydrochlorid über 7 Tage (Sugino 2008). In einer Verträglichkeitsstudie blieben bis 12 g Ornithin-Hydrochlorid pro Tag über 4 Wochen ohne behandlungsbedingte Nebenwirkungen, eine Sicherheitsübersicht schätzt den NOAEL auf 12 g pro Tag. Für Nahrungsergänzungen hat das BVL 2014 Kapseln mit höchstens 500 mg L-Ornithin bei 2 Kapseln pro Tag erlaubt. Das Arzneimittel mit L-Ornithin-L-Aspartat ist zugelassen mit bis zu 3-mal täglich 1 bis 2 Beuteln à 3,0 g, bei Lebererkrankung und nur ärztlich begleitet. Eine Höchstmenge von EFSA oder BfR ist nicht bekannt. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien täglich über Tage bis Wochen genommen, das Arzneimittel zu oder nach den Mahlzeiten. Bei Leber- oder Nierenerkrankung vorher ärztlich klären.',
    synergies: ['l-arginin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Vom Körper selbst gebildet; in Lebensmitteln nur in kleinen Mengen enthalten, auch Fleisch und Fisch sind nicht reich daran',
    link: 'https://pubmed.ncbi.nlm.nih.gov/29762873/'
  },
  {
    id: 'leucin',
    name: 'Leucin',
    altNames: 'L-Leucin, Leu, verzweigtkettige Aminosäure, BCAA, HMB (Stoffwechselprodukt)',
    category: 'Aminosäure',
    tags: ['muskel', 'sport', 'kraft', 'regeneration', 'alter'],
    short: 'Essenzielle, verzweigtkettige Aminosäure und am Menschen gut belegter Auslöser der Muskelproteinsynthese über mTORC1. Über Monate allein genommen brachte Leucin in Studien aber weder mehr Muskelmasse noch mehr Kraft – messbare Effekte zeigen vor allem Kombinationen mit Protein und Vitamin D.',
    description: 'Leucin ist eine der drei verzweigtkettigen Aminosäuren und steckt in allem Eiweiß; 25 g Whey liefern 3,0 g, die WHO setzt den Bedarf bei 39 mg pro Kilogramm Körpergewicht an. Es wirkt als Signal: Über mTORC1 schaltet es im Muskel die Proteinproduktion ein, in einer Tracer-Studie um 110 % mit 3,42 g. Bei Älteren hebt ein höherer Leucinanteil die gedämpfte Aufbauantwort wieder an, und 6,25 g Whey mit Leucin auf 5,0 g wirkten akut fast wie 25 g Whey. Isoliertes Leucin veränderte in einer Meta-Analyse aus 17 RCTs mit 1.418 Älteren aber weder Muskelmasse noch Kraft; Kombinationen mit Vitamin D verbesserten die Handkraft um 2,17 kg. Das Stoffwechselprodukt HMB brachte jungen Trainierenden in einer Meta-Analyse keine zusätzliche Muskelmasse. Das BfR nennt 4,0 g isoliertes Leucin pro Tag zusätzlich zur Nahrung als Orientierungswert.',
    benefits: [
      'Stößt die Muskelproteinsynthese an: +110 % mit 3,42 g Leucin (Tracer-Studie, Wilkinson 2013); Meta-Analyse über 9 RCTs bei Älteren bestätigt den Anstieg (Xu 2015)',
      'Hebt bei Älteren die gedämpfte Aufbauantwort an: Aminosäuremischung mit 41 % statt 26 % Leucin wirkte, die normale nicht (Katsanos 2006)',
      'Wertet kleine Proteinportionen auf: 6,25 g Whey mit Leucin auf 5,0 g wirkten akut fast wie 25 g Whey (RCT, 40 junge Männer, Churchward-Venne 2014)',
      'Leucinreiche Protein- und Vitamin-D-Präparate verbessern bei Sarkopenie die Kraft (Meta-Analyse, 6 RCTs, 699 Teilnehmer, Lee 2022; Handkraft +2,17 kg mit Vitamin D, Guo 2022)',
      'PROVIDE-Studie mit 380 sarkopenen Älteren: Trinknahrung aus Molkenprotein, Leucin und Vitamin D brachte über 13 Wochen 0,17 kg mehr Muskelmasse – primäre Endpunkte aber nicht erreicht'
    ],
    risks: [
      'Isoliertes Leucin allein brachte über Monate keine Muskelmasse oder Kraft (Verhoeven 2009: 7,5 g pro Tag über 3 Monate; Meta-Analyse Guo 2022, 17 RCTs)',
      'Sehr hohe Mengen erhöhen den Blutammoniakspiegel: über Normalwerten ab über 500 mg pro kg und Tag bei jungen Männern, ab 550 mg pro kg bei Älteren (Akutstudien, 5 bzw. 6 Personen)',
      'BfR: Kinder, Jugendliche, Schwangere und Stillende sollen auf relevante isolierte BCAA-Mengen verzichten; bei eingeschränkter Nierenfunktion oder eiweißarmer Diät ärztliche Rücksprache',
      'Nicht bei Ahornsirupkrankheit (angeborene Abbaustörung der verzweigtkettigen Aminosäuren) ohne ärztliche Führung',
      'Keine Langzeitdaten zur isolierten Zufuhr; die BfR-Orientierungswerte stützen sich mangels Humandaten auf Tierstudien'
    ],
    dosage: 'Studien verwendeten 2,5 g zu jeder Hauptmahlzeit (7,5 g pro Tag über 3 Monate, Verhoeven 2009), 3,42 g als Einzelgabe (Wilkinson 2013), Aufstockung einer kleinen Proteinportion auf 5,0 g Leucin (Churchward-Venne 2014) und 5 g 3-mal täglich über 3 Tage (Churchward-Venne 2026). Die WHO nennt als Bedarf 39 mg pro Kilogramm Körpergewicht und Tag, die übliche Zufuhr liegt in den USA im Mittel bei 6,1 g pro Tag. Das BfR hält für Erwachsene 4,0 g isoliertes Leucin pro Tag zusätzlich zur Nahrung für tolerierbar (BCAA gesamt 8,2 g). Das BVL erlaubte 2013 Kapseln mit 600 mg L-Leucin pro Tag. Eine gesetzliche Höchstmenge gibt es nicht. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien zu den Mahlzeiten oder zusammen mit einer Proteinportion nach dem Training. Das BfR empfiehlt, verzweigtkettige Aminosäuren eher kombiniert als einzeln zu nehmen.',
    synergies: ['whey', 'aminosaeuren', 'vitamin-d3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Alle eiweißhaltigen Lebensmittel: Fleisch, Fisch, Eier, Milchprodukte, Hülsenfrüchte; Molkenprotein ist besonders reich (25 g Whey enthalten 3,0 g Leucin)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35845777/'
  },
  {
    id: 'msm',
    name: 'MSM (Methylsulfonylmethan)',
    altNames: 'Methylsulfonylmethan, Methylsulfonylmethane, Dimethylsulfon, Methylsulfon, organischer Schwefel, OptiMSM',
    category: 'Longevity',
    tags: ['gelenke', 'entzuendung', 'haut', 'haare', 'sport'],
    short: 'Kleine Schwefelverbindung, die in mehreren kleinen Studien Knieschmerzen und Beweglichkeit bei Arthrose leicht verbessert hat und dabei sehr gut verträglich war. Die Effekte sind klein, eine Meta-Analyse und das größte Einzel-RCT fanden keinen signifikanten Nutzen, für Haut, Haare und Allergien gibt es nur einzelne herstellernahe Studien.',
    description: 'MSM (Dimethylsulfon) kommt in Spuren in Obst, Gemüse, Kaffee, Tee und Milch vor und ist die oxidierte Form von DMSO. Es soll Entzündungen dämpfen (in Zellkultur Hemmung von NF-κB) und als Schwefelquelle für Kollagen und Keratin dienen, beim Menschen ist die Schwefelspender-Rolle aber nicht gezeigt. Bei Kniearthrose besserten sich Schmerz oder Funktion in kleinen RCTs über 12 Wochen (Kim 2006, 50 Patienten; Debbi 2011, 49 Patienten; Toguchi 2023, 88 Teilnehmende); die Übersicht von Liu 2018 fand einen statistisch signifikanten, klinisch aber unklaren Schmerzeffekt. Die Meta-Analyse von Brien 2011 blieb nicht signifikant, und bei 180 Rekruten verhinderten 3 g pro Tag keine Knieschmerzen (Tennent 2017). Viele Studien nutzen das Produkt eines Herstellers, der mehrere davon gesponsert oder mitverfasst hat. In der EU ist MSM in Nahrungsergänzungsmitteln nicht neuartig und damit verkehrsfähig; alle beantragten Health Claims wurden abgelehnt.',
    benefits: [
      'Kniearthrose: WOMAC-Schmerz und Funktion mit 6 g pro Tag über 12 Wochen signifikant besser als Placebo (Pilot-RCT, 50 Patienten, Kim 2006)',
      'Kniearthrose: WOMAC-Funktion 14,6 mm und Gesamtscore 15,0 mm besser, Schmerz knapp nicht signifikant (RCT, 49 Patienten, 12 Wochen, Debbi 2011; Effekte laut Autoren klein)',
      'Leichte Knieschmerzen: primärer Endpunkt JKOM nach 12 Wochen erreicht (RCT, 88 Teilnehmende, Toguchi 2023)',
      'Übersichten: statistisch signifikante, klinisch unklare kurzfristige Schmerzverbesserung (Liu 2018, 69 Studien); bei Steifigkeit unter den 3 besten Präparaten (Netzwerk-Meta-Analyse, 22 Studien, Du 2025)',
      'Sehr gut verträglich in allen RCTs bis 16 Wochen; FDA-GRAS-Notiz ohne Einwände (GRN 229)'
    ],
    risks: [
      'Nutzen unsicher: Meta-Analyse über 3 RCTs mit 326 Patienten nicht signifikant (Brien 2011); 3 g pro Tag ohne Effekt bei 180 Rekruten (Tennent 2017)',
      'Haut, Haare, Allergie und Sport nur mit kleinen Studien belegt, teils ohne Placebo oder mit Herstellerbeteiligung (Hewlings 2018, 18 Teilnehmende; Muizzuddin 2022; Withee 2017 ohne signifikante Effekte)',
      'Einzelner Fallbericht eines Hautausschlags (Kim DH 2016); klinische Wechselwirkungsstudien fehlen, im Labor keine Hemmung von 7 CYP-Enzymen',
      'Keine Humandaten zu Schwangerschaft, Stillzeit und Kindern; Berichte über stärkere Alkoholempfindlichkeit nur anekdotisch',
      'Keine zugelassenen Gesundheitsangaben in der EU; Werbung für Gelenke, Kollagen, Haare oder Nägel ist nicht erlaubt'
    ],
    dosage: 'Studien verwendeten bei Kniearthrose 500 mg dreimal täglich (Usha 2004), 1,125 g dreimal täglich (Debbi 2011), 10 Tabletten mit je 200 mg (Toguchi 2023) und 3 g zweimal täglich (Kim 2006), jeweils über 12 Wochen; in Sport-, Stoffwechsel- und Hautstudien 1 bis 3 g pro Tag über 21 Tage bis 16 Wochen. Eine Übersicht nennt eine gute Verträglichkeit bis 4 g täglich; laut der US-GRAS-Notiz gilt MSM unter 4.845,6 mg pro Tag als sicher. Höchstmengen oder Referenzwerte von EFSA, BfR oder DGE gibt es nicht, MSM ist kein essenzieller Nährstoff.',
    intake: 'Die Studien teilten die Tagesmenge meist auf zwei bis drei Einnahmen auf und liefen 12 Wochen; ein Effekt auf Gelenke ist frühestens nach einigen Wochen zu erwarten. Bei Dauermedikation, in Schwangerschaft und Stillzeit vorher ärztlich abklären.',
    synergies: ['glucosamin', 'boswellia', 'kollagen', 'hyaluronsaeure'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'In Spuren in Obst, Gemüse, Getreide, Kaffee, Tee, Bier und Kuhmilch',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28300758/'
  },
  {
    id: 'opc',
    name: 'OPC / Kiefernrindenextrakt (Pycnogenol)',
    altNames: 'Oligomere Proanthocyanidine, Procyanidine, OPC, Kiefernrindenextrakt, Seekiefernrindenextrakt, Pinienrindenextrakt, Pinus pinaster, French Maritime Pine Bark Extract, Pycnogenol, Traubenkernextrakt, Grape Seed Extract, Vitis vinifera',
    category: 'Antioxidant',
    tags: ['anti-oxidant', 'herz', 'blutdruck', 'durchblutung', 'gelenke'],
    short: 'Pflanzenstoffe aus Kiefernrinde und Traubenkernen, die in Studien die Gefäßfunktion verbessert und Blutdruck, Blutzucker und LDL leicht gesenkt haben, mit positiven Signalen auch bei Venenbeschwerden und ADHS. Die Studien sind aber klein, Cochrane bewertet die Datenlage durchgehend als sehr unsicher, und die Blutdruck-Meta-Analysen widersprechen sich.',
    description: 'OPC (oligomere Proanthocyanidine) sind kurze Ketten aus Catechin-Bausteinen, konzentriert in Traubenkernen und in der Rinde der Seekiefer (Pinus pinaster); der Markenextrakt Pycnogenol ist auf 70 ± 5 % Procyanidine standardisiert und am besten untersucht. In einem doppelblinden Crossover-RCT mit 23 Herzpatienten verbesserten 200 mg pro Tag über 8 Wochen die Endothelfunktion und senkten einen Oxidationsmarker (Enseleit 2012). Eine Meta-Analyse von 27 RCTs mit 1.685 Teilnehmenden fand kleine Senkungen von Blutdruck, Nüchternzucker, HbA1c, Gewicht und LDL (Mohammadi 2025), eine Auswertung nur doppelblinder Studien sah beim Blutdruck dagegen keinen Effekt (Fogacci 2020). Positive kleine Studien gibt es zu Venenbeschwerden, kurzfristigen Arthroseschmerzen und ADHS bei Kindern; der Cochrane-Review 2020 (27 RCTs, 1.641 Teilnehmende, 10 Erkrankungen) stuft die Vertrauenswürdigkeit aber als sehr niedrig ein. Kiefernrinden- und Traubenkernextrakt sind in der EU in Nahrungsergänzungsmitteln nicht neuartig und damit verkehrsfähig; eine Gesundheitsaussage für OPC allein ist nicht zugelassen.',
    benefits: [
      'Endothelfunktion bei koronarer Herzkrankheit verbessert (FMD von 5,3 auf 7,0), Oxidationsmarker gesenkt (doppelblindes Crossover-RCT, 23 Patienten, 8 Wochen, Enseleit 2012)',
      'Blutdruck −2,26/−2,62 mmHg, Nüchternzucker −6,25 mg/dl, HbA1c −0,32 %, LDL −5,07 mg/dl (Meta-Analyse, 27 RCTs, 1.685 Teilnehmende, Mohammadi 2025); Traubenkernextrakt: Blutdruck gesenkt in 16 RCTs mit 810 Teilnehmenden (Zhang 2016)',
      'Chronische Veneninsuffizienz: weniger Schmerz, Schweregefühl und Schwellung mit Seekiefernrindenextrakt (Übersicht Gloviczki 2025; Cochrane 2020: Venenmittel verringern Ödeme leicht)',
      'Kurzfristige Arthroseschmerzen: großer Effekt in der Meta-Analyse von Liu 2018 (69 Studien, 20 Präparate)',
      'ADHS bei Kindern: Hyperaktivität und Gesamtscore in der Lehrerbewertung besser als Placebo (RCT, 88 Kinder, 10 Wochen, Weyns 2022; kleine Vorstudie mit 61 Kindern, Trebatická 2006)'
    ],
    risks: [
      'Datenlage unsicher: Cochrane 2020 mit 27 RCTs bewertet alle Endpunkte mit sehr niedriger Vertrauenswürdigkeit, Verzerrungsrisiko in 22 Studien unklar',
      'Blutdruck-Befunde widersprüchlich: kein Effekt in 7 doppelblinden RCTs mit 626 Teilnehmenden (Fogacci 2020); Traubenkernextrakt 300 mg pro Tag in einer RCT mit 70 Teilnehmenden nicht signifikant (Ras 2013), EFSA lehnte den Blutdruck-Claim 2021 ab',
      'Hemmt die Blutplättchen (100 bis 125 mg ähnlich wie 500 mg Aspirin bei Rauchern, Pütter 1999) – bei Gerinnungshemmern ärztlich abklären; Interaktionsstudien fehlen',
      'Nebenwirkungen meist mild (Magen-Darm-Beschwerden, Schwindel, Kopfschmerz, Übelkeit; LiverTox Score E); ein Fallbericht schwerer Rhabdomyolyse bei Überdosierung (Kermanshah 2025)',
      'Keine belastbaren Daten zu Schwangerschaft und Stillzeit; Ergebnisse gelten für den jeweils untersuchten Extrakt'
    ],
    dosage: 'Studien verwendeten 200 mg Pycnogenol pro Tag über 8 Wochen (Enseleit 2012), 100 bis 125 mg als Einzelgabe (Pütter 1999), bei Kindern mit ADHS 1 mg/kg/Tag über 4 Wochen (Trebatická 2006) bzw. 20 oder 40 mg pro Tag je nach Körpergewicht über 10 Wochen (Weyns 2022) sowie 300 mg Traubenkernextrakt pro Tag über 8 Wochen (Ras 2013). LiverTox nennt als übliche Tagesmengen 100 bis 400 mg Kiefernrindenextrakt, für Pycnogenol 100 bis 200 mg. Höchstmengen oder Referenzwerte von EFSA, BfR oder DGE gibt es nicht; OPC sind kein essenzieller Nährstoff.',
    intake: 'Die Studien liefen 4 Wochen bis 6 Monate; Effekte auf Gefäße und Blutdruck zeigten sich frühestens nach einigen Wochen. Auf standardisierte Extrakte mit angegebenem OPC- bzw. Procyanidingehalt achten; bei Gerinnungshemmern, in Schwangerschaft und Stillzeit sowie bei Kindern vorher ärztlich abklären.',
    synergies: ['l-arginin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Traubenkerne und Kiefernrinde als konzentrierte Quellen; Catechin-Bausteine in vielen Pflanzen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32990945/'
  },
  {
    id: 'tulsi',
    name: 'Tulsi (Heiliges Basilikum)',
    altNames: 'Holy Basil, Heiliges Basilikum, Ocimum tenuiflorum, Ocimum sanctum, Tulasi, Krishna-Tulsi, Thai-Basilikum',
    category: 'Adaptogen',
    tags: ['stress', 'schlaf', 'blutzucker', 'immun'],
    short: 'Ayurvedisches Adaptogen, das in einer doppelblinden Studie mit 100 gestressten Erwachsenen den wahrgenommenen Stress über 8 Wochen um 37 Prozent senkte, unter Placebo um 19 Prozent. Die übrigen Studien sind klein, kurz und oft von geringer Qualität, die besten Stressstudien stammen vom selben Extrakthersteller.',
    description: 'Tulsi (Ocimum tenuiflorum, früher Ocimum sanctum) ist ein Basilikum aus Indien, das im Ayurveda als Tee und Heilkraut genutzt wird und als Adaptogen gilt; das Kraut enthält unter anderem Eugenol, Methyleugenol, Rosmarinsäure und Ursolsäure. In Zell- und Tierversuchen dämpft ein Extrakt die Stressachse, unter anderem über den CRF1-Rezeptor, und am Menschen war nach 8 Wochen das Haarcortisol niedriger. In einer registrierten, doppelblinden Studie mit 100 Erwachsenen sanken Stress um 37 gegenüber 19 Prozent und Schlaflosigkeit um 48 gegenüber 27 Prozent, die per Tracker gemessene Schlafeffizienz aber nicht stärker als unter Placebo. Eine systematische Übersicht fand 24 Studien mit 1.111 Teilnehmenden, alle mit günstigen Ergebnissen zu Stress, Blutzucker und Immunwerten, doch nur 7 davon galten als hochwertig. Das Kraut ist in der EU als Lebensmittel verkehrsfähig und war in Studien bis 13 Wochen gut verträglich.',
    benefits: [
      'Weniger Stress und besserer subjektiver Schlaf: PSS −37 % gegenüber −19 %, Schlaflosigkeit −48 % gegenüber −27 %, niedrigeres Haarcortisol (doppelblinde RCT, 100 Erwachsene, 8 Wochen, Lopresti 2022, herstellerfinanziert)',
      'Stresssymptome 1,6-mal stärker verbessert als unter Placebo (doppelblinde RCT, 150 Teilnehmende, 6 Wochen, Saxena 2012, Herstellerprodukt)',
      'Nüchternblutzucker bei Typ-2-Diabetes −17,6 % (einfach verblindete Crossover-RCT, 40 Patienten, je 5 Wochen, Agrawal 1996) – klein und alt',
      'Mehr NK-Zellen und T-Helferzellen, mehr Interferon-gamma und Interleukin-4 (doppelblinde Crossover-RCT, 24 Gesunde, 4 Wochen, Mondal 2011) – Surrogatmarker',
      'Schnellere Reaktionszeiten und weniger Fehler in Konzentrationstests (placebokontrolliert, 30 Tage, Sampath 2015; bestätigt in systematischer Übersicht, Marsh 2026)'
    ],
    risks: [
      'Dünne Studienlage: 24 Studien, nur 8 mit Placebo, nur 7 hochwertig, fast alle ohne Doppelverblindung und aus Indien (Jamshidi 2017); Effekte möglicherweise überschätzt',
      'Tierversuche zeigen weniger und schlechter bewegliche Spermien (Kaninchen, Ratten; reversibel) und veränderte Hormone bei weiblichen Ratten – bei Kinderwunsch, Schwangerschaft und Stillzeit meiden',
      'Kann den Blutzucker senken: bei Antidiabetika Werte im Blick behalten',
      'Violetter Tulsi enthält mehr Methyleugenol (potenziell krebserregend); 80 % von 30 Marktproben waren violett (Balaji 2024); ätherisches Öl nicht innerlich verwenden',
      'Keine Langzeitdaten über 13 Wochen hinaus; objektiv gemessener Schlaf nicht besser als unter Placebo'
    ],
    dosage: 'Studien verwendeten 250 mg standardisierten Blattextrakt pro Tag, aufgeteilt auf zweimal 125 mg (Stress und Schlaf, 8 Wochen), 1200 mg Wirkstoffe pro Tag aus einem Ganzpflanzenextrakt (Stress, 6 Wochen), 300 mg ethanolischen Blattextrakt pro Tag (Immunwerte, 4 Wochen; Konzentration, 30 Tage) und 2,5 g Blattpulver pro Tag (Blutzucker, 5 Wochen). Die systematische Übersicht nennt insgesamt 300 bis 3000 mg wässrigen Blattextrakt, 300 bis 1000 mg ethanolischen Blattextrakt und 6 bis 14 g Ganzpflanzen-Zubereitung pro Tag über 2 bis 13 Wochen. Amtliche Referenzwerte oder Höchstmengen von EFSA, BfR oder DGE gibt es nicht. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In der Stressstudie zweimal täglich, mit oder ohne Mahlzeit, über 8 Wochen; die Effekte zeigten sich erst ab Woche 6. Tee und Studienextrakte sind nicht gleichwertig.',
    synergies: ['ashwagandha', 'rhodiola'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Blätter und Kraut des Heiligen Basilikums, als Tee oder Küchenkraut (im EU-Katalog auch als Thai-Basilikum geführt)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28400848/'
  },
  {
    id: 'baikal-helmkraut',
    name: 'Baikal-Helmkraut (Scutellaria baicalensis)',
    altNames: 'Scutellaria baicalensis, Chinesisches Helmkraut, Chinese Skullcap, Huang Qin, Huangqin, Ogon, Scutellariae radix, Baicalin, Baicalein, Wogonin',
    category: 'Kräuter',
    tags: ['entzuendung', 'stress', 'angst'],
    short: 'Chinesische Heilwurzel, deren Flavone Baicalin, Baicalein und Wogonin im Labor entzündungshemmend und angstlösend wirken; am Menschen gibt es nur einzelne Studien, etwa zu Blutfetten und Entzündungswerten. Klar belegt ist dagegen ein seltenes Leber- und Lungensignal, ein US-Präparat mit Baicalin wurde zurückgerufen.',
    description: 'Baikal-Helmkraut ist die getrocknete Wurzel von Scutellaria baicalensis, in der chinesischen Medizin als Huang Qin und in Japan als Ogon in Rezepturen genutzt. Ihre Flavone Baicalin, Baicalein und Wogonin hemmen im Labor Entzündungsprozesse, Wogonin bindet zudem an die Benzodiazepin-Stelle des GABA-A-Rezeptors und wirkte bei Mäusen angstlösend. Am Menschen verbesserte Baicalin in einer chinesischen RCT mit 374 Herz- und Rheumapatienten zusätzlich zur Standardtherapie Blutfette und CRP, ein Extrakt in einer kleinen Crossover-Studie die Glukosetoleranz bei Typ-2-Diabetes; eine Kognitionsstudie mit einem Kombinationsprodukt fand keinen Unterschied zu Placebo. Systematische Übersichten von Humanstudien fehlen. Leberschäden sind selten, aber gut belegt: In chinesischen Kliniken betrafen sie 0,095 % der Behandelten, und das Baicalin-haltige US-Präparat Flavocoxid (Limbrel) wurde nach 194 Meldungen zu Leber-, Bauchspeicheldrüsen- und Lungenschäden 2018 zurückgerufen. Nicht verwechseln mit dem Amerikanischen Helmkraut (Scutellaria lateriflora), einer anderen Pflanze.',
    benefits: [
      'Bessere Blutfette und niedrigeres CRP zusätzlich zu Atorvastatin und Tocilizumab, LDL 1,73 gegenüber 2,42 mmol/L (doppelblinde RCT, 374 Patienten mit KHK und rheumatoider Arthritis, 500 mg Baicalin/Tag, 12 Wochen, Hang 2018) – ein Zentrum, nicht repliziert',
      'Bessere Glukosetoleranz und weniger TNF-alpha bei Typ-2-Diabetes unter Metformin (Crossover-RCT, 3,52 g Extrakt/Tag, je 8 Wochen, Shin 2020) – klein',
      'Wogonin bindet an die Benzodiazepin-Stelle des GABA-A-Rezeptors und wirkte bei Mäusen angstlösend ohne Sedierung (Hui 2002) – nur Tier- und Zelldaten',
      'Weniger Gelenkschmerz nach 1 Woche mit einer Kombination aus Helmkraut und Acacia catechu, Vergleich mit Naproxen ohne Placebo (RCT, 79 Erwachsene, Arjmandi 2014)'
    ],
    risks: [
      'Seltene Leberschäden: 4 Fälle unter dem Baicalin-Präparat Flavocoxid im US-Register (Chalasani 2012), 194 FDA-Meldungen und Rückruf 2018; in chinesischen Kliniken 0,095 % bestätigte Fälle, höheres Risiko über 10 g/Tag (Fu 2026)',
      'Lunge: Hypersensitivitätspneumonitis unter Flavocoxid; in Japan Signal für interstitielle Lungenerkrankung unter Scutellaria-haltigen Kampo-Rezepturen, besonders ab 60 Jahren (Oura 2024)',
      'Wechselwirkungen: Baicalin senkte Rosuvastatin-Spiegel je nach Genotyp um bis zu 47,0 % (Fan 2008); Scutellaria-Wurzel veränderte CYP2C9 (Losartan) und CYP2E1 (Yi 2009)',
      'Kaum Wirksamkeitsdaten mit Helmkraut allein; die meisten Studien testen Kombinationen, eine Kognitionsstudie ohne Unterschied zu Placebo (Krieger 2025)',
      'Keine Daten zu Schwangerschaft und Stillzeit; Verwechslung mit Amerikanischem Helmkraut möglich, das früher mit leberschädigendem Gamander verfälscht wurde'
    ],
    dosage: 'Studien verwendeten 500 mg Baicalin pro Tag über 12 Wochen (Blutfette), 3,52 g Wurzelextrakt pro Tag über 8 Wochen (Typ-2-Diabetes), 240 mg Helmkraut-Extrakt plus 51 mg Acacia-catechu-Extrakt pro Tag über 4 Wochen (Kognition, ohne Effekt) sowie das Kombinationspräparat Flavocoxid mit 250 mg zweimal täglich über 12 Wochen; Baicalein-Tabletten wurden in Phase-1-Studien mit Einzeldosen von 100 bis 800 mg geprüft. In chinesischen Kliniken stieg das Leberrisiko bei Tagesdosen über 10 g Droge, der Grenze des chinesischen Arzneibuchs. Amtliche Referenzwerte oder Höchstmengen von EFSA, BfR oder DGE gibt es nicht. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien täglich über 1 bis 12 Wochen eingenommen; Langzeitdaten fehlen. Auf den botanischen Namen Scutellaria baicalensis achten und bei Medikamenteneinnahme, besonders Statinen, vorher ärztlich abklären.',
    synergies: ['l-theanin', 'quercetin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Keine üblichen Lebensmittel; getrocknete Wurzel als Tee oder Abkochung in der chinesischen Medizin',
    link: 'https://pubmed.ncbi.nlm.nih.gov/22711078/'
  },
  {
    id: 'biotin',
    name: 'Biotin (Vitamin B7)',
    altNames: 'Vitamin B7, Vitamin H, D-Biotin, Coenzym R',
    category: 'Vitamin',
    tags: ['haare', 'haut', 'energie', 'stoffwechsel', 'nerven'],
    short: 'Unverzichtbares B-Vitamin für Haut, Haare und Nägel – bei echtem Mangel klar wirksam. Für mehr Haarwachstum ohne Mangel gibt es keinen kontrollierten Nachweis, und hohe Dosen können Laborwerte verfälschen.',
    description: 'Biotin ist Cofaktor mehrerer Carboxylasen im Fett-, Aminosäure- und Zuckerstoffwechsel; ein Mangel zeigt sich zuerst an Haut, Haaren und Nägeln. Der angeborene Biotinidase-Mangel (1 : 25.000 Neugeborene) wird im Neugeborenen-Screening erfasst und mit Biotin vollständig behandelt. In einer Zürcher Praxis hatten 38 % von 541 Frauen mit Haarausfall Biotinwerte im Mangelbereich. Für Haarwachstum bei guter Versorgung zeigte die beste placebokontrollierte Studie keinen Unterschied; brüchige Nägel besserten sich in älteren unkontrollierten Serien (41 von 45 Patienten). Milligramm-Dosen stören viele Labortests, darunter Schilddrüsenwerte und Troponin – die FDA warnte 2017 und 2019.',
    benefits: [
      'Bei angeborenem oder erworbenem Mangel klar wirksam: Biotinidase-Mangel (1 : 25.000 Neugeborene) ist mit Biotin vollständig behandelbar (Leitlinie Neugeborenen-Screening 2020)',
      'Haar und Nägel bessern sich bei zugrunde liegendem Mangel oder Erkrankung: 18 Fallberichte, alle mit Besserung (Übersicht Patel 2017) – bei Gesunden nicht belegt',
      'Brüchige Nägel: 41 von 45 Patienten gebessert unter 2,5 mg täglich (Floersheim 1989), Nageldicke +25 % (n = 8, Colombo 1990) – unkontrollierte Serien',
      'Leichter Mangel in der Schwangerschaft häufig und korrigierbar: 300 µg täglich über 14 Tage normalisierten einen Stoffwechselmarker (RCT, 26 Schwangere, Mock 2002)',
      'Zugelassene EU-Gesundheitsangaben u. a. zu Energiestoffwechsel, Nervensystem, normaler Haut und normalen Haaren – nicht zu Nägeln'
    ],
    risks: [
      'Verfälscht Labortests mit Biotin-Streptavidin-Prinzip: 10 mg täglich störten 9 von 23 solcher Tests (Li 2017, JAMA) – falsch hohe Schilddrüsenwerte, falsch niedriges Troponin',
      'FDA-Warnungen 2017 und 2019; laut NIH ein Todesfall nach falsch niedrigem Troponin. EMA sieht ein Interferenzrisiko ab 150 µg pro Tag',
      'Störung hielt nach 5 mg etwa 8 Stunden an, nach 10 mg 1 bis 2 Tage (Zhang 2020) – länger bei eingeschränkter Nierenfunktion',
      'Antiepileptika senken den Biotinspiegel; rohes Eiklar (Avidin) bindet Biotin'
    ],
    dosage: 'Referenzwerte: D-A-CH und EFSA 40 µg pro Tag für Erwachsene, 45 µg in der Stillzeit; Zufuhr in Deutschland im Median 43 bis 48 µg (Männer) bzw. 39 bis 42 µg (Frauen). Kein UL und keine BfR-Höchstmenge, weil keine Toxizität bekannt ist; das BfR empfiehlt stattdessen einen Labortest-Hinweis auf jedem Präparat. Studien verwendeten 300 µg (Schwangerschaft), 2,5 mg (brüchige Nägel) und 5 bis 10 mg (Biotinidase-Mangel, ärztlich). Das sind Referenz- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Wasserlöslich, Einnahme unabhängig von Mahlzeiten möglich. Vor jeder Blutabnahme Biotin angeben – auch aus Multivitamin- und Haar-Haut-Nagel-Präparaten.',
    synergies: ['vitamin-b-komplex'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Leber, Eier (ein gekochtes Ei etwa 10 µg), Fisch, Nüsse und Samen, Süßkartoffel',
    link: 'https://www.bfr.bund.de/cm/343/hoechstmengenvorschlaege-fuer-biotin-in-lebensmitteln-inklusive-nahrungsergaenzungsmitteln.pdf'
  },
  {
    id: 'gotu-kola',
    name: 'Gotu Kola (Centella asiatica)',
    altNames: 'Centella asiatica, Asiatischer Wassernabel, Hydrocotyle asiatica, Indian Pennywort, Mandukparni, TTFCA, Asiaticosid, Madecassosid',
    category: 'Kräuter',
    tags: ['haut', 'durchblutung', 'gehirn', 'kollagen'],
    short: 'Asiatische Heilpflanze, deren Triterpene in 8 kleinen Studien die Mikrozirkulation bei Venenschwäche verbesserten und in Studien äußerlich wie innerlich Falten glätteten. Für Gedächtnis und Konzentration fand eine Meta-Analyse keinen Unterschied zu Placebo, und seltene Leberschäden sind beschrieben.',
    description: 'Gotu Kola (Centella asiatica) ist ein Doldenblütler aus Süd- und Südostasien, der in Ayurveda und chinesischer Medizin genutzt und in Asien auch als Lebensmittel und Tee verwendet wird. Wirksam sollen die Triterpene Asiaticosid, Madecassosid, Asiatsäure und Madecassäure sein, die im Labor die Kollagenbildung anregen und Entzündungsbotenstoffe dämpfen; am Menschen sind Asiatsäure und Madecassäure im Blut nachweisbar. Eine systematische Übersicht fand 8 RCTs mit einer gereinigten Triterpenfraktion (TTFCA), die Durchblutungswerte und Knöchelschwellung bei Venenschwäche verbesserten, allerdings klein, alt und schlecht berichtet. Äußerlich verringerte Centella in 5 doppelblinden Studien Falten, und in einer RCT mit 112 Frauen sank auch nach 12 Wochen Einnahme die mittlere Faltentiefe um 11,1 Prozent. Für Kognition fand eine Meta-Analyse keinen Effekt, für den Blutzucker eine 6-Monats-RCT ebenfalls nicht. Das Kraut ist in der EU als Lebensmittel verkehrsfähig; die EMA hat die innere Anwendung wegen Bedenken zu Leber und Fruchtbarkeit nicht in ihre Monografie aufgenommen.',
    benefits: [
      'Bessere Mikrozirkulation und weniger Knöchelschwellung bei Venenschwäche (systematische Übersicht, 8 RCTs mit 17 bis 99 Teilnehmenden, 4 bis 8 Wochen, Chong 2013) – Surrogatmarker, alte Studien, 4 von 8 aus derselben Arbeitsgruppe',
      'Weniger Falten an Augen und Lippen und mehr Hautfeuchtigkeit bei äußerlicher Anwendung (5 doppelblinde RCTs, 172 Frauen, Kongkaew 2020)',
      'Mittlere Faltentiefe −11,1 % nach Einnahme, stärker als Placebo; Feuchtigkeit und Elastizität nur +2,7 % bzw. +0,7 % (doppelblinde RCT, 112 Frauen, 200 mg/Tag, 12 Wochen, Hur 2026)',
      'Etwas mehr selbst bewertete Wachheit (SMD 0,71) und weniger Ärger, aber kein Effekt auf Gedächtnis oder Aufmerksamkeit (Meta-Analyse, 11 RCTs, Puttarak 2017)',
      'Gedämpfter Schreckreflex nach einmalig 12 g als Hinweis auf angstlösende Wirkung (doppelblinde RCT, 40 Gesunde, Bradwejn 2000) – Einzelstudie'
    ],
    risks: [
      'Seltene Leberentzündungen in Fallberichten, teils mit Rückfall bei Wiedereinnahme (Jorge 2005: 3 Frauen); LiverTox stuft das Risiko als selten ein – bei Lebererkrankung meiden, bei Gelbsucht oder dunklem Urin sofort absetzen',
      'Die EMA hat die innere Anwendung wegen Bedenken zu Leber und Fruchtbarkeit (Rattendaten) nicht in ihre Monografie aufgenommen; bei Kinderwunsch, Schwangerschaft, Stillzeit und unter 18 Jahren meiden',
      'Häufigste Nebenwirkungen Übelkeit und Magenbeschwerden (14,7 % in einer 6-Monats-RCT, Tawanwongsri 2025)',
      'Allergie gegen Doldenblütler (Sellerie, Karotte u. a.) ist eine Gegenanzeige; Kontaktdermatitis bei äußerlicher Anwendung beschrieben; Vorsicht mit beruhigenden Mitteln',
      'Kognitions- und Blutzucker-Versprechen in kontrollierten Studien nicht bestätigt; Zubereitungen (Kraut, Extrakt, Triterpenfraktion) kaum vergleichbar'
    ],
    dosage: 'Studien verwendeten bei Venenschwäche eine gereinigte Triterpenfraktion (TTFCA) mit Einzeldosen von 30 bis 120 mg, ein- bis dreimal täglich über 4 bis 8 Wochen, für die Haut 200 mg standardisierten Extrakt pro Tag über 12 Wochen, bei Typ-2-Diabetes 1.200 mg Extrakt pro Tag über 6 Monate und bei älteren Menschen 250 bis 750 mg Extrakt pro Tag über 2 Monate; die EMA nennt für die klinischen Studien insgesamt Tagesdosen von 40 mg bis 12 g. Die EU-Monografie gilt nur äußerlich: 0,6 g Kraut als Umschlag oder Pulver dreimal täglich (1,8 g pro Tag), höchstens 1 Woche. Amtliche Referenzwerte oder Höchstmengen von EFSA, BfR oder DGE gibt es nicht. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'In den Studien als Kapsel oder Tablette ein- bis dreimal täglich über 4 bis 52 Wochen. Kraut, Tee und standardisierte Extrakte sind nicht gleichwertig; auf den botanischen Namen Centella asiatica achten, da auch Bacopa als Brahmi verkauft wird.',
    synergies: ['bacopa', 'ginkgo', 'kollagen'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Kraut von Centella asiatica, in Asien als Lebensmittel und als Aufguss (Tee) genutzt',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23533507/'
  },
  {
    id: 'l-lysin',
    name: 'L-Lysin',
    altNames: 'Lysin, Lys, L-Lysinhydrochlorid, Lysin-HCl, essenzielle Aminosäure',
    category: 'Aminosäure',
    tags: ['immun', 'haut', 'stress', 'knochen'],
    short: 'Essenzielle Aminosäure, die vor allem gegen wiederkehrenden Lippenherpes genommen wird. Kleine Studien fanden mit Mengen ab etwa 1,2 g pro Tag weniger Rückfälle, andere keinen Effekt; die Cochrane-Übersicht sieht keine Belege für Wirksamkeit.',
    description: 'Lysin ist ein Eiweißbaustein, den der Körper nicht selbst bilden kann; Erwachsene brauchen etwa 30 mg pro Kilogramm und Tag, westliche Kost liefert 3 bis 7 g. Die Herpes-These beruht auf Zellkultur: Lysin wirkt dort als Gegenspieler von Arginin, das das Virus zum Vermehren braucht. In einer Multicenter-Studie mit 52 Auswertbaren brachten 3 g pro Tag über 6 Monate 2,4 Episoden weniger, mit 624 mg pro Tag zeigte sich in einer anderen Studie dagegen nichts, und eine Cochrane-Übersicht über 32 RCTs fand für Lysin keine Belege. Die Sicherheit ist mit 71 Studien gut untersucht, der vorläufige NOAEL liegt bei 6,0 g pro Tag. Die Herzthese von Rath und Pauling zu Lipoprotein(a) beruht auf einer Hypothese und 3 Fallberichten und wurde nie kontrolliert geprüft.',
    benefits: [
      'Wiederkehrender Lippenherpes: 3 g pro Tag über 6 Monate senkten die Zahl der Episoden im Mittel um 2,4, mit milderen Symptomen und kürzerer Abheilung (doppelblinde Multicenter-RCT, 52 Auswertbare, Griffith 1987)',
      'Dosisabhängigkeit: 1.248 mg pro Tag senkte die Rückfallrate, 624 mg nicht (Crossover-RCT, 41 Patienten, McCune 1984); Rückfälle seltener bei Serum-Lysin über 165 nmol/ml (26 Teilnehmer, 12 Monate, Thein 1984)',
      'Bei lysinarmer, getreidebasierter Ernährung: weniger Angst und Stressreaktion (RCT, Syrien, Smriga 2004) und weniger Durchfallepisoden bei Kindern mit 1 g pro Tag (RCT, 271 Teilnehmer, Ghosh 2010)',
      'Steigerte in einer kleinen Kurzzeitstudie die Calciumaufnahme im Darm (45 osteoporotische Patienten, Civitelli 1992) – klinische Studien zum Knochenschutz fehlen'
    ],
    risks: [
      'Herpes-Wirkung umstritten: negative RCTs (21 Patienten, 400 mg 3-mal täglich, DiGiovanna 1984) und keine Belege in der Cochrane-Übersicht (32 RCTs, Chi 2015)',
      'Meist Magen-Darm-Beschwerden wie Übelkeit, Bauchschmerzen, Durchfall; in 71 Studien kein erhöhtes Risiko gegenüber Kontrollen (Hayamizu 2019)',
      'Ein Fallbericht von Fanconi-Syndrom und Nierenentzündung mit chronischem Nierenversagen (Lo 1996); bei Nierenerkrankung nur nach ärztlicher Rücksprache',
      'Übersichtsarbeit rät, Menschen mit Herz-Kreislauf- oder Gallenblasenerkrankung auf theoretische Risiken hinzuweisen (Mailoo 2017)',
      'Pauling-Therapie gegen Arteriosklerose ohne kontrollierte Studien – kein Ersatz für eine kardiologische Behandlung'
    ],
    dosage: 'Herpes-Studien verwendeten 1.000 mg 3-mal täglich über 6 Monate (Griffith 1987), 1.248 mg pro Tag (wirksam) gegenüber 624 mg (unwirksam, McCune 1984) und 1.000 mg pro Tag über 12 Monate (Thein 1984); eine Übersicht hält Mengen unter 1 g pro Tag ohne argininarme Kost für unwirksam (Mailoo 2017). Der Bedarf Erwachsener liegt bei etwa 30 mg pro Kilogramm Körpergewicht und Tag, die übliche Zufuhr bei 3 bis 7 g. Als vorläufiger NOAEL für gesunde Erwachsene gelten 6,0 g zusätzliches Lysin pro Tag (Hayamizu 2020, Cynober 2020). Das BVL erlaubte 2013 Kapseln mit 800 mg L-Lysin pro Tag; eine gesetzliche Höchstmenge gibt es nicht. Das sind Studien- und Behördenangaben, keine Verzehrempfehlung.',
    intake: 'In den Herpes-Studien täglich und über Monate genommen, in der größten Studie auf 3 Gaben am Tag verteilt (Griffith 1987).',
    synergies: ['kalzium'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Fleisch, Fisch, Eier, Milchprodukte; pflanzlich vor allem Hülsenfrüchte und Nüsse. Getreide, Reis und Mais sind lysinarm.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26252373/'
  },
  {
    id: 'shiitake',
    name: 'Shiitake',
    altNames: 'Lentinula edodes, Lentinus edodes, Shii-take, Lentinan, LEM, Lentinex, AHCC',
    category: 'Pilz',
    tags: ['immun', 'cholesterin', 'darm', 'entzuendung'],
    short: 'Weltweit zweithäufigster Speisepilz mit dem Beta-Glucan Lentinan, das in Japan als Krebsmedikament gespritzt wird. Shiitake-Verzehr verändert Immunmarker, Infektschutz und Cholesterinsenkung sind am Menschen aber nicht gesichert; roh kann er eine typische Hautreaktion auslösen.',
    description: 'Shiitake (Lentinula edodes) enthält Beta-Glucane wie Lentinan, dazu Eritadenin, Ballaststoffe und Ergothionein. Gereinigtes Lentinan verlängerte als Injektion zusätzlich zur Chemotherapie bei fortgeschrittenem Magenkrebs das Überleben (650 Patienten, HR 0,80) und ist in Japan als Arzneimittel zugelassen; für Pilzpulver gilt das nicht. 52 junge Erwachsene, die 4 Wochen lang 5 oder 10 g getrocknete Shiitake aßen, hatten aktivere Abwehrzellen, mehr sIgA und ein niedrigeres CRP, die Studie hatte aber keine Kontrollgruppe. Beim Cholesterin ist die Lage widersprüchlich: 3,5 g Shiitake-Beta-Glucan pro Tag änderten die Blutfette nicht, Shiitake-Riegel senkten nur die Triglyceride um 10 %. Das bekannteste Risiko ist die Shiitake-Dermatitis, ein streifenförmiger Ausschlag vor allem nach rohen oder nicht durchgegarten Pilzen.',
    benefits: [
      'Aktivere Immunzellen, mehr sIgA, niedrigeres CRP nach 4 Wochen mit 5 oder 10 g getrockneten Shiitake täglich – 52 Gesunde, ohne Kontrollgruppe, Laborwerte statt Infekte (Dai 2015)',
      'Lentinan als Injektion zusätzlich zur Chemotherapie: längeres Überleben bei fortgeschrittenem Magenkrebs, HR 0,80 (Meta-Analyse, 5 RCTs, 650 Patienten, Oba 2009) – Arzneimittel, nicht auf Pilzpulver übertragbar',
      'Triglyceride -10 % nach 66 Tagen mit Shiitake-Riegeln (RCT, 68 Personen, Spim 2021); 3,5 g Shiitake-Beta-Glucan pro Tag ohne Wirkung auf Cholesterin (RCT, 52 Personen, Morales 2021)',
      'Cholesterinsenkung durch Eritadenin – bisher nur im Tierversuch und in einer 7-Tage-Studie der 1970er-Jahre',
      'AHCC (Myzelextrakt, überwiegend Alpha-Glucan): 14 von 22 Frauen HPV-negativ gegenüber 2 von 19 unter Placebo (Phase-II-RCT, 50 Frauen, Smith 2022) – eigenes Produkt, kein Shiitake-Pulver'
    ],
    risks: [
      'Shiitake-Dermatitis: juckender, streifenförmiger Ausschlag, meist nach rohen oder nicht durchgegarten Pilzen; 59 Fälle an französischen Giftnotrufen 2014 bis 2019, alle folgenlos abgeheilt (Boels 2022); laut BfR auch nach gekochten Pilzen möglich',
      'Eosinophilie und Magen-Darm-Beschwerden bei 5 von 10 Gesunden unter 4 g Shiitake-Pulver täglich über 10 Wochen (Levy 1998)',
      'Große, glitschige Stücke können unverdaut einen Darmverschluss auslösen (2 Fälle, Ng 2020)',
      'Wechselwirkungen mit Medikamenten nicht systematisch untersucht; Krebstherapie nur in Absprache mit dem Behandlungsteam ergänzen',
      'Nach einer Shiitake-Dermatitis den Pilz künftig meiden'
    ],
    dosage: 'Studien verwendeten 5 oder 10 g getrocknete Shiitake pro Tag über 4 Wochen (Dai 2015) und 10,4 g einer Shiitake-Beta-Glucan-Mischung mit 3,5 g Beta-Glucan pro Tag über 8 Wochen (Morales 2021). Unter 4 g Shiitake-Pulver täglich über 10 Wochen trat bei 5 von 10 Gesunden eine Eosinophilie auf (Levy 1998). Für den zugelassenen Myzelextrakt Lentinex gilt in Nahrungsergänzungsmitteln höchstens 2,5 ml pro Tag (2011/73/EU); AHCC wurde mit 3 g pro Tag untersucht. Amtliche Höchstmengen von BfR, DGE oder EFSA für Shiitake-Pulver gibt es nicht.',
    intake: 'Shiitake als Speisepilz immer gründlich durchgaren und nicht roh essen. Bei Pulver und Kapseln auf Angaben zu Fruchtkörper oder Myzel und zum Beta-Glucan-Gehalt achten.',
    synergies: ['beta-glucan', 'loewenmaehne', 'zink'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Frische und getrocknete Shiitake-Pilze; Shiitake-Pulver',
    link: 'https://pubmed.ncbi.nlm.nih.gov/25866155/'
  },
  {
    id: 'tremella',
    name: 'Tremella',
    altNames: 'Tremella fuciformis, Silberohr, Schneepilz, Snow Mushroom, Snow Fungus, White Jelly Mushroom, Tremella-Polysaccharide',
    category: 'Pilz',
    tags: ['haut', 'gedaechtnis', 'blutzucker', 'darm'],
    short: 'Gallertartiger Speisepilz, vermarktet als pflanzliche Hyaluronsäure für die Haut. Eine kleine Studie zeigt bessere Gedächtniswerte, für die Haut gibt es bei Einnahme bisher nur Tierdaten.',
    description: 'Tremella fuciformis (Silberohr, Schneepilz) wird in Asien seit Jahrhunderten gegessen; seine Polysaccharide aus Mannose, Xylose und Glucuronsäure binden viel Wasser. Äußerlich aufgetragen spendet Tremella-Extrakt Feuchtigkeit, für die Einnahme gibt es aber keine Humanstudie mit Hautendpunkten, nur Mausdaten über die Darmflora. Belastbarer ist ein RCT mit 75 Personen: 600 oder 1.200 mg pro Tag verbesserten über 8 Wochen subjektive Gedächtnisbeschwerden und Testleistungen stärker als Placebo. In einer industriefinanzierten Studie mit 56 Personen mit Prädiabetes sanken HbA1c und Taillenumfang leicht innerhalb der Tremella-Gruppe, ein Vergleich gegen Placebo wird nicht berichtet.',
    benefits: [
      'Weniger subjektive Gedächtnisbeschwerden, besseres Kurzzeitgedächtnis und bessere exekutive Funktionen mit 600 oder 1.200 mg pro Tag über 8 Wochen – RCT, 75 Personen, nicht wiederholt (Ban 2018)',
      'HbA1c 6,03 auf 5,96 % und Taillenumfang 95,2 auf 93,46 cm nach 12 Wochen Tremella-Getränk – RCT, 56 Personen mit Prädiabetes, nur Vergleich innerhalb der Gruppe, industriefinanziert (Gitsomboon 2024)',
      'Äußerlich feuchtigkeitsspendend: Handgel mit 10 % Tremella-Extrakt, 20 Freiwillige, Wirkung bis 180 Minuten (Lourith 2021)',
      'Hautfeuchtigkeit und Hautbarriere bei Einnahme – bisher nur im Mausmodell, keine Humanstudie (Xie 2022; Wang 2026)'
    ],
    risks: [
      'Keine systematischen Sicherheits- oder Langzeitdaten; in Studien über 8 bis 12 Wochen Nebenwirkungen nicht häufiger als Placebo',
      'Frischer oder lange eingeweichter Pilz kann Burkholderia gladioli tragen (16,6 % frischer Proben in Shanghai); die giftbildende Variante erzeugt Bongkreksäure ohne Gegenmittel – nicht 24 Stunden oder länger einweichen',
      'Wechselwirkungen am Menschen nicht untersucht; wegen Tierdaten zur Blutzuckersenkung bei Diabetesmedikamenten ärztlich abklären',
      'Keine Daten zu Schwangerschaft und Stillzeit'
    ],
    dosage: 'Studien verwendeten 600 mg oder 1.200 mg Tremella pro Tag über 8 Wochen (Ban 2018) und ein tägliches Getränk mit 180 ml und 15 % Tremella über 12 Wochen (Gitsomboon 2024). Amtliche Referenzwerte oder Höchstmengen von BfR, DGE oder EFSA gibt es nicht.',
    intake: 'Pulver oder Extrakt aus dem Fruchtkörper wählen, da Myzel in der EU nicht als Lebensmittel zugelassen ist. Getrockneten Pilz für die Küche nur kurz einweichen und frisch verarbeiten.',
    synergies: ['hyaluronsaeure', 'kollagen'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Getrockneter oder frischer Tremella-Pilz (Silberohr)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/42792150/'
  },
  {
    id: 'vitamin-a',
    name: 'Vitamin A (Retinol)',
    altNames: 'Retinol, Retinylpalmitat, Retinylacetat, Retinylester, Provitamin A, Beta-Carotin',
    category: 'Vitamin',
    tags: ['augen', 'immun', 'haut', 'schwangerschaft'],
    short: 'Unverzichtbar für Sehen, Haut, Schleimhäute und Abwehr – bei Mangel lebensrettend. In Deutschland meist ausreichend versorgt, mit sehr geringem Abstand zur Obergrenze: Hochdosiertes Retinol ist in der Schwangerschaft riskant, Beta-Carotin-Präparate bei Rauchern.',
    description: 'Fertiges Vitamin A (Retinol) stammt aus tierischen Lebensmitteln, Provitamin A wie Beta-Carotin aus Pflanzen; der Körper wandelt Beta-Carotin nur bei Bedarf um. Bei Mangel senkt Vitamin A die Kindersterblichkeit um 12 % (Cochrane 2022, 19 Studien, 1.202.382 Kinder). In Deutschland liegt die übliche Zufuhr laut Nationaler Verzehrsstudie über den Empfehlungen, die Obergrenze für Retinol (3.000 µg pro Tag) wird von Teilen der Bevölkerung schon fast erreicht. Mehr als 10.000 IE Retinol aus Supplementen in der Frühschwangerschaft gingen mit 4,8-fach häufigeren Fehlbildungen aus der kranialen Neuralleiste einher. Beta-Carotin erhöhte bei Rauchern das Lungenkrebsrisiko (ATBC +18 %, CARET RR 1,28). Das BfR schlägt für NEM höchstens 0,2 mg Vitamin A oder gar keinen Zusatz vor.',
    benefits: [
      'Bei Mangel lebensrettend: Kindersterblichkeit −12 % (RR 0,88; Cochrane 2022, 19 Studien, 1.202.382 Kinder, hohe Vertrauenswürdigkeit), weniger Masern und Nachtblindheit',
      'Masern bei Kindern unter zwei Jahren in Mangelgebieten: zwei Dosen senkten die Sterblichkeit (RR 0,18; Cochrane 2005)',
      'Grundlage des Sehens im Dunkeln (Rhodopsin); Nachtblindheit ist das erste Mangelzeichen',
      'Zugelassene EU-Gesundheitsangaben zu Sehkraft, Haut, Schleimhäuten, Immunsystem und Eisenstoffwechsel',
      'Für gut versorgte Erwachsene kein belegter Zusatznutzen (Cochrane 2012: Vitamin A allein ohne Effekt auf die Sterblichkeit)'
    ],
    risks: [
      'Schwangerschaft: mehr als 10.000 IE Retinol aus Supplementen täglich – Neuralleisten-Fehlbildungen 4,8-fach häufiger, etwa 1 von 57 Kindern betroffen (Rothman 1995); in der Schwangerschaft keine Leber (BfR, EFSA)',
      'Beta-Carotin-Präparate bei Rauchern: Lungenkrebs +18 % (ATBC, 20 mg), RR 1,28 mit Retinol (CARET) – EFSA rät Rauchern ab',
      'Geringer Sicherheitsabstand: Leber enthält im Mittel 17 bis 29 mg pro 100 g; UL 3.000 µg pro Tag (EFSA 2024)',
      'Knochen: höheres Hüftbruchrisiko bei sehr hoher Retinolzufuhr in Beobachtungsdaten (RR 1,48), laut EFSA 2024 bis 3.000 µg nicht gestützt',
      'Nicht mit Retinoid-Medikamenten (z. B. Isotretinoin) kombinieren; Orlistat senkt die Aufnahme'
    ],
    dosage: 'Referenzwerte: D-A-CH 0,85 mg (Männer unter 65) bzw. 0,70 mg (Frauen) Retinolaktivitätsäquivalente pro Tag, Schwangere 0,80 mg, Stillende 1,30 mg; EFSA 0,75 bzw. 0,65 mg. Umrechnung: 1 µg Retinol = 12 µg Beta-Carotin (D-A-CH) bzw. 6 µg (EFSA); 1 IE Retinol = 0,3 µg. Tolerierbare Obergrenze für fertiges Vitamin A: 3.000 µg pro Tag (EFSA 2024, auch für Schwangere). BfR-Vorschlag für NEM: kein Zusatz oder höchstens 0,2 mg Vitamin A pro Tagesdosis; Beta-Carotin höchstens 3,5 mg. Studien verwendeten 20 mg Beta-Carotin (ATBC) und 30 mg Beta-Carotin plus 25.000 IE Retinol (CARET) – mit Schaden bei Rauchern. Das sind Referenz- und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Fettlöslich, daher zu einer fetthaltigen Mahlzeit. In der Schwangerschaft und bei Kinderwunsch nur nach ärztlicher Rücksprache; Raucher meiden Beta-Carotin-Präparate.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Retinol: Leber (sehr viel), Fisch, Eier, Milchprodukte, angereicherte Margarine; Beta-Carotin: Süßkartoffel, Karotten, Spinat, Kürbis',
    link: 'https://efsa.onlinelibrary.wiley.com/doi/10.2903/j.efsa.2024.8814'
  },
  {
    id: 'nootropika-stacks',
    name: 'Nootropika-Fertigmischungen',
    altNames: 'Nootropic Stacks, Brain Supplements, Fokus-Kapseln; Beispiele: Alpha Brain, Mind Lab Pro, Qualia Mind',
    category: 'Stress & Geist',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic'],
    short: 'Kapseln oder Pulver, die viele Zutaten wie Citicolin, Bacopa, L-Theanin oder Alpha-GPC in einer Portion bündeln, bei Mind Lab Pro sind es elf. Zu den bekannten Marken gibt es je ein bis zwei kleine, meist herstellerfinanzierte Studien: teils bessere Gedächtniswerte, teils kein Unterschied zu Placebo. Was die Einzelstoffe können, steht auf deren eigenen Seiten.',
    description: 'Nootropika-Fertigmischungen kombinieren Pflanzenextrakte, Cholinquellen, Aminosäuren und Vitamine zu einem Produkt, das Gedächtnis, Konzentration und geistige Energie verbessern soll. Geprüft wird bei diesen Studien immer die ganze Mischung, nicht die einzelne Zutat. Für Alpha Brain liegen eine positive Studie mit 63 jungen Erwachsenen und eine Studie mit 43 Soldaten ohne Unterschied zu Placebo vor, für Mind Lab Pro eine unausgewogen verteilte Gedächtnisstudie mit 49 Personen und eine 60-Tage-Studie ohne bessere Leistung. Die Studie zu Qualia Mind ist registriert und seit 2020 abgeschlossen, Ergebnisse sind nicht veröffentlicht.',
    benefits: [
      'Alpha Brain: Nach 6 Wochen bei 63 gesunden Erwachsenen zwischen 18 und 35 Jahren besser als Placebo beim verzögerten Wortabruf und bei exekutiven Funktionen; doppelblind, mit Placebo-Vorlaufphase (Solomon 2016)',
      'Mind Lab Pro: Nach 30 Tagen bei 49 gesunden Erwachsenen bessere Werte beim sofortigen und verzögerten Abruf als in der Kontrollgruppe; zugeteilt wurden 36 Personen zum Präparat und 13 zu Placebo, laut Autoren pseudo-randomisiert (Abbott-Imboden 2023)',
      'Eine koffeinhaltige Pulvermischung (Evo-Gamers) verbesserte bei 26 jungen Erwachsenen 30 Minuten nach Einnahme die Reaktionszeit in mehreren Tests gegenüber Placebo, Effektstärken 0,4 bis 0,6; Crossover, dreifach verblindet, herstellerfinanziert (Medrano 2022)',
      'Mehrere Zutaten sind einzeln untersucht, etwa Bacopa, Citicolin, L-Theanin mit Koffein oder Phosphatidylserin – deren Datenlage gilt aber für die dort geprüften Mengen'
    ],
    risks: [
      'Alpha Brain verbesserte bei 43 Soldaten über 30 Tage weder Trefferquote noch Reaktionszeit beim Schießtraining gegenüber Placebo; die Studie wurde vom Hersteller Onnit finanziert (Barringer 2018)',
      'Mind Lab Pro verbesserte nach 60 Tagen weder Genauigkeit noch Reaktionszeit bei einer Entscheidungsaufgabe; gefunden wurden nur Veränderungen in EEG-Kennwerten, deren Bedeutung offen ist (O’Reilly 2025, finanziert von der Performance Lab Group)',
      'Qualia Mind: Die einzige registrierte Studie (60 Teilnehmer, abgeschlossen 2020) hat bis heute weder Ergebnisse im Register noch eine Veröffentlichung',
      'Einzelne Mischungen enthalten Stoffe mit eigenem Risikoprofil oder unklarem Rechtsstatus, etwa Vinpocetin oder Huperzia-Extrakt (Huperzin A); Vinpocetin ist in Deutschland verschreibungspflichtig',
      'Die Mengen liegen teils unter denen der Einzelstudien: Mind Lab Pro enthält je Portion 150 mg Bacopa, 100 mg L-Theanin und 50 mg Rhodiola, in den Studien zu den Einzelstoffen wurden 300 bis 600 mg, 200 bis 400 mg und 144 bis 400 mg verwendet; Ergebnisse der Einzelstoffe lassen sich nicht auf die Mischung übertragen und umgekehrt',
      'Koffein in manchen Mischungen kann einen kurzfristigen Effekt allein erklären'
    ],
    dosage: 'Keine Verzehrempfehlung. Geprüft wurde in den Studien jeweils die vom Hersteller vorgesehene Portion, zum Beispiel bei Mind Lab Pro zwei Kapseln mit unter anderem 250 mg Citicolin, 150 mg Bacopa monnieri, 100 mg Phosphatidylserin und 100 mg L-Theanin (O’Reilly 2025), bei Alpha Brain in der Soldatenstudie drei Kapseln mit zusammen 1.925 mg (Barringer 2018). Für einzelne Zutaten gelten eigene Grenzen, etwa für Citicolin in Nahrungsergänzungsmitteln höchstens 500 mg pro Tag.',
    intake: 'Keine Einnahmeempfehlung. Wer Medikamente nimmt, schwanger ist oder stillt, sollte die Zutatenliste mit Ärztin, Arzt oder Apotheke durchgehen – die Wechselwirkungen ergeben sich aus den Einzelstoffen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Keine natürliche Quelle; Fertigprodukte aus Pflanzenextrakten, Cholinquellen, Aminosäuren und Vitaminen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26876224/'
  },
  {
    id: 'arjuna',
    name: 'Arjuna',
    altNames: 'Terminalia arjuna, Arjuna-Rinde, Arjun',
    category: 'Kräuter',
    tags: ['herz', 'blutdruck', 'cholesterin'],
    short: 'Rinde eines indischen Baums, im Ayurveda seit langem als Herzmittel verwendet. Es gibt mehrere kleine Studien, fast alle aus Indien: bei stabiler Angina positiv, bei Herzschwäche in der größten placebokontrollierten Studie ohne Wirkung auf die Pumpfunktion.',
    description: 'Arjuna ist die Stammrinde von Terminalia arjuna, einem Baum aus Indien. Sie enthält unter anderem Triterpensäuren wie Arjunasäure, Glykoside (Arjunoside), Flavone und Gerbstoffe. Eine Meta-Analyse von 2026 über 9 randomisierte Studien mit 537 Menschen mit Herzschwäche fand eine geringere linksventrikuläre Masse und ein höheres HDL-Cholesterin, aber keine signifikante Verbesserung der Auswurfleistung. Die größte doppelblinde Einzelstudie mit 100 Patienten fand nach 12 Wochen keinen Unterschied bei der Auswurfleistung. Die Studien sind klein, kurz und stammen überwiegend aus Indien.',
    benefits: [
      'Stabile Angina: In einer doppelblinden Crossover-Studie mit 58 Männern weniger Anginaanfälle und längere Belastungsdauer auf dem Laufband als unter Placebo, ähnlich wie unter Isosorbidmononitrat; jede Behandlungsphase dauerte nur eine Woche (Bharani 2002)',
      'Herzschwäche: Meta-Analyse über 9 randomisierte Studien mit 537 Patienten, linksventrikuläre Masse gesunken (mittlere Differenz −44,32), HDL gestiegen (mittlere Differenz 3,53), Auswurfleistung nicht signifikant verbessert (Kumar 2026)',
      'Blutdruck: In einer dreifach verblindeten Studie mit 44 Menschen mit Bluthochdruck Stufe 1, alle zusätzlich mit Telmisartan behandelt, sank der Blutdruck nach 28 Tagen stärker als unter Placebo (Nazir 2026)',
      'Blutfette: In einer randomisierten Studie mit 105 Patienten mit koronarer Herzkrankheit sanken nach 30 Tagen Rindenpulver Gesamtcholesterin um 9,7 Prozent und LDL um 15,8 Prozent, verglichen mit den Ausgangswerten derselben Gruppe (Gupta 2001)'
    ],
    risks: [
      'Die größte placebokontrollierte Studie (100 Patienten mit Herzschwäche, 12 Wochen) fand keine Verbesserung der Auswurfleistung und bei keiner sekundären Zielgröße einen Unterschied außer einem Antioxidans-Marker (Maulik 2016)',
      'Sicherheitsdaten reichen nur über Tage bis wenige Monate; in den Studien wurden keine relevanten Nebenwirkungen berichtet, Langzeitdaten fehlen',
      'Die Qualität ayurvedischer Produkte ist laut der Gemeinsamen Expertenkommission von BVL und BfArM sehr heterogen; amtliche Untersuchungen einzelner eingeführter ayurvedischer Nahrungsergänzungsmittel fanden sehr hohe Gehalte an Blei, Quecksilber und Arsen',
      'Die Studien prüften Arjuna fast immer zusätzlich zu einer Standardtherapie; Wechselwirkungen mit Herzmedikamenten sind nicht systematisch untersucht',
      'Zu Schwangerschaft, Stillzeit und Kindern liegen in den ausgewerteten Studien keine Daten vor'
    ],
    dosage: 'Keine Empfehlung, eine amtliche Höchstmenge gibt es nicht. In Studien verwendet: 500 mg Rindenextrakt alle 8 Stunden über je eine Woche (Bharani 2002), 750 mg wässriger Extrakt zweimal täglich über 12 Wochen (Maulik 2016), 500 mg Rindenpulver täglich über 30 Tage (Gupta 2001). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Bei Herzerkrankungen gehört die Entscheidung in ärztliche Hände, weil die Studien Arjuna nur zusätzlich zur Standardtherapie geprüft haben.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Stammrinde des Arjuna-Baums (Terminalia arjuna), als Pulver oder Extrakt',
    link: 'https://pubmed.ncbi.nlm.nih.gov/42389976/'
  },
  {
    id: 'schwarzer-knoblauch',
    name: 'Schwarzer Knoblauch',
    altNames: 'Black Garlic, Aged Black Garlic (ABG), fermentierter Knoblauch',
    category: 'Kräuter',
    tags: ['herz', 'blutdruck', 'cholesterin', 'anti-oxidant'],
    short: 'Knoblauch, der wochenlang bei Hitze und hoher Luftfeuchte gereift ist, dadurch schwarz und mild im Geruch. Kleine Studien finden eine leichte Blutdrucksenkung, bei den Blutfetten bleiben die Ergebnisse uneinheitlich. Nicht zu verwechseln mit gealtertem Knoblauchextrakt (AGE).',
    description: 'Schwarzer Knoblauch entsteht aus frischem Knoblauch, der über längere Zeit bei 60 bis 90 Grad und 80 bis 90 Prozent Luftfeuchte gehalten wird. Dabei sinkt der Gehalt an Allicin, der scharfe Geruch verschwindet; das Produkt ist reich an S-Allylcystein. Das ist etwas anderes als gealterter Knoblauchextrakt (Aged Garlic Extract, AGE), für den roher Knoblauch mehr als zehn Monate in wässrigem Ethanol lagert, und als Knoblauchpulver aus frischem Knoblauch. Am Menschen gibt es wenige kleine randomisierte Studien, mehrere davon mit standardisierten Extrakten wie ABG10+. Gemessen wurden Blutdruck und Blutfette, keine Herz-Kreislauf-Ereignisse.',
    benefits: [
      'Diastolischer Blutdruck: 67 Menschen mit erhöhtem LDL, doppelblinde Crossover-Studie, 6 Wochen 250 mg standardisierter Extrakt gegen Placebo, diastolisch −5,85 mmHg, vor allem bei Männern (Valls 2022)',
      'Zusätzlich zu Blutdruckmedikamenten: Bei Bluthochdruck Stufe 1 sank der Blutdruck nach 12 Wochen um 1,8 mmHg systolisch und 1,5 mmHg diastolisch stärker als unter Placebo, dreifach verblindet (Serrano 2023)',
      'HDL: In einer doppelblinden Studie mit 60 Menschen mit leicht erhöhtem Cholesterin stieg nach 12 Wochen mit 6 g täglich das HDL, Apolipoprotein B sank; Gesamtcholesterin, LDL und Triglyzeride blieben unverändert (Jung 2014)',
      'Herzschwäche: In einer randomisierten Studie mit 120 Patienten mit koronarer Herzkrankheit verbesserten sich nach 6 Monaten Auswurfleistung, NT-proBNP und Lebensqualität gegenüber Placebo; Einzelstudie aus China (Liu 2018)',
      'Als Lebensmittel: 12 g, etwa 4 Zehen, täglich über 12 Wochen erhöhten Apolipoprotein A1 und senkten Adhäsionsmoleküle im Blut; Vorher-nachher-Vergleich ohne Placebo (Villaño 2023)'
    ],
    risks: [
      'Blutfette: In der neuesten dreifach verblindeten Studie mit 75 Teilnehmenden änderten sich nach 12 Wochen Gesamtcholesterin, LDL, HDL und Triglyzeride nicht (Serrano 2026)',
      'Die Blutdruckeffekte sind klein und stammen aus wenigen kleinen Studien mit standardisierten Extrakten; unabhängige Wiederholungen fehlen',
      'Für Knoblauchzubereitungen allgemein nennt die EMA ein Blutungsrisiko: Vorsicht unter Gerinnungshemmern und Thrombozytenaggregationshemmern, Verzicht 7 Tage vor Operationen; ob das für schwarzen Knoblauch im gleichen Maß gilt, ist nicht eigens untersucht',
      'Gegenanzeige für Knoblauchzubereitungen laut EMA: HIV-Therapie mit Saquinavir und Ritonavir, weil der Wirkspiegel sinken kann',
      'Von der EMA beschriebene Nebenwirkungen von Knoblauchzubereitungen: Mundgeruch und Körpergeruch, Magen-Darm-Beschwerden, allergische Reaktionen, Kopfschmerzen, Blutungen'
    ],
    dosage: 'Keine Empfehlung, eine amtliche Höchstmenge gibt es nicht. In Studien verwendet: 250 mg standardisierter Extrakt täglich über 6 bis 12 Wochen (Valls 2022, Serrano 2026), 6 g täglich über 12 Wochen (Jung 2014), 12 g, also etwa 4 Zehen, täglich über 12 Wochen (Villaño 2023). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Als Lebensmittel wird schwarzer Knoblauch pur gegessen oder in Speisen verwendet. Wer Gerinnungshemmer nimmt oder eine Operation vor sich hat, sollte Knoblauchpräparate ärztlich ansprechen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Gereifter Knoblauch (Allium sativum), als ganze Knolle, Paste oder Extrakt',
    link: 'https://pubmed.ncbi.nlm.nih.gov/35276764/'
  },
  {
    id: 'diosmin',
    name: 'Diosmin',
    altNames: 'Diosminum, mikronisiertes Diosmin, MPFF (mikronisierte gereinigte Flavonoidfraktion aus 90 Prozent Diosmin und 10 Prozent Hesperidin), Daflon',
    category: 'Antioxidant',
    tags: ['durchblutung', 'kreislauf', 'arzneimittel'],
    short: 'Ein Flavonoid, das in Österreich als rezeptfreies Venenmittel zugelassen ist und zugleich als Nahrungsergänzung verkauft wird. Bei Venenschwäche gehen Schwellungen leicht zurück, die Lebensqualität ändert sich laut Cochrane kaum; bei Hämorrhoiden weniger Blutungen, in Studien mit methodischen Schwächen.',
    description: 'Diosmin gehört zu den Venenmitteln (Phlebotonika). Im Darm wird es von der Darmflora zu Diosmetin gespalten und in dieser Form aufgenommen; die orale Bioverfügbarkeit von mikronisiertem Diosmin liegt laut österreichischer Fachinformation bei etwa 60 Prozent. Viele Studien prüften nicht reines Diosmin, sondern die mikronisierte gereinigte Flavonoidfraktion (MPFF) aus 90 Prozent Diosmin und 10 Prozent Hesperidin. Der Cochrane-Review von 2020 über Venenmittel bei chronischer Veneninsuffizienz findet mit moderater Sicherheit eine leichte Abnahme von Beinödemen, aber kaum einen Unterschied bei der Lebensqualität. In Deutschland war Diosmin als Venenmittel im Handel, heute wird es hier auch als Nahrungsergänzungsmittel angeboten; verschreibungspflichtig ist es nicht.',
    benefits: [
      'Ödeme bei chronischer Veneninsuffizienz: Venenmittel insgesamt verringern Schwellungen leicht (relatives Risiko 0,70; 13 Studien, 1.245 Teilnehmende) und den Knöchelumfang um 4,27 mm, jeweils moderate Evidenzsicherheit; 11 der 56 auswertbaren Studien betrafen Hidrosmin und Diosmin (Cochrane, Martinez-Zapata 2020)',
      'Hämorrhoiden: Venenmittel verringerten in 20 Studien mit 2.344 Teilnehmenden Blutung, Juckreiz und Ausfluss und besserten die Gesamtbeschwerden; beim Schmerz war der Effekt nicht signifikant, die Autoren nennen methodische Schwächen (Cochrane, Perera 2012)',
      'Venöses Beingeschwür: Zusätzlich zu Kompression und Wundversorgung heilten Geschwüre unter MPFF nach 6 Monaten häufiger (relative Verbesserung 32 Prozent; 5 Studien, 723 Patienten) und schneller, im Mittel 16 statt 21 Wochen (Coleridge-Smith 2005)',
      'Niedrig dosiertes Diosmin (450 mg täglich) verringerte in einer doppelblinden Studie mit 72 Auswertbaren nach 8 Wochen Beinumfang und Schmerzwerte gegenüber Placebo (Serra 2021)',
      'Venentonus: MPFF verstärkte bei 10 venengesunden Frauen ab der ersten Stunde nach Einnahme den Venentonus, gemessen per Plethysmografie (Amiel 1998)'
    ],
    risks: [
      'Kaum Einfluss auf die Lebensqualität (standardisierte Mittelwertdifferenz −0,06; 5 Studien, 1.639 Teilnehmende) und bei der Geschwürheilung kein Effekt über alle Venenmittel (relatives Risiko 0,94; niedrige Evidenzsicherheit) im Cochrane-Review 2020',
      'Mehr Nebenwirkungen als unter Placebo (relatives Risiko 1,14; 37 Studien, 5.789 Teilnehmende), am häufigsten Magen-Darm-Beschwerden (Cochrane 2020)',
      'Laut Fachinformation häufig Durchfall, Verdauungsbeschwerden, Übelkeit und Erbrechen; selten Kopfschmerzen und Schwindel',
      'Hemmt bei Gesunden Cytochrom-P450-Enzyme; die Fachinformation nennt mögliche Veränderungen der Pharmakokinetik von Diclofenac und Metronidazol',
      'In der Schwangerschaft laut Fachinformation vorsichtshalber meiden, in der Stillzeit und unter 18 Jahren nicht empfohlen',
      'Wirkt laut Fachinformation nicht bei Beinschwellungen durch Herz-, Leber- oder Nierenerkrankungen; plötzliche oder einseitige Schwellungen gehören ärztlich abgeklärt'
    ],
    dosage: 'Keine Empfehlung. In Österreich ist das Arzneimittel Diosmin Genericon mit 1.000 mg mikronisiertem Diosmin je Tablette rezeptfrei in Apotheken zugelassen; die Fachinformation sieht bei chronischer Veneninsuffizienz eine Tablette täglich vor, bei akuten Hämorrhoidalbeschwerden kurzfristig mehr. In Studien verwendet: 450 mg niedrig dosiertes Diosmin täglich über 8 Wochen (Serra 2021). Eine amtliche Höchstmenge für Nahrungsergänzungsmittel gibt es nicht.',
    intake: 'Keine Einnahmeempfehlung. Laut Fachinformation wird das Arzneimittel zu einer Mahlzeit eingenommen. Wer Medikamente nimmt, die über Cytochrom-P450-Enzyme abgebaut werden, sollte Diosmin in der Apotheke oder ärztlich ansprechen.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Flavonoid; in Präparaten meist als mikronisiertes Diosmin oder als MPFF (90 Prozent Diosmin, 10 Prozent Hesperidin)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33141449/'
  },
  {
    id: 'krilloel',
    name: 'Krillöl',
    altNames: 'Krill Oil, Lipidextrakt aus antarktischem Krill (Euphausia superba)',
    category: 'Fettsäure',
    tags: ['herz', 'cholesterin', 'gelenke', 'muskel'],
    short: 'Öl aus antarktischem Krill, das die Omega-3-Fettsäuren EPA und DHA überwiegend als Phospholipide liefert statt als Triglyceride wie Fischöl. Ob es dadurch besser aufgenommen wird, ist uneinheitlich belegt; bei Blutfetten wirkt es pro Gramm Omega-3 wie Fischöl, gegen Knieschmerz bei Arthrose half es in einer großen Studie nicht.',
    description: 'Krillöl wird aus antarktischem Krill gewonnen, kleinen Krebstieren. Es enthält EPA und DHA vorwiegend als Phospholipide, Fischöl dagegen als Triglyceride. Daraus wird eine bessere Aufnahme abgeleitet. Die Studien dazu widersprechen sich: In einer doppelblinden Studie von 2026 stiegen EPA und DHA im Plasma unter Krillöl etwa 1,5-mal stärker als unter Fischöl, in einer 12-Wochen-Studie mit niedrigen Mengen stieg der Omega-3-Index gleich stark. Für Blutfette fand eine Netzwerk-Meta-Analyse über 64 Studien keinen Unterschied zu Fischöl, entscheidend war die Menge an Omega-3-Fettsäuren. In der EU ist der Lipidextrakt aus Krill als neuartiges Lebensmittel zugelassen.',
    benefits: [
      'Hebt EPA und DHA im Blut: in einer doppelblinden Studie mit 72 Gesunden bei gleicher Omega-3-Menge (1,1 g täglich, 12 Wochen) etwa 1,5-mal stärker als Fischöl (Loukil 2026)',
      'Senkt Triglyzeride: in einer Netzwerk-Meta-Analyse über 64 randomisierte Studien um 23,26 mg/dl gegenüber Kontrolle (Kim 2020); ein Krillöl-Präparat senkte bei stark erhöhten Werten (520 Patienten) die Triglyzeride nach 12 Wochen um 10,9 Prozentpunkte stärker als Placebo (Mozaffarian 2022)',
      'Muskel im Alter: 4 g täglich über 6 Monate steigerten bei 102 gesunden Menschen über 65 Jahren Kniestreckkraft (+9,3 Prozent), Griffkraft (+10,9 Prozent) und Muskeldicke (+3,5 Prozent) gegenüber Placebo; körperliche Leistungstests und Lebensqualität änderten sich nicht (Alkhedhairi 2022)',
      'Liefert EPA und DHA, für die die EU die Angabe „EPA und DHA tragen zu einer normalen Herzfunktion bei“ zulässt; die positive Wirkung stellt sich laut Verordnung bei 250 mg EPA und DHA täglich ein'
    ],
    risks: [
      'Kniearthrose: 2 g täglich über 24 Wochen verbesserten bei 262 Menschen mit Kniearthrose und Gelenkerguss den Schmerz nicht stärker als Placebo (Laslett 2024, JAMA)',
      'Kein Vorteil gegenüber Fischöl bei den Blutfetten: Unterschied bei Triglyzeriden −4,07 mg/dl, nicht signifikant; pro Gramm Omega-3 senken beide ähnlich (Kim 2020)',
      'Der Aufnahmevorteil ist nicht einheitlich: Bei rund 250 bis 290 mg EPA und DHA täglich stieg der Omega-3-Index unter Krillöl, Fischöl und Calanusöl gleich stark (Vosskötter 2023); eine Netzwerk-Meta-Analyse sieht einen Vorteil vor allem bei Mengen unter 2.000 mg (Pham 2024)',
      'Krill ist ein Krebstier: Die EU-Zulassung schreibt die Bezeichnung „Lipidextrakt aus dem Krebstier antarktischer Krill“ vor, wichtig bei Krebstierallergie',
      'Die EU begrenzt EPA und DHA aus Krillöl in Nahrungsergänzungsmitteln auf 3.000 mg täglich, für Schwangere und Stillende auf 450 mg',
      'Bei Gerinnungshemmern und vor Operationen gilt dieselbe Vorsicht wie bei Fischöl'
    ],
    dosage: 'Keine Verzehrempfehlung. Die EU-Zulassung als neuartiges Lebensmittel erlaubt in Nahrungsergänzungsmitteln höchstens 3.000 mg EPA und DHA aus Krillöl pro Tag, für Schwangere und Stillende 450 mg. Die EU-Angabe zur Herzfunktion setzt 250 mg EPA und DHA pro Tag voraus. In Studien verwendet: 2 g Krillöl täglich über 24 Wochen (Laslett 2024), 4 g täglich über 6 Monate (Alkhedhairi 2022), 1,1 g Omega-3 aus Krillöl täglich über 12 Wochen (Loukil 2026). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. In den Studien wurde Krillöl als Kapsel eingenommen. Bei Krebstierallergie meiden.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Antarktischer Krill (Euphausia superba), ein kleines Krebstier',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38776073/'
  },
  {
      id: 'bittermelone',
      name: 'Bittermelone',
      altNames: 'Momordica charantia, Bittergurke, Balsambirne, Bitter Melon, Karela',
      category: 'Kräuter',
      tags: ['blutzucker', 'stoffwechsel', 'cholesterin', 'gewicht'],
      short: 'Tropisches Gemüse, als Extrakt gegen hohen Blutzucker vermarktet. Die Meta-Analysen widersprechen sich: Einige finden kleine Senkungen von HbA1c und Nüchternzucker, eine Auswertung placebokontrollierter Studien fand keinen Effekt. Zusammen mit Diabetesmedikamenten droht Unterzuckerung.',
      description: 'Die Bittermelone (Momordica charantia) ist ein Kürbisgewächs, das in Asien, Afrika und Südamerika als Gemüse gegessen und traditionell bei Diabetes eingesetzt wird. Als Nahrungsergänzung wird sie als Pulver oder Extrakt angeboten. Am Menschen ist die Lage uneinheitlich: Eine GRADE-geprüfte Meta-Analyse über 25 Studien fand 2025 kleine bis mittlere Senkungen von Nüchternzucker und HbA1c, eine Meta-Analyse von 2023 über 9 placebokontrollierte Studien mit 414 Teilnehmenden fand dagegen weder beim Blutzucker noch bei Blutfetten oder Gewicht einen signifikanten Effekt. Die Studien sind klein, dauern 4 bis 16 Wochen und verwenden sehr unterschiedliche Zubereitungen. Der Wirkmechanismus beruht überwiegend auf Labor- und Tierdaten; eine Übersicht von 2003 beschreibt strukturelle Ähnlichkeiten einzelner Bestandteile mit tierischem Insulin.',
      benefits: [
        'Typ-2-Diabetes, gegen Placebo: Nüchternzucker −0,72 mmol/l, HbA1c −0,26 Prozentpunkte (Meta-Analyse, 10 Studien, 1.045 Teilnehmende, Peter 2019) – Evidenzqualität niedrig bis sehr niedrig',
        'Prädiabetes und Typ-2-Diabetes: Nüchternzucker SMD −0,46, HbA1c SMD −0,57, HOMA-IR SMD −0,52, keine Wirkung auf die Betazellfunktion (Meta-Analyse, 25 Studien, Mkhize 2025)',
        'Typ-2-Diabetes: HbA1c −0,38 Prozentpunkte, Gesamtcholesterin −0,38 mmol/l, LDL, HDL und Triglyzeride unverändert (Meta-Analyse, 8 Studien, 423 Patienten, Zhang 2024)',
        'Blutfette: Gesamtcholesterin −9,7 mg/dl und Triglyzeride −10,2 mg/dl, LDL und HDL nicht signifikant (Meta-Analyse, 8 RCTs, 423 Teilnehmende, Amini 2024)',
        'Seit Jahrhunderten als Gemüse verzehrt'
      ],
      risks: [
        'Widersprüchliche Wirksamkeit: Gegen Placebo fand eine Meta-Analyse über 9 Studien mit 414 Teilnehmenden keinen signifikanten Effekt auf Nüchternzucker, HbA1c, Blutfette, Gewicht oder Blutdruck (Laczkó-Zöld 2023); eine frühere Auswertung von 4 RCTs mit 208 Teilnehmenden ebenfalls nicht (Yin 2014)',
        'Unterzuckerung: In der Literatur sind hypoglykämisches Koma und Krampfanfälle bei Kindern beschrieben; zusammen mit blutzuckersenkenden Medikamenten sind additive Effekte möglich (Basch 2003)',
        'Ein Favismus-ähnliches Krankheitsbild ist beschrieben, relevant bei Glukose-6-phosphat-Dehydrogenase-Mangel (Basch 2003)',
        'Eingeschränkte Fruchtbarkeit wurde bei Mäusen beobachtet; Daten zu Schwangerschaft und Stillzeit am Menschen fehlen (Basch 2003)',
        'Einzelfallbericht einer pflanzlich bedingten Leberschädigung nach zwei bis drei Wochen Einnahme, bestätigt durch Gewebeprobe (Guerra 2026)',
        'Kurze Studiendauer von höchstens 16 Wochen; Langzeitsicherheit ist nicht untersucht'
      ],
      dosage: 'Keine Empfehlung. Eine amtliche Höchstmenge von BfR oder EFSA gibt es nicht. Studien verwendeten sehr unterschiedliche Zubereitungen (Saft, Fruchtpulver, Extrakte) über 4 bis 16 Wochen; eine Lipid-Meta-Analyse fand Effekte in der Untergruppe mit bis zu 2.000 mg pro Tag (Amini 2024).',
      intake: 'Keine Einnahmeempfehlung. Wer Insulin oder andere blutzuckersenkende Medikamente nimmt, sollte Bittermelonen-Präparate wegen des Unterzuckerungsrisikos nur nach ärztlicher Rücksprache und mit Blutzuckerkontrolle verwenden; ein Ersatz für eine Diabetestherapie ist sie nicht.',
      synergies: [],
      avoid: [],
      evidence: 'mittel',
      sources: 'Frische Bittermelone (Bittergurke) als Gemüse, vor allem in der asiatischen Küche',
      link: 'https://pubmed.ncbi.nlm.nih.gov/38274207/'
    },
  {
      id: 'garcinia-cambogia',
      name: 'Garcinia cambogia (Hydroxycitronensäure)',
      altNames: 'Garcinia gummi-gutta, Malabar-Tamarinde, Hydroxycitronensäure, HCA, Hydroxycitric Acid',
      category: 'Kräuter',
      tags: ['gewicht', 'fettverbrennung', 'appetit', 'leber'],
      short: 'Fruchtschalen-Extrakt mit Hydroxycitronensäure, verkauft als Fatburner. Der Gewichtseffekt liegt in Meta-Analysen bei rund einem Kilogramm, die größte frühe Placebo-Studie fand keinen. Dazu kommen Fälle schwerer Leberschäden: Frankreich hat den Verkauf ausgesetzt, die EFSA konnte keine sichere Aufnahmemenge ableiten.',
      description: 'Garcinia cambogia, botanisch Garcinia gummi-gutta, ist ein Baum aus Südindien und Südostasien, dessen getrocknete Fruchtschale als Würzmittel dient. Der Hauptinhaltsstoff Hydroxycitronensäure (HCA) hemmt im Labor die ATP-Citrat-Lyase, ein Enzym am Anfang der Fettneubildung; daraus leitet sich die Vermarktung als Fatburner ab. Am Menschen fiel der Effekt klein aus: Eine Meta-Analyse über 9 auswertbare Studien fand 0,88 kg mehr Gewichtsverlust als unter Placebo, die Autoren nennen die klinische Bedeutung unsicher. Parallel sind schwere Leberschäden dokumentiert. Das EFSA-NDA-Panel billigte am 28. Januar 2026 den Entwurf einer Stellungnahme nach Artikel 8 der Verordnung (EG) Nr. 1925/2006, wonach sich keine sichere Aufnahmemenge festlegen lässt; in Frankreich sind Nahrungsergänzungsmittel mit Garcinia cambogia seit April 2025 vom Markt genommen.',
      benefits: [
        'Gewicht: 0,88 kg mehr Gewichtsverlust als unter Placebo, Konfidenzintervall bis −0,00 kg (Meta-Analyse, 12 RCTs, davon 9 gepoolt, Onakpoya 2011) – laut Autoren klein und klinisch unsicher',
        'Gewicht −1,34 kg, BMI −0,99 kg/m², Taillenumfang −4,16 cm gegenüber Placebo (Meta-Analyse, 8 Studien, 530 Teilnehmende, Golzarand 2020)',
        'Hemmt im Labor die ATP-Citrat-Lyase, ein Enzym der Fettneubildung – der Wirkweg ist biochemisch beschrieben, am Menschen aber nicht als Ursache eines Gewichtseffekts belegt'
      ],
      risks: [
        'Schwere Leberschäden: Im US-Netzwerk DILIN wurden von 2004 bis 2018 22 Fälle mit hoher Sicherheit Garcinia zugeordnet, meist zusammen mit Grüntee; 91 Prozent im Krankenhaus, eine Lebertransplantation, ein Todesfall; das Merkmal HLA-B*35:01 trat gehäuft auf (Vuppalanchi 2022)',
        'Die französische ANSES erfasste von 2009 bis März 2024 38 Meldungen unerwünschter Wirkungen, darunter akute Hepatitis, Bauchspeicheldrüsenentzündung, Herz- und Muskelschäden, auch bei Menschen ohne Vorerkrankung, und rät der gesamten Bevölkerung vom Verzehr ab (5. März 2025)',
        'EFSA-Entwurf vom 28. Januar 2026: Für Hydroxycitronensäure und Garcinia-Zubereitungen lässt sich keine sichere Aufnahmemenge festlegen',
        'Hodentoxizität bei männlichen Ratten unter hohen Dosen bestimmter Extrakte; am Menschen laut BfR bisher ohne Hinweise, aber nicht gezielt untersucht (BfR-Jahresbericht 2015)',
        'Die Placebo-kontrollierte Studie von Heymsfield 1998 (135 Teilnehmende, 12 Wochen) fand keinen Unterschied bei Gewicht und Fettmasse',
        'Viele Produkte sind Mischungen; bei den Hydroxycut-Fällen von 2009 konnte die FDA keinen einzelnen verursachenden Inhaltsstoff benennen'
      ],
      dosage: 'Keine Empfehlung. Eine amtliche Höchstmenge gibt es nicht; die EFSA konnte im Entwurf vom 28. Januar 2026 keine sichere Aufnahmemenge ableiten. Zur Einordnung der Studien: Heymsfield 1998 gab 1.500 mg Hydroxycitronensäure pro Tag über 12 Wochen.',
      intake: 'Keine Einnahmeempfehlung. Bei Gelbsucht, dunklem Urin, Oberbauchschmerzen oder ungewohnter Müdigkeit während der Einnahme ist eine ärztliche Abklärung der Leberwerte angezeigt.',
      synergies: [],
      avoid: [],
      evidence: 'mittel',
      sources: 'Getrocknete Fruchtschale der Malabar-Tamarinde, in Südindien als säuerliches Würzmittel verwendet',
      link: 'https://pubmed.ncbi.nlm.nih.gov/21197150/'
    },
  {
      id: 'ingwer',
      name: 'Ingwer',
      altNames: 'Zingiber officinale, Ingwerwurzel, Zingiberis rhizoma, Ginger, Gingerol',
      category: 'Kräuter',
      tags: ['verdauung', 'schwangerschaft', 'blutzucker', 'entzuendung'],
      short: 'Am besten belegt ist Ingwer gegen Übelkeit: in der Schwangerschaft, nach Operationen und als Ergänzung bei Chemotherapie. Die EMA erkennt ihn als Arzneipflanze zur Vorbeugung von Reiseübelkeit an. Bei Erbrechen und anderen Anwendungen sind die Effekte kleiner oder unsicher.',
      description: 'Ingwer ist der Wurzelstock von Zingiber officinale, Gewürz und Arzneipflanze zugleich. Die Scharfstoffe Gingerole und Shogaole gelten als wirksame Bestandteile. Am stärksten belegt ist die Wirkung gegen Übelkeit: Eine Meta-Analyse über 12 randomisierte Studien mit 1.278 Schwangeren fand weniger Übelkeit als unter Placebo, aber keine signifikant geringere Zahl an Erbrechen. Nach Operationen senkte mindestens 1 g Ingwer das Risiko für Übelkeit und Erbrechen. Bei Chemotherapie wirkte er in einigen Auswertungen als Ergänzung zu Standard-Antiemetika, nicht als Ersatz. Die EMA führt Ingwerpulver in ihrer EU-Monografie (Revision 2024) als Arzneipflanze mit allgemein anerkannter Verwendung zur Vorbeugung von Übelkeit und Erbrechen bei Reisekrankheit.',
      benefits: [
        'Übelkeit in der Schwangerschaft: weniger Übelkeit als unter Placebo, Erbrechen nicht signifikant seltener (Meta-Analyse, 12 RCTs, 1.278 Schwangere, Viljoen 2014)',
        'Übelkeit und Erbrechen nach Operationen: relatives Risiko 0,69 für Übelkeit und Erbrechen, 0,61 für Erbrechen bei mindestens 1 g Ingwer (Meta-Analyse, 5 RCTs, 363 Patienten, Chaiyakunapruk 2006); geringere Schwere (10 RCTs, 918 Patienten, Tóth 2018)',
        'Chemotherapie: als Ergänzung zu Standard-Antiemetika weniger schwere akute Übelkeit, RR 0,19 (Meta-Analyse, 35 RCTs, Lin 2025); in einer anderen Auswertung nur weniger akutes Erbrechen, kein Effekt auf Übelkeit (Crichton 2019)',
        'Von der EMA als pflanzliches Arzneimittel mit allgemein anerkannter Verwendung zur Vorbeugung von Reiseübelkeit eingestuft (EU-Monografie, Revision 1, 2024)',
        'Typ-2-Diabetes: HbA1c −0,47 Prozentpunkte gegenüber Placebo laut Umbrella-Review, bei begrenzter Qualität der zugrunde liegenden Übersichten (Li 2025)'
      ],
      risks: [
        'Häufig Magenbeschwerden, Aufstoßen, Sodbrennen und Übelkeit (EMA-Monografie)',
        'Die EMA rät als Vorsichtsmaßnahme von Ingwer-Arzneimitteln in Schwangerschaft und Stillzeit ab, obwohl die vorliegenden Daten keine Fehlbildungen zeigen; die Meta-Analyse von Viljoen fand gegenüber Placebo kein signifikant erhöhtes Fehlgeburtsrisiko, bei sehr breitem Konfidenzintervall',
        'Für Kinder und Jugendliche unter 18 Jahren bei Reiseübelkeit von der EMA nicht empfohlen, da Daten fehlen',
        'Allergie gegen Ingwer ist die einzige in der Monografie genannte Gegenanzeige; Wechselwirkungen sind dort keine bekannt',
        'Wirkung bei Chemotherapie uneinheitlich: Übelkeit insgesamt in einer Meta-Analyse nicht signifikant beeinflusst (Crichton 2019)'
      ],
      dosage: 'Keine persönliche Empfehlung. Die EMA-Monografie nennt für Arzneimittel zur Vorbeugung von Reiseübelkeit bei Erwachsenen 1 bis 2 g Ingwerpulver eine Stunde vor Reisebeginn. In der Meta-Analyse zu Operationen wirkte eine feste Dosis von mindestens 1 g (Chaiyakunapruk 2006); in der Schwangerschafts-Analyse schnitten Tagesmengen unter 1.500 mg bei der Übelkeit besser ab (Viljoen 2014). Eine amtliche Höchstmenge für Nahrungsergänzungsmittel gibt es nicht.',
      intake: 'Keine Einnahmeempfehlung. In der Schwangerschaft gehört die Behandlung von Übelkeit in ärztliche Begleitung oder die der Hebamme; bei Chemotherapie wurde Ingwer in Studien zusätzlich zu, nicht anstelle von Standard-Antiemetika gegeben.',
      synergies: [],
      avoid: [],
      evidence: 'hoch',
      sources: 'Frische und getrocknete Ingwerwurzel, Ingwertee, Gewürz',
      link: 'https://pubmed.ncbi.nlm.nih.gov/24642205/'
    },
  {
      id: 'triphala',
      name: 'Triphala',
      altNames: 'Triphala Churna, Haritaki, Bibhitaki, Amalaki, Terminalia chebula, Terminalia bellirica, Phyllanthus emblica, Amla',
      category: 'Kräuter',
      tags: ['verdauung', 'darm', 'cholesterin', 'zahn'],
      short: 'Ayurvedische Mischung aus drei getrockneten Früchten, traditionell für die Verdauung. Am Menschen gibt es meist kleine Studien mit gemischten Ergebnissen, die doppelblinde Cholesterinstudie aus Italien blieb ohne Vorteil. Ein eigenes Thema ist die Produktqualität: Jedes fünfte online gekaufte Ayurveda-Präparat enthielt in einer US-Untersuchung Blei, Quecksilber oder Arsen.',
      description: 'Triphala bedeutet „drei Früchte" und besteht zu gleichen Teilen aus Haritaki (Terminalia chebula), Bibhitaki (Terminalia bellirica) und Amalaki (Phyllanthus emblica, Amla). In der ayurvedischen Medizin gilt die Mischung als mildes Abführ- und Verdauungsmittel. Die Früchte enthalten viel Gerbstoffe und Polyphenole wie Gallussäure, Chebulagin- und Chebulinsäure; Wirkmechanismen sind überwiegend im Labor und am Tier beschrieben. Eine systematische Übersicht über 12 randomisierte Studien mit 749 Teilnehmenden fand in einem Teil der Studien niedrigere Blutfette, Blutzucker- und Gewichtswerte, verlangt aber größere, sauber geplante Studien. Die einzige doppelblinde, placebokontrollierte Studie aus Europa (Guggulu plus Triphala, 90 Teilnehmende) fand keinen Vorteil gegenüber Placebo. Für die traditionelle Hauptanwendung, die Verdauung, liegen kaum belastbare kontrollierte Daten vor.',
      benefits: [
        'Blutfette, Blutzucker und Gewicht: in einem Teil von 12 randomisierten Studien mit 749 Teilnehmenden niedrigere Werte, Nüchternzucker nur bei Diabetes gesenkt; keine schweren Nebenwirkungen berichtet (systematische Übersicht, Phimarn 2021) – kleine Studien, uneinheitliche Zubereitungen',
        'Als Mundspülung bei Zahnfleischentzündung in 7 RCTs ähnlich wirksam wie Chlorhexidin, bei starker Heterogenität (Meta-Analyse, AlJameel 2020) – betrifft die äußerliche Anwendung, nicht die Einnahme',
        'Einarmige Sicherheitsstudie an 20 Gesunden: 2.500 mg wässriger Extrakt über vier Wochen ohne schwere Nebenwirkungen (Phetkate 2020)',
        'Seit Jahrhunderten in der ayurvedischen Medizin verwendet'
      ],
      risks: [
        'Doppelblinde, placebokontrollierte Studie (90 Teilnehmende, drei Monate, Kombination mit Guggulu): kein Vorteil bei Gesamt- und LDL-Cholesterin, BMI oder Taillenumfang; 2 von 46 Teilnehmenden der Verumgruppe bekamen einen allergischen Hautausschlag (Donato 2021)',
        'Schwermetalle in Ayurveda-Produkten: 20,7 Prozent von 193 online gekauften Ayurveda-Präparaten enthielten nachweisbar Blei, Quecksilber oder Arsen, bei US- wie indischen Herstellern; alle belasteten Produkte überschritten mindestens einen Grenzwert für die tolerierbare tägliche Aufnahme (Saper 2008, JAMA) – die Untersuchung betraf Ayurveda-Präparate allgemein, nicht gezielt Triphala',
        'Daten zu Schwangerschaft, Stillzeit, Kindern und Langzeiteinnahme fehlen',
        'Hemmt in menschlichen Lebermikrosomen die Abbauenzyme CYP1A2, CYP3A4, CYP2C9 und CYP2D6 und erhöhte bei Ratten die Bioverfügbarkeit von Midazolam um rund 41 Prozent (Nontakham 2022); Wechselwirkungen am Menschen sind nicht untersucht'
      ],
      dosage: 'Keine Empfehlung. Eine amtliche Höchstmenge gibt es nicht. Studien verwendeten unterschiedliche Pulver und Extrakte, etwa 2.500 mg wässrigen Extrakt pro Tag über vier Wochen in einer Sicherheitsstudie an Gesunden (Phetkate 2020).',
      intake: 'Keine Einnahmeempfehlung. Bei Ayurveda-Präparaten lohnt der Blick auf eine Schwermetallanalyse des Herstellers; nach Saper 2008 schützte die Angabe guter Herstellungspraxis allein nicht vor belasteten Produkten.',
      synergies: [],
      avoid: [],
      evidence: 'niedrig',
      sources: 'Getrocknete Früchte von Haritaki, Bibhitaki und Amalaki (Amla)',
      link: 'https://pubmed.ncbi.nlm.nih.gov/33886393/'
    },
  {
    id: 'traubensilberkerze',
    name: 'Traubensilberkerze (Cimicifuga)',
    altNames: 'Cimicifuga racemosa, Actaea racemosa, Black Cohosh, Juli-Silberkerze, Cimicifugae rhizoma, Cimicifuga-Wurzelstock',
    category: 'Kräuter',
    tags: ['hormone', 'frauen'],
    short: 'Wurzelstock einer nordamerikanischen Staude, in Deutschland als pflanzliches Arzneimittel gegen Hitzewallungen und Schwitzen in den Wechseljahren zugelassen. Die Studienlage ist umfangreich, aber widersprüchlich: Eine neuere Meta-Analyse findet einen mittleren Effekt, der Cochrane-Review von 2012 keinen Unterschied zu Placebo. Arzneimittel tragen einen Leber-Warnhinweis, für Lebensmittel empfehlen die Behörden den Stoff nicht.',
    description: 'Die Traubensilberkerze (Cimicifuga racemosa, heute Actaea racemosa) ist eine Arzneipflanze, deren Wurzelstock als Ethanol- oder Isopropanol-Trockenextrakt verwendet wird. Die EMA führt sie seit 2018 in einer überarbeiteten EU-Monografie als Arzneimittel mit anerkannter medizinischer Verwendung zur Linderung von Wechseljahresbeschwerden wie Hitzewallungen und übermäßigem Schwitzen. Eine Meta-Analyse von 2023 über 22 Arbeiten mit 2.310 Frauen fand gegenüber Placebo eine Besserung der Gesamtbeschwerden mit Hedges g 0,575 und der Hitzewallungen mit g 0,315, der Cochrane-Review von 2012 mit 16 Studien und 2.027 Frauen dagegen keinen signifikanten Unterschied bei der Zahl der Hitzewallungen. Wie die Pflanze wirkt, ist nicht geklärt; Hormonspiegel blieben in den Studien unverändert. Leberschäden sind als Nebenwirkung in der EU-Monografie aufgeführt, die Häufigkeit ist unbekannt. Die Pflanzenliste von BVL und Bundesländern empfiehlt die Verwendung in Lebensmitteln nicht (Liste A).',
    benefits: [
      'Wechseljahresbeschwerden insgesamt: Hedges g 0,575 (0,283 bis 0,867) gegenüber Placebo, Hitzewallungen g 0,315 (0,107 bis 0,524), körperliche Beschwerden g 0,418; Meta-Analyse über 22 Arbeiten mit 2.310 Frauen (Sadahiro 2023)',
      'Keine signifikante Wirkung auf Angst (g 0,194) und depressive Symptome (g 0,406) in derselben Meta-Analyse; die Abbruchrate lag auf Placeboniveau (Sadahiro 2023)',
      'Cochrane-Review mit 16 randomisierten Studien und 2.027 Frauen: kein signifikanter Unterschied zu Placebo bei der Zahl der Hitzewallungen (0,07 pro Tag, 3 Studien, 393 Frauen) und bei Beschwerde-Scores (SMD −0,10, 4 Studien, 357 Frauen); Hormontherapie wirkte stärker (Leach 2012)',
      'Isopropanol-Extrakt iCR: standardisierte Mittelwertdifferenz −0,694 gegenüber Placebo über 35 Studien; die Übersicht stammt teilweise von Mitarbeitenden des Herstellers (Castelo-Branco 2021)',
      'Von der EMA als Arzneimittel mit anerkannter medizinischer Verwendung bei Hitzewallungen und übermäßigem Schwitzen in den Wechseljahren eingestuft (EU-Monografie 2018)'
    ],
    risks: [
      'Leberschäden einschließlich Hepatitis, Gelbsucht und veränderter Leberwerte sind in der EU-Monografie als Nebenwirkung aufgeführt, Häufigkeit unbekannt; bei Müdigkeit, Appetitlosigkeit, Gelbfärbung von Haut oder Augen, starken Oberbauchschmerzen oder dunklem Urin sofort absetzen und ärztlich abklären lassen (EMA)',
      'Eine Auswertung der Leberwerte aus 5 randomisierten Studien mit 1.117 Frauen fand für den Isopropanol-Extrakt keine Veränderung über 3 bis 6 Monate (Naser 2011, Autoren aus dem Herstellerumfeld); seltene Leberschäden lassen sich mit solchen Studiengrößen nicht ausschließen',
      'Nicht zusammen mit Östrogenen ohne ärztlichen Rat; nach oder während einer Brustkrebs- oder anderen hormonabhängigen Tumorbehandlung nur nach ärztlicher Rücksprache (EMA)',
      'Bei Scheidenblutungen ärztlich abklären lassen; in Schwangerschaft und Stillzeit nicht empfohlen (EMA)',
      'Allergische Hautreaktionen, Gesichts- und Beinödeme sowie Magen-Darm-Beschwerden beschrieben, Häufigkeit unbekannt (EMA)',
      'Laut EMA ohne ärztlichen Rat nicht länger als 6 Monate',
      'In der Pflanzenliste von BVL und Bundesländern in Liste A: Verwendung in Lebensmitteln wird wegen bekannter Risiken unabhängig von der Dosierung nicht empfohlen'
    ],
    dosage: 'Für zugelassene Arzneimittel nennt die EU-Monografie je nach Extrakt Tagesdosen von 5,6 mg (Ethanol 58 %), 6,5 mg (Ethanol 60 %) oder 5,0 mg Trockenextrakt (Isopropanol 40 %). In den Studien des Cochrane-Reviews lag die mittlere Tagesdosis bei 40 mg, die Behandlung dauerte im Mittel 23 Wochen. Für Lebensmittel gibt es keine Höchstmenge, weil die Behörden die Verwendung dort nicht empfehlen.',
    intake: 'Keine Einnahmeempfehlung. Die Traubensilberkerze ist in Deutschland ein Arzneimittel; Fragen zur Anwendung gehören in die Apotheke oder Arztpraxis, besonders bei Lebererkrankungen, Hormontherapie oder nach Brustkrebs.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Keine Lebensmittelquellen; getrockneter Wurzelstock der Traubensilberkerze (Actaea racemosa)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/37192826/'
  },
  {
    id: 'nachtkerzenoel',
    name: 'Nachtkerzenöl',
    altNames: 'Oenothera biennis, Oenothera lamarckiana, Evening Primrose Oil, EPO, Nachtkerzensamenöl, Gamma-Linolensäure, GLA',
    category: 'Fettsäure',
    tags: ['haut', 'frauen', 'entzuendung'],
    short: 'Samenöl der Nachtkerze, beworben wegen seiner Gamma-Linolensäure bei Neurodermitis, Brustschmerzen, PMS und Wechseljahresbeschwerden. Gerade dort ist es gut untersucht und schneidet nicht besser ab als Placebo: im Cochrane-Review zu Ekzemen ebenso wie in einer Meta-Analyse zu Brustschmerzen. Die EMA erkennt nur eine traditionelle Anwendung gegen Juckreiz bei trockener Haut an.',
    description: 'Nachtkerzenöl wird aus den Samen von Oenothera biennis oder Oenothera lamarckiana gepresst oder extrahiert. Es enthält Gamma-Linolensäure (GLA), eine Omega-6-Fettsäure, aus der der Körper Dihomo-Gamma-Linolensäure (DGLA) bildet; zusammen mit Fischöl eingenommen stiegen beide Fettsäuren im Blut messbar an. Ob daraus ein klinischer Nutzen folgt, ist die eigentliche Frage. Der Cochrane-Review von 2013 mit 19 Studien zu Nachtkerzenöl fand bei der Gesamtbesserung von Ekzemen keinen Unterschied zu Placebo, eine Meta-Analyse über 13 Studien mit 1.752 Frauen ebenso wenig bei zyklischen Brustschmerzen. Bei Hitzewallungen gibt es kleine, uneinheitliche Studien. Die EMA stuft Nachtkerzenöl nur als traditionelles pflanzliches Arzneimittel gegen Juckreiz bei trockener Haut ein, ohne ausreichenden Wirksamkeitsnachweis.',
    benefits: [
      'Traditionelle Anwendung: Die EMA erkennt Nachtkerzenöl als traditionelles pflanzliches Arzneimittel zur Linderung von Juckreiz bei akut und chronisch trockener Haut an, gestützt auf langjährige Verwendung, nicht auf Studien (EU-Monografie 2018)',
      'Hitzewallungen: In einer Meta-Analyse über 6 Studien mit 450 Frauen sank die Zahl der Hitzewallungen um 2,13 pro Tag, nicht signifikant; signifikant kürzer war nur die Dauer, die Evidenzqualität moderat bis niedrig (Larki 2025)',
      'In einer 6-Wochen-Studie mit 56 Frauen besserte sich nur die Stärke der Hitzewallungen signifikant stärker als unter Placebo, Häufigkeit und Dauer nicht (Farzaneh 2013)',
      'Messbare Aufnahme: Mit Fischöl plus Nachtkerzenöl stiegen Gamma-Linolensäure und Dihomo-Gamma-Linolensäure im Plasma gesunder Frauen, Arachidonsäure sank nicht (Geppert 2008)',
      'Gut verträglich: In der Meta-Analyse zu Brustschmerzen traten Übelkeit, Blähungen, Kopfschmerzen oder Gewichtszunahme nicht häufiger auf als unter Placebo (Ahmad Adni 2021)'
    ],
    risks: [
      'Neurodermitis: Cochrane-Review mit 27 Studien und 1.596 Teilnehmenden, davon 19 zu Nachtkerzenöl; Gesamtbesserung nach Einschätzung der Betroffenen MD −2,22 (−10,48 bis 6,04) und der Ärztinnen und Ärzte MD −3,26 (−6,96 bis 0,45) auf einer Skala von 0 bis 100, beides nicht besser als Placebo (Bamford 2013)',
      'Zyklische Brustschmerzen: 13 randomisierte Studien mit 1.752 Frauen, die Zahl der Frauen mit Schmerzlinderung unterschied sich nicht von Placebo oder anderen Behandlungen (Ahmad Adni 2021)',
      'Prämenstruelles Syndrom: Nur 7 placebokontrollierte Studien, die beiden am besten kontrollierten zeigten keinen Nutzen (Budeiri 1996)',
      'Nebenwirkungen laut EMA: Verdauungsbeschwerden, Übelkeit, weicher Stuhl, Temperaturanstieg, Hautausschlag als allergische Reaktion und Kopfschmerzen, Häufigkeit unbekannt',
      'In Schwangerschaft und Stillzeit sowie unter 12 Jahren laut EMA nicht empfohlen, weil Daten fehlen'
    ],
    dosage: 'Die EU-Monografie nennt für das traditionelle Arzneimittel 4 bis 6 g Öl pro Tag, aufgeteilt auf Einzeldosen von 2 bis 3 g, für Jugendliche ab 12 Jahren und Erwachsene; halten die Beschwerden länger als 8 Wochen an, ist ärztlicher Rat angezeigt. In der Hitzewallungsstudie von Farzaneh 2013 wurden zwei Kapseln mit je 500 mg pro Tag über 6 Wochen gegeben. Eine amtliche Höchstmenge für Nahrungsergänzungsmittel gibt es nicht.',
    intake: 'Keine Einnahmeempfehlung. In den Studien wurde das Öl täglich über mehrere Wochen eingenommen.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Samen der Nachtkerze (Oenothera biennis, Oenothera lamarckiana); Gamma-Linolensäure steckt auch in Borretschöl',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23633319/'
  },
  {
    id: 'mastix',
    name: 'Mastix (Mastixharz)',
    altNames: 'Pistacia lentiscus, Pistacia lentiscus var. Chia, Mastic Gum, Chios Mastic, Mastiha, Mastixstrauch-Harz',
    category: 'Kräuter',
    tags: ['verdauung', 'darm', 'entzuendung'],
    short: 'Harz des Mastixstrauchs von der griechischen Insel Chios, seit Langem bei Magenbeschwerden genutzt. Bei funktioneller Dyspepsie gibt es eine positive placebokontrollierte Studie, gegen Helicobacter pylori reicht Mastix allein in kleinen Studien nicht aus. Die EMA erkennt nur eine traditionelle Anwendung bei leichten Verdauungsbeschwerden an.',
    description: 'Mastix ist das getrocknete Harz von Pistacia lentiscus var. Chia, das als Pulver oder in Kapseln eingenommen wird. Die EMA führt es seit 2016 in einer EU-Monografie als traditionelles pflanzliches Arzneimittel bei leichten Verdauungsbeschwerden und, äußerlich, bei leichten Hautentzündungen und kleinen Wunden; 2024 sah sie nach erneuter Prüfung keinen Anlass zur Änderung. In einer doppelblinden Studie mit 148 Menschen mit funktioneller Dyspepsie besserten sich die Beschwerden bei 77 Prozent unter Mastix und bei 40 Prozent unter Placebo. Gegen Helicobacter pylori wirkt Mastix im Labor, am Menschen gelang die Eradikation mit Mastix allein nur bei 4 bis 5 von 13 Behandelten, in einer weiteren kleinen Studie bei keinem. Die meisten Studien stammen aus Griechenland und sind klein.',
    benefits: [
      'Funktionelle Dyspepsie: deutliche Besserung bei 77 Prozent unter Mastix gegenüber 40 Prozent unter Placebo, Symptom-Score 14,78 gegenüber 19,96 nach 3 Wochen (doppelblinde RCT, 148 Patienten, Dabos 2010); besser waren vor allem Oberbauchschmerz und Sodbrennen',
      'Funktionelle Dyspepsie: weniger Blähgefühl im Oberbauch, Brennen in der Magengegend und Sodbrennen unter Mastix-Kapseln im Vergleich zu einer Phase ohne Behandlung (randomisierte Crossover-Studie, ohne Placebo, Kleftaki 2025)',
      'Helicobacter pylori als Zusatz zur Vierfachtherapie: Eradikation 85 gegenüber 67 Prozent, nicht signifikant (p = 0,19), aber stärkere Linderung der Dyspepsie-Beschwerden (einfach verblindete Pilot-RCT, 64 Patienten, Tulsian 2026)',
      'Chronisch-entzündliche Darmerkrankungen: Eine systematische Übersicht über 8 Arbeiten, überwiegend aus Griechenland, sieht antioxidative und entzündungshemmende Effekte, verlangt aber bessere Studien (Mavroudi 2023)',
      'Von der EMA als traditionelles pflanzliches Arzneimittel bei leichten Verdauungsbeschwerden anerkannt, gestützt auf langjährige Verwendung (EU-Monografie 2016)'
    ],
    risks: [
      'Helicobacter pylori: Mastix allein eradizierte den Keim bei 4 von 13 und 5 von 13 Behandelten, zusammen mit Pantoprazol bei keinem, die Standardtherapie bei 10 von 13 (Dabos 2010); in einer weiteren Studie blieben alle 8 Behandelten positiv (Bebb 2003). Mastix ersetzt keine Eradikationstherapie',
      'Allergische Reaktionen möglich: Bei Menschen mit Allergie gegen einen mastixhaltigen medizinischen Hautkleber reagierten 13 von 18 auf Mastix (laut EMA-Überprüfung 2024); Überempfindlichkeit ist die einzige Gegenanzeige der Monografie',
      'Unter 18 Jahren für die Anwendung bei Verdauungsbeschwerden laut EMA nicht empfohlen, weil Daten fehlen',
      'Bei Beschwerden, die länger als 2 Wochen anhalten, ist laut EMA ärztlicher Rat angezeigt; Oberbauchbeschwerden können eine behandlungsbedürftige Ursache haben',
      'Kleine Studien, kurze Dauer von 2 bis 4 Wochen, überwiegend eine Forschungsregion; Ergebnisse gelten für die jeweils geprüfte Zubereitung'
    ],
    dosage: 'Die EU-Monografie nennt für das traditionelle Arzneimittel bei leichten Verdauungsbeschwerden 0,5 bis 1 g Mastixpulver zweimal täglich, also 1 bis 2 g pro Tag, für Erwachsene. In den Studien wurden 350 mg dreimal täglich über 3 Wochen (Dabos 2010, Dyspepsie), 1,4 g pro Tag über 4 Wochen (Kleftaki 2025) sowie 350 mg bis 1,05 g dreimal täglich über 14 Tage (Dabos 2010, Helicobacter) eingesetzt. Eine amtliche Höchstmenge für Lebensmittel gibt es nicht.',
    intake: 'Keine Einnahmeempfehlung. In den Studien wurde Mastix über 2 bis 4 Wochen täglich eingenommen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Harz des Mastixstrauchs (Pistacia lentiscus var. Chia) von Chios',
    link: 'https://pubmed.ncbi.nlm.nih.gov/19961914/'
  },
  {
    id: 'dgl-suessholz',
    name: 'DGL-Süßholz (deglycyrrhiziniert)',
    altNames: 'Deglycyrrhizinated Licorice, DGL, deglycyrrhizinierte Süßholzwurzel, Glycyrrhiza glabra, Lakritzwurzel ohne Glycyrrhizin, GutGard',
    category: 'Kräuter',
    tags: ['verdauung', 'darm'],
    short: 'Süßholzwurzel-Extrakt, aus dem das Glycyrrhizin weitgehend entfernt wurde, der Stoff hinter Bluthochdruck und Kaliumverlust durch Lakritz. Beworben gegen Sodbrennen, Reizmagen und Magengeschwüre: Ältere placebokontrollierte Studien bei Magen- und Zwölffingerdarmgeschwüren fanden keinen Nutzen, neuere Studien mit einem indischen Spezialextrakt zeigen bessere Werte bei Dyspepsie und Reflux.',
    description: 'DGL steht für deglycyrrhiziniertes Süßholz. Normale Süßholzwurzel enthält Glycyrrhizin, das in größeren Mengen Natrium im Körper zurückhält, Kalium ausschwemmt und den Blutdruck steigen lässt; das BfR rät, weniger als 100 mg Glycyrrhizin pro Tag aufzunehmen. Bei DGL wird dieser Stoff weitgehend entfernt, der Spezialextrakt GutGard enthält zum Beispiel höchstens 3 Prozent. Damit entfällt das bekannte Lakritzrisiko weitgehend, nicht aber die Frage nach der Wirkung. In placebokontrollierten Studien der 1970er-Jahre heilten Magen- und Zwölffingerdarmgeschwüre unter DGL nicht besser als unter Placebo. Drei neuere doppelblinde Studien mit dem Spezialextrakt GutGard fanden bessere Werte bei funktioneller Dyspepsie, bei Refluxbeschwerden und beim Helicobacter-Atemtest. Die EU-Monografie der EMA zur traditionellen Anwendung bei Verdauungsbeschwerden mit Brennen betrifft Zubereitungen der normalen Süßholzwurzel, nicht DGL.',
    benefits: [
      'Funktionelle Dyspepsie: geringere Beschwerde-Scores an Tag 15 und 30 und bessere Lebensqualität als unter Placebo (doppelblinde RCT mit GutGard, Raveendra 2012)',
      'Refluxbeschwerden: bessere Lebensqualität nach 28 Tagen (p = 0,014) und schnellerer Rückgang von Sodbrennen und Aufstoßen als unter Placebo (doppelblinde RCT mit GutGard, 200 Teilnehmende, Raj 2025)',
      'Helicobacter pylori: nach 60 Tagen Stuhl-Antigentest negativ bei 56 Prozent unter GutGard gegenüber 4 Prozent unter Placebo, Atemtest negativ bei 48 Prozent (doppelblinde RCT, 107 Patienten, Puram 2013); nicht mit einer Eradikationstherapie verglichen',
      'Glycyrrhizin weitgehend entfernt: Damit ist das bekannte Risiko von Lakritz für Blutdruck und Kaliumhaushalt deutlich verringert, sofern der Restgehalt niedrig ist (GutGard höchstens 3 Prozent)'
    ],
    risks: [
      'Magengeschwür: Bei 96 Patienten kein Unterschied zu Placebo bei Abheilung, Verkleinerung des Geschwürs und Beschwerden nach 4 Wochen (Bardhan 1978); in einer doppelblinden Crossover-Studie mit einem DGL-Präparat (Caved-S) keine schnellere Heilung (Engqvist 1973)',
      'Zwölffingerdarmgeschwür: Bei 47 Patienten kein Vorteil gegenüber Placebo nach einem Monat (Feldman 1971)',
      'Die positiven neueren Studien liefen alle mit demselben Spezialextrakt GutGard und kamen überwiegend aus Indien; auf andere DGL-Produkte lassen sie sich nicht übertragen',
      'Restgehalt an Glycyrrhizin ist bei Nahrungsergänzungen nicht einheitlich geregelt; das BfR rät zu weniger als 100 mg Glycyrrhizin pro Tag aus allen Quellen, weil zu viel zu Natriumrückhalt, Kaliumverlust, Bluthochdruck, Wassereinlagerungen und Muskelschwäche führen kann',
      'Bei Bluthochdruck, Herz- oder Nierenerkrankungen, niedrigem Kalium oder Medikamenten, die Kalium senken, nur nach ärztlicher Rücksprache; das gilt vor allem, wenn der Glycyrrhizingehalt des Produkts nicht angegeben ist',
      'Anhaltendes Sodbrennen oder Oberbauchschmerzen ärztlich abklären lassen, bevor man selbst behandelt'
    ],
    dosage: 'Keine Verzehrempfehlung. In den Studien mit GutGard wurden 75 mg zweimal täglich über 30 Tage (Raveendra 2012) und 150 mg einmal täglich über 60 Tage (Puram 2013) eingesetzt; in einer älteren Magengeschwür-Studie 760 mg dreimal täglich über 4 Wochen (Engqvist 1973). Für Glycyrrhizin rät das BfR zu weniger als 100 mg pro Tag aus allen Lebensmitteln zusammen.',
    intake: 'Keine Einnahmeempfehlung. Wer Medikamente gegen Bluthochdruck, Entwässerungsmittel oder Herzmedikamente nimmt, sollte den Glycyrrhizingehalt des Produkts mit Ärztin, Arzt oder Apotheke besprechen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Süßholzwurzel (Glycyrrhiza glabra), aus der das Glycyrrhizin weitgehend entfernt wurde; normales Lakritz enthält Glycyrrhizin und ist kein DGL',
    link: 'https://pubmed.ncbi.nlm.nih.gov/21747893/'
  },
  {
    id: 'd-ribose',
    name: 'D-Ribose',
    altNames: 'Ribose, Pentose, Bioenergy Ribose',
    category: 'Longevity',
    tags: ['herz', 'energie', 'mitochondrien', 'sport', 'blutzucker'],
    short: 'Zucker mit fünf Kohlenstoffatomen, aus dem der Körper das Grundgerüst des Energieträgers ATP baut. Bei Herzschwäche und Durchblutungsstörungen des Herzens gibt es kleine, teils positive Studien, bei chronischer Erschöpfung nur eine Studie ohne Kontrollgruppe, beim Sport keine Leistungssteigerung. D-Ribose kann den Blutzucker senken.',
    description: 'D-Ribose ist Baustein von ATP, RNA und anderen Nukleotiden; die Idee ist, dass zusätzliche Ribose die Neubildung von ATP in erschöpften Zellen beschleunigt. Bei 20 Männern mit koronarer Herzkrankheit verlängerten 3 Tage Ribose die Belastungszeit bis zu ersten EKG-Zeichen einer Durchblutungsstörung von 223 auf 276 Sekunden, die Zeit bis zu mäßiger Angina nicht (Pliml 1992). Bei 15 Patienten mit Herzschwäche verbesserten sich in einer Crossover-Studie einzelne Ultraschallwerte der Herzfüllung und die Lebensqualität (Omran 2003). Eine Studie mit 216 Patienten mit Herzschwäche bei erhaltener Pumpfunktion meldete bessere Symptome und Pumpfunktion unter Ubiquinol und/oder D-Ribose, die Gehstrecke änderte sich nicht (Pierce 2022). Bei Fibromyalgie und chronischem Erschöpfungssyndrom gibt es nur eine offene Studie ohne Kontrollgruppe (Teitelbaum 2006). Beim Sport verbesserte Ribose weder Leistung noch ATP-Erholung im Muskel (Op ’t Eijnde 2001, Kerksick 2005). Ribose senkt den Blutzucker; die EFSA leitete daraus 2018 eine Obergrenze ab, und die EU ließ D-Ribose 2019 als neuartiges Lebensmittel für bestimmte Lebensmittel zu.',
    benefits: [
      'Koronare Herzkrankheit: längere Belastungszeit bis 1 mm ST-Senkung im EKG, 276 gegenüber 223 Sekunden unter Placebo; die Zeit bis zu mäßiger Angina unterschied sich nicht (RCT, 20 Männer, 3 Tage, Pliml 1992)',
      'Herzschwäche bei koronarer Herzkrankheit: bessere Vorhofbeteiligung an der Herzfüllung (40 auf 45 Prozent), kürzere E-Wellen-Dezeleration und bessere Lebensqualität im SF-36, unter Placebo keine Änderungen (Crossover-RCT, 15 Patienten, je 3 Wochen, Omran 2003)',
      'Herzschwäche mit erhaltener Pumpfunktion: in den Gruppen mit Ubiquinol und/oder D-Ribose besserer Symptomscore (KCCQ +17,3 bis +25,8 Punkte), Ejektionsfraktion +7,1 bis +8,0 Prozentpunkte und niedrigeres BNP über 12 Wochen; 6-Minuten-Gehtest unverändert (RCT, 216 Patienten, Pierce 2022)',
      'Fibromyalgie und chronisches Erschöpfungssyndrom: rund 66 Prozent der 41 Teilnehmer berichteten Besserung von Energie, Schlaf und Wohlbefinden – offene Studie ohne Kontrollgruppe (Teitelbaum 2006)'
    ],
    risks: [
      'Senkt den Blutzucker: bei 9 Gesunden fiel die Serumglukose unter Dauergabe um 25 Prozent (Gross 1991); die EFSA wertete Abfälle des Blutzuckers und vorübergehende Unterzuckerungen ab 10 g als kritischen Effekt (EFSA 2018)',
      'Kein Leistungsplus beim Sport: weder bei wiederholten Maximalbelastungen mit ATP-Messung im Muskel (Op ’t Eijnde 2001, 19 Teilnehmer, 6 Tage) noch bei Sprints auf dem Radergometer (Kerksick 2005, 12 Radfahrer)',
      'Die Erschöpfungs- und Fibromyalgie-Daten stammen aus einer einzigen Studie ohne Kontrollgruppe; Placeboeffekte lassen sich nicht abgrenzen (Teitelbaum 2006)',
      'Herzstudien klein und kurz, teils ohne Kontrollgruppe (Bayram 2015: 11 Patienten, nur 1 berichtete subjektiven Nutzen); harte Endpunkte wie Klinikaufenthalte oder Sterblichkeit wurden nicht untersucht',
      'Bei Diabetes, blutzuckersenkenden Medikamenten, in Schwangerschaft und Stillzeit sowie bei Kindern nur nach ärztlicher Klärung; für Kinder fehlen laut EFSA Humandaten'
    ],
    dosage: 'Keine Verzehrempfehlung. Die EFSA hält D-Ribose für die Allgemeinbevölkerung bis 36 mg pro Kilogramm Körpergewicht und Tag für sicher, das sind bei 70 kg rund 2,5 g; für Erwachsene setzte sie den NOAEL in Bezug auf Unterzuckerung bei 70 mg pro Kilogramm (EFSA 2018). Die EU-Zulassung als neuartiges Lebensmittel regelt Höchstgehalte für Riegel, Backwaren, Sportgetränke und andere Lebensmittel, die einen Hinweis tragen müssen, dass sie nicht am selben Tag wie Nahrungsergänzungen mit D-Ribose verzehrt werden sollen (Durchführungsverordnung (EU) 2019/506). Studien verwendeten 60 g pro Tag über 3 Tage bei koronarer Herzkrankheit (Pliml 1992), 15 g pro Tag über 12 Wochen bei Herzschwäche (Pierce 2022), 5 g dreimal täglich bei Fibromyalgie und Erschöpfung (Teitelbaum 2006) und 4 g viermal täglich beim Sport (Op ’t Eijnde 2001). Das sind Studien- und Behördenangaben, keine Empfehlung.',
    intake: 'In den Studien als Pulver in Flüssigkeit, über den Tag verteilt. Wegen der blutzuckersenkenden Wirkung bei Diabetes oder blutzuckersenkenden Medikamenten vorher ärztlich klären.',
    synergies: ['coq10'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Vom Körper selbst gebildet; in Lebensmitteln vor allem gebunden in RNA und Nukleotiden, frei nur in kleinen Mengen; als Supplement durch Fermentation hergestellt',
    link: 'https://pubmed.ncbi.nlm.nih.gov/14607200/'
  },
  {
    id: 'hmb',
    name: 'HMB (β-Hydroxy-β-Methylbutyrat)',
    altNames: 'Beta-Hydroxy-Beta-Methylbutyrat, HMB, Calcium-HMB, CaHMB, HMB-Freisäure, HMB-FA, Leucin-Stoffwechselprodukt',
    category: 'Aminosäure',
    tags: ['muskel', 'sport', 'kraft', 'regeneration', 'alter'],
    short: 'Stoffwechselprodukt der Aminosäure Leucin, beworben für Muskelaufbau und Regeneration. Bei Trainierten zeigen mehrere Meta-Analysen keinen Zusatznutzen für Kraft und Muskelmasse, bei Untrainierten kleine Kraftgewinne, bei Kranken mit Muskelschwund kleine Effekte. Die spektakulären Ergebnisse einer Arbeitsgruppe um Jacob Wilson sind umstritten.',
    description: 'HMB entsteht im Körper beim Abbau von Leucin. Verkauft wird es meist als Calciumsalz, seltener als Freisäure. Bei Trainierten fanden zwei Meta-Analysen keine Wirkung auf Kraft und Körperzusammensetzung (Rowlands 2009, Sanchez-Martinez 2018: 6 RCTs mit 193 Athleten), bei jungen Erwachsenen im Krafttraining blieben Magermasse und Kraft unverändert (Jakubowski 2020, 11 Studien). Bei Untrainierten stieg die Beinkraft um knapp 10 Prozent (Rowlands 2009). In klinischen Gruppen mit Muskelschwund fand eine Meta-Analyse über 15 RCTs mit 2.137 Patienten kleine Effekte auf Muskelmasse und Kraft (Bear 2019), bei Älteren mit Krafttraining brachte HMB in 13 RCTs keinen Zusatznutzen (Wang 2026). Eine 12-Wochen-Studie mit HMB-Freisäure bei Trainierten meldete 7,4 kg Magermassezuwachs gegenüber 2,1 kg unter Placebo (Wilson 2014); andere Forscher kritisierten Unstimmigkeiten in den Veröffentlichungen dieser Gruppe, die Autoren wiesen das zurück.',
    benefits: [
      'Untrainierte im Krafttraining: kleine, klare Kraftgewinne, Beinkraft +9,9 Prozent, durchschnittliche Kraft +6,6 Prozent (Meta-Analyse, 9 Studien, 394 junge Männer, Rowlands 2009)',
      'Klinische Gruppen mit Muskelschwund: Muskelkraft SMD 0,31 und Muskelmasse SMD 0,25 (Meta-Analyse, 15 RCTs, 2.137 Patienten, Bear 2019) – kleine Effekte, keine Studie mit durchgehend niedrigem Verzerrungsrisiko',
      'Kurzzeit-Sicherheitsdaten: In 9 Studien mit 3 g pro Tag über 3 bis 8 Wochen keine ungünstigen Veränderungen von Blut- und Organwerten (Nissen 2000)',
      'Eine 12-Wochen-Studie mit HMB-Freisäure bei Trainierten meldete deutlich mehr Kraft und Magermasse als Placebo (Wilson 2014); das Ergebnis wurde von anderen Gruppen nicht bestätigt'
    ],
    risks: [
      'Trainierte und Leistungssportler: kein Effekt auf Bankdrücken, Beinpresse, Magermasse oder Fettmasse (Meta-Analyse, 6 RCTs, 193 Athleten, Sanchez-Martinez 2018)',
      'Junge Erwachsene im Krafttraining: keine signifikanten Effekte auf Magermasse, Fettmasse oder Kraft, nur ein kleiner Anstieg des Körpergewichts (Meta-Analyse, 11 Studien, Jakubowski 2020)',
      'Ältere ab 50 Jahren mit Krafttraining: kein Zusatznutzen für Muskelmasse, Fettmasse oder Kraft (Meta-Analyse, 13 RCTs, 561 Teilnehmer, Wang 2026)',
      'Die Wilson-Studien zu HMB-Freisäure wurden wegen Unstimmigkeiten bei Teilnehmerzahlen und -merkmalen öffentlich kritisiert (Gentles und Phillips 2017); der Erstautor sah darin ein Missverständnis (Wilson 2017)',
      'Sicherheitsdaten vor allem aus Studien über wenige Wochen bis Monate; eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht',
      'Keine in der EU zugelassene gesundheitsbezogene Angabe; die EFSA prüfte 2011 beantragte Angaben zu Magermasse, Kraft, Ausdauer und Erholung'
    ],
    dosage: 'Keine Verzehrempfehlung. In den Studien wurden meist 3 g HMB pro Tag verwendet, so in den 9 Studien der Sicherheitsauswertung über 3 bis 8 Wochen (Nissen 2000) und in der 12-Wochen-Studie mit HMB-Freisäure (Wilson 2014). Eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht. Das sind Studienangaben, keine Empfehlung.',
    intake: 'In den Studien täglich über Wochen bis Monate, meist auf mehrere Portionen verteilt und mit Krafttraining kombiniert. Bei Erkrankungen, Schwangerschaft und Stillzeit vorher ärztlich klären.',
    synergies: ['leucin', 'whey', 'kreatin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Entsteht im Körper beim Abbau von Leucin; als Supplement meist als Calciumsalz, seltener als Freisäure',
    link: 'https://pubmed.ncbi.nlm.nih.gov/30982854/'
  },
  {
    id: 'aakg',
    name: 'AAKG (Arginin-Alpha-Ketoglutarat)',
    altNames: 'L-Arginin-Alpha-Ketoglutarat, Arginin-AKG, A-AKG, Arginin-α-Ketoglutarat',
    category: 'Aminosäure',
    tags: ['sport', 'stickoxid', 'durchblutung', 'pump', 'muskel'],
    short: 'Salz aus der Aminosäure Arginin und Alpha-Ketoglutarat, verkauft als Stickoxid-Booster für den „Pump“ im Training. AAKG hebt den Arginin-Spiegel im Blut, mehr Durchblutung oder mehr Stickoxid als unter Placebo zeigte sich aber nicht. Es gibt nur wenige kleine Studien, die Ergebnisse zur Leistung widersprechen sich.',
    description: 'AAKG verbindet L-Arginin mit Alpha-Ketoglutarat, einem Zwischenprodukt des Citratzyklus; 1.000 mg AAKG enthalten rund 544 mg Arginin und 450 mg Alpha-Ketoglutarat (VKM 2016). Die Idee: mehr Arginin, mehr Stickstoffmonoxid, weitere Gefäße und mehr Blutfluss im Muskel. Nach 7 Tagen mit 12 g pro Tag stieg bei 24 Männern zwar das Plasma-Arginin, Blutfluss, Blutdruck und Stickoxid-Abbauprodukte unterschieden sich aber nicht von Placebo (Willoughby 2011). Eine Einzelgabe von 3 g verbesserte weder Maximalkraft noch Wiederholungszahl (Wax 2012). In einer 8-Wochen-Studie mit 35 Trainierten berichteten die Autoren bessere Werte beim Bankdrücken und bei der Spitzenleistung im Wingate-Test, nicht aber bei Körperzusammensetzung und Ausdauer (Campbell 2006). Die norwegische Lebensmittelbehörde VKM konnte 2016 mangels Daten keine AAKG-Menge in Nahrungsergänzungen bewerten. Zu Arginin selbst ist die Datenlage deutlich breiter.',
    benefits: [
      'Hebt den Arginin-Spiegel im Blut: gemessen nach Einzelgaben von 4 g (Campbell 2006) und nach 7 Tagen mit 12 g pro Tag (Willoughby 2011)',
      'In einer 8-Wochen-Studie mit 35 krafttrainierenden Männern berichteten die Autoren Verbesserungen beim Bankdrücken (1RM) und bei der Spitzenleistung im Wingate-Test; Körperzusammensetzung, Ausdauer und Beinmuskel-Ausdauer blieben unverändert (Campbell 2006)',
      'Eine Kombination aus Kreatin, AAKG und weiteren Zutaten steigerte über 10 Tage die Spitzenleistung im Wingate-Test, Kreatin allein nicht (Little 2008) – der Anteil von AAKG lässt sich daraus nicht ablesen',
      'In den kontrollierten Studien über bis zu 8 Wochen wurden keine schweren Nebenwirkungen berichtet (Campbell 2006; VKM 2016)'
    ],
    risks: [
      'Kein Mehr an Durchblutung: Blutfluss in der Armarterie, Blutdruck und Stickoxid-Abbauprodukte stiegen nach dem Training mit AAKG nicht stärker als unter Placebo (Willoughby 2011, 24 Männer)',
      'Keine akute Leistungssteigerung: 3 g AAKG vor dem Training änderten Maximalkraft und Wiederholungszahl bei Trainierten und Untrainierten nicht (Wax 2012, 16 Männer, Crossover)',
      'Drei Fallberichte aus der Notaufnahme mit Herzrasen, Schwindel und Beinahe-Ohnmacht nach AAKG-haltigen Präparaten; ein ursächlicher Zusammenhang ist nicht gesichert, andere Ursachen ließen sich nicht ausschließen (Prosser 2009)',
      'Die norwegische Behörde VKM konnte 2016 mangels Studien keine AAKG-Menge in Nahrungsergänzungen bewerten; die Studien sind klein, kurz und fast nur an Männern',
      'Wie bei Arginin: kann die Wirkung von Blutdrucksenkern verstärken; nach akutem Herzinfarkt ist Arginin nicht angezeigt (siehe L-Arginin)'
    ],
    dosage: 'Keine Verzehrempfehlung. In den Studien wurden 3 g als Einzelgabe vor dem Training (Wax 2012), 4 g dreimal täglich, also 12 g pro Tag, über 8 Wochen (Campbell 2006) und 12 g pro Tag über 7 Tage (Willoughby 2011) verwendet. Die norwegische Behörde VKM fand 2016 in Nahrungsergänzungen 1.000 bis 2.000 mg AAKG pro Tag und konnte mangels Daten keine dieser Mengen bewerten. Eine amtliche Höchstmenge von EFSA oder BfR gibt es nicht. Das sind Studien- und Behördenangaben, keine Empfehlung.',
    intake: 'In den Studien vor dem Training oder über den Tag verteilt. Wer Blutdruckmittel nimmt, eine Herz-, Nieren- oder Lebererkrankung hat, schwanger ist oder stillt, klärt das vorher ärztlich.',
    synergies: ['l-arginin', 'citrullin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Kein Lebensmittelbestandteil in dieser Form; Arginin steckt in Nüssen, Kürbiskernen, Fleisch, Fisch und Hülsenfrüchten, Alpha-Ketoglutarat entsteht im Stoffwechsel',
    link: 'https://pubmed.ncbi.nlm.nih.gov/21813912/'
  },
  {
    id: 'lola',
    name: 'LOLA (L-Ornithin-L-Aspartat)',
    altNames: 'L-Ornithin-L-Aspartat, Ornithinaspartat, Ornithin-Aspartat, Hepa-Merz',
    category: 'Aminosäure',
    tags: ['leber', 'entgiftung', 'arzneimittel', 'sport'],
    short: 'Salz aus den Aminosäuren Ornithin und Aspartat, das die Ammoniakentgiftung der Leber antreibt. In Deutschland ist LOLA als apothekenpflichtiges Arzneimittel gegen die hepatische Enzephalopathie bei Leberzirrhose zugelassen. Dort zeigen viele Studien einen Nutzen, die Cochrane-Auswertung stuft die Evidenz aber als sehr niedrig ein. Für Gesunde gibt es kaum Daten.',
    description: 'L-Ornithin-L-Aspartat wird nach der Aufnahme rasch in Ornithin und Aspartat gespalten. Laut Fachinformation wirken beide auf zwei Schlüsselwege der Ammoniakentgiftung, die Harnstoffsynthese und die Glutaminsynthese; unter normalen Bedingungen sind sie für die Harnstoffsynthese aber nicht begrenzend. In Deutschland ist LOLA als Hepa-Merz Granulat und als Infusionslösungs-Konzentrat apothekenpflichtig zugelassen, zur Behandlung der latenten und manifesten hepatischen Enzephalopathie, einer Hirnfunktionsstörung durch Ammoniak bei schwerer Lebererkrankung. Die Cochrane-Auswertung von 29 Studien mit 1.891 Menschen mit Zirrhose fand weniger Enzephalopathie und Sterblichkeit, in den Studien mit niedrigem Verzerrungsrisiko verschwand der Effekt aber (Goh 2018). Beim akuten Leberversagen senkte LOLA weder Ammoniak noch Sterblichkeit (Acharya 2009). Für Gesunde, Sportler oder als Mittel nach Alkohol gibt es keine belastbaren Studien.',
    benefits: [
      'Leberzirrhose: seltener hepatische Enzephalopathie (RR 0,70; 22 Studien, 1.375 Teilnehmer) und geringere Sterblichkeit (RR 0,42; 19 Studien, 1.489 Teilnehmer) gegenüber Placebo oder keiner Behandlung – Evidenz sehr niedriger Qualität (Cochrane, Goh 2018)',
      'Infusionen über 7 Tage senkten bei 126 Patienten mit Zirrhose das Ammoniak nach einer Eiweißmahlzeit und verbesserten Zahlenverbindungstest und geistigen Zustand stärker als Placebo (Kircheis 1997)',
      'Als Granulat über 14 Tage bei 66 Patienten bessere Ammoniakwerte und Testleistungen als Placebo, ohne beobachtete Nebenwirkungen (Stauch 1998)',
      'Schwere Enzephalopathie Grad III bis IV: zusätzlich zu Laktulose und Rifaximin häufiger Besserung (92,5 gegenüber 66 Prozent) und geringere 28-Tage-Sterblichkeit (16,4 gegenüber 41,8 Prozent; RCT, 140 Patienten, Jain 2022)',
      'Als Arzneimittel zugelassen und unter Pharmakovigilanz (Fachinformation); nicht schwere Nebenwirkungen traten in 14 Studien mit 1.076 Teilnehmern nicht häufiger auf als unter Placebo (Goh 2018)'
    ],
    risks: [
      'In den methodisch besten Studien kein Nutzen bei Enzephalopathie (RR 0,96; 1 Studie mit niedrigem Verzerrungsrisiko) und Sterblichkeit (4 Studien); gegenüber Laktulose und Rifaximin kein Unterschied (Goh 2018)',
      'Akutes Leberversagen: Infusionen über 3 Tage senkten bei 201 Patienten weder Ammoniak noch Sterblichkeit (42,4 gegenüber 33,3 Prozent, nicht signifikant; Acharya 2009)',
      'Gelegentlich Übelkeit, Erbrechen, Magenschmerzen, Blähungen und Durchfall, sehr selten Gliederschmerzen (Fachinformation)',
      'Gegenangezeigt bei stärkeren Nierenfunktionsstörungen; in Schwangerschaft und Stillzeit vermeiden; für Kinder keine Daten; das Granulat enthält Fructose und den Farbstoff Gelborange S (Fachinformation)',
      'Für Gesunde nur eine kleine Sportstudie mit einer Kombination aus verzweigtkettigen Aminosäuren und LOLA, in der das Ammoniak am Ende der Dauerbelastung sogar höher lag als unter Placebo (Mikulski 2015)',
      'Ob LOLA in Deutschland als Nahrungsergänzung verkehrsfähig ist, ist amtlich nicht geklärt; der Stoff ist Wirkstoff eines zugelassenen Arzneimittels'
    ],
    dosage: 'Keine Verzehrempfehlung. Als Arzneimittel zugelassen ist Hepa-Merz Granulat 3000 mit bis zu 3-mal täglich dem Inhalt von 1 bis 2 Beuteln à 3,0 g Ornithinaspartat, das Infusionslösungs-Konzentrat mit bis zu 4 Ampullen täglich, jeweils nur bei Lebererkrankung und ärztlich begleitet (Fachinformationen). Studien verwendeten 18 g pro Tag als Granulat über 14 Tage (Stauch 1998), 20 g pro Tag als Infusion über 7 Tage (Kircheis 1997) und 12 g zusammen mit 16 g verzweigtkettigen Aminosäuren vor einer Belastung (Mikulski 2015). Für Nahrungsergänzungen gibt es keine amtliche Höchstmenge. Das sind Zulassungs- und Studienangaben, keine Empfehlung.',
    intake: 'Das Arzneimittel wird laut Fachinformation in reichlich Flüssigkeit gelöst zu oder nach den Mahlzeiten eingenommen. Bei Leber- oder Nierenerkrankung gehört LOLA in ärztliche Hände, nicht in Selbstbehandlung.',
    synergies: ['l-ornithin'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Kein Lebensmittelbestandteil in dieser Form; Ornithin bildet der Körper selbst, Aspartat steckt in allen eiweißhaltigen Lebensmitteln',
    link: 'https://pubmed.ncbi.nlm.nih.gov/29762873/'
  },
  {
    id: 'monolaurin',
    name: 'Monolaurin',
    altNames: 'Glycerinmonolaurat, Glycerolmonolaurat, GML, Glyceryllaurat, Laurinsäure-Monoglycerid',
    category: 'Fettsäure',
    tags: ['immun', 'darm', 'mikrobiom'],
    short: 'Ein Baustein aus Laurinsäure und Glycerin, der im Reagenzglas Bakterien, Pilze und behüllte Viren hemmt. Als Kapsel geschluckt ist Monolaurin am Menschen nicht untersucht; die wenigen Humanstudien prüften Gels für Scheide und Nase.',
    description: 'Monolaurin (Glycerinmonolaurat, GML) ist ein Monoglycerid: ein Glycerinmolekül, an das eine Laurinsäure gebunden ist. Es kommt natürlich in Muttermilch vor und gehört chemisch zur Zusatzstoffgruppe E 471, den als Emulgator zugelassenen Mono- und Diglyceriden von Speisefettsäuren. Fast alle Wirkdaten stammen aus Laborversuchen, Nutztierfütterung und Affenversuchen. Eine Literaturübersicht von 2019 fand nur drei begutachtete Arbeiten mit antimikrobiellen Effekten am Menschen, alle mit äußerlicher Anwendung in Scheide oder Mund, und keine einzige zur Einnahme als Nahrungsergänzung. Die größte kontrollierte Studie, ein Scheidengel gegen bakterielle Vaginose bei 109 Frauen, heilte nicht besser als Placebo.',
    benefits: [
      'Hemmt im Reagenzglas zahlreiche Bakterien, Pilze und behüllte Viren; die Daten stammen überwiegend aus Laborversuchen',
      'Als 5-prozentiges Nasengel bei 40 gesunden Freiwilligen: Staphylococcus aureus in der Nase um drei Zehnerpotenzen verringert, für zwei bis drei Tage; ohne Kontrollgruppe (Schlievert 2020)',
      'Im Affenmodell schützte GML in der Scheide Rhesusaffen trotz wiederholter hoher Virusdosen vor einer Ansteckung mit SIV, dem Affen-Verwandten von HIV (Li 2009)',
      'Trägt laut einer Laborarbeit zur antibakteriellen Wirkung von Muttermilch bei: rund 3000 µg/ml in Muttermilch, 150 µg/ml in Kuhmilch, keines in Säuglingsnahrung (Schlievert 2019)',
      'In einer italienischen Beobachtungsstudie mit 1000 Beschäftigten im Gesundheitswesen ging ein höherer Monolaurinspiegel im Blut mit seltenerer Corona-Infektion einher – ein Zusammenhang, kein Wirkungsnachweis (Sola 2025)'
    ],
    risks: [
      'Zur Einnahme als Kapsel gibt es keine Sicherheitsstudie am Menschen',
      'Im Scheidengel-RCT meldeten zwei Drittel beider Gruppen leichte bis mittlere Beschwerden im Genitalbereich, ohne Unterschied zu Placebo (Mancuso 2020)',
      'Hemmt in Laborversuchen die Aktivierung menschlicher T-Zellen und deren Botenstoffproduktion (Zhang 2016); ob das bei Einnahme eine Rolle spielt, ist nicht untersucht',
      'Wird als breit wirksames Mittel gegen Viren, Candida und Infekte verkauft – dafür gibt es keine klinische Studie mit Einnahme'
    ],
    dosage: 'Keine Verzehrempfehlung. Für die Einnahme als Nahrungsergänzung gibt es keine Humanstudie, aus der sich eine Menge ableiten ließe. In den Studien am Menschen wurde Monolaurin ausschließlich äußerlich als 5-prozentiges Gel verwendet, in der Vaginose-Studie zweimal täglich über drei Tage. Eine amtliche Höchstmenge für Nahrungsergänzungsmittel ließ sich nicht finden.',
    intake: 'Keine Einnahmeempfehlung. Für Infektionen gibt es geprüfte Behandlungen; für Monolaurin als Kapsel fehlt jeder Wirksamkeitsnachweis, deshalb gehört ein Infekt in ärztliche Hände.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Muttermilch; die Laurinsäure als Ausgangsstoff steckt vor allem in Kokos- und Palmkernfett',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32952476/'
  },
  {
    id: 'pau-d-arco',
    name: 'Pau d’Arco (Lapacho)',
    altNames: 'Lapacho, Lapachorinde, Taheebo, Ipê roxo, Tabebuia impetiginosa, Tabebuia avellanedae, Handroanthus impetiginosus',
    category: 'Kräuter',
    tags: ['immun', 'entzuendung'],
    short: 'Innere Rinde eines südamerikanischen Baums, in Deutschland als Lapachotee bekannt. Beworben gegen Pilze, Infekte und sogar Krebs; am Menschen gibt es eine einzige kleine Studie ohne Kontrollgruppe. Der Inhaltsstoff Lapachol war im Tierversuch stark fruchtschädigend.',
    description: 'Pau d’Arco ist die innere Rinde von Tabebuia impetiginosa (heute Handroanthus impetiginosus), einem Baum aus Südamerika, wo sie traditionell als Abkochung gegen Infektionen, Fieber und Magenbeschwerden getrunken wird. In den 1960er-Jahren wurde sie in Brasilien als Wundermittel gegen Krebs bekannt; das US-amerikanische National Cancer Institute untersuchte die Pflanze und den Inhaltsstoff Lapachol damals ausführlich. Die wichtigsten Wirkstoffe sind Naphthochinone wie Lapachol und Beta-Lapachon, deren Effekte fast ausschließlich aus Zell- und Tierversuchen stammen. Am Menschen liegt zur Rinde eine einzige offene Studie mit zwölf Frauen vor. Für die Rinde ist eine Störung des Vitamin-K-Kreislaufs beschrieben, und die Handelsware schwankt laut einer Übersicht stark in Qualität und Zusammensetzung.',
    benefits: [
      'Entzündungshemmende, antibakterielle und pilzhemmende Effekte in Zell- und Tierversuchen, zusammengefasst in Übersichtsarbeiten (Zhang 2020); klinisch nicht geprüft',
      'Einzige Humanstudie zur Rinde: 12 Frauen mit Regelschmerzen, 1.050 mg täglich über 8 Wochen, offen und ohne Kontrollgruppe; die Schmerzstärke sank gegenüber dem Ausgangswert, 9 von 12 beendeten die Studie (McClure 2022)',
      'Lange Tradition als Abkochung in Südamerika; in Deutschland als Tee bekannt (BVL-Stoffliste)'
    ],
    risks: [
      'Der Inhaltsstoff Lapachol war im Rattenversuch stark fruchtschädigend: Nach Gabe in der Frühschwangerschaft starben 99,2 Prozent der Feten ab (Guerra 2001)',
      'Für die Rinde ist eine Störung des Vitamin-K-Kreislaufs beschrieben (Gómez Castellanos 2009) – relevant für die Blutgerinnung und für Gerinnungshemmer',
      'In der offenen Studie meldeten 9 von 12 Frauen unerwünschte Ereignisse, meist leicht, keines schwerwiegend; einzelne Laborwerte waren leicht auffällig (McClure 2022)',
      'Naphthochinone reizen Haut und Schleimhaut; große Mengen verursachen laut BVL-Stoffliste zytotoxische Effekte und Störungen des Verdauungstrakts',
      'Qualität und Zusammensetzung der Handelsware schwanken stark (Gómez Castellanos 2009)'
    ],
    dosage: 'Keine Verzehrempfehlung. Die einzige Humanstudie zur Rinde verwendete 1.050 mg Pau d’Arco in Kapseln täglich über acht Wochen (McClure 2022); daraus lässt sich weder eine wirksame noch eine sichere Menge ableiten. Eine amtliche Höchstmenge gibt es nicht.',
    intake: 'Keine Einnahmeempfehlung. Wegen der Lapachol-Daten aus dem Tierversuch und der beschriebenen Störung des Vitamin-K-Kreislaufs sind Schwangerschaft, Stillzeit und die gleichzeitige Einnahme von Gerinnungshemmern ein Fall für die ärztliche Rücksprache.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Innere Rinde von Tabebuia impetiginosa; traditionell als Abkochung oder Tee',
    link: 'https://pubmed.ncbi.nlm.nih.gov/18992801/'
  },
  {
    id: 'phosphatidylcholin',
    name: 'Phosphatidylcholin',
    altNames: 'PC, Lecithin (Hauptbestandteil), Polyenylphosphatidylcholin (PPC), essenzielle Phospholipide (EPL), Sojalecithin',
    category: 'Fettsäure',
    tags: ['leber', 'gehirn', 'darm', 'acetylcholin'],
    short: 'Hauptbestandteil von Lecithin und eine wichtige Cholinquelle. Bei Fettleber senkte ein Phospholipid-Präparat in einer neuen Studie den Leberfettwert; bei alkoholbedingter Leberfibrose, Colitis ulcerosa und Demenz blieben große oder zusammengefasste Studien ohne Nutzen.',
    description: 'Phosphatidylcholin ist ein Phospholipid aus Glycerin, zwei Fettsäuren, Phosphat und Cholin und ein Grundbaustein der Zellmembranen. Es ist der Hauptbestandteil von Lecithin, das als Zusatzstoff E 322 zugelassen ist, und steckt unter anderem in Eigelb und Soja. Über den Cholinanteil hängt es an zugelassenen EU-Angaben: Cholin trägt zu einem normalen Fettstoffwechsel, zu einem normalen Homocystein-Stoffwechsel und zur Erhaltung einer normalen Leberfunktion bei. Die EFSA nennt als angemessene Cholinzufuhr für Erwachsene 400 mg pro Tag. Klinisch ist das Bild gemischt: Bei Fettleber mit Stoffwechselrisiken senkten essenzielle Phospholipide in einer doppelblinden Studie mit 193 Patienten den Leberfettwert, bei 789 Alkoholikern bremste Polyenylphosphatidylcholin die Fibrose nicht. Darmbakterien bauen den Cholinanteil zu TMAO um, dessen Blutspiegel mit Herz-Kreislauf-Ereignissen zusammenhängt.',
    benefits: [
      'Fettleber mit Typ-2-Diabetes, Fettstoffwechselstörung oder Übergewicht: essenzielle Phospholipide senkten über 6 Monate den Leberfettwert (CAP) gegenüber Placebo, dazu HbA1c und den Müdigkeitswert (RCT, 193 randomisierte Patienten, Stefan 2026)',
      'Zugelassene EU-Angaben für Cholin: normaler Fettstoffwechsel, normaler Homocystein-Stoffwechsel, Erhaltung einer normalen Leberfunktion – ab 82,5 mg Cholin je 100 g, 100 ml oder Portion',
      'Cholinquelle: Die EFSA setzt die angemessene Zufuhr für Erwachsene auf 400 mg Cholin pro Tag, in der Schwangerschaft auf 480 mg und in der Stillzeit auf 520 mg',
      'Alkoholbedingte Leberfibrose: kein Unterschied zu Placebo nach 2 Jahren (RCT, 789 Teilnehmer, Lieber 2003)',
      'Colitis ulcerosa: Nach positiven frühen Studien wurde die große Einleitungsstudie mit verzögert freigesetztem Phosphatidylcholin (466 Patienten) wegen Aussichtslosigkeit abgebrochen (Dignass 2024)',
      'Demenz: Ein Cochrane-Review über 12 randomisierte Studien fand keinen klaren klinischen Nutzen von Lecithin (Higgins 2003)'
    ],
    risks: [
      'Darmbakterien bauen den Cholinanteil zu TMAO um; ein höherer TMAO-Spiegel ging bei 4007 Herzpatienten mit mehr Herzinfarkten, Schlaganfällen und Todesfällen einher (höchstes gegen niedrigstes Viertel HR 2,54, Tang 2013) – ein Zusammenhang, kein Beleg, dass Phosphatidylcholin-Kapseln das Herzrisiko erhöhen',
      'In den großen Studien gut verträglich: verzögert freigesetztes Phosphatidylcholin über bis zu 48 Wochen ohne Sicherheitsprobleme (Dignass 2024), keine Sicherheitsbedenken in der Fettleberstudie (Stefan 2026)',
      'Ersetzt keine Behandlung einer Lebererkrankung; bei Alkoholikern hing der Verlauf in der großen Studie vor allem am Trinken, nicht am Präparat (Lieber 2003)'
    ],
    dosage: 'Amtlicher Bezugswert ist die Cholinzufuhr: Die EFSA nennt 400 mg Cholin pro Tag als angemessene Zufuhr für Erwachsene, 480 mg in der Schwangerschaft und 520 mg in der Stillzeit; die EU-Angaben setzen mindestens 82,5 mg Cholin je 100 g, 100 ml oder Portion voraus. In Studien: verzögert freigesetztes Phosphatidylcholin bei Colitis ulcerosa 3,2 g täglich (0,8 g viermal oder 1,6 g zweimal täglich); bei Alkoholikern drei Tabletten Polyenylphosphatidylcholin täglich. Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Phosphatidylcholin steckt in Eigelb und Soja; Kapseln ersetzen keine ärztliche Behandlung einer Lebererkrankung.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Eigelb, Sojabohnen; Lecithin aus Soja oder Sonnenblumen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41889076/'
  },
  {
    id: 'natriumbutyrat',
    name: 'Natriumbutyrat',
    altNames: 'Butyrat, Natriumsalz der Buttersäure, Sodium Butyrate, mikroverkapseltes Natriumbutyrat',
    category: 'Probiotika',
    tags: ['darm', 'verdauung', 'mikrobiom', 'blutzucker'],
    short: 'Das Natriumsalz der Buttersäure, die Darmbakterien sonst selbst aus Ballaststoffen bilden. Als Kapsel gibt es kleine Studien bei Reizdarm, Colitis und Übergewicht mit teils positiven Ergebnissen; bei Bluthochdruck stieg der Blutdruck dagegen an.',
    description: 'Butyrat ist eine kurzkettige Fettsäure und ein wichtiger Energielieferant der Dickdarmschleimhaut. Normalerweise entsteht es im Dickdarm, wenn Bakterien Ballaststoffe vergären; eine Übersicht von 2008 beschreibt entzündungshemmende und schleimhautstärkende Effekte, hält aber fest, dass Humandaten begrenzt sind. Als Nahrungsergänzung wird Natriumbutyrat meist mikroverkapselt angeboten, damit es weiter unten im Darm ankommt. Die Humanstudien sind klein und kurz: Bei Reizdarm (66 Patienten) besserten sich einzelne Beschwerden, bei Colitis ulcerosa (98 Patienten) als Zusatztherapie die Remissionsraten, bei Kindern mit Adipositas (54) der BMI. Bei 23 Menschen mit Bluthochdruck stieg der Blutdruck unter Butyrat dagegen an. Kapsel-Butyrat und Butyrat aus Ballaststoffen sind nicht dasselbe: In der Blutdruckstudie stieg der Butyratspiegel im Blut, im Stuhl aber nicht.',
    benefits: [
      'Reizdarm: mikroverkapseltes Natriumbutyrat zusätzlich zur Standardtherapie verringerte nach 4 Wochen Schmerzen beim Stuhlgang, nach 12 Wochen auch Stuhldrang und Stuhlunregelmäßigkeiten; Bauchschmerz und Blähungen besserten sich nicht signifikant (RCT, 66 Patienten, Banasiewicz 2013)',
      'Colitis ulcerosa, leicht bis mittelschwer: als Zusatztherapie über 8 Wochen klinische Besserung bei 51 Prozent und Remission bei 31,4 Prozent der Butyrat-Gruppe, laut Autoren signifikant; die Placebo-Raten nennt die Zusammenfassung nicht (RCT, 98 Patienten, Karłowicz 2025)',
      'Kinder mit Adipositas: zusätzlich zur Standardbehandlung erreichten 96 gegenüber 56 Prozent eine BMI-Senkung um mindestens 0,25 Standardabweichungen in 6 Monaten (RCT, 54 Kinder, Coppola 2022)',
      'Übergewichtige Erwachsene ohne Diabetes: −7,0 gegenüber −3,2 kg in 12 Wochen bei gleicher Diät; mit Typ-2-Diabetes kein Unterschied beim Gewicht, aber niedrigere Triglyzeride (RCT, 46 Teilnehmer, Testa 2026)',
      'Typ-2-Diabetes mit Reizdarm-Beschwerden: weniger Bauchschmerz, Durchfall und Blähungen nach 12 Wochen, ausgewertet vor allem innerhalb der Gruppen (RCT, 52 Patienten, Panufnik 2026)'
    ],
    risks: [
      'Bei 23 Menschen mit Bluthochdruck stieg der Tagesblutdruck nach 4 Wochen um 9,6 mmHg systolisch und 5,1 mmHg diastolisch gegenüber Placebo (Verhaar 2024)',
      'Natriumbutyrat besteht zu etwa einem Fünftel aus Natrium',
      'Die Studien sind klein und dauern 4 Wochen bis 6 Monate; Langzeitdaten fehlen',
      'Tributyrin, eine verwandte Butyratquelle, gilt in der EU seit 2024 als nicht zugelassenes neuartiges Lebensmittel; für Natriumbutyrat hat der Novel-Food-Katalog keinen Eintrag'
    ],
    dosage: 'Keine Verzehrempfehlung. In Studien: 600 mg mikroverkapseltes Natriumbutyrat täglich (2 × 300 mg) bei Colitis ulcerosa, 1,5 g täglich bei Typ-2-Diabetes, 1.875 mg täglich bei Übergewicht, 20 mg je Kilogramm Körpergewicht täglich bei Kindern mit Adipositas. Eine amtliche Höchstmenge gibt es nicht.',
    intake: 'Keine Einnahmeempfehlung. Butyrat entsteht im Darm aus Ballaststoffen; ob Kapseln diesen Weg ersetzen, ist nicht gezeigt. Bei Bluthochdruck gehört Butyrat wegen der Blutdruckstudie in die ärztliche Rücksprache.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Entsteht im Dickdarm bei der Vergärung von Ballaststoffen; Buttersäure kommt außerdem in Butter vor',
    link: 'https://pubmed.ncbi.nlm.nih.gov/22738315/'
  },
  {
    id: 'baldrian',
    name: 'Baldrian (Baldrianwurzel)',
    altNames: 'Valeriana officinalis, Baldrianwurzel, Valerianae radix, Valerian, Valerensäure',
    category: 'Kräuter',
    tags: ['schlaf', 'entspannung', 'stress', 'angst', 'nerven'],
    short: 'Eines der ältesten pflanzlichen Schlafmittel Europas und behördlich als Arzneipflanze anerkannt: Für ethanolische Trockenextrakte sieht der EU-Kräuterausschuss HMPC die Wirkung bei leichter nervöser Anspannung und Schlafstörungen als durch Studien gestützt an. In Meta-Analysen berichten Anwender häufiger besseren Schlaf als unter Placebo. Bei der Einschlafzeit und im Schlaflabor zeigt sich das nicht.',
    description: 'Baldrian wird aus der Wurzel des Echten Baldrians gewonnen und ist als Tee, Tinktur, Saft und als Trockenextrakt in Tabletten im Handel. Der Ausschuss für pflanzliche Arzneimittel der EMA (HMPC) stuft ethanolische Trockenextrakte seit 2016 als „well-established use“ ein, also mit Studien belegt, für leichte nervöse Anspannung und Schlafstörungen; Tee, Saft und Tinkturen gelten als traditionelle Anwendung. Die Studienlage ist uneinheitlich: Zwei Meta-Analysen fanden häufiger eine subjektive Besserung als unter Placebo (RR 1,8 bzw. 1,37), aber keinen Unterschied bei der Einschlafzeit; die größte Einzelstudie mit 405 Teilnehmern verfehlte ihr Hauptziel knapp. Als Wirkweg gilt Valerensäure, die im Labor an GABA-A-Rezeptoren bindet. Laut HMPC wirkt Baldrian schrittweise über zwei bis vier Wochen und ist nicht für die akute Einnahme gedacht.',
    benefits: [
      'Behördlich anerkannt: Die HMPC-Monographie (2016) stuft ethanolische Trockenextrakte als „well-established use“ für leichte nervöse Anspannung und Schlafstörungen ein; die Studien zeigten bessere Schlafqualität und kürzere Einschlafzeit bei der empfohlenen Dosis (EMA/HMPC)',
      'Meta-Analyse aus 16 placebokontrollierten Studien mit 1.093 Patienten: Besserung der Schlafqualität 1,8-mal so häufig wie unter Placebo (RR 1,8), bei Hinweisen auf Publikationsbias (Bent 2006)',
      'Meta-Analyse aus 18 randomisierten Studien: subjektive Besserung der Insomnie häufiger als unter Placebo (RR 1,37), ohne Publikationsbias (Fernández-San-Martín 2010)',
      'Übersicht über 60 Studien mit 6.894 Teilnehmern: in Meta-Analysen bessere subjektive Schlafqualität (10 Studien) und weniger Angst (8 Studien); schwankende Extraktqualität als mögliche Ursache uneinheitlicher Ergebnisse; keine schweren Nebenwirkungen zwischen 7 und 80 Jahren (Shinjyo 2020)',
      'Valerensäure und Valerenol binden im Labor an GABA-A-Rezeptoren mit beta3-Untereinheit und wirkten bei Mäusen angstlösend (Benke 2009)'
    ],
    risks: [
      'Objektiv kein Effekt: Die Einschlafzeit unterschied sich in der Meta-Analyse um 0,70 Minuten von Placebo, die auf Skalen gemessene Schlafqualität gar nicht (Fernández-San-Martín 2010)',
      'Größte Einzelstudie (405 Teilnehmer, Norwegen, 2 Wochen): spürbar besserer Schlaf bei 29 gegenüber 21 Prozent, Hauptziel knapp verfehlt (p = 0,08) (Oxman 2007)',
      'Die Amerikanische Akademie für Schlafmedizin rät von Baldrian gegen Insomnie ab (schwache Empfehlung, Sateia 2017); die Europäische Insomnie-Leitlinie 2023 empfiehlt Phytotherapeutika nicht (Riemann 2023)',
      'Übelkeit und Bauchkrämpfe möglich (HMPC); nicht für Kinder unter 12 Jahren, nicht in Schwangerschaft und Stillzeit; kann die Fahrtüchtigkeit beeinflussen (EMA/HMPC)',
      'Zubereitungen schwanken stark in Auszugsmittel und Gehalt; Studienergebnisse gelten nur für die jeweils geprüften Extrakte (Shinjyo 2020)'
    ],
    dosage: 'Für Arzneimittel mit ethanolischem Trockenextrakt nennt die HMPC-Monographie 400 bis 600 mg Trockenextrakt als Einzeldosis, bei Schlafstörungen eine halbe bis eine Stunde vor dem Schlafengehen, höchstens vier Einzeldosen am Tag. Maßgeblich ist die Packungsbeilage des jeweiligen Präparats. Eine amtliche Höchstmenge für Nahrungsergänzungsmittel wurde bei der Recherche nicht gefunden. Das ist eine behördliche Angabe, keine Empfehlung.',
    intake: 'Laut HMPC baut sich die Wirkung über zwei bis vier Wochen auf; für die akute Einnahme in einer einzelnen schlechten Nacht ist Baldrian nicht gedacht. Wenn die Beschwerden nach zwei Wochen anhalten oder schlimmer werden, ärztlich oder in der Apotheke abklären. Wer andere dämpfende Mittel nimmt, schwanger ist oder stillt, klärt das vorher ab.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wurzel des Echten Baldrians (Valeriana officinalis); im Handel als Tee, Saft, Tinktur und als Trockenextrakt in Tabletten und Dragees',
    link: 'https://pubmed.ncbi.nlm.nih.gov/17145239/'
  },
  {
    id: 'lavendeloel',
    name: 'Lavendelöl oral (Silexan)',
    altNames: 'Lasea, Silexan, Lavandula angustifolia, Lavendelöl-Kapseln, Linalool',
    category: 'Kräuter',
    tags: ['angst', 'stress', 'schlaf', 'entspannung', 'stimmung'],
    short: 'Ein Arzneiöl aus Lavendelblüten in Kapselform, in Deutschland seit 2009 als Lasea gegen Unruhe bei ängstlicher Verstimmung zugelassen. In fünf placebokontrollierten Studien mit über 1.200 Teilnehmern sank die Angst stärker als unter Placebo, bei generalisierter Angststörung mindestens so stark wie unter Paroxetin, ohne müde zu machen. Die großen Studien entstanden mit Beteiligung des Herstellers.',
    description: 'Silexan ist ein definiertes ätherisches Öl aus den Blüten des Echten Lavendels, Hauptbestandteil ist Linalool. Als Lasea (80 mg) ist es in Deutschland seit 26.06.2009 zugelassen, apothekenpflichtig, für Unruhezustände bei ängstlicher Verstimmung. Eine Meta-Analyse aller fünf Placebo-Studien mit 1.213 Teilnehmern fand eine stärkere Abnahme der Angst und 1,34-mal so viele Responder. Bei generalisierter Angststörung schnitten 80 und 160 mg in einer Studie mit 539 Patienten besser ab als Placebo, Paroxetin nur im Trend. Der Schlaf besserte sich in einer Studie mit 221 Angstpatienten mit, ohne sedierende Wirkung. Der europäische Kräuterausschuss HMPC hielt die Studien 2012 noch für zu klein und führt Lavendelöl nur als traditionelles Arzneimittel; die große Studie von 2014 und die Meta-Analyse von 2023 kamen danach.',
    benefits: [
      'Meta-Analyse aller 5 doppelblinden Placebo-Studien (1.213 Teilnehmer, 80 mg täglich, 10 Wochen): stärkerer Rückgang auf der Hamilton-Angstskala, 1,34-mal so viele Responder und 1,51-mal so viele deutlich Gebesserte; Nebenwirkungen und Abbrüche wie unter Placebo (Dold 2023)',
      'Generalisierte Angststörung, 539 Patienten, 10 Wochen: Hamilton-Angstwert minus 14,1 (160 mg) und minus 12,8 Punkte (80 mg) gegenüber minus 11,3 unter Paroxetin und minus 9,5 unter Placebo; beide Silexan-Dosen signifikant besser als Placebo, Paroxetin nur im Trend (Kasper 2014)',
      'Subsyndromale Angst mit Schlafproblemen, 221 Patienten: Ansprechen bei 76,9 gegenüber 49,1 Prozent, der Schlafindex PSQI sank um 44,7 gegenüber 30,9 Prozent, ohne sedierende Wirkung (Kasper 2010)',
      'Generalisierte Angst im Vergleich mit Lorazepam (6 Wochen): Rückgang der Angstwerte um 45 gegenüber 46 Prozent, also ähnlich stark (Woelk 2010)',
      'Netzwerk-Meta-Analyse über 100 Studien zu Angstmedikamenten: Silexan wirksam und so gut akzeptiert wie Placebo, mit weniger Nebenwirkungen als Placebo (Müller 2026)',
      'Keine klinisch relevanten Wechselwirkungen über CYP1A2, 2C9, 2C19, 2D6 und 3A4 und keine Abschwächung der Pille; im Fahrtest kein oder ein zu vernachlässigender Einfluss (Fachinformation Lasea)',
      'PET-Studie: Nach mindestens 8 Wochen Silexan war bei 17 gesunden Männern die Bindung am Serotonin-1A-Rezeptor in angstrelevanten Hirnregionen verringert (Baldinger 2014)'
    ],
    risks: [
      'Häufig Aufstoßen, außerdem andere Magen-Darm-Beschwerden und allergische Hautreaktionen; schwere Überempfindlichkeitsreaktionen wurden berichtet (Fachinformation Lasea)',
      'Nicht bei Leberfunktionsstörung, nicht unter 18 Jahren; in Schwangerschaft und Stillzeit nicht empfohlen (Fachinformation Lasea)',
      'Studien über 3 Monate hinaus fehlen; die zugelassene Behandlungsdauer ist auf 3 Monate begrenzt (Fachinformation Lasea)',
      'Die großen Studien und die Meta-Analyse entstanden mit Mitarbeitern des Herstellers Dr. Willmar Schwabe als Koautoren (Kasper 2014, Dold 2023); unabhängige Replikationen sind rar',
      'Der Kräuterausschuss HMPC hielt die Patientenzahlen 2012 für zu klein, um eine Wirkung zu belegen, und führt Lavendelöl nur als traditionelles Arzneimittel (EMA/HMPC)',
      'Schlaf wurde in den Studien nur bei Menschen mit Angst gemessen; die Ergebnisse gelten für Silexan, nicht für Lavendelöl zum Inhalieren oder andere Öle'
    ],
    dosage: 'Lasea ist ein zugelassenes Arzneimittel: laut Fachinformation eine Weichkapsel mit 80 mg Lavendelöl einmal täglich für Erwachsene, Behandlungsdauer höchstens 3 Monate. In der Studie zur generalisierten Angststörung wurden zusätzlich 160 mg täglich geprüft (Kasper 2014). Eine amtliche Höchstmenge für Lavendelöl in Nahrungsergänzungsmitteln wurde bei der Recherche nicht gefunden. Das sind Zulassungs- und Studienangaben, keine Empfehlung.',
    intake: 'Laut Fachinformation unzerkaut mit Wasser und nicht im Liegen einnehmen. Wenn sich die Beschwerden nach einem Monat nicht bessern oder schlimmer werden, ärztlich abklären. Bei Lebererkrankungen, in Schwangerschaft und Stillzeit nicht anwenden.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Ätherisches Öl aus den Blüten des Echten Lavendels (Lavandula angustifolia), durch Wasserdampfdestillation gewonnen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36717399/'
  },
  {
    id: 'l-carnitin',
    name: 'L-Carnitin',
    altNames: 'Levocarnitin, L-Carnitin-L-Tartrat, L-Carnitin-Fumarat, L-Carnitin-Base, Carnitin',
    category: 'Aminosäure',
    tags: ['sport', 'fettverbrennung', 'regeneration', 'energie', 'herz'],
    short: 'Körpereigener Transporter, der Fettsäuren in die Mitochondrien bringt. In Studien gab es etwas weniger Muskelkater nach Belastung und im Mittel gut ein Kilogramm weniger Körpergewicht. Offen ist, was das Darmprodukt TMAO bedeutet, das unter Carnitin deutlich ansteigt.',
    description: 'L-Carnitin ist eine körpereigene Verbindung, die langkettige Fettsäuren in die Mitochondrien schleust; über die Nahrung kommt es vor allem aus rotem Fleisch. Angeboten wird es als Base, als L-Carnitin-L-Tartrat oder als Fumarat. Eine Meta-Analyse über 37 randomisierte Studien mit 2.292 Teilnehmern fand im Mittel 1,21 kg weniger Körpergewicht, eine über 7 Studien weniger Muskelkater bis 96 Stunden nach Belastung. Der Carnitingehalt im Muskel stieg in einer 24-Wochen-Studie zusammen mit Kohlenhydraten um 21 Prozent. Darmbakterien bauen zugeführtes Carnitin über Gamma-Butyrobetain zu TMAO ab; bei älteren Frauen stieg TMAO unter Carnitin um das Zehnfache, Atherosklerose-Marker blieben unverändert.',
    benefits: [
      'Weniger Muskelkater nach Belastung: Meta-Analyse über 7 randomisierte Studien, Vorteil zu allen Messzeitpunkten bis 96 Stunden; die Muskelschadensmarker CK, Myoglobin und LDH lagen nach 24 Stunden niedriger, danach nicht mehr (Yarizadh 2020)',
      'Körpergewicht: 37 randomisierte Studien mit 2.292 Teilnehmern, im Mittel −1,21 kg Körpergewicht und −2,08 kg Fettmasse; Taillenumfang und Körperfettanteil unverändert (Talenezhad 2020)',
      'Mehr Carnitin im Muskel ist möglich: 2 g L-Carnitin-L-Tartrat zweimal täglich mit je 80 g Kohlenhydraten hoben bei 14 Männern nach 24 Wochen den Muskelcarnitingehalt um 21 Prozent, die Arbeitsleistung im Test stieg um 11 Prozent gegenüber dem Ausgangswert (Wall 2011)',
      'Nach Herzinfarkt: Meta-Analyse über 13 kontrollierte Studien mit 3.629 Patienten, Gesamtsterblichkeit −27 Prozent, ventrikuläre Rhythmusstörungen −65 Prozent, Angina −40 Prozent; die Autoren fordern große Studien unter heutiger Therapie (DiNicolantonio 2013)',
      'In den USA als Arzneimittel (Levocarnitin) zugelassen bei primärem Carnitinmangel, bei angeborenen Stoffwechselstörungen mit sekundärem Carnitinmangel und bei Dialysepatienten (FDA-Fachinformation)'
    ],
    risks: [
      'TMAO: Bei 72 Fleischessern und Vegetariern bildeten Darmbakterien aus Carnitin über Gamma-Butyrobetain TMAO, bei Fleischessern mehr als 20-mal so viel; regelmäßige Carnitin-Einnahme regte diesen Weg selbst an (Koeth 2019)',
      'Bei gesunden älteren Frauen stieg TMAO unter 24 Wochen Carnitin um das Zehnfache, Entzündungs- und Atherosklerose-Marker sowie Blutfette blieben unverändert (Samulak 2019); Studien mit harten Endpunkten fehlen',
      'Im Mausversuch beschleunigte Carnitin über die Darmflora die Atherosklerose; beim Menschen sagten hohe Carnitinspiegel Herzereignisse nur bei gleichzeitig hohem TMAO voraus, eine Beobachtung an 2.595 Patienten (Koeth 2013)',
      'Magen-Darm-Beschwerden wie Übelkeit, Krämpfe und Durchfall, Körpergeruch; Krampfanfälle bei Menschen mit und ohne Anfallsleiden beschrieben (FDA-Fachinformation)',
      'Die EFSA prüfte 2011 Angaben zu schnellerer Erholung, Muskelreparatur und Ausdauer; in der EU-Liste zugelassener gesundheitsbezogener Angaben steht L-Carnitin nicht'
    ],
    dosage: 'Keine Empfehlung. In Studien verwendet: 2 g L-Carnitin-L-Tartrat zweimal täglich zusammen mit je 80 g Kohlenhydraten über 24 Wochen (Wall 2011); in der Gewichts-Meta-Analyse lag der größte Effekt bei 2.000 mg pro Tag (Talenezhad 2020). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer ein Anfallsleiden hat, sollte Carnitin ärztlich besprechen, weil die US-Fachinformation Krampfanfälle unter Levocarnitin beschreibt.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Vor allem rotes Fleisch; der Körper bildet Carnitin zudem selbst, mit Gamma-Butyrobetain als letzter Vorstufe',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32359762/'
  },
  {
    id: 'niacin',
    name: 'Niacin (Vitamin B3)',
    altNames: 'Vitamin B3, Nicotinsäure, Nicotinamid, Nicotinsäureamid, Niacinamid, Inosithexanicotinat',
    category: 'Vitamin',
    tags: ['cholesterin', 'herz', 'energie', 'haut', 'nad'],
    short: 'Vitamin B3 in zwei Formen mit sehr verschiedenem Profil: Nicotinsäure senkt Blutfette und löst den typischen Flush aus, für Nicotinamid liegt die Obergrenze rund 90-mal höher. Zusätzlich zu Statinen verhinderte Nicotinsäure in zwei großen Studien keine Herzereignisse; Nicotinamid senkte in einer Phase-3-Studie neue helle Hautkrebse.',
    description: 'Niacin ist der Sammelbegriff für Nicotinsäure und Nicotinamid; beide sind Vorstufen von NAD+, und der Körper bildet Niacin zusätzlich aus Tryptophan. Nicotinsäure war jahrzehntelang ein Blutfettsenker: Im Coronary Drug Project lag die Sterblichkeit 15 Jahre nach Beginn 11 Prozent niedriger als unter Placebo. Zusätzlich zu Statinen brachten AIM-HIGH (3.414 Patienten) und HPS2-THRIVE (25.673 Patienten) keinen Vorteil, HPS2-THRIVE zeigte mehr schwere Nebenwirkungen; die EU setzte 2013 die Zulassung von Nicotinsäure mit Laropiprant aus. Nicotinamid senkte in der ONTRAC-Studie neue helle Hautkrebse um 23 Prozent. Das BfR empfiehlt in Nahrungsergänzungsmitteln höchstens 4 mg Nicotinsäure und 160 mg Nicotinamid pro Tagesdosis.',
    benefits: [
      'Verbessert Blutfettwerte: In AIM-HIGH stieg HDL nach 2 Jahren von 35 auf 42 mg/dl, Triglyzeride sanken von 164 auf 122 mg/dl, LDL von 74 auf 62 mg/dl (retardierte Nicotinsäure als Arzneimittel)',
      'Senkt Lipoprotein(a): Meta-Analyse über 14 placebokontrollierte Studien mit 9.013 Teilnehmern, im Mittel −22,9 Prozent (Sahebkar 2016)',
      'Vor der Statin-Zeit: Im Coronary Drug Project mit 8.341 Männern nach Herzinfarkt weniger erneute nicht tödliche Infarkte; rund 9 Jahre nach Studienende lag die Gesamtsterblichkeit 11 Prozent niedriger als unter Placebo, 52,0 gegenüber 58,2 Prozent (Canner 1986)',
      'Nicotinamid und Hautkrebs: 386 Menschen mit mindestens zwei hellen Hautkrebsen, 500 mg zweimal täglich über 12 Monate, 23 Prozent weniger neue Basalzell- und Plattenepithelkarzinome und weniger aktinische Keratosen; nach dem Absetzen kein Effekt mehr (Chen 2015, ONTRAC)',
      'Von der EU zugelassene Angaben, unter anderem zu Energiestoffwechsel, Nervensystem, psychischer Funktion, Haut und Schleimhäuten sowie zur Verringerung von Müdigkeit (Verordnung (EU) Nr. 432/2012)'
    ],
    risks: [
      'Zusätzlich zu Statinen kein Schutz: AIM-HIGH mit 3.414 Patienten wurde nach 3 Jahren wegen fehlender Wirksamkeit beendet (16,4 gegenüber 16,2 Prozent Ereignisse), HPS2-THRIVE mit 25.673 Patienten blieb ohne Vorteil (13,2 gegenüber 13,7 Prozent)',
      'HPS2-THRIVE: mehr schwere Entgleisungen eines Diabetes (+3,7 Prozentpunkte), mehr neue Diabetesdiagnosen (+1,3), mehr schwere Infektionen (+1,4) und Blutungen (+0,7) sowie mehr schwere Magen-Darm-, Muskel- und Hautprobleme',
      'Leber: Retardierte Nicotinsäure führte in einer randomisierten Studie bei 12 von 23 Patienten zu Leberschäden, die schnell freisetzende Form bei keinem (McKenney 1994)',
      'Flush, also Hitzegefühl und Hautrötung, bei Nicotinsäure; er ist die Grundlage der EU-Obergrenze von 10 mg Nicotinsäure pro Tag (SCF 2002, laut BfR)',
      'Zulassung von Nicotinsäure mit Laropiprant (Tredaptive, Pelzont, Trevaclyn) 2013 EU-weit ausgesetzt, weil der Nutzen die Risiken nicht mehr überwog (EMA)',
      'Beobachtungsdaten: Hohe Blutspiegel der Abbauprodukte 2PY und 4PY gingen mit mehr Herz-Kreislauf-Ereignissen einher (Hazard Ratio 1,64 bis 2,02); in Mäusen förderte 4PY Gefäßentzündung (Ferrell 2024), ursächlich am Menschen nicht belegt',
      'Schwangerschaft: Das BfR empfiehlt bei Produkten mit mehr als 16 mg Nicotinamid pro Tagesdosis einen Hinweis, dass Schwangere sie nicht einnehmen sollten'
    ],
    dosage: 'Keine Empfehlung. Das BfR empfiehlt für Nahrungsergänzungsmittel Höchstmengen von 160 mg Nicotinamid und 4 mg Nicotinsäure pro Tagesverzehrempfehlung. Der frühere Wissenschaftliche Lebensmittelausschuss der EU (SCF 2002) leitete als tolerierbare Obergrenze für Erwachsene 900 mg Nicotinamid und 10 mg Nicotinsäure pro Tag ab. Die Zufuhrempfehlung liegt für Erwachsene bei 11 bis 16 mg Niacin-Äquivalenten pro Tag (D-A-CH, EFSA). In Studien verwendet: 1.500 bis 2.000 mg retardierte Nicotinsäure täglich als Arzneimittel (AIM-HIGH), 500 mg Nicotinamid zweimal täglich (ONTRAC). Das sind Referenzwerte und Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Nicotinsäure in Arzneimittelmengen gehört in ärztliche Hände, weil in den Studien Leber und Blutzucker betroffen waren.',
    synergies: [],
    avoid: [],
    evidence: 'hoch',
    sources: 'Breit in der Ernährung enthalten; Erwachsene in Deutschland nehmen laut Nationaler Verzehrsstudie II im Median 24,7 bis 39,9 mg Niacin-Äquivalente pro Tag auf. Der Körper bildet Niacin zudem aus Tryptophan, 60 mg Tryptophan ergeben 1 mg Niacin-Äquivalent.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/25014686/'
  },
  {
    id: 'mangan',
    name: 'Mangan',
    altNames: 'Mn, Manganese',
    category: 'Mineral',
    tags: ['knochen', 'bindegewebe', 'antioxidans', 'energie'],
    short: 'Essenzielles Spurenelement und Baustein von Enzymen wie der Superoxiddismutase in den Mitochondrien. Die normale Ernährung liefert in Deutschland im Mittel etwa die empfohlene Menge, ein Mangel ist beim Menschen kaum beschrieben. Zu viel Mangan wirkt auf das Nervensystem, deshalb sind die Höchstmengen für Präparate niedrig.',
    description: 'Mangan ist Bestandteil mehrerer Enzyme, darunter Arginase, Pyruvatcarboxylase und die manganabhängige Superoxiddismutase. Es steckt vor allem in Nüssen, Teeblättern, Hülsenfrüchten, Vollkorngetreide und einigen Früchten; eine Tasse Tee enthält 300 bis 1.000 Mikrogramm. Die EFSA nennt als angemessene Zufuhr für Erwachsene 3 mg pro Tag, die mittlere Zufuhr in Deutschland liegt bei 2,7 bis 3,0 mg. Bei sieben jungen Männern führte eine fast manganfreie Kost über 39 Tage zu einer flüchtigen Hautveränderung und gesunkenem Cholesterin. Eine Obergrenze konnte die EFSA 2023 nicht ableiten, sie legte eine sichere Aufnahmemenge von 8 mg pro Tag fest; das BfR empfiehlt in Nahrungsergänzungsmitteln höchstens 0,5 mg pro Tagesdosis.',
    benefits: [
      'Essenziell: Bestandteil von Arginase, Pyruvatcarboxylase und der manganabhängigen Superoxiddismutase (EFSA 2023)',
      'Von der EU zugelassene Angaben: Mangan trägt zu einem normalen Energiestoffwechsel, zur Erhaltung normaler Knochen, zu einer normalen Bindegewebsbildung und zum Schutz der Zellen vor oxidativem Stress bei (Verordnung (EU) Nr. 432/2012)',
      'Knochen: In einer zweijährigen placebokontrollierten Studie mit 59 älteren Frauen nach den Wechseljahren blieb die Knochendichte der Wirbelsäule unter Calcium plus Zink, Mangan und Kupfer stabil (+1,48 Prozent), unter Placebo sank sie um 3,53 Prozent; Mangan wurde dabei nicht allein getestet (Strause 1994)',
      'Mangelversuch: Bei 7 jungen Männern führte eine Kost mit 0,11 mg Mangan pro Tag über 39 Tage bei 5 von ihnen zu einer flüchtigen Hautveränderung (Miliaria crystallina) und zu niedrigerem Cholesterin; den Mindestbedarf schätzten die Autoren auf 0,74 bis 2,11 mg pro Tag (Friedman 1987)',
      'Versorgung in Deutschland: mediane Zufuhr 2,7 bis 3,0 mg pro Tag, bei Vegetariern 3,0 bis 3,3 mg (BfR)'
    ],
    risks: [
      'Nervengift bei Überschuss: Manganismus, ein Parkinson-ähnliches Krankheitsbild, ist vor allem nach Einatmen im Bergbau und beim Schweißen bekannt; als Einzelfall beschrieben ist eine Person mit rund 26 mg Mangan täglich aus etwa 3 Litern Schwarztee über mehr als 10 Jahre (EFSA 2023)',
      'Bei 23 Menschen, die selbst hergestelltes Methcathinon mit Mangan-Rückständen spritzten, entstand eine bleibende Gangstörung mit Manganablagerungen im Gehirn (Stepens 2008); das ist kein Nahrungsweg, zeigt aber die Empfindlichkeit des Nervensystems',
      'Die EFSA konnte 2023 aus Human- und Tierdaten keine Dosis-Wirkungs-Beziehung für die Nervenschäden ableiten und legte statt einer Obergrenze eine sichere Aufnahmemenge von 8 mg pro Tag für Erwachsene fest',
      'Das BfR rät von der Anreicherung normaler Lebensmittel mit Mangan ab und hält in Nahrungsergänzungsmitteln höchstens 0,5 mg pro Tagesdosis für vertretbar; damit bleibt laut BfR kein Spielraum für ein zweites manganhaltiges Präparat',
      'Manganablagerungen im Gehirn sind bei langer künstlicher Ernährung über die Vene und bei Leber- und Gallenwegsschwäche im MRT beschrieben (EFSA 2023)'
    ],
    dosage: 'Keine Empfehlung. Das BfR empfiehlt für Nahrungsergänzungsmittel eine Höchstmenge von 0,5 mg Mangan pro Tagesverzehrempfehlung und rät von der Anreicherung sonstiger Lebensmittel ab. Die EFSA nennt als angemessene Zufuhr für Erwachsene 3 mg pro Tag (2013) und als sichere Gesamtaufnahme 8 mg pro Tag (2023). Das sind amtliche Referenzwerte, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer mehrere Mineralstoffpräparate kombiniert, sollte die Manganmengen zusammenrechnen, weil die BfR-Höchstmenge für ein einziges Produkt gedacht ist.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Nüsse, Teeblätter, Hülsenfrüchte, Vollkorngetreide und einige Früchte wie Ananas, Bananen und Beeren; Milchprodukte, Fleisch, Fisch und Eier enthalten wenig',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38075631/'
  },
  {
    id: 'molybdaen',
    name: 'Molybdän',
    altNames: 'Mo, Molybdat, Molybdenum',
    category: 'Mineral',
    tags: ['stoffwechsel', 'entgiftung'],
    short: 'Spurenelement, das als Molybdän-Cofaktor in wenigen, aber lebenswichtigen Enzymen sitzt, vor allem in der Sulfitoxidase. Ein Mangel ist beim Menschen praktisch nur unter langer künstlicher Ernährung beschrieben, und die normale Kost liefert in Deutschland nach den vorliegenden Daten mehr als die angemessene Zufuhr.',
    description: 'Molybdän wird im Körper in den Molybdän-Cofaktor eingebaut, ohne den unter anderem die Sulfitoxidase nicht arbeitet; sie macht das Sulfit unschädlich, das beim Abbau schwefelhaltiger Aminosäuren entsteht. Wie wichtig das ist, zeigt eine seltene Erbkrankheit, der Molybdän-Cofaktor-Mangel Typ A, bei dem sich Sulfit im Gehirn anreichert; dafür ist seit 2022 das Arzneimittel Fosdenopterin in der EU zugelassen. Aus der Nahrung werden 88 bis 93 Prozent aufgenommen, Überschuss scheidet die Niere rasch aus. Die EFSA nennt als angemessene Zufuhr 65 µg pro Tag, eine kleine deutsche Erhebung fand 89 bis 100 µg. Das BfR empfiehlt in Nahrungsergänzungsmitteln höchstens 80 µg pro Tagesdosis.',
    benefits: [
      'Essenziell über den Molybdän-Cofaktor: Ohne ihn fehlen Enzyme wie die Sulfitoxidase, und giftiges Sulfit reichert sich im Gehirn an (EMA zu Nulibry)',
      'Von der EU zugelassene Angabe: Molybdän trägt zu einer normalen Verstoffwechslung schwefelhaltiger Aminosäuren bei (Verordnung (EU) Nr. 432/2012)',
      'Sehr gute Aufnahme: In Isotopenstudien mit jungen Männern wurden 88 bis 93 Prozent aufgenommen, Überschuss wurde über den Urin ausgeschieden (Turnlund 1995)',
      'Unter langer künstlicher Ernährung über die Vene ist eine Unverträglichkeit von Aminosäuren beschrieben, die sich unter Molybdat zurückbildete (Abumrad 1981)',
      'Bei 4 Männern mit nur 22 µg pro Tag über 102 Tage traten keine Mangelzeichen auf; den Mindestbedarf schätzten die Autoren auf etwa 25 µg pro Tag (Turnlund 1995)'
    ],
    risks: [
      'Ein Nutzen zusätzlichen Molybdäns bei normaler Ernährung ist in keiner kontrollierten Studie untersucht',
      'Tolerierbare Obergrenze 600 µg pro Tag für Erwachsene und 500 µg für 15- bis 17-Jährige (SCF 2000, laut BfR)',
      'Kontrolliert geprüft wurden 22 bis 1.490 µg pro Tag über je 24 Tage, ohne Nebenwirkungen, aber nur bei 4 Männern (Turnlund 1995)',
      'Einzelfallbericht: Ein Mann Ende dreißig entwickelte nach 18 Tagen mit 300 bis 800 µg Molybdän täglich aus einem Präparat eine akute Psychose mit Krampfanfällen (Momcilović 1999); ein Einzelfall belegt keinen ursächlichen Zusammenhang',
      'Beim Molybdän-Cofaktor-Mangel Typ A hilft Molybdän selbst nicht, weil die Vorstufe cPMP fehlt; zugelassen ist dafür das verschreibungspflichtige Fosdenopterin als Infusion (EMA)'
    ],
    dosage: 'Keine Empfehlung. Das BfR empfiehlt für Nahrungsergänzungsmittel eine Höchstmenge von 80 µg Molybdän pro Tagesverzehrempfehlung. Die EFSA nennt als angemessene Zufuhr für Erwachsene 65 µg pro Tag, der frühere Wissenschaftliche Lebensmittelausschuss der EU (SCF 2000) als tolerierbare Obergrenze 600 µg pro Tag. Das sind amtliche Referenzwerte, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Nach den vorliegenden Daten liefert die normale Ernährung in Deutschland mehr als die angemessene Zufuhr.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Über die normale Ernährung; eine kleine deutsche Erhebung von 1996 fand bei gemischter Kost im Mittel 89 µg pro Tag bei Frauen und 100 µg bei Männern (laut BfR)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/7733035/'
  },
  {
    id: 'ochsengalle',
    name: 'Ochsengalle',
    altNames: 'Rindergalle, Ox Bile, Fel tauri, Gallensalze, konjugierte Gallensäuren',
    category: 'Enzym',
    tags: ['verdauung', 'leber', 'darm'],
    short: 'Getrockneter Extrakt aus Rindergalle, ein Gemisch natürlicher konjugierter Gallensäuren, verkauft als Hilfe bei der Fettverdauung, oft nach Entfernung der Gallenblase. Dass zugeführte Gallensäuren die Fettaufnahme steigern können, ist bei einzelnen Kurzdarm-Patienten gezeigt; nach einer Gallenblasen-OP ist es nicht untersucht.',
    description: 'Gallensäuren aus der Leber machen Nahrungsfett im Dünndarm verdaulich. Ochsengalle-Extrakt liefert ein Gemisch natürlicher konjugierter Gallensäuren. Bei Patienten mit Kurzdarmsyndrom, denen Gallensäuren fehlen, stieg in Bilanzstudien mit einzelnen Patienten die Fettaufnahme um rund 40 g pro Tag, teils um den Preis von mehr Durchfall. Nach einer Entfernung der Gallenblase fließt die Galle weiter in den Darm, ein Teil der Operierten bekommt eher Durchfall durch zu viele Gallensäuren im Dickdarm. Studien zu Ochsengalle nach Gallenblasenentfernung gibt es nicht. Als Arzneimittel zugelassen ist in der EU reine Cholsäure (Orphacol) für seltene angeborene Störungen der Gallensäurebildung.',
    benefits: [
      'Kurzdarmsyndrom mit Stoma: Bei einer stark abgemagerten Patientin steigerten Gallensäuren aus Ochsengalle die Fettaufnahme um etwa 40 g pro Tag, auch die Calciumaufnahme stieg; in 4 Monaten nahm sie von 80 auf 98 Pfund zu, ohne Nebenwirkungen (Gruy-Kapral 1999)',
      'Kurzdarmsyndrom mit erhaltenem Dickdarm: Natürliche konjugierte Gallensäuren senkten bei einem Patienten die Fettausscheidung im Stuhl von 119 auf 79 g pro Tag, über 3 Monate normalisierte sich die Oxalatausscheidung im Urin und das Gewicht stieg (Emmett 2003)',
      'Das Prinzip ist als Arzneimittel anerkannt: Cholsäure (Orphacol) ist in der EU seit 2013 bei angeborenen Störungen der Gallensäurebildung zugelassen (EMA)',
      'Die Rolle der Gallensäuren bei der Fettverdauung ist physiologisch gut verstanden'
    ],
    risks: [
      'Keine Studie zu Ochsengalle nach Gallenblasenentfernung oder bei Gesunden, auch keine kontrollierte Studie bei anderen Erkrankungen',
      'Mehr Durchfall: Bei 2 Kurzdarm-Patienten mit erhaltenem Dickdarm verringerten natürliche Gallensäuren den Fettverlust weniger als das synthetische Cholylsarcosin und verstärkten den Durchfall deutlich (Kapral 2004)',
      'Nach Gallenblasenentfernung entsteht Durchfall häufig durch zu viele Gallensäuren im Dickdarm (Huang 2023); in einer Nachbefragung von 3.385 Operierten in China betraf er 14,2 Prozent (Mao 2025). Ob zusätzliche Gallensäuren das verstärken, ist nicht untersucht',
      'Sicherheitsdaten stammen nur aus Einzelfallstudien über wenige Monate bei Kurzdarm-Patienten',
      'Selbst die zugelassene Cholsäure darf nur unter Aufsicht eines Leberspezialisten begonnen werden (EMA)',
      'Gesundheitsbezogene Angaben zur Fettverdauung sind für Ochsengalle in der EU nicht zugelassen (Verordnung (EU) Nr. 432/2012)'
    ],
    dosage: 'Keine Empfehlung. In Studien verwendet: 2 g natürliche konjugierte Gallensäuren aus Ochsengalle pro Mahlzeit bei einer Kurzdarm-Patientin (Gruy-Kapral 1999) und 9 g pro Tag bei einem Kurzdarm-Patienten (Emmett 2003). Das sind Angaben aus Einzelfallstudien, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer nach einer Gallenblasenentfernung Verdauungsbeschwerden hat, sollte die Ursache ärztlich klären lassen, weil Durchfall dort häufig durch zu viele Gallensäuren entsteht.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Getrocknete Galle von Rindern; die Leber bildet Gallensäuren selbst',
    link: 'https://pubmed.ncbi.nlm.nih.gov/9869597/'
  },
  {
    id: 'loewenzahnwurzel',
    name: 'Löwenzahnwurzel',
    altNames: 'Taraxacum officinale, Taraxaci radix, Löwenzahnwurzel mit Kraut, Dandelion Root',
    category: 'Kräuter',
    tags: ['verdauung', 'leber', 'appetit', 'fluessigkeit'],
    short: 'Bitterstoffreiche Wurzel des Löwenzahns, in Europa seit langem bei Völlegefühl, Blähungen, Appetitlosigkeit und zur Durchspülung der Harnwege verwendet. Die EU erkennt Löwenzahnwurzel mit Kraut als traditionelles pflanzliches Arzneimittel an, allein auf Grundlage langer Anwendung; klinische Studien dazu gibt es nicht.',
    description: 'Löwenzahn (Taraxacum officinale) gehört zu den Korbblütlern. Die Wurzel enthält Bitterstoffe aus der Gruppe der Sesquiterpenlactone und je nach Erntezeit 2 Prozent (Frühjahr) bis 40 Prozent (Herbst) Inulin. Der Ausschuss für pflanzliche Arzneimittel der EMA (HMPC) erkennt Löwenzahnwurzel mit Kraut als traditionelles pflanzliches Arzneimittel bei leichten Verdauungsbeschwerden, vorübergehender Appetitlosigkeit und zur Erhöhung der Harnmenge an; in Deutschland sind entsprechende Präparate seit 1976 im Handel. Klinische Studien fand der Ausschuss weder 2009 noch bei der Überprüfung 2019. Am Menschen gibt es zwei kleine Messungen zur Harnmenge: ein Anstieg mit einem Blattextrakt, kein signifikanter Effekt mit Wurzelpulver.',
    benefits: [
      'Traditionelles pflanzliches Arzneimittel nach EU-Monographie (HMPC 2009): bei leichten Verdauungsbeschwerden wie Völlegefühl, Blähungen und träger Verdauung, bei vorübergehender Appetitlosigkeit und zur Erhöhung der Harnmenge bei leichten Harnwegsbeschwerden',
      'Lange dokumentierte Anwendung: Präparate aus Löwenzahnwurzel mit Kraut sind in Deutschland seit 1976 im Handel; ernste Nebenwirkungen sind in der Dokumentation der traditionellen Anwendung in der EU nicht berichtet (HMPC 2009)',
      'Harnmenge: Bei 17 Freiwilligen stieg nach einem frischen Blattextrakt die Häufigkeit des Wasserlassens in den 5 Stunden nach der ersten Gabe und das Verhältnis von Urin zu Trinkmenge nach der zweiten Gabe (Clare 2009, Pilotstudie ohne Placebogruppe)',
      'Bitterstoffe regen nach Einschätzung des HMPC die Verdauungssäfte an; im Tierversuch stieg der Gallenfluss',
      'Enthält Inulin, je nach Erntezeit 2 bis 40 Prozent der Wurzel (HMPC 2009)'
    ],
    risks: [
      'Keine klinischen Studien zur Wurzel mit Kraut: Das HMPC fand 2009 keine und bei der Überprüfung 2019 auch keine neuen; eine Anerkennung als Arzneimittel mit belegter Wirksamkeit war deshalb nicht möglich',
      'Wurzelpulver ohne messbare harntreibende Wirkung: In einer offenen Crossover-Studie mit 14 aktiven jungen Erwachsenen änderten rund 2,1 g Wurzelpulver mit 1 Liter Wasser die Urinmenge über 4 Stunden nicht signifikant (1.268 gegenüber 1.164 g; Gavin 2026)',
      'Gegenanzeigen laut Monographie: Allergie gegen Korbblütler, Verschluss oder Entzündung der Gallenwege, Lebererkrankungen, Gallensteine, aktives Magengeschwür und andere Erkrankungen der Gallenwege',
      'Bei Nierenschwäche, Diabetes oder Herzschwäche soll Löwenzahn wegen eines möglichen Kaliumüberschusses gemieden werden (HMPC)',
      'Magenschmerzen, Übersäuerung und allergische Reaktionen möglich, Häufigkeit unbekannt; für Schwangerschaft, Stillzeit und Kinder unter 12 Jahren fehlen Daten',
      'Untersuchungen zu Erbgutschäden, Fortpflanzung und Krebsrisiko fehlen (HMPC)'
    ],
    dosage: 'Keine Empfehlung. Für registrierte traditionelle pflanzliche Arzneimittel gelten die Angaben der jeweiligen Packungsbeilage. In der Studie zur Harnmenge wurden einmalig rund 2,1 g Wurzelpulver eingenommen (Gavin 2026). Das ist eine Studienangabe, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Bei Gallensteinen, Gallenwegs- und Lebererkrankungen nennt die EU-Monographie Gegenanzeigen, bei Nierenschwäche, Diabetes und Herzschwäche einen Warnhinweis.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Wurzel, oft zusammen mit dem Kraut, des Gemeinen Löwenzahns; als Tee, Extrakt oder Presssaft',
    link: 'https://www.ema.europa.eu/en/medicines/herbal/taraxaci-radix-cum-herba'
  },
  {
    id: 'aktivkohle',
    name: 'Aktivkohle',
    altNames: 'Medizinische Kohle, Carbo medicinalis, Activated charcoal',
    category: 'Mineral',
    tags: ['darm', 'verdauung', 'entgiftung', 'arzneimittel'],
    short: 'Hochporöser Kohlenstoff, der im Darm gelöste Stoffe bindet. Als medizinische Kohle in Deutschland zugelassen gegen akuten Durchfall und zur Giftbindung bei Vergiftungen, dazu eine EU-Gesundheitsangabe gegen Blähungen nach dem Essen. Für die tägliche Einnahme als „Detox“ bei Gesunden fehlen Studien, und die Kohle bindet auch Medikamente.',
    description: 'Aktivkohle ist Kohlenstoff mit einer porösen, sehr großen inneren Oberfläche, an der gelöste Teilchen, Bakterien, Bakteriengifte und andere Giftstoffe haften bleiben. Wie stark sie Wirkstoffe im Darm abfängt, ist am Menschen gut gemessen: In einer Meta-Analyse von 64 kontrollierten Studien an Freiwilligen sank die Aufnahme eines Arzneimittels im Median um 88,4 Prozent, wenn die Kohle innerhalb von 5 Minuten folgte, und noch um 27,4 Prozent bei Gabe bis zu 4 Stunden danach. In der Notfallmedizin ist sie ein Standardmittel bei mittelschweren bis lebensbedrohlichen Vergiftungen, ihr klinischer Nutzen ist aber überwiegend in Studien niedriger Qualität untersucht. Für den „Detox“-Gebrauch bei Gesunden liegen keine kontrollierten Studien vor.',
    benefits: [
      'Bindet Arzneistoffe im Darm: Meta-Analyse über 64 kontrollierte Studien an Freiwilligen, Aufnahme im Median um 88,4 Prozent gesenkt bei Gabe innerhalb von 5 Minuten, um 27,4 Prozent bei Gabe bis zu 4 Stunden nach dem Arzneimittel (Jürgens 2009)',
      'Zugelassenes Arzneimittel: Medizinische Kohle ist in Deutschland zugelassen bei akutem Durchfall und zur Verhinderung der Aufnahme von Giftstoffen bei oralen Vergiftungen, nicht apothekenpflichtig (Fachinformation Kohle-Compretten, Stand April 2025)',
      'EU-Gesundheitsangabe: Aktivkohle trägt zur Verringerung übermäßiger Blähungen nach dem Essen bei, zulässig bei 1 g mindestens 30 Minuten vor und 1 g kurz nach der Mahlzeit (Verordnung 432/2012, gestützt auf EFSA 2011)',
      'Vergiftungen: Systematische Übersicht über 296 Humanstudien; die Studien höherer Qualität betreffen unter anderem Paracetamol, Carbamazepin, Digoxin, Theophyllin, Salicylate und trizyklische Antidepressiva, und viele Studien berichten einen Nutzen auch bei Gabe nach mehr als einer Stunde (Hoegberg 2021)',
      'Gicht: In einer doppelblinden Studie mit 348 Patienten senkte Aktivkohle zusätzlich zu Febuxostat die Harnsäure nicht stärker, verringerte aber über 24 Wochen die Zahl der Gichtanfälle und das LDL-Cholesterin (Guo 2026)'
    ],
    risks: [
      'Bindet auch Medikamente: Laut Fachinformation soll medizinische Kohle nicht gleichzeitig mit anderen Arzneimitteln eingenommen werden, weil deren Wirkung vermindert sein kann; das gilt auch für Dauermedikamente',
      'Unwirksam oder unzureichend wirksam bei Säuren und Laugen, Alkoholen, organischen Lösungsmitteln, anorganischen Salzen und Metallen, etwa Lithium, Thallium, Cyanid, Eisensalzen, Methanol, Ethanol und Ethylenglykol (Zellner 2019, Fachinformation)',
      'Bei Bewusstseinsstörung und nicht gesicherten Atemwegen droht das Einatmen der Kohle; das ist eine wichtige Gegenanzeige in der Notfallbehandlung (Zellner 2019)',
      'Nach sehr hohen Dosen bei Vergiftungen in Einzelfällen Verstopfung und Darmverschluss; der Stuhl färbt sich schwarz (Fachinformation)',
      'Gegenanzeige fieberhafter Durchfall; bleibt die Behandlung nach etwa 3 Tagen erfolglos, sind andere Maßnahmen nötig (Fachinformation)',
      'Für eine regelmäßige Einnahme als „Detox“ bei Gesunden gibt es keine kontrollierten Studien und keine Langzeitdaten'
    ],
    dosage: 'Als Arzneimittel bei akutem Durchfall zugelassen: Laut Fachinformation (Kohle-Compretten, 250 mg medizinische Kohle je Tablette) nehmen Erwachsene und Jugendliche ab 14 Jahren 3- bis 5-mal täglich 2 bis 4 Tabletten, Kinder die halbe Menge. Die EU-Gesundheitsangabe zu Blähungen gilt für 1 g mindestens 30 Minuten vor und 1 g kurz nach der Mahlzeit. Bei Vergiftungen entscheiden Giftnotruf oder Notarzt über Gabe und Menge. Für einen „Detox“-Gebrauch gibt es keine Empfehlung.',
    intake: 'Nicht zusammen mit Medikamenten einnehmen; wer regelmäßig Arzneimittel nimmt, klärt den zeitlichen Abstand in der Apotheke oder ärztlich. Bei Verdacht auf eine Vergiftung zuerst den Giftnotruf anrufen.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Durch Aktivierung hochporös gemachter Kohlenstoff; als Arzneimittel „medizinische Kohle“, als Nahrungsergänzungsmittel „Aktivkohle“',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31219028/'
  },
  {
    id: 'pentadecansaeure',
    name: 'Pentadecansäure (C15:0)',
    altNames: 'C15:0, C15, Pentadecanoic acid, Fatty15',
    category: 'Fettsäure',
    tags: ['longevity', 'herz', 'stoffwechsel', 'leber', 'cholesterin'],
    short: 'Gesättigte Fettsäure mit ungerader Kettenlänge, vor allem aus Milchfett. Wer mehr davon im Blut hat, erkrankt in Beobachtungsstudien seltener an Typ-2-Diabetes und Herz-Kreislauf-Leiden. Als Supplement gibt es zwei kleine randomisierte Studien über 12 Wochen; eine genetische Analyse spricht gegen einen ursächlichen Effekt auf den Blutdruck.',
    description: 'Pentadecansäure (C15:0) ist eine gesättigte Fettsäure mit 15 Kohlenstoffatomen, die in Spuren in Milchfett sowie in einigen Fischen und Pflanzen vorkommt. Im Blut gilt sie als Marker für den Verzehr von Milchfett. In Meta-Analysen von Kohortenstudien gingen höhere Spiegel mit einem geringeren Risiko für Typ-2-Diabetes und Herz-Kreislauf-Erkrankungen einher. Die Forscherin Stephanie Venn-Watson, Mitgründerin des Herstellers Seraphina Therapeutics, fand in Zellversuchen und bei Mäusen und Kaninchen entzündungshemmende und stoffwechselgünstige Effekte und schlägt vor, C15:0 als essenzielle Fettsäure einzustufen. Am Menschen gibt es bisher zwei randomisierte Studien mit 30 und 88 Teilnehmenden über je 12 Wochen.',
    benefits: [
      'Typ-2-Diabetes: Meta-Analyse prospektiver Beobachtungsstudien, höhere C15:0-Werte in Plasmaphospholipiden und roten Blutkörperchen gingen mit einem geringeren Risiko einher (relatives Risiko 0,68 je 0,1 Prozentpunkte höherem Anteil an den Fettsäuren), moderate Evidenzsicherheit (Schaefer 2026)',
      'Herz-Kreislauf: Meta-Analyse über 18 Beobachtungsstudien, höchstes gegen niedrigstes Drittel relatives Risiko 0,88 für Herz-Kreislauf-Erkrankungen; mit der Gesamtsterblichkeit kein Zusammenhang (Trieu 2021)',
      'Erste randomisierte Studie: 30 junge Erwachsene mit Übergewicht, 12 Wochen, der Blutspiegel stieg gegenüber Placebo um 1,88 µg/ml; wer über 5 µg/ml kam, hatte stärker gesunkene Leberwerte (ALT −29 U/l) und mehr Hämoglobin als die übrigen Teilnehmenden der Behandlungsgruppe (Robinson 2024)',
      'Fettleber: In der TANGO-Studie mit 88 Frauen mit Fettleber senkte C15:0 zusätzlich zu einer mediterran angelegten Kost das LDL-Cholesterin stärker als die Kost allein und erhöhte den Anteil von Bifidobacterium adolescentis im Darm (Chooi 2024)',
      'Zellversuche: dosisabhängige Aktivitäten in 10 von 12 menschlichen Zellsystemen, 24 davon geteilt mit Rapamycin; C15:0 aktiviert AMPK und hemmt mTOR (Venn-Watson 2023)'
    ],
    risks: [
      'Beobachtung ist keine Ursache: Eine Mendelsche Randomisierung fand keinen Hinweis auf einen ursächlichen Effekt auf Blutdruck, Ruhepuls oder Bluthochdruck, und mit neuen Herz-Kreislauf-Erkrankungen hing der C15:0-Spiegel in zwei Kohorten nicht zusammen (Steffen 2026)',
      'C15:0 im Blut spiegelt vor allem den Verzehr von Milchfett wider; die Kohortendaten können nicht trennen, ob die Fettsäure selbst oder andere Bestandteile von Milchprodukten hinter den Zusammenhängen stehen (Trieu 2021)',
      'In der Robinson-Studie war der Blutspiegel der primäre Endpunkt; die günstigeren Leberwerte zeigten sich im Vergleich innerhalb der Behandlungsgruppe, nicht gegenüber Placebo',
      'Sicherheitsdaten am Menschen nur aus zwei Studien über je 12 Wochen; bei Robinson 2024 traten keine bedeutsamen unerwünschten Ereignisse auf',
      'Interessenkonflikte: Die Zell- und Tierstudien stammen von Mitgründern des Herstellers, der die Lizenzrechte zur Vermarktung hält; die erste randomisierte Studie wurde von ihm mit Prüfpräparat und Placebo unterstützt',
      'In der Unionsliste der zugelassenen neuartigen Lebensmittel der EU steht Pentadecansäure nicht (konsolidierte Fassung vom 10.08.2026)',
      'Zu Schwangerschaft, Stillzeit und Kindern liegen keine Daten vor'
    ],
    dosage: 'Keine Empfehlung, eine amtliche Höchstmenge gibt es nicht. In Studien verwendet: 200 mg täglich über 12 Wochen (Robinson 2024). Das ist eine Studienangabe, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer wegen Leberwerten oder Blutfetten über C15:0 nachdenkt, bespricht das besser ärztlich, weil die Daten aus zwei kleinen Studien stammen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Milchfett und Milchprodukte, in Spuren auch einige Fische und Pflanzen',
    link: 'https://pubmed.ncbi.nlm.nih.gov/39069269/'
  },
  {
    id: 'luteolin',
    name: 'Luteolin',
    altNames: 'Luteolol, Flavon aus Kamille, PEA-LUT (Kombination mit Palmitoylethanolamid)',
    category: 'Antioxidant',
    tags: ['gehirn', 'entzuendung', 'anti-oxidant', 'nerven'],
    short: 'Pflanzliches Flavon, unter anderem aus Kamille, das in Zell- und Tierversuchen Entzündungen im Nervensystem dämpft. Am Menschen gibt es offene Pilotstudien bei Kindern mit Autismus und randomisierte Studien zu Long COVID mit der Kombination aus Palmitoylethanolamid und Luteolin. Eine randomisierte Studie mit Luteolin allein haben wir nicht gefunden.',
    description: 'Luteolin ist ein Flavonoid aus der Gruppe der Flavone, chemisch verwandt mit Apigenin. In Zell- und Tierversuchen wirkt es antioxidativ und entzündungshemmend, bremst Mastzellen und schützt Nervenzellen; in einem Mausmodell für Autismus verbesserte es die kognitive Leistung. Am Menschen stammen die meisten Daten aus einer griechischen Pilotstudie mit 50 Kindern mit Autismus, die ein Kombinationspräparat aus Luteolin, Quercetin und Rutin ohne Kontrollgruppe erhielten, sowie aus randomisierten Studien zu Long COVID mit PEA-LUT, einer Verbindung aus Palmitoylethanolamid und Luteolin. Welcher Anteil der Effekte auf Luteolin selbst entfällt, lässt sich aus diesen Studien nicht ablesen.',
    benefits: [
      'Autismus, offene Pilotstudie: 50 Kinder von 4 bis 10 Jahren, 26 Wochen, Kombination aus Luteolin, Quercetin und Rutin; bei den 40 Kindern, die die Studie beendeten, verbesserten sich die Alltagsfähigkeiten um 7 bis 8,4 Monate Entwicklungsalter und auffälliges Verhalten ging um 26,6 bis 34,8 Prozent zurück (Taliou 2013)',
      'In derselben Gruppe sanken die erhöhten Blutwerte der Entzündungsbotenstoffe IL-6 und TNF, am deutlichsten bei den Kindern, deren Verhalten sich am stärksten verbesserte (Tsilioni 2015)',
      'Long COVID, Riechstörung: randomisierte Studie mit 202 Patienten, nach 90 Tagen erholte sich der Geruchssinn deutlich bei 89,2 Prozent unter Riechtraining plus PEA-LUT gegenüber 36,8 Prozent unter Riechtraining plus Placebo (Di Stadio 2023)',
      'Meta-Analyse über 5 Studien mit 441 Patienten: PEA-LUT zusätzlich zum Riechtraining verbesserte die Erholung des Geruchssinns nach COVID gegenüber der üblichen Behandlung (Capra 2023)',
      'Long COVID, Erschöpfung und Denkprobleme: randomisierte Studie mit 39 Patienten, unter PEA-LUT über 8 Wochen stiegen ein Messwert der hemmenden GABA-B-Aktivität und die Plastizität der Hirnrinde, unter Placebo nicht (Versace 2023)'
    ],
    risks: [
      'Eine systematische Übersicht fand zu Flavonoiden bei Autismus keine randomisierte placebokontrollierte Studie, nur offene Studien und Fallberichte (Savino 2023)',
      'Die Autismus-Studie prüfte eine Kombination mit Quercetin und Rutin ohne Kontrollgruppe; die Long-COVID-Studien prüften Luteolin zusammen mit Palmitoylethanolamid, der Beitrag von Luteolin lässt sich nicht trennen',
      'Vorübergehend mehr Reizbarkeit über 1 bis 8 Wochen bei 27 von 50 Kindern in der Autismus-Studie (Taliou 2013)',
      'Zu einer viel zitierten Arbeit mit Autismus-Mausmodell und Fallbericht zu PEA-LUT veröffentlichte die Fachzeitschrift 2024 einen Hinweis auf Bedenken (Expression of Concern)',
      'Langzeitdaten zur Sicherheit von isoliertem Luteolin fehlen, ebenso Daten zu Schwangerschaft und Stillzeit',
      'In der Unionsliste der zugelassenen neuartigen Lebensmittel der EU steht Luteolin als Einzelstoff nicht (konsolidierte Fassung vom 10.08.2026)'
    ],
    dosage: 'Keine Empfehlung, eine amtliche Höchstmenge gibt es nicht. In Studien verwendet: Kapseln mit 100 mg Luteolin, 70 mg Quercetin und 30 mg Rutin, bei Kindern nach Körpergewicht bemessen, über 26 Wochen (Taliou 2013); 700 mg Palmitoylethanolamid mit 70 mg Luteolin zweimal täglich über 8 Wochen (Versace 2023). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Bei Kindern mit Autismus gehört jede Ergänzung in ärztliche Begleitung, weil kontrollierte Studien fehlen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Kamille und weitere Pflanzen; als Reinstoff oder kombiniert mit Palmitoylethanolamid angeboten',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23688534/'
  },
  {
    id: 'dihydromyricetin',
    name: 'Dihydromyricetin (DHM)',
    altNames: 'DHM, Ampelopsin, Hovenia dulcis, Japanischer Rosinenbaum, Ampelopsis grossedentata',
    category: 'Antioxidant',
    tags: ['leber', 'entgiftung', 'gaba', 'blutzucker'],
    short: 'Flavonoid aus dem Japanischen Rosinenbaum (Hovenia dulcis) und aus Ampelopsis grossedentata, beworben gegen den Kater. Bei Ratten hob DHM über den GABA-A-Rezeptor Alkoholwirkungen auf. Am Menschen gibt es zwei kleine Studien bei Fettleber mit günstigen Leberwerten; zum Kater wurden bisher nur Hovenia-Extrakte geprüft, nicht DHM allein.',
    description: 'Dihydromyricetin, auch Ampelopsin genannt, ist ein Flavonoid und Hauptwirkstoff von Ampelopsis grossedentata, einer Pflanze, die in China seit Jahrhunderten als Heil- und Nahrungspflanze dient; auch die Früchte des Japanischen Rosinenbaums (Hovenia dulcis) enthalten es. Bekannt wurde DHM durch eine Rattenstudie von 2012: Dort hob es akute Alkoholwirkungen und Entzugszeichen auf, senkte den freiwilligen Alkoholkonsum und setzte an der Benzodiazepin-Bindungsstelle des GABA-A-Rezeptors an. Am Menschen ist DHM in zwei randomisierten Studien bei Fettleber geprüft, mit sinkenden Leberwerten. Für den Kater stammen die klinischen Daten aus zwei kleinen Studien mit Hovenia-Extrakten, nicht mit isoliertem DHM.',
    benefits: [
      'Rattenstudie: DHM hob akute Alkoholwirkungen und Entzugszeichen wie Angst und Krampfneigung auf und senkte den freiwilligen Alkoholkonsum; Angriffspunkt ist die Benzodiazepin-Bindungsstelle am GABA-A-Rezeptor (Shen 2012)',
      'Fettleber: doppelblinde Studie mit 60 Erwachsenen über 3 Monate; ALT, AST, GGT, Blutzucker, LDL-Cholesterin, ApoB und Insulinresistenz sanken gegenüber Placebo, TNF-alpha ging zurück (Chen 2015)',
      'Fettleber (MASLD): doppelblinde Studie mit 55 Patienten über 12 Monate mit einem Kombinationspräparat aus DHM, Vitamin C und E und Cholin; ALT und GGT normalisierten sich bei 35 gegenüber 5 Prozent unter Placebo (Michailidou 2026)',
      'Kater: In einer doppelblinden Crossover-Studie mit 30 Teilnehmenden lag die Blutalkoholkonzentration nach Getränken mit Hovenia-Fruchtextrakt nach 0,5 und 6 Stunden niedriger als unter Placebo (Paik 2024)',
      'Anwenderdaten: In einer Beobachtungsstudie mit 90 Erwachsenen und 2.958 Morgenbefragungen bewerteten Nutzer eines Kombinationsprodukts mit DHM und L-Cystein Energie, Klarheit, Wohlbefinden und Schlaf nach Alkoholabenden etwas besser als nach Alkohol allein, mit kleinen Effekten (Song 2026)'
    ],
    risks: [
      'Isoliertes DHM wurde am Menschen gegen den Kater nicht geprüft; die beiden klinischen Studien zu Alkohol nutzten Hovenia-Extrakte (Skinner 2026)',
      'Befunde zu Alkoholabbau und Verhalten sind schon in Tierversuchen uneinheitlich (Skinner 2026)',
      'Die EFSA konnte 2020 die Sicherheit eines Heißwasserextrakts aus Hovenia-Früchten und -Fruchtstielen als neuartiges Lebensmittel für Nahrungsergänzungsmittel nicht feststellen',
      'Weder DHM noch ein Hovenia-Extrakt steht in der Unionsliste der zugelassenen neuartigen Lebensmittel der EU (konsolidierte Fassung vom 10.08.2026)',
      'Die Beobachtungsstudie zu Anwendern hatte keine Placebogruppe, die Teilnehmenden entschieden selbst, wann sie das Produkt nahmen, und es enthielt weitere Wirkstoffe (Song 2026)',
      'Sicherheitsdaten am Menschen reichen über 3 bis 12 Monate in Studien mit 55 und 60 Teilnehmenden; zu Schwangerschaft, Stillzeit und Kindern liegen keine Daten vor'
    ],
    dosage: 'Keine Empfehlung, eine amtliche Höchstmenge gibt es nicht. In Studien verwendet: zweimal täglich 300 mg DHM über 3 Monate (Chen 2015), 300 mg DHM täglich in einem Kombinationspräparat über 12 Monate (Michailidou 2026). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Ein Schutz vor den Folgen von Alkohol ist am Menschen nicht belegt; bei Lebererkrankungen gehört die Entscheidung in ärztliche Hände.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Ampelopsis grossedentata, Früchte und Fruchtstiele des Japanischen Rosinenbaums (Hovenia dulcis)',
    link: 'https://pubmed.ncbi.nlm.nih.gov/42514290/'
  },
  {
    id: 'hydroxytyrosol',
    name: 'Hydroxytyrosol und Olivenpolyphenole',
    altNames: 'HT, Olivenpolyphenole, Oleuropein, Olivenblattextrakt, Olea europaea',
    category: 'Antioxidant',
    tags: ['herz', 'cholesterin', 'anti-oxidant', 'blutdruck', 'entzuendung'],
    short: 'Polyphenol aus Oliven und Olivenöl; Oleuropein aus Olivenblättern liefert ebenfalls Hydroxytyrosol. Für Olivenöl mit mindestens 5 mg Hydroxytyrosol und Derivaten je 20 g gibt es eine EU-Gesundheitsangabe zum Schutz der Blutfette vor oxidativem Stress. Für Olivenblattextrakt finden Meta-Analysen günstige Effekte auf Blutfette und Blutdruck, eine placebokontrollierte Einzelstudie fand keine.',
    description: 'Hydroxytyrosol ist ein Polyphenol aus der Olive. Es kommt frei und gebunden vor, etwa als Oleuropein, das besonders in Olivenblättern steckt; aus beiden Formen wird Hydroxytyrosol aufgenommen. Die EFSA bewertete 2011 den Zusammenhang zwischen Olivenölpolyphenolen und dem Schutz der LDL-Teilchen vor oxidativen Schäden; die daraus abgeleitete EU-Gesundheitsangabe gilt nur für Olivenöl. In der EUROLIVE-Studie mit 200 Männern sank oxidiertes LDL mit steigendem Polyphenolgehalt des Öls. Für Kapseln mit Hydroxytyrosol oder Olivenblattextrakt gibt es eigene randomisierte Studien und Meta-Analysen mit überwiegend günstigen, teils uneinheitlichen Ergebnissen.',
    benefits: [
      'EU-Gesundheitsangabe: Olivenölpolyphenole tragen dazu bei, die Blutfette vor oxidativem Stress zu schützen; zulässig nur für Olivenöl mit mindestens 5 mg Hydroxytyrosol und Derivaten je 20 g, bei täglich 20 g Olivenöl (Verordnung 432/2012, gestützt auf EFSA 2011)',
      'EUROLIVE: randomisierte Crossover-Studie mit 200 gesunden Männern in 5 Ländern, je 3 Wochen 25 ml Olivenöl mit niedrigem, mittlerem oder hohem Polyphenolgehalt; oxidiertes LDL sank und HDL stieg mit steigendem Polyphenolgehalt (Covas 2006)',
      'Supplement: 15 mg Hydroxytyrosol täglich über 16 Wochen bei 49 Menschen mit Übergewicht und Prädiabetes senkten oxidiertes LDL, Proteincarbonyle, 8-OHdG und IL-6 gegenüber Placebo; die Blutfette änderten sich nicht (Moratilla-Rivera 2025)',
      'Meta-Analyse über 14 Interventionsstudien mit 594 Teilnehmenden zu Oleuropein, Hydroxytyrosol und Tyrosol: Gesamtcholesterin, Triglyzeride und Insulin leicht gesenkt (Frumuzachi 2025)',
      'Olivenblatt: Meta-Analyse über 30 randomisierte Studien mit 1.726 Teilnehmenden zu Olivenblatt und Oliventrester; Olivenblatt senkte Gesamtcholesterin, Triglyzeride, LDL, ApoB, oxidiertes LDL, TNF-alpha, Blutdruck und Körpergewicht, Evidenzsicherheit sehr niedrig bis hoch (Mansouri 2026)',
      'Sicherheit: Die EFSA hielt synthetisches Hydroxytyrosol 2017 in den beantragten Mengen für sicher, gestützt auf einen NOAEL von 50 mg je kg Körpergewicht und Tag aus einer subchronischen Toxizitätsstudie (EFSA 2017)'
    ],
    risks: [
      'Die EU-Gesundheitsangabe gilt nur für Olivenöl mit dem genannten Polyphenolgehalt, nicht für Kapseln mit Hydroxytyrosol oder Olivenblattextrakt',
      'In einer placebokontrollierten Studie mit 77 übergewichtigen Erwachsenen mit leicht erhöhtem Cholesterin änderten 500 mg Olivenblattextrakt über 8 Wochen weder Blutfette noch oxidiertes LDL, Blutdruck, Blutzucker oder Insulin (Stevens 2021)',
      'Synthetisches Hydroxytyrosol ist als neuartiges Lebensmittel nur als Zusatz zu Fisch- und Pflanzenölen (außer Olivenöl) und Streichfetten zugelassen, mit dem Pflichthinweis, dass Kinder unter 3 Jahren, Schwangere und Stillende es nicht verzehren sollen (Unionsliste der neuartigen Lebensmittel)',
      'Die Meta-Analysen bündeln unterschiedliche Extrakte, Mengen und Gruppen; die Evidenzsicherheit reicht bis sehr niedrig (Mansouri 2026)',
      'Die hier ausgewerteten Supplementstudien dauerten 8 bis 16 Wochen; Langzeitdaten zu Kapseln fehlen',
      'Weil Olivenblattextrakt in Meta-Analysen den Blutdruck senkte, gehört die Einnahme bei blutdrucksenkenden Medikamenten in ärztliche Abstimmung'
    ],
    dosage: 'Keine Empfehlung, eine amtliche Höchstmenge für Nahrungsergänzungsmittel gibt es nicht. Die EU-Gesundheitsangabe setzt täglich 20 g Olivenöl mit mindestens 5 mg Hydroxytyrosol und Derivaten voraus. In Studien verwendet: 15 mg Hydroxytyrosol täglich über 16 Wochen (Moratilla-Rivera 2025), 500 mg Olivenblattextrakt täglich über 8 Wochen (Stevens 2021). Das sind Studienangaben, keine Verzehrempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Die einzige zugelassene Gesundheitsangabe bezieht sich auf polyphenolreiches Olivenöl, nicht auf Kapseln.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Oliven, natives Olivenöl, Olivenblätter; Hydroxytyrosol wird auch synthetisch hergestellt',
    link: 'https://pubmed.ncbi.nlm.nih.gov/16954359/'
  },
  {
    id: 'uridin',
    name: 'Uridin (Uridinmonophosphat)',
    altNames: 'Uridine, UMP, Uridin-5′-monophosphat, Uridinmonophosphat-Dinatriumsalz',
    category: 'Stress & Geist',
    tags: ['gehirn', 'gedaechtnis', 'nootropic', 'stimmung'],
    short: 'Nukleosid, aus dem der Körper RNA und Bausteine für Zellmembranen bildet. Am Menschen nur als Teil der Mischung Fortasyn Connect (Souvenaid) bei Alzheimer-Krankheit geprüft, mit gemischten Ergebnissen; für Uridin allein und für Gesunde gibt es kaum Daten.',
    description: 'Uridin wird über UTP zu CTP, das zusammen mit Cholin und Fettsäuren wie DHA zu Phosphatidylcholin verbaut wird, dem Hauptbestandteil von Zellmembranen. In Wüstenrennmäusen stieg das Phosphatidylcholin im Gehirn mit Uridinmonophosphat, Cholin und DHA nach vier Wochen um 45 Prozent, die Synapsenproteine Synapsin-1 und PSD-95 um 41 und 38 Prozent (Wurtman 2006). Am Menschen wurde nur die Mischung Fortasyn Connect geprüft (Uridinmonophosphat, Cholin, Phospholipide, EPA, DHA, Vitamine E, C, B12, B6, Folsäure, Selen): Gedächtnisvorteil bei leichter Alzheimer-Krankheit nach 12 und 24 Wochen (Scheltens 2010, 2012), kein Effekt bei mittelschwerer Erkrankung unter Medikamenten (Shah 2013), verfehlter Hauptendpunkt nach 24 Monaten bei früher Erkrankung und günstigere Werte nach 36 Monaten in einer kleineren Restgruppe (Soininen 2017, 2021). Die Cochrane-Auswertung sieht wahrscheinlich kaum einen Unterschied bei den geistigen Leistungen (Burckhardt 2020).',
    benefits: [
      'Im Tier: Uridinmonophosphat mit Cholin und DHA erhöhte nach 4 Wochen Membranbausteine im Gehirn und die Synapsenproteine Synapsin-1 um 41 und PSD-95 um 38 Prozent (Wurtman 2006)',
      'Leichte Alzheimer-Krankheit ohne Medikamente: besserer verzögerter Wortabruf nach 12 Wochen (RCT, 225 Patienten, Scheltens 2010) und höherer Gedächtnis-Score nach 24 Wochen, Cohen d 0,21 (RCT, Scheltens 2012) – jeweils als Teil der Mischung Fortasyn Connect',
      'Frühe Alzheimer-Krankheit: nach 36 Monaten 60 Prozent weniger Abbau im Testwert und 45 Prozent beim CDR-SB, ausgewertet bei 81 Teilnehmenden (LipiDiDiet, Soininen 2021)',
      'Uridin allein: weniger depressive Symptome bei 7 Jugendlichen mit bipolarer Depression nach 6 Wochen, ohne Kontrollgruppe (Kondo 2011)'
    ],
    risks: [
      'Alle kontrollierten Humanstudien prüften eine Mischung aus elf Nährstoffen; der Anteil von Uridin am Effekt ist unbekannt',
      'Kein Effekt bei mittelschwerer Alzheimer-Krankheit unter Medikamenten (RCT, 527 Patienten, Shah 2013); Hauptendpunkt nach 24 Monaten bei früher Alzheimer-Krankheit verfehlt (p = 0,166, Soininen 2017)',
      'Cochrane 2020: wahrscheinlich kaum oder kein Unterschied bei geistigen Leistungen; Demenz-Neuerkrankungen nach 24 Monaten RR 1,09 (95 % KI 0,82 bis 1,43)',
      'Keine Studien an Gesunden zu Gedächtnis, Konzentration oder Stimmung',
      'DTU Fødevareinstituttet 2020: Gesundheitsrisiko bei 300 mg Uridin pro Tag aus Nahrungsergänzung nicht auszuschließen, weil Sicherheitsstudien an Tieren und Gesunden fehlen',
      'Keine amtliche Höchstmenge und keine zugelassene gesundheitsbezogene Angabe'
    ],
    dosage: 'Keine Verzehrempfehlung. In den Souvenaid-Studien enthielt das tägliche 125-ml-Getränk 625 mg Uridinmonophosphat (DTU 2020); die Studien liefen 12 Wochen bis 36 Monate. Eine amtliche Höchstmenge für Nahrungsergänzungsmittel gibt es nicht; die dänische Bewertung konnte ein Risiko bei 300 mg pro Tag nicht ausschließen. In Säuglingsnahrung ist Uridin-5′-monophosphat bis 1,75 mg je 100 kcal zugelassen (Delegierte VO (EU) 2016/127). Das sind Studien- und Rechtsangaben, keine Empfehlung.',
    intake: 'Keine Einnahmeempfehlung. Gedächtnisstörungen, Depression oder Nervenbeschwerden gehören ärztlich abgeklärt; bei psychischen Erkrankungen, Psychopharmaka, Schwangerschaft und Stillzeit vorher ärztlich besprechen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Vom Körper selbst gebildet; in Lebensmitteln vor allem als Baustein von RNA, in Muttermilch 2,2 mg je kg (DTU 2020); als Nahrungsergänzung meist Uridin-5′-monophosphat-Dinatriumsalz',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33320335/'
  },
  {
    id: 'kava',
    name: 'Kava-Kava',
    altNames: 'Piper methysticum, Rauschpfeffer, Kawa, Kava, Kavalactone, Kavain',
    category: 'Kräuter',
    tags: ['angst', 'stress', 'entspannung', 'arzneimittel'],
    short: 'Wurzel eines Pfefferstrauchs aus dem Südpazifik, dort seit langem als entspannendes Getränk verbreitet. Eine Cochrane-Übersicht fand in 11 Studien weniger Angst als unter Placebo, die größte und längste Studie bei generalisierter Angststörung aber keinen Vorteil. In Deutschland verschreibungspflichtig; die EMA sieht wegen Leberschäden ein ungünstiges Nutzen-Risiko-Verhältnis.',
    description: 'Kava ist der Wurzelstock von Piper methysticum, einem Pfeffergewächs aus dem Südpazifik, wo das Wurzelgetränk eine zentrale kulturelle Rolle hat. Als wirksam gelten die Kavalactone, darunter Kavain. Die Cochrane-Übersicht von 2003 wertete 11 doppelblinde Studien mit 645 Teilnehmenden aus und fand auf der Hamilton-Angstskala gepoolt 5,0 Punkte weniger als unter Placebo. Eine Studie mit 75 Menschen mit generalisierter Angststörung bestätigte das 2013, die größere 16-Wochen-Studie mit 171 Menschen fand 2020 keinen Vorteil. Nach Berichten über Leberschäden, darunter Lebertransplantationen und Todesfälle, wurden Kava-Arzneimittel in mehreren EU-Ländern vom Markt genommen; die EMA lehnte 2017 eine EU-Monografie ab.',
    benefits: [
      'Cochrane-Übersicht: 11 doppelblinde, placebokontrollierte Studien mit 645 Teilnehmenden; in 6 Studien mit 345 Teilnehmenden sank die Hamilton-Angstskala um 5,0 Punkte mehr als unter Placebo (Pittler und Ernst 2003)',
      'Generalisierte Angststörung: in einer 6-wöchigen doppelblinden Studie mit 75 Teilnehmenden weniger Angst als unter Placebo (d = 0,62), bei mittelschwerer bis schwerer Störung stärker (d = 0,82); 26 Prozent Remission gegenüber 6 Prozent (Sarris 2013)',
      'In der Studie von 2013 keine Unterschiede bei den Leberwerten und außer Kopfschmerzen keine häufigeren Nebenwirkungen als unter Placebo',
      'Messbare Wirkung im Gehirn: Nach 8 Wochen sank das GABA im vorderen Gyrus cinguli bei 20 Menschen mit Kava gegenüber 17 mit Placebo (Savage 2023)',
      'Lange Tradition: im Südpazifik seit Generationen als Getränk mit sozialer und kultureller Bedeutung verbreitet (Economidis 2025)'
    ],
    risks: [
      'Leber: Die EMA verweist 2017 auf spontan gemeldete Leberschäden einschließlich Leberversagen mit Transplantationen und Todesfällen und auf Hinweise auf krebserregendes Potenzial im Tierversuch; das Nutzen-Risiko-Verhältnis gilt als ungünstig',
      'Auch traditionelle wässrige Zubereitungen wurden mit Leberschäden in Verbindung gebracht; als mögliche Ursache wird schlechte Rohware diskutiert, etwa Schimmelpilzgifte (Teschke 2012)',
      'In der 16-Wochen-Studie mit 171 Menschen kein Vorteil gegenüber Placebo, dafür häufiger auffällige Leberwerte, Zittern und schlechteres Gedächtnis; niemand erfüllte die Kriterien eines pflanzlich verursachten Leberschadens (Sarris 2020)',
      'Eine Meta-Übersicht über Pflanzenpräparate in der Psychiatrie kommt zu dem Schluss, dass Kava bei diagnostizierten Angststörungen nicht wirksam ist (Sarris 2021)',
      'Sicherheitsdaten aus Studien reichen nur über 1 bis 24 Wochen; Langzeitdaten fehlen',
      'In Deutschland verschreibungspflichtig (Anlage 1 der Arzneimittelverschreibungsverordnung); im Novel-Food-Katalog der EU gibt es keinen Eintrag zu Piper methysticum, eine Freigabe als Lebensmittel liegt damit nicht vor (Abfrage 07.10.2026)'
    ],
    dosage: 'Keine Empfehlung. Kava-Wurzelstock, seine Zubereitungen und Kavain sind in Deutschland verschreibungspflichtig (Anlage 1 der Arzneimittelverschreibungsverordnung), daher greift § 3a Heilmittelwerbegesetz. In Studien verwendet: wässriger Extrakt mit 120 bis 240 mg Kavalactonen pro Tag über 6 Wochen (Sarris 2013) und zweimal täglich 120 mg Kavalactone über 16 Wochen (Sarris 2020). Das sind Studienangaben, keine Verzehr- oder Einnahmeempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Kava gehört in Deutschland in ärztliche Hände, weil es verschreibungspflichtig ist und Leberschäden beschrieben sind.',
    synergies: [],
    avoid: [],
    evidence: 'mittel',
    sources: 'Wurzelstock des Kava-Strauchs (Piper methysticum), im Südpazifik als Getränk zubereitet, in Europa früher als Extrakt in Arzneimitteln',
    link: 'https://pubmed.ncbi.nlm.nih.gov/12535473/'
  },
  {
    id: 'cbn',
    name: 'CBN (Cannabinol)',
    altNames: 'Cannabinol, CBN-Öl, CBN-Gummies, 11-Hydroxy-CBN',
    category: 'Kräuter',
    tags: ['schlaf', 'entspannung', 'novel-food'],
    short: 'Cannabinoid, das beim Altern von THC entsteht und als Schlafhilfe verkauft wird. Zwei kleine randomisierte Studien verfehlten ihren Hauptendpunkt, fanden aber weniger nächtliches Aufwachen, schnelleres Einschlafen und besseren subjektiven Schlaf. In der EU ist CBN ein nicht zugelassenes neuartiges Lebensmittel.',
    description: 'Cannabinol (CBN) entsteht, wenn Δ9-THC im Hanf durch Luft und Licht oxidiert. Es wird als Isolat in Ölen und Fruchtgummis gegen Schlafprobleme beworben. Eine Übersicht von 2021 fand dafür keine Studie mit validierten Schlafmessungen und mahnte zur Skepsis. Seitdem gibt es zwei randomisierte Studien: In einer doppelblinden Studie mit 293 Teilnehmenden verfehlte die Schlafqualität knapp die Signifikanz, Aufwachen und Schlafstörung insgesamt besserten sich (Bonn-Miller 2024). Im Schlaflabor änderte CBN bei 20 Menschen mit Insomnie die Wachzeit nach dem Einschlafen nicht, die hohe Dosis verkürzte aber die Einschlafzeit und verbesserte den subjektiven Schlaf (Lavender 2026).',
    benefits: [
      'Doppelblinde RCT mit 293 Erwachsenen mit schlechtem Schlaf, 7 Nächte: weniger nächtliches Aufwachen und weniger Schlafstörung insgesamt als unter Placebo; die Schlafqualität als Hauptendpunkt verfehlte die Signifikanz knapp (OR 2,26, p = 0,082); keine Wirkung auf Tagesmüdigkeit; CBD dazu brachte keinen Zusatznutzen (Bonn-Miller 2024)',
      'Schlaflabor, 20 Menschen mit diagnostizierter Insomnie, je eine Nacht: Die hohe Studiendosis verkürzte die Einschlafzeit (dz = −0,74), verbesserte die subjektive Schlafqualität und verringerte Weckreaktionen im EEG; der Hauptendpunkt Wachzeit nach dem Einschlafen änderte sich nicht (Lavender 2026)',
      'Bei Ratten verlängerte CBN im Schlaflabor die Gesamtschlafzeit, der Effekt auf den Tiefschlaf lag in der Größenordnung von Zolpidem; der Abbaustoff 11-Hydroxy-CBN wirkt am CB1-Rezeptor ähnlich stark wie THC (Arnold 2025, Tierversuch)',
      'Anwender: In einer repräsentativen US-Befragung hatten 4,5 Prozent der Erwachsenen schon CBN genommen, als häufigsten medizinischen Grund nannten sie Schlafstörungen (Satybaldiyeva 2025)'
    ],
    risks: [
      'Beide Schlafstudien verfehlten ihren Hauptendpunkt; die Daten reichen über eine einzelne Nacht oder 7 Nächte, Langzeitdaten fehlen',
      'Im Schlaflabor 247 leichte bis mittlere Nebenwirkungen über alle Studienarme, ohne Aufschlüsselung im Abstract (Lavender 2026)',
      'Bei Mäusen führte wiederholte Gabe zu Toleranz und körperlicher Abhängigkeit, und CBN ersetzte THC im Unterscheidungstest vollständig (Vanegas 2026, Tierversuch)',
      'Die Übersicht von 2021 fand die menschlichen Daten zu THC-ähnlichen Effekten von CBN uneinheitlich; handelsübliche Schlafprodukte enthielten damals meist sehr kleine Mengen (Corroon 2021)',
      'Im Sport innerhalb des Wettkampfs verboten: Die WADA verbietet alle natürlichen und synthetischen Cannabinoide außer Cannabidiol (WADA-Liste 2026, S8)',
      'In der EU ein nicht zugelassenes neuartiges Lebensmittel (Novel-Food-Katalog, Eintrag Cannabinoide)'
    ],
    dosage: 'Keine Empfehlung. CBN ist in der EU als neuartiges Lebensmittel nicht zugelassen und in Deutschland kein zugelassenes Arzneimittel, daher gibt es keine amtliche Höchstmenge und es greift § 3a Heilmittelwerbegesetz. In Studien verwendet: 20 mg an 7 aufeinanderfolgenden Abenden (Bonn-Miller 2024) sowie einmalig 30 oder 300 mg im Schlaflabor (Lavender 2026). Das sind Studienangaben, keine Verzehr- oder Einnahmeempfehlung.',
    intake: 'Keine Einnahmeempfehlung. Wer Schlafmittel, Beruhigungsmittel oder andere Cannabinoide nimmt oder im Wettkampfsport aktiv ist, sollte CBN nicht auf eigene Faust einsetzen.',
    synergies: [],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Entsteht im Hanf, wenn THC oxidiert; im Handel als Isolat in Ölen, Kapseln und Fruchtgummis',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41698831/'
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
