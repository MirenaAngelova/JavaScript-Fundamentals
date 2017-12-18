function addPushInArray(elements) {
    let pushIn = [];
    let n = 1;
    for (let element of elements) {
        if (element == 'add') {
            pushIn.push(n);
        } else {
            pushIn.pop();
        }

        n++;
    }

    if (pushIn.length > 0) {
        console.log(pushIn.join('\n'));
    } else {
        console.log('Empty');
    }
}

addPushInArray(['add', 'add', 'add', 'add']);
addPushInArray(['add', 'add', 'remove', 'add', 'add']);
addPushInArray(['remove', 'remove', 'remove']);