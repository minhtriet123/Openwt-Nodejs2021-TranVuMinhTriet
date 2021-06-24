export class Ball {
    private _x: number
    private _y: number
    private _radius: number
    private _xDelta: number
    private _yDelta: number

    constructor(x: number, y: number, radius: number, speed: number, direction: number) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._xDelta = speed * Math.cos(direction);
        this._yDelta = -speed * Math.sin(direction);
    }
    public get x(): number {
        return this.x;
    }

    public set x(x: number) {
        this.x = x;
    }

    public get y(): number {
        return this.y;
    }

    public set y(y: number) {
        this.y = y;
    }

    public get radius(): number {
        return this.radius;
    }

    public set radius(radius: number) {
        this.radius = radius;
    }

    public get xDelta(): number {
        return this.xDelta;
    }

    public set xDelta(xDelta: number) {
        this.xDelta = xDelta;
    }

    public get yDelta(): number {
        return this.yDelta;
    }

    public set yDelta(yDelta: number) {
        this.yDelta = yDelta;
    }
    move() {
        this._x += this._xDelta;
        this._y += this._yDelta;
    }
    reflectVertical() {
        this._yDelta = -this._yDelta;
    }
    toString() {
        return `Ball at (${this._x}, ${this._y}) of velocity (${this._xDelta}, ${this._yDelta})`
    }

}
let ball = new Ball(50, 50, 5, 10, 30);

for (let step = 0; step < 100; ++step) {
   ball.move();
   
   console.log(ball.toString()); // manual check the position of the ball
}