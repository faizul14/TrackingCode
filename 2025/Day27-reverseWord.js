// FMP Track Coding Chalenge 2025
// Day 27/365
// https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const result = []
    s.trim().split(' ').reverse().map((el, idx, _) => {
        if (el !== '') {
            result.push(el)
        }
    })
    return result.join(' ')
};

console.log(
    // reverseWords('  hello   world  ')
    reverseWords('a good   example'),
);
