(() => {
  const html = document.documentElement;
  const THEME_KEY = 'asp_theme';

  /* ── theme (initial value already applied by boot.js) ── */
  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = t === 'light' ? '☀️' : '🌙';
  }

  applyTheme(html.getAttribute('data-theme') === 'light' ? 'light' : 'dark');

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  /* ── nav: solid on scroll ── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const tick = () => nav.classList.toggle('solid', window.scrollY > 20);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  /* ── nav: mobile menu ── */
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (navToggle && navLinks) {
    const setOpen = (open) => {
      navLinks.classList.toggle('open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(!navLinks.classList.contains('open'));
    });

    document.addEventListener('click', (e) => {
      if (navLinks.classList.contains('open') && !navLinks.contains(e.target)) setOpen(false);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  /* ── link preview cards: pull the real store icon via microlink.io ── */
  document.querySelectorAll('a.link-preview[href]').forEach(function (card) {
    var url = card.getAttribute('href');
    var img = card.querySelector('.link-preview-img');
    if (!img) return;

    fetch('https://api.microlink.io/?url=' + encodeURIComponent(url) + '&palette=false')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.status !== 'success') return;
        var d = data.data;

        var imageUrl = (d.image && d.image.url) || (d.logo && d.logo.url);
        if (imageUrl) {
          img.src = imageUrl;
          img.onload = function () { card.classList.add('lp-loaded'); };
          img.onerror = function () { /* keep emoji fallback */ };
        }

        var titleEl = card.querySelector('.link-preview-title');
        if (titleEl && d.title) titleEl.textContent = d.title;
      })
      .catch(function () { /* keep static fallback */ });
  });
})();
