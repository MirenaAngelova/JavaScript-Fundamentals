function validityChecker(array) {

    for (let i = 0; i < array.length; i += 2) {
        let x = array[i];
        let y = array[i + 1];
        let distance = Math.sqrt(x * x + y * y);
        let validInvalid = isInteger(distance);
        console.log(`{${x}, ${y}} to {0, 0} is ${validInvalid}`);
    }

    function distanceXY(array) {
        let diffX = Math.pow((array[0] - array[2]), 2);
        let diffY = Math.pow((array[1] - array[3]), 2);
        let distance = Math.sqrt(diffX + diffY);
        let validInvalid = isInteger(distance);
        return `{${array[0]}, ${array[1]}} to {${array[2]}, ${array[3]}} is ${validInvalid}`;
    }

    console.log(distanceXY(array));

    function isInteger(distance) {
        let validInvalid = distance == parseInt(distance) ? 'valid' : 'invalid';
        return validInvalid;
    }
}

validityChecker([3, 0, 0, 4]);
//validityChecker([2, 1, 1, 1]);