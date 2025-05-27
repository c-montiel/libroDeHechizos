function main () {
    let matrix = [];
    let contador = 0;

    for (let i = 0; i < 3; i++) {
        matrix.push([]);

        for (let j = 0; j < 3; j++) {
            contador++;
            matrix[i].push(contador);
        }
    }

    matrix[1].pop();
    console.log(matrix);
}

main();
