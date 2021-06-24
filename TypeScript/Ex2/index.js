"use strict";
exports.__esModule = true;
exports.MyTriagle = void 0;
var classMyPoint_1 = require("./classMyPoint");
var MyTriagle = /** @class */ (function () {
    function MyTriagle(v1, v2, v3) {
        this._v1 = v1;
        this._v2 = v2;
        this._v3 = v3;
    }
    Object.defineProperty(MyTriagle.prototype, "v1", {
        get: function () {
            return this._v1;
        },
        set: function (v1) {
            this._v1 = v1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyTriagle.prototype, "v2", {
        get: function () {
            return this._v2;
        },
        set: function (v2) {
            this._v2 = v2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyTriagle.prototype, "v3", {
        get: function () {
            return this._v3;
        },
        set: function (v3) {
            this._v3 = v3;
        },
        enumerable: false,
        configurable: true
    });
    MyTriagle.prototype.toString = function () {
        return "MyTriangle[v1=(" + this.v1.getXY() + "),v2=(" + this.v2.getXY() + "),v3=(" + this.v3.getXY() + ")]";
    };
    MyTriagle.prototype.getPerimeter = function () {
        var d1 = this.v1.distance(this.v2);
        var d2 = this.v2.distance(this.v3);
        var d3 = this.v3.distance(this.v1);
        return d1 + d2 + d3;
    };
    MyTriagle.prototype.getType = function () {
        var st = '';
        var d1 = this.v1.distance(this.v2);
        var d2 = this.v2.distance(this.v3);
        var d3 = this.v3.distance(this.v1);
        if (d1 === d2 && d2 === d3)
            st = 'equilateral';
        else if (d1 === d2 || d1 === d3 || d2 === d3)
            st = 'isosceles';
        else
            st = 'scalene';
        return st;
    };
    return MyTriagle;
}());
exports.MyTriagle = MyTriagle;
var p1 = new classMyPoint_1.MyPoint(1, 2), p2 = new classMyPoint_1.MyPoint(4, 8), p3 = new classMyPoint_1.MyPoint(1, 15);
var triangle = new MyTriagle(p1, p2, p3);
console.log(triangle.toString());
console.log(triangle.getPerimeter());
console.log(triangle.getType());
