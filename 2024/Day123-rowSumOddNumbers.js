// FMP Track Coding Chalenge 2024
// Day 123/366
// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/

function rowSumOddNumbers(n) {
    // TODO
    let firstOdd = Math.pow(n, 2) - (n - 1)
    const result = []
    while(result.length !== n){
        if(firstOdd % 2 === 1){
            result.push(firstOdd)
        }
        firstOdd++
    }
    return result.reduce((acc, el) => acc += el)
}

// This solution get from insight, and mindblowing LOL
const rowSumOddNumbers = n => Math.pow(n , 3)

console.log(
    rowSumOddNumbers(5)
);

console.log(
    Math.pow(42, 2) - 43
);
