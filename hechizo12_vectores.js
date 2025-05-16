const leer = require('prompt-sync')();

const INGREDIENTE_01_FORMAT = "1 - Raíz de valeriana";
const INGREDIENTE_02_FORMAT = "2 - Mandrágora negra";
const INGREDIENTE_03_FORMAT = "3 - Pluma de hipogrifo";
const INGREDIENTE_04_FORMAT = "4 - Ojo de escarabajo";
const INGREDIENTE_05_FORMAT = "5 - Sangre de dragón";

const INGREDIENTE_01 = "Raíz de valeriana";
const INGREDIENTE_02 = "Mandrágora negra";
const INGREDIENTE_03 = "Pluma de hipogrifo";
const INGREDIENTE_04 = "Ojo de escarabajo";
const INGREDIENTE_05 = "Sangre de dragón";

const INGREDIENTES_ENCONTRADOS = [];

function main() {
    let ingredienteEncontrado = "";
    
    console.log("\n*** Iniciando recoleccion ***");
    console.log("\n Qué ingredientes encontraste?: \n");
    console.log(INGREDIENTE_01_FORMAT);
    console.log(INGREDIENTE_02_FORMAT);
    console.log(INGREDIENTE_03_FORMAT);
    console.log(INGREDIENTE_04_FORMAT);
    console.log(INGREDIENTE_05_FORMAT);

    if (ingredienteEncontrado == 1 || ingredienteEncontrado == 2 || ingredienteEncontrado == 3) {
        INGREDIENTES_ENCONTRADOS.push("leer()");
    } Else {
        console.log("_FORMAT");
    }

    
console.log(INGREDIENTES_ENCONTRADOS);

};

main();
