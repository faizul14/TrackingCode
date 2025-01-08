// FMP Track Coding Chalenge 2024
// Day 40/366
// https://www.codewars.com/kata/559590633066759614000063/

// function minMax(arr) {
//     const result = [0, 0]
//     result[0] = arr[0]
//     result[result.length - 1] = arr[0]
//     result
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < result[0]) {
//             result[0] = arr[i]
//         }
//         if (arr[i] > result[result.length - 1]) {
//             result[result.length - 1] = arr[i]
//         }
//     }
//     return result; // fix me!
// }

// const minMax = arr => [arr.sort((a, b) => a - b)[0], arr.sort((a, b) => a - b)[arr.length - 1]]

const minMax = arr => [Math.min(...arr), Math.max(...arr)]

console.log(
    minMax(
        // [1, 2, 3, 4, 5]
        [2334454, 5]
    )
);