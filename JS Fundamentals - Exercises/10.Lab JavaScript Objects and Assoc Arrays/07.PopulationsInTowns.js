function populationsInTowns(input) {
    let townsData = input.map(i => i.split(/ <-> /));
    let towns = new Map();
    for (let data of townsData) {
        towns.has(data[0]) ?
            towns.set(data[0], Number(towns.get(data[0])) + Number(data[1])) :
            towns.set(data[0], Number(data[1]));
    }
    let allTowns = Array.from(towns.keys());
    allTowns.map(key => console.log(`${key} : ${towns.get(key)}`));
}
populationsInTowns(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
]);
populationsInTowns(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Las Vegas <-> 1000000',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);