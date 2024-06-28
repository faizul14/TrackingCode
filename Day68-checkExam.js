// FMP Track Coding Chalenge 2024
// Day 68/366
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/

function checkExam(array1, array2) {
    // good luck
    let score = 0
    let idx = 0
    while (idx < array1.length) {
        if (array2[idx] === "") {
            idx++
            continue
        }
        score += array1[idx] === array2[idx] ? 4 : -1
        idx++
    }
    return score > 0 ? score : 0
}

const checkExam = (array1, array2) => {
    const score = array2.
        reduce((acc, el, idx, _) => acc += el === "" ? 0 : array1[idx] === el ? 4 : -1, 0)
    return score > 0 ? score : 0
}

const checkExam = (array1, array2) => (score = array2.reduce((acc, el, idx, _) => acc += el === "" ? 0 : array1[idx] === el ? 4 : -1, 0)) > 0 ? score : 0

console.log(
    checkExam(
        ["a", "a", "b", "b"], ["a", "c", "b", "d"]
    )
);j
