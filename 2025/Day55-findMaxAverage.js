// FMP Track Coding Chalenge 2025
// Day 55/365
// https://leetcode.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let resultAvg = 0
    let tempSum = 0

    for (let i = 0; i < k; i++) {
        tempSum += nums[i]
    }
    resultAvg = tempSum / k

    for (let i = k; i < nums.length; i++) {
        tempSum += nums[i] - nums[i - k]
        resultAvg = Math.max(resultAvg, (tempSum / k))
    }

    return resultAvg
};

console.log(
    findMaxAverage([1, 12, -5, -6, 50, 3], 4)
);
