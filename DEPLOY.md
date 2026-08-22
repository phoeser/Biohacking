# Deployment

Die App liegt auf GitHub Pages. Was im `main`-Branch steht, ist nach etwa
30–90 Sekunden live unter https://biohackingkompakt.de.

Es gibt **keinen Build-Schritt**: Die Dateien im Repo sind exakt die Dateien,
die der Browser lädt. Was hochgeladen wird, ist sofort produktiv.

---

## Weg A — GitHub-Konnektor (Standard)

Claude kann Dateien direkt über den GitHub-Konnektor committen, ohne Browser
und ohne Chrome-Erweiterung. Das ist der bevorzugte Weg.

**Grenze:** Der Dateiinhalt läuft durch die Konversation. Praktikabel ist das
bis etwa 50 KB pro Datei.

Damit deploybar sind unter anderem:

| Datei | Größe | typische Änderung |
|---|---|---|
| `js/data/erfahrungen.js` | ~5 KB | neue Erfahrungsberichte, Shops, Rabattcodes |
| `js/data/products.js` | ~2 KB | Wearable-Empfehlungen |
| `js/data/goals.js`, `tips.js` | klein | Symptom-Gruppen, Biohacking-Tipps |
| `impressum.html`, `datenschutz.html` | ~14 KB | Rechtstexte |
| `index.html` | ~36 KB | Struktur, Navigation, Texte |

**Wichtig:** Das ist der Normalfall. Inhalte pflegen — neue Berichte, neue
Shops, neue Codes — heißt genau eine kleine Datei anfassen. Dafür wird der
Browser nie gebraucht.

---

## Weg B — Browser-Upload (nur für die großen Dateien)

Nötig nur für:

| Datei | Größe |
|---|---|
| `js/app.js` | ~102 KB |
| `css/style.css` | ~85 KB |
| `js/data/supplements.js` | groß |
| `js/data/experimental.js` | groß |

Ablauf pro Ordner: `github.com/phoeser/Biohacking/upload/main/<ordner>`
öffnen, Datei ins Feld laden, Commit-Nachricht setzen, committen.

### Stolperfallen, die uns schon Zeit gekostet haben

1. **Der „Commit changes"-Knopf muss über Bildschirmkoordinaten geklickt
   werden.** Ein Klick über die Element-Referenz landet auf der gleichnamigen
   Überschrift darüber und tut nichts — ohne Fehlermeldung. Also erst
   Screenshot, dann auf den grünen Knopf klicken.
2. **Pro Zielordner ein eigener Durchgang.** Die Upload-Seite committet immer
   nur in den Ordner, der in der URL steht.
3. **Hintergrund-Tabs werden von Chrome nicht gerendert.** Alle Elemente haben
   dann Breite 0 und Koordinatenklicks gehen ins Leere. Der Tab muss im
   Vordergrund sein.
4. **Die Chrome-Erweiterung kann mitten im Commit abbrechen.** Dann ist der
   Commit *nicht* durch — vorher immer mit `deploy-check.sh` oder der
   Commit-Liste prüfen, statt anzunehmen, es sei durchgelaufen.

---

## Cache-Buster nicht vergessen

Alle Skript- und Stylesheet-Verweise in `index.html` tragen `?v=NNN`. Ohne
Erhöhung sehen wiederkehrende Besucher die alte Version aus dem Browser-Cache.

Bei **jeder** Änderung an `js/`- oder `css/`-Dateien: die Zahl in `index.html`
überall gleichzeitig um eins erhöhen.

    sed -i 's/?v=118/?v=119/g' index.html

`deploy-check.sh` warnt, wenn in `index.html` mehrere verschiedene Werte stehen.

---

## Nach dem Deploy prüfen

    ./deploy-check.sh /pfad/zum/lokalen/ordner

Das Skript lädt jede Datei mit einem eigenen Cache-Buster direkt vom
Live-Server und vergleicht die Prüfsumme mit der lokalen Datei. Ausgabe je
Datei: `OK`, `ANDERS` oder `FEHLT`. Rückgabewert 0 heißt: live und lokal sind
identisch.

Das ersetzt das Draufschauen. „Sieht gut aus" ist kein Deploy-Nachweis —
GitHub-Pages-Caches und CDN-Kopien haben uns hier schon getäuscht.

---

## Reihenfolge bei größeren Umbauten

1. Neue Datendateien und neue Module zuerst (sie sind für sich harmlos).
2. `css/style.css` und `js/app.js` danach.
3. `index.html` zuletzt — sie verweist auf alles andere und schaltet die
   Änderung erst scharf.

So ist die Seite zu keinem Zeitpunkt in einem Zustand, in dem `index.html`
Dateien anfordert, die es noch nicht gibt.

---

## Rollback

Jeder Commit ist ein vollständiger Stand. Zurück geht es über
`github.com/phoeser/Biohacking/commits/main` → gewünschten Commit öffnen →
`Revert`, oder die alte Fassung einer Datei anzeigen und erneut committen.
