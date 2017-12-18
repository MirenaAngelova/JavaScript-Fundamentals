function distanceOverTime(array) {
    let [v1, v2, t] = array;
    let diff = Math.abs(v1 - v2) * 1000 * t / (60 * 60);
    console.log(diff);
}
distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);