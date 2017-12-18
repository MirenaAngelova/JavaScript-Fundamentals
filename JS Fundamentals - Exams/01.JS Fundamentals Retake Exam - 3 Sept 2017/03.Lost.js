function lost(keyword, text) {
    let patternLocation = /(north|east)\D*(\d{2})[^,]*,\D*(\d{6})/gi;
    let patternMessage = new RegExp(`${keyword}(.*?)${keyword}`, `g`);
    let message = patternMessage.exec(text)[1];
    let match = patternLocation.exec(text);
    let latitude = ``;
    let longitude = ``;
    while (match) {
        if (match[1].toLowerCase() == 'north') {
            latitude = `${match[2]}.${match[3]} N`;
        } else if (match[1].toLowerCase() == 'east') {
            longitude = `${match[2]}.${match[3]} E`;
        }
        match = patternLocation.exec(text);
    }
    console.log(latitude);
    console.log(longitude);
    console.log(`Message: ${message}`);
}
lost('&amp', `(&ampThe only time to eat diet food is while you're waiting for the steak to cook&amp(east)(23),(234567)	NORTH
48,(((543678`);
//lost('<>', `o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b`);