function xmlMessenger(xmlData) {

    let pattern = /^<message((?:\s+[a-z]+="[A-Za-z0-9 .]+"\s*?)*)>((?:.|\n)+?)<\/message>$/;
    let matches = pattern.exec(xmlData);
    if (!matches) {
        console.log(`Invalid message format`);
        return;
    }
    let [allMatches, attributes, message] = matches;
    let attributesValidator = /\s+([a-z]+)="([A-Za-z0-9 .]+)"\s*?/g;
    let sender = '';
    let recipient = '';
    let matchesAttributes = attributesValidator.exec(attributes);
    while (matchesAttributes) {
        if (matchesAttributes[1] == 'to') {
            recipient = matchesAttributes[2];
        } else if (matchesAttributes[1] == 'from') {
            sender = matchesAttributes[2]
        }

        matchesAttributes = attributesValidator.exec(attributes);
    }
    if (recipient === '' || sender === '') {
        console.log(`Missing attributes`);
        return;
    }
    message = message.replace(/\n/g, `<\/p>\n\t<p>`);
    let article = `<article>\n`;
    article += `  <div>From: <span class="sender">${sender}</span></div>\n`;
    article += `  <div>To: <span class="recipient">${recipient}</span></div>\n`;
    article += `  <div>\n`;
    article += `\t<p>${message}<\/p>\n`;
    article += `  </div>\n`;
    article += `</article>`;
    console.log(article);
}
// xmlMessenger(`<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what's up?</message>`);
// xmlMessenger(`<message from="John Doe" to="Alice">Not much, just chillin. How about you?</message>`);
// xmlMessenger(`<message from="Alice" timestamp="1497254112">Same old, same old</message>`);

xmlMessenger(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer</message>`);

// xmlMessenger(`<message to="Alice" from="Charlie"><img src="fox.jpg"/></message><meta version="2"/>`);
// xmlMessenger(`<message from="Hillary" to="Edward" secret:true>VGhpcyBpcyBhIHRlc3Q</message>`);