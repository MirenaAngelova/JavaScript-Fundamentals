function arithmephile(digits) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    digits.map(Number);
    for (let i = 0; i < digits.length; i++) {
        let product;
        if (digits[i] >= 0 && digits[i] < 10 && digits[i] + i < digits.length) {
            product = 1;
            for (let j = 0; j < digits[i]; j++) {
                product *= digits[i + j + 1];
            }
        }
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    console.log(maxProduct);
}
arithmephile([18,
    42,
    19,
    36,
    1, -297,
    38,
    100,
    9, -249, -170, -18, -208, -11, -87, -90, -286, -27
])
arithmephile([10,
    20,
    2,
    30,
    44,
    3,
    56,
    20,
    24
]);
arithmephile([100,
    200,
    2,
    3,
    2,
    3,
    2,
    1,
    1
]);