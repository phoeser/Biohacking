#!/usr/bin/env python3
"""Kasten „Heute bei Paul & Paula" auf der Startseite schon im HTML füllen.

Warum (15.11.2026): Der Kasten stand mit `hidden` im HTML und wurde erst von
js/app.js (renderPodHeute) nach dem Laden aller Datendateien eingeblendet. Auf
dem Handy schob er dabei die beiden großen Einstiegsknöpfe aus dem Bild –
Cumulative Layout Shift 0,21 allein dadurch (Core Web Vitals: gut < 0,1).
Jetzt steht die zuletzt veröffentlichte Folge (Stand Bau) schon im HTML; app.js
überschreibt sie wie bisher mit dem aktuellen Stand, ohne dass etwas springt.
Gleiche Auswahl und gleiche Links wie renderPodHeute(). Idempotent, ersetzt die
ganze <section class="pod-heute" …>. Nach jeder Änderung an js/data/podcast.js
ausführen (steht in der Bau-Kette nach startseite.py).

  python3 pod_heute.py            # schreiben
  python3 pod_heute.py --pruefen  # nur vergleichen
"""
import datetime, html, json, os, re, subprocess, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
PRUEFEN = '--pruefen' in sys.argv

JS = r"""
const fs=require('fs'),vm=require('vm');const ctx={};vm.createContext(ctx);
vm.runInContext(fs.readFileSync('js/data/podcast.js','utf8').replace(/^\s*const\s+/gm,'var '),ctx);
process.stdout.write(JSON.stringify({f:ctx.PODCAST_FOLGEN,show:ctx.PODCAST_SHOW,apple:ctx.PODCAST_APPLE_BASIS||'',amazon:ctx.PODCAST_AMAZON_BASIS||''}));
"""
d = json.loads(subprocess.check_output(['node', '-e', JS]))
jetzt = datetime.datetime.now(datetime.timezone.utc)

def ab(f):
    return datetime.datetime.fromisoformat((f.get('ab') or f['datum'] + 'T00:00:00Z').replace('Z', '+00:00'))

raus = [f for f in d['f'] if ab(f) <= jetzt]
# wie app.js: neuestes Datum zuerst, bei gleichem Datum höhere Nummer zuerst
raus.sort(key=lambda f: (f['datum'], f['nr']), reverse=True)
if not raus:
    sys.exit('pod_heute.py: keine veröffentlichte Folge gefunden')
f, show = raus[0], d['show']
e = lambda x: html.escape(str(x), quote=True)

def ziel(x, fallback):
    z = x.get('ziel')
    if z and z.get('id'):
        return '#%s/%s' % (z['view'], z['id'])
    if z:
        return '#' + z['view']
    return fallback

spotify = 'https://open.spotify.com/episode/' + f['spotify']
apple = d['apple'] + f['apple'] if f.get('apple') and d['apple'] else show.get('apple', '')
amazon = d['amazon'] + f['amazon'] if f.get('amazon') and d['amazon'] else show.get('amazon', '')
haupt = ziel(f, spotify)
thema = f'<a id="pod-heute-thema" href="{e(haupt)}">Zum Thema in der Datenbank →</a>' if f.get('ziel') \
    else '<a id="pod-heute-thema" href="#" hidden>Zum Thema in der Datenbank →</a>'
datum = '.'.join(reversed(f['datum'].split('-')))
liste = ''.join('<li><a href="%s"><span class="pod-liste-nr">%s</span>%s</a></li>'
                % (e(ziel(x, '#folge/%s' % x['nr'])), x['nr'], e(x['titel'])) for x in raus[1:4])

NEU = f'''<section class="pod-heute" id="pod-heute">
          <div class="pod-heute-head">
            <span class="pod-heute-eyebrow">🎙️ Heute bei Paul &amp; Paula</span>
            <a class="pod-heute-alle" href="{e(show['spotify'])}" id="pod-heute-show" target="_blank" rel="noopener">Alle Folgen →</a>
          </div>
          <a class="pod-heute-main" href="{e(haupt)}" id="pod-heute-link">
            <span class="pod-heute-nr" id="pod-heute-nr">Folge {f['nr']}</span>
            <span class="pod-heute-titel" id="pod-heute-titel">{e(f['titel'])}</span>
            <span class="pod-heute-meta" id="pod-heute-meta">{datum} · rund 12 Minuten · Faktencheck</span>
          </a>
          <div class="pod-heute-links">
            <a id="pod-heute-spotify" href="{e(spotify)}" target="_blank" rel="noopener">▶ Auf Spotify anhören</a>
            <a id="pod-heute-apple" href="{e(apple or '#')}" target="_blank" rel="noopener"{'' if apple else ' hidden'}> Apple Podcasts</a>
            <a id="pod-heute-amazon" href="{e(amazon or '#')}" target="_blank" rel="noopener"{'' if amazon else ' hidden'}>Amazon Music</a>
            {thema}
          </div>
          <ul class="pod-heute-liste" id="pod-heute-liste">{liste}</ul>
        </section>'''

s = open('index.html', encoding='utf-8').read()
neu, n = re.subn(r'<section class="pod-heute" id="pod-heute"[^>]*>.*?</section>', lambda m: NEU, s, count=1, flags=re.S)
if not n:
    sys.exit('pod_heute.py: Kasten in index.html nicht gefunden')
if neu == s:
    print('pod_heute.py: unverändert (Folge %s)' % f['nr'])
elif PRUEFEN:
    print('pod_heute.py: würde auf Folge %s aktualisieren' % f['nr'])
else:
    open('index.html', 'w', encoding='utf-8').write(neu)
    print('pod_heute.py: Startseite zeigt Folge %s' % f['nr'])
