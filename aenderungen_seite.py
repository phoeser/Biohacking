#!/usr/bin/env python3
"""Statische Seite /aenderungen.html (DE) aus js/data/aenderungen.js – das Änderungsprotokoll zum Verlinken.

Bisher gab es das Protokoll nur in der App (index.html#aenderungen, per JavaScript). Diese Seite macht es
für Suchmaschinen und Sprachmodelle lesbar: je Eintrag Datum, Art (Evidenz/Recht/Korrektur), Titel, Text,
Link auf die betroffene Themen-/Tipp-Seite und die Quelle, dazu im JSON-LD ein ItemList
(je Eintrag datePublished, name, url = Anker auf dieser Seite, about = betroffene Seite).

Rahmen (Kopf, Fuß, Kanal-Zeile, WebMCP, Besucherzählung, Organization/Person im JSON-LD) kommt bei jedem
Lauf aus methodik.html, damit die Seite mit konten.py, webmcp.py, beacon.py und entitaet.py übereinstimmt.
Außerdem setzt das Skript idempotent:
  - den Link „Änderungsprotokoll" im Fuß von methodik.html (nach „Methodik")
  - den Eintrag in sitemap.xml (lastmod = jüngster Eintrag)
Nur deutsch (es gibt keine englische Fassung des Protokolls).

Aufruf im Repo: python3 aenderungen_seite.py   (--pruefen = nur vergleichen, schreibt nichts)
Bau-Kette: nach newsletter.py. Seit 12.11.2026 (von Paul freigegeben).
"""
import html, json, os, re, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://biohackingkompakt.de'
URL = SITE + '/aenderungen.html'
ZIEL = os.path.join(ROOT, 'aenderungen.html')
TITEL = 'Änderungsprotokoll: Korrekturen und neue Studienlage'
BESCHREIBUNG = ('Wo sich bei Biohacking Kompakt die Bewertung eines Themas geändert hat: neue Studien, '
                'neue Rechtslage, eigene Korrekturen, mit Datum und Begründung.')
FUSS_LINK = '<a href="/aenderungen.html">Änderungsprotokoll</a>'

LADEN = r"""
const fs=require('fs'),vm=require('vm');const ctx={};vm.createContext(ctx);
vm.runInContext(fs.readFileSync('js/data/aenderungen.js','utf8').replace(/^\s*const\s+/gm,'var '),ctx);
process.stdout.write(JSON.stringify(ctx.AENDERUNGEN));
"""


def esc(t):
    return html.escape(t or '', quote=False)


def attr(t):
    return html.escape(t or '', quote=True)


def daten_laden():
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
        f.write(LADEN)
        js = f.name
    try:
        return json.loads(subprocess.check_output(['node', js], cwd=ROOT))
    finally:
        os.unlink(js)


def ziele():
    d = json.load(open(os.path.join(ROOT, 'scores.json'), encoding='utf-8'))
    return {(e['view'], e['id']): e for e in d['eintraege'] if e.get('url')}


def anker(a):
    s = a['titel'].lower()
    for x, y in (('ä', 'ae'), ('ö', 'oe'), ('ü', 'ue'), ('ß', 'ss')):
        s = s.replace(x, y)
    s = re.sub(r'[^a-z0-9]+', '-', s).strip('-')
    return 'a-%s-%s' % (a['datum'], s[:48].rstrip('-'))


def datum_de(iso):
    j, m, t = iso.split('-')
    return '%s.%s.%s' % (t, m, j)


def fuss_methodik(pruefen):
    """Link im Fuß von methodik.html (idempotent). Gibt True zurück, wenn geändert."""
    p = os.path.join(ROOT, 'methodik.html')
    h = open(p, encoding='utf-8').read()
    m = re.search(r'<footer class="fuss">.*?</footer>', h, re.S)
    if not m or FUSS_LINK in m.group(0):
        return False
    alt = '<a href="/methodik.html">Methodik</a>'
    if alt not in m.group(0):
        print('  methodik.html: Fuß ohne Methodik-Link, Änderungsprotokoll nicht eingetragen')
        return False
    neu_fuss = m.group(0).replace(alt, alt + ' · ' + FUSS_LINK, 1)
    if not pruefen:
        open(p, 'w', encoding='utf-8').write(h[:m.start()] + neu_fuss + h[m.end():])
    return True


def rahmen():
    """Kopf-Bausteine, Kopfzeile und Fuß aus methodik.html."""
    h = open(os.path.join(ROOT, 'methodik.html'), encoding='utf-8').read()
    og = re.search(r'<!-- og:start -->.*?<!-- og:end -->', h, re.S).group(0)
    css = re.search(r'<link rel="stylesheet" href="/css/thema\.css[^"]*">', h).group(0)
    farbe = re.search(r'<meta name="theme-color"[^>]*>\s*<link rel="icon"[^>]*>', h, re.S).group(0)
    kopf = re.search(r'<header class="kopf">.*?</header>', h, re.S).group(0)
    kopf = re.sub(r' ?<span class="sprache"[^>]*>.*?</span>', '', kopf, flags=re.S)
    kopf = kopf.replace('<a href="/#aenderungen">Änderungen</a>', '<a href="/aenderungen.html" aria-current="page">Änderungen</a>')
    fuss = h[h.index('<footer class="fuss">'):]
    ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', h, re.S).group(1))
    stamm = [n for n in ld['@graph'] if n.get('@type') in ('Organization', 'WebSite', 'Person')]
    return og, css, farbe, kopf, fuss, stamm


def bauen(liste, zs):
    og, css, farbe, kopf, fuss, stamm = rahmen()
    liste = sorted(liste, key=lambda a: a['datum'], reverse=True)  # stabil: gleiche Tage in Dateireihenfolge
    neuester = liste[0]['datum'] if liste else ''
    abschnitte, elemente, gesehen = [], [], set()
    for i, a in enumerate(liste, 1):
        an = anker(a)
        k, n = an, 2
        while k in gesehen:
            k, n = '%s-%d' % (an, n), n + 1
        an = k
        gesehen.add(an)
        z = a.get('ziel') or {}
        e = zs.get((z.get('view'), z.get('id'))) if z else None
        meta = ['<time datetime="%s">%s</time>' % (a['datum'], datum_de(a['datum'])), esc(a.get('typ'))]
        if e:
            meta.append('<a href="%s">Zum Eintrag %s</a>' % (attr(e['url'].replace(SITE, '')), esc(e['name'])))
        teile = ['    <section class="aend" id="%s">' % an,
                 '      <h2>%s</h2>' % esc(a['titel']),
                 '      <p class="aend-meta">%s</p>' % ' · '.join(meta),
                 '      <p>%s</p>' % esc(a.get('text'))]
        q = a.get('quelle') or {}
        if q.get('url'):
            teile.append('      <p class="aend-quelle">Quelle: <a href="%s" rel="noopener" target="_blank">%s</a></p>'
                         % (attr(q['url']), esc(q.get('titel') or q['url'])))
        elif q.get('titel'):
            teile.append('      <p class="aend-quelle">Quelle: %s</p>' % esc(q['titel']))
        teile.append('    </section>')
        abschnitte.append('\n'.join(teile))
        item = {'@type': 'CreativeWork', '@id': URL + '#' + an, 'name': a['titel'], 'datePublished': a['datum'],
                'url': URL + '#' + an, 'inLanguage': 'de'}
        if a.get('typ'):
            item['genre'] = a['typ']
        if e:
            item['about'] = {'@type': 'WebPage', 'url': e['url'], 'name': e['name']}
        if q.get('url'):
            item['citation'] = {'@type': 'CreativeWork', 'name': q.get('titel') or q['url'], 'url': q['url']}
        elemente.append({'@type': 'ListItem', 'position': i, 'item': item})
    graph = stamm + [
        {'@type': 'CollectionPage', '@id': URL + '#seite', 'url': URL, 'name': 'Änderungsprotokoll',
         'description': BESCHREIBUNG, 'inLanguage': 'de', 'isPartOf': {'@id': SITE + '/#website'},
         'author': {'@id': SITE + '/ueber-uns.html#paul-hoeser'}, 'dateModified': neuester,
         'mainEntity': {'@id': URL + '#liste'}},
        {'@type': 'ItemList', '@id': URL + '#liste', 'name': 'Änderungsprotokoll – Biohacking Kompakt',
         'itemListOrder': 'https://schema.org/ItemListOrderDescending', 'numberOfItems': len(elemente),
         'itemListElement': elemente},
        {'@type': 'BreadcrumbList', 'itemListElement': [
            {'@type': 'ListItem', 'position': 1, 'name': 'Startseite', 'item': SITE + '/'},
            {'@type': 'ListItem', 'position': 2, 'name': 'Änderungsprotokoll'}]},
    ]
    ld = json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False, separators=(',', ':'))
    return '''<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>%(titel)s</title>
<meta name="description" content="%(besch)s">
<link rel="canonical" href="%(url)s">
<meta property="og:type" content="website">
<meta property="og:title" content="%(titel)s | Biohacking Kompakt">
<meta property="og:description" content="%(besch)s">
<meta property="og:url" content="%(url)s">
<meta property="og:site_name" content="Biohacking Kompakt">
%(og)s
%(farbe)s
%(css)s
<script type="application/ld+json">%(ld)s</script>
</head>
<body>
%(kopf)s
<main>
  <article>
    <p class="typ">Änderungsprotokoll</p>
    <h1>Was sich geändert hat</h1>
    <p class="lead">Hier steht, wo sich die Grundlage eines Themas nachträglich verschoben hat: neue Studien, gescheiterte Zulassungswege, neue Rechtsprechung und eigene Korrekturen. Änderungen am Aufbau der Website stehen hier nicht.</p>
    <p class="aend-stand">%(n)d Einträge, neuester vom %(neu)s. Wie Bewertungen entstehen, steht in der <a href="/methodik.html">Methodik</a>.</p>

%(abschnitte)s

    <p class="app"><a class="btn" href="/methodik.html">Methodik</a> <a class="btn" href="/thema/">Alle Themen</a></p>
    <p class="disc">Reine Information, keine medizinische Beratung, keine Diagnose und keine Anwendungs- oder Dosierempfehlung. Stand: %(neuiso)s.</p>
  </article>
</main>
%(fuss)s''' % {'titel': esc(TITEL), 'besch': attr(BESCHREIBUNG), 'url': URL, 'og': og, 'farbe': farbe, 'css': css,
               'ld': ld, 'kopf': kopf, 'n': len(liste), 'neu': datum_de(neuester), 'neuiso': neuester,
               'abschnitte': '\n\n'.join(abschnitte), 'fuss': fuss}, neuester


def sitemap(neuester, pruefen):
    p = os.path.join(ROOT, 'sitemap.xml')
    s = open(p, encoding='utf-8').read()
    zeile = '  <url><loc>%s</loc><lastmod>%s</lastmod></url>' % (URL, neuester)
    m = re.search(r'  <url><loc>%s</loc><lastmod>[^<]*</lastmod></url>' % re.escape(URL), s)
    if m:
        neu = s[:m.start()] + zeile + s[m.end():]
    else:
        a = re.search(r'  <url><loc>%s/methodik\.html</loc>.*?</url>\n' % re.escape(SITE), s)
        if not a:
            print('  sitemap.xml: methodik.html nicht gefunden, Eintrag nicht gesetzt')
            return False
        neu = s[:a.end()] + zeile + '\n' + s[a.end():]
    if neu == s:
        return False
    if not pruefen:
        open(p, 'w', encoding='utf-8').write(neu)
    return True


def main():
    pruefen = '--pruefen' in sys.argv
    liste = daten_laden()
    f = fuss_methodik(pruefen)
    seite, neuester = bauen(liste, ziele())
    alt = open(ZIEL, encoding='utf-8').read() if os.path.exists(ZIEL) else None
    if seite != alt and not pruefen:
        open(ZIEL, 'w', encoding='utf-8').write(seite)
    sm = sitemap(neuester, pruefen)
    print('aenderungen_seite.py: %d Einträge, aenderungen.html %s, methodik-Fuß %s, sitemap %s'
          % (len(liste), 'unverändert' if seite == alt else ('abweichend' if pruefen else 'geschrieben'),
             'ergänzt' if f else 'unverändert', 'ergänzt' if sm else 'unverändert'))


if __name__ == '__main__':
    main()
