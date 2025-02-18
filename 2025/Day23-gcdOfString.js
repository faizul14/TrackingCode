// FMP Track Coding Chalenge 2025
// Day 23/365 => Need fixing
// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

// const checkL = (str, result) => str.replace(new RegExp(result, 'g'), '').length
// var gcdOfStrings = function (str1, str2) {
//     if (!checkL(str1, str2)) return str2
//     if (!checkL(str2, str1)) return str1
//     let result = []
//     let idx = 0
//     while (true) {
//         if (str1[idx] !== str2[idx]) break
//         result.push(str1[idx])
//         idx++
//         const [cl1, cl2] = [checkL(str1, result.join('')), checkL(str2, result.join(''))]
//         if (cl1 === cl2) return result.join('')
//     }
//     result = result.join('')
//     const check1 = checkL(str1, result)
//     const check2 = checkL(str2, result)
//     return !check1 && !check2 ? result : ''
// };

var gcdOfStrings = function (str1, str2) {
    if (str1 + str2 !== str2 + str1) return ""; // Jika tidak bisa membentuk pola yang sama, tidak ada GCD
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); // Fungsi GCD menggunakan Euclidean Algorithm
    return str1.slice(0, gcd(str1.length, str2.length)); // Mengambil substring berdasarkan GCD panjangnya
};
console.log(
    gcdOfStrings(
        'ABABAB', 'ABAB',
    ),
    gcdOfStrings(
        'ABC', 'ABCABC',
    ),
    gcdOfStrings(
        'LEETCODE', 'CODE',
    ),
    gcdOfStrings(
        'TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
    )
);
