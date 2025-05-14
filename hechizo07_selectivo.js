const leer = require('prompt-sync')();

const POCION_01 = "FELIX FELICIS";
const POCION_02 = "POLVO DE FLU";
const POCION_03 = "POCION MULTIJUGOS";

const DEFINICION_01 = "Es extremadamente compleja y peligrosa.";
const DEFINICION_02 = "Es compleja pero útil en la red de transportación.";
const DEFINICION_03 = "Es complicada pero muy útil para transformaciones temporales.";

const DEFINICION_NULA = "No tenemos información sobre esa poción en nuestros registros.";

/**
 * Funcion que recibe 2 parametros: el nombre de una pocion, y la definicion correspondiente. devuelve texto 
 *
 * @param {*} pocion : tipo de dato string
 * @param {*} definicion : tipo de dato string
 */
function mensajeSalida(pocion,definicion) {
    let intro = "\n\n*** Info de pocion";
    let separador = " ***\n\n";
    let cierre = "\n\n*** Fin del informe ***";

    console.log(intro,pocion,separador,definicion,cierre);
};

function main () {
    let pocionConsultada = "sin consulta";

    console.log("ingresa la pocion por la quieres consultar");
    pocionConsultada = leer().toUpperCase();

    switch (pocionConsultada) {
        case POCION_01:
            mensajeSalida(POCION_01,DEFINICION_01);
            break;
        case POCION_02:
            mensajeSalida(POCION_02,DEFINICION_02);
            break;
        case POCION_03:
            mensajeSalida(POCION_03,DEFINICION_03);
            break;
        default:
            mensajeSalida(pocionConsultada,DEFINICION_NULA);
            break;
    };
};

main();
