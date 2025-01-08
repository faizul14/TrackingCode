// FMP Track Coding Chalenge 2024
// Day 10/366
// https://www.codewars.com/kata/514b92a657cdc65150000006

// function solution(number) {
//     const arr = []
//     for (let i = 1; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             arr.push(i)
//         }
//     }
//     return arr.reduce((acc, el) => acc += el, 0)
// }

function solution(number) {
    let result = 0
    for (let i = 1; i < number; i++) {
        result += i % 3 === 0 || i % 5 === 0 ? i : 0
    }
    return result
}

console.log(solution(10));
