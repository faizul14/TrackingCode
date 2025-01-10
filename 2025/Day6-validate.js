// FMP Track Coding Chalenge 2025
// Day 6/365
// https://www.codewars.com/kata/5418a1dd6d8216e18a0012b2/

function validate(n) {
    let moveN = String(n).split('')
    const len = moveN.length
    moveN = moveN.map((el, idx, _) => {
        let operationEl = +el
        if (len % 2 === 0 && idx % 2 === 0) {
            operationEl *= 2
            return operationEl > 9 ? (operationEl - 9) : operationEl
        }
        if (len % 2 === 1 && idx % 2 === 1) {
            operationEl *= 2
            return operationEl > 9 ? (operationEl - 9) : operationEl
        }

        return operationEl
    })
    const isValid = moveN.reduce((acc, el) => acc += el, 0) % 10
    return isValid ? false : true
}

console.log(
    validate(123),
    validate(2121)
);