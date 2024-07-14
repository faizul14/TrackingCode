// FMP Track Coding Chalenge 2024
// Day 72/366
// https://www.codewars.com/kata/5b39e3772ae7545f650000fc/

function removeDuplicateWords(s) {
    // your perfect code...
    const result = []
    s = s.split(' ')
    let idx = 0
    while (idx < s.length) {
        if (!result.includes(s[idx])) { result.push(s[idx]) }
        idx++
    }
    return result.join(' ')
}

// get this solution from discussion and good solve
const removeDuplicateWords = (s) => [...new Set(s.split(' '))].join(' ') 

console.log(
    removeDuplicateWords(
        'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
    )
);
