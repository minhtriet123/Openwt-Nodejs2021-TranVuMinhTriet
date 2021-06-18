//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values

function nearest100(num1,num2){
    if( Math.abs(100-num1) < Math.abs(100-num2)) return num1;
    else return num2;
}

console.log(nearest100(28, 128));