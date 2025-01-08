// FMP Track Coding Chalenge 2024
// Day 31/366
// https://www.codewars.com/kata/56e23f98bf8f6e9aed000367/train/javascript

const stringValue = str => {
    const resultStringValue = str.charCodeAt() - (/[a-z]/g.test(str) ? 96 : 38)
    return resultStringValue
}

const valueToString = value => {
    value += (value <= 26 ? 96 : 38)
    const result = String.fromCharCode(value)
    return result
}


function combat(s1, s2) {
    let result = ''
    s1 = s1.split('').map(a => stringValue(a))
    s2 = s2.split('').map(a => stringValue(a))

    while (s1.length !== 0 && s2.length !== 0) {
        if (s1[0] === s2[0]) {
            s1 = s1.slice(1)
            s2 = s2.slice(1)
            continue
        }
        if (s1[0] > s2[0]) {
            s2 = s2.slice(1)
            s1[0] = Math.round(s1[0] / 3)
            continue
        }
        s1 = s1.slice(1)
        s2[0] = Math.round(s2[0] / 3)
    }

    s1 = s1.length !== 0 ? s1.map(a => valueToString(a)) : s1
    s2 = s2.length !== 0 ? s2.map(a => valueToString(a)) : s2

    result = s1.length === s2.length ? 'Draw' : s1.length !== 0 ? `Winner: s1(${s1.join('')})` : `Winner: s2(${s2.join('')})`

    return result
}


console.log(
    combat("dog", "cat")
);

console.log(
    combat(
        "abcde", "fghij"
    )
);

