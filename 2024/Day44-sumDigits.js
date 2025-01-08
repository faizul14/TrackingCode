// FMP Track Coding Chalenge 2024
// Day 44/366
// https://www.codewars.com/kata/52f3149496de55aded000410/

// function sumDigits(number) {
//     number = Math.abs(number)
//         .toString()
//         .split('')
//         .reduce((acc, el) => acc += parseInt(el), 0)
//     return number
// }

const sumDigits = number => Math.abs(number)
    .toString()
    .split('')
    .reduce((acc, el) => acc += parseInt(el), 0)


console.log(
    sumDigits(
        -32
    )
);