/*
saludar
*/
const nombresASaludar = ["juan", "pedro", "maria"]

function main() {
    for (let i = 0; i < nombresASaludar.length; i++) {
        saludar(nombresASaludar[i])
    }
};


function saludar(nombreSaludar) {
    console.log("hola mundo " + nombreSaludar);
};
main();
