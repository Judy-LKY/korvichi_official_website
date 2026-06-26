document.querySelector('.hamburger')?.addEventListener('click',()=>{const m=document.querySelector('#menu');m.style.display=m.style.display==='flex'?'none':'flex';m.style.position='absolute';m.style.top='78px';m.style.left='0';m.style.right='0';m.style.background='#fff';m.style.flexDirection='column';m.style.padding='22px 8%';m.style.boxShadow='0 20px 40px #0001';});


// V13: back-to-top and inquiry mailto helper
const backTop = document.querySelector('.backTop');
window.addEventListener('scroll', () => {
  if (!backTop) return;
  backTop.classList.toggle('show', window.scrollY > 500);
});
backTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('.jsInquiryForm').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.dataset.email || 'support@korvichi.com';
    const data = new FormData(form);
    const lines = [];
    for (const [key, value] of data.entries()) {
      if (String(value).trim()) lines.push(`${key}: ${value}`);
    }
    const subject = encodeURIComponent('Korvichi Website Inquiry');
    const body = encodeURIComponent(lines.join('\n'));
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
});
