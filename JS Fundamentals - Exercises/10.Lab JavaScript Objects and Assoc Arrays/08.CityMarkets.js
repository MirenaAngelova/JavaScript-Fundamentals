function cityMarkets(input) {
    let towns = new Map();
    let townsData = input.map(i => i.split(/ -> | : /));
    for (let data of townsData) {
        let [town, product, sales, price] = data;
        let income = Number(sales) * Number(price);
        if (!towns.has(town)) {
            towns.set(town, new Map());
        }
        if (!towns.get(town).has(product)) {
            towns.get(town).set(product, 0);
        }
        towns.get(town).set(product, towns.get(town).get(product) + income);
    }

    for (let [town, products] of towns) {
        console.log(`Town - ${town}`);
        for (let [product, income] of products) {
            console.log(`$$$${product} : ${income}`);
        }
    }
}
cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);