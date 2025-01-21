// FMP Track Coding Chalenge 2025
// Day 13/365
// https://www.codewars.com/kata/59a96d71dbe3b06c0200009c/

function generateShape(integer) {
    let result = ''
    let state = 1
    while (state <= integer) {
        const shape = '+'.repeat(integer)
        result = result.concat(`${shape}${integer === state ? '' : '\n'}`)
        // break
        state++
    }
    return result
}

console.log(
    generateShape(8)
);
