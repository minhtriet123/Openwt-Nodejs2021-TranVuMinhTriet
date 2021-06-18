// Write a JavaScript program to find two elements of the array such that their
// absolute difference is not greater than a given integer but is as close to the said integer.
function max_diff(ara, n) {
    var max_val = -1;
    var a, b = 0;
    var old = -1;
    for (var i = 0; i < ara.length; i++) {
        for (var j = i + 1; j < ara.length; j++) {
            var x = Math.abs(ara[i] - ara[j]);
            if (x <= n) {
                max_val = Math.max(max_val, x);
                if (old != max_val) {
                    a = ara[i];
                    b = ara[j];
                }
                old = max_val;
            }
        }
    }
    return "Max diff: " + max_val + " .Two intergers: " + a + ", " + b;
}
console.log(max_diff([12, 10, 33, 34], 10));
console.log(max_diff([12, 10, 33, 34], 24));
console.log(max_diff([12, 10, 33, 44], 40));