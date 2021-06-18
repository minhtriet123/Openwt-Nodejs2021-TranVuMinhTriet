// Write a JavaScript program to compute the absolute 
// difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function dif(num){
    if (num > 19) return (num-19)*3;
    return (19-num);
}

console.log(dif(3));