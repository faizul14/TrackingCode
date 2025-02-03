// FMP Track Coding Chalenge 2025
// Day 17/365
// https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/?envType=daily-question&envId=2025-02-03

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    if ([...new Set(nums)].length === 1) return 1

    let si = {
        count: 0,
        stack: []
    }
    let sd = {
        count: 0,
        stack: []
    }


    for (let i = 0; i < nums.length; i++) {
        si.stack.push(nums[i] < nums[i + 1])
        sd.stack.push(nums[i] > nums[i + 1])

        if (si.stack[i]) {
            si.count += si.stack[i] && si.stack[i - 1] ? 2 : 1
        }
        if (sd.stack[i]) sd.count += sd.stack[i] && sd.stack[i - 1] ? 2 : 1
    }

    return Math.max(...[si.count, sd.count])

    // LOL
    // if (nums.length === 0) return 0;

    // let maxLen = 1;
    // let incLen = 1;
    // let decLen = 1;

    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > nums[i - 1]) {
    //         incLen++;
    //         decLen = 1;
    //     } else if (nums[i] < nums[i - 1]) {
    //         decLen++;
    //         incLen = 1;
    //     } else {
    //         decLen = 1;
    //         incLen = 1;
    //     }
    //     maxLen = Math.max(maxLen, incLen, decLen)
    // }
    // return maxLen;
};

console.log(
    // longestMonotonicSubarray([1, 4, 3, 3, 2]),
    // longestMonotonicSubarray([3, 3, 3, 3, 3]),
    // longestMonotonicSubarray([3, 2, 1]),
    longestMonotonicSubarray([1, 2]),
);
