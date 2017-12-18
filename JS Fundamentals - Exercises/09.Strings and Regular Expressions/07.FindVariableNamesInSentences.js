function findNames(sentence) {
    //let matches = [];
    //sentence = sentence.split(/ /g);
    sentence = sentence.match(/\b_[A-Za-z\d]+\b/g);
    console.log(sentence.map(s => s.toString().replace('_', '')).join(','));
    // sentence = sentence
    //     .map(s => s.match(/\b_[A-Za-z\d]+\b/g))
    //     .filter(s => s != null)
    //     .map(s => s.toString().replace('_', ''))
    //     .map(s => matches.push(s));
    // console.log(matches.join(','));
}
findNames('The _id and _age variables are both integers.');
findNames('Calculate the _area of the _perfectRectangle object.');
findNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');