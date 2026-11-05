// FMP Track 2026
// Day -/366
// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
// const checkUnique = (arr) => {
//     let sumUnique = 0
//     let unique = ""
//     for (let i = 0; i < arr.length; i++) {
//         console.log(unique)
//         if(unique[unique.length - 1] === arr[i] || unique.includes(arr[i])) {
//             console.log("unique", unique)
//             unique = unique.substring(unique.indexOf(arr[i]) + 1)
//             console.log("unique", unique)
//         }
//         if (!unique.includes(arr[i])) {
//             unique += arr[i]
//         }
//         sumUnique = unique.length > sumUnique ? unique.length : sumUnique
//     }
//     console.log(unique)
//     return sumUnique
// }

const checkUnique = (arr) => {
    let char = [...arr]
    const seen = new Set()

    let left = 0
    let maxLength = 0

    for (let right = 0; right < char.length; right++) {
        while (seen.has(char[right])) {
            seen.delete(char[left])
            left++
        }
        seen.add(char[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }

    return maxLength
}

var lengthOfLongestSubstring = function(s) {
    console.log(checkUnique(s))
    return checkUnique(s)
};


lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("1R1T7");
lengthOfLongestSubstring("cdcda");