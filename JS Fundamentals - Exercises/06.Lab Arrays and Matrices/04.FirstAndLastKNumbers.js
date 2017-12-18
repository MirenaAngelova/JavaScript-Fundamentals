function firstAndLast(elements) {
    let k = elements.shift();
    let l = elements.length;
    let firstK = elements.slice(0, k);
    let lastK = elements.slice(l - k, l);
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLast([2, 7, 8, 9]);
firstAndLast([3, 6, 7, 8, 9]);