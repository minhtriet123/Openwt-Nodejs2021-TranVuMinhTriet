// Write a JavaScript program to find the smallest prime number strictly greater than a given number
function nearest_prime(num) {
    var isPrime = function (num) {
        for (var i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }
    num++;
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

console.log(nearest_prime(56));
console.log(nearest_prime(592));
console.log(nearest_prime(3));
console.log(nearest_prime(17));