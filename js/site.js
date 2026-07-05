// ==========================================================================
// Site behaviour. No build step — this runs directly in the browser.
// ==========================================================================

const POSTS_INDEX = 'posts/index.json';

/** Fetch and parse posts/index.json. Sorted newest first. */
async function loadPosts() {
  const res = await fetch(POSTS_INDEX, { cache: 'no-store' });
  if (!res.ok) throw new Error('Could not load posts/index.json');
  const posts = await res.json();
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

/** Render a hairline-divided article list into a container element. */
function renderArticleList(container, posts) {
  if (!posts.length) {
    container.innerHTML = `<div class="empty-state">No articles in this category yet — check back soon.</div>`;
    return;
  }
  container.innerHTML = posts.map(p => `
    <div class="article-row">
      <div class="date">${formatDate(p.date)}</div>
      <div>
        <div class="meta">
          <span class="tag">${escapeHtml(p.category)}</span>
        </div>
        <h3><a class="title-link" href="article.html?slug=${encodeURIComponent(p.slug)}">${escapeHtml(p.title)}</a></h3>
        <p class="excerpt">${escapeHtml(p.excerpt)}</p>
      </div>
      <div class="read-time">${escapeHtml(p.readTime || '')}</div>
    </div>
  `).join('');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str ?? '';
  return div.innerHTML;
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
  });
}

// ---------------- Home page ----------------
async function initHome() {
  const el = document.querySelector('#latest-articles');
  if (!el) return;
  try {
    const posts = await loadPosts();
    renderArticleList(el, posts.slice(0, 4));
  } catch (e) {
    el.innerHTML = `<div class="empty-state">Couldn't load articles right now.</div>`;
    console.error(e);
  }
}

// ---------------- Archive page ----------------
async function initArchive() {
  const el = document.querySelector('#all-articles');
  const filterBar = document.querySelector('#category-filters');
  if (!el) return;

  try {
    const posts = await loadPosts();
    const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

    if (filterBar) {
      filterBar.innerHTML = categories.map((c, i) => `
        <button class="filter-btn" data-category="${escapeHtml(c)}" aria-pressed="${i === 0}">${escapeHtml(c)}</button>
      `).join('');

      filterBar.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.setAttribute('aria-pressed', 'false'));
        btn.setAttribute('aria-pressed', 'true');
        const cat = btn.dataset.category;
        const filtered = cat === 'All' ? posts : posts.filter(p => p.category === cat);
        renderArticleList(el, filtered);
      });
    }

    renderArticleList(el, posts);
  } catch (e) {
    el.innerHTML = `<div class="empty-state">Couldn't load articles right now.</div>`;
    console.error(e);
  }
}

// ---------------- Single article page ----------------
async function initArticle() {
  const root = document.querySelector('#article-root');
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  if (!slug) {
    root.innerHTML = `<div class="wrap"><p class="empty-state">No article specified.</p></div>`;
    return;
  }

  try {
    const posts = await loadPosts();
    const post = posts.find(p => p.slug === slug);
    if (!post) throw new Error('Article not found in index');

    const mdRes = await fetch(`posts/${post.file}`, { cache: 'no-store' });
    if (!mdRes.ok) throw new Error('Could not load article file');
    const raw = await mdRes.text();

    document.title = `${post.title} — Ledger & Ribbon`;

    document.querySelector('#article-eyebrow').innerHTML =
      `<span class="tag">${escapeHtml(post.category)}</span><span>${formatDate(post.date)}</span><span>·</span><span>${escapeHtml(post.readTime || '')}</span>`;
    document.querySelector('#article-title').textContent = post.title;
    document.querySelector('#article-byline').textContent = post.excerpt;

    const bodyEl = document.querySelector('#article-body');
    bodyEl.innerHTML = window.marked ? window.marked.parse(raw) : `<pre>${escapeHtml(raw)}</pre>`;

    // Build prev/next navigation
    const idx = posts.findIndex(p => p.slug === slug);
    const prev = posts[idx + 1]; // older
    const next = posts[idx - 1]; // newer
    const navEl = document.querySelector('#article-nav');
    navEl.innerHTML = `
      ${prev ? `<a class="pill pill-outline" href="article.html?slug=${encodeURIComponent(prev.slug)}">← ${escapeHtml(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a class="pill pill-outline" href="article.html?slug=${encodeURIComponent(next.slug)}">${escapeHtml(next.title)} →</a>` : '<span></span>'}
    `;
  } catch (e) {
    root.innerHTML = `<div class="wrap"><p class="empty-state">This article couldn't be loaded. It may have been moved or renamed.</p></div>`;
    console.error(e);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHome();
  initArchive();
  initArticle();
});
