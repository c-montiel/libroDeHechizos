const leer = require('prompt-sync')();

const objeto = {
    prop1: "a"
};

const CANT_PROP = 3

function main() {
    for (let i = 0; i < CANT_PROP; i++) {
        let clave = "";
        let valor = "";
        console.log("ingrese la clave de la propiedad: ");
        clave = leer();
        console.log("ingrese el valor de la propiedad: ");
        valor = leer();
        objeto[clave] = valor;
    }

    console.log(objeto);




};
main();
