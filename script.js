
const m=document.getElementById('menu'), n=document.getElementById('nav');
m?.addEventListener('click',()=>n.classList.toggle('open'));
document.querySelectorAll('#nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
function setupCopyButton(buttonId, textId) {
  const button = document.getElementById(buttonId);
  const text = document.getElementById(textId);

  button?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(text.textContent.trim());

      const originalText = button.textContent;
      button.textContent = '已复制';

      setTimeout(() => {
        button.textContent = originalText;
      }, 1500);
    } catch (error) {
      button.textContent = '复制失败';
    }
  });
}

setupCopyButton('copyEmailBtn', 'emailText');
setupCopyButton('copyProfileEmailBtn', 'profileEmailText');
