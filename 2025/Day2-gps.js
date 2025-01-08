// FMP Track Coding Chalenge 2025
// Day 2/365
// https://www.codewars.com/kata/56484848ba95170a8000004d/

const count = (el, s) => Math.abs((3600 * el) / s)

function gps(s, x) {
    // your code
    if (x.length < 2) return 0
    const cah = [] //count average hourly
    x.map((el, idx, arr) => {
        if (arr[idx + 1] !== undefined) {
            const delta_distance = Math.abs(el - arr[idx + 1])
            const countAH = count(delta_distance, s)
            cah.push(countAH)
        }
    })
    return parseInt(Math.max(...cah))
}

var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
var s = 20;
console.log(
    gps(s, x)
);
