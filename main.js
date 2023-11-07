//Variáveis
const btnCookie = document.querySelector("#btnCookie");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
//Eventos
btnCookie.addEventListener("click", showMessage);
btnReset.addEventListener("click", showMessage);

//Funções
function showMessage() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
