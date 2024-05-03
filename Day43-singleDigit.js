// FMP Track Coding Chalenge 2024
// Day 43/366
// https://www.codewars.com/kata/5a7778790136a132a00000c1/

// const redudeBinary = value => value
//     .toString(2)
//     .split('')
//     .filter(a => a === '1')
//     .length

// function singleDigit(n) {
//     if (n <= 9) {
//         return n
//     }
//     let result = redudeBinary(n)
//     while (result > 9) { result = redudeBinary(result) }
//     return result
// }

// find new insight from discusion and its clever, i think still noob if see it, LOL
const singleDigit = n => {
    while (n > 9) {
        n = n.toString(2).replace(/0/g, '').length
    }
    return n
}

console.log(
    singleDigit(
        1234444123
    )
);
