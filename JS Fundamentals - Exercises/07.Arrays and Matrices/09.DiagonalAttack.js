function diagonalAttack(stringArray) {
    let matrix = stringArray.map(col => col.split(' '));
    matrix = matrix.map(row => row.map(Number));
    // [rows, cols] = stringArray.split(/\s+/).map(Number);

    let sumMain = 0;
    let sumSecond = 0;
    let len = matrix.length - 1;
    for (let i = 0; i <= len; i++) {
        sumMain += matrix[i][i];
        sumSecond += matrix[i][len - i];

    }
    if (sumMain == sumSecond) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i != j && i + j != matrix.length - 1) {
                    matrix[i][j] = sumMain;
                }
            }
        }
    }
    console.log(matrix.map(col => col.join(' ')).join('\n'));
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
]);