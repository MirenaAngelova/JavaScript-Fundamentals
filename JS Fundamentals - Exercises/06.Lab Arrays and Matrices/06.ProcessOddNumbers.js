function processOddNumbers(numbers) {
    let len = numbers.length;
    let startNum = len % 2 == 0 ? len - 1 : len - 2;
    let orderedNums = [];
    for (let i = startNum; i >= 0; i -= 2) {
        orderedNums.push(numbers[i] * 2);
    }
    console.log(orderedNums.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);