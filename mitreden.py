#!/usr/bin/env python3
"""Kasten „Mitreden“ mit Discord-Einladung auf allen deutschen Podcast-Folgenseiten.

Idempotent zwischen <!-- mitreden:start --> und <!-- mitreden:end -->, direkt nach dem
Kasten „Anhören“ (<section class="pod">). Fehlt der, steht der Kasten vor <p class="app">.
Nur folge/<nr>.html, nicht folge/index.html und nicht die en/-Seiten (der Server ist deutsch).
Aufruf im Repo: python3 mitreden.py   (--pruefen = nur zählen)
Nach jeder neuen oder neu gebauten Folgenseite erneut ausführen und die Folgenseiten mit deployen.
Seit 22.10.2026 (Paul: Link zum Discord sichtbarer machen, Kasten auf den Folgenseiten).
"""
import glob, os, re, sys

EINLADUNG = 'https://discord.gg/pa3YNFfNSn'  # dauerhaft, führt in #willkommen (gleicher Link wie in konten.py)
MUSTER = re.compile(r'[ \t]*<!-- mitreden:start -->.*?<!-- mitreden:end -->\n?', re.S)
POD = re.compile(r'(<section class="pod">.*?</section>\n)', re.S)

BLOCK = (
    '    <!-- mitreden:start -->\n'
    '    <section class="pod mitreden">\n'
    '      <h2>Mitreden</h2>\n'
    '      <p>Fragen, Widerspruch oder eigene Erfahrungen zu dieser Folge? Diskutier mit uns und anderen '
    'Hörerinnen und Hörern auf dem Discord-Server von Biohacking Kompakt.</p>\n'
    '      <p class="hoer"><a class="btn" href="%s" target="_blank" rel="noopener">Zum Discord-Server</a></p>\n'
    '    </section>\n'
    '    <!-- mitreden:end -->\n' % EINLADUNG
)


def einsetzen(s):
    z = MUSTER.sub('', s)
    m = POD.search(z)
    if m:
        return z[:m.end()] + BLOCK + z[m.end():]
    i = z.find('    <p class="app">')
    if i < 0:
        return None
    return z[:i] + BLOCK + z[i:]


def main():
    pruefen = '--pruefen' in sys.argv
    neu = gleich = ohne = 0
    for p in sorted(glob.glob(os.path.join('folge', '*.html'))):
        if os.path.basename(p) == 'index.html':
            continue
        s = open(p, encoding='utf-8').read()
        z = einsetzen(s)
        if z is None:
            ohne += 1
            print('  kein Ankerpunkt:', p)
            continue
        if z == s:
            gleich += 1
            continue
        neu += 1
        if not pruefen:
            open(p, 'w', encoding='utf-8').write(z)
    print('mitreden.py: %d Seiten %s, %d unverändert, %d ohne Ankerpunkt'
          % (neu, 'abweichend' if pruefen else 'aktualisiert', gleich, ohne))


if __name__ == '__main__':
    main()
