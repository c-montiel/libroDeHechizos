
const leer = require('prompt-sync')();

function main() {
    let valorInicial = 0;
    console.log("ingrese un valor en segundos para iniciar la cuenta regresiva");
    valorInicial = Number(leer());
    cuentaRegresivaDesde(valorInicial);
}

function cuentaRegresivaDesde(segundosInicial) {
    let contador = segundosInicial;
    let intervalo = setInterval(() => {
        console.log(contador);
        contador--;
        if (contador == -1) {
            clearInterval(intervalo);
        }
    }, 1000, contador);
};


main();



