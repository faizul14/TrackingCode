// FMP Track Coding Chalenge 2024
// Day 1/366
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// function positiveSum(arr) {
//     let result = 0

//     for(let i = 0; i < arr.length; i++){
//         result += arr[i] > 0 ? arr[i] : 0
//     }
//     return result
// }

const positiveSum = (arr) => arr.reduce((acc, value) => acc += value > 0 ? value : 0, 0)

console.log(positiveSum([])); //15
