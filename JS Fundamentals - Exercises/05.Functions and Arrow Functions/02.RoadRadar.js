function roadRadar(array) {
    let speed = array[0];
    let area = array[1];

    let limitZone = { motorway: 130, interstate: 90, city: 50, residential: 20 };
    let diff = speed - limitZone[area];
    let limit = speedLimit(diff);
    console.log(limit);

    function speedLimit(diff) {

        if (diff <= 0) {
            return '';
        } else if (diff > 0 && diff <= 20) {
            return 'speeding';
        } else if (diff > 20 && diff <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}
roadRadar([40, 'city']);
roadRadar([21.5, 'residential']);
roadRadar([120, 'interstate']);
roadRadar([200, 'motorway']);