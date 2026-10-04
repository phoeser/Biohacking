/* Therapien & Behandlungen
 * Quelle: Munich Health Center (munichhealthcenter.de) + Inuspherese (externer Anbieter)
 * Kategorien:
 *   - Ausstattung: gerätegestützte Anwendungen vor Ort
 *   - Schwerpunkt: thematische Begleitkonzepte
 *   - Netzwerk:   Partner-Experten/-Leistungen
 *   - Extern:     Verfahren außerhalb MHC (z.B. Inuspherese)
 */
const THERAPIES = [
  {
    id: 'schlafapnoe-cpap',
    name: 'CPAP bei Schlafapnoe',
    category: 'Biohacking',
    emoji: '😴',
    short: 'Die Atemmaske beseitigt die nächtlichen Atemaussetzer fast vollständig – in der größten Studie verhinderte sie dadurch aber keine Herzinfarkte und Schlaganfälle.',
    benefits: [
      'Senkt die Atemaussetzer gemessen von 29 auf 3,7 je Stunde – fast neunzig Prozent weg',
      'Verbessert Schnarchen, Tagesschläfrigkeit, Lebensqualität und Stimmung – in derselben Studie belegt',
      'Nicht-medikamentös, sofort wirksam, jederzeit absetzbar'
    ],
    indication: ['Schlafapnoe', 'Schnarchen', 'Tagesmüdigkeit', 'Schlafqualität'],
    note: 'Der Nutzen fürs Herz ist nicht gezeigt: SAVE (NEJM 2016) randomisierte 2.717 Erwachsene zwischen 45 und 75 mit mittelschwerer bis schwerer Schlafapnoe UND bestehender Herz-Kreislauf-Erkrankung und fand nach 3,7 Jahren ein Risikoverhältnis von 1,1 (95 % KI 0,91–1,32) für den kombinierten Endpunkt. Das ist kein Grund, das Gerät in den Schrank zu legen – die belegten Effekte auf Schlaf und Befinden bleiben. Es ist ein Grund, es nicht als Herzschutz zu verkaufen. Diagnose und Einstellung gehören ins Schlaflabor.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27571048/'
  },
  {
    id: 'krebs-frueherkennung-bluttest',
    name: 'Krebs-Bluttest (Multi-Cancer-Früherkennung)',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Ein Bluttest, der viele Krebsarten auf einmal sucht. Die erste randomisierte Studie hat ihr Hauptziel verfehlt.',
    benefits: [
      'Falscher Alarm ist selten – und wenn er kommt, weist er meist auf das richtige Organ',
      'Eine einzige Blutabnahme deckt Krebsarten ab, für die es sonst keine Vorsorge gibt',
      'Erstmals überhaupt randomisiert geprüft: NHS-Galleri mit 142.250 Teilnehmenden zwischen 50 und 77'
    ],
    indication: ['Früherkennung', 'Vorsorge', 'Screening'],
    note: 'Der Hauptendpunkt wurde verfehlt: Das Inzidenzratenverhältnis für Krebs im Stadium III oder IV lag bei 1,03 (95 % KI 0,92–1,14; p = 0,63) – kein Unterschied zur üblichen Vorsorge. Der Test findet etwa drei von zehn Krebsen. Entscheidend ist, was daraus folgt: Ein unauffälliges Ergebnis ist keine Entwarnung. Wer deswegen Darmspiegelung, Mammographie oder Hautkontrolle sein lässt, hat sich verschlechtert, nicht verbessert.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41727826/'
  },
  {
    id: 'mikrobiom-tests',
    name: 'Mikrobiom-Tests mit Ernährungsplan',
    category: 'Biohacking',
    emoji: '🦠',
    short: 'Stuhlprobe einschicken, personalisierten Ernährungsplan zurückbekommen. Die Streuung, auf der das Angebot beruht, ist echt – der Beitrag der Gene dazu liegt unter einem Prozent.',
    benefits: [
      'Die individuelle Antwort auf dasselbe Essen ist real und groß: 103 Prozent Streuung beim Blutfett, 68 Prozent beim Blutzucker (PREDICT 1, 1.002 Erwachsene)',
      'Das Mikrobiom trägt zur Vorhersage der Fettantwort mehr bei als die Nährstoffzusammensetzung der Mahlzeit (7,1 gegen 3,6 Prozent der Varianz)',
      'Nicht-invasiv, ohne Risiko'
    ],
    indication: ['Ernährung', 'Darm', 'Blutzucker', 'Personalisierung'],
    note: 'Drei Einschränkungen, die vor dem Bezahlen wichtig sind. Erstens: Der Beitrag der genetischen Information zur Vorhersage ist klein – 9,5 Prozent beim Blutzucker, 0,8 Prozent beim Blutfett, 0,2 Prozent beim C-Peptid. Zweitens: Beim Blutzucker schlägt die Mahlzeit das Mikrobiom deutlich (15,4 gegen 6,0 Prozent). Drittens: Die Messung selbst ist zwischen zwei Anbietern heute nicht zuverlässig wiederholbar – wer bei zwei Firmen einschickt, bekommt nicht dasselbe Ergebnis.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32066975/'
  },
  {
    id: 'langzeit-basenbaden',
    name: 'Langzeit-Basenbaden',
    category: 'Biohacking',
    emoji: '🛁',
    short: 'Stundenlang im warmen Wasser. Die Begründung auf der Packung trägt nicht – die Wirkung gibt es trotzdem, nur über einen anderen Weg.',
    benefits: [
      'Immersion treibt messbar Wasser und Salz aus: 758 ml Urin und 56 mmol Natrium in drei Stunden, rund drei Gramm Kochsalz (Farrow 1992, 13 Männer)',
      'Der Effekt hängt an der Wassertemperatur: bei 32 und 34,5 °C sechsfache Ausscheidung, bei 36 °C nur dreifache (Nakamitsu 1994)',
      'Muskelentspannung und Schwerelosigkeitsgefühl sind unmittelbar und werden zuverlässig berichtet',
      'Billig, ohne Wirkstoff, ohne Rezept'
    ],
    indication: ['Entspannung', 'Rücken/Muskulatur', 'Ritual', 'Schlaf'],
    note: 'Die Erklärung auf der Verpackung stimmt nicht: Über die Haut wird keine nennenswerte Säure ausgeschieden. Der Maßstab dafür ist die Niere – sie scheidet rund 71 mmol Säure am Tag aus (Sebastian, NEJM 1994). Was tatsächlich passiert, ist Immersionsdiurese: Der Wasserdruck verschiebt Blut nach innen, ANP steigt, Aldosteron fällt, die Niere macht Wasser und Natrium locker. Das erklärt auch das leichtere Gefühl danach. Bei Herzschwäche, niedrigem Blutdruck oder unter entwässernden Medikamenten ist stundenlange Immersion nichts zum Selbstausprobieren – das Herzzeitvolumen steigt dabei um bis zu 80 Prozent.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/1400058/'
  },
  // ============ AUSSTATTUNG (8) ============
  {
    id: 'ihht',
    name: 'IHHT – Hypoxietraining',
    category: 'Ausstattung',
    emoji: '🫁',
    short: 'Intervall-Hypoxie-Hyperoxie-Training: im Liegen abwechselnd sauerstoffarme und sauerstoffangereicherte Luft atmen, überwacht über die Sättigung. Mehrere kleine kontrollierte Studien bei Kranken und Älteren, uneinheitliche Ergebnisse – für Gesunde nicht belegt.',
    benefits: [
      'Nutzt den Sauerstoffsensor HIF, dessen Entdeckung 2019 mit dem Medizin-Nobelpreis ausgezeichnet wurde',
      'Bessere Gehstrecke bei Long-Covid-Patienten in stationärer Reha: 91,7 gegenüber 32,6 Meter (145 Patienten, nicht randomisiert, unverblindet)',
      'Bessere kognitive Testwerte und Gehstrecke bei geriatrischen Patienten gegenüber Scheinbehandlung (34 Patienten, randomisiert, doppelblind)',
      'Weniger Komplikationen nach Bypass-Operation nach hypoxisch-hyperoxischer Vorbehandlung: 23,3 gegenüber 41,1 Prozent (120 Patienten, randomisiert)',
      'Deutlich niedrigerer Blutdruck bei metabolischem Syndrom über 3 Wochen (65 Patienten, randomisiert, Scheinbehandlung)',
      'In den Studien gut verträglich, auch bei Patienten bis 92 Jahren, mit laufender Überwachung der Sauerstoffsättigung',
      'Die Mitochondrien-Erzählung ist eine Hypothese aus Zell- und Tiermodellen, am Menschen nicht direkt nachgewiesen'
    ],
    indication: [
      'Erschöpfung nach Long Covid (in Reha-Kontext untersucht)',
      'Belastbarkeit und Kognition in hohem Alter',
      'Metabolisches Syndrom (Blutdruck, Blutfette)',
      'Vorbehandlung vor Herzoperationen (klinischer Kontext)'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/39559920/',
    note: 'Kein Arzneimittel und keine Kassenleistung; Selbstzahlerleistung mit Medizinprodukten, die Einweisung und laufende Überwachung der Sauerstoffsättigung voraussetzen. Die Studien sind klein (21 bis 145 Teilnehmer), kurz (3 bis 7 Wochen) und überwiegend an Kranken oder Hochaltrigen; eine systematische Übersicht über 38 Arbeiten hält fest, dass keine Studie eine längere Lebenserwartung beim Menschen belegt. Nicht geeignet bei frischem Herzinfarkt, instabiler Herzerkrankung, unkontrolliertem Bluthochdruck, schweren Lungenerkrankungen, Sichelzellanämie, akuten Infekten und in der Schwangerschaft; bei Vorerkrankungen nur ärztlich begleitet.',
    podcasts: [
      { title: 'IHHT: Das Höhentraining im Faktencheck', spotify: '0bFNeYXib0O5MmSgVVTiTW', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 71) · mit Paul & Paula. Was im Gerät wirklich passiert: Hypoxie-Phasen bei neun bis fünfzehn Prozent Sauerstoff im Wechsel mit sauerstoffangereicherter Erholungsluft, gesteuert über ein Fingerclip-Oximeter. Was am Zell-Kraftwerk-Training belegt ist – und was Studio-Poesie. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 09.09.2026, 10:00)' }
    ]
  },
  {
    id: 'vns-analyse',
    name: 'VNS-Analyse (HRV)',
    category: 'Ausstattung',
    emoji: '📈',
    short: 'Messung der Herzfrequenzvariabilität (HRV) zur Einschätzung des vegetativen Nervensystems. Die HRV reagiert auf Stress und hängt mit dem Herz-Kreislauf-Risiko zusammen; aussagekräftig ist vor allem der Verlauf unter gleichen Bedingungen, nicht der Einzelwert.',
    benefits: [
      'Macht Stress- und Erholungszustand messbar – im Verlauf aussagekräftiger als als Einzelwert',
      'Zeigt vor allem die Aktivität des Vagusnervs; die angezeigte Sympathikus/Parasympathikus-Balance (LF/HF) ist methodisch umstritten',
      'Basis für HRV-Biofeedback, das in 58 randomisierten Studien kleine bis mittlere Effekte zeigte',
      'Verlaufskontrolle für Training und Stressbewältigung'
    ],
    indication: [
      'Stress',
      'Erholung und Regeneration',
      'Schlafprobleme',
      'Sport-Performance'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/29486547/'
  },
  {
    id: 'infrarot-a',
    name: 'Infrarot-A (wIRA)',
    category: 'Ausstattung',
    emoji: '🔆',
    short: 'Wassergefilterte Infrarot-A-Strahlung dringt tief ins Gewebe ein und erhöht dort Temperatur und Sauerstoffdruck. Für die Wundheilung gibt es mehrere randomisierte Studien, für Schmerzen kleinere; für Regeneration bei Gesunden oder Verjüngung keine.',
    benefits: [
      'Erhöht Gewebetemperatur, Durchblutung und Sauerstoffpartialdruck im Gewebe (in Studien in 2 cm Tiefe gemessen)',
      'Beschleunigt Wundheilung – mehrere randomisierte Studien bei Operationswunden, Verbrennungen und Beingeschwüren',
      'Linderung bei Wundschmerz; bei Fibromyalgie als milde Ganzkörperhyperthermie in einer scheinkontrollierten Studie',
      'Ohne UV-Strahlung; ob Infrarot A die Hautalterung fördert, wird diskutiert'
    ],
    indication: ['Wundheilung', 'Schmerzen', 'Verspannungen'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/27408610/',
    podcasts: [
      { title: 'Ganzkörperhyperthermie & Infrarot: Die Wärme-Therapie im Faktencheck', spotify: '1z2wsgjkeNkKwJYdo4mCdW', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 73) · mit Paul & Paula. Sauna, Infrarotkabine und medizinische Ganzkörperhyperthermie im Vergleich – und warum wassergefiltertes Infrarot A (wIRA) heute das Mittel der Wahl ist, wenn die Kerntemperatur kontrolliert angehoben werden soll. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 11.09.2026, 10:00)' }
    ]
  },
  {
    id: 'bioadaptive-impuls',
    name: 'Bioadaptive Impulsanwendung',
    category: 'Ausstattung',
    emoji: '⚡',
    short: 'Elektrostimulation über die Haut, bei der das Gerät den Hautwiderstand misst und die Impulse laufend anpasst. Kurzfristige Schmerzlinderung ist für die verwandte TENS gut belegt; für die adaptiven Geräte gibt es wenige Studien, die einzige scheinkontrollierte fand keinen Vorteil gegenüber Schein.',
    benefits: [
      'Kurzfristige Schmerzlinderung während und nach der Anwendung (für TENS in 381 Studien belegt)',
      'Positive Einzelstudien nach Knie-OP und bei Plantarfasziitis – ohne Scheinkontrolle',
      'Nicht-invasiv & medikamentenfrei',
      'Sinnvoll als Ergänzung zu aktiven Maßnahmen, nicht als alleinige Behandlung'
    ],
    indication: [
      'Rückenschmerzen',
      'Chronische Schmerzen (ergänzend)',
      'Verspannungen'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/34884273/'
  },
  {
    id: 'espinebot',
    name: 'eSpineBot',
    category: 'Ausstattung',
    emoji: '🦴',
    short: 'Computergesteuerte Liege, die Vibration, rhythmische Beschleunigung, Luftdruckmassage, sanfte Traktion und Wärme kombiniert. Für das Gerät gibt es keine veröffentlichte kontrollierte Studie; Traktion war bei Kreuzschmerz nicht besser als eine Scheinbehandlung.',
    benefits: [
      'Entspannende, nicht-invasive Anwendung im Liegen, nach Anbieterangaben 20 bis 50 Minuten',
      'Einzelbausteine mit kleinen Effekten als Ergänzung: Wärme und Massage in Kombination mit aktivierenden Maßnahmen (Leitlinie Kreuzschmerz)',
      'Vibration zeigte als aktives Training auf der Platte in einer Meta-Analyse Schmerzlinderung bei chronischem Kreuzschmerz – passive Anwendung im Liegen nicht untersucht',
      'Keine Belege für Mobilisierung einzelner Wirbelsegmente oder Entlastung der Bandscheiben'
    ],
    indication: [
      'Verspannungen im Rücken',
      'Entspannung',
      'Ergänzung zu aktiver Bewegungstherapie'
    ],
    link: 'https://www.physio-deutschland.de/patienten-interessierte/physiotherapeutensuche.html'
  },
  {
    id: 'hyperthermie',
    name: 'Ganzkörperhyperthermie',
    category: 'Ausstattung',
    emoji: '🌡️',
    short: 'Kontrollierte Anhebung der Körperkerntemperatur in den Fieberbereich, meist mit wassergefiltertem Infrarot A. In kleinen scheinkontrollierten Studien wirksam bei Fibromyalgie-Schmerz und Depression; für „Entgiftung" und chronische Infekte gibt es keine Daten.',
    benefits: [
      'Imitiert kontrolliert „natürliches Fieber" (Kerntemperatur meist 38 bis 39 Grad)',
      'Aktivierung von Hitzeschockproteinen, Gefäßerweiterung, passives Kreislauftraining',
      'Bei Fibromyalgie in einer scheinkontrollierten Studie weniger Schmerz, auch noch in Woche 30',
      'Bei Depression senkte eine einzige Sitzung die Symptome in einer doppelblinden Studie über 6 Wochen – eine zweite Studie fand keinen Vorteil gegenüber Schein',
      'Wird für Entgiftung und Immunfunktion beworben – dafür fehlen kontrollierte Daten'
    ],
    indication: [
      'Fibromyalgie / chronischer Schmerz',
      'Depression (in Studien)',
      'Onkologie-Begleitung (Klinik)',
      'Regeneration und Wohlbefinden'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/37109279/',
    podcasts: [
      { title: 'Ganzkörperhyperthermie & Infrarot: Die Wärme-Therapie im Faktencheck', spotify: '1z2wsgjkeNkKwJYdo4mCdW', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 73) · mit Paul & Paula. Die Wärme-Leiter von der Sauna über die Infrarotkabine bis zur medizinischen Ganzkörperhyperthermie, bei der die Kerntemperatur kontrolliert auf achtunddreißig bis neununddreißig Grad angehoben wird – künstliches Fieber unter Aufsicht, meist mit wassergefiltertem Infrarot A. Überraschung der Folge: Die Wärme hat einige der saubersten Studien des Feldes. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 11.09.2026, 10:00)' }
    ]
  },
  {
    id: 'vitalpilze-shop',
    name: 'Vitalpilze & Nahrungsergänzung',
    category: 'Ausstattung',
    emoji: '🍄',
    short: 'Vitalpilze wie Reishi, Cordyceps, Löwenmähne und Chaga sowie weitere Nahrungsergänzungsmittel. Einzelne Effekte sind in kleinen Studien belegt, große Versprechen wie Krebs- oder Immunwirkung nicht; Qualität und Inhalt der Produkte schwanken stark.',
    benefits: [
      'Reishi-Extrakt besserte in einer doppelblinden Studie Erschöpfung gegenüber Placebo (132 Patienten)',
      'Löwenmähne verbesserte in einer kleinen Studie Gedächtnistests bei leichter kognitiver Beeinträchtigung – nur solange eingenommen',
      'Beratung vor Ort kann helfen, Fruchtkörper, Myzel und Extrakte zu unterscheiden',
      'Qualitätsmerkmale: lateinischer Artname, Angabe Fruchtkörper oder Myzel, Analysezertifikat mit Beta-Glucan, Stärke und Schadstoffen',
      'Reishi, Cordyceps, Löwenmähne, Chaga u. a.'
    ],
    indication: [
      'Erschöpfung (Reishi, kleine Studienlage)',
      'Konzentration (Löwenmähne, kleine Studienlage)',
      'Ausdauer (Cordyceps, gemischte Daten)'
    ],
    link: 'https://www.bvl.bund.de/SharedDocs/Pressemitteilungen/01_lebensmittel/2015/2015_02_06_pi_Vitalpilze.html'
  },
  {
    id: 'screenings',
    name: 'Screenings',
    category: 'Ausstattung',
    emoji: '🧪',
    short: 'Kompakte Blutanalysen, oft aus Kapillarblut, zu Fettsäureprofil, Nährstoffstatus und weiteren Werten als Selbstzahlerleistung. Die Messung kann bei validierter Methode verlässlich sein; allgemeine Gesundheitschecks senkten in einer Cochrane-Übersicht aus 17 Studien die Sterblichkeit aber nicht.',
    benefits: [
      'Kapillarblutproben stimmten bei validierter Methode gut mit Venenblut überein (Vitamin D: 90 Prozent der Werte innerhalb von 20 Prozent)',
      'Omega-3-Index: höhere Spiegel in 17 Kohorten mit 15 bis 18 Prozent niedrigerer Sterblichkeit verbunden – Zusammenhang, kein Wirknachweis',
      'Verlaufskontrolle, wenn aus einem Wert eine konkrete Maßnahme folgt',
      'Ergänzung zum Kassen-Check-up (18 bis 34 einmal, ab 35 alle drei Jahre), nicht Ersatz'
    ],
    indication: ['Erstcheck', 'Prävention', 'Verlaufskontrolle'],
    link: 'https://www.igel-monitor.de/'
  },

  // ============ SCHWERPUNKTE / LEISTUNGEN (7) ============
  {
    id: 'praevention-epigenetik',
    name: 'Prävention, Epigenetik & Genetik',
    category: 'Schwerpunkt',
    emoji: '🧬',
    short: 'Prävention mit Blick auf Gene und Epigenetik: Risikoprofil und biologisches Alter aus Gen- und Methylierungsmustern. Epigenetische Uhren sind ein starkes Forschungswerkzeug, für die Einzelperson aber ungenau; dass ein besserer Wert Krankheiten verhindert, ist nicht gezeigt.',
    benefits: [
      'Ausführliche Risikoeinschätzung aus Familiengeschichte, Laborwerten und bei klarer Indikation Genetik',
      'Lebensstil wirkt nachweislich: fünf Niedrigrisiko-Faktoren gehen in großen Kohorten mit deutlich längerer Lebenserwartung einher',
      'Epigenetische Uhren sagen in Studien Sterblichkeit vorher; Kalorienrestriktion verlangsamte in einer großen RCT das gemessene Alterungstempo',
      'Langfristige Prävention – die gesetzliche Basis ist der Check-up ab 35 alle drei Jahre'
    ],
    indication: ['Prävention', 'Anti-Aging', 'Familiäre Risiken', 'Longevity'],
    link: 'https://www.gfhev.de/diagnostik-und-genetische-beratung/genetische-beratungsstellen'
  },
  {
    id: 'long-covid',
    name: 'Long Covid & Post-Vac',
    category: 'Schwerpunkt',
    emoji: '🦠',
    short: 'Einordnung und Begleitung anhaltender Beschwerden nach COVID-19 oder im zeitlichen Zusammenhang mit einer Impfung. Belegt sind Verhaltenstherapie, kombinierte Reha und dosiertes Training; eine ursächliche Therapie gibt es nicht, Kassenversorgung über die Long-COVID-Richtlinie.',
    benefits: [
      'Strukturierte Analyse der Symptome mit Abklärung anderer Ursachen',
      'Online-Verhaltenstherapie und kombinierte körperliche und psychische Reha bessern Symptome (moderate Evidenz, 24 randomisierte Studien)',
      'Dosiertes Intervalltraining verbessert die körperliche Funktion – bei Belastungsintoleranz (PEM) nur mit Pacing',
      'Begleitung über mehrere Wochen',
      'Geräteverfahren wie Hypoxietraining oder Hyperthermie: erste Signale, aber keine randomisierten Studien'
    ],
    indication: ['Fatigue', 'Atemnot', 'Brain Fog', 'Belastungsintoleranz'],
    link: 'https://www.bmg-longcovid.de/service'
  },
  {
    id: 'chronische-schmerzen',
    name: 'Chronische Schmerzen',
    category: 'Schwerpunkt',
    emoji: '💢',
    short: 'Schmerz, der länger als 3 Monate anhält. Am besten belegt ist die multimodale Schmerztherapie aus Bewegung, psychologischen Verfahren und Aufklärung im interdisziplinären Team – wirksamer als die übliche Versorgung, im Mittel aber mit kleinen Effekten.',
    benefits: [
      'Multimodaler Ansatz: Bewegung, psychologische Verfahren und Aufklärung, abgestimmt in einem Team aus mehreren Fachrichtungen',
      'Bei chronischem Kreuzschmerz wirksamer als die übliche Versorgung (Cochrane-Analyse, 41 Studien), mit kleinen mittleren Effekten',
      'Bewegungstherapie senkt den Schmerz bei chronischem Kreuzschmerz klinisch relevant (249 Studien)',
      'Stationär oder tagesklinisch als Kassenleistung möglich, wenn die Voraussetzungen erfüllt sind',
      'Apparative Verfahren wie Elektrostimulation oder Wärme allenfalls als Ergänzung zu aktiven Maßnahmen'
    ],
    indication: ['Rückenschmerzen', 'Fibromyalgie', 'Migräne', 'Gelenkschmerzen'],
    link: 'https://arztsuche.116117.de/'
  },
  {
    id: 'stoffwechsel-autoimmun',
    name: 'Stoffwechsel & Autoimmun',
    category: 'Schwerpunkt',
    emoji: '🔄',
    short: 'Begleitprogramme für Stoffwechsel- und Autoimmunerkrankungen mit Lebensstil, Mikronährstoffen und Verfahren wie Hypoxietraining oder Hyperthermie. Lebensstil ist bei Prädiabetes stark belegt, Vitamin D senkte neue Autoimmunerkrankungen; für Hypoxietraining und Hyperthermie bei Autoimmunerkrankungen fand sich keine randomisierte Studie.',
    benefits: [
      'Lebensstilprogramm senkte bei erhöhtem Blutzucker neue Diabetesfälle um 58 Prozent (Diabetes Prevention Program)',
      'Vitamin D senkte in der VITAL-Studie neu auftretende Autoimmunerkrankungen um 22 Prozent',
      'Selen senkt bei Hashimoto die Schilddrüsenantikörper – Verlaufseffekt offen, Ergänzung nur ärztlich abgestimmt',
      'Hypoxie-Hyperoxie-Training senkte bei metabolischem Syndrom den Blutdruck; für Autoimmunerkrankungen nicht untersucht'
    ],
    indication: [
      'Insulinresistenz und Prädiabetes',
      'Übergewicht',
      'Hashimoto (ergänzend zur ärztlichen Therapie)',
      'Rheuma (ergänzend zur ärztlichen Therapie)'
    ],
    link: 'https://arztsuche.116117.de/'
  },
  {
    id: 'wirbelsaeule',
    name: 'Wirbelsäulenregeneration',
    category: 'Schwerpunkt',
    emoji: '🧘',
    short: 'Gerätegestützte Programme für Rücken und Nacken aus Vibrationsliege mit Traktion, Infrarot-A-Wärme und elektrischen Impulsen. Belegt ist bei chronischen Rückenschmerzen vor allem aktive Bewegungstherapie; von Traktion mit Gerät und elektrischer Nervenstimulation rät die Leitlinie ab, eine Regeneration der Wirbelsäule ist nicht belegt.',
    benefits: [
      'Wärme lindert akute und subakute Kreuzschmerzen kurzfristig, besonders zusammen mit Übungen (Cochrane)',
      'Kann als Einstieg in aktive Bewegungstherapie dienen – die bei chronischen Rückenschmerzen am besten belegte Maßnahme',
      'Traktion war nicht besser als Scheinbehandlung; elektrische Nervenstimulation bei chronischem Kreuzschmerz nicht gestützt',
      'Keine Belege für Regeneration von Bandscheiben oder Wirbelstrukturen'
    ],
    indication: ['Rücken', 'Nacken', 'Verspannungen', 'Ergänzung zu Bewegungstherapie'],
    link: 'https://www.physio-deutschland.de/patienten-interessierte/physiotherapeutensuche.html'
  },
  {
    id: 'mikronaehrstoffe',
    name: 'Mikronährstoff-Beratung',
    category: 'Schwerpunkt',
    emoji: '💊',
    short: 'Beratung, welche Vitamine und Mineralstoffe tatsächlich fehlen. Gut belegt ist gezielte Ergänzung bei nachgewiesenem Mangel und Folsäure bei Kinderwunsch; der Nutzen eines Laborscreenings ohne Beschwerden ist laut IGeL-Monitor unklar.',
    benefits: [
      'Gezielte Messung bei Beschwerden oder Risikofaktoren statt Rundum-Screening',
      'Vermeidet Mehrfach-Einnahme und prüft Wechselwirkungen mit Medikamenten',
      'Belegt bei Kinderwunsch: Folsäure senkte Neuralrohrdefekte in einer Cochrane-Übersicht deutlich (relatives Risiko 0,31)',
      'Verlaufskontrolle nach gezielter Ergänzung, Obergrenzen im Blick (z. B. Vitamin B6 höchstens 12 mg pro Tag laut EFSA)'
    ],
    indication: [
      'Nachgewiesene Mangelzustände',
      'Erschöpfung mit gemessenem Mangel',
      'Kinderwunsch und Schwangerschaft',
      'Sport'
    ],
    link: 'https://www.vdoe.de/expertenpool.html'
  },
  {
    id: 'gesundheitscoaching',
    name: 'Gesundheitscoaching',
    category: 'Schwerpunkt',
    emoji: '🎯',
    short: 'Strukturierte Begleitung zur Verhaltensänderung bei Bewegung, Ernährung, Stress und Schlaf. Belegt sind kleine Effekte auf Aktivität, Schmerz und Blutdruck; beim Abnehmen zeigen hochwertige Studien kaum einen Effekt, und die Qualität der Angebote schwankt stark.',
    benefits: [
      'Praxistaugliche Routinen durch eigene Ziele, kleine Schritte und regelmäßige Rückmeldung',
      'Mehr körperliche Aktivität, in Meta-Analysen in kleinem Ausmaß belegt',
      'Bei chronischem Schmerz etwas weniger Schmerz und Beeinträchtigung (26 Studien)',
      'Bei Bluthochdruck niedrigere Werte in randomisierten Studien (12 Studien)',
      'Verbindet Lifestyle, Ernährung und Bewegung – ersetzt aber keine ärztliche oder psychotherapeutische Behandlung'
    ],
    indication: [
      'Stressmanagement',
      'Bewegungsmangel',
      'Lifestyle',
      'Bluthochdruck (begleitend)'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/38494402/'
  },

  // ============ NETZWERK-PARTNER (5) ============
  {
    id: 'aerztliche-leistungen',
    name: 'Ärztliche Leistungen',
    category: 'Netzwerk',
    emoji: '👨‍⚕️',
    short: 'Ärztliche Sprechstunden mit Schwerpunkt Prävention und Lebensstil, meist als Privat- oder Selbstzahlerleistung. „Funktionelle“ und „regenerative Medizin“ sind keine ärztlichen Weiterbildungsbezeichnungen; zum Konzept gibt es eine Kohortenstudie mit kleinem Effekt und eine negative kleine randomisierte Studie.',
    benefits: [
      'Mehr Zeit für Anamnese, Lebensstil und die Einordnung von Befunden',
      'Rezepte, Überweisungen und Zweitmeinung; bei bestimmten planbaren Eingriffen ist die Zweitmeinung Kassenleistung',
      'Qualifikation prüfbar über Facharzt- und Zusatzbezeichnungen der Landesärztekammer (z. B. Ernährungsmedizin, Sportmedizin)',
      'Abrechnung nach Gebührenordnung für Ärzte mit Kosteninformation in Textform und schriftlichem Vertrag'
    ],
    indication: ['Komplexe Krankheitsbilder', 'Zweitmeinung', 'Diagnostik-Bedarf'],
    link: 'https://arztsuche.116117.de/'
  },
  {
    id: 'genanalysen',
    name: 'Genanalysen',
    category: 'Netzwerk',
    emoji: '🧬',
    short: 'Analyse von Genvarianten aus Speichel oder Blut. Belegt ist der Nutzen vor allem bei erblichen Erkrankungen und in der Pharmakogenetik vor bestimmten Medikamenten; Ernährungs-, Sport- und polygene Risikoprofile haben in Studien keinen Zusatznutzen gezeigt.',
    benefits: [
      'Pharmakogenetik: In einer europäischen Studie mit 6.944 Patienten sanken klinisch relevante Nebenwirkungen nach einem 12-Gen-Panel von 28,6 auf 21,5 Prozent (Lancet 2023)',
      'Einzelne Tests sind Kassenleistung, etwa die DPD-Testung vor Chemotherapie mit Fluoropyrimidinen seit 1. Oktober 2020',
      'Abklärung erblicher Erkrankungen bei Verdacht oder familiärer Häufung, mit ärztlicher Beratung nach Gendiagnostikgesetz',
      'Ernährungs- und Sport-Genetik: in zwei randomisierten Studien (DIETFITS, Food4Me) kein Zusatznutzen gegenüber Beratung ohne Gene'
    ],
    indication: ['Personalisierte Medizin', 'Prävention', 'Familiäre Risiken'],
    link: 'https://www.gfhev.de/diagnostik-und-genetische-beratung/genetische-beratungsstellen'
  },
  {
    id: 'persoenlichkeitsdiagnostik',
    name: 'Persönlichkeitsdiagnostik',
    category: 'Netzwerk',
    emoji: '🧠',
    short: 'Fragebogenbasierte Beschreibung von Persönlichkeitsmerkmalen für Selbsterkenntnis und Coaching. Am besten erforscht ist das Fünf-Faktoren-Modell; für viele kommerzielle Typen- und Profiltests fehlen unabhängige Validierungsstudien.',
    benefits: [
      'Macht Werte, Stärken und Verhaltensmuster zum Gesprächsthema',
      'Basis für Coaching und Karriereplanung – als Anstoß, nicht als Urteil',
      'Big-Five-Merkmale hängen in großen Meta-Analysen mit Gesundheit, Beruf und Lebenserwartung zusammen',
      'Zeigt, wie jemand typischerweise auf Belastung reagiert – ohne Krankheiten festzustellen',
      'Qualitätsmaßstab für berufsbezogene Verfahren: DIN 33430'
    ],
    indication: ['Coaching', 'Karriereentwicklung', 'Stressbewältigung', 'Teams'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/41359557/'
  },
  {
    id: 'epigenetik-coach',
    name: 'Epigenetik-Coaching',
    category: 'Netzwerk',
    emoji: '🔬',
    short: 'Lebensstil-Begleitung mit Messung epigenetischer Uhren vorher und nachher. Dass Ernährung und Omega-3 die Uhren in randomisierten Studien bewegen, ist gezeigt; ob das Krankheiten verhindert, nicht. Klassische Uhren schwanken zwischen Messungen derselben Probe um bis zu 9 Jahre.',
    benefits: [
      'Strukturiertes Programm zu Ernährung, Bewegung, Schlaf und Stress – Hebel, die auch unabhängig von der Messung gut belegt sind',
      'Neuere Uhren (z. B. GrimAge) sagen Sterblichkeit und Krankheiten in großen Studien vorher',
      'In randomisierten Studien verlangsamten Kalorienrestriktion (CALERIE) und Omega-3 (DO-HEALTH) das gemessene Alterungstempo – kleine Effekte',
      'Verlaufsmessung nur mit derselben Methode im selben Labor sinnvoll; Messunsicherheit beachten'
    ],
    indication: ['Anti-Aging', 'Prävention', 'Lifestyle-Optimierung'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/30669119/'
  },
  {
    id: 'mikronaehrstoff-coach',
    name: 'Mikronährstoff-Coaching',
    category: 'Netzwerk',
    emoji: '🌿',
    short: 'Begleitete Beratung zu Ernährung und Mikronährstoffen über mehrere Termine. Einzelberatung durch qualifizierte Ernährungsfachkräfte ist gut untersucht; Gen-basierte Anpassungen und Detox-Programme sind es nicht. Die Bezeichnung „Coach“ ist nicht geschützt.',
    benefits: [
      'Einzelberatung durch qualifizierte Fachkräfte verbesserte in einer Übersicht aus 26 randomisierten Studien Blutzucker, Ernährungsqualität und Gewicht',
      'Laborgestützt: gezielte Korrektur eines nachgewiesenen Mangels, etwa Eisen bei Müdigkeit ohne Blutarmut',
      'Räumt überlappende Präparate auf und prüft Wechselwirkungen mit Medikamenten',
      'Gen-Information brachte in der Food4Me-Studie keinen Zusatznutzen gegenüber Beratung ohne Gene'
    ],
    indication: [
      'Nachgewiesene Mangelzustände',
      'Erschöpfung mit gemessenem Mangel',
      'Sport',
      'Ernährungsbedingte Erkrankungen (ärztlich begleitet)'
    ],
    link: 'https://www.vdoe.de/expertenpool.html'
  },

  // ============ EXTERN (1) ============
  {
    id: 'inuspherese',
    name: 'INUSpherese® (Blut-Apherese)',
    category: 'Extern',
    emoji: '🩸',
    short: 'Blutwäsche per Doppelfiltrations-Apherese, die Umweltgifte, Mikroplastik und Entzündungsstoffe aus dem Blut filtern soll. Die Technik ist etablierte Medizin, ein Nutzen für die beworbenen Anwendungen ist nicht in kontrollierten Studien belegt.',
    benefits: [
      'Beruht auf der etablierten Doppelfiltrations-Apherese, die in der Klinik für klar definierte Erkrankungen eingesetzt wird',
      'Im Filterrückstand fanden Dresdner Forscher 14 Substanzen mit kunststoffähnlicher Signatur – qualitativ, ohne Mengenangabe',
      'In unkontrollierten Auswertungen bei Long Covid sanken Autoantikörper, Blutfette und Entzündungsmarker bei Patienten, die sich besser fühlten',
      'Verfahren wird ausschließlich von spezialisierten ärztlichen Zentren angeboten'
    ],
    indication: [
      'Schwermetallbelastung',
      'Chronische Entzündungen',
      'CFS/ME',
      'Umweltkrankheiten',
      'Long Covid'
    ],
    link: 'https://www.inus.de/',
    note: 'INUSpherese® wird nicht im Munich Health Center angeboten – Verfahren der INUS Medical Center GmbH (Alzenau). Keine randomisierten Studien; die Deutsche Gesellschaft für Nephrologie lehnt Apherese bei Long-/Post-COVID außerhalb von Studien ab. Für Leistungssportler: Apherese fällt unter die WADA-Verbotsliste (M1).',
    podcasts: [
      { title: 'INUSpherese: Die Blutwäsche im Faktencheck', spotify: '3hY3H6CWvFVYTiY7AlsaeS', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 68) · mit Paul & Paula. Der seriöse Kern zuerst: Therapeutische Apherese ist seit Jahrzehnten Klinikroutine – Lipid-Apherese bei familiärer Hypercholesterinämie ist kassenfinanziert und leitliniengerecht. Die Folge zieht die Grenze zwischen dieser etablierten Medizin und dem, was die INUSpherese darüber hinaus verspricht. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 06.09.2026, 10:00)' }
    ]
  },
  // ============ BIOHACKING-METHODEN ============
  {
    id: 'hbot',
    name: 'Hyperbare Sauerstofftherapie (HBOT)',
    category: 'Biohacking',
    emoji: '🤿',
    short: 'Reiner Sauerstoff unter Überdruck in einer Druckkammer. Belegt ist der kurzfristige Nutzen beim diabetischen Fußulkus; die Longevity-Daten stammen aus kleinen Studien eines einzigen Zentrums.',
    benefits: [
      'Stark erhöhte Sauerstoffversorgung von Gewebe und Wunden',
      'Fördert Gefäßneubildung und Stammzellmobilisierung',
      'Eine Studie (Hachmo 2020) zeigte längere Telomere und weniger seneszente Zellen',
      'Für Sport-Regeneration und Muskelkater zeigten randomisierte Studien keinen signifikanten Nutzen'
    ],
    indication: ['Regeneration', 'Wundheilung', 'Long Covid', 'Anti-Aging'],
    note: 'Wirkung stark protokollabhängig; medizinische HBOT gehört in erfahrene Hände. Longevity-Anwendungen sind Selbstzahlerleistungen ohne anerkannte Indikation.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33206062/',
    podcasts: [
      {
        title: 'Die hyperbare Sauerstofftherapie: Die Druckkammer im Faktencheck',
        spotify: '2yiVzU7q52Y9VmBAp0Eucb',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 70) · mit Paul & Paula. Die Physik dahinter: Bei zwei bis drei Atmosphären und reinem Sauerstoff löst sich das Zehn- bis Fünfzehnfache an Sauerstoff physikalisch im Plasma – damit erreicht er auch schlecht durchblutetes Gewebe. Die Folge sortiert den etablierten Teil (Wundheilung, anerkannte Indikationen) von Forschung und Marketing. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 08.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'rotlicht-pbm',
    name: 'Rotlicht / Photobiomodulation (PBM)',
    category: 'Biohacking',
    emoji: '🔴',
    short: 'Rotes und nahinfrarotes Licht (ca. 630–850 nm), gedacht zur Anregung der Mitochondrien. Viele Studien, wenig Ergebnissicherheit: moderat belegt sind nur einzelne Endpunkte wie Haardichte, Kniearthrose und Fibromyalgie.',
    benefits: [
      'Mechanismus: Licht wird von der Cytochrom-c-Oxidase der Mitochondrien aufgenommen (Übersicht de Freitas & Hamblin 2016)',
      'Hautalterung und Wundheilung: bisher keine belastbaren Belege',
      'Moderat belegt: weniger Funktionseinschränkung bei Kniearthrose und weniger Fatigue bei Fibromyalgie (Umbrella-Review Son 2025)',
      'Nicht-invasiv, gut verträglich, zuhause per Panel nutzbar'
    ],
    indication: ['Haut & Anti-Aging', 'Regeneration', 'Schmerzen', 'Energie', 'Wundheilung'],
    note: 'Verwandt mit der vor Ort angebotenen Infrarot-A-Anwendung (wIRA); Heim-Panels arbeiten meist mit LED.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/28070154/',
    podcasts: [
      {
        title: 'Rotlichttherapie: Photobiomodulation im Faktencheck',
        spotify: '7Fax0v8xEsuNLpV2b8IjH5',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 76) · mit Paul & Paula. Was rotes und nahinfrarotes Licht in der Zelle wirklich anstellt – und was das Panel von der Wärmekabine unterscheidet. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 14.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'sauna-kaelte',
    name: 'Sauna & Kälte (Hormesis)',
    category: 'Biohacking',
    emoji: '🧊',
    short: 'Zwei Hormesis-Reize: Hitze (Sauna) und Kälte (Eisbad). Häufiges Saunieren ist in einer großen Beobachtungskohorte mit niedrigerer Sterblichkeit verbunden; für Kälte zeigen Studien bisher keinen Regenerationsvorteil gegenüber Ausruhen.',
    benefits: [
      'Sauna: in der finnischen KIHD-Kohorte mit weniger plötzlichem Herztod und niedrigerer Sterblichkeit verbunden (Beobachtung, Laukkanen 2015)',
      'Sauna zusätzlich zum Sport: im RCT kein Zusatzeffekt auf die Herzratenvariabilität (Lee 2025)',
      'Kälte: hebt Noradrenalin und Dopamin akut deutlich an',
      'Eisbad zur Regeneration: in einer Netzwerk-Metaanalyse nicht besser als passive Erholung (Jin 2026)'
    ],
    indication: ['Herz-Kreislauf', 'Regeneration', 'Stimmung', 'Stressresistenz', 'Longevity'],
    note: 'Vorsicht bei Herz-Kreislauf-Erkrankungen und in der Schwangerschaft – vorher ärztlich abklären. Kälte langsam herantasten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/25705824/',
    podcasts: [
      {
        title: 'Eisbaden & Kälte: Der Kälte-Reiz im Faktencheck',
        spotify: '3Mp0IJC6SAYgdodSAqK3g9',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 64) · mit Paul & Paula. Der kontrollierte Alarm: In der Šrámek-Studie stieg bei Immersion in vierzehn Grad kaltem Wasser das Noradrenalin auf das Fünffache, das Dopamin um rund zweihundertfünfzig Prozent – und der Dopamin-Anstieg hält Stunden. Dazu die Überraschung für Sportler: Beim Kältebad ist das Timing entscheidend. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 03.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'nad-infusion',
    name: 'NAD+-Infusion',
    category: 'Biohacking',
    emoji: '💧',
    short: 'NAD+ über die Vene ist am Menschen machbar, und in einer chinesischen Studie mit 180 Herzschwäche-Patienten besserte sich die Pumpleistung des Herzens stärker als unter Placebo. Für Energie, Fokus oder Anti-Aging gibt es keine kontrollierte Studie; infundiertes NAD+ wird im Blut rasch zerlegt, und viele spüren während der Infusion Druck auf der Brust und Übelkeit.',
    benefits: [
      'Herzschwäche nach ischämischer Kardiomyopathie: Auswurfleistung nach 1 Monat 45,44 gegenüber 42,44 Prozent unter Placebo, p = 0,024; 7 Tage NAD+ über die Vene zusätzlich zur Standardtherapie (Mensch, randomisiert, 180 Patienten, ein Zentrum, China, 2026).',
      'Trend zu weniger schweren Herz- und Hirnereignissen über 6 Monate, 14,6 gegenüber 24,7 Prozent, nicht signifikant (dieselbe Studie, 2026).',
      'Keine bedeutsamen Veränderungen bei ALT, AST, CRP, Nierenwerten und TSH über 30 Tage nach 4 Infusionstagen; die alkalische Phosphatase sank, blieb aber im Normbereich (Mensch, 6 NAD+-Empfänger, retrospektiv, 2026).',
      'Bei langsamer Gabe über 6 Stunden keine Nebenwirkungen beobachtet (Mensch, 8 Männer mit NAD+, 3 Kontrollen, Pilotstudie 2019).',
      'Mechanistische Grundlage aus Tierversuchen: Anhebung von NAD+ verbesserte in Nagetieren häufig Stoffwechsel, Mitochondrien und Entzündungswerte (systematische Übersicht mit 80 Nagetierstudien, 2026).'
    ],
    indication: [
      'Energie/Fatigue',
      'Regeneration',
      'Anti-Aging',
      'Fokus',
      'Sucht-Recovery (experimentell)'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/31572171/',
    note: 'Langsame Infusion nötig: Beschwerden wie Übelkeit, Bauchkrämpfe oder Druck auf der Brust sind häufig und enden mit der Infusion. Kein zugelassenes NAD+-Arzneimittel in der EU; nur ärztlich. Für Wettkampfsportler: Infusionen über 100 ml in 12 Stunden sind außerhalb von Klinikbehandlungen nach WADA-Liste verboten.'
  },
  {
    id: 'tpe-plasmaaustausch',
    name: 'Therapeutischer Plasmaaustausch (TPE)',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Das eigene Blutplasma wird ausgetauscht – die Idee dahinter: Alterungs- und Entzündungsfaktoren aus dem Blut entfernen („Plasma-Verdünnung"). Medizinisch etabliert bei bestimmten Erkrankungen, als Longevity-Verfahren experimentell.',
    benefits: [
      'Soll altersbedingt erhöhte Blutfaktoren verdünnen (Hypothese aus Mausversuchen)',
      'Tierdaten (Plasma-Verdünnung) zeigten Verjüngungseffekte in Geweben',
      'Wird bei Autoimmun-/neurologischen Erkrankungen medizinisch genutzt',
      'Longevity-Kliniken bieten es als Anti-Aging-Verfahren an – ohne klinischen Wirknachweis'
    ],
    indication: ['Anti-Aging (experimentell)', 'Entzündung', 'Autoimmun (medizinisch)'],
    note: 'Longevity-Nutzung experimentell und teuer; medizinisch etabliert nur für bestimmte Erkrankungen. Verwandt zur INUSpherese. Risiken laut Register der Welt-Apherese-Gesellschaft: Nebenwirkungen bei 8,4 % der ersten und 5,5 % der folgenden Sitzungen, schwere (vor allem Kollaps oder Blutdruckabfall) bei 0,4 %; typisch sind Kribbeln durch das Zitrat und Blutdruckabfall, häufiger bei Albumin als Ersatz. Mit dem Plasma gehen Antikörper und Gerinnungsfaktoren verloren; ein zentraler Venenzugang erhöht die Nebenwirkungsrate (AMBAR: 20,1 % gegenüber 13,1 %). Nur ärztlich.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32474458/'
  },
  {
    id: 'stammzelltherapie',
    name: 'Stammzelltherapie',
    category: 'Biohacking',
    emoji: '🧫',
    short: 'Eigene oder gespendete Stammzellen (z. B. mesenchymal) zur Regeneration von Gelenken, Gewebe und – in Longevity-Kliniken – als systemischer Anti-Aging-Ansatz.',
    benefits: [
      'Blutstammzelltransplantation bei Blutkrankheiten ist etablierte Medizin; 2024 erste US-Zulassung einer mesenchymalen Stromazelltherapie (Kinder mit schwerer Abstoßungsreaktion)',
      'Kniearthrose: Zellinjektionen lindern Schmerzen, in der größten Studie (480 Patienten) aber nicht besser als Kortison – kein Knorpelaufbau im MRT',
      'Gebrechlichkeit im Alter: eine kleine placebokontrollierte Phase-II-Studie, gut verträglich',
      'Anti-Aging bei Gesunden: keine kontrollierte Studie'
    ],
    indication: ['Gelenke/Orthopädie', 'Regeneration', 'Anti-Aging', 'Entzündung'],
    link: 'https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes',
    note: 'Stammzellpräparate sind meist Arzneimittel für neuartige Therapien (ATMP) – nur zugelassen, in genehmigten Studien oder unter der Krankenhausausnahme anwendbar. EMA und die Leitungen der europäischen Arzneimittelbehörden, darunter das Paul-Ehrlich-Institut, warnten am 31.03.2025 vor kommerziellen Angeboten mit nicht zugelassenen Zelltherapien. Dokumentiert sind Erblindung und Todesfälle nach ungeprüften Behandlungen.'
  },
  {
    id: 'exosomen',
    name: 'Exosomen-Therapie',
    category: 'Biohacking',
    emoji: '🧪',
    short: 'Winzige Zell-Botenstoffbläschen transportieren Wachstums- und Reparatursignale – in den Praxen oft aus Pflanzenzellen oder Kulturüberstand, am Menschen untersucht fast nur an Haut und Haaren.',
    benefits: [
      'Übertragen regenerative Signale (Wachstumsfaktoren, microRNA) ohne ganze Zellen',
      'Beliebt für Haut-Rejuvenation und Haarwachstum; für Gelenke keine kontrollierten Humandaten',
      'Entzündungsmodulierend und heilungsfördernd (präklinisch/erste Daten), am Menschen nicht belegt',
      'Als „zellfreie" Alternative zur Stammzelltherapie beworben'
    ],
    indication: ['Haut & Haar', 'Gelenke', 'Regeneration', 'Anti-Aging'],
    note: 'USA: kein Exosomen-Produkt zugelassen (FDA, Stand 2026); die FDA hat Warnbriefe an Hersteller verschickt. EU/Deutschland: kein als Arzneimittel oder Medizinprodukt zugelassenes Exosomen-Produkt bekannt; topisch läuft die Anwendung als Kosmetik, Injektion oder Infusion wäre ein zulassungspflichtiges Arzneimittel. Risiken: Nach Injektion nicht zugelassener Präparate sind anhaltende Knoten, Granulome und Narben beschrieben (Park 2025, 4 Fälle). Nach einer Infusion aus Plazentagewebe fanden sich Bakterien im Blut, u. a. E. coli und Enterobacter (Nebraska 2019, FDA-Warnung). Qualität und Sterilität sind anbieterabhängig.',
    link: 'https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes'
  },
  {
    id: 'prp',
    name: 'PRP (Eigenbluttherapie)',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Plättchenreiches Plasma aus dem eigenen Blut, aufkonzentriert und zurückgespritzt – setzt Wachstumsfaktoren frei für Gelenke, Haut und Haar.',
    benefits: [
      'Nutzt körpereigene Wachstumsfaktoren aus den Blutplättchen',
      'Haarausfall: Meta-Analyse von 43 randomisierten Studien zeigt mehr Haardichte und weniger Haarverlust (mäßige Evidenz)',
      'Bei Sehnenbeschwerden (z. B. Tennisellenbogen) offen – langfristig besser als Kortison, aber nicht besser als Kochsalzlösung',
      'Gut verträglich: meist nur leichte, vorübergehende Schmerzen und Schwellung, keine schweren Nebenwirkungen in 32 randomisierten Studien'
    ],
    indication: ['Gelenke/Sehnen', 'Haarwachstum', 'Haut/Ästhetik', 'Regeneration'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/34812863/',
    note: 'Bei Kniearthrose gilt der Nutzen als widerlegt: Die größte verblindete Studie (RESTORE, JAMA 2021, n=288) fand nach zwölf Monaten weder beim Schmerz noch beim Knorpelvolumen einen Unterschied zu Kochsalzlösung – und auch in 29 von 31 vorab festgelegten Nebenfragen nicht. Für Sehne und Kopfhaut ist die Frage offen, nicht beantwortet. Ärztlich durchführen lassen.'
  },
  {
    id: 'ozontherapie',
    name: 'Ozontherapie',
    category: 'Biohacking',
    emoji: '🅾️',
    short: 'Sauerstoff-Ozon-Gemisch als Injektion, äußerlich oder als Eigenbluttherapie – soll über einen milden oxidativen Reiz körpereigene Schutzsysteme anregen. Für örtliche Schmerzinjektionen gibt es kleine randomisierte Studien, für die systemische Anwendung kaum Daten.',
    benefits: [
      'Kniearthrose: In 7 kontrollierten Studien mit 409 Menschen linderten Ozon-Injektionen Schmerzen kurz- und mittelfristig stärker als Kortison – bei begrenzter Studienqualität',
      'Schulter: 5 randomisierte Studien zeigen Besserung von Schmerz und Funktion, länger anhaltend als unter Kortison',
      'Diabetischer Fuß: kein gesicherter Vorteil bei der Abheilung (Cochrane und Umbrella-Review 2026)',
      'Große Eigenbluttherapie bei Long-/Post-COVID: keine Studie vorhanden, IGeL-Monitor bewertet sie als unklar'
    ],
    indication: ['Immun/Infekte', 'Durchblutung', 'Wundheilung', 'Erschöpfung'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/42346828/',
    note: 'Evidenzsicherheit laut Umbrella-Review 2026 für alle Endpunkte niedrig oder sehr niedrig. Dokumentierte schwere Komplikationen (Gasembolie, Schlaganfall, Blutzerfall, Infektionen), aber kein Register. Vor Eigenbluttherapie G6PD-Mangel ausschließen; nur bei erfahrenen Behandlern mit festem Protokoll.'
  },
  {
    id: 'cgm',
    name: 'CGM – kontinuierliche Glukosemessung',
    category: 'Biohacking',
    emoji: '📟',
    short: 'Ein kleiner Sensor am Arm misst rund um die Uhr den Blutzucker – macht sichtbar, wie Essen, Sport, Stress und Schlaf den Glukoseverlauf beeinflussen.',
    benefits: [
      'Zeigt in Echtzeit, wie einzelne Mahlzeiten den gemessenen Glukosewert verändern',
      'Bessere Energie und weniger Heißhunger werden versprochen, von der Fachliteratur aber nicht gestützt',
      'Bei Prädiabetes in kleinen Studien bessere Blutzuckerwerte, bei Stoffwechselgesunden kein Vorteil (Meta-Analyse, 23 Studien)',
      'Bei Gesunden kein validierter Normbereich; Sensoren überschätzten in einer Laborstudie systematisch'
    ],
    indication: ['Stoffwechsel-Optimierung', 'Gewicht', 'Energie/Heißhunger', 'Prädiabetes-Prävention'],
    note: 'Für Nicht-Diabetiker ein Messgerät ohne validierten Normbereich, kein Diagnosegerät. Einzelne Spitzen sind normal.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41588451/',
    podcasts: [
      {
        title: 'CGM: Der Blutzucker-Sensor im Faktencheck',
        spotify: '2gEGQcsJwgJ8ym2dEqr9tX',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 79) · mit Paul & Paula. Wie der Sensor ohne Stechen misst, was er bringt – und wo der Hype die Daten überholt. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 17.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'neurostimulation',
    name: 'Neurostimulation (tDCS / TMS)',
    category: 'Biohacking',
    emoji: '🧠',
    short: 'Sanfte elektrische (tDCS) oder magnetische (TMS) Stimulation des Gehirns – zur Unterstützung von Fokus, Stimmung, Lernen und Erholung.',
    benefits: [
      'rTMS: Magnetimpulse aktivieren die Hirnrinde direkt – bei Depression in 81 randomisierten Studien wirksamer als Schein, von der deutschen Leitlinie bei Therapieresistenz empfohlen',
      'tDCS: schwacher Gleichstrom verschiebt die Erregbarkeit – bei Depression kleiner Effekt, größte deutsche Studie (DepressionDC) ohne Unterschied zu Schein',
      'Fokus und Lernen bei Gesunden: für tDCS nach Einzelsitzungen kein Nachweis (59 Analysen ohne signifikanten Effekt)',
      'Nicht-invasiv; tDCS in über 33.200 Sitzungen ohne schwere Nebenwirkung bei konventionellen Protokollen'
    ],
    indication: ['Fokus/Kognition', 'Stimmung', 'Lernen', 'Erholung'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/27090022/',
    note: 'rTMS ist ein ärztliches Verfahren (NVL-Empfehlung bei therapieresistenter Depression). tDCS ist keine Kassenleistung und hat keine Wirksamkeitszulassung bei Depression; für Heim-Hirnstimulationsgeräte ohne medizinische Zweckbestimmung gelten seit 22. Juni 2023 EU-Sicherheitsspezifikationen. Nicht bei Epilepsie, bipolarer Störung oder Implantaten im Kopf ohne ärztliche Rücksprache.'
  },
  {
    id: 'bfr-training',
    name: 'Blood-Flow-Restriction-Training (BFR)',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Krafttraining mit leichter Blutstau-Manschette: erzeugt mit sehr geringen Gewichten einen starken Muskelreiz – ideal für Reha und gelenkschonenden Aufbau.',
    benefits: [
      'Muskelaufbau mit 20 bis 40 Prozent des Maximalgewichts – Hypertrophie in Meta-Analysen ähnlich wie bei schwerem Training',
      'In der Reha mehr Kraft als leichtes Training ohne Manschette (20 Studien, u. a. Kreuzband und Kniearthrose)',
      'Wachstumsreiz am Menschen gemessen: Muskelproteinsynthese und mTORC1-Signalweg in der Biopsie aktiviert',
      'Für Maximalkraft bleibt schweres Training überlegen, besonders bei Untrainierten'
    ],
    indication: ['Muskelaufbau', 'Reha', 'Gelenkschonung', 'Sport-Performance'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/31156448/',
    note: 'Manschettendruck korrekt dosieren (nicht abbinden!); bei Thrombose-/Gefäßrisiko oder Bluthochdruck vorher ärztlich abklären.'
  },
  {
    id: 'ems',
    name: 'EMS – Elektromuskelstimulation',
    category: 'Biohacking',
    emoji: '⚡',
    short: 'Elektrische Impulse lassen die Muskeln zusätzlich kontrahieren – für effizientes Ganzkörper-Training in kurzer Zeit oder gezielte Muskelaktivierung.',
    benefits: [
      'Große Zuwächse bei Muskelmasse und Kraft in einer Meta-Analyse von 16 Studien mit 897 nicht-sportlichen Erwachsenen',
      'Kurze Einheiten mit wenig äußerer Last – gelenkschonend, auch für Ältere',
      'Kein signifikanter Effekt auf die Fettmasse; für trainierte Sportler kaum Zusatznutzen',
      'Hinweise auf weniger Rückenschmerzen bei Älteren (kleine gepoolte Auswertung)'
    ],
    indication: ['Muskelaufbau', 'Zeiteffizienz', 'Reha', 'Rücken/Core'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/33716787/',
    note: 'Sehr intensiver Reiz: Zu harte erste Einheiten können einen schweren Muskelschaden bis zur Rhabdomyolyse auslösen – sanfter Einstieg, Pausen, ausreichend trinken. Seit 31.12.2022 Fachkundepflicht für gewerbliche Anbieter (NiSV). Nicht bei Herzschrittmacher, Schwangerschaft oder akuten Erkrankungen ohne ärztliche Klärung.'
  },
  {
    id: 'vibrationstraining',
    name: 'Vibrationstraining (WBV)',
    category: 'Biohacking',
    emoji: '📳',
    short: 'Training auf einer vibrierenden Platte: Die schnellen Schwingungen lösen viele kleine Reflexkontraktionen aus – am besten belegt für Gleichgewicht, Beinkraft und weniger Stürze im Alter, kaum für die Knochendichte.',
    benefits: [
      'Weniger Stürze: Sturzrate bei Erwachsenen ab 50 in einer Meta-Analyse gesenkt, Rate Ratio 0,67 (mittlere Evidenzqualität)',
      'Verbessert Gleichgewicht, Gang und Beinkraft bei Älteren, auch bei Sarkopenie',
      'Knochendichte nach der Menopause: kein gesicherter Vorteil, allenfalls kleine Effekte an einzelnen Messorten',
      'Muskelmasse wächst nicht; für reine Kraft ist klassisches Krafttraining überlegen'
    ],
    indication: ['Kraft & Balance', 'Knochendichte', 'Durchblutung', 'Reha'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/29289937/',
    note: 'Bei akuten Gelenk-/Bandscheibenproblemen, Thrombose oder Schwangerschaft vorher abklären. Effektstärke variiert je nach Gerät/Protokoll.'
  },
  {
    id: 'floating',
    name: 'Floating (Isolationstank)',
    category: 'Biohacking',
    emoji: '🛁',
    short: 'Schwerelos treiben in warmem Salzwasser bei Dunkelheit und Stille: tiefe Entspannung, Stressabbau und mentale Erholung im Isolationstank.',
    benefits: [
      'Tiefe Entspannung: Eine einzige Stunde senkte in einer Studie mit 50 Angstpatienten die momentane Angst stark',
      'Generalisierte Angststörung: 12 Sitzungen linderten Symptome gegenüber Warteliste, 37 Prozent erreichten eine Remission (kleine, unverblindete Studie)',
      'Chronischer Schmerz: in der einzigen placebokontrollierten Studie (99 Patienten) nicht besser als ein Scheintank',
      'Gut verträglich: keine schweren Nebenwirkungen in randomisierten Studien; eine Magnesiumaufnahme über die Haut ist nicht belegt'
    ],
    indication: ['Stress & Angst', 'Regeneration', 'Schlaf', 'Verspannungen'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/40611079/',
    note: 'Sehr gut verträglich; bei Platzangst Deckel oder Tür offen lassen. Belegt sind vor allem kurzfristige Effekte auf Angst und Stimmung, meist ohne Scheinkontrolle. Bei Epilepsie, Herzerkrankung, Hautinfektion oder Schwangerschaft vorher ärztlich abklären.'
  },
  {
    id: 'vagus-stimulation',
    name: 'Vagusnerv-Stimulation (aktiv)',
    category: 'Biohacking',
    emoji: '🧠',
    short: 'Gezielte Reizung des Vagusnervs – als Implantat seit 1997 zugelassene Medizin, als Ohrclip ein Wellnessprodukt. 80 bis 90 Prozent der Nervenfasern laufen zum Gehirn; die Stimulation wirkt vor allem als Signal an Hirnregionen für Aufmerksamkeit, Stimmung und Entzündung.',
    benefits: [
      'Implantierte Stimulation in den USA zugelassen gegen schwer behandelbare Epilepsie (1997), therapieresistente Depression (2005) und für die Schlaganfall-Reha (2021)',
      'RECOVER (493 Menschen mit schwerer Depression, ein Jahr, scheinkontrolliert): Hauptendpunkt verfehlt, aber mehrere Nebenendpunkte zu Symptomen und Lebensqualität zugunsten der Stimulation',
      'Ohrstimulation steigerte bei 28 Gesunden nach sieben Tagen die maximale Sauerstoffaufnahme um 3,8 Prozent (European Heart Journal 2025)',
      'Ohrstimulation ist gut verträglich: in 177 Studien kein höheres Nebenwirkungsrisiko als unter Kontrolle',
      'Die beworbene HRV-Steigerung durch Ohrgeräte ist nicht belegt – eine Meta-Analyse über 16 verblindete Studien spricht klar dagegen'
    ],
    indication: ['Stress & HRV', 'Entspannung', 'Stimmung', 'Entzündung'],
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5859128/',
    note: 'Medizinische VNS-Implantate sind zugelassen (Epilepsie, Depression, Schlaganfall-Reha); nicht-invasive Halsgeräte sind in den USA gegen Cluster-Kopfschmerz und Migräne freigegeben. Heim-Ohrgeräte (taVNS) sind meist Wellnessprodukte ohne Zulassung für eine Krankheit; die Evidenz ist gemischt, und die HRV eignet sich nicht als Wirkungsnachweis.'
  },
  {
    id: 'iv-vitamintherapie',
    name: 'IV-Vitamintherapie (Myers-Cocktail)',
    category: 'Biohacking',
    emoji: '💉',
    short: 'Vitamine und Mineralstoffe direkt über die Vene (z. B. „Myers-Cocktail"). Der Blutspiegel steigt schnell – ein Nutzen ist vor allem bei nachgewiesenem Mangel oder gestörter Aufnahme plausibel, bei Gesunden nicht.',
    benefits: [
      'Hohe Mikronährstoff-Spiegel unabhängig von der Darmaufnahme – ein hoher Spiegel ist aber noch kein Nutzen',
      'Nützlich bei nachgewiesenen Mängeln oder Aufnahmestörungen',
      'Myers-Cocktail: einzige Placebo-Studie (34 Fibromyalgie-Patienten) ohne Unterschied zur Salzlösung',
      'Für Energie, Immunstärkung und Anti-Aging bei Gesunden keine kontrollierten Studien'
    ],
    indication: [
      'Energie/Fatigue',
      'Immununterstützung',
      'Regeneration',
      'Mangelausgleich'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/19250003/',
    note: 'Nutzen bei Gesunden nicht belegt. Nur ärztlich, mit Blick auf Nierenfunktion und Elektrolyte; vor hochdosiertem Vitamin C Test auf G6PD-Mangel. Für Sportler: Infusionen über 100 ml in 12 Stunden stehen außerhalb von Klinikbehandlungen auf der Anti-Doping-Verbotsliste.'
  },
  {
    id: 'grounding-earthing',
    name: 'Grounding / Earthing',
    category: 'Biohacking',
    emoji: '🌱',
    short: 'Direkter Hautkontakt zur Erde (barfuß oder per Erdungsmatte): soll über den Ladungsausgleich Entzündung, Schlaf und Erholung günstig beeinflussen.',
    benefits: [
      'Berichte über besseren Schlaf und weniger Stress – in kleinen scheinkontrollierten Studien teils bestätigt',
      'Nach Muskelbelastung weniger Anstieg des Muskelschadensmarkers CK, beim Schmerz kein Vorteil gegenüber Scheinerdung (randomisiert, 32 Teilnehmer)',
      'Einfach und kostenlos (Barfußgehen auf natürlichem Boden)',
      'Studien klein und überwiegend aus dem Umfeld der Befürworter oder herstellerfinanziert'
    ],
    indication: ['Schlaf', 'Stress', 'Regeneration', 'Wohlbefinden'],
    link: 'https://pubmed.ncbi.nlm.nih.gov/26443876/',
    note: 'Evidenz klein und überwiegend aus dem Umfeld der Vermarkter; Effekte meist in Fragebögen. Kontrollierte Sicherheitsdaten fehlen, bei Erdungsmatten hängt die Sicherheit von der Hauselektrik ab.'
  },
  {
    id: 'chelat-therapie',
    name: 'Chelat-Therapie',
    category: 'Biohacking',
    emoji: '🧲',
    short: 'Infusion von Bindemitteln (meist EDTA), die Schwermetalle im Blut binden und über die Niere ausleiten. Bei nachgewiesener Vergiftung etablierte Medizin; als Behandlung verkalkter Gefäße zweimal groß geprüft – die Bestätigungsstudie fiel negativ aus.',
    benefits: [
      'Etabliert und wirksam bei nachgewiesener Schwermetallvergiftung: zugelassene Chelatbildner sind verschreibungspflichtig und für Indikationen wie Bleivergiftung und Eisenüberladung zugelassen (FDA)',
      'Die Chelierung selbst funktioniert messbar: Bleispiegel im Blut im Median von 9,03 auf 3,46 Mikrogramm je Liter, unter Placebo nur von 9,3 auf 8,7 (TACT2, JAMA 2024)',
      'Die Fragestellung ist gut untersucht: zwei große randomisierte Studien mit harten Endpunkten, 1.708 und 959 behandelte Patienten'
    ],
    indication: [
      'Nachgewiesene Schwermetallvergiftung (etwa Blei), ärztlich gesichert',
      'Eisenüberladung (mit den dafür zugelassenen Präparaten)'
    ],
    link: 'https://www.nccih.nih.gov/health/chelation-for-coronary-heart-disease-what-you-need-to-know',
    note: 'Als allgemeine Entgiftung oder Anti-Aging NICHT belegt: In TACT2 traten Tod, Infarkt, Schlaganfall, Gefäßeingriff oder Klinikaufnahme bei 35,6 gegenüber 35,7 Prozent auf, die Sterblichkeit lag bei 17,4 gegenüber 17,6 Prozent, obwohl die Studie eine Senkung um 30 Prozent sicher gefunden hätte. Auch der zweite Studienarm mit hochdosierten Vitaminen und Mineralstoffen (28 Bestandteile) blieb ohne Wirkung. Die auffällige Diabetes-Untergruppe der Vorgängerstudie TACT bestätigte sich nicht. Für beschwerdefreie Menschen mit behaupteter Belastung ist das Verfahren nicht widerlegt, sondern ungeprüft: Es existiert keine Studie mit harten Endpunkten. Ernste Risiken: Hypokalzämie und Nierenschäden; in TACT schwerwiegende unerwünschte Ereignisse bei 11,9 Prozent der Behandelten, 15 Prozent Abbrüche wegen Nebenwirkungen. Die CDC dokumentierte 3 Todesfälle (2003 bis 2005) durch Kalziummangel mit Herzstillstand, in einem Fall nach Verwechslung der beiden EDTA-Salze. Nur bei klarer Indikation und streng ärztlich; von Chelat-Produkten für den Heimgebrauch rät die FDA ab.'
  },
  {
    id: 'fasten-autophagie',
    name: 'Fasten & Autophagie',
    category: 'Biohacking',
    emoji: '⏳',
    short: 'Geplante Essenspausen von 16:8 bis zum mehrtägigen Fasten. Versprochen wird ein Umschalten von Wachstum (mTOR) auf Zellrecycling; am Menschen ist das kaum gemessen, und beim Gewicht bringt das Zeitfenster nicht mehr als ein gleich großes Kaloriendefizit.',
    benefits: [
      'Gewichtsverlust etwa so groß wie bei gleich großem Kaloriendefizit, nicht größer (12-Monats-Studie, 139 Personen)',
      'NEJM-Übersicht 2019: bessere Stoffwechsel-Marker, weniger Entzündung, höhere Stressresistenz der Zellen',
      'Versprochen wird ein Umschalten auf Zellrecycling; eine Stundenschwelle ist am Menschen nicht belegt',
      'Kurzfristig niedrigere 24-Stunden-Glukose in einer kleinen Überkreuzstudie (11 Personen, 4 Tage)',
      'Keine Studien zu Sterblichkeit oder Herz-Kreislauf-Ereignissen'
    ],
    indication: ['Stoffwechsel', 'Insulinsensitivität', 'Gewicht', 'Zellreinigung', 'Longevity'],
    note: 'Nicht geeignet für Schwangere, Stillende, Kinder, Untergewichtige und Menschen mit Essstörungs-Geschichte; mehrtägiges Fasten gehört in medizinische Begleitung.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31881139/',
    podcasts: [
      {
        title: 'Fasten & Autophagie: Das Gratis-Upgrade im Faktencheck',
        spotify: '1cXqiiDlbzaPmpnfpALk5Q',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 59) · mit Paul & Paula. Wie der Körper vom Wachstums- in den Aufräum-Modus schaltet, ab wann beim Menschen wirklich Autophagie-Signale messbar werden – und warum das frühe Essfenster in den Vergleichsstudien besser abschneidet. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 29.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'schlaf',
    name: 'Schlaf & Schlafhygiene',
    category: 'Biohacking',
    emoji: '🌙',
    short: 'Feste Zeiten, dunkler Raum, wenig späte Reize: Schlafhygiene bessert Insomnie-Beschwerden messbar, aber schwächer als kognitive Verhaltenstherapie. Dass gezielte Schlafoptimierung bei Gesunden das Leben verlängert, ist nicht belegt.',
    benefits: [
      'Kurzer und langer Schlaf gehen in Kohorten mit höherer Sterblichkeit einher (U-Kurve, Beobachtungsdaten)',
      'Mehr Schlaf senkte in einer randomisierten Studie die Energieaufnahme um 270 kcal pro Tag (80 Teilnehmende, 2 Wochen)',
      'Versprochen wird, dass im Tiefschlaf Gewebereparatur, Wachstumshormon-Puls und eine glymphatische Spülung von Beta-Amyloid aus dem Gehirn laufen; ein Nutzen gezielter Schlafoptimierung ist damit nicht gezeigt',
      'Regelmäßige Schlafzeiten gingen in UK-Biobank-Beobachtungsdaten mit niedrigerem Sterberisiko einher; eine Interventionsstudie dazu gibt es nicht',
      'Ausreichend Schlaf stützt Immunabwehr, Insulinsensitivität und Testosteronspiegel'
    ],
    indication: ['Longevity', 'Regeneration', 'Immunsystem', 'Stoffwechsel', 'Kognition'],
    note: 'Chronische Schlafstörungen, Schnarchen mit Atemaussetzern oder bleierne Tagesmüdigkeit gehören in ärztliche Abklärung – Stichwort Schlafapnoe.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/20469800/',
    podcasts: [
      {
        title: 'Schlaf: Der größte Longevity-Hebel im Faktencheck',
        spotify: '2n0MijPHiFEfDV1u27KHux',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 62) · mit Paul & Paula. Was im Tiefschlaf tatsächlich passiert, warum Regelmäßigkeit in den Kohortendaten stärker wirkt als die reine Stundenzahl – und welche Beschwerden nicht in die Selbstoptimierung, sondern zur Schlafapnoe-Abklärung gehören. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 01.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'hrv-messung',
    name: 'Herzratenvariabilität (HRV)',
    category: 'Biohacking',
    emoji: '💓',
    short: 'Die Abstände zwischen zwei Herzschlägen schwanken leicht. Wie stark sie von Schlag zu Schlag schwanken, bildet überwiegend die vagale Bremse ab – den Gegenspieler lässt die Messung weitgehend offen.',
    benefits: [
      'RMSSD aus dem Nachtwert bildet überwiegend die vagale Bremse ab und gilt als Erholungs-Marker; die Atmung verschiebt ihn mit',
      'Niedrige HRV war schon in der Framingham-Herzstudie mit erhöhter Sterblichkeit verbunden – gemessen an der LF-Leistung aus dem Zwei-Stunden-EKG, nicht am App-Wert',
      'Ein verändertes Muster über mehrere Tage kann einen beginnenden Infekt anzeigen – in den Studien gemeinsam mit Atemfrequenz und Ruhepuls; für Übertraining trägt die Ruhe-HRV das Signal nicht',
      'Resonanzatmung hebt die HRV akut – die persönliche Frequenz liegt zwischen 4,5 und 6,5 Atemzügen pro Minute; HRV-Biofeedback senkt selbstberichteten Stress mit g = 0,83 gegenüber Kontrollen'
    ],
    indication: ['Stress & Erholung', 'Trainingssteuerung', 'Schlaf-Feedback', 'Infekt-Frühwarnung'],
    note: 'Absolute Werte taugen nicht zum Vergleich zwischen Personen – es zählt die eigene Baseline und deren Trend. Belegt sind mindestens drei gültige Messungen pro Woche, beim Nachtwert mindestens fünf von sieben Nächten. Die HRV ersetzt kein EKG.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/8044959/',
    podcasts: [
      {
        title: 'Herzratenvariabilität (HRV): Der Stress-Kompass im Faktencheck',
        spotify: '2uotniOFOzK6uWFRmneWYF',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 72) · mit Paul & Paula. Was RMSSD wirklich misst, warum der Vergleich mit anderen nichts bringt und die eigene Baseline alles – und was Resonanz-Atmung mit sechs Atemzügen pro Minute akut bewirkt. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 10.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'zyklus-biohacking',
    name: 'Zyklus-Tracking & zyklusbasiertes Training',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Zyklusphasen über Temperatur, Ruhepuls, HRV und Stimmung mitschreiben – und Training, Ernährung und Schlaf am eigenen Muster ausrichten statt an App-Schablonen.',
    benefits: [
      'Progesteron hebt die Kerntemperatur in der Lutealphase um rund 0,3 °C – die zweite Zyklushälfte wird in Wearable-Daten sichtbar',
      'Sinkende HRV (3 bis 9 Prozent) und höherer Ruhepuls gegen Zyklusende sind Physiologie, kein Stress-Einbruch',
      'Der Ruheumsatz steigt luteal nur leicht, um etwa 30 bis 120 kcal am Tag – Appetit vor der Periode ist real, aber kein Freibrief für große Extra-Portionen',
      'Wearables erkennen das fruchtbare Fenster mit einer gepoolten Genauigkeit von 0,88',
      'Wiederkehrende PMS-Tage werden vorhersehbar; regelmäßiger Sport gegen PMS-Beschwerden ist in einer Meta-Analyse über 20 Studien belegt'
    ],
    indication: [
      'Zyklusverständnis',
      'Trainingsplanung',
      'Schlaf',
      'PMS-Beschwerden',
      'Eisen & Ferritin'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/32661839/',
    note: 'Zyklusbasierte Trainingspläne nach App-Schablone sind nicht belegt: Die Meta-Analyse von McNulty (2020, 78 Studien) fand nur triviale Phasenunterschiede bei niedriger Studienqualität, die Muskelproteinsynthese reagiert in beiden Phasen gleich auf Krafttraining, und unter hormoneller Verhütung fehlt der natürliche Zyklus ganz.',
    podcasts: [
      { title: 'Zyklus & Biohacking: Der weibliche Rhythmus im Faktencheck', spotify: '1qB1UgMcCxMIEvyikU2zxO', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 74) · mit Paul & Paula. Was sich über den Zyklus physiologisch messbar verändert – Temperatur, Ruhepuls, HRV, Grundumsatz – und warum die verbreiteten zyklusbasierten Trainingspläne trotzdem auf dünner Datenlage stehen. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 12.09.2026, 10:00)' }
    ]
  },
  {
    id: 'alkohol-reduktion',
    name: 'Alkohol reduzieren',
    category: 'Biohacking',
    emoji: '🍷',
    short: 'Kein Wirkstoff, sondern ein Weglass-Hebel: Weniger Alkohol verbessert messbar Schlaf, HRV und Regeneration – und senkt das Krebsrisiko.',
    benefits: [
      'Schlaf: schon geringe Mengen senken die nächtliche HRV-basierte Erholung und heben den Puls im Schlaf (4.098 Personen); bei moderaten und hohen Mengen sinkt der REM-Anteil',
      'Training: eine große Menge Alkohol (im Mittel 12 Standardgetränke) nach dem Sport senkte die Muskelproteinsynthese um 24 %, trotz Protein',
      'Ein Monat ohne: Insulinresistenz, Blutdruck und Gewicht sanken messbar (Beobachtungsstudie, 94 Teilnehmer)',
      'Bei Vorhofflimmern senkte Abstinenz in einer randomisierten Studie die Rückfälle nach 6 Monaten von 73 auf 53 %',
      'Weniger Acetaldehyd – Alkohol ist von der IARC als Karzinogen der Gruppe 1 eingestuft, mit mindestens 7 Krebsarten verknüpft'
    ],
    indication: [
      'Schlafqualität',
      'HRV & Ruhepuls',
      'Regeneration',
      'Krebsrisiko',
      'Leber & Blutdruck'
    ],
    link: 'https://www.who.int/europe/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health',
    note: 'Es gibt keine gesundheitlich unbedenkliche Menge, aber die Risikokurve beginnt flach – jede Reduktion zählt, und wer beim Aufhören Schwierigkeiten merkt, gehört zu Hausarzt oder Suchtberatung statt zur Selbstoptimierung.',
    podcasts: [
      { title: 'Alkohol: Das Genussgift im Faktencheck', spotify: '3pvys3Kan18GwfiT7ArIok', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 77) · mit Paul & Paula. Was ein bis zwei Gläser messbar mit Schlaf, HRV und Ruhepuls machen, was nach zwei bis vier Wochen ohne zurückkommt – und warum die WHO sagt, dass es keine unbedenkliche Menge gibt. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 15.09.2026, 10:00)' }
    ]
  },
  {
    id: 'zone2-vo2max',
    name: 'Zone 2 & VO2max-Training',
    category: 'Biohacking',
    emoji: '🏃',
    short: 'Ausdauertraining in unterschiedlichen Intensitäten. Die VO2max ist ein sehr starker Sterblichkeitsmarker; dass gerade lockeres Zone-2-Training oder eine bestimmte Verteilung diesen Vorteil erzeugt, ist kaum untersucht.',
    benefits: [
      'VO2max ist ein starker Sterblichkeits-Marker: Unfiteste hatten rund fünffach höheres Risiko als die Fittesten',
      'Zone 2 gilt als Grundlage für Mitochondrien und Kapillaren; ein Vorteil gegenüber anderen Intensitätsverteilungen ist nicht belegt',
      'Das norwegische 4x4-Intervall hebt die VO2max auch bei Älteren und Herzpatienten zuverlässig an',
      'In Beobachtungsstudien ist schon wenig regelmäßige Bewegung mit niedrigerer Sterblichkeit verbunden; die große Interventionsstudie Generation 100 verfehlte ihren Mortalitätsendpunkt'
    ],
    indication: ['Longevity', 'Herz-Kreislauf', 'Insulinsensitivität', 'Ausdauer', 'Regeneration'],
    note: 'Der Nutzen entsteht über Jahre, nicht Wochen – und wer über vierzig ist, Vorerkrankungen hat oder lange pausiert hat, gehört vor dem harten Vier-mal-vier sportmedizinisch durchgecheckt.',
    link: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2707428',
    podcasts: [
      {
        title: 'Zone 2 & VO2max: Die Ausdauer-Währung im Faktencheck',
        spotify: '6uhJDJJ8D3EqhBqh8muvld',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 80) · mit Paul & Paula. Warum die VO2max einer der stärksten Sterblichkeits-Marker überhaupt ist, was Zone 2 im Muskel aufbaut und wie das norwegische Vier-mal-vier-Intervall funktioniert – inklusive der ehrlichen Zeitachse. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 18.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'hoeren-demenz',
    name: 'Hören & Demenz (Hörversorgung)',
    category: 'Biohacking',
    emoji: '👂',
    short: 'Unbehandelter Hörverlust gehört zu den beeinflussbaren Demenz-Risikofaktoren. Die Lancet-Kommission führt ihn 2024 mit rund 7 % der Fälle an der Spitze, gleichauf mit hohem LDL-Cholesterin – der oft zitierte Satz vom größten beeinflussbaren Risikofaktor stimmt also weiterhin. Die Hörversorgung ist der einzige dieser Faktoren, der in einer großen randomisierten Studie geprüft wurde.',
    benefits: [
      'Lancet-Kommission 2024: 14 beeinflussbare Faktoren erklären zusammen rund 45 % der Demenzfälle – Hörverlust und hohes LDL-Cholesterin mit je 7 % an der Spitze, geringe Bildung und soziale Isolation je 5 %, Bluthochdruck 2 %',
      'Fassung 2020: 12 Faktoren, zusammen 40 %, Hörverlust mit 8 % allein vorn – 2024 etwas niedriger, aber weiter an der Spitze',
      'ACHIEVE (Lancet 2023, 977 Ältere, 3 Jahre): Hörversorgung gegen ein Gesundheitsprogramm – in der Gesamtgruppe kein Unterschied, Hauptendpunkt verfehlt',
      'In der vorab geplanten Risikogruppe (ARIC-Kohorte, 238 Personen) war der geistige Abbau um 48 % verlangsamt; in der Kontrollgruppe bauten die ARIC-Teilnehmer 2,7-mal so schnell ab wie die 739 gesunden Freiwilligen, die damit kaum Spielraum für einen messbaren Effekt hatten',
      'Ein Hörtest ist billig, ungefährlich und der erste Schritt – ob Hörgeräte Demenz verhindern, ist damit nicht bewiesen'
    ],
    indication: [
      'Demenz-Prävention',
      'Hörverlust ab der Lebensmitte',
      'Kognition',
      'Soziale Teilhabe'
    ],
    link: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)01406-X/fulltext',
    note: 'Ein Bevölkerungsanteil ist kein persönliches Risiko: Die 7 % sagen, wie viele Fälle wegfielen, wenn niemand schlecht hörte – nicht, wie stark das eigene Risiko sinkt. Bei Hörproblemen: HNO-Arzt und Hörtest, keine Selbstdiagnose.'
  },
  {
    id: 'muskel-als-organ',
    name: 'Muskel als Organ (Griffkraft & Myokine)',
    category: 'Biohacking',
    emoji: '💪',
    short: 'Der Skelettmuskel ist mehr als Antrieb: Er setzt bei Belastung Botenstoffe frei (Myokine), und seine Kraft sagt die Gesamtsterblichkeit besser voraus als der systolische Blutdruck – für neu auftretende Herz-Kreislauf-Erkrankungen ist der Blutdruck dagegen der stärkere Prädiktor. Gemessen wird die Kraft, nicht die Masse.',
    benefits: [
      'PURE-Studie (Lancet 2015, 139.691 Menschen, 17 Länder): je 5 kg weniger Griffkraft 16 % höheres Sterberisiko (HR 1,16; KI 1,13–1,20), Herz-Kreislauf-Tod und Tod aus anderen Ursachen je 17 %',
      'PURE: für den Tod jeder Ursache ist die Griffkraft der stärkere Prädiktor (HR 1,37 je Standardabweichung gegenüber 1,15 für den systolischen Blutdruck) – für neu auftretende Herz-Kreislauf-Erkrankungen kehrt sich das um (1,39 zu 1,21)',
      'Health-ABC-Kohorte (2006, 2.292 Menschen von 70 bis 79 Jahren, knapp 5 Jahre): Kraft sagt die Sterblichkeit voraus (HR je Standardabweichung 1,51 bei Männern, 1,65 bei Frauen), die Muskelmasse kaum – eine Korrektur für die Muskelfläche änderte am Zusammenhang fast nichts',
      'LIFE-Studie (JAMA 2014, 1.635 Ältere, randomisiert, im Mittel 2,6 Jahre): strukturiertes Training senkte den Anteil mit schwerer Gehbehinderung – Unfähigkeit, 400 m zu gehen – von 35,5 auf 30,1 % (HR 0,82; p = 0,03), und die Vergleichsgruppe bekam ein aktives Bildungsprogramm',
      'Myokine wie Irisin sind real, aber die Messmethoden streiten – Kits verschiedener Hersteller wichen im Mittel 18-fach voneinander ab'
    ],
    indication: [
      'Longevity',
      'Sarkopenie-Prävention',
      'Mobilität im Alter',
      'Stoffwechsel',
      'Sturzprävention'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/25982160/',
    note: 'Griffkraft ist vor allem Anzeige, nicht Hebel: Dass Griffkrafttraining das Sterberisiko senkt, ist nicht gezeigt – belegt ist, dass strukturiertes Training Kraft und Mobilität erhält. In PURE zeigte die Griffkraft keinen signifikanten Zusammenhang mit neu auftretendem Diabetes, mit Krankenhauseinweisungen wegen Lungenentzündung oder COPD, mit Sturzverletzungen und mit Knochenbrüchen. Zu Hause taugt die Messung als Verlauf gegen den eigenen Wert von vor 2 Jahren, nicht als Vergleich mit fremden Normtabellen. Wer über 40 ist und lange pausiert hat, startet mit Anleitung.'
  },
  {
    id: 'mundmikrobiom',
    name: 'Mundmikrobiom & Parodontitis',
    category: 'Biohacking',
    emoji: '🦷',
    short: 'Der Mund ist das zweitgrößte Mikrobiom des Körpers. Parodontitis-Keime wie Porphyromonas gingivalis stehen im Verdacht, Herz-Kreislauf-Erkrankungen und Alzheimer mitzutreiben – die Belege reichen von starken Beobachtungsdaten bis zu einem gescheiterten Medikament.',
    benefits: [
      'Gingipain-Antigene von P. gingivalis in 96 % der untersuchten Alzheimer-Hirnproben für das eine und 91 % für das andere Enzym (51 von 53, 49 von 54), bakterielle DNA in der Hirnrinde, Erreger im Nervenwasser bei 7 von 10 lebenden Patienten (Dominy 2019)',
      'Im Tiermodell eine vollständige Kette: orale Infektion alter Mäuse über 6 Wochen, Amyloid-Beta-Anstieg, kein Anstieg bei einem Stamm ohne diese Enzyme, unter dem Hemmstoff bis zu 90 % weniger Bakterienlast im Gehirn',
      'Die Konsequenz-Studie: Atuzaginstat (Cortexyme, 643 Patienten, 48 Wochen) verfehlte im Oktober 2021 beide Hauptendpunkte; in der vorab festgelegten Untergruppe mit Erregernachweis im Speichel (242 Personen) 57 % langsamerer kognitiver Abbau unter der höheren Dosis, aber ohne Effekt auf die Alltagsfähigkeiten',
      'FDA-Entwicklungsstopp im Januar 2022 wegen Lebertoxizität (Werte über dem Dreifachen des oberen Normwerts bei 7 % und 15 % je nach Dosis, alle rückläufig), Programmeinstellung im August 2022',
      'Nachfolgestudie SPRING (Lighthouse Pharmaceuticals, von der früheren Cortexyme-Führung gegründet): rund 300 Patienten mit Erregernachweis im Speichel, US-Förderung 49,2 Mio. Dollar, im Juli 2026 in Rekrutierung',
      'Stellungnahme der American Heart Association (Circulation, Dezember 2025): Zusammenhang zwischen Parodontitis und Herz-Kreislauf-Erkrankungen belegt, Ursächlichkeit nicht bestätigt, kein direkter Beleg, dass die Behandlung Herz-Kreislauf-Erkrankungen verhindert',
      'Intensive Parodontitis-Behandlung (Tonetti, NEJM 2007, 120 Patienten): nach 24 Stunden schlechtere Gefäßfunktion und erhöhte Entzündungswerte, nach 60 und 180 Tagen bessere Gefäßfunktion – ein Surrogat, kein Herzinfarkt-Endpunkt',
      'Cochrane 2022: nur zwei randomisierte Studien zu harten Herz-Kreislauf-Endpunkten (165 Personen zur Primärprävention, 303 randomisiert zur Sekundärprävention, davon 37 auswertbar), Evidenzqualität sehr niedrig, keine belastbare Antwort'
    ],
    indication: [
      'Zahnfleischentzündung',
      'Herz-Kreislauf-Risiko',
      'Demenz-Risiko',
      'Mundgesundheit',
      'Prävention'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/17329698/',
    note: 'Was sicher hilft, ist unspektakulär: Zahnzwischenräume reinigen, professionelle Zahnreinigung, Parodontitis behandeln lassen. Mundspülungen mit Chlorhexidin dauerhaft zu nutzen, stört das Mikrobiom eher – Nitrat-reduzierende Bakterien im Mund gehören zur Blutdruckregulation.'
  },
  {
    id: 'lipoprotein-a',
    name: 'Lipoprotein(a)',
    category: 'Biohacking',
    emoji: '🫀',
    short: 'Ein LDL-ähnliches Partikel mit zusätzlich angehängtem Apolipoprotein(a), dessen Höhe genetisch festgelegt ist und sich lebenslang kaum ändert. Etwa jeder Fünfte hat einen erhöhten Wert und weiß es meist nicht, weil er im normalen Cholesterin-Check nicht mitgemessen wird. Am 4.9.2026 hat die erste große Studie, die ihn senken sollte, ihren Hauptendpunkt verfehlt.',
    benefits: [
      'Der Zusammenhang mit dem Herzinfarkt ist über die Mendelsche Randomisierung so sauber belegt wie bei kaum einem anderen Risikofaktor – die genetische Zuteilung ist zufällig und wirkt lebenslang',
      'Eine einzige Messung im Leben genügt, weil der Wert genetisch festgelegt ist: Ernährung, Sport und Statine ändern ihn praktisch nicht',
      'Lipoprotein(a)-HORIZON (8.323 Patienten, placebokontrolliert): Pelacarsen hat den Wert gesenkt – der Hauptendpunkt aus Herz-Kreislauf-Tod, Herzinfarkt, Schlaganfall und dringenden Eingriffen wurde am 4.9.2026 trotzdem verfehlt',
      '3 weitere Wirkstoffe sind in großen Studien: Olpasiran (Ergebnisse ungefähr 2028), Lepodisiran (etwa 2029) und Muvalaplin als Tablette',
      'Ein erhöhter Wert ist das Argument, bei LDL, Blutdruck, Rauchen und Bewegung konsequenter zu sein – dort ist der Nutzen belegt'
    ],
    indication: [
      'Herz-Kreislauf-Risiko',
      'Familiengeschichte mit frühen Herzinfarkten',
      'Einmalige Blutwert-Bestimmung',
      'Prävention',
      'Lipidprofil'
    ],
    link: 'https://www.novartis.com/news/media-releases/novartis-announces-lpahorizon-phase-iii-topline-results-pelacarsen-patients-elevated-lpa-and-established-cardiovascular-disease-cvd',
    note: 'Ein belegter Risikofaktor ist noch kein belegtes Therapieziel. Die Genetik hat gezeigt, dass Lipoprotein(a) den Schaden mitverursacht; sie hat nicht gezeigt, dass man ihn durch späteres Senken wieder loswird. Genau diese beiden Aussagen werden dauernd in einen Topf geworfen. Derzeit gibt es kein Medikament, von dem bewiesen wäre, dass es über die Senkung von Lipoprotein(a) Herzinfarkte verhindert – wer das verkauft, verkauft eine Hoffnung. Die vollständigen HORIZON-Daten sind noch nicht publiziert, sie kommen erst auf einem Fachkongress. Der Wert selbst bleibt sinnvoll zu kennen, und die Einordnung gehört in ein ärztliches Gespräch.'
  },
  {
    id: 'menopause-hrt',
    name: 'Hormontherapie in der Menopause',
    category: 'Biohacking',
    emoji: '♀️',
    short: 'Östrogen, bei erhaltener Gebärmutter zusammen mit einem Gestagen. Gegen Hitzewallungen ist das das wirksamste Mittel, das es gibt; als Vorbeugung gegen das Altern wurde genau das geprüft und ist gescheitert. Nach dem Abbruch der WHI im Juli 2002 haben sich nicht die Zahlen geändert, sondern Alter, Präparat und Anwendungsweg.',
    benefits: [
      'Cochrane (24 Studien, 3.329 Frauen): Hitzewallungen 75 Prozent seltener als unter Placebo – Placebo allein brachte fast 58 Prozent Rückgang gegenüber dem Ausgangswert',
      'Knochen: In der WHI sanken die Brüche um 24 Prozent, die Knochendichte an der Hüfte stieg in 3 Jahren um 3,7 Prozent',
      'Die WHI-Risiken in absoluten Zahlen: pro 10.000 Frauen und Jahr 8 Brustkrebsfälle, 7 Herzereignisse, 8 Schlaganfälle und 8 Lungenembolien mehr, dagegen 6 Darmkrebsfälle und 5 Hüftbrüche weniger – Gesamtsterblichkeit unverändert',
      'Der Anwendungsweg ist belegt: ESTHER 2007 fand unter oralem Östrogen ein vierfaches Thromboserisiko, über die Haut 0,9',
      'Ohne Hormone: Fezolinetant blockiert den Neurokinin-3-Rezeptor im Temperatur-Thermostat und ist seit Dezember 2023 in der EU zugelassen – schwächer als Östrogen, Leberwerte werden kontrolliert'
    ],
    indication: [
      'Hitzewallungen',
      'Schlafstörungen in den Wechseljahren',
      'Scheidentrockenheit',
      'Knochenschutz bei erhöhtem Bruchrisiko',
      'Wechseljahresbeschwerden'
    ],
    link: 'https://pubmed.ncbi.nlm.nih.gov/12117397/',
    note: 'Die WHI war kein Fehlalarm: Die Zahlen waren richtig und der Abbruch war richtig. Falsch war, einen Befund an Frauen mit im Mittel 63 Jahren unter einem bestimmten Kombipräparat auf jede Frau mit jedem Präparat zu übertragen. Eine Korrektur, keine Umkehr. Was sich seither geändert hat, ist unterschiedlich gut belegt: Für die Thrombose ist der Weg über die Haut in ESTHER belegt, der Vorteil des körpereigenen Progesterons gegenüber synthetischen Gestagenen stammt dagegen aus der E3N-Beobachtungskohorte – begleitet, nicht zugelost, und eine randomisierte Studie dazu wird es wohl nie geben. Als Vorbeugung chronischer Krankheiten bei Beschwerdefreien empfiehlt keine Leitlinie Hormone. Alles verschreibungspflichtig; Alter, Vorgeschichte und Präparat gehören zusammen in ein ärztliches Gespräch.'
  }
];

const THERAPY_CATEGORIES = [
  { id: 'all',          label: 'Alle' },
  { id: 'Ausstattung',  label: 'Ausstattung' },
  { id: 'Schwerpunkt',  label: 'Schwerpunkte' },
  { id: 'Netzwerk',     label: 'Netzwerk' },
  { id: 'Extern',       label: 'Extern' },
  { id: 'Biohacking',   label: 'Biohacking' }
];
