// FMP Track Coding Chalenge 2024
// Day 47/366
// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/

// function sumOfMinimums(arr) {
//     // your code here
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         const arrHelper = arr[i].sort((a, b) => a - b )
//         sum += arrHelper[0]
//     }
//     return sum
// }

const sumOfMinimums = arr => arr.reduce((acc, el) => acc += Math.min(...el), 0)

console.log(
    sumOfMinimums(
        [[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]
    )
);
