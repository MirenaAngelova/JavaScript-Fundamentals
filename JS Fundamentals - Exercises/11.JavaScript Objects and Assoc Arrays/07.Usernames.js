function usernames(usernamesData) {
    let users = new Set();
    usernamesData.map(user => users.add(user));
    Array.from(users).sort((a, b) => lengthSorted(a, b))
        .forEach(user => console.log(user));

    function lengthSorted(a, b) {
        if (a.length != b.length) {
            return a.length - b.length;
        } else {
            return a.localeCompare(b);
        }
    }
}
usernames(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);
usernames(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot'
]);