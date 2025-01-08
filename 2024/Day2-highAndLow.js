// FMP Track Coding Chalenge 2024
// Day 2/366
// https://www.codewars.com/kata/554b4ac871d6813a03000035

// const highAndLow = (numbers) => {
//     numbers = numbers.split(' ').sort((a, b) => a - b)
//     return `${numbers[numbers.length - 1]} `.concat(numbers[0])
// }

// new insight
const highAndLow = (numbers) => {
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(0, ...numbers)}`
}

console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'));
