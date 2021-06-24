class Circle {
    private radius: number
    private color: string

    constructor(radius = 1.0, color = 'red') {
        this.radius = radius;
        this.color = color;
    }
    getRadius(): number {
        return this.radius;
    }
    getArea(): number {
        return this.radius * this.radius * Math.PI
    }

}

const c1 = new Circle();
// Invoke public methods on instance c1, via dot operator.
console.log("The circle has radius of "
    + c1.getRadius() + " and area of " + c1.getArea());
//The circle has radius of 1.0 and area of 3.141592653589793

// Declare an instance of class circle called c2.
// Construct the instance c2 by invoking the second constructor
// with the given radius and default color.
const c2 = new Circle(2.0);
// Invoke public methods on instance c2, via dot operator.
console.log("The circle has radius of "
    + c2.getRadius() + " and area of " + c2.getArea());