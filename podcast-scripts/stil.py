#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Stilpruefung fuer Paul-und-Paula-Skripte (SPRACHREGELN-Feinarbeit.md, Abschnitt F).

Aufruf:  python3 stil.py skript.md [weitere.md ...]
Meldet je Skript die Kennzahlen und jeden Verstoss. Rueckgabewert 1, wenn ein Verstoss vorliegt.
"""
import io, re, sys, os

FREIGEGEBEN = {'pause', 'dryly', 'hesitates', 'interrupting', 'quietly', 'annoyed', 'exhales', 'surprised'}
GAGS = [  # (Muster, min, max, Name)
    (r'Nochmal auf Deutsch', 1, 2, '„Nochmal auf Deutsch"'),
    (r'\bNotiert\.', 1, 1, '„Notiert."'),
    (r'lasse ich gelten', 1, 1, '„Das lasse ich gelten."'),
    (r'Nimm (den|ihn)\b', 0, 1, '„Nimm den Satz."'),
    (r'(^|\s)Bilanz\.', 1, 1, '„Bilanz."'),
    (r'Meine Zahl', 0, 1, '„Meine Zahl."'),
]
ZIEL_ZEICHEN = (8700, 9500)
ZEICHEN_JE_MINUTE = 831.0  # gemessen ueber zehn Folgen (Zeichen / 831 = Minuten)


def zuege(pfad):
    roh = io.open(pfad, encoding='utf-8').read()
    out, fehler = [], []
    for i, z in enumerate(roh.split('\n'), 1):
        if not z.strip():
            continue
        m = re.match(r'^(Paul|Paula):\s*(.+)$', z.strip())
        if not m:
            fehler.append('Zeile %d ist kein Sprecherzug: %r' % (i, z.strip()[:50]))
            continue
        out.append((m.group(1), m.group(2).strip()))
    return out, fehler


def sprechtext(t):
    return re.sub(r'\[[^\]]+\]\s*', '', t).strip()


def pruefe(pfad):
    tz, fehler = zuege(pfad)
    hinweise = []
    if not tz:
        return fehler, hinweise, {}
    # 1 Struktur
    if tz[0][0] != 'Paula':
        fehler.append('Datei beginnt nicht mit Paula')
    for i in range(1, len(tz)):
        if tz[i][0] == tz[i - 1][0]:
            fehler.append('Zug %d: %s spricht zweimal hintereinander' % (i + 1, tz[i][0]))
    # 2 Tags
    alle_tags = []
    for i, (sp, t) in enumerate(tz, 1):
        tags = re.findall(r'\[([^\]]+)\]', t)
        alle_tags += tags
        if len(tags) > 1:
            fehler.append('Zug %d: %d Tags in einem Zug (max 1)' % (i, len(tags)))
        for tg in tags:
            if tg not in FREIGEGEBEN:
                fehler.append('Zug %d: Tag [%s] ist nicht freigegeben' % (i, tg))
    pausen = alle_tags.count('pause')
    if pausen > 6:
        fehler.append('%d [pause] (max 6)' % pausen)
    if len(alle_tags) > 12:
        fehler.append('%d Tags insgesamt (max 12)' % len(alle_tags))
    # 3 Abbrueche
    abbr = [i for i, (sp, t) in enumerate(tz, 1) if re.search(r'[—–-]\s*$', t)]
    if len(abbr) < 1 or len(abbr) > 4:
        hinweise.append('%d Abbrueche (Zug endet auf Gedankenstrich), Ziel 1-4, besser 2-3' % len(abbr))
    c2 = [i for i, (sp, t) in enumerate(tz, 1) if re.match(r'^(\[[^\]]+\]\s*)?[—–-]\s', t)]
    if len(c2) > 1:
        fehler.append('%d Zuege beginnen mit Gedankenstrich (Form C2, max 1): %s' % (len(c2), c2))
    # 4 lange Zuege ohne Atem
    for i, (sp, t) in enumerate(tz, 1):
        s = sprechtext(t)
        if len(s) > 350 and not re.search(r'[—–?]', s):
            fehler.append('Zug %d: %d Zeichen ohne Gedankenstrich oder Frage' % (i, len(s)))
    # 5 Aufregungsstelle: drei kurze Zuege hintereinander
    kurz = [len(sprechtext(t).split()) <= 8 for _, t in tz]
    dreier = any(kurz[i] and kurz[i + 1] and kurz[i + 2] for i in range(len(kurz) - 2))
    if not dreier:
        hinweise.append('keine Stelle mit drei kurzen Zuegen (<= 8 Woerter) hintereinander')
    # 6 Mhm
    mhm = [(i, sp) for i, (sp, t) in enumerate(tz, 1) if re.match(r'^(\[[^\]]+\]\s*)?Mhm\.?$', t.strip())]
    if len(mhm) > 3:
        hinweise.append('%d „Mhm." (max 3)' % len(mhm))
    for i, sp in mhm:
        if sp != 'Paula':
            fehler.append('Zug %d: „Mhm." bei Paul (gehoert Paula)' % i)
    # 7 Gags
    ganz = '\n'.join('%s: %s' % z for z in tz)
    for muster, lo, hi, name in GAGS:
        n = len(re.findall(muster, ganz, re.M))
        if n < lo or n > hi:
            hinweise.append('%s kommt %d-mal vor (Ziel %d-%d)' % (name, n, lo, hi))
    # 8 Rueckbezuege
    folgen = re.findall(r'Folge ([a-zäöüß]+(?:und[a-zäöüß]+)?|\d+)', ganz)
    folgen = [f for f in folgen if re.match(r'^(\d+|ein|zwei|drei|vier|fünf|sechs|sieben|acht|neun|zehn|elf|zwölf|[a-zäöü]+(zehn|zig)|hundert)', f)]
    if len(folgen) > 2:
        fehler.append('%d Folgennummern genannt (max 2): %s' % (len(folgen), folgen))
    # 10 Laenge
    zeichen = sum(len(sprechtext(t)) for _, t in tz)
    if not (ZIEL_ZEICHEN[0] <= zeichen <= ZIEL_ZEICHEN[1]):
        fehler.append('%d Sprechzeichen, Zielband %d-%d' % (zeichen, ZIEL_ZEICHEN[0], ZIEL_ZEICHEN[1]))
    paula = sum(len(sprechtext(t)) for sp, t in tz if sp == 'Paula')
    kenn = dict(zuege=len(tz), zeichen=zeichen, minuten=zeichen / ZEICHEN_JE_MINUTE,
                paula=100 * paula // max(zeichen, 1), tags=len(alle_tags), pausen=pausen,
                abbrueche=len(abbr), c2=len(c2), mhm=len(mhm), folgen=folgen)
    return fehler, hinweise, kenn


def main(dateien):
    schlecht = 0
    print('%-22s %5s %7s %6s %6s %5s %6s %5s %4s' % ('Skript', 'Züge', 'Zeichen', 'Min', 'Paula', 'Tags', 'Pausen', 'Abbr', 'Mhm'))
    print('-' * 76)
    berichte = []
    for f in dateien:
        fehler, hinweise, k = pruefe(f)
        if k:
            print('%-22s %5d %7d %6.1f %5d%% %5d %6d %5d %4d' % (os.path.basename(f)[:22], k['zuege'], k['zeichen'],
                  k['minuten'], k['paula'], k['tags'], k['pausen'], k['abbrueche'], k['mhm']))
        berichte.append((f, fehler, hinweise, k))
    print()
    for f, fehler, hinweise, k in berichte:
        if fehler:
            schlecht += 1
        kopf = '### %s — %s' % (os.path.basename(f), 'VERSTOSS' if fehler else 'ok')
        print(kopf)
        for e in fehler:
            print('   VERSTOSS  ' + e)
        for h in hinweise:
            print('   Hinweis   ' + h)
        if k and k['folgen']:
            print('   Pruefen   Rueckbezuege gegen Spotify-Liste: %s' % ', '.join(k['folgen']))
        print()
    return 1 if schlecht else 0


if __name__ == '__main__':
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    sys.exit(main(sys.argv[1:]))
