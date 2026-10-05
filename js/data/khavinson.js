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
    short: 'Gehirn-Tripeptid der Khavinson-Schule (Glu-Asp-Arg), isoliert aus dem Hirnrinden-Präparat Cortexin. Schützt in Zell- und Tiermodellen Nervenzellen vor Sauerstoffmangel, oxidativem Stress und Alzheimer-typischen Schäden; mehrere russische Beobachtungen an Menschen ohne Randomisierung.',
    moa: 'Pinealon (EDR) wurde laut Entwicklergruppe aus Cortexin isoliert. Markiertes Pinealon gelangt in HeLa-Zellen bis in Zellkern und Nukleolus und bindet im Reagenzglas bevorzugt an bestimmte DNA-Sequenzen. In Nervenzellen begrenzt es die Anreicherung reaktiver Sauerstoffverbindungen und den nekrotischen Zelltod und verändert den Zellzyklus; im Hypoxiemodell aktiviert es körpereigene Antioxidans-Enzyme und dämpft NMDA-vermittelte Übererregung. In Hirnrindenkulturen steigert es Serotonin, im Alzheimer-Modell erhält es Dendritendornen.',
    benefits: [
      'Tierstudien: Schutz bei Sauerstoffmangel und Unterkühlung bei 18 Monate alten Ratten; weniger Neuroentzündung bei alten Ratten unter akuter Hypoxie (Mendzheritsky et al. 2014, 2015).',
      'Alzheimer-Modelle: reife Dendritendornen in geschädigten Maus-Hippocampusneuronen um 71 Prozent vermehrt (Kraskovskaya et al. 2017); Dornenverlust in 5xFAD-Mäusen verhindert (Khavinson et al. 2021).',
      'Menschliche induzierte Neuronen älterer Spenderinnen: Dendriten insgesamt 46 Prozent länger (Kraskovskaya et al. 2024).',
      'Russische Humanbeobachtungen: 72 Patienten nach Schädel-Hirn-Trauma mit besserem Gedächtnis und weniger Kopfschmerz (referiert 2020); 110 Personen im Methodenvergleich, Kombination mit Vesugen am stärksten auf das biologische Alter (Myakotnykh et al. 2016); Lkw-Fahrer mit besserer Stressresistenz (2012). Keine davon erkennbar randomisiert.',
      'Erster unabhängiger Mausversuch (Preprint 2026, je 5 Tiere): nicht signifikanter Trend zu besserem Arbeitsgedächtnis, keine Nebenwirkungen.',
      'Beworben für Brain-Fog, Konzentration und Schlaf – für Schlaf wurde keine Studie gefunden.'
    ],
    risks: [
      'Keine randomisierte, verblindete Studie, kein Eintrag in öffentlichen Studienregistern; Humanarbeiten russisch, oft in Kombination mit Vesugen und mit weichen Endpunkten.',
      'Eine Beobachtung an 32 multimorbiden Patienten meldete unter Pinealon und Vesugen prooxidative Aktivität und weniger Blutstammzellen im Blut.',
      'Aufnahme ins Gehirn nach oraler Gabe am Menschen nie gemessen.',
      'Wechselwirkungen mit Psychopharmaka, Antiepileptika oder Gerinnungshemmern nicht untersucht; Gedächtnisprobleme und Hirnverletzungsfolgen gehören in ärztliche Abklärung.',
      'Research-Ware mit ungeprüftem Gehalt und Reinheit.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Kapselpräparat oder Forschungspeptid. WADA-Gruppe S0.',
    sources: [
      { title: 'Khavinson et al., Molecules 2020 – EDR-Peptid (Pinealon): Herkunft aus Cortexin, Mechanismen, Humandaten (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/33396470/' },
      { title: 'Myakotnykh et al., Adv Gerontol 2016 – Vergleich von Geroprotektionsmethoden an 110 Personen', url: 'https://pubmed.ncbi.nlm.nih.gov/28539017/' },
      { title: 'Bashkireva und Artamonova, Adv Gerontol 2012 – Peptidkorrektur bei Lkw-Fahrern', url: 'https://pubmed.ncbi.nlm.nih.gov/23734521/' },
      { title: 'Khavinson et al., Rejuvenation Res 2011 – Pinealon senkt freie Radikale und Zelltod', url: 'https://pubmed.ncbi.nlm.nih.gov/21978084/' },
      { title: 'Marín-Jerez et al., bioRxiv 2026 – Kurzzeit-Screening von Longevity-Kandidaten an Mäusen (Preprint)', url: 'https://doi.org/10.64898/2026.02.25.707674' },
      { title: 'Anisimov und Khavinson, Biogerontology 2010 – Peptide bioregulation of aging (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/19830585/' }
    ],
    community: []
  },
  {
    id: 'kh-cortexin',
    name: 'Cortexin',
    altNames: 'Cortex-Polypeptid-Komplex',
    class: 'Cortex-Extrakt (höhermolekularer Peptidkomplex)',
    emoji: '🧬',
    short: 'In Russland zugelassenes Peptidgemisch aus tierischer Hirnrinde für Schlaganfall, Hirnischämie und kognitive Störungen; Mutterpräparat von Cortagen und Pinealon. Mehrere russische randomisierte Studien berichten Nutzen, eine unabhängige Übersicht bewertet die Aussagesicherheit aber als niedrig bis sehr niedrig.',
    moa: 'Komplex aus Polypeptiden der Hirnrinde junger Tiere (die Quellen nennen Kalb, Rind oder Schwein), gespritzt in Muskel oder Vene. Eine einzelne Zielstruktur ist nicht beschrieben; russische Autoren bezeichnen den Mechanismus selbst als lange unklar. Belegt sind im Labor die Hemmung des Zelltod-Enzyms Caspase-8 und Schutz von Nervenzellen vor Glutamat (2017), Bindung an Glutamat- und GABA-Rezeptoren im Reagenzglas sowie Hirngängigkeit bei Mäusen mit 6 bis 8 Prozent des Blutspiegels (2021), dazu antioxidative Effekte in Rattenmodellen. Aus Cortexin abgeleitet wurden die Kurzpeptide Cortagen (2004) sowie EDR (Pinealon) und DS (2019).',
    benefits: [
      'Akuter ischämischer Schlaganfall: doppelblinde, placebokontrollierte Multicenterstudie mit 62 Patienten (32 Cortexin, 30 Placebo), Beginn innerhalb von 6 Stunden; Autoren berichten Wirksamkeit bis Tag 28 (Skoromets et al. 2008, ohne Effektgrößen in der Zusammenfassung).',
      'Chronische Hirnischämie: randomisierte Studie mit 189 Patienten in 3 Armen; dosisabhängige Besserung neurologischer Beschwerden, Erschöpfung und Schlaf gegenüber Basistherapie (Fedin et al. 2018).',
      'Kognitive Störungen nach Schlaganfall: nach 12 Monaten 27,5 Prozent mehr Patienten mit MoCA über 26 zugunsten Cortexin (80 Patienten; einzige Cortexin-Studie in der systematischen Übersicht von Alsulaimani & Quinn 2021).',
      'Neurologische Folgen eines Typ-2-Diabetes: randomisiert, 110 Patienten; bessere Werte bei Kognition, Stimmung und Nervenbeschwerden, HbA1c 7,3 gegenüber 7,8 Prozent (DIACORT 2026, Kontrolle ohne Placebo).',
      'Nebenwirkungsdaten aus Studien bis 90 Tage: bei 490 Schlaganfallpatienten kein Unterschied zwischen Gabe in Vene und Muskel (Fedin et al. 2025).'
    ],
    risks: [
      'Klinische Literatur ausschließlich russisch; ClinicalTrials.gov ohne Cortexin-Studie; eine unabhängige Übersicht fand nur eine verwertbare Studie mit hohem Verzerrungsrisiko.',
      'Nur eine Humanstudie doppelblind gegen Placebo; die übrigen ohne Placebo oder als Vergleich zweier Cortexin-Formen.',
      'Ein unabhängiger, verblindeter Rattenversuch fand keinen Nutzen gegenüber Kochsalz (Zhang, Chopp et al. 2019).',
      'Tierisches Peptidgemisch mit nicht offengelegter Zusammensetzung; keine westliche Toxikologie, keine zugänglichen Pharmakovigilanzdaten.',
      'Keine Daten zu Gesunden, Nootropika-Einsatz oder Anti-Aging; in DE nicht zugelassen, Graumarkt-Ware ungeprüft.'
    ],
    status: 'In Russland als Arzneimittel zugelassen. In DE/EU nicht zugelassen und damit nicht verkehrsfähig. WADA 2026: nicht namentlich gelistet.',
    sources: [
      { title: 'Skoromets et al. 2008, Zh Nevrol Psikhiatr – Cortexin bei akutem Schlaganfall, doppelblind gegen Placebo (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/19431244/' },
      { title: 'Fedin et al. 2018, Zh Nevrol Psikhiatr – dosisabhängige Effekte bei chronischer Hirnischämie (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/30335070/' },
      { title: 'Fedin et al. 2025, Zh Nevrol Psikhiatr – Gabe in Vene und Muskel beim Schlaganfall, 490 Patienten (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/41524350/' },
      { title: 'Alsulaimani & Quinn 2021, Cereb Circ Cogn Behav – systematische Übersicht zu tierischen Nootropika', url: 'https://pubmed.ncbi.nlm.nih.gov/36324709/' },
      { title: 'Zhang, Chopp et al. 2019, J Neurol Sci – verblindeter Vergleich von Hirnpeptid-Präparaten bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/30665068/' },
      { title: 'Kurkin et al. 2021, PLoS One – Cortexin bei Hirnischämie der Ratte, Hirngängigkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/34260655/' }
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
    short: 'Das kleinste Khavinson-Peptid (Lys-Glu), Bestandteil des Thymusextrakts Thymalin. Fördert in Zellkultur die Reifung von Immunzellen, verlängerte bei Mäusen das Leben und senkte in Nagermodellen chemisch ausgelöste Tumoren; kleine russische Studien bei Typ-1-Diabetes ohne Fallzahl im Abstract.',
    moa: 'Vilon (KE) wurde laut Entwicklergruppe per Massenspektrometrie im Thymusextrakt Thymalin nachgewiesen und gilt als Thymomimetikum. In Organkulturen der Zirbeldrüse lenkte es Vorläuferzellen zu T-Helfern, zytotoxischen T-Zellen und B-Zellen; in menschlichen Monozyten dämpfte es nach LPS-Reiz TNF und IL-6. In Lymphozyten alter Menschen lockerte es im Reagenzglas verdichtetes Chromatin, in menschlichen Stammzellen steigerte es SIRT1 und senkte PARP1 und PARP2. Neuronale Differenzierung ist in Zellkultur für mehrere Kurzpeptide einschließlich KE beschrieben; eine Wirkung auf die Netzhaut ist für Vilon nicht belegt.',
    benefits: [
      'Weibliche Mäuse ab dem 6. Lebensmonat: aktiver, ausdauernder, längere Lebensdauer, seltener spontane Tumoren, keine ungünstigen Effekte der Langzeitgabe (Khavinson et al. 2000).',
      'Chemisch ausgelöste Tumoren: Blasentumoren bei 56 statt 75,5 Prozent der Ratten (Pliss et al. 2001), Darmtumoren bei 14,3 statt 60 Prozent der Mäuse (Pliss et al. 2005).',
      'Typ-1-Diabetes: verringerte chronische Gerinnungsaktivierung (Kuznik et al. 2006, als RCT indexiert), mehr Antithrombin III und Protein C, meist geringerer Insulinbedarf (Kuznik et al. 2007); Fallzahlen nicht im Abstract.',
      'Zellkultur: Reifung von Immunvorläufern zu T-Helfer-, zytotoxischen T- und B-Zellen (Linkova et al. 2011); weniger TNF und IL-6 in menschlichen Monozyten (Avolio et al. 2022).',
      'Menschliche Zellen: Chromatin-Reaktivierung in Lymphozyten alter Menschen (Lezhava et al. 2004); SIRT1 in Stammzellen um das 6- bzw. 8,2-Fache gesteigert (Khavinson et al. 2023).',
      'Kontrollierte Zusatzbehandlung älterer Darmkrebspatienten in Belarus mit vorläufig günstigen Ergebnissen (Iaskevich et al. 2005).'
    ],
    risks: [
      'Klinische Arbeiten nur russisch, im Abstract ohne Fallzahlen und mit Laborendpunkten; keine unabhängige Replikation, kein Registereintrag.',
      'Bei HER2/neu-Mäusen hatten Vilon-Tiere häufiger Mehrfachtumoren als Kontrollen (95 gegenüber 75 Prozent) und 2,6-mal häufiger Lungenmetastasen als Epitalon-Tiere – nach HER2-positivem Brustkrebs Zurückhaltung.',
      'Verändert Gerinnung und Fibrinolyse; Wechselwirkungen mit Gerinnungshemmern nicht untersucht.',
      'Senkte bei Diabetes den Insulinbedarf – Unterzuckerungsrisiko bei Insulintherapie nicht untersucht.',
      'Immunaktivierung bei Autoimmunerkrankungen nicht untersucht; Research-Ware mit ungeprüftem Gehalt.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Kapselpräparat oder Forschungspeptid. WADA-Gruppe S0.',
    sources: [
      { title: 'Khavinson et al., Bull Exp Biol Med 2000 – Vilon, biologisches Alter und Lebensdauer bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/11140587/' },
      { title: 'Kuznik et al., Adv Gerontol 2006 – Vilon und Gerinnung bei Typ-1-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/17152731/' },
      { title: 'Alimova et al., Vopr Onkol 2002 – Epitalon und Vilon bei HER2/neu-Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/12101568/' },
      { title: 'Lezhava et al., Biogerontology 2004 – Vilon reaktiviert Chromatin in Lymphozyten alter Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/15105581/' },
      { title: 'Khavinson et al., Biol Bull Rev 2021 – Thymalin und seine Kurzpeptide KE, EW, EDP (Übersicht)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8365293/' },
      { title: 'Anisimov und Khavinson, Biogerontology 2010 – Peptide bioregulation of aging (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/19830585/' }
    ],
    community: []
  },

  // ============ HERZ-KREISLAUF ============
  {
    id: 'kh-vesugen',
    name: 'Vesugen',
    altNames: 'KED · Lys-Glu-Asp',
    class: 'Tripeptid, Gefäß-/Endothel-Bioregulator',
    emoji: '❤️',
    short: 'Gefäß-Tripeptid der Khavinson-Schule (Lys-Glu-Asp). Stärkt in Zellkultur alternde Endothelzellen; mehrere kleine russische Beobachtungen an Menschen ohne Kontrollgruppe berichten von besserem Blutfluss und langsamerem biologischem Altern.',
    moa: 'Nach der Hypothese der Khavinson-Schule gelangt das Tripeptid KED in den Zellkern und beeinflusst dort die Ablesung von Genen, die das Endothel funktionsfähig halten. In Zellkultur normalisierte KED die bei Atherosklerose und Restenose erhöhte Endothelin-1-Bildung, steigerte Connexin und SIRT1 und hob in alternden Endothelzellen Ki67, Connexin 43 und VEGF bei weniger p53. Per Computermodell bindet es an den Promotor des Gens MKI67. Die Wirkung ist nicht streng gewebespezifisch: Auch in Nervenzellen, Stammzellen und Prostata-Fibroblasten zeigte KED Effekte.',
    benefits: [
      'Zellkultur: normalisiert Endothelin-1 in atherosklerotischem und restenotischem Endothel, steigert Connexin und SIRT1 (Kozlov et al. 2016).',
      'Alternde Endothelzellen: mehr Ki67, Connexin 43 und VEGF, weniger p53 (Übersicht Khavinson et al., Cells 2022).',
      'Menschliche orale Stammzellen: Alterungsmarker p16 und p21 um das 1,82- bis 3,23-Fache gesenkt (Sinjari et al. 2020).',
      'Induzierte Nervenzellen älterer Spenderinnen: Dendriten insgesamt 42 Prozent länger, ohne Einfluss auf p16 oder Mitochondrien (Kraskovskaya et al. 2024).',
      'Beobachtung an 41 Patienten mit gefäßbedingter Erektionsstörung: besserer Doppler-Blutfluss nach der Behandlung, ohne Kontrollgruppe (Kitachev et al. 2014).',
      'Beobachtung an 32 multimorbiden Patienten zwischen 41 und 83 Jahren: langsameres biologisches Altern, Vesugen stärker als Pinealon, ohne erkennbare Kontrollgruppe (Meshchaninov et al. 2015).',
      'In Kombination mit Pinealon: stärkster Effekt auf das biologische Alter in einem Methodenvergleich mit 110 Personen (Myakotnykh et al. 2016) und beste Stressresistenz bei Lkw-Fahrern (Bashkireva und Artamonova 2012); Anteil von Vesugen nicht trennbar.'
    ],
    risks: [
      'Keine randomisierte oder placebokontrollierte Studie, kein Eintrag in öffentlichen Studienregistern; die Humandaten sind kleine russische Vorher-nachher-Beobachtungen.',
      'Endpunkte sind Surrogate (biologisches Alter, Ultraschall); ob Infarkte, Schlaganfälle oder Gefäßverschlüsse verhindert werden, ist nie untersucht.',
      'In einer Humanbeobachtung prooxidative Aktivität und weniger CD34-positive Blutstammzellen im Blut; nie nachverfolgt.',
      'Wechselwirkungen mit Gerinnungshemmern, Blutdrucksenkern, Statinen oder Potenzmitteln nicht untersucht; Gefäßerkrankungen gehören in ärztliche Behandlung.',
      'Keine Daten zu Aufnahme und Verteilung nach Einnahme als Kapsel; Research-Ware mit ungeprüftem Gehalt und Reinheit.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Kapselpräparat oder Forschungspeptid. WADA-Gruppe S0.',
    sources: [
      { title: 'Meshchaninov et al., Adv Gerontol 2015 – Vesugen und Pinealon bei 32 multimorbiden Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/26390612/' },
      { title: 'Kitachev et al., Adv Gerontol 2014 – Vesugen bei gefäßbedingter Erektionsstörung (41 Patienten, vorher/nachher)', url: 'https://pubmed.ncbi.nlm.nih.gov/25051774/' },
      { title: 'Kozlov et al., Adv Gerontol 2016 – KED bei Atherosklerose und Restenose in vitro', url: 'https://pubmed.ncbi.nlm.nih.gov/28539025/' },
      { title: 'Khavinson et al., Cells 2022 – SASP von Herz-Kreislauf-Zellen, KED und AEDR (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/36611900/' },
      { title: 'Kraskovskaya et al., Int J Mol Sci 2024 – Kurzpeptide in induzierten Neuronen älterer Spenderinnen', url: 'https://pubmed.ncbi.nlm.nih.gov/39518916/' },
      { title: 'Sinjari et al., Stem Cell Rev Rep 2020 – AEDG und KED gegen Alterung oraler Stammzellen', url: 'https://pubmed.ncbi.nlm.nih.gov/31677028/' },
      { title: 'Khavinson, Kuznik, Ryzhak, Adv Gerontol 2013 – Peptide Bioregulators, Message 1: experimentelle Studien', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: []
  },
  {
    id: 'kh-chelohart',
    name: 'Chelohart',
    altNames: 'Cytomax A-14 · Herz-Polypeptidkomplex aus Kälberherzen (nicht zu verwechseln mit dem Tetrapeptid Cardiogen)',
    class: 'Herzmuskel-Bioregulator (Peptidkomplex)',
    emoji: '🫀',
    short: 'Polypeptidkomplex aus Kälberherzen (Cytomax-Reihe). Fördert in Gewebekultur das Wachstum von Herzgewebe junger und alter Ratten; ältere Tierversuche mit einem Herz-Peptidextrakt derselben Gruppe zeigen Schutz im Infarktmodell, aber auch Nachteile. Studien am Menschen gibt es nicht.',
    moa: 'Nach der Bioregulations-Hypothese enthält Herzgewebe eigene Signalpeptide, die die Ablesung herztypischer Gene steuern und im Alter nachlassen; ein Extrakt aus jungem Gewebe soll sie ersetzen. In Organkultur steigerte Chelohart das Wachstum von Herzgewebe junger und alter Ratten, mit mehr PCNA (Zellteilung) und weniger p53. Das Vorläuferpräparat Cordialin aus Rinderherz verbesserte im Tierversuch die Energiebilanz von Herzmuskelzellen unter Sauerstoffmangel und aktivierte ATP-abhängige Kaliumkanäle. Laut Entwicklergruppe enthält der Herz-Polypeptidkomplex das Tetrapeptid AEDR (Cardiogen).',
    benefits: [
      'Gewebekultur: Wachstum von Herzgewebe junger und alter Ratten gefördert, mehr PCNA, weniger p53 (Ryzhak et al. 2015, einzige Arbeit unter dem Namen Chelohart).',
      'Vorläuferpräparat Cardiolin im Infarktmodell an 25 Ratten: nach 6 Stunden geringere Zellschäden in der Randzone, bessere Energieeffizienz der Mitochondrien (Khlystov et al. 1989).',
      'Vorläuferpräparat Cordialin: mehr ATP und Glykogen im Herzmuskel unter Hypoxie und Ischämie, Schutz vor toxischer Herzmuskelschädigung (Pavlenko et al. 1992; Bakhrizina et al. 1992).',
      'Beworben bei koronarer Herzkrankheit, Bluthochdruck und nach Infarkt – diese Indikationen sind am Menschen nicht untersucht (Anbieterangabe).'
    ],
    risks: [
      'Keine veröffentlichte Studie am Menschen und kein Registereintrag; die Anbieterangabe zu klinischen Studien ist ohne Publikation nicht prüfbar.',
      'Tierdaten zum Vorläuferpräparat zeigen auch Nachteile: verzögerte Narbenbildung nach Infarkt, Lipidperoxidation bei Wiederdurchblutung, Hemmung des Herzmuskels bei hohen Konzentrationen.',
      'Ob Chelohart mit dem untersuchten Vorläuferpräparat identisch ist, ist nicht dokumentiert.',
      'Wechselwirkungen mit Herzmedikamenten unbekannt; Herzerkrankungen und die Zeit nach einem Infarkt gehören in kardiologische Behandlung.',
      'Extrakt aus Rindergewebe; Verträglichkeit und Reinheit nicht systematisch untersucht.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Vertrieb als Kapsel- oder Lingualpräparat über Online-Händler. WADA-Gruppe S0.',
    sources: [
      { title: 'Ryzhak et al., Adv Gerontol 2015 – Kälber-Polypeptide, darunter Chelohart, in Gewebekulturen junger und alter Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/26390619/' },
      { title: 'Khlystov et al., Arkh Patol 1989 – Cardiolin im experimentellen Infarkt', url: 'https://pubmed.ncbi.nlm.nih.gov/2596979/' },
      { title: 'Pavlenko et al., Biull Eksp Biol Med 1990 – Herz-Peptidpräparat in der akuten Ischämie (verzögerte Narbenbildung)', url: 'https://pubmed.ncbi.nlm.nih.gov/2291951/' },
      { title: 'Pavlenko et al., Biull Eksp Biol Med 1992 – Dosis und Wirkung von Herz-Peptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/1467483/' },
      { title: 'Khavinson et al., Cells 2022 – AEDR im Polypeptidkomplex des Herzens (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/36611900/' },
      { title: 'Khavinson, Kuznik, Ryzhak, Adv Gerontol 2013 – Peptide Bioregulators, Message 1: experimentelle Studien', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: []
  },

  // ============ ORGANE & STOFFWECHSEL ============
  {
    id: 'kh-livagen',
    name: 'Livagen',
    altNames: 'KEDA · Lys-Glu-Asp-Ala',
    class: 'Tetrapeptid, Leber-Bioregulator',
    emoji: '🟫',
    short: 'Leber-Tetrapeptid der Khavinson-Schule (Lys-Glu-Asp-Ala). Steigert in alten Leberzellen die Eiweißbildung, schützt im Vergiftungsmodell bei Ratten die Leber und lockert in Blutzellen Hochbetagter verdichtetes Chromatin. Am Menschen nur eine Fallserie mit 23 Hepatitis-Patienten aus dem Patent der Entwickler.',
    moa: 'Livagen wurde laut Entwicklern auf Basis der Aminosäureanalyse von Leber-Polypeptidpräparaten synthetisiert. In Hepatozytenkulturen von Ratten zwischen 1 und 24 Monaten steigerte es die Proteinsynthese, am stärksten bei alten Tieren. In Blutzellen von Menschen zwischen 75 und 88 Jahren aktivierte es im Reagenzglas ribosomale Gene und lockerte verdichtetes Chromatin, auch an Chromosom 1 und 9. Eine Übersicht der Gruppe beschreibt normalisierten Immun- und Antioxidansstatus in Leber-Tiermodellen. Dünndarm-Peptidasen spalten Livagen nicht; bei Ratten zeigte es nach Gabe über den Mund Wirkungen auf Verdauungsenzyme.',
    benefits: [
      'Tetrachlorkohlenstoff-Vergiftung bei Ratten: am Tag 5 verfettete Leberzellen 49,8 statt 84,3 Prozent, bis Tag 20 normalisierte Blutwerte (Patent EP1325026, Tierdaten der Entwickler).',
      'Hepatozyten junger und alter Ratten: mehr Proteinsynthese, stärkster Effekt bei alten Tieren (Brodskii et al. 2001).',
      'Leukozyten von Menschen zwischen 75 und 88 Jahren (Reagenzglas): Aktivierung ribosomaler Gene, Auflockerung verdichteten Chromatins (Khavinson, Lezhava, Malinin 2004; Tifliser Gruppe bis 2023).',
      'Stabil gegen Dünndarm-Peptidasen; nach oraler Gabe bei Ratten Enzymaktivität alter Tiere an junge angenähert (Timofeeva et al. 2005).',
      'Fallserie im Patent: 23 Patienten mit chronischer Hepatitis, ALT von 53,1 auf 40,8, IgM von 3,80 auf 1,50 g/l nach Injektionsbehandlung, ohne berichtete Kontrollgruppenwerte.',
      'Transplantierter Lebertumor bei 37 Ratten: Tumor am Tag 30 um das 2,5-Fache kleiner, mittleres Überleben 68 statt 55 Tage (Patent).'
    ],
    risks: [
      'Keine begutachtete klinische Studie; die einzige Humanbehandlung ist eine Fallserie im Patent ohne ausgewertete Kontrollgruppe, Randomisierung oder Verblindung.',
      'Behandelt wurde per Injektion; ob Kapseln beim Menschen wirken, ist nicht gemessen.',
      'Fettleber und alkoholbedingte Leberschäden sind nie gezielt untersucht; die Chromatin-Befunde betreffen Blutzellen, nicht Leberzellen.',
      'Hemmt im Reagenzglas enkephalinabbauende Enzyme und eine Darm-Dipeptidase; klinische Bedeutung unbekannt.',
      'Aktive Lebererkrankungen gehören in hepatologische Behandlung; Wechselwirkungen mit Medikamenten nicht untersucht.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Kapselpräparat oder Forschungspeptid. WADA-Gruppe S0.',
    sources: [
      { title: 'Khavinson, EP1325026 – Tetrapeptid Lys-Glu-Asp-Ala (Tierdaten, Toxikologie, Fallserie)', url: 'https://patents.google.com/patent/EP1325026B1/en' },
      { title: 'Kuznik et al., Adv Gerontol 2020 – Ventvil und KEDA in Leber-Tiermodellen (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/32362099/' },
      { title: 'Brodskii et al., Izv Akad Nauk Ser Biol 2001 – Proteinsynthese in Hepatozyten junger und alter Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/15926314/' },
      { title: 'Khavinson, Lezhava, Malinin, Bull Exp Biol Med 2004 – Kurzpeptide und Chromatin in Leukozyten Hochbetagter', url: 'https://pubmed.ncbi.nlm.nih.gov/15085253/' },
      { title: 'Timofeeva et al., Adv Gerontol 2005 – Livagen und Verdauungsenzyme bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/16075683/' },
      { title: 'Khavinson, Kuznik, Ryzhak, Adv Gerontol 2013 – Peptide Bioregulators, Message 1: experimentelle Studien', url: 'https://link.springer.com/article/10.1134/S2079057013030065' }
    ],
    community: []
  },
  {
    id: 'kh-pancragen',
    name: 'Pancragen',
    altNames: 'KEDW · Lys-Glu-Asp-Trp',
    class: 'Tetrapeptid, Pankreas-Bioregulator',
    emoji: '🍯',
    short: 'Tetrapeptid aus der Khavinson-Schule für die Bauchspeicheldrüse. In diabetischen Ratten, alten Rhesusaffen und zwei kleinen Studien an älteren Menschen sanken die Glukosewerte; die Humanstudien sind klein, nicht erkennbar verblindet und stammen aus demselben Forscherkreis.',
    moa: 'Pancragen (Lys-Glu-Asp-Trp, am Ende amidiert) wurde laut Khavinson 2005 aus einem gemeinsamen Vier-Aminosäuren-Fragment insulinfördernder Peptide abgeleitet und gegen Verdauungsenzyme geschützt. Nach der Hypothese der Khavinson-Schule gelangt es in den Zellkern und verändert die Ablesung von Genen; eine Modellrechnung (2014) beschreibt die Bindung in beiden DNA-Furchen mit der möglichen Bindestelle GGCAG. In Kulturen menschlicher Pankreaszellen steigerte es Differenzierungsfaktoren von Insel- und Azinuszellen, stärker in gealterten Kulturen (2012, 2013), und senkte dort p53. Am Menschen ist diese Wirkkette nicht gemessen.',
    benefits: [
      'Ältere Menschen mit Typ-2-Diabetes (33 Patienten, 30 gesunde Vergleichspersonen): unter Pancragen niedrigere Nüchternglukose, Glukose im Belastungstest, Insulin und Insulinresistenz; ohne Pancragen keine Änderung (Korkushko et al. 2011; Design in der Zusammenfassung nicht beschrieben).',
      'Ältere mit gestörter Glukosetoleranz: nach 4 Wochen bei 50 Prozent der 12 Behandelten signifikant niedrigere Glukose im Belastungstest (Korkushko et al. 2013; ohne Kontrollgruppe).',
      'Alte Rhesusaffen: nach 10 Tagen schnellerer Glukoseabbau und normalisierte Insulin- und C-Peptid-Antwort, teilweise noch 3 Wochen nach Absetzen (Goncharova et al. 2014, 2015; Tierversuch).',
      'Diabetische Ratten: teilweise wiederhergestellte Insulinbildung (2005) und deutliche Blutzuckersenkung auch bei Gabe über den Mund (2007; Tierversuch).',
      'In gealterten menschlichen Pankreaszellkulturen mehr Differenzierungs- und Proliferationsmarker, weniger p53 (2012, 2013; Zellkultur).'
    ],
    risks: [
      'Nur zwei kleine Humanstudien, beide mit Khavinson als Ko-Autor, ohne erkennbare Randomisierung oder Verblindung; gemessen wurden nur Laborwerte.',
      'Schmale Datenbasis: 10 PubMed-Einträge, 9 davon mit Khavinson als Autor; ClinicalTrials.gov ohne Studie.',
      'Kein Ersatz für eine Diabetes-Therapie; im Affenversuch senkte Glimepirid den Zucker stärker (2015).',
      'Keine systematischen Sicherheitsdaten am Menschen; eine zusätzliche Blutzuckersenkung zusammen mit Antidiabetika ist denkbar, aber nicht untersucht.',
      'Graumarkt-Ware: Reinheit und Gehalt ungeprüft; im Sport als nicht zugelassene Substanz unter WADA S0 jederzeit verboten.'
    ],
    status: 'Forschungspeptid. In DE/EU weder als Arzneimittel zugelassen noch als neuartiges Lebensmittel genehmigt; eine Arzneimittelzulassung in Russland war nicht nachweisbar. WADA 2026: als nicht zugelassene Substanz unter S0 jederzeit verboten.',
    sources: [
      { title: 'Korkushko, Khavinson et al. 2011, Bull Exp Biol Med – Pancragen bei älteren Menschen mit Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/22448364/' },
      { title: 'Korkushko et al. 2013, Adv Gerontol – Pankragen forte bei Prädiabetes im Alter (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/28976155/' },
      { title: 'Goncharova et al. 2015, Adv Gerontol – Pancragen und Glimepirid bei alten Rhesusaffen (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/28509500/' },
      { title: 'Khavinson 2005, Bull Exp Biol Med – Tetrapeptid und Insulinbildung bei Alloxan-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/16671579/' },
      { title: 'Khavinson et al. 2013, Bull Exp Biol Med – Pancragen und Differenzierung alternder Pankreaszellen', url: 'https://pubmed.ncbi.nlm.nih.gov/23486591/' }
    ],
    community: [
    ]
  },
  {
    id: 'kh-testagen',
    name: 'Testagen',
    altNames: 'KEDG · Lys-Glu-Asp-Gly (nicht zu verwechseln mit Prostamax, Lys-Glu-Asp-Pro, oder dem Testosteron-Präparat Testagen TDS)',
    class: 'Tetrapeptid, als Hoden-/Prostata-Bioregulator vermarktet; laut Fachliteratur aus Hypophysenvorderlappen-Peptiden abgeleitet',
    emoji: '👨',
    short: 'Tetrapeptid KEDG, vermarktet für Hoden, Prostata und Testosteron. Studien dazu gibt es nicht; belegt ist KEDG als Hypophysen-Peptid, das bei Vögeln ohne Hypophyse Schilddrüsenhormone und Thymus normalisierte. Keine Humandaten.',
    moa: 'KEDG wurde laut Kuznik und Kollegen nach der Aminosäurezusammensetzung von Peptidkomplexen des Hypophysenvorderlappens synthetisiert. Markiertes Testagen gelangt in HeLa-Zellen bis in Zellkern und Nukleolus und bindet im Reagenzglas bevorzugt CAG-haltige DNA-Abschnitte. Bei hypophysektomierten Vögeln stellte es Thyreotropin, T3, T4 und die Schilddrüsenstruktur wieder her und förderte die Erholung des Thymus. Eine Übersicht der Khavinson-Gruppe führt KEDG als Stimulator der Immunzell-Differenzierung. Eine Wirkung auf Hoden- oder Prostatagewebe ist nicht untersucht.',
    benefits: [
      'Hypophysektomierte Küken: 40 Tage KEDG steigerten Thyreotropin und Schilddrüsenhormone und stellten die Schilddrüsenstruktur wieder her (Kuznik et al. 2008).',
      'Junge und alte Vögel: weniger Hormonstörungen, Immun- und Gerinnungswerte normalisiert; bei älteren Tieren schwächer (Kuznik et al. 2010, 2011).',
      'Thymus hypophysektomierter Vögel: Erholung der Struktur, stärker als unter AEDG (Pateyk et al. 2013).',
      'Zellbiologie: gelangt in den Zellkern und bindet bevorzugt bestimmte DNA-Sequenzen (Fedoreyeva et al. 2011).',
      'Beworben für Libido, Testosteron, Hoden und Prostata – dafür wurde keine einzige Studie gefunden.'
    ],
    risks: [
      'Keine Studie am Menschen und keine Studie an Hoden, Prostata, Spermien oder Testosteron; die beworbenen Indikationen sind aus dem Namen abgeleitet.',
      'Häufige Verwechslungen: Prostamax (Lys-Glu-Asp-Pro) ist ein anderes Peptid; russische BPH-Studien betreffen Prostatilen und Chitomur; unter dem Namen Testagen TDS läuft ein Testosteron-Präparat.',
      'Verändert bei Vögeln Schilddrüsenhormone – bei Schilddrüsenerkrankungen und Schilddrüsenmedikation Vorsicht, am Menschen nicht untersucht.',
      'Beschwerden beim Wasserlassen, Testosteronmangel, Fruchtbarkeits- oder Prostataprobleme brauchen urologische oder endokrinologische Abklärung.',
      'Keine veröffentlichte Toxikologie; Research-Ware mit ungeprüftem Gehalt und Reinheit.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Kapselpräparat oder Forschungspeptid. WADA-Gruppe S0.',
    sources: [
      { title: 'Fedoreyeva et al., Biochemistry (Mosc) 2011 – Testagen (Lys-Glu-Asp-Gly) dringt in den Zellkern ein', url: 'https://pubmed.ncbi.nlm.nih.gov/22117547/' },
      { title: 'Kuznik et al., Bull Exp Biol Med 2008 – KEDG und AEDG bei hypophysektomierten Küken', url: 'https://pubmed.ncbi.nlm.nih.gov/19024016/' },
      { title: 'Kuznik et al., Bull Exp Biol Med 2011 – KEDG und AEDG bei jungen Küken und alten Hennen', url: 'https://pubmed.ncbi.nlm.nih.gov/22268052/' },
      { title: 'Pateyk et al., Bull Exp Biol Med 2013 – KEDG und der Thymus hypophysektomierter Vögel', url: 'https://pubmed.ncbi.nlm.nih.gov/23658898/' },
      { title: 'Dzhokhadze et al., Georgian Med News 2012 – Prostamax ist Lys-Glu-Asp-Pro (Abgrenzung)', url: 'https://pubmed.ncbi.nlm.nih.gov/23221144/' },
      { title: 'Dobriţescu et al., Molecules 2025 – Testagen (KEDG) als Korrosionsschutz für Kupfer', url: 'https://pubmed.ncbi.nlm.nih.gov/40807317/' }
    ],
    community: []
  },

  // ============ KOMPLEXE / STACKS ============
  {
    id: 'kh-cytomax-complex',
    name: 'Cytomax / Cytogen Komplex-Stacks',
    altNames: 'Endoluten · Vladonix · Cerluten · Chelohart · Pielotax u.a.',
    class: 'Hochmolekulare Peptidkomplexe (Cytomax) und synthetische Tripeptide (Cytogen)',
    emoji: '🧪',
    short: 'Handelsnamen für Bioregulator-Produktfamilien aus dem Khavinson-Umfeld: Cytomax für Peptidkomplexe aus Organen junger Tiere, Cytogen für kurze synthetische Peptide, pro Organ ein Präparat, oft zu Stacks kombiniert. Die Idee ist in Zellkulturen untersucht, die Produkte und ihre Kombinationen selbst in keiner veröffentlichten Studie.',
    moa: 'Grundidee ist Gewebespezifität: Ein Extrakt oder Kurzpeptid aus einem Organ soll bevorzugt dort wirken. In Organkulturen regten synthetische Cytogene (2001) und Polypeptidextrakte aus Kälbergewebe, darunter Chelohart aus dem Herzen (2015), jeweils ihr Zielgewebe an. Die Organzuordnung der übrigen Produkte (Endoluten Zirbeldrüse, Vladonix Thymus, Cerluten Netzhaut/ZNS, Pielotax Niere, Ovagen Leber, Glandokort Nebenniere) stammt aus Anbieterangaben; Sigumir ist als Komplex aus Knorpel- und Knochengewebe junger Tiere beschrieben (2012, 2023). Dass mehrere Komplexe gleichzeitig im Körper ihre Organe erreichen und sich ergänzen, ist nicht untersucht.',
    benefits: [
      'Gewebespezifische Wachstumsanregung durch Kälberextrakte (u. a. Chelohart) und synthetische Cytogene in Organkulturen junger und alter Ratten (2001, 2015; Zellkultur).',
      'Sigumir: unkontrollierte Beobachtung an 62 älteren Patienten mit Kiefergelenkerkrankungen im Rahmen einer Kombinationsbehandlung, mit rascher Schmerzlinderung und besserer Kaufunktion (Iordanishvili et al. 2012).',
      'Die russischen Arzneimittel-Vorbilder Thymalin und Epithalamin haben eine Langzeitbeobachtung an 266 Älteren über 6 bis 8 Jahre mit niedrigerer Sterblichkeit (Khavinson & Morozov 2003; Design unklar) – das betrifft nicht die Cytomax-Produkte selbst.',
      'Modulares Konzept: pro Organ ein Präparat, nach Anbieterangaben kombinierbar – die Begründung ist theoretisch.'
    ],
    risks: [
      'Keine veröffentlichte Studie zu den Kombinationsprodukten; zu Endoluten, Vladonix, Cerluten, Pielotax und Glandokort kein einziger PubMed-Eintrag.',
      'Ob die frei verkäuflichen Komplexe den in Russland zugelassenen Arzneimittel-Extrakten entsprechen, ist nicht belegt.',
      'Aufnahme nach dem Schlucken, Wechselwirkungen zwischen mehreren Komplexen und Langzeitfolgen sind nicht untersucht.',
      'Reinheit und Gehalt ungeprüft; die Angaben zur Erregerfreiheit tierischer Extrakte stammen aus dem Herstellerumfeld.',
      'Keinerlei westliche Zulassung; Namensverwechslung mit dem US-Sportgetränk CytoMax möglich.'
    ],
    status: 'Nicht als Arzneimittel zugelassen; angeboten als Nahrungsergänzung oder Forschungsware. In Russland sind einzelne Organextrakte (Thymalin, Epithalamin, Cortexin) als Arzneimittel zugelassen, nicht die Cytomax- oder Cytogen-Produkte. WADA 2026: nicht zugelassene Wirkstoffe unter S0.',
    sources: [
      { title: 'Ryzhak et al. 2015, Adv Gerontol – Polypeptide aus Kälbergewebe (u. a. Chelohart) in Organkultur (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/26390619/' },
      { title: 'Khavinson 2001, Bull Exp Biol Med – gewebespezifische Wirkung synthetischer Cytogene', url: 'https://pubmed.ncbi.nlm.nih.gov/11713572/' },
      { title: 'Iordanishvili et al. 2012, Adv Gerontol – Sigumir bei Kiefergelenkerkrankungen (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/22708467/' },
      { title: 'Khavinson & Morozov 2003, Neuro Endocrinol Lett – Thymalin und Epithalamin bei Älteren', url: 'https://pubmed.ncbi.nlm.nih.gov/14523363/' },
      { title: 'Ryzhak et al. 2003, Bull Exp Biol Med – Herstellung und Reinheit natürlicher Peptidregulatoren', url: 'https://pubmed.ncbi.nlm.nih.gov/12717513/' }
    ],
    community: [
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
  },
  {
    id: 'kh-ovagen',
    name: 'Ovagen',
    altNames: 'EDL · Glu-Asp-Leu · T-35 (nicht zu verwechseln mit Livagen, Lys-Glu-Asp-Ala, oder mit dem Eierstock-Komplex Zhenoluten)',
    class: 'Tripeptid, als Leber-Bioregulator vermarktet; im Patent als Leber-Peptid, in der Fachliteratur vor allem als Nieren-Peptid untersucht',
    emoji: '🟫',
    short: 'Kurzpeptid der Khavinson-Schule aus Glutaminsäure, Asparaginsäure und Leucin, verkauft als Leber-Bioregulator. Der Name klingt nach Eierstock, gemeint ist Leber: Das Entwicklerpatent beschreibt Lebergewebe, die begutachtete Literatur fast ausschließlich die Niere der Ratte. Die einzige Anwendung am Menschen steht als Beispiel im Patent.',
    moa: 'Nach der Hypothese der Khavinson-Schule gelangen ultrakurze Peptide in den Zellkern, binden an DNA und Histone und verändern so die Ablesung von Genen im Zielgewebe. Für EDL ist das in Zellkultur und Tiermodell nachgezeichnet: In alternden Nierenzellkulturen senkten AED und EDL die Alterungsmarker p16, p21 und p53, steigerten SIRT-6 und die Zellteilung, und ein Modell ordnet die Bindung der Peptide der kleinen Furche AT-reicher DNA-Abschnitte zu. In einer zweiten Arbeit derselben Gruppe war die Gelatinase MMP-14, ein Enzym des Gewebeumbaus, das eigentliche Ziel von EDL, während das Schwesterpeptid AED die Zellerneuerung antrieb – die Gewebespezifität ist also auch hier nicht scharf. Im Lebermodell des Patents steigerte EDL das Wachstum von Leberexplantaten und die Zellteilung nach Teilentfernung der Leber. Wie das geschluckte Peptid in Leber oder Niere ankommt, ist nur per Computermodell über die Transporter PEPT und LAT betrachtet, nicht am Menschen gemessen.',
    benefits: [
      'Leberexplantate von 27 Wistar-Ratten: Wachstumsfläche bei 10 ng pro Milliliter um 28 Prozent über der Kontrolle (Patent WO2007139430, Organkultur).',
      'Nach Entfernung von zwei Dritteln der Leber bei 18 Ratten: nach 96 Stunden doppelt so viele Zellteilungen und 75 Prozent mehr teilungsaktive Zellen als unter Kochsalz (Patent, Tierversuch).',
      'Leberzirrhose-Modell mit Tetrachlorkohlenstoff an 45 Ratten: normalisierte Werte für Bilirubin, ALT und AST (Patent, Tierversuch).',
      'Niere: In Modellen für akutes Nierenversagen durch Gentamicin, Durchblutungsstopp und Cisplatin verhinderte EDL bei Ratten den Harnmengenabfall und die Harnstofferhöhung, senkte die Eiweißausscheidung und stützte die antioxidativen Enzyme (Zamorskii et al. 2015, 2017).',
      'Alte Ratten: Harnmenge um das 1,2- bis 1,4-Fache, Natriumausscheidung um das 1,6-Fache erhöht, ohne Hinweis auf Nierenschäden (Zamorskii et al. 2018).',
      'Einzige Anwendung am Menschen: 34 Patienten mit chronischer Hepatitis im Alter von 30 bis 56 Jahren, dazu eine Kontrollgruppe von 15 Patienten mit herkömmlicher Behandlung; 89 Prozent der Behandelten berichteten über weniger Erschöpfung und besseren Appetit, 53 Prozent über deutlich weniger Schmerzen, dazu normalisierten sich Bilirubin und ALT. Randomisierung oder Verblindung sind im Patent nicht beschrieben.'
    ],
    risks: [
      'Keine begutachtete Studie am Menschen; die einzige Patientenanwendung steht im Patent der Entwickler, ohne Randomisierung, Verblindung oder veröffentlichte Einzelwerte der Kontrollgruppe. ClinicalTrials.gov führt keinen Eintrag.',
      'Behandelt wurde im Patent per Injektion; ob das Peptid als Kapsel beim Menschen überhaupt ankommt, ist nicht gemessen.',
      'Die begutachtete Literatur betrifft überwiegend die Niere der Ratte, der Verkauf dagegen die Leber – die Übertragung auf den Menschen ist in beiden Richtungen offen.',
      'Der Name führt in die Irre: Ovagen hat mit Eierstöcken nichts zu tun, und die Verwechslung mit dem Leber-Tetrapeptid Livagen (KEDA) ist in Shops verbreitet.',
      'Fettleber, alkoholbedingte Leberschäden und Leberfibrose beim Menschen sind nie gezielt untersucht; aktive Lebererkrankungen und Nierenerkrankungen gehören in ärztliche Behandlung, und Wechselwirkungen mit Medikamenten sind nicht untersucht.',
      'Research-Ware mit ungeprüftem Gehalt und Reinheit; Sicherheitsdaten stammen aus Tierversuchen der Patentschrift.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Patentiert als Peptid zur Anregung der Leberregeneration (RU 2297239, WO2007139430, Priorität 30.05.2006). Gehandelt als Kapselpräparat oder Forschungspeptid. WADA 2026: als nicht zugelassene Substanz unter S0 jederzeit verboten.',
    sources: [
      { title: 'Khavinson et al., Patent WO2007139430 – H-Glu-Asp-Leu-OH für die Leberregeneration: Organkultur, Tiermodelle, Toxikologie, Patientenbeispiel', url: 'https://patents.google.com/patent/WO2007139430A1/en' },
      { title: 'Zamorskii et al., Bull Exp Biol Med 2017 – nierenschützende Wirkung von EDL bei akutem Nierenschaden', url: 'https://pubmed.ncbi.nlm.nih.gov/28744634/' },
      { title: 'Zamorskii et al., Bull Exp Biol Med 2015 – Peptide bei Cisplatin-bedingtem akutem Nierenversagen', url: 'https://pubmed.ncbi.nlm.nih.gov/26515176/' },
      { title: 'Zamorskii et al., Adv Gerontol 2018 – Peptide und die Nierenfunktion alter Ratten (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/30607912/' },
      { title: 'Khavinson et al., Adv Gerontol 2014 – AED und EDL bremsen die Alterung in Nierenzellkulturen (russisch)', url: 'https://pubmed.ncbi.nlm.nih.gov/25946838/' },
      { title: 'Khavinson et al., Bull Exp Biol Med 2014 – Signalmoleküle in alternden Nierenzellkulturen, MMP-14 als Ziel von EDL', url: 'https://pubmed.ncbi.nlm.nih.gov/24958378/' },
      { title: 'Khavinson et al., Molecules 2021 – Peptide und Genexpression: EDL (Ovagen) als Nieren- und Leberpeptid (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/34834147/' },
      { title: 'Khavinson et al., Int J Mol Sci 2022 – Transport ultrakurzer Peptide über POT- und LAT-Träger (Ovagen gelistet)', url: 'https://pubmed.ncbi.nlm.nih.gov/35887081/' },
      { title: 'ClinicalTrials.gov – Suche nach Ovagen ohne eingetragene Studie', url: 'https://clinicaltrials.gov/search?term=ovagen' },
      { title: 'NADA – Verbotsliste 2026, informatorische Übersetzung (Gruppe S0)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
    ],
    community: []
  }

];
