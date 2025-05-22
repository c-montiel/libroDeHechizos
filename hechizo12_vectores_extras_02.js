const ingredientes = [
    "Raíz de valeriana",
    "Mandrágora negra",
    "Pluma de hipogrifo",
    "Ojo de escarabajo",
    "Sangre de dragón"
];
const ingredientesValidos = [
    true,
    false,
    true,
    true,
    false
];
const INTENTOS = 3;
const ingredientesEncontrados = [];

function main() {
    console.log("\n*** Iniciando recolección ***");

    for (let i = 0; i < INTENTOS; i++) {
        let indiceIngrediente = getRandomInt(ingredientes.length - 1);
        let nombreIngrediente = ingredientes[indiceIngrediente];
        let ingredienteValido = ingredientesValidos[indiceIngrediente];

        if (ingredienteValido) {
            ingredientesEncontrados.push(nombreIngrediente);
            console.log("\n"+nombreIngrediente+". Ingrediente ACEPTADO!");
        } else {
            console.log("\n"+nombreIngrediente+". Ingrediente NO ACEPTADO! Cuidado!");
        }
    }

    console.log("\n\n*** FIN DE RECOLECCIÓN ***");
    console.log("\nInforme de ingredientes encontrados:");
    console.log("\n\t" + ingredientesEncontrados.sort().join(", "));
    console.log("\nResultado: " + resultadoRecoleccion(ingredientesEncontrados));
    console.log("\n********************");
}

function resultadoRecoleccion(ingredientesAprobados) {
    if (ingredientesAprobados.length >= 2) {
        return "Aprobado"
    } else {
        return "Reprobado"
    };
};

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
};

main();
