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
 "kh-epitalon":[["epi","mod",0],["circ","mod",0]],
 "kh-thymalin":[["epi","mod",0],["sen","mod",0]],
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
        <h3>${escSW(p.name)}<span class="sw-sub">${escSW(p.sub)}</span></h3>
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
