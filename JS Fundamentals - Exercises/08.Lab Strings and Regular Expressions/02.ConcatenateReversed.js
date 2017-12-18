function concatenateReversed(arr) {

    let arrToString = arr.join('');
    //console.log(Array.from(arrToString).reverse().join(''));
    console.log(arrToString.split('').reverse().join(''));
}
concatenateReversed(['I', 'am', 'student']);
concatenateReversed(['race', 'car']);