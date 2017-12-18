function distanceIn3D(array) {
    let [x1, y1, z1, x2, y2, z2] = array;
    let zProjectDistance = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
    let distance = Math.sqrt(zProjectDistance + Math.pow((z1 - z2), 2));
    console.log(distance);
}

distanceIn3D([1, 1, 0, 5, 4, 0]);
distanceIn3D([3.5, 0, 1, 0, 2, -1]);