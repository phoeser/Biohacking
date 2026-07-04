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
    ],
    podcasts: [
      {
        title: 'KI-Podcast: Tesofensine – Wirkung, Studien & Risiken',
        audio: 'audio/tesofensine-podcast.mp3',
        lengthLabel: '≈ 12 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von 4 englischsprachigen Podcasts und ergänzt mit aktueller Fachrecherche. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'THE MANLAB #041 – What is Tesofensine & How It Works', url: 'https://open.spotify.com/episode/3wocVfRwR4d3YapmplsK49' },
          { title: 'Peptide of The Week – Tesofensine & Methylene Blue', url: 'https://open.spotify.com/episode/5y3PK4s4SnbwNFCeLQ6RHl' },
          { title: 'West Wellness & Longevity – Tesofensine Explained', url: 'https://open.spotify.com/episode/0PAyFCD0hLeL0wOFVVyJDe' },
          { title: 'Motivation with Jon Andersen – Tesofensine: The Miracle Molecule', url: 'https://open.spotify.com/episode/4H46sRwmpNIn5sUaZKCECU' }
        ]
      },
      {
        title: 'Tesofensin stoppt Heißhunger direkt im Gehirn',
        audio: 'audio/tesofensin-heisshunger.mp3',
        lengthLabel: '≈ 20 Min · Deutsch',
        note: 'Deutsche Podcastfolge zu Tesofensine. Nur Information – keine medizinische Beratung.'
      }
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
    ],
    podcasts: [
      {
        title: 'KI-Podcast: BPC-157 – Heilungs-Peptid zwischen Hype und Evidenz',
        audio: 'audio/bpc-157-podcast.mp3',
        lengthLabel: '≈ 9 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von 5 Podcasts und mit Fachrecherche ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'Beyond Lifespan – BPC-157: Trendpeptid zwischen Hype und Evidenz', url: 'https://open.spotify.com/episode/3H92nUxDlJx6QAXCrnJ2Rg' },
          { title: 'The Hunter Williams Podcast – The BPC-157 Masterclass', url: 'https://open.spotify.com/episode/605tRucNpJOg569MmvsU8o' },
          { title: 'Peptides Explained – BPC-157 and Cancer: What the Studies Show', url: 'https://open.spotify.com/episode/3HWa6jO8zp3p6CVWBu2HTN' },
          { title: 'Peptides Explained – BPC-157 & TB-500: The Wolverine Stack', url: 'https://open.spotify.com/episode/1sikogAxcTbf4Mqfut7TKy' },
          { title: 'The Gillett Health Podcast – BPC-157 101', url: 'https://open.spotify.com/episode/2Mgz0t1SIrV8Dwxdet0RRM' }
        ]
      }
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
    ],
    podcasts: [
      {
        title: 'KI-Podcast: MOTS-c – das mitochondriale Peptid',
        audio: 'audio/mots-c-podcast.mp3',
        lengthLabel: '≈ 8 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von 6 Podcasts und mit Fachrecherche ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'The Hunter Williams Podcast – The MOTS-c Masterclass', url: 'https://open.spotify.com/episode/1gm3FXwjaB26mzqmf4ClV8' },
          { title: 'Peptide of The Week – MOTS-c', url: 'https://open.spotify.com/episode/50ivCghdwnxWZfcWazeRvI' },
          { title: 'The Peptide Effect – MOTS-c Explained', url: 'https://open.spotify.com/episode/6dgKkSY9T1P80besGDJJ1D' },
          { title: 'THE MANLAB – MOTS-C: Worth the Hype?', url: 'https://open.spotify.com/episode/4LBOdxUgoNVip9cYl8ZIIQ' },
          { title: 'GSD Mode – MOTS-c Peptide Breakdown', url: 'https://open.spotify.com/episode/1VY07hZk7wBKtjshJlyOKL' }
        ]
      }
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
    ],
    podcasts: [
      {
        title: 'KI-Podcast: TB-500 – der „Transporter" im Wolverine-Stack',
        audio: 'audio/tb-500-podcast.mp3',
        lengthLabel: '≈ 8 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von 4 Podcasts und mit Fachrecherche ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'The Hunter Williams Podcast – The Complete TB-500 Masterclass', url: 'https://open.spotify.com/episode/6X7pisgcrGMj7hcUgPebOL' },
          { title: 'Peptide of The Week – Wolverine Stack (BPC-157 & TB-500)', url: 'https://open.spotify.com/episode/29CiFyfaa3fghk57syxE68' },
          { title: 'Peptides With Michele – BPC-157 + TB-500: Recovery Power Couple', url: 'https://open.spotify.com/episode/0V8XPPXjTy2KDQyAdkQlRP' },
          { title: 'Basically Bodybuilding – BPC-157 und TB500 (Deutsch)', url: 'https://open.spotify.com/episode/0XOJEl9uY4I6N2WTbWpqs3' }
        ]
      }
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
  },
  {
    id: 'ghrp-2',
    name: 'GHRP-2',
    altNames: 'Pralmorelin, KP-102, GHRP2',
    class: 'Synthetisches Wachstumshormon-Sekretagogum (Hexapeptid, Ghrelin-Rezeptor-Agonist)',
    emoji: '💪',
    short: 'Synthetisches Hexapeptid, das über den Ghrelin-Rezeptor die pulsatile Ausschüttung von körpereigenem Wachstumshormon anregt.',
    moa: 'GHRP-2 ist ein Agonist am Wachstumshormon-Sekretagogum-Rezeptor (GHSR-1a), dem Ghrelin-Rezeptor der Hypophyse. Durch dessen Aktivierung stimuliert es die Freisetzung von Wachstumshormon (GH) aus den somatotropen Zellen und dämpft zugleich Somatostatin. Der Effekt ist pulsatil und wirkt synergistisch mit GHRH beziehungsweise GHRH-Analoga. Neben GH kann GHRP-2 dosisabhängig auch Prolaktin, ACTH und Cortisol leicht erhöhen. In der Humanmedizin wurde es primär als diagnostisches Provokationsmittel der GH-Sekretion untersucht.',
    benefits: [
      'Regt die Ausschüttung von körpereigenem Wachstumshormon an, ohne exogenes GH zuzuführen.',
      'Erhöht in Studien indirekt die IGF-1-Spiegel über die gesteigerte GH-Sekretion.',
      'Wirkt appetitanregend, da es wie Ghrelin am GHSR-1a ansetzt.',
      'Zeigt synergistische GH-Freisetzung in Kombination mit GHRH-Analoga.',
      'Gilt in der Forschung als potenter GH-Stimulator mit vergleichsweise geringer Cortisol-Beeinflussung.',
      'Wurde klinisch als diagnostischer GH-Provokationstest charakterisiert.'
    ],
    risks: [
      'Kann Prolaktin, ACTH und Cortisol erhöhen; endokrine Nebenwirkungen sind möglich.',
      'Appetitsteigerung und Wassereinlagerungen werden berichtet.',
      'Keine Zulassung zur Leistungs- oder Anti-Aging-Anwendung; nur als Forschungschemikalie erhältlich.',
      'Langzeitsicherheit beim Menschen ist nicht belegt; Datenlage überwiegend kurzfristig und diagnostisch.',
      'Graumarkt-Ware kann in Reinheit, Dosierung und Sterilität stark schwanken.',
      'Steht auf der WADA-Liste verbotener Substanzen (GH-Sekretagoga).'
    ],
    status: 'In der EU und Deutschland nicht als Arzneimittel zugelassen; Vertrieb erfolgt ausschließlich als nicht für den menschlichen Gebrauch bestimmte Forschungssubstanz.',
    sources: [
      { title: 'Bowers et al., Endocrinology 1984 – Charakterisierung wachstumshormonfreisetzender Peptide', url: 'https://pubmed.ncbi.nlm.nih.gov/6539197/' },
      { title: 'Arvat et al., J Clin Endocrinol Metab 1997 – GHRP-2 und Hexarelin auf GH, Prolaktin, ACTH, Cortisol', url: 'https://pubmed.ncbi.nlm.nih.gov/9253340/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'ghrp-6',
    name: 'GHRP-6',
    altNames: 'Growth Hormone Releasing Peptide-6, SKF-110679',
    class: 'Synthetisches Wachstumshormon-Sekretagogum (Hexapeptid, Ghrelin-Rezeptor-Agonist)',
    emoji: '🍽️',
    short: 'Erstes klassisches GH-freisetzendes Hexapeptid, das über den Ghrelin-Rezeptor GH-Ausschüttung und Appetit stark stimuliert.',
    moa: 'GHRP-6 bindet als Agonist an den Ghrelin-Rezeptor (GHSR-1a) in Hypophyse und Hypothalamus und löst dort die pulsatile Freisetzung von Wachstumshormon aus. Es wirkt synergistisch mit GHRH und unterdrückt gegenregulatorisch Somatostatin. Charakteristisch ist eine ausgeprägte ghrelinartige Appetitsteigerung, die stärker ausfällt als bei GHRP-2. Wie andere Sekretagoga kann es begleitend Cortisol und Prolaktin moderat anheben. GHRP-6 diente historisch als Ausgangsmolekül, aus dem GHRP-2 und Hexarelin entwickelt wurden.',
    benefits: [
      'Stimuliert die pulsatile Freisetzung von körpereigenem Wachstumshormon.',
      'Ausgeprägte Appetitsteigerung, die in präklinischen Modellen für Kachexie-Forschung untersucht wird.',
      'Erhöht indirekt IGF-1 über die gesteigerte GH-Sekretion.',
      'Wirkt synergistisch mit GHRH-Analoga für eine verstärkte GH-Antwort.',
      'In Tiermodellen Hinweise auf zytoprotektive Effekte an Herz- und anderen Geweben (präklinisch).',
      'Diente als Leitstruktur für die gesamte Klasse der GH-Sekretagoga.'
    ],
    risks: [
      'Starke Appetitsteigerung kann unerwünscht sein; Wassereinlagerungen möglich.',
      'Kann Cortisol und Prolaktin erhöhen, mit potenziell endokrinen Nebenwirkungen.',
      'Nicht als Arzneimittel zugelassen; ausschließlich als Forschungschemikalie erhältlich.',
      'Humane Langzeit- und Sicherheitsdaten fehlen weitgehend.',
      'Reinheit und Dosierung von Graumarkt-Produkten sind oft nicht verifizierbar.',
      'Als GH-Sekretagogum auf der WADA-Verbotsliste geführt.'
    ],
    status: 'In der EU und Deutschland ohne arzneimittelrechtliche Zulassung; Verkauf nur als Forschungssubstanz ohne Bestimmung für den menschlichen Gebrauch.',
    sources: [
      { title: 'Bowers et al., Endocrinology 1984 – Wachstumshormonfreisetzung durch GHRP-6', url: 'https://pubmed.ncbi.nlm.nih.gov/6539197/' },
      { title: 'Cibrian et al., Review 2016 – GHRP-6 und verwandte Sekretagoga', url: 'https://pubmed.ncbi.nlm.nih.gov/26928634/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'hexarelin',
    name: 'Hexarelin',
    altNames: 'Examorelin, EP-23905',
    class: 'Synthetisches Wachstumshormon-Sekretagogum (Hexapeptid, Ghrelin-Rezeptor-Agonist)',
    emoji: '🫀',
    short: 'Potentes GH-freisetzendes Hexapeptid mit zusätzlich untersuchten, GH-unabhängigen kardialen Effekten in präklinischen Modellen.',
    moa: 'Hexarelin ist ein Agonist am Ghrelin-Rezeptor (GHSR-1a) und löst eine potente pulsatile Ausschüttung von Wachstumshormon aus. Es gilt als eines der stärksten GH-Sekretagoga der GHRP-Reihe. Neben der zentralen GH-Freisetzung bindet Hexarelin präklinisch an den kardialen CD36-Rezeptor, worüber GH-unabhängige, potenziell kardioprotektive Effekte diskutiert werden. Bei wiederholter Gabe kann eine Abschwächung der GH-Antwort (Desensibilisierung) auftreten. Wie andere Sekretagoga kann es Cortisol und Prolaktin leicht erhöhen.',
    benefits: [
      'Sehr potente Stimulation der körpereigenen GH-Ausschüttung.',
      'Erhöht indirekt IGF-1 über die gesteigerte GH-Sekretion.',
      'Präklinische Hinweise auf GH-unabhängige kardioprotektive Effekte über CD36.',
      'Weniger ausgeprägte Appetitsteigerung als GHRP-6.',
      'Wurde in klinischen Studien als GH-Provokationsmittel eingesetzt.',
      'In Tiermodellen Untersuchungen zu Effekten auf Muskel- und Herzgewebe.'
    ],
    risks: [
      'Neigt bei wiederholter Anwendung zur Desensibilisierung und nachlassender GH-Antwort.',
      'Kann Cortisol und Prolaktin erhöhen; endokrine Nebenwirkungen möglich.',
      'Keine Zulassung als Arzneimittel; nur als Forschungschemikalie verfügbar.',
      'Belastbare Humandaten zu Langzeitsicherheit fehlen; vieles beruht auf Tierdaten.',
      'Graumarkt-Reinheit und Sterilität sind häufig nicht überprüfbar.',
      'Als GH-Sekretagogum von der WADA verboten.'
    ],
    status: 'In Deutschland und der EU nicht als Arzneimittel zugelassen; Handel ausschließlich als Forschungssubstanz ohne Bestimmung für den menschlichen Verzehr.',
    sources: [
      { title: 'Ghigo et al., J Clin Endocrinol Metab 1994 – GH-freisetzende Wirkung von Hexarelin', url: 'https://pubmed.ncbi.nlm.nih.gov/7962331/' },
      { title: 'Broglio et al., Endocrine 2003 – Kardiovaskuläre und endokrine Effekte von Hexarelin', url: 'https://pubmed.ncbi.nlm.nih.gov/12668875/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'mod-grf-1-29',
    name: 'Mod GRF 1-29 (CJC-1295 ohne DAC)',
    altNames: 'Modified GRF (1-29), CJC-1295 no DAC, Sermorelin-Analogon',
    class: 'Synthetisches GHRH-Analogon (Wachstumshormon-Releasing-Hormon-Fragment)',
    emoji: '📈',
    short: 'Stabilisiertes GHRH-Analogon, das an den GHRH-Rezeptor bindet und die GH-Freisetzung anregt, meist kombiniert mit einem GHRP.',
    moa: 'Mod GRF 1-29 ist ein modifiziertes Fragment der ersten 29 Aminosäuren des Wachstumshormon-Releasing-Hormons (GHRH). Es bindet an den GHRH-Rezeptor der Hypophyse und stimuliert so die Synthese und Freisetzung von Wachstumshormon. Vier Aminosäureaustausche schützen das Molekül vor enzymatischem Abbau und verlängern die Wirkdauer gegenüber nativem GHRH beziehungsweise Sermorelin. Anders als die DAC-Variante fehlt der Drug-Affinity-Complex, sodass die Halbwertszeit kürzer bleibt und die GH-Ausschüttung pulsatiler erfolgt. In der Praxis wird es häufig mit einem Ghrelin-Rezeptor-Agonisten wie GHRP-2 oder GHRP-6 kombiniert, da beide Wege synergistisch wirken.',
    benefits: [
      'Stimuliert die pulsatile Freisetzung von körpereigenem Wachstumshormon über den GHRH-Weg.',
      'Wirkt synergistisch mit GHRP-Sekretagoga für eine verstärkte GH-Antwort.',
      'Längere Wirkdauer als natives GHRH oder Sermorelin durch die Aminosäureaustausche.',
      'Erhält die pulsatile GH-Physiologie besser als langwirksame DAC-Varianten.',
      'Erhöht indirekt IGF-1 über die gesteigerte GH-Sekretion.',
      'Gilt in der Forschung als vergleichsweise selektiv am GHRH-Rezeptor.'
    ],
    risks: [
      'Häufig berichtete Nebenwirkungen sind Rötung, Reaktionen an der Applikationsstelle sowie Wassereinlagerungen.',
      'Kann als GH-Stimulator theoretisch Insulinsensitivität und Blutzucker beeinflussen.',
      'Nicht als Arzneimittel zugelassen; nur als Forschungschemikalie erhältlich.',
      'Belastbare kontrollierte Humanstudien speziell zu dieser Variante fehlen weitgehend.',
      'Graumarkt-Peptide variieren stark in Reinheit, Peptidgehalt und Sterilität.',
      'Als GH-freisetzendes Mittel auf der WADA-Verbotsliste.'
    ],
    status: 'In der EU und Deutschland nicht als Arzneimittel zugelassen; Vertrieb ausschließlich als Forschungssubstanz ohne Bestimmung für den menschlichen Gebrauch.',
    sources: [
      { title: 'Ionescu & Frohman, J Clin Endocrinol Metab 2006 – Pulsatile vs. kontinuierliche GH-Sekretion durch GHRH-Analoga', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' },
      { title: 'Teichman et al., J Clin Endocrinol Metab 2006 – Pharmakokinetik von CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    altNames: 'Anti-Obesity Drug 9604, HGH-Fragment 176-191 (modifiziert)',
    class: 'Modifiziertes Wachstumshormon-Fragment (lipolytisches Peptidfragment)',
    emoji: '🔥',
    short: 'Modifiziertes Fragment der C-terminalen Region des Wachstumshormons, das auf fettabbauende Effekte ohne GH-typische Nebenwirkungen ausgelegt wurde.',
    moa: 'AOD-9604 leitet sich vom C-terminalen Abschnitt (Aminosäuren 176-191) des humanen Wachstumshormons ab, ergänzt um ein N-terminales Tyrosin. Dieser Bereich vermittelt in präklinischen Modellen die lipolytischen Eigenschaften von GH, ohne dessen wachstumsfördernde oder blutzuckerwirksame Effekte auszulösen. Die postulierte Wirkung ist eine Stimulation der Fettverbrennung und Hemmung der Lipogenese, überwiegend belegt in Tier- und Zellmodellen. Anders als vollständiges GH soll AOD-9604 die IGF-1-Spiegel und die Insulinsensitivität nicht relevant beeinflussen. In humanen Phase-II-Studien zur Adipositas verfehlte es jedoch klinisch überzeugende Gewichtsverlust-Endpunkte.',
    benefits: [
      'In Tiermodellen Hinweise auf gesteigerte Lipolyse und gehemmte Fetteinlagerung.',
      'Soll GH-typische Effekte auf IGF-1 und Blutzucker weitgehend vermeiden.',
      'Zeigte in humanen Studien ein günstiges Kurzzeit-Sicherheitsprofil vergleichbar mit Placebo.',
      'Kein nachgewiesener negativer Effekt auf Glukose- oder Insulinstoffwechsel in Studien.',
      'Wird präklinisch auch im Zusammenhang mit Knorpel- und Geweberegeneration untersucht.',
      'Keine relevante Appetitsteigerung im Gegensatz zu Ghrelin-Rezeptor-Agonisten.'
    ],
    risks: [
      'Humane Phase-II-Studien verfehlten überzeugende Gewichtsverlust-Endpunkte; die klinische Entwicklung wurde eingestellt.',
      'Wirksamkeit beim Menschen ist somit nicht belegt; positive Daten stammen überwiegend aus Tiermodellen.',
      'Nicht als Arzneimittel zugelassen; ausschließlich als Forschungschemikalie erhältlich.',
      'Langzeitsicherheit über kurze Studienzeiträume hinaus ist nicht ausreichend untersucht.',
      'Graumarkt-Produkte variieren stark in Reinheit, Peptidgehalt und Sterilität.',
      'Regulatorischer Status ist international uneinheitlich; in der EU nicht als Wirkstoff zugelassen.'
    ],
    status: 'In der EU und Deutschland nicht als Arzneimittel zugelassen; die pharmazeutische Entwicklung wurde nach Phase II eingestellt, Vertrieb nur als Forschungssubstanz.',
    sources: [
      { title: 'Ng et al., Diabetes Obes Metab 2000 – Lipolytische Wirkung des GH-Fragments AOD-9604', url: 'https://pubmed.ncbi.nlm.nih.gov/11225653/' },
      { title: 'Heffernan et al., Endocrinology 2001 – Effekte von AOD9604 auf den Fettstoffwechsel', url: 'https://pubmed.ncbi.nlm.nih.gov/11713208/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'kpv',
    name: 'KPV',
    altNames: 'Lysin-Prolin-Valin, alpha-MSH(11-13), Lys-Pro-Val',
    class: 'Tripeptid, C-terminales alpha-MSH-Fragment, entzündungshemmend',
    emoji: '🛡️',
    short: 'Kurzes Tripeptid-Fragment des Hormons alpha-MSH mit im Tiermodell beobachteten entzündungshemmenden und antimikrobiellen Eigenschaften.',
    moa: 'KPV entspricht der C-terminalen Sequenz von alpha-MSH und wirkt überwiegend unabhängig von den klassischen Melanocortin-Rezeptoren. In Zell- und Tiermodellen hemmt es proinflammatorische Signalwege, insbesondere die Aktivierung des Transkriptionsfaktors NF-κB, und dämpft dadurch die Ausschüttung von Zytokinen wie TNF-α und IL-6. Nach Aufnahme in Zellen scheint es intrazellulär entzündungsregulierend zu wirken, unter anderem an intestinalem Gewebe. Zusätzlich wurden antimikrobielle Effekte gegen einzelne Bakterien und Pilze beschrieben. Die Datenlage stammt fast ausschließlich aus präklinischer Forschung.',
    benefits: [
      'Dämpft in Tier- und Zellmodellen entzündliche Signalkaskaden über NF-κB.',
      'Reduziert präklinisch die Freisetzung proinflammatorischer Zytokine.',
      'Wird im Kontext chronisch-entzündlicher Darmerkrankungen erforscht (Tiermodelle).',
      'Zeigte in Studien antimikrobielle Aktivität gegen einzelne Erreger.',
      'Gilt als sehr kurzes Peptid mit im Labor guter Zellgängigkeit.',
      'Wird in der Community mit Haut- und Wundthemen assoziiert (nicht belegt).'
    ],
    risks: [
      'Es fehlen kontrollierte Humanstudien zu Wirksamkeit und Sicherheit.',
      'Langzeitfolgen beim Menschen sind nicht untersucht.',
      'Belege stammen überwiegend aus Tierdaten und Zellkultur (präklinisch).',
      'Graumarkt-Produkte bergen Risiken bezüglich Reinheit, Dosisgenauigkeit und Verunreinigungen.',
      'Als Injektionspeptid bestehen Risiken durch unsterile Anwendung.',
      'Nicht als Arzneimittel zugelassen; Anwendung am Menschen ist nicht validiert.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen und ausschließlich als Forschungssubstanz gehandelt.',
    sources: [
      { title: 'Dalmasso et al., Am J Physiol Gastrointest Liver Physiol 2008 – KPV und intestinale Entzündung', url: 'https://pubmed.ncbi.nlm.nih.gov/18497332/' },
      { title: 'Cutuli et al., J Leukoc Biol 2000 – Antimikrobielle Aktivität von alpha-MSH-Peptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/10673523/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'KI-Podcast: KPV – das Anti-Entzündungs-Tripeptid',
        audio: 'audio/kpv-podcast.mp3',
        lengthLabel: '≈ 9 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von 4 englischsprachigen Podcasts und mit Fachrecherche ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'The Hunter Williams Podcast – KPV: Best Anti-Inflammatory Peptide', url: 'https://open.spotify.com/episode/5JbfV3XJhPSQttJkR8GJBB' },
          { title: 'Peptide of The Week – KPV & PT-141', url: 'https://open.spotify.com/episode/4RR6rXWb3jDsBYQOFf4l35' },
          { title: 'The Human 5.0 Project – KLOW Peptide Blend (inkl. KPV)', url: 'https://open.spotify.com/episode/0uoOMwyZ1xpclkmWFT2ceK' },
          { title: 'The Peptide Effect – KPV Peptide Explained', url: 'https://open.spotify.com/episode/5ablv4QSXOZH0drjoWKRuK' }
        ]
      }
    ]
  },
  {
    id: 'll-37',
    name: 'LL-37',
    altNames: 'Cathelicidin, hCAP-18-Fragment, CAMP-Peptid',
    class: 'Antimikrobielles Peptid (Cathelicidin-Familie), Teil der angeborenen Immunabwehr',
    emoji: '🦠',
    short: 'Einziges menschliches Cathelicidin, ein körpereigenes antimikrobielles Peptid mit breiter Aktivität gegen Bakterien und Rolle in der Immunmodulation.',
    moa: 'LL-37 ist das aktive Spaltprodukt des Vorläuferproteins hCAP-18 und Teil der angeborenen Immunabwehr. Als kationisches, amphipathisches Peptid lagert es sich an negativ geladene mikrobielle Membranen an und destabilisiert diese, was zur Abtötung von Bakterien, einzelnen Pilzen und umhüllten Viren beitragen kann. Darüber hinaus wirkt es immunmodulierend, indem es Immunzellen anlockt und entzündliche Reaktionen sowie Wundheilungsprozesse beeinflusst. Die Effekte sind konzentrationsabhängig und können in hoher Dosis auch für menschliche Zellen zytotoxisch sein. Aussagen zur therapeutischen Anwendung beruhen weit überwiegend auf präklinischer Forschung.',
    benefits: [
      'Breite antimikrobielle Aktivität gegen viele Bakterienarten im Labor.',
      'Kann körpereigene Immunzellen chemotaktisch anlocken (immunmodulierend).',
      'Wird im Zusammenhang mit Wundheilung und Angiogenese erforscht.',
      'Zeigt in vitro Aktivität gegen einzelne umhüllte Viren und Pilze.',
      'Natürlicher Bestandteil der angeborenen menschlichen Immunabwehr.',
      'Gegenstand der Forschung zu neuartigen Anti-Infektiva angesichts von Resistenzen.'
    ],
    risks: [
      'In höheren Konzentrationen kann LL-37 auch menschliche Zellen schädigen (zytotoxisch).',
      'Wird mit proinflammatorischen und autoimmunen Prozessen (z. B. Psoriasis) in Verbindung gebracht.',
      'Es fehlen kontrollierte Humanstudien zu einer supplementären Anwendung.',
      'Belege stammen überwiegend aus Zellkultur und Tiermodellen (präklinisch).',
      'Graumarkt-Ware ist bezüglich Reinheit, Sequenztreue und Endotoxinen unsicher.',
      'Nicht als Arzneimittel zugelassen, Selbstanwendung ist nicht validiert und potenziell riskant.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen und nur als Forschungssubstanz verfügbar.',
    sources: [
      { title: 'Vandamme et al., Cell Immunol 2012 – Übersicht zu LL-37 und Immunmodulation', url: 'https://pubmed.ncbi.nlm.nih.gov/23178275/' },
      { title: 'Dürr et al., Biochim Biophys Acta 2006 – Struktur und antimikrobielle Funktion von LL-37', url: 'https://pubmed.ncbi.nlm.nih.gov/16716248/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'foxo4-dri',
    name: 'FOXO4-DRI',
    altNames: 'FOXO4 D-Retro-Inverso-Peptid, Proxofim (Forschungsbezeichnung)',
    class: 'Senolytisches Peptid, FOXO4-p53-Interaktionshemmer',
    emoji: '🧬',
    short: 'Synthetisches D-Retro-Inverso-Peptid, das in Tiermodellen gezielt seneszente „Zombie-Zellen" durch Wiederherstellung der p53-vermittelten Apoptose beseitigen soll.',
    moa: 'In seneszenten Zellen bindet das Protein FOXO4 den Tumorsuppressor p53 und hält ihn im Zellkern zurück, wodurch die Selbstzerstörung dieser Zellen blockiert wird. FOXO4-DRI ist ein aus D-Aminosäuren aufgebautes, gegen den Abbau stabilisiertes Peptid, das die FOXO4-p53-Bindung stört. Dadurch wird p53 aus dem Kern freigesetzt und leitet in seneszenten Zellen die Apoptose ein, während gesunde teilungsfähige Zellen weitgehend verschont bleiben. Im Mausmodell verbesserte dies Marker von Fitness, Fell und Nierenfunktion. Sämtliche belastbaren Wirkbelege stammen aus präklinischen Studien.',
    benefits: [
      'Beseitigte in Mausmodellen selektiv seneszente Zellen (senolytischer Effekt).',
      'Verbesserte im Tierversuch Marker für Vitalität und Nierenfunktion.',
      'Zielt gezielt auf einen zentralen Alterungsmechanismus (Zellseneszenz).',
      'D-Aminosäure-Struktur verleiht dem Peptid erhöhte Stabilität gegen Abbau.',
      'Schonte in Studien überwiegend gesunde, teilungsfähige Zellen.',
      'Wichtiges Forschungswerkzeug in der Longevity- und Seneszenz-Forschung.'
    ],
    risks: [
      'Es existieren keine belastbaren klinischen Humanstudien zu Wirksamkeit und Sicherheit.',
      'Die p53-Modulation ist tumorbiologisch heikel und potenziell mit ernsten Risiken behaftet.',
      'Wirkbelege stammen ausschließlich aus Tier- und Zellmodellen (präklinisch).',
      'Langzeit- und Off-Target-Effekte beim Menschen sind völlig unklar.',
      'Graumarkt-Produkte sind hinsichtlich Reinheit, Sequenz und korrekter D-Konfiguration unsicher.',
      'Nicht als Arzneimittel zugelassen, jede Anwendung am Menschen ist experimentell und unvalidiert.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen, ausschließlich als experimentelle Forschungssubstanz eingestuft.',
    sources: [
      { title: 'Baar et al., Cell 2017 – Gezielte Apoptose seneszenter Zellen durch FOXO4-DRI', url: 'https://pubmed.ncbi.nlm.nih.gov/28340339/' },
      { title: 'Le et al., Front Bioeng Biotechnol 2021 – FOXO4-DRI entfernt seneszente Chondrozyten in vitro', url: 'https://pubmed.ncbi.nlm.nih.gov/34041226/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'ss-31',
    name: 'SS-31 (Elamipretide)',
    altNames: 'Elamipretide, MTP-131, Bendavia',
    class: 'Mitochondrial gerichtetes, cardiolipin-bindendes Tetrapeptid (Szeto-Schiller-Peptid)',
    emoji: '⚡',
    short: 'Mitochondrial gerichtetes Tetrapeptid, das an Cardiolipin bindet und die innere Mitochondrienmembran stabilisieren sowie die Energieproduktion verbessern soll.',
    moa: 'SS-31 (Elamipretide) reichert sich selektiv in der inneren Mitochondrienmembran an und bindet dort an das Membranlipid Cardiolipin. Durch diese Bindung stabilisiert es die Faltung der Cristae und den Elektronentransport, was die ATP-Produktion unterstützen und die Bildung reaktiver Sauerstoffspezies verringern kann. In der Folge werden mitochondriale Funktion und Membranintegrität in geschädigtem Gewebe verbessert. Anders als die meisten Biohacking-Peptide wurde Elamipretide in echten klinischen Studien untersucht. Die Ergebnisse sind je nach Indikation gemischt; für das seltene Barth-Syndrom erfolgte 2025 in den USA eine beschleunigte Zulassung.',
    benefits: [
      'Bindet Cardiolipin und stabilisiert die innere Mitochondrienmembran.',
      'Kann in geschädigtem Gewebe die ATP-Produktion unterstützen.',
      'Verringert in Modellen mitochondrialen oxidativen Stress.',
      'Wurde in mehreren klinischen Studien am Menschen untersucht (echte klinische Evidenz).',
      'In den USA 2025 als erste Barth-Syndrom-Therapie beschleunigt zugelassen.',
      'Gegenstand von Studien zu Herzinsuffizienz, Nieren- und mitochondrialen Erkrankungen.',
      'Klar definierter, mitochondrienspezifischer Wirkmechanismus.'
    ],
    risks: [
      'Mehrere klinische Endpunktstudien (z. B. Herzinsuffizienz) verfehlten ihr primäres Ziel.',
      'Häufige Nebenwirkungen umfassen Reaktionen an der Injektionsstelle.',
      'Für Biohacking-Ziele wie Anti-Aging fehlt weiterhin belastbare Wirksamkeitsevidenz.',
      'In DE/EU besteht keine reguläre Zulassung, der Bezug erfolgt über den Graumarkt.',
      'Graumarkt-Ware ist bezüglich Reinheit, Dosis und Sterilität nicht garantiert.',
      'Selbstanwendung außerhalb kontrollierter Studien ist nicht validiert.'
    ],
    status: 'In DE/EU nicht regulär als Arzneimittel zugelassen; in den USA 2025 nur für das Barth-Syndrom beschleunigt zugelassen.',
    sources: [
      { title: 'Szeto, Br J Pharmacol 2014 – Mitochondrial gerichtete Peptide und Wirkmechanismus von SS-31', url: 'https://pubmed.ncbi.nlm.nih.gov/24328896/' },
      { title: 'Reid Thompson et al., Genet Med 2021 – Elamipretide beim Barth-Syndrom (klinische Studie)', url: 'https://pubmed.ncbi.nlm.nih.gov/33298753/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'dsip',
    name: 'DSIP',
    altNames: 'Delta Sleep-Inducing Peptide, Delta-Schlaf-induzierendes Peptid',
    class: 'Neuropeptid (Nonapeptid), endogen',
    emoji: '😴',
    short: 'Neuropeptid aus neun Aminosäuren, das mit der Schlafregulation und der Stressachse in Verbindung gebracht wird.',
    moa: 'DSIP wurde in den 1970er-Jahren aus dem venösen Hirnblut von Kaninchen während des Tiefschlafs isoliert. Es scheint modulierend auf das limbische System sowie die Hypothalamus-Hypophysen-Achse zu wirken und beeinflusst mutmaßlich die Ausschüttung mehrerer Hormone. In tierexperimentellen Modellen wurde eine Zunahme von Delta- und Spindelaktivität im EEG sowie eine Reduktion der motorischen Aktivität beobachtet. Der genaue Rezeptor und Signalweg sind bis heute nicht eindeutig geklärt. Aussagekräftige kontrollierte Humanstudien zur Schlafwirkung fehlen weitgehend.',
    benefits: [
      'In frühen Untersuchungen mit möglicher schlafanstoßender Wirkung assoziiert.',
      'Diskutierte modulierende Effekte auf die Stressreaktion und Cortisol.',
      'Tierdaten deuten auf antioxidative Eigenschaften hin.',
      'In einzelnen Berichten mit Schmerzmodulation in Verbindung gebracht.',
      'Untersucht im Kontext von Entzugssymptomen und depressiver Verstimmung.',
      'Sehr kurze Peptidstruktur, in Studien bislang gut verträglich beschrieben.'
    ],
    risks: [
      'Belastbare, kontrollierte Humanstudien zu Wirksamkeit und Sicherheit fehlen weitgehend.',
      'Wirkmechanismus und Zielrezeptor bleiben wissenschaftlich unklar.',
      'Langzeitsicherheit beim Menschen ist nicht untersucht.',
      'Graumarkt-Ware kann in Reinheit, Dosierung und Sterilität stark schwanken.',
      'Nicht als Arzneimittel zugelassen; jede Anwendung erfolgt ohne regulatorische Prüfung.',
      'Wechselwirkungen mit Medikamenten und der Hormonachse sind kaum erforscht.'
    ],
    status: 'In Deutschland und der EU nicht als Arzneimittel zugelassen; Vertrieb ausschließlich als Forschungschemikalie ohne Zulassung für den menschlichen Gebrauch.',
    sources: [
      { title: 'Graf & Kastin, Neurosci Biobehav Rev 1984 – DSIP: Ein Überblick', url: 'https://pubmed.ncbi.nlm.nih.gov/6152762/' },
      { title: 'Kovalzon & Strekalova, Neurosci Behav Physiol 2006 – Schlaf und DSIP', url: 'https://pubmed.ncbi.nlm.nih.gov/16645768/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'semax',
    name: 'Semax',
    altNames: 'ACTH(4-7)-Pro-Gly-Pro',
    class: 'Synthetisches ACTH-Fragment-Analogon (Heptapeptid), Nootropikum',
    emoji: '🧠',
    short: 'In Russland entwickeltes Peptidanalogon eines ACTH-Fragments, das als Nootropikum und Neuroprotektivum untersucht wird.',
    moa: 'Semax leitet sich von einem Fragment des adrenocorticotropen Hormons ab, wobei die hormonelle ACTH-Wirkung weitgehend fehlt. Diskutiert werden eine Erhöhung von BDNF und NGF sowie modulierende Effekte auf dopaminerge und serotonerge Systeme. In Tiermodellen wurden neuroprotektive und antioxidative Effekte, etwa bei zerebraler Ischämie, beschrieben. Die Applikation erfolgt in der russischen Praxis meist intranasal. Ein Großteil der Evidenz stammt aus russischsprachigen Untersuchungen mit begrenzter internationaler Replikation.',
    benefits: [
      'In Studien mit möglicher Verbesserung von Aufmerksamkeit und Gedächtnis assoziiert.',
      'Diskutierte neuroprotektive Effekte in Modellen von Schlaganfall und Ischämie.',
      'Hinweise auf antioxidative und entzündungsmodulierende Eigenschaften.',
      'In Berichten mit Stressresistenz und Stimmungsstabilisierung in Verbindung gebracht.',
      'Nicht-hormonelles ACTH-Derivat ohne relevante corticotrope Wirkung.',
      'In der russischen Anwendung als gut verträglich beschrieben.'
    ],
    risks: [
      'Außerhalb Russlands existieren kaum unabhängige, hochwertige Humanstudien.',
      'Langzeitsicherheit und optimale Anwendung sind international nicht etabliert.',
      'Effektstärken sind uneinheitlich und teils klein.',
      'Graumarkt-Produkte können in Reinheit und Deklaration erheblich abweichen.',
      'Außerhalb Russlands nicht als Arzneimittel zugelassen und nicht behördlich geprüft.',
      'Wechselwirkungen mit Psychopharmaka sind unzureichend erforscht.'
    ],
    status: 'In Russland als Arzneimittel registriert; in Deutschland und der EU nicht zugelassen und nur als Forschungschemikalie ohne humanmedizinische Freigabe erhältlich.',
    sources: [
      { title: 'Kaplan et al., Restor Neurol Neurosci 2002 – Semax und neurotrophe Faktoren', url: 'https://pubmed.ncbi.nlm.nih.gov/12454361/' },
      { title: 'Gusev et al., Cerebrovasc Dis 2011 – Semax bei ischämischem Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/21654167/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'selank',
    name: 'Selank',
    altNames: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro, Tuftsin-Analogon',
    class: 'Synthetisches Tuftsin-Analogon (Heptapeptid), Anxiolytikum',
    emoji: '🌿',
    short: 'In Russland entwickeltes Peptidanalogon des Immunopeptids Tuftsin, das als angstlösendes und stabilisierendes Mittel untersucht wird.',
    moa: 'Selank ist ein synthetisches Analogon des endogenen Tetrapeptids Tuftsin und wurde zur Stabilisierung gegen enzymatischen Abbau modifiziert. Diskutiert werden Einflüsse auf das GABAerge sowie serotonerge System und eine Modulation der Konzentration von Enkephalinen. In tierexperimentellen und frühen klinischen Untersuchungen wurden anxiolytische und immunmodulierende Effekte beschrieben. Die Anwendung erfolgt in Russland üblicherweise intranasal. Die Evidenz basiert überwiegend auf russischsprachigen Studien mit begrenzter externer Bestätigung.',
    benefits: [
      'In Studien mit angstlösenden Effekten ohne ausgeprägte Sedierung assoziiert.',
      'Diskutierte Wirkung auf Stimmung und Stressverarbeitung.',
      'Hinweise auf immunmodulierende Eigenschaften aus dem Tuftsin-Bezug.',
      'In Berichten ohne das Abhängigkeitspotenzial klassischer Benzodiazepine beschrieben.',
      'Mögliche Unterstützung kognitiver Stabilität unter Stress.',
      'In der russischen Anwendung als gut verträglich beschrieben.'
    ],
    risks: [
      'Belastbare, unabhängige Humanstudien außerhalb Russlands sind rar.',
      'Langzeitsicherheit und standardisierte Anwendung sind international nicht etabliert.',
      'Berichtete Effektgrößen sind uneinheitlich und schwer vergleichbar.',
      'Graumarkt-Ware unterliegt keiner Qualitätskontrolle bezüglich Reinheit und Dosis.',
      'In Deutschland und der EU nicht als Arzneimittel zugelassen und ungeprüft.',
      'Kombination mit anderen zentral wirksamen Substanzen ist kaum untersucht.'
    ],
    status: 'In Russland als Arzneimittel registriert; in Deutschland und der EU nicht zugelassen und lediglich als Forschungschemikalie ohne humanmedizinische Freigabe verfügbar.',
    sources: [
      { title: 'Zozulya et al., Bull Exp Biol Med 2008 – Selank bei generalisierter Angststörung', url: 'https://pubmed.ncbi.nlm.nih.gov/19240853/' },
      { title: 'Kolomin et al., J Psychopharmacol 2013 – Selank und Genexpression', url: 'https://pubmed.ncbi.nlm.nih.gov/22832761/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'melanotan-2',
    name: 'Melanotan 2',
    altNames: 'MT-II, MT-2, Melanotan II',
    class: 'Synthetisches Analogon des alpha-Melanozyten-stimulierenden Hormons (Melanocortin-Rezeptor-Agonist)',
    emoji: '🌞',
    short: 'Synthetischer Melanocortin-Rezeptor-Agonist, der Hautpigmentierung anregt und mit erheblichen Sicherheitsbedenken behaftet ist.',
    moa: 'Melanotan 2 ist ein cyclisches Analogon des alpha-MSH und aktiviert nicht selektiv mehrere Melanocortin-Rezeptoren, insbesondere MC1R und MC4R. Über MC1R stimuliert es die Melanogenese und damit die Bräunung der Haut, häufig ohne UV-Exposition. Die Aktivierung von MC4R beeinflusst zentral Appetit und sexuelle Erregung, was erektionsfördernde Effekte erklären kann. Die breite Rezeptorwirkung ist zugleich Ursache zahlreicher unerwünschter Effekte. Kontrollierte Langzeitstudien zur Sicherheit beim Menschen fehlen.',
    benefits: [
      'Kann eine Verstärkung der Hautpigmentierung auslösen.',
      'In Untersuchungen mit reduzierter benötigter UV-Exposition für Bräunung assoziiert.',
      'Über MC4R mit appetithemmenden Effekten in Verbindung gebracht.',
      'In Berichten mit erektionsfördernder Wirkung assoziiert.',
      'Wirkung tritt in Beobachtungen bereits bei geringen Mengen ein.'
    ],
    risks: [
      'Veränderungen und Dunkelfärbung von Muttermalen sowie Bedenken hinsichtlich Melanomrisiko und erschwerter Hautkrebs-Früherkennung.',
      'Häufig Übelkeit, Erbrechen, Flush und Blutdruckveränderungen, besonders zu Beginn.',
      'Risiko eines Priapismus, also einer schmerzhaften Dauererektion, die einen Notfall darstellen kann.',
      'Ungeprüfte Graumarkt-Reinheit mit Gefahr von Verunreinigungen und Fehldosierung.',
      'Keine kontrollierten Langzeit-Sicherheitsdaten beim Menschen vorhanden.',
      'In Deutschland und der EU nicht zugelassen; Behörden warnen ausdrücklich vor der Anwendung.'
    ],
    status: 'In Deutschland und der EU nicht als Arzneimittel oder Kosmetikum zugelassen; Behörden warnen ausdrücklich vor der Anwendung, ein Verkauf zum menschlichen Gebrauch ist unzulässig.',
    sources: [
      { title: 'Langan et al., J Am Acad Dermatol 2010 – Melanotan-assoziierte Nävusveränderungen', url: 'https://pubmed.ncbi.nlm.nih.gov/20605654/' },
      { title: 'Hjuler & Lorentzen, JAMA Dermatol 2014 – Melanom nach Melanotan-Gebrauch', url: 'https://pubmed.ncbi.nlm.nih.gov/24990396/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'glp-3',
    name: 'GLP-3',
    altNames: 'Retatrutid-artig, LY3437943-Konzept, GLP-1/GIP/Glucagon-Triagonist',
    class: 'Experimenteller Dreifach-Rezeptoragonist (GLP-1, GIP, Glucagon)',
    emoji: '⚗️',
    short: 'Experimenteller Triagonist an GLP-1-, GIP- und Glucagon-Rezeptoren, der als Kandidat zur Gewichts- und Stoffwechselregulation untersucht wird.',
    moa: 'Die unter dem Namen GLP-3 vermarktete Substanz entspricht einem Retatrutid-artigen Peptid, das gleichzeitig an GLP-1-, GIP- und Glucagon-Rezeptoren wirkt. Über den GLP-1-Rezeptor werden Insulinsekretion, Sättigung und verzögerte Magenentleerung angesprochen, während die GIP-Komponente die Insulinantwort ergänzt. Die Glucagon-Rezeptor-Aktivierung soll den Energieverbrauch und die Lipolyse steigern. In Phase-2-Studien mit Retatrutid wurden ausgeprägte Gewichtsreduktionen berichtet. Die als GLP-3 gehandelte Graumarktware ist jedoch weder klinisch geprüft noch standardisiert.',
    benefits: [
      'In klinischen Studien mit Retatrutid wurde eine deutliche Gewichtsreduktion berichtet.',
      'Diskutierte Verbesserung von Blutzucker- und Insulinparametern.',
      'Dreifachmechanismus soll Sättigung und Energieverbrauch gleichzeitig ansprechen.',
      'In Untersuchungen mit günstigen Effekten auf Lipidprofil und Blutdruck assoziiert.',
      'Verzögerte Magenentleerung kann die Nahrungsaufnahme reduzieren.',
      'Kombinierter Ansatz gilt als vielversprechendes Forschungskonzept.'
    ],
    risks: [
      'Als GLP-3 gehandelte Ware ist experimentell und nicht klinisch als solche geprüft; verlässliche Humandaten zum konkreten Produkt fehlen.',
      'Aus der Wirkstoffklasse bekannt sind Übelkeit, Erbrechen, Durchfall und Appetitverlust.',
      'Diskutierte Risiken umfassen Herzfrequenzanstieg sowie Bedenken bei Schilddrüsen- und Pankreaserkrankungen.',
      'Graumarkt-Reinheit, Dosierung und Sterilität sind ungeprüft und können stark schwanken.',
      'Nicht als Arzneimittel zugelassen; jede Anwendung erfolgt ohne behördliche Kontrolle.',
      'Langzeitsicherheit des experimentellen Triagonisten beim Menschen ist unklar.'
    ],
    status: 'In Deutschland und der EU nicht als Arzneimittel zugelassen; die verwandte Substanz Retatrutid ist in klinischer Prüfung, während als GLP-3 vertriebene Ware nur als Forschungschemikalie angeboten wird.',
    sources: [
      { title: 'Jastreboff et al., N Engl J Med 2023 – Retatrutid Phase-2 bei Adipositas', url: 'https://pubmed.ncbi.nlm.nih.gov/37366315/' },
      { title: 'Rosenstock et al., Lancet 2023 – Retatrutid bei Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/37356449/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  }

];

const EXPERIMENTAL_CATEGORIES = [
  { id: 'all',          label: 'Alle' },
  { id: 'Stoffwechsel', label: 'Stoffwechsel' },
  { id: 'Exercise',     label: 'Exercise-Mimetika' },
  { id: 'Immun',        label: 'Immun/Heilung' },
  { id: 'Longevity',    label: 'Longevity' },
  { id: 'Sonstige',     label: 'Neuro & Sonstige' }
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
  'methylene-blue': 'Longevity',
  'ghrp-2': 'Exercise', 'ghrp-6': 'Exercise', 'hexarelin': 'Exercise', 'mod-grf-1-29': 'Exercise',
  'aod-9604': 'Stoffwechsel', 'glp-3': 'Stoffwechsel',
  'kpv': 'Immun', 'll-37': 'Immun',
  'foxo4-dri': 'Longevity', 'ss-31': 'Longevity',
  'dsip': 'Sonstige', 'semax': 'Sonstige', 'selank': 'Sonstige', 'melanotan-2': 'Sonstige'
};
EXPERIMENTAL.forEach(e => { e.filterCat = _EXP_CAT_MAP[e.id] || 'Sonstige'; });
