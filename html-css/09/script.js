const botaoBuscar = document.getElementById("botao-buscar");

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {
  const cidade = document.getElementById("cidade").value.trim();

  if (cidade === "") {
    alert("Digite alguma cidade no campo de pesquisa.");
    return;
  }

  const chaveApi = "824143e6dc4c899164e3d851f20f4258";

  const url = `https://api.openweathermap.org/data/2.5/weather?q={cidade}&appid={824143e6dc4c899164e3d851f20f4258}&units=metric&lang=pt_br`;

  fetch(url)
    .then(function (resposta) {
      if (!resposta.ok) {
        throw new Error("Cidade não foi encontrada.");
      }

      return resposta.json();
    })

    .then(function (infos) {
      console.log(infos);

      document.getElementById("nome-cidade").textContent = infos.name;

      document.getElementById("temperatura-cidade").textContent =
        infos.main.temp;

      document.getElementById("sensacao-termica").textContent =
        infos.feels_like;

      document.getElementById("humidade").textContent = infos.humidity;

      document.getElementById("visibilidade").textContent = infos.visibility;

      document.getElementById("velocidade-vento").textContent =
        infos.wind.speed;

      document.getElementById("status-ceu").textContent = infos.weather.value;
    });
}
