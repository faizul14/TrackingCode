// FMP Track Coding Chalenge 2024
// Day 46/366
// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/

// function reverseLetter(str) {
//     //coding and coding..
//     let result = ''
//     str = str
//         .replace(/[^a-zA-Z]/gi, '')
//         .split('')
//     for (let i = (str.length - 1); i >= 0; i--) {
//         result = result.concat(str[i])
//     }
//     return result
// }

// const reverseLetter = str => str.replace(/[^a-zA-Z]/gi, '').split('').reverse().join('')

// other logic, i got insight from discussion
const reverseLetter = str => str.match(/[a-zA-Z]/gi).reverse().join('')



console.log(
    reverseLetter(
        'ab23c'
    )
);
