// FMP Track Coding Chalenge 2024
// Day 2/366
// https://www.codewars.com/kata/56747fd5cb988479af000028

const getMiddle = ([...s]) => s.length % 2 == 0 ? ''.concat(s[(s.length / 2) - 1]).concat(s[(s.length / 2)]) : s[Math.floor(s.length / 2)]

console.log(getMiddle('A'));
