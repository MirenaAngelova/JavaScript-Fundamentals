function stringOfNums([n]) {
    n = Number(n);
    let concatenate = '';
    let count = 1;
    while (count <= n) {
        concatenate += count.toString();
        count++;
    }
    console.log(concatenate);

}
stringOfNums(['11']);