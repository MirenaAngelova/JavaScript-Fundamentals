function evenPositionElements(elements) {
    let evenPosition = [];
    for (let i = 0; i < elements.length; i += 2) {
        evenPosition.push(elements[i]);
    }
    console.log(evenPosition.join(' '));
}
evenPositionElements(['20', '30', '40']);
evenPositionElements(['5', '10']);