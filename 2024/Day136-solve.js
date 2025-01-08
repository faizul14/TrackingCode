// FMP Track Coding Chalenge 2024
// Day 136/366
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/

const checkAlphabet = n => {
    let count = 0
    for (let i in n) {
        if ((Number(i) + 1) === (n[i].charCodeAt() - 96)) {
            count++
        }
    }
    return count
}

function solve(arr) {
    //code
    const result = []
    for (let word of arr) {
        const countAlpTruePosition = checkAlphabet(word.toLowerCase())
        result.push(countAlpTruePosition)
    }
    return result
};


console.log(
    solve(["abode", "ABc", "xyzD"]),
    solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])
);
