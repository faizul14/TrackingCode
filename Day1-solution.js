// FMP Track Coding Chalenge 2024
// Day 1/366
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// function solution(str) {
//     let arrHelp = str.split('')
//     let result = []
//     for (let i = arrHelp.length; i > 0; i--) {
//         result.push(arrHelp[i - 1])
//     }
//     return result.join('')
// }

const solution = (str) => str.split('').reverse().join('')

console.log(solution('world')); // dlrow
