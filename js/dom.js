// let texto = "Esto es el barrio chino march";
// const hablar = (texto) =>
//   speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

// hablar(texto);

// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.documentElement.lang);
// console.log(document.querySelector(".link-dom").href);
// console.log(document.querySelector(".link-dom").getAttribute("href"));
// document.documentElement.lang = "en";
// console.log(document.documentElement.lang);

// const $linkDOM = document.querySelector(".link-dom");
// $linkDOM.setAttribute("target", "_blank");
// $linkDOM.setAttribute("rel", "noopener");
// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("style"));
// console.log(window.getComputedStyle($linkDOM));

// const $card = document.querySelector(".card");
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));

// const $whatIsThis = document.getElementById("que-es");

// const $cards = document.querySelector(".cards");

// console.log($cards);
// console.log($cards.children);
// console.log($cards.parentElement);
// console.log($cards.firstChild);
// console.log($cards.firstElementChild);

// const $figure = document.createElement("figure"),
//   $img = document.createElement("img"),
//   $figcaption = document.createElement("figcaption"),
//   $figcaptionText = document.createTextNode("Animals2"),
//   $cards = document.querySelector(".cards");

// $img.setAttribute("src", "https://picsum.photos/200/200");
// $figure.classList.add("card");

// $cards.appendChild($figure);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $figcaption.appendChild($figcaptionText);

// const continentes = ["Asia", "Africa", "Europa", "América", "Oceanía"];
// $ul2 = document.createElement("ul");

// document.write("Continentes del Mundo");
// document.body.appendChild($ul2);

// continentes.forEach((el) => {
//   const $li = document.createElement("li");
//   $li.textContent = el;
//   $ul2.appendChild($li);
// });

// function holaMundo() {
//   alert("Hola Mundo");
//   console.log(event);
// }

// function saludar(nombre = "Desconocido") {
//   alert(`Hola ${nombre}`);
// }

// const $eventoSemantico = document.getElementById("evento-semantico");
// $eventoMultiple = document.getElementById("evento-multiple");
// $eventoRemover = document.getElementById("evento-remover");

// $eventoSemantico.onclick = holaMundo;
// $eventoSemantico.onclick = function (e) {
//   alert("Hola Mundo soy un Manejador Semántico");
//   console.log(e);
//   console.log(event);
// };

// $eventoMultiple.addEventListener("click", holaMundo);
// $eventoMultiple.addEventListener("click", () => saludar());

// const removerDobleClick = (e) => {
//   alert(`Removiendo el Evento de tipo ${e.type}`);
//   console.log(e);
//   $eventoRemover.removeEventListener("dblclick", removerDobleClick);
//   $eventoRemover.disabled = true;
// };

// $eventoRemover.addEventListener("dblclick", removerDobleClick);

const $divsEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola, te saluda ${this.className} y este click lo originó ${e.target.className} `
  );
  e.stopPropagation();
}

console.log($divsEventos);
// Fase de Burbuja
$divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
});

// Fase de Captura
// $divsEventos.forEach((div) => {
//   div.addEventListener("click", flujoEventos, true);
// });

// $linkEventos.addEventListener("click", (e) => {
//   alert("Hola soy tu amigo y docente digital Jonathan Mircha");
//   e.preventDefault();
//   e.stopPropagation();
// });

// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.outerHeight);
// console.log(window.outerWidth);

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log(window.scrollX);
//   console.log(window.scrollY);
//   console.log(e);
// });

const $btnOpen = document.getElementById("abrir-ventana"),
  $btnClose = document.getElementById("cerrar-ventana"),
  $btnPrint = document.getElementById("imprimir-ventana");

$btnOpen.addEventListener("click", (e) => {
  open("https://jonmircha.com");
});
$btnClose.addEventListener("click", (e) => {
  close();
});
$btnPrint.addEventListener("click", (e) => {
  print();
});

console.log(navigator);
console.log(navigator.userAgent);
console.log(navigator.serviceWorker);
console.log(navigator.usb);
