"use strict";
exports.__esModule = true;
exports.Author = void 0;
var Author = /** @class */ (function () {
    function Author(n, e) {
        this.name = n;
        this.email = e;
    }
    Object.defineProperty(Author.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Author.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Author.prototype, "setEmail", {
        set: function (newEmail) {
            this.email = newEmail;
        },
        enumerable: false,
        configurable: true
    });
    Author.prototype.toString = function () {
        return "Author[name=" + this.name + ",email=" + this.email + "]";
    };
    return Author;
}());
exports.Author = Author;
