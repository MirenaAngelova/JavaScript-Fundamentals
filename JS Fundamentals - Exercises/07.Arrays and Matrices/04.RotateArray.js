function rotateArray(elements) {
    let k = elements.pop();
    let len = elements.length;
    let rotatedElem = [];
    for (let i = 0; i < len; i++) {
        let j = (i + k % len) % len;
        rotatedElem[j] = elements[i];
    }
    console.log(rotatedElem.join(' '));
}
rotateArray([1, 2, 3, 4, 2]);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', 15]);