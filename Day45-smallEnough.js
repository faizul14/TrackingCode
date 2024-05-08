// FMP Track Coding Chalenge 2024
// Day 45/366
// https://www.codewars.com/kata/57cc981a58da9e302a000214/

// function smallEnough(a, limit) {
//     let valueMax = 0
//     for (let i = 0; i < a.length; i++) {
//         if (valueMax < a[i]) {
//             valueMax = a[i]
//         }
//     }
//     return valueMax <=limit
// }

const smallEnough = (a, limit) => Math.max(...a) <= limit

console.log(
    smallEnough(
        [101, 66], 200
    )
);