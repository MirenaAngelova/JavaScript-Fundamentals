function splitString(stringToSplit, delimiter) {
    stringToSplit = stringToSplit.split(delimiter);
    console.log(stringToSplit.join('\n'));
}
splitString('One-Two-Three-Four-Five', '-');
splitString('http://platform.softuni.bg', '.');