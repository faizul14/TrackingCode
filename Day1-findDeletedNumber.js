// FMP Track Coding Chalenge 2025
// Day 1/366
// https://www.codewars.com/kata/595aa94353e43a8746000120/

function findDeletedNumber(arr, mixArr) {
    // your code
    mixArr.map(el => arr.splice(arr.indexOf(el), 1))
    return arr[0] || 0
}

console.log(
    findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5])
);

let arrtest = [1, 2, 3]
arrtest.splice(arrtest.indexOf(2), 1)
console.log(
    arrtest,
    arrtest.indexOf(2)
);


