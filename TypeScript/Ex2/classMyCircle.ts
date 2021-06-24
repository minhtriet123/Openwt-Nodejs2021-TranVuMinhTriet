import { MyPoint } from "./classMyPoint";

export class MyCirle {
    private _center: MyPoint
    private _radius: number

    // constructor(c: MyPoint = new MyPoint(0, 0), r: number = 1) {
    //     this._center = c;
    //     this._radius = r;
    // }
    constructor(center: MyPoint = new MyPoint(0,0), x?: number, y?: number , radius: number = 1 ) {
        if (x || y) {
            this._center = new MyPoint(x, y);
            this._radius = radius;
        } else {
            this._center = center;
            this._radius = radius;
        }
    }
    public get center(): MyPoint {
        return this._center;
    }

    public set center(center: MyPoint) {
        this._center = center;
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(radius: number) {
        this._radius = radius;
    }


}


