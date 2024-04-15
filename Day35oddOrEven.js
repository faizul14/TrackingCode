// FMP Track Coding Chalenge 2024
// Day 35/366
// https://www.codewars.com/kata/5949481f86420f59480000e7/

// function oddOrEven(array) {
//     //enter code here
//     let countElement = 0
//     for (let i = 0; i < array.length; i++) {
//         countElement += array[i]
//     }
//     return countElement % 2 === 0 ? 'even' : 'odd'
// }

const oddOrEven = array => array.reduce((acc, el) => acc += el, 0) % 2 === 0 ? 'even' : 'odd'

console.log(
    oddOrEven([0]),
    oddOrEven([1])
);
