function radioCrystals(quartzOre) {

    let desiredThick = quartzOre.shift();
    let strOperation = ['Cut', 'Lap', 'Grind', 'Etch', 'X-ray'];
    let funcOperation = [cut, lap, grind, etch, xRay];
    for (let i = 0; i < quartzOre.length; i++) {
        let quartzOreOperated = quartzOre[i];
        console.log(`Processing chunk ${quartzOreOperated} microns`);
        for (let j = 0; j < strOperation.length; j++) {
            quartzOreOperated = executeOperation(quartzOreOperated, strOperation[j], funcOperation[j]);
        }
        console.log(`Finished crystal ${desiredThick} microns`)
    }

    function executeOperation(quartzOreOperated, strOp, funcOp) {
        let quartzTemp = funcOp(quartzOreOperated);
        if (funcOp == xRay) {
            if ((desiredThick - quartzTemp) == 1) {
                quartzOreOperated = quartzTemp;
                console.log(`${strOp} x1`);
            }
            return quartzOreOperated;
        }
        let count = 0;
        while (quartzTemp >= desiredThick || Math.floor(desiredThick - quartzTemp) == 1) {
            quartzOreOperated = quartzTemp;
            quartzTemp = funcOp(quartzOreOperated);
            count++;
        }
        if (count > 0) {
            console.log(`${strOp} x${count}`);
            quartzOreOperated = transpWash(quartzOreOperated);
            console.log(`Transporting and washing`);
        }
        return quartzOreOperated;
    }

    function cut(quartz) {
        return quartz / 4;
    }

    function lap(quartz) {
        return quartz - quartz * 20 / 100;
    }

    function grind(quartz) {
        return quartz - 20;
    }

    function etch(quartz) {
        return quartz - 2;
    }

    function xRay(quartz) {
        return quartz++;
    }

    function transpWash(quartz) {
        return Math.floor(quartz);
    }
}

//radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);