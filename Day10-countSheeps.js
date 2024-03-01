// FMP Track Coding Chalenge 2024
// Day 10/366
// https://www.codewars.com/kata/54edbc7200b811e956000556

// function countSheeps(sheep) {
//     // TODO
//     let result = 0
//     for (let i = 0; i < sheep.length; i++) { result += sheep[i] ? 1 : 0 }
//     return result
// }

const countSheeps = (sheep) => sheep.reduce((acc, el) => acc += el ? 1 : 0, 0)

console.log(countSheeps([undefined]));
