/* Therapien & Behandlungen
 * Quelle: Munich Health Center (munichhealthcenter.de) + Inuspherese (externer Anbieter)
 * Kategorien:
 *   - Ausstattung: gerätegestützte Anwendungen vor Ort
 *   - Schwerpunkt: thematische Begleitkonzepte
 *   - Netzwerk:   Partner-Experten/-Leistungen
 *   - Extern:     Verfahren außerhalb MHC (z.B. Inuspherese)
 */
const THERAPIES = [
  // ============ AUSSTATTUNG (8) ============
  {
    id: 'ihht',
    name: 'IHHT – Hypoxietraining',
    category: 'Ausstattung',
    emoji: '🫁',
    short: 'Intervall-Hypoxie/Hyperoxie-Training – wechselnde Sauerstoff-Mangel- und Überschuss-Phasen aktivieren mitochondriale Regeneration.',
    benefits: [
      'Trainiert defekte Mitochondrien aus dem System',
      'Verbessert Zellatmung und Energieproduktion',
      'Unterstützt Regeneration nach Belastung & Long-Covid',
      'Stärkt die Stressresistenz'
    ],
    indication: ['Erschöpfung', 'Long Covid', 'Sport-Regeneration', 'Anti-Aging'],
    link: 'https://munichhealthcenter.de/leistungen/hypoxietraining/',
    podcasts: [
      {
        title: 'IHHT: Das Höhentraining im Faktencheck',
        spotify: '0bFNeYXib0O5MmSgVVTiTW',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 71) · mit Paul & Paula. Was im Gerät wirklich passiert: Hypoxie-Phasen bei neun bis fünfzehn Prozent Sauerstoff im Wechsel mit sauerstoffangereicherter Erholungsluft, gesteuert über ein Fingerclip-Oximeter. Was am Zell-Kraftwerk-Training belegt ist – und was Studio-Poesie. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 09.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'vns-analyse',
    name: 'VNS-Analyse (HRV)',
    category: 'Ausstattung',
    emoji: '📈',
    short: 'Messung der Herzraten-Variabilität zur Beurteilung des vegetativen Nervensystems – objektiver Marker für Stress, Erholung und Belastbarkeit.',
    benefits: [
      'Objektiviert Stress- & Regenerationszustand',
      'Zeigt Sympathikus/Parasympathikus-Balance',
      'Basis für individuelles Coaching',
      'Verlaufskontrolle therapeutischer Maßnahmen'
    ],
    indication: ['Stress', 'Burnout', 'Schlafprobleme', 'Sport-Performance'],
    link: 'https://munichhealthcenter.de/leistungen/vns-analyse/'
  },
  {
    id: 'infrarot-a',
    name: 'Infrarot-A (wIRA)',
    category: 'Ausstattung',
    emoji: '🔆',
    short: 'Wassergefilterte Infrarot-A-Strahlung dringt tief ins Gewebe ein, fördert Mikrozirkulation und Sauerstoffversorgung.',
    benefits: [
      'Erhöht Durchblutung & Sauerstoffsättigung',
      'Beschleunigt Wundheilung',
      'Linderung bei muskuloskelettalen Beschwerden',
      'Sehr verträglich ohne UV-Belastung'
    ],
    indication: ['Schmerzen', 'Wundheilung', 'Regeneration', 'Verspannungen'],
    link: 'https://munichhealthcenter.de/leistungen/infrarot-a/',
    podcasts: [
      {
        title: 'Ganzkörperhyperthermie & Infrarot: Die Wärme-Therapie im Faktencheck',
        spotify: '1z2wsgjkeNkKwJYdo4mCdW',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 73) · mit Paul & Paula. Sauna, Infrarotkabine und medizinische Ganzkörperhyperthermie im Vergleich – und warum wassergefiltertes Infrarot A (wIRA) heute das Mittel der Wahl ist, wenn die Kerntemperatur kontrolliert angehoben werden soll. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 11.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'bioadaptive-impuls',
    name: 'Bioadaptive Impulsanwendung',
    category: 'Ausstattung',
    emoji: '⚡',
    short: 'Elektrische Stimulation mit körperangepassten Impulsen reguliert das vegetative Nervensystem bei akuten und chronischen Schmerzen.',
    benefits: [
      'Schmerzlinderung über VNS-Aktivierung',
      'Löst muskuläre Dysfunktionen',
      'Nicht-invasiv & medikamentenfrei',
      'Wirkt schnell, oft schon nach 1–3 Anwendungen'
    ],
    indication: ['Rückenschmerzen', 'Migräne', 'Chronische Schmerzen', 'Verspannungen'],
    link: 'https://munichhealthcenter.de/leistungen/bioadaptive-impulsanwendung/'
  },
  {
    id: 'espinebot',
    name: 'eSpineBot',
    category: 'Ausstattung',
    emoji: '🦴',
    short: 'Roboter-gestützte Wirbelsäulen-Entlastung mit gezielter Druckanpassung – „Next-Level Rücken".',
    benefits: [
      'Mobilisiert einzelne Wirbelsegmente',
      'Entlastung der Bandscheiben',
      'Verbessert Beweglichkeit & Haltung',
      'Sanft, ohne manuelle Manipulation'
    ],
    indication: ['Rückenschmerzen', 'Bandscheibenprobleme', 'Wirbelsäule', 'Haltungsschäden'],
    link: 'https://munichhealthcenter.de/leistungen/espinebot/'
  },
  {
    id: 'hyperthermie',
    name: 'Ganzkörperhyperthermie',
    category: 'Ausstattung',
    emoji: '🌡️',
    short: 'Kontrollierte Anhebung der Körperkerntemperatur in den Fieberbereich. In der Onkologie als Begleitverfahren untersucht – die Anwendung bei chronischen Beschwerden und „Entgiftung" ist es nicht.',
    benefits: [
      'Imitiert „natürliches Fieber"',
      'Aktivierung von Hitzeschockproteinen',
      'Wird für Entgiftung und Immunfunktion beworben – dafür fehlen kontrollierte Daten',
      'Begleitend bei chronischen Beschwerden eingesetzt, ohne Wirknachweis'
    ],
    indication: ['Chronische Infekte', 'Detox', 'Immunsystem', 'Onkologie-Begleitung'],
    link: 'https://munichhealthcenter.de/leistungen/ganzkoerperhyperthermie/',
    podcasts: [
      {
        title: 'Ganzkörperhyperthermie & Infrarot: Die Wärme-Therapie im Faktencheck',
        spotify: '1z2wsgjkeNkKwJYdo4mCdW',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 73) · mit Paul & Paula. Die Wärme-Leiter von der Sauna über die Infrarotkabine bis zur medizinischen Ganzkörperhyperthermie, bei der die Kerntemperatur kontrolliert auf achtunddreißig bis neununddreißig Grad angehoben wird – künstliches Fieber unter Aufsicht, meist mit wassergefiltertem Infrarot A. Überraschung der Folge: Die Wärme hat einige der saubersten Studien des Feldes. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 11.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'vitalpilze-shop',
    name: 'Vitalpilze & Nahrungsergänzung',
    category: 'Ausstattung',
    emoji: '🍄',
    short: 'Kuratierter Shop mit ausgewählten Qualitätsprodukten – Vitalpilze, Mikronährstoffe und Funktional-Supplements.',
    benefits: [
      'Geprüfte Qualität verschiedener Anbieter',
      'Beratung vor Ort',
      'Abgestimmt auf Behandlungskonzepte',
      'Reishi, Cordyceps, Löwenmähne, Chaga u.a.'
    ],
    indication: ['Immunsystem', 'Energie', 'Fokus', 'Schlaf'],
    link: 'https://munichhealthcenter.de/leistungen/vitalpilze-und-nahrungsergaenzungsmittel/'
  },
  {
    id: 'screenings',
    name: 'Screenings',
    category: 'Ausstattung',
    emoji: '🧪',
    short: 'Kompakte Analysen für eine schnelle Orientierung über ausgewählte Gesundheitswerte als Einstieg in personalisierte Konzepte.',
    benefits: [
      'Zügige Bestandsaufnahme',
      'Basis für individuelle Empfehlungen',
      'Verlaufskontrolle möglich',
      'Niedrigschwelliger Einstieg'
    ],
    indication: ['Erstcheck', 'Prävention', 'Verlaufskontrolle'],
    link: 'https://munichhealthcenter.de/leistungen/screenings/'
  },

  // ============ SCHWERPUNKTE / LEISTUNGEN (7) ============
  {
    id: 'praevention-epigenetik',
    name: 'Prävention, Epigenetik & Genetik',
    category: 'Schwerpunkt',
    emoji: '🧬',
    short: 'Spezialisten reflektieren persönliche Gesundheitsressourcen und ordnen Vitalität individuell ein – mit Blick auf Gen- und Epigenetik.',
    benefits: [
      'Individuelle Risikoeinschätzung',
      'Lifestyle-Hebel auf Gen-Expression',
      'Langfristige Prävention',
      'Personalisierte Gesundheitsstrategie'
    ],
    indication: ['Prävention', 'Anti-Aging', 'Familiäre Risiken', 'Longevity'],
    link: 'https://munichhealthcenter.de/leistungen/praevention-epigenetik-genetik/'
  },
  {
    id: 'long-covid',
    name: 'Long Covid & Post-Vac',
    category: 'Schwerpunkt',
    emoji: '🦠',
    short: 'Ganzheitliche Einordnung anhaltender Beschwerden im zeitlichen Zusammenhang mit COVID-19 oder Impfungen.',
    benefits: [
      'Strukturierte Analyse der Symptome',
      'Kombination aus IHHT, Hyperthermie & VNS',
      'Mitochondriale Regeneration',
      'Begleitung über mehrere Wochen'
    ],
    indication: ['Fatigue', 'Atemnot', 'Brain Fog', 'Belastungsintoleranz'],
    link: 'https://munichhealthcenter.de/leistungen/long-covid-postvirale-belastungszustaende/'
  },
  {
    id: 'chronische-schmerzen',
    name: 'Chronische Schmerzen',
    category: 'Schwerpunkt',
    emoji: '💢',
    short: 'Begleitende Ansätze bei chronischen Schmerzzuständen – individuell und technologiegestützt.',
    benefits: [
      'Multimodaler Ansatz statt Symptomunterdrückung',
      'Kombiniert Bioadaptive Impulse, Infrarot-A, Hyperthermie',
      'VNS-Analyse als Basis',
      'Reduziert Medikamentenbedarf'
    ],
    indication: ['Rückenschmerzen', 'Fibromyalgie', 'Migräne', 'Gelenkschmerzen'],
    link: 'https://munichhealthcenter.de/leistungen/chronische-schmerzen/'
  },
  {
    id: 'stoffwechsel-autoimmun',
    name: 'Stoffwechsel & Autoimmun',
    category: 'Schwerpunkt',
    emoji: '🔄',
    short: 'Individuelle Betrachtung von Stoffwechsel- und Autoimmunprozessen, unterstützt durch moderne Technologien.',
    benefits: [
      'Wurzelursachen-Ansatz',
      'Mikronährstoff-Optimierung',
      'IHHT & Hyperthermie modulieren Immunsystem',
      'Langfristige Begleitung'
    ],
    indication: ['Hashimoto', 'Rheuma', 'Insulinresistenz', 'Übergewicht', 'Allergien'],
    link: 'https://munichhealthcenter.de/leistungen/stoffwechsel-und-autoimmunprozesse/'
  },
  {
    id: 'wirbelsaeule',
    name: 'Wirbelsäulenregeneration',
    category: 'Schwerpunkt',
    emoji: '🧘',
    short: 'Gezielte Impulse für Balance, Beweglichkeit und spürbare Entlastung der Wirbelsäule.',
    benefits: [
      'Kombiniert eSpineBot, Bioadaptive Impulse, Infrarot-A',
      'Strukturelle + neuronale Entlastung',
      'Schnelle Schmerzreduktion',
      'Nachhaltige Beweglichkeit'
    ],
    indication: ['Rücken', 'Nacken', 'Bandscheiben', 'Haltung'],
    link: 'https://munichhealthcenter.de/leistungen/wirbelsaeulenregeneration/'
  },
  {
    id: 'mikronaehrstoffe',
    name: 'Mikronährstoff-Beratung',
    category: 'Schwerpunkt',
    emoji: '💊',
    short: 'Individuelle Empfehlungen zur gezielten Unterstützung von Wohlbefinden und Leistungsfähigkeit.',
    benefits: [
      'Auf Laborwerte gestützt',
      'Vermeidet sinnlose Mehrfach-Supplementierung',
      'Berücksichtigt Wechselwirkungen',
      'Verlaufskontrolle möglich'
    ],
    indication: ['Erschöpfung', 'Mangelzustände', 'Sport', 'Schwangerschaft'],
    link: 'https://munichhealthcenter.de/leistungen/mikronaehrstoffe/'
  },
  {
    id: 'gesundheitscoaching',
    name: 'Gesundheitscoaching',
    category: 'Schwerpunkt',
    emoji: '🎯',
    short: 'Mentor*innen begleiten individuell – alltagsnahe Strategien für Balance, Energie und Lebensqualität.',
    benefits: [
      'Praxistaugliche Routinen',
      'Mindset & Motivation',
      'Verbindet Lifestyle, Ernährung, Bewegung',
      'Langfristige Verhaltensänderung'
    ],
    indication: ['Burnout', 'Stressmanagement', 'Lifestyle', 'Schlaf', 'Gewicht'],
    link: 'https://munichhealthcenter.de/leistungen/gesundheitscoaching/'
  },

  // ============ NETZWERK-PARTNER (5) ============
  {
    id: 'aerztliche-leistungen',
    name: 'Ärztliche Leistungen',
    category: 'Netzwerk',
    emoji: '👨‍⚕️',
    short: 'Experten aus funktioneller und regenerativer Medizin im MHC-Netzwerk.',
    benefits: [
      'Schulmedizin + Funktionsmedizin',
      'Schnittstelle zu Diagnostik',
      'Rezeptfähige ärztliche Begleitung',
      'Erfahrene Spezialisten'
    ],
    indication: ['Komplexe Krankheitsbilder', 'Zweitmeinung', 'Diagnostik-Bedarf'],
    link: 'https://munichhealthcenter.de/ausstattung/aerztliche-leistungen/'
  },
  {
    id: 'genanalysen',
    name: 'Genanalysen',
    category: 'Netzwerk',
    emoji: '🧬',
    short: 'Präzise Genanalysen für personalisierte Gesundheits- und Präventionsansätze.',
    benefits: [
      'SNP-basierte Risiko-Profile',
      'Pharmakogenetik (Medikamenten-Verträglichkeit)',
      'Ernährungs- & Sport-Genetik',
      'Basis für Epigenetik-Coaching'
    ],
    indication: ['Personalisierte Medizin', 'Prävention', 'Familiäre Risiken'],
    link: 'https://munichhealthcenter.de/ausstattung/genanalysen/'
  },
  {
    id: 'persoenlichkeitsdiagnostik',
    name: 'Persönlichkeitsdiagnostik',
    category: 'Netzwerk',
    emoji: '🧠',
    short: 'Wissenschaftlich fundierte Innermetrix-Analyse für Selbsterkenntnis und persönliche Entwicklung.',
    benefits: [
      'Werte, Stärken, Verhaltensmuster sichtbar',
      'Basis für Coaching & Karriere',
      'Verbessert Teamarbeit & Kommunikation',
      'Erkenntnisse für Stress-Mustern'
    ],
    indication: ['Coaching', 'Karriereentwicklung', 'Stressbewältigung', 'Teams'],
    link: 'https://munichhealthcenter.de/ausstattung/melanie-schwarz/'
  },
  {
    id: 'epigenetik-coach',
    name: 'Epigenetik-Coaching',
    category: 'Netzwerk',
    emoji: '🔬',
    short: 'Epigenetik individuell verstanden und begleitet – Lifestyle-Hebel auf Gen-Aktivität.',
    benefits: [
      'Übersetzt Gendaten in Alltag',
      'Ernährung, Bewegung, Stress als Schalter',
      'Verlaufsmessung der bio. Alterung',
      'Synergetisch zu Genanalysen'
    ],
    indication: ['Anti-Aging', 'Prävention', 'Lifestyle-Optimierung'],
    link: 'https://munichhealthcenter.de/ausstattung/epigenetik-coach/'
  },
  {
    id: 'mikronaehrstoff-coach',
    name: 'Mikronährstoff-Coaching',
    category: 'Netzwerk',
    emoji: '🌿',
    short: 'Personalisierte Mikronährstoff-Konzepte durch spezialisierte Expert*innen.',
    benefits: [
      'Labor- statt Bauchgefühl-basiert',
      'Berücksichtigt Genetik & Stoffwechsel',
      'Individuelle Dosierung',
      'Synergien sinnvoll kombiniert'
    ],
    indication: ['Mangelzustände', 'Chronische Erschöpfung', 'Sport', 'Detox'],
    link: 'https://munichhealthcenter.de/ausstattung/mikronaehrstoff-coach/'
  },

  // ============ EXTERN (1) ============
  {
    id: 'inuspherese',
    name: 'INUSpherese® (Blut-Apherese)',
    category: 'Extern',
    emoji: '🩸',
    short: 'Therapeutische Blutwäsche, die Umweltgifte (Schwermetalle, Pestizide, Mikroplastik, PFAS) und Entzündungsmediatoren aus dem Blut filtert.',
    benefits: [
      'Entfernt gezielt körperfremde Umweltbelastungen',
      'Reduziert chronische Entzündungs-Last (z.B. CRP, TNF-α)',
      'Kann bei umweltbedingten Beschwerden Symptome lindern',
      'Verfahren wird ausschließlich von spezialisierten Zentren angeboten'
    ],
    indication: ['Schwermetallbelastung', 'Chronische Entzündungen', 'CFS/ME', 'Umweltkrankheiten', 'Long Covid'],
    note: 'INUSpherese® wird nicht im Munich Health Center angeboten – Verfahren der INUS Medical Center GmbH (Alzenau).',
    link: 'https://www.inus.de/',
    podcasts: [
      {
        title: 'INUSpherese: Die Blutwäsche im Faktencheck',
        spotify: '3hY3H6CWvFVYTiY7AlsaeS',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 68) · mit Paul & Paula. Der seriöse Kern zuerst: Therapeutische Apherese ist seit Jahrzehnten Klinikroutine – Lipid-Apherese bei familiärer Hypercholesterinämie ist kassenfinanziert und leitliniengerecht. Die Folge zieht die Grenze zwischen dieser etablierten Medizin und dem, was die INUSpherese darüber hinaus verspricht. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 06.09.2026, 10:00)'
      }
    ]
  },
  // ============ BIOHACKING-METHODEN ============
  {
    id: 'hbot',
    name: 'Hyperbare Sauerstofftherapie (HBOT)',
    category: 'Biohacking',
    emoji: '🤿',
    short: 'Reiner Sauerstoff unter Überdruck in einer Druckkammer – flutet das Gewebe mit Sauerstoff, fördert Gefäßneubildung, Regeneration und Zellreparatur.',
    benefits: [
      'Stark erhöhte Sauerstoffversorgung von Gewebe und Wunden',
      'Fördert Gefäßneubildung und Stammzellmobilisierung',
      'Eine Studie (Hachmo 2020) zeigte längere Telomere und weniger seneszente Zellen',
      'Beliebt für Regeneration, Wundheilung und kognitive Erholung'
    ],
    indication: ['Regeneration', 'Wundheilung', 'Long Covid', 'Anti-Aging', 'Sport-Erholung'],
    note: 'Wirkung stark protokollabhängig; medizinische HBOT gehört in erfahrene Hände. Longevity-Nutzung ist off-label.',
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
    short: 'Rotes und nah-infrarotes Licht (ca. 630–850 nm) regt die Mitochondrien an – für Energie, Hautqualität, Regeneration und Entzündungshemmung.',
    benefits: [
      'Stimuliert die Mitochondrien (Cytochrom-c-Oxidase) → mehr zelluläre Energie',
      'Verbessert Hautqualität, Kollagen und Wundheilung',
      'Kann Muskelregeneration und Gelenkbeschwerden unterstützen',
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
    short: 'Zwei klassische Hormesis-Reize: Hitze (Sauna) und Kälte (Eisbad/Kryo) – kurzer Stress, der Herz-Kreislauf, Regeneration, Stimmung und Stressresistenz trainiert.',
    benefits: [
      'Sauna: in Bevölkerungsstudien mit weniger Herz-Kreislauf-Ereignissen und Sterblichkeit verknüpft (Laukkanen)',
      'Hitze aktiviert Hitzeschockproteine und verbessert die Gefäßfunktion',
      'Kälte: kann Stimmung, Wachheit und Stressresistenz steigern (Noradrenalin-Anstieg)',
      'Beide unterstützen Regeneration und mentale Widerstandskraft'
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
    short: 'Hochdosiertes NAD+ direkt über die Vene. Dass der Spiegel dadurch steigt, ist unstrittig – ob daraus mehr Energie, Fokus oder Regeneration werden, ist an Menschen nicht belegt.',
    benefits: [
      'Hebt den zellulären NAD+-Spiegel direkt und stark an',
      'Berichte über mehr Energie, Klarheit und Regeneration',
      'Umgeht die begrenzte orale Aufnahme von NAD-Vorstufen',
      'In der Longevity-Szene für Zellreparatur und Sirtuine genutzt – die Begründung ist mechanistisch, nicht klinisch'
    ],
    indication: ['Energie/Fatigue', 'Regeneration', 'Anti-Aging', 'Fokus', 'Sucht-Recovery (experimentell)'],
    note: 'Langsame Infusion nötig (schnelle Gabe verursacht Unwohlsein); klinischer Longevity-Nutzen nicht bewiesen. Nur ärztlich.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31724657/'
  },
  {
    id: 'tpe-plasmaaustausch',
    name: 'Therapeutischer Plasmaaustausch (TPE)',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Das eigene Blutplasma wird ausgetauscht – die Idee dahinter: Alterungs- und Entzündungsfaktoren aus dem Blut entfernen („Plasma-Verdünnung"). Medizinisch etabliert bei bestimmten Erkrankungen, als Longevity-Verfahren experimentell.',
    benefits: [
      'Entfernt zirkulierende Entzündungs-/Alterungsfaktoren aus dem Blut',
      'Tierdaten (Plasma-Verdünnung) zeigten Verjüngungseffekte in Geweben',
      'Wird bei Autoimmun-/neurologischen Erkrankungen medizinisch genutzt',
      'Longevity-Kliniken bieten es als Anti-Aging-Verfahren an – ohne klinischen Wirknachweis'
    ],
    indication: ['Anti-Aging (experimentell)', 'Entzündung', 'Autoimmun (medizinisch)', 'Entgiftung'],
    note: 'Longevity-Nutzung experimentell und teuer; medizinisch etabliert nur für bestimmte Erkrankungen. Verwandt zur INUSpherese. Nur ärztlich.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32474458/'
  },
  {
    id: 'stammzelltherapie',
    name: 'Stammzelltherapie',
    category: 'Biohacking',
    emoji: '🧫',
    short: 'Eigene oder gespendete Stammzellen (z. B. mesenchymal) zur Regeneration von Gelenken, Gewebe und – in Longevity-Kliniken – als systemischer Anti-Aging-Ansatz.',
    benefits: [
      'Potenzial zur Regeneration von Knorpel, Gelenken und Gewebe',
      'Entzündungsmodulierende und heilungsfördernde Effekte',
      'Wird bei orthopädischen Problemen und in Longevity-Kliniken genutzt',
      'Aktives Forschungsfeld mit breitem Potenzial'
    ],
    indication: ['Gelenke/Orthopädie', 'Regeneration', 'Anti-Aging', 'Entzündung'],
    note: 'Evidenz je nach Anwendung sehr unterschiedlich; viele Angebote sind unreguliert und teuer. Seriöse Klinik und Aufklärung entscheidend.',
    link: 'https://www.fda.gov/vaccines-blood-biologics/consumers-biologics/consumer-alert-regenerative-medicine-products-including-stem-cells-and-exosomes'
  },
  {
    id: 'exosomen',
    name: 'Exosomen-Therapie',
    category: 'Biohacking',
    emoji: '🧪',
    short: 'Winzige Zell-Botenstoffbläschen (aus Stammzellen) transportieren Wachstums- und Reparatursignale – genutzt für Haut, Haar, Gelenke und Regeneration.',
    benefits: [
      'Übertragen regenerative Signale (Wachstumsfaktoren, microRNA) ohne ganze Zellen',
      'Beliebt für Haut-Rejuvenation, Haarwachstum und Gelenke',
      'Entzündungsmodulierend und heilungsfördernd (präklinisch/erste Daten)',
      'Als „zellfreie" Alternative zur Stammzelltherapie beworben'
    ],
    indication: ['Haut & Haar', 'Gelenke', 'Regeneration', 'Anti-Aging'],
    note: 'Weitgehend unreguliert; die FDA warnt vor nicht zugelassenen Exosomen-Produkten. Qualität und Sicherheit sehr anbieterabhängig.',
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
      'Etabliert bei Sehnen-/Gelenkbeschwerden (z. B. Tennisellenbogen, Arthrose)',
      'Beliebt für Haarwachstum und Haut („Vampir-Lifting")',
      'Körpereigenes Material – geringes Allergierisiko'
    ],
    indication: ['Gelenke/Sehnen', 'Haarwachstum', 'Haut/Ästhetik', 'Regeneration'],
    note: 'Evidenz je nach Indikation gemischt (bei manchen orthopädischen Anwendungen gut, bei anderen begrenzt). Ärztlich durchführen lassen.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33790417/'
  },
  {
    id: 'ozontherapie',
    name: 'Ozontherapie',
    category: 'Biohacking',
    emoji: '🅾️',
    short: 'Medizinisches Ozon (z. B. als Eigenblutbehandlung) soll Sauerstoffverwertung, Durchblutung und Immunfunktion anregen – populär, aber wissenschaftlich umstritten.',
    benefits: [
      'Soll die Sauerstoffverwertung und Durchblutung verbessern',
      'Berichtete immunmodulierende und antimikrobielle Effekte',
      'Wird bei chronischen Infekten, Wunden und Erschöpfung eingesetzt',
      'Verschiedene Anwendungsformen (Eigenblut, lokal)'
    ],
    indication: ['Immun/Infekte', 'Durchblutung', 'Wundheilung', 'Erschöpfung'],
    note: 'Wissenschaftlich umstritten; Evidenz begrenzt und uneinheitlich. Nur bei erfahrenen Behandlern, korrekte Dosierung ist sicherheitskritisch.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6122111/'
  },
  {
    id: 'cgm',
    name: 'CGM – kontinuierliche Glukosemessung',
    category: 'Biohacking',
    emoji: '📟',
    short: 'Ein kleiner Sensor am Arm misst rund um die Uhr den Blutzucker – macht sichtbar, wie Essen, Sport, Stress und Schlaf den Glukoseverlauf beeinflussen.',
    benefits: [
      'Zeigt in Echtzeit, wie einzelne Mahlzeiten den Blutzucker treiben',
      'Hilft, Glukosespitzen zu glätten (bessere Energie, weniger Heißhunger)',
      'Individuelles Feedback für Ernährung, Sport und Schlaf',
      'Objektiver Marker für metabolische Gesundheit'
    ],
    indication: ['Stoffwechsel-Optimierung', 'Gewicht', 'Energie/Heißhunger', 'Prädiabetes-Prävention'],
    note: 'Für Nicht-Diabetiker ein Optimierungs-Tool, kein Diagnosegerät. Werte im Kontext interpretieren; einzelne Spitzen sind normal.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10528360/',
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
      'tDCS: schwacher Gleichstrom, soll Erregbarkeit von Hirnarealen anpassen (Fokus, Lernen)',
      'TMS: magnetische Impulse, medizinisch bei Depression zugelassen',
      'Nicht-invasiv und schmerzarm',
      'Aktives Forschungsfeld für Kognition und Stimmung'
    ],
    indication: ['Fokus/Kognition', 'Stimmung', 'Lernen', 'Erholung'],
    note: 'TMS medizinisch etabliert (u. a. Depression); tDCS-Heimgeräte sind weniger reguliert – Evidenz gemischt, korrekte Platzierung/Dosis wichtig.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/27090022/'
  },
  {
    id: 'bfr-training',
    name: 'Blood-Flow-Restriction-Training (BFR)',
    category: 'Biohacking',
    emoji: '🩸',
    short: 'Krafttraining mit leichter Blutstau-Manschette: erzeugt mit sehr geringen Gewichten einen starken Muskelreiz – ideal für Reha und gelenkschonenden Aufbau.',
    benefits: [
      'Muskelaufbau mit nur 20–30 % des üblichen Gewichts',
      'Sehr gelenkschonend – ideal in der Reha und nach Verletzungen',
      'Starker Wachstumsreiz (Metabolit-Stau, GH-Ausschüttung)',
      'Zeit- und materialsparend'
    ],
    indication: ['Muskelaufbau', 'Reha', 'Gelenkschonung', 'Sport-Performance'],
    note: 'Manschettendruck korrekt dosieren (nicht abbinden!); bei Thrombose-/Gefäßrisiko oder Bluthochdruck vorher ärztlich abklären.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/31696381/'
  },
  {
    id: 'ems',
    name: 'EMS – Elektromuskelstimulation',
    category: 'Biohacking',
    emoji: '⚡',
    short: 'Elektrische Impulse lassen die Muskeln zusätzlich kontrahieren – für effizientes Ganzkörper-Training in kurzer Zeit oder gezielte Muskelaktivierung.',
    benefits: [
      'Intensives Ganzkörper-Training in ~20 Minuten',
      'Aktiviert auch tiefe Muskulatur',
      'Gelenkschonend (wenig äußere Last)',
      'Auch für Reha und Muskelaktivierung genutzt'
    ],
    indication: ['Muskelaufbau', 'Zeiteffizienz', 'Reha', 'Rücken/Core'],
    note: 'Sehr intensiv – Überlastung/Muskelkater-Risiko; nicht bei Herzschrittmacher, Schwangerschaft oder akuten Erkrankungen. Anleitung wichtig.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6685471/'
  },
  {
    id: 'vibrationstraining',
    name: 'Vibrationstraining (WBV)',
    category: 'Biohacking',
    emoji: '📳',
    short: 'Training auf einer vibrierenden Platte: die schnellen Reize lösen viele kleine Muskelkontraktionen aus – für Kraft, Balance und Knochendichte.',
    benefits: [
      'Aktiviert viele Muskelfasern über Vibrationsreflexe',
      'Kann Kraft, Balance und Beweglichkeit verbessern',
      'Hinweise auf bessere Knochendichte (Osteoporose-Prävention)',
      'Gelenkschonend, auch für Ältere geeignet'
    ],
    indication: ['Kraft & Balance', 'Knochendichte', 'Durchblutung', 'Reha'],
    note: 'Bei akuten Gelenk-/Bandscheibenproblemen, Thrombose oder Schwangerschaft vorher abklären. Effektstärke variiert je nach Gerät/Protokoll.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/29065839/'
  },
  {
    id: 'floating',
    name: 'Floating (Isolationstank)',
    category: 'Biohacking',
    emoji: '🛁',
    short: 'Schwerelos treiben in warmem Salzwasser bei Dunkelheit und Stille: tiefe Entspannung, Stressabbau und mentale Erholung im Isolationstank.',
    benefits: [
      'Tiefe Entspannung und Aktivierung des Parasympathikus',
      'Kann Stress, Angst und Muskelverspannungen reduzieren',
      'Fördert mentale Klarheit und Regeneration',
      'Bittersalz (Magnesium) und Schwerelosigkeit entlasten Gelenke'
    ],
    indication: ['Stress & Angst', 'Regeneration', 'Schlaf', 'Verspannungen'],
    note: 'Sehr sicher; bei Klaustrophobie langsam herantasten (Deckel offen möglich). Effekte v. a. subjektiv/Entspannung.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6134492/'
  },
  {
    id: 'vagus-stimulation',
    name: 'Vagusnerv-Stimulation (aktiv)',
    category: 'Biohacking',
    emoji: '🧠',
    short: 'Gezielte Reizung des Vagusnervs (z. B. per Ohr-Elektrode): soll das parasympathische Nervensystem stärken – für Entspannung, HRV und Entzündungsregulation.',
    benefits: [
      'Aktiviert den Parasympathikus (Ruhe-/Erholungsmodus)',
      'Kann die Herzratenvariabilität (HRV) und Stressresistenz verbessern',
      'Entzündungshemmende Effekte über den „cholinergen Reflex" untersucht',
      'Nicht-invasive Ohr-Geräte (taVNS) verfügbar'
    ],
    indication: ['Stress & HRV', 'Entspannung', 'Stimmung', 'Entzündung'],
    note: 'Medizinische VNS-Implantate sind zugelassen (z. B. Epilepsie/Depression); Heim-Ohr-Geräte (taVNS) sind weniger reguliert, Evidenz gemischt. Ergänzt die vorhandene HRV-Analyse.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5859128/'
  },
  {
    id: 'iv-vitamintherapie',
    name: 'IV-Vitamintherapie (Myers-Cocktail)',
    category: 'Biohacking',
    emoji: '💉',
    short: 'Vitamine und Mineralstoffe direkt über die Vene (z. B. „Myers-Cocktail"). Der Blutspiegel steigt schnell – ein Nutzen ist vor allem bei nachgewiesenem Mangel oder gestörter Aufnahme plausibel, bei Gesunden nicht.',
    benefits: [
      'Hohe Mikronährstoff-Spiegel unabhängig von der Darmaufnahme',
      'Beliebt für Energie, Immununterstützung und Erholung – Studien dazu sind dünn',
      'Nützlich bei nachgewiesenen Mängeln oder Aufnahmestörungen',
      'Schneller Effekt (direkt im Blut)'
    ],
    indication: ['Energie/Fatigue', 'Immununterstützung', 'Regeneration', 'Mangelausgleich'],
    note: 'Nutzen bei Gesunden meist begrenzt (gut ernährter Körper scheidet Überschuss aus). Nur ärztlich; auf Nierenfunktion/Elektrolyte achten.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2939841/'
  },
  {
    id: 'grounding-earthing',
    name: 'Grounding / Earthing',
    category: 'Biohacking',
    emoji: '🌱',
    short: 'Direkter Hautkontakt zur Erde (barfuß oder per Erdungsmatte): soll über den Ladungsausgleich Entzündung, Schlaf und Erholung günstig beeinflussen.',
    benefits: [
      'Berichte über besseren Schlaf und weniger Stress',
      'Kleine Studien: Hinweise auf reduzierte Entzündung und bessere Durchblutung',
      'Einfach und kostenlos (Barfußgehen auf natürlichem Boden)',
      'Fördert Zeit in der Natur/Entschleunigung'
    ],
    indication: ['Schlaf', 'Stress', 'Regeneration', 'Wohlbefinden'],
    note: 'Evidenz überwiegend klein und teils vom Umfeld der Vermarkter; Effekte oft subjektiv. Als angenehme, risikoarme Gewohnheit einzuordnen.',
    link: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3265077/'
  },
  {
    id: 'chelat-therapie',
    name: 'Chelat-Therapie',
    category: 'Biohacking',
    emoji: '🧲',
    short: 'Infusion von Bindemitteln (z. B. EDTA), die Schwermetalle im Blut binden und ausleiten – medizinisch bei nachgewiesener Vergiftung, sonst umstritten.',
    benefits: [
      'Etabliert und wirksam bei nachgewiesener Schwermetallvergiftung (z. B. Blei)',
      'Bindet Metalle, die dann über die Niere ausgeschieden werden',
      'Wird in der Umweltmedizin zur Entgiftung eingesetzt'
    ],
    indication: ['Schwermetallbelastung (medizinisch)', 'Umweltmedizin'],
    note: 'Als allgemeine „Entgiftung"/Anti-Aging umstritten und NICHT belegt; ernste Risiken (Nieren, Elektrolytentgleisung, in Einzelfällen tödlich). Nur bei klarer Indikation und streng ärztlich.',
    link: 'https://www.nccih.nih.gov/health/chelation-therapy'
  },
  {
    id: 'fasten-autophagie',
    name: 'Fasten & Autophagie',
    category: 'Biohacking',
    emoji: '⏳',
    short: 'Geplante Essenspausen von 16:8 bis zum mehrtägigen Fasten: Der Körper schaltet von Wachstum (mTOR) auf Aufräumen um und startet das Zellrecycling.',
    benefits: [
      'Essenspausen senken Insulin und verbessern die Insulinsensitivität',
      'NEJM-Übersicht 2019: bessere Stoffwechsel-Marker, weniger Entzündung, höhere Stressresistenz der Zellen',
      'Deutliche Autophagie-Signale zeigen sich beim Menschen vor allem jenseits von etwa 24 Stunden Fasten',
      'Frühes Essfenster (ca. 8–18 Uhr) schneidet bei Blutzucker, Blutdruck und Appetit-Hormonen besser ab'
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
    short: 'Der stärkste kostenlose Longevity-Hebel: Im Tiefschlaf laufen Zellreparatur, Hormonpuls und die glymphatische Hirnspülung – Regelmäßigkeit zählt mehr als Dauer.',
    benefits: [
      'Im Tiefschlaf laufen Gewebereparatur und der größte Wachstumshormon-Puls des Tages',
      'Das glymphatische System spült nachts Stoffwechsel-Abfälle wie Beta-Amyloid aus dem Gehirn',
      'Regelmäßige Schlafzeiten: in UK-Biobank-Daten deutlich niedrigeres Sterberisiko als bei unregelmäßigem Rhythmus',
      'Ausreichend Schlaf stützt Immunabwehr, Insulinsensitivität und Testosteronspiegel'
    ],
    indication: ['Longevity', 'Regeneration', 'Immunsystem', 'Stoffwechsel', 'Kognition'],
    note: 'Chronische Schlafstörungen, Schnarchen mit Atemaussetzern oder bleierne Tagesmüdigkeit gehören in ärztliche Abklärung – Stichwort Schlafapnoe.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26118561/',
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
    short: 'Die Abstände zwischen zwei Herzschlägen schwanken leicht – wie stark, zeigt das Zusammenspiel von Sympathikus und Vagus und damit Stress und Erholung.',
    benefits: [
      'RMSSD aus dem Nachtwert spiegelt fast rein die Vagus-Bremse und gilt als Erholungs-Marker',
      'Niedrige HRV war schon in der Framingham-Herzstudie mit erhöhtem Sterblichkeitsrisiko verbunden',
      'Ein Abfall über mehrere Tage zeigt Infekt, Übertraining oder Dauerstress vor den Symptomen an',
      'Resonanz-Atmung mit sechs Atemzügen pro Minute hebt die HRV akut; HRV-Biofeedback ist anerkannt'
    ],
    indication: ['Stress & Erholung', 'Trainingssteuerung', 'Schlaf-Feedback', 'Infekt-Frühwarnung'],
    note: 'Absolute Werte taugen nicht zum Vergleich zwischen Personen – es zählt die eigene Baseline über zwei bis vier Wochen und deren Trend; die HRV ersetzt kein EKG.',
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
      'Progesteron hebt die Kerntemperatur um 0,3–0,5 °C – die Lutealphase wird in Wearable-Daten sichtbar',
      'Sinkende HRV und höherer Ruhepuls in der Lutealphase sind Physiologie, kein Stress-Einbruch',
      'Grundumsatz und Appetit steigen luteal um etwa 100–300 kcal – Protein und Kohlenhydrate lassen sich planen',
      'Wiederkehrende PMS-Tage werden vorhersehbar; regelmäßiger Sport ist dagegen gut belegt'
    ],
    indication: ['Zyklusverständnis', 'Trainingsplanung', 'Schlaf', 'PMS-Beschwerden', 'Eisen & Ferritin'],
    note: 'Zyklusbasierte Trainingspläne nach App-Schablone sind nicht belegt: Die Meta-Analyse von McNulty (2020) fand nur triviale Phasenunterschiede bei niedriger Studienqualität, und unter hormoneller Verhütung fehlt der natürliche Zyklus ganz.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/32661839/',
    podcasts: [
      {
        title: 'Zyklus & Biohacking: Der weibliche Rhythmus im Faktencheck',
        spotify: '1qB1UgMcCxMIEvyikU2zxO',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 74) · mit Paul & Paula. Was sich über den Zyklus physiologisch messbar verändert – Temperatur, Ruhepuls, HRV, Grundumsatz – und warum die verbreiteten zyklusbasierten Trainingspläne trotzdem auf dünner Datenlage stehen. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 12.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'alkohol-reduktion',
    name: 'Alkohol reduzieren',
    category: 'Biohacking',
    emoji: '🍷',
    short: 'Kein Wirkstoff, sondern ein Weglass-Hebel: Weniger Alkohol verbessert messbar Schlaf, HRV und Regeneration – und senkt das Krebsrisiko.',
    benefits: [
      'Schlaf: schon ein bis zwei Gläser senken die nächtliche HRV, heben den Ruhepuls und kürzen den REM-Schlaf',
      'Training: Alkohol nach dem Sport hemmt die Muskelproteinsynthese deutlich, auch mit Protein',
      'Zwei bis vier Wochen ohne: Blutdruck, Schlafarchitektur und HRV bessern sich, eine beginnende Fettleber bildet sich zurück',
      'Weniger Acetaldehyd – Alkohol ist von der IARC als Karzinogen der Gruppe 1 eingestuft'
    ],
    indication: ['Schlafqualität', 'HRV & Ruhepuls', 'Regeneration', 'Krebsrisiko', 'Leber & Blutdruck'],
    note: 'Es gibt keine gesundheitlich unbedenkliche Menge, aber die Risikokurve beginnt flach – jede Reduktion zählt, und wer beim Aufhören Schwierigkeiten merkt, gehört zu Hausarzt oder Suchtberatung statt zur Selbstoptimierung.',
    link: 'https://www.who.int/europe/news/item/04-01-2023-no-level-of-alcohol-consumption-is-safe-for-our-health',
    podcasts: [
      {
        title: 'Alkohol: Das Genussgift im Faktencheck',
        spotify: '3pvys3Kan18GwfiT7ArIok',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 77) · mit Paul & Paula. Was ein bis zwei Gläser messbar mit Schlaf, HRV und Ruhepuls machen, was nach zwei bis vier Wochen ohne zurückkommt – und warum die WHO sagt, dass es keine unbedenkliche Menge gibt. Reine Information, keine Anwendungsempfehlung. (Veröffentlichung: 15.09.2026, 10:00)'
      }
    ]
  },
  {
    id: 'zone2-vo2max',
    name: 'Zone 2 & VO2max-Training',
    category: 'Biohacking',
    emoji: '🏃',
    short: 'Ausdauertraining in zwei Intensitäten: lockere Zone 2 als Fundament plus ein harter VO2max-Reiz pro Woche – die Ausdauer-Währung der Langlebigkeit.',
    benefits: [
      'VO2max ist ein starker Sterblichkeits-Marker: Unfiteste hatten rund fünffach höheres Risiko als die Fittesten',
      'Zone 2 baut Mitochondrien und Kapillaren auf, senkt Laktat und verbessert die Insulinsensitivität',
      'Das norwegische 4x4-Intervall hebt die VO2max auch bei Älteren und Herzpatienten zuverlässig an',
      'Schon ein bis zwei Stunden zügige Bewegung pro Woche senken das Sterberisiko am deutlichsten'
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
