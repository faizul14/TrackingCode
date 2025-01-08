// FMP Track Coding Chalenge 2025
// Day 4/365
// https://www.codewars.com/kata/5aa1bcda373c2eb596000112/

function maxTriSum(numbers) {
    //your code here
    const numSet = [... new Set(numbers)].sort((a, b) => b - a)
    return numSet.reduce((acc, el, idx, _) => acc += idx <= 2 ? el : 0, 0)
}

// i have found this solution from discus and i like it
function maxTriSum(numbers) {
    //your code here
    const [a, b, c, ...rest] = [... new Set(numbers)].sort((a, b) => b - a)
    return a + b + c
}


console.log(
    maxTriSum([3, 2, 6, 8, 2, 3]),
    maxTriSum([2, 9, 13, 10, 5, 2, 9, 5])
);
