function aggregateTable(table) {
    let towns = [];
    let incomes = 0;
    for (let line of table) {
        let lineSplit = line.split('|');
        towns.push(lineSplit[1].trim());
        incomes += Number(lineSplit[2].trim());
    }
    console.log(towns.join(', '));
    console.log(incomes);
}
aggregateTable(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275'
]);