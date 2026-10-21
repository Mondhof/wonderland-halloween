(()=>{'use strict';
const C=window.COURSE,$=s=>document.querySelector(s),esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const detail=(p,s)=>(s.details[p.displayNumber]??={step:0});
const button=(text,action,attr='',cls='action')=>`<button class="${cls}" data-action="${action}" ${attr}>${text}</button>`;
const tabs=(labels,d,act='f-step')=>`<div class="tabs">${labels.map((x,i)=>button(esc(x),act,`data-index="${i}" aria-pressed="${(d.step||0)===i}"`,(d.step||0)===i?'active':'')).join('')}</div>`;
const title=(a,b='',small='')=>`<div class="display-head">${small?`<small>${small}</small>`:''}<h1>${a}${b?`<span>${b}</span>`:''}</h1></div>`;
const photo=(file,alt,cls='')=>`<img class="subject ${cls}" src="assets/${file}" alt="${alt}">`;
const feedback=d=>`<p class="feedback" role="status">${esc(d.note||'')}</p>`;
const subjects=[['props-cutout.webp','故事本'],['pencils.webp','彩铅'],['item-2.webp','拼图']];
function choose(p,s){const a=s.answers[p.displayNumber];return a===undefined?`<div class="choice-list">${p.items.map((x,i)=>button(`<b>${String.fromCharCode(65+i)}</b><span>${esc(x)}</span><i>说理由，再点 ↗</i>`,'f-choose',`data-index="${i}"`,'choice-line')).join('')}</div>`:`<div class="choice-response"><small>你的考虑 · ${String.fromCharCode(65+a)}</small><h2>${esc(p.items[a])}</h2><p>${esc(p.answers[a])}</p>${button('返回，换一种考虑 ↻','f-retry')}</div>`;}
let clock=null;const stopTimer=()=>{if(clock){clearInterval(clock);clock=null;}};
const clockText=n=>`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
const timer=(p,d)=>`<div class="timer-face"><small>时间留给两个人</small><strong id="clock">${clockText(d.remaining??p.seconds??3)}</strong><div>${button('开始 / 暂停','f-timer')}${button('重新计时','f-timer-reset','','quiet')}</div><span>只提醒 · 不自动翻页</span></div>`;
function core(p,s){const n=p.displayNumber,d=detail(p,s),k=d.step||0;
switch(n){
case 2:return `${title('今天，','你来决定。','不是比谁拍得多')}<div class="mission-type">${['说','听','选'].map((t,i)=>button(t,'f-step',`data-index="${i}"`,i===k?'selected':'')).join('')}</div><div class="mission-copy"><small>0${k+1} / 今天的本领</small><h2>${['说具体','听明白','有主见'][k]}</h2><p>${esc(p.items[k].split('：').slice(1).join('：'))}</p><span>跟同伴说：今天我想练习……</span></div>`;
case 3:return `${title('爸妈，','先听我说。')}<div class="parent-photo">${photo('writing.webp','桌上留给孩子的记录空间')}</div><div class="parent-task"><small>家长的观察任务</small><h2>${['先等三秒','记一句原话','只问一个问题'][k]}</h2><p>${['把回答留给孩子。','记下他实际说过的话。','说完，再问一个具体细节。'][k]}</p>${tabs(['等一等','记原话','问一个'],d)}${k===0?`<div class="three-second"><b id="clock">${d.remaining??3}</b>${button('一起等三秒','f-timer')}</div>`:''}</div>`;
case 5:return `${title('先问？','先看？','替小潘作第一次选择')}<div class="fork-symbol">↗</div>${choose(p,s)}`;
case 6:return `<div class="paddle-prop"><b>08</b><span>我的号码</span></div>${title('号码，','不是金额。')}<div class="number-price"><small>这一轮报价</small><b>30<span>积分</span></b><div>${button('08是编号','f-number','data-index="0"')}${button('08是要付的币','f-number','data-index="1"','quiet')}</div>${feedback(d)}</div>`;
case 7:{const i=d.object;if(i===undefined)return `${title('三件物品，','怎么用？')}<div class="object-gallery">${subjects.map(([im,name],j)=>button(`${photo(im,name,j<2?'cutout':'')}<b>${name}</b><span>点开用途 ↗</span>`,'f-gallery',`data-index="${j}"`,'gallery-piece')).join('')}</div><p class="small-caption">练习类别示意 · 不是正式采购清单</p>`;return `${title(subjects[i][1],'你会怎么用？')}<div class="gallery-focus">${photo(subjects[i][0],subjects[i][1],i<2?'cutout':'')}</div><div class="gallery-use"><small>一种可能的用途</small><h2>${esc(p.items[i].split('：')[1])}</h2><p>你准备在什么时候用它？</p>${button('返回，看另外两件 ↻','f-gallery-back')}</div>`;}
case 8:return `${title('先看见，','再下结论。')}<div class="inspect-photo">${photo('props-cutout.webp','本子、笔袋与铅笔的可见细节','cutout')}</div><div class="inspect-prompt">${tabs(['名字','特点','用途'],d)}<h2>${esc(p.items[k])}</h2><p>${d.open?esc(p.answers[k]):'先指给同伴看，再说你的发现。'}</p>${button(d.open?'收起提示':'看看表达提示 ↗','f-open')}</div>`;
case 9:return `<div class="because-type">因为<span>把自己的需要，接在后面。</span></div><div class="writing-slip"><small>我想选……因为……</small><label for="reason-text">口头说，或记一句自己的理由。</label><textarea id="reason-text" maxlength="120" placeholder="我准备怎样用它？">${esc(s.text.reason||'')}</textarea><div class="prompt-tabs">${['什么时候？','做什么？','适合我？'].map((x,i)=>button(x,'f-reason',`data-index="${i}"`,'quiet')).join('')}</div>${button('看看方法示范','f-reason-demo','','quiet')}${feedback(d)}</div>`;
case 10:case 29:return `${title(n===10?'A说，':'两个人，',n===10?'B来听。':'四个动作。')}<div class="role-letters"><b>${d.swap?'B':'A'}</b><span>⇄</span><b>${d.swap?'A':'B'}</b><small>说的人　　　　　　　听的人</small></div><div class="partner-instructions"><p>${n===10?'30秒说理由，30秒复述。':'说理由 → 复述 → 确认 → 提问 → 回答'}</p>${button('交换角色 ⇄','f-swap')}${timer(p,d)}</div>`;
case 11:return `${title('新信息，','新的决定。','小潘的故事 / 可以改变，也可以保持')}<div class="change-left ${d.open?'past':''}">${photo('pencils.webp','原来想选择的彩铅','cutout')}<span>原来：朋友喜欢，我也想选。</span></div><div class="change-middle">→</div><div class="change-right">${d.open?`${photo('props-cutout.webp','后来更想记录故事','cutout')}<h2>家中已有两盒彩铅。<br>我更想记录故事。</h2>`:button('看看他发现了什么 ↗','f-open','','reveal-note')}</div><p class="change-question">${d.open?'有了什么新信息？你会维持，还是改变？':'先说：原来，他为什么想选彩铅？'}</p>`;
default:return window.FULL_LATER?.(p,s,{detail,button,tabs,title,photo,feedback,subjects,choose,timer})||'';
}}
function renderPage(p,s,h){return `${h.logo()}<span class="edition">${esc(p.chapter)} / ${p.minutes}分钟</span><div class="full-content">${core(p,s)}</div>${h.folio('彼得潘 · 表达与选择',String(p.displayNumber).padStart(2,'0'))}`;}
function closePanels(){document.querySelectorAll('aside').forEach(e=>e.hidden=true);}
function panel(id){const open=!$('#'+id).hidden;closePanels();$('#'+id).hidden=open;}
function renderNotes(p,s){let before=C.pages.slice(0,p.displayNumber-1).reduce((a,x)=>a+x.minutes,0);$('#notes').hidden=!s.notes;$('#notes').innerHTML=`${button('关闭 ×','notes','','close-notes')}<small>v1.3 · 第${p.displayNumber}页 / ${before}—${before+p.minutes}分钟</small><h2>${esc(p.title.replace('\n',' '))}</h2><h3>学生动作</h3><p>${esc(p.ask)}</p><h3>点击顺序</h3><p>${esc(p.operation)}</p><h3>老师示范与组织</h3><p>${esc(p.guide)}</p><h3>回应与纠错</h3><p>${esc(p.feedback)}</p><h3>下一句</h3><p>${esc(p.nextline)}</p><p class="note-boundary">本机HTML v1.3 · 未转PPT。演示数字不代替现场规则，网页不处理真实积分。</p>`;}
function renderPanels(p,s){$('#directory').innerHTML=`${button('关闭 ×','close-panel','','close-notes')}<h2>课程目录 · 33页 / 90分钟</h2>${C.pages.slice(0,window.BUILD_LIMIT||33).map(x=>button(`<b>${String(x.displayNumber).padStart(2,'0')}</b> ${esc(x.title.replace('\n',' '))}`,'f-goto',`data-page="${x.displayNumber}"`,'directory-page')).join('')}`;$('#theme-link').href=(document.documentElement.dataset.theme==='red'?'b':'a')+'.html#p'+p.displayNumber;}
function reset(p,s){stopTimer();delete s.details[p.displayNumber];delete s.answers[p.displayNumber];}
function handle(a,b,p,s,api){const d=detail(p,s),i=Number(b.dataset.index);
if(a==='f-step'){stopTimer();d.step=i;d.open=false;d.note='';api.render();return true;}
if(a==='f-choose'){s.answers[p.displayNumber]=i;api.render();return true;}
if(a==='f-retry'){delete s.answers[p.displayNumber];api.render();return true;}
if(a==='f-open'){d.open=!d.open;api.render();return true;}
if(a==='f-number'){d.note=i===0?'08是编号。请再说：“我是08号，我出30积分。”':'再看看：08告诉大家“我是谁”，30才是这次报价。';api.render();return true;}
if(a==='f-gallery'){d.object=i;api.render();return true;}
if(a==='f-gallery-back'){delete d.object;api.render();return true;}
if(a==='f-reason'){d.note=['你准备在什么时候用它？补一个具体时间。','你准备用它做什么？说一个看得见的动作。','它和你最近的需要有什么关系？不用和同伴一样。'][i];api.render();return true;}
if(a==='f-reason-demo'){d.note=d.note?'':'方法示例：我想用本子记录故事，因为我最近常想到新人物。换成你自己的需要再说。';api.render();return true;}
if(a==='f-swap'){stopTimer();d.swap=!d.swap;d.remaining=p.seconds;api.render();return true;}
if(a==='f-timer'){if(clock){stopTimer();return true;}if((d.remaining??0)<=0)d.remaining=p.seconds||3;clock=setInterval(()=>{d.remaining=Math.max(0,d.remaining-1);const el=$('#clock');if(el)el.textContent=p.displayNumber===3?String(d.remaining):clockText(d.remaining);if(d.remaining<=0){stopTimer();if(el)el.textContent=p.displayNumber===3?'请听孩子说':'请手动交换';}api.save();},1000);return true;}
if(a==='f-timer-reset'){stopTimer();d.remaining=p.seconds||3;api.render();return true;}
if(a==='directory'){s.notes=false;panel('directory');return true;}
if(a==='notes'){closePanels();return false;}
if(a==='close-panel'){closePanels();s.notes=false;return true;}
if(a==='f-goto'){closePanels();s.notes=false;api.go(Number(b.dataset.page));return true;}
if(a==='present'){closePanels();s.notes=false;document.body.classList.add('present');api.resize();return true;}
return window.FULL_HANDLE?.(a,b,p,s,api)||false;
}
function input(e,p,s,api){const id=e.target.id;if(id==='reason-text'){s.text.reason=e.target.value;api.save();}window.FULL_INPUT?.(e,p,s,api);}
window.FULL_DECK={renderPage,renderNotes,renderPanels,reset,handle,input,stopTimer,closePanels,detail};
})();
