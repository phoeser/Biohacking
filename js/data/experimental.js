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
  {
    id: 'semaglutide',
    name: 'Semaglutide (Ozempic / Wegovy)',
    altNames: 'Ozempic, Wegovy, Rybelsus',
    class: 'GLP-1-Rezeptor-Agonist',
    emoji: '💊',
    short: 'Der Blockbuster der „Abnehmspritzen": als Ozempic/Wegovy zugelassen, hochwirksam beim Gewicht und mit belegtem Herz-Kreislauf-Nutzen – ein legaler, ärztlich begleiteter Weg.',
    moa: 'Aktiviert den GLP-1-Rezeptor → verzögerte Magenentleerung, gesteigerte Sättigung, verbesserte Insulinsekretion und reduzierte Glucagon-Ausschüttung.',
    benefits: [
      '12–15% Gewichtsverlust nach 68 Wochen (STEP-1-Studie)',
      'Senkt kardiovaskuläre Ereignisse (SELECT-Studie)',
      'Reduziert chronische Entzündung, verbessert NAFLD',
      'Verschreibungsfähig (mit Indikation) – legale Bezugsquelle'
    ],
    risks: [
      'Verschreibungspflichtig – am besten ärztlich begleiten.',
      'Zu Beginn oft Übelkeit/Verdauungsthemen, meist vorübergehend.',
      'Auf Muskelerhalt achten (Eiweiß + Krafttraining); Ware nur aus geprüfter Quelle.'
    ],
    status: 'In DE für Typ-2-Diabetes (Ozempic) und Adipositas (Wegovy) zugelassen.',
    sources: [
      { title: 'Wilding JPH et al., NEJM 2021 – STEP 1', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' },
      { title: 'Lincoff AM et al., NEJM 2023 – SELECT trial', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563' }
    ],
    community: [
      { title: 'Iron Mike: GLP-1 Microdosing', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Semaglutide-Forschungspeptid)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'Semaglutid (Ozempic & Wegovy): Die Abnehmspritze im Faktencheck',
        audio: 'audio/semaglutide-podcast.mp3',
        spotify: '5x2XjkIFxdENZQF2LEbRrH',
        lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Anders als Graumarkt-Peptide ein echtes, zugelassenes, hochwirksames Medikament (STEP ~15% Gewicht, SELECT −20% Herz-Kreislauf-Events). Der Faktencheck: Rebound nach Absetzen, Muskelverlust, Nebenwirkungen – und die gefährlichen grauen/gefälschten Versionen mit Dosierungsrisiko. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig, ärztlich begleiten lassen.',
        sources: [
          { title: 'Wilding et al., NEJM 2021 – STEP 1 (Gewichtsverlust)', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' },
          { title: 'Lincoff et al., NEJM 2023 – SELECT (kardiovaskulärer Nutzen)', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563' },
          { title: 'STEP-1-Verlängerung – Gewichtszunahme nach Absetzen', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9542252/' }
        ]
      }
    ]
  },
  {
    id: 'tirzepatide',
    name: 'Tirzepatide (Mounjaro / Zepbound)',
    altNames: 'Mounjaro, Zepbound, LY3298176',
    class: 'GLP-1 / GIP Dual-Agonist',
    emoji: '💉',
    short: 'Der aktuell stärkste zugelassene Fatburner: die Dual-Kombi aus GLP-1 und GIP bringt bis zu 22,5% Gewichtsverlust – und schlug Semaglutid im direkten Vergleich.',
    moa: 'Aktiviert simultan GLP-1- und GIP-Rezeptoren. GIP wirkt synergistisch mit GLP-1 auf Insulinsekretion und Sättigung.',
    benefits: [
      '15–22,5% Gewichtsverlust (SURMOUNT-1)',
      'Senkt HbA1c stärker als Semaglutide',
      'Reduziert obstruktive Schlafapnoe (SURMOUNT-OSA)',
      'Verbessert Lebersteatose (SYNERGY-NASH)'
    ],
    risks: [
      'Verschreibungspflichtig – ärztlich begleiten.',
      'Magen-Darm-Effekte v.a. zu Beginn, meist mild.',
      'Mit Krafttraining und Eiweiß den Muskel erhalten.'
    ],
    status: 'In DE als Mounjaro (Diabetes) und Zepbound (Adipositas) zugelassen.',
    sources: [
      { title: 'Jastreboff AM et al., NEJM 2022 – SURMOUNT-1', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038' },
      { title: 'Malhotra A et al., NEJM 2024 – SURMOUNT-OSA', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2404881' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Tirzepatide)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'Tirzepatid (Mounjaro & Zepbound): Der stärkste zugelassene Fatburner im Faktencheck',
        audio: 'audio/tirzepatide-podcast.mp3',
        spotify: '5vOtZhEe08HDu7AU2mwaRx',
        lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der Dual-Agonist (GIP+GLP-1) schlug Semaglutid direkt (SURMOUNT-5: 20,2% vs. 13,7%) und ist das aktuell wirksamste zugelassene Abnehm-Medikament – bei tendenziell besserer Verträglichkeit. Faktencheck: Rebound, Muskelverlust, Warnhinweise und die gefährlichen grauen/gefälschten Versionen. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig.',
        sources: [
          { title: 'Jastreboff et al., NEJM 2022 – SURMOUNT-1', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2206038' },
          { title: 'SURMOUNT-5 (NEJM) – Tirzepatid vs. Semaglutid, direkter Vergleich', url: 'https://www.appliedclinicaltrialsonline.com/view/tirzepatide-weight-loss-semaglutide-surmount-trial' },
          { title: 'Malhotra et al., NEJM 2024 – SURMOUNT-OSA (Schlafapnoe)', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2404881' }
        ]
      }
    ]
  },
  {
    id: 'retatrutide',
    name: 'Retatrutide',
    altNames: 'LY3437943',
    class: 'GLP-1 / GIP / Glucagon Triagonist',
    emoji: '💉',
    short: 'Der bisher stärkste Abnehm-Wirkstoff aus den Studien: ein Dreifach-Ansatz von Eli Lilly, der den Appetit zügelt und den Energieverbrauch anhebt – in Phase 2 bis zu 24% Gewichtsverlust.',
    moa: 'Aktiviert GLP-1-, GIP- und Glucagon-Rezeptoren. GLP-1+GIP senken Appetit & Blutzucker, Glucagon erhöht den Energieverbrauch (lipolytisch).',
    benefits: [
      'Bis zu 24% Körpergewichtsverlust nach 48 Wochen (Phase 2)',
      'Senkt HbA1c und Triglyzeride deutlich',
      'Reduziert Leberfett massiv (NAFLD-Studien laufen)',
      'Stärkerer Effekt als Tirzepatid (Mounjaro/Zepbound)'
    ],
    risks: [
      'Noch in der Zulassungsphase (Phase 3) – aktuell nur als ungeprüfte Research-Ware verfügbar.',
      'Zu Beginn oft etwas Übelkeit oder Verdauungsthemen, die sich beim langsamen Eindosieren meist geben.',
      'Langzeitdaten stehen noch aus.'
    ],
    status: 'In Phase 3 bei Eli Lilly, Zulassung um 2026/27 erwartet. Noch nicht regulär verfügbar.',
    sources: [
      { title: 'Jastreboff AM et al., NEJM 2023 – Retatrutide Phase 2', url: 'https://www.nejm.org/doi/10.1056/NEJMoa2301972' },
      { title: 'TRIUMPH-Studienreihe (Phase 3, laufend)', url: 'https://classic.clinicaltrials.gov/ct2/show/NCT05882045' }
    ],
    community: [
      { title: 'biolabshop – Retatrutide (Triple G)', url: 'https://biolabshop.co.uk/209-retatrutide' },
      { title: 'Iron Mike: Retatrutide-Q&A', url: 'https://www.youtube.com/post/UgkxvmKFskjZ2XJh0aQDlzNnow5LEYzeIS8-' },
      { title: 'Retatrutide vs. SLU-PP-332 (Fat Loss Vergleich)', url: 'https://www.youtube.com/watch?v=5fFJIHzrSzQ' }
    ],
    podcasts: [
      {
        title: 'KI-Podcast: Retatrutide – der stärkste Abnehm-Triagonist',
        audio: 'audio/retatrutide-podcast.mp3',
        spotify: '7kJBUC1x9ZEfzlHN0WCO3f',
        lengthLabel: '≈ 8 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit aktueller Fachrecherche (TRIUMPH Phase 3) ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'Peptide of The Week – Retatrutide (GLP-3)', url: 'https://open.spotify.com/episode/2Xt6iBveTeiGWaoTjZDNxZ' },
          { title: 'FettUcation – Retatrutide: warum es stärker wirkt als Mounjaro (Deutsch)', url: 'https://open.spotify.com/episode/0BX2ml5PBu5EFgDA6TwB60' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/6wWUjjB7vxeIopVEmgMPYA' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/7rHHXTAPki0x4087cCgsFB' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/3rCvtt10k3iH0gXWtCSAm0' }
        ]
      }
    ]
  },
  {
    id: 'testosteron',
    name: 'Testosteron & TRT',
    altNames: 'Testosteron-Ersatztherapie, TRT, Testosteron-Substitution, Testosterongel, Testosteron-Enantat',
    class: 'Androgenes Sexualhormon · Hormonersatztherapie bei Hypogonadismus (Testosteronmangel)',
    emoji: '💪',
    short: 'Bei echtem, ärztlich festgestelltem Testosteronmangel eine gut belegte und oft sehr wirksame Hormontherapie – sie bringt spürbar mehr Energie, Muskelkraft, Libido und Lebensfreude zurück. Am schönsten mit ärztlicher Begleitung.',
    moa: 'Testosteron ist das wichtigste männliche Sexualhormon und wirkt über Androgenrezeptoren auf Muskeln, Knochen, Blutbildung, Fettstoffwechsel, Libido, Antrieb und Stimmung; ein Teil wird zu Östradiol aromatisiert (physiologisch nötig, u.a. für Knochen und Libido). Der Spiegel sinkt ab etwa Mitte 30 langsam; bei ausgeprägtem Mangel mit Symptomen spricht man von Hypogonadismus. Die TRT ersetzt das fehlende Hormon (Injektion, Gel, Pflaster oder Depot), um den Spiegel in einen gesunden Bereich zu bringen. Ziel ist der Ausgleich eines Mangels, nicht die Supraphysiologie.',
    benefits: [
      'Bei echtem Mangel: mehr sexuelles Verlangen und bessere Erektionsfähigkeit.',
      'Zunahme der Muskelmasse und Abnahme von Körperfett.',
      'Verbesserte Knochendichte.',
      'Oft bessere Stimmung, mehr Antrieb und Lebensqualität (mangelbedingte, depressionsähnliche Symptome bessern sich).',
      'Hinweise auf bessere Insulinempfindlichkeit und günstige Stoffwechseleffekte, v.a. bei Übergewicht + Mangel.',
      'Aktuelle Sicherheitsdaten (TRAVERSE-Studie): kein erhöhtes Risiko für schwere Herz-Kreislauf-Ereignisse und keine erhöhte Prostatakrebsrate bei sachgemäßem Einsatz.'
    ],
    risks: [
      'Verschreibungspflichtig – Diagnose und Begleitung gehören in ärztliche Hände (inkl. regelmäßiger Blutkontrollen).',
      'Unterdrückt vorübergehend die eigene Spermienproduktion; bei Kinderwunsch gibt es schonendere Wege.',
      'Kann die roten Blutkörperchen anheben – mit Kontrollen gut steuerbar.'
    ],
    status: 'Zugelassenes, verschreibungspflichtiges Medikament bei Testosteronmangel. Am besten ärztlich abklären und begleiten lassen.',
    sources: [
      { title: 'Endocrine Society / AUA – Guidelines Testosterontherapie bei Hypogonadismus', url: 'https://www.aafp.org/pubs/afp/issues/2024/0600/testosterone-replacement-therapy.html' },
      { title: 'TRAVERSE-Studie (NEJM 2023) – kardiovaskuläre Sicherheit von Testosterontherapie', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2215025' },
      { title: 'Cleveland Clinic – Testosterone Replacement Therapy (TRT): Überblick', url: 'https://my.clevelandclinic.org/health/treatments/testosterone-replacement-therapy-trt' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'Testosteron & TRT: Die Testosteron-Ersatztherapie im Faktencheck',
        audio: 'audio/testosteron-podcast.mp3',
        spotify: '6uKz3P8CXnqgw4r7c0mlDn',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula, ElevenLabs-Stimmen)',
        note: 'KI-generierte deutsche Folge mit realistischen Stimmen (ElevenLabs), mit Fachrecherche ergänzt und bewusst positiv, aber verantwortungsvoll gerahmt: TRT bei echtem, ärztlich nachgewiesenem Mangel ist gut belegt und oft sehr wirksam; die TRAVERSE-Studie hat Herz- und Prostata-Sorgen entschärft. Klar benannt: Blutkontrollen (Hämatokrit), unterdrückte Fruchtbarkeit und die strikte Abgrenzung zur Hochdosis-/Graumarkt-Nutzung. Reine Information, kein medizinischer Rat, keine Dosierempfehlung – Testosteron ist verschreibungspflichtig; Mangel bitte ärztlich abklären und Therapie ärztlich begleiten.',
        sources: [
          { title: 'TRAVERSE-Studie (NEJM 2023) – kardiovaskuläre Sicherheit', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2215025' },
          { title: 'AAFP 2024 – Testosterone Replacement Therapy for Male Hypogonadism', url: 'https://www.aafp.org/pubs/afp/issues/2024/0600/testosterone-replacement-therapy.html' }
        ]
      }
    ]
  },
  {
    id: 'orforglipron',
    name: 'Orforglipron (Foundayo)',
    altNames: 'LY3502970, orales GLP-1, Small-Molecule-GLP-1',
    class: 'Oraler, nicht-peptidischer GLP-1-Rezeptor-Agonist',
    emoji: '💊',
    short: 'Der Durchbruch bei den Abnehm-Tabletten: das erste orale Small-Molecule-GLP-1 – seit April 2026 in den USA zugelassen (Foundayo), ganz ohne Spritze, Kühlung oder Nüchtern-Auflagen.',
    moa: 'Orforglipron ist – anders als Semaglutid oder Tirzepatid – kein Peptid, sondern ein kleines, oral stabiles Molekül, das den GLP-1-Rezeptor aktiviert. Dadurch werden Sättigung und Insulinausschüttung gesteigert und die Magenentleerung verzögert. Weil es kein Peptid ist, übersteht es den Magen und lässt sich als simple Tablette zu jeder Tageszeit einnehmen – ohne die strengen Nüchtern- und Wasserregeln von oralem Semaglutid. Das macht die Produktion günstiger und weltweit skalierbar.',
    benefits: [
      'Erste orale GLP-1-Tablette ohne Spritze – einfache Einnahme zu jeder Tageszeit.',
      'Schlug in einer direkten Phase-3-Studie orales Semaglutid (bessere HbA1c-Senkung, mehr Gewichtsverlust).',
      'Deutlicher Gewichtsverlust und verbesserte Blutzuckerwerte.',
      'Keine Kühlung nötig – günstig produzierbar, gut skalierbar für breite Verfügbarkeit.'
    ],
    risks: [
      'Verschreibungspflichtig – Anwendung ärztlich begleiten.',
      'Typische GLP-1-Nebenwirkungen v.a. zu Beginn: Übelkeit, Verdauungsthemen (meist mild).',
      'In DE/EU noch nicht zugelassen (US-Zulassung April 2026) – EU-Verfügbarkeit steht aus.',
      'Auf Muskelerhalt achten (Eiweiß + Krafttraining).'
    ],
    status: 'In den USA 2026 als Foundayo zugelassen (Eli Lilly). In DE/EU noch nicht zugelassen.',
    sources: [
      { title: 'Meto – Next-Generation GLP-1 Drugs 2026 (Orforglipron u.a.)', url: 'https://meto.co/blog/next-generation-glp-1-drugs-2026' },
      { title: 'GoodRx – New Weight Loss Drugs (Übersicht 2026)', url: 'https://www.goodrx.com/conditions/weight-loss/new-weight-loss-drugs' },
      { title: 'Drug Discovery News – GLP-1 Pipeline 2026', url: 'https://www.drugdiscoverynews.com/glp-1-agonist-clinical-pipeline-2026-semaglutide-tirzepatide-and-what-s-in-phase-2-17286' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin (Egrifta)',
    altNames: 'TH9507, GHRH-Analogon',
    class: 'GHRH-Analogon (Wachstumshormon-Releasing-Hormon), FDA-zugelassen',
    emoji: '📈',
    short: 'Das FDA-zugelassene GHRH-Analogon: hebt das körpereigene Wachstumshormon an und senkt gezielt das viszerale Bauchfett – in der Peptid-Szene einer der Standards (u.a. im Hunter-Williams-Stack).',
    moa: 'Tesamorelin ist ein stabilisiertes Analogon des Wachstumshormon-Releasing-Hormons (GHRH) und regt die Hirnanhangsdrüse zu einer natürlichen, pulsatilen Ausschüttung von Wachstumshormon (GH) und damit IGF-1 an. Zugelassen ist es zur Reduktion von viszeralem Bauchfett (ursprünglich bei HIV-Lipodystrophie). Da die körpereigene Rückkopplung erhalten bleibt, gilt es als physiologischer als exogenes HGH. In der Biohacking-Szene wird es für Körperkomposition, Regeneration und Anti-Aging genutzt.',
    benefits: [
      'FDA-zugelassen – eines der wenigen GH-Peptide mit echter Zulassung.',
      'Senkt gezielt viszerales (tiefes) Bauchfett.',
      'Hebt GH und IGF-1 auf physiologische Weise (erhaltene Rückkopplung).',
      'Kann Körperkomposition, Haut und Regeneration unterstützen.'
    ],
    risks: [
      'Verschreibungspflichtig; die Biohacking-Nutzung außerhalb der Zulassung ist off-label.',
      'GH-Klassen-Effekte möglich: Wassereinlagerung, Gelenkbeschwerden, Blutzucker im Blick behalten.',
      'Im Wettkampfsport WADA-verboten.',
      'Graumarkt-Ware auf Reinheit achten; in DE nur auf Rezept legal.'
    ],
    status: 'In den USA als Egrifta zugelassen (viszerales Bauchfett). In DE verschreibungspflichtig; Biohacking-Nutzung off-label.',
    sources: [
      { title: 'MyFitMed – Top Fat-Loss Peptides 2026 (Tesamorelin)', url: 'https://www.myfitmed.com/post/top-fat-loss-peptides-2026-ipamorelin-aod9604-tesamorelin-cjc1295-explained' },
      { title: 'PeptideDeck – Best Growth Hormone Peptides 2026', url: 'https://www.peptidedeck.com/peptides/best-growth-hormone-peptides-2026' }
    ],
    community: [
      { title: 'Hunter Williams – Peptide-Protokolle', url: 'https://www.peptideschedule.com/protocols/by/hunter-williams' }
    ]
  },
  {
    id: 'mk-677',
    name: 'MK-677 (Ibutamoren)',
    altNames: 'Ibutamoren, Nutrobal, MK-0677',
    class: 'Oraler Ghrelin-Rezeptor-Agonist (GH-Secretagogue)',
    emoji: '💪',
    short: 'Die orale „Peptid-Alternative": eine Tablette, die körpereigenes Wachstumshormon und IGF-1 anhebt – beliebt für Tiefschlaf, Regeneration und Hautqualität, ganz ohne Spritze.',
    moa: 'Aktiviert den Ghrelin/Growth-Hormone-Secretagogue-Rezeptor in der Hypophyse → physiologische GH- und IGF-1-Pulse, oral verfügbar.',
    benefits: [
      'Erhöht IGF-1 um 40–80% bei 25 mg/Tag',
      'Tieferer Schlaf (mehr Slow-Wave Sleep)',
      'Subjektive Hautqualität, Haarwuchs',
      'Lean Mass +2–3 kg in 8 Wochen (Sportler-Anekdoten)'
    ],
    risks: [
      'Kann Appetit, Wassereinlagerung und Blutzucker anheben – Stoffwechsel im Blick behalten.',
      'Bei Herzthemen ärztlich abklären (in einer Studie zeigte sich ein Herz-Signal).',
      'Nicht als Arzneimittel zugelassen, im Wettkampfsport verboten; Research-Ware auf Qualität prüfen.'
    ],
    status: 'Kein zugelassenes Arzneimittel; Forschungssubstanz.',
    sources: [
      { title: 'Nass R et al., Ann Intern Med 2008 – MK-677 elderly', url: 'https://pubmed.ncbi.nlm.nih.gov/19075203/' },
      { title: 'Murphy MG et al., J Clin Endocrinol Metab 1998', url: 'https://pubmed.ncbi.nlm.nih.gov/9543156/' }
    ],
    community: [
      { title: 'biolabshop (MK-677)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      {
        title: 'MK-677 (Ibutamoren): Wachstumshormon aus der Tablette im Faktencheck',
        audio: 'audio/mk-677-podcast.mp3',
        spotify: '5BFLu2EqcYTVGzEG2XuBXe',
        lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der ehrliche Dreh: MK-677 hebt GH und IGF-1 zuverlässig an (oral!) – aber der Preis ist real: steigender Blutzucker/Insulinresistenz, Wassereinlagerung, ein Herzinsuffizienz-Signal in einer Studie (vorzeitig abgebrochen), theoretisches Krebsrisiko. Nie zugelassen, WADA-verboten, Graumarkt. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Nass et al., Ann Intern Med 2008 – MK-677 bei älteren Erwachsenen', url: 'https://pubmed.ncbi.nlm.nih.gov/19075203/' },
          { title: 'DEA/GetSmart – Gesundheitsrisiken von MK-677 (u. a. Herzinsuffizienz-Signal)', url: 'https://www.getsmartaboutdrugs.gov/news-statistics/2025/07/08/beyond-hype-potential-health-risks-mk-677' }
        ]
      }
    ]
  },
  {
    id: 'cjc-ipamorelin',
    name: 'CJC-1295 + Ipamorelin',
    altNames: 'CJC/Ipa, GHRH/GHRP-Stack',
    class: 'GHRH-Analog (CJC-1295) + GHRP / Ghrelin-Mimetic (Ipamorelin)',
    emoji: '🧪',
    short: 'Der beliebte GH-Stack: GHRH-Analog plus selektives Ghrelin-Peptid heben die eigene Wachstumshormon-Ausschüttung pulsatil an – geschätzt für Tiefschlaf, Regeneration und Bindegewebe, ohne Cortisol-/Prolaktin-Anstieg.',
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
      'Meist milde, reversible Effekte wie leichte Wassereinlagerung oder Kribbeln.',
      'Langzeit-/Zulassungsdaten fehlen; im Wettkampfsport verboten.',
      'Als Research-Ware auf Reinheit achten.'
    ],
    status: 'Kein zugelassenes Arzneimittel; Forschungs-Peptide.',
    sources: [
      { title: 'Sigalos JT, Pastuszak AW – Anti-aging peptides review 2018', url: 'https://pubmed.ncbi.nlm.nih.gov/28676436/' },
      { title: 'Teichman SL et al., J Clin Endocrinol Metab 2006 – CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
    ],
    community: [
      { title: 'biolabshop (CJC/Ipamorelin)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      {
        title: 'CJC-1295 + Ipamorelin: Der beliebte Wachstumshormon-Stack im Faktencheck',
        audio: 'audio/cjc-ipamorelin-podcast.mp3',
        spotify: '1lAy2Hc9kF0X2YQijcYKg5',
        lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der klassische GH-Stack: GHRH (CJC-1295) + selektives GHRP (Ipamorelin, ohne Cortisol/Prolaktin der alten GHRPs) verstärken sich zu einem mehrfachen GH-Puls. Akute Wirkung real, aber Langzeit-/Anti-Aging-Nutzen bei Gesunden unbelegt; GH-Klassen-Risiken (Blutzucker, IGF-1), FDA-Warnung zu compounded CJC-1295, WADA-verboten, Graumarkt. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Sigalos & Pastuszak 2018 – Review zu Anti-Aging-Peptiden (GH-Sekretagoga)', url: 'https://pubmed.ncbi.nlm.nih.gov/28676436/' },
          { title: 'Teichman et al. 2006 – CJC-1295 Pharmakokinetik/Sicherheit (Phase 1)', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
        ]
      }
    ]
  },
  {
    id: 'bpc-157',
    name: 'BPC-157',
    altNames: 'Body Protection Compound 157, PL 14736',
    class: 'Synthetisches Pentadecapeptid (Magenschleimhaut-Derivat)',
    emoji: '🩹',
    short: 'Das beliebte „Reparatur-Peptid": im Tiermodell breit regenerativ auf Sehnen, Bindegewebe und Magen-Darm-Schleimhaut, säurestabil und ohne hormonelle Wirkung.',
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
      'Wirkung überwiegend aus Tierstudien; kontrollierte Humanstudien stehen noch aus.',
      'Im Wettkampfsport WADA-verboten.',
      'Als Research-Ware auf Reinheit achten; in DE nicht als Arzneimittel zugelassen.'
    ],
    status: 'Forschungs-Peptid, im Wettkampfsport verboten. Noch nicht als Arzneimittel zugelassen.',
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
        title: 'KI-Podcast: Der Wolverine Stack – BPC-157 + TB-500 (Regenerations-Duo)',
        audio: 'audio/wolverine-stack-podcast.mp3',
        spotify: '4Lex4pgjZQrVvjEEP2r0sK',
        lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser. KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche zum „Wolverine Stack" (BPC-157 + TB-500) – wie sich die beiden Peptide über verschiedene Signalwege in verschiedenen Heilungsphasen ergänzen. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Research-Peptide, nicht als Arzneimittel zugelassen, im Sport verboten (WADA).'
      }
    ]
  },
  {
    id: 'tb-500',
    name: 'TB-500 (Thymosin Beta-4 Fragment)',
    altNames: 'TB4, Thymosin β-4',
    class: 'Synthetisches Peptid-Fragment (43 AS / aktive Region)',
    emoji: '🩹',
    short: 'Das systemisch wirkende Regenerations-Peptid aus der Thymosin-Beta-4-Familie – im Tiermodell fördert es die Heilung von Sehnen, Muskeln und Gewebe und wird gern mit BPC-157 kombiniert.',
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
      'Wirkung v.a. aus Tierdaten; Humanstudien unter dem Namen TB-500 fehlen.',
      'Im Wettkampfsport verboten; nur injizierbar.',
      'Als Research-Ware auf Reinheit achten.'
    ],
    status: 'Forschungs-Peptid, im Wettkampfsport verboten.',
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
        title: 'KI-Podcast: Der Wolverine Stack – BPC-157 + TB-500 (Regenerations-Duo)',
        audio: 'audio/wolverine-stack-podcast.mp3',
        spotify: '4Lex4pgjZQrVvjEEP2r0sK',
        lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser. KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche zum „Wolverine Stack" (BPC-157 + TB-500) – wie sich die beiden Peptide über verschiedene Signalwege in verschiedenen Heilungsphasen ergänzen. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Research-Peptide, nicht als Arzneimittel zugelassen, im Sport verboten (WADA).'
      }
    ]
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu (Copper-Tripeptid)',
    altNames: 'Glycyl-L-Histidyl-L-Lysin-Kupfer',
    class: 'Tripeptid-Kupfer-Komplex',
    emoji: '🧴',
    short: 'Ein körpereigenes Kupfer-Tripeptid und einer der bestbelegten Haut-Wirkstoffe: kurbelt Kollagen an, glättet die Haut und unterstützt die Wundheilung – topisch hervorragend erforscht.',
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
      'Die Creme ist top belegt; die injizierte Ganzkörper-Wirkung ist noch überwiegend präklinisch.',
      'Nicht bei Kupferstoffwechselstörung (Morbus Wilson) oder Kupferallergie.',
      'Injizierbare Ware auf Reinheit und Sterilität achten.'
    ],
    status: 'Topisch in Kosmetik frei verkäuflich; injizierbare Form ist Forschungs-Peptid.',
    sources: [
      { title: 'Pickart L, Biomolecules 2018 – GHK-Cu gene expression', url: 'https://pubmed.ncbi.nlm.nih.gov/29382140/' },
      { title: 'Pickart L et al., Oxid Med Cell Longev 2012', url: 'https://pubmed.ncbi.nlm.nih.gov/22666519/' }
    ],
    community: [
      { title: 'biolabshop (GHK-Cu)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      {
        title: 'GHK-Cu (Kupfer-Tripeptid): Creme top, Spritze Fragezeichen – im Faktencheck',
        audio: 'audio/ghk-cu-podcast.mp3',
        spotify: '7GdCodf2PCq47XKo9jmrrK',
        lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der ehrliche Dreh: topisch/kosmetisch ist GHK-Cu eines der bestbelegten Peptide (~40 Jahre Forschung, +28% Kollagendichte, Haut/Wundheilung, sehr sicher) – aber der Sprung zum injizierten Ganzkörper-Anti-Aging ist am Menschen kaum belegt und bringt ein Kupfer-Überladungs-Risiko. Belegt ist die Creme, nicht die Nadel. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Pickart & Margolina, Biomolecules 2018 – GHK-Cu: Genexpression & Regeneration', url: 'https://pubmed.ncbi.nlm.nih.gov/29986520/' },
          { title: 'GHK als Anti-Aging-Peptid (Review, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8789089/' }
        ]
      }
    ]
  },
  {
    id: 'pt-141',
    name: 'PT-141',
    altNames: 'Bremelanotid, Vyleesi, Melanocortin-Agonist',
    class: 'Melanocortin-Rezeptor-Agonist (MC4R), zentral wirksames Mittel gegen sexuelle Funktionsstörungen',
    emoji: '❤️‍🔥',
    short: 'Ein Melanocortin-Peptid, das die Lust zentral im Gehirn steigert – nicht über die Durchblutung wie Viagra. Als Vyleesi (FDA 2019) für Frauen mit Lustlosigkeit zugelassen, in der Szene breit genutzt.',
    moa: 'PT-141 (Bremelanotid) ist ein synthetischer Melanocortin-Rezeptor-Agonist, der vor allem den MC4-Rezeptor im Hypothalamus aktiviert. Anders als PDE5-Hemmer (Sildenafil/Tadalafil), die über die Durchblutung wirken, setzt PT-141 zentral am sexuellen Verlangen und der Erregung an. Es ist chemisch mit Melanotan 2 verwandt, was die melanocortin-typischen Nebenwirkungen (Hautverfärbung, Übelkeit, Blutdruckanstieg) erklärt. Angewendet wird das zugelassene Präparat als Autoinjektor bei Bedarf; in der Szene kursieren Injektions- und Nasenspray-Formen.',
    benefits: [
      'Als Vyleesi (FDA 2019) für prämenopausale Frauen mit vermindertem sexuellem Verlangen (HSDD) zugelassen – mit Phase-3-Evidenz.',
      'Wirkt zentral am Verlangen, nicht nur an der Durchblutung – daher auch bei fehlender Lust interessant, wo Potenzmittel nicht greifen.',
      'Bedarfsanwendung ca. 45 Min vor der Aktivität (kein tägliches Einnehmen nötig).',
      'Wird off-label auch bei Männern mit Libido-/Erektionsproblemen eingesetzt (nicht zugelassene Anwendung).',
      'Anderer Mechanismus als Viagra/Cialis – teils kombinierbar (jedoch mit Kreislauf-Vorsicht).'
    ],
    risks: [
      'Kann den Blutdruck kurz anheben – bei unkontrolliertem Bluthochdruck oder Herz-Kreislauf-Erkrankung ungeeignet.',
      'Häufig zu Beginn Übelkeit; möglich ist eine leichte Hautverdunkelung.',
      'Off-label-/Graumarkt-Nutzung ist ungeprüft – auf Qualität achten.'
    ],
    status: 'In den USA als Vyleesi für Frauen mit Lustlosigkeit (HSDD) zugelassen; in DE/EU nicht breit zugelassen.',
    sources: [
      { title: 'FDA – Zulassung Vyleesi (Bremelanotid) 2019', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf' },
      { title: 'Kingsberg et al., Obstet Gynecol 2019 – RECONNECT Phase-3 (Bremelanotid bei HSDD)', url: 'https://pubmed.ncbi.nlm.nih.gov/31599840/' }
    ],
    community: [
      { title: 'Sexuelle Funktionsstörungen ärztlich abklären (Ursachensuche, Herz-Kreislauf)', url: 'https://www.gelbe-liste.de/wirkstoffe/Bremelanotid_57503' },
      { title: 'Particle Peptides (Research – nur Grauzone, keine Empfehlung)', url: 'https://particlepeptides.com/en/16-buy-peptides' },
      { title: 'biolabshop (Research – nur Grauzone, keine Empfehlung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'PT-141 (Bremelanotid): Die Lust-Spritze fürs Gehirn im Faktencheck',
        audio: 'audio/pt-141-podcast.mp3',
        spotify: '2D3wSp3syLHObeyXzCi2nR',
        lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Melanocortin-Agonist, der das Verlangen zentral im Gehirn steigert – nicht die Durchblutung wie Cialis. Echt zugelassen (Vyleesi, FDA 2019), aber NUR für Frauen mit HSDD; die Biohacking-Nutzung ist off-label/Graumarkt. Effekt moderat; kritisch: Übelkeit, Blutdruckanstieg (Kontraindikation bei Herz-Kreislauf), Hautverfärbung. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'FDA – Vyleesi (Bremelanotid) Fachinformation', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf' },
          { title: 'Kingsberg et al. 2019 – RECONNECT Phase-3-Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/31599840/' }
        ]
      }
    ]
  },
  {
    id: 'tadalafil',
    name: 'Tadalafil',
    altNames: 'Cialis, Adcirca, PDE5-Hemmer',
    class: 'Phosphodiesterase-5-Hemmer (PDE5-Hemmer), verschreibungspflichtiges Arzneimittel',
    emoji: '💊',
    short: 'Das bewährte, zugelassene Potenzmittel (Cialis) – als PDE5-Hemmer verbessert es die Durchblutung und hilft zusätzlich bei Prostatabeschwerden und Lungenhochdruck; auch Gefäß- und Hirn-Effekte werden erforscht.',
    moa: 'Tadalafil hemmt das Enzym Phosphodiesterase-5 (PDE5), das den Botenstoff cGMP abbaut. Über den Stickstoffmonoxid-cGMP-Signalweg entspannt sich dadurch die glatte Gefäßmuskulatur, Gefäße weiten sich und die Durchblutung verbessert sich – im Schwellkörper, in der Prostata und im Blasenhals, im Lungenkreislauf sowie potenziell im Gehirn. Charakteristisch ist die sehr lange Wirkdauer (Halbwertszeit ca. 17,5 h), die eine niedrige tägliche Dauergabe ermöglicht. Tadalafil passiert die Blut-Hirn-Schranke; ein neuroprotektiver bzw. durchblutungsfördernder Effekt im Gehirn wird untersucht, ist am Menschen aber nicht überzeugend belegt.',
    benefits: [
      'Zugelassen und gut belegt bei erektiler Dysfunktion.',
      'Zugelassen bei Beschwerden der gutartigen Prostatavergrößerung (BPH-LUTS), oft 5 mg täglich – adressiert zwei häufige Männerprobleme mit einem Wirkstoff.',
      'Zugelassen bei pulmonaler arterieller Hypertonie (Lungenhochdruck); verbessert die Belastbarkeit.',
      'Sehr lange Wirkdauer erlaubt eine niedrige tägliche Dosierung.',
      'Diskutierte Verbesserung der zerebralen Durchblutung; Bevölkerungsdaten deuten auf ein möglicherweise geringeres Demenzrisiko unter PDE5-Hemmern hin (Korrelation, kein Beweis).',
      'Mögliche entzündungsdämpfende Effekte im Prostatagewebe (präklinisch).'
    ],
    risks: [
      'Wichtig: nicht zusammen mit Nitraten (Herzmedikamente) – Gefahr eines starken Blutdruckabfalls; Vorsicht auch mit Blutdrucksenkern.',
      'Häufig harmlos: Kopfschmerz, Gesichtsröte, verstopfte Nase.',
      'Verschreibungspflichtig – am besten über Arzt und Apotheke (geprüfte Qualität).'
    ],
    status: 'In DE/EU als Arzneimittel zugelassen (u.a. Cialis), verschreibungspflichtig – der sichere Weg führt über Arzt und Apotheke.',
    sources: [
      { title: 'StatPearls (NIH) – Tadalafil: Wirkmechanismus & zugelassene Anwendungen', url: 'https://www.ncbi.nlm.nih.gov/books/NBK603743/' },
      { title: 'Yokoyama et al. 2015 – Tadalafil bei BPH-LUTS (Übersicht & Mechanismus)', url: 'https://pubmed.ncbi.nlm.nih.gov/26425140/' },
      { title: 'ETLAS-2 (Stroke 2025) – Tadalafil, Hirndurchblutung & Kognition bei Kleingefäßerkrankung', url: 'https://www.ahajournals.org/doi/10.1161/STROKEAHA.125.051602' }
    ],
    community: [
      { title: 'Verschreibungspflichtig – über Arzt & Apotheke beziehen (geprüfte Qualität, Beratung zu Wechselwirkungen)', url: 'https://www.gelbe-liste.de/wirkstoffe/Tadalafil_23331' },
      { title: 'Particle Peptides (Research – nur Grauzone, keine Empfehlung)', url: 'https://particlepeptides.com/en/16-buy-peptides' },
      { title: 'biolabshop (Research – nur Grauzone, keine Empfehlung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'Tadalafil: Sexpille fürs Gehirn? Prostata, Blutdruck & Kopf im Faktencheck',
        audio: 'audio/tadalafil-podcast.mp3',
        spotify: '4m6SNKGcaneh9bA0VfC0c5',
        lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Trennt Zugelassenes (Erektion, Prostata/BPH, Lungenhochdruck) vom Vorläufigen (Gehirn/Demenz – biologisch plausibel, aber die PASTIS-Studie war nicht überzeugend) und betont die kritische Nitrat-Warnung. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig, bitte ärztlich abklären.',
        sources: [
          { title: 'StatPearls (NIH) – Tadalafil', url: 'https://www.ncbi.nlm.nih.gov/books/NBK603743/' },
          { title: 'PASTIS-Studie (Alz. & Dementia 2022) – PDE5-Hemmer bei zerebraler Kleingefäßerkrankung', url: 'https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12559' },
          { title: 'Tadalafil & alternde Gehirn-Gefäße – Evidenzüberblick', url: 'https://shanghaiarchivesofpsychiatry.org/en/214067.html' }
        ]
      }
    ]
  },
  {
    id: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1 (TA1)',
    altNames: 'Zadaxin, Thymalfasin',
    class: 'Immunmodulatorisches Peptid (28 Aminosäuren)',
    emoji: '🛡️',
    short: 'Das am besten belegte Immun-Peptid dieser Liste: als Zadaxin klinisch zugelassen, stärkt es gezielt die Abwehr und wirkt zugleich ausgleichend – anregend bei Schwäche, beruhigend bei Überaktivierung.',
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
      'Als Zadaxin in mehreren Ländern zugelassen; in DE/EU (noch) nicht frei verfügbar.',
      'Bei TH1-dominierten Autoimmunerkrankungen am besten mit ärztlicher Rücksprache.',
      'Frei bezogene Ware auf Qualität und Sterilität prüfen.'
    ],
    status: 'Als Zadaxin in Italien, China, Indien u.a. zugelassen (Hepatitis). In DE/USA noch nicht zugelassen.',
    sources: [
      { title: 'Costantini C et al., Clin Microbiol Rev 2019 – TA1 mechanism', url: 'https://pubmed.ncbi.nlm.nih.gov/30728200/' },
      { title: 'Liu Y et al., Clin Infect Dis 2020 – Thymosin Alpha-1 in COVID-19', url: 'https://pubmed.ncbi.nlm.nih.gov/32442256/' }
    ],
    community: [
      { title: 'Peptide Therapies – Thymosin Alpha-1 Übersicht', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Thymosin")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'KI-Podcast: Thymosin Alpha-1 – das Immun-Peptid mit Zulassung',
        audio: 'audio/thymosin-alpha-1-podcast.mp3',
        spotify: '11QZafzo2jGgDsOl3xxA11',
        lengthLabel: '≈ 6 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'The Hunter Williams Podcast – How Thymosin Alpha 1 Supercharges Your Immune System', url: 'https://open.spotify.com/episode/5Inu125eta0bSTQ7AWdY8N' },
          { title: 'Der Optimizer – Thymosin Alpha-1 & Thymulin (Deutsch)', url: 'https://open.spotify.com/episode/4U3Ahy6POe7Js8ZyRx684S' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/1IVXJBNOAH80HCowX4Soot' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/1M0R88M2B7ljeslKHwuJVg' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/0VbHRK7AzYhIhFVTbCxEbO' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/0B4cpdxgOA85IAPLGiipsH' }
        ]
      }
    ]
  },
  {
    id: 'rapamycin',
    name: 'Rapamycin (Sirolimus)',
    altNames: 'Sirolimus, Rapamune',
    class: 'mTORC1-Inhibitor',
    emoji: '🔬',
    short: 'Eines der spannendsten Longevity-Moleküle überhaupt: als Sirolimus zugelassen und das Pharmakon mit den stärksten Lebensverlängerungs-Daten in Säugern – in der Longevity-Szene niedrig dosiert und gepulst diskutiert.',
    moa: 'Bindet FKBP12, blockiert die mTORC1-Kinase. mTORC1-Hemmung simuliert Kalorienrestriktion und aktiviert Autophagie.',
    benefits: [
      'Verlängert Lebensspanne bei Mäusen (+9–14%, auch bei spätem Start)',
      'Verbessert Immunfunktion bei Älteren (Mannick-Studie)',
      'Reduziert seneszente Zellen und altersbedingte Inflammation',
      'Eingesetzt off-label in Longevity-Praxen (1–6 mg/Woche pulsed)'
    ],
    risks: [
      'Longevity-Nutzung ist Off-Label – am schönsten mit erfahrenem Arzt.',
      'Bei Dauergabe immundämpfend; gepulste Protokolle sollen das mildern.',
      'Blutzucker und Blutfette im Blick behalten.'
    ],
    status: 'Als Sirolimus (Rapamune) zugelassen (Transplantation). Longevity-Einsatz Off-Label – ärztlich begleiten.',
    sources: [
      { title: 'Harrison DE et al., Nature 2009 – Rapamycin extends lifespan in mice', url: 'https://www.nature.com/articles/nature08221' },
      { title: 'Mannick JB et al., Sci Transl Med 2014 – mTOR inhibition immunity elderly', url: 'https://pubmed.ncbi.nlm.nih.gov/25540326/' },
      { title: 'PEARL Study (Rapamycin Longevity Trial)', url: 'https://classic.clinicaltrials.gov/ct2/show/NCT04488601' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'GANNIKUS-Podcast Iron Mike (Peptide & Longevity)', url: 'https://open.spotify.com/episode/354pFKeLOvDiRrh4AjbyKg' }
    ],
    podcasts: [
      {
        title: 'Rapamycin – die Kurzfolge: mTOR, Osterinsel & Longevity in 4 Minuten',
        audio: 'audio/rapamycin-kurzfolge.mp3',
        spotify: '27E8KrXjumCspX3wHKxw64',
        lengthLabel: '≈ 4 Min · KI-Kurzfolge (Paul & Paula, ElevenLabs Pro-Stimme)',
        note: 'Kompakte KI-Kurzfolge mit realistischen Stimmen (neue Pro-Stimme). In vier Minuten: woher Rapamycin (Sirolimus) kommt, wie es über den mTOR-Schalter das zelluläre Aufräumen (Autophagie) anstößt, warum es die stärksten Lebensverlängerungs-Daten in Säugern hat – und der ehrliche Rahmen: off-label, verschreibungspflichtig, Human-Beweis steht aus. Reine Information, kein medizinischer Rat.'
      }
    ]
  },
  {
    id: 'metformin',
    name: 'Metformin',
    altNames: 'Glucophage, Siofor',
    class: 'Biguanid / AMPK-Aktivator (indirekt)',
    emoji: '🔵',
    short: 'Der bewährte, extrem günstige Diabetes-Klassiker mit Longevity-Bonus: aktiviert AMPK wie Sport und Fasten – die TAME-Studie prüft aktuell den Anti-Aging-Effekt am Menschen.',
    moa: 'Hemmt mild den mitochondrialen Komplex I → AMPK-Aktivierung, mTOR-Hemmung, verbesserte Insulinsensitivität.',
    benefits: [
      'In Beobachtungsstudien längere Lebenserwartung bei Diabetikern',
      'Reduziert Krebsinzidenz (Beobachtungs-Daten)',
      'Verbessert Insulinsensitivität, kardiovaskuläre Risiken',
      'Sehr günstig & langjährig sicher'
    ],
    risks: [
      'Verschreibungspflichtig; die Longevity-Nutzung ist Off-Label.',
      'Anfangs manchmal Magen-Darm-Themen; bei Langzeitgabe auf Vitamin B12 achten.',
      'Kann Trainingszuwächse etwas bremsen.'
    ],
    status: 'In DE für Typ-2-Diabetes zugelassen; Longevity-Nutzung Off-Label.',
    sources: [
      { title: 'Bannister CA et al., Diabetes Obes Metab 2014 – mortality', url: 'https://pubmed.ncbi.nlm.nih.gov/25041462/' },
      { title: 'TAME-Studie (Targeting Aging with Metformin)', url: 'https://www.afar.org/tame-trial' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'GANNIKUS-Podcast Iron Mike', url: 'https://open.spotify.com/episode/354pFKeLOvDiRrh4AjbyKg' }
    ],
    podcasts: [
      {
        title: 'Metformin: Diabetes-Klassiker als Anti-Aging-Hoffnung im Faktencheck',
        audio: 'audio/metformin-podcast.mp3',
        spotify: '4CQMxRGnxLMeTqnvn6uH2B',
        lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Solides, billiges, zugelassenes Diabetes-Medikament, das über den AMPK-Schalter dieselben Alterns-Signalwege anspricht wie Sport/Fasten. Aber: Longevity bei Gesunden ist Hypothese (TAME-Studie noch offen, ~2026/27), mit realer Kehrseite – Metformin kann Trainings-/Muskelgewinne bremsen. Plus B12-Mangel-Risiko. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig.',
        sources: [
          { title: 'Bannister et al. 2014 – Mortalität unter Metformin (Beobachtungsdaten)', url: 'https://pubmed.ncbi.nlm.nih.gov/25041462/' },
          { title: 'TAME-Studie – Targeting Aging with Metformin (AFAR)', url: 'https://www.afar.org/tame-trial' },
          { title: 'Metformin & Muskelaufbau/Sarkopenie – therapeutisches Paradox (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12938515/' }
        ]
      }
    ]
  },
  {
    id: 'cagrilintide',
    name: 'Cagrilintide / CagriSema',
    altNames: 'NN9838',
    class: 'Amylin-Analog (Cagri) / Amylin+GLP-1 Combo (CagriSema)',
    emoji: '🧬',
    short: 'Ein Long-acting Amylin-Analogon, allein oder als CagriSema mit Semaglutid kombiniert – zwei Sättigungssysteme in einer Spritze, in Phase 3 mit über 20% Gewichtsverlust und guter Verträglichkeit.',
    moa: 'Amylin-Rezeptor-Agonist: verlangsamt Magenentleerung, reduziert Glucagon-Sekretion, dämpft Appetit komplementär zu GLP-1.',
    benefits: [
      'CagriSema in Phase 3: ~22% Gewichtsverlust (REDEFINE-1)',
      'Bessere Verträglichkeit als hochdosiertes Semaglutide',
      'Synergie mit GLP-1 – glattere Gewichtskurve',
      'Möglicher Vorteil gegen Sarkopenie unter Diät'
    ],
    risks: [
      'Noch in der Zulassungsphase (FDA-Antrag Ende 2025) – aktuell nur ungeprüfte Research-Ware.',
      'Bei Diabetes auf Unterzuckerung achten; sonst meist milde Magen-Darm-Effekte.',
      'Langzeitdaten stehen noch aus.'
    ],
    status: 'Phase 3 (Novo Nordisk), Zulassung um 2026 erwartet. Noch nicht regulär verfügbar.',
    sources: [
      { title: 'Lau DCW et al., Lancet 2021 – Cagrilintide + Semaglutide Phase 1b', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01751-7/fulltext' },
      { title: 'REDEFINE Studienreihe (Phase 3)', url: 'https://classic.clinicaltrials.gov/ct2/show/NCT05567796' }
    ],
    community: [
      { title: 'biolabshop (Cagrilintide-Forschungspeptid)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      {
        title: 'Cagrilintid & CagriSema: Der noch nicht zugelassene Abnehm-Kandidat im Faktencheck',
        audio: 'audio/cagrilintide-podcast.mp3',
        spotify: '0FG5QGQkSFNJouyuKroNIL',
        lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Amylin-Analogon (Cagrilintid) + GLP-1 (Semaglutid) = CagriSema, zwei Sättigungs-Systeme in einer Spritze. REDEFINE-1: >20% Gewichtsverlust – stark, aber knapp unter den Erwartungen. Der Kernpunkt: NOCH NICHT zugelassen (FDA-Antrag Dez. 2025, Prüfung 2026) → alles am Graumarkt ist unbewiesene Research-Ware, oft als DIY-CagriSema selbst gemixt. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'REDEFINE-1 – Cagrilintid+Semaglutid: >20% Gewichtsverlust', url: 'https://www.appliedclinicaltrialsonline.com/view/cagrilintide-semaglutide-weight-loss' },
          { title: 'Novo Nordisk – FDA-Zulassungsantrag für CagriSema (Dez. 2025)', url: 'https://www.biospace.com/press-releases/novo-nordisk-files-for-fda-approval-of-cagrisema-the-first-once-weekly-combination-of-glp-1-and-amylin-analogues-for-weight-management' }
        ]
      }
    ]
  },
  {
    id: 'enclomiphene',
    name: 'Enclomiphen',
    altNames: 'Enclomiphene Citrate, Isomer von Clomifen',
    class: 'Selektiver Östrogenrezeptor-Modulator (SERM), TRT-Alternative',
    emoji: '⚗️',
    short: 'Die beliebte TRT-Alternative in Tablettenform: hebt das körpereigene Testosteron an und erhält dabei die Fruchtbarkeit – in Studien normalisierte es den Testosteronspiegel bei rund 73 % der Männer.',
    moa: 'Enclomiphen ist das reine trans-Isomer von Clomifen und wirkt als selektiver Östrogenrezeptor-Modulator (SERM). Es blockiert Östrogen-Rezeptoren im Hypothalamus/der Hypophyse, wodurch mehr LH und FSH ausgeschüttet werden – die Hoden produzieren daraufhin mehr eigenes Testosteron. Anders als klassische TRT (die die eigene Produktion und Spermienbildung unterdrückt) erhält Enclomiphen die Fruchtbarkeit und die Hodenfunktion. Deshalb ist es v.a. bei sekundärem Hypogonadismus und bei Kinderwunsch beliebt.',
    benefits: [
      'Hebt das EIGENE Testosteron – ohne Spritze, als Tablette.',
      'Erhält Fruchtbarkeit und Hodenvolumen (im Gegensatz zur klassischen TRT).',
      'Normalisierte in Studien den Testosteronspiegel bei ~73 % (sekundärer Hypogonadismus).',
      'Sauberer als älteres Clomifen (nur das aktive Isomer, weniger Nebenwirkungen).'
    ],
    risks: [
      'Verschreibungspflichtig – gehört ärztlich begleitet (Blutwerte, Östradiol).',
      'Mögliche Nebenwirkungen: Sehstörungen (selten), Stimmungsschwankungen, Kopfschmerzen.',
      'Wirkt nur bei intakter Hypothalamus-Hypophysen-Hoden-Achse (sekundärer Hypogonadismus).',
      'In DE nicht breit zugelassen – Bezug oft über Graumarkt (ungeprüft).'
    ],
    status: 'In den USA als Off-Label-/Compounding-Option verbreitet; in DE nicht breit zugelassen. Verschreibungspflichtig.',
    sources: [
      { title: 'FormBlends – hCG vs. Enclomiphen: Fruchtbarkeit', url: 'https://formblends.com/articles/trt-hub/hcg-vs-enclomiphene-fertility-preservation' },
      { title: 'Peptides.org – Men Hormone Optimization', url: 'https://www.peptidejournal.org/guides/mens-hormone-optimization-peptides-complete-guide' }
    ],
    community: [
      { title: 'ExcelMale – Community-Diskussionen zu Hormonoptimierung', url: 'https://www.excelmale.com/' }
    ]
  },
  {
    id: 'kisspeptin',
    name: 'Kisspeptin-10',
    altNames: 'KP-10, Metastin-Fragment',
    class: 'Hypothalamisches Neuropeptid (10 Aminosäuren), Hormonachsen-Trigger',
    emoji: '🔗',
    short: 'Der oberste Schalter der Hormonachse: ein körpereigenes Peptid, das ganz oben im Hypothalamus ansetzt und die natürliche Testosteron-/Fruchtbarkeitskaskade anstößt – spannend, aber noch investigativ.',
    moa: 'Kisspeptin ist ein natürliches Neuropeptid und der zentrale Startknopf der Fortpflanzungsachse: Es stimuliert im Hypothalamus die Ausschüttung von GnRH, was wiederum LH und FSH aus der Hypophyse freisetzt und so die körpereigene Testosteron- bzw. Sexualhormonproduktion anregt. Weil es an der obersten Stelle der Kaskade wirkt, gilt es als besonders „physiologischer" Ansatz. Untersucht wird es u.a. für Libido, Fruchtbarkeit und als Baustein aggressiver Hormon-Restart-Protokolle (Kisspeptin für den Hypothalamus, Gonadorelin für die Hypophyse, hCG für die Hoden).',
    benefits: [
      'Setzt ganz oben an der Hormonachse an – regt die eigene Produktion physiologisch an.',
      'Untersucht für Libido und sexuelle Erregung (bei Männern und Frauen).',
      'Potenzieller Baustein zum Fruchtbarkeitserhalt/Hormon-Restart.',
      'Körpereigenes Peptid mit kurzer Wirkung, gut steuerbar.'
    ],
    risks: [
      'Investigativ – nicht für die Hormonoptimierung zugelassen, wenig Langzeitdaten am Menschen.',
      'Optimale Dosierung/Protokolle sind nicht etabliert.',
      'Nicht als Arzneimittel zugelassen; Research-Ware auf Reinheit achten.',
      'Hormonelle Eingriffe gehören ärztlich begleitet.'
    ],
    status: 'Forschungssubstanz; nicht als Arzneimittel für die Hormonoptimierung zugelassen.',
    sources: [
      { title: 'Peptides.org – Best hCG Alternatives (Kisspeptin, Gonadorelin)', url: 'https://www.peptides.org/best-hcg-alternatives/' },
      { title: 'RedFox – hCG vs. Kisspeptin-10 für TRT/Fruchtbarkeit', url: 'https://www.redfoxpeptides.is/hcg-vs-kisspeptin-10-for-trt-fertility/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'gonadorelin',
    name: 'Gonadorelin',
    altNames: 'GnRH, LHRH, Gonadorelin-Acetat',
    class: 'GnRH-Analogon (Gonadotropin-Releasing-Hormon)',
    emoji: '🧬',
    short: 'Die moderne hCG-Alternative: ein GnRH-Analogon, das die Hypophyse zur Ausschüttung von LH und FSH anregt – beliebt, um unter TRT die Hoden aktiv und die Fruchtbarkeit erhalten zu halten.',
    moa: 'Gonadorelin ist die synthetische Form des körpereigenen GnRH und wirkt eine Ebene tiefer als Kisspeptin: Es stimuliert direkt die Hypophyse, LH und FSH auszuschütten, was die Hoden zur Testosteron- und Spermienproduktion anregt. Wichtig ist die pulsatile Gabe – eine dauerhafte Stimulation würde die Hypophyse abstumpfen lassen (Downregulation). In der Praxis ersetzt es häufig hCG, um unter TRT das Hodenvolumen und die Fruchtbarkeit zu erhalten.',
    benefits: [
      'Hält die Hoden unter TRT aktiv – erhält Volumen und Fruchtbarkeit.',
      'Moderne, kurzwirksame Alternative zu hCG.',
      'Regt die eigene LH/FSH- und Testosteronproduktion an.',
      'Gut in bestehende Hormonprotokolle integrierbar.'
    ],
    risks: [
      'Muss pulsatil dosiert werden – Dauergabe führt zur Downregulation (Gegenteil des Effekts).',
      'Verschreibungspflichtig; Hormonprotokolle ärztlich begleiten.',
      'Mögliche lokale Reaktionen an der Einstichstelle.',
      'Graumarkt-Ware auf Reinheit/Sterilität achten.'
    ],
    status: 'Als Diagnostikum/Arzneimittel bekannt; die TRT-Begleitnutzung ist meist off-label/Compounding. Verschreibungspflichtig.',
    sources: [
      { title: 'Peptides.org – Best hCG Alternatives (Gonadorelin)', url: 'https://www.peptides.org/best-hcg-alternatives/' },
      { title: 'PeptideJournal – Men Hormone Optimization with Peptides', url: 'https://www.peptidejournal.org/guides/mens-hormone-optimization-peptides-complete-guide' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'hcg',
    name: 'hCG (humanes Choriongonadotropin)',
    altNames: 'Human Chorionic Gonadotropin, Pregnyl, Ovitrelle',
    class: 'Gonadotropin (LH-Mimetikum)',
    emoji: '🧬',
    short: 'Der bewährte Klassiker zum Hodenerhalt: hCG ahmt LH nach und regt die Hoden direkt zur Testosteron- und Spermienproduktion an – Standard beim Fruchtbarkeitserhalt unter TRT.',
    moa: 'hCG bindet an den LH-Rezeptor der Hoden und imitiert so das luteinisierende Hormon (LH). Dadurch produzieren die Hoden weiter eigenes Testosteron und Spermien – auch dann, wenn die körpereigene LH-Ausschüttung (z.B. unter TRT) unterdrückt ist. Deshalb ist hCG der klassische Weg, um unter Testosterontherapie Hodenvolumen und Fruchtbarkeit zu erhalten oder eine unterdrückte Achse wieder anzustoßen.',
    benefits: [
      'Erhält unter TRT Hodenvolumen und Fruchtbarkeit (direkt an den Hoden)',
      'Bewährter, gut verstandener Klassiker',
      'Regt die eigene Testosteron-/Spermienproduktion an',
      'Auch in der Fruchtbarkeitsmedizin etabliert'
    ],
    risks: [
      'Verschreibungspflichtig; Hormonprotokolle ärztlich begleiten',
      'Kann Östrogen anheben (Aromatisierung) – ggf. Kontrolle nötig',
      'Bei Dauergabe mögliche Desensibilisierung der Hoden',
      'Graumarkt-Ware auf Reinheit/Sterilität achten'
    ],
    status: 'Als Arzneimittel zugelassen (Fruchtbarkeit); die TRT-Begleitnutzung ist off-label. Verschreibungspflichtig.',
    sources: [
      { title: 'Peptides.org – Best hCG Alternatives (Kontext hCG)', url: 'https://www.peptides.org/best-hcg-alternatives/' },
      { title: 'LIVV Natural – TRT & Fertility', url: 'https://livvnatural.com/trt-and-fertility-how-to-maintain-sperm-health/' }
    ],
    community: [
      { title: 'ExcelMale – Community zu Hormonoptimierung', url: 'https://www.excelmale.com/' }
    ]
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    altNames: 'GRF 1-29, GHRH(1-29)',
    class: 'GHRH-Analogon (Wachstumshormon-Releasing-Hormon-Fragment)',
    emoji: '📈',
    short: 'Der sanfte GH-Klassiker: ein kurzes GHRH-Fragment, das die Hirnanhangsdrüse zu natürlichen Wachstumshormon-Pulsen anregt – mild und gut steuerbar, beliebt als Einstieg.',
    moa: 'Sermorelin entspricht den ersten 29 Aminosäuren des GHRH und stimuliert die Hypophyse zur pulsatilen Ausschüttung von Wachstumshormon (GH). Weil die körpereigene Rückkopplung (Somatostatin) erhalten bleibt, gilt es als besonders physiologischer Ansatz und milder als langwirksame Analoga. Historisch als Diagnostikum genutzt, in der Anti-Aging-Szene für Schlaf, Regeneration und Körperkomposition.',
    benefits: [
      'Regt die eigene, natürliche GH-Ausschüttung an (erhaltene Rückkopplung)',
      'Mild und gut steuerbar – beliebter Einstieg in GH-Peptide',
      'Kann Schlafqualität und Regeneration verbessern',
      'Oft mit einem GHRP kombiniert für stärkere Pulse'
    ],
    risks: [
      'Nur kurze Wirkdauer – tägliche (abendliche) Gabe nötig',
      'Leichte Wassereinlagerung/Kribbeln möglich; im Sport verboten',
      'Nicht breit als Arzneimittel verfügbar; Research-Ware auf Reinheit achten'
    ],
    status: 'Früher als Arzneimittel/Diagnostikum; heute überwiegend Compounding/Research. In DE nicht breit zugelassen.',
    sources: [
      { title: 'PeptideDeck – Best Growth Hormone Peptides 2026', url: 'https://www.peptidedeck.com/peptides/best-growth-hormone-peptides-2026' },
      { title: 'Sigalos & Pastuszak 2018 – Review Anti-Aging-Peptide', url: 'https://pubmed.ncbi.nlm.nih.gov/28676436/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'mots-c',
    name: 'MOTS-c',
    altNames: 'Mitochondrial-derived peptide',
    class: 'Mitochondriales Peptid (16 Aminosäuren, kodiert in mtDNA)',
    emoji: '🧬',
    short: 'Ein mitochondriales „Trainings-Peptid": aktiviert AMPK – denselben Schalter wie Sport und Metformin – für Energiestoffwechsel, Insulinsensitivität und Ausdauer.',
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
      'Evidenz überwiegend präklinisch; große Humanstudien fehlen noch.',
      'Kann den Blutzucker senken – in Kombination mit Antidiabetika beachten.',
      'Im Wettkampfsport auf der WADA-Liste.'
    ],
    status: 'Forschungs-Peptid, noch nicht zugelassen.',
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
        spotify: '0QdJ0uUCvxloFqJVXLIWre',
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
  {
    id: 'epitalon',
    name: 'Epitalon (Epithalon)',
    altNames: 'Epithalamin, AEDG-Tetrapeptid',
    class: 'Tetrapeptid (Ala-Glu-Asp-Gly), Pinealdrüsen-Mimetikum',
    emoji: '🌙',
    short: 'Ein Zirbeldrüsen-Tetrapeptid, das Telomerase aktiviert und die Melatonin-Bildung anregt – die Anti-Aging-Story rund um Telomere und besseren Schlaf, die die Longevity-Szene fasziniert.',
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
      'Zentrale Humandaten stammen v.a. aus einer russischen Forschungsgruppe; unabhängige Bestätigung ist noch dünn.',
      'Als Research-Ware auf Reinheit achten; nicht als Arzneimittel zugelassen.'
    ],
    status: 'Forschungs-Peptid; außerhalb Russlands nicht zugelassen.',
    sources: [
      { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epitalon & telomere length', url: 'https://pubmed.ncbi.nlm.nih.gov/14760439/' },
      { title: 'Anisimov VN et al., Mech Ageing Dev 2003 – lifespan in mice', url: 'https://pubmed.ncbi.nlm.nih.gov/12694675/' }
    ],
    community: [
      { title: 'Peptide Therapies – inkl. Epitalon', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Epitalon")', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      {
        title: 'Epitalon: Telomer-Verlängerung als Anti-Aging im Faktencheck',
        audio: 'audio/epitalon-podcast.mp3',
        spotify: '3fwqZGKZCED0D8iimUNcnm',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 24) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche zur verlockenden Telomerase-/Telomer-Story: auf Zellebene gibt es Daten (inkl. unabhängiger Replikation 2025), beim Menschen fehlt der belastbare Beweis fast völlig (kleine, unverblindete russische Studien). Plus die offene Krebsfrage bei einem Telomerase-Aktivator und der Melatonin-/Schlaf-Bezug. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epitalon & Telomerlänge', url: 'https://pubmed.ncbi.nlm.nih.gov/14760439/' },
          { title: 'Al-Dulaimi et al., Biogerontology 2025 – unabhängige Replikation der Telomer-Verlängerung (Zellen)', url: 'https://link.springer.com/article/10.1007/s10522-025-10315-x' }
        ]
      }
    ]
  },
  {
    id: 'selank',
    name: 'Selank',
    altNames: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro, Tuftsin-Analogon',
    class: 'Synthetisches Tuftsin-Analogon (Heptapeptid), Anxiolytikum',
    emoji: '🌿',
    short: 'Ein russisches Tuftsin-Peptid, das angstlösend und stabilisierend wirkt – ganz ohne die Sedierung und das Abhängigkeitspotenzial klassischer Beruhigungsmittel.',
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
      'Evidenz überwiegend aus Russland; die große internationale Bestätigung steht aus.',
      'In DE/EU nicht zugelassen; als Research-Ware auf Qualität achten.'
    ],
    status: 'In Russland registriert; in DE/EU nicht zugelassen.',
    sources: [
      { title: 'Zozulya et al., Bull Exp Biol Med 2008 – Selank bei generalisierter Angststörung', url: 'https://pubmed.ncbi.nlm.nih.gov/19240853/' },
      { title: 'Kolomin et al., J Psychopharmacol 2013 – Selank und Genexpression', url: 'https://pubmed.ncbi.nlm.nih.gov/22832761/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'Selank: Angst lösen ohne Benzo-Nebenwirkungen? Das russische Peptid im Faktencheck',
        audio: 'audio/selank-podcast.mp3',
        spotify: '4aVYSN3bbxyUtzXsLmzNGg',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula, ElevenLabs-Stimmen)',
        note: 'KI-generierte deutsche Folge mit realistischen Stimmen (ElevenLabs), inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet die vielversprechende, aber überwiegend russische Studienlage ein: in Russland als Angst-Medikament zugelassen, mildes Sicherheitsprofil – die große internationale Bestätigung steht aber noch aus. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – in Deutschland nicht als Arzneimittel zugelassen.',
        sources: [
          { title: 'Zozulya et al., Bull Exp Biol Med 2008 – Selank bei generalisierter Angststörung', url: 'https://pubmed.ncbi.nlm.nih.gov/19240853/' },
          { title: 'Kolomin et al., J Psychopharmacol 2013 – Selank und Genexpression', url: 'https://pubmed.ncbi.nlm.nih.gov/22832761/' }
        ]
      }
    ]
  },
  {
    id: 'semax',
    name: 'Semax',
    altNames: 'ACTH(4-7)-Pro-Gly-Pro',
    class: 'Synthetisches ACTH-Fragment-Analogon (Heptapeptid), Nootropikum',
    emoji: '🧠',
    short: 'Ein in Russland entwickeltes Nootropikum-Peptid, das BDNF/NGF anhebt und neuroprotektiv untersucht wird – intranasal angewendet und dort als gut verträglich beschrieben.',
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
      'Evidenz stammt fast nur aus Russland; unabhängige Bestätigung ist dünn.',
      'In DE/EU nicht zugelassen; als Research-Ware auf Reinheit achten.'
    ],
    status: 'In Russland registriert; in DE/EU nicht zugelassen.',
    sources: [
      { title: 'Kaplan et al., Restor Neurol Neurosci 2002 – Semax und neurotrophe Faktoren', url: 'https://pubmed.ncbi.nlm.nih.gov/12454361/' },
      { title: 'Gusev et al., Cerebrovasc Dis 2011 – Semax bei ischämischem Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/21654167/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'Semax: Russisches Nootropikum im Faktencheck',
        audio: 'audio/semax-podcast.mp3',
        spotify: '4pI0U5nmVsezSLZIvy74iw',
        lengthLabel: '≈ 9 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge mit den Hosts Paul und Paula, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet die echte russische Zulassung/Studienlage (BDNF, Schlaganfall) gegen die Grenzen ein: Evidenz fast nur aus Russland, für den Nootropikum-Einsatz bei Gesunden dünn, N-Acetyl-Varianten kaum untersucht, bei uns Graumarkt. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Kaplan et al., Restor Neurol Neurosci 2002 – Semax und neurotrophe Faktoren (BDNF/NGF)', url: 'https://pubmed.ncbi.nlm.nih.gov/12454361/' },
          { title: 'Gusev et al., Cerebrovasc Dis 2011 – Semax bei ischämischem Schlaganfall (RCT)', url: 'https://pubmed.ncbi.nlm.nih.gov/21654167/' }
        ]
      }
    ]
  },
  {
    id: 'cerebrolysin',
    name: 'Cerebrolysin',
    altNames: 'FPF-1070, neurotrophes Peptidgemisch',
    class: 'Neurotrophes Peptid-Präparat (aus Schweinehirn-Hydrolysat)',
    emoji: '🧠',
    short: 'Das Nootropikum-Peptid mit der stärksten klinischen Evidenz: ein Gemisch neurotropher Peptide mit mehreren Phase-3-Studien zu Alzheimer und Schlaganfall – in mehreren Ländern als Medikament zugelassen.',
    moa: 'Cerebrolysin ist ein standardisiertes Hydrolysat aus Schweinehirn und enthält niedermolekulare neurotrophe Peptide, die die Wirkung körpereigener Wachstumsfaktoren (wie BDNF, GDNF) nachahmen sollen. Es soll das Überleben von Nervenzellen fördern, die Bildung neuer Synapsen unterstützen und neuroprotektiv gegen Schädigung wirken. Anders als die meisten „Biohacking-Peptide" wurde es in echten, großen klinischen Studien untersucht – mit der besten Evidenzbasis aller Nootropika-Peptide. Verabreicht wird es klassisch als Infusion/Injektion.',
    benefits: [
      'Stärkste klinische Evidenz aller Nootropika-Peptide (Phase-3-Studien zu Alzheimer und Schlaganfall-Reha).',
      'In mehreren Ländern als Arzneimittel zugelassen.',
      'Wirkt neurotrop/neuroprotektiv – unterstützt Nervenzellen und Synapsen.',
      'Wird für kognitive Erholung nach Schlaganfall und bei Demenz eingesetzt.'
    ],
    risks: [
      'In DE/EU nicht als Arzneimittel zugelassen – Bezug meist über Graumarkt.',
      'Als Injektion/Infusion: Anwendungs-, Infektions- und Fehldosier-Risiken.',
      'Selten allergische Reaktionen möglich (tierisches Hydrolysat).',
      'Effektstärke bei Gesunden (Biohacking) ist weniger belegt als bei Erkrankungen.'
    ],
    status: 'In mehreren Ländern (u.a. Russland, Asien) als Arzneimittel zugelassen. In DE/EU nicht zugelassen.',
    sources: [
      { title: 'Outliyr – Best Nootropic Brain Peptides 2026', url: 'https://outliyr.com/nootropic-brain-peptides' },
      { title: 'PeptideDeck – Best Peptides for Cognitive Function 2026', url: 'https://www.peptidedeck.com/blog/best-peptides-for-cognitive-function' }
    ],
    community: [
      { title: 'Peptides.nyc – Cognitive Health Peptides', url: 'https://peptides.nyc/learn/goal/cognitive' }
    ]
  },
  {
    id: 'pentadeca-arginate',
    name: 'Pentadeca Arginate (PDA)',
    altNames: 'PDA, BPC-157 Arginat-Salz, Pentadecapeptid-Arginat',
    class: 'Synthetisches Pentadecapeptid (stabilisierte BPC-157-Weiterentwicklung)',
    emoji: '🩹',
    short: 'Der 2025/26-Nachfolger von BPC-157: dieselbe 15-Aminosäuren-Idee zur Geweberegeneration, aber als Arginat-Salz stabiler – in der Heilungs-Szene stark im Kommen.',
    moa: 'Pentadeca Arginate ist eng mit BPC-157 verwandt (dasselbe 15-Aminosäuren-Grundgerüst), liegt aber als Arginat-Salz vor, was es chemisch stabiler und potenziell besser haltbar/bioverfügbar machen soll. Der postulierte Wirkmechanismus entspricht BPC-157: Förderung der Zellwanderung und Gefäßneubildung (Angiogenese), entzündungsmodulierende Effekte und Unterstützung der Heilung von Sehnen, Bändern, Muskel und Magen-Darm-Schleimhaut. Wichtig: Die Datenlage stammt fast ausschließlich aus BPC-157-Studien (überwiegend Tiermodelle) und Anwenderberichten; eigenständige Studien zu PDA fehlen weitgehend.',
    benefits: [
      'Stabilere Arginat-Form – soll Haltbarkeit und Verträglichkeit gegenüber BPC-157 verbessern.',
      'Gleiche regenerative Idee: Sehnen, Bänder, Muskel, Magen-Darm (überwiegend aus BPC-157-Daten).',
      'Fördert (im Modell) Gefäßneubildung und Geweberegeneration.',
      'Keine hormonelle Wirkung.'
    ],
    risks: [
      'Eigenständige Studien zu PDA fehlen fast völlig – Wirkung ist aus BPC-157 extrapoliert.',
      'Nicht als Arzneimittel zugelassen; reine Research-/Graumarkt-Ware (Reinheit ungewiss).',
      'Im Wettkampfsport wie BPC-157 als nicht zugelassene Substanz kritisch (WADA S0).',
      'Langzeitsicherheit unbekannt; theoretisches Risiko über die gefäßfördernde Wirkung.'
    ],
    status: 'Neues Forschungs-Peptid, nicht zugelassen. Evidenz weitgehend aus BPC-157 abgeleitet.',
    sources: [
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' },
      { title: 'PeptideCase – Top 10 Research Peptides 2026', url: 'https://peptidecase.com/blog/top-10-research-peptides-2026' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'ss-31',
    name: 'SS-31 (Elamipretide)',
    altNames: 'Elamipretide, MTP-131, Bendavia',
    class: 'Mitochondrial gerichtetes, cardiolipin-bindendes Tetrapeptid (Szeto-Schiller-Peptid)',
    emoji: '⚡',
    short: 'Ein mitochondrien-gezieltes Peptid, das an Cardiolipin bindet und die Energie-Kraftwerke stabilisiert – und eines der wenigen mit echter klinischer Erprobung, 2025 in den USA fürs Barth-Syndrom zugelassen.',
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
      'Die Zulassung gilt nur fürs seltene Barth-Syndrom; für Anti-Aging fehlt der Beleg.',
      'Einige Endpunktstudien verfehlten ihr Ziel.',
      'In DE/EU regulär nicht zugelassen; Graumarkt-Ware ist nicht das Medikament.'
    ],
    status: 'In DE/EU nicht regulär zugelassen; in den USA 2025 nur fürs Barth-Syndrom zugelassen.',
    sources: [
      { title: 'Szeto, Br J Pharmacol 2014 – Mitochondrial gerichtete Peptide und Wirkmechanismus von SS-31', url: 'https://pubmed.ncbi.nlm.nih.gov/24328896/' },
      { title: 'Reid Thompson et al., Genet Med 2021 – Elamipretide beim Barth-Syndrom (klinische Studie)', url: 'https://pubmed.ncbi.nlm.nih.gov/33298753/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'SS-31: Das FDA-zugelassene Mitochondrien-Peptid – im Faktencheck',
        audio: 'audio/ss-31-podcast.mp3',
        spotify: '5cmnTVvn29gYiC0UDdyN0A',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 26) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche. Der ehrliche Kern: SS-31 (Elamipretide/FORZINITY) bekam im September 2025 tatsächlich eine FDA-Zulassung – die erste für eine Mitochondrien-Krankheit überhaupt, aber nur für das seltene Barth-Syndrom, NICHT für Anti-Aging/Energie bei Gesunden. Bei Herzschwäche gemischte Bilanz (Hauptendpunkte verfehlt), Longevity-Einsatz unbewiesen, und die Community dosiert einen Mini-Bruchteil der Studien-Menge (≈500 µg vs. 40 mg). Graumarkt-Ampulle ≠ zugelassenes Medikament. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Szeto, Br J Pharmacol 2014 – Wirkmechanismus von SS-31 (Cardiolipin)', url: 'https://pubmed.ncbi.nlm.nih.gov/24328896/' },
          { title: 'FDA Accelerated Approval Elamipretide/FORZINITY 2025 (Barth-Syndrom)', url: 'https://www.fightaging.org/archives/2025/10/fda-approval-for-mitochondrial-therapeutic-elamipretide-formerly-ss-31/' }
        ]
      }
    ]
  },
  {
    id: 'slu-pp-332',
    name: 'SLU-PP-332',
    altNames: '"Exercise mimetic"',
    class: 'ERR (Estrogen-Related Receptor) α/β/γ-Agonist',
    emoji: '🏃',
    short: 'Ein „Sport-Mimetikum": Es aktiviert die zellulären Energie-Schalter (ERR) und ahmt so molekular Effekte von Ausdauertraining nach – im Tiermodell mehr Ausdauer und Fettabbau, ganz ohne Laufband.',
    moa: 'Selektiver Agonist der Estrogen-Related Receptors (ERRα, β, γ) – Transkriptionsfaktoren, die mitochondriale Biogenese und Fettoxidation hochregulieren.',
    benefits: [
      'Erhöht Ausdauer in Mäusen ohne Training (+45–50%)',
      'Reduziert Fettmasse, verbessert Glukose-Toleranz',
      'Erhöht oxidative Muskelfasern Typ I',
      'Potenzial gegen Sarkopenie und Stoffwechselerkrankungen'
    ],
    risks: [
      'Noch reine Forschung – Humanstudien fehlen bislang.',
      'Langzeitwirkung noch offen; als Research-Ware auf Qualität achten.'
    ],
    status: 'Frühe präklinische Forschung; noch keine Anwendung am Menschen zugelassen.',
    sources: [
      { title: 'Billon C et al., Nature Metabolism 2024 – SLU-PP-332 endurance', url: 'https://www.nature.com/articles/s42255-024-01059-y' },
      { title: 'Pharmakologische Charakterisierung ERR-Agonisten', url: 'https://pubmed.ncbi.nlm.nih.gov/37563174/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'Dosing SLU-PP-332 + Retatrutide', url: 'https://www.youtube.com/shorts/T6smpOkB4m0' },
      { title: 'biolabshop (Suche „SLU-PP-332")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'KI-Podcast: SLU-PP-332 – „Sport in der Spritze"?',
        audio: 'audio/slu-pp-332-podcast.mp3',
        spotify: '78sborgd6xvQKQVOI9Qu8m',
        lengthLabel: '≈ 8 Min · Deutsch · 2 KI-Stimmen',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Nur Information – keine medizinische Beratung, keine Anwendungsempfehlung.',
        sources: [
          { title: 'Peptide of The Week – SLU-PP-332: Fat Burn, Endurance', url: 'https://open.spotify.com/episode/4njZIXekQ9KgMLJsKBr58I' },
          { title: 'The Hunter Williams Podcast – SLU-PP-332 Dosage Update', url: 'https://open.spotify.com/episode/5lgJO2L08XJnkiTUSSHQnV' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/2sBfi0qEVnQVWEwYox6ouo' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/7pO3L22D0kWQbmnvHXUNLz' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/6OJ4FMAtEx8jau6nKmrf6y' }
        ]
      }
    ]
  },
  {
    id: '5-amino-1mq',
    name: '5-Amino-1MQ',
    altNames: '5-Amino-1-Methylquinolinium',
    class: 'NNMT-Inhibitor (Nicotinamid-N-Methyltransferase)',
    emoji: '⚗️',
    short: 'Hemmt das Stoffwechsel-Enzym NNMT und hebt damit den zellulären NAD+-Spiegel – ein spannender Ansatz für Fettabbau, Muskelregeneration und gesundes Altern.',
    moa: 'Selektive Hemmung der Nicotinamid-N-Methyltransferase (NNMT). NNMT-Überaktivität ist mit Fettleibigkeit und Sarkopenie assoziiert. Hemmung erhöht NAD+ und Methylgruppen-Pool.',
    benefits: [
      'Reduziert Fettmasse in adipösen Mäusen (-7% in 11 Tagen)',
      'Erhöht muskuläres NAD+, verbessert Regeneration',
      'Verbessert Insulinsensitivität präklinisch',
      'Möglicher Anti-Aging-Mechanismus'
    ],
    risks: [
      'Bisher nur präklinische Daten, noch keine Humanstudien.',
      'Als Forschungssubstanz auf Reinheit und Dosierung achten.'
    ],
    status: 'Präklinische Forschung; noch nicht zugelassen.',
    sources: [
      { title: 'Neelakantan H et al., Biochem Pharmacol 2018 – 5-Amino-1MQ in obesity', url: 'https://pubmed.ncbi.nlm.nih.gov/29307490/' },
      { title: 'Neelakantan H et al., Sci Rep 2019 – muscle regeneration', url: 'https://www.nature.com/articles/s41598-019-46666-y' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Suche „5-Amino-1MQ")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'KI-Podcast: 5-Amino-1MQ – der NNMT-Hemmer, der Fett über Energieverbrauch angeht',
        audio: 'audio/5-amino-1mq-podcast.mp3',
        spotify: '71gD9FHwpfiLoCfy8BjgTy',
        lengthLabel: '≈ 15 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser (Folge 8). Frische KI-Dialogfolge (Paul & Paula) mit Fachrecherche: eleganter NAD+- und SAM-Mechanismus, Fettverlust über mehr Energieverbrauch, Muskel/Kraft, Longevity – plus ehrlicher Reality-Check (Tierdaten, keine reifen Humanstudien, Graumarkt). Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Peptide of The Week – 5-Amino-1MQ', url: 'https://open.spotify.com/episode/0RPGxM1H0gS8MDwXBVYUzw' },
          { title: 'The Hunter Williams Podcast – 5-Amino-1MQ', url: 'https://open.spotify.com/episode/5XcHZpVLizSlmsoCjNJwQq' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/2jwvG4DQ5ugvDRHp6eQJ62' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/110TpqttgUPRR6QGnKZYK8' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/4VPXGE9vptqGXjiB3Wb0fI' }
        ]
      }
    ]
  },
  {
    id: 'tesofensin',
    name: 'Tesofensine',
    altNames: 'NS2330',
    class: 'Triple Monoamin-Reuptake-Inhibitor (Noradrenalin, Dopamin, Serotonin)',
    emoji: '🧪',
    short: 'Ursprünglich für Alzheimer entwickelt, zeigt dieser Dreifach-Botenstoff-Hebel in Studien deutliche Gewichtsabnahme und starke Appetitkontrolle – in Mexiko bereits als Adipositas-Mittel zugelassen.',
    moa: 'Hemmt die Wiederaufnahme von Noradrenalin, Dopamin und Serotonin im Gehirn. Steigert Sättigungsgefühl und reduziert Hungerempfinden.',
    benefits: [
      '10–11% Gewichtsverlust in 24 Wochen Phase-2-Studie',
      'Stärkere Reduktion als Sibutramin (vom Markt) oder Orlistat',
      'Verbessert Insulinresistenz',
      'In Mexiko unter dem Namen "Tesomet" für Adipositas zugelassen (Saniona)'
    ],
    risks: [
      'Kann Blutdruck und Puls anheben – Herz-Kreislauf gehört daher im Blick.',
      'Möglich sind Mundtrockenheit, Schlaf- oder Stimmungseffekte.',
      'In DE/EU noch nicht zugelassen (Phase 3 läuft).'
    ],
    status: 'In Mexiko zugelassen (Saniona), in EU/USA in Phase 3. Bei uns noch nicht erhältlich.',
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
        title: 'KI-Podcast: Tesofensine – der Zufalls-Fund als Abnehm-Tablette (mit Tesomet-Trick)',
        audio: 'audio/tesofensine-podcast.mp3',
        spotify: '4tCUWipyMuwsmSQ2foeKBV',
        lengthLabel: '≈ 15 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser. KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Bei uns nicht als Arzneimittel zugelassen; wirkt auf Herz-Kreislauf – im Zweifel ärztlich abklären.'
      }
    ]
  },
  {
    id: 'amycretin',
    name: 'Amycretin',
    altNames: 'GLP-1/Amylin-Doppelagonist (Novo Nordisk)',
    class: 'GLP-1- und Amylin-Rezeptor-Agonist in einem Molekül',
    emoji: '💉',
    short: 'Der nächste große Abnehm-Kandidat von Novo Nordisk: kombiniert GLP-1 und Amylin in einem einzigen Molekül – als Tablette UND als Spritze in Phase 3, mit Aussicht auf noch stärkere Effekte.',
    moa: 'Amycretin aktiviert gleichzeitig den GLP-1-Rezeptor (Sättigung, Insulin, verzögerte Magenentleerung) und den Amylin-Rezeptor (zusätzliche, komplementäre Sättigung). Zwei Sättigungssysteme in einem Molekül – ähnlich der Idee hinter CagriSema, aber vereint. Entwickelt wird sowohl eine orale als auch eine injizierbare Form; frühe Studien zeigten sehr deutliche Gewichtsverluste, die aktuell in Phase 3 bestätigt werden sollen.',
    benefits: [
      'Doppelmechanismus (GLP-1 + Amylin) – potenziell stärkere Wirkung als reine GLP-1-Mittel.',
      'Sowohl oral als auch injizierbar in Entwicklung.',
      'Frühe Studien mit ausgeprägtem Gewichtsverlust.',
      'Ein Molekül statt Kombipräparat – einfacheres Handling.'
    ],
    risks: [
      'Noch in der klinischen Prüfung (Phase 3) – nicht zugelassen und nicht regulär verfügbar.',
      'Aus der Klasse bekannt: Übelkeit/Verdauungsthemen v.a. zu Beginn.',
      'Langzeitdaten stehen aus; am Graumarkt gehandelte Ware ist ungeprüft.'
    ],
    status: 'Phase 3 (Novo Nordisk). Noch nicht zugelassen.',
    sources: [
      { title: 'Drug Discovery News – GLP-1 Pipeline 2026 (Amycretin)', url: 'https://www.drugdiscoverynews.com/glp-1-agonist-clinical-pipeline-2026-semaglutide-tirzepatide-and-what-s-in-phase-2-17286' },
      { title: 'Meto – Next-Generation GLP-1 Drugs 2026', url: 'https://meto.co/blog/next-generation-glp-1-drugs-2026' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'survodutide',
    name: 'Survodutide',
    altNames: 'BI 456906',
    class: 'GLP-1 / Glucagon Dual-Agonist',
    emoji: '💉',
    short: 'Doppelagonist von Boehringer/Zealand: kombiniert GLP-1 und Glucagon – stark beim Gewicht und mit besonderem Fokus auf die Fettleber (MASH).',
    moa: 'Survodutide aktiviert den GLP-1-Rezeptor (Sättigung, Insulin) und den Glucagon-Rezeptor (mehr Energieverbrauch, direkte Wirkung in der Leber). Diese Kombination senkt nicht nur das Gewicht, sondern adressiert gezielt Leberfett und -entzündung – daher der starke MASH-Fokus (nicht-alkoholische Fettleber). Aktuell in Phase 3 für Adipositas und Lebererkrankung.',
    benefits: [
      'Deutlicher Gewichtsverlust über den GLP-1/Glucagon-Doppelmechanismus',
      'Starke Wirkung auf Leberfett und -entzündung (MASH-Studien vielversprechend)',
      'Glucagon-Komponente hebt den Energieverbrauch',
      'Nur 1× wöchentlich (in Entwicklung)'
    ],
    risks: [
      'Noch in Phase 3 – nicht zugelassen, nicht regulär verfügbar',
      'Klassentypische Magen-Darm-Effekte v.a. beim Eindosieren',
      'Langzeitdaten stehen aus; Graumarkt-Ware ungeprüft'
    ],
    status: 'Phase 3 (Boehringer Ingelheim / Zealand Pharma). Noch nicht zugelassen.',
    sources: [
      { title: 'Drug Discovery News – GLP-1 Pipeline 2026', url: 'https://www.drugdiscoverynews.com/glp-1-agonist-clinical-pipeline-2026-semaglutide-tirzepatide-and-what-s-in-phase-2-17286' },
      { title: 'Meto – Next-Generation Metabolic Drugs 2026', url: 'https://meto.co/blog/next-generation-glp-1-drugs-2026' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'maritide',
    name: 'MariTide (Maridebart Cafraglutide)',
    altNames: 'AMG 133',
    class: 'GIP-Rezeptor-Antagonist + GLP-1-Agonist (Peptid-Antikörper-Konjugat)',
    emoji: '💉',
    short: 'Amgens Kandidat mit ungewöhnlichem Ansatz: GLP-1-Agonist plus GIP-BLOCKADE – und der große Vorteil, nur einmal im Monat gespritzt zu werden.',
    moa: 'MariTide ist ein Peptid-Antikörper-Konjugat, das den GLP-1-Rezeptor aktiviert und gleichzeitig den GIP-Rezeptor BLOCKIERT (Antagonist) – interessanterweise das Gegenteil von Tirzepatid, führt aber ebenfalls zu starkem Gewichtsverlust. Durch die lange Wirkdauer reicht eine Injektion pro Monat. In Phase 2 zeigte sich anhaltender Gewichtsverlust ohne das übliche schnelle Plateau.',
    benefits: [
      'Nur 1× MONATLICH statt wöchentlich – deutlich seltenere Injektion',
      'Starker, anhaltender Gewichtsverlust in Phase 2',
      'Neuartiger Mechanismus (GLP-1-Agonismus + GIP-Antagonismus)',
      'Wenig „Rebound"-Plateau in den bisherigen Daten'
    ],
    risks: [
      'Noch in klinischer Prüfung (Phase 3) – nicht zugelassen',
      'Klassentypische Magen-Darm-Effekte',
      'Langzeitsicherheit offen; Graumarkt-Ware ungeprüft'
    ],
    status: 'Phase 3 (Amgen). Noch nicht zugelassen.',
    sources: [
      { title: 'Meto – Next-Generation GLP-1 Drugs 2026 (MariTide)', url: 'https://meto.co/blog/next-generation-glp-1-drugs-2026' },
      { title: 'GoodRx – New Weight Loss Drugs', url: 'https://www.goodrx.com/conditions/weight-loss/new-weight-loss-drugs' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'mazdutide',
    name: 'Mazdutide',
    altNames: 'IBI362, LY3305677',
    class: 'GLP-1 / Glucagon Dual-Agonist',
    emoji: '💉',
    short: 'GLP-1/Glucagon-Doppelagonist, der in China bereits die Zulassung erreicht hat – mit zusätzlichem Fokus auf Leber und Stoffwechsel.',
    moa: 'Mazdutide ist ein Doppelagonist an GLP-1- und Glucagon-Rezeptoren (abgeleitet von Oxyntomodulin). GLP-1 zügelt den Appetit, die Glucagon-Komponente steigert den Energieverbrauch und wirkt günstig auf Leberfett und Lipide. In China wurde es 2025/26 für Adipositas/Diabetes zugelassen; westliche Zulassungen stehen aus.',
    benefits: [
      'In China bereits zugelassen (Adipositas/Diabetes)',
      'Deutlicher Gewichtsverlust plus günstige Leber-/Lipidwerte',
      'Glucagon-Anteil hebt den Energieverbrauch',
      'Wöchentliche Gabe'
    ],
    risks: [
      'In DE/EU/USA nicht zugelassen',
      'Klassentypische Magen-Darm-Effekte',
      'Außerhalb Chinas nur ungeprüfte Graumarkt-Ware'
    ],
    status: 'In China zugelassen (Innovent/Eli Lilly); in DE/EU nicht zugelassen.',
    sources: [
      { title: 'Meto – Next-Generation GLP-1 Drugs 2026', url: 'https://meto.co/blog/next-generation-glp-1-drugs-2026' },
      { title: 'Drug Discovery News – GLP-1 Pipeline 2026', url: 'https://www.drugdiscoverynews.com/glp-1-agonist-clinical-pipeline-2026-semaglutide-tirzepatide-and-what-s-in-phase-2-17286' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    altNames: 'Long R3 IGF-1, Insulin-like Growth Factor 1 LR3',
    class: 'Langwirksames IGF-1-Analogon (Wachstumsfaktor)',
    emoji: '💪',
    short: 'Der potente, direkt wirkende Muskel-Wachstumsfaktor: eine langwirksame IGF-1-Variante – kraftvoll in der Bodybuilding-Szene, aber mit ernstem Risikoprofil.',
    moa: 'IGF-1 LR3 ist eine chemisch veränderte, langwirksame Form des Insulin-like Growth Factor 1 (dem Vermittler vieler GH-Effekte). Es bindet weniger an Bindeproteine und bleibt dadurch deutlich länger aktiv. Es fördert direkt Zellwachstum, Proteinsynthese und Muskel-Hyperplasie/Hypertrophie. Wegen der direkten, starken Wachstumswirkung wird es in der Muskelaufbau-Szene genutzt – birgt aber deutliche Risiken.',
    benefits: [
      'Fördert direkt Muskelwachstum (Proteinsynthese, Zellteilung)',
      'Langwirksam – anhaltender IGF-1-Reiz',
      'Kann die Regeneration von Gewebe unterstützen'
    ],
    risks: [
      'Ernstes Profil: IGF-1 fördert generelles Zellwachstum – theoretisches Krebsrisiko, besonders bei bestehenden Tumoren',
      'Unterzuckerung (insulinähnliche Wirkung), Organwachstum bei Überdosierung',
      'Nicht zugelassen, im Wettkampfsport verboten; Graumarkt-Ware ungeprüft',
      'Nur mit großer Vorsicht und Sachkenntnis – hohe Missbrauchsgefahr'
    ],
    status: 'Kein zugelassenes Arzneimittel; Forschungssubstanz, im Sport verboten.',
    sources: [
      { title: 'PeptideDeck – Muscle-Growth Peptides 2026', url: 'https://www.peptidedeck.com/peptides/best-growth-hormone-peptides-2026' },
      { title: 'Musculoskeletal Key – Best Peptides for Muscle Growth 2026', url: 'https://musculoskeletalkey.com/best-peptides-for-muscle-growth-2026-top-options-and-where-to-source-them/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'follistatin',
    name: 'Follistatin / Myostatin-Hemmer',
    altNames: 'Follistatin-344, ACE-031, Myostatin-Inhibitoren',
    class: 'Myostatin-Blocker (Muskelwachstum durch Wegfall der „Muskelbremse")',
    emoji: '💪',
    short: 'Die „Muskelbremse lösen": Follistatin und verwandte Stoffe blockieren Myostatin – den körpereigenen Begrenzer des Muskelwachstums. Sehr potent, aber hochexperimentell.',
    moa: 'Myostatin ist ein körpereigener Faktor, der das Muskelwachstum bremst. Follistatin bindet und neutralisiert Myostatin (und verwandte Faktoren wie Activin), wodurch die Bremse wegfällt und Muskelmasse zunehmen kann – Tiere mit blockiertem Myostatin zeigen enorme Muskelberge. Verwandte Ansätze (ACE-031, monoklonale Antikörper) zielen auf denselben Signalweg. Beim Menschen ist das überwiegend experimentell; einige Programme wurden wegen Nebenwirkungen gestoppt.',
    benefits: [
      'Kann Muskelmasse deutlich steigern (Wegfall der Myostatin-Bremse)',
      'Untersucht bei Muskelschwund-Erkrankungen (z.B. Muskeldystrophie)',
      'Wirkt unabhängig von Hormonen/Testosteron'
    ],
    risks: [
      'Hochexperimentell – kaum belastbare Humandaten; Gentherapie-Varianten besonders riskant',
      'Frühere Programme (z.B. ACE-031) wegen Nebenwirkungen (Blutungen, Gefäße) gestoppt',
      'Nicht zugelassen, im Sport verboten; Graumarkt-Ware höchst unsicher',
      'Langzeitfolgen völlig unklar'
    ],
    status: 'Experimentell / Forschung; nicht zugelassen, im Sport verboten.',
    sources: [
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' },
      { title: 'Follistatin & Myostatin – Übersicht (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'ghrp-2',
    name: 'GHRP-2',
    altNames: 'Pralmorelin, KP-102, GHRP2',
    class: 'Synthetisches Wachstumshormon-Sekretagogum (Hexapeptid, Ghrelin-Rezeptor-Agonist)',
    emoji: '💪',
    short: 'Ein synthetisches Peptid, das über den Ghrelin-Rezeptor die pulsatile Ausschüttung von körpereigenem Wachstumshormon anregt – potent und gut charakterisiert.',
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
      'Kann Appetit, Prolaktin und Cortisol leicht anheben.',
      'Nicht als Arzneimittel zugelassen; im Wettkampfsport verboten.',
      'Als Forschungssubstanz auf Reinheit achten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; Forschungssubstanz.',
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
    short: 'Das erste klassische GH-Peptid: regt die Wachstumshormon-Ausschüttung an und steigert deutlich den Appetit – historisch die Leitstruktur der ganzen Klasse.',
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
      'Deutliche Appetitsteigerung und leichte Wassereinlagerung möglich.',
      'Kann Cortisol/Prolaktin anheben; nicht zugelassen, im Sport verboten.',
      'Forschungssubstanz – auf Qualität achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
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
    short: 'Eines der potentesten GH-Peptide der GHRP-Reihe – mit zusätzlich untersuchten, herzschützenden Effekten im Tiermodell.',
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
      'Bei häufiger Gabe lässt die GH-Antwort nach (Gewöhnung).',
      'Kann Cortisol/Prolaktin leicht anheben; nicht zugelassen, im Sport verboten.',
      'Forschungssubstanz – auf Reinheit achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
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
    short: 'Ein stabilisiertes GHRH-Analog, das die eigene Wachstumshormon-Ausschüttung schön pulsatil anregt – meist elegant mit einem GHRP kombiniert.',
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
      'Meist milde lokale Reaktionen oder leichte Wassereinlagerung.',
      'Als GH-Stimulator den Blutzucker im Blick behalten; im Sport verboten.',
      'Nicht zugelassen; Forschungssubstanz – auf Qualität achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Ionescu & Frohman, J Clin Endocrinol Metab 2006 – Pulsatile vs. kontinuierliche GH-Sekretion durch GHRH-Analoga', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' },
      { title: 'Teichman et al., J Clin Endocrinol Metab 2006 – Pharmakokinetik von CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'Mod GRF 1-29 (CJC-1295 ohne DAC): Der Wachstumshormon-Puls im Faktencheck',
        audio: 'audio/mod-grf-1-29-podcast.mp3',
        spotify: '2QVSWQ1gUwtRm7ExnhVHHf',
        lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. GHRH-Analogon, das die Hirnanhangsdrüse zu einem kurzen, natürlichen GH-Puls anregt. Zentral: der Unterschied „mit vs. ohne DAC" (kurz/pulsatil vs. tagelang erhöht). Wirkprinzip real (zugelassener Verwandter: Tesamorelin), aber für Anti-Aging/Muskel bei Gesunden kaum belegt; GH-Klassen-Risiken (Blutzucker, IGF-1), WADA-verboten, Graumarkt. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Ionescu & Frohman 2006 – pulsatile vs. kontinuierliche GH-Sekretion (GHRH-Analoga)', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' },
          { title: 'Teichman et al. 2006 – Pharmakokinetik CJC-1295 (DAC)', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
        ]
      }
    ]
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    altNames: 'Anti-Obesity Drug 9604, HGH-Fragment 176-191 (modifiziert)',
    class: 'Modifiziertes Wachstumshormon-Fragment (lipolytisches Peptidfragment)',
    emoji: '🔥',
    short: 'Ein Wachstumshormon-Fragment, das gezielt auf Fettabbau ausgelegt wurde – ohne die klassischen GH-Effekte auf Blutzucker und IGF-1, mit gutem Kurzzeit-Sicherheitsprofil.',
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
      'Die große Humanstudie verfehlte ihren Abnehm-Endpunkt – die Wirkung beim Menschen ist offen.',
      'Nicht zugelassen; Forschungssubstanz – auf Reinheit achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Entwicklung nach Phase 2 eingestellt.',
    sources: [
      { title: 'Ng et al., Diabetes Obes Metab 2000 – Lipolytische Wirkung des GH-Fragments AOD-9604', url: 'https://pubmed.ncbi.nlm.nih.gov/11225653/' },
      { title: 'Heffernan et al., Endocrinology 2001 – Effekte von AOD9604 auf den Fettstoffwechsel', url: 'https://pubmed.ncbi.nlm.nih.gov/11713208/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'AOD-9604: Der „saubere Fatburner" im Faktencheck',
        audio: 'audio/aod-9604-podcast.mp3',
        spotify: '07ERvc8IuGfiucQuhRJ7al',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 9) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche. Elegantes Konzept (das Fett-Endstück des Wachstumshormons ohne IGF-1) und erstaunlich gute Sicherheit über ~900 Studien-Teilnehmer – aber die große Phase-2-Humanstudie verfehlte ihren Gewichtsverlust-Endpunkt (getestet als Tablette, evtl. ein Bioverfügbarkeits-Problem). Fazit: wahrscheinlich harmlos, aber unbewiesen wirksam; im Sport ein Doping-Reizthema (Essendon). Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Ng et al., Diabetes Obes Metab 2000 – Lipolytische Wirkung des GH-Fragments AOD-9604', url: 'https://pubmed.ncbi.nlm.nih.gov/11225653/' },
          { title: 'Heffernan et al., Endocrinology 2001 – AOD-9604 & Beta-3-Adrenozeptoren im Fettgewebe', url: 'https://pubmed.ncbi.nlm.nih.gov/11713208/' },
          { title: 'Metabolic Pharmaceuticals – Phase-2b-Adipositas-Studie (verfehlter Endpunkt)', url: 'https://www.biospace.com/metabolic-pharmaceuticals-s-obesity-trial-update-first-100-subjects-complete-the-phase-2b-trial-of-aod9604' },
          { title: 'WADA-Statement zu AOD-9604 (Verbotsliste)', url: 'https://www.wada-ama.org/en/news/wada-statement-substance-aod-9604' }
        ]
      }
    ]
  },
  {
    id: 'kpv',
    name: 'KPV',
    altNames: 'Lysin-Prolin-Valin, alpha-MSH(11-13), Lys-Pro-Val',
    class: 'Tripeptid, C-terminales alpha-MSH-Fragment, entzündungshemmend',
    emoji: '🛡️',
    short: 'Ein kurzes Tripeptid aus dem alpha-MSH: im Modell fein entzündungsregulierend und antimikrobiell – spannend v.a. rund um Darm- und Hautthemen.',
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
      'Bislang präklinisch; kontrollierte Humanstudien fehlen.',
      'Nicht zugelassen; als Research-Ware auf Reinheit achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
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
        spotify: '0mPFUWG5UTnN6DWL7GUtoQ',
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
    short: 'Der körpereigene Abwehr-Klassiker: das einzige menschliche Cathelicidin mit breiter antimikrobieller Wirkung und einer Rolle in Immunmodulation und Wundheilung.',
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
      'Zweischneidig: im Überschuss kann es Entzündungen (z.B. Psoriasis/Rosazea) fördern.',
      'Bislang v.a. präklinische Daten; nicht zugelassen.',
      'Als Research-Ware auf Reinheit achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Vandamme et al., Cell Immunol 2012 – Übersicht zu LL-37 und Immunmodulation', url: 'https://pubmed.ncbi.nlm.nih.gov/23178275/' },
      { title: 'Dürr et al., Biochim Biophys Acta 2006 – Struktur und antimikrobielle Funktion von LL-37', url: 'https://pubmed.ncbi.nlm.nih.gov/16716248/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'LL-37: Körpereigenes Abwehr-Peptid – oder Entzündungstreiber?',
        audio: 'audio/ll-37-podcast.mp3',
        spotify: '2zTo5WktERW0Wnik3223ti',
        lengthLabel: '≈ 9 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge mit den Hosts Paul und Paula, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der ehrliche Kern: LL-37 ist ein zweischneidiges Schwert – körpereigenes Cathelicidin mit breiter Abwehrwirkung, aber im Überschuss ein gut belegter Treiber von Psoriasis und Rosazea. Biohacking-Versprechen (Schimmel, Borreliose, Leaky Gut) stammen aus Zell-/Tierdaten, nicht aus Humanstudien. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Vandamme et al., Cell Immunol 2012 – LL-37 & Immunmodulation', url: 'https://pubmed.ncbi.nlm.nih.gov/23178275/' },
          { title: 'Cathelicidin LL-37 – Rolle bei entzündlichen Hautkrankheiten (Psoriasis/Rosazea)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3346901/' },
          { title: 'LL-37 treibt Rosazea-artige Hautentzündung NLRP3-abhängig', url: 'https://www.sciencedirect.com/science/article/pii/S0022202X21010095' }
        ]
      }
    ]
  },
  {
    id: 'dsip',
    name: 'DSIP',
    altNames: 'Delta Sleep-Inducing Peptide, Delta-Schlaf-induzierendes Peptid',
    class: 'Neuropeptid (Nonapeptid), endogen',
    emoji: '😴',
    short: 'Ein körpereigenes „Schlaf-Peptid": seit den 1970ern bekannt und mit Schlafregulation sowie der Stressachse in Verbindung gebracht – sanft und gut verträglich beschrieben.',
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
      'Mechanismus noch unklar; belastbare Humanstudien fehlen weitgehend.',
      'Nicht zugelassen; als Research-Ware auf Qualität achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Graf & Kastin, Neurosci Biobehav Rev 1984 – DSIP: Ein Überblick', url: 'https://pubmed.ncbi.nlm.nih.gov/6152762/' },
      { title: 'Kovalzon & Strekalova, Neurosci Behav Physiol 2006 – Schlaf und DSIP', url: 'https://pubmed.ncbi.nlm.nih.gov/16645768/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'DSIP: Das Schlafpeptid im Faktencheck',
        audio: 'audio/dsip-podcast.mp3',
        spotify: '2Cz5bXpDtURKddAZ4MrbTO',
        lengthLabel: '≈ 9 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge mit den Hosts Paul und Paula, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der ehrliche Dreh: seit 1977 bekannt und körpereigen, trägt „Schlaf" im Namen – trotzdem unklarer Mechanismus, dünne und widersprüchliche Humandaten und nie als Schlafmittel zugelassen. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Schneider-Helmert & Schoenenberger – DSIP & menschliches Schlafverhalten', url: 'https://pubmed.ncbi.nlm.nih.gov/6895513/' },
          { title: 'Graf & Kastin, Neurosci Biobehav Rev 1984 – DSIP: Ein Überblick', url: 'https://pubmed.ncbi.nlm.nih.gov/6145137/' }
        ]
      }
    ]
  },
  {
    id: 'oxytocin',
    name: 'Oxytocin',
    altNames: 'Bindungshormon, „Kuschelhormon"',
    class: 'Neuropeptid (9 Aminosäuren), Bindungs-/Sozialhormon',
    emoji: '💗',
    short: 'Das „Bindungshormon": ein körpereigenes Neuropeptid, das Vertrauen, Nähe und Wohlbefinden fördert – in der Szene als Nasenspray für Stimmung und soziale Verbindung genutzt.',
    moa: 'Oxytocin wird im Hypothalamus gebildet und wirkt als Hormon und Botenstoff im Gehirn. Es fördert soziale Bindung, Vertrauen, Empathie und Entspannung und dämpft die Stressachse (Cortisol). Klassisch ist seine Rolle bei Geburt und Stillen. In der Biohacking-Szene wird es als Nasenspray für Stimmung, Nähe und Stressabbau eingesetzt; die Studienlage zu diesen Effekten ist gemischt.',
    benefits: [
      'Fördert Vertrauen, Nähe, Empathie und Wohlbefinden',
      'Kann Stress und Cortisol dämpfen (beruhigend)',
      'Als Nasenspray schnell wirksam',
      'Körpereigenes Peptid mit gutem Kurzzeit-Verträglichkeitsprofil'
    ],
    risks: [
      'Studienlage zu den sozialen/stimmungsbezogenen Effekten ist gemischt',
      'Wirkung oft kurz und kontextabhängig',
      'Als Biohacking-Nasenspray meist Off-Label/Graumarkt (Reinheit beachten)',
      'Vorsicht in der Schwangerschaft (wehenauslösend)'
    ],
    status: 'Als Arzneimittel (Geburtshilfe) zugelassen; die Biohacking-Nasenspray-Nutzung ist off-label.',
    sources: [
      { title: 'Oxytocin – soziale/kognitive Effekte (Review, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3260007/' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'humanin',
    name: 'Humanin',
    altNames: 'HN, HNG (Humanin-Analogon)',
    class: 'Mitochondriales Peptid (MDP), zytoprotektiv',
    emoji: '🧬',
    short: 'Das erste entdeckte mitochondriale Peptid: ein körpereigener Zellschützer, dessen Spiegel mit dem Alter sinkt – korreliert mit Langlebigkeit und schützt Nerven- und Stoffwechselgewebe.',
    moa: 'Humanin ist ein kurzes, in der mitochondrialen DNA kodiertes Peptid (Schwester von MOTS-c) und war das erste entdeckte mitochondriale-derived Peptide (MDP). Es wirkt zytoprotektiv: Es hemmt den programmierten Zelltod (Apoptose), schützt vor oxidativem Stress und verbessert die Insulinsensitivität. Höhere körpereigene Spiegel korrelieren mit Langlebigkeit (u.a. bei Hundertjährigen); die Spiegel sinken mit dem Alter. Das potente Analogon HNG wird in der Forschung genutzt.',
    benefits: [
      'Schützt Zellen vor Stress und programmiertem Zelltod (Apoptose)',
      'Verbessert die Insulinsensitivität (Tier-/Zelldaten)',
      'Neuroprotektiv – untersucht bei Alzheimer-Modellen',
      'Höhere Spiegel korrelieren mit Langlebigkeit (Hundertjährige)'
    ],
    risks: [
      'Evidenz überwiegend präklinisch; kaum Humanstudien zur Supplementierung',
      'Optimale Dosierung/Protokolle nicht etabliert',
      'Nicht zugelassen; sehr experimentelle Research-Ware'
    ],
    status: 'Reines Forschungs-Peptid (MDP); nicht zugelassen.',
    sources: [
      { title: 'Mitochondriale Peptide in Aging & Healthspan (JCI)', url: 'https://www.jci.org/articles/view/158449' },
      { title: 'Humanin & SHLP – Review (Springer)', url: 'https://link.springer.com/article/10.1007/s10989-023-10558-7' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'ara-290',
    name: 'ARA-290 (Cibinetide)',
    altNames: 'Cibinetide, EPO-Derivat-Peptid',
    class: 'Innate-Repair-Rezeptor-Agonist (nicht-erythropoetisches EPO-Fragment)',
    emoji: '🩹',
    short: 'Ein EPO-abgeleitetes Peptid ohne Blutbildungs-Effekt: zielt auf Nervenreparatur und Entzündung – untersucht v.a. bei Nervenschmerz und Neuropathie.',
    moa: 'ARA-290 ist ein kurzes Peptid aus der Helix-B des Erythropoetins (EPO), aber OHNE dessen blutbildende Wirkung. Es aktiviert den „Innate Repair Receptor" und wirkt gewebeschützend und entzündungshemmend, besonders an Nervengewebe. Untersucht wird es vor allem bei kleinen-Faser-Neuropathie (u.a. bei Sarkoidose, Diabetes) zur Linderung von Nervenschmerz und zur Regeneration von Nervenfasern.',
    benefits: [
      'Gezielte Nerven-/Geweberegeneration ohne EPO-typische Blutbildung',
      'Entzündungshemmend und schmerzlindernd bei Neuropathie (Studien)',
      'Untersucht bei kleiner-Faser-Neuropathie und Sarkoidose',
      'Kein Doping-typischer Blutbildungseffekt'
    ],
    risks: [
      'Noch investigativ – begrenzte, wenn auch vielversprechende Humandaten',
      'Nicht als Arzneimittel zugelassen; Research-Ware auf Reinheit achten',
      'Langzeitsicherheit nicht abschließend geklärt'
    ],
    status: 'Investigativ (klinische Studien); nicht zugelassen.',
    sources: [
      { title: 'ARA-290 bei kleiner-Faser-Neuropathie (Studie, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4283549/' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'vip',
    name: 'VIP (Vasoaktives intestinales Peptid)',
    altNames: 'Vasoactive Intestinal Peptide, Aviptadil',
    class: 'Neuropeptid (28 Aminosäuren), immun- und gefäßmodulierend',
    emoji: '🫁',
    short: 'Ein körpereigenes Peptid mit breiter regulierender Wirkung – als Nasenspray bekannt in der CIRS-/Schimmel-Community und für Immun- und Gefäßfunktion untersucht.',
    moa: 'VIP ist ein körpereigenes Neuropeptid, das Gefäße erweitert, Entzündung dämpft und das Immunsystem sowie den Hormonhaushalt moduliert. In der Biohacking-/CIRS-Szene (chronisches Entzündungssyndrom, z.B. nach Schimmelbelastung) wird es als Nasenspray genutzt, um Entzündungswerte zu normalisieren. Medizinisch (als Aviptadil) wurde es u.a. bei Lungenerkrankungen untersucht.',
    benefits: [
      'Entzündungsmodulierend und gefäßerweiternd',
      'In der CIRS-/Schimmel-Community zur Normalisierung von Entzündung genutzt (Nasenspray)',
      'Untersucht bei Lungen-/Immunerkrankungen (als Aviptadil)',
      'Körpereigenes Peptid mit breitem Regulationsprofil'
    ],
    risks: [
      'Human-Evidenz für die Biohacking-Nutzung ist dünn; vieles anekdotisch',
      'Kann Blutdruck senken/Flush auslösen (gefäßerweiternd)',
      'Nicht breit als Arzneimittel zugelassen; Research-Ware auf Reinheit achten',
      'Anwendung idealerweise ärztlich begleitet (v.a. bei CIRS-Protokollen)'
    ],
    status: 'Als Aviptadil in Studien; als Biohacking-Nasenspray Off-Label/Graumarkt. In DE nicht breit zugelassen.',
    sources: [
      { title: 'VIP – Übersicht Funktion & Therapie (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3648697/' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'dihexa',
    name: 'Dihexa',
    altNames: 'N-Hexanoic-Tyr-Ile-(6)-Aminohexanoic-Amid, PNB-0408',
    class: 'Angiotensin-IV-abgeleitetes Nootropikum-Peptid (HGF/c-Met-Verstärker)',
    emoji: '🧠',
    short: 'Ein hochpotentes Synaptogenese-Peptid: soll die Bildung neuer Nervenverbindungen antreiben – faszinierend, aber die Schlüsselstudie wurde zurückgezogen.',
    moa: 'Dihexa ist ein Derivat von Angiotensin IV und verstärkt die Bindung des Wachstumsfaktors HGF an seinen Rezeptor c-Met. In Zellkultur trieb es die Bildung neuer Synapsen (Synaptogenese) im Hippocampus an – in Berichten um ein Vielfaches potenter als BDNF. Untersucht wurde es als möglicher Ansatz bei Alzheimer. Wichtig: Die zentrale Studie wurde zurückgezogen, die Evidenz ist entsprechend eingeschränkt.',
    benefits: [
      'Sehr potente Synaptogenese in Zellmodellen (neue Nervenverbindungen)',
      'Untersucht als möglicher Alzheimer-/Kognitionsansatz',
      'Oral aufnehmbar und blut-hirn-schranken-gängig (Berichte)'
    ],
    risks: [
      'Wichtig: die Schlüsselstudie wurde zurückgezogen – Evidenz stark eingeschränkt',
      'Kaum Humandaten; Langzeitsicherheit unbekannt',
      'Über die c-Met-/Wachstumswirkung theoretisches Zellwachstums-/Krebsrisiko',
      'Nicht zugelassen; Research-Ware höchst unsicher'
    ],
    status: 'Experimentelle Forschungssubstanz; nicht zugelassen. Schlüsselstudie zurückgezogen.',
    sources: [
      { title: 'Outliyr – Best Nootropic Brain Peptides 2026', url: 'https://outliyr.com/nootropic-brain-peptides' },
      { title: 'PeptPedia – Nootropic Peptides (Dihexa)', url: 'https://peptpedia.org/peptide-class/nootropic-peptides' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'p21',
    name: 'P21 (P021)',
    altNames: 'Cerebrolysin-Fragment, CNTF-Mimetikum',
    class: 'Neurotrophes Peptidfragment (Neurogenese-Förderer)',
    emoji: '🧠',
    short: 'Ein kleines, aus Cerebrolysin abgeleitetes Peptid, das die Neubildung von Nervenzellen anregen soll – nootropisch spannend, aber bislang präklinisch.',
    moa: 'P21 ist ein synthetisches Fragment, das die Wirkung des ciliären neurotrophen Faktors (CNTF) nachahmt. Im Tiermodell förderte es – auch intranasal – die Bildung neuer Nervenzellen im Hippocampus (Neurogenese), steigerte BDNF und verbesserte Gedächtnisleistungen. Es gilt als kleineres, stabileres „Destillat" der Cerebrolysin-Idee. Human-Daten fehlen bislang.',
    benefits: [
      'Förderte im Tiermodell die Neurogenese (neue Nervenzellen) im Hippocampus',
      'Steigert BDNF und verbesserte in Studien die Gedächtnisleistung (präklinisch)',
      'Klein und stabil; intranasal wirksam (Tierdaten)'
    ],
    risks: [
      'Bislang rein präklinisch – keine Humanstudien',
      'Langzeitsicherheit unbekannt',
      'Nicht zugelassen; Research-Ware auf Reinheit achten'
    ],
    status: 'Präklinische Forschungssubstanz; nicht zugelassen.',
    sources: [
      { title: 'P21 & Neurogenese (Studie, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3976982/' },
      { title: 'Outliyr – Nootropic Brain Peptides 2026', url: 'https://outliyr.com/nootropic-brain-peptides' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'bronchogen-chonluten',
    name: 'Bronchogen & Chonluten',
    altNames: 'Bronchogen (AEDL, Ala-Glu-Asp-Leu), Chonluten (EDG, Glu-Asp-Gly, T-34), Atemwegs-Bioregulatoren',
    class: 'Khavinson-Bioregulatoren – gewebespezifische Kurzpeptide für Lunge & Atemwege',
    emoji: '🫁',
    short: 'Zwei kurze Lungen-Peptide aus der Khavinson-Schule, die sich schön ergänzen: Chonluten beruhigt Entzündungen, Bronchogen kurbelt die Regeneration des Lungengewebes an – ein eleganter, gewebespezifischer Ansatz für die Atemwege.',
    moa: 'Beide sind kurzkettige „Bioregulator"-Peptide aus der russischen Khavinson-Schule, die gewebespezifisch am Lungen- und Bronchialgewebe ansetzen und epigenetisch wirken sollen: Das kurze Peptid gelangt in die Zelle, bindet an die DNA und moduliert dort die Aktivität von Genen für Reparatur, Entzündung und Zellschutz. Chonluten ist ein Tripeptid (Glu-Asp-Gly, auch „T-34"/EDG) und wirkt vor allem entzündungsregulierend – es dämpft Marker wie TNF und Interleukin-6. Bronchogen ist ein Tetrapeptid (Ala-Glu-Asp-Leu, AEDL, ~446 g/mol) und gilt als DNA-Stabilisator, der die Regeneration von Flimmerepithel und Surfactant fördert und die lokale Abwehr (sekretorisches IgA) unterstützt. In der Szene werden beide oft gestackt. Die Evidenz stammt überwiegend aus der Khavinson-Forschung und aus präklinischen Daten.',
    benefits: [
      'Gewebespezifisch: zielen gezielt auf Lunge/Atemwege und lassen andere Systeme in Ruhe.',
      'Chonluten wirkt entzündungsregulierend (senkt in Studien TNF, IL-6) – untersucht bei chronischer Bronchitis, Asthma und COPD.',
      'Bronchogen fördert die Regeneration: Flimmerepithel, weniger überschüssiger Schleim, mehr Surfactant und lokale Abwehr.',
      'Ergänzen sich als Stack – Chonluten beruhigt, Bronchogen baut auf.',
      'Anwenderberichte über weniger Husten, seltenere Schübe und leichteres Atmen; beliebt nach Infekten (z.B. Post-Corona), bei Ex-Rauchern und für mehr Ausdauer.',
      'Nicht-hormonell und in Studien als gut verträglich beschrieben.'
    ],
    risks: [
      'Evidenz stammt fast nur aus der russischen Khavinson-Schule und aus präklinischen Daten; große unabhängige Studien fehlen.',
      'Viele werbliche Texte im Netz stammen von Shops, die die Peptide verkaufen – kritisch einordnen.',
      'In DE/EU nicht als Arzneimittel zugelassen; laufen als Research-Ware (Reinheit/Dosis nicht garantiert).',
      'Wichtig: Anhaltender Husten oder Kurzatmigkeit gehören ärztlich abgeklärt – nicht in Eigenregie behandeln.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; Khavinson-Bioregulatoren, in Russland teils als Nahrungsergänzung/Peptidpräparat gehandelt. Reine Forschungssubstanzen.',
    sources: [
      { title: 'Jay Campbell – Chonluten Peptide: Uses, Benefits, Dosage (Übersicht)', url: 'https://jaycampbell.com/blog/chonluten-cartilage-peptide/' },
      { title: 'Jay Campbell – Bronchogen Peptide: Uses, Benefits, Dosage (Übersicht)', url: 'https://jaycampbell.com/blog/bronchogen-peptide/' },
      { title: 'Khavinson – Peptide bioregulators (Übersichtsarbeit, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8619776/' }
    ],
    community: [
      { title: 'Reddit r/PeptideGuide – Bronchogen Bioregulator Dosierung', url: 'https://www.reddit.com/r/PeptideGuide/comments/1e5r8zw/bronchogen_bioregulator_dosage/' },
      { title: 'peptide-bioregulator.com – Chonluten (Produktinfo, nur Grauzone)', url: 'https://peptide-bioregulator.com/product/chonluten/' }
    ],
    podcasts: [
      {
        title: 'Bronchogen & Chonluten: Zwei Peptide für die Lunge – die Minifolge',
        audio: 'audio/bronchogen-chonluten-podcast.mp3',
        spotify: '3b8emQB8ibdtFNCIXuiE7U',
        lengthLabel: '≈ 4 Min · KI-Podcast (Paul & Paula, ElevenLabs Pro-Stimme)',
        note: 'KI-generierte deutsche Minifolge mit realistischen Stimmen (ElevenLabs, neue Pro-Stimme). Kompakt erklärt: zwei Khavinson-Lungenpeptide, die sich ergänzen – Chonluten (entzündungsregulierend) und Bronchogen (regenerierend). Positiv, aber ehrlich gerahmt: Die Evidenz stammt überwiegend aus der russischen Khavinson-Forschung und aus präklinischen Daten, viele Quellen sind Verkaufs-Shops, und beide sind bei uns nicht zugelassen (Research-Ware). Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – Atemprobleme bitte ärztlich abklären.',
        sources: [
          { title: 'Jay Campbell – Chonluten (Übersicht)', url: 'https://jaycampbell.com/blog/chonluten-cartilage-peptide/' },
          { title: 'Jay Campbell – Bronchogen (Übersicht)', url: 'https://jaycampbell.com/blog/bronchogen-peptide/' },
          { title: 'Khavinson – Peptide bioregulators (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8619776/' }
        ]
      }
    ]
  },
  {
    id: 'prostamax',
    name: 'Prostamax',
    altNames: 'Prostagen, KEDP (Lys-Glu-Asp-Pro), Prostata-Bioregulator (Khavinson)',
    class: 'Khavinson-Bioregulator – gewebespezifisches Kurzpeptid für die Prostata',
    emoji: '🧬',
    short: 'Ein russisches Bioregulator-Peptid für die Prostata, das BPH- und Prostatitis-Beschwerden über einen epigenetischen Ansatz lindern soll – gewebespezifisch und nicht-hormonell.',
    moa: 'Prostamax ist ein synthetisches Tetrapeptid (Lys-Glu-Asp-Pro) aus der Bioregulator-Schule von Vladimir Khavinson und soll gewebespezifisch im Prostatagewebe wirken. Die postulierte Wirkung ist epigenetisch: Das kurze Peptid soll an die DNA binden, dicht gepackte Chromatin-Bereiche lockern und altersbedingt stillgelegte Gene reaktivieren. Diskutiert werden eine Normalisierung der Androgen-Rezeptor-Expression, eine Dämpfung entzündlicher Zytokine (TNF-alpha, IL-8) im Prostatastroma und die Wiederherstellung der Drüsenzell-Funktion. Die orale Variante Prostagen leitet sich aus Prostata-Gewebeextrakten (Cytamine) ab. Ein Großteil der Evidenz stammt aus Tiermodellen und russischen Anwendungen einer einzigen Forschungsschule.',
    benefits: [
      'In Tiermodellen mit reduzierter Prostata-Entzündung, Schwellung und Vernarbung assoziiert.',
      'Diskutierte Dämpfung entzündlicher Botenstoffe (TNF-alpha, IL-8) im Prostatagewebe.',
      'In russischer Anwendung bei BPH-Beschwerden und chronischer Prostatitis eingesetzt.',
      'Erfahrungsberichte über weniger nächtliches Wasserlassen und besseren Harnfluss.',
      'Gewebespezifischer, nicht-hormoneller Ansatz ohne klassische Hormonwirkung.',
      'In der russischen Anwendung als gut verträglich beschrieben.'
    ],
    risks: [
      'Prostatabeschwerden bitte ärztlich abklären – Selbstbehandlung kann die Krebs-Früherkennung (PSA) verzögern.',
      'Evidenz überwiegend aus Russland/Tiermodellen; für BPH gibt es erprobte, zugelassene Therapien.',
      'Nicht zugelassen; Research-Ware auf Qualität achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Khavinson – Peptide bioregulators & Gerontologie (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/12374906/' },
      { title: 'Muscle&Brawn – Prostamax Bioregulator (Übersicht & Einordnung)', url: 'https://muscleandbrawn.com/peptides/prostamax-bioregulator/' }
    ],
    community: [
      { title: 'Verschreibungspflichtige Behandlung von BPH/Prostatitis: über Urologen abklären', url: 'https://www.gelbe-liste.de/krankheiten/benigne-prostatahyperplasie' },
      { title: 'Particle Peptides (Research – nur Grauzone, keine Empfehlung)', url: 'https://particlepeptides.com/en/16-buy-peptides' },
      { title: 'biolabshop (Research – nur Grauzone, keine Empfehlung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'Prostamax & Prostagen: Bioregulator für die Prostata im Faktencheck',
        audio: 'audio/prostamax-podcast.mp3',
        spotify: '4N70kUgdRUuMwgCYi9TbvG',
        lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet das Khavinson-Bioregulator-Konzept (epigenetische „Verjüngung" der Prostata) gegen die dünne Human-Evidenz ein und betont die besondere Gefahr der Selbstbehandlung: PSA/Prostatakrebs-Früherkennung nicht verschleiern. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – Prostatabeschwerden gehören urologisch abgeklärt.',
        sources: [
          { title: 'Khavinson – Peptide bioregulators (Gerontologie)', url: 'https://pubmed.ncbi.nlm.nih.gov/12374906/' },
          { title: 'Prostamax Bioregulator – Übersicht & Einordnung', url: 'https://muscleandbrawn.com/peptides/prostamax-bioregulator/' }
        ]
      }
    ]
  },
  {
    id: 'melanotan-2',
    name: 'Melanotan 2',
    altNames: 'MT-II, MT-2, Melanotan II',
    class: 'Synthetisches Analogon des alpha-Melanozyten-stimulierenden Hormons (Melanocortin-Rezeptor-Agonist)',
    emoji: '🌞',
    short: 'Ein Melanocortin-Peptid, das die Hautbräunung anregt (oft mit wenig UV) und über MC4R zusätzlich Appetit und Libido beeinflusst – in der Szene für die schnelle Bräune bekannt.',
    moa: 'Melanotan 2 ist ein cyclisches Analogon des alpha-MSH und aktiviert nicht selektiv mehrere Melanocortin-Rezeptoren, insbesondere MC1R und MC4R. Über MC1R stimuliert es die Melanogenese und damit die Bräunung der Haut, häufig ohne UV-Exposition. Die Aktivierung von MC4R beeinflusst zentral Appetit und sexuelle Erregung, was erektionsfördernde Effekte erklären kann. Die breite Rezeptorwirkung ist zugleich Ursache zahlreicher unerwünschter Effekte. Kontrollierte Langzeitstudien zur Sicherheit beim Menschen fehlen.',
    benefits: [
      'Kann eine Verstärkung der Hautpigmentierung auslösen.',
      'In Untersuchungen mit reduzierter benötigter UV-Exposition für Bräunung assoziiert.',
      'Über MC4R mit appetithemmenden Effekten in Verbindung gebracht.',
      'In Berichten mit erektionsfördernder Wirkung assoziiert.',
      'Wirkung tritt in Beobachtungen bereits bei geringen Mengen ein.'
    ],
    risks: [
      'Wichtig: Muttermale können sich verändern/dunkeln – das erschwert die Hautkrebs-Früherkennung; die Haut regelmäßig checken lassen.',
      'Möglich sind Übelkeit/Flush und – selten, aber ernst – eine schmerzhafte Dauererektion (Notfall).',
      'In DE/EU nicht zugelassen; Behörden raten ausdrücklich ab.'
    ],
    status: 'In DE/EU nicht zugelassen; Behörden warnen ausdrücklich vor der Anwendung.',
    sources: [
      { title: 'Langan et al., J Am Acad Dermatol 2010 – Melanotan-assoziierte Nävusveränderungen', url: 'https://pubmed.ncbi.nlm.nih.gov/20605654/' },
      { title: 'Hjuler & Lorentzen, JAMA Dermatol 2014 – Melanom nach Melanotan-Gebrauch', url: 'https://pubmed.ncbi.nlm.nih.gov/24990396/' }
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
    short: 'Ein gezieltes Senolytikum aus der Longevity-Forschung: im Mausmodell räumt es seneszente „Zombie-Zellen" gezielt aus und schont gesunde Zellen – ein faszinierendes Forschungswerkzeug.',
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
      'Rein experimentell – belastbare Humanstudien fehlen komplett.',
      'Der Eingriff in den p53-Weg ist tumorbiologisch heikel; die Anwendung am Menschen ist unerprobt.',
      'Nicht zugelassen; Research-Ware unsicher in Reinheit.'
    ],
    status: 'In DE/EU nicht zugelassen; rein experimentelle Forschungssubstanz.',
    sources: [
      { title: 'Baar et al., Cell 2017 – Gezielte Apoptose seneszenter Zellen durch FOXO4-DRI', url: 'https://pubmed.ncbi.nlm.nih.gov/28340339/' },
      { title: 'Le et al., Front Bioeng Biotechnol 2021 – FOXO4-DRI entfernt seneszente Chondrozyten in vitro', url: 'https://pubmed.ncbi.nlm.nih.gov/34041226/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'senolytic-dq',
    name: 'Dasatinib + Quercetin (Senolytic-Stack)',
    altNames: 'D+Q-Protokoll',
    class: 'Senolytische Kombination (Tyrosinkinase-Inhibitor + Flavonoid)',
    emoji: '🧨',
    short: 'Die klassische „Zombie-Zell-Kur" der Longevity-Forschung: räumt seneszente Zellen gepulst aus dem Gewebe – nur wenige Tage im Monat, mit spannenden ersten Studiendaten.',
    moa: 'Dasatinib blockiert pro-survival Pathways (Ephrin-Tyrosinkinasen). Quercetin hemmt BCL-2/PI3K-Pathways. Senstene Zellen sind auf diese „SCAPs" angewiesen und sterben.',
    benefits: [
      'Reduziert seneszente Zellen in Fettgewebe & Lunge',
      'Erste klinische Studie bei IPF zeigt Verbesserung der körperlichen Funktion',
      'Pulsförmige Anwendung minimiert Toxizität',
      'Mausstudien: längere Healthspan'
    ],
    risks: [
      'Dasatinib ist ein verschreibungspflichtiges Krebsmedikament – die Anwendung gehört unbedingt in ärztliche Hände.',
      'Relevante Wechselwirkungen möglich; nicht in Eigenregie.',
      'Quercetin kann die Eisenaufnahme senken.'
    ],
    status: 'Dasatinib in DE für Leukämien zugelassen (Sprycel); senolytische Nutzung ist Off-Label – nur ärztlich.',
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
    short: 'Ein 150 Jahre alter Farbstoff und Biohacker-Liebling: in Mikrodosen ein eleganter Mitochondrien- und Hirnstoffwechsel-Booster – sublingual dosiert.',
    moa: 'Bei niedrigen Dosen alternativer Elektronen-Carrier zur Atmungskette → erhöhte ATP-Produktion. Bei hohen Dosen prooxidativ.',
    benefits: [
      'Mitochondrien-Effizienz & Hirnstoffwechsel-Studien (Methodist Hospital)',
      'Klinisch zugelassen für Methämoglobinämie & Septischer Schock',
      'Tiefer Hippokampus-Stoffwechsel-Schub (FDG-PET)',
      'Antibakterielle und anti-malaria Wirkung'
    ],
    risks: [
      'Wichtig: nicht mit Antidepressiva (SSRI/MAO-Hemmer) kombinieren – Risiko eines Serotonin-Syndroms.',
      'Bei G6PD-Mangel ungeeignet; nur niedrige Dosen und geprüfte (pharmazeutische) Qualität.',
      'Färbt Urin/Mund vorübergehend blau.'
    ],
    status: 'Als Injektion für Methämoglobinämie zugelassen; sublinguale Mikrodosen sind Off-Label.',
    sources: [
      { title: 'Atamna H, Kumar R – Methylene blue mitochondria 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/20667416/' },
      { title: 'Rodriguez P et al., Radiology 2016 – brain imaging', url: 'https://pubmed.ncbi.nlm.nih.gov/27089023/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Methylenblau-Forschung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'Methylenblau: Wunderdroge oder Hype?',
        audio: 'audio/methylene-blue-podcast.mp3',
        spotify: '6JlLZilupWgb72WX10TBri',
        lengthLabel: '≈ 9 Min · KI-generiert (Paul & Paula)',
        note: 'KI-generierte deutsche Folge mit den Hosts Paul und Paula, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet die elegante Mitochondrien-Idee gegen die dünne Human-Evidenz ein und betont die realen Gefahren: Serotonin-Syndrom bei Antidepressiva (MAO-Hemmung), Hämolyse bei G6PD-Mangel, Reinheits-Falle zwischen Pharma- und Industrieware. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'FDA Drug Safety Communication – Methylenblau & Serotonin-Syndrom bei Antidepressiva', url: 'https://www.apsf.org/article/methylene-blue-and-the-risk-of-serotonin-toxicity/' },
          { title: 'Ramsay et al. – Methylenblau hemmt MAO-A (Serotonintoxizität)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2078225/' },
          { title: 'ALZFORUM – LMTM/HMTM (TauRx): verfehlte Alzheimer-Phase-3-Endpunkte', url: 'https://www.alzforum.org/therapeutics/hmtm' },
          { title: 'Rodriguez P et al., Radiology 2016 – Methylenblau & Hirn-Bildgebung', url: 'https://pubmed.ncbi.nlm.nih.gov/27089023/' }
        ]
      }
    ]
  },
  {
    id: 'acarbose',
    name: 'Acarbose',
    altNames: 'Glucobay, Precose, Alpha-Glucosidase-Hemmer',
    class: 'Alpha-Glucosidase-Hemmer (Antidiabetikum, Longevity-Kandidat)',
    emoji: '🔵',
    short: 'Alter Diabetes-Wirkstoff mit Longevity-Bonus: bremst die Aufnahme von Zucker aus Stärke – und verlängerte im großen US-Alterungsprogramm (ITP) die Lebensspanne von Mäusen.',
    moa: 'Acarbose hemmt im Darm das Enzym Alpha-Glucosidase, das komplexe Kohlenhydrate spaltet. Dadurch wird Zucker langsamer und geringer aufgenommen, Blutzuckerspitzen nach dem Essen werden abgeflacht. Im Interventions-Testing-Programm (ITP) verlängerte Acarbose die Lebensspanne von Mäusen – vermutlich über die geglättete Glukose-/Insulinbelastung und Effekte auf das Darmmikrobiom.',
    benefits: [
      'Flacht Blutzuckerspitzen nach Mahlzeiten ab',
      'Verlängerte im ITP die Lebensspanne von Mäusen (v.a. Männchen)',
      'Günstig, jahrzehntelang als Diabetesmittel im Einsatz',
      'Wirkt lokal im Darm (kaum systemisch aufgenommen)'
    ],
    risks: [
      'Verschreibungspflichtig; Longevity-Nutzung ist off-label',
      'Häufig Blähungen/Darmwind (durch unverdaute Kohlenhydrate)',
      'Longevity-Nutzen beim Menschen nicht bewiesen (Tierdaten)'
    ],
    status: 'Als Glucobay für Typ-2-Diabetes zugelassen. Longevity-Nutzung off-label.',
    sources: [
      { title: 'ITP / NIA – Acarbose verlängert Lebensspanne bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/24245565/' },
      { title: 'Bolds Media – Latest Longevity Research 2026', url: 'https://www.boldsmedia.com/latest-longevity-researches/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'canagliflozin',
    name: 'Canagliflozin (SGLT2-Hemmer)',
    altNames: 'Invokana, SGLT2-Inhibitor',
    class: 'SGLT2-Hemmer (Antidiabetikum, Longevity-Kandidat)',
    emoji: '🔵',
    short: 'Moderner Diabetes-Wirkstoff, der überschüssigen Zucker über den Urin ausscheidet – und im ITP die Lebensspanne männlicher Mäuse verlängerte. Herz- und Nierenschutz gut belegt.',
    moa: 'SGLT2-Hemmer wie Canagliflozin blockieren in der Niere den Rücktransport von Glukose, sodass überschüssiger Zucker mit dem Urin ausgeschieden wird. Das senkt Blutzucker und Kalorien und entlastet Herz und Nieren. Im ITP verlängerte Canagliflozin die Lebensspanne männlicher Mäuse; beim Menschen sind starke Herz- und Nierenschutz-Effekte belegt (aus Diabetes-Studien).',
    benefits: [
      'Scheidet überschüssigen Zucker über den Urin aus (senkt Blutzucker + Kalorien)',
      'Verlängerte im ITP die Lebensspanne männlicher Mäuse',
      'Gut belegter Herz- und Nierenschutz (Humanstudien)',
      'Aktiviert AMPK-nahe, fasten-ähnliche Signalwege'
    ],
    risks: [
      'Verschreibungspflichtig; Longevity-Nutzung off-label',
      'Erhöhtes Risiko für Genital-/Harnwegsinfekte; selten Ketoazidose',
      'Auf Flüssigkeit/Blutdruck achten; ärztliche Begleitung nötig'
    ],
    status: 'Als Invokana für Typ-2-Diabetes zugelassen. Longevity-Nutzung off-label.',
    sources: [
      { title: 'ITP – Canagliflozin verlängert Lebensspanne männlicher Mäuse', url: 'https://pubmed.ncbi.nlm.nih.gov/32112506/' },
      { title: 'Bolds Media – Latest Longevity Research 2026', url: 'https://www.boldsmedia.com/latest-longevity-researches/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'glp-3',
    name: 'GLP-3',
    altNames: 'Retatrutid-artig, LY3437943-Konzept, GLP-1/GIP/Glucagon-Triagonist',
    class: 'Experimenteller Dreifach-Rezeptoragonist (GLP-1, GIP, Glucagon)',
    emoji: '⚗️',
    short: 'Ein experimenteller Dreifach-Agonist im Retatrutid-Stil (GLP-1/GIP/Glucagon) – das Konzept hinter dem stärksten Abnehm-Ansatz, das Sättigung und Energieverbrauch zugleich anspricht.',
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
      'Als „GLP-3" gehandelte Ware ist ungeprüft – verlässliche Daten zum konkreten Produkt fehlen.',
      'Aus der Klasse bekannt: Übelkeit/Verdauungsthemen, Pulsanstieg möglich.',
      'Nicht zugelassen; Research-Ware auf Qualität achten.'
    ],
    status: 'In DE/EU nicht zugelassen; verwandtes Retatrutid ist in klinischer Prüfung.',
    sources: [
      { title: 'Jastreboff et al., N Engl J Med 2023 – Retatrutid Phase-2 bei Adipositas', url: 'https://pubmed.ncbi.nlm.nih.gov/37366315/' },
      { title: 'Rosenstock et al., Lancet 2023 – Retatrutid bei Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/37356449/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'melanotan-1',
    name: 'Melanotan 1 (Afamelanotide / Scenesse)',
    altNames: 'Afamelanotide, MT-1, Scenesse',
    class: 'MC1R-selektiver Melanocortin-Agonist (als Scenesse zugelassen)',
    emoji: '🌤️',
    short: 'Der „verträglichere Bruder" von Melanotan 2: selektiver auf die Hautbräunung ausgerichtet und als Afamelanotide (Scenesse) sogar zugelassen – für eine seltene Lichtkrankheit.',
    moa: 'Melanotan 1 (Afamelanotide) ist ein Analogon des alpha-MSH, das vor allem den MC1R-Rezeptor anspricht und damit die Melaninbildung (Hautbräunung, Lichtschutz) anregt. Anders als Melanotan 2 wirkt es kaum am MC4R (Appetit/Libido/Erektion), weshalb typische MT2-Nebenwirkungen seltener sind. Als Implantat unter dem Namen Scenesse ist es zur Vorbeugung von Lichtschäden bei der seltenen Erkrankung Erythropoetische Protoporphyrie (EPP) zugelassen.',
    benefits: [
      'Regt Hautbräunung und Lichtschutz an (mehr Melanin)',
      'Selektiver und verträglicher als Melanotan 2 (kaum MC4R-Effekte)',
      'Als Scenesse (Afamelanotide) echtes, zugelassenes Medikament (EPP)',
      'Kein MC4R-typischer Priapismus'
    ],
    risks: [
      'Zulassung nur für die seltene Lichtkrankheit EPP – kosmetische Bräunung ist off-label',
      'Muttermale beobachten (Melanocortin-Wirkung); Hautkrebs-Vorsorge wichtig',
      'Graumarkt-Ware für Bräunung ungeprüft; ärztlich abklären',
      'Deutlich teurer/schwerer verfügbar als MT2'
    ],
    status: 'Als Scenesse (Afamelanotide) für EPP zugelassen; kosmetische Nutzung off-label/Graumarkt.',
    sources: [
      { title: 'EMA – Scenesse (Afamelanotide) Zulassung', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/scenesse' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'bimagrumab',
    name: 'Bimagrumab',
    altNames: 'BYM338',
    class: 'Activin-Typ-II-Rezeptor-Antikörper (Muskel↑ / Fett↓)',
    emoji: '💪',
    short: 'Ein Antikörper, der zugleich Muskeln aufbaut und Fett abbaut: löst die Myostatin-/Activin-Bremse – besonders spannend gegen den Muskelverlust unter GLP-1.',
    moa: 'Bimagrumab blockiert den Activin-Typ-II-Rezeptor (ActRII) und hebt damit die hemmende Wirkung von Myostatin und Activin auf das Muskelwachstum auf. Ergebnis: Muskelmasse nimmt zu, während gleichzeitig Fettmasse abnimmt. In Studien (u. a. in Kombination mit Semaglutid) förderte es einen muskelerhaltenden Fettabbau – genau das Problem, das reine GLP-1-Mittel haben.',
    benefits: [
      'Baut Muskeln auf UND reduziert Fett – gleichzeitig',
      'Interessant gegen den Muskelverlust unter GLP-1-Abnehmspritzen',
      'Nur etwa monatliche Infusion (langwirksamer Antikörper)',
      'In Studien mit Semaglutid muskelerhaltender Fettabbau'
    ],
    risks: [
      'Noch nicht zugelassen (Phase 2/3)',
      'Berichtet: Muskelkrämpfe, Durchfall, leichte Akne',
      'Langzeitsicherheit offen',
      'Als Antikörper kein Graumarkt-Selbstversuch – gehört in Studien/ärztliche Hände'
    ],
    status: 'Klinische Entwicklung (Phase 2/3, u. a. mit Semaglutid). Nicht zugelassen.',
    sources: [
      { title: 'Bimagrumab + Semaglutid – muskelerhaltender Fettabbau (Studie)', url: 'https://jamanetwork.com/journals/jama/fullarticle/2818419' },
      { title: 'Meto – Next-Generation Metabolic Drugs 2026', url: 'https://meto.co/blog/next-generation-glp-1-drugs-2026' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'adipotide',
    name: 'Adipotide (FTPP)',
    altNames: 'Prohibitin-TP01, FTPP',
    class: 'Pro-apoptotisches Peptid (zielt auf Fettgewebe-Blutgefäße)',
    emoji: '🔥',
    short: 'Ein hochexperimentelles „Fett-weg"-Peptid, das die Blutversorgung des Fettgewebes kappt – im Tiermodell drastischer Fettverlust, aber mit ernsten Sicherheitsfragen.',
    moa: 'Adipotide zielt auf das Protein Prohibitin an den Blutgefäßen des weißen Fettgewebes und löst dort gezielt den Zelltod (Apoptose) aus. Ohne Blutversorgung schrumpft das Fettgewebe. In Versuchen an fettleibigen Affen führte es zu deutlichem Gewichts- und Fettverlust – allerdings unter erheblichen Sicherheitsbedenken.',
    benefits: [
      'Im Tiermodell starker, gezielter Fettverlust',
      'Neuartiger, hormonunabhängiger Ansatz (Fettgewebe-Gefäße)',
      'Konzeptionell interessant für schwere Adipositas'
    ],
    risks: [
      'Ernst: in Tierstudien Nierenschädigung – ein zentrales Sicherheitsproblem',
      'Keine belastbaren Humanstudien; hochexperimentell',
      'Nicht zugelassen; Graumarkt-Ware höchst unsicher',
      'Kein Stoff für Selbstversuche'
    ],
    status: 'Präklinisch; nicht zugelassen. Sicherheitsbedenken (Niere).',
    sources: [
      { title: 'Barnhart et al. – Adipotide bei adipösen Primaten (Sci Transl Med)', url: 'https://pubmed.ncbi.nlm.nih.gov/22072637/' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'larazotide',
    name: 'Larazotide (AT-1001)',
    altNames: 'AT-1001, Zonulin-Antagonist',
    class: 'Tight-Junction-Regulator (Darmbarriere / „Leaky Gut")',
    emoji: '🛡️',
    short: 'Das am besten erforschte „Leaky-Gut"-Peptid: dichtet die Verbindungen zwischen den Darmzellen ab – am weitesten in der Zöliakie-Forschung (bis Phase 3).',
    moa: 'Larazotide ist ein oral wirksames Peptid, das Zonulin blockiert – den körpereigenen Regulator, der die Tight Junctions (Verbindungen zwischen Darmzellen) öffnet. Dadurch wird die Darmbarriere dichter und die Durchlässigkeit („Leaky Gut") sinkt. Es wirkt lokal im Darm und wurde vor allem als Begleittherapie bei Zöliakie in großen Studien untersucht.',
    benefits: [
      'Dichtet die Darmbarriere ab (reduziert Durchlässigkeit)',
      'Oral, wirkt lokal im Darm (kaum systemisch)',
      'Am weitesten erforschtes Barriere-/„Leaky-Gut"-Peptid',
      'In Zöliakie als Begleittherapie untersucht'
    ],
    risks: [
      'In der Zöliakie-Phase-3 wurde der primäre Endpunkt teils verfehlt',
      'Für die allgemeine „Leaky-Gut"-Nutzung wenig belastbarer Beleg',
      'Nicht zugelassen; Research-Ware auf Reinheit achten'
    ],
    status: 'Klinische Prüfung (Zöliakie); nicht zugelassen.',
    sources: [
      { title: 'Larazotide bei Zöliakie – Übersicht (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7071717/' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'thymosin-beta-4',
    name: 'Thymosin Beta-4 (vollständig)',
    altNames: 'Tβ4, TB4 (Vollprotein, nicht das TB-500-Fragment)',
    class: 'Vollständiges Regenerations-Protein (43 Aminosäuren)',
    emoji: '🩹',
    short: 'Das vollständige Regenerations-Protein, aus dem TB-500 nur ein Fragment ist – tatsächlich liefen viele der Humanstudien mit dem ganzen Molekül.',
    moa: 'Thymosin Beta-4 (Tβ4) ist ein körpereigenes 43-Aminosäuren-Protein, das G-Aktin bindet und so Zellwanderung, Gefäßneubildung und Geweberegeneration fördert sowie Entzündung und Narbenbildung dämpft. Das populäre „TB-500" ist nur die aktive Kernsequenz; die eigentlichen klinischen Studien (Herz, Haut, Hornhaut) liefen oft mit dem kompletten Tβ4.',
    benefits: [
      'Breite Geweberegeneration (u. a. Herz, Haut, Auge – in Studien)',
      'Vollständiges Molekül mit mehr Humandaten als das TB-500-Fragment',
      'Entzündungs- und narbenmodulierend',
      'Nicht-hormonell'
    ],
    risks: [
      'Nicht zugelassen; im Wettkampfsport verboten',
      'Teurer und weniger stabil als das TB-500-Fragment',
      'Theoretisches Tumorrisiko über die gefäßneubildende Wirkung',
      'Research-Ware auf Reinheit achten'
    ],
    status: 'Klinisch untersucht (diverse Indikationen), nicht zugelassen; im Sport verboten.',
    sources: [
      { title: 'Goldstein et al. – Thymosin β4 (Ann NY Acad Sci)', url: 'https://pubmed.ncbi.nlm.nih.gov/22591020/' },
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'argireline',
    name: 'Argireline (Acetyl-Hexapeptid-8)',
    altNames: 'Acetyl-Hexapeptide-3/8, „Botox aus der Creme"',
    class: 'Kosmetisches Peptid (SNARE-Modulator, topisch)',
    emoji: '💆',
    short: 'Das „Botox aus der Creme": ein topisches Peptid, das Mimikmuskeln sanft entspannt und feine Fältchen glättet – rein äußerlich und gut verträglich.',
    moa: 'Argireline hemmt mild die SNARE-vermittelte Freisetzung von Acetylcholin an der Muskel-Nerven-Endplatte und dämpft so die Kontraktion der Mimikmuskulatur – ähnlich der Idee von Botox, aber viel schwächer und nur oberflächlich. Es wird ausschließlich topisch (Creme/Serum) angewendet.',
    benefits: [
      'Glättet Mimikfältchen (Stirn, Augenpartie)',
      'Nicht-invasiv, ohne Nadel, gut verträglich',
      'Günstige „Botox-Alternative" in der Hautpflege',
      'Frei verkäuflich in Kosmetik'
    ],
    risks: [
      'Effekt deutlich milder als Botox',
      'Dringt nur begrenzt in die Haut ein (Formulierung entscheidend)',
      'Rein kosmetisch; Studien oft herstellernah'
    ],
    status: 'Kosmetischer Wirkstoff (frei verkäuflich in Hautpflege).',
    sources: [
      { title: 'Argireline – kosmetische Anti-Falten-Wirkung (Übersicht, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3080240/' }
    ],
    community: [
      { title: 'INCI/Kosmetik-Datenbank – Acetyl Hexapeptide-8', url: 'https://incidecoder.com/ingredients/acetyl-hexapeptide-8' }
    ]
  },
  {
    id: 'snap-8',
    name: 'SNAP-8 (Acetyl-Octapeptide-3)',
    altNames: 'Acetyl-Octapeptide-3, Argireline-Analog',
    class: 'Kosmetisches Peptid (verlängertes Argireline-Analog, topisch)',
    emoji: '💆',
    short: 'Die Weiterentwicklung von Argireline: ein topisches „Botox-like"-Peptid, das Mimikfältchen glätten soll – als etwas potenter beworben.',
    moa: 'SNAP-8 ist ein Oktapeptid und ein verlängertes Analogon von Argireline. Wie dieses moduliert es die SNARE-/Acetylcholin-vermittelte Muskelkontraktion an der Mimikmuskulatur und soll die Kontraktion etwas stärker dämpfen. Anwendung ausschließlich topisch.',
    benefits: [
      'Glättet Mimikfältchen (topisch)',
      'Als potenter als Argireline beworben',
      'Nicht-invasiv, gut verträglich',
      'Frei verkäuflich in Kosmetik'
    ],
    risks: [
      'Wirkung mild und stark formulierungsabhängig',
      'Rein kosmetisch',
      'Belege überwiegend herstellernah'
    ],
    status: 'Kosmetischer Wirkstoff (frei verkäuflich).',
    sources: [
      { title: 'INCI/Kosmetik-Datenbank – Acetyl Octapeptide-3', url: 'https://incidecoder.com/ingredients/acetyl-octapeptide-3' }
    ],
    community: [
      { title: 'Kosmetik-Formulierungs-Ressourcen', url: 'https://incidecoder.com/' }
    ]
  },
  {
    id: 'matrixyl',
    name: 'Matrixyl (Palmitoyl-Pentapeptid)',
    altNames: 'Matrixyl 3000, Palmitoyl Pentapeptide-4, Palmitoyl Tripeptide-1',
    class: 'Kosmetisches Kollagen-Signalpeptid (topisch)',
    emoji: '✨',
    short: 'Der Anti-Aging-Klassiker in Seren: ein Signalpeptid, das die Haut zur Kollagenbildung anregt und feine Linien mildert – topisch gut untersucht.',
    moa: 'Matrixyl (v. a. Palmitoyl-Pentapeptid-4 und -Tripeptid-1) sind Signalpeptide, die Bruchstücke von abgebautem Kollagen nachahmen. Sie „gaukeln" der Haut Reparaturbedarf vor und regen Fibroblasten zu mehr Kollagen- und Elastinbildung an. Anwendung ausschließlich topisch in Seren/Cremes.',
    benefits: [
      'Regt Kollagen- und Elastinbildung an',
      'Glättet feine Linien, verbessert Hautdichte und -struktur',
      'Gut verträglich, auch für empfindliche Haut',
      'Einer der bestuntersuchten kosmetischen Wirkstoffe'
    ],
    risks: [
      'Effekt moderat und langsam (Wochen bis Monate)',
      'Rein kosmetisch/topisch',
      'Konzentration und Formulierung im Produkt entscheidend'
    ],
    status: 'Kosmetischer Wirkstoff (frei verkäuflich in Seren/Cremes).',
    sources: [
      { title: 'Matrixyl / Palmitoyl-Peptide – Kollagen-Wirkung (Übersicht, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7648446/' }
    ],
    community: [
      { title: 'INCI/Kosmetik-Datenbank – Palmitoyl Pentapeptide-4', url: 'https://incidecoder.com/ingredients/palmitoyl-pentapeptide-4' }
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
  'retatrutide': 'Stoffwechsel',
  'tesofensin': 'Stoffwechsel',
  'semaglutide': 'Stoffwechsel',
  'tirzepatide': 'Stoffwechsel',
  'cagrilintide': 'Stoffwechsel',
  'slu-pp-332': 'Exercise',
  '5-amino-1mq': 'Exercise',
  'mk-677': 'Exercise',
  'cjc-ipamorelin': 'Exercise',
  'thymosin-alpha-1': 'Immun',
  'bpc-157': 'Immun',
  'tb-500': 'Immun',
  'ghk-cu': 'Immun',
  'melanotan-1': 'Sonstige', 'bimagrumab': 'Exercise', 'adipotide': 'Stoffwechsel', 'larazotide': 'Immun', 'thymosin-beta-4': 'Immun',
  'argireline': 'Sonstige', 'snap-8': 'Sonstige', 'matrixyl': 'Sonstige',
  'survodutide': 'Stoffwechsel', 'maritide': 'Stoffwechsel', 'mazdutide': 'Stoffwechsel', 'acarbose': 'Longevity', 'canagliflozin': 'Longevity',
  'sermorelin': 'Exercise', 'igf-1-lr3': 'Exercise', 'follistatin': 'Exercise',
  'ara-290': 'Immun', 'vip': 'Immun',
  'dihexa': 'Sonstige', 'p21': 'Sonstige', 'hcg': 'Sonstige', 'oxytocin': 'Sonstige', 'humanin': 'Longevity',
  'bronchogen-chonluten': 'Immun',
  'pentadeca-arginate': 'Immun',
  'orforglipron': 'Stoffwechsel', 'amycretin': 'Stoffwechsel',
  'tesamorelin': 'Exercise',
  'enclomiphene': 'Sonstige', 'kisspeptin': 'Sonstige', 'gonadorelin': 'Sonstige', 'cerebrolysin': 'Sonstige',
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
