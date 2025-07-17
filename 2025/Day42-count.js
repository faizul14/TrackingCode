// FMP Track Coding Chalenge 2025
// Day 42/365
// https://www.codewars.com/kata/59f34ec5a01431ab7600005a/

// const factorial = n => {
//     if (n === 1) return 1
//     return n * factorial(n - 1)
// }

// function count(n) {
//     //..
//     return factorial(n).toLocaleString('fullwide', { useGrouping: false }).toLocaleString('fullwide', { useGrouping: false }).toString().length
// };

// function count(n) {
//     let result = 1n; // BigInt
//     for (let i = 2n; i <= BigInt(n); i++) {
//         result *= i;
//     }
//     return result.toString().length;
// }

// function count(n) {
//     let sumLog = 0;
//     for (let i = 2; i <= n; i++) {
//         sumLog += Math.log10(i);
//     }
//     return Math.floor(sumLog) + 1;
// }

function count(n) {
    if (n === 0 || n === 1) return 1;
    const pi = Math.PI;
    const e = Math.E;
    const log10Factorial = n * Math.log10(n / e) + Math.log10(2 * pi * n) / 2;
    return Math.floor(log10Factorial) + 1;
}

console.log(
    count(50)
    // factorial(5)
);

console.log(
    // Math.log10(50)
    Math.E
);

