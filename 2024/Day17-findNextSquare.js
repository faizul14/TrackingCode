// FMP Track Coding Chalenge 2024
// Day 17/366
// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/

// function findNextSquare(sq) {
//     // Return the next square if sq is a perfect square, -1 otherwise
//     if (/[^0-9]/g.test(Math.sqrt(sq))) {
//         return -1
//     }
//     return Math.pow((Math.sqrt(sq) + 1), 2)
// }

// const findNextSquare = sq => /[^0-9]/g.test(Math.sqrt(sq)) ? -1 : Math.pow((Math.sqrt(sq) + 1), 2)

// bst practice menurut saya
const findNextSquare = sq => {
    const squareRoot = Math.sqrt(sq)
    return /[^0-9]/g.test(squareRoot) ? -1 : Math.pow(squareRoot + 1, 2)
}

console.log(findNextSquare(121)); //144
