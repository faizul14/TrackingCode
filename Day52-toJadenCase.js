// FMP Track Coding Chalenge 2024
// Day 52/366
// https://www.codewars.com/kata/5390bac347d09b7da40006f6/

// String.prototype.toJadenCase = function () {
//     //...
//     let jadenCase = this.split(' ')
//     jadenCase = jadenCase.map(el => el.charAt(0).toUpperCase() + el.slice(1))
//     return jadenCase.join(' ')
// };

String.prototype.toJadenCase = function () {
    return this
        .split(' ')
        .map(el => el.charAt(0).toUpperCase() + el.slice(1))
        .join(' ')
}


let message = "How can mirrors be real if our eyes aren't real"
message = message.toJadenCase()
console.log(
    message
);
