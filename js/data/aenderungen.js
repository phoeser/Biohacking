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
