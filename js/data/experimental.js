/* Experimentelle Substanzen / Peptide
 * WICHTIG: Diese Datenbank dient AUSSCHLIESSLICH der wissenschaftlichen Information.
 * Die hier gelisteten Substanzen sind überwiegend NICHT zugelassen, NICHT verschreibungsfähig
 * oder werden OFF-LABEL eingesetzt. Es handelt sich um KEINE Empfehlungen.
 *
 * Felder:
 *   class:    pharmakologische/biochemische Klasse
 *   moa:      mechanism of action (Wirkungsweise, 1-2 Sätze)
 *   benefits: erwartete/postulierte Vorteile aus präklinischen/Phase-Studien
 *   risks:    bekannte Nebenwirkungen + theoretische Risiken
 *   status:   regulatorischer Status (Phase, Off-Label, Forschung)
 *   sources:  Studien/Veröffentlichungen mit URL
 */
const EXPERIMENTAL = [
  // ============ STOFFWECHSEL / WEIGHT LOSS ============
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    altNames: 'LY3437943',
    class: 'GLP-1 / GIP / Glucagon Triagonist',
    emoji: '💉',
    short: 'Eli-Lilly-Triagonist – wirkt gleichzeitig auf drei Inkretin-Rezeptoren. Stärkster Gewichtsverlust aller bisherigen Studien.',
    moa: 'Aktiviert GLP-1-, GIP- und Glucagon-Rezeptoren. GLP-1+GIP senken Appetit & Blutzucker, Glucagon erhöht den Energieverbrauch (lipolytisch).',
    benefits: [
      'Bis zu 24% Körpergewichtsverlust nach 48 Wochen (Phase 2)',
      'Senkt HbA1c und Triglyzeride deutlich',
      'Reduziert Leberfett massiv (NAFLD-Studien laufen)',
      'Stärkerer Effekt als Tirzepatid (Mounjaro/Zepbound)'
    ],
    risks: [
      'Übelkeit, Durchfall, Erbrechen (häufig in Auf-Dosierung)',
      'Pankreatitis-Risiko (Klasseneffekt)',
      'Potenzielle Schilddrüsentumor-Risiken (Tier-Daten)',
      'Langzeitsicherheit unbekannt'
    ],
    status: 'Phase 3 (Eli Lilly, Erwartung Zulassung 2026/27). Nicht verkehrsfähig.',
    sources: [
      { title: 'Jastreboff AM et al., NEJM 2023 – Retatrutide Phase 2', url: 'https://www.nejm.org/doi/10.1056/NEJMoa2301972' },
      { title: 'TRIUMPH-Studienreihe (Phase 3, laufend)', url: 'https://classic.clinicaltrials.gov/ct2/show/NCT05882045' }
    ],
    community: [
      { title: 'biolabshop – Retatrutide (Triple G)', url: 'https://biolabshop.co.uk/209-retatrutide' },
      { title: 'Iron Mike: Retatrutide-Q&A', url: 'https://www.youtube.com/post/UgkxvmKFskjZ2XJh0aQDlzNnow5LEYzeIS8-' },
      { title: 'Retatrutide vs. SLU-PP-332 (Fat Loss Vergleich)', url: 'https://www.youtube.com/watch?v=5fFJIHzrSzQ' }
    ]
  },
  {
    id: 'tesofensin',
    name: 'Tesofensine',
    altNames: 'NS2330',
    class: 'Triple Monoamin-Reuptake-Inhibitor (Noradrenalin, Dopamin, Serotonin)',
    emoji: '🧪',
    short: 'Triple-Reuptake-Hemmer ursprünglich für Alzheimer entwickelt – zeigt deutliche Gewichtsreduktion und Appetitkontrolle.',
    moa: 'Hemmt die Wiederaufnahme von Noradrenalin, Dopamin und Serotonin im Gehirn. Steigert Sättigungsgefühl und reduziert Hungerempfinden.',
    benefits: [
      '10–11% Gewichtsverlust in 24 Wochen Phase-2-Studie',
      'Stärkere Reduktion als Sibutramin (vom Markt) oder Orlistat',
      'Verbessert Insulinresistenz',
      'In Mexiko unter dem Namen "Tesomet" für Adipositas zugelassen (Saniona)'
    ],
    risks: [
      'Blutdruckanstieg und Tachykardie',
      'Mundtrockenheit, Schlafstörungen, Übelkeit',
      'Psychische Effekte: Angstzustände, Erregbarkeit',
      'Potenziell Sucht- und Missbrauchspotenzial durch Dopamin-Komponente'
    ],
    status: 'In Mexiko zugelassen (Saniona). Phase 3 für EU/US-Zulassung. Off-Label nicht verfügbar.',
    sources: [
      { title: 'Astrup A et al., Lancet 2008 – Tesofensine Phase 2', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(08)61525-1/fulltext' },
      { title: 'Saniona Press Release Mexico approval 2024', url: 'https://saniona.com/' }
    ],
    community: [
      { title: 'Iron Mike: SLU-PP-332 vs. Tesofensine', url: 'https://www.youtube.com/shorts/kD6FVLFTcK8' },
      { title: 'biolabshop (Suche „Tesofensin")', url: 'https://biolabshop.de/' }
    ]
  },

  // ============ EXERCISE MIMETICS / METABOLIC ============
  {
    id: 'slu-pp-332',
    name: 'SLU-PP-332',
    altNames: '"Exercise mimetic"',
    class: 'ERR (Estrogen-Related Receptor) α/β/γ-Agonist',
    emoji: '🏃',
    short: 'Aktiviert die Energie-Master-Regulatoren ERR direkt – simuliert auf Zellebene Effekte von Ausdauertraining.',
    moa: 'Selektiver Agonist der Estrogen-Related Receptors (ERRα, β, γ) – Transkriptionsfaktoren, die mitochondriale Biogenese und Fettoxidation hochregulieren.',
    benefits: [
      'Erhöht Ausdauer in Mäusen ohne Training (+45–50%)',
      'Reduziert Fettmasse, verbessert Glukose-Toleranz',
      'Erhöht oxidative Muskelfasern Typ I',
      'Potenzial gegen Sarkopenie und Stoffwechselerkrankungen'
    ],
    risks: [
      'Bisher keine Humanstudien',
      'Langzeitwirkung auf Herz unklar',
      'ERR-Aktivierung kann Tumorwachstum beeinflussen (Krebs-Risiko theoretisch)',
      'Bezugsquellen aktuell ausschließlich grauer Markt'
    ],
    status: 'Präklinische Forschung. Keine zugelassene Form. Nicht für den Menschen freigegeben.',
    sources: [
      { title: 'Billon C et al., Nature Metabolism 2024 – SLU-PP-332 endurance', url: 'https://www.nature.com/articles/s42255-024-01059-y' },
      { title: 'Pharmakologische Charakterisierung ERR-Agonisten', url: 'https://pubmed.ncbi.nlm.nih.gov/37563174/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'Dosing SLU-PP-332 + Retatrutide', url: 'https://www.youtube.com/shorts/T6smpOkB4m0' },
      { title: 'biolabshop (Suche „SLU-PP-332")', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: '5-amino-1mq',
    name: '5-Amino-1MQ',
    altNames: '5-Amino-1-Methylquinolinium',
    class: 'NNMT-Inhibitor (Nicotinamid-N-Methyltransferase)',
    emoji: '⚗️',
    short: 'Hemmt das Enzym NNMT, das NAD+ und SAM verbraucht – soll Stoffwechsel und Muskelregeneration verbessern.',
    moa: 'Selektive Hemmung der Nicotinamid-N-Methyltransferase (NNMT). NNMT-Überaktivität ist mit Fettleibigkeit und Sarkopenie assoziiert. Hemmung erhöht NAD+ und Methylgruppen-Pool.',
    benefits: [
      'Reduziert Fettmasse in adipösen Mäusen (-7% in 11 Tagen)',
      'Erhöht muskuläres NAD+, verbessert Regeneration',
      'Verbessert Insulinsensitivität präklinisch',
      'Möglicher Anti-Aging-Mechanismus'
    ],
    risks: [
      'Keine Humanstudien publiziert',
      'Mögliche Effekte auf Methylierung systemisch unklar',
      'Bezug nur über Forschungschemikalien-Markt (Qualität fraglich)',
      'Reinheit/Dosierung selbsterworbener Substanzen nicht garantiert'
    ],
    status: 'Präklinische Forschung. Nicht zugelassen, nicht verschreibungsfähig.',
    sources: [
      { title: 'Neelakantan H et al., Biochem Pharmacol 2018 – 5-Amino-1MQ in obesity', url: 'https://pubmed.ncbi.nlm.nih.gov/29307490/' },
      { title: 'Neelakantan H et al., Sci Rep 2019 – muscle regeneration', url: 'https://www.nature.com/articles/s41598-019-46666-y' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Suche „5-Amino-1MQ")', url: 'https://biolabshop.de/' }
    ]
  },

  // ============ IMMUN / PEPTIDE ============
  {
    id: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1 (TA1)',
    altNames: 'Zadaxin, Thymalfasin',
    class: 'Immunmodulatorisches Peptid (28 Aminosäuren)',
    emoji: '🛡️',
    short: 'Natürlich vorkommendes Thymus-Peptid. Moduliert T-Zell-Funktion, in über 30 Ländern als Medikament zugelassen.',
    moa: 'Stimuliert Reifung und Aktivität von T-Helferzellen und natürlichen Killerzellen, moduliert dendritische Zellen. Wirkt über TLR9-Pathway.',
    benefits: [
      'Begleittherapie bei chronischer Hepatitis B/C zugelassen',
      'Adjuvans bei Krebsimpfungen (Studien laufen)',
      'Reduziert opportunistische Infektionen bei Immunsupprimierten',
      'In COVID-19-Studien protektiv (China, Italien)'
    ],
    risks: [
      'Sehr gut verträglich (>20 Jahre Erfahrung als Zadaxin)',
      'Selten Rötung an Injektionsstelle',
      'Bei Autoimmunerkrankungen Vorsicht (Immunaktivierung)',
      'In DE/USA nicht zugelassen – Bezug über Auslandsapotheken oder grauen Markt'
    ],
    status: 'Zugelassen in Italien, China, Indien u.a. (Hepatitis B/C). In DE/USA NICHT zugelassen, kein verschreibungsfähiges Medikament.',
    sources: [
      { title: 'Costantini C et al., Clin Microbiol Rev 2019 – TA1 mechanism', url: 'https://pubmed.ncbi.nlm.nih.gov/30728200/' },
      { title: 'Liu Y et al., Clin Infect Dis 2020 – Thymosin Alpha-1 in COVID-19', url: 'https://pubmed.ncbi.nlm.nih.gov/32442256/' }
    ],
    community: [
      { title: 'Peptide Therapies – Thymosin Alpha-1 Übersicht', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Thymosin")', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'bpc-157',
    name: 'BPC-157',
    altNames: 'Body Protection Compound 157, PL 14736',
    class: 'Synthetisches Pentadecapeptid (Magenschleimhaut-Derivat)',
    emoji: '🩹',
    short: 'Sequenz aus 15 Aminosäuren, ursprünglich aus Magenschleim isoliert. Popularste „Healing-Peptid" der Biohacker-Szene.',
    moa: 'Fördert Angiogenese (Neubildung von Blutgefäßen) und moduliert NO-Synthase und Wachstumshormonrezeptoren. Soll Heilungsprozesse beschleunigen.',
    benefits: [
      'Beschleunigt Heilung von Sehnen, Bändern, Muskeln (Tierstudien)',
      'Schützt Magenschleimhaut, lindert NSAID-induzierte Ulzera',
      'Anti-entzündliche Wirkung im Darm',
      'Wird oft bei Sportverletzungen subkutan injiziert (off-label)'
    ],
    risks: [
      'Bisher KEINE veröffentlichten Humanstudien zu Wirksamkeit',
      'Langzeitsicherheit unbekannt',
      'Unklare Bioverfügbarkeit oral',
      'WADA-Verbotsliste seit 2022 (Sportdoping)'
    ],
    status: 'Forschungs-Peptid. Nicht zugelassen, nicht verschreibungsfähig. WADA-verboten im Wettkampfsport.',
    sources: [
      { title: 'Sikiric P et al., Curr Pharm Des 2018 – BPC-157 review', url: 'https://pubmed.ncbi.nlm.nih.gov/29278205/' },
      { title: 'WADA Prohibited List 2022 (BPC-157 added)', url: 'https://www.wada-ama.org/sites/default/files/resources/files/2022list_final_en.pdf' }
    ],
    community: [
      { title: 'biolabshop – BPC-157 5 mg', url: 'https://biolabshop.co.uk/peptides/115-bpc-157-5mg-5905601708391.html' },
      { title: 'Iron Mike: BPC-157 Wirkung (Instagram)', url: 'https://www.instagram.com/iron_mike69/reel/C-HihgNoYd0/' },
      { title: 'Peptid 1x1 – BPC-157', url: 'https://www.youtube.com/watch?v=j7TDexpVkGE' }
    ]
  },
  {
    id: 'mots-c',
    name: 'MOTS-c',
    altNames: 'Mitochondrial-derived peptide',
    class: 'Mitochondriales Peptid (16 Aminosäuren, kodiert in mtDNA)',
    emoji: '🧬',
    short: 'Vom Mitochondrium selbst kodiertes Hormon. Reguliert Insulin-Sensitivität und Muskelfunktion – sinkt mit dem Alter.',
    moa: 'Aktiviert AMPK, fördert Glukoseaufnahme in Muskeln, hemmt Folat-Stoffwechsel und entkoppelt mitochondriale Oxidation milde.',
    benefits: [
      'Verhindert Insulinresistenz in Mäusen',
      'Verbessert Glukosetoleranz auch ohne Training',
      'Antiglykämischer Effekt bei kalorienreicher Ernährung',
      'Niedrige Blut-MOTS-c-Werte korrelieren mit Diabetes & Frailty beim Menschen'
    ],
    risks: [
      'Keine veröffentlichten Humanstudien zur Therapie',
      'Unklare Langzeitwirkung auf Mitochondrien',
      'Selbsterworbene Forschungs-Peptide: Qualität nicht garantiert',
      'Theoretisch: zu starke AMPK-Aktivierung beeinflusst andere Stoffwechselwege'
    ],
    status: 'Reines Forschungs-Peptid. Nicht zugelassen, nicht verschreibungsfähig.',
    sources: [
      { title: 'Lee C et al., Cell Metab 2015 – MOTS-c discovery & function', url: 'https://pubmed.ncbi.nlm.nih.gov/25738459/' },
      { title: 'Reynolds JC et al., Nat Commun 2021 – MOTS-c & exercise', url: 'https://www.nature.com/articles/s41467-020-20790-0' }
    ],
    community: [
      { title: 'Retatrutide / SLU / MOTS-c Diskussion', url: 'https://www.youtube.com/watch?v=hiTorLOAWKQ' },
      { title: 'biolabshop (Suche „MOTS-c")', url: 'https://biolabshop.de/' }
    ]
  },

  // ============ LONGEVITY ============
  {
    id: 'rapamycin',
    name: 'Rapamycin (Sirolimus)',
    altNames: 'Sirolimus, Rapamune',
    class: 'mTORC1-Inhibitor',
    emoji: '🔬',
    short: 'Eines der wenigen Pharmaka mit nachgewiesener Lebensverlängerung in Säugern. Off-Label intensiv in Longevity-Community diskutiert.',
    moa: 'Bindet FKBP12, blockiert die mTORC1-Kinase. mTORC1-Hemmung simuliert Kalorienrestriktion und aktiviert Autophagie.',
    benefits: [
      'Verlängert Lebensspanne bei Mäusen (+9–14%, auch bei spätem Start)',
      'Verbessert Immunfunktion bei Älteren (Mannick-Studie)',
      'Reduziert seneszente Zellen und altersbedingte Inflammation',
      'Eingesetzt off-label in Longevity-Praxen (1–6 mg/Woche pulsed)'
    ],
    risks: [
      'Stomatitis (Mundschleimhautentzündung)',
      'Erhöhte Infektionsanfälligkeit (immunsuppressiv bei dauerhafter Anwendung)',
      'Hyperlipidämie, Insulinresistenz möglich',
      'Reversible Hyperglykämie, in seltenen Fällen Wundheilungsstörung'
    ],
    status: 'In DE als Sirolimus (Rapamune) zugelassen für Nierentransplantation. Longevity-Anwendung ist OFF-LABEL – nur durch erfahrene Ärzte.',
    sources: [
      { title: 'Harrison DE et al., Nature 2009 – Rapamycin extends lifespan in mice', url: 'https://www.nature.com/articles/nature08221' },
      { title: 'Mannick JB et al., Sci Transl Med 2014 – mTOR inhibition immunity elderly', url: 'https://pubmed.ncbi.nlm.nih.gov/25540326/' },
      { title: 'PEARL Study (Rapamycin Longevity Trial)', url: 'https://classic.clinicaltrials.gov/ct2/show/NCT04488601' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'GANNIKUS-Podcast Iron Mike (Peptide & Longevity)', url: 'https://open.spotify.com/episode/354pFKeLOvDiRrh4AjbyKg' }
    ]
  },
  {
    id: 'epitalon',
    name: 'Epitalon (Epithalon)',
    altNames: 'Epithalamin, AEDG-Tetrapeptid',
    class: 'Tetrapeptid (Ala-Glu-Asp-Gly), Pinealdrüsen-Mimetikum',
    emoji: '🌙',
    short: 'Kurzes Peptid aus 4 Aminosäuren – soll Telomerase aktivieren und biologisches Altern verlangsamen. Russische Forschungstradition.',
    moa: 'Bindet an Promotorbereiche von Genen (Telomerase-Reverse-Transkriptase TERT, Pinealhormon-Synthese). Soll Telomerverlängerung und zirkadiane Rhythmen unterstützen.',
    benefits: [
      'Verlängert Telomere in vitro (Khavinson-Studien)',
      'Reduziert altersbedingte Mortalität bei Mäusen',
      'Soll Melatonin- und Cortisol-Rhythmen normalisieren',
      'In russischen Studien: erhöhte mittlere Lebenserwartung bei älteren Probanden'
    ],
    risks: [
      'Datenlage fast ausschließlich aus russischen Studien (Replikation außerhalb begrenzt)',
      'Telomerase-Aktivierung theoretisch krebsfördernd',
      'Bezugsqualität auf grauem Markt fraglich',
      'Sicherheitsdaten beim Menschen mit Langzeit-Anwendung unzureichend'
    ],
    status: 'Forschungs-Peptid. Außerhalb Russlands keine arzneirechtliche Zulassung. In DE/USA nicht verkehrsfähig.',
    sources: [
      { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epitalon & telomere length', url: 'https://pubmed.ncbi.nlm.nih.gov/14760439/' },
      { title: 'Anisimov VN et al., Mech Ageing Dev 2003 – lifespan in mice', url: 'https://pubmed.ncbi.nlm.nih.gov/12694675/' }
    ],
    community: [
      { title: 'Peptide Therapies – inkl. Epitalon', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Epitalon")', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  }
];

const EXPERIMENTAL_CATEGORIES = [
  { id: 'all',          label: 'Alle' },
  { id: 'Stoffwechsel', label: 'Stoffwechsel' },
  { id: 'Exercise',     label: 'Exercise-Mimetika' },
  { id: 'Immun',        label: 'Immun/Heilung' },
  { id: 'Longevity',    label: 'Longevity' }
];

// Auto-Mapping Klasse → Kategorie-Filter
const _EXP_CAT_MAP = {
  'retatrutide': 'Stoffwechsel',
  'tesofensin': 'Stoffwechsel',
  'slu-pp-332': 'Exercise',
  '5-amino-1mq': 'Exercise',
  'thymosin-alpha-1': 'Immun',
  'bpc-157': 'Immun',
  'mots-c': 'Longevity',
  'rapamycin': 'Longevity',
  'epitalon': 'Longevity'
};
EXPERIMENTAL.forEach(e => { e.filterCat = _EXP_CAT_MAP[e.id] || 'Sonstige'; });
