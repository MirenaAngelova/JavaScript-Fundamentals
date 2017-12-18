function usernames(emailAddresses) {
    let users = [];
    for (let email of emailAddresses) {
        let [user, domein] = email.split('@');
        user += '.';
        let domeins = domein.split('.').forEach(d => user += d[0]);
        users.push(user);
    }
    console.log(users.join(', '));
}
usernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']);