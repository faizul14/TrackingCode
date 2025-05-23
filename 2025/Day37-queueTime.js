// FMP Track Coding Chalenge 2025
// Day 37/365
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86/

function queueTime(customers, n) {
    //TODO
    if (customers.length < 1) return 0
    if (n === 1) return (customers.reduce((acc, el) => acc += el, 0))

    let result = new Array(n).fill(0)
    for (let cs of customers) {
        const idx = result.indexOf(Math.min(...result))
        result[idx] += cs
    }
    return Math.max(...result)
}

console.log(
    queueTime([], 1),
    queueTime([1, 2, 3, 4], 1),
    queueTime([2, 2, 3, 3, 4, 4], 2),
    queueTime([1, 2, 3, 4, 5], 100),
);

console.log(
    [1, 2, 3, 4].length
);

