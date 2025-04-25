// FMP Track Coding Chalenge 2025
// Day 31/365
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/

function towerBuilder(nFloors) {
    // build here
    const result = []
    if (nFloors === 1) return ['*']
    let stackStars = 1
    for (let i = 1; i <= nFloors; i++) {
        const tower = `${' '.repeat(nFloors - i)}${'*'.repeat(i + (i === 1 ? 0 : stackStars))}${' '.repeat(nFloors - i)}`
        stackStars += i === 1 ? 0 : 1
        result.push(tower)
    }
    return result
}

console.log(
    towerBuilder(1)
);
