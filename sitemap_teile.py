#!/usr/bin/env python3
"""Teil-Sitemaps nach Seitentyp (seit 17.11.2026, SEO-Plan T2).

sitemap.xml bleibt die Gesamtliste, in die alle Generatoren schreiben (und die in
robots.txt, Bing und IndexNow steht). Dieses Skript teilt sie zusätzlich in
/sitemaps/<typ>.xml auf und schreibt /sitemaps/index.xml (Sitemap-Index).
In der Search Console sind die Teile einzeln eingereicht: So zeigt der Bericht
je Seitentyp, wie viel indexiert ist.

Idempotent. Nach jeder Änderung an sitemap.xml laufen lassen (Bau-Kette vor buster.py).
--pruefen = nur zählen, nichts schreiben.
"""
import os
import re
import sys
from datetime import date

WURZEL = os.path.dirname(os.path.abspath(__file__))
DOMAIN = "https://biohackingkompakt.de"
ZIEL = os.path.join(WURZEL, "sitemaps")

# Reihenfolge = Ausgabe-Reihenfolge im Index
TEILE = ["thema-de", "thema-en", "ratgeber-de", "ratgeber-en", "folge-de", "folge-en",
         "glossar-de", "glossar-en", "sonstige"]
RATGEBER = {"tipp", "vergleich", "problem"}


def typ(pfad):
    teile = pfad.split("/")
    sprache = "de"
    if teile[0] == "en":
        sprache, teile = "en", teile[1:]
    ordner = teile[0] if len(teile) > 1 else ""
    if ordner == "thema":
        return f"thema-{sprache}"
    if ordner in RATGEBER:
        return f"ratgeber-{sprache}"
    if ordner == "folge":
        return f"folge-{sprache}"
    if ordner == "glossar":
        return f"glossar-{sprache}"
    return "sonstige"


def main():
    pruefen = "--pruefen" in sys.argv
    text = open(os.path.join(WURZEL, "sitemap.xml"), encoding="utf-8").read()
    eintraege = re.findall(r"<url>.*?</url>", text, re.S)
    gruppen = {t: [] for t in TEILE}
    for e in eintraege:
        m = re.search(r"<loc>([^<]+)</loc>", e)
        if not m or not m.group(1).startswith(DOMAIN + "/"):
            continue
        gruppen[typ(m.group(1)[len(DOMAIN) + 1:])].append(e.strip())
    summe = sum(len(v) for v in gruppen.values())
    if summe != len(eintraege):
        raise SystemExit(f"{len(eintraege) - summe} Einträge ohne gültige Adresse in sitemap.xml")
    for t in TEILE:
        print(f"{t:12} {len(gruppen[t]):5}")
    print(f"{'gesamt':12} {summe:5}")
    if pruefen:
        return
    os.makedirs(ZIEL, exist_ok=True)
    geaendert = 0
    index = []
    for t in TEILE:
        if not gruppen[t]:
            continue
        inhalt = ('<?xml version="1.0" encoding="UTF-8"?>\n'
                  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  '
                  + "\n  ".join(gruppen[t]) + "\n</urlset>\n")
        pfad = os.path.join(ZIEL, f"{t}.xml")
        alt = open(pfad, encoding="utf-8").read() if os.path.exists(pfad) else None
        if alt != inhalt:
            open(pfad, "w", encoding="utf-8").write(inhalt)
            geaendert += 1
        daten = re.findall(r"<lastmod>([^<]+)</lastmod>", inhalt)
        neu = max(daten) if daten else date.today().isoformat()
        index.append(f"  <sitemap><loc>{DOMAIN}/sitemaps/{t}.xml</loc><lastmod>{neu}</lastmod></sitemap>")
    inhalt = ('<?xml version="1.0" encoding="UTF-8"?>\n'
              '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
              + "\n".join(index) + "\n</sitemapindex>\n")
    pfad = os.path.join(ZIEL, "index.xml")
    alt = open(pfad, encoding="utf-8").read() if os.path.exists(pfad) else None
    if alt != inhalt:
        open(pfad, "w", encoding="utf-8").write(inhalt)
        geaendert += 1
    print(f"{geaendert} Dateien geschrieben")


if __name__ == "__main__":
    main()
