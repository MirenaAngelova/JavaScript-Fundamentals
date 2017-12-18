function rosettaStone(rosettaData) {

    let n = rosettaData.shift();
    let template = new Array();
    let message = new Array();
    for (let i = 0; i < rosettaData.length; i++) {
        if (i < n) {
            template.push(rosettaData[i].split(' ').map(Number));
        } else {
            message.push(rosettaData[i].split(' ').map(Number));
        }
    }
    let encodedMessage = '';
    for (let i = 0; i < message.length; i++) {
        for (let j = 0; j < message[0].length; j++) {
            let messageChar = message[i][j];
            let templateChar = template[i % template.length][j % template[0].length];
            encodedMessage += String.fromCharCode(((messageChar + templateChar) % 27) + 64);
        }
    }
    console.log(encodedMessage.replace((/@/g), ' '));
}
rosettaStone(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
]);
// rosettaStone(['2',
//     '59 36',
//     '82 52',
//     '4 18 25 19 8',
//     '4 2 8 2 18',
//     '23 14 22 0 22',
//     '2 17 13 19 20',
//     '0 9 0 22 22'
// ]);
// rosettaStone(['2',
//     '31 32',
//     '74 37',
//     '19 0 23 25',
//     '22 3 12 17',
//     '5 9 23 11',
//     '12 18 10 22'
// ]);