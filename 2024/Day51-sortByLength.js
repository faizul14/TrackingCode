// FMP Track Coding Chalenge 2024
// Day 51/366
// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c/

// function sortByLength(array) {
//     // Return an array containing the same strings,
//     // ordered from shortest to longest
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (array[i].length < array[j].length) {
//                 const temp = array[j]
//                 array[j] = array[i]
//                 array[i] = temp
//             }
//         }
//     }
//     return array;
// }

const sortByLength = array => array.sort((a, b) => a.length - b.length)

console.log(
    sortByLength(
        ["Beg", "Life", "I", "To"]
    )
);
