function colorfulNumbers([n]) {
    let html = '<ul>\n';

    for (let i = 1; i <= n; i++) {
        let color = i % 2 == 1 ? 'green' : 'blue';
        html += `   <li><span style='color:${color}'>${i}</span></li>\n`;
    }
    html += '</ul>';
    console.log(html);
}
colorfulNumbers([10]);