// FMP Track Coding Chalenge 2024
// Day 90/366
// https://www.codewars.com/kata/5375f921003bf62192000746/


const formatAabbreviate = str => str.length <= 3 ? str : `${str[0]}${str.length - 2}${str[str.length - 1]}`
const strTimesOne = (str, char) => str.split(`${char}`).map(el => formatAabbreviate(el)).join(`${char}`)

// This solution 1
// function abbreviate(string) {
//     // ...
//     let arrString = string.split(' ')
//     arrString = arrString.map(el => /[-,.]|/.test(el) ? strTimesOne(el, el.match(/[-,.]/)) : formatAabbreviate(el)).join(' ')
//     return arrString
// }

// This solution 2 => with one line
const abbreviate = (string) => string.split(' ').map(el => /[-,.]|/.test(el) ? strTimesOne(el, el.match(/[-,.]/)) : formatAabbreviate(el)).join(' ')


console.log(
    // abbreviate('elephant-ride')
    // abbreviate('internationalization')
    abbreviate('You need, need not want, to complete this code-wars mission')
);

console.log(
    strTimesOne('elephant-ride')
);