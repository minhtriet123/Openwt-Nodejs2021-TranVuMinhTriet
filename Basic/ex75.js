// Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3

function makeNewArr(ar1,ar2){
    var rs = [];
    rs.push(ar1[1],ar2[1]);
    return rs;
}

console.log(makeNewArr([1,2,3],[3,4,5]))

