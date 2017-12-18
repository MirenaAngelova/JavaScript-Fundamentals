function wordsUppercase(str) {
    let strUpper = str.toUpperCase();
    let word = extractWords();
    word = word.filter(w => w != '');

    function extractWords() {
        return strUpper.split(/\W+/);
    }

    console.log(word.join(', '));
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');