// FMP Track Coding Chalenge 2024
// Day 51/366
// https://www.codewars.com/kata/587731fda577b3d1b0001196/

// String.prototype.camelCase = function () {
//     //your code here
//     let result = this.split(' ')
//     result
//     result = result.map(el => el.charAt(0).toUpperCase()+el.slice(1).toLocaleLowerCase())
//     result
//     return result.join('')
// }

String.prototype.camelCase = function () {
    return this
        .split(' ')
        .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
        .join('')
}



let message = 'camel case'
message = message.camelCase()
console.log(message);
