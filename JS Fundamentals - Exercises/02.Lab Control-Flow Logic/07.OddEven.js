function oddEven([n]) {
    let rem = n % 2;
    if (rem == 0) {
        console.log('even');
    } else if (rem == parseInt(rem)) {
        console.log('odd');
    } else {
        console.log('invalid');
    }
}
oddEven(['5']);
oddEven(['8']);
oddEven(['1.5']);