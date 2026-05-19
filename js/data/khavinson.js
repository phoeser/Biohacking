/* Khavinson-Bioregulator-Peptide
 *
 * Kurzkettige Peptide (meist 2–4 Aminosäuren), entwickelt von Prof. Vladimir Khavinson
 * am St. Petersburger Institut für Bioregulation und Gerontologie (seit den 1970ern).
 * Wirkprinzip: tissue-spezifische, epigenetische Aktivierung von Gen-Expression
 * im Zielgewebe (kein Eingriff in die DNA-Sequenz).
 *
 * Status in Deutschland: KEINE Zulassung als Arzneimittel.
 * In Russland teilweise als Medikament zugelassen (z.B. Cortexin, Thymalin, Epithalamin).
 * Verkauf im Westen überwiegend als „Research Compound" oder Nahrungsergänzung – rechtlich grau.
 *
 * Felder wie experimental.js: id, name, altNames, class, emoji, short, moa,
 * benefits, risks, status, sources, community
 */
const KHAVINSON = [
  // ============ PINEAL & GEHIRN ============
  {
    id: 'kh-epitalon',
    name: 'Epitalon (Epithalon)',
    altNames: 'AEDG · Ala-Glu-Asp-Gly · Epithalamin (Vorläufer)',
    class: 'Tetrapeptid, Pineal-Bioregulator',
    emoji: '🌙',
    short: 'Das bekannteste Khavinson-Peptid. Aktiviert Telomerase, gilt als Anti-Aging-Klassiker der russischen Schule.',
    moa: 'Bindet an Promotorbereiche von Telomerase-Reverse-Transkriptase (TERT) und Sirtuin-Genen, soll dadurch Telomerverlängerung und epigenetische Gen-Re-Aktivierung fördern. Beeinflusst Melatonin- und Cortisol-Rhythmus.',
    benefits: [
      'Verlängerte Telomere in vitro (Khavinson-Studien)',
      'In Mausmodellen: bis +13% mittlere Lebenserwartung, reduzierte Tumorinzidenz',
      'Verbesserter Schlaf-Wach-Rhythmus bei älteren Probanden',
      'Erhöht antioxidative Enzyme (SOD, GPx, GST)'
    ],
    risks: [
      'Datenlage fast ausschließlich aus russischen Studien – außerhalb Russlands begrenzt repliziert',
      'Telomerase-Aktivierung theoretisch krebsfördernd – langfristige Sicherheit unklar',
      'Bezugsqualität auf grauem Markt häufig fraglich',
      'Keine FDA/EMA-Zulassung'
    ],
    status: 'Forschungspeptid. In DE/USA nicht verkehrsfähig.',
    sources: [
      { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epitalon & Telomerlänge', url: 'https://pubmed.ncbi.nlm.nih.gov/14760439/' },
      { title: 'Anisimov VN et al., Mech Ageing Dev 2003 – Lebensspanne in Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/12694675/' },
      { title: 'Khavinson VK et al., Molecules 2020 – AEDG-Mechanismus (Neurogenese)', url: 'https://www.mdpi.com/1420-3049/25/3/609' }
    ],
    community: [
      { title: 'Khavinson Peptides – Complete Guide (SeekPeptides)', url: 'https://www.seekpeptides.com/blog/articles/khavinson-peptides-complete-guide' }
    ]
  },
  {
    id: 'kh-pinealon',
    name: 'Pinealon',
    altNames: 'EDR · Glu-Asp-Arg',
    class: 'Tripeptid, Neuro-/Pineal-Bioregulator',
    emoji: '🧠',
    short: 'Tripeptid aus dem Cortex-Extrakt. Beworbene Wirkung: Neuroprotektion, kognitive Klarheit, Erholung nach Stress.',
    moa: 'Soll Sauerstoff-Mangel-Toleranz erhöhen, Glutamat-induzierte Neurotoxizität dämpfen und antioxidative Genexpression im Gehirn fördern. Verwandt mit Cortexin (Mutterpräparat) und Cortagen.',
    benefits: [
      'Tierstudien: Schutz vor Hypoxie & Hypothermie bei 18 Monate alten Ratten',
      'Bessere Lern- und Gedächtnisleistung im Mausmodell',
      'Beworbene Indikationen: Brain-Fog, Konzentrationsprobleme, Schlafqualität',
      'In Alzheimer-Modellen präklinisch untersucht'
    ],
    risks: [
      'Keine kontrollierten Humanstudien außerhalb Russlands',
      'Langzeitsicherheit am Menschen nicht etabliert',
      'Selbstanwendung über Forschungs-Peptidshops – Reinheit fraglich',
      'Keine westliche Zulassung'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – Cortexin-Derivat Pinealon Übersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=pinealon' },
      { title: 'Anisimov VN et al., Biogerontology 2010 – Peptid-Bioregulatoren-Review', url: 'https://pubmed.ncbi.nlm.nih.gov/19960257/' }
    ],
    community: [
      { title: 'Pinealon – Research Evidence (PeptideInsight)', url: 'https://peptideinsight.com/en/peptides/pinealon' }
    ]
  },
  {
    id: 'kh-cortexin',
    name: 'Cortexin',
    altNames: 'Cortex-Polypeptid-Komplex',
    class: 'Cortex-Extrakt (höhermolekularer Peptidkomplex)',
    emoji: '🧬',
    short: 'In Russland zugelassenes Medikament für Schlaganfall-Nachsorge und kognitive Störungen. Mutterpräparat von Pinealon & Cortagen.',
    moa: 'Komplex aus tierischen Cortex-Peptiden mit neurotrophen, antioxidativen und neuroprotektiven Eigenschaften. Wirkt auf Neuroplastizität und Mikrozirkulation im Gehirn.',
    benefits: [
      'Russische Phase-3-RCT: positive Effekte bei akutem ischämischem Schlaganfall',
      'Eingesetzt bei kindlichem Hirntrauma, Enzephalopathien, Lernstörungen',
      'Gute Verträglichkeit über Jahrzehnte russischer Praxis-Erfahrung',
      'Wird i.m. gespritzt – nicht oral verfügbar'
    ],
    risks: [
      'Allergische Reaktionen möglich (Peptid-Mix tierischen Ursprungs)',
      'Bezug außerhalb Russlands schwierig & rechtlich grau',
      'Keine FDA/EMA-Zulassung',
      'Studienqualität teils nicht westlichen Standards entsprechend'
    ],
    status: 'In RU/Belarus zugelassenes Medikament. In DE NICHT verkehrsfähig.',
    sources: [
      { title: 'Skoromets AA et al. – RCT Cortexin bei Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=cortexin+stroke' },
      { title: 'Khavinson VK – Peptide Medicines: Past, Present, Future', url: 'https://www.clinmedjournal.com/jour/article/view/29' }
    ],
    community: [
      { title: 'Cortexin – Research Evidence (PeptideInsight)', url: 'https://peptideinsight.com/en/peptides/cortexin' }
    ]
  },

  // ============ IMMUN / THYMUS ============
  {
    id: 'kh-vilon',
    name: 'Vilon',
    altNames: 'KE · Lys-Glu',
    class: 'Dipeptid, Thymus-/Immun-Bioregulator',
    emoji: '🛡️',
    short: 'Das einfachste Khavinson-Peptid (nur 2 Aminosäuren). Soll Immunfunktion und Zell-Differenzierung fördern.',
    moa: 'Aktiviert T-Zell-Reifung und natürliche Killerzellen, moduliert Cytokin-Produktion. In Studien auch retinale und neuronale Regeneration berichtet.',
    benefits: [
      'Steigert T-Helferzellen-Aktivität bei Älteren',
      'Reduziert altersbedingte Immunschwäche (Tierstudien)',
      'Beworben bei chronischer Müdigkeit & häufigen Infekten',
      'Synergetisch mit Epitalon eingesetzt'
    ],
    risks: [
      'Bei Autoimmunerkrankungen mit Vorsicht (Immunaktivierung)',
      'Keine westlichen Phase-2/3-Daten',
      'Bezug nur über Forschungsmarkt',
      'Langzeitfolgen unbekannt'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK, Anisimov VN – Bull Exp Biol Med – Vilon Immunfunktion', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=vilon+khavinson' },
      { title: 'Anisimov VN et al., Biogerontology 2010 – Bioregulatoren-Review', url: 'https://pubmed.ncbi.nlm.nih.gov/19960257/' }
    ],
    community: [
      { title: 'Khavinson Bioregulators – CalcMyPeptide', url: 'https://www.calcmypeptide.com/blog/khavinson-bioregulators-epithalon-guide' }
    ]
  },
  {
    id: 'kh-thymalin',
    name: 'Thymalin / Thymogen',
    altNames: 'EW · Glu-Trp (Thymogen) · Thymus-Polypeptid (Thymalin)',
    class: 'Dipeptid (Thymogen) / Thymus-Extrakt (Thymalin)',
    emoji: '🩻',
    short: 'In Russland zugelassenes Immun-Medikament. Soll altersbedingten Thymus-Schwund teilweise ausgleichen.',
    moa: 'Stimuliert T-Lymphozyten-Differenzierung, balanciert CD4/CD8-Verhältnis und steigert NK-Zellen. Reguliert Cytokine wie IL-2 und IFN-γ.',
    benefits: [
      'Russische Klinikstudien: bessere Immunabwehr bei Älteren & Chemotherapie-Patienten',
      'Reduziert Infekt-Raten in Risikogruppen',
      'In Long-COVID-Studien (Russland) positive Effekte berichtet',
      'Gute Langzeit-Verträglichkeit dokumentiert'
    ],
    risks: [
      'Allergische Reaktionen möglich',
      'Bei aktiven Autoimmunerkrankungen Vorsicht',
      'Studien überwiegend aus Russland, methodisch nicht immer westlichen Standards entsprechend',
      'Keine westliche Zulassung'
    ],
    status: 'In RU zugelassen. In DE NICHT verkehrsfähig.',
    sources: [
      { title: 'Khavinson VK et al., Biogerontology 2020 – Thymalin & Immunseneszenz', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=thymalin+khavinson' },
      { title: 'Khavinson VK et al. – Thymogen Glu-Trp Mechanismus', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=thymogen+glu+trp' }
    ],
    community: [
      { title: 'Khavinson Bioregulators – CalcMyPeptide', url: 'https://www.calcmypeptide.com/blog/khavinson-bioregulators-epithalon-guide' }
    ]
  },

  // ============ HERZ-KREISLAUF ============
  {
    id: 'kh-vesugen',
    name: 'Vesugen',
    altNames: 'KED · Lys-Glu-Asp',
    class: 'Tripeptid, Gefäß-/Endothel-Bioregulator',
    emoji: '❤️',
    short: 'Soll die Endothelfunktion stützen und altersbedingte Gefäßveränderungen verlangsamen.',
    moa: 'Wirkt auf Endothelzell-Genexpression, soll NO-Verfügbarkeit verbessern und endotheliale Dysfunktion (frühes Stadium der Atherosklerose) reduzieren.',
    benefits: [
      'Beworben bei Atherosklerose, Bluthochdruck, Mikrozirkulationsstörungen',
      'In Tiermodellen: bessere Gefäßelastizität, weniger Plaque-Bildung',
      'Soll Mesenchymale Stammzellen-Proliferation fördern',
      'Häufig mit Chelohart (Herz) kombiniert'
    ],
    risks: [
      'Keine westlichen RCT-Daten',
      'Wechselwirkung mit Blutverdünnern theoretisch möglich',
      'Bezug nur über Forschungsmarkt – Qualität unklar',
      'Langzeit-Sicherheit beim Menschen nicht etabliert'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – KED-Peptid Endothel (PubMed)', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=vesugen+OR+%22Lys-Glu-Asp%22' },
      { title: 'Khavinson VK et al., Adv Gerontol 2013 – Peptide Bioregulators', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: [
      { title: 'Khavinson Bioregulators Complete Guide (Loti Labs)', url: 'https://lotilabs.com/resources/khavinson-bioregulators-the-complete-research-guide-to-epitalon-pinealon-prostamax-short-chain-peptides/' }
    ]
  },
  {
    id: 'kh-chelohart',
    name: 'Chelohart / Cardiogen',
    altNames: 'AED-Pro · Ala-Glu-Asp-Pro · Cytomax A-6',
    class: 'Tetrapeptid, Herzmuskel-Bioregulator',
    emoji: '🫀',
    short: 'Bioregulator-Peptid aus Herzgewebe. Soll Kardiomyozyten-Funktion und Regeneration unterstützen.',
    moa: 'Aktiviert herzspezifische Gen-Expression, soll Stoffwechsel der Herzmuskelzellen und Erholung nach Belastung verbessern.',
    benefits: [
      'Beworben bei chronischer Herzinsuffizienz, Arrhythmien, Genesung nach Infarkt',
      'In Tiermodellen: bessere Mitochondriendichte im Myokard',
      'Synergie mit Vesugen (Gefäße) in Bioregulator-Stacks',
      'Sehr gut verträglich in russischen Studien'
    ],
    risks: [
      'Keine westlichen kardiologischen Studien',
      'Selbstmedikation bei Herzerkrankung gefährlich – immer Kardiologen einbeziehen',
      'Bezugsqualität fraglich',
      'Keine Zulassung'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – Cardiogen AEDP Übersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=cardiogen+khavinson' },
      { title: 'Khavinson VK et al., Adv Gerontol 2013 – Bioregulators Springer', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: [
      { title: 'Bioregulator Peptides Review (Outliyr)', url: 'https://outliyr.com/best-bioregulator-peptides-review' }
    ]
  },

  // ============ ORGANE & STOFFWECHSEL ============
  {
    id: 'kh-livagen',
    name: 'Livagen',
    altNames: 'KEDA · Lys-Glu-Asp-Ala',
    class: 'Tetrapeptid, Leber-Bioregulator',
    emoji: '🟫',
    short: 'Soll Leberzellen schützen und Regeneration nach Belastung (Alkohol, Medikamente, Fettleber) unterstützen.',
    moa: 'Aktiviert Genexpression in Hepatozyten, soll antioxidative Enzyme und Phase-II-Entgiftungswege hochregulieren.',
    benefits: [
      'In Tiermodellen: weniger Leberzellschäden bei toxischer Belastung',
      'Beworben bei Fettleber, chronischer Hepatitis, Alkohol-Leberschäden',
      'Soll Chromatin-Struktur in Hepatozyten epigenetisch normalisieren',
      'Häufig im „Leber-Reset"-Protokoll der russischen Schule'
    ],
    risks: [
      'Keine kontrollierten Humanstudien',
      'Bei aktiver Lebererkrankung nie ohne Hepatologen',
      'Bezugsqualität auf Forschungsmarkt unklar',
      'Langzeit-Risiken unbekannt'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – Livagen Chromatin & Hepatozyten', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=livagen' },
      { title: 'Khavinson VK et al., Adv Gerontol 2013', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: [
      { title: 'Khavinson Bioregulators – Russian Peptide Science (PeptidesClarity)', url: 'https://peptidesclarity.com/learn/khavinson-bioregulators/' }
    ]
  },
  {
    id: 'kh-pancragen',
    name: 'Pancragen',
    altNames: 'KEDW · Lys-Glu-Asp-Trp',
    class: 'Tetrapeptid, Pankreas-Bioregulator',
    emoji: '🍯',
    short: 'Soll die Insulin-Sekretion und Funktion der Bauchspeicheldrüse stützen – beworben bei Prä-Diabetes & Typ 2.',
    moa: 'Aktiviert β-Zell-spezifische Genexpression, soll Insulinproduktion und Glukose-Sensorik verbessern. Auch antioxidative Effekte im Pankreasgewebe berichtet.',
    benefits: [
      'In präklinischen Studien: bessere Glukosetoleranz bei diabetischen Ratten',
      'Beworben bei Typ-2-Diabetes & Insulinresistenz als Begleitmaßnahme',
      'Soll β-Zell-Apoptose reduzieren',
      'Synergie mit Lebensstil-Maßnahmen (Low-Carb, Bewegung)'
    ],
    risks: [
      'Kein Ersatz für Diabetes-Therapie (Metformin, GLP-1, Insulin)',
      'Hypoglykämie-Risiko theoretisch denkbar, kaum dokumentiert',
      'Keine westlichen RCTs',
      'Selbstmedikation bei manifestem Diabetes gefährlich'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – KEDW Pankreas-Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=pancragen+OR+%22KEDW%22' },
      { title: 'Khavinson VK et al., Adv Gerontol 2013', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: [
      { title: 'Khavinson Peptides Complete Guide (SuperPower)', url: 'https://superpower.com/guides/khavinson-peptides' }
    ]
  },
  {
    id: 'kh-bronchogen',
    name: 'Bronchogen / Chonluten',
    altNames: 'AEDL · Ala-Glu-Asp-Leu',
    class: 'Tetrapeptid, Bronchial-/Lungen-Bioregulator',
    emoji: '🫁',
    short: 'Soll die Schleimhautregeneration in Bronchien und Lunge unterstützen – beworben bei COPD und chronischer Bronchitis.',
    moa: 'Aktiviert epitheliale Zelldifferenzierung im Bronchialgewebe, soll mukoziliäre Clearance verbessern und chronische Entzündung dämpfen.',
    benefits: [
      'Beworben bei COPD, chronischer Bronchitis, Post-COVID-Lungenproblemen',
      'In Tiermodellen: bessere Epithelregeneration nach Reizung',
      'Soll Surfactant-Produktion stützen',
      'Sehr gut verträglich in russischen Klinikstudien'
    ],
    risks: [
      'Keine westlichen pneumologischen Studien',
      'Bei akuten Atemwegsinfekten kein Ersatz für Antibiose/Bronchodilatatoren',
      'Bezugsqualität fraglich',
      'Keine Zulassung'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – Bronchogen AEDL', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=bronchogen+OR+chonluten' },
      { title: 'Khavinson VK et al., Adv Gerontol 2013', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: [
      { title: 'Bioregulator Peptides – Peptide Playbook', url: 'https://www.peptideplaybook.health/peptides/bioregulator-peptides' }
    ]
  },
  {
    id: 'kh-testagen',
    name: 'Testagen / Prostamax',
    altNames: 'KEDG · Lys-Glu-Asp-Gly · Prostamax-Komplex',
    class: 'Tetrapeptid, Prostata-/Testis-Bioregulator',
    emoji: '👨',
    short: 'Soll die Funktion von Prostata und Hoden unterstützen – beworben bei BPH und altersbedingtem Testosteron-Rückgang.',
    moa: 'Aktiviert prostatische und testikuläre Genexpression. Soll Symptome benigner Prostatahyperplasie (BPH) lindern und Spermien-/Testosteron-Produktion modulieren.',
    benefits: [
      'In russischen Studien: bessere Miktionsbeschwerden bei BPH',
      'Beworben für gesteigerte Libido & Vitalität',
      'Soll Prostata-Volumen leicht reduzieren',
      'Häufig mit Vladonix (Thymus) und Endoluten (Pineal) kombiniert'
    ],
    risks: [
      'Bei bekannten Prostata-Karzinomen kontraindiziert (Hormonsignal)',
      'Kein Ersatz für urologische Diagnostik',
      'Keine westliche Zulassung',
      'Wirksamkeit gegen Placebo nie sauber getestet'
    ],
    status: 'Forschungspeptid. Nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK – Testagen / Prostata-Peptide', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=khavinson+prostate+peptide' },
      { title: 'Khavinson VK et al., Adv Gerontol 2013', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: [
      { title: 'Khavinson Bioregulators (Loti Labs)', url: 'https://lotilabs.com/resources/khavinson-bioregulators-the-complete-research-guide-to-epitalon-pinealon-prostamax-short-chain-peptides/' }
    ]
  },

  // ============ KOMPLEXE / STACKS ============
  {
    id: 'kh-cytomax-complex',
    name: 'Cytomax / Cytogen Komplex-Stacks',
    altNames: 'Endoluten · Vladonix · Cerluten · Chelohart · Pielotax u.a.',
    class: 'Hochmolekulare Peptidkomplexe (Cytomax) und synthetische Tripeptide (Cytogen)',
    emoji: '🧪',
    short: 'Sammelbegriff für die kommerziellen Khavinson-Bioregulator-Produkte. Pro Organsystem ein Stack.',
    moa: 'Jeder Komplex zielt auf ein Organsystem: Endoluten = Pineal, Vladonix = Thymus, Cerluten = Retina/ZNS, Chelohart = Herz, Pielotax = Niere, Ovagen = Leber, Sigumir = Knorpel, Glandokort = Nebenniere.',
    benefits: [
      'Modulares System: gezielter Einsatz pro Organ',
      'Typisches "Longevity-Quartett" (russisch): Endoluten + Vladonix + Cerluten + Chelohart',
      'Lange Erfahrungswerte aus russischer Klinikpraxis',
      'Oral oder sublingual (Cytomax), als Injektion oder Kapsel (Cytogen)'
    ],
    risks: [
      'Komplexe Stacks bedeuten viele unbekannte Wechselwirkungen',
      'Hohe Kosten bei seriösen Quellen (>200€/Monat)',
      'Sehr viele Fälschungen auf dem grauen Markt',
      'Keinerlei westliche Zulassung'
    ],
    status: 'Forschungspeptide / Nahrungsergänzung. Nicht als Arzneimittel zugelassen.',
    sources: [
      { title: 'Khavinson VK – Peptide Medicines: Past, Present, Future', url: 'https://www.clinmedjournal.com/jour/article/view/29' },
      { title: 'Bioregulatoren – Interaktiver Guide', url: 'https://bioregulators.info/' }
    ],
    community: [
      { title: 'Bioregulators Overview (Youth & Earth)', url: 'https://youthandearth.com/blogs/learninghub/bioregulators-an-overview-of-their-discovery-function-and-benefits' },
      { title: '30+ Best Bioregulator Peptides (Outliyr)', url: 'https://outliyr.com/best-bioregulator-peptides-review' }
    ]
  }
];
