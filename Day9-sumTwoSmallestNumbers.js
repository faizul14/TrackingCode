// FMP Track Coding Chalenge 2024
// Day 9/366
// https://www.codewars.com/kata/558fc85d8fd1938afb000014/

// const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b).reduce((acc, el, i) => acc += i <= 1 ? el : 0, 0)


// complexity tidak lebih baiik dari yang di atas
const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b).reverse().slice(3).reduce((acc, el, i) => acc += el, 0)


console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]));
