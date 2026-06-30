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
})();
