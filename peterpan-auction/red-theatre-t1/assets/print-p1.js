(()=>{'use strict';
const original=window.KIT.render,root=document.querySelector('#pages');
const kinds=window.KIT.kinds;kinds.bags='积分袋标签（一刀两张）';
window.P1_OPTIONS={couponLayout:'grid40'};
function apply(){
 for(const cover of root.querySelectorAll('.classcover'))cover.closest('.sheet').remove();
 const bag=root.querySelector('.bags');if(bag){const labels=[...bag.children].slice(0,6).map(el=>{const c=el.cloneNode(true);c.classList.add('card');c.querySelectorAll('img,.bagline').forEach(x=>x.remove());c.querySelectorAll('p').forEach(x=>x.remove());c.insertAdjacentHTML('beforeend','<p>班级：____________________</p><p>数量：________　经手：________</p><p>复核：________　日期：________</p>');return c.outerHTML;});bag.closest('.sheet').outerHTML=Array.from({length:3},(_,i)=>'<article class="sheet dualsheet" data-title="积分袋标签"><div class="pagebody"><div class="duo">'+labels.slice(i*2,i*2+2).join('')+'</div></div></article>').join('');}
 for(const c of root.querySelectorAll('.lot')){const label=c.querySelector('.cardhead small')?.textContent.split('/')[0].trim();if(label)c.querySelector('.cardbody').insertAdjacentHTML('afterbegin','<p class="kindline">'+label+'</p>');}
 for(const c of root.querySelectorAll('.sheet[data-title="主持与协助提示卡"]')){c.classList.add('host');[...c.querySelectorAll('.card')].forEach((el,i)=>el.querySelector('.cardbody').insertAdjacentHTML('afterbegin','<p class="kindline">'+(i?'协助老师':'主持人')+'</p>'));}
 for(const sign of root.querySelectorAll('.sign')){sign.querySelectorAll('p').forEach(el=>{if(el.textContent.includes('MAKE A CHOICE'))el.remove();});sign.querySelector('.signcopy').insertAdjacentHTML('afterbegin','<p class="zone-name">'+sign.dataset.title+'</p>');}
root.querySelectorAll('.pagehead,.pagefoot,.cardhead,.sideart,.badge,.wordmark,img').forEach(el=>el.remove());
 for(const s of root.querySelectorAll('.sheet')){if(s.querySelector('.duo'))s.classList.add('dualsheet');if(s.querySelector('.coupons'))s.classList.add('couponsheet');}
 for(const grid of root.querySelectorAll('.coupons')){const sample=grid.firstElementChild.cloneNode(true);grid.innerHTML='';for(let i=0;i<40;i++){const c=sample.cloneNode(true);c.querySelector('.sub span:last-child').textContent=String(i+1).padStart(2,'0');grid.append(c);}}
 for(const el of root.querySelectorAll('.rulesblock')){if(el.textContent.includes('69人备量'))el.innerHTML='<b>69人备量：</b>10分券690张、5分券552张、1分券690张。全部新印按每页40张：分别18/14/18页，可得720/560/720张；先扣库存再决定印量。';}
 const n=root.querySelectorAll('.sheet').length;document.querySelector('#count').textContent=n+'页 · A4实际大小';window.P1_STATE={pages:n,cards:root.querySelectorAll('.duo>.card').length,couponLayout:window.P1_OPTIONS.couponLayout};
 const k=document.querySelector('#kind').value;const q=new URLSearchParams();q.set('edition','display');q.set('kind',k);q.set('class',document.querySelector('#classpick').value);document.querySelector('#go-display').href='materials.html?'+q;document.querySelector('#cutmode').textContent=k.startsWith('coin')?'积分券40张/页，共享直线裁切；不需修四边':k==='bags'||root.querySelector('.duo')?'中间148.5mm切一刀，外侧不修边':'整张直接使用，不需要裁切';
}
function render(){original();apply();}window.KIT.render=render;document.querySelector('#kind').onchange=render;document.querySelector('#classpick').onchange=render;
document.querySelector('#kind option[value=bags]').textContent=kinds.bags;
apply();window.P1={apply,render};
})();
