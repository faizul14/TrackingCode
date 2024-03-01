// FMP Track Coding Chalenge 2024
// Day 11/366
// https://www.codewars.com/kata/5264d2b162488dc400000001

// const spinWords = (string) => string.split(' ').map(a => a.length >= 5 ? a.split('').reverse().join('') : a).join(' ');

// insight baru memudahkan pembacaan code
const spinWords = (string) => {
    return string
        .split(' ')
        .map(a => a.length < 5 ? a : a.split('').reverse().join(''))
        .join(' ')
}


console.log(spinWords('Hey fellow warriors'));
