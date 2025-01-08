// FMP Track Coding Chalenge 2024
// Day 1/366
// https://www.codewars.com/kata/56dec885c54a926dcd001095/

// function opposite(number) {
//     if (number < 0) {
//         return Math.abs(number)
//     }
//     return -number
// }

const opposite = (number) => number < 0 ? Math.abs(number) : -number

console.log(opposite(-45)); //-45
