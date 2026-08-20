
const m=document.getElementById('menu'), n=document.getElementById('nav');
m?.addEventListener('click',()=>n.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
