// FMP Track Coding Chalenge 2024
// Day 18/366
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/

// function moveZeros(arr) {
//     const loopLength = arr.filter(a => a === 0)
//     arr = arr.filter(a => a !== 0)
//     for (let i = 0; i < loopLength.length; i++) { arr.push(0) }
//     return arr
// }

// insigth baru dari diskusi
const moveZeros = arr => [...arr.filter(a => a !== 0), ...arr.filter(a => a === 0)]

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
