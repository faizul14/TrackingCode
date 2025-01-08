// FMP Track Coding Chalenge 2024
// Day 45/366
// https://www.codewars.com/kata/539ee3b6757843632d00026b/

// var capitals = function (word) {
//     // Write your code here
//     const indexOfCapital = []
//     const capital = word.match(/[A-Z]/g)
//     word = word.split('')
//     capital.map((el) => indexOfCapital.push(word.indexOf(el)))
//     return indexOfCapital
// };

const capitals = word => word.match(/[A-Z]/g).map(el => word.indexOf(el))

console.log(
    capitals('CodEWaRs')
);