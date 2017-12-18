function binaryLogarithm(array) {
    let nums = array.map(Number);
    for (let n of nums) {
        console.log(`${Math.log2(n)}`);
    }
}

binaryLogarithm(['1024', '1048576', '256', '1', '2']);