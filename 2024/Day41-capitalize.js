// FMP Track Coding Chalenge 2024
// Day 41/366
// https://www.codewars.com/kata/59cfc000aeb2844d16000075/

const MagicCapital = (arr, isEven) => arr.split('').map((el, index, _) => isEven ? index % 2 === 0 ? el.toUpperCase() : el : index % 2 !== 0 ? el.toUpperCase() : el).join('')
const capitalize = s => [MagicCapital(s, true), MagicCapital(s, false)]

// function capitalize(s) {
//     s = s.split('')
//     const genapCapital = s.map((el, index, _) => index % 2 === 0 ? el.toUpperCase() : el).join('')
//     const ganjilCapital = s.map((el, index, _) => index % 2 !== 0 ? el.toUpperCase() : el).join('')
//     return [genapCapital, ganjilCapital];
// };

console.log(
    capitalize(
        'abracadabra'
    )
);