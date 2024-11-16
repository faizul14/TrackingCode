// FMP Track Coding Chalenge 2024
// Day 125/366
// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/

function longestConsec(strarr, k) {
    // your code
    if (strarr.length <= 0 || strarr.length < k || k <= 0) return ""
    let result = ""

    for (let i = 0; i < strarr.length; i++) {
        i
        let idx = 1
        let idx2 = i
        let temp = ""
        while (idx <= k) {
            temp += strarr[idx2] || ''
            // break
            idx++
            idx2++
        }
        result = temp.length > result.length ? temp : result
    }
    return result
}

console.log(
    // longestConsec([], 3),
    // longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
    longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)
    // longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)
);
