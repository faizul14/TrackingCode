// FMP Track Coding Chalenge 2024
// Day 134/366
// https://www.codewars.com/kata/5ba38ba180824a86850000f7/

function solve(arr) {
    let set = [...new Set(arr)].length

    let idx = 0
    while (arr.length !== set) {
        let element = arr[idx]
        const len = arr.filter(el => el === element).length
        if (len > 1) {
            arr.splice(arr.indexOf(element), 1)
        } else {
            idx++
        }
    }
    return arr
}

console.log(
    solve([3, 4, 4, 3, 6, 3])
);

console.log(
    /o/g.test('test')
);

arr = [3, 4, 4, 3, 6, 3]
idx = arr.indexOf(3)
idx
arr.splice(idx, 1)
console.log(
    arr
);



