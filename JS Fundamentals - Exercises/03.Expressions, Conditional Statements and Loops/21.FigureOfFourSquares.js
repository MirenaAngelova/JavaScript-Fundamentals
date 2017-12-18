function figureOfFourSquares([n]) {
    n = Number(n);
    let m = n - 2;
    n = n % 2 == 0 ? n - 1 : n;
    let middle = Math.ceil(n / 2) - 1;

    for (let i = 0; i < n; i++) {
        let plusPipe = '';
        let dashSpace = '';

        if (i == 0 || i == middle || i == n - 1) {
            plusPipe = '+';
            dashSpace = '-';
        } else {
            plusPipe = '|';
            dashSpace = ' ';
        }
        console.log(`${plusPipe}` +
            `${dashSpace.repeat(m)}` +
            `${plusPipe}` +
            `${dashSpace.repeat(m)}` +
            `${plusPipe}`);
    }
}

figureOfFourSquares(['4']);
figureOfFourSquares(['5']);
figureOfFourSquares(['6']);
figureOfFourSquares(['7']);