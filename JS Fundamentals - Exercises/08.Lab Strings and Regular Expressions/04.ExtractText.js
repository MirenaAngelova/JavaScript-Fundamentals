function extractText(text) {
    let extraction = [];
    let start = text.indexOf(`(`);
    while (start > -1) {
        let end = text.indexOf(')', start);
        if (end == -1) {
            break;
        }
        extraction.push(text.substring(start + 1, end));
        start = text.indexOf('(', end);
    }
    console.log(extraction.join(', '));
}
extractText('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');