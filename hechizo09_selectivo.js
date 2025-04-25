const leer = require('prompt-sync')();

const HECHIZO_01 = "Wingardium Leviosa";
const HECHIZO_02 = "Expelliarmus";
const HECHIZO_03 = "Expecto Patronum";
const HECHIZO_04 = "Avada Kedavra";

const COD_O1 = "\n[3245]";
const COD_02 = "\n[2312]";
const COD_03 = "\n[5231]";
const COD_04 = "\n[0124]";

const SOLICITUD = "ingrese el codigo [4 cifras] del hechizo que desea lanzar";
const MSJE_ERROR = "el codigo ingresado no corresponde a un hechizo.\nPor favor, ingrese un codigo valido.";

function mensajeSalida (codigo,hechizo) {
    let inicio = "\n\n*** Seleccionaste el codigo "+codigo+ " ***\n\n";
    let cierre ="\n\n*** Hechizo realizado ***";

    console.log(inicio,hechizo+ "!!!",cierre);
}

function main () {
    let opcionNivel = "sin seleccion";
    var opcionHechizo = "sin seleccion";

    console.log("seleccione el nivel de dificultad: \n[1] Nivel 1 \n[2] Nivel 2");
    opcionNivel = leer();



    switch(opcionNivel) {
        case "1":
            console.log(SOLICITUD, COD_O1 + HECHIZO_01, COD_02 + HECHIZO_02);
            opcionHechizo = leer();
            break;
        case "2":
            console.log(SOLICITUD, COD_03 +HECHIZO_03, COD_04 + HECHIZO_04);
            opcionHechizo = leer();
            break;
        default:
            console.log(MSJE_ERROR);
            break;
    }

    switch(opcionHechizo) { 
        case "3245":
            mensajeSalida(COD_O1,HECHIZO_01);
            break;
        case "2312":
            mensajeSalida(COD_02,HECHIZO_02);
            break;
        case "5231":
            mensajeSalida(COD_03,HECHIZO_03);
            break;
        case "0124":
            mensajeSalida(COD_04,HECHIZO_04);
            break;
        default:
            console.log(MSJE_ERROR);
            break;
    };
};
main();
