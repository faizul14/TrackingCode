// FMP Track Coding Chalenge 2025
// Day 64/365
// https://www.codewars.com/kata/52c31f8e6605bcc646000082/

function twoSum(numbers, target) {
    let result = []
    for (let i = 0; i < numbers.length; i++) {
        const tempData = target - numbers[i]
        const indexData = numbers.indexOf(tempData)
        if (indexData === i || indexData < 0) continue
        return [i, indexData]
    }
    return [0, 1];
}


console.log(
    twoSum([3, 2, 4], 6)
);

console.log(
    [3, 2, 4].indexOf(1)
);