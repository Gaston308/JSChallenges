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

const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));

const $whatIsThis = document.getElementById("que-es");
