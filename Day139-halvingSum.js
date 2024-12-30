// FMP Track Coding Chalenge 2024
// Day 139/366
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d/

function halvingSum(n) {
    let sum = n
    let treshold = Math.floor(n / 2)
    treshold
    sum += treshold
    sum
    while (treshold > 1) {
        // break
        treshold = Math.floor(treshold / 2)
        treshold
        sum += treshold
        sum
    }

    return Math.floor(sum)
}


console.log(
    halvingSum(127)
);
