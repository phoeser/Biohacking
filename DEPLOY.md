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

### Der Commit-Knopf wird nicht geklickt

Das ist der wichtigste Punkt dieser Datei. Ein Klick auf „Commit changes" tut
nichts — weder über Bildschirmkoordinaten noch über die Element-Referenz, und
ohne jede Fehlermeldung. Auch `b.click()` bleibt wirkungslos. Was funktioniert,
ist das echte Absenden des Formulars:

```js
const b = [...document.querySelectorAll('button')]
  .find(x => /Commit changes/i.test(x.textContent));
const m = document.querySelector('input[name=message]');
if (m) { m.value = 'Commit-Nachricht'; m.dispatchEvent(new Event('input', {bubbles:true})); }
b.form.requestSubmit(b);
```

`requestSubmit` schickt die versteckten Felder mit (`authenticity_token`,
`target_branch`, `quick_pull`, `manifest_id`) — genau die fehlen beim Klick.

Damit erledigt sich auch die frühere Annahme, Uploads in den Repo-Wurzelordner
seien kaputt. `/upload/main` funktioniert einwandfrei.

### Die übrigen Stolperfallen

1. **Nach einem großen Upload 45 Sekunden warten**, bevor abgeschickt wird — in
   einem eigenen `sleep`, nicht im injizierten JavaScript. Die
   Chrome-Schnittstelle bricht Skripte nach 45 s ab, eine Wartezeit im Skript
   selbst läuft deshalb immer in den Timeout.
2. **Pro Zielordner ein eigener Durchgang.** Die Upload-Seite committet immer
   nur in den Ordner, der in der URL steht.
3. **Hintergrund-Tabs werden von Chrome nicht gerendert.** Der Tab muss im
   Vordergrund sein.
4. **Die Chrome-Erweiterung kann mitten im Commit abbrechen.** Dann ist der
   Commit *nicht* durch — vorher immer prüfen, statt anzunehmen, es sei
   durchgelaufen.

### Prüfen, ob der Commit wirklich durch ist

Blob-SHA lokal rechnen und gegen GitHub vergleichen — das ist der einzige
belastbare Nachweis:

```python
import hashlib
d = open(datei, 'rb').read()
hashlib.sha1(b'blob %d\0' % len(d) + d).hexdigest()
```

Dagegen `get_file_contents` mit `fields: ["sha"]` stellen. Bei großen Dateien
sprengt die Antwort das Token-Limit und landet in einer Datei; die SHA holt man
dann mit `jq -r '.[0].text' <datei> | head -c 200`.

### Wenn der Konnektor 500 oder 502 meldet

`create_pull_request` und `merge_pull_request` liefern sporadisch Fehler,
obwohl die Aktion durchgegangen ist. **Vor jedem zweiten Versuch
`list_pull_requests` prüfen** — sonst entstehen Doppel-PRs.

### `git push` geht aus Claude-Sitzungen nicht

Der Git-Proxy der Sitzung gibt `phoeser/Biohacking` nicht frei:

    access denied by the git proxy: phoeser/Biohacking is not in this
    session's authorized repository set

Klonen und lokal committen funktioniert, der Push nicht. Von Pauls Rechner aus
bleibt `.deploy/bk.py` der Weg (`pull` vor jeder Änderung).

---

## Cache-Buster nicht vergessen

Alle Skript- und Stylesheet-Verweise in `index.html` tragen `?v=NNN`. Ohne
Erhöhung sehen wiederkehrende Besucher die alte Version aus dem Browser-Cache.

Bei **jeder** Änderung an `js/`- oder `css/`-Dateien: die Zahl in `index.html`
überall gleichzeitig um eins erhöhen.

    sed -i 's/?v=172/?v=173/g' index.html

Aktueller Stand: **?v=173** an 19 Stellen.

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
