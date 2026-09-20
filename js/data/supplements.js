/* Supplement-Datenbank
 * Hinweis: Alle Angaben dienen der Information, ersetzen keine ärztliche Beratung.
 * Evidenzlevel: "hoch" = zahlreiche Humanstudien, "mittel" = einige Studien, "niedrig" = vorläufig/tierexperimentell.
 */
const SUPPLEMENTS = [
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
    short: 'Schnelle Energiequelle, die direkt zur Leber gelangt und Ketone bildet.',
    description: 'C8 (Caprylsäure) ist das potenteste MCT für Ketonproduktion. Wird direkt zur Leber transportiert und zu Energie umgewandelt – ohne Insulinantwort.',
    benefits: [
      'Schnelle Energie für Gehirn und Muskeln',
      'Unterstützt ketogene Ernährung',
      'Kann Appetit reduzieren',
      'Verbesserte mentale Klarheit',
      'Antibakteriell (gegen Candida)'
    ],
    risks: [
      'Zu schnelle Dosissteigerung: Magenkrämpfe, Durchfall',
      'Kalorienreich (9 kcal/g)'
    ],
    dosage: 'Start: 1 TL, steigern auf 1–2 EL täglich.',
    intake: 'Morgens im Bulletproof Coffee oder vor Workout. Langsam aufbauen.',
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
    short: 'Transportiert Fettsäuren in die Mitochondrien. Der beworbene Kognitionsnutzen ließ sich nicht bestätigen.',
    description: 'Die acetylierte Form überquert die Blut-Hirn-Schranke. Der Transportmechanismus ist gut verstanden – die Studien an Gesunden zeigen für Kognition und Energie allerdings keinen belastbaren Effekt.',
    benefits: [
      'Wird für mentale Energie und Klarheit beworben',
      'Rolle im Fettsäuretransport ist biochemisch belegt',
      'Neuroprotektive Effekte überwiegend aus Tiermodellen',
      'Kleine Studien zu Depressionssymptomen, uneinheitlich',
      'Hinweise auf bessere Spermienparameter',
      'Als Anti-Aging-Stoff beworben – ohne Endpunktdaten'
    ],
    risks: [
      'Nebenwirkungen: Magen-Darm-Beschwerden (selten)',
      'Nicht spät am Abend (anregend)',
      'Bei Schilddrüsenproblemen Arzt fragen'
    ],
    dosage: '500–2.000 mg täglich.',
    intake: 'Morgens auf leeren Magen oder vor Workout.',
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
      'Leucin aktiviert mTOR und zündet die Muskelproteinsynthese',
      'Erhält Muskelmasse und Griffkraft – starke Marker für Selbstständigkeit im Alter',
      'EAA-Pulver als Speziallösung bei wenig Appetit, im Alter oder bei pflanzlicher Kost',
      'Gleicht die geringere Leucin- und Lysin-Dichte pflanzlicher Ernährung aus'
    ],
    risks: [
      'Isolierte BCAAs sind ein Zündschlüssel ohne Baumaterial – wer genug Protein isst, braucht sie nicht',
      'Bei Nierenerkrankungen gehört die Proteinmenge in ärztliche Abstimmung',
      'Dauerhaft hochgefahrenes mTOR ist kein Ziel – Protein-Mahlzeiten und echte Essenspausen im Wechsel'
    ],
    dosage: '1,0–1,5 g Protein pro kg Körpergewicht täglich (mit Krafttraining 1,6–2,0), je Mahlzeit rund 30 g mit etwa 3 g Leucin.',
    intake: 'Auf drei bis vier Mahlzeiten verteilt. Die wichtigste Korrektur ist meist das Frühstück – Eier, Quark, Skyr oder Shake statt Marmeladenbrot.',
    synergies: ['whey', 'kreatin', 'glycin', 'taurin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Eier, Fisch, Fleisch, Milchprodukte, Hülsenfrüchte; Whey als konzentrierte Form',
    podcasts: [
      {
        title: 'Aminosäuren: Die Bausteine des Lebens im Faktencheck',
        spotify: '38NyHB17pe2eBUcTPFg8qk',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 69) · mit Paul & Paula. Die Hierarchie echtes Essen vor Whey vor EAA vor BCAA, die anabole Resistenz ab der Lebensmitte – und warum die eigentliche Stellschraube nicht das Pulver ist, sondern die Verteilung der Proteinmenge über den Tag. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 07.09.2026, 10:00)'
      }
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
    short: 'Direkte Serotonin-Vorstufe. Für Stimmung und Schlaf.',
    description: 'Aus Griffonia-Samen. Überquert Blut-Hirn-Schranke und wird direkt zu Serotonin. Kurzzeitig sehr wirksam, langfristig Vorsicht.',
    benefits: [
      'Hebt Serotoninspiegel',
      'Soll die Stimmung verbessern – kleine, teils alte Studien',
      'Soll den Schlaf fördern (als Melatonin-Vorstufe) – Humandaten dünn',
      'Kann Appetit reduzieren'
    ],
    risks: [
      'NICHT mit Antidepressiva (Serotonin-Syndrom)',
      'Nicht über Monate ohne Pause',
      'Mit B6 und EGCG kombinieren für Periphere-Conversion-Blockade',
      'Kann Träume intensivieren'
    ],
    dosage: '50–200 mg. Bei Schlaf abends, bei Stimmung morgens.',
    intake: 'Auf leeren Magen, 30 min vor Mahlzeit oder dem Schlafen.',
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
    short: 'Klassisches Adaptogen aus der TCM. Energie, Libido und kognitive Schärfe.',
    description: 'Panax ginseng enthält Ginsenoside. Roter Ginseng (gedämpft) ist stärker als weißer. Wirkt langfristig kumulativ.',
    benefits: [
      'Steigert körperliche und mentale Energie',
      'Verbessert kognitive Funktion',
      'Unterstützt Libido und sexuelle Funktion',
      'Stärkt Immunsystem',
      'Kann Blutzucker regulieren'
    ],
    risks: [
      'Bei Bluthochdruck Vorsicht',
      'Kann Schlaf stören (nicht abends)',
      'Bei Östrogen-sensitiven Erkrankungen Arzt fragen'
    ],
    dosage: '200–400 mg standardisiert (4 % Ginsenoside).',
    intake: 'Morgens oder mittags. Kur-artig 8 Wochen mit Pause.',
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
      'Sehr sicher und gut verträglich'
    ],
    dosage: '500–3.000 mg Dual-Extrakt täglich.',
    intake: 'Morgens mit Mahlzeit. Dual-Extrakte (Wasser + Alkohol) bevorzugen.',
    synergies: ['acetyl-l-carnitin', 'omega-3'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Essbarer Pilz (sieht aus wie Löwenmähne)'
  },
  {
    id: 'reishi',
    name: 'Reishi',
    altNames: 'Ganoderma lucidum',
    category: 'Pilz',
    tags: ['immun', 'schlaf', 'stress', 'leber', 'anti-aging'],
    short: 'Der „Pilz der Unsterblichkeit" in der TCM. Beruhigend und immunstärkend.',
    description: 'Reishi enthält Triterpene und Polysaccharide, die das Immunsystem modulieren und Entzündungen reduzieren. Abends eingenommen fördert er erholsamen Schlaf.',
    benefits: [
      'Moduliert Immunsystem',
      'Soll die Schlafqualität verbessern – kleine Studien',
      'Soll Stress und Angst reduzieren – Humandaten dünn',
      'Leberschutz wird postuliert – überwiegend Tierdaten',
      'Kann Entzündungen reduzieren'
    ],
    risks: [
      'Bei Blutverdünnern Vorsicht',
      'Selten: Magenbeschwerden, Nasenbluten (sehr hohe Dosen)'
    ],
    dosage: '500–2.000 mg Dual-Extrakt täglich.',
    intake: 'Abends für Schlafförderung.',
    synergies: ['ashwagandha', 'glycin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Essbarer Pilz (Extrakt empfohlen)'
  },
  {
    id: 'cordyceps',
    name: 'Cordyceps',
    altNames: 'Cordyceps militaris / sinensis',
    category: 'Pilz',
    tags: ['energie', 'sport', 'ausdauer', 'immun', 'libido'],
    short: 'Energie- und Leistungs-Pilz. Die Effekte auf ATP und VO2max stammen aus kleinen Studien, oft an untrainierten Älteren.',
    description: 'Für Cordyceps werden eine höhere ATP-Produktion und bessere Sauerstoffaufnahme berichtet – die Humanstudien dazu sind klein und fanden Effekte vor allem bei Untrainierten, kaum bei Sportlern. Die Geschichte der chinesischen Olympioniken ist Anekdote. Cordyceps militaris (kultiviert) gilt als vergleichbar mit teurem sinensis.',
    benefits: [
      'Mehr Ausdauer und VO2max',
      'Soll die ATP-Produktion steigern – überwiegend Labordaten',
      'Kann Libido verbessern',
      'Soll das Immunsystem stärken – kleine Studien',
      'Unterstützt Nierenfunktion'
    ],
    risks: [
      'Selten: trockener Mund, Übelkeit',
      'Bei Autoimmunerkrankungen Arzt fragen'
    ],
    dosage: '1.000–3.000 mg Dual-Extrakt täglich.',
    intake: 'Morgens oder vor dem Workout.',
    synergies: ['rhodiola', 'kreatin'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Pilz (wild sehr selten, kultivierte Form genauso wirksam)'
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
    synergies: ['resveratrol', 'trimethylglycin'],
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
    short: 'Wird als Mitochondrien-Booster beworben. Am Menschen praktisch nicht untersucht.',
    description: 'Die Bildung neuer Mitochondrien stammt aus Zell- und Tierversuchen. Die einzige nennenswerte Humanstudie umfasste 34 ältere Personen über sechs Wochen – und testete ein Kombinationspräparat, nicht reines PQQ. Wird oft mit CoQ10 kombiniert.',
    benefits: [
      'Mitochondrien-Neubildung in Zell- und Tierversuchen',
      'Wird für Energie und Ausdauer beworben',
      'Neuroprotektive Effekte im Tiermodell',
      'Eine kleine Studie zu Gedächtnis, mit Kombinationspräparat',
      'Anti-Aging-Effekte'
    ],
    risks: [
      'Gut verträglich',
      'Selten: Kopfschmerzen, Schlafstörungen bei hohen Dosen'
    ],
    dosage: '10–20 mg täglich.',
    intake: 'Morgens mit Frühstück.',
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
    tags: ['darm', 'immun', 'stimmung', 'verdauung'],
    short: 'Belege gelten für einen Stamm in einer Indikation, nicht für die Produktklasse. Am dichtesten sind sie bei Durchfall unter Antibiotika.',
    description: 'Probiotika sind lebende Mikroorganismen, meist Laktobazillen, Bifidobakterien oder die Hefe Saccharomyces boulardii. Entscheidend ist der Stamm, nicht die Gattung: Lactobacillus rhamnosus GG verhindert bei Kindern Durchfall unter Antibiotika, beim akuten Magen-Darm-Infekt derselben Altersgruppe wirkte er in einer Studie mit 971 Kindern nicht. Am besten belegt sind antibiotikabedingter Durchfall, die Clostridioides-difficile-Diarrhö bei hohem Ausgangsrisiko, Atemwegsinfekte und einzelne Stämme beim Reizdarm. Nach einer Antibiotikakur kann ein mehrstämmiges Präparat die Rückkehr der eigenen Darmflora sogar verzögern. In der EU ist keine gesundheitsbezogene Angabe für Probiotika zugelassen, der Begriff „probiotisch" selbst ist unzulässig.',
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
    short: 'Aktiviert den NRF2-Pathway – den Master-Schalter für körpereigene Antioxidantien.',
    description: 'Sulforaphan entsteht aus Glucoraphanin in Broccoli-Sprossen, wenn sie zerkaut werden. Aktiviert den NRF2-Transkriptionsfaktor, der hunderte entgiftende und antioxidative Gene einschaltet. Rhonda Patricks Lieblings-Supplement.',
    benefits: [
      'Aktiviert körpereigene Entgiftung (Phase-II-Enzyme)',
      'Senkt Marker für oxidativen Stress und Entzündung – Surrogatmarker, keine Endpunkte',
      'Starke Schutzwirkung gegen viele Krebsarten (präklinisch)',
      'Unterstützt die Leber-Entgiftung',
      'Kann Insulinresistenz verbessern'
    ],
    risks: [
      'Bei Schilddrüsenunterfunktion hohe Dosen meiden (goitrogen)',
      'Selten Magenbeschwerden'
    ],
    dosage: 'Täglich: 10–40 mg Sulforaphan oder 30 g frische Broccoli-Sprossen.',
    intake: 'Am besten morgens, mit Senf gegessen (Myrosinase aktiviert es). Supplement-Kapseln stabiler.',
    synergies: ['kurkuma', 'omega-3', 'glutathion'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Broccoli-Sprossen (höchste Konzentration), Broccoli, Rosenkohl, Rucola'
  },
  {
    id: 'urolithin-a',
    name: 'Urolithin A',
    altNames: 'Mitopure',
    category: 'Longevity',
    tags: ['mitochondrien', 'muskel', 'longevity', 'energie', 'autophagie'],
    short: 'Fördert Mitophagie – recycelt beschädigte Mitochondrien. Neueste Longevity-Entdeckung.',
    description: 'Urolithin A entsteht im Darm aus Ellagsäure (Granatapfel) – aber nur bei ca. 40 % der Menschen. Als Supplement (Mitopure) direkt verfügbar. Erste Humanstudien zeigen verbesserte Muskelkraft und Ausdauer bei Älteren.',
    benefits: [
      'Stimuliert Mitophagie (Recycling alter Mitochondrien)',
      'Soll Muskelkraft und Ausdauer bei Älteren verbessern – kleine, überwiegend herstellerfinanzierte Studien',
      'Senkt Entzündungsmarker – Surrogatmarker, keine Endpunkte',
      'Immunschutz wird postuliert – dafür gibt es am Menschen keine belastbaren Daten',
      'Kann die Hautalterung verlangsamen'
    ],
    risks: [
      'Gut verträglich, selten Magenbeschwerden',
      'Teuer als Markensupplement (Mitopure)',
      'Langzeitdaten beim Menschen noch ausstehend'
    ],
    dosage: '500 mg täglich (Standard-Biohacker-Dosis).',
    intake: 'Mit einer Mahlzeit, bevorzugt morgens.',
    synergies: ['coq10', 'pqq', 'nmn'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Indirekt über Ellagsäure: Granatapfel, Walnüsse, Himbeeren (nur bei passender Darmflora)',
    podcasts: [
      {
        title: 'Urolithin A: Der Mitochondrien-Erneuerer im Faktencheck',
        spotify: '1OqKr6DQlwmZyf8v7HQjw2',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 78) · mit Paul & Paula. Die Produktionskette vom Granatapfel bis in die Zelle – und warum sie bei vielen Menschen im Darm gar nicht erst zustande kommt. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 16.09.2026, 10:00)'
      }
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
      'Verbessert Gedächtnis und Lernen',
      'Steigert Fokus und geistige Klarheit',
      'Erhöht Kraft-Output im Training (Growth-Hormone-Ausschüttung)',
      'Als Hirnschutz im Alter beworben — dem steht eine Kohortenauswertung über 12 Mio. Menschen mit erhöhtem Schlaganfallrisiko gegenüber',
      'Wirkt synergistisch mit Racetamen'
    ],
    risks: [
      'Selten: Kopfschmerzen, Reizbarkeit bei zu hoher Dosis',
      'Kann Depressionen bei dispositionierten Personen verstärken',
      'Möglicher Zusammenhang mit Herz-Kreislauf-Risiko (in Diskussion)'
    ],
    dosage: '300–600 mg täglich. Vor Training: 400 mg.',
    intake: 'Morgens oder vor kognitiver/körperlicher Leistung. Mit Fett einnehmen.',
    synergies: ['l-theanin', 'koffein', 'loewenmaehne', 'omega-3'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Eier, Leber, Milch (geringe Mengen)'
  },
  {
    id: 'citicolin',
    name: 'Citicolin (CDP-Cholin)',
    altNames: 'Cytidin-5-Diphosphocholin',
    category: 'Aminosäure',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic', 'acetylcholin'],
    short: 'Duales Nootropikum – liefert Cholin UND Uridin. Stabilisiert Zellmembranen im Gehirn.',
    description: 'Citicolin wird im Körper zu Cholin und Cytidin gespalten. Das Cytidin wird zu Uridin – beide verbessern Neurotransmitter-Funktion. In Europa als Medikament gegen Schlaganfall-Folgen zugelassen.',
    benefits: [
      'Verbessert Aufmerksamkeit und Reaktionsgeschwindigkeit',
      'Steigert Gedächtnis, besonders bei Älteren',
      'Schützt Nervenzellen (Neuroprotektion)',
      'Unterstützt Dopamin-Rezeptor-Dichte',
      'Beliebtes Baseline-Nootropikum (z.B. im „Mind Lab Pro")'
    ],
    risks: [
      'Gut verträglich, selten Kopfschmerzen',
      'Teurer als Alpha-GPC'
    ],
    dosage: '250–500 mg täglich. Klinische Studien: bis 2.000 mg.',
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
    category: 'Aminosäure',
    tags: ['stress', 'cortisol', 'gedaechtnis', 'schlaf', 'gehirn'],
    short: 'Senkt erhöhte Cortisolspiegel – besonders nach Training oder bei Stress. Gut vor dem Schlafen.',
    description: 'Phosphatidylserin ist ein Phospholipid der Zellmembran, besonders reichlich im Gehirn. Studien zeigen signifikante Cortisol-Senkung nach intensivem Training und bessere Schlafqualität.',
    benefits: [
      'Senkte erhöhtes Cortisol nach Training deutlich – die Zahl stammt aus einer Studie mit zehn Männern über zehn Tage',
      'Verbessert Schlafqualität bei Gestressten',
      'Unterstützt Gedächtnis und Konzentration',
      'Wirkt bei ADHS-Symptomen',
      'Sicher bei Langzeitanwendung'
    ],
    risks: [
      'Selten: Magenbeschwerden bei hoher Dosis',
      'Abends einnehmen kann Schlafqualität verbessern, nicht bei jedem tagsüber sinnvoll'
    ],
    dosage: '100–300 mg täglich. Abends oder nach Training.',
    intake: 'Mit einer fetthaltigen Mahlzeit.',
    synergies: ['ashwagandha', 'magnesium', 'omega-3', 'glycin'],
    avoid: [],
    evidence: 'hoch',
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
    short: 'Vorläufer von Carnosin – puffert Muskelsäure ab. Verlängert die Leistung bei 1–4 min Belastung.',
    description: 'Beta-Alanin wird im Muskel mit Histidin zu Carnosin verknüpft. Carnosin puffert Wasserstoff-Ionen bei intensiver Belastung. Das „Kribbeln" (Paraesthesie) nach Einnahme ist harmlos.',
    benefits: [
      'Verlängert Time-to-Exhaustion bei hochintensiver Belastung',
      'Verbessert Sprints, HIIT, CrossFit',
      'Erhöht intramuskuläres Carnosin um bis zu 60 % – der Leistungsvorteil zeigt sich vor allem bei Belastungen von ein bis vier Minuten',
      'Antioxidative Wirkung im Muskel',
      'Kann kognitive Funktion unter Stress verbessern'
    ],
    risks: [
      'Kribbeln/Prickeln auf der Haut (harmlos, vermeidbar durch Aufteilen)',
      'Benötigt 4+ Wochen Aufsättigung, um zu wirken'
    ],
    dosage: '3,2–6,4 g täglich, aufgeteilt auf 2–4 Dosen à 800 mg.',
    intake: 'Mit Mahlzeiten. Timing nicht kritisch – Akkumulation zählt.',
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
    short: 'Vorstufe von Arginin, hebt den NO-Spiegel zuverlässiger als Arginin selbst. Für Pump gibt es Daten, für Muskelkater kaum.',
    description: 'L-Citrullin wird im Körper zu Arginin umgewandelt und hebt dadurch NO (Stickoxid) – dieser Umweg ist besser belegt als die direkte Arginin-Gabe. Die Effekte auf Leistung und Muskelkater stammen aus kleinen Sportstudien mit uneinheitlichen Ergebnissen; die Malat-Form ist dabei nicht sauber gegen reines Citrullin geprüft.',
    benefits: [
      'Bessere Durchblutung und Muskelpump',
      'Rund 6 % mehr Wiederholungen im Krafttraining (Meta-Analyse, 8 Studien, 137 Personen) – kleiner Effekt, bei Oberkörperübungen nicht nachweisbar',
      'Reduziert Muskelkater nach intensivem Training',
      'Kann Blutdruck leicht senken',
      'Unterstützt Erektionsqualität'
    ],
    risks: [
      'Sehr gut verträglich',
      'Selten: Magenbeschwerden'
    ],
    dosage: '6–8 g Citrullin-Malat 30–60 min vor Training. Täglich: 3–5 g.',
    intake: 'Vor dem Workout mit Wasser. Nüchtern gut aufgenommen.',
    synergies: ['kreatin', 'beta-alanin', 'elektrolyte'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Wassermelone (höchste natürliche Quelle), Kürbis, Gurke'
  },

  // ============ NEU: ENTSPANNUNG & SCHLAF ============
  {
    id: 'gaba',
    name: 'GABA',
    altNames: 'Gamma-Aminobuttersäure',
    category: 'Aminosäure',
    tags: ['stress', 'entspannung', 'schlaf', 'angst', 'cortisol'],
    short: 'Wichtigster hemmender Neurotransmitter. Ob orales GABA ins Gehirn gelangt, ist ungeklärt.',
    description: 'GABA ist der wichtigste beruhigende Neurotransmitter. Ob orales GABA die Blut-Hirn-Schranke überquert, ist umstritten – viele spüren dennoch einen Effekt (möglicherweise über Darm-Hirn-Achse).',
    benefits: [
      'Wird für Entspannung beworben – Humandaten dünn',
      'Einzelne kleine Studien zum Einschlafen',
      'Hinweise auf leichte Blutdruckeffekte',
      'Diskutierter Einfluss auf Cortisol',
      'Gut kombinierbar mit L-Theanin'
    ],
    risks: [
      'Selten: Kribbeln, Kurzatmigkeit bei hohen Dosen',
      'Wirkung individuell sehr unterschiedlich',
      'Tagsüber kann es müde machen'
    ],
    dosage: '100–750 mg bei Bedarf. Zum Schlafen: 500–750 mg.',
    intake: 'Abends oder bei akutem Stress. Auf nüchternen Magen.',
    synergies: ['l-theanin', 'magnesium', 'glycin', 'ashwagandha'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Fermentierte Lebensmittel (Kimchi, Miso, Tempeh), grüner Tee'
  },
  {
    id: 'inositol',
    name: 'Myo-Inositol',
    altNames: 'Vitamin B8',
    category: 'Vitamin',
    tags: ['angst', 'hormone', 'blutzucker', 'pcos', 'stimmung'],
    short: 'Zuckeralkohol mit Vitamin-ähnlicher Funktion – hilft bei Angst, PCOS und Insulinresistenz.',
    description: 'Inositol reguliert Insulin- und Serotonin-Signalwege. Besonders wirksam bei PCOS (polyzystisches Ovarialsyndrom) und Panikstörung. Kombination Myo- + D-Chiro-Inositol (40:1) gilt als Goldstandard bei PCOS.',
    benefits: [
      'Verbessert Insulinsensitivität',
      'Reguliert Zyklus und Fruchtbarkeit bei PCOS',
      'Wirkt bei Angststörung und Panikattacken',
      'Unterstützt Stimmung bei Depression',
      'Senkt Triglyzeride'
    ],
    risks: [
      'Hohe Dosen (>12 g): Magenbeschwerden, Durchfall',
      'Wirkung braucht 2–8 Wochen'
    ],
    dosage: '2–4 g 2× täglich. PCOS: 4 g täglich.',
    intake: 'Morgens und abends in Wasser. Auch zu Mahlzeiten.',
    synergies: ['magnesium', 'chrom', 'vitamin-b-komplex'],
    avoid: [],
    evidence: 'hoch',
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
    short: 'Aktive Form von Folat – essenziell für Methylierung. Besonders für MTHFR-Genvariante.',
    description: 'Methylfolat ist die bioaktive Form, die der Körper direkt nutzen kann. Rund 40 % der Menschen haben eine MTHFR-Genvariante, die Folsäure schlecht aktiviert. Wichtig für DNA-Reparatur, Neurotransmitter und Schwangerschaft.',
    benefits: [
      'Wirkt bei Depression (besonders MTHFR-Träger)',
      'Essenziell in der Schwangerschaft (Neuralrohr)',
      'Senkt Homocystein',
      'Unterstützt DNA-Reparatur',
      'Besser verträglich als Folsäure'
    ],
    risks: [
      'Überdosis kann Reizbarkeit, Schlafprobleme auslösen (Überstimulation)',
      'Nicht einfach Folsäure gegen Methylfolat tauschen – niedrig anfangen',
      'Bei B12-Mangel maskierbar – B12 mittesten'
    ],
    dosage: '400–800 µg täglich (Standard). Therapeutisch: bis 5 mg.',
    intake: 'Morgens mit B12 zusammen. Langsam aufdosieren.',
    synergies: ['vitamin-b12', 'vitamin-b-komplex', 'tmg'],
    avoid: [],
    evidence: 'hoch',
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
    short: 'Bindet das 1000-fache seines Gewichts an Wasser – für Haut, Gelenke und Augen.',
    description: 'Hyaluronsäure ist ein natürlicher Bestandteil der extrazellulären Matrix. Mit dem Alter sinkt die Eigensynthese. Zur oralen Einnahme gibt es Studien zu Hautfeuchte und leichter Arthrose – sie sind klein und überwiegend herstellerfinanziert.',
    benefits: [
      'Verbessert Hautfeuchtigkeit und -elastizität',
      'Schmerzlinderung bei Arthrose nur in herstellernahen Studien',
      'Unterstützt Augenbefeuchtung (trockene Augen)',
      'Fördert Wundheilung',
      'Schmiert Gelenke wie natürliche Gelenkflüssigkeit'
    ],
    risks: [
      'Sehr gut verträglich oral',
      'Injizierbare Form nur vom Arzt'
    ],
    dosage: '120–240 mg täglich (oral).',
    intake: 'Mit einer Mahlzeit. Mit Vitamin C für bessere Kollagenbildung.',
    synergies: ['kollagen', 'vitamin-c', 'glucosamin'],
    avoid: [],
    evidence: 'hoch',
    sources: 'Knochenbrühe (wenig), nur als Extrakt in sinnvoller Dosis.'
  },
  {
    id: 'glucosamin',
    name: 'Glucosamin',
    altNames: 'Glucosamin-Sulfat',
    category: 'Longevity',
    tags: ['gelenke', 'knorpel', 'bewegung', 'anti-aging', 'arthrose'],
    short: 'Knorpel-Baustein. Gut untersucht – in den hochwertigen Studien ohne Effekt auf Arthrose.',
    description: 'Der Cochrane-Review wertet 25 Studien mit knapp 5.000 Arthrose-Patienten aus: In den Studien zum Präparat eines Herstellers war Glucosamin überlegen, in den unabhängigen hochwertigen Studien zeigte sich kein Unterschied zu Placebo. Kaffeetrinker-artige Beobachtungsdaten verbinden regelmäßige Einnahme mit niedrigerer Sterblichkeit – eine Assoziation, kein belegter Zusammenhang.',
    benefits: [
      'Reduziert Gelenkschmerzen bei Arthrose',
      'Verlangsamter Knorpelabbau nicht konsistent belegt',
      'In Beobachtungsstudien mit niedrigerer Sterblichkeit verbunden – Assoziation, kein Beweis',
      'Diskutierte entzündungshemmende Effekte',
      'Baustein des Bindegewebes'
    ],
    risks: [
      'Bei Schalentier-Allergie: vegane Variante wählen',
      'Kann Blutzucker leicht erhöhen – bei Diabetes beobachten',
      'Wechselwirkung mit Warfarin möglich'
    ],
    dosage: '1.500 mg täglich (als Sulfat).',
    intake: 'Mit Mahlzeit. Aufteilen auf 2–3 Dosen reduziert Magenbeschwerden.',
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
    short: 'Mineralreiches Harz aus dem Himalaya: liefert Fulvinsäure und Spurenelemente – traditionell für Energie, Testosteron und mitochondriale Vitalität.',
    description: 'Shilajit ist ein teerartiges Mineralharz aus Gebirgsregionen (v. a. Himalaya), reich an Fulvin- und Huminsäuren sowie über 80 Spurenelementen. Es soll den mitochondrialen Energiestoffwechsel (CoQ10-Recycling), die Testosteronproduktion und die Nährstoffaufnahme unterstützen. Traditionell in der ayurvedischen Medizin für Vitalität und „Rasayana" (Verjüngung) genutzt.',
    benefits: [
      'Kann in Studien den Testosteronspiegel bei Männern erhöhen',
      'Unterstützt den mitochondrialen Energiestoffwechsel (Fulvinsäure, CoQ10)',
      'Liefert bioverfügbare Spurenelemente',
      'Traditionell für Energie, Ausdauer und Regeneration genutzt'
    ],
    risks: [
      'Rohes Shilajit kann mit Schwermetallen belastet sein – nur gereinigte, geprüfte Ware kaufen',
      'Qualität schwankt stark; auf Laborprüfung (Schwermetalle) achten',
      'Bei Gicht/hohem Harnsäurespiegel vorsichtig',
      'Datenlage überwiegend klein; als Ergänzung, nicht als Heilmittel'
    ],
    dosage: 'Üblich 300–500 mg gereinigtes Shilajit täglich (standardisiert auf Fulvinsäure).',
    intake: 'Morgens, oft in Wasser aufgelöst. Dauerhafte oder zyklische Einnahme.',
    synergies: ['tongkat-ali', 'coenzym-q10', 'vitamin-d3'],
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
    short: 'Die Erstmilch der Kuh, reich an Immunfaktoren und Wachstumsfaktoren: unterstützt Darmbarriere, Immunsystem und Regeneration – ein Trend-Supplement 2026.',
    description: 'Kolostrum ist die erste Milch nach der Geburt und enthält konzentriert Immunglobuline (IgG), Laktoferrin, Wachstumsfaktoren (IGF-1) und antimikrobielle Peptide. Bovines Kolostrum wird supplementiert, um die Darmbarriere („Leaky Gut"), das Immunsystem und die Regeneration zu unterstützen – beliebt bei Sportlern und für die Darmgesundheit.',
    benefits: [
      'Unterstützt die Darmbarriere und kann „Leaky Gut" mildern',
      'Immunfaktoren (IgG, Laktoferrin) stärken die Abwehr',
      'Kann bei Sportlern Infekt-Anfälligkeit und Darmstress reduzieren',
      'Liefert Wachstumsfaktoren für Regeneration'
    ],
    risks: [
      'Bei Milch-/Laktose-Allergie ungeeignet',
      'Qualität/Herkunft entscheidend (weidebasiert, schonend verarbeitet)',
      'Datenlage gemischt; Effekte oft moderat',
      'Enthält IGF-1 – bei entsprechenden Vorerkrankungen ärztlich abklären'
    ],
    dosage: 'Typisch 10–20 g täglich (Pulver), sportbezogen teils höher.',
    intake: 'Auf leeren Magen oder zwischen den Mahlzeiten, in Wasser. Nicht zu heiß auflösen.',
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
    synergies: ['tongkat-ali', 'panax-ginseng'],
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
    category: 'Mineral',
    tags: ['stimmung', 'gehirn', 'neuroprotektion', 'longevity', 'schlaf'],
    short: 'Mikrodosiertes Lithium (weit unter Medikamenten-Dosis): als Spurenelement für Stimmung, Neuroprotektion und gesundes Hirnaltern diskutiert.',
    description: 'Lithium ist – jenseits der hochdosierten Psychiatrie-Anwendung – auch ein natürliches Spurenelement (u. a. im Trinkwasser). In sehr niedrigen Dosen (Mikrodosierung) wird Lithiumorotat für Stimmung, Stressresilienz und Neuroprotektion genutzt. Bevölkerungsdaten verknüpfen höheres Lithium im Trinkwasser mit niedrigeren Demenz- und Suizidraten; die Interventionsevidenz bei Gesunden ist aber begrenzt.',
    benefits: [
      'Kann Stimmung und emotionale Stabilität unterstützen',
      'Neuroprotektiv diskutiert (fördert BDNF, hemmt GSK-3β)',
      'Bevölkerungsdaten: mehr Lithium im Wasser ↔ weniger Demenz/Suizid',
      'Mikrodosis liegt weit unter der psychiatrischen Dosis'
    ],
    risks: [
      'Nur NIEDRIG dosiert (mg-Bereich) – nicht mit hochdosierter Lithiumtherapie verwechseln',
      'Höhere Dosen brauchen ärztliche Kontrolle (Schilddrüse, Nieren, Blutspiegel)',
      'Interventionsevidenz bei Gesunden begrenzt',
      'Bei Nieren-/Schilddrüsenproblemen oder Medikamenten ärztlich abklären'
    ],
    dosage: 'Mikrodosis: typisch 1–5 mg elementares Lithium/Tag (als Orotat).',
    intake: 'Mit Mahlzeit, oft abends (kann Schlaf unterstützen). Ausreichend trinken.',
    synergies: ['omega-3', 'magnesium', 'vitamin-b12'],
    avoid: [],
    evidence: 'niedrig',
    sources: 'Spurenelement (Trinkwasser); als Lithiumorotat-Kapsel',
    podcasts: [
      {
        title: 'KI-Podcast: Lithium – das Spurenelement fürs Gehirn (Longevity & Neuroschutz)',
        audio: 'audio/lithium-podcast.mp3',
        spotify: '7w537EJ55GOs1xwuEbsylM',
        lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser (Folge 35). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche zur NIEDRIG dosierten Mikrodosis (Lithiumorotat), inkl. der Harvard-/Nature-Forschung 2025. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Nicht mit hochdosierter Lithiumtherapie verwechseln; bei Vorerkrankungen, Schwangerschaft oder Medikamenten ärztlich abklären.'
      }
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
    description: 'Citrus Bergamot ist reich an speziellen Polyphenolen (u. a. Brutieridin, Melitidin), die dem Statin-Mechanismus ähneln und den Fettstoffwechsel günstig beeinflussen. Studien zeigen Senkungen von LDL-Cholesterin und Triglyzeriden sowie Verbesserungen bei Blutzucker – bei guter Verträglichkeit.',
    benefits: [
      'Kann LDL-Cholesterin und Triglyzeride senken',
      'Kann HDL („gutes" Cholesterin) leicht anheben',
      'Günstige Effekte auf Blutzucker und Entzündung',
      'Natürliche Ergänzung/Alternative bei leicht erhöhten Blutfetten'
    ],
    risks: [
      'Kein Ersatz für verordnete Statine bei hohem Risiko – ärztlich abklären',
      'Qualität/Standardisierung (Polyphenolgehalt) beachten',
      'Selten Magen-Darm-Beschwerden',
      'Wechselwirkungen mit Blutfett-Medikamenten möglich'
    ],
    dosage: 'Typisch 500–1.000 mg standardisierter Extrakt täglich.',
    intake: 'Mit einer Mahlzeit, oft zum Abendessen.',
    synergies: ['omega-3', 'berberin', 'coenzym-q10'],
    avoid: [],
    evidence: 'mittel',
    sources: 'Schale/Saft der Bergamotte (standardisierter Extrakt)'
  },
  {
    id: 'nattokinase',
    name: 'Nattokinase',
    altNames: 'Natto-Enzym',
    category: 'Enzym',
    tags: ['herz', 'kreislauf', 'blut', 'anti-aging'],
    short: 'Ein Enzym aus fermentierten Sojabohnen (Natto): unterstützt die Fließeigenschaften des Blutes und die Herz-Kreislauf-Gesundheit.',
    description: 'Nattokinase ist ein fibrinolytisches Enzym aus dem japanischen Natto. Es kann Fibrin (den Baustein von Blutgerinnseln) abbauen und so die Fließeigenschaften des Blutes und den Blutdruck günstig beeinflussen. Beliebt in der Herz-Kreislauf-Prävention.',
    benefits: [
      'Kann Fibrin abbauen und die Blut-Fließeigenschaften verbessern',
      'In Studien mild blutdrucksenkend',
      'Unterstützt die Herz-Kreislauf-Gesundheit',
      'Pflanzlich, aus traditionellem Lebensmittel'
    ],
    risks: [
      'Blutverdünnende Wirkung – nicht mit Gerinnungshemmern kombinieren (Blutungsrisiko), ärztlich abklären',
      'Vor Operationen absetzen',
      'Qualität/Aktivität (in FU) beachten',
      'Bei Blutungsneigung meiden'
    ],
    dosage: 'Typisch 2.000–4.000 FU täglich.',
    intake: 'Auf leeren Magen (bessere Aufnahme), oft abends.',
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
    description: 'Serrapeptase ist ein eiweißspaltendes Enzym (ursprünglich aus Seidenraupen-Bakterien), das entzündliches und abgestorbenes Gewebe sowie zähen Schleim abbauen kann. Traditionell in Japan/Europa bei Entzündungen, Schwellungen, Atemwegsschleim und postoperativer Heilung genutzt.',
    benefits: [
      'Kann entzündliches/abgestorbenes Gewebe und Schleim abbauen',
      'Entzündungs- und schwellungsmindernd (Studien bei HNO/Zahn-OP)',
      'Kann zähen Atemwegsschleim verflüssigen',
      'Wird bei Schmerzen/Schwellungen unterstützend genutzt'
    ],
    risks: [
      'Studienlage gemischt und teils älter/klein',
      'Auf nüchternen Magen einnehmen (magensaftresistent), sonst inaktiviert',
      'Blutungsrisiko bei Gerinnungshemmern beachten',
      'Selten Magen-Darm-/Hautreaktionen'
    ],
    dosage: 'Typisch 10.000–40.000 SPU (bzw. 40.000–120.000 IU) täglich.',
    intake: 'Auf leeren Magen (min. 30 Min vor/2 h nach dem Essen), magensaftresistente Form.',
    synergies: ['nattokinase', 'kurkuma-curcumin'],
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
    short: 'Das teuerste Gewürz der Welt als Stimmungsaufheller: Safran-Extrakt zeigte in Studien antidepressive Effekte – teils vergleichbar mit leichten Medikamenten.',
    description: 'Safran (aus den Narben des Krokus) enthält Wirkstoffe wie Crocin und Safranal. Mehrere Humanstudien zeigten bei leichter bis mittlerer Depression Effekte, die mit niedrig dosierten Antidepressiva vergleichbar waren – bei guter Verträglichkeit. Auch für Augen (Makula) und PMS untersucht.',
    benefits: [
      'Kann Stimmung heben (Studien bei leichter/mittlerer Depression)',
      'Gut verträglich, kaum sedierend',
      'Auch für Augengesundheit (Makula) und PMS untersucht',
      'Natürliche Ergänzung zur Stimmungsunterstützung'
    ],
    risks: [
      'Kein Ersatz für ärztliche Behandlung bei Depression',
      'Höhere Dosen können Nebenwirkungen/Toxizität haben – nicht überdosieren',
      'Qualität/Fälschung ein Thema (auf standardisierte Extrakte achten)',
      'In der Schwangerschaft meiden (höhere Dosen wehenfördernd)'
    ],
    dosage: 'Typisch 28–30 mg standardisierter Safran-Extrakt täglich.',
    intake: 'Mit einer Mahlzeit, oft geteilt morgens/abends.',
    synergies: ['5-htp', 'omega-3', 'magnesium'],
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
    short: 'Natürlicher Stickstoffmonoxid-Booster: das Nitrat aus Roter Bete erweitert die Gefäße – für mehr Ausdauer, bessere Durchblutung und niedrigeren Blutdruck.',
    description: 'Rote Bete ist reich an Nitrat, das der Körper zu Stickstoffmonoxid (NO) umwandelt. NO erweitert die Blutgefäße, verbessert die Durchblutung und die Sauerstoffnutzung der Muskeln. Gut belegt für mehr Ausdauerleistung und eine milde Blutdrucksenkung.',
    benefits: [
      'Steigert die Ausdauerleistung (bessere Sauerstoffnutzung)',
      'Erweitert Gefäße und verbessert die Durchblutung (NO)',
      'Senkt mild den Blutdruck',
      'Natürlich, als Saft/Pulver leicht verfügbar'
    ],
    risks: [
      'Färbt Urin/Stuhl rötlich (harmlos)',
      'Bei Neigung zu Nierensteinen (Oxalat) beachten',
      'Antibakterielle Mundspülung kann die NO-Bildung blockieren',
      'Wirkung individuell; Timing (2–3 h vor Sport) wichtig'
    ],
    dosage: 'Ziel ~300–600 mg Nitrat (z. B. 70 ml Beetroot-Shot) täglich bzw. vor dem Sport.',
    intake: 'Ca. 2–3 Stunden vor der Belastung; als Saft, Shot oder Pulver.',
    synergies: ['l-citrullin', 'l-arginin'],
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
    short: 'Darmbakterium, das von der Schleimschicht der Darmwand lebt. Schlanke, stoffwechselgesunde Menschen haben davon meist viel, Übergewichtige wenig. In der einzigen Studie am Menschen wirkte ausgerechnet die abgetötete Variante.',
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
      'Widerspruch zwischen Tier und Mensch ungeklärt: im Tier wirkte nur die lebende, am Menschen nur die abgetötete Form',
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
