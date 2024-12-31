// FMP Track Coding Chalenge 2024
// Day 140/366
// https://www.codewars.com/kata/5413759479ba273f8100003d/

reverse = function (array) {
    // TODO: program me!
    const resultArr = []
    let idx = array.length - 1
    while (resultArr.length !== array.length) {
        resultArr.push(array[idx])
        idx--
        // break
    }
    return resultArr
}

console.log(
    reverse([1, 2, 3])
);
