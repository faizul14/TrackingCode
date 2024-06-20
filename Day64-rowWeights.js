// FMP Track Coding Chalenge 2024
// Day 64/366
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/

// function rowWeights(array) {
//     //your code here
//     if (array.length === 1) {
//         return [...array, 0]
//     }
//     let ganjil = 0
//     let genap = 0
//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 === 1) {
//             ganjil += array[i]
//             continue
//         }
//         genap += array[i]
//     }
//     return [genap, ganjil]
// }

const accumulate = (arr, isGanjil) => arr.reduce((acc, el, idx, _) => acc += isGanjil ? idx % 2 === 1 ? el : 0 : idx % 2 === 0 ? el : 0, 0)
const rowWeights = array => [accumulate(array, false), accumulate(array, true)]

console.log(
    rowWeights(
        [10, 11, 1]
        // [10]
    )
);
