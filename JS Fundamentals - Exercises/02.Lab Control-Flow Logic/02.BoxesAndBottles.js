function boxesAndBottles([bottles, capacity]) {
    bottles = Number(bottles);
    capacity = Number(capacity);

    let boxes = Math.ceil(bottles / capacity);
    console.log(boxes);
}
boxesAndBottles(['20', '5']);
boxesAndBottles(['15', '7']);
boxesAndBottles(['5', '10']);