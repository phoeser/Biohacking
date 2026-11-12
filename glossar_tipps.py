#!/usr/bin/env python3
"""Glossar-Erklärung beim Darüberfahren (und beim Antippen/Fokus) auf Themen-, Tipp- und Vergleichsseiten.

Datenquelle sind die Glossarseiten selbst: glossar/*.html (DE) und en/glossar/*.html (EN).
Begriff = <h1>, Erklärung = der Kasten „Kurz gesagt"/„In short" (<div class="def">), auf
höchstens 160 Zeichen gekürzt (ganze Sätze, sonst am Wortende mit „…").
Welche Wortformen im Text als Begriff gelten, steht in FORMEN (Schlüssel = Dateiname der
Glossarseite). Neuer Glossareintrag: Seite anlegen, hier die Wortformen eintragen, Skript laufen lassen.

Markiert wird je Seite pro Begriff nur das ERSTE Vorkommen im Fließtext (<p>/<li> im <article>),
nicht in Überschriften, Links, Tabellen, JSON-LD, Quellen, BK-Score-Kasten, „Ähnliche Themen",
Hinweiszeilen und den automatisch gesetzten Kästen. Höchstens MAX_JE_SEITE Begriffe je Seite.
  <span class="gl" tabindex="0" role="term" aria-label="Begriff: Erklärung" data-g="Erklärung">Wort</span>
Idempotent: Vorhandene gl-Spans werden vorher entfernt. CSS-Tooltip in css/thema.css (.gl).

Aufruf im Repo: python3 glossar_tipps.py   (--pruefen = nur zählen, schreibt nichts)
Seit 12.11.2026 (Stufe 1 des Themenseiten-Entwurfs).
"""
import glob, html, os, re, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
MAX_JE_SEITE = 8
# Sehr häufige Begriffe nehmen höchstens MAX_HAEUFIG Plätze je Seite ein, damit seltenere Begriffe nicht verdrängt werden
HAEUFIG = {'placebo', 'randomisierte-kontrollierte-studie', 'meta-analyse', 'doppelblind', 'systematischer-review', 'wada-liste', 'peptid', 'studienphasen'}
MAX_HAEUFIG = 2
MAX_ZEICHEN = 160
ORDNER = {'de': ['thema', 'tipp', 'vergleich'], 'en': ['en/thema', 'en/tipp', 'en/vergleich']}
GLOSSAR = {'de': 'glossar', 'en': 'en/glossar'}

# Wortformen je Glossarseite. Bewusst eng: lieber ein Vorkommen verpassen als falsch erklären.
FORMEN = {
    'de': {
        'primaerer-endpunkt': r'\b(?:[Pp]rimäre[nrms]? Endpunkte?[ns]?|[Pp]rimärendpunkte?[ns]?|Hauptendpunkte?[ns]?)\b',
        'surrogatmarker': r'\bSurrogat(?:-?[Mm]arker[ns]?|endpunkte?[ns]?|parameter[ns]?)\b',
        'relative-und-absolute-risikoreduktion':
            r'\b(?:[Rr]elative[nrms]?|[Aa]bsolute[nrms]?) (?:Risikoreduktion|Risikosenkung|Risikos?|Senkung|Reduktion)\b',
        'graumarkt': r'\bGraumarkt(?:e?s|ware|anbieter[n]?|händler[n]?|produkte?n?)?\b',
        'viszerales-fett': r'\b(?:[Vv]iszerale[nrms]? (?:Bauch)?[Ff]ett(?:e?s)?|Viszeralfett(?:e?s)?)\b',
        # seit 12.11.2026 (Glossar-Ausbau)
        'bk-score': r'\bBK-Scores?\b',
        'randomisierte-kontrollierte-studie':
            r'\b(?:[Rr]andomisiert(?:e[nrms]?)?(?:,? (?:kontrolliert|placebokontrolliert|doppelblind|doppelt verblindet|verblindet)(?:e[nrms]?)?)*'
            r' (?:Studien?|Vergleichsstudien?|Doppelblindstudien?|Interventionsstudien?)|RCTs?)\b',
        'placebo': r'\b(?:Placebos?|[Pp]lacebokontrolliert(?:e[nrms]?)?)\b',
        'nocebo': r'\bNocebo(?:-?[Ee]ffekte?s?)?\b',
        'doppelblind': r'\b(?:[Dd]oppelblind(?:e[nrms]?)?|Doppelblindstudien?|[Dd]oppelt verblindet(?:e[nrms]?)?)\b',
        'meta-analyse': r'\b(?:Netzwerk-)?Meta-?[Aa]nalysen?\b',
        'systematischer-review':
            r'\b(?:[Ss]ystematische[nrms]? (?:Reviews?|Übersicht(?:en)?|Übersichtsarbeit(?:en)?|Literaturübersicht(?:en)?)|Cochrane-Reviews?)\b',
        'beobachtungsstudie': r'\b(?:Beobachtungsstudien?|Beobachtungsdaten|Beobachtungskohorten?)\b',
        'kohortenstudie': r'\b(?:Kohortenstudien?|Kohortendaten)\b',
        'fallbericht-fallserie': r'\b(?:Fallbericht(?:e[ns]?)?|Fallserien?|Kasuistiken?)\b',
        'mendelsche-randomisierung': r'\b(?:[Mm]endelsche[nr]? Randomisierung(?:en)?|Mendel-Randomisierung(?:en)?)\b',
        'konfidenzintervall': r'\b(?:Konfidenzintervall(?:e[ns]?|s)?|Vertrauensbereich(?:e[ns]?|s)?)\b',
        'hazard-ratio': r'\bHazard[- ][Rr]atios?\b',
        'statistische-signifikanz':
            r'\b(?:[Ss]tatistisch(?:e[nrms]?)? (?:[Ss]ignifikan(?:te[nrms]?|t|z))|p-Werte?s?n?|Signifikanzgrenze|Signifikanzniveaus?)\b',
        'effektstaerke': r'\b(?:Effektstärken?|Effektgrößen?|[Ss]tandardisierte[nr]? Mittelwertdifferenz(?:en)?)\b',
        'number-needed-to-treat': r'\b(?:Number[- ]Needed[- ]to[- ]Treat|NNT)\b',
        # „Phase“ nur als Studienphase mit Zahl und folgendem Studienwort, nie Entgiftungs- oder Zyklusphasen
        'studienphasen':
            r'\b(?:Phase[- ](?:I{1,3}|[1-3])[ab]?(?:/(?:I{1,3}|[1-3])[ab]?)?[- ](?:Studien?|Prüfung(?:en)?|Daten|Programms?)'
            r'|klinische[nr]? Phase (?:I{1,3}|[1-3])[ab]?|Studienphasen?)\b',
        'zulassung': r'\b(?:Arzneimittelzulassung(?:en)?|(?:EU|EMA|FDA)-Zulassung(?:en)?|Marktzulassung(?:en)?)\b',
        'off-label': r'\b[Oo]ff[- ][Ll]abel(?:-(?:Use|Einsatz|Anwendung(?:en)?|Gebrauch|Nutzung|Verordnung(?:en)?))?\b',
        'rezeptur': r'\b(?:Rezepturarznei(?:mittel[ns]?|en)?|Apothekenrezeptur(?:en)?|Compounding(?:-Apotheken?)?)\b',
        'novel-food': r'\b(?:Novel[- ]Foods?|[Nn]euartige[ns]? Lebensmittels?)\b',
        'health-claim': r'\b(?:Health[- ]Claims?|[Gg]esundheitsbezogene[nr]? Angaben?)\b',
        'halbwertszeit': r'\b(?:Halbwertszeit(?:en)?|Plasmahalbwertszeit(?:en)?|Eliminationshalbwertszeit(?:en)?)\b',
        'bioverfuegbarkeit': r'\b(?:Bioverfügbarkeit(?:en)?|[Bb]ioverfügbar(?:e[nrms]?)?)\b',
        'agonist-antagonist':
            r'\b(?:Rezeptor-?)?(?:[Aa]gonist|[Aa]ntagonist|Partialagonist|Teilagonist)(?:en)?\b',
        # nur das eigenständige Wort, nicht Kupferpeptid, C-Peptid, Peptidhormon, Peptid-Stacks
        'peptid': r'(?<![\w-])Peptide?n?\b(?!-)',
        'sarm': r'\b(?:SARMs?|[Ss]elektive[nr]? Androgenrezeptor-Modulatore?n?)\b',
        'hormesis': r'\b(?:Hormesis|[Hh]ormetisch(?:e[nrms]?)?)\b',
        'autophagie': r'\bAutophagie\b',
        'mitochondrien': r'\b(?:Mitochondrien|Mitochondrium|[Mm]itochondriale[nrms]?)\b',
        'biomarker': r'\bBiomarkern?\b',
        'epigenetische-uhr':
            r'\b(?:[Ee]pigenetische[nr]? (?:Alters)?[Uu]hr(?:en)?|[Ee]pigenetische[ns]? Alter[s]?|Methylierungsuhr(?:en)?)\b',
        'hba1c': r'\b(?:HbA1c|Langzeitblutzucker(?:wert(?:e[ns]?|s)?)?)\b',
        'ldl-und-apob': r'\b(?:LDL-Cholesterin[s]?|LDL-C|LDL|ApoB|Apolipoprotein B)\b',
        'wada-liste': r'\b(?:WADA(?:-Verbotsliste|-Liste)?|Verbotsliste der WADA)\b',
        'hwg-3a': r'(?:§\s?3a HWG|\bHeilmittelwerbegesetz(?:es)?\b|\bHWG\b)',
    },
    'en': {
        'primaerer-endpunkt': r'\b[Pp]rimary (?:endpoints?|outcomes?)\b',
        'surrogatmarker': r'\b[Ss]urrogate (?:markers?|endpoints?)\b',
        'relative-und-absolute-risikoreduktion': r'\b(?:[Rr]elative|[Aa]bsolute) risk(?: reductions?)?\b',
        'graumarkt': r'\b[Gg]r[ae]y[- ]market\b',
        'viszerales-fett': r'\b[Vv]isceral (?:belly )?fat\b',
        # since 12.11.2026 (glossary expansion)
        'bk-score': r'\bBK[- ]Scores?\b',
        'randomisierte-kontrollierte-studie':
            r'\b(?:[Rr]andomi[sz]ed(?:,? (?:controlled|placebo-controlled|double-blind(?:ed)?|blinded))* (?:trials?|stud(?:y|ies))|RCTs?)\b',
        'placebo': r'\b(?:[Pp]lacebos?|[Pp]lacebo-controlled)\b',
        'nocebo': r'\b[Nn]ocebo(?: effects?)?\b',
        'doppelblind': r'\b[Dd]ouble[- ]blind(?:ed)?\b',
        'meta-analyse': r'\b(?:[Nn]etwork )?[Mm]eta-?analys[ie]s\b',
        'systematischer-review': r'\b(?:[Ss]ystematic (?:reviews?|overviews?)|Cochrane reviews?)\b',
        'beobachtungsstudie': r'\b[Oo]bservational (?:stud(?:y|ies)|data|cohorts?|research)\b',
        'kohortenstudie': r'\b(?:[Cc]ohort stud(?:y|ies)|[Pp]rospective cohorts?)\b',
        'fallbericht-fallserie': r'\b[Cc]ase (?:reports?|series)\b',
        'mendelsche-randomisierung': r'\b[Mm]endelian [Rr]andomi[sz]ation\b',
        'konfidenzintervall': r'\b[Cc]onfidence intervals?\b',
        'hazard-ratio': r'\b[Hh]azard ratios?\b',
        'statistische-signifikanz': r'\b(?:[Ss]tatistical(?:ly)? significan(?:ce|t)|[Pp][- ]values?)\b',
        'effektstaerke': r'\b(?:[Ee]ffect sizes?|[Ss]tandardi[sz]ed mean differences?)\b',
        'number-needed-to-treat': r'\b(?:[Nn]umber[- ]needed[- ]to[- ]treat|NNT)\b',
        # "phase" only as a numbered trial phase followed by a study word
        'studienphasen':
            r'\b(?:[Pp]hase[- ](?:I{1,3}|[1-3])[ab]?(?:/(?:I{1,3}|[1-3])[ab]?)?[- ](?:trials?|stud(?:y|ies)|data|programmes?|programs?)'
            r'|[Cc]linical trial phases?)\b',
        'zulassung': r'\b(?:[Mm]arketing authori[sz]ations?|(?:EU|EMA|FDA) approvals?|[Dd]rug approvals?)\b',
        'off-label': r'\b[Oo]ff[- ]label\b',
        'rezeptur': r'\b(?:[Cc]ompounded (?:medicines?|drugs?|preparations?|products?)|[Cc]ompounding(?: pharmac(?:y|ies))?)\b',
        'novel-food': r'\b[Nn]ovel[- ]foods?\b',
        'health-claim': r'\b[Hh]ealth claims?\b',
        'halbwertszeit': r'\b(?:[Pp]lasma |[Ee]limination )?[Hh]alf[- ]li(?:fe|ves)\b',
        'bioverfuegbarkeit': r'\b[Bb]ioavailab(?:ility|le)\b',
        'agonist-antagonist': r'\b(?:[Rr]eceptor )?(?:[Pp]artial )?(?:[Aa]gonists?|[Aa]ntagonists?)\b',
        'peptid': r'(?<![\w-])[Pp]eptides?\b(?!-)',
        'sarm': r'\b(?:SARMs?|[Ss]elective androgen receptor modulators?)\b',
        'hormesis': r'\b(?:[Hh]ormesis|[Hh]ormetic)\b',
        'autophagie': r'\b[Aa]utophagy\b',
        'mitochondrien': r'\b[Mm]itochondri(?:a|on|al)\b',
        'biomarker': r'\b[Bb]iomarkers?\b',
        'epigenetische-uhr': r'\b(?:[Ee]pigenetic (?:age(?:ing)? )?clocks?|[Ee]pigenetic age|[Mm]ethylation clocks?)\b',
        'hba1c': r'\b(?:HbA1c|A1C)\b',
        'ldl-und-apob': r'\b(?:LDL cholesterol|LDL-C|LDL|ApoB|[Aa]polipoprotein B)\b',
        'wada-liste': r'\b(?:WADA(?: [Pp]rohibited [Ll]ist| list)?|[Pp]rohibited [Ll]ist)\b',
        'hwg-3a': r'(?:§\s?3a HWG|\bHWG\b|\bMedicinal Products Advertising Act\b)',
    },
}

ALT_SPAN = re.compile(r'<span class="gl" [^>]*>(.*?)</span>', re.S)
TOKEN = re.compile(r'<!--.*?-->|<[^>]+>|[^<]+', re.S)
LEER = {'br', 'img', 'hr', 'input', 'meta', 'link', 'wbr', 'source', 'col', 'area'}
# Elemente, in denen nie markiert wird
TABU_TAGS = {'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'a', 'table', 'caption', 'summary', 'script', 'style',
             'code', 'button', 'form', 'nav', 'label', 'figcaption', 'span'}
TABU_KLASSEN = {'sc', 'vw', 'ziel', 'nl-box', 'typ', 'unter', 'disc', 'disc-score', 'app', 'sc-hinweis',
                'mehr', 'sk', 'quellen-db', 'q', 'pod-seite', 'konten', 'stand'}
# Bereiche zwischen diesen Markierungen bleiben unberührt
TABU_BLOECKE = re.compile(r'<!-- (seitenkopf|ziel|studien|verwandt|ziele|newsletter|anwender|kapitel):start -->'
                          r'.*?<!-- \1:end -->', re.S)
QUELLEN = re.compile(r'<section[^>]*>\s*<h2[^>]*>\s*(?:Quellen|Sources)\s*</h2>.*?</section>', re.S)


def kuerzen(t):
    t = re.sub(r'\s+', ' ', t).strip()
    saetze = re.split(r'(?<=[.!?…])\s+(?=[A-ZÄÖÜ„"])', t)
    raus = ''
    for s in saetze:
        kandidat = (raus + ' ' + s).strip()
        if len(kandidat) > MAX_ZEICHEN:
            break
        raus = kandidat
    if not raus:
        raus = t[:MAX_ZEICHEN - 1].rsplit(' ', 1)[0].rstrip(',;:—– ') + '…'
    return raus


def glossar_laden(sprache):
    eintraege = []
    for p in sorted(glob.glob(os.path.join(ROOT, GLOSSAR[sprache], '*.html'))):
        slug = os.path.basename(p)[:-5]
        if slug == 'index' or slug not in FORMEN[sprache]:
            continue
        s = open(p, encoding='utf-8').read()
        h1 = re.search(r'<h1[^>]*>(.*?)</h1>', s, re.S)
        d = re.search(r'<div class="def">.*?<p class="def-label">[^<]*</p>\s*<p>(.*?)</p>', s, re.S)
        if not (h1 and d):
            print('  Warnung: Glossarseite ohne Begriff/Kurzdefinition:', p)
            continue
        text = html.unescape(re.sub(r'<[^>]+>', '', d.group(1)))
        eintraege.append({'slug': slug, 'begriff': html.unescape(re.sub(r'<[^>]+>', '', h1.group(1))).strip(),
                          'def': kuerzen(text), 'muster': re.compile(FORMEN[sprache][slug])})
    fehlend = set(FORMEN[sprache]) - {e['slug'] for e in eintraege}
    if fehlend:
        print('  Warnung (%s): Wortformen ohne Glossarseite: %s' % (sprache, ', '.join(sorted(fehlend))))
    return eintraege


def tabu_bereiche(s):
    return [(m.start(), m.end()) for r in (TABU_BLOECKE, QUELLEN) for m in r.finditer(s)]


def markiere(article, eintraege):
    """Gibt (neuer_article, [slugs]) zurück."""
    bereiche = tabu_bereiche(article)
    stapel = []  # (tag, tabu)
    # Begriffe, die auf der Seite schon als Link aufs Glossar stehen, brauchen keine zweite Erklärung
    erledigt = {e['slug'] for e in eintraege if re.search(r'href="(?:/en)?/glossar/%s\.html"' % re.escape(e['slug']), article)}
    treffer = []
    teile = []
    for m in TOKEN.finditer(article):
        tok = m.group(0)
        if tok.startswith('<!--'):
            teile.append(tok)
            continue
        if tok.startswith('</'):
            name = tok[2:].split('>')[0].strip().lower()
            # bis zum passenden Tag abbauen (verzeiht fehlende Schließ-Tags)
            for i in range(len(stapel) - 1, -1, -1):
                if stapel[i][0] == name:
                    del stapel[i:]
                    break
            teile.append(tok)
            continue
        if tok.startswith('<'):
            mm = re.match(r'<\s*([a-zA-Z0-9]+)', tok)
            if mm:
                name = mm.group(1).lower()
                if name not in LEER and not tok.endswith('/>'):
                    kl = re.search(r'\bclass="([^"]*)"', tok)
                    klassen = set(kl.group(1).split()) if kl else set()
                    tabu = name in TABU_TAGS or bool(klassen & TABU_KLASSEN)
                    stapel.append((name, tabu))
            teile.append(tok)
            continue
        # Textknoten
        if (len(treffer) >= MAX_JE_SEITE or any(t for _, t in stapel)
                or not any(n in ('p', 'li') for n, _ in stapel)
                or any(a <= m.start() < b for a, b in bereiche)):
            teile.append(tok)
            continue
        # Frühestes Vorkommen eines noch offenen Begriffs suchen, ersetzen, weitersuchen
        text, pos, raus = tok, 0, []
        while len(treffer) < MAX_JE_SEITE:
            best = None
            for e in eintraege:
                if e['slug'] in erledigt:
                    continue
                if e['slug'] in HAEUFIG and sum(1 for s in treffer if s in HAEUFIG) >= MAX_HAEUFIG:
                    continue
                f = e['muster'].search(text, pos)
                if f and (best is None or f.start() < best[1].start()):
                    best = (e, f)
            if not best:
                break
            e, f = best
            d = html.escape(e['def'], quote=True)
            label = html.escape('%s: %s' % (e['begriff'], e['def']), quote=True)
            raus.append(text[pos:f.start()])
            raus.append('<span class="gl" tabindex="0" role="term" aria-label="%s" data-g="%s">%s</span>'
                        % (label, d, f.group(0)))
            pos = f.end()
            erledigt.add(e['slug'])
            treffer.append(e['slug'])
        raus.append(text[pos:])
        teile.append(''.join(raus))
    return ''.join(teile), treffer


def main():
    pruefen = '--pruefen' in sys.argv
    gesamt = {}
    for sprache in ('de', 'en'):
        eintraege = glossar_laden(sprache)
        neu = gleich = mit = 0
        zahl = {}
        for o in ORDNER[sprache]:
            for p in sorted(glob.glob(os.path.join(ROOT, o, '*.html'))):
                if os.path.basename(p) == 'index.html':
                    continue
                s = open(p, encoding='utf-8').read()
                z = ALT_SPAN.sub(r'\1', s)
                a = re.search(r'<article\b.*?</article>', z, re.S)
                if a and eintraege and not re.search(r'http-equiv="refresh"', z, re.I):
                    art, tr = markiere(a.group(0), eintraege)
                    z = z[:a.start()] + art + z[a.end():]
                    if tr:
                        mit += 1
                        for t in tr:
                            zahl[t] = zahl.get(t, 0) + 1
                if z == s:
                    gleich += 1
                    continue
                neu += 1
                if not pruefen:
                    open(p, 'w', encoding='utf-8').write(z)
        gesamt[sprache] = mit
        print('glossar_tipps.py [%s]: %d Begriffe, %d Seiten mit Erklärung, %d %s, %d unverändert'
              % (sprache, len(eintraege), mit, neu, 'abweichend' if pruefen else 'geschrieben', gleich))
        for t, n in sorted(zahl.items(), key=lambda x: -x[1]):
            print('    %-40s %d Seiten' % (t, n))


if __name__ == '__main__':
    main()
