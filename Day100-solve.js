// FMP Track Coding Chalenge 2024
// Day 100/366
// https://www.codewars.com/kata/59c633e7dcc4053512000073/

function solve(s) {
    // const ekstrakString = s.replace(/[aiueo]/g, ' ').split(' ')
    const ekstrakString = s.split(/[aiueo]/)
    ekstrakString
    let highValue = 0
    for (let i of ekstrakString) {
        const sumValue = i.split('').reduce((acc, el) => acc += (el.charCodeAt() - 96), 0)
        highValue = highValue < sumValue ? sumValue : highValue
    }
    return highValue;
};


console.log(
    solve('chruschtschov')
);


