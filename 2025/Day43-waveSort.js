// FMP Track Coding Chalenge 2025
// Day 43/365
// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/

// function waveSort(arr) {
//     let result = []
//     arr = arr.sort((a, b) => a - b)
//     const mid = Math.ceil(arr.length / 2)
//     for (let i = 0; i < mid; i++) {
//         result.push(arr[arr.length - (i + 1)])
//         result.push(arr[i])
//     }
//     return result
// }

function waveSort(arr) {
    for (let i = 0; i < arr.length; i += 2) {
        if (i > 0 && arr[i - 1] > arr[i]) {
            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
        }
        if (i < arr.length - 1 && arr[i + 1] > arr[i]) {
            [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]]
        }
    }
    return arr
}


let arr = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];
console.log(
    waveSort(arr)
);