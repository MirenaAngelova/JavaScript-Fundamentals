function sumByTown(townsArr) {

    let towns = {};
    for (let i = 0; i < townsArr.length; i += 2) {
        if (!towns.hasOwnProperty(townsArr[i])) {
            towns[townsArr[i]] = 0;
        }
        towns[townsArr[i]] += Number(townsArr[i + 1]);
    }
    console.log(JSON.stringify(towns));
}
sumByTown(['Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4']);
sumByTown(['Sofia', '20', 'Varna', '3', 'sofia', '5', 'Varna', '4']);