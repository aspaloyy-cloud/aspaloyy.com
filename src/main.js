import { translations } from './i18n.js';
import { initTerminal } from './terminal.js';

let currentLang = localStorage.getItem('aspaloyy_lang') || 'ru';

function updateContent() {
  const t = translations[currentLang];
  
  // Nav
  document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => el.textContent = t.nav.about);
  document.querySelectorAll('[data-i18n="nav.projects"]').forEach(el => el.textContent = t.nav.projects);
  document.querySelectorAll('[data-i18n="nav.stack"]').forEach(el => el.textContent = t.nav.stack);
  document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el => el.textContent = t.nav.contact);

  // Hero
  document.querySelector('[data-i18n="hero.status"]').textContent = t.hero.status;
  document.querySelector('[data-i18n="hero.title"]').textContent = t.hero.title;
  document.querySelector('[data-i18n="hero.subtitle"]').textContent = t.hero.subtitle;
  document.querySelector('[data-i18n="hero.description"]').textContent = t.hero.description;

  // Projects
  document.querySelector('[data-i18n="projects.title"]').textContent = t.projects.title;
  document.querySelectorAll('[data-i18n="projects.badge"]').forEach(el => el.textContent = t.projects.badge);

  const projectsContainer = document.getElementById('projects-container');
  if (projectsContainer) {
    projectsContainer.innerHTML = t.projects.items.map(p => `
      <article class="group p-6 rounded-xl bg-surface hover:bg-surfaceHover border border-borderSubtle hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
              <div class="flex items-center justify-between">
                  <h3 class="font-bold text-white text-base group-hover:text-indigo-300 transition-colors">
                      ${p.name}
                  </h3>
                  <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">${p.tag}</span>
              </div>
              <p class="text-zinc-400 text-sm leading-relaxed">
                  ${p.desc}
              </p>
          </div>
          <div class="pt-4 border-t border-borderSubtle flex items-center justify-between text-xs font-mono">
              <span class="text-zinc-500">${p.tech}</span>
              <a href="https://github.com/aspaloyy" target="_blank" rel="noopener noreferrer" class="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  ${t.projects.source}
              </a>
          </div>
      </article>
    `).join('');
  }

  // Stack
  document.querySelector('[data-i18n="stack.title"]').textContent = t.stack.title;
  const stackContainer = document.getElementById('stack-container');
  if (stackContainer) {
    const cats = [t.stack.languages, t.stack.architecture, t.stack.storage, t.stack.infrastructure];
    stackContainer.innerHTML = cats.map(cat => `
      <div class="p-4 rounded-xl bg-surface border border-borderSubtle space-y-2">
          <div class="text-indigo-400 font-semibold">${cat.title}</div>
          <div class="text-zinc-300 space-y-1">
              ${cat.items.map(i => `<div>${i}</div>`).join('')}
          </div>
      </div>
    `).join('');
  }

  // Principles
  document.querySelector('[data-i18n="principles.title"]').textContent = t.principles.title;
  document.querySelector('[data-i18n="p1.title"]').textContent = t.principles.p1.title;
  document.querySelector('[data-i18n="p1.desc"]').textContent = t.principles.p1.desc;
  document.querySelector('[data-i18n="p2.title"]').textContent = t.principles.p2.title;
  document.querySelector('[data-i18n="p2.desc"]').textContent = t.principles.p2.desc;
  document.querySelector('[data-i18n="p3.title"]').textContent = t.principles.p3.title;
  document.querySelector('[data-i18n="p3.desc"]').textContent = t.principles.p3.desc;

  // Contact
  document.querySelector('[data-i18n="contact.title"]').textContent = t.contact.title;
  document.querySelector('[data-i18n="contact.desc"]').textContent = t.contact.desc;
  document.querySelector('[data-i18n="contact.tgBtn"]').textContent = t.contact.tgBtn;
  document.querySelector('[data-i18n="contact.emailBtn"]').textContent = t.contact.emailBtn;

  // Footer
  document.querySelector('[data-i18n="footer.rights"]').textContent = t.footer.rights;
  document.querySelector('[data-i18n="footer.location"]').textContent = t.footer.location;
  document.querySelector('[data-i18n="footer.note"]').textContent = t.footer.note;

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = currentLang === 'ru' ? 'EN' : 'RU';
  }

  initTerminal(currentLang);
}

document.addEventListener('DOMContentLoaded', () => {
  updateContent();

  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      currentLang = currentLang === 'ru' ? 'en' : 'ru';
      localStorage.setItem('aspaloyy_lang', currentLang);
      updateContent();
    });
  }
});
