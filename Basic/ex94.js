// Write a JavaScript program to find the number which appears most in a given array of integers.


function most_appears(arr) {
    var ctr = [],
        ans = 0;

    for (var i = 0; i < 10; i++) {
        ctr.push(0);
    }
    for (var i = 0; i < arr.length; i++) {
        ctr[arr[i] - 1]++;
        if (ctr[arr[i] - 1] > ctr[ans]) {
            ans = arr[i] - 1;
        }
    }
    return ans + 1;
}
console.log(most_appears([1, 2, 3, 3, 3, 7, 7, 7, 7, 7, 7, 7, 3, 2, 2, 8, 1, 9]))