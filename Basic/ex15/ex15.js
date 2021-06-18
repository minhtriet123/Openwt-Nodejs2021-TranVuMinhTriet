// Write a JavaScript program to get 
// the difference between a given number and 13, 
// if the number is greater than 13 return double the absolute difference

function dif(num){
    if (num <= 13) return 13-num;
    else return (num-13)*2;
}

console.log(dif(3));
console.log(dif(15));