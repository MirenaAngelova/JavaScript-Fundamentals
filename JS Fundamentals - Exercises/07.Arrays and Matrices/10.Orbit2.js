function orbit(initialData) {
    let rows = initialData[0];
    let cols = initialData[1];
    let x = initialData[2];
    let y = initialData[3];

    let matrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let diffRow = Math.abs(i - x);
            let diffCol = Math.abs(j - y);
            let diff = Math.max(diffRow, diffCol);
            matrix[i][j] = diff + 1;
        }
    }
    console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
orbit([5, 4, 0, 0]);