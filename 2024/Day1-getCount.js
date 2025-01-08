// FMP Track Coding Chalenge 2024
// Day 1/366
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount([...str]) {

//     let result = 0
//     let vokal = 'aiueo'.split('')

//     str.filter(a => {
//         vokal.map(b => {
//             result += a == b ? 1 :0
//         })
//     })

//     return result;
// }

const getCount = ([...str]) => str.reduce((acc, el) => acc += 'aiueo'.includes(el) ? 1 : 0, 0);

// Top Clever
// https://www.codewars.com/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/54ff6303c502952f8d00023e
// const getCount = (str) => (str.match(/[aeiou]/g) || []).length

console.log(getCount('abracadabra'));
