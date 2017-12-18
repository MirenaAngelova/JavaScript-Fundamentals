function countWords(inputLines) {
    let words = inputLines.join('\n').toLowerCase().split(/[^A-Za-z_]+/).filter(w => w != '');
    let wordsCount = new Map();
    for (let w of words) {
        wordsCount.has(w) ? wordsCount.set(w, wordsCount.get(w) + 1) : wordsCount.set(w, 1);
    }
    let allWords = Array.from(wordsCount.keys()).sort();
    allWords.forEach(w => console.log(`'${w}' -> ${wordsCount.get(w)} times`));
}
countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?']);
countWords([`Far too slow,`, `you're far too slow.`]);
countWords([`JS devs use Node.js`, `for server-side JS.`, `JS devs use JS.`, `-- JS for devs --`]);