const INGREDIENTES = [
    "Raíz de valeriana",
    "Pluma de hipogrifo",
    "Ojo de escarabajo",
    "Mandrágora negra",
    "Sangre de dragón"
];

const INGREDIENTES_ENCONTRADOS = [];

function main() {
    let ingredienteEncontrado = "";

    console.log("\n*** Iniciando recoleccion ***");

    for (let i = 0; i < 3; i++) {
        ingredienteEncontrado = getRandomInt(INGREDIENTES.length-1)

        switch (ingredienteEncontrado) {
            case 0:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTES[0]);
                console.log("\n"+INGREDIENTES[0]+". Ingrediente ACEPTADO!");
                break;
            case 1:
                console.log("\n"+INGREDIENTES[3]+". Ingrediente NO ACEPTADO! Cuidado!");
                break;
            case 2:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTES[1]);
                console.log("\n"+INGREDIENTES[1]+". Ingrediente ACEPTADO!");
                break;
            case 3:
                INGREDIENTES_ENCONTRADOS.push(INGREDIENTES[2]);
                console.log("\n"+INGREDIENTES[2]+". Ingrediente ACEPTADO!");
                break;
            case 4:
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
 * funcion de generacion de numero aleatorio
 *
 * @param {*} max valor maximo incluido
 * @return {*} devuelve un numero aleatorio entre 0 y el maximo
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
};
