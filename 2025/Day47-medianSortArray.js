// FMP Track Coding Chalenge 2025
// Day 47/365
// https://leetcode.com/problems/median-of-two-sorted-arrays/ s

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const list = [...nums1, ...nums2].sort((a, b) => a - b);
    const median = Math.ceil(list.length / 2)
    const result = list.length % 2 === 1 ? (list[median - 1]) : ((list[median - 1] + list[median]) / 2)
    return result
};