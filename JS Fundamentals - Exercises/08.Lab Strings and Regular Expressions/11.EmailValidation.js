function emailValidation(email) {
    pattern = /^[a-z0-9.]+\@[a-z]+\.[a-z]+$/i; ///^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,20}$/i;

    let trueFalse = pattern.test(email);
    if (trueFalse) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}
emailValidation('valid@email.bg');
emailValidation('invalid@emai1.bg');