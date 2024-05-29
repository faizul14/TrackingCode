// FMP Track Coding Chalenge 2024
// Day 55/366
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/

// function roundToNext5(n) {
//     // ...
//     if (n % 5 === 0) {
//         return n
//     }
//     while (n % 5 !== 0) { n++ }
//     return n
// }

// good insight
const roundToNext5 = n => Math.ceil(n / 5) * 5

console.log(
    roundToNext5(
        19
    )
);
