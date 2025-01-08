// FMP Track Coding Chalenge 2024
// Day 98/366
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/

// Return the output array, and ignore all non-op characters
function parse(data) {
    const dataOriginal = data.replace(/[^idso]/gi, '').split('')
    const result = []
    let trackValue = 0

    for (let i of dataOriginal) {
        if (i === 'i') {
            trackValue += 1
        }
        if (i === 'd') trackValue--
        if (i === 's') trackValue *= trackValue
        if (i === 'o') result.push(trackValue)
    }
    return result
}
console.log(
    parse('iiisxxxdoso')
);

console.log(Math.pow(3));
