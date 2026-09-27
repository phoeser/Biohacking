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
    community: []
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
    community: []
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
    name: 'Chelohart',
    altNames: 'Cytomax A-6 · Herz-Peptidkomplex',
    class: 'Herzmuskel-Bioregulator (Peptidkomplex)',
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
    id: 'kh-testagen',
    name: 'Testagen',
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
  },
  {
    id: 'kh-cardiogen',
    name: 'Cardiogen',
    altNames: 'AEDR · Ala-Glu-Asp-Arg · Herz-Cytogen (nicht zu verwechseln mit Chelohart oder Cortagen)',
    class: 'Tetrapeptid, Herzmuskel-Bioregulator (synthetisch)',
    emoji: '🫀',
    short: 'Synthetisches Herz-Tetrapeptid der Khavinson-Schule. Im Infarktmodell an Ratten starben in den ersten 24 Stunden 15 statt 45 Prozent der Tiere, in Gewebekulturen regte es Herzmuskelgewebe junger und alter Tiere an. Studien am Menschen gibt es nicht.',
    moa: 'Cardiogen ist die Sequenz Ala-Glu-Asp-Arg, die laut Entwicklergruppe im Polypeptidkomplex des Herzens nachgewiesen wurde. Nach der Hypothese der Khavinson-Schule gelangen ultrakurze Peptide in den Zellkern, binden an DNA und Histone und beeinflussen so die Ablesung gewebetypischer Gene. Messbar ist ein Teil davon in Zellkultur: AEDR steigerte in Mausfibroblasten die Zytoskelett-Proteine Aktin, Tubulin und Vimentin um das 2- bis 5-Fache und die Lamine A und C um das 2- bis 3-Fache, was die Autoren als Grundlage der Herzschutzwirkung deuten. In Herzmuskel-Explantaten förderte es die Zellvermehrung und senkte den Zelltod-Marker p53. Die Aufnahme in Zellen über die Transporter LAT1, LAT2 und PEPT1 ist nur per Computermodell plausibel gemacht.',
    benefits: [
      'Infarktmodell (Koronarligatur, 40 Ratten): Sterblichkeit in den ersten 24 Stunden 15 statt 45 Prozent, kleinere Nekrosezonen, Glykogen im Herzmuskel erhalten – Tierdaten aus dem Patent der Entwickler (US 7,662,789).',
      'Herzmuskel-Explantate 3 und 24 Monate alter Ratten: stärkste Wachstumsförderung aller getesteten Substanzen, weniger p53 (Chalisova et al. 2009).',
      'Zellkultur: 2- bis 5-fach mehr Zytoskelett-Proteine und 2- bis 3-fach mehr Kernmatrix-Proteine in Mausfibroblasten (Khavinson et al. 2012).',
      'Gealterte Ratten mit transplantiertem Sarkom: Tumorwachstum gehemmt statt gefördert, über Nekrose und Apoptose im Tumor (Levdik und Knyazkin 2009).',
      'Weitere Tiermodelle im Patent: isolierte Meerschweinchenherzen nach Ischämie, Adrenalin-Schädigung und Kalziumchlorid-Rhythmusstörungen, jeweils mit günstiger Richtung.',
      'Klar definiertes Einzelmolekül statt Organextrakt; Sequenz und Herstellung sind patentiert und dokumentiert.'
    ],
    risks: [
      'Keine veröffentlichte Studie am Menschen, keine Pharmakokinetik, kein Eintrag in öffentlichen Studienregistern.',
      'Die stärksten Zahlen stehen in einem Patent der Entwickler, nicht in einer begutachteten Arbeit; unabhängige Replikation fehlt.',
      'Gewebespezifität nicht streng: Cardiogen wirkte auch in gealterten menschlichen Prostata-Fibroblasten; in den Tierversuchen wurde gespritzt, nicht geschluckt.',
      'Keine Daten zu Wechselwirkungen mit Herzmedikamenten; Herzinsuffizienz, Rhythmusstörungen und Zustand nach Infarkt gehören in kardiologische Behandlung.',
      'Research-Ware: Gehalt, Reinheit und Sequenz ungeprüft; Verwechslungsgefahr mit Chelohart (Peptidkomplex) und Cortagen (Ala-Glu-Asp-Pro).',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Forschungspeptid ohne Bestimmung für den Menschen. WADA-Gruppe S0.',
    sources: [
      { title: 'Khavinson et al., US-Patent 7,662,789 (2010) – AEDR stellt Myokardfunktion wieder her (Tierdaten, Toxikologie)', url: 'https://patents.google.com/patent/US7662789B2/en' },
      { title: 'Khavinson et al., Cells 2022 – SASP von Herz-Kreislauf-Zellen, AEDR und KED als Peptidregulatoren (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/36611900/' },
      { title: 'Khavinson et al., Bull Exp Biol Med 2012 – AEDR steigert Zytoskelett- und Kernmatrix-Proteine', url: 'https://pubmed.ncbi.nlm.nih.gov/22977870/' },
      { title: 'Chalisova et al., Adv Gerontol 2009 – Cardiogen in Herzmuskel-Kulturen junger und alter Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/20210190/' },
      { title: 'Levdik und Knyazkin, Bull Exp Biol Med 2009 – Cardiogen hemmt M-1-Sarkom bei gealterten Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/20396706/' },
      { title: 'Kheifets et al., Adv Gerontol 2010 – Cardiogen in gealterten menschlichen Prostata-Fibroblasten', url: 'https://pubmed.ncbi.nlm.nih.gov/20586252/' },
      { title: 'Khavinson et al., Biomolecules 2023 – Transport ultrakurzer Peptide über LAT und PEPT (Modellierung)', url: 'https://pubmed.ncbi.nlm.nih.gov/36979488/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Cardiogen")', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'kh-cartalax',
    name: 'Cartalax',
    altNames: 'AED · Ala-Glu-Asp · T-31 · Kartalax · Knorpel-Cytogen (synthetisches Gegenstück zum Sigumir-Komplex)',
    class: 'Tripeptid, Knorpel-/Gelenk-Bioregulator (synthetisch)',
    emoji: '🦴',
    short: 'Synthetisches Knorpel-Tripeptid der Khavinson-Schule. In gealterten menschlichen Stammzellen und Knorpelzellen aktiviert es Knorpelgene und dämpft Alterungssignale; ein Patent berichtet bei 29 Arthrose-Patienten weniger Schmerzen. Begutachtete Humanstudien gibt es nicht.',
    moa: 'Cartalax ist die Sequenz Ala-Glu-Asp, patentiert als Peptid zur Normalisierung des Stoffwechsels in Knochen- und Knorpelgewebe; nach Angaben der Entwicklergruppe ist AED auch Bestandteil des Knorpel-Polypeptidkomplexes. Nach der Hypothese der Khavinson-Schule gelangen ultrakurze Peptide in den Zellkern und verändern über DNA- und Histonbindung die Genablesung. In replikativ gealterten menschlichen mesenchymalen Stammzellen aktivierte AED die Knorpelmarker SOX9, Aggrecan, Kollagen Typ II und COMP. In gealterten Knorpelzellen normalisierte es den sekretorischen Alterungsphänotyp mit erhöhtem p16, p21, p53, TNF-α und IL-1α und vermindertem Sirt1. Die Wirkung ist nicht knorpelexklusiv: Auch Nierenzellen und Hautfibroblasten reagieren.',
    benefits: [
      'Gealterte menschliche Stammzellen: Aktivierung von SOX9, Aggrecan, Kollagen Typ II und COMP, also der Knorpeldifferenzierung (Myakisheva et al. 2023, Zellkultur).',
      'Gealterte Knorpelzellen: Alterungs- und Entzündungssignatur (p16, p21, p53, TNF-α, IL-1α) normalisiert, Sirt1 wieder angehoben (Myakisheva et al. 2023, Zellkultur).',
      'Knorpel-Explantate der Ratte: Auswachsen am 3. Tag 26 Prozent über Kontrolle, nach 7 Tagen gleiche Richtung (Patent RU 2299741, 28 Fragmente).',
      'Patentbericht: 29 Patienten mit Kniegelenksarthrose, randomisiert mit Kochsalz-Kontrolle; weniger Schmerz und mehr Beweglichkeit in 54,5 bis 62,7 Prozent der Fälle nach 20 Tagen Injektionen (Herstellerangabe, nicht begutachtet).',
      'Alternde menschliche Hautfibroblasten: mehr Sirtuin-1, Sirtuin-6 und Kollagen I (Fridman et al. 2020).',
      'Kleines, klar definiertes Einzelmolekül statt Organextrakt; Tiertoxikologie über bis zu 6 Monate im Patent ohne pathologische Befunde.'
    ],
    risks: [
      'Keine begutachtete Studie am Menschen und kein Registereintrag; der Patentbericht nennt kein Ergebnis der Kontrollgruppe, keine Skalen, keine Nebenwirkungen.',
      'Im Röntgen zeigte sich im Patentbericht keine wesentliche Veränderung; ein Knorpelaufbau am Menschen ist nicht belegt.',
      'Im Patent wurde intramuskulär gespritzt, gehandelt werden meist Kapseln; ob geschlucktes AED im Gelenk ankommt, ist nicht gemessen.',
      'Nicht gewebeexklusiv: AED wirkt auch auf Nierenzellen, Nierenfunktion alter Ratten und Hautfibroblasten; Studien fast nur aus der Entwicklergruppe.',
      'Research-Ware: Gehalt und Reinheit ungeprüft; akut geschwollene oder heiße Gelenke gehören ärztlich abgeklärt.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. In russischsprachigen Ländern und online für Gelenkbeschwerden angeboten, hierzulande als Forschungspeptid. WADA-Gruppe S0.',
    sources: [
      { title: 'Khavinson et al., Patent RU 2299741 (2007) – AED normalisiert Knochen- und Knorpelstoffwechsel (Tierdaten, Toxikologie, 29 Arthrose-Patienten)', url: 'https://www.freepatent.ru/patents/2299741' },
      { title: 'Myakisheva et al., Adv Gerontol 2023 – AED aktiviert Knorpeldifferenzierung gealterter menschlicher Stammzellen', url: 'https://pubmed.ncbi.nlm.nih.gov/37782646/' },
      { title: 'Myakisheva et al., Adv Gerontol 2023 – AED normalisiert den Alterungsphänotyp von Chondrozyten', url: 'https://pubmed.ncbi.nlm.nih.gov/37356100/' },
      { title: 'Linkova et al., Int J Mol Sci 2023 – Peptidregulation der chondrogenen Stammzelldifferenzierung (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/37176122/' },
      { title: 'Ashapkin et al., Mol Biol Rep 2020 – AED, KED und KE in alternden Stammzellkulturen', url: 'https://pubmed.ncbi.nlm.nih.gov/32399807/' },
      { title: 'Fridman et al., Bull Exp Biol Med 2020 – AED steigert Sirtuine und Kollagen I in Hautfibroblasten', url: 'https://pubmed.ncbi.nlm.nih.gov/33231794/' },
      { title: 'Khavinson et al., Bull Exp Biol Med 2014 – T-31 (AED) in alternden Nierenzellkulturen', url: 'https://pubmed.ncbi.nlm.nih.gov/24958378/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Cartalax")', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'kh-cortagen',
    name: 'Cortagen',
    altNames: 'AEDP · Ala-Glu-Asp-Pro',
    class: 'Tetrapeptid, Neuro-Bioregulator (aus Cortexin abgeleitet)',
    emoji: '🧠',
    short: 'Synthetisches Tetrapeptid, abgeleitet aus dem Hirnrinden-Extrakt Cortexin. In Ratten wuchsen durchtrennte Nerven unter Cortagen schneller nach und leiteten schneller; Studien am Menschen sind nicht veröffentlicht, die Daten stammen fast nur aus der russischen Khavinson-Forschung.',
    moa: 'Cortagen (Ala-Glu-Asp-Pro) wurde nach der Aminosäureanalyse des Hirnrinden-Peptidkomplexes Cortexin synthetisiert (Anisimov et al. 2004). Nach der Hypothese der Khavinson-Schule gelangen so kurze Peptide in den Zellkern, binden an DNA und Histone und verändern gewebespezifisch die Ablesung von Genen. Passend dazu regte Cortagen in Organkultur das Wachstum von Hirnrinden-Explantaten der Ratte an (2001), verschob im Mausherz die Aktivität von 234 Genabschnitten (2004) und lockerte in Lymphozyten 75- bis 88-jähriger Spender verdichtetes Chromatin auf (2004). Von Pinealon (Glu-Asp-Arg, Tripeptid) unterscheidet es sich in Länge und Sequenz, von Epitalon (Ala-Glu-Asp-Gly) nur in der letzten Aminosäure. Am Menschen ist keine dieser Wirkungen gemessen.',
    benefits: [
      'Ratten nach Durchtrennung des Ischiasnervs: unter Cortagen über 10 Tage 27 Prozent schnelleres Faserwachstum und 40 Prozent höhere Leitgeschwindigkeit (Turchaninova et al. 2000, Tierversuch).',
      'Ratten mit chronischer Hirnischämie: schnellere Erholung des Verhaltens und weniger Fettoxidation im Hirngewebe, ähnlich wie unter Cortexin (Zarubina & Shabanov 2011, Tierversuch, russisch).',
      'Weniger Produkte der Fettoxidation und weniger oxidativ veränderte Eiweiße bei Ratten (Kozina 2007, Tierversuch).',
      'In Lymphozyten von Spendern zwischen 75 und 88 Jahren Auflockerung verdichteten Chromatins und Aktivierung ribosomaler Gene (Khavinson et al. 2004; Lezhava et al. 2023; Zellkultur mit menschlichen Zellen).',
      'Im Mausherz nach 5 Tagen 234 von 15.247 Genabschnitten signifikant verändert, zugeordnet zu 110 bekannten Genen (Anisimov et al. 2004, Tierversuch).'
    ],
    risks: [
      'Keine veröffentlichte kontrollierte Humanstudie; die Suche in ClinicalTrials.gov ergibt keine Studie zu Cortagen.',
      'Schmale Datenbasis: 15 PubMed-Einträge, fast alle aus russischen Laboren, die meisten mit Beteiligung Khavinsons; viele Arbeiten nur auf Russisch mit knapper Zusammenfassung, keine unabhängige Wiederholung.',
      'Nicht jeder Test fiel positiv aus: ohne Effekt auf Thymuszellen (2002), schwächer als Vilon und Epitalon bei Interleukin-2 (2002), ohne Wirkung im Hühnerversuch, in dem Epitalon wirkte (2008).',
      'Keine Sicherheits- und Pharmakokinetikdaten am Menschen; ob es nach Gabe das Gehirn erreicht, ist nicht gemessen.',
      'Graumarkt-Ware: Reinheit und Gehalt ungeprüft; im Sport als nicht zugelassene Substanz unter WADA S0 jederzeit verboten.'
    ],
    status: 'Forschungspeptid. In DE/EU weder als Arzneimittel noch als Nahrungsergänzungsmittel zugelassen; eine Arzneimittelzulassung in den USA oder in Russland (anders als beim Mutterpräparat Cortexin) war nicht nachweisbar. WADA 2026: als nicht zugelassene Substanz unter S0 jederzeit verboten.',
    sources: [
      { title: 'Turchaninova et al. 2000, Bull Exp Biol Med – Cortagen beschleunigt die Regeneration des Ischiasnervs bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/11276314/' },
      { title: 'Kolosova et al. 2002, Dokl Biol Sci – verzögerte Wirkung auf die Wiederherstellung der Nervenfunktion', url: 'https://pubmed.ncbi.nlm.nih.gov/12134478/' },
      { title: 'Anisimov, Khavinson, Anisimov 2004, Neuro Endocrinol Lett – Herkunft aus Cortexin, Genaktivität im Mausherz', url: 'https://pubmed.ncbi.nlm.nih.gov/15159690/' },
      { title: 'Khavinson, Lezhava, Malinin 2004, Bull Exp Biol Med – Chromatin in Lymphozyten Hochbetagter', url: 'https://pubmed.ncbi.nlm.nih.gov/15085253/' },
      { title: 'Zarubina & Shabanov 2011, Eksp Klin Farmakol – Cortexin und Cortagen bei chronischer Hirnischämie (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/21476278/' },
      { title: 'Kuznik et al. 2008, Adv Gerontol – Epitalon wirkt, Cortagen nicht (Hühnerversuch)', url: 'https://pubmed.ncbi.nlm.nih.gov/19432169/' },
      { title: 'Khavinson et al. 2020, Stem Cell Rev Rep – kurze Peptide und Zelldifferenzierung (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/31808038/' }
    ],
    community: []
  },
  {
    id: 'kh-crystagen',
    name: 'Crystagen',
    altNames: 'EDP · Glu-Asp-Pro · T-36 · Kristagen',
    class: 'Tripeptid, Immun-Bioregulator (Bestandteil von Thymalin)',
    emoji: '🛡️',
    short: 'Synthetisches Tripeptid aus der Khavinson-Schule, das dem alternden Immunsystem helfen soll und als Baustein des Thymus-Präparats Thymalin gilt. In Kulturen aus Thymus und Milz alter Ratten wuchs das Gewebe stärker, am Menschen gibt es nur eine offene Studie aus einer Patentschrift.',
    moa: 'Crystagen (Glu-Asp-Pro, EDP) wurde von der Khavinson-Gruppe als Peptid mit schützender Wirkung auf das alternde Immunsystem patentiert (RU 2301074, WO2007139435) und laut einer Übersicht von 2021 neben Vilon (KE) und Thymogen (EW) im Thymus-Extrakt Thymalin identifiziert. Nach der Hypothese der Khavinson-Schule gelangen so kurze Peptide in den Zellkern, binden an DNA und Histone und verändern die Ablesung von Genen; ein Computermodell von 2016 ordnet EDP dieselbe DNA-Bindungsstelle zu wie Vilon. In Zellkultur steigerte EDP die spontane Teilung normaler menschlicher Lymphozyten (2011) und die Teilung menschlicher Thymus-Epithelzellen. Wie das oral eingenommene Peptid ins Immunsystem gelangt, ist nur per Computermodell (Transporter PEPT1, LAT1; 2022, 2023) betrachtet, nicht am Menschen gemessen.',
    benefits: [
      'Thymus- und Milzgewebe 24 Monate alter Ratten in Kultur: Wachstumsfläche plus 24 bzw. 28 Prozent (Patentschrift WO2007139435, Organkultur).',
      'Bestrahlungsmodell beschleunigter Thymusalterung: Rinden-Mark-Gliederung des Thymus erhalten, mehr Teilung der Thymuszellen (Patentschrift, Tierversuch an Ratten).',
      'Offene Studie an 38 älteren Patienten (62 bis 83 Jahre) gegen 32 Kontrollen, 10 Tage zusätzlich zur Standardbehandlung: Immunwerte normalisiert bei 82 gegenüber 56 Prozent, vor allem CD3- und CD4-T-Zellen (Patentschrift; referiert in Khavinson et al. 2021).',
      'Aktivierung von B-Zellen in alterndem Milzgewebe (Chervyakova et al. 2014, Tierversuch, russisch).',
      'Mehr spontane Teilung normaler menschlicher Lymphozyten in Kultur (Khavinson et al. 2011, Zellkultur).'
    ],
    risks: [
      'Keine peer-reviewte kontrollierte Humanstudie; die einzige Patientenstudie ist offen, nicht randomisiert und nur in einer Patentschrift beschrieben; ClinicalTrials.gov ohne Eintrag.',
      'Sehr schmale Literatur: 1 PubMed-Treffer unter dem Namen, 3 in Europe PMC, alle aus dem Umfeld des St. Petersburger Instituts, keine unabhängige Wiederholung.',
      'Widersprüche: Übersicht 2021 nennt orale Gabe, die Patentschrift Spritzen in den Muskel; Handelsware sind Kapseln, deren Aufnahme am Menschen nicht gemessen ist.',
      'Nicht jeder Befund positiv: in der alternden Milz keine Zellerneuerung (2014), schwächer gegen Zelltod als Vilon und Thymogen (2019).',
      'Sicherheitsdaten nur aus Tierversuchen der Patentschrift; bei Autoimmunerkrankungen, Immunsuppression oder Blutkrebs keine Daten. Im Sport unter WADA S0 jederzeit verboten.'
    ],
    status: 'Forschungspeptid. In DE/EU weder als Arzneimittel noch als Nahrungsergänzungsmittel zugelassen, keine FDA-Zulassung. In Russland laut Hersteller als Nahrungsergänzung (BAD) im Handel, nicht als Arzneimittel. Patentiert als Mittel gegen altersbedingte Immunstörungen (RU 2301074, WO2007139435). WADA 2026: als nicht zugelassene Substanz unter S0 jederzeit verboten.',
    sources: [
      { title: 'Khavinson et al. 2021, Biol Bull Rev – Thymalin und seine Kurzpeptide EW, KE, EDP (Crystagen), Patientenstudie 82 vs. 56 Prozent', url: 'https://europepmc.org/article/PMC/PMC8365293' },
      { title: 'Khavinson et al., Patent WO2007139435 – Glu-Asp-Pro, Organkultur, Toxikologie, offene Patientenstudie', url: 'https://patents.google.com/patent/WO2007139435A1/en' },
      { title: 'Chervyakova et al. 2014, Adv Gerontol – B-Zell-Aktivierung, keine Zellerneuerung in der alternden Milz (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/28976144/' },
      { title: 'Khavinson et al. 2011, Bull Exp Biol Med – Tripeptid T-36 an Lymphozyten und Zelllinien', url: 'https://pubmed.ncbi.nlm.nih.gov/22485217/' },
      { title: 'Voicekhovskaya et al. 2012, Bull Exp Biol Med – T-36 (Glu-Asp-Pro) an Hautkulturen junger und alter Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/22803085/' },
      { title: 'Khavinson et al. 2016, Bull Exp Biol Med – DNA-Bindung von Kurzpeptiden im Modell', url: 'https://pubmed.ncbi.nlm.nih.gov/27909961/' },
      { title: 'Khavinson et al. 2022, Int J Mol Sci – Transport ultrakurzer Peptide (Crystagen als Immunprotektor gelistet)', url: 'https://pubmed.ncbi.nlm.nih.gov/35887081/' }
    ],
    community: []
  }
];
