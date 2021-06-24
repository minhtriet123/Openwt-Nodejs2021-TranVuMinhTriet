"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "age", {
        // when accessing the age property return the private _age
        // getters and setters are part of the JavaScript Class syntax
        get: function () {
            return this._age;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.sayHello = function () {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName + "!");
    };
    // Only this method can update the private _age
    Person.prototype.addOneYear = function () {
        this._age = this._age + 1;
    };
    return Person;
}());
exports.Person = Person;
var cory = new Person('Cory', 'Rylan', 100);
cory.addOneYear();
console.log(cory.age); // 101
