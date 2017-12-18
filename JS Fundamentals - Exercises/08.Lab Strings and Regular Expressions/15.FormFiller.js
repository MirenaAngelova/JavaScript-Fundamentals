function formFiller(userName, email, phoneNumber, letter) {
    let patternName = /<!([A-Za-z]+)!>/g;
    let patternEmail = /<@([A-Za-z]+)@>/g;
    let patternPhone = /<\+([A-Za-z]+)\+>/g;

    letter.forEach(sentence => {
        sentence = sentence.replace(patternName, userName);
        sentence = sentence.replace(patternEmail, email);
        sentence = sentence.replace(patternPhone, phoneNumber);
        console.log(sentence);
    });
    // for (let sentence of letter) {
    //     sentence = sentence.replace(patternName, userName);
    //     sentence = sentence.replace(patternEmail, email);
    //     sentence = sentence.replace(patternPhone, phoneNumber);
    //     console.log(sentence);
    // }
}
formFiller('Pesho',
    'pesho@softuni.bg',
    '90-60-90', ['Hello, <!username!>!',
        'Welcome to your Personal profile.',
        'Here you can modify your profile freely.',
        'Your current username is: <!fdsfs!>. Would you like to change that? (Y/N)',
        'Your current email is: <@DasEmail@>. Would you like to change that? (Y/N)',
        'Your current phone number is: <+number+>. Would you like to change that? (Y/N)'
    ]
);