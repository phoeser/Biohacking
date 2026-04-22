/* Biohacking Supplement Check – App-Logik
 * 3 Kategorien: Supplement-Check · Symptom · News
 * Hash-Router + lokale DB + Gemini-Fallback.
 */

(function () {
  'use strict';

  const AI_MODEL = 'gemini-2.0-flash';
  // Proxy via Cloudflare Worker — versteckt den Gemini-Key vor dem Browser.
  // Worker-Code siehe cloudflare-worker.js, Secret GEMINI_API_KEY liegt in Cloudflare.
  const AI_PROXY_BASE = 'https://bhc-proxy.phoeser.workers.dev';
  const AI_ENDPOINT = (model) =>
    `${AI_PROXY_BASE}/v1beta/models/${model}:generateContent`;
  const NEWS_CACHE_KEY = 'bhc_news_cache_v1';
  const NEWS_CACHE_TTL_MS = 30 * 60 * 1000;

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));

  function escapeHtml(text) {
    if (text == null) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeStr(s) {
    return (s || '')
      .toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function mdToHtml(md) {
    if (!md) return '';
    let html = escapeHtml(md);
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^# (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
    const lines = html.split('\n');
    let out = [];
    let inList = false;
    for (const line of lines) {
      const m = line.match(/^\s*[-*]\s+(.+)$/);
      if (m) {
        if (!inList) { out.push('<ul>'); inList = true; }
        out.push('<li>' + m[1] + '</li>');
      } else {
        if (inList) { out.push('</ul>'); inList = false; }
        out.push(line);
      }
    }
    if (inList) out.push('</ul>');
    html = out.join('\n');
    html = html
      .split(/\n{2,}/)
      .map(p => {
        if (/^\s*<(h\d|ul|ol|li|p|div|blockquote)/.test(p)) return p;
        return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
      })
      .join('\n');
    return html;
  }

  // Stub: Wir nutzen jetzt den Cloudflare-Proxy, der den Key intern setzt.
  // Funktion bleibt truthy, damit bestehende `if (!loadApiKey())`-Checks weiterlaufen.
  function loadApiKey() {
    return 'proxy';
  }

  async function callGemini(prompt, opts = {}) {
    const body = {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: opts.temperature ?? 0.4,
        maxOutputTokens: opts.maxOutputTokens ?? 2048
      }
    };

    if (opts.systemInstruction) {
      body.systemInstruction = { parts: [{ text: opts.systemInstruction }] };
    }
    if (opts.grounding) {
      body.tools = [{ google_search: {} }];
    }

    const res = await fetch(AI_ENDPOINT(AI_MODEL), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      let detail = '';
      try {
        const j = await res.json();
        detail = j?.error?.message ? ' · ' + j.error.message : '';
      } catch (_) {}
      throw new Error('HTTP ' + res.status + detail);
    }

    const data = await res.json();
    const cand = data?.candidates?.[0];
    const parts = cand?.content?.parts || [];
    const text = parts.map(p => p.text || '').join('').trim();

    const sources = [];
    const chunks = cand?.groundingMetadata?.groundingChunks || [];
    for (const c of chunks) {
      if (c.web && c.web.uri) {
        sources.push({ title: c.web.title || c.web.uri, uri: c.web.uri });
      }
    }
    return { text, sources };
  }

  const VALID_VIEWS = ['home', 'supplement', 'symptom', 'news', 'about'];

  function currentView() {
    const hash = (location.hash || '').replace(/^#/, '').split('?')[0];
    return VALID_VIEWS.includes(hash) ? hash : 'home';
  }

  function showView(name) {
    if (!VALID_VIEWS.includes(name)) name = 'home';
    $$('.view').forEach(v => {
      v.classList.toggle('hidden', v.dataset.view !== name);
    });
    $$('.main-nav a').forEach(a => {
      a.classList.toggle('active', a.dataset.nav === name);
    });
    window.scrollTo({ top: 0 });
    document.body.dataset.view = name;

    if (name === 'news') onEnterNews();
    if (name === 'home') onEnterHome();
  }

  function initRouter() {
    window.addEventListener('hashchange', () => showView(currentView()));
    showView(currentView());
  }

  function onEnterHome() {
    const sSup = $('#stat-supplements');
    const sTip = $('#stat-tips');
    const sGoal = $('#stat-goals');
    if (sSup) sSup.textContent = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS.length : '–');
    if (sTip) sTip.textContent = (typeof TIPS !== 'undefined' ? TIPS.length : '–');
    if (sGoal) sGoal.textContent = (typeof GOALS !== 'undefined' ? GOALS.length : '–');
    loadHomeNewsPreview();
  }

  let homeNewsLoading = false;
  async function loadHomeNewsPreview() {
    const statusEl = $('#home-news-status');
    const listEl = $('#home-news-list');
    if (!statusEl || !listEl) return;

    const cached = loadNewsFromCache();
    if (cached && Array.isArray(cached.items) && cached.items.length) {
      renderHomeNews(cached.items.slice(0, 3), cached.fetched, true);
      return;
    }

    if (homeNewsLoading) return;
    homeNewsLoading = true;

    if (!loadApiKey()) {
      statusEl.innerHTML = '';
      listEl.innerHTML = `<div class="home-news-error">Kein KI-Key verfügbar.</div>`;
      homeNewsLoading = false;
      return;
    }

    statusEl.innerHTML = '';
    listEl.innerHTML = `
      <div class="home-news-loading">Lade aktuelle News…</div>
      <div class="home-news-loading">Recherche läuft…</div>
      <div class="home-news-loading">Quellen werden geprüft…</div>
    `;

    const sys = `Du bist ein Biohacking-News-Redakteur. Liefere die 3 wichtigsten, aktuellsten und seriösesten Nachrichten auf Deutsch.
Antworte AUSSCHLIESSLICH mit gültigem JSON (ohne Markdown-Codeblock, ohne Kommentar) im Schema:
{"items":[{"title":"...","summary":"1-2 knackige Sätze deutsch","category":"Longevity|Supplements|Ernährung|Bewegung|Tech|Forschung","url":"https://..."}]}
Genau 3 Einträge. URLs müssen zur Originalquelle führen. Keine ausgedachten Inhalte – nur was du per Web-Suche belegen kannst.`;

    const prompt = `Recherchiere die 3 wichtigsten aktuellen Nachrichten (letzte 7–14 Tage) aus Biohacking, Longevity, Supplement-Forschung, Ernährung, Schlaf, Wearables. Gib sie als JSON aus.`;

    try {
      const { text, sources } = await callGemini(prompt, {
        systemInstruction: sys,
        temperature: 0.2,
        grounding: true,
        maxOutputTokens: 1500
      });

      const json = extractJson(text);
      if (!json || !Array.isArray(json.items) || json.items.length === 0) {
        throw new Error('Ungültige JSON-Antwort vom Modell.');
      }

      const items = json.items.slice(0, 3);
      const fetched = Date.now();
      saveNewsToCache({ items: json.items, sources: sources || [], topic: 'all', fetched });
      newsData = { items: json.items, sources: sources || [], topic: 'all', fetched };
      newsLoaded = true;

      renderHomeNews(items, fetched, false);
    } catch (err) {
      statusEl.innerHTML = '';
      listEl.innerHTML = `<div class="home-news-error">News-Ladefehler: ${escapeHtml(err.message)}</div>`;
    } finally {
      homeNewsLoading = false;
    }
  }

  function renderHomeNews(items, fetchedTs, fromCache) {
    const statusEl = $('#home-news-status');
    const listEl = $('#home-news-list');
    if (!statusEl || !listEl) return;

    const when = new Date(fetchedTs || Date.now()).toLocaleString('de-DE', {
      day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    statusEl.innerHTML = `<span class="ok">✓ Stand: ${escapeHtml(when)}${fromCache ? ' · aus Cache' : ''}</span>`;

    listEl.innerHTML = items.map(n => {
      const domain = (() => {
        try { return new URL(n.url).hostname.replace(/^www\./, ''); } catch (_) { return ''; }
      })();
      const safeUrl = (n.url && /^https?:\/\//i.test(n.url)) ? n.url : '#news';
      return `
        <a class="home-news-card" href="${escapeHtml(safeUrl)}" target="_blank" rel="noopener">
          <div class="home-news-cat">${escapeHtml(n.category || 'News')}</div>
          <h4>${escapeHtml(n.title || '')}</h4>
          <p>${escapeHtml(n.summary || '')}</p>
          ${domain ? `<div class="home-news-src">🔗 ${escapeHtml(domain)}</div>` : ''}
        </a>
      `;
    }).join('');
  }

  function initSupplementView() {
    const input = $('#supplement-search');
    const grid = $('#supplement-grid');
    const detail = $('#supplement-detail');
    const aiBox = $('#supplement-ai');
    const noRes = $('#supplement-no-results');
    const askBtn = $('#supplement-ask-ai');
    const filterBar = $('#category-filters');
    const datalist = $('#supplement-datalist');
    const listHead = $('#supplement-list-title');
    const listCount = $('#supplement-list-count');

    if (!input || typeof SUPPLEMENTS === 'undefined') return;

    datalist.innerHTML = SUPPLEMENTS
      .map(s => `<option value="${escapeHtml(s.name)}"></option>`)
      .join('');

    const categories = Array.from(new Set(SUPPLEMENTS.map(s => s.category))).sort();
    filterBar.innerHTML =
      `<button class="chip chip--active" data-cat="all">Alle</button>` +
      categories.map(c => `<button class="chip" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join('');

    let activeCat = 'all';
    let currentQuery = '';

    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip');
      if (!btn) return;
      activeCat = btn.dataset.cat;
      $$('.chip', filterBar).forEach(c => c.classList.toggle('chip--active', c === btn));
      render();
    });

    input.addEventListener('input', () => {
      currentQuery = input.value;
      render();
    });
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const q = normalizeStr(input.value);
        const exact = SUPPLEMENTS.find(s => normalizeStr(s.name) === q);
        if (!exact) askSupplementAi(input.value);
      }
    });

    askBtn?.addEventListener('click', () => askSupplementAi(currentQuery));

    function setCount(n, label) {
      if (listCount) listCount.textContent = n > 0 ? `${n} ${n === 1 ? 'Eintrag' : 'Einträge'}` : '';
      if (listHead && label) listHead.textContent = label;
    }

    function render() {
      const q = normalizeStr(currentQuery);
      const catFilter = activeCat === 'all' ? null : activeCat;

      if (q.length >= 2) {
        const exact = SUPPLEMENTS.find(s =>
          normalizeStr(s.name) === q || normalizeStr(s.altNames || '') === q
        );
        if (exact) {
          showDetail(exact);
          grid.innerHTML = '';
          noRes.classList.add('hidden');
          aiBox.classList.add('hidden');
          setCount(0, '');
          return;
        }
        const filtered = SUPPLEMENTS.filter(s => {
          if (catFilter && s.category !== catFilter) return false;
          const blob = normalizeStr([s.name, s.altNames, s.short, s.description, (s.tags||[]).join(' ')].join(' '));
          return blob.includes(q);
        });
        detail.classList.add('hidden');
        aiBox.classList.add('hidden');
        if (filtered.length === 0) {
          grid.innerHTML = '';
          noRes.classList.remove('hidden');
          setCount(0, 'Keine Treffer');
          return;
        }
        noRes.classList.add('hidden');
        grid.innerHTML = filtered.map(cardHtml).join('');
        setCount(filtered.length, `Suchtreffer für „${currentQuery.trim()}"`);
        return;
      }

      detail.classList.add('hidden');
      aiBox.classList.add('hidden');
      noRes.classList.add('hidden');
      const filtered = catFilter ? SUPPLEMENTS.filter(s => s.category === catFilter) : SUPPLEMENTS;
      grid.innerHTML = filtered.map(cardHtml).join('');
      setCount(filtered.length, catFilter ? `Kategorie: ${catFilter}` : 'Alle Supplements');
    }

    grid.addEventListener('click', (e) => {
      const card = e.target.closest('[data-sid]');
      if (!card) return;
      const s = SUPPLEMENTS.find(x => x.id === card.dataset.sid);
      if (s) {
        input.value = s.name;
        currentQuery = s.name;
        showDetail(s);
        grid.innerHTML = '';
        window.scrollTo({ top: detail.offsetTop - 80, behavior: 'smooth' });
      }
    });

    function cardHtml(s) {
      const ev = s.evidence ? `<span class="ev ev-${s.evidence}">${s.evidence}</span>` : '';
      return `
        <button class="supp-card" data-sid="${escapeHtml(s.id)}">
          <div class="supp-head">
            <span class="supp-cat">${escapeHtml(s.category)}</span>
            ${ev}
          </div>
          <h3>${escapeHtml(s.name)}</h3>
          ${s.altNames ? `<div class="supp-alt">${escapeHtml(s.altNames)}</div>` : ''}
          <p>${escapeHtml(s.short || '')}</p>
        </button>`;
    }

    function showDetail(s) {
      const syn = (s.synergies || []).map(id => {
        const m = SUPPLEMENTS.find(x => x.id === id);
        return m ? m.name : id;
      });
      const avoid = (s.avoid || []);
      detail.innerHTML = `
        <article class="supp-detail">
          <header class="supp-detail-head">
            <div>
              <span class="supp-cat">${escapeHtml(s.category)}</span>
              ${s.evidence ? `<span class="ev ev-${s.evidence}">Evidenz: ${s.evidence}</span>` : ''}
            </div>
            <h2>${escapeHtml(s.name)}</h2>
            ${s.altNames ? `<div class="supp-alt">${escapeHtml(s.altNames)}</div>` : ''}
            <p class="supp-short">${escapeHtml(s.short || '')}</p>
          </header>

          ${s.description ? `<section><h3>Überblick</h3><p>${escapeHtml(s.description)}</p></section>` : ''}
          ${s.benefits?.length ? `<section><h3>✅ Nutzen</h3><ul>${s.benefits.map(b=>`<li>${escapeHtml(b)}</li>`).join('')}</ul></section>` : ''}
          ${s.risks?.length ? `<section><h3>⚠️ Risiken / Beachten</h3><ul>${s.risks.map(b=>`<li>${escapeHtml(b)}</li>`).join('')}</ul></section>` : ''}
          ${s.dosage ? `<section><h3>💊 Dosierung</h3><p>${escapeHtml(s.dosage)}</p></section>` : ''}
          ${s.intake ? `<section><h3>🕐 Optimale Einnahme</h3><p>${escapeHtml(s.intake)}</p></section>` : ''}
          ${syn.length ? `<section><h3>🤝 Synergien</h3><p>${syn.map(n=>`<span class="tag">${escapeHtml(n)}</span>`).join(' ')}</p></section>` : ''}
          ${avoid.length ? `<section><h3>🚫 Nicht kombinieren mit</h3><p>${avoid.map(n=>`<span class="tag tag--warn">${escapeHtml(n)}</span>`).join(' ')}</p></section>` : ''}
          ${s.sources ? `<section><h3>🥗 Natürliche Quellen</h3><p>${escapeHtml(s.sources)}</p></section>` : ''}
        </article>
      `;
      detail.classList.remove('hidden');
      noRes.classList.add('hidden');
    }

    async function askSupplementAi(query) {
      const q = (query || input.value || '').trim();
      if (!q) return;
      aiBox.classList.remove('hidden');
      noRes.classList.add('hidden');
      aiBox.innerHTML = `<div class="supp-ai-loading">🤖 KI recherchiert zu <strong>${escapeHtml(q)}</strong>…</div>`;

      const sys = `Du bist ein Biohacking- & Ernährungsexperte. Antworte auf Deutsch, strukturiert, prägnant, mit klaren Markdown-Abschnitten:
## Überblick
## Nutzen (Liste)
## Risiken / Kontraindikationen (Liste)
## Dosierung
## Optimale Einnahme
## Synergien & Wechselwirkungen
Kein medizinischer Rat – erwähne am Ende, dass bei Beschwerden eine Fachperson konsultiert werden soll.`;
      const prompt = `Bitte gib eine strukturierte Infokarte zum Supplement "${q}" – wie in einer Biohacking-Datenbank.`;
      try {
        const { text } = await callGemini(prompt, { systemInstruction: sys, temperature: 0.3, maxOutputTokens: 2048 });
        aiBox.innerHTML = `<div class="supp-ai">
          <div class="supp-ai-head"><span class="eyebrow">🤖 KI-Antwort (nicht in DB)</span><h3>${escapeHtml(q)}</h3></div>
          <div class="supp-ai-body">${mdToHtml(text)}</div>
        </div>`;
      } catch (err) {
        aiBox.innerHTML = `<div class="supp-ai-error">❌ KI-Fehler: ${escapeHtml(err.message)}</div>`;
      }
    }

    // Initial-Render: zeige alle Supplements direkt beim Laden der Seite
    render();
  }

  function initSymptomView() {
    const select = $('#symptom-select');
    const btn = $('#symptom-btn');
    const results = $('#symptom-results');
    if (!select) return;

    if (typeof GOALS !== 'undefined' && Array.isArray(GOALS)) {
      const featured = GOALS.filter(g => g.featured);
      const rest = GOALS.filter(g => !g.featured);

      const makeOpt = (g) => `<option value="${escapeHtml(g.label)}">${escapeHtml(g.label)}</option>`;

      let html = '<option value="">– Symptom oder Ziel wählen –</option>';
      if (featured.length) {
        html += '<optgroup label="★ Häufige Anliegen">' + featured.map(makeOpt).join('') + '</optgroup>';
      }
      if (rest.length) {
        html += '<optgroup label="Weitere Ziele & Symptome">' + rest.map(makeOpt).join('') + '</optgroup>';
      }
      select.innerHTML = html;
    }

    btn.addEventListener('click', runRecommendation);
    select.addEventListener('change', () => {
      if (select.value) runRecommendation();
    });

    async function runRecommendation() {
      const q = (select.value || '').trim();
      if (!q) { select.focus(); return; }

      const local = localRecommend(q);

      let html = '';
      html += `<div class="results-head"><h3>Empfehlung für: „${escapeHtml(q)}"</h3></div>`;
      html += `<div class="results-section"><h4>💊 Passende Supplements (aus der DB)</h4>`;
      if (local.supplements.length) {
        html += `<div class="supplement-grid">` + local.supplements.map(s => `
          <article class="supp-card">
            <div class="supp-head">
              <span class="supp-cat">${escapeHtml(s.category)}</span>
              ${s.evidence ? `<span class="ev ev-${s.evidence}">${s.evidence}</span>` : ''}
            </div>
            <h3>${escapeHtml(s.name)}</h3>
            <p>${escapeHtml(s.short || '')}</p>
            ${s.dosage ? `<p class="small"><strong>Dosis:</strong> ${escapeHtml(s.dosage)}</p>` : ''}
          </article>
        `).join('') + `</div>`;
      } else {
        html += `<p class="muted">Keine direkten DB-Treffer – dafür die KI-Antwort unten.</p>`;
      }
      html += `</div>`;

      if (local.tips.length) {
        html += `<div class="results-section"><h4>🧠 Passende Biohacking-Tipps</h4><div class="tips-grid">` +
          local.tips.map(t => `
            <article class="tip-card">
              <div class="tip-icon">${escapeHtml(t.icon || '💡')}</div>
              <div class="tip-cat">${escapeHtml(t.category)}</div>
              <h3>${escapeHtml(t.title)}</h3>
              <p>${escapeHtml(t.short)}</p>
              <p class="tip-how"><strong>Wie:</strong> ${escapeHtml(t.how)}</p>
            </article>
          `).join('') + `</div></div>`;
      }

      html += `<div class="results-section ai-section">
        <h4>🤖 KI-Einschätzung</h4>
        <div id="symptom-ai-output" class="ai-output"><em>KI tippt…</em></div>
      </div>`;

      results.innerHTML = html;

      const out = $('#symptom-ai-output');
      if (!loadApiKey()) {
        out.innerHTML = `<p class="err">Kein Gemini-Key verfügbar. Siehe <a href="#about">Über</a>.</p>`;
        return;
      }

      const sys = `Du bist ein Biohacking-Coach. Der Nutzer beschreibt ein Symptom oder Ziel auf Deutsch. Antworte strukturiert auf Deutsch mit Markdown:
## Mögliche Ursachen
## Lifestyle-Empfehlungen (Schlaf, Licht, Bewegung, Ernährung)
## Supplement-Empfehlungen (konkret mit Dosis & Einnahme)
## Wann zum Arzt

Halte dich kurz, fokussiert auf Biohacking-Prinzipien. Keine Heilversprechen. Schließe mit dem Hinweis, dass bei anhaltenden oder schweren Beschwerden eine ärztliche Abklärung nötig ist.`;

      try {
        const { text } = await callGemini(q, { systemInstruction: sys, temperature: 0.4, maxOutputTokens: 2048 });
        out.innerHTML = mdToHtml(text);
      } catch (err) {
        out.innerHTML = `<p class="err">KI-Fehler: ${escapeHtml(err.message)}</p>`;
      }
    }

    function localRecommend(query) {
      const norm = normalizeStr(query);
      const words = norm.split(' ').filter(Boolean);

      const tagHits = {};
      if (typeof GOALS !== 'undefined') {
        GOALS.forEach(g => {
          let matches = 0;
          for (const kw of g.keywords) {
            if (norm.includes(normalizeStr(kw))) matches += 2;
          }
          for (const w of words) {
            for (const kw of g.keywords) {
              if (normalizeStr(kw).includes(w) && w.length > 3) matches++;
            }
          }
          if (matches > 0) {
            for (const t of g.tags) tagHits[t] = (tagHits[t] || 0) + matches;
          }
        });
      }
      for (const w of words) if (w.length > 2) tagHits[w] = (tagHits[w] || 0) + 1;

      const scoreSupp = (s) => (s.tags || []).reduce((sum, t) => sum + (tagHits[t] || 0), 0);
      const scoreTip = (t) => (t.tags || []).reduce((sum, x) => sum + (tagHits[x] || 0), 0);

      const sortedSupps = (typeof SUPPLEMENTS !== 'undefined' ? SUPPLEMENTS : [])
        .map(s => ({ s, sc: scoreSupp(s) }))
        .filter(o => o.sc > 0)
        .sort((a, b) => b.sc - a.sc)
        .slice(0, 6)
        .map(o => o.s);

      const sortedTips = (typeof TIPS !== 'undefined' ? TIPS : [])
        .map(t => ({ t, sc: scoreTip(t) }))
        .filter(o => o.sc > 0)
        .sort((a, b) => b.sc - a.sc)
        .slice(0, 6)
        .map(o => o.t);

      return { supplements: sortedSupps, tips: sortedTips };
    }
  }

  let newsLoaded = false;
  let newsData = null;
  let newsCurrentTopic = 'all';

  function initNewsView() {
    const refreshBtn = $('#news-refresh');
    const chipsBar = $('#news-topic-chips');
    refreshBtn?.addEventListener('click', () => loadNews(true));
    chipsBar?.addEventListener('click', (e) => {
      const c = e.target.closest('.chip');
      if (!c) return;
      $$('.chip', chipsBar).forEach(x => x.classList.toggle('chip--active', x === c));
      newsCurrentTopic = c.dataset.topic;
      loadNews(false);
    });
  }

  async function onEnterNews() {
    if (newsLoaded && newsData && newsData.topic === newsCurrentTopic) {
      renderNews(newsData);
      return;
    }
    const cached = loadNewsFromCache();
    if (cached && cached.topic === newsCurrentTopic) {
      newsData = cached;
      newsLoaded = true;
      renderNews(cached, { fromCache: true });
      return;
    }
    loadNews(false);
  }

  function loadNewsFromCache() {
    try {
      const raw = localStorage.getItem(NEWS_CACHE_KEY);
      if (!raw) return null;
      const obj = JSON.parse(raw);
      if (!obj?.ts || !obj?.data) return null;
      if (Date.now() - obj.ts > NEWS_CACHE_TTL_MS) return null;
      return obj.data;
    } catch (_) { return null; }
  }

  function saveNewsToCache(data) {
    try { localStorage.setItem(NEWS_CACHE_KEY, JSON.stringify({ ts: Date.now(), data })); } catch (_) {}
  }

  async function loadNews(_force) {
    const statusEl = $('#news-status');
    const listEl = $('#news-list');
    if (!loadApiKey()) {
      statusEl.innerHTML = '<div class="err">Kein Gemini-Key verfügbar. Siehe <a href="#about">Über</a>.</div>';
      return;
    }

    statusEl.innerHTML = '<div class="info">🔎 KI recherchiert aktuelle News (mit Web-Suche)…</div>';
    listEl.innerHTML = '';

    const topicMap = {
      all: 'Biohacking, Longevity, Supplement-Forschung, Ernährung, Fasten, Sauerstoff, Bewegung, Schlaf, Wearables',
      longevity: 'Longevity-Forschung, Lebensverlängerung, Altern, Epigenetik, Telomere, Rapamycin, NAD+',
      supplements: 'Supplement-Studien, neue Nootropika, Vitamin-/Mineral-Forschung',
      ernaehrung: 'Ernährung, Intervallfasten, Keto, Protein, Darmgesundheit',
      bewegung: 'Bewegung, Schlaf-Forschung, zirkadianer Rhythmus, HIIT, Zone 2',
      tech: 'Wearables, Continuous Glucose Monitoring, Biomarker-Tracking, HealthTech-Gadgets'
    };
    const topic = topicMap[newsCurrentTopic] || topicMap.all;

    const sys = `Du bist ein Biohacking-News-Redakteur. Liefere aktuelle, seriöse Nachrichten auf Deutsch.
Antworte AUSSCHLIESSLICH mit gültigem JSON (ohne Markdown-Codeblock, ohne Kommentar) im Schema:
{"items":[{"title":"...","summary":"2-4 Sätze deutsch","category":"Longevity|Supplements|Ernährung|Bewegung|Tech|Forschung","url":"https://..."}]}
Gib 6–10 Einträge. URLs müssen zur Originalquelle führen. Keine ausgedachten Inhalte – nur was du per Web-Suche belegen kannst.`;

    const prompt = `Recherchiere die aktuellsten Nachrichten (letzte 7–30 Tage) aus folgenden Bereichen: ${topic}. Gib sie als JSON aus.`;

    try {
      const { text, sources } = await callGemini(prompt, {
        systemInstruction: sys,
        temperature: 0.2,
        grounding: true,
        maxOutputTokens: 4096
      });

      const json = extractJson(text);
      if (!json || !Array.isArray(json.items)) {
        throw new Error('Ungültige JSON-Antwort vom Modell.');
      }
      const data = { items: json.items, sources: sources || [], topic: newsCurrentTopic, fetched: Date.now() };
      newsData = data;
      newsLoaded = true;
      saveNewsToCache(data);
      renderNews(data);
    } catch (err) {
      statusEl.innerHTML = `<div class="err">❌ Konnte News nicht laden: ${escapeHtml(err.message)}</div>`;
    }
  }

  function extractJson(text) {
    if (!text) return null;
    const cleaned = text.replace(/```(?:json)?/gi, '').replace(/```/g, '').trim();
    const first = cleaned.indexOf('{');
    const last = cleaned.lastIndexOf('}');
    if (first === -1 || last === -1) return null;
    try {
      return JSON.parse(cleaned.slice(first, last + 1));
    } catch (_) {
      return null;
    }
  }

  function renderNews(data, opts = {}) {
    const statusEl = $('#news-status');
    const listEl = $('#news-list');
    const when = new Date(data.fetched || Date.now()).toLocaleString('de-DE');
    statusEl.innerHTML = `<div class="ok">✓ ${data.items.length} News geladen · Stand: ${escapeHtml(when)}${opts.fromCache ? ' · (aus Cache)' : ''}</div>`;

    listEl.innerHTML = data.items.map(n => {
      const domain = (() => { try { return new URL(n.url).hostname.replace(/^www\./, ''); } catch (_) { return ''; } })();
      return `
        <article class="news-card">
          <div class="news-cat">${escapeHtml(n.category || 'News')}</div>
          <h3><a href="${escapeHtml(n.url)}" target="_blank" rel="noopener">${escapeHtml(n.title)}</a></h3>
          <p>${escapeHtml(n.summary || '')}</p>
          ${domain ? `<div class="news-src">🔗 ${escapeHtml(domain)}</div>` : ''}
        </article>
      `;
    }).join('');

    if (data.sources?.length) {
      listEl.insertAdjacentHTML('beforeend', `
        <div class="news-sources">
          <h4>Quellen (Web-Suche)</h4>
          <ul>${data.sources.slice(0, 10).map(s => `<li><a href="${escapeHtml(s.uri)}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a></li>`).join('')}</ul>
        </div>
      `);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initSupplementView();
    initSymptomView();
    initNewsView();
    initRouter();
    onEnterHome();
  });

})();
