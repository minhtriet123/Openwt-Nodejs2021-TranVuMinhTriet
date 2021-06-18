//  Write a JavaScript program to find
// the number of times to replace a given number with the sum of its digits until it convert to a single digit number.

function count_convert(num) {
    var digitSum = function (num) {
        var digit_sum = 0;
        while (num) {
            digit_sum += num % 10;
            num = Math.floor(num / 10);
        }
        return digit_sum;
    };
    var count=0;
    while(num>10){
        num = digitSum(num);
        count++;
    }
    return count;
}

console.log(count_convert(123))
console.log(count_convert(156))