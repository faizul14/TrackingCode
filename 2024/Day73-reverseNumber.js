// FMP Track Coding Chalenge 2024
// Day 73/366
// https://www.codewars.com/kata/555bfd6f9f9f52680f0000c5/

const reverseNumber = (n) => {
    const magicNumber = +n
        .toString()
        .split('')
        .reverse()
        .join('')
        .replace(/[^0-9]/g, '')
    return n > 0 ? magicNumber : -magicNumber
}

console.log(
    reverseNumber(-123)
);