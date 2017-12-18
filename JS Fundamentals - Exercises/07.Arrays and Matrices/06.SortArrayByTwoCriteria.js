function sortArray(initialArray) {
    initialArray.sort().sort((a, b) => a.length - b.length);
    console.log(initialArray.join('\n'));
}
sortArray(['alpha', 'beta', 'gamma']);
sortArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArray(['tets', 'Denny', 'omen', 'Defaukt']);