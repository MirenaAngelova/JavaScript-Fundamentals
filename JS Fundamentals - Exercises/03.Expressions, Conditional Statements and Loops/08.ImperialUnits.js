function imperialUnits([inches]) {
    let feet = parseInt(inches / 12);
    let inch = inches % 12;
    console.log(`${feet}'-${inch}"`);
}
imperialUnits(['36']);
imperialUnits(['55']);
imperialUnits(['11']);