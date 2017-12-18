function modifyAverage(num) {
    let numToStr = num.toString();
    let sum = Number(0);
    let average = Number(0);

    function sumDigits(numToStr) {
        for (let n of numToStr) {
            sum += Number(n);
        }
        return averageSum(sum, numToStr);
    }

    function averageSum(sum, numToStr) {
        return sum / numToStr.length;
    }

    average = sumDigits(numToStr);
    while (average <= 5) {
        numToStr += '9';
        sum = 0;
        average = sumDigits(numToStr);
    }
    console.log(numToStr);
}

modifyAverage(101);
modifyAverage(5835);