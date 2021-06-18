// Write a JavaScript program to find the number of inversions of a given array of integers. 
// Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j.

function num_inver(ar){
    var count=0;
    for (var i = 0; i < ar.length; i++) {
        for (var j = i + 1; j < ar.length; j++) {
            if (ar[j]<ar[i]) 
              count++;
        }
    }
    return count;
}


console.log(num_inver([0, 3, 2, 5, 9]));   
console.log(num_inver([1, 5, 4, 3]));   
console.log(num_inver([10, 30, 20, -10]));  