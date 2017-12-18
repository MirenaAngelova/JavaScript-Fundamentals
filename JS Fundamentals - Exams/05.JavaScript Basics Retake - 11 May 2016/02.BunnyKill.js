function bunnyKill(bunnyData) {
    let [bombs, bunnies] = [bunnyData.pop().split(/[\s,]+/g).map(Number),
        bunnyData.map(line => line.split(/\s+/g).map(Number))
    ];

    let bunniesDamage = 0;
    let bunniesDead = 0;

    function damagedBunnies(bombRow, bombCol, damage) {
        for (let i = Math.max(0, bombRow - 1); i <= Math.min(bunnies.length - 1, bombRow + 1); i++) {
            for (let j = Math.max(0, bombCol - 1); j <= Math.min(bunnies[i].length - 1, bombCol + 1); j++) {
                if (i != bombRow || j != bombCol) {
                    bunnies[i][j] -= damage;
                    bunnies[i][j] = bunnies[i][j] < 0 ? 0 : bunnies[i][j];
                }
            }
        }
    }

    for (let i = 0; i < bombs.length; i += 2) {
        let row = bombs[i];
        let col = bombs[i + 1];

        if (bunnies[row][col] > 0) {
            bunniesDamage += bunnies[row][col];
            bunniesDead++;
            damagedBunnies(row, col, bunnies[row][col]);
            bunnies[row][col] = 0;
        }
    }

    bunnies.map(row => bunniesDamage += row.reduce((a, b) => a + b));
    bunnies.map(row => bunniesDead += row.filter(a => a > 0).length);

    console.log(bunniesDamage);
    console.log(bunniesDead);
}
bunnyKill(
    ['5 10 15 20',
        '10 10 10 10',
        '10 15 10 10',
        '10 10 10 10',
        '2,2 0,1'
    ]);

bunnyKill(
    ['10 10 10',
        '10 10 10',
        '10 10 10',
        '0,0'
    ]);