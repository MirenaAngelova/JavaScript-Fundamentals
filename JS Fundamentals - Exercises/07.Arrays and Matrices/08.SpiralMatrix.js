function spiralMatrix(rows, cols) {
    let row = 0;
    let col = 0;
    let len = rows * cols;
    let index = 1;
    let spiral = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
    while (rows > 0) {
        for (let j = col; j < col + cols && index <= len; j++) {
            spiral[row][j] = index;
            index++;
        }

        for (let i = row + 1; i < row + rows && index <= len; i++) {
            spiral[i][col + cols - 1] = index;
            index++;
        }

        for (let j = col + cols - 2; j >= col && index <= len; j--) {
            spiral[row + rows - 1][j] = index;
            index++;
        }

        for (let i = row + rows - 2; i >= row + 1 && index <= len; i--) {
            spiral[i][col] = index;
            index++;
        }
        row++;
        col++;
        rows -= 2;
        cols -= 2
    }

    console.log(spiral.map(row => row.join(' ')).join('\n'));

}
spiralMatrix(5, 4);