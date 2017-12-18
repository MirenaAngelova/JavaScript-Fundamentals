function buildWall(sections) {
    let cubicYards = [];
    let complete = false;
    while (!complete) {
        let concrete = 0;
        complete = true;
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] < 30) {
                sections[i]++;
                concrete += 195;
                complete = false;
            }
        }
        if (!complete) {
            cubicYards.push(concrete);
        }
    }
    console.log(cubicYards.join(', '));
    console.log(`${cubicYards.reduce((a, b) => a + b) * 1900} pesos`);
}
//buildWall([27, 27, 27]);
// buildWall([21, 25, 28]);
// buildWall([17]);
buildWall([17, 22, 17, 19, 17]);