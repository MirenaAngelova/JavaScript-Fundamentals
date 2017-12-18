function compoundInterest(array) {
    let [P, i, m, t] = array;
    let n = 12 / m;
    let F = P * Math.pow((1 + i / 100 / n), n * t);
    console.log(F.toFixed(2));
}
compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);