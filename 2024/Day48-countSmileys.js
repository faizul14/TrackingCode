// FMP Track Coding Chalenge 2024
// Day 48/366
// https://www.codewars.com/kata/583203e6eb35d7980400002a/

// function countSmileys(arr) {
//     let count = 0
//     const regex = new RegExp('[)D]', '')
//     const regex1 = new RegExp('[:;]')

//     for (let i = 0; i < arr.length; i++) {
//         if (regex.test(arr[i]) && arr[i].length <= 3 && regex1.test(arr[i])) {
//             count += /[_o]/.test(arr[i]) ? 0 : 1
//         }
//     }
//     return count;
// }

const countSmileys = arr => arr
    .map(el => /[)D]/.test(el) && el.length <= 3 && /[:;]/.test(el) ? el : 0)
    .reduce((acc, el) => acc += /[_o]/.test(el) || el === 0 ? 0 : 1, 0)

// Find inaight from discussion, this succes and i fell stupid mor, LOL
const countSmileys = arr => arr.filter(el => /^[:;][-~]?[)D]/.test(el)).length

console.log(
    countSmileys(
        // [':D', ':~)', ';~D', ':)']
        [":-)", ";~D", ":-D", ":_D"]
        // [';]', ':[', ';*', ':$', ';-D']
    )
);