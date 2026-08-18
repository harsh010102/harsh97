/* contextmenu.js — fake Win9x right-click menus on the desktop and its icons */
(function () {
  const menu = document.getElementById("contextmenu");
  const desktop = document.getElementById("desktop");
  const icons = document.getElementById("icons");

  function render(items, x, y) {
    menu.innerHTML = "";
    items.forEach((it) => {
      const li = document.createElement("li");
      if (it.sep) { li.className = "sep"; li.setAttribute("aria-hidden", "true"); }
      else {
        li.textContent = it.label;
        if (it.disabled) li.setAttribute("aria-disabled", "true");
        else { li.setAttribute("role", "menuitem"); li.tabIndex = 0;
          li.addEventListener("click", () => { hide(); it.run(); }); }
      }
      menu.appendChild(li);
    });
    menu.hidden = false;
    const mw = menu.offsetWidth, mh = menu.offsetHeight;
    menu.style.left = Math.min(x, window.innerWidth - mw - 4) + "px";
    menu.style.top = Math.min(y, window.innerHeight - mh - 4) + "px";
  }
  function hide() { menu.hidden = true; }

  function refreshFlicker() {
    icons.style.transition = "opacity .05s"; icons.style.opacity = "0";
    setTimeout(() => { icons.style.opacity = "1"; setTimeout(() => (icons.style.transition = ""), 80); }, 60);
  }

  const desktopItems = (x, y) => [
    { label: "Refresh", run: refreshFlicker },
    { sep: true },
    { label: "Arrange Icons", disabled: true },
    { label: "Line up Icons", disabled: true },
    { sep: true },
    { label: "New", disabled: true },
    { sep: true },
    { label: "Properties", run: () => window.openApp("display") },
  ];

  const iconItems = (iconEl) => [
    { label: "Open", run: () => iconEl.dispatchEvent(new MouseEvent("dblclick", { bubbles: true })) },
    { sep: true },
    { label: "Properties", run: () => window.openApp("display") },
  ];

  desktop.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    const iconEl = e.target.closest(".icon");
    render(iconEl ? iconItems(iconEl) : desktopItems(e.clientX, e.clientY), e.clientX, e.clientY);
  });

  document.addEventListener("pointerdown", (e) => { if (!menu.hidden && !menu.contains(e.target)) hide(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") hide(); });
  window.addEventListener("blur", hide);
})();
