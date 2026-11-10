/* First-run welcome, local buddy preferences, and optional question review. */
function reviewItems(){
 try {
  const items=JSON.parse(deviceStore.getItem('pylearn-review-v1'));
  if(!Array.isArray(items))return [];
  const seen=new Set();return items.filter(r=>{
   if(!r||typeof r.id!=='string'||!Number.isInteger(r.step))return false;
   const lesson=ALL_LESSONS.find(l=>l.id===r.id),key=r.id+':'+r.step;
   if(!lesson?.steps[r.step]||lesson.steps[r.step].t==='info'||seen.has(key))return false;
   seen.add(key);return true;
  }).map(r=>({id:r.id,step:r.step}));
 }catch(e){return []}
}
function storeReview(items){try{deviceStore.setItem('pylearn-review-v1',JSON.stringify(items))}catch(e){toast('Review could not be saved on this device.')}}
function removeReview(id,step){const old=reviewItems(),items=old.filter(r=>r.id!==id||r.step!==step);if(items.length!==old.length)storeReview(items)}
function skipStep(){
 if(!L||!L.stepMistakes)return;
 const items=reviewItems();if(!items.some(r=>r.id===L.id&&r.step===L.i))items.push({id:L.id,step:L.i});storeReview(items);
 stopPython();nextStep();
}
function enableSkip(){
 const foot=$('#lfoot');if(!foot||$('#skip-step'))return;
 const button=document.createElement('button');button.id='skip-step';button.className='skip-link';button.textContent='Skip this step →';button.onclick=skipStep;foot.appendChild(button);
}
function renderReview(){
 navView='home';const items=reviewItems();
 app.innerHTML=`<div class="view">${topbarHTML()}<div class="pad review-page"><div class="step-kicker">YOUR OWN PACE</div><h1>Room to try again.</h1><p class="review-intro">${items.length?'These are the steps you skipped. Take one now, or leave them for another day.':'No skipped steps right now. You can always skip a tricky question and come back here.'}</p>${!items.length?`<div class="review-empty">${brickBuddy('happy')}<strong>All clear for now.</strong></div>`:`<div class="review-list">${items.map((r,i)=>{const lesson=ALL_LESSONS.find(l=>l.id===r.id),step=lesson.steps[r.step];return `<button class="review-item" data-review="${i}"><span class="review-number">${i+1}</span><span><small>${esc(lesson.title)} · Step ${r.step+1}</small><strong>${esc(step.title)}</strong></span><b aria-hidden="true">→</b></button>`}).join('')}</div>`}<button class="btn ghost" id="review-back">Back to path</button><p class="local-note">Review stays on this device. Skipping never counts as a correct answer.</p></div>${navHTML('home')}</div>`;
 bindNav();$('#review-back').onclick=renderHome;$$('[data-review]').forEach(b=>b.onclick=()=>{const r=items[+b.dataset.review];startLesson(r.id,r.step)});
}
function buddyChoices(){return `<div class="buddy-grid">${BUDDIES.map(b=>`<button class="buddy-choice ${selectedBuddy().id===b.id?'chosen':''}" data-buddy="${b.id}" aria-pressed="${selectedBuddy().id===b.id}">${brickBuddy('ready','',b.id)}<strong>${b.name}</strong><small>${b.note}</small><span class="buddy-check" aria-hidden="true">${selectedBuddy().id===b.id?'✓':'+'}</span></button>`).join('')}</div>`}
function bindBuddyChoices(after){$$('[data-buddy]').forEach(b=>b.onclick=()=>{try{deviceStore.setItem('pylearn-buddy',b.dataset.buddy)}catch(e){toast('Buddy could not be saved in this browser.')}after()})}
function renderBuddies(){
 navView='me';app.innerHTML=`<div class="view">${topbarHTML()}<div class="pad buddy-page"><div class="step-kicker">MEET YOUR LITTLE CREW</div><h1>A buddy for every day.</h1><p>Same tiny steps. A little more you.</p>${buddyChoices()}<p class="local-note">Your choice stays on this device. All buddies are free.</p><button class="btn" id="buddy-done">Keep learning</button></div>${navHTML('me')}</div>`;bindNav();bindBuddyChoices(renderBuddies);$('#buddy-done').onclick=renderProfile;
}
function completeWelcome(start=false){try{deviceStore.setItem('pylearn-welcome-v1','done')}catch(e){}if(start)startLesson('l1');else renderHome()}
function renderWelcome(page=0,replay=false){
 navView='welcome';
 const pages=[{eyebrow:'HELLO, CURIOUS HUMAN',title:'Big ideas.<br>Little Python steps.',text:'Start from zero. Learn one idea, try it, and watch real Python run.',art:`<div class="welcome-hero">${brickBuddy('happy')}<span class="orbit-code">print("Hi!")</span><span class="orbit-spark">✦</span></div>`,button:'Meet your buddy'},
 {eyebrow:'YOU HAVE GOOD COMPANY',title:'Pick your coding buddy.',text:'A little character to cheer you on. Change your pick anytime in Profile.',art:buddyChoices(),button:'How it works'},
 {eyebrow:'NO PERFECT ANSWERS NEEDED',title:'Learn. Try. Keep going.',text:'Wrong answer? Try again or skip. Skipped steps wait in Review, without XP or a forced rewrite.',art:`<div class="welcome-points"><div><span>01</span><p><strong>Make something real</strong>96 lessons and 91 practice cards. Every lesson is open.</p></div><div><span>02</span><p><strong>Make it yours</strong>Code can use your own names and messages. Learn the idea, not a memorized answer.</p></div><div><span>03</span><p><strong>Stay in control</strong>No account, ads or subscription. Progress and drafts stay on this device. Python needs internet to load.</p></div></div>`,button:replay?'Back to learning':'Start my first lesson'}];
 const p=pages[page];app.innerHTML=`<main class="welcome-view"><header class="welcome-header"><div class="logo"><img src="icon.svg" alt="">PyPerky</div><button class="tour-skip" id="tour-skip">${replay?'Close tour':'Skip tour'}</button></header><section class="welcome-content step-anim"><div class="welcome-copy"><div class="step-kicker">${p.eyebrow}</div><h1>${p.title}</h1><p>${p.text}</p></div><div class="welcome-art">${p.art}</div></section><footer class="welcome-footer"><div class="tour-dots" aria-label="Welcome step ${page+1} of 3">${pages.map((_,i)=>`<span class="${i===page?'current':''}"></span>`).join('')}</div><div class="tour-actions">${page?'<button class="btn ghost" id="tour-back">Back</button>':''}<button class="btn" id="tour-next">${p.button} →</button></div><small>Free, from the first line to the last.</small></footer></main>`;
 $('#tour-skip').onclick=()=>completeWelcome();if(page)$('#tour-back').onclick=()=>renderWelcome(page-1,replay);
 $('#tour-next').onclick=()=>page<2?renderWelcome(page+1,replay):completeWelcome(!replay);
 if(page===1)bindBuddyChoices(()=>renderWelcome(1,replay));
}
function bootLearning(){
 let seen=false;try{seen=deviceStore.getItem('pylearn-welcome-v1')==='done'}catch(e){}
 // Existing learners keep their uninterrupted path. The tour is in Profile.
 if(seen||state.done.length||state.xp)renderHome();else renderWelcome();
}
