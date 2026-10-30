import{VERSION,PROFILES,PACKETS,EXAMPLES,GUIDED,SESSION,SOURCES,REFLECT}from'./content.mjs?v=vol4r1';
import{clone,hasValue,freshTask,freeze,evaluate,missing,exportPackage,completion}from'./state.mjs?v=vol4r1';
const MAX_SEC=120,MAX_BYTES=3*1024*1024;
const PREFIX='wl-vol4-v1:',app=document.querySelector('#app');
let profile=localStorage.getItem(PREFIX+'profile')||'he';if(!PROFILES[profile])profile='he';
let route='home',reviewer=new URLSearchParams(location.search).get('review')==='1',recording=null,dbPromise=null,toastTimer;
const urlCache=new Map();
const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const blank=()=>({version:VERSION,tasks:{},guided:{answers:{},audio:{},checks:{}},reflect:{answers:{}},pastes:{}});
const read=()=>{try{const r=JSON.parse(localStorage.getItem(PREFIX+profile));return r?{...blank(),...r}:blank();}catch{return blank();}};
let record=read();record.version=VERSION;

function toast(t){const x=document.querySelector('#toast');x.textContent=t;x.style.display='block';clearTimeout(toastTimer);toastTimer=setTimeout(()=>x.style.display='none',5000);}
function save(){try{localStorage.setItem(PREFIX+profile,JSON.stringify(record));document.querySelectorAll('.save-state').forEach(x=>x.textContent='本机草稿已保存');return true;}catch{toast('浏览器保存空间不足。先下载答卷，再继续。');return false;}}
function task(mode){if(!record.tasks[mode])record.tasks[mode]=freshTask();if(reviewer&&!record.tasks[mode].snapshot)record.tasks[mode].flags.reviewExposed=true;return record.tasks[mode];}
function database(){return dbPromise??=new Promise((resolve,reject)=>{const req=indexedDB.open('wonderland-vol4-audio-v1',1);req.onupgradeneeded=()=>req.result.createObjectStore('clips',{keyPath:'key'});req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(Error('本机录音存储不可用，请换Chrome常规窗口重试。'));});}
async function putClip(x){const db=await database();return new Promise((res,rej)=>{const tx=db.transaction('clips','readwrite');tx.objectStore('clips').put(x);tx.oncomplete=()=>res();tx.onerror=()=>rej(Error('录音未保存成功，请下载已有答卷并检查浏览器空间。'));});}
async function getClip(key){const db=await database();return new Promise((res,rej)=>{const req=db.transaction('clips').objectStore('clips').get(key);req.onsuccess=()=>res(req.result);req.onerror=()=>rej(Error('无法读取本机录音。'));});}
function stopSound(){document.querySelectorAll('audio').forEach(a=>a.pause());}
const mmss=s=>String(Math.floor(s/60)).padStart(2,'0')+':'+String(Math.floor(s%60)).padStart(2,'0');
const sinceStart=start=>Math.max(0,Math.floor((Date.now()-Date.parse(start))/1000));
const baselineNeeded=(mode,t)=>{const b=PACKETS[profile][mode].baseline;return!!b&&!t.audio[b.id]&&!t.flags.baselineUnmeasured;};

const NAV=[['home','Vol.4安排'],['wed','① 首次独立 · 50分钟'],['guided','② 对答案、跟练 · 15分钟'],['fri','③ 换情境再做 · 15分钟'],['records','④ 反馈与交卷 · 10分钟'],['guide','使用说明']];
function layout(content){app.innerHTML=`<div class="layout"><aside class="sidebar"><div class="profile"><label for="profile">选择自己的姓名</label><select id="profile">${Object.entries(PROFILES).map(([k,p])=>`<option value="${k}" ${k===profile?'selected':''}>${p.name}</option>`).join('')}</select></div>${NAV.map(([k,t])=>`<button data-route="${k}" class="${route===k?'active':''}">${t}</button>`).join('')}<small>一次做完：独立50 → 跟练15<br>→ 换情境15 → 反馈交卷10</small><div class="review-tools"><button data-action="review" class="secondary">${reviewer?'返回正常作答视图':'负责人查看解析与评分'}</button></div></aside><main id="main"><div class="row spread"><span class="badge">${esc(PROFILES[profile].name)} · Vol.4</span><span class="save-state">本机保存 · 不自动发送</span></div><p class="notice">Vol.4 · ${esc(SESSION.window)}</p>${reviewer?'<div class="notice warn">负责人审阅：可以提前看参考方向。本次新作答会标记为审阅练习，不算首次独立表现。</div>':''}${content}</main></div>`;hydrate();}

function home(){
 const he=profile==='he';
 return`<section class="hero"><div><p class="eyebrow">VOL.4 · 用在下周真实的课上</p><h1>把下周的课，<br>先在这里上一遍。</h1><p>${esc(PROFILES[profile].focus)}</p><button class="gold" data-route="wed">进入① 首次独立</button></div><img src="./assets/wendy-lion.webp" alt="温迪小狮陪你练习"></section>
<section class="paper"><h2>一次做完，90分钟，分四段</h2><p>${esc(SESSION.window)}前一段做完，后一段才会打开。中途不要换电脑或浏览器，录音只存在这台电脑上。</p><table><thead><tr><th>阶段</th><th>做什么</th><th>留下什么</th></tr></thead><tbody>${SESSION.phases.map(p=>`<tr><td>${p.title} · ${p.minutes}分钟</td><td>${p.detail}</td><td>${p.evidence}</td></tr>`).join('')}</tbody></table></section>
<div class="grid"><section class="paper"><h2>开始前先准备好</h2><p>下周要上的<b>班级</b>、<b>单元</b>和这节课的<b>目标句型（英文）</b>。①里会先让你填，后面的设计和试讲都用它。</p><p>${he?'这次重点：最后8分钟怎么上，换图抽查时先问后等，孩子卡住时先帮再撤。':'这次重点：把一个你玩过的旧游戏改出3个新玩法；换了规则一定要再检查。'}</p></section><section class="paper"><h2>理由可以写中文</h2><p>判断和理由直接用中文写，不用为了显得专业去翻译成英文。<b>对孩子说的话</b>用英文，主要靠录音。</p><p>首次独立不看解析，不用AI、翻译或他人帮助。这份卷子看的是你现在真实的样子，后面的练习按它来安排。</p></section></div>
<section class="paper"><h2>听力：剑桥B1官方原音</h2><p>Part 2 的短对话，每段自带两遍，1.0倍。每题选完马上写「依据」：你听到了哪几个英文词，为什么不选另一个。${he?'':'听力开始前先录一段约20秒的朗读，作为开口基线。'}</p></section>`;
}

function question(q,mode,locked){
 const t=task(mode),v=(t.snapshot?.answers||t.answers)[q.id],dis=locked?'disabled':'';
 let field;
 if(q.type==='match')field=`<select id="${q.id}" data-answer="${q.id}" data-mode="${mode}" ${dis}><option value="">选择字母</option>${q.options.map((o,i)=>`<option value="${i}" ${v===i?'selected':''}>${esc(o.slice(0,1))}</option>`).join('')}</select>`;
 else if(q.type==='choice')field=`<div class="options">${q.options.map((o,i)=>`<label><input type="radio" data-answer="${q.id}" data-mode="${mode}" name="${q.id}" value="${i}" ${v===i?'checked':''} ${dis}>${esc(o)}</label>`).join('')}</div>`;
 else if(q.type==='short')field=`<input type="text" id="${q.id}" maxlength="200" data-answer="${q.id}" data-mode="${mode}" value="${esc(v||'')}" ${dis}>`;
 else field=`<textarea id="${q.id}" maxlength="4000" data-answer="${q.id}" data-mode="${mode}" ${dis}>${esc(v||'')}</textarea>`;
 return`<div class="question" role="group" aria-labelledby="prompt-${q.id}"><label id="prompt-${q.id}" for="${q.id}"><span class="label">${esc(q.label)}</span>${q.type==='long'?`<b>${esc(q.title)}</b>`:esc(q.prompt)}</label>${q.type==='long'?`<p class="material">${esc(q.prompt)}</p>`:''}${q.hint||q.source?`<p class="hint">${esc(q.source||'')}${q.hint?' · '+esc(q.hint):''}</p>`:''}${field}</div>`;
}
function evidence(q,mode,locked){const t=task(mode),v=(t.snapshot?.answers||t.answers)[q.id+'_ev'];return`<div class="question"><label for="${q.id}_ev"><span class="label">${esc(q.label)}依据</span>${esc(q.evidencePrompt)}</label><textarea id="${q.id}_ev" maxlength="1000" style="min-height:70px" data-answer="${q.id}_ev" data-mode="${mode}" ${locked?'disabled':''}>${esc(v||'')}</textarea></div>`;}

function recorder(group,id,locked=false){
 const owner=group==='guided'?record.guided:task(group),data=owner.snapshot?.audio||owner.audio||{},clip=data[id];
 return`<div class="record" data-record="${group}:${id}"><div class="row"><button data-action="record" data-group="${group}" data-id="${id}" ${locked?'disabled':''}>开始录音</button><button class="secondary" data-action="stop-record" disabled>停止并保存录音</button><span data-record-status>${clip?'录音已保存，请试听确认有声音':'尚未录音 · 最长120秒'}</span></div>${clip?`<audio controls preload="metadata" data-clip="${esc(clip.key)}"></audio><p class="hint">${clip.duration.toFixed(1)}秒 · 已存本机。保存成功不等于内容已评分。</p>`:''}<label class="upload">备用：上传已有音频（最长120秒）<input type="file" accept="audio/*,.m4a" data-upload="${group}:${id}" ${locked?'disabled':''}></label></div>`;
}
const speakBlock=(q,group,locked)=>`<div class="taskline"><h3>${esc(q.title)}</h3><p class="material">${esc(q.prompt)}</p><p class="hint">${esc(q.hint||'')}</p>${recorder(group,q.id,locked)}</div>`;

function audioCard(a,mode){
 const t=task(mode),blocked=!t.startedAt||baselineNeeded(mode,t);
 return`<div class="audio-card"><b>${esc(a.title)}</b><audio preload="metadata" src="${a.url}" data-listen="${a.id}" data-mode="${mode}" data-begin="0" data-end="${a.end}"></audio><div class="row"><button data-action="original-play" data-audio="${a.id}" ${blocked?'disabled':''}>播放 / 暂停</button><button class="secondary" data-action="original-reset" data-audio="${a.id}" ${!t.startedAt?'disabled':''}>回到开头</button><span data-source-time="${a.id}">0:00 / ${fixed(a.end)}</span></div><label class="hint">进度<input type="range" min="0" max="${a.end}" value="0" step="1" data-seek="${a.id}" aria-label="${esc(a.title)}进度" ${blocked?'disabled':''}></label><p class="hint">剑桥真人原音 · 固定1.0倍 · 自带两遍 · 已播放 <span data-plays="${a.id}">${t.flags.plays[a.id]||0}</span> 次</p><p data-audio-error="${a.id}" class="hint"></p></div>`;
}
function fixed(s){s=Math.round(s);return Math.floor(s/60)+':'+String(s%60).padStart(2,'0');}

function conceptBlock(p,mode,locked){
 return p.tkt.map((q,i)=>{const head=q.type==='match'&&(i===0||p.tkt[i-1].group!==q.group)?`<p class="material">${esc(q.instruction)}</p><div class="source-options">${q.options.map(o=>`<p>${esc(o)}</p>`).join('')}</div>`:'';return head+question(q,mode,locked);}).join('');
}

function exam(mode){
 if(mode==='fri'&&!reviewer&&(!record.tasks.wed?.snapshot||!record.guided.savedAt))return`<h1>③ 换情境再做</h1><section class="paper"><p>先结束①首次独立，再在②里保存跟练的文字和录音，这一段才会打开。</p><button data-route="${record.tasks.wed?.snapshot?'guided':'wed'}">回到${record.tasks.wed?.snapshot?'② 跟练':'① 首次独立'}</button></section>`;
 const t=task(mode),p=PACKETS[profile][mode],locked=!!t.snapshot||!t.startedAt,listenMin=mode==='wed'?12:3;
 const intro=mode==='fri'?`<section class="paper"><h2>这15分钟做什么</h2><p>刚才跟着示例练过了。现在换一个情境，不看提示，自己做一次：</p><ol><li>听一段新原音，选答案，写依据。</li><li>${profile==='he'?'换一个班的情境，写3–4行你会说的话。':'从你的3个新玩法里再挑一个，写3行。'}</li><li>直接用英语试讲，录一段。</li></ol><p class="hint">看的是刚练的方法你能不能自己用出来。</p></section>`:'';
 const start=!t.startedAt?`<section class="paper"><h2>先试音，再开始</h2><audio controls src="./audio/device-check.mp3" data-begin="0" data-end="5"></audio><p class="hint">只是试音，不含答案。录音需要允许麦克风。</p><label><input type="checkbox" id="device-check" ${t.flags.deviceConfirmed?'checked':''}> 我听到了试音，也准备好录音了。</label><p><button data-action="start" data-mode="${mode}">开始并计时</button></p></section>`:`<div class="timerbar"><span>${t.snapshot?'本阶段原答已锁定':'作答中 · 建议'+p.minutes+'分钟内完成'}</span><b class="timer" data-start="${t.snapshot?'':t.startedAt}">${t.snapshot?mmss(t.snapshot.elapsedSeconds):mmss(sinceStart(t.startedAt))}</b></div>`;
 const base=p.baseline?`<section class="paper"><h2>先录开口基线 · 3分钟</h2><p>录完才能播放听力。一旦开始播放听力，这段基线就不能再改。</p>${t.flags.baselineUnmeasured?'<p class="notice warn">基线已标为未测。</p>':''}${speakBlock(p.baseline,mode,locked||!!t.flags.modelExposedAt)}${!t.audio[p.baseline.id]&&!t.flags.baselineUnmeasured&&t.startedAt&&!t.snapshot?'<p class="hint">麦克风实在用不了：<button class="secondary" data-action="baseline-skip">标为未测，继续听力</button></p>':''}</section>`:'';
 const listen=`<section class="paper"><h2>听力 · ${p.listening.length}题 / ${listenMin}分钟</h2><p class="hint">每题先读题，再播放。选完马上写依据。${esc(SOURCES.listening)}</p>${p.listening.map(q=>{const a=p.audio.find(x=>x.id===q.audio);return`<div class="taskline">${audioCard(a,mode)}<fieldset ${locked?'disabled':''}>${question(q,mode,locked)}${evidence(q,mode,locked)}</fieldset></div>`;}).join('')}<label><input type="checkbox" id="audio-failure" data-mode="${mode}" ${t.flags.audioFailure?'checked':''} ${t.snapshot?'disabled':''}> 播放故障，听力标为未测</label></section>`;
 const concept=p.tkt.length?`<section class="paper"><h2>概念复查 · ${p.tkt.length}题 / 6分钟</h2><p class="hint">${esc(SOURCES.concept)}</p><fieldset ${locked?'disabled':''}>${conceptBlock(p,mode,locked)}</fieldset></section>`:'';
 const setup=p.setup?`<section class="paper"><h2>我的真实课堂 · 29分钟（含下面的写和录）</h2><p>先填下周要上的课，下面的设计和试讲都用它。</p><fieldset ${locked?'disabled':''}>${p.setup.map(q=>question(q,mode,locked)).join('')}</fieldset></section>`:'';
 const write=`<section class="paper"><h2>${mode==='wed'?'写 · 约10分钟':'写'}</h2><p class="hint">理由用中文，对孩子说的话用英文。</p><fieldset ${locked?'disabled':''}>${p.writing.map(q=>question(q,mode,locked)).join('')}</fieldset></section>`;
 const speak=`<section class="paper"><h2>录音</h2><p class="hint">直接对孩子说，不讲教学理论；不需要同事或孩子配合。每段最长120秒，录音时会显示用时。</p>${p.speaking.map(q=>speakBlock(q,mode,locked)).join('')}</section>`;
 const end=!t.snapshot?`<section class="paper sticky-end"><div id="missing-notice"></div><button data-action="finish" data-mode="${mode}" ${!t.startedAt?'disabled':''}>结束本段，锁定原答</button><p class="hint">结束后会显示答案和解析，再进入下一段。</p></section>`:feedback(mode);
 const preview=reviewer&&!t.snapshot?`<section class="paper"><h2>负责人参考方向</h2>${feedbackBody(mode,{answers:t.answers,flags:t.flags,audio:t.audio},true)}</section>`:'';
 return`<h1>${esc(p.title)}</h1>${intro}<p class="muted">${p.minutes}分钟 · ${mode==='wed'?'首次独立，不看解析，不用AI或翻译':'不看提示，自己做一次'}</p>${start}${base}${listen}${concept}${setup}${write}${speak}${end}${preview}`;
}

function answerText(q,v){return['choice','match'].includes(q.type)?(q.options[v]??'未答'):String(v??'未答');}
function feedbackBody(mode,snap,preview=false){
 const p=PACKETS[profile][mode],r=evaluate(profile,mode,snap),items=[...p.listening.map((q,i)=>[q,r.listening.items[i]]),...p.tkt.map((q,i)=>[q,r.concept.items[i]])];
 const clips=[...(p.baseline?[p.baseline]:[]),...p.speaking];
 return`${preview?'<p class="notice warn">审阅示例，不产生首次成绩。</p>':''}<p class="notice">听力：${r.listening.points}/${r.listening.measuredMax}${r.listening.unmeasured?'，未测'+r.listening.unmeasured:''}${p.tkt.length?`；概念复查：${r.concept.points}/${r.concept.measuredMax}`:''}。分项记录，不换算等级，不做两人排名。</p>
${items.map(([q,x])=>`<details><summary>${esc(q.label)} · ${x.correct===true?'正确':x.correct===false?'需核对':'未测/未答'}</summary><p>${esc(q.prompt)}</p><p>你的答案：${esc(answerText(q,x.value))}</p>${x.evidence!==undefined?`<p>你写的依据：${esc(x.evidence||'未写')}</p>`:''}<p>答案：${esc(q.options[q.answer])}</p><p>${esc(x.reason||q.explanation)}</p></details>`).join('')}
${p.writing.map(q=>`<details><summary>${esc(q.title)} · 参考方向</summary><p class="quote">${esc(snap.answers[q.id]||'未答')}</p><p class="material">${esc(EXAMPLES[q.id]||'')}</p><p class="hint">看这几点：${q.criteria.map(esc).join('；')}。由月神复核，接受其他有效做法，不按参考逐字判。</p></details>`).join('')}
<details><summary>录音 · 人工复核看这几点</summary>${clips.map(q=>`<h3>${esc(q.title)}</h3><p>${q.criteria.map(esc).join('；')}</p>${snap.audio?.[q.id]?`<audio controls data-clip="${esc(snap.audio[q.id].key)}"></audio>`:'<p>没有录音，记未测。</p>'}`).join('')}</details>`;
}
function feedback(mode){const next=mode==='wed'?'<button class="secondary" data-route="guided">进入② 对答案、跟练</button>':'<button class="secondary" data-route="records">进入④ 反馈与交卷</button>';return`<section class="paper" id="feedback"><h2>先看答案和依据，再进下一段</h2>${feedbackBody(mode,task(mode).snapshot)}<div class="row">${next}</div></section>`;}

function modelAudios(){const g=GUIDED[profile];return g.models?`<section class="paper"><h2>真人范本</h2>${g.models.map(m=>`<p><b>${esc(m.title)}</b></p><audio controls preload="metadata" src="${m.url}" data-begin="0" data-end="${m.end}"></audio>`).join('')}<p class="hint">剑桥官方真人原音，1.0倍。目标段可以反复播放。</p></section>`:'';}
function guided(){
 const g=GUIDED[profile];
 if(!record.tasks.wed?.snapshot&&!reviewer)return`<h1>② 对答案、跟练</h1><section class="paper"><p>先在①里点「结束本段，锁定原答」，这里才会打开。</p><button data-route="wed">回到① 首次独立</button></section>`;
 const lockedG=!!record.tasks.fri?.startedAt;
 return`<h1>${esc(g.title)}</h1><p>${esc(PROFILES[profile].guided)}</p><section class="paper"><div class="row spread"><h2>跟练计时</h2>${record.guided.startedAt?`<b class="timer" data-start="${record.guided.endedAt?'':record.guided.startedAt}">${record.guided.endedAt?mmss(Math.round((Date.parse(record.guided.endedAt)-Date.parse(record.guided.startedAt))/1000)):mmss(sinceStart(record.guided.startedAt))}</b>`:'<button data-action="guided-start">开始15分钟跟练</button>'}</div><p class="hint">首次答案保留不动；跟练的文字和录音另存。留最后3分钟录音和保存。</p></section>
${g.blocks.map(b=>`<section class="paper"><h2>${esc(b.title)}</h2><p class="material">${esc(b.text)}</p></section>`).join('')}${modelAudios()}
<section class="paper"><h2>改写与记录</h2><p>${esc(g.prompt)}</p><textarea data-guided="text" maxlength="4000" ${lockedG?'disabled':''}>${esc(record.guided.answers.text||'')}</textarea><div class="checklist">${g.check.map((x,i)=>`<label><input type="checkbox" data-gcheck="${i}" ${record.guided.checks[i]?'checked':''}>${esc(x)}</label>`).join('')}</div>${g.speaking.map(q=>speakBlock(q,'guided',lockedG||!record.guided.startedAt)).join('')}<p><button data-action="save-guided" ${lockedG?'disabled':''}>保存跟练</button></p><p class="hint">${record.guided.savedAt?'跟练已保存。':'还没保存跟练。文字和要求的录音都有了才能保存。'}</p></section>
<section class="paper"><h2>下一步</h2><p>保存跟练后，直接进入③ 换情境再做。③一开始，跟练就不能再改。</p><button data-route="fri" class="secondary">进入③ 换情境再做</button></section>`;
}

function records(){
 const c=completion(profile,record),r=record.reflect;
 return`<h1>④ 反馈与交卷 · 10分钟</h1>
<section class="paper"><h2>3个问题，按真实感受写</h2><p class="hint">和答卷一起交，月神不会再私聊追问这几个问题。不用迎合，怎么想就怎么写。</p>${REFLECT.map(q=>`<div class="question"><label for="reflect-${q.id}"><span class="label">${esc(q.label)}</span>${esc(q.prompt)}</label><textarea id="reflect-${q.id}" data-reflect="${q.id}" maxlength="2000" style="min-height:80px">${esc(r.answers[q.id]||'')}</textarea></div>`).join('')}</section>
<section class="paper"><h2>自查缺项</h2>${c.complete?'<p class="notice">四段都已完成。下载前请把每段录音试听一遍，确认有声音。</p>':`<div class="notice warn"><p><b>还缺${c.missing.length}项：</b></p><p>${c.missing.map(esc).join('、')}</p><p>能补的请先补完。确实做不了的，也下载草稿交上来，并在上面第2题说明原因。</p></div>`}
${[['wed','① 首次独立'],['fri','③ 换情境再做']].map(([m,n])=>`<p>${n}：${record.tasks[m]?.snapshot?'已锁定':record.tasks[m]?.startedAt?'未结束':'未开始'} <button class="secondary" data-route="${m}">查看</button></p>`).join('')}<p>② 跟练：${record.guided.savedAt?'已保存':'未保存'} <button class="secondary" data-route="guided">查看</button></p></section>
<section class="paper"><h2>下载答卷（含录音）</h2><p>下载的文件里有你的全部答案、录音和计时。</p><button data-action="download">${c.complete?'下载完整答卷':`下载草稿（还缺${c.missing.length}项）`}</button> <button data-action="copy" class="secondary">复制文字答案</button><p class="hint">下载后，把文件发到英语部群，再在自己的文件消息下面 @月神。个人反馈只会私聊你本人。</p></section>`;
}

function guide(){return`<h1>老师先看这里</h1><section class="paper"><h2>什么时候做</h2><p>${esc(SESSION.window)}</p><h2>90分钟怎么做</h2><p>① 首次独立50分钟 → ② 对答案、跟练15分钟 → ③ 换情境再做15分钟 → ④ 反馈与交卷10分钟。前一段结束，后一段才打开。中间不单独休息。</p><p>①里先录开口基线，录完才能播放听力。每道听力题选完，马上写依据。概念复查之后，先填下周要上的班级、单元和目标句型，再写、再录。</p><h2>录音</h2><p>用电脑Chrome常规窗口打开本页。先试音，允许麦克风。点「开始录音」后，页面会显示用了多少秒、还剩多少秒，最长120秒，到时自动保存。录完点「停止并保存」，再试听一遍。也可以上传已有音频。</p><h2>理由可以写中文</h2><p>判断和理由用中文写就行；对孩子说的话用英文。首次独立不看解析，不用AI、翻译或他人帮助。</p><h2>交卷</h2><p>在④里回答3个问题，看缺项，下载答卷。把文件发到英语部群，再在自己的文件消息下 @月神。网页不会自动上传。</p><h2>题源</h2><p>${esc(SOURCES.listening)}</p><p>${esc(SOURCES.concept)}</p><p>${esc(SOURCES.note)}</p><p class="hint">计时是电脑时钟，包括离开页面的时间。</p></section>`;}

function render(){stopSound();const content=route==='home'?home():route==='wed'||route==='fri'?exam(route):route==='guided'?guided():route==='records'?records():guide();layout(content);}
function showError(e){toast(e.message||'操作没有完成，请重试。');}

async function hydrate(){
 for(const el of document.querySelectorAll('audio[data-clip]')){try{const key=el.dataset.clip;let url=urlCache.get(key);if(!url){const c=await getClip(key);if(!c){el.after(document.createTextNode('本机找不到这段录音，请保留答卷并补录。'));continue;}url=URL.createObjectURL(c.blob);urlCache.set(key,url);}el.src=url;}catch(e){showError(e);}}
 document.querySelectorAll('audio[data-end]').forEach(a=>{const begin=Number(a.dataset.begin),end=Number(a.dataset.end);
  a.addEventListener('timeupdate',()=>{if(a.currentTime>=end){a.pause();a.currentTime=begin;}if(!a.dataset.listen)return;const n=document.querySelector(`[data-source-time="${a.dataset.listen}"]`);if(n)n.textContent=fixed(Math.max(0,a.currentTime-begin))+' / '+fixed(end-begin);const s=document.querySelector(`[data-seek="${a.dataset.listen}"]`);if(s)s.value=Math.max(0,a.currentTime-begin);});
  a.addEventListener('ratechange',()=>{if(a.playbackRate!==1)a.playbackRate=1;});
  a.addEventListener('error',()=>{const n=document.querySelector(`[data-audio-error="${a.dataset.listen}"]`);if(n)n.textContent='原音没加载出来，请重新打开本页；仍然不行就勾选播放故障，不要猜答案。';});});
 document.querySelectorAll('audio').forEach(a=>a.addEventListener('play',()=>{
  if(recording){a.pause();toast('请先停止并保存录音，再播放音频。');return;}
  document.querySelectorAll('audio').forEach(o=>{if(o!==a)o.pause();});
  if(!a.dataset.listen)return;
  const t=task(a.dataset.mode);if(!t.startedAt){a.pause();return;}
  if(baselineNeeded(a.dataset.mode,t)){a.pause();toast('请先录开口基线，再播放听力。');return;}
  if(!t.snapshot){if(!t.flags.modelExposedAt){t.flags.modelExposedAt=new Date().toISOString();const b=PACKETS[profile][a.dataset.mode].baseline;if(b)document.querySelectorAll(`[data-record="${a.dataset.mode}:${b.id}"] button,[data-upload="${a.dataset.mode}:${b.id}"]`).forEach(el=>el.disabled=true);}t.flags.plays[a.dataset.listen]=(t.flags.plays[a.dataset.listen]||0)+1;save();const c=document.querySelector(`[data-plays="${a.dataset.listen}"]`);if(c)c.textContent=t.flags.plays[a.dataset.listen];}
 }));
}

async function attachClip(group,id,blob){
 const originProfile=profile,originRecord=record;
 if(group==='guided'&&record.tasks.fri?.startedAt)throw Error('③已经开始，跟练不能再改。');
 if(group!=='guided'){const t=task(group),b=PACKETS[profile][group].baseline;if(t.snapshot)throw Error('原答已锁定，请到跟练里补录。');if(b&&id===b.id&&(t.flags.modelExposedAt||t.flags.baselineUnmeasured))throw Error('已经播放过听力或标了未测，开口基线不能再改。');}
 if(blob.size>MAX_BYTES)throw Error('音频超过3MB，请录短一些或压缩后再上传。');
 const ab=await blob.arrayBuffer(),ctx=new AudioContext();let duration;try{duration=(await ctx.decodeAudioData(ab.slice(0))).duration;}finally{await ctx.close();}
 if(!(duration>=.4&&duration<=MAX_SEC+.6))throw Error('音频要有声音，最长120秒。请重新录或上传。');
 if(profile!==originProfile||record!==originRecord)throw Error('姓名已切换，录音没有关联上，请在原来的姓名下重试。');
 const key=profile+':'+group+':'+id+':'+crypto.randomUUID(),type=blob.type||'audio/webm';
 await putClip({key,blob,type,duration,bytes:blob.size,createdAt:new Date().toISOString()});
 const target=group==='guided'?record.guided:task(group);target.audio[id]={key,type,duration,bytes:blob.size};
 if(group==='guided')delete record.guided.savedAt;
 if(!save())throw Error('录音已存，但答卷没保存上；请先下载并检查浏览器空间。');
}
async function startRecord(group,id){
 if(recording)throw Error('请先停止当前录音。');
 if(group==='guided'){if(record.tasks.fri?.startedAt)throw Error('③已经开始，跟练不能再改。');if(!record.guided.startedAt)throw Error('请先点「开始15分钟跟练」。');}
 else if(!task(group).startedAt||task(group).snapshot)throw Error('请先开始作答；锁定后的原答不能覆盖。');
 stopSound();recording={pending:true,group,id};let stream;
 try{stream=await navigator.mediaDevices.getUserMedia({audio:true});}catch(e){recording=null;throw Error(e.name==='NotAllowedError'?'麦克风没有授权。请在地址栏允许麦克风后重试，也可以上传已有音频。':'麦克风暂时用不了，请检查是否连接或被占用，也可以上传已有音频。');}
 try{
  const type=['audio/webm;codecs=opus','audio/mp4','audio/webm'].find(t=>MediaRecorder.isTypeSupported(t)),rec=new MediaRecorder(stream,type?{mimeType:type}:{}),chunks=[];
  recording={group,id,stream,rec,chunks,startedAt:new Date().toISOString()};
  rec.ondataavailable=e=>{if(e.data.size)chunks.push(e.data);};
  rec.onstop=async()=>{const r=recording;try{await attachClip(group,id,new Blob(chunks,{type:rec.mimeType}));toast(r?.autoStopped?'已到120秒，录音已自动保存。请试听。':'录音已保存，请试听确认有声音。');}catch(e){showError(e);}finally{stream.getTracks().forEach(t=>t.stop());clearTimeout(r?.timeout);recording=null;render();}};
  rec.start();
  recording.timeout=setTimeout(()=>{if(rec.state==='recording'){recording.autoStopped=true;rec.stop();}},MAX_SEC*1000);
  const box=document.querySelector(`[data-record="${group}:${id}"]`),st=box.querySelector('[data-record-status]');
  st.textContent='正在录音 00:00 · 还剩 02:00';st.className='recording';box.querySelector('[data-action="record"]').disabled=true;box.querySelector('[data-action="stop-record"]').disabled=false;
 }catch(e){stream.getTracks().forEach(t=>t.stop());recording=null;throw e;}
}
function finish(mode,force=false){
 const t=task(mode);if(recording)throw Error('请先停止并保存录音。');
 const list=missing(profile,mode,t);
 if(list.length&&!force){document.querySelector('#missing-notice').innerHTML=`<div class="notice warn">还缺：${list.map(esc).join('、')}。能补的请先补上。<p><button class="secondary" data-action="finish-partial" data-mode="${mode}">做不了，按未完成锁定</button></p></div>`;return;}
 record.tasks[mode]=freeze(t,new Date().toISOString(),mode==='fri'?'transfer-after-guidance':'initial-independent');
 if(mode==='fri'){record.tasks.fri.snapshot.sourceAttemptId=record.tasks.wed?.snapshot?.attemptId||null;record.tasks.fri.snapshot.guidanceSavedAt=record.guided.savedAt||null;}
 save();render();document.querySelector('#feedback')?.scrollIntoView({behavior:'instant'});
}
function blob64(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(r.result.split(',')[1]);r.onerror=()=>rej(Error('录音导出失败，请保留页面重试。'));r.readAsDataURL(blob);});}
function download(name,data,type='application/json'){const blob=new Blob([typeof data==='string'?data:JSON.stringify(data,null,2)],{type}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
async function packageAll(){
 const copy=clone(record),clips={},keys=new Set();
 for(const[mode,t]of Object.entries(copy.tasks)){for(const a of Object.values(t.snapshot?.audio||t.audio||{}))keys.add(a.key);if(t.snapshot)t.feedback=evaluate(profile,mode,t.snapshot);}
 for(const a of Object.values(copy.guided.audio||{}))keys.add(a.key);
 for(const key of keys){const c=await getClip(key);if(!c)throw Error('本机找不到已关联的录音，下载中止。请保留页面，检查浏览器存储。');clips[key]={type:c.type,data:await blob64(c.blob),bytes:c.bytes,duration:c.duration};}
 return exportPackage(profile,copy,clips);
}

app.addEventListener('paste',e=>{const el=e.target,id=el.dataset?.answer||(el.dataset?.guided&&'guided_'+el.dataset.guided)||(el.dataset?.reflect&&'reflect_'+el.dataset.reflect);if(!id)return;const n=(e.clipboardData?.getData('text')||'').length,p=(record.pastes[id]??={count:0,chars:0,at:[]});p.count++;p.chars+=n;p.at.push(new Date().toISOString());save();});
app.addEventListener('input',e=>{const el=e.target;
 if(el.dataset.seek){const a=document.querySelector(`audio[data-listen="${el.dataset.seek}"]`);a.currentTime=Number(a.dataset.begin)+Number(el.value);}
 else if(el.dataset.answer){const t=task(el.dataset.mode);if(t.snapshot||!t.startedAt)return;t.answers[el.dataset.answer]=el.type==='radio'||el.tagName==='SELECT'?(el.value===''?'':Number(el.value)):el.value;save();}
 else if(el.dataset.guided){if(record.tasks.fri?.startedAt){render();return;}record.guided.answers[el.dataset.guided]=el.value;delete record.guided.savedAt;save();}
 else if(el.dataset.reflect){record.reflect.answers[el.dataset.reflect]=el.value;record.reflect.updatedAt=new Date().toISOString();save();}
});
app.addEventListener('change',async e=>{const el=e.target;try{
 if(el.id==='profile'){if(recording){el.value=profile;throw Error('先停止并保存录音，再切换姓名。');}stopSound();profile=el.value;localStorage.setItem(PREFIX+'profile',profile);record=read();record.version=VERSION;render();}
 else if(el.id==='device-check'){task(route).flags.deviceConfirmed=el.checked;save();}
 else if(el.id==='audio-failure'){task(el.dataset.mode).flags.audioFailure=el.checked;save();}
 else if(el.dataset.gcheck){record.guided.checks[el.dataset.gcheck]=el.checked;save();}
 else if(el.dataset.upload&&el.files[0]){if(recording)throw Error('请先停止当前录音。');const[group,id]=el.dataset.upload.split(':');await attachClip(group,id,el.files[0]);toast('音频已保存，请试听。');render();}
}catch(err){showError(err);}});
app.addEventListener('click',async e=>{const b=e.target.closest('button');if(!b||b.disabled)return;try{
 const act=b.dataset.action;
 if(b.dataset.route){if(recording)throw Error('请先停止并保存录音，再切换页面。');stopSound();route=b.dataset.route;render();window.scrollTo(0,0);}
 else if(act==='baseline-skip'){const t=task('wed');if(!t.startedAt||t.snapshot)throw Error('请先开始①。');t.flags.baselineUnmeasured=true;save();render();}
 else if(act==='original-play'){const a=document.querySelector(`audio[data-listen="${b.dataset.audio}"]`);if(a.paused){if(a.currentTime>=Number(a.dataset.end))a.currentTime=Number(a.dataset.begin);a.playbackRate=1;await a.play();}else a.pause();}
 else if(act==='original-reset'){const a=document.querySelector(`audio[data-listen="${b.dataset.audio}"]`);a.currentTime=Number(a.dataset.begin);}
 else if(act==='review'){if(recording)throw Error('先停止录音。');reviewer=!reviewer;if(reviewer){for(const t of Object.values(record.tasks))if(!t.snapshot)t.flags.reviewExposed=true;}save();render();}
 else if(act==='start'){const t=task(b.dataset.mode);if(!t.flags.deviceConfirmed)throw Error('请先听试音，并勾选「我听到了试音」。');t.startedAt??=new Date().toISOString();save();render();}
 else if(act==='record')await startRecord(b.dataset.group,b.dataset.id);
 else if(act==='stop-record'){if(recording?.rec?.state==='recording'){b.disabled=true;const s=document.querySelector('.recording');if(s)s.textContent='正在保存录音…';recording.rec.stop();}}
 else if(act==='finish')finish(b.dataset.mode);
 else if(act==='finish-partial')finish(b.dataset.mode,true);
 else if(act==='download'){if(recording)throw Error('先停止并保存录音，再下载。');const p=await packageAll();download(`温德兰_Vol.4_${p.completion.complete?'完整答卷':'草稿'}_${PROFILES[profile].name}_${new Date().toISOString().slice(0,10)}.json`,p);toast(p.completion.complete?'完整答卷已下载。请发到英语部群，再在自己的文件消息下 @月神。':'草稿已下载，缺项会如实标出。能补的请补完再交。');}
 else if(act==='copy'){const p=clone(record);for(const t of Object.values(p.tasks)){delete t.audio;if(t.snapshot)delete t.snapshot.audio;}delete p.guided.audio;const text='温德兰Vol.4 · '+PROFILES[profile].name+'\n文字不含录音，不是完整答卷。\n'+JSON.stringify(p,null,2);try{await navigator.clipboard.writeText(text);toast('文字已复制，不含录音。');}catch{download('Vol.4文字答案.txt',text,'text/plain;charset=utf-8');}}
 else if(act==='guided-start'){if(record.tasks.fri?.startedAt)throw Error('③已经开始，跟练不能再改。');record.guided.startedAt??=new Date().toISOString();record.guided.sourceAttemptId=task('wed').snapshot?.attemptId||null;delete record.guided.endedAt;save();render();}
 else if(act==='save-guided'){if(record.tasks.fri?.startedAt)throw Error('③已经开始，跟练不能再改。');if(!record.guided.startedAt)throw Error('请先开始跟练计时。');if(!hasValue(record.guided.answers.text)||GUIDED[profile].speaking.some(q=>!record.guided.audio[q.id]))throw Error('跟练还缺文字或要求的录音，先补上再保存。');record.guided.endedAt=new Date().toISOString();record.guided.stage=reviewer?'owner-review-guided-practice':'guided-after-feedback';record.guided.savedAt=new Date().toISOString();save();render();toast('跟练已保存，首次原答没有改动。');}
}catch(err){showError(err);}});

setInterval(()=>{document.querySelectorAll('[data-start]').forEach(e=>{if(e.dataset.start)e.textContent=mmss(sinceStart(e.dataset.start));});if(recording?.startedAt&&recording.rec?.state==='recording'){const s=sinceStart(recording.startedAt),el=document.querySelector('.recording');if(el)el.textContent='正在录音 '+mmss(s)+' · 还剩 '+mmss(Math.max(0,MAX_SEC-s));}},1000);
window.addEventListener('beforeunload',e=>{if(recording){e.preventDefault();e.returnValue='录音还没保存';}});
window.V4_WORKBENCH={getRecord:()=>clone(record),profile:()=>profile,packageAll};
render();
