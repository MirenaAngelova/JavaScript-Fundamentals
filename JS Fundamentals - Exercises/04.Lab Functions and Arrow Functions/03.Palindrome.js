function palindrome(str) {
    function isPalindrom(str) {
        let strToArray = str.split('');
        let strReverse = str.split('').reverse();
        return strToArray.length === strReverse.length &&
            strToArray.every((element, index) => element === strReverse[index]);
    }
    console.log(isPalindrom(str));

    // function isPalindrome(str) {

    //     let len = Math.ceil(str.toString().length / 2);
    //     for (let i = 0; i < len; i++) {
    //         if (str[i] != str[str.length - 1 - i]) {
    //             return 'false';
    //         }
    //     }
    //     return 'true';

    // }
    // return console.log(isPalindrome(str));
}


palindrome('haha');
palindrome('racecar');
palindrome('unitinu');