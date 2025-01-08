// FMP Track Coding Chalenge 2024
// Day 16/366
// https://www.codewars.com/kata/55c45be3b2079eccff00010f/

// function order(words) {
//     // ...

//     if (words === '') {
//         return ''
//     }
//     words = words.split(' ')
//     const num = words.map(a => a.match(/\d/g).join()).sort()
//     const result = []

//     for (let i = 0; i < num.length; i++) {
//         for (let j = 0; j < words.length; j++) {
//             if (words[j].includes(num[i])) {
//                 result.push(words[j])
//             }
//         }
//     }
//     return result.join(' ')
// }

// insight baru from diskusi
const order = words => words.split(' ').sort((a, b) => a.match(/\d/g) - b.match(/\d/g)).join(' ')

console.log(order('is2 Thi1s T4est 3a'));
