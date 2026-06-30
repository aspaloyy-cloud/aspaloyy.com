(() => {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, stars, shooters, frame;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initStars();
  }

  function rand(min, max) { return Math.random() * (max - min) + min; }

  function initStars() {
    const count = Math.floor((W * H) / 6000);
    stars = Array.from({ length: count }, () => ({
      x: rand(0, W),
      y: rand(0, H),
      r: rand(0.3, 1.6),
      a: rand(0.2, 0.9),
      da: rand(0.001, 0.004) * (Math.random() < 0.5 ? 1 : -1),
    }));
    shooters = [];
  }

  function spawnShooter() {
    if (shooters.length >= 4) return;
    const x = rand(0, W);
    const y = rand(0, H * 0.5);
    const angle = rand(Math.PI * 0.05, Math.PI * 0.25);
    const speed = rand(6, 14);
    shooters.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      len: rand(80, 180),
      life: 1,
      decay: rand(0.012, 0.025),
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Stars
    for (const s of stars) {
      s.a += s.da;
      if (s.a > 0.9 || s.a < 0.15) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(180,180,255,${s.a})`;
      ctx.fill();
    }

    // Shooting stars
    if (Math.random() < 0.008) spawnShooter();

    for (let i = shooters.length - 1; i >= 0; i--) {
      const s = shooters[i];
      const alpha = s.life * 0.8;
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.vx * (s.len / 12), s.y - s.vy * (s.len / 12));
      grad.addColorStop(0, `rgba(255,255,255,${alpha})`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.vx * (s.len / 12), s.y - s.vy * (s.len / 12));
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5 * s.life;
      ctx.stroke();
      s.x += s.vx;
      s.y += s.vy;
      s.life -= s.decay;
      if (s.life <= 0 || s.x > W + 100 || s.y > H + 100) shooters.splice(i, 1);
    }

    frame = requestAnimationFrame(draw);
  }

  window.addEventListener('resize', () => { cancelAnimationFrame(frame); resize(); draw(); });
  resize();
  draw();
})();
