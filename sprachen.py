#!/usr/bin/env python3
"""Sprachverknüpfung DE <-> EN für statische Seiten.

Aufruf im Repo-Wurzelordner:  python3 sprachen.py
Für jede englische Seite unter /en/<pfad>.html mit deutschem Gegenstück
<pfad>.html setzt das Skript in BEIDEN Fassungen
  - die hreflang-Verweise (de, en, x-default = de) direkt nach canonical
  - den Umschalter DE | EN in der Kopfzeile (<header class="kopf"> … <nav>)
Idempotent: vorhandene Einträge werden ersetzt, nicht verdoppelt.
Nach jedem Neubau der deutschen Seiten (bau_thema.py usw.) erneut ausführen.
"""
import os, re, glob

WURZEL = os.path.dirname(os.path.abspath(__file__))
DOMAIN = "https://biohackingkompakt.de"
HREF_RE = re.compile(r'\n?<link rel="alternate" hreflang="[^"]+" href="[^"]*">')
UMSCH_RE = re.compile(r' ?<span class="sprache"[^>]*>.*?</span>', re.S)
STIL = 'margin-left:.6rem;white-space:nowrap'


def hreflang(pfad):
    de = f"{DOMAIN}/{pfad}"
    en = f"{DOMAIN}/en/{pfad}"
    return (f'\n<link rel="alternate" hreflang="de" href="{de}">'
            f'\n<link rel="alternate" hreflang="en" href="{en}">'
            f'\n<link rel="alternate" hreflang="x-default" href="{de}">')


def umschalter(pfad, sprache):
    if sprache == "de":
        innen = f'<strong>DE</strong> | <a href="/en/{pfad}" hreflang="en" lang="en">EN</a>'
    else:
        innen = f'<a href="/{pfad}" hreflang="de" lang="de">DE</a> | <strong>EN</strong>'
    return f' <span class="sprache" style="{STIL}">{innen}</span>'


def bearbeite(datei, pfad, sprache):
    with open(datei, encoding="utf-8") as f:
        text = f.read()
    alt = text
    text = HREF_RE.sub("", text)
    m = re.search(r'<link rel="canonical" href="[^"]*">', text)
    if not m:
        raise SystemExit(f"kein canonical in {datei}")
    text = text[:m.end()] + hreflang(pfad) + text[m.end():]
    # Umschalter nur im Kopf-Nav
    k = re.search(r'<header class="kopf">.*?</header>', text, re.S)
    if not k:
        raise SystemExit(f"kein Kopf in {datei}")
    kopf = UMSCH_RE.sub("", k.group(0))
    kopf = kopf.replace("</nav>", umschalter(pfad, sprache) + "</nav>", 1)
    text = text[:k.start()] + kopf + text[k.end():]
    if text != alt:
        with open(datei, "w", encoding="utf-8") as f:
            f.write(text)
        return True
    return False


def main():
    geaendert = []
    for en in sorted(glob.glob(os.path.join(WURZEL, "en", "*", "*.html"))):
        pfad = os.path.relpath(en, os.path.join(WURZEL, "en")).replace(os.sep, "/")
        de = os.path.join(WURZEL, pfad)
        if not os.path.exists(de):
            print("ohne deutsches Gegenstück:", pfad)
            continue
        if bearbeite(de, pfad, "de"):
            geaendert.append(pfad)
        if bearbeite(en, pfad, "en"):
            geaendert.append("en/" + pfad)
    print(f"{len(geaendert)} Dateien aktualisiert")


if __name__ == "__main__":
    main()
