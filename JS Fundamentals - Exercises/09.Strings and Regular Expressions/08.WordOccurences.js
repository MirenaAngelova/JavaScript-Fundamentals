function wordOccurences(sentence, word) {
    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern, `gi`);
    sentence = sentence.match(regex);
    if (sentence != null) {
        console.log(sentence.length);
    } else {
        console.log(0);
    }


    // let count = 0;
    // let match = regex.exec(sentence);
    // while (match) {
    //     count++;
    //     match = regex.exec(sentence);
    // }
    // console.log(count);
}
wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');
wordOccurences('How do you plan on achieving that? How? How can you even think of that?', 'how');
wordOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');