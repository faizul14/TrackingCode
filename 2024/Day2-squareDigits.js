// FMP Track Coding Chalenge 2024
// Day 2/366
// https://www.codewars.com/kata/546e2562b03326a88e000020

// function squareDigits(num) {
//     num = num.toString();
//     let result = '';

//     for(let i = 0; i < num.length; i++){
//         result = result.concat(num[i] ** 2)
//     }
//     return Math.abs(result);
// }

const squareDigits = (num) => Math.abs(num.toString().split('').reduce((acc, el) => acc.concat(Math.pow(el, 2)), ''))

console.log(squareDigits(3212)); //9414