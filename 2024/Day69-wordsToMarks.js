// FMP Track Coding Chalenge 2024
// Day 69/366
// https://www.codewars.com/kata/59706036f6e5d1e22d000016/

// function wordsToMarks(string) {
//     //your code here
//     let accValueOfWords = 0
//     let idx = 0
//     while(idx < string.length){
//         accValueOfWords += (string[idx].charCodeAt() - 96)
//         idx++
//     }
//     return accValueOfWords
// }

const wordsToMarks = string => string
    .split('')
    .reduce((acc, el) => acc += (el.charCodeAt() - 96), 0)

console.log(
    wordsToMarks('attitude')
);
