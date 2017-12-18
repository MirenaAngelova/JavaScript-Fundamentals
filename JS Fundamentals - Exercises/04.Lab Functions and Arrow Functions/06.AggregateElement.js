function aggregateElements(array) {
    // let nums = array.map(Number);
    // let sum = nums.reduce((a, b) => a + b, 0);
    // let sumInverse = nums.reduce((a, b) => a + 1 / b, 0);
    // let concat = nums.map(String).reduce((a, b) => a + b, '');

    function aggregate(elements, initVal, func) {
        for (let element of elements) {
            initVal = func(initVal, element);
        }
        console.log(initVal);
    }
    aggregate(array, 0, (a, b) => a + b);
    aggregate(array, 0, (a, b) => a + 1 / b);
    aggregate(array, '', (a, b) => a + b);
}
aggregateElements([1, 2, 3]);
aggregateElements([2, 4, 8, 16]);