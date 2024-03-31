// FMP Track Coding Chalenge 2024
// Day 29/366
// https://www.codewars.com/kata/5556282156230d0e5e000089/
// function DNAtoRNA(dna) {
//     // create a function which returns an RNA sequence from the given DNA sequence
//     // dna = dna.replace(/T/g, 'U')
//     // return dna
//     dna = dna.split('')
//     for (let i = 0; i < dna.length; i++) {
//         dna[i] = dna[i] === 'T' ? 'U' : dna[i]
//     }
//     return dna.join('')
// }

const DNAtoRNA = dna => dna.replace(/T/g, 'U')

console.log(
    DNAtoRNA('GCAT')
);
