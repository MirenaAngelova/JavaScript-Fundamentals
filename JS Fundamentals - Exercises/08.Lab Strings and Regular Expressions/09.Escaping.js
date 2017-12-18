function escaping(htmlData) {
    let html = `<ul>\n`;
    html += htmlData.map(htmlEscape).map(el => `    <li>${el}</li>`).join('\n');

    function htmlEscape(text) {
        let map = { '<': `&lt;`, '>': '&gt;', '&': '&amp;', '"': '&quot;' };
        return text.replace(/[<>&"]/g, ch => map[ch]);
    }
    html += `\n</ul>`;
    console.log(html);
}
escaping(['<b>unescaped text</b>', 'normal text']);
escaping(['<div style=\"color: red;\">Hello, Red!</div>', '<table><tr><td>Cell 1</td><td>Cell 2</td><tr>']);