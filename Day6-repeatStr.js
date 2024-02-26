// FMP Track Coding Chalenge 2024
// Day 6/366
// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

// function repeatStr(n, s) {
//     let resultStr = ''
//     for (let i = 0; i < n; i++) {
//         resultStr = resultStr.concat(s)
//     }
//     return resultStr;
// }

const repeatStr = (n, s) => s.repeat(n)


console.log(repeatStr(3, "*"));
