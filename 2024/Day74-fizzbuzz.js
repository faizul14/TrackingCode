// FMP Track Coding Chalenge 2024
// Day 74/366
// https://www.codewars.com/kata/5300901726d12b80e8000498/

// Return an array
function fizzbuzz(n) {
    //
    const result = []
    for (let i = 1; i <= n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz")
            continue
        }
        if (i % 3 == 0) {
            result.push("Fizz")
            continue
        }
        if (i % 5 == 0) {
            result.push("Buzz")
            continue
        }
        result.push(i)
    }
    return result
}

console.log(
    fizzbuzz(3)
);

