//Write a JavaScript program to replace the first digit in a string (should contains at least digit) with $ character

function rp_first(input_str) {
    var ar = input_str.split('');
    for (var i = 0 ; i < ar.length; i++ ){
    }
    return input_str.replace(/[0-9]/, '$');
  }
  console.log(rp_first("abc13da234bc"));
  console.log(rp_first("p3ython"));
  console.log(rp_first("ab1cabc"));   