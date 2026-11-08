(function(){"use strict";var H=document.documentElement,$=function(s,c){return (c||document).querySelector(s)},$$=function(s,c){return [].slice.call((c||document).querySelectorAll(s))};
var RM=matchMedia('(prefers-reduced-motion: reduce)'),btn=$('#a11y-btn'),panel=$('#a11y-panel'),guide=$('#guide');if(!btn||!panel)return;
function open(o){panel.hidden=!o;btn.setAttribute('aria-expanded',String(o));if(o)$('.switch',panel).focus()}
btn.addEventListener('click',function(){open(panel.hidden)});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden){open(false);btn.focus()}});
document.addEventListener('click',function(e){if(!panel.hidden&&!panel.contains(e.target)&&!btn.contains(e.target))open(false)});
$$('.switch',panel).forEach(function(s){if(s.dataset.mode==='mo'&&RM.matches){s.setAttribute('aria-checked','true');H.classList.add('mo')}
 s.addEventListener('click',function(){var on=s.getAttribute('aria-checked')!=='true';s.setAttribute('aria-checked',String(on));H.classList.toggle(s.dataset.mode,on)})});
$$('.sizes button',panel).forEach(function(b){b.addEventListener('click',function(){$$('.sizes button',panel).forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});H.style.setProperty('--root',b.dataset.size)})});
$('#a11y-reset').addEventListener('click',function(){$$('.switch',panel).forEach(function(s){s.setAttribute('aria-checked','false');H.classList.remove(s.dataset.mode)});H.style.removeProperty('--root');$$('.sizes button',panel).forEach(function(x){x.setAttribute('aria-pressed',String(x.dataset.size==='100%'))});if(RM.matches){H.classList.add('mo');$('[data-mode="mo"]',panel).setAttribute('aria-checked','true')}});
addEventListener('pointermove',function(e){if(H.classList.contains('guide'))guide.style.top=(e.clientY-guide.offsetHeight/2)+'px'},{passive:true});
})();