// FMP Track Coding Chalenge 2024
// Day 16/366
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

const openOrSenior = (data) => data.map((element, index, array) => element[0] >= 55 && element[1] > 7 ? "Senior" : "Open")

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))
