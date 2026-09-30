#!/usr/bin/env python3
"""Block „Was Anwender berichten" auf ausgewählten Themenseiten.

Quelle: docs/anwender/<id>.json  {"id", "absaetze": [...], "quellen": [[titel, url], ...]}
Eingesetzt vor den häufigen Fragen (section.faq), sonst vor den Quellen.
Idempotent zwischen <!-- anwender:start --> und <!-- anwender:end -->.
Nach jedem Neubau einer betroffenen Themenseite erneut ausführen.
"""
import glob, html, json, os, re
os.chdir(os.path.dirname(os.path.abspath(__file__)))
START, ENDE = '<!-- anwender:start -->', '<!-- anwender:end -->'
n = 0
for f in sorted(glob.glob('docs/anwender/*.json')):
    d = json.load(open(f, encoding='utf-8'))
    p = 'thema/%s.html' % d['id']
    if not os.path.exists(p):
        print('fehlt:', p); continue
    s = open(p, encoding='utf-8').read()
    alt = s
    s = re.sub(r'\n?[ \t]*%s.*?%s\n?' % (re.escape(START), re.escape(ENDE)), '\n', s, flags=re.S)
    z = ['    ' + START, '    <section class="anwender">', '      <h2>Was Anwender berichten</h2>']
    z += ['      <p>%s</p>' % html.escape(a, quote=False) for a in d['absaetze']]
    z.append('      <p class="sc-hinweis">Erfahrungsberichte sind unkontrollierte Einzelfälle und kein Wirksamkeitsbeleg. Sie zeigen, was Menschen im Alltag erleben.</p>')
    if d.get('quellen'):
        z.append('      <ul class="q">')
        z += ['        <li><a href="%s" rel="noopener nofollow" target="_blank">%s</a></li>'
              % (html.escape(u), html.escape(t)) for t, u in d['quellen']]
        z.append('      </ul>')
    z += ['    </section>', '    ' + ENDE]
    block = '\n'.join(z) + '\n'
    for anker in ('    <section class="faq">', '    <section><h2>Quellen</h2>'):
        if anker in s:
            s = s.replace(anker, block + anker, 1); break
    else:
        print('kein Anker:', p); continue
    if s != alt:
        open(p, 'w', encoding='utf-8').write(s); n += 1
print('anwender.py: %d Seiten geändert' % n)
