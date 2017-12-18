function sumAndVat(array) {

    let nums = array.map(Number);
    let sum = nums.reduce(function(a, b) {
        return a + b;
    }, 0);
    let vat = sum * 20 / 100;
    let total = sum + vat;

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}

sumAndVat(['1.20', '2.60', '3.50']);
sumAndVat(['3.12', '5', '18', '19.24', '1953.2262', '0.001564', '1.1445']);