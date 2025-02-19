// FMP Track Coding Chalenge 2025
// Day 24/365
// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    const maxCandies = Math.max(...candies)
    candies = candies.map(el => (el + extraCandies) >= maxCandies ? true : false)
    return candies
};

let candies = [2, 3, 5, 1, 3]
let extraCandies = 3

console.log(
    kidsWithCandies(
        candies, extraCandies
    )
);
