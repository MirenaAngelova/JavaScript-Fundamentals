function restaurantBill(bill) {
    let purchases = [];
    let prices = 0;
    for (let index in bill) {
        if (index % 2 == 0) {
            purchases.push(bill[index]);
        } else {
            prices += Number(bill[index]);
        }
    }
    console.log(`You purchased ${purchases.join(', ')} for a total sum of ${prices}`);
}
restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80', 'Lasagna', '5.69']);
restaurantBill(['Cola', '1.35', 'Pancakes', '2.88']);