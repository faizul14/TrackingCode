// FMP Track Coding Chalenge 2025
// Day 58/365
// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]

    strs.sort((a, b) => a.length - b.length)
    let result = strs[0].split('')
    strs.shift()
    let iterasi = 0;
    while (result.length > 0) {
        const pref = result.join('')
        const regex = new RegExp(`^${pref}`)
        const check = regex.test(strs[iterasi])
        if (!check) {
            result.pop()
            continue
        }

        iterasi++
        if (iterasi >= strs.length) return result.join('')
    }
    return ""
};


console.log(
    longestCommonPrefix(["flower", "flow", "flight"])
);
