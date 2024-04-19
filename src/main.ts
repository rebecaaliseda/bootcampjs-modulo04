import './style.css';

const botonSiguiente = document.getElementById('siguiente');
var idNumTurno = document.getElementById('numeroTurno');
if (idNumTurno !== null && idNumTurno !== undefined) {
  var numeroTurno: number = parseInt(idNumTurno.innerHTML);
}
if (botonSiguiente !== null && botonSiguiente !== undefined) {
  botonSiguiente.addEventListener('click', sumarNum);
}
function sumarNum() {
  var result: number = ++numeroTurno;

  var cadenaResult: string = result.toString();
  if (result >= 0) {
    cadenaResult = cadenaResult.padStart(2, '0');
    if (idNumTurno !== null && idNumTurno !== undefined) {
      numeroTurno = result;
      idNumTurno.innerHTML = cadenaResult;
    }
  }
}

const botonAnterior = document.getElementById('anterior');
if (botonAnterior !== null && botonAnterior !== undefined) {
  botonAnterior.addEventListener('click', restarNum);
}
function restarNum() {
  var result: number = --numeroTurno;
  if (result >= 0) {
    var cadenaResult: string = result.toString();
    cadenaResult = cadenaResult.padStart(2, '0');
    if (idNumTurno !== null && idNumTurno !== undefined) {
      numeroTurno = result;
      idNumTurno.innerHTML = cadenaResult;
    }
  }
}

const botonReset = document.getElementById('reset');
if (botonReset !== null && botonReset !== undefined) {
  botonReset.addEventListener('click', resetNum);
}
function resetNum() {
  var result: number = 0;
  var cadenaResult: string = result.toString();
  cadenaResult = cadenaResult.padStart(2, '0');
  if (idNumTurno !== null && idNumTurno !== undefined) {
    numeroTurno = result;
    idNumTurno.innerHTML = cadenaResult;
  }
}

const botonActualizar = document.getElementById('actualizar');
if (botonActualizar !== null && botonActualizar !== undefined) {
  botonActualizar.addEventListener('click', actualizarNum);
}
function actualizarNum() {
  var introducirTurno = document.getElementById('introducirTurno');
  if (introducirTurno !== null && introducirTurno !== undefined) {
    var numTurnoIntroducido = (<HTMLInputElement>introducirTurno).value;
    if (numTurnoIntroducido != null && numTurnoIntroducido != undefined) {
      numeroTurno = parseInt(numTurnoIntroducido);
      var cadenaNumTurno: string = numTurnoIntroducido.toString();
      cadenaNumTurno = cadenaNumTurno.padStart(2, '0');
      if (idNumTurno !== null && idNumTurno !== undefined) {
        idNumTurno.innerHTML = cadenaNumTurno;
      }
    }
  }
}
