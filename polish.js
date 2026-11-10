/* Local-only editor comfort. No code or progress is sent anywhere. */
function installPolish(){
  const getKey=ed=>ed.id==='ed'?`lesson-${L.id}-${L.i}`:ed.id==='practice-editor'?`practice-${practiceIndex}`:'playground';
  function setup(ed){
    if(ed.dataset.enhanced)return;ed.dataset.enhanced='true';
    const key='pylearn-draft-'+getKey(ed);
    try{const draft=localStorage.getItem(key);if(draft!==null)ed.value=draft}catch(e){}
    ed.setAttribute('aria-label','Python code editor');ed.setAttribute('autocorrect','off');ed.setAttribute('enterkeyhint','enter');ed.wrap='off';
    const tools=document.createElement('div');tools.className='editor-tools';
    tools.innerHTML='<button type="button" data-insert="    " aria-label="Insert four spaces">Indent</button><button type="button" data-newline>New line</button><button type="button" data-insert="()" data-back="1" aria-label="Insert parentheses">( )</button><button type="button" data-insert=\'""\' data-back="1" aria-label="Insert quotes">" "</button><button type="button" data-insert=":" aria-label="Insert colon">:</button><button type="button" data-copy>Copy</button>';
    ed.parentElement.appendChild(tools);
    const note=document.createElement('div');note.className='draft-note';note.textContent='Draft stays on this device. No input answers saved.';ed.parentElement.appendChild(note);
    const save=()=>{try{localStorage.setItem(key,ed.value);note.textContent='Draft saved on this device. No input answers saved.'}catch(e){note.textContent='Draft cannot be saved in this browser.'}};
    ed.addEventListener('input',save);
    function insert(value,back=0){const start=ed.selectionStart;ed.setRangeText(value,start,ed.selectionEnd,'end');ed.selectionStart=ed.selectionEnd=start+value.length-back;ed.focus();save()}
    tools.querySelectorAll('[data-insert]').forEach(btn=>btn.onclick=()=>insert(btn.dataset.insert,Number(btn.dataset.back||0)));
    tools.querySelector('[data-newline]').onclick=()=>{const line=ed.value.slice(0,ed.selectionStart).split('\n').at(-1);const spaces=line.match(/^ */)[0];insert('\n'+spaces+(/:\s*$/.test(line)?'    ':''))};
    tools.querySelector('[data-copy]').onclick=async()=>{try{await navigator.clipboard.writeText(ed.value);toast('Code copied')}catch(e){ed.focus();ed.select();toast('Code selected. Use your device copy action.')}};
    ed.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.ctrlKey&&!e.metaKey){e.preventDefault();tools.querySelector('[data-newline]').click()}if((e.ctrlKey||e.metaKey)&&e.key==='Enter'){e.preventDefault();const run=document.querySelector('#run,#practice-run,#pgrun');if(run&&!run.disabled)run.click()}if(e.key==='Tab')queueMicrotask(save)});
  }
  const refresh=()=>document.querySelectorAll('textarea.editor').forEach(setup);
  new MutationObserver(refresh).observe(document.getElementById('app'),{childList:true,subtree:true});refresh();
  // Save before leaving as well, including programmatically updated editor content.
  document.addEventListener('click',()=>document.querySelectorAll('textarea.editor[data-enhanced]').forEach(ed=>{try{localStorage.setItem('pylearn-draft-'+getKey(ed),ed.value)}catch(e){}}),true);
}

/* One viewport resize handler, no animation loop or layout polling. */
function installViewportFit(){
  let queued=false;
  const fit=()=>{queued=false;const v=window.visualViewport;
    document.documentElement.style.setProperty('--app-height',(v?v.height:innerHeight)+'px');
  };
  const schedule=()=>{if(!queued){queued=true;requestAnimationFrame(fit)}};
  window.visualViewport?.addEventListener('resize',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});fit();
}
installViewportFit();
