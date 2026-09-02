/* Änderungsprotokoll – „Was hat sich geändert?"
 *
 * Dokumentiert, wo sich die Grundlage eines Themas nachträglich verschoben hat:
 * zurückgezogene Studien, gescheiterte Zulassungswege, neue Rechtsprechung,
 * eigene Korrekturen. Kein Änderungsprotokoll der Website – hier steht nur,
 * was die INHALTLICHE Bewertung eines Themas betrifft.
 *
 * Felder:
 *   datum  – ISO, wann die Änderung hier eingetragen wurde bzw. wirksam wurde
 *   typ    – 'Evidenz' | 'Recht' | 'Korrektur'
 *   titel  – worum es geht
 *   ziel   – { view, id } auf den betroffenen Eintrag (oder weggelassen)
 *   text   – was sich geändert hat und was das für die Bewertung bedeutet
 *   quelle – { titel, url } (optional)
 *
 * Regel: Jeder Eintrag nennt eine überprüfbare Quelle oder die eigene Folge,
 * in der die Korrektur gemacht wurde. Keine Einträge aus dem Bauch heraus.
 */
const AENDERUNGEN = [
  {
    datum: '2026-09-02',
    typ: 'Korrektur',
    titel: 'Drei Doppeleinträge zusammengeführt – Epitalon, Thymalin, Bronchogen standen zweimal im Bestand',
    text: 'Ein Leser wies darauf hin, dass Bronchogen und Epitalon doppelt erscheinen. Eine Prüfung aller 255 Einträge – paarweiser Namensvergleich, nicht nur Stichprobe – bestätigte drei echte Doppelungen an der Nahtstelle zwischen der Peptid- und der Khavinson-Ansicht, die auf derselben Seite untereinander stehen: Epitalon, Thymalin sowie Bronchogen/Chonluten waren je zweimal erfasst, unabhängig voneinander recherchiert und mit abweichenden Anwendungswerten bewertet. Dieselbe Substanz trug damit zwei verschiedene Noten, was der Grundidee des BK-Score widerspricht. Die Einträge wurden zusammengeführt: Der ausführlichere Peptid-Eintrag bleibt bestehen und übernimmt zusätzlich die genaueren Belegangaben aus dem Khavinson-Zwilling – bei Epitalon die unabhängige Zellkulturbestätigung von Al-Dulaimi et al. (Biogerontology 2025, Brunel University London, ohne Chawinson als Autor) samt dem Hinweis, dass die kursierende Aussage zur Telomermessung am Menschen aus einer unveröffentlichten Vortragsfolie stammt; bei Thymalin die Zahlen der Arbeit von Chawinson und Morozow (Neuro Endocrinol Lett 2003) und die Einordnung der Stammzellstudie von 2020 als Zellkulturarbeit; bei Bronchogen der Umstand, dass in Deutschland weder eine Arzneimittelzulassung noch eine Novel-Food-Genehmigung vorliegt. Übernommen wurde jeweils auch der höhere Anwendungswert, weil er die tatsächliche Verbreitung besser abbildet. Weiter korrigiert: Der Khavinson-Eintrag „Testagen / Prostamax" führte zwei verschiedene Peptide unter einem Namen und heißt jetzt nur noch Testagen – Prostamax bleibt ein eigener Eintrag. Und Grounding war als Behandlung mit Evidenz 1 und als Tipp mit Evidenz 2 bewertet; maßgeblich ist jetzt einheitlich Evidenz 1, gestützt auf das systematische Review mit drei Studien von acht, zwölf und 32 Teilnehmern, deren Ergebnisse sich widersprechen. Acht weitere Ähnlichkeitstreffer wurden geprüft und bewusst getrennt gelassen, weil es verschiedene Dinge sind: Magnesium neben Magnesium-L-Threonat, Quercetin neben dem Dasatinib-Stack, Melanotan 1 neben Melanotan 2, Koffein neben der Regel „kein Koffein nach 14 Uhr".',
  },
  {
    datum: '2026-09-02',
    typ: 'Korrektur',
    titel: 'Berichtslage auf 42 weitere Einträge ausgeweitet – und bei 43 bewusst weggelassen',
    text: 'Das am 1. September eingeführte Feld „Was berichtet wird" stand zunächst bei fünf Einträgen. Es steht jetzt bei 47. Neu bewertet wurden ausschließlich Einträge mit der Richtung „offen", also solche, bei denen die Studienlage für eine Aussage nicht reicht – genau dort trägt die Berichtslage am meisten. Entscheidend war nicht, wie viele Menschen berichten, sondern wie spezifisch: Drei Kriterien senken die Stufe trotz vieler Stimmen. Fehlende Unabhängigkeit – bei Fadogia agrestis entstanden praktisch alle Berichte nach derselben Podcast-Empfehlung, viele Stimmen sind dann nicht viele Beobachtungen. Fehlende Trennbarkeit – TB-500 wird fast immer gemeinsam mit BPC-157 angewendet, die Berichte können deshalb nicht sagen, welcher Stoff wirkt, und TB-500 steht darum eine Stufe unter BPC-157, obwohl die Beobachtungen gleich klingen. Und lange Latenz – was erst nach Wochen auftritt, kann viele Ursachen haben. Nur zwei neue Einträge erreichen Stufe 3: RAD-140, wo Anwender die Testosteronunterdrückung im eigenen Blutbild messen und zusätzlich publizierte Fallberichte über schwere Leberschäden vorliegen, und GHRP-6, wo der Hungerschub binnen Minuten auftritt, dosisabhängig ist und exakt zum Ghrelin-Rezeptor passt. Bei 43 weiteren offenen Einträgen wurde das Feld absichtlich nicht gesetzt, weil dort nur unspezifische Berichte vorliegen; NMN steht als Stufe 1 bewusst im Bestand, um sichtbar zu machen, wie eine zahlreiche und trotzdem schwache Berichtslage aussieht. Ein Fall verdient besondere Erwähnung: Zur Löwenmähne gibt es eine hartnäckige Häufung von Berichten über emotionale Abflachung und Libidoverlust. Eine systematische Übersicht von 2025 listet als Nebenwirkungen Magenbeschwerden, Kopfschmerz und allergische Reaktionen – die berichtete Abflachung dagegen nicht. Das widerlegt sie nicht, sondern zeigt, dass sie nie Endpunkt einer Studie war. Genau für diese Lücke wurde das Feld gebaut. Die Berichtslage ändert weiterhin kein Label und keine Achse; sie steht daneben, sichtbar, als Einschätzung – nicht als Balken, weil ein Balken eine Messung behauptet.',
    quelle: { titel: 'Benefits, side effects, and uses of Hericium erinaceus as a supplement: a systematic review (Frontiers in Nutrition 2025)', url: 'https://www.frontiersin.org/journals/nutrition/articles/10.3389/fnut.2025.1641246/full' }
  },
  {
    datum: '2026-09-01',
    typ: 'Korrektur',
    titel: 'Neu: „Was berichtet wird" – Erfahrungen stehen jetzt sichtbar neben der Evidenz',
    text: 'Der BK-Score kannte bisher nur zwei Größen für gelebte Praxis: die Achse Anwendungserfahrung, die misst, WIE VIEL angewendet wird, und die Erfahrungsberichte als eigenes Format. Was fehlte, war das Dazwischen – nämlich WAS Anwender und behandelnde Ärzte übereinstimmend beobachten. Eine Substanz, die eine Million Menschen mit widersprüchlichen Berichten nehmen, und eine, die 5.000 Menschen mit fast identischen, spezifischen Beobachtungen nehmen, wurden bei uns gleich behandelt. Das war falsch. Übereinstimmende, voneinander unabhängige Berichte über einen spezifischen Effekt sind Evidenz – schwache, aber keine Null; die gesamte Arzneimittelsicherheit nach der Zulassung funktioniert so, und bei Melanotan 2 stützt sich unser eigener Beleg auf genau solche Fallberichte. Neu gibt es deshalb den Block „Was berichtet wird" mit drei Stufen: vereinzelt, verbreitet und übereinstimmend, verbreitet und übereinstimmend und spezifisch. Entscheidend ist die Spezifität – „fühle mich besser" ist Rauschen, „Bräunung ohne Sonne binnen einer Woche" ist Signal. Zwei Entscheidungen dazu: Der Block hat bewusst KEINEN Balken bekommen, weil ein Balken eine Messung behauptet und eine Berichtslage eine Einschätzung ist; er sieht deshalb anders aus als die Achsen. Und er beeinflusst das Label nicht – das bleibt rein evidenzbasiert. Gestartet ist der Block bei BPC-157, SLU-PP-332, Melanotan 2, Tesofensin und Selen. Gerade der Selen-Fall zeigt, warum die Trennung nötig ist: viele positive Berichte, direkt neben einer großen Studie, die den beworbenen Nutzen nicht bestätigt hat.'
  },
  {
    datum: '2026-09-01',
    typ: 'Korrektur',
    titel: '„Nicht geprüft" ist nicht dasselbe wie „geprüft und widerlegt" – der Score sagt das jetzt dazu',
    text: 'Ein Leserhinweis hat auf eine Schwäche der Darstellung gezeigt, die zutraf. Der BK-Score unterscheidet im Datenmodell seit jeher zwischen „negativ" (untersucht, Wirkung nicht bestätigt) und „offen" (zu wenig Daten für eine Richtung). In der Anzeige war dieser Unterschied aber kaum zu sehen: Ein fast leeres Balkendiagramm mit einem knappen Label liest sich wie ein Urteil gegen die Substanz, auch wenn gar keines gefällt wurde. Zwei Änderungen: Das Label-Feld ist jetzt farblich getrennt – Rot für Widerlegtes, Bernstein für Ungeklärtes, Grün nur noch für tatsächlich Belegtes. Und unter dem Label steht bei offenen Einträgen ausdrücklich, was gemeint ist: nicht geprüft, nicht widerlegt. Ergänzt wurde außerdem der Beleg zu SLU-PP-332: Der Effekt trat bei Mäusen bereits eine Stunde nach Gabe auf, ein rasch spürbarer Effekt widerspricht dem Mechanismus also nicht. Die Mausdosis lag bei 50 mg/kg intraperitoneal, allometrisch rund 650 mg täglich für einen 80-Kilo-Menschen; berichtet werden 250 Mikrogramm bis 1,5 mg – etwa ein Tausendstel. Die Anwendungserfahrung steigt von 0 auf 2, weil Anwendung in Graumarktkreisen existiert.',
    ziel: { view: 'experimental', id: 'slu-pp-332' },
    quelle: { titel: 'Synthetic ERRα/β/γ Agonist Induces an Acute Aerobic Exercise Response (ACS Chem Biol)', url: 'https://pubs.acs.org/doi/10.1021/acschembio.2c00720' }
  },
  {
    datum: '2026-09-01',
    typ: 'Korrektur',
    titel: 'BPC-157: Es wurde am Menschen geprüft – die Ergebnisse wurden nie veröffentlicht',
    ziel: { view: 'experimental', id: 'bpc-157' },
    text: 'Der Beleg zum BPC-157-Score sagte, die Datenlage bestehe aus Nagermodellen. Das war unvollständig und in einem wichtigen Punkt irreführend. Der kroatische Hersteller Pliva führte Phase-II-Studien (PL-14736) bei Colitis ulcerosa durch; berichtet werden positive Effekte ohne Toxizität, doch die vollständigen Daten wurden nie als eigenständige klinische Arbeit publiziert und sind deshalb nicht überprüfbar. Eine Phase-I-Studie an 42 Gesunden wurde 2016 abgebrochen. „Nie am Menschen versucht" und „versucht, Ergebnis nie veröffentlicht" sehen im Balkendiagramm gleich aus, sind aber zwei verschiedene Dinge – das zweite ist ein Warnzeichen und ein Hinweis zugleich. Ergänzt wurde außerdem der regulatorische Verlauf in den USA: FDA-Kategorie 2 im Jahr 2023 wegen Immunogenität und Verunreinigungen, Entfernung aus Kategorie 2 am 15. April 2026, und am 24. Juli 2026 eine knappe Empfehlung des Beratungsausschusses (8 zu 6) für Kategorie 1 – ausschließlich für Colitis ulcerosa, unverbindlich, und derzeit ohne legale Herstellungsmöglichkeit. Die Anwendungserfahrung steigt von 4 auf 5: jahrelange breite Anwendung in den USA, aber nie mit einer Zulassung in irgendeinem Land. Die Human-Evidenz bleibt bei 1. Anwendungserfahrung ist keine Evidenz – dieselbe Regel, die wir bei Selen anwenden, gilt hier auch. Neu ist zusätzlich ein Label: Statt „Nicht am Menschen untersucht" steht dort jetzt „Am Menschen geprüft, Ergebnisse unveröffentlicht". Das betrifft vorerst nur diesen Eintrag, und es ist die ehrlichere Aussage.',
    quelle: { titel: 'FDA: Bulk Drug Substances That May Present Significant Safety Risks', url: 'https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks' }
  },
  {
    datum: '2026-09-01',
    typ: 'Korrektur',
    titel: 'Selen: SELECT hat gut versorgte Männer untersucht – das stand nicht dabei',
    ziel: { view: 'supplement', id: 'selen' },
    text: 'Der Beleg zum Selen-Score nannte die SELECT-Studie als Widerlegung des Krebsschutzes, ohne die Population zu benennen – und las sich damit absoluter, als die Daten hergeben. Die SELECT-Teilnehmer waren bereits gut mit Selen versorgt, im Mittel 135 ng/ml Plasma-Selen. In der Vorgängerstudie NPC lag der Mittelwert bei 114, und der dort gefundene Schutzeffekt beschränkte sich auf Männer unter 123 ng/ml; 78 Prozent der SELECT-Teilnehmer lagen darüber. Geprüft wurde also, ob zusätzliches Selen bei ausreichender Versorgung nützt – nicht, ob Selen bei Mangel nützt. Für deutsche Leser ist das nicht egal: Europäische Böden sind selenarm, die geschätzte Zufuhr liegt unter den DGE-Referenzwerten von 70 Mikrogramm für Männer und 60 für Frauen. Am Score ändert sich nichts, denn bewertet ist die beworbene Aussage „Selen schützt vor Krebs", und die ist für gut Versorgte widerlegt. Ergänzt wurde außerdem der U-förmige Zusammenhang: Für gut Versorgte ist mehr Selen nicht neutral.',
    quelle: { titel: 'Selenium and Prostate Cancer Prevention: Insights from SELECT (Nutrients 2013)', url: 'https://www.mdpi.com/2072-6643/5/4/1122' }
  },
  {
    datum: '2026-08-30',
    typ: 'Korrektur',
    titel: 'Erfahrungsberichte: BK-Score sichtbar, keine Sterne bei weitergegebenen Berichten',
    text: 'Eine externe Prüfung hat auf einen Widerspruch hingewiesen, der zutraf: Der Erfahrungsbericht zu MOTS-c trug fünf Sterne, während der BK-Score derselben Substanz bei Human-Evidenz 1 von 10 steht und „Nicht am Menschen untersucht" lautet. Auf der Erfahrungsseite wurde der Score bis dahin gar nicht angezeigt. Zwei Änderungen: Erstens erscheint der Score jetzt auf jedem Bericht, zu dem es einen gibt — fünf Sterne neben „Evidenz 1/10" ist kein Widerspruch, sondern eine Aussage: So fühlt es sich an, so ist die Datenlage. Zweitens entfallen Sterne bei Berichten, die aus dem Umfeld weitergegeben wurden und nicht auf eigener Anwendung beruhen; eine Zahl von eins bis fünf suggeriert dort eine Messung, die es nicht gibt. Betroffen waren MOTS-c und DSIP.'
  },
  {
    datum: '2026-08-30',
    typ: 'Korrektur',
    titel: 'Sprachliche Abrüstung: 27 Einträge und 38 Tipps neu formuliert',
    text: 'Eine externe inhaltliche Prüfung hat bemängelt, dass die sichtbaren Texte an vielen Stellen Wirkung im Indikativ behaupten, wo der BK-Score nur Zell- oder Tierdaten ausweist. Der Abgleich hat das bestätigt: 27 Einträge mit Human-Evidenz 0–3 oder negativer Richtung standen im Behauptungsmodus, dazu 14 mit Evidenz 4–5. Diese Texte sind jetzt umgeschrieben – aus „aktiviert Sirtuine" wird „aktiviert Sirtuine im Zellversuch", aus einer Prozentzahl wird die Studie, aus der sie stammt. Bei negativer Richtung wird der negative Befund ausdrücklich genannt, etwa bei Larazotid, dessen Phase-3-Studie den primären Endpunkt verfehlte. Absolutwörter wie „nachweislich" oder „einziger bekannter" sind unterhalb von Evidenz 8 vollständig verschwunden.'
  },
  {
    datum: '2026-08-30',
    typ: 'Korrektur',
    titel: 'BK-Score jetzt auch für alle 57 Tipps',
    text: 'Bis heute hatten Supplements, Peptide, Bioregulatoren und Anwendungen einen BK-Score – die 57 Biohacking-Tipps als einzige Kategorie nicht. Das war die größte Lücke der Transparenzseite, denn gerade hier zirkulieren Zahlen, die aus jeweils einer kleinen Studie stammen: die Dopamin-Verdreifachung beim Kaltduschen (acht Probanden), die Sauna-Zahl aus einer finnischen Beobachtungsstudie, die Autophagie-Zeitmarken aus dem Mausversuch. Alle 57 Tipps sind jetzt nach denselben fünf Achsen bewertet. Ein Tipp fällt dabei negativ aus: Dual-N-Back. Mehrere Meta-Analysen zeigen übereinstimmend, dass Arbeitsgedächtnistraining sich nicht auf fluide Intelligenz überträgt – die bisherige Formulierung war die Umkehrung des Befundes.'
  },
  {
    datum: '2026-08-28',
    typ: 'Korrektur',
    titel: 'Mod GRF 1-29: Verweis auf Folge 18 entfernt',
    ziel: { view: 'experimental', id: 'mod-grf-1-29' },
    text: 'Der Abgleich mit dem Podcast-Backend hat ergeben, dass Folge 18 dort nicht mehr existiert. Der Link auf diese Folge ist entfernt. Inhaltlich entsteht keine Lücke: Folge 38 behandelt dasselbe Molekül und löst auch das Namens-Chaos auf – CJC-1295 ohne DAC, Mod GRF 1-29 und modifiziertes GRF sind ein und derselbe Wirkstoff.'
  },
  {
    datum: '2026-08-27',
    typ: 'Evidenz',
    titel: 'Dihexa: Das wissenschaftliche Fundament ist zurückgezogen',
    ziel: { view: 'experimental', id: 'dihexa' },
    text: 'Die mechanistische Schlüsselarbeit zu Dihexa (J Pharmacol Exp Ther 2014) wurde zurückgezogen; Hintergrund ist eine festgestellte Bildmanipulation. Das darauf aufgebaute Medikament Fosgonimeton (ATH-1017) scheiterte im September 2024 in der Phase-2/3-Studie LIFT-AD. Die ursprüngliche Folge 75 sagte noch „wartet den regulären Studienweg ab" – dieser Weg ist inzwischen gegangen worden und endete negativ. Die Folge wurde deshalb komplett neu geschrieben.',
    quelle: { titel: 'Rücknahme-Notiz, PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/40312093/' }
  },
  {
    datum: '2026-08-27',
    typ: 'Evidenz',
    titel: 'Cerebrolysin: Präklinische Grundlage bröckelt',
    ziel: { view: 'experimental', id: 'cerebrolysin' },
    text: 'Die präklinische Begründung von Cerebrolysin ruht wesentlich auf Arbeiten des damaligen NIA-Neurowissenschaftsdirektors Eliezer Masliah, teils gemeinsam mit Herstellermitarbeitern. Das NIH stellte am 26.09.2024 Fälschung beziehungsweise Erfindung von Daten fest; seit 2025 werden diese Arbeiten zurückgezogen. Cerebrolysin hat daraufhin eine eigene Folge bekommen, statt weiter als Nebenthema zu laufen.'
  },
  {
    datum: '2026-08-27',
    typ: 'Korrektur',
    titel: 'Adamax-Folge: zwei Zahlen berichtigt',
    text: 'In der Folge zu Adamax waren zwei Angaben falsch: Die Fallzahl der LIFT-AD-Hauptanalyse beträgt 287, nicht 312, und der Vergleich mit dem US-Justizministerium datiert auf Januar 2025, nicht 2024. Beides ist im Skript korrigiert, bevor die Folge vertont wurde.'
  },
  {
    datum: '2026-08-02',
    typ: 'Recht',
    titel: 'KI-Kennzeichnung: Art. 50 EU AI Act in Kraft',
    text: 'Seit dem 02.08.2026 gilt die Transparenzpflicht für KI-erzeugte Inhalte nach Artikel 50 der EU-KI-Verordnung. Beide Stimmen dieses Podcasts sind KI-erzeugt; die Kennzeichnung steht seitdem am Ende jeder Folge.',
    quelle: { titel: 'Verordnung (EU) 2024/1689, Artikel 50', url: 'https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX%3A32024R1689' }
  },
  {
    datum: '2026-05-11',
    typ: 'Recht',
    titel: 'Abnehmspritzen: keine Kassenerstattung',
    ziel: { view: 'experimental', id: 'tirzepatide' },
    text: 'Das Landessozialgericht Niedersachsen-Bremen hat entschieden, dass die gesetzliche Krankenkasse Tirzepatid (Mounjaro) auch bei ärztlicher Verordnung nicht erstatten muss. Begründung: § 34 Abs. 1 Satz 7 SGB V schließt Arzneimittel zur Gewichtsreduktion als Lifestyle-Arzneimittel aus. Wer über eine Behandlung nachdenkt, sollte mit Selbstzahlung rechnen.',
    quelle: { titel: 'LSG Niedersachsen-Bremen, 11.05.2026 – L 16 KR 161/26 B ER (LTO)', url: 'https://www.lto.de/recht/nachrichten/n/lsg-niedersachsen-bremen-l16kr16126ber-abnehmespritze-lifestyle-kosten' }
  },
  {
    datum: '2026-03-26',
    typ: 'Recht',
    titel: 'Vermittlungsportale für Rezepte sind Publikumswerbung',
    text: 'Der Bundesgerichtshof hat entschieden, dass ein Internetportal, das Arzttermine für Behandlungen mit medizinischem Cannabis vermittelt und bewirbt, gegen das Verbot der Publikumswerbung für verschreibungspflichtige Arzneimittel verstößt (§ 10 Abs. 1 HWG). Maßgeblich war, dass die Darstellung Patienten dazu veranlasst, aktiv die Verschreibung eines bestimmten Arzneimittels anzufragen. Für uns ist das die Linie bei Bezugsquellen: Wir verlinken keine Portale, die Rezepte vermitteln.',
    quelle: { titel: 'BGH, Urteil vom 26.03.2026 – I ZR 74/25 (Osborne Clarke)', url: 'https://www.osborneclarke.com/de/insights/aktuelle-rechtsprechung-des-bgh-zur-werbung-fuer-medizinische-online-angebote' }
  }
];
