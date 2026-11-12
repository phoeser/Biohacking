#!/usr/bin/env python3
"""Kasten „Woran es andockt" (EN „Molecular target") auf Themenseiten von Wirkstoffen.

Für Einträge aus experimental.js und supplements.js sucht das Skript das molekulare Ziel in
offenen Datenbanken: Molekül und Wirkmechanismus aus ChEMBL, Gen und Proteinname aus UniProt.
Eingetragen wird NUR, wenn die Zuordnung eindeutig ist – lieber weglassen als raten:
  1. Ein ChEMBL-Molekül wird über einen EXAKTEN Namen gefunden (Name, Synonym laut ChEMBL
     oder Handelsname; Groß-/Kleinschreibung egal). Kandidaten sind der deutsche Name, die
     Namen in Klammern, altNames aus js/data und der Titel der englischen Seite.
  2. Alle Kandidaten führen zu genau EINEM Molekül (Salze werden auf das Elternmolekül
     zurückgeführt). Treffen zwei Kandidaten verschiedene Moleküle (Stoffgemische,
     Wirkstoffklassen), entfällt der Kasten.
  3. Der Mechanismus-Eintrag in ChEMBL nennt ein Ziel aus genau EINEM Protein mit bekannter
     Wirkart (Agonist, Antagonist, Hemmer …), und das Gen in UniProt (geprüft, Mensch) passt dazu.
     Protein-Komplexe und -Familien ohne eindeutiges Gen werden nicht gezeigt.

Datenweg: zuerst die ChEMBL-REST-API (www.ebi.ac.uk/chembl/api/data). Antwortet sie nicht
(am 12.11.2026 lieferte sie durchgehend HTTP 500), nimmt das Skript dieselben ChEMBL-Daten
über die Open-Targets-Plattform (api.platform.opentargets.org, Molekül-IDs = ChEMBL-IDs,
Mechanismen = ChEMBL). UniProt: rest.uniprot.org.
Cache: docs/zielstruktur.json (Namenssuche, Moleküle, UniProt, Zuordnung je Thema).

Der Kasten steht zwischen <!-- ziel:start --> und <!-- ziel:end --> direkt nach dem Abschnitt
„Wie es wirken soll" / „Wie es wirkt" / „Wirkmechanismus" (EN „How it … works"), sonst nach
„Kurz gesagt". DE und EN. Keine Dosierungen, keine Bezugsquellen.

Aufruf im Repo:
  python3 zielstruktur.py              holt Fehlendes, schreibt Seiten und Liste
  python3 zielstruktur.py --offline    nur aus dem Cache (für die Bau-Kette)
  python3 zielstruktur.py --neu        Cache der Zuordnungen verwerfen und neu abfragen
  python3 zielstruktur.py --pruefen    nichts schreiben, nur zählen
Ausgabe der Zuordnungen zum Gegenprüfen: docs/zielstruktur-liste.txt (id → Ziel).
Seit 12.11.2026 (Stufe 1 des Themenseiten-Entwurfs).
"""
import concurrent.futures as cf
import datetime, glob, html, json, os, re, subprocess, sys, tempfile, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.abspath(__file__))
CACHE = os.path.join(ROOT, 'docs', 'zielstruktur.json')
LISTE = os.path.join(ROOT, 'docs', 'zielstruktur-liste.txt')
CHEMBL = 'https://www.ebi.ac.uk/chembl/api/data'
OT = 'https://api.platform.opentargets.org/api/v4/graphql'
UNIPROT = 'https://rest.uniprot.org/uniprotkb'
UA = {'User-Agent': 'bk-zielstruktur/1.0', 'Accept': 'application/json'}
MAX_ZEILEN = 4
MONATE = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
          'September', 'October', 'November', 'December']

# ChEMBL action_type → Wirkart (DE, EN). Was hier fehlt, wird nicht gezeigt.
WIRKART = {
    'INHIBITOR': ('Hemmer', 'Inhibitor'),
    'AGONIST': ('Agonist', 'Agonist'),
    'ANTAGONIST': ('Antagonist', 'Antagonist'),
    'PARTIAL AGONIST': ('Partieller Agonist', 'Partial agonist'),
    'INVERSE AGONIST': ('Inverser Agonist', 'Inverse agonist'),
    'BLOCKER': ('Blocker', 'Blocker'),
    'OPENER': ('Öffner', 'Opener'),
    'ACTIVATOR': ('Aktivator', 'Activator'),
    'POSITIVE ALLOSTERIC MODULATOR': ('Positiver allosterischer Modulator', 'Positive allosteric modulator'),
    'NEGATIVE ALLOSTERIC MODULATOR': ('Negativer allosterischer Modulator', 'Negative allosteric modulator'),
    'ALLOSTERIC ANTAGONIST': ('Allosterischer Antagonist', 'Allosteric antagonist'),
    'MODULATOR': ('Modulator', 'Modulator'),
    'RELEASING AGENT': ('Freisetzer', 'Releasing agent'),
    'SUBSTRATE': ('Substrat', 'Substrate'),
    'BINDING AGENT': ('Bindet', 'Binding agent'),
    'STABILISER': ('Stabilisator', 'Stabiliser'),
    'ANTISENSE INHIBITOR': ('Antisense-Hemmer', 'Antisense inhibitor'),
    'RNAI INHIBITOR': ('RNAi-Hemmer', 'RNAi inhibitor'),
    'DEGRADER': ('Abbau-Auslöser', 'Degrader'),
}

START, ENDE = '<!-- ziel:start -->', '<!-- ziel:end -->'
BLOCK = re.compile(r'\n?[ \t]*<!-- ziel:start -->.*?<!-- ziel:end -->', re.S)
MECH_DE = re.compile(r'\b(?:wie (?:es|sie|er|\S+) (?:wirk(?:t|en)|wirken soll(?:en)?)|wirkmechanismus|mechanismus|im \S+ macht)\b', re.I)
MECH_EN = re.compile(r'\b(?:how (?:it|they|\S+) (?:works?|is supposed to work|are supposed to work|acts?)|mechanism|does in the)\b', re.I)
NICHT = re.compile(r'Nebenwirk|Wechselwirk|Side effect|Interaction|BK-Score', re.I)

LADEN = r"""
const fs=require('fs'),vm=require('vm');
const ctx={window:{},console:{log(){}},document:{addEventListener(){}}};vm.createContext(ctx);
for(const f of ['supplements','experimental']){
  vm.runInContext(fs.readFileSync('js/data/'+f+'.js','utf8').replace(/^\s*const\s+/gm,'var '),ctx);
}
const z=e=>({id:e.id,name:e.name||'',alt:e.altNames||''});
process.stdout.write(JSON.stringify({supplement:ctx.SUPPLEMENTS.map(z),experimental:ctx.EXPERIMENTAL.map(z)}));
"""


# ---------------------------------------------------------------- Netz
def hole(url, daten=None, versuche=3, timeout=40):
    for i in range(versuche):
        try:
            req = urllib.request.Request(url, data=daten, headers=dict(UA, **({'Content-Type': 'application/json'} if daten else {})))
            with urllib.request.urlopen(req, timeout=timeout) as r:
                return json.loads(r.read().decode('utf-8'))
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            if i == versuche - 1:
                raise
        except Exception:
            if i == versuche - 1:
                raise
        time.sleep(2 * (i + 1))


def chembl_erreichbar():
    try:
        hole(CHEMBL + '/status.json', versuche=1, timeout=30)
        return True
    except Exception:
        return False


def ot(query, var):
    r = hole(OT, json.dumps({'query': query, 'variables': var}).encode())
    if r and r.get('errors'):
        raise RuntimeError(r['errors'][0].get('message'))
    return (r or {}).get('data') or {}


# -------- Namenssuche: gibt Liste von Molekül-Datensätzen {id, parent, namen} zurück
def suche_chembl(name):
    raus = {}
    for feld in ('pref_name__iexact', 'molecule_synonyms__molecule_synonym__iexact'):
        u = '%s/molecule.json?%s=%s&limit=20' % (CHEMBL, feld, urllib.parse.quote(name))
        for m in (hole(u) or {}).get('molecules', []):
            hier = m.get('molecule_hierarchy') or {}
            raus[m['molecule_chembl_id']] = {'id': m['molecule_chembl_id'],
                                             'parent': hier.get('parent_chembl_id') or m['molecule_chembl_id']}
    return list(raus.values())


OT_SUCHE = '''query($q:String!){ search(queryString:$q, entityNames:["drug"], page:{index:0,size:8}){
  hits { id object { ... on Drug { id name synonyms{label source} tradeNames{label} parentMolecule{id} } } } } }'''


def suche_ot(name):
    d = ot(OT_SUCHE, {'q': name})
    raus = []
    ziel = name.casefold().strip()
    for h in ((d.get('search') or {}).get('hits') or []):
        o = h.get('object') or {}
        if not o.get('id'):
            continue
        namen = {(o.get('name') or '').casefold()}
        namen |= {s['label'].casefold() for s in o.get('synonyms') or [] if s.get('source') == 'ChEMBL'}
        namen |= {t['label'].casefold() for t in o.get('tradeNames') or []}
        if ziel in {n.strip() for n in namen}:
            raus.append({'id': o['id'], 'parent': (o.get('parentMolecule') or {}).get('id') or o['id']})
    return raus


# -------- Mechanismus: Liste {wirkart, ziel, gen, uniprot}
def mech_chembl(cid):
    zeilen = []
    for m in (hole('%s/mechanism.json?molecule_chembl_id=%s&limit=50' % (CHEMBL, cid)) or {}).get('mechanisms', []):
        tid = m.get('target_chembl_id')
        if not tid:
            continue
        t = hole('%s/target/%s.json' % (CHEMBL, tid)) or {}
        komp = t.get('target_components') or []
        if t.get('target_type') != 'SINGLE PROTEIN' or len(komp) != 1:
            continue
        gen = next((s['component_synonym'] for s in komp[0].get('target_component_synonyms', [])
                    if s.get('syn_type') == 'GENE_SYMBOL'), None)
        zeilen.append({'wirkart': m.get('action_type'), 'moa': m.get('mechanism_of_action'),
                       'ziel': t.get('pref_name'), 'gen': gen, 'uniprot': komp[0].get('accession'),
                       'organismus': t.get('organism'), 'target_chembl': tid})
    return zeilen


OT_MECH = '''query($id:String!){ drug(chemblId:$id){ id name mechanismsOfAction { rows {
  mechanismOfAction actionType targetName targets { id approvedSymbol proteinIds { id source } } } } } }'''


def mech_ot(cid):
    d = (ot(OT_MECH, {'id': cid}).get('drug') or {})
    zeilen = []
    for r in ((d.get('mechanismsOfAction') or {}).get('rows') or []):
        ts = r.get('targets') or []
        if len(ts) != 1:
            continue  # Komplex/Familie: kein eindeutiges Gen
        sp = [p['id'] for p in ts[0].get('proteinIds') or [] if p.get('source') == 'uniprot_swissprot']
        if len(sp) != 1:
            continue
        zeilen.append({'wirkart': r.get('actionType'), 'moa': r.get('mechanismOfAction'),
                       'ziel': r.get('targetName'), 'gen': ts[0].get('approvedSymbol'), 'uniprot': sp[0],
                       'organismus': 'Homo sapiens', 'target_chembl': None})
    return {'name': d.get('name'), 'zeilen': zeilen}


def uniprot(acc):
    d = hole('%s/%s.json?fields=gene_primary,protein_name,organism_name,reviewed' % (UNIPROT, acc))
    if not d:
        return None
    pd = d.get('proteinDescription') or {}
    name = ((pd.get('recommendedName') or {}).get('fullName') or {}).get('value')
    gene = next((g['geneName']['value'] for g in d.get('genes') or [] if g.get('geneName')), None)
    return {'protein': name, 'gen': gene, 'organismus': (d.get('organism') or {}).get('scientificName'),
            'geprueft': 'reviewed' in (d.get('entryType') or '').lower() and 'unreviewed' not in (d.get('entryType') or '').lower()}


# ---------------------------------------------------------------- Daten
def daten_laden():
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
        f.write(LADEN)
        js = f.name
    try:
        return json.loads(subprocess.check_output(['node', js], cwd=ROOT))
    finally:
        os.unlink(js)


def kandidaten(e, en_titel):
    """Gibt [(name, haupt)] zurück. haupt = aus dem Namen/Titel selbst, nicht aus altNames."""
    namen = []
    def dazu(t, haupt):
        t = html.unescape(re.sub(r'<[^>]+>', '', t or '')).strip()
        for teil in re.split(r'[,;]| / ', t):
            teil = re.sub(r'\s+', ' ', teil).strip(' .')
            if 2 < len(teil) <= 60 and not re.search(r'\bmg\b', teil):
                namen.append((teil, haupt))
    for t in (e['name'], en_titel):
        if not t:
            continue
        dazu(re.sub(r'\s*\([^)]*\)', '', t).strip(), True)
        for k in re.findall(r'\(([^)]*)\)', t):
            dazu(k, True)
    dazu(e['alt'], False)
    seen, raus = {}, []
    for n, h in namen:
        k = n.casefold()
        if k not in seen:
            seen[k] = len(raus)
            raus.append([n, h])
        elif h:
            raus[seen[k]][1] = True
    return [tuple(x) for x in raus]


def seiten_je_thema():
    sc = json.load(open(os.path.join(ROOT, 'scores.json'), encoding='utf-8'))
    liste = sc.get('eintraege', sc) if isinstance(sc, dict) else sc
    raus = {}
    for e in liste:
        u = e.get('url') or ''
        if e.get('view') in ('experimental', 'supplement') and '/thema/' in u:
            raus[e['id']] = u.split('/thema/')[1]
    return raus


# ---------------------------------------------------------------- Zuordnen
def zuordnen(themen, cache, offline, chembl_ok):
    namen = cache.setdefault('namen', {})
    mol = cache.setdefault('molekuele', {})
    up = cache.setdefault('uniprot', {})
    such = suche_chembl if chembl_ok else suche_ot

    offen = sorted({n.casefold(): n for t in themen.values() for n, _ in t['kandidaten']
                    if n.casefold() not in namen}.values())
    if offen and not offline:
        print('  Namenssuche: %d neue Namen über %s …' % (len(offen), 'ChEMBL' if chembl_ok else 'Open Targets (ChEMBL-Daten)'))
        with cf.ThreadPoolExecutor(6) as ex:
            for n, r in zip(offen, ex.map(lambda n: _sicher(such, n), offen)):
                if r is not None:
                    namen[n.casefold()] = r
    zuordnung = {}
    for tid, t in themen.items():
        treffer, haupt_treffer = set(), set()
        unbekannt = False
        for n, haupt in t['kandidaten']:
            r = namen.get(n.casefold())
            if r is None:
                unbekannt = True
                continue
            ids = {m['parent'] for m in r}
            treffer |= ids
            if haupt:
                haupt_treffer |= ids
        if len(treffer) > 1:
            zuordnung[tid] = {'mehrdeutig': sorted(treffer)}
        elif unbekannt:
            zuordnung[tid] = {'offen': True}  # nicht alle Namen geprüft (Netzfehler): lieber nichts zeigen
        elif len(treffer) == 1 and not haupt_treffer:
            # nur ein Nebenname trifft (z. B. Inhaltsstoff, Handelsname eines anderen Mittels): weglassen
            zuordnung[tid] = {'nur_nebenname': sorted(treffer)}
        elif len(treffer) == 1:
            zuordnung[tid] = {'chembl': treffer.pop()}
    # Mechanismen der gefundenen Moleküle
    ids = sorted({z['chembl'] for z in zuordnung.values() if 'chembl' in z and z['chembl'] not in mol})
    if ids and not offline:
        print('  Mechanismen: %d Moleküle …' % len(ids))
        def m(cid):
            if chembl_ok:
                return {'name': None, 'zeilen': mech_chembl(cid), 'weg': 'chembl'}
            r = mech_ot(cid)
            r['weg'] = 'opentargets'
            return r
        with cf.ThreadPoolExecutor(6) as ex:
            for cid, r in zip(ids, ex.map(lambda c: _sicher(m, c), ids)):
                if r is not None:
                    r['abgerufen'] = datetime.date.today().isoformat()
                    mol[cid] = r
    accs = sorted({z['uniprot'] for r in mol.values() for z in r['zeilen'] if z.get('uniprot') and z['uniprot'] not in up})
    if accs and not offline:
        print('  UniProt: %d Einträge …' % len(accs))
        with cf.ThreadPoolExecutor(6) as ex:
            for a, r in zip(accs, ex.map(lambda a: _sicher(uniprot, a), accs)):
                if r is not None:
                    up[a] = r
    # Endgültige Zeilen je Thema
    for tid, z in zuordnung.items():
        if 'chembl' not in z:
            continue
        r = mol.get(z['chembl'])
        if not r:
            z['zeilen'] = None
            continue
        zeilen, seen = [], set()
        for x in r['zeilen']:
            u = up.get(x.get('uniprot') or '')
            if (x.get('wirkart') not in WIRKART or not u or not u.get('geprueft')
                    or u.get('organismus') != 'Homo sapiens' or not x.get('gen') or u.get('gen') != x['gen']):
                continue
            k = (x['wirkart'], x['uniprot'])
            if k in seen:
                continue
            seen.add(k)
            zeilen.append({'wirkart': x['wirkart'], 'gen': x['gen'], 'uniprot': x['uniprot'],
                           'protein': u['protein'], 'moa': x.get('moa'), 'target_chembl': x.get('target_chembl')})
        z['zeilen'] = zeilen
        z['abgerufen'] = r.get('abgerufen')
        z['name'] = r.get('name')
    return zuordnung


def _sicher(f, x):
    try:
        return f(x)
    except Exception as e:
        print('    Fehler bei %s: %s' % (x, str(e)[:120]))
        return None


# ---------------------------------------------------------------- HTML
def datum_text(iso, en):
    j, m, t = (int(x) for x in iso.split('-'))
    return '%s %d, %d' % (MONATE[m - 1], t, j) if en else '%02d.%02d.%04d' % (t, m, j)


def kasten(z, en):
    zeilen = z['zeilen'][:MAX_ZEILEN]
    li = []
    for x in zeilen:
        art = WIRKART[x['wirkart']][1 if en else 0]
        li.append('        <li><span class="ziel-art">%s</span> <span class="ziel-prot">%s</span> '
                  '<span class="ziel-daten">%s <code>%s</code> · UniProt <a href="https://www.uniprot.org/uniprotkb/%s/entry" '
                  'rel="noopener" target="_blank"><code>%s</code></a></span></li>'
                  % (html.escape(art), html.escape(x['protein']), 'Gene' if en else 'Gen', html.escape(x['gen']),
                     x['uniprot'], x['uniprot']))
    mehr = len(z['zeilen']) - len(zeilen)
    cl = 'https://www.ebi.ac.uk/chembl/explore/compound/%s' % z['chembl']
    if en:
        titel = 'Molecular target'
        mehr_t = (' %d more targets listed in ChEMBL.' % mehr) if mehr > 0 else ''
        fuss = ('Data: <a href="%s" rel="noopener" target="_blank">ChEMBL</a>, UniProt · assigned automatically, '
                'as of %s.%s A known target does not mean an effect in humans is established.'
                % (cl, datum_text(z['abgerufen'], True), mehr_t))
    else:
        titel = 'Woran es andockt'
        mehr_t = (' %d weitere Ziele in ChEMBL.' % mehr) if mehr > 0 else ''
        fuss = ('Daten: <a href="%s" rel="noopener" target="_blank">ChEMBL</a>, UniProt · automatisch zugeordnet, '
                'Stand %s.%s Ein bekanntes Ziel heißt noch nicht, dass die Wirkung am Menschen belegt ist.'
                % (cl, datum_text(z['abgerufen'], False), mehr_t))
    return ('\n    %s\n    <section class="ziel">\n      <h2>%s</h2>\n      <ul class="ziel-liste">\n%s\n      </ul>\n'
            '      <p class="ziel-quelle">%s</p>\n    </section>\n    %s' % (START, titel, '\n'.join(li), fuss, ENDE))


def einsetzen(s, block, en):
    """Nach dem Mechanismus-Abschnitt, sonst nach „Kurz gesagt"; gibt None zurück, wenn kein Platz."""
    muster = MECH_EN if en else MECH_DE
    for m in re.finditer(r'<section\b[^>]*>\s*<h2[^>]*>(.*?)</h2>', s, re.S):
        h = re.sub(r'<[^>]+>', '', m.group(1))
        if muster.search(h) and not NICHT.search(h):
            e = s.find('</section>', m.end())
            if e > 0:
                e += len('</section>')
                return s[:e] + block + s[e:]
    m = re.search(r'<section class="kurz">.*?</section>', s, re.S)
    if m:
        return s[:m.end()] + block + s[m.end():]
    # Ältere Vorlage ohne „Kurz gesagt": nach „Was X ist" / „What X is"
    was = re.compile(r'^\s*(What .* is|Was .* ist)\s*$', re.I)
    for m in re.finditer(r'<section\b[^>]*>\s*<h2[^>]*>(.*?)</h2>', s, re.S):
        if was.search(re.sub(r'<[^>]+>', '', m.group(1))):
            e = s.find('</section>', m.end())
            if e > 0:
                e += len('</section>')
                return s[:e] + block + s[e:]
    return None


# ---------------------------------------------------------------- Ablauf
def main():
    offline = '--offline' in sys.argv
    pruefen = '--pruefen' in sys.argv
    cache = json.load(open(CACHE, encoding='utf-8')) if os.path.exists(CACHE) else {}
    if '--neu' in sys.argv:
        cache = {}
    daten = daten_laden()
    seiten = seiten_je_thema()
    themen = {}
    for bereich in ('experimental', 'supplement'):
        for e in daten[bereich]:
            slug = seiten.get(e['id'])
            if not slug or not os.path.exists(os.path.join(ROOT, 'thema', slug)):
                continue
            en_titel = ''
            pe = os.path.join(ROOT, 'en', 'thema', slug)
            if os.path.exists(pe):
                m = re.search(r'<h1[^>]*>(.*?)</h1>', open(pe, encoding='utf-8').read(), re.S)
                en_titel = m.group(1) if m else ''
            themen[e['id']] = {'slug': slug, 'bereich': bereich, 'kandidaten': kandidaten(e, en_titel)}
    chembl_ok = False if offline else chembl_erreichbar()
    if not offline:
        print('  ChEMBL-REST %s' % ('erreichbar' if chembl_ok else 'nicht erreichbar – nehme ChEMBL-Daten über Open Targets'))
    zuordnung = zuordnen(themen, cache, offline, chembl_ok)
    cache['zuordnung'] = zuordnung
    cache['stand'] = datetime.date.today().isoformat()
    if not pruefen and not offline:
        os.makedirs(os.path.dirname(CACHE), exist_ok=True)
        with open(CACHE, 'w', encoding='utf-8') as f:
            json.dump(cache, f, ensure_ascii=False, indent=1, sort_keys=True)

    gesetzt, ohne_platz, zeilen_liste = 0, [], []
    for tid, t in sorted(themen.items()):
        z = zuordnung.get(tid) or {}
        gut = bool(z.get('zeilen'))
        for en in (False, True):
            p = os.path.join(ROOT, 'en', 'thema', t['slug']) if en else os.path.join(ROOT, 'thema', t['slug'])
            if not os.path.exists(p):
                continue
            s = open(p, encoding='utf-8').read()
            neu = BLOCK.sub('', s)
            if gut:
                mit = einsetzen(neu, kasten(z, en), en)
                if mit is None:
                    ohne_platz.append(os.path.relpath(p, ROOT))
                else:
                    neu = mit
            if neu != s:
                gesetzt += 1
                if not pruefen:
                    open(p, 'w', encoding='utf-8').write(neu)
        if gut:
            zeilen_liste.append('%s → %s' % (tid, '; '.join('%s %s (%s, UniProt %s)' % (
                WIRKART[x['wirkart']][0], x['protein'], x['gen'], x['uniprot']) for x in z['zeilen'][:MAX_ZEILEN])
                + ('  [+%d weitere]' % (len(z['zeilen']) - MAX_ZEILEN) if len(z['zeilen']) > MAX_ZEILEN else '')
                + '  · %s %s' % (z['chembl'], z.get('name') or '')))
    mehrdeutig = sorted(k for k, v in zuordnung.items() if 'mehrdeutig' in v)
    ohne_mech = sorted(k for k, v in zuordnung.items() if 'chembl' in v and not v.get('zeilen'))
    kopf = ['Zielstruktur-Zuordnungen (zielstruktur.py, Stand %s)' % cache['stand'],
            'Geprüft: %d Themen · zugeordnet: %d · Molekül gefunden, aber kein eindeutiges Einzelprotein-Ziel: %d · '
            'mehrdeutige Namen (ausgelassen): %d' % (len(themen), len(zeilen_liste), len(ohne_mech), len(mehrdeutig)),
            '', 'id → Wirkart Protein (Gen, UniProt) · ChEMBL-Molekül', '']
    nebenname = sorted(k for k, v in zuordnung.items() if 'nur_nebenname' in v)
    fuss = ['', 'Ausgelassen wegen mehrdeutiger Namen: ' + ', '.join(mehrdeutig),
            '', 'Ausgelassen, weil nur ein Nebenname (altNames) ein Molekül trifft: ' + ', '.join(nebenname),
            '', 'Molekül gefunden, aber kein eindeutiges Einzelprotein-Ziel: ' + ', '.join(ohne_mech)]
    if not pruefen:
        with open(LISTE, 'w', encoding='utf-8') as f:
            f.write('\n'.join(kopf + zeilen_liste + fuss) + '\n')
    print('zielstruktur.py: %d Themen geprüft, %d zugeordnet, %d Dateien %s%s'
          % (len(themen), len(zeilen_liste), gesetzt, 'abweichend' if pruefen else 'geschrieben',
             (', ohne passenden Platz: ' + ', '.join(ohne_platz)) if ohne_platz else ''))
    if not pruefen:
        print('  Liste: %s' % os.path.relpath(LISTE, ROOT))


if __name__ == '__main__':
    main()
