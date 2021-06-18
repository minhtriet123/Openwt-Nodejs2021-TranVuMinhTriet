function nhuan(year){
    if(((year%400)===0)) return true;
    return false;
}
console.log(nhuan(2000));
console.log(nhuan(2001));
console.log(nhuan(2010));
console.log(nhuan(8000));
console.log(nhuan(3214));