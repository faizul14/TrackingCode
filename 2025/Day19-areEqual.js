// FMP Track Coding Chalenge 2025
// Day 19/365
// https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/?envType=daily-question&envId=2025-02-05

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    // if (s1 === s2) return true
    // if (s1.length !== s2.length) return false
    // let swap = 2

    // for (let i of s1) {
    //     if (swap <= 0 && (Math.abs(s2.indexOf(i) - s1.indexOf(i)) !== 1)) return false
    //     if (!s2.includes(i)) return false
    //     if (s2.includes(i) && (s2.indexOf(i) !== s1.indexOf(i))) swap--
    // }
    // swap
    // return true

    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;

    let diff = [];

    // Cari posisi di mana kedua string berbeda
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }
    diff

    // Jika tidak ada atau lebih dari dua perbedaan, return false
    if (diff.length !== 2) return false;

    // Pastikan swapping dua indeks tersebut akan membuat string sama
    let [i, j] = diff;
    return s1[i] === s2[j] && s1[j] === s2[i];
};

console.log(
    areAlmostEqual('bank', 'kanb')
    // areAlmostEqual('abcd', 'dcba')
);
