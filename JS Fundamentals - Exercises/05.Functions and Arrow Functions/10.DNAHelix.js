function dnaHelix(dnaLength) {
    let sequence = 'ATCGTTAGGG';
    let countSequence = 0;
    let lenSequence = sequence.length;
    let dna = 4;
    let countDna = 0;

    for (let j = 0; j < dnaLength; j++) {
        countSequence %= lenSequence;
        console.log('*'.repeat(2 - countDna) + sequence[countSequence++] + '-'.repeat(2 * countDna) +
            sequence[countSequence++] + '*'.repeat(2 - countDna));
        if (j % dna < dna - 2) {
            countDna++;
        } else {
            countDna--;
        }
    }
}
//dnaHelix([4]);
dnaHelix([10]);