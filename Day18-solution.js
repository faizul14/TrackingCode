// FMP Track Coding Chalenge 2024
// Day 18/366
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/

// function solution(str) {
//     const arrResult = []
//     for (let i = 0; i < str.length; i += 2) {
//         const createElement = i !== str.length - 1 ? str[i].concat(str[i + 1]) : str[i].concat('_')
//         arrResult.push(createElement)
//     }
//     return arrResult
// }

// insight from diskusi and veri clever, LOL 
const solution = str => (str + '_').match(/.{2}/g) || []

console.log(solution('abcdefg'));
