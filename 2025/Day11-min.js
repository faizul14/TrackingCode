// FMP Track Coding Chalenge 2025
// Day 11/365
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/

function min(arr, toReturn) {
    const min = {
        value: Math.min(...arr),
        idx: arr.indexOf(Math.min(...arr))
    }

    return toReturn === "value" ? min.value : min.idx
}

console.log(
    min([1, 2, 3, 4, 5], 'value')
);
