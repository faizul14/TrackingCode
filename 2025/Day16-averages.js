// FMP Track Coding Chalenge 2025
// Day 16/365
// https://www.codewars.com/kata/57d2807295497e652b000139/

function averages(numbers) {
    if(numbers.length <= 1 || numbers === null) return []
    const results = []
    numbers.map((el, idx, arr) => {
        if (idx < arr.length - 1) {
            const avg = (el + arr[idx + 1]) / 2
            results.push(avg)
        }
    })

    return results
}


console.log(
    averages([1, 3, 5, 1, -10])
);
