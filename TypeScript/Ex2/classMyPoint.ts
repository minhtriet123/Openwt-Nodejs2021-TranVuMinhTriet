export class MyPoint {
    private _x: number
    private _y: number

    constructor(x: number = 0, y: number = 0) {
        this._x = x
        this._y = y
    }

    public get x(): number {
        return this._x;
    }

    public set x(x: number
    ) {
        this._x = x;
    }

    public get y(): number {
        return this._y;
    }

    public set y(y: number
    ) {
        this._y = y;
    }
    getXY() {
        return [this._x, this._y]
    }
    setXY(x: number, y: number) {
        this._x = x
        this._y = y
    }
    toString(): string {
        return `(${this._x},${this._y})`
    }
    distance(): number
    distance(another : MyPoint): number
    distance(x: number, y: number): number 
    distance(arg1?: unknown , arg2?:unknown): number {
        let result = 0;
        if (typeof arg1 === 'number' && typeof arg2 === 'number' ){
            let difX = this._x - arg1
            let difY = this._y - arg2
            result = Math.sqrt(difX * difX + difY * difY)
        }
        if( typeof arg1 === 'object' ) {
            let difX = this._x - arg1._x
            let difY = this._y - arg1._y
            result = Math.sqrt(difX * difX + difY * difY)
        }
        if (!arg1) {
            result = Math.sqrt(this._x*this._x + this._y*this._y)
        }
        return result;
    }
}

let p1 = new MyPoint();  // Test constructor
console.log(p1);      // Test toString()
p1.x=(8);   // Test setters
p1.y=(6);
console.log("x is: " + p1.x);  // Test getters
console.log("y is: " + p1.y);
p1.setXY(3, 0);   // Test setXY()
console.log(p1.getXY()[0]);  // Test getXY()
console.log(p1.getXY()[1]);
console.log(p1);

let p2 = new MyPoint(0, 4);  // Test another constructor
console.log(p2);
// Testing the overloaded methods distance()
console.log(p1.distance(p2));    // which version?
console.log(p2.distance(p1));    // which version?
console.log(p1.distance(5, 6));  // which version?
console.log(p1.distance());      // which version?