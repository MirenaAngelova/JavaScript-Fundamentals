function squareOfStars([n = 5]) {

    function printLineSquare() {
        console.log('* '.repeat(n - 1) + '*');
    }

    for (let i = 1; i <= n; i++) {
        printLineSquare();
    }
}

squareOfStars(['1']);
squareOfStars(['2']);
squareOfStars(['5']);
squareOfStars([]);