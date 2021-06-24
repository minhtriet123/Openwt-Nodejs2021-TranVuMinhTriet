"use strict";
exports.__esModule = true;
exports.MyPoint = void 0;
var MyPoint = /** @class */ (function () {
    function MyPoint(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(MyPoint.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyPoint.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    MyPoint.prototype.getXY = function () {
        return [this._x, this._y];
    };
    MyPoint.prototype.setXY = function (x, y) {
        this._x = x;
        this._y = y;
    };
    MyPoint.prototype.toString = function () {
        return "(" + this._x + "," + this._y + ")";
    };
    MyPoint.prototype.distance = function (arg1, arg2) {
        var result = 0;
        if (typeof arg1 === 'number' && typeof arg2 === 'number') {
            var difX = this._x - arg1;
            var difY = this._y - arg2;
            result = Math.sqrt(difX * difX + difY * difY);
        }
        if (typeof arg1 === 'object') {
            var difX = this._x - arg1._x;
            var difY = this._y - arg1._y;
            result = Math.sqrt(difX * difX + difY * difY);
        }
        if (!arg1) {
            result = Math.sqrt(this._x * this._x + this._y * this._y);
        }
        return result;
    };
    return MyPoint;
}());
exports.MyPoint = MyPoint;
var p1 = new MyPoint(); // Test constructor
console.log(p1); // Test toString()
p1.x = (8); // Test setters
p1.y = (6);
console.log("x is: " + p1.x); // Test getters
console.log("y is: " + p1.y);
p1.setXY(3, 0); // Test setXY()
console.log(p1.getXY()[0]); // Test getXY()
console.log(p1.getXY()[1]);
console.log(p1);
var p2 = new MyPoint(0, 4); // Test another constructor
console.log(p2);
// Testing the overloaded methods distance()
console.log(p1.distance(p2)); // which version?
console.log(p2.distance(p1)); // which version?
console.log(p1.distance(5, 6)); // which version?
console.log(p1.distance()); // which version?
