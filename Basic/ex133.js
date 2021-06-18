//  Write a JavaScript program to check whether a given fraction is proper or not. 
function proper_improper(num) {
    return Math.abs(num[0] / num[1]) < 1
      ? "Proper fraction."
      : "Improper fraction.";
  }
  console.log(proper_improper([12, 300]));
  console.log(proper_improper([2, 4]));