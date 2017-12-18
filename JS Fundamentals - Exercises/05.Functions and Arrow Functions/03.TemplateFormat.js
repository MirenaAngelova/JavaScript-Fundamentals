function templateFormat(array) {
    let xml = '';
    xml += '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<quiz>\n';
    for (let i = 0; i < array.length; i += 2) {
        let question = array[i];
        let answer = array[i + 1];
        xml += template(question, answer);
    }
    xml += '</quiz>';
    console.log(xml);

    function template(question, answer) {
        let xmlStr = '';
        xmlStr += '  <question>\n';
        xmlStr += '  '.repeat(2) + question + '\n';
        xmlStr += '  </question>\n';
        xmlStr += '  <answer>\n';
        xmlStr += '  '.repeat(2) + answer + '\n';
        xmlStr += '  </answer>\n';
        return xmlStr;
    }
}
templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]);
// templateFormat(["Dry ice is a frozen form of which gas?",
//     "Carbon Dioxide",
//     "What is the brightest star in the night sky?",
//     "Sirius"
// ]);