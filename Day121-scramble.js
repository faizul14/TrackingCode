// FMP Track Coding Chalenge 2024
// Day 121/366
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/


// This solution kena Time Out karena banyak loop
// const isOke = (str, char) => str.includes(char)
// const countCharIsSame = (str1, str2, char) => str1.match(new RegExp(char, 'g')).length >= str2.match(new RegExp(char, 'g')).length

// function scramble(str1, str2) {
//     let idx = 0
//     while (true) {
//         if (!isOke(str1, str2[idx])) return false
//         if (!countCharIsSame(str1, str2, str2[idx])) return false

//         idx++
//         if (idx == str2.length - 1) break
//     }

//     return true;
// }

// This solution have optimization and free from Time Out
const countChar = str => {
    const charMap = {}
    for (let char of str) {
        charMap[char] = (charMap[char] || 0) + 1
    }
    return charMap
}

const scramble = (str1, str2) => {
    const str1Char = countChar(str1)
    const str2Char = countChar(str2)

    for (let char in str2Char) {
        if (!str1Char[char] || str1Char[char] < str2Char[char]) {
            return false
        }
    }
    return true
}

console.log(
    // scramble('rkqodlw', 'world'),
    // scramble('cedewaraaossoqqyt', 'codewars'),
    // scramble('katas', 'steak'),
    scramble('scriptjavx', 'javascript')
);