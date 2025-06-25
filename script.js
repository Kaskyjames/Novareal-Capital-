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

<script>
  // Portfolio Growth Chart (Line)
  new Chart(document.getElementById('growthChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Portfolio Growth (%)',
        data: [4.2, 5.6, 6.8, 7.4, 9.1, 12.6],
        borderColor: '#ffd700',
        backgroundColor: 'rgba(255, 215, 0, 0.2)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#fff' } } },
      scales: {
        x: { ticks: { color: '#ccc' } },
        y: { ticks: { color: '#ccc' } }
      }
    }
  });

  // Monthly Signups (Bar)
  new Chart(document.getElementById('signupChart'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'New Investors',
        data: [38, 45, 52, 66, 74, 88],
        backgroundColor: '#ffd700'
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#fff' } } },
      scales: {
        x: { ticks: { color: '#ccc' } },
        y: { ticks: { color: '#ccc' } }
      }
    }
  });

  // Investment Plan Distribution (Doughnut)
  new Chart(document.getElementById('planChart'), {
    type: 'doughnut',
    data: {
      labels: ['Starter', 'Growth', 'Legacy', 'Global', 'Premier'],
      datasets: [{
        data: [12, 28, 24, 18, 18],
        backgroundColor: ['#ffd700', '#ff9800', '#4caf50', '#2196f3', '#9c27b0']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { labels: { color: '#fff' } } }
    }
  });
</script>
