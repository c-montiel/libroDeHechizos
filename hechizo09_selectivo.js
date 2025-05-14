const leer = require('prompt-sync')();

const HECHIZO_01 = "Wingardium Leviosa";
const HECHIZO_02 = "Expelliarmus";
const HECHIZO_03 = "Expecto Patronum";
const HECHIZO_04 = "Avada Kedavra";

const COD_01 = "3245";
const COD_02 = "2312";
const COD_03 = "5231";
const COD_04 = "0124";

const COD_01_FORMAT = "\n[" + COD_01 + "]";
const COD_02_FORMAT = "\n[" + COD_02 + "]";
const COD_03_FORMAT = "\n[" + COD_03 + "]";
const COD_04_FORMAT = "\n[" + COD_04 + "]";

const SOLICITUD = "ingrese el codigo [4 cifras] del hechizo que desea lanzar";
const MSJE_ERROR = "el codigo ingresado no corresponde a un hechizo.\nPor favor, ingrese un codigo valido.";


function main() {
    let opcionNivel = "sin seleccion";
    var opcionHechizo = "sin seleccion";

    console.log("Seleccione el nivel de dificultad: \n[1] Nivel 1 \n[2] Nivel 2");
    opcionNivel = leer();

    switch (opcionNivel) {
        case "1":
            console.log(SOLICITUD, COD_01_FORMAT + HECHIZO_01, COD_02_FORMAT + HECHIZO_02);
            opcionHechizo = leer();
            seleccionHechizo(opcionHechizo, COD_01, COD_02, COD_01_FORMAT, COD_02_FORMAT, HECHIZO_01, HECHIZO_02);
            break;
        case "2":
            console.log(SOLICITUD, COD_03_FORMAT + HECHIZO_03, COD_04_FORMAT + HECHIZO_04);
            opcionHechizo = leer();
            seleccionHechizo(opcionHechizo, COD_03, COD_04, COD_03_FORMAT, COD_04_FORMAT, HECHIZO_03, HECHIZO_04)
            break;
        default:
            console.log(MSJE_ERROR);
            break;
    }
};
main();

/**
 * mensaje de salida . funcion que recibe 2 parametros : codigo de ID del hechizo, y numero correspondiente al hechizo seleccionado por el ID previo. 
 * requiere 2 variables locales. "inicio" que emplea el parametro codigo para completar un texto de monitoreo.
 * devuelve un mensaje con el monbre del hechizo, identificado por codigo
 * 
 * @param {*} codigo recibe texto de una constante 
 * @param {*} hechizo recibe texto de una constante
 */
function mensajeSalida(codigo, hechizo) {
    let inicio = "\n\n* Seleccionaste tu hechizo!!! *\n\n";
    let cierre = "\n\n* Hechizo realizado *";

    console.log(inicio, hechizo + "!!!", cierre)
}

/**
 * funcion de seleccion switch. recibe 7 parametros: 
 * opcionHechizo: cadena de texto que se recibe como parametro del switch
 * los restantes parametros vinculan con las opciones de Codigo, Codigo con formato para la interfaz y el Hechizo de comparacion
 *
 * @param {*} opcionHechizo
 * @param {*} primerCodigo
 * @param {*} segundoCodigo
 * @param {*} primerCodigoFormat
 * @param {*} segundoCodigoFormat
 * @param {*} primerHechizo
 * @param {*} segundoHechizo
 */
function seleccionHechizo(opcionHechizo, primerCodigo, segundoCodigo, primerCodigoFormat, segundoCodigoFormat, primerHechizo, segundoHechizo) {
    switch (opcionHechizo) {
        case primerCodigo:
            mensajeSalida(primerCodigoFormat, primerHechizo);
            break;
        case segundoCodigo:
            mensajeSalida(segundoCodigoFormat, segundoHechizo);
            break;
        default:
            console.log(MSJE_ERROR + opcionHechizo);
            break;
    };
};
