let chart;

function buscarPrevisao(cidade) {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${chaveApi}&units=metric&lang=pt-br`;

  fetch(url)
    .then(function (resposta) {
      if (!resposta.ok) throw new Error("Erro ao buscar previsão.");
      return resposta.json();
    })
    .then(function (dados) {
      const proximasHoras = dados.list.slice(0, 8);

      const labels = proximasHoras.map(function (item) {
        const data = new Date(item.dt * 1000);
        return data.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        });
      });

      const temperaturas = proximasHoras.map(function (item) {
        return item.main.temp;
      });

      desenharGrafico(labels, temperaturas);
    })
    .catch(function (erro) {
      alert(erro.message);
    });
}

function desenharGrafico(labels, temperaturas) {
  const ctx = document.getElementById("chart-temp");

  if (chart) {
    chart.destroy();
  }

  chart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          label: "Temperatura (°C)",
          data: temperaturas,
          borderColor: "#4a6274",
          backgroundColor: "rgba(74, 98, 116, 0.2)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
    },
  });
}
