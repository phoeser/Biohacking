#!/usr/bin/env python3
"""RSS-Feed /neu.xml mit den neuesten Themen-, Tipp- und Vergleichsseiten.

Quelle: datePublished im JSON-LD der Seiten (Seiten ohne datePublished fehlen im Feed).
Make liest den Feed und postet neue Seiten in Discord #ankündigungen (seit 08.10.2026).
Aufruf im Repo: python3 feed.py   (idempotent; --pruefen = nur vergleichen)
"""
import glob, html, re, sys, datetime
from email.utils import format_datetime

SITE = 'https://biohackingkompakt.de'
ANZAHL = 40

def lies(p):
    s = open(p, encoding='utf-8').read()
    d = re.search(r'"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})', s)
    if not d:
        return None
    t = re.search(r'<title>([^<]*)</title>', s)
    m = re.search(r'<meta name="description" content="([^"]*)"', s)
    titel = html.unescape(t.group(1)).replace(' | Biohacking Kompakt', '').strip() if t else p
    return dict(datum=d.group(1), titel=titel, text=html.unescape(m.group(1)) if m else '', url='%s/%s' % (SITE, p))

def main():
    eintraege = [e for p in sorted(glob.glob('thema/*.html') + glob.glob('tipp/*.html') + glob.glob('vergleich/*.html'))
                 if not p.endswith('index.html') for e in [lies(p)] if e]
    eintraege.sort(key=lambda e: (e['datum'], e['url']), reverse=True)
    eintraege = eintraege[:ANZAHL]
    def rfc(d):
        return format_datetime(datetime.datetime.strptime(d, '%Y-%m-%d').replace(hour=12, tzinfo=datetime.timezone.utc))
    items = ''.join(
        '<item><title>%s</title><link>%s</link><guid isPermaLink="true">%s</guid><pubDate>%s</pubDate><description>%s</description></item>\n'
        % (html.escape(e['titel']), e['url'], e['url'], rfc(e['datum']), html.escape(e['text'])) for e in eintraege)
    neu = ('<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n'
           '<title>Biohacking Kompakt – neue Seiten</title><link>%s/</link>\n'
           '<description>Neue Themen-, Tipp- und Vergleichsseiten auf biohackingkompakt.de</description><language>de</language>\n'
           '%s</channel></rss>\n' % (SITE, items))
    try:
        alt = open('neu.xml', encoding='utf-8').read()
    except FileNotFoundError:
        alt = ''
    if '--pruefen' in sys.argv:
        print('neu.xml', 'unverändert' if alt == neu else 'WEICHT AB')
        return
    if alt != neu:
        open('neu.xml', 'w', encoding='utf-8').write(neu)
    print('neu.xml: %d Einträge, neuester %s' % (len(eintraege), eintraege[0]['datum'] if eintraege else '-'))

if __name__ == '__main__':
    main()
