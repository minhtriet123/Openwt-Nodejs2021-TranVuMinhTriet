// Write a JavaScript program to compute the sum of the two 
// given integers. If the two values are same, then returns triple their sum

function sum(num1,num2){
    if (num1===num2) return 3*(num1+num2);
    return num1 + num2;
}

console.log(sum(1,2)) ;
