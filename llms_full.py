#!/usr/bin/env python3
"""Baut llms-full.txt (Kurzantworten aller Seiten fuer Sprachmodelle, verlinkt aus llms.txt).

Die Datei wurde frueher von Hand bzw. mit einem nicht mehr vorhandenen Werkzeug
erstellt und blieb stehen. Dieses Skript erzeugt sie vollstaendig aus dem
aktuellen Stand der statischen Seiten und von js/data — ohne Netzwerk,
idempotent (gleicher Datenstand + gleiches Datum = gleiche Datei).

Aufbau (wie bisher):
  Kopf (fester Text, wortgleich zur bisherigen Fassung) + Stand-Zeile
  # Fragen & Beschwerden   problem/*.html   Titel = <h1>, Text = „Kurz gesagt"
  # Themen                 thema/*.html     Titel = <h1>, Text = „Kurz gesagt",
                                            sonst <p class="lead">, sonst `short` aus js/data
  # Vergleiche             vergleich/*.html Titel = <h1>, Text = „Die kurze Antwort"
  # Tipps & Routinen       tipp/*.html      Titel = <h1>, Text = „Kurz gesagt" (sonst lead / short)
  # Glossar                glossar/*.html   Titel = <h1>, Text = Definition („Kurz gesagt")
Weiterleitungsseiten (meta refresh / canonical auf eine andere URL) fehlen.
Reihenfolge: Themen alphabetisch nach Titel (ohne Gross/Klein und Akzente),
alle anderen Abschnitte nach Dateiname.

Regeln wie auf der Seite: Es werden nur die Kurztexte uebernommen — keine
Dosierungsfelder (dosage/intake), keine Bezugsquellen/community-Links, keine
Partnerlinks. Die Texte selbst enthalten keine Links.

Aufruf:  python3 llms_full.py            schreibt llms-full.txt (Stand = heute)
         python3 llms_full.py --stand 2026-10-06
         python3 llms_full.py --pruefen   schreibt nichts, meldet nur Abweichung
"""
import argparse, datetime, glob, html, json, os, re, subprocess, sys, tempfile, unicodedata

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://biohackingkompakt.de'
ZIEL = os.path.join(ROOT, 'llms-full.txt')

KOPF = """# Biohacking Kompakt

> Deutschsprachiger Faktencheck zu Supplements, Peptiden und Biohacking-Anwendungen.
> Zu jedem Thema: Wirkungsweise, Evidenz am Menschen, Risiken, Quellen - und der
> BK-Score, der den WISSENSSTAND bewertet (nicht die Substanz).
> Betrieben von Paul Hoeser. Begleitender Podcast "Biohacking Kompakt" mit den
> KI-Stimmen Paul & Paula, vollstaendig KI-produziert, redaktionell verantwortet.

## Wichtig beim Zitieren

Der BK-Score ist eine subjektive Einschaetzung von Biohacking Kompakt nach
offengelegten Vergaberegeln - keine wissenschaftliche Bewertung und keine
medizinische Empfehlung. Drei Achsen werden regelmaessig missverstanden:
- "Sicherheits-Datenlage" hoch heisst "gut untersucht", nicht "harmlos".
- "Human-Evidenz" hoch heisst "viel und gut untersucht" - das Feld "richtung"
  sagt, wohin diese Evidenz zeigt. Sie kann auch negativ ausfallen.
- "Anwendungserfahrung" hoch heisst "lange und breit angewendet" und ist KEIN
  Wirksamkeitsbeleg. Aderlass haette auf dieser Achse eine 10.
Inhalte sind Information, kein medizinischer Rat.

Diese Datei enthält die Kurzantworten aller Seiten. Zitierfähige Quelle ist jeweils die verlinkte Seite.
"""

# (Ueberschrift, Ordner, Sortierung)
ABSCHNITTE = [
    ('Fragen & Beschwerden', 'problem', 'datei'),
    ('Themen', 'thema', 'titel'),
    ('Vergleiche', 'vergleich', 'datei'),
    ('Tipps & Routinen', 'tipp', 'datei'),
    ('Glossar', 'glossar', 'datei'),
]

# js/data per node einlesen (wie wissen.py / scores-bauen.js). Nur die Felder
# id, name/title und short werden gebraucht — Dosierungen, Bezugsquellen und
# Links bleiben bewusst draussen.
LADEN = r"""
const fs=require('fs'),vm=require('vm'),path=require('path');
const D=process.argv[2];
const ctx={window:{},console:{log(){}},document:{addEventListener(){}}};vm.createContext(ctx);
const namen={supplements:'SUPPLEMENTS',experimental:'EXPERIMENTAL',khavinson:'KHAVINSON',therapies:'THERAPIES',tips:'TIPS'};
const aus={};
for(const [f,n] of Object.entries(namen)){
  vm.runInContext(fs.readFileSync(path.join(D,f+'.js'),'utf8').replace(/^\s*const\s+/gm,'var '),ctx);
  aus[f]=(vm.runInContext(n,ctx)||[]).map(k=>({id:k.id,name:k.name||k.title||k.id,short:k.short||''}));
}
process.stdout.write(JSON.stringify(aus));
"""

TAG = re.compile(r'<[a-zA-Z/!][^>]*>')   # „p < 0,05" ist kein Tag und bleibt stehen


def klartext(s):
    return re.sub(r'\s+', ' ', html.unescape(TAG.sub('', s))).strip()


def daten_laden():
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False, encoding='utf-8') as f:
        f.write(LADEN)
        js = f.name
    try:
        roh = subprocess.check_output(['node', js, os.path.join(ROOT, 'js', 'data')], cwd=ROOT)
    finally:
        os.unlink(js)
    daten = json.loads(roh)
    kurz = {}
    for ansicht, liste in daten.items():
        for k in liste:
            if k['short']:
                kurz.setdefault(k['id'], k['short'])
    return kurz


def suche(muster, h):
    m = re.search(muster, h, re.S)
    return klartext(m.group(1)) if m else ''


def ist_weiterleitung(h, url):
    if re.search(r'http-equiv="refresh"', h, re.I):
        return True
    m = re.search(r'<link rel="canonical" href="([^"]+)"', h)
    return bool(m and m.group(1) != url)


def eintrag(ordner, datei, short):
    pfad = os.path.join(ROOT, ordner, datei)
    with open(pfad, encoding='utf-8') as f:
        h = f.read()
    url = '%s/%s/%s' % (SITE, ordner, datei)
    if ist_weiterleitung(h, url):
        return None
    titel = suche(r'<h1[^>]*>(.*?)</h1>', h)
    quelle, text = '', ''
    for q, muster in (
        ('kurz', r'<section class="kurz">\s*<h2>[^<]*</h2>\s*<p>(.*?)</p>'),
        ('antwort', r'<section class="antwort">\s*<h2>[^<]*</h2>\s*<p>(.*?)</p>'),
        ('def', r'<p class="def-label">[^<]*</p>\s*<p>(.*?)</p>'),
        ('lead', r'<p class="lead">(.*?)</p>'),
    ):
        text = suche(muster, h)
        if text:
            quelle = q
            break
    if not text:
        slug = datei[:-5]
        text = short.get(slug) or short.get(re.sub(r'^kh-', '', slug), '')
        quelle = 'short' if text else ''
    if not text:
        text = suche(r'<meta name="description" content="([^"]*)"', h)
        quelle = 'description' if text else 'leer'
    return {'titel': titel, 'url': url, 'text': text, 'quelle': quelle}


def falten(s):
    return ''.join(c for c in unicodedata.normalize('NFKD', s.lower()) if not unicodedata.combining(c))


def bauen(stand):
    short = daten_laden()
    teile = [KOPF, 'Stand: %s\n' % stand]
    zaehler, quellen = [], {}
    for ueberschrift, ordner, sortierung in ABSCHNITTE:
        dateien = sorted(os.path.basename(p) for p in glob.glob(os.path.join(ROOT, ordner, '*.html')))
        liste = [e for e in (eintrag(ordner, d, short) for d in dateien if d != 'index.html') if e]
        if sortierung == 'titel':
            liste.sort(key=lambda e: (falten(e['titel']), e['titel'], e['url']))
        teile.append('\n# %s\n' % ueberschrift)
        for e in liste:
            teile.append('\n## %s\n%s\n\n%s\n' % (e['titel'], e['url'], e['text']))
            quellen.setdefault(ueberschrift, {}).setdefault(e['quelle'], 0)
            quellen[ueberschrift][e['quelle']] += 1
        zaehler.append((ueberschrift, len(liste)))
    return ''.join(teile), zaehler, quellen


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--stand', default=datetime.date.today().isoformat())
    ap.add_argument('--pruefen', action='store_true', help='nichts schreiben, nur Abweichung melden')
    a = ap.parse_args()
    neu, zaehler, quellen = bauen(a.stand)
    alt = open(ZIEL, encoding='utf-8').read() if os.path.exists(ZIEL) else ''
    for ueberschrift, n in zaehler:
        q = ', '.join('%s %d' % kv for kv in sorted(quellen.get(ueberschrift, {}).items()))
        print('%-22s %4d  (%s)' % (ueberschrift, n, q))
    print('Einträge gesamt        %4d' % sum(n for _, n in zaehler))
    print('Größe alt %d Bytes, neu %d Bytes' % (len(alt.encode('utf-8')), len(neu.encode('utf-8'))))
    if a.pruefen:
        print('unverändert' if alt == neu else 'WEICHT AB')
        sys.exit(0 if alt == neu else 1)
    if alt != neu:
        with open(ZIEL, 'w', encoding='utf-8', newline='\n') as f:
            f.write(neu)
        print('llms-full.txt geschrieben')
    else:
        print('llms-full.txt unverändert')


if __name__ == '__main__':
    main()
