function biggestOfThreeNumbers(array) {

    console.log(Math.max(...array.map(Number)))
}

biggestOfThreeNumbers(['5', '-2', '7']);
biggestOfThreeNumbers(['130', '5', '99']);
biggestOfThreeNumbers(['43', '43.2', '43.1']);
biggestOfThreeNumbers(['5', '5', '5']);
biggestOfThreeNumbers(['-10', '-20', '-30']);