function autoCompany(inputData) {
    let companies = new Map();
    inputData = inputData.map(input => input.split(/ \| /));
    for (let input of inputData) {
        let company = input[0];
        let model = input[1];
        let quantity = Number(input[2]);
        if (!companies.has(company)) {
            companies.set(company, new Map());
        }
        if (!companies.get(company).has(model)) {
            companies.get(company).set(model, 0);
        }
        companies.get(company).set(model, companies.get(company).get(model) + quantity);
    }

    for (let [company, models] of companies) {
        console.log(company);
        for (let [model, quantity] of models) {
            console.log(`###${model} -> ${quantity}`);
        }
    }
}

autoCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);