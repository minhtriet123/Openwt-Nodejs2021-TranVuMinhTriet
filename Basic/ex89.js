//. Write a JavaScript program to check whether it is possible to replace $
// in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression
function check_arithmetic(x, y, z) {
    return x + y == z || x * y == z || x / y == z || x - y == z;
  }

  console.log(check_arithmetic(1,2,3));
  
  console.log(check_arithmetic(1,2,4))