/* Aspaloyy — pre-paint boot
 * Resolves theme + language before the page renders, so there is no
 * flash of the wrong theme and no flash of English for other languages.
 * Must stay small and load synchronously in <head>.
 */
(function () {
  var d = document.documentElement;

  /* ── theme ── */
  var theme = 'dark';
  try {
    var saved = localStorage.getItem('asp_theme');
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (e) {}
  d.setAttribute('data-theme', theme);

  /* ── language: ?lang= → stored → browser → en ── */
  var supported = { en: 1, de: 1, ru: 1, tr: 1, ky: 1 };
  var lang = '';

  var q = location.search.match(/[?&]lang=([A-Za-z-]+)/);
  if (q) lang = q[1].slice(0, 2).toLowerCase();

  if (!supported[lang]) {
    lang = '';
    try {
      var s = localStorage.getItem('asp_lang');
      if (s && supported[s]) lang = s;
    } catch (e) {}
  }

  if (!lang) {
    var nav = (navigator.languages || [navigator.language || 'en']).join(',').toLowerCase();
    lang = /\bde/.test(nav) ? 'de'
         : /\btr/.test(nav) ? 'tr'
         : /\bky/.test(nav) ? 'ky'
         : /\bru/.test(nav) ? 'ru'
         : 'en';
  }

  window.__lang = lang;
  if (q && supported[lang]) {
    try { localStorage.setItem('asp_lang', lang); } catch (e) {}
  }

  /* Static HTML ships in English; hide the page only while a different
     language is about to be applied. Released unconditionally after 1.2s
     so a script failure can never leave a blank page. */
  if (lang !== 'en') {
    d.classList.add('i18n-pending');
    setTimeout(function () { d.classList.remove('i18n-pending'); }, 1200);
  }
})();
