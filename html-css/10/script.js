const botaoBuscar = document.getElementById("botao-busca");

botaoBuscar.addEventListener("click", buscarClima);

function buscarClima() {
  const cidade = document.getElementById("cidade").ariaValueMax.trim();

  if (cidade === "") {
    alert("Pesquise alguma cidade!!!");
  }
  return;
}
const chaveApi = "824143e6dc4c899164e3d851f20f4258";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chaveApi}&lang=pt-br&units=metric`;

fetch(url)
  .then(function (resposta) {
    if (!resposta.ok) {
      throw new Error("Erro na busca da cidade, tente novamente.");
    }

    return resposta.json();
  })

  .then(function (infos) {});
