function scoreToHtml(scoreJSON) {
    String.prototype.htmlEscape = function() {
        let tokensToReplace = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;' };
        return this.replace(/[<>&'"]/g, m => tokensToReplace[m]);
    };
    let scores = JSON.parse(scoreJSON);
    let html = '<table>\n';
    html += '\t<tr><th>name</th><th>score</th></tr>\n';
    for (let score of scores) {
        html += `\t<tr><td>${score.name.htmlEscape()}</td><td>${score.score}</td></tr>\n`;
    }
    html += '</table>';
    console.log(html);
}
scoreToHtml('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');
scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]');