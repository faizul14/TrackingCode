// FMP Track Coding Chalenge 2024
// Day 114/366
// https://www.codewars.com/kata/52223df9e8f98c7aa7000062/

const proccesRot13 = char => {
    if (/[^a-zA-Z]/.test(char)) return char

    const minusByChar = /[A-Z]/.test(char) ? 64 : 96
    const uniqode = (char.charCodeAt() - minusByChar) + 13
    const fixUniCode = uniqode > 26 ? uniqode - 26 : uniqode
    uniqode
    fixUniCode
    return String.fromCharCode(minusByChar + fixUniCode)

}

const rot13 = (str) => str
    .split('')
    .map(el => proccesRot13(el))
    .join('')

// console.log( // ROT13 example.
//     rot13("EBG13 rknzcyr.")
// );

console.log( // Guvf vf zl svefg EBG13 rkprepvfr!
    rot13("This is my first ROT13 excercise!")
);


// console.log(
//     'E'.charCodeAt() + 13,
//     String.fromCharCode(82),
//     proccesRot13('r'),
//     String.fromCharCode(97)
// );

// console.log(
//     'r'.charCodeAt(),
//     'f'.charCodeAt(),
//     String.fromCharCode()
// );


// A - Z < > 65 - 90
// a - z < > 97 - 122

