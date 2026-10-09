Es geht um eine beratende Biohacking-Applikation (statische Web-App, Vanilla HTML/CSS/JS, Deploy via `auto_deploy.html` → GitHub Pages).

## Zuerst lesen
**Vor jeder Aufgabe `PROJEKT.md` komplett lesen** — dort stehen Architektur, Datenbestand, BK-Score-Regeln, Recht und Kennzeichnung, Qualitätssicherung und die offenen Punkte. `DEPLOY.md` ergänzt den Deploy-Weg im Detail. (Das frühere `HANDOVER.md` existiert nicht mehr; `PROJEKT.md` hat es ersetzt.)

## Ton — gilt für alle Seitentexte
Biohacking-Seite, **kein Debunking-Blog**. Reihenfolge immer: erst benennen, was trägt, dann sagen, wo die Daten aufhören. Belegte Einschränkungen bleiben ungeschönt drin, stehen aber *nach* der Substanz. Echte Umlaute, „so" als Anführungszeichen, keine Ausrufezeichen, keine Marketingsprache.

## Arbeitsweise (Paul)
Generell viel Fragen stellen, die helfen, die Arbeit besser zu machen und besser zu verstehen, was gewünscht ist. Möglichst viel selbst machen und bei kritischen/irreversiblen Schritten um Erlaubnis fragen, damit Paul wenig selbst tun muss. Vor dem Start einer Aufgabe bestmöglich nachdenken und Scope per AskUserQuestion klären.

## Harte Regeln
- **Sprache: Deutsch**, „Du"-Form — in UI, KI-Prompts und Code-Kommentaren.
- **Keine medizinische Diagnose**; immer Disclaimer mitgeben.
- **Nach jedem Code-Edit verifizieren:** `node --check js/app.js` (und `js/vitals.js`) + Null-Byte-Check (OneDrive-Truncation).
- **Deploy über `.deploy/bk.py`** (liegt eine Ebene höher, neben diesem Repo-Ordner):
  `python3 bk.py status | pull | push -m "..."`. Nutzt die GitHub-Contents-API vom
  Rechner aus — gleiche Commits wie `auto_deploy.html`, nur ohne Browser-Seite.
  **Vor jeder Änderung `bk.py pull`** — die lokale Kopie war schon mehrfach veraltet
  und damit eine Regressionsfalle. Nie `git push`. `auto_deploy.html` bleibt der
  Rückfallweg, falls der Token fehlt. Whitelist = 22 Dateien inkl. `js/vitals.js`;
  `bk.py` ohne Argumente deckt die fünf ab, die sich normalerweise ändern, jede
  weitere Datei wird explizit benannt.
- **Interne Route `experimental` nie umbenennen** (Sektion heißt im UI „Peptide").
- **Keine API-Keys/Tokens** in Commits oder in `auto_deploy.html`.
- **Keine Dosierungsangaben bei nicht zugelassenen Wirkstoffen** (§ 3a HWG).
- **Zwei Auslieferungswege synchron halten:** Eine Datenänderung in `js/data/` muss auch in die statischen Seiten unter `/thema/`, `/tipp/`, `/vergleich/` — und umgekehrt. `label` steht nur in `scores.json`, `scores.js` leitet es über `bkLabel()` her.
- **Cache-Buster je Datei** (`?v=<8 Zeichen SHA-1>`): nach jeder JS/CSS-Änderung `python3 buster.py` ausführen und `index.html` mit deployen. Nicht mehr pauschal hochzählen — sonst lädt Google alle 20 Dateien neu.
- **Englische Fassung unter `/en/`** (seit 09.10.2026 vollständig: alle Themen-, Tipp- und Vergleichsseiten, Übersichten `/en/thema/`, `/en/tipp/`, `/en/vergleich/`, Methodik, Über uns, Rechtliches als Lesefassung, alle Podcast-Folgenseiten `/en/folge/` (Folgen selbst deutsch); Leitfaden `nov2/en-anleitung-2.md`): Jede neue deutsche Themen-/Tipp-/Vergleichsseite bekommt eine englische Fassung mit gleichem Dateinamen. Danach `python3 sprachen.py` (setzt hreflang + DE|EN-Umschalter, auch für Übersichten und Wurzelseiten) und die EN-URL in `sitemap.xml`. Ändert sich der Inhalt einer deutschen Seite, die englische Fassung nachziehen.
- **Startseite:** Die Blöcke „Am besten belegt“ und „Häufige Fragen“ (samt FAQPage-Schema) in `index.html` erzeugt `python3 startseite.py` aus `scores.json`. Nach jedem neuen Score-Stand erneut ausführen, nie von Hand zwischen den Markierungen editieren.
- **Verwandte Themen:** Die Kästen „Ähnliche Themen“ und „Fragen dazu“ sowie der Link auf die Folgenseite im Podcast-Kasten der Themenseiten erzeugt `python3 verwandt.py` (idempotent, zwischen `<!-- verwandt:start/end -->`). Nach jedem Neubau von Themen-, Frage- oder Vergleichsseiten erneut ausführen, danach `sprachen.py`.
- **Studien-Datenbank** (`/studien/`, seit 01.10.2026): `python3 studien.py` sammelt alle Quellen aus den Abschnitten „Quellen" der Themen-, Tipp-, Vergleichs- und Frageseiten, lädt fehlende Metadaten (Titel, Journal, Jahr, Studientyp) über Europe PMC nach (Cache `docs/studien-meta.json`) und baut `studien/index.html`. Außerdem setzt es idempotent den Menüpunkt „Studien" in die Kopfzeile aller deutschen Seiten und je Quellen-Abschnitt einen vorgefilterten Link `/studien/?q=<Thema>` (zwischen `<!-- studien:start/end -->`). Nach jedem Neubau solcher Seiten erneut ausführen (`--offline` = nur aus dem Cache).
- **Chatbot-Wissen** (seit 01.10.2026): `python3 wissen.py` baut aus js/data + scores.json die Klartextdateien `wissen/*.txt` (Supplements, experimentell, Khavinson, Anwendungen, Tipps; ohne Dosierungen bei nicht zugelassenen Stoffen, ohne Bezugsquellen). Der ElevenLabs-Agent holt sie per URL mit wöchentlichem Auto-Sync. Nach jedem neuen Daten- oder Score-Stand erneut ausführen und mit deployen.
- **Score-Abgleich** (seit 06.10.2026): `python3 score-sync.py --schreiben` zieht nach jedem `node scores-bauen.js js/data scores.json` den BK-Score auf allen statischen Seiten nach – Themen-, Tipp- und Vergleichsseiten (Zahlen, Balken, Label, „Unterschied“, Begründung, JSON-LD) und die englischen Fassungen (Zahlen, Label). Ohne `--schreiben` nur prüfen. Ändern sich dabei Zahlen auf einer Vergleichsseite, den Fließtext (Lead, Fazit, FAQ) auf Widersprüche prüfen.
- **KI-Übersicht** (seit 06.10.2026): `python3 llms_full.py` erzeugt `llms-full.txt` vollständig aus den Seiten und Daten (idempotent, `--pruefen` = nur vergleichen). Nach jedem Neubau von Seiten oder Daten ausführen und mit deployen.
- **Besucherzählung** (seit 08.10.2026): `python3 beacon.py` setzt das cookielose Cloudflare-Web-Analytics-Snippet idempotent vor `</body>` aller Seiten (zwischen `<!-- beacon:start/end -->`; index.html hat es fest). Nach jedem Neubau von Seiten ausführen.
- **Kanal-Zeile im Fuß** (seit 08.10.2026): `python3 konten.py` setzt „Biohacking Kompakt folgen: Spotify · Apple Podcasts · Amazon Music · YouTube · TikTok · Discord“ idempotent vor `</footer>` aller Seiten (zwischen `<!-- konten:start/end -->`, EN-Seiten englisch). Neue Kanäle nur in `KONTEN` im Skript eintragen.
- **Feed neuer Seiten** (seit 08.10.2026): `python3 feed.py` baut `/neu.xml` (RSS, 40 neueste Themen-/Tipp-/Vergleichsseiten nach datePublished). Make liest ihn und postet neue Seiten in Discord #ankündigungen. Nach jedem Neubau von Seiten ausführen und mit deployen.
- **Bau-Kette nach Daten- oder Seitenänderungen:** `node scores-bauen.js js/data scores.json` → `python3 score-sync.py --schreiben` → `studien.py` → `wissen.py` → `verwandt.py` → `sprachen.py` → `startseite.py` → `llms_full.py` → `beacon.py` → `konten.py` → `feed.py` → `buster.py`.
- **Deploy gilt erst als fertig, wenn die Blob-SHA live gegengeprüft ist.**
- **`autor: 'weitergegeben'` in Erfahrungsberichten heißt `bewertung: null`** — keine Sterne für etwas, das man nicht selbst erlebt hat.
- Bezugsquellen-/Wearable-Links: „Rabatt-Link" bzw. „keine Empfehlung/Garantie, Grauzone".
