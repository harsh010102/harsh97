/* assistant.js — a friendly paperclip-ish greeter (a Clippy homage) */
(function () {
  const A = window.DATA;
  const host = document.getElementById("assistant");
  const bubble = host.querySelector(".assistant-bubble");
  const body = host.querySelector(".assistant-body");
  body.innerHTML = A.ICONS.clippy;

  const tips = [
    'Hi, I’m Clip. Welcome to <b>Harsh 97</b>! Want the tour? Open <b>readme.txt</b>.',
    'Curious what Harsh built? Double-click <b>Compute Radar EU</b> — it opens the live map.',
    'Reading recruiter? Grab the <b>Résumé.pdf</b> icon to download his CV.',
    'The <b>Blog</b> folder has his thesis write-up on machine unlearning. Good stuff.',
    'Psst — the <b>Start</b> menu has a real <i>Shut&nbsp;Down</i>. And <i>Display&nbsp;Properties</i> recolours the desktop.',
  ];
  let i = 0;

  function show(msg) {
    bubble.innerHTML = msg + '<span class="close-tip">(click me for more • <a href="#" data-close>dismiss</a>)</span>';
    host.hidden = false;
    bubble.querySelector("[data-close]").addEventListener("click", (e) => { e.preventDefault(); host.hidden = true; });
  }
  function next() { i = (i + 1) % tips.length; show(tips[i]); }

  body.addEventListener("click", next);

  window.addEventListener("harsh97:booted", () => setTimeout(() => show(tips[0]), 900));
})();
