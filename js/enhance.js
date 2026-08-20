/* Biohacking Kompakt – Zusatzmodul "Wissenschaft statt Hype"
 * Ergänzt ohne Eingriff in app.js:
 *  1) Evidenz-Legende in der Supplement-Ansicht
 *  2) Tooltips auf allen Evidenz-Badges (hoch/mittel/niedrig)
 *  3) Drei neue Karten in der Über-Sektion (Mission, Abgrenzung, Zielgruppe)
 * Wird von js/data/products.js nachgeladen. Kann jederzeit entfernt werden,
 * ohne dass die restliche App betroffen ist.
 */
(function () {
  'use strict';

  var EV_TITLES = {
    'ev-hoch': 'Evidenz hoch: mehrere unabhängige Humanstudien (idealerweise RCTs, repliziert)',
    'ev-mittel': 'Evidenz mittel: einzelne Humanstudien oder gemischte Datenlage',
    'ev-niedrig': 'Evidenz niedrig: vorläufig – überwiegend Zell-/Tierstudien, kaum Humandaten'
  };

  /* ---------- 1) Styles ---------- */
  var css = ''
    + '.ev-legend{background:var(--surface);border:1px solid var(--surface-border);border-radius:var(--radius-lg);padding:0;margin:0 0 20px}'
    + '.ev-legend summary{cursor:pointer;list-style:none;padding:12px 18px;font-size:14px;font-weight:600;display:flex;align-items:center;gap:8px;flex-wrap:wrap}'
    + '.ev-legend summary::-webkit-details-marker{display:none}'
    + '.ev-legend-toggle{margin-left:auto;font-size:12px;font-weight:500;opacity:.7}'
    + '.ev-legend[open] .ev-legend-toggle{opacity:1}'
    + '.ev-legend-body{padding:0 18px 16px;font-size:14px}'
    + '.ev-legend-body p{margin:0 0 10px}'
    + '.ev-legend-body ul{list-style:none;padding:0;margin:0 0 10px;display:grid;gap:8px}'
    + '.ev-legend-body li{display:flex;align-items:baseline;gap:10px}'
    + '.ev-legend-body li .ev{flex-shrink:0}'
    + '.ev-legend-body .small{opacity:.75;margin-bottom:0}'
    + '.about-list{list-style:none;padding:0;margin:0 0 12px;display:grid;gap:8px}'
    + '.about-list li{position:relative;padding-left:26px;font-size:15px;line-height:1.55}'
    + '.about-list li::before{position:absolute;left:0;top:0;font-size:14px}'
    + '.about-list--check li::before{content:"✅"}'
    + '.about-list--cross li::before{content:"✕";color:var(--evidence-low,#ff6b8a);font-weight:700;font-size:16px}';

  function injectStyles() {
    var s = document.createElement('style');
    s.id = 'enhance-styles';
    s.textContent = css;
    document.head.appendChild(s);
  }

  /* ---------- 2) Evidenz-Legende ---------- */
  var LEGEND_HTML = ''
    + '<summary>🔬 Was bedeuten die Evidenz-Badges? <span class="ev-legend-toggle">Details ▾</span></summary>'
    + '<div class="ev-legend-body">'
    + '<p>Jedes Supplement trägt ein Badge, das die Belastbarkeit der Studienlage einordnet – nicht die Wirkstärke. Ein positives Ergebnis aus einer Zell- oder Tierstudie ist kein Beleg für eine Wirkung beim Menschen.</p>'
    + '<ul>'
    + '<li><span class="ev ev-hoch">hoch</span> Mehrere unabhängige Humanstudien, idealerweise randomisiert-kontrolliert (RCT) und repliziert.</li>'
    + '<li><span class="ev ev-mittel">mittel</span> Einzelne Humanstudien oder gemischte Datenlage – vielversprechend, aber noch nicht abschließend belegt.</li>'
    + '<li><span class="ev ev-niedrig">niedrig</span> Vorläufig: überwiegend Zell- oder Tierstudien, kaum Humandaten. Hier ist besondere Zurückhaltung angebracht.</li>'
    + '</ul>'
    + '<p class="small">Wo Daten fehlen oder Risiken bestehen, steht das direkt im Steckbrief – Grenzen benennen gehört hier zum Konzept.</p>'
    + '</div>';

  function injectLegend() {
    var view = document.getElementById('view-supplement');
    if (!view || view.querySelector('.ev-legend')) return;
    var bar = view.querySelector('.filter-bar');
    if (!bar) return;
    var d = document.createElement('details');
    d.className = 'ev-legend';
    d.innerHTML = LEGEND_HTML;
    bar.insertAdjacentElement('afterend', d);
  }

  /* ---------- 3) Über-Sektion: neue Karten ---------- */
  var ABOUT_CARDS_HTML = ''
    + '<div class="about-card" data-enhance-card>'
    + '<h3>🔬 Wissenschaft statt Hype</h3>'
    + '<p>Das Biohacking-Feld lebt von Übertreibungen: Wundermittel-Versprechen, Studien ohne Kontext, kleingeredete Risiken. Diese App geht den anderen Weg – nach drei Prinzipien:</p>'
    + '<p><strong>1. Evidenz benennen.</strong> Jedes Supplement trägt ein Evidenz-Badge (hoch / mittel / niedrig), das die Belastbarkeit der Studienlage einordnet – von Zellstudie bis replizierte Humanstudie.</p>'
    + '<p><strong>2. Grenzen aufzeigen.</strong> Wo Daten fehlen oder die Datenlage dünn ist, steht das im Steckbrief – statt Lücken zu verschweigen.</p>'
    + '<p><strong>3. Risiken ernst nehmen.</strong> Jeder Steckbrief nennt Risiken, Wechselwirkungen und wann ärztliche Rücksprache nötig ist.</p>'
    + '</div>'
    + '<div class="about-card" data-enhance-card>'
    + '<h3>🚫 Was diese App nicht ist</h3>'
    + '<ul class="about-list about-list--cross">'
    + '<li><strong>Kein Arzt.</strong> Keine Diagnosen, keine Therapieempfehlungen, keine individuellen Gesundheitsratschläge.</li>'
    + '<li><strong>Kein Shop.</strong> Hier werden keine Substanzen verkauft. Empfehlungs- und Rabatt-Links (z. B. bei Wearables) sind klar als Werbung gekennzeichnet.</li>'
    + '<li><strong>Keine Heilversprechen.</strong> Dargestellt wird, was die Forschung zeigt – inklusive ihrer Grenzen.</li>'
    + '<li><strong>Keine Anwendungsanleitung.</strong> Die Inhalte befähigen zur eigenen Recherche und zum informierten Arztgespräch, nicht zur Selbstbehandlung.</li>'
    + '</ul>'
    + '</div>'
    + '<div class="about-card" data-enhance-card>'
    + '<h3>👥 Für wen ist die App gedacht?</h3>'
    + '<ul class="about-list about-list--check">'
    + '<li>Biohacker &amp; Longevity-Interessierte, die fundiert statt gehypt lesen wollen</li>'
    + '<li>Menschen, die sich vor einem Arztgespräch einen Überblick verschaffen möchten</li>'
    + '<li>Sportler, die die Studienlage zu einzelnen Wirkstoffen kennen wollen</li>'
    + '<li>Neugierige, die verstehen wollen, wie Supplements biochemisch wirken</li>'
    + '</ul>'
    + '<p><strong>Nicht geeignet</strong> für Personen unter 18 Jahren, als Ersatz für ärztliche Beratung oder als Anleitung zur Selbstbehandlung bei Erkrankungen.</p>'
    + '</div>';

  function injectAboutCards() {
    var grid = document.querySelector('#view-about .about-grid');
    if (!grid || grid.querySelector('[data-enhance-card]')) return;
    var warning = grid.querySelector('.about-card--warning');
    var tmp = document.createElement('div');
    tmp.innerHTML = ABOUT_CARDS_HTML;
    var cards = Array.prototype.slice.call(tmp.children);
    cards.forEach(function (card) {
      if (warning) grid.insertBefore(card, warning);
      else grid.appendChild(card);
    });
  }

  /* ---------- 4) Badge-Tooltips (Event-Delegation, greift auch bei dynamisch gerenderten Karten) ---------- */
  function initTooltips() {
    document.addEventListener('mouseover', function (e) {
      var el = e.target && e.target.closest ? e.target.closest('.ev') : null;
      if (!el || el.title) return;
      for (var cls in EV_TITLES) {
        if (el.classList.contains(cls)) { el.title = EV_TITLES[cls]; break; }
      }
    });
  }

  function init() {
    injectStyles();
    injectLegend();
    injectAboutCards();
    initTooltips();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
