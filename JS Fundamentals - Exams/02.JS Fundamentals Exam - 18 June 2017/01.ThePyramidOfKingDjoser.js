function thePyramid(base, increment) {
    base = Number(base);
    increment = Number(increment);
    let stone = Number(0);
    let marble = Number(0);
    let lapisLazuli = Number(0);
    let gold = Number(0);
    let steps = 1;
    let bottom = base % 2 == 0 ? 2 : 1;
    while (base >= bottom) {
        if (base == bottom) {
            gold = bottom * bottom * increment;
        } else {
            stone += (base - 2) * (base - 2) * increment;
            let outerLayer = 4 * (base - 1) * increment;
            if (steps % 5 == 0) {
                lapisLazuli += outerLayer;
            } else {
                marble += outerLayer;
            }
        }
        base -= 2;
        steps++;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor((steps - 1) * increment)}`);


}
thePyramid(11, 1);
thePyramid(11, 0.75);
thePyramid(12, 1);
thePyramid(23, 0.5);