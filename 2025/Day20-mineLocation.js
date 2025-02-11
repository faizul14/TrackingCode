// FMP Track Coding Chalenge 2025
// Day 20/365
// https://www.codewars.com/kata/528d9adf0e03778b9e00067e/

function mineLocation(field) {
    // return [-1, -1] // your code here
    let row = 0
    for (let i of field) {
        let check = i.includes(1)
        if (check) break
        row++
    }
    let column = field[row].indexOf(1)
    return [row, column]
}

console.log(
    mineLocation(
        [[1, 0], [0, 0]]
    ),
    mineLocation(
        [[0, 0, 0], [0, 0, 0], [0, 1, 0]]
    )
);
