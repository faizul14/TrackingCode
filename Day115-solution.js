// FMP Track Coding Chalenge 2024
// Day 115/366
// https://www.codewars.com/kata/51675d17e0c1bed195000001/

function solution(digits) {
    let maxSquence = 0

    for (let i = 0; i <= digits.length - 5; i++) {
        const currentSquence = +digits.substring(i, i + 5)
        maxSquence = currentSquence > maxSquence ? currentSquence : maxSquence
    }
    return maxSquence
}


console.log( // 98765
    solution('1234567898765')
);

console.log(
    '12345'.substring(1, 3)
);

