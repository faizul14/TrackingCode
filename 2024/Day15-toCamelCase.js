// FMP Track Coding Chalenge 2024
// Day 15/366
// https://www.codewars.com/kata/517abf86da9663f1d2000003


// const toCamelCase = (str) => {
//     str = str.replace(/[\W_]/g, ' ').split(' ')
//     str = str.reduce((acc, el, index) => acc += index > 0 ? el.split('')[0].toUpperCase().concat(el.split('').filter((element, index) => index > 0).join('')) : el, '');
//     return str
// }

const toCamelCase = (str) => str.replace(/[\W_]/g, ' ').split(' ').reduce((acc, el, index) => acc += index > 0 ? el.split('')[0].toUpperCase().concat(el.split('').filter((element, index) => index > 0).join('')) : el, '');


console.log(toCamelCase('the_stealth_warrior'));
