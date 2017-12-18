function letterOccurrencesInString([str, letter]) {
    let count = Number(0);
    for (let s of str) {
        if (s == letter) {
            count++;
        }
    }

    console.log(count);
}

letterOccurrencesInString(['hello', 'l']);
letterOccurrencesInString(['panther', 'n']);