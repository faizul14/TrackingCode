// FMP Track Coding Chalenge 2024
// Day 3/366
// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// const findShort = (s) => {
//     s = s.split(" ").reduce((acc, el) => acc == 0 ? el.length : acc > el.length ? el.length : acc, 0)
//     return s
// }

// const findShort = (s) => s.split(" ").reduce((acc, el) => acc == 0 ? el.length : acc > el.length ? el.length : acc, 0)

// insight baru dari diskusi
const findShort = s => Math.min(...s.split(" ").map(a => a.length))

console.log(findShort("Let's travel abroad shall we i"));



