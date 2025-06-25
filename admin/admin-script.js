
// /admin/admin-script.js
document.addEventListener("DOMContentLoaded", () => {
  fetch("/admin/components/sidebar.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("sidebar-container").innerHTML = html;
    });
});

// Investment Trend Line Chart
const ctx1 = document.getElementById('investmentTrend').getContext('2d');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Total Investment ($)',
      data: [200000, 350000, 450000, 320000, 500000, 620000],
      borderColor: '#ffd700',
      backgroundColor: 'rgba(255, 215, 0, 0.2)',
      tension: 0.3,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    },
    scales: {
      x: { ticks: { color: '#ccc' } },
      y: { ticks: { color: '#ccc' } }
    }
  }
});

// Investor Type Pie Chart
const ctx2 = document.getElementById('investorTypeChart').getContext('2d');
new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ['Diaspora', 'Local', 'Institutional'],
    datasets: [{
      data: [50, 30, 20],
      backgroundColor: ['#ffd700', '#00c6ff', '#ff6384']
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    }
  }
});
