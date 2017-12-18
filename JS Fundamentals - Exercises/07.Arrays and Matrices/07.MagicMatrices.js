function magicMatrices(magicMatrix) {
    let sumMagic = magicMatrix[0].reduce((a, b) => a + b);
    let isMagic = false;

    for (let i = 0; i < magicMatrix.length; i++) {
        let sum = 0;
        for (var j = 0; j < magicMatrix[i].length; j++) {
            sum += magicMatrix[i][j];
            // if (i == 0) {
            //     sumMagic = sum;
            // }
        }
        isMagic = sumMagic == sum ? true : false;
        if (!isMagic) {
            console.log('false');
            return;
        }
    }

    for (let j = 0; j < magicMatrix[0].lenth; j++) {
        let sum = 0;
        for (var i = 0; i < magicMatrix.length; i++) {
            sum += magicMatrix[i][j];
        }
        isMagic = sumMagic == sum ? true : false;
        if (!isMagic) {
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