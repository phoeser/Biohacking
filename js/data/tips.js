/* Biohacking-Tipps
 * Strategien jenseits von Supplements.
 */
const TIPS = [
  // SCHLAF
  {
    id: 'schlaf-dunkel',
    category: 'Schlaf',
    icon: '🌙',
    title: 'Komplette Dunkelheit im Schlafzimmer',
    short: 'Licht am Abend dämpft die Melatonin-Ausschüttung. Gemessen wurde das mit Raumlicht – die Standby-Leuchte ist eine andere Größenordnung.',
    how: 'Blackout-Vorhänge, Schlafmaske und alle LEDs abkleben. Wenn du nachts ohne Licht nicht aufstehen kannst, verwende eine rote Taschenlampe.',
    tags: ['schlaf', 'melatonin', 'regeneration']
  },
  {
    id: 'schlaf-temperatur',
    category: 'Schlaf',
    icon: '❄️',
    title: 'Schlafzimmer auf 16–18 °C',
    short: 'Hitze kostet Tiefschlaf und REM – ein kühler Raum verhindert diesen Verlust.',
    how: 'Fenster auf oder Klimaanlage einstellen. Zum Abkühlen 1 bis 2 Stunden vor dem Schlafen warm duschen (40–42,5 °C, ab 10 Minuten) – die Hautgefäße weiten sich, Kerntemperatur sinkt danach.',
    tags: ['schlaf', 'temperatur', 'tiefschlaf']
  },
  {
    id: 'schlaf-blaulicht',
    category: 'Schlaf',
    icon: '🟡',
    title: 'Blaulicht-Filter ab Sonnenuntergang',
    short: 'Kurzwelliges Licht dämpft Melatonin. Ob Filter und Brillen daraus messbar besseren Schlaf machen, zeigen die Studien uneinheitlich.',
    how: 'Orange Blueblocker-Brille am Abend tragen. Handy und Computer am besten weglegen oder deutlich dunkler stellen – für den Nachtmodus (f.lux, Night Shift) gibt es keinen Wirksamkeitsnachweis.',
    tags: ['schlaf', 'licht', 'melatonin']
  },
  {
    id: 'schlaf-zeit',
    category: 'Schlaf',
    icon: '⏰',
    title: 'Konstante Schlafzeit',
    short: 'Gleiche Zeiten stärken deinen zirkadianen Rhythmus.',
    how: 'Jeden Tag (auch am Wochenende) zur gleichen Zeit ins Bett und aufstehen; die oft genannte Toleranz von ±30 Minuten ist eine Alltagsfaustregel ohne Studienbeleg. Der Rhythmus sagt Gesundheitsrisiken besser vorher als die reine Dauer – er ersetzt sie aber nicht.',
    tags: ['schlaf', 'zirkadian', 'routine']
  },
  {
    id: 'schlaf-koffein',
    category: 'Schlaf',
    icon: '☕',
    title: 'Kein Koffein nach 14 Uhr',
    short: 'Koffein hat eine Halbwertszeit von etwa 4 Stunden – individuell zwischen 2 und 8 Stunden.',
    how: 'Rechne vom Zubettgehen zurück statt nach der Uhr: mindestens 6 Stunden Abstand, für eine normale Tasse Kaffee eher 9. Abends dann koffeinfreie Getränke.',
    tags: ['schlaf', 'koffein', 'einschlafen']
  },

  // LICHT & ZIRKADIAN
  {
    id: 'licht-morgen',
    category: 'Licht',
    icon: '☀️',
    title: 'Morgens 10 min Sonnenlicht',
    short: 'Morgenlicht stellt die innere Uhr – einer der bestbelegten chronobiologischen Effekte. Den Cortisol-Rhythmus moduliert es, es setzt ihn nicht.',
    how: 'Innerhalb 30 min nach dem Aufwachen 5–15 min direkt ins Tageslicht (ohne Fensterscheibe). Draußen sind es typischerweise Zehntausende Lux, im Mittel über 40.000 – die innere Uhr spricht schon weit darunter an, auch mit Sonnenbrille.',
    tags: ['licht', 'cortisol', 'energie', 'stimmung']
  },
  {
    id: 'licht-rot',
    category: 'Licht',
    icon: '🔴',
    title: 'Rotlicht-Therapie',
    short: 'Rot- und Infrarotlicht: viele kleine Humanstudien mit sehr unterschiedlichen Geräten und Dosen – vergleichbar sind sie kaum.',
    how: 'Etwa 20 min vor einem hochwertigen Rotlichtpanel (600–850 nm), zwei- bis dreimal pro Woche. Am besten belegt ist die Haardichte, danach Fibromyalgie-Fatigue und Kniearthrose – „Energie“ bei Gesunden ist nicht untersucht.',
    tags: ['licht', 'mitochondrien', 'regeneration', 'haut']
  },
  {
    id: 'licht-mittag',
    category: 'Licht',
    icon: '🌞',
    title: 'Mittagssonne für Vitamin D',
    short: 'Mittagssonne liefert UVB – die einzige Quelle für körpereigenes Vitamin D.',
    how: 'Zur Mittagszeit die halbe sonnenbrandwirksame Dosis abholen, zwei- bis dreimal pro Woche – für Hauttyp II bei UV-Index 7 sind das etwa 12 Minuten, für dunklere Haut mehr. Gesicht, Hände und Arme reichen; von Oktober bis März steht die Sonne in Deutschland dafür zu tief.',
    tags: ['licht', 'vitamin-d', 'hormone']
  },

  // KÄLTE & HITZE
  {
    id: 'kaltduschen',
    category: 'Kälte & Hitze',
    icon: '🥶',
    title: 'Kalt duschen (Wim Hof)',
    short: 'Akuter Kältereiz: Katecholamine steigen messbar. Die verbreiteten Zahlen zu Dopamin und Immunsystem stammen aus zwei sehr kleinen Studien.',
    how: 'Start: 30 Sekunden kalt am Ende der normalen Dusche. Wöchentlich steigern auf 2–3 Minuten. Der viel zitierte Dopamin-Anstieg wurde bei einer Stunde in 14-Grad-Wasser gemessen, nicht in der Dusche – über die Wirkdauer danach sagt die Studie nichts.',
    tags: ['kaelte', 'dopamin', 'immun', 'stress']
  },
  {
    id: 'eisbad',
    category: 'Kälte & Hitze',
    icon: '🧊',
    title: 'Eisbad',
    short: 'Stärkster Kältereiz mit deutlicher Katecholamin-Antwort. Bei Herzvorerkrankungen nie systematisch untersucht.',
    how: '2–5 min bei 10–15 °C, 1–3× pro Woche. Nach dem Training kann Muskelwachstum hemmen – dann besser abends oder an Ruhetagen.',
    tags: ['kaelte', 'entzuendung', 'hormone', 'regeneration']
  },
  {
    id: 'sauna',
    category: 'Kälte & Hitze',
    icon: '🔥',
    title: 'Sauna 20 min, 4× pro Woche',
    short: 'In der finnischen Langzeitbeobachtung starben häufige Saunagänger seltener an Herzerkrankungen – ein Zusammenhang, keine gemessene Wirkung.',
    how: '20 min bei 80–90 °C, 4× pro Woche; bei Aufguss ist dieselbe Zeit ein deutlich stärkerer Reiz. Die Herzfrequenz steigt ähnlich wie bei leichter Belastung – die Trainingsanpassungen des Ausdauersports stellen sich in randomisierten Studien aber nicht ein. Wichtig: genug trinken.',
    tags: ['hitze', 'herz', 'anti-aging', 'regeneration']
  },

  // ATMUNG
  {
    id: 'box-breathing',
    category: 'Atmung',
    icon: '🫁',
    title: 'Box Breathing (4-4-4-4)',
    short: 'Dämpft akut Herzfrequenz und Zustandsangst vor Stresssituationen – die Herzratenvariabilität bewegte sich dabei nicht. Die Navy-SEAL-Herkunft ist unbelegt.',
    how: '4 Sek. einatmen – 4 Sek. halten – 4 Sek. ausatmen – 4 Sek. halten. 3–5 Minuten. Ideal vor anspruchsvollen Situationen.',
    tags: ['atmung', 'stress', 'fokus', 'entspannung']
  },
  {
    id: 'wim-hof-atmung',
    category: 'Atmung',
    icon: '💨',
    title: 'Wim-Hof-Atmung',
    short: 'Hyperventilation plus Kälte. Die Immunwirkung stammt aus einer Studie mit zwölf Teilnehmern und einer Nachfolgestudie mit 48 – alle jung, männlich, gesund. Nie im oder am Wasser üben.',
    how: '30–40 tiefe Atemzüge, dann ausatmen und die Atempause so lange wie möglich halten – dieser Schritt drückt die Sättigung auf rund 60 %. 3 Runden, morgens auf leerem Magen, immer im Liegen oder Sitzen. Nicht im oder am Wasser, nicht in der Badewanne, nicht im Stehen, nicht beim Autofahren!',
    tags: ['atmung', 'energie', 'immun', 'stimmung']
  },
  {
    id: 'nasenatmung',
    category: 'Atmung',
    icon: '👃',
    title: 'Nur durch die Nase atmen',
    short: 'Die Nase befeuchtet, filtert und liefert Stickstoffmonoxid – das ist gesichert. Die Versprechen zu Schlaf und Ausdauer sind es nicht.',
    how: 'Tagsüber bewusst nur durch die Nase atmen. Mund-Tape für die Nacht ist populär, aber schlecht untersucht – bei Schnarchen mit Atemaussetzern zuerst eine Schlafapnoe abklären lassen, sonst wird ein Warnsignal zugeklebt.',
    tags: ['atmung', 'schlaf', 'sport']
  },

  // ERNÄHRUNG
  {
    id: 'intervallfasten',
    category: 'Ernährung',
    icon: '⏱️',
    title: 'Intervallfasten (16:8)',
    short: 'Verbessert in Studien Gewicht und Insulinsensitivität – etwa so gut wie eine gleich große Kalorienreduktion. Die Autophagie ist Theorie.',
    how: '16 Stunden fasten, 8 Stunden Essen – lege das Fenster besser früh (z. B. 8–16 Uhr), weil die Glukosetoleranz abends schlechter ist. Während Fasten: Wasser, Kaffee, Tee, Elektrolyte. Der verbreitete Rat, Frauen sollten mit 14:10 einsteigen, ist in keiner Studie geprüft.',
    tags: ['fasten', 'autophagie', 'gewicht', 'insulin']
  },
  {
    id: 'proteine-morgen',
    category: 'Ernährung',
    icon: '🥩',
    title: '30 g Protein zum Frühstück',
    short: 'Stabilisiert Blutzucker, unterstützt Muskelaufbau, sättigt lange.',
    how: '30–40 g hochwertiges Protein (Eier, Fisch, Fleisch, Whey) zum Frühstück; die oft genannte Stunde nach dem Aufwachen ist eine Konvention, kein Studienprotokoll. Sättigt in den Stunden bis zur nächsten Mahlzeit messbar stärker.',
    tags: ['ernaehrung', 'muskel', 'energie', 'gewicht']
  },
  {
    id: 'apfelessig',
    category: 'Ernährung',
    icon: '🍎',
    title: 'Apfelessig vor Mahlzeiten',
    short: 'Kleine Studien fanden eine flachere Blutzuckerspitze nach einer Testmahlzeit. Der Zahnschmelz leidet dagegen zuverlässig.',
    how: '1 EL flüssigen Apfelessig in einem großen Glas Wasser zur Mahlzeit – in den Studien wurde er direkt zum Essen gegeben, und gewirkt hat er nur bei hoher glykämischer Last. Mit Strohhalm trinken (Zahnschmelz schützen), Tabletten meiden.',
    tags: ['ernaehrung', 'blutzucker', 'verdauung', 'gewicht']
  },
  {
    id: 'low-carb-abend',
    category: 'Ernährung',
    icon: '🥦',
    title: 'Kohlenhydrate abends reduzieren',
    short: 'Zur Verteilung der Kohlenhydrate über den Tag widersprechen sich die Studien – eine fand abends sogar eine kürzere Einschlafzeit. Belegt ist dagegen, dass dieselbe Menge abends eine höhere Blutzuckerspitze erzeugt als morgens.',
    how: 'Abends fokus auf Protein + Fett + Gemüse. Kleine Mengen komplexe Kohlenhydrate ok (Süßkartoffel, Reis). Keine schnellen Zucker.',
    tags: ['ernaehrung', 'schlaf', 'hormone', 'gewicht']
  },

  // BEWEGUNG
  {
    id: 'nef-training',
    category: 'Bewegung',
    icon: '💪',
    title: 'Krafttraining 3× pro Woche',
    short: 'Die am besten belegte Einzelmaßnahme dieser Datenbank: Muskelmasse, Knochendichte, Stoffwechsel, Sterblichkeit.',
    how: '3× pro Woche Ganzkörper oder Split. Schwere zusammengesetzte Übungen: Kniebeuge, Bankdrücken, Rudern, Klimmzüge. Progressive Überlast ist der Schlüssel. Bei vorhandenen Wirbelkörperfrakturen sind laut DVO-S3-Leitlinie Sprünge und intensitätsbetontes axiales Krafttraining mit hohen Lasten kontraindiziert; bei Osteoporose ohne Fraktur sollen hochintensive Sprungformen wie Tiefsprünge entfallen. Flexion der Wirbelsäule unter Last vermeiden und nicht bis zum Muskelversagen trainieren.',
    tags: ['bewegung', 'muskel', 'anti-aging', 'hormone']
  },
  {
    id: 'zone-2',
    category: 'Bewegung',
    icon: '🚴',
    title: 'Zone-2-Cardio 2–4× pro Woche',
    short: 'Lockeres Ausdauertraining baut Mitochondrien auf. Dass ausgerechnet Zone 2 dafür optimal ist, ist eine populäre Zuspitzung.',
    how: '30–60 min in der Intensität, in der ein Gespräch noch möglich ist. Radfahren, Gehen mit Anstieg, Rudern. Die verbreitete Faustformel „60–70 % der maximalen Herzfrequenz" trifft die gemeinte Intensität bei vielen Menschen nicht – die gängigen Zone-2-Marker streuen um 6 bis 29 %. Wer es genau braucht, kommt um einen Laktat- oder Spiroergometrie-Test nicht herum.',
    tags: ['bewegung', 'ausdauer', 'mitochondrien', 'herz']
  },
  {
    id: 'hiit',
    category: 'Bewegung',
    icon: '⚡',
    title: 'HIIT 1–2× pro Woche',
    short: 'Hochintensives Intervalltraining steigert VO2max stark.',
    how: '8× 20 Sekunden maximal, 10 Sekunden Pause (Tabata) – die Originalintensität von 170 % VO2max ist im Alltag nicht machbar. Oder 4× 4 min bei 90 % der gemessenen Maximalherzfrequenz, 3 min Pause. Nach Aufwärmung. Zwei Einheiten pro Woche sind der beste Kompromiss aus Gewinn und Durchhaltbarkeit.',
    tags: ['bewegung', 'ausdauer', 'anti-aging']
  },
  {
    id: 'bewegung-alltag',
    category: 'Bewegung',
    icon: '🚶',
    title: '10.000 Schritte täglich',
    short: 'Der Zusammenhang mit der Sterblichkeit ist in großen Kohorten klar – der Großteil des Gewinns liegt je nach Alter aber schon zwischen 6.000 und 10.000 Schritten.',
    how: 'Treppen statt Aufzug, 10-min-Spaziergang nach jedem Essen, Stehschreibtisch als Zwischenschritt – Gehen wirkt deutlich besser als Stehen. Für den Blutzucker zählen kurze, über den Tag verteilte Einheiten mehr als eine einzige; für harte Endpunkte gibt es diesen Vergleich nicht.',
    tags: ['bewegung', 'gewicht', 'blutzucker', 'stimmung']
  },
  {
    id: 'bewegung-post-meal',
    category: 'Bewegung',
    icon: '🚶‍♂️',
    title: '10-min-Gehen nach Mahlzeiten',
    short: 'Flacht die Blutzuckerspitze nach dem Essen messbar ab – am deutlichsten nach dem Abendessen.',
    how: 'Innerhalb der ersten Stunde nach dem Essen 10–15 min locker spazieren – eine Studie spricht sogar für 30 Minuten Wartezeit. Am deutlichsten wirkt es nach dem Abendessen.',
    tags: ['bewegung', 'blutzucker', 'verdauung']
  },

  // STRESS & GEIST
  {
    id: 'meditation',
    category: 'Stress & Geist',
    icon: '🧘',
    title: 'Meditation 10 min täglich',
    short: 'Meta-Analysen zeigen kleine bis mittlere Effekte auf Angst, Depressivität und Schmerz – für die Aufmerksamkeit reicht die Evidenz nicht. Cortisol sinkt im Mittel messbar, aber wenig und mit großer Streuung.',
    how: 'Apps wie Waking Up, Headspace oder einfach still sitzen mit Atembeobachtung. Gleiche Zeit täglich. 8 Wochen sind die Standarddauer der Programme, aus denen die psychologischen Effekte stammen – strukturelle Gehirnveränderungen zeigten sich darin nicht.',
    tags: ['stress', 'fokus', 'schlaf', 'stimmung']
  },
  {
    id: 'dankbarkeit',
    category: 'Stress & Geist',
    icon: '🙏',
    title: 'Dankbarkeits-Journaling',
    short: 'Randomisierte Studien zeigen kleine Effekte auf Stimmung, die bis in die Nachbeobachtung reichen – gegen aktive Vergleichsgruppen bleibt allerdings deutlich weniger übrig.',
    how: 'Jeden Morgen oder Abend 3 Dinge aufschreiben, für die du dankbar bist; die 5 Minuten sind eine plausible, aber nie geprüfte Angabe. Schon zwei Wochen reichten in einem randomisierten Versuch für messbare Effekte auf Schlaf, Optimismus und Blutdruck.',
    tags: ['stress', 'stimmung', 'schlaf']
  },
  {
    id: 'digital-detox',
    category: 'Stress & Geist',
    icon: '📵',
    title: 'Kein Handy in der ersten Stunde',
    short: 'Eine Alltagsheuristik: den Fokus selbst setzen, statt ihn fremdbestimmen zu lassen – geprüft wurde bisher nur die Nutzungsmenge, nie der Zeitpunkt. Der oft genannte Cortisol-Spike ist nie gemessen worden.',
    how: 'Die erste Stunde nach dem Aufwachen ohne Smartphone. Kein E-Mail, kein Social Media. Stattdessen Sonnenlicht, Wasser, Bewegung, Planung.',
    tags: ['stress', 'fokus', 'morgen-routine']
  },
  {
    id: 'natur',
    category: 'Stress & Geist',
    icon: '🌲',
    title: 'Waldbaden (Shinrin-Yoku)',
    short: 'Zeit im Grünen hängt in großen Kohorten mit besserem Wohlbefinden zusammen. Die Immunbefunde stammen aus kleinen japanischen Studien.',
    how: 'Mindestens 120 min pro Woche in der Natur, ohne Handy – verteilt wie es passt, aber gehend: In allen Studien wurde gegangen, nicht gesessen. Als Mechanismus werden Phytonzide diskutiert; geprüft ist das an zwölf Personen ohne Kontrollgruppe.',
    tags: ['stress', 'immun', 'stimmung']
  },

  // HORMONE & OPTIMIERUNG
  {
    id: 'morning-routine',
    category: 'Routine',
    icon: '🌅',
    title: 'Die perfekte Morgen-Routine',
    short: 'Sonne, Wasser, Bewegung, Kälte – bevor du aufs Handy schaust.',
    how: '1. Sonnenlicht 5–10 min. 2. Ein großes Glas Wasser – Salz und Zitrone sind Gewohnheit, kein belegter Zusatznutzen. 3. 5 min Bewegung (Liegestützen, Spaziergang). 4. Kalte Dusche, 30 Sekunden reichen. Dann Frühstück.',
    tags: ['routine', 'energie', 'hormone', 'morgen']
  },
  {
    id: 'evening-routine',
    category: 'Routine',
    icon: '🌆',
    title: 'Evening Wind-Down',
    short: 'Licht dimmen wirkt über das Melatonin, die warme Dusche über die Wärmeregulation, die Atemübung über den Parasympathikus.',
    how: '2 h vor dem Schlafen: Licht dimmen (am besten belegt), Blueblocker nur als Ergänzung, kein Bildschirm 1 h davor. Ritual: Tee, Buch, Atemübung und die warme Dusche 1 bis 2 Stunden vor dem Hinlegen, nicht direkt davor.',
    tags: ['routine', 'schlaf', 'entspannung']
  },
  {
    id: 'hrv-tracking',
    category: 'Tracking',
    icon: '📊',
    title: 'HRV täglich messen',
    short: 'Herzratenvariabilität ist einer der am besten untersuchten Marker für die vegetative Balance.',
    how: 'Am genauesten mit Brustgurt (z. B. HRV4Training), deutlich ungenauer am Handgelenk. Lies nicht den Einzelwert, sondern mittele mindestens drei Messungen pro Woche: Sinkt der Schnitt, reduziere die Intensität, statt zu pausieren – bei sehr gut Trainierten kann ein Rückgang auch mehr Parasympathikus bedeuten.',
    tags: ['tracking', 'regeneration', 'stress']
  },
  {
    id: 'blutwerte',
    category: 'Tracking',
    icon: '🩸',
    title: 'Jährliches Blutbild',
    short: '„Was nicht gemessen wird, kann nicht optimiert werden“ – so die Szene. Messen bringt mehr Diagnosen, aber nachweislich nicht weniger Todesfälle.',
    how: 'Mindestens: Vitamin D (im Winter messen), B12, Ferritin (zusammen mit CRP lesen), Omega-3-Index, TSH, HbA1c, Testosteron (Männer, nüchtern am Morgen und mit Bestätigungsmessung), CRP. Freies T3 und T4 gehören bei Beschwerdefreien nicht ins Routinescreening.',
    tags: ['tracking', 'hormone', 'vitamine']
  },
  {
    id: 'grounding',
    category: 'Stress & Geist',
    icon: '👣',
    title: 'Grounding (Erden)',
    short: 'Barfuß auf der Erde. Für die meisten angenehm und risikoarm – bei Neuropathie oder Durchblutungsstörung an den Füßen aber nicht; die behauptete Wirkung auf Entzündung und Cortisol ist nicht belegt.',
    how: 'Barfuß auf Gras, Erde, Sand oder Stein – Dauer und Untergrundregel folgen der Elektronen-Hypothese, nicht den Daten. Belegt ist etwas anderes: Barfußtraining stärkt über Wochen Fußmuskulatur und Gewölbefunktion.',
    tags: ['stress', 'entzuendung', 'schlaf']
  },
  {
    id: 'wasser-qualitaet',
    category: 'Ernährung',
    icon: '💧',
    title: 'Gefiltertes Wasser mit Mineralien',
    short: 'Deutsches Leitungswasser ist streng überwacht. Ein Zusatznutzen von Filtern ist nicht belegt – schlecht gewartete Filter können schaden.',
    how: 'Leitungswasser trinken – das Umweltbundesamt rät von Filtern in der Hausinstallation ab, und Himalaya-Salz ist fast nur Kochsalz, ersetzt also kein Calcium und Magnesium. Rund 1,5 Liter über Getränke reichen (DGE); bei Bleirohren hilft nur der Rohraustausch.',
    tags: ['ernaehrung', 'entgiftung', 'mineralien']
  },

  // SAUERSTOFF – neu
  {
    id: 'hbot',
    category: 'Sauerstoff',
    icon: '🫧',
    title: 'Hyperbare Sauerstofftherapie (HBOT)',
    short: 'Hoher Sauerstoffdruck – bei zugelassenen Indikationen gut belegt. Die Longevity-Anwendung stützt sich auf eine kleine Studie ohne Kontrollgruppe.',
    how: '60–90 min in einer Druckkammer ab 1,4 ATA, in den Studien typischerweise 2,0–2,4 ATA, 10–40 Sitzungen. Anwendung: Regeneration, Long-Covid, Wundheilung, Anti-Aging. Nur in spezialisierten Zentren. Nicht bei COPD, Pneumothorax, bestimmten Ohrenerkrankungen.',
    tags: ['sauerstoff', 'regeneration', 'anti-aging', 'mitochondrien']
  },
  {
    id: 'ewot',
    category: 'Sauerstoff',
    icon: '💨',
    title: 'EWOT – Exercise With Oxygen Therapy',
    short: 'Training mit Sauerstoffmaske. Beim gesunden Menschen auf Meereshöhe ist das Blut bereits fast vollständig gesättigt – Humandaten fehlen.',
    how: '15 min moderates Cardio (Rad, Laufband) während du 90–95 % O2 einatmest. 2–3× pro Woche. Die VO2max veränderte sich in der einzigen passenden randomisierten Studie nicht; zu Gewebesättigung und „Energie“ gibt es zu diesem Protokoll gar keine Humandaten.',
    tags: ['sauerstoff', 'mitochondrien', 'ausdauer', 'energie']
  },
  {
    id: 'iht',
    category: 'Sauerstoff',
    icon: '⛰️',
    title: 'Intermittierendes Hypoxietraining (IHT)',
    short: 'Wechsel zwischen sauerstoffarmer und normaler Luft. Kleine Reha-Studien mit uneinheitlichen Ergebnissen; bei Herz- und Lungenleiden ungeprüft.',
    how: 'Mit Maske oder Gerät zyklisch 5 min reduzierter Sauerstoff (10–14 %), dann die Zwischenphase – in den neueren Protokollen mit 30–40 % Sauerstoff statt Normalluft. 3–5 Zyklen, 3× pro Woche. Gemessen sind eine niedrigere Ruheherzfrequenz und ein niedrigerer systolischer Blutdruck; für bessere Blutwerte und für die Mitochondriendichte am Menschen fehlt der Beleg.',
    tags: ['sauerstoff', 'mitochondrien', 'ausdauer', 'anti-aging']
  },
  {
    id: 'co2-tolerance',
    category: 'Sauerstoff',
    icon: '🎈',
    title: 'CO2-Toleranz-Training',
    short: 'Ein Messwert aus der Atem- und Tauchszene. Dass ein Training darauf die Sauerstoffverwertung verbessert, ist am Menschen nicht gezeigt.',
    how: 'BOLT-Test: 15 min ruhig sitzen, dann ausatmen, Nase zuhalten und die Zeit bis zum ersten Atemreiz messen – nicht bis zur Grenze anhalten. Der Zielwert über 40 s ist eine Konvention aus der Buteyko-Methode, an keinem Ergebnis validiert. Training: 5 min langsame Nasenatmung, dann 10 Schritte mit angehaltener Luft, Wiederholung. Weniger Atemnot ist bei Asthma als Zusatz zur Standardtherapie belegt, nicht allgemein.',
    tags: ['sauerstoff', 'atmung', 'ausdauer', 'sport']
  },
  {
    id: 'altitude-training',
    category: 'Sauerstoff',
    icon: '🏔️',
    title: 'Schlafen in (simulierter) Höhe',
    short: 'Höhenstress stimuliert EPO und rote Blutkörperchen.',
    how: 'Live high, train low: 2000–2500 m schlafen, niedrig trainieren – oder Höhenzelt. Gerechnet wird in Stunden: über 14 Stunden täglich über 3–4 Wochen, also mehr als 300 Stunden. Bergwochenenden über 1.800 m erreichen das bei Weitem nicht und haben keine belegte Blutwirkung.',
    tags: ['sauerstoff', 'ausdauer', 'regeneration']
  },
  {
    id: 'eisen-ferritin',
    category: 'Sauerstoff',
    icon: '🩸',
    title: 'Eisenwerte & Hämoglobin optimieren',
    short: 'Ohne Eisen keine Sauerstofftransport-Kapazität.',
    how: 'Ferritin zusammen mit CRP lesen: Mangel beginnt unter 15 µg/l, bei Entzündung schon unter 70 – einen Zielkorridor für Gesunde gibt die Literatur nicht her. Bei niedrigen Werten: Leber, rotes Fleisch, Hülsenfrüchte. Nimm Eisen jeden zweiten Tag statt täglich – gleicher Ferritinwert, deutlich weniger Magen-Darm-Beschwerden. Überladungsrisiko laut WHO ab 150 µg/l (Frauen) bzw. 200 µg/l (Männer).',
    tags: ['sauerstoff', 'energie', 'tracking']
  },

  // FASTEN – neu, eigene Kategorie
  {
    id: 'fasten-omad',
    category: 'Fasten',
    icon: '🍽️',
    title: 'OMAD – One Meal A Day',
    short: 'Ein Essen am Tag. Die einzige kontrollierte Studie – 15 Teilnehmer, zweimal acht Wochen – fand bei gleichbleibendem Gewicht ungünstige Werte bei Nüchternglukose und Blutfetten.',
    how: 'Eine große, nährstoffdichte Mahlzeit pro Tag, meist nachmittags/abends. Während Fastenphase: Wasser, schwarzer Kaffee, Tee, Elektrolyte. Nur für Fortgeschrittene – erst nach Monaten 16:8.',
    tags: ['fasten', 'autophagie', 'gewicht', 'insulin', 'longevity']
  },
  {
    id: 'fasten-extended',
    category: 'Fasten',
    icon: '🗓️',
    title: '24–72 h verlängertes Fasten',
    short: 'Die bekannten Zeitmarken – Autophagie ab 24 h, Stammzellen ab 72 h – stammen aus dem Mausversuch, nicht vom Menschen.',
    how: '1× pro Monat 24 h oder 1× pro Quartal 72 h Wasserfasten. Elektrolyte (Salz, Kalium, Magnesium) Pflicht. Nicht bei Untergewicht, Schwangerschaft, Stillzeit, Essstörung in der Vorgeschichte, bei Kindern und Jugendlichen, bei Diabetes Typ 1 und nicht unter SGLT-2-Hemmern. Der Nahrungsaufbau danach dauert im Buchinger-Protokoll im Mittel vier Tage von 800 auf 1600 kcal – nicht eine Mahlzeit.',
    tags: ['fasten', 'autophagie', 'anti-aging', 'longevity', 'sirtuine']
  },
  {
    id: 'fasten-fmd',
    category: 'Fasten',
    icon: '🥑',
    title: 'Fasting-Mimicking-Diet (FMD, 5 Tage)',
    short: 'Fettreich, ~800 kcal; dass es proteinarm sein muss, ist nicht belegt. Zwei randomisierte Studien erreichen inzwischen klinische Endpunkte bei Diabetes und Morbus Crohn – harte Endpunkte wie Sterblichkeit fehlen weiterhin.',
    how: '5 Tage am Stück ~800 kcal (Tag 1) und ~500 kcal (Tag 2–5), dominiert von Fett + Gemüse, unter 10 % Protein. 1× pro Quartal. Im Longo-Protokoll sinkt IGF-1 messbar; die Autophagie wurde inzwischen gemessen, allerdings nur in Blutzellen, nicht in Muskel oder Leber. Nicht bei Untergewicht, Essstörung, Schwangerschaft oder unter Diabetesmedikation.',
    tags: ['fasten', 'autophagie', 'anti-aging', 'gewicht', 'longevity']
  },
  {
    id: 'fasten-refeed',
    category: 'Fasten',
    icon: '🍳',
    title: 'Richtig refeeden nach dem Fasten',
    short: 'Der Bruch macht den Unterschied – nicht das Fasten selbst.',
    how: 'Erst eine kleine Portion: Knochenbrühe, weiches Eigelb, fermentiertes Gemüse oder Avocado; Reihenfolge und Wartezeit sind Erfahrungswerte, studienbelegt ist ein mehrtägiger Aufbau von 800 auf 1600 kcal. Kein Zucker, keine großen Kohlenhydratmengen direkt. Bei BMI unter 18,5, starkem Gewichtsverlust, Fasten über 5 Tage, niedrigen Elektrolyten oder unter Insulin, Diuretika und Chemotherapie droht ein Refeeding-Syndrom – dann ärztlich begleiten lassen.',
    tags: ['fasten', 'darm', 'blutzucker', 'verdauung']
  },
  {
    id: 'fasten-elektrolyte',
    category: 'Fasten',
    icon: '🧂',
    title: 'Elektrolyte während Fastenperioden',
    short: 'Der Natriumverlust im Fasten ist physiologisch gut beschrieben – die Zuordnung einzelner Beschwerden zu einem Mangel ist es nicht.',
    how: 'Für die Mengen gibt es keine kontrollierte Studie. Als Orientierung: Magnesium höchstens 250 mg pro Tag aus Nahrungsergänzung (BfR), Natrium nicht ohne Not über den EFSA-Wert von 2 g – bei Bluthochdruck, Herzschwäche oder Nierenerkrankung gar nicht in Eigenregie. Am besten dokumentiert sind Brühen und Säfte im Rahmen von 200–250 kcal pro Tag, nicht Pulver.',
    tags: ['fasten', 'mineralien', 'energie']
  },
  {
    id: 'fasten-frauen',
    category: 'Fasten',
    icon: '♀️',
    title: 'Fasten für Frauen – Zyklusangepasst',
    short: 'Vorsichtsregel, kein Wirknachweis: Zum zyklusangepassten Fasten gibt es keine kontrollierten Studien.',
    how: 'Feste Tagesangaben passen nicht – die Follikelphase schwankt zwischen 10 und 30 Tagen. Die belegbare Vorsichtsregel hängt an der Energiemenge, nicht am Zeitfenster: Unter etwa 30 kcal pro kg fettfreier Masse und Tag wird die LH-Pulsatilität gestört. Zyklus-App nutzen, Stop bei Zyklusverlust.',
    tags: ['fasten', 'hormone', 'zyklus']
  },
  {
    id: 'fasten-koffein',
    category: 'Fasten',
    icon: '☕',
    title: 'Kaffee als Fasten-Booster',
    short: 'Der Hungereffekt ist kleiner und unsicherer als gedacht. Die Autophagie-Verstärkung stammt aus dem Mausversuch – und dort wirkte entkoffeinierter Kaffee genauso gut.',
    how: 'Schwarzer Kaffee oder Espresso während des Fastens ok. Keine Milch, kein Zucker; Süßungsmittel lässt du besser weg, auch wenn eine Insulinausschüttung im Nüchternzustand nicht belegt ist. Bullet-Proof-Coffee bricht technisch das Fasten.',
    tags: ['fasten', 'autophagie', 'fokus']
  },

  // Ergänzungen Atmung
  {
    id: 'atmung-buteyko',
    category: 'Atmung',
    icon: '🌬️',
    title: 'Buteyko-Atmung für Allergiker & Asthmatiker',
    short: 'Bei Asthma zeigen Studien weniger Symptome und weniger Bedarfsmedikation – die Lungenfunktion selbst ändert sich nicht.',
    how: 'Normal durch die Nase ein, leicht aus, kurze Pause – die Studien geben zweimal täglich über Monate an, eine Pausendauer in Sekunden nennen sie nicht. Belegt ist die Wirkung bei Asthma; zu Heuschnupfen und Panikattacken fanden sich keine kontrollierten Studien. Nicht bei akuter Atemnot.',
    tags: ['atmung', 'immun', 'allergie', 'stress']
  },
  // ============ NEU: TRACKING & BIOMARKER ============
  {
    id: 'cgm-tracking',
    category: 'Tracking',
    icon: '📉',
    title: 'Glukose kontinuierlich messen (CGM)',
    short: 'Sensor am Oberarm, 14 Tage Glukoseverlauf. Bei Diabetes belegt, bei Prädiabetes gibt es ein Signal – bei Normoglykämen zeigt sich kein Vorteil.',
    how: 'Abbott FreeStyle Libre 3 oder Dexcom G7 an den Oberarm kleben und 14 Tage lang Spikes, Stressreaktion und Schlaf-Glukose tracken; wie oft im Jahr sinnvoll ist, hat niemand untersucht. Wenn du ein Lebensmittel testest, teste es mehrfach – dieselbe Mahlzeit schwankt bei derselben Person fast so stark wie verschiedene. Bei Gesunden überschätzt der Sensor systematisch, und Kontaktallergien gegen den Kleber sind gut dokumentiert.',
    tags: ['tracking', 'blutzucker', 'ernaehrung', 'longevity']
  },
  {
    id: 'oura-whoop',
    category: 'Tracking',
    icon: '💍',
    title: 'HRV & Schlafphasen mit Ring/Band',
    short: 'Ring und Band erkennen Schlaf und Wachsein gut, die einzelnen Schlafphasen dagegen unzuverlässig – genau die stehen in der Werbung.',
    how: 'Jeden Morgen HRV-Trend checken – ein sinkender Trend spricht für Übertraining, Infekt oder Schlafdefizit, kann bei sehr gut Ausdauertrainierten aber auch mehr Parasympathikus bedeuten. Die Readiness-Schwelle 70 ist eine Herstellerkonvention ohne Studie. Auf die Schlaf-Effizienz als Zielwert kannst du verzichten: Die Geräte unterschätzen sie systematisch – verfolge lieber deine eigene Veränderung über Wochen. Für den nächtlichen HRV-Trend brauchst du mindestens 5 von 7 Nächten.',
    tags: ['tracking', 'schlaf', 'stress', 'ausdauer']
  },
  {
    id: 'blutbild-erweitert',
    category: 'Tracking',
    icon: '🩸',
    title: 'Erweitertes Biomarker-Panel',
    short: 'hsCRP, HbA1c, ApoB, Nüchterninsulin, Vitamin D – das Biohacker-Basispanel; dass ein jährliches Intervall besser ist als ein längeres, hat keine Studie gezeigt.',
    how: 'Über Hausarzt oder IGeL: hsCRP (Entzündung), HbA1c (Langzeitzucker), ApoB (zählt die atherogenen Partikel und liefert Information, die LDL-C nicht enthält), Nüchterninsulin plus Nüchternglukose (für HOMA-IR), Homocystein (Marker für B12- oder Folatmangel, nicht fürs Herz-Kreislauf-Risiko), 25-OH-Vitamin D, TSH, Ferritin, Testosteron (Männer).',
    tags: ['tracking', 'longevity', 'herz', 'hormone']
  },

  // ============ NEU: KOGNITION & BRAIN ============
  {
    id: 'nootropic-stack',
    category: 'Stress & Geist',
    icon: '🧠',
    title: 'Nootropika-Starter-Stack',
    short: 'Koffein + L-Theanin als sicherer Einstieg; das Verhältnis 1:2 ist nie geprüft worden. Die BDNF-Wirkung der Löwenmähne stammt aus Zell- und Tierversuchen.',
    how: 'Morgens: 100 mg Koffein + 200 mg L-Theanin. Fokus-Peaks: Alpha-GPC höchstens in der von der EFSA bewerteten Menge von 203,7 mg pro Tag – darüber liegt keine Sicherheitsbewertung vor. Langfristig (8+ Wochen): 1 g Löwenmähne täglich; der Weg über Nervenwachstum ist beim Menschen nicht gemessen. Nicht täglich stapeln – Toleranz vermeiden.',
    tags: ['fokus', 'nootropic', 'gehirn', 'energie']
  },
  {
    id: 'dual-n-back',
    category: 'Stress & Geist',
    icon: '🎯',
    title: 'Dual-N-Back fürs Arbeitsgedächtnis',
    short: 'Arbeitsgedächtnistraining, das in der Szene als Intelligenztraining gilt – die Meta-Analysen zeigen: Man wird in der Aufgabe besser, nicht im Denken.',
    how: 'Apps wie „Brain Workshop“ oder „IQ Boost“. 20 min 4× pro Woche über 4 Wochen ist eine Praxisangabe – die Meta-Analyse fand keinen Effekt der Trainingsdosis. Ein Schwellenlevel wurde nie untersucht, und der Transfer auf Arbeitsgedächtnisaufgaben ist klein und unabhängig vom erreichten Level.',
    tags: ['gehirn', 'fokus', 'gedaechtnis', 'nootropic']
  },

  // ============ NEU: HORMONE ============
  {
    id: 'testosteron-natural',
    category: 'Ernährung',
    icon: '💪',
    title: 'Testosteron natürlich anheben',
    short: 'Krafttraining, Schlaf, Zink bei Mangel: für die Bausteine gibt es Daten. Die oft genannten „80 % des Hebels" sind geschätzt.',
    how: '1) Krafttraining 3×/Woche (Compound-Übungen: Kniebeuge, Kreuzheben) – der Nutzen läuft über die Körperzusammensetzung, nicht über den Hormonschub nach der Einheit. 2) 7–9 h Schlaf. 3) Zink 15 mg bei nachgewiesenem Mangel; für Bor und für eine Abenddosis Magnesium gibt es beim Mann keine passende Studie. 4) Fett nicht unter 25 % der Kalorien (Cholesterin = Testosteron-Vorläufer). 5) Starken Alkoholkonsum meiden und Gewicht abbauen – je mehr Gewichtsverlust, desto größer der Anstieg, eine Schwelle bei 20 % Körperfett gibt es nicht.',
    tags: ['hormone', 'testosteron', 'muskel', 'schlaf']
  },
  {
    id: 'zyklus-tracking',
    category: 'Tracking',
    icon: '🌙',
    title: 'Training am Zyklus ausrichten (Frauen)',
    short: 'Follikelphase Kraft, Lutealphase Ausdauer – so die Lehre. Übersichtsarbeiten finden nur kleine Effekte bei großen individuellen Unterschieden.',
    how: 'Feste Tagesangaben passen nicht: Die Follikelphase dauert im Mittel 17 Tage mit einer Spanne von 10 bis 30, die Lutealphase ist mit rund 12 Tagen die stabilere. Die einzige Phase mit einem messbaren – und winzigen – Nachteil ist die Blutung selbst; vor der Periode unterscheidet sich nichts. Für phasenabhängige Kohlenhydrat- oder Schlafempfehlungen gibt es keine Studie. Tracking am ehesten symptothermal, kalenderbasierte Apps schneiden in der Bewertung am schlechtesten ab.',
    tags: ['hormone', 'sport', 'tracking']
  },

  // ============ NEU: LONGEVITY & AUTOPHAGY ============
  {
    id: 'senolytikum-pulse',
    category: 'Longevity',
    icon: '🧬',
    title: 'Monatlicher Senolytikum-Puls',
    short: 'Fisetin hochdosiert an 2 aufeinanderfolgenden Tagen pro Monat. Die placebokontrollierte Studie, die genau dieses Schema prüft, läuft seit dem 6.2.2018 an 40 Frauen – und hat bis heute kein Ergebnis berichtet.',
    how: 'Das Mayo-Protokoll (AFFIRM) arbeitet mit Fisetin allein an 2 aufeinanderfolgenden Tagen in 2 aufeinanderfolgenden Monaten; Quercetin gehört nicht dazu, sondern zur getrennten Kombination mit dem verschreibungspflichtigen Dasatinib, und Apigenin ist mit senomorpher statt senolytischer Wirkung eine andere Wirkklasse. Für die Einnahme morgens mit Fett gibt es keinen Beleg. Entscheidend ist der Stand der Belege: Im unabhängigen Interventions-Testprogramm verlängerte Fisetin 2023 weder die Lebenszeit – in keinem Geschlecht, bei keinem der beiden Schemata – noch senkte es die Seneszenzmarker in Leber, Niere oder Gehirn. Was an Positivem berichtet wird, stammt aus der Maus oder aus offenen Pilotstudien mit der verschreibungspflichtigen Kombination bei Erkrankten, nicht aus diesem Protokoll. Die geprüfte Studiendosis liegt zudem weit über dem, was handelsübliche Kapseln enthalten.',
    tags: ['longevity', 'senolytisch', 'anti-aging']
  },
  {
    id: 'protein-longevity',
    category: 'Ernährung',
    icon: '🥩',
    title: 'Protein nach Alter anpassen',
    short: 'Unter 50 J.: 1,2–1,6 g/kg. Fachgesellschaften nennen für gesunde Ältere 1,0–1,2 g/kg – die Longevity-Szene 1,6–2,2 g/kg.',
    how: 'Über 50: mehr Protein anstreben – der „mTOR-Bremse wegen Longevity“-Ansatz ignoriert das Sarkopenie-Risiko. Peter Attia empfiehlt 1,6–2,2 g/kg pro Tag, verteilt auf 3–4 Mahlzeiten à 30–50 g; das ist eine Longevity-Empfehlung, keine Leitlinie. Die Leucin-Schwelle von 2,5 g pro Mahlzeit ist eine Faustregel, keine gemessene Schwelle.',
    tags: ['longevity', 'muskel', 'ernaehrung']
  },

  // ============ NEU: HERZ-KREISLAUF ============
  {
    id: 'zone2-mito',
    category: 'Bewegung',
    icon: '❤️',
    title: 'Zone-2-Cardio 3×/Woche',
    short: 'Intensität, bei der du noch reden kannst – baut Mitochondriendichte auf. Dass Zone 2 dafür die beste ist, ist nicht belegt.',
    how: '3× pro Woche 45–60 min in der Intensität, in der du noch sprechen kannst – Radfahren, zügig Gehen, Ruderergometer. Die Faustformeln (60–70 % Maximalpuls, „180 minus Alter") sind grobe Näherungen und treffen bei vielen Menschen daneben; exakt geht es nur über einen Laktat- oder Spiroergometrie-Test.',
    tags: ['ausdauer', 'mitochondrien', 'herz', 'longevity']
  },
  {
    id: 'glp1-muskel',
    category: 'Bewegung',
    icon: '💪',
    title: 'Muskelerhalt unter GLP-1',
    short: 'Unter Abnehmspritzen geht neben Fett auch fettfreie Masse verloren, in STEP 1 rund 38 Prozent des Gewichtsverlusts. Ein guter Teil davon ist Wasser und Glykogen, nicht Muskel. Der belegteste Gegenzug bleibt Krafttraining mit ausreichend Eiweiß.',
    how: 'Zieh während der gesamten Gewichtsabnahme zwei Dinge parallel hoch: Krafttraining für die großen Muskelgruppen und eine Eiweißzufuhr, die nicht mit der Kalorienmenge mitsinkt. Diese Kombination hat mehr Untersuchungen hinter sich als beide Medikamentenkandidaten zusammen und wirkt unabhängig davon, wodurch das Gewicht sinkt. Miss dazu Funktion statt nur Gewebe, also Treppensteigen und Aufstehen aus dem Stuhl: In der einzigen Studie mit Funktionsmessung, QUALITY mit 168 Menschen ab 60 Jahren über 16 Wochen, hatten unter Enobosarm rund 54 Prozent weniger Teilnehmer einen deutlichen Leistungsabfall. Belegt ist außerdem, dass der gemessene Verlust an fettfreier Masse nah an dem liegt, was jede Diät kostet, etwa 25 Prozent nach alter Faustregel gegenüber 38 Prozent in STEP 1 und etwa 25 Prozent unter Tirzepatid, und dass DXA dabei Wasser, Glykogen und Organgewebe mitzählt. Nicht belegt ist, dass die Medikamente gegen den Verlust am Ende Kraft oder Selbstständigkeit erhalten: Bimagrumab senkte in BELIEVE den Verlust fettfreier Masse von 6,9 auf 2,3 Prozent, gemessen wurde aber ebenfalls mit DXA, und 14 bis 21 Prozent der Teilnehmer brachen die Behandlung ab.',
    tags: [
      'GLP-1',
      'Semaglutid',
      'Tirzepatid',
      'Muskelerhalt',
      'Krafttraining',
      'Eiweiß',
      'Körperzusammensetzung',
      'DXA',
      'Bimagrumab',
      'Enobosarm',
      'Sarkopenie'
    ]
  },
  {
    id: 'luftqualitaet',
    category: 'Atmung',
    icon: '🌬',
    title: 'Luftqualität und Feinstaub',
    short: 'Feinstaub führt die Global-Burden-of-Disease-Analyse 2021 mit 8 Prozent aller verlorenen gesunden Lebensjahre an, vor Bluthochdruck und Rauchen, und eine harmlose Schwelle gibt es nicht. Die stärkste Quelle in der eigenen Wohnung ist der Herd. HEPA-Filter senken Feinstaub und Blutdruck, harte Endpunkte hat niemand gemessen.',
    how: 'Fang bei der Quelle an: beim Braten den Dunstabzug einschalten und das Fenster öffnen, denn eine Seattler Messstudie fand beim standardisierten Anbraten Spitzen von 200 bis 1400 Mikrogramm pro Kubikmeter in Küche und Wohnzimmer, die je nach Lüftung 1 bis 10 Stunden brauchen, bis sie abklingen. Bei einem Gasherd kommt Stickstoffdioxid dazu, das eine kleine Küche ohne Abzug binnen Minuten über den amerikanischen Stundengrenzwert bringt. Ein HEPA-Gerät dimensionierst du über die Reinluftleistung CADR: Die amerikanische Umweltbehörde rechnet mit rund 110 Kubikmetern pro Stunde je 9 Quadratmeter, ein Schlafzimmer mit 20 Quadratmetern braucht also etwa 240, was Geräte ab rund 150 Euro oft nur auf der lautesten Stufe schaffen. In den Studien liefen die Geräte durchgehend im Schlaf- und Wohnraum, in Detroit schnitt ein billigerer HEPA-Typ ähnlich ab wie das teurere Gerät, und in Seattle wirkte das Gerät am besten nahe an der Quelle, also in der Küche. Belegt ist damit die Konzentrationssenkung, in Shanghai um 57 Prozent, in Detroit von 15 auf 7 Mikrogramm, und ein niedrigerer systolischer Blutdruck von etwa 2 bis 4 Millimetern Quecksilbersäule über mehrere randomisierte Studien und zwei Metaanalysen. Nicht belegt ist, dass das Herzinfarkte oder Todesfälle verhindert; die größte Studie mit 540 Schwangeren in Ulan-Bator senkte den Feinstaub um 29 Prozent, ohne das Geburtsgewicht zu verändern. Finger weg von Geräten, die Ozon erzeugen, also Ionisatoren, Plasma und manchen UV-Geräten. Gegen Kohlendioxid hilft kein Filter, sondern nur das Fenster.',
    tags: [
      'Feinstaub',
      'PM2,5',
      'Innenraumluft',
      'HEPA',
      'Luftreiniger',
      'Kochen',
      'Dunstabzug',
      'Lüften',
      'Blutdruck',
      'Kohlendioxid',
      'Umwelt'
    ]
  }
];

const TIP_CATEGORIES = [
  'Alle', 'Schlaf', 'Licht', 'Kälte & Hitze', 'Atmung', 'Sauerstoff',
  'Ernährung', 'Fasten', 'Bewegung', 'Stress & Geist', 'Routine', 'Tracking', 'Longevity'
];
