function equalNeighbours(matrix) {
    let count = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (j == matrix[i].length - 1) {
                count = down(matrix, i, j, count);
            } else if (i == matrix.length - 1) {
                count = right(matrix, i, j, count);
            } else {
                count = right(matrix, i, j, count);
                count = down(matrix, i, j, count);
            }
        }
    }
    console.log(count);

    function right(matrix, i, j, count) {
        if ((j + 1 <= matrix[i].length - 1) &&
            matrix[i][j] == matrix[i][j + 1]) {
            count++;
        }
        return count;
    }

    function down(matrix, i, j, count) {
        if ((i + 1 <= matrix.length - 1) &&
            matrix[i][j] == matrix[i + 1][j]) {
            count++;
        }
        return count;
    }
}
equalNeighbours([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]);
equalNeighbours([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);