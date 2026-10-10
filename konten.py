#!/usr/bin/env python3
"""Kleine Kanal-Zeile („Folge uns“) unten im Fuß aller Seiten mit </footer>.

Idempotent zwischen <!-- konten:start --> und <!-- konten:end -->, direkt vor </footer>.
Neue Kanäle nur hier in KONTEN eintragen und das Skript erneut laufen lassen.
Aufruf im Repo: python3 konten.py   (--pruefen = nur zählen)
Seit 08.10.2026 (Paul: „klein unten, da sollen alle unsere Accounts stehen“).
"""
import os, re, sys

KONTEN = [
    ('Spotify', 'https://open.spotify.com/show/033JO82L47Sg4YSmPYas0z'),
    ('Apple Podcasts', 'https://podcasts.apple.com/de/podcast/biohacking-kompakt/id6804214652'),
    ('Amazon Music', 'https://music.amazon.de/podcasts/63f68fc2-9797-4049-8b8e-b255810f029e/biohacking-kompakt'),
    ('YouTube', 'https://www.youtube.com/@biohackingkompakt'),
    ('TikTok', 'https://www.tiktok.com/@biohackingkompakt.de'),
    ('Discord', 'https://discord.gg/MWzNgk3JgJ'),
]
MUSTER = re.compile(r'<!-- konten:start -->.*?<!-- konten:end -->\n?', re.S)

def block(en):
    links = ' · '.join('<a href="%s" target="_blank" rel="noopener">%s</a>' % (u, n) for n, u in KONTEN)
    text = 'Follow Biohacking Kompakt:' if en else 'Biohacking Kompakt folgen:'
    return ('<!-- konten:start -->\n<p class="konten" style="font-size:.82em;opacity:.8;margin:.5em 0 0">'
            '%s %s</p>\n<!-- konten:end -->\n' % (text, links))

def seiten():
    for wurzel, ordner, dateien in os.walk('.'):
        ordner[:] = [o for o in ordner if not o.startswith('.') and o not in ('node_modules', 'deploy', 'podcast-scripts', 'docs')]
        for d in dateien:
            if d.endswith('.html') and not d.startswith('google') and d != 'stimmtest.html':
                yield os.path.relpath(os.path.join(wurzel, d), '.')

def main():
    pruefen = '--pruefen' in sys.argv
    neu = gleich = 0
    for p in seiten():
        s = open(p, encoding='utf-8').read()
        if '</footer>' not in s:
            continue
        en = p.startswith('en' + os.sep) or p == os.path.join('en', 'index.html')
        z = MUSTER.sub('', s)
        i = z.rfind('</footer>')
        vor = z[:i].rstrip()
        if vor.endswith('</div>'):  # Fuß mit Container (Startseite): in den Container setzen
            i = vor.rfind('</div>')
        z = z[:i] + block(en) + z[i:]
        if z == s:
            gleich += 1
            continue
        neu += 1
        if not pruefen:
            open(p, 'w', encoding='utf-8').write(z)
    print('konten.py: %d Seiten %s, %d unverändert' % (neu, 'abweichend' if pruefen else 'aktualisiert', gleich))

if __name__ == '__main__':
    main()
