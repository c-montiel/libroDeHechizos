function main() {  
    let matrix = []
    let contador = 0;
    for (let i = 0; i < 3; i++) {
        matrix.push([]);

        for (let j = 0; j < 3; j++) {
            contador++
            matrix[i].push(contador);
        }
        
    }

    console.log(matrix);
    console.table(matrix);
    console.log(matrix[0][1], matrix[1][0], matrix[2][2]);
    
    matrix[0][1] = -7;
    matrix[1][0] = -7;
    matrix[2][2] = -7;
    console.table(matrix);
    console.log(matrix);
    
}

main();
