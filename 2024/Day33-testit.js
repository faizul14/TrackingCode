// FMP Track Coding Chalenge 2024
// Day 33/366
// https://www.codewars.com/kata/56d9292cc11bcc3629000533/

const resultChar = (charOne, charTwo) => {
    const findMinimum = charOne < charTwo ? charOne : charTwo
    let countChar = Math.abs(charValue(charOne) - charValue(charTwo)) + 1
    countChar = Math.ceil(countChar / 2)
    return String.fromCharCode(charValue(findMinimum) + (countChar - 1) + 96)
}

const charValue = char => {
    return (char.charCodeAt() - 96)
}

function testit(s) {
    let result = ''
    const length = s.length % 2 === 0 ? s.length : s.length - 1

    for (let i = 0; i < length; i += 2) {
        const elementResult = resultChar(s[i], s[i + 1])
        result = result.concat(elementResult)
    }
    if (s.length % 2 === 1) {
        result = result.concat(s[length])
    }
    return result
}

// feel stupid on compare this solution, LOL 
// function testit(s) {
//     return s.replace(/../g, (s) =>
//         String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2));
// }

console.log(
    testit('bc'),
    testit('aaaaaa'),
    testit('a'),
    testit('hheellllo')
);
