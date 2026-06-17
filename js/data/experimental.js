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
    short: 'Immunmodulierendes 28-AS-Thymuspeptid: aktiviert T-Zellen und die TH1-Antwort über TLR2/TLR9. Als Zadaxin klinisch zugelassen und das am besten belegte dieser Peptide.',
    moa: 'Synthetisches, N-acetyliertes 28-Aminosäuren-Peptid aus dem Thymus, das als Immunmodulator wirkt. Es aktiviert die Toll-like-Rezeptoren TLR2 und TLR9 auf dendritischen Zellen, Makrophagen und B-Zellen und induziert darüber Typ-I-Interferone (IFN-α/β), IL-12 und TH1-Zytokine (IFN-γ) – das stärkt die zelluläre Abwehr gegen Viren und Tumorzellen. Zusätzlich fördert es die Reifung von T-Zellen im Thymus. Charakteristisch ist eine bidirektionale Modulation: Stimulation bei Immunschwäche, Dämpfung über regulatorische T-Zellen (FOXP3+) bei Immunüberaktivierung. Unter diesen Peptiden hat es mit Abstand die beste klinische Evidenzbasis.',
    benefits: [
      'Stärkt antivirale T-Zell-Antworten; in Studien bei chronischer Hepatitis B höhere Serokonversionsraten',
      'Korrigiert Immunschwäche und altersbedingte Immunseneszenz (mehr naive CD4+-T-Zellen, mehr IL-2)',
      'Wird als Begleittherapie in der Onkologie untersucht (u.a. nicht-kleinzelliges Lungenkarzinom)',
      'Senkte in einer kontrollierten Studie die 28-Tage-Sterblichkeit bei Sepsis',
      'Kann trainingsbedingte Immunschwäche (Open-Window-Phänomen) bei Sportlern abmildern',
      'Bidirektional wirksam: stimulierend bei Schwäche, regulierend bei Überaktivierung',
      'Bestes Sicherheits- und Evidenzprofil dieser Peptide; als Zadaxin klinisch zugelassen'
    ],
    risks: [
      'Frei bezogene Ware stammt vom Graumarkt – Reinheit, Dosis und Sterilität nicht garantiert (anders als das zugelassene Zadaxin)',
      'In EU/DE kein frei verkäufliches Arzneimittel; Off-Label- und Eigenanwendung sind nicht reguliert',
      'Theoretisch unerwünschte Immunstimulation bei TH1-dominierten Autoimmunerkrankungen (z.B. MS, Typ-1-Diabetes)',
      'Belege für Sport- und Longevity-Einsatz sind schwächer als für die zugelassenen Indikationen',
      'Mögliche lokale Injektionsreaktionen; Selbstdosierung birgt Fehldosier- und Kontaminationsrisiken'
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
    short: 'Säurestabiles 15-Aminosäuren-Peptid mit überwiegend tierexperimentell belegten regenerativen Effekten auf Sehnen, Gewebe und Magen-Darm-Schleimhaut. In DE nicht zugelassen.',
    moa: 'Synthetisches 15-Aminosäuren-Peptid, abgeleitet von einem körpereigenen Schutzprotein des Magensafts und außergewöhnlich säurestabil. Es fördert die Geweberegeneration vor allem über den FAK/Paxillin-Signalweg (Wanderung von Fibroblasten und Sehnenzellen, Kollagen-Typ-I-Synthese) sowie über die VEGFR2/eNOS/NO-Achse (Gefäßneubildung, bessere Durchblutung). Zusätzlich dämpft es Entzündungssignale (NF-κB/COX-2 herunter, Verschiebung von M1- zu M2-Makrophagen) ohne allgemeine Immunsuppression. Im Magen-Darm-Trakt erhöht es schützende Faktoren wie PGE2, Schleimsekretion und die Dichte der Tight Junctions. Die Datenlage stammt überwiegend aus Tiermodellen (v.a. Arbeitsgruppe Sikirić, Zagreb); kontrollierte Humanstudien fehlen weitgehend.',
    benefits: [
      'Beschleunigt im Tiermodell die Heilung von Sehnen, Bändern und Muskelfaserrissen',
      'Fördert Gefäßneubildung und verbessert die Durchblutung im verletzten Gewebe',
      'Schützt und repariert die Magen-Darm-Schleimhaut (z.B. bei NSAR-Läsionen, überwiegend Tierdaten)',
      'Wirkt entzündungsmodulierend ohne kortisonähnliche Nebenwirkungen',
      'Säurestabil und daher prinzipiell auch oral aktiv (relevant für Magen-Darm-Themen)',
      'Zeigt im Modell schmerzlindernde Effekte über die NO-Achse, ohne Suchtpotenzial',
      'Keine hormonelle Wirkung, kein Eingriff in die Testosteron-Achse'
    ],
    risks: [
      'Keine veröffentlichten kontrollierten Humanstudien; Wirksamkeit beim Menschen ist extrapoliert (überwiegend Tierdaten)',
      'Kein zugelassenes Arzneimittel; in DE/EU sind Vertrieb und Anwendung zum Verzehr untersagt',
      'WADA-verboten in Kategorie S0 (nicht zugelassene Substanzen), ganzjährig',
      'Graumarkt-Ware: Reinheit, Dosis und Sterilität können stark schwanken (Fälschungs-/Unterdosierungsrisiko)',
      'Theoretisches Risiko durch die gefäßneubildende Wirkung (z.B. bei bestehenden Tumoren); Langzeitsicherheit unbekannt',
      'Keine Daten für Schwangerschaft/Stillzeit; Injektion birgt Infektions- und Anwendungsrisiken'
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
    short: 'Mitochondriales 16-AS-Peptid und Trainings-Mimetikum: aktiviert AMPK für Energiestoffwechsel und Insulinsensitivität. Evidenz überwiegend präklinisch.',
    moa: 'Aus 16 Aminosäuren bestehendes, mitochondrial kodiertes Peptid (aus dem 12S-rRNA-Gen der mtDNA), das den Energiestoffwechsel primär über Aktivierung der AMP-aktivierten Proteinkinase (AMPK) reguliert – denselben Signalweg, den auch Metformin und Ausdauertraining anstoßen. Nach zellulärem Stress (oxidativer Stress, Glukosemangel, Belastung) wandert es in den Zellkern und steuert dort Gene für mitochondriale Neubildung (PGC-1α), antioxidative Abwehr (NRF2) und das Insulinsignal. Zusätzlich hemmt es den entzündungsfördernden NF-κB-Weg. Die Effekte ähneln molekular denen von körperlichem Training (Trainings-Mimetikum). Die Daten stammen überwiegend aus Tierstudien plus frühen Kohortendaten beim Menschen.',
    benefits: [
      'Steigert die Insulinsensitivität in Muskel und Leber (AMPK/GLUT4) – präklinisch',
      'Verbessert mitochondriale Neubildung und ATP-Kapazität über PGC-1α – präklinisch',
      'Reduziert mitochondrialen oxidativen Stress über NRF2/SOD2 – Tierdaten',
      'Erhöhte in Nagerversuchen Ausdauerleistung und Fettoxidation',
      'Wirkt entzündungshemmend (IL-6, TNF-α herunter) – präklinisch',
      'Höhere körpereigene MOTS-c-Spiegel korrelieren mit Langlebigkeit (Hundertjährige-Kohorten)'
    ],
    risks: [
      'Keine kontrollierten klinischen Studien am Menschen; Evidenz fast nur präklinisch (Tier/Zellkultur)',
      'Leistungsangaben (z.B. +35–50 % Laufzeit) stammen aus Nagerstudien und sind nicht übertragbar',
      'Blutzuckersenkende Wirkung: Hypoglykämie-Risiko mit Insulin/Antidiabetika',
      'Anekdotisch lokale Reaktionen an der Injektionsstelle; Langzeitsicherheit unbekannt',
      'Graumarkt-Bezug „nur zu Forschungszwecken" – Reinheit und Dosis nicht behördlich garantiert',
      'Kein zugelassenes Arzneimittel; 2024 von der WADA auf die Verbotsliste gesetzt'
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
    short: 'Synthetisches Tetrapeptid (Ala-Glu-Asp-Gly): aktiviert Telomerase und stimuliert Melatonin. Anti-Aging-Daten überwiegend aus einer einzelnen russischen Studiengruppe.',
    moa: 'Synthetisches Tetrapeptid (Ala-Glu-Asp-Gly, ~390 g/mol), abgeleitet aus dem Zirbeldrüsen-Extrakt Epithalamin. Hauptmechanismus ist die Induktion der hTERT-Genexpression (katalytische Telomerase-Untereinheit), wodurch Telomere in somatischen Zellen verlängert und die replikative Zellalterung verzögert werden (in Zellkultur über das Hayflick-Limit hinaus). Parallel hemmt es den p53/p21- und NF-κB-Weg und dämpft so die seneszenz-assoziierte Entzündung. Als zweiten Mechanismus stimuliert Epitalon die Zirbeldrüse zur Melatoninbildung und stabilisiert den Tag-Nacht-Rhythmus. Die Human-Evidenz stammt überwiegend aus russischen Studien einer einzelnen Forschungsgruppe (Khavinson) und ist außerhalb davon kaum unabhängig repliziert.',
    benefits: [
      'Aktiviert Telomerase (hTERT) und verlängert Telomere in somatischen Zellen – Zellkultur/präklinisch',
      'Verzögert die replikative Zellalterung über Hemmung des p53/p21-Wegs',
      'Stimuliert die körpereigene Melatoninproduktion und kann Schlaf/Rhythmus verbessern',
      'Wirkt antioxidativ (mehr SOD/Katalase, weniger Lipidperoxidation) – präklinisch',
      'Soll die Immunseneszenz mildern (T-Zell-/NK-Zell-Aktivität) – aus Khavinson-Studien',
      'Hormonunabhängiger Mechanismus (keine Bindung an Sexualhormon-Rezeptoren)'
    ],
    risks: [
      'Zentrale Humandaten stammen fast nur von einer Forschungsgruppe (Khavinson) und sind international kaum repliziert',
      'Mortalitäts-/Lebensspannen-Angaben sind methodisch umstritten bzw. tierbasiert',
      'Theoretisches Krebsrisiko: Telomerase-Aktivierung ist auch ein Merkmal von Tumorzellen',
      'Kein zugelassenes Arzneimittel (EMA/FDA); Anwendung am Menschen nicht reguliert',
      'Graumarkt-Bezug „nur zu Forschungszwecken" – Reinheit, Dosis und Sterilität nicht garantiert',
      'Sehr kurze Halbwertszeit (~20–30 min); Dosierprotokolle nicht unabhängig validiert'
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
,

  // ============ STOFFWECHSEL – ZUGELASSENE GLP-1-VERWANDTE ============
  {
    id: 'semaglutide',
    name: 'Semaglutide (Ozempic / Wegovy)',
    altNames: 'Ozempic, Wegovy, Rybelsus',
    class: 'GLP-1-Rezeptor-Agonist',
    emoji: '💊',
    short: 'Erster Blockbuster der „Skinny-Shot"-Welle. In EU/USA für Diabetes (Ozempic) und Adipositas (Wegovy) zugelassen, in der Biohacker-Szene oft off-label microdosiert.',
    moa: 'Aktiviert den GLP-1-Rezeptor → verzögerte Magenentleerung, gesteigerte Sättigung, verbesserte Insulinsekretion und reduzierte Glucagon-Ausschüttung.',
    benefits: [
      '12–15% Gewichtsverlust nach 68 Wochen (STEP-1-Studie)',
      'Senkt kardiovaskuläre Ereignisse (SELECT-Studie)',
      'Reduziert chronische Entzündung, verbessert NAFLD',
      'Verschreibungsfähig (mit Indikation) – legale Bezugsquelle'
    ],
    risks: [
      'Übelkeit, Verstopfung, Erbrechen (15–30% in Studien)',
      'Pankreatitis-Risiko, Gallenwege',
      'Muskelmasse-Verlust bei zu schneller Gewichtsabnahme',
      'Lieferengpässe → Bezug aus dem Ausland riskant (Fälschungen)'
    ],
    status: 'In DE für Typ-2-Diabetes (Ozempic) und Adipositas BMI≥30 (Wegovy) zugelassen. „Lifestyle"-Verwendung nicht GKV-erstattet.',
    sources: [
      { title: 'Wilding JPH et al., NEJM 2021 – STEP 1', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' },
      { title: 'Lincoff AM et al., NEJM 2023 – SELECT trial', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563' }
    ],
    community: [
      { title: 'Iron Mike: GLP-1 Microdosing', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Semaglutide-Forschungspeptid)', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide (Mounjaro / Zepbound)',
    altNames: 'Mounjaro, Zepbound, LY3298176',
    class: 'GLP-1 / GIP Dual-Agonist',
    emoji: '💉',
    short: 'Vorgänger von Retatrutide: kombiniert GLP-1 und GIP. Bis zu 22,5% Gewichtsabnahme – aktuell das stärkste zugelassene Mittel.',
    moa: 'Aktiviert simultan GLP-1- und GIP-Rezeptoren. GIP wirkt synergistisch mit GLP-1 auf Insulinsekretion und Sättigung.',
    benefits: [
      '15–22,5% Gewichtsverlust (SURMOUNT-1)',
      'Senkt HbA1c stärker als Semaglutide',
      'Reduziert obstruktive Schlafapnoe (SURMOUNT-OSA)',
      'Verbessert Lebersteatose (SYNERGY-NASH)'
    ],
    risks: [
      'Gastrointestinale Nebenwirkungen wie Semaglutide',
      'Pankreatitis-Risiko',
      'Schilddrüsentumoren in Tierstudien',
      'Sarkopenie-Risiko ohne Krafttraining + Protein'
    ],
    status: 'In DE als Mounjaro (Diabetes) und Zepbound (Adipositas) zugelassen.',
    sources: [
      { title: 'Jastreboff AM et al., NEJM 2022 – SURMOUNT-1', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038' },
      { title: 'Malhotra A et al., NEJM 2024 – SURMOUNT-OSA', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2404881' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Tirzepatide)', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'cagrilintide',
    name: 'Cagrilintide / CagriSema',
    altNames: 'NN9838',
    class: 'Amylin-Analog (Cagri) / Amylin+GLP-1 Combo (CagriSema)',
    emoji: '🧬',
    short: 'Long-acting Amylin-Analogon – allein oder als Kombi mit Semaglutide (CagriSema). Soll Semaglutide noch effektiver machen.',
    moa: 'Amylin-Rezeptor-Agonist: verlangsamt Magenentleerung, reduziert Glucagon-Sekretion, dämpft Appetit komplementär zu GLP-1.',
    benefits: [
      'CagriSema in Phase 3: ~22% Gewichtsverlust (REDEFINE-1)',
      'Bessere Verträglichkeit als hochdosiertes Semaglutide',
      'Synergie mit GLP-1 – glattere Gewichtskurve',
      'Möglicher Vorteil gegen Sarkopenie unter Diät'
    ],
    risks: [
      'Hypoglykämie-Risiko bei Diabetikern',
      'Übelkeit, Verstopfung (geringer als reines GLP-1)',
      'Langzeitwirkung unbekannt',
      'Noch nicht zugelassen'
    ],
    status: 'Phase 3 (Novo Nordisk, Zulassung Ende 2026 erwartet).',
    sources: [
      { title: 'Lau DCW et al., Lancet 2021 – Cagrilintide + Semaglutide Phase 1b', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01751-7/fulltext' },
      { title: 'REDEFINE Studienreihe (Phase 3)', url: 'https://classic.clinicaltrials.gov/ct2/show/NCT05567796' }
    ],
    community: [
      { title: 'biolabshop (Cagrilintide-Forschungspeptid)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },

  // ============ GROWTH HORMONE / IGF-1 ============
  {
    id: 'mk-677',
    name: 'MK-677 (Ibutamoren)',
    altNames: 'Ibutamoren, Nutrobal, MK-0677',
    class: 'Oraler Ghrelin-Rezeptor-Agonist (GH-Secretagogue)',
    emoji: '💪',
    short: 'Oral wirksames „Peptid-Alternative" – setzt körpereigenes Wachstumshormon und IGF-1 frei, ohne Injektion.',
    moa: 'Aktiviert den Ghrelin/Growth-Hormone-Secretagogue-Rezeptor in der Hypophyse → physiologische GH- und IGF-1-Pulse, oral verfügbar.',
    benefits: [
      'Erhöht IGF-1 um 40–80% bei 25 mg/Tag',
      'Tieferer Schlaf (mehr Slow-Wave Sleep)',
      'Subjektive Hautqualität, Haarwuchs',
      'Lean Mass +2–3 kg in 8 Wochen (Sportler-Anekdoten)'
    ],
    risks: [
      'Wasserretention, Hunger („Ghrelin-Effekt")',
      'Erhöhter Blutzucker / Insulinresistenz',
      'Karpaltunnelsyndrom, Gelenkschmerzen',
      'Studien für Alzheimer & Hüftfrakturen abgebrochen wegen kardialer Signale',
      'WADA-Verbotsliste'
    ],
    status: 'Kein zugelassenes Arzneimittel. SARMs-/Forschungschemikalien-Markt.',
    sources: [
      { title: 'Nass R et al., Ann Intern Med 2008 – MK-677 elderly', url: 'https://pubmed.ncbi.nlm.nih.gov/19075203/' },
      { title: 'Murphy MG et al., J Clin Endocrinol Metab 1998', url: 'https://pubmed.ncbi.nlm.nih.gov/9543156/' }
    ],
    community: [
      { title: 'biolabshop (MK-677)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'cjc-ipamorelin',
    name: 'CJC-1295 + Ipamorelin',
    altNames: 'CJC/Ipa, GHRH/GHRP-Stack',
    class: 'GHRH-Analog (CJC-1295) + GHRP / Ghrelin-Mimetic (Ipamorelin)',
    emoji: '🧪',
    short: 'GHRH-Analog plus selektives Ghrelin-Peptid: soll die körpereigene Wachstumshormon-Ausschüttung pulsatil und anhaltend steigern – ohne Cortisol-/Prolaktin-Anstieg.',
    moa: 'CJC-1295 ist ein langwirksames Analogon des Wachstumshormon-Releasing-Hormons (GHRH) und hebt den GH-Grundspiegel an; die DAC-Variante bindet an Albumin und verlängert die Halbwertszeit auf ~6–8 Tage (eine Injektion pro Woche). Ipamorelin ist dagegen ein selektives Ghrelin-Mimetikum (Pentapeptid), das den Rezeptor GHSR-1a aktiviert und kurze, pulsatile GH-Spitzen auslöst (Halbwertszeit ~2 h), laut Quelllage ohne nennenswerten Anstieg von Cortisol oder Prolaktin. Beide stimulieren über unterschiedliche Rezeptorwege dieselbe Achse und wirken daher synergistisch: CJC-1295 liefert die anhaltende Grundanhebung, Ipamorelin die scharfen Pulse darauf. Das Profil ähnelt dem jugendlichen GH-Muster; da das Somatostatin-Feedback erhalten bleibt, gilt der Ansatz als physiologischer als die Gabe von exogenem HGH.',
    benefits: [
      'Erhöht GH und IGF-1 über kombinierte Grundanhebung plus pulsatile Spitzen',
      'Bessere Schlafqualität (mehr Tiefschlaf) bei abendlicher Anwendung – häufigster berichteter Effekt',
      'Unterstützt Muskelaufbau über gesteigerte Proteinsynthese (meist ab Woche 6–12)',
      'Moderater Fettabbau durch GH-vermittelte Lipolyse, v.a. im Kaloriendefizit',
      'Bessere Regeneration von Bindegewebe, Sehnen und Knorpel (mehr Kollagensynthese)',
      'Positive Effekte auf Hautqualität und langfristig Knochendichte',
      'Kein Eingriff in die Testosteron-Achse, daher laut Quelle keine PCT nötig'
    ],
    risks: [
      'Leichte Wassereinlagerungen, gelegentlich Kopfschmerzen und Kribbeln in den Fingern (meist reversibel, dosisabhängig)',
      'Appetitanstieg über den Ghrelin-Rezeptor (bei Ipamorelin moderat, flacht meist ab)',
      'Theoretisch Insulinresistenz/Blutzucker-Verschiebung und IGF-1-vermittelte Zellproliferation bei chronisch erhöhtem GH',
      'Fehlende Langzeit- und Zulassungsdaten: nur kleine bzw. Tierstudien sowie Anbieter-/Community-Berichte',
      'Reinheits- und Dosierunsicherheit auf dem Graumarkt (Forschungspeptide ohne Qualitätskontrolle)',
      'Nicht zugelassen, WADA-verboten (S2); Handel/Weitergabe in DE nach Anti-Doping-Gesetz strafbar'
    ],
    status: 'Kein zugelassenes Arzneimittel. Forschungs-Peptide.',
    sources: [
      { title: 'Sigalos JT, Pastuszak AW – Anti-aging peptides review 2018', url: 'https://pubmed.ncbi.nlm.nih.gov/28676436/' },
      { title: 'Teichman SL et al., J Clin Endocrinol Metab 2006 – CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
    ],
    community: [
      { title: 'biolabshop (CJC/Ipamorelin)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },

  // ============ HEILUNG / TISSUE-REPAIR ============
  {
    id: 'tb-500',
    name: 'TB-500 (Thymosin Beta-4 Fragment)',
    altNames: 'TB4, Thymosin β-4',
    class: 'Synthetisches Peptid-Fragment (43 AS / aktive Region)',
    emoji: '🩹',
    short: 'Systemisch wirksames Thymosin-Beta-4-Fragment mit tierexperimentell belegter Regenerationswirkung; nur injizierbar, WADA-verboten (S2) und in DE nicht zugelassen.',
    moa: 'Synthetisches Peptid mit der aktiven aktinbindenden Kernsequenz (Ac-LKKTETQ), das die regenerative Region des körpereigenen Proteins Thymosin Beta-4 (Tβ4, 43 AS) nachbildet. Es wirkt nicht-hormonell: Durch Bindung von G-Aktin-Monomeren stellt es ein Reservoir für den Umbau des Zytoskeletts bereit und fördert so die Zellwanderung zur Verletzungsstelle. Zusätzlich stimuliert es die Gefäßneubildung, hemmt entzündungsfördernde Zytokine und reduziert über weniger Myofibroblasten die Narbenbildung. Wichtig: TB-500 und das vollständige Tβ4 sind nicht identisch – die meisten Humanstudien liefen mit komplettem Tβ4, sodass die Wirksamkeit von TB-500 selbst überwiegend aus Tiermodellen extrapoliert wird.',
    benefits: [
      'Beschleunigt im Tiermodell die Regeneration von Sehnen, Bändern und Muskelgewebe',
      'Wirkt systemisch und kann mehrere/entfernte Verletzungszonen zugleich erreichen',
      'Fördert die Gefäßneubildung und damit die Versorgung geschädigten Gewebes',
      'Kann Narbengewebe reduzieren und die funktionelle Heilung begünstigen',
      'Keine hormonelle Wirkung, kein Eingriff in die Testosteron-Achse',
      'Gilt in Anwenderberichten als gut verträglich und gut mit BPC-157 kombinierbar'
    ],
    risks: [
      'Keine publizierten randomisierten Humanstudien unter dem Namen TB-500; Langzeitsicherheit unbekannt',
      'Theoretisches Tumorrisiko durch die gefäßneubildende Wirkung; bei aktiver Krebserkrankung kontraindiziert',
      'WADA-verboten (S2); in DE zudem strafrechtlich relevant (AMG/Anti-Doping-Gesetz)',
      'Kein zugelassenes Arzneimittel, nur als Research Chemical über den Graumarkt (Reinheits-/Fälschungsrisiko)',
      'Milde Nebenwirkungen möglich: Kopfschmerzen, grippeartige Symptome, lokale Injektionsreaktionen',
      'Oral unwirksam (nur Injektion); kontraindiziert in Schwangerschaft/Stillzeit und bei schwerer Herzinsuffizienz'
    ],
    status: 'Reines Forschungs-Peptid, nicht verschreibungsfähig.',
    sources: [
      { title: 'Goldstein AL et al., Ann NY Acad Sci 2012 – Thymosin β4', url: 'https://pubmed.ncbi.nlm.nih.gov/22591020/' },
      { title: 'Crockford D, Ann NY Acad Sci 2007', url: 'https://pubmed.ncbi.nlm.nih.gov/17804520/' }
    ],
    community: [
      { title: 'biolabshop – TB-500/BPC-157 Combo', url: 'https://biolabshop.co.uk/peptides/321-tb-4-fragbpc-157-arg-700-mcg-30-caps.html' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu (Copper-Tripeptid)',
    altNames: 'Glycyl-L-Histidyl-L-Lysin-Kupfer',
    class: 'Tripeptid-Kupfer-Komplex',
    emoji: '🧴',
    short: 'Körpereigenes Kupfer-Tripeptid mit kollagenstimulierenden, regenerativen und antioxidativen Effekten; topisch teils klinisch belegt, injizierbare Systemwirkung überwiegend präklinisch.',
    moa: 'GHK-Cu (Glycyl-L-Histidyl-L-Lysin, komplexiert mit einem Kupfer(II)-Ion) ist ein natürlich im Blutplasma vorkommendes Tripeptid, dessen Spiegel mit dem Alter deutlich sinkt (~200 ng/ml mit 20, ~80 ng/ml mit 60 Jahren). Es wirkt als pleiotroper Signalgeber bzw. epigenetischer Modulator: In Analysen verändert es die Expression von über 4 000 menschlichen Genen Richtung eines „jüngeren" Musters. Es regt Fibroblasten zur Synthese von Kollagen Typ I/III, Elastin und Glykosaminoglykanen an, wobei Kupfer als Cofaktor der quervernetzenden Lysyloxidase dient. Ergänzend fördert es die Gefäßneubildung (VEGF, bFGF), wirkt antioxidativ (SOD) und entzündungshemmend (TNF-α, IL-6, NF-κB herunter). Die Haut-/Wundheilungsdaten sind teils klinisch (topisch), die systemischen Injektionseffekte beruhen jedoch stark auf präklinischen Daten.',
    benefits: [
      'Steigert die Kollagensynthese deutlich und verbessert Hautstruktur und Elastizität',
      'Beschleunigt im Modell die Wundheilung über Gefäßneubildung und Granulationsgewebe',
      'Wirkt antioxidativ und entzündungshemmend (relevant u.a. bei entzündlichen Hautproblemen)',
      'Topisch beim Haarwachstum mit Minoxidil 2 % vergleichbar – ohne dessen typische Reizungen',
      'Unterstützt potenziell Gelenk-/Bindegewebe über mehr GAG-Synthese (überwiegend präklinisch)',
      'Keine hormonelle Wirkung; sowohl injizierbar als auch topisch anwendbar'
    ],
    risks: [
      'Systemische (injizierte) Wirksamkeit beruht überwiegend auf präklinischen/Genexpressionsdaten; robuste Humanstudien zur Injektion fehlen',
      'Kein zugelassenes Arzneimittel zur Injektion; injizierbare Ware vom Graumarkt (Reinheits-/Sterilitätsrisiko)',
      'Absolute Kontraindikation bei Morbus Wilson (Kupferstoffwechselstörung) und Kupferallergie',
      'Vorsicht bei aktiver Krebserkrankung (wachstums-/gefäßfördernd) und bei Blutverdünnern (ärztliche Rücksprache)',
      'Keine Daten für Schwangerschaft/Stillzeit; vorübergehende Hautverschlechterung („Copper Ugly Effect") in Woche 1–2 möglich',
      'Orale Kapseln deutlich geringer bioverfügbar; Injektion birgt Infektions-/Anwendungsrisiken'
    ],
    status: 'Topisch in Kosmetika frei verkäuflich. Injizierbare Form Forschungspeptid – nicht zugelassen.',
    sources: [
      { title: 'Pickart L, Biomolecules 2018 – GHK-Cu gene expression', url: 'https://pubmed.ncbi.nlm.nih.gov/29382140/' },
      { title: 'Pickart L et al., Oxid Med Cell Longev 2012', url: 'https://pubmed.ncbi.nlm.nih.gov/22666519/' }
    ],
    community: [
      { title: 'biolabshop (GHK-Cu)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },

  // ============ LONGEVITY – WEITERE ============
  {
    id: 'metformin',
    name: 'Metformin',
    altNames: 'Glucophage, Siofor',
    class: 'Biguanid / AMPK-Aktivator (indirekt)',
    emoji: '🔵',
    short: '70 Jahre alter Diabetes-Klassiker mit Longevity-Bonus. TAME-Studie testet aktuell die Anti-Aging-Wirkung am Menschen.',
    moa: 'Hemmt mild den mitochondrialen Komplex I → AMPK-Aktivierung, mTOR-Hemmung, verbesserte Insulinsensitivität.',
    benefits: [
      'In Beobachtungsstudien längere Lebenserwartung bei Diabetikern',
      'Reduziert Krebsinzidenz (Beobachtungs-Daten)',
      'Verbessert Insulinsensitivität, kardiovaskuläre Risiken',
      'Sehr günstig & langjährig sicher'
    ],
    risks: [
      'Gastrointestinale Nebenwirkungen (häufig, meist mild)',
      'Vitamin-B12-Mangel bei Langzeitanwendung',
      'Selten: Laktatazidose (Niereninsuffizienz beachten)',
      'Hemmt mTOR – stört Muskelaufbau bei sportlich Aktiven'
    ],
    status: 'In DE als Glucophage/Siofor für Typ-2-Diabetes zugelassen. Longevity-Anwendung OFF-LABEL.',
    sources: [
      { title: 'Bannister CA et al., Diabetes Obes Metab 2014 – mortality', url: 'https://pubmed.ncbi.nlm.nih.gov/25041462/' },
      { title: 'TAME-Studie (Targeting Aging with Metformin)', url: 'https://www.afar.org/tame-trial' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'GANNIKUS-Podcast Iron Mike', url: 'https://open.spotify.com/episode/354pFKeLOvDiRrh4AjbyKg' }
    ]
  },
  {
    id: 'senolytic-dq',
    name: 'Dasatinib + Quercetin (Senolytic-Stack)',
    altNames: 'D+Q-Protokoll',
    class: 'Senolytische Kombination (Tyrosinkinase-Inhibitor + Flavonoid)',
    emoji: '🧨',
    short: 'Klassische Mayo-Clinic-Senolytik: räumt „Zombie-Zellen" (seneszent) gepulst aus dem Gewebe – nur 2–3 Tage pro Monat.',
    moa: 'Dasatinib blockiert pro-survival Pathways (Ephrin-Tyrosinkinasen). Quercetin hemmt BCL-2/PI3K-Pathways. Senstene Zellen sind auf diese „SCAPs" angewiesen und sterben.',
    benefits: [
      'Reduziert seneszente Zellen in Fettgewebe & Lunge',
      'Erste klinische Studie bei IPF zeigt Verbesserung der körperlichen Funktion',
      'Pulsförmige Anwendung minimiert Toxizität',
      'Mausstudien: längere Healthspan'
    ],
    risks: [
      'Dasatinib: Pleuraerguss, Knochenmark-Suppression, GI-Blutung',
      'Wechselwirkung mit CYP3A4-Substraten',
      'Quercetin senkt Eisenresorption',
      'Eigenanwendung ohne Onkologen sehr riskant'
    ],
    status: 'Dasatinib in DE für CML/ALL zugelassen (Sprycel). Senolytische Anwendung ist STREN OFF-LABEL.',
    sources: [
      { title: 'Justice JN et al., EBioMedicine 2019 – D+Q in IPF', url: 'https://pubmed.ncbi.nlm.nih.gov/30616998/' },
      { title: 'Hickson LJ et al., EBioMedicine 2019 – D+Q in CKD', url: 'https://pubmed.ncbi.nlm.nih.gov/31542391/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Dasatinib/Quercetin)', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'methylene-blue',
    name: 'Methylene Blue (Methylenblau)',
    altNames: 'Methylthioniniumchlorid',
    class: 'Mitochondrialer Elektronen-Donor / Redox-Modulator',
    emoji: '🔷',
    short: 'Alter Farbstoff aus dem 19. Jh. – Biohacker-Liebling für Mitochondrien-Boost. Wird sublingual mikrodosiert.',
    moa: 'Bei niedrigen Dosen alternativer Elektronen-Carrier zur Atmungskette → erhöhte ATP-Produktion. Bei hohen Dosen prooxidativ.',
    benefits: [
      'Mitochondrien-Effizienz & Hirnstoffwechsel-Studien (Methodist Hospital)',
      'Klinisch zugelassen für Methämoglobinämie & Septischer Schock',
      'Tiefer Hippokampus-Stoffwechsel-Schub (FDG-PET)',
      'Antibakterielle und anti-malaria Wirkung'
    ],
    risks: [
      'Serotoninsyndrom bei SSRI-/MAOI-Kombination – STRIKTE KONTRAINDIKATION',
      'G6PD-Mangel: Hämolyse-Risiko',
      'Blau gefärbter Urin / Mund',
      'Über 1 mg/kg potenziell prooxidativ'
    ],
    status: 'In DE als ProvayBlue/Methylthioninium injizierbar zugelassen für Methämoglobinämie. Sublinguale Mikrodosen aus dem Forschungsmarkt sind OFF-LABEL.',
    sources: [
      { title: 'Atamna H, Kumar R – Methylene blue mitochondria 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/20667416/' },
      { title: 'Rodriguez P et al., Radiology 2016 – brain imaging', url: 'https://pubmed.ncbi.nlm.nih.gov/27089023/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Methylenblau-Forschung)', url: 'https://biolabshop.de/' }
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
  // Stoffwechsel / Weight Loss
  'retatrutide': 'Stoffwechsel',
  'tesofensin': 'Stoffwechsel',
  'semaglutide': 'Stoffwechsel',
  'tirzepatide': 'Stoffwechsel',
  'cagrilintide': 'Stoffwechsel',
  // Exercise-Mimetika / GH
  'slu-pp-332': 'Exercise',
  '5-amino-1mq': 'Exercise',
  'mk-677': 'Exercise',
  'cjc-ipamorelin': 'Exercise',
  // Immun / Heilung
  'thymosin-alpha-1': 'Immun',
  'bpc-157': 'Immun',
  'tb-500': 'Immun',
  'ghk-cu': 'Immun',
  // Longevity
  'mots-c': 'Longevity',
  'rapamycin': 'Longevity',
  'epitalon': 'Longevity',
  'metformin': 'Longevity',
  'senolytic-dq': 'Longevity',
  'methylene-blue': 'Longevity'
};
EXPERIMENTAL.forEach(e => { e.filterCat = _EXP_CAT_MAP[e.id] || 'Sonstige'; });
