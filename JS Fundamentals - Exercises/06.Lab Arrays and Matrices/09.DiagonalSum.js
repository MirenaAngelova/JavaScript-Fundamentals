function diagonalSum(matrix) {
    let sumMain = 0;
    let sumSecond = 0;
    for (let i = 0; i < matrix.length; i++) {
        sumMain += matrix[i][i];
        sumSecond += matrix[i][matrix.length - 1 - i];
    }
    console.log(sumMain + ' ' + sumSecond);
}
diagonalSum([
    [20, 40],
    [10, 60]
]);
diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);