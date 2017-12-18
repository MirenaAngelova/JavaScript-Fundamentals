function rounding(array) {
    let [num, precision] = array;
    precision = precision > 15 ? 15 : precision;
    let pow = Math.pow(10, precision);
    console.log(Math.round(num * pow) / pow);
    //let index = num.toString().indexOf('.');
    //console.log(num.toString().substring(0, index + 1 + precision));

    //console.log(+num.toFixed(precision));
}
rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);