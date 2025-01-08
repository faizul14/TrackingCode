// FMP Track Coding Chalenge 2024
// Day 103/366
// https://www.codewars.com/kata/57ea70aa5500adfe8a000110/

const fold = array => {
    const result = []
    const arrayLength = array.length
    const lengthAfterFold = arrayLength % 2 === 0 ? arrayLength / 2 : Math.ceil(arrayLength / 2)
    const isEven = arrayLength % 2 === 0
    isEven
    lengthAfterFold
    for (let i = 0; i < lengthAfterFold; i++) {
        const sum = (i + 1) === lengthAfterFold && !isEven ? array[i] : array[i] + array[(arrayLength - 1) - i]
        result.push(sum)
    }
    return result
}

function foldArray(array, runs) {
    let result = array
    let index = 1
    while (index <= runs) {
        result = fold(result)
        index++
    }
    return result;
}


const input = [1, 2, 3, 4, 5, 6]
console.log(
    foldArray(input, 1)
);