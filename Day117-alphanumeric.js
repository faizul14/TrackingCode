// FMP Track Coding Chalenge 2024
// Day 117/366
// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/

function alphanumeric(string) {
    //your code here
    if(string.length == 0) return false
    const result = string.replace(/[a-zA-Z0-9]/g, '').length > 0 ? false : true
    return result
}

// This solution with one liner
const alphanumeric = string => string.length === 0 ? false : string.replace(/[a-zA-Z0-9]/g, '').length > 0 ? false : true

// This solution, I am need learn moree, get solution from insight
let alphanumeric = s => /^[a-z\d]+$/i.test(s);

console.log(
    alphanumeric("Hello_"),
    alphanumeric("Hello"),
    alphanumeric("     "),
    alphanumeric("hello world_"),
    alphanumeric("")
);
