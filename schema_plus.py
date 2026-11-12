#!/usr/bin/env python3
"""JSON-LD der Themen- und Tipp-Seiten erweitern (DE+EN) – ändert nur die JSON-LD-Blöcke.

Je Seite mit Score-Eintrag in scores.json (unbewertete Seiten wie die MHC-Einträge bleiben, wie sie sind):
  - Artikel-Knoten: "@type": ["Article", "MedicalWebPage"], "lastReviewed" = dateModified
    (KEIN reviewedBy – es gibt keine ärztliche Prüfung, also wird auch keine behauptet).
  - "additionalProperty" am Artikel-Knoten: je Achse ein PropertyValue
    {name "BK-Score: <Achse>", value, minValue 0, maxValue 10, measurementTechnique → BK-Score}.
    Namen wie in score-sync.py, damit dessen JSON-LD-Abgleich auch diese Werte nachzieht.
  - "about" um einen Wirkstoff-Knoten (@id <seite>#wirkstoff) ergänzt: name, alternateName aus js/data;
    Typ supplement → DietarySupplement, experimental/khavinson → Drug, behandlungen → MedicalTest
    (Diagnostik), LifestyleModification (Lebensstil) oder MedicalTherapy. Tipps bekommen keinen
    Wirkstoff-Knoten (kein Wirkstoff). Hat docs/zielstruktur.json eine eindeutige Zuordnung – dieselbe
    Bedingung, unter der zielstruktur.py den Kasten „Woran es andockt" zeigt (ein Molekül UND ein
    bestätigtes Einzelprotein-Ziel) –, kommt sameAs auf das ChEMBL-Molekül dazu und das Ziel als Protein
    mit sameAs UniProt (bioChemInteraction, deshalb zusätzlich Typ MolecularEntity). UniProt steht bewusst
    nicht im sameAs des Wirkstoffs: Ein Protein ist nicht derselbe Gegenstand wie der Wirkstoff.
  - DefinedTerm „BK-Score" (@id https://biohackingkompakt.de/methodik.html#bk-score,
    inDefinedTermSet = Glossar) als eigener Knoten im @graph.
Auf methodik.html und en/methodik.html: Anker <span id="bk-score"> im BK-Score-Abschnitt und der
DefinedTerm-Knoten im JSON-LD.

Google-Richtlinien: kein Review, kein Rating, kein AggregateRating – der BK-Score ist eine eigene
Einordnung des Wissensstands und wird nur als PropertyValue ausgezeichnet, nicht als Bewertung.

Idempotent: Das Skript entfernt zuerst alles, was es selbst setzt, und setzt es dann neu.
Ein Block wird nur umgeschrieben, wenn er sich verlustfrei im selben Stil neu schreiben lässt.

Aufruf im Repo:
  python3 schema_plus.py            schreibt
  python3 schema_plus.py --pruefen  nur zählen
  python3 schema_plus.py --zurueck  nimmt alle Erweiterungen wieder heraus
Bau-Kette: nach zielstruktur.py (liest dessen Cache). Seit 12.11.2026 (von Paul freigegeben).
"""
import glob, json, os, re, subprocess, sys, tempfile

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = 'https://biohackingkompakt.de'
TERM = SITE + '/methodik.html#bk-score'
SET = {False: SITE + '/glossar/#set', True: SITE + '/en/glossar/#set'}
ORDNER = ['thema', 'tipp', 'en/thema', 'en/tipp']
ACHSEN = ['evidenz', 'mechanismus', 'sicherheit', 'hype', 'anwendung']
DE_NAMEN = ['Human-Evidenz', 'Mechanismus', 'Sicherheits-Datenlage', 'Hype-Abstand', 'Anwendungserfahrung']
EN_NAMEN = ['Human evidence', 'Mechanism', 'Safety data', 'Hype gap', 'Track record of use']
MAX_ZIELE = 4  # wie der sichtbare Kasten in zielstruktur.py
BESCHREIBUNG = {
    False: 'Einschätzung des Wissensstands zu einem Wirkstoff oder einer Anwendung auf fünf Achsen von 0 bis 10: '
           'Human-Evidenz, Mechanismus, Sicherheits-Datenlage, Hype-Abstand und Anwendungserfahrung. Bewertet wird '
           'der Wissensstand, nicht die Substanz. Subjektive Einschätzung von Biohacking Kompakt nach offengelegten '
           'Regeln, keine medizinische Empfehlung.',
    True: 'Assessment of the state of knowledge on a substance or practice on five axes from 0 to 10: human evidence, '
          'mechanism, safety data, hype gap and track record of use. It rates the state of knowledge, not the '
          'substance. Subjective assessment by Biohacking Kompakt based on published rules, not a medical '
          'recommendation.',
}
BLOCK = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
STILE = [(',', ':'), (', ', ': ')]

LADEN = r"""
const fs=require('fs'),vm=require('vm');
const ctx={window:{},console:{log(){}},document:{addEventListener(){}}};vm.createContext(ctx);
const D={supplement:'supplements',experimental:'experimental',behandlungen:'therapies',tipps:'tips',khavinson:'khavinson'};
const K={supplement:'SUPPLEMENTS',experimental:'EXPERIMENTAL',behandlungen:'THERAPIES',tipps:'TIPS',khavinson:'KHAVINSON'};
for(const f of Object.values(D)) vm.runInContext(fs.readFileSync('js/data/'+f+'.js','utf8').replace(/^\s*const\s+/gm,'var '),ctx);
const raus={};
for(const [v,k] of Object.entries(K)) raus[v]=(ctx[k]||[]).map(e=>({id:e.id,name:e.name||e.title||'',alt:e.altNames||''}));
process.stdout.write(JSON.stringify(raus));
"""


def dump(o, stil):
    return json.dumps(o, ensure_ascii=False, separators=stil)


def daten_laden():
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
        f.write(LADEN)
        js = f.name
    try:
        roh = json.loads(subprocess.check_output(['node', js], cwd=ROOT))
    finally:
        os.unlink(js)
    return {(v, e['id']): e for v, liste in roh.items() for e in liste}


def scores_nach_pfad():
    """Seite → Score-Eintrag, gleiche Zuordnung wie score-sync.py."""
    d = json.load(open(os.path.join(ROOT, 'scores.json'), encoding='utf-8'))
    raus = {}
    for e in d['eintraege']:
        u = (e.get('url') or '').replace(SITE + '/', '')
        if u.endswith('.html'):
            raus.setdefault(u, e)
    for e in d['eintraege']:
        raus.setdefault('thema/%s.html' % e['id'], e)
        if e['view'] == 'tipps':
            raus.setdefault('tipp/%s.html' % e['id'], e)
    return raus


def zielstruktur():
    p = os.path.join(ROOT, 'docs', 'zielstruktur.json')
    return (json.load(open(p, encoding='utf-8')).get('zuordnung') or {}) if os.path.exists(p) else {}


def typ_fuer(e, de_titel):
    v = e['view']
    if v == 'supplement':
        return 'DietarySupplement'
    if v in ('experimental', 'khavinson'):
        return 'Drug'
    if v == 'behandlungen':
        if 'Aussagekraft' in de_titel or re.search(r'(^|-)tests?(-|$)', e['id']):
            return 'MedicalTest'
        if 'Wirkung, Studien und Grenzen' in de_titel:
            return 'LifestyleModification'
        return 'MedicalTherapy'
    return None  # Tipps: kein Wirkstoff


def alternativ(namen, haupt):
    raus, seen = [], {haupt.casefold()}
    for n in namen:
        for t in re.split(r',\s*', n or ''):
            t = t.strip()
            if t and t.casefold() not in seen:
                seen.add(t.casefold())
                raus.append(t)
    return raus


def eindeutig(zo):
    """Nur was zielstruktur.py auch sichtbar zeigt: eindeutiges Molekül UND bestätigtes Einzelprotein-Ziel.
    Ein Molekül-Treffer allein reicht nicht (Pflanzen, Gemische, Ester: z. B. Ashwagandha → ein Withanolid)."""
    return bool(zo and zo.get('chembl') and zo.get('zeilen'))


def wirkstoff(e, daten, z, url, en, about_name, de_titel):
    typ = typ_fuer(e, de_titel)
    if not typ:
        return None
    d = daten.get((e['view'], e['id'])) or {}
    de_name = d.get('name') or e['name']
    name = about_name if en and about_name else de_name
    knoten = {'@type': typ, '@id': url + '#wirkstoff', 'name': name}
    alt = alternativ(([de_name] if en else []) + [d.get('alt', '')], name)
    if alt:
        knoten['alternateName'] = alt
    zo = z.get(e['id']) if e['view'] in ('experimental', 'supplement') else None
    if eindeutig(zo):
        knoten['@type'] = [typ, 'MolecularEntity']
        knoten['sameAs'] = ['https://www.ebi.ac.uk/chembl/explore/compound/%s' % zo['chembl']]
        knoten['bioChemInteraction'] = [
            {'@type': 'Protein', 'name': x['protein'], 'identifier': x['uniprot'],
             'sameAs': 'https://www.uniprot.org/uniprotkb/%s/entry' % x['uniprot']}
            for x in zo['zeilen'][:MAX_ZIELE]]
    return knoten


def begriff(en):
    return {'@type': 'DefinedTerm', '@id': TERM, 'name': 'BK-Score', 'description': BESCHREIBUNG[en],
            'url': SITE + ('/en/methodik.html#bk-score' if en else '/methodik.html#bk-score'),
            'inDefinedTermSet': {'@id': SET[en]}}


def ist_artikel(n):
    t = n.get('@type')
    return isinstance(n, dict) and (t == 'Article' or (isinstance(t, list) and 'Article' in t)) \
        and str(n.get('@id', '')).endswith('#artikel')


def aufraeumen(graph, url):
    """Entfernt alles, was dieses Skript setzt (für idempotente Läufe und --zurueck)."""
    graph[:] = [n for n in graph if not (isinstance(n, dict) and n.get('@id') == TERM)]
    for n in graph:
        if not ist_artikel(n):
            continue
        if isinstance(n['@type'], list):
            n['@type'] = 'Article'
        n.pop('lastReviewed', None)
        n.pop('additionalProperty', None)
        ab = n.get('about')
        if isinstance(ab, list):
            ab = [x for x in ab if not (isinstance(x, dict) and x.get('@id') == url + '#wirkstoff')]
            n['about'] = ab[0] if len(ab) == 1 else ab


def erweitern(graph, e, daten, z, url, en, de_titel):
    art = next((n for n in graph if ist_artikel(n)), None)
    if art is None:
        return False
    art['@type'] = ['Article', 'MedicalWebPage']
    if art.get('dateModified'):
        art['lastReviewed'] = art['dateModified']
    namen = EN_NAMEN if en else DE_NAMEN
    art['additionalProperty'] = [
        {'@type': 'PropertyValue', 'name': 'BK-Score: ' + n, 'value': e[a], 'minValue': 0, 'maxValue': 10,
         'measurementTechnique': {'@id': TERM}} for a, n in zip(ACHSEN, namen)]
    ab = art.get('about')
    about_name = ab.get('name') if isinstance(ab, dict) else None
    w = wirkstoff(e, daten, z, url, en, about_name, de_titel)
    if w:
        art['about'] = ([ab] if isinstance(ab, dict) else list(ab or [])) + [w]
    graph.append(begriff(en))
    return True


def block_umschreiben(h, f):
    """Wendet f(graph) auf jeden JSON-LD-Block an; gibt (neu, übersprungen) zurück."""
    sprung = []

    def ersetze(m):
        roh = m.group(2)
        try:
            d = json.loads(roh)
        except Exception:
            sprung.append('kein JSON')
            return m.group(0)
        stil = next((st for st in STILE if dump(d, st) == roh.strip()), None)
        if not stil or '@graph' not in d:
            sprung.append('nicht verlustfrei')
            return m.group(0)
        f(d['@graph'])
        return m.group(1) + dump(d, stil) + m.group(3)
    return BLOCK.sub(ersetze, h), sprung


def methodik(zurueck, pruefen):
    """Anker id="bk-score" im BK-Score-Abschnitt + DefinedTerm-Knoten (DE und EN)."""
    n = 0
    for rel, en in (('methodik.html', False), ('en/methodik.html', True)):
        p = os.path.join(ROOT, rel)
        if not os.path.exists(p):
            continue
        h = open(p, encoding='utf-8').read()
        z = h
        if not zurueck and 'id="bk-score"' not in z:
            m = re.search(r'<section id="score">\s*<h2>.*?</h2>', z, re.S)
            if m:
                z = z[:m.end()] + '<span id="bk-score" class="sk-anker"></span>' + z[m.end():]
            else:
                print('  %s: BK-Score-Abschnitt nicht gefunden, kein Anker gesetzt' % rel)

        def f(graph):
            graph[:] = [x for x in graph if not (isinstance(x, dict) and x.get('@id') == TERM)]
            if not zurueck:
                graph.append(begriff(en))
        z, _ = block_umschreiben(z, f)
        if z != h:
            n += 1
            if not pruefen:
                open(p, 'w', encoding='utf-8').write(z)
    return n


def main():
    pruefen = '--pruefen' in sys.argv
    zurueck = '--zurueck' in sys.argv
    scores = scores_nach_pfad()
    daten = daten_laden()
    z = zielstruktur()
    neu = gleich = ohne_score = 0
    sprung, typen, mit_chembl = [], {}, 0
    for o in ORDNER:
        for p in sorted(glob.glob(os.path.join(ROOT, o, '*.html'))):
            if os.path.basename(p) == 'index.html':
                continue
            rel = os.path.relpath(p, ROOT).replace(os.sep, '/')
            en = rel.startswith('en/')
            pfad = rel[3:] if en else rel
            h = open(p, encoding='utf-8').read()
            if re.search(r'http-equiv="refresh"', h, re.I):
                continue
            e = scores.get(pfad)
            url = SITE + '/' + rel
            de_titel = ''
            if e and not zurueck:
                dp = os.path.join(ROOT, pfad)
                if os.path.exists(dp):
                    m = re.search(r'<title>(.*?)</title>', open(dp, encoding='utf-8').read(), re.S)
                    de_titel = m.group(1) if m else ''
            erweitert = []

            def f(graph):
                aufraeumen(graph, url)
                if e and not zurueck:
                    erweitert.append(erweitern(graph, e, daten, z, url, en, de_titel))
            neu_h, sp = block_umschreiben(h, f)
            if sp:
                sprung.append(rel)
            if not e:
                ohne_score += 1
            elif any(erweitert):
                w = typ_fuer(e, de_titel) or '(ohne Wirkstoff)'
                typen[w] = typen.get(w, 0) + 1
                zo = z.get(e['id']) if e['view'] in ('experimental', 'supplement') else None
                mit_chembl += eindeutig(zo)
            if neu_h == h:
                gleich += 1
                continue
            neu += 1
            if not pruefen:
                open(p, 'w', encoding='utf-8').write(neu_h)
    m = methodik(zurueck, pruefen)
    print('schema_plus.py%s: %d Seiten %s, %d unverändert, %d ohne Score (unverändert gelassen), methodik: %d'
          % (' --zurueck' if zurueck else '', neu, 'abweichend' if pruefen else 'geschrieben', gleich, ohne_score, m))
    if not zurueck:
        print('  Wirkstoff-Knoten: ' + ' · '.join('%s %d' % kv for kv in sorted(typen.items()))
              + ' · mit ChEMBL/UniProt %d (DE+EN gezählt)' % mit_chembl)
    if sprung:
        print('  nicht verlustfrei umschreibbar, übersprungen: %d, z. B. %s' % (len(sprung), ', '.join(sprung[:5])))


if __name__ == '__main__':
    main()
