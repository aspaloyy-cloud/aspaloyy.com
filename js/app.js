(() => {
  const html = document.documentElement;
  const THEME_KEY = 'asp_theme';

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    localStorage.setItem(THEME_KEY, t);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = t === 'light' ? '☀️' : '🌙';
  }

  applyTheme(localStorage.getItem(THEME_KEY) === 'light' ? 'light' : 'dark');

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    applyTheme(html.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });

  const nav = document.querySelector('.nav');
  if (nav) {
    const tick = () => nav.classList.toggle('solid', window.scrollY > 20);
    window.addEventListener('scroll', tick, { passive: true });
    tick();
  }

  // Load real icons/data for link preview cards via microlink.io
  document.querySelectorAll('a.link-preview[href]').forEach(function(card) {
    var url = card.getAttribute('href');
    var img = card.querySelector('.link-preview-img');
    if (!img) return;

    fetch('https://api.microlink.io/?url=' + encodeURIComponent(url) + '&palette=false')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.status !== 'success') return;
        var d = data.data;

        var imageUrl = (d.image && d.image.url) || (d.logo && d.logo.url);
        if (imageUrl) {
          img.src = imageUrl;
          img.onload = function() { card.classList.add('lp-loaded'); };
          img.onerror = function() { /* keep emoji fallback */ };
        }

        var titleEl = card.querySelector('.link-preview-title');
        if (titleEl && d.title) titleEl.textContent = d.title;

        var descEl = card.querySelector('.link-preview-desc');
        if (descEl && d.description) descEl.textContent = d.description;
      })
      .catch(function() { /* keep static fallback */ });
  });
})();
