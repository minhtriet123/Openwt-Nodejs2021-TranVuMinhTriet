export class Ball {
    private _x: number
    private _y: number
    private _z: number

    constructor(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
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

    public get z(): number {
        return this._z;
    }

    public set z(z: number
    ) {
        this._z = z;
    }
    setXYZ(x: number, y: number, z: number) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    toString() {
        return `(${this._x}, ${this._y}, ${this._z})`
    }
}

export class Player {
    private _number: number;
    private _x: number;
    private _y: number;
    private _z: number = 0;

    constructor(n: number, x: number, y: number) {
        this._number = n;
        this._x = x;
        this._y = y;
    }
    public get number(): number {
        return this._number;
    }

    public set number(number: number
    ) {
        this._number = number;
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

    public set y(y: number) {
        this._y = y;
    }

    


}