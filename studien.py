#!/usr/bin/env python3
"""Studien-Datenbank unter /studien/ (seit 01.10.2026).

Sammelt alle Quellen aus den Abschnitten „Quellen" der Themen-, Tipp-,
Vergleichs- und Frageseiten, ergänzt Studien um Originaltitel, Journal, Jahr
und Studientyp aus Europe PMC und baut daraus /studien/index.html.

  python3 studien.py            # sammeln, fehlende Metadaten nachladen, bauen
  python3 studien.py --offline  # nur aus dem Cache bauen (kein Netz)

Cache: docs/studien-meta.json (wird mit eingecheckt, damit spätere Läufe nur
neue Quellen abfragen). Nach jedem Neubau von Themen-, Tipp-, Vergleichs- oder
Frageseiten erneut ausführen.
"""
import glob, html, json, os, re, sys, time, urllib.parse, urllib.request, collections

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
CACHE = 'docs/studien-meta.json'
SITE = 'https://biohackingkompakt.de'

# ---------------------------------------------------------------- Sammeln
ART = {'thema': 'Thema', 'tipp': 'Tipp', 'vergleich': 'Vergleich', 'problem': 'Frage'}

def seitentitel(s):
    m = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
    t = re.sub(r'<[^>]+>', '', m.group(1)) if m else ''
    t = html.unescape(re.sub(r'\s+', ' ', t)).strip()
    return re.split(r'\s+[–—:|]\s+', t)[0].strip()

def kennung(url):
    """Liefert (art, wert) – pmid, pmcid, doi, nct – oder (None, None)."""
    u = urllib.parse.unquote(url.strip())
    m = re.search(r'pubmed\.ncbi\.nlm\.nih\.gov/(\d+)', u) or re.search(r'ncbi\.nlm\.nih\.gov/pubmed/(\d+)', u) \
        or re.search(r'europepmc\.org/(?:article|abstract)/MED/(\d+)', u)
    if m: return 'pmid', m.group(1)
    m = re.search(r'(PMC\d+)', u)
    if m and ('ncbi' in u or 'europepmc' in u): return 'pmcid', m.group(1)
    m = re.search(r'(NCT\d{8})', u)
    if m: return 'nct', m.group(1)
    m = re.search(r'\b(10\.\d{4,9}/[^\s?#"<>]+)', u)
    if m:
        d = m.group(1).rstrip('.').rstrip(')')
        d = re.sub(r'/(full|abstract|pdf|epdf|fulltext|meta)$', '', d, flags=re.I)
        return 'doi', d.lower()
    return None, None

def sammeln():
    quellen = collections.OrderedDict()   # url -> {text, seiten:set}
    for p in sorted(glob.glob('thema/*.html') + glob.glob('tipp/*.html') +
                    glob.glob('vergleich/*.html') + glob.glob('problem/*.html')):
        if p.endswith('index.html'): continue
        s = open(p, encoding='utf-8').read()
        if 'http-equiv="refresh"' in s: continue
        m = re.search(r'<h2>Quellen</h2>(.*?)</section>', s, re.S)
        if not m: continue
        seite = ('/' + p, ART[p.split('/')[0]], seitentitel(s))
        for li in re.findall(r'<li>(.*?)</li>', m.group(1), re.S):
            h = re.search(r'href="([^"]+)"', li)
            if not h: continue
            url = html.unescape(h.group(1)).strip()
            if not url.startswith('http'): continue
            text = html.unescape(re.sub(r'\s+', ' ', re.sub(r'<[^>]+>', ' ', li))).strip()
            e = quellen.setdefault(url, {'text': text, 'seiten': set()})
            e['seiten'].add(seite)
    return quellen

# ---------------------------------------------------------------- Europe PMC
API = 'https://www.ebi.ac.uk/europepmc/webservices/rest/search'

def abfrage(q):
    url = API + '?' + urllib.parse.urlencode({'query': q, 'resultType': 'core', 'pageSize': 1000,
                                              'format': 'json', 'synonym': 'false'})
    for versuch in range(4):
        try:
            with urllib.request.urlopen(url, timeout=60) as r:
                return json.load(r).get('resultList', {}).get('result', [])
        except Exception as ex:
            time.sleep(3 * (versuch + 1))
    print('  Abfrage fehlgeschlagen:', q[:80])
    return None

def kurz_meta(r):
    typen = [t for t in (r.get('pubTypeList') or {}).get('pubType', [])]
    mesh = [m.get('descriptorName', '') for m in (r.get('meshHeadingList') or {}).get('meshHeading', [])]
    ji = r.get('journalInfo') or {}
    return {
        'titel': (r.get('title') or '').strip(),
        'autoren': (r.get('authorString') or '').strip(),
        'journal': ((ji.get('journal') or {}).get('title') or r.get('bookOrReportDetails', {}).get('publisher') or '').strip(),
        'iso': ((ji.get('journal') or {}).get('isoabbreviation') or '').strip(),
        'jahr': str(r.get('pubYear') or ''),
        'pmid': r.get('pmid') or '', 'pmcid': r.get('pmcid') or '', 'doi': (r.get('doi') or '').lower(),
        'typen': typen, 'mesh': mesh, 'quelle': r.get('source', ''),
    }

if __name__ == '__main__' and '--nur-sammeln' in sys.argv:  # Diagnose
    q = sammeln()
    arten = collections.Counter(kennung(u)[0] for u in q)
    print(len(q), 'Quellen', dict(arten))
    sys.exit()

def metadaten_liste(grp, cache):
    gesamt = sum(len(v) for v in grp.values())
    print('offen:', {k: len(v) for k, v in grp.items()}, 'gesamt', gesamt)
    for art, liste in grp.items():
        for i in range(0, len(liste), 100 if art != 'doi' else 25):
            teil = liste[i:i + (100 if art != 'doi' else 25)]
            if art == 'pmid': res = abfrage('EXT_ID:(%s) AND SRC:MED' % ' OR '.join(teil)); key = 'pmid'
            elif art == 'pmcid': res = abfrage('PMCID:(%s)' % ' OR '.join(teil)); key = 'pmcid'
            else: res = abfrage(' OR '.join('DOI:"%s"' % x.replace('"', '') for x in teil)); key = 'doi'
            if res is None: continue
            treffer = {}
            for r in res:
                kv = (r.get(key) or '')
                kv = kv.lower() if key == 'doi' else kv
                if kv and (kv not in treffer or r.get('source') == 'MED'): treffer[kv] = r
            for x in teil:
                cache[f'{art}:{x}'] = kurz_meta(treffer[x]) if x in treffer else {}
            print('  %s %d/%d' % (art, min(i + len(teil), len(liste)), len(liste)), flush=True)
            time.sleep(0.25)
            if (i // 100) % 5 == 0:
                json.dump(cache, open(CACHE, 'w', encoding='utf-8'), ensure_ascii=False, indent=0, sort_keys=True)
    json.dump(cache, open(CACHE, 'w', encoding='utf-8'), ensure_ascii=False, indent=0, sort_keys=True)


# ---------------------------------------------------------------- Einordnen
TYPEN = [  # Schlüssel, Anzeige, Reihenfolge der Filter
    ('meta', 'Meta-Analyse / Übersicht'),
    ('rct', 'Randomisierte Studie'),
    ('klinisch', 'Klinische Studie'),
    ('beobachtung', 'Beobachtungsstudie'),
    ('fall', 'Fallbericht'),
    ('tier', 'Tier- oder Laborstudie'),
    ('review', 'Übersichtsartikel'),
    ('leitlinie', 'Leitlinie / Konsens'),
    ('register', 'Studienregister'),
    ('sonst', 'Sonstige Studie'),
]
TYPNAME = dict(TYPEN)
LABOR_MESH = {'Cells, Cultured', 'Cell Line', 'Cell Line, Tumor', 'In Vitro Techniques', 'HEK293 Cells', 'Molecular Docking Simulation'}
BEOB_MESH = {'Surveys and Questionnaires', 'Prevalence', 'Registries', 'Risk Factors', 'Incidence', 'Cohort Studies', 'Prospective Studies', 'Retrospective Studies', 'Cross-Sectional Studies',
             'Case-Control Studies', 'Longitudinal Studies', 'Follow-Up Studies'}

def studientyp(m, url):
    if 'clinicaltrials.gov' in url: return 'register'
    t = set(m.get('typen', [])); mesh = set(m.get('mesh', [])); ti = (m.get('titel') or '').lower()
    if t & {'Meta-Analysis', 'Network Meta-Analysis', 'Systematic Review', 'systematic-review'} \
            or re.search(r'meta-analy|systematic review|umbrella review', ti): return 'meta'
    if t & {'Practice Guideline', 'Guideline', 'Consensus Statement', 'Consensus Development Conference'}: return 'leitlinie'
    if t & {'Randomized Controlled Trial', 'Controlled Clinical Trial', 'Equivalence Trial', 'Pragmatic Clinical Trial'} \
            or re.search(r'randomi[sz]ed|placebo-controlled', ti): return 'rct'
    if 'Animals' in mesh and 'Humans' not in mesh: return 'tier'
    if mesh & LABOR_MESH and not any(x.startswith('Clinical Trial') for x in t): return 'tier'
    if not mesh and re.search(r'\b(mice|mouse|murine|rats?|rodents?|zebrafish|in vitro|cell lines?|cultured|porcine|canine|drosophila|c\. elegans|caenorhabditis)\b', ti): return 'tier'
    if any(x.startswith('Clinical Trial') for x in t) or re.search(r'\b(trial|pilot study|open-label)\b', ti): return 'klinisch'
    if t & {'Case Reports', 'case-report'} or re.search(r'case report|case series', ti): return 'fall'
    if 'Observational Study' in t or mesh & BEOB_MESH or re.search(r'cohort|cross-sectional|case-control|prospective (study|analysis)|observational|associat|biobank|survey|prevalence|registry|nationwide|population-based', ti): return 'beobachtung'
    if t & {'Review', 'review-article'} or re.search(r'\breview\b', ti): return 'review'
    return 'sonst'

HERAUSGEBER = [  # Domain-Teil -> Name
    ('bfr.bund.de', 'Bundesinstitut für Risikobewertung (BfR)'), ('bfarm.de', 'BfArM'),
    ('bvl.bund.de', 'Bundesamt für Verbraucherschutz (BVL)'), ('rki.de', 'Robert Koch-Institut'),
    ('gesetze-im-internet.de', 'Bundesrecht (gesetze-im-internet.de)'), ('ema.europa.eu', 'Europäische Arzneimittel-Agentur (EMA)'),
    ('efsa.europa.eu', 'Europäische Behörde für Lebensmittelsicherheit (EFSA)'), ('eur-lex.europa.eu', 'EU-Recht (EUR-Lex)'),
    ('food.ec.europa.eu', 'EU-Kommission – Lebensmittel'), ('ec.europa.eu', 'EU-Kommission'),
    ('fda.gov', 'US-Arzneimittelbehörde (FDA)'), ('ods.od.nih.gov', 'NIH Office of Dietary Supplements'),
    ('nccih.nih.gov', 'NIH – NCCIH'), ('dailymed.nlm.nih.gov', 'DailyMed (NLM)'), ('ncbi.nlm.nih.gov', 'NCBI-Nachschlagewerke (z. B. LiverTox)'),
    ('cdc.gov', 'CDC'), ('who.int', 'Weltgesundheitsorganisation (WHO)'), ('dge.de', 'Deutsche Gesellschaft für Ernährung (DGE)'),
    ('awmf.org', 'AWMF-Leitlinien'), ('g-ba.de', 'Gemeinsamer Bundesausschuss (G-BA)'), ('verbraucherzentrale.de', 'Verbraucherzentrale'),
    ('wada-ama.org', 'Welt-Anti-Doping-Agentur (WADA)'), ('nada.de', 'NADA'), ('usada.org', 'USADA'),
    ('igel-monitor.de', 'IGeL-Monitor'), ('gesund.bund.de', 'gesund.bund.de'), ('umweltbundesamt.de', 'Umweltbundesamt'),
    ('bfs.de', 'Bundesamt für Strahlenschutz'), ('fachinfo.de', 'Fachinformationen'), ('gelbe-liste.de', 'Gelbe Liste'),
    ('patents.google.com', 'Patente'), ('mskcc.org', 'Memorial Sloan Kettering (Kräuterdatenbank)'),
]

def herausgeber(url):
    dom = re.sub(r'^https?://(www\.)?', '', url).split('/')[0].lower()
    for teil, name in HERAUSGEBER:
        if dom == teil or dom.endswith('.' + teil): return name
    if dom.endswith('.gov') or dom.endswith('.bund.de'): return 'Weitere Behörden'
    return 'Weitere Quellen'

# ---------------------------------------------------------------- Bauen
def e(x): return html.escape(x or '', quote=True)

def erstautor(a):
    a = (a or '').strip().rstrip('.')
    if not a: return ''
    teile = [x.strip() for x in a.split(',') if x.strip()]
    return teile[0] + (' et al.' if len(teile) > 1 else '')

def notiz(text):
    m = re.split(r'\s+[–—-]\s+', text, maxsplit=1)
    return m[1].strip() if len(m) > 1 else ''

def bauen(q, cache):
    studien, andere = {}, collections.defaultdict(list)
    for url, d in q.items():
        k, v = kennung(url)
        m = cache.get(f'{k}:{v}') if k in ('pmid', 'pmcid', 'doi') else None
        if k in ('pmid', 'pmcid', 'doi', 'nct'):
            m = m or {}
            schl = ('pmid:' + m['pmid']) if m.get('pmid') else ('doi:' + m['doi']) if m.get('doi') else f'{k}:{v}'
            s = studien.setdefault(schl, {'url': url, 'meta': m, 'text': d['text'], 'seiten': set()})
            s['seiten'] |= d['seiten']
            if not s['meta'] and m: s['meta'] = m
        else:
            andere[herausgeber(url)].append({'url': url, 'text': d['text'], 'seiten': d['seiten']})

    def seitenlinks(seiten):
        ss = sorted(seiten, key=lambda x: (x[1] != 'Thema', x[2].lower()))
        return ' · '.join('<a href="%s">%s</a>' % (e(p), e(t)) for p, _, t in ss)

    def seiten_json(seiten):
        ss = sorted(seiten, key=lambda x: (x[1] != 'Thema', x[2].lower()))
        return [{'art': art, 'name': t, 'url': SITE + p,
                 'thema_id': p[len('/thema/'):-5] if p.startswith('/thema/') else None} for p, art, t in ss]

    json_studien = []
    zeilen, zaehl = [], collections.Counter()
    for schl, s in studien.items():
        m = s['meta']; typ = studientyp(m, s['url']); zaehl[typ] += 1
        titel = re.sub(r'<[^>]+>', '', html.unescape(m.get('titel') or '')).strip().rstrip('.') or s['text']
        jz = re.search(r'\b(?:19|20)\d{2}\b', s['text'])
        jahr = m.get('jahr') or (jz.group(0) if jz and typ != 'register' else '')
        jour = m.get('iso') or m.get('journal') or ''
        au = erstautor(m.get('autoren'))
        meta_teile = [x for x in (au, jour, jahr) if x]
        n = notiz(s['text']) if m.get('titel') else ''
        json_studien.append({'titel': titel, 'autor': au or None, 'journal': jour or None, 'jahr': int(jahr) if jahr.isdigit() else None,
                             'typ': typ, 'typ_name': TYPNAME[typ], 'url': s['url'], 'pmid': m.get('pmid') or None,
                             'doi': m.get('doi') or None, 'notiz': n or None, 'seiten': seiten_json(s['seiten'])})
        zeilen.append((jahr or '0000', titel.lower(), (
            '<li data-typ="%s"><a class="st-t" href="%s" rel="noopener">%s</a>'
            '<span class="st-m"><span class="st-b st-%s">%s</span> %s</span>%s'
            '<span class="st-bei">Bei uns: %s</span></li>') % (
                typ, e(s['url']), e(titel), typ, e(TYPNAME[typ]), e(' · '.join(meta_teile)),
                ('<span class="st-n">%s</span>' % e(n)) if n else '', seitenlinks(s['seiten']))))
    zeilen.sort(key=lambda z: (z[0], z[1]), reverse=True)
    zeilen.sort(key=lambda z: z[0], reverse=True)

    filter_html = '<button type="button" class="st-f an" data-f="">Alle <span>%d</span></button>' % len(zeilen) + ''.join(
        '<button type="button" class="st-f" data-f="%s">%s <span>%d</span></button>' % (k, e(n), zaehl[k])
        for k, n in TYPEN if zaehl[k])

    andere_html = []
    n_andere = 0
    for name in sorted(andere, key=lambda x: (x.startswith('Weitere'), x.lower())):
        eintr = sorted(andere[name], key=lambda x: x['text'].lower())
        n_andere += len(eintr)
        andere_html.append('<h3>%s <span class="st-z">(%d)</span></h3>\n<ul class="st-liste">%s</ul>' % (e(name), len(eintr), ''.join(
            '<li><a class="st-t" href="%s" rel="noopener">%s</a><span class="st-bei">Bei uns: %s</span></li>' % (
                e(x['url']), e(x['text']), seitenlinks(x['seiten']))
            for x in eintr)))

    n_seiten = len({p for d in q.values() for p, _, _ in d['seiten']})
    titel = 'Studien-Datenbank – alle Quellen hinter dem Faktencheck | Biohacking Kompakt'
    beschr = ('%d Studien und %d Behörden- und Rechtsquellen, auf die sich die Faktenchecks von Biohacking Kompakt stützen – '
              'mit Studientyp, Jahr und den Themen, auf denen sie verwendet werden.') % (len(zeilen), n_andere)
    url = SITE + '/studien/'
    graph = [{"@type": "CollectionPage", "@id": url + "#seite", "name": "Studien-Datenbank", "url": url, "inLanguage": "de",
              "description": beschr, "isPartOf": {"@id": SITE + "/#website"}},
             {"@type": "BreadcrumbList", "itemListElement": [
                 {"@type": "ListItem", "position": 1, "name": "Startseite", "item": SITE + "/"},
                 {"@type": "ListItem", "position": 2, "name": "Glossar", "item": SITE + "/glossar/"},
                 {"@type": "ListItem", "position": 3, "name": "Studien-Datenbank"}]}]
    stand = time.strftime('%d.%m.%Y')
    seite = f'''<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(titel)}</title>
<meta name="description" content="{e(beschr)}">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:title" content="{e(titel)}">
<meta property="og:description" content="{e(beschr)}">
<meta property="og:url" content="{url}">
<meta property="og:site_name" content="Biohacking Kompakt">
<meta name="theme-color" content="#2f8b6a">
<link rel="icon" type="image/svg+xml" href="/icons/icon.svg">
<link rel="stylesheet" href="/css/thema.css?v=3">
<script type="application/ld+json">{json.dumps({"@context": "https://schema.org", "@graph": graph}, ensure_ascii=False, separators=(',', ':'))}</script>
<style>
.st-such{{width:100%;padding:12px 14px;font:inherit;border:1px solid var(--rand);border-radius:10px;background:var(--flaeche);margin:6px 0 10px}}
.st-filter{{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 6px}}
.st-f{{font:inherit;font-size:.85rem;padding:5px 11px;border:1px solid var(--rand);border-radius:999px;background:var(--flaeche);color:var(--gedaempft);cursor:pointer}}
.st-f span{{color:var(--dim)}} .st-f.an{{background:var(--akzent-soft);color:var(--text);border-color:var(--akzent)}}
.st-info{{font-size:.85rem;color:var(--dim);margin:4px 0 14px}}
.st-liste{{list-style:none;padding:0;margin:0}}
.st-liste li[hidden]{{display:none}}
.st-liste li{{padding:12px 0;border-bottom:1px solid var(--rand);display:flex;flex-direction:column;gap:3px}}
.st-t{{font-weight:600;color:var(--text);text-decoration:none;line-height:1.4}} .st-t:hover{{color:var(--akzent)}}
.st-m{{font-size:.85rem;color:var(--gedaempft)}} .st-n{{font-size:.85rem;color:var(--gedaempft);font-style:italic}}
.st-bei{{font-size:.85rem;color:var(--dim)}} .st-bei a{{color:var(--akzent-2)}}
.st-b{{display:inline-block;font-size:.72rem;font-weight:600;padding:1px 8px;border-radius:999px;background:var(--bg-alt);color:var(--gedaempft);margin-right:4px}}
.st-meta,.st-rct{{background:var(--akzent-soft);color:#1f5c46}} .st-tier{{background:#f3ece0;color:#7a5a2a}}
.st-z{{color:var(--dim);font-weight:400}}
.st-mehr{{font:inherit;margin:14px 0;padding:9px 16px;border-radius:10px;border:1px solid var(--akzent);background:var(--flaeche);color:var(--akzent);cursor:pointer}}
</style>
</head>
<body>
<header class="kopf">
  <a class="marke" href="/">Biohacking&nbsp;Kompakt</a>
  <nav><a href="/thema/">Alle Themen</a> <a href="/glossar/">Glossar</a> <a href="/studien/">Studien</a> <a href="/vergleich/">Vergleiche</a> <a href="/#aenderungen">Änderungen</a></nav>
</header>
<main>
  <article>
    <p class="typ"><a href="/glossar/">Glossar</a> · Studien-Datenbank</p>
    <h1>Studien-Datenbank: alle Quellen hinter dem Faktencheck</h1>
    <p class="lead">Hier stehen alle {len(zeilen)} Studien, auf die sich unsere {n_seiten} Themen-, Tipp-, Vergleichs- und Frageseiten stützen – mit Originaltitel, Jahr, Studientyp und den Seiten, auf denen wir sie verwenden. Darunter folgen {n_andere} Quellen von Behörden, aus dem Recht und von Fachgesellschaften.</p>
    <p class="cl-text">Der Studientyp kommt aus den Angaben der Datenbanken PubMed und Europe PMC und ist eine Orientierung, keine Qualitätsnote. Eine große randomisierte Studie trägt mehr als eine kleine, eine Tierstudie sagt noch nichts über den Menschen. Was das für ein Thema heißt, steht auf der jeweiligen Seite und im <a href="/methodik.html">BK-Score</a>.</p>

    <section>
      <h2>Studien <span class="st-z">({len(zeilen)})</span></h2>
      <input class="st-such" type="search" placeholder="Suchen: Wirkstoff, Titel, Autor, Journal …" aria-label="Studien durchsuchen">
      <div class="st-filter" role="group" aria-label="Nach Studientyp filtern">{filter_html}</div>
      <p class="st-info" aria-live="polite"></p>
      <ul class="st-liste" id="st-studien">
{chr(10).join(z[2] for z in zeilen)}
      </ul>
      <button type="button" class="st-mehr" hidden>Mehr anzeigen</button>
    </section>

    <section id="behoerden">
      <h2>Behörden, Recht und weitere Quellen <span class="st-z">({n_andere})</span></h2>
      <p class="cl-text">Stellungnahmen, Zulassungen, Gesetze und Nachschlagewerke – sortiert nach Herausgeber.</p>
      {chr(10).join(andere_html)}
    </section>

    <p class="disc">Stand: {stand}. Die Liste entsteht automatisch aus den Quellenangaben unserer Seiten. Fehlt eine Studie oder ist ein Typ falsch eingeordnet? Schreib an <a href="mailto:kontakt@biohackingkompakt.de">kontakt@biohackingkompakt.de</a>.</p>
  </article>
</main>
<footer class="fuss">
  <a href="/">Startseite</a> · <a href="/thema/">Alle Themen</a> · <a href="/problem/">Fragen &amp; Beschwerden</a> · <a href="/folge/">Podcast-Folgen</a> · <a href="/glossar/">Glossar</a> · <a href="/ueber-uns.html">Über uns</a> · <a href="/methodik.html">Methodik</a> · <a href="/impressum.html">Impressum</a> · <a href="/datenschutz.html">Datenschutz</a>
</footer>
<script>
(function(){{
  var such=document.querySelector('.st-such'), info=document.querySelector('.st-info'),
      liste=[].slice.call(document.querySelectorAll('#st-studien li')).map(function(li){{li._s=li.textContent.toLowerCase();return li}}), mehr=document.querySelector('.st-mehr'),
      knoepfe=[].slice.call(document.querySelectorAll('.st-f')), typ='', grenze=60;
  function zeigen(){{
    var w=(such.value||'').toLowerCase().trim().split(/\\s+/).filter(Boolean), n=0, sichtbar=0;
    liste.forEach(function(li){{
      var ok=(!typ||li.dataset.typ===typ)&&w.every(function(x){{return li._s.indexOf(x)>-1}});
      if(ok)n++; var an=ok&&n<=grenze; li.hidden=!an; if(an)sichtbar++;
    }});
    info.textContent=n+(n===1?' Studie':' Studien')+(n>sichtbar?', die ersten '+sichtbar+' angezeigt':'');
    mehr.hidden=n<=sichtbar;
  }}
  such.addEventListener('input',function(){{grenze=60;zeigen()}});
  knoepfe.forEach(function(b){{b.addEventListener('click',function(){{
    knoepfe.forEach(function(x){{x.classList.remove('an')}}); b.classList.add('an'); typ=b.dataset.f; grenze=60; zeigen();
  }})}});
  mehr.addEventListener('click',function(){{grenze+=200;zeigen()}});
  var q=new URLSearchParams(location.search).get('q'); if(q)such.value=q;
  zeigen();
}})();
</script>
</body>
</html>
'''
    os.makedirs('studien', exist_ok=True)
    open('studien/index.html', 'w', encoding='utf-8').write(seite)
    json_studien.sort(key=lambda x: (-(x['jahr'] or 0), x['titel'].lower()))
    json_weitere = [{'herausgeber': name, 'text': x['text'], 'url': x['url'], 'seiten': seiten_json(x['seiten'])}
                    for name in sorted(andere) for x in sorted(andere[name], key=lambda x: x['text'].lower())]
    daten = {'stand': time.strftime('%Y-%m-%d'), 'quelle': SITE + '/studien/',
             'hinweis': 'Studientyp aus PubMed/Europe PMC abgeleitet - Orientierung, keine Qualitaetsnote.',
             'typen': {k: n for k, n in TYPEN}, 'studien': json_studien, 'weitere': json_weitere}
    json.dump(daten, open('studien/studien.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    # Klartext je Seite - fuer Sprach-Assistenten (ElevenLabs-Wissensdatenbank, Auto-Sync) und Sprachmodelle
    rang = {k: i for i, (k, _) in enumerate(TYPEN)}
    je_seite = collections.defaultdict(lambda: {'name': '', 'art': '', 'studien': [], 'weitere': []})
    for st in json_studien:
        for sz in st['seiten']:
            ei = je_seite[sz['url']]; ei['name'], ei['art'] = sz['name'], sz['art']; ei['studien'].append(st)
    for w in json_weitere:
        for sz in w['seiten']:
            ei = je_seite[sz['url']]; ei['name'], ei['art'] = sz['name'], sz['art']; ei['weitere'].append(w)
    zt = ['# Studien-Datenbank von Biohacking Kompakt', '',
          'Stand: %s. Alle Studien und Behördenquellen, auf die sich die Seiten von biohackingkompakt.de stützen, '
          'geordnet nach Thema. Der Studientyp kommt aus PubMed bzw. Europe PMC und ist eine Orientierung, keine '
          'Qualitätsnote: Eine Tierstudie sagt nichts über den Menschen. Die Bewertung eines Themas steht auf der '
          'jeweiligen Themenseite (BK-Score). Durchsuchbar unter %s/studien/' % (stand, SITE), '']
    for url, ei in sorted(je_seite.items(), key=lambda x: (x[1]['art'] != 'Thema', x[1]['name'].lower())):
        zt.append('## %s: %s (%s)' % (ei['art'], ei['name'], url))
        if ei['studien']:
            n = collections.Counter(TYPNAME[x['typ']] for x in ei['studien'])
            zt.append('%d Studien: %s.' % (len(ei['studien']), ', '.join('%d %s' % (v, k) for k, v in n.most_common())))
        for st in sorted(ei['studien'], key=lambda x: (rang[x['typ']], -(x['jahr'] or 0))):
            kopf = ', '.join(str(x) for x in (st['typ_name'], st['jahr']) if x)
            wer = ', '.join(x for x in (st['autor'], st['journal']) if x)
            zt.append('- %s: %s%s. %s' % (kopf, st['titel'], (' (%s)' % wer) if wer else '', st['url']))
        for w in ei['weitere']:
            zt.append('- Behörde/Recht (%s): %s. %s' % (w['herausgeber'], w['text'], w['url']))
        zt.append('')
    open('studien/studien.txt', 'w', encoding='utf-8').write('\n'.join(zt))
    print('studien/index.html: %d Studien, %d weitere Quellen, %d KB' % (len(zeilen), n_andere, len(seite.encode()) // 1024))
    print('Typen:', {TYPNAME[k]: zaehl[k] for k, _ in TYPEN})

# ---------------------------------------------------------------- Verlinken
S_START, S_ENDE = '<!-- studien:start -->', '<!-- studien:end -->'
NAV_LINK = '<a href="/studien/">Studien</a>'

def verlinken():
    """Menüpunkt „Studien" in allen deutschen Seiten mit Kopfzeile und je Quellen-Abschnitt
    ein Link in die Studien-Datenbank, vorgefiltert auf das Thema. Idempotent."""
    n_nav = n_q = 0
    for p in sorted(glob.glob('thema/*.html') + glob.glob('tipp/*.html') + glob.glob('vergleich/*.html') +
                    glob.glob('problem/*.html') + glob.glob('glossar/*.html') + glob.glob('folge/*.html') +
                    ['methodik.html', 'ueber-uns.html']):
        if not os.path.exists(p): continue
        alt = s = open(p, encoding='utf-8').read()
        m = re.search(r'<nav>(.*?)</nav>', s, re.S)
        if m and NAV_LINK not in m.group(1):
            nav = m.group(1)
            if '<a href="/glossar/">Glossar</a>' in nav:
                nav = nav.replace('<a href="/glossar/">Glossar</a>', '<a href="/glossar/">Glossar</a> ' + NAV_LINK, 1)
            elif '<a href="/thema/">Alle Themen</a>' in nav:
                nav = nav.replace('<a href="/thema/">Alle Themen</a>', '<a href="/thema/">Alle Themen</a> ' + NAV_LINK, 1)
            else:
                nav = nav.replace('</a>', '</a> ' + NAV_LINK, 1)
            s = s[:m.start(1)] + nav + s[m.end(1):]
            n_nav += 1
        s = re.sub(r'\n?[ \t]*%s.*?%s' % (re.escape(S_START), re.escape(S_ENDE)), '', s, flags=re.S)
        q = re.search(r'<h2>Quellen</h2>.*?(</ul>)', s, re.S)
        if q and not p.startswith(('glossar/', 'folge/')) and not p.endswith('index.html'):
            such = urllib.parse.quote(seitentitel(s))
            block = ('\n      %s<p class="quellen-db" style="font-size:.9rem;margin-top:12px"><a href="/studien/?q=%s">Diese Studien mit Studientyp und Jahr in der Studien-Datenbank '
                     'ansehen</a></p>%s' % (S_START, such, S_ENDE))
            s = s[:q.end(1)] + block + s[q.end(1):]
        if s != alt:
            open(p, 'w', encoding='utf-8').write(s); n_q += 1
    print('verlinken: Menüpunkt in %d Seiten neu, %d Seiten geändert' % (n_nav, n_q))

if __name__ == '__main__':
    q = sammeln()
    cache = json.load(open(CACHE, encoding='utf-8')) if os.path.exists(CACHE) else {}
    if '--offline' not in sys.argv:
        grp = collections.defaultdict(list)
        for u in q:
            k, v = kennung(u)
            if k in ('pmid', 'pmcid', 'doi') and f'{k}:{v}' not in cache and v not in grp[k]: grp[k].append(v)
        if grp: metadaten_liste(grp, cache)
    bauen(q, cache)
    verlinken()
