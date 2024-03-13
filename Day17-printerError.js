// FMP Track Coding Chalenge 2024
// Day 17/366
// https://www.codewars.com/kata/56541980fa08ab47a0000040/

const printerError = (s) => `${(s.match(/[^a-m]/ig) || []).length}/${s.length}`

console.log(
    printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')
); //3
