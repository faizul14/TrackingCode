// FMP Track Coding Chalenge 2024
// Day 59/366
// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/

// function gimme(triplet) {
//     let tripletSort = [...triplet]
//     const middleValueIndex = Math.ceil((tripletSort.length - 1) / 2)
//     const middleValue = tripletSort.sort((a, b) => a - b)[middleValueIndex]
//     for (let i = 0; i < triplet.length; i++) {
//         if (triplet[i] === middleValue) {
//             return i
//         }
//     }
// }

// get this solution from discussion
const gimme = triplet => triplet.indexOf([...triplet].sort((a, b) => a - b)[1])

console.log(
    gimme(
        [2, 3, 1]
    ),
    // gimme(
    //     // [5, 10, 14]
    //     [-2, -3, -1]
    // )
);
