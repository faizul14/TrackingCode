// FMP Track Coding Chalenge 2025
// Day 57/365
// https://leetcode.com/problems/contains-duplicate-iii

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
// var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= i + indexDiff && j < nums.length; j++) {
//             if (Math.abs(nums[i] - nums[j]) <= valueDiff) {
//                 return true;
//             }
//         }
//     }
//     return false;
// };


var containsNearbyAlmostDuplicate = function (nums, indexDiff, valueDiff) {
    if (valueDiff < 0) return false;

    const buckets = new Map();
    const bucketSize = valueDiff + 1;

    const getBucketId = (num) => {
        return Math.floor(num / bucketSize);
    };

    for (let i = 0; i < nums.length; i++) {
        const bucketId = getBucketId(nums[i]);

        if (buckets.has(bucketId)) return true;

        if (buckets.has(bucketId - 1) && Math.abs(nums[i] - buckets.get(bucketId - 1)) <= valueDiff) {
            return true;
        }
        if (buckets.has(bucketId + 1) && Math.abs(nums[i] - buckets.get(bucketId + 1)) <= valueDiff) {
            return true;
        }

        buckets.set(bucketId, nums[i]);

        if (i >= indexDiff) {
            const oldBucketId = getBucketId(nums[i - indexDiff]);
            buckets.delete(oldBucketId);
        }
    }

    return false;
};


console.log(
    // containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0),
    // containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)
    containsNearbyAlmostDuplicate([1, 2, 1, 1], 1, 0)
);
