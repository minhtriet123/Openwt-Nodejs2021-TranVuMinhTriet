export class MyComplex {
    private _real: number;
    private _imag: number;

    constructor(r: number = 0, i: number = 0) {
        this._real = r;
        this._imag = i;

    }
    public get real(): number {
        return this._real;
    }

    public set real(real: number
    ) {
        this._real = real;
    }

    public get imag(): number {
        return this._imag;
    }

    public set imag(imag: number) {
        this._imag = imag;
    }

    setValue(r: number, i: number): void {
        this._imag = i;
        this._real = r;
    }
    toString() {
        return `(${this._real}+${this._imag}i)`
    }
    isReal(): boolean {
        return this._imag === 0
    }
    isImaginary() : boolean {
        return this._real === 0
    }
    equals(another : MyComplex) : boolean
    equals(r: number, i: number) : boolean
    equals(a1: unknown, a2?: unknown): boolean {
        let rs = false
        if(a2){
            rs = (this._real == a1 && this._imag == a2)
        }
        else if (typeof a1 === 'object'){
            rs = (this._real == a1._real && this._imag == a1._imag)
        }
        return rs;
    }
    addInto(right: MyComplex) : MyComplex{
        this._imag += right._imag;
        this._real += right._real; 
        return this
    }
    addNew(right: MyComplex){
        let i = this._imag + right._imag,
            r = this._real + right._real;
        return new MyComplex(r,i)
    }
}

console.log('Enter complex number 1 (real and imaginary part): 1.1 2.2');
console.log('Enter complex number 2 (real and imaginary part): 3.3 4.4 \n');
let n1 = new MyComplex(1.1,2.2),
    n2 = new MyComplex(3.3,4.4);

console.log(`Number 1 is: ${n1.toString()}`);
console.log(`${n1.toString()} is ${n1.isReal()?'A':'NOT'} a pure real number`);
console.log(`${n1.toString()} is ${n1.isImaginary()?'A':'NOT'} a pure imaginary number\n`)

console.log(`Number 2 is: ${n2.toString()}`);
console.log(`${n2.toString()} is ${n2.isReal()?'A':'NOT'} a pure real number`);
console.log(`${n2.toString()} is ${n2.isImaginary()?'A':'NOT'} a pure imaginary number\n`)

console.log(`${n1.toString()} is ${n1.equals(n2)?'':'NOT'} equal to ${n2.toString()}`)
console.log(`${n1.toString()} + ${n2.toString()} =  ${n2.addInto(n1)} `)