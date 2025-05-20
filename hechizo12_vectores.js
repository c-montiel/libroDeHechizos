const leer = require('prompt-sync')();

const INGREDIENTE_01_FORMAT = "1 - Raíz de valeriana";
const INGREDIENTE_02_FORMAT = "2 - Mandrágora negra";
const INGREDIENTE_03_FORMAT = "3 - Pluma de hipogrifo";
const INGREDIENTE_04_FORMAT = "4 - Ojo de escarabajo";
const INGREDIENTE_05_FORMAT = "5 - Sangre de dragón";

const INGREDIENTE_01 = "Raíz de valeriana";
const INGREDIENTE_03 = "Pluma de hipogrifo";
const INGREDIENTE_04 = "Ojo de escarabajo";

const INGREDIENTES_ENCONTRADOS = [];

function main() {
    let ingredienteEncontrado = "";

    for (let i = 0; i < 3; i++) {

        console.log("\n*** Iniciando recoleccion ***");
        console.log("\n Qué ingredientes encontraste?: \n");
        console.log(INGREDIENTE_01_FORMAT);
        console.log(INGREDIENTE_02_FORMAT);
        console.log(INGREDIENTE_03_FORMAT);
        console.log(INGREDIENTE_04_FORMAT);
        console.log(INGREDIENTE_05_FORMAT);

        ingredienteEncontrado = Number(leer());

        switch (ingredienteEncontrado) {
            case 1:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTE_01);
                console.log("\nIngrediente ACEPTADO!");
                break;
            case 2:
                console.log("\nIngrediente NO ACEPTADO! Cuidado!");
                break;
            case 3:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTE_03);
                console.log("\nIngrediente ACEPTADO!");
                break;
            case 4:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTE_04);
                console.log("\nIngrediente ACEPTADO!");
                break;
            case 5:
                console.log("\nIngrediente NO ACEPTADO! Cuidado!");
                break;
            default:
                console.log("\nLa opcion seleccionada no es válida");
                
                break;
        };
    };

    console.log("\n\n*** FIN DE RECOLECCION ***");
    console.log("\nInforme de Ingredientes encontrados: ");
    console.log("\n\t" + INGREDIENTES_ENCONTRADOS.sort());
    resultadoRecoleccion(INGREDIENTES_ENCONTRADOS)
    console.log("\n********************");
};

main();

/**
 * funcion que recibe como parametro el arreglo y evalua la cantidad de elementos aceptados
 *
 * @param {*} ingredientes arreglo que recibe los ingredientes aceptados
 */
function resultadoRecoleccion(ingredientes) { 
    if (ingredientes.length >= 2) {
        console.log("\nResultado: Aprobado");
    } else {
        console.log("\nResultado: Reprobado");
    };
};
