// Write a JavaScript program to find all the possible options to replace the hash in a
// string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3

function divisible_3(num) {
    var digit = num.split('');
    rs = [];
    for (var i = 0; i < digit.length; i++) {
        if (digit[i] == "#") {
            for (var j = 0; j <= 9; j++) {
                digit[i] = j;
                var sum = digit.reduce(function (a, b) { return a + b; }, 0);
                if (sum % 3 == 0) rs.push(digit.join(''));
            }

        }
    }
    return rs;
}

console.log(divisible_3("2#0"))
console.log(divisible_3("4#2"))