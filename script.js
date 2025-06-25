// =================== LIGHTBOX FUNCTIONALITY ===================

function openLightbox(imageUrl) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  img.src = imageUrl;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("click", function (e) {
  if (e.target.id === "lightbox") {
    closeLightbox();
  }
});


// =================== TESTIMONIAL SLIDER ===================

document.addEventListener("DOMContentLoaded", function () {
  let currentTestimonialIndex = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const prevButton = document.getElementById('prev-testimonial');
  const nextButton = document.getElementById('next-testimonial');

  function showTestimonial(index) {
    testimonials.forEach((testimonial, idx) => {
      testimonial.classList.remove('active');
      testimonial.style.display = idx === index ? 'block' : 'none';
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
});


// =================== INVESTMENT PLAN TOGGLE ===================

function togglePlan(card) {
  card.classList.toggle('active');
}


// =================== SCROLLREVEAL ANIMATIONS ===================

document.addEventListener("DOMContentLoaded", () => {
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      duration: 1200,
      distance: "50px",
      easing: "ease-in-out",
      origin: "bottom",
      interval: 100,
      reset: false
    });

    sr.reveal(".fade-in");
    sr.reveal(".fade-in.delay", { delay: 300 });
    sr.reveal(".fade-in.delay-2", { delay: 600 });
  } else {
    console.warn("ScrollReveal not loaded");
  }
});

document.getElementById('tools-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('message-title').value;
  const body = document.getElementById('message-body').value;
  const action = document.getElementById('message-action').value;

  let message = `📢 ${title}: ${body}`;

  if (action === "dashboard") {
    addLog("Admin posted dashboard alert");
    alert("Dashboard message posted:\n\n" + message);
  } else if (action === "email") {
    addLog("Admin sent email blast");
    alert("Simulated email sent:\n\n" + message);
  } else if (action === "notification") {
    addLog("Admin sent app notification");
    alert("Simulated notification sent:\n\n" + message);
  }

  document.getElementById('admin-message-status').innerText = "✅ Update Sent!";
  setTimeout(() => {
    document.getElementById('admin-message-status').innerText = "";
  }, 4000);
});
  
