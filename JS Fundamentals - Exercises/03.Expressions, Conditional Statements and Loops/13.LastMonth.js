function lastMonth(array) {
    let [day, month, year] = array;
    let last = new Date(year, month - 1, 0);
    console.log(last.getDate());
}
lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);