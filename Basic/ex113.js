// Write a JavaScript program 
// to calculate the sum of n + n/2 + n/4 + n/8 + .... where n is a positive integer and all divisions are integer.

function calculate(num){
        var s = 0;
        while (num > 0) {
            s += num;
            num = Math.floor(num / 2);
        }
        return s;
    }
    console.log(calculate(8))
    console.log(calculate(9))
    console.log(calculate(10))
