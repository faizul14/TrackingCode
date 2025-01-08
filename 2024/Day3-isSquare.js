// FMP Track Coding Chalenge 2024
// Day 3/366
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e

// var isSquare = function (n) {
//     if (n < 0) {
//         return false
//     }
//     if (n === 0) {
//         return true
//     }

//     let result = false;
//     for (let i = 1; i <= n; i++) {
//         if (Math.pow(i, 2) === n) {
//             result = true
//             break
//         } else {
//             result = false
//         }
//     }
//     return result
// }

// insight baru 
const isSquare = n => Math.sqrt(n) % 1 == 0
// iinsight baru
// var isSquare = n => ((n ** (1 / 2)) % 1 === 0)



console.log(isSquare(4));
