
// /admin/admin-script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/admin/components/sidebar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("sidebar-container").innerHTML = html;
    });
});
