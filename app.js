/* pylearn v0.1-preview - bite-sized Python lessons, real Python in the browser */
"use strict";

const VERSION = "v0.1-preview";
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => [...(el || document).querySelectorAll(s)];

/* ---------- state ---------- */
const DEFAULT_STATE = { xp: 0, streak: 0, lastDay: null, done: [], bestLesson: {} };
let state = loadState();
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem("pylearn-v1"));
    return Object.assign({}, DEFAULT_STATE, s || {});
  } catch (e) { return { ...DEFAULT_STATE }; }
}
function saveState() { localStorage.setItem("pylearn-v1", JSON.stringify(state)); }

/* ---------- python runner (worker) ---------- */
let pyWorker = null, pyReady = false, pyPending = {}, pySeq = 0;
function ensureWorker() {
  if (pyWorker) return;
  pyWorker = new Worker("py-worker.js");
  pyWorker.onmessage = (e) => {
    const m = e.data;
    if (m.id === -1) return;
    const p = pyPending[m.id];
    if (p) { clearTimeout(p.timer); delete pyPending[m.id]; p.resolve(m); }
  };
}
function runPython(code, onProgress) {
  ensureWorker();
  return new Promise((resolve) => {
    const id = ++pySeq;
    const timer = setTimeout(() => {
      // hung (infinite loop) - kill and respawn the worker
      delete pyPending[id];
      pyWorker.terminate(); pyWorker = null; pyReady = false;
      resolve({ ok: false, out: "", err: "Run stopped. It may be a loop or a slow Python download. Try again." });
    }, pyReady ? 9000 : 60000);
    pyPending[id] = { resolve, timer };
    pyWorker.postMessage({ id, code });
  });
}

/* ---------- tiny helpers ---------- */
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2200);
}
function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function todayKey() { const d = new Date(); return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(); }

/* syntax coloring - single pass so inserted markup is never re-matched */
function hi(code) {
  const re = /("[^"]*"|'[^']*'|\b(?:print|input|len|range|int|str|float)\b|\b(?:for|in|if|else|elif|while|def|return|and|or|not)\b|\b\d+\b)/g;
  return esc(code).replace(re, (m) => {
    if (m[0] === '"' || m[0] === "'") return `<span class="tok-str">${m}</span>`;
    if (/^\d+$/.test(m)) return `<span class="tok-num">${m}</span>`;
    if (/^(print|input|len|range|int|str|float)$/.test(m)) return `<span class="tok-fn">${m}</span>`;
    return `<span class="tok-kw">${m}</span>`;
  });
}

/* ---------- content ---------- */
const UNITS = [
  {
    id: "u1", title: "Unit 1: First Steps", sub: "Make Python talk, store things, do math",
    lessons: [
      { id: "l1", title: "Say hello", icon: "👋" },
      { id: "l2", title: "Words & quotes", icon: "💬" },
      { id: "l3", title: "Numbers", icon: "🔢" },
      { id: "l4", title: "Variables", icon: "📦" },
      { id: "l5", title: "Mini project", icon: "🎮" },
    ],
  },
];

const LESSON_L1 = {
  id: "l1",
  title: "Say hello",
  steps: [
    {
      t: "info", kicker: "New idea", title: "Python can talk",
      body: "Use print( ) to make Python say something.\nWhatever you put inside the brackets shows up on the screen.",
      code: 'print("Hello!")', out: "Hello!",
    },
    {
      t: "run", kicker: "Try it", title: "Press Run",
      prompt: "This code is ready to go. Just press Run and watch what happens.",
      code: 'print("Hello, world!")', expect: "Hello, world!",
    },
    {
      t: "choice", kicker: "Quick check", title: "What shows up?",
      prompt: 'When you run  print("I love pizza")  what do you see?',
      options: ["I love pizza", '"I love pizza"', "print", "An error"],
      answer: 0,
      why: "The quotes mark where the text starts and ends - the outer quotes are not printed.",
    },
    {
      t: "fill", kicker: "Fill the blank", title: "Complete the code",
      prompt: "Make Python say Hi there!",
      pre: "", post: '("Hi there!")',
      options: ["print", "say", "echo", "shout"],
      answer: "print",
      why: "print( ) displays text on the screen.",
    },
    {
      t: "type", kicker: "Your turn", title: "Type it yourself",
      prompt: "Make Python say exactly this:\nI am learning Python",
      starter: 'print("")',
      check: (code, out) => out.trim() === "I am learning Python",
      hint: 'Put the sentence between the quotes: print("I am learning Python")',
    },
    {
      t: "info", kicker: "New idea", title: "Strings",
      body: "Text inside quotes is called a string.\nUse \"double\" or 'single' quotes. Just start and end with the same kind.",
      code: "print(\"double quotes work\")\nprint('single quotes work')",
      out: "double quotes work\nsingle quotes work",
    },
    {
      t: "choice", kicker: "Quick check", title: "Spot the good line",
      prompt: "Only one of these is correct Python. Which one?",
      options: ['print(Hello)', 'print("Hello")', 'print("Hello\')', 'print "Hello"'],
      answer: 1,
      why: 'Text needs matching quotes: print("Hello")',
    },
    {
      t: "run", kicker: "New idea", title: "Boxes with names",
      prompt: "A variable stores a value so you can use it again.\nHere we store \"Sam\" in a box called name. Press Run.",
      code: 'name = "Sam"\nprint(name)', expect: "Sam",
    },
    {
      t: "fill", kicker: "Fill the blank", title: "Store it",
      prompt: "Store Minecraft in a variable called game.",
      pre: "game ", post: ' "Minecraft"',
      options: [":", "=", "is", "=="],
      answer: "=",
      why: "One = stores a value. Two (==) is for comparing - you will meet it later.",
    },
    {
      t: "type", kicker: "Boss step", title: "Prove it",
      prompt: "Create a variable called age with your age in it, then print it.",
      starter: "# your code here\n",
      check: (code, out) => {
        const m = code.match(/age\s*=\s*(\d+)/);
        return !!m && out.trim() === m[1];
      },
      hint: "Two lines:\nage = 16\nprint(age)\n(use your real age)",
    },
  ],
};

/* ---------- views ---------- */
const app = $("#app");
let navView = "home";

const ICONS = {
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg>',
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6"/><path d="m16 6 6 6-6 6"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4.2"/><path d="M4 21c1.4-3.8 4.4-5.7 8-5.7s6.6 1.9 8 5.7"/></svg>',
};

function topbarHTML() {
  return `<div class="topbar">
    <div class="logo"><img src="icon.svg" alt=""><span><span class="py">py</span>learn</span></div>
    <div class="spacer"></div>
    <div class="stat streak"><span class="ico">🔥</span>${state.streak}</div>
    <div class="stat xp"><span class="ico">⚡</span>${state.xp}</div>
  </div>`;
}
function navHTML(active) {
  return `<div class="bottomnav">
    <button class="navbtn ${active === "home" ? "active" : ""}" data-nav="home">${ICONS.home}Learn</button>
    <button class="navbtn ${active === "play" ? "active" : ""}" data-nav="play">${ICONS.code}Playground</button>
    <button class="navbtn ${active === "me" ? "active" : ""}" data-nav="me">${ICONS.user}Profile</button>
  </div>`;
}
function bindNav() {
  $$(".navbtn").forEach((b) => (b.onclick = () => {
    const v = b.dataset.nav;
    if (v === "home") renderHome();
    if (v === "play") renderPlayground();
    if (v === "me") renderProfile();
  }));
}

/* ---------- home ---------- */
function renderHome() {
  navView = "home";
  const u = UNITS[0];
  const nodes = u.lessons.map((l, i) => {
    const done = state.done.includes(l.id);
    const unlocked = i === 0;
    const cls = done ? "done" : unlocked ? "current" : "locked";
    const icon = done ? "⭐" : unlocked ? l.icon : "🔒";
    const bubble = !done && unlocked ? '<div class="start-bubble">START</div>' : "";
    return `<div class="node-wrap ${cls}">
      ${bubble}
      <button class="node ${cls}" data-lesson="${l.id}" data-unlocked="${unlocked}" data-done="${done}">${icon}</button>
      <div class="node-label">${l.title}</div>
    </div>`;
  }).join("");

  app.innerHTML = `<div class="view">
    ${topbarHTML()}
    <div class="home-scroll">
      <div class="unit-card">
        <div class="unit-kicker">${u.title}</div>
        <div class="unit-title">Python from zero</div>
        <div class="unit-sub">${u.sub}</div>
      </div>
      <div class="path">${nodes}</div>
    </div>
    ${navHTML("home")}
  </div>`;

  $$(".node").forEach((n) => (n.onclick = () => {
    if (n.dataset.unlocked !== "true") { toast("Preview: only Say hello is available. More lessons come after approval."); return; }
    if (n.dataset.lesson === "l1") startLesson();
    else toast("This lesson arrives in v0.2 - soon!");
  }));
  bindNav();
}

/* ---------- lesson player ---------- */
let L = null; // active lesson session

function startLesson() {
  L = { steps: LESSON_L1.steps, i: 0, earned: 0, mistakes: 0 };
  renderLessonShell();
  renderStep();
}

function renderLessonShell() {
  navView = "lesson";
  app.innerHTML = `<div class="view">
    <div class="lesson-head">
      <button class="quit-btn" id="quit">✕</button>
      <div class="progress-track"><div class="progress-fill" id="pfill"></div></div>
    </div>
    <div class="lesson-body" id="lbody"></div>
    <div class="lesson-foot" id="lfoot"></div>
  </div>
  <div class="sheet" id="sheet"></div>`;
  $("#quit").onclick = confirmQuit;
}

function confirmQuit() {
  const bg = document.createElement("div");
  bg.className = "modal-bg";
  bg.innerHTML = `<div class="modal">
    <h3>Quit this lesson?</h3>
    <p>Your progress in this lesson will be lost.</p>
    <div class="row">
      <button class="btn ghost" id="stay">Stay</button>
      <button class="btn" id="leave" style="background:var(--red);box-shadow:0 5px 0 var(--red-deep)">Quit</button>
    </div>
  </div>`;
  document.body.appendChild(bg);
  $("#stay", bg).onclick = () => bg.remove();
  $("#leave", bg).onclick = () => { bg.remove(); renderHome(); };
}

function setProgress() {
  const pct = Math.round((L.i / L.steps.length) * 100);
  $("#pfill").style.width = pct + "%";
}

function stepHead(s) {
  return `<div class="step-kicker">${s.kicker}</div>
    <div class="step-title">${s.title}</div>`;
}
function consoleHTML(out, err) {
  return `<div class="console"><div class="console-label">OUTPUT</div>
    <div class="console-body">${err ? `<span class="err">${esc(err)}</span>` : esc(out) || '<span class="dim">(nothing printed)</span>'}</div>
  </div>`;
}

function showSheet(good, why, onContinue) {
  const sheet = $("#sheet");
  sheet.className = "sheet " + (good ? "good" : "bad");
  sheet.innerHTML = `<div class="sheet-title">${good ? "✅ Nice!" : "❌ Not quite"}</div>
    <div class="sheet-why">${good ? (why || "+10 XP") : why}</div>
    <button class="btn ${good ? "green" : ""}" id="sheetBtn">${good ? "Continue" : "Got it"}</button>`;
  requestAnimationFrame(() => sheet.classList.add("show"));
  $("#sheetBtn").onclick = () => {
    sheet.classList.remove("show");
    if (good && onContinue) setTimeout(onContinue, 180);
  };
}

function renderStep() {
  setProgress();
  const s = L.steps[L.i];
  const body = $("#lbody"), foot = $("#lfoot");
  body.scrollTop = 0;

  if (s.t === "info") {
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.body)}</div>
      <div class="code-card"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="fname">main.py</span></div><pre>${hi(s.code)}</pre></div>
      ${consoleHTML(s.out)}
    </div>`;
    foot.innerHTML = `<button class="btn" id="next">Continue</button>`;
    $("#next").onclick = nextStep;
  }

  if (s.t === "run") {
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.prompt)}</div>
      <div class="code-card"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="fname">main.py</span></div><pre>${hi(s.code)}</pre></div>
      <div id="pymsg"></div>
      <div id="cout"></div>
    </div>`;
    foot.innerHTML = `<button class="btn run-btn" id="run">▶ Run</button>`;
    $("#run").onclick = async () => {
      const btn = $("#run");
      btn.disabled = true;
      if (!pyReady) $("#pymsg").innerHTML = `<div class="py-loading"><span class="snake">🐍</span>Waking up Python…<div class="py-bar"><i></i></div></div>`;
      const r = await runPython(s.code);
      if (!btn.isConnected) return;
      pyReady = !!pyWorker;
      $("#pymsg").innerHTML = "";
      $("#cout").innerHTML = consoleHTML(r.out, r.ok ? null : r.err);
      if (r.ok && r.out.trim() === s.expect) {
        award(10);
        foot.innerHTML = "";
        showSheet(true, "+10 XP - that is real Python running in your browser!", nextStep);
      } else {
        btn.disabled = false;
        showSheet(false, r.ok ? "Hmm, the output was not what we expected. Try again?" : friendlyErr(r.err));
      }
    };
  }

  if (s.t === "choice") {
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.prompt)}</div>
      <div class="choices">${s.options.map((o, i) => `<button class="choice" data-i="${i}">${esc(o)}</button>`).join("")}</div>
    </div>`;
    foot.innerHTML = `<button class="btn" id="check" disabled>Check</button>`;
    let sel = -1;
    $$(".choice").forEach((c) => (c.onclick = () => {
      $$(".choice").forEach((x) => x.classList.remove("sel", "wrong"));
      c.classList.add("sel");
      sel = +c.dataset.i;
      $("#check").disabled = false;
    }));
    $("#check").onclick = () => {
      if (sel < 0) return;
      const el = $$(".choice")[sel];
      if (sel === s.answer) {
        el.classList.add("correct");
        award(10);
        foot.innerHTML = "";
        showSheet(true, "+10 XP. " + s.why, nextStep);
      } else {
        el.classList.remove("sel");
        el.classList.add("wrong");
        L.mistakes++;
        showSheet(false, s.why);
        $("#check").disabled = true; sel = -1;
      }
    };
  }

  if (s.t === "fill") {
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.prompt)}</div>
      <div class="fill-line">${esc(s.pre)}<span class="blank" id="blank">&nbsp;</span>${esc(s.post)}</div>
      <div class="chips">${s.options.map((o) => `<button class="chip" data-v="${esc(o)}">${esc(o)}</button>`).join("")}</div>
    </div>`;
    foot.innerHTML = `<button class="btn" id="check" disabled>Check</button>`;
    const blank = $("#blank");
    let val = null;
    $$(".chip").forEach((ch) => (ch.onclick = () => {
      $$(".chip").forEach((x) => x.classList.remove("used"));
      ch.classList.add("used");
      val = ch.dataset.v;
      blank.textContent = val;
      blank.classList.add("filled");
      $("#check").disabled = false;
    }));
    blank.onclick = () => {
      $$(".chip").forEach((x) => x.classList.remove("used"));
      blank.innerHTML = "&nbsp;"; blank.classList.remove("filled");
      val = null; $("#check").disabled = true;
    };
    $("#check").onclick = () => {
      if (val === null) return;
      if (val === s.answer) {
        award(10);
        foot.innerHTML = "";
        showSheet(true, "+10 XP. " + s.why, nextStep);
      } else {
        L.mistakes++;
        showSheet(false, s.why);
      }
    };
  }

  if (s.t === "type") {
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.prompt)}</div>
      <div class="editor-wrap"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="fname">main.py</span></div><textarea class="editor" id="ed" spellcheck="false" autocomplete="off" autocapitalize="off">${esc(s.starter)}</textarea></div>
      <div id="pymsg"></div>
      <div id="cout"></div>
    </div>`;
    foot.innerHTML = `<button class="btn run-btn" id="run">▶ Run & check</button>`;
    const ed = $("#ed");
    ed.addEventListener("keydown", (e) => {
      if (e.key === "Tab") {
        e.preventDefault();
        const st = ed.selectionStart;
        ed.value = ed.value.slice(0, st) + "    " + ed.value.slice(ed.selectionEnd);
        ed.selectionStart = ed.selectionEnd = st + 4;
      }
    });
    $("#run").onclick = async () => {
      const btn = $("#run");
      const code = ed.value;
      if (!code.trim()) { toast("Type some code first 🙂"); return; }
      btn.disabled = true;
      if (!pyReady) $("#pymsg").innerHTML = `<div class="py-loading"><span class="snake">🐍</span>Waking up Python…<div class="py-bar"><i></i></div></div>`;
      const r = await runPython(code);
      if (!btn.isConnected) return;
      pyReady = !!pyWorker;
      $("#pymsg").innerHTML = "";
      $("#cout").innerHTML = consoleHTML(r.out, r.ok ? null : friendlyErr(r.err));
      if (r.ok && s.check(code, r.out)) {
        award(10);
        foot.innerHTML = "";
        showSheet(true, "+10 XP - you wrote that yourself!", nextStep);
      } else {
        btn.disabled = false;
        showSheet(false, r.ok ? "Runs, but it is not quite it. Hint: " + s.hint : "Python found a problem. Hint: " + s.hint);
      }
    };
  }
}

function friendlyErr(err) {
  if (!err) return "Something went wrong";
  return err.replace(/^PythonError:\s*/i, "").split("\n").pop();
}

function award(n) { L.earned += n; }

function nextStep() {
  L.i++;
  if (L.i >= L.steps.length) finishLesson();
  else renderStep();
}

function finishLesson() {
  const firstTime = !state.done.includes("l1");
  if (firstTime) state.done.push("l1");
  state.xp += L.earned;
  // streak: same day = keep, next day = +1, gap = reset to 1
  const t = todayKey();
  if (state.lastDay !== t) {
    const y = new Date(Date.now() - 864e5);
    const yk = y.getFullYear() + "-" + (y.getMonth() + 1) + "-" + y.getDate();
    state.streak = state.lastDay === yk ? state.streak + 1 : 1;
    state.lastDay = t;
  }
  saveState();
  confetti();
  app.innerHTML = `<div class="view">
    <div class="celebrate step-anim">
      <div class="trophy">🏆</div>
      <h1>Lesson complete!</h1>
      <p>You wrote real Python. That is the whole secret - tiny steps, done daily.</p>
      <div class="xp-pill">⚡ +${L.earned} XP</div>
      <button class="btn" id="done">Back to path</button>
    </div>
  </div>`;
  $("#pfill") && ($("#pfill").style.width = "100%");
  $("#done").onclick = renderHome;
}

function confetti() {
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  const colors = ["#6e7bff", "#ffd43b", "#3ecf8e", "#ff6b6b", "#9d6bff", "#7be3b5"];
  for (let i = 0; i < 70; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "%";
    c.style.background = colors[i % colors.length];
    c.style.animationDelay = Math.random() * 0.6 + "s";
    c.style.animationDuration = 1.6 + Math.random() * 1.4 + "s";
    c.style.transform = `rotate(${Math.random() * 360}deg)`;
    layer.appendChild(c);
  }
  document.body.appendChild(layer);
  setTimeout(() => layer.remove(), 3800);
}

/* ---------- playground ---------- */
function renderPlayground() {
  navView = "play";
  app.innerHTML = `<div class="view">
    ${topbarHTML()}
    <div class="pad">
      <div class="pg-title">Playground 🛝</div>
      <div class="pg-sub">Try Python here. Text output only in this preview; input and graphics are not supported.</div>
      <div class="editor-wrap"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="fname">playground.py</span></div><textarea class="editor" id="pged" spellcheck="false" autocomplete="off" autocapitalize="off" style="min-height:170px">name = "you"\nfor i in range(3):\n    print("Hi " + name + "!", i + 1)</textarea></div>
      <div class="pg-actions">
        <button class="btn run-btn" id="pgrun">▶ Run</button>
        <button class="btn ghost" id="pgclear">Clear</button>
      </div>
      <div id="pymsg"></div>
      <div id="pgout"></div>
    </div>
    ${navHTML("play")}
  </div>`;
  bindNav();
  const ed = $("#pged");
  ed.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const st = ed.selectionStart;
      ed.value = ed.value.slice(0, st) + "    " + ed.value.slice(ed.selectionEnd);
      ed.selectionStart = ed.selectionEnd = st + 4;
    }
  });
  $("#pgrun").onclick = async () => {
    const btn = $("#pgrun");
    btn.disabled = true;
    if (!pyReady) $("#pymsg").innerHTML = `<div class="py-loading"><span class="snake">🐍</span>Waking up Python… (first run takes a few seconds)<div class="py-bar"><i></i></div></div>`;
    const r = await runPython(ed.value);
    if (!btn.isConnected) return;
    pyReady = !!pyWorker;
    $("#pymsg").innerHTML = "";
    $("#pgout").innerHTML = consoleHTML(r.out, r.ok ? null : friendlyErr(r.err));
    btn.disabled = false;
  };
  $("#pgclear").onclick = () => { $("#pgout").innerHTML = ""; ed.value = ""; ed.focus(); };
}

/* ---------- profile ---------- */
function renderProfile() {
  navView = "me";
  const lessons = state.done.length;
  const level = state.xp >= 200 ? "Rising snake" : state.xp >= 80 ? "Beginner+" : "Beginner";
  app.innerHTML = `<div class="view">
    ${topbarHTML()}
    <div class="pad">
      <div class="profile-card">
        <div class="avatar">🐍</div>
        <h2>Python learner</h2>
        <div class="lvl">Level: ${level}</div>
      </div>
      <div class="stat-grid">
        <div class="stat-box"><div class="num" style="color:#ff9f43">🔥 ${state.streak}</div><div class="lbl">Day streak</div></div>
        <div class="stat-box"><div class="num" style="color:var(--accent)">⚡ ${state.xp}</div><div class="lbl">Total XP</div></div>
        <div class="stat-box"><div class="num" style="color:var(--green)">⭐ ${lessons}</div><div class="lbl">Lessons done</div></div>
        <div class="stat-box"><div class="num" style="color:var(--primary)">🎯 1</div><div class="lbl">Unit</div></div>
      </div>
      <div class="about-box">
        pylearn ${VERSION}<br>
        Learn Python in tiny steps. Real Python runs in your browser -<br>
        Progress is saved on this device. Python loads from a CDN.
      </div>
      <div style="text-align:center"><button class="danger-link" id="reset">Reset all progress</button></div>
    </div>
    ${navHTML("me")}
  </div>`;
  bindNav();
  $("#reset").onclick = () => {
    const bg = document.createElement("div");
    bg.className = "modal-bg";
    bg.innerHTML = `<div class="modal">
      <h3>Reset everything?</h3>
      <p>XP, streak and lesson progress will be wiped from this device.</p>
      <div class="row">
        <button class="btn ghost" id="keep">Keep</button>
        <button class="btn" id="wipe" style="background:var(--red);box-shadow:0 5px 0 var(--red-deep)">Reset</button>
      </div>
    </div>`;
    document.body.appendChild(bg);
    $("#keep", bg).onclick = () => bg.remove();
    $("#wipe", bg).onclick = () => {
      localStorage.removeItem("pylearn-v1");
      state = { ...DEFAULT_STATE, done: [] };
      bg.remove();
      toast("Progress reset");
      renderHome();
    };
  };
}

/* ---------- boot ---------- */
renderHome();
console.log("pylearn " + VERSION);
