// Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer.
function show_prime(num) {
    var check_prime = function (n) {
        if (n <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
    var rs = [];
    for (var i = 0; i <= num; i++) {
        if (check_prime(i)) {rs.push(i);}
        
    }
    return rs;
}

console.log(show_prime(5))
console.log(show_prime(11))
console.log(show_prime(19))