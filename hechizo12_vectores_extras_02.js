const INGREDIENTES = [
    "Raíz de valeriana",
    "Mandrágora negra",
    "Pluma de hipogrifo",
    "Ojo de escarabajo",
    "Sangre de dragón"
];
const INGREDIENTES_VALIDOS = [
    true,
    false,
    true,
    true,
    false
];
const INTENTOS = 3;
const INGREDIENTES_ENCONTRADOS = [];

function main() {
    console.log("\n*** Iniciando recolección ***");

    for (let i = 0; i < INTENTOS; i++) {
        let indiceIngrediente = getRandomInt(INGREDIENTES.length - 1);
        let nombreIngrediente = INGREDIENTES[indiceIngrediente];
        let ingredienteValido = INGREDIENTES_VALIDOS[indiceIngrediente];

        if (ingredienteValido) {
            INGREDIENTES_ENCONTRADOS.push(nombreIngrediente);
            console.log("\n"+nombreIngrediente+". Ingrediente ACEPTADO!");
        } else {
            console.log("\n"+nombreIngrediente+". Ingrediente NO ACEPTADO! Cuidado!");
        }
    }

    console.log("\n\n*** FIN DE RECOLECCIÓN ***");
    console.log("\nInforme de ingredientes encontrados:");
    console.log("\n\t" + INGREDIENTES_ENCONTRADOS.sort().join(", "));
    console.log("\nResultado: " + resultadoRecoleccion(INGREDIENTES_ENCONTRADOS));
    console.log("\n********************");
}

function resultadoRecoleccion(ingredientes) {
    if (ingredientes.length >= 2) {
        return "Aprobado"
    } else {
        return "Reprobado"
    };
};

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
};

main();
