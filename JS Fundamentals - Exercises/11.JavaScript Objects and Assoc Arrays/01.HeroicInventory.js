function heroicInventory(inputData) {
    let heroicData = [];
    for (let line of inputData) {
        let lineSplit = line.split(/ \/ /);
        let nameCur = lineSplit[0];
        let levelCur = Number(lineSplit[1]);
        let itemsCur = [];
        if (lineSplit.length > 2) {
            itemsCur = lineSplit[2].split(/, /);
        }
        let hero = { name: nameCur, level: levelCur, items: itemsCur };
        heroicData.push(hero);
    }
    console.log(JSON.stringify(heroicData));
}
// function heroicInventory(input) {
//     let allHeroes = [];

//     for (let line of input) {
//         let heroTokens = line.split(/\s+\/\s+/g).filter(t => t != '');
//         [hero, levelStat, itemsArr] = [heroTokens[0], Number(heroTokens[1]), heroTokens[2] != undefined ? heroTokens[2].split(', ') : []];
//         allHeroes.push({ name: hero, level: levelStat, items: itemsArr });
//     }

//     console.log(JSON.stringify(allHeroes));
// }
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);