// FMP Track Coding Chalenge 2024
// Day 50/366
// https://www.codewars.com/kata/5b180e9fedaa564a7000009a/

// function solve(s) {
//     //..
//     const lowerCaseLength = s.match(/[a-z]/g) || []
//     const upperCaseLength = s.match(/[A-Z]/g) || []
//     const toLowerIsRight = lowerCaseLength.length > upperCaseLength.length || lowerCaseLength.length === upperCaseLength.length
//     return toLowerIsRight ? s.toLowerCase() : s.toUpperCase()
// }

// hahaha i find a googd logic one liner, code above this LOL WKWKWK
const solve = s => s.replace(/[A-Z]/g, '').length < (s.length / 2) ? s.toUpperCase() : s.toLowerCase()

console.log(
    solve(
        'cODE'
    )
);

