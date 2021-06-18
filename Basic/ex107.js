// Write a JavaScript program to find the number of sorted pairs formed
// by its elements of a given array of integers such that one element in the pair is divisible by the other one
function diveide_arr_pair(arr) {
    var rs = 0;
    for (var i = 0; i < arr.length; i++)
        {
        for (var j = i + 1; j < arr.length; j++)
            {
              if (arr[i] % arr[j] === 0 || arr[j] % arr[i] === 0)
                {
                rs++;
                }
         }
      }
    return rs;
}
console.log(diveide_arr_pair([1,2,3]))
console.log(diveide_arr_pair([2,4,6]))
console.log(diveide_arr_pair([2,4,16]))