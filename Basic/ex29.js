// Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). 
// Return true if one or more of them are in the said range.  

function in_range(num1,num2){
    if ((50<=num1 && num1 <=99) || (50<=num2 && num2 <=99)) return true;
    return false;
     
  }
  
console.log(in_range(20, 30));

console.log(in_range(270, 50));