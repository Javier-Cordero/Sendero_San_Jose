// reserva.js — Accesibilidad del modal de reserva rápida.
// Bootstrap lleva el foco al propio cuadro del modal al abrirlo; para que quien usa el teclado
// pueda escribir de inmediato, movemos el foco al primer campo cuando el modal ya es visible.
// Al cerrarse, Bootstrap devuelve el foco al botón que lo abrió (no hace falta código).
const modalReserva = document.getElementById("reserva-rapida");

modalReserva.addEventListener("shown.bs.modal", function () {
  document.getElementById("rr-nombre").focus();
});
