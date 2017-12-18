function townsToJson(townsData) {
    let towns = [];
    for (let townData of townsData.slice(1)) {
        let [empty, town, latitude, longitude] = townData.split(/\s*\|\s*/g);
        let townObj = { Town: town, Latitude: Number(latitude), Longitude: Number(longitude) };
        towns.push(townObj);
    }
    console.log(JSON.stringify(towns));
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |'
]);