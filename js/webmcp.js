/* WebMCP: Werkzeuge für KI-Assistenten im Browser (seit 27.10.2026).
 *
 * Meldet über die WebMCP-Schnittstelle (document.modelContext, früher navigator.modelContext)
 * nur lesende Werkzeuge an: Themen suchen, BK-Score abrufen, zwei Themen vergleichen,
 * Fragen & Beschwerden finden, Studien suchen. Browser ohne WebMCP ignorieren die Datei.
 * Daten kommen aus denselben öffentlichen Dateien wie die Seite (scores.json, studien.json,
 * /problem/), werden erst beim ersten Aufruf geladen und nicht verändert.
 * Keine Dosierungen, keine Bezugsquellen, keine personenbezogenen Daten.
 * Eingebunden: index.html (Cache-Buster über buster.py) und alle übrigen Seiten über webmcp.py.
 */
(function () {
  'use strict';
  var mc = (typeof document !== 'undefined' && document.modelContext) ||
           (typeof navigator !== 'undefined' && navigator.modelContext);
  if (!mc) return;

  var SITE = 'https://biohackingkompakt.de';
  var EN = (document.documentElement.lang || '').toLowerCase().indexOf('en') === 0;
  var HINWEIS = 'Der BK-Score ist eine subjektive Einschätzung von Biohacking Kompakt nach offengelegten Vergaberegeln (' +
    SITE + '/methodik.html): Er bewertet den Wissensstand, nicht die Substanz, und ist keine medizinische Beratung.';
  var cache = {};

  function laden(pfad, art) {
    if (!cache[pfad]) {
      cache[pfad] = fetch(pfad, { credentials: 'omit' }).then(function (r) {
        if (!r.ok) throw new Error('Laden fehlgeschlagen: ' + pfad);
        return art === 'text' ? r.text() : r.json();
      });
    }
    return cache[pfad];
  }

  function norm(t) {
    return String(t || '').toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9+]+/g, ' ').trim();
  }

  function enUrl(url) {
    return url && url.indexOf(SITE + '/thema/') === 0 ? url.replace(SITE + '/thema/', SITE + '/en/thema/') :
           url && url.indexOf(SITE + '/tipp/') === 0 ? url.replace(SITE + '/tipp/', SITE + '/en/tipp/') : url;
  }

  function eintraege() {
    return laden('/scores.json').then(function (d) { return d.eintraege || []; });
  }

  // Kurze Begriffe wie „NAD“ nur am Wortanfang suchen, sonst trifft „nad“ auch „Gonadorelin“.
  function wortanfang(text, w) {
    return (' ' + text).indexOf(' ' + w) >= 0;
  }

  function treffer(liste, begriff) {
    var q = norm(begriff);
    if (!q) return [];
    var woerter = q.split(' ');
    return liste.map(function (e) {
      var n = norm(e.name), id = norm(e.id);
      var p = 0;
      if (id === q || n === q) p = 100;
      else if (n.indexOf(q) === 0 || id.indexOf(q) === 0) p = 60;
      else if (wortanfang(n, q) || wortanfang(id, q)) p = 40;
      else if (q.length > 4 && (n.indexOf(q) >= 0 || id.indexOf(q) >= 0)) p = 30;
      else if (woerter.every(function (w) { return wortanfang(n, w) || wortanfang(id, w); })) p = 25;
      return { e: e, p: p };
    }).filter(function (x) { return x.p > 0; })
      .sort(function (a, b) { return b.p - a.p || (b.e.evidenz || 0) - (a.e.evidenz || 0); });
  }

  function kurz(e) {
    return { id: e.id, name: e.name, label: e.label, human_evidenz: e.evidenz,
             url: EN ? enUrl(e.url) : e.url };
  }

  function voll(e) {
    return {
      id: e.id, name: e.name, bereich: e.view, label: e.label,
      bk_score: {
        human_evidenz: e.evidenz, mechanismus: e.mechanismus, sicherheits_datenlage: e.sicherheit,
        hype_abstand: e.hype, anwendungserfahrung: e.anwendung
      },
      begruendung: e.beleg, url: e.url, url_en: enUrl(e.url)
    };
  }

  function antwort(obj) {
    return { content: [{ type: 'text', text: JSON.stringify(obj, null, 1) }] };
  }

  function finde(liste, begriff) {
    var t = treffer(liste, begriff);
    return t.length ? t[0].e : null;
  }

  var tools = [
    {
      name: 'bk_themen_suchen',
      description: 'Sucht in der Biohacking-Kompakt-Datenbank (rund 500 Supplements, Peptide, Anwendungen und Tipps) nach einem Thema und liefert passende Einträge mit BK-Score-Label, Human-Evidenz (0–10) und Link zur Themenseite. Begriffe auf Deutsch oder Englisch, z. B. „Kreatin“, „NMN“, „Sauna“.',
      inputSchema: { type: 'object', properties: {
        suchbegriff: { type: 'string', description: 'Name oder Stichwort, z. B. „Ashwagandha“' },
        anzahl: { type: 'integer', description: 'Höchstzahl der Treffer (1–20, Standard 8)' }
      }, required: ['suchbegriff'] },
      annotations: { readOnlyHint: true },
      execute: function (a) {
        return eintraege().then(function (l) {
          var n = Math.max(1, Math.min(20, parseInt(a && a.anzahl, 10) || 8));
          var t = treffer(l, a && a.suchbegriff).slice(0, n).map(function (x) { return kurz(x.e); });
          return antwort({ treffer: t, hinweis: t.length ? HINWEIS : 'Kein Treffer – anderen Begriff versuchen.' });
        });
      }
    },
    {
      name: 'bk_score_abrufen',
      description: 'Liefert den vollständigen BK-Score eines Themas: fünf Achsen von 0 bis 10 (Human-Evidenz, Mechanismus, Sicherheits-Datenlage, Hype-Abstand, Anwendungserfahrung), Label und die Begründung mit Studienangaben. Bewertet den Wissensstand, nicht die Substanz.',
      inputSchema: { type: 'object', properties: {
        thema: { type: 'string', description: 'Name oder id des Themas, z. B. „Kreatin“ oder „bpc-157“' }
      }, required: ['thema'] },
      annotations: { readOnlyHint: true },
      execute: function (a) {
        return eintraege().then(function (l) {
          var e = finde(l, a && a.thema);
          return antwort(e ? { eintrag: voll(e), hinweis: HINWEIS } : { fehler: 'Thema nicht gefunden – zuerst bk_themen_suchen nutzen.' });
        });
      }
    },
    {
      name: 'bk_vergleichen',
      description: 'Stellt die BK-Scores zweier Themen nebeneinander (z. B. „Kreatin“ und „Beta-Alanin“) und nennt, falls vorhanden, die redaktionelle Vergleichsseite von Biohacking Kompakt.',
      inputSchema: { type: 'object', properties: {
        thema_a: { type: 'string', description: 'Erstes Thema' },
        thema_b: { type: 'string', description: 'Zweites Thema' }
      }, required: ['thema_a', 'thema_b'] },
      annotations: { readOnlyHint: true },
      execute: function (a) {
        return eintraege().then(function (l) {
          var x = finde(l, a && a.thema_a), y = finde(l, a && a.thema_b);
          if (!x || !y) return antwort({ fehler: 'Mindestens ein Thema nicht gefunden – zuerst bk_themen_suchen nutzen.' });
          var kandidaten = ['/vergleich/' + x.id + '-vs-' + y.id + '.html', '/vergleich/' + y.id + '-vs-' + x.id + '.html'];
          return Promise.all(kandidaten.map(function (p) {
            return fetch(p, { method: 'HEAD', credentials: 'omit' }).then(function (r) { return r.ok ? p : null; }, function () { return null; });
          })).then(function (r) {
            var seite = r.filter(Boolean)[0];
            return antwort({
              a: voll(x), b: voll(y),
              vergleichsseite: seite ? SITE + (EN ? '/en' : '') + seite : null,
              hinweis: HINWEIS
            });
          });
        });
      }
    },
    {
      name: 'bk_fragen_finden',
      description: 'Listet die Ratgeber-Seiten zu Alltagsbeschwerden (z. B. schlecht schlafen, Bauchfett, Gelenke, Fettleber, Cholesterin): was nachweislich hilft, Warnzeichen für den Arztbesuch, passende Datenbank-Einträge. Optional nach Stichwort filtern.',
      inputSchema: { type: 'object', properties: {
        suchbegriff: { type: 'string', description: 'Optionales Stichwort, z. B. „Schlaf“' }
      } },
      annotations: { readOnlyHint: true },
      execute: function (a) {
        var pfad = EN ? '/en/problem/' : '/problem/';
        return laden(pfad, 'text').then(function (h) {
          var doc = new DOMParser().parseFromString(h, 'text/html');
          var liste = [].slice.call(doc.querySelectorAll('.gl-liste li')).map(function (li) {
            var link = li.querySelector('a'), kurztext = li.querySelector('.gl-kurz');
            return { titel: link ? link.textContent.trim() : '', url: link ? SITE + link.getAttribute('href') : '',
                     kurz: kurztext ? kurztext.textContent.trim() : '' };
          });
          var q = norm(a && a.suchbegriff);
          if (q) {
            liste = liste.filter(function (x) { return norm(x.titel + ' ' + x.kurz).indexOf(q) >= 0; })
              .sort(function (x, y) { return (norm(y.titel).indexOf(q) >= 0) - (norm(x.titel).indexOf(q) >= 0); });
          }
          return antwort({ seiten: liste, hinweis: 'Reine Information, keine Diagnose und keine medizinische Beratung.' });
        });
      }
    },
    {
      name: 'bk_studien_suchen',
      description: 'Durchsucht die Studien-Datenbank von Biohacking Kompakt (rund 3.500 Studien aus den Quellenangaben der Seite, mit Studientyp, Journal, Jahr und PubMed-Link) nach Thema oder Stichwort im Titel.',
      inputSchema: { type: 'object', properties: {
        suchbegriff: { type: 'string', description: 'Thema oder Stichwort, z. B. „Kreatin“ oder „sleep“' },
        anzahl: { type: 'integer', description: 'Höchstzahl der Treffer (1–25, Standard 10)' }
      }, required: ['suchbegriff'] },
      annotations: { readOnlyHint: true },
      execute: function (a) {
        return laden('/studien/studien.json').then(function (d) {
          var q = norm(a && a.suchbegriff);
          var n = Math.max(1, Math.min(25, parseInt(a && a.anzahl, 10) || 10));
          var reihenfolge = { leitlinie: 0, meta: 1, rct: 2, klinisch: 3, review: 4, beobachtung: 5, register: 6, fall: 7, tier: 8, sonst: 9 };
          var t = (d.studien || []).filter(function (s) {
            var themen = (s.seiten || []).map(function (x) { return x.name + ' ' + (x.thema_id || ''); }).join(' ');
            return q && norm(s.titel + ' ' + themen).indexOf(q) >= 0;
          }).sort(function (x, y) {
            return (reihenfolge[x.typ] || 9) - (reihenfolge[y.typ] || 9) || (y.jahr || 0) - (x.jahr || 0);
          }).slice(0, n).map(function (s) {
            return { titel: s.titel, autor: s.autor, journal: s.journal, jahr: s.jahr, studientyp: s.typ_name, url: s.url,
                     themen: (s.seiten || []).map(function (x) { return x.name; }) };
          });
          return antwort({ studien: t, alle_ansehen: SITE + '/studien/?q=' + encodeURIComponent((a && a.suchbegriff) || '') });
        });
      }
    }
  ];

  try {
    if (typeof mc.registerTool === 'function') {
      tools.forEach(function (t) { mc.registerTool(t); });
    } else if (typeof mc.provideContext === 'function') {
      mc.provideContext({ tools: tools });
    }
  } catch (e) {
    if (window.console) console.warn('WebMCP nicht verfügbar:', e && e.message);
  }
})();
