// FMP Track Coding Chalenge 2024
// Day 22/366
// https://www.codewars.com/kata/526571aae218b8ee490006f4/

// const countBits = (n) => n.toString(2).split('').filter(a => a === '1').length

// get insight from discusion and very clever. 
const countBits = (n) => n.toString(2).split('0').join('').length


console.log(countBits(10));