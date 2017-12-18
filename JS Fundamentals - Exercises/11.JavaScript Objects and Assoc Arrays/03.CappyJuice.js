function cappyJuice(inputData) {
    let juices = {};
    let bottles = {};
    for (let input of inputData) {
        let tokens = input.split(/ => /);
        let juice = tokens[0];
        let quantity = Number(tokens[1]);
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = 0
        }
        juices[juice] += quantity;
        let currentQuantity = juices[juice];
        if (currentQuantity >= 1000) {
            bottles[juice] = parseInt(currentQuantity / 1000);
        }
    }
    // for (let key of Object.keys(bottles)) {
    //     console.log(`${key} => ${bottles[key]}`);
    // }

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}
cappyJuice(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
]);
cappyJuice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);