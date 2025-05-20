const INGREDIENTES_FORMAT = ["1 - Raíz de valeriana", "2 - Mandrágora negra", "3 - Pluma de hipogrifo", "4 - Ojo de escarabajo", "5 - Sangre de dragón"];

const INGREDIENTES = ["Raíz de valeriana","Pluma de hipogrifo","Ojo de escarabajo", "Mandrágora negra", "Sangre de dragón"];

const INGREDIENTES_ENCONTRADOS = [];

function main() {
    let ingredienteEncontrado = "";

    for (let i = 0; i < 3; i++) {
        console.log("\n*** Iniciando recoleccion ***");

        ingredienteEncontrado = getRandomInt(INGREDIENTES_FORMAT.length)

        switch (ingredienteEncontrado) {
            case 1:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTES[0]);
                console.log("\n"+INGREDIENTES[0]+". Ingrediente ACEPTADO!");
                break;
            case 2:
                console.log("\n"+INGREDIENTES[3]+". Ingrediente NO ACEPTADO! Cuidado!");
                break;
            case 3:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTES[1]);
                console.log("\n"+INGREDIENTES[1]+". Ingrediente ACEPTADO!");
                break;
            case 4:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTES[2]);
                console.log("\n"+INGREDIENTES[2]+". Ingrediente ACEPTADO!");
                break;
            case 5:
                console.log("\n"+INGREDIENTES[4]+". Ingrediente NO ACEPTADO! Cuidado!");
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

/**
 * funcion de seleccion aleatoria de un elemento del array de ingredientes
 *
 * @param {*} max
 * @return {*} 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
