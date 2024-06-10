// FMP Track Coding Chalenge 2024
// Day 60/366
// https://www.codewars.com/kata/52449b062fb80683ec000024/

// const makeCapitalOnStartChar = word => word.split('').map((el, idx, _) => idx === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
// get insight from discussion, and like it cause not make lopping again, and make effisien performe
const makeCapitalOnStartChar = word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()

const formatHastag = word => `#${word}`

function generateHashtag(str) {
    str = str.split(' ').filter(el => el !== '') || ''
    const checkLength = str.join('').length
    if (checkLength > 140 || checkLength === 0) { return false }
    str = str.map(el => makeCapitalOnStartChar(el)).join('')
    const format = formatHastag(str)
    return format.length > 140 ? false : format
}


console.log(
    generateHashtag(
        ' Hello there thanks for trying my Kata'
        // ''
        // "a".repeat(139)
    )
);

console.log(
    'a'.substring
);
