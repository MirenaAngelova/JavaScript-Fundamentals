function airportStatistics(statistics) {
    let leftPlanes = new Set();
    let towns = new Map();

    for (let statistic of statistics) {
        let [id, town, passengers, action] = statistic.split(' ');
        passengers = Number(passengers);
        if (action == 'depart') {
            if (!leftPlanes.has(id)) {
                continue;
            } else {
                leftPlanes.delete(id);
            }
        }

        if (action == 'land') {
            if (leftPlanes.has(id)) {
                continue;
            } else {
                leftPlanes.add(id);
            }
        }

        if (!towns.has(town)) {
            towns.set(town, { planes: [], arrivals: 0, departures: 0 });
        }

        if (!towns.get(town).planes.includes(id)) {
            towns.get(town).planes.push(id);
        }

        if (action == 'land') {
            towns.get(town).arrivals += passengers;
        } else {
            towns.get(town).departures += passengers;
        }
    }
    console.log("Planes left:");
    [...leftPlanes].sort((a, b) => a.localeCompare(b)).map(plane => console.log(`- ${plane}`));
    [...towns]
    .sort((a, b) => {
        if (a[1].arrivals < b[1].arrivals) return 1;
        if (a[1].arrivals > b[1].arrivals) return -1;
        return a[0].localeCompare(b[0])
    }).forEach(logData);

    function logData(town) {
        console.log(`${town[0]}\nArrivals: ${town[1].arrivals}\nDepartures: ${town[1].departures}\nPlanes:`);
        town[1].planes
            .sort((a, b) => a.localeCompare(b))
            .forEach(plane => console.log(`-- ${plane}`));
    }
}
airportStatistics([
    "Boeing474 Madrid 300 land",
    "AirForceOne WashingtonDC 178 land",
    "Airbus London 265 depart",
    "ATR72 WashingtonDC 272 land",
    "ATR72 Madrid 135 depart"
]);
airportStatistics([
    "Airbus Paris 356 land",
    "Airbus London 321 land",
    "Airbus Paris 213 depart",
    "Airbus Ljubljana 250 land"
]);