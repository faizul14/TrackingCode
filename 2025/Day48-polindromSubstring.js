// FMP Track Coding Chalenge 2025
// Day 48/365
// https://leetcode.com/problems/longest-palindromic-substring/

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//     const subString = [];

//     for (let i = 0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             subString.push(s.substring(i, j))
//         }
//     }


//     for (let i = 0; i < subString.length; i++) {
//         if (subString[i].length === 1) continue
//         const reverse = subString[i].split('').reverse().join('')        
//         if (subString[i] === reverse) return subString[i]
//     }
// };

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (!s || s.length < 1) return "";

    let result = "";

    for (let i = 0; i < s.length; i++) {
        let oddPal = expandFromCenter(s, i, i);     // Odd length
        let evenPal = expandFromCenter(s, i, i + 1); // Even length

        let longer = oddPal.length > evenPal.length ? oddPal : evenPal;

        if (longer.length > result.length) {
            result = longer;
        }
    }

    return result;


};

function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.substring(left + 1, right);
}



console.log(
    longestPalindrome('babad')
);

console.log(
    'ba' === 'ab'
);

