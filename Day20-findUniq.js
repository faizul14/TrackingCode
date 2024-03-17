// FMP Track Coding Chalenge 2024
// Day 20/366
// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/

// function findUniq(arr) {
//     // do magic
//     const initialValue = arr[0]
//     let result = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0) {
//             if (arr[i] !== arr[i + 1] && arr[i] !== arr[i + 2]) {
//                 result = arr[i]
//                 break
//             }
//         }
//         if (arr[i] !== initialValue && arr[i] !== arr[i + 1]) {
//             result = arr[i]
//         }
//     }
//     return result
// }

// this solution maybe not eficient but, this solution is small.
const findUniq = arr => {
    arr = arr.sort()
    return arr[0] !== arr[1] ? arr[0] : arr[arr.length - 1]
}

console.log(findUniq([1, 0, 0]));
console.log(findUniq([1, 1, 1, 2, 1, 1]));
console.log(findUniq([3, 10, 3, 3, 3]));


