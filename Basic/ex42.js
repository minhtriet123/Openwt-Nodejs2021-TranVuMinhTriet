//  Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode. 

function mode(num1,num2,num3){
    if (num1 < num2 && num2 < num3) return "Strict mode";
    return "Soft mode";
}

console.log(mode(1,25,28));
console.log(mode(30,25,28));
