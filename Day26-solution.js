// FMP Track Coding Chalenge 2024
// Day 26/366
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/

// function solution(str, ending) {
//     // TODO: complete    
//     console.log(str + " " + ending);

//     // const regex = new RegExp(str[str.length - 1], 'gi')
//     const helperStr = str.split('').splice(-ending.length).join('')
//     return helperStr === ending || ending === ''
// }

function solution(str, ending) {
    // TODO: complete    
    const helperStr = str.split('').splice(-ending.length).join('')
    return helperStr === ending || ending === ''
}

console.log(
    solution('abcde', 'cde')
);

console.log(
    solution('samurai', 'ai')
);

console.log(
    solution('abc', '')
);

console.log(
    solution('abcde', 'abc')
);

