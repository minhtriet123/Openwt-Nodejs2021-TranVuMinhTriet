//  Write a JavaScript program to check whether all the digits in a given number are the same or not. 

function is_same_digit(num) {
    var a = ("" + num).split('');
    for (var i = 0; i < a.length; i++) {
        if (a[i] != a[a.length-1]) return false;
    }
    return true;
}

console.log(is_same_digit(1234));
console.log(is_same_digit(1111));
console.log(is_same_digit(22222222));