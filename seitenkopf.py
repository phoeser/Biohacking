#!/usr/bin/env python3
"""Kopfzeile „Lesezeit · Quellen, geprüft am" auf allen Themen-, Tipp- und Vergleichsseiten (DE+EN).

Setzt idempotent zwischen <!-- seitenkopf:start --> und <!-- seitenkopf:end --> direkt unter
die Überschrift (nach <h1> und dem Untertitel <p class="unter">, falls vorhanden) eine Zeile:
  DE  „6 Min. Lesezeit · 8 Quellen, geprüft am 17.10.2026"
  EN  „6 min read · 8 sources, checked October 17, 2026"

- Lesezeit: Wörter des Hauptinhalts (<article>) ohne Navigation, Fuß, Quellenliste,
  „Ähnliche Themen"/„Passt dazu", Datenbank-Knopf, Hinweiszeile und ohne die
  automatisch gesetzten Kästen (Zielstruktur, Antwort-Satz, diese Zeile selbst); 200 Wörter/Min., aufgerundet.
- Quellen: <li>-Einträge im Abschnitt „Quellen" / „Sources". „N Quellen" verlinkt auf den
  Abschnitt; fehlt dort ein Anker, setzt das Skript direkt nach der Überschrift
  <span id="quellen" class="sk-anker"></span> (EN id="sources"). Die Überschrift selbst bleibt
  unverändert, weil studien.py, verwandt.py und anwender.py genau nach <h2>Quellen</h2> suchen.
- Datum: dateModified aus dem JSON-LD, sonst das sichtbare „Stand:"-Datum.
  Ohne Quellen-Abschnitt (ältere Vergleichsseiten) heißt es „Stand <Datum>" statt „geprüft am".

Aufruf im Repo: python3 seitenkopf.py   (--pruefen = nur zählen, schreibt nichts)
Seit 12.11.2026 (Stufe 1 des Themenseiten-Entwurfs, von Paul freigegeben).
"""
import glob, html, math, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
ORDNER = ['thema', 'tipp', 'vergleich', 'en/thema', 'en/tipp', 'en/vergleich']
WPM = 200
MONATE = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December']

BLOCK = re.compile(r'\n?[ \t]*<!-- seitenkopf:start -->.*?<!-- seitenkopf:end -->', re.S)
ANKER_ALT = re.compile(r'<span id="(?:quellen|sources)" class="sk-anker"></span>')
KOPF = re.compile(r'</h1>(\s*<p class="unter">.*?</p>)?', re.S)
QUELLEN = re.compile(r'<section[^>]*>\s*<h2[^>]*>\s*(Quellen|Sources)\s*</h2>(.*?)</section>', re.S)


def seiten():
    for o in ORDNER:
        for p in sorted(glob.glob(os.path.join(ROOT, o, '*.html'))):
            if os.path.basename(p) != 'index.html':
                yield p


def ohne_bloecke(s):
    """Entfernt alles, was nicht zum Lesetext gehört (für die Wortzählung)."""
    s = re.sub(r'<!-- (seitenkopf|antwort|ziel|studien|verwandt|ziele|newsletter|anwender):start -->.*?<!-- \1:end -->', ' ', s, flags=re.S)
    s = re.sub(r'<(script|style|nav|form|button)\b[^>]*>.*?</\1>', ' ', s, flags=re.S | re.I)
    s = QUELLEN.sub(' ', s)
    s = re.sub(r'<section class="(?:vw|nl-box|ziel)\b[^"]*"[^>]*>.*?</section>', ' ', s, flags=re.S)
    s = re.sub(r'<p class="(?:app|disc|typ)\b[^"]*"[^>]*>.*?</p>', ' ', s, flags=re.S)
    return s


def woerter(article):
    t = re.sub(r'<[^>]+>', ' ', ohne_bloecke(article))
    t = html.unescape(t)
    return len([w for w in t.split() if re.search(r'\w', w)])


def datum(s):
    m = re.search(r'"dateModified"\s*:\s*"(\d{4})-(\d{2})-(\d{2})', s)
    if m:
        return int(m.group(1)), int(m.group(2)), int(m.group(3))
    m = re.search(r'(?:Stand|As of|Last updated)[:\s]+(\d{4})-(\d{2})-(\d{2})', s)
    if m:
        return int(m.group(1)), int(m.group(2)), int(m.group(3))
    m = re.search(r'(?:Stand|As of|Last updated)[:\s]+(\d{1,2})\.(\d{1,2})\.(\d{4})', s)
    if m:
        return int(m.group(3)), int(m.group(2)), int(m.group(1))
    return None


def zeile(en, minuten, n_quellen, d, anker):
    if en:
        teile = ['<b>%d min</b> read' % minuten]
        if n_quellen:
            q = '<a href="#%s"><b>%d %s</b></a>' % (anker, n_quellen, 'source' if n_quellen == 1 else 'sources')
            teile.append(q + (', checked %s %d, %d' % (MONATE[d[1] - 1], d[2], d[0]) if d else ''))
        elif d:
            teile.append('updated %s %d, %d' % (MONATE[d[1] - 1], d[2], d[0]))
    else:
        teile = ['<b>%d Min.</b> Lesezeit' % minuten]
        ds = '%02d.%02d.%04d' % (d[2], d[1], d[0]) if d else ''
        if n_quellen:
            q = '<a href="#%s"><b>%d %s</b></a>' % (anker, n_quellen, 'Quelle' if n_quellen == 1 else 'Quellen')
            teile.append(q + (', geprüft am ' + ds if d else ''))
        elif d:
            teile.append('Stand ' + ds)
    return ('\n    <!-- seitenkopf:start --><p class="sk">%s</p><!-- seitenkopf:end -->'
            % ' <span class="sk-trenner" aria-hidden="true">·</span> '.join(teile))


def bearbeite(s, en):
    if re.search(r'http-equiv="refresh"', s, re.I):
        return s, None
    z = BLOCK.sub('', s)
    z = ANKER_ALT.sub('', z)
    a = re.search(r'<article\b.*?</article>', z, re.S)
    if not a or not KOPF.search(z):
        return s, None
    article = a.group(0)
    minuten = max(1, math.ceil(woerter(article) / WPM))
    anker = 'sources' if en else 'quellen'
    qm = QUELLEN.search(z)
    n_quellen = len(re.findall(r'<li\b', qm.group(2))) if qm else 0
    if qm and not re.search(r'\bid="%s"' % anker, z):
        # Anker direkt nach der Überschrift des Quellen-Abschnitts
        i = qm.start() + qm.group(0).find('</h2>') + len('</h2>')
        z = z[:i] + '<span id="%s" class="sk-anker"></span>' % anker + z[i:]
    d = datum(z)
    k = KOPF.search(z)
    z = z[:k.end()] + zeile(en, minuten, n_quellen, d, anker) + z[k.end():]
    return z, (minuten, n_quellen, d)


def main():
    pruefen = '--pruefen' in sys.argv
    neu = gleich = ohne = 0
    ohne_q = []
    for p in seiten():
        rel = os.path.relpath(p, ROOT)
        s = open(p, encoding='utf-8').read()
        z, info = bearbeite(s, rel.startswith('en' + os.sep))
        if info is None:
            ohne += 1
            continue
        if not info[1]:
            ohne_q.append(rel)
        if z == s:
            gleich += 1
            continue
        neu += 1
        if not pruefen:
            open(p, 'w', encoding='utf-8').write(z)
    print('seitenkopf.py: %d Seiten %s, %d unverändert, %d übersprungen (Weiterleitungen)'
          % (neu, 'abweichend' if pruefen else 'aktualisiert', gleich, ohne))
    if ohne_q:
        print('  ohne Quellen-Abschnitt (Zeile mit „Stand"): %d, z. B. %s' % (len(ohne_q), ', '.join(ohne_q[:3])))


if __name__ == '__main__':
    main()
