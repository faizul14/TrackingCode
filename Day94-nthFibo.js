// FMP Track Coding Chalenge 2024
// Day 94/366
// https://www.codewars.com/kata/522551eee9abb932420004a0/

function nthFibo(n) {
    // Return the n-th number in the Fibonacci Sequence
    if (n < 4) {
        return n === 1 ? 0 : 1
    }
    const arrFibonanci = [0, 1, 1]
    while (arrFibonanci.length < n) {
        const nextFibo = arrFibonanci[arrFibonanci.length - 1] + arrFibonanci[arrFibonanci.length - 2]
        arrFibonanci.push(nextFibo)
    }
    return arrFibonanci[n - 1]
}


// i got this solution from discussion, and very out of mind
const nthFibo = n => Math.round(((1 + 5 ** .5) / 2) ** --n / 5 ** .5);


console.log(
    nthFibo(5)
);
