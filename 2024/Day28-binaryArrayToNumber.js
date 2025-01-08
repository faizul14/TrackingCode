// FMP Track Coding Chalenge 2024
// Day 28/366
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/

// convert binary to decimal with
// parseInt(bin, 2)
const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

console.log(
    binaryArrayToNumber([0, 0, 0, 1])
);
