function spiceMustFlow(yield) {
    let days = 0;
    let spice = 0;
    while (yield >= 100) {
        spice += yield - 26;
        yield -= 10;
        days++;
    }

    spice = spice >= 26 ? spice - 26 : spice;
    console.log(days);
    console.log(spice);
}
spiceMustFlow(111);
spiceMustFlow(450);
spiceMustFlow(200);