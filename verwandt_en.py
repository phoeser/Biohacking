#!/usr/bin/env python3
"""Verwandte Themen und Folgenlink auf den englischen Themenseiten (en/thema/).

Warum (15.11.2026): Die englischen Themenseiten bringen gut zwei Drittel der
Google-Impressionen, waren intern aber schwach verlinkt. Der Kasten „Passt dazu"
(Übersetzung) zeigte oft auf die deutschen Seiten, „Ähnliche Themen" und
„Fragen dazu" aus verwandt.py fehlten ganz, und der Podcast-Kasten verlinkte
die englische Folgenseite nicht. Dadurch hatten alle 152 englischen
Folgenseiten und viele Vergleichsseiten nur die Übersicht als Verweis.

Dieses Skript (idempotent, nach verwandt.py und vor sprachen.py ausführen):
  1. setzt auf jeder en/thema/X.html den Block zwischen <!-- verwandt:start/end -->
     als englisches Spiegelbild des deutschen Blocks aus thema/X.html (gleiche
     Auswahl, Links auf /en/…, Linktext = englischer Seitentitel, Begründung
     übersetzt). Ziele ohne englische Fassung fallen weg.
  2. biegt im Inhalt englischer Seiten Links auf deutsche Inhaltsseiten
     (/thema/, /tipp/, /vergleich/, /problem/, /glossar/, /folge/) auf die
     englische Fassung um, wenn es sie gibt (nicht den DE|EN-Umschalter,
     nicht <link>-Tags, nicht Weiterleitungsseiten).
  3. setzt im Podcast-Kasten den Link auf /en/folge/<nr>.html.

  python3 verwandt_en.py            # schreiben
  python3 verwandt_en.py --pruefen  # nur zählen
"""
import glob, html, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
START, ENDE = '<!-- verwandt:start -->', '<!-- verwandt:end -->'
PRUEFEN = '--pruefen' in sys.argv

ZIEL_EN = {
    'Besser schlafen': 'Better sleep', 'Stress reduzieren': 'Less stress', 'Mehr Energie': 'More energy',
    'Fokus & Konzentration': 'Focus', 'Immunsystem stärken': 'Immune system', 'Stimmung verbessern': 'Mood',
    'Muskelaufbau': 'Muscle building', 'Fettverbrennung / Abnehmen': 'Fat loss', 'Anti-Aging / Longevity': 'Longevity',
    'Gelenke & Bewegung': 'Joints', 'Bessere Verdauung': 'Digestion', 'Hormonbalance': 'Hormone balance',
    'Ausdauer / Sport': 'Endurance', 'Haut, Haare, Nägel': 'Skin, hair, nails', 'Blutzucker regulieren': 'Blood sugar',
    'Entgiftung': 'Detox', 'Ängstlichkeit': 'Anxiety', 'Allergien': 'Allergies', 'Sauerstoffversorgung': 'Oxygen supply',
    'Atemtraining': 'Breathing', 'Fasten & Autophagie': 'Fasting', 'Mitochondrien & Zellenergie': 'Mitochondria',
    'Entzündung senken': 'Inflammation', 'Kognitive Leistung': 'Cognition', 'Herz & Kreislauf': 'Heart',
    'Leber & Entgiftung': 'Liver', 'Libido & Sexualität': 'Libido', 'Methylierung & MTHFR': 'Methylation',
    'Senolytisch / Zellreinigung': 'Senolytics',
}
GRUND_EN = {'Oft zusammen genannt': 'Often mentioned together', 'Zusammen genannt': 'Mentioned together',
            'Verwandtes Thema': 'Related topic', 'Gleiche Rubrik': 'Same category', 'Ähnlicher Zweck': 'Similar purpose',
            'Vergleich': 'Comparison', 'Frage': 'Question'}


def lies(p):
    return open(p, encoding='utf-8').read()


_ok = {}
def en_seite(pfad):
    """'/thema/x.html' -> '/en/thema/x.html', wenn es eine echte englische Seite gibt."""
    p = 'en' + pfad
    if p not in _ok:
        _ok[p] = os.path.exists(p) and 'http-equiv="refresh"' not in lies(p)[:3000]
    return '/' + p if _ok[p] else None


_titel = {}
def titel(p):
    if p not in _titel:
        m = re.search(r'<h1[^>]*>(.*?)</h1>', lies(p.lstrip('/')), re.S)
        t = html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', m.group(1)))).strip() if m else ''
        _titel[p] = re.split(r'\s+[–—:|]\s+', t)[0].strip()
    return _titel[p]


def grund_en(g):
    if g.startswith('Gleiches Ziel: '):
        z = ZIEL_EN.get(g[len('Gleiches Ziel: '):])
        return 'Same goal: ' + z if z else 'Similar purpose'
    return GRUND_EN.get(g, 'Related topic')


def block_en(de):
    m = re.search(re.escape(START) + r'(.*?)' + re.escape(ENDE), de, re.S)
    if not m:
        return ''
    teile = []
    for h2, inhalt in re.findall(r'<section class="vw">\s*<h2>(.*?)</h2>\s*<ul>(.*?)</ul>', m.group(1), re.S):
        zeilen = []
        for g, href in re.findall(r'<li><span class="vw-grund">(.*?)</span><a href="([^"]+)">', inhalt):
            ziel = en_seite(href)
            if not ziel:
                continue
            t = titel(ziel)
            if t:
                zeilen.append('        <li><span class="vw-grund">%s</span><a href="%s">%s</a></li>'
                              % (html.escape(grund_en(html.unescape(g))), ziel, html.escape(t)))
        if zeilen:
            kopf = 'Similar topics' if h2.startswith('Ähnliche') else 'Questions and comparisons'
            teile.append('    <section class="vw">\n      <h2>%s</h2>\n      <ul>\n%s\n      </ul>\n    </section>'
                         % (kopf, '\n'.join(zeilen)))
    if not teile:
        return ''
    return '    ' + START + '\n' + '\n'.join(teile) + '\n    ' + ENDE + '\n'


LINK = re.compile(r'<a href="(/(?:thema|tipp|vergleich|problem|glossar|folge)/[^"#?]+\.html)(#[^"]*)?"(?![^>]*hreflang)')

def links_umbiegen(s):
    kopf, rumpf = s.split('<body', 1) if '<body' in s else ('', s)
    def ersetze(m):
        ziel = en_seite(m.group(1))
        return '<a href="%s%s"' % (ziel, m.group(2) or '') if ziel else m.group(0)
    # Navigation (mit DE|EN-Umschalter) bleibt, wie sie ist
    teile = re.split(r'(<nav>.*?</nav>)', rumpf, flags=re.S)
    teile = [t if t.startswith('<nav>') else LINK.sub(ersetze, t) for t in teile]
    return (kopf + '<body' if kopf else '') + ''.join(teile)


def podcast(s):
    s = re.sub(r'\s*<p class="pod-seite">.*?</p>', '', s, flags=re.S)
    def f(m):
        nr = m.group(1)
        if not os.path.exists('en/folge/%s.html' % nr):
            return m.group(0)
        return m.group(0) + ('\n      <p class="pod-seite"><a href="/en/folge/%s.html">Episode page with summary and sources</a></p>' % nr)
    return re.sub(r'<p class="pod-nr">Episode (\d+)</p>(?:\s*<h3>.*?</h3>)?(?:\s*<p class="pod-note">.*?</p>)?(?:\s*<p><a class="btn"[^\n]*</p>)?',
                  f, s, count=1, flags=re.S)


def main():
    n_block = n_seiten = 0
    alle = sorted(p for p in glob.glob('en/**/*.html', recursive=True) if 'http-equiv="refresh"' not in lies(p)[:3000])
    for p in alle:
        alt = lies(p)
        s = links_umbiegen(alt)
        if p.startswith('en/thema/') and not p.endswith('index.html'):
            de = 'thema/' + os.path.basename(p)
            s = re.sub(r'\n?[ \t]*%s.*?%s\n?' % (re.escape(START), re.escape(ENDE)), '\n', s, flags=re.S)
            blk = block_en(lies(de)) if os.path.exists(de) else ''
            if blk:
                n_block += 1
                for anker in ('    <section><h2>Sources</h2>', '    <p class="app">', '  </article>'):
                    if anker in s:
                        s = s.replace(anker, blk + anker, 1)
                        break
            s = podcast(s)
        if s != alt:
            n_seiten += 1
            if not PRUEFEN:
                open(p, 'w', encoding='utf-8').write(s)
    print('verwandt_en.py: %d Seiten %s, %d mit Block „Similar topics"' % (n_seiten, 'zu ändern' if PRUEFEN else 'geändert', n_block))


if __name__ == '__main__':
    main()
