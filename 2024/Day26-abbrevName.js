// FMP Track Coding Chalenge 2024
// Day 26/366
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/

const abbrevName = (name) => name.split(' ').map(el => el[0]).join('.').toUpperCase()

console.log(
    abbrevName('Patrick Feenan')
);
