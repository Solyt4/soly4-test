var container = document.getElementById("gala"),
  containerWidth = container.offsetWidth,
  containerHeight = container.offsetHeight,
  meuElemento = document.getElementById("strela");
var posicoes = [];
for (var i = 0; i < 80; i++) {
  var left = Math.floor(Math.random() * containerWidth);
  var bottom = Math.floor(Math.random() * containerHeight);
  posicoes.push({ left: left, bottom: bottom });
}

criarElementos(container, meuElemento);

function criarElementos(container, elementoReferencia) {
  var posicaoReferencia = elementoReferencia.getBoundingClientRect(); // obtem as coordenadas do elemento de referência
  for (var i = 0; i < posicoes.length; i++) {
    var div = document.createElement("div");
    div.classList.add("star-" + i, "addClass");
    div.style.position = "absolute";
    div.style.width = "2px";
    div.style.height = "2px";
    div.style.borderRadius = "50%";
    div.style.backgroundColor = "#fff";
    div.style.left = posicoes[i].left + posicaoReferencia.left + "px"; // adiciona a coordenada left do elemento de referência
    div.style.bottom = posicoes[i].bottom + posicaoReferencia.bottom + "px"; // adiciona a coordenada bottom do elemento de referência
    container.appendChild(div);
  }
  console.log(posicaoReferencia);
}
