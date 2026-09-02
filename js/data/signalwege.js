// ============================================================
// Signalwege-Atlas – Daten, Ansicht & Karten-Integration
// Biohacking Kompakt · erstellt August 2026
// dir: up (aktiviert) / down (hemmt) / mod (moduliert)
// ev: 2 = gut belegt ● · 1 = moderat ◐ · 0 = experimentell ○
// ============================================================

const SW_PATHWAYS = [
 {id:"mtor", name:"mTOR", sub:"Wachstum & Aufbau",
  fn:"Der Bau-Meister der Zelle: integriert Nährstoff- und Wachstumssignale und schaltet zwischen Aufbau (Muskeln!) und Recycling um.",
  desc:"mTOR ist der zentrale Nährstoffsensor. Aktiv = Proteinsynthese, Muskelaufbau, Zellwachstum. Chronisch überaktiv gilt er als Alterungstreiber; periodisch gedrosselt (Fasten, Rapamycin) startet die Zelle ihr Recycling. Die Kunst ist der Wechsel: anabole Fenster fürs Training, katabole Pausen für die Instandhaltung."},
 {id:"ampk", name:"AMPK", sub:"Energie-Sensor",
  fn:"Der Tankwart: springt bei Energiemangel an, kurbelt Fettverbrennung und Glukoseaufnahme an und bremst mTOR.",
  desc:"AMPK misst, wie leer der Zell-Akku ist (AMP/ATP-Verhältnis). Aktiviert schaltet es auf Effizienz: mehr Fettoxidation, mehr Glukoseaufnahme in den Muskel, Start der Mitochondrien-Neubildung. Der Gegenspieler von mTOR und einer der beiden großen Longevity-Schalter."},
 {id:"sirt", name:"Sirtuine / NAD⁺", sub:"Reparatur-Dirigenten",
  fn:"NAD-abhängige Enzyme, die Stoffwechsel, DNA-Reparatur und Entzündung koppeln – der Treibstoff dafür sinkt im Alter.",
  desc:"Die sieben Sirtuine steuern Genexpression, DNA-Reparatur und Mitochondrien-Funktion. Sie verbrauchen NAD⁺ – dessen Spiegel mit dem Alter fällt. NAD-Vorstufen füllen den Tank, Fasten und Training erhöhen die Nachfrage-Signale. Resveratrol war der berühmte (gescheiterte) direkte Aktivator – Folge 86."},
 {id:"auto", name:"Autophagie & Mitophagie", sub:"Recycling-System",
  fn:"Die Müllabfuhr der Zelle: zerlegt defekte Proteine und Kraftwerke und gewinnt Baustoffe zurück.",
  desc:"Autophagie (von mTOR gebremst, von AMPK gefördert) recycelt Zellbestandteile; die Mitophagie (PINK1/Parkin) sortiert kaputte Mitochondrien aus. Beide erlahmen im Alter. Fasten ist der stärkste natürliche Auslöser, Urolithin A der spezifischste Kapsel-Kandidat (F78), IHHT der Geräte-Weg (F71)."},
 {id:"ins", name:"Insulin / IGF-1", sub:"Zucker & Wachstum (PI3K-AKT)",
  fn:"Die Verteil-Zentrale für Glukose und der zweite große Wachstumskanal – Sensitivität ist hier die Währung.",
  desc:"Insulin und IGF-1 aktivieren über PI3K/AKT Wachstum und Glukoseaufnahme. Gute Insulinsensitivität = stabile Kurven, gesunde Gefäße; chronisch hohe Spiegel treiben Alterung. Training und Muskelmasse sind die stärksten Sensitivierer; die GH-Achse erhöht IGF-1 – der ewige Zielkonflikt zwischen Aufbau und Langlebigkeit."},
 {id:"glp1", name:"GLP-1 / Inkretine", sub:"Sättigung & Stoffwechsel",
  fn:"Darmhormone, die Appetit, Magenentleerung und Insulin koordinieren – Schauplatz der Abnehm-Revolution.",
  desc:"GLP-1, GIP und Amylin melden dem Gehirn Sättigung und takten die Insulinantwort. Die Wirkstoff-Generationen: Semaglutid (GLP-1), Tirzepatid (+GIP), Retatrutide (+Glukagon), Orforglipron (Tablette), Amycretin (+Amylin, F82). Natürliche Trigger: Protein, Ballaststoffe, Bewegung."},
 {id:"hif", name:"HIF-1α", sub:"Sauerstoff-Sensor",
  fn:"Der Höhen-Schalter: reagiert auf Sauerstoffmangel mit neuen Gefäßen, mehr roten Blutkörperchen und Mitochondrien-Umbau.",
  desc:"HIF-1α wird bei Sauerstoffmangel stabilisiert (Nobelpreis 2019) und startet das Anpassungsprogramm: Erythropoetin, Angiogenese, effizientere Energiegewinnung. IHHT reizt ihn im Wechseltakt (F71); HBOT nutzt das hyperoxisch-hypoxische Paradox (F70)."},
 {id:"nrf2", name:"Nrf2 / Redox", sub:"Antioxidative Abwehr",
  fn:"Der hauseigene Rostschutz: aktiviert hunderte Schutz- und Entgiftungsgene – am besten durch milde Reize.",
  desc:"Nrf2 ist der Hauptschalter der zellulären Schutzantwort (u.a. Glutathion-Synthese). Hormetische Reize – Kälte, Hitze, Training, Pflanzenstoffe – aktivieren ihn; hochdosierte Dauer-Antioxidantien können Trainingsreize dagegen dämpfen. Glutathion ist der wichtigste Puffer (F65), Ergothionein der importierte Langzeit-Schutz (F85)."},
 {id:"nfkb", name:"NF-κB", sub:"Entzündung / Inflammaging",
  fn:"Der Feueralarm des Immunsystems – überlebenswichtig akut, alternstreibend chronisch.",
  desc:"NF-κB startet die Entzündungsantwort. Mit dem Alter steht der Schalter zunehmend auf Dauer-an – befeuert von Bauchfett, seneszenten Zellen (SASP) und schlechtem Schlaf. Fast alle Longevity-Basics wirken hier dämpfend; Omega-3 liefert zusätzlich die auflösenden Mediatoren (Resolvine)."},
 {id:"hsp", name:"Hitzeschock-Response", sub:"Protein-Qualitätskontrolle (HSF1/HSPs)",
  fn:"Die Faltungs-Helfer: Hitzeschock-Proteine reparieren fehlgefaltete Eiweiße – trainierbar durch Wärme und Kälte.",
  desc:"Bei Hitzestress aktiviert HSF1 die Chaperone (HSP70 & Co.), die verklumpte Proteine wieder in Form bringen – ein Kernmechanismus der finnischen Sauna-Epidemiologie (F73). Auch Kälte und Training induzieren eigene Schutzprotein-Familien."},
 {id:"sen", name:"Seneszenz & SASP", sub:"Zombie-Zellen",
  fn:"Alterszellen, die nicht sterben wollen und die Nachbarschaft mit Entzündungssignalen fluten – Ziel der Senolytika.",
  desc:"Seneszente Zellen überleben über BCL-2-Schutzschilde und sondern den entzündlichen SASP-Cocktail ab. Senolytika kippen den Schutzschild (F83); das Immunsystem – gestärkt durch Training, Schlaf und Thermo-Reize – ist der natürliche Zombie-Jäger."},
 {id:"no", name:"NO – cGMP", sub:"Gefäßweite & Durchblutung",
  fn:"Stickstoffmonoxid entspannt die Gefäßmuskulatur – der Signalweg hinter Viagra, Rotlicht-Glow und Trainings-Pump.",
  desc:"NO aktiviert cGMP, die Gefäße weiten sich. PDE5-Hemmer (Sildenafil F44, Tadalafil F21) verlängern das Signal; Training verbessert die endotheliale NO-Produktion dauerhaft; Rotlicht setzt NO aus Speichern frei; Wärme-Kälte-Kontrast ist Gefäß-Gymnastik."},
 {id:"gh", name:"Wachstumshormon-Achse", sub:"GHRH → GH → IGF-1",
  fn:"Die nächtliche Aufbau-Achse: Hypothalamus → Hypophyse → Leber. Spielwiese der halben Peptid-Szene.",
  desc:"GHRH-Analoga (CJC-1295, Sermorelin, Tesamorelin) und Ghrelin-Mimetika (Ipamorelin, MK-677, GHRPs) stimulieren die GH-Ausschüttung; HGH ersetzt sie direkt; IGF-1 LR3 überspringt die Achse. Natürlicher Haupttrigger: Tiefschlaf und Fasten. Kehrseite: Insulinresistenz und der Wachstums-Zielkonflikt (F87)."},
 {id:"mc", name:"Melanocortin-System", sub:"Pigment, Libido, Entzündung",
  fn:"Eine Rezeptorfamilie, fünf Jobs: Bräunung (MC1R), Entzündungsdämpfung, Appetit und Libido (MC4R).",
  desc:"Die MC-Rezeptoren erklären, warum ein Bräunungspeptid auch Libido und Appetit beeinflusst: Melanotan 1/2 zielen auf MC1R, PT-141 auf MC4R, KPV nutzt den entzündungsdämpfenden Arm ohne Pigment-Effekt. Ein Lehrstück für Nebenwirkungen über Nachbar-Rezeptoren."},
 {id:"circ", name:"Zirkadianes System", sub:"Innere Uhr",
  fn:"Der Taktgeber über allem: Licht, Melatonin und Essenszeiten stellen die Uhren in jeder Zelle.",
  desc:"Die Hauptuhr im Hypothalamus wird von Licht gestellt und synchronisiert periphere Uhren über Melatonin, Cortisol und Körpertemperatur. Fast jeder Signalweg hat eine Tageszeit – deshalb wirken Morgenlicht, Essens-Timing und Schlafhygiene (F62) wie Meta-Interventionen."},
 {id:"hpa", name:"HPA-Achse & Vagus", sub:"Stress-System",
  fn:"Gaspedal (Cortisol, Sympathikus) und Bremse (Vagusnerv) des Organismus – ablesbar an der HRV.",
  desc:"Die Stressachse und ihr Gegenspieler Vagusnerv steuern Herzfrequenz, Verdauung und Immunbalance. Die HRV (F72) ist das Fenster in dieses System. Adaptogene dämpfen die Cortisol-Antwort, Atem- und Thermo-Reize trainieren die Bremse, GABA-Modulatoren beruhigen zentral."},
 {id:"rep", name:"Gewebereparatur & Angiogenese", sub:"Heilung & Umbau",
  fn:"VEGF, Fibroblasten, Kollagen-Synthese: das Baustellen-Management nach Verletzung und Training.",
  desc:"Wachstumsfaktoren wie VEGF steuern Gefäßneubildung und Gewebeumbau – hier setzen die Reparatur-Peptide an: BPC-157 und TB-500 (Tiermodelle), GHK-Cu (Haut-Daten), PDA. Kollagenpeptide liefern Bausteine plus Synthese-Signal (F60); wIRA, Rotlicht und HBOT sind die klinisch belegten Geräte-Helfer der Wundheilung. Achtung: Angiogenese-Förderung ist bei Krebs kontraindiziert (F87)."},
 {id:"epi", name:"Epigenetik & Telomere", sub:"Das Alters-Gedächtnis",
  fn:"Methylierungsmuster und Chromosomen-Schutzkappen – hier ticken die biologischen Uhren aus Folge 81.",
  desc:"TET-Enzyme radieren Methylierungs-Markierungen (Co-Faktor: Alpha-Ketoglutarat!), Telomerase schützt die Chromosomenenden. Epigenetische Uhren (Horvath, GrimAge, DunedinPACE) lesen dieses System aus. Direkte Eingriffe sind jung – Lifestyle bleibt der stärkste belegte Hebel."}
];

// entryId (aus SUPPLEMENTS / EXPERIMENTAL / KHAVINSON / THERAPIES) → [[pathwayId, dir, ev], …]
const SW_MAP = {
 // ---------- Supplements ----------
 "omega-3":[["nfkb","down",2],["no","up",2],["epi","mod",1]],
 "vitamin-d3":[["nfkb","mod",1],["epi","mod",1]],
 "melatonin":[["circ","up",2],["nrf2","mod",1]],
 "berberin":[["ampk","up",1],["ins","mod",1]],
 "spermidin":[["auto","up",1],["sirt","mod",0]],
 "resveratrol":[["sirt","mod",0],["nrf2","mod",0]],
 "nmn":[["sirt","up",1]],
 "nicotinamid-ribosid":[["sirt","up",1]],
 "fisetin":[["sen","down",0],["nfkb","down",1]],
 "quercetin":[["sen","down",1],["nfkb","down",1]],
 "urolithin-a":[["auto","up",1]],
 "ca-akg":[["epi","mod",0],["mtor","down",0],["auto","mod",0]],
 "ergothionein":[["nrf2","up",1]],
 "glutathion":[["nrf2","up",1]],
 "glynac":[["nrf2","up",1]],
 "nac":[["nrf2","up",1]],
 "taurin":[["nrf2","mod",1],["nfkb","down",1],["hpa","mod",1]],
 "ashwagandha":[["hpa","down",2],["nfkb","down",1]],
 "kollagen":[["rep","up",1]],
 "glycin":[["rep","up",1],["circ","mod",1]],
 "whey":[["mtor","up",2],["glp1","up",1]],
 "kreatin":[["rep","mod",1],["ins","mod",1]],
 "koffein":[["circ","mod",2],["ampk","mod",1]],
 "magnesium-l-threonat":[["hpa","mod",1]],
 "magnesium":[["hpa","mod",1],["ins","mod",1]],
 "citrullin":[["no","up",2]],
 "rote-bete-nitrat":[["no","up",2]],
 "sulforaphan":[["nrf2","up",2]],
 "pterostilben":[["sirt","mod",0],["nrf2","mod",0]],
 "apigenin":[["circ","mod",1],["hpa","down",1]],
 "l-theanin":[["hpa","down",2]],
 "gaba":[["hpa","down",1]],
 "exogene-ketone":[["ampk","mod",1]],
 "kurkuma":[["nfkb","down",1],["nrf2","up",1]],
 "astaxanthin":[["nrf2","up",1]],
 "alpha-liponsaeure":[["nrf2","up",1],["ampk","mod",1]],
 // ---------- Peptide & Wirkstoffe (EXPERIMENTAL) ----------
 "semaglutide":[["glp1","up",2],["ins","mod",2]],
 "tirzepatide":[["glp1","up",2],["ins","mod",2]],
 "retatrutide":[["glp1","up",1]],
 "orforglipron":[["glp1","up",1]],
 "amycretin":[["glp1","up",1]],
 "cagrilintide":[["glp1","up",1]],
 "survodutide":[["glp1","up",1]],
 "mazdutide":[["glp1","up",1]],
 "maritide":[["glp1","up",1]],
 "hgh":[["gh","up",2],["ins","up",1],["mtor","up",1]],
 "mk-677":[["gh","up",1],["ins","up",1]],
 "cjc-ipamorelin":[["gh","up",1]],
 "cjc-1295-dac":[["gh","up",1]],
 "mod-grf-1-29":[["gh","up",1]],
 "sermorelin":[["gh","up",2]],
 "tesamorelin":[["gh","up",2]],
 "ghrp-2":[["gh","up",1]],
 "ghrp-6":[["gh","up",1]],
 "hexarelin":[["gh","up",1]],
 "igf-1-lr3":[["ins","up",0],["mtor","up",0],["gh","mod",0]],
 "rad140":[["mtor","up",0]],
 "testosteron":[["mtor","up",1]],
 "rapamycin":[["mtor","down",1],["auto","up",1]],
 "metformin":[["ampk","up",2],["ins","mod",2]],
 "acarbose":[["ins","mod",2],["glp1","mod",1]],
 "canagliflozin":[["ins","mod",2],["ampk","mod",1]],
 "bpc-157":[["rep","up",0]],
 "tb-500":[["rep","up",0]],
 "thymosin-beta-4":[["rep","up",0]],
 "pentadeca-arginate":[["rep","up",0]],
 "glow-stack":[["rep","up",0]],
 "klow-stack":[["rep","up",0],["nfkb","down",0]],
 "ghk-cu":[["rep","up",1],["epi","mod",0]],
 "pt-141":[["mc","up",2]],
 "melanotan-1":[["mc","up",1]],
 "melanotan-2":[["mc","up",0]],
 "kpv":[["mc","mod",0],["nfkb","down",0]],
 "tadalafil":[["no","up",2]],
 "sildenafil":[["no","up",2]],
 "epitalon":[["epi","mod",0],["circ","mod",0]],
 "thymalin":[["epi","mod",0],["sen","mod",0]],
 "selank":[["hpa","mod",0]],
 "semax":[["hpa","mod",0]],
 "dsip":[["circ","mod",0],["hpa","down",0]],
 "oxytocin":[["hpa","down",1]],
 "ss-31":[["auto","mod",0],["nrf2","mod",0]],
 "mots-c":[["ampk","up",0]],
 "humanin":[["ins","mod",0]],
 "slu-pp-332":[["ampk","up",0]],
 "5-amino-1mq":[["sirt","up",0]],
 "methylene-blue":[["nrf2","mod",0]],
 "senolytic-dq":[["sen","down",1],["nfkb","down",1]],
 "foxo4-dri":[["sen","down",0]],
 "thymosin-alpha-1":[["nfkb","mod",1]],
 "ll-37":[["nfkb","mod",0]],
 "aod-9604":[["gh","mod",0]],
 // ---------- Khavinson ----------
 "kh-pinealon":[["circ","mod",0]],
 // ---------- Behandlungen ----------
 "ihht":[["hif","up",1],["auto","up",1],["ampk","mod",1]],
 "hbot":[["hif","mod",1],["rep","up",2],["no","mod",1]],
 "rotlicht-pbm":[["no","up",1],["nrf2","mod",1],["rep","up",1],["circ","mod",1]],
 "infrarot-a":[["hsp","up",1],["rep","up",2]],
 "hyperthermie":[["hsp","up",1],["nfkb","mod",1],["no","up",1]],
 "sauna-kaelte":[["hsp","up",2],["nrf2","up",1],["no","up",2],["hpa","mod",1]],
 "cgm":[["ins","mod",1]],
 "vns-analyse":[["hpa","mod",1]],
 "vagus-stimulation":[["hpa","mod",1],["nfkb","down",1]],
 "nad-infusion":[["sirt","up",0]],
 "floating":[["hpa","down",1]],
 "inuspherese":[["nfkb","mod",0]],
 "tpe-plasmaaustausch":[["nfkb","mod",0],["sen","mod",0]],
 "bfr-training":[["mtor","up",1],["gh","up",1]],
 "ems":[["mtor","up",1]],
 "vibrationstraining":[["rep","mod",1]],
 "stammzelltherapie":[["rep","up",0]],
 "exosomen":[["rep","up",0]],
 "prp":[["rep","up",1]]
};

// ============ Rendering & Integration ============
(function(){
  const DIR = {up:"↑", down:"↓", mod:"⇄"};
  const EV = ["○","◐","●"];
  const EVTXT = ["experimentell","moderat belegt","gut belegt"];

  function escSW(s){ return String(s||'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

  // Nachschlage-Index: entryId → Anzeigename + Kategorie
  function entryName(id){
    const pools = [
      [typeof SUPPLEMENTS!=='undefined'?SUPPLEMENTS:[], 'Supplement'],
      [typeof EXPERIMENTAL!=='undefined'?EXPERIMENTAL:[], 'Peptid/Wirkstoff'],
      [typeof KHAVINSON!=='undefined'?KHAVINSON:[], 'Khavinson-Peptid'],
      [typeof THERAPIES!=='undefined'?THERAPIES:[], 'Behandlung']
    ];
    for (const [arr,cat] of pools){
      const m = arr.find(e => e.id === id);
      if (m) return {name: m.name, cat};
    }
    return null;
  }

  // Style einmalig injizieren
  const st = document.createElement('style');
  st.textContent = `
    .sw-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:14px}
    .sw-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:16px 18px;cursor:pointer}
    .sw-card.sw-open{border-color:#2f8b6a}
    .sw-card h3{margin:0;display:flex;justify-content:space-between;gap:8px;align-items:baseline;font-family:'Space Grotesk',Inter,sans-serif}
    .sw-card h3 .sw-sub{font-size:.72rem;color:#7ac9a5;white-space:nowrap;font-weight:600}
    .sw-fn{font-size:.85rem;opacity:.8;margin:6px 0 10px}
    .sw-desc{display:none;font-size:.85rem;opacity:.85;border-left:3px solid #2f8b6a;padding-left:10px;margin:0 0 12px}
    .sw-card.sw-open .sw-desc{display:block}
    .sw-ivs{display:flex;flex-wrap:wrap;gap:5px}
    .sw-iv{font-size:.75rem;padding:3px 9px;border-radius:12px;border:1px solid rgba(255,255,255,.25);white-space:nowrap}
    .sw-iv .sw-dir{font-weight:700;color:#7ac9a5;margin-right:3px}
    .sw-iv .sw-ev{opacity:.55;font-size:.68rem;margin-left:3px}
    .sw-legend{font-size:.78rem;opacity:.7;margin:10px 0 16px}
    .sw-gfx{float:right;margin-left:8px;background:rgba(57,135,229,.15);border:1px solid rgba(57,135,229,.5);color:#9cc4f0;border-radius:8px;padding:3px 10px;font-size:.78rem;cursor:pointer;font-family:inherit}
    .sw-gfx:hover{background:rgba(57,135,229,.3);color:#fff}
    .sw-entry-block{margin-top:14px;padding:12px 14px;border:1px solid rgba(122,201,165,.35);border-radius:12px;background:rgba(47,139,106,.08)}
    .sw-entry-block .sw-label{font-weight:600;font-size:.85rem;margin-bottom:8px;display:block}
    .sw-chip{display:inline-block;font-size:.76rem;padding:3px 10px;margin:2px 3px 2px 0;border-radius:12px;border:1px solid rgba(122,201,165,.5);cursor:pointer;text-decoration:none;color:inherit}
    .sw-chip:hover{background:rgba(47,139,106,.2)}
    .sw-chip .sw-dir{font-weight:700;color:#7ac9a5;margin-right:3px}
  `;
  document.head.appendChild(st);

  // ============ Signalwege-Ansicht rendern ============
  let swFocus = null; // pathwayId, das geöffnet/gescrollt werden soll
  const openSet = new Set();

  window.swGoto = function(pwId){
    swFocus = pwId; openSet.add(pwId);
    location.hash = '#signalwege';
    renderSW();
    setTimeout(() => {
      const el = document.getElementById('swcard-' + pwId);
      if (el) el.scrollIntoView({behavior:'smooth', block:'center'});
    }, 120);
  };

  function usedBy(pwId){
    const out = [];
    for (const [entryId, list] of Object.entries(SW_MAP)){
      for (const [pid, dir, ev] of list){
        if (pid === pwId){
          const meta = entryName(entryId);
          if (meta) out.push({id: entryId, name: meta.name, cat: meta.cat, dir, ev});
        }
      }
    }
    out.sort((a,b) => (b.ev - a.ev) || a.name.localeCompare(b.name, 'de'));
    return out;
  }

  function renderSW(){
    const grid = document.getElementById('sw-grid');
    if (!grid) return;
    grid.innerHTML = SW_PATHWAYS.map(p => {
      const ivs = usedBy(p.id).map(iv =>
        `<span class="sw-iv" title="${escSW(iv.cat)} · Evidenz: ${EVTXT[iv.ev]}"><span class="sw-dir">${DIR[iv.dir]}</span>${escSW(iv.name)}<span class="sw-ev">${EV[iv.ev]}</span></span>`
      ).join('');
      return `<div class="sw-card${openSet.has(p.id) ? ' sw-open' : ''}" id="swcard-${p.id}" data-pw="${p.id}">
        <h3>${escSW(p.name)}<span class="sw-sub">${escSW(p.sub)}</span><button class="sw-gfx" onclick="event.stopPropagation();swShowDiagram('${p.id}','${escSW(p.name)}')" title="Signalweg als Grafik öffnen">🔬 Grafik</button></h3>
        <div class="sw-fn">${escSW(p.fn)}</div>
        <div class="sw-desc">${escSW(p.desc)}</div>
        <div class="sw-ivs">${ivs}</div>
      </div>`;
    }).join('');
    grid.querySelectorAll('.sw-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.pw;
        openSet.has(id) ? openSet.delete(id) : openSet.add(id);
        card.classList.toggle('sw-open');
      });
    });
  }

  // ============ Chips in Detail-Karten injizieren ============
  function chipsFor(entryId){
    const list = SW_MAP[entryId];
    if (!list || !list.length) return '';
    const chips = list.map(([pid, dir, ev]) => {
      const pw = SW_PATHWAYS.find(p => p.id === pid);
      if (!pw) return '';
      return `<a class="sw-chip" href="#signalwege" onclick="event.stopPropagation();swGoto('${pid}')" title="${escSW(pw.fn)} · Evidenz: ${EVTXT[ev]}"><span class="sw-dir">${DIR[dir]}</span>${escSW(pw.name)} ${EV[ev]}</a>`;
    }).join('');
    return `<div class="sw-entry-block"><span class="sw-label">🧬 Signalwege – wo dieser Wirkstoff ansetzt</span>${chips}<div class="sw-legend" style="margin:8px 0 0">↑ aktiviert · ↓ hemmt · ⇄ moduliert · ● gut belegt ◐ moderat ○ experimentell — Chip antippen für Details.</div></div>`;
  }

  function decorateCards(root){
    if (!root) return;
    // exp-/th-/kh-Karten: id = expcard-<id> / thcard-<id> / khcard-<id>
    root.querySelectorAll('article[id^="expcard-"],article[id^="thcard-"],article[id^="khcard-"]').forEach(card => {
      if (card.querySelector('.sw-entry-block')) return;
      const entryId = card.id.replace(/^(expcard|thcard|khcard)-/, '');
      const html = chipsFor(entryId);
      if (!html) return;
      const anchor = card.querySelector('.exp-status') || card.querySelector('.exp-short') || card.lastElementChild;
      if (anchor) anchor.insertAdjacentHTML('afterend', html);
    });
    // Supplement-Detail: Name → id auflösen
    root.querySelectorAll('article.supp-detail').forEach(card => {
      if (card.querySelector('.sw-entry-block')) return;
      const h2 = card.querySelector('h2');
      if (!h2 || typeof SUPPLEMENTS === 'undefined') return;
      const s = SUPPLEMENTS.find(x => x.name === h2.textContent.trim());
      if (!s) return;
      const html = chipsFor(s.id);
      if (!html) return;
      const head = card.querySelector('.supp-detail-head');
      if (head) head.insertAdjacentHTML('afterend', html);
    });
  }

  // Beobachte die Grids/Detailbereiche – App rendert dynamisch
  function observe(){
    ['exp-grid','th-grid','khavinson-grid','supplement-detail'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      decorateCards(el);
      new MutationObserver(() => decorateCards(el)).observe(el, {childList: true});
    });
  }

  // ============ Boot ============
  function boot(){
    renderSW();
    observe();
    if (location.hash === '#signalwege') renderSW();
    window.addEventListener('hashchange', () => {
      if (location.hash === '#signalwege') renderSW();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();


// ============================================================
// Signalweg-Diagramme (SVG) – klickbare Pathway-Grafiken
// Knoten: [id, "Label|Zeile2", x, y, typ, breite?]
//   typ: t=Trigger/Input, p=Protein/Enzym, x=Prozess, o=Outcome, n=Hinweis
// Kanten: [von, nach, art]  art: a=aktiviert(Pfeil), i=hemmt(⊥), d=indirekt(gestrichelt)
// Badges: [nodeId, [["Wirkstoff","sup|pep|anw","up|down"]...]]
// ============================================================
const SW_DIAGRAMS = {
 mtor:{w:960,h:620,membrane:120,nucleus:null,
  nodes:[["ins","Insulin / IGF-1",70,60,"t"],["aa","Aminosäuren|(v.a. Leucin)",320,60,"t"],["en","Energiestatus|(ATP / AMP)",560,60,"t"],["tr","Krafttraining|(mech. Reiz)",790,60,"t"],
   ["rez","IGF-1- / Insulin-Rezeptor",70,170,"p",190],["pi3k","PI3K → AKT",70,260,"p"],["ampk","AMPK",560,180,"p",110],
   ["mtorc","mTORC1",380,330,"p",130],["s6k","S6K / 4E-BP1",200,430,"p"],["ulk","ULK1|(Autophagie-Start)",620,430,"p"],
   ["grow","Proteinsynthese · Muskelaufbau|Zellwachstum",180,530,"o",260],["auto","Autophagie / Recycling",620,530,"x",200]],
  edges:[["ins","rez","a"],["rez","pi3k","a"],["pi3k","mtorc","a"],["aa","mtorc","a"],["tr","mtorc","d"],["en","ampk","a"],["ampk","mtorc","i"],["mtorc","s6k","a"],["s6k","grow","a"],["mtorc","ulk","i"],["ulk","auto","a"]],
  badges:[["aa",[["Whey / EAAs","sup","up"]]],["mtorc",[["Rapamycin","pep","down"],["RAD140 / Testosteron","pep","up"],["Ca-AKG","sup","down"]]],["ampk",[["Fasten","anw","up"]]],["ins",[["HGH / IGF-1 LR3","pep","up"]]],["tr",[["Krafttraining","anw","up"]]]]},
 ampk:{w:960,h:600,membrane:null,
  nodes:[["def","Energiemangel|(AMP↑ / ATP↓)",120,60,"t"],["ex","Training|(Zone 2, Intervalle)",400,60,"t"],["cold","Kälte-Reiz",640,60,"t"],["lkb","LKB1 / CaMKK2",120,170,"p"],
   ["ampk","AMPK",400,230,"p",130],
   ["mtor","mTORC1",120,330,"p",110],["pgc","PGC-1α",400,330,"p",110],["glut","GLUT4",640,330,"p",110],["acc","ACC",840,330,"p",90],
   ["autox","Autophagie ↑",120,430,"x"],["mito","Mitochondrien-|Neubildung",400,440,"o",170],["gluk","Glukose-Aufnahme|(Muskel)",640,440,"o",160],["fett","Fett-Oxidation ↑",840,430,"x",140]],
  edges:[["def","lkb","a"],["lkb","ampk","a"],["ex","ampk","a"],["cold","ampk","d"],["ampk","mtor","i"],["mtor","autox","i"],["ampk","pgc","a"],["pgc","mito","a"],["ampk","glut","a"],["glut","gluk","a"],["ampk","acc","i"],["acc","fett","i"]],
  badges:[["ampk",[["Metformin","pep","up"],["Berberin","sup","up"],["MOTS-c","pep","up"]]],["pgc",[["SLU-PP-332","pep","up"]]],["ex",[["Zone-2-Training","anw","up"]]],["def",[["Fasten","anw","up"]]]]},
 sirt:{w:960,h:600,membrane:null,
  nodes:[["prec","NAD⁺-Vorstufen|(NMN / NR / Niacin)",120,60,"t"],["salv","Salvage-Weg|(NAMPT)",120,170,"p"],["nad","NAD⁺-Pool",400,170,"p",130],["cons","NAD⁺-Verbraucher|(CD38, PARP – steigen im Alter)",700,170,"p",230],
   ["sirt1","SIRT1",250,300,"p",100],["sirt3","SIRT3|(Mitochondrium)",520,300,"p",150],
   ["pgc","PGC-1α",130,410,"p",110],["foxo","FOXO",370,410,"p",100],["p53","p53-Regulation",600,410,"p",150],
   ["mito","Mitochondrien & Stoffwechsel",130,510,"o",230],["stress","Stress-Abwehr · DNA-Reparatur",480,510,"o",240]],
  edges:[["prec","salv","a"],["salv","nad","a"],["cons","nad","i"],["nad","sirt1","a"],["nad","sirt3","a"],["sirt1","pgc","a"],["sirt1","foxo","a"],["sirt1","p53","a"],["pgc","mito","a"],["foxo","stress","a"],["sirt3","mito","a"]],
  badges:[["prec",[["NMN / NR","sup","up"],["NAD-Infusion","anw","up"]]],["nad",[["Fasten / Training","anw","up"],["5-Amino-1MQ","pep","up"]]],["sirt1",[["Resveratrol (umstritten)","sup","up"]]]]},
 auto:{w:960,h:620,membrane:null,
  nodes:[["fast","Nährstoffmangel|(Fasten)",120,60,"t"],["ampk","AMPK",120,170,"p",110],["mtor","mTORC1|(Nährstoff-Sensor)",400,60,"p",180],
   ["ulk","ULK1-Komplex",270,260,"p",150],["phag","Phagophor → Autophagosom",270,360,"x",230],["lys","+ Lysosom → Abbau",270,450,"x",190],
   ["rec","Recycling|(Aminosäuren, Bausteine)",270,540,"o",230],
   ["dam","beschädigtes|Mitochondrium",700,260,"t",160],["pink","PINK1 / Parkin",700,360,"p",150],["mitoph","Mitophagie",700,450,"x",130]],
  edges:[["fast","ampk","a"],["ampk","ulk","a"],["mtor","ulk","i"],["ulk","phag","a"],["phag","lys","a"],["lys","rec","a"],["dam","pink","a"],["pink","mitoph","a"],["mitoph","rec","a"]],
  badges:[["fast",[["Fasten 16:8+","anw","up"]]],["ulk",[["Spermidin","sup","up"],["Rapamycin","pep","up"]]],["pink",[["Urolithin A","sup","up"],["IHHT","anw","up"]]],["mtor",[["Protein-Mahlzeit","sup","up"]]]]},
 ins:{w:960,h:600,membrane:130,
  nodes:[["ins","Insulin",150,60,"t",110],["igf","IGF-1",400,60,"t",100],
   ["rez","Insulin- / IGF-1-Rezeptor|(Zellmembran)",260,175,"p",240],["irs","IRS-1 → PI3K",260,270,"p",160],["akt","AKT",260,350,"p",90],
   ["glut","GLUT4 an die|Membran",90,450,"p",150],["mtor","mTOR|(Wachstum)",420,450,"p",130],["foxo","FOXO",620,350,"p",100],
   ["gluk","Glukose-Aufnahme",90,540,"o",170],["sens","Insulin-Sensitivität|= Muskelmasse × Aktivität",700,140,"n",230]],
  edges:[["ins","rez","a"],["igf","rez","a"],["rez","irs","a"],["irs","akt","a"],["akt","glut","a"],["glut","gluk","a"],["akt","mtor","a"],["akt","foxo","i"]],
  badges:[["sens",[["Zone 2 + Kraft","anw","up"],["CGM (Messung)","anw","up"]]],["irs",[["Metformin / Berberin","sup","up"]]],["igf",[["HGH / MK-677","pep","up"],["IGF-1 LR3","pep","up"]]]]},
 glp1:{w:960,h:620,membrane:null,
  nodes:[["meal","Mahlzeit|(Protein, Ballaststoffe)",120,60,"t",190],["lcell","Darm: L- / K-Zellen",120,170,"p",180],["glp","GLP-1 · GIP",120,270,"p",140],["amy","Amylin|(β-Zelle, mit Insulin)",680,170,"p",180],
   ["dpp","DPP-4|(baut GLP-1 ab)",370,180,"p",150],
   ["panc","Pankreas:|Insulin ↑ · Glukagon ↓",380,340,"p",190],["stom","Magen:|Entleerung ↓",620,340,"p",140],["brain","Gehirn:|Sättigung ↑",820,340,"p",130],
   ["out","Stabiler Blutzucker · weniger Appetit|Gewichtsabnahme",420,500,"o",320]],
  edges:[["meal","lcell","a"],["lcell","glp","a"],["dpp","glp","i"],["glp","panc","a"],["glp","stom","a"],["glp","brain","a"],["amy","stom","a"],["amy","brain","a"],["panc","out","a"],["stom","out","a"],["brain","out","a"]],
  badges:[["glp",[["Semaglutid","pep","up"],["Tirzepatid (+GIP)","pep","up"],["Orforglipron (oral)","pep","up"]]],["amy",[["Amycretin (GLP-1+Amylin)","pep","up"],["Cagrilintid","pep","up"]]],["meal",[["Protein zuerst","sup","up"]]]]},
 hif:{w:960,h:600,membrane:null,
  nodes:[["o2","Normaler O₂",150,60,"t",130],["hyp","O₂-Mangel|(Höhe, Intervall-Hypoxie)",550,60,"t",220],
   ["phd","PHD-Enzyme|(brauchen O₂)",150,180,"p",160],["vhl","VHL → Abbau|von HIF-1α",150,290,"p",160],
   ["hif","HIF-1α stabilisiert",550,220,"p",180],["dimer","+ HIF-1β → Zellkern",550,330,"p",190],
   ["genes","Zielgene (HRE)",550,430,"x",160],["epo","EPO ↑|rote Blutkörperchen",300,530,"o",180],["vegf","VEGF ↑|neue Gefäße",550,530,"o",150],["glyk","Glykolyse-|Anpassung",780,530,"o",140]],
  edges:[["o2","phd","a"],["phd","vhl","a"],["vhl","hif","i"],["hyp","phd","i"],["hyp","hif","a"],["hif","dimer","a"],["dimer","genes","a"],["genes","epo","a"],["genes","vegf","a"],["genes","glyk","a"]],
  badges:[["hyp",[["IHHT","anw","up"],["Zone 2 / Höhe","anw","up"]]],["hif",[["HBOT (Paradox)","anw","up"]]]]},
 nrf2:{w:960,h:600,membrane:null,
  nodes:[["ros","Milder oxidativer Stress|(Hormesis-Reiz)",130,60,"t",220],["el","Elektrophile|(z.B. Sulforaphan)",520,60,"t",180],
   ["keap","KEAP1|(hält Nrf2 fest → Abbau)",130,190,"p",210],["nrf","Nrf2 freigesetzt",450,250,"p",160],["nuc","Zellkern: ARE-Gene",450,360,"p",180],
   ["gsh","Glutathion-|Synthese ↑",220,480,"o",150],["ho1","HO-1 & Entgiftungs-|Enzyme ↑",470,480,"o",190],["prot","Zellschutz ·|Redox-Balance",720,480,"o",160]],
  edges:[["ros","keap","i"],["el","keap","i"],["keap","nrf","i"],["nrf","nuc","a"],["nuc","gsh","a"],["nuc","ho1","a"],["nuc","prot","a"]],
  badges:[["ros",[["Kälte / Sauna","anw","up"],["Training","anw","up"],["Rotlicht (mild)","anw","up"]]],["el",[["Sulforaphan","sup","up"]]],["gsh",[["GlyNAC / NAC","sup","up"],["Glutathion","sup","up"]]],["prot",[["Ergothionein (parallel)","sup","up"]]]]},
 nfkb:{w:960,h:620,membrane:130,
  nodes:[["tnf","TNF-α · IL-1",130,60,"t",140],["lps","LPS / DAMPs|(Darm, Zellstress)",380,60,"t",180],["visc","Bauchfett & SASP|(chronische Quellen)",680,60,"t",210],
   ["rez","Zytokin- / Toll-like-Rezeptoren",300,175,"p",250],["ikk","IKK-Komplex",300,270,"p",150],["ikb","IκB-Abbau|(gibt NF-κB frei)",300,360,"p",180],
   ["nfkb","NF-κB → Zellkern",300,450,"p",180],["genes","Entzündungsgene|(IL-6, TNF-α, COX-2)",300,540,"x",220],
   ["infl","Inflammaging|chronische Entzündung",700,450,"o",200],["res","Auflösung: Resolvine|(aus Omega-3)",560,240,"p",200]],
  edges:[["tnf","rez","a"],["lps","rez","a"],["rez","ikk","a"],["ikk","ikb","a"],["ikb","nfkb","a"],["nfkb","genes","a"],["genes","infl","a"],["visc","infl","a"],["res","infl","i"],["genes","visc","d"]],
  badges:[["ikk",[["Fisetin / Quercetin","sup","down"],["Curcumin","sup","down"]]],["res",[["Omega-3","sup","up"]]],["infl",[["Zone-2-Training","anw","down"],["Schlaf","anw","down"],["Alkohol","anw","up"]]]]},
 hsp:{w:960,h:560,membrane:null,
  nodes:[["heat","Hitze|(Sauna, Hyperthermie, wIRA)",130,60,"t",240],["cold2","Kälte-Kontrast",520,60,"t",160],["mis","Fehlgefaltete Proteine ↑",130,180,"x",210],
   ["hsf","HSF1 aktiviert|(Trimer → Zellkern)",380,260,"p",200],["hse","HSE-Gene",380,360,"p",130],
   ["hsp70","HSP70 / HSP90|(Chaperone)",200,460,"p",180],["fold","Proteine neu falten|· Aggregate lösen",480,460,"o",210],["proteo","Proteostase ·|zelluläre Fitness",740,460,"o",170]],
  edges:[["heat","mis","a"],["mis","hsf","a"],["cold2","hsf","d"],["hsf","hse","a"],["hse","hsp70","a"],["hsp70","fold","a"],["fold","proteo","a"]],
  badges:[["heat",[["Sauna 4–7×/Wo","anw","up"],["Ganzkörperhyperthermie","anw","up"],["Infrarot / wIRA","anw","up"]]],["cold2",[["Eisbaden","anw","up"]]]]},
 sen:{w:960,h:620,membrane:null,
  nodes:[["dna","DNA-Schäden",130,60,"t",150],["telo","Telomer-Verkürzung",380,60,"t",190],["stress","chron. Stress / ROS",660,60,"t",190],
   ["p53","p53 / p21",230,180,"p",130],["p16","p16INK4a",480,180,"p",130],["arrest","Zellzyklus-Arrest|→ seneszente Zelle",340,280,"x",220],
   ["bcl","BCL-2-Überlebens-|schild (Anti-Apoptose)",130,400,"p",200],["sasp","SASP-Sekretion|(IL-6, Proteasen)",480,400,"x",190],
   ["nachb","Nachbarzellen werden|„angesteckt“ · Inflammaging",480,520,"o",250],["imm","Immun-Clearance|(NK-Zellen)",760,300,"p",180]],
  edges:[["dna","p53","a"],["telo","p53","a"],["stress","p16","a"],["p53","arrest","a"],["p16","arrest","a"],["arrest","bcl","a"],["arrest","sasp","a"],["sasp","nachb","a"],["imm","arrest","i"],["bcl","imm","i"]],
  badges:[["bcl",[["Fisetin","sup","down"],["Dasatinib + Quercetin","pep","down"]],"below"],["imm",[["Training / Schlaf","anw","up"],["Thermo-Reize","anw","up"]]],["sasp",[["Omega-3 (dämpft)","sup","down"]]]]},
 no:{w:960,h:600,membrane:130,
  nodes:[["shear","Scherstress|(Blutfluss beim Training)",130,60,"t",220],["subs","L-Arginin / L-Citrullin",450,60,"t",200],["nitrat","Nitrat → Nitrit|(Rote Bete)",720,60,"t",170],
   ["enos","eNOS|(Endothel)",280,180,"p",130],["nof","NO",280,270,"p",80],
   ["gc","Guanylatzyklase|(glatte Gefäßmuskulatur)",280,360,"p",220],["cgmp","cGMP ↑",280,450,"p",110],["pde","PDE5|(baut cGMP ab)",560,450,"p",150],
   ["dila","Vasodilatation|Durchblutung ↑",280,540,"o",190]],
  edges:[["shear","enos","a"],["subs","enos","a"],["enos","nof","a"],["nitrat","nof","d"],["nof","gc","a"],["gc","cgmp","a"],["cgmp","dila","a"],["pde","cgmp","i"]],
  badges:[["pde",[["Sildenafil","pep","down"],["Tadalafil","pep","down"]]],["subs",[["Citrullin","sup","up"],["Rote-Bete-Nitrat","sup","up"]]],["shear",[["Zone-2-Training","anw","up"],["Sauna","anw","up"]]],["nof",[["Rotlicht (Freisetzung)","anw","up"]]]]},
 gh:{w:960,h:640,membrane:null,
  nodes:[["hypo","Hypothalamus",380,60,"p",160],["ghrh","GHRH (+)",200,160,"p",120],["som","Somatostatin (−)",560,160,"p",180],["ghrel","Ghrelin|(Magen, „Hungerhormon“)",755,160,"p",190],
   ["pit","Hypophyse",380,270,"p",150],["ghn","GH-Puls|(v.a. im Tiefschlaf)",380,370,"p",180],
   ["liver","Leber",200,470,"p",100],["igf","IGF-1",200,560,"o",100],["direct","direkte GH-Effekte|(Lipolyse u.a.)",620,470,"o",200],
   ["sleep","Tiefschlaf · Fasten",120,60,"t",170]],
  edges:[["sleep","ghrh","a"],["hypo","ghrh","a"],["hypo","som","a"],["ghrh","pit","a"],["som","pit","i"],["ghrel","pit","a"],["pit","ghn","a"],["ghn","liver","a"],["liver","igf","a"],["ghn","direct","a"],["igf","hypo","i"]],
  badges:[["ghrh",[["CJC-1295 / Sermorelin","pep","up"],["Tesamorelin","pep","up"]]],["ghrel",[["Ipamorelin / GHRPs","pep","up"],["MK-677 (oral)","pep","up"]]],["ghn",[["HGH (ersetzt direkt)","pep","up"]]],["sleep",[["Schlaf-Optimierung","anw","up"]]]]},
 mc:{w:960,h:560,membrane:null,
  nodes:[["pomc","POMC|(Vorläuferprotein)",380,60,"p",180],["msh","α-MSH",380,170,"p",110],
   ["mc1","MC1R|(Haut)",130,300,"p",120],["mc4","MC4R|(Hypothalamus)",420,300,"p",160],["mc35","MC3R / MC5R|(Immunzellen, Talg)",710,300,"p",190],
   ["pig","Pigmentierung|(Bräunung)",130,430,"o",150],["app","Appetit ↓ · Libido ↑",420,430,"o",180],["anti","Entzündungs-|dämpfung",710,430,"o",150]],
  edges:[["pomc","msh","a"],["msh","mc1","a"],["msh","mc4","a"],["msh","mc35","a"],["mc1","pig","a"],["mc4","app","a"],["mc35","anti","a"]],
  badges:[["mc1",[["Melanotan 1","pep","up"],["Melanotan 2","pep","up"]]],["mc4",[["PT-141","pep","up"],["Melanotan 2 (NW!)","pep","up"]],"below"],["mc35",[["KPV","pep","up"]]]]},
 circ:{w:960,h:620,membrane:null,
  nodes:[["light","Morgenlicht",130,60,"t",140],["dark","Dunkelheit|(Abend)",380,60,"t",130],["blue","Blaulicht spät|(Bildschirme)",640,60,"t",180],
   ["scn","SCN – Hauptuhr|(Hypothalamus)",380,180,"p",190],
   ["mel","Melatonin|(Zirbeldrüse, nachts)",180,300,"p",190],["cort","Cortisol-Peak|(morgens)",520,300,"p",170],["temp","Kerntemperatur-|Rhythmus",760,300,"p",170],
   ["clock","Periphere Uhren|(CLOCK/BMAL1 ↔ PER/CRY)",380,430,"p",260],
   ["sync","Synchroner Stoffwechsel|Schlafqualität · Hormon-Timing",380,540,"o",280]],
  edges:[["light","scn","a"],["dark","mel","a"],["blue","mel","i"],["scn","mel","a"],["scn","cort","a"],["scn","temp","a"],["mel","clock","a"],["cort","clock","a"],["temp","clock","a"],["clock","sync","a"]],
  badges:[["light",[["Morgenlicht-Routine","anw","up"]]],["mel",[["Melatonin","sup","up"],["Alkohol","anw","down"]]],["clock",[["Essens-Timing / Fasten","anw","up"]]],["blue",[["Rotlicht abends","anw","down"]]]]},
 hpa:{w:960,h:640,membrane:null,
  nodes:[["stress","Stressor|(psychisch / physisch)",380,50,"t",220],
   ["hypo","Hypothalamus → CRH",380,160,"p",200],["pit","Hypophyse → ACTH",380,260,"p",190],["adr","Nebenniere → Cortisol",380,360,"p",200],
   ["symp","Sympathikus|(Adrenalin – Gas)",120,260,"p",180],["vag","Vagusnerv|(ACh – Bremse)",730,260,"p",170],
   ["hrv","HRV|(Messfenster)",730,380,"n",130],["chol","α7-Rezeptor:|Entzündung ⊥",730,480,"p",160],
   ["eff","Herzfrequenz ↑ · Energie mobilisiert|wach & fokussiert",140,480,"o",250],["calm","Erholung · Verdauung|Regeneration",480,540,"o",210]],
  edges:[["stress","hypo","a"],["hypo","pit","a"],["pit","adr","a"],["adr","hypo","i"],["stress","symp","a"],["symp","eff","a"],["vag","calm","a"],["vag","hrv","d"],["vag","chol","a"],["adr","calm","i"]],
  badges:[["adr",[["Ashwagandha","sup","down"]]],["vag",[["Resonanzatmung ~6/min","anw","up"],["Kälte (adaptiv)","anw","up"],["Vagus-Stimulation","anw","up"]]],["stress",[["L-Theanin / GABA","sup","down"]]],["hrv",[["VNS-Analyse / Wearable","anw","up"]]]]},
 rep:{w:960,h:640,membrane:null,
  nodes:[["inj","Verletzung / Trainingsreiz",130,60,"t",230],
   ["blut","Blutgerinnung +|Entzündungsphase",130,180,"x",190],["gf","Wachstumsfaktoren|(VEGF · FGF · PDGF)",130,300,"p",210],
   ["angio","Angiogenese|(neue Gefäße)",380,420,"p",170],["fibro","Fibroblasten →|Kollagensynthese",640,300,"p",190],
   ["subs","Bausteine: Kollagenpeptide|Glycin · Vitamin C",700,180,"t",240],
   ["o2sup","O₂- & Durchblutungs-Support",380,540,"n",230],["heal","Heilung · Remodelling|belastbares Gewebe",700,470,"o",210]],
  edges:[["inj","blut","a"],["blut","gf","a"],["gf","angio","a"],["gf","fibro","a"],["subs","fibro","a"],["angio","heal","a"],["fibro","heal","a"],["o2sup","angio","a"]],
  badges:[["angio",[["BPC-157","pep","up"],["TB-500","pep","up"],["PDA","pep","up"]]],["fibro",[["GHK-Cu","pep","up"],["Kollagen + Glycin","sup","up"]]],["o2sup",[["HBOT","anw","up"],["Rotlicht / wIRA","anw","up"]]],["inj",[["Krafttraining (Reiz)","anw","up"]]]]},
 epi:{w:960,h:620,membrane:null,
  nodes:[["life","Lebensstil-Signale|(Training, Schlaf, Ernährung, Stress)",380,50,"t",300],
   ["sam","Methyl-Donoren|(SAM-Zyklus)",130,180,"t",180],["dnmt","DNMT|(setzt Methylgruppen)",130,290,"p",190],
   ["tet","TET-Enzyme|(radieren Methylgruppen)",640,290,"p",210],["akg","Co-Faktoren: α-KG|Vitamin C · O₂",640,180,"t",190],
   ["meth","DNA-Methylierungsmuster",380,400,"x",230],["expr","Genexpression|(an / aus)",180,510,"o",160],["clockm","Epigenetische Uhren|(Horvath, GrimAge – Ablesung)",600,510,"n",250]],
  edges:[["life","meth","d"],["sam","dnmt","a"],["dnmt","meth","a"],["akg","tet","a"],["tet","meth","i"],["meth","expr","a"],["meth","clockm","d"]],
  badges:[["akg",[["Ca-AKG","sup","up"]]],["life",[["Zone 2 / Schlaf","anw","up"],["Alkohol-Reduktion","anw","up"]]],["tet",[["Epitalon (These)","pep","up"]]],["clockm",[["Uhren-Test = Messung","anw","up"]]]]}
};

// ============ Generischer SVG-Renderer + Modal ============
(function(){
  const C={sup:"#199e70",pep:"#3987e5",anw:"#d95926"};
  const DIRS={up:"↑",down:"⊣"};
  const TYPE={t:{fill:"rgba(255,255,255,.05)",stroke:"#8a897f",txt:"#c3c2b7"},
              p:{fill:"rgba(57,135,229,.14)",stroke:"#3987e5",txt:"#fff"},
              x:{fill:"rgba(25,158,112,.14)",stroke:"#199e70",txt:"#fff"},
              o:{fill:"rgba(212,175,55,.12)",stroke:"#d4af37",txt:"#fff"},
              n:{fill:"transparent",stroke:"#5a5a56",txt:"#8a897f"}};
  function esc2(s){return String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}

  window.swDiagramSVG = function(pwId){
    const d=SW_DIAGRAMS[pwId]; if(!d) return null;
    const H=d.h, W=d.w;
    const nmap={}; d.nodes.forEach(n=>{nmap[n[0]]={id:n[0],label:n[1],x:n[2],y:n[3],type:n[4],w:n[5]||150,h:n[1].includes("|")?46:34};});
    let s=`<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;background:#14141a;border-radius:12px">`;
    s+=`<defs><marker id="swArr" markerWidth="9" markerHeight="9" refX="7" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#c3c2b7"/></marker></defs>`;
    if(d.membrane){ s+=`<line x1="0" y1="${d.membrane}" x2="${W}" y2="${d.membrane}" stroke="#3987e5" stroke-width="5" opacity=".25"/><line x1="0" y1="${d.membrane+7}" x2="${W}" y2="${d.membrane+7}" stroke="#3987e5" stroke-width="5" opacity=".25"/><text x="12" y="${d.membrane+26}" fill="#5a7aa8" font-size="12">Zellmembran</text>`; }
    // Kanten
    const hSegs=[];
    d.edges.forEach(([f,t,art])=>{
      const a=nmap[f],b=nmap[t]; if(!a||!b) return;
      const x1=a.x+a.w/2, y1=a.y+a.h, x2=b.x+b.w/2, y2=b.y;
      const dy=(y2>y1);
      const dash=art==="d"?' stroke-dasharray="6 5"':'';
      if(!dy && Math.abs((a.y+a.h/2)-(b.y+b.h/2))<80){
        // etwa gleiche Höhe → (schräg-)gerade Kante an die Seitenkante des Ziels
        const leftward=(b.x+b.w/2)<(a.x+a.w/2);
        const sx=leftward?a.x:a.x+a.w, sy=a.y+a.h/2;
        const ex=leftward?b.x+b.w+7:b.x-7, ey=b.y+b.h/2;
        hSegs.push({x1:Math.min(sx,ex)-4,x2:Math.max(sx,ex)+4,y1:Math.min(sy,ey)-6,y2:Math.max(sy,ey)+6});
        if(art==="i"){
          s+=`<path d="M${sx},${sy} L ${ex+(leftward?2:-2)},${ey}" fill="none" stroke="#d95926" stroke-width="2"${dash}/>`;
          s+=`<line x1="${ex}" y1="${ey-11}" x2="${ex}" y2="${ey+11}" stroke="#d95926" stroke-width="3.2"/>`;
        } else {
          s+=`<path d="M${sx},${sy} L ${ex},${ey}" fill="none" stroke="#c3c2b7" stroke-width="2" marker-end="url(#swArr)"${dash}/>`;
        }
        return;
      }
      if(!dy){
        // Ziel liegt deutlich oberhalb → von der Oberkante zur Unterkante, mit Rechts-Bogen um Zwischenknoten
        const sx=x1, sy=a.y, ex=x2, ey=b.y+b.h+7, my=(sy+ey)/2;
        const bow=Math.abs(sx-ex)<160?110:30;
        const col=art==="i"?"#d95926":"#c3c2b7";
        s+=`<path d="M${sx},${sy} C ${sx+bow},${my} ${ex+bow},${my} ${ex},${ey+(art==="i"?2:0)}" fill="none" stroke="${col}" stroke-width="2"${art==="i"?'':' marker-end="url(#swArr)"'}${dash}/>`;
        if(art==="i") s+=`<line x1="${ex-11}" y1="${ey+3}" x2="${ex+11}" y2="${ey+3}" stroke="#d95926" stroke-width="3.2"/>`;
        return;
      }
      const sx=x1, sy=y1, ex=x2, ey=y2-3;
      const span=ey-sy;
      const bow=(span>170 && Math.abs(sx-ex)<40)?105:0;
      const my=(sy+ey)/2;
      if(art==="i"){
        s+=`<path d="M${sx},${sy} C ${sx+bow},${my} ${ex+bow},${my} ${ex},${ey-6}" fill="none" stroke="#d95926" stroke-width="2"${dash}/>`;
        s+=`<line x1="${ex-11}" y1="${ey-5}" x2="${ex+11}" y2="${ey-5}" stroke="#d95926" stroke-width="3.2"/>`;
      } else {
        s+=`<path d="M${sx},${sy} C ${sx+bow},${my} ${ex+bow},${my} ${ex},${ey}" fill="none" stroke="#c3c2b7" stroke-width="2" marker-end="url(#swArr)"${dash}/>`;
      }
    });
    // Knoten
    d.nodes.forEach(n=>{
      const m=nmap[n[0]], t=TYPE[m.type]||TYPE.p;
      s+=`<rect x="${m.x}" y="${m.y}" width="${m.w}" height="${m.h}" rx="9" fill="${t.fill}" stroke="${t.stroke}" stroke-width="1.6"/>`;
      const lines=m.label.split("|");
      lines.forEach((ln,i)=>{
        s+=`<text x="${m.x+m.w/2}" y="${m.y+(m.h/2)+(i-(lines.length-1)/2)*15+4}" fill="${t.txt}" font-size="12.5" font-weight="${m.type==='o'?'600':'500'}" text-anchor="middle" font-family="Segoe UI,Inter,sans-serif">${esc2(ln)}</text>`;
      });
    });
    // Badges (Wirkstoff-Marker) – kollisionsfrei platzieren: rechts → links → oberhalb → unterhalb
    const nodeRects=Object.values(nmap);
    const placedB=[];
    function bCollides(x,y,w,h,self){
      if(x<4||x+w>W-4||y<4||y+h>H-42) return true;
      if(nodeRects.some(r=>r!==self && x<r.x+r.w+4 && x+w>r.x-4 && y<r.y+r.h+2 && y+h>r.y-2)) return true;
      if(hSegs.some(g=>x<g.x2 && x+w>g.x1 && y<g.y2 && y+h>g.y1)) return true;
      return placedB.some(r=>x<r.x+r.w+4 && x+w>r.x-4 && y<r.y+r.h+2 && y+h>r.y-2);
    }
    (d.badges||[]).forEach(([nid,items,side])=>{
      const m=nmap[nid]; if(!m) return;
      const bw=Math.max(...items.map(it=>it[0].length))*6.6+30;
      const bh=items.length*19;
      let bx=m.x+m.w+8, by=m.y-6;
      if(side==="below"){ bx=Math.min(Math.max(6,m.x),W-bw-6); by=m.y+m.h+8; }
      else if(bCollides(bx,by,bw,bh,m)){
        const lx=m.x-8-bw, ay=m.y-bh-6, uy=m.y+m.h+8;
        if(!bCollides(m.x,ay,bw,bh,m)){ bx=m.x; by=ay; }
        else if(!bCollides(lx,by,bw,bh,m)) bx=lx;
        else { bx=Math.min(Math.max(6,m.x),W-bw-6); by=uy; }
      }
      placedB.push({x:bx,y:by,w:bw,h:bh});
      items.forEach((it,i)=>{
        const [label,cat,dir]=it;
        const y0=by+i*19;
        s+=`<circle cx="${bx}" cy="${y0+5}" r="4" fill="${C[cat]}"/>`;
        s+=`<text x="${bx+9}" y="${y0+9}" fill="${C[cat]}" font-size="11.5" font-weight="600" font-family="Segoe UI,Inter,sans-serif">${DIRS[dir]||"⇄"} ${esc2(label)}</text>`;
      });
    });
    // Legende
    s+=`<g font-family="Segoe UI,Inter,sans-serif" font-size="11">`;
    s+=`<text x="14" y="${H-34}" fill="#8a897f">→ aktiviert &#160;&#160; ⊣ hemmt &#160;&#160; ⇢ indirekt</text>`;
    s+=`<circle cx="18" cy="${H-16}" r="4" fill="${C.sup}"/><text x="27" y="${H-12}" fill="#8a897f">Supplement</text>`;
    s+=`<circle cx="118" cy="${H-16}" r="4" fill="${C.pep}"/><text x="127" y="${H-12}" fill="#8a897f">Peptid/Wirkstoff</text>`;
    s+=`<circle cx="248" cy="${H-16}" r="4" fill="${C.anw}"/><text x="257" y="${H-12}" fill="#8a897f">Anwendung</text>`;
    s+=`<text x="${W-12}" y="${H-12}" fill="#5a5a56" text-anchor="end">vereinfachtes Schema · keine medizinische Beratung</text></g>`;
    s+="</svg>";
    return s;
  };

  window.swShowDiagram = function(pwId, title){
    const svg=window.swDiagramSVG(pwId);
    if(!svg) return;
    let ov=document.getElementById("sw-diagram-overlay");
    if(!ov){
      ov=document.createElement("div"); ov.id="sw-diagram-overlay";
      ov.style.cssText="position:fixed;inset:0;z-index:99999;background:rgba(5,8,14,.88);display:flex;align-items:center;justify-content:center;padding:18px;overflow:auto";
      ov.addEventListener("click",e=>{ if(e.target===ov) ov.remove(); });
      document.body.appendChild(ov);
    }
    ov.innerHTML=`<div style="max-width:1020px;width:100%;background:#1a2030;border:1px solid #3a4a63;border-radius:16px;padding:16px 18px;position:relative">
      <button onclick="document.getElementById('sw-diagram-overlay').remove()" style="position:absolute;top:10px;right:12px;background:none;border:none;color:#c3c2b7;font-size:26px;cursor:pointer;line-height:1">&times;</button>
      <div style="color:#fff;font-weight:700;font-size:1.05rem;margin:0 0 10px;font-family:'Space Grotesk',Inter,sans-serif">🔬 ${esc2(title||pwId)} – Signalweg-Schema</div>
      ${svg}
    </div>`;
    ov.style.display="flex";
  };
})();
