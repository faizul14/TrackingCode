// FMP Track Coding Chalenge 2024
// Day 75/366
// https://www.codewars.com/kata/525e5a1cb735154b320002c8/

// Return the nth triangular number
// function triangular(n) {
//     if (n <= 0) { return 0 }
//     let result = 0
//     let idx = 1
//     while (idx <= n) {
//         result += idx
//         idx++
//     }
//     return result
// }

function triangular(n) {
    if (n <= 0) { return 0 }
    return n * (n + 1) / 2;
}

// this solution with optimation
// const triangular = n => n > 0 ? (n * (n + 1) / 2) : 0

let startDate = new Date()
console.log(
    triangular(86822788)
    // triangular2(3)
);
let endDate = new Date()

console.log(`Time : ${endDate - startDate}`);


// const factorial = n => n ? n * factorial(n - 1) : 1

module.exports = { triangular }