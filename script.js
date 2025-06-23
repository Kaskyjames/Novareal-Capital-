function openLightbox(imageUrl) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = imageUrl;
  lightbox.style.display = "flex";
}

document.addEventListener("click", function (e) {
  if (e.target.id === "lightbox") {
    document.getElementById("lightbox").style.display = "none";
  }
});

let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev-testimonial');
const nextButton = document.getElementById('next-testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, idx) => {
    testimonial.classList.remove('active');
    if (idx === index) {
      testimonial.classList.add('active');
    }
  });
}

prevButton.addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
});

nextButton.addEventListener('click', () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
});

// Initialize first testimonial
showTestimonial(currentTestimonialIndex);



function togglePlan(card) {
  card.classList.toggle('active');
}

function openLightbox(src) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// ScrollReveal animation triggers
ScrollReveal().reveal('.fade-in', {
  duration: 1200,
  distance: '50px',
  easing: 'ease-in-out',
  origin: 'bottom',
  interval: 100
});

ScrollReveal().reveal('.fade-in.delay', {
  delay: 300
});

ScrollReveal().reveal('.fade-in.delay-2', {
  delay: 600
});
