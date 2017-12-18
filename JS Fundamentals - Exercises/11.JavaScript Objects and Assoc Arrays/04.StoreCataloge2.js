function storeCatalog(inputData) {
    let catalog = new Map();
    let letters = new Set();
    inputData
        .map(input => input.split(/ : /))
        .map(input => catalog.set(input[0], Number(input[1]), letters.add(input[0][0])));

    for (let letter of Array.from(letters).sort()) {
        console.log(letter);
        for (let product of Array.from(catalog.keys()).sort()) {
            if (product.startsWith(letter)) {
                console.log(`  ${product}: ${catalog.get(product)}`);
            }
        }
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