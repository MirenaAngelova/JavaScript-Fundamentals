function filterByAge(array) {
    let n = array.shift();
    let input = array.map(function(a) {
        return a.toString();
    });

    let person = new Object();

    for (var i = 1; i < input.length; i += 2) {
        if (parseInt(input[i]) > n) {
            person.name = input[i - 1]
            person.age = parseInt(input[i]);
            console.log(person);
        }
    }
}

filterByAge(['12', 'Ivan', '15', 'Asen', '9']);