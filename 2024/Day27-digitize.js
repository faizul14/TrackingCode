// FMP Track Coding Chalenge 2024
// Day 27/366
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/

// function digitize(n) {
//     //code here
//     const result = []
//     n = n.toString()
//     const lengthN = n.length
//     for (let i = lengthN - 1; i >= 0; i--) {
//         result.push(parseInt(n[i]))
//     }
//     return result
// }

const digitize = n => n.toString().split('').reverse().map(el => parseInt(el))

console.log(
    digitize(35231)
);

console.log(
    digitize(0)
);

