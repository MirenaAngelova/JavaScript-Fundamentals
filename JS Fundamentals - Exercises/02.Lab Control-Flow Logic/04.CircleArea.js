function circleArea([radius]) {
    radius = Number(radius);
    let area = Math.PI * radius * radius
    console.log(area);
    console.log(area.toFixed(2));
}
circleArea(['5']);