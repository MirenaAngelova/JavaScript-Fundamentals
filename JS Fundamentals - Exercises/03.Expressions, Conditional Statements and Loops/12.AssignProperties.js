function assignPrpoperties(array) {
    let [propertyFirst, valueFirst, propertySecond,
        valueSecond, propertyThird, valueThird
    ] = array;

    let properties = {};
    properties[propertyFirst] = valueFirst;
    properties[propertySecond] = valueSecond;
    properties[propertyThird] = valueThird;
    console.log(properties);

}
assignPrpoperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignPrpoperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);