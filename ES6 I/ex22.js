// Write a JavaScript program to filter out the non-unique values in an array. Go to the editor

const filter_out = ar => {
    return ar.filter(x => ar.indexOf(x) == ar.lastIndexOf(x));
}


console.log(filter_out([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_out([1, 2, 3, 4]));  

