// FMP Track Coding Chalenge 2024
// Day 68/366
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/

function minValue(values) {
    //your code here
    let result = ''
    values = values.sort((a, b) => a - b)
    let idx = 0
    while (idx < values.length) {
        if (!result.includes(values[idx])) {
            result = result.concat(values[idx])
        }
        idx++
    }
    return +result
}

const minValue = values => {
    let result = ''
    values
        .sort((a, b) => a - b)
        .map((el) => {
            if (!result.includes(el)) {
                result = result.concat(el)
            }
        })
    return +result
}

console.log(
    minValue(
        [1, 3, 1]
    )
);
