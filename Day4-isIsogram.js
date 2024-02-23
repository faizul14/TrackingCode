// FMP Track Coding Chalenge 2024
// Day 4/366
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// function isIsogram([...str]) {
//     //...
//     let result = true

//     if (str.length <= 0) {
//         return true
//     }

//     if (str.length === 1) {
//         if (str[0] === " ") {
//             return false
//         }
//     }

//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < str.length; j++) {
//             if (str[i].toLocaleLowerCase() === str[j].toLocaleLowerCase() && i !== j) {
//                 result = false
//                 break
//             }
//         }
//         if (!result) {
//             break
//         }
//     }
//     return result
// }

const isIsogram = (str) => new Set(str.toUpperCase()).size == str.length;

console.log(isIsogram(""));
