/* Original pylearn rank badges. Ranks reflect unique completed lessons, not replay XP. */
const RANKS=[
 {name:'Bronze',at:0,color:'#d69a68',dark:'#70452d'},
 {name:'Silver',at:5,color:'#d4e0ef',dark:'#596b84'},
 {name:'Gold',at:15,color:'#ffda57',dark:'#967018'},
 {name:'Platinum',at:30,color:'#8ae6dc',dark:'#327b82'},
 {name:'Diamond',at:50,color:'#83caff',dark:'#3b65a8'},
 {name:'Master',at:75,color:'#c4a1ff',dark:'#7048ad'},
 {name:'Legendary',at:96,color:'#ffe688',dark:'#b76b30'}
];
function currentRank(count=state.done.length){let index=0;RANKS.forEach((r,i)=>{if(count>=r.at)index=i});return {...RANKS[index],index,next:RANKS[index+1]}}
function rankBadge(rank,size='small'){
 const rays=Array.from({length:rank.index+1},(_,i)=>`<path d="M ${22+i*6} 77 v 6"/>`).join('');
 return `<span class="rank-badge rank-${size}" style="--rank-color:${rank.color}"><svg viewBox="0 0 100 100" role="img" aria-label="${rank.name} rank"><path d="M25 65 16 92 36 85 48 96 51 67M75 65 84 92 64 85 52 96 49 67" fill="${rank.dark}"/><path d="M50 5 84 23 88 57 71 78 50 87 29 78 12 57 16 23Z" fill="${rank.dark}" stroke="${rank.color}" stroke-width="3"/><path d="M50 13 76 28 79 54 66 71 50 78 34 71 21 54 24 28Z" fill="${rank.color}"/><path d="M50 13V78L21 54 24 28Z" fill="#ffffff" opacity=".14"/><path d="m50 28 6 13 14 2-10 10 2 14-12-7-12 7 2-14-10-10 14-2Z" fill="${rank.dark}"/>${rank.index>=4?'<path d="m31 20 8 5m30-5-8 5" stroke="white" stroke-width="3" stroke-linecap="round"/>':''}<g stroke="${rank.color}" stroke-width="2" stroke-linecap="round">${rays}</g></svg></span>`;
}
function rankProgress(count=state.done.length,animate=false,oldCount=count){
 const promoted=animate&&currentRank(oldCount).index<currentRank(count).index;const rank=promoted?currentRank(oldCount):currentRank(count);const start=rank.at;const end=rank.next?.at||96;const fraction=rank.next?(count-start)/(end-start):1;const from=rank.next?Math.max(0,(oldCount-start)/(end-start)):1;
 return `<div class="rank-progress" style="--rank-color:${rank.color}"><div class="rank-progress-label"><strong>${promoted?rank.name+' → '+currentRank(count).name:rank.name}</strong><span>${promoted?`${count} / ${end} lessons - rank reached`:rank.next?`${count} / ${end} lessons to ${rank.next.name}`:'96 / 96 lessons - top rank'}</span></div><div class="rank-meter" role="progressbar" aria-label="Rank progress" aria-valuemin="${start}" aria-valuemax="${end}" aria-valuenow="${count}"><i class="${animate?'rank-meter-advance':''}" style="--rank-from:${from};--rank-to:${fraction};transform:scaleX(${fraction})"></i></div></div>`;
}
function rankDetails(){return `<section class="rank-details"><h2>Your rank</h2><div class="rank-profile-badge">${rankBadge(currentRank(),'medium')}</div>${rankProgress()}<p>Complete different lessons to climb. Replays earn XP but do not count twice. Earlier progress already counts.</p><ol>${RANKS.map(r=>`<li>${rankBadge(r)}<strong>${r.name}</strong><span>${r.at} lessons</span>${state.done.length>=r.at?'<span aria-label="Reached">✓</span>':''}</li>`).join('')}</ol></section>`}
// Sampled rising effect follows the bar's 250ms delay and 900ms fill.
async function playRankFill(promoted=false){
 if(!soundOn)return;const request=++soundRequest;unlockAudio();if(!audioContext)return;
 try{
  const load=name=>sounds[name] ||= soundBytes(name).then(bytes=>bytes?audioContext.decodeAudioData(bytes.slice(0)):null);
  const [fill,chime]=await Promise.all([load('rank-fill'),promoted?load('correct'):null]);
  if(!fill||!soundOn||request!==soundRequest)return;
  for(const source of activeSounds){try{source.stop()}catch(e){}}
  const now=audioContext.currentTime;
  function sample(buffer,name,at,rate,gainValue,duration){const source=audioContext.createBufferSource(),gain=audioContext.createGain();source.buffer=buffer;source.soundName=name;source.playbackRate.value=rate;gain.gain.setValueAtTime(gainValue,at);if(duration)gain.gain.exponentialRampToValueAtTime(.001,at+duration);source.connect(gain);gain.connect(audioContext.destination);activeSounds.add(source);source.onended=()=>{activeSounds.delete(source);source.disconnect();gain.disconnect()};source.start(at);if(duration)source.stop(at+duration)}
  sample(fill,'rank-fill',now+.25,1,.42);
  if(promoted&&chime)[0,4,7,12].forEach((n,i)=>sample(chime,'rank',now+1.18+i*.15,Math.pow(2,n/12),.19,.42));
 }catch(e){} // Optional audio must never block the lesson.
}
function playRankSound(){return playRankFill(true)}
// Prepare after interaction, never during initial page load.
document.addEventListener('pointerdown',()=>{if(!soundOn)return;unlockAudio();if(audioContext&&!sounds['rank-fill'])sounds['rank-fill']=soundBytes('rank-fill').then(bytes=>bytes?audioContext.decodeAudioData(bytes.slice(0)):null).catch(()=>null)},{passive:true});
