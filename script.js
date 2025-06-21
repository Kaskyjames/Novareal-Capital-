// Preloader
window.addEventListener('load', () => {
  const pre = document.getElementById('preloader');
  if (pre) pre.style.display = 'none';
});

// Scroll fade-in
const fadeElems = document.querySelectorAll('.fade-card, #projects, #services');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
fadeElems.forEach(el => obs.observe(el));

// Lightbox display
function openLightbox(src) {
  const lb = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lb.style.display = 'flex';
}
document.getElementById('lightbox').onclick = () => {
  document.getElementById('lightbox').style.display = 'none';
};

// Investment plan toggles
document.querySelectorAll('.plan-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('expanded'));
});

// Testimonials
const tBtns = document.querySelectorAll('#testimonial-controls button');
let current = 0;
tBtns.forEach((btn, i) => btn.addEventListener('click', () => {
  current = i;
  tBtns.forEach(b => b.style.background='transparent');
  btn.style.background='rgba(255,255,255,.1)';
}));
tBtns[0].click();
