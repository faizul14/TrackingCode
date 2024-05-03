// FMP Track Coding Chalenge 2024
// Day 42/366
// https://www.codewars.com/kata/56b58d11e3a3a7cade000792/

const isPrime = z => {
    if (z === 1) {
        return false
    }
    const primeRight = z > 20 ? Math.ceil(z / 2) : z
    for (let i = 2; i < primeRight; i++) {
        if (z % i === 0) {
            return false

        }
    }
    return true
}

// good insight from discusion
// function isPrime(x) {
//     let start = 2
//     while (start <= Math.sqrt(x)) {
//         console.log(
//             start
//         );
//         if (x % start++ < 1) return false
//     }
//     return x > 1
// }

const sexyPrime = (x, y) => Math.abs(x - y) === 6 ? isPrime(x) && isPrime(y) ? true : false : false

console.log(
    sexyPrime(
        11, 5
    )
);
