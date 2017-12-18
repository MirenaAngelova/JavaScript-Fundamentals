function genCalendar([day, month, year]) {
    [day, month, year] = [day, month, year].map(Number)

    let today = day
    let firstDayInCurrMonth = new Date(year, month - 1, 1).getDay()
    let lastDayInCurrMonth = new Date(year, month, 0).getDay()

    let prevMonthLength = new Date(year, month - 1, 0).getDate()
    let currMonthLenght = new Date(year, month, 0).getDate()

    let prevMonth = getPrevMonth(firstDayInCurrMonth, prevMonthLength)
    let currMonth = getCurrMonth(currMonthLenght)
    let nextMonth = getNextMonth(6 - lastDayInCurrMonth)

    currMonth[today - 1] = `<td class="today">${today}</td>`

    let allFormatedDates = [].concat(prevMonth, currMonth, nextMonth)
    let calendarRows = allFormatedDates.length / 7

    let html = '<table>\n'
    html += '\t<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n'
    let row = ''

    for (let week = 0; week < calendarRows; week++) {
        row = '\t<tr>'
        for (let index = week * 7; index < week * 7 + 7; index++) {
            row += allFormatedDates[index]
        }
        row += '</tr>\n'
        html += row
    }

    html += '</table>'

    return html

    function getPrevMonth(datesCount, currDate) {
        currDate -= datesCount - 1
        return new Array(datesCount).fill(0).map(() => { return `<td class="prev-month">${currDate++}</td>` })
    }

    function getCurrMonth(monthLength) {
        let currDate = 1
        return new Array(monthLength).fill(0).map(() => { return `<td>${currDate++}</td>` })
    }

    function getNextMonth(datesCount) {
        let currDate = 1
        return new Array(datesCount).fill(0).map(() => { return `<td class="next-month">${currDate++}</td>` })
    }
}