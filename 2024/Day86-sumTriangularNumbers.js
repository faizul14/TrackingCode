// FMP Track Coding Chalenge 2024
// Day 86/366
// https://www.codewars.com/kata/580878d5d27b84b64c000b51/

function sumTriangularNumbers(n) {
    if (n <= 0) return 0
    let tracking = 1
    let index = 1
    let result = 0
    while (index <= n) {
        result += tracking

        index++
        tracking += index
    }
    return result;
}

// this solution get from discussion, and verry use Math konsep, we need learn more, more, and more.
const sumTriangularNumbers = (n) => n < 0 ? 0 : n * (n + 1) * (n + 2) / 6

console.log(
    sumTriangularNumbers(6)
);
