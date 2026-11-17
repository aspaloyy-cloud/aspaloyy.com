const translations = {
  ru: {
    nav_home: "Главная",
    nav_projects: "Проекты",
    nav_about: "О себе",
    hero_badge: "Кыргызстан • Software Engineer",
    hero_title: "Привет, я Асман Рахманов. Создаю Antares и приложения для Google Play.",
    hero_desc: "Разработчик и программный инженер из Кыргызстана. Публикую мобильные приложения и утилиты на Google Play Market под брендом Aspaloyy, а также создаю Antares — передовой ИИ-ассистент.",
    btn_projects: "Смотреть проекты",
    btn_about: "Об авторе",
    ecosystem_title: "Экосистема",
    ecosystem_heading: "Ключевые продукты",
    card_antares_desc: "Передовой ИИ-ассистент с глубокой интеграцией в Visual Studio, локальным управлением рабочим пространством, автоматизацией Git и выполнением задач.",
    card_play_desc: "Публикация мобильных приложений, утилит и цифровых продуктов под разработческим именем Aspaloyy на платформе Google Play.",
    card_system_desc: "Разработка высокопроизводительных бэкенд-сервисов, инструментов и чистых цифровых интерфейсов с упором на надежность и скорость.",
    btn_details: "Подробнее",
    btn_google_play: "Google Play Market ↗",
    btn_stack: "Стек технологий",
    btn_github: "GitHub ↗",
    status_active: "Активная разработка",
    footer_rights: "© aspaloyy.com — Асман Рахманов. Все системы функционируют.",
    proj_section_title: "Портфолио продуктов",
    proj_section_heading: "Проекты и Релизы",
    proj_antares_desc: "Передовой ИИ-ассистент с глубокой интеграцией в Visual Studio, локальным управлением рабочей областью, автоматизацией Git и выполнением задач. Создан для максимальной продуктивности инженера.",
    proj_play_desc: "Линейка мобильных приложений, утилит и сервисов, разрабатываемых и публикуемых на Google Play Market под разработческим именем Aspaloyy.",
    proj_hub_desc: "Персональная цифровая экосистема Асмана Рахманова, спроектированная с нуля без лишнего мусора, с молниеносной загрузкой и адаптивным дизайном.",
    about_section_title: "Профиль инженера",
    about_section_heading: "Об авторе",
    about_p1: "Привет! Меня зовут Асман Рахманов (известный в сети как aspaloyy). Я профессиональный разработчик и программный инженер из Кыргызстана.",
    about_p2: "Я создаю надежные программные системы, инструменты разработки и мобильные приложения. Под разработческим именем Aspaloyy мои продукты публикуются на платформе Google Play Market.",
    about_p3: "В текущий момент ключевым направлением моей работы является разработка Antares — передового ИИ-ассистента с интеграцией в Visual Studio, локальным управлением кодовой базой и автономными возможностями."
  },
  en: {
    nav_home: "Index",
    nav_projects: "Projects",
    nav_about: "About",
    hero_badge: "Kyrgyzstan • Software Engineer",
    hero_title: "Hi, I'm Asman Rakhmanov. Building Antares & Google Play apps.",
    hero_desc: "Software engineer from Kyrgyzstan, publishing mobile applications under the Aspaloyy brand on Google Play Market, and currently crafting Antares — an advanced AI assistant application.",
    btn_projects: "Explore Projects",
    btn_about: "About Me",
    ecosystem_title: "Ecosystem",
    ecosystem_heading: "Featured Works",
    card_antares_desc: "An advanced AI assistant application engineered with robust local tool integration, system monitoring, and deep Visual Studio connectivity.",
    card_play_desc: "Publishing mobile applications and utility tools under the Aspaloyy developer name on Google Play Market.",
    card_system_desc: "Designing scalable cloud environments, containerized deployments, and resilient network topologies with clean code.",
    btn_details: "Learn More",
    btn_google_play: "Google Play Market ↗",
    btn_stack: "Tech Stack",
    btn_github: "GitHub ↗",
    status_active: "Active Development",
    footer_rights: "© aspaloyy.com — Asman Rakhmanov. All systems operational.",
    proj_section_title: "Product Portfolio",
    proj_section_heading: "Projects & Releases",
    proj_antares_desc: "An intelligent AI assistant platform featuring deep Visual Studio integration, local workspace management, Git automation, and advanced multi-tool execution.",
    proj_play_desc: "A collection of mobile applications and utility tools published and maintained on the Google Play Market under the Aspaloyy brand.",
    proj_hub_desc: "Personal engineering hub and digital portfolio built from scratch with a minimalist design system and lightning-fast performance.",
    about_section_title: "Engineer Profile",
    about_section_heading: "About the Author",
    about_p1: "I am Asman Rakhmanov, known online as aspaloyy. I am a software developer and engineer based in Kyrgyzstan.",
    about_p2: "Under the Aspaloyy brand, I publish mobile apps and developer tools on the Google Play Market, focusing on utility, clean UI, and performance.",
    about_p3: "Currently, my primary focus is developing Antares — an advanced AI assistant platform featuring deep integration with Visual Studio, local workspace management, and intelligent task execution."
  }
};

function getStoredLang() {
  const stored = localStorage.getItem('aspaloyy_lang');
  if (stored && translations[stored]) return stored;
  
  // Auto-detect browser language
  const browserLang = navigator.language || navigator.userLanguage || 'ru';
  if (browserLang.toLowerCase().startsWith('en')) {
    return 'en';
  }
  return 'ru';
}

function setLang(lang) {
  if (!translations[lang]) return;
  localStorage.setItem('aspaloyy_lang', lang);
  document.documentElement.lang = lang;
  
  // Update active states on buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
  });

  // Apply translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });
}

function toggleMobileMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = getStoredLang();
  setLang(currentLang);
});
