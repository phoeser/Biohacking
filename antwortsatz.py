#!/usr/bin/env python3
"""Antwort-Satz mit BK-Score unter der Kopfzeile aller Themen-, Tipp- und Vergleichsseiten (DE+EN).

Setzt idempotent zwischen <!-- antwort:start --> und <!-- antwort:end --> direkt unter die
Kopfzeile von seitenkopf.py (fehlt sie: unter <h1> und den Untertitel <p class="unter">) einen Satz,
den Suchmaschinen und Sprachmodelle als direkte Antwort übernehmen können:
  DE  „Im BK-Score: Belegt, mit Einschränkungen – Human-Evidenz 6 von 10, Sicherheits-Datenlage 7 von 10."
      + ein kurzer, sachlicher Satz je Label (Logik wie bkLabel() in js/data/scores.js)
  EN  „In the BK-Score: Supported, with caveats – human evidence 6 out of 10, safety data 7 out of 10."
Vergleichsseiten: ein Satz mit beiden Einträgen (Namen aus den Spaltenköpfen der Tabelle).

- Werte und Label kommen ausschließlich aus scores.json (nie von Hand), EN-Labels aus EN_LABEL in
  score-sync.py (dieselbe Tabelle, die die englischen Seiten pflegt).
- Seiten ohne Score-Eintrag (z. B. die unbewerteten MHC-Einträge) und Seiten ohne BK-Score-Kasten
  bleiben ohne Satz; ein vorhandener Block wird dort entfernt.
- „BK-Score" verlinkt auf /methodik.html#bk-score (EN /en/methodik.html#bk-score).
- Der Satz steht in <span>-Elementen, damit glossar_tipps.py darin nichts markiert.

Aufruf im Repo: python3 antwortsatz.py   (--pruefen = nur zählen, schreibt nichts)
Bau-Kette: nach zielstruktur.py. Seit 12.11.2026 (von Paul freigegeben).
"""
import ast, glob, html, json, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
ORDNER = ['thema', 'tipp', 'vergleich', 'en/thema', 'en/tipp', 'en/vergleich']

BLOCK = re.compile(r'\n?[ \t]*<!-- antwort:start -->.*?<!-- antwort:end -->', re.S)
SK = re.compile(r'<!-- seitenkopf:start -->.*?<!-- seitenkopf:end -->', re.S)
KOPF = re.compile(r'</h1>(\s*<p class="unter">.*?</p>)?', re.S)

# Ein kurzer, sachlicher Satz je Label – erst was trägt, dann wo die Daten aufhören.
ZUSATZ = {
    'Gut belegt': ('Die Daten am Menschen sind solide.',
                   'The data in humans are solid.'),
    'Gut belegt, stark überhöht beworben': ('Die Wirkung ist gut belegt, die Werbung verspricht aber mehr.',
                                            'The effect is well supported, but the marketing promises more.'),
    'Belegt, mit Einschränkungen': ('Studien am Menschen gibt es mehrere, sie sind aber klein, kurz oder uneinheitlich.',
                                    'There are several studies in humans, but they are small, short or inconsistent.'),
    'Dünne Humanevidenz': ('Am Menschen gibt es erste, meist kleine Studien.',
                           'There are first, mostly small studies in humans.'),
    'Lange angewendet, kaum untersucht': ('Es wird seit Langem angewendet, kontrollierte Studien gibt es aber kaum.',
                                          'It has been used for a long time, but controlled studies are scarce.'),
    'Gut untersucht – Wirkung nicht bestätigt': ('Die Frage ist gut untersucht, die beworbene Wirkung hat sich dabei bisher nicht bestätigt.',
                                                 'The question is well studied, and so far the advertised effect has not been confirmed.'),
    'Untersucht – Nutzen nicht gezeigt': ('Es gibt Studien am Menschen, einen Nutzen haben sie bisher nicht gezeigt.',
                                          'There are studies in humans, but so far they have not shown a benefit.'),
    'Nicht am Menschen untersucht': ('Studien am Menschen gibt es dazu bisher nicht.',
                                     'There are no studies in humans so far.'),
    'Am Menschen geprüft, Ergebnisse unveröffentlicht': ('Es wurde am Menschen geprüft, die Ergebnisse sind aber nicht veröffentlicht.',
                                                         'It has been tested in humans, but the results have not been published.'),
    'Hype weit vor Evidenz': ('Die Vermarktung verspricht deutlich mehr, als die bisher dünnen Daten tragen.',
                              'The marketing promises much more than the thin data can carry so far.'),
    'Experimentell': ('Es ist neu und am Menschen erst wenig untersucht.',
                      'It is new and barely studied in humans so far.'),
}


def en_label_tabelle():
    """EN_LABEL aus score-sync.py lesen (eine Quelle für die englischen Labels)."""
    baum = ast.parse(open(os.path.join(ROOT, 'score-sync.py'), encoding='utf-8').read())
    for k in baum.body:
        if isinstance(k, ast.Assign) and any(getattr(t, 'id', '') == 'EN_LABEL' for t in k.targets):
            return ast.literal_eval(k.value)
    raise SystemExit('EN_LABEL in score-sync.py nicht gefunden')


EN_LABEL = en_label_tabelle()


def scores_nach_pfad():
    """Seite → Score-Eintrag, gleiche Zuordnung wie score-sync.py."""
    d = json.load(open(os.path.join(ROOT, 'scores.json'), encoding='utf-8'))
    raus = {}
    for e in d['eintraege']:
        u = (e.get('url') or '').replace('https://biohackingkompakt.de/', '')
        if u.endswith('.html'):
            raus.setdefault(u, e)
    for e in d['eintraege']:
        raus.setdefault('thema/%s.html' % e['id'], e)
        if e['view'] == 'tipps':
            raus.setdefault('tipp/%s.html' % e['id'], e)
    return raus


NACH_PFAD = scores_nach_pfad()


def label(e, en):
    return EN_LABEL.get(e['label'], e['label']) if en else e['label']


def link(en):
    return '<a href="%s#bk-score">BK-Score</a>' % ('/en/methodik.html' if en else '/methodik.html')


def werte(e, en):
    if en:
        return 'human evidence %d out of 10, safety data %d out of 10' % (e['evidenz'], e['sicherheit'])
    return 'Human-Evidenz %d von 10, Sicherheits-Datenlage %d von 10' % (e['evidenz'], e['sicherheit'])


def satz_einzeln(e, en):
    z = ZUSATZ.get(e['label'])
    if z is None:
        raise SystemExit('Kein Zusatz für Label „%s“ – in ZUSATZ ergänzen' % e['label'])
    kopf = '%s: <b>%s</b> – %s.' % (('In the ' if en else 'Im ') + link(en), html.escape(label(e, en), quote=False), werte(e, en))
    return '<span class="as-score">%s</span> <span class="as-zusatz">%s</span>' % (kopf, z[1 if en else 0])


def satz_vergleich(paare, en):
    teile = ['%s <b>%s</b> (%s)' % (html.escape(n, quote=False), html.escape(label(e, en), quote=False), werte(e, en))
             for n, e in paare]
    return '<span class="as-score">%s: %s.</span>' % (('In the ' if en else 'Im ') + link(en), ', '.join(teile))


def vergleich_eintraege(s):
    ids = re.findall(r'href="/(?:en/)?(thema|tipp)/([^"#]+\.html)">(?:Vollständiger Eintrag|Full entry)', s)
    es = [NACH_PFAD.get('%s/%s' % (t, p)) for t, p in ids]
    if len(es) != 2 or None in es:
        return None
    kopf = re.search(r'<thead><tr><th scope="col">[^<]*</th><th scope="col">([^<]*)</th><th scope="col">([^<]*)</th>', s)
    namen = [html.unescape(kopf.group(1)), html.unescape(kopf.group(2))] if kopf else [es[0]['name'], es[1]['name']]
    namen = [re.sub(r'\s*\(.*?\)', '', n).strip() for n in namen]
    return list(zip(namen, es))


def bearbeite(s, rel, en):
    """Gibt (neuer Text, Art) zurück; Art = 'einzeln' | 'vergleich' | None (kein Satz)."""
    if re.search(r'http-equiv="refresh"', s, re.I):
        return s, None
    z = BLOCK.sub('', s)
    pfad = rel[3:] if en else rel
    satz, art = None, None
    if pfad.startswith('vergleich/'):
        paare = vergleich_eintraege(z)
        if paare:
            satz, art = satz_vergleich(paare, en), 'vergleich'
    else:
        e = NACH_PFAD.get(pfad)
        if e and '<section class="sc">' in z:
            satz, art = satz_einzeln(e, en), 'einzeln'
    if satz is None:
        return z, None
    block = '\n    <!-- antwort:start --><p class="as">%s</p><!-- antwort:end -->' % satz
    m = SK.search(z) or KOPF.search(z)
    if not m:
        return z, None
    return z[:m.end()] + block + z[m.end():], art


def seiten():
    for o in ORDNER:
        for p in sorted(glob.glob(os.path.join(ROOT, o, '*.html'))):
            if os.path.basename(p) != 'index.html':
                yield p


def main():
    pruefen = '--pruefen' in sys.argv
    neu = gleich = 0
    zahl = {}
    beispiel = {}
    for p in seiten():
        rel = os.path.relpath(p, ROOT).replace(os.sep, '/')
        en = rel.startswith('en/')
        s = open(p, encoding='utf-8').read()
        z, art = bearbeite(s, rel, en)
        schluessel = ('EN ' if en else 'DE ') + (art or 'ohne Satz')
        zahl[schluessel] = zahl.get(schluessel, 0) + 1
        if art and schluessel not in beispiel:
            beispiel[schluessel] = rel
        if z == s:
            gleich += 1
            continue
        neu += 1
        if not pruefen:
            open(p, 'w', encoding='utf-8').write(z)
    print('antwortsatz.py: %d Seiten %s, %d unverändert' % (neu, 'abweichend' if pruefen else 'aktualisiert', gleich))
    print('  ' + ' · '.join('%s %d' % (k, v) for k, v in sorted(zahl.items())))


if __name__ == '__main__':
    main()
