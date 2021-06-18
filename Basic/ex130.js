// Write a JavaScript program to find the number of even digits in a given integer

function number_even(num){
    var ar = (""+num).split('') ;
    var count = 0;
    for (var i = 0 ; i< ar.length; i++){
        if(ar[i]%2==0) count++; 
    }
    return count;
}

console.log(number_even(123));
console.log(number_even(1020));
console.log(number_even(102));