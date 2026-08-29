/* startmenu.js — Start menu, submenus, and the Shut-Down screen */
(function () {
  const A = window.DATA;
  const startBtn = document.getElementById("startBtn");
  const menu = document.getElementById("startmenu");
  const shutdown = document.getElementById("shutdown");
  const restartBtn = document.getElementById("restartBtn");
  const svg = (k) => (k ? A.ICONS[k] || "" : "");

  function itemButton(label, iconKey, hasSub) {
    const b = document.createElement("button");
    b.type = "button"; b.className = "start-item";
    b.innerHTML = '<span class="si-ic" aria-hidden="true">' + svg(iconKey) + "</span><span>" + label + "</span>" +
      (hasSub ? '<span class="start-caret" aria-hidden="true">&#9654;</span>' : "");
    return b;
  }

  function leaf(label, iconKey, onClick) {
    const li = document.createElement("li");
    const b = itemButton(label, iconKey, false);
    b.addEventListener("click", () => { onClick(); closeMenu(); });
    li.appendChild(b); return li;
  }

  function branch(label, iconKey, children) {
    const li = document.createElement("li"); li.className = "has-sub";
    const b = itemButton(label, iconKey, true);
    const sub = document.createElement("ul"); sub.className = "start-sub";
    children.forEach((c) => sub.appendChild(c));
    li.append(b, sub);
    const open = () => { menu.querySelectorAll(".has-sub.open").forEach((x) => { if (x !== li) x.classList.remove("open"); }); li.classList.add("open"); };
    b.addEventListener("click", (e) => { e.stopPropagation(); li.classList.toggle("open"); });
    li.addEventListener("pointerenter", open);
    li.addEventListener("pointerleave", () => li.classList.remove("open"));
    return li;
  }

  function build() {
    menu.innerHTML = "";
    const side = document.createElement("div");
    side.className = "start-side";
    side.innerHTML = "<span>Harsh&nbsp;<b>Portfolio</b></span>";

    const list = document.createElement("ul");
    list.className = "start-list";

    const programs = branch("Programs", "folder",
      A.PROJECTS.map((p) => leaf(p.label, p.icon, () => window.openApp("proj-" + p.id)))
        .concat(leaf("About Me", "computer", () => window.openApp("about"))));

    const documents = branch("Documents", "folderOpen",
      A.BLOG.map((p) => leaf(p.title, "doc", () => window.openBlogPost(p.id)))
        .concat(leaf("Résumé.pdf", "pdf", () => window.openApp("cv"))));

    const sep = document.createElement("li"); sep.className = "start-sep"; sep.setAttribute("aria-hidden", "true");

    list.append(
      programs,
      documents,
      leaf("Contact", "mail", () => window.openApp("contact")),
      leaf("Display Properties", "computer", () => window.openApp("display")),
      sep,
      leaf("Shut Down…", "recycle", showShutdown)
    );

    menu.append(side, list);
  }

  function openMenu() {
    build();
    menu.hidden = false;
    startBtn.setAttribute("aria-expanded", "true");
    const first = menu.querySelector("button"); first && first.focus();
  }
  function closeMenu() {
    menu.hidden = true;
    startBtn.setAttribute("aria-expanded", "false");
  }
  function toggle() { menu.hidden ? openMenu() : closeMenu(); }

  function showShutdown() {
    closeMenu();
    shutdown.hidden = false;
    restartBtn && restartBtn.focus();
  }

  startBtn.addEventListener("click", (e) => { e.stopPropagation(); toggle(); });
  document.addEventListener("pointerdown", (e) => {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== startBtn && !startBtn.contains(e.target)) closeMenu();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) { closeMenu(); startBtn.focus(); } });
  restartBtn && restartBtn.addEventListener("click", () => location.reload());
})();
