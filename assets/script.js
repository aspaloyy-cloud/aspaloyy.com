/*
  Global script for the Aspaloyy site.
  Handles theme toggling, mobile navigation toggle and highlighting the
  current navigation link. Persist theme choice in localStorage.
*/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const menuButton = document.getElementById('menu-button');
  const navLinks = document.getElementById('nav-links');

  // Initialise theme based on stored preference
  const storedTheme = localStorage.getItem('aspaloyy-theme');
  if (storedTheme === 'dark') {
    body.classList.add('dark');
    if (themeToggle) {
      themeToggle.checked = true;
    }
  }

  // Theme toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark');
      const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
      localStorage.setItem('aspaloyy-theme', newTheme);
    });
  }

  // Mobile menu toggle handler
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Highlight active navigation link
  const currentUrl = window.location.href.split('#')[0];
  document.querySelectorAll('nav .nav-links a').forEach(link => {
    // Remove trailing slash to avoid mismatches
    const linkHref = link.href.split('#')[0];
    if (currentUrl.endsWith(linkHref.substring(linkHref.lastIndexOf('/') + 1))) {
      link.classList.add('active');
    }
  });
});
