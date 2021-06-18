// Write a JavaScript program to check whether two arrays of
// integers of same length are similar or not.
// The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements

function check_same_ar(ar1, ar2) {
    if (ar1.length != ar2.length) return "Two arrays are not in same length."
    for(var i=0; i<ar2.length;i++){
        if(ar1[i]!=ar2[i]) return false;
    }
    return true;
}

console.log(check_same_ar([123,232,342],[123,232,342]));

console.log(check_same_ar([2,232,342],[123,232,342]));

console.log(check_same_ar([2,123,232,342],[123,232,342]));