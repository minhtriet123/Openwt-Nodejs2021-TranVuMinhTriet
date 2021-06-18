// Write a JavaScript program to check whether 
// the last digit of the three given positive integers is same.

function same_last_digit(num1,num2,num3){
    if ( num1 > 0 && num2 >0 && num3>0){
        if(num1%10 == num2%10 && num2%10==num3%10 && num3%10 == num1 %10) return  true;
    }
    return false;
}

console.log(same_last_digit(3,23,203));
console.log(same_last_digit(3,23,204));
console.log(same_last_digit(3,23,2033));