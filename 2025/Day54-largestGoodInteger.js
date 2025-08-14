// FMP Track Coding Chalenge 2025
// Day 54/365
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/description

/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
    for (let i = 9; i >= 0; i--) {
        let nums = num
        const isEqual = `${i}`.repeat(3)
        isEqual
        const matches = nums.match(new RegExp(isEqual, 'g')) || [];
        matches
        if (matches.length === 0) continue
        return matches[0]
    }
    return ""
};


console.log(
    // largestGoodInteger("6777133339")
    largestGoodInteger('000400059')
);


console.log(
    '6777133339'.replace(new RegExp('[^999]', 'g'), '')
);
