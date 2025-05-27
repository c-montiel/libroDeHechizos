function main() {
    let matrix = [];
    let contador = 0;

    for (let i = 0; i < 3; i++) {
        matrix.push([]);

        for (let j = 0; j < 3; j++) {
            contador++
            matrix[i].push(contador);
        }
    }
    console.log(matrix);
    matrix[0].splice(1, 1, null);
    matrix[1].splice(0, 1, null);
    matrix[2].splice(2, 2, null);
    console.table(matrix);
    console.log((matrix));
    
};

main();
