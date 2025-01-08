// FMP Track Coding Chalenge 2024
// Day 50/366
// https://www.codewars.com/kata/5aba780a6a176b029800041c/

function maxMultiple(divisor, bound) {
    //your code here
    while (bound > 0) {
        if (bound % divisor === 0) {
            return bound
        }
        bound--
    }
}

// i feel stupid if use this code,  cooz i dont think it max LOL WKWKWKWK
// const maxMultiple = (divisor, bound) => bound - bound % divisor

// const maxMultiple = (divisor, bound) => Math.floor(bound / divisor) * divisor




console.log(
    maxMultiple(
        37, 200
    ),
    maxMultiple(
        2, 7
    )
);
