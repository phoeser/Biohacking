#!/usr/bin/env python3
"""Fragen-&-Beschwerden-Seiten: Kasten „Weitere Themen dazu“ (idempotent, seit 25.10.2026).

Jede Seite unter /problem/ (und /en/problem/) hat oben die kuratierte Liste „Was die Datenbank dazu sagt“.
Darunter setzt dieses Skript zwischen <!-- ziele:start/end --> weitere passende Themenseiten, sortiert nach
Human-Evidenz (BK-Score). Welche Themen passen, steht kuratiert in docs/ziele-auswahl.json (Slug → ids);
die Stichwortsuche unten liefert nur Kandidaten dafür. Neue Themenseite passend? Dort ergänzen.
Zweck: Leser finden mehr passende Themen, und Suchmaschinen finden über die interne Verlinkung
auch Seiten, die sie bisher nur entdeckt, aber nicht aufgenommen haben.

Aufruf: python3 ziele.py [--pruefen]
"""
import glob, html, json, os, re, sys

ZIELE = {
    'abnehmen-bauchfett': r'abnehm|gewicht|bauchfett|viszeral|fettverbrenn|adipositas|übergewicht|sättigung|appetit|glp-1',
    'blutzucker-heisshunger': r'blutzucker|insulin|glukose|heißhunger|diabetes|hba1c',
    'entzuendung': r'entzünd|crp\b|inflamm',
    'gelenke': r'gelenk|arthrose|knorpel|sehne|bänder',
    'haarausfall': r'haarausfall|haarwuchs|alopezie|\bhaare\b',
    'haut-altern': r'\bhaut|falten|hautalter',
    'herz-blutdruck': r'blutdruck|\bherz|cholesterin|\bldl\b|gefäß|arterien|kreislauf',
    'immunsystem': r'immun|infekt|erkältung',
    'konzentration-brain-fog': r'konzentration|fokus|kognit|gedächtnis|brain fog|nootrop',
    'libido-testosteron': r'testosteron|libido|erekt|potenz',
    'longevity-einstieg': r'longevity|lebensdauer|lebenserwartung|senolyt|autophagie|\balterung|biologisches alter',
    'muskelaufbau-ab-40': r'muskel|sarkopenie|krafttraining|muskelmasse',
    'regeneration-sport': r'regeneration|muskelkater|ausdauer|verletzung|wundheilung|sehnen',
    'schlecht-schlafen': r'schlaf|insomnie',
    'staendig-muede': r'müdigkeit|erschöpf|fatigue|energie|eisenmangel|antrieb',
    'stress-anspannung': r'stress|angst|cortisol|unruhe|entspann',
    'verdauung-blaehbauch': r'\bdarm|verdauung|bläh|reizdarm|mikrobiom',
    'wechseljahre': r'wechseljahr|menopause|hitzewallung',
    'kopfschmerzen-migraene': r'kopfschmerz|migräne',
    'prostata': r'prostata|harndrang|blase',
    'fettleber': r'fettleber|leberfett|masld|nafld',
    'cholesterin-senken': r'cholesterin|\bldl\b|lipoprotein',
}
MAX = 30
# Warnseiten (Anabolika, SARMs) und Aromatasehemmer passen nur über Stichwörter, nicht inhaltlich – nie listen.
AUSSCHLUSS = r'anabol|steroid|\bsarm|aromatase'
MUSTER = re.compile(r'\n?    <!-- ziele:start -->.*?<!-- ziele:end -->', re.S)


def text(p):
    h = open(p, encoding='utf-8').read()
    teile = []
    for pat in (r'<title>(.*?)</title>', r'<h1>(.*?)</h1>', r'<p class="unter">(.*?)</p>', r'<p class="lead">(.*?)</p>'):
        m = re.search(pat, h, re.S)
        if m:
            teile.append(re.sub(r'<[^>]+>', '', m.group(1)))
    return html.unescape(' '.join(teile)).lower()


def name(p):
    m = re.search(r'<h1>(.*?)</h1>', open(p, encoding='utf-8').read(), re.S)
    return html.unescape(re.sub(r'<[^>]+>', '', m.group(1))).strip() if m else None


def main():
    schreiben = '--pruefen' not in sys.argv
    scores = {e['id']: e for e in json.load(open('scores.json', encoding='utf-8'))['eintraege']}
    themen = {}
    for p in glob.glob('thema/*.html'):
        sid = os.path.basename(p)[:-5]
        if sid == 'index' or sid not in scores:
            continue
        h = open(p, encoding='utf-8').read()
        if 'noindex' in h:
            continue
        themen[sid] = text(p)
    global AUSWAHL
    AUSWAHL = json.load(open('docs/ziele-auswahl.json', encoding='utf-8'))
    geaendert = 0
    for slug, rx in ZIELE.items():
        treffer = [s for s in AUSWAHL.get(slug, []) if s in themen]
        for en in (False, True):
            pfad = ('en/' if en else '') + 'problem/%s.html' % slug
            if not os.path.exists(pfad):
                continue
            h = open(pfad, encoding='utf-8').read()
            ohne = MUSTER.sub('', h)
            schon = set(re.findall(r'href="/(?:en/)?thema/([^".]+)\.html"', ohne))
            schon |= set(re.findall(r'href="/(?:en/)?#[a-z]+/([^"]+)"', ohne))
            liste = sorted((s for s in treffer if s not in schon),
                           key=lambda s: (-scores[s].get('evidenz', 0), scores[s]['name'].lower()))[:MAX]
            if not liste:
                continue
            li = []
            for s in liste:
                ziel = ('en/' if en else '') + 'thema/%s.html' % s
                if not os.path.exists(ziel):
                    continue
                n = (name(ziel) if en else None) or scores[s]['name']
                li.append('        <li><a href="/%s">%s</a> <span class="sc-label">%s %d/10</span></li>'
                          % (ziel, html.escape(n), 'Evidence' if en else 'Evidenz', scores[s].get('evidenz', 0)))
            if not li:
                continue
            kopf = ('More topics on this – sorted by human evidence' if en else 'Weitere Themen dazu – sortiert nach Human-Evidenz')
            satz = ('Further topic pages that touch on this question. The BK-Score rates the state of knowledge, not the substance.'
                    if en else 'Weitere Themenseiten, die diese Frage berühren. Der BK-Score bewertet den Wissensstand, nicht die Substanz.')
            block = ('\n    <!-- ziele:start -->\n    <section class="vw weitere">\n      <h2>%s</h2>\n      <p>%s</p>\n      <ul>\n%s\n      </ul>\n    </section>\n    <!-- ziele:end -->'
                     % (kopf, satz, '\n'.join(li)))
            i = ohne.find('\n    <section class="faq">')
            if i < 0:
                i = ohne.find('\n  </article>')
            neu = ohne[:i] + block + ohne[i:]
            if neu != h:
                geaendert += 1
                if schreiben:
                    open(pfad, 'w', encoding='utf-8').write(neu)
            print(pfad, len(li))
    print('geändert:', geaendert)


if __name__ == '__main__':
    main()
