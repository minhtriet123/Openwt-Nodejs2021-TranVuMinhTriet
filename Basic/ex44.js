//  Write a JavaScript program to check from 
// three given integers that whether a number is greater than or equal to 20 and less than one of the others

function check(num1,num2,num3){
    return (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
    (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
    (num3 >= 20 && (num3 < num2 || num3 < num1)) ? true : false;
}
console.log(check(30,40,20));
console.log(check(20,30,43));
console.log(check(17,19,18));
