const campoValor = document.getElementById("campoValor");
const resultadoEl = document.getElementById("resultado");
const unidadeEntradaEl = document.getElementById("unidadeEntrada");
const unidadeResultadoEl = document.getElementById("unidadeResultado");
const rotuloEntradaEl = document.getElementById("rotuloEntrada");
const botaoKmhParaMs = document.getElementById("botaoKmhParaMs");
const botaoMsParaKmh = document.getElementById("botaoMsParaKmh");
const botaoConverter = document.getElementById("botaoConverter");

let modo = "kmh-ms";

function formatarNumero(numero) {
  return numero.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
}

function converter() {
  const valorDigitado = parseFloat(campoValor.value);

  if (isNaN(valorDigitado)) {
    resultadoEl.textContent = "0";
    return;
  }

  const valorConvertido =
    modo === "kmh-ms" ? valorDigitado / 3.6 : valorDigitado * 3.6;

  resultadoEl.textContent = formatarNumero(valorConvertido);
}

function definirModo(novoModo) {
  modo = novoModo;
  const ehKmhParaMs = modo === "kmh-ms";

  botaoKmhParaMs.classList.toggle("ativo", ehKmhParaMs);
  botaoMsParaKmh.classList.toggle("ativo", !ehKmhParaMs);

  unidadeEntradaEl.textContent = ehKmhParaMs ? "km/h" : "m/s";
  unidadeResultadoEl.textContent = ehKmhParaMs ? "m/s" : "km/h";
  rotuloEntradaEl.textContent = ehKmhParaMs ? "Valor em km/h" : "Valor em m/s";

  converter();
}

function animarResultado() {
  resultadoEl.classList.remove("pulso");
  void resultadoEl.offsetWidth;
  resultadoEl.classList.add("pulso");
}

botaoKmhParaMs.addEventListener("click", () => definirModo("kmh-ms"));
botaoMsParaKmh.addEventListener("click", () => definirModo("ms-kmh"));
botaoConverter.addEventListener("click", () => {
  converter();
  animarResultado();
});

converter();
