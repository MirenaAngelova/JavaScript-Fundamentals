function nonDecreasing(sequence) {
    let filteredSequence = sequence.filter((a, b) => a >= Math.max(...sequence.slice(0, b)));

    console.log(filteredSequence.join('\n'));
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasing([1, 2, 3, 4]);
nonDecreasing([20, 3, 2, 15, 6, 1]);