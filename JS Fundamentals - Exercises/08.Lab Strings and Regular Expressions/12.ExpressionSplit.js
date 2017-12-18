function expressionSplit(expression) {
    let pattern = /[,;\s.()]+/g;
    expression = expression.split(pattern);
    console.log(expression.join('\n'));
}
expressionSplit('let sum = 4 * 4,b = "wow";');
expressionSplit('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}');