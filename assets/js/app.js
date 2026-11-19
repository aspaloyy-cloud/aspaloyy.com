document.addEventListener('DOMContentLoaded', () => {
  // Real-time telemetry simulation ticker
  const updateTelemetryValues = () => {
    const cryoEl = document.getElementById('telemetry-cryo');
    const bandwidthEl = document.getElementById('telemetry-bandwidth');
    const fluxEl = document.getElementById('telemetry-flux');
    
    if (cryoEl) {
      const val = (4.14 + Math.random() * 0.04).toFixed(3);
      cryoEl.textContent = `${val} K`;
    }
    if (bandwidthEl) {
      const val = (14.1 + Math.random() * 0.4).toFixed(2);
      bandwidthEl.textContent = `${val} TB/s`;
    }
    if (fluxEl) {
      const val = (1284 + Math.floor(Math.random() * 12)).toLocaleString();
      fluxEl.textContent = `${val} SFU`;
    }
  };

  setInterval(updateTelemetryValues, 2000);

  // Log stream simulation
  const logContainer = document.getElementById('live-log-stream');
  if (logContainer) {
    const logMessages = [
      "SYS_LOCK: Interferometer baseline recalibrated to 4.21μm",
      "CORONAGRAPH: Solar flare detected at sector L1-Beta, telemetry buffered",
      "QUANTUM_LINK: QKD key distribution stable across 14 nodes",
      "SPECTROMETER: Hydrogen alpha line shift confirmed (+0.0014z)",
      "CRYOGEN: Pulse tube cooler #2 operating at 85% efficiency",
      "EPHEMERIS: Orbital decay correction calculated: -0.02mm/s"
    ];

    setInterval(() => {
      const msg = logMessages[Math.floor(Math.random() * logMessages.length)];
      const timestamp = new Date().toISOString().split('T')[1].slice(0, 8);
      const div = document.createElement('div');
      div.className = 'font-mono text-xs text-gray-400 py-1 border-b border-[#22222b] flex justify-between';
      div.innerHTML = `<span class="text-sky-400">[${timestamp}]</span> <span>${msg}</span>`;
      logContainer.prepend(div);
      if (logContainer.children.length > 8) {
        logContainer.lastChild.remove();
      }
    }, 3500);
  }

  // Modal Image Inspector for Gallery
  window.openInspector = function(title, raDec, sensor, desc, imgSrc) {
    const modal = document.getElementById('image-inspector-modal');
    if (!modal) return;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-radec').textContent = raDec;
    document.getElementById('modal-sensor').textContent = sensor;
    document.getElementById('modal-desc').textContent = desc;
    document.getElementById('modal-img').src = imgSrc || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop';
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  };

  window.closeInspector = function() {
    const modal = document.getElementById('image-inspector-modal');
    if (modal) {
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }
  };

  // Contact Form Submission
  const contactForm = document.getElementById('scientific-request-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'TRANSMITTING PACKETS...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'TRANSMISSION ACKNOWLEDGED [ID: 9942-X]';
        btn.classList.add('bg-emerald-900', 'text-emerald-200');
        contactForm.reset();
      }, 1500);
    });
  }
});
