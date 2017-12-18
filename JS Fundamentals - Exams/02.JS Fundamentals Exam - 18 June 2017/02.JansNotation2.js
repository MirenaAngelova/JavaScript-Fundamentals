function jansNotation(instructions) {
    let notations = [];
    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };
    for (let instruction of instructions) {
        let operation = operations[instruction];
        if (operation == undefined) {
            notations.push(instruction);
        } else {
            let [b, a] = [notations.pop(), notations.pop()];
            if (b == undefined || a == undefined) {
                console.log(`Error: not enough operands!`);
                return;
            }
            notations.push(operation(a, b));
        }
    }

    if (notations.length > 1) {
        console.log(`Error: too many operands!`);

    } else {
        console.log(notations.pop());
    }
}
jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([31, 2, '+', 11, '/']);
jansNotation([15, '/']);
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);