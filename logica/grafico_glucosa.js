const ctx = document.getElementById("grafico").getContext("2d");

const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: datos.map((item) => item.fecha),
    datasets: [
      {
        label: "Ventas",
        data: datos.map((item) => item.glucosaEnAyunasInput),
        backgroundColor: "blue",
      },
      {
        label: "Gastos",
        data: datos.map((item) => item.glucosaPostPrandial),
        backgroundColor: "red",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
