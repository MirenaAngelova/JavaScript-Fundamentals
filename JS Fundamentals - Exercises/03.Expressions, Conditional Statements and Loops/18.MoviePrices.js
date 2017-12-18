function moviePrices(array) {
    let [movies, days] = array;
    movies = movies.toString().toLowerCase();

    days = days.toString().toLowerCase();

    let day = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    let theGodfather = ['12', '10', '15', '12.50', '15', '25', '30'];
    let schindlersList = ['8.50', '8.50', '8.50', '8.50', '8.50', '15', '15'];
    let casablanca = ['8', '8', '8', '8', '8', '10', '10'];
    let theWizardOfOz = ['10', '10', '10', '10', '10', '15', '15'];

    let price = Number(0);

    let index = day.indexOf(days);
    if (index < 0) {
        console.log('error');
        return;
    }

    switch (movies) {
        case 'the godfather':
            price = theGodfather[index];
            break;

        case "schindler's list":
            price = schindlersList[index];
            break;
        case 'casablanca':
            price = casablanca[index];
            break;
        case 'the wizard of oz':
            price = theWizardOfOz[index];
            break;
        default:
            console.log('error');
            return;
    }
    console.log(price);
}
moviePrices(['The Godfather', 'Friday']);
moviePrices(['casablanca', 'sunday']);
moviePrices(["Schindler's LIST", "monday"]);
moviePrices(['SoftUni', 'Nineday']);