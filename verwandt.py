#!/usr/bin/env python3
"""Verwandte Themen und Querverweise auf den statischen Themenseiten.

Warum (30.09.2026): Search Console meldet 234 Seiten als „Gefunden – zurzeit
nicht indexiert". Jede Themenseite verlinkte bis dahin kaum andere Inhalts-
seiten (Median 5 Links, fast nur Menü). Google holt Seiten mit vielen internen
Verweisen früher ab. Dieses Skript ergänzt je Themenseite:

  1. „Ähnliche Themen" – bis zu 6 andere Themenseiten, ausgewählt nach
     gemeinsamen Zielen (Tags aus js/data), gemeinsamer Nennung auf Frage- und
     Vergleichsseiten, Textähnlichkeit und gleicher Rubrik.
  2. „Fragen dazu" – die Frage- und Vergleichsseiten, die auf das Thema
     verweisen (höchstens 4).
  3. Im Podcast-Kasten einen Link auf die eigene Folgenseite (/folge/<nr>.html),
     wenn es sie gibt.

Idempotent: alles steht zwischen <!-- verwandt:start --> und
<!-- verwandt:end --> bzw. trägt die Klasse „pod-seite" und wird bei jedem Lauf
neu erzeugt. Nach jedem Neubau von Themen-, Frage- oder Vergleichsseiten
ausführen:  python3 verwandt.py
"""
import glob, html, json, os, re, subprocess, sys, collections, tempfile

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
START, ENDE = '<!-- verwandt:start -->', '<!-- verwandt:end -->'

# ---- Daten aus js/data (Tags, Kategorie) --------------------------------
EXTR = r"""
const fs=require('fs'),vm=require('vm');
const ctx={window:{},console:{log(){}},document:{addEventListener(){}}};vm.createContext(ctx);
for(const f of ['supplements','experimental','khavinson','therapies','goals']){
  try{vm.runInContext(fs.readFileSync('js/data/'+f+'.js','utf8').replace(/^\s*const\s+/gm,'var '),ctx)}catch(e){}
}
const out={items:{},goals:ctx.GOALS||[]};
for(const k of Object.keys(ctx)){const v=ctx[k]; if(Array.isArray(v)&&v.length&&v[0]&&v[0].id){
  for(const e of v){ out.items[e.id]={tags:e.tags||[],cat:e.category||''} } } }
process.stdout.write(JSON.stringify(out));
"""
with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
    f.write(EXTR); js = f.name
daten = json.loads(subprocess.check_output(['node', js], cwd=ROOT))
os.unlink(js)
ITEMS = daten['items']
# Tag -> Ziel-Bezeichnung (für die Begründung)
TAG_ZIEL = {}
for g in daten['goals']:
    for t in g.get('tags', []):
        TAG_ZIEL.setdefault(t, g['label'])

def lies(p): return open(p, encoding='utf-8').read()

# ---- Themenseiten, Rubrik, Titel, Text ----------------------------------
SEITEN = sorted(p for p in glob.glob('thema/*.html') if not p.endswith('index.html'))
IDS = [os.path.basename(p)[:-5] for p in SEITEN]
idx = lies('thema/index.html')
RUBRIK = {}
for teil in re.split(r'<h2>', idx)[1:]:
    name = re.sub(r'\s*\(\d+\)</h2>.*', '', teil, flags=re.S)
    for tid in re.findall(r'href="/?thema/([^"#/]+)\.html"', teil):
        RUBRIK.setdefault(tid, html.unescape(name))

def titel(s):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    t = re.sub(r'<[^>]+>', '', m.group(1)) if m else ''
    return html.unescape(re.sub(r'\s+', ' ', t)).strip()

def haupttext(s):
    s = re.sub(r'%s.*?%s' % (re.escape(START), re.escape(ENDE)), '', s, flags=re.S)
    s = re.sub(r'<p class="pod-seite">.*?</p>', '', s, flags=re.S)
    m = re.search(r'<main.*?</main>', s, re.S)
    s = m.group(0) if m else s
    s = re.sub(r'<section><h2>Quellen</h2>.*?</section>', '', s, flags=re.S)
    return html.unescape(re.sub(r'<[^>]+>', ' ', s))

ROH = {tid: lies(p) for tid, p in zip(IDS, SEITEN)}
TITEL = {tid: titel(s) or tid for tid, s in ROH.items()}
# Kurztitel für Linktexte: vor Gedankenstrich/Doppelpunkt abschneiden
def kurz(t): return re.split(r'\s+[–—:|]\s+', t)[0].strip()

# ---- Mitnennung auf Frage-, Vergleichs- und Tipp-Seiten -----------------
MIT = collections.Counter()
FRAGEN = collections.defaultdict(list)   # thema -> [(url, titel)]
for p in sorted(glob.glob('problem/*.html') + glob.glob('vergleich/*.html') + glob.glob('tipp/*.html')):
    if p.endswith('index.html'): continue
    s = lies(p)
    ziel = sorted(set(re.findall(r'href="/?thema/([^"#/]+)\.html"', s)) & set(IDS))
    for a in ziel:
        for b in ziel:
            if a < b: MIT[(a, b)] += 1
    if not p.startswith('tipp/'):
        for a in ziel:
            FRAGEN[a].append(('/' + p, kurz(titel(s))))

# ---- Textähnlichkeit ------------------------------------------------------
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
STOP = ('der die das und oder nicht ist sind ein eine einer eines einem den dem des mit von zu im in auf für '
        'als auch bei es sich wie wird werden wurde nur noch kein keine aus an am um über nach vor bis so '
        'dass zum zur hat haben kann können mehr sehr man was wenn aber durch dann diese dieser dieses ob '
        'studie studien daten menschen wirkung').split()
vec = TfidfVectorizer(stop_words=STOP, min_df=2, max_df=0.5, sublinear_tf=True)
M = vec.fit_transform([haupttext(ROH[t]) for t in IDS])
SIM = cosine_similarity(M)
POS = {t: i for i, t in enumerate(IDS)}

def tags(t): return set(ITEMS.get(t, {}).get('tags', []))

def kandidaten(a):
    erg = []
    for b in IDS:
        if b == a: continue
        ta, tb = tags(a), tags(b)
        gem = ta & tb
        jac = len(gem) / len(ta | tb) if (ta or tb) else 0.0
        mit = MIT[tuple(sorted((a, b)))]
        cos = SIM[POS[a], POS[b]]
        gleich = RUBRIK.get(a) == RUBRIK.get(b)
        punkte = 2.0 * jac + 0.6 * min(mit, 3) + 1.5 * cos + (0.15 if gleich else 0)
        # Begründung: die stärkste Einzelursache
        grund = None
        if mit >= 2: grund = 'Oft zusammen genannt'
        elif gem:
            z = [TAG_ZIEL[t] for t in sorted(gem) if t in TAG_ZIEL]
            grund = ('Gleiches Ziel: ' + z[0]) if z else 'Ähnlicher Zweck'
        elif mit == 1: grund = 'Zusammen genannt'
        elif cos >= 0.12: grund = 'Verwandtes Thema'
        elif gleich: grund = 'Gleiche Rubrik'
        if grund: erg.append((punkte, b, grund))
    erg.sort(key=lambda x: (-x[0], x[1]))
    return erg

def schon_verlinkt(s):
    """Themen, die der bestehende Kasten „Passt dazu" schon nennt."""
    m = re.search(r'<section class="vw">.*?</section>', s, re.S)
    return set(re.findall(r'/thema/([^"#/]+)\.html', m.group(0))) if m else set()

# ---- Folgenseiten ---------------------------------------------------------
FOLGEN = {os.path.basename(p)[:-5] for p in glob.glob('folge/*.html')}

def baue(a, s):
    vorhanden = schon_verlinkt(s)
    auswahl = [(b, g) for _, b, g in kandidaten(a) if b not in vorhanden][:6]
    fragen, gesehen = [], set()
    for url, t in FRAGEN.get(a, []):
        if url not in gesehen and t:
            gesehen.add(url); fragen.append((url, t))
    fragen = fragen[:4]
    if not auswahl and not fragen:
        return ''
    z = ['    ' + START]
    if auswahl:
        z.append('    <section class="vw">\n      <h2>Ähnliche Themen</h2>\n      <ul>')
        for b, g in auswahl:
            z.append('        <li><span class="vw-grund">%s</span><a href="/thema/%s.html">%s</a></li>'
                     % (html.escape(g), b, html.escape(kurz(TITEL[b]))))
        z.append('      </ul>\n    </section>')
    if fragen:
        z.append('    <section class="vw">\n      <h2>Fragen dazu</h2>\n      <ul>')
        for url, t in fragen:
            art = 'Vergleich' if url.startswith('/vergleich/') else 'Frage'
            z.append('        <li><span class="vw-grund">%s</span><a href="%s">%s</a></li>'
                     % (art, url, html.escape(t)))
        z.append('      </ul>\n    </section>')
    z.append('    ' + ENDE)
    return '\n'.join(z) + '\n'

def einsetzen(a, s):
    s = re.sub(r'\n?[ \t]*%s.*?%s\n?' % (re.escape(START), re.escape(ENDE)), '\n', s, flags=re.S)
    block = baue(a, s)
    # Folgenseite im Podcast-Kasten
    s = re.sub(r'\s*<p class="pod-seite">.*?</p>', '', s, flags=re.S)
    def folgenlink(m):
        nr = m.group(1)
        if nr not in FOLGEN: return m.group(0)
        return (m.group(0) + '\n      <p class="pod-seite"><a href="/folge/%s.html">Zur Folgenseite mit Zusammenfassung und Quellen</a></p>' % nr)
    s = re.sub(r'<p class="pod-nr">Folge (\d+)</p>(?:\s*<h3>.*?</h3>)?(?:\s*<p class="pod-note">.*?</p>)?(?:\s*<p><a class="btn"[^\n]*</p>)?',
               folgenlink, s, count=1, flags=re.S)
    if not block:
        return s
    # Position: vor den Quellen, sonst vor dem Datenbank-Knopf, sonst vor </article>
    for anker in ('    <section><h2>Quellen</h2>', '    <p class="app">', '  </article>'):
        if anker in s:
            return s.replace(anker, block + anker, 1)
    return s

def main():
    geaendert = 0
    for a, p in zip(IDS, SEITEN):
        alt = ROH[a]
        neu = einsetzen(a, alt)
        if neu != alt:
            open(p, 'w', encoding='utf-8').write(neu); geaendert += 1
    print('verwandt.py: %d von %d Themenseiten geändert' % (geaendert, len(IDS)))

if __name__ == '__main__':
    main()
