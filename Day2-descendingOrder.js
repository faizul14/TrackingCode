// FMP Track Coding Chalenge 2024
// Day 2/366
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = (n) => Math.abs(n.toString().split('').sort().reverse().join(''))

console.log(descendingOrder(123456789));
