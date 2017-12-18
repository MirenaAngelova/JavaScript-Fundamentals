function extractLinks(text) {
    let links = [];
    let pattern = /(www)\.([A-Za-z\d-]+)(\.[a-z]+)+/g
    text = text.map(s => s.match(pattern)).filter(s => s != null).map(s => links.push(s));
    console.log(links.join('\n'));
}
extractLinks(['Join WebStars now for free, at www.web-stars.com',
    'You can also support our partners:',
    'Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko '
]);
extractLinks(['Need information about cheap hotels in London?',
    'You can check us at www.london-hotels.co.uk!',
    'We provide the best services in London.',
    'Here are some reviews in some blogs:',
    '"London Hotels are awesome!" - www.indigo.bloggers.com',
    '"I am very satisfied with their services" - ww.ivan.bg',
    '"Best Hotel Services!" - www.rebel21.sedecrem.moc'
])