// FMP Track Coding Chalenge 2025
// Day 52/365
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    // return new RegExp(p, 'g').test(s)
    const match = s.match(new RegExp(p, 'g'))
    match
    return match !== null ? s === match[0] : false
};


console.log(
    // isMatch('aa', '.*')
    isMatch('ab', ".*c")
);
