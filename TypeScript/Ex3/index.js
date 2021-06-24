"use strict";
exports.__esModule = true;
exports.Player = exports.Ball = void 0;
var Ball = /** @class */ (function () {
    function Ball(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }
    Object.defineProperty(Ball.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ball.prototype, "z", {
        get: function () {
            return this._z;
        },
        set: function (z) {
            this._z = z;
        },
        enumerable: false,
        configurable: true
    });
    Ball.prototype.setXYZ = function (x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    };
    Ball.prototype.toString = function () {
        return "(" + this._x + ", " + this._y + ", " + this._z + ")";
    };
    return Ball;
}());
exports.Ball = Ball;
var Player = /** @class */ (function () {
    function Player(n, x, y) {
        this._z = 0;
        this._number = n;
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Player.prototype, "number", {
        get: function () {
            return this._number;
        },
        set: function (number) {
            this._number = number;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
exports.Player = Player;
