/* ASPALOYY SYSTEMS — Production Application Script */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Copy Code Buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetSelector = button.getAttribute('data-clipboard-target');
      const targetElement = targetSelector ? document.querySelector(targetSelector) : button.parentElement.nextElementSibling?.querySelector('pre') || button.closest('.terminal-box')?.querySelector('pre');

      if (targetElement) {
        const textToCopy = targetElement.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalText = button.textContent;
          button.textContent = 'Copied';
          button.style.color = 'var(--success)';
          button.style.borderColor = 'var(--success)';
          setTimeout(() => {
            button.textContent = originalText;
            button.style.color = '';
            button.style.borderColor = '';
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy text: ', err);
        });
      }
    });
  });

  // Tabs Functionality
  const tabGroups = document.querySelectorAll('.tabs');
  tabGroups.forEach(group => {
    const buttons = group.querySelectorAll('.tab-btn');
    const container = group.nextElementSibling; // assumes panels are direct siblings after or inside parent
    
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-tab');
        const parentSection = group.closest('section') || group.parentElement;
        const panels = parentSection.querySelectorAll('.tab-panel');

        panels.forEach(panel => {
          if (panel.id === targetId) {
            panel.classList.add('active');
          } else {
            panel.classList.remove('active');
          }
        });
      });
    });
  });

  // Interactive Benchmark / Calculator (if present)
  const calcSlider = document.querySelector('#req-slider');
  const reqOutput = document.querySelector('#req-output');
  const latencyOutput = document.querySelector('#latency-output');
  const costOutput = document.querySelector('#cost-output');

  if (calcSlider && reqOutput && latencyOutput && costOutput) {
    const updateCalculations = () => {
      const val = parseInt(calcSlider.value);
      reqOutput.textContent = val.toLocaleString() + ' req/sec';
      // Simulated metrics for Edge Runtime vs Traditional
      const latency = Math.max(4.2, (18.5 - (val / 100000) * 2)).toFixed(1);
      const cost = (val * 0.000012).toFixed(2);
      latencyOutput.textContent = latency + ' ms';
      costOutput.textContent = '$' + cost + ' / mo';
    };
    calcSlider.addEventListener('input', updateCalculations);
    updateCalculations();
  }

  // Form Validation & Submission feedback
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Transmitting...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Transmission Confirmed';
        submitBtn.style.backgroundColor = 'var(--success)';
        submitBtn.style.color = '#fff';
        contactForm.reset();
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.backgroundColor = '';
          submitBtn.style.color = '';
          submitBtn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }
});
