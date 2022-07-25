/* En su página web, agregar un campo para llevar un
contador de X elemento que siempre arranque en 0
• En la página web se muestra la cantidad de X
• Hay un botón para incrementar la cantidad
• Hay un botón para decrementar la cantidad*/

let contador = document.getElementById("contador");
let btnInc = document.getElementById("incrementar");
let btnDec = document.getElementById("decrementar");
let numero: number = 0;

function numSumar() {
  numero++;
  contador.innerHTML = "Contador " + numero;
}
function numRestar() {
  numero--;
  contador.innerHTML = "Contador " + numero;
}

btnInc.addEventListener("click", numSumar);

btnDec.addEventListener("click", numRestar);
