// =====================
// Toggle Investment Plan Details
// =====================
function toggleDetails(card) {
  card.classList.toggle('expanded');
}

// =====================
// Scroll to Top Button
// =====================
const scrollBtn = document.getElementById("scrollBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

scrollBtn?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =====================
// Fade In on Scroll (Cards, Sections, etc.)
// =====================
const fadeCards = document.querySelectorAll('.fade-card, .scroll-fade');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
});

fadeCards.forEach(card => observer.observe(card));

// =====================
// Testimonial Slider
// =====================
document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll('.testimonial');
  let index = 0;

  function showTestimonial() {
    testimonials.forEach((t, i) => {
      t.classList.remove('active');
    });
    testimonials[index].classList.add('active');
    index = (index + 1) % testimonials.length;
  }

  if (testimonials.length > 0) {
    showTestimonial();
    setInterval(showTestimonial, 6000);
  }
});

const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 120; // adjust offset
  navLinks.forEach(link => {
    if (!link.hash) return;
    const section = document.querySelector(link.hash);
    if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
      link.classList.add('active-link');
    } else {
      link.classList.remove('active-link');
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
  const tSlider = document.getElementById('testimonial-slider');
  const slides = tSlider.querySelectorAll('.testimonial');
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
  }, 6000);
});
});

