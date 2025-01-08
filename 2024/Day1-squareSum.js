// FMP Track Coding Chalenge 2024
// Day 1/366
// https://www.codewars.com/kata/515e271a311df0350d00000f

// function squareSum(numbers) {
//     let result = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         result += (numbers[i] * numbers[i])
//     }
//     return result
// }


const squareSum = (numbers) => numbers.reduce((acc, value) => acc += Math.pow(value, 2), 0)


console.log(squareSum([0, 3, 4, 5]));
