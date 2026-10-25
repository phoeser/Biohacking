#!/usr/bin/env python3
"""Snippet-Pflege für alle Seiten (idempotent, seit 25.10.2026).

- Titel: länger als 60 Zeichen → Zusatz „ | Biohacking Kompakt“ weglassen (Google kürzt sonst).
- Beschreibung (meta description + og:description + twitter:description): höchstens 160 Zeichen.
  Feste Kurzfassungen stehen in docs/meta-kurz.json (Pfad → Text). Ohne Eintrag werden ganze
  Sätze vom Anfang genommen, solange sie in 160 Zeichen passen.
- Vorschaubild: og:image (og.jpg bzw. og-en.jpg für /en/) + twitter:card zwischen <!-- og:start/end -->.
- Folgenseiten: dateModified im JSON-LD ergänzen (letzter Commit der Datei).

Aufruf: python3 meta.py            # schreibt
        python3 meta.py --pruefen  # zählt nur, was sich ändern würde
"""
import glob, html, json, os, re, subprocess, sys

SITE = 'https://biohackingkompakt.de'
MAX_T, MAX_D = 60, 160
MARKE = ' | Biohacking Kompakt'
AUS = ('demo/', 'docs/', 'podcast-scripts/', 'node_modules/')
OHNE = {'stimmtest.html', 'auto_deploy.html', 'googlec0a597051d28023f.html'}
KURZ = json.load(open('docs/meta-kurz.json', encoding='utf-8')) if os.path.exists('docs/meta-kurz.json') else {}


def saetze(t):
    return re.split(r'(?<=[.?!…“"])\s+(?=[A-ZÄÖÜ„"0-9])', t.strip())


def kuerzen(t):
    out = ''
    for s in saetze(t):
        neu = (out + ' ' + s).strip()
        if len(neu) > MAX_D:
            break
        out = neu
    return out if len(out) >= 90 else None  # zu kurz = ohne Thema, dann Kurzfassung nötig


def esc(t):
    return html.escape(t, quote=True)


def og_block(pfad):
    bild = 'og-en.jpg' if pfad.startswith('en/') else 'og.jpg'
    return ('<!-- og:start -->\n'
            f'<meta property="og:image" content="{SITE}/{bild}">\n'
            '<meta property="og:image:width" content="1200">\n'
            '<meta property="og:image:height" content="630">\n'
            '<meta name="twitter:card" content="summary_large_image">\n'
            '<!-- og:end -->\n')


def git_datum(pfad):
    r = subprocess.run(['git', 'log', '-1', '--format=%cs', '--', pfad], capture_output=True, text=True)
    return r.stdout.strip() or None


def bearbeite(pfad, h):
    z = {}
    # Titel
    m = re.search(r'<title>(.*?)</title>', h, re.S)
    if m:
        t = html.unescape(m.group(1).strip())
        if len(t) > MAX_T and t.endswith(MARKE):
            neu = t[:-len(MARKE)]
            h = h.replace(m.group(0), f'<title>{esc(neu)}</title>', 1)
            z['titel'] = 1
            t = neu
        # Themenseiten: Klammerzusatz vor dem Doppelpunkt weglassen, wenn der Titel sonst zu lang ist
        if len(t) > 65 and re.match(r'(en/)?thema/', pfad):
            neu = re.sub(r'^([^:(]+?) \([^)]*\)(: )', r'\1\2', t)
            if neu != t:
                h = re.sub(r'<title>.*?</title>', lambda x: f'<title>{esc(neu)}</title>', h, count=1, flags=re.S)
                z['titel_klammer'] = 1
    # Beschreibung
    m = re.search(r'<meta name="description" content="([^"]*)"', h)
    if m:
        d = html.unescape(m.group(1))
        neu = KURZ.get(pfad)
        if not neu and len(d) > MAX_D:
            neu = kuerzen(d)
            if not neu:
                z['offen'] = 1
        if neu and neu != d:
            if len(neu) > MAX_D:
                z['kurz_zu_lang'] = 1
            for tag in ('name="description"', 'property="og:description"', 'name="twitter:description"'):
                h = re.sub(r'(<meta ' + re.escape(tag) + r' content=")[^"]*(")',
                           lambda x: x.group(1) + esc(neu) + x.group(2), h, count=1)
            z['beschreibung'] = 1
    # Vorschaubild
    if 'property="og:image"' not in h and '</head>' in h:
        blk = og_block(pfad)
        if 'property="og:site_name"' in h:
            h = re.sub(r'(<meta property="og:site_name"[^>]*>\n?)', lambda x: x.group(1) + blk, h, count=1)
        else:
            h = h.replace('</head>', blk + '</head>', 1)
        z['bild'] = 1
    # dateModified auf Folgenseiten
    if re.match(r'(en/)?folge/\d+\.html$', pfad) and '"dateModified"' not in h:
        dat = git_datum(pfad)
        if dat:
            h2 = re.sub(r'("@type":"PodcastEpisode".*?"datePublished":"[^"]*")',
                        lambda x: x.group(1) + f',"dateModified":"{dat}"', h, count=1, flags=re.S)
            if h2 != h:
                h = h2
                z['datum'] = 1
    return h, z


def main():
    schreiben = '--pruefen' not in sys.argv
    summe, offen = {}, []
    for pfad in sorted(glob.glob('**/*.html', recursive=True)):
        if pfad.startswith(AUS) or pfad in OHNE:
            continue
        alt = open(pfad, encoding='utf-8').read()
        neu, z = bearbeite(pfad, alt)
        for k in z:
            summe[k] = summe.get(k, 0) + 1
        if 'offen' in z:
            offen.append(pfad)
        if schreiben and neu != alt:
            open(pfad, 'w', encoding='utf-8').write(neu)
    print(summe)
    if offen:
        print(f'{len(offen)} Beschreibungen brauchen eine Kurzfassung in docs/meta-kurz.json, z. B.', offen[:5])


if __name__ == '__main__':
    main()
