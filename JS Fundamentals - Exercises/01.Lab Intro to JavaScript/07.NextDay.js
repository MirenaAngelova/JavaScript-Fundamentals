function nextDay([year, month, day]) {
    let date = new Date(year, month - 1, day);;

    //date.setDate(date.getDate() + 1);

    date = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}

nextDay(['2016', '9', '30']);