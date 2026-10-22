'use strict';
// Static learning mode: all records stay on this browser; no submission server.
const WL_LOCAL = (()=>{
 const prefix='wl-static-v02:';
 const read=(k,fallback=null)=>{try{return JSON.parse(localStorage.getItem(prefix+k))??fallback;}catch{return fallback;}};
 const write=(k,v)=>{try{localStorage.setItem(prefix+k,JSON.stringify(v));}catch{throw Error('当前浏览器空间不足。请先下载完整答卷，勿关闭页面。');}};
 const clone=x=>JSON.parse(JSON.stringify(x));
 const source=window.WL_SOURCE;
 const lesson=()=>({...source,sections:source.sections.map(s=>({...s,questions:s.questions.map(({answer,explanation,tag,...q})=>q)}))});
 let active=read('session');
 function score(answers,flags){
  const norm=x=>String(x??'').normalize('NFKC').toLowerCase().trim().replace(/[.!?。]+$/,'').replace(/\s+/g,' ');
  const items=source.sections.slice(0,3).flatMap(s=>s.questions.map(q=>{const v=answers[q.id];const untested=s.id==='listening'&&flags.audioFailure;let correct=q.type==='choice'?v===q.answer:q.type==='short'?typeof v==='string'&&norm(v).split(' ').length<=q.maxWords&&q.answer.includes(norm(v)):Array.isArray(v)&&v.length===q.answer.length&&v.every((x,i)=>x===q.answer[i]);return {id:q.id,section:s.id,tag:q.tag,prompt:q.prompt,options:q.options,rows:q.rows,answer:q.answer,value:v??null,correct:untested?null:correct,points:untested?null:correct?q.points:0,max:q.points,explanation:q.explanation};}));
  const weaknesses=Object.entries(source.topics).map(([tag,t])=>{const qs=items.filter(i=>i.tag===tag&&i.points!==null);return {tag,...t,count:qs.length,missed:qs.filter(i=>!i.correct).length};}).filter(t=>t.missed).sort((a,b)=>b.missed/b.count-a.missed/a.count).slice(0,3).map(({answer,...t})=>t);
  return {items,objective:items.reduce((n,i)=>n+(i.points??0),0),max:items.filter(i=>i.points!==null).reduce((n,i)=>n+i.max,0),weaknesses,transcripts:source.scripts,subjective:'pending'};
 }
 async function route(path,data){
  const [r,query='']=path.split('?'),params=new URLSearchParams(query);
  if(r==='status')return {local:false,version:source.version,static:true};
  if(r==='login'){const name=String(data.code||'').trim().slice(0,40);if(!name)throw Error('请填写老师姓名');const bytes=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(name));active={id:'teacher-'+Array.from(new Uint8Array(bytes)).slice(0,10).map(x=>x.toString(16).padStart(2,'0')).join(''),name,role:'teacher'};write('session',active);return {user:active};}
  if(r==='logout'){active=null;localStorage.removeItem(prefix+'session');return {ok:true};}
  if(!active)throw Error('请先填写老师姓名');
  const k=s=>active.id+':'+s, all=()=>read(k('submissions'),[]);
  if(r==='session')return {user:active};if(r==='lesson')return lesson();
  if(data?.userId&&data.userId!==active.id)throw Error('当前填写者已改变，请重新进入');
  if(r==='start'){let t=read(k('attempt:'+data.id));if(!t){t={startedAt:new Date().toISOString(),timerSource:'device'};write(k('attempt:'+data.id),t);}return t;}
  if(r==='draft'){if(!data)return read(k('draft'),{});write(k('draft'),data);return {savedAt:new Date().toISOString()};}
  if(r==='submit'){
   const prior=all().find(x=>x.id===data.id);if(prior)return {saved:true,duplicate:true,submission:prior};
   const t=read(k('attempt:'+data.id));if(!t)throw Error('请先点击开始测评');const endedAt=new Date().toISOString();
   const row={...clone(data),userId:active.id,name:active.name,version:source.version,kind:'baseline',at:endedAt,startedAt:t.startedAt,endedAt,timerSource:'device',elapsedSeconds:Math.max(0,Math.floor((Date.parse(endedAt)-Date.parse(t.startedAt))/1000)),report:score(data.answers,data.flags),review:null};write(k('submissions'),[row,...all()]);return {saved:true,submission:row};
  }
  if(r==='submissions'){const seen=new Set();const rows=all().slice().reverse().map(x=>{const first=!seen.has(x.kind);seen.add(x.kind);return {...x,first,objective:x.report?.objective,max:x.report?.max};});return {submissions:rows.reverse()};}
  if(r==='submission'){const row=all().find(x=>x.id===params.get('id'));if(!row)throw Error('本浏览器找不到这份答卷，请使用原设备');return clone(row);}
  if(r==='practice'){const t=source.topics[data.tag];if(!t)throw Error('练习不存在');const h=read(k('practice'),[]);h.push({tag:data.tag,answer:data.answer,correct:data.answer===t.answer,at:new Date().toISOString(),stage:'guided-transfer'});write(k('practice'),h);return {correct:data.answer===t.answer,explanation:t.explanation,note:'讲解后的新题记录单列，不覆盖首次答卷。'};}
  if(r==='challenge'){const prior=all().find(x=>x.id===data.id);if(!prior){const row={id:data.id,userId:active.id,name:active.name,kind:data.kind,answers:{text:data.text},version:source.version,at:new Date().toISOString(),review:null};write(k('submissions'),[row,...all()]);}return {saved:true,id:data.id};}
  throw Error('这个操作不适用于静态版');
 }
 return {route,source,practices:()=>active?read(active.id+':practice',[]):[]};
})();
