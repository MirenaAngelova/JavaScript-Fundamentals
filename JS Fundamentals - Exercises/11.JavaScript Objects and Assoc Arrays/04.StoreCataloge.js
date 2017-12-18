function storeCatalog(inputData) {
    let catalog = {};

    inputData = inputData.map(input => input.split(/ : /))
        .map(input => catalog[input[0]] = Number(input[1]));

    let sortedProducts = [];
    let sortedLetters = new Set();
    Object.keys(catalog).map(key => sortedProducts.push(key));
    sortedProducts.sort().map(key => sortedLetters.add(key[0]));

    for (let letter of sortedLetters) {
        console.log(letter);
        sortedProducts
            .filter(product => product[0] == letter)
            .map(product => console.log(`  ${product}: ${catalog[product]}`))
    }
}
storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
storeCatalog(['Banana : 2',
    `Rubic's Cube: 5`,
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
]);