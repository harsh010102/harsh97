/* screensaver.js — idle starfield, classic "warp through space" style */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  const canvas = document.getElementById("screensaver");
  const ctx = canvas.getContext("2d");
  const IDLE_MS = 60000;
  let idleTimer = null, running = false, raf = null, stars = [];

  function armIdle() {
    clearTimeout(idleTimer);
    if (reduce) return;
    idleTimer = setTimeout(start, IDLE_MS);
  }

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }

  function seed() {
    stars = [];
    const n = Math.min(360, Math.floor((canvas.width * canvas.height) / 2600));
    for (let i = 0; i < n; i++) stars.push(newStar());
  }
  function newStar() {
    return { x: (Math.random() - 0.5) * canvas.width, y: (Math.random() - 0.5) * canvas.height, z: Math.random() * canvas.width };
  }

  function frame() {
    ctx.fillStyle = "#000"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    const cx = canvas.width / 2, cy = canvas.height / 2;
    for (const s of stars) {
      s.z -= 6;
      if (s.z <= 0) Object.assign(s, newStar(), { z: canvas.width });
      const k = 128 / s.z, x = cx + s.x * k, y = cy + s.y * k;
      if (x < 0 || x >= canvas.width || y < 0 || y >= canvas.height) continue;
      const size = (1 - s.z / canvas.width) * 3;
      const shade = Math.min(255, Math.floor((1 - s.z / canvas.width) * 255) + 40);
      ctx.fillStyle = "rgb(" + shade + "," + shade + "," + shade + ")";
      ctx.fillRect(x, y, size, size);
    }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (running || document.getElementById("boot") && !document.body.dataset.booted) return;
    running = true; canvas.hidden = false; resize(); seed(); frame();
  }
  function stop() {
    if (!running) return;
    running = false; cancelAnimationFrame(raf); canvas.hidden = true; armIdle();
  }

  ["pointermove", "pointerdown", "keydown", "wheel", "touchstart"].forEach((ev) =>
    window.addEventListener(ev, () => { running ? stop() : armIdle(); }, { passive: true }));
  window.addEventListener("resize", () => { if (running) { resize(); seed(); } });

  // start counting once the desktop has booted
  window.addEventListener("harsh97:booted", armIdle);
  if (document.body.dataset.booted) armIdle();
})();
