#!/usr/bin/env python3
"""Newsletter von Biohacking Kompakt: Seiten, Anmeldekästen, Archiv und Mailfassung (seit 28.10.2026).

Technik: Anmeldung, Double-Opt-in und Abmeldung laufen über den Cloudflare-Worker
nl.biohackingkompakt.de (Quelle: nov2/newsletter/worker, Speicher Workers KV), verschickt wird
über Make (Szenarien „BK Newsletter – Bestätigungsmail“ und „– Versand“) mit kontakt@.

Aufrufe im Repo:
  python3 newsletter.py                 Seiten /newsletter/ bauen, Archiv aus docs/newsletter/*.json,
                                        Anmeldekasten (zwischen <!-- newsletter:start/end -->) auf
                                        Startseite und allen deutschen Themen-, Tipp-, Vergleichs-,
                                        Frage- und Folgenseiten, Sitemap-Einträge.  --pruefen = nur zählen
  python3 newsletter.py --mail <datum> <ordner>
                                        schreibt <ordner>/<datum>.json mit betreff, html, text
                                        für den Versand (html enthält %%ABMELDEN%%).

Eine Ausgabe = docs/newsletter/<JJJJ-MM-TT>.json:
  {"datum", "nummer", "betreff", "vorschau", "intro", "abschnitte": [{"titel", "eintraege":
   [{"titel", "text", "url", optional "mehr_titel", "mehr_url"}]}], "schluss"}
Ablauf und Regeln für jede Ausgabe: docs/newsletter/ANLEITUNG.md.
Texte ohne Dosierungen bei nicht zugelassenen Stoffen, ohne Bezugsquellen-Links.
"""
import glob, hashlib, html, json, os, re, sys

SITE = 'https://biohackingkompakt.de'
WORKER = 'https://nl.biohackingkompakt.de/anmelden'
MONATE = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
MUSTER = re.compile(r'<!-- newsletter:start -->.*?<!-- newsletter:end -->\n?', re.S)
ORDNER = ('thema', 'tipp', 'vergleich', 'problem', 'folge')
e_ = lambda t: html.escape(str(t), quote=False)
a_ = lambda t: html.escape(str(t), quote=True)


def datum_lang(d):
    j, m, t = d.split('-')
    return '%d. %s %s' % (int(t), MONATE[int(m) - 1], j)


def js_version():
    return hashlib.sha1(open('js/newsletter.js', 'rb').read()).hexdigest()[:8]


STIL = ('<style>.nl-box{margin:40px 0 8px;padding:22px 22px 18px;border:1px solid var(--rand,rgba(45,90,70,.12));'
        'border-radius:14px;background:var(--akzent-soft,#d8ece2)}.nl-box h2{margin:0 0 6px;font-size:1.2rem}'
        '.nl-box p{margin:0 0 12px}.nl-zeile{display:flex;flex-wrap:wrap;gap:8px}'
        '.nl-zeile input[type=email]{flex:1 1 220px;min-width:0;font:inherit;padding:10px 14px;border:1px solid rgba(45,90,70,.3);border-radius:99px;background:#fff;color:#1d2420}'
        '.nl-zeile button{font:inherit;font-weight:600;border:0;border-radius:99px;padding:10px 20px;background:#2f8b6a;color:#fff;cursor:pointer}'
        '.nl-zeile button:disabled{opacity:.6;cursor:default}.nl-meldung{margin:10px 0 0;font-weight:600}.nl-meldung:empty{display:none}'
        '.nl-ok{color:#22684e}.nl-fehler{color:#a23b2a}.nl-klein{font-size:.82rem;color:#5a6560;margin:10px 0 0}'
        '.nl-falle{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}'
        '.nl-label{position:absolute;left:-9999px}</style>')


def formular(quelle, nr=''):
    return ('<form class="nl-form" action="%s" method="post">\n'
            '  <div class="nl-zeile"><label class="nl-label" for="nl-mail%s">E-Mail-Adresse</label>'
            '<input id="nl-mail%s" type="email" name="email" required placeholder="deine@mail.de" autocomplete="email">'
            '<button type="submit">Anmelden</button></div>\n'
            '  <input type="hidden" name="quelle" value="%s">\n'
            '  <div class="nl-falle" aria-hidden="true"><label>Website<input type="text" name="website" tabindex="-1" autocomplete="off"></label></div>\n'
            '  <p class="nl-meldung" role="status" aria-live="polite"></p>\n'
            '  <p class="nl-klein">Kostenlos und jederzeit abbestellbar. Du bekommst zuerst eine Mail mit Bestätigungslink. '
            'Details in der <a href="/datenschutz.html#newsletter">Datenschutzerklärung</a>.</p>\n'
            '</form>' % (WORKER, nr, nr, a_(quelle)))


def kasten(quelle, ueberschrift='Newsletter: einmal pro Woche das Wichtigste'):
    return ('<!-- newsletter:start -->\n%s\n<section class="nl-box" aria-label="Newsletter">\n'
            '  <h2>%s</h2>\n'
            '  <p>Neue Podcastfolgen, neue Studien und was sich auf Biohacking Kompakt getan hat. '
            'Jede Woche kurz zusammengefasst, alle Ausgaben auch im <a href="/newsletter/">Archiv</a>.</p>\n'
            '%s\n</section>\n<script defer src="/js/newsletter.js?v=%s"></script>\n<!-- newsletter:end -->\n'
            % (STIL, e_(ueberschrift), formular(quelle), js_version()))


def kasten_start():
    # Startseite (App, style.css): eigener Rahmen, gleiche Formularlogik
    return ('<!-- newsletter:start -->\n%s\n<section class="nl-box card" aria-label="Newsletter" style="background:var(--akzent-soft,#d8ece2)">\n'
            '  <span class="eyebrow">Newsletter</span>\n'
            '  <h3 style="margin:.2em 0 .4em">Einmal pro Woche das Wichtigste</h3>\n'
            '  <p>Neue Podcastfolgen, neue Studien und was sich auf der Seite getan hat. '
            'Alle Ausgaben stehen auch im <a href="/newsletter/">Archiv</a>.</p>\n'
            '%s\n</section>\n<script defer src="/js/newsletter.js?v=%s"></script>\n<!-- newsletter:end -->\n'
            % (STIL, formular('startseite', '-start'), js_version()))


def ausgaben():
    l = []
    for p in sorted(glob.glob('docs/newsletter/*.json'), reverse=True):
        d = json.load(open(p, encoding='utf-8'))
        d['_url'] = '/newsletter/%s.html' % d['datum']
        l.append(d)
    return l


def ld(typ, url, name, beschreibung, extra=None):
    g = {'@context': 'https://schema.org', '@graph': [
        {'@type': 'Organization', '@id': SITE + '/#organisation', 'name': 'Biohacking Kompakt', 'url': SITE},
        {'@type': typ, '@id': url + '#seite', 'name': name, 'headline': name, 'url': url, 'inLanguage': 'de',
         'description': beschreibung, 'publisher': {'@id': SITE + '/#organisation'}}]}
    if extra:
        g['@graph'][1].update(extra)
    return '<script type="application/ld+json">%s</script>' % json.dumps(g, ensure_ascii=False, separators=(',', ':'))


def rahmen(titel, beschreibung, url, inhalt, robots='index, follow', jsonld=''):
    return '''<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="%(robots)s">
<title>%(titel)s</title>
<meta name="description" content="%(desc)s">
<link rel="canonical" href="%(url)s">
<meta property="og:type" content="article">
<meta property="og:title" content="%(titel)s">
<meta property="og:description" content="%(desc)s">
<meta property="og:url" content="%(url)s">
<meta property="og:site_name" content="Biohacking Kompakt">
<meta name="theme-color" content="#2f8b6a">
<link rel="icon" type="image/svg+xml" href="/icons/icon.svg">
<link rel="stylesheet" href="/css/thema.css?v=3">
%(ld)s
</head>
<body>
<header class="kopf">
  <a class="marke" href="/">Biohacking&nbsp;Kompakt</a>
  <nav><a href="/thema/">Alle Themen</a> <a href="/glossar/">Glossar</a> <a href="/studien/">Studien</a> <a href="/vergleich/">Vergleiche</a> <a href="/newsletter/">Newsletter</a></nav>
</header>
<main>
  <article>
%(inhalt)s
  </article>
</main>
<footer class="fuss">
  <a href="/">Startseite</a> · <a href="/thema/">Alle Themen</a> · <a href="/problem/">Fragen &amp; Beschwerden</a> · <a href="/folge/">Podcast-Folgen</a> · <a href="/newsletter/">Newsletter</a> · <a href="/ueber-uns.html">Über uns</a> · <a href="/impressum.html">Impressum</a> · <a href="/datenschutz.html">Datenschutz</a>
</footer>
</body>
</html>
''' % dict(titel=e_(titel), desc=a_(beschreibung), url=url, inhalt=inhalt, robots=robots, ld=jsonld)


def eintraege_html(d, mail=False):
    teile = []
    for ab in d['abschnitte']:
        if mail:
            teile.append('<h2 style="font-size:19px;margin:28px 0 10px;color:#1d2420">%s</h2>' % e_(ab['titel']))
        else:
            teile.append('    <section>\n      <h2>%s</h2>' % e_(ab['titel']))
        for x in ab['eintraege']:
            url = x.get('url') or ''
            voll = url if url.startswith('http') else (SITE + url if url else '')
            mu = x.get('mehr_url') or ''
            mv = mu if mu.startswith('http') else (SITE + mu if mu else '')
            if mail:
                t = ('<a href="%s" style="color:#22684e;text-decoration:none">%s</a>' % (a_(voll), e_(x['titel']))) if voll else e_(x['titel'])
                mehr = (' <a href="%s" style="color:#22684e">%s</a>' % (a_(mv), e_(x.get('mehr_titel') or 'Mehr dazu'))) if mv else ''
                teile.append('<p style="margin:0 0 4px;font-weight:bold;font-size:16px">%s</p><p style="margin:0 0 16px">%s%s</p>' % (t, e_(x['text']), mehr))
            else:
                t = ('<a href="%s">%s</a>' % (a_(url), e_(x['titel']))) if url else e_(x['titel'])
                mehr = (' <a href="%s">%s</a>' % (a_(mu), e_(x.get('mehr_titel') or 'Mehr dazu'))) if mu else ''
                teile.append('      <h3>%s</h3>\n      <p>%s%s</p>' % (t, e_(x['text']), mehr))
        if not mail:
            teile.append('    </section>')
    return '\n'.join(teile)


def seite_ausgabe(d):
    url = SITE + d['_url']
    inhalt = ('    <p class="typ">Newsletter · Ausgabe %d · %s</p>\n    <h1>%s</h1>\n    <p class="lead">%s</p>\n%s\n'
              '    <p>%s</p>\n    <p class="app"><a class="btn" href="/newsletter/">Alle Ausgaben</a></p>\n'
              '    <p class="disc">Reine Information, keine medizinische Beratung und keine Dosierempfehlung.</p>\n%s'
              % (d['nummer'], datum_lang(d['datum']), e_(d['betreff']), e_(d['intro']), eintraege_html(d),
                 e_(d.get('schluss', '')), kasten('ausgabe-%s' % d['datum'], 'Diesen Newsletter jede Woche bekommen')))
    return rahmen('%s · Newsletter %d' % (d['betreff'], d['nummer']), d.get('vorschau') or d['intro'][:155], url, inhalt,
                  jsonld=ld('Article', url, d['betreff'], d.get('vorschau') or d['intro'][:155],
                            {'datePublished': d['datum'], 'dateModified': d['datum'], 'isPartOf': {'@id': SITE + '/newsletter/#seite'}}))


def seite_index(liste):
    url = SITE + '/newsletter/'
    if liste:
        li = '\n'.join('        <li><a href="%s">%s</a><span class="gl-kurz">Ausgabe %d · %s</span></li>'
                       % (d['_url'], e_(d['betreff']), d['nummer'], datum_lang(d['datum'])) for d in liste)
        archiv = '    <section>\n      <h2>Alle Ausgaben</h2>\n      <ul class="gl-liste">\n%s\n      </ul>\n    </section>' % li
    else:
        archiv = '    <section>\n      <h2>Alle Ausgaben</h2>\n      <p>Die erste Ausgabe erscheint am 1. November 2026. Danach steht hier jede Ausgabe zum Nachlesen.</p>\n    </section>'
    beschr = 'Der Newsletter von Biohacking Kompakt: einmal pro Woche neue Podcastfolgen, neue Studien und Neues auf der Seite. Kostenlos, jederzeit abbestellbar.'
    inhalt = ('    <p class="typ">Newsletter</p>\n    <h1>Der Newsletter von Biohacking Kompakt</h1>\n'
              '    <p class="lead">Einmal pro Woche das Wichtigste: neue Folgen von Paul &amp; Paula, Studien, die wir neu eingeordnet haben, '
              'und was sich auf der Seite getan hat. Kurz, mit Quellen und ohne Werbeversprechen.</p>\n%s\n%s'
              % (kasten('newsletter-seite', 'Jetzt anmelden'), archiv))
    return rahmen('Newsletter · Biohacking Kompakt', beschr, url, inhalt,
                  jsonld=ld('CollectionPage', url, 'Newsletter von Biohacking Kompakt', beschr,
                            {'hasPart': [{'@type': 'Article', 'headline': d['betreff'], 'url': SITE + d['_url'], 'datePublished': d['datum']} for d in liste]}))


def seite_status(datei, titel, text):
    inhalt = '    <p class="typ">Newsletter</p>\n    <h1>%s</h1>\n    <p class="lead">%s</p>\n    <p class="app"><a class="btn" href="/">Zur Startseite</a> <a class="btn" href="/newsletter/">Zum Archiv</a></p>' % (e_(titel), text)
    return rahmen(titel + ' · Biohacking Kompakt', titel, SITE + '/newsletter/' + datei, inhalt, robots='noindex, follow')


STATUS = {
    'danke.html': ('Fast geschafft', 'Wir haben dir eine Mail geschickt. Bitte klick auf den Link darin, um deine Anmeldung zu bestätigen. '
                   'Keine Mail da? Schau im Spam-Ordner nach.'),
    'bestaetigt.html': ('Anmeldung bestätigt', 'Danke, du bist dabei. Der Newsletter kommt einmal pro Woche. '
                        'Abmelden kannst du dich jederzeit über den Link am Ende jeder Ausgabe.'),
    'abgemeldet.html': ('Du bist abgemeldet', 'Du bekommst den Newsletter nicht mehr. Falls das ein Versehen war, '
                        'kannst du dich auf der <a href="/newsletter/">Newsletter-Seite</a> jederzeit neu anmelden.'),
}


def mailfassung(d):
    web = SITE + d['_url']
    h = ('<!doctype html><html lang="de"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>%(b)s</title></head>'
         '<body style="margin:0;background:#f3f5f0">'
         '<div style="display:none;max-height:0;overflow:hidden">%(v)s</div>'
         '<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;background:#ffffff;color:#1d2420;line-height:1.55;font-size:16px;padding:26px 24px">'
         '<p style="font-size:13px;color:#5a6560;margin:0 0 18px">Biohacking Kompakt · Newsletter %(n)d · %(dl)s · <a href="%(web)s" style="color:#5a6560">Im Browser lesen</a></p>'
         '<h1 style="font-size:23px;line-height:1.3;margin:0 0 14px">%(b)s</h1>'
         '<p>%(i)s</p>%(e)s<p style="margin-top:24px">%(s)s</p>'
         '<hr style="border:0;border-top:1px solid #dfe6e1;margin:28px 0 14px">'
         '<p style="font-size:12px;color:#7a8a81;line-height:1.5">Reine Information, keine medizinische Beratung und keine Dosierempfehlung.<br>'
         'Du bekommst diese Mail, weil du dich auf biohackingkompakt.de angemeldet hast. '
         '<a href="%%%%ABMELDEN%%%%" style="color:#7a8a81">Newsletter abbestellen</a><br>'
         'Biohacking Kompakt · Paul Höser · Lohengrinstraße 8 · 81925 München · '
         '<a href="%(site)s/impressum.html" style="color:#7a8a81">Impressum</a> · <a href="%(site)s/datenschutz.html" style="color:#7a8a81">Datenschutz</a></p>'
         '</div></body></html>') % dict(b=e_(d['betreff']), v=e_(d.get('vorschau', '')), n=d['nummer'], dl=datum_lang(d['datum']), web=web,
                                       i=e_(d['intro']), e=eintraege_html(d, mail=True), s=e_(d.get('schluss', '')), site=SITE)
    t = ['%s\nNewsletter %d · %s\nIm Browser lesen: %s\n' % (d['betreff'], d['nummer'], datum_lang(d['datum']), web), d['intro'], '']
    for ab in d['abschnitte']:
        t.append(ab['titel'].upper())
        for x in ab['eintraege']:
            url = x.get('url') or ''
            t.append('- %s: %s%s' % (x['titel'], x['text'], ('\n  ' + (url if url.startswith('http') else SITE + url)) if url else ''))
        t.append('')
    t += [d.get('schluss', ''), '', 'Abbestellen: %%ABMELDEN%%', 'Biohacking Kompakt · Paul Höser · Lohengrinstraße 8 · 81925 München']
    return {'betreff': d['betreff'], 'html': h, 'text': '\n'.join(t)}


def zielseiten():
    for o in ORDNER:
        for p in sorted(glob.glob(o + '/*.html')):
            yield p


def setzen(p, block, vor='</main>'):
    s = open(p, encoding='utf-8').read()
    if MUSTER.search(s):
        neu = MUSTER.sub(lambda m: block, s, count=1)
    elif vor in s:
        i = s.rfind(vor)
        neu = s[:i] + block + s[i:]
    else:
        return None
    return neu if neu != s else False


def sitemap(liste, pruefen):
    p = 'sitemap.xml'
    s = open(p, encoding='utf-8').read()
    neu = ''
    urls = [(SITE + '/newsletter/', liste[0]['datum'] if liste else '2026-10-28')] + [(SITE + d['_url'], d['datum']) for d in liste]
    for u, dt in urls:
        if '<loc>%s</loc>' % u not in s:
            neu += '  <url><loc>%s</loc><lastmod>%s</lastmod></url>\n' % (u, dt)
    if neu and not pruefen:
        i = s.rfind('</urlset>')
        open(p, 'w', encoding='utf-8').write(s[:i] + neu + s[i:])
    return neu.count('<url>')


def main():
    if '--mail' in sys.argv:
        i = sys.argv.index('--mail')
        datum, ziel = sys.argv[i + 1], sys.argv[i + 2]
        d = [x for x in ausgaben() if x['datum'] == datum][0]
        os.makedirs(ziel, exist_ok=True)
        json.dump(mailfassung(d), open(os.path.join(ziel, datum + '.json'), 'w', encoding='utf-8'), ensure_ascii=False)
        print('Mailfassung', os.path.join(ziel, datum + '.json'))
        return
    pruefen = '--pruefen' in sys.argv
    liste = ausgaben()
    os.makedirs('newsletter', exist_ok=True)
    dateien = {'newsletter/index.html': seite_index(liste)}
    for f, (t, x) in STATUS.items():
        dateien['newsletter/' + f] = seite_status(f, t, x)
    for d in liste:
        dateien['newsletter/%s.html' % d['datum']] = seite_ausgabe(d)
    neu_seiten = 0
    for p, h in dateien.items():
        # Kennung des erzeugten Inhalts: Spätere Skripte der Bau-Kette (beacon, webmcp, konten, entitaet,
        # meta …) ergänzen die Seiten. Neu geschrieben wird nur, wenn sich der eigene Inhalt geändert hat.
        sig = '<!-- nl-quelle:%s -->' % hashlib.sha1(h.encode('utf-8')).hexdigest()[:10]
        h = h.replace('<head>\n', '<head>\n' + sig + '\n', 1)
        if not os.path.exists(p) or sig not in open(p, encoding='utf-8').read():
            neu_seiten += 1
            if not pruefen:
                open(p, 'w', encoding='utf-8').write(h)
    geaendert = ohne = 0
    for p in zielseiten():
        quelle = p[:-5].replace('/index', '/')
        r = setzen(p, kasten(quelle))
        if r is None:
            ohne += 1
        elif r:
            geaendert += 1
            if not pruefen:
                open(p, 'w', encoding='utf-8').write(r)
    r = setzen('index.html', kasten_start(), vor='<!-- Partner der Woche')
    if r:
        geaendert += 1
        if not pruefen:
            open('index.html', 'w', encoding='utf-8').write(r)
    sm = sitemap(liste, pruefen)
    print('newsletter.py: %d Newsletter-Seiten %s, Anmeldekasten auf %d Seiten %s, %d ohne </main>, %d Sitemap-Einträge neu, %d Ausgaben'
          % (neu_seiten, 'zu bauen' if pruefen else 'gebaut', geaendert, 'zu ändern' if pruefen else 'gesetzt', ohne, sm, len(liste)))


if __name__ == '__main__':
    main()
