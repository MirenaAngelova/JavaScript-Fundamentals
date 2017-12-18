function expedition(primaryMatrix, secondaryMatrix, overlayCoordinates, startingCoordinates) {
    for (let overlay of overlayCoordinates) {
        let startRow = overlay[0];
        let startCol = overlay[1];
        for (let i = startRow; i < Math.min(startRow + secondaryMatrix.length, primaryMatrix.length); i++) {
            for (let j = startCol; j < Math.min(startCol + secondaryMatrix[i - startRow].length, primaryMatrix[i].length); j++) {
                if (secondaryMatrix[i - startRow][j - startCol] == 1) {
                    primaryMatrix[i][j] = primaryMatrix[i][j] == 0 ? 1 : 0;
                }
            }
        }
    }
    let rows = primaryMatrix.length;
    let cols = primaryMatrix[0].length;
    let startRow = startingCoordinates[0];
    let startCol = startingCoordinates[1];
    let steps = 1;
    let direction = '';
    while (true) {
        if (checkBorders(startRow + 1, startCol) &&
            primaryMatrix[startRow + 1][startCol] == 0 &&
            direction != 'Top') {
            startRow++;
            direction = 'Bottom';

        } else if (checkBorders(startRow, startCol - 1) &&
            primaryMatrix[startRow][startCol - 1] == 0 &&
            direction != 'Right') {
            startCol--;
            direction = 'Left';

        } else if (checkBorders(startRow - 1, startCol) &&
            primaryMatrix[startRow - 1][startCol] == 0 && direction != 'Bottom') {
            startRow--;
            direction = 'Top';

        } else if (checkBorders(startRow, startCol + 1) &&
            primaryMatrix[startRow][startCol + 1] == 0 &&
            direction != 'Left') {
            startCol++;
            direction = 'Right';

        } else {
            break;
        }
        steps++;
    }

    console.log(steps);
    console.log(definePosition(startRow, startCol));

    function definePosition(row, col) {
        let output = '';
        if (row == 0) {
            output = 'Top';
        } else if (row == rows - 1) {
            output = 'Bottom';
        } else if (col == 0) {
            output = 'Left';
        } else if (col == cols - 1) {
            output = 'Right';
        } else if (row < rows / 2 && col >= cols / 2) {
            output = 'Dead end 1';
        } else if (row < rows / 2 && col < cols / 2) {
            output = 'Dead end 2';
        } else if (row >= rows / 2 && col < cols / 2) {
            output = 'Dead end 3';
        } else if (row >= rows / 2 && col >= cols / 2) {
            output = 'Dead end 4';
        }
        return output;
    }

    function checkBorders(row, col) {
        return (row >= 0 && row < rows) && (col >= 0 && col < cols);
    }
}
// expedition([
//     [1, 1, 0, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 0, 0, 0, 1],
//     [1, 0, 0, 1, 0, 0, 0, 1],
//     [0, 0, 0, 1, 1, 0, 0, 1],
//     [1, 0, 0, 1, 1, 1, 1, 1],
//     [1, 0, 1, 1, 0, 1, 0, 0]
// ], [
//     [0, 1, 1],
//     [0, 1, 0],
//     [1, 1, 0]
// ], [
//     [1, 1],
//     [2, 3],
//     [5, 3]
// ], [0, 2]);
expedition([
    [1, 1, 0, 1],
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [1, 0, 1, 0]
], [
    [0, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1]
], [
    [0, 0],
    [2, 1],
    [1, 0]
], [2, 0]);