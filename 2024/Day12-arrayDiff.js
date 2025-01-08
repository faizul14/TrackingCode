// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/523f5d21c841566fde000009

// const arrayDiff = (a, b) => {
//     let result = []
//     for (let i = 0; i < a.length; i++) {
//         if (!b.includes(a[i])) {
//             result.push(a[i])
//         }
//     }
//     return result
// }

const arrayDiff = (a, b) => a.filter(value => !b.includes(value))

console.log(arrayDiff([-15, -18, 11, -17, 5, 20], [-15, -18, 11]));
