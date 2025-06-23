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

function toggleDetails(card) {
  card.classList.toggle("expanded");
}
