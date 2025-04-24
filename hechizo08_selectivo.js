const leer = require('prompt-sync')();

const NUCLEO00 = "FENIX";
const NUCLEO01 = "UNICORNIO";
const NUCLEO02 = "DRAGON";

const NUCLEO_ERROR = "INGRESO UN NUCLEO NO REGISTRADO"

const CARACTERISTICA00 = "¡Excelente elección! Las varitas con núcleo de fénix son poderosas y leales.";
const CARACTERISTICA01 = "Las varitas con núcleo de unicornio son conocidas por su pureza y fuerza.";
const CARACTERISTICA02 = "¡Cuidado! Las varitas con núcleo de dragón son poderosas pero pueden ser temperamentales.";

const CARACTERISTICA_ERROR = "No reconocemos ese tipo de núcleo. Por favor, ingrese un núcleo válido.";

/** 
 * Funcion que recibe 3 paramentros: opcion elegida; tipo de nucleo; y caracteristicas correspondientes. 
 * Devuelve mensaje de salida de texto
 * 
 * @param {* dato string variable} opcion 
 * @param {* dato string constante} nucleo 
 * @param {* dato string constante} caracteristica 
 */ 
function mensajeSalida(opcion,nucleo,caracteristica){
    console.log("\n\n*** Detalles de nucleo ["+opcion+"] "+nucleo+" ***\n");
    console.log(caracteristica);
    console.log("\n*** Fin del mensaje ***");
};

function main () {
    let nucleoConsultado = "sin nucleo";
    console.log("INGRESE EL CODIGO CORRESPONDIENTE A SU ELECCION: \n 0 - Fenix \n 1 - Unicornio \n 2 - Dragon");
    nucleoConsultado = leer();
    
    switch (nucleoConsultado) {
        case ("0"):
            mensajeSalida(nucleoConsultado,NUCLEO00,CARACTERISTICA00);
            break;

        case ("1"):
            mensajeSalida(nucleoConsultado,NUCLEO01,CARACTERISTICA01);
            break;   
            
        case ("2"):
            mensajeSalida(nucleoConsultado,NUCLEO02,CARACTERISTICA02);
            break;

        default:
            mensajeSalida(nucleoConsultado,NUCLEO_ERROR,CARACTERISTICA_ERROR);
            break;
    }    
};

main();