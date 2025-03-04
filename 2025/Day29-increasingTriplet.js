// FMP Track Coding Chalenge 2025
// Day 29/365 => i am stuck here in a lot of time (shit)
// https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let [first, second, third] = [false, false, false]
    let stack = nums[0]
    let stackDic = new Set()
    stack


    for (let i = 1; i < nums.length; i++) {
        i
        stack
        if (stack < nums[i] && !first) {
            i
            first = true
            stackDic.add(stack)
            stack
            stack = nums[i]
            stack
            continue
        }

        stack
        console.log(nums[i]);
        
        if (stack < nums[i] && first && !second) {
            console.log(nums[i]);
            i
            second = true
            stack
            stackDic.add(stack)
            stack
            stack = nums[i]
            continue
        }
        i
        stack
        // if (stack < nums[i] && second) {
        //     i
        //     third = true
        //     stack = nums[i]
        //     continue
        // }
        i
        if (!stackDic.has(nums[i])) {
            stack
            stack = nums[i]
            stack
        }
    }
    stackDic
    stack
    stack
    first
    second
    third
    return second &&  first
};


console.log(
    // increasingTriplet([1, 2, 3, 4, 5]),
    // increasingTriplet([5, 4, 3, 2, 1]),
    // increasingTriplet([2, 4, -2, -3]),
    // increasingTriplet([20, 100, 10, 12, 5, 13]),
    // increasingTriplet([1, 2, 1, 3]),
    increasingTriplet([6, 7, 1, 2])
);
