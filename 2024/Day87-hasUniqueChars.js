// FMP Track Coding Chalenge 2024
// Day 87/366
// https://www.codewars.com/kata/553e8b195b853c6db4000048/

// function hasUniqueChars(str) {
//     // ...
//     const charCheck = [...new Set(str)]
//     const charOriginal = [...str]
//     charCheck
//     charOriginal

//     return charOriginal.join('') === charCheck.join('')
// }

const hasUniqueChars = str => [...new Set(str)].join('') === str

console.log(
    // hasUniqueChars('  nAa')
    // hasUniqueChars('abcdef')
    hasUniqueChars('aA')
);
