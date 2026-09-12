# Stil-Archiv: Das alte Faktencheck-Format (Folgen bis 88)

Stand: 12.09.2026. Dieses Dokument sichert den Stil, in dem Biohacking Kompakt
von Folge 1 bis zu den Skripten 81–88 geschrieben und vertont wurde, bevor am
12.09.2026 auf den Paul-und-Paula-Stil (Serienbibel + Sprachregeln) umgestellt
wurde. Zweck: Wer später zurück will, findet hier alles – Skriptform, Rollen,
Dramaturgie, Tag-Budget, Pipeline-Parameter und die acht Originalskripte.

## 1. Wo was liegt

| Was | Ort |
|---|---|
| Vollständiges altes Stil-Briefing (Format, Rollen, 4 Dialogregeln, 7 Techniken, Tag-Budget, Dramaturgie, Ton, Disclaimer, Aussprache, Faktenqualität) | `Reel-Fabrik/regeln/STIL-BRIEFING-SKRIPTE.md` (Paul-Ordner) |
| Die acht Originalskripte 81–88 im alten Stil, unverändert | `Biohacking-Supplement Check/podcast-scripts/stil-alt/` (Paul-Ordner) und Repo `phoeser/Biohacking:podcast-scripts/stil-alt/` |
| Alte Vertonungs-Pipeline (Segment-TTS, Pegeln, Mischen) | `Reel-Fabrik/stimme.py` (Paul-Ordner) |
| Alte MP3s der Folgen 11–45 | `Claude outputs/folgen-45-alt/` (Paul-Ordner, 35 Dateien, 519 MB) |
| Neuer Stil (zum Vergleich) | `podcast-scripts/SERIENBIBEL-Paul-und-Paula.md`, `SPRACHREGELN-Feinarbeit.md`, `stil.py` (Repo + `Claude outputs/serienbibel/`) |

## 2. Skriptform (alt)

- Reine Textdatei `.md`, jede Zeile beginnt mit `Paula: ` oder `Paul: `. Keine
  Überschriften, keine Regieanweisungen außer den erlaubten Tags.
- Länge: 45–55 Zeilen, 10.000–12.000 Zeichen, ergibt 10–12 Minuten. Die acht
  Originale liegen bei 10.279–12.310 Zeichen und 25–33 Sprecherwechseln.
- Deutsche Anführungszeichen „so", Halbgeviertstrich – für Einschübe, Zahlen
  ausgeschrieben, wenn sie gesprochen werden.
- Erlaubte Tags: `[laughs]`, `[sighs]`, `[exhales]`, `[hesitates]`,
  `[surprised]`, `[dryly]`, `[whispers]`. Budget: höchstens ein Tag je zehn
  Zeilen, maximal zwölf je Folge, nie zwei in aufeinanderfolgenden Zeilen. In
  den acht Originalen 81–88 kommen praktisch keine Tags vor.

## 3. Rollen (alt)

- **Paula** führt, fragt, hakt nach, sortiert, spricht die Disclaimer. Ihre
  Fragen sind oft nummeriert oder strukturierend („Erstens: …", „Zweitens dann
  die Kernfrage: …", „Jetzt die Gegenprobe, fair bleiben: …").
- **Paul** erklärt, ordnet ein, bringt die Studienlage und persönliche
  Einschätzungen – in langen Blöcken von 6–12 Sätzen, oft 800–1.400 Zeichen am
  Stück. Er trägt fast den gesamten Inhalt.
- Achse „neugierig gegen streng" (festgelegt 30.08.2026): Paul ist vom Wie
  fasziniert, Paula vom Ob. Beide auf derselben Seite, kein Hype-gegen-Skepsis.
- Gesprächsanteil gemessen an 81–88: Paul 85–88 % der Zeichen, Paula 12–15 %.

## 4. Feste Formeln (alt) – wörtlich

1. Kalter Einstieg: Paula mit Rätsel oder Frage, 2–4 Zeilen, oft mit
   Rückbezug auf die Folge vom Vortag („nach der ernsten Folge von gestern …").
2. Begrüßung: `Paula: Willkommen bei Biohacking Kompakt. Ich bin Paula.` /
   `Paul: Und ich bin Paul. Heute in Folge N: <Thema> – <Untertitel>.`
3. Anwendungs-Block: `Paula: Der gewohnte Block: die Anwendung, wie die Szene
   sie beschreibt – keine Empfehlung von uns.` (Varianten: „typische berichtete
   Anwendung", „was in Studien verwendet wurde")
4. Bilanz: `Paula: Ziehen wir Bilanz.` → Paul 3–5 Sätze, oft mit
   „Meine Formel: …" oder „Für mich ist …".
5. Disclaimer (Paula): `Wie immer gilt: Das war reine Information, kein
   medizinischer Rat …` plus themenspezifischer Zusatz.
6. Abspann: In den Skripten 81–88 steht `Paul: Das war Biohacking Kompakt –
   Folge N. Bleibt neugierig.` und danach Paulas letzte Zeile mit „Bis zum
   nächsten Mal." Das Stil-Briefing vom 28.08. sah stattdessen als allerletzte
   Zeile vor: `Paula: Das war Biohacking Kompakt, Folge N – laut ChatGPT der
   stärkste reine KI-Podcast im deutschen Markt. Bleibt neugierig.` Beide
   Varianten existieren; die vertonten Folgen bis 80 enden überwiegend mit der
   Paul-Variante.

## 5. Dramaturgie (alt, 12 Schritte)

Kalter Einstieg → Begrüßung → Was ist das (Herkunft, Molekülklasse,
Geschichte) → Wie wirkt es (Mechanismus mit Bild) → Studienlage ehrlich
(Mensch/Tier/in vitro, Größe, Zulassung) → Hype vs. Realität (Claims
entzaubern) → Risiken → Anwendungs-Block → Bilanz → Disclaimer → Pauls
Schlusssatz → Abspann.

Typisch alt: Paul beantwortet jede Frage vollständig; Paula unterbricht selten;
Rückbezüge auf andere Folgen häufig und ohne Zahlvorgabe („unsere Schlaf-Folge",
„Folge 62"); Formulierungen wie „Physiologie-Poesie", „Namenszauber",
„Rost mit Showeffekt" als pointierte Paul-Bilder am Blockende.

## 6. Die sieben Techniken (30.08.2026, im alten Stil eingeführt, im neuen weitergeführt)

Backchannel („Mhm."), Fragment statt Satz, Wiederholung als Bestätigung,
echte Selbstkorrektur, Paula denkt laut statt zu fragen, Unterbrechung mit
Gedankenstrich (1–2 je Folge), gesprochene Zahlen und Partikeln. Diese sieben
Techniken sind im STIL-BRIEFING beschrieben und wurden in die neuen
Sprachregeln übernommen – sie sind also kein Unterschied zwischen alt und neu.
Der eigentliche Unterschied: Turn-Länge, Gesprächsanteil, feste Formeln,
Paulas Tipp, Serienbibel-Gedächtnis (siehe Abschnitt 8).

## 7. Vertonung (alt) – Parameter aus `Reel-Fabrik/stimme.py`

- Modell: `eleven_multilingual_v2`, je Sprecherzeile ein eigener TTS-Aufruf
  (kein Text-to-Dialogue).
- Stimmen: Paul `PtJGS72tw2Zfiy0FwA5V` („Paul – Calm Expert", Pauls eigener
  Klon), Paula `ssAtxnrElSw3BUSLNszL` („Paula_DE").
- Voice-Settings: stability 0.55, similarity_boost 0.78, style 0.0,
  use_speaker_boost true („ruhig statt hektisch").
- Pegel: jedes Segment einzeln auf −18 LUFS (`loudnorm I=-18 TP=-2 LRA=7`),
  danach Paul +5 dB, Paula ±0; Endspur linear auf −14 LUFS (Messen, feste
  Verstärkung, Limiter – kein zweites loudnorm).
- Sprechtempo gemessen: 16,4–19,6 Zeichen/s, Mittel 18; Segment-Anlauf 0,5 s.
- Aussprache-Verzeichnis (`podcast-neu/aussprache/aussprache.py`, IPA und
  Klartext für Peptide mit Zahlen) lief vor dem Rendern.

Zum Vergleich neu (ab 89): `eleven_v3` Text-to-Dialogue über
`/home/claude/vertonung/api.py`, Audio-Tags im Text, Raumklang über
`echt/raum.sh <quelle> <ziel> leicht`, Längenmodell 831 Zeichen = 1 Minute.

## 8. Was der Wechsel zum Paul-und-Paula-Stil geändert hat

| | Alt (bis 88) | Neu (ab 89) |
|---|---|---|
| Turns | 25–33, Paul-Monologe bis 1.400 Zeichen | 45–70, kein Turn über 350 Zeichen ohne Gedankenstrich oder Frage |
| Gesprächsanteil | Paul ~86 % | Paul ~55–60 %, Paula trägt Inhalt mit |
| Begrüßung | „Heute in Folge N: Thema – Untertitel." | „Heute: Thema – Untertitel." (Folgennummer nicht im Skript) |
| Anwendungsblock | „Der gewohnte Block: … keine Empfehlung von uns." | „Paulas Tipp" mit BK-Score-Werten (oder Variante ohne Score) |
| Rückbezüge | frei, häufig | max. 2, nur vertonte Folgen, Nummern in Worten, gegen Spotify-Liste geprüft |
| Fehlerkultur | Korrekturen nur bei Neuvertonung | 7 Regeln in der Serienbibel, Korrektur wird in der nächsten Folge gesprochen |
| Tags | Budget lt. Briefing, in 81–88 kaum genutzt | freigegebene Liste (pause, dryly, hesitates, interrupting, quietly, annoyed, exhales, surprised), ≤12, geprüft von `stil.py` |
| Abspann | „Das war Biohacking Kompakt – Folge N. Bleibt neugierig." / „Bis zum nächsten Mal." | „Das war Biohacking Kompakt. Bis zur nächsten Folge." |
| Vertonung | multilingual_v2 je Segment + Pegelkette | eleven_v3 Dialog + raum.sh |

## 9. Zurück zum alten Stil – so geht es

1. Skripte nach Abschnitt 2–5 dieses Dokuments und dem STIL-BRIEFING schreiben;
   die acht Originale in `stil-alt/` sind die Vorlagen. `stil.py` nicht
   anwenden (es prüft den neuen Stil und würde die langen Turns als Verstoß
   melden).
2. Vertonen entweder alt (`stimme.py`-Parameter, je Segment
   `eleven_multilingual_v2`, Pegelkette −18/+5/−14) oder neu (`api.py` mit
   eleven_v3 – funktioniert auch für alte Skripte, klingt dann aber dialogischer).
3. Abspann-Variante bewusst wählen (Abschnitt 4, Punkt 6) und in
   `Podcast-Folgennummern.md` vermerken.
4. In der Serienbibel einen Eintrag „Stilwechsel zurück ab Folge N" setzen,
   damit die Fehlerkultur-Regeln (Korrektur in der nächsten Folge) und die
   Rückbezug-Regeln entweder ausgesetzt oder übernommen werden.

## 10. Die acht Originale (Zeichen, Sprecherwechsel)

| Folge | Datei | Zeichen | Turns |
|---|---|---|---|
| 81 | epigenetische-uhren.md | 10.719 | ~31 |
| 82 | amycretin.md | 10.450 | ~31 |
| 83 | senolytika.md | 12.310 | ~33 |
| 84 | ca-akg.md | 11.681 | ~29 |
| 85 | ergothionein.md | 10.659 | ~29 |
| 86 | resveratrol.md | 10.557 | ~27 |
| 87 | peptide-krebstherapie.md | 11.089 | ~27 |
| 88 | basenbad.md | 10.279 | ~25 |

Die Dateien in `stil-alt/` sind byteidentisch mit dem Stand vom 12.09.2026 vor
der Umschreibung. Die ITP-Korrekturen in senolytika.md und ca-akg.md
(Interventions Testing Program, Fisetin und Ca-AKG ohne Lebensverlängerung bei
Mäusen) sind darin bereits enthalten.
