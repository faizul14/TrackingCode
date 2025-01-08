// FMP Track Coding Chalenge 2024
// Day 40/366
// https://www.codewars.com/kata/5813d19765d81c592200001a/
// Time Required 10 Minute

function dontGiveMeFive(start, end) {
    let result = 0
    const regex = new RegExp('5')
    for (let i = start; i <= end; i++) {
        const number = i
        if (regex.test(number.toString())) {
            continue
        }
        result++
    }
    return result;
}

console.log(
    dontGiveMeFive(
        // 4, 17
        1, 90
    )
);