function jsonsTable(inputData) {
    let html = '<table>\n';
    for (let input of inputData) {
        html += '\t<tr>\n';
        let item = JSON.parse(input);
        for (let key in item) {
            html += `\t\t<td>${htmlEscape(item[key])}</td>\n`;
        }
        html += '\t<tr>\n';
    }

    function htmlEscape(text) {
        text = '' + text;
        let pattern = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;' };
        return text.replace(/[<>&'"]g/, m => pattern[m]);
    }
    html += '</table>';
    console.log(html);
}
jsonsTable(['{ "name": "Pesho", "position": "Promenliva", "salary": 100000 }', '{ "name": "Teo", "position": "Lecturer", "salary": 1000 }', '{ "name": "Georgi", "position": "Lecturer", "salary": 1000 }']);