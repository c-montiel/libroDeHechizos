const mago = {
    nombre: "Sirius",
    puntosVida: 50,
    mediaSangre: false
};

function main() {
    delete mago.puntosVida;
    console.log(mago);
}

main();
