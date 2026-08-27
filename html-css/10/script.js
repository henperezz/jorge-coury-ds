const botaoBuscar = document.getElementById("botao-busca");
const chaveApi = "824143e6dc4c899164e3d851f20f4258";

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {
  const cidade = document.getElementById("pesquisa-cidade").value.trim();

  if (cidade === "") {
    alert("Pesquise alguma cidade!!!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&lang=pt-br&units=metric`;

  fetch(url)
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Erro na busca da cidade, tente novamente.");
      }

      return resposta.json();
    })

    .then(function (infos) {
      console.log(infos);

      document.getElementById("nome-cidade").textContent = infos.name;

      document.getElementById("min-temp").textContent =
        infos.main.temp_min.toFixed(1);

      document.getElementById("temp-atual").textContent =
        infos.main.temp.toFixed(1);

      document.getElementById("max-temp").textContent =
        infos.main.temp_max.toFixed(1);

      const feelsLike = infos.main.feels_like;
      const feelsLikeInfo = document.getElementById("atual-feels-like");

      document.getElementById("atual-feels-like").textContent = feelsLike;

      if (feelsLike <= 15) {
        feelsLikeInfo.style.color = "#1368aa";
      } else {
        feelsLikeInfo.style.color = "#e82107";
      }

      const ventosKm = (infos.wind.speed * 3.6).toFixed(1);
      document.getElementById("ventos-info").textContent = ventosKm;

      const nascerSol = new Date(infos.sys.sunrise * 1000);
      const porSol = new Date(infos.sys.sunset * 1000);

      const opcoesHora = { hour: "2-digit", minute: "2-digit" };

      document.getElementById("sunrise-info").textContent =
        "Nasce: " + nascerSol.toLocaleTimeString("pt-BR", opcoesHora);

      document.getElementById("sunset-info").textContent =
        "Põe: " + porSol.toLocaleTimeString("pt-BR", opcoesHora);

      const nomeCidade = document.getElementById("nome-cidade");
      const condicao = infos.weather[0].main;

      if (
        condicao === "Rain" ||
        condicao === "Drizzle" ||
        condicao === "Thunderstorm"
      ) {
        nomeCidade.style.color = "#1368aa";
      } else {
        nomeCidade.style.color = "#f39c12";
      }
    });

  buscarPrevisao(cidade);
}
