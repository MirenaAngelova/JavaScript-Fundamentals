function JsonToHtml(json) {
    let html = `<table>\n`;
    let arr = JSON.parse(json);
    html += `\t<tr>`;
    for (let key of Object.keys(arr[0])) {
        html += `<th>${key}</th>`;
    }
    html += `</tr>\n`;
    for (let obj of arr) {
        html += `\t<tr>`;
        for (let value of Object.keys(obj)) {
            html += `<td>${htmlEscape(obj[value])}</td>`;
        }
        html += `</tr>\n`;
    }
    html += `</table>`;

    function htmlEscape(text) {
        text = '' + text;
        let tokensReplace = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;' };
        return text.replace(/[<>&'"]/g, m => tokensReplace[m]);
    }
    console.log(html);
}
JsonToHtml(`[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]`);
JsonToHtml(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},
{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`);