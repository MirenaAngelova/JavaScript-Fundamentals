function spiralMatrix(rows, cols) {
    let row = 0;
    let col = 0;
    let index = 1;
    let len = rows * cols;
    let spiral = new Array(rows).fill(0).map(row => new Array(cols).fill(0));

    while (index <= len) {
        while (col < cols && spiral[row][col] == 0) {
            spiral[row][col] = index;
            index++;
            col++;
        }
        row++;
        col--;

        while (row < rows && spiral[row][col] == 0) {
            spiral[row][col] = index;
            index++;
            row++;
        }
        row--;
        col--;

        while (col >= 0 && spiral[row][col] == 0) {
            spiral[row][col] = index;
            index++;
            col--;
        }
        col++;
        row--;

        while (row >= 0 && spiral[row][col] == 0) {
            spiral[row][col] = index;
            index++;
            row--;
        }
        row++;
        col++;

    }
    console.log(spiral.map(row => row.join(' ')).join('\n'));
}
spiralMatrix(5, 5)