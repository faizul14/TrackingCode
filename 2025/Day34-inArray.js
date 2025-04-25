// FMP Track Coding Chalenge 2025
// Day 34/365
// https://www.codewars.com/kata/550554fd08b86f84fe000a58/

function inArray(array1, array2) {
    //...
    let result = []
    const arrJoin = array2.join(' ')
    for (let i of array1) {
        const check = (arrJoin.match(new RegExp(i, 'gi')) || []).length
        if (check) result.push(i)
    }
    return result.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
a1 = ["live", "strong", "arp"]

console.log(
    inArray(a1, a2)
);