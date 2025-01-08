// FMP Track Coding Chalenge 2024
// Day 66/366
// https://www.codewars.com/kata/5663f5305102699bad000056/

// const findMax = data => Math.max(...data.map((el) => el.length))
// const findMin = data => Math.min(...data.map((el) => el.length))


// function mxdiflg(a1, a2) {
//     // your code
//     if (a1.length === 0 || a2.length === 0) {
//         return -1
//     }
//     const result = []
//     result.push(Math.abs(findMin(a1) - findMax(a2)))
//     result.push(Math.abs(findMin(a2) - findMax(a1)))

//     return Math.max(...result)
// }

const mxdiflg = (a1, a2) => {
    if (a1.length === 0 || a2.length === 0) { return -1 }
    a1 = a1.map(el => el.length)
    a2 = a2.map(el => el.length)
    a1
    a2
    return Math.max((Math.max(...a1) - Math.min(...a2)), (Math.max(...a2) - Math.min(...a1)))
}

const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
console.log(
    mxdiflg(
        s1, s2
    )
);

