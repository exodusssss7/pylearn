/* pylearn v1.1 - bite-sized Python lessons, real Python in the browser */
"use strict";

const VERSION = "v1.1";
const $ = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => [...(el || document).querySelectorAll(s)];

/* ---------- state ---------- */
const DEFAULT_STATE = { xp: 0, streak: 0, lastDay: null, done: [], bestLesson: {} };
let state = loadState();
function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem("pylearn-v1"));
    const clean = Object.assign({}, DEFAULT_STATE, s && typeof s==='object' ? s : {});
    clean.done=Array.isArray(clean.done)?[...new Set(clean.done.filter(id=>typeof id==='string' && /^l(?:[1-9]|[1-8][0-9]|9[0-6])$/.test(id)))]:[];
    for(const key of ['xp','streak'])clean[key]=Number.isFinite(clean[key])&&clean[key]>=0?Math.floor(clean[key]):0;
    clean.bestLesson=clean.bestLesson && typeof clean.bestLesson==='object' && !Array.isArray(clean.bestLesson)?clean.bestLesson:{};
    return clean;
  } catch (e) { return { ...DEFAULT_STATE }; }
}
function saveState() { try { localStorage.setItem("pylearn-v1", JSON.stringify(state)); } catch(e) { toast("Storage is unavailable. Progress lasts only until you close this page."); } }

/* ---------- python runner (worker) ---------- */
let pyWorker = null, pyReady = false, pyPending = {}, pySeq = 0;
function hideRunControl(){document.getElementById('run-status')?.remove()}
function stopPython(){
  pyWorker?.terminate();pyWorker=null;pyReady=false;hideRunControl();
  for(const [id,p] of Object.entries(pyPending)){clearTimeout(p.timer);p.resolve({ok:false,out:'',err:'Stopped by you. Your code is unchanged. Run again when ready.'});delete pyPending[id]}
}
function showRunControl(){
  hideRunControl();const bar=document.createElement('div');bar.id='run-status';bar.setAttribute('role','status');bar.innerHTML=`<span>${pyReady?'Python is running':'Loading Python, then running'}</span><button type="button" id="stop-python">Stop</button>`;document.body.appendChild(bar);document.getElementById('stop-python').onclick=stopPython;
}
function ensureWorker() {
  if (pyWorker) return;
  pyWorker = new Worker("py-worker.js?v=1.1");
  const worker=pyWorker;
  pyWorker.onerror = () => {
    if(pyWorker!==worker)return;
    hideRunControl();
    for (const id of Object.keys(pyPending)) { const p = pyPending[id]; clearTimeout(p.timer); p.resolve({ ok: false, out: "", err: "Python could not load. Check your connection and try again." }); delete pyPending[id]; }
    pyWorker?.terminate(); pyWorker = null; pyReady = false;
  };
  pyWorker.onmessage = (e) => {
    if(pyWorker!==worker)return;
    const m = e.data;
    if (m.id === -1) return;
    const p = pyPending[m.id];
    if (p) { clearTimeout(p.timer); delete pyPending[m.id]; pyReady=true; hideRunControl(); p.resolve(m); }
  };
}
async function runPython(code, rule, suppliedInputs) {
  let inputs = suppliedInputs;
  if (!Array.isArray(inputs) && needsInput(code)) inputs = await requestInputs();
  if (inputs === null) return {ok:false,cancelled:true,out:"",err:"Run cancelled. Your code is unchanged."};
  ensureWorker();
  return new Promise((resolve) => {
    const id = ++pySeq;
    const timer = setTimeout(() => {
      // hung (infinite loop) - kill and respawn the worker
      delete pyPending[id];
      pyWorker?.terminate(); pyWorker = null; pyReady = false;
      hideRunControl();
      resolve({ ok: false, out: "", err: "Run stopped. It may be a loop or a slow Python download. Try again." });
    }, pyReady ? 9000 : 60000);
    pyPending[id] = { resolve, timer };
    pyWorker.postMessage({ id, code, rule, inputs:inputs || [] });
    showRunControl();
  });
}

function needsInput(code) {
  // Ignore ordinary quoted text and comments, so print("input()") stays a print.
  const plain = code.replace(/"""[\s\S]*?"""|'''[\s\S]*?'''|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|#[^\n]*/g, "");
  return /\binput\s*\(/.test(plain) || /\bf["'][^\n]*\binput\s*\(/i.test(code);
}

function requestInputs() {
  return new Promise(resolve=>{
    const dialog=document.createElement('dialog');dialog.className='input-dialog';
    dialog.innerHTML=`<form method="dialog"><div class="step-kicker">PYTHON INPUT</div><h2>Your answers</h2><p>Python will read these when input() runs, one line at a time.</p><label for="input-lines">One answer per line</label><textarea id="input-lines" rows="4" spellcheck="false" autocapitalize="off" placeholder="Ava&#10;12"></textarea><p class="input-note">A blank line is an empty answer. Practice values only: no passwords or private data. Answers are not saved.</p><div class="row"><button class="btn ghost" id="input-cancel" type="submit" value="cancel">Cancel</button><button class="btn" id="input-run" type="submit" value="run">Run code</button></div></form>`;
    dialog.addEventListener('close',()=>{const answers=dialog.returnValue==='run'?dialog.querySelector('textarea').value.replace(/\r\n/g,'\n').split('\n'):null;dialog.remove();resolve(answers)});
    document.body.appendChild(dialog);dialog.showModal();dialog.querySelector('textarea').focus();
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
  const re = /("[^"]*"|'[^']*'|\b(?:print|input|open|len|range|int|str|float)\b|\b(?:for|in|if|else|elif|while|def|return|and|or|not|with|as|try|except|finally|class)\b|\b\d+\b)/g;
  return esc(code).replace(re, (m) => {
    if (m[0] === '"' || m[0] === "'") return `<span class="tok-str">${m}</span>`;
    if (/^\d+$/.test(m)) return `<span class="tok-num">${m}</span>`;
    if (/^(print|input|open|len|range|int|str|float)$/.test(m)) return `<span class="tok-fn">${m}</span>`;
    return `<span class="tok-kw">${m}</span>`;
  });
}

function exampleCode(code) {
  return `<pre class="numbered-code">${code.split("\n").map((line,i)=>`<span class="code-line" data-line="${i+1}">${hi(line) || " "}</span>`).join("")}</pre><div class="code-note">Numbers are line guides, not code. Long lines may wrap under the same number.</div>`;
}

/* ---------- content ---------- */
const UNITS = [
  {
    id: "u1", title: "Unit 1: First Steps", sub: "11 tiny lessons. From hello to your own countdown.",
    lessons: [
      { id: "l1", title: "Say hello", icon: "👋" },
      ...EXTRA_LESSONS.map(({id,title,icon}) => ({id,title,icon})),
    ],
  },
];

UNITS.push({id:"u2",title:"Unit 2: Text & lists",sub:"10 lessons. From joining words to your own guest list.",lessons:UNIT2_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u3",title:"Unit 3: Choices & while",heading:"Keep going, with a plan",sub:"11 lessons. Better conditions and loops that know when to stop.",lessons:UNIT3_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u4",title:"Unit 4: Your functions",heading:"Build your own tools",sub:"8 lessons. Reuse instructions, pass values in and return results.",lessons:UNIT4_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u5",title:"Unit 5: Dictionaries",heading:"Give every value a label",sub:"8 lessons. Keys, values and your own profile card.",lessons:UNIT5_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u6",title:"Unit 6: Input & numbers",heading:"Let your program listen",sub:"9 lessons. Real answers, number conversions and a snack-bill project.",lessons:UNIT6_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u7",title:"Unit 7: Practice files",heading:"Write it, read it, build on it",sub:"7 lessons. Real text files in a fresh temporary workspace each Run.",lessons:UNIT7_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u8",title:"Unit 8: Handle errors",heading:"Give problems a useful reply",sub:"7 lessons. Targeted recovery, success-only work and cleanup.",lessons:UNIT8_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u9",title:"Unit 9: Your classes",heading:"Make objects with their own data",sub:"8 lessons. From a blueprint to two independent learning buddies.",lessons:UNIT9_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u10",title:"Unit 10: Record lists",heading:"A collection of useful facts",sub:"6 lessons. Book records, field lookups, filtering and page totals.",lessons:UNIT10_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u11",title:"Unit 11: Modules & imports",heading:"Use tools Python already has",sub:"6 lessons. math, import styles and a JSON round trip.",lessons:UNIT11_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
UNITS.push({id:"u12",title:"Unit 12: Reading tracker",heading:"Put your pieces together",sub:"5 stages. Build, validate, write, reload and report.",lessons:UNIT12_LESSONS.map(({id,title,icon})=>({id,title,icon}))});
const ALL_LESSONS = [FIRST_LESSON,...EXTRA_LESSONS,...UNIT2_LESSONS,...UNIT3_LESSONS,...UNIT4_LESSONS,...UNIT5_LESSONS,...UNIT6_LESSONS,...UNIT7_LESSONS,...UNIT8_LESSONS,...UNIT9_LESSONS,...UNIT10_LESSONS,...UNIT11_LESSONS,...UNIT12_LESSONS];
const TOTAL_LESSONS = ALL_LESSONS.length;
const LESSON_L1 = FIRST_LESSON;
/* Standard Python topic names; stable lesson IDs preserve progress and drafts. */
const TOPIC_TITLES=["print(): Text Output", "Strings and Quotation Marks", "Integers and Arithmetic", "Variables and Assignment", "print(): Strings and Numbers", "Booleans: True and False", "Conditional Statements: if", "Conditional Statements: else", "for Loops", "range()", "Project: for Loop Countdown", "String Concatenation", "String Length: len()", "String Indexing", "Lists", "List Indexing and Length", "List Item Assignment", "List append()", "for Loops over Lists", "Nested if Statements in Loops", "Project: Guest List", "Updating Variables", "Subtraction Operator", "Equality Operators: == and !=", "Comparison Operators: <, >, <=, >=", "Conditional Statements: elif", "Logical Operator: and", "Logical Operator: or", "Logical Operator: not", "while Loops", "break Statements", "Project: while Loop Countdown", "Function Definitions: def", "Function Calls and Reuse", "Function Parameters", "Multiple Function Parameters", "return Statements", "Local Variables and Scope", "Function Calls in for Loops", "Project: Functions", "Dictionaries", "Dictionary Key Lookup", "Dictionary Value Assignment", "Adding Dictionary Keys", "Dictionary Membership: in", "Dictionary get()", "Dictionary Key Iteration", "Project: Dictionaries", "input()", "input() Prompts", "Strings and Numeric Types", "Type Conversion: int()", "Floating-Point Numbers: float()", "Type Conversion: str()", "Multiplication Operator", "Division Operator", "Project: Input and Arithmetic", "File Writing: with and open()", "File Reading: read()", "Newline Escape: \\n", "File Append Mode", "File Line Iteration", "Counting File Lines", "Project: Text Files", "Exception Handling: try/except ValueError", "Control Flow after try/except", "Exception Handling: else", "Exception Handling: finally", "FileNotFoundError", "Multiple Exception Handlers", "Project: Exception Handling", "Classes and Instances", "Instance Attributes", "Instance Methods and self", "Object Initialization: __init__", "Method Parameters", "Method Return Values", "Independent Instance State", "Project: Classes and Objects", "Lists of Dictionaries", "Nested Indexing: Lists and Dictionaries", "Iterating over Lists of Dictionaries", "Adding and Updating Dictionary Records", "Filtering Lists of Dictionaries", "Project: Accumulating Record Totals", "Modules: import and math.sqrt()", "math.ceil()", "from Imports", "Import Aliases: as", "JSON Serialization: json.dumps()", "JSON Deserialization: json.loads()", "Project: Classes and List Attributes", "Project: Methods and Accumulation", "Project: Input Validation", "Project: JSON File Reading and Writing", "Final Project: Reading Tracker"];
ALL_LESSONS.forEach((lesson,i)=>lesson.title=TOPIC_TITLES[i]);
const UNIT_TOPICS=[["Python Basics", "print, strings, numbers, variables, booleans, if, else, for loops, range"], ["Strings and Lists", "string operations, concatenation, indexing, len, list methods, append, iteration"], ["Operators, Conditions and Loops", "arithmetic, comparison, boolean logic, and, or, not, elif, while, break"], ["Functions", "def, calls, parameters, return values, local variables, scope"], ["Dictionaries", "keys, values, dict, get, membership, iteration"], ["Input, Type Conversion and Arithmetic", "input, int, float, str, multiplication, division"], ["File Handling", "with, open, read, write, append, text files, newlines"], ["Exception Handling", "errors, try, except, else, finally, ValueError, FileNotFoundError, ZeroDivisionError"], ["Classes and Objects", "object oriented programming, OOP, instances, attributes, methods, self, __init__"], ["Lists of Dictionaries", "records, nested indexing, filtering, accumulation"], ["Modules, Imports and JSON", "import, from, as, math, sqrt, ceil, JSON, serialization, deserialization"], ["Final Project: Reading Tracker", "classes, methods, input validation, exception handling, JSON files"]];
UNITS.forEach((unit,i)=>{unit.title=`Unit ${i+1}: ${UNIT_TOPICS[i][0]}`;unit.heading=UNIT_TOPICS[i][0];unit.keywords=UNIT_TOPICS[i][1];unit.lessons.forEach(l=>l.title=ALL_LESSONS.find(a=>a.id===l.id).title)});
function topicSearchText(text){return text.toLowerCase().replace(/\bclasses\b/g,"class").replace(/\bdictionaries\b/g,"dictionary").replace(/\b(loops|files|lists|strings|functions|objects|modules|imports|errors|records|variables|operators|conditions|methods|attributes|parameters|exceptions)\b/g,w=>w.slice(0,-1)).trim()}


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
    <button class="navbtn ${active === "play" ? "active" : ""}" data-nav="play">${ICONS.code}Practice</button>
    <button class="navbtn ${active === "me" ? "active" : ""}" data-nav="me">${ICONS.user}Profile</button>
  </div>`;
}
function bindNav() {
  $$(".navbtn").forEach((b) => (b.onclick = () => {
    const v = b.dataset.nav;
    if (Object.keys(pyPending).length) stopPython();
    if (v === "home") renderHome();
    if (v === "play") renderPractice();
    if (v === "me") renderProfile();
  }));
}

/* ---------- home ---------- */
function renderHome() {
  document.querySelectorAll(".confetti-layer").forEach(e => e.remove());
  navView = "home";
  const pathLessons = UNITS.flatMap(u=>u.lessons);
  let pathIndex=0;
  const nextLesson = ALL_LESSONS.find(l=>!state.done.includes(l.id));
  const activeUnit = UNITS.find(u=>u.lessons.some(l=>l.id===nextLesson?.id)) || UNITS.at(-1);
  const sections=UNITS.map(u=>{
  const nodes = u.lessons.map((l, i) => {
    const done = state.done.includes(l.id);
    const absolute=pathIndex++;
    const unlocked = true;
    const recommended = nextLesson?.id === l.id;
    const cls = done ? "done" : recommended ? "current" : "available";
    const icon = done ? "⭐" : unlocked ? l.icon : "🔒";
    const bubble = !done && recommended ? '<div class="start-bubble">START</div>' : "";
    return `<div class="node-wrap ${cls}">
      ${bubble}
      <button aria-label="${esc(l.title)}${done ? ", completed" : unlocked ? ", ready" : ", locked"}" class="node ${cls}" data-lesson="${l.id}" data-unlocked="true" data-done="${done}">${icon}</button>
      <div class="node-label">${esc(l.title)}</div>
    </div>`;
  }).join("");

  const completed=u.lessons.filter(l=>state.done.includes(l.id)).length;
  return `<details class="unit-section unit-compact" id="${u.id}" ${u.id===activeUnit.id?'open':''}><summary><span class="unit-summary-copy"><span class="unit-kicker">${u.title.split(":")[0]}</span><strong>${u.heading || (u.id==='u1'?'Python from zero':'A place for everything')}</strong><span class="unit-summary-meta">${completed} of ${u.lessons.length} complete</span></span><span class="unit-chevron" aria-hidden="true">⌄</span></summary><div class="unit-description">${u.sub}<div><button class="btn small ghost start-unit" data-start-unit="${u.id}">Start unit</button></div></div><div class="path">${nodes}</div></details>`;
  }).join('');
  app.innerHTML = `<div class="view">${topbarHTML()}<div class="home-scroll"><div class="buddy-welcome">${brickBuddy("ready")}<div><strong>One little block at a time.</strong><p>${state.done.length} / ${TOTAL_LESSONS} lessons · ${VERSION}</p></div></div><div class="continue-card"><div class="step-kicker">${nextLesson?'YOUR NEXT STEP':'BEGINNER PATH COMPLETE'}</div><h2>${nextLesson?esc(nextLesson.title):'96 little steps. Yours.'}</h2><p>${nextLesson?'Pick up where you left off. Every lesson is open. Follow this order or choose any topic.':'Replay a lesson or use practice to keep building.'}</p><div class="course-meter" aria-label="${state.done.length} of ${TOTAL_LESSONS} lessons complete"><i style="transform:scaleX(${state.done.length/TOTAL_LESSONS})"></i></div><button class="btn" id="continue-course">${nextLesson?'Continue learning':'Open practice'}</button></div><div class="map-label">YOUR COURSE <span>${state.done.length} / ${TOTAL_LESSONS}</span></div><label class="step-kicker" for="course-search">FIND A PYTHON TOPIC</label><input id="course-search" class="skill-search" type="search" placeholder="Search units and lessons: loops, classes..." autocomplete="off"><p id="course-search-status" class="course-search-status" role="status">All 12 units are open. Start wherever you want.</p><div class="unit-jumps">${UNITS.map(u=>`<button class="btn ghost small" data-unit="${u.id}">${u.title.split(":")[0]}</button>`).join("")}</div>${sections}</div>${navHTML("home")}</div>`;

  $("#continue-course").onclick=()=>nextLesson?startLesson(nextLesson.id):renderPractice();
  $("#course-search").oninput=e=>{
    const query=topicSearchText(e.target.value);let units=0,lessons=0;
    UNITS.forEach(u=>{const section=document.getElementById(u.id);const unitMatch=query && topicSearchText(u.title+' '+u.keywords).includes(query);let count=0;
      u.lessons.forEach(l=>{const node=section.querySelector(`[data-lesson="${l.id}"]`).closest('.node-wrap');const match=!query||unitMatch||topicSearchText(l.title).includes(query);node.hidden=!match;if(match)count++});
      section.hidden=count===0;if(count){units++;lessons+=count}section.open=query?count>0:u.id===activeUnit.id;
    });
    $("#course-search-status").textContent=query?units?`${units} matching units, ${lessons} lessons. Every lesson is open.`:'No matching topics. Try a Python term such as loops, classes or files.':'All 12 units are open. Start wherever you want.';
  };
  $$("[data-start-unit]").forEach(b=>b.onclick=()=>{const unit=UNITS.find(u=>u.id===b.dataset.startUnit);const lesson=unit.lessons.find(l=>!state.done.includes(l.id))||unit.lessons[0];startLesson(lesson.id)});
  $$("[data-unit]").forEach(b=>b.onclick=()=>{const unit=document.getElementById(b.dataset.unit);unit.open=true;unit.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'})});
  $$(".node").forEach((n) => (n.onclick = () => {
    startLesson(n.dataset.lesson);
  }));
  bindNav();
}

/* ---------- lesson player ---------- */
let L = null; // active lesson session

function startLesson(id = "l1") {
  const lesson = ALL_LESSONS.find(l => l.id === id);
  if (!lesson) return;
  L = { id, title: lesson.title, steps: lesson.steps, i: 0, earned: 0, mistakes: 0, stepMistakes: 0, awarded: new Set() };
  renderLessonShell();
  renderStep();
}

function renderLessonShell() {
  navView = "lesson";
  app.innerHTML = `<div class="view">
    <div class="lesson-head">
      <button class="quit-btn" id="quit" aria-label="Leave lesson">✕</button>
      <div class="progress-track"><div class="progress-fill" id="pfill"></div></div>
    </div>
    ${ALL_LESSONS.slice(0,ALL_LESSONS.findIndex(l=>l.id===L.id)).some(l=>!state.done.includes(l.id))?`<aside class="prereq-note"><strong>Starting ahead? That is fine.</strong><span>I suggest completing previous lessons first if this topic feels unfamiliar. You can continue here now.</span></aside>`:""}
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
    <p>Completed lessons stay saved. Typed code is kept as a local draft; this lesson restarts at its first step.</p>
    <div class="row">
      <button class="btn ghost" id="stay">Stay</button>
      <button class="btn" id="leave" style="background:var(--red);box-shadow:0 5px 0 var(--red-deep)">Quit</button>
    </div>
  </div>`;
  document.body.appendChild(bg);
  $("#stay", bg).onclick = () => bg.remove();
  $("#leave", bg).onclick = () => { stopPython(); bg.remove(); renderHome(); };
}

function setProgress() {
  const pct = Math.round((L.i / L.steps.length) * 100);
  $("#pfill").style.transform = `scaleX(${pct / 100})`;
  $("#pfill").parentElement.setAttribute("aria-label", `Step ${L.i+1} of ${L.steps.length}`);
}

function stepHead(s) {
  return `<div class="step-kicker">${s.kicker}</div>
    <div class="step-title">${s.title}</div>`;
}
function consoleHTML(out, err) {
  return `<div class="console"><div class="console-label">OUTPUT</div>
    <div class="console-body" role="status">${err ? `<span class="err">${esc(err)}</span>` : esc(out) || '<span class="dim">(nothing printed)</span>'}</div>
  </div>`;
}

function showSheet(good, why, onContinue) {
  if (!good) { L.stepMistakes++; if (L.stepMistakes >= 2) why = "Let's slow down. Use this hint, then try the same step again.\n" + why; }
  playSound(good ? "correct" : "retry");
  const sheet = $("#sheet");
  sheet.className = "sheet " + (good ? "good" : "bad");
  sheet.innerHTML = `<div class="buddy-feedback">${brickBuddy(good ? (correctCombo >= 3 ? "combo" : "happy") : "oops")}<div class="buddy-feedback-copy"><div class="sheet-title">${good ? (correctCombo >= 3 ? correctCombo + " in a row!" : "Nice!") : "Let's try again"}</div>
    <div class="sheet-why">${esc(why || "+10 XP")}</div>
    </div></div><button class="btn ${good ? "green" : ""}" id="sheetBtn">${good ? "Continue" : "Got it"}</button>`;
  requestAnimationFrame(() => sheet.classList.add("show"));
  $("#sheetBtn").onclick = () => {
    sheet.classList.remove("show");
    $("#sheetBtn").disabled = true;
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
      <div class="code-card"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="fname">main.py</span></div>${exampleCode(s.code)}</div>
      ${s.inputs ? `<div class="sample-answers">Sample answers, in order: ${s.inputs.map(a=>esc(a)).join(", ")}</div>` : ""}
      ${consoleHTML(s.out)}
    </div>`;
    foot.innerHTML = `<button class="btn" id="next">Continue</button>`;
    $("#next").onclick = nextStep;
  }

  if (s.t === "run") {
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.prompt)}</div>
      <div class="code-card"><div class="code-head"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><span class="fname">main.py</span></div>${exampleCode(s.code)}</div>
      <div id="pymsg"></div>
      <div id="cout"></div>
    </div>`;
    foot.innerHTML = `<button class="btn run-btn" id="run">▶ Run</button>`;
    $("#run").onclick = async () => {
      const btn = $("#run");
      btn.disabled = true;
      if (!pyReady) $("#pymsg").innerHTML = `<div class="py-loading">${brickBuddy("thinking")}Waking up Python…<div class="py-bar"><i></i></div></div>`;
      const r = await runPython(s.code, undefined, s.inputs);
      if (!btn.isConnected) return;
      if(r.cancelled){btn.disabled=false;$("#pymsg").innerHTML="";return;}
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
      <div class="chips">${s.options.map((o) => `<button class="chip" data-v="${esc(o).replace(/"/g, "&quot;")}">${esc(o)}</button>`).join("")}</div>
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

  if (s.t === "order") {
    let picked = [];
    body.innerHTML = `<div class="step-anim">${stepHead(s)}
      <div class="step-prompt">${esc(s.prompt)}</div>
      <div class="code-card"><pre id="assembled">Tap a line below to add it.</pre></div>
      <div class="choices">${s.lines.map((line, i) => `<button class="choice mono" style="white-space:pre-wrap" data-line="${i}">${esc(line)}</button>`).join("")}</div>
      <button class="btn ghost small" id="undo">Undo last line</button></div>`;
    foot.innerHTML = `<button class="btn" id="check" disabled>Check order</button>`;
    const update = () => {
      $("#assembled").textContent = picked.length ? picked.map(i => s.lines[i]).join("\n") : "Tap a line below to add it.";
      $$("[data-line]").forEach(b => { b.disabled = picked.includes(+b.dataset.line); b.style.opacity = b.disabled ? ".3" : "1"; });
      $("#check").disabled = picked.length !== s.lines.length;
    };
    $$("[data-line]").forEach(b => b.onclick = () => { picked.push(+b.dataset.line); update(); });
    $("#undo").onclick = () => { picked.pop(); update(); };
    $("#check").onclick = () => {
      if (picked.join(",") === s.answer.join(",")) { award(10); foot.innerHTML = ""; showSheet(true, "+10 XP. The loop line comes first. Its indented print runs on every turn.", nextStep); }
      else { showSheet(false, "Loop line first, indented print next. The final message has no indent, so it runs once after the loop."); }
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
      if (!pyReady) $("#pymsg").innerHTML = `<div class="py-loading">${brickBuddy("thinking")}Waking up Python…<div class="py-bar"><i></i></div></div>`;
      const r = await runPython(code, s.rule);
      if (!btn.isConnected) return;
      if(r.cancelled){btn.disabled=false;$("#pymsg").innerHTML="";return;}
      pyReady = !!pyWorker;
      $("#pymsg").innerHTML = "";
      $("#cout").innerHTML = consoleHTML(r.out, r.ok ? null : friendlyErr(r.err));
      if (r.ok && r.concept && r.concept.ok) {
        award(10);
        foot.innerHTML = "";
        showSheet(true, "+10 XP - you wrote that yourself!", nextStep);
      } else {
        btn.disabled = false;
        showSheet(false, r.ok ? r.concept?.feedback || s.hint : friendlyErr(r.err) + "\nTry this pattern: " + s.hint);
      }
    };
  }
}

function friendlyErr(err) {
  if (!err) return "Something went wrong";
  const raw = err.replace(/^PythonError:\s*/i, "").split("\n").pop();
  if (/TypeError/.test(raw) && /argument/.test(raw)) return "The function call needs the right number of values. Match the arguments in the call to the parameters in its definition. " + raw;
  if (/FileNotFoundError/.test(raw)) return "That file is missing. Check the filename and create it before reading. Practice files reset each Run; write and read in the same program, or handle FileNotFoundError.";
  if (/AttributeError/.test(raw)) return "That object does not have the requested attribute or method. Check its spelling and case, and whether __init__ stored it with self. " + raw;
  if (/EOFError/.test(raw)) return "The input answers ran out. Run again and provide one line for each input() call, including repeated calls in a loop.";
  if (/ValueError/.test(raw)) return "That text cannot be converted to the requested number. Use whole-number text such as 12 for int, or decimal text such as 2.5 for float.";
  if (/KeyError/.test(raw)) return "That dictionary key is missing. Match its spelling and case, check with in, or use .get with a fallback.";
  if (/IndexError/.test(raw)) return "That position does not exist. Indices start at 0; the last valid index is one less than the length.";
  if (/ZeroDivisionError/.test(raw)) return "Python cannot divide by zero. Choose a nonzero divisor.";
  if (/IndentationError/.test(raw)) return "The spaces need a fix. Start the line inside a block such as if, for, while, def, with, try or class with four more spaces.";
  if (/SyntaxError/.test(raw)) return "Python cannot read that line yet. Check matching straight quotes, closing parentheses, and the colon after a block header such as if, for, while, def, with, try or class.";
  if (/NameError/.test(raw)) return "Python does not know that name. Text needs quotes. Variable and function names must match exactly. Use lowercase print.";
  if (/TypeError/.test(raw)) return "Those value types do not fit together. Try a comma in print to combine text and a number.";
  return raw;
}

function award(n) { if (!L.awarded.has(L.i)) { L.earned += n; L.awarded.add(L.i); } }

function nextStep() {
  L.i++;
  L.stepMistakes = 0;
  if (L.i >= L.steps.length) finishLesson();
  else renderStep();
}

function finishLesson() {
  const firstTime = !state.done.includes(L.id);
  if (firstTime) state.done.push(L.id);
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
  playSound("finish");
  confetti();
  app.innerHTML = `<div class="view">
    <div class="celebrate step-anim">
      <div class="buddy-finish">${brickBuddy("celebrate")}</div>
      <h1>${firstTime && state.done.length === TOTAL_LESSONS ? "All lessons complete!" : "Lesson complete!"}</h1>
      <p>You wrote real Python. That is the whole secret - tiny steps, done daily.</p>
      <div class="xp-pill">⚡ +${L.earned} XP</div>
      <button class="btn" id="done">Back to path</button>
    </div>
  </div>`;
  $("#pfill") && ($("#pfill").style.transform = "scaleX(1)");
  $("#done").onclick = renderHome;
}

function confetti() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "confetti-layer";
  const colors = ["#6e7bff", "#ffd43b", "#3ecf8e", "#ff6b6b", "#9d6bff", "#7be3b5"];
  for (let i = 0; i < 36; i++) {
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
      <div class="pg-title">Playground 🛝</div><p class="pg-file-note">Practice files are temporary: every Run starts fresh. Write and read within the same program. No phone files are accessed or saved.</p>
      <button class="btn ghost small" onclick="renderPractice()" style="margin:12px 0">Guided practice</button>
      <div class="pg-sub">Real Python with text output. input() uses an answer sheet before Run; graphics and package installation are not supported.</div>
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
    if (!pyReady) $("#pymsg").innerHTML = `<div class="py-loading">${brickBuddy("thinking")}Waking up Python… (first run takes a few seconds)<div class="py-bar"><i></i></div></div>`;
    const r = await runPython(ed.value);
    if (!btn.isConnected) return;
    if(r.cancelled){btn.disabled=false;$("#pymsg").innerHTML="";return;}
    pyReady = !!pyWorker;
    $("#pymsg").innerHTML = "";
    $("#pgout").innerHTML = consoleHTML(r.out, r.ok ? null : friendlyErr(r.err));
    btn.disabled = false;
  };
  $("#pgclear").onclick = () => { $("#pgout").innerHTML = ""; ed.value = ""; ed.dispatchEvent(new Event("input",{bubbles:true})); ed.focus(); };
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
        <div class="stat-box"><div class="num" style="color:var(--primary)">🎯 ${UNITS.length}</div><div class="lbl">Units</div></div>
      </div>
      <div class="about-box">
        pylearn ${VERSION}<br>
        Learn Python in tiny steps. Real Python runs in your browser -<br>
        Progress is saved on this device. Python loads from a CDN.
      </div>
      <div style="text-align:center;margin-top:14px"><button class="btn small ghost" onclick="toggleSound()">Sound ${soundOn ? "on" : "off"}</button><p style="font-size:12px;color:var(--muted);margin-top:12px">Sound effects: Kenney, Interface Sounds (CC0).<br>Free for personal and commercial use.</p><button class="danger-link" id="reset">Reset all progress</button></div>
    </div>
    ${navHTML("me")}
  </div>`;
  bindNav();
  $("#reset").onclick = () => {
    const bg = document.createElement("div");
    bg.className = "modal-bg";
    bg.innerHTML = `<div class="modal">
      <h3>Reset learning progress?</h3>
      <p>XP, streak and lesson progress will be wiped from this device. Your code drafts and sound setting will stay.</p>
      <div class="row">
        <button class="btn ghost" id="keep">Keep</button>
        <button class="btn" id="wipe" style="background:var(--red);box-shadow:0 5px 0 var(--red-deep)">Reset</button>
      </div>
    </div>`;
    document.body.appendChild(bg);
    $("#keep", bg).onclick = () => bg.remove();
    $("#wipe", bg).onclick = () => {
      try{localStorage.removeItem("pylearn-v1")}catch(e){}
      state = { ...DEFAULT_STATE, done: [] };
      bg.remove();
      toast("Progress reset");
      renderHome();
    };
  };
}

/* ---------- boot ---------- */
renderHome();
installPolish();
console.log("pylearn " + VERSION);
