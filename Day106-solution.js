// FMP Track Coding Chalenge 2024
// Day 106/366 => Need fixing
// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/

const removeSpace = text => {
    while (true) {
        if (text[text.length - 1] !== '') {
            break
        }
        text.splice(-1)
    }
    text
    return text
}

function solution(text, markers) {
    // TODO

    text = text
        .split('\n')
        .map((el, idx, _) => el.split(`${markers[idx]}`)[0])
        .join('\n')
        // .split(' ')
        // .map(el => removeSpace(el))


        text
    // .split(' ')
    // .filter(el => el !== '')
    // .join('')

    // while (true) {
    //     if (text[text.length - 1] !== '') {
    //         break
    //     }
    //     text.splice(-1)
    // }
    return text
}

console.log(
    solution('aa + bb\ncc - dd\nee  * ff', [' + ', ' - ', ' *'])
    // solution('aa bb cc  ', [])
    // solution('aa # bb\ncc dd', ['#'])
);


