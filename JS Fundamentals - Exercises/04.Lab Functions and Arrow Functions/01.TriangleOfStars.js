function triangleOfStars([n]) {
    n = Number(n);

    function printStars(count) {
        return console.log('*'.repeat(count));
    }

    for (let i = 1; i <= n; i++) {
        printStars(i);
    }

    for (let i = n - 1; i >= 1; i--) {
        printStars(i);
    }
}

triangleOfStars(['1']);
triangleOfStars(['2']);
triangleOfStars(['5']);