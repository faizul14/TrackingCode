// FMP Track Coding Chalenge 2025
// Day 28/365
// https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function (nums) {
//     const aswProd = []

//     for (let i = 0; i < nums.length; i++) {
//         let sum = 1
//         for (let j = 0; j < nums.length; j++) {
//             if (i !== j) {
//                 sum *= nums[j]
//             }
//         }
//         sum = sum === -0 ? 0 : sum
//         aswProd.push(sum)
//     }
//     return aswProd
// };

// KOMPLEKSITAS WAKTU RUNNING NYA O(N) 
var productExceptSelf = function (nums) {
    const n = nums.length
    const result = new Array(n)

    result[0] = 1
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1]
    }
    result

    let rightProduct = 1
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct
        rightProduct *= nums[i]
    }

    result
};

console.log(
    productExceptSelf([1, 2, 3, 4]),
    // productExceptSelf([-1, 1, 0, -3, 3]),
    // productExceptSelf([1, -1]),
);
