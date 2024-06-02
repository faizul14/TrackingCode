// FMP Track Coding Chalenge 2024
// Day 57/366
// https://www.codewars.com/kata/52b757663a95b11b3d00062d/

// function toWeirdCase(string) {
//     //TODO
//     string = string.split(' ')
//     string = string.map(el => remakeToRule(el))
//     return string.join(' ')
// }

// const remakeToRule = string => string.split('').map((el, index, _) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')

const toWeirdCase = string => string.split(' ').map(el => remakeToRule(el)).join(' ')
const remakeToRule = string => string.split('').map((el, index, _) => index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')


console.log(
    toWeirdCase(
        'This is a test'
    )
);



