// FMP Track Coding Chalenge 2024
// Day 77/366
// https://www.codewars.com/kata/5680781b6b7c2be860000036/

function vowelIndices(word) {
    //your code here
    const result = []
    const vowel = 'aiueoyAIUEOY'
    word.split('').map((el, idx, _) => {
        if (vowel.includes(el)) {
            result.push((idx + 1))
        }
    })
    return result
}

// this solution with regex
// function vowelIndices2(word) {
//     //your code here
//     const result = []
//     const vowel = 'aiueoyAIUEOY'
//     word.split('').map((el, idx, _) => {
//         if (/[aiueoy]/gi.test(el)) {
//             result.push((idx + 1))
//         }
//     })
//     return result
// }

console.log(
    vowelIndices(
        'apple'
    )
);
const start = performance.now()
vowelIndices('apple')
const end = performance.now()
console.log(`Time: ${end - start}`);

