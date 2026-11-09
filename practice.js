/* pylearn v0.3: rising correct-answer sounds, with a quiet pitch ceiling. */
let soundOn = true;
try { soundOn = localStorage.getItem('pylearn-sound') !== 'off'; } catch(e) {}
let correctCombo = 0;
let audioContext;
const sounds = {};
const activeSounds = new Set();
const soundFiles = {};
const CORRECT_STEPS = [0, 2, 4, 5, 7, 9, 11, 12];
// Fetch early; decoding and playback use the audio context unlocked by a tap.
for (const name of ['tap', 'correct', 'retry', 'finish']) {
  soundFiles[name] = fetch('audio/' + name + '.ogg').then(r => {
    if (!r.ok) throw new Error('Sound unavailable');
    return r.arrayBuffer();
  }).catch(() => null);
}
function unlockAudio() {
  if (!soundOn) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
  } catch(e) {}
}
async function playSound(name, preview = false) {
  if (name === 'retry') correctCombo = 0;
  let semitones = 0;
  if (name === 'correct' && !preview) {
    semitones = CORRECT_STEPS[Math.min(correctCombo, CORRECT_STEPS.length - 1)];
    correctCombo++;
  }
  if (!soundOn) return;
  unlockAudio();
  if (!audioContext) return;
  try {
    if (!sounds[name]) sounds[name] = soundFiles[name].then(bytes => bytes ? audioContext.decodeAudioData(bytes.slice(0)) : null);
    const buffer = await sounds[name];
    if (!buffer || !soundOn) return;
    // Feedback replaces a tap or older feedback, rather than piling up sounds.
    for (const playing of activeSounds) {
      if (name !== 'tap' || playing.soundName === 'tap') {
        try { playing.stop(); } catch(e) {}
      }
    }
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    source.buffer = buffer;
    source.playbackRate.value = Math.pow(2, semitones / 12);
    gain.gain.value = name === 'tap' ? .12 : name === 'retry' ? .22 : .3;
    source.connect(gain); gain.connect(audioContext.destination);
    source.soundName = name;
    activeSounds.add(source);
    source.onended = () => { activeSounds.delete(source); source.disconnect(); gain.disconnect(); };
    source.start();
  } catch(e) { /* Audio is optional; learning must work even if it is blocked. */ }
}
document.addEventListener('pointerdown', unlockAudio, {passive:true});
document.addEventListener('click', e => { if (e.target.closest('button') && !e.target.closest('#sheetBtn')) playSound('tap'); });
function toggleSound() {
  soundOn = !soundOn;
  try { localStorage.setItem('pylearn-sound', soundOn ? 'on' : 'off'); } catch(e) {}
  if (soundOn) playSound('correct', true);
  else for (const source of activeSounds) { try { source.stop(); } catch(e) {} }
  renderProfile();
}
const PRACTICE = [
  {name:'Your first message',rule:'text',intro:'print shows a message on screen. Put your words in matching quotes inside parentheses.',prompt:'Print any message. Make up your own words.',starter:'print("")',hint:'print("hello friend")',why:'You used print with a quoted message. Its words and capital letters are your choice.'},
  {name:'A named box',rule:'variable',intro:'A variable is a name for a stored value. Like a labelled box: store something, then read the label.',prompt:'Store a value in a variable. Print that variable without quotes.',starter:'',hint:'pet = "cat"\nprint(pet)',why:'You stored a value and printed it by name.'},
  {name:'Tiny calculator',rule:'add',intro:'An addition combines amounts. Use + with numbers, without quotes.',prompt:'Print the result of adding any two numbers.',starter:'print()',hint:'print(4 + 6)',why:'You printed a calculation, rather than a text copy of the calculation.'},
  {name:'Make a choice',rule:'if',intro:'if is a gate: its indented line runs only if the condition is True.',prompt:'Write an if with a colon, then an indented print. Any message is fine.',starter:'',hint:'if 8 > 2:\n    print("Go")',why:'You used an if block with an indented print.'},
  {name:'Repeat a message',rule:'loop',intro:'A loop repeats instructions. range(3) gives three turns. Indent the line you want to repeat.',prompt:'Use for and range to repeat a message more than once.',starter:'',hint:'for turn in range(3):\n    print("Hi")',why:'You placed a print inside a for loop.'},
  {name:'Your countdown',rule:'countdown',intro:'range(3, 0, -1) counts down from 3 and stops before 0. A line outside the loop runs after it.',prompt:'Print the countdown 3, 2, 1, then any final message outside the loop.',starter:'',hint:'for n in range(3, 0, -1):\n    print(n)\nprint("Go!")',why:'You built a descending range and a final message.'}
];
let practiceIndex = 0;
function renderPractice(index = practiceIndex) {
  practiceIndex = index;
  navView = 'play';
  const card = PRACTICE[index];
  app.innerHTML = `<div class="view">${topbarHTML()}<div class="pad">
    <div class="pg-title">Practice, your way</div><div class="pg-sub">Practice the idea, not the spelling of a sample message.</div>
    <div class="practice-tabs"><button class="btn small" id="guided">Guided</button><button class="btn small ghost" id="free">Free code</button></div>
    <label class="step-kicker" for="skill">CHOOSE A SKILL</label>
    <select id="skill" class="skill-select">${PRACTICE.map((c,i)=>`<option value="${i}" ${i===index?'selected':''}>${i+1}. ${c.name}</option>`).join('')}</select>
    <div class="practice-intro"><strong>${card.name}</strong><p>${card.intro}</p></div>
    <div class="step-prompt">${card.prompt}</div>
    <div class="editor-wrap"><div class="code-head"><span class="fname">practice.py</span></div><textarea id="practice-editor" class="editor" spellcheck="false" autocapitalize="off" autocomplete="off">${esc(card.starter)}</textarea></div>
    <div class="pg-actions"><button class="btn run-btn" id="practice-run">Run & check</button><button class="btn ghost" id="practice-hint">Hint</button></div>
    <div id="practice-buddy"></div><div id="practice-help" class="practice-feedback" hidden></div><div id="practice-output"></div>
  </div>${navHTML('play')}</div>`;
  bindNav();
  $('#skill').onchange = e => renderPractice(+e.target.value);
  $('#free').onclick = renderPlayground;
  $('#guided').onclick = () => $('#practice-editor').focus();
  $('#practice-hint').onclick = () => { const e=$('#practice-help');e.hidden=false;e.className='practice-feedback';e.textContent='One example. You can choose your own message:\n'+card.hint; };
  $('#practice-run').onclick = async () => {
    const btn=$('#practice-run'), ed=$('#practice-editor'), help=$('#practice-help');
    if (!ed.value.trim()) { help.hidden=false;help.textContent='Write a little code first, or tap Hint for an example.';return; }
    btn.disabled=true;btn.textContent='Running...';$('#practice-buddy').innerHTML=brickBuddy('thinking');
    const result=await runPython(ed.value,card.rule);
    if (!btn.isConnected) return;
    pyReady=!!pyWorker;
    $('#practice-output').innerHTML=consoleHTML(result.out,result.ok?null:friendlyErr(result.err));
    const ok=result.ok && result.concept?.ok;
    help.hidden=false;help.className='practice-feedback '+(ok?'pass':'retry');
    help.textContent=ok?'You got the idea! '+card.why:result.ok?result.concept?.feedback||'Try the hint.':friendlyErr(result.err);
    ed.blur();help.scrollIntoView({behavior:'smooth',block:'center'});
    playSound(ok?'correct':'retry');$('#practice-buddy').innerHTML=brickBuddy(ok?(correctCombo>=3?'combo':'happy'):'oops');btn.disabled=false;btn.textContent='Run & check';
  };
}
