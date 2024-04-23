import './style.css';

const botonSiguiente = document.getElementById('siguiente');
const idNumTurno = document.getElementById('numeroTurno');
let contador: number = 0;

if (botonSiguiente && botonSiguiente instanceof HTMLButtonElement) {
  botonSiguiente.addEventListener('click', sumarNum);
}
function sumarNum() {
  let result: number = ++contador;
  let cadenaResult: string = result.toString();
  if (result >= 0) {
    cadenaResult = cadenaResult.padStart(2, '0');
    if (idNumTurno) {
      contador = result;
      idNumTurno.innerHTML = cadenaResult;
    }
  }
}

const botonAnterior = document.getElementById('anterior');
if (botonAnterior && botonAnterior instanceof HTMLButtonElement) {
  botonAnterior.addEventListener('click', restarNum);
}
function restarNum() {
  let result: number = --contador;
  if (result >= 0) {
    let cadenaResult: string = result.toString();
    cadenaResult = cadenaResult.padStart(2, '0');
    if (idNumTurno) {
      contador = result;
      idNumTurno.innerHTML = cadenaResult;
    }
  }
}

const botonReset = document.getElementById('reset');
if (botonReset && botonReset instanceof HTMLButtonElement) {
  botonReset.addEventListener('click', resetNum);
}
function resetNum() {
  let result: number = 0;
  let cadenaResult: string = result.toString();
  cadenaResult = cadenaResult.padStart(2, '0');
  if (idNumTurno) {
    contador = result;
    idNumTurno.innerHTML = cadenaResult;
  }
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
      let cadenaNumTurno: string = numTurnoIntroducido.toString();
      cadenaNumTurno = cadenaNumTurno.padStart(2, '0');
      if (idNumTurno) {
        idNumTurno.innerHTML = cadenaNumTurno;
      }
    }
  }
}
