// Write a JavaScript program to find the longest string from a given array


function longest_string(ar_str) {
    var max = ar_str[0].length;
    for (var i = 0; i < ar_str.length; i++) {
        if (max < ar_str[i].length) max = ar_str[i].length;
    }
    return result = ar_str.filter(str => str.length == max);
}

console.log(longest_string(['aa', 'aaa', 'aaaa', 'aaaaaaaaa', 'aaaa']))