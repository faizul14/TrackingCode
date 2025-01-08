// FMP Track Coding Chalenge 2024
// Day 77/366
// https://www.codewars.com/kata/550498447451fbbd7600041c/

function comp(array1, array2) {
    //your code here
    if ([array2, array1].includes(null)) { return false }
    for (let el of array2) {
        const sqrt = Math.sqrt(el)
        if (!array1.includes(sqrt)) { return false }
        array1.splice(array1.indexOf(sqrt), 1)
    }
    return true
}

const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// const a = [2, 2, 3]
// const b = [4, 9, 9]

console.log(
    comp(a, b)
);