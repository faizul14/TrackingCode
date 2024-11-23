// FMP Track Coding Chalenge 2024
// Day 130/366
// https://www.codewars.com/kata/51e056fe544cf36c410000fb/

function topThreeWords(text) {
    if (!/[a-zA-Z]/gi.test(text)) return []
    const result = []
    const word = []
    text
    text = text.replace(/[#/\\.,]/g, "")
    text
    const proccesText = text.split(" ")
    proccesText
    for (let i of proccesText) {
        if (i === '') continue
        const accWordInSame = text.match(new RegExp(`\\b${i}\\b`, "gi"))
        const wordObj = {
            word: i,
            sum: accWordInSame !== null ? accWordInSame.length : 0
        }
        word.push(wordObj)
    }
    word
    word.sort((a, b) => b.sum - a.sum)

    let idx = 0
    while (result.length < 3) {
        if (word[idx] === undefined) break
        if (!result.includes(word[idx].word)) {
            result.push(word[idx].word.toLowerCase())
        }

        idx++
    }
    result
    // return [];
    return result
}

console.log(
    topThreeWords(
        `In a village of La Mancha, the name of which I have no desire to call to
     mind, there lived not long since one of those gentlemen that keep a lance
     in the lance-rack, an old buckler, a lean hack, and a greyhound for
     coursing. An olla of rather more beef than mutton, a salad on most
     nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
     on Sundays, made away with three-quarters of his income.`
    ),
    topThreeWords("a a a  b  c c  d d d d  e e e e e"),
    topThreeWords("a a a  b  c c  d d d d  e e e e e"),
    topThreeWords("a a a c b b"),
    topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
    topThreeWords("  //wont won't won't "),
    topThreeWords("  , e   .. "),
    topThreeWords("  ...  "),
    topThreeWords("  '  "),
);

// console.log(
//     `In a village of La Mancha, the name of which I have no desire to call to
//  mind, there lived not long since one of those gentlemen that keep a lance
//  in the lance-rack, an old buckler, a lean hack, and a greyhound for
//  coursing. An olla of rather more beef than mutton, a salad on most
//  nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
//  on Sundays, made away with three-quarters of his income.`.match(new RegExp('\\bfmp\\b', 'gi'))
// );
const test = [1, 2, 3]
console.log(
    // test[1[]]
    // "  , e   .. ",
    !/[a-z]/gi.test("  '  ")
);




