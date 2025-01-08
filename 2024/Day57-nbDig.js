// FMP Track Coding Chalenge 2024
// Day 57/366
// https://www.codewars.com/kata/566fc12495810954b1000030/

function nbDig(n, d) {
    // your code
    let findDigit = []
    for (let index = 0; index <= n; index++) {
        let square = Math.pow(index, 2)
        if (new RegExp(d, 'g').test(square)) {
            findDigit.push(square)
        }
    }
    findDigit = findDigit.join('').match(new RegExp(d, 'g')).join('').length
    return findDigit
}

console.log(
    nbDig(
        5750, 0
    )
);