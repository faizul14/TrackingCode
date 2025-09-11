// FMP Track Coding Chalenge 2025
// Day 60/365
// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */

// solusi inbi kena Time Limit karena (O(N! * M)), tetapi masih bisa berhasil.
// var findSubstring = function (s, words) {
//     let result = []
//     const arr = permutation(words).map(el => el.join(''))
//     arr

//     console.log(s.includes(arr[1]));
//     for (let i of arr) {
//         const length = i.length
//         for (let j = 0; j < s.length - (length - 1); j++) {
//             const tempValue = s.split('').splice(j, length).join('')
//             if (arr.join(' ').includes(tempValue)) {
//                 result.push(j)
//             }
//         }
//     }

//     return [...new Set(result)]

// };

// function permutation(arr) {
//     let result = []

//     const backtracking = (value, tempArr) => {
//         if (tempArr.length === 0) {
//             result.push(value)
//             return
//         }

//         for (let i = 0; i < tempArr.length; i++) {
//             let newValue = [...value, tempArr[i]]
//             let newTempArr = [...tempArr.slice(0, i), ...tempArr.slice(i + 1)]
//             backtracking(newValue, newTempArr)
//         }
//     }

//     backtracking([], arr)
//     return result
// }


var findSubstring = function (s, words) {
    if (!s || words.length === 0) return []

    const wordLen = words[0].length
    const totalLen = wordLen * words.length
    const wordCount = {}

    // hitung frekuensi tiap word
    for (let w of words) {
        wordCount[w] = (wordCount[w] || 0) + 1
    }

    const result = []

    // kita mulai sliding dari offset 0 sampai wordLen-1
    for (let i = 0; i < wordLen; i++) {
        let left = i
        let count = 0
        let seen = {}

        for (let right = i; right + wordLen <= s.length; right += wordLen) {
            let word = s.substring(right, right + wordLen)

            if (wordCount[word] !== undefined) {
                seen[word] = (seen[word] || 0) + 1
                count++

                // kalau frekuensi melebihi, geser window
                while (seen[word] > wordCount[word]) {
                    let leftWord = s.substring(left, left + wordLen)
                    seen[leftWord]--
                    count--
                    left += wordLen
                }

                // kalau jumlah kata sesuai
                if (count === words.length) {
                    result.push(left)
                }
            } else {
                // reset kalau ketemu kata yang gak ada di words
                seen = {}
                count = 0
                left = right + wordLen
            }
        }
    }

    return result
};



// const s = 'barfoothefoobarman'
// const words = ["foo", "bar"]

// s = "wordgoodgoodgoodbestword"
// words = ["word", "good", "best", "word"]

s = "barfoofoobarthefoobarman"
words = ["bar", "foo", "the"]
console.log(
    findSubstring(s, words)
);
