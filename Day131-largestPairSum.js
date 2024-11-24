// FMP Track Coding Chalenge 2024
// Day 131/366
// https://www.codewars.com/kata/556196a6091a7e7f58000018/

function largestPairSum(numbers) {
    //TODO: Write your Code here
    numbers.sort((a,b) => b - a)
    numbers
    return Math.max(...numbers) + numbers[1]
}

console.log(
    largestPairSum([10, 14, 2, 23, 19])
);
