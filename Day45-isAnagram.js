// FMP Track Coding Chalenge 2024
// Day 45/366
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/

// write the function isAnagram
const isAnagram = (test, original) => {
    test = test.toLowerCase().split('').sort().join('')
    original = original.toLowerCase().split('').sort().join('')
    return test === original
};

console.log(
    isAnagram("Foefet", "toffee")
);

