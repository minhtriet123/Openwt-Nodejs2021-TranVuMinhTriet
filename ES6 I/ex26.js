// Return true if the string is y/yes other wise false

const check_str = str => 
    /^(y|yes)$/i.test(str) ? true : false;
   

console.log(check_str('ahsh'));

console.log(check_str('Y'));

console.log(check_str('yes'));