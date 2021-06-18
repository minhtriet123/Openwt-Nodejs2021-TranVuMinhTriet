// Write a JavaScript program to check whether a given integer has an increasing digits sequence.

function is_sort(num) {
    var digit_ori = ("" + num).split('');

    for (var i = 0; i < digit_ori.length - 1; i++) {
        if (parseInt(digit_ori[i]) >= parseInt(digit_ori[i + 1]))
            return false;
    }
    return true;

}


console.log(is_sort(123));
console.log(is_sort(1223));
console.log(is_sort(45268));