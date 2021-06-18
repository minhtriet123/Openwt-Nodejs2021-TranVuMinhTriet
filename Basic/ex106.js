// Write a JavaScript program to divide an integer by another integer as long as the result is an integer and return the result.

function diveide(num, d) {
    if (d == 1)
        return num;
    else {
        while (num % d === 0) {
            num /= d;
        }
        return num;
    }
}
console.log(diveide(-12, 2))
console.log(diveide(13, 2))
console.log(diveide(13, 1))
console.log(diveide(12, 2))
console.log(diveide(15, 3))
console.log(diveide(20, 5))