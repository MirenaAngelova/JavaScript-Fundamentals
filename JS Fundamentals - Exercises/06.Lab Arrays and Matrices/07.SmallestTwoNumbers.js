function smallestTwoNumbers(elements) {
    elements = elements.sort((a, b) => a - b);
    let smallestTwo = elements.slice(0, 2);
    console.log(smallestTwo.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);