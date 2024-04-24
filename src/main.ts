import './style.css';

const botonSiguiente = document.getElementById('siguiente');
const idNumTurno = document.getElementById('numeroTurno');
let contador: number = 0;

if (botonSiguiente && botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener('click', sumarNum);
}

const mostrarTurno = () => {
  let cadenaResult: string = contador.toString().padStart(2, '0');
  if (idNumTurno && idNumTurno instanceof HTMLElement) {
    idNumTurno.innerHTML = cadenaResult;
  }
};

function sumarNum() {
  contador++;
  if (contador >= 0) {
    mostrarTurno();
  }
}

const botonAnterior = document.getElementById('anterior');
if (botonAnterior && botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener('click', restarNum);
}
function restarNum() {
  contador--;
  if (contador >= 0) {
    mostrarTurno();
  }
}

const botonReset = document.getElementById('reset');
if (botonReset && botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener('click', resetNum);
}
function resetNum() {
  contador = 0;
  mostrarTurno();
}

const botonActualizar = document.getElementById('actualizar');
if (botonActualizar && botonActualizar instanceof HTMLButtonElement) {
  botonActualizar.addEventListener('click', actualizarNum);
}
function actualizarNum() {
  const introducirTurno = document.getElementById('introducirTurno');
  if (introducirTurno && introducirTurno instanceof HTMLInputElement) {
    let numTurnoIntroducido = introducirTurno.value;
    if (numTurnoIntroducido) {
      contador = parseInt(numTurnoIntroducido);
      mostrarTurno();
    }
  }
}
