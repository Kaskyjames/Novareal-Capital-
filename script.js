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
