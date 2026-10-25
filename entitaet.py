#!/usr/bin/env python3
"""Marke und Autor als zusammenhängende Entität auszeichnen (idempotent, seit 25.10.2026).

Setzt in jedem JSON-LD-Block aller Seiten:
- Organization (#organisation): Claim als description (DE bzw. EN), logo, sameAs = alle Kanäle
- Person Paul Höser (#paul-hoeser), auch als founder eingebettet: sameAs (LinkedIn), knowsAbout
Damit erkennen Google und KI-Systeme Website, Podcast, YouTube, TikTok und LinkedIn als dieselbe Marke
und ordnen die Inhalte einer echten Person zu.

Ein Block wird nur umgeschrieben, wenn er sich verlustfrei
im selben Stil neu schreiben lässt (sonst Meldung, Block bleibt unverändert).
Aufruf: python3 entitaet.py [--pruefen]
"""
import glob, json, re, sys

SITE = 'https://biohackingkompakt.de'
ORG_ID = SITE + '/#organisation'
PERSON_ID = SITE + '/ueber-uns.html#paul-hoeser'
CLAIM_DE = 'Die wissenschaftliche Biohacking-Plattform mit täglichem Podcast, eigenem BK-Score und transparenten Quellen.'
CLAIM_EN = 'The science-based biohacking platform with a daily podcast, its own BK-Score and transparent sources.'
KANAELE = [
    'https://open.spotify.com/show/033JO82L47Sg4YSmPYas0z',
    'https://open.spotify.com/show/6SHPqZY376hMGedL77qGM7',
    'https://podcasts.apple.com/de/podcast/biohacking-kompakt/id6804214652',
    'https://music.amazon.de/podcasts/63f68fc2-9797-4049-8b8e-b255810f029e/biohacking-kompakt',
    'https://www.youtube.com/@biohackingkompakt',
    'https://www.tiktok.com/@biohackingkompakt',
    'https://www.linkedin.com/company/146663518/',
]
PERSON_SAMEAS = ['https://www.linkedin.com/in/paul-h%C3%B6ser-3b296736/']
KNOWS = ['Biohacking', 'Longevity', 'Nahrungsergänzungsmittel', 'Peptide', 'Evidenzbewertung']
AUS = ('demo/', 'docs/', 'podcast-scripts/', 'node_modules/')
BLOCK = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)


def dump(o, sep=(',', ':')):
    return json.dumps(o, ensure_ascii=False, separators=sep)


STILE = [(',', ':'), (', ', ': ')]


def pflege(node, en):
    if not isinstance(node, dict):
        return
    if node.get('@id') == ORG_ID and node.get('@type') == 'Organization':
        node['description'] = CLAIM_EN if en else CLAIM_DE
        node['logo'] = SITE + '/icons/icon-512.png'
        node['sameAs'] = KANAELE
    if node.get('@id') == PERSON_ID and (node.get('@type') == 'Person' or 'name' in node):
        node['sameAs'] = PERSON_SAMEAS
        node.setdefault('knowsAbout', KNOWS)
    for v in list(node.values()):
        if isinstance(v, dict):
            pflege(v, en)
        elif isinstance(v, list):
            for x in v:
                pflege(x, en)


def main():
    schreiben = '--pruefen' not in sys.argv
    geaendert, uebersprungen = 0, []
    for pfad in sorted(glob.glob('**/*.html', recursive=True)):
        if pfad.startswith(AUS):
            continue
        h = open(pfad, encoding='utf-8').read()
        if ORG_ID not in h and PERSON_ID not in h:
            continue
        en = pfad.startswith('en/')

        def ersetze(m):
            roh = m.group(2)
            try:
                d = json.loads(roh)
            except Exception:
                uebersprungen.append(pfad); return m.group(0)
            stil = next((st for st in STILE if dump(d, st) == roh.strip()), None)
            if not stil:
                uebersprungen.append(pfad); return m.group(0)
            pflege(d, en)
            return m.group(1) + dump(d, stil) + m.group(3)
        neu = BLOCK.sub(ersetze, h)
        if neu != h:
            geaendert += 1
            if schreiben:
                open(pfad, 'w', encoding='utf-8').write(neu)
    print('geändert:', geaendert, '| nicht kompakt, übersprungen:', len(set(uebersprungen)), sorted(set(uebersprungen))[:8])


if __name__ == '__main__':
    main()
