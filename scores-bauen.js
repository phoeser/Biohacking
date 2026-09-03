#!/usr/bin/env node
/* Baut scores.json aus js/data/*.js.
 *
 * Die Datei war der Grund, warum die Reel-Fabrik ohne Berichtslage rendert:
 * sie wurde von Hand gepflegt und blieb stehen. Dieses Skript liest die
 * Datendateien selbst, statt sie nachzubauen — bkLabel wird aus scores.js
 * herausgeschnitten und ausgefuehrt, damit Etikett hier und auf der Seite
 * nicht auseinanderlaufen koennen.
 *
 * Aufruf:  node scores-bauen.js <js/data-Ordner> <ziel.json>
 */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');

const DATEN = process.argv[2] || 'js/data';
const ZIEL  = process.argv[3] || 'scores.json';

function laden(datei, name) {
  const quelle = fs.readFileSync(path.join(DATEN, datei), 'utf8');
  const box = { console };
  vm.createContext(box);
  vm.runInContext(quelle + '\n;globalThis.__ = ' + name + ';', box);
  return box.__;
}

const SUPPLEMENTS = laden('supplements.js', 'SUPPLEMENTS');
const EXPERIMENTAL = laden('experimental.js', 'EXPERIMENTAL');
const KHAVINSON = laden('khavinson.js', 'KHAVINSON');
const THERAPIES = laden('therapies.js', 'THERAPIES');
const TIPS = laden('tips.js', 'TIPS');
const BK_SCORES = laden('scores.js', 'BK_SCORES');

// bkLabel aus scores.js herausschneiden und hier ausfuehren
const scoresQuelle = fs.readFileSync(path.join(DATEN, 'scores.js'), 'utf8');
const i = scoresQuelle.indexOf('function bkLabel');
if (i < 0) { console.error('bkLabel steht nicht in scores.js.'); process.exit(1); }
const box = {};
vm.createContext(box);
vm.runInContext(scoresQuelle.slice(i) + '\n;globalThis.__ = bkLabel;', box);
const bkLabel = box.__;

// Karten aus allen Ansichten: id -> Anzeigename
const karten = new Map();
for (const liste of [SUPPLEMENTS, EXPERIMENTAL, KHAVINSON, THERAPIES, TIPS])
  for (const k of liste) karten.set(k.id, k.name || k.title || k.id);

const fehlend = [];
const eintraege = BK_SCORES.map(s => {
  const name = karten.get(s.id);
  if (!name) fehlend.push(s.id);
  const e = {
    id: s.id,
    view: s.view,
    name: name || s.id,
    url: 'https://biohackingkompakt.de/thema/' + s.id + '.html',
    evidenz: s.evidenz, mechanismus: s.mechanismus, sicherheit: s.sicherheit,
    hype: s.hype, anwendung: s.anwendung,
    richtung: s.richtung,
    label: bkLabel(s),
    beleg: s.beleg
  };
  if (s.belegLuecke) e.belegLuecke = s.belegLuecke;
  if (s.berichtslage) e.berichtslage = s.berichtslage;
  return e;
});

const heute = new Date().toISOString().slice(0, 10);
const aus = {
  hinweis: 'BK-Score. Jede Achse bewertet den Wissensstand (0-10), nicht die Substanz. '
         + 'Regeln: https://biohackingkompakt.de/#score',
  disclaimer: 'Subjektive Einschaetzung von Biohacking Kompakt auf Basis offengelegter '
            + 'Vergaberegeln. Keine wissenschaftliche Bewertung, kein Fachgesellschafts-'
            + 'Konsens, keine medizinische Empfehlung.',
  stand: heute,
  achsen: {
    evidenz: 'Human-Evidenz: wie viel und wie gute Daten am Menschen',
    mechanismus: 'Wie gut die Wirkkette verstanden ist',
    sicherheit: 'Wie gut die Sicherheit untersucht ist (nicht: wie sicher es ist)',
    hype: 'Hype-Abstand: 10 = die Werbung bleibt auf Hoehe der Daten',
    anwendung: 'Anwendungserfahrung: wie viel dokumentierte Anwendung am Menschen '
             + 'vorliegt (seit wann, wie breit, in welchem Rahmen). Misst NICHT, ob es '
             + 'wirkt - Aderlass haette hier eine 10.'
  },
  eintraege
};

fs.writeFileSync(ZIEL, JSON.stringify(aus, null, 1) + '\n');
const mitBericht = eintraege.filter(e => e.berichtslage).length;
console.log(`${eintraege.length} Eintraege, ${mitBericht} mit Berichtslage, Stand ${heute}`);
if (fehlend.length) console.log('ohne Karte (Name = id):', fehlend.join(', '));
