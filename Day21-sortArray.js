// FMP Track Coding Chalenge 2024
// Day 21/366
// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/

// function sortArray(array) {
//     // Return a sorted array.
//     const arrOdd = array.filter(a => Math.abs(a % 2) === 1).sort((a, b) => a - b)
//     let indHelper = 0
//     for (let i = 0; i < array.length; i++) {
//         if (Math.abs(array[i]) % 2 === 1) {
//             array[i] = arrOdd[indHelper]
//             indHelper++
//         }
//     }
//     return array
// }

// maybe this soluution is can i think, and i know this not perfect but is maybe better solution.
function sortArray(array) {
    // Return a sorted array.
    const arrOdd = array.filter(a => a % 2 !== 0).sort((a, b) => a - b)
    let indHelper = 0
    for (let i = 0; i < array.length; i++) {
        if (i === arrOdd.length) {
            break
        }
        if (array[i] % 2 !== 0) {
            array[i] = arrOdd[indHelper]
            indHelper++
        }
    }
    return array
}

// console.log(sortArray([5, 3, 1, 8, 0]));

console.log(
    sortArray(
        [
            -21, -35, 14, -24, -37, 10, 26,
            -4, -47, -1, 4, 10, -42, 49,
            -22, 19, -26, -27, 49, 17, -50,
            50
        ]
    )
);


