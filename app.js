/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego de Número Secreto';
let instrucciones = document.querySelector('p');
instrucciones.innerHTML = 'Digita un número de 1 a 10';
*/
function generarNumeroSecreto() {

    let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el Número Secreto fue generado previamente
    console.log(`Número generado ${numeroSecreto}`);
    console.log(`Lista números generados ${listaNumerosGenerados}`);

    if ((listaNumerosGenerados.length == numeroMaximo)){
        textoVariableHTML('p','Máximo de números jugados, The game is Over');
        return;
    }
    else {
        if (listaNumerosGenerados.includes(numeroSecreto)) {
        textoVariableHTML('p','Número Secreto Repetido');
        console.log(`Número generado ${numeroSecreto} repetido`)
        return generarNumeroSecreto();

        } else { listaNumerosGenerados.push(numeroSecreto);
        // console.log(`Número generado ${numeroSecreto}`);
        return numeroSecreto;

        }
    }
}

function verificarIntentoUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    intentos++;
    if (numeroSecreto === numeroUsuario) {
        textoVariableHTML('p',`Acertaste el número ${numeroSecreto} en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    } else {
        limpiarNumero();
        if (numeroSecreto > numeroUsuario) { 
            textoVariableHTML('p',`El número Secreto es MAYOR, llevas ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
            } 
        else { textoVariableHTML('p',`El número Secreto es MENOR, llevas ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
             }
        }
    }

function reiniciarJuego() {
    limpiarNumero();
    mensajesIniciales();
    valoresIniciales();
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function limpiarNumero() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function textoVariableHTML(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;   
}

function mensajesIniciales() {
    textoVariableHTML('h1', 'Juega al Número Secretoooo !');
    textoVariableHTML('p', 'Digita un número de 1 a 10');
    return
}
function valoresIniciales() {
    intentos = 0;
}

mensajesIniciales();
valoresIniciales();
let numeroMaximo = 10;
let listaNumerosGenerados = [];
let numeroSecreto = generarNumeroSecreto();

//reiniciarJuego();

