// Write a JavaScript program to check whether two given integers are similar or not,
// if a given divisor divides both integers and it does not divide either
function checking_numbers(x, y, divisor) {
    if (x % divisor === 0 && y % divisor === 0 || x % divisor !== 0 && y % divisor !==
        0) {
        return true;
    }
    return false;
}
console.log(checking_numbers(10, 20, 4))
console.log(checking_numbers(10, 25, 5))
console.log(checking_numbers(10, 20, 5))
