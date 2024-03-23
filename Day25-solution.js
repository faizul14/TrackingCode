// FMP Track Coding Chalenge 2024
// Day 25/366
// https://www.codewars.com/kata/5208f99aee097e6552000148/

// function solution(string) {
//     string = string.split('')
//     for (let i = 0; i < string.length; i++) {
//         string[i] = /[A-Z]/g.test(string[i])
//             ? ` ${string[i]}`
//             : string[i]
//     }
//     return string.join('')
// }

const solution = string => string.split('').map(a => /[A-Z]/g.test(a) ? ' '.concat(a) : a).join('') 

console.log(solution('camelCasingTest'));

