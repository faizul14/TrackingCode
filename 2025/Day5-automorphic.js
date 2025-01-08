// FMP Track Coding Chalenge 2025
// Day 5/365
// https://www.codewars.com/kata/5a58d889880385c2f40000aa/

function automorphic(n) {
    // return "Not!!" // your code here
    const resultSquence = Math.pow(n, 2).toString()
    const check = resultSquence.match(new RegExp(`${n.toString()}$`, 'g'))
    return check === null ? "Not!!" : "Automorphic"
}

// I have found another road and very simple with build string method.
// const automorphic = n => String(Math.pow(n, 2)).endsWith(String(n)) ? "Automorphic" : "Not!!"

console.log(
    automorphic(25),
    automorphic(5)
);
