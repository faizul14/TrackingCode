// FMP Track Coding Chalenge 2024
// Day 135/366
// https://www.codewars.com/kata/534d0a229345375d520006a0/


// function isPowerOfTwo(n) {
//     //.. should return true or false ..
//     return true
// }

// this solution very LOL
function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}


console.log(
    isPowerOfTwo(2048)
);

