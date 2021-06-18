//  Write a JavaScript program to find the
//  maximal number from a given positive integer by deleting exactly one digit of the given number

function nummax(num){
    var result = 0,
        num_digits = [];
    while (num) {
        num_digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (var index_num = 0; index_num < num_digits.length; index_num++) {
        var n = 0;
        for (var i = num_digits.length - 1; i >= 0; i--) {
            if (i !== index_num) {
                n = n * 10 + num_digits[i];
                
            }
        }
        result = Math.max(n, result);
    }
    return result;
}
console.log(nummax(100));
console.log(nummax(10));
console.log(nummax(1495)); 
console.log(nummax(9245)); 
console.log(nummax(9425)); 