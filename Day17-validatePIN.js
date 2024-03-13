// FMP Track Coding Chalenge 2024
// Day 17/366
// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/

const validatePIN = (pin) => /[^0-9]/g.test(pin) || !/[64]/g.test(pin.length) ? false : true
console.log(validatePIN('1234'));
