# Biohacking Kompakt — Projektdokumentation

Stand: 13.09.2026 · Diese Datei ist die maßgebliche Beschreibung des Projekts.
`CLAUDE.md` enthält die harten Arbeitsregeln, `DEPLOY.md` den Deploy-Weg im
Detail. Bei Widersprüchen gilt diese Datei.

---

## 1. Was das Projekt ist

**biohackingkompakt.de** ist eine deutschsprachige Informationsseite zu
Longevity, Supplements, Peptiden, Behandlungen und Messmethoden. Dazu erscheint
täglich eine Podcastfolge.

Das Unterscheidungsmerkmal ist nicht die Themenauswahl — die haben andere auch —
sondern dass **jede Aussage eine offengelegte Evidenzeinordnung trägt**. Die
Seite sagt bei jeder Substanz ausdrücklich, was belegt ist und wo die Daten
aufhören, inklusive der Fälle, in denen das unbequem ist.

**Betreiber:** Paul Höser, gewerblich (USt-IdNr. im Impressum).
**Kontakt nach außen:** kontakt@biohackingkompakt.de.

### Der Ton — die wichtigste Regel

Biohacking-Seite, **kein Debunking-Blog.** Die Reihenfolge ist immer: erst
benennen, was trägt, dann sagen, wo die Daten aufhören. Belegte Einschränkungen
bleiben ungeschönt drin — sie sind das Produkt — aber sie stehen *nach* der
Substanz und bekommen nicht mehr Raum als sie.

Deutsch, Du-Form, echte Umlaute, „so" als Anführungszeichen. Keine
Ausrufezeichen, keine Marketingsprache, keine Emojis im Fließtext.

---

## 2. Architektur

Eine **statische Single-Page-App** aus Vanilla HTML/CSS/JS. Kein Build-Schritt:
was im Repo liegt, ist exakt das, was der Browser lädt.

```
phoeser/Biohacking (main)  →  GitHub Pages  →  Cloudflare DNS  →  biohackingkompakt.de
```

- **Hosting:** GitHub Pages, `CNAME` im Repo-Root
- **DNS:** Cloudflare (Nameserver-Wechsel am 22.08.2026, weil der All-Inkl-
  Privattarif weder SSL noch DNS-Bearbeitung enthält)
- **Domains:** biohackingkompakt.de ist die Hauptdomain; biohacking-kompakt.de,
  www und phoeser.github.io/Biohacking leiten per 301 dorthin
- **E-Mail:** bleibt bei All-Inkl (Kundennr. 882470, Account w021f7c6)
- **Ein Proxy:** Cloudflare-Worker `bhc-proxy` für die Gemini-Aufrufe, mit
  Rate-Limiting (30 Anfragen/60 s je IP). Kein API-Key im Client.

### Zwei Auslieferungswege für dieselben Inhalte

Das ist der zentrale Punkt, an dem am meisten schiefgehen kann:

1. **Die App** (`index.html` + `js/app.js`) liest die Daten zur Laufzeit aus
   `js/data/*.js`. Routing über Hash (`#experimental/semax`).
2. **Statische Seiten** unter `/thema/`, `/tipp/`, `/vergleich/`, `/glossar/`
   werden aus denselben Daten **vorab erzeugt** und liegen als fertiges HTML im
   Repo. Sie existieren für Google und für LLM-Zitierbarkeit.

**Wer Daten ändert, muss beide Wege nachziehen.** Eine Korrektur nur in
`js/data/` lässt die statische Seite falsch stehen und umgekehrt.

---

## 3. Der Datenbestand

| Datei | Einträge | Inhalt |
|---|---|---|
| `js/data/supplements.js` | 84 | Supplements |
| `js/data/experimental.js` | 77 | Peptide und Experimentelles (UI-Name „Peptide") |
| `js/data/therapies.js` | 49 | Behandlungen und Verfahren |
| `js/data/tips.js` | 57 | Tipps und Routinen |
| `js/data/khavinson.js` | 9 | Khavinson-Bioregulatoren |
| `js/data/erfahrungen.js` | 20 | Erfahrungsberichte + SHOPS |
| `js/data/podcast.js` | 102 | Podcastfolgen mit Sprungzielen |
| `js/data/blutwerte.js` | 27 | Blutmarker mit Referenz- und Zielbereichen |
| `js/data/scores.js` | 256 | BK-Scores (Konstante heißt `BK_SCORES`) |
| `js/data/signalwege.js` | — | Signalwege |
| `js/data/labortests.js` | — | Laborprüfer, Chargen |
| `js/data/products.js` | 3 | Wearable-Empfehlungen |
| `js/data/goals.js` | — | Symptom- und Zielgruppen |
| `js/data/aenderungen.js` | — | Änderungsprotokoll |

**Route `experimental` nie umbenennen** — sie steckt in Hunderten von Links.

### Statische Seiten

220 Themenseiten · 58 Tipp-Seiten · 16 Vergleichsseiten · 6 Glossareinträge ·
301 URLs in der `sitemap.xml`.

---

## 4. Der BK-Score

Fünf Achsen, je 0–10, **subjektive Einschätzung des Wissensstands, nicht der
Substanz.** „Sicherheits-Datenlage 9" heißt: gut untersucht — nicht: harmlos.

| Achse | Feld | Was sie misst |
|---|---|---|
| Human-Evidenz | `evidenz` | Wie gut am Menschen untersucht |
| Mechanismus | `mechanismus` | Wie gut der Wirkweg verstanden ist |
| Sicherheits-Datenlage | `sicherheit` | Wie gut die Sicherheit untersucht ist |
| Hype-Abstand | `hype` | Abstand zwischen Versprechen und Beleg |
| Anwendungserfahrung | `anwendung` | Seit wann, wie breit am Menschen angewendet |

Die fünfte Achse kam am 29.08.2026 auf Pauls Einwand hin dazu: lange
Anwendungspraxis (etwa Khavinson-Peptide) darf nicht wie Unerprobtheit aussehen.

### Die Label-Falle

**`label` steht nur in `scores.json`. `scores.js` leitet es zur Laufzeit über
`bkLabel()` her.** Wer eine Achse ändert, muss das Label mit derselben Regel neu
rechnen, sonst widersprechen sich App und statische Seite. Die Regel
(`js/data/scores.js`, `function bkLabel`):

```
richtung negativ + evidenz ≥ 6  → Gut untersucht – Wirkung nicht bestätigt
richtung negativ + evidenz ≥ 4  → Untersucht – Nutzen nicht gezeigt
evidenz ≥ 8 und hype ≥ 6        → Gut belegt
evidenz ≥ 8                     → Gut belegt, stark überhöht beworben
evidenz ≥ 6                     → Belegt, mit Einschränkungen
evidenz ≥ 4                     → Dünne Humanevidenz
anwendung ≥ 6                   → Lange angewendet, kaum untersucht
evidenz ≤ 1 + belegLuecke unveroeffentlicht → Am Menschen geprüft, Ergebnisse unveröffentlicht
evidenz ≤ 1                     → Nicht am Menschen untersucht
hype ≤ 3                        → Hype weit vor Evidenz
sonst                           → Experimentell
```

Verteilung heute: Dünne Humanevidenz 73 · Belegt, mit Einschränkungen 52 ·
Nicht am Menschen untersucht 37 · Hype weit vor Evidenz 25 · Lange angewendet,
kaum untersucht 22 · Gut belegt, stark überhöht beworben 16 · Gut belegt 15 ·
Gut untersucht – Wirkung nicht bestätigt 10 · Untersucht – Nutzen nicht gezeigt 5 ·
Am Menschen geprüft, Ergebnisse unveröffentlicht 1.

Die 21 MHC-Einträge bleiben auf Pauls Wunsch **unbewertet** — redaktionelle
Entscheidung, kein Interessenkonflikt (es besteht keine Geschäftsverbindung).

---

## 5. Erfahrungsberichte

`js/data/erfahrungen.js`, 20 Einträge. Zwei Sorten:

- **Eigene Berichte** — Paul hat es selbst angewendet, mit Sternebewertung.
- **Weitergegebene Berichte** — `autor: 'weitergegeben'`. Dann ist
  `bewertung: null` und die App zeigt **keine Sterne**. Das ist eine feste
  Regel: eine Sternebewertung für etwas, das man nicht selbst erlebt hat, wäre
  eine erfundene Bewertung.

Jeder Eintrag hat `scoreRef` (verweist auf den Datenbankeintrag) und `slug` (für
die eigene URL). Kollidiert der Slug mit einem bestehenden Bericht, bekommt der
neue einen eigenen — der Score kommt ohnehin über `scoreRef`.

Nutzer dürfen einreichen (Firestore-Collection `erfahrungen`, pending/approved),
veröffentlicht wird nur mit Pauls Freigabe.

---

## 6. Podcast

102 Folgen, täglich, auf Spotify (Show 033JO82L47Sg4YSmPYas0z), Apple Podcasts
(6804214652), Amazon Music. RSS: anchor.fm/s/1148b9204/podcast/rss.

- Zwei Stimmen, **Paul und Paula**. Charakterzeichnung: *neugierig gegen streng* —
  Paul fasziniert vom Mechanismus, Paula streng bei der Frage, was das belegt.
  Beide auf derselben Seite. Vier Dialogregeln: Paula unterbricht, nicht jede
  Frage bekommt eine Antwort, einmal je Folge ändert jemand sichtbar seine
  Meinung, lange Turns werden geteilt.
- **Die Folgen erwähnen nie, dass der Podcast KI-produziert ist.**
- `js/data/podcast.js` hält je Folge Titel, Datum, `ab` (Freischaltzeit,
  08:00 UTC) und `ziel` (Sprungziel in die Datenbank). Ohne Sprungziel sind noch
  die Folgen 87, 88, 89, 92, 100.
- Skripte sind für die Vertonung geschrieben, deshalb stehen **Zahlen
  ausgeschrieben** („neunzehnhunderteinundneunzig"). Wer daraus Seitentext macht,
  überträgt sie in Ziffern und legt eine Belegdatei an.

---

## 7. Recht und Kennzeichnung

Das ist der Teil, bei dem Fehler teuer sind.

- **Keine medizinische Diagnose**, immer Disclaimer.
- **Keine Dosierungsangaben bei nicht zugelassenen Wirkstoffen** (§ 3a HWG).
  Wirkung beschreiben ja, Handlungsanleitung nein.
- **Affiliate-Kennzeichnung ist im Code erzwungen** — Badge „Anzeige" plus
  Provisionshinweis, automatisch bei `affiliate.aktiv`, auch bei einzelnen
  Erfahrungsberichten (`anzeige`) und auch dann, wenn nur ein Rabattcode und gar
  kein Link kommuniziert wird. Der Helfer `affHinweis()` nennt den Kundenvorteil,
  wenn einer existiert — die pauschale Behauptung „für dich ändert sich der Preis
  nicht" war falsch, wo Rabattcodes hinterlegt sind.
- **Sieben Wirkstoffe bekommen nie einen Affiliate-Link:** Melatonin, 5-HTP,
  Berberin, NMN, Apigenin, Pterostilben, Fadogia Agrestis (Arzneimittel- bzw.
  Novel-Food-Status). Ashwagandha nur mit Warnhinweis (BfR 039/2024).
- **Peptid- und Graumarkt-Anbieter bekommen nie einen klickbaren Link.**
- **Rx-Vermittlung:** Ein Vermittlungsportal für ein verschreibungspflichtiges
  Mittel ist selbst unzulässige Publikumswerbung (BGH 26.03.2026, I ZR 74/25).
  Deshalb beziehen sich Beschreibung und Empfehlung zu Adon Health ausschließlich
  auf die Diagnostik, nie auf die Therapie.
- Rabattcodes im Podcast müssen **gesprochen** gekennzeichnet werden.
- `schema.org` bewusst **ohne** MedicalWebPage, Drug, DietarySupplement — diese
  Typen behaupten medizinischen Charakter. Verwendet werden Organization,
  WebSite, Article, FAQPage, PodcastSeries, Dataset, BreadcrumbList,
  CollectionPage.

### Affiliate-Stand

| Partner | Status |
|---|---|
| Naturtreu | aktiv (UpPromote, 15 % neu / 8 % Bestand) |
| MoleQlar | aktiv (10 % netto, Code biohackingkompakt10) |
| Adon Health | aktiv (GoAffPro, Code PH, 20 € je Bestellung) |
| NORSAN | aktiv (Code ES377) |
| Awin | Bewerbungen HAWLIK, Shop Apotheke DE |
| Webgains | Anmeldung 13.09. eingereicht, Ziel Polar |
| LaVita | bewusst **kein** Partnerlink |

---

## 8. Deploy

Ausführlich in `DEPLOY.md`. Das Wesentliche:

- **`git push` geht aus Claude-Sitzungen nicht** — der Proxy gibt das Repo nicht
  frei (403). Von Pauls Rechner aus läuft `.deploy/bk.py` (`pull` vor jeder
  Änderung, dann `push`).
- **Kleine Dateien (< ca. 50 KB):** GitHub-Konnektor.
- **Große Dateien** (`app.js` 144 KB, `style.css` 127 KB, `index.html` 61 KB,
  `erfahrungen.js` 71 KB, `experimental.js` 214 KB, `scores.js` 189 KB,
  `supplements.js` 123 KB): Browser-Upload über
  `github.com/phoeser/Biohacking/upload/main/<ordner>`.
- **Der Commit-Knopf wird nicht geklickt**, sondern per
  `b.form.requestSubmit(b)` ausgelöst. Nach großem Upload 45 s in einem eigenen
  Bash-`sleep` warten.
- **Cache-Buster** `?v=NNN` in `index.html` an 19 Stellen, aktuell **173** — bei
  jeder JS/CSS-Änderung hochziehen. Statische Seiten haben ihren eigenen Buster
  in `css/thema.css?v=N`.
- **Nach jeder Änderung:** `node --check <datei>` plus Nullbyte-Prüfung
  (OneDrive-Truncation).
- **Verifikation:** Blob-SHA lokal rechnen (`sha1(b'blob %d\0'+inhalt)`) und
  gegen GitHub vergleichen. Ohne diesen Schritt gilt ein Deploy nicht als fertig.

---

## 9. Werkzeuge drumherum

- **MCP-Server „Biohacking Kompakt"** — läuft lokal auf Pauls Rechner, bietet
  Suche in Themen, Scores, Podcast, Erfahrungen und Shops.
- **Reel-Fabrik** (`phoeser/reel-fabrik`) — Videoformate für Instagram und
  TikTok. Fertiges Material höchstens Full HD.
- **Social Post-Planner** (`phoeser/linkedin-post-studio`) — Google Sheet als
  Datenquelle, zwei Make-Szenarien.
- **ElevenLabs** — Vertonung. Vor jedem größeren Lauf Kosten rechnen und nennen.
- **Brand Guidelines** liegen in zwei Kopien: `docs/brand-guidelines.md` hier und
  `BRAND-GUIDELINES-BIOHACKING.md` im Post-Studio. Bei Änderungen beide nachziehen.

---

## 10. Qualitätssicherung

- **Zahlen-Audit:** Jede Zahl im erzeugten HTML muss in der Belegdatei des Themas
  vorkommen. Falsch-Positive kommen aus `p.unter` (Substanzcodes wie
  HGH-Fragment 176-191, NN9838, FPF-1070, AT-1001, MTP-131), aus `section.vw`
  (Linktitel) und aus dem BK-Score-Block — diese drei ausschließen.
- **Headline-Regel:** Subjekt ist die Gruppe, nicht der Stoff. „Kaffeetrinker
  sterben seltener. 15–30 %" statt „Kaffee senkt die Sterblichkeit um 30 %".
  Gleiche Zahl, gleiche Wucht, aber wahr.
- **Nichts erfinden, nichts umrechnen, nichts runden.** Wenn eine Quelle zwei
  Werte nennt, stehen beide da und nicht ihre Differenz.
- **Gegen den Bestand prüfen:** Der ChatGPT-Audit vom 29.08.2026 fand 59
  Einträge, deren sichtbarer Text mehr behauptete als der eigene Score hergab.
  Diese Klasse Fehler entsteht immer wieder und gehört bei jedem Ausbau
  mitgeprüft.
- `deploy-check.sh` vergleicht Prüfsummen lokal gegen live.

---

## 11. Offene Punkte (Stand 13.09.2026)

- 45 Podcastseiten aus vorhandenen Skripten — bereit, kein Rechercheaufwand
- 163 dünne Themenseiten ohne Skript — braucht echte Recherche und Pauls Ja
- 20 Skripte ohne passenden Datenbankeintrag (lipoprotein-a, pe-22-28,
  akkermansia, psilocybin, luftqualitaet, menopause-hrt u. a.)
- 5 Podcastfolgen ohne Sprungziel (87, 88, 89, 92, 100)
- 21 tote `synergies`-Ziele
- „Woher du das bekommst"-Block aus SHOPS — diskutiert, nicht gebaut
- Problem-Einstiege (15–25 Seiten, z. B. „Ständig müde") — diskutiert, nicht gebaut
- Mails an kontakt@biohackingkompakt.de kommen nicht an; das Leck liegt in der
  All-Inkl-Weiterleitung, der nächste Schritt braucht den KAS-Zugang
- Löwenmähne-Neuvertonung, fünf ungeprüfte Voice-Tags, Cloudflare-Token-Ablauf
