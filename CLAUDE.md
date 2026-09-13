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
- **Cache-Buster `?v=NNN`** in `index.html` bei jeder JS/CSS-Änderung an allen 19 Stellen hochziehen.
- **Deploy gilt erst als fertig, wenn die Blob-SHA live gegengeprüft ist.**
- **`autor: 'weitergegeben'` in Erfahrungsberichten heißt `bewertung: null`** — keine Sterne für etwas, das man nicht selbst erlebt hat.
- Bezugsquellen-/Wearable-Links: „Rabatt-Link" bzw. „keine Empfehlung/Garantie, Grauzone".
