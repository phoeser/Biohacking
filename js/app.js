/* Biohacking Supplement Check – App-Logik
 * Vanilla JS, keine Abhängigkeiten, funktioniert auf GitHub Pages.
 */

(function () {
  'use strict';

  // ============================================================
  //  Hilfsfunktionen
  // ============================================================
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const el = (tag, attrs = {}, children = []) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null) continue;
      if (k === 'class') e.className = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v);
    }
    (Array.isArray(children) ? children : [children]).forEach((c) => {
      if (c == null) return;
      e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
    });
    return e;
  };

  const normalize = (s) => (s || '').toLowerCase().replace(/[äöüß]/g, (c) => ({ ä: 'a', ö: 'o', ü: 'u', ß: 'ss' }[c])).trim();

  const evidenceLabel = (lvl) => ({ hoch: 'Hohe Evidenz', mittel: 'Mittlere Evidenz', niedrig: 'Vorläufig' }[lvl] || lvl);

  // Anzeigename für Supplement-IDs, die (noch) nicht voll in der Datenbank sind
  const EXTERNAL_NAMES = {
    'kalzium': 'Kalzium', 'kalium': 'Kalium', 'vitamin-e': 'Vitamin E',
    'folsaeure': 'Folsäure', 'beta-alanin': 'Beta-Alanin',
    'pterostilben': 'Pterostilben', 'trimethylglycin': 'Trimethylglycin (TMG)',
    'fisetin': 'Fisetin', 'bromelain': 'Bromelain', 'zimt': 'Zimt',
    'hyaluronsaeure': 'Hyaluronsäure', 'praebiotika': 'Präbiotika'
  };

  function resolveSupp(id) {
    const found = SUPPLEMENTS.find((x) => x.id === id);
    if (found) return { id, name: found.name, link: true, data: found };
    return { id, name: EXTERNAL_NAMES[id] || id, link: false };
  }

  // ============================================================
  //  State
  // ============================================================
  const state = {
    selectedCategory: 'all',
    searchQuery: '',
    selectedTipCategory: 'Alle'
  };

  // ============================================================
  //  Hero-Stats
  // ============================================================
  function initStats() {
    $('#stat-supplements').textContent = SUPPLEMENTS.length;
    $('#stat-tips').textContent = TIPS.length;
    $('#stat-goals').textContent = GOALS.length;
  }

  // ============================================================
  //  Empfehlungs-Algorithmus
  // ============================================================
  function recommend(query) {
    const normQuery = normalize(query);
    if (!normQuery) return { supplements: [], tips: [], matchedGoals: [] };

    const matchedGoals = GOALS.filter((g) =>
      g.keywords.some((kw) => normQuery.includes(normalize(kw)))
    );

    const relevantTags = new Set();
    matchedGoals.forEach((g) => g.tags.forEach((t) => relevantTags.add(t)));
    SUPPLEMENTS.forEach((s) => {
      s.tags.forEach((t) => {
        if (normQuery.includes(normalize(t))) relevantTags.add(t);
      });
    });

    if (relevantTags.size === 0) {
      return { supplements: [], tips: [], matchedGoals: [] };
    }

    const supplementScores = SUPPLEMENTS.map((s) => {
      const score = s.tags.filter((t) => relevantTags.has(t)).length;
      const nameBonus = normQuery.includes(normalize(s.name)) ? 2 : 0;
      const evBonus = s.evidence === 'hoch' ? 0.5 : s.evidence === 'mittel' ? 0.2 : 0;
      return { supplement: s, score: score + nameBonus + evBonus };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);

    const tipScores = TIPS.map((t) => {
      const score = t.tags.filter((tag) => relevantTags.has(tag)).length;
      return { tip: t, score };
    })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);

    return {
      supplements: supplementScores.map((x) => x.supplement),
      tips: tipScores.map((x) => x.tip),
      matchedGoals
    };
  }

  function renderRecommendation(query) {
    const results = recommend(query);
    const container = $('#recommendation-results');
    container.innerHTML = '';

    if (!query.trim()) return;

    if (results.supplements.length === 0 && results.tips.length === 0) {
      container.appendChild(
        el('div', { class: 'rec-empty' }, [
          el('p', {}, [
            'Keine direkte Empfehlung gefunden. Versuche konkreter zu formulieren – z. B. „besser schlafen", „mehr Energie", „Stress reduzieren" oder „Muskelaufbau".'
          ])
        ])
      );
      return;
    }

    const header = el('div', { class: 'rec-header' }, [
      el('h3', {}, ['Deine persönlichen Empfehlungen']),
      el('span', { class: 'rec-count' }, [
        `${results.supplements.length + results.tips.length} Treffer`
      ])
    ]);
    container.appendChild(header);

    if (results.matchedGoals.length > 0) {
      const goalsRow = el('div', { class: 'quick-chips', style: 'margin-bottom: 28px;' }, [
        el('span', { class: 'chips-label' }, ['Erkannte Ziele:']),
        ...results.matchedGoals.map((g) => el('span', { class: 'chip active' }, [g.label]))
      ]);
      container.appendChild(goalsRow);
    }

    if (results.supplements.length > 0) {
      const suppSection = el('div', { class: 'rec-section' }, [
        el('h4', {}, ['Empfohlene Supplements'])
      ]);
      const grid = el('div', { class: 'supplement-grid' });
      results.supplements.forEach((s) => grid.appendChild(renderSupplementCard(s)));
      suppSection.appendChild(grid);
      container.appendChild(suppSection);
    }

    if (results.tips.length > 0) {
      const tipsSection = el('div', { class: 'rec-section' }, [
        el('h4', {}, ['Passende Biohacking-Tipps'])
      ]);
      const tipsGrid = el('div', { class: 'tips-grid' });
      results.tips.forEach((t) => tipsGrid.appendChild(renderTipCard(t)));
      tipsSection.appendChild(tipsGrid);
      container.appendChild(tipsSection);
    }

    setTimeout(() => {
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  // ============================================================
  //  Supplement-Karten
  // ============================================================
  function renderSupplementCard(s) {
    return el('div', {
      class: 'supplement-card',
      'data-id': s.id,
      role: 'button',
      tabindex: '0',
      onclick: () => openModal(s),
      onkeydown: (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(s); } }
    }, [
      el('span', { class: 'supp-category' }, [s.category]),
      el('h3', { class: 'supp-name' }, [s.name]),
      el('p', { class: 'supp-desc' }, [s.short]),
      el('div', { class: 'supp-footer' }, [
        el('span', { class: 'evidence' }, [
          el('span', { class: `evidence-dot ${s.evidence}` }),
          evidenceLabel(s.evidence)
        ]),
        el('span', { class: 'supp-arrow' }, ['→'])
      ])
    ]);
  }

  function renderSupplementGrid() {
    const grid = $('#supplement-grid');
    const noResults = $('#no-results');
    const q = normalize(state.searchQuery);

    const filtered = SUPPLEMENTS.filter((s) => {
      const catMatch = state.selectedCategory === 'all' || s.category === state.selectedCategory;
      const qMatch = !q ||
        normalize(s.name).includes(q) ||
        normalize(s.altNames || '').includes(q) ||
        s.tags.some((t) => normalize(t).includes(q)) ||
        normalize(s.short).includes(q);
      return catMatch && qMatch;
    });

    grid.innerHTML = '';
    if (filtered.length === 0) {
      noResults.classList.remove('hidden');
    } else {
      noResults.classList.add('hidden');
      filtered.forEach((s) => grid.appendChild(renderSupplementCard(s)));
    }
  }

  // ============================================================
  //  Kategorie-Filter
  // ============================================================
  function renderCategoryFilters() {
    const container = $('#category-filters');
    container.innerHTML = '';
    CATEGORIES.forEach((cat) => {
      const chip = el('button', {
        class: 'chip' + (state.selectedCategory === cat.id ? ' active' : ''),
        onclick: () => {
          state.selectedCategory = cat.id;
          renderCategoryFilters();
          renderSupplementGrid();
        }
      }, [cat.label]);
      container.appendChild(chip);
    });
  }

  // ============================================================
  //  Modal (Supplement-Detail)
  // ============================================================
  function openModal(s) {
    const body = $('#modal-body');
    body.innerHTML = '';

    const synergySupps = (s.synergies || []).map(resolveSupp);
    const avoidSupps = (s.avoid || []).map(resolveSupp);

    const content = el('div', { class: 'modal-body' }, [
      el('span', { class: 'supp-category' }, [s.category]),
      el('h2', { id: 'modal-title' }, [s.name]),
      s.altNames ? el('p', { class: 'alt-names' }, [`Auch bekannt als: ${s.altNames}`]) : null,

      el('div', { class: 'meta-row' }, [
        el('span', { class: 'meta-badge' }, [
          el('span', { class: `evidence-dot ${s.evidence}` }),
          ' ', evidenceLabel(s.evidence)
        ]),
        s.sources ? el('span', { class: 'meta-badge' }, [
          el('strong', {}, ['Quellen: ']), s.sources
        ]) : null
      ]),

      el('p', { class: 'lead' }, [s.description]),

      el('div', { class: 'detail-grid' }, [
        el('div', { class: 'detail-block' }, [
          el('h4', {}, ['💊 Dosierung']),
          el('p', {}, [s.dosage])
        ]),
        el('div', { class: 'detail-block' }, [
          el('h4', {}, ['⏰ Einnahme']),
          el('p', {}, [s.intake])
        ])
      ]),

      el('div', { class: 'benefits-risks' }, [
        el('div', { class: 'benefits-box' }, [
          el('h4', {}, ['✓ Vorteile']),
          el('ul', {}, s.benefits.map((b) => el('li', {}, [b])))
        ]),
        el('div', { class: 'risks-box' }, [
          el('h4', {}, ['⚠ Zu beachten']),
          el('ul', {}, s.risks.map((r) => el('li', {}, [r])))
        ])
      ]),

      synergySupps.length > 0 ? el('div', { class: 'combo-section' }, [
        el('h4', {}, ['🤝 Gut kombinierbar mit']),
        el('div', { class: 'combo-list' },
          synergySupps.map((syn) =>
            el('span', {
              class: 'combo-chip' + (syn.link ? '' : ' readonly'),
              title: syn.link ? 'Details ansehen' : 'Nicht in Datenbank',
              onclick: syn.link ? () => openModal(syn.data) : null
            }, [syn.name])
          )
        )
      ]) : null,

      avoidSupps.length > 0 ? el('div', { class: 'combo-section' }, [
        el('h4', {}, ['❌ Nicht gleichzeitig mit']),
        el('div', { class: 'combo-list' },
          avoidSupps.map((a) =>
            el('span', {
              class: 'combo-chip avoid' + (a.link ? '' : ' readonly'),
              title: a.link ? 'Details ansehen' : 'Nicht in Datenbank',
              onclick: a.link ? () => openModal(a.data) : null
            }, [a.name])
          )
        )
      ]) : null
    ]);

    body.appendChild(content);
    $('#modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    $('.modal-content').scrollTop = 0;
  }

  function closeModal() {
    $('#modal').classList.add('hidden');
    document.body.style.overflow = '';
  }

  // ============================================================
  //  Tipps
  // ============================================================
  function renderTipCard(t) {
    return el('article', { class: 'tip-card' }, [
      el('span', { class: 'tip-icon' }, [t.icon]),
      el('div', { class: 'tip-category' }, [t.category]),
      el('h3', { class: 'tip-title' }, [t.title]),
      el('p', { class: 'tip-desc' }, [t.short]),
      el('div', { class: 'tip-how', html: `<strong>So geht's: </strong>${t.how}` })
    ]);
  }

  function renderTips() {
    const grid = $('#tips-grid');
    grid.innerHTML = '';
    const filtered = state.selectedTipCategory === 'Alle'
      ? TIPS
      : TIPS.filter((t) => t.category === state.selectedTipCategory);
    filtered.forEach((t) => grid.appendChild(renderTipCard(t)));
  }

  function renderTipsFilter() {
    const container = $('#tips-filter');
    container.innerHTML = '';
    TIP_CATEGORIES.forEach((cat) => {
      const chip = el('button', {
        class: 'chip' + (state.selectedTipCategory === cat ? ' active' : ''),
        onclick: () => {
          state.selectedTipCategory = cat;
          renderTipsFilter();
          renderTips();
        }
      }, [cat]);
      container.appendChild(chip);
    });
  }

  // ============================================================
  //  Quick Chips (Empfehlungs-Tool)
  // ============================================================
  function renderQuickChips() {
    const container = $('#quick-chips');
    const featured = GOALS.filter((g) => g.featured);
    featured.forEach((g) => {
      const chip = el('button', {
        class: 'chip',
        onclick: () => {
          const input = $('#goal-input');
          input.value = g.label;
          renderRecommendation(g.label);
        }
      }, [g.label]);
      container.appendChild(chip);
    });
  }

  // ============================================================
  //  KI-Assistent (BYOK Gemini)
  // ============================================================
  const AI_KEY_STORAGE = 'bhc_gemini_key_v1';
  const AI_MODEL = 'gemini-2.0-flash';
  // Fallback-Key: wird benutzt, wenn Nutzer keinen eigenen Key im localStorage hat.
  // WICHTIG: Key in der Google Cloud Console per HTTP-Referrer auf die eigene GitHub-Pages-Domain beschraenken!
  const AI_DEFAULT_KEY = 'AIzaSyChru7NdhCrZzB4I1MxqFhVmaxXN9HLLbg';
  const AI_ENDPOINT = (model, key) =>
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(key)}`;

  const aiState = {
    history: [], // Gemini-Format: [{role:'user'|'model', parts:[{text}]}]
    busy: false
  };

  const AI_EXAMPLES = [
    'Ich schlafe schlecht und bin morgens erschöpft',
    'Wie steigere ich meine VO₂max?',
    'Was tun gegen Heißhunger abends?',
    'Wie funktioniert Fasten richtig?',
    'Ich fühle mich oft kurzatmig',
    'Mehr Energie trotz Büroalltag',
    'Was tun bei chronischem Stress?'
  ];

  function loadApiKey() {
    // 1) Persoenlicher Key aus localStorage hat Vorrang
    try {
      const stored = localStorage.getItem(AI_KEY_STORAGE);
      if (stored) return stored;
    } catch (e) {}
    // 2) Sonst Default-Key (damit Freunde ohne eigenen Key testen koennen)
    return AI_DEFAULT_KEY || '';
  }

  function loadStoredApiKey() {
    try { return localStorage.getItem(AI_KEY_STORAGE) || ''; } catch (e) { return ''; }
  }

  function usingDefaultKey() {
    return !loadStoredApiKey() && !!AI_DEFAULT_KEY;
  }

  function saveApiKey(key) {
    try { localStorage.setItem(AI_KEY_STORAGE, key); return true; } catch (e) { return false; }
  }

  function clearApiKey() {
    try { localStorage.removeItem(AI_KEY_STORAGE); } catch (e) {}
  }

  function maskKey(k) {
    if (!k) return '';
    if (k.length <= 10) return '•'.repeat(k.length);
    return k.slice(0, 4) + '…' + k.slice(-4);
  }

  function updateKeyStatus() {
    const status = $('#ai-key-status');
    const storedKey = loadStoredApiKey();
    const keyInput = $('#ai-key-input');
    if (!status || !keyInput) return;
    if (storedKey) {
      status.className = 'ai-key-status ok';
      status.textContent = `✓ Persönlicher Key gespeichert (${maskKey(storedKey)}). Du kannst jetzt Fragen stellen.`;
      keyInput.value = storedKey;
      keyInput.type = 'password';
    } else if (usingDefaultKey()) {
      status.className = 'ai-key-status ok';
      status.textContent = '✓ Standard-Key der App wird verwendet – du kannst direkt loslegen. Optional: oben eigenen Key hinterlegen (empfohlen bei intensiver Nutzung).';
      keyInput.value = '';
      keyInput.type = 'password';
    } else {
      status.className = 'ai-key-status';
      status.textContent = 'Kein Key hinterlegt – bitte oben einen Google-AI-Studio-Key einfügen.';
    }
  }

  // System-Prompt: begrenzt auf App-Kontext
  function buildSystemPrompt() {
    const suppNames = SUPPLEMENTS.map((s) => s.name).join(', ');
    const tipTitles = TIPS.map((t) => t.title).slice(0, 20).join('; ');
    return [
      'Du bist ein deutschsprachiger Biohacking-Assistent innerhalb der App "Biohacking Supplement Check".',
      'Antworte immer auf Deutsch, sachlich, strukturiert, in kompakten Abschnitten mit Markdown-Ueberschriften (## Moegliche Ursachen, ## Lifestyle & Biohacking, ## Supplements, ## Wann zum Arzt).',
      'Fokus-Themen: Schlaf, Ernaehrung, Fasten, Sauerstoff & Atmung, Bewegung, Stress, Licht, Longevity.',
      'Stuetze dich primaer auf etablierte Biohacking-Prinzipien (z. B. zirkadianer Rhythmus, Mitochondrien, Autophagie, HRV, Kaelte/Hitze-Exposition).',
      'Empfehle wenn moeglich Supplements aus der App-Datenbank (Beispiele: ' + suppNames + ').',
      'Empfehle wenn moeglich Biohacking-Tipps aus der App (z. B. ' + tipTitles + ').',
      'Gib realistische Dosierungen, markiere diese klar als allgemeine Richtwerte.',
      'KEINE Heilversprechen. KEINE Diagnose. Weise bei ernsten oder akuten Beschwerden, Schwangerschaft, Medikation, Kindern, Herz/Lunge/Niere explizit auf aerztliche Abklaerung hin.',
      'Maximale Antwortlaenge: ca. 350 Woerter, praegnant statt ausufernd.',
      'Wenn die Frage nichts mit Gesundheit/Biohacking zu tun hat: hoeflich darauf hinweisen und zur App-Thematik zurueckfuehren.'
    ].join(' ');
  }

  async function callGemini(userMessage) {
    const key = loadApiKey();
    if (!key) throw new Error('NO_KEY');

    const body = {
      systemInstruction: { role: 'system', parts: [{ text: buildSystemPrompt() }] },
      contents: [
        ...aiState.history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.9,
        maxOutputTokens: 900
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' }
      ]
    };

    const res = await fetch(AI_ENDPOINT(AI_MODEL, key), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    if (!res.ok) {
      const errText = await res.text();
      let errJson;
      try { errJson = JSON.parse(errText); } catch (e) {}
      const msg = (errJson && errJson.error && errJson.error.message) || errText || ('HTTP ' + res.status);
      if (res.status === 400 && /API key/i.test(msg)) throw new Error('INVALID_KEY');
      if (res.status === 403) throw new Error('FORBIDDEN');
      if (res.status === 429) throw new Error('RATE_LIMIT');
      throw new Error(msg);
    }

    const data = await res.json();
    const cand = data.candidates && data.candidates[0];
    if (!cand) throw new Error('Keine Antwort erhalten.');
    if (cand.finishReason === 'SAFETY') return 'Die Antwort wurde aus Sicherheitsgruenden blockiert. Bitte formuliere die Frage anders.';
    const text = (cand.content && cand.content.parts || []).map((p) => p.text).join('') || '';
    return text.trim() || 'Leere Antwort. Bitte versuche es erneut.';
  }

  // Einfaches, sicheres Markdown-Rendering (Subset)
  function renderMarkdown(md) {
    const esc = (s) => s
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    let html = esc(md);
    html = html.replace(/^### (.+)$/gm, '<h5>$1</h5>');
    html = html.replace(/^## (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^# (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    html = html.replace(/`([^`\n]+)`/g, '<code>$1</code>');
    html = html.replace(/(?:^|\n)((?:- [^\n]+\n?)+)/g, (_, list) => {
      const items = list.trim().split(/\n/).map((l) => '<li>' + l.replace(/^- /, '') + '</li>').join('');
      return '\n<ul>' + items + '</ul>';
    });
    html = html.replace(/(?:^|\n)((?:\d+\. [^\n]+\n?)+)/g, (_, list) => {
      const items = list.trim().split(/\n/).map((l) => '<li>' + l.replace(/^\d+\. /, '') + '</li>').join('');
      return '\n<ol>' + items + '</ol>';
    });
    html = html.split(/\n{2,}/).map((p) => {
      if (/^<(h\d|ul|ol|li|pre|blockquote)/.test(p.trim())) return p;
      return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
    }).join('\n');
    return html;
  }

  function appendMessage(role, text, opts) {
    opts = opts || {};
    const wrap = $('#ai-messages');
    const welcome = wrap.querySelector('.ai-welcome');
    if (welcome && role === 'user') welcome.remove();

    const bubble = el('div', { class: 'ai-bubble' });
    if (opts.pending) {
      bubble.innerHTML = '<span class="ai-typing"><span></span><span></span><span></span></span>';
    } else if (opts.markdown) {
      bubble.innerHTML = renderMarkdown(text);
    } else {
      bubble.textContent = text;
    }
    const msg = el('div', {
      class: 'ai-message ai-message--' + (role === 'user' ? 'user' : 'bot')
    }, [
      el('div', { class: 'ai-avatar' }, [role === 'user' ? '🧑' : '🤖']),
      bubble
    ]);
    wrap.appendChild(msg);
    wrap.scrollTop = wrap.scrollHeight;
    return { msg: msg, bubble: bubble };
  }

  async function sendAiMessage(userText) {
    if (aiState.busy) return;
    const text = (userText || '').trim();
    if (!text) return;

    if (!loadApiKey()) {
      appendMessage('bot', 'Bitte zuerst oben einen Google-AI-Studio-Key hinterlegen.');
      const ki = $('#ai-key-input'); if (ki) ki.focus();
      return;
    }

    aiState.busy = true;
    const sendBtn = $('#ai-send');
    if (sendBtn) sendBtn.disabled = true;

    appendMessage('user', text);
    $('#ai-input').value = '';

    const pending = appendMessage('bot', '', { pending: true });

    try {
      const reply = await callGemini(text);
      pending.bubble.innerHTML = renderMarkdown(reply);
      aiState.history.push({ role: 'user', parts: [{ text: text }] });
      aiState.history.push({ role: 'model', parts: [{ text: reply }] });
      if (aiState.history.length > 16) aiState.history = aiState.history.slice(-16);
    } catch (err) {
      let msg;
      if (err.message === 'NO_KEY') msg = 'Kein API-Key gespeichert.';
      else if (err.message === 'INVALID_KEY') msg = 'Der API-Key ist ungueltig. Bitte pruefe ihn in Google AI Studio und speichere ihn erneut.';
      else if (err.message === 'FORBIDDEN') msg = 'Zugriff verweigert. Evtl. ist Gemini in deiner Region gesperrt oder der Key hat keine Berechtigung.';
      else if (err.message === 'RATE_LIMIT') msg = 'Kontingent ausgeschoepft. Warte einen Moment und versuche es erneut.';
      else msg = 'Fehler: ' + err.message;
      pending.bubble.innerHTML = '';
      pending.bubble.textContent = msg;
      pending.msg.classList.add('ai-message--error');
    } finally {
      aiState.busy = false;
      if (sendBtn) sendBtn.disabled = false;
      const input = $('#ai-input');
      if (input) input.focus();
    }
  }

  function renderAiChips() {
    const wrap = $('#ai-chips');
    if (!wrap) return;
    AI_EXAMPLES.forEach((q) => {
      const chip = el('button', {
        class: 'chip',
        type: 'button',
        onclick: () => {
          $('#ai-input').value = q;
          $('#ai-input').focus();
        }
      }, [q]);
      wrap.appendChild(chip);
    });
  }

  function initAiAssistant() {
    if (!$('#ki-assistent')) return;

    updateKeyStatus();
    renderAiChips();

    $('#ai-key-save').addEventListener('click', () => {
      const k = ($('#ai-key-input').value || '').trim();
      if (!k) {
        $('#ai-key-status').className = 'ai-key-status err';
        $('#ai-key-status').textContent = 'Bitte einen Key eingeben.';
        return;
      }
      if (!/^AI[A-Za-z0-9_-]{10,}/.test(k)) {
        if (!confirm('Der Key sieht ungewoehnlich aus (erwartet: beginnt mit AI...). Trotzdem speichern?')) return;
      }
      if (saveApiKey(k)) updateKeyStatus();
    });

    $('#ai-key-clear').addEventListener('click', () => {
      clearApiKey();
      $('#ai-key-input').value = '';
      updateKeyStatus();
    });

    $('#ai-key-toggle').addEventListener('click', () => {
      const input = $('#ai-key-input');
      input.type = input.type === 'password' ? 'text' : 'password';
    });

    $('#ai-form').addEventListener('submit', (e) => {
      e.preventDefault();
      sendAiMessage($('#ai-input').value);
    });

    $('#ai-input').addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        sendAiMessage($('#ai-input').value);
      }
    });

    $('#ai-reset').addEventListener('click', () => {
      aiState.history = [];
      $('#ai-messages').innerHTML = '';
      const welcome = el('div', { class: 'ai-message ai-message--bot ai-welcome' }, [
        el('div', { class: 'ai-avatar' }, ['🤖']),
        el('div', { class: 'ai-bubble', html: '<strong>Neuer Chat.</strong> Beschreibe dein Symptom oder Ziel.' })
      ]);
      $('#ai-messages').appendChild(welcome);
    });
  }

  // ============================================================
  //  Event-Listener
  // ============================================================
  function initEvents() {
    const goalInput = $('#goal-input');
    $('#recommend-btn').addEventListener('click', () => renderRecommendation(goalInput.value));
    goalInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') renderRecommendation(goalInput.value);
    });
    $('.btn-clear').addEventListener('click', () => {
      goalInput.value = '';
      $('#recommendation-results').innerHTML = '';
      goalInput.focus();
    });

    const suppSearch = $('#supplement-search');
    suppSearch.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderSupplementGrid();
    });

    $('.modal-close').addEventListener('click', closeModal);
    $('.modal-overlay').addEventListener('click', closeModal);
    document.addEventListener(