# Biohacking Kompakt

Deutschsprachige Informationsseite zu Longevity, Supplements, Peptiden,
Behandlungen und Messmethoden — mit täglichem Podcast.

**Live:** https://biohackingkompakt.de

Das Unterscheidungsmerkmal ist die offengelegte Evidenzeinordnung: Jeder Eintrag
sagt ausdrücklich, was belegt ist und wo die Daten aufhören — auch dort, wo das
unbequem ist.

---

## Dokumentation

| Datei | Inhalt |
|---|---|
| **[PROJEKT.md](PROJEKT.md)** | Maßgebliche Projektdokumentation: Architektur, Datenbestand, BK-Score, Recht, Qualitätssicherung, offene Punkte |
| [DEPLOY.md](DEPLOY.md) | Deploy-Wege im Detail und die Stolperfallen |
| [CLAUDE.md](CLAUDE.md) | Harte Arbeitsregeln |
| [docs/brand-guidelines.md](docs/brand-guidelines.md) | Design-Tokens und Markenführung |

---

## Was drin ist

- **296 Datenbankeinträge** — 84 Supplements, 77 Peptide und Experimentelles,
  49 Behandlungen, 57 Tipps, 9 Khavinson-Bioregulatoren
- **BK-Score** auf 256 Einträgen: fünf Achsen, die den *Wissensstand* bewerten,
  nicht die Substanz
- **294 statische Seiten** für Suchmaschinen und LLM-Zitierbarkeit — 220 Themen,
  58 Tipps, 16 Vergleiche, 6 Glossareinträge
- **102 Podcastfolgen**, jede mit Sprungziel in die Datenbank
- Erfahrungsberichte, Blutwerte, Signalwege, Laborprüfer, Tagescheck

## Technik

Statische Single-Page-App aus Vanilla HTML/CSS/JS. **Kein Build-Schritt** — was
im Repo liegt, ist exakt das, was der Browser lädt.

- GitHub Pages, DNS über Cloudflare
- Daten in `js/data/*.js`, Routing über Hash (`#experimental/semax`)
- Statische Seiten werden aus denselben Daten vorab erzeugt
- Cloudflare-Worker `bhc-proxy` für die KI-Aufrufe; kein API-Key im Client

## Lokal starten

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deployen

Kleine Dateien über den GitHub-Konnektor, große per Browser-Upload, von Pauls
Rechner aus über `.deploy/bk.py`. Nie `git push`. Details und Fallstricke in
[DEPLOY.md](DEPLOY.md).

Nach jeder Änderung: `node --check <datei>`, Cache-Buster `?v=NNN` in
`index.html` hochziehen, Blob-SHA live gegenprüfen.

---

Reine Information, keine medizinische Beratung und keine Anwendungs- oder
Dosierempfehlung.
