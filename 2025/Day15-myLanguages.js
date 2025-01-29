// FMP Track Coding Chalenge 2025
// Day 15/365
// https://www.codewars.com/kata/5b16490986b6d336c900007d/

function myLanguages(results) {
    let tempResult = Object.keys(results).filter(el => results[el] >= 60).sort((a, b) => results[b] - results[a])
    return tempResult
}

console.log(
    myLanguages(
        // { "Java": 10, "Ruby": 80, "Python": 65 },
        { "Hindi": 60, "Greek": 71, "Dutch": 93 }
    )
);
