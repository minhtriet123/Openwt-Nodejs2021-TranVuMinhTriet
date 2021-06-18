function CtoF(t) {
    var F = 0;
    F = t / 5 * 9 + 32;
    console.log(t + "C is " + F + "F.");
}

function FtoC(t) {
    var C = 0;
    C= (t-32)/9*5;
    console.log(t + "F is " + C + "C.");
}

CtoF(19);
FtoC(122);