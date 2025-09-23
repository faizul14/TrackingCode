// FMP Track Coding Chalenge 2025
// Day 62/365
// https://www.codewars.com/kata/559536379512a64472000053/train/javascript

const shakeString = (s, n) => {
    // String.fromCharCode(s.charCodeAt() + n)
    const digitNumerikAlfabet = s.charCodeAt() + n
    const check = digitNumerikAlfabet > 90 ? (65 + (digitNumerikAlfabet - 90) - 1) : digitNumerikAlfabet
    check
    return String.fromCharCode(check)
}
const shakeDigit = (d) => Math.abs(9 - d)

function playPass(s, n) {
    // your code
    const result = []
    s = s.toUpperCase()
    s
    const patterString = new RegExp('[A-Z]')
    const patterDigit = new RegExp('[0-9]')
    console.log('S'.match(patterString));

    for (let i of s) {
        i
        if (i.match(patterString) !== null) {
            // for string
            const shake = shakeString(i, n)
            shake
            result.push(shake)
            continue
        }

        if (i.match(patterDigit) !== null) {
            i
            // for digit or Number
            const shake = shakeDigit(i)
            result.push(shake)
            continue
        }
        result.push(i)
    }

    result

    for (let i in result) {
        i
        if (result[i].toString().match(patterString) !== null) {
            const shakeByOddOrEven = i % 2 === 1 ? result[i].toLowerCase() : result[i]
            result[i] = shakeByOddOrEven
            continue
        }
    }

    return result.reverse().join('')
}


console.log(
    playPass("I LOVe YOU!!!", 1)
    // playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)
);

console.log('Z'.charCodeAt());
console.log(String.fromCharCode(65));
console.log(shakeString('A', 3));



