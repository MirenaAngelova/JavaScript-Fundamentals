function jansNotation(instructions) {
    let operands = new Array();
    let operators = new Array();
    let notation = Number(0);
    instructions
        .map(elem => elem === Number(elem) ? operands.push(elem) : operators.push(elem));
    if (operands.length - 1 > operators.length) {
        console.log(`Error: too many operands!`);
        return;
    } else if (operands.length - 1 < operators.length) {
        console.log(`Error: not enough operands!`);
        return;
    }

    for (let i = 0; i < operands.length - 1; i++) {
        notation = executeOperation(operands[i], operands[i + 1], operators[i]);
        operands[i + 1] = notation;
    }
    console.log(notation);

    function executeOperation(a, b, operator) {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    }
}
jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([31, 2, '+', 11, '/']);
jansNotation([15, '/']);
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']);