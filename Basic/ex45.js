// Write a JavaScript program to check two given integer values 
// and return true if one of the number is 15 or if their sum or difference is 15.

function check(a,b){
 if(Math.abs(a-b)==15 || a==15 || b==15) return true;
 return false;
}

console.log(check(15,1));