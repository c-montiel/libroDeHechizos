const leer = require('prompt-sync')();

const NUCLEO_00 = "FENIX";
const NUCLEO_01 = "UNICORNIO";
const NUCLEO_02 = "DRAGON";

const NUCLEO_ERROR = "INGRESO UN NUCLEO NO REGISTRADO"

const CARACTERISTICA_00 = "¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.";
const CARACTERISTICA_01 = "Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.";
const CARACTERISTICA_02 = "¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.";

const CARACTERISTICA_ERROR = "No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.";

/** 
 * Funcion "mensajeSalida" recibe 3 paramentros: opcion elegida; tipo de nucleo; y caracteristicas correspondientes. 
 * Devuelve mensaje de texto
 * 
 * @param {* dato string variable} opcion 
 * @param {* dato string constante} nucleo 
 * @param {* dato string constante} caracteristica 
 */ 
function mensajeSalida(opcion,nucleo,caracteristica){
    let intro = "\n\n*** Detalles de nucleo";
    let cierre = "\n*** Fin del mensaje ***"
    console.log( intro + " [" + opcion + "] " + nucleo + " ***\n\n", caracteristica,"\n" + cierre)
};

function main () {
    let nucleoConsultado = "sin nucleo";
    console.log("INGRESE EL CODIGO CORRESPONDIENTE A SU ELECCION: \n 0 - Fenix \n 1 - Unicornio \n 2 - Dragon");
    nucleoConsultado = leer();
    
    switch (nucleoConsultado) {
        case ("0"):
            mensajeSalida(nucleoConsultado,NUCLEO_00,CARACTERISTICA_00);
            break;
        case ("1"):
            mensajeSalida(nucleoConsultado,NUCLEO_01,CARACTERISTICA_01);
            break;   
        case ("2"):
            mensajeSalida(nucleoConsultado,NUCLEO_02,CARACTERISTICA_02);
            break;
        default:
            mensajeSalida(nucleoConsultado,NUCLEO_ERROR,CARACTERISTICA_ERROR);
            break;
    }    
};

main();
