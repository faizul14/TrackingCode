// FMP Track Coding Chalenge 2024
// Day 12/366
// https://www.codewars.com/kata/541c8630095125aba6000c00

// const digitalRoot = (n) => {
//     let result = 0
//     result = root(n.toString().split(''))
//     while (result >= 10) {
//         result = root(result.toString().split(''))
//     }
//     return result
// }
// const root = n => n.reduce((acc, el) => acc += parseInt(el), 0)


// insight from discusion -> absolutely clever lol
const digitalRoot = n => (n - 1) % 9 + 1


console.log(digitalRoot(992));
