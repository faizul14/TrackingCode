// FMP Track Coding Chalenge 2024
// Day 108/366
// https://www.codewars.com/kata/51b6249c4612257ac0000005/

// SOLUTION 1
const standart = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
standart

function solution(roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
    const formatToStandart = roman
        .split('')
        .map(el => standart[el])

    formatToStandart
        .map((el, idx, arr) => {
            const temp = arr[idx + 1] - arr[idx]
            return arr[idx] < arr[idx + 1] ? formatToStandart.splice(idx, 2, temp) : el
        })
        .reduce((acc, el) => acc += el)
    return formatToStandart.reduce((acc, el) => acc += el)
}

// SOLUTION 2
// this solution very clever, and liket it and mind blowing for me, i fell stupid LOL
const solution = roman => {
    var conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((acc, el) => acc += conversion[el], 0)
}

console.log(
    // solution('XXI')
    solution('XIX')

);