function calendar(array) {
    let [day, month, year] = array.map(Number);

    month--;
    let current = new Date(year, month, 1);
    let currentDate = current.getDate();
    let currentDay = current.getDay();
    let currentMonth = current.getMonth();

    let previous = new Date(year, month, 0);
    let previousDate = previous.getDate();
    let previousMonth = previous.getMonth();

    let last = new Date(year, month + 1, 0);
    let lastDay = last.getDay();

    let next = new Date(year, month + 1, 1)
    let nextMonth = next.getMonth();

    let daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let daysOfTheWeekLength = daysOfTheWeek.length;

    let html = [];
    let tdClass = ``;

    html.push(`<table>\n`);
    html.push(`  <tr>`);
    for (let day of daysOfTheWeek) {
        html.push(`<th>${day}</th>`);
    }
    html.push(`</tr>\n`);

    let rows = (current.getDay() +
        new Date(year, month + 1, 0).getDate() +
        (daysOfTheWeekLength - new Date(year, month + 1, 1).getDay())) / daysOfTheWeekLength;

    current = currentDay != 0 ?
        new Date(year, month - 1, previousDate - (currentDay - 1)) :
        current;

    for (let i = 0; i < rows; i++) {
        html.push(`  <tr>`);

        for (let j = 0; j < daysOfTheWeekLength; j++) {

            if (currentDay != 0 && current.getMonth() == previousMonth) {
                tdClass = ` class="prev-month"`;

            } else if (current.getMonth() == currentMonth) {
                tdClass = current.getDate() == day ? ` class="today"` : ``;

            } else if (lastDay != (daysOfTheWeekLength - 1) && current.getMonth() == nextMonth) {
                tdClass = ` class="next-month"`;
            }
            html.push(`<td${tdClass}>${current.getDate()}</td>`);

            current.setDate(current.getDate() + 1);
        }
        html.push(`</tr>\n`);
    }
    html.push(`</table>`);
    return html.join('');
    //console.log(html.join(''));
}
//monthlyCalendar(['24', '12', '2012']);
//monthlyCalendar(['4', '9', '2016']);
//monthlyCalendar(['22', '9', '2016']);
//calendar(['1', '4', '2016']);
//monthlyCalendar(['1', '1', '1900']);
//monthlyCalendar(['1', '5', '2016']);