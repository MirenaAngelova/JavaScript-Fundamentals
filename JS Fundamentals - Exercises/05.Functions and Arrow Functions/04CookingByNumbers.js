function cookingByNumbers(cookingPieces) {
    let startPoint = cookingPieces.shift();
    for (let piece of cookingPieces) {
        startPoint = cooking(piece, startPoint);
        console.log(startPoint);
    }

    function cooking(operation, initial) {
        let op = operation[0];
        switch (op) {
            case 'c':
                return initial /= 2;
            case 'd':
                return initial = Math.sqrt(initial);
            case 's':
                return initial += 1;
            case 'b':
                return initial *= 3;
            case 'f':
                return initial -= initial * 20 / 100;

        }
    }
}
cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);