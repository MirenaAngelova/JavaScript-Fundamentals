function multiplicationTable([n]) {
    n = Number(n);
    let th = [];

    th.push(`<table border="1">\n`);
    for (let i = 0; i <= n; i++) {
        th.push(`<tr>`);

        for (let j = 0; j <= n; j++) {
            let x = i == 0 && j == 0 ? 'x' : j;
            let h = 'h';
            if (i == 0 && j == 0) {
                x = 'x';
            } else if (i == 0 && j != 0) {
                x = j;
            } else if (i != 0 && j == 0) {
                x = i;
            } else {
                x = i * j;
                h = 'd';
            }
            th.push(`<t${h}>${x}</t${h}>`);
        }
        th.push(`</tr>\n`);

    }
    th.push(`</table>`);
    return th.join('');
    //console.log(th.join(''));
}
//multiplicationTable(['5']);
//document.body.innerHTML = multiplicationTable(['5']);