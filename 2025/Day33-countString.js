// FMP Track Coding Chalenge 2025
// Day 33/365
// https://www.codewars.com/kata/52efefcbcdf57161d4000091/

function count(string) {
    // TODO
    const result = {}
    string
        .split('')
        .map(el => result[el] === undefined ? (result[el] = 1) : (result[el] += 1))
    return result;
}


console.log(
    count('ABC')
);
