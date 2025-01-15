// FMP Track Coding Chalenge 2025
// Day 10/365
// https://www.codewars.com/kata/57eba158e8ca2c8aba0002a0/

function last(x) {
    return x.split(' ').sort((a, b) => a[(a.length - 1)].charCodeAt() - b[b.length - 1].charCodeAt())
}
console.log(
    last('man i need a taxi up to ubud')
);

const test = 'man'

console.log(
    ['a', 'b', 'c', 'd'].sort((a, b) => b.charCodeAt() - a.charCodeAt()),
    test[test.length - 1].charCodeAt()
);
