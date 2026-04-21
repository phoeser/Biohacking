# Biohacking Supplement Check

Eine deutschsprachige Web-App für Biohacker – mit zwei Haupt-Tools:

1. **Supplement-Datenbank** – Für jedes Supplement: Vor- und Nachteile, Dosierung, optimale Einnahme, Wechselwirkungen, Synergien und Quellen.
2. **Personalisierter Empfehlungs-Assistent** – Beschreibe dein Ziel oder Problem, erhalte passende Supplements und Biohacking-Strategien.

Zusätzlich enthält die App eine kuratierte Sammlung von **Biohacking-Tipps** zu Schlaf, Licht, Kälte/Hitze, Atmung, Ernährung, Bewegung und mehr.

## Features

- ~~~40 Supplements mit wissenschaftlich fundierten Infos (Vitamine, Minerale, Adaptogene, Nootropika, Longevity-Substanzen uvm.)~~
- 40 Supplements mit umfassenden Daten
- 30+ Biohacking-Tipps
- Smarter Empfehlungs-Algorithmus (Keyword → Ziel → Tag-Matching)
- Kategorien-Filter und Volltextsuche
- Synergien und Wechselwirkungen zwischen Supplements
- Evidenz-Level pro Supplement (hoch / mittel / niedrig)
- Modernes, dunkles Biohacker-Design
- Vollständig responsiv (Desktop, Tablet, Mobile)
- **100 % lokal im Browser** – keine Anmeldung, keine Cookies, keine Datenweitergabe
- Keine API-Keys, keine Abhängigkeiten – läuft auf jedem statischen Webspace

## Demo starten (lokal)

Da die App reine HTML/CSS/JS-Dateien enthält, kannst du sie einfach mit einem lokalen Webserver testen. Der direkte Doppelklick auf `index.html` funktioniert meist auch, aber ein Server vermeidet CORS-Probleme bei zukünftigen Erweiterungen.

### Variante 1: VS Code + Live Server
1. Ordner in VS Code öffnen
2. Extension „Live Server" installieren
3. Rechtsklick auf `index.html` → „Open with Live Server"

### Variante 2: Python
```bash
cd "Biohacking-Supplement Check"
python -m http.server 8000
# Dann http://localhost:8000 im Browser öffnen
```

### Variante 3: Node
```bash
npx serve
```

## Auf GitHub Pages deployen (kostenlos, weltweit erreichbar)

1. **GitHub-Account erstellen** (falls noch nicht vorhanden): https://github.com/signup
2. **Neues Repository anlegen** – z. B. `biohacking-supplement-check`
3. **Dateien hochladen**: Alle Dateien und Ordner aus diesem Projekt in das Repo pushen oder per Drag & Drop im Browser hochladen
4. **GitHub Pages aktivieren**:
   - Repo öffnen → `Settings` → `Pages`
   - Source: `Deploy from a branch`
   - Branch: `main` (oder `master`), Folder: `/ (root)`
   - Speichern
5. Nach 1–2 Minuten ist die App erreichbar unter:
   `https://DEIN-USERNAME.github.io/biohacking-supplement-check/`

Tipp: Du kannst auch eine eigene Domain (z. B. `biohacks.de`) über GitHub Pages einbinden.

### Alternative Hosting-Optionen
- **Netlify** – Drag & Drop Deploy, eigene Domain, SSL kostenlos
- **Vercel** – ähnlich wie Netlify
- **Cloudflare Pages** – sehr schnell, kostenlos

## Projektstruktur

```
Biohacking-Supplement Check/
├── index.html              # Einstiegspunkt
├── css/
│   └── style.css           # Komplettes Styling (dark, modern)
├── js/
│   ├── app.js              # App-Logik, Rendering, Empfehlungs-Algorithmus
│   └── data/
│       ├── supplements.js  # 40 Supplements mit vollständigen Infos
│       ├── tips.js         # 30+ Biohacking-Tipps
│       └── goals.js        # Ziel-Keyword-Tag-Mapping
├── README.md               # Dieses Dokument
└── LICENSE                 # MIT-Lizenz
```

## Eigene Supplements / Tipps hinzufügen

Alle Daten liegen als einfache JavaScript-Objekte vor. Du kannst die Dateien mit jedem Texteditor öffnen und erweitern:

- **Neues Supplement**: Eintrag in `js/data/supplements.js` nach dem Muster der bestehenden hinzufügen
- **Neuer Tipp**: Eintrag in `js/data/tips.js` hinzufügen
- **Neues Ziel / neue Keywords**: `js/data/goals.js` erweitern

Nach dem Speichern einfach die Seite im Browser neu laden – Änderungen sind sofort sichtbar.

## Erweiterungen (Roadmap-Ideen)

- [ ] Tägliche Erinnerungs-Funktion (Browser-Push)
- [ ] „Mein Stack" – Favorisierte Supplements lokal speichern (LocalStorage)
- [ ] Wechselwirkungs-Check mit gängigen Medikamenten
- [ ] KI-Modus: optionaler API-Key für freie Fragen (Claude/Gemini)
- [ ] Mehrsprachigkeit (EN, FR)
- [ ] Quiz-Modus: Was passt zu meinem Biotyp?
- [ ] Blutwert-Import und automatische Empfehlungen

## Haftungsausschluss

**Diese App ersetzt keine ärztliche Beratung.** Alle Informationen dienen rein Bildungszwecken. Konsultiere bei gesundheitlichen Problemen, Schwangerschaft, bestehender Medikation oder chronischen Erkrankungen immer einen Arzt oder Heilpraktiker, bevor du Supplements einnimmst. Die Angaben basieren auf aktueller wissenschaftlicher Literatur, erheben aber keinen Anspruch auf Vollständigkeit oder Aktualität.

## Lizenz

MIT – frei zur privaten und kommerziellen Nutzung. Siehe [LICENSE](LICENSE).

---

Gebaut mit ❤️ für die Biohacker-Community.
