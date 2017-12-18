function printEveryNth(elements) {
    let n = elements.pop();

    for (let i = 0; i < elements.length; i += n) {
        console.log(elements[i]);
    }
}
printEveryNth([5, 20, 31, 4, 20, 2]);
printEveryNth(['dsa', 'asd', 'test', 'tset', 2]);
printEveryNth([1, 2, 3, 4, 5, 6]);