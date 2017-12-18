function tripLength(coordinates) {

    let trip = {};
    let count = 1;
    for (let i = 0; i < coordinates.length; i += 2) {
        trip[count] = new Array();
        trip[count].push(coordinates[i]);
        trip[count].push(coordinates[i + 1]);
        count++;
    }

    let len = Object.keys(trip).length;
    let shortestPath = [];
    let finalDistance = Number(0);
    let distances = {};
    let plusOne = false;
    for (let i = 1; i < len; i++) {

        for (let j = i + 1; j <= len; j++) {
            let deltaX = trip[i][0] - trip[j][0];
            let deltaY = trip[i][1] - trip[j][1];
            let delta = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
            if (distances.hasOwnProperty(delta)) {
                delta += 1;
                plusOne = true;
                distances[delta] = new Array();
                distances[delta].push(i);
                distances[delta].push(j);
            } else if (!(delta in distances)) {
                distances[delta] = new Array();
                distances[delta].push(i);
                distances[delta].push(j);
            }
        }
    }

    let distancesSorted = {};
    Object.keys(distances).sort().forEach(function(key) {
        distancesSorted[key] = distances[key];
    });

    for (let i = 0; i < Object.keys(distancesSorted).length - 1; i++) {
        for (let j = 0; j < distancesSorted[Object.keys(distancesSorted)[i]].length; j++) {
            shortestPath.push(distancesSorted[Object.keys(distancesSorted)[i]][j]);
        }
    }

    for (let i = 0; i < shortestPath.length; i++) {
        if (shortestPath[i]) {

        }
    }
    finalDistance = Number(Object.keys(distancesSorted)[0]) +
        Number(Object.keys(distancesSorted)[1]);
    finalDistance = plusOne ? finalDistance - 1 : finalDistance;
    shortestPath.sort();
    let printPath = [];
    let isFound = false;

    for (let i = 0; i < shortestPath.length - 1; i++) {

        if (shortestPath[i] == shortestPath[i + 1]) {
            switch (shortestPath[i]) {
                case 1:
                    printPath.push(shortestPath[i + 2]);
                    printPath.push(shortestPath[i]);
                    printPath.push(shortestPath[i + 3]);
                    break;
                case 2:
                    printPath.push(shortestPath[i - 1]);
                    printPath.push(shortestPath[i]);
                    printPath.push(shortestPath[i + 2]);
                    break;
                case 3:
                    printPath.push(shortestPath[i - 2]);
                    printPath.push(shortestPath[i]);
                    printPath.push(shortestPath[i - 1]);
                    break;
            }
            isFound = true;
        }

        if (isFound) {
            break;
        }
    }
    // for (let i = 0; i < shortestPath.length / 2 - 1; i++) {
    //     for (let j = i + 2; j < shortestPath.length - 1; j++) {
    //         if (shortestPath[i] == shortestPath[j]) {
    //             if (shortestPath[i + 1] < shortestPath[j + 1]) {
    //                 printPath.push(shortestPath[i + 1]);
    //                 printPath.push(shortestPath[i]);
    //                 printPath.push(shortestPath[j + 1]);
    //             } else {
    //                 printPath.push(shortestPath[j + 1]);
    //                 printPath.push(shortestPath[i]);
    //                 printPath.push(shortestPath[i + 1]);
    //             }

    //         } else {
    //             if (shortestPath[i] < shortestPath[j]) {
    //                 printPath.push(shortestPath[i]);
    //                 printPath.push(shortestPath[j]);
    //                 if (shortestPath[j] == shortestPath[i + 1]) {
    //                     printPath.push(shortestPath[j + 1]);
    //                 } else {
    //                     printPath.push(shortestPath[i + 1]);
    //                 }

    //             } else {
    //                 printPath.push(shortestPath[j]);
    //                 if (shortestPath[i] == shortestPath[j + 1]) {
    //                     printPath.push(shortestPath[i]);
    //                     printPath.push(shortestPath[i + 1]);
    //                 } else {
    //                     printPath.push(shortestPath[i + 1]);
    //                     printPath.push(shortestPath[i]);
    //                 }
    //             }
    //         }
    //     }
    // }

    console.log(`${printPath.join('->')}: ${finalDistance}`);
}
tripLength([0, 0, 2, 0, 4, 0]);
//tripLength([0, 0, 2, 0, -2, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);