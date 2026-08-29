/* BK-Score – Bewertung des Wissensstands, nicht der Substanz
 * ==========================================================
 *
 * Vier Achsen, je 0-10. Der entscheidende Grundsatz: Jede Achse bewertet,
 * WAS MAN WEISS – keine bewertet, ob etwas gut oder sicher ist. Das ist nicht
 * nur juristisch der Unterschied zwischen einer Tatsachenbehauptung ueber
 * Studien und einer gesundheitsbezogenen Angabe; es ist auch die einzige
 * Bewertung, die wir redlich vergeben koennen.
 *
 * evidenz      Human-Evidenz – wie viel und wie gute Daten am Menschen?
 *   0-1  keine Humandaten
 *   2-3  Fallberichte, Anwendererfahrung, unkontrollierte Serien
 *   4-5  kleine oder unverblindete Studien, nur Surrogatmarker
 *   6-7  mehrere RCTs, aber klein, kurz oder uneinheitlich
 *   8-9  grosse RCTs oder konsistente Meta-Analysen mit harten Endpunkten
 *   10   Zulassung fuer genau diese Indikation auf Basis von Phase-III-Daten
 *
 * mechanismus  Wie gut ist die Wirkkette verstanden?
 *   0-2  Marketing-Erzaehlung ohne belegten Pfad
 *   3-5  plausibel aus Zellkultur und Tiermodell, Uebertragbarkeit offen
 *   6-8  Zielstruktur bekannt und am Menschen bestaetigt
 *   9-10 Wirkkette am Menschen quantifiziert (Dosis-Wirkung, Biomarker)
 *
 * sicherheit   Sicherheits-DATENLAGE – wie gut ist Sicherheit untersucht?
 *   0-2  nicht systematisch untersucht
 *   3-5  nur Kurzzeitdaten
 *   6-8  kontrollierte Daten ueber Monate
 *   9-10 Langzeitdaten aus Zulassung und Pharmakovigilanz
 *   ACHTUNG: eine hohe Zahl heisst "gut untersucht", nicht "harmlos".
 *
 * hype         Hype-Abstand – wie weit laeuft die Vermarktung der Evidenz voraus?
 *   0-2  Versprechen ohne Grundlage
 *   3-5  ein Einzelbefund wird zur Gesamtaussage
 *   6-8  ueberwiegend korrekt, einzelne Ueberdehnungen
 *   9-10 die Werbung bleibt auf Hoehe der Daten
 *
 * Regeln
 *   - Jede Zahl braucht einen Ein-Satz-Beleg. Ohne Beleg keine Zahl.
 *   - Kein Mittelwert als Gesamtnote: die Achsen messen Verschiedenes.
 *     Das Label entsteht aus Human-Evidenz und Hype-Abstand (bkLabel()).
 *   - Shops werden nie bewertet, und keine Bewertung haengt daran, ob ein
 *     Partner das Produkt verkauft.
 *   - Aendert sich eine Zahl, entsteht ein Eintrag in aenderungen.js.
 *
 * Stand: 29.08.2026 – erste 30 Eintraege.
 */
const BK_SCORES = [
  // ---------- Supplements ----------
  { id: 'kreatin', view: 'supplement', evidenz: 9, mechanismus: 8, sicherheit: 9, hype: 8,
    beleg: 'Eines der am besten untersuchten Supplements überhaupt: zahlreiche RCTs und Meta-Analysen zu Kraft und Magermasse, der Phosphokreatin-Weg ist am Menschen messbar, Sicherheitsdaten reichen über Jahre. Abzug beim Hype-Abstand nur, weil die kognitiven Versprechen über die Daten hinausgehen.' },
  { id: 'omega-3', view: 'supplement', evidenz: 8, mechanismus: 8, sicherheit: 9, hype: 6,
    beleg: 'Grosse randomisierte Studien (u.a. VITAL, REDUCE-IT, STRENGTH) mit harten Endpunkten liegen vor – ihre Ergebnisse widersprechen sich allerdings teils. Mechanismus und Sicherheit sind gut untersucht; beworben wird deutlich mehr, als die Studien hergeben.' },
  { id: 'vitamin-d3', view: 'supplement', evidenz: 8, mechanismus: 9, sicherheit: 9, hype: 5,
    beleg: 'Die Rezeptorbiologie ist ausgezeichnet verstanden und mit VITAL und Vergleichbarem gibt es große RCTs. Der Hype-Abstand ist der schlechteste Wert: Vitamin D wird für nahezu jede Erkrankung beworben, die Studien zeigen das nicht.' },
  { id: 'magnesium', view: 'supplement', evidenz: 7, mechanismus: 8, sicherheit: 9, hype: 6,
    beleg: 'Als Kofaktor hunderter Enzyme biochemisch sehr gut belegt, mit soliden Studien zu Blutdruck und Schlafqualität, aber wenige große Endpunktstudien. Sicherheit gut untersucht; die Vermarktung einzelner Salzformen geht über die Vergleichsdaten hinaus.' },
  { id: 'vitamin-k2', view: 'supplement', evidenz: 5, mechanismus: 8, sicherheit: 8, hype: 4,
    beleg: 'Die Wirkkette über Osteocalcin und Matrix-Gla-Protein ist gut beschrieben, die Humandaten zu Knochen und Gefäßverkalkung bleiben aber dünn und uneinheitlich. Wird trotzdem als Pflichtpartner zu Vitamin D vermarktet.' },
  { id: 'zink', view: 'supplement', evidenz: 7, mechanismus: 8, sicherheit: 8, hype: 6,
    beleg: 'Bei Mangel und bei Erkältungsdauer gibt es kontrollierte Studien und Meta-Analysen, die Immunfunktion ist mechanistisch klar. Überdosierung stört den Kupferhaushalt – das steht selten in der Werbung.' },
  { id: 'taurin', view: 'supplement', evidenz: 4, mechanismus: 6, sicherheit: 8, hype: 4,
    beleg: 'Die Aufmerksamkeit stammt aus einer Tierarbeit zur Lebensspanne; am Menschen liegen kleine Studien zu Blutdruck und Leistung vor, keine Langlebigkeitsdaten. Sicherheit ist durch breite Anwendung gut untersucht.' },
  { id: 'koffein', view: 'supplement', evidenz: 9, mechanismus: 9, sicherheit: 8, hype: 7,
    beleg: 'Der Adenosin-Antagonismus ist am Menschen quantifiziert, zu Leistung, Wachheit und Kaffeekonsum existieren große Kohorten und viele RCTs. Abzug bei der Sicherheit für die Datenlage zu hohen Dosen und Kombipräparaten.' },
  { id: 'kollagen', view: 'supplement', evidenz: 5, mechanismus: 5, sicherheit: 9, hype: 4,
    beleg: 'Es gibt RCTs zu Hautfeuchtigkeit und Gelenkbeschwerden, sie sind aber klein und überwiegend herstellerfinanziert. Der Mechanismus bleibt umstritten, weil Kollagen wie jedes Protein verdaut wird. Sehr stark beworben.' },
  { id: 'whey', view: 'supplement', evidenz: 8, mechanismus: 8, sicherheit: 9, hype: 7,
    beleg: 'Zur Muskelproteinsynthese und zum Kraftzuwachs liegen viele RCTs und Meta-Analysen vor, Leucin als Auslöser ist am Menschen gut belegt. Der übliche Überzug betrifft Timing-Versprechen, die die Daten nicht stützen.' },
  { id: 'nmn', view: 'supplement', evidenz: 3, mechanismus: 6, sicherheit: 5, hype: 2,
    beleg: 'Am Menschen gibt es kleine Studien mit Surrogatmarkern, keine Endpunktdaten; der NAD-Weg ist plausibel, die Anhebung im Gewebe aber schwach belegt. Sicherheitsdaten nur kurzfristig – und kaum ein Longevity-Produkt wird stärker überhöht.' },
  { id: 'spermidin', view: 'supplement', evidenz: 3, mechanismus: 6, sicherheit: 6, hype: 3,
    beleg: 'Die Autophagie-Erzählung ist mechanistisch reizvoll und in Modellorganismen belegt; am Menschen gibt es Kohortendaten und kleine Studien, keine harten Endpunkte. Beworben wird es als Fasten-Ersatz zum Schlucken.' },
  { id: 'berberin', view: 'supplement', evidenz: 6, mechanismus: 7, sicherheit: 6, hype: 4,
    beleg: 'Zu Blutzucker und Blutfetten liegen mehrere RCTs und Meta-Analysen vor, viele davon klein und aus einer Region. Der Beiname "pflanzliches Ozempic" ist der klarste Fall eines Versprechens weit über der Datenlage – dazu relevante Wechselwirkungen über CYP-Enzyme.' },
  { id: 'ashwagandha', view: 'supplement', evidenz: 5, mechanismus: 4, sicherheit: 5, hype: 4,
    beleg: 'Es gibt mehrere RCTs zu Stress und Cortisol, meist klein, kurz und herstellernah. Der Mechanismus bleibt vage. Wichtiger Punkt für die Sicherheits-Datenlage: Meldungen über Leberschäden haben mehrere Behörden beschäftigt.' },
  { id: 'melatonin', view: 'supplement', evidenz: 7, mechanismus: 9, sicherheit: 7, hype: 6,
    beleg: 'Die circadiane Wirkkette ist am Menschen quantifiziert, zu Einschlafzeit und Jetlag gibt es Meta-Analysen. Langzeitdaten fehlen weitgehend, und die in Deutschland üblichen Dosierungen liegen deutlich über dem, was die Studien nutzen.' },
  { id: 'urolithin-a', view: 'supplement', evidenz: 4, mechanismus: 7, sicherheit: 7, hype: 4,
    beleg: 'Die Mitophagie-Wirkkette ist beim Menschen mit Biomarkern belegt, die klinischen Effekte auf Muskelkraft und Ausdauer sind klein und aus wenigen, herstellerfinanzierten Studien. Dass viele Menschen den Stoff im Darm gar nicht bilden, kommt in der Werbung selten vor.' },
  { id: 'coq10', view: 'supplement', evidenz: 5, mechanismus: 8, sicherheit: 8, hype: 5,
    beleg: 'Die Rolle in der Atmungskette ist gesichert; klinisch überzeugen vor allem Daten bei Herzinsuffizienz, während der Nutzen bei Gesunden und bei Statin-Muskelbeschwerden uneinheitlich bleibt.' },
  { id: 'resveratrol', view: 'supplement', evidenz: 2, mechanismus: 5, sicherheit: 7, hype: 1,
    beleg: 'Das Lehrstück der Longevity-Szene: zwanzig Jahre Schlagzeilen, ein Milliardendeal – und am Menschen bis heute keine belastbaren Wirknachweise, dazu Zweifel an zentralen Sirtuin-Arbeiten. Bioverfügbarkeit gering. Der größte Hype-Abstand im ganzen Bestand.' },

  // ---------- Peptide und Experimentelles ----------
  { id: 'semaglutide', view: 'experimental', evidenz: 10, mechanismus: 9, sicherheit: 9, hype: 7,
    beleg: 'Zugelassen auf Basis der STEP-Studien, kardiovaskulärer Nutzen in SELECT mit hartem Endpunkt, Wirkkette am Menschen quantifiziert, Pharmakovigilanz läuft. Abzug beim Hype-Abstand für den Graumarkt, der mit denselben Zahlen wirbt, ohne dasselbe Produkt zu verkaufen.' },
  { id: 'tirzepatide', view: 'experimental', evidenz: 10, mechanismus: 9, sicherheit: 8, hype: 7,
    beleg: 'Zugelassen auf Basis der SURMOUNT- und SURPASS-Programme; der doppelte Rezeptorangriff ist am Menschen belegt. Weniger Langzeitdaten als bei Semaglutid, weil jünger. Kostenübernahme durch die Kasse ist ausgeschlossen – das fällt in der Werbung unter den Tisch.' },
  { id: 'retatrutide', view: 'experimental', evidenz: 5, mechanismus: 8, sicherheit: 4, hype: 3,
    beleg: 'Beeindruckende Phase-2-Daten, aber keine abgeschlossene Phase III und keine Zulassung; Sicherheitsdaten entsprechend kurz. Wird im Graumarkt schon heute als stärkster Abnehmwirkstoff verkauft – ein Versprechen auf Basis unfertiger Studien.' },
  { id: 'bpc-157', view: 'experimental', evidenz: 1, mechanismus: 4, sicherheit: 2, hype: 1,
    beleg: 'Trotz enormer Popularität keine publizierte kontrollierte Humanstudie; die Datenlage besteht aus Nagermodellen. Sicherheit nicht systematisch untersucht. Verkauft wird es als Reparaturmittel für nahezu jedes Gewebe.' },
  { id: 'tb-500', view: 'experimental', evidenz: 1, mechanismus: 4, sicherheit: 2, hype: 1,
    beleg: 'Die Humandaten betreffen Thymosin Beta-4 in klinischen Ansätzen, nicht das gehandelte Fragment; kontrollierte Studien zum Research-Produkt fehlen. Sicherheit unerforscht, Vermarktung als Regenerations-Wundermittel.' },
  { id: 'mk-677', view: 'experimental', evidenz: 6, mechanismus: 8, sicherheit: 5, hype: 3,
    beleg: 'Hier gibt es echte Humanstudien, auch über Monate – und genau die sind ernüchternd: Wachstumshormon und IGF-1 steigen, die erhofften Ergebnisse bei Kraft und Körperzusammensetzung folgen daraus nicht. Blutzuckerverschlechterung ist dokumentiert; beworben wird trotzdem der Peak.' },
  { id: 'cjc-ipamorelin', view: 'experimental', evidenz: 2, mechanismus: 6, sicherheit: 3, hype: 2,
    beleg: 'Zu den Einzelsubstanzen existieren ältere pharmakologische Humandaten, zur beliebten Kombination praktisch keine. Der Weg über GHRH- und Ghrelin-Rezeptor ist verstanden, die Auszahlung nicht belegt.' },
  { id: 'ghk-cu', view: 'experimental', evidenz: 4, mechanismus: 7, sicherheit: 6, hype: 4,
    beleg: 'Ein geteilter Fall: topisch gibt es brauchbare kosmetische Studien, für die injizierte Anwendung praktisch keine Humandaten. Die Genregulations-Erzählung stammt aus Zellarbeiten und wird für beide Anwendungswege benutzt.' },
  { id: 'epitalon', view: 'experimental', evidenz: 2, mechanismus: 3, sicherheit: 3, hype: 1,
    beleg: 'Die Humandaten stammen fast ausschließlich aus kleinen, unverblindeten Arbeiten einer einzigen Forschungsschule; eine unabhängige Replikation gibt es bislang nur auf Zellebene. Beworben wird Telomerverlängerung als Verjüngung.' },
  { id: 'rapamycin', view: 'experimental', evidenz: 5, mechanismus: 9, sicherheit: 5, hype: 4,
    beleg: 'Der mTOR-Weg ist einer der am besten verstandenen der Alternsforschung und in Modellorganismen überzeugend. Am Menschen gibt es zugelassene Anwendungen in der Transplantationsmedizin, aber keine Longevity-Endpunktdaten; die Off-Label-Nutzung läuft der Evidenz voraus.' },
  { id: 'dihexa', view: 'experimental', evidenz: 1, mechanismus: 4, sicherheit: 1, hype: 1,
    beleg: 'Die mechanistische Schlüsselarbeit ist zurückgezogen, das darauf aufgebaute Medikament in Phase 2/3 gescheitert, registrierte klinische Studien zur Substanz selbst gibt es nicht. Sicherheit völlig unerforscht. Siehe Änderungsprotokoll.' },
  { id: 'metformin', view: 'experimental', evidenz: 8, mechanismus: 8, sicherheit: 9, hype: 5,
    beleg: 'Für Typ-2-Diabetes seit Jahrzehnten zugelassen, mit Endpunktdaten und umfassender Pharmakovigilanz. Der Longevity-Anspruch ist etwas anderes: Die dafür entscheidende Studie ist nicht abgeschlossen, und es gibt Hinweise, dass Metformin Trainingsanpassungen dämpft.' }
];

/* Label aus Human-Evidenz und Hype-Abstand – bewusst kein Mittelwert. */
function bkLabel(s) {
  if (s.evidenz >= 8 && s.hype >= 6) return 'Gut belegt';
  if (s.evidenz >= 8) return 'Gut belegt, stark überhöht beworben';
  if (s.evidenz >= 6) return 'Belegt, mit Einschränkungen';
  if (s.evidenz >= 4) return 'Dünne Humanevidenz';
  if (s.hype <= 3) return 'Hype weit vor Evidenz';
  return 'Experimentell';
}
