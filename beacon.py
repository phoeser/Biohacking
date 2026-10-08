#!/usr/bin/env python3
"""Cloudflare Web Analytics (cookielos) auf allen oeffentlichen Seiten einbauen.

Idempotent: setzt den Block zwischen <!-- beacon:start --> und <!-- beacon:end -->
direkt vor </body>. index.html hat das Snippet bereits fest im Quelltext und
wird uebersprungen. Ausgenommen sind Pruef- und Testseiten.
Aufruf im Repo: python3 beacon.py            (schreiben)
                python3 beacon.py --pruefen  (nur zaehlen, nichts aendern)
Seit 08.10.2026 (Paul): vorher zaehlte Cloudflare nur die Startseite.
"""
import os, re, sys

TOKEN = 'eb65c23d21004115bff539ec16445165'  # oeffentlicher Site-Token, steht ohnehin im Seitenquelltext
BLOCK = ('<!-- beacon:start -->\n'
         '<!-- Cloudflare Web Analytics: cookielos, einwilligungsfrei, siehe /datenschutz.html Abschnitt 2a. -->\n'
         '<script defer src="https://static.cloudflareinsights.com/beacon.min.js" '
         'data-cf-beacon=\'{"token": "%s"}\'></script>\n'
         '<!-- beacon:end -->\n' % TOKEN)
AUSNAHMEN = {'index.html', 'stimmtest.html', 'auto_deploy.html'}
MUSTER = re.compile(r'<!-- beacon:start -->.*?<!-- beacon:end -->\n?', re.S)

def seiten():
    for wurzel, ordner, dateien in os.walk('.'):
        ordner[:] = [o for o in ordner if not o.startswith('.') and o not in ('node_modules', 'deploy', 'podcast-scripts', 'docs')]
        for d in dateien:
            if not d.endswith('.html'):
                continue
            pfad = os.path.relpath(os.path.join(wurzel, d), '.')
            if pfad in AUSNAHMEN or d.startswith('google'):
                continue
            yield pfad

def main():
    pruefen = '--pruefen' in sys.argv
    neu = gleich = ohne_body = 0
    for p in seiten():
        s = open(p, encoding='utf-8').read()
        if '</body>' not in s:
            ohne_body += 1
            continue
        ziel = MUSTER.sub('', s)
        ziel = ziel.replace('</body>', BLOCK + '</body>', 1)
        if ziel == s:
            gleich += 1
            continue
        neu += 1
        if not pruefen:
            open(p, 'w', encoding='utf-8').write(ziel)
    print('beacon.py: %d Seiten %s, %d unveraendert, %d ohne </body>' %
          (neu, 'abweichend' if pruefen else 'aktualisiert', gleich, ohne_body))

if __name__ == '__main__':
    main()
