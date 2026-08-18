/* apps.js — desktop icons + the "programs" they launch */
(function () {
  const A = window.DATA, WM = window.WM;
  const iconsHost = document.getElementById("icons");
  const desktop = document.getElementById("desktop");
  const touchOpen = window.matchMedia("(max-width:768px)").matches || window.matchMedia("(pointer:coarse)").matches;

  const svg = (k) => A.ICONS[k] || "";

  function makeIcon(iconKey, label, onOpen) {
    const b = document.createElement("button");
    b.className = "icon"; b.type = "button"; b.setAttribute("role", "listitem");
    b.innerHTML = '<span class="icon-img" aria-hidden="true">' + svg(iconKey) + "</span>" +
                  '<span class="icon-label">' + label + "</span>";
    b.setAttribute("aria-label", label);
    const select = () => {
      iconsHost.querySelectorAll(".icon.selected").forEach((i) => i.classList.remove("selected"));
      b.classList.add("selected");
    };
    b.addEventListener("click", (e) => { e.stopPropagation(); select(); if (touchOpen) onOpen(); });
    b.addEventListener("dblclick", (e) => { e.stopPropagation(); onOpen(); });
    b.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } });
    return b;
  }

  function openInTab(url) { window.open(url, "_blank", "noopener"); }

  function downloadCV() {
    const a = document.createElement("a");
    a.href = "files/ParikhHarshCV.pdf"; a.download = "Harsh_Parikh_CV.pdf";
    document.body.appendChild(a); a.click(); a.remove();
  }

  /* ---------- windows ---------- */
  function openAbout() { WM.open({ id: "about", title: "About Me", iconKey: "computer", bodyHTML: A.ABOUT_HTML, width: 460 }); }

  function openReadme() { WM.open({ id: "readme", title: "readme.txt - Notepad", iconKey: "doc", bodyHTML: A.README_HTML, width: 360 }); }

  function openContact() {
    const items = A.CONTACT.map((c) =>
      '<li>' + svgSpan("mail", 14) + ' <a href="' + c.href + '" target="_blank" rel="noopener">' + c.label + " &#8599;</a></li>"
    ).join("");
    WM.open({ id: "contact", title: "Contact - Address Book", iconKey: "mail",
      bodyHTML: '<div class="contact-body"><p>Say hi — I answer everything.</p><ul class="contact-list">' + items + "</ul></div>", width: 300 });
  }

  function openRecycle() {
    WM.open({ id: "recycle", title: "Recycle Bin", iconKey: "recycle",
      bodyHTML: '<div style="padding:10px"><p>The Recycle Bin is empty.</p><p class="hint">Nothing here but good intentions and a few deprecated ideas.</p></div>', width: 300 });
  }

  function svgSpan(key, size) { return '<span style="display:inline-block;width:' + size + 'px;height:' + size + 'px;vertical-align:middle">' + svg(key) + "</span>"; }

  /* Blog folder -> post windows */
  function openBlog() {
    const host = document.createElement("div");
    host.className = "folder-view";
    A.BLOG.forEach((p) => host.appendChild(makeIcon("doc", p.title, () => openPost(p))));
    const el = WM.open({ id: "blog", title: "Blog - C:\\harsh\\blog", iconKey: "folderOpen", bodyHTML: "", width: 330 });
    el.querySelector(".window-body").appendChild(host);
  }
  function openPost(p) {
    WM.open({ id: "post-" + p.id, title: p.title + " - WordPad", iconKey: "doc",
      bodyHTML: p.html + '<p class="read-on"><a href="' + p.url + '" target="_blank" rel="noopener">Read this on my blog &#8599;</a></p>',
      width: 560 });
  }

  /* Display Properties easter egg — recolor the desktop */
  const WALLPAPERS = [
    ["Teal (default)", "#008080"], ["Desert", "#b48a5a"], ["Slate", "#4a5b6a"],
    ["Midnight", "#0b1e3b"], ["Rose", "#7a4a55"], ["Forest", "#2f5d3a"],
  ];
  function openDisplay() {
    const swatches = WALLPAPERS.map((w, i) =>
      '<button class="wp" data-c="' + w[1] + '" title="' + w[0] + '" style="width:44px;height:30px;margin:3px;background:' + w[1] + '"></button>'
    ).join("");
    const el = WM.open({ id: "display", title: "Display Properties", iconKey: "computer",
      bodyHTML: '<div style="padding:6px"><fieldset><legend>Background</legend>' +
        '<p style="margin:.3em 0">Pick a desktop colour:</p><div style="display:flex;flex-wrap:wrap">' + swatches + "</div></fieldset>" +
        '<p class="hint" style="margin-top:8px">Yes, this actually works. Try it. 🎨</p></div>', width: 320 });
    el.querySelectorAll(".wp").forEach((btn) =>
      btn.addEventListener("click", () => document.documentElement.style.setProperty("--teal", btn.dataset.c)));
  }

  /* ---------- app registry (shared with Start menu & context menu) ---------- */
  const APPS = {
    about:   { label: "About Me", icon: "computer", run: openAbout },
    blog:    { label: "Blog", icon: "folder", run: openBlog },
    cv:      { label: "R\u00e9sum\u00e9.pdf", icon: "pdf", run: downloadCV },
    contact: { label: "Contact", icon: "mail", run: openContact },
    recycle: { label: "Recycle Bin", icon: "recycle", run: openRecycle },
    readme:  { label: "readme.txt", icon: "doc", run: openReadme },
    display: { label: "Display Properties", icon: "computer", run: openDisplay },
  };
  A.PROJECTS.forEach((p) => { APPS["proj-" + p.id] = { label: p.label, icon: p.icon, url: p.url, run: () => openInTab(p.url) }; });

  function openApp(id) { const app = APPS[id]; if (app) app.run(); }

  /* ---------- build the desktop ---------- */
  const DESKTOP_ORDER = ["about", "blog",
    ...A.PROJECTS.map((p) => "proj-" + p.id),
    "cv", "contact", "recycle", "readme"];

  DESKTOP_ORDER.forEach((id) => {
    const app = APPS[id];
    iconsHost.appendChild(makeIcon(app.icon, app.label, app.run));
  });

  // click empty desktop clears selection
  desktop.addEventListener("pointerdown", (e) => {
    if (e.target === desktop || e.target === iconsHost)
      iconsHost.querySelectorAll(".icon.selected").forEach((i) => i.classList.remove("selected"));
  });

  // mobile hint
  if (touchOpen) {
    const note = document.createElement("div"); note.className = "mobile-note";
    note.textContent = "Best viewed on a desktop — tap to explore";
    desktop.appendChild(note);
  }

  window.APPS = APPS; window.openApp = openApp; window.openReadme = openReadme;
  window.openBlogPost = (id) => { const p = A.BLOG.find((x) => x.id === id); if (p) openPost(p); };
})();
