// FMP Track Coding Chalenge 2024
// Day 137/366
// https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/

function sumEvenNumbers(input) {
    // [...]
    return input.reduce((acc, el) => acc +=  (el % 2 === 0)? el : 0, 0)
}


console.log(
    sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
