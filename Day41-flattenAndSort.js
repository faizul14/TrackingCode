// FMP Track Coding Chalenge 2024
// Day 42/366
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/

// function flattenAndSort(array) {
//     // Good luck, brave code warrior!
//     const resultArr = []
//     array.map((el) => el.length !== 0 ? resultArr.push(...el) : _)
//     return resultArr.sort((a, b) => a - b);
// }


// coll, find from discussion
const flattenAndSort = array => array.flat().sort((a, b) => a - b)

console.log(
    flattenAndSort(
        [[1, 3, 5], [100], [2, 4, 6]]
    )
);