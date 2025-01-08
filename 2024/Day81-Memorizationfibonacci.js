// FMP Track Coding Chalenge 2024
// Day 81/366
// https://www.codewars.com/kata/529adbf7533b761c560004e5/

// this kata we need learning, cause recursive very make head puyeengg LOL
function fibonacci(n, memo = {}) {
    if (n == 0 || n == 1) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(
    fibonacci(4)
);
