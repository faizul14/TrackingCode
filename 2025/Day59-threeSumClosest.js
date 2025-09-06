// FMP Track Coding Chalenge 2025
// Day 59/365
// https://leetcode.com/problems/3sum-closest/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b); // urutkan array
    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];

            // cek apakah lebih dekat dibanding hasil sebelumnya
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // kalau sama persis, langsung return
                return currentSum;
            }
        }
    }

    return closestSum;
};


console.log(
    threeSumClosest([-1, 2, 1, -4], 1)
);
