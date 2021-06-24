"use strict";
exports.__esModule = true;
exports.Customer = void 0;
var Customer = /** @class */ (function () {
    function Customer(id, name, gender) {
        this._ID = id;
        this._name = name;
        this._gender = gender;
    }
    Object.defineProperty(Customer.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (ID) {
            this._ID = ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (gender) {
            this._gender = gender;
        },
        enumerable: false,
        configurable: true
    });
    Customer.prototype.toString = function () {
        return this.name + "(" + this._ID + ")";
    };
    return Customer;
}());
exports.Customer = Customer;
