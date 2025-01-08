// FMP Track Coding Chalenge 2024
// Day 16/366
// https://www.codewars.com/kata/5552101f47fc5178b1000050/

function digPow(n, p) {
    // ...
    let count = 0
    n = n
        .toString()
        .split('')
        .map(a => parseInt(a))
    for (let i = 0; i < n.length; i++) {
        count += Math.pow(n[i], p + i)
    }
    return n.join('') > count ? -1 : (count / n.join('')).toString().match(/[^0-9]/g) === null ? count / n.join('') : -1
}

console.log(digPow(89, 1));
console.log(digPow(46288, 3));