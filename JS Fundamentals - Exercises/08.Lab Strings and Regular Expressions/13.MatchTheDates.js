function matchTheDates(text) {
    let dateRegex = /\b(\d{1,2})-([A-Z][a-z]{2})-([0-9]{4})\b/g;
    let dates = [];
    for (let t of text) {
        let date = t.match(dateRegex);
        if (date != null) {
            let [day, month, year] = date[0].split('-');
            dates.push(`${date} (Day: ${day}, Month: ${month}, Year: ${year})`);
        }
        // while (match = dateRegex.exec(t)) {
        //     dates.push(`${match[0]} (Day: ${match[1]}, Month: ${match[2]}, Year: ${match[3]})`);
        // }

    }
    console.log(dates.join('\n'));
}
matchTheDates([`I am born on 30-Dec-1994.`,
    `This is not date: 512-Jan-1996.`,
    `My father is born on the 29-Jul-1955.`
]);
matchTheDates([`1-Jan-1999 is a valid date.`,
    `So is 01-July-2000.`,
    `I am an awful liar, by the way – Ivo, 28-Sep-2016.`
]);