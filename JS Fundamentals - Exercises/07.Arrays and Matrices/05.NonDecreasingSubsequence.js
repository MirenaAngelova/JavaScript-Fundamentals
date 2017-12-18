function nonDecreasing(sequence) {
    let nonDecresingSeq = [];
    let biggest = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < sequence.length; i++) {
        if (biggest <= sequence[i]) {
            biggest = sequence[i];
            nonDecresingSeq.push(biggest);
        }
    }
    console.log(nonDecresingSeq.join('\n'));
}
nonDecreasing([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasing([1, 2, 3, 4]);
nonDecreasing([20, 3, 2, 15, 6, 1]);