// FMP Track Coding Chalenge 2025
// Day 26/365
// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const result = []
    const vowel = 'aiueo'
    let getVowel = s.match(new RegExp(`[${vowel}]`, 'gi'))
    if (getVowel === null) {
        return s
    }
    getVowel.reverse()
    let idxVowel = 0

    for (let i = 0; i < s.length; i++) {
        let check = getVowel.includes(s[i])
        if (check) {
            result.push(getVowel[idxVowel])
            idxVowel++
            continue
        }
        result.push(s[i])
    }
    return result.join('')
};

var reverseVowels = function (s) {
    const vowel = new Set('aiueoAIUEO')
    let left = 0
    let right = s.length - 1
    let res = s.split('')

    while (left < right) {
        if (!vowel.has(res[left])) {
            left++
            continue
        }
        if (!vowel.has(res[right])) {
            right--
            continue
        }

        [res[left], res[right]] = [res[right], res[left]]

        left++
        right--
    }
    return res.join('')
};

console.log(
    reverseVowels('kkkk'),
    reverseVowels('IceCreAm'),
);
