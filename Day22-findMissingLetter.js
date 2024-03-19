// FMP Track Coding Chalenge 2024
// Day 22/366
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/

// function findMissingLetter(array) {
//     let resultMissingChart = ''
//     array = array.map(a => a.charCodeAt())
//     for (let i = 0; i < array.length - 1; i++) {
//         if (Math.abs(array[i] - array[i + 1]) !== 1) {
//             resultMissingChart = array[i] + 1
//             break
//         }
//     }
//     return String.fromCharCode(resultMissingChart);
// }

// maybe this solution not best practice but i am just writing solution on one line code,
// not recomended an maybe you can pertimbangakan code solution on top.
const findMissingLetter = array => String.fromCharCode((parseInt(array.map(a => a.charCodeAt()).filter((_, ind, arr) => Math.abs(arr[ind] - (arr[ind + 1] || 0)) === 2)) + 1))



console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));

