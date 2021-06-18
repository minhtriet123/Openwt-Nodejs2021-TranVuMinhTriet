// Write a JavaScript program to
// check whether a given array of integers represents either a strictly increasing or a strictly decreasing sequence

function strictly(ar_num) {
    if (ar_num.length == 1) return true;
    var temp = 0;
    var demir = ar_num[1]-ar_num[0];
    for (var i = 0; i < ar_num.length - 1; i++) {
        temp = ar_num[i + 1] - ar_num[i];
        if ( demir*temp <= 0 ) return false;
    }
    return true;
}
console.log(strictly([1, 2, 3]));
console.log(strictly([1, 2, 2]))
console.log(strictly([-3, -2, -1]))
console.log(strictly([7,6,5,4]))