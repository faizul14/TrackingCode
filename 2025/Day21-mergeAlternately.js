// FMP Track Coding Chalenge 2025
// Day 21/365
// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {

    let checkLS = word1.length - word2.length
    const [wordL, wordS] = [checkLS < 0 ? word2 : word1, checkLS < 0 ? word1 : word2]
    let resMerge = ''
    let idx = 0
    for (let _ of wordS) {
        const merger = word1[idx].concat(word2[idx])
        resMerge = resMerge.concat(merger)
        idx++
    }

    checkLS = Math.abs(checkLS)
    if (checkLS > 0) resMerge = resMerge.concat(wordL.slice(wordL.length - checkLS))
    return resMerge
};

// var mergeAlternately = function (word1, word2) {
//     const minW = Math.min(word1.length, word2.length)
//     const maxW = Math.max(word1.length, word2.length)
//     const longWord = word1.length > word2.length ? word1 : word2
//     const result = []

//     for (let i = 0; i < minW; i++) {
//         result.push(word1[i], word2[i])
//     }

//     for (let i = minW; i < maxW; i++) {
//         result.push(longWord[i])
//     }

//     return result.join('')
// };

console.log(
    mergeAlternately(
        'cdf', 'a'
    ),
    mergeAlternately(
        'abcder', 'pq'
    ),
    mergeAlternately(
        'abc', 'pqr'
    ),
    mergeAlternately(
        'ab', 'pqrs'
    ),
    mergeAlternately(
        'cf', 'eee'
    )
);
