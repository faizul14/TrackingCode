// FMP Track Coding Chalenge 2025
// Day 50/365
// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    const isNegative = x < 0;
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    const reversed = parseInt(reversedStr) * (isNegative ? -1 : 1);

    if (reversed < INT_MIN || reversed > INT_MAX) {
        return 0;
    }

    return reversed;
};


console.log(
    reverse(1534236469)
);
