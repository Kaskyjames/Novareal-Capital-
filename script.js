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
  
function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("Novareal Capital - Portfolio Summary", 15, 20);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  const investorName = "James Kasky";
  const investmentPlans = [
    { title: "$10,000 - Growth Investor", roi: "18%", duration: "6 months", status: "Active" },
    { title: "$25,000 - Legacy Builder", roi: "20%", duration: "12 months", status: "Completed" }
  ];

  doc.text(`Investor: ${investorName}`, 15, 35);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 15, 43);

  doc.text("Investments:", 15, 55);
  let y = 65;

  investmentPlans.forEach(plan => {
    doc.text(`• ${plan.title} – ROI: ${plan.roi} – ${plan.duration} – Status: ${plan.status}`, 20, y);
    y += 10;
  });

  doc.text("Thank you for trusting Novareal Capital.", 15, y + 15);
  doc.save("Novareal_Portfolio_Summary.pdf");
}
