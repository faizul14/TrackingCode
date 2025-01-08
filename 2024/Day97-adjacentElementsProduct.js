// FMP Track Coding Chalenge 2024
// Day 97/366
// https://www.codewars.com/kata/5a4138acf28b82aa43000117/

function adjacentElementsProduct(array) {
    let result = array[0] * array[1]
    for (let i = 1; i < array.length - 1; i++) {
        const times = array[i] * array[i + 1]
        result = times > result ? times : result
    }
    return result
}


console.log(
    // adjacentElementsProduct([5, 1, 2, 3, 1, 4])
    adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])
);
