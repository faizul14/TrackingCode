// FMP Track Coding Chalenge 2025
// Day 39/365
// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/

function chooseBestSum(t, k, ls) {
    let best = null

    function combine(start = 0, path = []) {
        if (path.length === k) {
            let sum = path.reduce((a, b) => a + b, 0)
            if (sum <= t) {
                if (best === null || sum > best) {
                    best = sum
                }
            }
            return
        }

        for (let i = start; i < ls.length; i++) {
            combine(i + 1, path.concat(ls[i]))
        }
    }

    combine()
    return best
}


var ts = [50, 55, 56, 57, 58]
console.log(
    chooseBestSum(163, 3, ts)
);
