function rotateArray(elements) {
    let k = elements.pop();
    let len = k % elements.length;;

    for (let i = 0; i < len; i++) {
        let last = elements.pop();
        elements.unshift(last);
    }
    console.log(elements.join(' '));
}
rotateArray([1, 2, 3, 4, 2]);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', 15]);