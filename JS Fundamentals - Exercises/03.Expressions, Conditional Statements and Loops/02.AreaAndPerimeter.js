/* function areaAndPerimeter([str]) {
    let nums = str.split(' ');
    console.log(Number(nums[0]) * Number(nums[1]));
    console.log((Number(nums[0]) + Number(nums[1]) * 2));
}

areaAndPerimeter(['2 2']);
areaAndPerimeter(['1 3']);
areaAndPerimeter(['2.5 3.14']); */

function areaPerimeter([a, b]) {
    a = Number(a);
    b = Number(b);
    console.log(a * b);
    console.log((a + b) * 2);
}
areaPerimeter(['2', '2']);
areaPerimeter(['1', '3']);
areaPerimeter(['2.5', '3.14']);