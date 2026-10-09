#!/usr/bin/env python3
"""Sprachverknüpfung DE <-> EN für statische Seiten.

Aufruf im Repo-Wurzelordner:  python3 sprachen.py
Für jede englische Seite unter /en/<pfad>.html mit deutschem Gegenstück
(seit 09.10.2026 auch Übersichten <ordner>/index.html und Einzelseiten im en/-Wurzelordner)
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


def url_pfad(pfad):
    """thema/index.html -> thema/ (Übersichtsseiten haben die Ordner-URL als canonical)."""
    return pfad[:-len("index.html")] if pfad.endswith("index.html") else pfad


def hreflang(pfad):
    pfad = url_pfad(pfad)
    de = f"{DOMAIN}/{pfad}"
    en = f"{DOMAIN}/en/{pfad}"
    return (f'\n<link rel="alternate" hreflang="de" href="{de}">'
            f'\n<link rel="alternate" hreflang="en" href="{en}">'
            f'\n<link rel="alternate" hreflang="x-default" href="{de}">')


def umschalter(pfad, sprache):
    pfad = url_pfad(pfad)
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
    m = re.search(r'<link rel="canonical" href="[^"]*">', text) or re.search(r'</title>', text)
    if not m:
        raise SystemExit(f"weder canonical noch title in {datei}")
    text = text[:m.end()] + hreflang(pfad) + text[m.end():]
    # Umschalter nur im Kopf-Nav (Seiten im App-Layout ohne Kopfzeile bekommen nur hreflang)
    k = re.search(r'<header class="kopf">.*?</header>', text, re.S)
    if not k:
        if text != alt:
            with open(datei, "w", encoding="utf-8") as f:
                f.write(text)
            return True
        return False
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
    # Unterordner (thema/, tipp/, vergleich/, problem/ inkl. index.html) und Einzelseiten
    # im en/-Wurzelordner (methodik, ueber-uns, Rechtliches); en/index.html ist die eigene Startseite.
    kandidaten = glob.glob(os.path.join(WURZEL, "en", "*", "*.html")) + [
        p for p in glob.glob(os.path.join(WURZEL, "en", "*.html")) if os.path.basename(p) != "index.html"]
    for en in sorted(kandidaten):
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
