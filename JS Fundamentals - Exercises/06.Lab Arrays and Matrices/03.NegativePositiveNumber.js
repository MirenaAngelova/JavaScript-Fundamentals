function negativePositive(negPos) {
    let orderedNum = [];
    for (let element of negPos) {
        if (element < 0) {
            orderedNum.unshift(element);
        } else {
            orderedNum.push(element);
        }
    }
    console.log(orderedNum.join('\n'));
}
negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1]);