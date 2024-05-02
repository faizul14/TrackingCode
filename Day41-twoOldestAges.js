// FMP Track Coding Chalenge 2024
// Day 41/366
// https://www.codewars.com/kata/511f11d355fe575d2c000001/

// function twoOldestAges(ages) {
//     ages = ages.sort((a, b) => a - b)
//     ages
//     return [ages[ages.length - 2], ages[ages.length - 1]]
// }

const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)

console.log(
    twoOldestAges(
        [1, 5, 87, 45, 8, 8]
    )
);