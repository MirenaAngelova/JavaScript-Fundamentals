function galacticElections(electionsData) {
    let systems = new Map();
    for (let election of electionsData) {
        if (!systems.has(election.system)) {
            systems.set(election.system, new Map());
        }
        if (!systems.get(election.system).has(election.candidate)) {
            systems.get(election.system).set(election.candidate, 0);
        }
        let currentVotes = systems.get(election.system).get(election.candidate)
        systems.get(election.system).set(election.candidate, currentVotes + election.votes);
    }
    let winners = new Map();
    [...systems]
    .map(([system, candidate]) => [system, [...candidate]
            .sort((a, b) => b[1] - a[1]).reduce((a, b) => [a[0], a[1] + b[1]])
        ])
        .map(([system, [candidate, votes]]) => [candidate, system, votes])
        .forEach(([candidate, system, votes], index, array) =>
            winners.has(candidate) ? winners.get(candidate).set(system, votes) :
            winners.set(candidate, new Map([
                [system, votes]
            ])));

    let ranking = [...winners]
        .map(([candidate, system]) => [candidate, [...system]
            .map(([system, votes]) => votes)
            .reduce((a, b) => a + b)
        ])
        .sort(([candidateFirst, votesFirst], [candidateSecond, votesSecond]) => votesSecond - votesFirst);

    let totalVotes = ranking.map(([candidate, votes]) => votes).reduce((a, b) => a + b);
    if (ranking[0][1] > totalVotes / 2) {
        console.log(`${ranking[0][0]} wins with ${ranking[0][1]} votes`);
        if (ranking.length > 1) {
            console.log(`Runner up: ${ranking[1][0]}`);
            [...winners.get(ranking[1][0])]
            .sort(([systemFirst, votesFirst], [systemSecond, votesSecond]) => votesSecond - votesFirst)
                .map(system => console.log(`${system[0]}: ${system[1]}`));
        } else {
            console.log(`${ranking[0][0]} wins unopposed!`)
        }
    } else {
        console.log(`Runoff between ${ranking[0][0]} with ${Math.floor(ranking[0][1] / totalVotes * 100)}% and ${ranking[1][0]} with ${Math.floor(ranking[1][1] / totalVotes * 100)}%`);
    }
}
galacticElections([{ system: 'Theta', candidate: 'Flying Shrimp', votes: 10 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
    { system: 'Sigma', candidate: 'Flying Shrimp', votes: 120 },
    { system: 'Tau', candidate: 'Space Cow', votes: 15 },
    { system: 'Sigma', candidate: 'Space Cow', votes: 60 },
    { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 }
]);
// galacticElections([{ system: 'Tau', candidate: 'Flying Shrimp', votes: 150 },
//     { system: 'Tau', candidate: 'Space Cow', votes: 100 },
//     { system: 'Theta', candidate: 'Space Cow', votes: 10 },
//     { system: 'Sigma', candidate: 'Space Cow', votes: 200 },
//     { system: 'Sigma', candidate: 'Flying Shrimp', votes: 75 },
//     { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
//     { system: 'Omicron', candidate: 'Octocat', votes: 75 }
// ]);
// galacticElections([{ system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
//     { system: 'Tau', candidate: 'Kim Jong Andromeda', votes: 200 },
//     { system: 'Tau', candidate: 'Flying Shrimp', votes: 150 }
// ]);