function hungryProgrammer(portionsMeals, commands) {

    let mealsEaten = 0;
    for (let command of commands) {
        let commandTokens = command.split(' ');
        if (commandTokens == 'End') {
            break;
        }
        switch (commandTokens[0]) {
            case 'Serve':
                if (portionsMeals.length < 1) {
                    break;
                }

                console.log(`${portionsMeals.pop()} served!`);
                break;
            case 'Add':
                if (commandTokens[1] == undefined) {
                    break;
                }
                portionsMeals.unshift(commandTokens[1]);
                break;
            case 'Shift':
                if (portionsMeals[commandTokens[1]] != undefined &&
                    portionsMeals[commandTokens[2]] != undefined) {
                    let temp = portionsMeals[commandTokens[1]];
                    portionsMeals[commandTokens[1]] = portionsMeals[commandTokens[2]];
                    portionsMeals[commandTokens[2]] = temp;
                }
                break;
            case 'Eat':
                if (portionsMeals.length < 1) {
                    break;
                }

                console.log(`${portionsMeals.shift()} eaten`);
                mealsEaten++;
                break;
            case 'Consume':
                if (portionsMeals[commandTokens[1]] != undefined &&
                    portionsMeals[commandTokens[2]] != undefined) {
                    let count = commandTokens[2] - commandTokens[1] + 1;
                    portionsMeals.splice(commandTokens[1], count);
                    console.log("Burp!");
                    mealsEaten += count;
                }
                break;
        }
    }
    if (portionsMeals.length > 0) {
        console.log(`Meals left: ${portionsMeals.join(', ')}`);
    } else {
        console.log(`The food is gone`);

    }
    console.log(`Meals eaten: ${mealsEaten}`);
}

hungryProgrammer(['rice', 'eggs', 'wine', 'beer', 'chicken'], ['Eat',
        'Serve',
        'Serve',
        'Serve',
        'Add nuggets',
        'End'
    ])
    // hungryProgrammer(['soup', 'spaghetti', 'eggs'], ['Consume 0 2',
    //     'Eat',
    //     'Eat',
    //     'Shift 0 1',
    //     'End',
    //     'Eat'
    // ]);
    // hungryProgrammer(['chicken', 'steak', 'eggs'], ['Serve',
    //     'Eat',
    //     'End',
    //     'Consume 0 1'
    // ]);
    // hungryProgrammer(['fries', 'fish', 'beer', 'chicken', 'beer', 'eggs'], ['Add spaghetti',
    //     'Shift 0 1',
    //     'Consume 1 4',
    //     'End'
    // ]);
    // hungryProgrammer(['carrots', 'apple', 'beet'], ['Consume 0 2',
    //     'End',
    // ]);