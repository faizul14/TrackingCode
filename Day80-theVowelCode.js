// FMP Track Coding Chalenge 2024
// Day 80/366
// https://www.codewars.com/kata/53697be005f803751e0015aa/


const vowelPattern = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}

function encode(string) {
    return string.replace(/[aeiou]/g, y => vowelPattern[y])
}

function decode(string) {
    return string.replace(/[1-5]/g, y => Object.keys(vowelPattern).find(key => vowelPattern[key] === +y))
}

console.log(
    encode('hello')
);
console.log(
    decode('h22l4')
);
