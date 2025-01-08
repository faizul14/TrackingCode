// FMP Track Coding Chalenge 2024
// Day 91/366
// https://www.codewars.com/kata/525d50d2037b7acd6e000534/

var numbers = [1, 2, 3, 4, 5];

// this solution from me, and need more time to find conception, LOL still noob 
Array.prototype.square = function () {
    return this.map(el => Math.pow(el, 2))
}

Array.prototype.cube = function () {
    return this.map(el => Math.pow(el, 3))
}

Array.prototype.average = function () {
    return this.reduce((acc, el) => acc += el, 0) / this.length
}

Array.prototype.sum = function () {
    return this.reduce((acc, el) => acc += el, 0)
}

Array.prototype.even = function () {
    return this.filter(el => el % 2 === 0)
}

Array.prototype.odd = function () {
    return this.filter(el => el % 2 !== 0)
}

// this solution from discussion, and i get new insight, and very clever more
Object.assign(Array.prototype, {
    square() { return this.map(n => n * n); },
    cube() { return this.map(n => Math.pow(n, 3)); },
    sum() { return this.reduce((p, n) => p + n, 0); },
    average() { return this.reduce((p, n) => p + n, 0) / this.length; },
    even() { return this.filter(n => !(n % 2)); },
    odd() { return this.filter(n => n % 2); }
});


numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]

