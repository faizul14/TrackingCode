// FMP Track Coding Chalenge 2025
// Day 51/365
// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const fmp = s.trim()
    let result = ''
    let isNegative = false
    for (let i = 0; i < fmp.length; i++) {
        if (i === 0 && fmp[i] === '-') {
            isNegative = true
            continue
        }
        if (i === 0 && fmp[i] === '+') continue
        if (/[^0-9]/g.test(fmp[i])) {
            break
        }
        result = result.concat(fmp[i])
    }
    const MAX_TRESHOLD = Math.pow(2, 31) - 1
    const MIN_TRESHOLD = -Math.pow(2, 31)
    result = isNegative ? (Math.abs(result) * -1) : Math.abs(result)
    result = result > MAX_TRESHOLD ? MAX_TRESHOLD : result
    result = result < MIN_TRESHOLD ? MIN_TRESHOLD : result
    return result
};



console.log(
    myAtoi(' -1337c0d3'),
    myAtoi('-042'),
    myAtoi('1-1'),
    myAtoi('words and 987')
);

console.log(
    Number('v'),
    /[^0-9]/g.test('4')
);

