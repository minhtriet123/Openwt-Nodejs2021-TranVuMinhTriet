// Write a JavaScript program to get the median of an array of numbers.


const mid = (arr) => {
    arr = [...arr].sort((a, b) => a - b);
    return arr[Math.floor(arr.length/2)]
}
console.log(mid([5, 6, 50, 1, -5]));
console.log(mid([1, 2, 3, 4, 5]));