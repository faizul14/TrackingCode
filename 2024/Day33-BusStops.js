// FMP Track Coding Chalenge 2024
// Day 33/366
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/

// var number = function (busStops) {
//     // Good Luck!
//     let result = 0
//     for (let i = 0; i < busStops.length; i++) {
//         busStops[i] = busStops[i][0] - busStops[i][1]
//     }

//     for (let i = 0; i < busStops.length; i++) {
//         result += busStops[i]
//     }
//     return result
// }

// const number = busStops => busStops.map((_, index, array) => array[index][0] - array[index][1]).reduce((acc, el) => acc += el, 0)

// this solution is beautiful code, and i like it
const number = busStops => busStops.reduce((acc, [naik, turun]) => acc += (naik - turun), 0)


console.log(
    number([[10, 0], [3, 5], [5, 8]])
);


