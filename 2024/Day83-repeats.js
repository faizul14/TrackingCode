// FMP Track Coding Chalenge 2024
// Day 83/366
// https://www.codewars.com/kata/59f11118a5e129e591000134/

// function repeats(arr) {
//     //..
//     const result = []
//     const chaceValueArray = []

//     for (let i = 0; i < arr.length; i++) {
//         let track = 1
//         if (chaceValueArray.includes(arr[i])) { continue }
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j && arr[i] === arr[j]) {
//                 track++
//             }
//         }
//         chaceValueArray.push(arr[i])
//         if (track === 1) {
//             result.push(arr[i])
//         }
//     }

//     return result.reduce((acc, el) => acc += el, 0)
// };

// this solution get from discussion, simple but very bad on performe cause many looping on this algoritma
const repeats = arr => arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el)).reduce((acc, el) => acc += el, 0)

console.log(
    repeats([9, 10, 19, 13, 19, 13])
);
