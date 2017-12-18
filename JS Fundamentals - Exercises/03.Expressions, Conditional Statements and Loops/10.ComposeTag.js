function composeTag(array) {
    let [fileLocation, alternateText] = array;
    console.log(`<img src="${fileLocation}" alt="${alternateText}">`);
}
composeTag(['smiley.gif', 'Smiley Face']);