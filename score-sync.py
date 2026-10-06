#!/usr/bin/env python3
"""BK-Score auf statischen Seiten nachziehen (Quelle: scores.json aus scores-bauen.js).

Gleicht ab, was eine Seite zum BK-Score zeigt, mit dem aktuellen Stand in js/data/scores.js:
  - thema/, tipp/ (DE):  Score-Tabelle (Zahl + Balkenbreite), Label, Begruendung (beleg),
                         JSON-LD-PropertyValues "BK-Score: <Achse>"
  - vergleich/ (DE):     Vergleichstabelle (Zahl + Balken + Unterschied-Spalte), Einordnung,
                         Begruendungs-Abschnitte "Warum diese Zahlen"
  - en/thema, en/vergleich: nur Zahlen, Balken, Label (Begruendung ist uebersetzt -> nur Hinweis)

Aufruf:  python3 score-sync.py            -> nur pruefen (Liste der Abweichungen)
         python3 score-sync.py --schreiben -> Abweichungen beheben, dateModified/Stand auf heute
Gehoert in die Bau-Kette nach scores-bauen.js (siehe CLAUDE.md).
"""
import json, re, sys, html, glob, datetime, os

SCHREIBEN = '--schreiben' in sys.argv
HEUTE = datetime.date.today().isoformat()
os.chdir(os.path.dirname(os.path.abspath(__file__)))

D = json.load(open('scores.json'))
ACHSEN = ['evidenz', 'mechanismus', 'sicherheit', 'hype', 'anwendung']
DE_NAMEN = ['Human-Evidenz', 'Mechanismus', 'Sicherheits-Datenlage', 'Hype-Abstand', 'Anwendungserfahrung']
EN_NAMEN = ['Human evidence', 'Mechanism', 'Safety data', 'Hype gap', 'Track record of use']
EN_LABEL = {
    'Nicht am Menschen untersucht': 'Not studied in humans',
    'Hype weit vor Evidenz': 'Hype far ahead of evidence',
    'Dünne Humanevidenz': 'Thin human evidence',
    'Belegt, mit Einschränkungen': 'Supported, with caveats',
    'Gut belegt, stark überhöht beworben': 'Well supported, heavily overhyped',
    'Untersucht – Nutzen nicht gezeigt': 'Studied – no benefit shown',
    'Experimentell': 'Experimental',
    'Am Menschen geprüft, Ergebnisse unveröffentlicht': 'Tested in humans, results unpublished',
    'Lange angewendet, kaum untersucht': 'Long used, barely studied',
    'Gut belegt': 'Well supported',
    'Gut untersucht – Wirkung nicht bestätigt': 'Well studied – effect not confirmed',
}
EN_DIFF = {'evidenz': 'better studied', 'mechanismus': 'better studied', 'sicherheit': 'better studied',
           'hype': 'closer to the data', 'anwendung': 'in use longer'}
DIFF_WORT = {'evidenz': 'besser untersucht', 'mechanismus': 'besser untersucht', 'sicherheit': 'besser untersucht',
             'hype': 'näher an den Daten', 'anwendung': 'länger im Einsatz'}

# Seite -> Score-Eintrag (ueber das Feld url in scores.json; zusaetzlich /thema/<id>.html)
NACH_PFAD = {}
for e in D['eintraege']:
    u = (e.get('url') or '').replace('https://biohackingkompakt.de/', '')
    if u.endswith('.html'):
        NACH_PFAD.setdefault(u, e)
for e in D['eintraege']:
    NACH_PFAD.setdefault('thema/%s.html' % e['id'], e)
    if e['view'] == 'tipps':
        NACH_PFAD.setdefault('tipp/%s.html' % e['id'], e)

def esc(t):
    return html.escape(t, quote=False)

def norm(t):
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', '', t))).strip()

befunde, geaendert = [], set()

def merke(f, was):
    befunde.append('%s: %s' % (f, was))

def score_tabelle(s, e, namen, f):
    """thema/tipp-Tabelle class=sc-tab: Zahl + Breite je Achse."""
    neu = s
    for a, n in zip(ACHSEN, namen):
        pat = re.compile(r'(<tr><th>' + re.escape(n) + r'</th><td><span class="sc-bar"><span style="width:)(\d+)(%"></span></span></td><td class="sc-num">)(\d+)(</td></tr>)')
        m = pat.search(neu)
        if not m:
            continue
        soll = e[a]
        if int(m.group(4)) != soll or int(m.group(2)) != soll * 10:
            merke(f, '%s %s -> %s' % (n, m.group(4), soll))
            neu = pat.sub(lambda mm: mm.group(1) + str(soll * 10) + mm.group(3) + str(soll) + mm.group(5), neu, count=1)
    return neu

def jsonld_werte(s, e, namen, f):
    neu = s
    for a, n in zip(ACHSEN, namen):
        pat = re.compile(r'("name":"BK-Score: ' + re.escape(n) + r'","value":)(\d+)')
        m = pat.search(neu)
        if m and int(m.group(2)) != e[a]:
            merke(f, 'JSON-LD %s %s -> %s' % (n, m.group(2), e[a]))
            neu = pat.sub(lambda mm: mm.group(1) + str(e[a]), neu)
    return neu

def label_sc(s, label, f):
    pat = re.compile(r'(<section class="sc"><h2>BK-Score <span class="sc-label">)([^<]*)(</span>)')
    m = pat.search(s)
    if m and html.unescape(m.group(2)) != label:
        merke(f, 'Label „%s“ -> „%s“' % (m.group(2), label))
        return pat.sub(lambda mm: mm.group(1) + esc(label) + mm.group(3), s, count=1)
    return s

def beleg_sc(s, e, f):
    """Erster <p> nach der Score-Tabelle = Begruendung (nur DE)."""
    pat = re.compile(r'(<section class="sc">.*?</table>\s*<p>)(.*?)(</p>)', re.S)
    m = pat.search(s)
    if not m or not e.get('beleg'):
        return s
    if norm(m.group(2)) != norm(e['beleg']):
        merke(f, 'Begründung veraltet')
        return s[:m.start(2)] + esc(e['beleg']) + s[m.end(2):]
    return s

def datum(s):
    s = re.sub(r'"dateModified":"\d{4}-\d{2}-\d{2}"', '"dateModified":"%s"' % HEUTE, s)
    s = re.sub(r'Stand: \d{4}-\d{2}-\d{2}', 'Stand: %s' % HEUTE, s)
    s = re.sub(r'Last updated: \d{4}-\d{2}-\d{2}', 'Last updated: %s' % HEUTE, s)
    return s

def balken(n):
    return '█' * n + '░' * (10 - n)

def vergleich(s, f, en=False):
    # Eintraege ueber die Links "Vollstaendiger Eintrag" bzw. Spaltenkoepfe bestimmen
    ids = re.findall(r'href="/(?:en/)?(thema|tipp)/([^"#]+\.html)">(?:Vollständiger Eintrag|Full entry)', s)
    es = [NACH_PFAD.get('%s/%s' % (t, p)) for t, p in ids]
    if len(es) != 2 or None in es:
        merke(f, 'Einträge nicht eindeutig erkannt – übersprungen')
        return s
    kopf = re.search(r'<thead><tr><th scope="col">[^<]*</th><th scope="col">([^<]*)</th><th scope="col">([^<]*)</th>', s)
    namen_sp = [html.unescape(kopf.group(1)), html.unescape(kopf.group(2))] if kopf else [es[0]['name'], es[1]['name']]
    neu = s
    for a, n in zip(ACHSEN, EN_NAMEN if en else DE_NAMEN):
        pat = re.compile(r'(<th scope="row">' + re.escape(n) + r'<span class="erkl">[^<]*</span></th>\s*<td><span class="bar" aria-hidden="true">)([█░]+)(</span> <b>)(\d+)(</b></td>\s*<td><span class="bar" aria-hidden="true">)([█░]+)(</span> <b>)(\d+)(</b></td>\s*<td class="diff">)([^<]*)(</td>)')
        m = pat.search(neu)
        if not m:
            continue
        v1, v2 = es[0][a], es[1][a]
        kurz = [re.sub(r'\s*\(.*?\)', '', x).strip() for x in namen_sp]
        alt_diff = html.unescape(m.group(10))
        gleich_w = ('even', 'tied', 'level') if en else ('gleichauf',)
        if v1 == v2:
            passt = alt_diff in gleich_w
            diff = m.group(10) if passt else gleich_w[0]
        else:
            sieger = kurz[0] if v1 > v2 else kurz[1]
            verlierer = kurz[1] if v1 > v2 else kurz[0]
            passt = alt_diff not in gleich_w and not alt_diff.startswith(verlierer + ' ') and (alt_diff.startswith(sieger) or sieger.split()[0] in alt_diff)
            diff = m.group(10) if passt else esc('%s %s' % (sieger, (EN_DIFF if en else DIFF_WORT)[a]))
        if (int(m.group(4)), int(m.group(8))) != (v1, v2) or not passt:
            merke(f, '%s %s/%s -> %s/%s' % (n, m.group(4), m.group(8), v1, v2))
            neu = neu[:m.start()] + m.group(1) + balken(v1) + m.group(3) + str(v1) + m.group(5) + balken(v2) + m.group(7) + str(v2) + m.group(9) + diff + m.group(11) + neu[m.end():]
    # Einordnung
    l1, l2 = es[0]['label'], es[1]['label']
    if en:
        l1, l2 = EN_LABEL.get(l1, l1), EN_LABEL.get(l2, l2)
    pat = re.compile(r'(<tfoot><tr><th scope="row">[^<]*</th><td colspan="2">)(.*?)( &nbsp;·&nbsp; )(.*?)(</td>)')
    m = pat.search(neu)
    if m and (html.unescape(m.group(2)), html.unescape(m.group(4))) != (l1, l2):
        merke(f, 'Einordnung „%s · %s“ -> „%s · %s“' % (m.group(2), m.group(4), l1, l2))
        neu = neu[:m.start()] + m.group(1) + esc(l1) + m.group(3) + esc(l2) + m.group(5) + neu[m.end():]
    # Begruendungen (nur DE)
    if not en:
        for e in es:
            pat = re.compile(r'(<section class="beleg"><h3>[^<]*</h3><p>)((?:(?!</section>).)*?)(</p>\s*<p class="mehr"><a href="/(?:thema|tipp)/' + re.escape(e['url'].split('/')[-1] if e.get('url') else e['id'] + '.html') + r'")', re.S)
            m = pat.search(neu)
            if m and e.get('beleg') and norm(m.group(2)) != norm(e['beleg']):
                merke(f, 'Begründung %s veraltet' % e['id'])
                neu = neu[:m.start(2)] + esc(e['beleg']) + neu[m.end(2):]
    return neu

def bearbeite(f):
    s = open(f, encoding='utf-8').read()
    alt = s
    en = f.startswith('en/')
    pfad = f[3:] if en else f
    if pfad.startswith('vergleich/'):
        if pfad.endswith('index.html'):
            return
        s = vergleich(s, f, en)
    else:
        e = NACH_PFAD.get(pfad)
        if not e or '<section class="sc">' not in s:
            return
        s = score_tabelle(s, e, EN_NAMEN if en else DE_NAMEN, f)
        s = jsonld_werte(s, e, EN_NAMEN if en else DE_NAMEN, f)
        s = label_sc(s, EN_LABEL.get(e['label'], e['label']) if en else e['label'], f)
        if not en:
            s = beleg_sc(s, e, f)
        else:
            m = re.search(r'<section class="sc">.*?</table>', s, re.S)
            if m and alt != s:
                merke(f, 'Hinweis: englische Begründung prüfen')
    if s != alt:
        s = datum(s)
        geaendert.add(f)
        if SCHREIBEN:
            open(f, 'w', encoding='utf-8').write(s)

for f in sorted(glob.glob('thema/*.html') + glob.glob('tipp/*.html') + glob.glob('vergleich/*.html')
                + glob.glob('en/thema/*.html') + glob.glob('en/vergleich/*.html')):
    bearbeite(f)

try:
    for b in befunde:
        print(b)
except BrokenPipeError:
    pass
print('score-sync: %d Abweichungen auf %d Seiten%s' % (len(befunde), len(geaendert), ' – behoben' if SCHREIBEN else ' (nur geprüft, --schreiben behebt)'))
