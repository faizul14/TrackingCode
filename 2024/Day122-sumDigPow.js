// FMP Track Coding Chalenge 2024
// Day 122/366
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/

const check = n => {
    let tempCheck = `${n}`
    let accumulate = 0
    for (let i in tempCheck) {
        accumulate += Math.pow(Number(tempCheck[i]), (Number(i) + 1))
    }
    return accumulate === n
}

function sumDigPow(a, b) {
    // Your code here
    const result = []
    for (let i = a; i <= b; i++) {
        if (check(i)) {
            result.push(i)
        }
    }
    return result
}

console.log(
    sumDigPow(1, 100)
);
