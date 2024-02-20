// FMP Track Coding Chalenge 2024
// Day 1/366
// https://www.codewars.com/kata/55685cd7ad70877c23000102

// function makeNegative(num) {
//     // Code?
//     if(num > 0){
//         return num - (num * 2)
//     }
//     return num
// }

// const makeNegative = num => num > 0 ? num - (num * 2) : num

const makeNegative = num => -Math.abs(num)

console.log(makeNegative(9));
