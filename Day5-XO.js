// FMP Track Coding Chalenge 2024
// Day 5/366
// https://www.codewars.com/kata/55908aad6620c066bc00002a

// function XO([...str]) {
//     str = str.map(a => a.toLowerCase())
//     let x = str.reduce((acc, el) => acc += el === 'x' ? 1 : 0, 0)
//     let o = str.reduce((acc, el) => acc += el === 'o' ? 1 : 0, 0)
//     return x === o ? true : false
// }

// insight baru 
const XO = str => str.toLowerCase().split('x').length === str.toLowerCase().split('o').length

console.log(XO('zz'));
