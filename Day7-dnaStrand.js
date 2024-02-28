// FMP Track Coding Chalenge 2024
// Day 7/366
// https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// function dnaStrand(dna) {

//     dna = dna.split('')
//     for (let i = 0; i < dna.length; i++) {
//         if (a === 'A') {
//             dna[i] = 'T'
//             continue
//         }

//         if (dna[i] === 'T') {
//             dna[i] = 'A'
//             continue
//         }

//         if (dna[i] === 'C') {
//             dna[i] = 'G'
//             continue
//         }

//         if (dna[i] === 'G') {
//             dna[i] = 'C'
//             continue
//         }
//     }
//     return dna.join('')
// }

// const dnaStrand = ([...dna]) => dna.map(a => a = a === 'A' ? 'T' : a === 'T' ? 'A' : a === 'C' ? 'G' : 'C').join('')

const DNA = { A: 'T', T: 'A', C: 'G', G: 'C' }
const dnaStrand = ([...dna]) => dna.map(key => DNA[key]).join('');



console.log(dnaStrand('ACGA'));
