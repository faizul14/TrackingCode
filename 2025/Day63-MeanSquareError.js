// FMP Track Coding Chalenge 2025
// Day 63/365
// https://www.codewars.com/kata/51edd51599a189fe7f000015/

const solution = function (firstArray, secondArray) {
    // const arrSquareOfDiferent = []

    // for (let i in firstArray) {
    //     const dif = Math.abs(firstArray[i] - secondArray[i])
    //     const squareOfDif = Math.pow(dif, 2)
    //     arrSquareOfDiferent.push(squareOfDif)
    // }

    // return arrSquareOfDiferent.reduce((acc, el) => acc += el) / arrSquareOfDiferent.length

    let result = 0

    for (let i in firstArray) {
        const dif = Math.abs(firstArray[i] - secondArray[i])
        const squareOfDif = Math.pow(dif, 2)
        result += squareOfDif
    }
    return result / firstArray.length
}


console.log(
    solution([1, 2, 3], [4, 5, 6])
);

console.log(Math.pow(3, 2));

