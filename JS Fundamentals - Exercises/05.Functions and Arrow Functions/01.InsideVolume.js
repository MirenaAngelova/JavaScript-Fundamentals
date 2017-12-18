function insideVolume(points) {
    for (let i = 0; i < points.length; i += 3) {
        let x = points[i];
        let y = points[i + 1];
        let z = points[i + 2];
        let insideOutside = checkPoint(x, y, z);
        console.log(insideOutside);
    }

    function checkPoint(x, y, z) {
        let x1 = 10,
            x2 = 50;
        let y1 = 20,
            y2 = 80;
        let z1 = 15,
            z2 = 50;

        if ((x >= x1 && x <= x2) &&
            (y >= y1 && y <= y2) &&
            (z >= z1 && z <= z2)) {
            return 'inside';
        }
        return 'outside';
    }
}
//insideVolume([8, 20, 22]);
insideVolume([13.1, 50, 31.5, 50, 80, 50, -5, 18, 43]);