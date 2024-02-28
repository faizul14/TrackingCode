// FMP Track Coding Chalenge 2024
// Day 8/366
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

// const summation = num => {
//     let result = 0
//     for (let i = 1; i <= num; i++) {
//         result += i
//     }
//     return result
// }

// insight baru
const summation = num => num * (num + 1) / 2

console.log(summation(3));
