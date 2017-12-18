// function dayOfWeek(str, day) {
//     switch (str) {
//         case 'Monday':
//             day(1);
//             break;
//         case 'Tuesday':
//             day(2);
//             break;
//         case 'Wednesday':
//             day(3);
//             break;
//         case 'Thursday':
//             day(4);
//             break;
//         case 'Friday':
//             day(5);
//             break;
//         case 'Saturday':
//             day(6);
//             break;
//         case 'Sunday':
//             day(7);
//             break;

//         default:
//             day('error');
//             break;
//     }
// }

// let day = function(i) {
//     console.log(i);
// }
// dayOfWeek('Monday', day);
// dayOfWeek('Mon', day);
// dayOfWeek('Tuesday', day);
// dayOfWeek('friday', day);

function dayOfWeek(str) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let numError = days.indexOf(str) + 1;
    let check = checkNumError(numError);

    function checkNumError(numError) {
        return numError > 0 && numError < 8 ? numError : 'error';
    }

    function printDay(check) {
        console.log(check);
    }

    printDay(check);
}
dayOfWeek('Monday');
dayOfWeek('Mon');
dayOfWeek('Tuesday');
dayOfWeek('friday');