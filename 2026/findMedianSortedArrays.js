// FMP Track 2026
// Day -/366
// https://leetcode.com/problems/median-of-two-sorted-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b)
    return merged.length % 2 === 0
        ? (merged[merged.length /2] + merged[merged.length / 2 - 1]) / 2
        : merged[Math.floor(merged.length / 2)];
};



findMedianSortedArrays([1, 3], [2]);

console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0