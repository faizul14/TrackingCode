// FMP Track Coding Chalenge 2024
// Day 30/366
// https://www.codewars.com/kata/555086d53eac039a2a000083/

// function lovefunc(flower1, flower2) {
//     // moment of truth
//     let result = false
//     result = (flower1 % 2) !== (flower2 % 2)
//     return result
// }

const lovefunc = (flower1, flower2) => (flower1 % 2) !== (flower2 % 2)

console.log(
    lovefunc(1, 3)
);
