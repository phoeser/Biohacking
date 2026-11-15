#!/usr/bin/env python3
"""Kasten „Weitere Folgen" (vorherige/nächste Folge) auf allen Folgenseiten, DE+EN.

Warum (15.11.2026): Die Folgenseiten ab etwa Folge 80 hatten außer der
Übersicht und der anderen Sprachfassung keinen einzigen internen Verweis –
kein Themenkasten zeigt auf sie. Mit Vor/Zurück hängen alle Folgen als Kette
zusammen. Idempotent zwischen <!-- folgennav:start/end -->, direkt vor dem
Knopf „Alle Folgen in der App". Nach jeder neuen Folgenseite erneut ausführen.

  python3 folgennav.py            # schreiben
  python3 folgennav.py --pruefen  # nur zählen
"""
import glob, html, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
START, ENDE = '<!-- folgennav:start -->', '<!-- folgennav:end -->'
PRUEFEN = '--pruefen' in sys.argv


def titel(p):
    s = open(p, encoding='utf-8').read()
    m = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    return html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', '', m.group(1)))).strip() if m else ''


def lauf(ordner, en):
    nrn = sorted(int(os.path.basename(p)[:-5]) for p in glob.glob(ordner + '/*.html')
                 if os.path.basename(p)[:-5].isdigit())
    geaendert = 0
    for i, nr in enumerate(nrn):
        p = '%s/%d.html' % (ordner, nr)
        alt = open(p, encoding='utf-8').read()
        s = re.sub(r'[ \t]*%s.*?%s\n\n?' % (re.escape(START), re.escape(ENDE)), '', alt, flags=re.S)
        zeilen = []
        for j, art in ((i - 1, 'Previous episode' if en else 'Vorherige Folge'),
                       (i + 1, 'Next episode' if en else 'Nächste Folge')):
            if 0 <= j < len(nrn):
                n2 = nrn[j]
                t = titel('%s/%d.html' % (ordner, n2))
                zeilen.append('        <li><span class="vw-grund">%s</span><a href="/%s/%d.html">%s %d: %s</a></li>'
                              % (art, ordner, n2, 'Episode' if en else 'Folge', n2, html.escape(t)))
        if zeilen:
            blk = ('    %s\n    <section class="vw">\n      <h2>%s</h2>\n      <ul>\n%s\n      </ul>\n    </section>\n    %s\n'
                   % (START, 'More episodes' if en else 'Weitere Folgen', '\n'.join(zeilen), ENDE))
            anker = '    <p class="app">'
            if anker in s:
                s = s.replace(anker, blk + '\n' + anker, 1)
        if s != alt:
            geaendert += 1
            if not PRUEFEN:
                open(p, 'w', encoding='utf-8').write(s)
    return geaendert, len(nrn)


if __name__ == '__main__':
    for ordner, en in (('folge', False), ('en/folge', True)):
        g, n = lauf(ordner, en)
        print('folgennav.py %s: %d von %d Folgenseiten %s' % (ordner, g, n, 'zu ändern' if PRUEFEN else 'geändert'))
