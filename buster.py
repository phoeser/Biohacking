#!/usr/bin/env python3
"""Cache-Buster je Datei setzen: ?v=<8 Zeichen SHA-1 des Dateiinhalts>.

Aufruf im Repo-Wurzelordner:  python3 buster.py
Aendert nur die Verweise in index.html, deren Datei sich geaendert hat.
So bekommen Browser UND Suchmaschinen nur fuer wirklich geaenderte
Dateien eine neue Adresse (spart Googles Crawling-Budget).
"""
import hashlib, os, re, sys

WURZEL = os.path.dirname(os.path.abspath(__file__))
INDEX = os.path.join(WURZEL, "index.html")
MUSTER = re.compile(r'((?:src|href)=")((?:js|css)/[^"?]+)\?v=([0-9a-zA-Z]+)(")')

def kurz(pfad):
    with open(os.path.join(WURZEL, pfad), "rb") as f:
        return hashlib.sha1(f.read()).hexdigest()[:8]

with open(INDEX, encoding="utf-8") as f:
    text = f.read()
geaendert = []
def ersetze(m):
    neu = kurz(m.group(2))
    if neu != m.group(3):
        geaendert.append(m.group(2))
    return m.group(1) + m.group(2) + "?v=" + neu + m.group(4)
text2 = MUSTER.sub(ersetze, text)
if text2 != text:
    with open(INDEX, "w", encoding="utf-8") as f:
        f.write(text2)
print("neu adressiert:", ", ".join(geaendert) if geaendert else "nichts")
