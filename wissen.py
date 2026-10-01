#!/usr/bin/env python3
"""Wissensdokumente fuer den Sprach-Chatbot (ElevenLabs-Agent „Paul – Biohacking Coach").

Baut aus js/data und scores.json fuenf Klartextdateien unter wissen/:
  supplements.txt, experimentell.txt, khavinson.txt, anwendungen.txt, tipps.txt
Der Agent holt sie per URL mit woechentlichem Auto-Sync (wie studien/studien.txt).
Damit ist der Chatbot auf dem Stand der Seite, statt auf festen Dateien vom August.

Regeln wie auf der Seite: keine Dosierangaben bei experimentellen Stoffen und
Khavinson-Peptiden (§ 3a HWG), keine Bezugsquellen, keine Partnerlinks.
Nach jedem neuen Daten- oder Score-Stand ausfuehren:  python3 wissen.py
"""
import json, os, subprocess, tempfile, time

ROOT = os.path.dirname(os.path.abspath(__file__))
os.chdir(ROOT)
SITE = 'https://biohackingkompakt.de'

LADEN = r"""
const fs=require('fs'),vm=require('vm');
const ctx={window:{},console:{log(){}},document:{addEventListener(){}}};vm.createContext(ctx);
for(const f of ['supplements','experimental','khavinson','therapies','tips']){
  vm.runInContext(fs.readFileSync('js/data/'+f+'.js','utf8').replace(/^\s*const\s+/gm,'var '),ctx);
}
process.stdout.write(JSON.stringify({s:ctx.SUPPLEMENTS,e:ctx.EXPERIMENTAL,k:ctx.KHAVINSON,t:ctx.THERAPIES,ti:ctx.TIPS}));
"""

def laden():
    with tempfile.NamedTemporaryFile('w', suffix='.js', delete=False) as f:
        f.write(LADEN); js = f.name
    try:
        return json.loads(subprocess.check_output(['node', js], cwd=ROOT))
    finally:
        os.unlink(js)

def text(x):
    if x is None: return ''
    if isinstance(x, list): return '; '.join(text(i) for i in x if text(i))
    if isinstance(x, dict): return '; '.join('%s: %s' % (k, text(v)) for k, v in x.items() if text(v))
    return ' '.join(str(x).split())

def score_zeilen(sc):
    if not sc: return ['BK-Score: keiner vergeben.']
    return ['BK-Score: %s (Studien am Menschen %s/10, Richtung %s, Mechanismus %s/10, Sicherheitsdaten %s/10, '
            'Anwendungserfahrung %s/10, Abstand Werbung zu Daten %s/10).' % (
                sc.get('label'), sc.get('evidenz'), sc.get('richtung'), sc.get('mechanismus'),
                sc.get('sicherheit'), sc.get('anwendung'), sc.get('hype')),
            'Begründung: ' + text(sc.get('beleg'))]

def seite_url(view, i):
    p = 'thema/%s.html' % i
    return '%s/%s' % (SITE, p) if os.path.exists(p) else '%s/#%s/%s' % (SITE, view, i)

def block(titel, felder, sc, url):
    z = ['## ' + titel]
    for name, wert in felder:
        w = text(wert)
        if w: z.append('%s: %s' % (name, w))
    z += score_zeilen(sc)
    z.append('Seite: ' + url)
    return '\n'.join(z) + '\n'

def kopf(titel, n, zusatz):
    return ('# %s – Biohacking Kompakt\n\nStand: %s. %d Einträge. %s Der BK-Score bewertet den Wissensstand, '
            'nicht die Substanz: „gut untersucht" heißt nicht „harmlos". Reine Information, keine medizinische '
            'Beratung.\n\n') % (titel, time.strftime('%d.%m.%Y'), n, zusatz)

def main():
    d = laden()
    sc_liste = json.load(open('scores.json', encoding='utf-8'))
    sc_liste = sc_liste.get('eintraege', sc_liste)
    SC = {(x['id'], x['view']): x for x in sc_liste}
    os.makedirs('wissen', exist_ok=True)
    dateien = {}

    t = [kopf('Supplements', len(d['s']), 'Nahrungsergänzungsmittel, in Deutschland verkehrsfähig.')]
    for x in sorted(d['s'], key=lambda x: x['name'].lower()):
        t.append(block(x['name'], [('Auch genannt', x.get('altNames')), ('Kategorie', x.get('category')),
            ('Kurz', x.get('short')), ('Beschreibung', x.get('description')), ('Was dafür spricht', x.get('benefits')),
            ('Risiken', x.get('risks')), ('Dosierung laut Studien und Referenzwerten', x.get('dosage')),
            ('Einnahme', x.get('intake')), ('Passt zu', x.get('synergies')), ('Meiden', x.get('avoid')),
            ('Evidenz', x.get('evidence'))], SC.get((x['id'], 'supplement')), seite_url('supplement', x['id'])))
    dateien['supplements.txt'] = t

    t = [kopf('Peptide und experimentelle Substanzen', len(d['e']),
              'In Deutschland meist nicht als Arzneimittel zugelassen oder verschreibungspflichtig – hier stehen '
              'bewusst keine Dosierungen und keine Bezugsquellen; für die Anwendung gehört ärztliche Begleitung dazu.')]
    for x in sorted(d['e'], key=lambda x: x['name'].lower()):
        t.append(block(x['name'], [('Auch genannt', x.get('altNames')), ('Klasse', x.get('class')),
            ('Kurz', x.get('short')), ('Wirkmechanismus', x.get('moa')), ('Was dafür spricht', x.get('benefits')),
            ('Risiken', x.get('risks')), ('Status', x.get('status'))],
            SC.get((x['id'], 'experimental')), seite_url('experimental', x['id'])))
    dateien['experimentell.txt'] = t

    t = [kopf('Khavinson-Bioregulatoren', len(d['k']),
              'Kurze Peptide aus der russischen Forschung um Vladimir Khavinson; in Deutschland nicht als '
              'Arzneimittel zugelassen – keine Dosierungen, keine Bezugsquellen.')]
    for x in sorted(d['k'], key=lambda x: x['name'].lower()):
        t.append(block(x['name'], [('Auch genannt', x.get('altNames')), ('Klasse', x.get('class')),
            ('Kurz', x.get('short')), ('Wirkmechanismus', x.get('moa')), ('Was dafür spricht', x.get('benefits')),
            ('Risiken', x.get('risks')), ('Status', x.get('status'))],
            SC.get((x['id'], 'khavinson')), seite_url('khavinson', x['id'])))
    dateien['khavinson.txt'] = t

    t = [kopf('Anwendungen und Behandlungen', len(d['t']), 'Therapien, Geräte und ärztliche Leistungen.')]
    for x in sorted(d['t'], key=lambda x: x['name'].lower()):
        t.append(block(x['name'], [('Kategorie', x.get('category')), ('Kurz', x.get('short')),
            ('Was dafür spricht', x.get('benefits')), ('Wofür', x.get('indication')), ('Einordnung', x.get('note'))],
            SC.get((x['id'], 'behandlungen')), seite_url('behandlungen', x['id'])))
    dateien['anwendungen.txt'] = t

    t = [kopf('Biohacking-Tipps', len(d['ti']), 'Alltagsstrategien jenseits von Supplements.')]
    for x in sorted(d['ti'], key=lambda x: (x.get('category', ''), x['title'].lower())):
        p = 'tipp/%s.html' % x['id']
        url = '%s/%s' % (SITE, p) if os.path.exists(p) else '%s/#tipps/%s' % (SITE, x['id'])
        t.append(block(x['title'], [('Bereich', x.get('category')), ('Warum', x.get('short')), ('Wie', x.get('how'))],
            SC.get((x['id'], 'tipps')), url))
    dateien['tipps.txt'] = t

    for name, teile in dateien.items():
        open('wissen/' + name, 'w', encoding='utf-8').write('\n'.join(teile))
        print('wissen/%-18s %4d Einträge %7d Zeichen' % (name, len(teile) - 1, sum(len(x) for x in teile)))

if __name__ == '__main__':
    main()
