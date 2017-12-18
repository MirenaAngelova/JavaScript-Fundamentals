function uniqueSequences(sequenceData) {

    sequenceData = sequenceData
        .map(arr => JSON.parse(arr))
        .map(arr => arr.sort((a, b) => b - a))
        .sort((a, b) => a.length - b.length);
    for (let i = 0; i < sequenceData.length - 1; i++) {
        for (j = i + 1; j < sequenceData.length; j++) {
            if (JSON.stringify(sequenceData[i]) === JSON.stringify(sequenceData[j])) {
                delete sequenceData[j];
            }
        }
    }
    sequenceData.map(a => console.log(`[${a.join(', ')}]`));
}
uniqueSequences(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"]);
uniqueSequences(["[7.14, 7.180, 7.339, 80.099]", "[7.339, 80.0990, 7.140000, 7.18]", "[7.339, 7.180, 7.14, 80.099]"]);