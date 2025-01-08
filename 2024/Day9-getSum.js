// FMP Track Coding Chalenge 2024
// Day 9/366
// https://www.codewars.com/kata/55f2b110f61eb01779000053/

const getSum = (a, b) => {
    let result = 0
    let min = Math.min(a, b)
    let max = Math.max(a, b)
    for (let i = min; i <= max; i++) { result += i }
    return result
}

console.log(getSum(5, -1));
