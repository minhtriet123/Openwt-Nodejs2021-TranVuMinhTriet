// Write a JavaScript program to find whether the members of
// a given array of integers is a permutation of numbers from 1 to a given integer.

function permutation(ar_num, n) {
    var rs = [];
    for (var i = 1; i <= n; i++) {
        rs.push(i);
    }

    if (ar_num.length != n) return false;
    for (var i = 0; i < ar_num.length - 1; i++) {
        if (ar_num[i] != rs[i]) return false;
    }
    return true;
}
console.log(permutation([1, 2, 3, 4, 5], 5));
console.log(permutation([1, 2, 3, 5], 5));
console.log(permutation([1, 2, 7, 4, 5], 5));