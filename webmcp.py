#!/usr/bin/env python3
"""WebMCP-Skript auf allen öffentlichen Seiten einbinden (idempotent, seit 27.10.2026).

Setzt zwischen <!-- webmcp:start --> und <!-- webmcp:end --> direkt vor </body>
<script defer src="/js/webmcp.js?v=<8 Zeichen SHA-1>"></script>. Ändert sich js/webmcp.js,
zieht ein erneuter Lauf die Version auf allen Seiten nach. index.html bindet die Datei
selbst ein (Cache-Buster über buster.py) und wird übersprungen, ebenso Prüf- und Testseiten.
Aufruf im Repo: python3 webmcp.py [--pruefen]
"""
import hashlib, os, re, sys

AUSNAHMEN = {'index.html', 'stimmtest.html', 'auto_deploy.html'}
MUSTER = re.compile(r'<!-- webmcp:start -->.*?<!-- webmcp:end -->\n?', re.S)


def seiten():
    for wurzel, ordner, dateien in os.walk('.'):
        ordner[:] = [o for o in ordner if not o.startswith('.') and o not in ('node_modules', 'deploy', 'podcast-scripts', 'docs', 'demo')]
        for d in dateien:
            if not d.endswith('.html'):
                continue
            pfad = os.path.relpath(os.path.join(wurzel, d), '.')
            if pfad in AUSNAHMEN or d.startswith('google'):
                continue
            yield pfad


def main():
    pruefen = '--pruefen' in sys.argv
    v = hashlib.sha1(open('js/webmcp.js', 'rb').read()).hexdigest()[:8]
    block = '<!-- webmcp:start -->\n<script defer src="/js/webmcp.js?v=%s"></script>\n<!-- webmcp:end -->\n' % v
    geaendert = gleich = ohne = 0
    for p in seiten():
        s = open(p, encoding='utf-8').read()
        if '</body>' not in s:
            ohne += 1
            continue
        if MUSTER.search(s):
            # Vorhandenen Block an seiner Stelle ersetzen – so bleibt die Reihenfolge mit beacon.py stabil
            neu = MUSTER.sub(lambda m: block, s, count=1)
        else:
            i = s.rfind('</body>')
            neu = s[:i] + block + s[i:]
        if neu == s:
            gleich += 1
            continue
        geaendert += 1
        if not pruefen:
            open(p, 'w', encoding='utf-8').write(neu)
    print('webmcp.py: %d Seiten %s, %d unverändert, %d ohne </body> (v=%s)'
          % (geaendert, 'zu ändern' if pruefen else 'aktualisiert', gleich, ohne, v))


if __name__ == '__main__':
    main()
