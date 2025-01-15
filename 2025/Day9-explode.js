// FMP Track Coding Chalenge 2025
// Day 9/365
// https://www.codewars.com/kata/585b1fafe08bae9988000314/

function explode(s) {
    let result = ''
    s = String(s).replace(/0/g, '')
    if (s.length <= 0) return ''
    for (let i of s) {
        const make = i.repeat(i)
        result = result.concat(make)
    }
    return result
}


console.log(
    explode(102269)
);
