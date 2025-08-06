// FMP Track Coding Chalenge 2025
// Day 49/365
// https://leetcode.com/problems/zigzag-conversion/description/
// https://excalidraw.com/#json=peoABH563Iodl_zssPrrk,3tGVdbz0O6bQZLQBkL7gNQ

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) return s
    const result = new Array(numRows).fill("")
    let goingDown = true
    let currentRow = 1
    for (let i = 0; i < s.length; i++) {
        result[currentRow - 1] = result[currentRow - 1].concat(s[i])

        if (currentRow === result.length) {
            goingDown = false
        }
        if (currentRow === 1) {
            goingDown = true
        }
        currentRow += goingDown ? 1 : -1
    }
    return result.join('')
};


console.log(
    convert('PAYPALISHIRING', 3)
);
