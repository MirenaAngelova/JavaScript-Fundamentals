function restHouse(roomsData, guestsData) {
    let rooms = new Map();
    let teaHouseGuests = 0;
    for (let room of roomsData) {
        let emptyBeds = room.type == 'double-bedded' ? 2 : 3;
        rooms.set(room.number, { type: room.type, beds: emptyBeds });
    }

    for (let guest of guestsData) {
        let notAvailableRoom = false;
        if (guest.first.gender != guest.second.gender) {
            for (let [key, value] of rooms) {
                if (value.type == 'double-bedded' && value.beds == 2) {
                    value.guests = [];
                    value.guests = [guest.first, guest.second];
                    value.beds = 0;
                    notAvailableRoom = true;
                    break;
                }
            }
        } else {
            for (let [key, value] of rooms) {
                if (value.type == 'triple' && value.beds > 1) {
                    if (value.guests == undefined) {
                        value.guests = [];
                    } else if (value.guests[0].gender != guest.second.gender) {
                        continue;
                    }
                    if (guest.first != undefined) {
                        value.guests.push(guest.first);
                        value.beds -= 1;
                    }
                    value.guests.push(guest.second);
                    value.beds -= 1;
                    notAvailableRoom = true;
                    break;
                } else if (value.type == 'triple' && value.beds == 1) {
                    if (value.guests[0].gender == guest.second.gender) {
                        value.guests.push(guest.first == undefined ? guest.second : guest.first);
                        value.beds -= 1;
                        guest.first = undefined;
                    }
                }
            }
        }
        if (!notAvailableRoom) {
            teaHouseGuests += guest.first == undefined ? 1 : 2;
        }
    }
    for (let [key, value] of[...rooms].sort()) {
        console.log(`Room number: ${key}`);
        if (value.guests != undefined) {
            for (let guest of value.guests.sort(function(a, b) {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                })) {
                console.log(`--Guest Name: ${guest.name}`);
                console.log(`--Guest Age: ${guest.age}`);
            }
        }
        console.log(`Empty beds in the room: ${value.beds}`);
    }
    console.log(`Guests moved to the tea house: ${teaHouseGuests}`);
}
restHouse([{ number: '206', type: 'double-bedded' },
    { number: '311', type: 'triple' }
], [{
        first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 }
    },
    {
        first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
        second: { name: 'Angel Nachev', gender: 'male', age: 22 }
    },
    {
        first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
        second: { name: 'Boryana Baeva', gender: 'female', age: 22 }
    }
]);