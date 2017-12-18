function counWords(text) {
    let pattern = /\w+/g;
    let textObj = {};
    text = text.match(pattern);

    for (let i = 0; i < text.length; i++) {
        if (!textObj.hasOwnProperty(text[i])) {
            textObj[text[i]] = 0;
        }
        textObj[text[i]]++;
    }
    console.log(JSON.stringify(textObj));
}
counWords(`Far too slow, you're far too slow.`);
counWords(`JS devs use Node.js for server-side JS.-- JS for devs`);