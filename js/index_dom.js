import scrollTopButton from "./dom/boton_scroll.js";
import slider from "./dom/carrusel.js";
import countdown from "./dom/cuenta-regreiva.js";
import userDeviceInfo from "./dom/deteccion_dispositivo.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import searchFilters from "./dom/filtro_busquedas.js";
import getGeolocation from "./dom/geolocalizacion.js";
import hamburgerMenu from "./dom/menu_hambuger.js";
import speechReader from "./dom/narrador.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import scrollSpy from "./dom/scroll_espia.js";
import draw from "./dom/sorteo.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema-oscuro.js";
import contactFormValidations from "./dom/validaciones_formulario.js";
import smartVideo from "./dom/video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/car-alarm.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "May 28, 2025 19:45", "Feliz Cumpleaños!!!!🦾🎂🎂");
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a
      href="https://youtu.be/6IwUl-4pAzc?si=_zvLb2_-RZ2d0p3N"
      target="_blank" rel="noopener"
    >Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=VlNN6nl2SnxXZxux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
  );
  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a
      href="https://maps.app.goo.gl/QayDa86Eq5cuY8qH6"
      target="_blank" rel="noopener"
    >Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27383.325607919178!2d-62.69353380583747!3d-30.91698036770514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94349acfc55cbfa5%3A0x59bd26c34e5808ad!2sMiramar%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1726785446234!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
  scrollSpy();
  smartVideo();
  contactFormValidations();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();
speechReader();
