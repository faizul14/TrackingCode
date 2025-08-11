// FMP Track Coding Chalenge 2025
// Day 53/365
// https://leetcode.com/problems/container-with-most-water/description/

/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function (height) {
//     let result = 0
//     let startMax = 0
//     let strIdx = 0
//     let endIdx = 0
//     let endMax = 0
//     const mid = Math.ceil(height.length / 2)
//     mid

//     for (let i = 0; i < height.length - 1; i++) {
//         // if (startMax < height[i]) {
//         startMax = height[i]
//         strIdx = i
//         // }

//         i

//         for (let j = i + 1; j < height.length; j++) {
//             j
//             // if (endMax < height[i]) {
//             endMax = height[j]
//             endIdx = j
//             // }
//             const check = (endIdx - strIdx) * (Math.min(startMax, endMax))
//             result = check > result ? check : result
//         }
//     }
//     startMax
//     strIdx

//     // for (let i = mid; i < height.length; i++) {
//     //     // if (endMax < height[i]) {
//     //         endMax = height[i]
//     //         endIdx = i
//     //     // }
//     //     const check = (endIdx - strIdx) * (Math.min(startMax, endMax))
//     //     result = check > result ? check : result
//     // }
//     endMax
//     endIdx

//     return result
// };

var maxArea = function (height) {
    let left = 0
    let right = height.length - 1
    let maxArea = 0

    while (left < right) {
        const width = right - left
        const h = Math.min(height[left], height[right])
        const area = width * h
        maxArea = maxArea < area ? area : maxArea

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxArea
};


console.log(
    // maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
    // maxArea([1, 2, 1])
    maxArea([1, 2, 3, 1000, 9])
);
