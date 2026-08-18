/* wm.js — a tiny Win9x window manager: open/focus/drag/minimize/maximize/close + taskbar */
(function () {
  const layer = document.getElementById("windows");
  const tasks = document.getElementById("tasks");
  const wins = new Map();               // id -> {el, taskBtn, min, max, prevRect, onClose}
  let zTop = 100, activeId = null, openCount = 0;

  const isMobile = () => window.matchMedia("(max-width:768px)").matches;
  const svg = (k) => (window.DATA && window.DATA.ICONS[k]) || "";

  function bringToFront(id) {
    const w = wins.get(id);
    if (!w) return;
    w.el.style.zIndex = ++zTop;
    activeId = id;
    wins.forEach((v, k) => {
      v.el.classList.toggle("inactive", k !== id);
      if (v.taskBtn) v.taskBtn.classList.toggle("active", k === id && !v.min);
    });
  }

  function focus(id) {
    const w = wins.get(id);
    if (!w) return;
    if (w.min) { w.min = false; w.el.style.display = ""; }
    bringToFront(id);
    w.el.focus({ preventScroll: true });
  }

  function minimize(id) {
    const w = wins.get(id);
    if (!w) return;
    w.min = true; w.el.style.display = "none";
    w.taskBtn && w.taskBtn.classList.remove("active");
    activeId = null;
    // focus the top-most remaining visible window
    let top = null, topZ = -1;
    wins.forEach((v, k) => { if (!v.min && +v.el.style.zIndex > topZ) { topZ = +v.el.style.zIndex; top = k; } });
    if (top) bringToFront(top);
  }

  function toggleMax(id) {
    const w = wins.get(id);
    if (!w) return;
    w.max = !w.max;
    if (w.max) {
      w.prevRect = { left: w.el.style.left, top: w.el.style.top, width: w.el.style.width };
      w.el.classList.add("maximized");
    } else {
      w.el.classList.remove("maximized");
      if (w.prevRect) Object.assign(w.el.style, w.prevRect);
    }
  }

  function close(id) {
    const w = wins.get(id);
    if (!w) return;
    w.el.remove(); w.taskBtn && w.taskBtn.remove();
    wins.delete(id);
    if (typeof w.onClose === "function") w.onClose();
    if (activeId === id) {
      activeId = null;
      const next = [...wins.keys()].pop();
      if (next) focus(next);
    }
  }

  function makeDraggable(el, handle) {
    let sx, sy, ox, oy, dragging = false;
    handle.addEventListener("pointerdown", (e) => {
      if (isMobile()) return;                         // windows are full-width on mobile
      if (e.target.closest("button")) return;          // don't drag from title controls
      const w = wins.get(el.dataset.id);
      if (w && w.max) return;
      dragging = true; handle.classList.add("dragging");
      sx = e.clientX; sy = e.clientY;
      const r = el.getBoundingClientRect(); ox = r.left; oy = r.top;
      handle.setPointerCapture(e.pointerId);
    });
    handle.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const vw = window.innerWidth, vh = window.innerHeight;
      let nx = ox + (e.clientX - sx), ny = oy + (e.clientY - sy);
      nx = Math.max(-el.offsetWidth + 60, Math.min(nx, vw - 40));
      ny = Math.max(0, Math.min(ny, vh - 48));
      el.style.left = nx + "px"; el.style.top = ny + "px";
    });
    const end = (e) => { dragging = false; handle.classList.remove("dragging"); try { handle.releasePointerCapture(e.pointerId); } catch (_) {} };
    handle.addEventListener("pointerup", end);
    handle.addEventListener("pointercancel", end);
  }

  function open(opts) {
    const { id, title, iconKey = "doc", bodyHTML = "", width, onClose } = opts;
    if (wins.has(id)) { focus(id); return wins.get(id).el; }

    const el = document.createElement("div");
    el.className = "window"; el.dataset.id = id;
    el.setAttribute("role", "dialog"); el.setAttribute("aria-label", title); el.tabIndex = -1;
    if (width) el.style.width = (typeof width === "number" ? width + "px" : width);

    el.innerHTML =
      '<div class="title-bar">' +
        '<div class="title-bar-text">' + title + "</div>" +
        '<div class="title-bar-controls">' +
          '<button aria-label="Minimize"></button>' +
          '<button aria-label="Maximize"></button>' +
          '<button aria-label="Close"></button>' +
        "</div></div>" +
      '<div class="window-body">' + bodyHTML + "</div>";

    // cascade position — start clear of the left-hand icon column
    const step = (openCount++ % 7);
    el.style.left = (112 + step * 24) + "px";
    el.style.top = (20 + step * 22) + "px";
    el.style.zIndex = ++zTop;

    layer.appendChild(el);

    const [minBtn, maxBtn, closeBtn] = el.querySelectorAll(".title-bar-controls button");
    minBtn.addEventListener("click", () => minimize(id));
    maxBtn.addEventListener("click", () => toggleMax(id));
    closeBtn.addEventListener("click", () => close(id));
    el.querySelector(".title-bar").addEventListener("dblclick", (e) => { if (!e.target.closest("button")) toggleMax(id); });
    el.addEventListener("pointerdown", () => bringToFront(id));
    makeDraggable(el, el.querySelector(".title-bar"));

    // taskbar button
    const taskBtn = document.createElement("button");
    taskBtn.className = "task-btn"; taskBtn.setAttribute("role", "listitem");
    taskBtn.innerHTML = '<span class="ti">' + svg(iconKey) + '</span><span class="task-label">' + title + "</span>";
    taskBtn.addEventListener("click", () => {
      const w = wins.get(id);
      if (w.min) focus(id);
      else if (activeId === id) minimize(id);
      else focus(id);
    });
    tasks.appendChild(taskBtn);

    wins.set(id, { el, taskBtn, min: false, max: false, prevRect: null, onClose });
    bringToFront(id);
    return el;
  }

  // Esc closes the active window (unless typing in a field)
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape" || !activeId) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
    close(activeId);
  });

  window.WM = { open, close, focus, minimize };
})();
