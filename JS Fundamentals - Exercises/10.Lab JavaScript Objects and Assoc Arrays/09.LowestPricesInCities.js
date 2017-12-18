function lowestPrice(input) {
    let products = new Map();
    let inputSplit = input.map(line => line.split(/ \| /));

    for (let line of inputSplit) {
        let [town, product, price] = line;
        if (!products.has(product)) {
            products.set(product, new Map());
        }
        products.get(product).set(town, Number(price));
    }

    for (let [product, towns] of products) {
        let lowestPrice = Number.POSITIVE_INFINITY;
        let lowestTown = '';
        for (let [town, price] of towns) {
            if (price < lowestPrice) {
                lowestPrice = price;
                lowestTown = town;
            }
        }
        console.log(`${product} -> ${lowestPrice} (${lowestTown})`);
    }
}
lowestPrice(['Sofia City | Audi | 100000',
        'Sofia City | BMW | 100000',
        'Sofia City | Mitsubishi | 10000',
        'Sofia City | Mercedes | 10000',
        'Sofia City | NoOffenseToCarLovers | 0',
        'Mexico City | Audi | 1000',
        'Mexico City | BMW | 99999',
        'New York City | Mitsubishi | 10000',
        'New York City | Mitsubishi | 1000',
        'Mexico City | Audi | 100000',
        'Washington City | Mercedes | 1000'
    ])
    // lowestPrice(['Sample Town | Sample Product | 2000',
    //     'Sample Town | Sample Product | 1000',
    //     'Sample Town | Orange | 2',
    //     'Sample Town | Peach | 1',
    //     'Sofia | Orange | 3',
    //     'Sofia | Peach | 2',
    //     'New York | Sample Product | 1000.1',
    //     'New York | Burger | 10'
    // ]);