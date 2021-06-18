//Write a JavaScript program to find all distinct prime factors of a given integer

function find_prime(n) {
    var rs = "";
    var i = 2;
    while (n > 1) {
        if (n % i == 0){
            n = n / 10 ;
            rs += ", " + i;
        } else i++;
    }
    return rs;

}

console.log(find_prime(25));