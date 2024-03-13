// FMP Track Coding Chalenge 2024
// Day 17/366
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/

// function isPangram(string) {
//     //...
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//     let result = true
//     for (let i = 0; i < alphabet.length; i++) {
//         if (!string.toLowerCase().includes(alphabet[i])) {
//             result = false
//             break
//         }
//     }
//     return result
// }

const isPangram = string => 'abcdefghijklmnopqrstuvwxyz'.split('').map(alp => string.toLowerCase().includes(alp)).includes(false) ? false : true

console.log(isPangram(
    'The quick brown fox jumps over the lazy dog.'
)); //true

console.log(isPangram('This is not a pangram.'));
