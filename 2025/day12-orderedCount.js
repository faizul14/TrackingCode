// FMP Track Coding Chalenge 2025
// Day 12/365
// https://www.codewars.com/kata/57a6633153ba33189e000074/

const orderedCount = function (text) {
    // Implement me!
    const result = []
    const uniq = [...new Set(text)]
    for (let i of uniq) {
        const len = text.match(new RegExp(i, 'g')).length
        len
        const element = [i, len]
        result.push(element)
    }
    uniq
    return result;
}

console.log(
    orderedCount('abracadabra')
);


console.log(
    'faezol mp'.match(/a/g).length
);
