/* content.js — all data + inline pixel-art SVG icons for Harsh 97.
   Icons are original homages to the Win9x style (not Microsoft's copyrighted art),
   drawn as small SVGs so the whole site stays self-contained. */

const ICONS = {
  computer: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="3" y="4" width="26" height="17" fill="#c0c0c0" stroke="#000"/>
    <rect x="5" y="6" width="22" height="12" fill="#008080" stroke="#000"/>
    <rect x="6" y="7" width="7" height="4" fill="#00a6a6"/>
    <rect x="12" y="21" width="8" height="3" fill="#c0c0c0" stroke="#000"/>
    <rect x="7" y="24" width="18" height="5" fill="#c0c0c0" stroke="#000"/>
    <rect x="9" y="26" width="3" height="2" fill="#00a000"/>
    <rect x="13" y="26" width="10" height="1" fill="#808080"/></svg>`,

  folder: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M3 9 h8 l2 2 h16 v16 H3 Z" fill="#c98f13" stroke="#000"/>
    <path d="M3 12 h26 v14 H3 Z" fill="#f6c33f" stroke="#000"/>
    <path d="M4 13 h24" stroke="#ffe08a"/></svg>`,

  folderOpen: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M3 9 h8 l2 2 h16 v15 H3 Z" fill="#c98f13" stroke="#000"/>
    <path d="M6 14 h24 l-3 12 H3 Z" fill="#ffd666" stroke="#000"/></svg>`,

  doc: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M8 3 h11 l6 6 v20 H8 Z" fill="#ffffff" stroke="#000"/>
    <path d="M19 3 v6 h6" fill="#dfe3e6" stroke="#000"/>
    <rect x="11" y="13" width="11" height="1" fill="#3355aa"/>
    <rect x="11" y="16" width="11" height="1" fill="#808080"/>
    <rect x="11" y="19" width="11" height="1" fill="#808080"/>
    <rect x="11" y="22" width="7" height="1" fill="#808080"/></svg>`,

  radar: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="#04130b" stroke="#000"/>
    <circle cx="16" cy="16" r="9" fill="none" stroke="#0a5b2e"/>
    <circle cx="16" cy="16" r="5" fill="none" stroke="#0a5b2e"/>
    <path d="M16 16 L16 3 A13 13 0 0 1 28 11 Z" fill="#25e06a" opacity="0.5"/>
    <line x1="16" y1="16" x2="16" y2="3" stroke="#4dff88" stroke-width="1"/>
    <circle cx="21" cy="11" r="1.6" fill="#8dffb0"/>
    <circle cx="11" cy="20" r="1.3" fill="#3fbf6a"/>
    <circle cx="22" cy="21" r="1.1" fill="#2f9f55"/></svg>`,

  globe: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12.5" fill="#2f8fd4" stroke="#000"/>
    <circle cx="16" cy="16" r="12.5" fill="none" stroke="#bfe4ff" opacity="0.8"/>
    <ellipse cx="16" cy="16" rx="5.5" ry="12.5" fill="none" stroke="#dff0ff"/>
    <line x1="3.5" y1="16" x2="28.5" y2="16" stroke="#dff0ff"/>
    <path d="M5 10 H27 M5 22 H27" stroke="#dff0ff" fill="none" opacity="0.8"/>
    <path d="M9 9 q3 3 1 6 q4 2 2 6 q3 1 5 4" fill="none" stroke="#2f6b2f" stroke-width="2" opacity="0.7"/></svg>`,

  palette: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 5 C9 5 4 9 4 15 c0 4 3 7 7 7 c1.6 0 2.4 -1.2 4 -1.2 c1.8 0 2.6 1.5 2.6 3.1 c0 2 3 2.9 5.4 1.5 C27 24.5 29 20 29 15 C29 9 23 5 16 5 Z" fill="#e6b878" stroke="#000"/>
    <ellipse cx="10.5" cy="18" rx="2.2" ry="1.6" fill="#7a4a12"/>
    <circle cx="10.5" cy="11" r="2" fill="#2a78d6" stroke="#000" stroke-width="0.4"/>
    <circle cx="16" cy="9" r="2" fill="#e34948" stroke="#000" stroke-width="0.4"/>
    <circle cx="21" cy="10" r="2" fill="#eda100" stroke="#000" stroke-width="0.4"/>
    <circle cx="24" cy="14.5" r="2" fill="#1baf7a" stroke="#000" stroke-width="0.4"/>
    <circle cx="19.5" cy="15.5" r="1.8" fill="#e87ba4" stroke="#000" stroke-width="0.4"/>
    <line x1="17" y1="21" x2="29" y2="30" stroke="#9a6a2a" stroke-width="2.4"/>
    <path d="M15.4 19.6 l2.6 2.6 -1.5 1.5 -2.6 -2.6 Z" fill="#c8c8c8" stroke="#000" stroke-width="0.4"/>
    <path d="M13.9 21.1 l1.8 1.8 -1.2 1.2 -1.8 -1.8 Z" fill="#eb6834"/></svg>`,

  pdf: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M7 3 h12 l6 6 v20 H7 Z" fill="#ffffff" stroke="#000"/>
    <path d="M19 3 v6 h6" fill="#dfe3e6" stroke="#000"/>
    <rect x="7" y="18" width="18" height="8" fill="#c8102e"/>
    <text x="16" y="24.5" font-size="6" fill="#fff" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold">PDF</text></svg>`,

  mail: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <rect x="4" y="8" width="24" height="16" fill="#fdfdfd" stroke="#000"/>
    <path d="M4 8 L16 17 L28 8" fill="#eef3ff" stroke="#000"/>
    <path d="M4 24 L13 15 M28 24 L19 15" stroke="#000" fill="none"/></svg>`,

  recycle: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12 h14 l-1.5 15 a2 2 0 0 1 -2 2 h-7 a2 2 0 0 1 -2 -2 Z" fill="#b9bec6" stroke="#000"/>
    <rect x="7" y="9" width="18" height="3" rx="1" fill="#9aa0a8" stroke="#000"/>
    <rect x="13" y="7" width="6" height="2" rx="1" fill="#9aa0a8" stroke="#000"/>
    <g fill="#2a8f3a" stroke="#0c5a1c" stroke-width="0.4">
      <path d="M16 14 l2.4 3.2 h-1.4 l-1 3 -2-1 1-2 h-1.4 Z"/>
      <path d="M21 22 l-1 3.6 -0.9 -1.1 -2.8 1.6 -0.4 -2.1 2.6 -1.5 -0.9 -1.1 Z"/>
      <path d="M11 22 l3.4 1.4 -1 0.9 1.4 2.9 -2 0.6 -1.5 -2.7 -1.1 0.9 Z"/></g></svg>`,

  info: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="#2f6fd0" stroke="#000"/>
    <circle cx="16" cy="9.5" r="2" fill="#fff"/>
    <rect x="14" y="13" width="4" height="11" fill="#fff"/></svg>`,

  startFlag: `<svg viewBox="0 0 40 32" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M4 7 L17 5 L17 16 L4 16 Z" fill="#ff3b30"/>
    <path d="M19 4.7 L32 3 L32 16 L19 16 Z" fill="#3fca57"/>
    <path d="M4 18 L17 18 L17 29 L4 27 Z" fill="#37a7f0"/>
    <path d="M19 18 L32 18 L32 28 L19 30 Z" fill="#ffc224"/></svg>`,

  speaker: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M2 6 h3 l3 -3 v10 l-3 -3 H2 Z" fill="#000"/>
    <path d="M10 5 q3 3 0 6 M12 3 q5 5 0 10" fill="none" stroke="#000"/></svg>`,

  speakerMute: `<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" shape-rendering="crispEdges">
    <path d="M2 6 h3 l3 -3 v10 l-3 -3 H2 Z" fill="#000"/>
    <path d="M10 5 L15 11 M15 5 L10 11" stroke="#c00" stroke-width="1.4"/></svg>`,

  clippy: `<svg viewBox="0 0 40 52" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" stroke="#9098a8" stroke-width="4" stroke-linecap="round">
      <path d="M13 8 v30 a7 7 0 0 0 14 0 V12 a4 4 0 0 0 -8 0 V36"/>
    </g>
    <g stroke="#5a6272" stroke-width="1" fill="none"><path d="M13 8 v30 a7 7 0 0 0 14 0 V12 a4 4 0 0 0 -8 0 V36"/></g>
    <circle cx="15" cy="16" r="4" fill="#fff" stroke="#000"/><circle cx="16" cy="17" r="1.6" fill="#000"/>
    <circle cx="26" cy="16" r="4" fill="#fff" stroke="#000"/><circle cx="25" cy="17" r="1.6" fill="#000"/>
    <path d="M14 11 q1 -3 4 -3 M27 11 q-1 -3 -4 -3" fill="none" stroke="#000" stroke-width="1"/></svg>`,
};

/* ---------- blog posts (full text, from harsh010102.github.io) ---------- */
const BLOG = [
  {
    id: "post-unlearning",
    title: "Does an Unlearned Language Model Truly Forget?",
    file: "unlearning.txt",
    date: "August 5, 2026",
    url: "https://harsh010102.github.io/posts/2026/08/mechanistic-interpretability-of-unlearning/",
    html: `
      <h2>Does an Unlearned Language Model Truly Forget? Reading the Model's Mind, Layer by Layer</h2>
      <p class="byline">August 5, 2026 · ~5 min · from my M.Sc. thesis at TU Munich</p>
      <p>Large language models memorize things we'd sometimes like them to forget: a person's private details, copyrighted text, hazardous know-how. <b>Machine unlearning</b> is the field trying to remove specific knowledge from a trained model without retraining it from scratch. It matters for privacy (the "right to be forgotten"), copyright, and safety.</p>
      <p>But it hides a hard question that my master's thesis is built around: <b>how do we actually <i>know</i> the model forgot?</b></p>
      <p>The standard answer is to check the output: ask the model the question and see if it still gives the answer. My thesis argues that this is not enough. A model can look perfectly "forgotten" on the outside while still holding the knowledge inside. To tell the difference, you have to look <i>in</i>.</p>
      <h3>Reading the model layer by layer</h3>
      <p>Modern language models build up their answer across dozens of internal layers. The <b>logit lens</b> is a simple interpretability trick: at <i>every</i> layer, we peek at what the model would predict if it stopped thinking right there. Do this all the way up the stack and you get a little movie of the answer forming.</p>
      <p>For a model that genuinely knows a fact, the correct answer climbs to the top over the final layers. An unlearned model, given the same prompt, never surfaces the answer at all — it emits a meaningless token instead. The fact is <b>suppressed at the output, not erased from the model.</b> That distinction — <i>suppression vs. erasure</i> — is the heart of the thesis.</p>
      <h3>The finding that surprised me most: confidence &ne; knowledge</h3>
      <p>Three different unlearning methods each output a <b>wrong</b> token at <b>~100% confidence</b> — the <i>same</i> confidence as the model that actually knows the answer. In other words, a probability- or confidence-based metric literally cannot tell "confidently knows" apart from "confidently deflects." If your success criterion is "the model stopped saying it, and seems sure," you can be completely fooled.</p>
      <h3>Four different ways to "forget"</h3>
      <p>The four unlearning methods I studied all pass the benchmark's "forgotten" check, but do completely different things on the inside:</p>
      <ul>
        <li><b>NPO</b> replaces the answer with a meaningless token.</li>
        <li><b>GradDiff</b> replaces it with a bland function word.</li>
        <li><b>IDK</b> learns a <i>deflection</i>: it confidently says a filler word while pushing the real answer further down.</li>
        <li><b>RMU</b> <i>scrambles</i> the representation into low-confidence gibberish.</li>
      </ul>
      <p>One benchmark verdict; four genuinely different internal mechanisms. The output metric sees none of it.</p>
      <h3>The same method can forget at one size and fail at another</h3>
      <p>I ran everything at two model scales (1B and 8B parameters). Two methods that cleanly suppress the fact at 8B <b>leak the correct answer at 1B</b>. The unlearning simply doesn't take hold at the smaller scale, even though training "succeeded." Only one method was robust across both sizes — invisible if you only look at aggregate scores.</p>
      <h3>From observation to a <i>faithful</i> metric</h3>
      <p>If output metrics can be fooled, what should we measure instead? The mechanistic view suggests a metric built from the model's <i>internal</i> trajectory: how close the fact's representation is to a "knows" reference versus a "never-knew" reference across layers. I call it <b>D_mech</b>.</p>
      <p>Put through the field's own meta-evaluation (OpenUnlearning / SPID), which scores a metric on whether it can tell knowledge-present from knowledge-absent <i>and</i> stays stable when you reword the question — <b>D_mech was the only metric that also passed the second test</b>, staying invariant under paraphrasing while lexical metrics collapsed. A small but concrete step toward evaluations that measure <i>knowledge</i> rather than <i>surface wording</i>.</p>
      <h3>Keeping myself honest</h3>
      <p>Not everything worked. A per-fact "relearning" test I'd hoped would validate the metric came back null. The metric's advantage is strongest where the model memorized strongly (8B) and fades at 1B. I implemented the brand-new <b>Jacobian lens</b> (Anthropic, 2026) end to end — it runs correctly, but its raw readout was too noisy on this benchmark to be usable yet. Reporting the boundaries honestly felt more useful than a tidy story.</p>
      <h3>Why I find this exciting</h3>
      <p>"Unlearning" is becoming a compliance checkbox, and my thesis is a small argument that the checkbox can lie. Looking <i>inside</i> the model reveals that most "forgotten" facts are merely hidden — and gives us a more faithful way to measure the difference. As these systems move into products and regulation, the gap between <i>looking</i> forgotten and <i>being</i> forgotten is going to matter a lot.</p>`,
  },
  {
    id: "post-mpi",
    title: "Thesis to Tangible: MPI-SWS Fellowship",
    file: "mpi-sws.txt",
    date: "September 15, 2023",
    url: "https://harsh010102.github.io/posts/2012/08/blog-post-2/",
    html: `
      <h2>Thesis to Tangible: How the MPI-SWS Fellowship Shaped my Undergraduate Research</h2>
      <p class="byline">September 15, 2023 · ~3 min</p>
      <p>During the early fall of 2023, from July to October, I had the privilege of serving as a Research Fellow in Dr. Laurent Bindschaedler's Data Systems research group at the <b>Max Planck Institute for Software Systems</b> in Saarbrücken, Germany. It was an immersive and enlightening experience — working on cutting-edge research challenges alongside distinguished researchers and PhD students, and making amazing friends from across the globe.</p>
      <p>MPI generously covered my flights, accommodation, and travel (ICE trains are not cheap!). Saarbrücken isn't a "tourist" city, so English speakers were limited — but the work culture was refreshing. Glass-walled rooms and an "open-door" policy encourage interaction among PhD students, interns and professors. Everyone goes to lunch together and talks about almost everything, then again over coffee.</p>
      <p>In the second week of August, MPI-SWS, Cornell, and the University of Maryland run a week-long pre-doctoral research school, <b>CMMRS</b> — a flagship Max Planck event aimed at senior undergraduates and Master's students considering a PhD. There I learned advanced concepts of algorithmic decision-making with a focus on social questions like privacy and security. It was an honor to be selected and to discuss my research interests with leaders from industry and academia.</p>
      <h3>A glimpse of the data workflow</h3>
      <p>My ongoing Satellite-Data-Augmentation project was incubated by the Data Systems group under Dr. Bindschaedler. From unstructured text we extracted information of interest — city/state/country, audio, video, images and geo-tags — from a tweet's body and metadata. I oversaw the ETL process, using an OpenAPI spec and pydantic models to extract text in the correct format. Telegram channels were used as a second source.</p>
      <h3>System performance</h3>
      <p>For the interface we built a mobile- and desktop-responsive, Messenger-like UI that's easy to navigate on phones. The inference engine, built on an in-house LLaMA-2 model, can analyze data and even perform ML tasks like regression — a user prompts a question and gets an answer explained in plain language, with graphs, maps and pictures.</p>
      <p class="note-line">And yes — MPI's soccer team is always Bundesliga-ready. ⚽</p>`,
  },
  {
    id: "post-canada",
    title: "Beyond Mango Trees: Research in Canadian Labs",
    file: "canada.txt",
    date: "September 30, 2022",
    url: "https://harsh010102.github.io/posts/2012/08/blog-post-1/",
    html: `
      <h2>Beyond Mango Trees: A Summer of Research in Canadian Labs</h2>
      <p class="byline">September 30, 2022 · ~4 min</p>
      <p>Summer 2022 was one of the most amazing times of my life. I visited the <b>Canadian Centre for Climate Change and Adaptation</b> as a Research Intern via the prestigious <b>MITACS Globalink Research Internship</b>. Here's the experience, the vibe, and the doors it can open.</p>
      <p>MITACS GRI is a competitive program for international undergraduates. It funds travel from your home country to Canada, covers research expenses, and supports a 12-week stay. I'm Harsh Parikh — at the time a final-year B.Tech student at Nirma University, Ahmedabad. I flew Ahmedabad → Doha → Montréal → Charlottetown (a 13-hour Montréal layover I still remember!). My interests are in Applied Machine Learning with a focus on climate modelling.</p>
      <p>I quickly picked up field-research procedures in environmental science and precision agriculture. Taking an independent role, I led a team installing nitrogen-collecting tubes, then deployed temperature and moisture sensors to monitor field health — hands-on work with advanced instruments like the <b>LI-COR 7810</b> and soil-flux chambers.</p>
      <p>My project focused on the province's hydrology. Environment Canada provided watershed data for all three PEI counties — flow rate, precipitation, snowfall, temperature. My task: analyze the island's freshwater depletion, identify risk factors, and explore mitigation. The region depends on rain and snow for freshwater and is exposed to Atlantic storms that disrupt tides and damage groundwater.</p>
      <p>I presented the model as a <b>poster at the Canadian Society of Bioengineering</b> annual conference — and, on the organizing committee, learned a lot about running an event. In the final phase I collaborated with the Government of Prince Edward Island on a novel benchmark for <b>coastal-erosion</b> patterns, gathering peg-line measurements across ~50 km of the northern coast and fusing them with Sentinel-2 raster data.</p>
      <p>Living independently in Canada for three months was life-changing — a sense of responsibility, a preview of studying abroad, and a network of mentors and friends for life.</p>
      <p class="note-line">PRO-TIP: learn how to cook. 😉</p>`,
  },
];

/* ---------- projects (open in a new tab) ---------- */
const PROJECTS = [
  { id: "compute-radar", label: "Compute Radar EU", icon: "radar",
    url: "https://harsh010102.github.io/compute-radar-eu/dashboard/",
    repo: "https://github.com/harsh010102/compute-radar-eu",
    desc: "A living radar of ~30 European & North-American compute incubators — LLM-classified against an 8-layer taxonomy, patent-verified via EPO, on a map." },
  { id: "skypulse-copilot", label: "SkyPulse Copilot", icon: "globe",
    url: "https://harsh010102.github.io/skypulse-copilot/",
    repo: "https://github.com/harsh010102/skypulse-copilot",
    desc: "A RAG + tool-use agent over satellite / climate tiles (MPI-SWS SkyPulse): LangGraph + Claude + Chroma, with an evaluation harness." },
  { id: "creativity-lab", label: "Creativity Lab", icon: "palette",
    url: "https://harsh010102.github.io/llm-creativity-lab/",
    repo: "https://github.com/harsh010102/llm-creativity-lab",
    desc: "Interactive companion to my TUM paper 'Measuring Creativity in LLMs' — drive the deterministic, judge-free novelty framework on any text you paste, live in the browser." },
];

/* ---------- about + contact ---------- */
const ABOUT_HTML = `
  <div class="about">
    <div class="about-head">
      <div class="about-avatar">${ICONS.computer}</div>
      <div>
        <h2>Harsh Parikh</h2>
        <p class="tagline">AI researcher &amp; venture scout — AI engineering, deep-tech VC, and climate/energy.</p>
      </div>
    </div>
    <p>I evaluate the <b>technology, not the pitch</b>. My day work is separating models and ventures that <i>appear</i> to work from ones that genuinely do.</p>
    <fieldset><legend>Experience</legend>
      <ul class="tree">
        <li>💼 <b>NXP Semiconductors</b> — Startup Innovation, CTO Office (deep-tech scouting)</li>
        <li>🎓 <b>TU Munich</b> — M.Sc. thesis: mechanistic interpretability of machine unlearning</li>
        <li>🔬 <b>MPI-SWS</b> — Research Fellow, Data Systems (Dr. L. Bindschaedler)</li>
        <li>🌍 <b>Canadian Centre for Climate Change</b> — MITACS Globalink intern</li>
        <li>🚗 <b>TUM × Continental</b> — multimodal AV explainability</li>
      </ul>
    </fieldset>
    <p class="hint">Tip: open the <b>Blog</b> folder, launch <b>Compute Radar EU</b>, or grab my <b>CV</b> from the desktop.</p>
  </div>`;

const CONTACT = [
  { label: "GitHub", href: "https://github.com/harsh010102" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harshparikh2002/" },
  { label: "Email", href: "mailto:harsh.parikh@tum.de" },
];

const README_HTML = `
  <div class="readme">
    <p><b>Welcome to Harsh&nbsp;97.</b> 🖥️</p>
    <p>This is my portfolio, dressed up as a late-90s desktop. Poke around like you would a real machine:</p>
    <ul>
      <li>📁 <b>Double-click</b> icons to open them (single-tap on mobile).</li>
      <li>📝 The <b>Blog</b> folder holds write-ups on my thesis &amp; research trips.</li>
      <li>🛰️ <b>Project</b> icons launch the real thing in a new tab.</li>
      <li>📄 <b>Résumé.pdf</b> downloads my CV.</li>
      <li>🟦 Try the <b>Start</b> menu — including <i>Shut&nbsp;Down</i>.</li>
      <li>🔊 Click the speaker in the tray to un-mute the startup chime.</li>
    </ul>
    <p class="hint">Best on a desktop browser, but it works on phones too.</p>
  </div>`;

window.DATA = { ICONS, BLOG, PROJECTS, ABOUT_HTML, CONTACT, README_HTML };
