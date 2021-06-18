// Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8

function check (a,b){
    if (a==8 || b==8 || Math.abs(a-b)==8){
        return true;
    }
    return false;
}

console.log(check(8,1));
console.log(check(3,2));
console.log(check(15,7));