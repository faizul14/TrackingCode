// FMP Track Coding Chalenge 2024
// Day 129/366
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/

// const factorial = n => {
//     if (n === 1n) return 1n
//     return n * factorial(n - 1n)
// }

// const factorial = n => {
//     let result = 1n // with BigInt
//     for (let i = 1n; i <= n; i++) {
//         result *= i
//     }
//     return result
// }

// This solution get time out, LOL
// function zeros(n) {
//     // your code here  
//     if (n === 0) return 0
//     let resultZero = 0
//     const valueFact = factorial(BigInt(n)).toString().split('')
//     valueFact
//     for (let i = valueFact.length - 1; i >= 0; i--) {
//         if (+valueFact[i] === 0) {
//             resultZero++
//             continue
//         }
//         break
//     }
//     return resultZero
// }

// Mindblowing solution, LOL
function zeros(n) {
    // your code here  
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

console.log(
    zeros(100)
);

