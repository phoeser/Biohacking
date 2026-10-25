#!/usr/bin/env python3
"""Kapitelmarken auf den Folgenseiten (idempotent, seit 25.10.2026).

Quelle: docs/folge-kapitel.json – {"<nr>": [{"t": Sekunden, "de": Titel, "en": Titel}, ...]}.
Die Zeiten stammen aus der Transkription der veröffentlichten Audiodatei.
Setzt auf folge/<nr>.html und en/folge/<nr>.html nach „Die Kernaussagen“ bzw. „Key points“ einen Kasten
„Kapitel“ (zwischen <!-- kapitel:start/end -->) und im JSON-LD der PodcastEpisode `hasPart` als Clips
mit startOffset. Neue Folge mit Kapiteln: Eintrag in der JSON ergänzen, Skript laufen lassen.

Aufruf: python3 kapitel.py [--pruefen]
"""
import html, json, os, re, sys

MUSTER = re.compile(r'\n?    <!-- kapitel:start -->.*?<!-- kapitel:end -->', re.S)
BLOCK = re.compile(r'(<script type="application/ld\+json">)(.*?)(</script>)', re.S)
STILE = [(',', ':'), (', ', ': ')]


def zeit(t):
    return '%d:%02d' % (t // 60, t % 60)


def jsonld(h, kap, en):
    def ersetze(m):
        roh = m.group(2).strip()
        try:
            d = json.loads(roh)
        except Exception:
            return m.group(0)
        stil = next((st for st in STILE if json.dumps(d, ensure_ascii=False, separators=st) == roh), None)
        if not stil:
            return m.group(0)
        knoten = d.get('@graph', [d]) if isinstance(d, dict) else []
        for n in knoten:
            if isinstance(n, dict) and n.get('@type') == 'PodcastEpisode':
                n['hasPart'] = [{'@type': 'Clip', 'name': k['en' if en else 'de'], 'startOffset': k['t']} for k in kap]
        return m.group(1) + json.dumps(d, ensure_ascii=False, separators=stil) + m.group(3)
    return BLOCK.sub(ersetze, h)


def main():
    schreiben = '--pruefen' not in sys.argv
    daten = json.load(open('docs/folge-kapitel.json', encoding='utf-8'))
    geaendert = 0
    for nr, kap in sorted(daten.items(), key=lambda x: int(x[0])):
        for en in (False, True):
            pfad = ('en/' if en else '') + 'folge/%s.html' % nr
            if not os.path.exists(pfad):
                continue
            h = open(pfad, encoding='utf-8').read()
            ohne = MUSTER.sub('', h)
            kopf = 'Chapters (episode in German)' if en else 'Kapitel'
            li = '\n'.join('        <li><span class="zeit" style="font-variant-numeric:tabular-nums;opacity:.7;margin-right:.5em">%s</span>%s</li>'
                           % (zeit(k['t']), html.escape(k['en' if en else 'de'])) for k in kap)
            block = ('\n    <!-- kapitel:start -->\n    <section class="kapitel">\n      <h2>%s</h2>\n      <ol style="list-style:none;padding-left:0">\n%s\n      </ol>\n    </section>\n    <!-- kapitel:end -->'
                     % (kopf, li))
            marke = '<h2>Key points</h2>' if en else '<h2>Die Kernaussagen</h2>'
            i = ohne.find(marke)
            if i < 0:
                print('kein Anker', pfad); continue
            j = ohne.find('</section>', i) + len('</section>')
            neu = jsonld(ohne[:j] + block + ohne[j:], kap, en)
            if neu != h:
                geaendert += 1
                if schreiben:
                    open(pfad, 'w', encoding='utf-8').write(neu)
    print('geändert:', geaendert)


if __name__ == '__main__':
    main()
