// Charts

const charts = document.querySelectorAll(".chart");

charts.forEach(function(chart) {

  new Chart(chart, {

    type: "bar",

    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],

      datasets: [{
        label: "Students",

        data: [12, 19, 8, 15, 10],

        backgroundColor: [
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)"
        ],

        borderWidth: 1
      }]
    },

    options: {
      responsive: true,

      scales: {
        y: {
          beginAtZero: true
        }
      }
    }

  });

});

// Data Table

$(document).ready(function () {

  $('.data-table').DataTable();

});