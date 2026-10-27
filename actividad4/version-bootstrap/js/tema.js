// tema.js — Modo claro/oscuro de Bootstrap según la preferencia del sistema.
// Bootstrap 5.3 cambia de tema con el atributo data-bs-theme en <html>. Este script lo sincroniza con
// prefers-color-scheme (el mismo ajuste que usaste en la clase 9) y reacciona si el usuario lo cambia.
const consulta = window.matchMedia("(prefers-color-scheme: dark)");

function aplicarTema() {
  document.documentElement.setAttribute("data-bs-theme", consulta.matches ? "dark" : "light");
}

aplicarTema();
consulta.addEventListener("change", aplicarTema);
