#!/usr/bin/env python3
"""Baut inhalte/inhalte.json: die Langtexte aller deutschen Inhaltsseiten fuer den MCP-Server.

Der MCP-Server (mcp.biohackingkompakt.de) liest bisher nur die Datendateien unter
js/data. Die ausfuehrlichen Seitentexte (Studien, „Wo die Daten aufhoeren",
Anwenderberichte, haeufige Fragen) stehen aber nur in den statischen Seiten.
Dieses Skript zieht sie heraus, abschnittsweise und als reiner Text, damit der
Server sie durchsuchen und ausliefern kann.

Erfasst:  thema/*.html (nur Seiten, die in scores.json als Thema gefuehrt sind),
          tipp/, vergleich/, problem/, glossar/, folge/
Nicht erfasst: Weiterleitungen, Dienstleistungs-/Shopseiten ohne Score-Eintrag,
          Navigations-Abschnitte (Passt dazu, Aehnliche Themen, Fragen dazu,
          Quellen, Podcast-Kasten). Links werden zu reinem Text.

Regulierte Themen (Bereich experimental oder khavinson, dazu lithium-orotat):
Abschnitte zu Anwendung, Erfahrungen, Einnahme, Dosierung, Bezug fallen weg -
gleiche Linie wie im Server: Einordnung ja, Anwendung nein. Der Server filtert
zusaetzlich selbst noch einmal (doppelt haelt besser).

Aufruf:  python3 inhalte.py            schreibt inhalte/inhalte.json
         python3 inhalte.py --pruefen  schreibt nichts, meldet Zahlen
"""
import argparse, glob, html, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://biohackingkompakt.de'
ZIEL = os.path.join(ROOT, 'inhalte', 'inhalte.json')

ORDNER = ['thema', 'tipp', 'vergleich', 'problem', 'glossar', 'folge']
REGULIERTE_BEREICHE = {'experimental', 'khavinson'}
REGULIERTE_IDS = {'lithium-orotat'}

# Abschnitte, die nur Navigation oder Listen sind
WEG = re.compile(r'^(Passt dazu|Ähnliche Themen|Aehnliche Themen|Fragen dazu|Quellen|Die Podcast-Folge dazu|'
                 r'Weitere Folgen|Mehr zum Thema|Verwandte|Weiterlesen|Alle Folgen|Inhalt)\b', re.I)
# Bei regulierten Themen zusaetzlich
WEG_REGULIERT = re.compile(r'(Anwender|Erfahrung|Einnahme|Dosier|Anwendung|Bezug|Kauf|Protokoll|Stack|Zyklus|Kur\b)', re.I)
# Einzelne Unterabschnitte (### Frage) in regulierten Themen, die nach Anwendung fragen
WEG_FRAGE = re.compile(r'(Dosier|Dosis|Einnahme|einnehmen|nehmen|spritzen|injizier|kaufen|bestellen|bezieh|Zyklus|Stack|wie viel|wie lange|Kur\b|Protokoll|anwenden)', re.I)


def ohne_anwendungsfragen(text):
    """Entfernt ### Unterabschnitte, deren Ueberschrift nach Anwendung fragt. Gibt (text, anzahl) zurueck."""
    teile = re.split(r'\n?\n(?=### )', text)
    bleiben = [t for t in teile if not (t.startswith('### ') and WEG_FRAGE.search(t.split('\n', 1)[0]))]
    return '\n\n'.join(bleiben).strip(), len(teile) - len(bleiben)


def klartext(h):
    h = re.sub(r'<(script|style|noscript|svg|nav|form|button)\b[^>]*>.*?</\1>', ' ', h, flags=re.S | re.I)
    h = re.sub(r'<br\s*/?>', '\n', h, flags=re.I)
    h = re.sub(r'<li\b[^>]*>', '\n- ', h, flags=re.I)
    h = re.sub(r'<h3\b[^>]*>(.*?)</h3>', lambda m: '\n\n### ' + re.sub(r'<[^>]+>', '', m.group(1)) + '\n', h, flags=re.S | re.I)
    h = re.sub(r'</(p|div|section|ul|ol|table|tr|h4|dd|dt|blockquote|figure)>', '\n', h, flags=re.I)
    h = re.sub(r'<t[dh]\b[^>]*>', ' | ', h, flags=re.I)
    h = re.sub(r'<[^>]+>', '', h)
    h = html.unescape(h)
    h = re.sub(r'[ \t ]+', ' ', h)
    h = re.sub(r' *\n *', '\n', h)
    h = re.sub(r'\n{3,}', '\n\n', h)
    return h.strip()


def ist_weiterleitung(s):
    return bool(re.search(r'http-equiv="refresh"', s, re.I))


def scores_nach_pfad():
    roh = json.load(open(os.path.join(ROOT, 'scores.json'), encoding='utf-8'))
    liste = roh.get('eintraege', roh) if isinstance(roh, dict) else roh
    raus = {}
    for e in liste:
        url = e.get('url') or ''
        if url.startswith(SITE):
            raus.setdefault(url[len(SITE) + 1:], e)
    return raus


def abschnitte(main, reguliert):
    """Teilt <main> an den <h2> auf. Text vor dem ersten h2 = Abschnitt 'Kurz gesagt'."""
    h1 = re.search(r'<h1\b[^>]*>(.*?)</h1>', main, re.S | re.I)
    titel = klartext(h1.group(1)) if h1 else ''
    rest = main[h1.end():] if h1 else main
    teile = re.split(r'<h2\b[^>]*>(.*?)</h2>', rest, flags=re.S | re.I)
    raus, weg = [], []
    vorspann = klartext(teile[0])
    if vorspann:
        raus.append({'titel': 'Kurz gesagt', 'text': vorspann})
    for i in range(1, len(teile), 2):
        kopf = klartext(teile[i])
        text = klartext(teile[i + 1]) if i + 1 < len(teile) else ''
        if not text or WEG.match(kopf):
            continue
        if reguliert and WEG_REGULIERT.search(kopf):
            weg.append(kopf)
            continue
        if reguliert:
            text, n = ohne_anwendungsfragen(text)
            weg.extend(['(Frage)'] * n)
            if not text:
                continue
        raus.append({'titel': kopf, 'text': text})
    return titel, raus, weg


def bauen():
    scores = scores_nach_pfad()
    seiten, gefiltert = [], 0
    for ordner in ORDNER:
        for p in sorted(glob.glob(os.path.join(ROOT, ordner, '*.html'))):
            name = os.path.basename(p)[:-5]
            if name == 'index':
                continue
            s = open(p, encoding='utf-8').read()
            if ist_weiterleitung(s):
                continue
            pfad = f'{ordner}/{name}.html'
            sc = scores.get(pfad)
            if ordner == 'thema' and not sc:
                continue  # Dienstleistungs-/Sonderseiten ohne Score
            bereich = sc.get('view') if sc else None
            tid = sc.get('id') if sc else None
            reguliert = bool(sc) and (bereich in REGULIERTE_BEREICHE or tid in REGULIERTE_IDS)
            m = re.search(r'<main\b.*?</main>', s, re.S | re.I)
            if not m:
                continue
            titel, absch, weg = abschnitte(m.group(0), reguliert)
            gefiltert += len(weg)
            if not absch:
                continue
            seiten.append({
                'art': ordner, 'slug': name, 'titel': titel, 'url': f'{SITE}/{pfad}',
                'thema_id': tid, 'bereich': bereich, 'reguliert': reguliert,
                'abschnitte': absch,
            })
    return seiten, gefiltert


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--pruefen', action='store_true')
    a = ap.parse_args()
    seiten, gefiltert = bauen()
    daten = {'quelle': SITE, 'anzahl': len(seiten), 'seiten': seiten}
    txt = json.dumps(daten, ensure_ascii=False, separators=(',', ':'))
    from collections import Counter
    print('Seiten:', len(seiten), dict(Counter(s['art'] for s in seiten)),
          '| reguliert:', sum(s['reguliert'] for s in seiten),
          '| herausgefilterte Abschnitte:', gefiltert, '| Groesse:', len(txt.encode()) // 1024, 'KB')
    if a.pruefen:
        return
    os.makedirs(os.path.dirname(ZIEL), exist_ok=True)
    with open(ZIEL, 'w', encoding='utf-8') as f:
        f.write(txt)


if __name__ == '__main__':
    main()
