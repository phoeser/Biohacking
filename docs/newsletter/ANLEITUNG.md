# Newsletter – Ablauf jeder Ausgabe

Wöchentlich, Absender „Biohacking Kompakt“ <kontakt@biohackingkompakt.de>. Entwurf samstags, Versand erst nach Pauls ausdrücklicher Freigabe. Jede Ausgabe steht danach unter `/newsletter/<datum>.html`.

## 1. Material sammeln (Zeitraum: die 7 Tage bis einschließlich Versandtag)
- **Podcastfolgen:** `folge/<nr>.html` mit `datePublished` im Zeitraum (es erscheint täglich eine Folge; Folgen mit Datum in der Zukunft nie nennen). Titel aus `<h1>`, Kernaussage aus „Kernaussagen“/Lead der Seite.
- **Neu auf der Seite:** `neu.xml` (pubDate im Zeitraum), `js/data/aenderungen.js`, neue `/problem/`- und `/vergleich/`-Seiten. Zusammenfassen statt aufzählen, wenn es mehr als fünf sind (z. B. „20 neue Vergleiche, darunter …“, Link auf `/vergleich/`).
- **Studien der Woche:** 2–3 neue Humanstudien (RCT, Meta-Analyse oder große Kohorte) aus den letzten rund 14 Tagen zu Themen, die es in der Datenbank gibt. Selbst recherchieren (PubMed, Journals); jede PMID per Aufruf von `https://pubmed.ncbi.nlm.nih.gov/<PMID>/` prüfen (Titel, Journal, Jahr). Zahlen exakt aus dem Abstract. `url` = PubMed-Link, `mehr_url` = passende Themenseite.

## 2. Schreiben: `docs/newsletter/<JJJJ-MM-TT>.json`
Format siehe Kopf von `newsletter.py`. Abschnitte in dieser Reihenfolge: „Neue Podcastfolgen“, „Studien der Woche“, „Neu auf der Seite“.
- Betreff: konkret, höchstens 70 Zeichen, nennt das stärkste Thema der Woche. Keine Ausrufezeichen, keine Clickbait-Fragen.
- Vorschau (Preheader): ein Satz, 60–110 Zeichen.
- Intro: 2–3 Sätze, Kernaussage zuerst (Pyramidenprinzip), Du-Form.
- Je Folge ein Satz mit der Kernaussage. Je Studie 2–4 Sätze: was untersucht, was herauskam (mit Zahl), wie belastbar, wo die Daten aufhören.
- Schluss: Einladung, auf die Mail zu antworten (Fragen, Themenwünsche). Antworten landen in kontakt@.
- Ton wie auf der Seite (CLAUDE.md „Ton“): erst was trägt, dann wo die Daten aufhören. Echte Umlaute, „…“, keine Marketingsprache.
- **Verboten:** Dosierungen oder Einnahmeschemata bei nicht zugelassenen Stoffen (§ 3a HWG; im Zweifel nie Dosis), Links zu Shops, Peptid- oder Graumarkt-Anbietern, Rabattcodes, erfundene Erfahrungen, Hinweise auf die Produktionsweise der Folgen. Adon Health nur als Diagnostik.

## 3. Bauen und prüfen
`python3 newsletter.py` (baut Ausgabe, Archiv, Sitemap), danach `beacon.py`, `webmcp.py`, `konten.py`, `entitaet.py`, `meta.py`. Mailfassung: `python3 newsletter.py --mail <datum> <ordner>`. Prüfen: gültiges JSON, kein `!`, kein Treffer für `\d\s?(mg|µg|mcg|IE|IU)\b`, alle internen Links existieren.

## 4. Freigabe
1. Paul die Mailfassung als Datei zeigen (und Betreff + Vorschau im Chat).
2. Wenn Paul zustimmt: **Testversand** nur an ihn (`nur_an: ["phoeser@web.de"]`, er muss bestätigter Abonnent sein). Er prüft die echte Mail.
3. Erst nach seinem „freigeben“ an alle.

## 5. Veröffentlichen und versenden
- Archivseite deployen: nur `docs/newsletter/<datum>.json`, `newsletter/<datum>.html`, `newsletter/index.html`, `sitemap.xml` (GitHub-Konnektor: Branch, Dateien, PR, Squash-Merge). Live per Byte-Vergleich prüfen, dann `indexnow.py newsletter/<datum>.html newsletter/index.html`.
- Versand auf dem Rechner (Schlüssel bleibt dort): Mailfassung nach `Biohacking/.deploy/_arbeitsdateien/newsletter-<datum>.json` legen, dann `python3 ~/nl/worker/admin.py versand <pfad>` (für den Test mit `nur_an` im JSON). Fehlt `~/nl/worker`, Dateien aus `newsletter-worker/` im Repo nehmen.
- Kontrolle: Make-Szenario 10062851 (Versand), Operationen = Empfänger + 2. `python3 ~/nl/worker/admin.py statistik` für die Zahlen.
- In `nov2/STAND.md` bzw. der Sicherung festhalten: Datum, Nummer, Empfänger, Fehler.
