function magicMatrices(magicMatrix) {
    let magicSum = magicMatrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < magicMatrix.length; i++) {
        let cols = magicMatrix.map((element, index) => element[i]);
        let sumCols = cols.reduce((a, b) => a + b);
        let sumRows = magicMatrix[i].reduce((a, b) => a + b);

        if (sumCols !== magicSum || sumRows !== magicSum) {
            console.log('false');
            return;
        }
    }
    console.log('true');
}
magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);