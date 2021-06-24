import { MyPoint } from "./classMyPoint"
export class MyTriagle {
    private _v1: MyPoint;
    private _v2: MyPoint;
    private _v3: MyPoint;

    constructor(v1: MyPoint, v2: MyPoint, v3: MyPoint) {
        this._v1 = v1;
        this._v2 = v2;
        this._v3 = v3;
    }

    public get v1(): MyPoint {
        return this._v1;
    }

    public set v1(v1: MyPoint
    ) {
        this._v1 = v1;
    }

    public get v2(): MyPoint {
        return this._v2;
    }

    public set v2(v2: MyPoint
    ) {
        this._v2 = v2;
    }

    public get v3(): MyPoint {
        return this._v3;
    }

    public set v3(v3: MyPoint
    ) {
        this._v3 = v3;
    }

    toString() {
        return `MyTriangle[v1=(${this.v1.getXY()}),v2=(${this.v2.getXY()}),v3=(${this.v3.getXY()})]`
    }
    getPerimeter(): number {
        let d1 = this.v1.distance(this.v2);
        let d2 = this.v2.distance(this.v3);
        let d3 = this.v3.distance(this.v1);
        return d1 + d2 + d3
    }
    getType(): string {
        let st = '';
        let d1 = this.v1.distance(this.v2);
        let d2 = this.v2.distance(this.v3);
        let d3 = this.v3.distance(this.v1);
        if (d1 === d2 && d2 === d3) st = 'equilateral';
        else if (d1 === d2 || d1 === d3 || d2 === d3) st = 'isosceles';
        else st = 'scalene'
        return st;
    }
}

let p1 = new MyPoint(1, 2),
    p2 = new MyPoint(4, 8),
    p3 = new MyPoint(1, 15);
let triangle = new MyTriagle(p1, p2, p3);

console.log(triangle.toString());
console.log(triangle.getPerimeter());
console.log(triangle.getType());

