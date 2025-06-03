

const objeto = {
    prop1: "A",
    prop2: "B",
    prop3: "C"
};


function main() {
    let aux = "";
    aux = objeto.prop1;
    objeto.prop1 = objeto.prop3;
    objeto.prop3 = aux;
    console.log(objeto);
};

main();
