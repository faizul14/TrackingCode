// FMP Track Coding Chalenge 2024
// Day 78/366
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08/
multiplicationTable = function (size) {
    // insert code here
    const result = []

    for (let i = 1; i <= size; i++) {
        const elementArray = []
        for (let j = 1; j <= size; j++) {
            elementArray.push(i * j)
        }
        result.push(elementArray)
    }
    return result
}

console.log(
    multiplicationTable(3)
);
