"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(isbn, n, a, p, qty) {
        if (qty === void 0) { qty = 0; }
        this._isbn = isbn;
        this._name = n;
        this._author = a;
        this._price = p;
        this._qty = qty;
    }
    Object.defineProperty(Book.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (author) {
            this._author = author;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "qty", {
        get: function () {
            return this._qty;
        },
        set: function (qty) {
            this._qty = qty;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "authorName", {
        get: function () {
            return this.author.getName;
        },
        enumerable: false,
        configurable: true
    });
    Book.prototype.toString = function () {
        return "Book[ibsn=" + this._isbn + "," + this.author.toString() + ",price=" + this._price + ",qty=" + this._qty + "]";
    };
    return Book;
}());
exports.Book = Book;
