// FMP Track Coding Chalenge 2024
// Day 16/366
// https://www.codewars.com/kata/5287e858c6b5a9678200083c/

// function narcissistic(value) {
//     // Code me to return true or false
//     let valueRevamp = value.toString().split('')
//     let countRevamp = 0
//     for (let i = 0; i < valueRevamp.length; i++) {
//         countRevamp += Math.pow(valueRevamp[i], valueRevamp.length)
//     }
//     return value === countRevamp ? true : false
// }

const narcissistic = value => value === value.toString().split('').reduce((acc, el) => acc += Math.pow(el, value.toString().length), 0)

console.log(narcissistic(153));
