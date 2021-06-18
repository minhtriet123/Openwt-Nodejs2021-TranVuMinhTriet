// Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
function replace(ar,old_,new_){
    for ( var i = 0; i< ar.length ; i++){
        if ( ar[i]===old_) ar[i]=new_;
    }
    return ar;
}

num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log(replace(num, 2, 5));