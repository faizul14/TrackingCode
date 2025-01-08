// FMP Track Coding Chalenge 2024
// Day 85/366
// https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095/

// function maxDiff(list) {
//     if(list.length < 2){ return 0 }
//     const result = Math.max(... list) - Math.min(...list) 
//     return result
// };

const maxDiff = list => list.length ? Math.max(...list) - Math.min(...list) : 0


console.log( // expected output: 11
    maxDiff(
        [-0, 1, 2, -3, 4, 5, -6]
    )
);
