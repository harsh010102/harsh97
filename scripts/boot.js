/* boot.js — boot splash, clock, sound toggle + startup chime, and desktop reveal */
(function () {
  const A = window.DATA;
  const boot = document.getElementById("boot");
  const clockEl = document.getElementById("clock");
  const soundBtn = document.getElementById("sound");
  let muted = true, ac = null;

  /* live taskbar clock */
  function tick() {
    const d = new Date();
    let h = d.getHours(); const ap = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12; const mm = String(d.getMinutes()).padStart(2, "0");
    clockEl.textContent = h + ":" + mm + " " + ap;
    clockEl.title = d.toLocaleDateString(undefined, { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  }

  /* short synthesized startup chime (no audio asset needed) */
  function chime() {
    if (muted) return;
    try {
      ac = ac || new (window.AudioContext || window.webkitAudioContext)();
      const now = ac.currentTime, notes = [523.25, 659.25, 783.99, 1046.5]; // C-E-G-C
      notes.forEach((f, idx) => {
        const o = ac.createOscillator(), g = ac.createGain();
        o.type = "triangle"; o.frequency.value = f;
        const t = now + idx * 0.12;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.18, t + 0.02);
        g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
        o.connect(g).connect(ac.destination); o.start(t); o.stop(t + 0.36);
      });
    } catch (e) { /* audio not available */ }
  }

  function setSound(on) {
    muted = !on;
    soundBtn.innerHTML = muted ? A.ICONS.speakerMute : A.ICONS.speaker;
    soundBtn.title = muted ? "Sound is muted — click to enable" : "Sound on — click to mute";
    if (on) chime();
  }
  soundBtn.addEventListener("click", () => setSound(muted)); // toggle
  setSound(false); // muted by default (autoplay-safe)

  /* reveal the desktop */
  function reveal() {
    if (boot.classList.contains("hidden")) return;
    boot.classList.add("hidden");
    document.body.dataset.booted = "1";
    tick(); setInterval(tick, 10000);
    window.dispatchEvent(new Event("harsh97:booted"));
    setTimeout(() => { try { window.openReadme(); } catch (e) {} }, 450);
    setTimeout(() => { try { boot.remove(); } catch (e) {} }, 900);
  }

  boot.addEventListener("click", reveal);
  const reduce = window.matchMedia("(prefers-reduced-motion:reduce)").matches;
  setTimeout(reveal, reduce ? 300 : 2900);
})();
