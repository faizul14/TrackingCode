// FMP Track Coding Chalenge 2025
// Day 25/365
// https://leetcode.com/problems/can-place-flowers/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            let leftEmpty = (i === 0 || flowerbed[i - 1] === 0)
            let rightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)

            if (leftEmpty && rightEmpty) {
                flowerbed[i] = 1
                count++

                if (count >= n) return true
            }
        }

    }
    return count >= n
};

console.log(
    canPlaceFlowers([1, 0, 0, 0, 0, 1], 2)
);
