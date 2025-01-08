// FMP Track Coding Chalenge 2024
// Day 21/366
// https://www.codewars.com/kata/520b9d2ad5c005041100000f/
const pigIt = (str) => str.split(' ').map(a => /[A-Za-z]/g.test(a) ? a.split('').slice(1).join('').concat(a[0]).concat('ay') : a).join(' ')

console.log(pigIt('This is my string !'));
