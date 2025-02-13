// FMP Track Coding Chalenge 2025
// Day 22/365
// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/

function sum(numbers) {
    if (numbers.length <= 0) return 0
    let result = 0

    for(let i of numbers){
        result += i
    }
    return result
}

const sum = (numbers) => numbers.length === 0 ? 0 : numbers.reduce((acc, el) => acc += el, 0)


console.log(
    sum([1, 5.2, 4, 0, -1]),
    // sum([]),
);
