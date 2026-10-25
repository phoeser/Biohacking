#!/usr/bin/env python3
"""Meldet geänderte Seiten per IndexNow an Bing, Yandex, Seznam & Co. (Bing speist die Websuche von ChatGPT und Copilot).

Aufruf nach einem Deploy, der live geprüft ist:
  python3 indexnow.py thema/glycin.html en/thema/glycin.html   # einzelne Pfade
  python3 indexnow.py --git <basis-sha>                          # alle .html seit <basis-sha>
  python3 indexnow.py --alle                                     # alle URLs aus sitemap.xml

Der Schlüssel ist öffentlich (liegt als Datei im Wurzelverzeichnis), kein Geheimnis.
"""
import json, re, subprocess, sys, urllib.request

HOST = 'biohackingkompakt.de'
KEY = 'd677647f0731cb1b0f245820ab99316d'


def urls_aus(args):
    if args[:1] == ['--alle']:
        return [u for u in re.findall(r'<loc>([^<]+)</loc>', open('sitemap.xml', encoding='utf-8').read())
                if u.startswith(f'https://{HOST}/')]
    if args[:1] == ['--git']:
        pfade = subprocess.run(['git', 'diff', '--name-only', args[1], 'HEAD'],
                               capture_output=True, text=True, check=True).stdout.split()
    else:
        pfade = args
    return [f'https://{HOST}/' + p.lstrip('/') for p in pfade if p.endswith('.html')]


def melden(urls):
    for i in range(0, len(urls), 10000):
        body = {'host': HOST, 'key': KEY, 'keyLocation': f'https://{HOST}/{KEY}.txt', 'urlList': urls[i:i + 10000]}
        req = urllib.request.Request('https://api.indexnow.org/indexnow', data=json.dumps(body).encode(),
                                     headers={'Content-Type': 'application/json; charset=utf-8'})
        with urllib.request.urlopen(req, timeout=60) as r:
            print(f'{len(body["urlList"])} URLs gemeldet, HTTP {r.status}')


if __name__ == '__main__':
    u = urls_aus(sys.argv[1:])
    if not u:
        sys.exit('keine URLs')
    melden(u)
