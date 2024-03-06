// FMP Track Coding Chalenge 2024
// Day 15/366
// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    text = text.toLowerCase().split(' ').join('')
    const arrAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let result = []
    for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < arrAlphabet.length; j++) {
            if (arrAlphabet[j] === text[i]) {
                result.push(j + 1)
                break;
            }
        }
    }
    return result.join(' ');
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
