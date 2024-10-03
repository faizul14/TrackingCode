// FMP Track Coding Chalenge 2024
// Day 110/366
// https://www.codewars.com/kata/5aff237c578a14752d0035ae/

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    // your code
    let age = [age1, age2, age3, age4, age5, age6, age7, age8]
        .map(el => Math.pow(el, 2))
        .reduce((acc, el) => acc += el, 0)
    const result = Math.floor(Math.sqrt(age) / 2)

    return result
}

console.log(
    predictAge(65, 60, 75, 55, 60, 63, 64, 45)
);
