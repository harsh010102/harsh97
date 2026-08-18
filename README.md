# Harsh 97 🖥️

My portfolio, dressed up as a late-90s desktop OS in the browser. Double-click the icons.

**Live:** https://harsh010102.github.io/harsh97/

## What's inside
- A **teal desktop** with draggable, minimizable, maximizable windows and a working taskbar + Start menu.
- 📁 **Blog** folder — full write-ups (my M.Sc. thesis on machine unlearning, MPI-SWS, Canadian climate labs).
- 🛰️ **Project** icons (Compute Radar EU, AV Explainability, Satellite Pipeline, Groundwater Forecasting) that open the real thing in a new tab.
- 📄 **Résumé.pdf** — downloads my CV.
- Period flourishes: boot splash, Start menu + *Shut Down*, an idle **starfield screensaver**, a synthesized startup **chime** (muted by default — un-mute from the tray), a desktop **right-click** menu, and a little **assistant**.
- A **mobile fallback** and a reduced-motion pass.

## Run locally
```
python -m http.server 8000
# open http://localhost:8000/
```
No build step — plain HTML/CSS/JS.

## Structure
- `index.html` — shell (boot splash, desktop, taskbar, mounts)
- `styles/98.css` — vendored Win9x component styling
- `styles/desktop.css` — desktop, windows, taskbar, start menu, boot, screensaver, mobile
- `scripts/` — `content.js` (data + icons), `wm.js` (window manager), `apps.js`, `startmenu.js`, `contextmenu.js`, `screensaver.js`, `assistant.js`, `boot.js`
- `files/ParikhHarshCV.pdf` — the downloadable CV

## Credits & licenses
- [**98.css**](https://jdan.github.io/98.css/) by Jordan Scales — MIT (component chrome + the *Pixelated MS Sans Serif* webfont it bundles).
- **Desktop icons** — original SVG homages drawn for this project in the Win9x style (not Microsoft's copyrighted artwork).
- **Startup chime** — synthesized at runtime with the Web Audio API (no audio file, no licensing).
- Everything else © Harsh Parikh.
