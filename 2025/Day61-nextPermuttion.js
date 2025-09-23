// FMP Track Coding Chalenge 2025
// Day 61/365 => Need fixing later.
// https://leetcode.com/problems/next-permutation/description/ 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    nums = nums.sort((a, b) => a - b)
    const pmt = permutation(nums).map(el => el.join(''))
    const index = pmt.indexOf(nums.join(''))
    pmt
    nums
    index

    return index === (pmt.length - 1) ? pmt[0].split('').map(el => +el) : pmt[index + 1].split('').map(el => +el)
};


function permutation(arr) {
    let result = []

    const backtracking = (value, tempArr) => {
        if (tempArr.length === 0) {
            result.push(value)
            return
        }

        for (let i = 0; i < tempArr.length; i++) {
            const newValue = [...value, tempArr[i]]
            const newTempArr = [...tempArr.slice(0, i), ...tempArr.slice(i + 1)]
            backtracking(newValue, newTempArr)
        }
    }

    backtracking([], arr)
    return result
}

// this from ai for comparations
// var nextPermutation = function (nums) {
//     let i = nums.length - 2;
//     while (i >= 0 && nums[i] >= nums[i + 1]) {
//         i--;
//     }
//     if (i >= 0) {
//         let j = nums.length - 1;
//         while (nums[j] <= nums[i]) {
//             j--;
//         }
//         [nums[i], nums[j]] = [nums[j], nums[i]];
//     }
//     reverse(nums, i + 1);
//     return nums;
// };

// function reverse(arr, start) {
//     let end = arr.length - 1;
//     while (start < end) {
//         [arr[start], arr[end]] = [arr[end], arr[start]];
//         start++;
//         end--;
//     }
// }



// console.log(
//     // permutation([1, 2, 3]),
//     permutation([1, 1, 5])
// );


// console.log(
//     [1, 3, 4, 5].indexOf(5)
// );

console.log(
    // nextPermutation([1, 2, 3])
    nextPermutation([1, 1, 5])
);

