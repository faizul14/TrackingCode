// FMP Track Coding Chalenge 2025
// Day 35/365
// https://www.codewars.com/kata/55aa075506463dac6600010d/

const prefectSquare = (k) => {
    const s = Math.floor(Math.sqrt(k))
    return s * s === k
}

function listSquared(m, n) {
    // your code
    const result = []

    for (let i = m; i < n; i++) {
        let sum = 0
        for (let j = 1; j < Math.sqrt(i); j++) {
            if (i % j === 0) {
                let k = i / j
                sum += j ** 2
                if (j !== k) {
                    sum += k ** 2
                }
            }
        }
        if (prefectSquare(sum)) {
            sum = sum === 0 ? 1 : sum
            if(sum === 1) continue
            result.push([i, sum])
        }
    }
    return result
}

console.log(
    // listSquared(1, 250),
    listSquared(250, 500)
);

