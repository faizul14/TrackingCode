// FMP Track Coding Chalenge 2025
// Day 30/365
// https://www.codewars.com/kata/52de553ebb55d1fca3000371/

function findMissing(list) {
    const set = new Set(list)
    let result = 0
    let [diff1, diff2] = [Math.abs(list[0] - list[1]), Math.abs(list[1] - list[2])]

    for (let i = 2; i < list.length; i++) {
        if (list[i + 1] === undefined) {
            diff1 = diff1 < diff2 ? diff1 : diff2
            break
        }

        const diff = Math.abs(list[i] - list[i + 1])
        diff1 = diff === diff1 ? diff1 : diff2
        break
    }

    for (let i = 0; i < list.length; i++) {
        const finds = list[i] + diff1
        if (!set.has(finds)) {
            result = finds
            break
        }
    }
    return result;
}

console.log(
    findMissing([1, 3, 4])
);


