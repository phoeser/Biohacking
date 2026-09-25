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
    id: 'aspirin-praevention',
    name: 'Aspirin zur Vorbeugung (Primärprävention)',
    altNames: 'ASS 100, Acetylsalicylsäure niedrig dosiert',
    class: 'Thrombozytenaggregationshemmer (COX-1-Hemmer), niedrig dosiert',
    emoji: '💊',
    short: 'Nach Herzinfarkt oder Schlaganfall belegt. Bei Gesunden ab siebzig fand die größte Studie keinen Nutzen – und mehr Todesfälle als unter Placebo.',
    moa: 'Hemmt COX-1 in den Blutplättchen irreversibel und senkt damit die Thromboxan-A2-Bildung – die Gerinnungsneigung sinkt, das Blutungsrisiko steigt.',
    benefits: [
      'Nach Herzinfarkt oder Schlaganfall ist der Nutzen belegt und unstrittig – dort gilt dieser Eintrag ausdrücklich nicht',
      'Sehr gut untersucht: ASPREE randomisierte 19.114 gesunde ältere Menschen, Median 4,7 Jahre',
      'Billig, überall verfügbar, jahrzehntelange Erfahrung'
    ],
    risks: [
      'Bei Gesunden ab siebzig kein Nutzen beim Hauptziel: 21,5 gegen 21,2 Ereignisse je tausend Personenjahre (HR 1,01; p = 0,79)',
      'Die Gesamtsterblichkeit lag unter Aspirin höher (HR 1,14) – mehr Todesfälle, nicht weniger',
      'Mehr schwere Blutungen – der bekannteste und wichtigste Schaden dieser Substanz',
      'Wer es nach einem Ereignis nimmt, setzt es nicht eigenmächtig ab, sondern spricht vorher mit der Ärztin'
    ],
    status: 'Zugelassen und etabliert in der Sekundärprävention. Für die Primärprävention bei Gesunden raten die Leitlinien seit ASPREE (NEJM 2018) überwiegend ab.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/30221595/'
  },
  {
    id: 'finasterid',
    name: 'Finasterid',
    altNames: 'Propecia, Proscar',
    class: '5-alpha-Reduktase-Hemmer (Typ II), verschreibungspflichtig',
    emoji: '💊',
    short: 'Der Effekt am Haar ist gezählt, nicht behauptet: 107 Haare mehr als unter Placebo nach einem Jahr. Seit September 2025 steht ein Rote-Hand-Brief zu Suizidgedanken daneben.',
    moa: 'Hemmt die 5-alpha-Reduktase Typ II und senkt damit die Umwandlung von Testosteron zu Dihydrotestosteron (DHT) – dem Hormon, das bei erblich bedingtem Haarausfall die Follikel verkleinert.',
    benefits: [
      '107 Haare mehr als unter Placebo nach einem Jahr, 138 nach zwei – ausgezählt auf 5,1 Quadratzentimetern am Wirbel (Ausgangswert 876 Haare), p < 0,001',
      'Zwei verblindete Studien mit zusammen 1.553 Männern zwischen 18 und 41, verblindete Verlängerung mit 1.215 Männern im zweiten Jahr',
      'Oral, einmal täglich, langjährige Anwendungserfahrung'
    ],
    risks: [
      'Suizidgedanken stehen seit dem Rote-Hand-Brief vom 15. September 2025 als Nebenwirkung in der Produktinformation – Häufigkeit ausdrücklich unbekannt',
      'Sexuelle Funktionsstörungen sind die bekannteste Nebenwirkung und der häufigste Abbruchgrund',
      'Das „Post-Finasterid-Syndrom" ist als Krankheitsbild nicht etabliert; die größte Auswertung dazu lief an Männern über fünfzig mit der höheren Dosis und ist nicht auf junge Anwender übertragbar',
      'Verschreibungspflichtig – gehört in ärztliche Hand, auch wegen der psychischen Nebenwirkungen'
    ],
    status: 'In Deutschland zugelassen (1 mg bei androgenetischer Alopezie, 5 mg bei gutartiger Prostatavergrößerung). Rote-Hand-Brief vom 15.09.2025.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/9777765/'
  },
  {
    id: 'nikotin-ohne-rauch',
    name: 'Nikotin ohne Rauch (Beutel, Pflaster, Lutschtabletten)',
    altNames: 'Nikotinbeutel, Pouches, Nicotine Replacement',
    class: 'Nikotinischer Acetylcholinrezeptor-Agonist',
    emoji: '🚭',
    short: 'Der kognitive Effekt ist echt, klein und kurz. Darüber steht eine Abhängigkeit – und genau die ist der Grund, warum Rauchen die größte vermeidbare Todesursache ist.',
    moa: 'Bindet an nikotinische Acetylcholinrezeptoren im Gehirn, steigert kurzfristig Aufmerksamkeit und Reaktionsgeschwindigkeit – und aktiviert dasselbe Belohnungssystem, über das die Abhängigkeit entsteht.',
    benefits: [
      'In einer Meta-Analyse über 41 doppelblinde Studien in sechs von neun Leistungsbereichen besser als Placebo – Effektstärken 0,16 bis 0,44, im Labor, für etwa eine Stunde',
      'Als Ersatztherapie beim Rauchstopp belegt wirksam (Cochrane 2018) – das ist die Anwendung mit echtem Nutzen',
      'Ohne Verbrennung entfallen Teer und Kohlenmonoxid, also der Hauptteil des Rauchschadens'
    ],
    risks: [
      'Macht abhängig – dieselbe Arbeit, die den Leistungseffekt zeigt, sagt das ausdrücklich dazu',
      'Zum Dauergebrauch bei Nichtrauchern gibt es keine Daten – weder zu Nutzen noch zu Schaden',
      'Nikotinbeutel sind in Deutschland als Lebensmittel nicht verkehrsfähig; gemessene Nikotindosen einzelner Beutel liegen hoch (Mallock-Ohnesorg 2024)',
      'Bei Jugendlichen ist der Einstieg über Beutel ein eigenes Problem – die Drogenaffinitätsstudie 2025 erhebt das gesondert'
    ],
    status: 'Nikotinersatzprodukte (Pflaster, Kaugummi, Lutschtabletten) sind zugelassen. Tabakfreie Nikotinbeutel sind in Deutschland nicht verkehrsfähig.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/20414766/'
  },
  {
    id: 'semaglutide',
    name: 'Semaglutide (Ozempic / Wegovy)',
    altNames: 'Ozempic, Wegovy, Rybelsus',
    class: 'GLP-1-Rezeptor-Agonist',
    emoji: '💊',
    short: 'Der Blockbuster der „Abnehmspritzen": als Ozempic/Wegovy zugelassen, hochwirksam beim Gewicht und mit belegtem Herz-Kreislauf-Nutzen – ein legaler, ärztlich begleiteter Weg.',
    moa: 'Aktiviert den GLP-1-Rezeptor → verzögerte Magenentleerung, gesteigerte Sättigung, verbesserte Insulinsekretion und reduzierte Glucagon-Ausschüttung.',
    benefits: [
      '14,9 % Gewichtsverlust gegenüber 2,4 % unter Placebo nach 68 Wochen (STEP 1)',
      'Nach dem Absetzen kehren binnen eines Jahres rund zwei Drittel des Verlusts zurück (STEP-1-Verlängerung, 327 Teilnehmende)',
      'Senkt kardiovaskuläre Ereignisse (SELECT-Studie)',
      'Reduziert chronische Entzündung, verbessert NAFLD',
      'Gegen Alzheimer belegt wirkungslos: evoke/evoke+ (Lancet 2026, 3.808 Teilnehmende, zwei Jahre) fand −0,08 Punkte auf der Demenzskala CDR-SB – beide Gruppen verschlechterten sich um 2,3 Punkte',
      'Verschreibungsfähig (mit Indikation) – legale Bezugsquelle'
    ],
    risks: [
      'Verschreibungspflichtig – am besten ärztlich begleiten.',
      'Zu Beginn oft Übelkeit/Verdauungsthemen, meist vorübergehend.',
      'Gallenblasen- und Gallenwegserkrankungen treten unter GLP-1-Rezeptor-Agonisten häufiger auf (Meta-Analyse über 76 RCTs, relatives Risiko 1,37).',
      'Sehr seltene Nebenwirkung: NAION, eine Durchblutungsstörung des Sehnervs (EMA/PRAC, Juni 2025) – bei plötzlichem Sehverlust sofort ärztlich abklären.',
      'Auf Muskelerhalt achten (Eiweiß + Krafttraining); Ware nur aus geprüfter Quelle.'
    ],
    status: 'In DE für Typ-2-Diabetes (Ozempic) und Adipositas (Wegovy) zugelassen; Wegovy seit 01.09.2026 auch als Tablette in deutschen Apotheken (EU-Zulassung Juli 2026). Bei Adipositas keine Kassenleistung (§ 34 SGB V).',
    sources: [
      { title: 'Wilding JPH et al., NEJM 2021 – STEP 1', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2032183' },
      { title: 'Lincoff AM et al., NEJM 2023 – SELECT trial', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2307563' },
      { title: 'Wilding JPH et al., Diabetes Obes Metab 2022 – STEP-1-Verlängerung (Absetzen)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9542252/' },
      { title: 'He L et al., JAMA Intern Med 2022 – Gallenblase und Gallenwege unter GLP-1-RA', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8961394/' }
    ],
    community: [
      { title: 'Iron Mike: GLP-1 Microdosing (zur Mikrodosierung gibt es keine randomisierte Studie)', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      {
        title: 'Semaglutid (Ozempic & Wegovy): Die Abnehmspritze im Faktencheck',
        audio: 'audio/semaglutide-podcast.mp3',
        spotify: '5x2XjkIFxdENZQF2LEbRrH',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 13) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Semaglutid – den GLP-1-Blockbuster hinter Ozempic, Wegovy und der Tablette Rybelsus. Wie es Sättigung, „food noise" und Blutzucker beeinflusst, was die STEP-Studien (~15 % Gewicht) und die SELECT-Studie 2023 (deutlich weniger Herzinfarkte/Schlaganfälle) zeigten, die Echsengift-Ursprungsgeschichte und die spannenden Gehirn-/Sucht-Effekte. Der große Pluspunkt: legal, zugelassen, ärztlich begleitet – kein Graumarkt. Reine Information, keine Dosier- oder Anwendungsempfehlung.',
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
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 14) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Tirzepatid – den Dual-Agonisten (GLP-1 + GIP) hinter Mounjaro und Zepbound. Warum zwei Hormonschalter stärker wirken als einer, was die SURMOUNT-1-Studie (NEJM 2022, ~22 % Gewicht) und das direkte Duell SURPASS-2 gegen Semaglutid zeigten, das GIP-Paradox, die Zulassung sogar bei Schlafapnoe – und der klare Vorteil: legal und ärztlich begleitet statt Graumarkt. Reine Information, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig.',
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
    short: 'Der bisher stärkste Abnehm-Wirkstoff aus den Studien: ein Dreifach-Agonist von Eli Lilly an GLP-1-, GIP- und Glukagon-Rezeptoren. Begutachtet sind 24,2 Prozent Gewichtsverlust nach 48 Wochen in Phase 2; die Phase-3-Zahlen bis 28,3 Prozent stammen bisher nur aus Herstellerangaben.',
    moa: 'Aktiviert GLP-1-, GIP- und Glucagon-Rezeptoren. GLP-1+GIP senken Appetit & Blutzucker, Glucagon erhöht den Energieverbrauch (lipolytisch).',
    benefits: [
      'Phase 2 (NEJM 2023, 338 Teilnehmende): 24,2 Prozent Gewichtsverlust nach 48 Wochen in der höchsten Dosisstufe gegenüber 2,1 Prozent unter Placebo',
      'TRIUMPH-1 (2.339 Teilnehmende, 80 Wochen) laut Hersteller: 19,0, 25,9 oder 28,3 Prozent je nach Dosisstufe gegenüber 2,2 Prozent; nach der strengeren Auswertung aller Randomisierten bis 25,0 Prozent',
      'Die überall zitierten 30,3 Prozent gelten nur für eine ausgewählte Gruppe von 532 Teilnehmenden in der Verlängerung auf 104 Wochen, ohne Placebo-Vergleich',
      'Leberfett sank in der Phase-2-Substudie um bis zu 82,4 Prozent nach 24 Wochen; 86 Prozent erreichten einen normalen Leberfettgehalt (Nat Med 2024)',
      'Senkt bei Typ-2-Diabetes den HbA1c um bis zu 1,94 Prozentpunkte nach 40 Wochen (TRANSCEND-T2D-1, Lancet 2026)',
      'Die Werte liegen über denen von Tirzepatid – ein direkter Vergleich in einer gemeinsamen Studie fehlt aber'
    ],
    risks: [
      'Nirgends zugelassen; was im Graumarkt als Research-Peptid verkauft wird, ist nicht der geprüfte Studienwirkstoff.',
      'Übelkeit häufig und dosisabhängig: in TRIUMPH-1 bis 42,4 Prozent gegenüber 14,8 Prozent unter Placebo; Studienabbruch wegen Nebenwirkungen bis 11,3 Prozent, in TRIUMPH-4 bis 18,2 Prozent.',
      'Neue Nebenwirkung Dysästhesie (Kribbeln, Missempfindungen der Haut): bis 12,5 Prozent in TRIUMPH-1, bis 20,9 Prozent in TRIUMPH-4.',
      'Die Herzfrequenz steigt; Langzeitdaten und Daten nach dem Absetzen fehlen.',
      'Zu TRIUMPH gibt es bis heute keine begutachtete Vollpublikation – alle Phase-3-Zahlen zum Gewicht stammen aus Herstellermitteilungen und Kongressvorträgen.'
    ],
    status: 'In Phase 3 bei Eli Lilly; der Zulassungsantrag bei der FDA ist für das erste Quartal 2027 geplant. In Deutschland nicht als Arzneimittel verfügbar.',
    sources: [
      { title: 'Jastreboff AM et al., NEJM 2023 – Retatrutide Phase 2', url: 'https://pubmed.ncbi.nlm.nih.gov/37366315/' },
      { title: 'Sanyal AJ et al., Nat Med 2024 – Leber-Substudie', url: 'https://pubmed.ncbi.nlm.nih.gov/38858523/' },
      { title: 'Bajaj HS et al., Lancet 2026 – TRANSCEND-T2D-1 (Phase 3, Typ-2-Diabetes)', url: 'https://pubmed.ncbi.nlm.nih.gov/42250575/' },
      { title: 'Giblin K et al., Diabetes Obes Metab 2026 – Design der TRIUMPH-Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/41090431/' },
      { title: 'Eli Lilly, Herstellermitteilung zu TRIUMPH-1 (21.05.2026)', url: 'https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss' }
    ],
    community: [
      { title: 'biolabshop – Retatrutide (Triple G)', url: 'https://biolabshop.co.uk/209-retatrutide' },
      { title: 'Iron Mike: Retatrutide-Q&A', url: 'https://www.youtube.com/post/UgkxvmKFskjZ2XJh0aQDlzNnow5LEYzeIS8-' },
      { title: 'Retatrutide vs. SLU-PP-332 (Fat Loss Vergleich)', url: 'https://www.youtube.com/watch?v=5fFJIHzrSzQ' }
    ],
    podcasts: [
      { title: 'KI-Podcast: Retatrutide – der stärkste Abnehm-Triagonist', audio: 'audio/retatrutide-podcast.mp3', spotify: '7kJBUC1x9ZEfzlHN0WCO3f', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 6) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Retatrutide, den „Triple G"-Triagonisten (GLP-1 + GIP + Glukagon): warum der Glukagon-Arm nicht nur Appetit zügelt, sondern auch die Verbrennung und den Leberfett-Abbau ankurbelt, was die Phase-2-Studie im NEJM 2023 (Jastreboff et al.) mit ~24 % Gewichtsverlust zeigte und warum metabolische Gesundheit ein starker Longevity-Hebel ist. Ehrlicher Rahmen: noch in Phase 3, nicht zugelassen. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Peptide of The Week – Retatrutide (GLP-3)', url: 'https://open.spotify.com/episode/2Xt6iBveTeiGWaoTjZDNxZ' },
          { title: 'FettUcation – Retatrutide: warum es stärker wirkt als Mounjaro (Deutsch)', url: 'https://open.spotify.com/episode/0BX2ml5PBu5EFgDA6TwB60' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/6wWUjjB7vxeIopVEmgMPYA' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/7rHHXTAPki0x4087cCgsFB' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/3rCvtt10k3iH0gXWtCSAm0' }
        ] }
    ],
    filterCat: 'Stoffwechsel'
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
        note: 'Der Podcast von Paul Höser (Folge 22). KI-generierte deutsche Folge mit realistischen Stimmen (ElevenLabs), mit Fachrecherche ergänzt und bewusst positiv, aber verantwortungsvoll gerahmt: TRT bei echtem, ärztlich nachgewiesenem Mangel ist gut belegt und oft sehr wirksam; die TRAVERSE-Studie hat Herz- und Prostata-Sorgen entschärft. Klar benannt: Blutkontrollen (Hämatokrit), unterdrückte Fruchtbarkeit und die strikte Abgrenzung zur Hochdosis-/Graumarkt-Nutzung. Reine Information, kein medizinischer Rat, keine Dosierempfehlung – Testosteron ist verschreibungspflichtig; Mangel bitte ärztlich abklären und Therapie ärztlich begleiten.',
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
    short: 'Die erste Abnehm-Tablette aus der GLP-1-Klasse, die kein Peptid ist: seit April 2026 in den USA als Foundayo zugelassen, eine Tablette am Tag ohne Nüchtern-Auflagen. In der EU noch nicht zugelassen.',
    moa: 'Orforglipron ist – anders als Semaglutid oder Tirzepatid – kein Peptid, sondern ein kleines, oral stabiles Molekül, das den GLP-1-Rezeptor aktiviert. Dadurch werden Sättigung und Insulinausschüttung gesteigert und die Magenentleerung verzögert. Weil es kein Peptid ist, übersteht es den Magen und lässt sich als simple Tablette zu jeder Tageszeit einnehmen – ohne die strengen Nüchtern- und Wasserregeln von oralem Semaglutid. Das macht die Produktion günstiger und weltweit skalierbar.',
    benefits: [
      'Erste orale, nicht-peptidische GLP-1-Tablette – einmal täglich, zu jeder Tageszeit, ohne Vorgaben zu Essen und Trinken.',
      'Phase-3-Studie ATTAIN-1 (3127 Teilnehmer, 72 Wochen): 11,2 Prozent Gewichtsverlust in der höchsten Dosis gegenüber 2,1 Prozent unter Placebo.',
      'In einer direkten Phase-3-Studie bei Typ-2-Diabetes stärkere HbA1c-Senkung als die Semaglutid-Tablette.',
      'Keine Kühlung nötig, als klassische Tablette gut skalierbar herstellbar.'
    ],
    risks: [
      'Verschreibungspflichtig – Anwendung ärztlich begleiten.',
      'Typische GLP-1-Nebenwirkungen v. a. in der Aufdosierung: Übelkeit, Verstopfung, Durchfall, Erbrechen; in ATTAIN-1 brachen 5,3 bis 10,3 Prozent wegen Nebenwirkungen ab.',
      'In DE/EU noch nicht zugelassen (US-Zulassung 1. April 2026) – Internet-Angebote mit hohem Fälschungsrisiko.',
      'Auf Muskelerhalt achten (Eiweiß + Krafttraining).'
    ],
    status: 'In den USA 2026 als Foundayo zugelassen (Eli Lilly). In DE/EU noch nicht zugelassen.',
    sources: [
      { title: 'Wharton S et al., N Engl J Med 2025 – ATTAIN-1', url: 'https://pubmed.ncbi.nlm.nih.gov/40960239/' },
      { title: 'Rosenstock J et al., N Engl J Med 2025 – ACHIEVE-1', url: 'https://pubmed.ncbi.nlm.nih.gov/40544435/' },
      { title: 'Rosenstock J et al., Lancet 2026 – ACHIEVE-3 gegen orales Semaglutid', url: 'https://pubmed.ncbi.nlm.nih.gov/41765029/' },
      { title: 'Eli Lilly – FDA-Zulassung von Foundayo, 1. April 2026', url: 'https://investor.lilly.com/news-releases/news-release-details/fda-approves-lillys-foundayotm-orforglipron-only-glp-1-pill' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'Orforglipron: Die Abnehmpille im Faktencheck', audio: 'audio/orforglipron-podcast.mp3', spotify: '0SzsxTG1nbymb8wTzIHPUV', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 45) · mit Paul & Paula. Die erste zugelassene nicht-peptidische GLP-1-Tablette der Welt: das Chemie-Wunder aus dem Chugai-Labor, ATTAIN-1 (NEJM 2025: gut 12 % Gewichtsverlust), ACHIEVE (HbA1c −1,5 Punkte), US-Zulassung als Foundayo im April 2026, EMA-Stand, ehrlicher Vergleich mit den Spritzen und Muskelschutz-Basics. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 16.08.2026, 10:00)' }
    ],
    filterCat: 'Stoffwechsel'
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
    ],
    podcasts: [
      {
        title: 'Sermorelin & Tesamorelin: Die GHRH-Klassiker im Faktencheck',
        audio: 'audio/sermorelin-tesamorelin-podcast.mp3',
        spotify: '7KdLZhGdPYPWodtUB23U2L',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 49) \u00b7 mit Paul & Paula. Doppelfolge und Finale der Wachstumshormon-Serie: Sermorelin als bezahlbarer, physiologischer Klassiker der US-Anti-Aging-Kliniken \u2013 und Tesamorelin (Egrifta) mit den st\u00e4rksten Daten der Klasse: \u221215 % viszerales Fett (Falutz, NEJM 2007) und \u00fcber ein Drittel weniger Leberfett (Stanley, Lancet HIV 2019). Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 20.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'hgh',
    name: 'HGH (Wachstumshormon / Somatropin)',
    altNames: 'Somatropin, Growth Hormone, GH, rhGH',
    class: 'Rekombinantes menschliches Wachstumshormon (191-AS-Protein), verschreibungspflichtig',
    emoji: '🧬',
    short: 'Der Longevity- und Anti-Aging-Klassiker: das direkt zugeführte Wachstumshormon selbst – legendär für Muskelaufbau, Fettabbau, Haut und Regeneration und der Referenzpunkt, an dem sich alle GH-Peptide messen.',
    moa: 'HGH (Somatropin) ist das rekombinant hergestellte, körperidentische Wachstumshormon. Anders als die GH-Peptide (die die eigene, pulsatile Ausschüttung anregen) wird es direkt zugeführt und hebt GH- und IGF-1-Spiegel stark und anhaltend an. IGF-1 vermittelt viele der anabolen Effekte in Muskel, Knochen und Bindegewebe. Die berühmte Rudman-Studie (New England Journal of Medicine, 1990) zeigte bei Männern über 60 mehr Magermasse, weniger Fett und dickere Haut – und löste damit den Anti-Aging-Hype aus. Weil die körpereigene Rückkopplung umgangen wird, gilt exogenes HGH als weniger physiologisch als die GH-Peptide.',
    benefits: [
      'Stärkster und direktester Hebel auf GH und IGF-1.',
      'Kann Magermasse, Fettabbau, Hautqualität und Regeneration deutlich unterstützen.',
      'Körperidentisches Molekül – seit Jahrzehnten medizinisch erprobt (GH-Mangel, Kinderwachstum).',
      'Der Referenzpunkt, an dem sich die moderneren GH-Peptide messen.'
    ],
    risks: [
      'Verschreibungspflichtig; Nutzung ohne echten Mangel ist off-label.',
      'Bei zu hoher Dosis GH-typische Effekte: Wassereinlagerung, Gelenk-/Karpaltunnel-Beschwerden, Insulinresistenz.',
      'Umgeht die natürliche Rückkopplung – weniger physiologisch als GH-Peptide.',
      'Im Sport WADA-verboten; Graumarkt-Ware auf Echtheit und Reinheit achten.'
    ],
    status: 'Als Somatropin für GH-Mangel und weitere Indikationen zugelassen; in DE verschreibungspflichtig. Anti-Aging-/Biohacking-Nutzung off-label.',
    sources: [
      { title: 'Rudman et al., N Engl J Med 1990 – Growth Hormone in Men over 60', url: 'https://www.nejm.org/doi/full/10.1056/NEJM199007053230101' },
      { title: 'PeptideDeck – Best Growth Hormone Peptides 2026', url: 'https://www.peptidedeck.com/peptides/best-growth-hormone-peptides-2026' }
    ],
    podcasts: [
      {
        title: 'HGH: Das Wachstumshormon im Faktencheck (Neufassung)',
        audio: 'audio/hgh-podcast.mp3',
        spotify: '1lwRuMTHAicORZOpMgJ1k0',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 52) · mit Paul & Paula. Der König der Anti-Aging-Welt zwischen Hype und Panik: Somatopause, die legendäre Rudman-Studie (NEJM 1990: +9 % Magermasse, −14 % Fett) und die TRIIM-Studie (Fahy, Aging Cell 2019: epigenetische Uhren ~2,5 Jahre zurückgedreht). Risiken neutral sortiert (Wassereinlagerung/Karpaltunnel als Dosis-Signale, Blutzucker, IGF-1-Balance), die Biohacker-Leiter von gratis (Tiefschlaf, HIIT, Fasten) über die Peptide bis zum ärztlich begleiteten Original – Messen statt Raten. Reine Information, keine Dosier- oder Anwendungsempfehlung.'
      }
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
      'Hebt IGF-1 bei 25 mg/Tag deutlich an – in der Zweijahresstudie stieg die fettfreie Masse um 1,1 kg, Kraft und Funktion aber nicht, und der Nüchternblutzucker stieg',
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
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 16) · mit Paul & Paula. Frische, positive KI-Dialogfolge über MK-677 (Ibutamoren) – den oralen Wachstumshormon-Anreger: eine Tablette, die über den Ghrelin-Rezeptor die eigene GH- und IGF-1-Ausschüttung ankurbelt. Beliebt für Tiefschlaf, Regeneration, Haut und Magermasse ganz ohne Spritze (Nass et al., Ann Intern Med 2008: jugendliche GH-/IGF-1-Werte bei Älteren). Ehrlich eingeordnet: Appetit, Wassereinlagerung, höherer Blutzucker und ein Herzschwäche-Signal – plus die Longevity-Nuance, dass sehr hohes IGF-1 nicht automatisch lebensverlängernd ist. Reine Information, keine Dosier- oder Anwendungsempfehlung.',
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
      'Hebt GH und IGF-1 über kombinierte Grundanhebung plus pulsatile Spitzen – Mechanismus, kein belegter Endpunkt',
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
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 17) · mit Paul & Paula. Frische, positive KI-Dialogfolge über den beliebten sanften GH-Stack: CJC-1295 (GHRH-Analogon) hebt die Grundlinie, Ipamorelin (sauberes Ghrelin-Mimetikum, kaum Cortisol/Prolaktin/Hunger) setzt die Pulse obendrauf – zusammen bauen sie das jugendliche, pulsierende Wachstumshormon-Muster nach. Warum das physiologischer ist als direktes HGH, der Unterschied CJC mit DAC vs. ohne DAC (Mod GRF), Tiefschlaf/Haut/Regeneration – plus die Longevity-Nuance: moderat und pulsierend schlägt dauerhaft maximal. Reine Information, keine Dosier- oder Anwendungsempfehlung; im Sport verboten.',
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
    short: 'Das beliebte „Reparatur-Peptid" – die regenerativen Effekte auf Sehnen, Bindegewebe und Magen-Darm-Schleimhaut stammen aus Tierversuchen. Kontrollierte Studien am Menschen gibt es bis heute nicht.',
    moa: 'Synthetisches 15-Aminosäuren-Peptid, abgeleitet von einem körpereigenen Schutzprotein des Magensafts und außergewöhnlich säurestabil. Es fördert die Geweberegeneration vor allem über den FAK/Paxillin-Signalweg (Wanderung von Fibroblasten und Sehnenzellen, Kollagen-Typ-I-Synthese) sowie über die VEGFR2/eNOS/NO-Achse (Gefäßneubildung, bessere Durchblutung). Zusätzlich dämpft es Entzündungssignale (NF-κB/COX-2 herunter, Verschiebung von M1- zu M2-Makrophagen) ohne allgemeine Immunsuppression. Im Magen-Darm-Trakt erhöht es schützende Faktoren wie PGE2, Schleimsekretion und die Dichte der Tight Junctions. Die Datenlage stammt überwiegend aus Tiermodellen (v.a. Arbeitsgruppe Sikirić, Zagreb); kontrollierte Humanstudien fehlen weitgehend.',
    benefits: [
      'Beschleunigt im Tiermodell die Heilung von Sehnen, Bändern und Muskelfaserrissen',
      'Fördert im Tiermodell Gefäßneubildung und Durchblutung im verletzten Gewebe',
      'Schützt und repariert die Magen-Darm-Schleimhaut (z.B. bei NSAR-Läsionen, überwiegend Tierdaten)',
      'Wirkt im Tiermodell entzündungsmodulierend, ohne kortisonähnliche Nebenwirkungen',
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
        note: 'Der Podcast von Paul Höser (Folge 36). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche zum „Wolverine Stack" (BPC-157 + TB-500) – wie sich die beiden Peptide über verschiedene Signalwege in verschiedenen Heilungsphasen ergänzen. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Research-Peptide, nicht als Arzneimittel zugelassen, im Sport verboten (WADA).'
      },
      {
        title: 'KI-Podcast: BPC-157 – das Reparatur-Peptid aus dem Magen',
        audio: 'audio/bpc-157-podcast.mp3',
        spotify: '3G58RjUupVFwxDMkOdSqX2',
        lengthLabel: '≈ 12 Min · Deutsch · 2 KI-Stimmen',
        note: 'Der Podcast von Paul Höser (Folge 2). KI-generierte deutsche Folge (Paul & Paula) über BPC-157 – warum das „Body Protection Compound" aus dem Magensaft als Reparatur-Peptid für Sehnen, Bänder und Darm so gefeiert wird, was Tiermodelle zeigen und wie es typischerweise angewendet wird (berichtet, keine Empfehlung). Nur Information – keine medizinische Beratung. Research-Peptid, nicht als Arzneimittel zugelassen, im Sport verboten (WADA).'
      }
    ]
  },
  {
    id: 'tb-500',
    name: 'TB-500 (Thymosin Beta-4 Fragment)',
    altNames: 'TB4, Thymosin β-4',
    class: 'Synthetisches Peptid-Fragment (Ac-LKKTETQ, aktinbindende Region des 43-Aminosäuren-Proteins Thymosin Beta-4)',
    emoji: '🩹',
    short: 'Das Regenerations-Peptid aus der Thymosin-Beta-4-Familie: Im Tiermodell fördert das Mutterprotein Wundheilung, Gefäßbildung und Herzreparatur. TB-500 selbst ist am Menschen nicht untersucht und wird gern mit BPC-157 kombiniert.',
    moa: 'Synthetisches Peptid mit der aktiven aktinbindenden Kernsequenz (Ac-LKKTETQ), das die regenerative Region des körpereigenen Proteins Thymosin Beta-4 (Tβ4, 43 AS) nachbildet. Es wirkt nicht-hormonell: Durch Bindung von G-Aktin-Monomeren stellt es ein Reservoir für den Umbau des Zytoskeletts bereit und fördert so die Zellwanderung zur Verletzungsstelle. Zusätzlich stimuliert es die Gefäßneubildung, hemmt entzündungsfördernde Zytokine und reduziert über weniger Myofibroblasten die Narbenbildung. Wichtig: TB-500 und das vollständige Tβ4 sind nicht identisch – die meisten Humanstudien liefen mit komplettem Tβ4, sodass die Wirksamkeit von TB-500 selbst überwiegend aus Tiermodellen extrapoliert wird.',
    benefits: [
      'Das Mutterprotein Thymosin Beta-4 beschleunigt im Tiermodell die Heilung von Haut, Hornhaut und Herzmuskel',
      'Bindet Aktin und fördert die Zellwanderung, im Tiermodell auch die Gefäßneubildung',
      'Im Tiermodell weniger Myofibroblasten und damit weniger Narbenbildung',
      'Kleine klinische Studien mit vollständigem Thymosin Beta-4 an Hautgeschwüren, Hornhautdefekten und nach Herzinfarkt zeigen in Teilgruppen positive Signale',
      'Gilt in Anwenderberichten als gut verträglich'
    ],
    risks: [
      'Humanstudien mit TB-500 selbst fehlen; die klinischen Daten betreffen das vollständige Thymosin Beta-4.',
      'Kein systematisch untersuchtes Sicherheitsprofil; bei nicht regulierter Ware Risiken durch Verunreinigung und ungenaue Dosierung.',
      'Fördert Gefäßbildung und Zellwanderung – bei bekannter oder vermuteter Tumorerkrankung nicht ohne ärztliche Rücksprache.',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S2.3); nur injizierbar.'
    ],
    status: 'Forschungs-Peptid, im Wettkampfsport verboten.',
    sources: [
      { title: 'Goldstein AL et al., Expert Opin Biol Ther 2012 – Thymosin β4: multifunktionales Regenerationspeptid', url: 'https://pubmed.ncbi.nlm.nih.gov/22074294/' },
      { title: 'Bock-Marquette I et al., Nature 2004 – Thymosin β4 und Herzreparatur (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/15565145/' },
      { title: 'Treadwell T et al., Ann N Y Acad Sci 2012 – Hautheilung im Tiermodell und in Phase-2-Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/23050815/' },
      { title: 'Zhang Y et al., Cardiovasc Res 2025 – randomisierte Studie nach Herzinfarkt', url: 'https://pubmed.ncbi.nlm.nih.gov/41229390/' },
      { title: 'Rahaman KA et al., J Chromatogr B 2024 – TB-500 (Ac-LKKTETQ): Analytik und Abbau', url: 'https://pubmed.ncbi.nlm.nih.gov/38382158/' }
    ],
    community: [
      { title: 'biolabshop – TB-500/BPC-157 Combo', url: 'https://biolabshop.co.uk/peptides/321-tb-4-fragbpc-157-arg-700-mcg-30-caps.html' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'KI-Podcast: Der Wolverine Stack – BPC-157 + TB-500 (Regenerations-Duo)', audio: 'audio/wolverine-stack-podcast.mp3', spotify: '4Lex4pgjZQrVvjEEP2r0sK', lengthLabel: '≈ 10 Min · Deutsch · 2 KI-Stimmen', note: 'Der Podcast von Paul Höser (Folge 36). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche zum „Wolverine Stack" (BPC-157 + TB-500) – wie sich die beiden Peptide über verschiedene Signalwege in verschiedenen Heilungsphasen ergänzen. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Research-Peptide, nicht als Arzneimittel zugelassen, im Sport verboten (WADA).' },
      { title: 'KI-Podcast: TB-500 – das systemische Regenerations-Peptid', audio: 'audio/tb-500-podcast.mp3', spotify: '7jlWTnGRAao4lBwzhtUWPg', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 3) · mit Paul & Paula. Frische, positive KI-Dialogfolge über TB-500, das aktive Fragment von Thymosin Beta-4: warum es Zellen wanderfreudig macht und dadurch systemisch heilt (Sehnen, Bänder, Herz, Haut), was die Nature-Studie 2004 zum Herzmuskel zeigte und wie es sich mit BPC-157 zum Wolverine Stack ergänzt. Reine Information, keine Dosier- oder Anwendungsempfehlung; Research-Peptid, im Sport verboten (WADA).' }
    ],
    filterCat: 'Immun'
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu (Copper-Tripeptid)',
    altNames: 'Glycyl-L-Histidyl-L-Lysin-Kupfer',
    class: 'Tripeptid-Kupfer-Komplex',
    emoji: '🧴',
    short: 'Ein körpereigenes Kupfer-Tripeptid und der am besten untersuchte Wirkstoff dieser Liste – allerdings topisch: Für die Haut gibt es kontrollierte Studien, für die Injektion praktisch keine.',
    moa: 'GHK-Cu (Glycyl-L-Histidyl-L-Lysin, komplexiert mit einem Kupfer(II)-Ion) ist ein natürlich im Blutplasma vorkommendes Tripeptid, dessen Spiegel mit dem Alter deutlich sinkt (~200 ng/ml mit 20, ~80 ng/ml mit 60 Jahren). Es wirkt als pleiotroper Signalgeber bzw. epigenetischer Modulator: In Analysen verändert es die Expression von über 4 000 menschlichen Genen Richtung eines „jüngeren" Musters. Es regt Fibroblasten zur Synthese von Kollagen Typ I/III, Elastin und Glykosaminoglykanen an, wobei Kupfer als Cofaktor der quervernetzenden Lysyloxidase dient. Ergänzend fördert es die Gefäßneubildung (VEGF, bFGF), wirkt antioxidativ (SOD) und entzündungshemmend (TNF-α, IL-6, NF-κB herunter). Die Haut-/Wundheilungsdaten sind teils klinisch (topisch), die systemischen Injektionseffekte beruhen jedoch stark auf präklinischen Daten.',
    benefits: [
      'Steigert in der Zellkultur die Kollagensynthese deutlich; Hautstruktur und Elastizität sind am Menschen nur in kleinen, meist herstellernahen Studien untersucht',
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
        note: 'Der Podcast von Paul Höser (Folge 19). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der ehrliche Dreh: topisch/kosmetisch ist GHK-Cu eines der bestbelegten Peptide (~40 Jahre Forschung, +28% Kollagendichte, Haut/Wundheilung, sehr sicher) – aber der Sprung zum injizierten Ganzkörper-Anti-Aging ist am Menschen kaum belegt und bringt ein Kupfer-Überladungs-Risiko. Belegt ist die Creme, nicht die Nadel. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Pickart & Margolina, Biomolecules 2018 – GHK-Cu: Genexpression & Regeneration', url: 'https://pubmed.ncbi.nlm.nih.gov/29986520/' },
          { title: 'GHK als Anti-Aging-Peptid (Review, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8789089/' }
        ]
      }
    ]
  },
  {
    id: 'peptid-stacks',
    name: 'Peptid-Stacks & Blends (Grundlagen)',
    altNames: 'Stacking, Blend, Kombination, Peptid-Protokoll',
    class: 'Prinzip – wie Peptide kombiniert werden und warum',
    emoji: '🧩',
    short: 'Das Prinzip hinter GLOW, KLOW, Wolverine und den GH-Kombinationen: Was ein Stack von einem Blend unterscheidet und nach welchen Regeln kombiniert wird. Synergie am Menschen gemessen ist genau eine Kombination – für die populären Mischungen gibt es keine Studie.',
    moa: 'Ein Stack ist ein Protokoll aus mehreren Einzel-Vials, die getrennt dosiert werden; ein Blend ist eine Fertigmischung in einem festen, vom Anbieter vorgegebenen Verhältnis. Die Logik ist dieselbe: komplementäre Pfade. Sinnvoll kombiniert wird, was an unterschiedlichen Rezeptoren unterschiedliche Aufgaben übernimmt; zwei Substanzen am gleichen Rezeptor konkurrieren und addieren eher Nebenwirkungen als Wirkung. Belegt ist dieses Prinzip am Menschen für eine Paarung: Ein Wachstumshormon-freisetzendes Peptid setzte gemeinsam mit einem Releasing-Hormon mehr Wachstumshormon frei als jede Substanz allein (Bowers et al. 1990, 18 gesunde Männer) – ein Surrogatendpunkt. Wie stark diese Synergie ausfällt, hängt stark von der Person ab: Alter und Bauchfett senken sie, höheres IGF-1 erhöht sie; Bauchfett, IGF-1 und IGFBP-3 erklärten 60 Prozent der Unterschiede (Veldhuis und Bowers 2009, 47 Männer). WICHTIG: Für die populären Kombinationen existiert keine Kombinationsstudie, es gibt keine Interaktionsdaten und keine Prüfung der Mischungsstabilität; die Evidenz gilt jeweils den Einzelsubstanzen.',
    benefits: [
      'Fünf Handwerksregeln aus der Folge: einzeln einführen, wenige Substanzen statt vieler, Rezeptor-Dopplungen vermeiden, Kuren statt Dauerbetrieb, Blutwerte messen.',
      'Stack statt Blend heißt: jedes Verhältnis bleibt änderbar, und bei einer Reaktion ist zuordenbar, welche Substanz sie ausgelöst hat.',
      'Blend statt Stack heißt: weniger Handgriffe, weniger Einstiche – dafür ein zementiertes Verhältnis und ungeprüfte Stabilität der Mischung im Vial.',
      'Für eine Paarung ist Synergie am Menschen gemessen: Releasing-Hormon plus freisetzendes Peptid setzten mehr Wachstumshormon frei als jede Substanz allein.',
      'Der Rahmen zum Einordnen aller Blend-Einträge der App (GLOW, KLOW, Wolverine, CJC + Ipamorelin).'
    ],
    risks: [
      'Das Zuordnungs-Problem: Wer zwei Substanzen gleichzeitig startet, weiß bei einer Nebenwirkung nicht, welche sie verursacht hat.',
      'Rezeptor-Dopplung addiert Nebenwirkungen, nicht Wirkung.',
      'Für die populären Blends existiert keine Kombinationsstudie und es gibt keine Interaktionsdaten; auch die Stabilität der Mischung im Vial ist ungeprüft.',
      'Die belegte Synergie ist personenabhängig und fällt bei höherem Alter und mehr Bauchfett schwächer aus – also bei der Gruppe, die solche Protokolle am häufigsten sucht.',
      'Die FDA führt mehrere beliebte Bestandteile mit möglichen erheblichen Sicherheitsrisiken: Ipamorelin mit Berichten über schwerwiegende Ereignisse bis zum Tod bei intravenöser Gabe, Melanotan II mit Fallberichten über Melanom und Priapismus, Ibutamoren mit einem Signal für Herzinsuffizienz.',
      'Graumarktprodukte können etwas anderes enthalten als angegeben; dokumentiert sind Krankenhausaufnahmen nach online gekauften Stoffwechselpeptiden.',
      'Im Sport sind praktisch alle hier genannten Substanzen verboten: Peptidhormone und Wachstumsfaktoren stehen in Gruppe S2, nicht zugelassene Substanzen zusätzlich in Gruppe S0 – beides jederzeit.'
    ],
    status: 'Prinzip-Eintrag, keine Substanz. Die verwendeten Research-Peptide sind in DE/EU überwiegend nicht als Arzneimittel zugelassen und nicht als Nahrungsergänzungsmittel verkehrsfähig; Fertigmischungen unterliegen weder für Bestandteile noch für Verhältnis oder Stabilität einer Prüfung. Kombinationen gehören in ärztliche Begleitung.',
    sources: [
      { title: 'Bowers et al., J Clin Endocrinol Metab 1990 – GHRP wirkt synergistisch mit GHRH, 18 gesunde Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/2108187/' },
      { title: 'Veldhuis und Bowers, Am J Physiol Endocrinol Metab 2009 – Bestimmungsgrößen der GHRH-GHRP-Synergie', url: 'https://pubmed.ncbi.nlm.nih.gov/19240251/' },
      { title: 'Hailu et al., Cureus 2026 – unregulierter Peptidgebrauch: Graumarkt, Stacking, Produktqualität', url: 'https://pubmed.ncbi.nlm.nih.gov/42437212/' },
      { title: 'FDA – Bulk Drug Substances mit möglichen erheblichen Sicherheitsrisiken', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' },
      { title: 'Sterckx und De Keyser, Cureus 2026 – euglykämische Ketoazidose nach gefälschtem Semaglutid', url: 'https://pubmed.ncbi.nlm.nih.gov/41773123/' },
      { title: 'WADA Prohibited List – Gruppen S0 und S2', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Peptid-Stacks & Blends: Warum kombinieren? Die Grundlagen-Folge', audio: 'audio/peptid-stacks-podcast.mp3', spotify: '1vjClyXNbjwk08HCl5Eeq9', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 54) · mit Paul & Paula. Stack oder Blend, das Prinzip der komplementären Pfade („nie zweimal dieselbe Klingel"), die Stack-Galerie des Podcasts, die fünf Handwerksregeln, die ehrliche Blend-Abwägung zwischen Bequemlichkeit und zementierten Verhältnissen – und die Erinnerung, dass der beste Stack gratis ist: Schlaf, Training, Protein, Sonne. Reine Information, keine Dosier- oder Anwendungsempfehlung.' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'glow-stack',
    name: 'GLOW (GHK-Cu + BPC-157 + TB-500)',
    altNames: 'GLOW-Blend, GLOW 50/70/75, Beauty-Stack',
    class: 'Peptid-Blend – Kupferpeptid + Wolverine-Duo für Haut & Regeneration',
    emoji: '✨',
    short: 'Der gehypteste Beauty-Stack der Peptid-Szene: das Kupferpeptid GHK-Cu plus das Wolverine-Duo BPC-157 + TB-500 – Ziel: Hautverjüngung von innen.',
    moa: 'Dreier-Logik der Geweberegeneration: TB-500 mobilisiert Reparaturzellen (Aktin-System), BPC-157 baut die Versorgung (Angiogenese über VEGF, Fibroblasten), GHK-Cu liefert den Bauplan – es moduliert ~4000 Gene Richtung Reparatur (Pickart 2015), aktiviert Kollagen-/Elastin-Synthese und transportiert Kupfer als Kofaktor für Lysyl-Oxidase und Superoxid-Dismutase. Der GHK-Spiegel im Blut sinkt mit dem Alter drastisch (Jung-Alt-Biomarker). WICHTIG: Zur Dreier-KOMBINATION existieren keine publizierten Studien – die Evidenz gilt den Einzelteilen (GHK-Cu: Zell-/Kosmetikdaten; BPC-157: Tiermodelle; TB-500: Thymosin-Beta-4-Wunddaten).',
    benefits: [
      'Berichtet: pralleres Hautbild, feinere Poren, weniger Knitterfältchen, schnellere Heilung kleiner Makel (ab ~3–6 Wochen).',
      'Berichtet: vollere Haare und Nägel (GHK-Cu verlängert im Modell die Haarwachstumsphase).',
      'Drei komplementäre Regenerations-Achsen in einem Vial (Mobilisieren + Versorgen + Bauen).',
      'Kosmetik-Einstieg ohne Nadel möglich: GHK-Cu-Seren sind die datenstärkste, legale Route.'
    ],
    risks: [
      'Zur Kombination existiert keine einzige Studie – reine Anwender-Empirie auf plausibler Einzelteil-Basis.',
      'Kupferpeptid kann an der Einstichstelle brennen/röten; Stabilität der Mischung im Vial ungeprüft.',
      'Angiogenese-Regel: bei aktiven Krebserkrankungen tabu; Graumarkt (Reinheit prüfen), im Sport verboten.'
    ],
    status: 'Research-Blend, nicht zugelassen. Einzelteile teils FDA-Category-2 (Compounding untersagt).',
    sources: [
      { title: 'Pickart & Margolina 2018 – GHK-Cu Regenerations-Review', url: 'https://pubmed.ncbi.nlm.nih.gov/30022107/' },
      { title: 'Peptide Protocol Wiki – The Glow Blend (Evidenz-Guide)', url: 'https://www.peptideprotocolwiki.com/blog/glow-blend' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'GLOW (GHK-Cu + BPC-157 + TB-500): Der Beauty-Stack im Faktencheck',
        audio: 'audio/glow-podcast.mp3',
        spotify: '1yvGmRZsYrAmEjZm4InKks',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 51) · mit Paul & Paula. Loren Pickarts Entdeckung von 1973, die 4000-Gene-Analyse, Kupfer als Zündschlüssel der Kollagen-Quervernetzung, die Bauarbeiter-Straßen-Bauplan-Logik – und die ehrliche Einordnung: keine Kombi-Studien. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 22.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'klow-stack',
    name: 'KLOW (KPV + GHK-Cu + BPC-157 + TB-500)',
    altNames: 'KLOW-Blend, GLOW + KPV, Heilungs-Stack',
    class: 'Peptid-Blend – GLOW plus KPV für Haut, Darm & Entzündung',
    emoji: '🧪',
    short: 'Der große Bruder von GLOW: dieselben drei Zutaten plus die Entzündungsbremse KPV – damit verschiebt sich die Mission von Haut zu Haut + Darm + Entzündung.',
    moa: 'Vierer-Logik: TB-500 mobilisiert Reparaturzellen, BPC-157 baut Gefäße (und ist als Magensaft-Peptid der Darmschleimhaut-Klassiker), GHK-Cu liefert den Kollagen-Bauplan – und KPV (Lys-Pro-Val, das entzündungsdämpfende Ende des Alpha-MSH) drosselt NF-κB, den Hauptschalter der Entzündungs-Genetik. In Colitis-Tiermodellen reduzierte KPV Entzündungsmarker deutlich, teils oral wirksam (Aufnahme über Peptid-Transporter der Darmzellen). Zur Vierer-KOMBINATION existieren keine publizierten Studien.',
    benefits: [
      'Konzept: Mobilisieren (TB-500), Versorgen (BPC-157), Bauen (GHK-Cu) und Beruhigen (KPV) – als Kombination nie geprüft.',
      'KPV hemmt im Labor Entzündungssignale (NF-κB) in menschlichen Darmzellen und milderte bei Mäusen Colitis, auch oral gegeben.',
      'Berichtet: Darm-Beruhigung oft nach 1–3 Wochen, Gewebe/Gelenke ab Woche 3–6, Haut ähnlich wie bei GLOW (Anwenderberichte, ohne Kontrollgruppe).',
      'Für entzündliche, zu Rötungen neigende Haut und Darmthemen in der Szene die logischere Wahl gegenüber GLOW.',
      'KPV wird über den Peptidtransporter PepT1 aufgenommen und war im Tiermodell oral wirksam – Humandaten fehlen.'
    ],
    risks: [
      'Zur Viererkombination existiert keine einzige Studie – Anwender-Empirie auf Einzelteil-Basis.',
      'Kupfer-Brennen an der Einstichstelle möglich; Stabilität der Mischung ungeprüft.',
      'Angiogenese-Regel: bei aktiven Krebserkrankungen tabu; Graumarkt, im Sport verboten.',
      'Darm-Beschwerden gehören zuerst in ärztliche Abklärung – der Blend ist kein Diagnose-Ersatz.'
    ],
    status: 'Research-Blend, nicht zugelassen. Evidenz aus Einzelteilen (KPV/BPC-157/TB-500/GHK-Cu) extrapoliert.',
    sources: [
      { title: 'Dalmasso et al., Gastroenterology 2008 – KPV bei Colitis (Zellkultur und Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/18061177/' },
      { title: 'Vasireddi et al., HSS J 2025 – BPC-157, systematischer Review', url: 'https://pubmed.ncbi.nlm.nih.gov/40756949/' },
      { title: 'Tewari et al., Am J Sports Med 2026 – Szene-Peptide in der Sportmedizin', url: 'https://pubmed.ncbi.nlm.nih.gov/42578445/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'KLOW (KPV + GHK-Cu + BPC-157 + TB-500): Der Heilungs-Stack im Faktencheck', audio: 'audio/klow-podcast.mp3', spotify: '1JtzfQ7YLfHmFcM1V6xXoa', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 53) · mit Paul & Paula. Die Substanz aus Folge 1 kehrt zurück: KPV als NF-κB-Bremse macht aus dem Beauty-Stack den Ganzkörper-Heilungs-Stack – mit Darm-Hirn-Achse, Colitis-Daten und GLOW-vs.-KLOW-Entscheidungshilfe. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 23.08.2026, 10:00)' }
    ],
    filterCat: 'Immun'
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
        note: 'Der Podcast von Paul Höser (Folge 20). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Melanocortin-Agonist, der das Verlangen zentral im Gehirn steigert – nicht die Durchblutung wie Cialis. Echt zugelassen (Vyleesi, FDA 2019), aber NUR für Frauen mit HSDD; die Biohacking-Nutzung ist off-label/Graumarkt. Effekt moderat; kritisch: Übelkeit, Blutdruckanstieg (Kontraindikation bei Herz-Kreislauf), Hautverfärbung. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
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
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 21) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das unterschätzte Gefäß-Tool Tadalafil: wie der lang wirksame PDE5-Hemmer (bis zu 36 Stunden) das körpereigene Entspannungssignal der Gefäße verlängert, warum die niedrig dosierte tägliche Einnahme bei Prostata-Beschwerden offiziell zugelassen ist (Yokoyama 2015), was die Szene an Endothel- und Pump-Effekten berichtet – und was die Hirnforschung sagt (PASTIS 2022 ernüchternd, ETLAS-2 in Stroke 2025 mit neuen Hoffnungssignalen). Plus die eine harte Regel: niemals mit Nitraten kombinieren. Reine Information, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig.',
        sources: [
          { title: 'StatPearls (NIH) – Tadalafil', url: 'https://www.ncbi.nlm.nih.gov/books/NBK603743/' },
          { title: 'PASTIS-Studie (Alz. & Dementia 2022) – PDE5-Hemmer bei zerebraler Kleingefäßerkrankung', url: 'https://alz-journals.onlinelibrary.wiley.com/doi/10.1002/alz.12559' },
          { title: 'Tadalafil & alternde Gehirn-Gefäße – Evidenzüberblick', url: 'https://shanghaiarchivesofpsychiatry.org/en/214067.html' }
        ]
      }
    ]
  },
  {
    id: 'sildenafil',
    name: 'Viagra (Sildenafil)',
    altNames: 'Viagra, Revatio, Sildenafil-Generika, PDE5-Hemmer',
    class: 'Phosphodiesterase-5-Hemmer (PDE5-Hemmer), verschreibungspflichtiges Arzneimittel',
    emoji: '💊',
    short: 'Das Original: die berühmteste Pille der Welt – vom gescheiterten Herzmedikament zum ersten zugelassenen Potenzmittel; heute auch spannend für Gefäßgesundheit, Höhenmedizin und die Demenz-Forschung.',
    moa: 'Sildenafil hemmt das Enzym Phosphodiesterase-5 (PDE5), das den Botenstoff cGMP abbaut. Bei sexueller Erregung setzen Nervenenden Stickstoffmonoxid frei, das die cGMP-Produktion anstößt – cGMP entspannt die Gefäßmuskulatur und lässt Blut einströmen. Sildenafil verlängert und verstärkt dieses Signal (ohne Erregung passiert nichts). Wirkeintritt nach ca. 30–60 Minuten, Wirkdauer 4–6 Stunden – der besser steuerbare Klassiker gegenüber dem lang wirksamen Tadalafil. Da PDE5 auch in den Lungengefäßen sitzt, ist Sildenafil als Revatio bei Lungenhochdruck zugelassen. Beobachtungsdaten verbinden PDE5-Hemmer-Nutzung mit niedrigerem Alzheimer-Risiko (Cleveland Clinic, Nature Aging 2021; Brauer, Neurology 2024) – Korrelation, kein Beweis; kontrollierte Studien laufen.',
    benefits: [
      'Zugelassen und exzellent belegt bei erektiler Dysfunktion (Goldstein, NEJM 1998) – das Original seit 1998.',
      'Als Revatio zugelassen bei pulmonaler arterieller Hypertonie (Lungenhochdruck).',
      'Die Erektion als Gefäß-Frühwarnsystem: ED-Abklärung deckt Herz-Kreislauf-Risiken oft Jahre früher auf.',
      'Beobachtungsdaten: deutlich niedrigeres Alzheimer-Risiko bei Nutzern (bis −69 % Cleveland Clinic 2021; −18–44 % UCL/Neurology 2024) – Korrelation, kein Beweis.',
      'In der Höhenmedizin untersucht (bessere Sauerstoffaufnahme in großer Höhe).',
      'Längst generisch: günstig und seriös per Telemedizin-Rezept verfügbar – kein Grund für Schwarzmarkt-Fälschungen.'
    ],
    risks: [
      'Wichtig: NIEMALS mit Nitraten (Herzmedikamente) kombinieren – Gefahr eines lebensgefährlichen Blutdruckabfalls; Vorsicht auch mit Alphablockern.',
      'Häufig harmlos: Kopfschmerz, Gesichtsröte, verstopfte Nase, selten „Blaustich“ im Sehen.',
      'Selten, aber ernst: Sehstörungen (NAION) und Dauererektion (Priapismus) – Notfälle.',
      'Verschreibungspflichtig – der sichere Weg führt über Arzt/Telemedizin und Apotheke (riesiger Fälschungsmarkt!).'
    ],
    status: 'In DE/EU als Arzneimittel zugelassen (Viagra, Generika, Revatio), verschreibungspflichtig.',
    sources: [
      { title: 'Goldstein et al., NEJM 1998 – Zulassungsstudie Sildenafil bei ED', url: 'https://www.nejm.org/doi/full/10.1056/NEJM199805143382001' },
      { title: 'Fang et al., Nature Aging 2021 – Sildenafil & Alzheimer-Risiko (Cleveland Clinic)', url: 'https://www.nature.com/articles/s43587-021-00138-z' },
      { title: 'Brauer et al., Neurology 2024 – PDE5-Hemmer & Alzheimer (UCL, ~270.000 Männer)', url: 'https://pubmed.ncbi.nlm.nih.gov/38324745/' }
    ],
    community: [
      { title: 'Verschreibungspflichtig – über Arzt/Telemedizin & Apotheke beziehen', url: 'https://www.gelbe-liste.de/wirkstoffe/Sildenafil_23246' }
    ],
    podcasts: [
      {
        title: 'Viagra (Sildenafil): Die blaue Pille im Faktencheck',
        audio: 'audio/viagra-podcast.mp3',
        spotify: '29knKjmuxKerJDsgdHJSse',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 44) · mit Paul & Paula. Die ganze Geschichte der berühmtesten Pille der Welt: vom gescheiterten Herzmedikament UK-92480 über die walisischen Bergarbeiter und die Zulassungsstudien (Boolell 1996; Goldstein, NEJM 1998) bis zum Nobelpreis-Mechanismus (NO–cGMP–PDE5) und zur Longevity-Wende: −69 % Alzheimer-Risiko in der Cleveland-Clinic-Analyse (Nature Aging 2021), −18–44 % in der UCL-Studie (Brauer, Neurology 2024) – ehrlich eingeordnet. Dazu die Erektion als Gefäß-Frühwarnsystem, Höhenmedizin, die Nitrat-Regel und Fun Facts von Schnittblumen bis Hamster-Jetlag. Reine Information, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig. (Veröffentlichung: 15.08.2026, 10:00)',
        sources: [
          { title: 'Goldstein et al., NEJM 1998 – Zulassungsstudie', url: 'https://www.nejm.org/doi/full/10.1056/NEJM199805143382001' },
          { title: 'Fang et al., Nature Aging 2021 – Alzheimer-Analyse', url: 'https://www.nature.com/articles/s43587-021-00138-z' },
          { title: 'Brauer et al., Neurology 2024 – UCL-Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/38324745/' }
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
    short: 'Das am besten untersuchte Immun-Peptid dieser Liste: als Zadaxin in über 30 Ländern zugelassen, stützt es die T-Zell-Abwehr – am überzeugendsten als Begleitung, wenn Chemotherapie oder Bestrahlung die Abwehrzellen dezimieren.',
    moa: 'Synthetisches, N-acetyliertes 28-Aminosäuren-Peptid aus dem Thymus, das als Immunmodulator wirkt. Es aktiviert die Toll-like-Rezeptoren TLR2 und TLR9 auf dendritischen Zellen, Makrophagen und B-Zellen und induziert darüber Typ-I-Interferone (IFN-α/β), IL-12 und TH1-Zytokine (IFN-γ) – das stärkt die zelluläre Abwehr gegen Viren und Tumorzellen. Zusätzlich fördert es die Reifung von T-Zellen im Thymus. Charakteristisch ist eine bidirektionale Modulation: Stimulation bei Immunschwäche, Dämpfung über regulatorische T-Zellen (FOXP3+) bei Immunüberaktivierung. Unter diesen Peptiden hat es mit Abstand die beste klinische Evidenzbasis.',
    benefits: [
      'Stützt geschwächte T-Zell-Zahlen: unter Strahlenchemotherapie bei Lungenkrebs deutlich seltener schwere Lymphopenie (19,1 vs. 62,1 %, nicht randomisierte Phase-2-Studie)',
      'Als Begleitung der Krebstherapie untersucht, nicht als Mittel gegen den Tumor selbst; dort auch seltener Strahlenpneumonitis',
      'In einer randomisierten Melanom-Studie mit 488 Patienten mehr Tumoransprechen zusätzlich zur Chemotherapie, ohne zusätzliche Toxizität',
      'Bei schwerem COVID-19 in einer rückblickenden Auswertung mit geringerer Sterblichkeit verbunden',
      'Immunmodulator statt Booster: stärkt die Abwehr bei Schwäche, ohne sie blind anzuheizen',
      'Ansatz gegen Immunalterung (Thymus-Rückbildung) plausibel, aber nicht in kontrollierten Studien geprüft',
      'In Studien sehr gut verträglich; als Zadaxin seit Jahrzehnten klinisch im Einsatz'
    ],
    risks: [
      'Als Zadaxin in über 30 Ländern zugelassen; in DE/EU und den USA nicht zugelassen.',
      'In der großen Sepsis-Studie (1106 Patienten) kein Überlebensvorteil.',
      'Bei Autoimmunerkrankungen und zusammen mit Immuntherapien (Checkpoint-Hemmer) nur nach ärztlicher Rücksprache.',
      'Frei bezogene Ware auf Qualität und Sterilität prüfen.'
    ],
    status: 'Als Zadaxin (Thymalfasin) in über 30 Ländern zugelassen, v. a. bei chronischer Hepatitis B/C, teils als Immunadjuvans. In Deutschland, der EU und den USA nicht zugelassen.',
    sources: [
      { title: 'Liu F et al., Int J Radiat Oncol Biol Phys 2022 – GASTO-1043, Lymphopenie und Pneumonitis unter Strahlenchemotherapie', url: 'https://pubmed.ncbi.nlm.nih.gov/35870709/' },
      { title: 'Maio M et al., J Clin Oncol 2010 – randomisierte Melanom-Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/20194853/' },
      { title: 'Liu Y et al., Clin Infect Dis 2020 – Thymosin Alpha-1 bei schwerem COVID-19', url: 'https://pubmed.ncbi.nlm.nih.gov/32442287/' },
      { title: 'Wu J et al., BMJ 2025 – TESTS, Thymosin Alpha-1 bei Sepsis (Phase 3)', url: 'https://pubmed.ncbi.nlm.nih.gov/39814420/' },
      { title: 'Kim SD et al., Pharmaceuticals 2026 – Scoping Review Krebsbegleitung', url: 'https://www.mdpi.com/1424-8247/19/9/1492' }
    ],
    community: [
      { title: 'Peptide Therapies – Thymosin Alpha-1 Übersicht', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Thymosin")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'KI-Podcast: Thymosin Alpha-1 – das Immun-Peptid mit Zulassung', audio: 'audio/thymosin-alpha-1-podcast.mp3', spotify: '11QZafzo2jGgDsOl3xxA11', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 7) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Thymosin Alpha-1, den „Dirigenten" des Immunsystems: ein körpereigenes Thymus-Peptid, das T-Zellen reifen lässt und die Abwehr ins Gleichgewicht bringt. Als Zadaxin in über 30 Ländern zugelassen; in der COVID-Studie (Liu et al., Clin Infect Dis 2020) mit geringerer Sterblichkeit verbunden. Longevity-Bezug: Thymus-Schrumpfung und Immunoseneszenz. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'The Hunter Williams Podcast – How Thymosin Alpha 1 Supercharges Your Immune System', url: 'https://open.spotify.com/episode/5Inu125eta0bSTQ7AWdY8N' },
          { title: 'Der Optimizer – Thymosin Alpha-1 & Thymulin (Deutsch)', url: 'https://open.spotify.com/episode/4U3Ahy6POe7Js8ZyRx684S' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/1IVXJBNOAH80HCowX4Soot' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/1M0R88M2B7ljeslKHwuJVg' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/0VbHRK7AzYhIhFVTbCxEbO' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/0B4cpdxgOA85IAPLGiipsH' }
        ] }
    ],
    filterCat: 'Immun'
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
        title: 'Rapamycin: mTOR, Osterinsel & der Star der Longevity-Forschung',
        audio: 'audio/rapamycin-podcast.mp3',
        spotify: '27E8KrXjumCspX3wHKxw64',
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 30) · mit Paul & Paula. Frische, positive KI-Dialogfolge über den heißesten Longevity-Kandidaten: von der Bodenprobe der Osterinsel (1964) zum mTOR-Schalter, der Wachstum gegen zelluläres Aufräumen (Autophagie) tauscht. Mit den Meilensteinen Harrison (Nature 2009, +9–14 % Lebenszeit bei Mäusen), der PEARL-Humanstudie (2024) und der Everolimus-Impfstudie (Sci Transl Med 2014) – und warum niedrig & gepulst statt hoch & täglich der Schlüssel ist. Reine Information, keine Dosier- oder Anwendungsempfehlung – off-label, verschreibungspflichtig.'
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
        note: 'Der Podcast von Paul Höser (Folge 23). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Solides, billiges, zugelassenes Diabetes-Medikament, das über den AMPK-Schalter dieselben Alterns-Signalwege anspricht wie Sport/Fasten. Aber: Longevity bei Gesunden ist Hypothese (TAME-Studie noch offen, ~2026/27), mit realer Kehrseite – Metformin kann Trainings-/Muskelgewinne bremsen. Plus B12-Mangel-Risiko. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig.',
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
    short: 'Ein Long-acting Amylin-Analogon, allein oder als CagriSema mit Semaglutid kombiniert – zwei Sättigungssysteme in einer Spritze, in Phase 3 mit über 20% Gewichtsverlust, aber Magen-Darm-Beschwerden bei fast 80 Prozent.',
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
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 15) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Cagrilintid, das langwirksame Amylin-Analogon – Amylin ist ein zweites Sättigungshormon neben GLP-1. Kombiniert mit Semaglutid ergibt es CagriSema: zwei Sättigungssysteme in einer Spritze, die sich verstärken (Lau et al., Lancet 2021; REDEFINE >20 % Gewicht). Wie Amylin entdeckt wurde, das Firmen-Wettrennen Novo vs. Lilly und die muskelschonende Zukunft. Ehrlicher Rahmen: noch nicht zugelassen – Graumarkt ist unbewiesene DIY-Ware. Reine Information, keine Dosier- oder Anwendungsempfehlung.',
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
    short: 'Die beliebte TRT-Alternative in Tablettenform: hebt das körpereigene Testosteron an und erhält dabei die Fruchtbarkeit. Die US-Zulassung wurde 2015 abgelehnt – die Studien belegten Laborwerte, keinen klinischen Nutzen.',
    moa: 'Enclomiphen ist das reine trans-Isomer von Clomifen und wirkt als selektiver Östrogenrezeptor-Modulator (SERM). Es blockiert Östrogen-Rezeptoren im Hypothalamus/der Hypophyse, wodurch mehr LH und FSH ausgeschüttet werden – die Hoden produzieren daraufhin mehr eigenes Testosteron. Anders als klassische TRT (die die eigene Produktion und Spermienbildung unterdrückt) erhält Enclomiphen die Fruchtbarkeit und die Hodenfunktion. Deshalb ist es v.a. bei sekundärem Hypogonadismus und bei Kinderwunsch beliebt.',
    benefits: [
      'Hebt das EIGENE Testosteron – ohne Spritze, als Tablette.',
      'Erhält Fruchtbarkeit und Hodenvolumen (im Gegensatz zur klassischen TRT).',
      'In zwei Phase-3-Studien (256 Männer, 16 Wochen) fiel die Spermienkonzentration nur bei 2–5 % unter den kritischen Wert – unter Testosteron-Gel bei 24–49 %.',
      'Sauberer als älteres Clomifen (nur das aktive Isomer, weniger Nebenwirkungen).'
    ],
    risks: [
      'Verschreibungspflichtig – gehört ärztlich begleitet (Blutwerte, Östradiol).',
      'Mögliche Nebenwirkungen: Sehstörungen (selten), Stimmungsschwankungen, Kopfschmerzen. In den Phase-3-Studien wurden bei 21 % Nebenwirkungen gemeldet, keine schwere, kein Unterschied zwischen den Gruppen.',
      'Wirkt nur bei intakter Hypothalamus-Hypophysen-Hoden-Achse (sekundärer Hypogonadismus).',
      'In DE nicht zugelassen – Bezug oft über Graumarkt (ungeprüft).',
      'Die FDA lehnte die Zulassung am 1.12.2015 ab: Das Design der Phase-3-Studien sei nicht mehr geeignet, einen klinischen Nutzen zu belegen, dazu drei Beanstandungen zu Einschlusskriterien, Dosistitration und Validierung der Messmethode. Beschwerde-Fragebögen gibt es nur in einzelnen Clomifen-Studien, mit gemischtem Ergebnis; für Enclomifen selbst wurden sie nie erhoben. Auch die Europäische Arzneimittel-Agentur lehnte 2018 die Zulassung ab: Symptome nicht untersucht, Risiko venöser Thromboembolien.',
      'Schlechtere Sicherheitsdatenlage als die klassische Testosterontherapie – nicht weil die Substanz gefährlicher wäre, sondern weil niemand lange genug hingeschaut hat: 256 Männer über 16 Wochen gegenüber 5246 Männern über etwa 33 Monate (TRAVERSE). Die Übersichtsarbeit nennt ihre eigene Sicherheitsanalyse unterpowert.',
      'Dopingrelevant: Clomifen steht auf der Verbotsliste der Welt-Anti-Doping-Agentur unter den Hormon- und Stoffwechselmodulatoren; das US-Verteidigungsministerium führt beide Substanzen auf seiner Verbotsliste.'
    ],
    status: 'Enclomifen ist nirgends als Arzneimittel zugelassen – auch nicht in den USA. Was dort angeboten wird, läuft über Rezepturherstellung, weil der Stoff Bestandteil des zugelassenen Clomifens ist. In DE ist Clomifen zugelassen, aber für die Auslösung des Eisprungs bei Frauen; für Männer mit niedrigem Testosteron gibt es keine Zulassung. Im Netz wird die Substanz als Forschungschemikalie deklariert, nicht zum menschlichen Verzehr.',
    sources: [
      { title: 'Kim et al., BJU International 2016 — zwei parallele, randomisierte, doppelblinde Phase-3-Studien zu Enclomifen, 256 Männer, 16 Wochen, Vergleich gegen Testosteron-Gel und Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/26496621/' },
      { title: 'Hohl et al., Archives of Endocrinology and Metabolism 2025 — Übersichtsarbeit über 10 randomisierte Studien zu Clomifen und Enclomifen, 819 Männer – Gesamttestosteron +274 ng/dl gegenüber Placebo, Unterschied zum Gel 5,4 ng/dl (p = 0,83)', url: 'https://pubmed.ncbi.nlm.nih.gov/41066380/' },
      { title: 'TRAVERSE (Lincoff et al., NEJM 2023) – kardiovaskuläre Sicherheit der Testosterontherapie, 5246 Männer, etwa 33 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/37326322/' },
      { title: 'Ablehnungsbescheid der US-Zulassungsbehörde vom 1.12.2015', url: 'https://www.sec.gov/Archives/edgar/data/897075/000117184315006596/newsrelease.htm' },
      { title: 'Verbotsliste der Welt-Anti-Doping-Agentur – Hormon- und Stoffwechselmodulatoren', url: 'https://www.wada-ama.org/en/resources/world-anti-doping-code-and-international-standards/prohibited-list' }
    ],
    community: [
      { title: 'ExcelMale – Community-Diskussionen zu Hormonoptimierung', url: 'https://www.excelmale.com/' }
    ],
    filterCat: 'Sonstige'
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
    short: 'Der bewährte Klassiker zum Hodenerhalt: hCG ahmt LH nach und regt die Hoden direkt zur Testosteron- und Spermienproduktion an – beim Fruchtbarkeitserhalt unter TRT verbreitet, aber meist off label. Zum Abnehmen ist hCG seit Jahrzehnten widerlegt.',
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
    short: 'Der GH-Klassiker: ein kurzes GHRH-Fragment, das die Hirnanhangsdrüse zu Wachstumshormon-Pulsen anregt – beliebt als Einstieg, für gesunde Erwachsene aber nie zugelassen und nie geprüft.',
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
    ],
    podcasts: [
      {
        title: 'Sermorelin & Tesamorelin: Die GHRH-Klassiker im Faktencheck',
        audio: 'audio/sermorelin-tesamorelin-podcast.mp3',
        spotify: '7KdLZhGdPYPWodtUB23U2L',
        lengthLabel: '\u2248 12 Min \u00b7 KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul H\u00f6ser (Folge 49) \u00b7 mit Paul & Paula. Doppelfolge und Finale der Wachstumshormon-Serie: Sermorelin als bezahlbarer, physiologischer Klassiker der US-Anti-Aging-Kliniken \u2013 und Tesamorelin (Egrifta) mit den st\u00e4rksten Daten der Klasse: \u221215 % viszerales Fett (Falutz, NEJM 2007) und \u00fcber ein Drittel weniger Leberfett (Stanley, Lancet HIV 2019). Reine Information, keine Dosier- oder Anwendungsempfehlung. (Ver\u00f6ffentlichung: 20.08.2026, 10:00)'
      }
    ]
  },
  {
    id: 'mots-c',
    name: 'MOTS-c',
    altNames: 'Mitochondrial-derived peptide',
    class: 'Mitochondriales Peptid (16 Aminosäuren, kodiert in mtDNA)',
    emoji: '🧬',
    short: 'Ein Signalpeptid aus dem Erbgut der Mitochondrien: aktiviert im Labor den Energie-Sensor AMPK – denselben Schalter wie Sport und Fasten – und steigt beim Menschen durch Training an. Die Wirkung einer Gabe von außen ist bisher nur an Mäusen gezeigt.',
    moa: 'Aus 16 Aminosäuren bestehendes, mitochondrial kodiertes Peptid (aus dem 12S-rRNA-Gen der mtDNA), das den Energiestoffwechsel primär über Aktivierung der AMP-aktivierten Proteinkinase (AMPK) reguliert – denselben Signalweg, den auch Metformin und Ausdauertraining anstoßen. Nach zellulärem Stress (oxidativer Stress, Glukosemangel, Belastung) wandert es in den Zellkern und steuert dort Gene für mitochondriale Neubildung (PGC-1α), antioxidative Abwehr (NRF2) und das Insulinsignal. Zusätzlich hemmt es den entzündungsfördernden NF-κB-Weg. Die Effekte ähneln molekular denen von körperlichem Training (Trainings-Mimetikum). Die Daten stammen überwiegend aus Tierstudien plus frühen Kohortendaten beim Menschen.',
    benefits: [
      'Verhinderte bei Mäusen altersabhängige und ernährungsbedingte Insulinresistenz sowie Übergewicht durch fettreiche Kost – präklinisch',
      'Aktiviert AMPK über den Folatzyklus; wandert unter Stress in den Zellkern und reguliert antioxidative Gene – Zellkultur',
      'Steigerte bei jungen, mittelalten und alten Mäusen die Laufleistung, alte Tiere liefen 2-fach länger',
      'Gehört beim Menschen zur Trainingsantwort: nach Belastung im Muskel 11,9-fach, im Blut 1,6-fach erhöht (10 Probanden)',
      'Blutspiegel sinkt mit dem Alter (−21 % bei 70- bis 81-Jährigen), der Muskelspiegel steigt dagegen',
      'Eine nordostasiatische Genvariante im MOTS-c-Abschnitt wird als möglicher Baustein der Langlebigkeit in Japan diskutiert – Hypothese, keine Spiegelmessung'
    ],
    risks: [
      'Keine abgeschlossene klinische Studie, in der Menschen MOTS-c erhalten haben; keine systematischen Sicherheitsdaten.',
      'Verstärkt im Tier die Insulinwirkung – Kombination mit Blutzuckersenkern ist nicht untersucht.',
      'Seit 2024 namentlich auf der WADA-Liste (S4.4.1 AMPK-Aktivatoren), jederzeit verboten.',
      'Research-Ware ohne Qualitätskontrolle.'
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
      { title: 'KI-Podcast: MOTS-c – das mitochondriale Peptid', audio: 'audio/mots-c-podcast.mp3', spotify: '0QdJ0uUCvxloFqJVXLIWre', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 4) · mit Paul & Paula. Frische, positive KI-Dialogfolge über MOTS-c, das mitochondriale Peptid: warum die Kraftwerke der Zelle ein eigenes Signalmolekül verschicken, wie es über den Energie-Sensor AMPK wirkt („Sport in Molekülform"), was die Studien von Lee (Cell Metab 2015) und Reynolds (Nat Commun 2021) zeigten und warum es für Stoffwechsel und Longevity so spannend ist. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'The Hunter Williams Podcast – The MOTS-c Masterclass', url: 'https://open.spotify.com/episode/1gm3FXwjaB26mzqmf4ClV8' },
          { title: 'Peptide of The Week – MOTS-c', url: 'https://open.spotify.com/episode/50ivCghdwnxWZfcWazeRvI' },
          { title: 'The Peptide Effect – MOTS-c Explained', url: 'https://open.spotify.com/episode/6dgKkSY9T1P80besGDJJ1D' },
          { title: 'THE MANLAB – MOTS-C: Worth the Hype?', url: 'https://open.spotify.com/episode/4LBOdxUgoNVip9cYl8ZIIQ' },
          { title: 'GSD Mode – MOTS-c Peptide Breakdown', url: 'https://open.spotify.com/episode/1VY07hZk7wBKtjshJlyOKL' }
        ] }
    ],
    filterCat: 'Longevity'
  },
  {
    id: 'epitalon',
    name: 'Epitalon (Epithalon)',
    altNames: 'Epithalamin, AEDG-Tetrapeptid',
    class: 'Tetrapeptid (Ala-Glu-Asp-Gly), Pinealdrüsen-Mimetikum',
    emoji: '🌙',
    short: 'Ein Zirbeldrüsen-Tetrapeptid aus der Chawinson-Schule. Die Telomerase-Aktivierung in menschlichen Zellen ist seit 2025 unabhängig bestätigt – Humanstudien mit Epitalon selbst gibt es nicht, die Langzeitdaten stammen vom Extrakt Epithalamin.',
    moa: 'Synthetisches Tetrapeptid (Ala-Glu-Asp-Gly, ~390 g/mol), abgeleitet aus dem Zirbeldrüsen-Extrakt Epithalamin. Hauptmechanismus ist die Induktion der hTERT-Genexpression (katalytische Telomerase-Untereinheit), wodurch Telomere in somatischen Zellen verlängert und die replikative Zellalterung verzögert werden (in Zellkultur über das Hayflick-Limit hinaus). Parallel hemmt es den p53/p21- und NF-κB-Weg und dämpft so die seneszenz-assoziierte Entzündung. Als zweiten Mechanismus stimuliert Epitalon die Zirbeldrüse zur Melatoninbildung und stabilisiert den Tag-Nacht-Rhythmus. Die Human-Evidenz stammt überwiegend aus russischen Studien einer einzelnen Forschungsgruppe (Khavinson) und ist außerhalb davon kaum unabhängig repliziert.',
    benefits: [
      'Aktiviert in menschlichen Zellkulturen die Telomerase (hTERT) und verlängert Telomere – 2003 von der Entwicklergruppe gezeigt, 2025 unabhängig bestätigt (Brunel University London)',
      'Behandelte fetale Fibroblasten schafften in Zellkultur 10 zusätzliche Teilungen über ihre natürliche Grenze hinaus',
      'Bei Mäusen 12,3 Prozent längere maximale Lebensdauer und weniger Chromosomenschäden – die mittlere Lebensdauer änderte sich nicht',
      'Soll die Melatoninbildung und den Tag-Nacht-Rhythmus stabilisieren; gezeigt wurde das mit dem Extrakt Epithalamin bei älteren Herzpatienten, nicht mit Epitalon selbst',
      'Anwender berichten als Erstes von besserem Schlaf – Erfahrungsberichte, keine kontrollierten Studien',
      'Wirkt antioxidativ und auf Immunbotenstoffe – Labor- und Tierdaten'
    ],
    risks: [
      'Randomisierte Humanstudien, Pharmakokinetik-Daten oder registrierte klinische Studien mit Epitalon fehlen; die Humandaten zum Extrakt stammen aus einer einzigen russischen Arbeitsgruppe.',
      'Telomerase-Aktivierung ist ein zweischneidiger Mechanismus: In der Zellstudie von 2025 verlängerten sich auch in Krebszellen die Telomere. Bei Krebserkrankung oder Krebs in der Vorgeschichte gibt es keine Datengrundlage.',
      'Als Research-Ware ohne pharmazeutische Qualitätskontrolle; nicht als Arzneimittel zugelassen.'
    ],
    status: 'Forschungspeptid; in Deutschland und der EU nicht als Arzneimittel zugelassen.',
    sources: [
      { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epithalon induziert Telomerase und Telomerverlängerung', url: 'https://pubmed.ncbi.nlm.nih.gov/12937682/' },
      { title: 'Anisimov VN et al., Biogerontology 2003 – Lebensdauer und Tumoren bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/14501183/' },
      { title: 'Al-Dulaimi S et al., Biogerontology 2025 – unabhängige Replikation in menschlichen Zelllinien', url: 'https://pubmed.ncbi.nlm.nih.gov/40908429/' },
      { title: 'Korkushko OV et al., Bull Exp Biol Med 2006 – Epithalamin, 12 Jahre bei älteren Herzpatienten', url: 'https://pubmed.ncbi.nlm.nih.gov/17426848/' }
    ],
    community: [
      { title: 'Peptide Therapies – inkl. Epitalon', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Epitalon")', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'Epitalon: Telomer-Verlängerung als Anti-Aging im Faktencheck', audio: 'audio/epitalon-podcast.mp3', spotify: '3fwqZGKZCED0D8iimUNcnm', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 24) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche zur verlockenden Telomerase-/Telomer-Story: auf Zellebene gibt es Daten (inkl. unabhängiger Replikation 2025), beim Menschen fehlt der belastbare Beweis fast völlig (kleine, unverblindete russische Studien). Plus die offene Krebsfrage bei einem Telomerase-Aktivator und der Melatonin-/Schlaf-Bezug. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epitalon & Telomerlänge', url: 'https://pubmed.ncbi.nlm.nih.gov/14760439/' },
          { title: 'Al-Dulaimi et al., Biogerontology 2025 – unabhängige Replikation der Telomer-Verlängerung (Zellen)', url: 'https://link.springer.com/article/10.1007/s10522-025-10315-x' }
        ] }
    ],
    filterCat: 'Longevity'
  },
  {
    id: 'selank',
    name: 'Selank',
    altNames: 'Thr-Lys-Pro-Arg-Pro-Gly-Pro, Tuftsin-Analogon',
    class: 'Synthetisches Tuftsin-Analogon (Heptapeptid), Anxiolytikum',
    emoji: '🌿',
    short: 'Ein russisches Tuftsin-Peptid, dem angstlösende Effekte ohne Sedierung und ohne Abhängigkeitspotenzial zugeschrieben werden. Die Studien dazu stammen fast ausschließlich aus Russland und sind klein.',
    moa: 'Selank ist ein synthetisches Analogon des endogenen Tetrapeptids Tuftsin und wurde zur Stabilisierung gegen enzymatischen Abbau modifiziert. Diskutiert werden Einflüsse auf das GABAerge sowie serotonerge System und eine Modulation der Konzentration von Enkephalinen. In tierexperimentellen und frühen klinischen Untersuchungen wurden anxiolytische und immunmodulierende Effekte beschrieben. Die Anwendung erfolgt in Russland üblicherweise intranasal. Die Evidenz basiert überwiegend auf russischsprachigen Studien mit begrenzter externer Bestätigung.',
    benefits: [
      'In drei russischen Vergleichsstudien mit Angstpatienten (60 bis 70 Teilnehmer) ähnlich angstlösend wie Benzodiazepine, ohne ausgeprägte Sedierung.',
      'Als Zusatz zu Phenazepam früherer Wirkeintritt und weniger Benzodiazepin-Nebenwirkungen, auch nach dem Absetzen.',
      'Zusätzlich leicht aktivierende, gegen Erschöpfung gerichtete Wirkung beschrieben.',
      'Im Labor Feinregler am GABA-System statt Hauptschalter; BDNF-Beteiligung im Tiermodell.',
      'Hinweise auf immunmodulierende Eigenschaften aus dem Tuftsin-Bezug (Tiermodell).',
      'In der russischen Anwendung als gut verträglich beschrieben.'
    ],
    risks: [
      'Evidenz überwiegend aus Russland, kein Placebovergleich; die internationale Bestätigung steht aus.',
      'Für Gesunde als Nootropikum nicht untersucht; Langzeitdaten fehlen.',
      'Kombination mit Beruhigungsmitteln nur ärztlich begleitet.',
      'In DE/EU nicht zugelassen; als Research-Ware auf Qualität achten.'
    ],
    status: 'In Russland registriert; in DE/EU nicht zugelassen.',
    sources: [
      { title: 'Zozulia et al., Zh Nevrol Psikhiatr 2008 – Selank bei generalisierter Angststörung (62 Patienten)', url: 'https://pubmed.ncbi.nlm.nih.gov/18454096/' },
      { title: 'Medvedev et al., Zh Nevrol Psikhiatr 2015 – Selank als Zusatz zu Phenazepam (70 Patienten)', url: 'https://pubmed.ncbi.nlm.nih.gov/26356395/' },
      { title: 'Volkova et al., Front Pharmacol 2016 – Selank und GABA-Genexpression', url: 'https://pubmed.ncbi.nlm.nih.gov/26924987/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      { title: 'Selank: Angst lösen ohne Benzo-Nebenwirkungen? Das russische Peptid im Faktencheck', audio: 'audio/selank-podcast.mp3', spotify: '4aVYSN3bbxyUtzXsLmzNGg', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula, ElevenLabs-Stimmen)', note: 'Der Podcast von Paul Höser (Folge 25). KI-generierte deutsche Folge mit realistischen Stimmen (ElevenLabs), inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet die vielversprechende, aber überwiegend russische Studienlage ein: in Russland als Angst-Medikament zugelassen, mildes Sicherheitsprofil – die große internationale Bestätigung steht aber noch aus. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – in Deutschland nicht als Arzneimittel zugelassen.', sources: [
          { title: 'Zozulia et al., Zh Nevrol Psikhiatr 2008 – Selank bei generalisierter Angststörung', url: 'https://pubmed.ncbi.nlm.nih.gov/18454096/' },
          { title: 'Volkova et al., Front Pharmacol 2016 – Selank und GABA-Genexpression', url: 'https://pubmed.ncbi.nlm.nih.gov/26924987/' }
        ] }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'semax',
    name: 'Semax',
    altNames: 'ACTH(4-7)-Pro-Gly-Pro',
    class: 'Synthetisches ACTH-Fragment-Analogon (Heptapeptid), Nootropikum',
    emoji: '🧠',
    short: 'Ein in Russland entwickeltes Nootropikum-Peptid, das BDNF/NGF anhebt und neuroprotektiv untersucht wird – intranasal angewendet, aber ohne systematische Nebenwirkungserfassung. Im Handel ist meist NA-Semax Amidat, nicht Semax.',
    moa: 'Semax leitet sich von einem Fragment des adrenocorticotropen Hormons ab, wobei die hormonelle ACTH-Wirkung weitgehend fehlt. Diskutiert werden eine Erhöhung von BDNF und NGF sowie modulierende Effekte auf dopaminerge und serotonerge Systeme. In Tiermodellen wurden neuroprotektive und antioxidative Effekte, etwa bei zerebraler Ischämie, beschrieben. Die Applikation erfolgt in der russischen Praxis meist intranasal. Ein Großteil der Evidenz stammt aus russischsprachigen Untersuchungen mit begrenzter internationaler Replikation.',
    benefits: [
      'Russischsprachige, nicht placebokontrollierte Arbeiten berichten bessere Aufmerksamkeit und Gedächtnisleistung; bei Gesunden gibt es nur Bildgebungsbefunde (fMRT) gegen Placebo.',
      'Diskutierte neuroprotektive Effekte in Modellen von Schlaganfall und Ischämie.',
      'Hinweise auf antioxidative und entzündungsmodulierende Eigenschaften.',
      'In Berichten mit Stressresistenz und Stimmungsstabilisierung in Verbindung gebracht.',
      'Nicht-hormonelles ACTH-Derivat ohne relevante corticotrope Wirkung.',
      'In der russischen Anwendung als gut verträglich beschrieben; systematische Nebenwirkungserfassung fehlt.'
    ],
    risks: [
      'Evidenz stammt fast nur aus Russland; unabhängige Bestätigung ist dünn.',
      'In DE/EU nicht zugelassen; als Research-Ware auf Reinheit achten.',
      'FDA (2026): bei unklaren Verunreinigungen und Aggregaten Immunogenität nicht auszuschließen; ein FAERS-Bericht (Augenschmerz/Brennen nach Nasentropfen, 2024).',
      'Für NA-Semax Amidat keine Humandaten; im Zellversuch hob die N-Acetylierung den Schutz vor Kupfertoxizität auf (Magrì 2016).'
    ],
    status: 'In Russland registriert; in DE/EU nicht zugelassen. Russland: registriert per Erlass Nr. 294 vom 20.12.1994 als Nasentropfen, eine stärkere Form seit 2001; laut Hersteller auf der Liste lebenswichtiger Arzneimittel. USA: Das FDA-Beratergremium für Rezepturarzneimittel (PCAC) stimmte am 24.07.2026 laut Presseberichten mit 8 : 5 (1 Enthaltung) für die Aufnahme in die 503A-Rezepturliste, gegen die Empfehlung der FDA-Fachleute; nicht bindend, Entscheidung der FDA offen (Stand 24.09.2026).',
    sources: [
      { title: 'Kaplan et al., Restor Neurol Neurosci 2002 – Semax und neurotrophe Faktoren', url: 'https://pubmed.ncbi.nlm.nih.gov/12454361/' },
      { title: 'Gusev et al., Cerebrovasc Dis 2011 – Semax bei ischämischem Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/21654167/' },
      { title: 'FDA, Briefing zum Pharmacy Compounding Advisory Committee 2026 – Bewertung von Semax', url: 'https://www.fda.gov/media/193348/download' },
      { title: 'Lebedeva et al., Bull Exp Biol Med 2018 – fMRT nach Semax gegen Placebo bei 24 Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/30225715/' },
      { title: 'Magrì et al., J Inorg Biochem 2016 – Acetylierung hebt Zellschutz vor Kupfertoxizität auf', url: 'https://pubmed.ncbi.nlm.nih.gov/27586814/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'Semax: Russisches Nootropikum im Faktencheck',
        audio: 'audio/semax-podcast.mp3',
        spotify: '4pI0U5nmVsezSLZIvy74iw',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 11) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Semax, das russische Nootropikum-Peptid: ein ACTH-Fragment ohne Hormonwirkung, das BDNF und NGF – den „Dünger fürs Gehirn" – anhebt und so Fokus, Stimmung und Neuroplastizität fördert. In Russland zugelassen (u. a. beim Schlaganfall, Gusev et al. 2011), schnell über die Nase, sehr gut verträglich, gern mit Selank kombiniert. Ehrlicher Rahmen: Evidenz überwiegend russisch, bei uns Graumarkt. Reine Information, keine Dosier- oder Anwendungsempfehlung.',
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
    short: 'Ein Gemisch neurotropher Peptide mit randomisierten Mehrzentren-Studien zu Alzheimer und Schlaganfall, in mehreren Ländern als Medikament zugelassen – als Gedächtnismittel für Gesunde gibt es dagegen keine Studienlage.',
    moa: 'Cerebrolysin ist ein standardisiertes Hydrolysat aus Schweinehirn und enthält niedermolekulare neurotrophe Peptide, die die Wirkung körpereigener Wachstumsfaktoren (wie BDNF, GDNF) nachahmen sollen. Es soll das Überleben von Nervenzellen fördern, die Bildung neuer Synapsen unterstützen und neuroprotektiv gegen Schädigung wirken. Anders als die meisten „Biohacking-Peptide" wurde es in echten, großen klinischen Studien untersucht. Was darin wirkt, ist offen: Eine Analyse einer Internetprobe (Drug Test Anal 2015) fand 638 Peptide, vor allem aus Tubulin, Aktin und Myelin-Basisprotein, aber keine Fragmente bekannter Wachstumsfaktoren. Seit 2025 wurden mindestens sieben Tierversuchsarbeiten zu Cerebrolysin aus zwei Laboren zurückgezogen; Patientenstudien sind davon nicht betroffen. Verabreicht wird es klassisch als Infusion/Injektion.',
    benefits: [
      'Randomisierte Studien bei Schlaganfall, Demenz und Schädel-Hirn-Trauma; Reha-Studie CARS (n = 208) positiv für Armfunktion; als Nootropikum für Gesunde keine Studien.',
      'In mehreren Ländern als Arzneimittel zugelassen.',
      'Soll neurotrophe Wirkung nachahmen (Tierdaten; Teile davon zurückgezogen); am Menschen nicht als Mechanismus belegt.',
      'Wird für kognitive Erholung nach Schlaganfall und bei Demenz eingesetzt.'
    ],
    risks: [
      'In Deutschland keine Zulassung ermittelt; außerhalb ärztlicher Behandlung Bezug über den Graumarkt, Inhalt ungeprüft.',
      'Als Injektion/Infusion: Anwendungs-, Infektions- und Fehldosier-Risiken.',
      'Selten allergische Reaktionen möglich (tierisches Hydrolysat).',
      'Effektstärke bei Gesunden (Biohacking) ist weniger belegt als bei Erkrankungen.',
      'Gegenanzeigen laut Fachinformation: Status epilepticus, schwere Nierenfunktionsstörungen; Vorsicht bei Epilepsie. Selten Unruhe und Schlaflosigkeit.',
      'Cochrane 2023: nicht tödliche schwerwiegende Ereignisse häufiger (RR 2,39; moderate Sicherheit).'
    ],
    status: 'In Österreich (EU) national als verschreibungspflichtiges Arzneimittel zugelassen (Zulassungsnr. 1-21380, EVER Neuro Pharma, Unterach); verbreitet in Russland, Osteuropa, China. In den USA nicht registriert. Für Deutschland keine Zulassung ermittelt.',
    sources: [
      { title: 'Ziganshina et al., Cochrane Database Syst Rev 2023 (CD007026.pub7) — Cerebrolysin beim akuten ischämischen Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/37818733/' },
      { title: 'Cui et al., Cochrane Database Syst Rev 2019 (CD008900.pub3) — Cerebrolysin bei vaskulärer Demenz', url: 'https://pubmed.ncbi.nlm.nih.gov/31710397/' },
      { title: 'Strilciuc et al., Pharmaceuticals 2021;14:1297 — Sicherheitsauswertung von 12 randomisierten Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/34959697/' },
      { title: 'Muresanu et al., Stroke 2016 — CARS-Studie zur Erholung nach Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/26564102/' },
      { title: 'Gevaert et al., Drug Test Anal 2015 — Peptidprofil einer im Internet gekauften Probe', url: 'https://pubmed.ncbi.nlm.nih.gov/26017115/' },
      { title: 'Fachinformation Cerebrolysin, Österreich (Zulassungsnr. 1-21380), Arzneispezialitätenregister des BASG', url: 'https://aspregister.basg.gv.at/' }
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
    short: 'BPC-157 als Arginin-Salz: dieselben 15 Aminosäuren, groß geworden, als die FDA BPC-157 2023 für Rezepturapotheken sperrte. Breite Tierdaten zur Sequenz, aber keine einzige eigene Studie zu PDA.',
    moa: 'Pentadeca Arginate hat dieselbe 15-Aminosäuren-Sequenz wie BPC-157, liegt aber als Arginat-Salz statt als Acetat vor. Anbieter werben mit höherer Stabilität, besserer Löslichkeit und Aufnahme – veröffentlichte Daten dazu gibt es nicht. Der postulierte Wirkmechanismus entspricht BPC-157: Gefäßneubildung über den VEGFR2-Signalweg, Aktivierung von Fibroblasten und Modulation des Stickstoffmonoxid-Systems, dazu entzündungsdämpfende Effekte. Das ist in Zell- und Tiermodellen konsistent beschrieben; eine NO-abhängige Gefäßerweiterung wurde 2026 an menschlichem Arteriengewebe im Labor gezeigt. Eigenständige Studien zu PDA fehlen; am Menschen gibt es zur Sequenz nur 3 unkontrollierte Pilotstudien.',
    benefits: [
      'Identische Sequenz wie BPC-157 – stützt sich auf dessen breite Tierdatenbasis.',
      'Im Tiermodell bessere Heilung von Sehnen, Bändern, Muskel, Knochen und Magen-Darm-Schleimhaut (BPC-157-Daten).',
      'Fördert im Modell Gefäßneubildung, Fibroblastenaktivität und Durchblutung über das NO-System.',
      'Arginat-Form laut Anbietern stabiler und besser löslich (Herstellerangabe, nicht publiziert).',
      'Aus US-Praxen überwiegend positive Anwenderberichte, v. a. bei Sehnen und rund um Operationen (ohne Kontrollgruppe).'
    ],
    risks: [
      'Eigenständige Studien zu PDA fehlen völlig – Wirkung ist aus BPC-157 übertragen, dort am Menschen nur 3 unkontrollierte Pilotstudien.',
      'Nicht als Arzneimittel zugelassen; reine Research-/Graumarkt-Ware (Reinheit ungewiss).',
      'Im Wettkampfsport wie BPC-157 verboten bzw. kritisch (WADA S0).',
      'Keine klinischen Sicherheitsdaten; wegen der gefäßfördernden Wirkung bei aktiven Krebserkrankungen meiden.'
    ],
    status: 'Nicht zugelassen. Keine eigene Publikation; Evidenz aus BPC-157 abgeleitet. USA: BPC-157 seit 2023 für Rezepturapotheken gesperrt, ein FDA-Beratungsgremium empfahl 2026 die Wiederaufnahme (nicht bindend).',
    sources: [
      { title: 'Vasireddi et al., HSS J 2025 – BPC-157 in der orthopädischen Sportmedizin (systematischer Review)', url: 'https://pubmed.ncbi.nlm.nih.gov/40756949/' },
      { title: 'McGuire et al., Curr Rev Musculoskelet Med 2025 – BPC-157 für Muskel- und Sehnenheilung', url: 'https://pubmed.ncbi.nlm.nih.gov/40789979/' },
      { title: 'Mateescu et al., Pharmaceutics 2026 – BPC-157 aus Sicht der Arzneimittelentwicklung', url: 'https://pubmed.ncbi.nlm.nih.gov/42198317/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Pentadeca Arginate (PDA): Der Nachfolger von BPC-157 im Faktencheck', audio: 'audio/pentadeca-arginate-podcast.mp3', spotify: '25P0QX2mR0rtaupodPvMpC', lengthLabel: '≈ 14 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 40) · mit Paul & Paula. Als die FDA Ende 2023 BPC-157 ausbremste, füllte PDA die Lücke: dieselbe 15-Aminosäuren-Sequenz, aber als stabileres Arginat-Salz. Die Folge erzählt die Sikirić-Forschung (Brcic 2009, Seiwerth 2021), den Mechanismus (VEGFR2-Angiogenese, Fibroblasten, NO), Einsatzfelder von Sehne bis Darm, Prä-/Post-OP-Protokolle, den neuen Wolverine-Stack mit TB-500 – und ordnet die Evidenz ehrlich ein (keine eigenen Humanstudien). Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Brcic et al., J Physiol Pharmacol 2009 – BPC-157 und Gefäßneubildung in Muskel- und Sehnenheilung', url: 'https://pubmed.ncbi.nlm.nih.gov/20388964/' },
          { title: 'Vasireddi et al., HSS J 2025 – BPC-157 in der orthopädischen Sportmedizin (systematischer Review)', url: 'https://pubmed.ncbi.nlm.nih.gov/40756949/' }
        ] }
    ],
    filterCat: 'Immun'
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
    short: 'Ein „Sport-Mimetikum": Es aktiviert im Labor die zellulären Energie-Schalter (ERR). Mehr Ausdauer und Fettabbau sind bislang ausschließlich Mausdaten – am Menschen ist die Substanz nie untersucht worden.',
    moa: 'Selektiver Agonist der Estrogen-Related Receptors (ERRα, β, γ) – Transkriptionsfaktoren, die mitochondriale Biogenese und Fettoxidation hochregulieren.',
    benefits: [
      'Erhöht Ausdauer in Mäusen ohne Training (+45–50%)',
      'Reduzierte in Mäusen die Fettmasse und verbesserte die Glukose-Toleranz',
      'Erhöhte im Mausmodell oxidative Muskelfasern (Typ I)',
      'Diskutiertes Potenzial gegen Sarkopenie und Stoffwechselerkrankungen – bisher Hypothese'
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
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 5) · mit Paul & Paula. Frische, positive KI-Dialogfolge über SLU-PP-332, das „Exercise-Mimetikum": ein kleines Molekül, das über die ERR-Schalter die Anpassung an Ausdauertraining nachahmt – mehr Mitochondrien, mehr Fettverbrennung, mehr Ausdauer. Was die Nature-Metabolism-Studie 2024 (Billon et al.) in Mäusen zeigte, die Medizin-Vision „Bewegung in Tablettenform" und der ehrliche Rahmen: bisher nur Tierdaten. Reine Information, keine Dosier- oder Anwendungsempfehlung.',
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
    short: 'Hemmt das Enzym NNMT und hebt damit in Zellen NAD+ und den Methylgruppen-Spender SAM. Fettverlust ohne Appetitzügelung und mehr Muskelkraft sind an Mäusen gemessen; Studien am Menschen gibt es nicht.',
    moa: 'Selektive Hemmung der Nicotinamid-N-Methyltransferase (NNMT). NNMT methyliert Nicotinamid mit SAM als Methylgruppenspender und entzieht dem NAD+-Kreislauf damit einen Baustein. Das Enzym ist im weißen Fettgewebe und in der Leber fettleibiger und diabetischer Mäuse verstärkt aktiv. Hemmung senkt in Fettzellen das Reaktionsprodukt 1-Methylnicotinamid, hebt NAD+ und SAM und unterdrückt die Fettneubildung. Dass ein Herunterfahren von NNMT vor ernährungsbedingtem Übergewicht schützt und dabei der Energieverbrauch der Zellen steigt, stammt aus dem genetischen Mausmodell (Kraus et al., Nature 2014); der Wirkstoffversuch von 2018 zeigte Gewichts- und Fettverlust bei unverändertem Fressverhalten, ohne den Energieverbrauch selbst zu messen.',
    benefits: [
      'Fettleibige Mäuse verloren über 11 Tage 2,0 g Gewicht, während Kontrolltiere 0,6 g zulegten; Bauchfett minus etwa 35 Prozent (Neelakantan et al. 2018).',
      'Der Verlust lief nicht über den Appetit: Der Futterverzehr war in beiden Gruppen praktisch gleich.',
      'Hebt in kultivierten Fettzellen NAD+ und SAM und unterdrückt die Fettneubildung; verwandte Methyltransferasen werden nicht gehemmt.',
      'Bei 24 Monate alten Mäusen nach Muskelverletzung nahezu doppelte Faserquerschnitte und rund 70 Prozent mehr Spitzenkraft (2019).',
      'Im Trainingsvergleich an alten Mäusen rund 40 Prozent mehr Griffkraft unter Wirkstoff allein, 20 Prozent unter Training allein, rund 60 Prozent in der Kombination (2024).',
      'Über 28 Tage bessere orale Glukosetoleranz, höhere Insulinsensitivität und mildere Fettleber bei fettleibigen Mäusen (Babula et al. 2024).',
      'Kleines Molekül statt Peptid: in Ratten oral verfügbar (38,4 Prozent), daher als Kapsel diskutiert.'
    ],
    risks: [
      'Keine veröffentlichte Humanstudie und kein Eintrag in den öffentlichen Studienregistern.',
      'Pharmakokinetik nur aus Ratten; Verweildauer und Aufnahme beim Menschen unbekannt.',
      'NNMT ist in vielen Tumoren verstärkt aktiv und greift in NAD+-Stoffwechsel und Methylierung ein; Folgen einer längeren Hemmung beim Menschen sind offen.',
      'Als Forschungschemikalie verkauft: Reinheit, Gehalt und Beimischungen sind ungeprüft.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'Präklinische Forschung; in DE/EU kein zugelassenes Arzneimittel und kein zugelassenes Nahrungsergänzungsmittel. Vertrieb als Forschungschemikalie ohne Bestimmung für den menschlichen Gebrauch.',
    sources: [
      { title: 'Kraus et al., Nature 2014 – NNMT-Knockdown schützt Mäuse vor ernährungsbedingtem Übergewicht', url: 'https://pubmed.ncbi.nlm.nih.gov/24717514/' },
      { title: 'Neelakantan et al., Biochem Pharmacol 2018 – selektive NNMT-Hemmer kehren Übergewicht bei Mäusen um', url: 'https://pubmed.ncbi.nlm.nih.gov/29155147/' },
      { title: 'Neelakantan et al., Biochem Pharmacol 2019 – Muskelstammzellen und Kraft alter Mäuse', url: 'https://pubmed.ncbi.nlm.nih.gov/30753815/' },
      { title: 'Dimet-Wiley et al., Sci Rep 2024 – NNMT-Hemmung und Training bei alten Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/38969654/' },
      { title: 'Babula et al., Diabetes Obes Metab 2024 – 28 Tage 5A1MQ, Glukosetoleranz und Leber', url: 'https://pubmed.ncbi.nlm.nih.gov/39161060/' },
      { title: 'Awosemo et al., J Pharm Biomed Anal 2021 – Pharmakokinetik in Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/34304009/' },
      { title: 'ClinicalTrials.gov – keine eingetragene Studie zu 5-Amino-1MQ oder NNMT-Inhibitoren', url: 'https://clinicaltrials.gov/search?term=NNMT%20inhibitor' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Suche „5-Amino-1MQ")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'KI-Podcast: 5-Amino-1MQ – der NNMT-Hemmer, der Fett über Energieverbrauch angeht', audio: 'audio/5-amino-1mq-podcast.mp3', spotify: '71gD9FHwpfiLoCfy8BjgTy', lengthLabel: '≈ 15 Min · Deutsch · 2 KI-Stimmen', note: 'Der Podcast von Paul Höser (Folge 8). Frische KI-Dialogfolge (Paul & Paula) mit Fachrecherche: eleganter NAD+- und SAM-Mechanismus, Fettverlust über mehr Energieverbrauch, Muskel/Kraft, Longevity – plus ehrlicher Reality-Check (Tierdaten, keine reifen Humanstudien, Graumarkt). Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Peptide of The Week – 5-Amino-1MQ', url: 'https://open.spotify.com/episode/0RPGxM1H0gS8MDwXBVYUzw' },
          { title: 'The Hunter Williams Podcast – 5-Amino-1MQ', url: 'https://open.spotify.com/episode/5XcHZpVLizSlmsoCjNJwQq' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/2jwvG4DQ5ugvDRHp6eQJ62' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/110TpqttgUPRR6QGnKZYK8' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/4VPXGE9vptqGXjiB3Wb0fI' }
        ] }
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'tesofensin',
    name: 'Tesofensine',
    altNames: 'NS2330',
    class: 'Triple Monoamin-Reuptake-Inhibitor (Noradrenalin, Dopamin, Serotonin)',
    emoji: '🧪',
    short: 'Ursprünglich für Parkinson und Alzheimer entwickelt, dämpft dieser Dreifach-Wiederaufnahmehemmer den Appetit deutlich: bis 10,6 Prozent Gewichtsverlust in 24 Wochen in einer Phase-2-Studie. Nirgends zugelassen, in Mexiko beantragt.',
    moa: 'Hemmt die Wiederaufnahme von Noradrenalin, Dopamin und Serotonin im Gehirn. Steigert Sättigungsgefühl und reduziert Hungerempfinden.',
    benefits: [
      'Phase-2-Studie (Lancet 2008, 203 Patienten, 24 Wochen): 4,5, 9,2 und 10,6 Prozent Gewichtsverlust je nach Dosis, gegenüber 2,0 Prozent unter Diät und Placebo',
      'Wirkt vor allem über weniger Appetit und mehr Sättigung, als Tablette ohne Spritze',
      'Die mittlere Dosis könnte laut den Studienautoren etwa doppelt so viel Gewichtsverlust bewirken wie die 2008 zugelassenen Abnehmmittel – ein direkter Vergleich fehlt',
      'Kombination mit Metoprolol (Tesomet): in einer kleinen Studie bei hypothalamischer Adipositas zusätzlich 6,3 Prozent Gewichtsverlust ohne signifikante Puls- oder Blutdruckunterschiede'
    ],
    risks: [
      'Hebt den Puls an (in der mittleren Studiendosis um 7,4 Schläge pro Minute) – Herz-Kreislauf gehört daher im Blick.',
      'Häufig Mundtrockenheit, Schlafstörungen, Übelkeit; möglich sind Unruhe und Stimmungseffekte.',
      'Nicht zugelassen (DE/EU/USA); Zulassungsantrag in Mexiko ohne erteilte Zulassung. Im Sport im Wettkampf verboten (WADA S6.B).'
    ],
    status: 'Nirgends zugelassen: In Mexiko liegt ein Zulassungsantrag (positives, nicht bindendes Votum 2023, Zulassung bis September 2026 nicht auffindbar); in DE/EU/USA nicht zugelassen und nicht erhältlich.',
    sources: [
      { title: 'Astrup A et al., Lancet 2008 – Tesofensine Phase 2', url: 'https://pubmed.ncbi.nlm.nih.gov/18950853/' },
      { title: 'Huynh K et al., Eur J Endocrinol 2022 – Tesomet bei hypothalamischer Adipositas', url: 'https://pubmed.ncbi.nlm.nih.gov/35294397/' },
      { title: 'Sjödin A et al., Int J Obes 2010 – Energieverbrauch und Appetit', url: 'https://pubmed.ncbi.nlm.nih.gov/20479765/' },
      { title: 'Saniona – Tesofensine (Herstellerangabe zum Zulassungsstand)', url: 'https://saniona.com/pipeline/tesofensine/' }
    ],
    community: [
      { title: 'Iron Mike: SLU-PP-332 vs. Tesofensine', url: 'https://www.youtube.com/shorts/kD6FVLFTcK8' },
      { title: 'biolabshop (Suche „Tesofensin")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'KI-Podcast: Tesofensine – der Zufalls-Fund als Abnehm-Tablette (mit Tesomet-Trick)', audio: 'audio/tesofensine-podcast.mp3', spotify: '4tCUWipyMuwsmSQ2foeKBV', lengthLabel: '≈ 15 Min · Deutsch · 2 KI-Stimmen', note: 'Der Podcast von Paul Höser (Folge 34). KI-generierte deutsche Folge (Paul & Paula) mit Fachrecherche. Nur Information – keine medizinische Beratung, keine Dosier- oder Anwendungsempfehlung. Bei uns nicht als Arzneimittel zugelassen; wirkt auf Herz-Kreislauf – im Zweifel ärztlich abklären.' }
    ],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'amycretin',
    name: 'Amycretin',
    altNames: 'GLP-1/Amylin-Doppelagonist (Novo Nordisk)',
    class: 'GLP-1- und Amylin-Rezeptor-Agonist in einem Molekül',
    emoji: '💉',
    short: 'Der nächste große Abnehm-Kandidat von Novo Nordisk: GLP-1 und Amylin in einem einzigen Molekül, als Spritze und als Tablette. In frühen Studien bis zu 24,3 Prozent Gewichtsabnahme nach 36 Wochen – Phase 3 ab 2026 angekündigt.',
    moa: 'Amycretin aktiviert gleichzeitig den GLP-1-Rezeptor (Sättigung, Insulin, verzögerte Magenentleerung) und den Amylin-Rezeptor (Sättigung über den Hirnstamm, Ende der Mahlzeit); im Labor auch den Calcitonin-Rezeptor. Zwei Sättigungssysteme in einem Molekül – ähnlich der Idee hinter CagriSema, aber vereint. Entwickelt werden eine Wochenspritze und eine Tablette; in placebokontrollierten Frühstudien zeigten beide deutliche Gewichtsabnahmen, die in Phase 3 bestätigt werden sollen.',
    benefits: [
      'Doppelmechanismus (GLP-1 + Amylin) in einem Molekül; in einer Netzwerk-Metaanalyse größter Placebo-Unterschied aller Amylin-basierten Therapien (indirekter Vergleich, niedrige Vertrauenswürdigkeit).',
      'Spritze: bis zu 24,3 % Gewichtsabnahme nach 36 Wochen in einer placebokontrollierten Lancet-Studie (125 Teilnehmer).',
      'Tablette: bis zu 13,1 % Gewichtsabnahme nach 12 Wochen in der ersten Studie am Menschen.',
      'Bei Typ-2-Diabetes laut Firmenmitteilung bis zu 14,5 % Gewichtsabnahme und bis zu 1,8 Prozentpunkte weniger HbA1c (Phase 2, 448 Teilnehmer).'
    ],
    risks: [
      'Prüfpräparat, nicht zugelassen und nicht regulär verfügbar; Phase 3 ab 2026 angekündigt.',
      'Häufig Übelkeit, Erbrechen und andere Magen-Darm-Beschwerden, v. a. in der Aufdosierung; ein Fall einer Gallenstein-Pankreatitis.',
      'Langzeitdaten fehlen (max. 36 Wochen); am Graumarkt gehandelte Ware ist nicht das Originalmolekül.'
    ],
    status: 'Prüfpräparat (Novo Nordisk), nicht zugelassen. Phase 3 für Übergewicht ab dem ersten Quartal 2026 und für Typ-2-Diabetes 2026 angekündigt.',
    sources: [
      { title: 'Dahl K et al., Lancet 2025 – Amycretin subkutan, Phase 1b/2a', url: 'https://pubmed.ncbi.nlm.nih.gov/40550231/' },
      { title: 'Gasiorek A et al., Lancet 2025 – Amycretin oral, Phase 1', url: 'https://pubmed.ncbi.nlm.nih.gov/40550229/' },
      { title: 'Novo Nordisk – Phase 2 bei Typ-2-Diabetes (Unternehmensmitteilung 25.11.2025)', url: 'https://www.globenewswire.com/news-release/2025/11/25/3194155/0/en/Novo-Nordisk-phase-2-trial-with-amycretin-reports-significant-weight-loss-and-HbA1c-reduction-in-type-2-diabetes.html' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Stoffwechsel'
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
    short: 'Die im Labor entfesselte Variante des Wachstumsfaktors IGF-1: entgeht den Bindungsproteinen und wirkt im Tier stärker und länger als das Original. Entwickelt als Zellkultur-Reagenz, beim Menschen nie geprüft, mit ernstem Risikoprofil.',
    moa: 'IGF-1 LR3 ist eine chemisch veränderte, langwirksame Form des Insulin-like Growth Factor 1 (dem Vermittler vieler GH-Effekte). Es bindet weniger an Bindeproteine und bleibt dadurch deutlich länger aktiv. Es fördert direkt Zellwachstum, Proteinsynthese und Muskel-Hyperplasie/Hypertrophie. Wegen der direkten, starken Wachstumswirkung wird es in der Muskelaufbau-Szene genutzt – birgt aber deutliche Risiken.',
    benefits: [
      'In Muskelzellkulturen stärkerer Anreiz für Eiweiß- und DNA-Synthese als normales IGF-1 – Zelldaten, keine Humanstudien',
      'Bei Ratten unter Kortison etwa 2,5-fach so anabol wie IGF-1 – Tierdaten',
      'Entgeht den IGF-Bindungsproteinen und wirkt dadurch länger als körpereigenes IGF-1',
      'IGF-1 aktiviert im Tier Satellitenzellen und fördert Muskelregeneration – für gespritztes LR3 beim Menschen nicht gezeigt'
    ],
    risks: [
      'Unterzuckerung: IGF-1-Varianten senkten den Blutzucker im Tier 2- bis 3-fach stärker und viel länger als IGF-1; selbst beim zugelassenen Mecasermin ist Hypoglykämie sehr häufig',
      'Wachstumsfrage: IGF-1 fördert generell Zellwachstum; das zugelassene Mecasermin ist bei aktiver oder vermuteter Neoplasie kontraindiziert – bei Krebs, auch in der Vorgeschichte, keine Datengrundlage',
      'Organwachstum: Nieren, Darm, Milz und Nebennieren nahmen im Tierversuch zu',
      'Nicht zugelassen, von der WADA verboten und nachweisbar; Graumarkt-Ware ungeprüft'
    ],
    status: 'Kein zugelassenes Arzneimittel; Forschungsreagenz. Im Sport verboten (WADA S2.3, IGF-1 und Analoga). Zugelassenes Gegenstück: Mecasermin für Kinder mit schwerem primärem IGF-1-Mangel.',
    sources: [
      { title: 'Francis GL et al., J Mol Endocrinol 1992 – lange IGF-1-Varianten und Bindungsproteine', url: 'https://pubmed.ncbi.nlm.nih.gov/1378742/' },
      { title: 'Tomas FM et al., Biochem J 1992 – LR3 anabol bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/1371669/' },
      { title: 'Tomas FM et al., J Endocrinol 1997 – stärkere und längere Blutzuckersenkung', url: 'https://pubmed.ncbi.nlm.nih.gov/9415072/' },
      { title: 'Conlon MA et al., J Endocrinol 1995 – LR3 und Organwachstum', url: 'https://pubmed.ncbi.nlm.nih.gov/7561636/' },
      { title: 'WADA – Prohibited List, S2.3 Growth Factors', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'IGF-1 LR3: Der Wachstumsfaktor im Faktencheck', audio: 'audio/igf-1-lr3-podcast.mp3', spotify: '2koyXJxKGO4Xj1Xm4lZR1Y', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 57) · mit Paul & Paula. Der entfesselte Wachstumsfaktor: Bindungsprotein-Trick und 20–30 Stunden Wirkdauer, Hyperplasie-Faszination vs. null Humanstudien, die drei Stoppschilder (Unterzucker, Wachstums-Frage, Organe), Herkunft als Zellkultur-Reagenz, Mecasermin als seriöses Gegenstück und das IGF-1-Longevity-Paradox. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 27.08.2026, 10:00)' }
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'rad140',
    name: 'RAD140 (Testolone)',
    altNames: 'Testolone, SARM',
    class: 'Selektiver Androgen-Rezeptor-Modulator (SARM)',
    emoji: '🏋️',
    short: 'Der bekannteste SARM: aktiviert den Androgen-Rezeptor, im Tier stark im Muskel und schonend an der Prostata. Beim Menschen ist die Rezeptorwirkung gezeigt, für Muskelaufbau gibt es keine kontrollierte Studie – dafür häufige Leberwert-Anstiege und Fallberichte über Leberschäden.',
    moa: 'RAD140 bindet und aktiviert den Androgen-Rezeptor gewebe-selektiv – mit dem Ziel: volle Wirkung in Muskel und Knochen, wenig Wirkung in Prostata und Haut; in Ratten wurde die Prostata weitgehend ausgespart. Entwickelt von Radius Health gegen Muskelschwund und Brustkrebs. Die einzige klinische Humanstudie (Phase 1, LoRusso 2022, 22 Frauen mit metastasiertem Brustkrebs) bestätigte die Rezeptorwirkung (SHBG sank bei 18 von 18, PSA stieg bei 16 von 20); häufigste Nebenwirkung waren Leberwert-Anstiege (AST bei 59,1 %). Für Muskelaufbau existiert keine kontrollierte Humanstudie; alles Weitere ist Tiermodell plus Anwenderbericht.',
    benefits: [
      'Berichtete starke Zuwächse an Magermasse und Kraft innerhalb weniger Wochen (Anwenderberichte, keine Studie)',
      'Oral wirksam; Rezeptorwirkung beim Menschen bestätigt, Gewebeselektivität im Tier gezeigt',
      'SARM-Prinzip wird medizinisch weiter erforscht (Muskelschwund, Brustkrebs) – bisher ohne Zulassung'
    ],
    risks: [
      'Unterdrückt die eigene Testosteron-Achse (LH/FSH) – Post-Cycle-Therapy als Reparatur der Nebenwirkung',
      'Leber: AST-Anstieg bei 59,1 % in der Phase-1-Studie, mehrere publizierte Fallberichte von Leberschäden',
      'Blutfette: beim verwandten SARM LGD-4033 sank HDL dosisabhängig; für RAD140 keine publizierten Lipiddaten',
      'JAMA-Analyse: nur 52 % der SARM-Produkte enthielten überhaupt einen SARM, nur 41 % die deklarierte Menge',
      'Fallberichte über Herzmuskelentzündung; keine Langzeitdaten; WADA-verboten (S1.2), nachweisbar; für Frauen besonders ungeeignet'
    ],
    status: 'Kein zugelassenes Arzneimittel; Research Chemical, im Sport verboten (WADA).',
    sources: [
      { title: 'LoRusso et al., Clin Breast Cancer 2022 – Phase-1-Studie RAD140 (Brustkrebs)', url: 'https://pubmed.ncbi.nlm.nih.gov/34565686/' },
      { title: 'Van Wagoner et al., JAMA 2017 – Analyse von SARM-Produkten', url: 'https://pubmed.ncbi.nlm.nih.gov/29183075/' },
      { title: 'Ladna et al., J Med Case Rep 2023 – Leberschaden unter RAD140', url: 'https://pubmed.ncbi.nlm.nih.gov/36978171/' }
    ],
    community: [
      { title: 'Swolverine – RAD-140 Side Effects', url: 'https://swolverine.com/blogs/blog/rad-140-side-effects-risks-suppression-liver-stress-and-long-term-concerns' }
    ],
    podcasts: [
      { title: 'RAD140 (Testolone): Das SARM im Faktencheck', audio: 'audio/rad140-podcast.mp3', spotify: '6pdj4nVBmovKQhN7MK0TwA', lengthLabel: '≈ 13 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 66) · mit Paul & Paula. Die brillante SARM-Idee und die ernüchternde Realität: eine einzige Humanstudie (Leberwerte dosislimitierend), Achsen-Suppression, HDL-Absturz, JAMA-Etiketten-Analyse, Ostarine & Co., Neuroprotektions-Mythos, WADA – Wissen statt Werbung. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 05.09.2026, 10:00)' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'follistatin',
    name: 'Follistatin / Myostatin-Hemmer',
    altNames: 'Follistatin-344, ACE-031, Myostatin-Inhibitoren',
    class: 'Myostatin-Blocker (Muskelwachstum durch Wegfall der „Muskelbremse")',
    emoji: '💪',
    short: 'Die „Muskelbremse lösen": Follistatin und verwandte Stoffe blockieren Myostatin – den körpereigenen Begrenzer des Muskelwachstums. Am Menschen ist bisher jeder Anlauf gescheitert.',
    moa: 'Myostatin ist ein körpereigener Faktor, der das Muskelwachstum bremst. Follistatin bindet und neutralisiert Myostatin (und verwandte Faktoren wie Activin), wodurch die Bremse wegfällt und Muskelmasse zunehmen kann – Tiere mit blockiertem Myostatin zeigen enorme Muskelberge. Verwandte Ansätze (ACE-031, monoklonale Antikörper) zielen auf denselben Signalweg. Beim Menschen ist das überwiegend experimentell; einige Programme wurden wegen Nebenwirkungen gestoppt.',
    benefits: [
      'Kann Muskelmasse steigern – im Tierversuch eindrucksvoll, beim Menschen bisher ohne Funktionsgewinn',
      'Untersucht bei Muskelschwund-Erkrankungen (z.B. Muskeldystrophie)',
      'Wirkt unabhängig von Hormonen/Testosteron'
    ],
    risks: [
      'Hochexperimentell – kaum belastbare Humandaten; Gentherapie-Varianten besonders riskant',
      'Drei Programme gescheitert: ACE-031 (2013 eingestellt, Blutungen und erweiterte Hautgefäße), Domagrozumab (2018, Treppenstufen-Test bei 121 Jungen verfehlt), Bimagrumab (Gehstrecke trotz Muskelzuwachs nicht besser)',
      'Ein vierter Anlauf war erfolgreich, aber bei einer anderen Krankheit: Apitegromab erreichte bei spinaler Muskelatrophie (SAPPHIRE, 188 Teilnehmende) den Hauptendpunkt knapp; der europäische Zulassungsantrag wurde im September 2026 zurückgezogen',
      'Graumarktware: In einer Laboranalyse von 14 gehandelten ACE-031-Produkten enthielten 2 kein passendes Protein und 12 nicht ACE-031, sondern den vollständigen Activin-Rezeptor IIB',
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
    short: 'Das erste klassische GH-Peptid: Es stößt über den Ghrelin-Rezeptor eine Wachstumshormon-Ausschüttung an und steigert den Appetit deutlich. Historisch die Leitstruktur der ganzen Klasse – ohne moderne Zulassungsstudien.',
    moa: 'GHRP-6 bindet als Agonist an den Ghrelin-Rezeptor (GHSR-1a) in Hypophyse und Hypothalamus und löst dort die pulsatile Freisetzung von Wachstumshormon aus. Es wirkt synergistisch mit GHRH und unterdrückt gegenregulatorisch Somatostatin. Charakteristisch ist eine ausgeprägte ghrelinartige Appetitsteigerung, die stärker ausfällt als bei GHRP-2. Wie andere Sekretagoga kann es begleitend Cortisol und Prolaktin moderat anheben. GHRP-6 diente historisch als Ausgangsmolekül, aus dem GHRP-2 und Hexarelin entwickelt wurden.',
    benefits: [
      'Stimuliert die pulsatile Freisetzung von körpereigenem Wachstumshormon.',
      'Ausgeprägte Appetitsteigerung, die in präklinischen Modellen für Kachexie-Forschung untersucht wird.',
      'Hebt indirekt IGF-1 über die gesteigerte GH-Sekretion – das ist der Mechanismus, kein belegter Nutzen.',
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
    short: 'Eines der potentesten GH-Peptide der GHRP-Reihe, mit herzschützenden Effekten im Tiermodell. Unter Dauergabe lässt die Wachstumshormon-Antwort rasch und teilweise nach, der größte Teil davon in der ersten Woche; nach dem Absetzen erholt sie sich.',
    moa: 'Hexarelin ist ein Agonist am Ghrelin-Rezeptor (GHSR-1a) und löst eine potente pulsatile Ausschüttung von Wachstumshormon aus. Es gilt als eines der stärksten GH-Sekretagoga der GHRP-Reihe. Neben der zentralen GH-Freisetzung bindet Hexarelin präklinisch an den kardialen CD36-Rezeptor, worüber GH-unabhängige, potenziell kardioprotektive Effekte diskutiert werden. Bei wiederholter Gabe schwächt sich die GH-Antwort ab (Desensibilisierung). Wie andere Sekretagoga hebt es akut auch ACTH, Cortisol und Prolaktin an.',
    benefits: [
      'Sehr potente Stimulation der körpereigenen GH-Ausschüttung.',
      'Die gesteigerte GH-Sekretion soll indirekt IGF-1 anheben – bei gesunden Älteren blieben IGF-I und IGFBP-3 über 16 Wochen jedoch unverändert (Rahim 1998); ein IGF-I-Anstieg ist nur bei kleinwüchsigen Kindern unter intranasaler Gabe beschrieben (Klinger 1996, Laron 1995).',
      'Präklinische Hinweise auf GH-unabhängige kardioprotektive Effekte über CD36.',
      'Am Menschen kurzfristig positiv inotrop (stärkere Pumpleistung), auch ohne GH-Anstieg: höhere Auswurffraktion bei GH-Mangel (Bisi 1999) und während Bypass-Operationen bei koronarer Herzkrankheit von 10 bis 90 Minuten nach der Gabe, anders als unter rhGH, GHRH und Placebo (Broglio 2002). Bei dilatativer Kardiomyopathie kein Effekt (Imazio 2002).',
      'Weniger ausgeprägte Appetitsteigerung als GHRP-6.',
      'Wurde in klinischen Studien als GH-Provokationsmittel eingesetzt.',
      'In Tiermodellen Untersuchungen zu Effekten auf Muskel- und Herzgewebe.'
    ],
    risks: [
      'Die GH-Antwort lässt unter Dauergabe nach: Über 16 Wochen fiel sie auf rund 55 % des Ausgangswerts, der größte Teil des Verlusts trat innerhalb der ersten Woche ein. Vier Wochen nach dem Absetzen war der Ausgangswert wieder erreicht (Rahim 1998).',
      'Akut steigen ACTH und Cortisol in einer Größenordnung, die der Reaktion auf hCRH entspricht (Arvat 1997, Ghigo 1997); unter 16-wöchiger Gabe blieben freies Cortisol im Urin, basales Cortisol, ACTH- und Prolaktin-Antwort dagegen unverändert (Rahim 1999). Kurzfristig deutlich, im Dauergebrauch nicht nachweisbar.',
      'Nächtliche Gabe verringerte bei sieben gesunden jungen Männern den Tiefschlaf (Stadium 4 und Delta-Leistung) und erhöhte GH, Prolaktin, ACTH und Cortisol im Schlaf (Frieboes 2004). Das körpereigene Ghrelin wirkt auf den Tiefschlaf gegenteilig.',
      'Nicht zugelassen; im Sport verboten (WADA-Liste 2026, S2).',
      'Forschungssubstanz – auf Reinheit achten.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Ghigo et al., J Clin Endocrinol Metab 1994 – GH-freisetzende Wirkung von Hexarelin', url: 'https://pubmed.ncbi.nlm.nih.gov/8126144/' },
      { title: 'Broglio et al., Endocrine 2001 – GH-unabhängige kardiotrope Wirkungen von GH-freisetzenden Peptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/11322491/' },
      { title: 'Arvat et al., Peptides 1997 – GHRP-2 und Hexarelin auf GH, Prolaktin, ACTH und Cortisol (6 gesunde junge Erwachsene)', url: 'https://pubmed.ncbi.nlm.nih.gov/9285939/' },
      { title: 'Ghigo et al., J Clin Endocrinol Metab 1997 – ACTH- und Cortisol-freisetzende Wirkung von Hexarelin', url: 'https://pubmed.ncbi.nlm.nih.gov/9253314/' },
      { title: 'Rahim et al., J Clin Endocrinol Metab 1998 – GH-Status unter 16 Wochen Hexarelin', url: 'https://pubmed.ncbi.nlm.nih.gov/9589671/' },
      { title: 'Rahim et al., Clin Endocrinol 1999 – Hypophysen-Nebennieren-Achse und Prolaktin unter 16 Wochen Hexarelin', url: 'https://pubmed.ncbi.nlm.nih.gov/10341859/' },
      { title: 'Klinger et al., Eur J Endocrinol 1996 – Desensibilisierung unter intranasalem Hexarelin bei kleinwüchsigen Kindern', url: 'https://pubmed.ncbi.nlm.nih.gov/8766941/' },
      { title: 'Bisi et al., Eur J Pharmacol 1999 – Herzwirkung von Hexarelin bei Erwachsenen mit Hypophyseninsuffizienz', url: 'https://pubmed.ncbi.nlm.nih.gov/10528131/' },
      { title: 'Broglio et al., Eur J Pharmacol 2002 – Hexarelin während Bypass-Operation bei koronarer Herzkrankheit', url: 'https://pubmed.ncbi.nlm.nih.gov/12144941/' },
      { title: 'Imazio et al., Eur J Heart Fail 2002 – Hexarelin bei dilatativer und ischämischer Kardiomyopathie', url: 'https://pubmed.ncbi.nlm.nih.gov/11959048/' },
      { title: 'Bodart et al., Circ Res 2002 – CD36 vermittelt die Herzwirkung von GH-freisetzenden Peptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/11988484/' },
      { title: 'Frieboes et al., Psychoneuroendocrinology 2004 – Hexarelin verringert den Tiefschlaf', url: 'https://pubmed.ncbi.nlm.nih.gov/15177700/' },
      { title: 'Dominikowski et al., Front Endocrinol 2026 – Leistungssteigernde Peptide der GH-IGF-1-Achse: Studienlage und Selbstanwendung', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13322892/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ]
  },
  {
    id: 'cjc-1295-dac',
    name: 'CJC-1295 mit DAC',
    altNames: 'CJC-1295 DAC, DAC-GRF, Drug Affinity Complex GRF',
    class: 'Langwirksames GHRH-Analogon (Albumin-gebunden)',
    emoji: '⚓',
    short: 'Das GHRH-Analogon mit eingebautem Langzeit-Anker: Der Drug Affinity Complex bindet an Albumin und dehnt die Wirkzeit auf 6–8 Tage – das bequemste Wachstumshormon-Peptid überhaupt.',
    moa: 'CJC-1295 mit DAC ist Mod GRF 1-29 plus einem Maleimid-Anker (Drug Affinity Complex), der sich kovalent an das Bluteiweiß Albumin bindet. Da Albumin rund drei Wochen im Blut zirkuliert, verlängert sich die Halbwertszeit des Peptids von etwa 30 Minuten auf 6–8 Tage. Es bindet an den GHRH-Rezeptor der Hypophyse und hebt die Wachstumshormon-Ausschüttung dauerhaft an („GH-Bleed" statt reiner Pulse) – die pulsatile Grundstruktur bleibt dabei erhalten, läuft aber auf angehobenem Sockel. IGF-1 steigt messbar und bleibt nach einer Einzelgabe bis zu 11 Tage erhöht (Teichman, JCEM 2006). Die körpereigene Rückkopplung über Somatostatin bleibt intakt.',
    benefits: [
      'Nur 1–2 Injektionen pro Woche statt täglicher Gaben – maximale Praxistauglichkeit.',
      'Humandaten: 2–10-faches Wachstumshormon und 1,5–3-faches IGF-1 über bis zu 11 Tage nach einer Gabe (Teichman, JCEM 2006).',
      'Planbarer, gut messbarer IGF-1-Anstieg – ideal für datengetriebene Protokolle.',
      'Stimuliert die eigene Achse statt sie zu ersetzen – Rückkopplung bleibt aktiv (Unterschied zu HGH).',
      'Berichtete Effekte: tieferer Schlaf, schnellere Regeneration, bessere Haut und Nägel.',
      'Gleiche Anker-Technologie, die heute auch langwirksame GLP-1-Medikamente nutzen.'
    ],
    risks: [
      'Dauersignal statt reiner Pulse („GH-Bleed") – die physiologische Eleganz der Pulse geht teilweise verloren.',
      'Häufig Rötung/Quaddeln an der Einstichstelle; möglich: Wassereinlagerung, Kribbeln, mehr Hunger.',
      'Blutzucker und IGF-1 im Blick behalten; bei aktiver/früherer Krebserkrankung tabu.',
      'Nie zugelassen (Entwicklung eingestellt); im Sport verboten; Graumarkt – Analysezertifikat Pflicht.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz, Entwicklung eingestellt.',
    sources: [
      { title: 'Teichman et al., J Clin Endocrinol Metab 2006 – Prolonged stimulation of GH and IGF-1 secretion by CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' },
      { title: 'Ionescu & Frohman, J Clin Endocrinol Metab 2006 – Pulsatile GH-Sekretion unter CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      {
        title: 'CJC-1295 mit DAC: Das Langzeit-Signal für Wachstumshormon',
        audio: 'audio/cjc-1295-dac-podcast.mp3',
        spotify: '7GY5RM8IJGggpIOemfR00a',
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 37) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das Wachstumshormon-Signal mit Langzeit-Anker: wie der Drug Affinity Complex das Peptid ans Albumin heftet (6–8 Tage Halbwertszeit statt 30 Minuten), die bemerkenswerten Humandaten (Teichman, JCEM 2006: 2–10-faches GH, bis zu 11 Tage erhöhtes IGF-1 nach einer Gabe) und die große Debatte Dauersignal („GH-Bleed") gegen natürliche Pulse. Plus Vergleich mit direktem HGH und die typische berichtete Anwendung (ohne Empfehlung). Reine Information, keine Dosier- oder Anwendungsempfehlung – nicht zugelassen, im Sport verboten.',
        sources: [
          { title: 'Teichman et al. 2006 – CJC-1295 Pharmakokinetik/GH/IGF-1', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' },
          { title: 'Ionescu & Frohman 2006 – Pulsatilität unter CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' }
        ]
      }
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
      'Soll die pulsatile GH-Physiologie besser erhalten als langwirksame DAC-Varianten – pharmakologisch plausibel, am Menschen nicht vergleichend untersucht.',
      'Hebt indirekt IGF-1 über die gesteigerte GH-Sekretion – das ist der Mechanismus, kein belegter Nutzen.',
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
        title: 'CJC-1295 ohne DAC: Das Puls-Peptid – und die Auflösung des Namens-Chaos',
        audio: 'audio/cjc-1295-no-dac-podcast.mp3',
        spotify: '78AdX9FlRgHliWEjUnfYRM',
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 38) · mit Paul & Paula. Frische, positive KI-Dialogfolge, die das größte Namens-Rätsel der Peptid-Szene auflöst: CJC-1295 ohne DAC, Mod GRF 1-29 und modifiziertes GRF sind ein und dasselbe Molekül. Warum das kurzlebige GHRH-Analogon die natürlichen Wachstumshormon-Pulse verstärkt statt überdeckt (Ionescu & Frohman, JCEM 2006), was die vier Molekül-Reparaturen bewirken, wo Sermorelin einzuordnen ist, warum Insulin-Timing den Puls entscheidet – und der große Vergleich: DAC oder ohne DAC? Mit der typischen berichteten Anwendung (ohne Empfehlung). Reine Information, keine Dosier- oder Anwendungsempfehlung – nicht zugelassen, im Sport verboten.',
        sources: [
          { title: 'Ionescu & Frohman 2006 – pulsatile GH-Sekretion unter GHRH-Analoga', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' },
          { title: 'Teichman et al. 2006 – CJC-1295 (DAC) Pharmakokinetik', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
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
    short: 'Ein Tripeptid aus dem Endstück des Hormons alpha-MSH: dämpft in Zell- und Mausversuchen den Entzündungsschalter NF-kappa-B, am stärksten untersucht am Darm. Studien am Menschen fehlen vollständig.',
    moa: 'KPV entspricht den Positionen 11 bis 13 von alpha-MSH. Aufgenommen wird es über den Peptidtransporter PepT1, der im Dünndarm sitzt und bei chronisch-entzündlicher Darmerkrankung zusätzlich im Kolon gebildet wird. In menschlichen Darmepithel- und T-Zellen hemmt es schon in nanomolaren Konzentrationen die Aktivierung von NF-kappa-B und von MAP-Kinasen und senkt die Freisetzung von Zytokinen wie TNF-alpha und Interleukin-6. Die Wirkung ist zumindest teilweise unabhängig vom Melanocortin-Rezeptor MC1R, der in Colitis-Modellen selbst eine Rolle spielt. In zwei Mausmodellen der Colitis verlief die Entzündung unter KPV milder. Antimikrobielle Effekte gegen Staphylococcus aureus und Candida albicans sind im Labor beschrieben. Die Datenlage ist präklinisch.',
    benefits: [
      'Hemmt in menschlichen Darm- und Immunzellen die Aktivierung von NF-kappa-B und senkt die Zytokinfreisetzung (Dalmasso et al., Gastroenterology 2008).',
      'Milderer Verlauf in zwei Mausmodellen der Colitis, mit weniger Infiltraten und niedrigerer Myeloperoxidase im Kolongewebe (Kannengiesser et al. 2008).',
      'Aufnahme über den Peptidtransporter PepT1 erklärt, warum der Darm der am besten untersuchte Wirkort ist.',
      'In Nanopartikeln mit gezielter Freisetzung im Kolon genügte eine 12.000-fach geringere Konzentration für vergleichbare Wirkung (Laroui et al. 2010).',
      'Schützte menschliche Hautzellen und ein 3D-Hautmodell vor feinstaubbedingter Entzündung und Zelltod (Sung et al. 2025).',
      'Hemmte im Labor Staphylococcus aureus und Candida albicans, ohne die Keimabtötung durch Neutrophile zu verschlechtern (Cutuli et al. 2000).',
      'Wird in der Szene mit Darm- und Hautthemen verbunden; diese Anwendungen sind nicht belegt.'
    ],
    risks: [
      'Keine einzige Studie am Menschen; die FDA hat keine Daten zur Anwendung am Menschen gefunden, über keinen Verabreichungsweg.',
      'Kein Sicherheitsprofil, keine Interaktions- und keine Langzeitdaten am Menschen.',
      'Nicht zugelassen; als Forschungsware sind Reinheit, Gehalt und Sterilität nicht gesichert.',
      'Chronisch-entzündliche Darmerkrankungen sind behandelbar: Eigenbehandlung mit einem ungeprüften Peptid kostet Zeit.',
      'Im Sport fällt ein nicht zugelassenes Peptid unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen und nicht als Nahrungsergänzungsmittel verkehrsfähig; gehandelt als Forschungssubstanz. In den USA als Ausgangsstoff für Rezepturarzneien nominiert und von der FDA unter den Substanzen mit möglichen erheblichen Sicherheitsrisiken geführt, Nominierung zurückgezogen.',
    sources: [
      { title: 'Dalmasso et al., Gastroenterology 2008 – PepT1-vermittelte KPV-Aufnahme senkt intestinale Entzündung', url: 'https://pubmed.ncbi.nlm.nih.gov/18061177/' },
      { title: 'Kannengiesser et al., Inflammatory Bowel Diseases 2008 – KPV in zwei murinen Colitis-Modellen', url: 'https://pubmed.ncbi.nlm.nih.gov/18092346/' },
      { title: 'Laroui et al., Gastroenterology 2010 – KPV-Nanopartikel mit Freisetzung im Kolon', url: 'https://pubmed.ncbi.nlm.nih.gov/19909746/' },
      { title: 'Cutuli et al., J Leukoc Biol 2000 – antimikrobielle Aktivität von alpha-MSH-Peptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/10670585/' },
      { title: 'Sung et al., Tissue and Cell 2025 – KPV schützt menschliche Keratinozyten vor Feinstaub', url: 'https://pubmed.ncbi.nlm.nih.gov/40073467/' },
      { title: 'Elliott et al., J Invest Dermatol 2004 – Signalwege von alpha-MSH und KPV in Keratinozyten', url: 'https://pubmed.ncbi.nlm.nih.gov/15102092/' },
      { title: 'FDA – Bulk Drug Substances: keine Humandaten zu KPV', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      { title: 'KI-Podcast: KPV – das kleine Anti-Entzündungs-Tripeptid für Darm & Haut', audio: 'audio/kpv-podcast.mp3', spotify: '0mPFUWG5UTnN6DWL7GUtoQ', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 1) · mit Paul & Paula. Frische, positive KI-Dialogfolge mit Fachrecherche: KPV ist ein winziges Endstück des Hormons alpha-MSH, das den Entzündungs-Hauptschalter NF-κB beruhigt – vielseitig für Darm (leaky gut, Barriere) und Haut (Anti-Aging, Akne), sanft und flexibel als Kapsel, Spritze oder Creme. Kurzer Hinweis: überwiegend Zell-/Tierdaten, Humanstudien stehen noch aus. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'The Hunter Williams Podcast – KPV: Best Anti-Inflammatory Peptide', url: 'https://open.spotify.com/episode/5JbfV3XJhPSQttJkR8GJBB' },
          { title: 'Peptide of The Week – KPV & PT-141', url: 'https://open.spotify.com/episode/4RR6rXWb3jDsBYQOFf4l35' },
          { title: 'The Human 5.0 Project – KLOW Peptide Blend (inkl. KPV)', url: 'https://open.spotify.com/episode/0uoOMwyZ1xpclkmWFT2ceK' },
          { title: 'The Peptide Effect – KPV Peptide Explained', url: 'https://open.spotify.com/episode/5ablv4QSXOZH0drjoWKRuK' }
        ] }
    ],
    filterCat: 'Immun'
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
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 27) · mit Paul & Paula. Frische, positive KI-Dialogfolge über unser körpereigenes Antibiotikum: LL-37, das einzige menschliche Cathelicidin, durchlöchert Bakterienmembranen, stört Biofilme und dirigiert die Immunabwehr (Dürr, BBA 2006; Vandamme, Cell Immunol 2012). Der eleganteste Biohack: Vitamin D ist der stärkste Schalter der körpereigenen LL-37-Produktion. Ehrlich eingeordnet: Die Selbstanwendungs-Versprechen der Szene stammen aus Zell-/Tierdaten, und im Übermaß kann LL-37 Entzündung treiben (Psoriasis/Rosazea). Reine Information, keine Dosier- oder Anwendungsempfehlung.',
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
    short: 'Ein körpereigenes „Schlaf-Peptid": 1977 im Blut schlafender Kaninchen entdeckt, als sanfter Regler statt Schlafmittel beschrieben. Zwei kleine doppelblinde Studien fanden besseren Schlaf, zwei unabhängige nur schwache Effekte – seit den 1990ern kaum weiter erforscht.',
    moa: 'DSIP wurde in den 1970er-Jahren aus dem venösen Hirnblut von Kaninchen während des Tiefschlafs isoliert. Es scheint modulierend auf das limbische System sowie die Hypothalamus-Hypophysen-Achse zu wirken und beeinflusst mutmaßlich die Ausschüttung mehrerer Hormone. In tierexperimentellen Modellen wurde eine Zunahme von Delta- und Spindelaktivität im EEG sowie eine Reduktion der motorischen Aktivität beobachtet. Der genaue Rezeptor und Signalweg sind bis heute nicht eindeutig geklärt. Aussagekräftige kontrollierte Humanstudien zur Schlafwirkung fehlen weitgehend.',
    benefits: [
      'Verstärkt im Tierversuch die Delta- und Spindelaktivität des Tiefschlafs im EEG (Kaninchen, doppelblind).',
      'Erste Humanstudie: 59 % mehr Schlaf innerhalb von 130 Minuten gegenüber Placebo, ohne klassische Sedierung (6 Gesunde).',
      'Bei 14 chronisch Schlaflosen in einer doppelblinden Studie über 7 Nächte besserer Nachtschlaf und bessere Tagesleistung.',
      'Diskutierte modulierende Rolle im Stresshormonsystem: DSIP- und Cortisolspiegel hängen beim Menschen eng zusammen.',
      'In unkontrollierten Fallserien bei Entzugssymptomen und chronischen Schmerzen untersucht.',
      'In den kleinen Studien gut verträglich, keine oder keine größeren Nebenwirkungen beobachtet.'
    ],
    risks: [
      'Zwei unabhängige doppelblinde Studien (Monti 1987, Bes 1992) fanden keinen klinisch bedeutsamen Effekt; der Tiefschlaf blieb unverändert.',
      'Gen, Vorläufer und Rezeptor unbekannt; keine moderne Studie, keine systematischen Sicherheitsdaten.',
      'Nicht zugelassen; als Research-Ware ohne unabhängige Qualitätskontrolle.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Graf & Kastin, Neurosci Biobehav Rev 1984 – DSIP: ein Überblick', url: 'https://pubmed.ncbi.nlm.nih.gov/6145137/' },
      { title: 'Kovalzon & Strekalova, J Neurochem 2006 – DSIP: ein ungelöstes Rätsel', url: 'https://pubmed.ncbi.nlm.nih.gov/16539679/' },
      { title: 'Schneider-Helmert et al., 1981 – DSIP und menschliches Schlafverhalten', url: 'https://pubmed.ncbi.nlm.nih.gov/6895513/' },
      { title: 'Bes et al., Neuropsychobiology 1992 – DSIP bei chronischer Insomnie, doppelblind', url: 'https://pubmed.ncbi.nlm.nih.gov/1299794/' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      { title: 'DSIP: Das Schlafpeptid im Faktencheck', audio: 'audio/dsip-podcast.mp3', spotify: '2Cz5bXpDtURKddAZ4MrbTO', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 12) · mit Paul & Paula. Frische, positive KI-Dialogfolge über DSIP, das Delta-Schlaf-induzierende Peptid – 1977 im Blut schlafender Kaninchen entdeckt. Kein Knockout-Schlafmittel, sondern ein sanfter Regler, der den Delta-Tiefschlaf fördert und das Stress-/Cortisol-System beruhigt. Warum Tiefschlaf (Wachstumshormon, glymphatische Gehirn-Müllabfuhr) ein starker Longevity-Hebel ist. Ehrlicher Rahmen: Datenlage alt und dünn, bei uns Graumarkt. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Schneider-Helmert & Schoenenberger – DSIP & menschliches Schlafverhalten', url: 'https://pubmed.ncbi.nlm.nih.gov/6895513/' },
          { title: 'Graf & Kastin, Neurosci Biobehav Rev 1984 – DSIP: Ein Überblick', url: 'https://pubmed.ncbi.nlm.nih.gov/6145137/' }
        ] }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'oxytocin',
    name: 'Oxytocin',
    altNames: 'Bindungshormon, „Kuschelhormon"',
    class: 'Neuropeptid (9 Aminosäuren), Bindungs-/Sozialhormon',
    emoji: '💗',
    short: 'Das „Bindungshormon“: ein körpereigenes Neuropeptid, bewährt in der Geburtshilfe, im Tiermodell an Muskelregeneration und Wundheilung beteiligt – in der Szene als Nasenspray für Nähe und Stimmung genutzt, mit gemischter Studienlage.',
    moa: 'Oxytocin wird im Hypothalamus gebildet und wirkt als Hormon und Botenstoff im Gehirn. Es fördert soziale Bindung, Vertrauen, Empathie und Entspannung und dämpft die Stressachse (Cortisol). Klassisch ist seine Rolle bei Geburt und Stillen. In der Biohacking-Szene wird es als Nasenspray für Stimmung, Nähe und Stressabbau eingesetzt; die Studienlage zu diesen Effekten ist gemischt.',
    benefits: [
      'Seit Jahrzehnten bewährtes Arzneimittel in der Geburtshilfe (Wehen, Milchfluss)',
      'Wirkt im Gehirn messbar auf soziales Verhalten – etwa auf Nähe und Abstand –, allerdings stark kontextabhängig',
      'Im Tiermodell nötig für die Muskelregeneration; Gabe bei alten Mäusen verbesserte die Reparatur',
      'Kurzfristig gut verträglich: in der größten Studie bei Kindern Nebenwirkungen wie unter Placebo'
    ],
    risks: [
      'Der berühmte Vertrauenseffekt ließ sich nicht zuverlässig wiederholen; die größte Autismus-Studie (290 Kinder) war negativ',
      'Wirkung oft kurz und kontextabhängig; Blutspiegel schwer messbar',
      'Als Biohacking-Nasenspray Off-Label, Graumarkt-Ware mit Reinheitsfragen',
      'Vorsicht in der Schwangerschaft (wehenauslösend)'
    ],
    status: 'Als Arzneimittel (Geburtshilfe) zugelassen; die Biohacking-Nasenspray-Nutzung ist off-label.',
    sources: [
      { title: 'Kosfeld M et al., Nature 2005 – Oxytocin und Vertrauen', url: 'https://pubmed.ncbi.nlm.nih.gov/15931222/' },
      { title: 'Nave G et al., Perspect Psychol Sci 2015 – kritische Übersicht Oxytocin und Vertrauen', url: 'https://pubmed.ncbi.nlm.nih.gov/26581735/' },
      { title: 'Elabd C et al., Nat Commun 2014 – Oxytocin und Muskelregeneration', url: 'https://pubmed.ncbi.nlm.nih.gov/24915299/' },
      { title: 'Sikich L et al., N Engl J Med 2021 – Oxytocin bei Autismus (SOARS-B)', url: 'https://pubmed.ncbi.nlm.nih.gov/34644471/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Oxytocin: Das Bindungshormon im Faktencheck', audio: 'audio/oxytocin-podcast.mp3', spotify: '3cpwZtQWOR1ocxxuCV2GqA', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 56) · mit Paul & Paula. Vom Kuschelhormon zum Longevity-Kandidaten: Kosfeld (Nature 2005), die Berkeley-Muskeldaten (Elabd, Nature Communications 2014), Knochen, Herz und AMPK, der MIT-Fund zu Lactobacillus reuteri, Männer-Frauen-Unterschiede, der Wechseljahre-Knick – und das Gratis-Protokoll aus Berührung, Gemeinschaft und Wärme. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 26.08.2026, 10:00)' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'humanin',
    name: 'Humanin',
    altNames: 'HN, HNG (Humanin-Analogon)',
    class: 'Mitochondriales Peptid (MDP), zytoprotektiv',
    emoji: '🧬',
    short: 'Das erste entdeckte mitochondriale Peptid – ein körpereigener Zellschützer, dessen Spiegel bei Maus und Rhesusaffe mit dem Alter sinkt. Die Schutzwirkung ist in Zell- und Tiermodellen gezeigt, nicht am Menschen.',
    moa: 'Humanin ist ein kurzes, in der mitochondrialen DNA kodiertes Peptid (Schwester von MOTS-c) und war das erste entdeckte mitochondriale-derived Peptide (MDP). Es wirkt zytoprotektiv: Es hemmt den programmierten Zelltod (Apoptose), schützt vor oxidativem Stress und verbessert die Insulinsensitivität. Zu den körpereigenen Spiegeln sind die Beobachtungsdaten am Menschen uneinheitlich; bei Maus und Rhesusaffe sinken sie mit dem Alter. Das potente Analogon HNG wird in der Forschung genutzt. Humanin hat im Blut eine Halbwertszeit von etwa 30 Minuten; die Autoren der Lebenszeitstudie führen das Ausbleiben eines Lebenszeiteffekts bei zweimal wöchentlicher Gabe darauf zurück (Yen 2020).',
    benefits: [
      'Schützt Zellen im Labor vor Stress und programmiertem Zelltod (Apoptose)',
      'Verbessert die Insulinsensitivität (Tier-/Zelldaten)',
      'Neuroprotektiv – untersucht bei Alzheimer-Modellen',
      'Kinder Hundertjähriger hatten in einer kleinen Studie höhere Spiegel (18 gegenüber 19 Personen, Yen 2020); eine größere italienische Kohorte (102 gegenüber 92) fand keinen Unterschied und bei Gesunden einen Anstieg mit dem Alter (Conte 2021) – die Beobachtungsdaten am Menschen sind uneinheitlich',
      'Der körpereigene Spiegel ist trainierbar: +35 % Humanin im Skelettmuskel nach 12 Wochen Krafttraining bei Männern mit gestörter Glukoseregulation, im Serum kein Anstieg (Gidlund 2016); akuter Anstieg in Muskel und Plasma nach hochintensivem Intervalltraining (Woodhead 2020)'
    ],
    risks: [
      'Evidenz überwiegend präklinisch; kaum Humanstudien zur Supplementierung',
      'Optimale Dosierung/Protokolle nicht etabliert',
      'In einem Mausmodell des triple-negativen Mammakarzinoms beschleunigte exogenes Humanin das Tumorwachstum und schwächte die Wirkung der Chemotherapie; die Autoren raten ausdrücklich zur Vorsicht bei therapeutischer Gabe (Moreno Ayala 2020, Sci Rep)',
      'Nicht zugelassen; sehr experimentelle Research-Ware'
    ],
    status: 'Reines Forschungs-Peptid (MDP); nicht zugelassen.',
    sources: [
      { title: 'Mitochondriale Peptide in Aging & Healthspan (JCI)', url: 'https://www.jci.org/articles/view/158449' },
      { title: 'Humanin & SHLP – Review (Springer)', url: 'https://link.springer.com/article/10.1007/s10989-023-10558-7' },
      { title: 'Yen K et al., Aging 2020 – Humanin reguliert Lebenszeit und Healthspan', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7343442/' },
      { title: 'Conte M et al., GeroScience 2021 – Mitokine bei Diabetes, Alzheimer und gesundem Altern', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8110619/' },
      { title: 'Moreno Ayala MA et al., Sci Rep 2020 – Humanin und Tumorprogression (Mausmodell)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7244539/' }
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
    short: 'Ein Synaptogenese-Peptid: soll die Bildung neuer Nervenverbindungen antreiben – die beworbene Potenz stammt aus einer Pressemitteilung, und drei Arbeiten derselben Gruppe sind zurückgezogen.',
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
    id: 'thymalin',
    name: 'Thymalin',
    altNames: 'Thymus-Polypeptid-Komplex, Thymogen (synthetische Variante), Vladonix (orale Cytomax-Form)',
    class: 'Khavinson-Bioregulator – Thymus-Peptidkomplex fürs Immunsystem',
    emoji: '🛡️',
    short: 'Das Flaggschiff der Khavinson-Schule: ein Thymus-Peptidkomplex gegen die Immunalterung – mit den erstaunlichsten Langzeit-Sterblichkeitsdaten der Peptid-Welt (und dem klassischen Ost-West-Evidenzproblem).',
    moa: 'Thymalin ist ein Polypeptid-Extrakt aus dem Kälberthymus (nach Angaben der Entwickler seit 1982 in der Sowjetunion bzw. Russland als Arzneimittel zugelassen, ursprünglich fürs Militär entwickelt). Als aktive Kurzpeptide wurden das Dipeptid Glu-Trp (synthetisch: Thymogen), das Dipeptid Lys-Glu und das Tripeptid Glu-Asp-Pro isoliert. Es soll Reifung und Balance der T-Zellen fördern, Antikörperbildung und Fresszellen-Aktivität stärken und nach Khavinson epigenetisch wirken: Die Kurzpeptide binden an DNA bzw. Histone und regulieren Gene für Immunbotenstoffe und Zellschutz. Hintergrund ist die Thymus-Involution – das Organ schrumpft ab der Pubertät und verfettet im Alter fast vollständig (Immunseneszenz und Inflammaging). Die Langzeitbeobachtung von Khavinson & Morozov (Neuro Endocrinol Lett 2003, 266 Ältere, 6–8 Jahre) berichtet unter Thymalin eine 2,0- bis 2,1-fach niedrigere Sterblichkeit, in Kombination mit Epithalamin 2,5-fach, in einer gesondert jährlich behandelten Gruppe 4,1-fach. Wichtig: Evidenz fast ausschließlich aus einer russischen Forschungsgruppe, keine unabhängige westliche Replikation.',
    benefits: [
      'Adressiert mit der Thymus-Alterung einen zentralen, unterschätzten Alterungs-Treiber (Immunseneszenz).',
      'Khavinson-Langzeitdaten (266 Ältere, 6–8 Jahre): 2,0- bis 2,1-fach niedrigere Sterblichkeit unter Thymalin, 2,5-fach mit Epithalamin, 4,1-fach in einer jährlich über 6 Jahre behandelten Gruppe (Neuro Endocrinol Lett 2003).',
      'Berichtet: 2,0- bis 2,4-fach weniger akute Atemwegserkrankungen bei Älteren.',
      'Randomisierte, einfach verblindete Studie bei schwerem COVID-19 (36 vs. 44 Ältere): häufigere klinische Besserung, Krankenhaussterblichkeit 19,4 statt 40,9 % – aus dem Umfeld der Entwicklergruppe.',
      'Vier Jahrzehnte Klinik-Anwendung in Russland; laut Entwicklergruppe praktisch keine Nebenwirkungen; orale Variante (Vladonix) mit dünnerer Datenlage.'
    ],
    risks: [
      'Evidenz überwiegend aus einer Forschungsgruppe/russischen Journalen – keine unabhängige Replikation nach westlichem Standard.',
      'In der EU nicht zugelassen; Bezug = Graumarkt (Reinheit ist Anbietersache, Analysen-Zertifikate prüfen).',
      'Bei Autoimmunerkrankungen oder nach Transplantation nur mit ärztlicher Begleitung – im Zweifel Finger weg.',
      'Selten: lokale Reaktionen an der Einstichstelle, Allergien.'
    ],
    status: 'In Russland seit 1982 als Arzneimittel zugelassen; in der EU nicht zugelassen (Research-/Graumarkt).',
    sources: [
      { title: 'Khavinson & Morozov, Neuro Endocrinol Lett 2003 – Thymus-/Pinealpeptide & Sterblichkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/14523363/' },
      { title: 'Biology Bulletin Reviews 2021 – Thymalin: Immunokorrektur & molekulare Aspekte', url: 'https://link.springer.com/article/10.1134/S2079086421040046' },
      { title: 'Kuznik et al., Adv Gerontol 2021 – Thymalin bei schwerem COVID-19 älterer Patienten', url: 'https://europepmc.org/article/PMC/PMC8654498' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Thymalin: Der Immun-Bioregulator im Faktencheck', audio: 'audio/thymalin-podcast.mp3', spotify: '6aB7vB9kwKPQsukNesmvMT', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 46) · mit Paul & Paula. Vom geheimen Militär-Auftrag in Leningrad zum Flaggschiff der Khavinson-Bioregulatoren: warum der Thymus ab der Pubertät schrumpft (Immunseneszenz & Inflammaging), wie Thymalin T-Zellen reifen lässt – und die Langzeitstudien aus St. Petersburg (Khavinson & Morozov, Neuroendocrinology Letters 2003): rund halbierte Sterblichkeit über 6–8 Jahre, mit Epithalamin vierfach niedriger. Plus die ehrliche Ost-West-Einordnung, die orale Vladonix-Variante und Zink & Co. als Gratis-Thymus-Pflege. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 17.08.2026, 10:00)', sources: [
          { title: 'Khavinson & Morozov, Neuroendocrinol Lett 2003', url: 'https://pubmed.ncbi.nlm.nih.gov/12743529/' },
          { title: 'Biology Bulletin Reviews 2021 – Thymalin-Review', url: 'https://link.springer.com/article/10.1134/S2079086421040046' }
        ] }
    ],
    filterCat: 'Immun'
  },
  {
    id: 'bronchogen-chonluten',
    name: 'Bronchogen & Chonluten',
    altNames: 'Bronchogen (AEDL, Ala-Glu-Asp-Leu), Chonluten (EDG, Glu-Asp-Gly, T-34), Atemwegs-Bioregulatoren',
    class: 'Khavinson-Bioregulatoren – gewebespezifische Kurzpeptide für Lunge & Atemwege',
    emoji: '🫁',
    short: 'Zwei ultrakurze Lungen-Peptide aus der Khavinson-Schule. Chonluten dämpfte in menschlichen Monozyten die TNF-Freisetzung, Bronchogen stellte im Rattenmodell Flimmerepithel, sekretorisches IgA und Surfactant-Protein B wieder her. Eine klinische Studie am Menschen gibt es zu keinem der beiden.',
    moa: 'Beide sind synthetische Kurzpeptide aus der russischen Khavinson-Schule, die gewebespezifisch am Lungen- und Bronchialgewebe ansetzen sollen. Die Hypothese der Schule ist epigenetisch: Kurze Peptide aus 2 bis 7 Aminosäureresten gelangen in Zellkern und Nukleolus, treten mit DNA und Histonen in Wechselwirkung und beeinflussen die Ablesung von Genen sowie den Methylierungsstatus (Khavinson et al., Molecules 2021). Chonluten ist ein Tripeptid (Glu-Asp-Gly, auch T-34/EDG) und wirkt entzündungsregulierend: In menschlichen THP-1-Monozyten hemmte es nach Lipopolysaccharid-Reiz die TNF-Freisetzung, gemeinsam mit weiteren Peptiden der Schule auch Interleukin-6 (Avolio et al. 2022). Bronchogen ist ein Tetrapeptid (Ala-Glu-Asp-Leu, in der Literatur auch ADEL); es bindet im Laborversuch an DNA in der großen Furche und verändert in Kulturen menschlichen Bronchialepithels die Expression von Differenzierungsgenen, am stärksten in gealterten Kulturen (Lung 2014). Im Rattenmodell einer durch Stickstoffdioxid erzeugten obstruktiven Lungenschädigung gingen unter Bronchogen die Umbauzeichen zurück, Flimmerzellen waren wiederhergestellt, sekretorisches IgA und Surfactant-Protein B stiegen. Die Evidenz ist präklinisch und stammt fast vollständig aus derselben Forschungslinie.',
    benefits: [
      'Chonluten hemmte in menschlichen Monozyten nach Lipopolysaccharid-Reiz die TNF-Freisetzung und senkte mit den anderen geprüften Peptiden auch Interleukin-6 (Avolio et al. 2022).',
      'Bronchogen stellte in Ratten nach 60 Tagen Stickstoffdioxid und einem Monat Behandlung die Struktur des Bronchialepithels weitgehend wieder her, inklusive Flimmerzellen.',
      'Im selben Modell stiegen sekretorisches Immunglobulin A als Marker der örtlichen Abwehr und das Surfactant-Protein B, die neutrophile Entzündung ging zurück.',
      'In Kulturen menschlichen Bronchialepithels beeinflusste das Tetrapeptid Differenzierungsgene und Proliferationsmarker, am deutlichsten in gealterten Kulturen.',
      'Konzept der Gewebespezifität mit publizierter Grundlage: Bindung kurzer Peptide an DNA und Wirkung auf die Genexpression sind im Labor gezeigt.',
      'Anwenderberichte über weniger Husten, seltenere Schübe und leichteres Atmen; als Bericht zu lesen, nicht als Wirkungsbeleg.',
      'Nicht-hormonell und oral angeboten; für ultrakurze Peptide ist ein Transport über Peptid- und Aminosäuretransporter im Labor plausibel gemacht.'
    ],
    risks: [
      'Keine kontrollierte Studie am Menschen mit klinischem Endpunkt; in den öffentlichen Studienregistern ist keine eingetragen.',
      'Nahezu alle Arbeiten stammen aus derselben Forschungslinie, mehrere mit den Entwicklern als Ko-Autoren; unabhängige Replikation fehlt.',
      'Die Wirksamkeitsdaten sind Tiermodelldaten mit Surrogatendpunkten aus einem Schadstoffmodell, ein Teil der Literatur zum Tetrapeptid betrifft sogar Pflanzen.',
      'Keine systematischen Sicherheitsdaten; die Aussage zur guten Verträglichkeit stammt aus denselben Quellen wie die Wirkungsbehauptung.',
      'In DE/EU nicht als Arzneimittel zugelassen und ohne Novel-Food-Genehmigung; als Research-Ware sind Gehalt, Reinheit und Sequenz ungeprüft.',
      'Wichtig: Anhaltender Husten, Kurzatmigkeit oder Bluthusten gehören ärztlich abgeklärt; bei Asthma und COPD verordnete Therapien nicht ersetzen.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Gehandelt als Forschungsware oder Importpräparat; in Russland wird die Substanzklasse seit Jahrzehnten vertrieben.',
    sources: [
      { title: 'Khavinson et al., Molecules 2021 – Peptide Regulation of Gene Expression (systematische Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/34834147/' },
      { title: 'Avolio et al., Int J Mol Sci 2022 – Chonluten und weitere Khavinson-Peptide in menschlichen Monozyten', url: 'https://pubmed.ncbi.nlm.nih.gov/35408963/' },
      { title: 'Khavinson et al., Lung 2014 – Tetrapeptid ADEL: Genexpression und DNA-Bindung im Bronchialepithel', url: 'https://pubmed.ncbi.nlm.nih.gov/25015171/' },
      { title: 'Kuzubova et al., Bull Exp Biol Med 2015 – Bronchogen im Rattenmodell obstruktiver Lungenschädigung', url: 'https://pubmed.ncbi.nlm.nih.gov/26468022/' },
      { title: 'Titova et al., Ross Fiziol Zh 2017 – Entzündung, sekretorisches IgA und Surfactant-Protein B im selben Modell', url: 'https://pubmed.ncbi.nlm.nih.gov/30199201/' },
      { title: 'Khavinson et al., Int J Mol Sci 2022 – Transport ultrakurzer Peptide über POT- und LAT-Transporter', url: 'https://pubmed.ncbi.nlm.nih.gov/35887081/' },
      { title: 'Schünemann et al., Chest 2000 – Lungenfunktion als Langzeitprädiktor der Sterblichkeit (Buffalo Health Study)', url: 'https://pubmed.ncbi.nlm.nih.gov/10988186/' },
      { title: 'FDA – Bulk Drug Substances: Immunogenität und Verunreinigungen bei Peptiden aus Rezepturquellen', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' }
    ],
    community: [
      { title: 'Reddit r/PeptideGuide – Bronchogen Bioregulator Dosierung', url: 'https://www.reddit.com/r/PeptideGuide/comments/1e5r8zw/bronchogen_bioregulator_dosage/' },
      { title: 'peptide-bioregulator.com – Chonluten (Produktinfo, nur Grauzone)', url: 'https://peptide-bioregulator.com/product/chonluten/' }
    ],
    podcasts: [
      { title: 'Bronchogen & Chonluten: Das Peptid-Duo für die Lunge', audio: 'audio/bronchogen-chonluten-podcast.mp3', spotify: '3b8emQB8ibdtFNCIXuiE7U', lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 29) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das vergessene Biohacking-Organ Lunge: zwei ultrakurze Khavinson-Bioregulatoren im Duett – Chonluten (T-34) beruhigt die Atemwegs-Schleimhaut, Bronchogen baut auf (Flimmerepithel, Surfactant). Dazu: warum die Ein-Sekunden-Kapazität einer der besten Langlebigkeits-Marker ist und was Atemtraining leistet. Ehrlich gerahmt: Evidenz überwiegend aus der russischen Khavinson-Schule, bei uns nicht zugelassen (Research-Ware). Reine Information, keine Dosier- oder Anwendungsempfehlung – Atemprobleme ärztlich abklären.', sources: [
          { title: 'Jay Campbell – Chonluten (Übersicht)', url: 'https://jaycampbell.com/blog/chonluten-cartilage-peptide/' },
          { title: 'Jay Campbell – Bronchogen (Übersicht)', url: 'https://jaycampbell.com/blog/bronchogen-peptide/' },
          { title: 'Khavinson – Peptide bioregulators (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8619776/' }
        ] }
    ],
    filterCat: 'Immun'
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
        note: 'Der Podcast von Paul Höser (Folge 28). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet das Khavinson-Bioregulator-Konzept (epigenetische „Verjüngung" der Prostata) gegen die dünne Human-Evidenz ein und betont die besondere Gefahr der Selbstbehandlung: PSA/Prostatakrebs-Früherkennung nicht verschleiern. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – Prostatabeschwerden gehören urologisch abgeklärt.',
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
      'Löst beim Menschen eine Bräunung ohne Sonne aus – erste Humanstudie 1996 (Dorr, Life Sciences), sehr kleine Pilotstudie',
      'Löste in doppelblinden, placebokontrollierten Studien bei 8 von 10 Männern mit psychogener Erektionsstörung Erektionen aus und steigerte das sexuelle Verlangen (Wessells 1998 und 2000)',
      'Über MC4R mit gedämpftem Appetit verbunden – in den Studien als Nebenbefund notiert, nicht als Endpunkt geprüft',
      'Urahn zweier zugelassener Medikamente: Afamelanotid (Scenesse, EU 2014) und Bremelanotid (PT-141/Vyleesi, USA 2019)',
      'Anwender berichten von tiefer, gleichmäßiger Bräune mit wenig Sonne, die wochenlang hält – Erfahrungsberichte'
    ],
    risks: [
      'Wichtig: Muttermale können sich verdunkeln, vergrößern oder neu auftreten, teils schon 24 Stunden nach einer Injektion; mehrere publizierte Melanom-Fälle bei Anwendern. Das erschwert die Hautkrebs-Früherkennung – Haut vorher und regelmäßig dermatologisch untersuchen lassen.',
      'Häufig Übelkeit, Müdigkeit und Gähnen; selten, aber ein Notfall: schmerzhafte Dauererektion (Priapismus).',
      'In DE/EU nicht zugelassen; das BfArM rät ausdrücklich ab. Research-Ware ohne Qualitätskontrolle, Infektionsrisiko bei geteilten Nadeln.'
    ],
    status: 'In DE/EU nicht zugelassen; Behörden warnen ausdrücklich vor der Anwendung.',
    sources: [
      { title: 'Dorr RT et al., Life Sci 1996 – erste Humanstudie: Bräunung ohne Sonne', url: 'https://pubmed.ncbi.nlm.nih.gov/8637402/' },
      { title: 'Wessells H et al., J Urol 1998 – Erektionen bei Männern mit psychogener ED', url: 'https://pubmed.ncbi.nlm.nih.gov/9679884/' },
      { title: 'Langan EA et al., Br J Dermatol 2010 – Melanotropic peptides: more than just Barbie drugs', url: 'https://pubmed.ncbi.nlm.nih.gov/20545686/' },
      { title: 'Hjuler KF & Lorentzen HF, Dermatology 2014 – Melanom nach Melanotan-II-Gebrauch', url: 'https://pubmed.ncbi.nlm.nih.gov/24355990/' },
      { title: 'BfArM, Pressemitteilung 14/10 (28.10.2010) – Warnung vor melanotanhaltigen Produkten', url: 'https://www.bfarm.de/SharedDocs/Pressemitteilungen/DE/2010/pm14-2010.html' }
    ],
    community: [
      { title: 'Particle Peptides', url: 'https://particlepeptides.com/en/16-buy-peptides' }
    ],
    podcasts: [
      { title: 'Melanotan 2: Das Bräunungs-Peptid im Faktencheck', audio: 'audio/melanotan-2-podcast.mp3', spotify: '0orxbyC3Wcg2ipQyuEe9Ck', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 39) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das berühmteste Bräunungs-Peptid der Welt: von der Hautkrebs-Präventions-Idee der University of Arizona über den legendären Selbstversuch bis zu zwei zugelassenen Medikamenten-Nachfahren (Afamelanotid/Scenesse und PT-141/Vyleesi). Dazu die Humandaten (Dorr, Life Sciences 1996: Bräunung ohne Sonne; Wessells, J Urol 1998), die drei Effekte über MC1R/MC4R – Bräune, Appetit, Libido – und die ehrliche Schattenseite: Muttermal-Veränderungen (Langan, JAAD 2010), Übelkeit, Graumarkt. Mit der typischen berichteten Anwendung (ohne Empfehlung). Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Dorr et al., Life Sciences 1996 – erste Humanstudie: Bräunung ohne Sonne', url: 'https://pubmed.ncbi.nlm.nih.gov/8809217/' },
          { title: 'Wessells et al., J Urol 1998 – Erektionen bei Männern mit ED', url: 'https://pubmed.ncbi.nlm.nih.gov/9720524/' },
          { title: 'Langan et al., JAAD 2010 – Melanotan-assoziierte Nävusveränderungen', url: 'https://pubmed.ncbi.nlm.nih.gov/20605654/' }
        ] }
    ],
    filterCat: 'Sonstige'
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
    short: 'Die klassische „Zombie-Zell-Kur" der Longevity-Forschung: räumt seneszente Zellen gepulst aus dem Gewebe – nur wenige Tage im Monat. Der Mechanismus ist am Menschen in Gewebeproben gezeigt; in den placebokontrollierten Studien blieb der Nutzen bisher aus.',
    moa: 'Dasatinib blockiert pro-survival Pathways (Ephrin-Tyrosinkinasen). Quercetin hemmt BCL-2/PI3K-Pathways. Seneszente Zellen sind auf diese „SCAPs" angewiesen und sterben. Weil verschiedene seneszente Zelltypen an verschiedenen Überlebenswegen hängen, wird kombiniert; weil sich die Zellen erst über Wochen neu ansammeln, wird gepulst statt täglich dosiert („hit and run").',
    benefits: [
      'Mechanismus am Menschen belegt: 9 Personen mit diabetischer Nierenerkrankung, 3 Tage Einnahme, 11 Tage später 35 % weniger seneszente Zellen im Fettgewebe, ein weiterer Marker −62 %, Entzündungsfresszellen −28 %, dazu gesunkene Entzündungsstoffe im Blut',
      'Offene Studie bei Lungenfibrose (14 Teilnehmer) zeigte bessere körperliche Funktion – die randomisierte, einfach verblindete Folgestudie derselben Gruppe (12 Teilnehmer) fand keinen bedeutsamen Unterschied mehr',
      'Affen mittleren Alters (9 behandelt, 7 Kontrolle, 6 Monate, 2 Tage pro Monat): weniger Seneszenzmarker im Fettgewebe, entzündungshemmende Verschiebungen, bessere Nierenwerte, keine schweren Nebenwirkungen',
      'Mausmodell 2016: gezielte Entfernung seneszenter Zellen per Genschalter verlängerte die mittlere Lebenszeit um 27 % bzw. 24 % je nach Mauslinie – das war ein Genschalter, kein Medikament, und die Höchstlebensdauer stieg nur in einer der beiden Linien'
    ],
    risks: [
      'Dasatinib ist ein verschreibungspflichtiges Krebsmedikament – die Anwendung gehört unbedingt in ärztliche Hände.',
      'Laut Fachinformation sehr häufig (mehr als jeder 10.): Pleuraerguss, Knochenmarksuppression mit Blutarmut sowie Mangel an weißen Blutkörperchen und Blutplättchen, Blutungen. Gelegentlich (seltener als 1 von 100): pulmonale arterielle Hypertonie und QT-Verlängerung. Diese Zahlen stammen aus täglicher Dauergabe bei Leukämiekranken.',
      'Für die gepulste senolytische Anwendung existiert keine Sicherheitsdatenbank: 60 Frauen über 20 Wochen, ein paar Dutzend weitere Menschen über wenige Wochen, 16 Affen.',
      'In der placebokontrollierten Lungenfibrose-Studie 65 nicht schwere Nebenwirkungen gegen 22 unter Placebo; Schlafstörungen und Unruhe bei 4 von 6 Behandelten gegen 0 von 6.',
      'Relevante Wechselwirkungen möglich; nicht in Eigenregie.',
      'Quercetin kann die Eisenaufnahme senken.'
    ],
    status: 'Dasatinib ist in DE bei Leukämien zugelassen (Sprycel). Für die senolytische Anwendung gegen Alterungsprozesse gibt es keine Zulassung – kein Arzt kann Dasatinib gegen Altern verordnen; was in der Szene kursiert, kommt aus dem Ausland oder aus einem Off-Label-Graubereich. Quercetin allein ist frei verkäuflich, ist aber nicht das Protokoll.',
    sources: [
      { title: 'Hickson LJ et al., EBioMedicine 2019 – D+Q bei diabetischer Nierenerkrankung (9 Teilnehmer)', url: 'https://pubmed.ncbi.nlm.nih.gov/31542391/' },
      { title: 'Justice JN et al., EBioMedicine 2019 – offene Studie bei Lungenfibrose (14 Teilnehmer)', url: 'https://pubmed.ncbi.nlm.nih.gov/30616998/' },
      { title: 'Nambiar A et al., EBioMedicine 2023 – randomisierte, einfach verblindete Folgestudie bei Lungenfibrose (12 Teilnehmer) – kein bedeutsamer Unterschied in der körperlichen Funktion', url: 'https://pubmed.ncbi.nlm.nih.gov/36857968/' },
      { title: 'Gonzales MM et al., Nature Medicine 2023 – Phase-1-Studie bei Alzheimer (5 Teilnehmer, 12 Wochen)', url: 'https://pubmed.ncbi.nlm.nih.gov/37679434/' },
      { title: 'Farr JN et al., Nature Medicine 2024 – Knochenstoffwechsel, 60 Frauen, 20 Wochen, primärer Endpunkt verfehlt', url: 'https://pubmed.ncbi.nlm.nih.gov/38956196/' },
      { title: 'Baker DJ et al., Nature 2016 – genetische Entfernung seneszenter Zellen bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/26840489/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    filterCat: 'Longevity'
  },
  {
    id: 'methylene-blue',
    name: 'Methylene Blue (Methylenblau)',
    altNames: 'Methylthioniniumchlorid',
    class: 'Mitochondrialer Elektronen-Donor / Redox-Modulator',
    emoji: '🔷',
    short: 'Ein Farbstoff aus dem 19. Jahrhundert und zugelassenes Notfallmittel: In niedriger Konzentration überträgt Methylenblau Elektronen in den Mitochondrien, eine kleine Studie zeigte mehr Hirnaktivität. Wichtig: nicht mit Antidepressiva kombinieren.',
    moa: 'Bei niedrigen Dosen alternativer Elektronen-Carrier zur Atmungskette → erhöhte ATP-Produktion. Bei hohen Dosen prooxidativ.',
    benefits: [
      'In der EU seit 2011 und in den USA seit 2016 als Injektion gegen Methämoglobinämie zugelassen',
      'Überträgt in niedriger Konzentration Elektronen in der Atmungskette und stützt die Cytochrom-c-Oxidase (Zell- und Tierdaten)',
      'Randomisierte, placebokontrollierte Studie an 26 Gesunden: nach einer niedrigen Einzeldosis mehr Hirnaktivität in der funktionellen Bildgebung und 7 Prozent mehr richtige Antworten beim Gedächtnisabruf',
      'Historisch eines der ersten synthetischen Medikamente, früh gegen Malaria eingesetzt'
    ],
    risks: [
      'Wichtig: nicht mit Antidepressiva (SSRI/SNRI/MAO-Hemmer) oder anderen serotonergen Mitteln kombinieren – Methylenblau hemmt MAO-A stark, die US-Fachinformation warnt vor schwerem Serotonin-Syndrom.',
      'Bei G6PD-Mangel kontraindiziert (schwere Hämolyse möglich); nur geprüfte pharmazeutische Qualität.',
      'Hohe Dosen wirken prooxidativ – die Dosis-Wirkungs-Kurve ist hormetisch.',
      'Färbt Urin, Haut und Mund blau; kann die Pulsoximetrie verfälschen – vor Operationen angeben.'
    ],
    status: 'In der EU (Proveblue, 2011) und den USA (ProvayBlue, 2016) als Injektion für Methämoglobinämie zugelassen; die Einnahme kleiner Mengen als Nootropikum ist Off-Label.',
    sources: [
      { title: 'Rodriguez P et al., Radiology 2016 – randomisierte fMRT-Studie an Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/27351678/' },
      { title: 'Atamna H, Kumar R, J Alzheimers Dis 2010 – Methylenblau, Mitochondrien und Cytochrom-c-Oxidase', url: 'https://pubmed.ncbi.nlm.nih.gov/20463399/' },
      { title: 'Rojas JC et al., Prog Neurobiol 2012 – Mechanismus und hormetische Dosis-Wirkung', url: 'https://pubmed.ncbi.nlm.nih.gov/22067440/' },
      { title: 'Ramsay RR et al., Br J Pharmacol 2007 – MAO-A-Hemmung', url: 'https://pubmed.ncbi.nlm.nih.gov/17721552/' },
      { title: 'Gauthier S et al., Lancet 2016 – LMTM-Phase-3-Studie bei Alzheimer', url: 'https://pubmed.ncbi.nlm.nih.gov/27863809/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Methylenblau-Forschung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Methylenblau: Wunderdroge oder Hype?', audio: 'audio/methylene-blue-podcast.mp3', spotify: '6JlLZilupWgb72WX10TBri', lengthLabel: '≈ 9 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 10). KI-generierte deutsche Folge mit den Hosts Paul und Paula, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet die elegante Mitochondrien-Idee gegen die dünne Human-Evidenz ein und betont die realen Gefahren: Serotonin-Syndrom bei Antidepressiva (MAO-Hemmung), Hämolyse bei G6PD-Mangel, Reinheits-Falle zwischen Pharma- und Industrieware. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'FDA Drug Safety Communication – Methylenblau & Serotonin-Syndrom bei Antidepressiva', url: 'https://www.apsf.org/article/methylene-blue-and-the-risk-of-serotonin-toxicity/' },
          { title: 'Ramsay et al. – Methylenblau hemmt MAO-A (Serotonintoxizität)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2078225/' },
          { title: 'ALZFORUM – LMTM/HMTM (TauRx): verfehlte Alzheimer-Phase-3-Endpunkte', url: 'https://www.alzforum.org/therapeutics/hmtm' },
          { title: 'Rodriguez P et al., Radiology 2016 – Methylenblau & Hirn-Bildgebung', url: 'https://pubmed.ncbi.nlm.nih.gov/27089023/' }
        ] }
    ],
    filterCat: 'Longevity'
  },
  {
    id: 'acarbose',
    name: 'Acarbose',
    altNames: 'Glucobay, Precose, Alpha-Glucosidase-Hemmer',
    class: 'Alpha-Glucosidase-Hemmer (Antidiabetikum, Longevity-Kandidat)',
    emoji: '🔵',
    short: 'Alter Diabetes-Wirkstoff mit Longevity-Bonus: bremst die Aufnahme von Zucker aus Stärke – und verlängerte im großen US-Alterungsprogramm (ITP) die Lebensspanne von Mäusen.',
    moa: 'Acarbose hemmt im Darm das Enzym Alpha-Glucosidase, das komplexe Kohlenhydrate spaltet. Dadurch wird Zucker langsamer und geringer aufgenommen, Blutzuckerspitzen nach dem Essen werden abgeflacht. Im Interventions-Testing-Programm (ITP) verlängerte Acarbose die Lebensspanne von Mäusen – vermutlich über die geglättete Glukose-/Insulinbelastung und Effekte auf das Darmmikrobiom. Ein Mikrobiom-Beitrag ist bei Mäusen plausibel (mehr kurzkettige Fettsäuren wie Propionat, die die Lebensdauer mit vorhersagten); beim Menschen zeigte eine kleine Studie nach zwei Wochen keinen messbaren Effekt auf das Mikrobiom.',
    benefits: [
      'Flacht Blutzuckerspitzen nach Mahlzeiten ab',
      'Verzögert Typ-2-Diabetes bei gestörter Glukosetoleranz (ACE: 13 vs. 16 %; wirkt nur, solange es genommen wird)',
      'Verlängerte im ITP die Lebensspanne von Mäusen (v.a. Männchen)',
      'Günstig, jahrzehntelang als Diabetesmittel im Einsatz',
      'Wirkt lokal im Darm (kaum systemisch aufgenommen)'
    ],
    risks: [
      'Verschreibungspflichtig; Longevity-Nutzung ist off-label',
      'Häufig Blähungen/Darmwind (durch unverdaute Kohlenhydrate)',
      'Longevity-Nutzen beim Menschen nicht bewiesen (Tierdaten)',
      'Bei Unterzuckerung (in Kombination mit anderen Diabetesmitteln) hilft nur Traubenzucker, nicht Haushaltszucker',
      'Kein Herz-Kreislauf-Nutzen in der großen ACE-Studie (HR 0,98)'
    ],
    status: 'Als Glucobay für Typ-2-Diabetes zugelassen, in Deutschland seit 1990, verschreibungspflichtig, Generika verfügbar. Longevity-Nutzung off-label.',
    sources: [
      { title: 'ITP / NIA – Acarbose verlängert Lebensspanne bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/24245565/' },
      { title: 'Harrison DE et al., Aging Cell 2019 – ITP, Acarbose in drei Dosisstufen', url: 'https://pubmed.ncbi.nlm.nih.gov/30688027/' },
      { title: 'Holman RR et al., Lancet Diabetes Endocrinol 2017 – ACE-Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/28917545/' },
      { title: 'Chiasson JL et al., Lancet 2002 – STOP-NIDDM', url: 'https://pubmed.ncbi.nlm.nih.gov/12086760/' }
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
      { title: 'ITP – Canagliflozin verlängert Lebensspanne männlicher Mäuse', url: 'https://pubmed.ncbi.nlm.nih.gov/32990681/' },
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
    short: 'Der MC1R-selektive Verwandte von Melanotan 2: regt die Bildung des Schutzpigments Eumelanin an und ist als Afamelanotid (Scenesse) ein zugelassenes Arzneimittel – allerdings nur zur Vorbeugung von Lichtschäden bei der seltenen Erkrankung EPP.',
    moa: 'Afamelanotid ist ein Analogon des alpha-MSH mit 13 Aminosäuren, von denen 2 ausgetauscht sind (NDP-alpha-MSH). Der Austausch macht das Peptid serumstabil und im Adenylatzyklase-Test 26-mal wirksamer als alpha-MSH (Sawyer et al., PNAS 1980). Es spricht vor allem den Melanocortin-1-Rezeptor der Pigmentzellen an und regt die Bildung von Eumelanin an, das die Lichtdurchdringung der Haut verringert; UV-Schaden ist dafür nicht nötig. Am MC4R, der Appetit und Erektion beeinflusst, wirkt es anders als Melanotan 2 praktisch nicht. Bei erythropoetischer Protoporphyrie (EPP) filtert das zusätzliche Eumelanin genau jenen sichtbaren Lichtanteil, der die phototoxischen Attacken auslöst. Als Implantat mit 16 mg Wirkstoff, alle 2 Monate von einem Spezialzentrum gesetzt, ist es für diese Indikation zugelassen.',
    benefits: [
      'In zwei randomisierten Phase-3-Studien (74 Patienten EU, 94 USA) mehr schmerzfreie Zeit in direkter Sonne: 69,4 gegenüber 40,8 Stunden nach 6 Monaten und 6,0 gegenüber 0,8 Stunden nach 9 Monaten.',
      'In der EU-Studie 77 statt 146 phototoxische Reaktionen; die Lebensqualität stieg in beiden Studien.',
      'Echtes zugelassenes Arzneimittel für EPP: EU seit 22.12.2014, USA seit 08.10.2019 auf Grundlage von 3 Studien mit 244 Patienten an 22 Zentren.',
      'Langzeitdaten aus der Versorgung: 115 Patienten, 1.023 Implantate, bis zu 8 Jahre; Lebensqualität von 31 auf 74 Prozent des Maximums.',
      'MC1R-selektiv und damit ohne die MC4R-Wirkungen von Melanotan 2 wie Priapismus oder starke Appetitwirkung.',
      'Bräunung ohne UV ist beim Menschen gezeigt: placebokontrollierte Studie an 28 Männern (1991).',
      'Bei Vitiligo war Afamelanotid zusätzlich zu Schmalband-UVB der Lichttherapie allein überlegen (55 Teilnehmer, 2015) – Zusatzindikation in Prüfung.'
    ],
    risks: [
      'Zulassung nur für EPP; kosmetische Bräunung ist off-label, und dafür existiert nur eine kleine Studie von 1991.',
      'Die EU-Zulassung erfolgte unter besonderen Bedingungen, weil vollständige Nutzendaten wegen der Seltenheit der Erkrankung nicht zu gewinnen waren.',
      'Häufigste Nebenwirkungen Übelkeit, Kopfschmerzen und Reaktionen an der Implantatstelle bei etwa 1 von 5 Patienten; nicht anwenden bei eingeschränkter Leber- oder Nierenfunktion.',
      'Muttermale können unter Melanocortin-Wirkung dunkler werden; dermatologische Kontrolle vor und während der Anwendung ist angezeigt.',
      'Die Behandlung verbessert bei EPP weder Vitamin-D-Spiegel noch Knochendichte, und ein Teil der Patienten hat weiter Lichtreaktionen.',
      'Graumarktware zum Spritzen ist nicht zugelassen: Gehalt, Reinheit und Sterilität sind ungeprüft, die Zulassungsdaten gelten dafür nicht.'
    ],
    status: 'Als Scenesse (Afamelanotid) in der EU seit 22.12.2014 unter besonderen Bedingungen zugelassen, in den USA seit 08.10.2019, jeweils zur Vorbeugung phototoxischer Reaktionen bei erythropoetischer Protoporphyrie bei Erwachsenen; Verordnung nur durch Spezialisten in anerkannten Zentren. Kosmetische Nutzung off-label; Graumarktware nicht zugelassen.',
    sources: [
      { title: 'Langendonk et al., NEJM 2015 – Afamelanotid bei EPP, zwei randomisierte Phase-3-Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/26132941/' },
      { title: 'EMA – Scenesse (Afamelanotid): Zulassung 22.12.2014 unter besonderen Bedingungen', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/scenesse' },
      { title: 'FDA – Zulassungsschreiben Scenesse vom 08.10.2019', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2019/210797Orig1s000ltr.pdf' },
      { title: 'FDA – Drug Trials Snapshot Scenesse: 3 Studien, 244 Patienten, 22 Zentren', url: 'https://www.fda.gov/drugs/drug-approvals-and-databases/drug-trials-snapshots-scenesse' },
      { title: 'Biolcati et al., Br J Dermatol 2015 – Langzeitbeobachtung, 115 Patienten, bis zu 8 Jahre', url: 'https://pubmed.ncbi.nlm.nih.gov/25494545/' },
      { title: 'Homey et al., Photodermatol Photoimmunol Photomed 2025 – deutsche Sicherheitsstudie nach Zulassung, 200 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/40082741/' },
      { title: 'Lim et al., JAMA Dermatol 2015 – Afamelanotid plus Schmalband-UVB bei Vitiligo', url: 'https://pubmed.ncbi.nlm.nih.gov/25230094/' },
      { title: 'Sawyer et al., PNAS 1980 – NDP-alpha-MSH, 26-fache Wirkstärke im Zelltest', url: 'https://pubmed.ncbi.nlm.nih.gov/6777774/' },
      { title: 'Levine et al., JAMA 1991 – Hautbräunung durch NDP-alpha-MSH, placebokontrolliert', url: 'https://pubmed.ncbi.nlm.nih.gov/1658407/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Melanotan 1 (Afamelanotid): Vom Bräunungs-Peptid zum Medikament', audio: 'audio/melanotan-1-podcast.mp3', spotify: '5KqRbraE72fY4bIFSv8Mgl', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 43) · mit Paul & Paula. Die schönste Erfolgsgeschichte der Peptid-Welt: von der Wüsten-Idee der University of Arizona über die MC1R-Selektivität bis zu den Phase-3-Studien im New England Journal of Medicine (Langendonk 2015), die EPP-Patienten – den „Kindern der Nacht" – die Sonne zurückgaben. Dazu MC1R-Genetik (warum Rothaarige verbrennen), das 16-mg-Implantat Scenesse, Vitiligo-Forschung, der Photoaging-Longevity-Blick und die ehrliche Graumarkt-Einordnung. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Langendonk et al., NEJM 2015 – Afamelanotid bei EPP (Phase 3)', url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa1411481' },
          { title: 'EMA – Scenesse Produktinformation', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/scenesse' }
        ] }
    ],
    filterCat: 'Sonstige'
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
      'In der RESILIENT-Studie nahm die Muskelmasse zu, die Sechs-Minuten-Gehstrecke fiel dennoch in allen Gruppen – mehr Masse ist nicht mehr Funktion',
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
    altNames: 'AT-1001, Zonulin-Antagonist (Achtung: Das Kürzel AT1001 wurde auch für Migalastat von Amicus Therapeutics gegen Morbus Fabry verwendet)',
    class: 'Tight-Junction-Regulator (Darmbarriere / „Leaky Gut")',
    emoji: '🛡️',
    short: 'Das am besten erforschte „Leaky-Gut"-Peptid – und das lehrreichste: Die Phase-3-Studie bei Zöliakie wurde nach einer Zwischenauswertung wegen Aussichtslosigkeit abgebrochen, die Entwicklung daraufhin eingestellt.',
    moa: 'Larazotide ist ein oral wirksames Peptid, das Zonulin blockiert – den körpereigenen Regulator, der die Tight Junctions (Verbindungen zwischen Darmzellen) öffnet. Das soll die Darmbarriere dichter machen und die Durchlässigkeit („Leaky Gut") senken; im Labor ist das belegt, beim Menschen zeigte der Durchlässigkeitstest (Laktulose-Mannitol) unter Glutenbelastung keinen Unterschied zu Placebo (Kelly 2013). Es wirkt lokal im Darm und wurde vor allem als Begleittherapie bei Zöliakie in großen Studien untersucht.',
    benefits: [
      'Verringert in Zell- und Tiermodellen die Durchlässigkeit der Darmbarriere',
      'Oral, wirkt lokal im Darm (kaum systemisch)',
      'Am weitesten erforschtes Barriere-/„Leaky-Gut"-Peptid',
      'Phase 2b mit 342 Erwachsenen: Die niedrigste Dosisstufe besserte die Beschwerden, die höheren Stufen waren nicht besser als Placebo (Leffler 2015)',
      'In Zöliakie bis Phase 3 untersucht – ohne Vorteil gegenüber Placebo'
    ],
    risks: [
      'Die Phase-3-Studie CedLara (geplant 525, bis zum Abbruch 307 eingeschlossen) wurde am 21.6.2022 nach einer Zwischenanalyse von etwa der Hälfte der Zielgröße wegen Aussichtslosigkeit abgebrochen',
      'Für die allgemeine „Leaky-Gut"-Nutzung wenig belastbarer Beleg',
      'Nicht zugelassen; Research-Ware auf Reinheit achten'
    ],
    status: 'Entwicklung bei Zöliakie 2022 eingestellt (Phase 3 CedLara wegen Aussichtslosigkeit abgebrochen), Entwickler 9 Meters Biopharma 2023 insolvent. Akademische Phase-2-Studien: MIS-C (12 Kinder, Sci Transl Med 2025) und Long COVID (107 Teilnehmende, abgeschlossen Juni 2026, Ergebnisse ausstehend). Nicht zugelassen.',
    sources: [
      { title: 'Leffler et al., Gastroenterology 2015 – Phase 2b bei anhaltenden Zöliakie-Beschwerden trotz glutenfreier Ernährung (342 Erwachsene)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4446229/' },
      { title: 'Kelly et al., Aliment Pharmacol Ther 2013 – Gluten-Provokationsstudie, Durchlässigkeitstest ohne Unterschied zu Placebo (184 Teilnehmende)', url: 'https://pubmed.ncbi.nlm.nih.gov/23163616/' },
      { title: 'Frontiers in Nutrition 2024 – Übersicht zu Phase-2-Studien nicht-diätetischer Therapien bei Zöliakie', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11748180/' },
      { title: 'ClinicalTrials.gov NCT03569007 – CedLara, Phase 3 (geplant 525, eingeschlossen 307)', url: 'https://clinicaltrials.gov/study/NCT03569007' }
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
    short: 'Die Weiterentwicklung von Argireline: ein topisches „Botox-like"-Peptid, das Mimikfältchen glätten soll – als etwas potenter beworben. Inzwischen auch als Pulver zum Spritzen verkauft, wofür es keine Grundlage gibt.',
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
  },
  {
    id: 'hmg',
    name: 'HMG (humanes Menopausen-Gonadotropin)',
    altNames: 'Humanes Menopausengonadotropin, Menotropin, hMG, Menopausen-Gonadotropin',
    class: 'Gonadotropin-Präparat aus menschlichem Urin, mit FSH- und LH-Wirkung',
    emoji: '💉',
    short: 'Aus dem Urin von Frauen nach den Wechseljahren gewonnenes Hormonpräparat, das FSH- und LH-Wirkung zugleich liefert und seit 1961 in der Kinderwunschmedizin eingesetzt wird. In der Szene dient es nach Steroidkuren dazu, die abgeschaltete eigene Achse wieder anzustoßen, weil HCG allein nur das Testosteronsignal zurückbringt.',
    moa: 'HMG (75 Einheiten FSH + 75 Einheiten LH-Wirkung; die LH-Wirkung stammt überwiegend aus hCG, ggf. aus dem Urin Schwangerer zugesetzt, laut Fachinformation) → Stimulation von Eierstock bzw. Hoden → Reifung von Eibläschen bzw. Testosteronproduktion und Spermienbildung',
    benefits: [
      'Liefert beide Signale aus einer Quelle: FSH für die Spermienbildung bzw. Follikelreifung und LH-Wirkung für die Hormonproduktion (rekombinantes FSH und LH gibt es einzeln oder als feste Kombination, Follitropin alfa/Lutropin alfa)',
      'Etabliert in der Kinderwunschmedizin bei Frauen und bei Männern mit Hormonmangel',
      'Kombinationen aus HCG und FSH-haltigen Präparaten sind in der Andrologie zur Wiederherstellung der Fruchtbarkeit gängige Praxis',
      'Seit über 60 Jahren im klinischen Einsatz, mit bekannter Zusammensetzung und bekannter Hauptkomplikation'
    ],
    risks: [
      'Überstimulationssyndrom als gefürchtete Komplikation: Flüssigkeit im Bauchraum, Thrombosen, im schweren Fall Krankenhausaufenthalt',
      'Medizinisch nur mit engmaschiger Kontrolle per Ultraschall und Blutwerten vertretbar; auf dem Graumarkt ohne ärztliche Kontrolle, und in beschlagnahmten Mitteln zur Nachbehandlung fehlte in 34,9 % der deklarierte Wirkstoff (Front Chem 2025)',
      'Die Rückkehr der eigenen Achse ist weder garantiert noch schnell: Die Erholung dauert meist 6–18 Monate, die Spermienbildung im Mittel gut 14 Monate (Shankara-Narayana 2020); ein spezifischer Beleg für Nandrolon allein wurde nicht gefunden',
      'Als biologisches Vielstoffgemisch analytisch schwer prüfbar: ob eine Ampulle wirklich 75 Einheiten FSH-Wirkung entfaltet, ist eine andere Messung als eine einfache Mengenbestimmung',
      'LH-/hCG-Wirkung: bei Männern nach der WADA-Liste (S2.2.1) jederzeit verboten'
    ],
    status: 'In Deutschland zugelassenes, verschreibungspflichtiges Arzneimittel mit Anwendungsgebieten in der Fortpflanzungsmedizin. Der Einsatz nach einer Steroidkur ist davon nicht abgedeckt und findet außerhalb des zugelassenen Rahmens statt, meist über den Graumarkt. Im organisierten Sport gelten zusätzlich die dortigen Dopingbestimmungen, unabhängig vom Arzneimittelrecht.',
    sources: [
      { title: 'Gewinnungsverfahren für humanes Menopausen-Gonadotropin, Erstbeschreibung 1949 (Donini und Montezemolo, Serono); zitiert in Front Endocrinol 2025 (PMID 40255498)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12006903/' },
      { title: 'Klinische Einführung von HMG in der Fertilitätsbehandlung, 1961 — Lunenfeld, Reprod Med Biol 2011', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5906949/' },
      { title: 'Fachinformation zu HMG-Präparaten mit 75 Einheiten FSH und 75 Einheiten LH-Wirkung', url: 'https://www.medicines.org.uk/emc/product/1294/smpc' },
      { title: 'Leitlinie der American Society for Reproductive Medicine (Fertility and Sterility 2016) — ovarielles Überstimulationssyndrom als Komplikation der Gonadotropin-Behandlung', url: 'https://pubmed.ncbi.nlm.nih.gov/27678032/' },
      { title: 'Muir et al., Clinical Endocrinology 2025 — Metaanalyse zur Gonadotropin-Therapie mit HCG und FSH-haltigen Präparaten in der Andrologie', url: 'https://pubmed.ncbi.nlm.nih.gov/39445789/' },
      { title: 'Shankara-Narayana et al., J Clin Endocrinol Metab 2020 — Erholung nach Androgenmissbrauch: meist 6–18 Monate, Spermienbildung im Mittel 14,1 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/32030409/' },
      { title: 'İbis et al., BJU International 2026 — Nachbehandlung nach kurzer Steroidkur, retrospektive Kohorte mit 79 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/41147237/' },
      { title: 'Menon, Fertility and Sterility 2003 — Fallbericht: Azoospermie nach Steroiden, behandelt mit HCG und HMG', url: 'https://pubmed.ncbi.nlm.nih.gov/12801577/' },
      { title: 'Front Chem 2025 — beschlagnahmte Mittel zur Nachbehandlung, in 34,9 % fehlte der deklarierte Wirkstoff', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11962791/' },
      { title: 'WADA-Verbotsliste 2026, S2.2.1 — Stoffe mit LH- und HCG-Wirkung bei Männern', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'klotho',
    name: 'Klotho',
    altNames: 'Alpha-Klotho, sKlotho, lösliches Klotho, KL',
    class: 'Körpereigenes Protein und zirkulierendes Hormon, Longevity-Kandidat ohne Zulassung',
    emoji: '🧬',
    short: 'Klotho ist ein Protein aus über 1000 Aminosäuren, das überwiegend in der Niere gebildet wird und im Blut zirkuliert. Mäuse ohne Klotho altern rasend schnell, Mäuse mit von der Befruchtung an hochgedrehtem Gen leben 19 bis gut 30 Prozent länger. Am Menschen gibt es bisher nur Beobachtungsdaten; die erste verblindete, placebokontrollierte Studie mit Klotho läuft seit Februar 2026 in Honduras, Ergebnisse stehen aus.',
    moa: 'Klotho zirkuliert als Hormon im Blut → dämpft Insulin- und IGF-1-Signale → in der Maus verlangsamtes Altern und längere Lebenszeit; am Menschen ist diese Kette nicht geprüft.',
    benefits: [
      'Überexpression verlängerte in zwei unabhängigen Mauslinien die Lebenszeit: Männchen 20 und gut 30 Prozent, Weibchen rund 19 Prozent (Science 2005)',
      'Erstmals Lebenszeitverlängerung nach Behandlung im Erwachsenenalter: AAV9-vermittelte Gabe von sekretiertem Klotho an normal alternde Wildtyp-Mäuse verlängerte die Gesamtlebenszeit männlicher Tiere von 26,3 auf 31,5 Monate (+19,7 %, p = 0,005); die Daten der Weibchen haben die Autoren wegen gehäufter Hauterkrankungen selbst verworfen (Roig-Soriano 2025, Mol Ther)',
      'Träger einer Kopie der Genvariante KL-VS schnitten in Kognitionstests besser ab (718 Menschen, drei Kohorten, Cell Reports 2014); repliziert hat sich der Kognitionsvorteil nicht: In der Heinz-Nixdorf-Recall-Studie (1812 Erwachsene) lagen Träger in allen Tests leicht darunter, ebenso bei 1480 dänischen Hochbetagten',
      'Bei APOE4-Trägern ab 60 Jahren ging eine Kopie KL-VS mit einem um ein Viertel niedrigeren Alzheimer-Risiko einher (Odds Ratio 0,75; Belloy 2020, JAMA Neurology)',
      'Hohe Klothowerte im Blut gingen bei Älteren mit niedrigerer Sterblichkeit einher; das unterste Drittel hatte ein rund 78 Prozent höheres Sterberisiko als das oberste (InCHIANTI, 804 Menschen ab 65, 6 Jahre, 2011). Mehr ist aber nicht automatisch besser: In einer US-Auswertung (NHANES 2007–2016) verlief der Zusammenhang U-förmig, das unterste Fünftel hatte ein rund 37 Prozent, das oberste ein rund 21 Prozent höheres Sterberisiko als die Mitte (J Gerontol A 2025)',
      'Eine einmalige Injektion verbesserte bei alten Rhesusaffen das Gedächtnis für mindestens 2 Wochen; von drei geprüften Dosisstufen wirkte nur die niedrigste (Nature Aging 2023)',
      'Der eigene Spiegel ist trainierbar: Zwei Metaanalysen von 2026 (30 Studien mit 2765 Teilnehmenden bzw. 14 randomisierte Studien mit 893 Teilnehmenden) finden deutliche Anstiege des löslichen Klotho nach Ausdauer- und besonders Krafttraining; die Autoren betonen jedoch hohe Verzerrungsrisiken und dass der Blutwert ein Reaktionsmarker und kein geprüftes Behandlungsziel ist'
    ],
    risks: [
      'Zur Sicherheit am Menschen liegen praktisch keine Daten vor, weil es praktisch keine Anwendung gab: keine kontrollierten Verträglichkeitsdaten, keine Langzeitbeobachtung',
      'Die Humangenetik widerspricht sich: zwei Kopien von KL-VS sind mit kürzerer Lebenszeit verknüpft, und in einer schottischen Geburtskohorte sowie einer dänischen Studie mit 1480 Hochbetagten schnitten Träger schlechter ab',
      'Angebote außerhalb jeder Zulassung: 2 registrierte Pilotstudien mit je 14 Menschen in Roatán in Honduras als Plasmid-Gentherapie (NCT07216781, Start Oktober 2025; NCT07285629, Klotho plus Follistatin, abgeschlossen im April 2026) sind einarmig, unverblindet und ohne Placebo; Ergebnisse sind im Register nicht hinterlegt',
      'Als Klotho-Booster verkaufte Kapseln enthalten kein Klotho; ein Protein dieser Größe wird verdaut, und der Nutzen eines angehobenen Blutwerts ist ungeprüft'
    ],
    status: 'In Deutschland, der EU und den USA ist kein Klotho-Präparat zugelassen; es gibt weder eine verordnungsfähige Form noch einen legalen Bezugsweg. Die erste verblindete, placebokontrollierte Studie am Menschen läuft seit Februar 2026 in Honduras (NCT07544420, Klotho-mRNA, Phase 1b, 21 Teilnehmende, primärer Abschluss geplant für den 30.11.2026); in der EU und den USA ist weiterhin nichts zugelassen. Die Nachfolgefirma der Affenarbeit, Jocasta Neuroscience (Wirkstoff JN-0413, unter die Haut), hat im August 2025 35 Mio. US-Dollar Serie A aufgenommen und im August 2026 ihre UCSF-Lizenz erweitert; sie will den Antrag für eine erste Humanstudie im vierten Quartal 2026 einreichen, Studienstart wäre Anfang 2027. Als Nahrungsergänzung verkaufte Klotho-Booster fallen unter das Lebensmittelrecht, enthalten kein Klotho und dürfen keine Heilversprechen tragen.',
    sources: [
      { title: 'Kuro-o et al., Nature 1997 — Genausfall erzeugt Alterssyndrom in der Maus', url: 'https://pubmed.ncbi.nlm.nih.gov/9363890/' },
      { title: 'Kurosu et al., Science 2005 — Klotho-Überexpression, zwei Mauslinien leben länger', url: 'https://pubmed.ncbi.nlm.nih.gov/16123266/' },
      { title: 'Semba et al., InCHIANTI-Kohorte, Toskana 2011 — Klotho im Blut und Sterblichkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/21474560/' },
      { title: 'Dubal et al., Cell Reports 2014 — Genvariante KL-VS und Kognition', url: 'https://pubmed.ncbi.nlm.nih.gov/24813892/' },
      { title: 'Castner et al. (Labor Dubal), Nature Aging 2023 — Klotho-Injektion bei Rhesusaffen', url: 'https://pubmed.ncbi.nlm.nih.gov/37400721/' },
      { title: 'Roig-Soriano et al., Mol Ther 2025 — Klotho-Gentherapie verlängert Lebenszeit erwachsener Wildtyp-Mäuse', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11997498/' },
      { title: 'Heinz-Nixdorf-Recall-Studie, Sci Rep 2021 — KL-VS ohne Kognitionsvorteil', url: 'https://pubmed.ncbi.nlm.nih.gov/34226614/' },
      { title: 'Belloy et al., JAMA Neurology 2020 — KL-VS und Alzheimer-Risiko bei APOE4-Trägern', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7154955/' },
      { title: 'Chen et al., J Gerontol A 2025 — NHANES, U-förmiger Zusammenhang von Klotho und Sterblichkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/40392566/' },
      { title: 'J Physiol Biochem 2026 — Metaanalyse Training und lösliches Klotho', url: 'https://pubmed.ncbi.nlm.nih.gov/42067671/' },
      { title: 'Front Sports Act Living 2026 — Metaanalyse Training und Alpha-Klotho', url: 'https://pubmed.ncbi.nlm.nih.gov/42756318/' },
      { title: 'ClinicalTrials.gov NCT07544420 — Phase 1b, Klotho-mRNA, placebokontrolliert', url: 'https://clinicaltrials.gov/study/NCT07544420' }
    ],
    filterCat: 'Longevity'
  },
  {
    id: 'nandrolon',
    name: 'Nandrolon-Decanoat',
    altNames: 'Deca-Durabolin, Nandrolondecanoat, Deca, Nandrolon',
    class: 'Anabol-androgenes Steroid, verestertes Testosteronderivat mit zusätzlich gestagener Wirkung',
    emoji: '💉',
    short: 'Nandrolon-Decanoat ist ein anabol-androgenes Steroid, erstmals 1950 synthetisiert, als Decanoat seit 1962 in der Medizin. Die Wirkung ist seit 60 Jahren belegt und unbestritten: Gewebeaufbau und Anregung der Blutbildung. Dieselbe lange Datenlage zeigt die Schäden, und genau deshalb wurden die Anwendungsgebiete Schritt für Schritt gestrichen.',
    moa: 'Nandrolon bindet am Androgenrezeptor → gesteigerter Gewebeaufbau und vermehrte Bildung roter Blutkörperchen bei günstigem Verhältnis von aufbauender zu vermännlichender Wirkung → zugleich Rückkopplung auf die Hormonachse mit Abschaltung der eigenen Testosteronproduktion, dazu gestagene Effekte.',
    benefits: [
      'Belegter Gewebeaufbau: seit 60 Jahren unbestritten, Grundlage der medizinischen Anwendung; Metaanalyse 2026 aus 20 randomisierten Studien: +1,6 kg Magermasse, kein gesicherter Effekt auf die Griffkraft (Prokopidis 2026)',
      'Anregung der Bildung roter Blutkörperchen, daher Zulassung bei Blutarmut infolge chronischen Nierenversagens',
      'Zulassung bei Osteoporose nach den Wechseljahren; historisch weitere Indikationen – eine Kommission beim Bundesgesundheitsamt fand 1991 für 17 damals beworbene Anwendungsgebiete keinen hinreichenden Wirksamkeitsnachweis',
      'Günstiges Verhältnis von aufbauender zu vermännlichender Wirkung — der Grund für den medizinischen Einsatz'
    ],
    risks: [
      'Herz und Gefäße: laut Fachinformation bei vorbestehender Herz-, Nieren- oder Lebererkrankung Ödeme mit oder ohne Herzinsuffizienz; bei Langzeit-Missbrauch von Steroiden reduzierte Pumpfunktion und mehr Koronarplaque (Baggish 2017: Auswurffraktion 52 gegenüber 63 %)',
      'Leber: für Nandrolon (nicht 17α-alkyliert) laut Fachinformation seltene, leichte Leberfunktionsstörungen einschließlich Peliosis, vor allem bei hohen Dosen; Lebertumoren und schwere Cholestase sind vor allem für orale, 17α-alkylierte Steroide beschrieben',
      'Hormonell: Abschaltung der eigenen Testosteronproduktion, Hodenschrumpfung, fallende Spermienzahl, Erektionsstörungen, Wassereinlagerungen und Brustwachstum beim Mann; bei Frauen Zyklusstörungen, Haarwuchs, Haarausfall nach männlichem Muster, Vergrößerung der Klitoris und eine Stimmveränderung, bei längerer Behandlung möglicherweise irreversibel (Heiserkeit als erstes Zeichen)',
      'Psychisch: Stimmungsschwankungen, Reizbarkeit, Aggressivität und Depression; laut Fachinformation Abhängigkeit und Entzugssymptome'
    ],
    status: 'In Deutschland derzeit kein Präparat auf dem Markt (Gelbe Liste, Stand 09/2026). Zugelassen u. a. in Österreich, den Niederlanden und der Schweiz (Deca-Durabolin, Aspen), vor allem bei schwerer postmenopausaler Osteoporose; in den Niederlanden zusätzlich bei Blutarmut infolge Niereninsuffizienz und aplastischer Anämie. Zugelassene Präparate unterliegen Qualitätsanforderungen; in Analysen enthielten nur 47 % der Schwarzmarktproben den angegebenen Stoff (HAARLEM), in Zürich waren 52 % gefälscht. In Deutschland steht Nandrolon in der Anlage des Anti-Doping-Gesetzes (§ 2 Abs. 3: Erwerb und Besitz in nicht geringer Menge zum Doping verboten); im Sport steht es auf der Verbotsliste.',
    sources: [
      { title: 'Sicherheitsinformationen zu Nandrolon-Decanoat (Deca-Durabolin), Fachinformation des niederländischen Arzneimittelinstituts', url: 'https://www.geneesmiddeleninformatiebank.nl/smpc/h00126_smpc.pdf' },
      { title: 'Zugelassene Anwendungsgebiete in den Niederlanden: schwere Osteoporose nach den Wechseljahren, Blutarmut bei Niereninsuffizienz, aplastische Anämie (Fachinformation Deca-Durabolin)', url: 'https://www.geneesmiddeleninformatiebank.nl/smpc/h00126_smpc.pdf' },
      { title: 'Anabol-androgene Steroide, Pumpfunktion und Koronarplaque — Baggish et al., Circulation 2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28533317/' },
      { title: 'Peliosis hepatis und Lebertumoren unter anabol-androgenen Steroiden — Petrovic et al., World Journal of Gastroenterology 2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36051334/' },
      { title: 'Virilisierung bei Frauen, Stimmveränderung bei längerer Behandlung möglicherweise irreversibel (Fachinformation Deca-Durabolin)', url: 'https://www.geneesmiddeleninformatiebank.nl/smpc/h00126_smpc.pdf' },
      { title: 'Verbotsliste im Sport: anabol-androgene Steroide (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' },
      { title: 'Johansen et al., JAMA 1999 — Nandrolon bei Dialysepatienten: mehr fettfreie Masse, Griffkraft unverändert', url: 'https://pubmed.ncbi.nlm.nih.gov/10208142/' },
      { title: 'Prokopidis et al., J Cachexia Sarcopenia Muscle 2026 — Metaanalyse aus 20 randomisierten Studien zu Magermasse und Griffkraft', url: 'https://pubmed.ncbi.nlm.nih.gov/41936385/' },
      { title: 'Câmara et al., Cureus 2025 — Nandrolon bei Osteoporose nach den Wechseljahren, 7 randomisierte Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/41477377/' },
      { title: 'Smit et al., Scand J Med Sci Sports 2020 — HAARLEM-Studie, Ausgangsdaten: 47 % der Proben enthielten den angegebenen Stoff', url: 'https://pubmed.ncbi.nlm.nih.gov/31663164/' },
      { title: 'Smit et al., Scand J Med Sci Sports 2021 — HAARLEM-Studie: Effekte und Nebenwirkungen einer selbst geplanten Steroidkur über ein Jahr', url: 'https://pubmed.ncbi.nlm.nih.gov/33038020/' },
      { title: 'Verdegaal et al., J Clin Endocrinol Metab 2026 — Körperzusammensetzung während und nach der Steroidkur', url: 'https://pubmed.ncbi.nlm.nih.gov/41915785/' },
      { title: 'Magnolini et al., Harm Reduction Journal 2025 — Zürcher Drug-Checking für Steroide: 52 % der Proben gefälscht', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12147309/' },
      { title: 'van Os et al., Front Endocrinol 2025 — anhaltender Hypogonadismus nach Androgenmissbrauch', url: 'https://pubmed.ncbi.nlm.nih.gov/40678315/' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' }
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'partielle-reprogrammierung',
    name: 'Partielle Reprogrammierung (Yamanaka-Faktoren)',
    altNames: 'Yamanaka-Faktoren, OSKM, OSK, zelluläre Reprogrammierung, epigenetische Reprogrammierung, ER-100',
    class: 'Gentherapeutisches Verfahren mit Transkriptionsfaktoren, experimentell, ohne Zulassung',
    emoji: '🔄',
    short: 'Die vier Yamanaka-Faktoren Oct-4, Sox-2, Klf-4 und c-Myc setzen eine ausgereifte Körperzelle in den Stammzellzustand zurück. Partielle Reprogrammierung schaltet sie nur kurz an und rechtzeitig wieder aus, sodass Gewebe im Tierversuch verjüngt, statt zum Tumor zu werden. Am Menschen läuft seit dem 2. März 2026 eine erste Sicherheitsstudie mit 18 Teilnehmern.',
    moa: 'Kurzzeitige Expression der Faktoren → Rücksetzung epigenetischer Altersmarken bei erhaltener Zellidentität → Regeneration in gealtertem Gewebe; läuft der Vorgang durch → vollständige Reprogrammierung → Teratom.',
    benefits: [
      'Im zyklischen Schema 2 Tage an und 5 Tage aus stieg die mittlere Lebenszeit einer Maus mit vorzeitiger Alterung von 18 auf 24 Wochen (Cell 2016)',
      'Ohne c-Myc reichten 3 Faktoren in Netzhautzellen der Maus, damit nach einer Verletzung Nervenfasern nachwuchsen und das Sehvermögen zurückkehrte (Nature 2020)',
      'In normal alternden Tieren zeigten sich unter längerer Behandlung Effekte in Niere und Haut, und die epigenetische Uhr lief rückwärts (Nature Aging 2022)',
      'Das Grundprinzip ist seit 2006 belegt und wurde 2012 mit dem Nobelpreis ausgezeichnet'
    ],
    risks: [
      'Tumoren sind kein seltener Zwischenfall, sondern der eingebaute Endpunkt derselben Reaktion: Teratome bei kurzer Aktivierung im lebenden Tier (Nature 2013), Tumoren auch nach abgebrochenem Puls über Methylierung statt Mutation (Cell 2014), Teratome bei 8 Wochen Dauerbetrieb (Cell 2016)',
      'Am Menschen liegen keinerlei Verträglichkeitsdaten vor; die einzige Studie läuft noch und hat keine Ergebnisse veröffentlicht',
      'Die Affendaten hinter dem Wirkstoff ER-100 wurden nur auf einem Kongress gezeigt und sind in keiner begutachteten Zeitschrift erschienen',
      'Eine zurückgelaufene epigenetische Uhr ist kein Nachweis von Verjüngung: In Stammzellen zeigt die Horvath-Uhr fast null an, und eine vollständig reprogrammierte Zelle im Körper wäre ein Teratom'
    ],
    status: 'In Deutschland, der EU und den USA ist keine Reprogrammierungstherapie zugelassen. Es gibt kein Präparat, keinen legalen Bezugsweg und nichts, was ärztlich verordnet werden könnte. Als Gentherapie fiele ein solches Verfahren in Deutschland unter das Arzneimittelrecht und die europäischen Regeln für Arzneimittel für neuartige Therapien; eine Anwendung außerhalb einer genehmigten klinischen Prüfung ist nicht vorgesehen. Der einzige reguläre Zugang ist die Studie von Life Biosciences mit dem Wirkstoff ER-100, gestartet am 2. März 2026 nach Freigabe durch die amerikanische Behörde Ende Januar 2026, mit 18 Teilnehmern in 4 Zentren, nicht randomisiert und nicht verblindet, mit Sicherheit und Verträglichkeit als Endpunkten.',
    sources: [
      { title: 'Takahashi & Yamanaka, Cell 2006 — Reprogrammierung mit vier Faktoren, Nobelpreis 2012', url: 'https://pubmed.ncbi.nlm.nih.gov/16904174/' },
      { title: 'Abad et al., Nature 2013 — Teratome nach kurzer Faktoraktivierung im lebenden Tier', url: 'https://pubmed.ncbi.nlm.nih.gov/24025773/' },
      { title: 'Ohnishi et al., Cell 2014 (mit Yamanaka) — Tumoren nach abgebrochenem Puls über Methylierung', url: 'https://pubmed.ncbi.nlm.nih.gov/24529372/' },
      { title: 'Ocampo et al. (Izpisua Belmonte), Cell 2016 — partielle Reprogrammierung, 2 Tage an und 5 Tage aus', url: 'https://pubmed.ncbi.nlm.nih.gov/27984723/' },
      { title: 'Lu et al. (Sinclair), Nature 2020 — drei Faktoren in der Netzhaut', url: 'https://pubmed.ncbi.nlm.nih.gov/33268865/' },
      { title: 'Browder et al., Nature Aging 2022 — normal alternde Tiere, Altos Labs und Genentech', url: 'https://pubmed.ncbi.nlm.nih.gov/37118377/' },
      { title: 'Horvath, Genome Biology 2013 — epigenetische Uhr aus 353 Stellen, geeicht an 8000 Proben', url: 'https://pubmed.ncbi.nlm.nih.gov/24138928/' },
      { title: 'Life Biosciences 2026 — ER-100, erste Humanstudie (Registereintrag)', url: 'https://clinicaltrials.gov/study/NCT07290244' }
    ],
    filterCat: 'Longevity'
  },
  {
    id: 'pe-22-28',
    name: 'PE-22-28',
    altNames: 'PE22-28, Spadin-Analogon, verkürztes Spadin',
    class: 'Synthetisches Peptid aus 7 Aminosäuren, Blocker des Kaliumkanals TREK-1 (Spadin-Analogon)',
    emoji: '🧠',
    short: 'PE-22-28 ist die verkürzte, deutlich stärkere Fassung des körpereigenen Peptids Spadin und blockiert im Gehirn den Kaliumkanal TREK-1. Als Antidepressivum mit neuem Angriffspunkt ist die Idee ernstzunehmend, die Tierdaten sind ordentlich. Studien am Menschen gibt es keine.',
    moa: 'PE-22-28 blockiert den Kaliumkanal TREK-1 → veränderte Erregbarkeit der betroffenen Neurone → im Mausmodell weniger depressionsartiges Verhalten und vermehrte Bildung neuer Nervenzellen.',
    benefits: [
      'Angriffspunkt jenseits von Serotonin und Noradrenalin: TREK-1-Blockade, hergeleitet aus Knockout-Mäusen von 2006 und dem körpereigenen Blocker Spadin (PLoS Biology 2010)',
      'Im Mausmodell weniger depressionsartiges Verhalten und mehr neu gebildete Nervenzellen',
      'Wirkeintritt in den Verhaltenstests an Mäusen nach 4 Tagen, während übliche Antidepressiva beim Menschen 3 bis 4 Wochen brauchen',
      'Gegenüber dem Vorbild Spadin um mehrere Größenordnungen stärker am Kanal (0,12 statt 40 bis 60 Nanomolar) und länger im Körper (23 statt 7 Stunden)'
    ],
    risks: [
      'Keine einzige Studie am Menschen: kein Sicherheitsprofil, keine geprüfte Dosis, keine bekannten Wechselwirkungen',
      'Zeitverlust bei einer gut behandelbaren Krankheit: Wochen mit einem ungeprüften Peptid sind Wochen ohne wirksame Behandlung',
      'Graumarktware, bei der Inhalt und Reinheit niemand prüft',
      'Vermarktung reicht echte Mäusezahlen ohne das Wort Maus als Aussage über Menschen weiter'
    ],
    status: 'Nirgends als Arzneimittel zugelassen, auch nicht in Deutschland; es gibt keine Studien am Menschen, auf die sich eine Zulassung stützen könnte. Kein Nahrungsergänzungsmittel. Der Handel läuft über Peptid-Shops, die es als Forschungssubstanz ohne Bestimmung für den Menschen ausweisen. Im Sport ohne Bedeutung, die Substanz zielt auf Stimmung und nicht auf Leistung.',
    sources: [
      { title: 'Heurteaux et al., Nature Neuroscience 2006 — TREK-1-Knockout und depressionsartiges Verhalten im Mausmodell', url: 'https://pubmed.ncbi.nlm.nih.gov/16906152/' },
      { title: 'Mazella et al., PLoS Biology 2010 — Spadin als körpereigener TREK-1-Blocker', url: 'https://pubmed.ncbi.nlm.nih.gov/20405001/' },
      { title: 'Djillani et al., Frontiers in Pharmacology 2017 — PE-22-28: verkürztes Spadin-Analogon mit höherer Bindungsstärke und längerer Halbwertszeit', url: 'https://pubmed.ncbi.nlm.nih.gov/28955242/' },
      { title: 'Moha Ou Maati et al., Neuropharmacology 2012 — Tierdaten zur Verträglichkeit der TREK-1-Blockade', url: 'https://pubmed.ncbi.nlm.nih.gov/21807005/' },
      { title: 'Recherche in Fachliteratur und zugänglichen Studienregistern: keine Humanstudie zu PE-22-28', url: '' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'psilocybin',
    name: 'Psilocybin',
    altNames: 'Psilocin, Magic Mushrooms, Zauberpilze, Psilocybe',
    class: 'Serotonerges Psychedelikum aus Pilzen der Gattung Psilocybe, Betäubungsmittel nach Anlage 1 BtMG',
    emoji: '🍄',
    short: 'Wirkstoff bestimmter Pilze, der im Körper zu Psilocin umgebaut wird und an Serotoninrezeptoren bindet. Bei therapieresistenter Depression ist ein Effekt der hohen Einzeldosis wahrscheinlich echt, aber deutlich kleiner als der Hype, und die staatlich finanzierte deutsche Studie verfehlte ihren Hauptendpunkt. Microdosing war in jeder verblindeten Studie Placebo.',
    moa: 'Psilocybin → Psilocin → Bindung an Serotoninrezeptoren, vor allem an einen Typ in der Großhirnrinde → stundenlang verändertes Erleben → vermutete Lockerung festgefahrener Muster (am Menschen nicht ausgemessen)',
    benefits: [
      'Bei therapieresistenter Depression kurzfristig besser als Scheinvergleich: 6,6 Punkte Unterschied in der Studie von 2022, 3,6 und 3,8 Punkte in den beiden Phase-3-Studien',
      'Dosisabhängigkeit erkennbar: 25 Milligramm schneiden besser ab als 10 oder 1 Milligramm',
      'Auch in der gemeinnützig finanzierten Usona-Studie von 2023 mit 104 Menschen gegen aktives Placebo minus 12 Punkte nach 6 Wochen',
      'Wirkung tritt nach einer einzigen begleiteten Dosis ein, nicht erst nach Wochen täglicher Einnahme'
    ],
    risks: [
      'Bei psychiatrischer Vorgeschichte rund 4 Prozent schwerwiegende Ereignisse laut Metaanalyse von 2024 über mehr als 3500 Studienteilnehmer: Depressionsverschlechterung, suizidales Verhalten, Psychose, Krampfanfälle',
      'Anhaltende Wahrnehmungsstörung (HPPD) selten, aber real — in EPIsoDE 1 Fall nach der hohen Dosis, dazu mehr Suizidgedanken an Dosierungstagen',
      'Psilocin bindet auch an den Serotoninrezeptor vom Typ 2 B am Herzen, über den Fenfluramin und Pergolid Herzklappen geschädigt haben; für monatelanges Microdosing eine offene Frage',
      'Außerhalb von Studien schwankender Wirkstoffgehalt, kein geschützter Rahmen und keine Vorauswahl nach psychiatrischer Vorgeschichte'
    ],
    status: 'In Deutschland Anlage 1 des Betäubungsmittelgesetzes: nicht verkehrsfähig und nicht verschreibbar. Kein zugelassenes Präparat in der EU oder in den USA; der amerikanische Zulassungsantrag ist in Teilen eingereicht, Abschluss geplant für Ende 2026. Ausnahmen: Australien seit Juli 2023 durch eigens zugelassene Psychiater, Oregon seit 2023 und Colorado seit 2025 über lizenzierte Zentren, auf US-Bundesebene weiterhin verboten.',
    sources: [
      { title: 'Goodwin et al. (Compass Pathways), Phase-2b-Studie zu therapieresistenter Depression, New England Journal of Medicine 2022', url: 'https://pubmed.ncbi.nlm.nih.gov/36322843/' },
      { title: 'Davis et al. (Johns Hopkins), randomisierte Studie zu Psilocybin bei Depression, JAMA Psychiatry 2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33146667/' },
      { title: 'Carhart-Harris et al. (Imperial College London), Psilocybin gegen Escitalopram, New England Journal of Medicine 2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33852780/' },
      { title: 'Raison et al. (Usona-Institut), Psilocybin gegen Niacin bei Depression, JAMA 2023', url: 'https://pubmed.ncbi.nlm.nih.gov/37651119/' },
      { title: 'Compass Pathways, Pressemitteilung vom 23.6.2025 zur Phase-3-Studie COMP005 (258 Teilnehmer, 3,6 Punkte)', url: 'https://ir.compasspathways.com/News--Events-/news/news-details/2025/Compass-Pathways-Successfully-Achieves-Primary-Endpoint-in-First-Phase-3-Trial-Evaluating-COMP360-Psilocybin-for-Treatment-Resistant-Depression/default.aspx' },
      { title: 'Compass Pathways, Pressemitteilung vom 17.2.2026 zur Phase-3-Studie COMP006 (581 Teilnehmer, 3,8 Punkte)', url: 'https://ir.compasspathways.com/News--Events-/news/news-details/2026/Compass-Pathways-Successfully-Achieves-Primary-Endpoint-in-Second-Phase-3-Trial-Evaluating-COMP360-Psilocybin-for-Treatment-Resistant-Depression/default.aspx' },
      { title: 'EPIsoDE-Studie, Mertens et al., JAMA Psychiatry 2026', url: 'https://pubmed.ncbi.nlm.nih.gov/41848690/' },
      { title: 'Szigeti et al. (Imperial College London), selbstverblindete Microdosing-Studie, eLife 2021', url: 'https://pubmed.ncbi.nlm.nih.gov/33648632/' },
      { title: 'Hinkle et al., Metaanalyse zu unerwünschten Ereignissen unter Psychedelika, JAMA Psychiatry 2024', url: 'https://pubmed.ncbi.nlm.nih.gov/39230883/' }
    ],
    filterCat: 'Sonstige'
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
  'cjc-ipamorelin': 'Exercise', 'cjc-1295-dac': 'Exercise',
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
  'bronchogen-chonluten': 'Immun', 'thymalin': 'Immun',
  'pentadeca-arginate': 'Immun', 'glow-stack': 'Sonstige', 'klow-stack': 'Immun',
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
  'dsip': 'Sonstige', 'semax': 'Sonstige', 'selank': 'Sonstige', 'melanotan-2': 'Sonstige',
  'klotho': 'Longevity', 'partielle-reprogrammierung': 'Longevity',
  'nandrolon': 'Exercise', 'hmg': 'Sonstige', 'pe-22-28': 'Sonstige', 'psilocybin': 'Sonstige'
};
EXPERIMENTAL.forEach(e => { e.filterCat = _EXP_CAT_MAP[e.id] || 'Sonstige'; });
