#!/usr/bin/env python3
"""Statische Einstiegsbloecke der Startseite (index.html) neu erzeugen.

Aufruf im Repo-Wurzelordner:  python3 startseite.py
Erzeugt aus scores.json
  - den Block „Am besten belegt" (10 Supplements mit positiver Richtung,
    sortiert nach Human-Evidenz, dann Sicherheits-Datenlage)
  - den Block „Häufige Fragen" (sichtbar) und den passenden FAQPage-Knoten
    im JSON-LD der Startseite.
Idempotent: ersetzt nur, was zwischen den Markierungen steht.
Nach jedem neuen Score-Stand (scores-bauen.js) erneut ausführen.
"""
import html, json, os, re

WURZEL = os.path.dirname(os.path.abspath(__file__))
DOMAIN = "https://biohackingkompakt.de"


def esc(s):
    return html.escape(s, quote=False)


def main():
    sc = json.load(open(os.path.join(WURZEL, "scores.json"), encoding="utf-8"))
    alle = sc["eintraege"]
    kandidaten = [s for s in alle if s.get("view") == "supplement" and s.get("richtung") == "positiv"]
    kandidaten.sort(key=lambda s: (-s["evidenz"], -s["sicherheit"], s["name"]))
    top = kandidaten[:10]
    n_gesamt = len(alle)

    li = "".join(
        f'<li><a href="/thema/{s["id"]}.html">{esc(s["name"])}</a>'
        f'<span class="home-einstieg-label">{esc(s["label"])}</span></li>'
        for s in top)
    einstieg = (
        '<section class="home-einstieg" aria-labelledby="einstieg-titel">'
        '<span class="eyebrow">Einstieg</span>'
        '<h2 id="einstieg-titel">Am besten belegt: 10 Supplements</h2>'
        '<p class="home-einstieg-sub">Die Supplements mit der stärksten Humanevidenz und positiver Richtung im BK-Score. '
        'Der Score bewertet den Wissensstand – er ist keine persönliche Empfehlung und ersetzt keine ärztliche Beratung.</p>'
        f'<ol class="home-einstieg-liste">{li}</ol>'
        '<a class="home-einstieg-alle" href="/thema/">Alle Themen im Überblick →</a>'
        '</section>')

    namen5 = ", ".join(s["name"] for s in top[:5])
    faq = [
        ("Was ist Biohacking Kompakt?",
         f"Eine deutschsprachige Faktencheck-Datenbank zu Supplements, Peptiden, Anwendungen und Longevity-Methoden. "
         f"{n_gesamt} Einträge haben einen BK-Score mit Studienquellen, dazu kommen Erfahrungsberichte und der tägliche Podcast von Paul und Paula."),
        ("Was bedeutet der BK-Score?",
         "Der BK-Score bewertet auf fünf Achsen von 0 bis 10, wie gut ein Thema untersucht ist: Human-Evidenz, Mechanismus, "
         "Sicherheits-Datenlage, Hype-Abstand und Anwendungserfahrung. Er bewertet den Wissensstand, nicht die Substanz, und ist keine medizinische Empfehlung."),
        ("Welche Supplements sind am besten belegt?",
         f"Nach BK-Score haben derzeit {namen5} die stärkste Humanevidenz mit positiver Richtung. "
         "Die vollständige Liste mit zehn Einträgen steht oben auf der Startseite, jede mit eigener Themenseite und Quellen."),
        ("Womit fange ich als Einsteiger am besten an?",
         "Mit den Grundlagen: Schlaf, Bewegung, Ernährung und einem Blick auf die eigenen Blutwerte. Supplements sind eine Ergänzung, "
         "am sinnvollsten dort, wo die Studienlage gut ist oder ein Mangel besteht. Wer Medikamente nimmt oder Beschwerden hat, klärt das vorher ärztlich."),
        ("Sind Peptide wie BPC-157 in Deutschland erlaubt?",
         "Die meisten Peptide in der Datenbank sind in Deutschland weder als Arzneimittel zugelassen noch als Nahrungsergänzung verkehrsfähig. "
         "Angeboten werden sie als Forschungssubstanz ohne geprüfte Reinheit, im Sport stehen viele auf der WADA-Liste. "
         "Deshalb nennt Biohacking Kompakt bei nicht zugelassenen Wirkstoffen keine Dosierungen."),
        ("Gibt es Biohacking Kompakt auch als Podcast?",
         "Ja. Paul und Paula besprechen jeden Tag ein Thema aus der Datenbank, zu hören auf Spotify, Apple Podcasts und Amazon Music. "
         "Jede Folge hat eine Seite mit Quellen und Verweis auf den passenden Eintrag."),
    ]
    faq_html = (
        '<section class="home-faq" aria-labelledby="faq-titel">'
        '<span class="eyebrow">Häufige Fragen</span>'
        '<h2 id="faq-titel">Häufige Fragen zu Biohacking Kompakt</h2>'
        + "".join(f"<details><summary>{esc(q)}</summary><p>{esc(a)}</p></details>" for q, a in faq)
        + "</section>")

    p = os.path.join(WURZEL, "index.html")
    t = open(p, encoding="utf-8").read()
    alt = t
    for name, block in (("EINSTIEG", einstieg), ("FAQ", faq_html)):
        a, e = f"<!-- {name}:START -->", f"<!-- {name}:ENDE -->"
        if a not in t:
            raise SystemExit(f"Markierung {a} fehlt in index.html")
        i, j = t.index(a) + len(a), t.index(e)
        t = t[:i] + block + t[j:]

    m = re.search(r'(<script type="application/ld\+json">)(.*?)(</script>)', t, re.S)
    d = json.loads(m.group(2))
    d["@graph"] = [n for n in d["@graph"] if n.get("@type") != "FAQPage"]
    d["@graph"].append({
        "@type": "FAQPage", "@id": DOMAIN + "/#faq", "inLanguage": "de",
        "mainEntity": [{"@type": "Question", "name": q,
                        "acceptedAnswer": {"@type": "Answer", "text": a}} for q, a in faq]})
    t = t[:m.start(2)] + json.dumps(d, ensure_ascii=False, separators=(",", ":")) + t[m.end(2):]

    if t != alt:
        open(p, "w", encoding="utf-8").write(t)
        print("index.html aktualisiert:", ", ".join(s["id"] for s in top))
    else:
        print("index.html unverändert")


if __name__ == "__main__":
    main()
