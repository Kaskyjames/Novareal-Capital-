
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

document.addEventListener("DOMContentLoaded", () => {
  const revenueChart = new Chart(document.getElementById("revenueChart"), {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "Monthly Revenue ($)",
        data: [10500, 12500, 13800, 12000, 14800, 16000],
        fill: true,
        backgroundColor: "rgba(255,215,0,0.1)",
        borderColor: "#ffd700",
        tension: 0.4
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: "#fff" } }
      },
      scales: {
        x: { ticks: { color: "#ccc" }, grid: { color: "#222" } },
        y: { ticks: { color: "#ccc" }, grid: { color: "#222" } }
      }
    }
  });

  const investorChart = new Chart(document.getElementById("investorChart"), {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
        label: "New Investors",
        data: [12, 20, 18, 23, 30, 28],
        backgroundColor: "#ffd700"
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: "#fff" } }
      },
      scales: {
        x: { ticks: { color: "#ccc" }, grid: { color: "#222" } },
        y: { ticks: { color: "#ccc" }, grid: { color: "#222" } }
      }
    }
  });
});

const walletData = [
  {
    name: "Daniel T.",
    email: "daniel@example.com",
    balance: 3500,
    payoutRequest: 1200,
    status: "Pending"
  },
  {
    name: "Amaka B.",
    email: "amaka@example.com",
    balance: 5200,
    payoutRequest: 0,
    status: "—"
  },
  {
    name: "Liam R.",
    email: "liam@example.com",
    balance: 11800,
    payoutRequest: 5000,
    status: "Pending"
  }
];

function renderWalletTable() {
  const tbody = document.getElementById("walletData");
  tbody.innerHTML = "";

  walletData.forEach((investor, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${investor.name}</td>
      <td>${investor.email}</td>
      <td>$${investor.balance.toLocaleString()}</td>
      <td>$${investor.payoutRequest.toLocaleString()}</td>
      <td>${investor.status}</td>
      <td>
        ${investor.status === "Pending"
          ? `<button class="approve" onclick="approvePayout(${index})">Approve</button>
             <button class="decline" onclick="declinePayout(${index})">Decline</button>`
          : "—"}
      </td>
    `;

    tbody.appendChild(row);
  });
}

function approvePayout(index) {
  walletData[index].status = "Approved ✅";
  renderWalletTable();
}

function declinePayout(index) {
  walletData[index].status = "Declined ❌";
  renderWalletTable();
}

document.addEventListener("DOMContentLoaded", renderWalletTable);

const investors = [
  { name: "Joy E.", email: "joye@gmail.com", investments: "$5,500", status: "Active" },
  { name: "Tony K.", email: "tonyk@gmail.com", investments: "$25,000", status: "Active" },
  { name: "Blessing N.", email: "bnwa@yahoo.com", investments: "$15,750", status: "Pending" },
];

function loadInvestorProfiles() {
  const tbody = document.getElementById("investorTableBody");
  tbody.innerHTML = "";

  investors.forEach((investor, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${investor.name}</td>
      <td>${investor.email}</td>
      <td>${investor.investments}</td>
      <td>${investor.status}</td>
      <td>
        <button class="view" onclick="viewProfile(${index})">View</button>
        <button class="edit" onclick="editInvestor(${index})">Edit</button>
        <button class="block" onclick="blockInvestor(${index})">Block</button>
        <button class="statement" onclick="downloadStatement(${index})">Statement</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

function viewProfile(index) {
  alert(`Viewing profile for ${investors[index].name}`);
}

function editInvestor(index) {
  alert(`Editing info for ${investors[index].name}`);
}

function blockInvestor(index) {
  investors[index].status = "Blocked";
  loadInvestorProfiles();
}

function downloadStatement(index) {
  alert(`Downloading statement for ${investors[index].name}`);
}

document.addEventListener("DOMContentLoaded", loadInvestorProfiles);
