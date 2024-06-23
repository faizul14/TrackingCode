// FMP Track Coding Chalenge 2024
// Day 65/366 => Need Fixing
// https://www.codewars.com/kata/5629db57620258aa9d000014/

const removeUpperCase = word => word
    .replace(/[^a-z]/g, '')

const shortWord = word => word
    .split('')
    .sort((a, b) => a.charCodeAt() - b.charCodeAt())
    .join('')

const accCarachter = (idx, word) => word.match(new RegExp(word[idx], 'g')).length

const formatToObj = (s, char, length) => {
    return {
        s: s,
        char: char,
        length: length
    }
}

const proccesWord = (word, s) => {
    const tempFor = []
    let trackChar = ''
    let idx = 0
    while (idx < word.length) {
        if (trackChar.includes(word[idx])) {
            idx++
            continue
        }
        const lengthCharNow = accCarachter(idx, word)
        if (lengthCharNow > 1) {
            tempFor.push(
                formatToObj(s, word[idx], lengthCharNow)
            )
            trackChar = trackChar.concat(word[idx])
        }
        idx++
    }
    return tempFor
}

const formatReturn = (s1, s2) => {
    let temptMergeS = [...s1, ...s2]
    temptMergeS
    temptMergeS = temptMergeS.sort((a, b) => b.length - a.length)
    temptMergeS
    let result = ''
}

function mix(s1, s2) {
    // your code
    s1 = removeUpperCase(s1)
    s2 = removeUpperCase(s2)
    s1 = shortWord(s1)
    s2 = shortWord(s2)
    s1 = proccesWord(s1, 1)
    s2 = proccesWord(s2, 2)
    s1
    s2
    return formatReturn(s1, s2)


}

console.log( // output: 2:eeeee/2:yy/=:hh/=:rr
    mix(
        "Are they here", "yes, they are here"
    )
);
























/**
 * sample
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
 */