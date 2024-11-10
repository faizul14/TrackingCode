// FMP Track Coding Chalenge 2024
// Day 120/366
// https://www.codewars.com/kata/59a8570b570190d313000037/

function sumCubes(n) {
    // ...
    let result = 0
    for (let i = 1; i <= n; i++) {
        result += Math.pow(i, 3)
    }
    return result
}

// this solution with recursive
function sumCubes(n) {
    if(n == 1) return 1
    return Math.pow(n, 3) + sumCubes(n - 1)
}


console.log(
    sumCubes(3)
);
