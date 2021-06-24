export class MyPolynomial {
    private _coeffs: number[];

    constructor(c: number | number[]) {
        (typeof c === 'object') ? this._coeffs = c : this._coeffs = [c]
    }
    public get coeffs(): number[] {
        return this._coeffs;
    }

    public set coeffs(coeffs: number[]) {
        this._coeffs = coeffs;
    }

    getDegree(): number {
        return 0;
    }
    toString() {
        let ar = this._coeffs.reverse();
        let n = ar.length;
        let str = '';
        ar.map((c, i) => str += (` ${c}x^(${(n - 1) - i}) +`))
        return str.slice(0, str.length - 1)
    }

}

let p1 = new MyPolynomial(1.1);
console.log(p1.toString());
// Can also invoke with an array
let coeffs = [1.2, 3.4, 5.6, 7.8];
let p2 = new MyPolynomial(coeffs);
console.log(p2.toString());

