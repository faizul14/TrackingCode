// FMP Track Coding Chalenge 2024
// Day 3/366
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// function accum([...s]) {
//     // your code
//     let result = [];
//     for (let i = 0; i < s.length; i++) {
//         for (let j = 0; j <= i; j++) {
//             result.push(j == 0 ? s[i].toLocaleUpperCase() : s[i].toLocaleLowerCase())
//         }
//         result.push(i !== s.length - 1 ? '-' : '')
//     }
//     return result.join('')
// }

// insight from clever
const accum = ([...s]) => s.map((a, i) => a = a.toLocaleUpperCase() + a.toLocaleLowerCase().repeat(i)).join('-')

console.log(accum('ZpglnRxqenU'));
