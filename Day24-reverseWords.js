// FMP Track Coding Chalenge 2024
// Day 24/366
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

// function reverseWords(str) {
//     // Go for it
//     str = str.split(' ')
//     str = str.map(a => a !== '' ? a.split('').reverse().join('') : a).join(' ')
//     return str
// }

const reverseWords = (str) => str.split(' ').map(a => a !== '' ? a.split('').reverse().join('') : a).join(' ')

console.log(reverseWords('double  spaced  words'));
