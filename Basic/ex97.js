//  Write a JavaScript program to find the shortest possible
//  string which can create a string to make it a palindrome by adding characters to the end of it.

function reverse(s) {
    return s.split('').reverse().join('');
}
function create_palindrome(st) {
    var i = 0;
    var aux;
    while (st != st.split('').reverse().join('')) {
        aux = st.split('')
        aux.splice(st.length - i, 0, st[i])
        
        st = aux.join('');
        i++;
    }
    return st;
}
console.log(create_palindrome('abcddcb'));
console.log(create_palindrome('triet'));
console.log(create_palindrome("nan"))