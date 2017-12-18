function medenkaWars(medenkaData) {

    let darkDamage = 0;
    let whiteDamage = 0;
    let darkAttacks = [];
    let whiteAttacks = [];
    for (let line of medenkaData) {
        let tokens = line.split(' ').filter(t => t != '');
        let damage = Number(tokens[0]) * 60;
        let attacker = tokens[1];
        if (attacker == 'white') {
            if (whiteAttacks >= 1) {
                if (damage == whiteAttacks[whiteAttacks.length - 1]) {
                    damage *= 2.75;
                    whiteAttacks = [];
                } else {
                    whiteAttacks.push(damage);
                }
            } else {
                whiteAttacks.push(damage);
            }
            whiteDamage += damage;
        } else {
            if (darkAttacks.length >= 4) {
                if (damage == darkAttacks[darkAttacks.length - 1] &&
                    damage == darkAttacks[darkAttacks.length - 2] &&
                    damage == darkAttacks[darkAttacks.length - 3] &&
                    damage == darkAttacks[darkAttacks.length - 4]) {
                    damage *= 4.5;
                }
            }
            darkDamage += damage;
            darkAttacks.push(damage);
        }
    }
    if (whiteDamage > darkDamage) {
        console.log("Winner - Vitkor");
        console.log(`Damage - ${whiteDamage}`);
    } else {
        console.log("Winner - Naskor");
        console.log(`Damage - ${darkDamage}`);
    }
}
medenkaWars(['5 white medenkas',
    '5 dark medenkas',
    '4 white medenkas'
]);
medenkaWars(['2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
]);