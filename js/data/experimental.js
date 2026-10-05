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
    link: 'https://pubmed.ncbi.nlm.nih.gov/9777765/',
    sources: [
      { title: 'Kaufman KD et al., J Am Acad Dermatol 1998 – Finasterid bei androgenetischer Alopezie, zwei Studien mit 1.553 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/9777765/' },
      { title: 'EMA, Überprüfung finasterid- und dutasteridhaltiger Arzneimittel 2025 – Suizidgedanken als Nebenwirkung von Finasterid bestätigt', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/finasteride-dutasteride-containing-medicinal-products' },
      { title: 'BfArM, Rote-Hand-Brief zu Finasterid und Dutasterid vom 15.09.2025 – Suizidgedanken', url: 'https://www.bfarm.de/SharedDocs/Risikoinformationen/Pharmakovigilanz/DE/RHB/2025/rhb-finasterid.html' }
    ]
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
    sources: [
      { title: 'Heishman SJ et al., Psychopharmacology 2010 – Meta-Analyse akuter Effekte von Nikotin auf die Leistung (41 doppelblinde Studien)', url: 'https://pubmed.ncbi.nlm.nih.gov/20414766/' },
      { title: 'Hartmann-Boyce J et al., Cochrane Database Syst Rev 2018 – Nikotinersatztherapie zum Rauchstopp', url: 'https://pubmed.ncbi.nlm.nih.gov/29852054/' }
    ],
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
      'TRIUMPH-2 (1.152 Erwachsene mit Typ-2-Diabetes und Übergewicht oder Adipositas, 80 Wochen) laut Hersteller: bis 20,8 Prozent gegenüber 4,0 Prozent unter Placebo',
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
      { title: 'Eli Lilly, Herstellermitteilung zu TRIUMPH-2 und TRIUMPH-3 (23.07.2026)', url: 'https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-successful-two-additional' },
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
    short: 'Bei ärztlich festgestelltem Testosteronmangel eine zugelassene Hormontherapie mit gut belegter Wirkung auf Libido, Muskelmasse, Körperfett und Knochendichte. Für Männer ohne diagnostizierten Mangel gibt es keine Zulassungsstudie.',
    moa: 'Testosteron ist das wichtigste männliche Sexualhormon und wirkt über Androgenrezeptoren auf Muskeln, Knochen, Blutbildung, Fettstoffwechsel, Libido, Antrieb und Stimmung; ein Teil wird zu Östradiol aromatisiert (physiologisch nötig, u.a. für Knochen und Libido). Der Spiegel sinkt ab etwa Mitte 30 langsam; bei ausgeprägtem Mangel mit Symptomen spricht man von Hypogonadismus. Die TRT ersetzt das fehlende Hormon (Injektion, Gel, Pflaster oder Depot), um den Spiegel in einen gesunden Bereich zu bringen. Ziel ist der Ausgleich eines Mangels, nicht die Supraphysiologie.',
    benefits: [
      'Bei echtem Mangel: mehr sexuelles Verlangen und bessere Erektionsfähigkeit.',
      'Zunahme der Muskelmasse und Abnahme von Körperfett.',
      'Verbesserte Knochendichte.',
      'Oft bessere Stimmung, mehr Antrieb und Lebensqualität (mangelbedingte, depressionsähnliche Symptome bessern sich).',
      'Hinweise auf bessere Insulinempfindlichkeit und günstige Stoffwechseleffekte, v.a. bei Übergewicht + Mangel.',
      'Aktuelle Sicherheitsdaten (TRAVERSE-Studie): kein erhöhtes Risiko für schwere Herz-Kreislauf-Ereignisse. Zum Prostatakrebs gab es zu wenige Fälle für eine Aussage in die eine oder andere Richtung.'
    ],
    risks: [
      'Verschreibungspflichtig – Diagnose und Begleitung gehören in ärztliche Hände (inkl. regelmäßiger Blutkontrollen).',
      'Unterdrückt vorübergehend die eigene Spermienproduktion; bei Kinderwunsch gibt es schonendere Wege.',
      'Kann die roten Blutkörperchen anheben – mit Kontrollen gut steuerbar.',
      'In TRAVERSE häufiger Vorhofflimmern (91 gegen 63 Fälle), akute Nierenschädigung und Lungenembolie; Metaanalyse: Herzrhythmusstörungen RR 1,53. Die FDA hat 2025 eine Warnung zu Blutdruckanstieg ergänzt.'
    ],
    status: 'Zugelassenes, verschreibungspflichtiges Medikament bei Testosteronmangel. Am besten ärztlich abklären und begleiten lassen.',
    sources: [
      { title: 'AAFP 2024 – Testosteronersatztherapie bei männlichem Hypogonadismus (Übersicht)', url: 'https://www.aafp.org/pubs/afp/issues/2024/0600/testosterone-replacement-therapy.html' },
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
        note: 'Der Podcast von Paul Höser (Folge 22). KI-generierte deutsche Folge mit realistischen Stimmen (ElevenLabs), mit Fachrecherche ergänzt und bewusst positiv, aber verantwortungsvoll gerahmt: TRT bei echtem, ärztlich nachgewiesenem Mangel ist gut belegt und oft sehr wirksam; die TRAVERSE-Studie hat die Herzsorgen entschärft, beim Prostatarisiko bleibt die Frage offen. Klar benannt: Blutkontrollen (Hämatokrit), unterdrückte Fruchtbarkeit und die strikte Abgrenzung zur Hochdosis-/Graumarkt-Nutzung. Reine Information, kein medizinischer Rat, keine Dosierempfehlung – Testosteron ist verschreibungspflichtig; Mangel bitte ärztlich abklären und Therapie ärztlich begleiten.',
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
    status: 'In den USA 2026 als Foundayo zugelassen (Eli Lilly). Großbritannien hat Orforglipron im August 2026 als erstes europäisches Land zugelassen; in der EU lag bis September 2026 keine Empfehlung vor, in DE nicht zugelassen.',
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
    short: 'Das in den USA zugelassene GHRH-Analogon: hebt das körpereigene Wachstumshormon an und senkt bei Menschen mit HIV-assoziierter Lipodystrophie das viszerale Bauchfett – in der Peptid-Szene einer der Standards (u.a. im Hunter-Williams-Stack).',
    moa: 'Tesamorelin ist ein stabilisiertes Analogon des Wachstumshormon-Releasing-Hormons (GHRH) und regt die Hirnanhangsdrüse zu einer natürlichen, pulsatilen Ausschüttung von Wachstumshormon (GH) und damit IGF-1 an. Zugelassen ist es zur Reduktion von viszeralem Bauchfett (ausschließlich bei HIV-assoziierter Lipodystrophie). Da die körpereigene Rückkopplung erhalten bleibt, gilt es als physiologischer als exogenes HGH. In der Biohacking-Szene wird es für Körperkomposition, Regeneration und Anti-Aging genutzt.',
    benefits: [
      'FDA-zugelassen – eines der wenigen GH-Peptide mit echter Zulassung.',
      'Senkt viszerales (tiefes) Bauchfett bei Menschen mit HIV-assoziierter Lipodystrophie (zugelassene Indikation).',
      'Hebt GH und IGF-1 auf physiologische Weise (erhaltene Rückkopplung).',
      'Für Körperkomposition, Haut oder Regeneration bei Gesunden gibt es keine kontrollierten Studien.'
    ],
    risks: [
      'In den USA verschreibungspflichtig; die Biohacking-Nutzung liegt außerhalb der Zulassung.',
      'GH-Klassen-Effekte möglich: Wassereinlagerung, Gelenkbeschwerden, Blutzucker im Blick behalten.',
      'Im Sport jederzeit verboten, im Wettkampf und im Training (WADA-Liste 2026, S2.2.4).',
      'In DE/EU kein zugelassenes Präparat; Graumarkt-Ware ohne Qualitätskontrolle.'
    ],
    status: 'In den USA als Egrifta SV und Egrifta WR zugelassen, ausschließlich zur Reduktion von überschüssigem Bauchfett bei Erwachsenen mit HIV und Lipodystrophie. In der EU und in Deutschland nicht zugelassen (EU-Antrag 2012 zurückgezogen). In DE in der Anlage des Anti-Doping-Gesetzes; im Sport jederzeit verboten (WADA S2.2.4).',
    sources: [
      { title: 'Falutz J et al., J Acquir Immune Defic Syndr 2010 – Zulassungsstudie, 404 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/20101189/' },
      { title: 'Stanley TL et al., Lancet HIV 2019 – Leberfett, randomisiert, doppelblind', url: 'https://pubmed.ncbi.nlm.nih.gov/31611038/' },
      { title: 'Metaanalyse 2026, J Int Assoc Provid AIDS Care – 4 RCTs, 909 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/42538058/' },
      { title: 'EMA – Rücknahme des Zulassungsantrags für Egrifta, 26.06.2012', url: 'https://www.ema.europa.eu/en/news/ferrer-internacional-sa-withdraws-its-marketing-authorisation-application-egrifta-tesamorelin' },
      { title: 'DailyMed – US-Fachinformation Egrifta WR', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=839334d3-8c1d-4c26-9036-2ab524a6ea75' }
    ],
    community: [
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
    short: 'Das direkt zugeführte Wachstumshormon selbst und der Referenzpunkt, an dem sich alle GH-Peptide messen. Bei gesunden Älteren verschiebt es die Körperzusammensetzung moderat – mehr fettfreie Masse, weniger Fett bei gleichem Gewicht –, ein Zugewinn an Kraft oder Funktion ist nicht gezeigt, Nebenwirkungen sind häufiger (Liu 2007).',
    moa: 'HGH (Somatropin) ist das rekombinant hergestellte, körperidentische Wachstumshormon. Anders als die GH-Peptide (die die eigene, pulsatile Ausschüttung anregen) wird es direkt zugeführt und hebt GH- und IGF-1-Spiegel stark und anhaltend an. IGF-1 vermittelt viele der anabolen Effekte in Muskel, Knochen und Bindegewebe. Die viel zitierte Rudman-Studie (New England Journal of Medicine, 1990; 12 behandelte und 9 unbehandelte Männer über 60, nicht randomisiert) fand mehr Magermasse und weniger Fett – und löste damit den Anti-Aging-Hype aus. Weil die körpereigene Rückkopplung umgangen wird, gilt exogenes HGH als weniger physiologisch als die GH-Peptide.',
    benefits: [
      'Stärkster und direktester Hebel auf GH und IGF-1.',
      'Bei gesunden Älteren im Mittel plus 2,1 kg fettfreie Masse und minus 2,1 kg Fettmasse bei unverändertem Gewicht; Kraft und Funktion verbesserten sich nicht (Liu 2007, systematische Übersicht, 18 Studienpopulationen).',
      'Körperidentisches Molekül – seit Jahrzehnten medizinisch erprobt (GH-Mangel, Kinderwachstum).',
      'Der Referenzpunkt, an dem sich die moderneren GH-Peptide messen.'
    ],
    risks: [
      'Verschreibungspflichtig; Nutzung ohne echten Mangel ist off-label.',
      'Bei gesunden Älteren häufiger Weichteilödeme, Gelenkschmerzen, Karpaltunnelsyndrom und Gynäkomastie, tendenziell mehr gestörte Nüchternglukose (Liu 2007); Insulinresistenz besonders bei höherer Dosis.',
      'Umgeht die natürliche Rückkopplung – weniger physiologisch als GH-Peptide.',
      'Im Sport WADA-verboten; Graumarkt-Ware auf Echtheit und Reinheit achten.'
    ],
    status: 'Als Somatropin für GH-Mangel und weitere Indikationen zugelassen; in DE verschreibungspflichtig. Anti-Aging-/Biohacking-Nutzung off-label.',
    sources: [
      { title: 'Rudman et al., N Engl J Med 1990 – Growth Hormone in Men over 60 (12 behandelte, 9 unbehandelte Männer, nicht randomisiert)', url: 'https://www.nejm.org/doi/full/10.1056/NEJM199007053230101' },
      { title: 'Liu H et al., Ann Intern Med 2007 – systematische Übersicht: Wachstumshormon bei gesunden Älteren', url: 'https://pubmed.ncbi.nlm.nih.gov/17227934/' },
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
      'Herzinsuffizienz-Signal: Eine randomisierte Phase-IIb-Studie an 123 älteren Hüftfrakturpatienten wurde vorzeitig beendet, weil bei einigen Behandelten eine Herzinsuffizienz auftrat (Adunsky et al. 2011); bei Herzerkrankungen ärztlich abklären.',
      'Nicht als Arzneimittel zugelassen, im Wettkampfsport verboten; Research-Ware auf Qualität prüfen.'
    ],
    status: 'Kein zugelassenes Arzneimittel; Forschungssubstanz.',
    sources: [
      { title: 'Nass R et al., Ann Intern Med 2008 – MK-677 elderly', url: 'https://pubmed.ncbi.nlm.nih.gov/18981485/' },
      { title: 'Murphy MG et al., J Clin Endocrinol Metab 1998', url: 'https://pubmed.ncbi.nlm.nih.gov/9467534/' },
      { title: 'Adunsky A et al., Arch Gerontol Geriatr 2011 – Phase IIb an Hüftfrakturpatienten, wegen Herzinsuffizienz-Signal vorzeitig beendet', url: 'https://pubmed.ncbi.nlm.nih.gov/21067829/' }
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
          { title: 'Nass et al., Ann Intern Med 2008 – MK-677 bei älteren Erwachsenen', url: 'https://pubmed.ncbi.nlm.nih.gov/18981485/' },
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
    short: 'Der beliebte GH-Stack: ein GHRH-Analogon plus das selektive Ghrelin-Mimetikum Ipamorelin, die über zwei Rezeptoren die eigene Wachstumshormon-Ausschüttung anstoßen. Die Synergie beider Signalwege ist am Menschen gezeigt, Ipamorelin hob in Studien Cortisol und Prolaktin kaum an – zur Kombination selbst gibt es aber keine Humanstudie.',
    moa: 'CJC-1295 ist ein Analogon der ersten 29 Aminosäuren des Wachstumshormon-Releasing-Hormons (GHRH) mit 4 Aminosäureaustauschen gegen schnellen Abbau; es besetzt den GHRH-Rezeptor der Hypophyse. Im Stack mit Ipamorelin wird laut aktueller Übersicht meist die kurz wirksame Form ohne DAC (Mod GRF 1-29) verwendet, die DAC-Variante bindet an Albumin und hat eine Halbwertszeit von 5,8 bis 8,1 Tagen. Ipamorelin ist ein Pentapeptid, das den Ghrelin-Rezeptor GHSR-1a aktiviert und beim Menschen einen einzelnen GH-Puls auslöst (Halbwertszeit 2 Stunden); im Tier setzte es anders als GHRP-2 und GHRP-6 kein ACTH oder Cortisol frei, Prolaktin blieb unverändert. Dass ein GHRH-Signal und ein Ghrelin-Signal synergistisch wirken, ist am Menschen für die Substanzklassen belegt (Bowers 1990, Veldhuis 2009), nicht für genau diese Kombination. Die Rückkopplung über Somatostatin und IGF-1 bleibt erhalten, anders als bei exogenem HGH.',
    benefits: [
      'Ipamorelin setzt beim Menschen verlässlich Wachstumshormon frei: ein einzelner Puls, Halbwertszeit 2 Stunden (Gobburu 1999, randomisierte Phase-1-Studie, 5 Stufen à 8 gesunde Männer)',
      'Selektiv: im Tier auch bei mehr als 200-facher wirksamer Menge kein ACTH- oder Cortisolanstieg, Prolaktin, LH, FSH und TSH unverändert (Raun 1998); am Menschen laut Übersicht keine nennenswerten Effekte auf andere Hypophysenhormone',
      'GHRH-Signal und Ghrelin-Signal wirken am Menschen synergistisch auf die GH-Freisetzung (Bowers 1990, 18 Männer; Veldhuis & Bowers 2009, 47 Männer) – belegt für die Substanzklassen, nicht für diesen Stack',
      'CJC-1295 mit DAC hob in zwei randomisierten Studien an Gesunden GH 2- bis 10-fach und IGF-1 1,5- bis 3-fach über Tage (Teichman 2006) – Hormonspiegel, kein klinischer Endpunkt',
      'Ipamorelin bis zu 7 Tage gut verträglich, Nebenwirkungen nicht häufiger als unter Placebo (Beck 2014, Phase 2, 114 Patienten)',
      'Anwenderberichte: tieferer Schlaf, bessere Regeneration, festere Haut, messbar höheres IGF-1 – unkontrolliert, nie in Studien geprüft'
    ],
    risks: [
      'Keine einzige Humanstudie zur Kombination; die meist verwendete Form ohne DAC ist am Menschen nicht untersucht (Dominikowski 2026, unterste Evidenzstufe).',
      'Die einzige Wirksamkeitsstudie zu Ipamorelin (Darmlähmung nach Operation) verfehlte ihren Endpunkt; keine Daten zu Schlaf, Muskel, Fett oder Haut.',
      'Berichtet: Reaktionen an der Einstichstelle, Wärmegefühl, Kribbeln, Wassereinlagerung; die Insulinempfindlichkeit kann sinken.',
      'FDA nennt schwerwiegende Ereignisse bis zum Tod nach intravenösem Ipamorelin und bei CJC-1295 erhöhten Puls und Gefäßerweiterungsreaktionen; Langzeit- und Krebsdaten fehlen, bei aktiver Krebserkrankung heikel.',
      'Graumarktware: in einer Auswertung von 6441 Proben aus 14 Peptiden 41,6 bis 71,1 % mit Qualitätsmängeln, 15 % mit Endotoxin (Preprint 2026).'
    ],
    status: 'In DE, EU und USA nicht als Arzneimittel zugelassen; Forschungspeptide. Im Sport jederzeit verboten (WADA 2026 S2.2.4; in DE CJC-1295, mod-GRF und Ipamorelin namentlich in der Anlage des Anti-Doping-Gesetzes). FDA: Ipamorelin seit 29.09.2023 in Kategorie 2 der Übergangsregelung für Herstellbetriebe nach Abschnitt 503B (Wirkstoffe mit möglichen erheblichen Sicherheitsrisiken).',
    sources: [
      { title: 'Sigalos JT, Pastuszak AW, Sex Med Rev 2018 – Sicherheit und Wirksamkeit von GH-Sekretagoga', url: 'https://pubmed.ncbi.nlm.nih.gov/28400207/' },
      { title: 'Teichman SL et al., J Clin Endocrinol Metab 2006 – CJC-1295 hebt GH und IGF-1 über Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' },
      { title: 'Raun K et al., Eur J Endocrinol 1998 – Ipamorelin, der erste selektive GH-Freisetzer', url: 'https://pubmed.ncbi.nlm.nih.gov/9849822/' },
      { title: 'Gobburu JV et al., Pharm Res 1999 – Ipamorelin bei gesunden Probanden, Halbwertszeit 2 Stunden', url: 'https://pubmed.ncbi.nlm.nih.gov/10496658/' },
      { title: 'Beck DE et al., Int J Colorectal Dis 2014 – Ipamorelin nach Darmoperation, Phase 2, Endpunkt verfehlt', url: 'https://pubmed.ncbi.nlm.nih.gov/25331030/' },
      { title: 'Bowers CY et al., J Clin Endocrinol Metab 1990 – Synergie von GHRH und GHRP am Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/2108187/' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – Evidenzstufen der Peptide der GH-IGF-1-Achse', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' }
    ],
    community: [
      { title: 'biolabshop (CJC/Ipamorelin)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'CJC-1295 + Ipamorelin: Der beliebte Wachstumshormon-Stack im Faktencheck', audio: 'audio/cjc-ipamorelin-podcast.mp3', spotify: '1lAy2Hc9kF0X2YQijcYKg5', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 17) · mit Paul & Paula. Frische, positive KI-Dialogfolge über den beliebten sanften GH-Stack: CJC-1295 (GHRH-Analogon) hebt die Grundlinie, Ipamorelin (sauberes Ghrelin-Mimetikum, kaum Cortisol/Prolaktin/Hunger) setzt die Pulse obendrauf – zusammen bauen sie das jugendliche, pulsierende Wachstumshormon-Muster nach. Warum das physiologischer ist als direktes HGH, der Unterschied CJC mit DAC vs. ohne DAC (Mod GRF), Tiefschlaf/Haut/Regeneration – plus die Longevity-Nuance: moderat und pulsierend schlägt dauerhaft maximal. Reine Information, keine Dosier- oder Anwendungsempfehlung; im Sport verboten.', sources: [
          { title: 'Sigalos & Pastuszak 2018 – Review zu Anti-Aging-Peptiden (GH-Sekretagoga)', url: 'https://pubmed.ncbi.nlm.nih.gov/28400207/' },
          { title: 'Teichman et al. 2006 – CJC-1295 Pharmakokinetik/Sicherheit (Phase 1)', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
        ] }
    ],
    filterCat: 'Exercise'
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
    status: 'Forschungs-Peptid, im Wettkampfsport verboten. Noch nicht als Arzneimittel zugelassen. USA: Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob BPC-157 für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen 8:6, 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen.',
    sources: [
      { title: 'Sikiric P et al., Curr Pharm Des 2018 – BPC-157 review', url: 'https://pubmed.ncbi.nlm.nih.gov/29879879/' },
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
    altNames: 'Thymosin-β4-Fragment, Ac-LKKTETQ',
    class: 'Synthetisches Peptid-Fragment (Ac-LKKTETQ, aktinbindende Region des 43-Aminosäuren-Proteins Thymosin Beta-4)',
    emoji: '🩹',
    short: 'Das Regenerations-Peptid aus der Thymosin-Beta-4-Familie: Im Tiermodell fördert das Mutterprotein Wundheilung, Gefäßbildung und Herzreparatur. TB-500 selbst ist am Menschen nicht untersucht und wird gern mit BPC-157 kombiniert.',
    moa: 'Synthetisches Peptid mit der aktiven aktinbindenden Kernsequenz (Ac-LKKTETQ), das die regenerative Region des körpereigenen Proteins Thymosin Beta-4 (Tβ4, 43 AS) nachbildet. Tβ4 wirkt nicht-hormonell: Durch Bindung von G-Aktin-Monomeren stellt es ein Reservoir für den Umbau des Zytoskeletts bereit und fördert so die Zellwanderung zur Verletzungsstelle. Zusätzlich stimuliert es die Gefäßneubildung, hemmt entzündungsfördernde Zytokine und reduziert über weniger Myofibroblasten die Narbenbildung. Diese Wirkungen sind für das vollständige Tβ4 beschrieben, überwiegend im Tiermodell. Für TB-500 selbst sind biologische Wirkungen kaum dokumentiert; in einer Zellkulturarbeit von 2024 zeigte nicht TB-500, sondern sein Abbauprodukt Ac-LKKTE eine Wundheilungswirkung. Alle Humanstudien liefen mit vollständigem Tβ4, zu TB-500 gibt es keine Humandaten.',
    benefits: [
      'Das Mutterprotein Thymosin Beta-4 beschleunigt im Tiermodell die Heilung von Haut, Hornhaut und Herzmuskel',
      'Das Mutterprotein Thymosin Beta-4 bindet Aktin und fördert die Zellwanderung, im Tiermodell auch die Gefäßneubildung; für TB-500 selbst nicht belegt',
      'Im Tiermodell weniger Myofibroblasten und damit weniger Narbenbildung',
      'Kleine klinische Studien mit vollständigem Thymosin Beta-4 an Hautgeschwüren, Hornhautdefekten und nach Herzinfarkt zeigen in Teilgruppen positive Signale; die beiden größten Studien (Augentropfen bei trockenem Auge, rund 600 und 700 Teilnehmende) lagen in den Hauptzielgrößen nahezu gleichauf mit Placebo',
      'Gilt in Anwenderberichten als gut verträglich'
    ],
    risks: [
      'Humanstudien mit TB-500 selbst fehlen; die klinischen Daten betreffen das vollständige Thymosin Beta-4.',
      'Kein systematisch untersuchtes Sicherheitsprofil; bei nicht regulierter Ware Risiken durch Verunreinigung und ungenaue Dosierung.',
      'Fördert Gefäßbildung und Zellwanderung – bei bekannter oder vermuteter Tumorerkrankung nicht ohne ärztliche Rücksprache.',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S2.3); nur injizierbar.'
    ],
    status: 'Forschungs-Peptid, in DE, der EU und den USA nicht als Arzneimittel zugelassen. Die FDA fand keine Humandaten und führte TB-500 für Rezepturapotheken wegen Sicherheitsbedenken in Kategorie 2. Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob TB-500 für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen 8:6, 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen. Im Sport jederzeit verboten (WADA S2.3), in DE zudem in der Anlage des Anti-Doping-Gesetzes.',
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
      { title: 'KI-Podcast: TB-500 – das systemische Regenerations-Peptid', audio: 'audio/tb-500-podcast.mp3', spotify: '7jlWTnGRAao4lBwzhtUWPg', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 3) · mit Paul & Paula. KI-Dialogfolge über TB-500, ein synthetisches Fragment von Thymosin Beta-4: woher der Ruf als Regenerations-Peptid kommt, was die Nature-Studie 2004 an Mäusen mit dem vollständigen Protein zeigte und warum sich das nicht auf das Fragment übertragen lässt. Am Menschen ist TB-500 nicht untersucht. Reine Information, keine Dosier- oder Anwendungsempfehlung; nicht als Arzneimittel zugelassen, im Sport jederzeit verboten (WADA).' }
    ],
    filterCat: 'Immun'
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu (Copper-Tripeptid)',
    altNames: 'Glycyl-L-Histidyl-L-Lysin-Kupfer',
    class: 'Tripeptid-Kupfer-Komplex',
    emoji: '🧴',
    short: 'Ein körpereigenes Kupfer-Tripeptid, präklinisch eines der am gründlichsten untersuchten Regenerationspeptide. Am Menschen belegt sind eine randomisierte Studie zu diabetischen Fußgeschwüren und kleine, meist nicht begutachtete Kosmetikstudien; für die Injektion gibt es keine Humandaten.',
    moa: 'GHK-Cu (Glycyl-L-Histidyl-L-Lysin, komplexiert mit einem Kupfer(II)-Ion) ist ein natürlich im Blutplasma vorkommendes Tripeptid, dessen Spiegel mit dem Alter sinkt (etwa 200 ng/ml mit 20, 80 ng/ml mit 60 Jahren). Es gilt als Matrikryptin, das bei Verletzungen aus Bindegewebseiweißen freigesetzt wird. Es regt Fibroblasten zur Synthese von Kollagen, Elastin, Dermatansulfat, Chondroitinsulfat und Decorin an und steuert zugleich die abbauenden Metalloproteinasen; Kupfer dient als Cofaktor der quervernetzenden Lysyloxidase. Ergänzend lockt es Immun- und Gefäßzellen an und fördert die Gefäßneubildung. In Genexpressionsdaten menschlicher Zelllinien (Connectivity Map) veränderte GHK die Aktivität von 31,2 % der Gene um mindestens die Hälfte – ein Zelllinienbefund, kein Nachweis in Gewebe nach Anwendung. Die Wundheilungsdaten sind teils klinisch, systemische Injektionseffekte beruhen auf Tierversuchen.',
    benefits: [
      'Diabetische Fußgeschwüre: GHK-Cu-Gel plus Standardversorgung schloss die Wunden im Median zu 98,5 % gegenüber 60,8 % unter wirkstofffreiem Gel, Infektionen 7 % statt 34 % (Mulder 1994, randomisiert, verblindete Auswertung)',
      'Kosmetikstudien an Frauen um 50 über 12 Wochen mit weniger Falten und dichterer Haut, z. B. 71 Frauen (Gesicht) und 41 Frauen (Augen, besser als Placebo) – überwiegend Kongressbeiträge und Industrieberichte',
      'Kleine Biopsiestudie: Kollagenzunahme nach einem Monat bei 70 % der Frauen mit GHK-Cu, 50 % mit Vitamin C, 40 % mit Retinsäure (Abdulghani 1998, Pilotstudie)',
      'Präklinisch konsistent: Kollagen-, Elastin- und GAG-Synthese, Gefäßneubildung, Wundheilung in mehreren Tierarten',
      'Keine hormonelle Wirkung; als Kosmetikinhaltsstoff seit Jahrzehnten verbreitet'
    ],
    risks: [
      'Die Humandaten zur Haut sind klein und überwiegend nicht begutachtet; systematische Übersichten 2026 nennen die klinische Evidenz dünn, eine kleine Studie nach Laserbehandlung war negativ.',
      'Injektion: keine Humanstudie; die FDA nennt begrenzte Humandaten und ein Immunrisiko durch Zusammenlagerung und Verunreinigungen; Graumarktproben mit häufigen Qualitätsmängeln (Preprint 2026).',
      'Nicht bei Morbus Wilson (gestörte Kupferausscheidung).',
      'Der Vergleich mit Minoxidil beim Haarwachstum und die Formel von mehr als 4.000 verjüngten Genen sind am Menschen nicht belegt.'
    ],
    status: 'Topisch in Kosmetik frei verkehrsfähig; nirgends als Arzneimittel zugelassen. Injizierbare Form ist Forschungspeptid; FDA: Nominierung für injizierbares GHK-Cu zurückgezogen, Hinweis auf Immunogenitätsrisiko (Stand 22.04.2026); nicht injizierbares GHK-Cu wird laut FDA-Liste vom 14.05.2026 wieder geprüft (503A-Kategorie 1). Nicht auf der WADA-Liste.',
    sources: [
      { title: 'Pickart L, Margolina A, Int J Mol Sci 2018 – GHK-Cu: regenerative Wirkungen und Gendaten', url: 'https://pubmed.ncbi.nlm.nih.gov/29986520/' },
      { title: 'Pickart L et al., Oxid Med Cell Longev 2012', url: 'https://pubmed.ncbi.nlm.nih.gov/22666519/' },
      { title: 'Mulder GD et al., Wound Repair Regen 1994 – GHK-Cu-Gel bei diabetischen Fußgeschwüren (RCT)', url: 'https://pubmed.ncbi.nlm.nih.gov/17147644/' },
      { title: 'Pickart L et al., Biomed Res Int 2015 – GHK in der Hautregeneration, Übersicht der Kosmetikstudien', url: 'https://pubmed.ncbi.nlm.nih.gov/26236730/' },
      { title: 'Mateescu DM et al., Pharmaceutics 2026 – Evidenzkarte: präklinisch konsistent, klinisch spärlich', url: 'https://pubmed.ncbi.nlm.nih.gov/42797253/' },
      { title: 'FDA – Bulk Drug Substances Nominated for Use in Compounding Under Section 503A, Stand 14.05.2026', url: 'https://www.fda.gov/media/94155/download' }
    ],
    community: [
      { title: 'biolabshop (GHK-Cu)', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'GHK-Cu (Kupfer-Tripeptid): Creme top, Spritze Fragezeichen – im Faktencheck', audio: 'audio/ghk-cu-podcast.mp3', spotify: '7GdCodf2PCq47XKo9jmrrK', lengthLabel: '≈ 10 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 19). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Der ehrliche Dreh: topisch/kosmetisch ist GHK-Cu eines der bestbelegten Peptide (~40 Jahre Forschung, +28% Kollagendichte, Haut/Wundheilung, sehr sicher) – aber der Sprung zum injizierten Ganzkörper-Anti-Aging ist am Menschen kaum belegt und bringt ein Kupfer-Überladungs-Risiko. Belegt ist die Creme, nicht die Nadel. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Pickart & Margolina, Biomolecules 2018 – GHK-Cu: Genexpression & Regeneration', url: 'https://pubmed.ncbi.nlm.nih.gov/29986520/' },
          { title: 'GHK als Anti-Aging-Peptid (Review, PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8789089/' }
        ] }
    ],
    filterCat: 'Immun'
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
    moa: 'Dreier-Logik der Geweberegeneration, wie die Szene sie beschreibt: TB-500 (Fragment von Thymosin Beta-4) soll Reparaturzellen beweglich machen, BPC-157 die Gefäßneubildung und Bindegewebszellen fördern, GHK-Cu den Aufbau von Kollagen und Elastin steuern. GHK-Cu ist ein körpereigenes Tripeptid, das Kupfer bindet – Kofaktor u. a. der Superoxid-Dismutase und der Kollagen-Quervernetzung. Sein Plasmaspiegel sinkt von etwa 200 ng/mL mit 20 auf 80 ng/mL mit 60 Jahren (Pickart & Margolina 2018). Laut Connectivity-Map-Daten aus Krebszelllinien verändert GHK die Aktivität von mindestens 4000 Genen (Pickart 2015, Auswertung der Entdeckerin). WICHTIG: Zur Dreier-KOMBINATION existieren keine publizierten Studien – die Evidenz gilt den Einzelteilen (GHK-Cu: Zell- und topische Kosmetikdaten; BPC-157: Tiermodelle; TB-500: Wundheilungsdaten der Muttersubstanz Thymosin Beta-4).',
    benefits: [
      'Berichtet: pralleres Hautbild, feinere Poren, weniger Knitterfältchen, schnellere Heilung kleiner Makel – erste Frische nach 2 bis 3 Wochen, Haupteffekt nach 6 bis 8 Wochen (Erfahrungsberichte, keine Studien).',
      'GHK-Cu als Creme: 2 randomisierte Studien mit weniger Faltenvolumen und Faltentiefe gegenüber Kontrollen (systematische Übersicht Mokhtar 2026).',
      'Berichtet: vollere Haare und Nägel; im Labor verlängerte das verwandte Kupferpeptid AHK-Cu isolierte menschliche Haarfollikel (Pyo 2007).',
      'Drei komplementäre Regenerations-Achsen in einem Blend (Mobilisieren, Versorgen, Bauen) – als Konzept schlüssig, als Kombination ungeprüft.'
    ],
    risks: [
      'Zur Kombination existiert keine einzige Studie – reine Anwender-Empirie auf Basis von Einzelteil-Daten.',
      'Keine Langzeit-Sicherheitsdaten zur Injektion; die FDA nennt Immunreaktionen, Zusammenlagerung und Verunreinigungen als mögliche Risiken.',
      'Kupferpeptid kann an der Einstichstelle brennen und röten; Stabilität der Mischung im Fläschchen ungeprüft.',
      'Gefäß- und zellwanderungsfördernd: bei aktiver Krebserkrankung meiden; Graumarkt-Ware mit unklarer Reinheit; im Sport jederzeit verboten (BPC-157 in S0, TB-500 in S2.3).'
    ],
    status: 'Research-Blend, keine der drei Komponenten als Arzneimittel zugelassen. GHK-Cu ist als Kosmetik-Wirkstoff verbreitet. Die FDA führt BPC-157, TB-500 und injizierbares GHK-Cu unter Rezeptursubstanzen mit möglichen erheblichen Sicherheitsrisiken, als zurückgezogene Nominierungen (früher Kategorie 2, Stand 22.04.2026); nicht injizierbares GHK-Cu wird laut FDA-Liste vom Mai 2026 wieder geprüft. Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob BPC-157 und TB-500 für Rezepturarzneien in den USA zugelassen werden sollen. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen jeweils 8:6 bei 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen. WADA-Liste 2026: BPC-157 (S0) und TB-500 (S2.3) jederzeit verboten.',
    sources: [
      { title: 'Pickart & Margolina, Int J Mol Sci 2018 – GHK-Cu: Regeneration und Gendaten', url: 'https://pubmed.ncbi.nlm.nih.gov/29986520/' },
      { title: 'Mokhtar et al., Aesthet Surg J 2026 – systematische Übersicht GHK-Cu in der Ästhetik (20 Studien, 2 RCTs)', url: 'https://pubmed.ncbi.nlm.nih.gov/42619529/' },
      { title: 'Vasireddi et al., HSS J 2025 – systematischer Review BPC-157', url: 'https://pubmed.ncbi.nlm.nih.gov/40756949/' },
      { title: 'Treadwell et al., Ann N Y Acad Sci 2012 – Thymosin Beta-4 und Wundheilung', url: 'https://pubmed.ncbi.nlm.nih.gov/23050815/' },
      { title: 'Tewari et al., Am J Sports Med 2026 – Übersicht zu sechs Szene-Peptiden inkl. BPC-157, TB-500, GHK-Cu', url: 'https://pubmed.ncbi.nlm.nih.gov/42578445/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'GLOW (GHK-Cu + BPC-157 + TB-500): Der Beauty-Stack im Faktencheck', audio: 'audio/glow-podcast.mp3', spotify: '1yvGmRZsYrAmEjZm4InKks', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 51) · mit Paul & Paula. Loren Pickarts Entdeckung von 1973, die 4000-Gene-Analyse, Kupfer als Zündschlüssel der Kollagen-Quervernetzung, die Bauarbeiter-Straßen-Bauplan-Logik – und die ehrliche Einordnung: keine Kombi-Studien. Reine Information, keine Dosier- oder Anwendungsempfehlung. (Veröffentlichung: 22.08.2026, 10:00)' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'klow-stack',
    name: 'KLOW (KPV + GHK-Cu + BPC-157 + TB-500)',
    altNames: 'KLOW-Blend, GLOW + KPV, Heilungs-Stack',
    class: 'Peptid-Blend – GLOW plus KPV für Haut, Darm & Entzündung',
    emoji: '🧪',
    short: 'Der große Bruder von GLOW: dieselben drei Zutaten plus die Entzündungsbremse KPV – damit verschiebt sich die Mission von Haut zu Haut + Darm + Entzündung.',
    moa: 'Vierer-Logik der Szene, abgeleitet aus Zell- und Tierversuchen: TB-500 soll Reparaturzellen mobilisieren, BPC-157 Gefäße bauen (und gilt als Magensaft-Peptid als Darmschleimhaut-Klassiker), GHK-Cu den Kollagen-Bauplan liefern – und KPV (Lys-Pro-Val, das entzündungsdämpfende Ende des Alpha-MSH) drosselt in Zellkulturen NF-κB, den Hauptschalter der Entzündungs-Genetik. In Colitis-Tiermodellen reduzierte KPV Entzündungsmarker deutlich, teils oral wirksam (Aufnahme über Peptid-Transporter der Darmzellen). Am Menschen ist keiner dieser Mechanismen gezeigt, und zur Vierer-KOMBINATION existieren keine publizierten Studien.',
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
    status: 'Research-Blend, nicht zugelassen. Evidenz aus Einzelteilen (KPV/BPC-157/TB-500/GHK-Cu) extrapoliert. Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob KPV, TB-500 und BPC-157 für Rezepturarzneien in den USA zugelassen werden sollen. Die FDA-Fachleute rieten jeweils ab, das Gremium stimmte dennoch jeweils mehrheitlich dafür (Stimmen je 8:6 bei 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen. GHK-Cu war nicht Teil dieser Abstimmung.',
    sources: [
      { title: 'Dalmasso et al., Gastroenterology 2008 – KPV bei Colitis (Zellkultur und Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/18061177/' },
      { title: 'Vasireddi et al., HSS J 2025 – BPC-157, systematischer Review', url: 'https://pubmed.ncbi.nlm.nih.gov/40756949/' },
      { title: 'Tewari et al., Am J Sports Med 2026 – Szene-Peptide in der Sportmedizin', url: 'https://pubmed.ncbi.nlm.nih.gov/42578445/' },
      { title: 'McDermott Will & Schulte, Juli 2026 – Bericht zur FDA-Expertensitzung (PCAC) vom 23./24.07.2026', url: 'https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/' }
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
    short: 'Ein Melanocortin-Peptid, das die Lust zentral im Gehirn anspricht – nicht über die Durchblutung wie Viagra. Als Vyleesi seit 2019 in den USA für prämenopausale Frauen mit Luststörung zugelassen, belegt durch zwei Phase-3-Studien mit 1.267 Frauen und einem moderaten Effekt; die in der Szene verbreitete Anwendung bei Männern ist nicht zugelassen.',
    moa: 'PT-141 (Bremelanotid) ist ein zyklisches Heptapeptid und synthetisches Analogon von alpha-MSH, das Melanocortin-Rezeptoren aktiviert, mit hoher Affinität zum MC4-Rezeptor, dem eine Rolle für die sexuelle Funktion zugeschrieben wird. Anders als PDE5-Hemmer (Sildenafil/Tadalafil), die an den Blutgefäßen ansetzen, soll es Hirnbahnen der sexuellen Reaktion beeinflussen. Es ist eng mit Melanotan 2 verwandt, was die melanocortin-typischen Nebenwirkungen erklärt: Übelkeit, Flushing, kurzzeitiger Blutdruckanstieg und fokale Hyperpigmentierung. Zugelassen ist ein Autoinjektor zur subkutanen Bedarfsanwendung; frühe Studien an Männern nutzten auch ein Nasenspray.',
    benefits: [
      'Als Vyleesi (FDA 2019) für prämenopausale Frauen mit erworbener, generalisierter HSDD zugelassen: zwei Phase-3-RCTs mit 1.267 Frauen über 24 Wochen, Verlangen und Leidensdruck gegenüber Placebo statistisch klar verbessert, im Ausmaß moderat (Kingsberg 2019).',
      'Effekt über 52 Wochen in einer offenen Verlängerung mit 684 Frauen erhalten, keine neuen Sicherheitssignale (Simon 2019); eine systematische Übersichtsarbeit 2026 über 36 Studien zu verschiedenen Behandlungen fand für Bremelanotid mehr Verlangen und Erregung.',
      'Wirkt zentral am Verlangen, nicht an der Durchblutung – ein anderer Ansatz als Potenzmittel.',
      'Bei Männern mit Erektionsstörung in kleineren kontrollierten Studien wirksam, auch bei ungenügendem Ansprechen auf Viagra (Rosen 2004) und zusammen mit niedrig dosiertem Sildenafil (Diamond 2005, 19 Männer) – nicht zugelassen; die größte Männerstudie (Safarinejad 2008) steht seit 2023 unter einer Expression of Concern.'
    ],
    risks: [
      'Hebt nach jeder Gabe den Blutdruck kurzzeitig an (bis 6 mmHg systolisch, Gipfel nach 2 bis 4 Stunden) – bei unkontrolliertem Bluthochdruck oder Herz-Kreislauf-Erkrankung kontraindiziert.',
      'Übelkeit bei 40 %, Abbruch deswegen bei 8 %; fokale Hyperpigmentierung bei 1 % (Gesicht, Zahnfleisch, Brust), nicht immer rückbildend.',
      'Senkt die Aufnahme von oralem Naltrexon deutlich und kann die Magenentleerung verlangsamen; bei Schwangerschaftsverdacht absetzen.',
      'Off-label-/Graumarkt-Nutzung ist ungeprüft; Graumarkt-Peptide, darunter PT-141, zeigten häufig Qualitätsmängel (Preprint 2026).'
    ],
    status: 'In den USA seit 2019 als Vyleesi zugelassen, ausschließlich für prämenopausale Frauen mit erworbener, generalisierter HSDD (nicht für Männer, nicht zur Leistungssteigerung). In DE/EU keine Zulassung dokumentiert. Nicht namentlich auf der WADA-Liste.',
    sources: [
      { title: 'FDA – Fachinformation Vyleesi (Bremelanotid) 2019', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf' },
      { title: 'Kingsberg SA et al., Obstet Gynecol 2019 – RECONNECT Phase-3 (Bremelanotid bei HSDD)', url: 'https://pubmed.ncbi.nlm.nih.gov/31599840/' },
      { title: 'Simon JA et al., Obstet Gynecol 2019 – 52 Wochen Verlängerung', url: 'https://pubmed.ncbi.nlm.nih.gov/31599847/' },
      { title: 'Diamond LE et al., Urology 2005 – PT-141 plus Sildenafil bei Männern mit ED', url: 'https://pubmed.ncbi.nlm.nih.gov/15833522/' },
      { title: 'Dhillon S, Keam SJ, Drugs 2019 – Bremelanotide: First Approval', url: 'https://pubmed.ncbi.nlm.nih.gov/31429064/' }
    ],
    community: [
      { title: 'Sexuelle Funktionsstörungen ärztlich abklären (Ursachensuche, Herz-Kreislauf)', url: 'https://www.gelbe-liste.de/wirkstoffe/Bremelanotid_57503' },
      { title: 'biolabshop (Research – nur Grauzone, keine Empfehlung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'PT-141 (Bremelanotid): Die Lust-Spritze fürs Gehirn im Faktencheck', audio: 'audio/pt-141-podcast.mp3', spotify: '2D3wSp3syLHObeyXzCi2nR', lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 20). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Melanocortin-Agonist, der das Verlangen zentral im Gehirn steigert – nicht die Durchblutung wie Cialis. Echt zugelassen (Vyleesi, FDA 2019), aber NUR für Frauen mit HSDD; die Biohacking-Nutzung ist off-label/Graumarkt. Effekt moderat; kritisch: Übelkeit, Blutdruckanstieg (Kontraindikation bei Herz-Kreislauf), Hautverfärbung. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'FDA – Vyleesi (Bremelanotid) Fachinformation', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf' },
          { title: 'Kingsberg et al. 2019 – RECONNECT Phase-3-Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/31599840/' }
        ] }
    ],
    filterCat: 'Sonstige'
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
      { title: 'biolabshop (Research – nur Grauzone, keine Empfehlung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      {
        title: 'Tadalafil: Sexpille fürs Gehirn? Prostata, Blutdruck & Kopf im Faktencheck',
        audio: 'audio/tadalafil-podcast.mp3',
        spotify: '4m6SNKGcaneh9bA0VfC0c5',
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 21) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das unterschätzte Gefäß-Tool Tadalafil: wie der lang wirksame PDE5-Hemmer (bis zu 36 Stunden) das körpereigene Entspannungssignal der Gefäße verlängert, warum die niedrig dosierte tägliche Einnahme bei Prostata-Beschwerden offiziell zugelassen ist (Yokoyama 2015), was die Szene an Endothel- und Pump-Effekten berichtet – und was die Hirnforschung sagt (PASTIS 2022 ernüchternd, ETLAS-2 in Stroke 2025 verfehlte sein Hauptziel, bei vielen Nebenwirkungen und nur einem nicht signifikanten Trend bei Veränderungen der weißen Substanz). Plus die eine harte Regel: niemals mit Nitraten kombinieren. Reine Information, keine Dosier- oder Anwendungsempfehlung – verschreibungspflichtig.',
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
    moa: 'Sildenafil hemmt das Enzym Phosphodiesterase-5 (PDE5), das den Botenstoff cGMP abbaut. Bei sexueller Erregung setzen Nervenenden Stickstoffmonoxid frei, das die cGMP-Produktion anstößt – cGMP entspannt die Gefäßmuskulatur und lässt Blut einströmen. Sildenafil verlängert und verstärkt dieses Signal (ohne Erregung passiert nichts). Wirkeintritt nach ca. 30–60 Minuten, Wirkdauer 4–6 Stunden – der besser steuerbare Klassiker gegenüber dem lang wirksamen Tadalafil. Da PDE5 auch in den Lungengefäßen sitzt, ist Sildenafil als Revatio bei Lungenhochdruck zugelassen. Beobachtungsdaten zum Alzheimer-Risiko unter PDE5-Hemmern sind widersprüchlich: niedrigeres Risiko in einzelnen Auswertungen (Cleveland Clinic, Nature Aging 2021; Adesuyan, Neurology 2024), kein Effekt in einer großen israelischen Kohorte, Gegenrichtung in einer genetischen Analyse – kein Wirksamkeitsnachweis; kontrollierte Studien laufen.',
    benefits: [
      'Zugelassen und exzellent belegt bei erektiler Dysfunktion (Goldstein, NEJM 1998) – das Original seit 1998.',
      'Als Revatio zugelassen bei pulmonaler arterieller Hypertonie (Lungenhochdruck).',
      'Die Erektion als Gefäß-Frühwarnsystem: ED-Abklärung deckt Herz-Kreislauf-Risiken oft Jahre früher auf.',
      'Demenzrisiko: Beobachtungsdaten widersprüchlich – niedrigeres Risiko in einzelnen Auswertungen (Neurology 2024: −18 %), kein Effekt in einer israelischen Kohorte mit 133.336 Patienten, Gegenrichtung in einer genetischen Analyse. Kein Wirksamkeitsnachweis.',
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
      { title: 'Adesuyan et al., Neurology 2024 – PDE5-Hemmer & Alzheimer (UCL, ~270.000 Männer)', url: 'https://pubmed.ncbi.nlm.nih.gov/38324745/' }
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
    moa: 'Synthetisches, N-acetyliertes 28-Aminosäuren-Peptid aus dem Thymus, das als Immunmodulator wirkt. Es aktiviert die Toll-like-Rezeptoren TLR2 und TLR9 auf dendritischen Zellen, Makrophagen und B-Zellen und induziert darüber Typ-I-Interferone (IFN-α/β), IL-12 und TH1-Zytokine (IFN-γ) – das stärkt die zelluläre Abwehr gegen Viren und Tumorzellen. Zusätzlich fördert es die Reifung von T-Zellen im Thymus. Charakteristisch ist eine bidirektionale Modulation: Stimulation bei Immunschwäche, Dämpfung über regulatorische T-Zellen (FOXP3+) bei Immunüberaktivierung. Unter den Immun-Peptiden dieser Liste hat es die breiteste klinische Datenbasis.',
    benefits: [
      'Stützt geschwächte T-Zell-Zahlen: unter Strahlenchemotherapie bei Lungenkrebs deutlich seltener schwere Lymphopenie (19,1 vs. 62,1 %, nicht randomisierte Phase-2-Studie)',
      'Als Begleitung der Krebstherapie untersucht, nicht als Mittel gegen den Tumor selbst; dort auch seltener Strahlenpneumonitis',
      'In einer randomisierten Melanom-Studie mit 488 Patienten mehr Tumoransprechen zusätzlich zur Chemotherapie, ohne zusätzliche Toxizität',
      'Bei COVID-19 widersprüchlich: Eine kleine rückblickende Auswertung (76 Patienten) fand geringere Sterblichkeit, größere Kohortenstudien und eine Metaanalyse (9 Studien, 5352 Patienten) fanden keinen Vorteil',
      'Immunmodulator statt Booster: stärkt die Abwehr bei Schwäche, ohne sie blind anzuheizen',
      'Ansatz gegen Immunalterung (Thymus-Rückbildung) plausibel, aber nicht in kontrollierten Studien geprüft',
      'In Studien sehr gut verträglich; als Zadaxin seit Jahrzehnten klinisch im Einsatz'
    ],
    risks: [
      'Als Zadaxin in über 30 Ländern zugelassen; in der EU keine EU-weite Zulassung, aber eine nationale in Italien; in Deutschland und den USA nicht zugelassen.',
      'In der großen Sepsis-Studie (1106 Patienten) kein Überlebensvorteil.',
      'Bei Autoimmunerkrankungen und zusammen mit Immuntherapien (Checkpoint-Hemmer) nur nach ärztlicher Rücksprache.',
      'Frei bezogene Ware auf Qualität und Sterilität prüfen.'
    ],
    status: 'Als Zadaxin (Thymalfasin) in über 30 Ländern zugelassen, v. a. bei chronischer Hepatitis B/C, teils als Immunadjuvans. In der EU gibt es keine EU-weite Zulassung, in Italien aber eine nationale (seit 1996, verschreibungspflichtig). In Deutschland und den USA nicht zugelassen.',
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
      { title: 'KI-Podcast: Thymosin Alpha-1 – das Immun-Peptid mit Zulassung', audio: 'audio/thymosin-alpha-1-podcast.mp3', spotify: '11QZafzo2jGgDsOl3xxA11', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 7) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Thymosin Alpha-1, den „Dirigenten" des Immunsystems: ein körpereigenes Thymus-Peptid, das T-Zellen reifen lässt und die Abwehr ins Gleichgewicht bringt. Als Zadaxin in über 30 Ländern zugelassen; in einer kleinen rückblickenden COVID-Auswertung (Liu et al., Clin Infect Dis 2020) mit geringerer Sterblichkeit verbunden, größere Studien fanden keinen Vorteil. Longevity-Bezug: Thymus-Schrumpfung und Immunoseneszenz. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
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
    short: 'Der bewährte, extrem günstige Diabetes-Klassiker mit Longevity-Bonus: aktiviert AMPK wie Sport und Fasten – die geplante TAME-Studie soll den Anti-Aging-Effekt am Menschen prüfen, Ergebnisse gibt es noch nicht.',
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
      { title: 'TAME-Studie (Targeting Aging with Metformin)', url: 'https://www.afar.org/tame-trial' },
      { title: 'Musi N et al., medRxiv 2026 (Preprint, nicht begutachtet) – randomisierte Studie zu Metformin und Gebrechlichkeit, 145 Ältere', url: 'https://pubmed.ncbi.nlm.nih.gov/42620010/' }
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
      'CagriSema in Phase 3 (REDEFINE 1, 68 Wochen): 20,4 Prozent Gewichtsverlust über alle Teilnehmer, 3,0 Prozent unter Placebo.',
      'Zweites, von GLP-1 unabhängiges Sättigungssignal (Amylin).'
    ],
    risks: [
      'Nicht zugelassen (FDA-Antrag vom 18.12.2025, Entscheidung steht aus) – was derzeit angeboten wird, ist ungeprüfte Research-Ware.',
      'Bei Diabetes auf Unterzuckerung achten; sonst meist milde Magen-Darm-Effekte.',
      'Langzeitdaten stehen noch aus.'
    ],
    status: 'Zulassungsantrag bei der FDA am 18.12.2025, Entscheidung steht aus (Stand Oktober 2026); in der EU nicht zugelassen. Im direkten Vergleich mit Tirzepatid (REDEFINE 4, 84 Wochen) erreichte CagriSema 23,0 gegenüber 25,5 Prozent und verfehlte die Nichtunterlegenheit. Noch nicht regulär verfügbar.',
    sources: [
      { title: 'Lau DCW et al., Lancet 2021 – Cagrilintid allein, Phase 2', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)01751-7/fulltext' },
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
    short: 'Die beliebte TRT-Alternative in Tablettenform: hebt das körpereigene Testosteron an und erhält dabei die Spermienkonzentration. Die US-Zulassung wurde 2015 abgelehnt – die Studien belegten Laborwerte, keinen klinischen Nutzen.',
    moa: 'Enclomiphen ist das reine trans-Isomer von Clomifen und wirkt als selektiver Östrogenrezeptor-Modulator (SERM). Es blockiert Östrogen-Rezeptoren im Hypothalamus/der Hypophyse, wodurch mehr LH und FSH ausgeschüttet werden – die Hoden produzieren daraufhin mehr eigenes Testosteron. Anders als klassische TRT (die die eigene Produktion und Spermienbildung unterdrückt) erhält Enclomiphen die Spermienkonzentration; ob das auch Schwangerschaften sichert, wurde nicht untersucht. Deshalb ist es v.a. bei sekundärem Hypogonadismus und bei Kinderwunsch beliebt.',
    benefits: [
      'Hebt das EIGENE Testosteron – ohne Spritze, als Tablette.',
      'Erhält die Spermienkonzentration (im Gegensatz zur klassischen TRT); Daten zu Schwangerschaftsraten fehlen.',
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
    short: 'Der oberste Schalter der Hormonachse: ein körpereigenes Peptid, das im Hypothalamus die GnRH-Ausschüttung auslöst. Beim Menschen hebt es LH und Testosteron und veränderte in zwei doppelblinden Studien die Verarbeitung sexueller Reize – zur wiederholten Selbstanwendung gibt es keine Daten.',
    moa: 'Kisspeptin ist ein natürliches Neuropeptid und der zentrale Startknopf der Fortpflanzungsachse: Es stimuliert im Hypothalamus die Ausschüttung von GnRH, was wiederum LH und FSH aus der Hypophyse freisetzt und so die körpereigene Testosteron- bzw. Sexualhormonproduktion anregt. Weil es an der obersten Stelle der Kaskade wirkt, gilt es als besonders „physiologischer" Ansatz. Untersucht wird es u.a. für Libido, Fruchtbarkeit und als Baustein aggressiver Hormon-Restart-Protokolle (Kisspeptin für den Hypothalamus, Gonadorelin für die Hypophyse, hCG für die Hoden).',
    benefits: [
      'Setzt ganz oben an der Hormonachse an – erhöht beim Menschen LH, FSH und Testosteron, weniger stark als GnRH.',
      'In zwei doppelblinden Studien (Männer und Frauen mit vermindertem sexuellem Verlangen) veränderte eine einmalige Infusion die Hirnverarbeitung sexueller Reize; bei Männern stärkere Erektion als unter Placebo.',
      'Wird als physiologischerer Auslöser der Eizellreifung bei künstlicher Befruchtung erforscht.',
      'In kurzen Studien gut verträglich, ohne Wirkung auf Angst, Blutdruck oder Puls.'
    ],
    risks: [
      'Investigativ – nicht zugelassen; Libido-Studien nur mit einmaliger Infusion von Kisspeptin-54, nicht mit wiederholten Kisspeptin-10-Injektionen.',
      'Dauerreizung kann die Achse abstumpfen: Bei 5 Tagen Dauerinfusion fielen LH und FSH auf Placeboniveau; stabile Analoga senkten bei Ratten das Testosteron auf Kastrationsniveau.',
      'Keine Studien zum Einsatz rund um eine Testosterontherapie oder zum Hormon-Restart; keine Langzeitdaten.',
      'Nicht als Arzneimittel zugelassen; Research-Ware auf Reinheit achten; bei Männern im Sport jederzeit verboten (WADA-Liste 2026, S2.2.1).',
      'Hormonelle Eingriffe gehören ärztlich begleitet.'
    ],
    status: 'Forschungssubstanz; nicht als Arzneimittel für die Hormonoptimierung zugelassen. In den USA führt die FDA Kisspeptin-10 seit September 2023 in Kategorie 2 der Ausgangsstoffe für Rezepturarzneien, also unter den Substanzen mit möglichen erheblichen Sicherheitsrisiken. Ein Expertengremium der FDA stimmte im Oktober 2024 gegen die Aufnahme von Kisspeptin-10 in die Liste der für Rezepturarzneien erlaubten Stoffe.',
    sources: [
      { title: 'Mills EG et al., JAMA Netw Open 2023 – Kisspeptin bei Männern mit vermindertem sexuellem Verlangen', url: 'https://pubmed.ncbi.nlm.nih.gov/36735255/' },
      { title: 'Thurston L et al., JAMA Netw Open 2022 – Kisspeptin bei Frauen mit vermindertem sexuellem Verlangen', url: 'https://pubmed.ncbi.nlm.nih.gov/36287566/' },
      { title: 'Yeung AC et al., Eur J Endocrinol 2026 – Kisspeptin-10 über 12 Tage bei gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/42549827/' },
      { title: 'Jayasena CN et al., Hum Reprod 2015 – Kisspeptin-10, -54 und GnRH im Vergleich', url: 'https://pubmed.ncbi.nlm.nih.gov/26089302/' },
      { title: 'Cretu AM et al., Front Reprod Health 2026 – Peptid-Strategien unter Testosterontherapie', url: 'https://pubmed.ncbi.nlm.nih.gov/42666625/' },
      { title: 'FDA – Bulk Drug Substances mit möglichen erheblichen Sicherheitsrisiken (Kategorie 2), Kisspeptin-10', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' },
      { title: 'FDA – Sitzung des Pharmacy Compounding Advisory Committee vom 29.10.2024 (u. a. Kisspeptin-10)', url: 'https://www.fda.gov/advisory-committees/advisory-committee-calendar/october-29-2024-meeting-pharmacy-compounding-advisory-committee-10292024' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'gonadorelin',
    name: 'Gonadorelin',
    altNames: 'GnRH, LHRH, Gonadorelin-Acetat',
    class: 'Synthetisches GnRH (strukturgleich mit dem körpereigenen Gonadotropin-Releasing-Hormon, 10 Aminosäuren)',
    emoji: '🧬',
    short: 'Das körpereigene Startsignal der Hormonachse, synthetisch nachgebaut: regt die Hypophyse zur Ausschüttung von LH und FSH an – aber nur im Pulsrhythmus. In Deutschland als Diagnostikum und zur Pumpentherapie zugelassen; als Begleitmittel zur Testosterontherapie nicht untersucht.',
    moa: 'Gonadorelin ist strukturgleich mit dem körpereigenen GnRH und wirkt eine Ebene tiefer als Kisspeptin: Es stimuliert die Hypophyse, LH und FSH auszuschütten, die beim Mann Testosteron- und Spermienbildung anregen. Entscheidend ist der Rhythmus: Natürlich wird GnRH in etwa einminütigen Pulsen alle 60 bis 120 Minuten freigesetzt, die Halbwertszeit liegt unter 10 Minuten. Pulse regen die Achse an, Dauergabe oder zu häufige hohe Gaben hemmen sie (paradoxe Antifertilitätswirkung). Therapeutisch wird es deshalb per Pumpe gegeben. In der Szene wird es als hCG-Alternative unter Testosterontherapie genutzt – für diesen Einsatz gibt es keine kontrollierten Studien.',
    benefits: [
      'Seit Jahrzehnten zugelassenes Diagnostikum; Wirkung und Nebenwirkungen gut dokumentiert',
      'Als Pumpentherapie bei angeborenem GnRH-Mangel: Testosteronbildung, Hodenwachstum und Spermien',
      'Spermienbildung unter Pumpe im Mittel 5,30 Monate früher als unter Gonadotropinen, gleiche Schwangerschaftsrate (Meta-Analyse, 420 Patienten)',
      'Setzt eine Stufe über hCG an und nutzt die eigene LH-/FSH-Ausschüttung'
    ],
    risks: [
      'Wirkt nur pulsatil – Dauergabe oder zu häufige hohe Gaben hemmen die Achse (Gegenteil des Effekts)',
      'Als Begleitmittel zur Testosterontherapie nicht untersucht; für hCG gibt es dazu Studien, für Gonadorelin nicht',
      'Kopfschmerzen, Bauchschmerzen, Übelkeit, Reaktionen an der Einstichstelle; selten allergische Reaktionen',
      'Verschreibungspflichtig; in der Schwangerschaft kontraindiziert; Hormonprotokolle ärztlich begleiten',
      'Bei Männern im Sport jederzeit verboten (WADA-Liste 2026, S2.2.1)'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig (Diagnostikum, pulsatile Therapie bei GnRH-Mangel). Die Nutzung als TRT-Begleitmittel ist eine nicht zugelassene Anwendung.',
    sources: [
      { title: 'Fachinformation LHRH Ferring 0,1 mg/1 ml (Stand 09/2014)', url: 'https://www.fachinfo.de/fi/pdf/004568/lhrh-ferring-0-1-mg-1-ml-injektionsloesung' },
      { title: 'Belchetz PE et al., Science 1978 – pulsatile gegen Dauergabe von GnRH', url: 'https://pubmed.ncbi.nlm.nih.gov/100883/' },
      { title: 'Wei C et al., World J Mens Health 2021 – Meta-Analyse Pumpe gegen Gonadotropine', url: 'https://pubmed.ncbi.nlm.nih.gov/32777865/' },
      { title: 'Mao JF et al., Asian J Androl 2017 – Pumpe gegen Gonadotropine, 202 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/28051040/' },
      { title: 'Cretu AM et al., Front Reprod Health 2026 – Peptid-Strategien unter Testosterontherapie', url: 'https://pubmed.ncbi.nlm.nih.gov/42666625/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'hcg',
    name: 'hCG (humanes Choriongonadotropin)',
    altNames: 'Human Chorionic Gonadotropin, Pregnyl, Ovitrelle',
    class: 'Gonadotropin (LH-Mimetikum)',
    emoji: '🧬',
    short: 'Der bewährte Klassiker zum Hodenerhalt: hCG ahmt LH nach und regt die Hoden direkt zur Testosteron- und Spermienproduktion an – beim Fruchtbarkeitserhalt unter TRT verbreitet, aber meist off label. Zum Abnehmen ist hCG seit Jahrzehnten widerlegt.',
    moa: 'hCG bindet an den LH-Rezeptor der Hoden und imitiert so das luteinisierende Hormon (LH). Dadurch produzieren die Hoden weiter eigenes Testosteron und Spermien – auch dann, wenn die körpereigene LH-Ausschüttung (z.B. unter TRT) unterdrückt ist. Deshalb wird hCG unter Testosterontherapie eingesetzt, um Hodenfunktion und Spermienbildung zu stützen, meist off label, oder um eine unterdrückte Achse wieder anzustoßen. Ob das die Fruchtbarkeit verlässlich erhält, ist nicht in kontrollierten Studien geprüft.',
    benefits: [
      'Hält unter Testosteron das Testosteron im Hoden im Normalbereich (Coviello 2005, randomisiert, 29 gesunde Männer, 3 Wochen); in einer retrospektiven Auswertung wurde keiner von 26 Männern unter TRT plus hCG azoosperm (Hsieh 2013). Kontrollierte Daten zur Fruchtbarkeit fehlen.',
      'Bewährter, gut verstandener Klassiker',
      'Regt die eigene Testosteron-/Spermienproduktion an',
      'Auch in der Fruchtbarkeitsmedizin etabliert'
    ],
    risks: [
      'Verschreibungspflichtig; Hormonprotokolle ärztlich begleiten',
      'Kann Östrogen anheben (Aromatisierung) – ggf. Kontrolle nötig',
      'Im Sport bei Männern jederzeit verboten (WADA 2026, S2.2.1)',
      'Bei Dauergabe mögliche Desensibilisierung der Hoden',
      'Graumarkt-Ware auf Reinheit/Sterilität achten'
    ],
    status: 'Als Arzneimittel zugelassen (Fruchtbarkeit); die TRT-Begleitnutzung ist off-label. Verschreibungspflichtig. Im Sport bei Männern jederzeit verboten (WADA 2026, S2.2.1).',
    sources: [
      { title: 'Coviello AD et al., J Clin Endocrinol Metab 2005 – niedrig dosiertes hCG erhält Testosteron im Hoden unter Testosteron (RCT, 29 Männer)', url: 'https://pubmed.ncbi.nlm.nih.gov/15713727/' },
      { title: 'Hsieh TC et al., J Urol 2013 – TRT plus hCG, 26 Männer, keine Azoospermie (retrospektiv)', url: 'https://pubmed.ncbi.nlm.nih.gov/23260550/' },
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
    short: 'Der GH-Klassiker: ein kurzes GHRH-Fragment, das die Hirnanhangsdrüse zu Wachstumshormon-Pulsen anregt. Für gesunde Erwachsene war Sermorelin nie zugelassen. Es gibt nur wenige kleine, kurze Studien an Älteren aus den 1990er-Jahren mit uneinheitlichen Ergebnissen, aber nichts Belastbares.',
    moa: 'Sermorelin entspricht den ersten 29 Aminosäuren des GHRH und stimuliert die Hypophyse zur pulsatilen Ausschüttung von Wachstumshormon (GH). Weil die körpereigene Rückkopplung (Somatostatin) erhalten bleibt, gilt es als besonders physiologischer Ansatz und milder als langwirksame Analoga. Historisch als Diagnostikum genutzt, in der Anti-Aging-Szene für Schlaf, Regeneration und Körperkomposition.',
    benefits: [
      'Regt die körpereigene, pulsatile GH-Ausschüttung an; die Rückkopplung bleibt erhalten.',
      'Früher zugelassen für Kinder mit GH-Mangel (Therapie) und zur Diagnostik.'
    ],
    risks: [
      'Für gesunde Erwachsene keine belastbaren Nutzendaten.',
      'Im Sport verboten.',
      'Graumarkt-Ware ohne pharmazeutische Qualitätsprüfung.'
    ],
    status: 'Früher als Arzneimittel/Diagnostikum; heute überwiegend Compounding/Research. In DE nicht breit zugelassen.',
    sources: [
      { title: 'Prakash & Goa, BioDrugs 1999 – Sermorelin in Diagnostik und Therapie bei Kindern mit GH-Mangel', url: 'https://pubmed.ncbi.nlm.nih.gov/18031173/' },
      { title: 'Sigalos & Pastuszak, Sex Med Rev 2018 – Sicherheit und Wirksamkeit von GH-Sekretagoga', url: 'https://pubmed.ncbi.nlm.nih.gov/28400207/' },
      { title: 'Vittone J et al., Metabolism 1997 – Sermorelin bei 11 gesunden älteren Männern, 6 Wochen, ohne Kontrollgruppe', url: 'https://pubmed.ncbi.nlm.nih.gov/9005976/' }
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
      'Keine abgeschlossene klinische Studie, in der Menschen MOTS-c erhalten haben; keine systematischen Sicherheitsdaten. Eine placebokontrollierte Phase-2a-Studie mit 120 geplanten Teilnehmern rekrutiert seit Februar 2026 (NCT07505745).',
      'Verstärkt im Tier die Insulinwirkung – Kombination mit Blutzuckersenkern ist nicht untersucht.',
      'Seit 2024 namentlich auf der WADA-Liste (S4.4.1 AMPK-Aktivatoren), jederzeit verboten.',
      'Research-Ware ohne Qualitätskontrolle.'
    ],
    status: 'Forschungs-Peptid, in DE/EU und den USA nicht zugelassen. Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob MOTS-c für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen 7:5, 2 Enthaltungen). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen.',
    sources: [
      { title: 'Lee C et al., Cell Metab 2015 – MOTS-c discovery & function', url: 'https://pubmed.ncbi.nlm.nih.gov/25738459/' },
      { title: 'Reynolds JC et al., Nat Commun 2021 – MOTS-c & exercise', url: 'https://www.nature.com/articles/s41467-020-20790-0' },
      { title: 'ClinicalTrials.gov NCT07505745 – Phase-2a-Studie MOTS-MET bei Prädiabetes, rekrutiert seit 02.02.2026', url: 'https://clinicaltrials.gov/study/NCT07505745' },
      { title: 'McDermott (Kanzlei), Bericht zur Sitzung des FDA-Gremiums für Rezepturarzneien am 23./24.07.2026', url: 'https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/' }
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
    moa: 'Synthetisches Tetrapeptid (Ala-Glu-Asp-Gly, ~390 g/mol), abgeleitet aus dem Zirbeldrüsen-Extrakt Epithalamin. Hauptmechanismus ist die Induktion der hTERT-Genexpression (katalytische Telomerase-Untereinheit), wodurch Telomere in somatischen Zellen verlängert und die replikative Zellalterung verzögert werden (in Zellkultur über das Hayflick-Limit hinaus). Parallel hemmt es den p53/p21- und NF-κB-Weg und dämpft so die seneszenz-assoziierte Entzündung. Als zweiten Mechanismus stimuliert Epitalon die Zirbeldrüse zur Melatoninbildung und stabilisiert den Tag-Nacht-Rhythmus. Am Menschen wurde Epitalon selbst nicht untersucht; die Humandaten betreffen den Zirbeldrüsenextrakt Epithalamin und stammen aus einer einzelnen russischen Forschungsgruppe (Khavinson), ohne unabhängige Wiederholung.',
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
    status: 'Forschungspeptid; in Deutschland und der EU nicht als Arzneimittel zugelassen. USA: Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob Epitalon für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen 7:4, 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen.',
    sources: [
      { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epithalon induziert Telomerase und Telomerverlängerung', url: 'https://pubmed.ncbi.nlm.nih.gov/12937682/' },
      { title: 'Anisimov VN et al., Biogerontology 2003 – Lebensdauer und Tumoren bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/14501183/' },
      { title: 'Al-Dulaimi S et al., Biogerontology 2025 – unabhängige Replikation in menschlichen Zelllinien', url: 'https://pubmed.ncbi.nlm.nih.gov/40908429/' },
      { title: 'Korkushko OV et al., Bull Exp Biol Med 2006 – Epithalamin (Zirbeldrüsenextrakt), nicht Epitalon: 12 Jahre bei älteren Herzpatienten', url: 'https://pubmed.ncbi.nlm.nih.gov/17426848/' },
      { title: 'McDermott Will & Schulte 2026 – FDA-Expertengremium (PCAC) 23./24.07.2026, Abstimmung zu Peptiden', url: 'https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/' }
    ],
    community: [
      { title: 'Peptide Therapies – inkl. Epitalon', url: 'https://www.youtube.com/watch?v=MZmVl7IB3bA' },
      { title: 'biolabshop (Suche „Epitalon")', url: 'https://biolabshop.de/' },
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    podcasts: [
      { title: 'Epitalon: Telomer-Verlängerung als Anti-Aging im Faktencheck', audio: 'audio/epitalon-podcast.mp3', spotify: '3fwqZGKZCED0D8iimUNcnm', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 24) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche zur verlockenden Telomerase-/Telomer-Story: auf Zellebene gibt es Daten (inkl. unabhängiger Replikation 2025), beim Menschen fehlt der belastbare Beweis fast völlig (kleine, unverblindete russische Studien). Plus die offene Krebsfrage bei einem Telomerase-Aktivator und der Melatonin-/Schlaf-Bezug. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Khavinson VK et al., Bull Exp Biol Med 2003 – Epitalon & Telomerlänge', url: 'https://pubmed.ncbi.nlm.nih.gov/12937682/' },
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
    status: 'In Russland registriert; in DE/EU nicht zugelassen. Russland: registriert per Erlass Nr. 294 vom 20.12.1994 als Nasentropfen, eine stärkere Form seit 2001; laut Hersteller auf der Liste lebenswichtiger Arzneimittel. USA: Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob Semax für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen 8:5, 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen. Sport: Im Sport ist der Status unklar. Eine Übersicht von 2025 ordnet Semax wegen seiner Ähnlichkeit mit dem verbotenen ACTH-Analogon Tetracosactid (WADA-Klasse S2) als möglicherweise verboten ein.',
    sources: [
      { title: 'Dmitrieva et al., Cell Mol Neurobiol 2010 – Semax aktiviert Neurotrophin-Gene im Rattenhirn nach Ischämie (Tierversuch)', url: 'https://pubmed.ncbi.nlm.nih.gov/19633950/' },
      { title: 'Gusev et al., Zh Nevrol Psikhiatr 1997 – Semax in der Akutphase des ischämischen Schlaganfalls', url: 'https://pubmed.ncbi.nlm.nih.gov/11517472/' },
      { title: 'Gusev et al., Zh Nevrol Psikhiatr 2005 – Semax bei chronischer Minderdurchblutung des Gehirns, 187 Patienten, ohne Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/15792140/' },
      { title: 'McDermott (Kanzlei), Bericht zur Sitzung des FDA-Gremiums für Rezepturarzneien am 23./24.07.2026', url: 'https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/' },
      { title: 'FDA, Briefing zum Pharmacy Compounding Advisory Committee 2026 – Bewertung von Semax', url: 'https://www.fda.gov/media/193348/download' },
      { title: 'Lebedeva et al., Bull Exp Biol Med 2018 – fMRT nach Semax gegen Placebo bei 24 Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/30225715/' },
      { title: 'Magrì et al., J Inorg Biochem 2016 – Acetylierung hebt Zellschutz vor Kupfertoxizität auf', url: 'https://pubmed.ncbi.nlm.nih.gov/27586814/' }
    ],
    community: [
    ],
    podcasts: [
      {
        title: 'Semax: Russisches Nootropikum im Faktencheck',
        audio: 'audio/semax-podcast.mp3',
        spotify: '4pI0U5nmVsezSLZIvy74iw',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 11) · mit Paul & Paula. Frische, positive KI-Dialogfolge über Semax, das russische Nootropikum-Peptid: ein ACTH-Fragment ohne Hormonwirkung, das im Tierversuch BDNF und NGF anhebt. Ob daraus Fokus oder Stimmung folgen, ist am Menschen nicht belegt. In Russland zugelassen (u. a. beim Schlaganfall, Gusev et al. 2018, nicht randomisiert), über die Nase angewendet, gern mit Selank kombiniert. Eine systematische Erfassung von Nebenwirkungen fehlt. Ehrlicher Rahmen: Evidenz überwiegend russisch, bei uns Graumarkt. Reine Information, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Dmitrieva et al., Cell Mol Neurobiol 2010 – Semax aktiviert Neurotrophin-Gene im Rattenhirn nach Ischämie (Tierversuch)', url: 'https://pubmed.ncbi.nlm.nih.gov/19633950/' },
          { title: 'Gusev et al., Zh Nevrol Psikhiatr 2018 – Semax in verschiedenen Phasen des ischämischen Schlaganfalls', url: 'https://pubmed.ncbi.nlm.nih.gov/29798983/' }
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
      { title: 'Szeto, Br J Pharmacol 2014 – Mitochondrial gerichtete Peptide und Wirkmechanismus von SS-31', url: 'https://pubmed.ncbi.nlm.nih.gov/24117165/' },
      { title: 'Reid Thompson et al., Genet Med 2021 – Elamipretide beim Barth-Syndrom (klinische Studie)', url: 'https://pubmed.ncbi.nlm.nih.gov/33077895/' }
    ],
    community: [
    ],
    podcasts: [
      {
        title: 'SS-31: Das FDA-zugelassene Mitochondrien-Peptid – im Faktencheck',
        audio: 'audio/ss-31-podcast.mp3',
        spotify: '5cmnTVvn29gYiC0UDdyN0A',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 26) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche. Der ehrliche Kern: SS-31 (Elamipretide/FORZINITY) bekam im September 2025 tatsächlich eine FDA-Zulassung – die erste für eine Mitochondrien-Krankheit überhaupt, aber nur für das seltene Barth-Syndrom, NICHT für Anti-Aging/Energie bei Gesunden. Bei Herzschwäche gemischte Bilanz (Hauptendpunkte verfehlt), Longevity-Einsatz unbewiesen, und die Szene verwendet Mengen, die mit den Studien nicht vergleichbar sind. Graumarkt-Ampulle ≠ zugelassenes Medikament. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Szeto, Br J Pharmacol 2014 – Wirkmechanismus von SS-31 (Cardiolipin)', url: 'https://pubmed.ncbi.nlm.nih.gov/24117165/' },
          { title: 'FDA, Drugs@FDA NDA 215244 – beschleunigte Zulassung von Elamipretid (Forzinity) 2025 für das Barth-Syndrom', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=215244' }
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
      'Mehr Ausdauer ohne Training im Tierversuch: Nach einer einzigen Gabe liefen Mäuse rund 70 % länger und 45 % weiter (Billon 2023, 6 Tiere je Gruppe).',
      'Wirkweg im Tier genetisch abgesichert: Ohne ERRα im Muskel blieb der Ausdauergewinn aus (Billon 2023).',
      'Mehr oxidative Muskelfasern vom Typ IIa und mehr Mitochondrien-DNA im Mausmuskel (Billon 2023).',
      'Übergewichtige Mäuse wogen nach 28 Tagen rund 12 % weniger, setzten kaum Fett an und wurden insulinempfindlicher, bei gleicher Futteraufnahme (Billon 2024).',
      'Diskutiertes Potenzial bei Herzschwäche, Nierenalterung, Muskelschwund und Stoffwechselerkrankungen – bisher nur Tier- und Zelldaten (Xu 2024, Wang 2023, Bonanni 2025).'
    ],
    risks: [
      'Keine Humanstudien und keine Sicherheitsdaten am Menschen; im Tier nur Kurzzeitdaten.',
      'Laut den Entwicklern nicht oral bioverfügbar – für Tabletten fehlt die Grundlage (Billon 2026).',
      'Research-Ware ohne pharmazeutische Qualitätskontrolle; Reinheit und Gehalt unklar.',
      'Im Sport jederzeit verboten (WADA-Liste 2026, Klasse S0).'
    ],
    status: 'Frühe präklinische Forschung, keine klinischen Studien publiziert; nirgends als Arzneimittel zugelassen, als Research-Chemical verkauft. Im Sport fällt es als nicht zugelassene Substanz unter die Klasse S0 der WADA-Liste 2026 (jederzeit verboten).',
    sources: [
      { title: 'Billon C et al., ACS Chem Biol 2023 – SLU-PP-332 steigert Ausdauer bei Mäusen, ERRα-abhängig', url: 'https://pubmed.ncbi.nlm.nih.gov/36988910/' },
      { title: 'Billon C et al., J Pharmacol Exp Ther 2024 – SLU-PP-332 bei Übergewicht und metabolischem Syndrom (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/37739806/' },
      { title: 'Xu W et al., Circulation 2024 – ERR-Agonisten im Mausmodell der Herzschwäche', url: 'https://pubmed.ncbi.nlm.nih.gov/37961903/' },
      { title: 'Billon C et al., J Pharmacol Exp Ther 2026 – SLU-PP-915; SLU-PP-332 nicht oral bioverfügbar', url: 'https://pubmed.ncbi.nlm.nih.gov/41421047/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' },
      { title: 'biolabshop (Suche „SLU-PP-332")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'KI-Podcast: SLU-PP-332 – „Sport in der Spritze"?', audio: 'audio/slu-pp-332-podcast.mp3', spotify: '78sborgd6xvQKQVOI9Qu8m', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 5) · mit Paul & Paula. Frische, positive KI-Dialogfolge über SLU-PP-332, das „Exercise-Mimetikum": ein kleines Molekül, das über die ERR-Schalter die Anpassung an Ausdauertraining nachahmt – mehr Mitochondrien, mehr Fettverbrennung, mehr Ausdauer. Was die Nature-Metabolism-Studie 2024 (Billon et al.) in Mäusen zeigte, die Medizin-Vision „Bewegung in Tablettenform" und der ehrliche Rahmen: bisher nur Tierdaten. Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Peptide of The Week – SLU-PP-332: Fat Burn, Endurance', url: 'https://open.spotify.com/episode/4njZIXekQ9KgMLJsKBr58I' },
          { title: 'The Hunter Williams Podcast – SLU-PP-332 Dosage Update', url: 'https://open.spotify.com/episode/5lgJO2L08XJnkiTUSSHQnV' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/2sBfi0qEVnQVWEwYox6ouo' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/7pO3L22D0kWQbmnvHXUNLz' },
          { title: 'Weitere Folge', url: 'https://open.spotify.com/episode/6OJ4FMAtEx8jau6nKmrf6y' }
        ] }
    ],
    filterCat: 'Exercise'
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
    altNames: 'Zenagamtide, GLP-1/Amylin-Doppelagonist (Novo Nordisk)',
    class: 'GLP-1- und Amylin-Rezeptor-Agonist in einem Molekül',
    emoji: '💉',
    short: 'Der nächste große Abnehm-Kandidat von Novo Nordisk: GLP-1 und Amylin in einem einzigen Molekül, als Spritze und als Tablette. In frühen Studien bis zu 24,3 Prozent Gewichtsabnahme nach 36 Wochen. Unter dem neuen Wirkstoffnamen Zenagamtide rekrutieren seit August 2026 die Phase-3-Studien.',
    moa: 'Amycretin aktiviert gleichzeitig den GLP-1-Rezeptor (Sättigung, Insulin, verzögerte Magenentleerung) und den Amylin-Rezeptor (Sättigung über den Hirnstamm, Ende der Mahlzeit); im Labor auch den Calcitonin-Rezeptor. Zwei Sättigungssysteme in einem Molekül – ähnlich der Idee hinter CagriSema, aber vereint. Entwickelt werden eine Wochenspritze und eine Tablette; in placebokontrollierten Frühstudien zeigten beide deutliche Gewichtsabnahmen, die in Phase 3 bestätigt werden sollen.',
    benefits: [
      'Doppelmechanismus (GLP-1 + Amylin) in einem Molekül; in einer Netzwerk-Metaanalyse größter Placebo-Unterschied aller Amylin-basierten Therapien (indirekter Vergleich, niedrige Vertrauenswürdigkeit).',
      'Spritze: bis zu 24,3 % Gewichtsabnahme nach 36 Wochen in einer placebokontrollierten Lancet-Studie (125 Teilnehmer).',
      'Tablette: bis zu 13,1 % Gewichtsabnahme nach 12 Wochen in der ersten Studie am Menschen.',
      'Bei Typ-2-Diabetes laut Firmenmitteilung bis zu 14,5 % Gewichtsabnahme und bis zu 1,8 Prozentpunkte weniger HbA1c (Phase 2, 448 Teilnehmer).'
    ],
    risks: [
      'Prüfpräparat, nicht zugelassen und nicht regulär verfügbar; Phase-3-Studien laufen seit August 2026, Ergebnisse stehen aus.',
      'Häufig Übelkeit, Erbrechen und andere Magen-Darm-Beschwerden, v. a. in der Aufdosierung; ein Fall einer Gallenstein-Pankreatitis.',
      'Langzeitdaten fehlen (max. 36 Wochen); am Graumarkt gehandelte Ware ist nicht das Originalmolekül.'
    ],
    status: 'Prüfpräparat (Novo Nordisk), nicht zugelassen; der Wirkstoff heißt inzwischen Zenagamtide. Phase-3-Studien rekrutieren seit August und September 2026: bei Übergewicht AMAZE 9 (Tablette gegen Placebo, NCT07720271) und AMAZE 7 (Spritze im Vergleich mit Semaglutid, NCT07668414), bei Typ-2-Diabetes AMBITION 7 (Spritze im Vergleich mit Insulin glargin, NCT07797335). Ergebnisse liegen noch nicht vor.',
    sources: [
      { title: 'Dahl K et al., Lancet 2025 – Amycretin subkutan, Phase 1b/2a', url: 'https://pubmed.ncbi.nlm.nih.gov/40550231/' },
      { title: 'Gasiorek A et al., Lancet 2025 – Amycretin oral, Phase 1', url: 'https://pubmed.ncbi.nlm.nih.gov/40550229/' },
      { title: 'Novo Nordisk – Phase 2 bei Typ-2-Diabetes (Unternehmensmitteilung 25.11.2025)', url: 'https://www.globenewswire.com/news-release/2025/11/25/3194155/0/en/Novo-Nordisk-phase-2-trial-with-amycretin-reports-significant-weight-loss-and-HbA1c-reduction-in-type-2-diabetes.html' },
      { title: 'ClinicalTrials.gov NCT07720271 – AMAZE 9, Zenagamtide-Tablette bei Übergewicht, Phase 3', url: 'https://clinicaltrials.gov/study/NCT07720271' },
      { title: 'ClinicalTrials.gov NCT07668414 – AMAZE 7, Zenagamtide im Vergleich mit Semaglutid, Phase 3', url: 'https://clinicaltrials.gov/study/NCT07668414' },
      { title: 'ClinicalTrials.gov NCT07797335 – AMBITION 7, Zenagamtide bei Typ-2-Diabetes im Vergleich mit Insulin glargin, Phase 3', url: 'https://clinicaltrials.gov/study/NCT07797335' }
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
    short: 'Doppelagonist von Boehringer Ingelheim: GLP-1 plus Glukagon. In Phase 3 über 76 Wochen 12,2 bis 13,0 Prozent Gewichtsabnahme gegenüber 5,4 Prozent unter Placebo, dazu die stärksten Fettleber-Daten der Klasse – aber Magen-Darm-Beschwerden bei bis zu 89,7 Prozent.',
    moa: 'Survodutide aktiviert den GLP-1-Rezeptor (Sättigung, Insulin) und den Glukagonrezeptor (direkte Wirkung in der Leber). Diese Kombination senkt nicht nur das Gewicht, sondern adressiert gezielt Leberfett und -entzündung – daher der starke MASH-Fokus. Eine Mediationsanalyse der Phase-2-MASH-Studie (170 Teilnehmer) zeigt, dass die Wirkung auf Fibrose und Entzündung überwiegend NICHT über die Gewichtsabnahme vermittelt ist (36,3 Prozent für die Fibrose-Verbesserung), der Leberfettabbau dagegen weitgehend schon. Ein höherer Energieverbrauch ist für Survodutide am Menschen nicht belegt. Aktuell in Phase 3 für Adipositas und Lebererkrankung.',
    benefits: [
      'Phase 3 SYNCHRONIZE-1 (725 Teilnehmer, 76 Wochen): 12,2 und 13,0 Prozent Gewichtsabnahme gegenüber 5,4 Prozent unter Placebo, beide primären Endpunkte erreicht.',
      'Phase 3 SYNCHRONIZE-MASLD (216 Teilnehmer, 48 Wochen): mindestens 30 Prozent weniger Leberfett bei 84,2 Prozent gegenüber 24,3 Prozent unter Placebo.',
      'Wirkung auf Entzündung und Fibrose der Leber überwiegend unabhängig von der Gewichtsabnahme – Hinweis auf eine eigenständige Glukagon-Wirkung in der Leber.',
      'Besserer Blutdruck, bessere Marker für Betazellfunktion und Insulinempfindlichkeit; nur 1× wöchentlich.'
    ],
    risks: [
      'Noch in Phase 3 – nicht zugelassen, nicht regulär verfügbar.',
      'Verträglichkeit als Schwachpunkt: Magen-Darm-Beschwerden bei 80,9 und 89,7 Prozent gegenüber 47,9 Prozent unter Placebo; in der Phase-2-Studie beendeten nur 60,4 Prozent die 46 Wochen (in beiden Armen ähnlich).',
      'Herz-Kreislauf-Studie mit 5531 Teilnehmern abgeschlossen, Ergebnisse aber nicht veröffentlicht; klassentypisch höhere Herzfrequenz.',
      'Kein publizierter direkter Vergleich mit Semaglutid oder Tirzepatid; Graumarkt-Ware ungeprüft.'
    ],
    status: 'Phase 3 (Boehringer Ingelheim). Studien zu Adipositas und Fettleber abgeschlossen, Leber-Endpunktstudien laufend. Noch nicht zugelassen.',
    sources: [
      { title: 'le Roux CW et al., N Engl J Med 2026 – SYNCHRONIZE-1', url: 'https://pubmed.ncbi.nlm.nih.gov/42253238/' },
      { title: 'Kaplan LM et al., Nat Med 2026 – SYNCHRONIZE-MASLD', url: 'https://pubmed.ncbi.nlm.nih.gov/42252333/' },
      { title: 'le Roux CW et al., Lancet Diabetes Endocrinol 2024 – Phase-2-Dosisfindung', url: 'https://pubmed.ncbi.nlm.nih.gov/38330987/' },
      { title: 'Noureddin M et al., Hepatology 2026 – Mediationsanalyse zur Leberwirkung', url: 'https://pubmed.ncbi.nlm.nih.gov/42545725/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'maritide',
    name: 'MariTide (Maridebart Cafraglutide)',
    altNames: 'AMG 133',
    class: 'GIP-Rezeptor-Antagonist + GLP-1-Agonist (Peptid-Antikörper-Konjugat)',
    emoji: '💉',
    short: 'Amgens Kandidat mit ungewöhnlichem Ansatz: GLP-1-Agonist plus GIP-BLOCKADE, nur einmal im Monat gespritzt. In Phase 2 über 52 Wochen 12,3 bis 16,2 Prozent Gewichtsabnahme gegenüber 2,5 Prozent unter Placebo – Phase 3 läuft.',
    moa: 'MariTide ist ein Peptid-Antikörper-Konjugat: An einen monoklonalen Antikörper sind Peptide gekoppelt, die den GLP-1-Rezeptor aktivieren und den GIP-Rezeptor BLOCKIEREN – das Gegenteil von Tirzepatid, mit ebenfalls starkem Gewichtsverlust. Die Kopplung an den Antikörper verlängert die Wirkdauer, daher eine Injektion pro Monat (in einer Studiengruppe alle 8 Wochen). Warum sowohl Blockade als auch Aktivierung des GIP-Rezeptors günstig wirken, ist unbekannt; für die Blockade sprechen Mäuse ohne GIP-Rezeptor, humangenetische Daten (weniger aktive Varianten, niedrigerer BMI) und Tierversuche.',
    benefits: [
      'Nur 1× MONATLICH statt wöchentlich – deutlich seltenere Injektion, in einer Studiengruppe sogar alle 8 Wochen.',
      'Phase 2 (592 Teilnehmer, 52 Wochen): 12,3 bis 16,2 Prozent Gewichtsabnahme ohne Diabetes gegenüber 2,5 Prozent unter Placebo; primärer Endpunkt erreicht.',
      'Mindestens 15 Prozent Abnahme bei 45,5 bis 62,3 Prozent der Behandelten (Placebo 2,6 Prozent), mindestens 20 Prozent bei 23,4 bis 38,5 Prozent (Placebo 0).',
      'Bei Typ-2-Diabetes HbA1c minus 1,2 bis 1,6 Prozentpunkte gegenüber plus 0,1 unter Placebo.',
      'Neuartiger Mechanismus (GLP-1-Agonismus plus GIP-Antagonismus), über Tiermodelle und Humangenetik begründet.'
    ],
    risks: [
      'Noch in klinischer Prüfung (Phase 3) – nicht zugelassen, außerhalb von Studien nicht erhältlich.',
      'Klassentypische Magen-Darm-Effekte, häufig; seltener bei langsamer Aufdosierung und niedrigerer Startdosis.',
      'Deutlicher Verlust an fettfreier Masse (per DXA gemessen; umfasst Muskeln, aber auch Wasser und Organe): 8,6 bis 11,6 Prozent gegenüber 2,1 Prozent unter Placebo.',
      'Langzeitsicherheit offen (längste publizierte Behandlungsdauer 52 Wochen; Daten aus dem zweiten Jahr bisher nur als Herstellerangabe), keine Daten zu Herz-Kreislauf-Ereignissen, kein direkter Vergleich mit Semaglutid oder Tirzepatid; am Graumarkt kann das Konjugat nicht echt sein.'
    ],
    status: 'Phase 3 (Amgen), unter anderem kardiovaskuläre Endpunktstudie mit 12.800 geplanten Teilnehmern. Noch nicht zugelassen.',
    sources: [
      { title: 'Jastreboff AM et al., N Engl J Med 2025 – Phase-2-Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/40549887/' },
      { title: 'Clinical Trials Arena, 14.01.2026 – Amgen-Angaben zum zweiten Studienjahr (Herstellerangabe)', url: 'https://www.clinicaltrialsarena.com/news/jpm26-amgen-maritide-obesity-t2d-phase-ii/' },
      { title: 'Bassatne A, Rizo I, Adv Ther 2026 – Übersicht mit Studientabelle', url: 'https://pubmed.ncbi.nlm.nih.gov/41954863/' },
      { title: 'Rosenkilde MM et al., Diabetes 2025 – Begründung der GIP-Rezeptorblockade', url: 'https://pubmed.ncbi.nlm.nih.gov/40521869/' },
      { title: 'ClinicalTrials.gov NCT07037433 – kardiovaskuläre Endpunktstudie', url: 'https://clinicaltrials.gov/study/NCT07037433' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'mazdutide',
    name: 'Mazdutide',
    altNames: 'IBI362, LY3305677',
    class: 'GLP-1 / Glucagon Dual-Agonist',
    emoji: '💉',
    short: 'GLP-1/Glukagon-Doppelagonist, in China seit Juni 2025 zur Gewichtskontrolle und seit September 2025 bei Typ-2-Diabetes zugelassen. In Phase 3 bis 16,65 Prozent Gewichtsabnahme nach 60 Wochen – in Deutschland nicht zugelassen.',
    moa: 'Mazdutide ist ein von Oxyntomodulin abgeleiteter Doppelagonist an GLP-1- und Glukagonrezeptoren. GLP-1 zügelt den Appetit, verbessert die Insulinantwort und verlangsamt die Magenentleerung; die Glukagon-Komponente soll Energie aus der Leber mobilisieren und den Fettabbau dort fördern. Ein höherer Energieverbrauch ist für Mazdutide am Menschen bisher nicht gemessen. In China im Juni 2025 für Adipositas und im September 2025 für Typ-2-Diabetes zugelassen; westliche Zulassungen stehen aus.',
    benefits: [
      'In China zugelassen (Juni 2025 Adipositas, September 2025 Typ-2-Diabetes).',
      'Phase 3 GLORY-1 (610 Teilnehmer): 11,00 bis 14,01 Prozent Gewichtsabnahme nach 48 Wochen; GLORY-2 (461): 16,65 Prozent nach 60 Wochen.',
      'Bei Typ-2-Diabetes besser als Dulaglutid bei HbA1c und Gewicht (DREAMS-2, 731 Teilnehmer).',
      'Günstigere Blutfette, Leberenzyme und Harnsäure (Meta-Analyse, 9 RCTs); wöchentliche Gabe.'
    ],
    risks: [
      'In DE/EU/USA nicht zugelassen; Phase-3-Daten fast ausschließlich aus China.',
      'Sehr häufige Magen-Darm-Effekte (GLORY-2: Erbrechen 53,1 Prozent, Übelkeit 46,9 Prozent); klassentypisch höhere Herzfrequenz.',
      'Keine Daten zu Herz-Kreislauf-Ereignissen, längste Studie 60 Wochen; außerhalb Chinas nur ungeprüfte Graumarkt-Ware.'
    ],
    status: 'In China zugelassen (Innovent/Eli Lilly, Juni 2025 Adipositas, September 2025 Typ-2-Diabetes); in DE/EU nicht zugelassen.',
    sources: [
      { title: 'Ji L et al., N Engl J Med 2025 – GLORY-1', url: 'https://pubmed.ncbi.nlm.nih.gov/40421736/' },
      { title: 'Gao L et al., JAMA 2026 – GLORY-2', url: 'https://pubmed.ncbi.nlm.nih.gov/42251595/' },
      { title: 'Kamrul-Hasan ABM et al., Diabetes Obes Metab 2026 – Meta-Analyse', url: 'https://pubmed.ncbi.nlm.nih.gov/42410325/' },
      { title: 'Shirley M, Drugs 2025 – Mazdutide: First Approval', url: 'https://pubmed.ncbi.nlm.nih.gov/41028652/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Stoffwechsel'
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
    short: 'Die „Muskelbremse lösen": Follistatin und verwandte Stoffe blockieren Myostatin – den körpereigenen Begrenzer des Muskelwachstums. Am Menschen sind drei große Programme gescheitert; erfolgreich war bisher nur der Antikörper Apitegromab bei spinaler Muskelatrophie, mit kleinem Effekt.',
    moa: 'Myostatin ist ein körpereigener Faktor, der das Muskelwachstum bremst. Follistatin bindet und neutralisiert Myostatin (und verwandte Faktoren wie Activin), wodurch die Bremse wegfällt und Muskelmasse zunehmen kann – Tiere mit blockiertem Myostatin zeigen enorme Muskelberge. Verwandte Ansätze (ACE-031, monoklonale Antikörper) zielen auf denselben Signalweg. Beim Menschen ist das überwiegend experimentell; einige Programme wurden wegen Nebenwirkungen gestoppt.',
    benefits: [
      'Kann Muskelmasse steigern – im Tierversuch eindrucksvoll; beim Menschen ein Funktionsgewinn bisher nur bei spinaler Muskelatrophie (Apitegromab, SAPPHIRE: 1,8 Punkte auf einer Motorik-Skala gegenüber Placebo)',
      'Untersucht bei Muskelschwund-Erkrankungen (z.B. Muskeldystrophie)',
      'Wirkt unabhängig von Hormonen/Testosteron'
    ],
    risks: [
      'Hochexperimentell – kaum belastbare Humandaten; Gentherapie-Varianten besonders riskant',
      'Drei Programme gescheitert: ACE-031 (2013 eingestellt, Blutungen und erweiterte Hautgefäße), Domagrozumab (2018, Treppenstufen-Test bei 121 Jungen verfehlt), Bimagrumab (Gehstrecke trotz Muskelzuwachs nicht besser)',
      'Ein vierter Anlauf war erfolgreich, aber bei einer anderen Krankheit: Apitegromab erreichte bei spinaler Muskelatrophie (SAPPHIRE, 188 Teilnehmende) den Hauptendpunkt knapp; in den USA seit 11.09.2026 zugelassen (Isembyld); den europäischen Zulassungsantrag zog der Hersteller im August 2026 wegen Mängeln an einem Herstellungsstandort zurück',
      'Graumarktware: In einer Laboranalyse von 14 gehandelten ACE-031-Produkten enthielten 2 kein passendes Protein und 12 nicht ACE-031, sondern den vollständigen Activin-Rezeptor IIB',
      'Nicht zugelassen, im Sport verboten; Graumarkt-Ware höchst unsicher',
      'Langzeitfolgen völlig unklar'
    ],
    status: 'Follistatin-Peptid und Follistatin-Gentherapie: experimentell, nicht zugelassen. Der Myostatin-Antikörper Apitegromab (Isembyld) ist seit 11.09.2026 in den USA bei spinaler Muskelatrophie zugelassen; in der EU wurde der Antrag im August 2026 zurückgezogen. Im Sport verboten.',
    sources: [
      { title: 'PepPal – Complete Peptide List 2026', url: 'https://www.peppal.app/blog/complete-peptide-list' },
      { title: 'Follistatin & Myostatin – Übersicht (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC2717722/' },
      { title: 'Crawford TO et al., Lancet Neurol 2025 – Apitegromab bei spinaler Muskelatrophie (SAPPHIRE, Phase 3, 188 Teilnehmende)', url: 'https://pubmed.ncbi.nlm.nih.gov/40818473/' },
      { title: 'Mendell JR et al., Mol Ther 2015 – Follistatin-Gentherapie bei Becker-Muskeldystrophie, Phase 1/2a, 6 Patienten (Gentherapie, nicht das Peptid)', url: 'https://pubmed.ncbi.nlm.nih.gov/25322757/' },
      { title: 'EMA – Rückzugsschreiben Isembyld (Apitegromab), 13.08.2026', url: 'https://www.ema.europa.eu/en/documents/withdrawal-letter/withdrawal-letter-isembyld_en.pdf' },
      { title: 'FDA – Zulassung von Isembyld (Apitegromab) bei spinaler Muskelatrophie, 11.09.2026', url: 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-therapy-target-muscle-loss-spinal-muscular-atrophy' }
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
    short: 'Ein synthetisches Hexapeptid, das über den Ghrelin-Rezeptor kräftig körpereigenes Wachstumshormon freisetzt – so verlässlich, dass es in Japan als Diagnostikum für den Wachstumshormon-Test dient. Einen Nutzen bei Daueranwendung zeigen die Studien bisher nicht: In einer doppelblinden Studie über 48 Wochen stiegen weder IGF-1 noch das Wachstum.',
    moa: 'GHRP-2 (Pralmorelin) ist ein Hexapeptid aus der Peptidserie von Cyril Bowers und aktiviert den Wachstumshormon-Sekretagogum-Rezeptor GHSR-1a, den Ghrelin-Rezeptor der Hypophyse. Die GH-Antwort ist kräftiger als nach GHRH und wirkt mit einem GHRH-Signal synergistisch, bei Jüngeren stärker als bei Älteren. Die Wirkung ist kurz: Halbwertszeit 0,55 Stunden bei Kindern, GH-Gipfel innerhalb von etwa 60 Minuten. Wie Ghrelin steigert GHRP-2 den Appetit, und es ist nicht voll selektiv: Prolaktin, ACTH und Cortisol steigen mit. Die Rückkopplung der körpereigenen Achse bleibt erhalten.',
    benefits: [
      'Setzt beim Menschen zuverlässig und stärker als GHRH Wachstumshormon frei (Arvat 1997, 6 junge und 6 ältere Gesunde).',
      'Als Diagnostikum für Wachstumshormonmangel validiert: Spitzen-GH 84,6 µg/l bei Gesunden gegenüber 1,36 µg/l bei Patienten, Grenzwert 15 µg/l (Chihara 2007, 77 Gesunde, 58 Patienten); in Japan klinisch etabliert.',
      'Unter 30 Tagen Dauerinfusion bei gesunden Älteren blieb die GH-Ausschüttung erhöht und IGF-1 stieg auf ein stabiles Plateau (Bowers 2004, 17 Teilnehmer) – Hormonspiegel, kein klinischer Endpunkt.',
      'Normalisierte bei langwierig kritisch kranken Männern IGF-1 und IGFBP-3 (Van den Berghe 2002, RCT, 33 Männer, 5 Tage); weniger Eiweißabbau nur in Kombination mit TRH.',
      'Deutlich appetitsteigernd: 35,9 % mehr Nahrungsaufnahme bei 7 gesunden Männern (Laferrère 2005); 7 von 10 Kindern mit mehr Appetit (Mericq 2003).'
    ],
    risks: [
      'Kein klinischer Nutzen bei Daueranwendung belegt: In der doppelblinden Studie mit 126 Kindern über 48 Wochen weder Wachstum noch IGF-1-Anstieg (Tanaka 2014); keine Studie zu Muskel, Fett oder Schlaf bei Gesunden.',
      'Nicht selektiv: Prolaktin, ACTH und Cortisol steigen mit (Arvat 1997); dazu deutlich mehr Hunger.',
      'FDA nennt Berichte über höheren Insulinbedarf, Infektionen, Pankreatitis und Todesfälle kritisch kranker Studienteilnehmer, Kausalität nicht belegt; keine Langzeitdaten.',
      'Nicht zugelassen, Graumarktware ungeprüft; im Sport verboten und im Urin nachweisbar.'
    ],
    status: 'In DE/EU nicht als Arzneimittel zugelassen; Forschungspeptid. In Japan als Diagnostikum für den GH-Stimulationstest etabliert. USA: seit 29.09.2023 in Kategorie 2 der FDA-Übergangsregelung für 503B-Herstellbetriebe (Outsourcing Facilities), für injizierbare und nasale Anwendung (mögliche erhebliche Sicherheitsrisiken, nicht für Rezepturen). Im Sport jederzeit verboten (WADA 2026 S2.2.4; in DE namentlich in der Anlage des Anti-Doping-Gesetzes).',
    sources: [
      { title: 'Tanaka T et al., Clin Pediatr Endocrinol 2014 – GHRP-2-Nasenspray über 48 Wochen fördert das Wachstum nicht', url: 'https://pubmed.ncbi.nlm.nih.gov/25374440/' },
      { title: 'Bowers CY et al., J Clin Endocrinol Metab 2004 – 30 Tage GHRP-2 bei Älteren, GH und IGF-1 anhaltend erhöht', url: 'https://pubmed.ncbi.nlm.nih.gov/15126555/' },
      { title: 'Chihara K et al., Eur J Endocrinol 2007 – GHRP-2-Test bei Wachstumshormonmangel des Erwachsenen', url: 'https://pubmed.ncbi.nlm.nih.gov/17609397/' },
      { title: 'Arvat E et al., Peptides 1997 – GHRP-2 und Hexarelin auf GH, Prolaktin, ACTH und Cortisol', url: 'https://pubmed.ncbi.nlm.nih.gov/9285939/' },
      { title: 'Laferrère B et al., J Clin Endocrinol Metab 2005 – GHRP-2 steigert wie Ghrelin die Nahrungsaufnahme', url: 'https://pubmed.ncbi.nlm.nih.gov/15699539/' },
      { title: 'Bowers CY et al., Endocrinology 1984 – das erste GH freisetzende Hexapeptid (Vorläufer)', url: 'https://pubmed.ncbi.nlm.nih.gov/6714155/' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – Evidenzstufen der Peptide der GH-IGF-1-Achse', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' }
    ],
    community: [
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'ghrp-6',
    name: 'GHRP-6',
    altNames: 'Growth Hormone Releasing Peptide-6, SKF-110679',
    class: 'Synthetisches Wachstumshormon-Sekretagogum (Hexapeptid, Ghrelin-Rezeptor-Agonist)',
    emoji: '🍽️',
    short: 'Das erste klassische GH-Peptid: Es stößt über den Ghrelin-Rezeptor eine Wachstumshormon-Ausschüttung an und steigert den Appetit deutlich. Historisch die Leitstruktur der ganzen Klasse – ohne moderne Zulassungsstudien.',
    moa: 'GHRP-6 bindet als Agonist an den Ghrelin-Rezeptor (GHSR-1a) in Hypophyse und Hypothalamus und löst dort die Freisetzung von Wachstumshormon aus; beim Menschen dosisabhängig gezeigt. Mit GHRH wirkt es synergistisch, weil beide über verschiedene Wege ansetzen. Weil der Ghrelin-Rezeptor auch den Appetit steuert, ist ein kräftiger Hungerschub typisch. Bei hohen Gaben steigen Prolaktin und Cortisol etwa auf das Doppelte. GHRP-6 war das erste Peptid seiner Klasse; danach entstanden GHRP-1, GHRP-2 und Hexarelin, und die Suche nach seinem Rezeptor führte zur Entdeckung von Ghrelin.',
    benefits: [
      'Setzt beim Menschen Wachstumshormon frei – dosisabhängig, in mehreren kleinen Studien gezeigt',
      'Wirkt synergistisch mit GHRH; die Kombination diente in einer Lancet-Studie als zuverlässiger Diagnosetest für Wachstumshormonmangel',
      'Ausgeprägte Appetitsteigerung über den Ghrelin-Rezeptor (beim Menschen für das verwandte GHRP-2 gemessen)',
      'Hebt indirekt IGF-1 über die gesteigerte GH-Sekretion – das ist der Mechanismus, kein belegter Nutzen',
      'Im Tiermodell Schutz von Herz und Organen (Herzinfarkt beim Schwein, Doxorubicin bei Ratten) – präklinisch',
      'Diente als Leitstruktur für die gesamte Klasse der GH-Sekretagoga'
    ],
    risks: [
      'Keine kontrollierten Studien zu Muskelaufbau, Fettabbau oder Regeneration; keine Langzeitdaten',
      'Deutliche Appetitsteigerung; Wassereinlagerung und geringere Insulinempfindlichkeit als Klasseneffekte',
      'Hebt Prolaktin und Cortisol an; verändert den Schlaf',
      'Nicht zugelassen, im Sport jederzeit verboten (WADA-Liste 2026, S2.2.4)',
      'Forschungssubstanz – Reinheit und Gehalt ungeprüft'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz.',
    sources: [
      { title: 'Bowers CY et al., Endocrinology 1984 – Erstbeschreibung des GH-freisetzenden Hexapeptids', url: 'https://pubmed.ncbi.nlm.nih.gov/6714155/' },
      { title: 'Bowers CY et al., J Clin Endocrinol Metab 1990 – GH-Freisetzung bei gesunden Männern, Synergie mit GHRH', url: 'https://pubmed.ncbi.nlm.nih.gov/2108187/' },
      { title: 'Popovic V et al., Lancet 2000 – GHRH plus GHRP-6 als Diagnosetest', url: 'https://pubmed.ncbi.nlm.nih.gov/11030292/' },
      { title: 'Berlanga-Acosta J et al., Clin Med Insights Cardiol 2017 – Übersicht zu schützenden Effekten der GHRPs', url: 'https://pubmed.ncbi.nlm.nih.gov/28469491/' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – Wachstumshormon-Peptide: Evidenz und Selbstanwendung', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' }
    ],
    community: [
    ],
    filterCat: 'Exercise'
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
    ]
  },
  {
    id: 'cjc-1295-dac',
    name: 'CJC-1295 mit DAC',
    altNames: 'CJC-1295 DAC, DAC-GRF, Drug Affinity Complex GRF',
    class: 'Langwirksames GHRH-Analogon (Albumin-gebunden)',
    emoji: '⚓',
    short: 'Das GHRH-Analogon mit eingebautem Langzeit-Anker: Der Drug Affinity Complex bindet an Albumin und dehnt die Halbwertszeit auf 5,8 bis 8,1 Tage. In zwei randomisierten Studien hob eine einzige Gabe GH und IGF-1 über Tage, die natürlichen Pulse blieben erhalten – Wirksamkeitsdaten jenseits der Hormonspiegel gibt es nicht.',
    moa: 'CJC-1295 ist eine an 4 Stellen veränderte Form der ersten 29 Aminosäuren von GHRH, an deren Ende ein Lysin mit einer reaktiven Maleimid-Gruppe sitzt (Drug Affinity Complex). Nach der Gabe bindet diese Gruppe fest an die freie Thiolgruppe an Cystein 34 des Albumins; das Peptid ist so vor raschem Abbau geschützt, die Halbwertszeit lag beim Menschen bei 5,8 bis 8,1 Tagen (Teichman 2006). Es aktiviert den GHRH-Rezeptor der Hypophyse und steigert die Ausschüttung von Wachstumshormon und damit IGF-1. Die Pulse bleiben erhalten: Pulsfrequenz und Pulshöhe waren unverändert, der Talspiegel stieg 7,5-fach, das mittlere GH um 46 %, IGF-1 um 45 % (Ionescu & Frohman 2006). Die Rückkopplung über Somatostatin und IGF-1 bleibt intakt, anders als bei exogenem HGH.',
    benefits: [
      'Humandaten aus zwei randomisierten, placebokontrollierten Studien: nach einer Gabe GH 2- bis 10-fach für 6 Tage oder länger, IGF-1 1,5- bis 3-fach für 9 bis 11 Tage (Teichman 2006, Gesunde 21 bis 61 Jahre)',
      'Lange Wirkdauer durch Albuminbindung: Halbwertszeit 5,8 bis 8,1 Tage; nach mehreren Gaben IGF-1 bis zu 28 Tage über Ausgangswert',
      'Natürliche Pulsatilität bleibt erhalten, der Zuwachs kommt über den Grundpegel (Ionescu & Frohman 2006, nächtliche Profile alle 20 Minuten)',
      'Stimuliert die eigene Achse statt sie zu ersetzen – die Rückkopplung bleibt aktiv (Unterschied zu HGH)',
      'Gleiches Grundprinzip wie langwirksame GLP-1-Medikamente (Albuminbindung), aber andere Technik: feste Maleimid-Bindung statt Fettsäure',
      'Anwenderberichte: tieferer Schlaf, schnellere Erholung, bessere Haut und Nägel, messbar höheres IGF-1 – unkontrolliert, nie in Studien geprüft'
    ],
    risks: [
      'Keine Wirksamkeitsdaten: Die einzige Phase-2-Studie wurde 2006 nach dem Tod eines Teilnehmers gestoppt, Ergebnisse nie veröffentlicht. Laut FDA-Präsentation 2024 war es ein Herzinfarkt, den der Prüfarzt am ehesten einer unerkannten koronaren Herzkrankheit zuschrieb; unabhängig geprüft ist das nicht.',
      'Der dauerhaft angehobene Grundpegel und über Wochen erhöhtes IGF-1 sind langfristig nicht untersucht; im Tier Vermehrung der GH-bildenden Hypophysenzellen (Alba 2006).',
      'Häufig Rötung/Quaddeln an der Einstichstelle; möglich: Wassereinlagerung, Kribbeln, mehr Hunger, sinkende Insulinempfindlichkeit; FDA nennt erhöhten Puls und Gefäßerweiterungsreaktionen. Bei aktiver/früherer Krebserkrankung tabu.',
      'Graumarkt: Unter dem Namen CJC-1295 wird auch die Form ohne DAC verkauft; in einer Auswertung von 6441 Proben aus 14 Peptiden 41,6 bis 71,1 % mit Qualitätsmängeln (Preprint 2026).'
    ],
    status: 'In DE, EU und USA nie zugelassen; Entwicklung nach dem Studienabbruch 2006 eingestellt, Vertrieb als Forschungssubstanz. Im Sport jederzeit verboten (WADA 2026 S2.2.4; in DE namentlich in der Anlage des Anti-Doping-Gesetzes).',
    sources: [
      { title: 'Teichman et al., J Clin Endocrinol Metab 2006 – Prolonged stimulation of GH and IGF-1 secretion by CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' },
      { title: 'Ionescu & Frohman, J Clin Endocrinol Metab 2006 – Pulsatile GH-Sekretion unter CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' },
      { title: 'Jetté L et al., Endocrinology 2005 – Albumin-Konjugat, Identifikation von CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/15817669/' },
      { title: 'Alba M et al., Am J Physiol Endocrinol Metab 2006 – Wachstum bei GHRH-Knockout-Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/16822960/' },
      { title: 'ClinicalTrials.gov NCT00267527 – Phase-2-Studie bei HIV-assoziiertem Bauchfett, abgebrochen', url: 'https://clinicaltrials.gov/study/NCT00267527' },
      { title: 'FDA, Präsentation vor dem Pharmacy Compounding Advisory Committee zu CJC-1295, Dezember 2024 – Todesfall in der Phase-2-Studie', url: 'https://downloads.regulations.gov/FDA-2024-N-4777-0009/attachment_6.pdf' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – Evidenzstufen der Peptide der GH-IGF-1-Achse', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' }
    ],
    community: [
      { title: 'biolabshop (Suche „CJC-1295 DAC")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'CJC-1295 mit DAC: Das Langzeit-Signal für Wachstumshormon', audio: 'audio/cjc-1295-dac-podcast.mp3', spotify: '7GY5RM8IJGggpIOemfR00a', lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 37) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das Wachstumshormon-Signal mit Langzeit-Anker: wie der Drug Affinity Complex das Peptid ans Albumin heftet (6–8 Tage Halbwertszeit statt 30 Minuten), die bemerkenswerten Humandaten (Teichman, JCEM 2006: 2–10-faches GH, bis zu 11 Tage erhöhtes IGF-1 nach einer Gabe) und die große Debatte Dauersignal („GH-Bleed") gegen natürliche Pulse. Plus Vergleich mit direktem HGH und die typische berichtete Anwendung (ohne Empfehlung). Reine Information, keine Dosier- oder Anwendungsempfehlung – nicht zugelassen, im Sport verboten.', sources: [
          { title: 'Teichman et al. 2006 – CJC-1295 Pharmakokinetik/GH/IGF-1', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' },
          { title: 'Ionescu & Frohman 2006 – Pulsatilität unter CJC-1295', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' }
        ] }
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'mod-grf-1-29',
    name: 'Mod GRF 1-29 (CJC-1295 ohne DAC)',
    altNames: 'Modified GRF (1-29), CJC-1295 no DAC, Sermorelin-Analogon',
    class: 'Synthetisches GHRH-Analogon (Wachstumshormon-Releasing-Hormon-Fragment)',
    emoji: '📈',
    short: 'Ein stabilisiertes GRF(1-29) mit 4 Aminosäureaustauschen, das die eigenen Wachstumshormon-Pulse verstärken soll – das kurz wirksame Geschwister von CJC-1295 mit DAC. Das GRF-Prinzip ist am Menschen belegt, Mod GRF selbst wurde aber nie in einer veröffentlichten Humanstudie untersucht.',
    moa: 'Mod GRF 1-29 ist ein modifiziertes Fragment der ersten 29 Aminosäuren des Wachstumshormon-Releasing-Hormons (GHRH) mit 4 Aminosäureaustauschen gegenüber nativem GHRH. Es bindet an den GHRH-Rezeptor der Hypophyse und soll so die Freisetzung von Wachstumshormon anregen, bei erhaltener Rückkopplung. Solche Austausche sollen GRF vor dem Abbau durch DPP-IV, chemischer Umlagerung und Oxidation schützen und die Rezeptorbindung verbessern (Peptidchemie, Tier- und Zelldaten). Anders als die DAC-Variante fehlt der Albumin-Anker, die Wirkung gilt deshalb als kurz – eine Halbwertszeit beim Menschen ist allerdings nicht veröffentlicht. In der Praxis wird es häufig mit einem Ghrelin-Rezeptor-Agonisten wie Ipamorelin oder GHRP-2 kombiniert; die Synergie beider Signalwege ist für die Substanzklassen am Menschen belegt, nicht für diese Kombination.',
    benefits: [
      'Das Grundprinzip wirkt beim Menschen: GRF(1-29)-Peptide setzen nach Injektion Wachstumshormon frei (Aitman 1989); Sermorelin (GRF 1-29) war in den USA zugelassen, die Rücknahme 2009 erfolgte nicht aus Sicherheitsgründen.',
      'Ein verwandtes GRF-Analogon hob bei 19 Älteren über Wochen GH, IGF-1 und IGFBP-3, verdickte die Haut und verbesserte bei Männern Magermasse und Insulinempfindlichkeit (Khorram 1997, einfach verblindet) – nicht Mod GRF selbst.',
      'Die Aminosäureaustausche machen GRF-Analoga im Labor und im Tier stabiler gegen Abbau (Campbell 1994); ob daraus beim Menschen eine längere Wirkung folgt, ist nicht gemessen.',
      'Soll die pulsatile GH-Physiologie besser erhalten als langwirksame DAC-Varianten – pharmakologisch plausibel, am Menschen nicht vergleichend untersucht; auch unter CJC-1295 mit DAC blieben die Pulse erhalten (Ionescu 2006).',
      'Hebt indirekt IGF-1 über die gesteigerte GH-Sekretion – das ist der Mechanismus, kein belegter Nutzen.'
    ],
    risks: [
      'Keine einzige begutachtete Humanstudie, keine gemessene Halbwertszeit; unterste Evidenzstufe in der Übersicht Dominikowski 2026. Ein im Tier superaktives GRF-Analogon zeigte beim Menschen keinen Vorteil (Aitman 1989).',
      'Klasseneffekte: Wassereinlagerung, Kribbeln, Gelenkschmerzen, sinkende Insulinempfindlichkeit; FDA nennt bei CJC-1295 erhöhte Herzfrequenz und Gefäßerweiterungsreaktionen.',
      'Namenschaos: Als CJC-1295 verkaufte Ware enthält oft Mod GRF (Henninge 2010); Graumarktproben mit häufigen Qualitätsmängeln (Preprint 2026).',
      'Nicht zugelassen; im Sport verboten.'
    ],
    status: 'In DE/EU und den USA nicht zugelassen; Forschungspeptid, oft als CJC-1295 verkauft. Im Sport jederzeit verboten (WADA 2026 S2.2.4; in DE als mod-GRF namentlich in der Anlage des Anti-Doping-Gesetzes).',
    sources: [
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – CJC-1295 ohne DAC: keine begutachtete Humanstudie (Evidenzstufe D)', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' },
      { title: 'Khorram O et al., J Clin Endocrinol Metab 1997 – GRF(1-29)-Analogon über 16 Wochen bei Älteren (andere Verbindung, nur indirekt)', url: 'https://pubmed.ncbi.nlm.nih.gov/9141536/' },
      { title: 'Aitman TJ et al., Peptides 1989 – im Tier superaktives GRF-Analogon ohne Vorteil beim Menschen (andere Verbindung, nur indirekt)', url: 'https://pubmed.ncbi.nlm.nih.gov/2546126/' },
      { title: 'Henninge J et al., Drug Test Anal 2010 – als CJC-1295 verkauftes Präparat enthielt Peptid ohne DAC', url: 'https://pubmed.ncbi.nlm.nih.gov/21204297/' }
    ],
    community: [
    ],
    podcasts: [
      { title: 'CJC-1295 ohne DAC: Das Puls-Peptid – und die Auflösung des Namens-Chaos', audio: 'audio/cjc-1295-no-dac-podcast.mp3', spotify: '78AdX9FlRgHliWEjUnfYRM', lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 38) · mit Paul & Paula. Frische, positive KI-Dialogfolge, die das größte Namens-Rätsel der Peptid-Szene auflöst: CJC-1295 ohne DAC, Mod GRF 1-29 und modifiziertes GRF sind ein und dasselbe Molekül. Warum das kurzlebige GHRH-Analogon die natürlichen Wachstumshormon-Pulse verstärkt statt überdeckt (Ionescu & Frohman, JCEM 2006), was die vier Molekül-Reparaturen bewirken, wo Sermorelin einzuordnen ist, warum Insulin-Timing den Puls entscheidet – und der große Vergleich: DAC oder ohne DAC? Mit der typischen berichteten Anwendung (ohne Empfehlung). Reine Information, keine Dosier- oder Anwendungsempfehlung – nicht zugelassen, im Sport verboten.', sources: [
          { title: 'Ionescu & Frohman 2006 – pulsatile GH-Sekretion unter CJC-1295 mit DAC (andere Verbindung, nur indirekt)', url: 'https://pubmed.ncbi.nlm.nih.gov/17018654/' },
          { title: 'Teichman et al. 2006 – CJC-1295 (DAC) Pharmakokinetik', url: 'https://pubmed.ncbi.nlm.nih.gov/16352683/' }
        ] }
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    altNames: 'Anti-Obesity Drug 9604, HGH-Fragment 176-191 (modifiziert)',
    class: 'Modifiziertes Wachstumshormon-Fragment (lipolytisches Peptidfragment)',
    emoji: '🔥',
    short: 'Ein Wachstumshormon-Fragment, das gezielt auf Fettabbau ausgelegt wurde – ohne die klassischen GH-Effekte auf Blutzucker und IGF-1, mit gutem Kurzzeit-Sicherheitsprofil.',
    moa: 'AOD-9604 leitet sich vom C-terminalen Abschnitt (Aminosäuren 177-191) des humanen Wachstumshormons ab, ergänzt um ein N-terminales Tyrosin. Dieser Bereich vermittelt in präklinischen Modellen die lipolytischen Eigenschaften von GH, ohne dessen wachstumsfördernde oder blutzuckerwirksame Effekte auszulösen. Die postulierte Wirkung ist eine Stimulation der Fettverbrennung und Hemmung der Lipogenese, überwiegend belegt in Tier- und Zellmodellen. Anders als vollständiges GH soll AOD-9604 die IGF-1-Spiegel und die Insulinsensitivität nicht relevant beeinflussen. In humanen Phase-II-Studien zur Adipositas verfehlte es jedoch klinisch überzeugende Gewichtsverlust-Endpunkte.',
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
      'Nicht zugelassen; als Forschungschemikalie verkaufte Ware ist ungeprüft und nicht identisch mit den Studienpräparaten.'
    ],
    status: 'In DE/EU nicht zugelassen; Entwicklung nach Phase 2 eingestellt.',
    sources: [
      { title: 'Ng et al., Horm Res 2000 – Stoffwechselstudien zur lipolytischen Domäne AOD9604', url: 'https://pubmed.ncbi.nlm.nih.gov/11146367/' },
      { title: 'Heffernan et al., Endocrinology 2001 – Effekte von AOD9604 auf den Fettstoffwechsel', url: 'https://pubmed.ncbi.nlm.nih.gov/11713213/' },
      { title: 'Stier H et al., J Endocrinol Metab 2013 – Sicherheit in 6 RCTs (gepoolte Auswertung)', url: 'https://doi.org/10.4021/jem157w' }
    ],
    community: [
    ],
    podcasts: [
      {
        title: 'AOD-9604: Der „saubere Fatburner" im Faktencheck',
        audio: 'audio/aod-9604-podcast.mp3',
        spotify: '07ERvc8IuGfiucQuhRJ7al',
        lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 9) · mit Paul & Paula. Frische KI-Dialogfolge mit Fachrecherche. Elegantes Konzept (das Fett-Endstück des Wachstumshormons ohne IGF-1) und erstaunlich gute Sicherheit über ~900 Studien-Teilnehmer – aber die große Phase-2-Humanstudie verfehlte ihren Gewichtsverlust-Endpunkt (getestet als Tablette, evtl. ein Bioverfügbarkeits-Problem). Fazit: wahrscheinlich harmlos, aber unbewiesen wirksam; im Sport ein Doping-Reizthema (Essendon). Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Ng et al., Horm Res 2000 – Stoffwechselstudien zur lipolytischen Domäne AOD9604', url: 'https://pubmed.ncbi.nlm.nih.gov/11146367/' },
          { title: 'Heffernan et al., Endocrinology 2001 – AOD-9604 & Beta-3-Adrenozeptoren im Fettgewebe', url: 'https://pubmed.ncbi.nlm.nih.gov/11713213/' },
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
    status: 'In DE/EU nicht als Arzneimittel zugelassen und nicht als Nahrungsergänzungsmittel verkehrsfähig; gehandelt als Forschungssubstanz. In den USA als Ausgangsstoff für Rezepturarzneien nominiert und von der FDA unter den Substanzen mit möglichen erheblichen Sicherheitsrisiken geführt. Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob KPV für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, das Gremium stimmte dennoch mehrheitlich dafür (Stimmen 8:6 bei 1 Enthaltung). Eine Entscheidung der FDA steht aus; ein formelles Verfahren dürfte frühestens 2027 beginnen.',
    sources: [
      { title: 'Dalmasso et al., Gastroenterology 2008 – PepT1-vermittelte KPV-Aufnahme senkt intestinale Entzündung', url: 'https://pubmed.ncbi.nlm.nih.gov/18061177/' },
      { title: 'Kannengiesser et al., Inflammatory Bowel Diseases 2008 – KPV in zwei murinen Colitis-Modellen', url: 'https://pubmed.ncbi.nlm.nih.gov/18092346/' },
      { title: 'Laroui et al., Gastroenterology 2010 – KPV-Nanopartikel mit Freisetzung im Kolon', url: 'https://pubmed.ncbi.nlm.nih.gov/19909746/' },
      { title: 'Cutuli et al., J Leukoc Biol 2000 – antimikrobielle Aktivität von alpha-MSH-Peptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/10670585/' },
      { title: 'Sung et al., Tissue and Cell 2025 – KPV schützt menschliche Keratinozyten vor Feinstaub', url: 'https://pubmed.ncbi.nlm.nih.gov/40073467/' },
      { title: 'Elliott et al., J Invest Dermatol 2004 – Signalwege von alpha-MSH und KPV in Keratinozyten', url: 'https://pubmed.ncbi.nlm.nih.gov/15102092/' },
      { title: 'FDA – Bulk Drug Substances: keine Humandaten zu KPV', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' },
      { title: 'McDermott Will & Schulte, Juli 2026 – Bericht zur FDA-Expertensitzung (PCAC) vom 23./24.07.2026', url: 'https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/' }
    ],
    community: [
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
      { title: 'Vandamme et al., Cell Immunol 2012 – Übersicht zu LL-37 und Immunmodulation', url: 'https://pubmed.ncbi.nlm.nih.gov/23246832/' },
      { title: 'Dürr et al., Biochim Biophys Acta 2006 – Struktur und antimikrobielle Funktion von LL-37', url: 'https://pubmed.ncbi.nlm.nih.gov/16716248/' },
      { title: 'Dolkar T et al., J Cutan Pathol 2018 – Hautnebenwirkungen nach intratumoralen LL-37-Injektionen (Fallbericht aus Phase-I-Studie, Melanom)', url: 'https://pubmed.ncbi.nlm.nih.gov/29665030/' }
    ],
    community: [
    ],
    podcasts: [
      {
        title: 'LL-37: Körpereigenes Abwehr-Peptid – oder Entzündungstreiber?',
        audio: 'audio/ll-37-podcast.mp3',
        spotify: '2zTo5WktERW0Wnik3223ti',
        lengthLabel: '≈ 12 Min · KI-generiert (Paul & Paula)',
        note: 'Der Podcast von Paul Höser (Folge 27) · mit Paul & Paula. Frische, positive KI-Dialogfolge über unser körpereigenes Antibiotikum: LL-37, das einzige menschliche Cathelicidin, durchlöchert Bakterienmembranen, stört Biofilme und dirigiert die Immunabwehr (Dürr, BBA 2006; Vandamme, Cell Immunol 2012). Der eleganteste Biohack: Vitamin D ist der stärkste Schalter der körpereigenen LL-37-Produktion. Ehrlich eingeordnet: Die Selbstanwendungs-Versprechen der Szene stammen aus Zell-/Tierdaten, und im Übermaß kann LL-37 Entzündung treiben (Psoriasis/Rosazea). Reine Information, keine Dosier- oder Anwendungsempfehlung.',
        sources: [
          { title: 'Vandamme et al., Cell Immunol 2012 – LL-37 & Immunmodulation', url: 'https://pubmed.ncbi.nlm.nih.gov/23246832/' },
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
    status: 'In DE/EU nicht zugelassen; Forschungssubstanz. USA: Am 23./24. Juli 2026 beriet ein Expertengremium der FDA, ob DSIP für Rezepturarzneien in den USA zugelassen werden soll. Die FDA-Fachleute rieten ab, und auch das Gremium stimmte mehrheitlich dagegen (6 dafür, 7 dagegen, 1 Enthaltung). Eine Entscheidung der FDA steht aus.',
    sources: [
      { title: 'Graf & Kastin, Neurosci Biobehav Rev 1984 – DSIP: ein Überblick', url: 'https://pubmed.ncbi.nlm.nih.gov/6145137/' },
      { title: 'Kovalzon & Strekalova, J Neurochem 2006 – DSIP: ein ungelöstes Rätsel', url: 'https://pubmed.ncbi.nlm.nih.gov/16539679/' },
      { title: 'Schneider-Helmert et al., 1981 – DSIP und menschliches Schlafverhalten', url: 'https://pubmed.ncbi.nlm.nih.gov/6895513/' },
      { title: 'Bes et al., Neuropsychobiology 1992 – DSIP bei chronischer Insomnie, doppelblind', url: 'https://pubmed.ncbi.nlm.nih.gov/1299794/' },
      { title: 'McDermott (Kanzlei), Bericht zur Sitzung des FDA-Gremiums für Rezepturarzneien am 23./24.07.2026', url: 'https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/' }
    ],
    community: [
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
    short: 'Ein EPO-abgeleitetes Peptid ohne Blutbildungs-Effekt: zielt auf Nervenreparatur und Entzündung. Zwei kleine Studien bei Neuropathie positiv – die größte Studie mit 64 Teilnehmern zeigte bei Beschwerden und Hautbiopsie keinen Vorteil gegenüber Placebo und blieb unpubliziert.',
    moa: 'ARA-290 ist ein kurzes Peptid aus der Helix-B des Erythropoetins (EPO), aber OHNE dessen blutbildende Wirkung. Es aktiviert den „Innate Repair Receptor" und soll gewebeschützend und entzündungshemmend wirken, besonders an Nervengewebe. Untersucht wurde es vor allem bei Small-Fiber-Neuropathie (bei Sarkoidose und Diabetes) auf Nervenschmerz und Nervenfaserdichte. Am Menschen gemessen sind Beschwerdefragebögen und Nervenfaserdichte, nicht die Wirkkette über den Rezeptor; die breite Mechanismusevidenz stammt aus Zell- und Tiermodellen.',
    benefits: [
      'Echte kontrollierte Humandaten: verblindete, placebokontrollierte Studie bei Sarkoidose-assoziiertem Verlust kleiner Nervenfasern mit besseren Beschwerden und höherer Hornhautnervenfaserdichte (28 Tage).',
      'Phase 2 bei Typ-2-Diabetes: bessere PainDetect-Werte, HbA1c und Blutfette über 56 Tage Beobachtung.',
      '6-Minuten-Gehtest in der größten Studie in allen 3 Dosisgruppen ähnlich besser (plus 17,7 bis 19,3 Meter gegenüber plus 1,2 unter Placebo).',
      'Regt die Blutbildung nicht an – der klassische EPO-Nachteil entfällt.'
    ],
    risks: [
      'Die größte Studie (64 Teilnehmer, vierfach verblindet) zeigte bei Symptomfragebögen und Nervenfaserdichte in der Haut keinen Vorteil gegenüber Placebo – und wurde nie publiziert.',
      'Entwicklung steht still: keine Phase 3, keine laufende Studie, keine Zulassung; Augenstudie vorzeitig beendet, Depressionsstudie ohne veröffentlichte Ergebnisse.',
      'Nur Kurzzeitdaten (28 Tage, in einer Studie 12 Wochen); schwerwiegende Einzelereignisse traten in der größten Studie ausschließlich in Wirkstoffarmen auf.',
      'Im Sport nach Wortlaut der WADA-Liste 2026 verboten (S2.1.5, Agonisten des körpereigenen Reparatur-Rezeptors, einschließlich Substanzen ähnlicher Wirkung); Graumarkt-Ware ungeprüft.'
    ],
    status: 'Investigativ (Phase 2, keine laufende Studie); nicht zugelassen.',
    sources: [
      { title: 'Dahan A et al., Mol Med 2013 – Sarkoidose, placebokontrolliert', url: 'https://pubmed.ncbi.nlm.nih.gov/24136731/' },
      { title: 'Brines M et al., Mol Med 2015 – Phase 2 bei Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/25387363/' },
      { title: 'ClinicalTrials.gov NCT02039687 – Phase 2 mit 64 Teilnehmern, Ergebnisse eingestellt', url: 'https://clinicaltrials.gov/study/NCT02039687' },
      { title: 'Lois N et al., J Clin Med 2020 – diabetisches Makulaödem', url: 'https://pubmed.ncbi.nlm.nih.gov/32674280/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Immun'
  },
  {
    id: 'vip',
    name: 'VIP (Vasoaktives intestinales Peptid)',
    altNames: 'Vasoactive Intestinal Peptide, Aviptadil',
    class: 'Neuropeptid (28 Aminosäuren), immun- und gefäßmodulierend',
    emoji: '🫁',
    short: 'Körpereigenes Peptid, das Gefäße erweitert und Entzündung dämpft. Als Schwellkörperinjektion mit Phentolamin zugelassen, bei COVID-19 mit gemischten Ergebnissen geprüft; für das Nasenspray gegen CIRS gibt es nur eine offene Studie mit 20 Patienten.',
    moa: 'VIP ist ein körpereigenes Neuropeptid, das Gefäße erweitert, Entzündung dämpft und das Immunsystem sowie den Hormonhaushalt moduliert. In der Biohacking-/CIRS-Szene (chronisches Entzündungssyndrom, z.B. nach Schimmelbelastung) wird es als Nasenspray genutzt, um Entzündungswerte zu normalisieren. Medizinisch (als Aviptadil) wurde es u.a. bei Lungenerkrankungen untersucht.',
    benefits: [
      'Gefäßerweiternd – am Menschen belegt, u. a. selektiv in der Lunge (inhaliert) und im Schwellkörper',
      'Dämpft Entzündung: inhaliert bei Sarkoidose weniger TNF-alpha und mehr regulatorische T-Zellen (offene Studie, 20 Patienten)',
      'Inhaliertes Aviptadil verkürzte in einer doppelblinden Studie mit 80 Patienten den Klinikaufenthalt bei COVID-19-Pneumonie',
      'In der CIRS-/Schimmel-Community als Nasenspray genutzt – dazu nur eine offene Studie mit 20 Patienten ohne Kontrollgruppe',
      'Körpereigenes Peptid mit breitem Regulationsprofil'
    ],
    risks: [
      'Für die Nasenspray-Anwendung keine kontrollierten Studien; die größte Studie (Infusion bei COVID-19, 461 Patienten) war negativ',
      'Gefäßerweiternd: Gesichtsröte (Flush) häufig, Blutdruckabfall möglich',
      'Dauerhaft stark erhöhtes VIP (VIP-bildende Tumoren) verursacht wässrigen Durchfall und Kaliummangel',
      'Kein zugelassenes Nasenspray; Rezeptur- oder Graumarktware ohne Qualitätskontrolle',
      'Anwendung idealerweise ärztlich begleitet'
    ],
    status: 'In Deutschland nur als Aviptadil plus Phentolamin (Schwellkörperinjektion bei Erektionsstörungen) zugelassen. Als Nasenspray Rezeptur oder Graumarkt; bei COVID-19 und Sarkoidose in Studien geprüft.',
    sources: [
      { title: 'Delgado M, Ganea D, Amino Acids 2013 – VIP und Immunfunktionen', url: 'https://pubmed.ncbi.nlm.nih.gov/22139413/' },
      { title: 'Prasse A et al., Am J Respir Crit Care Med 2010 – inhaliertes VIP bei Sarkoidose', url: 'https://pubmed.ncbi.nlm.nih.gov/20442436/' },
      { title: 'Brown SM et al., Lancet Respir Med 2023 – TESICO, Aviptadil bei COVID-19', url: 'https://pubmed.ncbi.nlm.nih.gov/37348524/' },
      { title: 'Esendagli D et al., Med Princ Pract 2025 – inhaliertes Aviptadil', url: 'https://pubmed.ncbi.nlm.nih.gov/39870064/' },
      { title: 'Shoemaker RC et al., Health 2013 – VIP-Nasenspray bei CIRS (offene Studie)', url: 'https://doi.org/10.4236/health.2013.53053' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Immun'
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
      'Wichtig: die Schlüsselstudie (Benoist 2014) wurde 2025 zurückgezogen, die Einführungsarbeit (McCoy 2013) steht seit 2021 unter Expression of Concern – Evidenz stark eingeschränkt',
      'Keine Humandaten; Langzeitsicherheit unbekannt',
      'Über die c-Met-/Wachstumswirkung theoretisches Zellwachstums-/Krebsrisiko',
      'Nicht zugelassen; Research-Ware höchst unsicher'
    ],
    status: 'Experimentelle Forschungssubstanz; nicht zugelassen. Schlüsselstudie zurückgezogen.',
    sources: [
      { title: 'McCoy et al., J Pharmacol Exp Ther 2013 – Einführung von Dihexa als oral wirksames, hirngängiges Angiotensin-IV-Analogon, Rattenversuche (seit 2021 unter Expression of Concern)', url: 'https://pubmed.ncbi.nlm.nih.gov/23055539/' },
      { title: 'Benoist et al., J Pharmacol Exp Ther 2014 – HGF/c-Met als Wirkweg der Angiotensin-IV-Peptide (2025 zurückgezogen)', url: 'https://pubmed.ncbi.nlm.nih.gov/25187433/' },
      { title: 'J Pharmacol Exp Ther 2025 – Rückzugsnotiz zur Arbeit von 2014', url: 'https://pubmed.ncbi.nlm.nih.gov/40312093/' },
      { title: 'Porsteinsson et al., J Alzheimers Dis Rep 2025 – Fosgonimeton bei leichter bis mittelschwerer Alzheimer-Krankheit (LIFT-AD)', url: 'https://pubmed.ncbi.nlm.nih.gov/41393340/' },
      { title: 'Washington State University, Pressemitteilung vom 11.10.2012 – Herkunft der Angabe, Dihexa sei sieben Zehnerpotenzen stärker als BDNF', url: 'https://archive.news.wsu.edu/news/2012/10/11/prospective-alzheimer%C2%92s-drug-builds-new-brain-cell-connections/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ]
  },
  {
    id: 'p21',
    name: 'P21 (P021)',
    altNames: 'P021, Peptide 021, CNTF-Mimetikum (nicht zu verwechseln mit dem Zellzyklus-Protein p21)',
    class: 'Neurotrophes Peptidfragment (Neurogenese-Förderer)',
    emoji: '🧠',
    short: 'Ein winziges, vom Nervenwachstumsfaktor CNTF abgeleitetes Peptid aus der Alzheimer-Forschung, das im Tier die Neubildung von Nervenzellen anregt und das Gedächtnis verbessert – am Menschen nie geprüft.',
    moa: 'P021 besteht aus 4 Aminosäuren aus der aktiven Region des ciliären neurotrophen Faktors (CNTF, Reste 147 bis 150) und trägt eine Adamantan-Endgruppe, die es stabiler und hirngängiger machen soll. Es hemmt das LIF-Signal und erhöht die Bildung des Wachstumsfaktors BDNF; darüber dämpft es das Tau-Enzym GSK3-beta. In Tiermodellen – oral über das Futter gegeben – förderte es die Neurogenese im Hippocampus, schützte Synapsen und verbesserte Gedächtnisleistungen. Entwickelt wurde es in der Alzheimer-Forschung der Arbeitsgruppe um Khalid Iqbal. Humandaten fehlen.',
    benefits: [
      'Förderte im Tiermodell die Neurogenese (neue Nervenzellen) im Hippocampus – bei Alzheimer-Mäusen, alten Ratten und im Down-Syndrom-Modell',
      'Steigert im Tier BDNF und verbesserte Gedächtnisleistungen (präklinisch)',
      'Klein, stabil und im Tier oral wirksam; 18 Monate Gabe bei Mäusen ohne unerwünschte Wirkungen'
    ],
    risks: [
      'Bislang rein präklinisch – keine Humanstudien, kein Eintrag im Studienregister',
      'Fast alle Daten aus der Entwicklergruppe; in einem neueren Tiermodell (CDKL5-Mangel) ohne BDNF-Anstieg und mit begrenztem Nutzen',
      'Langzeitsicherheit am Menschen unbekannt; das Mutterprotein CNTF verursachte in Humanstudien Appetitverlust, Muskelschmerzen und Gewichtsverlust',
      'Nicht zugelassen; Research-Ware auf Reinheit achten; im Sport unter S0 der WADA-Liste jederzeit verboten'
    ],
    status: 'Präklinische Forschungssubstanz; nicht zugelassen.',
    sources: [
      { title: 'Kazim et al., Neurobiol Dis 2014 – orale Langzeitgabe von P021 in dreifach transgenen Alzheimer-Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/25046994/' },
      { title: 'Bolognin et al., Neurobiol Aging 2014 – P021 gegen altersbedingten Gedächtnisabbau', url: 'https://pubmed.ncbi.nlm.nih.gov/24702821/' },
      { title: 'Kazim et al., Sci Rep 2017 – P021 im Down-Syndrom-Mausmodell Ts65Dn', url: 'https://pubmed.ncbi.nlm.nih.gov/28368015/' },
      { title: 'Kazim & Iqbal, Mol Neurodegener 2016 – Übersicht zu neurotrophen Kleinmolekül-Mimetika', url: 'https://pubmed.ncbi.nlm.nih.gov/27400746/' },
      { title: 'Baazaoui & Iqbal, Biomolecules 2022 – Übersicht zu P021', url: 'https://pubmed.ncbi.nlm.nih.gov/36291618/' },
      { title: 'Mottolese et al., J Neurodev Disord 2024 – CDKL5-Modell, gemischter Befund', url: 'https://pubmed.ncbi.nlm.nih.gov/39592934/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Sonstige'
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
          { title: 'Khavinson & Morozov, Neuroendocrinol Lett 2003', url: 'https://pubmed.ncbi.nlm.nih.gov/14523363/' },
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
      { title: 'Reddit r/PeptideGuide – Bronchogen Bioregulator Dosierung', url: 'https://www.reddit.com/r/PeptideGuide/comments/1e5r8zw/bronchogen_bioregulator_dosage/' }
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
    short: 'Ein Khavinson-Bioregulator für die Prostata: das synthetische Tetrapeptid KEDP, das über das Chromatin gealterte Zellen wieder aktivieren und Prostatabeschwerden lindern soll. Belegt sind Laborbefunde an Blutzellen, ein Rattenversuch und zwei kleine, unverblindete Patientenserien – beschrieben nur in der Patentschrift der Entwickler.',
    moa: 'Prostamax ist das synthetische Tetrapeptid Lys-Glu-Asp-Pro (KEDP) aus der Bioregulator-Schule von Vladimir Khavinson, 2001 von Khavinson, Malinin und Grigoriev als Regulator der Prostatafunktion patentiert. Die postulierte Wirkung ist epigenetisch: Das kurze Peptid soll an die DNA binden, dicht gepacktes Chromatin lockern und altersbedingt stillgelegte Gene reaktivieren. Im Labor veränderte KEDP die Stabilität doppelsträngiger DNA, und in Lymphozytenkulturen von 75- bis 86-Jährigen stiegen Chromatinmarker wie die Schwesterchromatid-Austausche (von 5,9 auf 12,0 pro Zelle). Wie das Peptid gezielt die Prostata erreicht, ist ungeklärt; in Modellrechnungen der Entwickler band KEDP nicht stark an den Transporter LAT1. Die älteren russischen Präparate Prostatilen und Vitaprost sind Extrakte aus Rinderprostata, nicht dieses Tetrapeptid.',
    benefits: [
      'In Lymphozytenkulturen alter Menschen Lockerung des Chromatins: Schwesterchromatid-Austausche von 5,9 auf 12,0 pro Zelle, aktive Nukleolus-Regionen von 0,95 auf 2,5 (Dzhokhadze 2012, Zellkultur).',
      'Im Rattenmodell bakterieller Prostatitis milderer Entzündungsgrad: 1,81 gegenüber 2,91 Punkten, je 11 Tiere (Patent EP1353939, nicht begutachtet).',
      'Patientenserie der Entwickler: 35 Männer mit chronischer Prostatitis, berichtet 64,0 % Schmerzfreiheit und Harnfluss von 17,3 auf 23,5 ml/s; nicht randomisiert, nicht verblindet, nur im Patent.',
      'Nicht-hormoneller Ansatz; verwandte Prostata-Extrakte (Prostatilen, Vitaprost) sind in Russland seit Jahrzehnten registriert und in offenen Studien untersucht – für das Tetrapeptid gilt das nicht.'
    ],
    risks: [
      'Prostatabeschwerden bitte ärztlich abklären – Selbstbehandlung kann die Krebs-Früherkennung (PSA) verzögern.',
      'Die einzigen Patientendaten stehen in einer Patentschrift der Entwickler; keine begutachtete Studie mit PSA, Prostatavolumen oder Symptomscore. Für BPH und Prostatitis gibt es erprobte, zugelassene Therapien.',
      'Literatur fast ausschließlich aus Russland und Georgien, überwiegend aus dem Umfeld der Entwickler; keine unabhängige Bestätigung.',
      'Nicht zugelassen; keine systematischen Sicherheitsdaten am Menschen; Research-Ware in der Qualität ungeprüft.'
    ],
    status: 'In DE/EU nicht zugelassen; Forschungspeptid bzw. Bioregulator. Eine Arzneimittelzulassung ist auch anderswo nicht dokumentiert; in Russland registriert sind nur die verwandten Prostata-Extrakte Prostatilen und Vitaprost. Nicht namentlich auf der WADA-Liste.',
    sources: [
      { title: 'Khavinson VKh, Malinin VV, Grigoriev EI – Patent EP1353939: Tetrapeptid Lys-Glu-Asp-Pro zur Regulation der Prostatafunktion (Tier- und Patientendaten)', url: 'https://patents.google.com/patent/EP1353939B1/en' },
      { title: 'Dzhokhadze TA et al., Georgian Med News 2012 – Prostamax lockert Chromatin in Lymphozyten alter Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/23221144/' },
      { title: 'Khavinson V et al., Int J Mol Sci 2022 – Transport ultrakurzer Peptide; KEDP-Prostatafunktion nur per Patent belegt', url: 'https://pubmed.ncbi.nlm.nih.gov/35887081/' },
      { title: 'Khavinson VKh, Neuro Endocrinol Lett 2002 – Peptides and Ageing (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/12374906/' }
    ],
    community: [
      { title: 'Verschreibungspflichtige Behandlung von BPH/Prostatitis: über Urologen abklären', url: 'https://www.gelbe-liste.de/krankheiten/benigne-prostatahyperplasie' },
      { title: 'biolabshop (Research – nur Grauzone, keine Empfehlung)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [
      { title: 'Prostamax & Prostagen: Bioregulator für die Prostata im Faktencheck', audio: 'audio/prostamax-podcast.mp3', spotify: '4N70kUgdRUuMwgCYi9TbvG', lengthLabel: '≈ 11 Min · KI-generiert (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 28). KI-generierte deutsche Folge, inspiriert von mehreren Podcasts und mit Fachrecherche ergänzt. Ordnet das Khavinson-Bioregulator-Konzept (epigenetische „Verjüngung" der Prostata) gegen die dünne Human-Evidenz ein und betont die besondere Gefahr der Selbstbehandlung: PSA/Prostatakrebs-Früherkennung nicht verschleiern. Reine Information, kein medizinischer Rat, keine Dosier- oder Anwendungsempfehlung – Prostatabeschwerden gehören urologisch abgeklärt.', sources: [
          { title: 'Khavinson – Peptide bioregulators (Gerontologie)', url: 'https://pubmed.ncbi.nlm.nih.gov/12374906/' },
          { title: 'Prostamax Bioregulator – Übersicht & Einordnung', url: 'https://muscleandbrawn.com/peptides/prostamax-bioregulator/' }
        ] }
    ],
    filterCat: 'Sonstige'
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
      'Aus derselben Forschung in Arizona stammen zwei zugelassene Medikamente: Bremelanotid (PT-141/Vyleesi, USA 2019) ist ein Abkömmling von Melanotan 2; Afamelanotid (Scenesse, EU 2014) geht dagegen auf das ältere Melanotan 1 zurück',
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
      { title: 'BfArM, Pressemitteilung 14/10 (28.10.2010) – Warnung vor melanotanhaltigen Produkten', url: 'https://www.bfarm.de/SharedDocs/Pressemitteilungen/DE/2010/pm14-2010.html' },
      { title: 'Minder et al., Clin Pharmacokinet 2017 – Afamelanotid, 1980 als erstes alpha-MSH-Analogon synthetisiert', url: 'https://pubmed.ncbi.nlm.nih.gov/28063031/' }
    ],
    community: [
    ],
    podcasts: [
      { title: 'Melanotan 2: Das Bräunungs-Peptid im Faktencheck', audio: 'audio/melanotan-2-podcast.mp3', spotify: '0orxbyC3Wcg2ipQyuEe9Ck', lengthLabel: '≈ 12 Min · KI-Podcast (Paul & Paula)', note: 'Der Podcast von Paul Höser (Folge 39) · mit Paul & Paula. Frische, positive KI-Dialogfolge über das berühmteste Bräunungs-Peptid der Welt: von der Hautkrebs-Präventions-Idee der University of Arizona über den legendären Selbstversuch bis zu zwei zugelassenen Medikamenten-Nachfahren (Afamelanotid/Scenesse und PT-141/Vyleesi). Dazu die Humandaten (Dorr, Life Sciences 1996: Bräunung ohne Sonne; Wessells, J Urol 1998), die drei Effekte über MC1R/MC4R – Bräune, Appetit, Libido – und die ehrliche Schattenseite: Muttermal-Veränderungen (Langan, JAAD 2010), Übelkeit, Graumarkt. Mit der typischen berichteten Anwendung (ohne Empfehlung). Reine Information, keine Dosier- oder Anwendungsempfehlung.', sources: [
          { title: 'Dorr et al., Life Sciences 1996 – erste Humanstudie: Bräunung ohne Sonne', url: 'https://pubmed.ncbi.nlm.nih.gov/8637402/' },
          { title: 'Wessells et al., J Urol 1998 – Erektionen bei Männern mit ED', url: 'https://pubmed.ncbi.nlm.nih.gov/9679884/' },
          { title: 'Langan et al., JAAD 2010 – Melanotan-assoziierte Nävusveränderungen', url: 'https://pubmed.ncbi.nlm.nih.gov/20545686/' }
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
    moa: 'In seneszenten Zellen bindet das Protein FOXO4 den Tumorsuppressor p53 und hält ihn im Zellkern fest, wodurch die Selbstzerstörung dieser Zellen blockiert wird. FOXO4-DRI ist ein aus D-Aminosäuren in umgekehrter Reihenfolge aufgebautes, gegen Abbau stabilisiertes Peptid mit angehängtem Zellpenetrationsteil, das die FOXO4-p53-Bindung stört. p53 wird aus dem Kern gedrängt und leitet in seneszenten Zellen die Apoptose ein, während teilungsfähige Zellen weitgehend verschont bleiben. 2025 wurde die Bindung an die Transaktivierungsdomäne von p53 per Kernspinresonanz strukturell aufgeklärt. Sämtliche Wirkbelege stammen aus Zellkultur, menschlichem Gewebe ex vivo und Tiermodellen.',
    benefits: [
      'Beseitigte in Mausmodellen selektiv seneszente Zellen und stellte bei alten und schnell alternden Mäusen Fitness, Felldichte und Nierenfunktion wieder her; schützte vor Doxorubicin-Schäden (Baar 2017, Cell).',
      'In unabhängigen Tiermodellen wiederholt: weniger altersbedingter Testosteronmangel (Zhang 2020), bessere Spermatogenese (Li 2024), gebremste Lungenfibrose (Han 2022), langsamere Alterung der Aorta (Hu 2025).',
      'Wirkt auch an menschlichen Zellen ex vivo selektiv: entfernte mehr als die Hälfte stark vermehrter Knorpelzellen, frische kaum (Huang 2021); Apoptose seneszenter Keloid-Fibroblasten (Kong 2025).',
      'Zielstruktur benannt und Bindung an p53 strukturell aufgeklärt (Bourgeois 2025, NMR).',
      'D-Retro-Inverso-Bauweise schützt das Peptid vor enzymatischem Abbau.'
    ],
    risks: [
      'Keine einzige Humanstudie, keine registrierte klinische Prüfung, keine Pharmakokinetik- oder Toxikologiedaten am Menschen (Übersicht Mateescu 2026).',
      'Eingriff in den p53-Weg, den wichtigsten Tumorsuppressor; die p53-abhängige Tumorüberwachung gilt als ungeprüft.',
      'Weniger Seneszenz heißt nicht automatisch bessere Funktion: In menschlichen Knorpelzellen wurde die Knorpelbildung nicht besser (Huang 2021).',
      'Nicht zugelassen; Graumarktware in Identität und Reinheit ungeprüft.'
    ],
    status: 'In DE/EU nicht zugelassen; rein experimentelle Forschungssubstanz.',
    sources: [
      { title: 'Baar MP et al., Cell 2017 – Gezielte Apoptose seneszenter Zellen durch FOXO4-DRI (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/28340339/' },
      { title: 'Huang Y et al., Front Bioeng Biotechnol 2021 – FOXO4-DRI entfernt seneszente menschliche Knorpelzellen in vitro', url: 'https://pubmed.ncbi.nlm.nih.gov/33996787/' },
      { title: 'Zhang C et al., Aging 2020 – FOXO4-DRI mildert altersbedingten Testosteronmangel bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/31959736/' },
      { title: 'Bourgeois B et al., Nat Commun 2025 – Struktur der Bindung von FOXO4-DRI an p53', url: 'https://pubmed.ncbi.nlm.nih.gov/40593617/' },
      { title: 'Mateescu DM et al., Antioxidants 2026 – Übersicht: präklinisch senolytisch, klinisch nicht validiert', url: 'https://pubmed.ncbi.nlm.nih.gov/42510573/' }
    ],
    community: [
    ],
    filterCat: 'Longevity'
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
    status: 'Dasatinib ist in DE bei Leukämien zugelassen (Sprycel). Für die senolytische Anwendung gegen Alterungsprozesse gibt es keine Zulassung. Eine Off-Label-Verordnung durch eine Ärztin oder einen Arzt ist trotzdem möglich; sie liegt in ärztlicher Verantwortung und Haftung und ist keine Kassenleistung. Was in der Szene kursiert, kommt oft aus dem Ausland und ohne ärztliche Begleitung. Quercetin allein ist frei verkäuflich, ist aber nicht das Protokoll.',
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
          { title: 'Rodriguez P et al., Radiology 2016 – Methylenblau & Hirn-Bildgebung', url: 'https://pubmed.ncbi.nlm.nih.gov/27351678/' }
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
    moa: 'Acarbose hemmt im Darm das Enzym Alpha-Glucosidase, das komplexe Kohlenhydrate spaltet. Dadurch wird Zucker langsamer und geringer aufgenommen, Blutzuckerspitzen nach dem Essen werden abgeflacht. Im Interventions-Testing-Programm (ITP) verlängerte Acarbose die Lebensspanne von Mäusen – vermutlich über die geglättete Glukose-/Insulinbelastung und Effekte auf das Darmmikrobiom. Ein Mikrobiom-Beitrag ist bei Mäusen plausibel (mehr kurzkettige Fettsäuren wie Propionat, die die Lebensdauer mit vorhersagten); beim Menschen sind die Daten uneinheitlich: In einer vierwöchigen Crossover-Studie bei Prädiabetes (40 Auswertbare) veränderte Acarbose die Darmflora deutlich, unter anderem mit mehr Laktobazillen, in einer zweiwöchigen Crossover-Studie bei 15 Menschen mit Typ-2-Diabetes dagegen kaum.',
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
      { title: 'Chiasson JL et al., Lancet 2002 – STOP-NIDDM', url: 'https://pubmed.ncbi.nlm.nih.gov/12086760/' },
      { title: 'Zhang X et al., Diabetes Ther 2017 – Acarbose verändert die Darmflora bei Prädiabetes (Crossover, 4 Wochen)', url: 'https://pubmed.ncbi.nlm.nih.gov/28130771/' },
      { title: 'Dalsgaard NB et al., Endocr Connect 2024 – 2 Wochen Acarbose ohne wesentlichen Effekt auf die Darmflora bei Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/38842918/' }
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
      { title: 'Perkovic V et al., N Engl J Med 2019 – CREDENCE: Canagliflozin bei Typ-2-Diabetes und Nierenerkrankung (4.401 Teilnehmer)', url: 'https://pubmed.ncbi.nlm.nih.gov/30990260/' },
      { title: 'Bolds Media – Latest Longevity Research 2026', url: 'https://www.boldsmedia.com/latest-longevity-researches/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ]
  },
  {
    id: 'glp-3',
    name: 'GLP-3',
    altNames: 'Spitzname für Retatrutid (LY3437943), GLP-1/GIP/Glucagon-Triagonist',
    class: 'Experimenteller Dreifach-Rezeptoragonist (GLP-1, GIP, Glucagon)',
    emoji: '⚗️',
    short: 'GLP-3 ist kein Hormon, sondern der Szene-Spitzname für Retatrutid, den Dreifach-Agonisten an GLP-1-, GIP- und Glucagon-Rezeptor, dessen Studienwirkstoff bis zu 24,2 Prozent Gewicht in 48 Wochen abbaute. Die als GLP-3 verkaufte Graumarktware erreichte in einer ersten, nicht begutachteten Alltagsauswertung im Mittel nur 7,2 Prozent nach 6 bis 12 Monaten, weniger als halb so viel wie bei Studienteilnehmern.',
    moa: 'Unter dem Namen GLP-3 wird in der Regel Retatrutid angeboten, ein Peptid, das gleichzeitig an GLP-1-, GIP- und Glucagon-Rezeptoren wirkt; ein Hormon GLP-3 gibt es nicht, aus Proglucagon entstehen nur Glucagon, GLP-1, GLP-2 und Oxyntomodulin. Über den GLP-1-Rezeptor werden Insulinsekretion, Sättigung und verzögerte Magenentleerung angesprochen, die GIP-Komponente ergänzt die Insulinantwort. Die Glucagon-Rezeptor-Aktivierung soll Energieverbrauch und Fettabbau in der Leber steigern. Der Beitrag der einzelnen Arme ist beim Menschen nicht getrennt untersucht. Die als GLP-3 gehandelte Graumarktware ist weder chargenkontrolliert noch identisch mit dem Studienwirkstoff.',
    benefits: [
      'Studienwirkstoff Retatrutid: bis zu 24,2 % Gewichtsverlust nach 48 Wochen gegenüber 2,1 % unter Placebo (Jastreboff 2023, Phase 2, 338 Teilnehmer); in TRIUMPH-1 laut Hersteller bis zu 28,3 % nach 80 Wochen (2.339 Teilnehmer, noch nicht begutachtet); TRIUMPH-2 (1.152 Erwachsene mit Typ-2-Diabetes und Übergewicht oder Adipositas) bis zu 20,8 % gegenüber 4,0 % und TRIUMPH-3 (1.949 Erwachsene mit schwerer Adipositas und Herz-Kreislauf-Erkrankung) bis zu 22,6 % gegenüber 3,2 %, jeweils nach 80 Wochen (Herstellerangabe Juli 2026).',
      'Leberfett nach 24 Wochen um bis zu 82,4 % gesenkt, normales Leberfett bei bis zu 86 % (Sanyal 2024, 98 Teilnehmer mit Fettleber).',
      'Blutzuckersenkung bei Typ-2-Diabetes in einer Phase-3-Studie bestätigt (Bajaj 2026, 537 Teilnehmer, 40 Wochen).',
      'Auch Graumarktware führt im Alltag zu Gewichtsverlust: im Mittel 7,2 % nach 6 bis 12 Monaten, ähnlich wie Tirzepatid mit 7,7 %, aber weniger als die Hälfte der 15,5 % bei Studienteilnehmern (Murugadoss 2026, Preprint).'
    ],
    risks: [
      'Als GLP-3 gehandelte Ware ist ungeprüft; über 14 Graumarkt-Peptide, darunter Retatrutid, verfehlten 41,6 bis 71,1 % grundlegende Qualitätskriterien (Mendias 2026, Preprint). Die FDA warnt vor Fälschungen mit falschem oder fehlendem Wirkstoff.',
      'Studienwirkstoff: Übelkeit bis 42,4 %, Abbruch wegen Nebenwirkungen bis 11,3 %, Missempfindungen der Haut bis 12,5 % (TRIUMPH-1, Herstellerangabe); Pulsanstieg (Jastreboff 2023).',
      'Graumarkt-Nutzer hatten in Patientenakten mehr Herz-Kreislauf- und neuropsychiatrische Beschwerden als Nutzer zugelassener Mittel (Murugadoss 2026, Preprint); Fallbericht schwere Ketose mit Nierenversagen bei Typ-1-Diabetes (Branine 2026).',
      'Nirgends zugelassen; in DE kein verkehrsfähiges Arzneimittel; im Sport verboten (WADA S0).'
    ],
    status: 'Retatrutid ist in DE/EU und den USA nicht zugelassen; Eli Lilly plant den Zulassungsantrag bei der FDA für Q1 2027. Als GLP-3 verkaufte Ware ist in DE kein verkehrsfähiges Arzneimittel. FDA: Retatrutid darf nicht in Rezepturen verwendet werden, Warnbriefe an Anbieter (Stand 01.09.2026). Im Sport jederzeit verboten (WADA 2026, S0 nicht zugelassene Substanzen).',
    sources: [
      { title: 'Jastreboff AM et al., N Engl J Med 2023 – Retatrutid Phase 2 bei Adipositas', url: 'https://pubmed.ncbi.nlm.nih.gov/37366315/' },
      { title: 'Sanyal AJ et al., Nat Med 2024 – Retatrutid senkt Leberfett', url: 'https://pubmed.ncbi.nlm.nih.gov/38858523/' },
      { title: 'Eli Lilly, Mitteilung zu TRIUMPH-2 und TRIUMPH-3, 23.07.2026', url: 'https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-successful-two-additional' },
      { title: 'Murugadoss K et al., Preprint 2026 – Graumarkt-Retatrutid wirkt schwächer, mehr Herz-Kreislauf-Symptome', url: 'https://www.preprints.org/manuscript/202608.1193' },
      { title: 'Sehgal NKR et al., medRxiv 2026 – Selbstberichtete Nebenwirkungen bei Reddit-Nutzern', url: 'https://doi.org/10.64898/2026.05.28.26352819' },
      { title: 'FDA – Concerns with Unapproved GLP-1 Drugs (Retatrutid, Forschungsware), Stand 01.09.2026', url: 'https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss' }
    ],
    community: [
    ],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'melanotan-1',
    name: 'Melanotan 1 (Afamelanotide / Scenesse)',
    altNames: 'Afamelanotide, MT-1, Scenesse',
    class: 'Melanocortin-Agonist mit Schwerpunkt MC1R (als Scenesse zugelassen)',
    emoji: '🌤️',
    short: 'Der vor allem am MC1R wirkende Verwandte von Melanotan 2: regt die Bildung des Schutzpigments Eumelanin an und ist als Afamelanotid (Scenesse) ein zugelassenes Arzneimittel – allerdings nur zur Vorbeugung von Lichtschäden bei der seltenen Erkrankung EPP.',
    moa: 'Afamelanotid ist ein Analogon des alpha-MSH mit 13 Aminosäuren, von denen 2 ausgetauscht sind (NDP-alpha-MSH). Der Austausch macht das Peptid serumstabil und im Adenylatzyklase-Test 26-mal wirksamer als alpha-MSH (Sawyer et al., PNAS 1980). Es spricht vor allem den Melanocortin-1-Rezeptor der Pigmentzellen an und regt die Bildung von Eumelanin an, das die Lichtdurchdringung der Haut verringert; UV-Schaden ist dafür nicht nötig. Streng selektiv ist es nicht: Im Labor aktiviert NDP-alpha-MSH auch die Rezeptoren MC3R, MC4R (Appetit, Erektion) und MC5R (Haskell-Luevano et al. 1997); Appetit- und Erektionswirkungen wie bei Melanotan 2 stehen bei Afamelanotid klinisch aber nicht im Vordergrund. Bei erythropoetischer Protoporphyrie (EPP) filtert das zusätzliche Eumelanin genau jenen sichtbaren Lichtanteil, der die phototoxischen Attacken auslöst. Als Implantat mit 16 mg Wirkstoff, alle 2 Monate von einem Spezialzentrum gesetzt, ist es für diese Indikation zugelassen.',
    benefits: [
      'In zwei randomisierten Phase-3-Studien (74 Patienten EU, 94 USA) mehr schmerzfreie Zeit in direkter Sonne: 69,4 gegenüber 40,8 Stunden nach 6 Monaten und 6,0 gegenüber 0,8 Stunden nach 9 Monaten.',
      'In der EU-Studie 77 statt 146 phototoxische Reaktionen; die Lebensqualität stieg in beiden Studien.',
      'Echtes zugelassenes Arzneimittel für EPP: EU seit 22.12.2014, USA seit 08.10.2019 auf Grundlage von 3 Studien mit 244 Patienten an 22 Zentren.',
      'Langzeitdaten aus der Versorgung: 115 Patienten, 1.023 Implantate, bis zu 8 Jahre; Lebensqualität von 31 auf 74 Prozent des Maximums.',
      'Wirkt vor allem am MC1R; Priapismus oder starke Appetitwirkung wie bei Melanotan 2 stehen nicht im Vordergrund, auch wenn es im Labor ebenfalls MC3R, MC4R und MC5R aktiviert.',
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
      { title: 'Levine et al., JAMA 1991 – Hautbräunung durch NDP-alpha-MSH, placebokontrolliert', url: 'https://pubmed.ncbi.nlm.nih.gov/1658407/' },
      { title: 'Haskell-Luevano et al., J Med Chem 1997 – NDP-alpha-MSH aktiviert alle Melanocortin-Rezeptoren außer MC2R', url: 'https://pubmed.ncbi.nlm.nih.gov/9216831/' }
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
    short: 'Ein Antikörper, der zugleich Fett abbaut und Magermasse aufbaut: löst die Myostatin-/Aktivin-Bremse. Mit Semaglutid mehr Gewichtsverlust bei weitgehend erhaltener Magermasse – mehr Muskelfunktion zeigte sich in Studien an Älteren aber nicht.',
    moa: 'Bimagrumab blockiert den Activin-Typ-II-Rezeptor (ActRII) und hebt damit die hemmende Wirkung von Myostatin und Activin auf das Muskelwachstum auf. Ergebnis: Muskelmasse nimmt zu, während gleichzeitig Fettmasse abnimmt. In Studien (u. a. in Kombination mit Semaglutid) förderte es einen muskelerhaltenden Fettabbau – genau das Problem, das reine GLP-1-Mittel haben.',
    benefits: [
      'Weniger Fett, mehr Magermasse – konsistent in mehreren randomisierten Studien (bei Typ-2-Diabetes: Fettmasse −20,5 Prozent, Magermasse +3,6 Prozent über 48 Wochen)',
      'Mit Semaglutid kombiniert mehr Gewichtsverlust als Semaglutid allein (17,8 gegenüber 14,2 kg), Magermasse weitgehend erhalten',
      'Senkt bei Typ-2-Diabetes den Langzeitblutzucker HbA1c',
      'Herzmuskelmasse und Pumpfunktion blieben in einer Studie an gesunden Älteren über 6 Monate unverändert'
    ],
    risks: [
      'Nicht zugelassen (Phase 2); nur in Studien erhältlich',
      'Häufig Muskelkrämpfe, Durchfall, Akne; deutlich mehr Therapieabbrüche als unter Placebo',
      'Mehr Masse ist nicht mehr Funktion: In Studien zu Sarkopenie, nach Hüftfraktur und bei Einschlusskörpermyositis (RESILIENT) besserten sich Gehen und Körperfunktion nicht stärker als unter Placebo',
      'LDL-Cholesterin stieg in einer Meta-Analyse; Langzeitsicherheit offen',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S4.3)'
    ],
    status: 'Klinische Entwicklung (Phase 2, u. a. mit Semaglutid). Nicht zugelassen. Auf der WADA-Liste ausdrücklich genannt.',
    sources: [
      { title: 'Heymsfield SB et al., JAMA Netw Open 2021 – Typ-2-Diabetes, 75 Teilnehmer, 48 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/33439265/' },
      { title: 'Heymsfield SB et al., Nat Med 2026 – Bimagrumab plus Semaglutid, 507 Teilnehmer', url: 'https://pubmed.ncbi.nlm.nih.gov/41772149/' },
      { title: 'Rooks D et al., JAMA Netw Open 2020 – Sarkopenie', url: 'https://pubmed.ncbi.nlm.nih.gov/33074327/' },
      { title: 'Hofbauer LC et al., Lancet Healthy Longev 2021 – nach Hüftfraktur', url: 'https://pubmed.ncbi.nlm.nih.gov/36098133/' },
      { title: 'Shao C et al., Diabetes Obes Metab 2026 – Meta-Analyse', url: 'https://pubmed.ncbi.nlm.nih.gov/42530342/' }
    ],
    community: [
      { title: 'Iron Mike Biohacking – Kanal', url: 'https://www.youtube.com/@ironmikebiohacking' }
    ],
    filterCat: 'Exercise'
  },
  {
    id: 'adipotide',
    name: 'Adipotide (FTPP)',
    altNames: 'Prohibitin-TP01, FTPP',
    class: 'Pro-apoptotisches Peptid (zielt auf Fettgewebe-Blutgefäße)',
    emoji: '🔥',
    short: 'Ein hochexperimentelles „Fett-weg"-Peptid, das die Blutversorgung des weißen Fettgewebes angreift – bei adipösen Affen 7,4 bis 14,7 Prozent Gewichtsverlust in 4 Wochen, dazu eine dosisabhängige Nierenwirkung. Keine veröffentlichte Humanstudie; die einzige Phase-1-Studie wurde nach 4 Teilnehmern abgebrochen.',
    moa: 'Adipotide besteht aus einem Adressmotiv, das an das Protein Prohibitin an den Gefäßen des weißen Fettgewebes bindet, und einem zelltötenden Peptid, das dort den programmierten Zelltod auslöst. Ohne Blutversorgung schrumpft das Fettgewebe. Bei adipösen Affen führte das zu deutlichem Gewichts- und Fettverlust, bei schlanken Tieren nicht. Ob der Gewichtsverlust wirklich von der Gefäßzerstörung kommt, ist offen: Die Tiere fraßen weniger, der Energieverbrauch blieb bei Nagern unverändert, und ein Kommentar in derselben Zeitschrift führt den Effekt auf die Futteraufnahme zurück.',
    benefits: [
      'Im Primatenversuch gezielter Fettverlust: 38,7 Prozent weniger Körperfett gegenüber 14,8 Prozent bei Kontrollen (15 Rhesusaffen, 4 Wochen).',
      'Insulinantwort im Glukosetoleranztest bei 2 behandelten Affen um 61,4 und 63,5 Prozent gesunken.',
      'Zielstruktur belegt: Prohibitin ist als Gefäßmarker des weißen Fettgewebes charakterisiert und kommt auch in menschlichem weißem Fett vor.',
      'Wirkte im Tier nur bei Übergewicht – schlanke Tiere verloren kein Gewicht.'
    ],
    risks: [
      'Ernst: in der Primatenstudie dosisabhängige Störung der Nierenkanälchen (Kreatinin, Eiweiß und Zucker im Urin), größtenteils rückbildungsfähig; beim verwandten Molekül BMTP-11 war das am Menschen die dosislimitierende Nebenwirkung.',
      'Keine begutachtete Humanstudie; die einzige registrierte Phase-1-Studie wurde mit 4 Teilnehmern abgebrochen und veröffentlichte keine Ergebnisse.',
      'Nicht zugelassen, nicht verkehrsfähig; Graumarkt-Ware ungeprüft. Nach Klasse S0 der WADA-Liste 2026 im Sport verboten.',
      'Kein Stoff für Selbstversuche; Prohibitin kommt auch außerhalb des Fettgewebes vor.'
    ],
    status: 'Präklinisch; nicht zugelassen. Einzige Humanstudie (NCT01262664) abgebrochen. Sicherheitsbedenken (Niere).',
    sources: [
      { title: 'Barnhart KF et al., Sci Transl Med 2011 – Adipotide bei adipösen Primaten', url: 'https://pubmed.ncbi.nlm.nih.gov/22072637/' },
      { title: 'Kolonin MG et al., Nat Med 2004 – Grundlagenarbeit zum Prohibitin-Motiv', url: 'https://pubmed.ncbi.nlm.nih.gov/15133506/' },
      { title: 'Criscione L, Sci Transl Med 2012 – Kommentar zur Primatenstudie', url: 'https://pubmed.ncbi.nlm.nih.gov/22539771/' },
      { title: 'ClinicalTrials.gov NCT01262664 – abgebrochene Phase-1-Studie', url: 'https://clinicaltrials.gov/study/NCT01262664' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Stoffwechsel'
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
    short: 'Das vollständige Reparatur-Protein, aus dem TB-500 nur ein Fragment ist. Anders als TB-500 ist es am Menschen geprüft: als Augentropfen, Gel und Infusion nach Herzinfarkt, mit positiven Signalen, aber ohne klar gewonnenen Hauptendpunkt.',
    moa: 'Thymosin Beta-4 (Tβ4) ist ein körpereigenes 43-Aminosäuren-Protein, das G-Aktin bindet und so Zellwanderung, Gefäßneubildung und Geweberegeneration fördert sowie Entzündung und Narbenbildung dämpft. Das populäre „TB-500" ist nur die aktive Kernsequenz; die eigentlichen klinischen Studien (Herz, Haut, Hornhaut) liefen oft mit dem kompletten Tβ4.',
    benefits: [
      'Bindet Aktin und fördert Zellwanderung; im Tiermodell bessere Heilung von Haut, Hornhaut und Herzmuskel',
      'Kleine kontrollierte Humanstudien: trockenes Auge, nicht heilende Hornhautdefekte, Kopfhautekzem, Herzinfarkt – Verbesserungen in Nebenendpunkten oder Teilgruppen',
      'Phase-1-Studie an gesunden Freiwilligen: Infusion über bis zu 10 Tage ohne schwerwiegende Ereignisse',
      'Deutlich mehr Humandaten als das TB-500-Fragment'
    ],
    risks: [
      'Nicht zugelassen; keine Humandaten zu Sehnen, Bändern, Muskeln oder Longevity',
      'Keine Studie hat ihren Hauptendpunkt klar gewonnen; keine Langzeitdaten',
      'Fördert Zellwanderung und Gefäßbildung; im Mausmodell mehr Metastasen bei Überproduktion in Tumorzellen – bei bekannter oder vermuteter Tumorerkrankung nicht ohne ärztliche Rücksprache',
      'Graumarkt-Ware: Risiko von Verunreinigung und falscher Dosierung',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S2.3)'
    ],
    status: 'In der EU nicht zugelassen; Augentropfen in klinischer Entwicklung, rekombinante Form in China klinisch untersucht. Im Graumarkt als Forschungspeptid. Im Sport jederzeit verboten.',
    sources: [
      { title: 'Goldstein AL et al., Expert Opin Biol Ther 2012 – Thymosin β4: Übersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/22074294/' },
      { title: 'Sosne G, Ousler GW, Clin Ophthalmol 2015 – trockenes Auge, Phase 2', url: 'https://pubmed.ncbi.nlm.nih.gov/26056426/' },
      { title: 'Sosne G et al., Int J Mol Sci 2022 – neurotrophe Keratopathie, Phase 3', url: 'https://pubmed.ncbi.nlm.nih.gov/36613994/' },
      { title: 'Zhang Y et al., Cardiovasc Res 2025 – randomisierte Studie nach Herzinfarkt', url: 'https://pubmed.ncbi.nlm.nih.gov/41229390/' },
      { title: 'Wang X et al., J Cell Mol Med 2021 – Phase 1 an Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/34346165/' }
    ],
    community: [
      { title: 'biolabshop – Forschungspeptide', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Immun'
  },
  {
    id: 'argireline',
    name: 'Argireline (Acetyl-Hexapeptid-8)',
    altNames: 'Acetyl-Hexapeptide-3/8, „Botox aus der Creme"',
    class: 'Kosmetisches Peptid (SNARE-Modulator, topisch)',
    emoji: '💆',
    short: 'Das bekannteste Anti-Falten-Peptid in Seren: aufgetragen in kleinen Studien messbar weniger Hautrauheit um die Augen, gut verträglich – die Muskelwirkung am Menschen ist aber nicht belegt.',
    moa: 'Argireline ist dem N-terminalen Abschnitt des Proteins SNAP-25 nachgebaut. In Zellsystemen hemmen Peptide dieser Art die Bildung des SNARE-Komplexes und damit die kalziumabhängige Ausschüttung von Botenstoffen – dieselbe Maschinerie, an der Botulinumtoxin ansetzt, aber auf anderem Weg. Ob das Peptid aufgetragen die neuromuskulären Endplatten überhaupt erreicht, ist offen: Es ist wasserliebend und relativ groß, die Hornschicht fettliebend. Eine Dämpfung der Mimikmuskulatur am Menschen ist nicht gezeigt. Angewendet wird es topisch in Cremes und Seren.',
    benefits: [
      'Randomisiert und placebokontrolliert bei Fältchen um die Augen: 60 Teilnehmer, 4 Wochen, alle Rauheitsparameter gesunken (objektive Messung an Silikonabdrücken).',
      'Als Zusatz zu einem Mikronadelpflaster bessere Faltenwerte als das Pflaster allein (52 Frauen, doppelblind, halbseitig).',
      'Nicht-invasiv und in allen Studien gut verträglich: keine schweren Nebenwirkungen, keine Reizungen.',
      'Frei verkäuflich in Kosmetik; formal bewertet und bis 0,005 Prozent als sicher eingestuft.'
    ],
    risks: [
      'Effekt klein und nicht durchgängig: ein doppelblinder Halbseitenvergleich (19 Frauen) fand keinen Unterschied zur Seite ohne Wirkstoff.',
      'Dringt nur begrenzt in die Haut ein; die Muskelwirkung am Menschen ist nicht belegt, der Botox-Vergleich trägt nicht.',
      'Viele positive Studien prüfen Fertigprodukte mit mehreren Wirkstoffen – der Beitrag des Peptids ist daraus nicht ableitbar.',
      'Gespritzt ohne jede Wirksamkeitsstudie am Menschen; im Tiermodell ohne nachweisbare Gewebewirkung, dazu ein Fallbericht über eine Infektion mit Mycobacterium abscessus nach Gesichtsinjektionen.'
    ],
    status: 'Kosmetischer Wirkstoff (frei verkäuflich in Hautpflege). Als Injektionslösung kein zugelassenes Arzneimittel.',
    sources: [
      { title: 'Wang Y et al., Am J Clin Dermatol 2013 – randomisiert, placebokontrolliert', url: 'https://pubmed.ncbi.nlm.nih.gov/23417317/' },
      { title: 'An JH et al., Ann Dermatol 2019 – doppelblinde Halbseitenstudie', url: 'https://pubmed.ncbi.nlm.nih.gov/33911590/' },
      { title: 'Henseler H, GMS Interdiscip Plast Reconstr Surg DGPW 2023 – Halbseitenvergleich ohne Effekt', url: 'https://pubmed.ncbi.nlm.nih.gov/38024099/' },
      { title: 'Zdrada-Nowak J et al., Int J Mol Sci 2025 – Hautdurchdringung und Wirksamkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/40565185/' },
      { title: 'Aruan RR et al., J Clin Aesthet Dermatol 2023 – Vergleich mit Palmitoyl-Pentapeptid-4', url: 'https://pubmed.ncbi.nlm.nih.gov/36909866/' },
      { title: 'Johnson W et al., Int J Toxicol 2025 – Sicherheitsbewertung in Kosmetik', url: 'https://pubmed.ncbi.nlm.nih.gov/40673537/' }
    ],
    community: [
      { title: 'INCI/Kosmetik-Datenbank – Acetyl Hexapeptide-8', url: 'https://incidecoder.com/ingredients/acetyl-hexapeptide-8' }
    ],
    filterCat: 'Sonstige'
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
    short: 'Der Anti-Aging-Klassiker in Seren: ein Signalpeptid, das die Kollagenbildung anregen soll – mit der solidesten klinischen Studie aller Kosmetikpeptide (93 Frauen, 12 Wochen). Die gehört allerdings zum älteren Palmitoyl-Pentapeptid-4, nicht zu Matrixyl 3000.',
    moa: 'Matrixyl (Palmitoyl-Pentapeptid-4, die Sequenz KTTKS mit Palmitinsäure) ist ein Signalpeptid, das Bruchstücke abgebauten Kollagens nachahmt: Die Haut liest das als Reparaturbedarf. In Zellkultur bindet es an einen Zelloberflächenrezeptor, steigert Kollagen Typ I und III, bremst den Kollagenabbau und regt die Hyaluronsäure-Bildung an. Am Menschen gemessen ist bisher nur, dass die Peptide alle Schichten der Hornschicht erreichen – offenbar auf den Zelloberflächen und nicht in den Zellen. Ob sie die kollagenbildenden Zellen der Lederhaut erreichen, ist nicht gezeigt. Anwendung topisch in Seren und Cremes.',
    benefits: [
      'Doppelblind, placebokontrolliert, halbseitig: 93 Frauen, 12 Wochen, signifikant weniger Falten und feine Linien gegenüber derselben Creme ohne Peptid.',
      'Im direkten Vergleich (21 Frauen, 8 Wochen, Vorstudie) besser als Acetyl-Hexapeptid-3 und Placebo.',
      'Kollagenanregung in Zellkultur mehrfach reproduziert, liposomal verpackt stärker als freies Peptid und als Ascorbinsäure.',
      'Gut verträglich; in einer bioinformatischen Sicherheitsbewertung Sequenzähnlichkeit zu Hautproteinen ohne Toxin- oder Allergenhinweise.'
    ],
    risks: [
      'Effekt moderat und langsam (Wochen bis Monate); in einer Meta-Analyse über 19 RCTs war der Falteneffekt von Peptiden insgesamt klein.',
      'Die klinische Evidenz gehört zu Palmitoyl-Pentapeptid-4 – für Matrixyl 3000 (Palmitoyl-Tripeptid-1 plus Tetrapeptid-7) wurde keine eigene randomisierte Studie am Menschen gefunden.',
      'Rein kosmetisch/topisch; Konzentration und Formulierung im Produkt entscheidend, und zur gespritzten Anwendung gibt es keine Humanstudie.',
      'Kleine Sequenzänderungen drehen in Zellkultur die Wirkung um; oberhalb bestimmter Konzentrationen sinkt dort die Zellverträglichkeit.'
    ],
    status: 'Kosmetischer Wirkstoff (frei verkäuflich in Seren/Cremes). Als Injektionslösung kein zugelassenes Arzneimittel.',
    sources: [
      { title: 'Robinson LR et al., Int J Cosmet Sci 2005 – doppelblinde Halbseitenstudie, 93 Teilnehmerinnen', url: 'https://pubmed.ncbi.nlm.nih.gov/18492182/' },
      { title: 'Aruan RR et al., J Clin Aesthet Dermatol 2023 – Vergleich mit Acetyl-Hexapeptid-3', url: 'https://pubmed.ncbi.nlm.nih.gov/36909866/' },
      { title: 'Trzaska AH et al., Int J Pharm 2026 – Eindringen in die Hornschicht am Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/42790608/' },
      { title: 'Vitali A et al., Pharmaceutics 2024 – Kollagenbildung in Zellkultur', url: 'https://pubmed.ncbi.nlm.nih.gov/38399273/' },
      { title: 'Bjerke DL et al., Curr Res Toxicol 2026 – Sicherheitsbewertung von Kosmetikpeptiden', url: 'https://pubmed.ncbi.nlm.nih.gov/41953401/' }
    ],
    community: [
      { title: 'INCI/Kosmetik-Datenbank – Palmitoyl Pentapeptide-4', url: 'https://incidecoder.com/ingredients/palmitoyl-pentapeptide-4' }
    ],
    filterCat: 'Sonstige'
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
      'Auch in der gemeinnützig finanzierten Usona-Studie von 2023 mit 104 Menschen: 12,3 Punkte Unterschied zum aktiven Placebo Niacin nach 6 Wochen',
      'Wirkung tritt nach einer einzigen begleiteten Dosis ein, nicht erst nach Wochen täglicher Einnahme'
    ],
    risks: [
      'Bei psychiatrischer Vorgeschichte rund 4 Prozent schwerwiegende Ereignisse laut Metaanalyse von 2024 über mehr als 3500 Studienteilnehmer: Depressionsverschlechterung, suizidales Verhalten, Psychose, Krampfanfälle',
      'Anhaltende Wahrnehmungsstörung (HPPD) selten, aber real — in EPIsoDE 1 Fall nach der hohen Dosis, dazu mehr Suizidgedanken an Dosierungstagen',
      'Psilocin bindet auch an den Serotoninrezeptor vom Typ 2 B am Herzen, über den Fenfluramin und Pergolid Herzklappen geschädigt haben; für monatelanges Microdosing eine offene Frage',
      'Außerhalb von Studien schwankender Wirkstoffgehalt, kein geschützter Rahmen und keine Vorauswahl nach psychiatrischer Vorgeschichte'
    ],
    status: 'In Deutschland Anlage 1 des Betäubungsmittelgesetzes: nicht verkehrsfähig und nicht verschreibbar. Kein zugelassenes Präparat in der EU oder in den USA; der amerikanische Zulassungsantrag ist in Teilen eingereicht, Abschluss geplant für Ende 2026. Ausnahmen: Australien seit Juli 2023 durch eigens zugelassene Psychiater, Oregon seit 2023 und Colorado seit 2025 über lizenzierte Zentren, auf US-Bundesebene weiterhin verboten. In Deutschland seit Juli 2025 ein vom BfArM bestätigtes Härtefallprogramm für therapieresistente Depression an zwei Zentren (Mannheim, Berlin), keine Zulassung. In Tschechien ist die therapeutische Gabe seit Januar 2026 gesetzlich erlaubt, die Versorgung läuft erst an.',
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
  },
  {
    id: 'adamax',
    name: 'Adamax',
    altNames: 'Ac-MEHFPGP^AG-NH2, Adamax 1032, adamantyliertes Semax, N-Acetyl-Semax-Adamantan',
    class: 'Designer-Analogon von Semax (ACTH-Fragment) mit Adamantan-Endkappe, Nootropikum',
    emoji: '🧠',
    short: 'Semax mit den Endkappen des Forschungspeptids P021: vorn acetyliert, hinten ein Adamantan-Baustein, der das Molekül stabiler und hirngängiger machen soll – eine chemisch nachvollziehbare Idee auf einer tierexperimentell belegten Semax-Grundlage. Zu Adamax selbst gibt es keine Studie, der Entwickler ist unbekannt, und Anbieter verkaufen unter dem Namen unterschiedliche Moleküle.',
    moa: 'Der Kern ist die Semax-Kette Met-Glu-His-Phe-Pro-Gly-Pro, ein ACTH(4-7)-Fragment mit angehängtem Pro-Gly-Pro ohne nennenswerte Hormonwirkung; Semax hob bei Ratten das BDNF-Protein im Hippocampus maximal 1,4-fach und aktivierte dessen Rezeptor TrkB (Dolotov 2006). Adamax trägt zusätzlich die Endkappen von P021: eine Acetylgruppe am Anfang und einen adamantylierten Baustein mit Amid am Ende. Bei P021 wurde diese Adamantan-Kappe ausdrücklich angefügt, um die Blut-Hirn-Schranke besser zu überwinden (Kazim & Iqbal 2016). Die neurotrophe Wirkung von P021 schreiben dessen Entwickler dem CNTF-abgeleiteten Kern DGGL zu, den Adamax nicht enthält – es ist also ein Semax mit Schutzkappe, kein Semax-P21-Hybrid. Ob die Kappe bei Adamax Stabilität, Hirngängigkeit oder Wirkdauer tatsächlich verändert, wurde nie gemessen.',
    benefits: [
      'Baut auf Semax auf: einmalige Gabe hob bei Ratten das BDNF-Protein im Hippocampus maximal 1,4-fach (Dolotov et al. 2006, Tierversuch).',
      'Semax veränderte in einer kleinen placebokontrollierten Studie mit 24 Gesunden (14 Semax, 10 Placebo) nach 5 und 20 Minuten ein Ruhenetzwerk im Gehirn (Lebedeva et al. 2018, Surrogat per fMRT).',
      'Die Adamantan-Kappe ist ein etabliertes Werkzeug der Wirkstoffchemie für mehr Fettlöslichkeit; bei P021 diente sie ausdrücklich der Blut-Hirn-Schranken-Gängigkeit (Kazim & Iqbal 2016, Übersicht der Entwicklergruppe).',
      'Das Spenderpeptid P021 verbesserte bei normalen erwachsenen Mäusen Lernen und Gedächtnis und förderte die Neubildung von Nervenzellen (Li et al. 2010, Tierversuch).',
      'Anwenderberichte (unkontrolliert, Forum 2026): etwas energetisierender und fokussierender als NA-Semax; andere Anwender fanden die Wirkung ähnlich wie NA-Semax bei deutlich höherem Preis.'
    ],
    risks: [
      'Keine Studie zu Adamax selbst – weder am Menschen noch im Tier oder in Zellkultur; 0 Treffer in PubMed, 0 Einträge auf ClinicalTrials.gov, kein Patent gefunden.',
      'Uneinheitliche Struktur im Handel: Adamantan mal vorn, mal hinten, bei einem Chemikalienanbieter eine Sequenz ohne Adamantan-Baustein, bei einem Händler sogar Dihexa unter dem Namen Adamax.',
      'Keine Sicherheitsdaten: keine Toxikologie, keine Pharmakokinetik, keine Fallberichte; beim Ausgangsstoff Semax sieht die FDA (2026) mögliche Immunreaktionen durch Aggregate und Verunreinigungen.',
      'Die Semax-Grundlage ist überwiegend russisch; die FDA fand 2026 keine ausreichenden Belege für die geprüften Anwendungsgebiete.',
      'Im Sport als nicht zugelassene Substanz unter Gruppe S0 der WADA-Liste jederzeit verboten.'
    ],
    status: 'Nirgends als Arzneimittel zugelassen; in DE/EU weder Arzneimittel noch zugelassenes Nahrungsergänzungsmittel, Vertrieb als Forschungschemikalie. Neuseeland: Medsafe schlug im Juni 2025 vor, ACTH-Analoga einschließlich Adamax und Semax als verschreibungspflichtig einzustufen; das Klassifizierungskomitee vertagte am 23.07.2025, das Sekretariat empfahl danach die Einstufung. WADA 2026: nicht namentlich gelistet, als nicht zugelassene Substanz unter S0 jederzeit verboten.',
    sources: [
      { title: 'Wikipedia – Adamax: Struktur Ac-MEHFPGP^AG-NH2, Semax mit den Endkappen von Peptide 021', url: 'https://en.wikipedia.org/wiki/Adamax' },
      { title: 'Medsafe, Juni 2025 – Classification of Unscheduled Peptides: Adamax und Semax als ACTH-Analoga', url: 'https://www.medsafe.govt.nz/profs/class/Agendas/Agen74/5.7Peptides.pdf' },
      { title: 'Medsafe – Protokoll der 74. MCC-Sitzung vom 23.07.2025: Entscheidung zu Peptidgruppen vertagt', url: 'https://www.medsafe.govt.nz/profs/class/Minutes/2021-2025/74mccMin23July2025.htm' },
      { title: 'Dolotov et al., Brain Res 2006 – Semax hebt BDNF und TrkB im Hippocampus der Ratte', url: 'https://pubmed.ncbi.nlm.nih.gov/16996037/' },
      { title: 'Lebedeva et al., Bull Exp Biol Med 2018 – fMRT nach Semax gegen Placebo bei 24 Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/30225715/' },
      { title: 'Li et al., FEBS Lett 2010 – P021: neurotrophes Peptid mit Adamantan, Lernen und Neurogenese bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/20600002/' },
      { title: 'Kazim & Iqbal, Mol Neurodegener 2016 – Herleitung von P021, Adamantan-Glycin für die Blut-Hirn-Schranke', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4940708/' },
      { title: 'FDA, Briefing Pharmacy Compounding Advisory Committee 2026 – Bewertung von Semax', url: 'https://www.fda.gov/media/193348/download' },
      { title: 'ClinicalTrials.gov – keine eingetragene Studie zu Adamax', url: 'https://clinicaltrials.gov/search?term=Adamax' }
    ],
    community: [
      { title: 'biolabshop (Suche „Adamax")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'aicar',
    name: 'AICAR (Acadesin)',
    altNames: 'AICAr, AICA-Ribosid, Acadesin, 5-Amino-1-beta-D-ribofuranosyl-imidazol-4-carboxamid, ARA 100, GP 1 110',
    class: 'Purin-Nukleosid-Analogon, AMPK-Aktivator über das AMP-Mimetikum ZMP',
    emoji: '🏃',
    short: 'Das Ur-Trainings-Mimetikum: In der Zelle entsteht aus AICAR das AMP-Imitat ZMP, das den Energiesensor AMPK anschaltet; untrainierte Mäuse liefen 2008 daraufhin 44 Prozent weiter. Am Menschen ist der Stoff als Acadesin mit tausenden Patienten geprüft worden – allerdings am Herzen, wo er in Phase III keinen Vorteil zeigte; die Ausdauerwirkung selbst ist am Menschen nie untersucht.',
    moa: 'AICAR ist ein natürlicher Zwischenschritt der De-novo-Purinsynthese und im Blut und Urin gesunder Menschen vorhanden. In der Zelle wird es zu seinem Monophosphat ZMP phosphoryliert, das beide aktivierenden Wirkungen von AMP auf die AMP-aktivierte Proteinkinase (AMPK) nachahmt – allosterische Aktivierung und Förderung der Phosphorylierung –, ohne die ATP-, ADP- und AMP-Spiegel der Zelle zu verschieben (Corton et al. 1995). Folge in Zellversuchen: Fettsäure- und Sterolsynthese kommen fast zum Erliegen, die Lipolyse wird gebremst. In der klinischen Entwicklung als Acadesin stand dagegen ein zweiter Mechanismus im Vordergrund: die lokale Erhöhung der Adenosinverfügbarkeit in ischämischem Gewebe, ergänzt um eine Thrombozytenhemmung, die über ZMP in roten Blutkörperchen läuft (Bullough et al. 1994). Die Zuordnung zur AMPK ist unsicher: In beiden kontrollierten Humanstudien änderte sich die AMPK-Phosphorylierung im Muskel nicht messbar, und ZMP wirkt nachweislich auch AMPK-unabhängig, etwa über den Hippo-Signalweg (Višnjić et al. 2021, Philippe et al. 2018).',
    benefits: [
      'Untrainierte Mäuse liefen nach 4 Wochen AICAR 44 Prozent mehr: rund 23 Prozent länger und rund 44 Prozent weiter als Kontrolltiere (Narkar et al., Cell 2008, n = 15 bis 20, Gabe intraperitoneal).',
      'Bei 23 Monate alten Mäusen verhinderte eine 31-tägige Gabe den Abfall der Laufleistung, den die Kontrolltiere mit minus 24,5 Prozent zeigten, und erhöhte die tetanische Muskelkraft um 26,4 Prozent (Wilcox et al. 2025, Maus).',
      'Bei 29 gesunden Männern stieg die Glukoseaufnahme im Muskel nach 3 Stunden um das 2,1-Fache, unter Fahrradbelastung dagegen um das 4,7-Fache; Ganzkörper-Glukoseverwertung plus 7 Prozent (Cuthbertson et al. 2007, Mensch, Surrogatmarker).',
      'Bei 10 Männern mit Typ-2-Diabetes senkte eine Infusion die Glukoseabgabe der Leber, die Plasmaglukose und die freien Fettsäuren (Boon et al. 2008, Mensch, n = 10).',
      'Meta-Analyse von 5 randomisierten Studien mit 4043 Bypass-Patienten: perioperative Herzinfarkte minus 27 Prozent (OR 0,69; 95-Prozent-KI 0,51 bis 0,95), Herztod bis Tag 4 minus 50 Prozent (Mangano, JAMA 1997) – in der größeren Folgestudie nicht bestätigt.',
      'Verbesserte Wasserlabyrinth- und Motorikleistung bei jungen und 23 Monate alten Mäusen; bei Tieren mit muskelspezifisch mutierter AMPK blieb der Effekt aus (Kobilo et al. 2014, Maus).'
    ],
    risks: [
      'Harnsäure ist der Hauptmetabolit beim Menschen: vorübergehende Harnsäureanstiege in den Herzstudien, häufige Hyperurikämie in der Leukämie-Studie, die mit vorbeugendem Allopurinol behandelt wurde.',
      'In der Leukämie-Studie traten Nierenfunktionsstörungen, vorübergehende Anämie und Thrombozytopenie und ein klinisch bedeutsamer infusionsbedingter Blutdruckabfall auf; eine Studie bei MDS und AML wurde wegen schwerer Nierennebenwirkungen abgebrochen.',
      'Hemmt in menschlichem Vollblut die Thrombozytenaggregation und senkt akut die Glukoseabgabe der Leber – Kombinationen mit Blutverdünnern oder Blutzuckersenkern sind nicht untersucht.',
      'Orale Verfügbarkeit beim Menschen unter 5 Prozent, terminale Halbwertszeit 1,4 Stunden; alle klinischen Studien liefen als Infusion.',
      'Keine Humanstudie zu Ausdauer, Fettmasse oder Körperzusammensetzung; keine Langzeitdaten, am Menschen liegen Stunden bis wenige Gaben vor.',
      'Seit 2009 im Sport verboten, WADA-Liste 2026 Abschnitt S4.4.1 (AMPK-Aktivatoren), jederzeit; in Deutschland namentlich in der Anlage zum Anti-Doping-Gesetz, damit auch Erwerb und Besitz in nicht geringer Menge zum Zwecke des Dopings strafbar.'
    ],
    status: 'Kein zugelassenes Arzneimittel und kein Nahrungsergänzungsmittel in DE/EU/USA; für den Menschen nirgends zur Therapie freigegeben. Zwei EU-Orphan-Designations für Acadesin (EU/3/05/280 vom 27.05.2005, B-Zell-CLL; EU/3/11/881 vom 05.08.2011, Multiples Myelom) – keine Zulassung. Dopingliste: WADA 2026, S4.4.1 AMPK-Aktivatoren, jederzeit verboten; keine Ausnahmegenehmigung möglich. Deutschland: namentlich in der Anlage zum AntiDopG.',
    sources: [
      { title: 'Narkar et al., Cell 2008 – AICAR steigert die Laufleistung untrainierter Mäuse um 44 Prozent', url: 'https://pubmed.ncbi.nlm.nih.gov/18674809/' },
      { title: 'Corton et al., Eur J Biochem 1995 – ZMP als AMP-Mimetikum, Grundlage des Mechanismus', url: 'https://pubmed.ncbi.nlm.nih.gov/7744080/' },
      { title: 'Dixon et al., J Clin Pharmacol 1991 – Pharmakokinetik am Menschen, orale Verfügbarkeit unter 5 Prozent', url: 'https://pubmed.ncbi.nlm.nih.gov/2037706/' },
      { title: 'Cuthbertson et al., Diabetes 2007 – Glukoseaufnahme im Muskel gesunder Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/17513706/' },
      { title: 'Boon et al., Diabetologia 2008 – intravenöses AICAR bei Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/18709353/' },
      { title: 'Mangano, JAMA 1997 – Meta-Analyse von 5 Acadesin-Studien, 4043 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/9002496/' },
      { title: 'Newman et al., JAMA 2012 – RED-CABG, Phase III, Abbruch wegen Aussichtslosigkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/22782417/' },
      { title: 'Van Den Neste et al., Cancer Chemother Pharmacol 2013 – Phase I/II bei CLL', url: 'https://pubmed.ncbi.nlm.nih.gov/23228986/' },
      { title: 'Cluzeau et al., Int J Mol Sci 2019 – Acadesin bei MDS/AML, Phase I/II wegen schwerer Nierennebenwirkungen abgebrochen', url: 'https://pubmed.ncbi.nlm.nih.gov/31881723/' },
      { title: 'Višnjić et al., Cells 2021 – systematische Übersicht zu AMPK-unabhängigen Wirkungen', url: 'https://pubmed.ncbi.nlm.nih.gov/34064363/' },
      { title: 'Piper et al., Rapid Commun Mass Spectrom 2014 – Isotopenverhältnis zum Nachweis in Dopingkontrollen', url: 'https://pubmed.ncbi.nlm.nih.gov/24760559/' },
      { title: 'WADA – Prohibited List 2026, S4.4.1 Aktivatoren der AMPK', url: 'https://www.wada-ama.org/en/prohibited-list' },
      { title: 'Anlage zum deutschen Anti-Doping-Gesetz – AICAR unter den Stoffwechsel-Modulatoren', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'abaloparatid',
    name: 'Abaloparatid',
    altNames: 'Abaloparatide, Tymlos (USA), Eladynos (EU), PTHrP(1-34)-Analogon',
    class: 'Synthetisches PTHrP-Analogon, knochenaufbauendes Osteoporose-Medikament (zugelassen, verschreibungspflichtig)',
    emoji: '🦴',
    short: 'Baut Knochen auf, statt nur den Abbau zu bremsen: In der ACTIVE-Studie mit 2463 Frauen sanken neue Wirbelbrüche über 18 Monate von 4,2 auf 0,6 Prozent. In den USA und der EU gegen Osteoporose zugelassen; weniger sicher belegt ist der Schutz vor Brüchen außerhalb der Wirbelsäule, und die Behandlung ist zeitlich begrenzt.',
    moa: 'Abaloparatid ist ein Peptid aus 34 Aminosäuren, zu 76 Prozent mit dem Parathormon-verwandten Peptid PTHrP(1-34) und zu 41 Prozent mit PTH(1-34) übereinstimmend. Es aktiviert den PTH1-Rezeptor der knochenbildenden Zellen und damit den cAMP-Signalweg; die tägliche kurze Spitze, bei einer Halbwertszeit von etwa 1 Stunde, regt die Knochenneubildung an Bälkchen und Außenschicht an. In Zellversuchen band es bevorzugt an die Rezeptorform RG, die nur kurze Signale auslöst, was den geringeren Kalziumanstieg gegenüber Teriparatid erklären soll (Hattersley et al. 2016, Laborbefund). Am Menschen ist die Kette gemessen: Der Aufbaumarker PINP stieg nach 1 Monat um 93 Prozent, die Knochendichte der Lendenwirbelsäule in 18 Monaten um 9,2 Prozent gegenüber 0,5 Prozent unter Placebo.',
    benefits: [
      'Neue Wirbelbrüche über 18 Monate 0,6 gegenüber 4,2 Prozent unter Placebo, relative Senkung um 86 Prozent (ACTIVE, Mensch, 2463 Frauen nach den Wechseljahren, JAMA 2016; Zahlen laut US-Fachinformation).',
      'Der Vorsprung hält mit anschließendem Alendronat: nach 43 Monaten 0,9 gegenüber 5,6 Prozent neue Wirbelbrüche, relative Senkung um 84 Prozent (ACTIVExtend, 558 und 581 Frauen, 2018).',
      'Weniger Hyperkalzämie als unter Teriparatid: 3,4 gegenüber 6,4 Prozent (ACTIVE, Teriparatid-Arm offen, 2016).',
      'Knochendichte der Lendenwirbelsäule bei Männern plus 8,48 gegenüber plus 1,17 Prozent in 12 Monaten (ATOM, 228 Männer, 2022; Bruchschutz dort nicht untersucht).',
      'In Japan plus 12,5 Prozent Knochendichte der Lendenwirbelsäule gegenüber Placebo über 78 Wochen (ACTIVE-J, 2022).',
      'Meta-Analyse 2026: starker Schutz der Wirbel, deutlicher Dichtezuwachs, keine Zunahme schwerer Nebenwirkungen; Schutz außerhalb der Wirbelsäule mit mäßiger Sicherheit.'
    ],
    risks: [
      'Brüche außerhalb der Wirbelsäule: US-Auswertung 2,7 gegenüber 4,7 Prozent (p = 0,049); in der EU-Auswertung ohne 2 wegen GCP-Mängeln ausgeschlossene Zentren 2,7 gegenüber 3,6 Prozent, nicht signifikant.',
      'Puls nach der ersten Spritze im Mittel plus 7,9 gegenüber plus 1,2 Schlägen pro Minute; Herzklopfen 5 gegenüber 0,4 Prozent, Schwindel 10 gegenüber 6 Prozent. Die EMA lehnte 2018 auch wegen der Herzwirkung zunächst ab; die EU-Fachinformation verlangt vor Beginn Blutdruck, Herzstatus und EKG.',
      'Osteosarkome bei Ratten in einer 2-jährigen Studie, dosisabhängig bei 4- bis 28-facher Menschen-Exposition; Bedeutung für Menschen unbekannt, daher zeitliche Begrenzung (EU höchstens 18 Monate, USA nicht mehr als 2 Jahre im Leben).',
      'Hyperkalzämie, vermehrtes Kalzium im Urin und Harnsäureanstieg; nicht bei vorbestehender Hyperkalzämie, schwerer Nierenschwäche, Knochentumoren oder früherer Skelettbestrahlung.',
      'Rötungen an der Einstichstelle im ersten Monat 58 gegenüber 28 Prozent; Behandlungsabbruch wegen Nebenwirkungen 10 gegenüber 6 Prozent.',
      'Keine Daten für Gesunde ohne Osteoporose oder für Anwendungen wie Verletzungsheilung; tägliche Spritze, verschreibungspflichtig.'
    ],
    status: 'USA: seit 2017 als Tymlos zugelassen (Frauen nach den Wechseljahren mit hohem Bruchrisiko, inzwischen auch Knochendichte bei Männern mit Osteoporose). EU/DE: erster Antrag 2018 abgelehnt, seit 12.12.2022 als Eladynos zugelassen, nur für Frauen nach den Wechseljahren mit erhöhtem Bruchrisiko; verschreibungspflichtig, unter zusätzlicher Überwachung. Laut Fachinformation 80 Mikrogramm einmal täglich unter die Haut, Gesamtdauer in der EU höchstens 18 Monate (Fachinfo-Angabe, keine Anwendungsempfehlung). In der deutschen Übersetzung der WADA-Liste 2026 nicht namentlich aufgeführt.',
    sources: [
      { title: 'Miller et al. 2016, JAMA – ACTIVE: weniger neue Wirbelbrüche unter Abaloparatid, 2463 Frauen, 18 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/27533157/' },
      { title: 'Bone et al. 2018, J Clin Endocrinol Metab – ACTIVExtend: 43 Monate mit anschließendem Alendronat', url: 'https://pubmed.ncbi.nlm.nih.gov/29800372/' },
      { title: 'Czerwinski et al. 2022, J Bone Miner Res – ATOM: Knochendichte bei 228 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/36190391/' },
      { title: 'Matsumoto et al. 2022, J Clin Endocrinol Metab – ACTIVE-J: Knochendichte in Japan über 78 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/35977548/' },
      { title: 'Cosman et al. 2020, J Clin Endocrinol Metab – Herz-Kreislauf-Sicherheit in ACTIVE', url: 'https://pubmed.ncbi.nlm.nih.gov/32658264/' },
      { title: 'Hattersley et al. 2016, Endocrinology – bevorzugte Bindung an die RG-Form des PTH1-Rezeptors', url: 'https://pubmed.ncbi.nlm.nih.gov/26562265/' },
      { title: 'Bonifacio et al. 2026, J Clin Med – Meta-Analyse zu Wirksamkeit und Sicherheit', url: 'https://pubmed.ncbi.nlm.nih.gov/41598611/' },
      { title: 'EMA – Eladynos, Fachinformation (deutsch)', url: 'https://www.ema.europa.eu/de/documents/product-information/eladynos-epar-product-information_de.pdf' },
      { title: 'EMA 2018 – Ablehnung des ersten Zulassungsantrags (GCP-Mängel, Herzwirkung, Brüche außerhalb der Wirbelsäule)', url: 'https://www.ema.europa.eu/en/documents/smop-initial/questions-and-answers-refusal-marketing-authorisation-eladynos-abaloparatide_en.pdf' },
      { title: 'DailyMed – Tymlos, US-Fachinformation', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=712143d9-e21e-4013-bb3b-3426a21060a8' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'ace-031',
    name: 'ACE-031 (Ramatercept)',
    altNames: 'Ramatercept, ACVR2B-Fc, löslicher Activin-Rezeptor IIB, Köderrezeptor',
    class: 'Löslicher Köderrezeptor: Fusionsprotein aus Activin-Rezeptor IIB und IgG1-Fc, nicht zugelassen',
    emoji: '🧬',
    short: 'Fängt Myostatin und verwandte Faktoren ab, bevor sie den Rezeptor erreichen – der Massenaufbau ist am Menschen in zwei kontrollierten Studien belegt. Die Kraft folgte nicht, und die Duchenne-Studie wurde wegen Nasenbluten und erweiterter Hautgefäße abgebrochen.',
    moa: 'ACE-031 ist ein dimeres Fusionsprotein aus einem Fragment des menschlichen Activin-Rezeptors Typ IIB (ACVR2B) und dem Fc-Teil von menschlichem IgG1; der Fc-Anteil erklärt die Halbwertszeit von 10 bis 15 Tagen. Myostatin (GDF-8) bremst über diesen Rezeptor das Muskelwachstum. ACE-031 greift nicht an der Zelle an, sondern davor: Als löslicher Nachbau des Rezeptors bindet es Myostatin und weitere Liganden derselben Familie, darunter Activin A, und hält sie vom eigentlichen Rezeptor fern – deshalb wirkt es breiter als eine reine Myostatin-Blockade und erhöht im Tier die Querschnittsfläche beider Fasertypen (Cadena et al. 2010). Dieselbe Breite ist sein Problem: Die Gefäßnebenwirkungen werden auf die Mitblockade von BMP9 und BMP10 zurückgeführt, zwei Liganden, die Gefäßstabilität und Endothelfunktion steuern (Suh & Lee 2020; Cadena et al. 2026). Abgrenzung im Bestand: Follistatin ist ein körpereigenes myostatinbindendes Protein, Bimagrumab ein Antikörper gegen den Rezeptor, ACE-031 ein Köderrezeptor – die WADA führt die drei Prinzipien in S4.3 getrennt auf.',
    benefits: [
      'Phase 1: Bei 48 gesunden Frauen nach der Menopause stieg nach einer Einzeldosis von 3 mg/kg subkutan die fettfreie Gesamtmasse an Tag 29 um 3,3 Prozent (P = 0,03, DXA) und das Oberschenkelmuskelvolumen um 5,1 Prozent (P = 0,03, MRT) (Attie et al. 2013, Mensch).',
      'Phase 2 bei Duchenne-Muskeldystrophie: fettfreie Masse plus 3,6 Prozent (P = 0,023) und plus 4,1 Prozent (P = 0,012) gegen plus 2,6 Prozent unter Placebo (P = 0,435), 24 Teilnehmer, 12 Wochen (NCT01099761, Mensch).',
      'Knochendichte der Lendenwirbelsäule im höheren Dosisschema plus 4,4 Prozent (P = 0,039) gegen plus 0,3 Prozent unter Placebo (NCT01099761, Mensch).',
      'Maus: Körpergewicht nach 28 Tagen 16 Prozent über der Kontrolle, Muskelfeuchtgewichte plus 33 Prozent (Soleus), 44 Prozent (Plantaris), 46 Prozent (Gastrocnemius), 26 Prozent (EDL); Faserquerschnitt plus 22 und 28 Prozent im Soleus, plus 57 Prozent im Plantaris (Cadena et al. 2010).',
      'Weißbüschelaffe: 14 Wochen ACE-031, fettfreie Masse am Ende über dem Ausgangswert (in der Kontrollgruppe nicht), größerer Faserquerschnitt in Typ-I- und Typ-II-Fasern, mehr absolute und spezifische Kraft am isolierten Muskel (Cadena et al. 2026).',
      'Lange Wirkdauer: Halbwertszeit 10 bis 15 Tage, Gabe in den Studien subkutan alle 2 bis 4 Wochen (Attie et al. 2013; NCT01099761).'
    ],
    risks: [
      'Dosislimitierend sind Gefäßnebenwirkungen: Im höheren Dosisschema der Duchenne-Studie Epistaxis bei 5 von 9 und Teleangiektasien bei 5 von 9 Jungen, unter Placebo bei 0 von 6; Abbruch nach dem zweiten Dosierungsschema, ebenso der Verlängerungsstudie mit 11 Teilnehmern.',
      'Mehr Masse war nicht mehr Kraft: Handmyometrie in allen Gruppen praktisch unverändert (Kniestreckung minus 3,6 und minus 3,3 Prozent gegen minus 3,7 Prozent unter Placebo), 6-Minuten-Gehtest ohne statistische Signifikanz.',
      'Häufig außerdem Erythem an der Einstichstelle (6 von 9 im höheren Schema, 3 von 6 unter Placebo) und Kopfschmerzen (3 von 9).',
      'Die Entwicklung wurde im Februar 2011 ausgesetzt und am 02.05.2013 endgültig beendet; seither keine neuen Humandaten. Die Humanbasis bleibt bei 48 Frauen (Einzeldosis), 70 Frauen (unveröffentlichte Mehrfachdosis-Studie) und 24 Jungen über 12 Wochen.',
      'Graumarktware ist nicht der Studienstoff: Von 14 geprüften Schwarzmarktprodukten enthielten nur 12 ein ACVR2B-reaktives Protein, und diese 12 enthielten den vollständigen Activin-Rezeptor IIB ohne Fc-Anteil statt ACE-031, neben der Hauptkomponente von etwa 58,4 kDa viele weitere Proteine (Reichel et al. 2025).',
      'Als injiziertes Fusionsprotein potenziell immunogen, Halbwertszeit 10 bis 15 Tage – eine unerwünschte Wirkung lässt sich nicht schnell beenden; Wechselwirkungen nie untersucht; im Sport jederzeit verboten (WADA 2026, S4.3).'
    ],
    status: 'Kein zugelassenes Arzneimittel in DE, EU oder USA; klinische Entwicklung 2011 ausgesetzt, am 02.05.2013 von Acceleron und Shire endgültig beendet, beide Duchenne-Studien im Register als abgebrochen geführt (NCT01099761, NCT01239758). Zugelassen ist ein verwandter Stoff derselben Bauart für eine andere Indikation: Luspatercept (Reblozyl), Fusionsprotein aus modifizierter extrazellulärer ActRIIB-Domäne und IgG1-Fc, EU-Zulassung 25.06.2020 gegen Anämie bei myelodysplastischen Syndromen und Beta-Thalassämie. Dopingliste: WADA-Verbotsliste 2026, Abschnitt S4.3 „Agents preventing activin receptor IIB activation“, dort ausdrücklich „Decoy activin receptors (e.g. ACE-031)“; S4.3 ist nicht-spezifiziert und jederzeit verboten. In der Anlage zu § 2 Absatz 3 AntiDopG ist ACE-031 nicht namentlich genannt – dort stehen unter „3. Myostatinfunktionen verändernde Stoffe“ nur Follistatin und seine Derivate sowie Stamulumab; die Verbote des § 2 Absatz 1 AntiDopG knüpfen dagegen an die internationale Verbotsliste an. Nachweisverfahren für die Dopingkontrolle liegen vor (Gelelektrophorese und Western Blot für Schwarzmarktprodukte, LC-HRMS/MS im Humanbereich).',
    sources: [
      { title: 'Attie et al., Muscle Nerve 2013 – Phase 1, 48 gesunde Frauen, fettfreie Masse plus 3,3 Prozent', url: 'https://pubmed.ncbi.nlm.nih.gov/23169607/' },
      { title: 'Campbell et al., Muscle Nerve 2017 – Phase 2 bei Duchenne, Abbruch wegen Epistaxis und Teleangiektasien', url: 'https://pubmed.ncbi.nlm.nih.gov/27462804/' },
      { title: 'ClinicalTrials.gov NCT01099761 – Ergebnisdaten und Nebenwirkungstabellen der Duchenne-Studie', url: 'https://clinicaltrials.gov/study/NCT01099761' },
      { title: 'ClinicalTrials.gov NCT01239758 – Verlängerungsstudie, 11 Teilnehmer, abgebrochen', url: 'https://clinicaltrials.gov/study/NCT01239758' },
      { title: 'Cadena et al., J Appl Physiol 2010 – ACE-031 im Mausmodell, Muskelmasse unabhängig vom Fasertyp', url: 'https://pubmed.ncbi.nlm.nih.gov/20466801/' },
      { title: 'Cadena et al., PLoS One 2026 – ACE-031 beim Weißbüschelaffen, 14 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/41686840/' },
      { title: 'Suh & Lee, J Bone Metab 2020 – Übersicht Myostatin-Hemmer, Gefäßnebenwirkungen über BMP9 und BMP10', url: 'https://pubmed.ncbi.nlm.nih.gov/32911580/' },
      { title: 'Reichel et al., Drug Test Anal 2025 – 14 als ACE-031 gehandelte Schwarzmarktprodukte im Labor', url: 'https://pubmed.ncbi.nlm.nih.gov/40312924/' },
      { title: 'Sakellariou et al., Sci Rep 2025 – LC-HRMS/MS-Nachweis von Hemmstoffen der Activin-Rezeptor-Signalwege', url: 'https://pubmed.ncbi.nlm.nih.gov/40481031/' },
      { title: 'EMA – Reblozyl (Luspatercept), EU-Zulassung 25.06.2020', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/reblozyl' },
      { title: 'Fierce Biotech, 02.05.2013 – Acceleron und Shire beenden die Zusammenarbeit zu ACE-031', url: 'https://www.fiercebiotech.com/biotech/acceleron-and-shire-conclude-collaboration-on-ace-031' },
      { title: 'WADA – Prohibited List 2026, S4.3 Köderrezeptoren (Beispiel ACE-031)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'andarin',
    name: 'Andarin (S-4)',
    altNames: 'Andarine, S-4, S4, GTx-007, GTX-007, Acetamidoxolutamide',
    class: 'Selektiver Androgenrezeptor-Modulator (SARM), nicht zugelassen',
    emoji: '💪',
    short: 'Einer der ersten SARMs: aktiviert im Tier stark den Muskel und schont die Prostata, senkt zugleich die eigene Hormonachse. Am Menschen ist nur die grundsätzliche Verträglichkeit aus Phase-I-Studien bekannt, eine Wirksamkeitsstudie gibt es nicht - der Hersteller gab Andarin zugunsten des Nachfolgers Ostarin auf.',
    moa: 'Andarin bindet und aktiviert den Androgenrezeptor gewebe-selektiv. In kastrierten Ratten wirkte es als voller anaboler Agonist in Muskel und Knochen, aber nur als schwacher partieller Agonist an Prostata und Samenblase - genau das Profil, das SARMs verspricht. Wie das körpereigene Testosteron meldet es der Hirnanhangdrüse, dass genug Androgen da ist, weshalb es LH und FSH dosisabhängig senkt. Beim Menschen ist die Rezeptorwirkung von Andarin nicht in einer Publikation quantifiziert; bekannt ist aus Firmenangaben nur ein erster Hinweis auf eine Wachstumsaktivität in einer Mehrfachdosis-Studie. Chemisch trägt Andarin eine Nitrogruppe, die als möglicher Ausgangspunkt für Lebertoxizität diskutiert wird.',
    benefits: [
      'Tissue-selektiver anaboler Effekt im Tier: S-4 (3 und 10 mg/kg, 8 Wochen) stellte in kastrierten Ratten Muskelmasse und -kraft auf intaktes Niveau wieder her, wirkte an der Prostata nur schwach (16 bis 17 Prozent der Kontrolle) im Vergleich zu DHT (Gao et al., Endocrinology 2005).',
      'Anabole Aktivität ähnlich Testosteronpropionat bei geringer androgener Wirkung, ohne signifikante LH-/FSH-Suppression nahe der halbmaximalen Dosis (Yin et al., J Pharmacol Exp Ther 2003, Ratte).',
      'Knochenschutz im Tier: Bei ovariektomierten Ratten (120 Tage) erhielt S-4 die Knochendichte, erhöhte die Knochenfestigkeit und senkte den Körperfettanteil (Kearbey et al., Pharm Res 2007).',
      'Oral wirksam; in Ratten rasche vollständige Aufnahme, Halbwertszeit 2,6 bis 5,3 Stunden (Yin et al. 2003).',
      'Am Menschen in Phase I grundsätzlich verträglich: 86 gesunde Freiwillige in drei Studien, keine schweren Nebenwirkungen, einmal tägliche orale Gabe (GTx SEC-Filing 2003).',
      'Das SARM-Prinzip wird medizinisch weiter erforscht (Muskelschwund, Knochen), Andarin selbst wurde jedoch zugunsten von Ostarin aufgegeben (GTx 2006).'
    ],
    risks: [
      'Unterdrückt im Tier die eigene Hormonachse (LH/FSH dosisabhängig gesenkt); Übertragung auf den Menschen über die Rezeptorwirkung plausibel, aber nicht publiziert (Gao et al. 2005).',
      'SARM-Klasse: mehrere Fallberichte arzneimittelbedingter Leberschäden, ein beidseitiger Achillessehnenriss, eine Rhabdomyolyse; in Studien im Mittel 7,1 Prozent erhöhte ALT-Werte (Vignali et al. 2023; Gould et al. 2021).',
      'Fallbericht zu Andarin in Kombination: Diabetes-Erstmanifestation unter RAD-140, Andarin und Ibutamoren mit verschwommenem Sehen und Hyperglykämie - Andarin dabei nicht isoliert (Sotornik et al. 2022).',
      'Keine veröffentlichte Wirksamkeitsstudie am Menschen; keine Langzeitdaten; die Phase-I-Verträglichkeit ist nur über Firmenmitteilungen bekannt.',
      'Graumarkt-Qualität unzuverlässig: in einer JAMA-Analyse enthielten nur 52 Prozent der SARM-Produkte überhaupt einen SARM, nur 41 Prozent die deklarierte Menge (Van Wagoner et al. 2017); Andarin wurde in als Tee-Extrakt getarnten Produkten gefunden (Thevis et al. 2009).',
      'Im Sport jederzeit verboten (WADA S1.2); in Deutschland namentlich im Anti-Doping-Gesetz, Erwerb und Besitz in nicht geringer Menge zum Dopingzweck strafbar; für Frauen und in der Schwangerschaft besonders ungeeignet.'
    ],
    status: 'Kein zugelassenes Arzneimittel und kein Nahrungsergänzungsmittel in DE/EU/USA; nie über Phase I hinaus entwickelt, vom Hersteller zugunsten von Ostarin aufgegeben. Dopingliste: WADA 2026, S1.2 (Andere anabole Wirkstoffe), SARMs, ausdrücklich andarine, jederzeit verboten. Deutschland: namentlich in der Anlage zum Anti-Doping-Gesetz (Andere anabole Stoffe, SARMs: Andarin (S-4)) - damit Erwerb, Besitz und Verbringen in nicht geringer Menge zum Dopingzweck sowie Handel strafbar. FDA: SARMs sind keine Nahrungsergänzung, sondern nicht zugelassene Arzneimittel.',
    sources: [
      { title: 'Gao et al., Endocrinology 2005 - S-4 verbessert Muskelkraft und Knochen, schont Prostata (Ratte)', url: 'https://pubmed.ncbi.nlm.nih.gov/16099859/' },
      { title: 'Yin et al., J Pharmacol Exp Ther 2003 - Pharmakodynamik der SARMs, S-4 tissue-selektiv', url: 'https://pubmed.ncbi.nlm.nih.gov/12604714/' },
      { title: 'Kearbey et al., Pharm Res 2007 - S-4 erhält Knochendichte, senkt Körperfett (Ratte)', url: 'https://pubmed.ncbi.nlm.nih.gov/17063395/' },
      { title: 'Narayanan et al., Nucl Recept Signal 2008 - SARMs in präklinischer und klinischer Entwicklung', url: 'https://pubmed.ncbi.nlm.nih.gov/19079612/' },
      { title: 'GTx, Inc. SEC-Form S-1 2003 - drei Phase-I-Studien, 86 Freiwillige, keine schweren Nebenwirkungen', url: 'https://www.sec.gov/Archives/edgar/data/1260990/000095012303011376/g85196sv1.htm' },
      { title: 'Thevis et al., Drug Test Anal 2009 - S-4 (Andarine) in einem Schwarzmarktprodukt', url: 'https://pubmed.ncbi.nlm.nih.gov/20355219/' },
      { title: 'Van Wagoner et al., JAMA 2017 - Analyse von SARM-Produkten aus dem Internet', url: 'https://pubmed.ncbi.nlm.nih.gov/29183075/' },
      { title: 'Vignali et al., J Xenobiot 2023 - systematische Übersicht zur Sicherheit von SARMs', url: 'https://pubmed.ncbi.nlm.nih.gov/37218811/' },
      { title: 'Sotornik et al., Clin Diabetes 2022 - Diabetes-Fall unter SARM/GHS-Kombination', url: 'https://pubmed.ncbi.nlm.nih.gov/35983415/' },
      { title: 'WADA - Prohibited List 2026, S1.2 SARMs (andarine)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [
      { title: 'biolabshop (Suche „Andarin“)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'cardarine',
    name: 'Cardarine (GW501516)',
    altNames: 'GW501516, GW1516, Endurobol, Cardarin, GSK-516',
    class: 'PPARdelta-Agonist (Peroxisome Proliferator-Activated Receptor delta), kein SARM, nicht zugelassen',
    emoji: '🏃',
    short: 'Das berühmteste "Ausdauer-in-Pillenform": Der PPARdelta-Agonist kurbelt in Muskelzellen die Fettverbrennung an und ließ Mäuse deutlich weiter laufen. Am Menschen ist bisher nur belegt, dass er das Blutfettprofil verbessert; zu Ausdauer oder Fettabbau gibt es keine Humandaten, und der Hersteller stoppte die Entwicklung nach eigenen Angaben 2006 wegen Krebs in Langzeit-Tierstudien.',
    moa: 'GW501516 aktiviert den Kernrezeptor PPARdelta, der in Muskel-, Fett- und Leberzellen Gene für den Fettsäurestoffwechsel steuert. Folge in Zell- und Tierversuchen: Die Muskulatur verbrennt mehr Fettsäuren, spart Glukose und verschiebt das Blutfettprofil in Richtung mehr HDL und weniger Triglyceride. Am Menschen ist diese Wirkkette über die Induktion des Fettsäuretransporters CPT1b im Muskelbiopsat und gemessene Fettverbrennung bestätigt (Riserus et al. 2008). Der oft erzählte Ausdauereffekt ist an Bedingungen geknüpft: Im Ausgangsexperiment steigerte GW1516 allein in sitzenden Mäusen die Laufleistung nicht, sondern erst zusammen mit Training; eine spätere Arbeit führt den Ausdauergewinn auf ein Glukose-Sparen zurück, das den Blutzucker länger hält (Narkar et al. 2008; Fan et al. 2017).',
    benefits: [
      'Blutfettprofil beim Menschen verbessert: In der größten Studie (268 Patienten, 12 Wochen) stieg HDL-Cholesterin um bis zu 16,9 Prozent, LDL sank um 7,3 Prozent, Triglyceride um 16,9 Prozent, apoB um 14,9 Prozent (Olson et al., ATVB 2012).',
      'Bei 6 übergewichtigen Männern (10 mg, 2 Wochen) fielen Triglyceride um 30 Prozent, Leberfett um 20 Prozent und ein Marker für oxidativen Stress um 30 Prozent (Riserus et al., Diabetes 2008, Mensch, Surrogatmarker).',
      'Zielstruktur PPARdelta am Menschen bestätigt: Muskel-Fettverbrennung und CPT1b-Induktion messbar (Riserus et al. 2008).',
      'Ausdauer im Tier: GW1516 (5 mg/kg oral, 4 Wochen) plus Training steigerte bei Mäusen Laufzeit um 68 und Strecke um 70 Prozent gegenüber trainierten Kontrolltieren (Narkar et al., Cell 2008); ohne Training kein Effekt.',
      'Bei sitzenden Mäusen verlängerte GW501516 (40 mg/kg im Futter, 8 Wochen) die Laufzeit um rund 100 Minuten durch Glukose-Sparen (Fan et al., Cell Metab 2017, Maus).',
      'Bei insulinresistenten Rhesusaffen stieg das HDL-Cholesterin dosisabhängig, kleine dichte LDL und Nüchtern-Insulin sanken (Oliver et al., PNAS 2001, Primat).'
    ],
    risks: [
      'Krebssignal: GSK stoppte nach eigenen Angaben 2006 die klinische Entwicklung, nachdem in langfristigen Tierstudien Toxizitäten einschließlich verschiedener Krebsarten auftraten (GSK/Health Canada 2013).',
      'Ein PPARdelta-Agonist beschleunigte im Apc-min-Mausmodell das Wachstum von Darmpolypen, fünffach mehr Polypen größer als 2 mm (Gupta et al., Nat Med 2004); die Datenlage zu PPARdelta und Darmkrebs ist allerdings uneinheitlich.',
      'Publizierter Vergiftungsfall bei Kombination mit Ostarin: Leberzellschaden (AST bis 2558 U/l) und schwere Rhabdomyolyse (Kreatinkinase bis 86435 U/l), Erholung nach 6 Wochen (Kintz et al. 2021).',
      'Keine Humandaten zu Ausdauer, Fettabbau oder Körperzusammensetzung; keine harten Herz-Kreislauf-Endpunkte; keine Langzeitdaten am Menschen.',
      'Graumarkt-Qualität unzuverlässig: In einer JAMA-Analyse von SARM-Produkten war GW501516 eine nicht deklarierte Beimischung; nur 52 Prozent der Produkte enthielten überhaupt den deklarierten Wirkstoff (Van Wagoner et al. 2017).',
      'Seit Jahren im Sport verboten (WADA S4.4.1, jederzeit); in Deutschland namentlich im Anti-Doping-Gesetz, Erwerb und Besitz in nicht geringer Menge zum Dopingzweck strafbar.'
    ],
    status: 'Kein zugelassenes Arzneimittel und kein Nahrungsergänzungsmittel in DE/EU/USA; nirgends für den Menschen freigegeben, klinische Entwicklung laut GSK 2006 gestoppt. Dopingliste: WADA 2026, S4.4.1 PPARdelta-Agonisten, ausdrücklich GW1516/GW501516, jederzeit verboten. Deutschland: namentlich in der Anlage zum Anti-Doping-Gesetz (Stoffwechsel-Modulatoren, PPARdelta-Agonisten: GW501516, GW1516, Cardarin, Endurobol) - damit Erwerb, Besitz und Verbringen in nicht geringer Menge zum Dopingzweck sowie Handel strafbar. FDA: SARMs und verwandte Wirkstoffe sind keine Nahrungsergänzung, sondern nicht zugelassene Arzneimittel.',
    sources: [
      { title: 'Narkar et al., Cell 2008 - AMPK- und PPARdelta-Agonisten als Trainings-Mimetika (GW1516 plus Training +68/70 Prozent)', url: 'https://pubmed.ncbi.nlm.nih.gov/18674809/' },
      { title: 'Fan et al., Cell Metab 2017 - PPARdelta steigert Ausdauer durch Glukose-Sparen (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/28467934/' },
      { title: 'Oliver et al., PNAS 2001 - GW501516 erhöht HDL bei Rhesusaffen', url: 'https://pubmed.ncbi.nlm.nih.gov/11309497/' },
      { title: 'Sprecher et al., ATVB 2007 - erste Gabe am Menschen, HDL/Triglyceride', url: 'https://pubmed.ncbi.nlm.nih.gov/17110604/' },
      { title: 'Riserus et al., Diabetes 2008 - GW501516 bei übergewichtigen Männern, Leberfett und Blutfette', url: 'https://pubmed.ncbi.nlm.nih.gov/18024853/' },
      { title: 'Ooi et al., J Clin Endocrinol Metab 2011 - Lipoproteinstoffwechsel bei Dyslipidämie', url: 'https://pubmed.ncbi.nlm.nih.gov/21816786/' },
      { title: 'Olson et al., ATVB 2012 - größte Humanstudie, n=268, 12 Wochen, Blutfettprofil', url: 'https://pubmed.ncbi.nlm.nih.gov/22814748/' },
      { title: 'Gupta et al., Nat Med 2004 - PPARdelta-Agonist beschleunigt Darmadenom-Wachstum', url: 'https://pubmed.ncbi.nlm.nih.gov/14758356/' },
      { title: 'Kintz et al., Toxics 2021 - Vergiftungsfall Cardarine plus Ostarin, Rhabdomyolyse', url: 'https://pubmed.ncbi.nlm.nih.gov/34678947/' },
      { title: 'GSK/Health Canada 2013 - Entwicklung 2006 wegen Krebs in Tierstudien gestoppt', url: 'https://recalls-rappels.canada.ca/en/alert-recall/gw501516-serious-risks-associated-use-unauthorized-product-public' },
      { title: 'WADA - Alert zu GW501516 (2013)', url: 'https://www.wada-ama.org/en/news/wada-issues-alert-gw501516' },
      { title: 'WADA - Prohibited List 2026, S4.4.1 PPARdelta-Agonisten (GW1516, GW501516)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [
      { title: 'biolabshop (Suche „Cardarine“)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'dhea',
    name: 'DHEA (Dehydroepiandrosteron)',
    altNames: 'Prasteron, Dehydroepiandrosteron, DHEA-S (Sulfatform im Blut), Intrarosa (vaginales Arzneimittel)',
    class: 'Steroid-Hormonvorstufe der Nebenniere, Prohormon für Androgene und Östrogene',
    emoji: '⏳',
    short: 'Die Hormonvorstufe, deren Spiegel mit dem Alter sinkt: Als Tablette hebt sie bei Frauen nach der Menopause Testosteron und Estradiol messbar an, als Vaginalzäpfchen ist sie in EU und USA zugelassen. Kleine Vorteile für Knochen, Sexualfunktion und Stimmung sind in Meta-Analysen belegt; den Anti-Aging-Nutzen hat eine zweijährige NEJM-Studie nicht bestätigt.',
    moa: 'DHEA wird vor allem in den Nebennieren gebildet und ist selbst kaum hormonell aktiv. Periphere Gewebe wandeln es bei Bedarf in Testosteron und Östrogene um (Intrakrinologie); nach der Menopause entstehen fast alle Androgene und die gesamten Östrogene einer Frau auf diesem Weg (Zhu et al. 2021). Eine Meta-Analyse über 21 Studien fand bei postmenopausalen Frauen unter DHEA einen Anstieg des Testosterons um 24,31 ng/dl und des Estradiols um 7,86 pg/ml. Vaginal angewendet wirkt Prasteron lokal an der Schleimhaut, während die Serumhormone im postmenopausalen Normbereich bleiben (Labrie et al. 2016). Die Wirkkette zu Hormonspiegeln ist am Menschen belegt, der Weg zu harten Endpunkten wie Knochenbrüchen oder Lebenserwartung nicht.',
    benefits: [
      'Vaginales Prasteron 6,5 mg täglich über 12 Wochen: Schmerzen beim Sex 0,36 Punkte besser als Placebo, pH -0,66 (Phase III, 325 Verum vs. 157 Placebo, Labrie et al. 2016) – in EU (2018) und USA (2016) zugelassen',
      'Knochendichte bei älteren Frauen: Lendenwirbelsäule +1,0 %, Trochanter +0,5 % nach 12 Monaten; bei Männern kein Nutzen (gepoolte Analyse von 4 RCTs, 295 Frauen, 290 Männer, Jankowski et al. 2019)',
      'Sexualfunktion in den Wechseljahren leicht besser, SMD 0,31 (Cochrane 2015, 5 Studien, 261 Frauen) – eine andere Meta-Analyse mit 23 RCTs knapp nicht signifikant',
      'Nebenniereninsuffizienz bei Frauen: kleine Verbesserung der Lebensqualität, Effektstärke 0,21 (Meta-Analyse, 10 RCTs, Alkatib et al. 2009)',
      'Depressive Symptome: SMD -0,28 gegenüber Placebo (Meta-Analyse, 15 Studien, 853 Personen, Peixoto et al. 2020) – Evidenzqualität sehr niedrig'
    ],
    risks: [
      'Androgene Nebenwirkungen, vor allem Akne (OR 3,77, Cochrane 2015); außerdem Gesichtsbehaarung, Haarausfall, tiefere Stimme, steigender Blutdruck möglich',
      'HDL-Cholesterin sank unter 50 mg pro Tag über 12 Monate (RCT, 58 Frauen und 61 Männer, Jankowski et al. 2011)',
      'Umwandlung in Östrogene und Testosteron: gilt bei hormonabhängigen Krebsarten (Brust, Eierstock, Prostata) als riskant; Krebsrisiko nicht in Studien untersucht',
      'Kein Anti-Aging-Nutzen: keine Wirkung auf Körperzusammensetzung, Kraft, Insulinwirkung oder Lebensqualität über 2 Jahre (RCT, 87 Männer, 57 Frauen, Nair et al., NEJM 2006)',
      'Keine Langzeitdaten zur Tablette über 2 Jahre hinaus; Leitlinie der Endocrine Society (2014) rät vom routinemäßigen Einsatz bei Frauen ab',
      'Im Sport jederzeit verboten (WADA 2026, S1.1)'
    ],
    status: 'Deutschland: verschreibungspflichtig (AMVV Anlage 1, Prasteron und seine Ester); namentlich in der Anlage zum Anti-Doping-Gesetz. EU: Prasteron 6,5 mg Vaginalzäpfchen (Intrarosa) seit 08.01.2018 zugelassen gegen mittelschwere bis schwere Beschwerden der vulvovaginalen Atrophie nach der Menopause. USA: vom Controlled Substances Act ausgenommen und als Nahrungsergänzung erlaubt; Intrarosa seit 17.11.2016 zugelassen. Doping: WADA-Liste 2026, S1.1 anabole androgene Steroide, jederzeit verboten, ebenso 7-Keto-DHEA.',
    sources: [
      { title: 'Nair et al. 2006, N Engl J Med – 2 Jahre DHEA bei Älteren: kein Effekt auf Körperzusammensetzung, Kraft, Insulinwirkung, Lebensqualität', url: 'https://pubmed.ncbi.nlm.nih.gov/17050889/' },
      { title: 'Scheffers et al. 2015, Cochrane Database Syst Rev – Wechseljahre: Sexualfunktion leicht besser, Lebensqualität nicht, mehr Akne', url: 'https://pubmed.ncbi.nlm.nih.gov/25879093/' },
      { title: 'Elraiyah et al. 2014, J Clin Endocrinol Metab – 23 RCTs: Libido knapp nicht signifikant, keine Stoffwechseleffekte', url: 'https://pubmed.ncbi.nlm.nih.gov/25279571/' },
      { title: 'Alkatib et al. 2009, J Clin Endocrinol Metab – Nebenniereninsuffizienz: kleiner Lebensqualitätseffekt', url: 'https://pubmed.ncbi.nlm.nih.gov/19773400/' },
      { title: 'Jankowski et al. 2019, Clin Endocrinol – gepoolte Analyse von 4 RCTs: Knochendichte bei Frauen gestiegen', url: 'https://pubmed.ncbi.nlm.nih.gov/30421439/' },
      { title: 'Labrie et al. 2016, Menopause – vaginales Prasteron, Phase III', url: 'https://pubmed.ncbi.nlm.nih.gov/26731686/' },
      { title: 'He et al. 2025, Diabetol Metab Syndr – Testosteron und Estradiol unter DHEA bei postmenopausalen Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/40616152/' },
      { title: 'Peixoto et al. 2020, J Neurosci Res – depressive Symptome, Meta-Analyse', url: 'https://pubmed.ncbi.nlm.nih.gov/32930419/' },
      { title: 'Wierman et al. 2014, J Clin Endocrinol Metab – Leitlinie: kein routinemäßiger DHEA-Einsatz bei Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/25279570/' }
    ],
    community: [
      { title: 'biolabshop (Suche „DHEA")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Longevity'
  },
  {
    id: 'eloralintid',
    name: 'Eloralintid',
    altNames: 'Eloralintide, LY3841136 (Eli Lilly)',
    class: 'Selektiver Amylin-1-Rezeptor-Agonist, Prüfpräparat in Phase 3',
    emoji: '💉',
    short: 'Eli Lillys Amylin-Kandidat, der gezielt den Amylin-1-Rezeptor anspricht statt das ganze Rezeptorfeld. In einer placebokontrollierten Phase-2-Studie mit 263 Teilnehmern über 48 Wochen bis zu 20 Prozent Gewichtsabnahme gegenüber 0,4 Prozent unter Placebo; fünf Phase-3-Studien laufen.',
    moa: 'Amylin wird zusammen mit Insulin aus der Bauchspeicheldrüse ausgeschüttet, verlangsamt die Magenentleerung, bremst die Glukagon-Ausschüttung und beendet über den Hirnstamm die Mahlzeit – ein zweites Sättigungssystem neben GLP-1. Eloralintid ist ein stabilisiertes Amylin-Analogon aus 37 Aminosäuren mit drei nicht natürlichen Bausteinen an den Positionen 11, 15 und 22; die Schwefelbrücke des menschlichen Amylins ist durch eine chemisch stabilere Methylenthioacetal-Brücke ersetzt, und eine Fettdisäure mit 20 Kohlenstoffatomen an Position 26 bindet das Molekül an Albumin. Entscheidend ist die Rezeptorauswahl: Eloralintid aktiviert den menschlichen Amylin-1-Rezeptor 12-fach stärker als den Calcitonin-Rezeptor und 11-fach stärker als den Amylin-3-Rezeptor, während Cagrilintid alle diese Rezeptoren gleichermaßen trifft. Die Halbwertszeit liegt bei etwa 2 Wochen, eine Spritze pro Woche reicht.',
    benefits: [
      'Phase 2 über 48 Wochen, 263 Teilnehmer, 46 US-Zentren: 9 bis 20 Prozent Gewichtsabnahme gegenüber 0,4 Prozent unter Placebo, primärer Endpunkt in allen Wirkstoffgruppen erreicht (Billings 2025); Herstellerdarstellung 9,5 bis 20,1 Prozent, in Kilogramm 10,2 bis 21,3',
      'Rezeptorselektivität am menschlichen Rezeptor bestätigt: 12-fach stärkere Aktivierung des Amylin-1-Rezeptors als des Calcitonin-Rezeptors (Briere 2025, Zellsysteme)',
      'Phase 1b über 12 Wochen ohne jede Aufdosierung, 100 Teilnehmer: 2,6 bis 11,3 Prozent Gewichtsabnahme, dabei Durchfall bei 10, Übelkeit bei 8 und Erbrechen bei 4 Prozent (Bhattachar 2026)',
      'Pulsfrequenz sinkt statt zu steigen: minus 14,4 Schläge pro Minute in Woche 12 unter der höchsten Dosis gegenüber minus 3,4 unter Placebo, ohne symptomatische Bradykardie – ein Gegensatz zum Herzfrequenz-Anstieg unter GLP-1-Wirkstoffen (Bhattachar 2026; Sigalov und Frishman 2026)',
      'In der Netzwerk-Metaanalyse von 6 Studien mit 4642 Teilnehmern zweitstärkster Effekt aller Amylin-Therapien: minus 18,01 Prozent gegenüber Placebo, vor CagriSema und Semaglutid 2,4 mg – indirekter Vergleich, geringe Vertrauenswürdigkeit (Kamrul-Hasan 2026)',
      'Gewichtsverlust im Tiermodell überwiegend aus Fettmasse (68 bis 85 Prozent des Gesamtverlusts) und weniger konditionierte Geschmacksabneigung als unter Cagrilintid (Briere 2025)',
      'Kombination mit Tirzepatid (EloraTZP), Phase 2b über 48 Wochen, 367 Erwachsene mit Übergewicht oder Adipositas und Typ-2-Diabetes: bis 23,3 Prozent Gewichtsabnahme gegenüber 14,8 Prozent unter Tirzepatid 15 mg allein und 3,0 Prozent unter Placebo (Herstellerangabe 30.09.2026, noch nicht begutachtet veröffentlicht)'
    ],
    risks: [
      'Verträglichkeit ist dosisabhängig: Übelkeit 11 bis 64 Prozent je Gruppe (Placebo 14 Prozent), Erschöpfung bis 46 Prozent (Placebo 12 Prozent); die höchsten Übelkeitsraten traten ohne Aufdosierung auf (Billings 2025)',
      'Abbrüche wegen unerwünschter Ereignisse etwa 10 Prozent in der Phase 2, nach einer anderen Auswertung bis 21 Prozent in der 6-mg-Gruppe (Alhazmi 2026; Patil 2026)',
      'Prüfpräparat, nirgends zugelassen; die längste veröffentlichte Behandlungsdauer beträgt 48 Wochen, Langzeitdaten fehlen',
      'Keine kardiovaskuläre Endpunktstudie für irgendeinen Amylin-Rezeptor-Agonisten; ob die günstigen Werte für Puls, Blutdruck und Entzündungsmarker Herzinfarkte oder Schlaganfälle verhindern, ist offen (Sigalov und Frishman 2026)',
      'Stimmungsbezogene Ereignisse bei 4 Teilnehmern der Phase-1b-Studie; alle drei betroffenen Teilnehmer der höchsten Dosisgruppe beendeten die Behandlung, die Ereignisse klangen in 2 bis 4 Tagen ab (Bhattachar 2026)',
      'Keine Daten für Schwangerschaft, Stillzeit, Kinder und Jugendliche; Studien zu Nieren- und Leberfunktion laufen erst. Was außerhalb von Studien unter diesem Namen angeboten wird, ist nicht das geprüfte Molekül',
      'In der Kombinationsstudie EloraTZP brachen 10,8 bis 27,0 Prozent die Behandlung ab, unter Tirzepatid allein 2,9 Prozent (Herstellerangabe 30.09.2026)'
    ],
    status: 'Prüfpräparat von Eli Lilly, in DE/EU/USA nicht zugelassen und außerhalb klinischer Studien nicht erhältlich. Das Phase-3-Programm ENLIGHTEN läuft: ENLIGHTEN-2 bei Typ-2-Diabetes seit 15.12.2025, ENLIGHTEN-1 bei Adipositas mit 1980 geplanten Teilnehmern seit 06.02.2026, dazu ENLIGHTEN-3 bei obstruktiver Schlafapnoe, ENLIGHTEN-4 bei Knie-Arthrose-Schmerzen und ENLIGHTEN-6 bei anhaltender Adipositas unter wöchentlicher Inkretin-Therapie (ClinicalTrials.gov, Abfrage 27.09.2026). Kombinationen mit Tirzepatid und mit Macupatid werden in Phase 1 und 2 geprüft; zur Kombination mit Tirzepatid (EloraTZP) liegen seit 30.09.2026 Ergebnisse einer Phase-2b-Studie vor (Herstellerangabe), Phase-3-Studien sind laut Lilly bis Ende 2026 geplant. Keine Dosierungsangaben; genannte Milligramm-Mengen sind Studiendosen.',
    sources: [
      { title: 'Billings LK et al., Lancet 2025 – Phase 2 über 48 Wochen, 263 Teilnehmer, 9 bis 20 Prozent Gewichtsabnahme', url: 'https://pubmed.ncbi.nlm.nih.gov/41207310/' },
      { title: 'Bhattachar S et al., Diabetes Obes Metab 2026 – Phase 1b über 12 Wochen, Pulsfrequenz, Verträglichkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/41559929/' },
      { title: 'Briere DA et al., Mol Metab 2025 – Molekül, Rezeptorselektivität, Tierdaten, erste Gabe am Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/41109426/' },
      { title: 'Kamrul-Hasan ABM et al., Endocrinol Diabetes Metab 2026 – Netzwerk-Metaanalyse der Amylin-Therapien', url: 'https://pubmed.ncbi.nlm.nih.gov/42175595/' },
      { title: 'Alhazmi A, le Roux CW, Diabetes Obes Metab 2026 – Übersicht: Abbruchraten, keine Pankreatitis oder Todesfälle in Phase 2', url: 'https://pubmed.ncbi.nlm.nih.gov/42452898/' },
      { title: 'Patil M et al., Biosci Rep 2026 – Übersicht mit Abbruchraten und Gewichtsangaben in Kilogramm', url: 'https://pubmed.ncbi.nlm.nih.gov/42307179/' },
      { title: 'Sigalov A, Frishman WH, Cardiol Rev 2026 – kardiometabolisches Profil, fehlende Endpunktstudie', url: 'https://pubmed.ncbi.nlm.nih.gov/42745233/' },
      { title: 'ClinicalTrials.gov – ENLIGHTEN-1 (NCT07321886), Phase 3 bei Adipositas', url: 'https://clinicaltrials.gov/study/NCT07321886' },
      { title: 'Eli Lilly – Unternehmensmitteilung zur Phase-2-Studie, 06.11.2025', url: 'https://www.prnewswire.com/news-releases/lillys-selective-amylin-agonist-eloralintide-demonstrated-meaningful-weight-loss-and-favorable-tolerability-in-a-phase-2-study-of-adults-with-obesity-or-overweight-302607061.html' },
      { title: 'Eli Lilly – Unternehmensmitteilung zu EloraTZP (Eloralintid plus Tirzepatid), Phase 2b, 30.09.2026', url: 'https://www.prnewswire.com/news-releases/lillys-eloratzp-combination-of-eloralintide-and-tirzepatide-delivered-greater-weight-loss-and-a1c-reduction-vs-tirzepatide-15-mg-in-adults-with-obesity-and-type-2-diabetes-302894480.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'hgh-fragment-176-191',
    name: 'HGH-Fragment 176-191',
    altNames: 'hGH 176-191, HGH Frag 176-191, Fragment 176-191, GH-Fragment; verwandt: AOD9401 (hGH 177-191), AOD-9604 (Tyr-hGH 177-191)',
    class: 'C-terminales Wachstumshormon-Fragment (lipolytische Domäne), nicht zugelassen',
    emoji: '🧩',
    short: 'Das Endstück des Wachstumshormons: Im Tier bremst es Fettneubildung und Gewichtszunahme, ohne IGF-1 oder den Blutzucker hochzutreiben. Im Handel steckt meist die Sequenz von AOD-9604 dahinter – gut verträglich in sechs Humanstudien, aber ohne belegten Abnehmeffekt. Das natürliche Fragment selbst wurde nur 1978 an Ratten geprüft, am Menschen nie; die Humandaten zu AOD-9604 gelten für das Fragment nur indirekt.',
    moa: 'Das Peptid entspricht dem C-terminalen Ende des menschlichen Wachstumshormons, das im Tier die fettstoffwechselaktive Domäne trägt. Das unveränderte Stück 177-191 aktivierte in Rattenfett die hormonsensitive Lipase und hemmte die Acetyl-CoA-Carboxylase, also Fettfreisetzung rauf, Fettneubildung runter (Ng et al. 2000). Die Tyrosin-Variante AOD9604 bindet im Labor nicht an den Wachstumshormon-Rezeptor und löst dort keine Zellteilung aus, weshalb IGF-1 nicht steigt (Heffernan et al. 2001). Sie erhöhte bei Mäusen die Menge des Beta-3-Adrenozeptors im Fett, wirkte akut aber auch ohne diesen Rezeptor; der eigentliche Angriffspunkt ist unbekannt. Im Handel bezeichnet „176-191" meist die AOD9604-Sequenz YLRIVQCRSVEGSCGF; das natürliche Fragment beginnt an Position 176 mit Phenylalanin statt Tyrosin.',
    benefits: [
      'Bremste bei fettleibigen Zucker-Ratten über 20 Tage die Gewichtszunahme; mittlerer Fettzelldurchmesser sank von 110 auf 80 Mikrometer, ohne Insulinresistenz (Ng 2000, unverändertes 177-191, Tier)',
      'Oral bei ob/ob-Mäusen ab Tag 16 geringere Gewichtszunahme bei gleichem Futterverbrauch (Heffernan 2000, n = 10 gegen 8, 30 Tage, Tier)',
      'Förderte in isoliertem menschlichem Fettgewebe die Lipolyse und hemmte die Lipogenese (Heffernan 2000, ex vivo, kein Mensch behandelt)',
      'Keine Bindung am Wachstumshormon-Rezeptor, keine Hyperglykämie, mehr Fettoxidation bei Mäusen über 14 Tage (Heffernan 2001, AOD9604, Tier)',
      'Für die AOD9604-Sequenz sechs placebokontrollierte Humanstudien mit 893 Teilnehmern: kein IGF-1-Anstieg, keine Verschlechterung der Glukosetoleranz, keine Antikörper (Stier 2013, 2001 bis 2006) – indirekt, betrifft nur die Variante AOD-9604, nicht das natürliche Fragment'
    ],
    risks: [
      'Die große 24-Wochen-Studie mit der AOD9604-Sequenz (534 eingeschlossen, 502 randomisiert) verfehlte laut Hersteller 2007 den Gewichtsendpunkt; begutachtete Wirksamkeitsdaten gibt es nicht.',
      'Das natürliche Fragment 176-191 hob bei Ratten kurzfristig Blutzucker und Insulin (Ng und Bornstein 1978) – für diese Sequenz keine Humandaten.',
      'Name und Inhalt passen nicht sicher zusammen: Graumarktware kann die natürliche oder die Tyrosin-Sequenz enthalten oder falsch deklariert sein.',
      'FDA nennt für AOD-9604 Immunogenitätsrisiko, Verunreinigungen und schwerwiegende Ereignisse mit unklarer Kausalität.',
      'Nach Infusion berichteten 5 von 23 Probanden leichte Euphorie; häufigstes Ereignis in allen Studien war Kopfschmerz, ähnlich wie unter Placebo.'
    ],
    status: 'In DE, EU und USA kein zugelassenes Arzneimittel; Verkauf als Forschungschemikalie. WADA 2026 S2.2.3 (namentlich AOD-9604 und hGH 176-191), im und außerhalb des Wettkampfs verboten; in DE in der Anlage des Anti-Doping-Gesetzes unter Wachstumshormon-Fragmente genannt. FDA: AOD-9604 als Rezeptursubstanz mit möglichen erheblichen Risiken geführt, Nominierung zurückgezogen (Stand 22.04.2026).',
    sources: [
      { title: 'Ng FM, Bornstein J, Am J Physiol 1978 – natürliches hGH 176-191 hebt bei Ratten kurzfristig Blutzucker und Insulin', url: 'https://pubmed.ncbi.nlm.nih.gov/645904/' },
      { title: 'Ng FM et al., J Mol Endocrinol 2000 – AOD9401 (hGH 177-191) bremst Fettzellwachstum bei Zucker-Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/11116208/' },
      { title: 'Heffernan MA et al., Am J Physiol Endocrinol Metab 2000 – orale Gabe bei ob/ob-Mäusen, Lipolyse in menschlichem Fettgewebe', url: 'https://pubmed.ncbi.nlm.nih.gov/10950816/' },
      { title: 'Heffernan MA et al., Int J Obes 2001 – AOD9604 ohne GH-Rezeptor-Bindung, mehr Fettoxidation', url: 'https://pubmed.ncbi.nlm.nih.gov/11673763/' },
      { title: 'Stier H et al., J Endocrinol Metab 2013 – Sicherheit von AOD9604 in sechs placebokontrollierten Studien', url: 'https://www.jofem.org/index.php/jofem/article/view/157' },
      { title: 'Cox HD et al., Drug Test Anal 2015 – Struktur (Tyr + hGH 177-191) und Nachweis', url: 'https://pubmed.ncbi.nlm.nih.gov/25208511/' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – AOD9604 oft als hGH 176-191 bezeichnet; Evidenzstufe B/C', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' },
      { title: 'WADA – Prohibited List 2026, S2.2.3 Growth hormone fragments', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [
      { title: 'biolabshop (Suche „HGH-Fragment 176-191")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'igf-1-des',
    name: 'IGF-1 DES',
    altNames: 'IGF-1 DES(1-3), des(1-3)IGF-I, Des-IGF-1, verkürztes IGF-1',
    class: 'Körpereigene Kurzform des Wachstumsfaktors IGF-1, kein zugelassenes Arzneimittel',
    emoji: '🧪',
    short: 'Die um drei Aminosäuren verkürzte Form von IGF-1 – kein Designermolekül, sondern eine 1986 aus menschlichem Hirngewebe isolierte Variante. In Zellkultur etwa 10-fach potenter als IGF-1, im Tier deutlich anaboler, am Menschen nie geprüft.',
    moa: 'IGF-1 DES ist IGF-1, dem am vorderen Ende die drei Aminosäuren Glycin, Prolin und Glutaminsäure fehlen. Weil die Glutaminsäure an Position 3 wegfällt, bindet die Variante kaum an die IGF-Bindungsproteine, die im Blut sonst den größten Teil des IGF-1 festhalten. In Zellkultur ist sie deshalb etwa 10-fach potenter als IGF-1 bei Zellwachstum und Zellteilung. Im Tier verlässt sie das Blut schneller als IGF-1 (Plasma-Clearance 4,59 gegenüber 1,20 ml/min/kg) und verteilt sich weiter im Gewebe – die Autoren dieser Arbeit sahen darin gerade den Grund für die höhere Wirksamkeit. Anders als IGF-1 LR3, ein Laborkonstrukt mit N-terminaler Verlängerung, ist DES eine im Körper vorkommende Form; das abgespaltene Dreierstück ist heute in Form eines Analogons ein zugelassenes Medikament gegen das Rett-Syndrom.',
    benefits: [
      'In Zellkultur etwa 10-fach stärkere Reize auf Zellwachstum und Zellteilung als IGF-1, weil die Bindung an die IGF-Bindungsproteine entfällt (Übersicht Ballard 1996, Zelldaten)',
      'Bei Ratten unter Dexamethason über 7 Tage etwa 2,5-fach anaboler als IGF-1 bei Körpergewicht und Stickstoffbilanz (Tomas 1992, Tierdaten)',
      'Bei zuckerkranken Ratten 2,5- bis 3-fach potenter als IGF-1, Muskelproteinsynthese und RNA-Gehalt bis plus 50 Prozent; der Zuwachs war Eiweiß, unter Insulin dagegen Fett (Tomas 1993, Tierdaten)',
      'Nach Darmoperation an Ratten bessere Gewichts- und Stickstoffbilanz als unter Trägerlösung (Lemmey 1991, Tierdaten)',
      'Natürlich vorkommende Form, 1986 aus menschlichem fetalem und erwachsenem Hirngewebe isoliert – kein synthetisches Konstrukt (Sara 1986, Carlsson-Skwirut 1986)',
      'Stärkste Blutzuckersenkung aller geprüften IGF-1-Varianten in Krallenaffe und Schwein – belegt die Wirksamkeit am Rezeptor im Säugetier (Tomas 1997, Tierdaten)'
    ],
    risks: [
      'Unterzuckerung als führendes Risiko: im Tier 2- bis 3-fach stärkere und über 4 Stunden kumulativ 4- bis 8-fach größere Blutzuckersenkung als IGF-1; beim zugelassenen Mecasermin tritt Unterzuckerung bei mehr als 1 von 10 Behandelten auf',
      'Wachstumsfrage: Mäuse mit dauerhafter Bildung von IGF-1 DES in der Milchdrüse entwickelten bis zum Alter von 23 Monaten in 53 Prozent der Fälle Milchdrüsenkarzinome, 2- bis 3-fach häufiger als unveränderte Tiere; Mecasermin ist bei aktiver oder vermuteter Neoplasie kontraindiziert',
      'Gewebewachstum an unerwünschter Stelle: Darmgewicht im Tier bis plus 60 Prozent, schwerere Nieren und Thymusdrüse',
      'Keine einzige Studie am Menschen: keine Publikation mit gespritztem IGF-1 DES und kein Eintrag in den öffentlichen Studienregistern (Stand 27.09.2026)',
      'Nicht zugelassen und im Sport verboten; Des(1-3)-IGF-I ist namentlich als verbotene Substanz erfasst und aus dem Blut nachweisbar',
      'Schwarzmarktware: in einer dopinganalytischen Arbeit fanden sich in solchen Produkten deutliche Zeichen minderer Qualität und oxidierte Peptidformen'
    ],
    status: 'In DE/EU/USA kein zugelassenes Arzneimittel und kein Nahrungsergänzungsmittel; Vertrieb als Forschungssubstanz ohne Bestimmung für den menschlichen Gebrauch. Im Sport verboten: IGF-1 und seine Analoga einschließlich Des(1-3)-IGF-I sind verbotene Substanzen, ein Blutnachweis per Immunaufreinigung und hochauflösender Massenspektrometrie ist validiert. Zugelassene Gegenstücke auf derselben Achse: Mecasermin (Increlex), EU-Zulassung 03.08.2007 für Kinder und Jugendliche von 2 bis 18 Jahren mit schwerem primärem IGF-1-Mangel, und Trofinetid, ein Analogon des bei DES fehlenden Tripeptids, seit März 2023 in den USA für das Rett-Syndrom ab 2 Jahren.',
    sources: [
      { title: 'Ballard FJ et al., Int J Biochem Cell Biol 1996 – Übersicht: des(1-3)IGF-I ist etwa 10-fach potenter in Zellkultur', url: 'https://pubmed.ncbi.nlm.nih.gov/8930132/' },
      { title: 'Sara VR et al., PNAS 1986 – Isolierung der verkürzten IGF-1-Variante aus menschlichem fetalem Hirngewebe', url: 'https://pubmed.ncbi.nlm.nih.gov/3460078/' },
      { title: 'Carlsson-Skwirut C et al., FEBS Lett 1986 – dieselbe Variante im Hirngewebe Erwachsener', url: 'https://pubmed.ncbi.nlm.nih.gov/3709807/' },
      { title: 'Tomas FM et al., Biochem J 1992 – etwa 2,5-fach anaboler als IGF-1 bei Ratten unter Dexamethason', url: 'https://pubmed.ncbi.nlm.nih.gov/1371669/' },
      { title: 'Tomas FM et al., Biochem J 1993 – Wachstum und Muskelproteinsynthese bei zuckerkranken Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/7683875/' },
      { title: 'Read LC et al., J Endocrinol 1992 – Darmgewicht bis plus 60 Prozent', url: 'https://pubmed.ncbi.nlm.nih.gov/1613443/' },
      { title: 'Ballard FJ et al., J Endocrinol 1991 – höhere Clearance und größeres Verteilungsvolumen als IGF-1', url: 'https://pubmed.ncbi.nlm.nih.gov/2005410/' },
      { title: 'Tomas FM et al., J Endocrinol 1997 – stärkste Blutzuckersenkung aller IGF-1-Varianten', url: 'https://pubmed.ncbi.nlm.nih.gov/9415072/' },
      { title: 'Hadsell DL et al., Oncogene 2000 – Milchdrüsentumoren im Überexpressionsmodell', url: 'https://pubmed.ncbi.nlm.nih.gov/10702797/' },
      { title: 'Mongongu C et al., Drug Test Anal 2021 – Nachweisverfahren, Schwarzmarktqualität, nie am Menschen zugelassen', url: 'https://pubmed.ncbi.nlm.nih.gov/33587816/' },
      { title: 'EMA – EPAR Increlex (Mecasermin): Zulassung 03.08.2007, Hypoglykämie bei mehr als 1 von 10, Kontraindikation Neoplasie', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/increlex' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – Evidenzstufen der Peptide der GH-IGF-1-Achse', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' }
    ],
    community: [
      { title: 'biolabshop (Suche „IGF-1 DES")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'ligandrol',
    name: 'Ligandrol (LGD-4033)',
    altNames: 'LGD-4033, VK5211, VK 5211, SARM',
    class: 'Selektiver Androgenrezeptor-Modulator (SARM), nicht zugelassen',
    emoji: '🦴',
    short: 'Der SARM der Aufbauphase: Placebokontrolliert stieg die fettfreie Masse bei jungen Männern schon in 21 Tagen, in der höchsten Stufe um etwa 1,2 kg, nach Hüftfraktur um bis zu 9,1 Prozent in 12 Wochen. Kraft ist nicht gezeigt, Testosteron und HDL sinken, und es gibt mehrere Fallberichte schwerer Leberschäden.',
    moa: 'Ligandrol ist ein nichtsteroidaler Wirkstoff, der den Androgenrezeptor mit hoher Affinität bindet und aktiviert. Nach dem SARM-Konzept soll er Muskel und Knochen ansprechen, Prostata und Haut dagegen kaum; als Nicht-Steroid wird er nicht zu DHT oder Östrogen umgebaut. Beim Menschen ist die Rezeptorwirkung belegt: In 21 Tagen stieg die fettfreie Masse dosisabhängig, während Gesamttestosteron, SHBG, HDL und Triglyceride dosisabhängig sanken, reversibel nach dem Absetzen (Basaria 2013). Die Gewebeselektivität am Menschen ist ohne Direktvergleich mit klassischen Androgenen nicht belegt (Bond 2025).',
    benefits: [
      'Fettfreie Masse in 21 Tagen dosisabhängig gestiegen, in der höchsten Stufe etwa 1,2 kg über Placebo (Mensch, placebokontrolliert, 76 gesunde Männer, Basaria 2013)',
      'Nach Hüftfraktur placebobereinigt plus 4,8, 7,2 und 9,1 Prozent fettfreie Masse in 12 Wochen, primärer Endpunkt erreicht (Mensch, Phase 2, 108 ab 65 Jahren, 2017, nur Register und Firmenmitteilung)',
      'Oral wirksam; Leberwerte, PSA und Blutbild in der 21-Tage-Studie unverändert',
      'Anwender berichten schnellen Zuwachs an Gewicht und Kraft innerhalb weniger Wochen, oft mit Wassereinlagerung (Bericht, unkontrolliert)'
    ],
    risks: [
      'Kraft nicht gezeigt: Beinkraft in der Studie an jungen Männern unverändert, Funktion nach Hüftfraktur nur explorativ',
      'Senkt schon in 21 Tagen Gesamttestosteron, SHBG und HDL, in der höchsten Stufe auch FSH und freies Testosteron (Basaria 2013)',
      'Mehrere Fallberichte schwerer cholestatischer Leberschäden, u. a. Bilirubin 30-fach über der Norm mit Gallengangsschwund (Wallstab 2023)',
      'Publizierter Anwender-Fall (mit MK-677, 5 Wochen): HDL minus 36,4 Prozent, ALT plus 205,0 Prozent, Testosteron minus 62,3 Prozent, Fettmasse plus 15,4 Prozent (Cardaci 2022)',
      'Keine kontrollierten Daten über mehr als 12 Wochen; JAMA 2017: nur 52 Prozent der SARM-Produkte enthielten überhaupt einen SARM',
      'Dopingliste (WADA S1.2), langlebige Abbauprodukte nachweisbar; nicht für Schwangere'
    ],
    status: 'Nirgends als Arzneimittel zugelassen; nach der Phase 2 bei Hüftfraktur (VK5211, 2017) keine weitere Studie angekündigt. In DE ohne Zulassung, namentlich in der Anlage des Anti-Doping-Gesetzes (Handel zu Dopingzwecken sowie Erwerb und Besitz in nicht geringer Menge verboten). WADA-Liste 2026 S1.2, jederzeit verboten. Die FDA warnt: SARMs sind keine Nahrungsergänzungsmittel, sondern nicht zugelassene Arzneimittel, mit Risiken bis zu Leberversagen.',
    sources: [
      { title: 'Basaria et al. 2013, J Gerontol A Biol Sci Med Sci – LGD-4033 bei 76 gesunden jungen Männern, 21 Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/22459616/' },
      { title: 'ClinicalTrials.gov NCT02578095 – VK5211 nach Hüftfraktur, Registerergebnisse', url: 'https://clinicaltrials.gov/study/NCT02578095' },
      { title: 'Bond et al. 2025, Front Endocrinol – kritische Bewertung der SARMs', url: 'https://pubmed.ncbi.nlm.nih.gov/41079187/' },
      { title: 'Cardaci et al. 2022, Exp Physiol – Fallbericht LGD-4033 und MK-677', url: 'https://pubmed.ncbi.nlm.nih.gov/36303408/' },
      { title: 'Barbara et al. 2020, ACG Case Rep J – Leberschaden durch Ligandrol', url: 'https://pubmed.ncbi.nlm.nih.gov/32637435/' },
      { title: 'Wallstab et al. 2023, Z Gastroenterol – Ligandrol-induzierter Leberschaden', url: 'https://pubmed.ncbi.nlm.nih.gov/36257328/' },
      { title: 'Vignali et al. 2023, J Xenobiot – systematische Übersicht zur SARM-Sicherheit', url: 'https://pubmed.ncbi.nlm.nih.gov/37218811/' },
      { title: 'Van Wagoner et al. 2017, JAMA – Inhalt online verkaufter SARM-Produkte', url: 'https://pubmed.ncbi.nlm.nih.gov/29183075/' }
    ],
    community: [
      { title: 'biolabshop (Suche „LGD-4033")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'noopept',
    name: 'Noopept',
    altNames: 'Omberacetam, GVS-111, N-Phenylacetyl-L-Prolylglycin-Ethylester, Ноопепт',
    class: 'Dipeptid-Nootropikum (Prodrug von Cyclo-Prolylglycin), in Russland rezeptfreies Arzneimittel',
    emoji: '🧠',
    short: 'Ein russisches Dipeptid-Nootropikum, das im Körper zu einem körpereigenen Gedächtnis-Peptid wird und in Russland rezeptfrei gegen leichte kognitive Störungen verkauft wird. Russische Patientenstudien zeigen bessere Testwerte als unter Piracetam; eine placebokontrollierte Studie gibt es nicht, für Gesunde fehlen Daten.',
    moa: 'Noopept ist der Ethylester von N-Phenylacetyl-L-Prolylglycin und wurde als peptidischer Nachbau von Piracetam entworfen. Bei Ratten wird es rasch zu Cyclo-Prolylglycin umgebaut, einem körpereigenen zyklischen Dipeptid mit gedächtnisfördernder Wirkung im Tierversuch; eine Stunde nach Gabe stieg es im Hirn auf das 2,5-Fache (Gudasheva 1997). Im Hippocampus von Ratten erhöhte Noopept die Bildung von NGF und BDNF, ohne Gewöhnung über 28 Tage (Ostrovskaya 2008). In Zellkultur aktivierte es den Transkriptionsfaktor HIF-1, in Hirnschnitten wirkte es über α7-Nikotinrezeptoren auf hemmende Interneurone. Keiner dieser Mechanismen wurde am Menschen gemessen.',
    benefits: [
      'Kleine randomisierte Vergleichsstudie gegen Piracetam bei leichten kognitiven Störungen nach Gefäßerkrankung oder Hirntrauma: in der ärztlichen Gesamteinschätzung besser als Piracetam, unerwünschte Ereignisse 25 statt 55 Prozent (Neznamov & Teleshova 2008, Zahlen laut Expertenresolution 2026).',
      'Randomisierte Drei-Arm-Studie mit 150 Patienten über 45 Tage: MoCA-Gedächtnistest unter Omberacetam von 19,8 auf 23,3 Punkte, stärker als unter Piracetam/Cinnarizin oder Phenibut (Dadasheva 2022, herstellerfinanziert, ohne Placebo).',
      'Nach Schlaganfall (60 Patienten, offene Studie): nach 2 Monaten bessere Gedächtnis- und Wortflüssigkeitswerte als in der Kontrollgruppe (Amelin 2011).',
      'Prodrug eines körpereigenen Gedächtnis-Peptids: im Rattenhirn 2,5-fach mehr Cyclo-Prolylglycin nach Gabe (Tierversuch, 1997).',
      'Mehr NGF und BDNF im Hippocampus von Ratten, ohne Toleranz über 28 Tage (Tierversuch, 2008); wirkt bei Ratten auch nach Gabe über den Mund.',
      'Seit 2018 WHO-Freiname Omberacetam; in Russland als rezeptfreies Arzneimittel zugelassen.'
    ],
    risks: [
      'Keine placebokontrollierte, doppelblinde Studie; alle klinischen Arbeiten stammen aus Russland, mehrere herstellernah.',
      'Für Gesunde als Gedächtnisverstärker praktisch nicht untersucht; Mechanismus nur aus Tier, Zellkultur und Hirnschnitten.',
      'Keine Langzeitdaten über mehr als einige Monate; Pharmakokinetik beim Menschen nur aus der Herstellerinformation.',
      'Russische Fachinformation: allergische Reaktionen, bei schwerem Bluthochdruck möglicher Blutdruckanstieg; nicht in Schwangerschaft, Stillzeit, unter 18 Jahren, bei schwerer Leber- oder Nierenerkrankung.',
      'Graumarktware unzuverlässig: in einer US-Analyse 75 Prozent der deklarierten Mengen falsch, teils bis zu 4 nicht zugelassene Wirkstoffe in einem Produkt (Cohen 2021).',
      'Sport: nicht namentlich auf der WADA-Liste, Status laut Analyse von 2025 unklar (mögliche Nähe zu 4-Phenylpiracetam, S6).'
    ],
    status: 'Russland: zugelassenes, rezeptfreies Arzneimittel (Noopept, Reg.-Nr. ЛС-001577); WHO-INN Omberacetam seit 2018. DE/EU: nicht zugelassen, weder als Arzneimittel noch als Nahrungsergänzungsmittel. Ungarn: seit 25.08.2020 auf der Liste neuer psychoaktiver Substanzen. USA: nicht zugelassen, FDA-Warnbrief 2019 an einen Nootropika-Händler. WADA: nicht namentlich gelistet; Status laut Pokrywka et al. 2025 unklar, mögliche Einordnung über Ähnlichkeit zu 4-Phenylpiracetam (S6).',
    sources: [
      { title: 'Gudasheva et al. 1997, Eur J Drug Metab Pharmacokinet – Noopept als Prodrug von Cyclo-Prolylglycin im Rattenhirn', url: 'https://pubmed.ncbi.nlm.nih.gov/9358206/' },
      { title: 'Ostrovskaya et al. 2008, Bull Exp Biol Med – NGF und BDNF im Hippocampus der Ratte', url: 'https://pubmed.ncbi.nlm.nih.gov/19240853/' },
      { title: 'Neznamov & Teleshova 2009, Neurosci Behav Physiol – Noopept gegen Piracetam bei leichten kognitiven Störungen', url: 'https://pubmed.ncbi.nlm.nih.gov/19234797/' },
      { title: 'Dadasheva et al. 2022, Nevrol Neiropsikhiatr Psikhosom – Omberacetam, Piracetam/Cinnarizin und Phenibut, 150 Patienten', url: 'https://doi.org/10.14412/2074-2711-2022-2-49-55' },
      { title: 'Amelin et al. 2011, Zh Nevrol Psikhiatr – Noopept nach Schlaganfall, 60 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/22500312/' },
      { title: 'Tkacheva et al. 2026, Russian Journal of Geriatric Medicine – Expertenresolution zu Omberacetam mit Studientabelle', url: 'https://doi.org/10.37586/2686-8636-1-2026-115-123' },
      { title: 'Cohen et al. 2021, Neurol Clin Pract – fünf nicht zugelassene Wirkstoffe in Gedächtnis-Supplementen', url: 'https://pubmed.ncbi.nlm.nih.gov/34484905/' },
      { title: 'WHO Drug Information 2018 – Recommended INN List 79: Omberacetam', url: 'https://cdn.who.int/media/docs/default-source/international-nonproprietary-names-(inn)/rl79.pdf' }
    ],
    community: [
      { title: 'biolabshop (Suche „Noopept")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'ostarin',
    name: 'Ostarin (Enobosarm)',
    altNames: 'Enobosarm, MK-2866, GTx-024, S-22, SARM',
    class: 'Selektiver Androgenrezeptor-Modulator (SARM), nicht zugelassen',
    emoji: '🦵',
    short: 'Der am besten untersuchte SARM: In mehreren placebokontrollierten Studien stieg die fettfreie Masse, bei gesunden Älteren um 1,3 kg in 12 Wochen. Die Zulassung scheiterte daran, dass sich die Funktion in zwei Phase-3-Studien nicht signifikant besserte; dazu HDL-Senkung, Testosteron-Suppression und Fallberichte über Leberschäden.',
    moa: 'Ostarin ist ein nichtsteroidaler Wirkstoff, der den Androgenrezeptor aktiviert, also die Andockstelle von Testosteron. Ziel des SARM-Konzepts ist volle Wirkung in Muskel und Knochen bei geringer Wirkung auf Prostata und Haut; weil Ostarin kein Steroid ist, wird es nicht zu DHT oder Östrogen umgebaut. Beim Menschen ist die Rezeptorwirkung über gesunkenes SHBG, gesunkenes Gesamttestosteron bei Männern, HDL-Senkung und Tumoraktivität bei rezeptorpositivem Brustkrebs belegt. Ob die Gewebeselektivität klinisch so sauber ist wie im Tier, ist offen; einen Direktvergleich mit klassischen Androgenen gibt es nicht (Bond 2025).',
    benefits: [
      'Fettfreie Masse plus 1,3 kg gegenüber Placebo in 12 Wochen, Fett etwa minus 0,6 kg (Mensch, doppelblind, 120 gesunde Ältere, Dalton 2011)',
      'Treppenleistung und Insulinresistenz verbessert (HOMA-IR minus 27,5 Prozent) in derselben Studie',
      'Bei Krebspatienten Zuwachs fettfreier Masse gegenüber Ausgangswert, Median 1,5 und 1,0 kg (Mensch, Phase 2, 159 Patienten, davon 100 für die Wirksamkeit auswertbar, Dobs 2013)',
      'Phase 3 POWER: mehr Patienten ohne Muskelverlust, 41,9 gegen 30,4 und 46,5 gegen 37,9 Prozent (Mensch, 321 und 330 Patienten, 2013)',
      'Unter Semaglutid weniger Verlust fettfreier Masse, minus 1,2 gegen minus 4,1 Prozent (Mensch, 168 über 60, 16 Wochen, QUALITY, nur Firmenmitteilung 2025)',
      'Anwender berichten langsamen, trockenen Muskel- und Kraftzuwachs, oft zum Muskelerhalt in Diätphasen (Bericht, unkontrolliert)'
    ],
    risks: [
      'Funktion nicht gesichert: In beiden Phase-3-Studien besserte sich die Treppenleistung nicht signifikant, Gesamtkriterien verfehlt (2013)',
      'HDL-Cholesterin dosisabhängig um bis zu 27 Prozent gesenkt, Gesamttestosteron bei Männern gesenkt (Dalton 2011)',
      'Leber: ALT-Anstieg bei 5 von 24 in der höchsten Dosisstufe, mehrere Fallberichte schwerer cholestatischer Leberschäden, einmal mit Albumindialyse (Mertens 2024)',
      'Keine Studie an jungen Trainierenden; Wirksamkeitsdaten nur bei Älteren, Kranken und GLP-1-Patienten',
      'JAMA 2017: nur 52 Prozent online verkaufter SARM-Produkte enthielten überhaupt einen SARM, nur 41 Prozent die angegebene Menge',
      'Dopingliste (WADA S1.2), im Urin, in Haaren und Nägeln nachweisbar; nicht für Schwangere'
    ],
    status: 'Nirgends als Arzneimittel zugelassen; Entwicklung gegen Muskelschwund bei Krebs und gegen Harninkontinenz gescheitert, derzeit Phase 2 als Muskelschutz unter GLP-1-Therapie (Veru). In DE ohne Zulassung, namentlich in der Anlage des Anti-Doping-Gesetzes (Handel zu Dopingzwecken sowie Erwerb und Besitz in nicht geringer Menge verboten). WADA-Liste 2026 S1.2, jederzeit verboten. Die FDA warnt: SARMs sind keine Nahrungsergänzungsmittel, sondern nicht zugelassene Arzneimittel, mit Risiken bis zu Leberversagen.',
    sources: [
      { title: 'Dalton et al. 2011, J Cachexia Sarcopenia Muscle – Phase 2, 120 gesunde Ältere, fettfreie Masse und Treppenleistung', url: 'https://pubmed.ncbi.nlm.nih.gov/22031847/' },
      { title: 'Dobs et al. 2013, Lancet Oncol – Phase 2 bei krebsbedingtem Muskelschwund', url: 'https://pubmed.ncbi.nlm.nih.gov/23499390/' },
      { title: 'Crawford et al. 2016, Curr Oncol Rep – Design der Phase-3-Studien POWER', url: 'https://pubmed.ncbi.nlm.nih.gov/27138015/' },
      { title: 'ClinicalTrials.gov NCT01355484 – POWER 1, Registerergebnisse', url: 'https://clinicaltrials.gov/study/NCT01355484' },
      { title: 'Palmieri et al. 2024, Lancet Oncol – Enobosarm bei AR-positivem Brustkrebs', url: 'https://pubmed.ncbi.nlm.nih.gov/38342115/' },
      { title: 'ClinicalTrials.gov NCT06282458 – QUALITY, Enobosarm unter GLP-1-Therapie (ohne hinterlegte Ergebnisse)', url: 'https://clinicaltrials.gov/study/NCT06282458' },
      { title: 'Mertens et al. 2024, Z Gastroenterol – schwerer Leberschaden nach Ostarin', url: 'https://pubmed.ncbi.nlm.nih.gov/37871633/' },
      { title: 'Vignali et al. 2023, J Xenobiot – systematische Übersicht zur SARM-Sicherheit', url: 'https://pubmed.ncbi.nlm.nih.gov/37218811/' },
      { title: 'Van Wagoner et al. 2017, JAMA – Inhalt online verkaufter SARM-Produkte', url: 'https://pubmed.ncbi.nlm.nih.gov/29183075/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Ostarine")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'peg-mgf',
    name: 'PEG-MGF',
    altNames: 'PEGyliertes Mechano Growth Factor, Pegylated MGF; verwandt: MGF-E-Peptid (MGF-24aa-E, MGF-Ct24E), IGF-1Ec (Mensch), IGF-1Eb (Nager)',
    class: 'PEGyliertes E-Domänen-Peptid der IGF-1-Spleißvariante IGF-1Ec, nicht zugelassen',
    emoji: '💪',
    short: 'Die PEG-verlängerte Kunstversion eines Muskel-Reparatursignals: Der Muskel bildet unter Last mehr von der IGF-1-Variante MGF, und das kurze MGF-Peptid schützte im Tier Herz und Nervenzellen. PEG-MGF selbst wurde nie untersucht, weder am Tier noch am Menschen, und zentrale Zellbefunde zum Peptid ließen sich nicht reproduzieren.',
    moa: 'MGF ist eine Spleißvariante des IGF-1-Gens (beim Menschen IGF-1Ec, bei Nagern IGF-1Eb), deren Endstück, die E-Domäne, durch einen eigenen Einschub verändert ist. Der Muskel bildet ihre Botschaft vermehrt nach Dehnung und Krafttraining. Das gehandelte Peptid entspricht den 24 letzten Aminosäuren dieser E-Domäne; PEG-MGF ist es gekoppelt an Polyethylenglykol, das den Abbau verzögern und die Verweildauer verlängern soll. In einigen Zellstudien steigerte das kurze Peptid die Teilung von Muskelvorläuferzellen und bremste ihre Ausreifung, und zwar nicht über den IGF-1-Rezeptor; der eigentliche Angriffspunkt ist unbekannt. Ein natürlich vorkommendes MGF-Peptid wurde im Körper bisher nicht nachgewiesen, und kurze MGF-Peptide aktivierten den IGF-1-Rezeptor in einer Laborstudie bei keiner Konzentration.',
    benefits: [
      'Der Muskel reguliert MGF selbst: Nach schwerem Krafttraining stieg die MGF-Botschaft bei 8 jungen Probanden, bei 7 Älteren von 70 bis 82 Jahren nicht (Hameed 2003, Mensch, Genexpression, keine Gabe)',
      'Das MGF-E-Peptid aktivierte in Kultur menschliche Satellitenzellen von Neugeborenen und jungen Erwachsenen, nicht von älteren Spendern (Kandalla 2011, Zellkultur)',
      'Bei Schafen nach Herzinfarkt nach 8 Tagen 35 Prozent weniger geschädigter Herzmuskel unter der MGF-E-Domäne (Carpenter 2008, Tier, nicht PEGyliert)',
      'Bei Mäusen nach Infarkt bessere Pumpfunktion nach 2 Wochen und bei lokaler Freisetzung geringere Sterblichkeit (Mavrommatis 2013, Peña 2015, Tier)',
      'Schützte bei Rennmäusen Nervenzellen nach vorübergehender Hirnischämie (Dluzniewska 2005, Tier)'
    ],
    risks: [
      'Keine einzige begutachtete Studie zu PEG-MGF, keine Humandaten zu irgendeinem Verabreichungsweg (FDA, Stand 22.04.2026).',
      'Zwei Pharmaunternehmen konnten die Zelleffekte des MGF-Peptids nicht reproduzieren (Fornaro 2014).',
      'Dauerhafte Aktivierung des Nager-E-Peptids machte Mausmuskeln größer, aber schwächer (Brisson 2014).',
      'Das MGF-E-Peptid regte im Labor Prostatakrebszellen zum Wachstum an, unabhängig vom IGF-1-Rezeptor (Armakolas 2010); bei Krebs oder Krebsvorgeschichte keine Datengrundlage.',
      'FDA nennt mögliches Immunogenitätsrisiko und Verunreinigungen; im Graumarkt kursieren verschiedene MGF-Varianten.'
    ],
    status: 'In DE, EU und USA kein zugelassenes Arzneimittel, nie klinisch entwickelt; Verkauf als Forschungschemikalie. WADA 2026 S2.3 (Mechano growth factors), im und außerhalb des Wettkampfs verboten, MGF-Peptide seit 2005 erfasst; in DE in der Anlage des Anti-Doping-Gesetzes (MGF und MGF-Varianten). FDA: PEG-MGF als Rezeptursubstanz mit möglichen erheblichen Risiken geführt, Nominierung zurückgezogen (Stand 22.04.2026).',
    sources: [
      { title: 'Hameed M et al., J Physiol 2003 – MGF-mRNA nach Krafttraining bei Jungen erhöht, bei Älteren nicht', url: 'https://pubmed.ncbi.nlm.nih.gov/12562960/' },
      { title: 'Yang SY, Goldspink G, FEBS Lett 2002 – MGF-E-Domäne fördert Myoblastenteilung', url: 'https://pubmed.ncbi.nlm.nih.gov/12095637/' },
      { title: 'Matheny RW et al., Endocrinology 2010 – Übersicht; kein natürliches MGF-Peptid nachgewiesen', url: 'https://pubmed.ncbi.nlm.nih.gov/20130113/' },
      { title: 'Fornaro M et al., Am J Physiol Endocrinol Metab 2014 – MGF-Peptid ohne Wirkung auf Myoblasten und Muskelstammzellen', url: 'https://pubmed.ncbi.nlm.nih.gov/24253050/' },
      { title: 'Carpenter V et al., Heart Lung Circ 2008 – MGF-E-Domäne nach Infarkt beim Schaf', url: 'https://pubmed.ncbi.nlm.nih.gov/17581790/' },
      { title: 'Brisson BK et al., Am J Physiol Endocrinol Metab 2014 – E-Peptide: mehr Muskelmasse, weniger Kraft', url: 'https://pubmed.ncbi.nlm.nih.gov/24569593/' },
      { title: 'Armakolas A et al., Prostate 2010 – MGF-E-Peptid fördert Wachstum von Prostatakrebszellen', url: 'https://pubmed.ncbi.nlm.nih.gov/20564425/' },
      { title: 'Dominikowski A et al., Front Endocrinol 2026 – PEG-MGF ohne begutachtete Humanstudien (Evidenzstufe D)', url: 'https://pubmed.ncbi.nlm.nih.gov/42395176/' },
      { title: 'FDA – Bulk Drug Substances mit möglichen Sicherheitsrisiken (PEG-MGF)', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' }
    ],
    community: [
      { title: 'biolabshop (Suche „PEG-MGF")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'phenibut',
    name: 'Phenibut',
    altNames: 'β-Phenyl-GABA, 4-Amino-3-phenylbuttersäure, Aminophenylbuttersäure, Fenibut, Noofen, Anvifen, Фенибут',
    class: 'GABA-B-Agonist und Gabapentinoid (α2-δ-Ligand), in Russland verschreibungsfähiges Anxiolytikum',
    emoji: '😌',
    short: 'Ein sowjetisches Angst- und Beruhigungsmittel, das in Osteuropa seit den 1960er Jahren verordnet und im Westen online als Nootropikum verkauft wird. Die angstlösende Wirkung ist in russischen Studien beschrieben, eine placebokontrollierte Studie fehlt; bei täglicher Einnahme drohen Toleranz, Abhängigkeit und ein teils schwerer Entzug.',
    moa: 'Phenibut ist GABA mit einem Phenylring, der das Molekül hirngängig macht; Baclofen ist sein Chlor-Abkömmling. Es aktiviert den GABA-B-Rezeptor, deutlich schwächer als Baclofen (Dissoziationskonstante 92 gegen 6 µM), wobei dort nur die R-Form wirkt. Seit 2015 ist bekannt, dass es wie Gabapentin und Pregabalin an die α2-δ-Untereinheit spannungsabhängiger Calciumkanäle bindet, mit 4-mal höherer Affinität als am GABA-B-Rezeptor (Zvejniece 2015). Russische Arbeiten beschreiben zusätzlich Effekte auf das Dopaminsystem und einen Gegenspieler-Effekt zu Beta-Phenethylamin. Phenibut wird kaum abgebaut und unverändert über die Niere ausgeschieden, Halbwertszeit 5 bis 6 Stunden.',
    benefits: [
      'In Osteuropa seit den 1960er Jahren klinisch gegen Angst, Anspannung, Schlafstörungen und Erschöpfung eingesetzt, erstmals 1965 in der Sowjetunion zugelassen (Lapin 2001; Bonnet 2024).',
      'Systematischer Review: 11 klinische Studien mit 583 Patienten, unerwünschte Ereignisse bei 5,66 Prozent, am häufigsten Schläfrigkeit (Kupats 2020).',
      'Randomisierte Drei-Arm-Studie mit 150 Patienten über 45 Tage: Angst (Hamilton-Skala) im Phenibut-Arm um 20,0 Punkte gesenkt, ohne Placebo (Dadasheva 2022).',
      'Angststudie mit 120 Patienten: nach 60-tägigem Kurs Besserung auch einen Monat nach Therapieende erhalten, nach 21 Tagen nicht (Esin 2022, randomisiert ohne Placebo).',
      'Bei chronischer Erschöpfung nach Gefäßerkrankung Rückgang um 30 bis 50 Prozent bei drei Vierteln der Behandelten (53 Patienten, offen, Vorob\'eva 2017).',
      'Anwenderberichte (unkontrolliert, 229 Erowid-Berichte): Angstlösung und Redseligkeit, genutzt u. a. gegen Schlafprobleme und Angst; mehrere berichten zugleich, den Konsum schwer begrenzen zu können (Behmer Hansen 2023).'
    ],
    risks: [
      'Toleranz und körperliche Abhängigkeit bei täglicher Einnahme; Entzug teils schon nach 1 Woche, mit Angst, Schlaflosigkeit, Psychose, Delir und Krampfanfällen (8 Prozent), in 44 Prozent der publizierten Fälle Intensivstation (Feldman 2023).',
      'US-Giftnotrufe 2009 bis 2019: 1.320 Expositionen, 12,6 Prozent schwere Verläufe, 3 Todesfälle; bei Phenibut allein 10,2 Prozent schwer (Graves 2020). Giftinformationszentrum Nord: 17 Fälle, alle leicht bis mittelschwer (Bonnet 2024).',
      'Gefährlich in Kombination mit Opioiden, Alkohol, Benzodiazepinen oder Gabapentinoiden (Atemdepression); kein Gegenmittel, in Routine-Drogentests nicht nachweisbar.',
      'Keine placebokontrollierte Studie gefunden; Wirksamkeitsdaten aus Russland und Lettland, teils herstellerfinanziert; nootropische Wirkung bei Gesunden nicht untersucht.',
      'Online-Ware mit stark abweichendem Gehalt: 3 von 6 Produkten mit deutlich weniger, 1 mit mehr Wirkstoff als angegeben (Upmanis 2024).',
      'Nach regelmäßiger Einnahme nicht abrupt absetzen; Absetzen ärztlich begleiten.'
    ],
    status: 'Deutschland: nicht zugelassen; laut Deutschem Ärzteblatt (Bonnet 2024) vom Neue-psychoaktive-Stoffe-Gesetz erfasst, Handel, Herstellung, Erwerb, Besitz und Weitergabe verboten. Nach derselben Quelle auch in Australien, Frankreich, Großbritannien, Italien, Ungarn und Litauen nicht legal; Australien: Schedule 9 laut TGA-Zwischenentscheidung ab 01.02.2018. Russland: verschreibungsfähiges Arzneimittel; Lettland: als Noofen verschreibungspflichtig registriert (Herstellerangabe). USA: nicht zugelassen, laut FDA kein zulässiger Nahrungsergänzungs-Bestandteil, FDA-Warnbrief 2019. WADA: nicht gelistet, von der US-Antidopingagentur als nicht verboten geführt (laut Pokrywka 2025).',
    sources: [
      { title: 'Bonnet et al. 2024, Dtsch Arztebl Int – Phenibut, illegales Nahrungsergänzungsmittel; NpSG, GIZ-Nord-Daten', url: 'https://pubmed.ncbi.nlm.nih.gov/38377332/' },
      { title: 'Lapin 2001, CNS Drug Rev – Phenibut als Tranquilizer und Nootropikum', url: 'https://pubmed.ncbi.nlm.nih.gov/11830761/' },
      { title: 'Zvejniece et al. 2015, Pharmacol Biochem Behav – R-Phenibut bindet an die α2-δ-Untereinheit', url: 'https://pubmed.ncbi.nlm.nih.gov/26234470/' },
      { title: 'Kupats et al. 2020, Pharmacopsychiatry – systematischer Review: 11 Studien, 583 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/32340063/' },
      { title: 'Graves et al. 2020, MMWR – 1.320 Phenibut-Expositionen an US-Giftnotrufzentralen', url: 'https://pubmed.ncbi.nlm.nih.gov/32881852/' },
      { title: 'Feldman et al. 2023, Clin Toxicol – systematischer Review zum Phenibut-Entzug', url: 'https://pubmed.ncbi.nlm.nih.gov/38112312/' },
      { title: 'Weleff et al. 2023, J Addict Med – Vergiftung und Entzug, 62 Fälle', url: 'https://pubmed.ncbi.nlm.nih.gov/37579098/' },
      { title: 'Dadasheva et al. 2022, Nevrol Neiropsikhiatr Psikhosom – drei Nootropika, 150 Patienten', url: 'https://doi.org/10.14412/2074-2711-2022-2-49-55' },
      { title: 'Esin et al. 2022, Zh Nevrol Psikhiatr – kurzer gegen langen Kurs bei Angst', url: 'https://pubmed.ncbi.nlm.nih.gov/36537634/' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'stenabolic',
    name: 'Stenabolic (SR9009)',
    altNames: 'SR9009, SR-9009, Rev-erb-Agonist, oft falsch als SARM geführt',
    class: 'Synthetischer Agonist der Uhr-Kernrezeptoren REV-ERBalpha und REV-ERBbeta, nicht zugelassen',
    emoji: '⏱️',
    short: 'Greift an zwei Kernrezeptoren der inneren Uhr an, die in der Ausdauermuskulatur Mitochondrien und Fettverbrennung mitsteuern – im Tier messbar mehr Laufleistung und weniger Fett. Am Menschen gibt es keine einzige Studie, und oral erreicht die Substanz den Kreislauf kaum.',
    moa: 'SR9009 besetzt die Bindetasche der Kernrezeptoren REV-ERBalpha und REV-ERBbeta, deren natürlicher Ligand Häm ist, und verschiebt damit das circadiane Genprogramm in Leber, Muskel und Fettgewebe (Solt et al., Nature 2012; IC50 670 nM an REV-ERBalpha, 800 nM an REV-ERBbeta). Für den Sport interessant ist die Muskelachse: REV-ERBalpha ist in oxidativer Muskulatur stark exprimiert, sein Fehlen senkt Mitochondriengehalt und oxidative Kapazität über den Signalweg Lkb1-Ampk-Sirt1-Ppargc-1alpha, seine Aktivierung erhöhte im Tier die Laufleistung (Woldt et al., Nat Med 2013). Zwei Einschränkungen gehören zum Mechanismus: SR9009 verändert Zellvitalität, Stoffwechsel und Gentranskription auch in Zellen, in denen REV-ERBalpha und REV-ERBbeta beide genetisch entfernt sind, taugt also nicht als Surrogat für REV-ERB-Aktivität (Dierickx et al., PNAS 2019), und es gibt Hinweise auf zusätzliche Aktivität am Leber-X-Rezeptor. Kein SARM: Der Androgenrezeptor ist nicht beteiligt, die WADA führt die Substanz bei den metabolischen Modulatoren (S4.4.1), nicht bei den anabolen Wirkstoffen.',
    benefits: [
      'Mäuse liefen unter 100 mg/kg über 30 Tage im Ausdauertest signifikant länger und weiter als Kontrolltiere (Woldt et al., Nat Med 2013, n = 6 pro Gruppe, Gabe intraperitoneal).',
      'Fettleibige Mäuse (20 Wochen alt, 41 g, 14 Wochen Hochfettdiät) verloren über 12 Tage 60 Prozent mehr Gewicht als die Kontrollgruppe (Solt et al., Nature 2012, Maus, 100 mg/kg zweimal täglich intraperitoneal).',
      'Blutfette und Blutzucker im selben Versuch: Gesamtcholesterin minus 47 Prozent, freie Fettsäuren minus 23 Prozent, Glukose minus 19 Prozent, Triglyzeride minus 12 Prozent, Leptin minus 80 Prozent (2012, Maus).',
      'Der Sauerstoffverbrauch stieg um 5 Prozent bei 15 Prozent geringerer Bewegungsaktivität – ein Energieverbrauchseffekt ohne mehr Bewegung (2012, Maus).',
      'In C2C12-Muskelzellen erhöhten SR9009 und SR9011 in 5 µM den Mitochondriengehalt (Woldt et al. 2013, Zellkultur).',
      'Der Zielrezeptor selbst ist am Menschen bedeutsam: REV-ERBalpha steuert in oxidativer Muskulatur Mitochondrienzahl, oxidative Funktion und Autophagie (Woldt et al. 2013, Genetik plus Zellversuche).'
    ],
    risks: [
      'Keine Humanstudie zu Wirkung oder Verträglichkeit; Abfragen der ClinicalTrials.gov-Schnittstelle zu SR9009 und Stenabolic geben am 27.09.2026 keinen Studieneintrag zurück.',
      'Leber: akutes Leberversagen bei einem 17-Jährigen nach etwa 8 Wochen oraler Einnahme eines online gekauften Produkts, mit Enzephalopathie Grad 3 und Notfall-Lebertransplantation (Case Reports Hepatol 2026); hepatozellulärer Leberschaden bei einem 40-Jährigen mit Besserung nach Absetzen (Cureus 2025).',
      'Oral kommt kaum etwas an: Plasmaspiegel nach Schlundgabe unter 0,3 µg/ml bei Darmspiegeln über 10 µg/ml, Halbwertszeit rund 0,5 Stunden; die Wirkung könnte auf den Darm begrenzt sein (Yu et al., Nat Commun 2021).',
      'Die Effekte sind nicht sauber dem Zielrezeptor zuzuordnen – sie treten auch ohne REV-ERBalpha und REV-ERBbeta auf (Dierickx et al., PNAS 2019).',
      'Produktqualität: In 44 als SARM verkauften Internetprodukten enthielten nur 52 Prozent einen SARM, 39 Prozent einen anderen nicht zugelassenen Wirkstoff (darunter SR9009), in 59 Prozent wich die Menge vom Etikett ab (Van Wagoner et al., JAMA 2017).',
      'Im Sport jederzeit verboten (WADA 2026, S4.4.1) und in Deutschland namentlich in der Anlage zum Anti-Doping-Gesetz; im Tierversuch verkürzten REV-ERB-Agonisten REM- und Tiefschlaf (Banerjee et al. 2014).'
    ],
    status: 'Kein zugelassenes Arzneimittel und kein zugelassenes Nahrungsergänzungsmittel in DE, EU oder USA; Vertrieb als Forschungschemikalie oder als nicht zugelassenes Supplement, kein Eintrag in ClinicalTrials.gov. Dopingliste: WADA-Verbotsliste 2026 (in Kraft ab 01.01.2026), Abschnitt S4.4.1 Metabolische Modulatoren, wörtlich „Rev-erbɑ agonists, e.g. SR9009, SR9011“; Klasse S4.4 ist nicht-spezifiziert und jederzeit verboten. Deutschland: „SR9009, synonym Stenabolic“ steht namentlich in der Anlage zu § 2 Absatz 3 AntiDopG unter den Stoffwechsel-Modulatoren – Erwerb, Besitz und Verbringen in nicht geringer Menge zum Zwecke des Dopings sind verboten, ebenso Handel, Abgabe und Verschreiben zu diesem Zweck. Nachweisbar über N-dealkylierte Metaboliten, für die zertifizierte Referenzmaterialien vorliegen.',
    sources: [
      { title: 'Solt et al., Nature 2012 – synthetische REV-ERB-Agonisten verändern circadianes Verhalten und Stoffwechsel der Maus', url: 'https://pubmed.ncbi.nlm.nih.gov/22460951/' },
      { title: 'Woldt et al., Nat Med 2013 – Rev-erb-alpha, Mitochondrien und Laufleistung; SR9009 100 mg/kg über 30 Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/23852339/' },
      { title: 'Dierickx et al., PNAS 2019 – SR9009 wirkt auch in Zellen ohne beide REV-ERB-Rezeptoren', url: 'https://pubmed.ncbi.nlm.nih.gov/31127047/' },
      { title: 'Yu et al., Nat Commun 2021 – nach oraler Gabe Plasmaspiegel unter 0,3 µg/ml, Wirkung möglicherweise auf den Darm begrenzt', url: 'https://pubmed.ncbi.nlm.nih.gov/34493722/' },
      { title: 'Chen et al., Adv Sci 2025 – orale Gabe, sehr niedrige Exposition außerhalb des Darms', url: 'https://pubmed.ncbi.nlm.nih.gov/40539410/' },
      { title: 'Wang et al., Theranostics 2020 – Übersicht REV-ERBalpha als Wirkstoffziel, schlechte Bioverfügbarkeit, Off-Target-Aktivität', url: 'https://pubmed.ncbi.nlm.nih.gov/32226546/' },
      { title: 'Shams Bin Shaheen et al., Case Reports Hepatol 2026 – akutes Leberversagen nach oraler SR9009-Einnahme', url: 'https://pubmed.ncbi.nlm.nih.gov/42750938/' },
      { title: 'Govil et al., Cureus 2025 – Leberschaden nach Stenabolic (im Titel fälschlich als SARM bezeichnet)', url: 'https://pubmed.ncbi.nlm.nih.gov/40765588/' },
      { title: 'Van Wagoner et al., JAMA 2017 – Inhaltsstoffe von 44 als SARM verkauften Internetprodukten', url: 'https://pubmed.ncbi.nlm.nih.gov/29183075/' },
      { title: 'Geldof et al., Int J Mol Sci 2016 – SR9009 in einem Schwarzmarktprodukt bestätigt, 8 Metaboliten, 1511 Dopingproben ohne Nachweis', url: 'https://pubmed.ncbi.nlm.nih.gov/27706103/' },
      { title: 'WADA – Prohibited List 2026, S4.4.1 Rev-erb-alpha-Agonisten', url: 'https://www.wada-ama.org/en/prohibited-list' },
      { title: 'Anlage zu § 2 Absatz 3 Anti-Doping-Gesetz – SR9009, synonym Stenabolic', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [
      { title: 'biolabshop (Suche „Stenabolic")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'b7-33',
    name: 'B7-33',
    altNames: 'B7-33 Peptid, einkettiges Relaxin-2-Analogon, Relaxin-B-Kettenderivat, RXFP1-Agonist B7-33',
    class: 'Einkettiges Analogon des Hormons Relaxin-2, funktionell selektiver RXFP1-Agonist, nicht zugelassen',
    emoji: '🫀',
    short: 'Relaxin-2 auf eine einzige Peptidkette eingekürzt, mit einem Kunstgriff: B7-33 aktiviert am Rezeptor RXFP1 vor allem den ERK1/2-Arm, an dem der Abbau von Bindegewebe hängt, und nur schwach den cAMP-Arm. Im Tier senkt das Fibrose in Herz, Lunge und Niere; am Menschen ist zu B7-33 nichts untersucht, und das vollständige Hormon Serelaxin ist bei akuter Herzinsuffizienz an harten Endpunkten gescheitert.',
    moa: 'Relaxin-2 wirkt über den G-Protein-gekoppelten Rezeptor RXFP1 und stößt dort mehrere Signalwege an, darunter cAMP und die Kinasen ERK1/2. B7-33 besteht nur aus einem Teil der B-Kette dieses Hormons: sechs Reste am N-Terminus entfernt, die Cysteine an Position 11 und 23 durch Serin ersetzt, dadurch wasserlöslich, während die unveränderte B-Kette unlöslich und funktionslos ist. Es nutzt dieselben Kontaktstellen wie das Hormon, denn Austausch der Schlüsselreste B13, B17 und B20 hebt Bindung und Wirkung vollständig auf; den verwandten Rezeptor RXFP2 aktiviert es nicht. Der Kern des Konzepts ist die Ungleichheit: In Zellen mit überexprimiertem RXFP1 ist B7-33 schwach (pKi 5,54 gegenüber 8,96 für Relaxin-2; cAMP pEC50 5,12 gegenüber 10,49), in Fibroblasten mit natürlicher Rezeptorausstattung aktiviert es ERK1/2 und das kollagenabbauende Enzym MMP-2 wie das Hormon. Nach den Zellversuchen läuft das über Doppelkomplexe aus RXFP1 und dem Angiotensin-II-Typ-2-Rezeptor, da ein Antagonist an einem der beiden den MMP-2-Effekt aufhebt.',
    benefits: [
      'Senkt Herzfibrose im Tier: Rattenherz nach Infarkt (Behandlung Woche 8 bis 12, weniger Kollagen im linken Ventrikel und niedrigerer enddiastolischer Druck) und Mausherz im Isoprenalin-Modell (interstitielles Kollagen etwa 51 Prozent niedriger, Relaxin-2 etwa 57 Prozent) bei unverändertem Blutdruck (Hossain et al. 2016, Tierversuch).',
      'Kardioprotektion nach Ischämie und Wiedereröffnung in der Maus: Infarktgröße 21,99 gegenüber 45,32 Prozent unter Trägerlösung, fraktionelle Verkürzung 29 gegenüber 23 Prozent nach 24 Stunden (Devarakonda et al. 2020, Tierversuch, CD1-Mäuse).',
      'Im direkten Vergleich senkten B7-33 und Relaxin die Fibrose des linken Ventrikels gleichwertig, der ACE-Hemmer Perindopril nicht (Alam et al. 2023, Maus, Behandlung Tag 7 bis 14).',
      'Wirkt auch außerhalb des Herzens: normalisierte Epithelverdickung und Lungenkollagen im Ovalbumin-Modell der Maus über 2 Wochen, weniger Nierenfibrose nach Harnleiterligatur mit mehr MMP-2 und weniger TIMP-1 (Hossain et al. 2016; Bhuiyan et al. 2021, Tierversuche).',
      'Aus B7-33 freisetzenden Implantatbeschichtungen entstand eine um 49,2 Prozent dünnere Bindegewebskapsel über 6 Wochen in der Maus (Welch et al. 2019) — ein Ansatz ohne Injektion.',
      'Anders als Relaxin-2, das eine implantierte Prostatageschwulst um mehr als 150 Prozent wachsen ließ, tat B7-33 das im selben Mausmodell nicht (Hossain et al. 2016).'
    ],
    risks: [
      'Keine Studie am Menschen: 0 Einträge bei ClinicalTrials.gov, und keine der 12 Arbeiten, die B7-33 im Abstract nennen, hat menschliche Teilnehmer. Keine Toxikologie, keine Pharmakokinetik am Menschen, keine Fallberichte.',
      'Das Muttermolekül ist an harten Endpunkten gescheitert: Serelaxin verfehlte in RELAX-AHF-2 mit 6545 Patienten beide primären Endpunkte (kardiovaskulärer Tod an Tag 180 8,7 gegenüber 8,9 Prozent; Verschlechterung an Tag 5 6,9 gegenüber 7,7 Prozent). Die antifibrotische Frage wurde dort nicht geprüft, ist also offen und nicht widerlegt.',
      'Sehr kurze Verweildauer: Halbwertszeit in Serum in vitro etwa 6 Minuten, durch Fettsäure-Konjugation auf 60 Minuten steigerbar. Tierstudien arbeiten mit täglicher Gabe.',
      'Widersprüchliche Rezeptordaten, von der Entwicklergruppe selbst benannt: schwache Affinität und Potenz am überexprimierten RXFP1, volle Wirkung erst in Fibroblasten; die Erklärung über RXFP1-AT2-Heterodimere stammt aus Antagonistenversuchen in Zellen.',
      'RXFP1-Aktivierung weitet Gefäße; Serelaxin wurde in den großen Studien nur bei systolischem Blutdruck von mindestens 125 mmHg eingesetzt. Für B7-33 gibt es dazu keine Humandaten.',
      'Als Forschungspeptid verkauft: Identität, Reinheit und Gehalt der Handelsware sind ungeprüft. Die 97 Prozent Reinheit der Originalarbeit sind eine Laborangabe zu Studienmaterial.'
    ],
    status: 'Präklinische Forschung; in DE/EU und den USA kein zugelassenes Arzneimittel und kein verkehrsfähiges Nahrungsergänzungsmittel, kein Eintrag in den Studienregistern. Auch das vollständige Hormon hat keine Zulassung: Die EMA lehnte Reasanz (Serelaxin) am 23. Mai 2014 ab, die FDA erteilte 2014 einen Complete Response Letter. Im Sport jederzeit verboten: Relaxin und seine Analoga stehen nicht namentlich in der WADA-Verbotsliste 2026, damit greift Abschnitt S0 für Substanzen ohne aktuelle Zulassung einer staatlichen Gesundheitsbehörde.',
    sources: [
      { title: 'Hossain et al., Chem Sci 2016 – Design von B7-33, funktionelle Selektivität an RXFP1, drei Tiermodelle', url: 'https://pubmed.ncbi.nlm.nih.gov/30155023/' },
      { title: 'Devarakonda et al., J Am Heart Assoc 2020 – B7-33 bei Ischämie-Reperfusion der Maus', url: 'https://pubmed.ncbi.nlm.nih.gov/32295457/' },
      { title: 'Alam et al., Biomed Pharmacother 2023 – B7-33 gegen Perindopril im Kardiomyopathie-Modell', url: 'https://pubmed.ncbi.nlm.nih.gov/36753958/' },
      { title: 'Marshall et al., Eur J Pharmacol 2017 – Gefäßwirkungen von B7-33 im Vergleich zu Serelaxin', url: 'https://pubmed.ncbi.nlm.nih.gov/28478069/' },
      { title: 'Handley et al., Int J Mol Sci 2023 – schwache Affinität am überexprimierten RXFP1, Stand der Weiterentwicklung', url: 'https://pubmed.ncbi.nlm.nih.gov/37628851/' },
      { title: 'Praveen et al., Int J Mol Sci 2023 – Halbwertszeit in Serum und Lipidierung', url: 'https://pubmed.ncbi.nlm.nih.gov/37047588/' },
      { title: 'Welch et al., ACS Appl Mater Interfaces 2019 – B7-33 freisetzende Beschichtung, Kapseldicke', url: 'https://pubmed.ncbi.nlm.nih.gov/31713411/' },
      { title: 'Bhuiyan et al., FASEB J 2021 – Nierenfibrose unter Relaxin, B7-33 und Perindopril', url: 'https://pubmed.ncbi.nlm.nih.gov/33908676/' },
      { title: 'Metra et al., N Engl J Med 2019 – RELAX-AHF-2, Serelaxin verfehlt beide primären Endpunkte', url: 'https://pubmed.ncbi.nlm.nih.gov/31433919/' },
      { title: 'EMA – Fragen und Antworten zur Ablehnung der Zulassung von Reasanz (Serelaxin), 23. Mai 2014', url: 'https://www.ema.europa.eu/de/documents/smop-initial/questions-and-answers-refusal-marketing-authorisation-reasanz_de.pdf' },
      { title: 'ClinicalTrials.gov – keine eingetragene Studie zu B7-33', url: 'https://clinicaltrials.gov/search?term=B7-33' }
    ],
    community: [
      { title: 'biolabshop (Suche „B7-33")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'dim',
    name: 'DIM (Diindolylmethan)',
    altNames: '3,3\'-Diindolylmethan, Diindolylmethane, BR-DIM, BioResponse DIM, Indol-3-Carbinol-Dimer',
    class: 'Indol aus Kreuzblütlern (Umbauprodukt von Indol-3-Carbinol), Modulator des Östrogenstoffwechsels, in der EU nicht zugelassenes neuartiges Lebensmittel',
    emoji: '🥦',
    short: 'Umbauprodukt aus Brokkoli und Kohl, das den Östrogenabbau beim Menschen messbar zu den schwächer wirksamen 2-Hydroxy-Östrogenen verschiebt und SHBG anhebt – gezeigt in einer 12-Monats-Studie mit 130 Frauen. Ein Nutzen für klinische Endpunkte ist bisher nicht belegt, und unter Tamoxifen sanken die wirksamen Abbauprodukte.',
    moa: 'Aus Glucobrassicin der Kreuzblütler entsteht durch Myrosinase Indol-3-Carbinol, das im sauren Magen vor allem zu DIM kondensiert. Am besten untersucht ist die Aktivierung des Arylhydrocarbon-Rezeptors: Sie induziert CYP1A1, das Östrogene vor allem an Position 2 hydroxyliert, und CYP1B1, das vor allem an Position 4 hydroxyliert, sodass das Verhältnis von 2- zu 16α-Hydroxy-Östrogenen steigt; 2-Hydroxyöstrogen wirkt schwächer, 16α-Hydroxyöstrogen behält seine östrogene Aktivität. In Prostatakrebszellen ist DIM zudem ein kompetitiver Androgenrezeptor-Antagonist. Beim Menschen wird DIM schnell zu hydroxylierten und konjugierten Metaboliten umgebaut, von denen einer den Arylhydrocarbon-Rezeptor stärker aktiviert als DIM selbst. In Leber- und Darmzellen aktiviert DIM außerdem den Pregnan-X-Rezeptor und induziert CYP3A4 und P-Glykoprotein.',
    benefits: [
      'Östrogenabbau verschoben: Verhältnis 2- zu 16α-Hydroxyestron +3,2 unter DIM vs. -0,7 unter Placebo, primärer Endpunkt erreicht (doppelblinde RCT, 130 Frauen unter Tamoxifen, 12 Monate, Thomson et al. 2017)',
      'SHBG stieg um 25 nmol/L gegenüber 1,1 nmol/L unter Placebo (gleiche Studie)',
      'Pilotstudie nach Brustkrebs: 2-Hydroxyestron signifikant erhöht, Metaboliten-Verhältnis nicht signifikant um 47 % gestiegen (RCT, n = 19, 30 Tage, Dalessandri et al. 2004)',
      'Einarmige Studie mit 23 BRCA-Trägerinnen: weniger Drüsengewebe im MRT, Estradiol von 159 auf 102 pmol/l nach 1 Jahr (Yerushalmi et al. 2020) – ohne Placebogruppe',
      'Über 6 bis 12 Monate gut verträglich, Nebenwirkungen nicht häufiger als unter Placebo (Castañon et al. 2012, n = 551; Thomson et al. 2017)'
    ],
    risks: [
      'Kein klinischer Nutzen belegt: bei 551 Frauen mit leichten Zellveränderungen am Gebärmutterhals CIN2+ 9 % vs. 12 %, nicht signifikant (Castañon et al. 2012); keine Änderung der Brustdichte (Thomson et al. 2017)',
      'Tamoxifen: Spiegel von Endoxifen und anderen wirksamen Metaboliten sanken unter DIM über 12 Monate (Thomson et al. 2017)',
      'Hormontherapie: bei Frauen mit Estradiol-Pflaster 6 von 10 Östrogenmetaboliten verändert, mögliche Abschwächung (Newman und Smeaton 2025); in Zellversuchen Induktion von CYP3A4 und P-Glykoprotein',
      'Höhere Studiendosen: Übelkeit, Kopfschmerz, Erbrechen bei Einzeldosen von 300 mg; Hyponatriämie Grad 3 bei 2 von 4 Patienten unter 300 mg zweimal täglich (Reed et al. 2008; Heath et al. 2010)',
      'Für populäre Zwecke wie Akne, Östrogendominanz oder Testosteron beim Mann keine randomisierten Studien; Tierdaten widersprüchlich',
      'In der EU nicht zugelassenes neuartiges Lebensmittel, mehrere RASFF-Meldungen seit 2021'
    ],
    status: 'EU/DE: als nicht zugelassenes neuartiges Lebensmittel behandelt (RASFF-Meldungen 2021 bis 2026, zuletzt 2026.7182); nicht als Nahrungsergänzungsmittel verkehrsfähig, kein zugelassenes Arzneimittel, keine Höchstmengen von EFSA oder BfR. USA: als Nahrungsergänzungsmittel im Handel und Prüfsubstanz in klinischen Studien. Doping: auf der WADA-Liste 2026 nicht namentlich genannt.',
    sources: [
      { title: 'Thomson et al. 2017, Breast Cancer Res Treat – 12-Monats-RCT unter Tamoxifen: Östrogenabbau verschoben, SHBG höher, Tamoxifen-Metaboliten niedriger', url: 'https://pubmed.ncbi.nlm.nih.gov/28560655/' },
      { title: 'Castañon et al. 2012, Br J Cancer – RCT mit 551 Frauen: kein signifikanter Effekt auf Zellveränderungen am Gebärmutterhals', url: 'https://pubmed.ncbi.nlm.nih.gov/22075942/' },
      { title: 'Del Priore et al. 2010, Gynecol Oncol – orales DIM bei CIN 2 und 3, kein Unterschied zu Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/19939441/' },
      { title: 'Dalessandri et al. 2004, Nutr Cancer – Pilot-RCT, 2-Hydroxyestron erhöht', url: 'https://pubmed.ncbi.nlm.nih.gov/15623462/' },
      { title: 'Godínez-Martínez et al. 2023, Nutr Cancer – 75 mg DIM bei prämenopausalen Frauen, primärer Endpunkt verfehlt', url: 'https://pubmed.ncbi.nlm.nih.gov/36111381/' },
      { title: 'Le et al. 2003, J Biol Chem – DIM als Androgenrezeptor-Antagonist in Prostatakrebszellen', url: 'https://pubmed.ncbi.nlm.nih.gov/12665522/' },
      { title: 'Heath et al. 2010, Am J Transl Res – Phase-I-Dosissteigerung, Hyponatriämie bei 300 mg zweimal täglich', url: 'https://pubmed.ncbi.nlm.nih.gov/20733950/' },
      { title: 'Newman und Smeaton 2025, Menopause – DIM verändert Östrogenprofil unter Estradiol-Pflaster', url: 'https://pubmed.ncbi.nlm.nih.gov/40298801/' },
      { title: 'Williams 2021, Front Nutr – Übersicht Indol-3-Carbinol und DIM', url: 'https://pubmed.ncbi.nlm.nih.gov/34660663/' }
    ],
    community: [
      { title: 'biolabshop (Suche „DIM")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'huperzin-a',
    name: 'Huperzin A',
    altNames: 'Huperzine A, HupA, (−)-Huperzin A, Huperzia serrata (Chinesisches Keulenmoos, Qian Ceng Ta), Shuangyiping',
    class: 'Pflanzliches Alkaloid, reversibler Acetylcholinesterase-Hemmer; in China Arzneimittel, in DE nicht zugelassen',
    emoji: '🧠',
    short: 'Alkaloid aus dem chinesischen Keulenmoos, das wie die Alzheimer-Medikamente den Abbau von Acetylcholin bremst; chinesische Studien und ein Cochrane-Review zeigen bessere Gedächtniswerte bei Alzheimer. Die Studien sind aber meist klein, eine US-Phase-2 verfehlte ihren primären Endpunkt, und für Gesunde fehlen Daten.',
    moa: 'Huperzin A hemmt reversibel und sehr gezielt die Acetylcholinesterase, das Enzym, das den Botenstoff Acetylcholin im synaptischen Spalt abbaut; die verwandte Butyrylcholinesterase bleibt weitgehend unberührt. Beim Menschen ist diese Hemmung gemessen: In einer Phase-Ib-Studie an 12 gesunden Älteren sank die Enzymaktivität in roten Blutkörperchen um 30 bis 40 Prozent auf der niedrigsten und um über 50 Prozent auf der höchsten Stufe, die Butyrylcholinesterase blieb unverändert (Haigh 2008). Die Aufnahme ist schnell, die Halbwertszeit liegt bei rund 12 Stunden (Wu 2017). In Zell- und Tiermodellen wirkt es zusätzlich dämpfend am NMDA-Rezeptor und schützt Nervenzellen vor Glutamat, oxidativem Stress und Beta-Amyloid; ob das beim Menschen eine Rolle spielt, ist nicht untersucht.',
    benefits: [
      'Cochrane-Review 2008: 6 RCTs mit 454 Alzheimer-Patienten, Vorteile gegenüber Placebo in MMSE (+2,81 Punkte), ADAS-Cog, klinischem Gesamteindruck und Alltagsfunktionen – mit dem Vorbehalt, dass nur eine Studie ausreichend groß und gut gemacht war.',
      'Meta-Analyse 2013: 20 RCTs mit 1.823 Teilnehmenden, bessere Kognition und Alltagsfunktion bei Alzheimer, überwiegend chinesische Studien mit hohem Verzerrungsrisiko.',
      'Multizentrische Doppelblindstudie in China (202 Patienten, 12 Wochen, 2002): ADAS-Cog-Verbesserung um mindestens 4 Punkte bei 56,1 % unter Huperzin A gegenüber 12,5 % unter Placebo.',
      'Zielstruktur am Menschen bestätigt: messbare Hemmung der Acetylcholinesterase im Blut gesunder Älterer (Phase Ib, 12 Probanden, 2008).',
      'US-Phase-2 (210 Patienten, 2011): unter der höheren Studiendosis in Woche 11 +2,27 ADAS-Cog-Punkte gegenüber −0,29 unter Placebo – als sekundärer Befund.',
      'Weiterentwicklung als Arzneimittel: chinesische Phase-II/III-Studie mit geplant 720 Alzheimer-Patienten gegen Placebo und Donepezil, rekrutiert seit 29.08.2025, Abschluss laut Register für 08/2028 geplant (NCT07066826).'
    ],
    risks: [
      'Die methodisch stärkste westliche Studie (Rafii 2011) verfehlte ihren primären Endpunkt; Alltagsfunktion und klinischer Gesamteindruck änderten sich nicht.',
      'Für Gesunde keine belastbaren Daten; bei leichter kognitiver Störung fand Cochrane 2012 keine geeignete Studie.',
      'Cholinerge Nebenwirkungen: Übelkeit, Durchfall, Schwitzen, Schwindel, Schlaflosigkeit, verlangsamter Puls; bei Überdosierung Zittern und Sehstörungen (RIVM 2024).',
      'RIVM 2024: kein sicherer Aufnahmewert ableitbar, Hinweise auf Embryotoxizität im Tier; Rat, Huperzin-A-Produkte nicht zu verwenden, besonders nicht in der Schwangerschaft.',
      'Wechselwirkungen mit anderen Cholinesterasehemmern, cholinergen Arzneimitteln und Anticholinergika wie Scopolamin.',
      'Keine Langzeitdaten über viele Monate, keine Studien zur chronischen Toxizität.'
    ],
    status: 'DE: kein zugelassenes Arzneimittel; in Nahrungsergänzungsmitteln von der Lebensmittelüberwachung beanstandet (RASFF-Meldungen aus DE 2020 als nicht zugelassener Stoff, 2022 als nicht zugelassenes Novel Food nach Art. 6 (2) VO (EU) 2015/2283). EU: nicht harmonisiert, kein Eintrag im Novel-Food-Statuskatalog; viele Mitgliedstaaten werten es als nicht zugelassenes Novel Food, Ausnahmen u. a. Belgien, Frankreich, Rumänien; HoA-Arbeitsgruppe (BVL/NVWA) 2024 vorläufig „vermutlich nicht neuartig“, zugleich unter Stoffen mit Gefährdungspotenzial; RIVM (NL) rät vom Verzehr ab. China: bei Alzheimer als Arzneimittel eingesetzt. USA: als Nahrungsergänzung vermarktet, Rechtslage laut OPSS unklar. WADA-Liste 2026: nicht genannt.',
    sources: [
      { title: 'Li et al., Cochrane Database Syst Rev 2008 – Huperzin A bei Alzheimer, 6 RCTs, 454 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/18425924/' },
      { title: 'Yang et al., PLoS One 2013 – Meta-Analyse, 20 RCTs, 1.823 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/24086396/' },
      { title: 'Rafii et al., Neurology 2011 – US-Phase-2, primärer Endpunkt verfehlt', url: 'https://pubmed.ncbi.nlm.nih.gov/21502597/' },
      { title: 'Zhang et al., Zhonghua Yi Xue Za Zhi 2002 – Doppelblindstudie, 202 Patienten, 15 Zentren', url: 'https://pubmed.ncbi.nlm.nih.gov/12181083/' },
      { title: 'Haigh et al., Chem Biol Interact 2008 – Acetylcholinesterase-Hemmung im Blut gesunder Älterer', url: 'https://pubmed.ncbi.nlm.nih.gov/18572153/' },
      { title: 'Yue et al., Cochrane Database Syst Rev 2012 – keine geeignete Studie bei leichter kognitiver Störung', url: 'https://pubmed.ncbi.nlm.nih.gov/23235666/' },
      { title: 'RIVM-Bericht 2024-0028 – Risikobewertung von Huperzia-serrata-Zubereitungen', url: 'https://www.rivm.nl/bibliotheek/rapporten/2024-0028.pdf' },
      { title: 'BVL 2024 – Bericht der HoA-Arbeitsgruppe Food Supplements', url: 'https://www.bvl.bund.de/SharedDocs/Downloads/01_Lebensmittel/Internationales/report_HoA_WG_FS-en.pdf?__blob=publicationFile&v=6' },
      { title: 'RASFF 2022.0520 – deutsche Meldung: Huperzin A als nicht zugelassenes Novel Food', url: 'https://webgate.ec.europa.eu/rasff-window/screen/notification/528818' },
      { title: 'ClinicalTrials.gov NCT07066826 – Phase-II/III-Studie mit Huperzin-A-Retardtabletten bei Alzheimer', url: 'https://clinicaltrials.gov/study/NCT07066826' }
    ],
    community: [
      { title: 'biolabshop (Suche „Huperzin A")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'kanna',
    name: 'Kanna',
    altNames: 'Sceletium tortuosum, Mesembryanthemum tortuosum, Kougoed, Kauwgoed, Zembrin (standardisierter Extrakt), Mesembrin',
    class: 'Südafrikanische Heilpflanze mit Mesembrin-Alkaloiden (Serotonintransporter- und PDE4-Hemmung); in der EU nicht zugelassenes Novel Food',
    emoji: '🌱',
    short: 'Südafrikanische Sukkulente, deren Alkaloide im Labor am Serotonintransporter und an PDE4 ansetzen; ein standardisierter Extrakt dämpfte im Hirnscan die Angstreaktion und verbesserte in kleinen Placebo-Studien kognitive Flexibilität und Stressangst. Untersucht nur an Gesunden in kleinen, kurzen Studien, meist mit Herstellerbeteiligung.',
    moa: 'Die Mesembrin-Alkaloide hemmen im Labor den Serotonintransporter (Mesembrin am stärksten, Ki 1,4 nM) und die Phosphodiesterase 4, die den Botenstoff cAMP abbaut; der standardisierte Extrakt Zembrin wirkt an beiden Zielen, nicht an anderen Phosphodiesterasen (Harvey 2011). Eine Zellstudie spricht zusätzlich für eine Monoamin-Freisetzung (Coetzee 2016). Am Menschen dämpfte eine Einzeldosis in der funktionellen MRT die Reaktion der Amygdala auf ängstliche Gesichter und ihre Kopplung an den Hypothalamus (Terburg 2013). Wie die Alkaloide wirken, ist pharmakokinetisch offen: Laut Novel-Food-Antrag sind die Hauptalkaloide nach dem Schlucken systemisch nicht verfügbar, während sie in vitro Mund- und Zungenschleimhaut gut durchdringen (Shikanga 2012) – passend zum traditionellen Kauen.',
    benefits: [
      'Einzeldosis dämpfte im Hirnscan die Reaktion der Amygdala auf ängstliche Gesichter (doppelblinde Crossover-Studie, 16 Gesunde, 2013).',
      'Bessere kognitive Flexibilität und Exekutivfunktion nach 3 Wochen gegenüber Placebo (Crossover-RCT, 21 Gesunde, 2014).',
      'Geringere subjektive Angst vor einer simulierten Rede nach Einzeldosis (Laborstudie an jungen Gesunden, 2020) – in einer zweiten Laborstudie ohne Effekt.',
      'Bessere komplexe Reaktionsleistung unter kognitiver Last nach 8 Tagen (RCT, 60 trainierte Erwachsene, 2020) – Stimmung unverändert.',
      'Über 3 Monate gut verträglich, ohne Unterschied zu Placebo in Labor, EKG und Vitalzeichen (RCT, 37 Gesunde, 2013).',
      'Lange traditionelle Verwendung in Südafrika als Stimmungsaufheller (seit dem 17. Jahrhundert beschrieben).'
    ],
    risks: [
      'Keine Studie an Menschen mit Angststörung oder Depression; alle Humandaten an Gesunden, klein und kurz.',
      'Fast alle Studien mit demselben Markenextrakt und mit Beteiligung des Entwicklers; unabhängige Replikation fehlt weitgehend.',
      'Nicht mit SSRI, SNRI oder anderen serotonergen Psychopharmaka kombinieren; Vorsicht mit PDE4-Hemmern wie Roflumilast.',
      'Schwangerschaft und Stillzeit nicht untersucht.',
      'Stark schwankender Alkaloidgehalt in Pflanze und Handelsware; in einem Kanna-Produkt wurde Ephedrin nachgewiesen (2016).'
    ],
    status: 'EU/DE: nicht zugelassenes Novel Food; kein Eintrag im Novel-Food-Statuskatalog und nicht in der Unionsliste; RASFF-Meldungen deutscher Behörden 2020, 2025 und 2026 als nicht zugelassene neuartige Zutat, Österreich 2026. Novel-Food-Antrag des Zembrin-Herstellers HG&H für Nahrungsergänzungsmittel läuft. Kein Arzneimittel, nicht im BtMG. USA: ein bestimmter Extrakt seit 2011 per GRAS-Selbstbestätigung im Handel. WADA-Liste 2026: nicht genannt.',
    sources: [
      { title: 'Terburg et al., Neuropsychopharmacology 2013 – Amygdala-Reaktion nach Einzeldosis Zembrin', url: 'https://pubmed.ncbi.nlm.nih.gov/23903032/' },
      { title: 'Chiu et al., Evid Based Complement Alternat Med 2014 – Kognition bei Gesunden, Crossover-RCT', url: 'https://pubmed.ncbi.nlm.nih.gov/25389443/' },
      { title: 'Nell et al., J Altern Complement Med 2013 – Sicherheit über 3 Monate, 37 Gesunde', url: 'https://pubmed.ncbi.nlm.nih.gov/23441963/' },
      { title: 'Reay et al., Hum Psychopharmacol 2020 – experimentell ausgelöste Angst', url: 'https://pubmed.ncbi.nlm.nih.gov/32761980/' },
      { title: 'Hoffman et al., J Strength Cond Res 2020 – Reaktion und Stimmung bei Sportlern', url: 'https://pubmed.ncbi.nlm.nih.gov/32740286/' },
      { title: 'Harvey et al., J Ethnopharmacol 2011 – Serotonintransporter und PDE4', url: 'https://pubmed.ncbi.nlm.nih.gov/21798331/' },
      { title: 'Brendler et al., Curr Neuropharmacol 2021 – Tradition, Sicherheit und Regulierung', url: 'https://pubmed.ncbi.nlm.nih.gov/33588735/' },
      { title: 'de Jong et al., Planta Med 2026 – gemischte Evidenz aus Tier- und Humanstudien', url: 'https://pubmed.ncbi.nlm.nih.gov/41771298/' },
      { title: 'EU-Kommission – Zusammenfassung des laufenden Novel-Food-Antrags zu Sceletium-Extrakt', url: 'https://food.ec.europa.eu/document/download/a1f0a531-323d-4c4f-9e45-cee8d86a99a8_en?filename=novel-food_sum_ongoing-app_2024-25060.pdf' },
      { title: 'RASFF 2025.7263 – deutsche Meldung: Kanna als nicht zugelassene neuartige Zutat', url: 'https://webgate.ec.europa.eu/rasff-window/screen/notification/790584' }
    ],
    community: [
      { title: 'biolabshop (Suche „Kanna")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'nmnh',
    name: 'NMNH (reduziertes NMN)',
    altNames: 'Reduziertes Nicotinamid-Mononukleotid, Dihydronicotinamid-Mononukleotid, reduced NMN, NMN-H, NMNH-Ca, UthPeak',
    class: 'Reduzierte NAD+-Vorstufe aus der Vitamin-B3-Familie, in der EU nicht zugelassen',
    emoji: '🔋',
    short: 'Die reduzierte Form von NMN hebt NAD+ in Zellen und Mäusen deutlich stärker und schneller als NMN oder NR, über einen eigenen Stoffwechselweg. Am Menschen gibt es eine placebokontrollierte Studie mit 80 Teilnehmern über 90 Tage mit dosisabhängigem NAD+-Anstieg im Blut – als Preprint und vom Hersteller finanziert.',
    moa: 'NMNH ist NMN in reduzierter, energiereicher Form. Anders als NR braucht es die Enzyme NRK und NAMPT nicht, sondern wird vom Enzym NMNAT zunächst zu NADH umgebaut, das die Zelle zu NAD+ weiterverarbeitet (Zapata-Pérez 2021; Liu 2021). So umgeht es den Engpass, der den NAD+-Anstieg durch NMN und NR in Zellen und Tieren auf etwa das Doppelte begrenzt. In Zellen hebt NMNH neben NAD+ auch NADH, hemmt Glykolyse und Citratzyklus und löst in Leberzellen eine breite, stressartige Genantwort mit mehr Glutathion-S-Transferasen aus, ohne Glutathion zu verbrauchen (Vinten 2026). Am Menschen ist bisher nur der Anstieg im Vollblut gemessen.',
    benefits: [
      'Erste Humanstudie: NAD+ im Vollblut stieg über 90 Tage dosisabhängig, in der höchsten Stufe von 19,43 auf 59,33 µM, signifikant über Placebo (Mensch, doppelblind, 80 Gesunde von 40 bis 65 Jahren, Li 2026, Preprint).',
      'In derselben Studie gut verträglich: 6 leichte unerwünschte Ereignisse, keine schweren, keine behandlungsbedingten, keine Abbrüche.',
      'Explorative Signale bei der höchsten Stufe: berechnetes biologisches Blutalter –5,18 gegenüber +2,62 Jahren unter Placebo, 6-Minuten-Gehstrecke +114 gegenüber +25 m, Lebensqualität in allen 8 SF-36-Bereichen besser (nicht gepowert).',
      'In Leberkrebszellen NAD+ 5- bis 7-fach, NMN nur leicht; in der Mausleber 4-fach über Kontrolle und 1,5-fach über NMN, NADH 3-fach (Liu 2021, Zell- und Mausdaten).',
      'Schneller, anhaltender NAD+-Anstieg im Blut von Mäusen und mehr NAD+ in Leber, Niere, Muskel, Gehirn, braunem Fett und Herz; laut Erstautor Blutwert mindestens 20 Stunden verdoppelt (Zapata-Pérez 2021, Maus).',
      'Schützte Nierentubuluszellen im Modell nach Sauerstoffmangel und beschleunigte die Reparatur (Zapata-Pérez 2021, Zellkultur).'
    ],
    risks: [
      'Nur eine Humanstudie: nicht begutachteter Preprint, 90 Tage, fast nur Männer (69 von 80), nur asiatische Teilnehmer, Hersteller als Sponsor mit 7 angestellten Autoren.',
      'Gemessen wurde NAD+ im Vollblut; ob es in Muskel, Gehirn oder Leber steigt, ist am Menschen offen.',
      'Werbung mit „5 Jahre jünger“ stützt sich auf einen explorativen Endpunkt ohne Fallzahlplanung (Herstellerangabe EffePharm).',
      'In Zellen bremst NMNH Glykolyse, Citratzyklus und Zellwachstum und stellt den Stoffwechsel breiter um als NMN und NR; bei der verwandten Vorstufe NRH zeigten höhere Dosen bei Mäusen Toxizitätszeichen (Liu 2021; Vinten 2026; Rumpler 2026).',
      'Keine Langzeitdaten, keine Daten zu Schwangerschaft, Kindern, Krebs-, Leber- oder Nierenkranken, keine Wechselwirkungsstudien.'
    ],
    status: 'In der EU weder zugelassenes Arzneimittel noch zugelassenes neuartiges Lebensmittel; schon für NMN ist der Novel-Food-Status bestätigt, das positive EFSA-Gutachten von 2026 betrifft nur β-NMN. Zu NMNH ließ sich weder ein EFSA-Gutachten noch eine Zulassung finden – als Nahrungsergänzung in DE nicht verkehrsfähig. USA: vom Hersteller selbst erklärter GRAS-Status (2024), keine FDA-Prüfung belegt. Nicht auf der WADA-Liste.',
    sources: [
      { title: 'Li et al., medRxiv 2026 (Preprint) – Phase-I-RCT mit NMNH-Ca, 80 Gesunde, 90 Tage, NAD+ dosisabhängig', url: 'https://doi.org/10.64898/2026.08.11.26360226' },
      { title: 'Zapata-Pérez et al., FASEB J 2021 – NMNH als neue, starke NAD+-Vorstufe in Zellen und Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/33724555/' },
      { title: 'Liu et al., J Proteome Res 2021 – NMNH hebt NAD+, hemmt Glykolyse, Citratzyklus und Zellwachstum', url: 'https://pubmed.ncbi.nlm.nih.gov/33793246/' },
      { title: 'Vinten et al., FASEB J 2026 – reduzierte und oxidierte NAD+-Vorstufen in Leberzellen im Vergleich', url: 'https://pubmed.ncbi.nlm.nih.gov/41701114/' },
      { title: 'Rumpler et al., Nat Commun 2026 – verwandte Vorstufe NRH bei Mäusen, Toxizitätszeichen bei höheren Dosen', url: 'https://pubmed.ncbi.nlm.nih.gov/41882002/' },
      { title: 'ClinicalTrials.gov – NCT06889740, einzige registrierte NMNH-Studie', url: 'https://clinicaltrials.gov/study/NCT06889740' },
      { title: 'EFSA NDA Panel, EFSA J 2026 – Sicherheit von β-NMN als Novel Food (betrifft nicht NMNH)', url: 'https://pubmed.ncbi.nlm.nih.gov/42125559/' },
      { title: 'EU-Kommission – Novel-Food-Status von NMN bestätigt (Konsultation Tschechien)', url: 'https://food.ec.europa.eu/system/files/2022-10/novel-food_consult-status_nmn-cz.pdf' }
    ],
    community: [
      { title: 'biolabshop (Suche „NMNH“)', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Longevity'
  },
  {
    id: 'prl-8-53',
    name: 'PRL-8-53',
    altNames: 'Methyl-3-(2-(benzylmethylamino)ethyl)benzoat, 3-(2-Benzylmethylaminoethyl)benzoesäuremethylester (Hydrochlorid)',
    class: 'Synthetischer Phenethylamin-Abkömmling (Benzoesäureester), Nootropikum aus den 1970er-Jahren, nirgends zugelassen',
    emoji: '📚',
    short: 'Ein Nootropikum aus den 1970er-Jahren, unter dem in einer doppelblinden, placebokontrollierten Studie Wortlisten signifikant besser behalten wurden, ohne Effekt auf Reaktionszeit oder Motorik. Diese Studie von 1978 stammt vom Erfinder und steht bis heute allein; Mechanismus, Langzeitdaten und Zulassung fehlen.',
    moa: 'Der Wirkmechanismus ist ungeklärt. PRL-8-53 ist ein kleines Molekül mit Phenethylamin-Grundgerüst und einem Benzoesäure-Methylester, kein Peptid. Das Patent des Erfinders beschreibt die Stoffgruppe als cholinerg und krampflösend; die krampflösende Wirkung wurde am isolierten Darm von Kaninchen gegen Papaverin gemessen. Bei Ratten sollen Lernen und späteres Behalten in Vermeidungs- und Labyrinthtests verbessert gewesen sein (Herstellerangabe ohne publizierte Rohdaten). Online kursierende Angaben zu Dopamin- und Serotoninwirkungen ließen sich in keiner zugänglichen Primärquelle prüfen.',
    benefits: [
      'Placebokontrollierte Doppelblindstudie am Menschen: Wortlisten wurden etwas schneller gelernt und statistisch signifikant besser behalten, meist mit p unter 0,01, teils unter 0,001 (Hansl & Mead 1978; eine Studie, Teilnehmerzahl im Abstract nicht angegeben).',
      'Kein allgemeiner Aufputsch-Effekt: Visuelle Reaktionszeit und Motorik unterschieden sich nicht von Placebo (1978).',
      'Erstbeschreibung 1974 als neuer Typ einer ZNS-aktivierenden Verbindung mit spezifischer Wirkung auf Lernen und Gedächtnis und ausgeprägter krampflösender Wirkung (Hansl, Experientia).',
      'Laut Patent besseres Lernen und Behalten bei Ratten in Vermeidungs- und Labyrinthtests (Tierversuch, Herstellerangabe, US 3,870,715).',
      'Laut Patent geringe Giftigkeit, keine Missbildungen über zwei Nachkommengenerationen, keine Organbefunde nach Dauergabe bei Ratten (Herstellerangabe).'
    ],
    risks: [
      'Die gesamte Humanevidenz ist eine einzige Studie des Erfinders von 1978, nie unabhängig wiederholt; der Volltext mit Fallzahl und Effektgrößen ist nicht frei zugänglich.',
      'Kein Eintrag bei ClinicalTrials.gov; keine Daten zu Aufnahme und Verweildauer im Körper, Wechselwirkungen oder Langzeitanwendung.',
      'Tier- und Toxizitätsdaten nur als Zusammenfassung im Patent, ohne unabhängige Prüfung.',
      'Die in Foren kursierenden Prozentwerte und die Einordnung als Peptid lassen sich nicht belegen beziehungsweise sind falsch.',
      'In Deutschland nach dem Wortlaut der NpSG-Stoffgruppe der 2-Phenethylamin-Abkömmlinge erfasst: Handel, Erwerb und Besitz verboten.',
      'Sport: nicht namentlich auf der WADA-Liste; als Phenethylamin-Abkömmling mögliche Einordnung unter S6, sonst S0.'
    ],
    status: 'Nirgends als Arzneimittel zugelassen; in der EU weder Lebensmittel noch Nahrungsergänzungsmittel. DE: nach dem Wortlaut von Anlage 1 Nr. 1 NpSG (von 2-Phenethylamin abgeleitete Verbindungen) erfasst, damit Handel, Erwerb und Besitz verboten (§ 3 NpSG, Ausnahme anerkannte wissenschaftliche Zwecke); eine behördliche Einzelbewertung wurde nicht gefunden. Nicht im BtMG. Patent US 3,870,715 abgelaufen. WADA 2026: nicht namentlich; mögliche Einordnung unter S6 (Phenethylamin und Abkömmlinge), sonst S0; laut Pokrywka et al. 2025 Status unklar.',
    sources: [
      { title: 'Hansl & Mead 1978, Psychopharmacology – doppelblinde Placebostudie: besseres Behalten verbaler Information', url: 'https://pubmed.ncbi.nlm.nih.gov/418433/' },
      { title: 'Hansl 1974, Experientia – Erstbeschreibung als spasmolytische, ZNS-aktive Verbindung mit Wirkung auf Lernen', url: 'https://pubmed.ncbi.nlm.nih.gov/4824605/' },
      { title: 'Patent US 3,870,715 (1975) – Aminoethyl-meta-benzoesäureester als lernfördernde und krampflösende Mittel', url: 'https://patents.google.com/patent/US3870715A/en' },
      { title: 'Napoletano et al. 2020, Front Psychiatry – 142 kognitive Verstärker in Psychonauten-Foren, darunter PRL-8-53', url: 'https://pubmed.ncbi.nlm.nih.gov/33024436/' },
      { title: 'Pokrywka et al. 2025, Biol Sport – PRL-8-53 mit unklarem WADA-Status (Nähe zu S6)', url: 'https://pubmed.ncbi.nlm.nih.gov/41048238/' },
      { title: 'Neue-psychoaktive-Stoffe-Gesetz, Anlage 1 Nr. 1 – von 2-Phenethylamin abgeleitete Verbindungen', url: 'https://www.gesetze-im-internet.de/npsg/BJNR261510016.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 's23',
    name: 'S-23',
    altNames: 'S23, S 23, SARM S-23, Arylpropionamid-SARM',
    class: 'Selektiver Androgenrezeptor-Modulator (SARM), nicht zugelassen',
    emoji: '🧪',
    short: 'Aus derselben Arbeitsgruppe wie Ostarin und Andarin, aber mit anderem Ziel: S-23 wurde als hormonelles Verhütungsmittel für Männer entwickelt und war in Ratten wirksam und nach Absetzen umkehrbar. Am Menschen gibt es keine klinische Studie, nur Daten der Dopinganalytik.',
    moa: 'S-23 ist ein nichtsteroidales Arylpropionamid, das den Androgenrezeptor mit hoher Affinität bindet (Ki 1,7 nM) und in vitro als voller Agonist wirkt. In Ratten baut er Muskel und Knochen auf und senkt die Fettmasse; weil er dem Regelkreis im Gehirn wie Testosteron genug Androgen meldet, drosselt er zugleich LH und FSH deutlich, und ohne diese Signale kommt die Spermienbildung zum Erliegen. Genau diese Achsen-Wirkung war der Entwicklungszweck, nicht ein Nebeneffekt; sein Vorläufer C-6 wurde aus demselben Grund weiterverfolgt. Anders als die verwandten SARMs der gleichen Reihe schont S-23 die Prostata nicht, sondern wirkt dort ebenfalls voll agonistisch (Jones 2010). Beim Menschen ist keine dieser Wirkungen gemessen.',
    benefits: [
      'Hohe Bindungsaffinität am Androgenrezeptor (Ki 1,7 ± 0,2 nM), voller Agonist in vitro (Jones et al., Endocrinology 2009).',
      'Muskel spricht bei niedrigerer Dosis an als die Prostata: ED50 am Levator-ani-Muskel 0,079 mg/d, an der Prostata 0,43 mg/d (kastrierte Ratten, 2009).',
      'Knochendichte und Magermasse dosisabhängig erhöht, Fettmasse gesenkt (Ratte, 2009).',
      'Als Verhütungskandidat im Tier wirksam und umkehrbar: mit Estradiolbenzoat bei 4 von 6 Tieren keine Spermien im Hoden und 0 von 6 Verpaarungen mit Schwangerschaft, nach 100 Tagen Erholung wieder 100 Prozent Schwangerschaftsrate (Ratte, bis zu 10 Wochen, 2009).',
      'Bei ovarektomierten Ratten normalisierte S-23 erhöhte LH- und FSH-Werte; Vertreter derselben SARM-Reihe steigerten die sexuelle Motivation ähnlich stark wie Testosteronpropionat (Jones 2010; Übersicht Vasilev 2026).',
      'Analytisch sehr gut beschrieben: 18 Stoffwechselprodukte im menschlichen Urin, Nachweis von Mikrogramm-Mengen über Tage bis Wochen (Alhalabi 2025).'
    ],
    risks: [
      'Keine klinische Studie und kein Registereintrag: S-23 war laut Dopinganalytikern nie Gegenstand einer klinischen Studie; zu Langzeitfolgen ist nichts veröffentlicht (Alhalabi 2025; Ameline 2022).',
      'Kräftige Unterdrückung der eigenen Hormonachse im Tier (LH, FSH), im Verhütungsversuch bis zum Ausfall der Spermienbildung; Übertragung auf den Menschen nicht untersucht (Jones 2009).',
      'Schont die Prostata nicht: In der Analogreihe war S-23 der Vertreter mit voller Wirkung auch in androgenen Geweben (Jones 2010).',
      'SARM-Klasse: seit 2020 20 Berichte über unerwünschte Ereignisse, überwiegend arzneimittelbedingte Leberschäden mit Gelbsucht; ein Fall mit S-23 plus Ligandrol, hepatozellulärer Leberschaden nach 8 Wochen, ALT 144 IU/L (Leciejewska 2024).',
      'Produktqualität nicht verlässlich: In 13 online gekauften SARM-Produkten war der deklarierte Wirkstoff nur in etwa 70 Prozent enthalten, in 30 Prozent steckten nicht deklarierte Arzneistoffe; eines von zwei als S-23 verkauften Produkten enthielt gar kein S-23 (Gaudiano 2024).',
      'Dopingfalle: schon 1 µg war im Mittel bis zu 253 Stunden im Urin nachweisbar, 50 µg bis zu 544 Stunden, über die Haut aufgenommen bis zu 24 Tage; 5 positive Dopingproben mit S-23 für 2022 (Alhalabi 2025; Korsmeier 2025).'
    ],
    status: 'Nirgends als Arzneimittel zugelassen, kein Nahrungsergänzungsmittel, nie in einer klinischen Studie. Deutschland: namentlich in der Anlage zum Anti-Doping-Gesetz unter den selektiven Androgen-Rezeptor-Modulatoren – Handel und Inverkehrbringen zu Dopingzwecken sowie Erwerb und Besitz in nicht geringer Menge zum Dopingzweck sind verboten (§ 2 AntiDopG). Dopingliste: WADA 2026, S1.2 (Andere anabole Wirkstoffe), ausdrücklich „S-23“, jederzeit verboten; SARMs stehen seit 2008 auf der Liste. FDA: SARM-Produkte sind nicht zugelassene Arzneimittel, keine Nahrungsergänzungsmittel.',
    sources: [
      { title: 'Jones et al., Endocrinology 2009 – präklinische Charakterisierung von S-23, Ratte', url: 'https://pubmed.ncbi.nlm.nih.gov/18772237/' },
      { title: 'Jones et al., J Pharmacol Exp Ther 2010 – Analogreihe, S-23 voll agonistisch auch an der Prostata', url: 'https://pubmed.ncbi.nlm.nih.gov/20444881/' },
      { title: 'Chen et al., J Pharmacol Exp Ther 2005 – Vorläufer C-6, Ausgangspunkt der Linie', url: 'https://pubmed.ncbi.nlm.nih.gov/15347734/' },
      { title: 'Alhalabi et al., Biomed Chromatogr 2025 – Mikrodosis-Studie, Nachweiszeiten, nie klinisch geprüft', url: 'https://pubmed.ncbi.nlm.nih.gov/40277337/' },
      { title: 'Korsmeier et al., J Anal Toxicol 2025 – Aufnahme über die Haut, Nachweis bis 24 Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/40632609/' },
      { title: 'Ameline et al., J Pharm Biomed Anal 2022 – erste Untersuchung am Menschen, Urin bis 28 Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/35182830/' },
      { title: 'Gheddar et al., J Chromatogr B 2021 – erster Nachweis von S-23 in menschlichem Haar', url: 'https://pubmed.ncbi.nlm.nih.gov/34814052/' },
      { title: 'Leciejewska et al., Eur J Clin Pharmacol 2024 – SARM-Nebenwirkungen, Fallübersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/38059982/' },
      { title: 'Gaudiano et al., Sex Med 2024 – Analyse online gekaufter SARM-Produkte', url: 'https://pubmed.ncbi.nlm.nih.gov/38560649/' },
      { title: 'WADA – Prohibited List 2026, S1.2 SARMs (S-23)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'sunifiram',
    name: 'Sunifiram',
    altNames: 'DM235, DM-235, 1-Benzoyl-4-propionylpiperazin, Unifi-Nootropikum',
    class: 'Piperazin-Nootropikum (ampakinartig, Piracetam-Verwandter), präklinisch, nirgends zugelassen',
    emoji: '🧪',
    short: 'Ein Florentiner Piperazin-Nootropikum, das bei Mäusen und Ratten chemisch ausgelöste Vergesslichkeit schon in winzigen Dosen verhinderte, bestätigt von einer zweiten, unabhängigen Gruppe. Am Menschen gibt es keine einzige Studie, und veröffentlichte Giftigkeitsdaten fehlen.',
    moa: 'Sunifiram entstand 2000 an der Universität Florenz durch Vereinfachung des Ringsystems von Unifiram (DM232) und gilt als Piracetam-Verwandter ohne dessen Pyrrolidon-Ring. Die Entwickler zeigten eine AMPA-abhängige Wirkung: Die durch den AMPA-Blocker NBQX ausgelöste Amnesie wurde aufgehoben, in Hippocampus-Schnitten wirkte Sunifiram NBQX-empfindlich; daher die Einordnung als ampakinartig. Eine unabhängige Gruppe fand 2013 eine Verstärkung der Langzeitpotenzierung über die Glycin-Bindestelle des NMDA-Rezeptors mit Signalweiterleitung über PKC-alpha und CaMKII. Im Rattenkortex verdoppelte Sunifiram die Acetylcholin-Freisetzung 45 Minuten nach Gabe, bei höheren Dosen nicht mehr. An die wichtigsten Rezeptoren bindet es nicht; am Menschen ist keiner dieser Mechanismen untersucht.',
    benefits: [
      'Verhinderte bei Mäusen Vergesslichkeit durch Scopolamin, Mecamylamin, Baclofen und Clonidin, gespritzt wie geschluckt; bei Ratten Schutz vor der Scopolamin-bedingten Lernstörung im Wasserlabyrinth (Tierversuch, Ghelardini 2002).',
      'Hob die durch den AMPA-Blocker NBQX ausgelöste Amnesie auf, in Hirnschnitten AMPA-abhängige Wirkung (Tier und Hirnschnitt, Galeotti 2003).',
      'Unabhängig bestätigt: Bei Mäusen mit entfernten Riechkolben, einem Modell mit Alzheimer-ähnlichen Ausfällen, besserten sich räumliches und Kurzzeitgedächtnis nach 7 bis 12 Tagen Gabe über den Mund; die Langzeitpotenzierung wurde wiederhergestellt (Tierversuch, Moriguchi 2013).',
      'Verdoppelte im Rattenkortex die Acetylcholin-Freisetzung 45 Minuten nach der Gabe (Mikrodialyse, Romanelli 2006).',
      'Wirksame Dosis im Tier 1000- bis 10.000-fach niedriger als bei Piracetam, Aniracetam oder Rolipram; keine Störung von Motorik und Verhalten bei wirksamen Dosen (Tierversuch).'
    ],
    risks: [
      'Keine einzige Studie am Menschen, kein Eintrag bei ClinicalTrials.gov; nie in die klinische Entwicklung gegangen.',
      'Keine veröffentlichte Toxikologie; die Langzeitgiftigkeit ist laut dem früheren Leiter der Entwicklergruppe unbekannt (Gualtieri 2016).',
      'Wirkung fast nur gegen künstlich ausgelöste Gedächtnisstörungen gemessen; glockenförmige Dosis-Wirkungs-Kurven, bei höheren Dosen im Tier kein zusätzlicher Effekt.',
      'Mechanismus nicht geklärt: AMPA-Verstärkung und NMDA-Glycin-Stelle stehen nebeneinander.',
      'Graumarktware als Forschungschemikalie, Reinheit ungeprüft; die FDA verhängte 2023 gegen einen Importeur, der unter anderem Sunifiram eingeführt hatte, ein Einfuhrverbot für 5 Jahre.',
      'Sport: nicht namentlich gelistet; als nirgends zugelassener Wirkstoff nach Wortlaut S0 jederzeit verboten, laut Analyse 2025 auch Nähe zu 4-Phenylpiracetam (S6) möglich.'
    ],
    status: 'Präklinische Forschungssubstanz, nirgends zugelassen. DE/EU: weder Arzneimittel noch Nahrungsergänzungsmittel; kein Eintrag im BtMG, nach der Struktur in keiner Stoffgruppe des NpSG; Handel als Forschungschemikalie. USA: nicht zugelassen; FDA-Einfuhrverbot 2023 gegen einen Importeur unter anderem von Sunifiram. WADA 2026: nicht namentlich; nach Wortlaut S0 (nicht zugelassene Substanzen), laut Pokrywka et al. 2025 Status unklar mit möglicher Einordnung über Ähnlichkeit zu 4-Phenylpiracetam (S6).',
    sources: [
      { title: 'Manetti et al. 2000, J Med Chem – Piperazin-Abkömmlinge mit hoher nootroper Wirkung, Erstbeschreibung von DM235', url: 'https://pubmed.ncbi.nlm.nih.gov/11087574/' },
      { title: 'Ghelardini et al. 2002, Naunyn Schmiedebergs Arch Pharmacol – Sunifiram verhindert Amnesie bei Mäusen und Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/12070754/' },
      { title: 'Galeotti et al. 2003, Naunyn Schmiedebergs Arch Pharmacol – AMPA-Rezeptoren und antiamnestische Wirkung', url: 'https://pubmed.ncbi.nlm.nih.gov/14600801/' },
      { title: 'Romanelli et al. 2006, CNS Drug Rev – pharmakologische Charakterisierung von Unifiram und Sunifiram', url: 'https://pubmed.ncbi.nlm.nih.gov/16834757/' },
      { title: 'Moriguchi et al. 2013, Hippocampus – Langzeitpotenzierung über die Glycin-Bindestelle des NMDA-Rezeptors', url: 'https://pubmed.ncbi.nlm.nih.gov/23733502/' },
      { title: 'Moriguchi et al. 2013, Behav Brain Res – Gedächtnis bei Mäusen mit entfernten Riechkolben', url: 'https://pubmed.ncbi.nlm.nih.gov/23295391/' },
      { title: 'Gualtieri 2016, J Enzyme Inhib Med Chem – Unifi-Nootropika vom Labor ins Netz, Langzeitgiftigkeit unbekannt', url: 'https://pubmed.ncbi.nlm.nih.gov/25831025/' },
      { title: 'Vialko et al. 2025, Int J Mol Sci – AMPA-Modulatoren: Sunifiram nie klinisch entwickelt', url: 'https://pubmed.ncbi.nlm.nih.gov/40650226/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Sunifiram")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'turkesterone',
    name: 'Turkesteron',
    altNames: 'Turkesterone, Ajuga-turkestanica-Extrakt, Phytoecdysteroid (verwandt: Ecdysteron, 20-Hydroxyecdyson, Beta-Ecdysteron)',
    class: 'Pflanzliches Ecdysteroid (Phytoecdysteroid) aus Ajuga turkestanica, in der EU nicht zugelassenes neuartiges Lebensmittel',
    emoji: '🌱',
    short: 'Pflanzensteroid aus dem usbekischen Günsel, dessen Verwandter Ecdysteron im Tier und in einer Trainingsstudie mit 46 Männern Muskelmasse und Kraft steigerte. Für Turkesteron selbst gibt es nur eine Einzeldosis-Studie mit 11 Personen ohne messbaren Effekt, und viele Produkte enthalten kaum Wirkstoff.',
    moa: 'Turkesteron ist ein Ecdysteroid mit 27 Kohlenstoffatomen und 7 Hydroxygruppen; die OH-Gruppen an C-20 und C-11 gelten als Träger der anabolen Wirkung. Phytoecdysteroide binden trotz Steroidgerüst nicht an die klassischen Steroidrezeptoren im Zellinneren und damit nicht an den Androgenrezeptor. Für den nahen Verwandten Ecdysteron sind eine Wirkung über den Östrogenrezeptor beta und eine Aktivierung des Mas-Rezeptors beschrieben; in Rattenmuskeln und Muskelzellkulturen fördert es das Faserwachstum. Die höhere Wirksamkeit von Turkesteron beruht auf sowjetischen Rattenstudien ab 1976; Aufnahme, Halbwertszeit und Stoffwechsel von Turkesteron beim Menschen sind nicht untersucht.',
    benefits: [
      'Ecdysteron vergrößerte bei Ratten die Muskelfasern stärker als Metandienon, Estradienedion und SARM S 1 in gleicher Dosis (5 mg/kg, 21 Tage, Parr et al. 2015) – Tierdaten zur Substanzklasse',
      'Ecdysteron-Präparat plus 10 Wochen Krafttraining: signifikant mehr Muskelmasse und Bankdrück-Maximalkraft bei 46 jungen Männern, Präparat auf Anabolika geprüft (Isenmann et al. 2019) – nicht Turkesteron, Volltext nicht frei zugänglich',
      'Sowjetische Rattenstudien ab 1976: mehr Muskelmasse und Eiweiß nach 10 Tagen Phytoecdysteroid-Gabe, darunter Turkesteron – alte Tierdaten, nicht am Menschen nachgeprüft',
      'Turkesteron-Einzeldosen im Crossover gut verträglich, ohne Magen-Darm- oder Kreislaufauffälligkeiten (n = 11, Harris et al. 2024)',
      'Gereinigtes Ecdysteron (BIO101) über 6 bis 9 Monate bei 233 älteren Menschen mit Nebenwirkungsraten auf Placeboniveau (Phase 2b, Fielding et al. 2025) – Sicherheitsdaten der Substanzklasse'
    ],
    risks: [
      'Einzige Turkesteron-Humanstudie: 11 Männer, Einzeldosis, kein signifikanter Effekt auf IGF-1, Ruheumsatz oder Stoffwechsel (Harris et al. 2024); keine Trainingsstudie, kein Registereintrag',
      'Produktqualität: 4 von 8 US-Turkesteron-Produkten ohne nachweisbares Turkesteron, die übrigen mit 0,01 bis 0,1 mg pro Portion (Cohen et al. 2023)',
      'Ecdysteron-Daten uneinheitlich: kein Effekt bei 45 Trainierten über 8 Wochen (Wilborn et al. 2006); ein Handelspräparat enthielt unter 1 % der deklarierten Menge (Dissemond et al. 2025)',
      'Verunreinigungen: knapp 20 % getesteter Ecdysteron-Supplemente mit Fremdstoffen, darunter verbotene Anabolika – Dopingrisiko',
      'Mögliche Wirkung über den Östrogenrezeptor beta; keine Daten für Schwangere, Stillende, Jugendliche oder hormonabhängige Erkrankungen, keine Interaktionsstudien',
      'In der EU nicht zugelassenes neuartiges Lebensmittel, mehrere RASFF-Meldungen seit 2023'
    ],
    status: 'EU/DE: Ajuga turkestanica und Turkesteron gelten als nicht zugelassenes neuartiges Lebensmittel (RASFF-Meldungen 2023 bis 2026, darunter 2026.2203 ausdrücklich zu Turkesteron); nicht als Nahrungsergänzungsmittel verkehrsfähig, kein zugelassenes Arzneimittel. USA: als Nahrungsergänzungsmittel im Handel. Doping: nicht auf der WADA-Verbotsliste 2026; Ecdysteron steht seit 2020 im WADA-Monitoring-Programm (auch 2026), Forscher empfehlen die Aufnahme in S1.2.',
    sources: [
      { title: 'Harris et al. 2024, Muscles – Turkesteron-Einzeldosen: kein signifikanter Effekt auf IGF-1 und Ruheumsatz (n = 11)', url: 'https://pubmed.ncbi.nlm.nih.gov/40757520/' },
      { title: 'Cohen et al. 2023, JAMA Netw Open – 4 von 8 Turkesteron-Produkten ohne nachweisbares Turkesteron', url: 'https://pubmed.ncbi.nlm.nih.gov/37459101/' },
      { title: 'Isenmann et al. 2019, Arch Toxicol – Ecdysteron steigert Muskelmasse und Kraft bei 46 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/31123801/' },
      { title: 'Dissemond et al. 2025, J Int Soc Sports Nutr – 12-Wochen-RCT, Präparat enthielt unter 1 % der deklarierten Menge', url: 'https://pubmed.ncbi.nlm.nih.gov/40781783/' },
      { title: 'Parr et al. 2015, Biol Sport – Ecdysteron im Rattenmuskel stärker als Metandienon', url: 'https://pubmed.ncbi.nlm.nih.gov/26060342/' },
      { title: 'Fielding et al. 2025, J Cachexia Sarcopenia Muscle – BIO101 (20E) Phase 2b bei Sarkopenie', url: 'https://pubmed.ncbi.nlm.nih.gov/40026058/' },
      { title: 'Wilborn et al. 2006, J Int Soc Sports Nutr – 200 mg 20E ohne Trainingseffekt', url: 'https://pubmed.ncbi.nlm.nih.gov/18500969/' },
      { title: 'Todorova et al. 2024, Nutrients – Übersicht Ecdysteron und Turkesteron', url: 'https://pubmed.ncbi.nlm.nih.gov/38732627/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Turkesterone")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'ahk-cu',
    name: 'AHK-Cu (Kupfer-Tripeptid)',
    altNames: 'L-Alanyl-L-Histidyl-L-Lysin-Kupfer, AHK, Kupfertripeptid AHK, Copper Tripeptide-3',
    class: 'Tripeptid-Kupfer-Komplex, kosmetischer Rohstoff, kein zugelassener Wirkstoff',
    emoji: '🧬',
    short: 'Das kleine Geschwister von GHK-Cu: gleicher Bauplan, an erster Stelle Alanin statt Glycin. Isolierte menschliche Haarfollikel wuchsen in Organkultur unter AHK-Cu länger, und Haarpapillenzellen teilten sich häufiger — dabei bleibt es aber auch, denn zu AHK-Cu existiert genau eine Arbeit von 2007 und keine Anwendung am Menschen.',
    moa: 'AHK-Cu ist ein Tripeptid aus L-Alanin, L-Histidin und L-Lysin, das über den Histidinrest ein Kupfer(II)-Ion bindet und als Träger für dieses Kupfer dient. Kupfer ist Cofaktor der Lysyloxidase, die Kollagen und Elastin quervernetzt, sowie von Superoxiddismutasen, Cytochrom-c-Oxidase und Coeruloplasmin — das ist die biochemische Grundlage, auf der Kupferpeptide in der Haut- und Haarpflege diskutiert werden. Für die Peptidklasse ist beschrieben, dass Tripeptid-Kupfer-Komplexe Hautfibroblasten zur Teilung anregen, die Bildung von VEGF heben und die Abgabe von TGF-beta1 senken. Gemessen wurde für AHK-Cu selbst nur in Organ- und Zellkultur: Verlängerung isolierter menschlicher Haarfollikel und Teilung von Haarpapillenzellen bei 10 hoch -12 bis 10 hoch -9 Mol pro Liter, dazu ein zum Zellschutz passendes Muster mit höherem Verhältnis von Bcl-2 zu Bax und weniger gespaltener Caspase-3 und PARP (Pyo et al. 2007). Eine Übersichtsarbeit von 2026 hält ausdrücklich fest, dass der Signalweg von AHK-Cu schlechter charakterisiert ist als der von GHK-Cu.',
    benefits: [
      'Verlängerte isolierte menschliche Haarfollikel in Organkultur und regte kultivierte Haarpapillenzellen zur Teilung an, und das in sehr niedrigen Konzentrationen von 10 hoch -12 bis 10 hoch -9 Mol pro Liter (Pyo et al. 2007, menschliches Gewebe, aber ex vivo).',
      'In denselben Zellen ein zum Zellschutz passendes Muster: höheres Verhältnis von Bcl-2 zu Bax, weniger gespaltene Caspase-3 und weniger gespaltenes PARP (Pyo et al. 2007, Western Blot).',
      'Trägt Kupfer, den Cofaktor der Lysyloxidase für die Quervernetzung von Kollagen und Elastin sowie von Superoxiddismutasen und Cytochrom-c-Oxidase — ein plausibler Ansatzpunkt für Bindegewebe und Haarwurzel (NIH Office of Dietary Supplements).',
      'In den geprüften Konzentrationen nicht zellschädigend; die Übersicht 2026 zählt AHK-Cu zu den Peptiden, deren Zellverträglichkeit überhaupt geprüft wurde.',
      'Ein Vitamin-C-konjugierter AHK-Abkömmling verstärkte in einer Mauszelllinie die BMP-2-getriebene Knochenzelldifferenzierung über Smad1/5/8, ERK1/2 und p38 (Jung et al. 2018, Zellkultur, anderer Stoff als AHK-Cu).'
    ],
    risks: [
      'Die gesamte Datenbasis ist eine Arbeit von 2007. Eine Suche in Europe PMC nach AHK-Cu liefert 5 Treffer, davon hat nur diese eine AHK-Cu selbst untersucht.',
      'Keine Anwendung am Menschen: keine randomisierte Studie, keine Haut- oder Kopfhautstudie, 0 Einträge in ClinicalTrials.gov, keine Pharmakokinetik und keine Daten zur Aufnahme durch die Haut.',
      'Der vorgeschlagene Weg über weniger Zelltod war in der Originalarbeit nicht statistisch signifikant; belegt sind Follikelverlängerung und Zellteilung, nicht ihre Erklärung.',
      'Zahlen wandern bereits ungenau weiter: Die Übersicht 2026 gibt für die Follikelverlängerung 10 hoch -13 bis 10 hoch -7 Mol pro Liter an, der Abstract der Originalarbeit 10 hoch -12 bis 10 hoch -9.',
      'Nicht für Menschen mit einer Störung des Kupferstoffwechsels wie Morbus Wilson oder mit Kupferallergie. Die tolerierbare obere Kupferaufnahme liegt in den USA bei 10 Milligramm pro Tag, die EFSA erwartet bei 5 Milligramm pro Tag keine Anreicherung.',
      'Gespritzte Graumarktware bringt die Probleme unregulierter Injektionspeptide mit: Verunreinigungen, Herstellungsrückstände und falsche Gehaltsangaben ohne belastbares Sicherheitsprofil (Moiz et al. 2026).'
    ],
    status: 'Kein zugelassenes Arzneimittel in Deutschland, der EU oder den USA, keine eingetragene klinische Prüfung. Nach Anbieterangaben ein kosmetischer Rohstoff: Die EU-Kosmetikverordnung (EG) Nr. 1223/2009 verlangt für kosmetische Mittel eine Sicherheitsbewertung, aber keine Einzelzulassung eines Peptids. Als Nahrungsergänzungsmittel nicht verkehrsfähig, denn Anhang II der Richtlinie 2002/46/EG nennt 8 zugelassene Kupferverbindungen, Kupfertripeptide gehören nicht dazu. Daneben Handel als Forschungspeptid ohne regulatorischen Rahmen. Im Sport stehen Kupferpeptide nicht namentlich in der WADA-Verbotsliste 2026; für injizierbare Ware ohne Zulassung greift grundsätzlich Abschnitt S0.',
    sources: [
      { title: 'Pyo et al., Arch Pharm Res 2007 – AHK-Cu verlängert menschliche Haarfollikel in Organkultur', url: 'https://pubmed.ncbi.nlm.nih.gov/17703734/' },
      { title: 'Fan et al., Biomedicines 2026 – Übersicht zu kurzen Peptiden bei Haarverlust, Einordnung von AHK-Cu', url: 'https://pubmed.ncbi.nlm.nih.gov/42072405/' },
      { title: 'Jung et al., Differentiation 2018 – Vitamin-C-konjugiertes AHK und BMP-2-getriebene Knochenzelldifferenzierung', url: 'https://pubmed.ncbi.nlm.nih.gov/29567599/' },
      { title: 'Lee et al., Ann Dermatol 2016 – Komplex aus 5-Aminolävulinsäure und GHK bei 45 Männern mit Haarverlust', url: 'https://pubmed.ncbi.nlm.nih.gov/27489425/' },
      { title: 'NIH Office of Dietary Supplements – Copper Fact Sheet: Cofaktorfunktionen, Zufuhr, Obergrenze, Morbus Wilson', url: 'https://ods.od.nih.gov/factsheets/Copper-HealthProfessional/' },
      { title: 'EFSA Scientific Committee, EFSA J 2023 – Kupfer: keine Anreicherung bei 5 mg pro Tag, ADI 0,07 mg pro kg', url: 'https://pubmed.ncbi.nlm.nih.gov/36694841/' },
      { title: 'Moiz et al., Mo Med 2026 – Risiken unregulierter Injektionspeptide', url: 'https://pubmed.ncbi.nlm.nih.gov/42757290/' },
      { title: 'Richtlinie 2002/46/EG, Anhang II – zugelassene Kupferverbindungen in Nahrungsergänzungsmitteln', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:02002L0046-20170726' },
      { title: 'ClinicalTrials.gov – keine eingetragene Studie zu AHK-Cu (Abfrage 27.09.2026)', url: 'https://clinicaltrials.gov/search?term=AHK-Cu' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'bam15',
    name: 'BAM15',
    altNames: 'BAM-15, Mitochondrien-Entkoppler BAM15, Oxadiazolopyrazin-Protonophor',
    class: 'Chemischer Mitochondrien-Entkoppler (Protonophor), nicht zugelassen',
    emoji: '🔥',
    short: 'Ein kleines Molekül, das Protonen an der ATP-Synthase vorbei in die Mitochondrien lässt und damit Nahrungsenergie als Wärme verbraucht: In Mäusen sinkt die Fettmasse ohne Appetitzügelung und ohne Verlust an Magermasse. Am Menschen ist nichts untersucht, es gibt keine eingetragene klinische Studie.',
    moa: 'BAM15 ist ein lipophiler schwacher Säure-Protonophor, der Protonen unabhängig von der ATP-Synthase in die mitochondriale Matrix transportiert. Damit sinkt die protonenmotorische Kraft, die Atmungskette läuft schneller, und ein Teil der Nahrungsenergie verlässt die Zelle als Wärme statt als ATP — die Kalorieneffizienz sinkt, während die Nährstoffoxidation steigt. Der Unterschied zu den älteren Protonophoren FCCP und 2,4-Dinitrophenol ist die Selektivität: BAM15 depolarisiert die Plasmamembran nicht, erlaubt in Zellen eine höhere maximale Atmungsrate als FCCP und ist weniger zytotoxisch (Kenwood et al., Mol Metab 2014). In Mäusen lagert es sich vor allem im Fettgewebe an, weniger in Leber, Herz und Niere; die anhaltende Nährstoffaufnahme und die Verträglichkeit hängen nach Zellversuchen an der Kinase AMPK (Axelrod et al., EMBO Mol Med 2020). Die Körpertemperatur stieg in beiden Mausarbeiten nicht — anders als beim klassischen Entkoppler-Risiko.',
    benefits: [
      'Kehrt bestehendes Übergewicht im Mausmodell um: nach 5 Wochen Behandlung 15 Prozent weniger Körpergewicht als die Kontrollgruppe, fast ausschließlich weniger Fett, kein Unterschied in der fettfreien Masse, gleiche Kalorienaufnahme (Alexopoulos et al. 2020, Tierversuch, 21 Tiere).',
      'Der Verlust läuft nicht über den Appetit und nicht über schlechtere Fettaufnahme: Futterverzehr unverändert, Triglyzeride und Cholesterin im Kot gleich (Alexopoulos et al. 2020).',
      'Bessere Insulinwirkung in mehreren Geweben in hyperinsulinämisch-euglykämischen Klemmversuchen; in der zweiten Arbeitsgruppe niedrigere Nüchternglukose, niedrigeres Nüchterninsulin und höherer Energieumsatz ohne Temperaturanstieg (Axelrod et al. 2020, Maus, 3 Wochen).',
      'Im direkten Vergleich von 15 Entkopplern über 4 Wochen an db/db-Mäusen die wirksamste Substanz: HbA1c zurück auf die 4 Prozent der gesunden Vergleichstiere, während die Kontrolle von 6 auf 8 Prozent stieg, HOMA-IR bis zu 50 Prozent niedriger (Shah et al. 2025).',
      'Gegen etablierte Mittel gehalten: An weiblichen db/db-Mäusen verbesserten BAM15 und Kalorienrestriktion Körpergewicht und Leberverfettung stärker als Semaglutid, Niclosamid-Ethanolamin und Rosiglitazon (Chen et al. 2024, Tierversuch).',
      'Wirkungen jenseits des Gewichts, alle im Tier: weniger Sterblichkeit und weniger Nierenschaden im Sepsismodell selbst bei Gabe 12 Stunden nach Auslösung (Tsuji et al. 2023); bei Taufliegen 9 Prozent längere Lebensspanne bei Normalkost und 25 Prozent bei Hochfettkost (Taylor et al. 2024).'
    ],
    risks: [
      'Keine Studie am Menschen: 0 einschlägige Einträge in ClinicalTrials.gov, keine Pharmakokinetik, keine Verträglichkeitsdaten, keine Fallserie. Die gesamte Wirkerzählung stammt aus Zellen, Mäusen und Taufliegen.',
      'Das gilt für die ganze Klasse: Auch der leberselektiv entwickelte Entkoppler OPC-163493 hat trotz veröffentlichter Tiertoxikologie keine eingetragene klinische Studie; dort waren die Zielorgane je nach Tierart Leber, Blutgefäße oder Niere (Inoue et al. 2022).',
      'Die Klasse hat eine Schattenseite mit Todesfällen: Bei 2,4-Dinitrophenol schaukelt sich die Entkopplung zu Hyperthermie, Azidose und Hyperkaliämie auf, mit einer funktionellen Halbwertszeit der Wirkung von 4,9 Tagen im überlebten Fall (Lindeman et al. 2026). BAM15 ist chemisch anders und hob die Körpertemperatur in Mäusen nicht an — belegt ist damit aber kein Sicherheitsfenster beim Menschen.',
      'Sehr kurze Verweildauer: Halbwertszeit 1,7 bis 3 Stunden in Mäusen; in allen Langzeitversuchen wurde deshalb über das Futter dauerhaft zugeführt.',
      'Als Forschungschemikalie im Umlauf, teils aus Eigensynthese: Eine Netnographie beschreibt eine YouTube-Anleitung zur Herstellung samt Kommentarspalte mit Nachahmungsabsicht — Identität, Reinheit und Gehalt der Ware sind ungeprüft (Turnock und Piatkowski 2025).',
      'Im Sport verboten: BAM15 steht nicht namentlich in der WADA-Verbotsliste 2026, damit greift Abschnitt S0 für Substanzen ohne aktuelle Zulassung einer staatlichen Gesundheitsbehörde.'
    ],
    status: 'Präklinische Forschung. In Deutschland, der EU und den USA kein zugelassenes Arzneimittel und keine eingetragene klinische Prüfung. Als Nahrungsergänzungsmittel nicht verkehrsfähig: Eine synthetische Substanz ohne Verzehrgeschichte wäre ein neuartiges Lebensmittel und bräuchte eine Zulassung nach Verordnung (EU) 2015/2283, die es nicht gibt. Vertrieb als Forschungschemikalie ohne Bestimmung für den menschlichen Gebrauch. Im Sport über Abschnitt S0 der WADA-Verbotsliste 2026 jederzeit verboten.',
    sources: [
      { title: 'Kenwood et al., Mol Metab 2014 – Erstbeschreibung von BAM15, kein Depolarisieren der Plasmamembran', url: 'https://pubmed.ncbi.nlm.nih.gov/24634817/' },
      { title: 'Alexopoulos et al., Nat Commun 2020 – BAM15 kehrt diätinduziertes Übergewicht und Insulinresistenz bei Mäusen um', url: 'https://pubmed.ncbi.nlm.nih.gov/32409697/' },
      { title: 'Axelrod et al., EMBO Mol Med 2020 – Energieumsatz, AMPK-Abhängigkeit, keine Temperaturerhöhung', url: 'https://pubmed.ncbi.nlm.nih.gov/32519812/' },
      { title: 'Shah et al., Mol Metab 2025 – 15 Entkoppler im direkten Vergleich, BAM15 am wirksamsten', url: 'https://pubmed.ncbi.nlm.nih.gov/40639664/' },
      { title: 'Chen et al., Biochim Biophys Acta Mol Basis Dis 2024 – BAM15 gegen Semaglutid, Rosiglitazon und Kalorienrestriktion', url: 'https://pubmed.ncbi.nlm.nih.gov/37793464/' },
      { title: 'Tsuji et al., J Clin Invest 2023 – BAM15 im Sepsis- und Nierenschadenmodell der Maus', url: 'https://pubmed.ncbi.nlm.nih.gov/36757801/' },
      { title: 'Taylor et al., Aging Cell 2024 – Lebensspanne und Beweglichkeit bei Taufliegen', url: 'https://pubmed.ncbi.nlm.nih.gov/38343281/' },
      { title: 'Inoue et al., EXCLI J 2022 – Tiertoxikologie des leberselektiven Entkopplers OPC-163493', url: 'https://pubmed.ncbi.nlm.nih.gov/35221841/' },
      { title: 'Lindeman et al., Toxicol Rep 2026 – zwei Vergiftungsfälle mit 2,4-Dinitrophenol, davon einer tödlich', url: 'https://pubmed.ncbi.nlm.nih.gov/41487961/' },
      { title: 'Turnock und Piatkowski, Performance Enhancement & Health 2025 – BAM15 in Bodybuilding-Foren und auf YouTube', url: 'https://repository.lincoln.ac.uk/articles/journal_contribution/_The_new_DNP_Discussion_of_the_experimental_fat_burner_BAM15_on_bodybuilding_forums_and_YouTube/30511007' },
      { title: 'ClinicalTrials.gov – keine eingetragene Studie zu BAM15 (Abfrage 27.09.2026)', url: 'https://clinicaltrials.gov/search?term=BAM15' }
    ],
    community: [
      { title: 'biolabshop (Suche „BAM15")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'modafinil',
    name: 'Modafinil',
    altNames: 'Vigil, Provigil, Eugeroikum, Smart Drug',
    class: 'Wachheitsförderndes Arzneimittel (Eugeroikum, Dopamin-Wiederaufnahmehemmer), zugelassen gegen Narkolepsie, verschreibungspflichtig',
    emoji: '⏰',
    short: 'Ein zugelassenes Mittel gegen Narkolepsie, das in großen Studien Tagesschläfrigkeit verlässlich senkt und bei Schichtarbeit Unfälle auf dem Heimweg seltener machte. Als Smart Drug für Ausgeruhte ist der Effekt real, aber klein, und es wirkt über das Dopaminsystem stärker wie ein Stimulans als lange gedacht.',
    moa: 'Modafinil blockiert den Dopamintransporter: In einer PET-Studie mit 10 gesunden Männern belegte es nach 200 und 400 mg rund die Hälfte der Transporter im Striatum (Nucleus caudatus 53,8 %, Putamen 47,2 %) und erhöhte das freie Dopamin, auch im Nucleus accumbens. Dazu steigen die kortikalen Katecholamine, indirekt auch Orexin, Histamin, Glutamat und Serotonin, während GABA sinkt. Die Kombination fördert Wachheit, ohne den Nachtschlaf in den Zulassungsstudien zu stören. Die wirksame Halbwertszeit liegt nach wiederholter Einnahme bei etwa 15 Stunden. Zudem senkt Modafinil die Wirksamkeit hormoneller Verhütungsmittel.',
    benefits: [
      'Narkolepsie: Tagesschläfrigkeit in objektiven Tests (MSLT, MWT) deutlich gesenkt (2 doppelblinde RCTs, 283 und 271 Patienten, 9 Wochen, 1998 und 2000), Wirkung über 40 Wochen erhalten',
      'Schichtarbeitsstörung: klinische Besserung bei 74 % gegenüber 36 %, Unfälle oder Beinahe-Unfälle auf dem Heimweg 29 % gegenüber 54 % (RCT, 209 Patienten, 3 Monate, NEJM 2005)',
      'Gesunde, ausgeruhte Erwachsene: kleiner, signifikanter Gesamteffekt auf Aufmerksamkeit, Gedächtnis und exekutive Funktionen, g = 0,10 (Meta-Analyse, 19 placebokontrollierte Studien, Kredlow 2019); bei komplexen Aufgaben deutlicher (Battleday 2015)',
      'Schlafentzug: Wachheit, Gedächtnis und exekutive Funktionen besser erhalten als unter Placebo (systematischer Review, Repantis 2010)',
      'Depression als Zusatztherapie: bessere Depressionswerte und Remissionsrate, weniger Erschöpfung (Meta-Analyse, 6 RCTs, 910 Patienten, Goss 2013) – nicht zugelassen'
    ],
    risks: [
      'Häufig Kopfschmerz (34 % gegenüber 23 % unter Placebo), Übelkeit (11 % gegenüber 3 %), Nervosität, Angst, Schlaflosigkeit',
      'Schwere Hautreaktionen bis Stevens-Johnson-Syndrom, bei Kindern häufiger; für unter 18-Jährige nicht zugelassen',
      'Psychiatrische Nebenwirkungen bis Psychose, teils schon bei therapeutischen Dosen (EMA 2011; Review von 24 Fällen, Sato 2026); Bluthochdruck und Herzrhythmusstörungen',
      'Blockiert Dopamintransporter wie klassische Stimulanzien; in den USA als Schedule IV eingestuft, Missbrauchsprofil laut FDA vergleichbar mit Methylphenidat',
      'Schwächt hormonelle Verhütung ab (zusätzliche Verhütung bis 2 Monate nach Absetzen); Fehlbildungssignal in einem US-Register (13,1 % gegenüber 3 %), in französischen Kohorten nicht signifikant',
      'Graumarkt-Tabletten enthielten 45,5 % bis 80,5 % des angegebenen Gehalts (Nowak 2025)'
    ],
    status: 'Deutschland/EU: zugelassenes, verschreibungspflichtiges Arzneimittel (u. a. Vigil); seit der EMA-Überprüfung (Kommissionsentscheidung 27.01.2011) nur noch bei Narkolepsie von Erwachsenen, Schlafapnoe und Schichtarbeitsstörung wurden gestrichen. Seit 2008 kein Betäubungsmittel mehr (21. BtMÄndV), sondern auf normalem Rezept. USA: seit 1998 zugelassen für Narkolepsie, seit 2004 auch für Schlafapnoe und Schichtarbeitsstörung, Schedule IV. Nutzung zur Leistungssteigerung bei Gesunden ist Off-Label. Doping: WADA-Liste 2026 S6.A, nicht-spezifisches Stimulans, im Wettkampf verboten.',
    sources: [
      { title: 'US Modafinil in Narcolepsy Multicenter Study Group 1998, Ann Neurol – RCT mit 283 Patienten, Tagesschläfrigkeit gesenkt', url: 'https://pubmed.ncbi.nlm.nih.gov/9450772/' },
      { title: 'US Modafinil in Narcolepsy Multicenter Study Group 2000, Neurology – RCT mit 271 Patienten, kein Entzug nach Absetzen', url: 'https://pubmed.ncbi.nlm.nih.gov/10720292/' },
      { title: 'Czeisler et al. 2005, N Engl J Med – Schichtarbeitsstörung, weniger Unfälle auf dem Heimweg', url: 'https://pubmed.ncbi.nlm.nih.gov/16079371/' },
      { title: 'Kredlow et al. 2019, J Clin Psychopharmacol – Meta-Analyse Kognition bei Ausgeruhten, g = 0,10', url: 'https://pubmed.ncbi.nlm.nih.gov/31433334/' },
      { title: 'Battleday und Brem 2015, Eur Neuropsychopharmacol – systematischer Review Neuroenhancement', url: 'https://pubmed.ncbi.nlm.nih.gov/26381811/' },
      { title: 'Repantis et al. 2010, Pharmacol Res – Modafinil und Methylphenidat bei Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/20416377/' },
      { title: 'Volkow et al. 2009, JAMA – Dopamintransporter-Blockade im PET', url: 'https://pubmed.ncbi.nlm.nih.gov/19293415/' },
      { title: 'EMA 2011 – Referral: Modafinil nur noch bei Narkolepsie', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/modafinil' },
      { title: 'FDA-Fachinformation Provigil (DailyMed)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e16c26ad-7bc2-d155-3a5d-da83ad6492c8' },
      { title: 'Sato et al. 2026, Ther Adv Psychopharmacol – Modafinil-assoziierte Psychose, 24 Fälle', url: 'https://pubmed.ncbi.nlm.nih.gov/42137740/' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'pregnenolon',
    name: 'Pregnenolon',
    altNames: 'Pregnenolone, PREG, Pregnenolonsulfat (PregS, körpereigene Speicherform), Mutterhormon',
    class: 'Körpereigene Steroid-Hormonvorstufe und Neurosteroid; Status als Nahrungsergänzung in Deutschland ungeklärt',
    emoji: '🧠',
    short: 'Das erste Steroid aus Cholesterol und zugleich ein Neurosteroid: Oral eingenommen steigen Pregnenolon, Allopregnanolon und Pregnenolonsulfat im Blut, und in kleinen Placebo-Studien linderte es chronischen Kreuzschmerz, Negativsymptome bei beginnender Schizophrenie und bipolare Depression. Die Studien sind klein und kurz, zu Gedächtnis, Hormonbalance oder Altern bei Gesunden gibt es keine Humandaten.',
    moa: 'Das Enzym CYP11A1 spaltet die Seitenkette des Cholesterols ab, es entsteht Pregnenolon; daraus bildet der Körper Progesteron, Cortisol und über CYP17A1 in zwei Schritten DHEA (Expertenkommission BVL/BfArM 2025). Im Gehirn wirkt es als Neurosteroid: Sein Abkömmling Allopregnanolon verstärkt die Antwort der GABA-A-Rezeptoren, Pregnenolonsulfat moduliert NMDA-Rezeptoren positiv; beide steigen nach oraler Gabe im Serum (Marx et al. 2014). Eine Einzeldosis von 400 mg senkte in der fMRT die Aktivität von Amygdala und Insula und stärkte deren Kopplung an das Stirnhirn (Sripada et al. 2013). Im Tier hemmt Pregnenolon als signalspezifischer Inhibitor des CB1-Rezeptors mehrere THC-Effekte (Vallée et al. 2014); daraus wurde der Wirkstoff AEF0117 entwickelt. Wie viel geschlucktes Pregnenolon zu Sexualhormonen wird, ist beim Menschen kaum gemessen.',
    benefits: [
      'Chronischer Kreuzschmerz: Schmerztagebuch nach 4 Wochen 0,56 Punkte stärker gesenkt als unter Placebo, p = 0,02 (RCT, 94 Veteranen, Naylor et al. 2020)',
      'Negativsymptome bei kürzlich begonnener Schizophrenie: Effektstärke d = 0,79 unter 50 mg pro Tag über 8 Wochen (RCT, 60 Patienten, Ritsner et al. 2014)',
      'Bipolare Depression: Remission 61 % vs. 37 % im Selbstbericht nach 12 Wochen, im Fremdurteil nicht signifikant (RCT, 80 Patienten, Brown et al. 2014)',
      'Schizophrenie: bessere Alltagsfähigkeiten nach 8 Wochen, Kognition unverändert (RCT, 120 Teilnehmende, Marx et al. 2014)',
      'Messbare Hirnwirkung: Einzeldosis senkte Amygdala-Aktivität und Angst im fMRT (RCT, 16 vs. 15 Gesunde, Sripada et al. 2013)',
      'Kokainabhängigkeit: stress- und reizausgelöstes Verlangen gedämpft (Pilot-RCTs, 30 und 55 Personen, 2022 und 2025)'
    ],
    risks: [
      'Keine Humanstudie zu Gedächtnis, Energie, Hormonbalance oder Altern bei Gesunden; der Gedächtnis-Ruf stammt aus Mäusen mit Injektion ins Gehirn (Flood et al. 1992)',
      'Schizophrenie gepoolt ohne Effekt (Meta-Analyse, k = 4, Heringa et al. 2015); größte Studie verfehlte das Kognitionsziel',
      'Nur Kurzzeitdaten bis 12 Wochen; keine Langzeit- oder Pharmakovigilanzdaten',
      'Vorstufe von DHEA und Sexualhormonen: bei hormonabhängigen Erkrankungen, in Schwangerschaft und Stillzeit keine Daten',
      'Uneinheitliche Dosis-Wirkung (30 mg wirksam, 200 mg nicht, Ritsner et al. 2010) und hoher Placeboeffekt in kleinen Studien',
      'Rechtsstatus als Nahrungsergänzung in Deutschland ungeklärt; FDA nennt es in Warnschreiben nicht zugelassenes Arzneimittel'
    ],
    status: 'Deutschland: nicht verschreibungspflichtig (nicht in AMVV Anlage 1), nicht im Anti-Doping-Gesetz; wird in Apotheken und online als Nahrungsergänzungsmittel verkauft, Verkehrsfähigkeit aber behördlich nicht bestätigt. Kein Eintrag im EU-Novel-Food-Statuskatalog; für das Folgeprodukt DHEA stufte die Gemeinsame Expertenkommission von BVL und BfArM 2025 entsprechende Erzeugnisse als Arzneimittel oder nicht zugelassenes Novel Food ein. USA: Status von der FDA nicht ausdrücklich geregelt, in Warnschreiben als nicht zugelassenes neues Arzneimittel bezeichnet. Doping: nicht auf der WADA-Liste (USADA), die Liste 2026 nennt es nicht.',
    sources: [
      { title: 'Naylor et al. 2020, JAMA Netw Open – Kreuzschmerz: Schmerz nach 4 Wochen stärker gesenkt als unter Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/32119096/' },
      { title: 'Marx et al. 2014, Psychopharmacology – Schizophrenie, 120 Teilnehmende: Alltagsfähigkeiten besser, Kognition nicht', url: 'https://pubmed.ncbi.nlm.nih.gov/25030803/' },
      { title: 'Ritsner et al. 2014, Psychiatry Clin Neurosci – Negativsymptome bei beginnender Schizophrenie gesenkt', url: 'https://pubmed.ncbi.nlm.nih.gov/24548129/' },
      { title: 'Brown et al. 2014, Neuropsychopharmacology – bipolare Depression: mehr Remissionen im Selbstbericht', url: 'https://pubmed.ncbi.nlm.nih.gov/24917198/' },
      { title: 'Heringa et al. 2015, Schizophr Res – Meta-Analyse: kein Gesamteffekt von Pregnenolon bei Schizophrenie', url: 'https://pubmed.ncbi.nlm.nih.gov/25914107/' },
      { title: 'Sripada et al. 2013, Biol Psychiatry – Einzeldosis senkt Amygdala-Aktivität im fMRT', url: 'https://pubmed.ncbi.nlm.nih.gov/23348009/' },
      { title: 'Vallée et al. 2014, Science – Pregnenolon hemmt im Tier den CB1-Rezeptor und dämpft THC-Effekte', url: 'https://pubmed.ncbi.nlm.nih.gov/24385629/' },
      { title: 'Flood et al. 1992, Proc Natl Acad Sci USA – Gedächtniseffekte bei Mäusen nach Injektion ins Gehirn', url: 'https://pubmed.ncbi.nlm.nih.gov/1531874/' },
      { title: 'Expertenkommission BVL/BfArM 2025 – Einstufung von DHEA, Biosynthese aus Pregnenolon', url: 'https://www.bfarm.de/SharedDocs/Downloads/DE/Arzneimittel/Zulassung/ZulRelThemen/abgrenzung/Expertenkommission/stellungnahmen/2025-01.pdf' },
      { title: 'USADA – Pregnenolone: nicht auf der WADA-Liste, FDA-Status', url: 'https://www.usada.org/spirit-of-sport/education/pregnenolone/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Pregnenolon")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Longevity'
  },
  {
    id: 'sam-e',
    name: 'SAM-e (S-Adenosylmethionin)',
    altNames: 'SAMe, S-Adenosyl-L-methionin, AdoMet, Ademetionin (INN), Samyr, Donamet (Italien), Disulfat-Tosylat, Butandisulfonat',
    class: 'Körpereigener Methylgruppen-Spender; in Deutschland verschreibungspflichtiger Arzneistoff, als Nahrungsergänzung nicht zugelassenes Novel Food',
    emoji: '🔄',
    short: 'Der zentrale Methylgruppen-Spender des Körpers, in Italien als Arzneimittel gegen Depression und Gallenstau zugelassen: In einer Meta-Analyse mit 23 Studien half SAM-e gegen Depression mittelstark besser als Placebo und ähnlich gut wie Antidepressiva, bei Arthrose ähnlich wie NSAR. Andere Übersichten und die größte moderne Studie sahen keinen klaren Placebo-Vorteil; in Deutschland ist es verschreibungspflichtig.',
    moa: 'SAM-e wird in allen Zellen aus Methionin durch die Methionin-Adenosyltransferase gebildet, am meisten in der Leber, und liefert die Methylgruppen für alle bekannten biologischen Methylierungen; außerdem ist es an der Synthese von Glutathion beteiligt (Lu & Mato 2012, Rambaldi & Gluud 2006). Bei chronischen Lebererkrankungen sind Enzymaktivität und SAM-e-Spiegel vermindert; bei Mäusen ohne das Leber-Enzym bildet sich die Fettleberentzündung unter SAM-e zurück (Robinson et al. 2023). Auch chronisch zu hohe SAM-e-Spiegel schädigen die Leber, wie Kinder mit GNMT-Mutation zeigen. Wie SAM-e gegen Depression wirkt, ist am Menschen nicht geklärt; Vitamin-B12- und Folsäuremangel können die Wirkung laut italienischer Fachinformation mindern.',
    benefits: [
      'Depression: SMD -0,58 gegenüber Placebo in 11 Studien, kein Unterschied zu Antidepressiva in 7 Studien, moderate Evidenzsicherheit (Meta-Analyse, 23 RCTs, 2183 Teilnehmende, Limveeraprajak et al. 2024)',
      'Zusatz zu SSRI bei Nonrespondern: Ansprechen 36,1 % vs. 17,6 %, Remission 25,8 % vs. 11,7 % nach 6 Wochen (RCT, 73 Patienten, Papakostas et al. 2010)',
      'Arthrose: vergleichbar mit NSAR bei weniger Nebenwirkungen (Meta-Analyse, 11 Studien, Soeken et al. 2002); ab dem zweiten Monat gleich wirksam wie Celecoxib (Crossover-RCT, 56 Auswertbare, 16 Wochen, Najm et al. 2004)',
      'Intrahepatische Cholestase: Leberwerte binnen 2 Wochen gesenkt (systematische Übersicht, 3 randomisierte Studien, Noureddin et al. 2020); dafür in Italien als Arzneimittel zugelassen',
      'Alkoholische Leberzirrhose: Tod oder Transplantation 16 % vs. 30 % über 2 Jahre, nicht signifikant; ohne Child-C-Patienten 12 % vs. 29 %, signifikant (RCT, 123 Patienten, Mato et al. 1999)'
    ],
    risks: [
      'Bipolare Störung: Umschlag in Hypomanie oder Manie möglich (Cochrane 2016: 2 Fälle bei 441 Behandelten)',
      'Serotonerge Mittel (SSRI, trizyklische Antidepressiva, Tryptophan, Johanniskraut): Vorsicht, ein Serotoninsyndrom mit Clomipramin beschrieben; Wirkung von Levodopa kann nachlassen',
      'Magen-Darm-Beschwerden: Magenbeschwerden 19 % und Durchfall 20 % bei 1600 bis 3200 mg pro Tag (Mischoulon et al. 2014), Bauchbeschwerden 31,3 % bei 3200 mg (Sakurai et al. 2020)',
      'Gegenanzeige: angeborene Defekte des Methioninzyklus, Homocystinurie; Sicherheit in der Schwangerschaft nicht belegt',
      'Depression uneinheitlich: Cochrane 2016 (8 Studien, 934 Erwachsene) und die größte moderne Studie (189 Patienten) ohne klaren Placebo-Vorteil; Arthrose laut Cochrane 2009 nur 0,4 cm auf 10-cm-Skala'
    ],
    status: 'Deutschland: Ademetionin in Anlage 1 der AMVV, verschreibungspflichtig einschließlich seiner Salze. EU: Die in Nahrungsergänzungen übliche Salzform S-Adenosyl-L-methionin-Disulfat-Tosylat ist seit dem 20.05.2026 als nicht zugelassenes Novel Food eingestuft (kein nennenswerter Verzehr vor dem 15. Mai 1997); RASFF-Meldung Italiens vom 02.07.2026. Als Nahrungsergänzung damit nicht verkehrsfähig, wird aber angeboten. Italien: verschreibungspflichtiges Arzneimittel (Samyr, Donamet) gegen depressive Syndrome und intrahepatische Cholestase. USA: als Nahrungsergänzung im Handel. Doping: WADA-Liste 2026 nennt SAM-e nicht.',
    sources: [
      { title: 'Limveeraprajak et al. 2024, Prog Neuropsychopharmacol Biol Psychiatry – 23 RCTs: SAM-e allein besser als Placebo, gleich wie Antidepressiva', url: 'https://pubmed.ncbi.nlm.nih.gov/38423354/' },
      { title: 'Galizia et al. 2016, Cochrane Database Syst Rev – Depression: kein klarer Placebo-Vorteil bei sehr niedriger Datenqualität', url: 'https://pubmed.ncbi.nlm.nih.gov/27727432/' },
      { title: 'Papakostas et al. 2010, Am J Psychiatry – Zusatz zu SSRI verdoppelt Ansprechen', url: 'https://pubmed.ncbi.nlm.nih.gov/20595412/' },
      { title: 'Mischoulon et al. 2014, J Clin Psychiatry – weder SAM-e noch Escitalopram schlagen Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/24500245/' },
      { title: 'Rutjes et al. 2009, Cochrane Database Syst Rev – Arthrose: kleiner Effekt, schwache Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/19821403/' },
      { title: 'Soeken et al. 2002, J Fam Pract – Arthrose: vergleichbar mit NSAR', url: 'https://pubmed.ncbi.nlm.nih.gov/12019049/' },
      { title: 'Mato et al. 1999, J Hepatol – alkoholische Zirrhose über 2 Jahre', url: 'https://pubmed.ncbi.nlm.nih.gov/10406187/' },
      { title: 'Lu & Mato 2012, Physiol Rev – SAM-e in Lebergesundheit, Schaden und Krebs', url: 'https://pubmed.ncbi.nlm.nih.gov/23073625/' },
      { title: 'NCCIH – SAMe: Sicherheit, Wechselwirkungen, Studienlage', url: 'https://www.nccih.nih.gov/health/sadenosyllmethionine-same-in-depth' },
      { title: 'EU-Kommission 2026 – S-Adenosyl-L-methionin-Disulfat-Tosylat ist Novel Food', url: 'https://food.ec.europa.eu/document/download/015a8ab1-4c4b-4cee-b079-e15a93158a26_en?filename=novel-food_consult-status_adenosyl-l-methionine-disulfate-tosylate.pdf' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'teriparatid',
    name: 'Teriparatid',
    altNames: 'Teriparatide, Forsteo (EU), Forteo (USA), rhPTH(1-34), Parathormon-Fragment, Biosimilars z. B. Movymia, Terrosa, Livogiva',
    class: 'Rekombinantes Parathormon-Fragment PTH(1-34), knochenaufbauendes Osteoporose-Medikament (zugelassen, verschreibungspflichtig)',
    emoji: '🦴',
    short: 'Baut Knochen auf und senkt Wirbelbrüche deutlich: In der Zulassungsstudie mit 1637 Frauen 5 gegenüber 14 Prozent, im Vergleich mit Risedronat 5,4 gegenüber 12,0 Prozent. Seit 2003 in der EU zugelassen; kein nachgewiesener Schutz vor Hüftbrüchen, und als Heilungsbeschleuniger für Brüche oder Sehnen überzeugte es in randomisierten Studien bisher nicht.',
    moa: 'Teriparatid entspricht den ersten 34 Aminosäuren des körpereigenen Parathormons, das aus 84 Aminosäuren besteht, und wird gentechnisch hergestellt. Es aktiviert den PTH1-Rezeptor der knochenbildenden Zellen; die einmal tägliche Gabe regt laut Fachinformation die Knochenbildung stärker an als den Abbau, an den Bälkchen im Inneren wie an der Außenschicht. Die Halbwertszeit nach der Spritze liegt bei etwa 1 Stunde, der Kalziumspiegel erreicht nach 4 bis 6 Stunden sein Maximum und ist nach 16 bis 24 Stunden zurück beim Ausgangswert. Am Menschen ist die Kette bis zur Bruchrate gemessen: Die Knochendichte der Lendenwirbelsäule stieg in der Zulassungsstudie um 9 Prozentpunkte mehr als unter Placebo.',
    benefits: [
      'Neue Wirbelbrüche 5 gegenüber 14 Prozent unter Placebo, relatives Risiko 0,35; Brüche außerhalb der Wirbelsäule 3 gegenüber 6 Prozent (Mensch, 1637 Frauen nach den Wechseljahren, median 21 Monate, NEJM 2001).',
      'Überlegen gegenüber Risedronat: neue Wirbelbrüche 5,4 gegenüber 12,0 Prozent, klinische Brüche 4,8 gegenüber 9,8 Prozent (VERO, doppelblind, 1360 Frauen, 24 Monate, Lancet 2018).',
      'Bei Osteoporose durch Kortison besser als Alendronat: Knochendichte Lendenwirbelsäule plus 7,2 gegenüber 3,4 Prozent, neue Wirbelbrüche 0,6 gegenüber 6,1 Prozent (428 Patienten, 18 Monate, NEJM 2007).',
      'Knochendichte bei Männern: Lendenwirbelsäule plus 5,9 Prozent unter der niedrigeren Dosis (437 Männer, median 11 Monate, 2003; Bruchschutz nicht nachgewiesen).',
      'Schutz hält nach dem Absetzen an: 41 Prozent weniger Frauen mit neuem Wirbelbruch über median 18 Monate Nachbeobachtung (1262 Frauen, laut EU-Fachinformation).',
      'Kein erhöhtes Osteosarkom-Risiko beim Menschen in 15 Jahren US-Überwachung: 3 beobachtete gegenüber 4,17 erwarteten Fällen (2021).'
    ],
    risks: [
      'Kein nachgewiesener Schutz vor Hüftbrüchen (EU-Fachinformation); Brüche außerhalb der Wirbelsäule im Vergleich mit Risedronat 4,0 gegenüber 6,1 Prozent, nicht signifikant.',
      'Heilung nicht beschleunigt: Speichenbruch primärer Endpunkt verfehlt (102 Frauen, 2010), Schenkelhalsbruch erneute Operation 17 gegenüber 14 Prozent (159 Patienten, 2016), Rotatorenmanschette kein Unterschied (50 Patienten, 2025); Meta-Analyse von 5 RCTs mit 380 Patienten ohne schnellere Heilung im Röntgenbild.',
      'Osteosarkome bei Ratten nach fast lebenslanger Gabe, dosisabhängig; deshalb in der EU höchstens 24 Monate im Leben, keine Wiederholung.',
      'Übelkeit, Gliederschmerzen, Kopfschmerzen, Schwindel; Blutdruckabfall beim Aufstehen in den ersten Anwendungen innerhalb von 4 Stunden; Harnsäure über dem Normbereich bei 2,8 gegenüber 0,7 Prozent.',
      'Hyperkalzämie häufiger als unter Abaloparatid, 6,4 gegenüber 3,4 Prozent (ACTIVE, 2016); nicht bei vorbestehend erhöhtem Kalzium, schwerer Nierenschwäche, Morbus Paget, früherer Skelettbestrahlung, Knochenkrebs, offenen Wachstumsfugen, in Schwangerschaft und Stillzeit.',
      'Keine Daten für Gesunde ohne Osteoporose; tägliche Spritze, verschreibungspflichtig.'
    ],
    status: 'EU/DE: seit 10.06.2003 als Forsteo zugelassen, dazu Biosimilars (z. B. Movymia seit 11.01.2017, Terrosa, Livogiva); Anwendungsgebiete Osteoporose bei Frauen nach den Wechseljahren und bei Männern mit hohem Bruchrisiko sowie Osteoporose durch langfristige Kortisontherapie; verschreibungspflichtig. Laut Fachinformation 20 Mikrogramm einmal täglich unter die Haut, insgesamt höchstens 24 Monate und nicht wiederholen (Fachinfo-Angabe, keine Anwendungsempfehlung). USA: als Forteo zugelassen; 2020 Streichung des Warnhinweises im schwarzen Kasten zu Osteosarkomen, Anwendung über 2 Jahre nur bei weiter hohem Bruchrisiko. Anwendung zur Bruch- oder Sehnenheilung ist Off-Label. In der deutschen Übersetzung der WADA-Liste 2026 nicht namentlich aufgeführt.',
    sources: [
      { title: 'Neer et al. 2001, NEJM – Zulassungsstudie: neue Wirbelbrüche 5 gegenüber 14 Prozent, 1637 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/11346808/' },
      { title: 'Kendler et al. 2018, Lancet – VERO: Teriparatid gegen Risedronat, 1360 Frauen, 24 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/29129436/' },
      { title: 'Saag et al. 2007, NEJM – Kortison-bedingte Osteoporose, Teriparatid gegen Alendronat, 428 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/18003959/' },
      { title: 'Orwoll et al. 2003, J Bone Miner Res – Knochendichte bei 437 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/12510800/' },
      { title: 'Aspenberg et al. 2010, J Bone Miner Res – Speichenbruch, primärer Endpunkt verfehlt', url: 'https://pubmed.ncbi.nlm.nih.gov/19594305/' },
      { title: 'Bhandari et al. 2016, Clin Orthop Relat Res – Schenkelhalsbruch, kein Vorteil', url: 'https://pubmed.ncbi.nlm.nih.gov/26932738/' },
      { title: 'Shi et al. 2016, PLoS One – Meta-Analyse zur Frakturheilung, 5 RCTs', url: 'https://pubmed.ncbi.nlm.nih.gov/27997614/' },
      { title: 'Guity et al. 2025, JB JS Open Access – Rotatorenmanschette, kein Vorteil gegenüber Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/40978001/' },
      { title: 'Gilsenan et al. 2021, J Bone Miner Res – 15 Jahre US-Osteosarkom-Überwachung', url: 'https://pubmed.ncbi.nlm.nih.gov/32990990/' },
      { title: 'EMA – Forsteo, Fachinformation (deutsch)', url: 'https://www.ema.europa.eu/de/documents/product-information/forsteo-epar-product-information_de.pdf' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'acth',
    name: 'ACTH (Corticotropin)',
    altNames: 'Adrenocorticotropes Hormon, Corticotropin, Kortikotropin, Tetracosactid, Synacthen, Synacthen Depot, Acthar Gel, Purified Cortrophin Gel',
    class: 'Peptidhormon der Hypophyse (Melanocortin), zugelassen als Diagnostikum und bei West-Syndrom, verschreibungspflichtig',
    emoji: '🧪',
    short: 'Das Hypophysenhormon, das die Nebenniere zur Cortisolbildung anregt – als Arzneimittel seit Jahrzehnten bewährt für den ACTH-Test, bei infantilen Spasmen und bei MS-Schüben. Für Leistung oder Wohlbefinden bei Gesunden fehlen Belege, im Sport ist es jederzeit verboten, und die Risiken entsprechen einer Kortisontherapie.',
    moa: 'ACTH ist ein Peptid aus 39 Aminosäuren, das in der Hypophyse aus dem Vorläufer POMC entsteht, von CRH aus dem Hypothalamus angestoßen und von Cortisol gebremst wird. Es bindet an einen spezifischen Rezeptor der Nebennierenrindenzellen und steigert über cAMP die Bildung von Pregnenolon aus Cholesterin und daraus von Cortisol, Aldosteron und in geringerem Maß Androgenen. Tetracosactid (Synacthen) umfasst die ersten 24 Aminosäuren und wirkt genauso; seine Plasma-Halbwertszeiten liegen bei rund 7 Minuten, dann etwa 37 Minuten und terminal ungefähr 3 Stunden. Der Cortisolanstieg 30 Minuten nach Injektion dient als Test der Nebennierenfunktion. Zusätzlich bindet ACTH an Melanocortin-Rezeptoren auf Immunzellen, was eine steroidunabhängige Entzündungshemmung nahelegt (Übersicht 2015), am Menschen aber nicht als eigener Nutzen belegt ist.',
    benefits: [
      'Diagnostik: ACTH-Test bestätigt eine sekundäre Nebenniereninsuffizienz zuverlässig, schließt sie aber nicht sicher aus; bei primärer Insuffizienz Sensitivität 92 % (Meta-Analyse, 30 Studien mit 1.209 Erwachsenen bzw. 5 Studien mit 100 Patienten, Ospina 2016)',
      'Infantile Spasmen: Hormontherapie beendet Anfälle häufiger als Vigabatrin, 73 % gegenüber 54 %, Tetracosactid-Arm 76 % (RCT UKISS, 107 Säuglinge, Lancet 2004); Cochrane 2013 bestätigt die Richtung',
      'Hochdosiertes ACTH besser als niedrig dosiertes Prednison: 13 von 15 gegenüber 4 von 14 Säuglingen (RCT, 29 Säuglinge, Baram 1996); gegenüber hochdosiertem Prednisolon kein Unterschied (Meta-Analyse, 5 RCTs, 239 Kinder, 2019)',
      'MS-Schub: ACTH oder Methylprednisolon senken das Risiko einer Verschlechterung in den ersten 5 Wochen, OR 0,37 (Cochrane 2000, 6 RCTs, 377 Teilnehmer, davon 237 in ACTH-Studien); kein Beleg für Einfluss auf den Langzeitverlauf',
      'Lange Erfahrung: in den USA seit 1952 zugelassen (Acthar), Synacthen in Deutschland seit 1965'
    ],
    risks: [
      'Nebenwirkungen wie bei Kortisontherapie: Infekte, Hyperglykämie, Bluthochdruck, Wassereinlagerung, Hypokaliämie, Osteoporose, Muskelschwäche, Katarakt und Glaukom, Magengeschwüre, Wachstumsstörungen bei Kindern',
      'Überempfindlichkeitsreaktionen bis zum anaphylaktischen Schock, vor allem bei Allergikern und Asthmatikern, meist innerhalb von 30 Minuten; Gabe nur unter ärztlicher Überwachung',
      'Psychische Veränderungen von Euphorie und Schlaflosigkeit bis zu Depression und Psychose',
      'Unterdrückung der eigenen Stressachse bei längerer Gabe, mit Nebennierenschwäche nach dem Absetzen (FDA-Fachinformation Acthar)',
      'Kein Leistungsgewinn belegt: 8 trainierte Radfahrer fuhren unter Synacthen nicht schneller (placebokontrolliert, 2008); Doping nach WADA S2.2.2 jederzeit verboten'
    ],
    status: 'Deutschland: Tetracosactid (Synacthen) seit 1965 zugelassen, verschreibungspflichtig; Anwendungsgebiete Diagnostik der Nebennierenrinden-Unterfunktion und West-Syndrom, daneben Synacthen Depot. USA: Acthar Gel (seit 1952) und Purified Cortrophin Gel, u. a. bei infantilen Spasmen und MS-Schüben. Nutzung zur Leistungssteigerung oder als Anti-Aging-Mittel ist Off-Label und nicht belegt. Doping: WADA-Liste 2026 S2.2.2 (Corticotropine), jederzeit verboten; Corticotropin und Tetracosactid stehen in der Anlage des Anti-Doping-Gesetzes (§ 2 AntiDopG).',
    sources: [
      { title: 'Fachinformation Synacthen (Rote Liste, Stand 02.2021) – Zulassung, Anwendungsgebiete, Nebenwirkungen', url: 'https://www.fachinfo.de/fi/detail/022624/synacthen' },
      { title: 'FDA-Fachinformation Acthar Gel (DailyMed) – Indikationen, Zulassung 1952, Studien bei infantilen Spasmen', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=7b48ddec-e815-45f4-9ca0-5c0daaf56f30' },
      { title: 'Lux et al. 2004, Lancet – UKISS: Hormone gegen Vigabatrin, 73 % gegenüber 54 %', url: 'https://pubmed.ncbi.nlm.nih.gov/15541450/' },
      { title: 'Baram et al. 1996, Pediatrics – hochdosiertes ACTH gegen Prednison bei infantilen Spasmen', url: 'https://pubmed.ncbi.nlm.nih.gov/8604274/' },
      { title: 'Chang et al. 2019, Ann Clin Transl Neurol – Meta-Analyse: Prednisolon nicht unterlegen', url: 'https://pubmed.ncbi.nlm.nih.gov/31657133/' },
      { title: 'Filippini et al. 2000, Cochrane – Kortikosteroide oder ACTH beim MS-Schub', url: 'https://pubmed.ncbi.nlm.nih.gov/11034713/' },
      { title: 'Ospina et al. 2016, J Clin Endocrinol Metab – Meta-Analyse ACTH-Stimulationstest', url: 'https://pubmed.ncbi.nlm.nih.gov/26649617/' },
      { title: 'Baume et al. 2008, Eur J Appl Physiol – Synacthen ohne Leistungseffekt bei Radfahrern', url: 'https://pubmed.ncbi.nlm.nih.gov/18584198/' },
      { title: 'Hartung et al. 2018, JAMA Netw Open – Herstellerzahlungen und Acthar-Verordnungen', url: 'https://pubmed.ncbi.nlm.nih.gov/30646086/' },
      { title: 'Montero-Melendez 2015, Semin Immunol – ACTH: The forgotten therapy (Melanocortin-Rezeptoren)', url: 'https://pubmed.ncbi.nlm.nih.gov/25726511/' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'anabole-steroide',
    name: 'Anabole Steroide (Anabolika, AAS)',
    altNames: 'Anabol-androgene Steroide, AAS, Anabolika, Steroide, Roids, Testosteronderivate, Trenbolon, Stanozolol, Metandienon, Oxandrolon, Oxymetholon',
    class: 'Warnung: Anabol-androgene Steroide, Doping- und Gesundheitsrisiko',
    emoji: '⚠️',
    short: 'Anabol-androgene Steroide sind Testosteron und seine künstlichen Abkömmlinge; sie bauen Muskelmasse und Kraft nachweislich auf, mit Training deutlich stärker. Außerhalb einer ärztlichen Therapie ist die Anwendung mit einem 2,81-fach erhöhten Sterberisiko, schweren Herzschäden und einer abgeschalteten eigenen Hormonproduktion verbunden, die sich bei einem Teil der Männer auch Jahre später nicht vollständig erholt.',
    moa: 'AAS binden an den Androgenrezeptor in Muskel, Knochen, Knochenmark, Haut, Leber und Gehirn und steigern dort Eiweißaufbau und Blutbildung. Anabole (aufbauende) und androgene (vermännlichende) Wirkung lassen sich chemisch nicht vollständig trennen. Hypothalamus und Hypophyse registrieren den hohen Hormonspiegel und drosseln LH und FSH, dadurch fallen die eigene Testosteronproduktion und die Spermienbildung ab. Nach dem Aufhören erholen sich die steuernden Hormone meist innerhalb eines Jahres, bei einem Teil der Anwender bleibt ein Mangel. Medizinisch genutzt werden einzelne Wirkstoffe gezielt: siehe die Einträge Testosteron und Nandrolon.',
    benefits: [
      'Warum Menschen es nehmen: supraphysiologisches Testosteron steigerte in 10 Wochen Muskelquerschnitt und Kraft, mit Training +6,1 kg fettfreie Masse (RCT, 43 gesunde Männer, Bhasin, NEJM 1996)',
      'In der prospektiven HAARLEM-Studie gaben 100 % der 100 Männer während der Anwendung mehr Kraft an (Smit 2021)',
      'Legitime Medizin: Testosteron bei ärztlich eindeutig nachgewiesenem Mangel (Leitlinie der Endocrine Society 2018, siehe Eintrag Testosteron); Nandrolon in einigen EU-Ländern bei Osteoporose und renaler Blutarmut (siehe Eintrag Nandrolon)',
      'Verbreitung: weltweit 3,3 % Lebenszeitprävalenz, Männer 6,4 %, Frauen 1,6 % (Meta-Analyse aus 187 Studien, Sagoe 2014) – überwiegend Freizeitsportler, nicht Leistungssportler'
    ],
    risks: [
      'Sterblichkeit: dänische Registerkohorte, 1189 Anwender gegen 59450 Kontrollen, 11,2 Jahre: 33 gegenüber 578 Todesfälle, HR 2,81; unnatürliche Todesfälle HR 3,64, natürliche HR 2,24 (Windfeld-Mathiasen, JAMA 2024); finnische Powerlifter: 12,9 % gegenüber 3,1 % in 12 Jahren (Pärssinen 2000)',
      'Herz: Kardiomyopathie aHR 8,90, Herzinsuffizienz 3,63, Herzinfarkt 3,00, Thrombosen 2,42, Rhythmusstörungen 2,26 (Windfeld-Mathiasen, Circulation 2025); Auswurffraktion 52 gegenüber 63 % bei Langzeitanwendern (Baggish 2017)',
      'Hormonachse und Fruchtbarkeit: Abschaltung der eigenen Produktion; 27,2 % der früheren Anwender im Mittel 2,5 Jahre nach dem Aufhören unter dem Testosteron-Referenzwert, dazu mehr Libidoverlust, Erektionsstörungen und depressive Symptome (Rasmussen 2016)',
      'HAARLEM, 100 Männer: jeder mindestens eine negative Wirkung, 4 schwere Ereignisse (u. a. Herzinsuffizienz, Suizidgedanken); Wassereinlagerung 56 %, Libidoverlust danach 58 %, Akne 28 %, Brustdrüsenwachstum 19 % (Smit 2021)',
      'Abhängigkeit: in den USA schätzungsweise etwa 1 Million Betroffene unter 2,9 bis 4,0 Millionen Anwendern (Pope 2014); Leber: Gallenstauung, Peliosis hepatis und Lebertumoren beschrieben (Petrovic 2022); Frauen: teils bleibende Vermännlichung',
      'Schwarzmarkt: 36 % der Proben gefälscht, weitere 37 % mangelhaft (Meta-Analyse, 19 Studien, 5413 Proben, Magnolini 2022)'
    ],
    status: 'Keine Nahrungsergänzung, kein legaler Bezug ohne Rezept. Einzelne Wirkstoffe (z. B. Testosteron) sind verschreibungspflichtige Arzneimittel für klar definierte Indikationen. Anti-Doping-Gesetz: Herstellung, Handel, Abgabe und Verschreibung zu Dopingzwecken verboten (§ 2 Abs. 1), Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport verboten (§ 2 Abs. 3, Grenzmengen in der Dopingmittel-Mengen-Verordnung 2023); Strafrahmen bis zu 3 Jahren, in schweren Fällen (u. a. Abgabe an Minderjährige, bandenmäßig) 1 bis 10 Jahre (§ 4); Selbstdoping strafbar für Spitzensportler im Testpool und Sportler mit erheblichen Einnahmen (§ 3, § 4 Abs. 7). WADA-Verbotsliste 2026: S1.1, jederzeit verboten.',
    sources: [
      { title: 'Windfeld-Mathiasen et al. 2024, JAMA – Sterblichkeit: HR 2,81 bei 1189 Anwendern gegenüber 59450 Kontrollen', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10941020/' },
      { title: 'Windfeld-Mathiasen et al. 2025, Circulation – Kardiomyopathie aHR 8,90, Herzinfarkt aHR 3,00', url: 'https://pubmed.ncbi.nlm.nih.gov/39945117/' },
      { title: 'Bhasin et al. 1996, N Engl J Med – RCT: supraphysiologisches Testosteron steigert Muskelmasse und Kraft', url: 'https://pubmed.ncbi.nlm.nih.gov/8637535/' },
      { title: 'Baggish et al. 2017, Circulation – geringere Pumpfunktion und mehr Koronarplaque bei Langzeitanwendern', url: 'https://pubmed.ncbi.nlm.nih.gov/28533317/' },
      { title: 'Rasmussen et al. 2016, PLoS One – niedriges Testosteron und Mangelsymptome Jahre nach dem Aufhören', url: 'https://pubmed.ncbi.nlm.nih.gov/27532478/' },
      { title: 'Smit et al. 2021, Scand J Med Sci Sports – HAARLEM: positive und negative Wirkungen, 100 Männer, 1 Jahr', url: 'https://pubmed.ncbi.nlm.nih.gov/33038020/' },
      { title: 'Pärssinen et al. 2000, Int J Sports Med – vorzeitige Sterblichkeit finnischer Powerlifter', url: 'https://pubmed.ncbi.nlm.nih.gov/10834358/' },
      { title: 'Sagoe et al. 2014, Ann Epidemiol – weltweite Lebenszeitprävalenz 3,3 %, Meta-Analyse', url: 'https://pubmed.ncbi.nlm.nih.gov/24582699/' },
      { title: 'Magnolini et al. 2022, BMC Public Health – gefälschte und mangelhafte Anabolika auf dem Schwarzmarkt', url: 'https://pubmed.ncbi.nlm.nih.gov/35842594/' },
      { title: 'Pope et al. 2014, Endocr Rev – Endocrine Society: gesundheitliche Folgen leistungssteigernder Mittel', url: 'https://pubmed.ncbi.nlm.nih.gov/24423981/' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 bis § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/BJNR221010015.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'benfotiamin',
    name: 'Benfotiamin',
    altNames: 'Benfothiamine, S-Benzoylthiamin-O-monophosphat, Allithiamin, fettlösliches Vitamin B1, milgamma protekt, Benfogamma',
    class: 'Fettlösliche Vitamin-B1-Vorstufe (Allithiamin); in Deutschland apothekenpflichtiges Arzneimittel, als Nahrungsergänzung nicht zugelassen',
    emoji: '🧬',
    short: 'Fettlösliche Vorstufe von Vitamin B1, die die Thiaminspiegel im Blut viel stärker hebt als normales Thiamin und in kurzen Studien Beschwerden der diabetischen Polyneuropathie linderte, vor allem Schmerz. In den Studien über 12 und 24 Monate änderte sich die messbare Nervenfunktion nicht, der Schutz vor Glykation ist nur im Tier belegt.',
    moa: 'Benfotiamin wird nach der Aufnahme zu Thiamin umgebaut und erreicht im Plasma eine weit höhere Bioverfügbarkeit als Thiaminhydrochlorid (1147,3 %, in Erythrozyten 195,8 % für Thiamindiphosphat; Xie 2014). Thiamindiphosphat ist Cofaktor der Transketolase im Pentosephosphatweg. Bei diabetischen Tieren aktivierte Benfotiamin die Transketolase, lenkte angestaute Glykolyse-Zwischenprodukte um und blockierte so Hexosamin-Weg, AGE-Bildung, DAG-PKC-Weg und NF-kappaB; die experimentelle Retinopathie blieb aus (Hammes 2003). Am Menschen ist der Anstieg von Thiamin und seinen Phosphaten gut belegt, eine Senkung von AGEs oder Entzündungsmarkern aber in einer placebokontrollierten Studie über 12 Wochen nicht (Alkhalaf 2012).',
    benefits: [
      'Diabetische Polyneuropathie: Neuropathie-Symptom-Score nach 6 Wochen besser, per Protokoll p = 0,033, nach ITT p = 0,055; stärkster Effekt bei Schmerz (Phase-III-RCT BENDIP, 133 Ausgewertete, 300 oder 600 mg, Stracke 2008)',
      'Pilotstudie BEDIP: Neuropathie-Score p = 0,0287 und Schmerz p = 0,0414 besser als Placebo (RCT, 40 Patienten, 3 Wochen, Haupt 2005)',
      'Alkoholbedingte Polyneuropathie: Vibrationsempfinden und Motorik besser (RCT, 84 Patienten, 8 Wochen, Woelk 1998)',
      'Frühe Alzheimer-Krankheit: CDR-Verschlechterung 77 % geringer (p = 0,034), primärer Endpunkt ADAS-Cog verfehlt (p = 0,125) (Phase-IIa-RCT, 70 Teilnehmende, 12 Monate, Gibson 2020); Folgestudie mit 406 Teilnehmenden läuft',
      'Hebt Thiamin und Thiamindiphosphat im Blut zuverlässig an, bestätigt in RCTs über 12 und 24 Monate (BOND 2026, Fraser 2012)'
    ],
    risks: [
      'Lange Studien ohne Effekt auf die Nervenfunktion: BOND (57 Teilnehmende, 12 Monate) verfehlte den primären Endpunkt, Fraser (67 Teilnehmende, 24 Monate) ebenso',
      'Kein belegter Glykationsschutz am Menschen: keine Senkung von AGEs, Albuminausscheidung oder Entzündungsmarkern (RCT, 82 Patienten, 12 Wochen, Alkhalaf 2010/2012)',
      'Selten Überempfindlichkeitsreaktionen (Nesselsucht, Hautausschlag) und Magen-Darm-Beschwerden (Fachtext milgamma protekt); in Phase I häufigster Befund leicht erhöhte ALT, Häufigkeit wie Placebo',
      'EFSA 2008: toxikologische Daten zu Fortpflanzung, Erbgut und Langzeitwirkung unzureichend; keine Daten zu Schwangerschaft und Stillzeit',
      'Ersetzt nicht die Abklärung von Nervenbeschwerden und keine Blutzuckereinstellung'
    ],
    status: 'Deutschland: zugelassenes, apothekenpflichtiges und nicht verschreibungspflichtiges Arzneimittel (z. B. milgamma protekt 300 mg) gegen Vitamin-B1-Mangel und dadurch bedingte Neuropathien. EU: keine zugelassene Vitamin-B1-Form für Nahrungsergänzungsmittel (Anhang II RL 2002/46/EG nennt nur Thiaminhydrochlorid und Thiaminmononitrat); EFSA konnte 2008 die Sicherheit nicht bestätigen; das OVG Niedersachsen bestätigte am 11.11.2020 (13 ME 400/20) ein Verkaufsverbot für ein Benfotiamin-NEM. Doping: nicht auf der WADA-Liste 2026.',
    sources: [
      { title: 'Ziegler et al. 2026, BMJ Open Diabetes Res Care – BOND: 12 Monate ohne Effekt auf Nervenstruktur und -funktion', url: 'https://pubmed.ncbi.nlm.nih.gov/41571333/' },
      { title: 'Stracke et al. 2008, Exp Clin Endocrinol Diabetes – BENDIP: Symptome nach 6 Wochen besser', url: 'https://pubmed.ncbi.nlm.nih.gov/18473286/' },
      { title: 'Fraser et al. 2012, Diabetes Care – 24 Monate bei Typ-1-Diabetes ohne Effekt auf Nervenfunktion', url: 'https://pubmed.ncbi.nlm.nih.gov/22446172/' },
      { title: 'Gibson et al. 2020, J Alzheimers Dis – Phase IIa bei MCI und leichter Alzheimer-Demenz', url: 'https://pubmed.ncbi.nlm.nih.gov/33074237/' },
      { title: 'Hammes et al. 2003, Nat Med – Transketolase-Aktivierung blockiert drei Schadenswege im Tier', url: 'https://pubmed.ncbi.nlm.nih.gov/12592403/' },
      { title: 'Alkhalaf et al. 2012, PLoS One – keine Senkung von AGEs und Entzündungsmarkern', url: 'https://pubmed.ncbi.nlm.nih.gov/22792314/' },
      { title: 'Xie et al. 2014, J Clin Pharmacol – Bioverfügbarkeit im Vergleich zu Thiaminhydrochlorid', url: 'https://pubmed.ncbi.nlm.nih.gov/24399744/' },
      { title: 'EFSA 2008 – Sicherheit von Benfotiamin als Vitamin-B1-Quelle nicht belegt', url: 'https://www.efsa.europa.eu/en/efsajournal/pub/864' }
    ],
    community: [
      { title: 'biolabshop (Suche „Benfotiamin")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'cbd',
    name: 'CBD (Cannabidiol)',
    altNames: 'Cannabidiol, CBD-Öl, Hanfextrakt, Vollspektrum-CBD, CBD-Isolat, Epidyolex, Epidiolex',
    class: 'Nicht berauschendes Cannabinoid aus Hanf; in Deutschland verschreibungspflichtiger Arzneistoff, als Lebensmittel nicht zugelassenes Novel Food',
    emoji: '🌿',
    short: 'Nicht berauschender Hanfwirkstoff, der in drei großen RCTs Anfälle bei Dravet- und Lennox-Gastaut-Syndrom deutlich senkte und dafür als Epidyolex zugelassen ist; bei Angst zeigen kleine Studien und eine Meta-Analyse einen Vorteil. Für Schlaf und Schmerz ist die Lage dünn oder gemischt, dazu kommen Leberwert-Anstiege und schwankende Produktqualität.',
    moa: 'CBD aktiviert die klassischen Cannabinoid-Rezeptoren nicht, sondern wirkt an mehreren Zielen (Fachinformation Epidyolex). Gegen Anfälle werden die Modulation von GPR55 und TRPV-1 sowie eine Verstärkung der Adenosin-Signale über die Hemmung des Transporters ENT-1 angenommen; der genaue Mechanismus beim Menschen ist laut EMA unbekannt. CBD hemmt moderat den Abbau des körpereigenen Cannabinoids Anandamid; in einer RCT bei Schizophrenie stieg das Anandamid im Serum und hing mit der Besserung zusammen (Leweke 2012). Die Aufnahme über den Mund schwankt stark und steigt mit einer Mahlzeit; nach wiederholter Einnahme liegt die Halbwertszeit bei 2 bis 5 Tagen (Millar 2018).',
    benefits: [
      'Dravet-Syndrom: konvulsive Anfälle im Median von 12,4 auf 5,9 pro Monat, unter Placebo von 14,9 auf 14,1 (RCT, 120 Patienten, 14 Wochen, Devinsky 2017)',
      'Lennox-Gastaut-Syndrom: Sturzanfälle −43,9 % vs. −21,8 % (171 Patienten, Thiele 2018) und −41,9 % vs. −17,2 % (225 Patienten, Devinsky 2018); EU-Zulassung als Epidyolex 2019',
      'Angst: Hedges g = −0,92 mit breitem Konfidenzintervall (Meta-Analyse, 8 Studien, 316 Teilnehmende, Han 2024); weniger Angst im Vortragstest bei 24 Parkinson-Patienten (Crossover-RCT, de Faria 2020)',
      'Neuropathischer Schmerz nach Rückenmarksverletzung: −0,54 Punkte auf der 0-bis-10-Skala gegenüber Placebo (Crossover-RCT, 38 Ausgewertete, 6 Wochen, Robertson 2026)',
      'Nicht berauschend; auf der WADA-Liste 2026 ausdrücklich erlaubt'
    ],
    risks: [
      'Leber: Werte über dem 3-Fachen der Norm bei 12 % in den Zulassungsstudien, bis 23 % mit Valproat plus Clobazam (Fachinformation); bei 201 Gesunden 5,6 % vs. 0 % unter Placebo nach 28 Tagen (Florian 2025)',
      'Wechselwirkungen über CYP2C19 und CYP3A4: N-Desmethylclobazam 3- bis 4-fach erhöht; Valproat steigert das Leberrisiko',
      'Häufig Schläfrigkeit, Appetitminderung, Durchfall, Müdigkeit; EFSA 2026: keine gesicherte Sicherheit für unter 25-Jährige, Schwangere, Stillende und Menschen mit Medikamenten',
      'Produktqualität: THC in 20 von 26 Ölen, bei der Hälfte würde die Herstellerdosis die akute Referenzdosis für THC überschreiten (BfR 2024); Dopingrisiko durch THC',
      'Kein Nutzen bei Fibromyalgie (200 Patienten, 24 Wochen, Placebo 0,7 Punkte besser) und als Zusatz zur Expositionstherapie bei Angststörungen (80 Patienten)'
    ],
    status: 'EU: Novel Food ohne Zulassung, bisher kein CBD-Lebensmittel zugelassen; EFSA konnte die Sicherheit 2022 und 2026 nicht feststellen und nennt 2026 vorläufig etwa 2 mg pro Tag für 70 kg als sicher (nur gereinigte Präparate, nicht für unter 25-Jährige, Schwangere, Stillende, Menschen mit Medikamenten). Deutschland: laut BVL als Lebensmittel und Nahrungsergänzung nicht verkehrsfähig; Cannabidiol in Anlage 1 der AMVV, also verschreibungspflichtig; zugelassen ist Epidyolex (EU seit 19.09.2019) bei Lennox-Gastaut- und Dravet-Syndrom mit Clobazam ab 2 Jahren sowie bei tuberöser Sklerose. Kein Betäubungsmittel (EuGH C-663/18, 2020). USA: Epidiolex zugelassen, CBD von der Definition Nahrungsergänzung ausgeschlossen. Doping: CBD auf der WADA-Liste 2026 ausgenommen, alle anderen Cannabinoide im Wettkampf verboten; NADA rät wegen THC-Verunreinigung von CBD-Produkten ab.',
    sources: [
      { title: 'Devinsky et al. 2017, N Engl J Med – Dravet-Syndrom: weniger konvulsive Anfälle', url: 'https://pubmed.ncbi.nlm.nih.gov/28538134/' },
      { title: 'Thiele et al. 2018, Lancet – Lennox-Gastaut-Syndrom: weniger Sturzanfälle', url: 'https://pubmed.ncbi.nlm.nih.gov/29395273/' },
      { title: 'Devinsky et al. 2018, N Engl J Med – Lennox-Gastaut-Syndrom: weniger Sturzanfälle (225 Patienten)', url: 'https://pubmed.ncbi.nlm.nih.gov/29768152/' },
      { title: 'Florian et al. 2025, JAMA Intern Med – Leberwert-Anstiege bei Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/40622698/' },
      { title: 'Han et al. 2024, Psychiatry Res – Meta-Analyse zu Angststörungen', url: 'https://pubmed.ncbi.nlm.nih.gov/38924898/' },
      { title: 'Rasmussen et al. 2026, Ann Rheum Dis – Fibromyalgie: kein Vorteil gegenüber Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/40846590/' },
      { title: 'Leweke et al. 2012, Transl Psychiatry – CBD erhöht Anandamid im Serum', url: 'https://pubmed.ncbi.nlm.nih.gov/22832859/' },
      { title: 'EFSA NDA Panel 2026, EFSA J – Update: vorläufige sichere Dosis und Datenlücken', url: 'https://pubmed.ncbi.nlm.nih.gov/41668771/' },
      { title: 'BfR 2024 – Cannabinoide und THC in CBD-Ölen', url: 'https://www.bfr.bund.de/cm/343/cannabinoide-in-cbd-oelen-wieviel-ist-enthalten.pdf' },
      { title: 'BVL – CBD in Nahrungsergänzungsmitteln nicht verkehrsfähig', url: 'https://www.bvl.bund.de/SharedDocs/FAQ/DE/02_Unternehmer/01_Lebensmittel/03_FAQ_Hanf_THC_CBD/00_FAQ_Cannabidiol_CBD.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'clenbuterol',
    name: 'Clenbuterol',
    altNames: 'Clen, Clenbuterolhydrochlorid, Spiropent (Asthma-Tablette DE), Ventipulmin (Tierarzneimittel Pferd), Beta-2-Agonist',
    class: 'Warnung: Beta-2-Agonist (Asthma- und Tierarzneimittel), als Fatburner missbraucht, Doping- und Herzrisiko',
    emoji: '⚠️',
    short: 'Clenbuterol ist ein lang wirksamer Beta-2-Agonist, in Deutschland als verschreibungspflichtiges Asthma-Medikament zugelassen und in der Szene als Fatburner und Muskelaufbauhilfe genutzt; in einer randomisierten Studie an gesunden Männern brachte es 0,91 kg Magermasse, aber keinen Fettabbau. Das Hauptrisiko ist das Herz: Herzrasen, Rhythmusstörungen, niedriges Kalium bis zu Herzinfarkt und Herzstillstand, laut Fachinformation auch tödliche Verläufe bei Missbrauch.',
    moa: 'Clenbuterol aktiviert Beta-2-Adrenozeptoren in Bronchien, Gefäßen, Herz, Skelettmuskel und Fettgewebe und erhöht über die Adenylatcyclase das cAMP. In den Bronchien erschlafft die glatte Muskulatur, darauf beruht die Asthma-Zulassung. Im Skelettmuskel aktiviert es beim Menschen die Proteinkinase A und steigert den Eiweißgehalt, die Signalwirkung lässt aber schon innerhalb von 2 Wochen nach (Hostrup 2025). Bei Nutztieren verschiebt es den Ansatz von Fett zu Muskel, daher der Ruf als Umverteiler (Mersmann 1998). Am Herzen steigen Frequenz und Kontraktionskraft, der Kaliumspiegel im Blut sinkt; die Halbwertszeit liegt bei 34 Stunden.',
    benefits: [
      'Warum Menschen es nehmen: in der Szene als Fatburner für die Definitionsphase und zum Abnehmen; beim Giftnotruf New South Wales waren Bodybuilding und Abnehmen die häufigsten Gründe (Brett 2014)',
      'Magermasse +0,91 kg in 2 Wochen gegenüber Placebo, Fettmasse unverändert (RCT, Crossover, 11 gesunde Männer, Hostrup, J Physiol 2025)',
      'Bei Übergewicht 4 Wochen: insulinabhängige Zuckeraufnahme im hinteren Oberschenkelmuskel +13 %, Gewicht und Fettmasse unverändert (RCT, 14 Personen, Van Lier, Nat Commun 2026)',
      'Legitime Medizin: in Deutschland seit 1988 als verschreibungspflichtige Asthma-Tablette zugelassen (Spiropent); EU-Tiermedizin nur bei Pferden (Atemwege) und zur Wehenhemmung bei Kühen (RL 96/22/EG)'
    ],
    risks: [
      'Kein Humanbeleg für Fettabbau – und schlechtere Ausdauer: maximale Sauerstoffaufnahme −7 %, Belastungskapazität −4 % (Hostrup 2025); bei Herzinsuffizienz sank die Ausdauer (Kamalakkannan 2008)',
      'Herz: Herzrasen, Rhythmusstörungen, Myokardischämie laut Fachinformation, Herzinfarkt bei einem jungen Bodybuilder (Aggarwal 2025), Herzstillstand bei einem 21-Jährigen (Brett 2014); Fachinformation: tödliche Verläufe bei missbräuchlicher Überdosierung',
      'Giftnotruf New South Wales 2004 bis 2012: 63 Expositionen, mindestens 84 % stationär, am häufigsten Herzrasen, Magen-Darm-Beschwerden, Zittern (Brett 2014)',
      'Stoffwechselentgleisung: Kalium im Median 2,5 mEq/L, Laktat 9,4 mmol/L in einer Fallserie mit gestrecktem Heroin (Hieger 2016)',
      'Lebensmittel: 113 Vergiftungsfälle nach Kalbsleber in Katalonien 1992 (Salleras 1995); U-17-WM Mexiko 2011: 109 von 208 Urinproben positiv durch belastetes Fleisch (Thevis 2013)',
      'Gegenanzeigen laut Fachinformation: schwere Schilddrüsenüberfunktion, tachykarde Rhythmusstörungen, hypertrophe obstruktive Kardiomyopathie; lange Halbwertszeit von 34 Stunden'
    ],
    status: 'Deutschland: verschreibungspflichtiges Arzneimittel, zugelassen seit 11.11.1988 für Asthma und chronisch obstruktive Bronchitis (Spiropent); keine Nahrungsergänzung. Namentlich in der Anlage des Anti-Doping-Gesetzes (I.2 Andere anabole Stoffe): Handel und Abgabe zu Dopingzwecken verboten, Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport verboten (§ 2 Abs. 3, Grenzmenge in der Dopingmittel-Mengen-Verordnung 2023), Strafrahmen bis zu 3 Jahren, schwere Fälle 1 bis 10 Jahre (§ 4). EU: als Mastmittel verboten, tiermedizinisch nur bei Pferden und zur Wehenhemmung bei Kühen (RL 96/22/EG). USA: für Menschen nicht zugelassen. WADA-Verbotsliste 2026: S1.2, jederzeit verboten.',
    sources: [
      { title: 'Hostrup et al. 2025, J Physiol – RCT an gesunden Männern: +0,91 kg Magermasse, kein Effekt auf Fettmasse, VO2max −7 %', url: 'https://pubmed.ncbi.nlm.nih.gov/40946331/' },
      { title: 'Van Lier et al. 2026, Nat Commun – Übergewicht: Zuckeraufnahme im Muskel höher, Gewicht und Fettmasse unverändert', url: 'https://pubmed.ncbi.nlm.nih.gov/42014715/' },
      { title: 'Kamalakkannan et al. 2008, J Heart Lung Transplant – Herzinsuffizienz: mehr Magermasse, weniger Ausdauer', url: 'https://pubmed.ncbi.nlm.nih.gov/18374884/' },
      { title: 'Brett et al. 2014, Med J Aust – Giftinformationszentrum New South Wales: 63 Expositionen, 84 % stationär', url: 'https://pubmed.ncbi.nlm.nih.gov/24580525/' },
      { title: 'Hieger et al. 2016, J Emerg Med – Clenbuterol-gestrecktes Heroin: Hypokaliämie, Laktatazidose', url: 'https://pubmed.ncbi.nlm.nih.gov/27431866/' },
      { title: 'Salleras et al. 1995, Public Health Rep – 113 Vergiftungsfälle durch Kalbsleber in Katalonien', url: 'https://pubmed.ncbi.nlm.nih.gov/7610227/' },
      { title: 'Thevis et al. 2013, Drug Test Anal – U-17-WM Mexiko: 109 von 208 Proben positiv durch Fleisch', url: 'https://pubmed.ncbi.nlm.nih.gov/23559541/' },
      { title: 'Aggarwal et al. 2025, BMJ Case Rep – Herzinfarkt bei einem jungen Bodybuilder', url: 'https://pubmed.ncbi.nlm.nih.gov/40032559/' },
      { title: 'Mersmann 1998, J Anim Sci – Beta-Agonisten: mehr Muskel, weniger Fett bei Nutztieren', url: 'https://pubmed.ncbi.nlm.nih.gov/9464897/' },
      { title: 'Richtlinie 96/22/EG, Art. 4 – Beta-Agonisten in der Tierhaltung', url: 'https://www.legislation.gov.uk/eudr/1996/22/article/4' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 bis § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/BJNR221010015.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'dnp',
    name: 'DNP (2,4-Dinitrophenol)',
    altNames: '2,4-Dinitrophenol, DNP, 2,4-DNP, Fatburner DNP',
    class: 'Warnung: Industriechemikalie und Mitochondrien-Entkoppler, als Fettverbrenner missbraucht, lebensgefährlich',
    emoji: '⚠️',
    short: 'DNP ist eine Industriechemikalie, die die Energiegewinnung in den Mitochondrien entkoppelt und so Fett verbrennt, indem sie Energie als Wärme freisetzt. Das Hauptrisiko ist eine nicht mehr steuerbare Überhitzung: In Giftnotruf-Auswertungen endeten 11,6 bis 17 Prozent der gemeldeten Vergiftungen tödlich, eine sichere Menge und ein Gegenmittel gibt es nicht.',
    moa: 'DNP ist ein lipophiles Nitrophenol, das Protonen an der ATP-Synthase vorbei in die mitochondriale Matrix schleust. Die Atmungskette läuft schneller, Fett und Zucker werden verbrannt, aber ein großer Teil der Energie wird statt als ATP als Wärme frei. Anders als der neuere Entkoppler BAM15 depolarisiert DNP in Zellversuchen auch die Plasmamembran (Kenwood et al. 2014, zitiert im Eintrag BAM15). Bei einer Vergiftung kann sich der Prozess selbst verstärken: Die Entkopplung erzeugt viel Kohlendioxid, das saurere Gewebe nimmt mehr DNP auf, die Autoren einer Fallarbeit von 2026 sprechen vom Durchgehen der Entkopplung (Lindeman et al., Toxicol Rep 2026). Im überlebten Fall klang die Wirkung mit einer funktionellen Halbwertszeit von 4,9 Tagen ab, zudem kann sich DNP laut BfR im Körper anreichern.',
    benefits: [
      'Senkt das Körpergewicht über erhöhten Energieverbrauch: ab 1933 an der Stanford University beschrieben, berichtet wurden bis zu 1,5 kg pro Woche (historische, unkontrollierte Anwendung; Übersicht Grundlingh et al. 2011).',
      'Kontrolliert belegt nur für die nicht zugelassene Vorstufe HU6, die in der Leber zu DNP wird: Leberfett nach 61 Tagen relativ minus 26,8 bis minus 35,6 Prozent gegenüber plus 5,4 Prozent unter Placebo (RCT, 80 Teilnehmende, Noureddin et al. 2023).',
      'HU6 bei Herzschwäche mit Übergewicht: 2,86 kg mehr Gewichtsverlust als Placebo über 19 Wochen, fast nur Fettmasse, aber keine bessere Belastbarkeit (RCT, 66 Teilnehmende, Pandey et al. 2025).',
      'Deshalb in der Bodybuilder-Szene als Fettverbrenner begehrt; Nutzer beschreiben in Befragungen vor allem den Gewichtsverlust als Motiv (35 Befragte, Petróczi et al. 2015; 14 Interviews, Ainsworth et al. 2018). Eine anerkannte medizinische Anwendung von DNP gibt es nicht.'
    ],
    risks: [
      'Hohe Sterblichkeit bei Vergiftungen: 5 von 30 gemeldeten Fällen tödlich (17 Prozent) in Großbritannien 2007 bis 2013 (Kamour et al. 2015); 11,6 Prozent in den USA und 16,9 Prozent in Großbritannien bei 204 Fällen 2007 bis 2018 (Potts et al. 2021); 11,9 Prozent bei 456 Fällen aus 38 Ländern (Gziut und Thomas 2022).',
      'Typischer Verlauf: Fieber, Herzrasen, Schwitzen, schnelle Atmung, dann Übersäuerung, Verwirrtheit, Muskelstarre und Organversagen. Übersäuerung, Herzrasen, Unruhe oder Verwirrtheit und Überhitzung sagten den Tod unabhängig voraus (Potts et al. 2021). Kein Gegenmittel (Grundlingh et al. 2011).',
      'Keine sichere Menge: DNP kann sich anreichern, sodass laut BfR auch wiederholte kleinere Mengen lebensbedrohlich wirken können. Bei längerer Einnahme drohen Grauer Star sowie Schäden an Leber, Niere, Blut, Herz-Kreislauf- und Nervensystem (BfR 046/2015).',
      'In Deutschland dem BfR zunächst 5 Vergiftungen gemeldet, davon 3 tödlich, 2015 ein weiterer Todesfall. Das BfR berichtet auch von Produkten, in denen DNP nicht deklariert war (BfR 046/2015).',
      'BAM15 wird als sichereres DNP beworben, ist am Menschen aber nicht untersucht; ein Sicherheitsvorteil ist damit nicht belegt (siehe Eintrag BAM15).'
    ],
    status: 'Kein zugelassenes Arzneimittel in Deutschland, der EU oder den USA; als Lebensmittel, Diät- oder Nahrungsergänzungsmittel nicht verkehrsfähig. Wird DNP als Schlankheitsmittel angeboten, kann es als bedenkliches Arzneimittel gelten, dessen Inverkehrbringen nach § 5 und § 95 AMG strafbar ist. Chemikalienrecht: nach CLP-Verordnung (EG) Nr. 1272/2008 als lebensgefährlich beim Verschlucken (H300), giftig bei Hautkontakt und Einatmen (H311, H331) und organschädigend bei wiederholter Exposition (H372) eingestuft. Doping: seit 1. Januar 2024 namentlich in der WADA-Verbotsliste unter S0, jederzeit verboten, auch 2026; § 2 und § 3 AntiDopG knüpfen an diese Liste an, in der Besitzmengen-Anlage des AntiDopG steht DNP nicht. Großbritannien: seit 2023 regulierter Giftstoff.',
    sources: [
      { title: 'Grundlingh et al., J Med Toxicol 2011 – DNP als Abnehmmittel mit hoher akuter Toxizität, 62 veröffentlichte Todesfälle', url: 'https://pubmed.ncbi.nlm.nih.gov/21739343/' },
      { title: 'Kamour et al., Emerg Med J 2015 – Anstieg schwerer DNP-Vergiftungen in Großbritannien, 17 Prozent tödlich', url: 'https://pubmed.ncbi.nlm.nih.gov/24957806/' },
      { title: 'Potts et al., Clin Toxicol 2021 – 204 Fälle aus USA und Großbritannien, Vorhersager des Todes', url: 'https://pubmed.ncbi.nlm.nih.gov/33021407/' },
      { title: 'Gziut und Thomas, Clin Toxicol 2022 – Giftnotrufe aus 38 Ländern, Fallsterblichkeit 11,9 Prozent', url: 'https://pubmed.ncbi.nlm.nih.gov/34812657/' },
      { title: 'Lindeman et al., Toxicol Rep 2026 – zwei Vergiftungsfälle, sich selbst verstärkende Entkopplung', url: 'https://pubmed.ncbi.nlm.nih.gov/41487961/' },
      { title: 'Noureddin et al., Lancet Gastroenterol Hepatol 2023 – RCT mit der DNP-Vorstufe HU6 bei Fettleber', url: 'https://pubmed.ncbi.nlm.nih.gov/37806314/' },
      { title: 'Pandey et al., JAMA Cardiol 2025 – RCT mit HU6 bei Herzschwäche und Übergewicht', url: 'https://pubmed.ncbi.nlm.nih.gov/40072462/' },
      { title: 'Petróczi et al., Subst Abuse Treat Prev Policy 2015 – Internet, Präparate und Nutzerbefragung', url: 'https://pubmed.ncbi.nlm.nih.gov/26466580/' },
      { title: 'BfR, Mitteilung Nr. 046/2015 – DNP kann zu schweren Vergiftungen bis hin zu Todesfällen führen', url: 'https://www.bfr.bund.de/cm/343/nahrungsergaenzungsmittel-die-dinitrophenol-dnp-enthalten-koennen-zu-schweren-vergiftungen-bis-hin-zu-todesfaellen-fuehren.pdf' },
      { title: 'Verbraucherzentrale, Stand 16.09.2026 – Rechtslage und Warnung vor DNP', url: 'https://www.verbraucherzentrale.de/wissen/lebensmittel/nahrungsergaenzungsmittel/dinitrophenol-dnp-verbraucherzentralen-warnen-vor-dem-kauf-34333' },
      { title: 'WADA, Prohibited List 2026 – S0, DNP namentlich genannt', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'epo',
    name: 'EPO (Erythropoetin)',
    altNames: 'Erythropoetin, Epoetin alfa, Epoetin beta, Epoetin zeta, Darbepoetin alfa, CERA, rHuEPO, ESA',
    class: 'Warnung: Blutbildendes Hormon, zugelassen bei Blutarmut, als Dopingmittel verboten, Thrombose- und Schlaganfallrisiko',
    emoji: '⚠️',
    short: 'EPO ist ein Hormon, das die Bildung roter Blutkörperchen anregt, und als verschreibungspflichtiges Medikament bei Blutarmut durch Nierenerkrankung oder Chemotherapie zugelassen. Das Hauptrisiko ist dickeres Blut: In großen Patientenstudien stiegen Thrombosen und Schlaganfälle, in TREAT fast auf das Doppelte, während bei trainierten Radfahrern zwar die Laborleistung, nicht aber die Zeit im Bergrennen besser wurde.',
    moa: 'Erythropoetin ist ein Glykoprotein-Hormon, das der Körper bei Sauerstoffmangel über den HIF-Signalweg ausschüttet. Es bindet an den EPO-Rezeptor auf Vorläuferzellen der roten Blutkörperchen im Knochenmark und aktiviert JAK2 und den JAK2/STAT5-Signalweg; die Zellen teilen sich, reifen und überleben länger (Chlebowska et al. 2026). Nach einigen Wochen steigen Hämoglobin und Hämatokrit, damit die Sauerstoff-Transportkapazität, aber auch die Blutviskosität. Bei chronischer Nierenerkrankung entsteht die Blutarmut meist durch EPO-Mangel, deshalb ist gentechnisch hergestelltes EPO seit 1988 Standardtherapie. Varianten sind Epoetin alfa, beta und zeta, das länger wirkende Darbepoetin und CERA.',
    benefits: [
      'Zugelassene Anwendung bei renaler Anämie: Von 18 wirksam behandelten Dialysepatienten brauchten 12 keine Transfusionen mehr (Eschbach et al. 1987, Phase I/II, 25 Patienten); in TREAT 297 gegen 496 Patienten mit Transfusion (Pfeffer et al. 2009, RCT, 4038 Patienten).',
      'Zugelassene Anwendung bei Chemotherapie: relatives Transfusionsrisiko 0,65 (Cochrane-Review, 91 Studien, 20.102 Krebspatienten, Tonia et al. 2012); weitere Anwendungsgebiete laut Fachinformation sind Eigenblutspende, große orthopädische Eingriffe und Niedrigrisiko-MDS.',
      'Warum es im Sport genutzt wird: bei 48 trainierten Radfahrern nach 8 Wochen höheres Hämoglobin (9,6 gegen 9,0 mmol/l), VO2max 60,1 gegen 57,4 ml/min/kg und Maximalleistung 351,55 gegen 341,23 Watt (Heuberger et al. 2017, doppelblindes RCT).',
      'Kein Vorteil im Rennen: im 45-Minuten-Test und beim Bergrennen auf den Mont Ventoux kein Unterschied, 1 h 40 min 32 s gegen 1 h 40 min 15 s (Heuberger et al. 2017).',
      'Leistungsgewinn ohne Placebovergleich: 3000-m-Lauf bei 20 kenianischen Läufern etwa 5 Prozent schneller direkt nach 4 Wochen, etwa 3 Prozent 4 Wochen später (Haile et al. 2019); systematischer Review mit 10 Studien bestätigt Blutwerte und VO2max, submaximale Leistung offen (Alberdi-Garciandia 2025).'
    ],
    risks: [
      'Schlaganfall: in TREAT 101 gegen 53 Schlaganfälle, Hazard Ratio 1,92, bei unveränderten Hauptendpunkten (Pfeffer et al. 2009, 4038 Patienten).',
      'Hohe Hämoglobinwerte schaden: in CHOIR 125 gegen 97 schwere Ereignisse bei Ziel 13,5 statt 11,3 g/dl, HR 1,34 (Singh et al. 2006, 1432 Patienten); CREATE ohne Herzschutz über 3 Jahre (603 Patienten).',
      'Thrombosen und Sterblichkeit bei Krebspatienten: Thromboembolien RR 1,52, Sterblichkeit in der Studienphase HR 1,17 (Tonia et al. 2012); venöse Thrombosen 7,5 gegen 4,9 Prozent (Bennett et al. 2008).',
      'Bei Trainierten mehr Endothel- und Plättchenaktivierung, nach Maximalbelastung E-Selektin 15,3 Prozent und Plättchenfaktor 4 32,1 Prozent höher als unter Placebo (Heuberger et al. 2020). Zu Missbrauch bei Sportlern gibt es kaum bevölkerungsbezogene Daten, aber Fallberichte über Hirnvenenthrombosen und akute Koronarsyndrome (Chlebowska et al. 2026); die Todesfälle junger Radprofis um 1990 gelten als verdächtig, nicht als bewiesen (Vecchiato et al. 2026).',
      'Fachinformation: Bluthochdruck, Krampfanfälle, schwere Hautreaktionen, antikörpervermittelte Erythroblastopenie (1998 bis 2004 nahezu 200 Nierenkranke, 37 Prozent erholt; Bennett et al. 2005), bei Krebspatienten mögliche Wachstumsfaktor-Wirkung.'
    ],
    status: 'In Deutschland und der EU zugelassenes, verschreibungspflichtiges Arzneimittel (z. B. Epoetin alfa als Binocrit seit 28.08.2007, eingeschränkte ärztliche Verschreibung); Anwendungsgebiete laut Fachinformation: renale Anämie, Anämie unter Chemotherapie, Eigenblutspende, große orthopädische Eingriffe, Niedrigrisiko-MDS. Leistungssteigerung ist keine Indikation. Handel oder Abgabe außerhalb der Apotheke ist nach § 95 AMG strafbar. Doping: WADA-Verbotsliste 2026 S2.1.1, jederzeit verboten. AntiDopG: EPO, Darbepoetin und CERA stehen in der Anlage; Herstellen und Handel zu Dopingzwecken (§ 2 Abs. 1) sowie Erwerb und Besitz nicht geringer Mengen (§ 2 Abs. 3, Grenze in der Dopingmittel-Mengen-Verordnung 2023) sind strafbar, bis zu drei Jahre Freiheitsstrafe; Selbstdoping (§ 3) für Spitzensportler und Sportler mit erheblichen Einnahmen.',
    sources: [
      { title: 'Eschbach et al., N Engl J Med 1987 – erste Korrektur der renalen Anämie mit rekombinantem EPO', url: 'https://pubmed.ncbi.nlm.nih.gov/3537801/' },
      { title: 'EMA, Fachinformation Binocrit (Epoetin alfa) – Anwendungsgebiete und Warnhinweise', url: 'https://www.ema.europa.eu/de/documents/product-information/binocrit-epar-product-information_de.pdf' },
      { title: 'Pfeffer et al., N Engl J Med 2009 (TREAT) – Darbepoetin, fast doppelt so viele Schlaganfälle', url: 'https://pubmed.ncbi.nlm.nih.gov/19880844/' },
      { title: 'Singh et al., N Engl J Med 2006 (CHOIR) – hohes Hämoglobin-Ziel mit mehr Ereignissen', url: 'https://pubmed.ncbi.nlm.nih.gov/17108343/' },
      { title: 'Drüeke et al., N Engl J Med 2006 (CREATE) – kein Herzschutz durch vollständige Korrektur', url: 'https://pubmed.ncbi.nlm.nih.gov/17108342/' },
      { title: 'Tonia et al., Cochrane 2012 – ESA bei Krebs: weniger Transfusionen, mehr Thrombosen und Todesfälle', url: 'https://pubmed.ncbi.nlm.nih.gov/23235597/' },
      { title: 'Bennett et al., JAMA 2008 – venöse Thromboembolien unter ESA bei Krebspatienten', url: 'https://pubmed.ncbi.nlm.nih.gov/18314434/' },
      { title: 'Heuberger et al., Lancet Haematol 2017 – RCT an Radfahrern, Laborleistung besser, Bergrennen nicht', url: 'https://pubmed.ncbi.nlm.nih.gov/28669689/' },
      { title: 'Heuberger et al., Eur J Appl Physiol 2020 – Endothel- und Plättchenaktivierung unter EPO und Belastung', url: 'https://pubmed.ncbi.nlm.nih.gov/32537688/' },
      { title: 'Haile et al., Med Sci Sports Exerc 2019 – EPO bei kenianischen Läufern', url: 'https://pubmed.ncbi.nlm.nih.gov/30188362/' },
      { title: 'Chlebowska et al., Pathophysiology 2026 – Übersicht zu EPO-Doping und Herz-Kreislauf-Risiko', url: 'https://pubmed.ncbi.nlm.nih.gov/42647239/' },
      { title: 'WADA, Prohibited List 2026 – S2.1 Erythropoetine', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'telmisartan',
    name: 'Telmisartan',
    altNames: 'Micardis, Sartan, AT1-Rezeptorblocker, ARB, MicardisPlus (mit Hydrochlorothiazid)',
    class: 'Angiotensin-II-Rezeptorblocker (Sartan) mit partieller PPAR-gamma-Wirkung im Labor, zugelassener Blutdrucksenker, verschreibungspflichtig',
    emoji: '🩺',
    short: 'Ein seit 1998 zugelassener Blutdrucksenker, der in der Studie ONTARGET mit 25.620 Hochrisikopatienten so gut vor Herzinfarkt, Schlaganfall und Herztod schützte wie Ramipril und in Meta-Analysen Insulinwerte und Bauchfett stärker verbessert als andere Blutdrucksenker. Das Longevity-Interesse beruht auf Labor- und Tierdaten; harte Endpunkte wie Diabetes, Kognition und Gehstrecke verbesserten sich in großen Studien nicht, und im Mäuse-Lebensdauerprogramm ITP blieb die Kombination mit Atorvastatin ohne Effekt.',
    moa: 'Telmisartan blockiert selektiv und lang anhaltend den Angiotensin-II-Rezeptor AT1; laut Fachinformation hemmen 80 mg beim Menschen den durch Angiotensin II ausgelösten Blutdruckanstieg fast vollständig über 24 Stunden, die Halbwertszeit liegt über 20 Stunden. Dadurch sinken Blutdruck, Aldosteron und die Belastung von Herz, Nieren und Gefäßen. Zusätzlich wirkt Telmisartan in Zell- und Rattenversuchen als partieller Agonist des Stoffwechselrezeptors PPAR-gamma, den andere Sartane in üblichen Konzentrationen nicht aktivieren (Benson 2004). Bei Mäusen steigerte es über PPAR-delta und AMPK die Laufausdauer (Feng 2011). Beim Menschen ist der PPAR-Weg nur indirekt belegt, über günstigere Insulinwerte und eine explorative Muskelbiopsie-Studie mit 13 Teilnehmenden.',
    benefits: [
      'Herz-Kreislauf-Schutz gleichwertig zu Ramipril: primärer Endpunkt 16,7 % gegenüber 16,5 %, weniger Husten, 1,1 % gegenüber 4,2 % (ONTARGET, doppelblinde RCT, 25.620 Patienten, median 56 Monate, 2008)',
      'Günstigere Insulinresistenz als unter anderen Blutdrucksenkern: HOMA-IR -15,34 % in 8 doppelblinden Studien (Meta-Analyse, 33 RCTs, 2033 Hypertoniker, 2014)',
      'Weniger viszerales Fett, -18,13 cm² gegenüber Kontrolle, Unterhautfett unverändert (Meta-Analyse, 15 RCTs, 2016)',
      'Partieller PPAR-gamma-Agonist, senkte Glukose, Insulin und Triglyzeride bei Ratten (Benson 2004); mehr Laufausdauer bei Mäusen über PPAR-delta (Feng 2011)',
      'Muskelbiopsien bei pAVK: größere Muskelfasern, weniger Myostatin, aktivierte PPAR-gamma-Signalwege (TELEX-Substudie, 13 Teilnehmende, 2025, explorativ)'
    ],
    risks: [
      'Kein Longevity-Beleg: Atorvastatin plus Telmisartan verlängerte das Leben von Mäusen im ITP nicht (2026); keine Humandaten zur Lebensdauer',
      'Harte Stoffwechsel-Endpunkte verfehlt: neuer Diabetes 1,7 % gegenüber 2,1 %, nicht signifikant (PRoFESS, 20.332 Patienten); bei Fettleber kein konsistenter Nutzen (6 RCTs, 258 Teilnehmende)',
      'Keine Verbesserung von Kognition (PRoFESS, ONTARGET/TRANSCEND) oder Gehstrecke (TELEX, 114 Patienten)',
      'Niedriger Blutdruck, Schwindel, Synkope, erhöhtes Kalium, Nierenfunktionsverschlechterung, selten Angioödem; bei normalem Blutdruck keine Studien',
      'Kontraindiziert im zweiten und dritten Schwangerschaftsdrittel, bei Gallenabflussstörung und schwerer Leberfunktionsstörung; nicht mit weiteren RAAS-Hemmern kombinieren (ONTARGET: Nierenfunktionsstörung 13,5 % gegenüber 10,2 %); Wechselwirkung mit Lithium und kaliumsparenden Mitteln'
    ],
    status: 'Deutschland/EU: zugelassenes, verschreibungspflichtiges Arzneimittel, Micardis seit 16.12.1998, zahlreiche Generika, Kombination mit Hydrochlorothiazid (MicardisPlus) seit 2002. Anwendungsgebiete: essentielle Hypertonie bei Erwachsenen und Senkung der kardiovaskulären Morbidität bei manifester atherothrombotischer Erkrankung oder Typ-2-Diabetes mit Endorganschaden. Nutzung zur Longevity, Stoffwechseloptimierung oder Leistungssteigerung ist Off-Label. Die großen Endpunktstudien verwendeten 80 mg pro Tag (Studienangabe, keine Empfehlung). Doping: Telmisartan steht nicht auf der WADA-Liste; Kombipräparate mit Hydrochlorothiazid enthalten ein unter S5 verbotenes Diuretikum.',
    sources: [
      { title: 'ONTARGET Investigators 2008, N Engl J Med – Telmisartan gleichwertig zu Ramipril, 25.620 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/18378520/' },
      { title: 'TRANSCEND Investigators 2008, Lancet – 5926 ACE-Hemmer-intolerante Patienten, primärer Endpunkt nicht signifikant', url: 'https://pubmed.ncbi.nlm.nih.gov/18757085/' },
      { title: 'Yusuf et al. 2008, N Engl J Med – PRoFESS, kein Schutz vor erneutem Schlaganfall oder neuem Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/18753639/' },
      { title: 'Benson et al. 2004, Hypertension – Telmisartan als partieller PPAR-gamma-Agonist', url: 'https://pubmed.ncbi.nlm.nih.gov/15007034/' },
      { title: 'Feng et al. 2011, J Cell Mol Med – Laufausdauer bei Mäusen über PPAR-delta/AMPK', url: 'https://pubmed.ncbi.nlm.nih.gov/20477906/' },
      { title: 'Takagi und Umemoto 2014, J Am Soc Hypertens – Meta-Analyse Insulinresistenz, 33 RCTs', url: 'https://pubmed.ncbi.nlm.nih.gov/25151319/' },
      { title: 'Choi et al. 2016, Curr Med Res Opin – Meta-Analyse viszerales Fett', url: 'https://pubmed.ncbi.nlm.nih.gov/27010868/' },
      { title: 'McDermott et al. 2022, JAMA – TELEX, keine bessere Gehstrecke bei pAVK', url: 'https://pubmed.ncbi.nlm.nih.gov/36194220/' },
      { title: 'Korstanje et al. 2026, Geroscience – ITP, Atorvastatin-Telmisartan ohne Lebensverlängerung', url: 'https://pubmed.ncbi.nlm.nih.gov/41843349/' },
      { title: 'EMA – Micardis, Produktinformation (deutsch)', url: 'https://www.ema.europa.eu/de/documents/product-information/micardis-epar-product-information_de.pdf' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Longevity'
  },
  {
    id: 'vinpocetin',
    name: 'Vinpocetin',
    altNames: 'Vinpocetine, Ethyl-Apovincaminat, Cavinton, RGH-4405, TCV-3B',
    class: 'Halbsynthetisches Vinca-Alkaloid, Phosphodiesterase-1-Hemmer; in DE verschreibungspflichtig, kein Fertigarzneimittel im Handel',
    emoji: '🌸',
    short: 'Abkömmling eines Alkaloids aus dem Kleinen Immergrün, seit Jahrzehnten als Mittel für die Hirndurchblutung im Einsatz; beim akuten Schlaganfall fand eine Meta-Analyse von 4 Studien weniger Tod oder schwere Behinderung. Für Gesunde fehlen belastbare Daten, die Demenzstudien sind alt und laut Cochrane nicht schlüssig, und die FDA warnt in der Schwangerschaft.',
    moa: 'Vinpocetin hemmt die Phosphodiesterase 1, die die Botenstoffe cAMP und cGMP abbaut; das soll Hirngefäße erweitern und die Durchblutung verbessern. Zusätzlich blockiert es spannungsabhängige Natriumkanäle (NaV1.8) und dämpft oxidativen Stress, was Nervenzellen bei Sauerstoffmangel schützen soll (präklinisch, Vizi & Kiss 2026). Unabhängig davon hemmt es direkt das Enzym IKK und damit den Entzündungsschalter NF-κB (Zellkultur und Maus, Jeon 2010); bei 60 Schlaganfallpatienten war die NF-κB-Aktivierung unter Vinpocetin-Infusion gedämpft (Zhang 2018). Die orale Bioverfügbarkeit beim Menschen liegt nur bei 6,2 %, mit Mahlzeit steigt die Aufnahme um etwa 60 bis 100 %; die Blutspiegel bleiben weit unter wirksamen Tierspiegeln (Szakács 2001; Lohmann 1992; Meador 2021).',
    benefits: [
      'Akuter ischämischer Schlaganfall: Meta-Analyse von 4 placebokontrollierten RCTs (601 gegen 236 Patienten), weniger Tod oder schwere Behinderung nach 1 Monat (RR 0,80) und 3 Monaten (RR 0,67) (Panda 2022).',
      'CAVIN-Studie (China, 610 Patienten, offen, 2016): Vinpocetin-Infusion zusätzlich zur Standardtherapie, nach 90 Tagen bessere Werte in MMSE, NIHSS und Barthel-Index.',
      'Chronische zerebrovaskuläre Störungen und leichte Demenz: RCT mit 203 Patienten über 16 Wochen (Hindmarch 1991) und mit 84 Patienten über 90 Tage (Balestreri 1987) positiv.',
      'Cochrane 2003: 3 RCTs mit 583 Menschen mit Demenz zeigen Vorteile gegenüber Placebo, bei ungenügender Studienqualität.',
      'Entzündungshemmung am Menschen gemessen: gedämpfte NF-κB-Aktivierung bei 60 Schlaganfallpatienten (Zhang 2018).',
      'Neues Forschungsfeld: bei seltenen GABA-A-Rezeptor-Epilepsien in einer Beobachtungsserie mit 9 Patienten weniger Anfälle (Gjerulfsen 2026).'
    ],
    risks: [
      'Schwangerschaft: FDA-Warnung 2019 vor Fehlgeburt und Schädigung des Fötus; NTP 2020 mit klarer Entwicklungstoxizität bei Ratten (Embryoverlust, Ventrikelseptumdefekte).',
      'Für Gesunde keine belastbaren Belege: 8 Gesunde ohne kognitiven Effekt (Meador 2021), 12 Frauen nur in einem Einzeltest verbessert (Subhan 1985).',
      'Demenzstudien alt und klein; Cochrane 2003 nicht schlüssig; offene Alzheimer-Studie mit 15 Patienten über 1 Jahr ohne Effekt (Thal 1989).',
      'Nebenwirkungen: Gesichtsrötung, Kopfschmerz, Schlafstörungen, Übelkeit, Schwindel; Vorsicht mit Blutverdünnern (OPSS 2022).',
      'Sehr niedrige orale Bioverfügbarkeit (6,2 %); die neueren Schlaganfallstudien nutzten Infusionen.',
      'Produktqualität: in 6 von 23 US-Supplements kein Vinpocetin nachweisbar (Avula 2016).'
    ],
    status: 'DE: verschreibungspflichtig (AMVV Anlage 1, Vinpocetin); vinpocetinhaltige Fertigarzneimittel seit 2006 nicht mehr im Handel; als Nahrungsergänzung nicht verkehrsfähig. EU: RASFF-Meldungen als nicht zugelassener Stoff in Nahrungsergänzungsmitteln (Slowenien 2021, Lettland und Niederlande 2026); in anderen Ländern Arzneimittel (Cavinton, Gedeon Richter; laut OPSS u. a. China, Russland). USA: FDA 2016 vorläufig keine zulässige Supplement-Zutat, 2019 Warnung in der Schwangerschaft; auf der DoD-Verbotsliste. WADA-Liste 2026: nicht genannt.',
    sources: [
      { title: 'Szatmari & Whitehouse, Cochrane Database Syst Rev 2003 – Demenz, 3 RCTs, 583 Patienten, nicht schlüssig', url: 'https://pubmed.ncbi.nlm.nih.gov/12535455/' },
      { title: 'Panda et al., Neurocrit Care 2022 – Meta-Analyse, 4 RCTs, akuter ischämischer Schlaganfall', url: 'https://pubmed.ncbi.nlm.nih.gov/35488169/' },
      { title: 'Bereczki & Fekete, Cochrane Database Syst Rev 2008 – Schlaganfall, 2 Studien, 70 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/18253980/' },
      { title: 'Zhang W et al., Clin Drug Investig 2016 – CAVIN-Studie, 610 Patienten, offen', url: 'https://pubmed.ncbi.nlm.nih.gov/27283947/' },
      { title: 'Hindmarch et al., Int Clin Psychopharmacol 1991 – RCT, 203 Patienten, 16 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/2071888/' },
      { title: 'Meador et al., Epilepsy Behav 2021 – kein kognitiver Effekt bei Gesunden und Epilepsie', url: 'https://pubmed.ncbi.nlm.nih.gov/33957389/' },
      { title: 'Zhang F et al., Transl Stroke Res 2018 – NF-κB-Hemmung bei 60 Schlaganfallpatienten', url: 'https://pubmed.ncbi.nlm.nih.gov/28691141/' },
      { title: 'National Toxicology Program 2020 – DART-Report 03, Entwicklungstoxizität bei Ratten und Kaninchen', url: 'https://pubmed.ncbi.nlm.nih.gov/32716616/' },
      { title: 'FDA – Vinpocetine in Dietary Supplements (Rechtsstatus 2016, Schwangerschaftswarnung 2019)', url: 'https://www.fda.gov/food/information-select-dietary-supplement-ingredients-and-other-substances/vinpocetine-dietary-supplements' },
      { title: 'Avula et al., Drug Test Anal 2016 – Vinpocetin-Gehalt in 23 US-Supplements', url: 'https://pubmed.ncbi.nlm.nih.gov/26426301/' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'yohimbin',
    name: 'Yohimbin',
    altNames: 'Yohimbine, Yohimbinhydrochlorid, Yohimbine HCl, Yohimbe (Pausinystalia yohimbe, Corynanthe johimbe), Johimbin, YOCON-GLENWOOD',
    class: 'Indolalkaloid, Alpha-2-Rezeptor-Blocker; in DE verschreibungspflichtiges Arzneimittel, Yohimbe-Rinde in Lebensmitteln EU-weit verboten',
    emoji: '🌳',
    short: 'Alkaloid aus der Yohimbe-Rinde, das den Sympathikus anschiebt: mehr Noradrenalin, mehr freigesetzte Fettsäuren, und bei Erektionsstörungen in mehreren Meta-Analysen besser als Placebo. Für Fettabbau und Trainingsleistung gibt es nur kleine, widersprüchliche Studien, und Herzrasen, Blutdruckanstieg und Angst sind häufig.',
    moa: 'Yohimbin blockiert Alpha-2-Adrenozeptoren, die an Nervenenden die Ausschüttung von Noradrenalin bremsen und an Fettzellen den Fettabbau hemmen. Am Menschen ist die Folge gemessen: Plasma-Noradrenalin stieg um 100 % bei nüchternen Frauen (Berlan 1991) und um 66 % bei Bluthochdruckpatienten, deren mittlerer Blutdruck um 5 mm Hg zunahm (Grossman 1993); freie Fettsäuren steigen, ein Betablocker dämpft den Effekt um 70 %, der Fettabbau läuft also überwiegend über mehr Noradrenalin an Beta-Rezeptoren. Die Halbwertszeit lag in zwei Studien bei 0,58 und 0,60 Stunden, die orale Bioverfügbarkeit schwankte zwischen 7 und 87 % (Guthrie 1990). Abgebaut wird Yohimbin über CYP2D6, weshalb die Clearance in einer Studie mit 16 Gesunden zwischen 25,3 und 15.864 mL/min lag (Vay 2020).',
    benefits: [
      'Erektile Dysfunktion: Meta-Analyse von 7 placebokontrollierten RCTs, Odds Ratio 3,85 (Ernst & Pittler 1998); neuere Meta-Analyse von 8 RCTs, OR 2,08 für Yohimbin allein (Wibowo 2021) – ältere Studien mit methodischen Mängeln.',
      'In Deutschland als verschreibungspflichtiges Arzneimittel zur unterstützenden Behandlung leichter bis mittelschwerer Erektionsstörungen zugelassen (Fachinformation 2017).',
      'Körperfett: RCT mit 20 Profi-Fußballern über 21 Tage, Körperfett 7,1 gegenüber 9,2 % unter Placebo, ohne Leistungsänderung (Ostojic 2006).',
      'Diät: 20 übergewichtige Frauen, 3 Wochen, 3,55 kg gegenüber 2,21 kg Gewichtsverlust unter Placebo (Kucio 1991).',
      'Sprintleistung: Crossover mit 18 aktiven Frauen, einmalige Gabe, höhere mittlere Leistung und weniger Ermüdung über 3 Sprints (Barnes 2022).',
      'Wirkprinzip am Menschen belegt: messbarer Anstieg von Noradrenalin und freien Fettsäuren (Berlan 1991; Galitzky 1990).'
    ],
    risks: [
      'Die längste kontrollierte Studie (47 Männer, 6 Monate) fand keinen Effekt auf Gewicht, Körperfett oder Fettverteilung (Sax 1991).',
      'Häufig Herzrasen, Blutdruckanstieg, Unruhe, Angst, Schlaflosigkeit, Übelkeit; beim kalifornischen Giftnotruf 238 Fälle, 43 % mit Herzrasen, schwere Verläufe häufiger als im Durchschnitt (Kearney 2010).',
      'Vergiftungen und Todesfälle dokumentiert; bei 4 gleichzeitig Vergifteten unterschieden sich die Blutspiegel um das 22-Fache (Müller-Schoell 2021).',
      'Nicht bei Herzerkrankungen, Blutdruckstörungen, Leber- oder Niereninsuffizienz, Magengeschwür, Glaukom, Epilepsie, Angst- und affektiven Störungen; bei Angstpatienten Panikattacken in 50 % der Fälle (BfR).',
      'Wechselwirkungen mit Blutdrucksenkern, Clonidin, Antidepressiva, Amphetaminen; CYP2D6-Hemmer wie Paroxetin senken die Clearance mehr als fünffach.',
      'Produktqualität: von 49 US-Marken nur 2 mit korrekter Mengenangabe und Warnhinweisen (Cohen 2016).'
    ],
    status: 'DE: verschreibungspflichtig (AMVV Anlage 1, Yohimbinsäure und ihre Ester), zugelassen zur unterstützenden Behandlung leichter bis mittelschwerer erektiler Dysfunktion (z. B. YOCON-GLENWOOD). EU: Yohimbe-Rinde und Zubereitungen daraus seit VO (EU) 2019/650 in Lebensmitteln verboten (Anhang III Teil A der VO (EG) 1925/2006); Yohimbinhydrochlorid in Nahrungsergänzungsmitteln wird als Arzneistoff beanstandet, 102 RASFF-Meldungen mit Yohimbe/Yohimbin im Betreff seit 2017. USA: als Supplement im Handel, FDA-Warnungen zu verstecktem Yohimbin; Yohimbe-Präparate in Kanada, Australien, Niederlanden und Großbritannien verboten. WADA-Liste 2026: nicht genannt.',
    sources: [
      { title: 'Ernst & Pittler, J Urol 1998 – Meta-Analyse, 7 RCTs, erektile Dysfunktion, OR 3,85', url: 'https://pubmed.ncbi.nlm.nih.gov/9649257/' },
      { title: 'Wibowo et al., Turk J Urol 2021 – Meta-Analyse, 8 RCTs', url: 'https://pubmed.ncbi.nlm.nih.gov/35118966/' },
      { title: 'Ostojic, Res Sports Med 2006 – RCT, 20 Fußballprofis, Körperfett gesenkt, Leistung unverändert', url: 'https://pubmed.ncbi.nlm.nih.gov/17214405/' },
      { title: 'Sax, Int J Obes 1991 – RCT, 47 Männer, 6 Monate, kein Effekt auf Fettverteilung', url: 'https://pubmed.ncbi.nlm.nih.gov/1960007/' },
      { title: 'Barnes et al., Int J Environ Res Public Health 2022 – Einzeldosis und Sprintleistung, 18 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/35162339/' },
      { title: 'Berlan et al., Int J Obes 1991 – Noradrenalin und Fettmobilisierung beim Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/1885256/' },
      { title: 'Vay et al., Clin Pharmacokinet 2020 – CYP2D6-abhängige Clearance', url: 'https://pubmed.ncbi.nlm.nih.gov/32060866/' },
      { title: 'Kearney et al., Ann Pharmacother 2010 – 238 Fälle beim kalifornischen Giftnotruf', url: 'https://pubmed.ncbi.nlm.nih.gov/20442348/' },
      { title: 'Cohen et al., Drug Test Anal 2016 – Yohimbin-Gehalt in 49 US-Supplements', url: 'https://pubmed.ncbi.nlm.nih.gov/26391406/' },
      { title: 'Verordnung (EU) 2019/650 – Yohimbe in Anhang III Teil A (Verbot in Lebensmitteln)', url: 'https://eur-lex.europa.eu/eli/reg/2019/650/oj/eng' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'pea',
    name: 'Phenylethylamin (PEA)',
    altNames: 'β-Phenylethylamin, 2-Phenylethylamin, Phenethylamin, PEA-HCl, verwandt: Hordenin (N,N-Dimethyltyramin); nicht zu verwechseln mit Palmitoylethanolamid (ebenfalls PEA)',
    class: 'Körpereigenes Spurenamin, TAAR1-Agonist mit amphetaminähnlicher Wirkung im Zellversuch; in der EU nicht als Lebensmittelzutat zugelassen, im Wettkampfsport verboten',
    emoji: '⚡',
    short: 'Körpereigenes Spurenamin, das den Rezeptor TAAR1 aktiviert und im Zellversuch die Transporter für Noradrenalin und Dopamin ähnlich stark hemmt wie Amphetamin; in der Szene als kurzer Stimmungs- und Fokus-Kick beliebt, oft mit Hordenin aus der Gerste. Geschlucktes PEA wird durch MAO-B rasch abgebaut, kontrollierte Studien zu Stimmung, Fokus oder Leistung fehlen.',
    moa: 'PEA entsteht im Körper aus Phenylalanin und ist voller Agonist am Spurenamin-Rezeptor TAAR1, der vor allem in limbischen und monoaminergen Hirnregionen vorkommt (Borowsky 2001; Rutigliano 2017). In Zellkultur hemmt es den Noradrenalin- und den Dopamin-Transporter mit IC50 0,05 und 1,8 µM, vergleichbar mit D-Amphetamin, nicht aber den Serotonin-Transporter (Rickli 2019). Abgebaut wird PEA durch die Monoaminoxidase B so rasch, dass die Depressionsstudien einen MAO-B-Hemmer dazugaben (Sabelli 1996) und nach oraler Gabe PEA im Urin kaum stieg (Sigmund 2015; Krombholz 2022). Hordenin, oft mitkombiniert, ist in Rattenleber ein selektives MAO-B-Substrat (Barwell 1989) und im Zellversuch ein Dopamin-D2-Agonist (Sommer 2017); ob es den PEA-Abbau beim Menschen bremst, ist nicht untersucht.',
    benefits: [
      'Klar definierter Mechanismus: voller Agonist an TAAR1 und amphetaminähnliche Hemmung der Noradrenalin- und Dopamin-Transporter (Zellstudien, 2001 und 2019).',
      'Nach 30 Minuten Laufen stieg das PEA-Abbauprodukt Phenylessigsäure im Urin um 77 % – möglicher Baustein der stimmungshebenden Wirkung von Sport (Pilotstudie, 20 Männer, 2001; Surrogatmarker).',
      'Niedrigere Phenylessigsäure in Plasma und Urin bei Depressiven als bei Gesunden (Beobachtungsstudie, 23 bzw. 144 Depressive, 1986).',
      'Anhaltende Besserung bei 12 von 14 Depressiven über 20 bis 50 Wochen unter PEA plus dem MAO-B-Hemmer Selegilin (offene Nachbeobachtung ohne Kontrollgruppe, 1996).',
      'Im Tierversuch antriebs- und belohnungssteigernd, vermittelt über Dopamin-D1-Rezeptoren (Mäuse und Ratten, 2021).'
    ],
    risks: [
      'Keine randomisierte Studie zu Stimmung, Fokus, Leistung oder Fettabbau; die einzige Placebostudie (27 Gesunde, 1983) fand Kopfschmerz, Schwindel und Unwohlsein bei einigen Teilnehmern.',
      'Gefährlich mit MAO-Hemmern (inklusive Selegilin): Spurenamine steigen stark an und können den Blutdruck erhöhen; Fallbericht zu Panikattacken unter Selegilin plus PEA.',
      'Fallbericht einer Hirnblutung nach einem mit PEA verunreinigten Kratom-Produkt (2020); im Tierversuch Selbstverabreichung als Hinweis auf Missbrauchspotenzial.',
      'Nicht bei Bluthochdruck, Herzrhythmusstörungen, Angst- oder Panikstörung, zusammen mit Antidepressiva oder Stimulanzien sowie in Schwangerschaft und Stillzeit.',
      'Produktqualität: niederländische Behörde fand in 264 von 416 Supplements pharmakologisch wirksame Stoffe, darunter PEA und Hordenin.',
      'WADA-Liste 2026: Phenethylamin und Abkömmlinge im Wettkampf verboten; Einnahme im Urin nachweisbar.'
    ],
    status: 'DE/EU: weder als Arzneimittel noch als Lebensmittelzutat zugelassen; kein Eintrag im Novel-Food-Statuskatalog und nicht in der Unionsliste. RASFF-Meldungen: Tschechien 2020 (hoher Gehalt), Polen 2022 (verbotener Stoff), Slowenien 2025 (nicht zugelassene neuartige Zutat); Hordenin: Polen 2023 und 2026. Keine deutsche Meldung und keine BVL- oder BfR-Stellungnahme gefunden. Nicht verschreibungspflichtig, nicht im BtMG; PEA selbst ist aus der NpSG-Stoffgruppe der Phenethylamin-Abkömmlinge ausdrücklich ausgenommen. WADA 2026: „Phenethylamine and its derivatives“ unter S6.b, im Wettkampf verboten (gelistet seit 2015); Hordenin nicht namentlich genannt, laut USADA nicht verboten, von der NCAA verboten.',
    sources: [
      { title: 'Borowsky et al. 2001, Proc Natl Acad Sci U S A – Entdeckung der Spurenamin-Rezeptoren (TAAR)', url: 'https://pubmed.ncbi.nlm.nih.gov/11459929/' },
      { title: 'Rickli et al. 2019, Eur J Pharmacol – PEA hemmt Noradrenalin- und Dopamin-Transporter wie D-Amphetamin', url: 'https://pubmed.ncbi.nlm.nih.gov/31265842/' },
      { title: 'Sabelli et al. 1996, J Neuropsychiatry Clin Neurosci – PEA plus Selegilin bei Depression, offene Nachbeobachtung', url: 'https://pubmed.ncbi.nlm.nih.gov/9081552/' },
      { title: 'Szabo et al. 2001, Br J Sports Med – Phenylessigsäure im Urin nach Ausdauerbelastung +77 %', url: 'https://pubmed.ncbi.nlm.nih.gov/11579070/' },
      { title: 'Lüthy & Schlatter 1983, Z Lebensm Unters Forsch – Placebostudie mit biogenen Aminen, PEA löste Beschwerden aus', url: 'https://pubmed.ncbi.nlm.nih.gov/6364621/' },
      { title: 'Krombholz et al. 2022, Biomed Chromatogr – orales PEA im Urin kaum nachweisbar, Dopinganalytik', url: 'https://pubmed.ncbi.nlm.nih.gov/34729800/' },
      { title: 'Sommer et al. 2020, J Agric Food Chem – Hordenin-Kinetik beim Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/31984737/' },
      { title: 'Van den Eynde 2021, J Neural Transm – Spurenamine und Blutdruckanstieg unter MAO-Hemmern', url: 'https://pubmed.ncbi.nlm.nih.gov/34373944/' },
      { title: 'Biesterbos et al. 2019, Food Addit Contam – Wirkstoffe in Supplements, Niederlande', url: 'https://pubmed.ncbi.nlm.nih.gov/31294678/' },
      { title: 'RASFF 2025.9102 – Slowenien: Phenethylamin als nicht zugelassene neuartige Zutat', url: 'https://webgate.ec.europa.eu/rasff-window/screen/notification/804971' }
    ],
    community: [
      { title: 'biolabshop (Suche „PEA")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'sglt2-hemmer',
    name: 'SGLT2-Hemmer (Empagliflozin, Dapagliflozin)',
    altNames: 'Gliflozine, SGLT2-Inhibitoren, Empagliflozin (Jardiance), Dapagliflozin (Forxiga, in den USA Farxiga), Natrium-Glucose-Cotransporter-2-Hemmer',
    class: 'SGLT2-Hemmer (Antidiabetika mit Herz- und Nierenschutz), zugelassen, verschreibungspflichtig, Longevity-Kandidat',
    emoji: '💧',
    short: 'Diabetesmittel, die überschüssigen Zucker über die Niere ausscheiden lassen und in großen Studien Herz und Nieren schützten, auch bei Menschen ohne Diabetes: weniger Klinikaufenthalte, langsameres Nierenversagen, teils geringere Sterblichkeit. Für ein längeres Leben gesunder Menschen gibt es bisher nur Mausdaten und Beobachtungsstudien, die Nutzung dafür ist Off-Label.',
    moa: 'Empagliflozin und Dapagliflozin hemmen in der Niere den Natrium-Glucose-Cotransporter 2, der den Großteil des gefilterten Zuckers zurück ins Blut holt; Empagliflozin ist laut Fachinformation 5 000-mal selektiver für SGLT2 als für den Darm-Transporter SGLT1. Menschen mit Typ-2-Diabetes scheiden dadurch im Mittel etwa 78 g Glucose pro Tag aus, das senkt Blutzucker, Körperfett, Gewicht und Blutdruck, unabhängig von Insulin. Die zusätzliche Natriumausscheidung entlastet Herz und Nieren. Diskutiert wird außerdem, dass SGLT2-Hemmer Zellen in einen fastenähnlichen Zustand versetzen (Hypothese, Packer 2020); bei Mäusen verringerte SGLT2-Hemmung seneszente Zellen über eine bessere Immunabwehr (Katsuumi 2024).',
    benefits: [
      'Herzschwäche: weniger Verschlechterungen und kardiovaskuläre Todesfälle, 16,3 % gegenüber 21,2 % (DAPA-HF, RCT, 4744 Patienten, 2019) und 13,8 % gegenüber 17,1 % bei erhaltener Pumpfunktion (EMPEROR-Preserved, 5988 Patienten, 2021), mit und ohne Diabetes',
      'Nierenschutz: Fortschreiten der Nierenerkrankung -37 %, auch bei 15.605 Teilnehmenden ohne Diabetes (Meta-Analyse, 13 RCTs, 90.409 Teilnehmende, Lancet 2022)',
      'Geringere Sterblichkeit bei Hochrisiko-Patienten: Tod jeder Ursache 5,7 % gegenüber 8,3 % (EMPA-REG OUTCOME, 7020 Menschen mit Typ-2-Diabetes, 2015); HR 0,92 in der Meta-Analyse von 5 Herzinsuffizienz-Studien mit 21.947 Teilnehmenden (2022)',
      'Etwas weniger Gewicht und Fett: -1,93 kg gegenüber Placebo nach 24 Wochen (Empagliflozin, Fachinformation); Meta-Analyse 18 Studien: -2,73 kg, Fettmasse -1,16 kg (Typ-2-Diabetes, 2022)',
      'Hinweise auf Alterungseffekte: seltenere Demenz, HR 0,65 (Kohorte, 110.885 Paare, BMJ 2024, beobachtend); bei Mäusen weniger seneszente Zellen (2024) und +5,9 % mediane Überlebenszeit männlicher Tiere unter Empagliflozin (Einzelstudie, 2024)'
    ],
    risks: [
      'Keine Studien an gesunden Menschen: Lebensverlängerung nur bei Mäusen, im ITP bei Canagliflozin nur bei männlichen Tieren; Longevity-Nutzung ist Off-Label',
      'Genitale Pilzinfektionen: Empagliflozin 10 mg 4,0 % gegenüber 1,0 % unter Placebo, Dapagliflozin bei Frauen 8,4 % gegenüber 1,2 %; dazu Harnwegsinfekte',
      'Ketoazidose, auch bei fast normalem Blutzucker und laut Fachinformation auch ohne Diabetes berichtet; Risiko bei eingeschränkter Nahrungsaufnahme, Fasten, Dehydratation, Operation und Alkohol',
      'Flüssigkeitsmangel und Blutdruckabfall, besonders ab 75 Jahren und mit Diuretika; selten Fournier-Gangrän; Hämatokritanstieg',
      'Muskelmasse: in einer Meta-Analyse -1,01 kg Skelettmuskelmasse, in Langzeitstudien fettfreie Masse nicht signifikant verändert; keine Daten zu Trainierenden',
      'Nicht bei Typ-1-Diabetes, in Schwangerschaft und Stillzeit; mit Insulin oder Sulfonylharnstoffen erhöhtes Unterzuckerungsrisiko'
    ],
    status: 'Deutschland/EU: zugelassene, verschreibungspflichtige Arzneimittel, Dapagliflozin (Forxiga) seit 2012, Empagliflozin (Jardiance) seit 2014; Anwendungsgebiete Typ-2-Diabetes, chronische Herzinsuffizienz und chronische Nierenkrankheit. USA: beide seit 2014 zugelassen (Farxiga, Jardiance). Nutzung zur Longevity, zum Abnehmen oder zur Stoffwechseloptimierung ohne diese Diagnosen ist Off-Label. Die Herz- und Nierenstudien verwendeten 10 mg einmal täglich (Studienangabe, keine Empfehlung). Doping: auf der WADA-Verbotsliste 2026 nicht namentlich genannt. Canagliflozin hat einen eigenen Eintrag.',
    sources: [
      { title: 'Zinman et al. 2015, N Engl J Med – EMPA-REG OUTCOME, weniger kardiovaskuläre Todesfälle und Gesamtsterblichkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/26378978/' },
      { title: 'McMurray et al. 2019, N Engl J Med – DAPA-HF, Herzschwäche mit und ohne Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/31535829/' },
      { title: 'Anker et al. 2021, N Engl J Med – EMPEROR-Preserved, Herzschwäche mit erhaltener Pumpfunktion', url: 'https://pubmed.ncbi.nlm.nih.gov/34449189/' },
      { title: 'Heerspink et al. 2020, N Engl J Med – DAPA-CKD, Nierenschutz und geringere Sterblichkeit', url: 'https://pubmed.ncbi.nlm.nih.gov/32970396/' },
      { title: 'EMPA-KIDNEY Collaborative Group 2023, N Engl J Med – Nierenschutz mit Empagliflozin', url: 'https://pubmed.ncbi.nlm.nih.gov/36331190/' },
      { title: 'Wiviott et al. 2019, N Engl J Med – DECLARE-TIMI 58, keine MACE-Senkung, weniger Herzinsuffizienz', url: 'https://pubmed.ncbi.nlm.nih.gov/30415602/' },
      { title: 'Nuffield Department of Population Health Renal Studies Group 2022, Lancet – Meta-Analyse, 13 Studien, 90.409 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/36351458/' },
      { title: 'Shin et al. 2024, BMJ – geringeres Demenzrisiko, Kohortenstudie', url: 'https://pubmed.ncbi.nlm.nih.gov/39197881/' },
      { title: 'Katsuumi et al. 2024, Nat Aging – SGLT2-Hemmung und seneszente Zellen bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/38816549/' },
      { title: 'EMA – Jardiance, Produktinformation (deutsch)', url: 'https://www.ema.europa.eu/de/documents/product-information/jardiance-epar-product-information_de.pdf' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Longevity'
  },
  {
    id: 'theacrin',
    name: 'Theacrin (Teacrine)',
    altNames: 'Teacrine, TeaCrine, 1,3,7,9-Tetramethylharnsäure, Tetramethyluric acid, Kucha-Tee-Alkaloid (Camellia assamica var. kucha)',
    class: 'Koffeinähnliches Purin-Alkaloid (Methylurat) aus Kucha-Tee, Adenosin-Antagonist im Tierversuch; in der EU nicht als Lebensmittelzutat zugelassen',
    emoji: '🍵',
    short: 'Koffein-Verwandter aus dem chinesischen Kucha-Tee, der in kleinen Placebostudien das subjektive Energie- und Fokusgefühl hob und über 8 Wochen ohne Gewöhnung gut verträglich war; mit Koffein kombiniert teils kognitiv besser als mehr Koffein allein. Auf Kraft, Sprint und Ausdauer wirkte Theacrin allein in 4 von 5 Studien nicht, die Studien sind klein und oft herstellerfinanziert.',
    moa: 'Theacrin (1,3,7,9-Tetramethylharnsäure) wird in Kucha-Blättern aus Koffein gebildet und ist strukturell dem Koffein ähnlich (Zheng 2002). Bei Ratten steigerte es die Bewegungsaktivität, hob die Dämpfung durch Adenosin-A1- und -A2A-Agonisten auf und wirkte teilweise über Dopamin-D1- und -D2-Rezeptoren im Nucleus accumbens, ohne Toleranz oder Sensibilisierung (Feduccia 2012). Mausstudien fanden dagegen sedierende Effekte mit verlängertem Non-REM-Schlaf (Xu 2007; Qiao 2017), die Tierdaten sind also uneinheitlich. Beim Menschen erreicht Theacrin die Spitzenkonzentration nach etwa 2 Stunden und hat eine Halbwertszeit von 16 bis 26 Stunden; Koffein erhöht seine Aufnahme (He 2017). Eine Rezeptorwirkung wurde am Menschen nicht gemessen.',
    benefits: [
      'Einzeldosis verbesserte subjektive Energie, Müdigkeit und Konzentration gegenüber Placebo, ohne Puls oder Blutdruck zu verändern (doppelblinde Crossover-Studie, 15 Gesunde, 2017, herstellernah).',
      'Über 8 Wochen gut verträglich, alle Sicherheitsmarker im Normbereich, kein Hinweis auf Gewöhnung (RCT, 60 Gesunde, 2016, herstellerfinanziert).',
      'Weniger Aussetzer im Wachsamkeitstest am Morgen nach Einnahme am Vortag, ohne signifikanten Effekt auf den Schlaf (Crossover-RCT, 22 Männer, 2024, ohne externe Finanzierung).',
      'Kombination aus weniger Koffein plus Theacrin kognitiv mindestens so gut wie doppelt so viel Koffein allein (RCT, 20 Personen mit taktischem Training, 2025).',
      'Längere Zeit bis zur Erschöpfung nach simuliertem Fußballspiel um 27 bis 38 %, knapp nicht signifikant (Crossover, 24 Fußballer, 2019).',
      'Im Tierversuch anregend ohne Toleranzentwicklung (Ratten, 2012); antidepressiva-ähnliche Effekte in gestressten Mäusen (2021).'
    ],
    risks: [
      'Kein Leistungseffekt von Theacrin allein bei Kraft, Mannschaftssport-Tests, Radzeitfahren und Kanusprint (4 kontrollierte Studien, 12 bis 22 Teilnehmer, 2019 bis 2025).',
      'Höhere Studiendosen erhöhten Ruheblutdruck und Cortisol und verursachten Magen-Darm-Beschwerden, Herzrasen-Gefühl, Schwindel, Kopfschmerz und Zittern (2 Studien mit je 19 Personen, 2025 und 2026).',
      'Alle Humanstudien klein, kurz (Einzeldosis bis 8 Wochen) und an Gesunden, mehrere vom Hersteller finanziert; Tierdaten widersprüchlich (anregend bei Ratten, sedierend bei Mäusen).',
      'Koffein erhöht die aufgenommene Theacrin-Menge; lange Halbwertszeit von 16 bis 26 Stunden – späte Einnahme mit Bedacht.',
      'Nicht untersucht in Schwangerschaft, Stillzeit, bei Kindern und Jugendlichen sowie bei Bluthochdruck, Herzrhythmusstörungen oder Angststörungen.'
    ],
    status: 'EU/DE: kein Eintrag im Novel-Food-Statuskatalog und nicht in der Unionsliste, also nicht als Lebensmittelzutat zugelassen; Schweden meldete Theacrin 2020 und 2021 dreimal im RASFF als Novel Food in Nahrungsergänzungsmitteln, keine deutsche Meldung gefunden. Das oft beigemischte Methylliberin ist laut Katalog nicht zugelassenes Novel Food. Kein Arzneimittel, nicht verschreibungspflichtig, nicht im BtMG. USA: als Zutat von Nahrungsergänzungsmitteln im Handel. WADA-Liste 2026: nicht genannt, Anti-Doping-Status laut Analyse von 2025 unklar; Koffein nur im Monitoring-Programm.',
    sources: [
      { title: 'Taylor et al. 2016, J Int Soc Sports Nutr – 8 Wochen Sicherheit, 60 Gesunde, keine Gewöhnung', url: 'https://pubmed.ncbi.nlm.nih.gov/26766930/' },
      { title: 'Ziegenfuss et al. 2017, J Diet Suppl – Energie, Müdigkeit und Konzentration nach Einzeldosis', url: 'https://pubmed.ncbi.nlm.nih.gov/27164220/' },
      { title: 'He et al. 2017, J Caffeine Adenosine Res – Wechselwirkung mit Koffein, Kinetik', url: 'https://pubmed.ncbi.nlm.nih.gov/28875060/' },
      { title: 'Feduccia et al. 2012, Pharmacol Biochem Behav – Adenosin- und Dopaminwirkung bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/22579816/' },
      { title: 'Cesareo et al. 2019, J Int Soc Sports Nutr – kein Effekt auf Kraft und Ausdauer', url: 'https://pubmed.ncbi.nlm.nih.gov/31660991/' },
      { title: 'Bello et al. 2019, J Int Soc Sports Nutr – Fußball-Simulation, Ausdauer-Tendenz', url: 'https://pubmed.ncbi.nlm.nih.gov/30999897/' },
      { title: 'Gardiner et al. 2024, Sci Rep – Wachsamkeit am Folgetag, Schlaf unverändert', url: 'https://pubmed.ncbi.nlm.nih.gov/39562624/' },
      { title: 'Vieira-Cavalcante et al. 2025, Appl Physiol Nutr Metab – kein Effekt im Radzeitfahren, Nebenwirkungen', url: 'https://pubmed.ncbi.nlm.nih.gov/40048726/' },
      { title: 'Lints et al. 2025, J Int Soc Sports Nutr – Koffein plus Theacrin und Kognition', url: 'https://pubmed.ncbi.nlm.nih.gov/40693646/' },
      { title: 'RASFF 2020.2471 – Schweden: Theacrin als Novel Food in Nahrungsergänzungsmitteln', url: 'https://webgate.ec.europa.eu/rasff-window/screen/notification/429933' }
    ],
    community: [
      { title: 'biolabshop (Suche „Teacrine")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'dmg',
    name: 'DMG (N,N-Dimethylglycin)',
    altNames: 'N,N-Dimethylglycin, Dimethylglycine, DMG-HCl, DMG-Natriumsalz, DMG-Na, Pangamsäure, Vitamin B15 (historisch, kein Vitamin)',
    class: 'Körpereigenes Glycin-Derivat aus dem Betain-Stoffwechsel; als Nahrungsergänzung angeboten, Novel-Food-Status in der EU ungeklärt',
    emoji: '🧪',
    short: 'Körpereigenes Zwischenprodukt des Betain-Stoffwechsels, gut verträglich bis 12 Monate; eine doppelblinde Studie mit 20 Freiwilligen fand 1981 eine vierfach stärkere Impfantwort. Placebokontrollierte Studien zu Autismus, Epilepsie, MS, Sportleistung und Mitochondrienkrankheit fanden keinen Effekt, sie waren allerdings klein.',
    moa: 'DMG entsteht, wenn Betain über die Betain-Homocystein-Methyltransferase (BHMT) eine Methylgruppe an Homocystein abgibt, und bremst dieses Enzym als Rückkopplung (McGregor 2001). In den Mitochondrien baut die folat- und flavinabhängige Dimethylglycin-Dehydrogenase DMG zu Sarkosin und weiter zu Glycin ab; ein angeborener Defekt führt zu stark erhöhtem DMG, Muskelmüdigkeit und Fischgeruch (Binzak 2001). Beworben wird eine bessere Sauerstoffnutzung und Radikalfängerwirkung: Das Natriumsalz wirkt im Reagenzglas und bei Mäusen antioxidativ (Bai 2016), am Menschen änderte DMG den Sauerstoffverbrauch nicht (Liet 2003). In Mäusen wirkt DMG an der Glycin-Bindungsstelle des NMDA-Rezeptors und antidepressiva-ähnlich (Lin 2016).',
    benefits: [
      'Vierfach stärkere Antikörperantwort auf Pneumokokken-Impfung, höhere zelluläre Immunreaktion (doppelblind, 20 Freiwillige, Graber 1981) – nie wiederholt; mehr als vierfache Impfantwort bei Kaninchen (Reap 1990)',
      'Gut verträglich über 12 Monate mit 125 mg pro Tag, Nebenwirkungen wie Placebo (RCT, 30 MS-Patienten, Wolfsegger 2021); keine Toxizität mit bis zu 600 mg pro Tag über 28 Tage (RCT, 19 Epilepsie-Patienten, Gascon 1989)',
      'Äußerlich als Natriumsalz mit Koffein im Shampoo weniger Haarausfall im Zupftest: −2,8 vs. 0,6 Haare (RCT, 154 Männer, 24 Wochen, Celleno 2025, herstellerfinanziert) – betrifft nicht die Einnahme',
      'Antioxidativ im Reagenzglas und bei Mäusen (Bai 2016); antidepressiva-ähnlich bei Mäusen über den NMDA-Rezeptor (Lin 2016)'
    ],
    risks: [
      'Hauptversprechen nicht bestätigt: kein Effekt bei Autismus (RCT, 37 Kinder, 4 Wochen, Kern 2001; Crossover, 8 Personen, Bolman 1999), Epilepsie (19 Personen, Gascon 1989), progredienter MS (30 Personen, 12 Monate, Wolfsegger 2021), Laufbandleistung (16 Athleten, Pangamsäure, Gray 1982)',
      'Alle Humanstudien klein (5 bis 37 Teilnehmende) und meist nur Wochen lang; keine systematischen Langzeit-Sicherheitsdaten, keine Daten zu Schwangerschaft und Stillzeit',
      'Hohe körpereigene DMG-Spiegel gehen mit mehr Herzinfarkten einher, HR 1,95 (Kohorte, 4150 Patienten, Svingen 2013) – Beobachtung, zur Einnahme nicht untersucht',
      'DMG hemmt die BHMT, einen Abbauweg für Homocystein (McGregor 2001); Wirkung der Einnahme auf Homocystein nicht gemessen',
      'Bei Autismus oder Epilepsie kein Ersatz für eine wirksame Behandlung'
    ],
    status: 'EU/DE: kein Eintrag im Novel-Food-Statuskatalog (rechtlich nicht bindende Orientierungshilfe) und nicht als neuartiges Lebensmittel zugelassen; eine Verwendung als Lebensmittel in der EU vor 1997 wurde nicht belegt gefunden, der Status ist damit ungeklärt. Wird dennoch über deutsche Versandapotheken als Nahrungsergänzung angeboten; keine RASFF-Meldung. Kein Arzneimittel, nicht verschreibungspflichtig, nicht verboten. DMG-Natriumsalz ist in der EU als Futtermittelzusatz für Masthühner zugelassen. USA: seit 1974 als Nahrungsergänzung vermarktet; die FDA sah 1978 keine Belege für die Versprechen der Pangamsäure. WADA-Liste 2026: nicht genannt.',
    sources: [
      { title: 'Graber et al. 1981, J Infect Dis – vierfach stärkere Impfantwort, 20 Freiwillige', url: 'https://pubmed.ncbi.nlm.nih.gov/6163829/' },
      { title: 'Kern et al. 2001, J Child Neurol – Autismus, 37 Kinder, kein Unterschied zu Placebo', url: 'https://pubmed.ncbi.nlm.nih.gov/11305684/' },
      { title: 'Gascon et al. 1989, Epilepsia – Epilepsie, 19 Patienten, keine Wirkung auf Anfälle', url: 'https://pubmed.ncbi.nlm.nih.gov/2463912/' },
      { title: 'Wolfsegger et al. 2021, Neurol Res Pract – progrediente MS, 12 Monate, kein Effekt, gut verträglich', url: 'https://pubmed.ncbi.nlm.nih.gov/34024278/' },
      { title: 'Gray und Titlow 1982, Med Sci Sports Exerc – Pangamsäure, keine Leistungssteigerung', url: 'https://pubmed.ncbi.nlm.nih.gov/7162387/' },
      { title: 'Liet et al. 2003, J Pediatr – Sauerstoffverbrauch bei COX-Mangel unverändert', url: 'https://pubmed.ncbi.nlm.nih.gov/12520257/' },
      { title: 'McGregor et al. 2001, Kidney Int – DMG hemmt die BHMT, Zusammenhang mit Homocystein', url: 'https://pubmed.ncbi.nlm.nih.gov/11380830/' },
      { title: 'Svingen et al. 2013, Arterioscler Thromb Vasc Biol – Plasma-DMG und Herzinfarktrisiko', url: 'https://pubmed.ncbi.nlm.nih.gov/23723367/' }
    ],
    community: [
      { title: 'biolabshop (Suche „DMG")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'gamma-butyrobetain',
    name: 'Gamma-Butyrobetain (GBB)',
    altNames: 'GBB, γ-Butyrobetain, gamma-Butyrobetaine, 4-(Trimethylammonio)butanoat, Deoxycarnitin, GBB-Ethylester, GBB-HCl, Carnitin-Vorstufe',
    class: 'Letzte Vorstufe der körpereigenen Carnitinsynthese, als isolierter Stoff in der EU nicht zugelassen',
    emoji: '🔥',
    short: 'Direkte Vorstufe von L-Carnitin, die beim Menschen die Carnitinbildung in einer Studie von 1989 deutlich stärker steigerte als andere Vorstufen. Eine kontrollierte Studie zu Fettabbau oder Leistung gibt es nicht, und bei Gefäßpatienten gehen hohe GBB-Blutwerte mit schlechterer Prognose einher.',
    moa: 'GBB entsteht im Körper aus Bausteinen der Aminosäure Lysin und wird vom Enzym GBB-Hydroxylase (BBOX1) zu L-Carnitin umgebaut, beim Menschen unter anderem in der Niere (Rebouche & Engel 1980). Ein genetischer Ausfall von BBOX1 führt zu Carnitinmangel mit erhöhtem GBB (Li 2025). Darmbakterien bilden aus Nahrungscarnitin ebenfalls GBB und bauen es weiter zu TMA und TMAO ab (Koeth 2014, Maus). Meldonium ist ein Strukturanalogon von GBB, hemmt die GBB-Hydroxylase und den Carnitin-Transporter OCTN2 und lässt GBB ansteigen, bei Gesunden über 4 Wochen etwa auf das Doppelte (Liepinsh 2011). Die in Produkten verbreiteten GBB-Ester sind pharmakologisch etwas anderes: Der Methylester wirkt bei Ratten acetylcholinartig an muskarinischen Rezeptoren, GBB selbst nicht (Dambrova 2004).',
    benefits: [
      'Stärkere Carnitinbildung als andere Vorstufen: GBB zu carnitinarmer Kost über 10 Tage (Mensch, unkontrollierte Fütterungsstudie, Rebouche 1989) – einzige Humanstudie zur Einnahme',
      'Hob bei Ratten nach einer Einzelgabe das Gewebe-Carnitin ebenso stark wie die gleiche Menge L-Carnitin (Tierstudie, Sandor 1991)',
      'Bei Mäusen mit Carnitin-Transporter-Defekt Plasma-Carnitin etwa doppelt so hoch wie der Kontrollwert, Leberfettsäuren normalisiert; bei gesunden Mäusen kaum Effekt (Tierstudie, Higashi 2001)',
      'Mehr GBB im Gefäßgewebe schwächte bei Ratten die durch hohe Glukose ausgelöste Endothelfunktionsstörung ab (Vilskersts 2013); unter Meldonium stieg GBB im Rattenherz 7-fach, die Herzschutzwirkung hing mit dem Anstieg zusammen (Liepinsh 2006) – indirekte Tierdaten',
      'Physiologische Bedeutung am Menschen bestätigt: Ausfall des Enzyms BBOX1 führt zu Carnitinmangel mit erhöhtem GBB (3 Patienten aus 2 Familien, Li 2025)'
    ],
    risks: [
      'Keine randomisierte, placebokontrollierte Studie am Menschen; keine Daten zu Fettabbau, Energieverbrauch oder Leistung, keine registrierte Studie bei ClinicalTrials.gov (Abfrage 30.09.2026)',
      'TMAO-Achse: GBB wird von Darmbakterien zu TMA und TMAO umgebaut und beschleunigte bei Mäusen die Atherosklerose (Koeth 2014)',
      'Hohe GBB-Blutwerte bei Gefäßpatienten mit schlechterer Prognose verbunden: kardiovaskulärer Tod HR 3,3 (264 Patienten, Skagen 2016), schwere Beinereignisse HR 1,93 (395 Patienten, Chen 2025) – Beobachtungsdaten, nicht kausal',
      'In Produkten meist als Ester: Der Methylester wirkt bei Ratten acetylcholinartig und senkt den Blutdruck (Dambrova 2004); das in der Szene beschriebene starke Schwitzen ist am Menschen nicht untersucht',
      'Keine Sicherheitsdaten zu Langzeiteinnahme, Schwangerschaft, Stillzeit, Kindern und Wechselwirkungen; keine amtlichen Obergrenzen'
    ],
    status: 'In der EU weder Arzneimittel noch zugelassenes neuartiges Lebensmittel: kein Eintrag im Novel-Food-Katalog und in der Unionsliste (Abfrage 30.09.2026); ein nennenswerter Verzehr vor dem 15.05.1997 ist nicht belegt. Der Katalog ist nicht rechtsverbindlich, eine behördliche Einstufung haben wir nicht gefunden: Novel-Food-Status nicht ermittelt, Verkehrsfähigkeit als Nahrungsergänzung offen (VO (EU) 2015/2283). USA: in Sportprodukten im Handel (Händlerangaben). Doping: GBB steht nicht namentlich auf der WADA-Liste 2026; das Strukturanalogon Meldonium ist seit 2016 verboten (S4.4.3, jederzeit).',
    sources: [
      { title: 'Rebouche et al. 1989, J Nutr – GBB steigert beim Menschen die Carnitinbildung stärker als andere Vorstufen (10 Tage, unkontrolliert)', url: 'https://pubmed.ncbi.nlm.nih.gov/2516120/' },
      { title: 'Rebouche & Engel 1980, J Biol Chem – Carnitinsynthese aus GBB in der menschlichen Niere', url: 'https://pubmed.ncbi.nlm.nih.gov/6773946/' },
      { title: 'Sandor 1991, Biochim Biophys Acta – GBB hebt Carnitin bei Ratten so stark wie L-Carnitin', url: 'https://pubmed.ncbi.nlm.nih.gov/2036448/' },
      { title: 'Li et al. 2025, NPJ Genom Med – BBOX1-Defekt: Carnitinmangel und erhöhtes GBB', url: 'https://pubmed.ncbi.nlm.nih.gov/41022783/' },
      { title: 'Koeth et al. 2014, Cell Metab – GBB als proatherogenes Zwischenprodukt auf dem Weg zu TMAO (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/25440057/' },
      { title: 'Skagen et al. 2016, Atherosclerosis – GBB im Serum und kardiovaskulärer Tod (264 Patienten)', url: 'https://pubmed.ncbi.nlm.nih.gov/26868510/' },
      { title: 'Chen et al. 2025, J Am Heart Assoc – GBB und schwere Beinereignisse bei pAVK (395 Patienten)', url: 'https://pubmed.ncbi.nlm.nih.gov/40820985/' },
      { title: 'Dambrova et al. 2004, Naunyn Schmiedebergs Arch Pharmacol – GBB-Methylester, nicht GBB, wirkt muskarinisch', url: 'https://pubmed.ncbi.nlm.nih.gov/15060760/' },
      { title: 'Liepinsh et al. 2011, J Pharm Pharmacol – Meldonium senkt Carnitin um 18 % und verdoppelt GBB bei Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/21827492/' }
    ],
    community: [
      { title: 'biolabshop (Suche „Gamma-Butyrobetain")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'calcium-d-glucarat',
    name: 'Calcium-D-Glucarat',
    altNames: 'Calcium-Glucarat, Calcium D-glucarate, D-Glucarsäure, Glucarsäure, Zuckersäure, D-Glucaro-1,4-lacton (Wirkform), Saccharolacton',
    class: 'Calciumsalz der Glucarsäure, Vorstufe eines Beta-Glucuronidase-Hemmers, als Nahrungsergänzung in der EU rechtlich ungeklärt',
    emoji: '🍊',
    short: 'Calciumsalz der Glucarsäure aus Obst und Gemüse, aus dem im Körper ein Hemmer der Beta-Glucuronidase entsteht; bei Ratten senkte es die Enzymaktivität und im Brustkrebsmodell die Tumorentwicklung um über 70 %. Für das beworbene Östrogen-Detox gibt es am Menschen keine veröffentlichte kontrollierte Studie, nur einen Kongressbeitrag mit vorläufigen Befunden.',
    moa: 'Glucarsäure entsteht beim Menschen in kleinen Mengen als Endprodukt des Glucuronsäure-Wegs und steckt in Orangen, Äpfeln, Grapefruit und Kohlgemüse (Zółtaszek 2008). Aus Calcium-D-Glucarat bildet sich im Magen D-Glucaro-1,4-lacton, das aufgenommen, in die Organe verteilt und über den Urin ausgeschieden wird (Walaszek 1997, Ratte). Das Lacton hemmt die Beta-Glucuronidase, ein Enzym in Gewebe und Darmbakterien, das in der Leber an Östrogene und Schadstoffe angehängte Glucuronsäure wieder abspaltet und so deren Ausscheidung verlangsamt (MSKCC). Bei Ratten sank die Enzymaktivität nach einer Einzelgabe im Serum um 57 %, in den Darmbakterien unter glucarathaltigem Futter um 70 % bzw. 54 % (Dwivedi 1990). Der Mechanismus ist nicht einheitlich belegt: In einer Rattenstudie blieben die Enzymspiegel unverändert (Abou-Issa 1993), und in Zellkultur wirkte Glucarat möglicherweise ohne Umweg über das Lacton (Curley 1994).',
    benefits: [
      'Hemmt bei Ratten die Beta-Glucuronidase: Serum −57 %, Leber −44 %, Darmbakterien des Dünndarms −70 % (Tierstudie, Dwivedi 1990)',
      'Brustkrebsmodell der Ratte: Tumorentwicklung um über 70 % gehemmt, Estradiolspiegel gesenkt (Tierstudie, Walaszek 1986); über Initiation und Promotion 50 % weniger Tiere mit Tumoren, 63 % weniger Tumoren je Tier (Abou-Issa 1995)',
      'Weitere Tiermodelle: Darmkrebs mit einem verwandten Glucarat-Salz um etwa 60 % reduziert (Ratte, Yoshimi 2000), Mundhöhlentumoren weniger aggressiv (76 Hamster, Lajolo 2010)',
      'Am Menschen nur ein Kongressbeitrag: Beta-Glucuronidase gesenkt, Glucarsäure im Serum erhöht, gut verträglich (Walaszek 2004, laut MSKCC) – keine Teilnehmerzahl, keine vollständige Veröffentlichung'
    ],
    risks: [
      'Keine veröffentlichte kontrollierte Humanstudie zu Östrogenspiegeln, Beschwerden oder Krebsrisiko; laut MSKCC haben keine klinischen Studien diese Wirkungen am Menschen geprüft, Folgestudien sind nie erschienen',
      'Keine systematischen Sicherheitsdaten am Menschen; keine Daten zu Schwangerschaft, Stillzeit und Kindern',
      'Einfluss auf Medikamente und Hormontherapien, die über Glucuronidierung laufen, nicht untersucht; das Lacton hemmt im Labor möglicherweise auch die glucuronidierenden UGT-Enzyme (Argikar 2018) – bei Antihormon- oder Hormontherapie ärztlich abklären',
      'Einzige RCT mit Calcium-Glucarat nutzte ein Kombinationspräparat (47 prä- und 49 postmenopausale Frauen, 28 Tage); der Effekt auf den Östrogenabbau wird Indol-3-Carbinol und Lignan zugeschrieben (Laidlaw 2010)',
      'Rechtsstatus in der EU ungeklärt: kein Eintrag im Novel-Food-Katalog, nicht in der Liste zulässiger Calciumverbindungen'
    ],
    status: 'Kein Arzneimittel. In der EU weder im Novel-Food-Katalog noch in der Unionsliste zugelassener neuartiger Lebensmittel aufgeführt (Abruf 01.10.2026); ein nennenswerter Verzehr vor dem 15.05.1997 ist nicht belegt, und als Calciumquelle steht es nicht auf der EU-Liste zulässiger Nährstoffverbindungen. Die Verkehrsfähigkeit als Nahrungsergänzungsmittel ist damit ungeklärt (VO (EU) 2015/2283), obwohl es in Deutschland über Versandapotheken und Onlinehändler angeboten wird. Keine amtlichen Höchstmengen von EFSA oder BfR. Nicht auf der WADA-Verbotsliste 2026.',
    sources: [
      { title: 'Memorial Sloan Kettering Cancer Center 2022, About Herbs – Calcium Glucarate: keine klinischen Studien, nur eine vorläufige Humanstudie', url: 'https://www.mskcc.org/cancer-care/integrative-medicine/herbs/calcium-glucarate' },
      { title: 'Walaszek et al. 1986, Carcinogenesis – Calcium-Glucarat hemmt Brusttumoren bei Ratten um über 70 %', url: 'https://pubmed.ncbi.nlm.nih.gov/3091283/' },
      { title: 'Abou-Issa et al. 1995, Anticancer Res – Wirkung in Initiation und Promotion im Brustkrebsmodell der Ratte', url: 'https://pubmed.ncbi.nlm.nih.gov/7645962/' },
      { title: 'Dwivedi et al. 1990, Biochem Med Metab Biol – Beta-Glucuronidase-Hemmung bei Ratten und Glucarat in Lebensmitteln', url: 'https://pubmed.ncbi.nlm.nih.gov/2346674/' },
      { title: 'Walaszek et al. 1997, Cancer Detect Prev – Bildung, Verteilung und Ausscheidung von D-Glucaro-1,4-lacton (Ratte)', url: 'https://pubmed.ncbi.nlm.nih.gov/9101079/' },
      { title: 'Yoshimi et al. 2000, Int J Oncol – Glucarat-Salz senkt Darmtumoren bei Ratten um etwa 60 %', url: 'https://pubmed.ncbi.nlm.nih.gov/10601547/' },
      { title: 'Abou-Issa et al. 1993, Anticancer Res – Glucarat ohne Effekt auf Beta-Glucuronidase-Spiegel bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/8517653/' },
      { title: 'Laidlaw et al. 2010, Breast Cancer (Auckl) – RCT mit Kombinationspräparat inklusive Calcium-Glucarat', url: 'https://pubmed.ncbi.nlm.nih.gov/21234288/' },
      { title: 'EU-Kommission – Novel Food Status Catalogue', url: 'https://ec.europa.eu/food/food-feed-portal/screen/novel-food-catalogue/search' }
    ],
    community: [
      { title: 'biolabshop (Suche „Calcium-D-Glucarat")', url: 'https://biolabshop.de/' }
    ],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
      id: 'tp508',
      name: 'TP508 (Rusalatide, Chrysalin)',
      altNames: 'Rusalatide-Acetat, Rusalatid, Chrysalin, Thrombin-Peptid TP508, TP-508',
      class: 'Synthetisches Thrombin-Fragment (23 Aminosäuren, Prothrombin 508–530), Forschungssubstanz, nie zugelassen',
      emoji: '🩹',
      short: 'Ein Bruchstück aus Thrombin, das in den 2000ern als Heilmittel für Wunden und Knochenbrüche entwickelt wurde. Eine kleine Studie an diabetischen Fußgeschwüren war positiv, die große Studie an Handgelenksbrüchen wurde ohne Nutzen gegenüber Placebo abgebrochen. Zugelassen wurde TP508 nirgends.',
      moa: 'TP508 ist ein synthetisches Peptid aus 23 Aminosäuren (AGYKPDEGKRGDACEGDSGGPFV), das den Abschnitt 508 bis 530 des menschlichen Prothrombins nachbildet. Laut der Entwicklergruppe ist das die Bindungsstelle, über die Thrombin an eine Untergruppe von Rezeptoren auf Fibroblasten andockt, ohne die gerinnungsaktive Spaltfunktion des ganzen Enzyms. In menschlichen Endothelzellen löste TP508 binnen 5 Minuten eine Freisetzung von Stickstoffmonoxid aus, ähnlich stark wie der Wachstumsfaktor VEGF, aber über einen anderen Signalweg (Olszewska-Pazdrak 2010). In Tiermodellen förderte es Gefäßneubildung, Wund- und Frakturheilung; bei Mäusen verbesserte eine einzelne Gabe 24 Stunden nach tödlicher Bestrahlung das Überleben (Kantara 2015). Der Rezeptor ist nicht eindeutig identifiziert; die Entwickler selbst schrieben 2010, die molekularen Mechanismen seien unklar.',
      benefits: [
        'Diabetische Fußgeschwüre: In einer randomisierten, doppelblinden Phase-I/II-Studie mit 60 Teilnehmern heilten unter äußerlich aufgetragenem TP508 mehr als doppelt so viele Geschwüre vollständig ab wie unter Placebo, die mediane Zeit bis zum vollständigen Verschluss sank um etwa 40 % (Fife 2007; der Dosiseffekt wurde in der Per-Protokoll-Auswertung berichtet)',
        'Fersengeschwüre in derselben Studie: 6 von 7 vollständig abgeheilt gegenüber 0 von 5 unter Placebo – eine sehr kleine Teilgruppe',
        'Lokale Reaktionen und Nebenwirkungen waren in dieser Studie gleich häufig wie unter Placebo, schwere Nebenwirkungen wurden nicht berichtet',
        'Wirkweg in Zellkultur beschrieben: rasche NO-Freisetzung in menschlichen Endothelzellen (Olszewska-Pazdrak 2010)'
      ],
      risks: [
        'Die große Studie an Handgelenksbrüchen (Phase 2b, 274 Teilnehmer, eine Gabe an die Bruchstelle) wurde abgebrochen; laut Register zeigte TP508 keinen Nutzen gegenüber Placebo (NCT00131482). Die Entwickler berichten für eine Phase-III-Frakturstudie mit demselben Hauptendpunkt schnellere Heilung im Röntgenbild und einen Effekt bei Frauen mit Osteopenie – der Hauptendpunkt wurde in der Gesamtgruppe verfehlt (Carney 2008)',
        'Alle Humandaten betreffen äußerliche Anwendung auf Wunden oder eine einmalige Gabe direkt an die Bruchstelle; zu wiederholten Injektionen unter die Haut gibt es keine Studie am Menschen',
        'Sicherheitsdaten nur aus kleinen, kurzen Studien, keine Langzeitdaten',
        'Graumarkt-Ware „nur für Forschungszwecke“: Reinheit, Gehalt und Sterilität sind ungeprüft',
        'Im Sport jederzeit verboten (WADA-Liste 2026, S0 nicht zugelassene Substanzen)'
      ],
      status: 'Nirgends zugelassen. Entwickelt wurde TP508 als Chrysalin für Wunden und Knochenbrüche; die Frakturstudie wurde im März 2007 abgebrochen (NCT00131482), eine spätere Studie am Menschen ist im Register nicht eingetragen (Abfrage 05.10.2026). Danach wurde es im Tier als Mittel gegen Strahlenschäden untersucht (Kantara 2015). In Deutschland ist es kein zugelassenes Arzneimittel und nicht als verschreibungspflichtig gelistet; angeboten wird es als Forschungschemikalie. Doping: WADA-Liste 2026 S0, jederzeit verboten.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/17244316/',
      sources: [
        { title: 'Fife C et al., Wound Repair Regen 2007 – Phase I/II, diabetische Fußgeschwüre, 60 Teilnehmer', url: 'https://pubmed.ncbi.nlm.nih.gov/17244316/' },
        { title: 'ClinicalTrials.gov NCT00131482 – Phase 2b bei Handgelenksbruch, 274 Teilnehmer, abgebrochen ohne Nutzen gegenüber Placebo', url: 'https://clinicaltrials.gov/study/NCT00131482' },
        { title: 'Carney DH, Olszewska-Pazdrak B, Expert Opin Pharmacother 2008 – Übersicht der Entwickler, Phase-III-Frakturstudie', url: 'https://pubmed.ncbi.nlm.nih.gov/18803458/' },
        { title: 'Ryaby JT et al., J Bone Joint Surg Am 2006 – Wirkweg und frühe Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/17079379/' },
        { title: 'Olszewska-Pazdrak B et al., J Vasc Res 2010 – NO-Freisetzung in menschlichen Endothelzellen', url: 'https://pubmed.ncbi.nlm.nih.gov/19893317/' },
        { title: 'Kantara C et al., Lab Invest 2015 – Strahlenschäden im Mausmodell, Sequenz und Herkunft', url: 'https://pubmed.ncbi.nlm.nih.gov/26280221/' },
        { title: 'NADA, WADA-Verbotsliste 2026 (informatorische Übersetzung) – S0', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
      ],
      community: [
        { title: 'biolabshop (TP508)', url: 'https://biolabshop.de/' }
      ],
      podcasts: [],
      filterCat: 'Immun'
    },
  {
      id: 'trh',
      name: 'TRH (Protirelin)',
      altNames: 'Thyreoliberin, Thyrotropin-Releasing-Hormon, Protirelin, TRH Ferring, Relefact TRH',
      class: 'Tripeptid-Hormon des Hypothalamus, in Deutschland als Diagnostikum zugelassen, verschreibungspflichtig',
      emoji: '🧬',
      short: 'Das Hormon des Hypothalamus, das die Schilddrüsenachse anstößt – in Deutschland für den TRH-Test zugelassen. Kleine Studien sahen eine rasche, kurze Stimmungsaufhellung bei Depression; die großen Studien zur Lungenreifung Frühgeborener fanden keinen Nutzen und mehr Nebenwirkungen.',
      moa: 'TRH (Thyreoliberin, als Arzneistoff Protirelin) wird im Hypothalamus gebildet und gelangt über die Portalgefäße zum Hypophysenvorderlappen. Dort löst es die Ausschüttung von Thyreotropin (TSH) aus, bei Gesunden zugleich von Prolaktin; die höchsten TSH-Spiegel folgen nach 20 bis 30 Minuten. Das Tripeptid wird in Blut und Gewebe rasch abgebaut, die Halbwertszeit im Serum liegt bei etwa 3 bis 6,5 Minuten (Fachinformation TRH Ferring). Daneben werden TRH Wirkungen auf Antrieb und Stimmung zugeschrieben. Aus dem Blut gelangt es aber schlecht ins Gehirn, weshalb eine Forschergruppe es Depressiven direkt in den Rückenmarkskanal gab (Marangell 1997). Wie die Stimmungswirkung zustande kommt, ist nicht geklärt.',
      benefits: [
        'Diagnostik: Der TRH-Test zeigt über den TSH-Anstieg nach etwa 30 Minuten, wie Schilddrüse und Hypophyse reagieren; dafür ist Protirelin in Deutschland zugelassen (Fachinformation TRH Ferring)',
        'Depression: 5 von 8 therapieresistenten Patienten sprachen auf TRH im Rückenmarkskanal an, die Suizidalität sank deutlich (doppelblind gegen Schein-Punktion, Marangell 1997)',
        'Bipolare Depression: Nach einer nächtlichen Infusion halbierten 60 % gegenüber 10 % unter Kochsalz ihren Depressionswert binnen 24 Stunden (20 Patienten, Szuba 2005)',
        'Krebsbedingte Erschöpfung: In einer kleinen Pilot-Crossover-Studie mit 8 Teilnehmern besserten sich Energie- und Erschöpfungswerte (Kamath 2012)'
      ],
      risks: [
        'Lungenreifung bei drohender Frühgeburt: In 15 Studien mit über 4.600 Frauen brachte TRH zusätzlich zu Kortison keinen Nutzen; die Kinder brauchten häufiger Atemunterstützung (RR 1,16) und hatten häufiger niedrige Apgar-Werte (RR 1,48) (Cochrane 2013)',
        'Stimmungseffekte sind kurz; bei wiederholter Gabe in die Vene beschrieb eine Arbeitsgruppe an 2 Patienten eine nachlassende Wirkung (Callahan 1997)',
        'Nebenwirkungen schon bei der Einzelgabe: Hitzegefühl, Übelkeit, Harndrang, Kopfschmerzen, Flush, Blutdruck- und Pulsanstieg; selten Krampfanfälle bei Neigung dazu und Asthmaanfälle bei Asthmatikern (Fachinformation)',
        'Bei großen Hypophysentumoren sind Tumorvergrößerung und Einblutung in zeitlichem Zusammenhang mit der Gabe beschrieben; Gegenanzeigen u. a. akuter Herzinfarkt, instabile Angina pectoris, erhöhte Krampfbereitschaft, ausgeprägte Bronchialobstruktion',
        'ALS: Weder einzelne Infusionen noch tägliche Injektionen über 3 Monate zeigten einen Nutzen (Mitsumoto 1986)',
        'Wiederholte Anwendung bei Gesunden ist nicht untersucht; Protirelin ist verschreibungspflichtig, Graumarkt-Ware ist ungeprüft'
      ],
      status: 'Deutschland: TRH Ferring 0,2 mg/ml Injektionslösung zugelassen (Zulassung 01.09.1998, verlängert 04.08.2015), verschreibungspflichtig. Einziges Anwendungsgebiet ist der TRH-Test in der Schilddrüsen- und Hypophysendiagnostik; zugelassen ist dafür bei Erwachsenen in der Regel eine einmalige Gabe von 200 µg in die Vene. Die Nutzung gegen Depression, Erschöpfung oder als Antriebsmittel ist Off-Label und nicht belegt. Doping: In der WADA-Liste 2026 ist Protirelin nicht namentlich aufgeführt; S0 greift nicht, weil es als Arzneimittel zugelassen ist.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/24265169/',
      sources: [
        { title: 'Fachinformation TRH Ferring 0,2 mg/ml Injektionslösung (Stand 08/2015) – Anwendungsgebiet, Dosierung, Nebenwirkungen', url: 'https://www.fachinfo.de/fi/detail/003946/trh-ferring-0-2-mg-injektionsloesung' },
        { title: 'Crowther CA et al., Cochrane 2013 – TRH zusätzlich zu Kortison vor Frühgeburt, 15 Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/24265169/' },
        { title: 'ACTOBAT Study Group, Lancet 1995 – TRH vor Frühgeburt, 1.234 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/7707809/' },
        { title: 'Ballard RA et al., N Engl J Med 1998 – TRH vor Frühgeburt, 996 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/9468465/' },
        { title: 'Marangell LB et al., Arch Gen Psychiatry 1997 – TRH in den Rückenmarkskanal bei therapieresistenter Depression', url: 'https://pubmed.ncbi.nlm.nih.gov/9075462/' },
        { title: 'Szuba MP et al., J Clin Psychopharmacol 2005 – nächtliche TRH-Infusion bei bipolarer Depression', url: 'https://pubmed.ncbi.nlm.nih.gov/16012274/' },
        { title: 'Callahan AM et al., Biol Psychiatry 1997 – TRH in Vene und Rückenmarkskanal, Toleranz', url: 'https://pubmed.ncbi.nlm.nih.gov/9024949/' },
        { title: 'Kamath J et al., Support Care Cancer 2012 – TRH bei krebsbedingter Erschöpfung', url: 'https://pubmed.ncbi.nlm.nih.gov/21947558/' },
        { title: 'Mitsumoto H et al., Neurology 1986 – TRH bei ALS', url: 'https://pubmed.ncbi.nlm.nih.gov/3080695/' },
        { title: 'NADA, WADA-Verbotsliste 2026 (informatorische Übersetzung)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
      ],
      community: [],
      podcasts: [],
      filterCat: 'Sonstige'
    },
  {
      id: 'lz1',
      name: 'LZ1',
      altNames: 'LZ1-Peptid, LZ-1, VKRWKKWWRKWKKWV-NH2',
      class: 'Synthetisches antimikrobielles Peptid (15 Aminosäuren), vom Schlangen-Cathelicidin abgeleitet, Forschungssubstanz',
      emoji: '🛡️',
      short: 'Ein im Labor entworfenes Abwehrpeptid aus 15 Aminosäuren, das als Mittel gegen Akne gehandelt wird. In Zellkultur und bei Mäusen wirkte es gegen Aknebakterien und entzündungshemmend. Am Menschen ist es nicht untersucht, und eine unabhängige Laborprüfung fand eine deutlich schwächere Wirkung.',
      moa: 'LZ1 hat die Sequenz VKRWKKWWRKWKKWV-NH2 und wurde 2013 von einer chinesischen Arbeitsgruppe als neu entworfenes antimikrobielles Peptid beschrieben (Zhang 2013); spätere Arbeiten derselben Gruppe führen es als Abkömmling eines Cathelicidins aus Schlangengift (Fang 2019, Xu 2019). Im Reagenzglas tötete es Aknebakterien sowie Staphylococcus epidermidis und S. aureus und hemmte die Ausschüttung der Entzündungsbotenstoffe TNF-α und IL-1β. In Malaria-infizierten roten Blutkörperchen hemmte es die Pyruvatkinase und damit die Energiegewinnung des Erregers (Fang 2019). In Bauchspeicheldrüsenkrebs-Zellen band es an Nucleolin auf der Zelloberfläche und löste über AMPK einen autophagieabhängigen Zelltod aus (Xu 2019). Alle diese Befunde stammen aus Zellkultur und Mausmodellen.',
      benefits: [
        'Im Reagenzglas hemmte LZ1 drei Stämme des Aknebakteriums bei 0,6 µg/ml, laut Autoren einer viermal niedrigeren Konzentration als Clindamycin (Zhang 2013)',
        'Im Mausohr-Modell senkte ein LZ1-Gel Bakterienzahl, Schwellung und Entzündungszellen (Zhang 2013)',
        'Wenig Zellschädigung an menschlichen Keratinozyten, keine nennenswerte Auflösung roter Blutkörperchen und stabil in menschlichem Plasma (Zhang 2013); eine unabhängige Gruppe sah ebenfalls keine Hämolyse und keine Schädigung von Keratinozyten bis 200 µg/ml (Ramata-Stunda 2023)',
        'Weitere Laborbefunde: Wirkung gegen Malariaerreger in Zellkultur und Maus (Fang 2019), Wachstumshemmung von Bauchspeicheldrüsenkrebs in Zellkultur und Maus (Xu 2019)'
      ],
      risks: [
        'Keine einzige Studie am Menschen; ClinicalTrials.gov führt keine Studie (Abfrage 05.10.2026)',
        'Unabhängige Nachprüfung schwächer: Gegen Aknebakterien lag die minimale Hemmkonzentration bei 8 µg/ml statt unter 1 µg/ml, und an Mäuse-Bindegewebszellen (Balb/c 3T3) wirkte LZ1 ab 62,5 µg/ml schädigend (Ramata-Stunda 2023)',
        'Verträglichkeit nur in Zellkultur und kurzen Mausversuchen geprüft; Daten zu Hautreizung, Allergie und Langzeitanwendung am Menschen fehlen, zu Injektionen gibt es keine',
        'Graumarkt-Ware „nur für Forschungszwecke“: Reinheit, Gehalt und Sterilität sind ungeprüft',
        'Als nicht zugelassene, pharmakologisch wirksame Substanz fällt LZ1 unter S0 der WADA-Liste 2026 und ist im Sport jederzeit verboten'
      ],
      status: 'Nirgends als Arzneimittel zugelassen, keine klinische Entwicklung bekannt; im Register ClinicalTrials.gov ist keine Studie eingetragen (Abfrage 05.10.2026). In Deutschland nicht zugelassen und nicht als verschreibungspflichtig gelistet; angeboten wird es als Forschungschemikalie. Doping: WADA-Liste 2026 S0, jederzeit verboten.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/24013774/',
      sources: [
        { title: 'Zhang Z et al., PLoS One 2013 – LZ1 gegen Aknebakterien, Zellkultur und Maus', url: 'https://pubmed.ncbi.nlm.nih.gov/24013774/' },
        { title: 'Fang Y et al., Toxins 2019 – LZ1 gegen Malaria, Zellkultur und Maus', url: 'https://pubmed.ncbi.nlm.nih.gov/31262018/' },
        { title: 'Xu C et al., Oncogene 2019 – LZ1, Nucleolin und Autophagie bei Bauchspeicheldrüsenkrebs', url: 'https://pubmed.ncbi.nlm.nih.gov/30356139/' },
        { title: 'Ramata-Stunda A et al., Antibiotics 2023 – unabhängiger Laborvergleich antimikrobieller Peptide inklusive LZ1', url: 'https://pubmed.ncbi.nlm.nih.gov/36978418/' },
        { title: 'ClinicalTrials.gov – Registerabfrage „LZ1“ ohne passenden Eintrag', url: 'https://clinicaltrials.gov/search?term=LZ1%20peptide' },
        { title: 'NADA, WADA-Verbotsliste 2026 (informatorische Übersetzung) – S0', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
      ],
      community: [],
      podcasts: [],
      filterCat: 'Immun'
    },
  {
    id: 'lipotropin',
    name: 'Lipotropin (als Fettabbau-Peptid verkauft)',
    altNames: 'Beta-Lipotropin, β-LPH, LPH; im Handel teils als Wachstumshormon-Fragment 176-191 beschrieben',
    class: 'Handelsname mit unklarer Identität: körpereigenes Hypophysenhormon (Beta-Lipotropin) oder Wachstumshormon-Fragment, nicht zugelassen',
    emoji: '🧩',
    short: 'Unter dem Namen „Lipotropin" wird ein Fettabbau-Peptid verkauft, dessen Identität nicht geklärt ist. Echtes Beta-Lipotropin ist ein Hypophysenhormon aus 89 Aminosäuren, das im Zellversuch Fett aus Fettzellen freisetzt. Händlertexte beschreiben die Ware dagegen als 16 Aminosäuren langes Stück des Wachstumshormons (176-191) und nennen im selben Text auch Beta-Lipotropin. Als Fettabbau-Mittel am Menschen geprüft ist keine der beiden Varianten.',
    moa: 'Beta-Lipotropin ist ein Teilstück des Hypophysen-Vorläuferproteins POMC (Richter und Schwandt 1985). 1964 erstmals beschrieben (Li 1964), ist die menschliche Sequenz mit 89 Aminosäuren seit 1981 bekannt; ihre fettfreisetzende Wirksamkeit im Testsystem entsprach der des Schafhormons (Li und Chung 1981). Es ist zugleich Vorstufe von Beta-Endorphin und Enkephalinen: Das intakte Molekül wirkt selbst nicht opioidartig, im Labor entstehen daraus aber Bruchstücke ab Position 61 wie Met-Enkephalin (61-65) und Alpha-Endorphin (61-76), die es tun (Lazarus 1976). In Fettzellen von Kaninchen regte Beta-Lipotropin schon in Konzentrationen nahe den Blutspiegeln die Fettfreisetzung an (Richter und Schwandt 1985). In menschlichem Fettgewebe wirkte keines von 40 getesteten Peptidhormonen im klassischen Zellversuch; erst in einem verbesserten Messsystem setzte Beta-Lipotropin Fett frei, ähnlich stark wie Noradrenalin in gleicher Konzentration (Richter 1988). Was als „Lipotropin" gehandelt wird, beschreiben Händler als Wachstumshormon-Fragment 176-191, das ohne IGF-1-Anstieg den Fettabbau fördern soll – ein anderes Molekül mit eigener, ebenfalls dünner Datenlage (siehe HGH-Fragment 176-191 und AOD-9604). Die Ware wird teils als Kapsel angeboten. Eine unabhängige Analyse, welcher Stoff tatsächlich enthalten ist, liegt nicht vor.',
    benefits: [
      'Beta-Lipotropin ist ein seit 1964 bekanntes körpereigenes Hypophysenhormon; die menschliche Sequenz mit 89 Aminosäuren ist seit 1981 aufgeklärt (Li 1964, Li und Chung 1981)',
      'Regte in Fettzellen von Kaninchen schon in Konzentrationen nahe den Blutspiegeln die Fettfreisetzung an (Richter und Schwandt 1985, Zellversuch)',
      'Setzte in menschlichem Fettgewebe im Reagenzglas Fett frei, vergleichbar mit Noradrenalin in gleicher Konzentration – als einziges Peptid einer getesteten Gruppe von Hypophysenpeptiden (Richter 1988, ex vivo, kein Mensch behandelt)',
      'Falls die Ware die AOD-9604-Sequenz enthält: Sicherheitsdaten aus sechs randomisierten, placebokontrollierten Humanstudien ohne IGF-1-Anstieg und ohne Verschlechterung der Glukosetoleranz – sie gelten nur für genau diese Sequenz (Stier 2013)'
    ],
    risks: [
      'Identität unklar: Der Name steht für ein körpereigenes Hormon, die Händlerbeschreibung für ein Wachstumshormon-Fragment – was enthalten ist, ist nicht unabhängig geprüft',
      'Keine einzige Humanstudie zur Gabe von Beta-Lipotropin als Fettabbau-Mittel; alle Wirkdaten stammen aus Zell- und Gewebeversuchen',
      'Beta-Lipotropin ist Vorstufe opioidartig wirksamer Peptide (Endorphine, Enkephaline); welche Spaltprodukte bei Zufuhr von außen entstehen, ist am Menschen nicht untersucht',
      'Für das Wachstumshormon-Fragment und die verwandte AOD-9604-Sequenz ist am Menschen kein Abnehmeffekt belegt (siehe HGH-Fragment 176-191)',
      'Im Sport: Wachstumshormon-Fragmente wie hGH 176-191 sind nach WADA-Liste 2026 (S2.2.3) jederzeit verboten und stehen in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'In DE, EU und USA kein zugelassenes Arzneimittel; Verkauf als Forschungschemikalie. Beta-Lipotropin ist weder auf der WADA-Liste 2026 noch in der Anlage des Anti-Doping-Gesetzes namentlich genannt. Enthält die Ware das Wachstumshormon-Fragment hGH 176-191, gilt WADA 2026 S2.2.3 (im und außerhalb des Wettkampfs verboten) und die Anlage des Anti-Doping-Gesetzes (Wachstumshormon-Fragmente).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/3235059/',
    sources: [
      { title: 'Li CH, Nature 1964 – Lipotropin, ein neues aktives Peptid aus der Hypophyse', url: 'https://pubmed.ncbi.nlm.nih.gov/14132790/' },
      { title: 'Li CH, Chung D, Int J Pept Protein Res 1981 – Isolierung und Sequenz von Beta-Lipotropin aus menschlichen Hypophysen (89 Aminosäuren)', url: 'https://pubmed.ncbi.nlm.nih.gov/7228494/' },
      { title: 'Lazarus LH et al., PNAS 1976 – Beta-Lipotropin als Vorstufe von Endorphinen und Enkephalinen', url: 'https://pubmed.ncbi.nlm.nih.gov/1064883/' },
      { title: 'Richter WO, Schwandt P, Metabolism 1985 – physiologische Konzentrationen von Beta-Lipotropin regen Lipolyse in Kaninchen-Fettzellen an', url: 'https://pubmed.ncbi.nlm.nih.gov/3999975/' },
      { title: 'Richter WO et al., Horm Metab Res Suppl 1988 – Lipolyse durch Peptidhormone in menschlichem Fettgewebe in vitro', url: 'https://pubmed.ncbi.nlm.nih.gov/3235059/' },
      { title: 'Stier H et al., J Endocrinol Metab 2013 – Sicherheit von AOD9604 in sechs placebokontrollierten Studien', url: 'https://www.jofem.org/index.php/jofem/article/view/157' },
      { title: 'WADA – Prohibited List 2026, S2.2.3 Growth hormone fragments', url: 'https://www.wada-ama.org/en/prohibited-list' },
      { title: 'Anti-Doping-Gesetz, Anlage – Wachstumshormon-Fragmente (AOD-9604, hGH-Fragment 176-191)', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [
      { title: 'biolabshop (Lipotropin)', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'alarelin',
    name: 'Alarelin',
    altNames: 'Alarelinacetat, Alarelin Acetate, GnRH-Agonist',
    class: 'GnRH-Agonist (synthetisches Nonapeptid), in DE, EU und USA nicht zugelassen',
    emoji: '🧬',
    short: 'Ein synthetischer GnRH-Agonist, der vor allem in China klinisch verwendet wird, etwa bei Endometriose und in der künstlichen Befruchtung. Wie seine Verwandten Triptorelin und Leuprorelin schaltet er bei Dauergabe die Hormonachse ab. Im Peptidhandel taucht er als Mittel rund um LH und Testosteron auf – für diesen Einsatz gibt es keine einzige Studie.',
    moa: 'Alarelin ist ein synthetisches Nonapeptid, das wie das körpereigene GnRH am GnRH-Rezeptor der Hypophyse bindet (Yuan 2025). Für die ganze Klasse der GnRH-Agonisten gilt: Nach der ersten Gabe steigen LH, FSH und die Sexualhormone kurz an, bei anhaltender Gabe wird die Hypophyse unempfindlich und die Achse schaltet ab – klinisch erwünscht als umkehrbarer Hypogonadismus bei Endometriose oder hormonabhängigen Tumoren (Yuan 2025; für Triptorelin in der Fachinformation beschrieben). In einer chinesischen Vergleichsstudie zur künstlichen Befruchtung regelte Alarelin die Hypophyse ähnlich zuverlässig herunter wie Triptorelin (Duan 2010). Eigene veröffentlichte Daten zu Rezeptorbindung und Pharmakokinetik am Menschen sind rar. Der im Handel nahegelegte Nutzen für LH und Testosteron widerspricht dem Klassenprinzip: Anregend wirkt nur pulsatil gegebenes GnRH (siehe Gonadorelin), anhaltende Agonisten-Gabe hemmt die Achse.',
    benefits: [
      'Vergleichsstudie zur künstlichen Befruchtung mit 122 Frauen: ähnliche Herunterregulierung der Hypophyse und ähnliche Schwangerschaftsraten wie unter Triptorelin, weniger abgebrochene Zyklen (Duan 2010; Gruppen ungleich groß, Zuteilung nicht als randomisiert beschrieben)',
      'In China als Arzneimittel bei Endometriose und hormonabhängigen Tumoren im Einsatz (Yuan 2025)',
      'Das Wirkprinzip der GnRH-Agonisten ist am Menschen gut verstanden und durch zugelassene Verwandte wie Triptorelin gut dokumentiert'
    ],
    risks: [
      'Erster dokumentierter Fall einer schweren Leberschädigung: gesunde 37-jährige Studienteilnehmerin, Kausalität nach RUCAM-Score 6 als wahrscheinlich bewertet, Leberwerte nach 18 Tagen normalisiert (Yuan 2025, Fallbericht)',
      'Klasseneffekte der GnRH-Agonisten bei Dauergabe: Abfall der Sexualhormone mit Hitzewallungen, Libidoverlust und Abnahme der Knochendichte',
      'Bei Männern als Testosteron- oder LH-Mittel eingesetzt kann es das Gegenteil bewirken: Anhaltende Gabe senkt LH, FSH und Testosteron',
      'Keine Studie zum Einsatz bei Männern zur Unterstützung von Testosteron oder Fruchtbarkeit; Phase-I-Daten sind nicht veröffentlicht',
      'Im Sport bei Männern jederzeit verboten (WADA-Liste 2026, S2.2.1: GnRH und seine agonistischen Analoga)'
    ],
    status: 'In DE, EU und USA nicht zugelassen; in China als Arzneimittel verwendet. Weder in Anlage 1 der Arzneimittelverschreibungsverordnung noch in der Anlage des Anti-Doping-Gesetzes namentlich genannt (dort unter anderem Gonadorelin, Leuprorelin und Triptorelin). Als GnRH-Agonist fällt es unter WADA 2026 S2.2.1, bei Männern im und außerhalb des Wettkampfs verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/20873594/',
    sources: [
      { title: 'Duan JL et al., Zhonghua Nan Ke Xue 2010 – Alarelin gegen Triptorelin im langen Protokoll der künstlichen Befruchtung, 122 Patientinnen', url: 'https://pubmed.ncbi.nlm.nih.gov/20873594/' },
      { title: 'Yuan F et al., Front Med 2025 – Leberschädigung unter Alarelinacetat, Fallbericht und Literaturübersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/41090118/' },
      { title: 'Fachinformation Pamorelin LA 3,75 mg (Triptorelin, Stand 04/2026) – Wirkprinzip der GnRH-Agonisten', url: 'https://www.fachinfo.de/fi/pdf/025739/pamorelin-r-la-3-75-mg' },
      { title: 'WADA – Prohibited List 2026, S2.2.1 Testosterone-stimulating peptides in males', url: 'https://www.wada-ama.org/en/prohibited-list' },
      { title: 'Anti-Doping-Gesetz, Anlage – Releasingfaktoren von CG und LH (namentliche Liste)', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' }
    ],
    community: [
      { title: 'biolabshop (Alarelin)', url: 'https://biolabshop.de/' }
    ],
    filterCat: 'Sonstige'
  },
  {
    id: 'triptorelin',
    name: 'Triptorelin',
    altNames: 'Triptorelinacetat, Triptorelinembonat, Pamorelin LA, Salvacyl, Decapeptyl, GnRH-Agonist',
    class: 'GnRH-Agonist (Depot-Peptid), in Deutschland zugelassen und verschreibungspflichtig',
    emoji: '🧬',
    short: 'Ein langwirksamer GnRH-Agonist, zugelassen bei Prostata- und Brustkrebs und zur Senkung des Sexualtriebs. Anders als Gonadorelin, das im Pulsrhythmus die Hormonachse anregt, schaltet Triptorelin sie nach einem kurzen Anstieg ab – beim Mann bis auf Kastrationsniveau. In Steroid-Foren wird es als einmaliger „Neustart" der Achse nach Anabolika diskutiert; dafür gibt es keine prospektive Studie.',
    moa: 'Triptorelin ist ein synthetisches GnRH-Analogon und wirkt am GnRH-Rezeptor der Hypophyse. Laut Fachinformation steigen nach der Gabe LH, FSH und Testosteron zunächst vorübergehend an; bei längerer, kontinuierlicher Gabe sinken LH und FSH, die Steroidbildung in Hoden und Eierstöcken wird unterdrückt, und beim Mann fällt das Testosteron etwa 2 bis 4 Wochen nach Therapiebeginn in den Bereich nach chirurgischer Kastration. Die Wirkung ist nach dem Absetzen im Allgemeinen umkehrbar. Bei gesunden Männern stieg das Testosteron nach einer einzigen Depotinjektion bis Tag 4 an, sank bis Woche 4 auf ein niedriges Niveau und war erst ab Woche 8 nicht mehr erniedrigt. Abgrenzung zu Gonadorelin: Gonadorelin ist strukturgleich mit dem körpereigenen GnRH, wirkt nur Minuten und regt die Achse nur im Pulsrhythmus an. Triptorelin ist ein gezielt veränderter Agonist, der als Depot über Wochen wirkt – und genau deshalb die Achse abschaltet. Beide binden am selben Rezeptor, verfolgen in der Anwendung aber entgegengesetzte Ziele.',
    benefits: [
      'Prostatakrebs: randomisierte Studie mit 284 Männern – Kastrationsniveau nach 57 Tagen bei 97,7 gegenüber 97,1 Prozent unter Leuprorelin, Erhaltung über 9 Monate gleichwertig (Heyns 2003)',
      'Schutz der Eierstöcke während Chemotherapie: frühe Menopause bei 8,9 gegenüber 25,9 Prozent ohne Triptorelin (PROMISE-GIM6, 281 Frauen mit Brustkrebs, Del Mastro 2011)',
      'Brustkrebs: In SOFT und TEXT (4.690 prämenopausale Frauen) diente Triptorelin der Ovarsuppression; mit Exemestan lag das krankheitsfreie Überleben nach 5 Jahren bei 91,1 gegenüber 87,3 Prozent mit Tamoxifen (Pagani 2014)',
      'In Deutschland als Pamorelin LA seit 2005 zugelassen; Wirkung und Nebenwirkungen in der Fachinformation ausführlich beschrieben'
    ],
    risks: [
      'Erst Anstieg, dann Abschalten: Nach einer einzigen Depotinjektion war das Testosteron bei gesunden Männern ab Woche 4 niedrig und erst ab Woche 8 nicht mehr erniedrigt (Fachinformation)',
      'Folgen des Hormonentzugs: Hitzewallungen, Libidoverlust, Erektionsstörungen, Abnahme der Knochendichte; erhöhtes Risiko für Depressionen, die schwer verlaufen können',
      'QT-Verlängerung möglich; unter Androgenentzug Hinweise auf Glukoseintoleranz und erhöhtes Herz-Kreislauf-Risiko; selten Hypophysenapoplexie bei unerkanntem Hypophysenadenom, Krampfanfälle berichtet',
      'Als „Neustart" nach Anabolika nicht untersucht – in Steroid-Foren wird selbst vor chemischer Kastration durch Fehlanwendung gewarnt (Easton 2025)',
      'Bei Männern im Sport jederzeit verboten (WADA-Liste 2026, S2.2.1); im Anti-Doping-Gesetz namentlich gelistet'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig, unter anderem als Pamorelin LA (Prostata- und Brustkrebs; zugelassene Dosis 3,75 mg alle 4 Wochen) und Salvacyl (Senkung des Sexualtriebs bei erwachsenen Männern mit schwerer sexueller Abnormität, Einleitung durch einen Psychiater; zugelassene Dosis 11,25 mg alle 12 Wochen). Die Anwendung zur Anregung der Hormonachse nach Anabolika ist keine zugelassene Anwendung. Namentlich in der Anlage des Anti-Doping-Gesetzes und auf der WADA-Liste 2026 (S2.2.1).',
    link: 'https://www.fachinfo.de/fi/pdf/025739/pamorelin-r-la-3-75-mg',
    sources: [
      { title: 'Fachinformation Pamorelin LA 3,75 mg (Triptorelin, Stand 04/2026)', url: 'https://www.fachinfo.de/fi/pdf/025739/pamorelin-r-la-3-75-mg' },
      { title: 'Fachinformation Salvacyl 11,25 mg (Triptorelin, Stand 04/2025)', url: 'https://www.fachinfo.de/fi/pdf/011698/salvacyl-r-11-25-mg-pulver-und-loesungsmittel' },
      { title: 'Heyns CF et al., BJU Int 2003 – Triptorelin gegen Leuprorelin bei fortgeschrittenem Prostatakrebs, 284 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/12887472/' },
      { title: 'Del Mastro L et al., JAMA 2011 – PROMISE-GIM6, Triptorelin gegen chemotherapiebedingte frühe Menopause, 281 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/21771987/' },
      { title: 'Pagani O et al., NEJM 2014 – SOFT/TEXT, Exemestan mit Ovarsuppression, 4.690 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/24881463/' },
      { title: 'Easton J et al., Drug Alcohol Rev 2025 – Post-Cycle-Therapie in australischen Steroid-Foren', url: 'https://pubmed.ncbi.nlm.nih.gov/41032454/' },
      { title: 'WADA – Prohibited List 2026, S2.2.1 Testosterone-stimulating peptides in males', url: 'https://www.wada-ama.org/en/prohibited-list' },
      { title: 'Anti-Doping-Gesetz, Anlage – Releasingfaktoren von CG und LH (Triptorelin)', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
      id: 'thymulin',
      name: 'Thymulin',
      altNames: 'Zink-Thymulin, FTS-Zn, Facteur thymique sérique (FTS), Serum-Thymusfaktor, Nonathymulin (synthetische Form)',
      class: 'Thymushormon, Nonapeptid aus 9 Aminosäuren, nur mit gebundenem Zink aktiv',
      emoji: '🛡️',
      short: 'Ein echtes Thymushormon, das nur mit gebundenem Zink wirkt und im Blut ab der Jugend absinkt. In den 1980er-Jahren in kleinen Studien bei Rheuma und Multipler Sklerose geprüft, nie zugelassen. Für die heute beworbene Immunverjüngung gibt es keine Humandaten, für Haarwuchs keine Studie.',
      moa: 'Thymulin wird von den Epithelzellen des Thymus gebildet und besteht aus neun Aminosäuren. Biologisch aktiv ist es nur mit einem gebundenen Zinkion im Verhältnis 1:1, ohne Zink ist das Peptid wirkungslos (Dardenne 1982). Es fördert Reifung und Funktion von T-Zellen. Beim Menschen steigt der Blutspiegel bis ins Alter von 5 bis 10 Jahren, fällt ab der Pubertät und erreicht um das 36. Lebensjahr seinen Tiefstwert, auf dem er bis 80 bleibt (Consolini 2000, 93 Gesunde). Bei leichtem Zinkmangel sinkt die Thymulin-Aktivität im Blut und steigt nach Zinkgabe wieder (Prasad 1988). Eine Mausstudie von 2026 fand, dass Thymulin über eine Hemmung von NF-κB altersbedingte Entzündung in Fresszellen dämpft und die Krebsimmuntherapie verstärkt; behandelt wurden Mäuse, nicht Menschen.',
      benefits: [
        'Gut beschriebenes körpereigenes Hormon: Aufbau, Zinkabhängigkeit und Altersverlauf beim Menschen sind belegt',
        'Zwei randomisierte, doppelblinde Studien bei rheumatoider Arthritis (Amor 1987): globale Besserung bei 56 Prozent unter der wirksamsten Dosisstufe gegenüber 17 Prozent unter Placebo, bei geringen Nebenwirkungen',
        'Fallserie mit drei immundefizienten Kindern (Lancet 1982): seltenere Infekte, bessere Zellabwehr, erstmals messbares IgA; nach Unterbrechung Rückgang, nach Wiederaufnahme erneute Besserung',
        'Mausdaten 2026 (Nat Commun): weniger altersbedingte Entzündung, bessere Tumorkontrolle und stärkeres Ansprechen auf eine Immuntherapie bei alten Tieren'
      ],
      risks: [
        'Die Humanstudien sind klein, stammen aus den 1980er-Jahren und wurden nie wiederholt; zur beworbenen Immunverjüngung gibt es keine Humanstudie, zum Haarwuchs keine Studie',
        'Bei Multipler Sklerose ohne Wirkung: doppelblinde Pilotstudie mit 40 Personen über 6 Monate ohne Unterschied zu Placebo (Roullet 1989)',
        'Sicherheitsdaten nur aus diesen kurzen Studien; Langzeitdaten fehlen, Auswirkungen bei Autoimmunerkrankungen, nach Transplantation oder unter Immuntherapie sind nicht untersucht',
        'Nicht zugelassen; bei Graumarkt-Ware sind Reinheit, Gehalt und Zinkbeladung ungeprüft. Im Sport fällt es als nicht zugelassene Substanz unter Klasse S0 der WADA-Liste (jederzeit verboten)'
      ],
      status: 'Weder in Deutschland noch in der EU oder den USA als Arzneimittel zugelassen. Die synthetische Form Nonathymulin wurde in den 1980er-Jahren klinisch geprüft, eine Zulassung folgte nicht; im Studienregister ClinicalTrials.gov ist keine Studie mit Thymulin als Wirkstoff eingetragen. Angebot als Forschungspeptid.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/3310925/',
      sources: [
        { title: 'Dardenne M et al., Proc Natl Acad Sci USA 1982 – erst gebundenes Zink macht den Serum-Thymusfaktor aktiv (Thymulin)', url: 'https://pubmed.ncbi.nlm.nih.gov/6957870/' },
        { title: 'Consolini R et al., Clin Exp Immunol 2000 – Thymulin-Spiegel bei 93 Gesunden von der Geburt bis 80 Jahre', url: 'https://pubmed.ncbi.nlm.nih.gov/10971509/' },
        { title: 'Prasad AS et al., J Clin Invest 1988 – Thymulin bei leichtem Zinkmangel des Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/3262625/' },
        { title: 'Brignola C et al., Aliment Pharmacol Ther 1993 – Zinkgabe hebt Thymulin bei Morbus Crohn, randomisiert mit 27 Personen', url: 'https://pubmed.ncbi.nlm.nih.gov/8364132/' },
        { title: 'Bordigoni P et al., Lancet 1982 – synthetischer Serum-Thymusfaktor bei drei immundefizienten Kindern', url: 'https://pubmed.ncbi.nlm.nih.gov/6124716/' },
        { title: 'Amor B et al., Ann Rheum Dis 1987 – Nonathymulin bei rheumatoider Arthritis, zwei placebokontrollierte Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/3310925/' },
        { title: 'Roullet E et al., Acta Neurol Scand 1989 – Nonathymulin bei Multipler Sklerose, doppelblinde Pilotstudie mit 40 Personen', url: 'https://pubmed.ncbi.nlm.nih.gov/2618585/' },
        { title: 'Kanemaru H et al., Nat Commun 2026 – Thymulin, Entzündung im Alter und Krebsimmuntherapie (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/42481458/' },
        { title: 'ClinicalTrials.gov – Suche nach Thymulin, keine Studie mit Thymulin als Wirkstoff', url: 'https://clinicaltrials.gov/search?term=thymulin' },
        { title: 'WADA Prohibited List – Klasse S0, nicht zugelassene Substanzen', url: 'https://www.wada-ama.org/en/prohibited-list' }
      ],
      community: [],
      filterCat: 'Immun'
    },
  {
      id: 'pnc-27',
      name: 'PNC-27',
      altNames: 'p53-Penetratin-Peptid, HDM-2-bindendes Anti-Krebs-Peptid; kürzere Variante PNC-28',
      class: 'Synthetisches Hybridpeptid (p53-Abschnitt 12–26 plus Zellpenetrationssequenz Penetratin), präklinische Forschungssubstanz',
      emoji: '🧪',
      short: 'Ein Laborpeptid, das in Zellkultur und Mausmodellen Krebszellen über Poren in der Zellmembran zerstört und gesunde Zellen verschont. Am Menschen nie geprüft. Als Krebsmittel vermarktet, nannte die FDA es 2017 als Beispiel nach einem Bakterienfund in einer Probe.',
      moa: 'PNC-27 verbindet den Abschnitt des Tumorsuppressors p53, der an das Eiweiß HDM-2 bindet (Aminosäuren 12 bis 26), mit Penetratin, einer Sequenz, die Peptide durch Zellmembranen schleust. Nach den Arbeiten der Entwicklergruppe an der State University of New York tragen viele Krebszellen HDM-2 auch in ihrer äußeren Membran, gesunde Zellen kaum. PNC-27 bindet dort an HDM-2, die Komplexe bilden Poren, und die Krebszelle läuft aus, eine Nekrose statt eines programmierten Zelltods. Normale Zellen, denen man im Labor membranständiges HDM-2 einbaute, wurden ebenfalls angreifbar (Sarafraz-Yazdi 2010). In Zellkultur wirkt es auch bei Krebszellen ohne funktionierendes p53. Alle Befunde stammen aus Zellkultur, aus Tumorzellen im Labor und aus Mäusen.',
      benefits: [
        'In Zellkultur gegen viele menschliche Krebszelllinien wirksam, auch ohne funktionierendes p53; normale Zellen einschließlich Stammzellen aus Nabelschnurblut blieben unbeeinträchtigt (Kanovsky 2001)',
        'Zielstruktur benannt: HDM-2 in der Membran von Krebszellen; der Mechanismus über Porenbildung ist in mehreren Arbeiten beschrieben',
        'Im Mausmodell zerstörte die kürzere Variante PNC-28 gleichzeitig eingepflanzte Bauchspeicheldrüsentumoren und bremste das Wachstum entfernter Tumoren (Michl 2006)',
        'Eine von den Entwicklern unabhängige Arbeitsgruppe bestätigte 2020 im Mausmodell der akuten myeloischen Leukämie die Abtötung von Leukämiezellen bei geschonten gesunden Blutstammzellen (Wang 2020)'
      ],
      risks: [
        'Keine einzige Studie am Menschen, kein Eintrag im Studienregister ClinicalTrials.gov; Wirksamkeit, Verträglichkeit und Verhalten im Körper sind unbekannt',
        'Ein FDA-Labor fand im Januar 2017 in einer Probe von PNC-27, das als Behandlung oder Heilmittel gegen Krebs beworben wurde, das Bakterium Variovorax paradoxus',
        'Das größte Risiko ist indirekt: Wer eine wirksame Krebstherapie aufschiebt oder ersetzt, verliert Zeit, die sich nicht zurückholen lässt',
        'Nicht zugelassen; Werbung, die ein Arzneimittel außerhalb der Fachkreise mit der Behandlung von Krebs verbindet, ist in Deutschland nach § 12 HWG verboten'
      ],
      status: 'Nirgends als Arzneimittel zugelassen, weder in Deutschland noch in der EU oder den USA; keine registrierte klinische Studie. Präklinische Forschungssubstanz. Die FDA führt PNC-27 seit 2017 als Beispiel für ein illegal als Krebsmittel vertriebenes, verunreinigtes Produkt.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/20080680/',
      sources: [
        { title: 'Kanovsky M et al., Proc Natl Acad Sci USA 2001 – p53-Peptide mit Penetratin, selektiv toxisch für Krebszellen (Zellkultur)', url: 'https://pubmed.ncbi.nlm.nih.gov/11606716/' },
        { title: 'Sarafraz-Yazdi E et al., Proc Natl Acad Sci USA 2010 – PNC-27 bindet HDM-2 in der Membran von Krebszellen', url: 'https://pubmed.ncbi.nlm.nih.gov/20080680/' },
        { title: 'Michl J et al., Int J Cancer 2006 – PNC-28 bremst Bauchspeicheldrüsentumoren in Nacktmäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/16688716/' },
        { title: 'Wang H et al., Leukemia 2020 – membranständiges HDM2 als Ziel bei akuter myeloischer Leukämie (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/31337857/' },
        { title: 'Sarafraz-Yazdi E et al., Ann Clin Lab Sci 2015 – PNC-27 an frisch gewonnenen Eierstockkrebszellen im Labor', url: 'https://pubmed.ncbi.nlm.nih.gov/26663795/' },
        { title: 'Pincus MR et al., Biomedicines 2024 – Übersicht der Entwicklergruppe zur Porenbildung', url: 'https://pubmed.ncbi.nlm.nih.gov/38927351/' },
        { title: 'FDA, Fragen und Antworten zu illegal vertriebenen Krebsmitteln – Bakterienfund in PNC-27 (Januar 2017)', url: 'https://www.fda.gov/consumers/health-fraud-scams/questions-and-answers-fda-alerts-companies-stop-illegal-sale-products-claiming-treat-cancer' },
        { title: 'Heilmittelwerbegesetz, Anlage zu § 12 – kein Publikumswerben für Arzneimittel bei bösartigen Neubildungen', url: 'https://www.gesetze-im-internet.de/heilmwerbg/anlage.html' },
        { title: 'ClinicalTrials.gov – Suche nach PNC-27, keine registrierte Studie', url: 'https://clinicaltrials.gov/search?term=PNC-27' }
      ],
      community: [],
      filterCat: 'Sonstige'
    },
  {
      id: 'ptd-dbm',
      name: 'PTD-DBM',
      altNames: 'Protein Transduction Domain – Dishevelled Binding Motif, CXXC5-Dishevelled-Kompetitorpeptid',
      class: 'Synthetisches Peptid, das die Bindung von CXXC5 an Dishevelled stört und so den Wnt/β-Catenin-Signalweg aktiviert; präklinische Forschungssubstanz',
      emoji: '💇',
      short: 'Ein Laborpeptid aus Seoul, das eine Bremse des Haarwachstums-Signalwegs Wnt löst. Bei Mäusen wuchsen Haare schneller nach, und in Hautwunden bildeten sich neue Follikel. Am Menschen ist es nicht untersucht.',
      moa: 'Der Wnt/β-Catenin-Signalweg steuert Wachstum und Neubildung von Haarfollikeln. Das Eiweiß CXXC5 bremst diesen Weg, indem es an das Signalprotein Dishevelled bindet. PTD-DBM besteht aus dem Dishevelled-bindenden Abschnitt von CXXC5 (DBM) und einer Transportsequenz (PTD), die das Peptid in die Zelle bringt. Dort konkurriert es mit CXXC5 um Dishevelled, die Bremse fällt weg, β-Catenin steigt. In verkleinerten Haarfollikeln kahler menschlicher Kopfhaut fand die Entwicklergruppe mehr CXXC5, in menschlichen Haarpapillenzellen hemmte CXXC5 Wachstumsmarker (Lee 2017). 2023 beschrieb dieselbe Gruppe CXXC5 bei Mäusen als Glied der Kette von DHT über Prostaglandin D2 zum Haarausfall. Alle Wirkungsdaten zu PTD-DBM stammen aus Zellkultur und Mäusen.',
      benefits: [
        'Angriffspunkt mit menschlichem Bezug: mehr CXXC5 in verkleinerten Follikeln kahler Kopfhaut, Wachstumshemmung durch CXXC5 in menschlichen Haarpapillenzellen im Labor (Lee 2017)',
        'Im Mausmodell schnelleres Nachwachsen der Haare und Neubildung von Haarfollikeln in Hautwunden (Lee 2017)',
        'Bei Mäusen hob es den durch Prostaglandin D2 ausgelösten Haarausfall auf (Ryu 2023)',
        'Zusammen mit Valproinsäure beschleunigte es im Mausmodell auch die Wundheilung (Lee 2015)'
      ],
      risks: [
        'Keine Studie am Menschen, kein Eintrag im Studienregister ClinicalTrials.gov; ob es auf der Kopfhaut ankommt, wirkt und vertragen wird, ist unbekannt',
        'Alle Befunde stammen aus einer Arbeitsgruppe der Yonsei-Universität in Seoul; eine unabhängige Bestätigung fehlt',
        'Der Wnt/β-Catenin-Weg spielt auch bei Krebs eine Rolle; dieselbe Gruppe nennt das als Grund für die Zurückhaltung bei Wirkstoffen an diesem Weg und fand ihn im Plattenepithelkarzinom der Haut aktiviert (Lee 2025)',
        'Nicht zugelassen; Ware ohne geprüften Gehalt. Für erblich bedingten Haarausfall gibt es zugelassene, am Menschen geprüfte Wirkstoffe'
      ],
      status: 'Nirgends als Arzneimittel zugelassen, weder in Deutschland noch in der EU oder den USA; keine registrierte klinische Studie. Präklinische Forschungssubstanz.',
      link: 'https://pubmed.ncbi.nlm.nih.gov/28595998/',
      sources: [
        { title: 'Lee SH et al., J Invest Dermatol 2017 – CXXC5 und Haarwachstum, PTD-DBM im Mausmodell', url: 'https://pubmed.ncbi.nlm.nih.gov/28595998/' },
        { title: 'Kim D, Garza LA, J Invest Dermatol 2017 – Kommentar zur CXXC5-Arbeit', url: 'https://pubmed.ncbi.nlm.nih.gov/28967390/' },
        { title: 'Lee SH et al., J Exp Med 2015 – CXXC5 bremst die Wundheilung, PTD-DBM im Mausmodell', url: 'https://pubmed.ncbi.nlm.nih.gov/26056233/' },
        { title: 'Ryu YC et al., Cells 2023 – CXXC5 vermittelt DHT- und Prostaglandin-D2-bedingten Haarausfall (Maus)', url: 'https://pubmed.ncbi.nlm.nih.gov/36831222/' },
        { title: 'Fan C et al., Biomedicines 2026 – Übersicht kurzer Peptide gegen Haarausfall, PTD-DBM nur mit Tierdaten', url: 'https://pubmed.ncbi.nlm.nih.gov/42072405/' },
        { title: 'Lee SH et al., Exp Mol Med 2025 – Wnt/β-Catenin im Plattenepithelkarzinom der Haut', url: 'https://pubmed.ncbi.nlm.nih.gov/40887499/' },
        { title: 'ClinicalTrials.gov – Suche nach PTD-DBM, keine registrierte Studie', url: 'https://clinicaltrials.gov/search?term=PTD-DBM' }
      ],
      community: [],
      filterCat: 'Sonstige'
    },
  {
    id: 'orexin-b',
    name: 'Orexin B',
    altNames: 'Hypocretin-2, OxB, Orexin-B (human)',
    class: 'Körpereigenes Neuropeptid (28 Aminosäuren), Agonist am Orexin-Rezeptor 2',
    emoji: '🌅',
    short: 'Eines der beiden Wachheits-Peptide des Hypothalamus, 1998 von zwei Gruppen gleichzeitig beschrieben. Als Peptid ist Orexin B am Menschen nie untersucht: Es wird im Blut schnell abgebaut und gelangt von außen nicht ins Gehirn. Wirksam am Orexin-System ist stattdessen ein oral verfügbarer OX2R-Agonist, der seit August 2026 in den USA gegen Narkolepsie Typ 1 zugelassen ist.',
    moa: 'Aus dem Vorläufer Prepro-Orexin entstehen zwei Peptide: Orexin A mit 33 und Orexin B mit 28 Aminosäuren. Die Zellen, die sie bilden, liegen im lateralen und hinteren Hypothalamus und stabilisieren den Wachzustand. Orexin A bindet an beide Orexin-Rezeptoren, Orexin B bevorzugt den Rezeptor 2 (OX2R); aus dieser Vorliebe wurde 2003 ein OX2R-selektiver Agonist auf Orexin-B-Basis entwickelt. Bei Narkolepsie Typ 1 gehen die Orexin-Neurone verloren, deshalb ist das System ein Ziel für Medikamente. Der entscheidende Punkt für ein Peptid von außen ist der Weg ins Gehirn: Markiertes Orexin A tritt bei Mäusen durch einfache Diffusion aus dem Blut ins Hirngewebe über, Orexin B wird im Blut schnell abgebaut und war nach Gabe in die Vene im Gehirn nicht mehr in intakter Form nachweisbar; der Verteilungskoeffizient in Octanol lag bei 0,030 gegenüber 0,232 für Orexin A. Die Humanversuche am Orexin-System arbeiten daher mit Orexin A über die Nase oder mit kleinen Molekülen, die den Rezeptor direkt besetzen.',
    benefits: [
      'Die Rolle im Wach-Schlaf-System ist gut belegt: Beide Peptide wurden 1998 unabhängig beschrieben, und der Verlust der Orexin-Neurone erklärt Narkolepsie Typ 1.',
      'Der Wirkweg lässt sich am Menschen beeinflussen – allerdings mit einem Tablettenwirkstoff, nicht mit dem Peptid: Oveporexton, ein OX2R-selektiver Agonist, verlängerte in zwei Phase-3-Studien mit 168 und 105 Teilnehmenden die Einschlaflatenz im Wachbleibe-Test um 14,3 bis 19,8 Minuten gegenüber -0,4 bis -0,8 Minuten unter Placebo.',
      'Aus Orexin B wurde 2003 der OX2R-selektive Agonist [Ala11, D-Leu15]Orexin B abgeleitet, der in der Forschung als Werkzeug dient.',
      'Tier- und Zellbefunde zu Orexin B betreffen Herzmuskelzellen, Fettgewebe, Eierstockzellen und Nervenzellen – keiner davon ist am Menschen bestätigt.',
      'Beworben wird Orexin B als Wachheits-Peptid gegen Tagesmüdigkeit; dafür existiert keine Humanstudie.'
    ],
    risks: [
      'Keine einzige Studie am Menschen mit Orexin B, auch kein Eintrag in öffentlichen Studienregistern; die Humanarbeiten am Orexin-System verwenden Orexin A oder zugelassene Wirkstoffe.',
      'Der Weg ins Gehirn fehlt: Orexin B wird im Blut rasch abgebaut, ist wenig fettlöslich und war im Tierversuch nach Gabe in die Vene im Hirngewebe nicht intakt nachweisbar.',
      'Auch der Weg über die Nase ist unsicher: Eine PET-Untersuchung mit markiertem Orexin A fand nach Gabe in die Nase nur geringe Aufnahme ins Gehirn, vergleichbar mit der Gabe in die Vene.',
      'Dass eine Aktivierung des Rezeptors nicht nebenwirkungsfrei ist, zeigt der zugelassene OX2R-Agonist: In den Zulassungsstudien traten bei der Mehrheit der Behandelten vermehrter Harndrang, häufigeres Wasserlassen und vorübergehende Schlaflosigkeit auf, dazu mehr Speichelfluss.',
      'Anhaltende Tagesmüdigkeit, Schlafattacken oder Kataplexie gehören in schlafmedizinische Abklärung; Narkolepsie Typ 1 ist behandelbar, und Selbstversuche verschleppen die Diagnose.',
      'Gehandelt wird Laborware mit dem Zusatz „nur für Forschungszwecke", ohne Prüfung von Gehalt, Reinheit und Sterilität.',
      'Im Sport fällt eine nicht zugelassene Substanz unter die Gruppe S0 der Welt-Anti-Doping-Agentur und ist jederzeit verboten.'
    ],
    status: 'In Deutschland und der EU ist Orexin B kein zugelassenes Arzneimittel; als Nahrungsergänzungsmittel fehlt die nach der Novel-Food-Verordnung (EU) 2015/2283 nötige Genehmigung. Verkauft wird es als Laborpeptid für Forschungszwecke. Zugelassen ist am Orexin-System nicht das Peptid, sondern der orale OX2R-Agonist Oveporexton: Die US-Arzneimittelbehörde FDA erteilte am 05.08.2026 die Zulassung als Orzeyful für Erwachsene mit Narkolepsie Typ 1, die Einordnung in das US-Betäubungsmittelrecht war zum Zulassungszeitpunkt empfohlen und noch offen. WADA 2026: als nicht zugelassene Substanz unter S0 jederzeit verboten.',
    sources: [
      { title: 'Sakurai et al., Cell 1998 – Erstbeschreibung von Orexin A und Orexin B und ihrer Rezeptoren', url: 'https://pubmed.ncbi.nlm.nih.gov/9491897/' },
      { title: 'de Lecea et al., PNAS 1998 – die Hypocretine als hypothalamusspezifische Peptide', url: 'https://pubmed.ncbi.nlm.nih.gov/9419374/' },
      { title: 'Kastin und Akerstrom, J Pharmacol Exp Ther 1999 – Orexin A, aber nicht Orexin B, gelangt aus dem Blut ins Gehirn', url: 'https://pubmed.ncbi.nlm.nih.gov/10087007/' },
      { title: 'Asahi et al., Bioorg Med Chem Lett 2003 – OX2R-selektiver Agonist auf Orexin-B-Basis', url: 'https://pubmed.ncbi.nlm.nih.gov/12467628/' },
      { title: 'Van de Bittner et al., ACS Chem Neurosci 2018 – PET-Messung der Gehirnaufnahme von Orexin A über die Nase', url: 'https://pubmed.ncbi.nlm.nih.gov/29035509/' },
      { title: 'Weinhold et al., Behav Brain Res 2014 – Orexin A über die Nase bei Narkolepsie mit Kataplexie, 14 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/24406723/' },
      { title: 'Dauvilliers et al., N Engl J Med 2026 – Oveporexton in zwei Phase-3-Studien bei Narkolepsie Typ 1', url: 'https://pubmed.ncbi.nlm.nih.gov/42714024/' },
      { title: 'FDA, Pressemitteilung vom 05.08.2026 – Zulassung von Orzeyful (Oveporexton)', url: 'https://www.fda.gov/news-events/press-announcements/fda-approves-first-drug-treat-full-range-narcolepsy-type-1-symptoms' },
      { title: 'ClinicalTrials.gov – Suche nach Orexin B ohne Studie zum Peptid', url: 'https://clinicaltrials.gov/search?term=orexin%20B' },
      { title: 'NADA – Verbotsliste 2026, informatorische Übersetzung (Gruppe S0)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'dermorphin',
    name: 'Dermorphin',
    altNames: 'Hyp6-Dermorphin, „Frog Juice" (Begriff aus dem Pferdesport)',
    class: 'Opioid-Peptid aus Froschhaut (Heptapeptid), Agonist am My-Opioid-Rezeptor',
    emoji: '⚠️',
    short: 'Ein Opioid-Peptid aus der Haut südamerikanischer Frösche, das am My-Opioid-Rezeptor um ein Vielfaches stärker wirkt als Morphin. Die Humanforschung endete 1985 nach einer einzigen verblindeten Studie zur Schmerzbehandlung; bekannt geworden ist der Stoff später als Dopingmittel im Pferderennsport. In Deutschland gibt es keine Zulassung, der Handel als Arzneimittel ist strafbar, und die Risiken sind die eines hochpotenten Opioids.',
    moa: 'Dermorphin wurde 1981 von der Arbeitsgruppe um Vittorio Erspamer aus der Haut der Frösche Phyllomedusa sauvagei und Phyllomedusa rhodei isoliert und als Heptapeptid mit der Sequenz Tyr-D-Ala-Phe-Gly-Tyr-Pro-Ser-NH2 bestimmt – eines der ersten Tierpeptide mit einer D-Aminosäure, die es gegen den schnellen Abbau durch Peptidasen schützt. Es bindet sehr selektiv an den My-Opioid-Rezeptor, denselben Rezeptor, über den Morphin und Fentanyl wirken, und löst damit die typische Opioid-Kette aus: gedämpfte Schmerzweiterleitung im Rückenmark, Eingriff in Hormonachsen, Dämpfung des Atemantriebs. In Zahlen des analytischen Fachartikels von 2013 ist Dermorphin am Rezeptor 30- bis 40-mal stärker als Morphin. Dass die Wirkung über Opioid-Rezeptoren läuft, ist am Menschen geprüft: Der Gegenspieler Naloxon hob die Hormoneffekte vollständig auf, die Hemmung eines Schmerzreflexes dagegen nur etwa zur Hälfte, was die Autoren als Hinweis auf mehrere beteiligte Rezeptor-Populationen deuteten.',
    benefits: [
      'Eine randomisierte, doppelblinde Studie an 150 Patienten nach planbaren Operationen (1985): Die Schmerzfreiheit hielt im Mittel 43,4 Stunden an gegenüber 34,5 Stunden unter Morphin und 10,8 Stunden unter der damals üblichen Vergleichsbehandlung; die Nebenwirkungen Harnverhalt, Erbrechen und Kopfschmerz unterschieden sich zwischen den Gruppen nicht wesentlich.',
      'Bei gesunden Freiwilligen hob eine Infusion die Schwelle eines spinalen Schmerzreflexes deutlich und lang anhaltend an; derselbe Effekt zeigte sich bei einer Person mit vollständiger Querschnittlähmung, was für einen Angriffspunkt im Rückenmark spricht (1986).',
      'Die Opioid-Wirkung am Menschen ist auch an Hormonen messbar: Prolaktin, Wachstumshormon, Thyreotropin und die Reninaktivität stiegen, Cortisol sank, und Naloxon verhinderte diese Effekte (Zusammenfassung mehrerer Studien an Gesunden, 1985).',
      'Danach brach die klinische Forschung ab: Eine Übersicht von 2018 beschreibt, dass die Studie von 1985 in der klinischen Literatur praktisch nie zitiert wurde, und schlägt neue Studien für die Schmerzmedizin vor – Dermorphin ist seit 40 Jahren kein Arzneimittel geworden.',
      'Gut untersucht ist der Nachweis: Für Pferdeplasma und -urin sowie für menschlichen Urin liegen validierte massenspektrometrische Verfahren für die Dopingkontrolle vor.'
    ],
    risks: [
      'Es ist ein hochpotentes Opioid. Damit gehören Atemdämpfung, Bewusstseinstrübung, Übelkeit, Harnverhalt, Toleranz und Abhängigkeit zum Wirkprofil; im Tierversuch entstand nach wenigen Tagen Dauergabe eine körperliche Abhängigkeit mit Entzugssyndrom wie bei Morphin.',
      'Es gibt keine moderne Sicherheitsstudie, keine Dosis-Wirkungs-Daten am Menschen aus den letzten vier Jahrzehnten und keine Pharmakovigilanz; die Humanarbeiten stammen aus den Jahren 1983 bis 1986 und wurden unter klinischer Überwachung durchgeführt.',
      'Die hohe Wirkstärke macht jede Selbstanwendung besonders gefährlich: Zwischen wirksamer und atemdämpfender Menge liegt bei Opioiden wenig Spielraum, und Graumarkt-Ware ist in Gehalt und Reinheit ungeprüft.',
      'Im Pferderennsport wurde Dermorphin bis 2011 unbemerkt eingesetzt; in einer Untersuchung an 10 Pferden folgten der Gabe in die Vene Erregung und ein Anstieg der Herzfrequenz, nachweisbar war der Stoff im Urin bis zu 48 bis 72 Stunden. Der Einsatz bei Tieren ist ein Tierschutz- und Rennbetrugsthema, kein Wirksamkeitsbeleg für Menschen.',
      'Eine Anwendung beim Menschen außerhalb von Studien ist in der Dopingliteratur beschrieben, aber nirgends geprüft oder zugelassen.',
      'Opioid-Wechselwirkungen sind erheblich: mit Beruhigungs- und Schlafmitteln, Alkohol und anderen atemdämpfenden Stoffen. Starke Schmerzen gehören in ärztliche Behandlung, in der es zugelassene und steuerbare Opioide gibt.',
      'Im Sport jederzeit verboten: Dermorphin ist auf der Verbotsliste nicht namentlich aufgeführt, fällt aber als nicht zugelassene Substanz unter die Gruppe S0.'
    ],
    status: 'In Deutschland und der EU ist Dermorphin kein zugelassenes Arzneimittel, ebenso nicht in den USA. Es steht nicht in den Anlagen I bis III des Betäubungsmittelgesetzes und ist auch von den Stoffgruppen des Neue-psychoaktive-Stoffe-Gesetzes nicht erfasst – es ist also kein Betäubungsmittel im Rechtssinn. Das macht es nicht frei verkäuflich: Ein Stoff, der zur Schmerzbehandlung angeboten wird, ist ein Arzneimittel, und das Inverkehrbringen eines Arzneimittels ohne Zulassung ist nach dem Arzneimittelgesetz strafbar. Gehandelt wird es als Forschungschemikalie mit dem Zusatz „nur für Forschungszwecke". Im Pferdesport gilt es als klassischer Dopingfall, seit 2011 mit eigenen Nachweisverfahren. WADA 2026: als nicht zugelassene Substanz unter S0 jederzeit verboten; die namentliche Liste der Narkotika unter S7 führt Dermorphin nicht.',
    sources: [
      { title: 'Montecucchi et al., Int J Pept Protein Res 1981 – Aminosäuresequenz von Dermorphin aus Phyllomedusa sauvagei', url: 'https://pubmed.ncbi.nlm.nih.gov/7287299/' },
      { title: 'Basso et al., Peptides 1985 – randomisierte Doppelblindstudie zur postoperativen Schmerzbehandlung, 150 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/3831962/' },
      { title: 'Sandrini et al., Brain Res 1986 – Dermorphin hemmt den spinalen Schmerzreflex beim Menschen', url: 'https://pubmed.ncbi.nlm.nih.gov/3697765/' },
      { title: 'Degli Uberti et al., Peptides 1985 – Hormonwirkungen von Dermorphin bei Gesunden', url: 'https://pubmed.ncbi.nlm.nih.gov/3008118/' },
      { title: 'Broccardo et al., Eur J Pharmacol 1985 – Toleranz und körperliche Abhängigkeit bei Ratten', url: 'https://pubmed.ncbi.nlm.nih.gov/4040026/' },
      { title: 'Keppel Hesselink und Schatman, J Pain Res 2018 – Dermorphin als vergessener Arzneistoff (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/30538538/' },
      { title: 'Guan et al., Anal Bioanal Chem 2013 – Nachweis in Pferdeplasma und -urin, Wirkstärke und Missbrauch im Rennsport', url: 'https://pubmed.ncbi.nlm.nih.gov/23571464/' },
      { title: 'Robinson et al., J Vet Pharmacol Ther 2015 – Pharmakokinetik und Wirkung bei 10 Pferden', url: 'https://pubmed.ncbi.nlm.nih.gov/25376170/' },
      { title: 'Castro et al., J Mass Spectrom 2020 – Nachweisverfahren für menschlichen Urin in der Dopingkontrolle', url: 'https://pubmed.ncbi.nlm.nih.gov/32805775/' },
      { title: 'NADA – Verbotsliste 2026, informatorische Übersetzung (Gruppen S0 und S7)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'cabergolin',
    name: 'Cabergolin',
    altNames: 'Dostinex, Cabergolin-ratiopharm, Dopamin-Agonist',
    class: 'Dopamin-Agonist (Ergolin-Derivat), verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen gegen zu hohes Prolaktin und zum Abstillen; dort normalisiert es den Prolaktinspiegel zuverlässiger als Bromocriptin. Außerhalb der Zulassung wird es für mehr Libido und als „Prolaktin-Bremse" genutzt – dafür gibt es eine kleine Studie an 10 gesunden Männern. Daneben stehen Herzklappenveränderungen, die bei hohen Dosen gut belegt sind.',
    moa: 'Cabergolin stimuliert direkt die Dopamin-D2-Rezeptoren an den prolaktinbildenden Zellen der Hypophyse und senkt so lange anhaltend den Prolaktinspiegel. Oberhalb der dafür nötigen Dosis wirkt es laut Fachinformation auch zentral dopaminerg. Als Ergolin-Derivat aktiviert es zusätzlich den Serotonin-5-HT2B-Rezeptor; diese Eigenschaft gilt als Ursache der Fibrosen und Herzklappenveränderungen, die nach längerer Anwendung auftreten. Prolaktin steigt nach dem Orgasmus an; die Idee hinter der Lifestyle-Nutzung ist, diesen Anstieg zu dämpfen und so Lust und Erholungszeit zu beeinflussen.',
    benefits: [
      'Bei Hyperprolaktinämie gut belegt: normaler Prolaktinspiegel bei 83 % gegenüber 59 % unter Bromocriptin, Eisprung oder Schwangerschaft bei 72 % gegenüber 52 % (RCT, 459 Frauen, Webster 1994)',
      'Seltener abgebrochen als Bromocriptin: 3 % gegenüber 12 % wegen Unverträglichkeit (Webster 1994)',
      'Lifestyle-Nutzung: In einer einfach verblindeten Crossover-Studie an 10 gesunden Männern steigerte eine Einzelgabe Cabergolin sexuelles Verlangen, sexuelle Funktion und das Erleben der Erholungsphase nach dem Orgasmus (Krüger 2003)',
      'Bei Männern mit Orgasmusstörung berichteten in einer rückblickenden Auswertung 87 von 131 (66,4 %) eine subjektive Besserung – ohne Kontrollgruppe (Hollander 2016)',
      'In Deutschland seit 1995 als Dostinex zugelassen, Nebenwirkungen über Jahrzehnte dokumentiert'
    ],
    risks: [
      'Herzklappen: Unter Parkinson-Medikation stieg das Risiko für neue Klappeninsuffizienz um das 4,9-Fache (Schade 2007); die EMA senkte 2008 die Höchstdosis auf 3 mg pro Tag und schrieb Echokardiographien vor',
      'Bei niedrigen Dosen gegen Prolaktin häufiger Trikuspidal-Insuffizienz im Ultraschall (Meta-Analyse, OR 3,74), aber keine Beschwerden dadurch (Stiles 2018); keine Häufung von Klappenoperationen oder Herzschwäche bei 646 Behandelten (Stiles 2021)',
      'Impulskontrollstörungen: Hypersexualität, Spielsucht, Kaufzwang, Essattacken laut Fachinformation; bei Prolaktinom-Patienten häufiger als ohne Dopamin-Agonist (RR 1,71, Penchev 2025)',
      'Fibrosen an Lunge, Herzbeutel und im Retroperitonealraum; Gegenanzeige bei entsprechender Vorgeschichte und bei Herzklappenerkrankung vor Langzeitbehandlung',
      'Übelkeit, Schwindel, Kopfschmerzen, Blutdruckabfall, plötzliches Einschlafen; nicht zusammen mit Antipsychotika',
      'Bei gesunden Frauen änderte Cabergolin das sexuelle Erleben nicht (Crossover, 13 Frauen, Krüger 2018)'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig (Dostinex, seit 24.02.1995): primäres Abstillen und Störungen durch Hyperprolaktinämie; Höchstdosis 3 mg pro Tag. Die Anwendung für Libido, Orgasmus oder zur Prolaktinsenkung bei Gesunden ist eine nicht zugelassene Anwendung. EMA-Risikobewertung 2008 zu Fibrosen und Herzklappen. Nicht in der Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/14656205/',
    sources: [
      { title: 'Webster J et al., N Engl J Med 1994 – Cabergolin gegen Bromocriptin bei hyperprolaktinämischer Amenorrhoe, RCT mit 459 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/7915824/' },
      { title: 'Krüger TH et al., J Endocrinol 2003 – akute Prolaktinsenkung und sexuelles Erleben, Crossover mit 10 gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/14656205/' },
      { title: 'Krüger THC et al., J Sex Marital Ther 2018 – kein Effekt auf sexuelles Erleben bei 13 gesunden Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/28406384/' },
      { title: 'Hollander AB et al., Sex Med 2016 – Cabergolin bei männlicher Orgasmusstörung, retrospektiv, 131 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/26944776/' },
      { title: 'Schade R et al., N Engl J Med 2007 – Dopamin-Agonisten und Herzklappeninsuffizienz, Fall-Kontroll-Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/17202453/' },
      { title: 'Stiles CE et al., J Clin Endocrinol Metab 2018 – Meta-Analyse Herzklappen unter Cabergolin bei Hyperprolaktinämie', url: 'https://pubmed.ncbi.nlm.nih.gov/30215804/' },
      { title: 'Stiles CE et al., J Clin Endocrinol Metab 2021 – harte Herzendpunkte bei 646 Prolaktinom-Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/33247916/' },
      { title: 'Penchev P et al., J Clin Neurosci 2025 – Meta-Analyse Impulskontrollstörungen unter Dopamin-Agonisten bei Prolaktinom', url: 'https://pubmed.ncbi.nlm.nih.gov/40480033/' },
      { title: 'EMA, Pressemitteilung 26.06.2008 – neue Warnhinweise und Gegenanzeigen für Ergot-Dopamin-Agonisten', url: 'https://www.ema.europa.eu/en/documents/press-release/emea-recommends-new-warnings-and-contraindications-ergot-derived-dopamine-agonists_en.pdf' },
      { title: 'Fachinformation Dostinex (Stand März 2024)', url: 'https://www.fachinfo.de/fi/pdf/006655/dostinex-r' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'liothyronin',
    name: 'Liothyronin (T3)',
    altNames: 'T3, Trijodthyronin, Thybon, Cytomel (USA)',
    class: 'Schilddrüsenhormon (aktive Form), verschreibungspflichtig; als Fatburner missbraucht',
    emoji: '💊',
    short: 'Liothyronin ist das aktive Schilddrüsenhormon T3, zugelassen für eng umrissene Schilddrüsen-Situationen. In der Szene wird es zum Fettabbau genutzt – die Fachinformation sagt ausdrücklich, dass normale Dosen bei gesunder Schilddrüse kein Gewicht senken und höhere lebensbedrohlich werden können. Eine systematische Übersicht fand keinen konsistenten Effekt beim Abnehmen.',
    moa: 'Liothyronin (T3) ist das eigentliche Wirkprinzip der Schilddrüse; das Hauptprodukt Levothyroxin (T4) ist ein Prähormon, das vor allem in Leber und Niere zu T3 umgewandelt wird. T3 wirkt über Kernrezeptoren auf die Ablesung von Genen und steigert Sauerstoffverbrauch sowie Zucker-, Fett- und Eiweißstoffwechsel; es wirkt auch auf Herz, Kreislauf, Knochen und Gehirn. Die Halbwertszeit liegt bei etwa einem Tag. Von außen zugeführt unterdrückt es das TSH der Hypophyse und damit die eigene Schilddrüse. Die Idee hinter dem Missbrauch: mehr Grundumsatz, mehr Fettverbrennung. Der Haken: Dieselbe Steigerung trifft auch Herz, Kreislauf und Knochen.',
    benefits: [
      'Warum Menschen es nehmen: zum Abnehmen und zur Leistungssteigerung; die Nutzung zu Dopingzwecken war die häufigste Ursache publizierter Vergiftungen mit Schilddrüsenhormonen (systematische Übersicht, Skrzypiec-Spring 2025)',
      'Bei Hypothyreose lag das Gewicht unter T3 bei 68,5 kg gegenüber 70,6 kg unter T4 bei gleichem TSH, das LDL-Cholesterin sank um 13,3 % (RCT, Crossover, 14 Personen, Celi 2011) – an Patienten mit Unterfunktion, nicht an Gesunden',
      'Zugelassene Anwendungen in Deutschland: Überbrückung vor Radiojod-Therapie beim Schilddrüsenkarzinom, Hypothyreose mit Umwandlungsschwäche (meist mit Levothyroxin), Schilddrüsensuppressionstest',
      'Physiologie und Pharmakologie seit Jahrzehnten gut beschrieben'
    ],
    risks: [
      'Kein belegter Abnehmeffekt: In der systematischen Übersicht ließ sich bei Übergewicht unter Kalorienreduktion kein konsistenter Effekt auf Gewicht, Eiweißabbau oder Grundumsatz nachweisen (Kaptein 2009)',
      'Fachinformation und US-Warnhinweis: nicht zur Gewichtsreduktion; normale Dosen wirken bei gesunder Schilddrüse nicht, höhere können lebensbedrohlich sein, besonders mit appetitzügelnden Mitteln',
      'Herz: Herzklopfen sehr häufig, Herzrasen häufig, Rhythmusstörungen und Angina pectoris möglich; Fälle von plötzlichem Herztod nach langjährigem Missbrauch beschrieben (Fachinformation)',
      'Ein niedriges TSH ging bei über 60-Jährigen mit dreifachem Risiko für Vorhofflimmern in 10 Jahren einher (Sawin 1994)',
      'Vergiftungen: 34 publizierte Fälle in 30 Jahren mit steigender Tendenz, 2 davon tödlich durch akutes Herzversagen (Skrzypiec-Spring 2025)',
      'Knochen: Überdosierung steigert den Knochenabbau und senkt die Knochendichte (US-Fachinformation)'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig (Thybon 20/100 Henning); Gewichtsreduktion ist ausdrücklich keine Anwendung. USA: Cytomel mit Warnhinweis „nicht zur Behandlung von Übergewicht oder zur Gewichtsabnahme". Im Sport nach dem WADA-Code nicht verboten (Handelsman 2023, Skrzypiec-Spring 2025) und nicht in der Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/19737920/',
    sources: [
      { title: 'Kaptein EM et al., J Clin Endocrinol Metab 2009 – Schilddrüsenhormon bei Übergewicht und anderen Erkrankungen, systematische Übersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/19737920/' },
      { title: 'Celi FS et al., J Clin Endocrinol Metab 2011 – Liothyronin gegen Levothyroxin bei Hypothyreose, Crossover-RCT mit 14 Personen', url: 'https://pubmed.ncbi.nlm.nih.gov/21865366/' },
      { title: 'Skrzypiec-Spring M et al., Pharmaceuticals 2025 – Vergiftungen durch missbräuchlich genutzte Schilddrüsenhormone, systematische Übersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/41471297/' },
      { title: 'Handelsman DJ et al., J Endocr Soc 2023 – Schilddrüsenhormon-Missbrauch bei Spitzensportlern, nicht WADA-verboten', url: 'https://pubmed.ncbi.nlm.nih.gov/36896254/' },
      { title: 'Sawin CT et al., N Engl J Med 1994 – niedriges TSH und Vorhofflimmern bei über 60-Jährigen', url: 'https://pubmed.ncbi.nlm.nih.gov/7935681/' },
      { title: 'Fachinformation Thybon 20/100 Henning (Stand November 2024)', url: 'https://www.fachinfo.de/fi/pdf/007748/thybon-r-20-100-henning' },
      { title: 'FDA-Fachinformation Cytomel (DailyMed) – Warnhinweis: nicht zur Gewichtsabnahme', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=51452b31-ff68-4e0c-b982-c15502ebf1d3' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'yk-11',
    name: 'YK-11',
    altNames: 'YK11, YK 11',
    class: 'Steroid-Derivat, Teilagonist am Androgen-Rezeptor (als SARM vermarktet), nicht zugelassen',
    emoji: '🏋️',
    short: 'YK-11 wird als SARM und „Myostatin-Hemmer" verkauft, ist aber chemisch ein Steroid. Die Myostatin-Geschichte stammt aus Zellkulturen: Dort bildeten Muskelvorläuferzellen unter YK-11 mehr Follistatin. Am Menschen gibt es keine einzige Wirksamkeits- oder Sicherheitsstudie, dafür Leberschäden in Fallberichten mit Mischkonsum.',
    moa: 'YK-11 ist ein synthetisches Steroid mit einem 19-Norpregnan-Grundgerüst, das den Androgen-Rezeptor nur teilweise aktiviert. In Muskelvorläuferzellen der Maus (C2C12) förderte es die Ausreifung zu Muskelzellen stärker als DHT und steigerte dabei die Bildung von Follistatin; ein Antikörper gegen Follistatin hob den Effekt auf (Kanno 2013). Follistatin bindet Myostatin, daher die Vermarktung als Myostatin-Hemmer. In Knochenzellen der Maus förderte YK-11 Wachstum und Mineralisierung (Yatsu 2018). Alle Wirkdaten stammen aus Zellkultur und Tier; ob irgendetwas davon im Menschen passiert, ist nicht untersucht. Der Körper baut YK-11 stark um, im Urin ist die unveränderte Substanz nicht nachweisbar, wohl aber Abbauprodukte (Piper 2018).',
    benefits: [
      'Warum Menschen es nehmen: als „Myostatin-Hemmer" für Muskelaufbau; YK-11 wurde zuerst in einem beschlagnahmten Schwarzmarktprodukt identifiziert (Piper 2018)',
      'Zellkultur: stärkere Muskelzell-Ausreifung als DHT, vermittelt über Follistatin (Kanno 2013)',
      'Zellkultur: Wachstum und Mineralisierung von Knochenzellen (Yatsu 2018)',
      'Keine Humanstudie zur Wirkung; kein Eintrag bei ClinicalTrials.gov'
    ],
    risks: [
      'Nicht am Menschen untersucht – weder Wirksamkeit noch Sicherheit noch Langzeitfolgen',
      'Leber: cholestatischer Leberschaden bei einem 23-jährigen Soldaten nach LGD-4033, RAD140 und YK-11, Krankenhausaufenthalt (Lee 2023); in der US-Meldedatenbank ein 23-Jähriger mit Leberversagen nach YK-11 (Leciejewska 2024)',
      'SARM-Klasse: 15 Fallberichte über Leberschäden bei gesunden Anwendern, dazu Sehnenriss und Muskelzerfall (systematische Übersicht, Vignali 2023)',
      'Gehirn im Tierversuch: oxidativer Stress, Entzündungsmarker und schlechtere Gedächtnisbildung im Hippocampus von Ratten (Dahleh 2023, 2024)',
      'Graumarktware ohne Qualitätskontrolle; im Sport verboten und über Abbauprodukte nachweisbar'
    ],
    status: 'Kein zugelassenes Arzneimittel in Deutschland, der EU oder den USA; keine registrierte klinische Studie. Namentlich in der Anlage des Anti-Doping-Gesetzes (I.2, Selektive Androgen-Rezeptor-Modulatoren): Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport verboten (§ 2 Abs. 3 AntiDopG); Herstellung, Handel und Abgabe zu Dopingzwecken verboten (§ 2 Abs. 1). Im Sport jederzeit verboten (WADA, S1.2 Andere anabole Wirkstoffe).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23995658/',
    sources: [
      { title: 'Kanno Y et al., Biol Pharm Bull 2013 – YK11 steuert die Muskelzell-Ausreifung in C2C12-Zellen über Follistatin', url: 'https://pubmed.ncbi.nlm.nih.gov/23995658/' },
      { title: 'Yatsu T et al., Biol Pharm Bull 2018 – YK11 fördert Knochenzellen (MC3T3-E1)', url: 'https://pubmed.ncbi.nlm.nih.gov/29491216/' },
      { title: 'Piper T et al., Drug Test Anal 2018 – Stoffwechsel von YK11 und Metaboliten für Dopingkontrollen', url: 'https://pubmed.ncbi.nlm.nih.gov/30379415/' },
      { title: 'Thevis M et al., Rapid Commun Mass Spectrom 2017 – YK-11 für Dopingkontrollen, SARMs WADA-verboten', url: 'https://pubmed.ncbi.nlm.nih.gov/28440570/' },
      { title: 'Lee BK et al., Mil Med 2023 – SARM-bedingter Leberschaden bei einem aktiven Soldaten (LGD-4033, RAD140, YK11)', url: 'https://pubmed.ncbi.nlm.nih.gov/35253885/' },
      { title: 'Leciejewska N et al., Eur J Clin Pharmacol 2024 – SARM-Nebenwirkungen und Leberschäden, Auswertung von Verdachtsfällen', url: 'https://pubmed.ncbi.nlm.nih.gov/38059982/' },
      { title: 'Vignali JD et al., J Xenobiot 2023 – Sicherheit von SARMs bei gesunden Erwachsenen, systematische Übersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/37218811/' },
      { title: 'Dahleh MMM et al., J Steroid Biochem Mol Biol 2023 – YK11, oxidativer Stress und Mitochondrien im Hippocampus der Ratte', url: 'https://pubmed.ncbi.nlm.nih.gov/37468001/' },
      { title: 'Dahleh MMM et al., Chem Biol Interact 2024 – YK11 und Hippocampus-Funktion der Ratte', url: 'https://pubmed.ncbi.nlm.nih.gov/38521455/' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), Anlage zu § 2 Abs. 3 – YK-11 namentlich genannt', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'liraglutid',
    name: 'Liraglutid (Saxenda / Victoza)',
    altNames: 'Liraglutide, Saxenda, Victoza, Ablymico, Liraglutide STADA',
    class: 'GLP-1-Rezeptor-Agonist, täglich gespritzt, verschreibungspflichtig',
    emoji: '💉',
    short: 'Der ältere GLP-1-Rezeptor-Agonist, seit 2009 gegen Typ-2-Diabetes und seit 2015 als Saxenda zum Abnehmen zugelassen. Er senkt das Gewicht belegt, aber deutlich weniger als Semaglutid: Im direkten Vergleich 6,4 gegenüber 15,8 Prozent. Dafür gibt es Langzeitdaten aus über 15 Jahren und einen harten Herz-Kreislauf-Endpunkt bei Typ-2-Diabetes.',
    moa: 'Liraglutid ist ein Abkömmling des Darmhormons GLP-1 und aktiviert wie Semaglutid den GLP-1-Rezeptor: Die Magenentleerung verzögert sich, das Sättigungsgefühl steigt, die Insulinausschüttung wird verstärkt und Glucagon gedämpft. Der praktische Unterschied liegt in der Wirkdauer: Liraglutid wird einmal täglich gespritzt, Semaglutid einmal pro Woche. Tirzepatid und Retatrutid greifen zusätzlich an weiteren Hormonrezeptoren an, Liraglutid nur am GLP-1-Rezeptor.',
    benefits: [
      'Gewicht: 8,4 gegenüber 2,8 kg nach 56 Wochen; mindestens 5 Prozent verloren 63,2 gegenüber 27,1 Prozent, mehr als 10 Prozent 33,1 gegenüber 10,6 Prozent (SCALE, RCT, 3.731 Erwachsene ohne Diabetes, Pi-Sunyer 2015)',
      'Diabetes-Vorbeugung: Bei Prädiabetes erhielten nach 160 Wochen 2 Prozent unter Liraglutid und 6 Prozent unter Placebo die Diagnose Typ-2-Diabetes, Hazard Ratio 0,21 (2.254 Teilnehmende, le Roux 2017)',
      'Herz-Kreislauf bei Typ-2-Diabetes: schwere Ereignisse bei 13,0 gegenüber 14,9 Prozent, Hazard Ratio 0,87, kardiovaskulärer Tod 4,7 gegenüber 6,0 Prozent (LEADER, 9.340 Patienten, 3,8 Jahre, Marso 2016)',
      'Jugendliche mit Adipositas: mindestens 5 Prozent BMI-Senkung bei 43,3 gegenüber 18,7 Prozent (RCT, 251 Jugendliche, Kelly 2020)',
      'Seit 2009 in der EU zugelassen; seit Juli 2026 gibt es chemisch hergestellte Nachfolgepräparate (Ablymico, Liraglutide STADA)'
    ],
    risks: [
      'Verschreibungspflichtig; zur Gewichtsabnahme keine Kassenleistung (§ 34 SGB V)',
      'Schwächer als Semaglutid: im direkten Vergleich 6,4 gegenüber 15,8 Prozent Gewichtsverlust; 27,6 Prozent beendeten Liraglutid vorzeitig, 13,5 Prozent Semaglutid (STEP 8, Rubino 2022)',
      'Magen-Darm-Beschwerden häufig, vor allem Übelkeit und Durchfall; bei Jugendlichen 64,8 gegenüber 36,5 Prozent (Kelly 2020)',
      'Gallenblasen- und Gallenwegserkrankungen unter GLP-1-Rezeptor-Agonisten häufiger, bei Abnehm-Studien relatives Risiko 2,29 (Meta-Analyse, 76 RCTs, He 2022)',
      'Nach dem Absetzen steigt der BMI wieder an (Kelly 2020); laut Fachinformation absetzen, wenn nach 12 Wochen auf voller Dosis nicht mindestens 5 Prozent abgenommen wurden',
      'Suizidgedanken: Die EMA fand 2024 keinen Beleg für einen ursächlichen Zusammenhang'
    ],
    status: 'In der EU zugelassen und in Deutschland verschreibungspflichtig: Victoza seit 30.06.2009 gegen Typ-2-Diabetes, Saxenda seit 23.03.2015 zum Gewichtsmanagement bei Erwachsenen mit BMI ab 30 oder ab 27 mit Begleiterkrankung sowie bei Jugendlichen ab 12 Jahren; Erhaltungsdosis laut Zulassung 3,0 mg täglich. Seit 15.07.2026 zusätzlich chemisch hergestellte Präparate (Ablymico zum Gewichtsmanagement, Liraglutide STADA bei Diabetes). Zum Abnehmen keine Kassenleistung (§ 34 SGB V). Nicht auf der WADA-Verbotsliste 2026; im Überwachungsprogramm stehen nur Semaglutid und Tirzepatid.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/26132939/',
    sources: [
      { title: 'Pi-Sunyer X et al., N Engl J Med 2015 – SCALE Obesity and Prediabetes, RCT mit 3.731 Erwachsenen, 56 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/26132939/' },
      { title: 'le Roux CW et al., Lancet 2017 – drei Jahre Liraglutid bei Prädiabetes, 2.254 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/28237263/' },
      { title: 'Marso SP et al., N Engl J Med 2016 – LEADER, Herz-Kreislauf-Endpunkte bei 9.340 Patienten mit Typ-2-Diabetes', url: 'https://pubmed.ncbi.nlm.nih.gov/27295427/' },
      { title: 'Rubino DM et al., JAMA 2022 – STEP 8, Semaglutid gegen Liraglutid, 338 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/35015037/' },
      { title: 'Kelly AS et al., N Engl J Med 2020 – Liraglutid bei Jugendlichen mit Adipositas, 251 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/32233338/' },
      { title: 'He L et al., JAMA Intern Med 2022 – Meta-Analyse Gallenblase und Gallenwege unter GLP-1-Rezeptor-Agonisten', url: 'https://pubmed.ncbi.nlm.nih.gov/35344001/' },
      { title: 'EMA – Saxenda, europäischer Bewertungsbericht (EPAR)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/saxenda' },
      { title: 'EMA – Ablymico (Liraglutid, STADA), europäischer Bewertungsbericht', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/ablymico' },
      { title: 'EMA/PRAC, Sitzung 8.–11.04.2024 – kein ursächlicher Zusammenhang zwischen GLP-1-Rezeptor-Agonisten und Suizidgedanken', url: 'https://www.ema.europa.eu/en/news/meeting-highlights-pharmacovigilance-risk-assessment-committee-prac-8-11-april-2024' },
      { title: 'WADA Prohibited List 2026 (zweisprachige Fassung der JADA)', url: 'https://www.playtruejapan.org/entry_img/2026_prohibited_List_jpn.pdf' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'bempedoinsaeure',
    name: 'Bempedoinsäure (Nilemdo)',
    altNames: 'Bempedoic acid, Nilemdo, Nustendi (mit Ezetimib), Nexletol, ETC-1002, ACL-Hemmer',
    class: 'ATP-Citrat-Lyase-Hemmer (Cholesterinsenker), verschreibungspflichtig',
    emoji: '💊',
    short: 'Ein Cholesterinsenker für Menschen, die Statine nicht vertragen. Er greift einen Schritt vor dem Statin-Enzym in die Cholesterinbildung ein, wird aber erst in der Leber aktiviert und nicht im Muskel. In CLEAR Outcomes mit 13.970 Patienten senkte er schwere Herz-Kreislauf-Ereignisse von 13,3 auf 11,7 Prozent; das LDL sank um gut 21 Prozentpunkte stärker als unter Placebo. Gicht und Gallensteine traten häufiger auf.',
    moa: 'Bempedoinsäure ist eine Vorstufe, die erst durch das Enzym ACSVL1 aktiviert wird. Dieses Enzym kommt in der Leber vor, im Skelettmuskel fehlt es. Die aktive Form hemmt die ATP-Citrat-Lyase, die in der Cholesterinbildung vor der HMG-CoA-Reduktase liegt, dem Angriffspunkt der Statine. Die Leber bildet weniger Cholesterin, baut mehr LDL-Rezeptoren ein und holt mehr LDL aus dem Blut. Eine genetische Studie an 654.783 Menschen zeigt, dass Varianten im ACLY-Gen pro gesenktem LDL das Herz-Kreislauf-Risiko ähnlich senken wie Varianten im Statin-Zielgen.',
    benefits: [
      'Harter Endpunkt: schwere Herz-Kreislauf-Ereignisse bei 11,7 gegenüber 13,3 Prozent, Hazard Ratio 0,87; Herzinfarkt 3,7 gegenüber 4,8 Prozent (CLEAR Outcomes, 13.970 Statin-Unverträgliche, 40,6 Monate, Nissen 2023)',
      'LDL-Cholesterin nach 6 Monaten um 21,1 Prozentpunkte stärker gesenkt als unter Placebo (CLEAR Outcomes)',
      'Primärprävention: bei 4.206 Hochrisiko-Patienten ohne frühere Herz-Kreislauf-Erkrankung schwere Ereignisse 5,3 gegenüber 7,6 Prozent, Hazard Ratio 0,70 (Teilauswertung, Nissen 2023)',
      'Zusätzlich zu Statinen: LDL nach 12 Wochen um 18,1 Prozentpunkte stärker gesenkt als Placebo, Nebenwirkungen insgesamt nicht häufiger (CLEAR Harmony, 2.230 Patienten, Ray 2019)',
      'Genetische Bestätigung des Wirkprinzips: ACLY-Varianten senken pro 10 mg/dl LDL das Herz-Kreislauf-Risiko um ähnlich viel wie Statin-Varianten, ohne erhöhtes Krebsrisiko (Ference 2019)'
    ],
    risks: [
      'Gicht häufiger: 3,1 gegenüber 2,1 Prozent (CLEAR Outcomes); Harnsäure steigt',
      'Gallensteine häufiger: 2,2 gegenüber 1,2 Prozent (CLEAR Outcomes)',
      'Leichte Anstiege von Kreatinin und Leberwerten (CLEAR Outcomes)',
      'Kein Effekt auf Schlaganfall, kardiovaskulären Tod und Gesamtsterblichkeit in der Gesamtstudie (CLEAR Outcomes)',
      'In CLEAR Harmony brachen 10,9 Prozent wegen Nebenwirkungen ab, unter Placebo 7,1 Prozent',
      'Nicht in Schwangerschaft und Stillzeit; zusammen mit Simvastatin höchstens 40 mg Simvastatin pro Tag (EMA)'
    ],
    status: 'In der EU seit 01.04.2020 als Nilemdo zugelassen (Kombination mit Ezetimib als Nustendi seit 27.03.2020), in Deutschland verschreibungspflichtig (Anlage 1 AMVV). Anwendungsgebiete laut EMA: primäre Hypercholesterinämie und gemischte Dyslipidämie bei Erwachsenen sowie Senkung des kardiovaskulären Risikos bei bestehender oder hoch riskanter atherosklerotischer Herz-Kreislauf-Erkrankung. In den USA seit 21.02.2020 als Nexletol zugelassen, im März 2024 um die Herz-Kreislauf-Indikation erweitert (FDA). Die Nutzung zur LDL- oder ApoB-Senkung als Longevity-Maßnahme ohne diese Indikationen ist nicht zugelassen.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36876740/',
    sources: [
      { title: 'Nissen SE et al., N Engl J Med 2023 – CLEAR Outcomes, Herz-Kreislauf-Endpunkte bei 13.970 Statin-Unverträglichen', url: 'https://pubmed.ncbi.nlm.nih.gov/36876740/' },
      { title: 'Nissen SE et al., JAMA 2023 – CLEAR Outcomes, Primärprävention bei 4.206 Hochrisiko-Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/37354546/' },
      { title: 'Ray KK et al., N Engl J Med 2019 – CLEAR Harmony, Bempedoinsäure zusätzlich zu Statinen, 2.230 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/30865796/' },
      { title: 'Ference BA et al., N Engl J Med 2019 – Mendelsche Randomisierung zu ACLY und Herz-Kreislauf-Erkrankung, 654.783 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/30865797/' },
      { title: 'Pinkosky SL et al., Nat Commun 2016 – leberspezifische Aktivierung über ACSVL1, Grundlage für fehlende Muskelwirkung', url: 'https://pubmed.ncbi.nlm.nih.gov/27892461/' },
      { title: 'EMA – Nilemdo, europäischer Bewertungsbericht (EPAR)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/nilemdo' },
      { title: 'FDA, Drugs@FDA – Nexletol (NDA 211616), Zulassung 21.02.2020, Erweiterung 22.03.2024', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=211616' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 (Bempedoinsäure und ihre Ester)', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'armodafinil',
    name: 'Armodafinil',
    altNames: 'Nuvigil, R-Modafinil, (R)-Modafinil,Eugeroikum, Smart Drug',
    class: 'Wachheitsförderndes Arzneimittel (Eugeroikum), R-Enantiomer von Modafinil; in den USA zugelassen, in Deutschland nicht',
    emoji: '⏰',
    short: 'Die länger wirksame Hälfte von Modafinil: Modafinil ist ein Gemisch aus zwei spiegelbildlichen Molekülen, Armodafinil nur die R-Form. In US-Zulassungsstudien hielt es Menschen mit Narkolepsie, Schichtarbeitsstörung und Schlafapnoe besser wach. Dass es stärker wirkt als Modafinil, ist nicht gezeigt: Im einzigen direkten Vergleich schnitten beide gleich ab. In Deutschland ist es nicht zugelassen.',
    moa: 'Modafinil besteht zu gleichen Teilen aus R- und S-Modafinil. Die S-Form wird schnell abgebaut, die R-Form, also Armodafinil, bleibt länger im Blut. Bei gleicher Milligramm-Menge lag die Gesamtmenge im Blut unter Armodafinil um 33 bis 40 Prozent höher, und die Spiegel blieben später am Tag höher, obwohl die Halbwertszeit mit etwa 13 Stunden gleich war (Darwish 2009). Der Wirkort gilt als derselbe wie bei Modafinil: Laut US-Fachinformation bindet der Wirkstoff an den Dopamin-Wiederaufnahmetransporter und erhöht das Dopamin außerhalb der Nervenzellen. Eine eigene Bildgebungsstudie zu Armodafinil wurde bei der Recherche nicht gefunden.',
    benefits: [
      'Narkolepsie: länger wach im Wachbleibe-Test (MWT), plus 1,3 bzw. 2,6 Minuten gegenüber minus 1,9 Minuten unter Placebo; Besserung des Gesamtzustands bei 71 gegenüber 33 Prozent (RCT, 196 Patienten, 12 Wochen, Harsh 2006)',
      'Schichtarbeitsstörung: Einschlaflatenz in der Nachtschicht von 2,3 auf 5,3 Minuten gegenüber 2,4 auf 2,8 Minuten; weniger Schläfrigkeit auch auf dem Heimweg (RCT, 254 Nachtarbeiter, 12 Wochen, Czeisler 2009)',
      'Gesunde nach 24 Stunden Schlafentzug: im Wachbleibe-Test 27,6 gegenüber 15,3 Minuten unter Placebo, Einzelgabe (RCT, 135 Männer, Gasior 2014)',
      'Bipolare Depression als Zusatztherapie: in der Meta-Analyse aus fünf RCTs mehr Ansprechen (RR 1,18) und Remission (RR 1,38), aber eine von zwei großen Armodafinil-Studien verfehlte ihr Ziel (Nunez 2020, Ketter 2015) – nicht zugelassen',
      'Im direkten Vergleich mit Modafinil bei Schichtarbeitsstörung gleich wirksam: 72,1 gegenüber 74,3 Prozent Ansprechen (RCT, 211 Patienten, Tembe 2011)'
    ],
    risks: [
      'Häufig Kopfschmerzen, Übelkeit, Schwindel und Schlaflosigkeit (US-Fachinformation)',
      'Schwere Hautreaktionen bis Stevens-Johnson-Syndrom, DRESS, Angioödem; bei Ausschlag laut Fachinformation sofort absetzen',
      'Psychiatrische Nebenwirkungen; Vorsicht bei Psychose, Depression oder Manie in der Vorgeschichte; bei Herz-Kreislauf-Erkrankungen engere Überwachung',
      'Missbrauch und Weitergabe nach der Markteinführung beschrieben; in den USA Schedule IV',
      'Schwangerschaft: Daten unzureichend, Wachstumsverzögerung und Fehlgeburten unter Armodafinil und Modafinil gemeldet',
      'Im Doping verboten: Die WADA-Liste 2026 führt Modafinil unter S6.A und schließt ausdrücklich alle optischen Isomere ein'
    ],
    status: 'Deutschland: kein zugelassenes Arzneimittel mit Armodafinil, auch keine zentrale EU-Zulassung (EMA-Arzneimittelliste). Armodafinil steht nicht im Betäubungsmittelgesetz; die Arzneimittelverschreibungsverordnung nennt in Anlage 1 Modafinil, Armodafinil aber nicht eigens. USA: seit 15.06.2007 als Nuvigil zugelassen gegen übermäßige Schläfrigkeit bei Schlafapnoe, Narkolepsie und Schichtarbeitsstörung, Schedule IV. Nutzung zur Leistungssteigerung bei Gesunden ist nirgends zugelassen. Doping: WADA-Liste 2026 S6.A (Modafinil einschließlich optischer Isomere), im Wettkampf verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/19880686/',
    sources: [
      { title: 'Harsh JR et al., Curr Med Res Opin 2006 – Armodafinil bei Narkolepsie, RCT mit 196 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/16684437/' },
      { title: 'Czeisler CA et al., Mayo Clin Proc 2009 – Armodafinil bei Schichtarbeitsstörung, RCT mit 254 Nachtarbeitern', url: 'https://pubmed.ncbi.nlm.nih.gov/19880686/' },
      { title: 'Gasior M et al., J Clin Psychopharmacol 2014 – Wachheit nach 24 Stunden Schlafentzug, 135 gesunde Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/25159886/' },
      { title: 'Darwish M et al., Clin Drug Investig 2009 – unterschiedliche Pharmakokinetik von Armodafinil und Modafinil', url: 'https://pubmed.ncbi.nlm.nih.gov/19663523/' },
      { title: 'Tembe DV et al., Neurol Res Int 2011 – Armodafinil gegen Modafinil bei Schichtarbeitsstörung, RCT mit 211 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/21766023/' },
      { title: 'Calabrese JR et al., J Clin Psychiatry 2014 – Armodafinil als Zusatz bei bipolarer Depression, 433 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/25099397/' },
      { title: 'Ketter TA et al., J Affect Disord 2015 – zweite Phase-3-Studie bipolare Depression, Ziel verfehlt', url: 'https://pubmed.ncbi.nlm.nih.gov/25933099/' },
      { title: 'Nunez NA et al., Bipolar Disord 2020 – Meta-Analyse Modafinil/Armodafinil bei bipolarer Depression, 5 RCTs', url: 'https://pubmed.ncbi.nlm.nih.gov/31643130/' },
      { title: 'FDA, Drugs@FDA – Nuvigil (NDA 021875), Zulassung 15.06.2007, Fachinformation', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=021875' },
      { title: 'WADA Prohibited List 2026 (zweisprachige Fassung der JADA)', url: 'https://www.playtruejapan.org/entry_img/2026_prohibited_List_jpn.pdf' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'nad-nasenspray',
    name: 'NAD+ als Nasenspray und Spritze',
    altNames: 'NAD+ Nasal Spray, NAD+-Injektion, subkutanes NAD+, Nicotinamid-Adenin-Dinukleotid',
    class: 'Coenzym (Nicotinamid-Adenin-Dinukleotid), in diesen Darreichungsformen nicht zugelassen',
    emoji: '👃',
    short: 'NAD+ direkt in die Nase oder unter die Haut, statt über die Vorstufen NMN und NR oder per Infusion. Am Menschen gibt es für beide Wege keine Wirksamkeitsstudie; unter die Haut gespritzt wurde NAD+ in einer vorläufigen Sicherheitsstudie an 6 Personen über 3 Tage. Für das Nasenspray stammen alle Daten aus Ratten- und Mausversuchen.',
    moa: 'NAD+ ist ein Coenzym, das jede Zelle für den Energiestoffwechsel und für Enzyme wie Sirtuine und PARP braucht; mit dem Alter sinkt der Spiegel in mehreren Geweben. Die Vorstufen NMN und NR werden geschluckt und erst in der Zelle zu NAD+ umgebaut. Beim Nasenspray ist die Idee, NAD+ über die Riechschleimhaut direkt Richtung Gehirn zu bringen; bei Ratten stieg der NAD+-Gehalt im Gehirn nach Gabe in die Nase (Ying 2007). Bei der Spritze unter die Haut soll NAD+ den Verdauungstrakt umgehen. Offen ist, wie viel davon unzerlegt in die Zellen gelangt: Über die Vene infundiertes NAD+ verschwand beim Menschen in den ersten 2 Stunden vollständig aus dem Blutplasma, die Abbauprodukte passten zu einer raschen Zerlegung durch Enzyme (Grant 2019).',
    benefits: [
      'Unter die Haut, in den Muskel oder in die Vene gespritzt wurde NAD+ in einer randomisierten Pilotstudie über 3 Tage gegeben (unter die Haut 6, in den Muskel 4, in die Vene 5 Personen); alle blieben in der Studie, auf die Injektionen zurückführbare unerwartete Nebenwirkungen traten nicht auf (Nkrumah-Elie 2026, Preprint)',
      'Bei Ratten erhöhte NAD+ in die Nase den NAD+-Gehalt im Gehirn und verringerte nach einem künstlich ausgelösten Schlaganfall die Infarktgröße; Nicotinamid auf demselben Weg tat das nicht (Ying 2007)',
      'Bei Mäusen mit chemisch ausgelöstem Geruchsverlust stellte NAD+ in die Nase den Geruchssinn und die Riechschleimhaut teilweise wieder her; in Zellkultur förderte NAD+ die Reifung menschlicher Riech-Stammzellen (Yoo 2026)',
      'Als Nahrungsergänzung zum Schlucken stuft der Novel-Food-Katalog der EU-Kommission NAD+ als nicht neuartig ein, eine Novel-Food-Zulassung ist dafür nicht nötig – für Nasenspray und Spritze gilt das nicht, sie sind keine Lebensmittel'
    ],
    risks: [
      'Für das Nasenspray gibt es keine einzige Studie am Menschen, weder zur Wirkung noch zur Verträglichkeit',
      'Für die Spritze unter die Haut liegen Sicherheitsdaten von 6 Personen über 3 Tage vor, aus einem noch nicht begutachteten Preprint; Langzeit- und Wechselwirkungsdaten fehlen',
      'Injektionen von NAD+ oder NR waren in den Pilotstudien mit Beschwerden an der Einstichstelle verbunden; in der Folgestudie mit NR berichteten 45,9 Prozent über Schmerzen länger als 2 Minuten nach der Spritze',
      'Selbst gespritzte oder selbst angemischte Lösungen aus dem Graumarkt: keine Qualitätskontrolle, Risiko von Verunreinigung und Infektion an der Einstichstelle',
      'Unklar ist, ob unzerlegtes NAD+ in nennenswerter Menge in die Zellen gelangt; über die Vene gegeben wurde es im Blut rasch abgebaut (Grant 2019)'
    ],
    status: 'Kein zugelassenes Arzneimittel mit NAD+ als Nasenspray oder Injektion in Deutschland oder der EU gefunden. Nasenspray und Spritze sind keine Lebensmittel, weil Lebensmittel nach EU-Recht zum Verzehr bestimmt sind; als Produkt zur Beeinflussung von Körperfunktionen wären sie Arzneimittel, die ohne Zulassung nicht in Verkehr gebracht werden dürfen. Als Nahrungsergänzung zum Schlucken stuft der Novel-Food-Katalog der EU-Kommission NAD+ als nicht neuartig ein (Eintrag vom 01.02.2024).',
    link: 'https://europepmc.org/article/PPR/PPR1265369',
    sources: [
      { title: 'Nkrumah-Elie Y et al., medRxiv 2026 (Preprint) – vorläufige Sicherheitsauswertung zweier Pilotstudien mit Injektionen von NR und NAD+ unter die Haut, in den Muskel und in die Vene', url: 'https://europepmc.org/article/PPR/PPR1265369' },
      { title: 'Grant R et al., Front Aging Neurosci 2019 – NAD+-Metabolom in Plasma und Urin während einer 6-stündigen NAD+-Infusion, Pilotstudie', url: 'https://pubmed.ncbi.nlm.nih.gov/31572171/' },
      { title: 'Ying W et al., Front Biosci 2007 – NAD+ in die Nase verringert die Hirnschädigung bei Ratten nach vorübergehender Ischämie', url: 'https://pubmed.ncbi.nlm.nih.gov/17127275/' },
      { title: 'Yoo SH et al., Exp Mol Med 2026 – NAD+ in die Nase bei Geruchsverlust, Maus und menschliche Riech-Stammzellen', url: 'https://pubmed.ncbi.nlm.nih.gov/42380286/' },
      { title: 'ClinicalTrials.gov NCT06919328 – Aufnahme und Verträglichkeit von injiziertem NR im Vergleich zu NAD+, randomisiert, verblindet', url: 'https://clinicaltrials.gov/study/NCT06919328' },
      { title: 'ClinicalTrials.gov NCT07251608 – Sicherheitsstudie mit wiederholten Injektionen von NR unter die Haut und in den Muskel über 100 Tage', url: 'https://clinicaltrials.gov/study/NCT07251608' },
      { title: 'EU-Kommission, Novel-Food-Katalog – Nicotinamide adenine dinucleotide (NAD+): nicht neuartig in Nahrungsergänzungsmitteln', url: 'https://ec.europa.eu/food/food-feed-portal/screen/novel-food-catalogue/search/details/POL-NF-09841' },
      { title: 'Verordnung (EG) Nr. 178/2002, Artikel 2 – Begriff Lebensmittel', url: 'https://eur-lex.europa.eu/eli/reg/2002/178/oj' },
      { title: 'Arzneimittelgesetz § 21 – Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' }
    ],
    community: [],
    filterCat: 'Longevity'
  },
  {
    id: 'c60',
    name: 'Fulleren C60 in Olivenöl',
    altNames: 'C60, Buckminsterfulleren, [60]Fulleren, C60-OO, C60-EVOO, C60-Olivenöl',
    class: 'Kohlenstoff-Molekül (Fulleren), in Öl gelöst; in der EU nicht als Lebensmittel zugelassen',
    emoji: '⚽',
    short: 'Ein fußballförmiges Molekül aus 60 Kohlenstoffatomen, gelöst in Olivenöl. Der Ruf stammt aus einer Rattenstudie von 2012, in der eine kleine Gruppe fast doppelt so lange lebte. Zwei spätere Mäusestudien fanden keine echte Lebensverlängerung, eine davon zeigte, dass C60-Öl unter Licht giftige Stoffe bildet. Am Menschen ist C60 nicht untersucht.',
    moa: 'C60 fängt im Reagenzglas sehr effektiv freie Radikale ab und gilt deshalb als starkes Antioxidans. In Olivenöl gelöst wird es bei Ratten über den Darm aufgenommen und innerhalb einiger zehn Stunden wieder ausgeschieden; die Autoren der Rattenstudie führten die längere Lebensdauer vor allem auf weniger altersbedingten oxidativen Stress zurück (Baati 2012). Belegt ist diese Wirkkette nicht: Bei Mäusen ließ sich der Lebenszeiteffekt nicht wiederholen, und unter Umgebungslicht entstehen in C60-Öl Abbauprodukte, die selbst schädlich sind (Grohn 2021).',
    benefits: [
      'Rattenstudie 2012: Eine kleine Gruppe Ratten, die C60 in Olivenöl bekam, lebte deutlich länger als Ratten mit Olivenöl oder ohne Behandlung; die Wiederholungsstudie beziffert den Unterschied auf 90 Prozent mehr mittlere Lebensdauer (Baati 2012)',
      'In derselben Arbeit dämpfte C60-Öl die Leberschädigung durch Tetrachlorkohlenstoff bei Ratten und zeigte keine chronische Giftigkeit (Baati 2012)',
      'Bei CBA/Ca-Mäusen lebten Tiere mit C60 länger als Tiere mit reinem Olivenöl, aber nicht länger als Tiere mit Wasser; die Autoren erklären das mit einem nachteiligen Effekt des Olivenöls, den C60 ausglich (Shytikov 2021)',
      'In einer nach OECD-Leitlinie durchgeführten 14-Tage-Studie an Ratten traten unter C60-Öl keine Nebenwirkungen auf (Burres 2024); im Mikrokerntest an Mäusen fand sich keine Erbgutschädigung (Moussa 2025) – an beiden Arbeiten war F. Moussa beteiligt, Mitautor der Rattenstudie von 2012'
    ],
    risks: [
      'Keine einzige Studie am Menschen, weder zur Wirkung noch zur Verträglichkeit',
      'Der Lebenszeiteffekt ließ sich nicht wiederholen: Bei C57BL/6-Mäusen brachte C60 in nativem Olivenöl gegenüber unbehandelten Tieren weder mehr Lebenszeit noch mehr gesunde Lebenszeit; bei CB6F1-Mäusen mit Gabe in die Bauchhöhle betrug die mittlere Lebensdauer 144 gegenüber 145 Wochen unter Olivenöl (Grohn 2021)',
      'C60-Öl bildet unter Licht in der Stärke normaler Raumbeleuchtung giftige Stoffe, die bei Mäusen innerhalb von 2 Wochen zu schweren Erkrankungen und Todesfällen führten (Grohn 2021)',
      'Online gekaufte Produkte unterschieden sich deutlich in Aussehen, Verunreinigungen, C60-Gehalt und Aktivität von frisch hergestelltem C60-Öl (Grohn 2021)',
      'Der wissenschaftliche Ausschuss für Verbrauchersicherheit der EU konnte 2023 die Sicherheit von Fullerenen in Kosmetika nicht bestätigen und ein erbgutschädigendes Potenzial von C60 und C70 nicht ausschließen',
      'Ein Antrag, C60 als Lebensmittelzusatzstoff zu verwenden, wurde 2010 vom norwegischen Wissenschaftskomitee als ungeeignet für eine Bewertung eingestuft: Die meisten zentralen Sicherheitsdaten fehlten'
    ],
    status: 'In der EU weder als Lebensmittel noch als Arzneimittel zugelassen. Der Novel-Food-Katalog der EU-Kommission enthält keinen Eintrag zu Fullerenen (Abfrage 05.10.2026), eine Zulassung als neuartiges Lebensmittel nach Verordnung (EU) 2015/2283 wurde bei der Recherche nicht gefunden. Da C60 ein synthetisch hergestellter Stoff ist, der vor dem 15. Mai 1997 nicht verzehrt wurde, bräuchte er für den Verkauf als Lebensmittel eine solche Zulassung. Für Kosmetika konnte der Ausschuss SCCS 2023 die Sicherheit nicht bestätigen.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33123847/',
    sources: [
      { title: 'Baati T et al., Biomaterials 2012 – Verlängerung der Lebensdauer von Ratten durch wiederholte orale Gabe von C60', url: 'https://pubmed.ncbi.nlm.nih.gov/22498298/' },
      { title: 'Grohn KJ et al., GeroScience 2021 – C60 in Olivenöl: lichtabhängige Giftigkeit, keine Lebensverlängerung bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/33123847/' },
      { title: 'Shytikov D et al., Rejuvenation Res 2021 – Langzeitgabe von C60 bei CBA/Ca-Mäusen, Vergleich mit Olivenöl und Wasser', url: 'https://pubmed.ncbi.nlm.nih.gov/33849306/' },
      { title: 'Burres C et al., EXCLI J 2024 – Kurzzeit-Toxizitätsstudie zu gelöstem C60 bei Ratten nach OECD-Leitlinie', url: 'https://pubmed.ncbi.nlm.nih.gov/38983781/' },
      { title: 'Moussa F, Nanomaterials 2025 – Mikrokerntest zu C60/C70 in Olivenöl bei Mäusen', url: 'https://pubmed.ncbi.nlm.nih.gov/40497917/' },
      { title: 'SCCS (Wissenschaftlicher Ausschuss Verbrauchersicherheit der EU), Stellungnahme SCCS/1649/23 vom 26.10.2023 – Fullerene und hydroxylierte Fullerene in Kosmetika', url: 'https://health.ec.europa.eu/system/files/2023-11/sccs_o_271.pdf' },
      { title: 'VKM (Norwegisches Wissenschaftskomitee für Lebensmittelsicherheit), Bericht 2010:41 – Antrag auf Verwendung von Fulleren C60 als Lebensmittelzusatzstoff', url: 'https://vkm.no/english/riskassessments/allpublications/evaluationofanapplicationtousefullerenec60asafoodadditive.4.72c3261615e09f2472f47c99.html' },
      { title: 'EU-Kommission, Novel-Food-Katalog (Suche, kein Eintrag zu Fullerenen, Abfrage 05.10.2026)', url: 'https://ec.europa.eu/food/food-feed-portal/screen/novel-food-catalogue/search' },
      { title: 'Verordnung (EU) 2015/2283 über neuartige Lebensmittel', url: 'https://eur-lex.europa.eu/eli/reg/2015/2283/oj' }
    ],
    community: [],
    filterCat: 'Longevity'
  },
  {
    id: 'ketamin',
    name: 'Ketamin / Esketamin (Spravato)',
    altNames: 'Esketamin, Spravato, Ketanest, Ketamin-Infusion, Special K, K',
    class: 'NMDA-Rezeptor-Antagonist, Narkosemittel; Esketamin-Nasenspray als Antidepressivum zugelassen, verschreibungspflichtig',
    emoji: '💊',
    short: 'Esketamin-Nasenspray (Spravato) ist in der EU seit 2019 bei therapieresistenter Depression zugelassen, nur unter ärztlicher Aufsicht. Ketamin-Infusionen gegen Depression wirken in randomisierten Studien schnell, sind aber eine nicht zugelassene Anwendung. Für Freizeitkonsum und Microdosing gibt es keine Nutzenbelege, dafür gut dokumentierte Blasenschäden und ein Abhängigkeitsrisiko bei häufigem Gebrauch.',
    moa: 'Ketamin blockiert den NMDA-Rezeptor, eine Andockstelle des Botenstoffs Glutamat; Esketamin ist die eine Spiegelbildform des Moleküls. In Narkosedosis schaltet das Bewusstsein ab, darunter entstehen Abgelöstheit von Körper und Umgebung (Dissoziation). Der antidepressive Effekt setzt innerhalb von Stunden ein, viel schneller als bei klassischen Antidepressiva; wie genau er zustande kommt, ist noch umstritten. Die Blasenschäden gehen nach heutigem Verständnis auf Ketamin und seine Abbauprodukte im Urin zurück.',
    benefits: [
      'Esketamin-Nasenspray plus neues Antidepressivum senkte die Depressionsskala nach 4 Wochen um 4,0 Punkte stärker als Antidepressivum plus Schein-Spray (TRANSFORM-2, 227 Patienten, Popova 2019)',
      'Rückfallschutz: Bei Patienten in stabiler Remission erlitten unter fortgesetztem Esketamin 26,7 % einen Rückfall, nach Umstellung auf Placebo 45,3 % (SUSTAIN-1, Daly 2019)',
      'Im direkten Vergleich mit Quetiapin nach 8 Wochen Remission bei 27,1 % gegenüber 17,6 % (ESCAPE-TRD, 676 Patienten, offen mit verblindeten Bewertern, Reif 2023)',
      'Eine einzelne Ketamin-Infusion senkte die Depressionsskala nach 24 Stunden um 7,95 Punkte stärker als das Vergleichsnarkotikum Midazolam, Ansprechen 64 % gegenüber 28 % (73 Patienten, Murrough 2013)',
      'Ketamin-Infusionen schnitten bei therapieresistenter Depression ohne Psychose nicht schlechter ab als Elektrokrampftherapie: Ansprechen 55,4 % gegenüber 41,2 % (ELEKT-D, 403 Patienten, offen, Anand 2023)'
    ],
    risks: [
      'Dissoziation bei 27 % der Esketamin-Behandelten, dazu Schwindel, Übelkeit, Benommenheit und vorübergehender Blutdruckanstieg; deshalb Überwachung in der Praxis bis zur Stabilisierung (Fachinformation)',
      'Abhängigkeit und Toleranz sind bei längerem Ketamin-Gebrauch beschrieben, beim Absetzen Verlangen, Angst, Zittern, Schwitzen, Herzklopfen (Fachinformation)',
      'Blase: Bei Freizeitkonsumenten in 45 Studien mit 4.921 Patienten häufiger Harndrang bei 77,1 %, Blasenschmerz bei 60,4 %, Harnstau in den Nieren bei 30,2 %; Besserung nur mit Abstinenz (Chan 2022)',
      'Interstitielle Zystitis ist bei täglichem, langem Gebrauch hoher Mengen berichtet; in den Esketamin-Studien keine Fälle, aber mehr Beschwerden beim Wasserlassen als unter Placebo (Fachinformation)',
      'Leberschäden sind bei chronischem Ketamin-Gebrauch berichtet; in einer Langzeitstudie mit Esketamin über bis zu 79 Monate kein Hinweis darauf (Fachinformation)',
      'Vorsicht bei Psychose, Manie oder bipolarer Störung in der Vorgeschichte; Gegenanzeige, wenn ein Blutdruck- oder Hirndruckanstieg gefährlich wäre (Fachinformation)'
    ],
    status: 'EU: Esketamin-Nasenspray (Spravato) seit 18.12.2019 zugelassen, zusammen mit einem SSRI oder SNRI bei Erwachsenen mit therapieresistenter Depression nach mindestens zwei erfolglosen Antidepressiva, außerdem als Kurzzeitbehandlung bei einem psychiatrischen Notfall; Anwendung nur unter Aufsicht von Fachpersonal. USA: zugelassen bei therapieresistenter Depression auch als alleinige Behandlung, Betäubungsmittel der Schedule III, Abgabe nur über ein Sicherheitsprogramm (REMS). Deutschland: Ketamin und Esketamin sind verschreibungspflichtig (Anlage 1 der Arzneimittelverschreibungsverordnung) und stehen nicht in den Anlagen des Betäubungsmittelgesetzes (Stand Oktober 2026). Ketamin-Infusionen gegen Depression sind eine nicht zugelassene Anwendung (off label). Freizeitkonsum ist eine missbräuchliche Verwendung eines Arzneimittels; die Abgabe ohne Rezept ist verboten.',
    link: 'https://www.ema.europa.eu/en/documents/product-information/spravato-epar-product-information_en.pdf',
    sources: [
      { title: 'EMA, Spravato: Produktinformation (EPAR), zuletzt aktualisiert 23.01.2025', url: 'https://www.ema.europa.eu/en/documents/product-information/spravato-epar-product-information_en.pdf' },
      { title: 'US-Fachinformation Spravato (DailyMed, Fassung September 2026)', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d81a6a79-a74a-44b7-822c-0dfa3036eaed' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 (Ketamin, Esketamin)', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Popova V et al., Am J Psychiatry 2019 – TRANSFORM-2, Esketamin-Nasenspray plus Antidepressivum, 227 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/31109201/' },
      { title: 'Daly EJ et al., JAMA Psychiatry 2019 – SUSTAIN-1, Rückfallschutz mit Esketamin', url: 'https://pubmed.ncbi.nlm.nih.gov/31166571/' },
      { title: 'Reif A et al., N Engl J Med 2023 – ESCAPE-TRD, Esketamin gegen Quetiapin, 676 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/37792613/' },
      { title: 'Murrough JW et al., Am J Psychiatry 2013 – Ketamin-Infusion gegen Midazolam, 73 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/23982301/' },
      { title: 'Anand A et al., N Engl J Med 2023 – ELEKT-D, Ketamin gegen Elektrokrampftherapie, 403 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/37224232/' },
      { title: 'Nikolin S et al., EClinicalMedicine 2023 – Meta-Analyse, 49 RCTs zu Ketamin und Esketamin bei Depression', url: 'https://pubmed.ncbi.nlm.nih.gov/37593223/' },
      { title: 'Chan EOT et al., Hong Kong Med J 2022 – systematische Übersicht und Meta-Analyse zur Ketamin-Uropathie', url: 'https://pubmed.ncbi.nlm.nih.gov/36464318/' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'lsd-microdosing',
    name: 'LSD-Microdosing',
    altNames: 'LSD, Lysergid, Lysergsäurediethylamid, Microdosing, Mikrodosierung, MM120, DT120',
    class: 'Serotonerges Psychedelikum in sehr niedriger, nicht berauschender Menge; Betäubungsmittel nach Anlage I BtMG',
    emoji: '🧪',
    short: 'Beim Microdosing wird LSD wiederholt in so kleinen Mengen genommen, dass kein Rausch entsteht; versprochen werden mehr Kreativität, Fokus und bessere Stimmung. In placebokontrollierten Studien fühlten sich Teilnehmende an Einnahmetagen etwas besser, dauerhafte Verbesserungen von Stimmung, Kreativität oder ADHS-Symptomen blieben aber aus. LSD ist in Deutschland nicht verkehrsfähig; in voller Dosis wird es von einem Hersteller gegen Angststörung entwickelt, das ist kein Microdosing.',
    moa: 'LSD bindet vor allem an den Serotoninrezeptor 5-HT2A in der Großhirnrinde, darüber entstehen in voller Dosis die veränderten Wahrnehmungen. Beim Microdosing soll eine Menge unterhalb dieser Schwelle die Stimmung und das Denken über Tage anheben. Dass auch niedrige Mengen messbar wirken, ist gezeigt: Teilnehmende spüren dosisabhängig etwas. Ein Weg von dort zu einer anhaltenden Verbesserung ist am Menschen nicht belegt. LSD bindet außerdem an den Serotoninrezeptor 5-HT2B am Herzen, über den andere Wirkstoffe bei Dauereinnahme Herzklappen geschädigt haben.',
    benefits: [
      'Spürbare Akuteffekte: In einer doppelblinden Laborstudie mit 20 Gesunden riefen einzelne niedrige Mengen dosisabhängige subjektive Effekte hervor, bei der höchsten Stufe mehr Tatkraft (Bershad 2019)',
      'An Einnahmetagen höhere Werte für Kreativität, Verbundenheit, Energie, Glück und Wohlbefinden, aber auch für Gereiztheit, bei 80 gesunden Männern über 6 Wochen (Murphy 2023)',
      'In einer offenen Studie ohne Kontrollgruppe berichteten 19 Menschen mit Depression im Mittel 60 % weniger Symptome; an Einnahmetagen bessere Stimmung, aber nicht weniger Depression (Daldegan-Bueno 2026)'
    ],
    risks: [
      'Angst als häufigste behandlungsbedingte Nebenwirkung: 4 von 40 Männern in der LSD-Gruppe brachen deshalb ab (Murphy 2023)',
      'Herzklappen: LSD aktiviert den Rezeptor 5-HT2B; ob monatelanges Microdosing Herzklappen schädigt, wurde nie in einer geeigneten Studie geprüft (Tagen 2023)',
      'Die Studien liefen über 4 bis 8 Wochen, meist an gesunden Freiwilligen; Daten zu monate- oder jahrelanger Einnahme fehlen',
      'Außerhalb von Studien ist der Gehalt unbekannt, und als Betäubungsmittel der Anlage I ist schon der Besitz strafbar'
    ],
    status: 'Deutschland: Lysergid (LSD) steht in Anlage I des Betäubungsmittelgesetzes, ist also nicht verkehrsfähig und nicht verschreibbar; Besitz ist strafbar. Kein zugelassenes LSD-Präparat in der EU oder in den USA, für Microdosing gibt es auch kein Zulassungsverfahren. Der Hersteller Definium Therapeutics (früher MindMed) entwickelt eine LSD-Schmelztablette (MM120, jetzt DT120) als einmalige volle Dosis gegen generalisierte Angststörung; zwei Phase-3-Studien waren nach Herstellerangaben 2026 positiv, ein Zulassungsantrag in den USA ist für das erste Halbjahr 2027 geplant. Eine Microdosing-Studie desselben Herstellers bei ADHS verfehlte ihren Hauptendpunkt.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/36997080/',
    sources: [
      { title: 'Szigeti B et al., eLife 2021 – selbstverblindete Microdosing-Studie (LSD und Psilocybin), 191 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/33648632/' },
      { title: 'Murphy RJ et al., Biol Psychiatry 2023 – randomisierte LSD-Microdosing-Studie zu Hause, 80 gesunde Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/36997080/' },
      { title: 'Murphy RJ et al., Psychopharmacology 2025 – Kreativitätstests nach akutem und sechswöchigem LSD-Microdosing', url: 'https://pubmed.ncbi.nlm.nih.gov/39235512/' },
      { title: 'Bershad AK et al., Biol Psychiatry 2019 – akute Effekte niedriger LSD-Mengen, doppelblind, 20 Gesunde', url: 'https://pubmed.ncbi.nlm.nih.gov/31331617/' },
      { title: 'ClinicalTrials.gov NCT05200936 – niedrig dosiertes MM120 bei ADHS, Phase 2a, 53 Erwachsene, Ergebnisse', url: 'https://clinicaltrials.gov/study/NCT05200936' },
      { title: 'Daldegan-Bueno D et al., Prog Neuropsychopharmacol Biol Psychiatry 2026 – offene Phase-2a-Studie LSD-Microdosing bei Depression, 19 Teilnehmende', url: 'https://pubmed.ncbi.nlm.nih.gov/41713673/' },
      { title: 'Robison R et al., JAMA 2025 – MM120 (Lysergid) als Einzeldosis bei generalisierter Angststörung, Phase 2b, 198 Erwachsene', url: 'https://pubmed.ncbi.nlm.nih.gov/40906494/' },
      { title: 'Definium Therapeutics, Pressemitteilung vom 14.09.2026 zur Phase-3-Studie Panorama (245 Teilnehmende)', url: 'https://ir.definiumtx.com/news-events/press-releases/detail/251/definium-therapeutics-announces-positive-topline-results-from-phase-3-panorama-study-of-dt120-odt-in-generalized-anxiety-disorder' },
      { title: 'Tagen M et al., J Psychopharmacol 2023 – Herzklappenrisiko bei chronischem Microdosing', url: 'https://pubmed.ncbi.nlm.nih.gov/37572027/' },
      { title: 'Betäubungsmittelgesetz, Anlage I (Lysergid)', url: 'https://www.gesetze-im-internet.de/btmg_1981/anlage_i.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'trenbolon',
    name: 'Trenbolon',
    altNames: 'Trenbolonacetat, 17β-Trenbolon, Parabolan, Tren',
    class: 'Anabol-androgenes Steroid aus der Nandrolon-Gruppe, Tierarzneimittel zur Rindermast, für Menschen nicht zugelassen',
    emoji: '⚠️',
    short: 'Trenbolon ist ein anabol-androgenes Steroid aus der Nandrolon-Gruppe, in den USA als Implantat für Mastrinder zugelassen, für Menschen nicht. Eine kontrollierte Studie zur Wirkung am Menschen gibt es nicht. Was es gibt, sind Fallberichte, Interviews und eine große Befragung, in der Trenbolon-Anwender deutlich häufiger über psychische, Herz- und Leberbeschwerden berichteten als Anwender anderer Steroide.',
    moa: 'Trenbolon ist ein synthetischer Abkömmling des Testosterons aus der Nandrolon-Gruppe und wirkt über den Androgenrezeptor stark aufbauend bei begrenzter vermännlichender Wirkung (Übersicht Borecki 2024). Wie bei allen anabol-androgenen Steroiden drosselt der hohe Hormonspiegel die körpereigene Steuerung der Hoden, und die eigene Testosteronproduktion fällt ab. Wie stark Trenbolon im Vergleich zu anderen Steroiden am Menschen wirkt, ist nicht gemessen; die Angaben zur Wirkstärke stammen aus Tier- und Laborversuchen. Grundlagen zur Wirkweise: siehe Eintrag Anabole Steroide.',
    benefits: [
      'Warum Menschen es nehmen: Trenbolon gilt als besonders stark aufbauendes Steroid mit begrenzter vermännlichender Wirkung (Übersicht Borecki 2024); kontrollierte Humandaten zu Muskelmasse oder Kraft gibt es nicht',
      'Tiermedizin: in den USA als Implantat für Mastrinder zugelassen, Anwendungsgebiet verbesserte Futterverwertung, nur auf tierärztliche Anordnung (21 CFR 522.2476)',
      'Verbreitung: Im Global Drug Survey 2024 hatten 237 von 1.146 Männern mit Steroidgebrauch im Vorjahr injizierbares Trenbolon genutzt (Bonenti 2026)'
    ],
    risks: [
      'Psyche: Trenbolon-Anwender berichteten signifikant häufiger über Stimmungsschwankungen, Reizbarkeit und depressive Symptome als Anwender anderer Steroide (Befragung, 1.146 Männer, p < 0,001, kleine bis mittlere Effekte, Bonenti 2026); in Interviews mit 16 Anwendern galt Trenbolon als das Steroid mit den schwersten Folgen, genannt wurden Aggression, Gewalt und Probleme mit der Impulskontrolle (Piatkowski 2023)',
      'Herz und Leber: Herz-Kreislauf- und Leberbeschwerden wurden von Trenbolon-Anwendern signifikant häufiger angegeben (Bonenti 2026); Fallbericht eines Herzinfarkts bei einem 23-jährigen Bodybuilder nach längerem Gebrauch (Shahsavari Nia 2014); schwere Gallenstauung mit Bilirubin bis 65,5 mg/dl bei einem 21-Jährigen, behandelt mit Leberdialyse (Anand 2006)',
      'Weitere Befunde: wiederkehrende akute Bauchspeicheldrüsenentzündung, die nach erneutem Gebrauch zurückkam (Fallbericht, Kumar 2019); laut Übersicht schwere Akne und Brustdrüsenwachstum bei etwa einem Drittel der Anwender, dazu Bluthochdruck und Herzrhythmusstörungen (Borecki 2024)',
      'Hormonachse: Abschaltung der eigenen Testosteronproduktion wie bei allen anabol-androgenen Steroiden; Trenbolon-spezifische Daten zur Erholung danach fehlen',
      'Kein Humanarzneimittel: Alles, was für Menschen gehandelt wird, ist weder zugelassen noch geprüft; Gehalt und Reinheit sind unbekannt, und die Erkenntnisse stammen fast nur von Menschen, die mehrere Steroide gleichzeitig nehmen'
    ],
    status: 'Für Menschen nicht als Arzneimittel zugelassen; in den USA als Implantat für Mastrinder auf tierärztliche Anordnung zugelassen (21 CFR 522.2476). In Deutschland dürfen Fertigarzneimittel nur mit Zulassung in Verkehr gebracht werden (§ 21 AMG). Trenbolon steht namentlich in der Anlage des Anti-Doping-Gesetzes: Herstellung, Handel und Abgabe zu Dopingzwecken sind verboten (§ 2 Abs. 1), Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport ebenfalls (§ 2 Abs. 3), Verstöße sind strafbar. WADA-Verbotsliste: S1.1 anabol-androgene Steroide, jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/42037159/',
    sources: [
      { title: 'Bonenti et al., Drug Alcohol Rev 2026 – Global Drug Survey 2024: Beschwerden bei 1.146 Steroid-Anwendern mit und ohne Trenbolon', url: 'https://pubmed.ncbi.nlm.nih.gov/42037159/' },
      { title: 'Piatkowski et al., Drug Alcohol Rev 2023 – Interviews mit Anwendern: Trenbolon und psychische Folgen', url: 'https://pubmed.ncbi.nlm.nih.gov/36992616/' },
      { title: 'Borecki et al., Endokrynol Pol 2024 – Übersicht: Wirkungen von Trenbolon auf einzelne Organe', url: 'https://pubmed.ncbi.nlm.nih.gov/38887114/' },
      { title: 'Shahsavari Nia et al., Emergency 2014 – Herzinfarkt bei einem 23-Jährigen nach Trenbolonacetat (Fallbericht)', url: 'https://pubmed.ncbi.nlm.nih.gov/26495342/' },
      { title: 'Anand et al., ASAIO J 2006 – schwere Gallenstauung nach Parabolan, Behandlung mit Leberdialyse (Fallbericht)', url: 'https://pubmed.ncbi.nlm.nih.gov/16436902/' },
      { title: 'Kumar et al., Clin Toxicol 2019 – wiederkehrende akute Pankreatitis nach Trenbolonacetat (Fallbericht)', url: 'https://pubmed.ncbi.nlm.nih.gov/30101635/' },
      { title: 'US Code of Federal Regulations, 21 CFR 522.2476 – Trenbolonacetat als Implantat für Mastrinder', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-E/part-522/section-522.2476' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), Anlage – anabol-androgene Steroide (Trenbolon)', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' },
      { title: 'Verbotsliste im Sport: anabol-androgene Steroide, S1.1 (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    filterCat: 'Exercise'
  },
  {
    id: 'oxandrolon',
    name: 'Oxandrolon (Anavar)',
    altNames: 'Anavar, Oxandrin, Oxandrolone, Var',
    class: 'Orales anabol-androgenes Steroid (17α-alkyliert); in den USA 1964 zugelassen, Zulassung 2023 von der FDA widerrufen',
    emoji: '💊',
    short: 'Oxandrolon (Anavar) ist ein orales Steroid, das in randomisierten Studien bei Schwerbrandverletzten, HIV-bedingtem Gewichtsverlust und älteren Männern Gewicht und fettfreie Masse steigerte. Die FDA hat die Zulassung 2023 dennoch widerrufen: Der Nutzen sei nicht ausreichend belegt, dagegen stünden Leberschäden, Lebertumoren und ungünstige Blutfettwerte. Der Ruf als „mildes" Steroid hält den Daten nicht stand.',
    moa: 'Oxandrolon bindet am Androgenrezeptor und steigert den Eiweißaufbau in Muskel und Gewebe. Es ist am Kohlenstoffatom 17 alkyliert, damit es geschluckt wirkt; genau diese Gruppe von Steroiden ist am engsten mit Gallenstauung, Peliosis hepatis und Lebertumoren verbunden (LiverTox). Wie andere Androgene drosselt es die Hormonachse: In einer randomisierten Studie sanken LH, FSH, SHBG sowie Gesamt- und freies Testosteron (Grunfeld 2006).',
    benefits: [
      'Schwere Verbrennungen: Metaanalyse aus 14 randomisierten Studien mit 2.822 Patienten – weniger Operationen, kürzere Klinikaufenthalte im Verhältnis zur verbrannten Fläche und mehr fettfreie Masse, aber kein Effekt auf Sterblichkeit und Infektionen (Lou 2025)',
      'HIV-bedingter Gewichtsverlust: randomisierte Studie mit 262 Männern über 12 Wochen – Gewicht und Körperzellmasse stiegen auch unter Placebo; ein Vorteil gegenüber Placebo zeigte sich nur in einem Teil der Dosisgruppen (Grunfeld 2006)',
      'Ältere Männer: 32 gesunde Männer zwischen 60 und 87 Jahren, 12 Wochen – fettfreie Masse +3,0 kg, Kraft je nach Übung 5 bis 9 Prozent höher, Fettmasse −1,9 kg; 12 Wochen nach dem Absetzen lagen fettfreie Masse und Kraft wieder auf dem Ausgangswert, die Fettabnahme blieb weitgehend (Schroeder 2004)',
      'Turner-Syndrom: bei Mädchen unter Wachstumshormon 4,6 cm mehr Endgröße als unter Placebo (randomisiert, doppelblind, 82 Ausgewertete, Gault 2011)'
    ],
    risks: [
      'Leber: Die FDA nennt aus der Fachinformation Peliosis hepatis, teils mit Leberversagen und Blutungen in den Bauchraum, Leberzelltumoren, teils tödlich, und cholestatische Hepatitis (FDA 2023); in der Verbrennungs-Metaanalyse erhöhte Leberwerte bei Erwachsenen 19 gegenüber 5 Prozent unter Placebo (Lou 2025)',
      'Blutfette: HDL sank und LDL stieg in der HIV-Studie signifikant (Grunfeld 2006); laut FDA Blutfettveränderungen, die mit einem erhöhten Arterioskleroserisiko verbunden sind',
      'Hormonachse: Unterdrückung von LH, FSH, SHBG sowie Gesamt- und freiem Testosteron (Grunfeld 2006)',
      'Nicht in jeder Lage nützlich: Bei 41 beatmeten chirurgischen Patienten verlängerte Oxandrolon die Beatmungszeit (21,7 gegenüber 16,4 Tage, Bulger 2004); laut FDA zudem Risiken für erhöhtes Kalzium bei Brustkrebs sowie für Prostatavergrößerung und Prostatakrebs bei Älteren',
      'Psyche und Herz: Für Oxandrolon gibt es dazu keine eigenen kontrollierten Langzeitdaten; die Befunde zu Steroiden allgemein (siehe Eintrag Anabole Steroide) gelten als Warnsignal, nicht als Entwarnung'
    ],
    status: 'In den USA 1964 zugelassen (Oxandrin), als Zusatztherapie zur Gewichtszunahme nach Gewichtsverlust durch große Operationen, chronische Infektionen oder schwere Verletzungen, gegen Eiweißabbau unter langer Kortisontherapie und gegen Knochenschmerzen bei Osteoporose. Ein Beratergremium der FDA fand bereits 1984 keinen Wirksamkeitsnachweis; zum 28.06.2023 hat die FDA die Zulassung aller Oxandrolon-Tabletten widerrufen, weil die möglichen Probleme schwer genug seien, das Mittel vom Markt zu nehmen. In Deutschland ist kein Oxandrolon-Präparat zugelassen; Fertigarzneimittel dürfen hier nur mit Zulassung in Verkehr gebracht werden (§ 21 AMG). Oxandrolon steht namentlich in der Anlage des Anti-Doping-Gesetzes: Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport sind verboten (§ 2 Abs. 3), Handel und Abgabe zu Dopingzwecken ebenso (§ 2 Abs. 1). WADA-Verbotsliste: S1.1, jederzeit verboten.',
    link: 'https://www.federalregister.gov/documents/2023/06/28/2023-13733/gemini-laboratories-llc-et-al-withdrawal-of-approval-of-one-new-drug-application-for-oxandrin',
    sources: [
      { title: 'FDA, Federal Register 28.06.2023 – Widerruf der Zulassung von Oxandrin und allen Oxandrolon-Tabletten', url: 'https://www.federalregister.gov/documents/2023/06/28/2023-13733/gemini-laboratories-llc-et-al-withdrawal-of-approval-of-one-new-drug-application-for-oxandrin' },
      { title: 'Lou et al., World J Emerg Surg 2025 – Metaanalyse aus 14 randomisierten Studien bei Brandverletzten', url: 'https://pubmed.ncbi.nlm.nih.gov/41023744/' },
      { title: 'Grunfeld et al., J Acquir Immune Defic Syndr 2006 – randomisierte Studie bei HIV-bedingtem Gewichtsverlust, 262 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/16540931/' },
      { title: 'Schroeder et al., J Appl Physiol 2004 – 32 ältere Männer: Effekte und ihre Dauer nach dem Absetzen', url: 'https://pubmed.ncbi.nlm.nih.gov/14578370/' },
      { title: 'Bulger et al., Ann Surg 2004 – beatmete chirurgische Patienten: längere Beatmung unter Oxandrolon', url: 'https://pubmed.ncbi.nlm.nih.gov/15319718/' },
      { title: 'Gault et al., BMJ 2011 – Turner-Syndrom: Endgröße unter Oxandrolon, randomisiert und placebokontrolliert', url: 'https://pubmed.ncbi.nlm.nih.gov/21493672/' },
      { title: 'LiverTox (NIH) – Androgenic Steroids: Leberschäden durch 17α-alkylierte Steroide', url: 'https://www.ncbi.nlm.nih.gov/books/NBK548931/' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), Anlage – anabol-androgene Steroide (Oxandrolon)', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' },
      { title: 'Verbotsliste im Sport: anabol-androgene Steroide, S1.1 (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    filterCat: 'Exercise'
  },
  {
    id: 'methandrostenolon',
    name: 'Methandrostenolon (Dianabol)',
    altNames: 'Metandienon, Methandienon, Dianabol, D-Bol, Methandrostenolone',
    class: 'Orales anabol-androgenes Steroid (17α-alkyliert), früher als Arzneimittel vermarktet, in Deutschland verschreibungspflichtig',
    emoji: '💊',
    short: 'Methandrostenolon, bekannt als Dianabol, ist eines der ältesten oralen Steroide und seit Jahrzehnten ein Klassiker im Kraftsport. In kleinen kontrollierten Studien der 1970er Jahre nahmen trainierende Männer darunter mehr Gewicht zu als unter Placebo; ob das normales Muskelgewebe war, blieb offen, und die Kraft stieg in der ersten Studie nicht stärker. Gut dokumentiert sind dagegen Leberschäden bis zur schweren Gallenstauung.',
    moa: 'Methandrostenolon wirkt über den Androgenrezeptor und ist am Kohlenstoffatom 17 alkyliert, damit es geschluckt wirkt; diese Gruppe von Steroiden ist am engsten mit Gallenstauung, Peliosis hepatis und Lebertumoren verbunden (LiverTox). In einer kontrollierten Studie stiegen Kalium und Stickstoff im Körper stark an, aber in einem Verhältnis, das nicht zu normalem Muskelgewebe passt (Hervey 1981). Zugleich sank das Testosteron im Blut, und das Cortisol stieg (Hervey 1976).',
    benefits: [
      'Doppelblinde Crossover-Studie mit 11 trainierenden Männern, je 6 Wochen: unter Methandienon im Mittel 3,3 kg mehr Gewicht, nur im fettfreien Anteil, und größere Muskeln; Kraft und Leistung stiegen aber nicht signifikant stärker als unter Placebo (Hervey 1976)',
      'Wiederholung mit 7 Gewichthebern: Gewicht +2,3 kg, Muskelumfang, Beinleistung und Kraft stiegen nur in der Wirkstoffphase; die Autoren schließen, dass der Zuwachs kein normales Muskelgewebe ist (Hervey 1981)',
      'Osteoporose: randomisierte, doppelblinde Studie über 24 Monate – das Körperkalium stieg, ein Zuwachs an Knochenmasse ließ sich nicht sicher nachweisen (Aloia 1981)'
    ],
    risks: [
      'Leber: Gallenstauung mit Gelbsucht ist für Methandrostenolon mehrfach beschrieben, in einem Fall bei einer 71-jährigen Frau bis zum Leberversagen mit Tod (LiverTox); Fallbericht eines 50-Jährigen mit schwerer Gallenstauung (Bilirubin 922 µmol/l), akutem Nierenversagen und Bauchspeicheldrüsenentzündung nach achtwöchigem Gebrauch (Rosenfeld 2011)',
      'Hormonachse: Das Testosteron im Blut sank unter Methandienon, das Cortisol stieg (Hervey 1976)',
      'Blutfette: Für Steroide sind deutliche HDL-Senkungen belegt, etwa um 25 Prozent in einer prospektiven Studie mit Testosteron oder Nandrolon (LiverTox); kontrollierte Lipiddaten speziell zu Methandrostenolon haben wir nicht gefunden',
      'Herz: Plötzlicher Tod eines 34-Jährigen nach dem Training, mit verdicktem Herzmuskel; nachgewiesen wurden unter anderem Methandienon, Stanozolol und Clenbuterol (Lehmann 2019) – bei solchem Mischkonsum lassen sich Einzelwirkungen kaum trennen',
      'Psyche: Für Methandrostenolon allein gibt es keine kontrollierten Daten; die Befunde zu Steroiden allgemein (siehe Eintrag Anabole Steroide) gelten auch hier als Warnsignal'
    ],
    status: 'In Deutschland verschreibungspflichtig (Anlage 1 der Arzneimittelverschreibungsverordnung: Metandienon und seine Ester); ein zugelassenes Präparat ist nicht im Handel, und Fertigarzneimittel dürfen nur mit Zulassung in Verkehr gebracht werden (§ 21 AMG). Früher als Dianabol vermarktet. Metandienon steht namentlich in der Anlage des Anti-Doping-Gesetzes: Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport sind verboten (§ 2 Abs. 3), Handel und Abgabe zu Dopingzwecken ebenso (§ 2 Abs. 1). WADA-Verbotsliste: S1.1, jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/61389/',
    sources: [
      { title: 'Hervey et al., Lancet 1976 – Methandienon bei 11 trainierenden Männern, doppelblinde Crossover-Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/61389/' },
      { title: 'Hervey et al., Clin Sci 1981 – Methandienon bei 7 Gewichthebern: Gewichtszunahme ist kein normales Muskelgewebe', url: 'https://pubmed.ncbi.nlm.nih.gov/7018798/' },
      { title: 'Aloia et al., Metabolism 1981 – Methandrostenolon bei Osteoporose, randomisiert über 24 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/7026971/' },
      { title: 'Rosenfeld et al., J Med Case Rep 2011 – Gallenstauung, Nierenversagen und Pankreatitis nach Methandrostenolon (Fallbericht)', url: 'https://pubmed.ncbi.nlm.nih.gov/21470406/' },
      { title: 'Lehmann et al., Forensic Sci Int 2019 – Todesfall nach Missbrauch von Clenbuterol, Stanozolol und Metandienon', url: 'https://pubmed.ncbi.nlm.nih.gov/31499423/' },
      { title: 'LiverTox (NIH) – Androgenic Steroids: Leberschäden durch 17α-alkylierte Steroide', url: 'https://www.ncbi.nlm.nih.gov/books/NBK548931/' },
      { title: 'Arzneimittelverschreibungsverordnung (AMVV), Anlage 1 – Metandienon und seine Ester', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), Anlage – anabol-androgene Steroide (Metandienon)', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' },
      { title: 'Verbotsliste im Sport: anabol-androgene Steroide, S1.1 (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    filterCat: 'Exercise'
  },
  {
    id: 'oxymetholon',
    name: 'Oxymetholon (Anadrol)',
    altNames: 'Anadrol, Anadrol-50, Oxymetholone',
    class: 'Anabol-androgenes Steroid zum Einnehmen, 17α-alkyliert; in den USA für Blutarmut zugelassen gewesen',
    emoji: '💊',
    short: 'Oxymetholon ist ein anabol-androgenes Steroid zum Einnehmen, in den USA seit 1972 als Anadrol-50 gegen Blutarmut durch mangelnde Blutbildung zugelassen. In randomisierten Studien an Kranken und älteren Männern baute es fettfreie Masse auf. Dieselben Studien zeigen den Preis: deutlich steigende Leberwerte, ein fallendes HDL-Cholesterin und in Fallsammlungen Lebertumoren.',
    moa: 'Oxymetholon bindet am Androgenrezeptor → mehr Eiweißaufbau und, laut US-Fachinformation, eine gesteigerte Bildung und Ausscheidung von Erythropoetin bei Blutarmut durch Knochenmarkversagen → mehr rote Blutkörperchen. Aufbauende und vermännlichende Wirkung lassen sich nicht vollständig trennen. Die 17α-Alkylierung macht es als Tablette wirksam, belastet aber die Leber; zugleich drosselt der hohe Hormonspiegel die Hypophyse und damit die eigene Testosteronproduktion.',
    benefits: [
      'Blutarmut: in den USA zugelassen bei Anämien durch mangelnde Bildung roter Blutkörperchen, etwa bei erworbener oder angeborener aplastischer Anämie und Myelofibrose (Fachinformation Anadrol-50)',
      'Aplastische Anämie, rückblickend mit Vergleichsgruppen ausgewertet: Ansprechen nach einem Jahr bei 54,1 % der nicht schweren gegenüber 13,5 % der schweren Fälle (74 Patienten, Pengthina 2022)',
      'Dialyse: zusätzlich zu Erythropoetin nach 6 Monaten Hämoglobin 12,9 gegenüber 11,0 g/dl unter Placebo (doppelblind, 24 Patienten, Aramwit 2010)',
      'HIV-bedingter Gewichtsverlust: in 16 Wochen +3,0 bis +3,5 kg gegenüber +1,0 kg unter Placebo, mehr Körperzellmasse und Appetit (RCT, 89 Männer und Frauen, Hengge 2003)',
      'Ältere Männer (65 bis 80 Jahre): in 12 Wochen +3,3 bzw. +4,2 kg fettfreie Masse gegenüber 0,0 kg unter Placebo, mehr Kraft im Oberkörper, weniger Bauchfett (RCT, 31 Männer, Schroeder 2003)'
    ],
    risks: [
      'Leber: Werte mehr als fünffach über Ausgangswert bei 35 % bzw. 27 % gegenüber 0 % unter Placebo (Hengge 2003); laut Fachinformation Gallenstauung mit Gelbsucht, selten Leberversagen, Peliosis hepatis und Lebertumoren; in einer Fallsammlung von 133 Lebertumoren unter Androgenen war Oxymetholon der häufigste Wirkstoff, Leberzellkrebs trat vor allem unter Oxymetholon und Methyltestosteron auf (Velazquez 2004)',
      'Blutfette: HDL-Cholesterin fiel bei älteren Männern in 12 Wochen um 19 bis 23 mg/dl (Schroeder 2003); die Fachinformation warnt vor teils sehr deutlichen Veränderungen mit Bedeutung für Arteriosklerose',
      'Herz und Kreislauf: Wassereinlagerungen mit oder ohne Herzschwäche bei vorbestehender Herz-, Nieren- oder Lebererkrankung; verstärkte Wirkung von Gerinnungshemmern wie Warfarin mit Blutungsgefahr (Fachinformation)',
      'Hormonachse: Unterdrückung der Hodenfunktion, Hodenschrumpfung, verminderte Spermienzahl, Erektionsstörungen, Brustwachstum beim Mann; bei Frauen Stimmvertiefung, Haarwuchs, Zyklusstörungen, Vergrößerung der Klitoris, teils bleibend (Fachinformation)',
      'Psyche und Nervensystem: Erregung, Schlaflosigkeit, mehr oder weniger Libido (Fachinformation); zu Abhängigkeit und psychischen Folgen bei nichtmedizinischer Anwendung siehe Anabole Steroide'
    ],
    status: 'In Deutschland verschreibungspflichtig (AMVV, Anlage 1); ein in Deutschland zugelassenes Fertigarzneimittel fand sich bei der Recherche nicht. In den USA seit 1972 als Anadrol-50 zugelassen (NDA 016848), laut FDA-Datenbank derzeit als nicht mehr vertrieben geführt (Stand 10/2026); dort Betäubungsmittel der Klasse III. Oxymetholon steht in der Anlage des Anti-Doping-Gesetzes: Herstellung, Handel und Abgabe zu Dopingzwecken sowie Erwerb und Besitz in nicht geringer Menge zum Doping im Sport sind verboten. WADA-Verbotsliste 2026: S1.1, jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/12388137/',
    sources: [
      { title: 'Fachinformation Anadrol-50 (Oxymetholon), US-Zulassungstext Stand 08/2004 – Anwendungsgebiete, Warnhinweise zu Leber, Blutfetten und Vermännlichung', url: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2004/16848s021lbl.pdf' },
      { title: 'FDA, Drugs@FDA – Anadrol-50, NDA 016848: Zulassung 1972, Status nicht mehr vertrieben', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=016848' },
      { title: 'Hengge UR et al., AIDS 2003 – RCT bei HIV-bedingtem Gewichtsverlust, 89 Patienten, 16 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/12646793/' },
      { title: 'Schroeder ET et al., Am J Physiol Endocrinol Metab 2003 – RCT bei 31 älteren Männern: fettfreie Masse, Kraft, HDL und Leberwerte', url: 'https://pubmed.ncbi.nlm.nih.gov/12388137/' },
      { title: 'Aramwit P et al., Int J Clin Pharmacol Ther 2010 – Oxymetholon plus Erythropoetin bei Peritonealdialyse, doppelblind, 24 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/21084036/' },
      { title: 'Pengthina W, Saelue P, J Blood Med 2022 – Oxymetholon bei erworbener aplastischer Anämie, 74 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/36514313/' },
      { title: 'Velazquez I, Alter BP, Am J Hematol 2004 – Androgene und Lebertumoren, Fallsammlung', url: 'https://pubmed.ncbi.nlm.nih.gov/15495253/' },
      { title: 'Arzneimittelverschreibungsverordnung (AMVV), Anlage 1 – Verschreibungspflicht', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 bis § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/BJNR221010015.html' },
      { title: 'Verbotsliste im Sport 2026: S1.1 anabol-androgene Steroide, jederzeit verboten (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'stanozolol',
    name: 'Stanozolol (Winstrol)',
    altNames: 'Winstrol, Winstrol Depot, Winny',
    class: 'Anabol-androgenes Steroid, 17α-alkyliert, zum Einnehmen und als Spritze; in den USA früher zugelassen',
    emoji: '💊',
    short: 'Stanozolol ist ein 17α-alkyliertes anabol-androgenes Steroid, in den USA 1962 als Winstrol zugelassen und dort heute nicht mehr vertrieben. Am Menschen untersucht ist es vor allem bei erblichem Angioödem, Osteoporose und Venenleiden. Besonders gut vermessen ist eine Nebenwirkung: Es senkt das HDL-Cholesterin stärker als Testosteron, in einer Crossover-Studie um 33 gegenüber 9 Prozent.',
    moa: 'Stanozolol bindet am Androgenrezeptor → Eiweißaufbau und Vermännlichung, nicht vollständig trennbar → Drosselung von LH und eigener Testosteronproduktion. Über die Leber steigert es stark die hepatische Lipase; dadurch fallen HDL-Cholesterin und Apolipoprotein A-I, das LDL steigt. Die 17α-Alkylierung macht es als Tablette wirksam und belastet die Leber. Medizinisch genutzt wurden zudem die Anhebung von Komplementfaktoren beim erblichen Angioödem und die Förderung der Fibrinolyse.',
    benefits: [
      'Erbliches Angioödem: bei 21 Patienten über 20 bis 40 Jahre Behandlung Anfallskontrolle; Nebenwirkungen bei 10 von 21, meist durch Dosisreduktion beherrscht (Sloane 2007)',
      'Osteoporose nach den Wechseljahren: Gesamtkörperkalzium +4,4 % über 29 Monate, unter Placebo unverändert; keine neuen Wirbelbrüche gegenüber 3 unter Placebo, am Unterarm kein Unterschied (doppelblind, 46 Frauen, Chesnut 1983)',
      'In den USA 1962 als Winstrol zugelassen; laut FDA-Datenbank heute nicht mehr vertrieben',
      'Gewichtszunahme bei Kraftsportlern ähnlich wie unter hochdosiertem Testosteron (Crossover, 11 Gewichtheber, 6 Wochen, Thompson 1989); kontrollierte Studien zu Muskelmasse oder Kraft bei Gesunden fehlen'
    ],
    risks: [
      'Blutfette: HDL-Cholesterin −33 % (HDL2 −71 %), LDL +29 % gegenüber −9 % HDL und −16 % LDL unter Testosteron (Thompson 1989); bei älteren Patienten HDL-Abfall bei 91 % (RCT, 44 Patienten, Carson 2015)',
      'Leber: vorübergehend erhöhte Leberwerte in einer randomisierten Studie (Carson 2015) und bei 76 % in der Osteoporose-Studie Leberwert-Erhöhungen oder andere Nebenwirkungen (Chesnut 1983); Fallbericht schwerer Gallenstauung mit Bilirubin bis 56,6 mg/dl bei einem 19-Jährigen nach zwei Monaten Eigengebrauch, Erholung nach 5 Monaten (Stępień 2015)',
      'Hormonachse: bei 9 gesunden Männern in 14 Tagen Testosteron −55 %, auch LH und SHBG fielen, nach Absetzen rückläufig (Small 1984)',
      'Bei Frauen in der Langzeitbehandlung Haarwuchs, Zyklusstörungen oder Blutungen nach den Wechseljahren, Akne, Gewichtszunahme; dazu Stimmungsschwankungen (Sloane 2007)'
    ],
    status: 'In Deutschland verschreibungspflichtig (AMVV, Anlage 1); ein in Deutschland zugelassenes Fertigarzneimittel fand sich bei der Recherche nicht. In den USA 1962 als Winstrol zugelassen (NDA 012885), laut FDA-Datenbank nicht mehr vertrieben (Stand 10/2026). Stanozolol steht in der Anlage des Anti-Doping-Gesetzes: Herstellung, Handel und Abgabe zu Dopingzwecken sowie Erwerb und Besitz in nicht geringer Menge zum Doping im Sport sind verboten. WADA-Verbotsliste 2026: S1.1, jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/2915439/',
    sources: [
      { title: 'FDA, Drugs@FDA – Winstrol, NDA 012885: Zulassung 1962, Status nicht mehr vertrieben', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=012885' },
      { title: 'Thompson PD et al., JAMA 1989 – Testosteron gegen Stanozolol: Blutfette bei 11 Gewichthebern, Crossover', url: 'https://pubmed.ncbi.nlm.nih.gov/2915439/' },
      { title: 'Carson P et al., Int J Low Extrem Wounds 2015 – RCT: Leberwerte und Blutfette unter Stanozolol, 44 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/25652757/' },
      { title: 'Chesnut CH et al., Metabolism 1983 – Stanozolol bei Osteoporose nach den Wechseljahren, doppelblind, 46 Frauen, 29 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/6341772/' },
      { title: 'Sloane DE et al., J Allergy Clin Immunol 2007 – erbliches Angioödem: Sicherheit nach 20 bis 40 Jahren Stanozolol', url: 'https://pubmed.ncbi.nlm.nih.gov/17765757/' },
      { title: 'Small M et al., Clin Endocrinol 1984 – Hormonveränderungen bei 9 gesunden Männern unter Stanozolol', url: 'https://pubmed.ncbi.nlm.nih.gov/6430603/' },
      { title: 'Stępień PM et al., Clin Exp Hepatol 2015 – schwere Gallenstauung und Leberversagen nach Stanozolol, Fallbericht', url: 'https://pubmed.ncbi.nlm.nih.gov/28856252/' },
      { title: 'Arzneimittelverschreibungsverordnung (AMVV), Anlage 1 – Verschreibungspflicht', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 bis § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/BJNR221010015.html' },
      { title: 'Verbotsliste im Sport 2026: S1.1 anabol-androgene Steroide, jederzeit verboten (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'metenolon',
    name: 'Metenolon (Primobolan)',
    altNames: 'Primobolan, Primobolan Depot, Methenolon, Metenolonacetat, Metenolonenantat, Primo',
    class: 'Anabol-androgenes Steroid (Acetat zum Einnehmen, Enantat als Spritze); in Japan zugelassen',
    emoji: '💉',
    short: 'Metenolon, bekannt als Primobolan, ist ein anabol-androgenes Steroid, das in Japan bis heute als Tablette gegen Osteoporose, schwere Auszehrung und Blutarmut bei aplastischer Anämie zugelassen ist. Kontrollierte Studien am Menschen gibt es kaum; die Daten stammen aus kleinen, alten Fallserien. Dokumentiert sind Leberschäden, Blutfettstörungen und eine Stimmveränderung bei Frauen, die bleiben kann.',
    moa: 'Metenolon bindet am Androgenrezeptor → laut japanischer Fachinformation mehr Eiweißaufbau, weniger Eiweißabbau, mehr Einlagerung von Kalzium und Phosphor und eine Zunahme von Hämoglobin und roten Blutkörperchen. Es ist ein 1-Methyl-Steroid und nicht 17α-alkyliert; trotzdem nennt die Fachinformation Leberfunktionsstörungen und Gelbsucht als schwere Nebenwirkung. Wie bei allen Steroiden wird die Hodenfunktion bei längerer Gabe gedrosselt.',
    benefits: [
      'In Japan als Primobolan-Tabletten verschreibungspflichtig zugelassen: Osteoporose, schwere Auszehrung bei chronischer Nierenerkrankung, Krebs, Verletzungen und Verbrennungen, Knochenmarkschwäche bei aplastischer Anämie (Fachinformation Stand 08/2020)',
      'Laut Fachinformation in kleinen Untersuchungen an Gesunden und Patienten Stickstoff-, Kalzium- und Phosphoreinlagerung sowie Anstieg von Hämoglobin und roten Blutkörperchen',
      'Therapierefraktäre Blutarmut: Remission bei 3 von 6 Patienten mit Panzytopenie und 2 von 4 mit Bizytopenie, ohne erkennbare Lebensverlängerung (unkontrollierte Serie, 19 Patienten, Lockner 1979)',
      'Kontrollierte Studien zu Muskelmasse oder Kraft bei Gesunden fehlen'
    ],
    risks: [
      'Blutfette und Herz: bei 12 von 28 Frauen mit Brustkrebs unter Metenolon eine Hyperlipoproteinämie, eine Patientin erlitt einen Herzinfarkt; nach dem Absetzen in allen Fällen rückläufig (Garbrecht 1981)',
      'Leber: Leberfunktionsstörungen mit deutlich erhöhten Werten und Gelbsucht als schwere Nebenwirkung, regelmäßige Leberwerte bei längerer Gabe; Lebertumoren nach langer, hochdosierter Gabe von Anabolika bei aplastischer Anämie beschrieben (Fachinformation; Velazquez 2004)',
      'Hormonachse: beim Mann Hemmung der Hodenfunktion mit weniger Spermien und Samenflüssigkeit, Impotenz, Dauererektion; bei Frauen Heiserkeit und Stimmveränderung, die fortgeschritten schwer rückgängig zu machen ist, dazu Haarwuchs, Akne, Zyklusstörungen, Vergrößerung der Klitoris (Fachinformation)',
      'Wassereinlagerung bei Herz- und Nierenerkrankung, verschlechterte Zuckertoleranz, verstärkte Wirkung von Warfarin (Fachinformation)',
      'Psyche: laut Fachinformation gesteigerte Libido; für Steroide insgesamt sind Abhängigkeit, Entzugssyndrom und psychische Störungen beschrieben (Pope 2014)'
    ],
    status: 'In Deutschland verschreibungspflichtig (AMVV, Anlage 1, Metenolon und seine Ester); ein in Deutschland zugelassenes Fertigarzneimittel fand sich bei der Recherche nicht. In Japan als Primobolan-Tabletten (Metenolonacetat) zugelassen und verschreibungspflichtig. Metenolon steht in der Anlage des Anti-Doping-Gesetzes: Herstellung, Handel und Abgabe zu Dopingzwecken sowie Erwerb und Besitz in nicht geringer Menge zum Doping im Sport sind verboten. WADA-Verbotsliste 2026: S1.1, jederzeit verboten.',
    link: 'https://www.kegg.jp/medicus-bin/japic_med?japic_code=00002278',
    sources: [
      { title: 'Fachinformation Primobolan-Tabletten (Metenolonacetat), Japan, Stand 08/2020 – Anwendungsgebiete, Nebenwirkungen, Wirkweise (KEGG/JAPIC, japanisch)', url: 'https://www.kegg.jp/medicus-bin/japic_med?japic_code=00002278' },
      { title: 'Lockner D, Acta Med Scand 1979 – Metenolon bei therapierefraktärer Blutarmut, 19 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/367090/' },
      { title: 'Garbrecht M et al., Dtsch Med Wochenschr 1981 – Hyperlipoproteinämie unter Metenolon bei 28 Frauen mit Brustkrebs', url: 'https://pubmed.ncbi.nlm.nih.gov/7215163/' },
      { title: 'Velazquez I, Alter BP, Am J Hematol 2004 – Androgene und Lebertumoren, Fallsammlung', url: 'https://pubmed.ncbi.nlm.nih.gov/15495253/' },
      { title: 'Pope HG et al., Endocr Rev 2014 – Endocrine Society: gesundheitliche Folgen leistungssteigernder Mittel', url: 'https://pubmed.ncbi.nlm.nih.gov/24423981/' },
      { title: 'Arzneimittelverschreibungsverordnung (AMVV), Anlage 1 – Verschreibungspflicht', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 bis § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/BJNR221010015.html' },
      { title: 'Verbotsliste im Sport 2026: S1.1 anabol-androgene Steroide, jederzeit verboten (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'drostanolon',
    name: 'Drostanolon (Masteron)',
    altNames: 'Drostanolonpropionat, Dromostanolon, Masteron, Masteril, Masterid, Drolban, 2α-Methyl-Dihydrotestosteron',
    class: 'Anabol-androgenes Steroid, Abkömmling des Dihydrotestosterons (DHT); früher Arzneimittel bei fortgeschrittenem Brustkrebs',
    emoji: '💉',
    short: 'Drostanolon ist ein Abkömmling des Dihydrotestosterons, der in den 1960er und 1970er Jahren als Arzneimittel gegen fortgeschrittenen Brustkrebs bei Frauen eingesetzt wurde. Aus dieser Zeit stammen die einzigen kontrollierten Humanstudien – zum Tumoransprechen, nicht zu Muskeln. Heute ist es vor allem ein Dopingmittel vom Schwarzmarkt, mit den bekannten Klassenrisiken der Anabolika und kaum substanzeigenen Sicherheitsdaten.',
    moa: 'Drostanolon ist ein am Kohlenstoffatom 2 methyliertes Dihydrotestosteron (2α-Methyl-DHT) und bindet wie DHT am Androgenrezeptor → aufbauende und vermännlichende Wirkung, Rückkopplung auf die Hormonachse mit Abschaltung der eigenen Testosteronproduktion. Als 5α-reduziertes Androgen wird es nicht zu Östrogen umgewandelt; darauf beruhte der Einsatz bei hormonabhängigem Brustkrebs. Verwendet wurde es als gespritzter Ester (Propionat); in 17α-Position ist es nicht alkyliert. Wie stark die aufbauende Wirkung beim Menschen ist, wurde nie gemessen.',
    benefits: [
      'Randomisierte Studie bei metastasiertem Brustkrebs (1975): Testosterondecanoat, Drostanolon und Testolacton erreichten als alleinige Hormontherapie ähnliche Raten an objektivem Tumoransprechen, 22 bis 25 %; mit zusätzlicher Chemotherapie stieg die Rate auf 46 bis 55 % (Rieche und Wolff 1975)',
      'Kontrollierte Studie mit 91 Patientinnen mit fortgeschrittenem Brustkrebs: Testolacton, Drostanolon und Nandrolon wirkten gleich gut, nach 4 Wochen sprachen im Mittel 24 % an (Wolff und Rieche 1978)',
      'In den USA als Drolban (Eli Lilly) zugelassen; die Zulassung wird heute als eingestellt geführt (Drugs@FDA)',
      'Damit gehört Drostanolon zu den wenigen Szene-Steroiden mit kontrollierten Humandaten – allerdings nur zur Tumortherapie, nicht zu Muskelmasse, Kraft oder Körperfett bei Gesunden'
    ],
    risks: [
      'Klassenrisiken der Anabolika: Abschaltung der eigenen Hormonachse mit verminderter Fruchtbarkeit, Belastung von Herz und Gefäßen, psychische und metabolische Effekte; die Endocrine Society nennt die verbreitete Annahme, die Anwendung sei sicher oder beherrschbar, eine Fehleinschätzung (Pope 2014)',
      'Blutfette: Bei Dialysepatienten, die Dromostanolon gegen Blutarmut einnahmen, stiegen die Triglyceride (Choi 1974)',
      'Bei Frauen wirkt es wie jedes Androgen vermännlichend',
      'Leber: Als gespritztes, nicht 17α-alkyliertes Steroid gehört Drostanolon nicht zu der Gruppe, für die die typische Gallenstauung und Lebertumoren vor allem beschrieben sind (Petrovic 2022); substanzeigene Leberdaten gibt es nicht',
      'Keine modernen Sicherheitsstudien und keine Pharmakovigilanz; was heute als Masteron gehandelt wird, ist ungeprüfte Ware ohne Zulassung',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S1.1); in Deutschland in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'Ein aktuell zugelassenes Präparat haben wir weder in Deutschland noch in den USA gefunden; in den USA wird die Zulassung von Drolban (Eli Lilly) als eingestellt geführt. Fertigarzneimittel dürfen in Deutschland nur mit Zulassung in Verkehr gebracht werden (§ 21 AMG). Drostanolon steht in der Anlage des Anti-Doping-Gesetzes: Herstellen, Handeltreiben und Inverkehrbringen zum Doping sind verboten, ebenso Erwerb und Besitz in nicht geringer Menge zum Doping im Sport (§ 2, strafbar nach § 4). Im Sport ist es nach der WADA-Liste 2026 (S1.1 Anabol-androgene Steroide) jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/1243528/',
    sources: [
      { title: 'Rieche K, Wolff G, Arch Geschwulstforsch 1975 – randomisierter Vergleich von Testosterondecanoat, Drostanolon und Testolacton bei metastasiertem Brustkrebs', url: 'https://pubmed.ncbi.nlm.nih.gov/1243528/' },
      { title: 'Wolff G, Rieche K, Onkologie 1978 – kontrollierte Studie Nandrolon, Testolacton und Drostanolon, 91 Patientinnen', url: 'https://pubmed.ncbi.nlm.nih.gov/362297/' },
      { title: 'Choi ES et al., Am J Clin Nutr 1974 – Hypertriglyceridämie bei Dialysepatienten unter Dromostanolon gegen Blutarmut', url: 'https://pubmed.ncbi.nlm.nih.gov/4606631/' },
      { title: 'de Boer D et al., J Steroid Biochem Mol Biol 1992 – die methylierten Dihydrotestosterone Mesterolon und Drostanolon, Ausscheidung im Urin', url: 'https://pubmed.ncbi.nlm.nih.gov/1606052/' },
      { title: 'Drugs@FDA – NDA 012936, Drolban (Dromostanolonpropionat, Eli Lilly), Status eingestellt', url: 'https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=012936' },
      { title: 'Petrovic A et al., World J Gastroenterol 2022 – Leberschäden durch anabol-androgene Steroide (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/36051334/' },
      { title: 'Pope HG et al., Endocr Rev 2014 – gesundheitliche Folgen leistungssteigernder Substanzen, Stellungnahme der Endocrine Society', url: 'https://pubmed.ncbi.nlm.nih.gov/24423981/' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2, § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' },
      { title: 'NADA – Verbotsliste 2026, informatorische Übersetzung (S1.1 Anabol-androgene Steroide)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
    ],
    community: [],
    filterCat: 'Exercise'
  },
  {
    id: 'boldenon',
    name: 'Boldenon (Equipoise)',
    altNames: 'Boldenonundecylenat, Boldenon-Undecylenat, Equipoise, EQ, Androsta-1,4-dien-17β-ol-3-on',
    class: 'Anabol-androgenes Steroid, Testosteronabkömmling; nur als Tierarzneimittel zugelassen (USA, Pferde), für Menschen nicht zugelassen',
    emoji: '⚠️',
    short: 'Boldenon ist ein Abkömmling des Testosterons, der als Boldenonundecylenat (Equipoise) in den USA als Tierarzneimittel für geschwächte Pferde zugelassen ist. Für Menschen ist es nicht zugelassen, und eine Studie zur Wirkung am Menschen gibt es nicht. Am Menschen untersucht sind nur Abbau und Ausscheidung; die Schadensseite kennt man aus Fallberichten und aus den Klassenrisiken der Anabolika.',
    moa: 'Boldenon unterscheidet sich von Testosteron durch eine zusätzliche Doppelbindung im A-Ring (Androsta-1,4-dien-17β-ol-3-on). Es bindet am Androgenrezeptor → aufbauende und vermännlichende Wirkung, Rückkopplung auf die Hormonachse mit Abschaltung der eigenen Testosteronproduktion. Im Tierarzneimittel liegt es als Undecylensäureester zur Injektion vor. Wie stark diese Effekte beim Menschen sind, ist nicht gemessen; die Annahmen stammen aus der Tiermedizin und aus der Analogie zu anderen Anabolika.',
    benefits: [
      'Als Tierarzneimittel in den USA zugelassen: zur Unterstützung geschwächter Pferde, wenn Gewicht, Fell oder Allgemeinzustand besser werden sollen; nicht für Pferde, die der Lebensmittelgewinnung dienen, und nur auf tierärztliche Verordnung (21 CFR 522.204)',
      'Am Menschen untersucht ist der Stoffwechsel: Eine Ausscheidungsstudie identifizierte Boldenon und neun Abbauprodukte im Urin, mehr als 95 % davon als stabile Konjugate (Schänzer und Donike 1992)',
      'Eine Studie zu Muskelmasse, Kraft, Blutbildung oder Leistung am Menschen gibt es nicht; ClinicalTrials.gov führt keine einschlägige Studie (Stand 10/2026)'
    ],
    risks: [
      'Herz: Bei einem 39-jährigen Kraftsportler mit akuter schwerer Herzschwäche (Pumpfunktion der linken Kammer etwa 15 %) wurde die Erkrankung auf Testosteron und Boldenon in den drei Monaten zuvor zurückgeführt (White 2018, Fallbericht)',
      'Laborwerte: Bei einem 37-Jährigen führte ein durch Boldenon stark erhöhtes Kreatinin zum Verdacht auf eine Nierenerkrankung, die nicht vorlag (Winnett 2011, Fallbericht) – wer Blutwerte bestimmen lässt, sollte die Anwendung offenlegen, damit sie richtig gedeutet werden',
      'Klassenrisiken der Anabolika: Abschaltung der eigenen Hormonachse mit verminderter Fruchtbarkeit, Belastung von Herz und Gefäßen, psychische und metabolische Effekte, bei Frauen Vermännlichung; die Endocrine Society nennt die verbreitete Annahme, die Anwendung sei sicher oder beherrschbar, eine Fehleinschätzung (Pope 2014)',
      'Schwarzmarktware: Beim Zürcher Drug-Checking für Steroide gaben 39 % der Klienten an, Boldenon aktuell oder früher zu verwenden; insgesamt waren 52 % der geprüften Steroidproben gefälscht (Magnolini 2025)',
      'Weder Tierarzneimittel noch Untergrundware sind für die Anwendung am Menschen geprüft',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S1.1); weil Boldenon in geringen Mengen auch körpereigen entstehen kann, braucht die Dopinganalytik eigene Prüfverfahren zur Herkunft (Piper 2010)'
    ],
    status: 'Für Menschen nicht zugelassen. In den USA ist Boldenonundecylenat als verschreibungspflichtiges Tierarzneimittel für Pferde zugelassen (21 CFR 522.204). Fertigarzneimittel dürfen in Deutschland nur mit Zulassung in Verkehr gebracht werden (§ 21 AMG). Boldenon steht in der Anlage des Anti-Doping-Gesetzes: Herstellen, Handeltreiben und Inverkehrbringen zum Doping sind verboten, ebenso Erwerb und Besitz in nicht geringer Menge zum Doping im Sport (§ 2, strafbar nach § 4). Im Sport ist es nach der WADA-Liste 2026 (S1.1 Anabol-androgene Steroide) jederzeit verboten.',
    link: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-E/part-522/section-522.204',
    sources: [
      { title: 'Code of Federal Regulations, 21 CFR 522.204 – Boldenon: Zulassung als Tierarzneimittel für Pferde', url: 'https://www.ecfr.gov/current/title-21/chapter-I/subchapter-E/part-522/section-522.204' },
      { title: 'Piper T et al., Drug Test Anal 2010 – Kohlenstoff-Isotopenverhältnis von Boldenon im Urin; nicht für Menschen zugelassen, körpereigene Bildung möglich', url: 'https://pubmed.ncbi.nlm.nih.gov/20468009/' },
      { title: 'Schänzer W, Donike M, Biol Mass Spectrom 1992 – Stoffwechsel von Boldenon beim Menschen, Ausscheidung im Urin', url: 'https://pubmed.ncbi.nlm.nih.gov/1591280/' },
      { title: 'White M et al., Can J Cardiol 2018 – akute schwere Herzschwäche nach Testosteron und Boldenon, Fallbericht', url: 'https://pubmed.ncbi.nlm.nih.gov/30205989/' },
      { title: 'Winnett G et al., Nephrol Dial Transplant 2011 – scheinbare Nierenerkrankung durch erhöhtes Kreatinin unter Boldenon, Fallbericht', url: 'https://pubmed.ncbi.nlm.nih.gov/20980358/' },
      { title: 'Magnolini R et al., Harm Reduction Journal 2025 – Zürcher Drug-Checking für Steroide: 52 % der Proben gefälscht', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12147309/' },
      { title: 'Pope HG et al., Endocr Rev 2014 – gesundheitliche Folgen leistungssteigernder Substanzen, Stellungnahme der Endocrine Society', url: 'https://pubmed.ncbi.nlm.nih.gov/24423981/' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2, § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' },
      { title: 'NADA – Verbotsliste 2026, informatorische Übersetzung (S1.1 Anabol-androgene Steroide)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
    ],
    community: [],
    filterCat: 'Exercise'
  },
  {
    id: 'methasteron',
    name: 'Methasteron (Superdrol)',
    altNames: 'Methasterone, Methyldrostanolon, 17α-Methyldrostanolon, Superdrol, 2α,17α-Dimethyl-Dihydrotestosteron',
    class: 'Designer-Steroid, 17α-methyliertes Anabolikum; nicht als Arzneimittel zugelassen, als „Nahrungsergänzung“ verkauft',
    emoji: '⚠️',
    short: 'Methasteron ist ein Anabolikum, das 1956 erstmals beschrieben, aber nicht als Arzneimittel zugelassen wurde und Mitte der 2000er Jahre als „Superdrol“ in Nahrungsergänzungsmitteln auftauchte. Eine Studie zur Wirkung am Menschen gibt es nicht. Dokumentiert sind Fallberichte über schwere Gallenstauung bis zum Nierenversagen, ein Warnbrief der FDA und die Einstufung als kontrolliertes Anabolikum in den USA.',
    moa: 'Methasteron ist Drostanolon mit einer zusätzlichen Methylgruppe in 17α-Position (2α,17α-Dimethyl-5α-androstan-17β-ol-3-on). Es bindet am Androgenrezeptor; in Tierversuchen ab 1959 wirkte es stark aufbauend bei schwacher vermännlichender Wirkung, neuere Versuche an kastrierten Ratten bestätigten die Androgenwirkung. Die 17α-Alkylgruppe bremst den Abbau in der Leber, und genau Steroide mit dieser Gruppe sind mit einer typischen akuten Gallenstauung verbunden (Petrovic 2022). Am Menschen ist keine dieser Wirkungen gemessen.',
    benefits: [
      'Keine Humanstudie zur Wirkung: Für Muskelmasse, Kraft oder Leistung gibt es keine klinische Studie und keinen Registereintrag (ClinicalTrials.gov, Stand 10/2026); Fachleute für Designer-Steroide beschreiben genau dieses Fehlen klinischer Studien (Joseph und Parr 2015)',
      'Belegt ist die Androgenwirkung im Tierversuch: Synthese 1956, aufbauende Wirkung bei Ratten 1959 beschrieben; eine für die US-Drogenbehörde durchgeführte Untersuchung an kastrierten Ratten bestätigte aufbauende und vermännlichende Effekte (DEA 2011)'
    ],
    risks: [
      'Leber: Fünf zuvor gesunde Anwender entwickelten etwa zwei Wochen nach dem Absetzen eine Gelbsucht; nach der Vorstellung in der Klinik stieg das Bilirubin noch zwei bis drei Wochen weiter, etwa zwölf Wochen nach der Vorstellung hatten sich alle ohne bleibende Leberfunktionsstörung erholt (Shah 2008, Fallserie)',
      'Weitere Fallberichte: schwere Gallenstauung mit Nierenversagen (Nasr und Ahmad 2009); Gelbsucht und IgA-Nephropathie, eine Nierenentzündung, nach einem frei verkäuflichen Produkt, das als harmlos und ohne hormonelle Wirkung beworben war (Jasiurkowski 2006)',
      'Unerkannte Aufnahme: In New York traten 2012 und 2013 bei etwa 16 Menschen Beschwerden wie Müdigkeit, Haarausfall und Muskelschmerzen auf; gemeinsamer Nenner waren Vitamin-B- und Mineralstoffpräparate eines Anbieters, die Methasteron und verwandte Steroide enthielten. Ein Patient kam mit Leberschaden ins Krankenhaus, ein Kind zeigte eine ausgeprägte Vermännlichung (Tran 2023)',
      'Klasse der 17α-alkylierten Steroide: Die typische akute Gallenstauung, Peliosis hepatis und Lebertumoren sind vor allem für diese Gruppe beschrieben; meist normalisiert sich die Leber nach dem Absetzen, manche Folgen bleiben (Petrovic 2022)',
      'Dazu kommen die allgemeinen Anabolika-Risiken für Hormonachse, Herz und Psyche; substanzeigene Daten dazu gibt es nicht',
      'Im Sport jederzeit verboten (WADA-Liste 2026, S1.1); in Deutschland in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'Nicht als Arzneimittel zugelassen, weder in Deutschland noch in der EU oder den USA. In den USA erging 2006 ein Warnbrief der FDA wegen Gesundheitsschäden im Zusammenhang mit Superdrol; bis März 2010 zählte die Drogenbehörde DEA 62 Nahrungsergänzungsmittel, die Methasteron enthalten sollten, und stufte es 2012 als Anabolikum in Schedule III ein. In Deutschland steht Methasteron in der Anlage des Anti-Doping-Gesetzes: Herstellen, Handeltreiben und Inverkehrbringen zum Doping sind verboten, ebenso Erwerb und Besitz in nicht geringer Menge zum Doping im Sport (§ 2, strafbar nach § 4). Im Sport ist es nach der WADA-Liste 2026 (S1.1 Anabol-androgene Steroide) jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/18187367/',
    sources: [
      { title: 'Shah NL et al., Clin Gastroenterol Hepatol 2008 – Leberschäden mit Gallenstauung unter Methasteron, 5 Fälle', url: 'https://pubmed.ncbi.nlm.nih.gov/18187367/' },
      { title: 'Nasr J, Ahmad J, Dig Dis Sci 2009 – schwere Gallenstauung und Nierenversagen unter Superdrol, Fallbericht und Literaturübersicht', url: 'https://pubmed.ncbi.nlm.nih.gov/18720005/' },
      { title: 'Jasiurkowski B et al., Am J Gastroenterol 2006 – Gelbsucht und IgA-Nephropathie nach Superdrol, Fallbericht', url: 'https://pubmed.ncbi.nlm.nih.gov/16952289/' },
      { title: 'Tran BN et al., Steroids 2023 – Methasteron in Vitamin-B- und Mineralstoffpräparaten, Gesundheitsschäden in New York', url: 'https://pubmed.ncbi.nlm.nih.gov/36796473/' },
      { title: 'Petrovic A et al., World J Gastroenterol 2022 – Leberschäden durch anabol-androgene Steroide (Übersicht)', url: 'https://pubmed.ncbi.nlm.nih.gov/36051334/' },
      { title: 'Joseph JF, Parr MK, Curr Neuropharmacol 2015 – synthetische Androgene als Designer-Nahrungsergänzung', url: 'https://pubmed.ncbi.nlm.nih.gov/26074745/' },
      { title: 'DEA, Federal Register 2011 – Begründung der Einstufung von Prostanozol und Methasteron als Anabolika (Synthese, Tierdaten, FDA-Warnbrief 2006)', url: 'https://www.govinfo.gov/content/pkg/FR-2011-11-23/html/2011-30081.htm' },
      { title: 'DEA, Federal Register 2012 – endgültige Einstufung von Prostanozol und Methasteron in Schedule III', url: 'https://pubmed.ncbi.nlm.nih.gov/22844688/' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2, § 4 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' },
      { title: 'NADA – Verbotsliste 2026, informatorische Übersetzung (S1.1 Anabol-androgene Steroide)', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' }
    ],
    community: [],
    filterCat: 'Exercise'
  },
  {
    id: 'turinabol',
    name: 'Oral-Turinabol (Dehydrochlormethyltestosteron)',
    altNames: 'Turinabol, Turi, OT, DHCMT, Dehydrochlormethyltestosteron, 4-Chlordehydromethyltestosteron, Chlordehydromethyltestosteron',
    class: 'Orales anabol-androgenes Steroid mit 17α-Methyl-Struktur, früheres DDR-Arzneimittel von Jenapharm, heute ohne Zulassung',
    emoji: '💊',
    short: 'Oral-Turinabol ist ein Steroid aus Jena, 1965 in der DDR für die Klinik eingeführt und ab 1966 das am häufigsten eingesetzte Mittel des staatlichen Dopingprogramms. Dass es Kraft und Leistung steigert, belegen interne DDR-Akten, kontrollierte Studien dazu gibt es nicht. Was es an Menschen hinterlassen hat, ist dagegen an Hunderten ehemaliger Athletinnen und Athleten untersucht – mit der Einschränkung, dass sich Substanz und System kaum trennen lassen.',
    moa: 'Dehydrochlormethyltestosteron ist eine chlorierte Abwandlung des Metandienons und bindet wie alle anabol-androgenen Steroide am Androgenrezeptor → Eiweißaufbau in Muskel und anderen Geweben, vermännlichende Wirkung, Rückkopplung auf die Hormonachse mit Drosselung der eigenen Hormonproduktion. Es trägt eine 17α-Methyl-Gruppe und wird als Tablette eingenommen. Am Menschen gut vermessen ist vor allem der Abbau: Stoffwechselprodukte waren nach einer einzigen Einnahme in einer kontrollierten Studie mit 5 Männern bis zu 45 Tage im Urin nachweisbar (Loke 2021).',
    benefits: [
      'Warum es bekannt ist: In der DDR war es ab 1966 das am häufigsten verwendete Dopingmittel; ein geheimer Bericht von 1973 wertete die Leistungsentwicklung von 40 Weltklasse-Werfern unter dem Mittel aus, bei einer Kugelstoßerin stieg die Leistung in 11 Wochen um rund 2 m (Franke & Berendonk 1997)',
      'Die Wirkung war bei Frauen besonders ausgeprägt; die DDR setzte das Mittel ab 1968 gezielt bei Athletinnen und Minderjährigen ein (Franke & Berendonk 1997)',
      'Was fehlt: keine einzige randomisierte Studie zu Muskelaufbau, Kraft oder Leistung; die Belege stammen aus Geheimakten ohne Kontrollgruppe'
    ],
    risks: [
      'Langzeitfolgen bei ehemaligen DDR-Athleten: Störungen der Hormonregulation, Wachstums- und Organschäden, Herz-Kreislauf-Erkrankungen, Tumoren, Verschleiß des Bewegungsapparats; psychische Störungen mit einer Lebenszeitprävalenz von bis zu 98 % (Übersicht, Spitzer & Bley 2026)',
      'Vergleich gedopter mit nicht gedopten Leistungssportlern und Nichtsportlern: mehr körperliche und psychische Erkrankungen; bei Männern häufiger gestörte Leberfunktion, Depression und Tumoren (Berger 2024)',
      'Bei 107 anerkannten Dopingopfern (56 Frauen, 51 Männer) dominieren Verschleißerkrankungen des Bewegungsapparats, an zweiter Stelle psychische Erkrankungen (Raschka & Koch 2024); 65,19 % der befragten früheren Athleten mit ausgeprägter depressiver Symptomatik (Buhrmann 2023)',
      'Vermännlichung bei Frauen, die bleiben kann – in der DDR fielen 1976 die tiefen Stimmen der Schwimmerinnen öffentlich auf (Franke & Berendonk 1997)',
      'Einschränkung der Langzeitdaten: Die Betroffenen erhielten meist mehrere Mittel und standen unter massivem Druck; die Studien können die Folgen nicht allein der Substanz zuordnen (Berger 2024)',
      'Im Sport jederzeit verboten (WADA S1.1); in Deutschland Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'In Deutschland ist kein Arzneimittel mit diesem Wirkstoff gelistet (Gelbe Liste, Stand 10/2026); Oral-Turinabol wurde 1965 in der DDR für die Klinik eingeführt. Dehydrochlormethyltestosteron steht namentlich in der Anlage des Anti-Doping-Gesetzes: Herstellung, Handel, Abgabe und Verschreibung zu Dopingzwecken sind verboten (§ 2 Abs. 1), ebenso Erwerb, Besitz und Verbringen in nicht geringer Menge zum Doping im Sport (§ 2 Abs. 3). Ein nicht zugelassenes Fertigarzneimittel darf nicht in Verkehr gebracht werden (§ 21 AMG). WADA-Verbotsliste 2026: S1.1, jederzeit verboten. Für die Opfer des DDR-Staatsdopings gab es zwei Hilfegesetze; nach Angaben der Bundesregierung wurden 1.643 von 2.062 Anträgen bewilligt.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/9216474/',
    sources: [
      { title: 'Franke WW, Berendonk B, Clin Chem 1997 – Hormondoping und Androgenisierung von Athleten: das geheime Programm der DDR-Regierung', url: 'https://pubmed.ncbi.nlm.nih.gov/9216474/' },
      { title: 'Spitzer C, Bley B, Bundesgesundheitsblatt 2026 – Staatsdoping im DDR-Leistungssport: gesundheitliche Folgen, Aufarbeitung, rechtlicher Ausgleich', url: 'https://pubmed.ncbi.nlm.nih.gov/42045688/' },
      { title: 'Berger K et al., Orthopädie 2024 – Langzeitfolgen von Steroiddoping im Jugendalter, Vergleich mit nicht gedopten Sportlern und Nichtsportlern', url: 'https://pubmed.ncbi.nlm.nih.gov/38653791/' },
      { title: 'Raschka C, Koch HJ, MMW Fortschr Med 2024 – Schäden bei 107 anerkannten DDR-Dopingopfern', url: 'https://pubmed.ncbi.nlm.nih.gov/39653949/' },
      { title: 'Buhrmann SF et al., Psychiatr Prax 2023 – Psychopathologie ehemaliger DDR-Leistungssportler im Vergleich zur Allgemeinbevölkerung', url: 'https://pubmed.ncbi.nlm.nih.gov/37487510/' },
      { title: 'Loke S et al., J Steroid Biochem Mol Biol 2021 – kontrollierte Gabe an 5 Männer: Ausscheidung und Langzeit-Nachweis', url: 'https://pubmed.ncbi.nlm.nih.gov/34418529/' },
      { title: 'Deutscher Bundestag, hib 128/2023 – Dopingopferhilfe: 1.643 von 2.062 Anträgen bewilligt', url: 'https://www.bundestag.de/presse/hib/kurzmeldungen-935274' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Verbotsliste im Sport 2026: S1.1 anabol-androgene Steroide (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'mesterolon',
    name: 'Mesterolon (Proviron)',
    altNames: 'Proviron, Pro-Viron, Mesterolone, 1α-Methyl-Dihydrotestosteron, 1-Methyl-DHT',
    class: 'Orales Androgen, Abkömmling des Dihydrotestosterons (DHT) ohne 17α-Alkylierung; in mehreren EU-Ländern verschreibungspflichtiges Arzneimittel, in Deutschland derzeit nicht im Handel',
    emoji: '💊',
    short: 'Mesterolon ist ein Androgen in Tablettenform, das als Proviron in mehreren europäischen Ländern bis heute bei Androgenmangel des Mannes zugelassen ist. In den 1970er und 1980er Jahren wurde es in randomisierten Studien gegen männliche Unfruchtbarkeit und Depression geprüft – beide Male ohne Vorteil gegenüber Placebo. Vor dem Einsatz zum Muskelaufbau bei Gesunden warnt die Packungsbeilage ausdrücklich, Studien zu diesem Zweck gibt es nicht.',
    moa: 'Mesterolon ist chemisch 1α-Methyl-Dihydrotestosteron, also ein Abkömmling des DHT. Es bindet am Androgenrezeptor und fördert laut Packungsbeilage Wachstum, Entwicklung und Funktion androgenabhängiger Organe. Anders als die meisten Tabletten-Steroide trägt es keine 17α-Alkylgruppe. Am Menschen gemessen ist die Rückkopplung auf die Hormonachse: In einer placebokontrollierten Studie mit 52 depressiven Männern sanken unter Mesterolon das Gesamttestosteron und das gebundene Testosteron deutlich (Itil 1984).',
    benefits: [
      'Zugelassenes Arzneimittel: In Belgien und Luxemburg als Proviron bei Androgenmangel des Mannes infolge gestörter Hodenfunktion zugelassen, Packungsbeilage zuletzt 07/2024 genehmigt; 2019 nationale Zulassungen u. a. in Ungarn, der Slowakei, Italien, Malta, Spanien, Griechenland und Portugal (EMA-Liste)',
      'Bei Männern mit Androgenmangel besserten sich Libido, Erektionen und Stimmung unter Testosteronundecanoat nach 4 Wochen deutlich stärker als unter Mesterolon (doppelblinde Vergleichsstudie, 26 Patienten, Luisi 1980)',
      'Männliche Unfruchtbarkeit: in der WHO-Studie mit 248 Paaren über 6 Monate keine signifikant höhere Schwangerschaftsrate als unter Placebo (Schwangerschaftsraten nach 8 Monaten 9 % unter Placebo, 12 % und 16 % in den beiden Mesterolon-Gruppen; WHO Task Force 1989); in einer zweiten Studie mit 52 Männern über 12 Monate 26 % unter Mesterolon gegenüber 48 % unter Placebo (Gerris 1991)',
      'Depression: In einer doppelblinden, placebokontrollierten Studie mit 52 Männern über 6 Wochen besserten sich die Beschwerden unter Mesterolon und unter Placebo, ohne Unterschied zwischen den Gruppen (Itil 1984)'
    ],
    risks: [
      'Leber: Die Packungsbeilage nennt seltene gutartige und noch seltenere bösartige Lebertumoren nach hormonalen Wirkstoffen dieser Art, vereinzelt mit lebensgefährlichen Blutungen in die Bauchhöhle',
      'Laut Packungsbeilage nicht als Mittel zum Bodybuilding oder Muskelaufbau bei Gesunden: schwerwiegende Risiken für Herz und Gefäße (bis zum Tod), Leber und psychische Gesundheit sowie Abhängigkeit',
      'Nebenwirkungen laut Packungsbeilage: häufige oder anhaltende Erektionen bis zum Priapismus, Wasser- und Salzeinlagerung, Akne, Haarausfall, Kopfschmerzen, Bauchschmerzen; Gegenanzeigen Prostatakrebs und Lebertumoren',
      'Hormonachse: Abfall des eigenen Testosterons unter Mesterolon gemessen (Itil 1984)',
      'Gerinnung: Nach einer tiefen Beinvenenthrombose unter Mesterolon fand eine Studie an 9 gesunden Männern über 21 Tage keine messbare Veränderung der Gerinnungswerte (Lowe 1979)'
    ],
    status: 'In Deutschland ist derzeit kein Präparat auf dem Markt (Gelbe Liste, Stand 10/2026: Wirkstoff ohne zugeordnetes Präparat); in der EMA-Liste national zugelassener Präparate von 2019 ist Deutschland nicht aufgeführt. Mesterolon und seine Ester sind verschreibungspflichtig (Anlage 1 der Arzneimittelverschreibungsverordnung). In Belgien und Luxemburg ist Proviron verschreibungspflichtig zugelassen. Mesterolon steht namentlich in der Anlage des Anti-Doping-Gesetzes: Handel, Abgabe und Verschreibung zu Dopingzwecken sind verboten (§ 2 Abs. 1), ebenso Erwerb und Besitz in nicht geringer Menge zum Doping im Sport (§ 2 Abs. 3). WADA-Verbotsliste 2026: S1.1, jederzeit verboten.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/2680994/',
    sources: [
      { title: 'Gebrauchsinformation Proviron Tabletten, Belgien und Luxemburg (FAGG, genehmigt 07/2024)', url: 'https://app.fagg-afmps.be/pharma-status/api/files/62bc88be1e5c015ab30d5f6b' },
      { title: 'EMA 2019 – Liste national zugelassener Arzneimittel mit Mesterolon (PSUSA/00010551/201901)', url: 'https://www.ema.europa.eu/en/documents/psusa/mesterolone-list-nationally-authorised-medicinal-products-psusa00010551201901_en.pdf' },
      { title: 'WHO Task Force, Int J Androl 1989 – Mesterolon bei idiopathischer männlicher Unfruchtbarkeit, doppelblind, 248 Paare', url: 'https://pubmed.ncbi.nlm.nih.gov/2680994/' },
      { title: 'Gerris J et al., Fertil Steril 1991 – placebokontrollierte Studie, hoch dosiertes Mesterolon bei männlicher Unfruchtbarkeit, 52 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/1900485/' },
      { title: 'Itil TM et al., Methods Find Exp Clin Pharmacol 1984 – Mesterolon bei depressiven Männern, doppelblind, placebokontrolliert', url: 'https://pubmed.ncbi.nlm.nih.gov/6431212/' },
      { title: 'Luisi M, Franchi F, J Endocrinol Invest 1980 – Testosteronundecanoat gegen Mesterolon bei Androgenmangel, doppelblind', url: 'https://pubmed.ncbi.nlm.nih.gov/7000879/' },
      { title: 'Lowe GD et al., Br J Clin Pharmacol 1979 – Thrombose unter Mesterolon und Gerinnungsstudie an 9 gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/760733/' },
      { title: 'Arzneimittelverschreibungsverordnung (AMVV), Anlage 1: Mesterolon und seine Ester', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' },
      { title: 'Verbotsliste im Sport 2026: S1.1 anabol-androgene Steroide (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'trestolon',
    name: 'Trestolon (MENT)',
    altNames: 'MENT, 7α-Methyl-19-nortestosteron, 7alpha-Methyl-19-nortestosteron, Trestolone, Trestolonacetat, MENT-Acetat',
    class: 'Synthetisches Androgen (Nandrolon-Abkömmling), als Verhütungsmittel für Männer und als Hormonersatz klinisch erprobt, nie zugelassen',
    emoji: '💉',
    short: 'Trestolon, in der Forschung MENT genannt, wurde vom Population Council als Implantat für die Verhütung beim Mann entwickelt. In kleinen Studien mit insgesamt rund 140 Männern unterdrückte es die Spermienbildung, teils bis auf null, und hielt bei Männern mit Hormonmangel Libido und Stimmung aufrecht. Zugelassen wurde es nie; zur Muskelwirkung beim Menschen gibt es keine einzige Studie.',
    moa: 'Trestolon bindet am Androgenrezeptor und ist stärker wirksam als Testosteron. Es wird nicht durch die 5α-Reduktase umgebaut und wirkt deshalb an der Prostata schwächer, kann aber zu Östrogen umgewandelt werden (Anderson 2003). Über die Rückkopplung drosselt es LH, FSH und das eigene Testosteron: Bei 24 gesunden Männern sanken nach sechs täglichen Spritzen in der höchsten Dosisgruppe Testosteron um 74 %, LH um 70 % und FSH um 57 % (Suvisaari 1997). Genau diese Drosselung legt die Spermienbildung still, der Grund für die Entwicklung als Verhütungsmittel.',
    benefits: [
      'Spermienunterdrückung: In einer randomisierten Studie mit 35 gesunden Männern und Implantaten in drei Dosisgruppen wurden in der höchsten Gruppe 8 von 12 Männern spermienfrei, 2 sprachen nicht an; in der niedrigsten Gruppe keiner (von Eckardstein 2003)',
      'Zusammen mit einem Gestagen-Implantat sank die Spermienzahl nach 12 Wochen bei 8 von 10 Männern unter 1 Million pro ml, ähnlich wie unter Testosteron; danach ließ die Wirkung nach, weil die Implantate weniger freisetzten (Walton 2007, 29 Männer)',
      'Hormonersatz: Bei 20 Männern mit Hormonmangel steigerte es sexuelles Interesse, Aktivität und spontane Erektionen ähnlich wie Testosteronenantat (Crossover über je 6 Wochen, Anderson 1999)',
      'Prostata: Bei 16 Männern mit Hormonmangel fiel das PSA über 24 Wochen, das Prostatavolumen sank teilweise – erster Beleg am Menschen für die Schonung der Prostata (Anderson 2003)'
    ],
    risks: [
      'Knochen: Unter MENT nahm die Knochendichte der Lendenwirbelsäule über 24 Wochen ab (Anderson 2003)',
      'Blut und Fette: Anstieg von roten Blutkörperchen, Hämatokrit und Hämoglobin, Abfall von SHBG; Veränderungen der Blutfette und kleine Veränderungen der Leberwerte, in den Studien rückläufig (von Eckardstein 2003); Abfall des HDL-Cholesterins (Walton 2007)',
      'Libidoverlust bei 6 Männern, als die Freisetzung aus den Implantaten nachließ (Walton 2007); bei zu niedrigem Spiegel nahmen sexuelles Verhalten und Erektionen ab (Anderson 2003)',
      'Sicherheitsdaten stammen aus Studien von höchstens 12 Monaten mit jeweils 16 bis 35 Teilnehmern; eine Studie des Population Council zum Blutdruck mit 68 Männern wurde 2014 abgeschlossen, Ergebnisse sind im Register nicht veröffentlicht (NCT00812630)',
      'Am Menschen nicht untersucht: Muskelaufbau, Herz und Gefäße, Anwendung außerhalb von Studien; die oft zitierte zehnfach stärkere aufbauende Wirkung als Testosteron stammt aus Untersuchungen der 1960er Jahre im Rahmen der Krebsforschung (Piper 2026)',
      'Im Sport jederzeit verboten (WADA S1.1)'
    ],
    status: 'In keinem Land als Arzneimittel zugelassen; die Entwicklung als Verhütungsimplantat für Männer kam über kleine klinische Studien nicht hinaus, die letzte registrierte Studie endete 2014. In Deutschland ist kein Präparat gelistet (Gelbe Liste, Stand 10/2026); ein nicht zugelassenes Fertigarzneimittel darf nicht in Verkehr gebracht werden (§ 21 AMG). Trestolon steht auf der WADA-Verbotsliste 2026 (S1.1, jederzeit verboten); damit sind Herstellung, Handel, Abgabe und Verschreibung zu Dopingzwecken nach § 2 Abs. 1 Anti-Doping-Gesetz verboten. In der Anlage des Anti-Doping-Gesetzes, die Erwerb und Besitz in nicht geringer Menge regelt, ist es nicht namentlich genannt; die Anlage führt allgemein „andere mit anabol-androgenen Steroiden verwandte Stoffe“ auf.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/14602755/',
    sources: [
      { title: 'von Eckardstein S et al., J Clin Endocrinol Metab 2003 – MENT-Implantate als Langzeitverhütung für Männer, 35 Teilnehmer', url: 'https://pubmed.ncbi.nlm.nih.gov/14602755/' },
      { title: 'Walton MJ et al., J Androl 2007 – MENT gegen Testosteron, jeweils mit Etonogestrel-Implantat, 29 gesunde Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/17460095/' },
      { title: 'Anderson RA et al., J Clin Endocrinol Metab 2003 – Gewebeselektivität von MENT bei 16 Männern mit Hormonmangel', url: 'https://pubmed.ncbi.nlm.nih.gov/12788888/' },
      { title: 'Anderson RA et al., J Clin Endocrinol Metab 1999 – MENT erhält Sexualverhalten und Stimmung bei Männern mit Hormonmangel', url: 'https://pubmed.ncbi.nlm.nih.gov/10522995/' },
      { title: 'Suvisaari J et al., Hum Reprod 1997 – Pharmakokinetik und Hormonsenkung nach Injektion bei gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/9194649/' },
      { title: 'ClinicalTrials.gov NCT00812630 – Population Council, MENT und Blutdruck, 68 Männer, abgeschlossen 2014, ohne veröffentlichte Ergebnisse', url: 'https://clinicaltrials.gov/study/NCT00812630' },
      { title: 'Piper T et al., Drug Test Anal 2026 – Stoffwechsel von Trestolon am Menschen, Nachweis in der Dopingkontrolle', url: 'https://pubmed.ncbi.nlm.nih.gov/41407450/' },
      { title: 'Arzneimittelgesetz (AMG), § 21 Zulassungspflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__21.html' },
      { title: 'Anti-Doping-Gesetz (AntiDopG), § 2 und Anlage', url: 'https://www.gesetze-im-internet.de/antidopg/' },
      { title: 'Verbotsliste im Sport 2026: S1.1, Trestolon (WADA Prohibited List)', url: 'https://www.wada-ama.org/en/prohibited-list' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Exercise'
  },
  {
    id: 'anastrozol',
    name: 'Anastrozol',
    altNames: 'Arimidex, Anastrozole',
    class: 'Aromatasehemmer (nicht-steroidal), verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen gegen hormonabhängigen Brustkrebs nach den Wechseljahren und dort in einer Studie mit 9.366 Frauen besser als Tamoxifen. Bei Männern hebt es Testosteron und senkt Östradiol – in einer einjährigen Studie aber ohne Gewinn an Muskelmasse oder Kraft, dafür mit Abnahme der Knochendichte.',
    moa: 'Anastrozol hemmt selektiv das Enzym Aromatase, das Androgene wie Testosteron und Androstendion in Östrogene umwandelt. Bei Frauen nach den Wechseljahren senkt die zugelassene Dosis Östradiol laut US-Fachinformation innerhalb von 24 Stunden um etwa 70 Prozent; das bremst hormonabhängigen Brustkrebs. Beim Mann lockert weniger Östradiol die Rückkopplung auf die Hypophyse, sie schüttet mehr LH aus, und der Testosteronspiegel steigt. Östradiol ist beim Mann aber kein Störfaktor: Es ist an Knochenstoffwechsel, Fettverteilung und Sexualfunktion beteiligt.',
    benefits: [
      'Brustkrebs nach den Wechseljahren: in ATAC (9.366 Frauen, 5 Jahre) weniger Rückfälle als unter Tamoxifen – krankheitsfreies Überleben HR 0,87, Zeit bis zum Rückfall HR 0,79, Brustkrebs der Gegenseite 35 gegenüber 59 Fälle (Howell 2005)',
      'Bei älteren Männern mit niedrigem Testosteron stieg der Spiegel binnen 3 Monaten von 11,2 auf 18,2 nmol/l, Östradiol sank moderat (RCT, 88 Männer, 1 Jahr, Burnett-Bowie 2009) – ein Laborwert, kein klinischer Nutzen',
      'Anwendungsgebiete, Dosis und Gegenanzeigen sind EU-weit vereinheitlicht (EMA, Entscheidung 2011); breite Anwendung in der Brustkrebstherapie'
    ],
    risks: [
      'Knochen: Bei älteren Männern sank die Knochendichte der Lendenwirbelsäule unter Anastrozol, unter Placebo stieg sie leicht (p = 0,0014, Burnett-Bowie 2009); bei Frauen in ATAC mehr Knochenbrüche als unter Tamoxifen',
      'Östradiol zu niedrig: In einer Studie mit 400 gesunden Männern ging die Zunahme an Körperfett vor allem auf Östrogenmangel zurück, und er trug zum Rückgang der Sexualfunktion bei (Finkelstein 2013)',
      'Kein Nutzen für Muskeln oder Kraft: trotz höherem Testosteron keine Veränderung von Körperzusammensetzung und Kraft über ein Jahr (Burnett-Bowie 2009)',
      'Gegen Brustdrüsenvergrößerung bei Jungen in der Pubertät nicht besser als Placebo – Ansprechen 38,5 gegenüber 31,4 Prozent (Plourde 2004)',
      'Blutfette und Herz: In ATAC häufiger erhöhtes Cholesterin als unter Tamoxifen (9 gegenüber 3,5 Prozent), bei vorbestehender koronarer Herzkrankheit mehr ischämische Ereignisse (17 gegenüber 10 Prozent, US-Fachinformation); bei den Männern blieben die Blutfette über ein Jahr unverändert',
      'Gelenkschmerzen häufiger als unter Tamoxifen (Howell 2005)',
      'Dopingrelevant: WADA-Verbotsliste S4.1, zu allen Zeiten verboten; in Deutschland in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'Zugelassen und verschreibungspflichtig (Arimidex): hormonrezeptor-positiver Brustkrebs bei Frauen nach den Wechseljahren, fortgeschritten und unterstützend nach der Operation; zugelassene Dosis 1 mg einmal täglich (EU-weit vereinheitlicht, Entscheidung der Europäischen Kommission vom 19.05.2011). Die Anwendung bei Männern – bei niedrigem Testosteron, zur Östradiol-Senkung oder gegen eine Brustdrüsenvergrößerung – ist nicht zugelassen. WADA-Verbotsliste 2026: S4.1 Aromatasehemmer, zu allen Zeiten verboten. Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/18616708/',
    sources: [
      { title: 'Howell A et al., Lancet 2005 – ATAC, Anastrozol gegen Tamoxifen nach Brustkrebs, 9.366 Frauen, 5 Jahre', url: 'https://pubmed.ncbi.nlm.nih.gov/15639680/' },
      { title: 'Burnett-Bowie SA et al., Clin Endocrinol 2009 – Anastrozol bei älteren Männern mit niedrigem Testosteron, RCT mit 88 Männern, 1 Jahr', url: 'https://pubmed.ncbi.nlm.nih.gov/18616708/' },
      { title: 'Burnett-Bowie SA et al., J Clin Endocrinol Metab 2009 – Knochendichte unter Anastrozol bei älteren Männern, RCT mit 69 Männern, 1 Jahr', url: 'https://pubmed.ncbi.nlm.nih.gov/19820017/' },
      { title: 'Finkelstein JS et al., N Engl J Med 2013 – Testosteron, Östradiol, Körperzusammensetzung, Kraft und Sexualfunktion bei 400 gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/24024838/' },
      { title: 'Plourde PV et al., J Clin Endocrinol Metab 2004 – Anastrozol bei Brustdrüsenvergrößerung in der Pubertät, RCT mit 80 Jungen', url: 'https://pubmed.ncbi.nlm.nih.gov/15356042/' },
      { title: 'EMA, Arimidex – Harmonisierungsverfahren, Entscheidung 19.05.2011: Anwendungsgebiete, Dosis, Gegenanzeigen', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/arimidex' },
      { title: 'US-Fachinformation Arimidex (DailyMed) – Wirkung auf Östradiol, Warnhinweise zu Knochendichte, Cholesterin und ischämischen Ereignissen', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=acbfaaa9-503c-4691-9828-76a7146ed6de' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 – Verschreibungspflicht', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'WADA-Verbotsliste 2026, informatorische Übersetzung der NADA – S4.1 Aromatasehemmer, zu allen Zeiten verboten', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' },
      { title: 'Anti-Doping-Gesetz, Anlage – III. Hormon- und Stoffwechsel-Modulatoren, 1. Aromatasehemmer', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'letrozol',
    name: 'Letrozol',
    altNames: 'Femara, Letrozole',
    class: 'Aromatasehemmer (nicht-steroidal), verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen gegen hormonabhängigen Brustkrebs nach den Wechseljahren und dort an 8.010 Frauen besser als Tamoxifen. Bei übergewichtigen Männern hob es Testosteron in einer placebokontrollierten Studie deutlich an – ohne messbare Wirkung auf Körper oder Psyche.',
    moa: 'Letrozol hemmt hochspezifisch das Enzym Aromatase, das Androgene in Östrogene umwandelt. Bei Frauen nach den Wechseljahren sinken Östradiol, Östron und Östronsulfat laut US-Fachinformation um 75 bis 95 Prozent, die Bildung von Nebennierenhormonen bleibt unberührt. Beim Mann lockert weniger Östradiol die Rückkopplung auf die Hypophyse: LH steigt, die Hoden bilden mehr Testosteron. Bei stark übergewichtigen Männern, deren Fettgewebe viel Testosteron in Östradiol umwandelt, ist dieser Effekt besonders ausgeprägt.',
    benefits: [
      'Brustkrebs nach den Wechseljahren: in BIG 1-98 (8.010 Frauen) weniger Rückfälle als unter Tamoxifen – HR 0,81, für Fernmetastasen HR 0,73 (Thürlimann 2005)',
      'Bei stark übergewichtigen Männern mit niedrigem Testosteron stieg der Spiegel von 8,6 auf 21,5 nmol/l (RCT, 42 Männer, 6 Monate, Loves 2013) – ohne messbare Wirkung auf Psyche, Körperzusammensetzung, Belastbarkeit oder Stoffwechsel',
      'Bei Männern mit schwerer Fruchtbarkeitsstörung verbesserte sich die Kategorie der Spermienkonzentration häufiger als in der Kontrollgruppe: 14,3 gegenüber 5,4 Prozent (RCT, offen, 296 Männer, 3 Monate, Sun 2026)',
      'Anwendungsgebiete EU-weit vereinheitlicht (EMA, Entscheidung 2012); breite Anwendung in der Brustkrebstherapie'
    ],
    risks: [
      'Knochen: Bei Frauen sank die Knochendichte der Lendenwirbelsäule nach 24 Monaten im Median um 4,1 Prozent, unter Tamoxifen stieg sie um 0,3 Prozent; Knochenbrüche 14,7 gegenüber 11,4 Prozent (US-Fachinformation, BIG 1-98)',
      'Cholesterin und Herz: In BIG 1-98 häufiger erhöhtes Cholesterin sowie mehr Herz- und Knochenereignisse als unter Tamoxifen',
      'Bei Männern stieg das freie Testosteron in einer Pilotstudie bei 7 von 12 über den Normalbereich (Loves 2008); bei der höchsten geprüften Dosis überschießender LH-Anstieg (de Boer 2005)',
      'Weniger Libido bei 12,2 gegenüber 5,4 Prozent der Männer in der Fruchtbarkeitsstudie (Sun 2026)',
      'Müdigkeit, Schwindel und Schläfrigkeit möglich – Vorsicht beim Bedienen von Maschinen (US-Fachinformation)',
      'Daten bei Männern reichen höchstens sechs Monate; Langzeitfolgen für Knochen und Herz sind bei Männern nicht untersucht',
      'Dopingrelevant: WADA-Verbotsliste S4.1, zu allen Zeiten verboten; in Deutschland in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'Zugelassen und verschreibungspflichtig (Femara): Brustkrebs bei Frauen nach den Wechseljahren – unterstützend nach der Operation, erweitert unterstützend nach fünf Jahren Tamoxifen, fortgeschritten sowie vor der Operation; zugelassene Dosis 2,5 mg einmal täglich (EU-weit vereinheitlicht, Entscheidung der Europäischen Kommission vom 22.05.2012). Die Anwendung bei Männern – bei niedrigem Testosteron, bei Unfruchtbarkeit oder zur Östradiol-Senkung – ist nicht zugelassen. WADA-Verbotsliste 2026: S4.1 Aromatasehemmer, zu allen Zeiten verboten. Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/23949882/',
    sources: [
      { title: 'BIG 1-98 Collaborative Group (Thürlimann B et al.), N Engl J Med 2005 – Letrozol gegen Tamoxifen nach Brustkrebs, 8.010 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/16382061/' },
      { title: 'Loves S et al., Eur J Endocrinol 2013 – Letrozol bei adipösen Männern mit niedrigem Testosteron, RCT mit 42 Männern, 6 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/23949882/' },
      { title: 'Loves S et al., Eur J Endocrinol 2008 – Letrozol bei adipösen Männern, offene Pilotstudie mit 12 Männern, 6 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/18426834/' },
      { title: 'de Boer H et al., Diabetes Obes Metab 2005 – Letrozol bei 10 stark übergewichtigen Männern, 6 Wochen, ohne Kontrollgruppe', url: 'https://pubmed.ncbi.nlm.nih.gov/15811136/' },
      { title: 'Sun Y et al., JAMA Netw Open 2026 – Letrozol bei schwerer männlicher Fruchtbarkeitsstörung, RCT mit 296 Männern, 3 Monate', url: 'https://pubmed.ncbi.nlm.nih.gov/42313386/' },
      { title: 'EMA, Femara – Harmonisierungsverfahren, Entscheidung 22.05.2012: Anwendungsgebiete', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/femara' },
      { title: 'US-Fachinformation Femara (DailyMed) – Dosis, Wirkung auf Östrogene, Knochendichte, Knochenbrüche, Cholesterin', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=82b77d74-085f-45ac-a7dd-1f5c038bf406' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 – Verschreibungspflicht', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'WADA-Verbotsliste 2026, informatorische Übersetzung der NADA – S4.1 Aromatasehemmer, zu allen Zeiten verboten', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' },
      { title: 'Anti-Doping-Gesetz, Anlage – III. Hormon- und Stoffwechsel-Modulatoren, 1. Aromatasehemmer', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'exemestan',
    name: 'Exemestan',
    altNames: 'Aromasin, Exemestane',
    class: 'Aromatasehemmer (steroidal, irreversibel), verschreibungspflichtig',
    emoji: '💊',
    short: 'Gegen hormonabhängigen Brustkrebs nach den Wechseljahren in zwei großen Studien gut belegt. Für Männer gibt es eine einzige Studie: zehn Tage, 12 junge Männer, gemessen wurden Hormonwerte.',
    moa: 'Exemestan ist ein steroidaler Aromatasehemmer, chemisch dem natürlichen Substrat Androstendion verwandt. Laut US-Fachinformation wird es von der Aromatase als falsches Substrat umgesetzt und blockiert das Enzym dauerhaft („Suizidhemmung“). In der zugelassenen Dosis sinken die Östrogene bei Frauen nach den Wechseljahren um mindestens 85 bis 95 Prozent. Exemestan selbst bindet kaum an den Androgenrezeptor, sein Abbauprodukt 17-Dihydroexemestan etwa 100-mal stärker. Bei jungen Männern sank Östradiol und Testosteron stieg.',
    benefits: [
      'Brustkrebs nach den Wechseljahren: Wechsel von Tamoxifen auf Exemestan senkte das Rückfallrisiko (IES, 4.724 Frauen, HR 0,76, absoluter Vorteil 3,3 Prozentpunkte; Coombes 2007)',
      'Vorbeugung bei erhöhtem Risiko: 65 Prozent weniger invasive Brustkrebse als unter Placebo, 11 gegenüber 32 Fälle (MAP.3, 4.560 Frauen; Goss 2011)',
      'Bei 12 jungen gesunden Männern sank Östradiol nach 10 Tagen um 32 bis 38 Prozent, Testosteron stieg um 56 bis 60 Prozent; Blutfette unverändert (Mauras 2003) – nur Laborwerte'
    ],
    risks: [
      'Knochen: Bei Frauen sank die Knochendichte nach 24 Monaten an der Lendenwirbelsäule um 3,1 Prozent, unter Tamoxifen um 0,2 Prozent (US-Fachinformation); Knochendichte-Messung und Vitamin-D-Kontrolle vor Beginn empfohlen',
      'Daten beim Mann: eine Studie über 10 Tage an 12 Männern – zu Knochen, Herz, Blutfetten und Sexualfunktion bei längerer Anwendung gibt es nichts',
      'Östradiol zu niedrig: In Studien mit Anastrozol an 400 gesunden Männern führte Östrogenmangel zu mehr Körperfett, trug zum Rückgang der Sexualfunktion bei und senkte die Knochendichte – unabhängig von der Testosterondosis (Finkelstein 2013, 2016)',
      'Ein Abbauprodukt bindet an den Androgenrezeptor; was das beim Mann klinisch bedeutet, ist nicht untersucht',
      'Dopingrelevant: WADA-Verbotsliste S4.1, zu allen Zeiten verboten; in Deutschland in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'Zugelassenes Brustkrebs-Arzneimittel (Aromasin): Laut US-Fachinformation unterstützende Behandlung nach zwei bis drei Jahren Tamoxifen bis zu insgesamt fünf Jahren sowie fortgeschrittener Brustkrebs nach Tamoxifen, jeweils bei Frauen nach den Wechseljahren; zugelassene Dosis 25 mg einmal täglich nach einer Mahlzeit. In Deutschland verschreibungspflichtig (Anlage 1 AMVV). Die Anwendung bei Männern ist nicht zugelassen. WADA-Verbotsliste 2026: S4.1 Aromatasehemmer, zu allen Zeiten verboten. Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/14671195/',
    sources: [
      { title: 'Coombes RC et al., Lancet 2007 – IES, Wechsel auf Exemestan nach 2–3 Jahren Tamoxifen, 4.724 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/17307102/' },
      { title: 'Goss PE et al., N Engl J Med 2011 – MAP.3, Exemestan zur Vorbeugung von Brustkrebs, 4.560 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/21639806/' },
      { title: 'Mauras N et al., J Clin Endocrinol Metab 2003 – Pharmakokinetik und Dosisfindung von Exemestan bei jungen Männern, Crossover mit 12 Männern, 10 Tage', url: 'https://pubmed.ncbi.nlm.nih.gov/14671195/' },
      { title: 'Finkelstein JS et al., N Engl J Med 2013 – Testosteron, Östradiol, Körperzusammensetzung, Kraft und Sexualfunktion bei 400 gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/24024838/' },
      { title: 'Finkelstein JS et al., J Clin Invest 2016 – Testosteron, Östradiol und Knochen bei 400 gesunden Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/26901812/' },
      { title: 'US-Fachinformation Aromasin (DailyMed) – Anwendungsgebiete, Dosis, Wirkmechanismus, Knochendichte', url: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=cf066b7a-032a-416c-8d40-15ba581423e3' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 – Verschreibungspflicht', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'WADA-Verbotsliste 2026, informatorische Übersetzung der NADA – S4.1 Aromatasehemmer, zu allen Zeiten verboten', url: 'https://www.nada.de/fileadmin/nada/SERVICE/Downloads/Verbotslisten/2026_Informatorische_Uebersetzung_Verbotsliste.pdf' },
      { title: 'Anti-Doping-Gesetz, Anlage – III. Hormon- und Stoffwechsel-Modulatoren, 1. Aromatasehemmer', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'tamoxifen',
    name: 'Tamoxifen',
    altNames: 'Nolvadex, Tamoxifencitrat, Tamoxifen AbZ',
    class: 'Selektiver Östrogenrezeptor-Modulator (SERM), verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen gegen Brustkrebs und dort einer der am besten untersuchten Wirkstoffe: Etwa fünf Jahre Tamoxifen senken bei hormonempfindlichem Tumor die Brustkrebssterblichkeit über 15 Jahre um rund ein Drittel. Bei Männern wird es außerhalb der Zulassung gegen Brustdrüsenwachstum genutzt – randomisiert geprüft ist das nur bei Antiandrogen-Therapie gegen Prostatakrebs. Daneben stehen Thrombosen, Gebärmutterkrebs und Linsentrübungen.',
    moa: 'Tamoxifen bindet an den Östrogenrezeptor und wirkt je nach Gewebe unterschiedlich: im Brustgewebe als Gegenspieler des Östrogens, an Gebärmutterschleimhaut und Knochen teilweise östrogenartig. Daraus erklären sich Nutzen (weniger Brustkrebs, weniger Knochenbrüche) und Schaden (Wucherungen und Krebs der Gebärmutterschleimhaut). Wirksam wird es erst nach Umbau in der Leber, vor allem über das Enzym CYP2D6 zum aktiven Stoffwechselprodukt Endoxifen; bei fehlender CYP2D6-Aktivität liegt Endoxifen laut Fachinformation um etwa 75 Prozent niedriger. Beim Mann blockiert Tamoxifen zusätzlich die Östrogen-Rückkopplung im Gehirn, sodass FSH und Testosteron steigen, und hemmt im Brustdrüsengewebe die Östrogenwirkung.',
    benefits: [
      'Brustkrebs, adjuvant: Etwa fünf Jahre Tamoxifen senkten bei östrogenrezeptorpositivem Tumor die Rückfallrate in den ersten vier Jahren fast um die Hälfte (RR 0,53) und die Brustkrebssterblichkeit über 15 Jahre um etwa ein Drittel (Meta-Analyse, 20 Studien, 21.457 Frauen, EBCTCG 2011)',
      'Vorbeugung bei erhöhtem Risiko: 49 Prozent weniger invasiver Brustkrebs, 22,0 gegenüber 43,4 Fällen je 1.000 Frauen (NSABP P-1, 13.388 Frauen, Fisher 1998); nach 7 Jahren außerdem 32 Prozent weniger osteoporotische Brüche (Fisher 2005)',
      'Gynäkomastie unter Antiandrogen-Therapie: In einer doppelblinden Studie mit 282 Männern mit Prostatakrebs traten Brustvergrößerung oder Brustschmerz je nach Tamoxifen-Dosisstufe bei 86,2 bis 8,8 Prozent auf, unter Placebo bei 96,7 Prozent (Fradet 2007); eine Meta-Analyse über drei randomisierte Tamoxifen-Studien bestätigt den Effekt (Viani 2012)',
      'Idiopathische Gynäkomastie: In einer Kohorte mit 81 Männern bildete sich die Brustvergrößerung bei 90,1 Prozent vollständig zurück – ohne Kontrollgruppe (Mannu 2018)',
      'Seit Jahrzehnten breit angewendet; Nebenwirkungen in großen Studien und in der Fachinformation beziffert'
    ],
    risks: [
      'Gebärmutterschleimhaut: Krebsrisiko in P-1 um das 2,53-Fache erhöht, vor allem ab 50 Jahren (Fisher 1998); laut Fachinformation steigt es mit der Behandlungsdauer auf das 2- bis 4-Fache, selten treten Uterussarkome auf; jährliche gynäkologische Kontrolle vorgesehen',
      'Thrombosen, Lungenembolien und Schlaganfälle traten in P-1 häufiger auf, vor allem ab 50 Jahren (Fisher 1998); unter gleichzeitiger Chemotherapie steigt die Thrombosehäufigkeit weiter (Fachinformation)',
      'Augen: häufig nur teilweise umkehrbare Sehstörungen durch Katarakte, Hornhauttrübungen und Netzhautveränderungen; das Kataraktrisiko steigt mit der Einnahmedauer (Fachinformation, mehr Katarakte auch in P-1)',
      'Bei Männern unter Antiandrogen-Therapie mehr Hitzewallungen ab den mittleren Dosisstufen (Fradet 2007); in der Meta-Analyse sechsmal mehr Nebenwirkungen als unter vorbeugender Bestrahlung der Brust (Viani 2012)',
      'Wechselwirkungen: Starke CYP2D6-Hemmer wie Paroxetin senken den aktiven Wirkspiegel; mit Gerinnungshemmern vom Cumarin-Typ verändert sich die Gerinnung (Fachinformation)',
      'Genotoxisches Potenzial: Laut Fachinformation sollen Männer während der Behandlung und 6 Monate danach verhüten und kein Kind zeugen',
      'Dopingrelevant: WADA-Liste 2026, S4.2, im Wettkampf und außerhalb verboten; namentlich in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig zur adjuvanten Therapie nach Primärbehandlung des Mammakarzinoms und beim metastasierenden Mammakarzinom (z. B. Tamoxifen AbZ 20 mg, Zulassung 23.06.1998); zugelassene Dosis laut Fachinformation 20 bis 40 mg täglich, in der Regel 20 mg. Die Anwendung gegen Gynäkomastie ist eine nicht zugelassene Anwendung. WADA-Verbotsliste 2026, S4.2 (antiöstrogene Substanzen), im Wettkampf und außerhalb verboten; in der Anlage des Anti-Doping-Gesetzes unter den antiestrogenen Stoffen.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/21802721/',
    sources: [
      { title: 'Early Breast Cancer Trialists’ Collaborative Group (EBCTCG), Lancet 2011 – Meta-Analyse adjuvantes Tamoxifen, 20 Studien, 21.457 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/21802721/' },
      { title: 'Fisher B et al., J Natl Cancer Inst 1998 – NSABP P-1, Tamoxifen zur Brustkrebsvorbeugung, 13.388 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/9747868/' },
      { title: 'Fisher B et al., J Natl Cancer Inst 2005 – NSABP P-1 nach 7 Jahren: Brüche, Thrombosen, Katarakte, Gebärmutterkrebs', url: 'https://pubmed.ncbi.nlm.nih.gov/16288118/' },
      { title: 'Fradet Y et al., Eur Urol 2007 – Tamoxifen gegen Gynäkomastie unter Bicalutamid, doppelblind, 282 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/17270340/' },
      { title: 'Viani GA et al., Int J Radiat Oncol Biol Phys 2012 – Meta-Analyse Tamoxifen oder Bestrahlung gegen Gynäkomastie unter Hormonentzug, 6 Studien, 777 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/22704706/' },
      { title: 'Mannu GS et al., Breast J 2018 – Tamoxifen bei idiopathischer Gynäkomastie, prospektive Kohorte, 81 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/30079473/' },
      { title: 'Chua ME et al., Andrology 2013 – Meta-Analyse zu Clomifen oder Tamoxifen bei unerklärter männlicher Unfruchtbarkeit, 11 randomisierte Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/23970453/' },
      { title: 'Fachinformation Tamoxifen AbZ 20 mg Tabletten (Stand April 2026)', url: 'https://www.fachinfo.de/fi/pdf/008652/tamoxifen-abz-20-mg-tabletten' },
      { title: 'WADA-Verbotsliste 2026, S4.2 Antiöstrogene Substanzen – amtliche Bekanntmachung im Bundesgesetzblatt II 2025 Nr. 312', url: 'https://www.recht.bund.de/bgbl/2/2025/312/regelungstext.pdf' },
      { title: 'Anti-Doping-Gesetz, Anlage – III. Hormon- und Stoffwechsel-Modulatoren, 2. Antiestrogene Stoffe', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'clomifen',
    name: 'Clomifen',
    altNames: 'Clomifencitrat, Clomiphene, Clomid, Clomifen-ratiopharm',
    class: 'Selektiver Östrogenrezeptor-Modulator (SERM), verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen, um bei Frauen mit ausbleibendem Eisprung die Ovulation auszulösen. Außerhalb der Zulassung wird es bei Männern mit niedrigem Testosteron eingesetzt: Es hebt den Spiegel zuverlässig, ob es Beschwerden bessert, ist kaum kontrolliert untersucht. Clomifen ist ein Gemisch aus Enclomifen und Zuclomifen – genau das unterscheidet es vom reinen Enclomifen.',
    moa: 'Clomifen blockiert Östrogenrezeptoren im Hypothalamus. Das Gehirn registriert scheinbar zu wenig Östrogen und schüttet mehr GnRH, LH und FSH aus; bei der Frau reift ein Follikel heran, beim Mann bilden die Hoden mehr eigenes Testosteron. Laut Fachinformation besteht Clomifen zu 62 Prozent aus Enclomifen (trans-Isomer, antiöstrogen) und zu 38 Prozent aus Zuclomifen (cis-Isomer); die Halbwertszeit von Clomifen liegt bei 5 Tagen. Weil die beiden Isomere unterschiedlich lange im Körper bleiben, verschiebt sich das Verhältnis: Bei Männern unter Dauertherapie lag Zuclomifen im Blut im Median 20-fach höher als Enclomifen (Helo 2017). Das reine Enclomifen wird als eigene Substanz angeboten, zugelassen ist es nirgends.',
    benefits: [
      'Zugelassene Anwendung: In einer doppelblinden Studie mit 750 Frauen mit PCOS führte Clomifen bei 19,1 Prozent zu einer Lebendgeburt, Letrozol bei 27,5 Prozent – Clomifen wirkt, Letrozol war besser (Legro 2014)',
      'Männer mit funktionellem Hypogonadismus: Übersichtsarbeit randomisierter Studien zu Clomifen und Enclomifen – Gesamttestosteron +274 ng/dl gegenüber Placebo, LH und FSH steigen, beim Testosteronspiegel kein Unterschied zum Testosteron-Gel (Hohl 2025)',
      'Bei unerklärter männlicher Unfruchtbarkeit höhere Schwangerschaftsrate (OR 2,42) sowie mehr Spermien und bessere Beweglichkeit in einer Meta-Analyse über 11 randomisierte Studien zu Clomifen oder Tamoxifen (Chua 2013)',
      'Langzeitdaten aus der Praxis: Von 120 Männern mit mehr als 3 Jahren Behandlung erreichten 88 Prozent normale Testosteronwerte, 77 Prozent berichteten weniger Beschwerden – rückblickend, ohne Kontrollgruppe (Krzastek 2019)',
      'In Deutschland seit Jahrzehnten zugelassen (Clomifen-ratiopharm seit 1990), Nebenwirkungen bei Frauen gut dokumentiert'
    ],
    risks: [
      'Sehstörungen: Flimmern, verschwommenes Sehen, Fleckensehen und verlängerte Nachbilder, laut Fachinformation häufiger mit steigender Gesamtdosis und meist Tage bis Wochen nach dem Absetzen verschwunden; Einzelfälle mit Skotomen und Linsentrübung. Sehstörungen bei früherer Clomifen-Behandlung sind eine Gegenanzeige',
      'Bei Frauen: Überstimulation der Eierstöcke, bei schwerem Verlauf mit Thromboserisiko; Mehrlingsschwangerschaften (186 von 2.369 Schwangerschaften, 7,9 Prozent, laut Fachinformation)',
      'Bei Männern stieg das Östradiol unter Behandlung deutlich; berichtet wurden Stimmungsänderungen, verschwommenes Sehen und Brustspannen (Krzastek 2019)',
      'Zuclomifen reichert sich unter Dauertherapie an (im Median 20-fach über Enclomifen, Helo 2017); welche Folgen das langfristig beim Mann hat, ist nicht untersucht',
      'Beschwerdebesserung bei Männern kaum kontrolliert geprüft: Die randomisierten Studien werteten vor allem Testosteron, LH und FSH aus; Fragebogen-Daten stammen überwiegend aus rückblickenden Auswertungen ohne Kontrollgruppe (Krzastek 2019, Anno 2026)',
      'Dopingrelevant: WADA-Liste 2026, S4.2, im Wettkampf und außerhalb verboten; namentlich in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig (z. B. Clomifen-ratiopharm 50 mg, Zulassung 27.09.1990): Auslösung des Eisprungs bei Frauen mit Sterilität infolge ausbleibender Ovulation. Zugelassene Dosis laut Fachinformation im ersten Behandlungszyklus 50 mg täglich über 5 Tage; mehr als 6 Behandlungszyklen sollen nicht durchgeführt werden. Für Männer gibt es keine Zulassung, die Anwendung bei Hypogonadismus oder Unfruchtbarkeit des Mannes ist eine nicht zugelassene Anwendung. Enclomifen, das reine trans-Isomer, ist nirgends als Arzneimittel zugelassen. WADA-Verbotsliste 2026, S4.2, im Wettkampf und außerhalb verboten; in der Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/41066380/',
    sources: [
      { title: 'Fachinformation Clomifen-ratiopharm 50 mg Tabletten (Stand August 2016)', url: 'https://www.fachinfo.de/fi/pdf/003764/clomifen-ratiopharm-r-50-mg-tabletten' },
      { title: 'Legro RS et al., N Engl J Med 2014 – Letrozol gegen Clomifen bei Unfruchtbarkeit durch PCOS, doppelblind, 750 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/25006718/' },
      { title: 'Hohl A et al., Arch Endocrinol Metab 2025 – Meta-Analyse randomisierter Studien zu Clomifen und Enclomifen bei männlichem Hypogonadismus', url: 'https://pubmed.ncbi.nlm.nih.gov/41066380/' },
      { title: 'Chua ME et al., Andrology 2013 – Meta-Analyse zu Clomifen oder Tamoxifen bei unerklärter männlicher Unfruchtbarkeit, 11 randomisierte Studien', url: 'https://pubmed.ncbi.nlm.nih.gov/23970453/' },
      { title: 'Krzastek SC et al., J Urol 2019 – Langzeitanwendung von Clomifen bei Hypogonadismus, rückblickend, 400 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/31216250/' },
      { title: 'Helo S et al., BJU Int 2017 – Enclomifen- und Zuclomifen-Spiegel bei Männern unter Clomifen-Dauertherapie, 15 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/27511863/' },
      { title: 'Anno Y et al., Int J Urol 2026 – Clomifen bei Late-Onset-Hypogonadismus, Beschwerde-Fragebogen über ein Jahr, rückblickend, 54 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/41250569/' },
      { title: 'WADA-Verbotsliste 2026, S4.2 Antiöstrogene Substanzen – amtliche Bekanntmachung im Bundesgesetzblatt II 2025 Nr. 312', url: 'https://www.recht.bund.de/bgbl/2/2025/312/regelungstext.pdf' },
      { title: 'Anti-Doping-Gesetz, Anlage – III. Hormon- und Stoffwechsel-Modulatoren, 2. Antiestrogene Stoffe', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'raloxifen',
    name: 'Raloxifen',
    altNames: 'Evista, Optruma, Raloxifenhydrochlorid',
    class: 'Selektiver Östrogenrezeptor-Modulator (SERM), verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen zur Behandlung und Vorbeugung der Osteoporose nach den Wechseljahren: weniger Wirbelbrüche, aber nicht weniger Hüftbrüche. Nebenbei sinkt das Brustkrebsrisiko, dafür steigt das Thromboserisiko. Bei Männern wird es außerhalb der Zulassung gegen Brustdrüsenwachstum genutzt – dazu gibt es nur eine rückblickende Auswertung bei Jugendlichen.',
    moa: 'Raloxifen bindet an den Östrogenrezeptor und wirkt gewebeabhängig: am Knochen östrogenartig, an Brust und Gebärmutter als Gegenspieler. Es bremst so den Knochenabbau, ohne die Gebärmutterschleimhaut anzuregen – in der MORE-Studie verursachte es weder Blutungen noch Brustschmerzen. Beim Mann stieg unter Raloxifen in einer kleinen Studie das Testosteron um 20 Prozent, gleichzeitig sank IGF-1 um 24,5 Prozent; die Autoren führen das auf die teilweise östrogenartige Wirkung zurück (Duschek 2005).',
    benefits: [
      'Wirbelbrüche: In MORE mit 7.705 Frauen mit Osteoporose sank der Anteil mit neuem Wirbelbruch über 3 Jahre von 10,1 auf 6,6 Prozent in der zugelassenen Dosis (RR 0,7); Brüche außerhalb der Wirbelsäule wurden nicht seltener (Ettinger 1999)',
      'Brustkrebs: In RUTH mit 10.101 Frauen 44 Prozent weniger invasiver Brustkrebs (HR 0,56), absolut 1,2 Fälle weniger je 1.000 Frauen und Behandlungsjahr (Barrett-Connor 2006); in STAR mit 19.747 Frauen so wirksam wie Tamoxifen, mit weniger Thromboembolien und Katarakten (Vogel 2006)',
      'Gebärmutter: anders als Tamoxifen keine Anregung der Schleimhaut; in STAR 23 gegenüber 36 Fällen von Gebärmutterkrebs, statistisch nicht signifikant (Vogel 2006)',
      'Gynäkomastie bei Jugendlichen: In einer rückblickenden Auswertung von 38 Jungen mit anhaltender Pubertätsgynäkomastie schrumpfte der Knoten unter Raloxifen bei 86 Prozent um mehr als die Hälfte, unter Tamoxifen bei 41 Prozent – nicht randomisiert (Lawrence 2004)',
      'Männer unter Hormonentzug wegen Prostatakrebs: Knochendichte der Hüfte +1,1 Prozent statt −2,6 Prozent ohne Raloxifen (offene randomisierte Studie, 48 Männer, Smith 2004)'
    ],
    risks: [
      'Venöse Thromboembolien: in MORE etwa dreimal so häufig wie unter Placebo (RR 3,1), in RUTH HR 1,44 – absolut 1,2 zusätzliche Fälle je 1.000 Frauen und Jahr',
      'Tödliche Schlaganfälle in RUTH häufiger (59 gegenüber 39, HR 1,49), Schlaganfälle insgesamt nicht (Barrett-Connor 2006)',
      'Kein Schutz vor Herzinfarkt: koronare Ereignisse in RUTH unverändert (HR 0,95)',
      'Häufigste Nebenwirkungen laut EMA: Hitzewallungen und grippeähnliche Beschwerden; Gegenanzeigen unter anderem frühere oder bestehende Thrombosen und Lungenembolien, Lebererkrankung, schwere Nierenerkrankung, ungeklärte Gebärmutterblutungen',
      'Beim Mann sank IGF-1 um 24,5 Prozent (30 ältere Männer, 3 Monate, Duschek 2005); Langzeitdaten zu Männern fehlen',
      'Dopingrelevant: WADA-Liste 2026, S4.2, im Wettkampf und außerhalb verboten; namentlich in der Anlage des Anti-Doping-Gesetzes'
    ],
    status: 'In der EU zentral zugelassen (Evista, seit 05.08.1998) und verschreibungspflichtig: Behandlung und Vorbeugung der Osteoporose bei Frauen nach den Wechseljahren; zugelassene Dosis eine Tablette mit 60 mg einmal täglich, für die Langzeitanwendung vorgesehen. Laut EMA ist eine deutliche Senkung von Wirbel-, nicht aber von Hüftbrüchen belegt. Für Männer gibt es keine Zulassung; die Anwendung gegen Gynäkomastie ist eine nicht zugelassene Anwendung. WADA-Verbotsliste 2026, S4.2, im Wettkampf und außerhalb verboten; in der Anlage des Anti-Doping-Gesetzes.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/10517716/',
    sources: [
      { title: 'EMA – Evista (Raloxifen), europäischer Bewertungsbericht und Zusammenfassung', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/evista' },
      { title: 'Ettinger B et al., JAMA 1999 – MORE, Raloxifen und Wirbelbrüche, 7.705 Frauen mit Osteoporose', url: 'https://pubmed.ncbi.nlm.nih.gov/10517716/' },
      { title: 'Barrett-Connor E et al., N Engl J Med 2006 – RUTH, Raloxifen, Herz-Kreislauf-Ereignisse und Brustkrebs, 10.101 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/16837676/' },
      { title: 'Vogel VG et al., JAMA 2006 – STAR, Tamoxifen gegen Raloxifen zur Brustkrebsvorbeugung, 19.747 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/16754727/' },
      { title: 'Cuzick J et al., Lancet 2013 – Meta-Analyse der SERM-Vorbeugungsstudien, 83.399 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/23639488/' },
      { title: 'Duschek EJ et al., Maturitas 2005 – Raloxifen, Testosteron und IGF-1 bei 30 älteren Männern, randomisiert, doppelblind', url: 'https://pubmed.ncbi.nlm.nih.gov/15978972/' },
      { title: 'Lawrence SE et al., J Pediatr 2004 – Raloxifen und Tamoxifen bei Pubertätsgynäkomastie, rückblickend, 38 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/15238910/' },
      { title: 'Smith MR et al., J Clin Endocrinol Metab 2004 – Raloxifen gegen Knochenverlust unter GnRH-Agonisten, 48 Männer mit Prostatakrebs', url: 'https://pubmed.ncbi.nlm.nih.gov/15292315/' },
      { title: 'WADA-Verbotsliste 2026, S4.2 Antiöstrogene Substanzen – amtliche Bekanntmachung im Bundesgesetzblatt II 2025 Nr. 312', url: 'https://www.recht.bund.de/bgbl/2/2025/312/regelungstext.pdf' },
      { title: 'Anti-Doping-Gesetz, Anlage – III. Hormon- und Stoffwechsel-Modulatoren, 2. Antiestrogene Stoffe', url: 'https://www.gesetze-im-internet.de/antidopg/anlage.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'minoxidil',
    name: 'Minoxidil',
    altNames: 'Regaine, Alopexy, Lonolox, orales Minoxidil, LDOM',
    class: 'Kaliumkanalöffner und Vasodilatator; als Lösung oder Schaum bis 5 % rezeptfrei in der Apotheke, als Tablette verschreibungspflichtig',
    emoji: '💊',
    short: 'Als Lösung oder Schaum auf der Kopfhaut seit Jahrzehnten gegen erblich bedingten Haarausfall zugelassen und in verblindeten Studien belegt. Die Tablette ist in Deutschland nur gegen schwer behandelbaren Bluthochdruck zugelassen; gegen Haarausfall wird sie außerhalb der Zulassung verschrieben. Im bisher einzigen verblindeten Direktvergleich war sie dem Schaum nicht überlegen.',
    moa: 'Als Tablette erweitert Minoxidil über sein Stoffwechselprodukt Minoxidilsulfat die kleinen Arterien, indem es Kaliumkanäle in der Gefäßmuskulatur öffnet; der Blutdruck sinkt, Herzfrequenz und Salz-Wasser-Rückhalt steigen gegenläufig. Wie es das Haarwachstum anregt, ist trotz über 30 Jahren Anwendung nur teilweise verstanden: Im Tierversuch verkürzt es die Ruhephase der Haarfollikel, beim Menschen wahrscheinlich ebenso; zudem verlängert es vermutlich die Wachstumsphase und vergrößert die Follikel. Ob dabei dieselben Kaliumkanäle beteiligt sind, ist nicht bewiesen.',
    benefits: [
      'Auf der Kopfhaut belegt: In einer verblindeten Studie mit 393 Männern war die 5-%-Lösung nach 48 Wochen der 2-%-Lösung und Placebo bei Haarzählung und Einschätzung von Teilnehmern und Prüfärzten überlegen, mit 45 % mehr Nachwuchs als unter 2 % (Olsen 2002)',
      'Bei Frauen wirkte 5-%-Schaum einmal täglich in einer Studie mit 113 Frauen nicht schlechter als 2-%-Lösung zweimal täglich, bei weniger Juckreiz und Schuppen (Blume-Peytavi 2011)',
      'Oral in niedriger Dosis: In einer verblindeten Studie mit 90 Männern war die Tablette nach 24 Wochen der 5-%-Lösung bei der Haardichte nicht überlegen; nur in der Fotobewertung am Wirbel schnitt sie besser ab (Penha 2024)',
      'In einer Netzwerk-Meta-Analyse aus 23 Studien an Männern zeigte orales Minoxidil nach 24 Wochen den größten Zuwachs an Terminalhaaren – ein indirekter Vergleich, keine direkte Studie (Gupta 2022)',
      'Auf der Kopfhaut seit Jahrzehnten angewendet, bis 5 % ohne Rezept in der Apotheke erhältlich'
    ],
    risks: [
      'Tablette: In der Fachinformation stehen Perikarderguss (bei 3 bis 5 % der behandelten Bluthochdruck-Patienten ohne Dialyse, gelegentlich mit Tamponade), Salz- und Wasserrückhalt mit Ödemen, Reflextachykardie und Angina pectoris – erhoben bei Blutdruckdosen, für die niedrige Dosis gegen Haarausfall gibt es keine vergleichbaren kontrollierten Daten',
      'Hypertrichose: verstärkter Haarwuchs an Gesicht und Körper bei 49 % unter der Tablette in der Studie von Penha 2024 und bei 15,1 % in einer rückblickenden Auswertung von 1.404 Patienten (Vañó-Galván 2021)',
      'In derselben Auswertung Benommenheit (1,7 %), Wassereinlagerungen (1,3 %) und Herzrasen (0,9 %); keine lebensbedrohlichen Ereignisse, aber ohne Kontrollgruppe',
      'Auf der Kopfhaut: Juckreiz und Hautreizung, häufiger mit 5 % als mit 2 %; Säuglinge bekamen nach Hautkontakt mit behandelten Stellen der Eltern Hypertrichose, die sich nach Monaten zurückbildete (EMA 2024)',
      'Gegenanzeigen der Tablette unter anderem Phäochromozytom und Lungenhochdruck durch Mitralstenose; die Tablette gehört in ärztliche Hand, gegen Haarausfall ist sie eine nicht zugelassene Anwendung'
    ],
    status: 'Zur Anwendung auf der Kopfhaut bei erblich bedingtem Haarausfall bis 5 % nicht verschreibungspflichtig (Ausnahme in der Arzneimittelverschreibungsverordnung), als Arzneimittel aber apothekenpflichtig. Tabletten (Lonolox) verschreibungspflichtig und nur bei therapieresistentem Bluthochdruck zugelassen; gegen Haarausfall eine nicht zugelassene Anwendung. Seit 2024 Warnhinweis zu Hypertrichose bei Säuglingen nach Hautkontakt (EU-weites PSUR-Verfahren).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/38598226/',
    sources: [
      { title: 'Olsen EA et al., J Am Acad Dermatol 2002 – 5 % gegen 2 % Minoxidil-Lösung und Placebo, 393 Männer, 48 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/12196747/' },
      { title: 'Blume-Peytavi U et al., J Am Acad Dermatol 2011 – 5-%-Schaum gegen 2-%-Lösung bei 113 Frauen', url: 'https://pubmed.ncbi.nlm.nih.gov/21700360/' },
      { title: 'Penha MA et al., JAMA Dermatol 2024 – orales gegen topisches Minoxidil, randomisierte Studie mit 90 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/38598226/' },
      { title: 'Gupta AK et al., JAMA Dermatol 2022 – Netzwerk-Meta-Analyse Minoxidil, Finasterid und Dutasterid bei Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/35107565/' },
      { title: 'Vañó-Galván S et al., J Am Acad Dermatol 2021 – Sicherheit von niedrig dosiertem oralem Minoxidil, 1.404 Patienten, retrospektiv', url: 'https://pubmed.ncbi.nlm.nih.gov/33639244/' },
      { title: 'Messenger AG, Rundegren J, Br J Dermatol 2004 – Wirkmechanismen von Minoxidil am Haar', url: 'https://pubmed.ncbi.nlm.nih.gov/14996087/' },
      { title: 'Fachinformation Lonolox (Minoxidil-Tabletten, Stand November 2023)', url: 'https://www.fachinfo.de/fi/pdf/001272' },
      { title: 'EMA/CMDh 2024 – Minoxidil zur Anwendung auf der Haut: Hypertrichose bei Säuglingen nach Hautkontakt (PSUSA/00002067/202310)', url: 'https://www.ema.europa.eu/en/documents/psusa/minoxidil-topical-formulation-cmdh-scientific-conclusions-grounds-variation-amendments-product-information-timetable-implementation-psusa-00002067-202310_en.pdf' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 – Minoxidil, ausgenommen zur topischen Anwendung bei androgenetischer Alopezie bis 5 %', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Arzneimittelgesetz § 43 – Apothekenpflicht', url: 'https://www.gesetze-im-internet.de/amg_1976/__43.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'dutasterid',
    name: 'Dutasterid',
    altNames: 'Avodart, Zagallo, Dutasteride',
    class: '5-alpha-Reduktase-Hemmer (Typ I und II), verschreibungspflichtig',
    emoji: '💊',
    short: 'In Deutschland gegen die gutartige Prostatavergrößerung zugelassen, gegen Haarausfall eine nicht zugelassene Anwendung – in Japan und Südkorea dafür zugelassen. In verblindeten Studien über 24 Wochen wuchs mehr Haar als unter Finasterid. Daneben stehen eine Halbwertszeit von Wochen und dieselben Warnhinweise wie bei Finasterid.',
    moa: 'Hemmt beide Formen der 5-alpha-Reduktase (Typ I und Typ II) und senkt damit die Umwandlung von Testosteron zu Dihydrotestosteron (DHT) stärker als Finasterid, das nur Typ II hemmt. Bei Männern mit Prostatavergrößerung sank das DHT im Blut unter der zugelassenen Dosis nach einem Jahr im Median um 94 %. DHT ist das Hormon, das bei erblich bedingtem Haarausfall die Follikel verkleinert. Die Halbwertszeit liegt bei 3 bis 5 Wochen.',
    benefits: [
      'In einer verblindeten Studie mit 917 Männern zwischen 20 und 50 steigerte die zugelassene Prostata-Dosis nach 24 Wochen Haarzahl und Haardicke stärker als Finasterid 1 mg und Placebo, bei ähnlicher Nebenwirkungsrate (Gubelin Harcha 2014)',
      'Dosisabhängiger Effekt auf die Haarzahl in einer verblindeten Studie mit 416 Männern; Kopfhaut- und Blut-DHT sanken mit steigender Dosis (Olsen 2006)',
      'In einer koreanischen Phase-III-Studie mit 153 Männern 12,2 Haare pro Quadratzentimeter mehr nach sechs Monaten, unter Placebo 4,7 (Eun 2010)',
      'In einer Netzwerk-Meta-Analyse aus 23 Studien der größte Zuwachs der Gesamthaarzahl nach 24 Wochen, 7,1 Haare pro Quadratzentimeter mehr als unter Finasterid 1 mg (Gupta 2022)',
      'Gegen Haarausfall bei Männern in Südkorea und seit 2015 in Japan zugelassen; gegen Prostatavergrößerung in über 100 Ländern'
    ],
    risks: [
      'Sexuelle Nebenwirkungen: In einer Studie mit 117 Männern mit Haarausfall traten Erektionsstörungen, Libidoverlust und Ejakulationsstörungen unter Dutasterid bei 16 % auf, unter Placebo bei 8 %; sie bildeten sich zurück (Tsai 2018)',
      'Stimmung: Seit 2025 nennt die Produktinformation depressive Verstimmung und Suizidgedanken, die unter Finasterid berichtet wurden; ein Zusammenhang mit Dutasterid ließ sich in der europäischen Prüfung nicht belegen, der Hinweis gilt vorsorglich',
      'Prostatakrebs: In der REDUCE-Studie insgesamt weniger Prostatakrebs, aber mehr hochgradige Tumoren (Gleason 8 bis 10: 12 gegen 1 in den Jahren 3 und 4); der PSA-Wert halbiert sich unter der Behandlung und muss neu bewertet werden',
      'Gegenanzeige bei Frauen, Kindern und Jugendlichen; undichte Kapseln dürfen sie nicht berühren, bei schwangerer Partnerin wird ein Kondom empfohlen, weil männliche Föten geschädigt werden können',
      'Lange Halbwertszeit von 3 bis 5 Wochen; Spermienzahl, Ejakulatvolumen und Beweglichkeit sanken in einer Studie an 27 gesunden Männern nach einem Jahr um 23, 26 und 18 % (Fachinformation)',
      'Die Studien zum Haar liefen meist nur 24 Wochen; Daten zur jahrelangen Anwendung stammen von älteren Männern mit Prostatavergrößerung'
    ],
    status: 'In Deutschland zugelassen und verschreibungspflichtig (Avodart 0,5 mg) bei mäßigen bis schweren Beschwerden durch gutartige Prostatavergrößerung. Gegen Haarausfall in Deutschland eine nicht zugelassene Anwendung; zugelassen dafür in Japan (Zagallo, 2015) und Südkorea. Rote-Hand-Brief zu Finasterid und Dutasterid vom 15.09.2025.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/24411083/',
    sources: [
      { title: 'Gubelin Harcha W et al., J Am Acad Dermatol 2014 – Dutasterid gegen Finasterid und Placebo bei Haarausfall, 917 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/24411083/' },
      { title: 'Olsen EA et al., J Am Acad Dermatol 2006 – Dutasterid in mehreren Dosen gegen Finasterid und Placebo, 416 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/17110217/' },
      { title: 'Eun HC et al., J Am Acad Dermatol 2010 – Phase-III-Studie Dutasterid gegen Placebo, 153 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/20605255/' },
      { title: 'Gupta AK et al., JAMA Dermatol 2022 – Netzwerk-Meta-Analyse Minoxidil, Finasterid und Dutasterid bei Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/35107565/' },
      { title: 'Tsai TF et al., J Dermatol 2018 – sexuelle Funktion unter Dutasterid bei Haarausfall, 117 Männer', url: 'https://pubmed.ncbi.nlm.nih.gov/29667763/' },
      { title: 'Andriole GL et al., N Engl J Med 2010 – REDUCE-Studie, Dutasterid und Prostatakrebsrisiko', url: 'https://pubmed.ncbi.nlm.nih.gov/20357281/' },
      { title: 'Fachinformation Avodart 0,5 mg Weichkapseln (Stand September 2025)', url: 'https://www.fachinfo.de/fi/pdf/001806/avodart-0-5-mg-weichkapseln' },
      { title: 'PMDA/MHLW 2015 – Zulassungsbericht Zagallo (Dutasterid) bei androgenetischer Alopezie des Mannes, Japan', url: 'https://www.pmda.go.jp/files/000245812.pdf' },
      { title: 'EMA, Überprüfung finasterid- und dutasteridhaltiger Arzneimittel 2025 – Suizidgedanken', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/finasteride-dutasteride-containing-medicinal-products' },
      { title: 'BfArM, Rote-Hand-Brief zu Finasterid und Dutasterid vom 15.09.2025 – Suizidgedanken', url: 'https://www.bfarm.de/SharedDocs/Risikoinformationen/Pharmakovigilanz/DE/RHB/2025/rhb-finasterid.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'tretinoin',
    name: 'Tretinoin',
    altNames: 'Retinsäure, all-trans-Retinsäure, Vitamin-A-Säure, Cordes VAS, Renova, Retin-A',
    class: 'Retinoid zur Anwendung auf der Haut, verschreibungspflichtig',
    emoji: '🧴',
    short: 'In Deutschland als Creme gegen Akne zugelassen und verschreibungspflichtig. Gegen lichtbedingte Hautalterung ist es eines der wenigen Anti-Aging-Mittel mit verblindeten Studien bis zwei Jahre – der Effekt betrifft vor allem feine Fältchen und ist kleiner, als „Verjüngung“ klingt. In der Schwangerschaft ist es kontraindiziert.',
    moa: 'Tretinoin ist die Säureform von Vitamin A und wirkt über Retinsäure-Rezeptoren im Zellkern auf die Genablesung in der Haut. Bei Akne normalisiert es die Verhornung im Haarfollikel. Bei lichtgeschädigter Haut verdickt sich die Oberhaut, die Hornschicht wird kompakter, und in der Lederhaut steigt ein Marker der Kollagenneubildung. Die Wirkkette ist am Menschen gut beschrieben, auch in Gewebeproben.',
    benefits: [
      'Akne: In einer Netzwerk-Meta-Analyse aus 221 randomisierten Studien mit über 65.000 Teilnehmern wirkten topische Retinoide auf entzündliche Läsionen vergleichbar mit Antibiotika; am stärksten waren Kombinationen mit einem topischen Retinoid (Huang 2023)',
      'Lichtalterung: In der ersten verblindeten Studie besserten sich alle 30 behandelten Unterarme; im Gesicht 14 von 15 Teilnehmern unter Tretinoin, keiner unter der wirkstofffreien Creme (Weiss 1988)',
      'In einer Studie mit 296 Teilnehmern besserte sich die Lichtalterung nach 24 Wochen unter 0,05-%-Creme bei 68 %, unter der wirkstofffreien Creme bei 43 %; niedrigere Konzentrationen unterschieden sich nicht signifikant (Olsen 1992)',
      'Über zwei Jahre mit 204 Teilnehmern: mehr Besserung bei Fältchen, Pigmentflecken und fahler Haut als unter Placebo, ein Marker der Kollagenneubildung stieg, keine Zunahme auffälliger Zellveränderungen (Kang 2005)',
      'In den USA ist eine 0,02-%-Creme ausdrücklich zur Milderung feiner Gesichtsfältchen zugelassen'
    ],
    risks: [
      'Kontraindiziert in der Schwangerschaft und bei Frauen, die eine Schwangerschaft planen – vorsorglich, obwohl die Aufnahme über die Haut gering ist (EMA 2018)',
      'Häufig Rötung, Schuppung, Brennen, Stechen, Trockenheit und Juckreiz, vor allem am Anfang; zu Beginn kann sich die Akne vorübergehend verschlechtern',
      'Erhöhte Lichtempfindlichkeit; in Mausversuchen verstärkte Tretinoin möglicherweise die tumorauslösende Wirkung von UV-Strahlung, für den Menschen ist das nicht untersucht',
      'Laut US-Zulassung beseitigt es keine Falten, repariert keine Lichtschäden und kehrt Hautalterung nicht um; auf tiefe Falten, Schlaffheit und Altersflecken ist kein Effekt belegt',
      'Gegen Hautalterung ist es in Deutschland nicht zugelassen; die Anwendung dafür ist eine nicht zugelassene Anwendung und gehört in ärztliche Hand'
    ],
    status: 'In Deutschland verschreibungspflichtig (Arzneimittelverschreibungsverordnung) und als Creme gegen Akne vulgaris zugelassen (z. B. Cordes VAS 0,05 %); gegen Hautalterung nicht zugelassen. In den USA ist Tretinoin-Creme 0,02 % (Renova) als Zusatzmaßnahme gegen feine Gesichtsfältchen zugelassen. EU-Prüfverfahren 2018: topische Retinoide in der Schwangerschaft kontraindiziert.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/16060712/',
    sources: [
      { title: 'Weiss JS et al., JAMA 1988 – Tretinoin bessert lichtgealterte Haut, doppelblinde Studie', url: 'https://pubmed.ncbi.nlm.nih.gov/3336176/' },
      { title: 'Olsen EA et al., J Am Acad Dermatol 1992 – Tretinoin-Creme in drei Konzentrationen gegen Vehikel, 296 Teilnehmer, 24 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/1552056/' },
      { title: 'Kang S et al., Am J Clin Dermatol 2005 – Tretinoin 0,05 % gegen Placebo über zwei Jahre, 204 Teilnehmer', url: 'https://pubmed.ncbi.nlm.nih.gov/16060712/' },
      { title: 'Huang CY et al., Ann Fam Med 2023 – Netzwerk-Meta-Analyse von 221 randomisierten Studien zur Aknebehandlung', url: 'https://pubmed.ncbi.nlm.nih.gov/37487721/' },
      { title: 'Fachinformation Cordes VAS 0,5 mg/g Creme (Tretinoin, Stand Juli 2024)', url: 'https://www.fachinfo.de/fi/pdf/005779/cordes-r-vas' },
      { title: 'US-Fachinformation Renova (Tretinoin-Creme 0,02 %), DailyMed', url: 'https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=9f0a0e8d-1051-48a4-80c5-1bd260dd9c36&type=pdf' },
      { title: 'EMA, Überprüfung retinoidhaltiger Arzneimittel 2018 – Schwangerschaftsverhütung und topische Retinoide', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/retinoid-containing-medicinal-products' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 – Tretinoin', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' }
    ],
    community: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'isotretinoin',
    name: 'Isotretinoin',
    altNames: 'Accutane, Roaccutan, Aknenormin, 13-cis-Retinsäure, orales Isotretinoin',
    class: 'Retinoid (Vitamin-A-Säure) zum Einnehmen, verschreibungspflichtig',
    emoji: '💊',
    short: 'Zugelassen gegen schwere Akne, die auf Antibiotika und äußerliche Mittel nicht anspricht, und seit den 1980er-Jahren im Einsatz. Die Wirkung ist dosisabhängig gezeigt, die Studienqualität laut Cochrane aber überwiegend niedrig. Isotretinoin ist stark fruchtschädigend, deshalb gilt ein Schwangerschaftsverhütungsprogramm. Sexuelle Funktionsstörungen stehen seit 2017 in der EU-Produktinformation; einen ursächlichen Zusammenhang mit psychischen Störungen konnte die EMA nicht belegen.',
    moa: 'Isotretinoin ist eine Form der Vitamin-A-Säure (13-cis-Retinsäure) und wird als Kapsel eingenommen. Laut Cochrane-Übersicht ist es das einzige Aknemittel, das an allen Hauptursachen der Akne ansetzt. Retinoide greifen zugleich in die Entwicklung des Embryos ein: Die Fehlbildungen nach Isotretinoin betreffen typischerweise Gesicht, Herz, Thymus und Nervensystem und ähneln denen aus Tierversuchen; als möglicher Mechanismus gilt eine Störung der Neuralleistenzellen (Lammer 1985). Wie psychische und sexuelle Nebenwirkungen entstehen, ist nicht geklärt; für die sexuellen nennt der Sicherheitsausschuss der EMA einen Abfall des Testosterons im Blut als möglichen Mechanismus.',
    benefits: [
      'Zugelassen bei schweren Formen der Akne (knotig, konglobiert oder mit Narbenrisiko), die auf Antibiotika zum Einnehmen und äußerliche Behandlung nicht ansprechen (harmonisierte EU-Fachinformation 2003)',
      'Dosisabhängige Wirkung bei schwerer Akne: Eine Abnahme der entzündlichen Läsionen um 95 Prozent erreichten nach 20 Wochen 58, 80 und 90 Prozent unter 0,1, 0,5 und 1 mg/kg täglich (RCT mit 150 Teilnehmenden, ausgewertet in Costa 2018)',
      'Gegenüber Antibiotika plus äußerlicher Behandlung ärztliche Gesamtbeurteilung möglicherweise um 15 Prozent besser, RR 1,15 (2 Studien, 351 Teilnehmende), bei niedriger Evidenzqualität (Cochrane, Costa 2018)',
      'Niedrigere Tagesdosis bei mittelschwerer Akne: 0,25–0,4 mg/kg ähnlich wirksam wie 0,5–0,7 mg/kg, mit weniger Nebenwirkungen; Rückfall nach einem Jahr bei 3 von 17 gegenüber 2 von 16 Patienten (RCT, 60 Patienten, Lee 2011)',
      'Auf Bevölkerungsebene kein erhöhtes Risiko psychischer Erkrankungen, RR 1,08 (0,99 bis 1,19), in einer Meta-Analyse über 25 Studien mit 1.625.891 Teilnehmenden (Tan 2024)'
    ],
    risks: [
      'Stark fruchtschädigend: Von 154 dokumentierten Schwangerschaften unter Isotretinoin endeten 21 mit fehlgebildeten Kindern und 12 mit Fehlgeburten; relatives Risiko für ausgewählte schwere Fehlbildungen 25,6 (Lammer 1985)',
      'Schwangerschaftsverhütungsprogramm: Schwangerschaftstests vor, während und nach der Behandlung, mindestens eine wirksame Verhütungsmethode und ein Bestätigungsformular (EMA 2018)',
      'Psychische Veränderungen: Depression, psychotische Symptome und selten Suizidversuche und Suizide wurden berichtet; die EMA konnte 2018 keinen ursächlichen Zusammenhang belegen, verlangt aber Aufklärung und Beobachtung',
      'Sexuelle Funktionsstörungen einschließlich Erektionsstörungen und verminderter Libido stehen seit 2017 in der EU-Produktinformation (PRAC/CMDh)',
      'Häufige, meist leichte Nebenwirkungen wie trockene Haut und Lippen, Lippenentzündung und Übelkeit; gegenüber Antibiotika 67 Prozent häufiger, RR 1,67 (Costa 2018)',
      'Niedrige Dauerdosis bei leichter bis mittelschwerer Akne ist nicht zugelassen; eine anhaltende Remission ist laut Meta-Analyse unter konventioneller Dosis wahrscheinlicher (Al Muqarrab 2022, niedrige Evidenzqualität)'
    ],
    status: 'Als Arzneimittel zum Einnehmen zugelassen und in Deutschland verschreibungspflichtig (Anlage 1 AMVV). Anwendungsgebiet laut harmonisierter EU-Fachinformation: schwere Akne, die auf Antibiotika zum Einnehmen und äußerliche Behandlung nicht anspricht. Zugelassene Dosierung: Beginn mit 0,5 mg pro kg Körpergewicht täglich, Bereich 0,5 bis 1,0 mg/kg; eine Behandlung dauert meist 16 bis 24 Wochen, als Gesamtdosis gelten 120 bis 150 mg/kg. Für Frauen im gebärfähigen Alter gilt ein Schwangerschaftsverhütungsprogramm mit Verhütung ab einem Monat vor bis einen Monat nach der Behandlung, 2018 von der EMA aktualisiert. Die Anwendung in niedriger Dauerdosis bei leichter bis mittelschwerer Akne ist nicht zugelassen. In Großbritannien müssen seit Oktober 2023 bei unter 18-Jährigen zwei unabhängige Verordner zustimmen.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/30484286/',
    sources: [
      { title: 'Costa CS et al., Cochrane Database Syst Rev 2018 – Isotretinoin zum Einnehmen bei Akne, 31 RCTs mit 3.836 Teilnehmenden', url: 'https://pubmed.ncbi.nlm.nih.gov/30484286/' },
      { title: 'Lee JW et al., Br J Dermatol 2011 – konventionelle, niedrige und intermittierende Dosis im Vergleich, RCT mit 60 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/21114478/' },
      { title: 'Al Muqarrab F, Almohssen A, Dermatol Ther 2022 – Meta-Analyse niedrig dosiertes Isotretinoin bei leichter bis mittelschwerer Akne', url: 'https://pubmed.ncbi.nlm.nih.gov/35000295/' },
      { title: 'Tan NKW et al., JAMA Dermatol 2024 – Meta-Analyse zu Suizid und psychischen Erkrankungen, 25 Studien mit 1.625.891 Teilnehmenden', url: 'https://pubmed.ncbi.nlm.nih.gov/38019562/' },
      { title: 'Lammer EJ et al., N Engl J Med 1985 – Retinsäure-Embryopathie, 154 Schwangerschaften unter Isotretinoin', url: 'https://pubmed.ncbi.nlm.nih.gov/3162101/' },
      { title: 'EMA – Überprüfung retinoidhaltiger Arzneimittel 2018: Schwangerschaftsverhütungsprogramm und Warnhinweis zu psychischen Störungen', url: 'https://www.ema.europa.eu/en/medicines/human/referrals/retinoid-containing-medicinal-products' },
      { title: 'EMA/CPMP – Isotretinoin, Schiedsverfahren nach Artikel 29, harmonisierte Fachinformation 2003', url: 'https://www.ema.europa.eu/en/documents/referral/isotretinoin-article-29-referral-annex-i-ii-iii_en.pdf' },
      { title: 'EMA/CMDh – Isotretinoin zum Einnehmen, PSUSA-Bewertung 2017: sexuelle Funktionsstörungen als Nebenwirkung', url: 'https://www.ema.europa.eu/en/documents/psusa/isotretinoin-oral-formulations-cmdh-scientific-conclusions-and-grounds-variation-amendments-product-information-and-timetable-implementation-psusa00010488201611_en.pdf' },
      { title: 'MHRA, 31.10.2023 – Isotretinoin: zwei Verordner bei unter 18-Jährigen, Abfrage von psychischer Gesundheit und Sexualfunktion', url: 'https://www.gov.uk/government/news/treatment-with-isotretinoin-for-patients-under-18-must-be-approved-by-two-prescribers-under-new-mhra-rules' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 (verschreibungspflichtige Stoffe)', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'orlistat',
    name: 'Orlistat (Xenical / alli)',
    altNames: 'Xenical, alli, Orlistat 60 mg, Orlistat 120 mg, Lipasehemmer',
    class: 'Lipasehemmer zum Einnehmen, 120 mg verschreibungspflichtig, 60 mg rezeptfrei',
    emoji: '💊',
    short: 'Hemmt die Fettverdauung im Darm: Etwa 30 Prozent des Nahrungsfetts werden unverdaut ausgeschieden. Seit 1998 in der EU zum Abnehmen zugelassen, mit 120 mg verschreibungspflichtig, mit 60 mg rezeptfrei. Der Effekt ist belegt und klein, 2,6 bis 2,9 kg mehr als unter Placebo nach einem Jahr; über vier Jahre gab es bei gestörter Glukosetoleranz weniger neue Diabetesfälle.',
    moa: 'Orlistat hemmt die fettspaltenden Enzyme (Lipasen) in Magen und Darm. Dadurch werden etwa 30 Prozent des Fetts einer Mahlzeit nicht verdaut und unverändert ausgeschieden (EMA). Der Wirkstoff wird kaum ins Blut aufgenommen und setzt im Verdauungstrakt an, nicht am Appetit; GLP-1-Rezeptor-Agonisten wie Semaglutid oder Liraglutid wirken dagegen über Sättigung und Magenentleerung. Aus dem Wirkprinzip folgen die typischen Nebenwirkungen, fettige Stühle und Stuhldrang, und eine möglicherweise schlechtere Aufnahme der fettlöslichen Vitamine A, D, E und K.',
    benefits: [
      'Gewicht nach einem Jahr: 2,9 kg mehr Gewichtsverlust als unter Placebo (Meta-Analyse, 16 Studien, 10.631 Teilnehmende, Rucker 2007); 2,6 kg in einer Netzwerk-Meta-Analyse, mindestens 5 Prozent verloren 44 gegenüber 23 Prozent unter Placebo (Khera 2016)',
      'Diabetes-Vorbeugung: nach 4 Jahren 6,2 gegenüber 9,0 Prozent neue Typ-2-Diabetes-Fälle, relative Senkung 37,3 Prozent; der Effekt zeigte sich nur bei gestörter Glukosetoleranz (XENDOS, 3.305 Teilnehmende, Torgerson 2004)',
      'Gewicht nach 4 Jahren 5,8 gegenüber 3,0 kg (XENDOS)',
      'Rezeptfreie 60-mg-Dosis: 3,05 gegenüber 1,90 kg nach 16 Wochen, dazu leicht gesenktes Gesamt- und LDL-Cholesterin (RCT, 391 Übergewichtige, Anderson 2006)',
      'Seit 1998 in der EU zugelassen; laut EMA bis 2012 von über 53 Millionen Menschen weltweit angewendet'
    ],
    risks: [
      'Magen-Darm-Nebenwirkungen häufig: öliger Ausfluss, Bauchbeschwerden, Stuhldrang, Fettstühle, Blähungen, vor allem zu Beginn (EMA)',
      'Kleiner Effekt: In einer Netzwerk-Meta-Analyse schnitt Orlistat unter fünf Abnehmwirkstoffen am schwächsten ab, Liraglutid erreichte 5,3 kg gegenüber 2,6 kg (Khera 2016)',
      'Viele Abbrüche: In den Langzeitstudien schieden 30 bis 40 Prozent aus (Rucker 2007), in XENDOS beendeten 52 Prozent unter Orlistat die vier Jahre',
      'Fettlösliche Vitamine A, D, E und K werden möglicherweise schlechter aufgenommen; die Fachinformation von alli sieht deshalb ein Multivitaminpräparat zur Nacht vor',
      'Gegenanzeigen unter anderem Ciclosporin, Warfarin und andere Gerinnungshemmer zum Einnehmen, chronische Malabsorption, Cholestase, Schwangerschaft und Stillzeit; Vorsicht bei Levothyroxin, Antiepileptika, Amiodaron und bei der Pille, wenn starker Durchfall auftritt (alli)',
      'Leber: Die EMA prüfte 2012 einzelne schwere Fälle und fand keinen guten Beleg für einen ursächlichen Zusammenhang; seither wird in der Produktinformation auf sehr seltene Lebernebenwirkungen hingewiesen'
    ],
    status: 'In der EU zugelassen: Xenical (120 mg) seit 29.07.1998, verschreibungspflichtig, für Erwachsene mit einem BMI ab 30 oder über 28 mit Risikofaktoren, zusammen mit einer leicht kalorienreduzierten Kost; zugelassene Dosis 120 mg zu jeder Hauptmahlzeit, Abbruch nach 12 Wochen, wenn nicht mindestens 5 Prozent abgenommen wurden. alli (60 mg) seit 22.07.2007 ohne Rezept, für Erwachsene mit einem BMI ab 28; zugelassene Dosis 60 mg dreimal täglich, höchstens drei Kapseln in 24 Stunden und höchstens sechs Monate. In Deutschland ist Orlistat verschreibungspflichtig, ausgenommen Präparate mit höchstens 60 mg je Einheit und höchstens 180 mg pro Tag (Anlage 1 AMVV). Zum Abnehmen keine Kassenleistung (§ 34 SGB V).',
    link: 'https://pubmed.ncbi.nlm.nih.gov/14693982/',
    sources: [
      { title: 'Torgerson JS et al., Diabetes Care 2004 – XENDOS, Orlistat zur Diabetes-Vorbeugung, RCT mit 3.305 Teilnehmenden über 4 Jahre', url: 'https://pubmed.ncbi.nlm.nih.gov/14693982/' },
      { title: 'Rucker D et al., BMJ 2007 – Meta-Analyse zur Langzeit-Pharmakotherapie bei Adipositas, 16 Orlistat-Studien mit 10.631 Teilnehmenden', url: 'https://pubmed.ncbi.nlm.nih.gov/18006966/' },
      { title: 'Khera R et al., JAMA 2016 – Netzwerk-Meta-Analyse von fünf Abnehmwirkstoffen, 28 RCTs mit 29.018 Teilnehmenden', url: 'https://pubmed.ncbi.nlm.nih.gov/27299618/' },
      { title: 'Anderson JW et al., Ann Pharmacother 2006 – Orlistat 60 mg, RCT mit 391 Übergewichtigen über 16 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/16940406/' },
      { title: 'EMA – Xenical, europäischer Bewertungsbericht (EPAR)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/xenical' },
      { title: 'EMA – alli, europäischer Bewertungsbericht (EPAR)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/alli' },
      { title: 'EMA – alli, Produktinformation (Fachinformation)', url: 'https://www.ema.europa.eu/en/documents/product-information/alli-epar-product-information_en.pdf' },
      { title: 'EMA, 16.02.2012 – positives Nutzen-Risiko-Verhältnis orlistathaltiger Arzneimittel nach Prüfung von Leberschäden bestätigt', url: 'https://www.ema.europa.eu/en/news/european-medicines-agency-confirms-positive-benefit-risk-balance-orlistat-containing-medicines' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 (verschreibungspflichtige Stoffe)', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' },
      { title: 'Sozialgesetzbuch V, § 34 – von der Versorgung ausgeschlossene Arzneimittel', url: 'https://www.gesetze-im-internet.de/sgb_5/__34.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Stoffwechsel'
  },
  {
    id: 'vardenafil',
    name: 'Vardenafil (Levitra)',
    altNames: 'Levitra, Levitra Schmelztablette, PDE5-Hemmer',
    class: 'Phosphodiesterase-5-Hemmer (PDE5-Hemmer), verschreibungspflichtiges Arzneimittel',
    emoji: '💊',
    short: 'Der dritte PDE5-Hemmer in der EU, seit 2003 als Levitra gegen Erektionsstörungen zugelassen. Er wirkt wie Sildenafil und Tadalafil über das Enzym PDE5 und ähnlich kurz wie Sildenafil. Die Wirkung ist in zahlreichen RCTs belegt, auch bei Diabetes. Im großen Netzwerkvergleich war Vardenafil 10 mg weniger wirksam als Sildenafil 50 mg, bei ähnlich vielen Nebenwirkungen.',
    moa: 'Vardenafil hemmt wie Sildenafil und Tadalafil das Enzym Phosphodiesterase-5 (PDE5), das den Botenstoff cGMP abbaut. Bei sexueller Erregung setzen Nervenenden Stickstoffmonoxid frei, das die cGMP-Bildung anstößt; cGMP entspannt die glatte Muskulatur der Gefäße im Schwellkörper. Vardenafil verstärkt dieses Signal, ohne sexuelle Stimulation wirkt es nicht. Laut Fachinformation hemmt es PDE5 mehr als 15-fach stärker als PDE6, das in der Netzhaut vorkommt, und mehr als 300-fach stärker als PDE11. Die Halbwertszeit liegt bei etwa 4 bis 5 Stunden, also im Bereich von Sildenafil; Tadalafil wirkt deutlich länger.',
    benefits: [
      'Meta-Analyse über 14 RCTs mit 3.221 Patienten: Erektionsfunktion (IIEF-EF) 7,93 Punkte besser als unter Placebo, Anteil gelungener Penetrationen 26 und gelungener Geschlechtsverkehre 35 Prozentpunkte höher (Wang 2021)',
      'Diabetes: verbesserte Erektionen bei 57 Prozent (10 mg) und 72 Prozent (20 mg) gegenüber 13 Prozent unter Placebo nach 12 Wochen (RCT, 452 Männer mit Diabetes, Goldstein 2003)',
      'Nach erfolglosem Sildenafil: verbesserte Erektionen bei 61,8 gegenüber 14,7 Prozent; der Anteil gelungener Geschlechtsverkehre stieg unter Vardenafil von 10,5 auf 46,1 Prozent (RCT, 463 Männer, Carson 2004)',
      'Seit 06.03.2003 in der EU zugelassen, als Filmtablette und als Schmelztablette'
    ],
    risks: [
      'Gegenanzeige mit Nitraten und Stickstoffmonoxid-Donatoren sowie mit Riociguat – Gefahr eines starken Blutdruckabfalls',
      'Gegenanzeige mit starken CYP3A4-Hemmern wie Ketoconazol, Itraconazol, Ritonavir oder Indinavir; Ritonavir verlängerte die Halbwertszeit auf 25,7 Stunden (Fachinformation)',
      'QT-Zeit: Einzeldosen von 10 und 80 mg verlängerten das QTc-Intervall im Mittel um 8 und 10 Millisekunden; klinische Bedeutung unklar, bei Risikofaktoren wie angeborenem langem QT oder niedrigem Kalium besser vermeiden (Fachinformation)',
      'Häufige Nebenwirkungen: Kopfschmerz, Gesichtsröte, Verdauungsbeschwerden, Schnupfen; in der Netzwerk-Meta-Analyse ähnlich viele Nebenwirkungen wie unter Sildenafil 50 mg bei geringerer Wirksamkeit (Chen 2015)',
      'Selten: plötzlicher Sehverlust durch nicht-arteriitische anteriore ischämische Optikusneuropathie (NAION); Gegenanzeige, wenn ein Auge durch NAION bereits Sehkraft verloren hat',
      'Vorsicht mit Alphablockern; Grapefruit erhöht die Wirkstoffspiegel'
    ],
    status: 'In der EU seit 06.03.2003 als Levitra zugelassen, in Deutschland verschreibungspflichtig (Anlage 1 AMVV). Anwendungsgebiet: erektile Dysfunktion bei erwachsenen Männern. Zugelassene Dosierung laut Fachinformation: 10 mg bei Bedarf etwa 25 bis 60 Minuten vor dem Geschlechtsverkehr, je nach Wirkung und Verträglichkeit 5 oder höchstens 20 mg, höchstens einmal täglich. Anders als Sildenafil und Tadalafil ist Vardenafil nicht für Lungenhochdruck zugelassen, anders als Tadalafil auch nicht für Beschwerden der gutartigen Prostatavergrößerung.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/33432539/',
    sources: [
      { title: 'Wang H et al., Adv Ther 2021 – Meta-Analyse zu Vardenafil bei erektiler Dysfunktion, 14 Studien mit 3.221 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/33432539/' },
      { title: 'Chen L et al., Eur Urol 2015 – Netzwerk-Meta-Analyse der PDE5-Hemmer, 82 Studien mit 47.626 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/25817916/' },
      { title: 'Goldstein I et al., Diabetes Care 2003 – Vardenafil bei Männern mit Diabetes, RCT mit 452 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/12610037/' },
      { title: 'Carson CC et al., BJU Int 2004 – Vardenafil nach erfolglosem Sildenafil, RCT mit 463 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/15610110/' },
      { title: 'EMA – Levitra, europäischer Bewertungsbericht (EPAR)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/levitra' },
      { title: 'EMA – Levitra, Produktinformation (Fachinformation)', url: 'https://www.ema.europa.eu/en/documents/product-information/levitra-epar-product-information_en.pdf' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 (verschreibungspflichtige Stoffe)', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' }
    ],
    community: [],
    podcasts: [],
    filterCat: 'Sonstige'
  },
  {
    id: 'avanafil',
    name: 'Avanafil (Spedra)',
    altNames: 'Spedra, Stendra, PDE5-Hemmer',
    class: 'Phosphodiesterase-5-Hemmer (PDE5-Hemmer), verschreibungspflichtiges Arzneimittel',
    emoji: '💊',
    short: 'Seit 2013 als Spedra gegen Erektionsstörungen in der EU zugelassen und damit deutlich jünger als Sildenafil, Tadalafil und Vardenafil. Herausgestellt wird der schnelle Wirkeintritt: Nach etwa 15 Minuten gelang Geschlechtsverkehr bei 25,9 bis 29,1 Prozent der Versuche, unter Placebo bei 14,9 Prozent. Im Netzwerkvergleich war Avanafil 100 mg deutlich weniger wirksam als Sildenafil 50 mg, bei ähnlich vielen Nebenwirkungen.',
    moa: 'Avanafil hemmt wie die anderen PDE5-Hemmer den Abbau des Botenstoffs cGMP und verstärkt so das Stickstoffmonoxid-Signal, das bei sexueller Erregung die Gefäßmuskulatur im Schwellkörper entspannt; ohne Stimulation wirkt es nicht. Laut Fachinformation hemmt es PDE5 mehr als 100-fach stärker als PDE6, das in der Netzhaut vorkommt. Es wird rasch aufgenommen: Die höchste Konzentration im Blut ist im Median nach 30 bis 45 Minuten erreicht, die Halbwertszeit liegt bei etwa 6 bis 17 Stunden. Eine fettreiche Mahlzeit verzögert die Aufnahme im Mittel um 1,25 Stunden.',
    benefits: [
      'Zulassungsstudie: alle drei Dosen besser als Placebo bei Erektionsfunktion und gelungenem Geschlechtsverkehr; Versuche innerhalb von 15 Minuten nach Einnahme zu 64 bis 71 Prozent erfolgreich gegenüber 27 Prozent unter Placebo (Phase 3, 646 Männer, 12 Wochen, Goldstein 2012)',
      'Wirkeintritt gezielt gemessen: erfolgreicher Geschlechtsverkehr innerhalb von etwa 15 Minuten bei 25,9 Prozent (100 mg) und 29,1 Prozent (200 mg) der Versuche gegenüber 14,9 Prozent unter Placebo (RCT, 440 Männer, Hellstrom 2015)',
      'Meta-Analyse über 8 RCTs mit 3.709 Patienten: gelungene Penetration RR 3,20, gelungener Geschlechtsverkehr RR 2,53, Erektionsfunktion (IIEF-EF) 4,57 Punkte besser als unter Placebo (Li 2019)',
      'Nach nervenschonender Prostataentfernung: alle drei Hauptendpunkte mit 100 und 200 mg erreicht, weniger als 2 Prozent Abbrüche wegen Nebenwirkungen (Phase 3, 298 Patienten, Mulhall 2013)',
      'Seit 21.06.2013 in der EU zugelassen'
    ],
    risks: [
      'Gegenanzeige mit Nitraten und Stickstoffmonoxid-Donatoren; Avanafil verstärkte die blutdrucksenkende Wirkung von Nitraten (Fachinformation)',
      'Gegenanzeige mit starken CYP3A4-Hemmern wie Ketoconazol, Ritonavir oder Clarithromycin; Ritonavir erhöhte die Wirkstoffmenge im Blut auf etwa das 13-Fache (Fachinformation)',
      'Häufigste Nebenwirkungen Kopfschmerz, Gesichtsröte und verstopfte Nase; Nebenwirkungen insgesamt häufiger als unter Placebo, RR 1,78 (Li 2019)',
      'Alkohol kann zusammen mit Avanafil Blutdruckabfall, Schwindel oder Ohnmacht begünstigen (Fachinformation)',
      'NAION (plötzlicher Sehverlust) und plötzlicher Hörverlust wurden selten unter anderen PDE5-Hemmern berichtet, in den Avanafil-Studien nicht; Gegenanzeige bei schwerer Nieren- oder Leberfunktionsstörung',
      'Kürzere Marktbeobachtung als bei Sildenafil, Tadalafil und Vardenafil'
    ],
    status: 'In der EU seit 21.06.2013 als Spedra zugelassen, in Deutschland verschreibungspflichtig (Anlage 1 AMVV). Anwendungsgebiet: erektile Dysfunktion bei erwachsenen Männern. Zugelassene Dosierung laut Fachinformation: 100 mg bei Bedarf etwa 15 bis 30 Minuten vor dem Geschlechtsverkehr, je nach Wirkung und Verträglichkeit 50 mg oder höchstens 200 mg, höchstens einmal täglich. Andere Anwendungsgebiete wie Lungenhochdruck oder Prostatabeschwerden deckt die Zulassung nicht ab.',
    link: 'https://pubmed.ncbi.nlm.nih.gov/22248153/',
    sources: [
      { title: 'Goldstein I et al., J Sex Med 2012 – Phase-3-Studie zu Avanafil, 646 Männer über 12 Wochen', url: 'https://pubmed.ncbi.nlm.nih.gov/22248153/' },
      { title: 'Hellstrom WJ et al., J Urol 2015 – Wirksamkeit 15 Minuten nach Einnahme, RCT mit 440 Männern', url: 'https://pubmed.ncbi.nlm.nih.gov/25591992/' },
      { title: 'Li J et al., Am J Mens Health 2019 – Meta-Analyse zu Avanafil, 8 RCTs mit 3.709 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/31672076/' },
      { title: 'Mulhall JP et al., J Urol 2013 – Phase-3-Studie nach nervenschonender radikaler Prostatektomie, 298 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/23219537/' },
      { title: 'Chen L et al., Eur Urol 2015 – Netzwerk-Meta-Analyse der PDE5-Hemmer, 82 Studien mit 47.626 Patienten', url: 'https://pubmed.ncbi.nlm.nih.gov/25817916/' },
      { title: 'EMA – Spedra, europäischer Bewertungsbericht (EPAR)', url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/spedra' },
      { title: 'EMA – Spedra, Produktinformation (Fachinformation)', url: 'https://www.ema.europa.eu/en/documents/product-information/spedra-epar-product-information_en.pdf' },
      { title: 'Arzneimittelverschreibungsverordnung, Anlage 1 (verschreibungspflichtige Stoffe)', url: 'https://www.gesetze-im-internet.de/amvv/anlage_1.html' }
    ],
    community: [],
    podcasts: [],
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
  'orlistat': 'Stoffwechsel',
  'trestolon': 'Exercise',
  'mesterolon': 'Exercise',
  'turinabol': 'Exercise',
  'methasteron': 'Exercise',
  'boldenon': 'Exercise',
  'drostanolon': 'Exercise',
  'metenolon': 'Exercise',
  'stanozolol': 'Exercise',
  'oxymetholon': 'Exercise',
  'methandrostenolon': 'Exercise',
  'oxandrolon': 'Exercise',
  'trenbolon': 'Exercise',
  'c60': 'Longevity',
  'nad-nasenspray': 'Longevity',
  'bempedoinsaeure': 'Stoffwechsel',
  'liraglutid': 'Stoffwechsel',
  'yk-11': 'Exercise',
  'liothyronin': 'Stoffwechsel',
  'thymulin': 'Immun',
  'lipotropin': 'Stoffwechsel',
  'lz1': 'Immun',
  'tp508': 'Immun',
  'dmg': 'Exercise',
  'gamma-butyrobetain': 'Stoffwechsel',
  'calcium-d-glucarat': 'Sonstige',
  'retatrutide': 'Stoffwechsel',
  'tesofensin': 'Stoffwechsel',
  'semaglutide': 'Stoffwechsel',
  'tirzepatide': 'Stoffwechsel',
  'cagrilintide': 'Stoffwechsel',
  'slu-pp-332': 'Exercise',
  'aicar': 'Exercise',
  'sglt2-hemmer': 'Longevity',
  'yohimbin': 'Stoffwechsel', 'benfotiamin': 'Stoffwechsel', 'telmisartan': 'Longevity', 'anabole-steroide': 'Exercise', 'epo': 'Exercise', 'clenbuterol': 'Stoffwechsel', 'dnp': 'Stoffwechsel',
  'bam15': 'Stoffwechsel', 'pregnenolon': 'Longevity',
  'turkesterone': 'Exercise', 's23': 'Exercise', 'nmnh': 'Longevity',
  'ace-031': 'Exercise',
  'andarin': 'Exercise',
  'cardarine': 'Exercise',
  'dhea': 'Longevity',
  'eloralintid': 'Stoffwechsel',
  'hgh-fragment-176-191': 'Exercise',
  'igf-1-des': 'Exercise',
  'ligandrol': 'Exercise',
  'ostarin': 'Exercise',
  'peg-mgf': 'Exercise',
  'stenabolic': 'Exercise',
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
