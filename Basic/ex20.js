//  Write a JavaScript program to check from two given integers, whether one is positive and another one is negative

function check(num1, num2) {
    if (num1 >= 0 || num2 >= 0) {
        if (num1 < 0 || num2 < 0) return true;
        return false;
    }
    else return false;
}

console.log(check(1,2));
console.log(check(-1,2));