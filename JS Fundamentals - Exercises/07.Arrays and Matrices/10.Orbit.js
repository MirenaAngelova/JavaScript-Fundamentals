function orbit(initialData) {
    let cols = initialData[1];
    let rows = initialData[0];
    let x = initialData[3];
    let y = initialData[2];
    let matrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));

    let count = 1;
    let n = 1;
    matrix[y][x] = 1;
    while (count <= Math.max(rows, cols)) {
        let startRow = y - n < 0 ? 0 - y : -n;
        let endRow = y + n > rows - 1 ? rows - 1 - y : n;
        let startCol = x - n < 0 ? 0 - x : -n;
        let endCol = x + n > cols - 1 ? cols - 1 - x : n;
        for (let i = startRow; i <= endRow; i++) {
            for (let j = startCol; j <= endCol; j++) {

                if (matrix[y + i][x + j] == 0) {
                    matrix[y + i][x + j] = n + 1;
                }

            }
        }
        count++;
        n++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
orbit([5, 4, 0, 0]);