function radicalMarketing(radicalData) {
    let persons = new Map();
    let subscribers = new Map();

    for (let i = 0; i < radicalData.length; i++) {
        let radicalLine = radicalData[i].split('-');
        if (radicalLine.length == 2) {
            if (persons.has(radicalLine[0]) && persons.has(radicalLine[1])) {
                persons.get(radicalLine[1]).add(radicalLine[0]);
                subscribers.get(radicalLine[0]).add(radicalLine[1]);
            }
        } else {
            if (!persons.has(radicalLine[0])) {

                persons.set(radicalLine[0], new Set());
                subscribers.set(radicalLine[0], new Set());
            }
        }
    }

    let sortedPersons = new Map([...persons.entries()]
        .sort(function(first, second) {
            let firstPerson = first[0];
            let firstSubscribers = first[1].size;

            let secondPerson = second[0];
            let secondSubscribers = second[1].size;
            let diff = secondSubscribers - firstSubscribers;
            if (diff == 0) {
                let firstSubSubscribers = subscribers.get(firstPerson).size;
                let secondSubSubscribers = subscribers.get(secondPerson).size;
                diff = secondSubSubscribers - firstSubSubscribers;
            }
            return diff;
        }));

    let mostImportantPerson = [...sortedPersons.entries()][0];
    console.log(mostImportantPerson[0]);
    let i = 1;
    mostImportantPerson[1].forEach(s => console.log(`${i++}. ${s}`));
}
radicalMarketing(['A',
    'B',
    'C',
    'D',
    'A-B',
    'B-A',
    'C-A',
    'D-A'
]);
radicalMarketing(['J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
]);