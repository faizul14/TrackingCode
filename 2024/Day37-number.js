// FMP Track Coding Chalenge 2024
// Day 37/366
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/

// const number = (array) => {
//     //your awesome code here
//     for (let i = 1; i <= array.length; i++) {
//         array[i - 1] = `${i}: ${array[i - 1]}`
//     }

//     return array
// }

const number = (array) => array.map((el, index, _) => `${index + 1}: ${el}`)

console.log(
    number(
        ["a", "b", "c"]
    )
);