// FMP Track Coding Chalenge 2024
// Day 93/366
// https://www.codewars.com/kata/5a99a03e4a6b34bb3c000124/

const isPrima = n => {
    for (let i = n - 1; i > 1; i--) {
        if ((n % i) === 0) return false
    }
    return true
}

const calculatePrimorial = n => n.reduce((acc, el) => acc *= el)

function numPrimorial(n) {
    //your code here
    const primorialArr = []
    let bilangan = 2

    while (primorialArr.length < n) {
        if (isPrima(bilangan)) primorialArr.push(bilangan)
        bilangan++
    }
    return calculatePrimorial(primorialArr)
}

console.log(
    numPrimorial(3)
);
