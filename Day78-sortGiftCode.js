// FMP Track Coding Chalenge 2024
// Day 78/366
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3/

// function sortGiftCode(code) {
//     //TODO 
//     const result = code.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')
//     return result
// }

const sortGiftCode = code => code.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('')

// get insight from discussion
const sortGiftCode = code => code.split('').sort().join('')

console.log(
    sortGiftCode('pqksuvy')
);
