/* PU1 R4: original discovery activities, independent of the reference author's assets. */
(()=>{'use strict';
const C=window.COURSE, words=C.pages.filter(p=>p.kind==='word').map(p=>p.word);
const $=s=>document.querySelector(s), esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const img=(w,cls='')=>`<img class="${cls}" src="assets/${w==='black cat'?'cat':w}.png" alt="${esc(w)}">`;
const B=(t,a,extra='',cls='r4-btn')=>`<button class="${cls}" data-a="${a}" ${extra}>${t}</button>`;
const collected=new Set();let ctx=null,nodes=new Set(),demoTimer=null,guideReturn=null,lastEffect='',effectsPlayed=0;
const positions=[[28,63],[68,65],[50,43],[79,48],[37,30],[58,74],[20,69],[73,57]];
function get(){const a=window.COURSE_APP?.getState();return a?{p:C.pages[a.i],s:a.states[a.i]||{}}:null;}
function stop(){clearTimeout(demoTimer);demoTimer=null;for(const n of nodes){try{n.stop()}catch{}}nodes.clear();const a=get();if(a){a.s.demonstrating=false;a.s.demoFound=false;}}
function effect(kind){
 const sound=window.CourseAudio?.getState();if(sound?.muted||sound?.speaking||Array.from(document.querySelectorAll('video')).some(v=>!v.paused&&!v.ended&&!v.muted)||matchMedia('(prefers-reduced-motion: reduce)').matches&&kind==='sweep')return;
 if(!ctx){const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;ctx=new AC();}ctx.resume().catch(()=>{});
 for(const n of nodes){try{n.stop()}catch{}}nodes.clear();lastEffect=kind;effectsPlayed++;
 const vol=Math.min(.15,(sound?.volume??.6)*.22),t=ctx.currentTime;
 const pitches={find:[523,659,784],collect:[660,880,1046],sweep:[300,420],try:[360,320],paper:[420,560],done:[523,659,784,1046]}[kind]||[480];
 pitches.forEach((f,i)=>{const o=ctx.createOscillator(),g=ctx.createGain(),at=t+i*.09;o.type=kind==='paper'?'triangle':'sine';o.frequency.setValueAtTime(f,at);o.frequency.exponentialRampToValueAtTime(f*(kind==='sweep'?1.4:1),at+.12);g.gain.setValueAtTime(0,at);g.gain.linearRampToValueAtTime(vol,at+.01);g.gain.exponentialRampToValueAtTime(.0001,at+.17);o.connect(g);g.connect(ctx.destination);nodes.add(o);o.onended=()=>nodes.delete(o);o.start(at);o.stop(at+.19);});
}
function cabinet(){return `<div class="r4-cabinet"><div class="r4-count"><b>${collected.size}<small> / 8</small></b><span>Our discoveries</span></div>${words.map((w,i)=>`<button data-a="r4-visit" data-index="${i}" class="r4-stamp ${collected.has(w)?'collected':''}" aria-label="${collected.has(w)?'Revisit '+esc(w):'Visit discovery '+(i+1)}">${collected.has(w)?img(w):'<span class="r4-unknown">'+String(i+1).padStart(2,'0')+'</span>'}<span>${collected.has(w)?esc(w):'Discover'}</span></button>`).join('')}</div>`;}
function sentence(w){return w==='candy'?'I can see candy.':'I can see a '+w+'.';}
function location(p,s){if(!s.r4pos){const x=positions[p.id-3];s.r4pos=[...x];}return s.r4pos;}
function challenge(p,s){
 const i=p.id-3,n=s.r4step||0;
 if(i===0)return `<button class="r4-hidden-object" data-a="r4-find" style="left:${location(p,s)[0]}%;top:${location(p,s)[1]}%" aria-label="Find the hidden object">${img(p.word)}</button><div class="r4-light-mask" aria-hidden="true"></div>`;
 const step=(t,k,cls)=>B(t,'r4-step',`data-index="${k}"`,cls);
 if(i===1)return `<div class="r4-gift-stage">${step(`<span class="r4-bow">✦</span><span>${['Untie the ribbon','Lift the lid','Open the paper'][Math.min(n,2)]}</span>`,'0','r4-gift step-'+n)}<p>Unwrap a surprise. ${n} / 3</p></div>`;
 if(i===2)return `<div class="r4-paper-doors">${[0,1,2].map(k=>step(`<span>Knock, knock!</span><b>${k+1}</b>`,k,'r4-paper-door')).join('')}</div>`;
 if(i===3)return `<div class="r4-curtain-stage"><div class="r4-curtain"></div>${step('Pull the curtain →',0,'r4-btn primary')}</div>`;
 if(i===4)return `<div class="r4-trail-stage">${[0,1,2].map(k=>step(`<span>➜</span><b>${k+1}</b>`,k,'r4-trail '+(k<n?'visited':''))).join('')}<p>Follow the flight path. ${n} / 3</p></div>`;
 if(i===5)return `<div class="r4-web-stage"><div class="r4-web-line"></div>${[0,1,2].map(k=>step(String(k+1),k,'r4-web-dot dot-'+k+(k<n?' visited':''))).join('')}<p>Join the dots in order. ${n} / 3</p></div>`;
 if(i===6)return `<div class="r4-book-stage">${step('<b>A little secret</b><span>Turn the page →</span>',0,'r4-book-cover')}</div>`;
 return `<div class="r4-trunk-stage">${step('<span>THE PARTY BOX</span><b>Open the box ↑</b>',0,'r4-trunk')}</div>`;
}
function discovery(p,s){
 const [x,y]=location(p,s),found=s.r4found||s.demoFound,plain=s.r4lit||false,index=p.id-3;
 return `<div class="r4-discovery variant-${index%4}"><div class="r4-search-scene activity-${index} ${plain?'lights-on':''}" tabindex="0" role="region" aria-label="Interactive discovery scene" style="--beam-x:${s.r4x??50}%;--beam-y:${s.r4y??50}%">
 <div class="r4-scenery"><i class="r4-scene-prop prop-a"></i><i class="r4-scene-prop prop-b"></i><i class="r4-scene-prop prop-c"></i></div><div class="r4-decor r4-decor-${index%4}" aria-hidden="true"></div>
 ${found?'':challenge(p,s)}
 <span class="r4-scene-label">${['THE PARTY GARDEN','A WRAPPED GIFT','THREE PAPER DOORS','BEHIND THE CURTAIN','THE FLIGHT PATH','JOIN THE WEB','THE STORYBOOK','THE PARTY BOX'][index]}</span>
 <div class="r4-search-instruction">${s.demonstrating?'Watch how the light moves.':['Move the light. Find a surprise.','Unwrap the gift.','Which door? Knock and find out.','Pull the curtain.','Follow 1 → 2 → 3.','Join 1 → 2 → 3.','Turn the page.','Open the party box.'][index]}</div>
 ${found?`<div class="r4-found"><span class="r4-eyebrow">${s.demoFound?'TEACHER DEMO':'A NEW DISCOVERY'}</span>${img(p.word,'r4-found-art')}<h2>${esc(p.word)}</h2><p>${esc(sentence(p.word))}</p><div class="r4-found-actions">${B('Hear the word','r4-hear')}${s.demoFound?B('Finish demo','r4-demo-end'):B(collected.has(p.word)?'Say it again ✓':'Say it — collect','r4-collect','','r4-btn primary')}</div><span class="r4-small">${s.demoFound?'Watch first. Your collection stays the same.':'Tell a friend before your teacher collects it.'}</span></div>`:''}
 </div><div class="r4-discovery-bar"><p id="r4-feedback" role="status">${esc(s.r4message||'Look carefully. Take your time.')}</p>${index===0?B(plain?'Hide the clues':'Lights on','r4-lights','','r4-btn light'):''}${B('Find again','r4-again','','r4-btn light')}</div>${cabinet()}</div>`;
}
function cover(){return `<div class="r4-hero"><span class="r4-eyebrow">LOOK · DISCOVER · TALK</span><h2>Halloween<br>Discovery Party.</h2><p>Look. Discover.<br>Tell a story.</p>${B('Let’s explore →','r4-start','','r4-btn primary')}</div>${cabinet()}`;}
function clue(p,s){if(!s.r4choices)s.r4choices=window.R2.shuffle(p.art);const answer=p.art[p.target];return `<div class="r4-case-board"><div class="r4-case-copy"><span class="r4-eyebrow">HALLOWEEN DETECTIVES · CASE ${p.id-10}</span><h2>${esc(p.prompt||'Listen to the clue.')}</h2><p id="r4-feedback" role="status">${esc(s.r4message||'Think first. Tell a partner. Choose.')}</p>${s.r4correct?`<div class="r4-evidence-open"><span>YOUR EVIDENCE</span><b>${esc(answer)}</b></div>`:'<div class="r4-evidence-seal">?</div>'}${B('Next friend · mix cards','r4-clue-reset','','r4-btn light')}</div><div class="r4-clue-options">${s.r4choices.map((w,i)=>B(img(w)+`<span>${s.r4correct&&w===answer?esc(w):String(i+1).padStart(2,'0')}</span>`,'r4-clue',`data-index="${i}"`,'r4-clue-card '+(s.r4pick===i?(s.r4correct?'correct':'retry'):''))).join('')}</div></div>`;}
function render(p,s){if(p.kind==='theme-cover')return cover();if(p.kind==='word')return discovery(p,s);if(p.kind==='choose')return clue(p,s);return null;}
function moveBeam(scene,x,y){scene.style.setProperty('--beam-x',x+'%');scene.style.setProperty('--beam-y',y+'%');const a=get();if(a){a.s.r4x=x;a.s.r4y=y;}}
function action(a,b,p,s,renderNow){
 if(!a.startsWith('r4-'))return false;
 switch(a){
 case 'r4-start':window.COURSE_APP.goPage(2);return true;
 case 'r4-visit':window.COURSE_APP.goPage(Number(b.dataset.index)+3);return true;
 case 'r4-step':{const i=p.id-3,k=Number(b.dataset.index),n=s.r4step||0;let done=false;
 if(i===2){done=k===1;s.r4message=done?'A friend is here!':'Nobody here. Try another door.';}
 else if([4,5].includes(i)){if(k!==n){s.r4message='Start with '+(n+1)+'. Try again.';renderNow();effect('try');return true;}s.r4step=n+1;done=s.r4step===3;s.r4message=done?'You followed the clues!':'Keep going. Find '+(s.r4step+1)+'.';}
 else if(i===1){s.r4step=n+1;done=s.r4step===3;s.r4message='The gift is opening.';}
 else done=true;
 if(done){s.r4found=true;s.r4message='You found it. Listen, then tell a friend.';}renderNow();effect(done?'find':i===2?'try':'paper');return true;}
 case 'r4-find':if(s.r4found||s.demoFound)break;s.r4found=true;s.r4message='You found it. Listen, then tell a friend.';renderNow();effect('find');return true;
 case 'r4-hear':window.CourseAudio?.speak([p.word]);return true;
 case 'r4-collect':if(!s.r4found||s.demoFound)break;collected.add(p.word);s.r4message='Collected. Now swap with a friend.';renderNow();effect('collect');return true;
 case 'r4-lights':s.r4lit=!s.r4lit;s.r4message=s.r4lit?'The lights are on. Look for the object.':'Follow your light.';renderNow();effect('sweep');return true;
 case 'r4-again':clearTimeout(demoTimer);s.r4found=false;s.r4step=0;s.demoFound=false;s.demonstrating=false;s.r4lit=false;s.r4x=50;s.r4y=50;s.r4message=p.id===3?'A new place. Same word. Find it again.':'A fresh turn. Discover it again.';s.r4pos=[20+Math.random()*60,32+Math.random()*42];renderNow();return true;
 case 'r4-clue':{const i=Number(b.dataset.index);s.r4pick=i;s.r4correct=s.r4choices[i]===p.art[p.target];s.r4message=s.r4correct?'You found the evidence. Say it to a friend.':'Look at the clue again. Try the same case.';renderNow();effect(s.r4correct?'find':'try');return true;}
 case 'r4-clue-reset':s.r4choices=window.R2.shuffle(p.art);s.r4pick=null;s.r4correct=false;s.r4message='Same clue. A new turn.';renderNow();return true;
 case 'r4-demo-end':stop();s.demoFound=false;s.r4found=false;s.r4x=50;s.r4y=50;s.r4message='Your turn. Move the light.';renderNow();return true;
 }return true;
}
function after(a,p,s){if(a.startsWith('r4-'))return;if(['flip','pair-back','sort','r2-ingredient','r2-open'].includes(a))effect('paper');if(a==='recipe-check')effect(s.free||$('.recipe-controls .hint')?.textContent.startsWith('Yes')?'done':'try');if(a==='pair-check'&&$('#memory-feedback')?.textContent.startsWith('A match'))effect('collect');}
function guide(){const a=get();if(!a)return;window.CourseAudio?.stop(true);stop();const d=$('#r4-guide');guideReturn=document.activeElement;
 d.innerHTML=`<form method="dialog"><button class="r4-guide-close" aria-label="关闭教师指南">关闭 ×</button></form><span class="r4-guide-tag">PU1 · ${esc(C.version)} · 第${a.p.id}页</span><h2>这页怎样带</h2><p class="r4-guide-time">${a.p.before}—${a.p.before+a.p.minutes}分钟，共${a.p.minutes}分钟</p><div class="r4-guide-notes">${a.p.notes.split('\n\n').map(x=>`<p>${esc(x)}</p>`).join('')}</div><div class="r4-guide-actions"><button id="r4-reset-collection" type="button">重新开始收藏</button>${a.p.id===3?'<button id="r4-demo-button">看一次操作演示（不记收藏）</button>':''}<a href="teacher-guide.html" target="_blank">完整教师说明 →</a></div><p class="r4-guide-boundary">完整词句已接入男女童双音库；单词放慢、句子保留语调，人声期间避让音效。无麦克风、无自动语音评分。教师文字指南与操作演示不是录好的真人讲解视频。</p>`;d.showModal();$('#r4-reset-collection').addEventListener('click',()=>{stop();collected.clear();const all=window.COURSE_APP.getState().states;Object.values(all).forEach(s=>{s.r4found=false;s.r4message='A fresh collection. Let’s discover.';});d.close();window.COURSE_APP.renderActivity();});$('#r4-demo-button')?.addEventListener('click',()=>{d.close();demo();});
}
function demo(){const a=get();if(!a||a.p.id!==3)return;stop();a.s.demonstrating=true;a.s.demoFound=false;a.s.r4found=false;a.s.r4x=12;a.s.r4y=30;window.COURSE_APP.renderActivity();const [x,y]=location(a.p,a.s);requestAnimationFrame(()=>{const scene=$('.r4-search-scene');if(scene){scene.classList.add('r4-demo-moving');moveBeam(scene,x,y);}});demoTimer=setTimeout(()=>{if(get()?.p.id!==a.p.id)return;a.s.demoFound=true;a.s.r4message='Demo: find → listen → say → collect. Now invite a student.';window.COURSE_APP.renderActivity();effect('find');},1100);}
function bind(p,s){
 const page=$('#stage .page');if(!page)return;page.classList.add('r4-page','r4-'+p.kind);
 const scene=$('.r4-search-scene');if(scene&&p.id===3){scene.addEventListener('pointermove',e=>{if(s.r4found||s.demoFound)return;const r=scene.getBoundingClientRect();moveBeam(scene,Math.max(0,Math.min(100,(e.clientX-r.left)/r.width*100)),Math.max(0,Math.min(100,(e.clientY-r.top)/r.height*100)));});scene.addEventListener('pointerdown',e=>{if(e.target.closest('.r4-found'))return;const r=scene.getBoundingClientRect();moveBeam(scene,(e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100);});scene.addEventListener('click',e=>{if(e.target.closest('button')||s.r4found||s.demoFound)return;s.r4message='Keep looking. You can turn the lights on.';$('#r4-feedback').textContent=s.r4message;effect('try');});}
 if(!$('#r4-guide')){const d=document.createElement('dialog');d.id='r4-guide';document.body.append(d);d.addEventListener('close',()=>guideReturn?.isConnected&&guideReturn.focus());}
 if(!$('#r4-teacher-button')){const b=document.createElement('button');b.id='r4-teacher-button';b.textContent='教师指南 · 操作讲解';b.addEventListener('click',guide);$('#toolbar').append(b);}
 if(!$('#r4-project-button')){const b=document.createElement('button');b.id='r4-project-button';b.textContent='学生投屏';b.addEventListener('click',()=>{window.CourseAudio?.stop(true);$('#r4-guide')?.close();document.body.classList.add('projector');window.dispatchEvent(new Event('resize'));});$('#toolbar').append(b);}
 if(!window.R4.audioWrapped&&window.CourseAudio){const old=window.CourseAudio.stop;window.CourseAudio.stop=(...args)=>{stop();return old(...args)};window.R4.audioWrapped=true;}
}
document.addEventListener('keydown',e=>{const scene=e.target.closest?.('.r4-search-scene');if(scene&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Enter',' '].includes(e.key)&&!e.target.closest('.r4-found')){e.preventDefault();e.stopImmediatePropagation();const a=get();if(!a||a.p.id!==3||a.s.r4found||a.s.demoFound)return;let x=a.s.r4x??50,y=a.s.r4y??50;if(e.key==='ArrowLeft')x-=6;if(e.key==='ArrowRight')x+=6;if(e.key==='ArrowUp')y-=6;if(e.key==='ArrowDown')y+=6;moveBeam(scene,Math.max(0,Math.min(100,x)),Math.max(0,Math.min(100,y)));if(e.key==='Enter'||e.key===' '){const [tx,ty]=location(a.p,a.s);if(Math.abs(x-tx)<13&&Math.abs(y-ty)<18){a.s.r4found=true;window.COURSE_APP.renderActivity();effect('find');}else{$('#r4-feedback').textContent='Move the light a little closer. Try again.';effect('try');}}}
 if(e.key==='Escape'){if(document.body.classList.contains('projector')){document.body.classList.remove('projector');window.dispatchEvent(new Event('resize'));}const a=get();if(a?.s.demonstrating){stop();window.COURSE_APP.renderActivity();}}
},true);
document.addEventListener('click',e=>{const b=e.target.closest('[data-sound]');if(b&&['stop','mute','listen'].includes(b.dataset.sound))stop();},true);
document.addEventListener('change',e=>{if(e.target.matches('[data-recipe]'))effect('paper');});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});window.addEventListener('pagehide',stop);
window.R4={render,action,bind,after,stop,hushEffects:()=>{for(const n of nodes){try{n.stop()}catch{}}nodes.clear();},guide,demo,effect,getState:()=>({collected:[...collected],effectsPlayed,lastEffect,activeEffects:nodes.size,audioContext:ctx?.state,demoRunning:!!demoTimer})};
})();
