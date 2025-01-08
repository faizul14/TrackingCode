// FMP Track Coding Chalenge 2024
// Day 63/366
// https://www.codewars.com/kata/54ff0d1f355cfd20e60001fc/

function factorial(n) {
    // Calculate the factorial here
    if (n > 12 || n < 0) {
        throw RangeError('invalid')
    }
    if (n <= 1) {
        return 1
    }
    let result = n
    n--
    while (n > 0) {
        result *= n
        n--
    }
    return result
}

// get from discussion, this solution use recursive, need deep lear this solution
function factorial(n) {
    if (n < 0 || n > 12)
        throw new RangeError();
    return n <= 1 ? 1 : n * factorial(n - 1);
}

console.log(
    factorial(3)
);
